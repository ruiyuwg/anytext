On this page

Runtime representation of the test project configuration. It is accessible in the tests via [testInfo.project](/docs/api/class-testinfo#test-info-project) and [workerInfo.project](/docs/api/class-workerinfo#worker-info-project) and is passed to the test reporters. To see the format of the project in the Playwright configuration file please see [TestProject](/docs/api/class-testproject "TestProject") instead.

* * *

## Properties[​](#properties "Direct link to Properties")

### dependencies[​](#full-project-dependencies "Direct link to dependencies")

Added in: v1.31 fullProject.dependencies

See [testProject.dependencies](/docs/api/class-testproject#test-project-dependencies).

**Usage**

```
fullProject.dependencies
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>

* * *

### grep[​](#full-project-grep "Direct link to grep")

Added in: v1.10 fullProject.grep

See [testProject.grep](/docs/api/class-testproject#test-project-grep).

**Usage**

```
fullProject.grep
```

**Type**

-   [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")\>

* * *

### grepInvert[​](#full-project-grep-invert "Direct link to grepInvert")

Added in: v1.10 fullProject.grepInvert

See [testProject.grepInvert](/docs/api/class-testproject#test-project-grep-invert).

**Usage**

```
fullProject.grepInvert
```

**Type**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")\>

* * *

### metadata[​](#full-project-metadata "Direct link to metadata")

Added in: v1.10 fullProject.metadata

See [testProject.metadata](/docs/api/class-testproject#test-project-metadata).

**Usage**

```
fullProject.metadata
```

**Type**

-   [Metadata](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object<string, any>")

* * *

### name[​](#full-project-name "Direct link to name")

Added in: v1.10 fullProject.name

See [testProject.name](/docs/api/class-testproject#test-project-name).

**Usage**

```
fullProject.name
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### outputDir[​](#full-project-output-dir "Direct link to outputDir")

Added in: v1.10 fullProject.outputDir

See [testProject.outputDir](/docs/api/class-testproject#test-project-output-dir).

**Usage**

```
fullProject.outputDir
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### repeatEach[​](#full-project-repeat-each "Direct link to repeatEach")

Added in: v1.10 fullProject.repeatEach

See [testProject.repeatEach](/docs/api/class-testproject#test-project-repeat-each).

**Usage**

```
fullProject.repeatEach
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### retries[​](#full-project-retries "Direct link to retries")

Added in: v1.10 fullProject.retries

See [testProject.retries](/docs/api/class-testproject#test-project-retries).

**Usage**

```
fullProject.retries
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### snapshotDir[​](#full-project-snapshot-dir "Direct link to snapshotDir")

Added in: v1.10 fullProject.snapshotDir

See [testProject.snapshotDir](/docs/api/class-testproject#test-project-snapshot-dir).

**Usage**

```
fullProject.snapshotDir
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### teardown[​](#full-project-teardown "Direct link to teardown")

Added in: v1.34 fullProject.teardown

See [testProject.teardown](/docs/api/class-testproject#test-project-teardown).

**Usage**

```
fullProject.teardown
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### testDir[​](#full-project-test-dir "Direct link to testDir")

Added in: v1.10 fullProject.testDir

See [testProject.testDir](/docs/api/class-testproject#test-project-test-dir).

**Usage**

```
fullProject.testDir
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### testIgnore[​](#full-project-test-ignore "Direct link to testIgnore")

Added in: v1.10 fullProject.testIgnore

See [testProject.testIgnore](/docs/api/class-testproject#test-project-test-ignore).

**Usage**

```
fullProject.testIgnore
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")\>

* * *

### testMatch[​](#full-project-test-match "Direct link to testMatch")

Added in: v1.10 fullProject.testMatch

See [testProject.testMatch](/docs/api/class-testproject#test-project-test-match).

**Usage**

```
fullProject.testMatch
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")\>

* * *

### timeout[​](#full-project-timeout "Direct link to timeout")

Added in: v1.10 fullProject.timeout

See [testProject.timeout](/docs/api/class-testproject#test-project-timeout).

**Usage**

```
fullProject.timeout
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### use[​](#full-project-use "Direct link to use")

Added in: v1.10 fullProject.use

See [testProject.use](/docs/api/class-testproject#test-project-use).

**Usage**

```
fullProject.use
```

**Type**

-   [Fixtures](/docs/api/class-fixtures "Fixtures")
