-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Bigtable V2 Client - Class RateLimitInfo (2.6.3) Stay organized with collections Save and categorize content based on your preferences.

2.21.1 (latest) 2.21.0 2.20.2 2.19.2 2.18.0 2.17.1 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.9.1 2.8.0 2.7.0 2.6.3 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.1 1.32.1 1.31.1 1.30.0 1.29.2 1.28.3 1.27.0 1.26.2 1.25.0 1.24.1 1.23.0 1.22.2 1.21.1 1.20.3

Reference documentation and code samples for the Cloud Bigtable V2 Client class RateLimitInfo.

Information about how client should adjust the load to Bigtable.

Generated from protobuf message `google.bigtable.v2.RateLimitInfo`

## Namespace

Google \\ Cloud \\ Bigtable \\ V2

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ period`

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)`  

Time that clients should wait before adjusting the target rate again. If clients adjust rate too frequently, the impact of the previous adjustment may not have been taken into account and may over-throttle or under-throttle. If clients adjust rate too slowly, they will not be responsive to load changes on server side, and may over-throttle or under-throttle.

`↳ factor`

`float`  

If it has been at least one `period` since the last load adjustment, the client should multiply the current load by this value to get the new target load. For example, if the current load is 100 and `factor` is 0.8, the new target load should be 80. After adjusting, the client should ignore `factor` until another `period` has passed. The client can measure its load using any unit that's comparable over time For example, QPS can be used as long as each request involves a similar amount of work.

### getPeriod

Time that clients should wait before adjusting the target rate again.

If clients adjust rate too frequently, the impact of the previous adjustment may not have been taken into account and may over-throttle or under-throttle. If clients adjust rate too slowly, they will not be responsive to load changes on server side, and may over-throttle or under-throttle.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)|null`

### hasPeriod

### clearPeriod

### setPeriod

Time that clients should wait before adjusting the target rate again.

If clients adjust rate too frequently, the impact of the previous adjustment may not have been taken into account and may over-throttle or under-throttle. If clients adjust rate too slowly, they will not be responsive to load changes on server side, and may over-throttle or under-throttle.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)`  

**Returns**

**Type**

**Description**

`$this`

### getFactor

If it has been at least one `period` since the last load adjustment, the client should multiply the current load by this value to get the new target load. For example, if the current load is 100 and `factor` is 0.8, the new target load should be 80. After adjusting, the client should ignore `factor` until another `period` has passed.

The client can measure its load using any unit that's comparable over time For example, QPS can be used as long as each request involves a similar amount of work.

**Returns**

**Type**

**Description**

`float`

### setFactor

If it has been at least one `period` since the last load adjustment, the client should multiply the current load by this value to get the new target load. For example, if the current load is 100 and `factor` is 0.8, the new target load should be 80. After adjusting, the client should ignore `factor` until another `period` has passed.

The client can measure its load using any unit that's comparable over time For example, QPS can be used as long as each request involves a similar amount of work.

**Parameter**

**Name**

**Description**

`var`

`float`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
