-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Stackdriver Monitoring V3 Client - Class Position (2.2.2) Stay organized with collections Save and categorize content based on your preferences.

2.2.2 (latest) 2.2.1 2.1.2 2.0.1 1.12.1 1.11.1 1.10.3 1.9.0 1.8.0 1.7.1 1.6.0 1.5.1 1.4.0 1.3.2 1.2.2

Reference documentation and code samples for the Stackdriver Monitoring V3 Client class Position.

The position of a byte within the text.

Generated from protobuf message `google.monitoring.v3.TextLocator.Position`

## Namespace

Google \\ Cloud \\ Monitoring \\ V3 \\ TextLocator

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ line`

`int`  

The line, starting with 1, where the byte is positioned.

`↳ column`

`int`  

The column within the line, starting with 1, where the byte is positioned. This is a byte index even though the text is UTF-8.

### getLine

The line, starting with 1, where the byte is positioned.

**Returns**

**Type**

**Description**

`int`

### setLine

The line, starting with 1, where the byte is positioned.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getColumn

The column within the line, starting with 1, where the byte is positioned. This is a byte index even though the text is UTF-8.

**Returns**

**Type**

**Description**

`int`

### setColumn

The column within the line, starting with 1, where the byte is positioned. This is a byte index even though the text is UTF-8.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
