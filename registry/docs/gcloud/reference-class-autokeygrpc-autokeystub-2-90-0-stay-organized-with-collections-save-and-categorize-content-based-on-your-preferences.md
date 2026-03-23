-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class AutokeyGrpc.AutokeyStub (2.90.0) Stay organized with collections Save and categorize content based on your preferences.

2.90.0 (latest) 2.88.0 2.86.0 2.85.0 2.84.0 2.83.0 2.81.0 2.79.0 2.78.0 2.77.0 2.76.0 2.75.0 2.73.0 2.71.0 2.70.0 2.67.0 2.66.0 2.65.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.8 2.5.3 2.4.4 2.3.1

```
public static final class AutokeyGrpc.AutokeyStub extends AbstractAsyncStub<AutokeyGrpc.AutokeyStub>
```

A stub to allow clients to do asynchronous rpc calls to service Autokey.

Provides interfaces for using [Cloud KMS Autokey](https://cloud.google.com/kms/help/autokey) to provision new CryptoKeys, ready for Customer Managed Encryption Key (CMEK) use, on-demand. To support certain client tooling, this feature is modeled around a KeyHandle resource: creating a KeyHandle in a resource project and given location triggers Cloud KMS Autokey to provision a CryptoKey in the configured key project and the same location. Prior to use in a given resource project, UpdateAutokeyConfig should have been called on an ancestor folder, setting the key project where Cloud KMS Autokey should create new CryptoKeys. See documentation for additional prerequisites. To check what key project, if any, is currently configured on a resource project's ancestor folder, see ShowEffectiveAutokeyConfig.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> AutokeyGrpc.AutokeyStub

## Inherited Members

io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

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
protected AutokeyGrpc.AutokeyStub build(Channel channel, CallOptions callOptions)
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

`[AutokeyGrpc.AutokeyStub](/java/docs/reference/google-cloud-kms/latest/com.google.cloud.kms.v1.AutokeyGrpc.AutokeyStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createKeyHandle(CreateKeyHandleRequest request, StreamObserver<Operation> responseObserver)

```
public void createKeyHandle(CreateKeyHandleRequest request, StreamObserver<Operation> responseObserver)
```

Creates a new KeyHandle, triggering the provisioning of a new CryptoKey for CMEK use with the given resource type in the configured key project and the same location. GetOperation should be used to resolve the resulting long-running operation and get the resulting KeyHandle and CryptoKey.

**Parameters**

**Name**

**Description**

`request`

`[CreateKeyHandleRequest](/java/docs/reference/google-cloud-kms/latest/com.google.cloud.kms.v1.CreateKeyHandleRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### getKeyHandle(GetKeyHandleRequest request, StreamObserver<KeyHandle> responseObserver)

```
public void getKeyHandle(GetKeyHandleRequest request, StreamObserver<KeyHandle> responseObserver)
```

Returns the KeyHandle.

**Parameters**

**Name**

**Description**

`request`

`[GetKeyHandleRequest](/java/docs/reference/google-cloud-kms/latest/com.google.cloud.kms.v1.GetKeyHandleRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[KeyHandle](/java/docs/reference/google-cloud-kms/latest/com.google.cloud.kms.v1.KeyHandle)>`  

### listKeyHandles(ListKeyHandlesRequest request, StreamObserver<ListKeyHandlesResponse> responseObserver)

```
public void listKeyHandles(ListKeyHandlesRequest request, StreamObserver<ListKeyHandlesResponse> responseObserver)
```

Lists KeyHandles.

**Parameters**

**Name**

**Description**

`request`

`[ListKeyHandlesRequest](/java/docs/reference/google-cloud-kms/latest/com.google.cloud.kms.v1.ListKeyHandlesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListKeyHandlesResponse](/java/docs/reference/google-cloud-kms/latest/com.google.cloud.kms.v1.ListKeyHandlesResponse)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
