Running with gitlab-runner 18.2.0 (c24769e8)
  on Ionic Package Android Runner 8edcfcad2, system ID: r_grBV51LLoFR2
  feature flags: FF_USE_POD_ACTIVE_DEADLINE_SECONDS:false
Preparing the "kubernetes" executor
Using Kubernetes namespace: ionic-runners
Using Kubernetes executor with image 319312831725.dkr.ecr.us-west-2.amazonaws.com/appflow-runners/linux:2025.06 ...
Using attach strategy to execute scripts...
Using effective pull policy of [Always] for container helper
Using effective pull policy of [Always] for container init-permissions
Using effective pull policy of [Always] for container metrics
Using effective pull policy of [Always] for container build
Preparing environment
Waiting for pod ionic-runners/runner-8edcfcad2-project-0-concurrent-1-c3ta7ucp to be running, status is Pending
Running on runner-8edcfcad2-project-0-concurrent-1-c3ta7ucp via gitlab-runner-7dffd7b966-798h4...

Getting source from Git repository
Gitaly correlation ID: 
Fetching changes...
Initialized empty Git repository in /builds/xiang2025-coder/myapptest/.git/
Created fresh repository.
Checking out f047427d as detached HEAD (ref is main)...

Updating/initializing submodules...
Updated submodules

Executing "step_script" stage of the job script
$ pre-build
[07:46:07]: Building project....
$ run "fetch-updates"
Checking for build process updates...
$ run "build-android"
[07:46:09]: ---------------------------------
[07:46:09]: --- Step: add_extra_platforms ---
[07:46:09]: ---------------------------------
[07:46:09]: Setting '[:web]' as extra SupportedPlatforms
/builds/xiang2025-coder/myapptest/fastlane/outsystems/errors/detectors/pdm_plugins.rb:8: warning: character class has '-' without escape
/builds/xiang2025-coder/myapptest/fastlane/outsystems/errors/detectors/pdm_plugins.rb:15: warning: character class has '-' without escape
[07:46:10]: ------------------------------
[07:46:10]: --- Step: default_platform ---
[07:46:10]: ------------------------------
[07:46:10]: Driving the lane 'android build_android' 🚀
[07:46:10]: ---------------------------------
[07:46:10]: --- Step: prepare_environment ---
[07:46:10]: ---------------------------------
[07:46:10]: Setting default environment variables to tidy up logs. These can be overridden by setting them in Appflow.
[07:46:10]: 
[07:46:10]: Set COREPACK_ENABLE_AUTO_PIN=0 (Suppress yarn warnings)
[07:46:10]: -------------------------
[07:46:10]: --- Step: sentry_init ---
[07:46:10]: -------------------------
[07:46:10]: ----------------------------
[07:46:10]: --- Step: begin_building ---
[07:46:10]: ----------------------------
[07:46:10]: Began building @ 2025-11-07T07:46:10
[07:46:10]: ---------------------------
[07:46:10]: --- Step: build_summary ---
[07:46:10]: ---------------------------

+---------------------------------------------------+
|                   Build Summary                   |
+---------------------+-----------------------------+
| Runners Revision    | Latest                      |
| Job ID              | 10553953                    |
| Node.js version     | v20.19.3                    |
| Cordova CLI version | 12.0.0 (cordova-lib@12.0.2) |
| npm version         | 10.8.2                      |
| yarn version        | 1.22.22                     |
+---------------------+-----------------------------+

[07:46:11]: No build credential specified
[07:46:11]: ---------------------------------
[07:46:11]: --- Step: add_git_credentials ---
[07:46:11]: ---------------------------------
[07:46:11]: Writing git-credentials files
[07:46:11]: git-credentials successfully added to project
[07:46:11]: --------------------------------
[07:46:11]: --- Step: get_appflow_config ---
[07:46:11]: --------------------------------
[07:46:11]: Checking for appflow.config.json
[07:46:11]: Appflow config not detected
[07:46:11]: --------------------------------
[07:46:11]: --- Step: dependency_install ---
[07:46:11]: --------------------------------
[07:46:11]: ---------------------------
[07:46:11]: --- Step: set_java_home ---
[07:46:11]: ---------------------------
[07:46:11]: Try to detect the android gradle plugin version
[07:46:11]: ./build.gradle file not found in the project: using default Java version
[07:46:11]: ----------------------------------
[07:46:11]: --- Step: modify_gradle_config ---
[07:46:11]: ----------------------------------
[07:46:11]: No custom native config found... skipping
[07:46:11]: Building android (in /builds/xiang2025-coder/myapptest/./)...
[07:46:11]: -------------------------
[07:46:11]: --- Step: bundledebug ---
[07:46:11]: -------------------------
[07:46:11]: ▸ Downloading https://services.gradle.org/distributions/gradle-8.11.1-all.zip
[07:46:13]: ▸ .....................10%......................20%......................30%......................40%......................50%......................60%......................70%......................80%......................90%......................100%
[07:46:17]: ▸ Welcome to Gradle 8.11.1!
[07:46:17]: ▸ Here are the highlights of this release:
[07:46:17]: ▸ - Parallel load and store for Configuration Cache
[07:46:17]: ▸ - Java compilation errors at the end of the build output
[07:46:17]: ▸ - Consolidated report for warnings and deprecations
[07:46:17]: ▸ For more details see https://docs.gradle.org/8.11.1/release-notes.html
[07:46:17]: ▸ Starting a Gradle Daemon (subsequent builds will be faster)
[07:46:46]: ▸ > Configure project :app
[07:46:46]: ▸ WARNING: Using flatDir should be avoided because it doesn't support any meta-data formats.
[07:46:46]: ▸ [Incubating] Problems report is available at: file:///builds/xiang2025-coder/myapptest/android/build/reports/problems/problems-report.html
[07:46:46]: ▸ FAILURE: Build failed with an exception.
[07:46:46]: ▸ * Where:
[07:46:46]: ▸ Script '/builds/xiang2025-coder/myapptest/android/app/capacitor.build.gradle' line: 10
[07:46:46]: ▸ * What went wrong:
[07:46:46]: ▸ A problem occurred evaluating script.
[07:46:46]: ▸ > Could not read script '/builds/xiang2025-coder/myapptest/android/capacitor-cordova-android-plugins/cordova.variables.gradle' as it does not exist.
[07:46:46]: ▸ * Try:
[07:46:46]: ▸ > Run with --stacktrace option to get the stack trace.
[07:46:46]: ▸ > Run with --info or --debug option to get more log output.
[07:46:46]: ▸ > Run with --scan to get full insights.
[07:46:46]: ▸ > Get more help at https://help.gradle.org.
[07:46:46]: ▸ Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.
[07:46:46]: ▸ You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.
[07:46:46]: ▸ For more on this, please refer to https://docs.gradle.org/8.11.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.
[07:46:46]: ▸ BUILD FAILED in 34s
[07:46:46]: -------------------------
[07:46:46]: --- Step: upload_logs ---
[07:46:46]: -------------------------
[07:46:48]: --------------------------------------
[07:46:48]: --- Step: sentry_capture_exception ---
[07:46:48]: --------------------------------------
+-------------------------------------------+
|               Lane Context                |
+-------------------+-----------------------+
| DEFAULT_PLATFORM  | ios                   |
| PLATFORM_NAME     | android               |
| LANE_NAME         | android build_android |
| GRADLE_BUILD_TYPE | debug                 |
+-------------------+-----------------------+
[07:46:48]: Shell command exited with exit status 1 instead of 0.
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

* Where:
Script '/builds/xiang2025-coder/myapptest/android/app/capacitor.build.gradle' line: 10

* What went wrong:
A problem occurred evaluating script.
> Could not read script '/builds/xiang2025-coder/myapptest/android/capacitor-cordova-android-plugins/cordova.variables.gradle' as it does not exist.

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.

Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/8.11.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD FAILED in 34s


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

[07:46:48]: fastlane finished with errors
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

* Where:
Script '/builds/xiang2025-coder/myapptest/android/app/capacitor.build.gradle' line: 10

* What went wrong:
A problem occurred evaluating script.
> Could not read script '/builds/xiang2025-coder/myapptest/android/capacitor-cordova-android-plugins/cordova.variables.gradle' as it does not exist.

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.

Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/8.11.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD FAILED in 34s


Running after_script
Running after script...
$ run "clean-up"

Cleaning up project directory and file based variables

ERROR: Job failed: command terminated with exit code 1