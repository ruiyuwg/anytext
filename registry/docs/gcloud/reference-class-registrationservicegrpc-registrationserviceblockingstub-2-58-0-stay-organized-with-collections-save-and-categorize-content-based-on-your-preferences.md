-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class RegistrationServiceGrpc.RegistrationServiceBlockingStub (2.58.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.5 2.2.7

```
public static final class RegistrationServiceGrpc.RegistrationServiceBlockingStub extends AbstractBlockingStub<RegistrationServiceGrpc.RegistrationServiceBlockingStub>
```

A stub to allow clients to do synchronous rpc calls to service RegistrationService.

Service Directory API for registering services. It defines the following resource model:

-   The API has a collection of Namespace resources, named `projects/*/locations/*/namespaces/*`.
-   Each Namespace has a collection of Service resources, named `projects/*/locations/*/namespaces/*/services/*`.
-   Each Service has a collection of Endpoint resources, named `projects/*/locations/*/namespaces/*/services/*/endpoints/*`.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> RegistrationServiceGrpc.RegistrationServiceBlockingStub

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

io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration)

io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)

io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)

io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)

io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)

io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)

io.grpc.stub.AbstractStub.withOnReadyThreshold(int)

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
protected RegistrationServiceGrpc.RegistrationServiceBlockingStub build(Channel channel, CallOptions callOptions)
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

`[RegistrationServiceGrpc.RegistrationServiceBlockingStub](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.RegistrationServiceGrpc.RegistrationServiceBlockingStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createEndpoint(CreateEndpointRequest request)

```
public Endpoint createEndpoint(CreateEndpointRequest request)
```

Creates an endpoint, and returns the new endpoint.

**Parameter**

**Name**

**Description**

`request`

`[CreateEndpointRequest](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.CreateEndpointRequest)`  

**Returns**

**Type**

**Description**

`[Endpoint](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.Endpoint)`

### createNamespace(CreateNamespaceRequest request)

```
public Namespace createNamespace(CreateNamespaceRequest request)
```

Creates a namespace, and returns the new namespace.

**Parameter**

**Name**

**Description**

`request`

`[CreateNamespaceRequest](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.CreateNamespaceRequest)`  

**Returns**

**Type**

**Description**

`[Namespace](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.Namespace)`

### createService(CreateServiceRequest request)

```
public Service createService(CreateServiceRequest request)
```

Creates a service, and returns the new service.

**Parameter**

**Name**

**Description**

`request`

`[CreateServiceRequest](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.CreateServiceRequest)`  

**Returns**

**Type**

**Description**

`[Service](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.Service)`

### deleteEndpoint(DeleteEndpointRequest request)

```
public Empty deleteEndpoint(DeleteEndpointRequest request)
```

Deletes an endpoint.

**Parameter**

**Name**

**Description**

`request`

`[DeleteEndpointRequest](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.DeleteEndpointRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### deleteNamespace(DeleteNamespaceRequest request)

```
public Empty deleteNamespace(DeleteNamespaceRequest request)
```

Deletes a namespace. This also deletes all services and endpoints in the namespace.

**Parameter**

**Name**

**Description**

`request`

`[DeleteNamespaceRequest](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.DeleteNamespaceRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### deleteService(DeleteServiceRequest request)

```
public Empty deleteService(DeleteServiceRequest request)
```

Deletes a service. This also deletes all endpoints associated with the service.

**Parameter**

**Name**

**Description**

`request`

`[DeleteServiceRequest](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.DeleteServiceRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### getEndpoint(GetEndpointRequest request)

```
public Endpoint getEndpoint(GetEndpointRequest request)
```

Gets an endpoint.

**Parameter**

**Name**

**Description**

`request`

`[GetEndpointRequest](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.GetEndpointRequest)`  

**Returns**

**Type**

**Description**

`[Endpoint](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.Endpoint)`

### getIamPolicy(GetIamPolicyRequest request)

```
public Policy getIamPolicy(GetIamPolicyRequest request)
```

Gets the IAM Policy for a resource

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.GetIamPolicyRequest`  

**Returns**

**Type**

**Description**

`com.google.iam.v1.Policy`

### getNamespace(GetNamespaceRequest request)

```
public Namespace getNamespace(GetNamespaceRequest request)
```

Gets a namespace.

**Parameter**

**Name**

**Description**

`request`

`[GetNamespaceRequest](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.GetNamespaceRequest)`  

**Returns**

**Type**

**Description**

`[Namespace](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.Namespace)`

### getService(GetServiceRequest request)

```
public Service getService(GetServiceRequest request)
```

Gets a service.

**Parameter**

**Name**

**Description**

`request`

`[GetServiceRequest](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.GetServiceRequest)`  

**Returns**

**Type**

**Description**

`[Service](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.Service)`

### listEndpoints(ListEndpointsRequest request)

```
public ListEndpointsResponse listEndpoints(ListEndpointsRequest request)
```

Lists all endpoints.

**Parameter**

**Name**

**Description**

`request`

`[ListEndpointsRequest](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.ListEndpointsRequest)`  

**Returns**

**Type**

**Description**

`[ListEndpointsResponse](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.ListEndpointsResponse)`

### listNamespaces(ListNamespacesRequest request)

```
public ListNamespacesResponse listNamespaces(ListNamespacesRequest request)
```

Lists all namespaces.

**Parameter**

**Name**

**Description**

`request`

`[ListNamespacesRequest](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.ListNamespacesRequest)`  

**Returns**

**Type**

**Description**

`[ListNamespacesResponse](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.ListNamespacesResponse)`

### listServices(ListServicesRequest request)

```
public ListServicesResponse listServices(ListServicesRequest request)
```

Lists all services belonging to a namespace.

**Parameter**

**Name**

**Description**

`request`

`[ListServicesRequest](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.ListServicesRequest)`  

**Returns**

**Type**

**Description**

`[ListServicesResponse](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.ListServicesResponse)`

### setIamPolicy(SetIamPolicyRequest request)

```
public Policy setIamPolicy(SetIamPolicyRequest request)
```

Sets the IAM Policy for a resource

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.SetIamPolicyRequest`  

**Returns**

**Type**

**Description**

`com.google.iam.v1.Policy`

### testIamPermissions(TestIamPermissionsRequest request)

```
public TestIamPermissionsResponse testIamPermissions(TestIamPermissionsRequest request)
```

Tests IAM permissions for a resource (namespace, service or service workload only).

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.TestIamPermissionsRequest`  

**Returns**

**Type**

**Description**

`com.google.iam.v1.TestIamPermissionsResponse`

### updateEndpoint(UpdateEndpointRequest request)

```
public Endpoint updateEndpoint(UpdateEndpointRequest request)
```

Updates an endpoint.

**Parameter**

**Name**

**Description**

`request`

`[UpdateEndpointRequest](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.UpdateEndpointRequest)`  

**Returns**

**Type**

**Description**

`[Endpoint](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.Endpoint)`

### updateNamespace(UpdateNamespaceRequest request)

```
public Namespace updateNamespace(UpdateNamespaceRequest request)
```

Updates a namespace.

**Parameter**

**Name**

**Description**

`request`

`[UpdateNamespaceRequest](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.UpdateNamespaceRequest)`  

**Returns**

**Type**

**Description**

`[Namespace](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.Namespace)`

### updateService(UpdateServiceRequest request)

```
public Service updateService(UpdateServiceRequest request)
```

Updates a service.

**Parameter**

**Name**

**Description**

`request`

`[UpdateServiceRequest](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.UpdateServiceRequest)`  

**Returns**

**Type**

**Description**

`[Service](/java/docs/reference/google-cloud-servicedirectory/2.58.0/com.google.cloud.servicedirectory.v1beta1.Service)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
