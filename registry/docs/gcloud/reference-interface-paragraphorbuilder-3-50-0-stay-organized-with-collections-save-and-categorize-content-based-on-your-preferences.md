-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ParagraphOrBuilder (3.50.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

```
public interface ParagraphOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBoundingBox()

```
public abstract BoundingPoly getBoundingBox()
```

The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example:

-   when the text is horizontal it might look like: 0----1 | | 3----2
-   when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertice order will still be (0, 1, 2, 3).

`.google.cloud.vision.v1p2beta1.BoundingPoly bounding_box = 2;`

**Returns**

**Type**

**Description**

`[BoundingPoly](/java/docs/reference/google-cloud-vision/3.50.0/com.google.cloud.vision.v1p2beta1.BoundingPoly)`

The boundingBox.

### getBoundingBoxOrBuilder()

```
public abstract BoundingPolyOrBuilder getBoundingBoxOrBuilder()
```

The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example:

-   when the text is horizontal it might look like: 0----1 | | 3----2
-   when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertice order will still be (0, 1, 2, 3).

`.google.cloud.vision.v1p2beta1.BoundingPoly bounding_box = 2;`

**Returns**

**Type**

**Description**

`[BoundingPolyOrBuilder](/java/docs/reference/google-cloud-vision/3.50.0/com.google.cloud.vision.v1p2beta1.BoundingPolyOrBuilder)`

### getConfidence()

```
public abstract float getConfidence()
```

Confidence of the OCR results for the paragraph. Range \[0, 1\].

`float confidence = 4;`

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The confidence.

### getProperty()

```
public abstract TextAnnotation.TextProperty getProperty()
```

Additional information detected for the paragraph.

`.google.cloud.vision.v1p2beta1.TextAnnotation.TextProperty property = 1;`

**Returns**

**Type**

**Description**

`[TextAnnotation.TextProperty](/java/docs/reference/google-cloud-vision/3.50.0/com.google.cloud.vision.v1p2beta1.TextAnnotation.TextProperty)`

The property.

### getPropertyOrBuilder()

```
public abstract TextAnnotation.TextPropertyOrBuilder getPropertyOrBuilder()
```

Additional information detected for the paragraph.

`.google.cloud.vision.v1p2beta1.TextAnnotation.TextProperty property = 1;`

**Returns**

**Type**

**Description**

`[TextAnnotation.TextPropertyOrBuilder](/java/docs/reference/google-cloud-vision/3.50.0/com.google.cloud.vision.v1p2beta1.TextAnnotation.TextPropertyOrBuilder)`

### getWords(int index)

```
public abstract Word getWords(int index)
```

List of words in this paragraph.

`repeated .google.cloud.vision.v1p2beta1.Word words = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Word](/java/docs/reference/google-cloud-vision/3.50.0/com.google.cloud.vision.v1p2beta1.Word)`

### getWordsCount()

```
public abstract int getWordsCount()
```

List of words in this paragraph.

`repeated .google.cloud.vision.v1p2beta1.Word words = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getWordsList()

```
public abstract List<Word> getWordsList()
```

List of words in this paragraph.

`repeated .google.cloud.vision.v1p2beta1.Word words = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Word](/java/docs/reference/google-cloud-vision/3.50.0/com.google.cloud.vision.v1p2beta1.Word)>`

### getWordsOrBuilder(int index)

```
public abstract WordOrBuilder getWordsOrBuilder(int index)
```

List of words in this paragraph.

`repeated .google.cloud.vision.v1p2beta1.Word words = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[WordOrBuilder](/java/docs/reference/google-cloud-vision/3.50.0/com.google.cloud.vision.v1p2beta1.WordOrBuilder)`

### getWordsOrBuilderList()

```
public abstract List<? extends WordOrBuilder> getWordsOrBuilderList()
```

List of words in this paragraph.

`repeated .google.cloud.vision.v1p2beta1.Word words = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p2beta1.WordOrBuilder>`

### hasBoundingBox()

```
public abstract boolean hasBoundingBox()
```

The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example:

-   when the text is horizontal it might look like: 0----1 | | 3----2
-   when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertice order will still be (0, 1, 2, 3).

`.google.cloud.vision.v1p2beta1.BoundingPoly bounding_box = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the boundingBox field is set.

### hasProperty()

```
public abstract boolean hasProperty()
```

Additional information detected for the paragraph.

`.google.cloud.vision.v1p2beta1.TextAnnotation.TextProperty property = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the property field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
