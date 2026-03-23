-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Stackdriver Monitoring V3 Client - Class Hourly (2.0.1) Stay organized with collections Save and categorize content based on your preferences.

2.2.2 (latest) 2.2.1 2.1.2 2.0.1 1.12.1 1.11.1 1.10.3 1.9.0 1.8.0 1.7.1 1.6.0 1.5.1 1.4.0 1.3.2 1.2.2

Reference documentation and code samples for the Stackdriver Monitoring V3 Client class Hourly.

Used to schedule the query to run every so many hours.

Generated from protobuf message `google.monitoring.v3.AlertPolicy.Condition.SqlCondition.Hourly`

## Namespace

Google \\ Cloud \\ Monitoring \\ V3 \\ AlertPolicy \\ Condition \\ SqlCondition

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ periodicity`

`int`  

Required. The number of hours between runs. Must be greater than or equal to 1 hour and less than or equal to 48 hours.

`↳ minute_offset`

`int`  

Optional. The number of minutes after the hour (in UTC) to run the query. Must be greater than or equal to 0 minutes and less than or equal to 59 minutes. If left unspecified, then an arbitrary offset is used.

### getPeriodicity

Required. The number of hours between runs. Must be greater than or equal to 1 hour and less than or equal to 48 hours.

**Returns**

**Type**

**Description**

`int`

### setPeriodicity

Required. The number of hours between runs. Must be greater than or equal to 1 hour and less than or equal to 48 hours.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getMinuteOffset

Optional. The number of minutes after the hour (in UTC) to run the query. Must be greater than or equal to 0 minutes and less than or equal to 59 minutes. If left unspecified, then an arbitrary offset is used.

**Returns**

**Type**

**Description**

`int`

### hasMinuteOffset

### clearMinuteOffset

### setMinuteOffset

Optional. The number of minutes after the hour (in UTC) to run the query. Must be greater than or equal to 0 minutes and less than or equal to 59 minutes. If left unspecified, then an arbitrary offset is used.

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
