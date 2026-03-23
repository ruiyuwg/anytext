-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ParameterManagerGrpc.ParameterManagerBlockingStub (0.31.0) Stay organized with collections Save and categorize content based on your preferences.

0.31.0 (latest) 0.29.0 0.27.0 0.26.0 0.24.0 0.22.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.14.0 0.12.0 0.11.0 0.8.0 0.7.0 0.6.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static final class ParameterManagerGrpc.ParameterManagerBlockingStub extends AbstractBlockingStub<ParameterManagerGrpc.ParameterManagerBlockingStub>
```

A stub to allow clients to do limited synchronous rpc calls to service ParameterManager.

Service describing handlers for resources

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> ParameterManagerGrpc.ParameterManagerBlockingStub

## Inherited Members

io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

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
protected ParameterManagerGrpc.ParameterManagerBlockingStub build(Channel channel, CallOptions callOptions)
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

`[ParameterManagerGrpc.ParameterManagerBlockingStub](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.ParameterManagerGrpc.ParameterManagerBlockingStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createParameter(CreateParameterRequest request)

```
public Parameter createParameter(CreateParameterRequest request)
```

Creates a new Parameter in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[CreateParameterRequest](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.CreateParameterRequest)`  

**Returns**

**Type**

**Description**

`[Parameter](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.Parameter)`

### createParameterVersion(CreateParameterVersionRequest request)

```
public ParameterVersion createParameterVersion(CreateParameterVersionRequest request)
```

Creates a new ParameterVersion in a given project, location, and parameter.

**Parameter**

**Name**

**Description**

`request`

`[CreateParameterVersionRequest](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.CreateParameterVersionRequest)`  

**Returns**

**Type**

**Description**

`[ParameterVersion](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.ParameterVersion)`

### deleteParameter(DeleteParameterRequest request)

```
public Empty deleteParameter(DeleteParameterRequest request)
```

Deletes a single Parameter.

**Parameter**

**Name**

**Description**

`request`

`[DeleteParameterRequest](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.DeleteParameterRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### deleteParameterVersion(DeleteParameterVersionRequest request)

```
public Empty deleteParameterVersion(DeleteParameterVersionRequest request)
```

Deletes a single ParameterVersion.

**Parameter**

**Name**

**Description**

`request`

`[DeleteParameterVersionRequest](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.DeleteParameterVersionRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### getParameter(GetParameterRequest request)

```
public Parameter getParameter(GetParameterRequest request)
```

Gets details of a single Parameter.

**Parameter**

**Name**

**Description**

`request`

`[GetParameterRequest](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.GetParameterRequest)`  

**Returns**

**Type**

**Description**

`[Parameter](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.Parameter)`

### getParameterVersion(GetParameterVersionRequest request)

```
public ParameterVersion getParameterVersion(GetParameterVersionRequest request)
```

Gets details of a single ParameterVersion.

**Parameter**

**Name**

**Description**

`request`

`[GetParameterVersionRequest](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.GetParameterVersionRequest)`  

**Returns**

**Type**

**Description**

`[ParameterVersion](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.ParameterVersion)`

### listParameterVersions(ListParameterVersionsRequest request)

```
public ListParameterVersionsResponse listParameterVersions(ListParameterVersionsRequest request)
```

Lists ParameterVersions in a given project, location, and parameter.

**Parameter**

**Name**

**Description**

`request`

`[ListParameterVersionsRequest](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.ListParameterVersionsRequest)`  

**Returns**

**Type**

**Description**

`[ListParameterVersionsResponse](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.ListParameterVersionsResponse)`

### listParameters(ListParametersRequest request)

```
public ListParametersResponse listParameters(ListParametersRequest request)
```

Lists Parameters in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[ListParametersRequest](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.ListParametersRequest)`  

**Returns**

**Type**

**Description**

`[ListParametersResponse](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.ListParametersResponse)`

### renderParameterVersion(RenderParameterVersionRequest request)

```
public RenderParameterVersionResponse renderParameterVersion(RenderParameterVersionRequest request)
```

Gets rendered version of a ParameterVersion.

**Parameter**

**Name**

**Description**

`request`

`[RenderParameterVersionRequest](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.RenderParameterVersionRequest)`  

**Returns**

**Type**

**Description**

`[RenderParameterVersionResponse](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.RenderParameterVersionResponse)`

### updateParameter(UpdateParameterRequest request)

```
public Parameter updateParameter(UpdateParameterRequest request)
```

Updates a single Parameter.

**Parameter**

**Name**

**Description**

`request`

`[UpdateParameterRequest](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.UpdateParameterRequest)`  

**Returns**

**Type**

**Description**

`[Parameter](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.Parameter)`

### updateParameterVersion(UpdateParameterVersionRequest request)

```
public ParameterVersion updateParameterVersion(UpdateParameterVersionRequest request)
```

Updates a single ParameterVersion.

**Parameter**

**Name**

**Description**

`request`

`[UpdateParameterVersionRequest](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.UpdateParameterVersionRequest)`  

**Returns**

**Type**

**Description**

`[ParameterVersion](/java/docs/reference/google-cloud-parametermanager/latest/com.google.cloud.parametermanager.v1.ParameterVersion)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
