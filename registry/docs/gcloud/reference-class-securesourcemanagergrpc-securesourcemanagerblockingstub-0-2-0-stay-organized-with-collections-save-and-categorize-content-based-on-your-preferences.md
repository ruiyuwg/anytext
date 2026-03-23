-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SecureSourceManagerGrpc.SecureSourceManagerBlockingStub (0.2.0) Stay organized with collections Save and categorize content based on your preferences.

0.57.0 (latest) 0.55.0 0.53.0 0.52.0 0.50.0 0.48.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.38.0 0.37.0 0.34.0 0.33.0 0.32.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static final class SecureSourceManagerGrpc.SecureSourceManagerBlockingStub extends AbstractBlockingStub<SecureSourceManagerGrpc.SecureSourceManagerBlockingStub>
```

A stub to allow clients to do synchronous rpc calls to service SecureSourceManager.

Secure Source Manager API Access Secure Source Manager instances, resources, and repositories. This API is split across two servers: the Control Plane and the Data Plane. Data Plane endpoints are hosted directly by your Secure Source Manager instance, so you must connect to your instance's API hostname to access them. The API hostname looks like the following: https://\[instance-id\]-\[project-number\]-api.\[location\].sourcemanager.dev For example, [https://my-instance-702770452863-api.us-central1.sourcemanager.dev](https://my-instance-702770452863-api.us-central1.sourcemanager.dev) Data Plane endpoints are denoted with **Host: Data Plane**. All other endpoints are found in the normal Cloud API location, namely, `securcesourcemanager.googleapis.com`.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> SecureSourceManagerGrpc.SecureSourceManagerBlockingStub

## Inherited Members

io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T)

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.getCallOptions()

io.grpc.stub.AbstractStub.getChannel()

io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials)

io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel)

io.grpc.stub.AbstractStub.withCompression(java.lang.String)

io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline)

io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)

io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)

io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)

io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)

io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)

io.grpc.stub.AbstractStub.withWaitForReady()

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

## Methods

### build(Channel channel, CallOptions callOptions)

```
protected SecureSourceManagerGrpc.SecureSourceManagerBlockingStub build(Channel channel, CallOptions callOptions)
```

**Parameters**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

`callOptions`

`io.grpc.CallOptions`  

**Returns**

**Type**

**Description**

`[SecureSourceManagerGrpc.SecureSourceManagerBlockingStub](/java/docs/reference/google-cloud-securesourcemanager/0.2.0/com.google.cloud.securesourcemanager.v1.SecureSourceManagerGrpc.SecureSourceManagerBlockingStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createInstance(CreateInstanceRequest request)

```
public Operation createInstance(CreateInstanceRequest request)
```

Creates a new instance in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[CreateInstanceRequest](/java/docs/reference/google-cloud-securesourcemanager/0.2.0/com.google.cloud.securesourcemanager.v1.CreateInstanceRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### createRepository(CreateRepositoryRequest request)

```
public Operation createRepository(CreateRepositoryRequest request)
```

Creates a new repository in a given project and location. **Host: Data Plane**

**Parameter**

**Name**

**Description**

`request`

`[CreateRepositoryRequest](/java/docs/reference/google-cloud-securesourcemanager/0.2.0/com.google.cloud.securesourcemanager.v1.CreateRepositoryRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### deleteInstance(DeleteInstanceRequest request)

```
public Operation deleteInstance(DeleteInstanceRequest request)
```

Deletes a single instance.

**Parameter**

**Name**

**Description**

`request`

`[DeleteInstanceRequest](/java/docs/reference/google-cloud-securesourcemanager/0.2.0/com.google.cloud.securesourcemanager.v1.DeleteInstanceRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### deleteRepository(DeleteRepositoryRequest request)

```
public Operation deleteRepository(DeleteRepositoryRequest request)
```

Deletes a Repository. **Host: Data Plane**

**Parameter**

**Name**

**Description**

`request`

`[DeleteRepositoryRequest](/java/docs/reference/google-cloud-securesourcemanager/0.2.0/com.google.cloud.securesourcemanager.v1.DeleteRepositoryRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### getIamPolicyRepo(GetIamPolicyRequest request)

```
public Policy getIamPolicyRepo(GetIamPolicyRequest request)
```

Get IAM policy for a repository.

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.GetIamPolicyRequest`  

**Returns**

**Type**

**Description**

`com.google.iam.v1.Policy`

### getInstance(GetInstanceRequest request)

```
public Instance getInstance(GetInstanceRequest request)
```

Gets details of a single instance.

**Parameter**

**Name**

**Description**

`request`

`[GetInstanceRequest](/java/docs/reference/google-cloud-securesourcemanager/0.2.0/com.google.cloud.securesourcemanager.v1.GetInstanceRequest)`  

**Returns**

**Type**

**Description**

`[Instance](/java/docs/reference/google-cloud-securesourcemanager/0.2.0/com.google.cloud.securesourcemanager.v1.Instance)`

### getRepository(GetRepositoryRequest request)

```
public Repository getRepository(GetRepositoryRequest request)
```

Gets metadata of a repository. **Host: Data Plane**

**Parameter**

**Name**

**Description**

`request`

`[GetRepositoryRequest](/java/docs/reference/google-cloud-securesourcemanager/0.2.0/com.google.cloud.securesourcemanager.v1.GetRepositoryRequest)`  

**Returns**

**Type**

**Description**

`[Repository](/java/docs/reference/google-cloud-securesourcemanager/0.2.0/com.google.cloud.securesourcemanager.v1.Repository)`

### listInstances(ListInstancesRequest request)

```
public ListInstancesResponse listInstances(ListInstancesRequest request)
```

Lists Instances in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[ListInstancesRequest](/java/docs/reference/google-cloud-securesourcemanager/0.2.0/com.google.cloud.securesourcemanager.v1.ListInstancesRequest)`  

**Returns**

**Type**

**Description**

`[ListInstancesResponse](/java/docs/reference/google-cloud-securesourcemanager/0.2.0/com.google.cloud.securesourcemanager.v1.ListInstancesResponse)`

### listRepositories(ListRepositoriesRequest request)

```
public ListRepositoriesResponse listRepositories(ListRepositoriesRequest request)
```

Lists Repositories in a given project and location. **Host: Data Plane**

**Parameter**

**Name**

**Description**

`request`

`[ListRepositoriesRequest](/java/docs/reference/google-cloud-securesourcemanager/0.2.0/com.google.cloud.securesourcemanager.v1.ListRepositoriesRequest)`  

**Returns**

**Type**

**Description**

`[ListRepositoriesResponse](/java/docs/reference/google-cloud-securesourcemanager/0.2.0/com.google.cloud.securesourcemanager.v1.ListRepositoriesResponse)`

### setIamPolicyRepo(SetIamPolicyRequest request)

```
public Policy setIamPolicyRepo(SetIamPolicyRequest request)
```

Set IAM policy on a repository.

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.SetIamPolicyRequest`  

**Returns**

**Type**

**Description**

`com.google.iam.v1.Policy`

### testIamPermissionsRepo(TestIamPermissionsRequest request)

```
public TestIamPermissionsResponse testIamPermissionsRepo(TestIamPermissionsRequest request)
```

Test IAM permissions on a repository. IAM permission checks are not required on this method.

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.TestIamPermissionsRequest`  

**Returns**

**Type**

**Description**

`com.google.iam.v1.TestIamPermissionsResponse`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
