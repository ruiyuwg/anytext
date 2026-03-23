-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SynthesizeLongAudioRequestOrBuilder (2.43.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.9 2.3.0 2.2.1 2.1.5

```
public interface SynthesizeLongAudioRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAudioConfig()

```
public abstract AudioConfig getAudioConfig()
```

Required. The configuration of the synthesized audio.

`.google.cloud.texttospeech.v1beta1.AudioConfig audio_config = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[AudioConfig](/java/docs/reference/google-cloud-texttospeech/2.43.0/com.google.cloud.texttospeech.v1beta1.AudioConfig)`

The audioConfig.

### getAudioConfigOrBuilder()

```
public abstract AudioConfigOrBuilder getAudioConfigOrBuilder()
```

Required. The configuration of the synthesized audio.

`.google.cloud.texttospeech.v1beta1.AudioConfig audio_config = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[AudioConfigOrBuilder](/java/docs/reference/google-cloud-texttospeech/2.43.0/com.google.cloud.texttospeech.v1beta1.AudioConfigOrBuilder)`

### getInput()

```
public abstract SynthesisInput getInput()
```

Required. The Synthesizer requires either plain text or SSML as input. While Long Audio is in preview, SSML is temporarily unsupported.

`.google.cloud.texttospeech.v1beta1.SynthesisInput input = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[SynthesisInput](/java/docs/reference/google-cloud-texttospeech/2.43.0/com.google.cloud.texttospeech.v1beta1.SynthesisInput)`

The input.

### getInputOrBuilder()

```
public abstract SynthesisInputOrBuilder getInputOrBuilder()
```

Required. The Synthesizer requires either plain text or SSML as input. While Long Audio is in preview, SSML is temporarily unsupported.

`.google.cloud.texttospeech.v1beta1.SynthesisInput input = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[SynthesisInputOrBuilder](/java/docs/reference/google-cloud-texttospeech/2.43.0/com.google.cloud.texttospeech.v1beta1.SynthesisInputOrBuilder)`

### getOutputGcsUri()

```
public abstract String getOutputGcsUri()
```

Required. Specifies a Cloud Storage URI for the synthesis results. Must be specified in the format: `gs://bucket_name/object_name`, and the bucket must already exist.

`string output_gcs_uri = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The outputGcsUri.

### getOutputGcsUriBytes()

```
public abstract ByteString getOutputGcsUriBytes()
```

Required. Specifies a Cloud Storage URI for the synthesis results. Must be specified in the format: `gs://bucket_name/object_name`, and the bucket must already exist.

`string output_gcs_uri = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for outputGcsUri.

### getParent()

```
public abstract String getParent()
```

The resource states of the request in the form of `projects/*/locations/*`.

`string parent = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parent.

### getParentBytes()

```
public abstract ByteString getParentBytes()
```

The resource states of the request in the form of `projects/*/locations/*`.

`string parent = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### getVoice()

```
public abstract VoiceSelectionParams getVoice()
```

Required. The desired voice of the synthesized audio.

`.google.cloud.texttospeech.v1beta1.VoiceSelectionParams voice = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[VoiceSelectionParams](/java/docs/reference/google-cloud-texttospeech/2.43.0/com.google.cloud.texttospeech.v1beta1.VoiceSelectionParams)`

The voice.

### getVoiceOrBuilder()

```
public abstract VoiceSelectionParamsOrBuilder getVoiceOrBuilder()
```

Required. The desired voice of the synthesized audio.

`.google.cloud.texttospeech.v1beta1.VoiceSelectionParams voice = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[VoiceSelectionParamsOrBuilder](/java/docs/reference/google-cloud-texttospeech/2.43.0/com.google.cloud.texttospeech.v1beta1.VoiceSelectionParamsOrBuilder)`

### hasAudioConfig()

```
public abstract boolean hasAudioConfig()
```

Required. The configuration of the synthesized audio.

`.google.cloud.texttospeech.v1beta1.AudioConfig audio_config = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the audioConfig field is set.

### hasInput()

```
public abstract boolean hasInput()
```

Required. The Synthesizer requires either plain text or SSML as input. While Long Audio is in preview, SSML is temporarily unsupported.

`.google.cloud.texttospeech.v1beta1.SynthesisInput input = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the input field is set.

### hasVoice()

```
public abstract boolean hasVoice()
```

Required. The desired voice of the synthesized audio.

`.google.cloud.texttospeech.v1beta1.VoiceSelectionParams voice = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the voice field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
