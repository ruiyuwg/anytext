On this page

Resolved configuration which is accessible via [testInfo.config](/docs/api/class-testinfo#test-info-config) and is passed to the test reporters. To see the format of Playwright configuration file, please see [TestConfig](/docs/api/class-testconfig "TestConfig") instead.

* * *

## Properties[​](#properties "Direct link to Properties")

### configFile[​](#full-config-config-file "Direct link to configFile")

Added in: v1.20 fullConfig.configFile

Path to the configuration file used to run the tests. The value is an empty string if no config file was used.

**Usage**

```
fullConfig.configFile
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### forbidOnly[​](#full-config-forbid-only "Direct link to forbidOnly")

Added in: v1.10 fullConfig.forbidOnly

See [testConfig.forbidOnly](/docs/api/class-testconfig#test-config-forbid-only).

**Usage**

```
fullConfig.forbidOnly
```

**Type**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")

* * *

### fullyParallel[​](#full-config-fully-parallel "Direct link to fullyParallel")

Added in: v1.20 fullConfig.fullyParallel

See [testConfig.fullyParallel](/docs/api/class-testconfig#test-config-fully-parallel).

**Usage**

```
fullConfig.fullyParallel
```

**Type**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")

* * *

### globalSetup[​](#full-config-global-setup "Direct link to globalSetup")

Added in: v1.10 fullConfig.globalSetup

See [testConfig.globalSetup](/docs/api/class-testconfig#test-config-global-setup).

**Usage**

```
fullConfig.globalSetup
```

**Type**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### globalTeardown[​](#full-config-global-teardown "Direct link to globalTeardown")

Added in: v1.10 fullConfig.globalTeardown

See [testConfig.globalTeardown](/docs/api/class-testconfig#test-config-global-teardown).

**Usage**

```
fullConfig.globalTeardown
```

**Type**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### globalTimeout[​](#full-config-global-timeout "Direct link to globalTimeout")

Added in: v1.10 fullConfig.globalTimeout

See [testConfig.globalTimeout](/docs/api/class-testconfig#test-config-global-timeout).

**Usage**

```
fullConfig.globalTimeout
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### grep[​](#full-config-grep "Direct link to grep")

Added in: v1.10 fullConfig.grep

See [testConfig.grep](/docs/api/class-testconfig#test-config-grep).

**Usage**

```
fullConfig.grep
```

**Type**

-   [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")\>

* * *

### grepInvert[​](#full-config-grep-invert "Direct link to grepInvert")

Added in: v1.10 fullConfig.grepInvert

See [testConfig.grepInvert](/docs/api/class-testconfig#test-config-grep-invert).

**Usage**

```
fullConfig.grepInvert
```

**Type**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")\>

* * *

### maxFailures[​](#full-config-max-failures "Direct link to maxFailures")

Added in: v1.10 fullConfig.maxFailures

See [testConfig.maxFailures](/docs/api/class-testconfig#test-config-max-failures).

**Usage**

```
fullConfig.maxFailures
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### metadata[​](#full-config-metadata "Direct link to metadata")

Added in: v1.10 fullConfig.metadata

See [testConfig.metadata](/docs/api/class-testconfig#test-config-metadata).

**Usage**

```
fullConfig.metadata
```

**Type**

-   [Metadata](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object<string, any>")

* * *

### preserveOutput[​](#full-config-preserve-output "Direct link to preserveOutput")

Added in: v1.10 fullConfig.preserveOutput

See [testConfig.preserveOutput](/docs/api/class-testconfig#test-config-preserve-output).

**Usage**

```
fullConfig.preserveOutput
```

**Type**

-   "always" | "never" | "failures-only"

* * *

### projects[​](#full-config-projects "Direct link to projects")

Added in: v1.10 fullConfig.projects

List of resolved projects.

**Usage**

```
fullConfig.projects
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[FullProject](/docs/api/class-fullproject "FullProject")\>

* * *

### quiet[​](#full-config-quiet "Direct link to quiet")

Added in: v1.10 fullConfig.quiet

See [testConfig.quiet](/docs/api/class-testconfig#test-config-quiet).

**Usage**

```
fullConfig.quiet
```

**Type**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")

* * *

### reportSlowTests[​](#full-config-report-slow-tests "Direct link to reportSlowTests")

Added in: v1.10 fullConfig.reportSlowTests

See [testConfig.reportSlowTests](/docs/api/class-testconfig#test-config-report-slow-tests).

**Usage**

```
fullConfig.reportSlowTests
```

**Type**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")
    -   `max` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        The maximum number of slow test files to report.
        
    -   `threshold` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        Test file duration in milliseconds that is considered slow.
        

* * *

### reporter[​](#full-config-reporter "Direct link to reporter")

Added in: v1.10 fullConfig.reporter

See [testConfig.reporter](/docs/api/class-testconfig#test-config-reporter).

**Usage**

```
fullConfig.reporter
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> | "list" | "dot" | "line" | "github" | "json" | "junit" | "null" | "html"
    -   `0` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        Reporter name or module or file path
        
    -   `1` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")
        
        An object with reporter options if any
        

* * *

### rootDir[​](#full-config-root-dir "Direct link to rootDir")

Added in: v1.20 fullConfig.rootDir

Base directory for all relative paths used in the reporters.

**Usage**

```
fullConfig.rootDir
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### shard[​](#full-config-shard "Direct link to shard")

Added in: v1.10 fullConfig.shard

See [testConfig.shard](/docs/api/class-testconfig#test-config-shard).

**Usage**

```
fullConfig.shard
```

**Type**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")
    -   `total` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        The total number of shards.
        
    -   `current` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        The index of the shard to execute, one-based.
        

* * *

### tags[​](#full-config-tags "Direct link to tags")

Added in: v1.57 fullConfig.tags

Resolved global tags. See [testConfig.tag](/docs/api/class-testconfig#test-config-tag).

**Usage**

```
fullConfig.tags
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>

* * *

### updateSnapshots[​](#full-config-update-snapshots "Direct link to updateSnapshots")

Added in: v1.10 fullConfig.updateSnapshots

See [testConfig.updateSnapshots](/docs/api/class-testconfig#test-config-update-snapshots).

**Usage**

```
fullConfig.updateSnapshots
```

**Type**

-   "all" | "changed" | "missing" | "none"

* * *

### updateSourceMethod[​](#full-config-update-source-method "Direct link to updateSourceMethod")

Added in: v1.50 fullConfig.updateSourceMethod

See [testConfig.updateSourceMethod](/docs/api/class-testconfig#test-config-update-source-method).

**Usage**

```
fullConfig.updateSourceMethod
```

**Type**

-   "overwrite" | "3way" | "patch"

* * *

### version[​](#full-config-version "Direct link to version")

Added in: v1.20 fullConfig.version

Playwright version.

**Usage**

```
fullConfig.version
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### webServer[​](#full-config-web-server "Direct link to webServer")

Added in: v1.10 fullConfig.webServer

See [testConfig.webServer](/docs/api/class-testconfig#test-config-web-server).

**Usage**

```
fullConfig.webServer
```

**Type**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")

* * *

### workers[​](#full-config-workers "Direct link to workers")

Added in: v1.10 fullConfig.workers

See [testConfig.workers](/docs/api/class-testconfig#test-config-workers).

**Usage**

```
fullConfig.workers
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
