-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataflow V1beta3 Client - Class Filter (0.4.1) Stay organized with collections Save and categorize content based on your preferences.

0.9.3 (latest) 0.9.2 0.8.2 0.7.1 0.6.6 0.5.1 0.4.1 0.3.10

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Dataflow V1beta3 Client class Filter.

This field filters out and returns jobs in the specified job state. The order of data returned is determined by the filter used, and is subject to change.

Protobuf type `google.dataflow.v1beta3.ListJobsRequest.Filter`

## Namespace

Google \\ Cloud \\ Dataflow \\ V1beta3 \\ ListJobsRequest

## Methods

### static::name

**Parameter**

**Name**

**Description**

`value`

`mixed`  

### static::value

**Parameter**

**Name**

**Description**

`name`

`mixed`  

## Constants

### UNKNOWN

```
Value: 0
```

The filter isn't specified, or is unknown. This returns all jobs ordered on descending `JobUuid`.

Generated from protobuf enum `UNKNOWN = 0;`

### ALL

```
Value: 1
```

Returns all running jobs first ordered on creation timestamp, then returns all terminated jobs ordered on the termination timestamp.

Generated from protobuf enum `ALL = 1;`

### TERMINATED

```
Value: 2
```

Filters the jobs that have a terminated state, ordered on the termination timestamp. Example terminated states: `JOB_STATE_STOPPED`, `JOB_STATE_UPDATED`, `JOB_STATE_DRAINED`, etc.

Generated from protobuf enum `TERMINATED = 2;`

### ACTIVE

```
Value: 3
```

Filters the jobs that are running ordered on the creation timestamp.

Generated from protobuf enum `ACTIVE = 3;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
