-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class AdaptationGrpc.AdaptationBlockingStub (4.4.0) Stay organized with collections Save and categorize content based on your preferences.

4.82.0 (latest) 4.80.0 4.78.0 4.77.0 4.75.0 4.73.0 4.71.0 4.70.0 4.69.0 4.68.0 4.67.0 4.65.0 4.63.0 4.62.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.7.0 4.6.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.0 3.0.0 2.6.1 2.5.9 2.4.0 2.3.0 2.2.15

```
public static final class AdaptationGrpc.AdaptationBlockingStub extends AbstractBlockingStub<AdaptationGrpc.AdaptationBlockingStub>
```

Service that implements Google Cloud Speech Adaptation API.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> AdaptationGrpc.AdaptationBlockingStub

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
protected AdaptationGrpc.AdaptationBlockingStub build(Channel channel, CallOptions callOptions)
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

`[AdaptationGrpc.AdaptationBlockingStub](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.AdaptationGrpc.AdaptationBlockingStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createCustomClass(CreateCustomClassRequest request)

```
public CustomClass createCustomClass(CreateCustomClassRequest request)
```

Create a custom class.

**Parameter**

**Name**

**Description**

`request`

`[CreateCustomClassRequest](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.CreateCustomClassRequest)`  

**Returns**

**Type**

**Description**

`[CustomClass](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.CustomClass)`

### createPhraseSet(CreatePhraseSetRequest request)

```
public PhraseSet createPhraseSet(CreatePhraseSetRequest request)
```

Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.

**Parameter**

**Name**

**Description**

`request`

`[CreatePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.CreatePhraseSetRequest)`  

**Returns**

**Type**

**Description**

`[PhraseSet](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.PhraseSet)`

### deleteCustomClass(DeleteCustomClassRequest request)

```
public Empty deleteCustomClass(DeleteCustomClassRequest request)
```

Delete a custom class.

**Parameter**

**Name**

**Description**

`request`

`[DeleteCustomClassRequest](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.DeleteCustomClassRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### deletePhraseSet(DeletePhraseSetRequest request)

```
public Empty deletePhraseSet(DeletePhraseSetRequest request)
```

Delete a phrase set.

**Parameter**

**Name**

**Description**

`request`

`[DeletePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.DeletePhraseSetRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### getCustomClass(GetCustomClassRequest request)

```
public CustomClass getCustomClass(GetCustomClassRequest request)
```

Get a custom class.

**Parameter**

**Name**

**Description**

`request`

`[GetCustomClassRequest](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.GetCustomClassRequest)`  

**Returns**

**Type**

**Description**

`[CustomClass](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.CustomClass)`

### getPhraseSet(GetPhraseSetRequest request)

```
public PhraseSet getPhraseSet(GetPhraseSetRequest request)
```

Get a phrase set.

**Parameter**

**Name**

**Description**

`request`

`[GetPhraseSetRequest](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.GetPhraseSetRequest)`  

**Returns**

**Type**

**Description**

`[PhraseSet](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.PhraseSet)`

### listCustomClasses(ListCustomClassesRequest request)

```
public ListCustomClassesResponse listCustomClasses(ListCustomClassesRequest request)
```

List custom classes.

**Parameter**

**Name**

**Description**

`request`

`[ListCustomClassesRequest](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.ListCustomClassesRequest)`  

**Returns**

**Type**

**Description**

`[ListCustomClassesResponse](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.ListCustomClassesResponse)`

### listPhraseSet(ListPhraseSetRequest request)

```
public ListPhraseSetResponse listPhraseSet(ListPhraseSetRequest request)
```

List phrase sets.

**Parameter**

**Name**

**Description**

`request`

`[ListPhraseSetRequest](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.ListPhraseSetRequest)`  

**Returns**

**Type**

**Description**

`[ListPhraseSetResponse](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.ListPhraseSetResponse)`

### updateCustomClass(UpdateCustomClassRequest request)

```
public CustomClass updateCustomClass(UpdateCustomClassRequest request)
```

Update a custom class.

**Parameter**

**Name**

**Description**

`request`

`[UpdateCustomClassRequest](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.UpdateCustomClassRequest)`  

**Returns**

**Type**

**Description**

`[CustomClass](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.CustomClass)`

### updatePhraseSet(UpdatePhraseSetRequest request)

```
public PhraseSet updatePhraseSet(UpdatePhraseSetRequest request)
```

Update a phrase set.

**Parameter**

**Name**

**Description**

`request`

`[UpdatePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.UpdatePhraseSetRequest)`  

**Returns**

**Type**

**Description**

`[PhraseSet](/java/docs/reference/google-cloud-speech/4.4.0/com.google.cloud.speech.v1.PhraseSet)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
