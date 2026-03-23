-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Stackdriver Debugger Client - Class Daemon (1.9.4) Stay organized with collections Save and categorize content based on your preferences.

Version 1.9.4keyboard\_arrow\_down

-   [1.9.5 (latest)](/php/docs/reference/cloud-debugger/latest/Daemon)
-   [1.9.4](/php/docs/reference/cloud-debugger/1.9.4/Daemon)
-   [1.8.8](/php/docs/reference/cloud-debugger/1.8.8/Daemon)
-   [1.7.0](/php/docs/reference/cloud-debugger/1.7.0/Daemon)
-   [1.6.4](/php/docs/reference/cloud-debugger/1.6.4/Daemon)
-   [1.5.1](/php/docs/reference/cloud-debugger/1.5.1/Daemon)
-   [1.4.16](/php/docs/reference/cloud-debugger/1.4.16/Daemon)

Reference documentation and code samples for the Stackdriver Debugger Client class Daemon.

This class is responsible for registering itself as a Debuggee with the Stackdriver backend. It will fetch the list of breakpoints from the Stackdriver backend, validate and normalize them, and store them into the configured breakpoint storage.

Example:

```
use Google\Cloud\Debugger\Daemon;

$daemon = new Daemon();
$daemon->run();
```

## Namespace

Google \\ Cloud \\ Debugger

## Methods

### \_\_construct

Creates a new Daemon instance.

**Parameters**

**Name**

**Description**

`options`

`array`  

Configuration options.

`↳ sourceRoot`

`string`  

The full path to the source root. **Defaults to** the current working directory.

`↳ clientConfig`

`array`  

The options to instantiate the default DebuggerClient. [DebuggerClient::\_\_construct()](/php/docs/reference/cloud-debugger/1.9.4/DebuggerClient#_Google_Cloud_Debugger_DebuggerClient____construct__) for the available options.

`↳ sourceContext`

`array`  

The source code identifier. **Defaults to** values autodetected from the environment.

`↳ extSourceContext`

`array`  

The source code identifier. **Defaults to** the $sourceContext option.

`↳ uniquifier`

`string`  

A string when uniquely identifies this debuggee. **Defaults to** a value autodetected from the environment.

`↳ description`

`string`  

A display name for the debuggee in the Stackdriver Debugger UI. **Defaults to** a value autodetected from the environment.

`↳ storage`

`BreakpointStorageInterface`  

The breakpoint storage mechanism to use. **Defaults to** a new SysvBreakpointStorage instance.

`↳ labels`

`array`  

A set of custom debuggee properties, populated by the agent, to be displayed to the user. **Defaults to** labels detected from the environment.

`↳ metadataProvider`

`MetadataProviderInterface`  

**Defaults to** An automatically chosen provider, based on detected environment settings.

`↳ closureSerializer`

`ClosureSerializerInterface`  

An implementation responsible for serializing closures used in the `$clientConfig`. This is especially important when using the batch daemon. **Defaults to** [Google\\Cloud\\Core\\Batch\\OpisClosureSerializer](https://cloud.google.com/php/docs/reference/cloud-core/latest/Batch.OpisClosureSerializer.html) if the `opis/closure` library is installed.

`↳ register`

`bool`  

Whether to start the worker in the background using the BatchRunner. **Defaults to** false.

### run

Main loop for the daemon. Fetches breakpoints from the DebuggerClient and stores them in shared storage for the application to read. This function runs indefinitely.

Example:

```
$daemon->run();
```

**Parameters**

**Name**

**Description**

`client`

`?\Google\Cloud\Debugger\DebuggerClient`  

`asDaemon`

`mixed`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
