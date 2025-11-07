Running with gitlab-runner 18.2.0 (c24769e8)
  on Ionic Package Android Runner 8edcfcad2, system ID: r_grBV51LLoFR2
  feature flags: FF_USE_POD_ACTIVE_DEADLINE_SECONDS:false
Preparing the "kubernetes" executor
Using Kubernetes namespace: ionic-runners
Using Kubernetes executor with image 319312831725.dkr.ecr.us-west-2.amazonaws.com/appflow-runners/linux:2025.06 ...
Using attach strategy to execute scripts...
Using effective pull policy of [Always] for container build
Using effective pull policy of [Always] for container helper
Using effective pull policy of [Always] for container init-permissions
Using effective pull policy of [Always] for container metrics
Preparing environment
Waiting for pod ionic-runners/runner-8edcfcad2-project-0-concurrent-5-nsi6afp4 to be running, status is Pending
Running on runner-8edcfcad2-project-0-concurrent-5-nsi6afp4 via gitlab-runner-7dffd7b966-798h4...

Getting source from Git repository
Gitaly correlation ID: 
Fetching changes...
Initialized empty Git repository in /builds/xiang2025-coder/myapptest/.git/
Created fresh repository.
Checking out 1f789255 as detached HEAD (ref is main)...

Updating/initializing submodules...
Updated submodules

Executing "step_script" stage of the job script
$ pre-build
[07:53:25]: Building project....
$ run "fetch-updates"
Checking for build process updates...
$ run "build-android"
[07:53:28]: ---------------------------------
[07:53:28]: --- Step: add_extra_platforms ---
[07:53:28]: ---------------------------------
[07:53:28]: Setting '[:web]' as extra SupportedPlatforms
/builds/xiang2025-coder/myapptest/fastlane/outsystems/errors/detectors/pdm_plugins.rb:8: warning: character class has '-' without escape
/builds/xiang2025-coder/myapptest/fastlane/outsystems/errors/detectors/pdm_plugins.rb:15: warning: character class has '-' without escape
[07:53:28]: ------------------------------
[07:53:28]: --- Step: default_platform ---
[07:53:28]: ------------------------------
[07:53:28]: Driving the lane 'android build_android' 🚀
[07:53:28]: ---------------------------------
[07:53:28]: --- Step: prepare_environment ---
[07:53:28]: ---------------------------------
[07:53:28]: Setting default environment variables to tidy up logs. These can be overridden by setting them in Appflow.
[07:53:28]: 
[07:53:28]: Set COREPACK_ENABLE_AUTO_PIN=0 (Suppress yarn warnings)
[07:53:28]: -------------------------
[07:53:28]: --- Step: sentry_init ---
[07:53:28]: -------------------------
[07:53:28]: ----------------------------
[07:53:28]: --- Step: begin_building ---
[07:53:28]: ----------------------------
[07:53:28]: Began building @ 2025-11-07T07:53:28
[07:53:28]: ---------------------------
[07:53:28]: --- Step: build_summary ---
[07:53:28]: ---------------------------

+---------------------------------------------------+
|                   Build Summary                   |
+---------------------+-----------------------------+
| Runners Revision    | Latest                      |
| Job ID              | 10553960                    |
| Node.js version     | v20.19.3                    |
| Cordova CLI version | 12.0.0 (cordova-lib@12.0.2) |
| npm version         | 10.8.2                      |
| yarn version        | 1.22.22                     |
+---------------------+-----------------------------+

[07:53:29]: No build credential specified
[07:53:29]: ---------------------------------
[07:53:29]: --- Step: add_git_credentials ---
[07:53:29]: ---------------------------------
[07:53:29]: Writing git-credentials files
[07:53:29]: git-credentials successfully added to project
[07:53:29]: --------------------------------
[07:53:29]: --- Step: get_appflow_config ---
[07:53:29]: --------------------------------
[07:53:29]: Checking for appflow.config.json
[07:53:29]: Appflow config not detected
[07:53:29]: --------------------------------
[07:53:29]: --- Step: dependency_install ---
[07:53:29]: --------------------------------
[07:53:29]: ---------------------------
[07:53:29]: --- Step: set_java_home ---
[07:53:29]: ---------------------------
[07:53:29]: Try to detect the android gradle plugin version
[07:53:29]: ./build.gradle file not found in the project: using default Java version
[07:53:29]: ----------------------------------
[07:53:29]: --- Step: modify_gradle_config ---
[07:53:29]: ----------------------------------
[07:53:29]: No custom native config found... skipping
[07:53:29]: Building android (in /builds/xiang2025-coder/myapptest/./)...
[07:53:29]: -------------------------
[07:53:29]: --- Step: bundledebug ---
[07:53:29]: -------------------------
[07:53:29]: ▸ Downloading https://services.gradle.org/distributions/gradle-8.11.1-all.zip
[07:53:31]: ▸ .....................10%......................20%......................30%......................40%......................50%......................60%......................70%......................80%......................90%......................100%
[07:53:35]: ▸ Welcome to Gradle 8.11.1!
[07:53:35]: ▸ Here are the highlights of this release:
[07:53:35]: ▸ - Parallel load and store for Configuration Cache
[07:53:35]: ▸ - Java compilation errors at the end of the build output
[07:53:35]: ▸ - Consolidated report for warnings and deprecations
[07:53:35]: ▸ For more details see https://docs.gradle.org/8.11.1/release-notes.html
[07:53:35]: ▸ Starting a Gradle Daemon (subsequent builds will be faster)
[07:54:03]: ▸ > Configure project :app
[07:54:03]: ▸ WARNING: Using flatDir should be avoided because it doesn't support any meta-data formats.
[07:54:04]: ▸ [Incubating] Problems report is available at: file:///builds/xiang2025-coder/myapptest/android/build/reports/problems/problems-report.html
[07:54:04]: ▸ FAILURE: Build failed with an exception.
[07:54:04]: ▸ * What went wrong:
[07:54:04]: ▸ Could not determine the dependencies of task ':app:buildDebugPreBundle'.
[07:54:04]: ▸ > Could not resolve all dependencies for configuration ':app:debugRuntimeClasspath'.
[07:54:04]: ▸ > Could not resolve project :capacitor-android.
[07:54:04]: ▸ Required by:
[07:54:04]: ▸ project :app
[07:54:04]: ▸ > No matching variant of project :capacitor-android was found. The consumer was configured to find a library for use during runtime, preferably optimized for Android, as well as attribute 'com.android.build.api.attributes.AgpVersionAttr' with value '8.7.2', attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug', attribute 'org.jetbrains.kotlin.platform.type' with value 'androidJvm' but:
[07:54:04]: ▸ - No variants exist.
[07:54:04]: ▸ > Could not resolve project :capacitor-cordova-android-plugins.
[07:54:04]: ▸ Required by:
[07:54:04]: ▸ project :app
[07:54:04]: ▸ > No matching variant of project :capacitor-cordova-android-plugins was found. The consumer was configured to find a library for use during runtime, preferably optimized for Android, as well as attribute 'com.android.build.api.attributes.AgpVersionAttr' with value '8.7.2', attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug', attribute 'org.jetbrains.kotlin.platform.type' with value 'androidJvm' but:
[07:54:04]: ▸ - No variants exist.
[07:54:04]: ▸ * Try:
[07:54:04]: ▸ > Creating consumable variants is explained in more detail at https://docs.gradle.org/8.11.1/userguide/declaring_dependencies.html#sec:resolvable-consumable-configs.
[07:54:04]: ▸ > Review the variant matching algorithm at https://docs.gradle.org/8.11.1/userguide/variant_attributes.html#sec:abm_algorithm.
[07:54:04]: ▸ > Run with --stacktrace option to get the stack trace.
[07:54:04]: ▸ > Run with --info or --debug option to get more log output.
[07:54:04]: ▸ > Run with --scan to get full insights.
[07:54:04]: ▸ > Get more help at https://help.gradle.org.
[07:54:04]: ▸ Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.
[07:54:04]: ▸ You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.
[07:54:04]: ▸ For more on this, please refer to https://docs.gradle.org/8.11.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.
[07:54:04]: ▸ BUILD FAILED in 35s
[07:54:05]: -------------------------
[07:54:05]: --- Step: upload_logs ---
[07:54:05]: -------------------------
[07:54:06]: --------------------------------------
[07:54:06]: --- Step: sentry_capture_exception ---
[07:54:06]: --------------------------------------
+-------------------------------------------+
|               Lane Context                |
+-------------------+-----------------------+
| DEFAULT_PLATFORM  | ios                   |
| PLATFORM_NAME     | android               |
| LANE_NAME         | android build_android |
| GRADLE_BUILD_TYPE | debug                 |
+-------------------+-----------------------+
[07:54:06]: Shell command exited with exit status 1 instead of 0.
Downloading https://services.gradle.org/distributions/gradle-8.11.1-all.zip
.....................10%......................20%......................30%......................40%......................50%......................60%......................70%......................80%......................90%......................100%

Welcome to Gradle 8.11.1!

Here are the highlights of this release:
 - Parallel load and store for Configuration Cache
 - Java compilation errors at the end of the build output
 - Consolidated report for warnings and deprecations

For more details see https://docs.gradle.org/8.11.1/release-notes.html

Starting a Gradle Daemon (subsequent builds will be faster)

> Configure project :app
WARNING: Using flatDir should be avoided because it doesn't support any meta-data formats.
[Incubating] Problems report is available at: file:///builds/xiang2025-coder/myapptest/android/build/reports/problems/problems-report.html

FAILURE: Build failed with an exception.

* What went wrong:
Could not determine the dependencies of task ':app:buildDebugPreBundle'.
> Could not resolve all dependencies for configuration ':app:debugRuntimeClasspath'.
   > Could not resolve project :capacitor-android.
     Required by:
         project :app
      > No matching variant of project :capacitor-android was found. The consumer was configured to find a library for use during runtime, preferably optimized for Android, as well as attribute 'com.android.build.api.attributes.AgpVersionAttr' with value '8.7.2', attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug', attribute 'org.jetbrains.kotlin.platform.type' with value 'androidJvm' but:
          - No variants exist.
   > Could not resolve project :capacitor-cordova-android-plugins.
     Required by:
         project :app
      > No matching variant of project :capacitor-cordova-android-plugins was found. The consumer was configured to find a library for use during runtime, preferably optimized for Android, as well as attribute 'com.android.build.api.attributes.AgpVersionAttr' with value '8.7.2', attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug', attribute 'org.jetbrains.kotlin.platform.type' with value 'androidJvm' but:
          - No variants exist.

* Try:
> Creating consumable variants is explained in more detail at https://docs.gradle.org/8.11.1/userguide/declaring_dependencies.html#sec:resolvable-consumable-configs.
> Review the variant matching algorithm at https://docs.gradle.org/8.11.1/userguide/variant_attributes.html#sec:abm_algorithm.
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.

Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/8.11.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD FAILED in 35s


+-----------------------------------------------+
|               fastlane summary                |
+------+--------------------------+-------------+
| Step | Action                   | Time (in s) |
+------+--------------------------+-------------+
| 1    | add_extra_platforms      | 0           |
| 2    | default_platform         | 0           |
| 3    | prepare_environment      | 0           |
| 4    | sentry_init              | 0           |
| 5    | begin_building           | 0           |
| 6    | build_summary            | 1           |
| 7    | add_git_credentials      | 0           |
| 8    | get_appflow_config       | 0           |
| 9    | dependency_install       | 0           |
| 10   | set_java_home            | 0           |
| 11   | modify_gradle_config     | 0           |
| 💥   | bundledebug              | 35          |
| 13   | upload_logs              | 1           |
| 14   | sentry_capture_exception | 0           |
+------+--------------------------+-------------+

[07:54:06]: fastlane finished with errors
/usr/local/bundle/bin/fastlane: [!] Shell command exited with exit status 1 instead of 0. (FastlaneCore::Interface::FastlaneShellError)
Downloading https://services.gradle.org/distributions/gradle-8.11.1-all.zip
.....................10%......................20%......................30%......................40%......................50%......................60%......................70%......................80%......................90%......................100%

Welcome to Gradle 8.11.1!

Here are the highlights of this release:
 - Parallel load and store for Configuration Cache
 - Java compilation errors at the end of the build output
 - Consolidated report for warnings and deprecations

For more details see https://docs.gradle.org/8.11.1/release-notes.html

Starting a Gradle Daemon (subsequent builds will be faster)

> Configure project :app
WARNING: Using flatDir should be avoided because it doesn't support any meta-data formats.
[Incubating] Problems report is available at: file:///builds/xiang2025-coder/myapptest/android/build/reports/problems/problems-report.html

FAILURE: Build failed with an exception.

* What went wrong:
Could not determine the dependencies of task ':app:buildDebugPreBundle'.
> Could not resolve all dependencies for configuration ':app:debugRuntimeClasspath'.
   > Could not resolve project :capacitor-android.
     Required by:
         project :app
      > No matching variant of project :capacitor-android was found. The consumer was configured to find a library for use during runtime, preferably optimized for Android, as well as attribute 'com.android.build.api.attributes.AgpVersionAttr' with value '8.7.2', attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug', attribute 'org.jetbrains.kotlin.platform.type' with value 'androidJvm' but:
          - No variants exist.
   > Could not resolve project :capacitor-cordova-android-plugins.
     Required by:
         project :app
      > No matching variant of project :capacitor-cordova-android-plugins was found. The consumer was configured to find a library for use during runtime, preferably optimized for Android, as well as attribute 'com.android.build.api.attributes.AgpVersionAttr' with value '8.7.2', attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug', attribute 'org.jetbrains.kotlin.platform.type' with value 'androidJvm' but:
          - No variants exist.

* Try:
> Creating consumable variants is explained in more detail at https://docs.gradle.org/8.11.1/userguide/declaring_dependencies.html#sec:resolvable-consumable-configs.
> Review the variant matching algorithm at https://docs.gradle.org/8.11.1/userguide/variant_attributes.html#sec:abm_algorithm.
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.

Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/8.11.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD FAILED in 35s


Running after_script
Running after script...
$ run "clean-up"

Cleaning up project directory and file based variables

ERROR: Job failed: command terminated with exit code 1