document.addEventListener('DOMContentLoaded', () => {
    const backgroundImageInput = document.getElementById('background-image');
    const canvasWidthInput = document.getElementById('canvas-width');
    const canvasHeightInput = document.getElementById('canvas-height');
    const saveCanvasSizeBtn = document.getElementById('save-canvas-size-btn');
    const buttonsList = document.getElementById('buttons-list');
    const addBtn = document.getElementById('add-button');
    const buttonDetailsSection = document.getElementById('button-details-section');
    const buttonDetailsForm = document.getElementById('button-details-form');
    const buttonIdInput = document.getElementById('button-id');
    const buttonLabelInput = document.getElementById('button-label');
    const buttonWidthInput = document.getElementById('button-width');
    const buttonHeightInput = document.getElementById('button-height');
    const buttonImageInput = document.getElementById('button-image');
    const buttonUdpIpInput = document.getElementById('button-udp-ip');
    const buttonUdpPortInput = document.getElementById('button-udp-port');
    const buttonUdpMessageInput = document.getElementById('button-udp-message');
    const deleteButton = document.getElementById('delete-button');

    let buttons = [];

    // 加载按钮配置
    function loadButtons() {
        const savedButtons = localStorage.getItem('buttons');
        if (savedButtons) {
            buttons = JSON.parse(savedButtons);
        }
    }

    // 保存按钮配置
    function saveButtons() {
        localStorage.setItem('buttons', JSON.stringify(buttons));
    }

    // 保存画布尺寸
    function saveCanvasSize() {
        const width = canvasWidthInput.value;
        const height = canvasHeightInput.value;
        if (width && height) {
            localStorage.setItem('canvasSize', JSON.stringify({ width, height }));
            alert('画布尺寸已保存!');
        } else {
            alert('请输入有效的画布宽度和高度。');
        }
    }

    // 加载画布尺寸
    function loadCanvasSize() {
        const savedSize = localStorage.getItem('canvasSize');
        if (savedSize) {
            const { width, height } = JSON.parse(savedSize);
            canvasWidthInput.value = width;
            canvasHeightInput.value = height;
        }
    }

    // 渲染按钮列表
    function renderButtonsList() {
        buttonsList.innerHTML = '';
        buttons.forEach((button, index) => {
            const li = document.createElement('li');
            li.textContent = `按钮 ${index + 1}`;
            li.addEventListener('click', () => showButtonDetails(index));
            buttonsList.appendChild(li);
        });
    }

    // 显示按钮详情
    function showButtonDetails(index) {
        const button = buttons[index];
        buttonDetailsSection.style.display = 'block';
        buttonIdInput.value = index;
        buttonLabelInput.value = button.label || '';
        buttonWidthInput.value = button.width;
        buttonHeightInput.value = button.height;
        buttonImageInput.value = ''; // 清空文件输入
        buttonUdpIpInput.value = button.udpTarget.ip;
        buttonUdpPortInput.value = button.udpTarget.port;
        buttonUdpMessageInput.value = button.udpTarget.message;
    }

    // 初始化
    loadButtons();
    loadCanvasSize();
    renderButtonsList();

    backgroundImageInput.addEventListener('change', () => {
        const file = backgroundImageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                localStorage.setItem('backgroundImage', e.target.result);
                alert('背景图片已上传!');
            };
            reader.readAsDataURL(file);
        }
    });

    saveCanvasSizeBtn.addEventListener('click', saveCanvasSize);

    addBtn.addEventListener('click', () => {
        buttons.push({
            x: 50,
            y: 50,
            width: 100,
            height: 50,
            label: '新按钮',
            image: '',
            color: 'rgba(0, 255, 204, 0.5)',
            pressedColor: 'rgba(0, 255, 204, 0.8)',
            udpTarget: {
                ip: '127.0.0.1',
                port: 12345,
                message: 'Hello UDP'
            }
        });
        saveButtons();
        renderButtonsList();
        showButtonDetails(buttons.length - 1);
    });

    buttonDetailsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const index = buttonIdInput.value;
        const button = buttons[index];
        const file = buttonImageInput.files[0];

        function updateButtonData() {
            button.label = buttonLabelInput.value;
            button.width = parseInt(buttonWidthInput.value, 10);
            button.height = parseInt(buttonHeightInput.value, 10);
            button.customSize = true; // 标记为自定义尺寸
            button.udpTarget.ip = buttonUdpIpInput.value;
            button.udpTarget.port = buttonUdpPortInput.value;
            button.udpTarget.message = buttonUdpMessageInput.value;
            saveButtons();
            renderButtonsList();
            buttonDetailsSection.style.display = 'none';
            alert('按钮已保存');
            document.querySelector('iframe').contentWindow.location.reload();
        };

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                button.image = e.target.result;
                updateButtonData();
            };
            reader.readAsDataURL(file);
        } else {
            updateButtonData();
        }
    });

    deleteButton.addEventListener('click', () => {
        const index = buttonIdInput.value;
        buttons.splice(index, 1);
        saveButtons();
        renderButtonsList();
        buttonDetailsSection.style.display = 'none';
        alert('按钮已删除');
        document.querySelector('iframe').contentWindow.location.reload();
    });

    backgroundImageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('backgroundImage', e.target.result);
            alert('背景图片已保存');
            document.querySelector('iframe').contentWindow.location.reload();
        };
        reader.readAsDataURL(file);
    });

    saveCanvasSizeBtn.addEventListener('click', () => {
        localStorage.setItem('canvasWidth', canvasWidthInput.value);
        localStorage.setItem('canvasHeight', canvasHeightInput.value);
        alert('画布尺寸已保存');
        document.querySelector('iframe').contentWindow.location.reload();
    });
});