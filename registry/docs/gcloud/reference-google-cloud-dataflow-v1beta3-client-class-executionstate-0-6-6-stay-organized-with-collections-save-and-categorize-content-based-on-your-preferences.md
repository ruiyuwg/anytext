-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataflow V1beta3 Client - Class ExecutionState (0.6.6) Stay organized with collections Save and categorize content based on your preferences.

0.9.3 (latest) 0.9.2 0.8.2 0.7.1 0.6.6 0.5.1 0.4.1 0.3.10

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Dataflow V1beta3 Client class ExecutionState.

The state of some component of job execution.

Protobuf type `google.dataflow.v1beta3.ExecutionState`

## Namespace

Google \\ Cloud \\ Dataflow \\ V1beta3

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

### EXECUTION\_STATE\_UNKNOWN

```
Value: 0
```

The component state is unknown or unspecified.

Generated from protobuf enum `EXECUTION_STATE_UNKNOWN = 0;`

### EXECUTION\_STATE\_NOT\_STARTED

```
Value: 1
```

The component is not yet running.

Generated from protobuf enum `EXECUTION_STATE_NOT_STARTED = 1;`

### EXECUTION\_STATE\_RUNNING

```
Value: 2
```

The component is currently running.

Generated from protobuf enum `EXECUTION_STATE_RUNNING = 2;`

### EXECUTION\_STATE\_SUCCEEDED

```
Value: 3
```

The component succeeded.

Generated from protobuf enum `EXECUTION_STATE_SUCCEEDED = 3;`

### EXECUTION\_STATE\_FAILED

```
Value: 4
```

The component failed.

Generated from protobuf enum `EXECUTION_STATE_FAILED = 4;`

### EXECUTION\_STATE\_CANCELLED

```
Value: 5
```

Execution of the component was cancelled.

Generated from protobuf enum `EXECUTION_STATE_CANCELLED = 5;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
