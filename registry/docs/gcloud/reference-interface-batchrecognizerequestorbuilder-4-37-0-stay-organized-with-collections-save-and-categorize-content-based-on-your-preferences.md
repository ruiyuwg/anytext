-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface BatchRecognizeRequestOrBuilder (4.37.0) Stay organized with collections Save and categorize content based on your preferences.

4.82.0 (latest) 4.80.0 4.78.0 4.77.0 4.75.0 4.73.0 4.71.0 4.70.0 4.69.0 4.68.0 4.67.0 4.65.0 4.63.0 4.62.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.7.0 4.6.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.0 3.0.0 2.6.1 2.5.9 2.4.0 2.3.0 2.2.15

```
public interface BatchRecognizeRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getConfig()

```
public abstract RecognitionConfig getConfig()
```

Features and audio metadata to use for the Automatic Speech Recognition. This field in combination with the config\_mask field can be used to override parts of the default\_recognition\_config of the Recognizer resource.

`.google.cloud.speech.v2.RecognitionConfig config = 4;`

**Returns**

**Type**

**Description**

`[RecognitionConfig](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionConfig)`

The config.

### getConfigMask()

```
public abstract FieldMask getConfigMask()
```

The list of fields in config that override the values in the default\_recognition\_config of the recognizer during this recognition request. If no mask is provided, all given fields in config override the values in the recognizer for this recognition request. If a mask is provided, only the fields listed in the mask override the config in the recognizer for this recognition request. If a wildcard (`*`) is provided, config completely overrides and replaces the config in the recognizer for this recognition request.

`.google.protobuf.FieldMask config_mask = 5;`

**Returns**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`

The configMask.

### getConfigMaskOrBuilder()

```
public abstract FieldMaskOrBuilder getConfigMaskOrBuilder()
```

The list of fields in config that override the values in the default\_recognition\_config of the recognizer during this recognition request. If no mask is provided, all given fields in config override the values in the recognizer for this recognition request. If a mask is provided, only the fields listed in the mask override the config in the recognizer for this recognition request. If a wildcard (`*`) is provided, config completely overrides and replaces the config in the recognizer for this recognition request.

`.google.protobuf.FieldMask config_mask = 5;`

**Returns**

**Type**

**Description**

`[FieldMaskOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMaskOrBuilder.html)`

### getConfigOrBuilder()

```
public abstract RecognitionConfigOrBuilder getConfigOrBuilder()
```

Features and audio metadata to use for the Automatic Speech Recognition. This field in combination with the config\_mask field can be used to override parts of the default\_recognition\_config of the Recognizer resource.

`.google.cloud.speech.v2.RecognitionConfig config = 4;`

**Returns**

**Type**

**Description**

`[RecognitionConfigOrBuilder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionConfigOrBuilder)`

### getFiles(int index)

```
public abstract BatchRecognizeFileMetadata getFiles(int index)
```

Audio files with file metadata for ASR. The maximum number of files allowed to be specified is 5.

`repeated .google.cloud.speech.v2.BatchRecognizeFileMetadata files = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[BatchRecognizeFileMetadata](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.BatchRecognizeFileMetadata)`

### getFilesCount()

```
public abstract int getFilesCount()
```

Audio files with file metadata for ASR. The maximum number of files allowed to be specified is 5.

`repeated .google.cloud.speech.v2.BatchRecognizeFileMetadata files = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getFilesList()

```
public abstract List<BatchRecognizeFileMetadata> getFilesList()
```

Audio files with file metadata for ASR. The maximum number of files allowed to be specified is 5.

`repeated .google.cloud.speech.v2.BatchRecognizeFileMetadata files = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[BatchRecognizeFileMetadata](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.BatchRecognizeFileMetadata)>`

### getFilesOrBuilder(int index)

```
public abstract BatchRecognizeFileMetadataOrBuilder getFilesOrBuilder(int index)
```

Audio files with file metadata for ASR. The maximum number of files allowed to be specified is 5.

`repeated .google.cloud.speech.v2.BatchRecognizeFileMetadata files = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[BatchRecognizeFileMetadataOrBuilder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.BatchRecognizeFileMetadataOrBuilder)`

### getFilesOrBuilderList()

```
public abstract List<? extends BatchRecognizeFileMetadataOrBuilder> getFilesOrBuilderList()
```

Audio files with file metadata for ASR. The maximum number of files allowed to be specified is 5.

`repeated .google.cloud.speech.v2.BatchRecognizeFileMetadata files = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.speech.v2.BatchRecognizeFileMetadataOrBuilder>`

### getProcessingStrategy()

```
public abstract BatchRecognizeRequest.ProcessingStrategy getProcessingStrategy()
```

Processing strategy to use for this request.

`.google.cloud.speech.v2.BatchRecognizeRequest.ProcessingStrategy processing_strategy = 7;`

**Returns**

**Type**

**Description**

`[BatchRecognizeRequest.ProcessingStrategy](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.BatchRecognizeRequest.ProcessingStrategy)`

The processingStrategy.

### getProcessingStrategyValue()

```
public abstract int getProcessingStrategyValue()
```

Processing strategy to use for this request.

`.google.cloud.speech.v2.BatchRecognizeRequest.ProcessingStrategy processing_strategy = 7;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for processingStrategy.

### getRecognitionOutputConfig()

```
public abstract RecognitionOutputConfig getRecognitionOutputConfig()
```

Configuration options for where to output the transcripts of each file.

`.google.cloud.speech.v2.RecognitionOutputConfig recognition_output_config = 6;`

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig)`

The recognitionOutputConfig.

### getRecognitionOutputConfigOrBuilder()

```
public abstract RecognitionOutputConfigOrBuilder getRecognitionOutputConfigOrBuilder()
```

Configuration options for where to output the transcripts of each file.

`.google.cloud.speech.v2.RecognitionOutputConfig recognition_output_config = 6;`

**Returns**

**Type**

**Description**

`[RecognitionOutputConfigOrBuilder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfigOrBuilder)`

### getRecognizer()

```
public abstract String getRecognizer()
```

Required. The name of the Recognizer to use during recognition. The expected format is `projects/{project}/locations/{location}/recognizers/{recognizer}`. The {recognizer} segment may be set to `_` to use an empty implicit Recognizer.

`string recognizer = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The recognizer.

### getRecognizerBytes()

```
public abstract ByteString getRecognizerBytes()
```

Required. The name of the Recognizer to use during recognition. The expected format is `projects/{project}/locations/{location}/recognizers/{recognizer}`. The {recognizer} segment may be set to `_` to use an empty implicit Recognizer.

`string recognizer = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for recognizer.

### hasConfig()

```
public abstract boolean hasConfig()
```

Features and audio metadata to use for the Automatic Speech Recognition. This field in combination with the config\_mask field can be used to override parts of the default\_recognition\_config of the Recognizer resource.

`.google.cloud.speech.v2.RecognitionConfig config = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the config field is set.

### hasConfigMask()

```
public abstract boolean hasConfigMask()
```

The list of fields in config that override the values in the default\_recognition\_config of the recognizer during this recognition request. If no mask is provided, all given fields in config override the values in the recognizer for this recognition request. If a mask is provided, only the fields listed in the mask override the config in the recognizer for this recognition request. If a wildcard (`*`) is provided, config completely overrides and replaces the config in the recognizer for this recognition request.

`.google.protobuf.FieldMask config_mask = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the configMask field is set.

### hasRecognitionOutputConfig()

```
public abstract boolean hasRecognitionOutputConfig()
```

Configuration options for where to output the transcripts of each file.

`.google.cloud.speech.v2.RecognitionOutputConfig recognition_output_config = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the recognitionOutputConfig field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
