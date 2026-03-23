-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataproc V1 Client - Class Substate (3.3.0) Stay organized with collections Save and categorize content based on your preferences.

3.14.0 (latest) 3.13.4 3.12.0 3.11.0 3.10.1 3.9.0 3.8.1 3.7.1 3.6.1 3.5.1 3.4.0 3.3.0 3.2.2 2.9.1 2.8.2 2.7.0 2.6.1 2.5.0 2.3.0 2.2.3 2.1.0 2.0.0

Reference documentation and code samples for the Google Cloud Dataproc V1 Client class Substate.

The cluster substate.

Protobuf type `google.cloud.dataproc.v1.ClusterStatus.Substate`

## Methods

### name

**Parameter**

**Name**

**Description**

`value`

`mixed`  

### value

**Parameter**

**Name**

**Description**

`name`

`mixed`  

## Constants

### UNSPECIFIED

```
Value: 0
```

The cluster substate is unknown.

Generated from protobuf enum `UNSPECIFIED = 0;`

### UNHEALTHY

```
Value: 1
```

The cluster is known to be in an unhealthy state (for example, critical daemons are not running or HDFS capacity is exhausted).

Applies to RUNNING state.

Generated from protobuf enum `UNHEALTHY = 1;`

### STALE\_STATUS

```
Value: 2
```

The agent-reported status is out of date (may occur if Dataproc loses communication with Agent).

Applies to RUNNING state.

Generated from protobuf enum `STALE_STATUS = 2;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
