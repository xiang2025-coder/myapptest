Running with gitlab-runner 18.2.0 (c24769e8)
  on Ionic Package Android Runner 8edcfcad2, system ID: r_grBV51LLoFR2
  feature flags: FF_USE_POD_ACTIVE_DEADLINE_SECONDS:false
Preparing the "kubernetes" executor
Using Kubernetes namespace: ionic-runners
Using Kubernetes executor with image 319312831725.dkr.ecr.us-west-2.amazonaws.com/appflow-runners/linux:2025.06 ...
Using attach strategy to execute scripts...
Using effective pull policy of [Always] for container metrics
Using effective pull policy of [Always] for container build
Using effective pull policy of [Always] for container helper
Using effective pull policy of [Always] for container init-permissions
Preparing environment
Waiting for pod ionic-runners/runner-8edcfcad2-project-0-concurrent-2-x5wg8h9x to be running, status is Pending
Running on runner-8edcfcad2-project-0-concurrent-2-x5wg8h9x via gitlab-runner-7dffd7b966-798h4...

Getting source from Git repository
Gitaly correlation ID: 
Fetching changes...
Initialized empty Git repository in /builds/xiang2025-coder/myapptest/.git/
Created fresh repository.
Checking out 07f7702d as detached HEAD (ref is main)...

Updating/initializing submodules...
Updated submodules

Executing "step_script" stage of the job script
$ pre-build
[08:06:40]: Building project....
$ run "fetch-updates"
Checking for build process updates...
$ run "build-android"
[08:06:43]: ---------------------------------
[08:06:43]: --- Step: add_extra_platforms ---
[08:06:43]: ---------------------------------
[08:06:43]: Setting '[:web]' as extra SupportedPlatforms
/builds/xiang2025-coder/myapptest/fastlane/outsystems/errors/detectors/pdm_plugins.rb:8: warning: character class has '-' without escape
/builds/xiang2025-coder/myapptest/fastlane/outsystems/errors/detectors/pdm_plugins.rb:15: warning: character class has '-' without escape
[08:06:43]: ------------------------------
[08:06:43]: --- Step: default_platform ---
[08:06:43]: ------------------------------
[08:06:43]: Driving the lane 'android build_android' 🚀
[08:06:43]: ---------------------------------
[08:06:43]: --- Step: prepare_environment ---
[08:06:43]: ---------------------------------
[08:06:43]: Setting default environment variables to tidy up logs. These can be overridden by setting them in Appflow.
[08:06:43]: 
[08:06:43]: Set COREPACK_ENABLE_AUTO_PIN=0 (Suppress yarn warnings)
[08:06:43]: -------------------------
[08:06:43]: --- Step: sentry_init ---
[08:06:43]: -------------------------
[08:06:43]: ----------------------------
[08:06:43]: --- Step: begin_building ---
[08:06:43]: ----------------------------
[08:06:43]: Began building @ 2025-11-07T08:06:43
[08:06:43]: ---------------------------
[08:06:43]: --- Step: build_summary ---
[08:06:43]: ---------------------------

+---------------------------------------------------+
|                   Build Summary                   |
+---------------------+-----------------------------+
| Runners Revision    | Latest                      |
| Job ID              | 10553987                    |
| Node.js version     | v20.19.3                    |
| Cordova CLI version | 12.0.0 (cordova-lib@12.0.2) |
| npm version         | 10.8.2                      |
| yarn version        | 1.22.22                     |
+---------------------+-----------------------------+

[08:06:44]: No build credential specified
[08:06:44]: ---------------------------------
[08:06:44]: --- Step: add_git_credentials ---
[08:06:44]: ---------------------------------
[08:06:44]: Writing git-credentials files
[08:06:44]: git-credentials successfully added to project
[08:06:44]: --------------------------------
[08:06:44]: --- Step: get_appflow_config ---
[08:06:44]: --------------------------------
[08:06:44]: Checking for appflow.config.json
[08:06:44]: Appflow config not detected
[08:06:44]: --------------------------------
[08:06:44]: --- Step: dependency_install ---
[08:06:44]: --------------------------------
[08:06:44]: ---------------------------
[08:06:44]: --- Step: set_java_home ---
[08:06:44]: ---------------------------
[08:06:44]: Try to detect the android gradle plugin version
[08:06:44]: ./build.gradle file not found in the project: using default Java version
[08:06:44]: ----------------------------------
[08:06:44]: --- Step: modify_gradle_config ---
[08:06:44]: ----------------------------------
[08:06:44]: No custom native config found... skipping
[08:06:44]: Building android (in /builds/xiang2025-coder/myapptest/./)...
[08:06:44]: -------------------------
[08:06:44]: --- Step: bundledebug ---
[08:06:44]: -------------------------
[08:06:44]: ▸ Downloading https://services.gradle.org/distributions/gradle-8.10-all.zip
[08:06:46]: ▸ .....................10%......................20%......................30%.....................40%......................50%......................60%......................70%.....................80%......................90%......................100%
[08:06:50]: ▸ Welcome to Gradle 8.10!
[08:06:50]: ▸ Here are the highlights of this release:
[08:06:50]: ▸ - Support for Java 23
[08:06:50]: ▸ - Faster configuration cache
[08:06:50]: ▸ - Better configuration cache reports
[08:06:50]: ▸ For more details see https://docs.gradle.org/8.10/release-notes.html
[08:06:50]: ▸ Starting a Gradle Daemon (subsequent builds will be faster)
[08:07:16]: ▸ FAILURE: Build failed with an exception.
[08:07:16]: ▸ * What went wrong:
[08:07:16]: ▸ Could not determine the dependencies of task ':app:buildDebugPreBundle'.
[08:07:16]: ▸ > Could not resolve all dependencies for configuration ':app:debugRuntimeClasspath'.
[08:07:16]: ▸ > Could not resolve project :capacitor-android.
[08:07:16]: ▸ Required by:
[08:07:16]: ▸ project :app
[08:07:16]: ▸ > No matching variant of project :capacitor-android was found. The consumer was configured to find a library for use during runtime, preferably optimized for Android, as well as attribute 'com.android.build.api.attributes.AgpVersionAttr' with value '8.2.2', attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug' but:
[08:07:16]: ▸ - No variants exist.
[08:07:16]: ▸ > Could not resolve project :capacitor-cordova-android-plugins.
[08:07:16]: ▸ Required by:
[08:07:16]: ▸ project :app
[08:07:16]: ▸ > No matching variant of project :capacitor-cordova-android-plugins was found. The consumer was configured to find a library for use during runtime, preferably optimized for Android, as well as attribute 'com.android.build.api.attributes.AgpVersionAttr' with value '8.2.2', attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug' but:
[08:07:16]: ▸ - No variants exist.
[08:07:16]: ▸ * Try:
[08:07:16]: ▸ > Creating consumable variants is explained in more detail at https://docs.gradle.org/8.10/userguide/declaring_dependencies.html#sec:resolvable-consumable-configs.
[08:07:16]: ▸ > Review the variant matching algorithm at https://docs.gradle.org/8.10/userguide/variant_attributes.html#sec:abm_algorithm.
[08:07:16]: ▸ > Run with --stacktrace option to get the stack trace.
[08:07:16]: ▸ > Run with --info or --debug option to get more log output.
[08:07:16]: ▸ > Run with --scan to get full insights.
[08:07:16]: ▸ > Get more help at https://help.gradle.org.
[08:07:16]: ▸ Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.
[08:07:16]: ▸ You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.
[08:07:16]: ▸ For more on this, please refer to https://docs.gradle.org/8.10/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.
[08:07:16]: ▸ BUILD FAILED in 31s
[08:07:16]: -------------------------
[08:07:16]: --- Step: upload_logs ---
[08:07:16]: -------------------------
[08:07:17]: Unable to upload package list log. Skipping.
[08:07:18]: --------------------------------------
[08:07:18]: --- Step: sentry_capture_exception ---
[08:07:18]: --------------------------------------
+-------------------------------------------+
|               Lane Context                |
+-------------------+-----------------------+
| DEFAULT_PLATFORM  | ios                   |
| PLATFORM_NAME     | android               |
| LANE_NAME         | android build_android |
| GRADLE_BUILD_TYPE | debug                 |
+-------------------+-----------------------+
[08:07:18]: Shell command exited with exit status 1 instead of 0.
Downloading https://services.gradle.org/distributions/gradle-8.10-all.zip
.....................10%......................20%......................30%.....................40%......................50%......................60%......................70%.....................80%......................90%......................100%

Welcome to Gradle 8.10!

Here are the highlights of this release:
 - Support for Java 23
 - Faster configuration cache
 - Better configuration cache reports

For more details see https://docs.gradle.org/8.10/release-notes.html

Starting a Gradle Daemon (subsequent builds will be faster)

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
> Creating consumable variants is explained in more detail at https://docs.gradle.org/8.10/userguide/declaring_dependencies.html#sec:resolvable-consumable-configs.
> Review the variant matching algorithm at https://docs.gradle.org/8.10/userguide/variant_attributes.html#sec:abm_algorithm.
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.

Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/8.10/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD FAILED in 31s


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
| 💥   | bundledebug              | 32          |
| 13   | upload_logs              | 1           |
| 14   | sentry_capture_exception | 0           |
+------+--------------------------+-------------+

[08:07:18]: fastlane finished with errors
/usr/local/bundle/bin/fastlane: [!] Shell command exited with exit status 1 instead of 0. (FastlaneCore::Interface::FastlaneShellError)
Downloading https://services.gradle.org/distributions/gradle-8.10-all.zip
.....................10%......................20%......................30%.....................40%......................50%......................60%......................70%.....................80%......................90%......................100%

Welcome to Gradle 8.10!

Here are the highlights of this release:
 - Support for Java 23
 - Faster configuration cache
 - Better configuration cache reports

For more details see https://docs.gradle.org/8.10/release-notes.html

Starting a Gradle Daemon (subsequent builds will be faster)

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
> Creating consumable variants is explained in more detail at https://docs.gradle.org/8.10/userguide/declaring_dependencies.html#sec:resolvable-consumable-configs.
> Review the variant matching algorithm at https://docs.gradle.org/8.10/userguide/variant_attributes.html#sec:abm_algorithm.
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.

Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/8.10/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD FAILED in 31s


Running after_script
Running after script...
$ run "clean-up"

Cleaning up project directory and file based variables

ERROR: Job failed: command terminated with exit code 1