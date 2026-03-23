-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface TrackOrBuilder (2.31.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.13 2.1.0 2.0.27

```
public interface TrackOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAttributes(int index)

```
public abstract DetectedAttribute getAttributes(int index)
```

Optional. Attributes in the track level.

`repeated .google.cloud.videointelligence.v1.DetectedAttribute attributes = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[DetectedAttribute](/java/docs/reference/google-cloud-video-intelligence/2.31.0/com.google.cloud.videointelligence.v1.DetectedAttribute)`

### getAttributesCount()

```
public abstract int getAttributesCount()
```

Optional. Attributes in the track level.

`repeated .google.cloud.videointelligence.v1.DetectedAttribute attributes = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAttributesList()

```
public abstract List<DetectedAttribute> getAttributesList()
```

Optional. Attributes in the track level.

`repeated .google.cloud.videointelligence.v1.DetectedAttribute attributes = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[DetectedAttribute](/java/docs/reference/google-cloud-video-intelligence/2.31.0/com.google.cloud.videointelligence.v1.DetectedAttribute)>`

### getAttributesOrBuilder(int index)

```
public abstract DetectedAttributeOrBuilder getAttributesOrBuilder(int index)
```

Optional. Attributes in the track level.

`repeated .google.cloud.videointelligence.v1.DetectedAttribute attributes = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[DetectedAttributeOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.31.0/com.google.cloud.videointelligence.v1.DetectedAttributeOrBuilder)`

### getAttributesOrBuilderList()

```
public abstract List<? extends DetectedAttributeOrBuilder> getAttributesOrBuilderList()
```

Optional. Attributes in the track level.

`repeated .google.cloud.videointelligence.v1.DetectedAttribute attributes = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1.DetectedAttributeOrBuilder>`

### getConfidence()

```
public abstract float getConfidence()
```

Optional. The confidence score of the tracked object.

`float confidence = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The confidence.

### getSegment()

```
public abstract VideoSegment getSegment()
```

Video segment of a track.

`.google.cloud.videointelligence.v1.VideoSegment segment = 1;`

**Returns**

**Type**

**Description**

`[VideoSegment](/java/docs/reference/google-cloud-video-intelligence/2.31.0/com.google.cloud.videointelligence.v1.VideoSegment)`

The segment.

### getSegmentOrBuilder()

```
public abstract VideoSegmentOrBuilder getSegmentOrBuilder()
```

Video segment of a track.

`.google.cloud.videointelligence.v1.VideoSegment segment = 1;`

**Returns**

**Type**

**Description**

`[VideoSegmentOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.31.0/com.google.cloud.videointelligence.v1.VideoSegmentOrBuilder)`

### getTimestampedObjects(int index)

```
public abstract TimestampedObject getTimestampedObjects(int index)
```

The object with timestamp and attributes per frame in the track.

`repeated .google.cloud.videointelligence.v1.TimestampedObject timestamped_objects = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TimestampedObject](/java/docs/reference/google-cloud-video-intelligence/2.31.0/com.google.cloud.videointelligence.v1.TimestampedObject)`

### getTimestampedObjectsCount()

```
public abstract int getTimestampedObjectsCount()
```

The object with timestamp and attributes per frame in the track.

`repeated .google.cloud.videointelligence.v1.TimestampedObject timestamped_objects = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getTimestampedObjectsList()

```
public abstract List<TimestampedObject> getTimestampedObjectsList()
```

The object with timestamp and attributes per frame in the track.

`repeated .google.cloud.videointelligence.v1.TimestampedObject timestamped_objects = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[TimestampedObject](/java/docs/reference/google-cloud-video-intelligence/2.31.0/com.google.cloud.videointelligence.v1.TimestampedObject)>`

### getTimestampedObjectsOrBuilder(int index)

```
public abstract TimestampedObjectOrBuilder getTimestampedObjectsOrBuilder(int index)
```

The object with timestamp and attributes per frame in the track.

`repeated .google.cloud.videointelligence.v1.TimestampedObject timestamped_objects = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TimestampedObjectOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.31.0/com.google.cloud.videointelligence.v1.TimestampedObjectOrBuilder)`

### getTimestampedObjectsOrBuilderList()

```
public abstract List<? extends TimestampedObjectOrBuilder> getTimestampedObjectsOrBuilderList()
```

The object with timestamp and attributes per frame in the track.

`repeated .google.cloud.videointelligence.v1.TimestampedObject timestamped_objects = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1.TimestampedObjectOrBuilder>`

### hasSegment()

```
public abstract boolean hasSegment()
```

Video segment of a track.

`.google.cloud.videointelligence.v1.VideoSegment segment = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the segment field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
