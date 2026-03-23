-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface RecognitionConfigOrBuilder (4.54.0) Stay organized with collections Save and categorize content based on your preferences.

4.82.0 (latest) 4.80.0 4.78.0 4.77.0 4.75.0 4.73.0 4.71.0 4.70.0 4.69.0 4.68.0 4.67.0 4.65.0 4.63.0 4.62.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.7.0 4.6.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.0 3.0.0 2.6.1 2.5.9 2.4.0 2.3.0 2.2.15

```
public interface RecognitionConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAdaptation()

```
public abstract SpeechAdaptation getAdaptation()
```

Speech adaptation context that weights recognizer predictions for specific words and phrases.

`.google.cloud.speech.v2.SpeechAdaptation adaptation = 6;`

**Returns**

**Type**

**Description**

`[SpeechAdaptation](/java/docs/reference/google-cloud-speech/4.54.0/com.google.cloud.speech.v2.SpeechAdaptation)`

The adaptation.

### getAdaptationOrBuilder()

```
public abstract SpeechAdaptationOrBuilder getAdaptationOrBuilder()
```

Speech adaptation context that weights recognizer predictions for specific words and phrases.

`.google.cloud.speech.v2.SpeechAdaptation adaptation = 6;`

**Returns**

**Type**

**Description**

`[SpeechAdaptationOrBuilder](/java/docs/reference/google-cloud-speech/4.54.0/com.google.cloud.speech.v2.SpeechAdaptationOrBuilder)`

### getAutoDecodingConfig()

```
public abstract AutoDetectDecodingConfig getAutoDecodingConfig()
```

Automatically detect decoding parameters. Preferred for supported formats.

`.google.cloud.speech.v2.AutoDetectDecodingConfig auto_decoding_config = 7;`

**Returns**

**Type**

**Description**

`[AutoDetectDecodingConfig](/java/docs/reference/google-cloud-speech/4.54.0/com.google.cloud.speech.v2.AutoDetectDecodingConfig)`

The autoDecodingConfig.

### getAutoDecodingConfigOrBuilder()

```
public abstract AutoDetectDecodingConfigOrBuilder getAutoDecodingConfigOrBuilder()
```

Automatically detect decoding parameters. Preferred for supported formats.

`.google.cloud.speech.v2.AutoDetectDecodingConfig auto_decoding_config = 7;`

**Returns**

**Type**

**Description**

`[AutoDetectDecodingConfigOrBuilder](/java/docs/reference/google-cloud-speech/4.54.0/com.google.cloud.speech.v2.AutoDetectDecodingConfigOrBuilder)`

### getDecodingConfigCase()

```
public abstract RecognitionConfig.DecodingConfigCase getDecodingConfigCase()
```

**Returns**

**Type**

**Description**

`[RecognitionConfig.DecodingConfigCase](/java/docs/reference/google-cloud-speech/4.54.0/com.google.cloud.speech.v2.RecognitionConfig.DecodingConfigCase)`

### getExplicitDecodingConfig()

```
public abstract ExplicitDecodingConfig getExplicitDecodingConfig()
```

Explicitly specified decoding parameters. Required if using headerless PCM audio (linear16, mulaw, alaw).

`.google.cloud.speech.v2.ExplicitDecodingConfig explicit_decoding_config = 8;`

**Returns**

**Type**

**Description**

`[ExplicitDecodingConfig](/java/docs/reference/google-cloud-speech/4.54.0/com.google.cloud.speech.v2.ExplicitDecodingConfig)`

The explicitDecodingConfig.

### getExplicitDecodingConfigOrBuilder()

```
public abstract ExplicitDecodingConfigOrBuilder getExplicitDecodingConfigOrBuilder()
```

Explicitly specified decoding parameters. Required if using headerless PCM audio (linear16, mulaw, alaw).

`.google.cloud.speech.v2.ExplicitDecodingConfig explicit_decoding_config = 8;`

**Returns**

**Type**

**Description**

`[ExplicitDecodingConfigOrBuilder](/java/docs/reference/google-cloud-speech/4.54.0/com.google.cloud.speech.v2.ExplicitDecodingConfigOrBuilder)`

### getFeatures()

```
public abstract RecognitionFeatures getFeatures()
```

Speech recognition features to enable.

`.google.cloud.speech.v2.RecognitionFeatures features = 2;`

**Returns**

**Type**

**Description**

`[RecognitionFeatures](/java/docs/reference/google-cloud-speech/4.54.0/com.google.cloud.speech.v2.RecognitionFeatures)`

The features.

### getFeaturesOrBuilder()

```
public abstract RecognitionFeaturesOrBuilder getFeaturesOrBuilder()
```

Speech recognition features to enable.

`.google.cloud.speech.v2.RecognitionFeatures features = 2;`

**Returns**

**Type**

**Description**

`[RecognitionFeaturesOrBuilder](/java/docs/reference/google-cloud-speech/4.54.0/com.google.cloud.speech.v2.RecognitionFeaturesOrBuilder)`

### getLanguageCodes(int index)

```
public abstract String getLanguageCodes(int index)
```

Optional. The language of the supplied audio as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Language tags are normalized to BCP-47 before they are used eg "en-us" becomes "en-US".

Supported languages for each model are listed in the [Table of Supported Models](https://cloud.google.com/speech-to-text/v2/docs/speech-to-text-supported-languages).

If additional languages are provided, recognition result will contain recognition in the most likely language detected. The recognition result will include the language tag of the language detected in the audio.

`repeated string language_codes = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The languageCodes at the given index.

### getLanguageCodesBytes(int index)

```
public abstract ByteString getLanguageCodesBytes(int index)
```

Optional. The language of the supplied audio as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Language tags are normalized to BCP-47 before they are used eg "en-us" becomes "en-US".

Supported languages for each model are listed in the [Table of Supported Models](https://cloud.google.com/speech-to-text/v2/docs/speech-to-text-supported-languages).

If additional languages are provided, recognition result will contain recognition in the most likely language detected. The recognition result will include the language tag of the language detected in the audio.

`repeated string language_codes = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the languageCodes at the given index.

### getLanguageCodesCount()

```
public abstract int getLanguageCodesCount()
```

Optional. The language of the supplied audio as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Language tags are normalized to BCP-47 before they are used eg "en-us" becomes "en-US".

Supported languages for each model are listed in the [Table of Supported Models](https://cloud.google.com/speech-to-text/v2/docs/speech-to-text-supported-languages).

If additional languages are provided, recognition result will contain recognition in the most likely language detected. The recognition result will include the language tag of the language detected in the audio.

`repeated string language_codes = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of languageCodes.

### getLanguageCodesList()

```
public abstract List<String> getLanguageCodesList()
```

Optional. The language of the supplied audio as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Language tags are normalized to BCP-47 before they are used eg "en-us" becomes "en-US".

Supported languages for each model are listed in the [Table of Supported Models](https://cloud.google.com/speech-to-text/v2/docs/speech-to-text-supported-languages).

If additional languages are provided, recognition result will contain recognition in the most likely language detected. The recognition result will include the language tag of the language detected in the audio.

`repeated string language_codes = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the languageCodes.

### getModel()

```
public abstract String getModel()
```

Optional. Which model to use for recognition requests. Select the model best suited to your domain to get best results.

Guidance for choosing which model to use can be found in the [Transcription Models Documentation](https://cloud.google.com/speech-to-text/v2/docs/transcription-model) and the models supported in each region can be found in the [Table Of Supported Models](https://cloud.google.com/speech-to-text/v2/docs/speech-to-text-supported-languages).

`string model = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The model.

### getModelBytes()

```
public abstract ByteString getModelBytes()
```

Optional. Which model to use for recognition requests. Select the model best suited to your domain to get best results.

Guidance for choosing which model to use can be found in the [Transcription Models Documentation](https://cloud.google.com/speech-to-text/v2/docs/transcription-model) and the models supported in each region can be found in the [Table Of Supported Models](https://cloud.google.com/speech-to-text/v2/docs/speech-to-text-supported-languages).

`string model = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for model.

### getTranscriptNormalization()

```
public abstract TranscriptNormalization getTranscriptNormalization()
```

Optional. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable partial transcripts (stability > 0.8) and final transcripts.

`.google.cloud.speech.v2.TranscriptNormalization transcript_normalization = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[TranscriptNormalization](/java/docs/reference/google-cloud-speech/4.54.0/com.google.cloud.speech.v2.TranscriptNormalization)`

The transcriptNormalization.

### getTranscriptNormalizationOrBuilder()

```
public abstract TranscriptNormalizationOrBuilder getTranscriptNormalizationOrBuilder()
```

Optional. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable partial transcripts (stability > 0.8) and final transcripts.

`.google.cloud.speech.v2.TranscriptNormalization transcript_normalization = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[TranscriptNormalizationOrBuilder](/java/docs/reference/google-cloud-speech/4.54.0/com.google.cloud.speech.v2.TranscriptNormalizationOrBuilder)`

### getTranslationConfig()

```
public abstract TranslationConfig getTranslationConfig()
```

Optional. Optional configuration used to automatically run translation on the given audio to the desired language for supported models.

`.google.cloud.speech.v2.TranslationConfig translation_config = 15 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[TranslationConfig](/java/docs/reference/google-cloud-speech/4.54.0/com.google.cloud.speech.v2.TranslationConfig)`

The translationConfig.

### getTranslationConfigOrBuilder()

```
public abstract TranslationConfigOrBuilder getTranslationConfigOrBuilder()
```

Optional. Optional configuration used to automatically run translation on the given audio to the desired language for supported models.

`.google.cloud.speech.v2.TranslationConfig translation_config = 15 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[TranslationConfigOrBuilder](/java/docs/reference/google-cloud-speech/4.54.0/com.google.cloud.speech.v2.TranslationConfigOrBuilder)`

### hasAdaptation()

```
public abstract boolean hasAdaptation()
```

Speech adaptation context that weights recognizer predictions for specific words and phrases.

`.google.cloud.speech.v2.SpeechAdaptation adaptation = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the adaptation field is set.

### hasAutoDecodingConfig()

```
public abstract boolean hasAutoDecodingConfig()
```

Automatically detect decoding parameters. Preferred for supported formats.

`.google.cloud.speech.v2.AutoDetectDecodingConfig auto_decoding_config = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the autoDecodingConfig field is set.

### hasExplicitDecodingConfig()

```
public abstract boolean hasExplicitDecodingConfig()
```

Explicitly specified decoding parameters. Required if using headerless PCM audio (linear16, mulaw, alaw).

`.google.cloud.speech.v2.ExplicitDecodingConfig explicit_decoding_config = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the explicitDecodingConfig field is set.

### hasFeatures()

```
public abstract boolean hasFeatures()
```

Speech recognition features to enable.

`.google.cloud.speech.v2.RecognitionFeatures features = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the features field is set.

### hasTranscriptNormalization()

```
public abstract boolean hasTranscriptNormalization()
```

Optional. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable partial transcripts (stability > 0.8) and final transcripts.

`.google.cloud.speech.v2.TranscriptNormalization transcript_normalization = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the transcriptNormalization field is set.

### hasTranslationConfig()

```
public abstract boolean hasTranslationConfig()
```

Optional. Optional configuration used to automatically run translation on the given audio to the desired language for supported models.

`.google.cloud.speech.v2.TranslationConfig translation_config = 15 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the translationConfig field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
