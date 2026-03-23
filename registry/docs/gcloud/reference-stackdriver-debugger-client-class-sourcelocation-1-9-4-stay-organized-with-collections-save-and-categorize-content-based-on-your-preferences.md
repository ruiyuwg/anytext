-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Stackdriver Debugger Client - Class SourceLocation (1.9.4) Stay organized with collections Save and categorize content based on your preferences.

Version 1.9.4keyboard\_arrow\_down

-   [1.9.5 (latest)](/php/docs/reference/cloud-debugger/latest/SourceLocation)
-   [1.9.4](/php/docs/reference/cloud-debugger/1.9.4/SourceLocation)
-   [1.8.8](/php/docs/reference/cloud-debugger/1.8.8/SourceLocation)
-   [1.7.0](/php/docs/reference/cloud-debugger/1.7.0/SourceLocation)
-   [1.6.4](/php/docs/reference/cloud-debugger/1.6.4/SourceLocation)
-   [1.5.1](/php/docs/reference/cloud-debugger/1.5.1/SourceLocation)
-   [1.4.16](/php/docs/reference/cloud-debugger/1.4.16/SourceLocation)

Reference documentation and code samples for the Stackdriver Debugger Client class SourceLocation.

Represents a location in the source code.

Example:

```
use Google\Cloud\Debugger\SourceLocation;

$location = new SourceLocation('/path/to/file.php', 10);
```

## Namespace

Google \\ Cloud \\ Debugger

## Methods

### \_\_construct

Instantiate a new SourceLocation

**Parameters**

**Name**

**Description**

`path`

`string`  

Path to the source file within the source context of the target binary.

`line`

`int`  

Line inside the file. The first line in the file has the value 1.

### path

Returns the path to the source file.

Example:

```
echo $location->path();
```

**Returns**

**Type**

**Description**

`string`

### line

Returns the line inside the file.

Example:

```
echo $location->line();
```

**Returns**

**Type**

**Description**

`int`

### info

Return a serializable version of this object

**Returns**

**Type**

**Description**

`array`

### static::fromJson

Load a SourceLocation from JSON form

Example:

```
$location = SourceLocation::fromJSON([
    'path' => '/path/to/file.php',
    'line' => 10
]);
```

**Parameters**

**Name**

**Description**

`data`

`array`  

SourceLocation data

`↳ path`

`string`  

Path to the source file within the source context of the target binary.

`↳ line`

`int`  

Line inside the file. The first line in the file has the value 1.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
