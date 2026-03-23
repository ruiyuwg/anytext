-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class RegistrationServiceStub (2.29.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.5 2.2.7

```
public abstract class RegistrationServiceStub implements BackgroundResource
```

Base stub class for the RegistrationService service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> RegistrationServiceStub

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

### RegistrationServiceStub()

```
public RegistrationServiceStub()
```

## Methods

### close()

```
public abstract void close()
```

### createEndpointCallable()

```
public UnaryCallable<CreateEndpointRequest,Endpoint> createEndpointCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateEndpointRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.CreateEndpointRequest),[Endpoint](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.Endpoint)>`

### createNamespaceCallable()

```
public UnaryCallable<CreateNamespaceRequest,Namespace> createNamespaceCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateNamespaceRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.CreateNamespaceRequest),[Namespace](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.Namespace)>`

### createServiceCallable()

```
public UnaryCallable<CreateServiceRequest,Service> createServiceCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateServiceRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.CreateServiceRequest),[Service](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.Service)>`

### deleteEndpointCallable()

```
public UnaryCallable<DeleteEndpointRequest,Empty> deleteEndpointCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteEndpointRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.DeleteEndpointRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deleteNamespaceCallable()

```
public UnaryCallable<DeleteNamespaceRequest,Empty> deleteNamespaceCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteNamespaceRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.DeleteNamespaceRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deleteServiceCallable()

```
public UnaryCallable<DeleteServiceRequest,Empty> deleteServiceCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteServiceRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.DeleteServiceRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getEndpointCallable()

```
public UnaryCallable<GetEndpointRequest,Endpoint> getEndpointCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetEndpointRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.GetEndpointRequest),[Endpoint](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.Endpoint)>`

### getIamPolicyCallable()

```
public UnaryCallable<GetIamPolicyRequest,Policy> getIamPolicyCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.GetIamPolicyRequest,com.google.iam.v1.Policy>`

### getLocationCallable()

```
public UnaryCallable<GetLocationRequest,Location> getLocationCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.cloud.location.GetLocationRequest,com.google.cloud.location.Location>`

### getNamespaceCallable()

```
public UnaryCallable<GetNamespaceRequest,Namespace> getNamespaceCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetNamespaceRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.GetNamespaceRequest),[Namespace](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.Namespace)>`

### getServiceCallable()

```
public UnaryCallable<GetServiceRequest,Service> getServiceCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetServiceRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.GetServiceRequest),[Service](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.Service)>`

### listEndpointsCallable()

```
public UnaryCallable<ListEndpointsRequest,ListEndpointsResponse> listEndpointsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListEndpointsRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.ListEndpointsRequest),[ListEndpointsResponse](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.ListEndpointsResponse)>`

### listEndpointsPagedCallable()

```
public UnaryCallable<ListEndpointsRequest,RegistrationServiceClient.ListEndpointsPagedResponse> listEndpointsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListEndpointsRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.ListEndpointsRequest),[ListEndpointsPagedResponse](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.RegistrationServiceClient.ListEndpointsPagedResponse)>`

### listLocationsCallable()

```
public UnaryCallable<ListLocationsRequest,ListLocationsResponse> listLocationsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.cloud.location.ListLocationsRequest,com.google.cloud.location.ListLocationsResponse>`

### listLocationsPagedCallable()

```
public UnaryCallable<ListLocationsRequest,RegistrationServiceClient.ListLocationsPagedResponse> listLocationsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.cloud.location.ListLocationsRequest,[ListLocationsPagedResponse](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.RegistrationServiceClient.ListLocationsPagedResponse)>`

### listNamespacesCallable()

```
public UnaryCallable<ListNamespacesRequest,ListNamespacesResponse> listNamespacesCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListNamespacesRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.ListNamespacesRequest),[ListNamespacesResponse](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.ListNamespacesResponse)>`

### listNamespacesPagedCallable()

```
public UnaryCallable<ListNamespacesRequest,RegistrationServiceClient.ListNamespacesPagedResponse> listNamespacesPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListNamespacesRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.ListNamespacesRequest),[ListNamespacesPagedResponse](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.RegistrationServiceClient.ListNamespacesPagedResponse)>`

### listServicesCallable()

```
public UnaryCallable<ListServicesRequest,ListServicesResponse> listServicesCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListServicesRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.ListServicesRequest),[ListServicesResponse](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.ListServicesResponse)>`

### listServicesPagedCallable()

```
public UnaryCallable<ListServicesRequest,RegistrationServiceClient.ListServicesPagedResponse> listServicesPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListServicesRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.ListServicesRequest),[ListServicesPagedResponse](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.RegistrationServiceClient.ListServicesPagedResponse)>`

### setIamPolicyCallable()

```
public UnaryCallable<SetIamPolicyRequest,Policy> setIamPolicyCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.SetIamPolicyRequest,com.google.iam.v1.Policy>`

### testIamPermissionsCallable()

```
public UnaryCallable<TestIamPermissionsRequest,TestIamPermissionsResponse> testIamPermissionsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.TestIamPermissionsRequest,com.google.iam.v1.TestIamPermissionsResponse>`

### updateEndpointCallable()

```
public UnaryCallable<UpdateEndpointRequest,Endpoint> updateEndpointCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateEndpointRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.UpdateEndpointRequest),[Endpoint](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.Endpoint)>`

### updateNamespaceCallable()

```
public UnaryCallable<UpdateNamespaceRequest,Namespace> updateNamespaceCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateNamespaceRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.UpdateNamespaceRequest),[Namespace](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.Namespace)>`

### updateServiceCallable()

```
public UnaryCallable<UpdateServiceRequest,Service> updateServiceCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateServiceRequest](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.UpdateServiceRequest),[Service](/java/docs/reference/google-cloud-servicedirectory/2.29.0/com.google.cloud.servicedirectory.v1.Service)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
