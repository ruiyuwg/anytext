-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class DirectAccessServiceGrpc.DirectAccessServiceImplBase (0.27.0) Stay organized with collections Save and categorize content based on your preferences.

0.27.0 (latest) 0.25.0 0.23.0 0.22.0 0.21.0 0.20.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.10.0 0.8.0 0.7.0 0.4.0 0.3.0 0.2.0

```
public abstract static class DirectAccessServiceGrpc.DirectAccessServiceImplBase implements BindableService, DirectAccessServiceGrpc.AsyncService
```

Base class for the server implementation of the service DirectAccessService.

A service for allocating Android devices and interacting with the live-allocated devices. Each Session will wait for available capacity, at a higher priority over Test Execution. When allocated, the session will be exposed through a stream for integration. DirectAccessService is currently available as a preview to select developers. You can register today on behalf of you and your team at [https://developer.android.com/studio/preview/android-device-streaming](https://developer.android.com/studio/preview/android-device-streaming)

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> DirectAccessServiceGrpc.DirectAccessServiceImplBase

## Implements

io.grpc.BindableService, [DirectAccessServiceGrpc.AsyncService](/java/docs/reference/google-cloud-devicestreaming/latest/com.google.cloud.devicestreaming.v1.DirectAccessServiceGrpc.AsyncService)

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

### DirectAccessServiceImplBase()

```
public DirectAccessServiceImplBase()
```

## Methods

### bindService()

```
public final ServerServiceDefinition bindService()
```

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
