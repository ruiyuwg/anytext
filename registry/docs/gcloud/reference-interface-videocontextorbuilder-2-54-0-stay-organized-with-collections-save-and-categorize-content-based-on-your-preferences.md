-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface VideoContextOrBuilder (2.54.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.13 2.1.0 2.0.27

```
public interface VideoContextOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getExplicitContentDetectionConfig()

```
public abstract ExplicitContentDetectionConfig getExplicitContentDetectionConfig()
```

Config for EXPLICIT\_CONTENT\_DETECTION.

`.google.cloud.videointelligence.v1p2beta1.ExplicitContentDetectionConfig explicit_content_detection_config = 4;`

**Returns**

**Type**

**Description**

`[ExplicitContentDetectionConfig](/java/docs/reference/google-cloud-video-intelligence/2.54.0/com.google.cloud.videointelligence.v1p2beta1.ExplicitContentDetectionConfig)`

The explicitContentDetectionConfig.

### getExplicitContentDetectionConfigOrBuilder()

```
public abstract ExplicitContentDetectionConfigOrBuilder getExplicitContentDetectionConfigOrBuilder()
```

Config for EXPLICIT\_CONTENT\_DETECTION.

`.google.cloud.videointelligence.v1p2beta1.ExplicitContentDetectionConfig explicit_content_detection_config = 4;`

**Returns**

**Type**

**Description**

`[ExplicitContentDetectionConfigOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.54.0/com.google.cloud.videointelligence.v1p2beta1.ExplicitContentDetectionConfigOrBuilder)`

### getLabelDetectionConfig()

```
public abstract LabelDetectionConfig getLabelDetectionConfig()
```

Config for LABEL\_DETECTION.

`.google.cloud.videointelligence.v1p2beta1.LabelDetectionConfig label_detection_config = 2;`

**Returns**

**Type**

**Description**

`[LabelDetectionConfig](/java/docs/reference/google-cloud-video-intelligence/2.54.0/com.google.cloud.videointelligence.v1p2beta1.LabelDetectionConfig)`

The labelDetectionConfig.

### getLabelDetectionConfigOrBuilder()

```
public abstract LabelDetectionConfigOrBuilder getLabelDetectionConfigOrBuilder()
```

Config for LABEL\_DETECTION.

`.google.cloud.videointelligence.v1p2beta1.LabelDetectionConfig label_detection_config = 2;`

**Returns**

**Type**

**Description**

`[LabelDetectionConfigOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.54.0/com.google.cloud.videointelligence.v1p2beta1.LabelDetectionConfigOrBuilder)`

### getSegments(int index)

```
public abstract VideoSegment getSegments(int index)
```

Video segments to annotate. The segments may overlap and are not required to be contiguous or span the whole video. If unspecified, each video is treated as a single segment.

`repeated .google.cloud.videointelligence.v1p2beta1.VideoSegment segments = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[VideoSegment](/java/docs/reference/google-cloud-video-intelligence/2.54.0/com.google.cloud.videointelligence.v1p2beta1.VideoSegment)`

### getSegmentsCount()

```
public abstract int getSegmentsCount()
```

Video segments to annotate. The segments may overlap and are not required to be contiguous or span the whole video. If unspecified, each video is treated as a single segment.

`repeated .google.cloud.videointelligence.v1p2beta1.VideoSegment segments = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getSegmentsList()

```
public abstract List<VideoSegment> getSegmentsList()
```

Video segments to annotate. The segments may overlap and are not required to be contiguous or span the whole video. If unspecified, each video is treated as a single segment.

`repeated .google.cloud.videointelligence.v1p2beta1.VideoSegment segments = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[VideoSegment](/java/docs/reference/google-cloud-video-intelligence/2.54.0/com.google.cloud.videointelligence.v1p2beta1.VideoSegment)>`

### getSegmentsOrBuilder(int index)

```
public abstract VideoSegmentOrBuilder getSegmentsOrBuilder(int index)
```

Video segments to annotate. The segments may overlap and are not required to be contiguous or span the whole video. If unspecified, each video is treated as a single segment.

`repeated .google.cloud.videointelligence.v1p2beta1.VideoSegment segments = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[VideoSegmentOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.54.0/com.google.cloud.videointelligence.v1p2beta1.VideoSegmentOrBuilder)`

### getSegmentsOrBuilderList()

```
public abstract List<? extends VideoSegmentOrBuilder> getSegmentsOrBuilderList()
```

Video segments to annotate. The segments may overlap and are not required to be contiguous or span the whole video. If unspecified, each video is treated as a single segment.

`repeated .google.cloud.videointelligence.v1p2beta1.VideoSegment segments = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1p2beta1.VideoSegmentOrBuilder>`

### getShotChangeDetectionConfig()

```
public abstract ShotChangeDetectionConfig getShotChangeDetectionConfig()
```

Config for SHOT\_CHANGE\_DETECTION.

`.google.cloud.videointelligence.v1p2beta1.ShotChangeDetectionConfig shot_change_detection_config = 3;`

**Returns**

**Type**

**Description**

`[ShotChangeDetectionConfig](/java/docs/reference/google-cloud-video-intelligence/2.54.0/com.google.cloud.videointelligence.v1p2beta1.ShotChangeDetectionConfig)`

The shotChangeDetectionConfig.

### getShotChangeDetectionConfigOrBuilder()

```
public abstract ShotChangeDetectionConfigOrBuilder getShotChangeDetectionConfigOrBuilder()
```

Config for SHOT\_CHANGE\_DETECTION.

`.google.cloud.videointelligence.v1p2beta1.ShotChangeDetectionConfig shot_change_detection_config = 3;`

**Returns**

**Type**

**Description**

`[ShotChangeDetectionConfigOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.54.0/com.google.cloud.videointelligence.v1p2beta1.ShotChangeDetectionConfigOrBuilder)`

### getTextDetectionConfig()

```
public abstract TextDetectionConfig getTextDetectionConfig()
```

Config for TEXT\_DETECTION.

`.google.cloud.videointelligence.v1p2beta1.TextDetectionConfig text_detection_config = 8;`

**Returns**

**Type**

**Description**

`[TextDetectionConfig](/java/docs/reference/google-cloud-video-intelligence/2.54.0/com.google.cloud.videointelligence.v1p2beta1.TextDetectionConfig)`

The textDetectionConfig.

### getTextDetectionConfigOrBuilder()

```
public abstract TextDetectionConfigOrBuilder getTextDetectionConfigOrBuilder()
```

Config for TEXT\_DETECTION.

`.google.cloud.videointelligence.v1p2beta1.TextDetectionConfig text_detection_config = 8;`

**Returns**

**Type**

**Description**

`[TextDetectionConfigOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.54.0/com.google.cloud.videointelligence.v1p2beta1.TextDetectionConfigOrBuilder)`

### hasExplicitContentDetectionConfig()

```
public abstract boolean hasExplicitContentDetectionConfig()
```

Config for EXPLICIT\_CONTENT\_DETECTION.

`.google.cloud.videointelligence.v1p2beta1.ExplicitContentDetectionConfig explicit_content_detection_config = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the explicitContentDetectionConfig field is set.

### hasLabelDetectionConfig()

```
public abstract boolean hasLabelDetectionConfig()
```

Config for LABEL\_DETECTION.

`.google.cloud.videointelligence.v1p2beta1.LabelDetectionConfig label_detection_config = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the labelDetectionConfig field is set.

### hasShotChangeDetectionConfig()

```
public abstract boolean hasShotChangeDetectionConfig()
```

Config for SHOT\_CHANGE\_DETECTION.

`.google.cloud.videointelligence.v1p2beta1.ShotChangeDetectionConfig shot_change_detection_config = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the shotChangeDetectionConfig field is set.

### hasTextDetectionConfig()

```
public abstract boolean hasTextDetectionConfig()
```

Config for TEXT\_DETECTION.

`.google.cloud.videointelligence.v1p2beta1.TextDetectionConfig text_detection_config = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the textDetectionConfig field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
