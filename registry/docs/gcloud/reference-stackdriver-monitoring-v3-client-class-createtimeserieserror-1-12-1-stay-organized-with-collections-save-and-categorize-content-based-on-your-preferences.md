-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Stackdriver Monitoring V3 Client - Class CreateTimeSeriesError (1.12.1) Stay organized with collections Save and categorize content based on your preferences.

2.2.2 (latest) 2.2.1 2.1.2 2.0.1 1.12.1 1.11.1 1.10.3 1.9.0 1.8.0 1.7.1 1.6.0 1.5.1 1.4.0 1.3.2 1.2.2

Reference documentation and code samples for the Stackdriver Monitoring V3 Client class CreateTimeSeriesError.

DEPRECATED. Used to hold per-time-series error status.

Generated from protobuf message `google.monitoring.v3.CreateTimeSeriesError`

## Namespace

Google \\ Cloud \\ Monitoring \\ V3

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ time_series`

`[TimeSeries](/php/docs/reference/cloud-monitoring/1.12.1/V3.TimeSeries)`  

DEPRECATED. Time series ID that resulted in the `status` error.

`↳ status`

`[Google\Rpc\Status](https://cloud.google.com/php/docs/reference/common-protos/latest/Rpc.Status.html)`  

DEPRECATED. The status of the requested write operation for `time_series`.

### getTimeSeries

DEPRECATED. Time series ID that resulted in the `status` error.

**Returns**

**Type**

**Description**

`[TimeSeries](/php/docs/reference/cloud-monitoring/1.12.1/V3.TimeSeries)|null`

### hasTimeSeries

### clearTimeSeries

### setTimeSeries

DEPRECATED. Time series ID that resulted in the `status` error.

**Parameter**

**Name**

**Description**

`var`

`[TimeSeries](/php/docs/reference/cloud-monitoring/1.12.1/V3.TimeSeries)`  

**Returns**

**Type**

**Description**

`$this`

### getStatus

DEPRECATED. The status of the requested write operation for `time_series`.

**Returns**

**Type**

**Description**

`[Google\Rpc\Status](https://cloud.google.com/php/docs/reference/common-protos/latest/Rpc.Status.html)|null`

### hasStatus

### clearStatus

### setStatus

DEPRECATED. The status of the requested write operation for `time_series`.

**Parameter**

**Name**

**Description**

`var`

`[Google\Rpc\Status](https://cloud.google.com/php/docs/reference/common-protos/latest/Rpc.Status.html)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
