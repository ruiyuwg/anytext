-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ProgramsServiceGrpc.ProgramsServiceFutureStub (0.11.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.26.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static final class ProgramsServiceGrpc.ProgramsServiceFutureStub extends AbstractFutureStub<ProgramsServiceGrpc.ProgramsServiceFutureStub>
```

A stub to allow clients to do ListenableFuture-style rpc calls to service ProgramsService.

Service for program management. Programs provide a mechanism for adding functionality to merchant accounts. A typical example of this is the [Free product listings](https://support.google.com/merchants/topic/9240261?ref_topic=7257954,7259405,&sjid=796648681813264022-EU) program, which enables products from a merchant's store to be shown across Google for free. This service exposes methods to retrieve a merchant's participation in all available programs, in addition to methods for explicitly enabling or disabling participation in each program.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractFutureStub \> ProgramsServiceGrpc.ProgramsServiceFutureStub

## Inherited Members

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

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
protected ProgramsServiceGrpc.ProgramsServiceFutureStub build(Channel channel, CallOptions callOptions)
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

`[ProgramsServiceGrpc.ProgramsServiceFutureStub](/java/docs/reference/google-shopping-merchant-accounts/0.11.0/com.google.shopping.merchant.accounts.v1beta.ProgramsServiceGrpc.ProgramsServiceFutureStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### disableProgram(DisableProgramRequest request)

```
public ListenableFuture<Program> disableProgram(DisableProgramRequest request)
```

Disable participation in the specified program for the account. Executing this method requires admin access.

**Parameter**

**Name**

**Description**

`request`

`[DisableProgramRequest](/java/docs/reference/google-shopping-merchant-accounts/0.11.0/com.google.shopping.merchant.accounts.v1beta.DisableProgramRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Program](/java/docs/reference/google-shopping-merchant-accounts/0.11.0/com.google.shopping.merchant.accounts.v1beta.Program)>`

### enableProgram(EnableProgramRequest request)

```
public ListenableFuture<Program> enableProgram(EnableProgramRequest request)
```

Enable participation in the specified program for the account. Executing this method requires admin access.

**Parameter**

**Name**

**Description**

`request`

`[EnableProgramRequest](/java/docs/reference/google-shopping-merchant-accounts/0.11.0/com.google.shopping.merchant.accounts.v1beta.EnableProgramRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Program](/java/docs/reference/google-shopping-merchant-accounts/0.11.0/com.google.shopping.merchant.accounts.v1beta.Program)>`

### getProgram(GetProgramRequest request)

```
public ListenableFuture<Program> getProgram(GetProgramRequest request)
```

Retrieves the specified program for the account.

**Parameter**

**Name**

**Description**

`request`

`[GetProgramRequest](/java/docs/reference/google-shopping-merchant-accounts/0.11.0/com.google.shopping.merchant.accounts.v1beta.GetProgramRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Program](/java/docs/reference/google-shopping-merchant-accounts/0.11.0/com.google.shopping.merchant.accounts.v1beta.Program)>`

### listPrograms(ListProgramsRequest request)

```
public ListenableFuture<ListProgramsResponse> listPrograms(ListProgramsRequest request)
```

Retrieves all programs for the account.

**Parameter**

**Name**

**Description**

`request`

`[ListProgramsRequest](/java/docs/reference/google-shopping-merchant-accounts/0.11.0/com.google.shopping.merchant.accounts.v1beta.ListProgramsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListProgramsResponse](/java/docs/reference/google-shopping-merchant-accounts/0.11.0/com.google.shopping.merchant.accounts.v1beta.ListProgramsResponse)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
