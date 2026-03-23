-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface StreamingRecognitionResultOrBuilder (4.19.0) Stay organized with collections Save and categorize content based on your preferences.

4.82.0 (latest) 4.80.0 4.78.0 4.77.0 4.75.0 4.73.0 4.71.0 4.70.0 4.69.0 4.68.0 4.67.0 4.65.0 4.63.0 4.62.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.7.0 4.6.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.0 3.0.0 2.6.1 2.5.9 2.4.0 2.3.0 2.2.15

```
public interface StreamingRecognitionResultOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAlternatives(int index)

```
public abstract SpeechRecognitionAlternative getAlternatives(int index)
```

May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.

`repeated .google.cloud.speech.v1p1beta1.SpeechRecognitionAlternative alternatives = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SpeechRecognitionAlternative](/java/docs/reference/google-cloud-speech/4.19.0/com.google.cloud.speech.v1p1beta1.SpeechRecognitionAlternative)`

### getAlternativesCount()

```
public abstract int getAlternativesCount()
```

May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.

`repeated .google.cloud.speech.v1p1beta1.SpeechRecognitionAlternative alternatives = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAlternativesList()

```
public abstract List<SpeechRecognitionAlternative> getAlternativesList()
```

May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.

`repeated .google.cloud.speech.v1p1beta1.SpeechRecognitionAlternative alternatives = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SpeechRecognitionAlternative](/java/docs/reference/google-cloud-speech/4.19.0/com.google.cloud.speech.v1p1beta1.SpeechRecognitionAlternative)>`

### getAlternativesOrBuilder(int index)

```
public abstract SpeechRecognitionAlternativeOrBuilder getAlternativesOrBuilder(int index)
```

May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.

`repeated .google.cloud.speech.v1p1beta1.SpeechRecognitionAlternative alternatives = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SpeechRecognitionAlternativeOrBuilder](/java/docs/reference/google-cloud-speech/4.19.0/com.google.cloud.speech.v1p1beta1.SpeechRecognitionAlternativeOrBuilder)`

### getAlternativesOrBuilderList()

```
public abstract List<? extends SpeechRecognitionAlternativeOrBuilder> getAlternativesOrBuilderList()
```

May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.

`repeated .google.cloud.speech.v1p1beta1.SpeechRecognitionAlternative alternatives = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.speech.v1p1beta1.SpeechRecognitionAlternativeOrBuilder>`

### getChannelTag()

```
public abstract int getChannelTag()
```

For multi-channel audio, this is the channel number corresponding to the recognized result for the audio from that channel. For audio\_channel\_count = N, its output values can range from '1' to 'N'.

`int32 channel_tag = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The channelTag.

### getIsFinal()

```
public abstract boolean getIsFinal()
```

If `false`, this `StreamingRecognitionResult` represents an interim result that may change. If `true`, this is the final time the speech service will return this particular `StreamingRecognitionResult`, the recognizer will not return any further hypotheses for this portion of the transcript and corresponding audio.

`bool is_final = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The isFinal.

### getLanguageCode()

```
public abstract String getLanguageCode()
```

Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.

`string language_code = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The languageCode.

### getLanguageCodeBytes()

```
public abstract ByteString getLanguageCodeBytes()
```

Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.

`string language_code = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for languageCode.

### getResultEndTime()

```
public abstract Duration getResultEndTime()
```

Time offset of the end of this result relative to the beginning of the audio.

`.google.protobuf.Duration result_end_time = 4;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The resultEndTime.

### getResultEndTimeOrBuilder()

```
public abstract DurationOrBuilder getResultEndTimeOrBuilder()
```

Time offset of the end of this result relative to the beginning of the audio.

`.google.protobuf.Duration result_end_time = 4;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getStability()

```
public abstract float getStability()
```

An estimate of the likelihood that the recognizer will not change its guess about this interim result. Values range from 0.0 (completely unstable) to 1.0 (completely stable). This field is only provided for interim results (`is_final=false`). The default of 0.0 is a sentinel value indicating `stability` was not set.

`float stability = 3;`

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The stability.

### hasResultEndTime()

```
public abstract boolean hasResultEndTime()
```

Time offset of the end of this result relative to the beginning of the audio.

`.google.protobuf.Duration result_end_time = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the resultEndTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
