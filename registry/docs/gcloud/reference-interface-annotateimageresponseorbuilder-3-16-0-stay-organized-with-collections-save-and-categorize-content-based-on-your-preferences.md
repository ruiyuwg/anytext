-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface AnnotateImageResponseOrBuilder (3.16.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

```
public interface AnnotateImageResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCropHintsAnnotation()

```
public abstract CropHintsAnnotation getCropHintsAnnotation()
```

If present, crop hints have completed successfully.

`.google.cloud.vision.v1p1beta1.CropHintsAnnotation crop_hints_annotation = 11;`

**Returns**

**Type**

**Description**

`[CropHintsAnnotation](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.CropHintsAnnotation)`

The cropHintsAnnotation.

### getCropHintsAnnotationOrBuilder()

```
public abstract CropHintsAnnotationOrBuilder getCropHintsAnnotationOrBuilder()
```

If present, crop hints have completed successfully.

`.google.cloud.vision.v1p1beta1.CropHintsAnnotation crop_hints_annotation = 11;`

**Returns**

**Type**

**Description**

`[CropHintsAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.CropHintsAnnotationOrBuilder)`

### getError()

```
public abstract Status getError()
```

If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.

`.google.rpc.Status error = 9;`

**Returns**

**Type**

**Description**

`com.google.rpc.Status`

The error.

### getErrorOrBuilder()

```
public abstract StatusOrBuilder getErrorOrBuilder()
```

If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.

`.google.rpc.Status error = 9;`

**Returns**

**Type**

**Description**

`com.google.rpc.StatusOrBuilder`

### getFaceAnnotations(int index)

```
public abstract FaceAnnotation getFaceAnnotations(int index)
```

If present, face detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.FaceAnnotation face_annotations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[FaceAnnotation](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.FaceAnnotation)`

### getFaceAnnotationsCount()

```
public abstract int getFaceAnnotationsCount()
```

If present, face detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.FaceAnnotation face_annotations = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getFaceAnnotationsList()

```
public abstract List<FaceAnnotation> getFaceAnnotationsList()
```

If present, face detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.FaceAnnotation face_annotations = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[FaceAnnotation](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.FaceAnnotation)>`

### getFaceAnnotationsOrBuilder(int index)

```
public abstract FaceAnnotationOrBuilder getFaceAnnotationsOrBuilder(int index)
```

If present, face detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.FaceAnnotation face_annotations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[FaceAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.FaceAnnotationOrBuilder)`

### getFaceAnnotationsOrBuilderList()

```
public abstract List<? extends FaceAnnotationOrBuilder> getFaceAnnotationsOrBuilderList()
```

If present, face detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.FaceAnnotation face_annotations = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p1beta1.FaceAnnotationOrBuilder>`

### getFullTextAnnotation()

```
public abstract TextAnnotation getFullTextAnnotation()
```

If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.

`.google.cloud.vision.v1p1beta1.TextAnnotation full_text_annotation = 12;`

**Returns**

**Type**

**Description**

`[TextAnnotation](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.TextAnnotation)`

The fullTextAnnotation.

### getFullTextAnnotationOrBuilder()

```
public abstract TextAnnotationOrBuilder getFullTextAnnotationOrBuilder()
```

If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.

`.google.cloud.vision.v1p1beta1.TextAnnotation full_text_annotation = 12;`

**Returns**

**Type**

**Description**

`[TextAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.TextAnnotationOrBuilder)`

### getImagePropertiesAnnotation()

```
public abstract ImageProperties getImagePropertiesAnnotation()
```

If present, image properties were extracted successfully.

`.google.cloud.vision.v1p1beta1.ImageProperties image_properties_annotation = 8;`

**Returns**

**Type**

**Description**

`[ImageProperties](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.ImageProperties)`

The imagePropertiesAnnotation.

### getImagePropertiesAnnotationOrBuilder()

```
public abstract ImagePropertiesOrBuilder getImagePropertiesAnnotationOrBuilder()
```

If present, image properties were extracted successfully.

`.google.cloud.vision.v1p1beta1.ImageProperties image_properties_annotation = 8;`

**Returns**

**Type**

**Description**

`[ImagePropertiesOrBuilder](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.ImagePropertiesOrBuilder)`

### getLabelAnnotations(int index)

```
public abstract EntityAnnotation getLabelAnnotations(int index)
```

If present, label detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation label_annotations = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EntityAnnotation](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.EntityAnnotation)`

### getLabelAnnotationsCount()

```
public abstract int getLabelAnnotationsCount()
```

If present, label detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation label_annotations = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelAnnotationsList()

```
public abstract List<EntityAnnotation> getLabelAnnotationsList()
```

If present, label detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation label_annotations = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[EntityAnnotation](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.EntityAnnotation)>`

### getLabelAnnotationsOrBuilder(int index)

```
public abstract EntityAnnotationOrBuilder getLabelAnnotationsOrBuilder(int index)
```

If present, label detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation label_annotations = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EntityAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.EntityAnnotationOrBuilder)`

### getLabelAnnotationsOrBuilderList()

```
public abstract List<? extends EntityAnnotationOrBuilder> getLabelAnnotationsOrBuilderList()
```

If present, label detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation label_annotations = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p1beta1.EntityAnnotationOrBuilder>`

### getLandmarkAnnotations(int index)

```
public abstract EntityAnnotation getLandmarkAnnotations(int index)
```

If present, landmark detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation landmark_annotations = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EntityAnnotation](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.EntityAnnotation)`

### getLandmarkAnnotationsCount()

```
public abstract int getLandmarkAnnotationsCount()
```

If present, landmark detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation landmark_annotations = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLandmarkAnnotationsList()

```
public abstract List<EntityAnnotation> getLandmarkAnnotationsList()
```

If present, landmark detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation landmark_annotations = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[EntityAnnotation](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.EntityAnnotation)>`

### getLandmarkAnnotationsOrBuilder(int index)

```
public abstract EntityAnnotationOrBuilder getLandmarkAnnotationsOrBuilder(int index)
```

If present, landmark detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation landmark_annotations = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EntityAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.EntityAnnotationOrBuilder)`

### getLandmarkAnnotationsOrBuilderList()

```
public abstract List<? extends EntityAnnotationOrBuilder> getLandmarkAnnotationsOrBuilderList()
```

If present, landmark detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation landmark_annotations = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p1beta1.EntityAnnotationOrBuilder>`

### getLogoAnnotations(int index)

```
public abstract EntityAnnotation getLogoAnnotations(int index)
```

If present, logo detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation logo_annotations = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EntityAnnotation](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.EntityAnnotation)`

### getLogoAnnotationsCount()

```
public abstract int getLogoAnnotationsCount()
```

If present, logo detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation logo_annotations = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLogoAnnotationsList()

```
public abstract List<EntityAnnotation> getLogoAnnotationsList()
```

If present, logo detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation logo_annotations = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[EntityAnnotation](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.EntityAnnotation)>`

### getLogoAnnotationsOrBuilder(int index)

```
public abstract EntityAnnotationOrBuilder getLogoAnnotationsOrBuilder(int index)
```

If present, logo detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation logo_annotations = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EntityAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.EntityAnnotationOrBuilder)`

### getLogoAnnotationsOrBuilderList()

```
public abstract List<? extends EntityAnnotationOrBuilder> getLogoAnnotationsOrBuilderList()
```

If present, logo detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation logo_annotations = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p1beta1.EntityAnnotationOrBuilder>`

### getSafeSearchAnnotation()

```
public abstract SafeSearchAnnotation getSafeSearchAnnotation()
```

If present, safe-search annotation has completed successfully.

`.google.cloud.vision.v1p1beta1.SafeSearchAnnotation safe_search_annotation = 6;`

**Returns**

**Type**

**Description**

`[SafeSearchAnnotation](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.SafeSearchAnnotation)`

The safeSearchAnnotation.

### getSafeSearchAnnotationOrBuilder()

```
public abstract SafeSearchAnnotationOrBuilder getSafeSearchAnnotationOrBuilder()
```

If present, safe-search annotation has completed successfully.

`.google.cloud.vision.v1p1beta1.SafeSearchAnnotation safe_search_annotation = 6;`

**Returns**

**Type**

**Description**

`[SafeSearchAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.SafeSearchAnnotationOrBuilder)`

### getTextAnnotations(int index)

```
public abstract EntityAnnotation getTextAnnotations(int index)
```

If present, text (OCR) detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation text_annotations = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EntityAnnotation](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.EntityAnnotation)`

### getTextAnnotationsCount()

```
public abstract int getTextAnnotationsCount()
```

If present, text (OCR) detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation text_annotations = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getTextAnnotationsList()

```
public abstract List<EntityAnnotation> getTextAnnotationsList()
```

If present, text (OCR) detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation text_annotations = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[EntityAnnotation](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.EntityAnnotation)>`

### getTextAnnotationsOrBuilder(int index)

```
public abstract EntityAnnotationOrBuilder getTextAnnotationsOrBuilder(int index)
```

If present, text (OCR) detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation text_annotations = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EntityAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.EntityAnnotationOrBuilder)`

### getTextAnnotationsOrBuilderList()

```
public abstract List<? extends EntityAnnotationOrBuilder> getTextAnnotationsOrBuilderList()
```

If present, text (OCR) detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation text_annotations = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p1beta1.EntityAnnotationOrBuilder>`

### getWebDetection()

```
public abstract WebDetection getWebDetection()
```

If present, web detection has completed successfully.

`.google.cloud.vision.v1p1beta1.WebDetection web_detection = 13;`

**Returns**

**Type**

**Description**

`[WebDetection](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.WebDetection)`

The webDetection.

### getWebDetectionOrBuilder()

```
public abstract WebDetectionOrBuilder getWebDetectionOrBuilder()
```

If present, web detection has completed successfully.

`.google.cloud.vision.v1p1beta1.WebDetection web_detection = 13;`

**Returns**

**Type**

**Description**

`[WebDetectionOrBuilder](/java/docs/reference/google-cloud-vision/3.16.0/com.google.cloud.vision.v1p1beta1.WebDetectionOrBuilder)`

### hasCropHintsAnnotation()

```
public abstract boolean hasCropHintsAnnotation()
```

If present, crop hints have completed successfully.

`.google.cloud.vision.v1p1beta1.CropHintsAnnotation crop_hints_annotation = 11;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the cropHintsAnnotation field is set.

### hasError()

```
public abstract boolean hasError()
```

If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.

`.google.rpc.Status error = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the error field is set.

### hasFullTextAnnotation()

```
public abstract boolean hasFullTextAnnotation()
```

If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.

`.google.cloud.vision.v1p1beta1.TextAnnotation full_text_annotation = 12;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the fullTextAnnotation field is set.

### hasImagePropertiesAnnotation()

```
public abstract boolean hasImagePropertiesAnnotation()
```

If present, image properties were extracted successfully.

`.google.cloud.vision.v1p1beta1.ImageProperties image_properties_annotation = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the imagePropertiesAnnotation field is set.

### hasSafeSearchAnnotation()

```
public abstract boolean hasSafeSearchAnnotation()
```

If present, safe-search annotation has completed successfully.

`.google.cloud.vision.v1p1beta1.SafeSearchAnnotation safe_search_annotation = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the safeSearchAnnotation field is set.

### hasWebDetection()

```
public abstract boolean hasWebDetection()
```

If present, web detection has completed successfully.

`.google.cloud.vision.v1p1beta1.WebDetection web_detection = 13;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the webDetection field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
