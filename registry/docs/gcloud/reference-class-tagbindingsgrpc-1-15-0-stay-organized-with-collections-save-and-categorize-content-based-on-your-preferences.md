-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TagBindingsGrpc (1.15.0) Stay organized with collections Save and categorize content based on your preferences.

1.89.0 (latest) 1.87.0 1.85.0 1.84.0 1.82.0 1.80.0 1.78.0 1.77.0 1.76.0 1.75.0 1.74.0 1.72.0 1.70.0 1.69.0 1.66.0 1.65.0 1.64.0 1.62.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.6 1.4.0 1.3.2 1.2.12

```
public final class TagBindingsGrpc
```

Allow users to create and manage TagBindings between TagValues and different cloud resources throughout the GCP resource hierarchy.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> TagBindingsGrpc

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

### getCreateTagBindingMethod()

```
public static MethodDescriptor<CreateTagBindingRequest,Operation> getCreateTagBindingMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateTagBindingRequest](/java/docs/reference/google-cloud-resourcemanager/1.15.0/com.google.cloud.resourcemanager.v3.CreateTagBindingRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteTagBindingMethod()

```
public static MethodDescriptor<DeleteTagBindingRequest,Operation> getDeleteTagBindingMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteTagBindingRequest](/java/docs/reference/google-cloud-resourcemanager/1.15.0/com.google.cloud.resourcemanager.v3.DeleteTagBindingRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getListTagBindingsMethod()

```
public static MethodDescriptor<ListTagBindingsRequest,ListTagBindingsResponse> getListTagBindingsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListTagBindingsRequest](/java/docs/reference/google-cloud-resourcemanager/1.15.0/com.google.cloud.resourcemanager.v3.ListTagBindingsRequest),[ListTagBindingsResponse](/java/docs/reference/google-cloud-resourcemanager/1.15.0/com.google.cloud.resourcemanager.v3.ListTagBindingsResponse)>`

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
public static TagBindingsGrpc.TagBindingsBlockingStub newBlockingStub(Channel channel)
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

`[TagBindingsGrpc.TagBindingsBlockingStub](/java/docs/reference/google-cloud-resourcemanager/1.15.0/com.google.cloud.resourcemanager.v3.TagBindingsGrpc.TagBindingsBlockingStub)`

### newFutureStub(Channel channel)

```
public static TagBindingsGrpc.TagBindingsFutureStub newFutureStub(Channel channel)
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

`[TagBindingsGrpc.TagBindingsFutureStub](/java/docs/reference/google-cloud-resourcemanager/1.15.0/com.google.cloud.resourcemanager.v3.TagBindingsGrpc.TagBindingsFutureStub)`

### newStub(Channel channel)

```
public static TagBindingsGrpc.TagBindingsStub newStub(Channel channel)
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

`[TagBindingsGrpc.TagBindingsStub](/java/docs/reference/google-cloud-resourcemanager/1.15.0/com.google.cloud.resourcemanager.v3.TagBindingsGrpc.TagBindingsStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
