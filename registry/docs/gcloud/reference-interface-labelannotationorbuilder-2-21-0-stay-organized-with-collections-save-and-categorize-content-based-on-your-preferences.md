-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface LabelAnnotationOrBuilder (2.21.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.13 2.1.0 2.0.27

```
public interface LabelAnnotationOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCategoryEntities(int index)

```
public abstract Entity getCategoryEntities(int index)
```

Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.

`repeated .google.cloud.videointelligence.v1p3beta1.Entity category_entities = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Entity](/java/docs/reference/google-cloud-video-intelligence/2.21.0/com.google.cloud.videointelligence.v1p3beta1.Entity)`

### getCategoryEntitiesCount()

```
public abstract int getCategoryEntitiesCount()
```

Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.

`repeated .google.cloud.videointelligence.v1p3beta1.Entity category_entities = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getCategoryEntitiesList()

```
public abstract List<Entity> getCategoryEntitiesList()
```

Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.

`repeated .google.cloud.videointelligence.v1p3beta1.Entity category_entities = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Entity](/java/docs/reference/google-cloud-video-intelligence/2.21.0/com.google.cloud.videointelligence.v1p3beta1.Entity)>`

### getCategoryEntitiesOrBuilder(int index)

```
public abstract EntityOrBuilder getCategoryEntitiesOrBuilder(int index)
```

Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.

`repeated .google.cloud.videointelligence.v1p3beta1.Entity category_entities = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EntityOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.21.0/com.google.cloud.videointelligence.v1p3beta1.EntityOrBuilder)`

### getCategoryEntitiesOrBuilderList()

```
public abstract List<? extends EntityOrBuilder> getCategoryEntitiesOrBuilderList()
```

Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.

`repeated .google.cloud.videointelligence.v1p3beta1.Entity category_entities = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1p3beta1.EntityOrBuilder>`

### getEntity()

```
public abstract Entity getEntity()
```

Detected entity.

`.google.cloud.videointelligence.v1p3beta1.Entity entity = 1;`

**Returns**

**Type**

**Description**

`[Entity](/java/docs/reference/google-cloud-video-intelligence/2.21.0/com.google.cloud.videointelligence.v1p3beta1.Entity)`

The entity.

### getEntityOrBuilder()

```
public abstract EntityOrBuilder getEntityOrBuilder()
```

Detected entity.

`.google.cloud.videointelligence.v1p3beta1.Entity entity = 1;`

**Returns**

**Type**

**Description**

`[EntityOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.21.0/com.google.cloud.videointelligence.v1p3beta1.EntityOrBuilder)`

### getFrames(int index)

```
public abstract LabelFrame getFrames(int index)
```

All video frames where a label was detected.

`repeated .google.cloud.videointelligence.v1p3beta1.LabelFrame frames = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[LabelFrame](/java/docs/reference/google-cloud-video-intelligence/2.21.0/com.google.cloud.videointelligence.v1p3beta1.LabelFrame)`

### getFramesCount()

```
public abstract int getFramesCount()
```

All video frames where a label was detected.

`repeated .google.cloud.videointelligence.v1p3beta1.LabelFrame frames = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getFramesList()

```
public abstract List<LabelFrame> getFramesList()
```

All video frames where a label was detected.

`repeated .google.cloud.videointelligence.v1p3beta1.LabelFrame frames = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[LabelFrame](/java/docs/reference/google-cloud-video-intelligence/2.21.0/com.google.cloud.videointelligence.v1p3beta1.LabelFrame)>`

### getFramesOrBuilder(int index)

```
public abstract LabelFrameOrBuilder getFramesOrBuilder(int index)
```

All video frames where a label was detected.

`repeated .google.cloud.videointelligence.v1p3beta1.LabelFrame frames = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[LabelFrameOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.21.0/com.google.cloud.videointelligence.v1p3beta1.LabelFrameOrBuilder)`

### getFramesOrBuilderList()

```
public abstract List<? extends LabelFrameOrBuilder> getFramesOrBuilderList()
```

All video frames where a label was detected.

`repeated .google.cloud.videointelligence.v1p3beta1.LabelFrame frames = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1p3beta1.LabelFrameOrBuilder>`

### getSegments(int index)

```
public abstract LabelSegment getSegments(int index)
```

All video segments where a label was detected.

`repeated .google.cloud.videointelligence.v1p3beta1.LabelSegment segments = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[LabelSegment](/java/docs/reference/google-cloud-video-intelligence/2.21.0/com.google.cloud.videointelligence.v1p3beta1.LabelSegment)`

### getSegmentsCount()

```
public abstract int getSegmentsCount()
```

All video segments where a label was detected.

`repeated .google.cloud.videointelligence.v1p3beta1.LabelSegment segments = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getSegmentsList()

```
public abstract List<LabelSegment> getSegmentsList()
```

All video segments where a label was detected.

`repeated .google.cloud.videointelligence.v1p3beta1.LabelSegment segments = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[LabelSegment](/java/docs/reference/google-cloud-video-intelligence/2.21.0/com.google.cloud.videointelligence.v1p3beta1.LabelSegment)>`

### getSegmentsOrBuilder(int index)

```
public abstract LabelSegmentOrBuilder getSegmentsOrBuilder(int index)
```

All video segments where a label was detected.

`repeated .google.cloud.videointelligence.v1p3beta1.LabelSegment segments = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[LabelSegmentOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.21.0/com.google.cloud.videointelligence.v1p3beta1.LabelSegmentOrBuilder)`

### getSegmentsOrBuilderList()

```
public abstract List<? extends LabelSegmentOrBuilder> getSegmentsOrBuilderList()
```

All video segments where a label was detected.

`repeated .google.cloud.videointelligence.v1p3beta1.LabelSegment segments = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1p3beta1.LabelSegmentOrBuilder>`

### hasEntity()

```
public abstract boolean hasEntity()
```

Detected entity.

`.google.cloud.videointelligence.v1p3beta1.Entity entity = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the entity field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
