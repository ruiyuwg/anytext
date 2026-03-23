-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface RegistrationServiceGrpc.AsyncService (2.20.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.5 2.2.7

```
public static interface RegistrationServiceGrpc.AsyncService
```

Service Directory API for registering services. It defines the following resource model:

-   The API has a collection of Namespace resources, named `projects/*/locations/*/namespaces/*`.
-   Each Namespace has a collection of Service resources, named `projects/*/locations/*/namespaces/*/services/*`.
-   Each Service has a collection of Endpoint resources, named `projects/*/locations/*/namespaces/*/services/*/endpoints/*`.

## Methods

### createEndpoint(CreateEndpointRequest request, StreamObserver<Endpoint> responseObserver)

```
public default void createEndpoint(CreateEndpointRequest request, StreamObserver<Endpoint> responseObserver)
```

Creates a endpoint, and returns the new Endpoint.

**Parameters**

**Name**

**Description**

`request`

`[CreateEndpointRequest](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.CreateEndpointRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Endpoint](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.Endpoint)>`  

### createNamespace(CreateNamespaceRequest request, StreamObserver<Namespace> responseObserver)

```
public default void createNamespace(CreateNamespaceRequest request, StreamObserver<Namespace> responseObserver)
```

Creates a namespace, and returns the new Namespace.

**Parameters**

**Name**

**Description**

`request`

`[CreateNamespaceRequest](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.CreateNamespaceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Namespace](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.Namespace)>`  

### createService(CreateServiceRequest request, StreamObserver<Service> responseObserver)

```
public default void createService(CreateServiceRequest request, StreamObserver<Service> responseObserver)
```

Creates a service, and returns the new Service.

**Parameters**

**Name**

**Description**

`request`

`[CreateServiceRequest](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.CreateServiceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Service](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.Service)>`  

### deleteEndpoint(DeleteEndpointRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteEndpoint(DeleteEndpointRequest request, StreamObserver<Empty> responseObserver)
```

Deletes a endpoint.

**Parameters**

**Name**

**Description**

`request`

`[DeleteEndpointRequest](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.DeleteEndpointRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### deleteNamespace(DeleteNamespaceRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteNamespace(DeleteNamespaceRequest request, StreamObserver<Empty> responseObserver)
```

Deletes a namespace. This also deletes all services and endpoints in the namespace.

**Parameters**

**Name**

**Description**

`request`

`[DeleteNamespaceRequest](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.DeleteNamespaceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### deleteService(DeleteServiceRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteService(DeleteServiceRequest request, StreamObserver<Empty> responseObserver)
```

Deletes a service. This also deletes all endpoints associated with the service.

**Parameters**

**Name**

**Description**

`request`

`[DeleteServiceRequest](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.DeleteServiceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### getEndpoint(GetEndpointRequest request, StreamObserver<Endpoint> responseObserver)

```
public default void getEndpoint(GetEndpointRequest request, StreamObserver<Endpoint> responseObserver)
```

Gets a endpoint.

**Parameters**

**Name**

**Description**

`request`

`[GetEndpointRequest](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.GetEndpointRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Endpoint](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.Endpoint)>`  

### getIamPolicy(GetIamPolicyRequest request, StreamObserver<Policy> responseObserver)

```
public default void getIamPolicy(GetIamPolicyRequest request, StreamObserver<Policy> responseObserver)
```

Gets the IAM Policy for a resource (namespace or service only).

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.GetIamPolicyRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.Policy>`  

### getNamespace(GetNamespaceRequest request, StreamObserver<Namespace> responseObserver)

```
public default void getNamespace(GetNamespaceRequest request, StreamObserver<Namespace> responseObserver)
```

Gets a namespace.

**Parameters**

**Name**

**Description**

`request`

`[GetNamespaceRequest](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.GetNamespaceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Namespace](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.Namespace)>`  

### getService(GetServiceRequest request, StreamObserver<Service> responseObserver)

```
public default void getService(GetServiceRequest request, StreamObserver<Service> responseObserver)
```

Gets a service.

**Parameters**

**Name**

**Description**

`request`

`[GetServiceRequest](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.GetServiceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Service](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.Service)>`  

### listEndpoints(ListEndpointsRequest request, StreamObserver<ListEndpointsResponse> responseObserver)

```
public default void listEndpoints(ListEndpointsRequest request, StreamObserver<ListEndpointsResponse> responseObserver)
```

Lists all endpoints.

**Parameters**

**Name**

**Description**

`request`

`[ListEndpointsRequest](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.ListEndpointsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListEndpointsResponse](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.ListEndpointsResponse)>`  

### listNamespaces(ListNamespacesRequest request, StreamObserver<ListNamespacesResponse> responseObserver)

```
public default void listNamespaces(ListNamespacesRequest request, StreamObserver<ListNamespacesResponse> responseObserver)
```

Lists all namespaces.

**Parameters**

**Name**

**Description**

`request`

`[ListNamespacesRequest](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.ListNamespacesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListNamespacesResponse](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.ListNamespacesResponse)>`  

### listServices(ListServicesRequest request, StreamObserver<ListServicesResponse> responseObserver)

```
public default void listServices(ListServicesRequest request, StreamObserver<ListServicesResponse> responseObserver)
```

Lists all services belonging to a namespace.

**Parameters**

**Name**

**Description**

`request`

`[ListServicesRequest](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.ListServicesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListServicesResponse](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.ListServicesResponse)>`  

### setIamPolicy(SetIamPolicyRequest request, StreamObserver<Policy> responseObserver)

```
public default void setIamPolicy(SetIamPolicyRequest request, StreamObserver<Policy> responseObserver)
```

Sets the IAM Policy for a resource (namespace or service only).

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.SetIamPolicyRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.Policy>`  

### testIamPermissions(TestIamPermissionsRequest request, StreamObserver<TestIamPermissionsResponse> responseObserver)

```
public default void testIamPermissions(TestIamPermissionsRequest request, StreamObserver<TestIamPermissionsResponse> responseObserver)
```

Tests IAM permissions for a resource (namespace or service only).

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.TestIamPermissionsRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.TestIamPermissionsResponse>`  

### updateEndpoint(UpdateEndpointRequest request, StreamObserver<Endpoint> responseObserver)

```
public default void updateEndpoint(UpdateEndpointRequest request, StreamObserver<Endpoint> responseObserver)
```

Updates a endpoint.

**Parameters**

**Name**

**Description**

`request`

`[UpdateEndpointRequest](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.UpdateEndpointRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Endpoint](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.Endpoint)>`  

### updateNamespace(UpdateNamespaceRequest request, StreamObserver<Namespace> responseObserver)

```
public default void updateNamespace(UpdateNamespaceRequest request, StreamObserver<Namespace> responseObserver)
```

Updates a namespace.

**Parameters**

**Name**

**Description**

`request`

`[UpdateNamespaceRequest](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.UpdateNamespaceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Namespace](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.Namespace)>`  

### updateService(UpdateServiceRequest request, StreamObserver<Service> responseObserver)

```
public default void updateService(UpdateServiceRequest request, StreamObserver<Service> responseObserver)
```

Updates a service.

**Parameters**

**Name**

**Description**

`request`

`[UpdateServiceRequest](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.UpdateServiceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Service](/java/docs/reference/google-cloud-servicedirectory/2.20.0/com.google.cloud.servicedirectory.v1.Service)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
