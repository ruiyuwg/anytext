-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SecureSourceManagerGrpc (0.28.0) Stay organized with collections Save and categorize content based on your preferences.

0.57.0 (latest) 0.55.0 0.53.0 0.52.0 0.50.0 0.48.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.38.0 0.37.0 0.34.0 0.33.0 0.32.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public final class SecureSourceManagerGrpc
```

Secure Source Manager API Access Secure Source Manager instances, resources, and repositories. This API is split across two servers: the Control Plane and the Data Plane. Data Plane endpoints are hosted directly by your Secure Source Manager instance, so you must connect to your instance's API hostname to access them. The API hostname looks like the following: https://\[instance-id\]-\[project-number\]-api.\[location\].sourcemanager.dev For example, [https://my-instance-702770452863-api.us-central1.sourcemanager.dev](https://my-instance-702770452863-api.us-central1.sourcemanager.dev) Data Plane endpoints are denoted with **Host: Data Plane**. All other endpoints are found in the normal Cloud API location, namely, `securcesourcemanager.googleapis.com`.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> SecureSourceManagerGrpc

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

### bindService(SecureSourceManagerGrpc.AsyncService service)

```
public static final ServerServiceDefinition bindService(SecureSourceManagerGrpc.AsyncService service)
```

**Parameter**

**Name**

**Description**

`service`

`[SecureSourceManagerGrpc.AsyncService](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.SecureSourceManagerGrpc.AsyncService)`  

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### getCreateBranchRuleMethod()

```
public static MethodDescriptor<CreateBranchRuleRequest,Operation> getCreateBranchRuleMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateBranchRuleRequest](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.CreateBranchRuleRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateInstanceMethod()

```
public static MethodDescriptor<CreateInstanceRequest,Operation> getCreateInstanceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateInstanceRequest](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.CreateInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateRepositoryMethod()

```
public static MethodDescriptor<CreateRepositoryRequest,Operation> getCreateRepositoryMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateRepositoryRequest](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.CreateRepositoryRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteBranchRuleMethod()

```
public static MethodDescriptor<DeleteBranchRuleRequest,Operation> getDeleteBranchRuleMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteBranchRuleRequest](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.DeleteBranchRuleRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteInstanceMethod()

```
public static MethodDescriptor<DeleteInstanceRequest,Operation> getDeleteInstanceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteInstanceRequest](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.DeleteInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteRepositoryMethod()

```
public static MethodDescriptor<DeleteRepositoryRequest,Operation> getDeleteRepositoryMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteRepositoryRequest](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.DeleteRepositoryRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getGetBranchRuleMethod()

```
public static MethodDescriptor<GetBranchRuleRequest,BranchRule> getGetBranchRuleMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetBranchRuleRequest](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.GetBranchRuleRequest),[BranchRule](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.BranchRule)>`

### getGetIamPolicyRepoMethod()

```
public static MethodDescriptor<GetIamPolicyRequest,Policy> getGetIamPolicyRepoMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<com.google.iam.v1.GetIamPolicyRequest,com.google.iam.v1.Policy>`

### getGetInstanceMethod()

```
public static MethodDescriptor<GetInstanceRequest,Instance> getGetInstanceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetInstanceRequest](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.GetInstanceRequest),[Instance](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.Instance)>`

### getGetRepositoryMethod()

```
public static MethodDescriptor<GetRepositoryRequest,Repository> getGetRepositoryMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetRepositoryRequest](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.GetRepositoryRequest),[Repository](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.Repository)>`

### getListBranchRulesMethod()

```
public static MethodDescriptor<ListBranchRulesRequest,ListBranchRulesResponse> getListBranchRulesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListBranchRulesRequest](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.ListBranchRulesRequest),[ListBranchRulesResponse](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.ListBranchRulesResponse)>`

### getListInstancesMethod()

```
public static MethodDescriptor<ListInstancesRequest,ListInstancesResponse> getListInstancesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListInstancesRequest](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.ListInstancesRequest),[ListInstancesResponse](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.ListInstancesResponse)>`

### getListRepositoriesMethod()

```
public static MethodDescriptor<ListRepositoriesRequest,ListRepositoriesResponse> getListRepositoriesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListRepositoriesRequest](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.ListRepositoriesRequest),[ListRepositoriesResponse](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.ListRepositoriesResponse)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### getSetIamPolicyRepoMethod()

```
public static MethodDescriptor<SetIamPolicyRequest,Policy> getSetIamPolicyRepoMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<com.google.iam.v1.SetIamPolicyRequest,com.google.iam.v1.Policy>`

### getTestIamPermissionsRepoMethod()

```
public static MethodDescriptor<TestIamPermissionsRequest,TestIamPermissionsResponse> getTestIamPermissionsRepoMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<com.google.iam.v1.TestIamPermissionsRequest,com.google.iam.v1.TestIamPermissionsResponse>`

### getUpdateBranchRuleMethod()

```
public static MethodDescriptor<UpdateBranchRuleRequest,Operation> getUpdateBranchRuleMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateBranchRuleRequest](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.UpdateBranchRuleRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### newBlockingStub(Channel channel)

```
public static SecureSourceManagerGrpc.SecureSourceManagerBlockingStub newBlockingStub(Channel channel)
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

`[SecureSourceManagerGrpc.SecureSourceManagerBlockingStub](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.SecureSourceManagerGrpc.SecureSourceManagerBlockingStub)`

### newFutureStub(Channel channel)

```
public static SecureSourceManagerGrpc.SecureSourceManagerFutureStub newFutureStub(Channel channel)
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

`[SecureSourceManagerGrpc.SecureSourceManagerFutureStub](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.SecureSourceManagerGrpc.SecureSourceManagerFutureStub)`

### newStub(Channel channel)

```
public static SecureSourceManagerGrpc.SecureSourceManagerStub newStub(Channel channel)
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

`[SecureSourceManagerGrpc.SecureSourceManagerStub](/java/docs/reference/google-cloud-securesourcemanager/0.28.0/com.google.cloud.securesourcemanager.v1.SecureSourceManagerGrpc.SecureSourceManagerStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
