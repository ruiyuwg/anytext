-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface TextFrameOrBuilder (2.32.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.13 2.1.0 2.0.27

```
public interface TextFrameOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getRotatedBoundingBox()

```
public abstract NormalizedBoundingPoly getRotatedBoundingBox()
```

Bounding polygon of the detected text for this frame.

`.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly rotated_bounding_box = 1;`

**Returns**

**Type**

**Description**

`[NormalizedBoundingPoly](/java/docs/reference/google-cloud-video-intelligence/2.32.0/com.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly)`

The rotatedBoundingBox.

### getRotatedBoundingBoxOrBuilder()

```
public abstract NormalizedBoundingPolyOrBuilder getRotatedBoundingBoxOrBuilder()
```

Bounding polygon of the detected text for this frame.

`.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly rotated_bounding_box = 1;`

**Returns**

**Type**

**Description**

`[NormalizedBoundingPolyOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.32.0/com.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPolyOrBuilder)`

### getTimeOffset()

```
public abstract Duration getTimeOffset()
```

Timestamp of this frame.

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

Timestamp of this frame.

`.google.protobuf.Duration time_offset = 2;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### hasRotatedBoundingBox()

```
public abstract boolean hasRotatedBoundingBox()
```

Bounding polygon of the detected text for this frame.

`.google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly rotated_bounding_box = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the rotatedBoundingBox field is set.

### hasTimeOffset()

```
public abstract boolean hasTimeOffset()
```

Timestamp of this frame.

`.google.protobuf.Duration time_offset = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timeOffset field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
