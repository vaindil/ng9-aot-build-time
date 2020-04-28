# Angular 9 AOT Build Times

Discussion for this repository is at [angular/angular-cli#17418](https://github.com/angular/angular-cli/issues/17418).

This is a fork of [richardlt/ng2-semantic-ui](https://github.com/richardlt/ng2-semantic-ui) to demonstrate an issue with the Angular CLI. Angular 9's AOT build times with Ivy enabled are supposed to be comparable to JIT build times, to the point that AOT is now the default even for dev builds, but this is not the case for many repositories.

Setup:

* `npm i`
* `npm run compile:lib:prod` to build the library

There are two branches, `master` and `extra`. Both have duplicate modules from the original repo so that the issue is more apparent. `master` has fewer so that build times are reasonable, and `extra` has significantly more to better show the disparity between AOT and non-AOT build times.

Build times can be tested using `ng build demo --aot=true/false`. My laptop is a bit underpowered, but my average results are below.

### `master`
* `--aot=false`: 16015ms
* `--aot=true`: 25390ms

### `extra`
* `--aot=false`: 32240ms
* `--aot=true`: 81753ms