-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface StreamingRecognizeResponseOrBuilder (4.38.0) Stay organized with collections Save and categorize content based on your preferences.

4.82.0 (latest) 4.80.0 4.78.0 4.77.0 4.75.0 4.73.0 4.71.0 4.70.0 4.69.0 4.68.0 4.67.0 4.65.0 4.63.0 4.62.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.7.0 4.6.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.0 3.0.0 2.6.1 2.5.9 2.4.0 2.3.0 2.2.15

```
public interface StreamingRecognizeResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getError()

```
public abstract Status getError()
```

If set, returns a google.rpc.Status message that specifies the error for the operation.

`.google.rpc.Status error = 1;`

**Returns**

**Type**

**Description**

`com.google.rpc.Status`

The error.

### getErrorOrBuilder()

```
public abstract StatusOrBuilder getErrorOrBuilder()
```

If set, returns a google.rpc.Status message that specifies the error for the operation.

`.google.rpc.Status error = 1;`

**Returns**

**Type**

**Description**

`com.google.rpc.StatusOrBuilder`

### getRequestId()

```
public abstract long getRequestId()
```

The ID associated with the request. This is a unique ID specific only to the given request.

`int64 request_id = 10;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The requestId.

### getResults(int index)

```
public abstract StreamingRecognitionResult getResults(int index)
```

This repeated list contains zero or more results that correspond to consecutive portions of the audio currently being processed. It contains zero or one `is_final=true` result (the newly settled portion), followed by zero or more `is_final=false` results (the interim results).

`repeated .google.cloud.speech.v1p1beta1.StreamingRecognitionResult results = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[StreamingRecognitionResult](/java/docs/reference/google-cloud-speech/4.38.0/com.google.cloud.speech.v1p1beta1.StreamingRecognitionResult)`

### getResultsCount()

```
public abstract int getResultsCount()
```

This repeated list contains zero or more results that correspond to consecutive portions of the audio currently being processed. It contains zero or one `is_final=true` result (the newly settled portion), followed by zero or more `is_final=false` results (the interim results).

`repeated .google.cloud.speech.v1p1beta1.StreamingRecognitionResult results = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getResultsList()

```
public abstract List<StreamingRecognitionResult> getResultsList()
```

This repeated list contains zero or more results that correspond to consecutive portions of the audio currently being processed. It contains zero or one `is_final=true` result (the newly settled portion), followed by zero or more `is_final=false` results (the interim results).

`repeated .google.cloud.speech.v1p1beta1.StreamingRecognitionResult results = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[StreamingRecognitionResult](/java/docs/reference/google-cloud-speech/4.38.0/com.google.cloud.speech.v1p1beta1.StreamingRecognitionResult)>`

### getResultsOrBuilder(int index)

```
public abstract StreamingRecognitionResultOrBuilder getResultsOrBuilder(int index)
```

This repeated list contains zero or more results that correspond to consecutive portions of the audio currently being processed. It contains zero or one `is_final=true` result (the newly settled portion), followed by zero or more `is_final=false` results (the interim results).

`repeated .google.cloud.speech.v1p1beta1.StreamingRecognitionResult results = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[StreamingRecognitionResultOrBuilder](/java/docs/reference/google-cloud-speech/4.38.0/com.google.cloud.speech.v1p1beta1.StreamingRecognitionResultOrBuilder)`

### getResultsOrBuilderList()

```
public abstract List<? extends StreamingRecognitionResultOrBuilder> getResultsOrBuilderList()
```

This repeated list contains zero or more results that correspond to consecutive portions of the audio currently being processed. It contains zero or one `is_final=true` result (the newly settled portion), followed by zero or more `is_final=false` results (the interim results).

`repeated .google.cloud.speech.v1p1beta1.StreamingRecognitionResult results = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.speech.v1p1beta1.StreamingRecognitionResultOrBuilder>`

### getSpeechAdaptationInfo()

```
public abstract SpeechAdaptationInfo getSpeechAdaptationInfo()
```

Provides information on adaptation behavior in response

`.google.cloud.speech.v1p1beta1.SpeechAdaptationInfo speech_adaptation_info = 9;`

**Returns**

**Type**

**Description**

`[SpeechAdaptationInfo](/java/docs/reference/google-cloud-speech/4.38.0/com.google.cloud.speech.v1p1beta1.SpeechAdaptationInfo)`

The speechAdaptationInfo.

### getSpeechAdaptationInfoOrBuilder()

```
public abstract SpeechAdaptationInfoOrBuilder getSpeechAdaptationInfoOrBuilder()
```

Provides information on adaptation behavior in response

`.google.cloud.speech.v1p1beta1.SpeechAdaptationInfo speech_adaptation_info = 9;`

**Returns**

**Type**

**Description**

`[SpeechAdaptationInfoOrBuilder](/java/docs/reference/google-cloud-speech/4.38.0/com.google.cloud.speech.v1p1beta1.SpeechAdaptationInfoOrBuilder)`

### getSpeechEventTime()

```
public abstract Duration getSpeechEventTime()
```

Time offset between the beginning of the audio and event emission.

`.google.protobuf.Duration speech_event_time = 8;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The speechEventTime.

### getSpeechEventTimeOrBuilder()

```
public abstract DurationOrBuilder getSpeechEventTimeOrBuilder()
```

Time offset between the beginning of the audio and event emission.

`.google.protobuf.Duration speech_event_time = 8;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getSpeechEventType()

```
public abstract StreamingRecognizeResponse.SpeechEventType getSpeechEventType()
```

Indicates the type of speech event.

`.google.cloud.speech.v1p1beta1.StreamingRecognizeResponse.SpeechEventType speech_event_type = 4;`

**Returns**

**Type**

**Description**

`[StreamingRecognizeResponse.SpeechEventType](/java/docs/reference/google-cloud-speech/4.38.0/com.google.cloud.speech.v1p1beta1.StreamingRecognizeResponse.SpeechEventType)`

The speechEventType.

### getSpeechEventTypeValue()

```
public abstract int getSpeechEventTypeValue()
```

Indicates the type of speech event.

`.google.cloud.speech.v1p1beta1.StreamingRecognizeResponse.SpeechEventType speech_event_type = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for speechEventType.

### getTotalBilledTime()

```
public abstract Duration getTotalBilledTime()
```

When available, billed audio seconds for the stream. Set only if this is the last response in the stream.

`.google.protobuf.Duration total_billed_time = 5;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The totalBilledTime.

### getTotalBilledTimeOrBuilder()

```
public abstract DurationOrBuilder getTotalBilledTimeOrBuilder()
```

When available, billed audio seconds for the stream. Set only if this is the last response in the stream.

`.google.protobuf.Duration total_billed_time = 5;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### hasError()

```
public abstract boolean hasError()
```

If set, returns a google.rpc.Status message that specifies the error for the operation.

`.google.rpc.Status error = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the error field is set.

### hasSpeechAdaptationInfo()

```
public abstract boolean hasSpeechAdaptationInfo()
```

Provides information on adaptation behavior in response

`.google.cloud.speech.v1p1beta1.SpeechAdaptationInfo speech_adaptation_info = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the speechAdaptationInfo field is set.

### hasSpeechEventTime()

```
public abstract boolean hasSpeechEventTime()
```

Time offset between the beginning of the audio and event emission.

`.google.protobuf.Duration speech_event_time = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the speechEventTime field is set.

### hasTotalBilledTime()

```
public abstract boolean hasTotalBilledTime()
```

When available, billed audio seconds for the stream. Set only if this is the last response in the stream.

`.google.protobuf.Duration total_billed_time = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the totalBilledTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
