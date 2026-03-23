-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface VideoObjectTrackingPredictionResultOrBuilder (0.8.0) Stay organized with collections Save and categorize content based on your preferences.

0.44.0 (latest) 0.42.0 0.40.0 0.39.0 0.37.0 0.35.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.27.0 0.25.0 0.24.0 0.21.0 0.20.0 0.19.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface VideoObjectTrackingPredictionResultOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getObjects(int index)

```
public abstract VideoObjectTrackingPredictionResult.DetectedObject getObjects(int index)
```

All of the objects detected in the specified time range.

`repeated .google.cloud.visionai.v1.VideoObjectTrackingPredictionResult.DetectedObject objects = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[VideoObjectTrackingPredictionResult.DetectedObject](/java/docs/reference/google-cloud-visionai/0.8.0/com.google.cloud.visionai.v1.VideoObjectTrackingPredictionResult.DetectedObject)`

### getObjectsCount()

```
public abstract int getObjectsCount()
```

All of the objects detected in the specified time range.

`repeated .google.cloud.visionai.v1.VideoObjectTrackingPredictionResult.DetectedObject objects = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getObjectsList()

```
public abstract List<VideoObjectTrackingPredictionResult.DetectedObject> getObjectsList()
```

All of the objects detected in the specified time range.

`repeated .google.cloud.visionai.v1.VideoObjectTrackingPredictionResult.DetectedObject objects = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[DetectedObject](/java/docs/reference/google-cloud-visionai/0.8.0/com.google.cloud.visionai.v1.VideoObjectTrackingPredictionResult.DetectedObject)>`

### getObjectsOrBuilder(int index)

```
public abstract VideoObjectTrackingPredictionResult.DetectedObjectOrBuilder getObjectsOrBuilder(int index)
```

All of the objects detected in the specified time range.

`repeated .google.cloud.visionai.v1.VideoObjectTrackingPredictionResult.DetectedObject objects = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[VideoObjectTrackingPredictionResult.DetectedObjectOrBuilder](/java/docs/reference/google-cloud-visionai/0.8.0/com.google.cloud.visionai.v1.VideoObjectTrackingPredictionResult.DetectedObjectOrBuilder)`

### getObjectsOrBuilderList()

```
public abstract List<? extends VideoObjectTrackingPredictionResult.DetectedObjectOrBuilder> getObjectsOrBuilderList()
```

All of the objects detected in the specified time range.

`repeated .google.cloud.visionai.v1.VideoObjectTrackingPredictionResult.DetectedObject objects = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.visionai.v1.VideoObjectTrackingPredictionResult.DetectedObjectOrBuilder>`

### getSegmentEndTime()

```
public abstract Timestamp getSegmentEndTime()
```

The end, inclusive, of the video's time segment in which the current identifications happen. Particularly, if the end is the same as the start, it means the identifications happen on a specific video frame.

`.google.protobuf.Timestamp segment_end_time = 2;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The segmentEndTime.

### getSegmentEndTimeOrBuilder()

```
public abstract TimestampOrBuilder getSegmentEndTimeOrBuilder()
```

The end, inclusive, of the video's time segment in which the current identifications happen. Particularly, if the end is the same as the start, it means the identifications happen on a specific video frame.

`.google.protobuf.Timestamp segment_end_time = 2;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getSegmentStartTime()

```
public abstract Timestamp getSegmentStartTime()
```

The beginning, inclusive, of the video's time segment in which the current identifications happens.

`.google.protobuf.Timestamp segment_start_time = 1;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The segmentStartTime.

### getSegmentStartTimeOrBuilder()

```
public abstract TimestampOrBuilder getSegmentStartTimeOrBuilder()
```

The beginning, inclusive, of the video's time segment in which the current identifications happens.

`.google.protobuf.Timestamp segment_start_time = 1;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasSegmentEndTime()

```
public abstract boolean hasSegmentEndTime()
```

The end, inclusive, of the video's time segment in which the current identifications happen. Particularly, if the end is the same as the start, it means the identifications happen on a specific video frame.

`.google.protobuf.Timestamp segment_end_time = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the segmentEndTime field is set.

### hasSegmentStartTime()

```
public abstract boolean hasSegmentStartTime()
```

The beginning, inclusive, of the video's time segment in which the current identifications happens.

`.google.protobuf.Timestamp segment_start_time = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the segmentStartTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
