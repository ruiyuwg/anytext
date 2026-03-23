-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface FaceFrameOrBuilder (2.12.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.13 2.1.0 2.0.27

```
public interface FaceFrameOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getNormalizedBoundingBoxes(int index)

```
public abstract NormalizedBoundingBox getNormalizedBoundingBoxes(int index)
```

Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.

`repeated .google.cloud.videointelligence.v1.NormalizedBoundingBox normalized_bounding_boxes = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[NormalizedBoundingBox](/java/docs/reference/google-cloud-video-intelligence/2.12.0/com.google.cloud.videointelligence.v1.NormalizedBoundingBox)`

### getNormalizedBoundingBoxesCount()

```
public abstract int getNormalizedBoundingBoxesCount()
```

Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.

`repeated .google.cloud.videointelligence.v1.NormalizedBoundingBox normalized_bounding_boxes = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getNormalizedBoundingBoxesList()

```
public abstract List<NormalizedBoundingBox> getNormalizedBoundingBoxesList()
```

Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.

`repeated .google.cloud.videointelligence.v1.NormalizedBoundingBox normalized_bounding_boxes = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[NormalizedBoundingBox](/java/docs/reference/google-cloud-video-intelligence/2.12.0/com.google.cloud.videointelligence.v1.NormalizedBoundingBox)>`

### getNormalizedBoundingBoxesOrBuilder(int index)

```
public abstract NormalizedBoundingBoxOrBuilder getNormalizedBoundingBoxesOrBuilder(int index)
```

Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.

`repeated .google.cloud.videointelligence.v1.NormalizedBoundingBox normalized_bounding_boxes = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[NormalizedBoundingBoxOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.12.0/com.google.cloud.videointelligence.v1.NormalizedBoundingBoxOrBuilder)`

### getNormalizedBoundingBoxesOrBuilderList()

```
public abstract List<? extends NormalizedBoundingBoxOrBuilder> getNormalizedBoundingBoxesOrBuilderList()
```

Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.

`repeated .google.cloud.videointelligence.v1.NormalizedBoundingBox normalized_bounding_boxes = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1.NormalizedBoundingBoxOrBuilder>`

### getTimeOffset()

```
public abstract Duration getTimeOffset()
```

Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

`.google.protobuf.Duration time_offset = 2;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The timeOffset.

### getTimeOffsetOrBuilder()

```
public abstract DurationOrBuilder getTimeOffsetOrBuilder()
```

Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

`.google.protobuf.Duration time_offset = 2;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### hasTimeOffset()

```
public abstract boolean hasTimeOffset()
```

Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

`.google.protobuf.Duration time_offset = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timeOffset field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
