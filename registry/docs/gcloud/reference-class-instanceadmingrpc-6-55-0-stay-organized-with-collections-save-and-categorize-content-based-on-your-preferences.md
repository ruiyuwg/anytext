-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class InstanceAdminGrpc (6.55.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public final class InstanceAdminGrpc
```

Cloud Spanner Instance Admin API The Cloud Spanner Instance Admin API can be used to create, delete, modify and list instances. Instances are dedicated Cloud Spanner serving and storage resources to be used by Cloud Spanner databases. Each instance has a "configuration", which dictates where the serving resources for the Cloud Spanner instance are located (e.g., US-central, Europe). Configurations are created by Google based on resource availability. Cloud Spanner billing is based on the instances that exist and their sizes. After an instance exists, there are no additional per-database or per-operation charges for use of the instance (though there may be additional network bandwidth charges). Instances offer isolation: problems with databases in one instance will not affect other instances. However, within an instance databases can affect each other. For example, if one database in an instance receives a lot of requests and consumes most of the instance resources, fewer resources are available for other databases in that instance, and their performance may suffer.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> InstanceAdminGrpc

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

### bindService(InstanceAdminGrpc.AsyncService service)

```
public static final ServerServiceDefinition bindService(InstanceAdminGrpc.AsyncService service)
```

**Parameter**

**Name**

**Description**

`service`

`[InstanceAdminGrpc.AsyncService](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.InstanceAdminGrpc.AsyncService)`  

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### getCreateInstanceConfigMethod()

```
public static MethodDescriptor<CreateInstanceConfigRequest,Operation> getCreateInstanceConfigMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateInstanceConfigRequest](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.CreateInstanceConfigRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateInstanceMethod()

```
public static MethodDescriptor<CreateInstanceRequest,Operation> getCreateInstanceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateInstanceRequest](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.CreateInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteInstanceConfigMethod()

```
public static MethodDescriptor<DeleteInstanceConfigRequest,Empty> getDeleteInstanceConfigMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteInstanceConfigRequest](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.DeleteInstanceConfigRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getDeleteInstanceMethod()

```
public static MethodDescriptor<DeleteInstanceRequest,Empty> getDeleteInstanceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteInstanceRequest](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.DeleteInstanceRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getGetIamPolicyMethod()

```
public static MethodDescriptor<GetIamPolicyRequest,Policy> getGetIamPolicyMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<com.google.iam.v1.GetIamPolicyRequest,com.google.iam.v1.Policy>`

### getGetInstanceConfigMethod()

```
public static MethodDescriptor<GetInstanceConfigRequest,InstanceConfig> getGetInstanceConfigMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetInstanceConfigRequest](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.GetInstanceConfigRequest),[InstanceConfig](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.InstanceConfig)>`

### getGetInstanceMethod()

```
public static MethodDescriptor<GetInstanceRequest,Instance> getGetInstanceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetInstanceRequest](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.GetInstanceRequest),[Instance](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.Instance)>`

### getListInstanceConfigOperationsMethod()

```
public static MethodDescriptor<ListInstanceConfigOperationsRequest,ListInstanceConfigOperationsResponse> getListInstanceConfigOperationsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListInstanceConfigOperationsRequest](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.ListInstanceConfigOperationsRequest),[ListInstanceConfigOperationsResponse](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.ListInstanceConfigOperationsResponse)>`

### getListInstanceConfigsMethod()

```
public static MethodDescriptor<ListInstanceConfigsRequest,ListInstanceConfigsResponse> getListInstanceConfigsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListInstanceConfigsRequest](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.ListInstanceConfigsRequest),[ListInstanceConfigsResponse](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.ListInstanceConfigsResponse)>`

### getListInstancesMethod()

```
public static MethodDescriptor<ListInstancesRequest,ListInstancesResponse> getListInstancesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListInstancesRequest](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.ListInstancesRequest),[ListInstancesResponse](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.ListInstancesResponse)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### getSetIamPolicyMethod()

```
public static MethodDescriptor<SetIamPolicyRequest,Policy> getSetIamPolicyMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<com.google.iam.v1.SetIamPolicyRequest,com.google.iam.v1.Policy>`

### getTestIamPermissionsMethod()

```
public static MethodDescriptor<TestIamPermissionsRequest,TestIamPermissionsResponse> getTestIamPermissionsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<com.google.iam.v1.TestIamPermissionsRequest,com.google.iam.v1.TestIamPermissionsResponse>`

### getUpdateInstanceConfigMethod()

```
public static MethodDescriptor<UpdateInstanceConfigRequest,Operation> getUpdateInstanceConfigMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateInstanceConfigRequest](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.UpdateInstanceConfigRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getUpdateInstanceMethod()

```
public static MethodDescriptor<UpdateInstanceRequest,Operation> getUpdateInstanceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateInstanceRequest](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.UpdateInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### newBlockingStub(Channel channel)

```
public static InstanceAdminGrpc.InstanceAdminBlockingStub newBlockingStub(Channel channel)
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

`[InstanceAdminGrpc.InstanceAdminBlockingStub](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.InstanceAdminGrpc.InstanceAdminBlockingStub)`

### newFutureStub(Channel channel)

```
public static InstanceAdminGrpc.InstanceAdminFutureStub newFutureStub(Channel channel)
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

`[InstanceAdminGrpc.InstanceAdminFutureStub](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.InstanceAdminGrpc.InstanceAdminFutureStub)`

### newStub(Channel channel)

```
public static InstanceAdminGrpc.InstanceAdminStub newStub(Channel channel)
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

`[InstanceAdminGrpc.InstanceAdminStub](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.admin.instance.v1.InstanceAdminGrpc.InstanceAdminStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
