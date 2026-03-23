-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class OsLoginServiceGrpc.OsLoginServiceStub (2.28.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.7 2.0.15

```
public static final class OsLoginServiceGrpc.OsLoginServiceStub extends AbstractAsyncStub<OsLoginServiceGrpc.OsLoginServiceStub>
```

A stub to allow clients to do asynchronous rpc calls to service OsLoginService.

Cloud OS Login API The Cloud OS Login API allows you to manage users and their associated SSH public keys for logging into virtual machines on Google Cloud Platform.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> OsLoginServiceGrpc.OsLoginServiceStub

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

io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)

io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)

io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)

io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)

io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)

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
protected OsLoginServiceGrpc.OsLoginServiceStub build(Channel channel, CallOptions callOptions)
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

`[OsLoginServiceGrpc.OsLoginServiceStub](/java/docs/reference/google-cloud-os-login/2.28.0/com.google.cloud.oslogin.v1.OsLoginServiceGrpc.OsLoginServiceStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createSshPublicKey(CreateSshPublicKeyRequest request, StreamObserver<OsLoginProto.SshPublicKey> responseObserver)

```
public void createSshPublicKey(CreateSshPublicKeyRequest request, StreamObserver<OsLoginProto.SshPublicKey> responseObserver)
```

Create an SSH public key

**Parameters**

**Name**

**Description**

`request`

`[CreateSshPublicKeyRequest](/java/docs/reference/google-cloud-os-login/2.28.0/com.google.cloud.oslogin.v1.CreateSshPublicKeyRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SshPublicKey](/java/docs/reference/google-cloud-os-login/2.28.0/com.google.cloud.oslogin.common.OsLoginProto.SshPublicKey)>`  

### deletePosixAccount(DeletePosixAccountRequest request, StreamObserver<Empty> responseObserver)

```
public void deletePosixAccount(DeletePosixAccountRequest request, StreamObserver<Empty> responseObserver)
```

Deletes a POSIX account.

**Parameters**

**Name**

**Description**

`request`

`[DeletePosixAccountRequest](/java/docs/reference/google-cloud-os-login/2.28.0/com.google.cloud.oslogin.v1.DeletePosixAccountRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### deleteSshPublicKey(DeleteSshPublicKeyRequest request, StreamObserver<Empty> responseObserver)

```
public void deleteSshPublicKey(DeleteSshPublicKeyRequest request, StreamObserver<Empty> responseObserver)
```

Deletes an SSH public key.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSshPublicKeyRequest](/java/docs/reference/google-cloud-os-login/2.28.0/com.google.cloud.oslogin.v1.DeleteSshPublicKeyRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### getLoginProfile(GetLoginProfileRequest request, StreamObserver<LoginProfile> responseObserver)

```
public void getLoginProfile(GetLoginProfileRequest request, StreamObserver<LoginProfile> responseObserver)
```

Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.

**Parameters**

**Name**

**Description**

`request`

`[GetLoginProfileRequest](/java/docs/reference/google-cloud-os-login/2.28.0/com.google.cloud.oslogin.v1.GetLoginProfileRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[LoginProfile](/java/docs/reference/google-cloud-os-login/2.28.0/com.google.cloud.oslogin.v1.LoginProfile)>`  

### getSshPublicKey(GetSshPublicKeyRequest request, StreamObserver<OsLoginProto.SshPublicKey> responseObserver)

```
public void getSshPublicKey(GetSshPublicKeyRequest request, StreamObserver<OsLoginProto.SshPublicKey> responseObserver)
```

Retrieves an SSH public key.

**Parameters**

**Name**

**Description**

`request`

`[GetSshPublicKeyRequest](/java/docs/reference/google-cloud-os-login/2.28.0/com.google.cloud.oslogin.v1.GetSshPublicKeyRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SshPublicKey](/java/docs/reference/google-cloud-os-login/2.28.0/com.google.cloud.oslogin.common.OsLoginProto.SshPublicKey)>`  

### importSshPublicKey(ImportSshPublicKeyRequest request, StreamObserver<ImportSshPublicKeyResponse> responseObserver)

```
public void importSshPublicKey(ImportSshPublicKeyRequest request, StreamObserver<ImportSshPublicKeyResponse> responseObserver)
```

Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.

**Parameters**

**Name**

**Description**

`request`

`[ImportSshPublicKeyRequest](/java/docs/reference/google-cloud-os-login/2.28.0/com.google.cloud.oslogin.v1.ImportSshPublicKeyRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ImportSshPublicKeyResponse](/java/docs/reference/google-cloud-os-login/2.28.0/com.google.cloud.oslogin.v1.ImportSshPublicKeyResponse)>`  

### updateSshPublicKey(UpdateSshPublicKeyRequest request, StreamObserver<OsLoginProto.SshPublicKey> responseObserver)

```
public void updateSshPublicKey(UpdateSshPublicKeyRequest request, StreamObserver<OsLoginProto.SshPublicKey> responseObserver)
```

Updates an SSH public key and returns the profile information. This method supports patch semantics.

**Parameters**

**Name**

**Description**

`request`

`[UpdateSshPublicKeyRequest](/java/docs/reference/google-cloud-os-login/2.28.0/com.google.cloud.oslogin.v1.UpdateSshPublicKeyRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SshPublicKey](/java/docs/reference/google-cloud-os-login/2.28.0/com.google.cloud.oslogin.common.OsLoginProto.SshPublicKey)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
