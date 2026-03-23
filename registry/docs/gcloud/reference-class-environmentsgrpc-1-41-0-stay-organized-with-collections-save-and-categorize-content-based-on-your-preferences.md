-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class EnvironmentsGrpc (1.41.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0

```
public final class EnvironmentsGrpc
```

Managed Apache Airflow Environments.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> EnvironmentsGrpc

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

## Static Fields

### SERVICE\_NAME

```
public static final String SERVICE_NAME
```

**Field Value**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

## Static Methods

### bindService(EnvironmentsGrpc.AsyncService service)

```
public static final ServerServiceDefinition bindService(EnvironmentsGrpc.AsyncService service)
```

**Parameter**

**Name**

**Description**

`service`

`[EnvironmentsGrpc.AsyncService](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.EnvironmentsGrpc.AsyncService)`  

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### getCheckUpgradeMethod()

```
public static MethodDescriptor<CheckUpgradeRequest,Operation> getCheckUpgradeMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CheckUpgradeRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateEnvironmentMethod()

```
public static MethodDescriptor<CreateEnvironmentRequest,Operation> getCreateEnvironmentMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.CreateEnvironmentRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateUserWorkloadsConfigMapMethod()

```
public static MethodDescriptor<CreateUserWorkloadsConfigMapRequest,UserWorkloadsConfigMap> getCreateUserWorkloadsConfigMapMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateUserWorkloadsConfigMapRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.CreateUserWorkloadsConfigMapRequest),[UserWorkloadsConfigMap](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.UserWorkloadsConfigMap)>`

### getCreateUserWorkloadsSecretMethod()

```
public static MethodDescriptor<CreateUserWorkloadsSecretRequest,UserWorkloadsSecret> getCreateUserWorkloadsSecretMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateUserWorkloadsSecretRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.CreateUserWorkloadsSecretRequest),[UserWorkloadsSecret](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.UserWorkloadsSecret)>`

### getDatabaseFailoverMethod()

```
public static MethodDescriptor<DatabaseFailoverRequest,Operation> getDatabaseFailoverMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DatabaseFailoverRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.DatabaseFailoverRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteEnvironmentMethod()

```
public static MethodDescriptor<DeleteEnvironmentRequest,Operation> getDeleteEnvironmentMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.DeleteEnvironmentRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteUserWorkloadsConfigMapMethod()

```
public static MethodDescriptor<DeleteUserWorkloadsConfigMapRequest,Empty> getDeleteUserWorkloadsConfigMapMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteUserWorkloadsConfigMapRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.DeleteUserWorkloadsConfigMapRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getDeleteUserWorkloadsSecretMethod()

```
public static MethodDescriptor<DeleteUserWorkloadsSecretRequest,Empty> getDeleteUserWorkloadsSecretMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteUserWorkloadsSecretRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.DeleteUserWorkloadsSecretRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getExecuteAirflowCommandMethod()

```
public static MethodDescriptor<ExecuteAirflowCommandRequest,ExecuteAirflowCommandResponse> getExecuteAirflowCommandMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ExecuteAirflowCommandRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.ExecuteAirflowCommandRequest),[ExecuteAirflowCommandResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.ExecuteAirflowCommandResponse)>`

### getFetchDatabasePropertiesMethod()

```
public static MethodDescriptor<FetchDatabasePropertiesRequest,FetchDatabasePropertiesResponse> getFetchDatabasePropertiesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[FetchDatabasePropertiesRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.FetchDatabasePropertiesRequest),[FetchDatabasePropertiesResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.FetchDatabasePropertiesResponse)>`

### getGetEnvironmentMethod()

```
public static MethodDescriptor<GetEnvironmentRequest,Environment> getGetEnvironmentMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.GetEnvironmentRequest),[Environment](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.Environment)>`

### getGetUserWorkloadsConfigMapMethod()

```
public static MethodDescriptor<GetUserWorkloadsConfigMapRequest,UserWorkloadsConfigMap> getGetUserWorkloadsConfigMapMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetUserWorkloadsConfigMapRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.GetUserWorkloadsConfigMapRequest),[UserWorkloadsConfigMap](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.UserWorkloadsConfigMap)>`

### getGetUserWorkloadsSecretMethod()

```
public static MethodDescriptor<GetUserWorkloadsSecretRequest,UserWorkloadsSecret> getGetUserWorkloadsSecretMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetUserWorkloadsSecretRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.GetUserWorkloadsSecretRequest),[UserWorkloadsSecret](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.UserWorkloadsSecret)>`

### getListEnvironmentsMethod()

```
public static MethodDescriptor<ListEnvironmentsRequest,ListEnvironmentsResponse> getListEnvironmentsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListEnvironmentsRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsRequest),[ListEnvironmentsResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsResponse)>`

### getListUserWorkloadsConfigMapsMethod()

```
public static MethodDescriptor<ListUserWorkloadsConfigMapsRequest,ListUserWorkloadsConfigMapsResponse> getListUserWorkloadsConfigMapsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListUserWorkloadsConfigMapsRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.ListUserWorkloadsConfigMapsRequest),[ListUserWorkloadsConfigMapsResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.ListUserWorkloadsConfigMapsResponse)>`

### getListUserWorkloadsSecretsMethod()

```
public static MethodDescriptor<ListUserWorkloadsSecretsRequest,ListUserWorkloadsSecretsResponse> getListUserWorkloadsSecretsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListUserWorkloadsSecretsRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.ListUserWorkloadsSecretsRequest),[ListUserWorkloadsSecretsResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.ListUserWorkloadsSecretsResponse)>`

### getListWorkloadsMethod()

```
public static MethodDescriptor<ListWorkloadsRequest,ListWorkloadsResponse> getListWorkloadsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListWorkloadsRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.ListWorkloadsRequest),[ListWorkloadsResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.ListWorkloadsResponse)>`

### getLoadSnapshotMethod()

```
public static MethodDescriptor<LoadSnapshotRequest,Operation> getLoadSnapshotMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[LoadSnapshotRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.LoadSnapshotRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getPollAirflowCommandMethod()

```
public static MethodDescriptor<PollAirflowCommandRequest,PollAirflowCommandResponse> getPollAirflowCommandMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[PollAirflowCommandRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.PollAirflowCommandRequest),[PollAirflowCommandResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.PollAirflowCommandResponse)>`

### getRestartWebServerMethod()

```
public static MethodDescriptor<RestartWebServerRequest,Operation> getRestartWebServerMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[RestartWebServerRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.RestartWebServerRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getSaveSnapshotMethod()

```
public static MethodDescriptor<SaveSnapshotRequest,Operation> getSaveSnapshotMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[SaveSnapshotRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.SaveSnapshotRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### getStopAirflowCommandMethod()

```
public static MethodDescriptor<StopAirflowCommandRequest,StopAirflowCommandResponse> getStopAirflowCommandMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[StopAirflowCommandRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.StopAirflowCommandRequest),[StopAirflowCommandResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.StopAirflowCommandResponse)>`

### getUpdateEnvironmentMethod()

```
public static MethodDescriptor<UpdateEnvironmentRequest,Operation> getUpdateEnvironmentMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.UpdateEnvironmentRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getUpdateUserWorkloadsConfigMapMethod()

```
public static MethodDescriptor<UpdateUserWorkloadsConfigMapRequest,UserWorkloadsConfigMap> getUpdateUserWorkloadsConfigMapMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateUserWorkloadsConfigMapRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.UpdateUserWorkloadsConfigMapRequest),[UserWorkloadsConfigMap](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.UserWorkloadsConfigMap)>`

### getUpdateUserWorkloadsSecretMethod()

```
public static MethodDescriptor<UpdateUserWorkloadsSecretRequest,UserWorkloadsSecret> getUpdateUserWorkloadsSecretMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateUserWorkloadsSecretRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.UpdateUserWorkloadsSecretRequest),[UserWorkloadsSecret](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.UserWorkloadsSecret)>`

### newBlockingStub(Channel channel)

```
public static EnvironmentsGrpc.EnvironmentsBlockingStub newBlockingStub(Channel channel)
```

Creates a new blocking-style stub that supports unary and streaming output calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[EnvironmentsGrpc.EnvironmentsBlockingStub](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.EnvironmentsGrpc.EnvironmentsBlockingStub)`

### newFutureStub(Channel channel)

```
public static EnvironmentsGrpc.EnvironmentsFutureStub newFutureStub(Channel channel)
```

Creates a new ListenableFuture-style stub that supports unary calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[EnvironmentsGrpc.EnvironmentsFutureStub](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.EnvironmentsGrpc.EnvironmentsFutureStub)`

### newStub(Channel channel)

```
public static EnvironmentsGrpc.EnvironmentsStub newStub(Channel channel)
```

Creates a new async stub that supports all call types for the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[EnvironmentsGrpc.EnvironmentsStub](/java/docs/reference/google-cloud-orchestration-airflow/1.41.0/com.google.cloud.orchestration.airflow.service.v1beta1.EnvironmentsGrpc.EnvironmentsStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
