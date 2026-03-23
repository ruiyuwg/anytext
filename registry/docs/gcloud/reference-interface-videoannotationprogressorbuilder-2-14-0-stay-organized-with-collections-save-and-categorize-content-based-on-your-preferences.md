-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface VideoAnnotationProgressOrBuilder (2.14.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.13 2.1.0 2.0.27

```
public interface VideoAnnotationProgressOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getFeature()

```
public abstract Feature getFeature()
```

Specifies which feature is being tracked if the request contains more than one feature.

`.google.cloud.videointelligence.v1.Feature feature = 5;`

**Returns**

**Type**

**Description**

`[Feature](/java/docs/reference/google-cloud-video-intelligence/2.14.0/com.google.cloud.videointelligence.v1.Feature)`

The feature.

### getFeatureValue()

```
public abstract int getFeatureValue()
```

Specifies which feature is being tracked if the request contains more than one feature.

`.google.cloud.videointelligence.v1.Feature feature = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for feature.

### getInputUri()

```
public abstract String getInputUri()
```

Video file location in [Cloud Storage](https://cloud.google.com/storage/).

`string input_uri = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The inputUri.

### getInputUriBytes()

```
public abstract ByteString getInputUriBytes()
```

Video file location in [Cloud Storage](https://cloud.google.com/storage/).

`string input_uri = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for inputUri.

### getProgressPercent()

```
public abstract int getProgressPercent()
```

Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.

`int32 progress_percent = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The progressPercent.

### getSegment()

```
public abstract VideoSegment getSegment()
```

Specifies which segment is being tracked if the request contains more than one segment.

`.google.cloud.videointelligence.v1.VideoSegment segment = 6;`

**Returns**

**Type**

**Description**

`[VideoSegment](/java/docs/reference/google-cloud-video-intelligence/2.14.0/com.google.cloud.videointelligence.v1.VideoSegment)`

The segment.

### getSegmentOrBuilder()

```
public abstract VideoSegmentOrBuilder getSegmentOrBuilder()
```

Specifies which segment is being tracked if the request contains more than one segment.

`.google.cloud.videointelligence.v1.VideoSegment segment = 6;`

**Returns**

**Type**

**Description**

`[VideoSegmentOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.14.0/com.google.cloud.videointelligence.v1.VideoSegmentOrBuilder)`

### getStartTime()

```
public abstract Timestamp getStartTime()
```

Time when the request was received.

`.google.protobuf.Timestamp start_time = 3;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The startTime.

### getStartTimeOrBuilder()

```
public abstract TimestampOrBuilder getStartTimeOrBuilder()
```

Time when the request was received.

`.google.protobuf.Timestamp start_time = 3;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Time of the most recent update.

`.google.protobuf.Timestamp update_time = 4;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

Time of the most recent update.

`.google.protobuf.Timestamp update_time = 4;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasSegment()

```
public abstract boolean hasSegment()
```

Specifies which segment is being tracked if the request contains more than one segment.

`.google.cloud.videointelligence.v1.VideoSegment segment = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the segment field is set.

### hasStartTime()

```
public abstract boolean hasStartTime()
```

Time when the request was received.

`.google.protobuf.Timestamp start_time = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the startTime field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

Time of the most recent update.

`.google.protobuf.Timestamp update_time = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
