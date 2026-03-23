-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Retail V2 Client - Class PurgeUserEventsResponse (1.3.1) Stay organized with collections Save and categorize content based on your preferences.

2.5.3 (latest) 2.5.2 2.4.0 2.3.1 2.2.1 2.1.3 2.0.0 1.7.0 1.6.4 1.5.0 1.4.2 1.3.1 1.2.1 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Retail V2 Client class PurgeUserEventsResponse.

Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.

Generated from protobuf message `google.cloud.retail.v2.PurgeUserEventsResponse`

## Namespace

Google \\ Cloud \\ Retail \\ V2

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ purged_events_count`

`int|string`  

The total count of events purged as a result of the operation.

### getPurgedEventsCount

The total count of events purged as a result of the operation.

**Returns**

**Type**

**Description**

`int|string`

### setPurgedEventsCount

The total count of events purged as a result of the operation.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
