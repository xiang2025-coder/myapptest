document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('main-canvas');
    const ctx = canvas.getContext('2d');
    let backgroundImage = new Image();
    let buttons = [];
    let selectedButton = null;
    let isDragging = false;
    let isResizing = false;
    let offsetX, offsetY;
    let successMessage = '';
    let messageTimeout;
    let udpSocketId = null;

    // 引入 Capacitor 插件
    const { Udp } = Capacitor.Plugins;

    // 初始化 UDP 套接字
    async function initializeUdp() {
        try {
            const { socketId } = await Udp.create();
            udpSocketId = socketId;
            console.log('UDP Socket created with ID:', udpSocketId);
        } catch (error) {
            console.error('Failed to create UDP socket', error);
            showSuccessMessage('UDP功能初始化失败');
        }
    }

    // 按钮类
    class Button {
        constructor(x, y, width, height, imageSrc, color, pressedColor, label, customSize, udpTarget) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.image = new Image();
            this.image.src = imageSrc;
            this.color = color;
            this.pressedColor = pressedColor;
            this.isPressed = false;
            this.label = label || '';
            this.customSize = customSize || false;
            this.udpTarget = udpTarget; // { ip, port, message }
        }

        draw() {
            ctx.save();
            const isPng = this.image.src && (this.image.src.toLowerCase().endsWith('.png') || this.image.src.toLowerCase().startsWith('data:image/png'));
            if (!isPng) {
                ctx.fillStyle = this.isPressed ? this.pressedColor : this.color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
            if (this.image.src && this.image.complete && this.image.naturalWidth > 0) {
                const imageAspectRatio = this.image.naturalWidth / this.image.naturalHeight;
                let drawWidth = this.width;
                let drawHeight = this.height;
                if (this.width / this.height > imageAspectRatio) {
                    drawWidth = this.height * imageAspectRatio;
                } else {
                    drawHeight = this.width / imageAspectRatio;
                }
                const drawX = this.x + (this.width - drawWidth) / 2;
                const drawY = this.y + (this.height - drawHeight) / 2;
                ctx.drawImage(this.image, drawX, drawY, drawWidth, drawHeight);
            }
            ctx.restore();
            if (this.label) {
                ctx.save();
                ctx.font = '16px "Orbitron", sans-serif';
                ctx.fillStyle = '#00ffff';
                ctx.textAlign = 'center';
                ctx.shadowColor = '#00ffff';
                ctx.shadowBlur = 10;
                ctx.fillText(this.label, this.x + this.width / 2, this.y + this.height + 20);
                ctx.restore();
            }
        }

        isInside(x, y) {
            return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
        }

        async press() {
            this.isPressed = true;
            if (this.udpTarget && this.udpTarget.ip && this.udpTarget.port && this.udpTarget.message && udpSocketId !== null) {
                try {
                    const messageBase64 = btoa(this.udpTarget.message);
                    await Udp.send({
                        socketId: udpSocketId,
                        address: this.udpTarget.ip,
                        port: this.udpTarget.port,
                        buffer: messageBase64
                    });
                    showSuccessMessage(`UDP sent to ${this.udpTarget.ip}:${this.udpTarget.port}`);
                } catch (error) {
                    console.error('UDP send error:', error);
                    showSuccessMessage('UDP发送失败');
                }
            } else {
                 showSuccessMessage('按钮已按下 (无UDP配置)');
            }
            draw();
        }

        release() {
            this.isPressed = false;
            draw();
        }
    }

    function saveButtons() {
        const buttonsToSave = buttons.map(button => ({
            x: button.x,
            y: button.y,
            width: button.width,
            height: button.height,
            image: button.image.src,
            label: button.label,
            customSize: button.customSize,
            color: button.color,
            pressedColor: button.pressedColor,
            udpTarget: button.udpTarget
        }));
        localStorage.setItem('buttons', JSON.stringify(buttonsToSave));
    }

    function setBackgroundImage(src) {
        backgroundImage.src = src;
        backgroundImage.onload = () => {
            draw();
        };
    }

    function showSuccessMessage(message) {
        successMessage = message;
        if (messageTimeout) {
            clearTimeout(messageTimeout);
        }
        messageTimeout = setTimeout(() => {
            successMessage = '';
            draw();
        }, 2000);
        draw();
    }

    function resizeCanvas() {
        const savedSize = localStorage.getItem('canvasSize');
        if (savedSize) {
            const { width, height } = JSON.parse(savedSize);
            canvas.width = width;
            canvas.height = height;
        } else {
            const container = document.querySelector('.canvas-container');
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
        }
        draw();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (backgroundImage.complete) {
            const hRatio = canvas.width / backgroundImage.width;
            const vRatio = canvas.height / backgroundImage.height;
            const ratio = Math.max(hRatio, vRatio);
            const centerShift_x = (canvas.width - backgroundImage.width * ratio) / 2;
            const centerShift_y = (canvas.height - backgroundImage.height * ratio) / 2;
            ctx.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height,
                centerShift_x, centerShift_y, backgroundImage.width * ratio, backgroundImage.height * ratio);
        }
        buttons.forEach(button => button.draw());
        if (successMessage) {
            ctx.save();
            ctx.font = '24px Arial';
            ctx.fillStyle = 'rgba(0, 255, 100, 1)';
            ctx.textAlign = 'center';
            ctx.fillText(successMessage, canvas.width / 2, canvas.height / 2);
            ctx.restore();
        }
    }

    canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        selectedButton = null;
        for (let i = buttons.length - 1; i >= 0; i--) {
            if (buttons[i].isInside(x, y)) {
                selectedButton = buttons[i];
                selectedButton.press();
                isDragging = true;
                offsetX = x - selectedButton.x;
                offsetY = y - selectedButton.y;
                if (!selectedButton.customSize && x > selectedButton.x + selectedButton.width - 20 && y > selectedButton.y + selectedButton.height - 20) {
                    isResizing = true;
                    isDragging = false;
                }
                break;
            }
        }
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!selectedButton) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (isResizing) {
            selectedButton.width = Math.max(20, x - selectedButton.x);
            selectedButton.height = Math.max(20, y - selectedButton.y);
            draw();
        } else if (isDragging) {
            selectedButton.x = x - offsetX;
            selectedButton.y = y - offsetY;
            draw();
        }
    });

    canvas.addEventListener('mouseup', () => {
        if (selectedButton) {
            selectedButton.release();
            saveButtons();
        }
        isDragging = false;
        isResizing = false;
        selectedButton = null;
    });

    canvas.addEventListener('mouseleave', () => {
        if (selectedButton) {
            selectedButton.release();
            saveButtons();
        }
        isDragging = false;
        isResizing = false;
        selectedButton = null;
    });

    function init() {
        initializeUdp();
        const backgroundImageSrc = localStorage.getItem('backgroundImage') || 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop';
        setBackgroundImage(backgroundImageSrc);
        const savedButtonsData = JSON.parse(localStorage.getItem('buttons'));
        if (savedButtonsData && savedButtonsData.length > 0) {
            buttons = savedButtonsData.map(data => new Button(data.x, data.y, data.width, data.height, data.image, data.color, data.pressedColor, data.label, data.customSize, data.udpTarget));
        } else {
            buttons.push(new Button(50, 50, 100, 50, '', 'rgba(0, 255, 204, 0.5)', 'rgba(0, 255, 204, 0.8)', '示例按钮', false, { ip: '127.0.0.1', port: 12345, message: 'Hello UDP' }));
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
    }

    init();
});