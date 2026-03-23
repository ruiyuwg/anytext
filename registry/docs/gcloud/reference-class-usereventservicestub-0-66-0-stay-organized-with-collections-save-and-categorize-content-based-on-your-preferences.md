-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class UserEventServiceStub (0.66.0) Stay organized with collections Save and categorize content based on your preferences.

0.94.0 (latest) 0.92.0 0.90.0 0.89.0 0.87.0 0.85.0 0.83.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.71.0 0.70.0 0.69.0 0.67.0 0.66.0 0.65.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.4 0.8.10

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

```
public abstract class UserEventServiceStub implements BackgroundResource
```

Base stub class for the UserEventService service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> UserEventServiceStub

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

### UserEventServiceStub()

```
public UserEventServiceStub()
```

## Methods

### close()

```
public abstract void close()
```

### collectUserEventCallable()

```
public UnaryCallable<CollectUserEventRequest,HttpBody> collectUserEventCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CollectUserEventRequest](/java/docs/reference/google-cloud-recommendations-ai/0.66.0/com.google.cloud.recommendationengine.v1beta1.CollectUserEventRequest),com.google.api.HttpBody>`

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

### importUserEventsCallable()

```
public UnaryCallable<ImportUserEventsRequest,Operation> importUserEventsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ImportUserEventsRequest](/java/docs/reference/google-cloud-recommendations-ai/0.66.0/com.google.cloud.recommendationengine.v1beta1.ImportUserEventsRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### importUserEventsOperationCallable()

```
public OperationCallable<ImportUserEventsRequest,ImportUserEventsResponse,ImportMetadata> importUserEventsOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[ImportUserEventsRequest](/java/docs/reference/google-cloud-recommendations-ai/0.66.0/com.google.cloud.recommendationengine.v1beta1.ImportUserEventsRequest),[ImportUserEventsResponse](/java/docs/reference/google-cloud-recommendations-ai/0.66.0/com.google.cloud.recommendationengine.v1beta1.ImportUserEventsResponse),[ImportMetadata](/java/docs/reference/google-cloud-recommendations-ai/0.66.0/com.google.cloud.recommendationengine.v1beta1.ImportMetadata)>`

### listUserEventsCallable()

```
public UnaryCallable<ListUserEventsRequest,ListUserEventsResponse> listUserEventsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListUserEventsRequest](/java/docs/reference/google-cloud-recommendations-ai/0.66.0/com.google.cloud.recommendationengine.v1beta1.ListUserEventsRequest),[ListUserEventsResponse](/java/docs/reference/google-cloud-recommendations-ai/0.66.0/com.google.cloud.recommendationengine.v1beta1.ListUserEventsResponse)>`

### listUserEventsPagedCallable()

```
public UnaryCallable<ListUserEventsRequest,UserEventServiceClient.ListUserEventsPagedResponse> listUserEventsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListUserEventsRequest](/java/docs/reference/google-cloud-recommendations-ai/0.66.0/com.google.cloud.recommendationengine.v1beta1.ListUserEventsRequest),[ListUserEventsPagedResponse](/java/docs/reference/google-cloud-recommendations-ai/0.66.0/com.google.cloud.recommendationengine.v1beta1.UserEventServiceClient.ListUserEventsPagedResponse)>`

### purgeUserEventsCallable()

```
public UnaryCallable<PurgeUserEventsRequest,Operation> purgeUserEventsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[PurgeUserEventsRequest](/java/docs/reference/google-cloud-recommendations-ai/0.66.0/com.google.cloud.recommendationengine.v1beta1.PurgeUserEventsRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### purgeUserEventsOperationCallable()

```
public OperationCallable<PurgeUserEventsRequest,PurgeUserEventsResponse,PurgeUserEventsMetadata> purgeUserEventsOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[PurgeUserEventsRequest](/java/docs/reference/google-cloud-recommendations-ai/0.66.0/com.google.cloud.recommendationengine.v1beta1.PurgeUserEventsRequest),[PurgeUserEventsResponse](/java/docs/reference/google-cloud-recommendations-ai/0.66.0/com.google.cloud.recommendationengine.v1beta1.PurgeUserEventsResponse),[PurgeUserEventsMetadata](/java/docs/reference/google-cloud-recommendations-ai/0.66.0/com.google.cloud.recommendationengine.v1beta1.PurgeUserEventsMetadata)>`

### writeUserEventCallable()

```
public UnaryCallable<WriteUserEventRequest,UserEvent> writeUserEventCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[WriteUserEventRequest](/java/docs/reference/google-cloud-recommendations-ai/0.66.0/com.google.cloud.recommendationengine.v1beta1.WriteUserEventRequest),[UserEvent](/java/docs/reference/google-cloud-recommendations-ai/0.66.0/com.google.cloud.recommendationengine.v1beta1.UserEvent)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
