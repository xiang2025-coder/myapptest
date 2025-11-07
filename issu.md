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
Waiting for pod ionic-runners/runner-8edcfcad2-project-0-concurrent-4-5m5yvpsu to be running, status is Pending
Running on runner-8edcfcad2-project-0-concurrent-4-5m5yvpsu via gitlab-runner-7dffd7b966-798h4...

Getting source from Git repository
Gitaly correlation ID: 
Fetching changes...
Initialized empty Git repository in /builds/xiang2025-coder/myapptest/.git/
Created fresh repository.
Checking out 2501a1ff as detached HEAD (ref is main)...

Updating/initializing submodules...
Updated submodules

Executing "step_script" stage of the job script
$ pre-build
[07:57:56]: Building project....
$ run "fetch-updates"
Checking for build process updates...
$ run "build-android"
[07:57:58]: ---------------------------------
[07:57:58]: --- Step: add_extra_platforms ---
[07:57:58]: ---------------------------------
[07:57:58]: Setting '[:web]' as extra SupportedPlatforms
/builds/xiang2025-coder/myapptest/fastlane/outsystems/errors/detectors/pdm_plugins.rb:8: warning: character class has '-' without escape
/builds/xiang2025-coder/myapptest/fastlane/outsystems/errors/detectors/pdm_plugins.rb:15: warning: character class has '-' without escape
[07:57:58]: ------------------------------
[07:57:58]: --- Step: default_platform ---
[07:57:58]: ------------------------------
[07:57:58]: Driving the lane 'android build_android' 🚀
[07:57:58]: ---------------------------------
[07:57:58]: --- Step: prepare_environment ---
[07:57:58]: ---------------------------------
[07:57:58]: Setting default environment variables to tidy up logs. These can be overridden by setting them in Appflow.
[07:57:58]: 
[07:57:58]: Set COREPACK_ENABLE_AUTO_PIN=0 (Suppress yarn warnings)
[07:57:58]: -------------------------
[07:57:58]: --- Step: sentry_init ---
[07:57:58]: -------------------------
[07:57:58]: ----------------------------
[07:57:58]: --- Step: begin_building ---
[07:57:58]: ----------------------------
[07:57:58]: Began building @ 2025-11-07T07:57:58
[07:57:58]: ---------------------------
[07:57:58]: --- Step: build_summary ---
[07:57:58]: ---------------------------

+---------------------------------------------------+
|                   Build Summary                   |
+---------------------+-----------------------------+
| Runners Revision    | Latest                      |
| Job ID              | 10553966                    |
| Node.js version     | v20.19.3                    |
| Cordova CLI version | 12.0.0 (cordova-lib@12.0.2) |
| npm version         | 10.8.2                      |
| yarn version        | 1.22.22                     |
+---------------------+-----------------------------+

[07:57:59]: No build credential specified
[07:57:59]: ---------------------------------
[07:57:59]: --- Step: add_git_credentials ---
[07:57:59]: ---------------------------------
[07:57:59]: Writing git-credentials files
[07:57:59]: git-credentials successfully added to project
[07:57:59]: --------------------------------
[07:57:59]: --- Step: get_appflow_config ---
[07:57:59]: --------------------------------
[07:57:59]: Checking for appflow.config.json
[07:57:59]: Appflow config not detected
[07:57:59]: --------------------------------
[07:57:59]: --- Step: dependency_install ---
[07:57:59]: --------------------------------
[07:57:59]: ---------------------------
[07:57:59]: --- Step: set_java_home ---
[07:57:59]: ---------------------------
[07:57:59]: Try to detect the android gradle plugin version
[07:57:59]: ./build.gradle file not found in the project: using default Java version
[07:57:59]: ----------------------------------
[07:57:59]: --- Step: modify_gradle_config ---
[07:57:59]: ----------------------------------
[07:57:59]: No custom native config found... skipping
[07:57:59]: Building android (in /builds/xiang2025-coder/myapptest/./)...
[07:57:59]: -------------------------
[07:57:59]: --- Step: bundledebug ---
[07:57:59]: -------------------------
[07:57:59]: ▸ Downloading https://services.gradle.org/distributions/gradle-8.11.1-all.zip
[07:58:02]: ▸ .....................10%......................20%......................30%......................40%......................50%......................60%......................70%......................80%......................90%......................100%
[07:58:06]: ▸ Welcome to Gradle 8.11.1!
[07:58:06]: ▸ Here are the highlights of this release:
[07:58:06]: ▸ - Parallel load and store for Configuration Cache
[07:58:06]: ▸ - Java compilation errors at the end of the build output
[07:58:06]: ▸ - Consolidated report for warnings and deprecations
[07:58:06]: ▸ For more details see https://docs.gradle.org/8.11.1/release-notes.html
[07:58:07]: ▸ Starting a Gradle Daemon (subsequent builds will be faster)
[07:58:35]: ▸ [Incubating] Problems report is available at: file:///builds/xiang2025-coder/myapptest/android/build/reports/problems/problems-report.html
[07:58:35]: ▸ FAILURE: Build failed with an exception.
[07:58:35]: ▸ * What went wrong:
[07:58:35]: ▸ Could not determine the dependencies of task ':app:buildDebugPreBundle'.
[07:58:35]: ▸ > Could not resolve all dependencies for configuration ':app:debugRuntimeClasspath'.
[07:58:35]: ▸ > Could not resolve project :capacitor-android.
[07:58:35]: ▸ Required by:
[07:58:35]: ▸ project :app
[07:58:35]: ▸ > No matching variant of project :capacitor-android was found. The consumer was configured to find a library for use during runtime, preferably optimized for Android, as well as attribute 'com.android.build.api.attributes.AgpVersionAttr' with value '8.2.2', attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug' but:
[07:58:35]: ▸ - No variants exist.
[07:58:35]: ▸ > Could not resolve project :capacitor-cordova-android-plugins.
[07:58:35]: ▸ Required by:
[07:58:35]: ▸ project :app
[07:58:35]: ▸ > No matching variant of project :capacitor-cordova-android-plugins was found. The consumer was configured to find a library for use during runtime, preferably optimized for Android, as well as attribute 'com.android.build.api.attributes.AgpVersionAttr' with value '8.2.2', attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug' but:
[07:58:35]: ▸ - No variants exist.
[07:58:35]: ▸ * Try:
[07:58:35]: ▸ > Creating consumable variants is explained in more detail at https://docs.gradle.org/8.11.1/userguide/declaring_dependencies.html#sec:resolvable-consumable-configs.
[07:58:35]: ▸ > Review the variant matching algorithm at https://docs.gradle.org/8.11.1/userguide/variant_attributes.html#sec:abm_algorithm.
[07:58:35]: ▸ > Run with --stacktrace option to get the stack trace.
[07:58:35]: ▸ > Run with --info or --debug option to get more log output.
[07:58:35]: ▸ > Run with --scan to get full insights.
[07:58:35]: ▸ > Get more help at https://help.gradle.org.
[07:58:35]: ▸ Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.
[07:58:35]: ▸ You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.
[07:58:35]: ▸ For more on this, please refer to https://docs.gradle.org/8.11.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.
[07:58:35]: ▸ BUILD FAILED in 35s
[07:58:36]: -------------------------
[07:58:36]: --- Step: upload_logs ---
[07:58:36]: -------------------------
[07:58:38]: --------------------------------------
[07:58:38]: --- Step: sentry_capture_exception ---
[07:58:38]: --------------------------------------
+-------------------------------------------+
|               Lane Context                |
+-------------------+-----------------------+
| DEFAULT_PLATFORM  | ios                   |
| PLATFORM_NAME     | android               |
| LANE_NAME         | android build_android |
| GRADLE_BUILD_TYPE | debug                 |
+-------------------+-----------------------+
[07:58:38]: Shell command exited with exit status 1 instead of 0.
Downloading https://services.gradle.org/distributions/gradle-8.11.1-all.zip
.....................10%......................20%......................30%......................40%......................50%......................60%......................70%......................80%......................90%......................100%

Welcome to Gradle 8.11.1!

Here are the highlights of this release:
 - Parallel load and store for Configuration Cache
 - Java compilation errors at the end of the build output
 - Consolidated report for warnings and deprecations

For more details see https://docs.gradle.org/8.11.1/release-notes.html

Starting a Gradle Daemon (subsequent builds will be faster)
[Incubating] Problems report is available at: file:///builds/xiang2025-coder/myapptest/android/build/reports/problems/problems-report.html

FAILURE: Build failed with an exception.

* What went wrong:
Could not determine the dependencies of task ':app:buildDebugPreBundle'.
> Could not resolve all dependencies for configuration ':app:debugRuntimeClasspath'.
   > Could not resolve project :capacitor-android.
     Required by:
         project :app
      > No matching variant of project :capacitor-android was found. The consumer was configured to find a library for use during runtime, preferably optimized for Android, as well as attribute 'com.android.build.api.attributes.AgpVersionAttr' with value '8.2.2', attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug' but:
          - No variants exist.
   > Could not resolve project :capacitor-cordova-android-plugins.
     Required by:
         project :app
      > No matching variant of project :capacitor-cordova-android-plugins was found. The consumer was configured to find a library for use during runtime, preferably optimized for Android, as well as attribute 'com.android.build.api.attributes.AgpVersionAttr' with value '8.2.2', attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug' but:
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
| 💥   | bundledebug              | 36          |
| 13   | upload_logs              | 1           |
| 14   | sentry_capture_exception | 0           |
+------+--------------------------+-------------+

[07:58:38]: fastlane finished with errors
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
[Incubating] Problems report is available at: file:///builds/xiang2025-coder/myapptest/android/build/reports/problems/problems-report.html

FAILURE: Build failed with an exception.

* What went wrong:
Could not determine the dependencies of task ':app:buildDebugPreBundle'.
> Could not resolve all dependencies for configuration ':app:debugRuntimeClasspath'.
   > Could not resolve project :capacitor-android.
     Required by:
         project :app
      > No matching variant of project :capacitor-android was found. The consumer was configured to find a library for use during runtime, preferably optimized for Android, as well as attribute 'com.android.build.api.attributes.AgpVersionAttr' with value '8.2.2', attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug' but:
          - No variants exist.
   > Could not resolve project :capacitor-cordova-android-plugins.
     Required by:
         project :app
      > No matching variant of project :capacitor-cordova-android-plugins was found. The consumer was configured to find a library for use during runtime, preferably optimized for Android, as well as attribute 'com.android.build.api.attributes.AgpVersionAttr' with value '8.2.2', attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug' but:
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