#!/bin/sh
# This is a proxy script to accommodate Ionic Appflow's build process.
# It changes to the 'android' directory and executes the real gradlew script.

cd "$(dirname "$0")/android"
./gradlew "$@"