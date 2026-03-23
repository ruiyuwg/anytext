-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Sql Admin V1beta4 Client - Class FailoverContext (0.16.1) Stay organized with collections Save and categorize content based on your preferences.

1.8.0 (latest) 1.7.0 1.6.0 1.5.0 1.4.0 1.3.1 1.2.6 1.1.0 1.0.0 0.19.0 0.18.0 0.17.1 0.16.1 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.1 0.2.12

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Sql Admin V1beta4 Client class FailoverContext.

Database instance failover context.

Generated from protobuf message `google.cloud.sql.v1beta4.FailoverContext`

## Namespace

Google \\ Cloud \\ Sql \\ V1beta4

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ settings_version`

`int|string`  

The current settings version of this instance. Request will be rejected if this version doesn't match the current settings version.

`↳ kind`

`string`  

This is always `sql#failoverContext`.

### getSettingsVersion

The current settings version of this instance. Request will be rejected if this version doesn't match the current settings version.

**Returns**

**Type**

**Description**

`int|string`

### setSettingsVersion

The current settings version of this instance. Request will be rejected if this version doesn't match the current settings version.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getKind

This is always `sql#failoverContext`.

**Returns**

**Type**

**Description**

`string`

### setKind

This is always `sql#failoverContext`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
