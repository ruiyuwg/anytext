-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ExecutionsGrpc.AsyncService (0.56.0) Stay organized with collections Save and categorize content based on your preferences.

0.87.0 (latest) 0.85.0 0.83.0 0.82.0 0.80.0 0.78.0 0.76.0 0.75.0 0.74.0 0.73.0 0.72.0 0.70.0 0.68.0 0.67.0 0.64.0 0.63.0 0.62.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.5 0.2.1 0.1.2

```
public static interface ExecutionsGrpc.AsyncService
```

Cloud Run Execution Control Plane API.

## Methods

### cancelExecution(CancelExecutionRequest request, StreamObserver<Operation> responseObserver)

```
public default void cancelExecution(CancelExecutionRequest request, StreamObserver<Operation> responseObserver)
```

Cancels an Execution.

**Parameters**

**Name**

**Description**

`request`

`[CancelExecutionRequest](/java/docs/reference/google-cloud-run/0.56.0/com.google.cloud.run.v2.CancelExecutionRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteExecution(DeleteExecutionRequest request, StreamObserver<Operation> responseObserver)

```
public default void deleteExecution(DeleteExecutionRequest request, StreamObserver<Operation> responseObserver)
```

Deletes an Execution.

**Parameters**

**Name**

**Description**

`request`

`[DeleteExecutionRequest](/java/docs/reference/google-cloud-run/0.56.0/com.google.cloud.run.v2.DeleteExecutionRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### getExecution(GetExecutionRequest request, StreamObserver<Execution> responseObserver)

```
public default void getExecution(GetExecutionRequest request, StreamObserver<Execution> responseObserver)
```

Gets information about an Execution.

**Parameters**

**Name**

**Description**

`request`

`[GetExecutionRequest](/java/docs/reference/google-cloud-run/0.56.0/com.google.cloud.run.v2.GetExecutionRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Execution](/java/docs/reference/google-cloud-run/0.56.0/com.google.cloud.run.v2.Execution)>`  

### listExecutions(ListExecutionsRequest request, StreamObserver<ListExecutionsResponse> responseObserver)

```
public default void listExecutions(ListExecutionsRequest request, StreamObserver<ListExecutionsResponse> responseObserver)
```

Lists Executions from a Job. Results are sorted by creation time, descending.

**Parameters**

**Name**

**Description**

`request`

`[ListExecutionsRequest](/java/docs/reference/google-cloud-run/0.56.0/com.google.cloud.run.v2.ListExecutionsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListExecutionsResponse](/java/docs/reference/google-cloud-run/0.56.0/com.google.cloud.run.v2.ListExecutionsResponse)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
