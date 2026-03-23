-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Stackdriver Debugger Client - Class Agent (1.5.1) Stay organized with collections Save and categorize content based on your preferences.

Version 1.5.1keyboard\_arrow\_down

-   [1.9.5 (latest)](/php/docs/reference/cloud-debugger/latest/Agent)
-   [1.9.4](/php/docs/reference/cloud-debugger/1.9.4/Agent)
-   [1.8.8](/php/docs/reference/cloud-debugger/1.8.8/Agent)
-   [1.7.0](/php/docs/reference/cloud-debugger/1.7.0/Agent)
-   [1.6.4](/php/docs/reference/cloud-debugger/1.6.4/Agent)
-   [1.5.1](/php/docs/reference/cloud-debugger/1.5.1/Agent)
-   [1.4.16](/php/docs/reference/cloud-debugger/1.4.16/Agent)

Reference documentation and code samples for the Stackdriver Debugger Client class Agent.

This class is responsible for registering all debugger breakpoints and logpoints for each request. It should be created as early as possible in your application.

Example:

```
use Google\Cloud\Debugger\Agent;

$agent = new Agent();
```

## Namespace

Google \\ Cloud \\ Debugger

## Methods

### \_\_construct

Create a new Debugger Agent, registers all breakpoints for collection or execution, and registers a shutdown function for reporting results.

**Parameters**

**Name**

**Description**

`options`

`array`  

Configuration options.

`↳ storage`

`BreakpointStorageInterface`  

Breakpoint storage to fetch breakpoints from. **Defaults to** a new SysvBreakpointStorage instance.

`↳ sourceRoot`

`string`  

Path to the root of the source repository. **Defaults to** the directory of the calling file.

`↳ logger`

`LoggerInterface`  

PSR-3 compliant logger used to write logpoint records. **Defaults to** a new Stackdriver logger.

`↳ daemonOptions`

`array`  

Additional options to provide to the Daemon when registering.

`↳ maxDepth`

`int`  

Limits the number of stackframes with captured variables. To capture variables in all stackframes, set to PHP\_INT\_MAX. **Defaults to** 5.

`↳ maxMemberDepth`

`int`  

Maximum depth of member variables to capture. **Defaults to** 5.

`↳ maxPayloadSize`

`int`  

Maximum amount of space of captured data. **Defaults to** 32768.

`↳ maxMembers`

`int`  

Maximum number of member variables captured per variable. **Defaults to** 1000.

`↳ maxValueLength`

`int`  

Maximum length of the string representing the captured variable. **Defaults to** 500.

### handleSnapshot

Callback for reporting a snapshot.

**Parameters**

**Name**

**Description**

`snapshot`

`array`  

Snapshot data

`↳ id`

`string`  

The breakpoint id of the snapshot

`↳ evaluatedExpressions`

`array`  

The results of evaluating the snapshot's expressions

`↳ stackframes`

`array`  

List of captured stackframe data.

### handleLogpoint

Callback for reporting a logpoint.

**Parameters**

**Name**

**Description**

`level`

`mixed`  

`message`

`string`  

`context`

`array`  

**Returns**

**Type**

**Description**

`void`

### reportBreakpoints

Callback for batch runner to report a breakpoint.

**Parameter**

**Name**

**Description**

`breakpointsInfo`

`array`  

## Constants

### DEFAULT\_LOGPOINT\_LOG\_NAME

```
Value: 'debugger_logpoints'
```

### DEFAULT\_APP\_ENGINE\_LOG\_NAME

```
Value: 'appengine.googleapis.com%2Frequest_log'
```

### DEFAULT\_MAX\_DEPTH

```
Value: 5
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
