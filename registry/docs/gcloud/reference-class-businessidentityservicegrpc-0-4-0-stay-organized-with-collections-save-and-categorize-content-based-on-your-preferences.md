-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class BusinessIdentityServiceGrpc (0.4.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.26.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public final class BusinessIdentityServiceGrpc
```

Service to support [business identity](https://support.google.com/merchants/answer/12564247) API.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> BusinessIdentityServiceGrpc

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

### bindService(BusinessIdentityServiceGrpc.AsyncService service)

```
public static final ServerServiceDefinition bindService(BusinessIdentityServiceGrpc.AsyncService service)
```

**Parameter**

**Name**

**Description**

`service`

`[BusinessIdentityServiceGrpc.AsyncService](/java/docs/reference/google-shopping-merchant-accounts/0.4.0/com.google.shopping.merchant.accounts.v1beta.BusinessIdentityServiceGrpc.AsyncService)`  

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### getGetBusinessIdentityMethod()

```
public static MethodDescriptor<GetBusinessIdentityRequest,BusinessIdentity> getGetBusinessIdentityMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetBusinessIdentityRequest](/java/docs/reference/google-shopping-merchant-accounts/0.4.0/com.google.shopping.merchant.accounts.v1beta.GetBusinessIdentityRequest),[BusinessIdentity](/java/docs/reference/google-shopping-merchant-accounts/0.4.0/com.google.shopping.merchant.accounts.v1beta.BusinessIdentity)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### getUpdateBusinessIdentityMethod()

```
public static MethodDescriptor<UpdateBusinessIdentityRequest,BusinessIdentity> getUpdateBusinessIdentityMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateBusinessIdentityRequest](/java/docs/reference/google-shopping-merchant-accounts/0.4.0/com.google.shopping.merchant.accounts.v1beta.UpdateBusinessIdentityRequest),[BusinessIdentity](/java/docs/reference/google-shopping-merchant-accounts/0.4.0/com.google.shopping.merchant.accounts.v1beta.BusinessIdentity)>`

### newBlockingStub(Channel channel)

```
public static BusinessIdentityServiceGrpc.BusinessIdentityServiceBlockingStub newBlockingStub(Channel channel)
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

`[BusinessIdentityServiceGrpc.BusinessIdentityServiceBlockingStub](/java/docs/reference/google-shopping-merchant-accounts/0.4.0/com.google.shopping.merchant.accounts.v1beta.BusinessIdentityServiceGrpc.BusinessIdentityServiceBlockingStub)`

### newFutureStub(Channel channel)

```
public static BusinessIdentityServiceGrpc.BusinessIdentityServiceFutureStub newFutureStub(Channel channel)
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

`[BusinessIdentityServiceGrpc.BusinessIdentityServiceFutureStub](/java/docs/reference/google-shopping-merchant-accounts/0.4.0/com.google.shopping.merchant.accounts.v1beta.BusinessIdentityServiceGrpc.BusinessIdentityServiceFutureStub)`

### newStub(Channel channel)

```
public static BusinessIdentityServiceGrpc.BusinessIdentityServiceStub newStub(Channel channel)
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

`[BusinessIdentityServiceGrpc.BusinessIdentityServiceStub](/java/docs/reference/google-shopping-merchant-accounts/0.4.0/com.google.shopping.merchant.accounts.v1beta.BusinessIdentityServiceGrpc.BusinessIdentityServiceStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
