-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SpeechTranslationServiceGrpc.AsyncService (0.22.0) Stay organized with collections Save and categorize content based on your preferences.

0.93.0 (latest) 0.91.0 0.89.0 0.88.0 0.87.0 0.86.0 0.84.0 0.82.0 0.81.0 0.80.0 0.79.0 0.78.0 0.76.0 0.74.0 0.73.0 0.70.0 0.69.0 0.68.0 0.66.0 0.65.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.6 0.7.10

```
public static interface SpeechTranslationServiceGrpc.AsyncService
```

Provides translation from/to media types.

## Methods

### streamingTranslateSpeech(StreamObserver<StreamingTranslateSpeechResponse> responseObserver)

```
public default StreamObserver<StreamingTranslateSpeechRequest> streamingTranslateSpeech(StreamObserver<StreamingTranslateSpeechResponse> responseObserver)
```

Performs bidirectional streaming speech translation: receive results while sending audio. This method is only available via the gRPC API (not REST).

**Parameter**

**Name**

**Description**

`responseObserver`

`io.grpc.stub.StreamObserver<[StreamingTranslateSpeechResponse](/java/docs/reference/google-cloud-mediatranslation/0.22.0/com.google.cloud.mediatranslation.v1beta1.StreamingTranslateSpeechResponse)>`  

**Returns**

**Type**

**Description**

`io.grpc.stub.StreamObserver<[StreamingTranslateSpeechRequest](/java/docs/reference/google-cloud-mediatranslation/0.22.0/com.google.cloud.mediatranslation.v1beta1.StreamingTranslateSpeechRequest)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
