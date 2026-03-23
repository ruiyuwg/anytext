-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class EnvironmentsStub (1.31.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

```
public abstract class EnvironmentsStub implements BackgroundResource
```

Base stub class for the Environments service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> EnvironmentsStub

## Implements

[BackgroundResource](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.core.BackgroundResource.html)

## Inherited Members

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Constructors

### EnvironmentsStub()

```
public EnvironmentsStub()
```

## Methods

### checkUpgradeCallable()

```
public UnaryCallable<CheckUpgradeRequest,Operation> checkUpgradeCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CheckUpgradeRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### checkUpgradeOperationCallable()

```
public OperationCallable<CheckUpgradeRequest,CheckUpgradeResponse,OperationMetadata> checkUpgradeOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CheckUpgradeRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeRequest),[CheckUpgradeResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeResponse),[OperationMetadata](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata)>`

### close()

```
public abstract void close()
```

### createEnvironmentCallable()

```
public UnaryCallable<CreateEnvironmentRequest,Operation> createEnvironmentCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.CreateEnvironmentRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createEnvironmentOperationCallable()

```
public OperationCallable<CreateEnvironmentRequest,Environment,OperationMetadata> createEnvironmentOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CreateEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.CreateEnvironmentRequest),[Environment](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.Environment),[OperationMetadata](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata)>`

### databaseFailoverCallable()

```
public UnaryCallable<DatabaseFailoverRequest,Operation> databaseFailoverCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DatabaseFailoverRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.DatabaseFailoverRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### databaseFailoverOperationCallable()

```
public OperationCallable<DatabaseFailoverRequest,DatabaseFailoverResponse,OperationMetadata> databaseFailoverOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DatabaseFailoverRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.DatabaseFailoverRequest),[DatabaseFailoverResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.DatabaseFailoverResponse),[OperationMetadata](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata)>`

### deleteEnvironmentCallable()

```
public UnaryCallable<DeleteEnvironmentRequest,Operation> deleteEnvironmentCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.DeleteEnvironmentRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteEnvironmentOperationCallable()

```
public OperationCallable<DeleteEnvironmentRequest,Empty,OperationMetadata> deleteEnvironmentOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.DeleteEnvironmentRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata)>`

### executeAirflowCommandCallable()

```
public UnaryCallable<ExecuteAirflowCommandRequest,ExecuteAirflowCommandResponse> executeAirflowCommandCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ExecuteAirflowCommandRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.ExecuteAirflowCommandRequest),[ExecuteAirflowCommandResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.ExecuteAirflowCommandResponse)>`

### fetchDatabasePropertiesCallable()

```
public UnaryCallable<FetchDatabasePropertiesRequest,FetchDatabasePropertiesResponse> fetchDatabasePropertiesCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[FetchDatabasePropertiesRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.FetchDatabasePropertiesRequest),[FetchDatabasePropertiesResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.FetchDatabasePropertiesResponse)>`

### getEnvironmentCallable()

```
public UnaryCallable<GetEnvironmentRequest,Environment> getEnvironmentCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.GetEnvironmentRequest),[Environment](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.Environment)>`

### getHttpJsonOperationsStub()

```
public OperationsStub getHttpJsonOperationsStub()
```

**Returns**

**Type**

**Description**

`[OperationsStub](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.longrunning.stub.OperationsStub.html)`

### getOperationsStub()

```
public OperationsStub getOperationsStub()
```

**Returns**

**Type**

**Description**

`[OperationsStub](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.stub.OperationsStub.html)`

### listEnvironmentsCallable()

```
public UnaryCallable<ListEnvironmentsRequest,ListEnvironmentsResponse> listEnvironmentsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListEnvironmentsRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsRequest),[ListEnvironmentsResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsResponse)>`

### listEnvironmentsPagedCallable()

```
public UnaryCallable<ListEnvironmentsRequest,EnvironmentsClient.ListEnvironmentsPagedResponse> listEnvironmentsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListEnvironmentsRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsRequest),[ListEnvironmentsPagedResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.EnvironmentsClient.ListEnvironmentsPagedResponse)>`

### loadSnapshotCallable()

```
public UnaryCallable<LoadSnapshotRequest,Operation> loadSnapshotCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[LoadSnapshotRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.LoadSnapshotRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### loadSnapshotOperationCallable()

```
public OperationCallable<LoadSnapshotRequest,LoadSnapshotResponse,OperationMetadata> loadSnapshotOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[LoadSnapshotRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.LoadSnapshotRequest),[LoadSnapshotResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.LoadSnapshotResponse),[OperationMetadata](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata)>`

### pollAirflowCommandCallable()

```
public UnaryCallable<PollAirflowCommandRequest,PollAirflowCommandResponse> pollAirflowCommandCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[PollAirflowCommandRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.PollAirflowCommandRequest),[PollAirflowCommandResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.PollAirflowCommandResponse)>`

### restartWebServerCallable()

```
public UnaryCallable<RestartWebServerRequest,Operation> restartWebServerCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[RestartWebServerRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.RestartWebServerRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### restartWebServerOperationCallable()

```
public OperationCallable<RestartWebServerRequest,Environment,OperationMetadata> restartWebServerOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[RestartWebServerRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.RestartWebServerRequest),[Environment](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.Environment),[OperationMetadata](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata)>`

### saveSnapshotCallable()

```
public UnaryCallable<SaveSnapshotRequest,Operation> saveSnapshotCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[SaveSnapshotRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.SaveSnapshotRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### saveSnapshotOperationCallable()

```
public OperationCallable<SaveSnapshotRequest,SaveSnapshotResponse,OperationMetadata> saveSnapshotOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[SaveSnapshotRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.SaveSnapshotRequest),[SaveSnapshotResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.SaveSnapshotResponse),[OperationMetadata](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata)>`

### stopAirflowCommandCallable()

```
public UnaryCallable<StopAirflowCommandRequest,StopAirflowCommandResponse> stopAirflowCommandCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[StopAirflowCommandRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.StopAirflowCommandRequest),[StopAirflowCommandResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.StopAirflowCommandResponse)>`

### updateEnvironmentCallable()

```
public UnaryCallable<UpdateEnvironmentRequest,Operation> updateEnvironmentCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.UpdateEnvironmentRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateEnvironmentOperationCallable()

```
public OperationCallable<UpdateEnvironmentRequest,Environment,OperationMetadata> updateEnvironmentOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[UpdateEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.UpdateEnvironmentRequest),[Environment](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.Environment),[OperationMetadata](/java/docs/reference/google-cloud-orchestration-airflow/1.31.0/com.google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
