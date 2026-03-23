-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ObjectTrackingAnnotationOrBuilder (2.45.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.13 2.1.0 2.0.27

```
public interface ObjectTrackingAnnotationOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getConfidence()

```
public abstract float getConfidence()
```

Object category's labeling confidence of this track.

`float confidence = 4;`

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The confidence.

### getEntity()

```
public abstract Entity getEntity()
```

Entity to specify the object category that this track is labeled as.

`.google.cloud.videointelligence.v1.Entity entity = 1;`

**Returns**

**Type**

**Description**

`[Entity](/java/docs/reference/google-cloud-video-intelligence/2.45.0/com.google.cloud.videointelligence.v1.Entity)`

The entity.

### getEntityOrBuilder()

```
public abstract EntityOrBuilder getEntityOrBuilder()
```

Entity to specify the object category that this track is labeled as.

`.google.cloud.videointelligence.v1.Entity entity = 1;`

**Returns**

**Type**

**Description**

`[EntityOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.45.0/com.google.cloud.videointelligence.v1.EntityOrBuilder)`

### getFrames(int index)

```
public abstract ObjectTrackingFrame getFrames(int index)
```

Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.

`repeated .google.cloud.videointelligence.v1.ObjectTrackingFrame frames = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ObjectTrackingFrame](/java/docs/reference/google-cloud-video-intelligence/2.45.0/com.google.cloud.videointelligence.v1.ObjectTrackingFrame)`

### getFramesCount()

```
public abstract int getFramesCount()
```

Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.

`repeated .google.cloud.videointelligence.v1.ObjectTrackingFrame frames = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getFramesList()

```
public abstract List<ObjectTrackingFrame> getFramesList()
```

Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.

`repeated .google.cloud.videointelligence.v1.ObjectTrackingFrame frames = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ObjectTrackingFrame](/java/docs/reference/google-cloud-video-intelligence/2.45.0/com.google.cloud.videointelligence.v1.ObjectTrackingFrame)>`

### getFramesOrBuilder(int index)

```
public abstract ObjectTrackingFrameOrBuilder getFramesOrBuilder(int index)
```

Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.

`repeated .google.cloud.videointelligence.v1.ObjectTrackingFrame frames = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ObjectTrackingFrameOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.45.0/com.google.cloud.videointelligence.v1.ObjectTrackingFrameOrBuilder)`

### getFramesOrBuilderList()

```
public abstract List<? extends ObjectTrackingFrameOrBuilder> getFramesOrBuilderList()
```

Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.

`repeated .google.cloud.videointelligence.v1.ObjectTrackingFrame frames = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1.ObjectTrackingFrameOrBuilder>`

### getSegment()

```
public abstract VideoSegment getSegment()
```

Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.

`.google.cloud.videointelligence.v1.VideoSegment segment = 3;`

**Returns**

**Type**

**Description**

`[VideoSegment](/java/docs/reference/google-cloud-video-intelligence/2.45.0/com.google.cloud.videointelligence.v1.VideoSegment)`

The segment.

### getSegmentOrBuilder()

```
public abstract VideoSegmentOrBuilder getSegmentOrBuilder()
```

Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.

`.google.cloud.videointelligence.v1.VideoSegment segment = 3;`

**Returns**

**Type**

**Description**

`[VideoSegmentOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.45.0/com.google.cloud.videointelligence.v1.VideoSegmentOrBuilder)`

### getTrackId()

```
public abstract long getTrackId()
```

Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track\_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track\_id over time.

`int64 track_id = 5;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The trackId.

### getTrackInfoCase()

```
public abstract ObjectTrackingAnnotation.TrackInfoCase getTrackInfoCase()
```

**Returns**

**Type**

**Description**

`[ObjectTrackingAnnotation.TrackInfoCase](/java/docs/reference/google-cloud-video-intelligence/2.45.0/com.google.cloud.videointelligence.v1.ObjectTrackingAnnotation.TrackInfoCase)`

### getVersion()

```
public abstract String getVersion()
```

Feature version.

`string version = 6;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The version.

### getVersionBytes()

```
public abstract ByteString getVersionBytes()
```

Feature version.

`string version = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for version.

### hasEntity()

```
public abstract boolean hasEntity()
```

Entity to specify the object category that this track is labeled as.

`.google.cloud.videointelligence.v1.Entity entity = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the entity field is set.

### hasSegment()

```
public abstract boolean hasSegment()
```

Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.

`.google.cloud.videointelligence.v1.VideoSegment segment = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the segment field is set.

### hasTrackId()

```
public abstract boolean hasTrackId()
```

Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track\_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track\_id over time.

`int64 track_id = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the trackId field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
