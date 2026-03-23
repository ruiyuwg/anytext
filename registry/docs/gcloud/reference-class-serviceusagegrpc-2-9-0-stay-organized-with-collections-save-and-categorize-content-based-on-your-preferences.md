-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ServiceUsageGrpc (2.9.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.7 2.2.8

```
public final class ServiceUsageGrpc
```

Enables services that service consumers want to use on Google Cloud Platform, lists the available or enabled services, or disables services that service consumers no longer use. See [Service Usage API](https://cloud.google.com/service-usage/docs/overview)

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> ServiceUsageGrpc

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

### getBatchEnableServicesMethod()

```
public static MethodDescriptor<BatchEnableServicesRequest,Operation> getBatchEnableServicesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[BatchEnableServicesRequest](/java/docs/reference/google-cloud-service-usage/2.9.0/com.google.api.serviceusage.v1.BatchEnableServicesRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getBatchGetServicesMethod()

```
public static MethodDescriptor<BatchGetServicesRequest,BatchGetServicesResponse> getBatchGetServicesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[BatchGetServicesRequest](/java/docs/reference/google-cloud-service-usage/2.9.0/com.google.api.serviceusage.v1.BatchGetServicesRequest),[BatchGetServicesResponse](/java/docs/reference/google-cloud-service-usage/2.9.0/com.google.api.serviceusage.v1.BatchGetServicesResponse)>`

### getDisableServiceMethod()

```
public static MethodDescriptor<DisableServiceRequest,Operation> getDisableServiceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DisableServiceRequest](/java/docs/reference/google-cloud-service-usage/2.9.0/com.google.api.serviceusage.v1.DisableServiceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getEnableServiceMethod()

```
public static MethodDescriptor<EnableServiceRequest,Operation> getEnableServiceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[EnableServiceRequest](/java/docs/reference/google-cloud-service-usage/2.9.0/com.google.api.serviceusage.v1.EnableServiceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getGetServiceMethod()

```
public static MethodDescriptor<GetServiceRequest,Service> getGetServiceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetServiceRequest](/java/docs/reference/google-cloud-service-usage/2.9.0/com.google.api.serviceusage.v1.GetServiceRequest),[Service](/java/docs/reference/google-cloud-service-usage/2.9.0/com.google.api.serviceusage.v1.Service)>`

### getListServicesMethod()

```
public static MethodDescriptor<ListServicesRequest,ListServicesResponse> getListServicesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListServicesRequest](/java/docs/reference/google-cloud-service-usage/2.9.0/com.google.api.serviceusage.v1.ListServicesRequest),[ListServicesResponse](/java/docs/reference/google-cloud-service-usage/2.9.0/com.google.api.serviceusage.v1.ListServicesResponse)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### newBlockingStub(Channel channel)

```
public static ServiceUsageGrpc.ServiceUsageBlockingStub newBlockingStub(Channel channel)
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

`[ServiceUsageGrpc.ServiceUsageBlockingStub](/java/docs/reference/google-cloud-service-usage/2.9.0/com.google.api.serviceusage.v1.ServiceUsageGrpc.ServiceUsageBlockingStub)`

### newFutureStub(Channel channel)

```
public static ServiceUsageGrpc.ServiceUsageFutureStub newFutureStub(Channel channel)
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

`[ServiceUsageGrpc.ServiceUsageFutureStub](/java/docs/reference/google-cloud-service-usage/2.9.0/com.google.api.serviceusage.v1.ServiceUsageGrpc.ServiceUsageFutureStub)`

### newStub(Channel channel)

```
public static ServiceUsageGrpc.ServiceUsageStub newStub(Channel channel)
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

`[ServiceUsageGrpc.ServiceUsageStub](/java/docs/reference/google-cloud-service-usage/2.9.0/com.google.api.serviceusage.v1.ServiceUsageGrpc.ServiceUsageStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
