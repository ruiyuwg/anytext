-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ServiceManagerGrpc (3.6.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.7 3.0.1 2.1.7

```
public final class ServiceManagerGrpc
```

[Google Service Management API](https://cloud.google.com/service-infrastructure/docs/overview)

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> ServiceManagerGrpc

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

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

## Static Methods

### getCreateServiceConfigMethod()

```
public static MethodDescriptor<CreateServiceConfigRequest,Service> getCreateServiceConfigMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[CreateServiceConfigRequest](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.CreateServiceConfigRequest),com.google.api.Service\>

### getCreateServiceMethod()

```
public static MethodDescriptor<CreateServiceRequest,Operation> getCreateServiceMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[CreateServiceRequest](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.CreateServiceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### getCreateServiceRolloutMethod()

```
public static MethodDescriptor<CreateServiceRolloutRequest,Operation> getCreateServiceRolloutMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[CreateServiceRolloutRequest](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.CreateServiceRolloutRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### getDeleteServiceMethod()

```
public static MethodDescriptor<DeleteServiceRequest,Operation> getDeleteServiceMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[DeleteServiceRequest](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.DeleteServiceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### getGenerateConfigReportMethod()

```
public static MethodDescriptor<GenerateConfigReportRequest,GenerateConfigReportResponse> getGenerateConfigReportMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[GenerateConfigReportRequest](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.GenerateConfigReportRequest),[GenerateConfigReportResponse](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.GenerateConfigReportResponse)\>

### getGetServiceConfigMethod()

```
public static MethodDescriptor<GetServiceConfigRequest,Service> getGetServiceConfigMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[GetServiceConfigRequest](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.GetServiceConfigRequest),com.google.api.Service\>

### getGetServiceMethod()

```
public static MethodDescriptor<GetServiceRequest,ManagedService> getGetServiceMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[GetServiceRequest](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.GetServiceRequest),[ManagedService](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.ManagedService)\>

### getGetServiceRolloutMethod()

```
public static MethodDescriptor<GetServiceRolloutRequest,Rollout> getGetServiceRolloutMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[GetServiceRolloutRequest](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.GetServiceRolloutRequest),[Rollout](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.Rollout)\>

### getListServiceConfigsMethod()

```
public static MethodDescriptor<ListServiceConfigsRequest,ListServiceConfigsResponse> getListServiceConfigsMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[ListServiceConfigsRequest](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.ListServiceConfigsRequest),[ListServiceConfigsResponse](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.ListServiceConfigsResponse)\>

### getListServiceRolloutsMethod()

```
public static MethodDescriptor<ListServiceRolloutsRequest,ListServiceRolloutsResponse> getListServiceRolloutsMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[ListServiceRolloutsRequest](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.ListServiceRolloutsRequest),[ListServiceRolloutsResponse](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.ListServiceRolloutsResponse)\>

### getListServicesMethod()

```
public static MethodDescriptor<ListServicesRequest,ListServicesResponse> getListServicesMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[ListServicesRequest](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.ListServicesRequest),[ListServicesResponse](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.ListServicesResponse)\>

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

io.grpc.ServiceDescriptor

### getSubmitConfigSourceMethod()

```
public static MethodDescriptor<SubmitConfigSourceRequest,Operation> getSubmitConfigSourceMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[SubmitConfigSourceRequest](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.SubmitConfigSourceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### getUndeleteServiceMethod()

```
public static MethodDescriptor<UndeleteServiceRequest,Operation> getUndeleteServiceMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[UndeleteServiceRequest](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.UndeleteServiceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### newBlockingStub(Channel channel)

```
public static ServiceManagerGrpc.ServiceManagerBlockingStub newBlockingStub(Channel channel)
```

Creates a new blocking-style stub that supports unary and streaming output calls on the service

**Parameter**

**Name**

**Description**

channel

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

[ServiceManagerGrpc.ServiceManagerBlockingStub](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.ServiceManagerGrpc.ServiceManagerBlockingStub)

### newFutureStub(Channel channel)

```
public static ServiceManagerGrpc.ServiceManagerFutureStub newFutureStub(Channel channel)
```

Creates a new ListenableFuture-style stub that supports unary calls on the service

**Parameter**

**Name**

**Description**

channel

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

[ServiceManagerGrpc.ServiceManagerFutureStub](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.ServiceManagerGrpc.ServiceManagerFutureStub)

### newStub(Channel channel)

```
public static ServiceManagerGrpc.ServiceManagerStub newStub(Channel channel)
```

Creates a new async stub that supports all call types for the service

**Parameter**

**Name**

**Description**

channel

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

[ServiceManagerGrpc.ServiceManagerStub](/java/docs/reference/google-cloud-service-management/3.6.0/com.google.api.servicemanagement.v1.ServiceManagerGrpc.ServiceManagerStub)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
