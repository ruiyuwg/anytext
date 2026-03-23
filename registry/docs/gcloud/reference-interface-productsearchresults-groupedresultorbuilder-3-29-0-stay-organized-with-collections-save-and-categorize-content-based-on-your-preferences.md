-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ProductSearchResults.GroupedResultOrBuilder (3.29.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

```
public static interface ProductSearchResults.GroupedResultOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBoundingPoly()

```
public abstract BoundingPoly getBoundingPoly()
```

The bounding polygon around the product detected in the query image.

`.google.cloud.vision.v1.BoundingPoly bounding_poly = 1;`

**Returns**

**Type**

**Description**

`[BoundingPoly](/java/docs/reference/google-cloud-vision/3.29.0/com.google.cloud.vision.v1.BoundingPoly)`

The boundingPoly.

### getBoundingPolyOrBuilder()

```
public abstract BoundingPolyOrBuilder getBoundingPolyOrBuilder()
```

The bounding polygon around the product detected in the query image.

`.google.cloud.vision.v1.BoundingPoly bounding_poly = 1;`

**Returns**

**Type**

**Description**

`[BoundingPolyOrBuilder](/java/docs/reference/google-cloud-vision/3.29.0/com.google.cloud.vision.v1.BoundingPolyOrBuilder)`

### getObjectAnnotations(int index)

```
public abstract ProductSearchResults.ObjectAnnotation getObjectAnnotations(int index)
```

List of generic predictions for the object in the bounding box.

`repeated .google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation object_annotations = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ProductSearchResults.ObjectAnnotation](/java/docs/reference/google-cloud-vision/3.29.0/com.google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation)`

### getObjectAnnotationsCount()

```
public abstract int getObjectAnnotationsCount()
```

List of generic predictions for the object in the bounding box.

`repeated .google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation object_annotations = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getObjectAnnotationsList()

```
public abstract List<ProductSearchResults.ObjectAnnotation> getObjectAnnotationsList()
```

List of generic predictions for the object in the bounding box.

`repeated .google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation object_annotations = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ObjectAnnotation](/java/docs/reference/google-cloud-vision/3.29.0/com.google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation)>`

### getObjectAnnotationsOrBuilder(int index)

```
public abstract ProductSearchResults.ObjectAnnotationOrBuilder getObjectAnnotationsOrBuilder(int index)
```

List of generic predictions for the object in the bounding box.

`repeated .google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation object_annotations = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ProductSearchResults.ObjectAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.29.0/com.google.cloud.vision.v1.ProductSearchResults.ObjectAnnotationOrBuilder)`

### getObjectAnnotationsOrBuilderList()

```
public abstract List<? extends ProductSearchResults.ObjectAnnotationOrBuilder> getObjectAnnotationsOrBuilderList()
```

List of generic predictions for the object in the bounding box.

`repeated .google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation object_annotations = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1.ProductSearchResults.ObjectAnnotationOrBuilder>`

### getResults(int index)

```
public abstract ProductSearchResults.Result getResults(int index)
```

List of results, one for each product match.

`repeated .google.cloud.vision.v1.ProductSearchResults.Result results = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ProductSearchResults.Result](/java/docs/reference/google-cloud-vision/3.29.0/com.google.cloud.vision.v1.ProductSearchResults.Result)`

### getResultsCount()

```
public abstract int getResultsCount()
```

List of results, one for each product match.

`repeated .google.cloud.vision.v1.ProductSearchResults.Result results = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getResultsList()

```
public abstract List<ProductSearchResults.Result> getResultsList()
```

List of results, one for each product match.

`repeated .google.cloud.vision.v1.ProductSearchResults.Result results = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Result](/java/docs/reference/google-cloud-vision/3.29.0/com.google.cloud.vision.v1.ProductSearchResults.Result)>`

### getResultsOrBuilder(int index)

```
public abstract ProductSearchResults.ResultOrBuilder getResultsOrBuilder(int index)
```

List of results, one for each product match.

`repeated .google.cloud.vision.v1.ProductSearchResults.Result results = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ProductSearchResults.ResultOrBuilder](/java/docs/reference/google-cloud-vision/3.29.0/com.google.cloud.vision.v1.ProductSearchResults.ResultOrBuilder)`

### getResultsOrBuilderList()

```
public abstract List<? extends ProductSearchResults.ResultOrBuilder> getResultsOrBuilderList()
```

List of results, one for each product match.

`repeated .google.cloud.vision.v1.ProductSearchResults.Result results = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1.ProductSearchResults.ResultOrBuilder>`

### hasBoundingPoly()

```
public abstract boolean hasBoundingPoly()
```

The bounding polygon around the product detected in the query image.

`.google.cloud.vision.v1.BoundingPoly bounding_poly = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the boundingPoly field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
