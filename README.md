# Angular 9 Build Time Problem

This is a fork of [richardlt/ng2-semantic-ui](https://github.com/richardlt/ng2-semantic-ui) to demonstrate an issue with the Angular CLI.

Setup:

* `npm i`
* `npm run compile:lib:prod` to build the library

There are two branches, `master` and `extra`. Both have extra junk modules compared to the original repo so that the issue is more apparent. `master` has fewer so that build times are reasonable, and `extra` has significantly more to better show the disparity between AOT and non-AOT build times.

Build times can be tested using `ng build demo --aot=true/false`. My laptop is a bit underpowered, but my average results are below.

(soon)