-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface StreamingVideoConfigOrBuilder (2.16.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.13 2.1.0 2.0.27

```
public interface StreamingVideoConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAutomlActionRecognitionConfig()

```
public abstract StreamingAutomlActionRecognitionConfig getAutomlActionRecognitionConfig()
```

Config for STREAMING\_AUTOML\_ACTION\_RECOGNITION.

`.google.cloud.videointelligence.v1p3beta1.StreamingAutomlActionRecognitionConfig automl_action_recognition_config = 23;`

**Returns**

**Type**

**Description**

`[StreamingAutomlActionRecognitionConfig](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingAutomlActionRecognitionConfig)`

The automlActionRecognitionConfig.

### getAutomlActionRecognitionConfigOrBuilder()

```
public abstract StreamingAutomlActionRecognitionConfigOrBuilder getAutomlActionRecognitionConfigOrBuilder()
```

Config for STREAMING\_AUTOML\_ACTION\_RECOGNITION.

`.google.cloud.videointelligence.v1p3beta1.StreamingAutomlActionRecognitionConfig automl_action_recognition_config = 23;`

**Returns**

**Type**

**Description**

`[StreamingAutomlActionRecognitionConfigOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingAutomlActionRecognitionConfigOrBuilder)`

### getAutomlClassificationConfig()

```
public abstract StreamingAutomlClassificationConfig getAutomlClassificationConfig()
```

Config for STREAMING\_AUTOML\_CLASSIFICATION.

`.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig automl_classification_config = 21;`

**Returns**

**Type**

**Description**

`[StreamingAutomlClassificationConfig](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig)`

The automlClassificationConfig.

### getAutomlClassificationConfigOrBuilder()

```
public abstract StreamingAutomlClassificationConfigOrBuilder getAutomlClassificationConfigOrBuilder()
```

Config for STREAMING\_AUTOML\_CLASSIFICATION.

`.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig automl_classification_config = 21;`

**Returns**

**Type**

**Description**

`[StreamingAutomlClassificationConfigOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfigOrBuilder)`

### getAutomlObjectTrackingConfig()

```
public abstract StreamingAutomlObjectTrackingConfig getAutomlObjectTrackingConfig()
```

Config for STREAMING\_AUTOML\_OBJECT\_TRACKING.

`.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig automl_object_tracking_config = 22;`

**Returns**

**Type**

**Description**

`[StreamingAutomlObjectTrackingConfig](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig)`

The automlObjectTrackingConfig.

### getAutomlObjectTrackingConfigOrBuilder()

```
public abstract StreamingAutomlObjectTrackingConfigOrBuilder getAutomlObjectTrackingConfigOrBuilder()
```

Config for STREAMING\_AUTOML\_OBJECT\_TRACKING.

`.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig automl_object_tracking_config = 22;`

**Returns**

**Type**

**Description**

`[StreamingAutomlObjectTrackingConfigOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfigOrBuilder)`

### getExplicitContentDetectionConfig()

```
public abstract StreamingExplicitContentDetectionConfig getExplicitContentDetectionConfig()
```

Config for STREAMING\_EXPLICIT\_CONTENT\_DETECTION.

`.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig explicit_content_detection_config = 4;`

**Returns**

**Type**

**Description**

`[StreamingExplicitContentDetectionConfig](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig)`

The explicitContentDetectionConfig.

### getExplicitContentDetectionConfigOrBuilder()

```
public abstract StreamingExplicitContentDetectionConfigOrBuilder getExplicitContentDetectionConfigOrBuilder()
```

Config for STREAMING\_EXPLICIT\_CONTENT\_DETECTION.

`.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig explicit_content_detection_config = 4;`

**Returns**

**Type**

**Description**

`[StreamingExplicitContentDetectionConfigOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfigOrBuilder)`

### getFeature()

```
public abstract StreamingFeature getFeature()
```

Requested annotation feature.

`.google.cloud.videointelligence.v1p3beta1.StreamingFeature feature = 1;`

**Returns**

**Type**

**Description**

`[StreamingFeature](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingFeature)`

The feature.

### getFeatureValue()

```
public abstract int getFeatureValue()
```

Requested annotation feature.

`.google.cloud.videointelligence.v1p3beta1.StreamingFeature feature = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for feature.

### getLabelDetectionConfig()

```
public abstract StreamingLabelDetectionConfig getLabelDetectionConfig()
```

Config for STREAMING\_LABEL\_DETECTION.

`.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig label_detection_config = 3;`

**Returns**

**Type**

**Description**

`[StreamingLabelDetectionConfig](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig)`

The labelDetectionConfig.

### getLabelDetectionConfigOrBuilder()

```
public abstract StreamingLabelDetectionConfigOrBuilder getLabelDetectionConfigOrBuilder()
```

Config for STREAMING\_LABEL\_DETECTION.

`.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig label_detection_config = 3;`

**Returns**

**Type**

**Description**

`[StreamingLabelDetectionConfigOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfigOrBuilder)`

### getObjectTrackingConfig()

```
public abstract StreamingObjectTrackingConfig getObjectTrackingConfig()
```

Config for STREAMING\_OBJECT\_TRACKING.

`.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig object_tracking_config = 5;`

**Returns**

**Type**

**Description**

`[StreamingObjectTrackingConfig](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig)`

The objectTrackingConfig.

### getObjectTrackingConfigOrBuilder()

```
public abstract StreamingObjectTrackingConfigOrBuilder getObjectTrackingConfigOrBuilder()
```

Config for STREAMING\_OBJECT\_TRACKING.

`.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig object_tracking_config = 5;`

**Returns**

**Type**

**Description**

`[StreamingObjectTrackingConfigOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfigOrBuilder)`

### getShotChangeDetectionConfig()

```
public abstract StreamingShotChangeDetectionConfig getShotChangeDetectionConfig()
```

Config for STREAMING\_SHOT\_CHANGE\_DETECTION.

`.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig shot_change_detection_config = 2;`

**Returns**

**Type**

**Description**

`[StreamingShotChangeDetectionConfig](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig)`

The shotChangeDetectionConfig.

### getShotChangeDetectionConfigOrBuilder()

```
public abstract StreamingShotChangeDetectionConfigOrBuilder getShotChangeDetectionConfigOrBuilder()
```

Config for STREAMING\_SHOT\_CHANGE\_DETECTION.

`.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig shot_change_detection_config = 2;`

**Returns**

**Type**

**Description**

`[StreamingShotChangeDetectionConfigOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfigOrBuilder)`

### getStorageConfig()

```
public abstract StreamingStorageConfig getStorageConfig()
```

Streaming storage option. By default: storage is disabled.

`.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig storage_config = 30;`

**Returns**

**Type**

**Description**

`[StreamingStorageConfig](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig)`

The storageConfig.

### getStorageConfigOrBuilder()

```
public abstract StreamingStorageConfigOrBuilder getStorageConfigOrBuilder()
```

Streaming storage option. By default: storage is disabled.

`.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig storage_config = 30;`

**Returns**

**Type**

**Description**

`[StreamingStorageConfigOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfigOrBuilder)`

### getStreamingConfigCase()

```
public abstract StreamingVideoConfig.StreamingConfigCase getStreamingConfigCase()
```

**Returns**

**Type**

**Description**

`[StreamingVideoConfig.StreamingConfigCase](/java/docs/reference/google-cloud-video-intelligence/2.16.0/com.google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig.StreamingConfigCase)`

### hasAutomlActionRecognitionConfig()

```
public abstract boolean hasAutomlActionRecognitionConfig()
```

Config for STREAMING\_AUTOML\_ACTION\_RECOGNITION.

`.google.cloud.videointelligence.v1p3beta1.StreamingAutomlActionRecognitionConfig automl_action_recognition_config = 23;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the automlActionRecognitionConfig field is set.

### hasAutomlClassificationConfig()

```
public abstract boolean hasAutomlClassificationConfig()
```

Config for STREAMING\_AUTOML\_CLASSIFICATION.

`.google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig automl_classification_config = 21;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the automlClassificationConfig field is set.

### hasAutomlObjectTrackingConfig()

```
public abstract boolean hasAutomlObjectTrackingConfig()
```

Config for STREAMING\_AUTOML\_OBJECT\_TRACKING.

`.google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig automl_object_tracking_config = 22;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the automlObjectTrackingConfig field is set.

### hasExplicitContentDetectionConfig()

```
public abstract boolean hasExplicitContentDetectionConfig()
```

Config for STREAMING\_EXPLICIT\_CONTENT\_DETECTION.

`.google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig explicit_content_detection_config = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the explicitContentDetectionConfig field is set.

### hasLabelDetectionConfig()

```
public abstract boolean hasLabelDetectionConfig()
```

Config for STREAMING\_LABEL\_DETECTION.

`.google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig label_detection_config = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the labelDetectionConfig field is set.

### hasObjectTrackingConfig()

```
public abstract boolean hasObjectTrackingConfig()
```

Config for STREAMING\_OBJECT\_TRACKING.

`.google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig object_tracking_config = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the objectTrackingConfig field is set.

### hasShotChangeDetectionConfig()

```
public abstract boolean hasShotChangeDetectionConfig()
```

Config for STREAMING\_SHOT\_CHANGE\_DETECTION.

`.google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig shot_change_detection_config = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the shotChangeDetectionConfig field is set.

### hasStorageConfig()

```
public abstract boolean hasStorageConfig()
```

Streaming storage option. By default: storage is disabled.

`.google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig storage_config = 30;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the storageConfig field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
