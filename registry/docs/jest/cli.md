Version: 30.0

On this page

The `jest` command line runner has a number of useful options. You can run `jest --help` to view all available options. Many of the options shown below can also be used together to run tests exactly the way you want. Every one of Jest's [Configuration](/docs/configuration) options can also be specified through the CLI.

Here is a brief overview:

## Running from the command line[​](#running-from-the-command-line "Direct link to Running from the command line")

Run all tests (default):

```
jest
```

Run only the tests that were specified with a pattern or filename:

```
jest my-test #orjest path/to/my-test.js
```

Run tests related to changed files based on hg/git (uncommitted files):

```
jest -o
```

Run tests related to `path/to/fileA.js` and `path/to/fileB.js`:

```
jest --findRelatedTests path/to/fileA.js path/to/fileB.js
```

Run tests that match this spec name (match against the name in `describe` or `test`, basically).

```
jest -t name-of-spec
```

Run watch mode:

```
jest --watch #runs jest -o by defaultjest --watchAll #runs all tests
```

Watch mode also enables to specify the name or path to a file to focus on a specific set of tests.

## Using with package manager[​](#using-with-package-manager "Direct link to Using with package manager")

If you run Jest via your package manager, you can still pass the command line arguments directly as Jest arguments.

Instead of:

```
jest -u -t="ColorPicker"
```

you can use:

-   npm
-   Yarn
-   pnpm
-   Bun

```
npm test -- -u -t="ColorPicker"
```

```
yarn test -u -t="ColorPicker"
```

```
pnpm test -u -t="ColorPicker"
```

```
bun run test -u -t "ColorPicker"
```

## Camelcase & dashed args support[​](#camelcase--dashed-args-support "Direct link to Camelcase & dashed args support")

Jest supports both camelcase and dashed arg formats. The following examples will have an equal result:

```
jest --collect-coveragejest --collectCoverage
```

Arguments can also be mixed:

```
jest --update-snapshot --detectOpenHandles
```

## Options[​](#options "Direct link to Options")

note

CLI options take precedence over values from the [Configuration](/docs/configuration).

-   [Camelcase & dashed args support](#camelcase--dashed-args-support)
-   [Options](#options)
-   [Reference](#reference)
    -   [`jest <regexForTestFiles>`](#jest-regexfortestfiles)
    -   [`--bail[=<n>]`](#--bailn)
    -   [`--cache`](#--cache)
    -   [`--changedFilesWithAncestor`](#--changedfileswithancestor)
    -   [`--changedSince`](#--changedsince)
    -   [`--ci`](#--ci)
    -   [`--clearCache`](#--clearcache)
    -   [`--clearMocks`](#--clearmocks)
    -   [`--collectCoverageFrom=<glob>`](#--collectcoveragefromglob)
    -   [`--colors`](#--colors)
    -   [`--config=<path>`](#--configpath)
    -   [`--coverage[=<boolean>]`](#--coverageboolean)
    -   [`--coverageDirectory=<path>`](#--coveragedirectorypath)
    -   [`--coverageProvider=<provider>`](#--coverageproviderprovider)
    -   [`--debug`](#--debug)
    -   [`--detectOpenHandles`](#--detectopenhandles)
    -   [`--env=<environment>`](#--envenvironment)
    -   [`--errorOnDeprecated`](#--errorondeprecated)
    -   [`--expand`](#--expand)
    -   [`--filter=<file>`](#--filterfile)
    -   [`--findRelatedTests <spaceSeparatedListOfSourceFiles>`](#--findrelatedtests-spaceseparatedlistofsourcefiles)
    -   [`--forceExit`](#--forceexit)
    -   [`--help`](#--help)
    -   [`--ignoreProjects <project1> ... <projectN>`](#--ignoreprojects-project1--projectn)
    -   [`--injectGlobals`](#--injectglobals)
    -   [`--json`](#--json)
    -   [`--lastCommit`](#--lastcommit)
    -   [`--listTests`](#--listtests)
    -   [`--logHeapUsage`](#--logheapusage)
    -   [`--maxConcurrency=<num>`](#--maxconcurrencynum)
    -   [`--maxWorkers=<num>|<string>`](#--maxworkersnumstring)
    -   [`--noStackTrace`](#--nostacktrace)
    -   [`--notify`](#--notify)
    -   [`--onlyChanged`](#--onlychanged)
    -   [`--onlyFailures`](#--onlyfailures)
    -   [`--openHandlesTimeout=<milliseconds>`](#--openhandlestimeoutmilliseconds)
    -   [`--outputFile=<filename>`](#--outputfilefilename)
    -   [`--passWithNoTests`](#--passwithnotests)
    -   [`--projects <path1> ... <pathN>`](#--projects-path1--pathn)
    -   [`--randomize`](#--randomize)
    -   [`--reporters`](#--reporters)
    -   [`--resetMocks`](#--resetmocks)
    -   [`--restoreMocks`](#--restoremocks)
    -   [`--roots`](#--roots)
    -   [`--runInBand`](#--runinband)
    -   [`--runTestsByPath`](#--runtestsbypath)
    -   [`--seed=<num>`](#--seednum)
    -   [`--selectProjects <project1> ... <projectN>`](#--selectprojects-project1--projectn)
    -   [`--setupFilesAfterEnv <path1> ... <pathN>`](#--setupfilesafterenv-path1--pathn)
    -   [`--shard`](#--shard)
    -   [`--showConfig`](#--showconfig)
    -   [`--showSeed`](#--showseed)
    -   [`--silent`](#--silent)
    -   [`--testEnvironmentOptions=<json string>`](#--testenvironmentoptionsjson-string)
    -   [`--testLocationInResults`](#--testlocationinresults)
    -   [`--testMatch glob1 ... globN`](#--testmatch-glob1--globn)
    -   [`--testNamePattern=<regex>`](#--testnamepatternregex)
    -   [`--testPathIgnorePatterns=<regex>|[array]`](#--testpathignorepatternsregexarray)
    -   [`--testPathPatterns=<regex>`](#--testpathpatternsregex)
    -   [`--testRunner=<path>`](#--testrunnerpath)
    -   [`--testSequencer=<path>`](#--testsequencerpath)
    -   [`--testTimeout=<number>`](#--testtimeoutnumber)
    -   [`--updateSnapshot`](#--updatesnapshot)
    -   [`--useStderr`](#--usestderr)
    -   [`--verbose`](#--verbose)
    -   [`--version`](#--version)
    -   [`--waitForUnhandledRejections`](#--waitforunhandledrejections)
    -   [`--watch`](#--watch)
    -   [`--watchAll`](#--watchall)
    -   [`--watchman`](#--watchman)
    -   [`--workerThreads`](#--workerthreads)

* * *

## Reference[​](#reference "Direct link to Reference")

### `jest <regexForTestFiles>`[​](#jest-regexfortestfiles "Direct link to jest-regexfortestfiles")

When you run `jest` with an argument, that argument is treated as a regular expression to match against files in your project. It is possible to run test suites by providing a pattern. Only the files that the pattern matches will be picked up and executed. Depending on your terminal, you may need to quote this argument: `jest "my.*(complex)?pattern"`. On Windows, you will need to use `/` as a path separator or escape `\` as `\\`.

### `--bail[=<n>]`[​](#--bailn "Direct link to --bailn")

Alias: `-b`. Exit the test suite immediately upon `n` number of failing test suite. Defaults to `1`.

### `--cache`[​](#--cache "Direct link to --cache")

Whether to use the cache. Defaults to true. Disable the cache using `--no-cache`.

caution

The cache should only be disabled if you are experiencing caching related problems. On average, disabling the cache makes Jest at least two times slower.

If you want to inspect the cache, use `--showConfig` and look at the `cacheDirectory` value. If you need to clear the cache, use `--clearCache`.

### `--changedFilesWithAncestor`[​](#--changedfileswithancestor "Direct link to --changedfileswithancestor")

Runs tests related to the current changes and the changes made in the last commit. Behaves similarly to `--onlyChanged`.

### `--changedSince`[​](#--changedsince "Direct link to --changedsince")

Runs tests related to the changes since the provided branch or commit hash. If the current branch has diverged from the given branch, then only changes made locally will be tested. Behaves similarly to `--onlyChanged`.

### `--ci`[​](#--ci "Direct link to --ci")

When this option is provided, Jest will assume it is running in a CI environment. This changes the behavior when a new snapshot is encountered. Instead of the regular behavior of storing a new snapshot automatically, it will fail the test and require Jest to be run with `--updateSnapshot`.

### `--clearCache`[​](#--clearcache "Direct link to --clearcache")

Deletes the Jest cache directory and then exits without running tests. Will delete `cacheDirectory` if the option is passed, or Jest's default cache directory. The default cache directory can be found by calling `jest --showConfig`.

caution

Clearing the cache will reduce performance.

### `--clearMocks`[​](#--clearmocks "Direct link to --clearmocks")

Automatically clear mock calls, instances, contexts and results before every test. Equivalent to calling [`jest.clearAllMocks()`](/docs/jest-object#jestclearallmocks) before each test. This does not remove any mock implementation that may have been provided.

### `--collectCoverageFrom=<glob>`[​](#--collectcoveragefromglob "Direct link to --collectcoveragefromglob")

A glob pattern relative to `rootDir` matching the files that coverage info needs to be collected from.

### `--colors`[​](#--colors "Direct link to --colors")

Forces test results output highlighting even if stdout is not a TTY.

note

Alternatively you can set the environment variable `FORCE_COLOR=true` to forcefully enable or `FORCE_COLOR=false` to disable colorized output. The use of `FORCE_COLOR` overrides all other color support checks.

### `--config=<path>`[​](#--configpath "Direct link to --configpath")

Alias: `-c`. The path to a Jest config file specifying how to find and execute tests. If no `rootDir` is set in the config, the directory containing the config file is assumed to be the `rootDir` for the project. This can also be a JSON-encoded value which Jest will use as configuration.

### `--coverage[=<boolean>]`[​](#--coverageboolean "Direct link to --coverageboolean")

Alias: `--collectCoverage`. Indicates that test coverage information should be collected and reported in the output. Optionally pass `<boolean>` to override option set in configuration.

### `--coverageDirectory=<path>`[​](#--coveragedirectorypath "Direct link to --coveragedirectorypath")

The directory where Jest should output its coverage files.

### `--coverageProvider=<provider>`[​](#--coverageproviderprovider "Direct link to --coverageproviderprovider")

Indicates which provider should be used to instrument code for coverage. Allowed values are `babel` (default) or `v8`.

### `--debug`[​](#--debug "Direct link to --debug")

Print debugging info about your Jest config.

### `--detectOpenHandles`[​](#--detectopenhandles "Direct link to --detectopenhandles")

Attempt to collect and print open handles preventing Jest from exiting cleanly. Use this in cases where you need to use `--forceExit` in order for Jest to exit to potentially track down the reason. This implies `--runInBand`, making tests run serially. Implemented using [`async_hooks`](https://nodejs.org/api/async_hooks.html). This option has a significant performance penalty and should only be used for debugging.

### `--env=<environment>`[​](#--envenvironment "Direct link to --envenvironment")

The test environment used for all tests. This can point to any file or node module. Examples: `jsdom`, `node` or `path/to/my-environment.js`.

### `--errorOnDeprecated`[​](#--errorondeprecated "Direct link to --errorondeprecated")

Make calling deprecated APIs throw helpful error messages. Useful for easing the upgrade process.

### `--expand`[​](#--expand "Direct link to --expand")

Alias: `-e`. Use this flag to show full diffs and errors instead of a patch.

### `--filter=<file>`[​](#--filterfile "Direct link to --filterfile")

Path to a module exporting a filtering function. This asynchronous function receives a list of test paths which can be manipulated to exclude tests from running and must return an object with shape `{ filtered: Array<string> }` containing the tests that should be run by Jest. Especially useful when used in conjunction with a testing infrastructure to filter known broken tests.

my-filter.js

```
// This filter when applied will only run tests ending in .spec.js (not the best way to do it, but it's just an example):const filteringFunction = testPath => testPath.endsWith('.spec.js');module.exports = testPaths => {  const allowedPaths = testPaths.filter(filteringFunction); // ["path1.spec.js", "path2.spec.js", etc]  return {    filtered: allowedPaths,  };};
```

### `--findRelatedTests <spaceSeparatedListOfSourceFiles>`[​](#--findrelatedtests-spaceseparatedlistofsourcefiles "Direct link to --findrelatedtests-spaceseparatedlistofsourcefiles")

Find and run the tests that cover a space separated list of source files that were passed in as arguments. Useful for pre-commit hook integration to run the minimal amount of tests necessary. Can be used together with `--coverage` to include a test coverage for the source files, no duplicate `--collectCoverageFrom` arguments needed.

### `--forceExit`[​](#--forceexit "Direct link to --forceexit")

Force Jest to exit after all tests have completed running. This is useful when resources set up by test code cannot be adequately cleaned up.

caution

This feature is an escape-hatch. If Jest doesn't exit at the end of a test run, it means external resources are still being held on to or timers are still pending in your code. It is advised to tear down external resources after each test to make sure Jest can shut down cleanly. You can use `--detectOpenHandles` to help track it down.

### `--help`[​](#--help "Direct link to --help")

Show the help information, similar to this page.

### `--ignoreProjects <project1> ... <projectN>`[​](#--ignoreprojects-project1--projectn "Direct link to --ignoreprojects-project1--projectn")

Ignore the tests of the specified projects. Jest uses the attribute `displayName` in the configuration to identify each project. If you use this option, you should provide a `displayName` to all your projects.

### `--injectGlobals`[​](#--injectglobals "Direct link to --injectglobals")

Insert Jest's globals (`expect`, `test`, `describe`, `beforeEach` etc.) into the global environment. If you set this to `false`, you should import from `@jest/globals`, e.g.

```
import {expect, jest, test} from '@jest/globals';jest.useFakeTimers();test('some test', () => {  expect(Date.now()).toBe(0);});
```

note

This option is only supported using the default `jest-circus` test runner.

### `--json`[​](#--json "Direct link to --json")

Prints the test results in JSON. This mode will send all other test output and user messages to stderr.

### `--lastCommit`[​](#--lastcommit "Direct link to --lastcommit")

Run all tests affected by file changes in the last commit made. Behaves similarly to `--onlyChanged`.

### `--listTests`[​](#--listtests "Direct link to --listtests")

Lists all test files that Jest will run given the arguments, and exits.

### `--logHeapUsage`[​](#--logheapusage "Direct link to --logheapusage")

Logs the heap usage after every test. Useful to debug memory leaks. Use together with `--runInBand` and `--expose-gc` in node.

### `--maxConcurrency=<num>`[​](#--maxconcurrencynum "Direct link to --maxconcurrencynum")

Prevents Jest from executing more than the specified amount of tests at the same time. Only affects tests that use `test.concurrent`.

### `--maxWorkers=<num>|<string>`[​](#--maxworkersnumstring "Direct link to --maxworkersnumstring")

Alias: `-w`. Specifies the maximum number of workers the worker-pool will spawn for running tests. In single run mode, this defaults to the number of the cores available on your machine minus one for the main thread. In watch mode, this defaults to half of the available cores on your machine to ensure Jest is unobtrusive and does not grind your machine to a halt. It may be useful to adjust this in resource limited environments like CIs but the defaults should be adequate for most use-cases.

For environments with variable CPUs available, you can use percentage based configuration: `--maxWorkers=50%`

### `--noStackTrace`[​](#--nostacktrace "Direct link to --nostacktrace")

Disables stack trace in test results output.

### `--notify`[​](#--notify "Direct link to --notify")

Activates native OS notifications for test results. Good for when you don't want your consciousness to be able to focus on anything except JavaScript testing. To display the notifications Jest needs the [`node-notifier`](https://github.com/mikaelbr/node-notifier) package, which must be installed separately.

### `--onlyChanged`[​](#--onlychanged "Direct link to --onlychanged")

Alias: `-o`. Attempts to identify which tests to run based on which files have changed in the current repository. Only works if you're running tests in a git/hg repository at the moment and requires a static dependency graph (ie. no dynamic requires).

### `--onlyFailures`[​](#--onlyfailures "Direct link to --onlyfailures")

Alias: `-f`. Run tests that failed in the previous execution.

### `--openHandlesTimeout=<milliseconds>`[​](#--openhandlestimeoutmilliseconds "Direct link to --openhandlestimeoutmilliseconds")

When `--detectOpenHandles` and `--forceExit` are _disabled_, Jest will print a warning if the process has not exited cleanly after this number of milliseconds. A value of `0` disables the warning. Defaults to `1000`.

### `--outputFile=<filename>`[​](#--outputfilefilename "Direct link to --outputfilefilename")

Write test results to a file when the `--json` option is also specified. The returned JSON structure is documented in [testResultsProcessor](/docs/configuration#testresultsprocessor-string).

### `--passWithNoTests`[​](#--passwithnotests "Direct link to --passwithnotests")

Allows the test suite to pass when no files are found.

### `--projects <path1> ... <pathN>`[​](#--projects-path1--pathn "Direct link to --projects-path1--pathn")

Run tests from one or more projects, found in the specified paths; also takes path globs. This option is the CLI equivalent of the [`projects`](/docs/configuration#projects-arraystring--projectconfig) configuration option.

note

If configuration files are found in the specified paths, _all_ projects specified within those configuration files will be run.

### `--randomize`[​](#--randomize "Direct link to --randomize")

Shuffle the order of the tests within a file. The shuffling is based on the seed. See [`--seed=<num>`](#--seednum) for more info.

Seed value is displayed when this option is set. Equivalent to setting the CLI option [`--showSeed`](#--showseed).

```
jest --randomize --seed 1234
```

note

This option is only supported using the default `jest-circus` test runner.

### `--reporters`[​](#--reporters "Direct link to --reporters")

Run tests with specified reporters. [Reporter options](/docs/configuration#reporters-arraymodulename--modulename-options) are not available via CLI. Example with multiple reporters:

`jest --reporters="default" --reporters="jest-junit"`

### `--resetMocks`[​](#--resetmocks "Direct link to --resetmocks")

Automatically reset mock state before every test. Equivalent to calling [`jest.resetAllMocks()`](/docs/jest-object#jestresetallmocks) before each test. This will lead to any mocks having their fake implementations removed but does not restore their initial implementation.

### `--restoreMocks`[​](#--restoremocks "Direct link to --restoremocks")

Automatically restore mock state and implementation before every test. Equivalent to calling [`jest.restoreAllMocks()`](/docs/jest-object#jestrestoreallmocks) before each test. This will lead to any mocks having their fake implementations removed and restores their initial implementation.

### `--roots`[​](#--roots "Direct link to --roots")

A list of paths to directories that Jest should use to search for files in.

### `--runInBand`[​](#--runinband "Direct link to --runinband")

Alias: `-i`. Run all tests serially in the current process, rather than creating a worker pool of child processes that run tests. This can be useful for debugging.

### `--runTestsByPath`[​](#--runtestsbypath "Direct link to --runtestsbypath")

Run only the tests that were specified with their exact paths. This avoids converting them into a regular expression and matching it against every single file.

For example, given the following file structure:

```
__tests__└── t1.test.js # test└── t2.test.js # test
```

When ran with a pattern, no test is found:

```
jest --runTestsByPath __tests__/t
```

Output:

```
No tests found
```

However, passing an exact path will execute only the given test:

```
jest --runTestsByPath __tests__/t1.test.js
```

Output:

```
PASS __tests__/t1.test.js
```

tip

The default regex matching works fine on small runs, but becomes slow if provided with multiple patterns and/or against a lot of tests. This option replaces the regex matching logic and by that optimizes the time it takes Jest to filter specific test files.

### `--seed=<num>`[​](#--seednum "Direct link to --seednum")

Sets a seed value that can be retrieved in a test file via [`jest.getSeed()`](/docs/jest-object#jestgetseed). The seed value must be between `-0x80000000` and `0x7fffffff` inclusive (`-2147483648` (`-(2 ** 31)`) and `2147483647` (`2 ** 31 - 1`) in decimal).

```
jest --seed=1324
```

tip

If this option is not specified Jest will randomly generate the value. You can use the [`--showSeed`](#--showseed) flag to print the seed in the test report summary.

Jest uses the seed internally for shuffling the order in which test suites are run. If the [`--randomize`](#--randomize) option is used, the seed is also used for shuffling the order of tests within each `describe` block. When dealing with flaky tests, rerunning with the same seed might help reproduce the failure.

### `--selectProjects <project1> ... <projectN>`[​](#--selectprojects-project1--projectn "Direct link to --selectprojects-project1--projectn")

Run the tests of the specified projects. Jest uses the attribute `displayName` in the configuration to identify each project. If you use this option, you should provide a `displayName` to all your projects.

### `--setupFilesAfterEnv <path1> ... <pathN>`[​](#--setupfilesafterenv-path1--pathn "Direct link to --setupfilesafterenv-path1--pathn")

A list of paths to modules that run some code to configure or to set up the testing framework before each test. Beware that files imported by the setup scripts will not be mocked during testing.

### `--shard`[​](#--shard "Direct link to --shard")

The test suite shard to execute in a format of `(?<shardIndex>\d+)/(?<shardCount>\d+)`.

`shardIndex` describes which shard to select while `shardCount` controls the number of shards the suite should be split into.

`shardIndex` and `shardCount` have to be 1-based, positive numbers, and `shardIndex` has to be lower than or equal to `shardCount`.

When `shard` is specified the configured [`testSequencer`](/docs/configuration#testsequencer-string) has to implement a `shard` method.

For example, to split the suite into three shards, each running one third of the tests:

```
jest --shard=1/3jest --shard=2/3jest --shard=3/3
```

### `--showConfig`[​](#--showconfig "Direct link to --showconfig")

Print your Jest config and then exits.

### `--showSeed`[​](#--showseed "Direct link to --showseed")

Prints the seed value in the test report summary. See [`--seed=<num>`](#--seednum) for the details.

Can also be set in configuration. See [`showSeed`](/docs/configuration#showseed-boolean).

### `--silent`[​](#--silent "Direct link to --silent")

Prevent tests from printing messages through the console.

### `--testEnvironmentOptions=<json string>`[​](#--testenvironmentoptionsjson-string "Direct link to --testenvironmentoptionsjson-string")

A JSON string with options that will be passed to the `testEnvironment`. The relevant options depend on the environment.

### `--testLocationInResults`[​](#--testlocationinresults "Direct link to --testlocationinresults")

Adds a `location` field to test results. Useful if you want to report the location of a test in a reporter.

note

In the resulting object `column` is 0-indexed while `line` is not.

```
{  "column": 4,  "line": 5}
```

### `--testMatch glob1 ... globN`[​](#--testmatch-glob1--globn "Direct link to --testmatch-glob1--globn")

The glob patterns Jest uses to detect test files. Please refer to the [`testMatch` configuration](/docs/configuration#testmatch-arraystring) for details.

### `--testNamePattern=<regex>`[​](#--testnamepatternregex "Direct link to --testnamepatternregex")

Alias: `-t`. Run only tests with a name that matches the regex. For example, suppose you want to run only tests related to authorization which will have names like `'GET /api/posts with auth'`, then you can use `jest -t=auth`.

tip

The regex is matched against the full name, which is a combination of the test name and all its surrounding describe blocks.

### `--testPathIgnorePatterns=<regex>|[array]`[​](#--testpathignorepatternsregexarray "Direct link to --testpathignorepatternsregexarray")

A single or array of regexp pattern strings that are tested against all tests paths before executing the test. Contrary to `--testPathPatterns`, it will only run those tests with a path that does not match with the provided regexp expressions.

To pass as an array use escaped parentheses and space delimited regexps such as `\(/node_modules/ /tests/e2e/\)`. Alternatively, you can omit parentheses by combining regexps into a single regexp like `/node_modules/|/tests/e2e/`. These two examples are equivalent.

### `--testPathPatterns=<regex>`[​](#--testpathpatternsregex "Direct link to --testpathpatternsregex")

A regexp pattern string that is matched against all tests paths before executing the test. On Windows, you will need to use `/` as a path separator or escape `\` as `\\`.

### `--testRunner=<path>`[​](#--testrunnerpath "Direct link to --testrunnerpath")

Lets you specify a custom test runner.

### `--testSequencer=<path>`[​](#--testsequencerpath "Direct link to --testsequencerpath")

Lets you specify a custom test sequencer. Please refer to the [`testSequencer` configuration](/docs/configuration#testsequencer-string) for details.

### `--testTimeout=<number>`[​](#--testtimeoutnumber "Direct link to --testtimeoutnumber")

Default timeout of a test in milliseconds. Default value: 5000.

### `--updateSnapshot`[​](#--updatesnapshot "Direct link to --updatesnapshot")

Alias: `-u`. Use this flag to re-record every snapshot that fails during this test run. Can be used together with a test suite pattern or with `--testNamePattern` to re-record snapshots.

### `--useStderr`[​](#--usestderr "Direct link to --usestderr")

Divert all output to stderr.

### `--verbose`[​](#--verbose "Direct link to --verbose")

Display individual test results with the test suite hierarchy.

### `--version`[​](#--version "Direct link to --version")

Alias: `-v`. Print the version and exit.

### `--waitForUnhandledRejections`[​](#--waitforunhandledrejections "Direct link to --waitforunhandledrejections")

Gives one event loop turn to handle `rejectionHandled`, `uncaughtException` or `unhandledRejection`.

Without this flag Jest may report false-positive errors (e.g. actually handled rejection reported) or not report actually unhandled rejection (or report it for different test case).

This option may add a noticeable overhead for fast test suites.

### `--watch`[​](#--watch "Direct link to --watch")

Watch files for changes and rerun tests related to changed files. If you want to re-run all tests when a file has changed, use the `--watchAll` option instead.

tip

Use `--no-watch` (or `--watch=false`) to explicitly disable the watch mode if it was enabled using `--watch`. In most CI environments, this is automatically handled for you.

### `--watchAll`[​](#--watchall "Direct link to --watchall")

Watch files for changes and rerun all tests when something changes. If you want to re-run only the tests that depend on the changed files, use the `--watch` option.

tip

Use `--no-watchAll` (or `--watchAll=false`) to explicitly disable the watch mode if it was enabled using `--watchAll`. In most CI environments, this is automatically handled for you.

### `--watchman`[​](#--watchman "Direct link to --watchman")

Whether to use [`watchman`](https://facebook.github.io/watchman/) for file crawling. Defaults to `true`. Disable using `--no-watchman`.

### `--workerThreads`[​](#--workerthreads "Direct link to --workerthreads")

Whether to use [worker threads](https://nodejs.org/dist/latest/docs/api/worker_threads.html) for parallelization. [Child processes](https://nodejs.org/dist/latest/docs/api/child_process.html) are used by default.

caution

This is **experimental feature**. See the [`workerThreads` configuration option](/docs/configuration#workerthreads) for more details.
