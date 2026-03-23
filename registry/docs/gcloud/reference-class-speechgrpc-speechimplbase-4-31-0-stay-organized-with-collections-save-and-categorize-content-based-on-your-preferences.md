-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SpeechGrpc.SpeechImplBase (4.31.0) Stay organized with collections Save and categorize content based on your preferences.

4.82.0 (latest) 4.80.0 4.78.0 4.77.0 4.75.0 4.73.0 4.71.0 4.70.0 4.69.0 4.68.0 4.67.0 4.65.0 4.63.0 4.62.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.7.0 4.6.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.0 3.0.0 2.6.1 2.5.9 2.4.0 2.3.0 2.2.15

```
public abstract static class SpeechGrpc.SpeechImplBase implements BindableService
```

Service that implements Google Cloud Speech API.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> SpeechGrpc.SpeechImplBase

## Implements

io.grpc.BindableService

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

### SpeechImplBase()

```
public SpeechImplBase()
```

## Methods

### asyncRecognize(AsyncRecognizeRequest request, StreamObserver<Operation> responseObserver)

```
public void asyncRecognize(AsyncRecognizeRequest request, StreamObserver<Operation> responseObserver)
```

Performs asynchronous speech recognition: receive results via the [google.longrunning.Operations](/speech/reference/rest/v1beta1/operations#Operation) interface. Returns either an `Operation.error` or an `Operation.response` which contains an `AsyncRecognizeResponse` message.

**Parameters**

**Name**

**Description**

`request`

`[AsyncRecognizeRequest](/java/docs/reference/google-cloud-speech/4.31.0/com.google.cloud.speech.v1beta1.AsyncRecognizeRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### bindService()

```
public final ServerServiceDefinition bindService()
```

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### streamingRecognize(StreamObserver<StreamingRecognizeResponse> responseObserver)

```
public StreamObserver<StreamingRecognizeRequest> streamingRecognize(StreamObserver<StreamingRecognizeResponse> responseObserver)
```

Performs bidirectional streaming speech recognition: receive results while sending audio. This method is only available via the gRPC API (not REST).

**Parameter**

**Name**

**Description**

`responseObserver`

`io.grpc.stub.StreamObserver<[StreamingRecognizeResponse](/java/docs/reference/google-cloud-speech/4.31.0/com.google.cloud.speech.v1beta1.StreamingRecognizeResponse)>`  

**Returns**

**Type**

**Description**

`io.grpc.stub.StreamObserver<[StreamingRecognizeRequest](/java/docs/reference/google-cloud-speech/4.31.0/com.google.cloud.speech.v1beta1.StreamingRecognizeRequest)>`

### syncRecognize(SyncRecognizeRequest request, StreamObserver<SyncRecognizeResponse> responseObserver)

```
public void syncRecognize(SyncRecognizeRequest request, StreamObserver<SyncRecognizeResponse> responseObserver)
```

Performs synchronous speech recognition: receive results after all audio has been sent and processed.

**Parameters**

**Name**

**Description**

`request`

`[SyncRecognizeRequest](/java/docs/reference/google-cloud-speech/4.31.0/com.google.cloud.speech.v1beta1.SyncRecognizeRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SyncRecognizeResponse](/java/docs/reference/google-cloud-speech/4.31.0/com.google.cloud.speech.v1beta1.SyncRecognizeResponse)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
