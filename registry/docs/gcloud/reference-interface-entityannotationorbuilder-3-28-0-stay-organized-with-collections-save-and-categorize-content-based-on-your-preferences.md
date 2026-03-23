-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface EntityAnnotationOrBuilder (3.28.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

```
public interface EntityAnnotationOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBoundingPoly()

```
public abstract BoundingPoly getBoundingPoly()
```

Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.

`.google.cloud.vision.v1p3beta1.BoundingPoly bounding_poly = 7;`

**Returns**

**Type**

**Description**

`[BoundingPoly](/java/docs/reference/google-cloud-vision/3.28.0/com.google.cloud.vision.v1p3beta1.BoundingPoly)`

The boundingPoly.

### getBoundingPolyOrBuilder()

```
public abstract BoundingPolyOrBuilder getBoundingPolyOrBuilder()
```

Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.

`.google.cloud.vision.v1p3beta1.BoundingPoly bounding_poly = 7;`

**Returns**

**Type**

**Description**

`[BoundingPolyOrBuilder](/java/docs/reference/google-cloud-vision/3.28.0/com.google.cloud.vision.v1p3beta1.BoundingPolyOrBuilder)`

### getConfidence()

```
public abstract float getConfidence()
```

**Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range \[0, 1\].

`float confidence = 5;`

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The confidence.

### getDescription()

```
public abstract String getDescription()
```

Entity textual description, expressed in its `locale` language.

`string description = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public abstract ByteString getDescriptionBytes()
```

Entity textual description, expressed in its `locale` language.

`string description = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

### getLocale()

```
public abstract String getLocale()
```

The language code for the locale in which the entity textual `description` is expressed.

`string locale = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The locale.

### getLocaleBytes()

```
public abstract ByteString getLocaleBytes()
```

The language code for the locale in which the entity textual `description` is expressed.

`string locale = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for locale.

### getLocations(int index)

```
public abstract LocationInfo getLocations(int index)
```

The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.

`repeated .google.cloud.vision.v1p3beta1.LocationInfo locations = 8;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[LocationInfo](/java/docs/reference/google-cloud-vision/3.28.0/com.google.cloud.vision.v1p3beta1.LocationInfo)`

### getLocationsCount()

```
public abstract int getLocationsCount()
```

The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.

`repeated .google.cloud.vision.v1p3beta1.LocationInfo locations = 8;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLocationsList()

```
public abstract List<LocationInfo> getLocationsList()
```

The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.

`repeated .google.cloud.vision.v1p3beta1.LocationInfo locations = 8;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[LocationInfo](/java/docs/reference/google-cloud-vision/3.28.0/com.google.cloud.vision.v1p3beta1.LocationInfo)>`

### getLocationsOrBuilder(int index)

```
public abstract LocationInfoOrBuilder getLocationsOrBuilder(int index)
```

The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.

`repeated .google.cloud.vision.v1p3beta1.LocationInfo locations = 8;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[LocationInfoOrBuilder](/java/docs/reference/google-cloud-vision/3.28.0/com.google.cloud.vision.v1p3beta1.LocationInfoOrBuilder)`

### getLocationsOrBuilderList()

```
public abstract List<? extends LocationInfoOrBuilder> getLocationsOrBuilderList()
```

The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.

`repeated .google.cloud.vision.v1p3beta1.LocationInfo locations = 8;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p3beta1.LocationInfoOrBuilder>`

### getMid()

```
public abstract String getMid()
```

Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).

`string mid = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The mid.

### getMidBytes()

```
public abstract ByteString getMidBytes()
```

Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).

`string mid = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for mid.

### getProperties(int index)

```
public abstract Property getProperties(int index)
```

Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.

`repeated .google.cloud.vision.v1p3beta1.Property properties = 9;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Property](/java/docs/reference/google-cloud-vision/3.28.0/com.google.cloud.vision.v1p3beta1.Property)`

### getPropertiesCount()

```
public abstract int getPropertiesCount()
```

Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.

`repeated .google.cloud.vision.v1p3beta1.Property properties = 9;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getPropertiesList()

```
public abstract List<Property> getPropertiesList()
```

Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.

`repeated .google.cloud.vision.v1p3beta1.Property properties = 9;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Property](/java/docs/reference/google-cloud-vision/3.28.0/com.google.cloud.vision.v1p3beta1.Property)>`

### getPropertiesOrBuilder(int index)

```
public abstract PropertyOrBuilder getPropertiesOrBuilder(int index)
```

Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.

`repeated .google.cloud.vision.v1p3beta1.Property properties = 9;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[PropertyOrBuilder](/java/docs/reference/google-cloud-vision/3.28.0/com.google.cloud.vision.v1p3beta1.PropertyOrBuilder)`

### getPropertiesOrBuilderList()

```
public abstract List<? extends PropertyOrBuilder> getPropertiesOrBuilderList()
```

Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.

`repeated .google.cloud.vision.v1p3beta1.Property properties = 9;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p3beta1.PropertyOrBuilder>`

### getScore()

```
public abstract float getScore()
```

Overall score of the result. Range \[0, 1\].

`float score = 4;`

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The score.

### getTopicality()

```
public abstract float getTopicality()
```

The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range \[0, 1\].

`float topicality = 6;`

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The topicality.

### hasBoundingPoly()

```
public abstract boolean hasBoundingPoly()
```

Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.

`.google.cloud.vision.v1p3beta1.BoundingPoly bounding_poly = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the boundingPoly field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
