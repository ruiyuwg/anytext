-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Firestore V1 Client - Class OperationState (1.39.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.39.0keyboard\_arrow\_down

-   [2.2.0-RC1](/php/docs/reference/cloud-firestore/2.2.0-RC1/Admin.V1.OperationState)
-   [2.1.0-RC1](/php/docs/reference/cloud-firestore/2.1.0-RC1/Admin.V1.OperationState)
-   [2.0.2-RC1](/php/docs/reference/cloud-firestore/2.0.2-RC1/Admin.V1.OperationState)
-   [1.55.0 (latest)](/php/docs/reference/cloud-firestore/latest/Admin.V1.OperationState)
-   [1.54.4](/php/docs/reference/cloud-firestore/1.54.4/Admin.V1.OperationState)
-   [1.53.1](/php/docs/reference/cloud-firestore/1.53.1/Admin.V1.OperationState)
-   [1.52.0](/php/docs/reference/cloud-firestore/1.52.0/Admin.V1.OperationState)
-   [1.51.0](/php/docs/reference/cloud-firestore/1.51.0/Admin.V1.OperationState)
-   [1.50.0](/php/docs/reference/cloud-firestore/1.50.0/Admin.V1.OperationState)
-   [1.48.1](/php/docs/reference/cloud-firestore/1.48.1/Admin.V1.OperationState)
-   [1.47.3](/php/docs/reference/cloud-firestore/1.47.3/Admin.V1.OperationState)
-   [1.46.0](/php/docs/reference/cloud-firestore/1.46.0/Admin.V1.OperationState)
-   [1.45.2](/php/docs/reference/cloud-firestore/1.45.2/Admin.V1.OperationState)
-   [1.44.1](/php/docs/reference/cloud-firestore/1.44.1/Admin.V1.OperationState)
-   [1.43.3](/php/docs/reference/cloud-firestore/1.43.3/Admin.V1.OperationState)
-   [1.40.0](/php/docs/reference/cloud-firestore/1.40.0/Admin.V1.OperationState)
-   [1.39.0](/php/docs/reference/cloud-firestore/1.39.0/Admin.V1.OperationState)
-   [1.38.0](/php/docs/reference/cloud-firestore/1.38.0/Admin.V1.OperationState)
-   [1.37.7](/php/docs/reference/cloud-firestore/1.37.7/Admin.V1.OperationState)
-   [1.36.1](/php/docs/reference/cloud-firestore/1.36.1/Admin.V1.OperationState)
-   [1.35.0](/php/docs/reference/cloud-firestore/1.35.0/Admin.V1.OperationState)
-   [1.34.0](/php/docs/reference/cloud-firestore/1.34.0/Admin.V1.OperationState)
-   [1.33.0](/php/docs/reference/cloud-firestore/1.33.0/Admin.V1.OperationState)
-   [1.32.0](/php/docs/reference/cloud-firestore/1.32.0/Admin.V1.OperationState)
-   [1.31.0](/php/docs/reference/cloud-firestore/1.31.0/Admin.V1.OperationState)
-   [1.30.0](/php/docs/reference/cloud-firestore/1.30.0/Admin.V1.OperationState)
-   [1.28.0](/php/docs/reference/cloud-firestore/1.28.0/Admin.V1.OperationState)
-   [1.27.3](/php/docs/reference/cloud-firestore/1.27.3/Admin.V1.OperationState)

Reference documentation and code samples for the Cloud Firestore V1 Client class OperationState.

Describes the state of the operation.

Protobuf type `google.firestore.admin.v1.OperationState`

## Namespace

Google \\ Cloud \\ Firestore \\ Admin \\ V1

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

### OPERATION\_STATE\_UNSPECIFIED

```
Value: 0
```

Unspecified.

Generated from protobuf enum `OPERATION_STATE_UNSPECIFIED = 0;`

### INITIALIZING

```
Value: 1
```

Request is being prepared for processing.

Generated from protobuf enum `INITIALIZING = 1;`

### PROCESSING

```
Value: 2
```

Request is actively being processed.

Generated from protobuf enum `PROCESSING = 2;`

### CANCELLING

```
Value: 3
```

Request is in the process of being cancelled after user called google.longrunning.Operations.CancelOperation on the operation.

Generated from protobuf enum `CANCELLING = 3;`

### FINALIZING

```
Value: 4
```

Request has been processed and is in its finalization stage.

Generated from protobuf enum `FINALIZING = 4;`

### SUCCESSFUL

```
Value: 5
```

Request has completed successfully.

Generated from protobuf enum `SUCCESSFUL = 5;`

### FAILED

```
Value: 6
```

Request has finished being processed, but encountered an error.

Generated from protobuf enum `FAILED = 6;`

### CANCELLED

```
Value: 7
```

Request has finished being cancelled after user called google.longrunning.Operations.CancelOperation.

Generated from protobuf enum `CANCELLED = 7;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
