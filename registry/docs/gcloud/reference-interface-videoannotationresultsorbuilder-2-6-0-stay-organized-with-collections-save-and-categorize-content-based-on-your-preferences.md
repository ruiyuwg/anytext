-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface VideoAnnotationResultsOrBuilder (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.13 2.1.0 2.0.27

```
public interface VideoAnnotationResultsOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getError()

```
public abstract Status getError()
```

If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.

`.google.rpc.Status error = 9;`

**Returns**

**Type**

**Description**

com.google.rpc.Status

The error.

### getErrorOrBuilder()

```
public abstract StatusOrBuilder getErrorOrBuilder()
```

If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.

`.google.rpc.Status error = 9;`

**Returns**

**Type**

**Description**

com.google.rpc.StatusOrBuilder

### getExplicitAnnotation()

```
public abstract ExplicitContentAnnotation getExplicitAnnotation()
```

Explicit content annotation.

`.google.cloud.videointelligence.v1.ExplicitContentAnnotation explicit_annotation = 7;`

**Returns**

**Type**

**Description**

[ExplicitContentAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.ExplicitContentAnnotation)

The explicitAnnotation.

### getExplicitAnnotationOrBuilder()

```
public abstract ExplicitContentAnnotationOrBuilder getExplicitAnnotationOrBuilder()
```

Explicit content annotation.

`.google.cloud.videointelligence.v1.ExplicitContentAnnotation explicit_annotation = 7;`

**Returns**

**Type**

**Description**

[ExplicitContentAnnotationOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.ExplicitContentAnnotationOrBuilder)

### getFaceAnnotations(int index)

```
public abstract FaceAnnotation getFaceAnnotations(int index)
```

Deprecated. Please use `face_detection_annotations` instead.

`repeated .google.cloud.videointelligence.v1.FaceAnnotation face_annotations = 5 [deprecated = true];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[FaceAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.FaceAnnotation)

### getFaceAnnotationsCount()

```
public abstract int getFaceAnnotationsCount()
```

Deprecated. Please use `face_detection_annotations` instead.

`repeated .google.cloud.videointelligence.v1.FaceAnnotation face_annotations = 5 [deprecated = true];`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getFaceAnnotationsList()

```
public abstract List<FaceAnnotation> getFaceAnnotationsList()
```

Deprecated. Please use `face_detection_annotations` instead.

`repeated .google.cloud.videointelligence.v1.FaceAnnotation face_annotations = 5 [deprecated = true];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[FaceAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.FaceAnnotation)\>

### getFaceAnnotationsOrBuilder(int index)

```
public abstract FaceAnnotationOrBuilder getFaceAnnotationsOrBuilder(int index)
```

Deprecated. Please use `face_detection_annotations` instead.

`repeated .google.cloud.videointelligence.v1.FaceAnnotation face_annotations = 5 [deprecated = true];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[FaceAnnotationOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.FaceAnnotationOrBuilder)

### getFaceAnnotationsOrBuilderList()

```
public abstract List<? extends FaceAnnotationOrBuilder> getFaceAnnotationsOrBuilderList()
```

Deprecated. Please use `face_detection_annotations` instead.

`repeated .google.cloud.videointelligence.v1.FaceAnnotation face_annotations = 5 [deprecated = true];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1.FaceAnnotationOrBuilder\>

### getFaceDetectionAnnotations(int index)

```
public abstract FaceDetectionAnnotation getFaceDetectionAnnotations(int index)
```

Face detection annotations.

`repeated .google.cloud.videointelligence.v1.FaceDetectionAnnotation face_detection_annotations = 13;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[FaceDetectionAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.FaceDetectionAnnotation)

### getFaceDetectionAnnotationsCount()

```
public abstract int getFaceDetectionAnnotationsCount()
```

Face detection annotations.

`repeated .google.cloud.videointelligence.v1.FaceDetectionAnnotation face_detection_annotations = 13;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getFaceDetectionAnnotationsList()

```
public abstract List<FaceDetectionAnnotation> getFaceDetectionAnnotationsList()
```

Face detection annotations.

`repeated .google.cloud.videointelligence.v1.FaceDetectionAnnotation face_detection_annotations = 13;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[FaceDetectionAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.FaceDetectionAnnotation)\>

### getFaceDetectionAnnotationsOrBuilder(int index)

```
public abstract FaceDetectionAnnotationOrBuilder getFaceDetectionAnnotationsOrBuilder(int index)
```

Face detection annotations.

`repeated .google.cloud.videointelligence.v1.FaceDetectionAnnotation face_detection_annotations = 13;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[FaceDetectionAnnotationOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.FaceDetectionAnnotationOrBuilder)

### getFaceDetectionAnnotationsOrBuilderList()

```
public abstract List<? extends FaceDetectionAnnotationOrBuilder> getFaceDetectionAnnotationsOrBuilderList()
```

Face detection annotations.

`repeated .google.cloud.videointelligence.v1.FaceDetectionAnnotation face_detection_annotations = 13;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1.FaceDetectionAnnotationOrBuilder\>

### getFrameLabelAnnotations(int index)

```
public abstract LabelAnnotation getFrameLabelAnnotations(int index)
```

Label annotations on frame level. There is exactly one element for each unique label.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation frame_label_annotations = 4;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[LabelAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LabelAnnotation)

### getFrameLabelAnnotationsCount()

```
public abstract int getFrameLabelAnnotationsCount()
```

Label annotations on frame level. There is exactly one element for each unique label.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation frame_label_annotations = 4;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getFrameLabelAnnotationsList()

```
public abstract List<LabelAnnotation> getFrameLabelAnnotationsList()
```

Label annotations on frame level. There is exactly one element for each unique label.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation frame_label_annotations = 4;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[LabelAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LabelAnnotation)\>

### getFrameLabelAnnotationsOrBuilder(int index)

```
public abstract LabelAnnotationOrBuilder getFrameLabelAnnotationsOrBuilder(int index)
```

Label annotations on frame level. There is exactly one element for each unique label.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation frame_label_annotations = 4;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[LabelAnnotationOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LabelAnnotationOrBuilder)

### getFrameLabelAnnotationsOrBuilderList()

```
public abstract List<? extends LabelAnnotationOrBuilder> getFrameLabelAnnotationsOrBuilderList()
```

Label annotations on frame level. There is exactly one element for each unique label.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation frame_label_annotations = 4;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1.LabelAnnotationOrBuilder\>

### getInputUri()

```
public abstract String getInputUri()
```

Video file location in [Cloud Storage](https://cloud.google.com/storage/).

`string input_uri = 1;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

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

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for inputUri.

### getLogoRecognitionAnnotations(int index)

```
public abstract LogoRecognitionAnnotation getLogoRecognitionAnnotations(int index)
```

Annotations for list of logos detected, tracked and recognized in video.

`repeated .google.cloud.videointelligence.v1.LogoRecognitionAnnotation logo_recognition_annotations = 19;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[LogoRecognitionAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LogoRecognitionAnnotation)

### getLogoRecognitionAnnotationsCount()

```
public abstract int getLogoRecognitionAnnotationsCount()
```

Annotations for list of logos detected, tracked and recognized in video.

`repeated .google.cloud.videointelligence.v1.LogoRecognitionAnnotation logo_recognition_annotations = 19;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getLogoRecognitionAnnotationsList()

```
public abstract List<LogoRecognitionAnnotation> getLogoRecognitionAnnotationsList()
```

Annotations for list of logos detected, tracked and recognized in video.

`repeated .google.cloud.videointelligence.v1.LogoRecognitionAnnotation logo_recognition_annotations = 19;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[LogoRecognitionAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LogoRecognitionAnnotation)\>

### getLogoRecognitionAnnotationsOrBuilder(int index)

```
public abstract LogoRecognitionAnnotationOrBuilder getLogoRecognitionAnnotationsOrBuilder(int index)
```

Annotations for list of logos detected, tracked and recognized in video.

`repeated .google.cloud.videointelligence.v1.LogoRecognitionAnnotation logo_recognition_annotations = 19;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[LogoRecognitionAnnotationOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LogoRecognitionAnnotationOrBuilder)

### getLogoRecognitionAnnotationsOrBuilderList()

```
public abstract List<? extends LogoRecognitionAnnotationOrBuilder> getLogoRecognitionAnnotationsOrBuilderList()
```

Annotations for list of logos detected, tracked and recognized in video.

`repeated .google.cloud.videointelligence.v1.LogoRecognitionAnnotation logo_recognition_annotations = 19;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1.LogoRecognitionAnnotationOrBuilder\>

### getObjectAnnotations(int index)

```
public abstract ObjectTrackingAnnotation getObjectAnnotations(int index)
```

Annotations for list of objects detected and tracked in video.

`repeated .google.cloud.videointelligence.v1.ObjectTrackingAnnotation object_annotations = 14;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ObjectTrackingAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.ObjectTrackingAnnotation)

### getObjectAnnotationsCount()

```
public abstract int getObjectAnnotationsCount()
```

Annotations for list of objects detected and tracked in video.

`repeated .google.cloud.videointelligence.v1.ObjectTrackingAnnotation object_annotations = 14;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getObjectAnnotationsList()

```
public abstract List<ObjectTrackingAnnotation> getObjectAnnotationsList()
```

Annotations for list of objects detected and tracked in video.

`repeated .google.cloud.videointelligence.v1.ObjectTrackingAnnotation object_annotations = 14;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ObjectTrackingAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.ObjectTrackingAnnotation)\>

### getObjectAnnotationsOrBuilder(int index)

```
public abstract ObjectTrackingAnnotationOrBuilder getObjectAnnotationsOrBuilder(int index)
```

Annotations for list of objects detected and tracked in video.

`repeated .google.cloud.videointelligence.v1.ObjectTrackingAnnotation object_annotations = 14;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ObjectTrackingAnnotationOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.ObjectTrackingAnnotationOrBuilder)

### getObjectAnnotationsOrBuilderList()

```
public abstract List<? extends ObjectTrackingAnnotationOrBuilder> getObjectAnnotationsOrBuilderList()
```

Annotations for list of objects detected and tracked in video.

`repeated .google.cloud.videointelligence.v1.ObjectTrackingAnnotation object_annotations = 14;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1.ObjectTrackingAnnotationOrBuilder\>

### getPersonDetectionAnnotations(int index)

```
public abstract PersonDetectionAnnotation getPersonDetectionAnnotations(int index)
```

Person detection annotations.

`repeated .google.cloud.videointelligence.v1.PersonDetectionAnnotation person_detection_annotations = 20;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[PersonDetectionAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.PersonDetectionAnnotation)

### getPersonDetectionAnnotationsCount()

```
public abstract int getPersonDetectionAnnotationsCount()
```

Person detection annotations.

`repeated .google.cloud.videointelligence.v1.PersonDetectionAnnotation person_detection_annotations = 20;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getPersonDetectionAnnotationsList()

```
public abstract List<PersonDetectionAnnotation> getPersonDetectionAnnotationsList()
```

Person detection annotations.

`repeated .google.cloud.videointelligence.v1.PersonDetectionAnnotation person_detection_annotations = 20;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[PersonDetectionAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.PersonDetectionAnnotation)\>

### getPersonDetectionAnnotationsOrBuilder(int index)

```
public abstract PersonDetectionAnnotationOrBuilder getPersonDetectionAnnotationsOrBuilder(int index)
```

Person detection annotations.

`repeated .google.cloud.videointelligence.v1.PersonDetectionAnnotation person_detection_annotations = 20;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[PersonDetectionAnnotationOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.PersonDetectionAnnotationOrBuilder)

### getPersonDetectionAnnotationsOrBuilderList()

```
public abstract List<? extends PersonDetectionAnnotationOrBuilder> getPersonDetectionAnnotationsOrBuilderList()
```

Person detection annotations.

`repeated .google.cloud.videointelligence.v1.PersonDetectionAnnotation person_detection_annotations = 20;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1.PersonDetectionAnnotationOrBuilder\>

### getSegment()

```
public abstract VideoSegment getSegment()
```

Video segment on which the annotation is run.

`.google.cloud.videointelligence.v1.VideoSegment segment = 10;`

**Returns**

**Type**

**Description**

[VideoSegment](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.VideoSegment)

The segment.

### getSegmentLabelAnnotations(int index)

```
public abstract LabelAnnotation getSegmentLabelAnnotations(int index)
```

Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation segment_label_annotations = 2;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[LabelAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LabelAnnotation)

### getSegmentLabelAnnotationsCount()

```
public abstract int getSegmentLabelAnnotationsCount()
```

Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation segment_label_annotations = 2;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getSegmentLabelAnnotationsList()

```
public abstract List<LabelAnnotation> getSegmentLabelAnnotationsList()
```

Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation segment_label_annotations = 2;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[LabelAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LabelAnnotation)\>

### getSegmentLabelAnnotationsOrBuilder(int index)

```
public abstract LabelAnnotationOrBuilder getSegmentLabelAnnotationsOrBuilder(int index)
```

Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation segment_label_annotations = 2;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[LabelAnnotationOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LabelAnnotationOrBuilder)

### getSegmentLabelAnnotationsOrBuilderList()

```
public abstract List<? extends LabelAnnotationOrBuilder> getSegmentLabelAnnotationsOrBuilderList()
```

Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation segment_label_annotations = 2;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1.LabelAnnotationOrBuilder\>

### getSegmentOrBuilder()

```
public abstract VideoSegmentOrBuilder getSegmentOrBuilder()
```

Video segment on which the annotation is run.

`.google.cloud.videointelligence.v1.VideoSegment segment = 10;`

**Returns**

**Type**

**Description**

[VideoSegmentOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.VideoSegmentOrBuilder)

### getSegmentPresenceLabelAnnotations(int index)

```
public abstract LabelAnnotation getSegmentPresenceLabelAnnotations(int index)
```

Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation segment_presence_label_annotations = 23;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[LabelAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LabelAnnotation)

### getSegmentPresenceLabelAnnotationsCount()

```
public abstract int getSegmentPresenceLabelAnnotationsCount()
```

Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation segment_presence_label_annotations = 23;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getSegmentPresenceLabelAnnotationsList()

```
public abstract List<LabelAnnotation> getSegmentPresenceLabelAnnotationsList()
```

Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation segment_presence_label_annotations = 23;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[LabelAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LabelAnnotation)\>

### getSegmentPresenceLabelAnnotationsOrBuilder(int index)

```
public abstract LabelAnnotationOrBuilder getSegmentPresenceLabelAnnotationsOrBuilder(int index)
```

Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation segment_presence_label_annotations = 23;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[LabelAnnotationOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LabelAnnotationOrBuilder)

### getSegmentPresenceLabelAnnotationsOrBuilderList()

```
public abstract List<? extends LabelAnnotationOrBuilder> getSegmentPresenceLabelAnnotationsOrBuilderList()
```

Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation segment_presence_label_annotations = 23;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1.LabelAnnotationOrBuilder\>

### getShotAnnotations(int index)

```
public abstract VideoSegment getShotAnnotations(int index)
```

Shot annotations. Each shot is represented as a video segment.

`repeated .google.cloud.videointelligence.v1.VideoSegment shot_annotations = 6;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[VideoSegment](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.VideoSegment)

### getShotAnnotationsCount()

```
public abstract int getShotAnnotationsCount()
```

Shot annotations. Each shot is represented as a video segment.

`repeated .google.cloud.videointelligence.v1.VideoSegment shot_annotations = 6;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getShotAnnotationsList()

```
public abstract List<VideoSegment> getShotAnnotationsList()
```

Shot annotations. Each shot is represented as a video segment.

`repeated .google.cloud.videointelligence.v1.VideoSegment shot_annotations = 6;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[VideoSegment](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.VideoSegment)\>

### getShotAnnotationsOrBuilder(int index)

```
public abstract VideoSegmentOrBuilder getShotAnnotationsOrBuilder(int index)
```

Shot annotations. Each shot is represented as a video segment.

`repeated .google.cloud.videointelligence.v1.VideoSegment shot_annotations = 6;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[VideoSegmentOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.VideoSegmentOrBuilder)

### getShotAnnotationsOrBuilderList()

```
public abstract List<? extends VideoSegmentOrBuilder> getShotAnnotationsOrBuilderList()
```

Shot annotations. Each shot is represented as a video segment.

`repeated .google.cloud.videointelligence.v1.VideoSegment shot_annotations = 6;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1.VideoSegmentOrBuilder\>

### getShotLabelAnnotations(int index)

```
public abstract LabelAnnotation getShotLabelAnnotations(int index)
```

Topical label annotations on shot level. There is exactly one element for each unique label.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation shot_label_annotations = 3;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[LabelAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LabelAnnotation)

### getShotLabelAnnotationsCount()

```
public abstract int getShotLabelAnnotationsCount()
```

Topical label annotations on shot level. There is exactly one element for each unique label.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation shot_label_annotations = 3;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getShotLabelAnnotationsList()

```
public abstract List<LabelAnnotation> getShotLabelAnnotationsList()
```

Topical label annotations on shot level. There is exactly one element for each unique label.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation shot_label_annotations = 3;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[LabelAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LabelAnnotation)\>

### getShotLabelAnnotationsOrBuilder(int index)

```
public abstract LabelAnnotationOrBuilder getShotLabelAnnotationsOrBuilder(int index)
```

Topical label annotations on shot level. There is exactly one element for each unique label.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation shot_label_annotations = 3;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[LabelAnnotationOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LabelAnnotationOrBuilder)

### getShotLabelAnnotationsOrBuilderList()

```
public abstract List<? extends LabelAnnotationOrBuilder> getShotLabelAnnotationsOrBuilderList()
```

Topical label annotations on shot level. There is exactly one element for each unique label.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation shot_label_annotations = 3;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1.LabelAnnotationOrBuilder\>

### getShotPresenceLabelAnnotations(int index)

```
public abstract LabelAnnotation getShotPresenceLabelAnnotations(int index)
```

Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation shot_presence_label_annotations = 24;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[LabelAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LabelAnnotation)

### getShotPresenceLabelAnnotationsCount()

```
public abstract int getShotPresenceLabelAnnotationsCount()
```

Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation shot_presence_label_annotations = 24;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getShotPresenceLabelAnnotationsList()

```
public abstract List<LabelAnnotation> getShotPresenceLabelAnnotationsList()
```

Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation shot_presence_label_annotations = 24;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[LabelAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LabelAnnotation)\>

### getShotPresenceLabelAnnotationsOrBuilder(int index)

```
public abstract LabelAnnotationOrBuilder getShotPresenceLabelAnnotationsOrBuilder(int index)
```

Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation shot_presence_label_annotations = 24;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[LabelAnnotationOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.LabelAnnotationOrBuilder)

### getShotPresenceLabelAnnotationsOrBuilderList()

```
public abstract List<? extends LabelAnnotationOrBuilder> getShotPresenceLabelAnnotationsOrBuilderList()
```

Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.

`repeated .google.cloud.videointelligence.v1.LabelAnnotation shot_presence_label_annotations = 24;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1.LabelAnnotationOrBuilder\>

### getSpeechTranscriptions(int index)

```
public abstract SpeechTranscription getSpeechTranscriptions(int index)
```

Speech transcription.

`repeated .google.cloud.videointelligence.v1.SpeechTranscription speech_transcriptions = 11;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[SpeechTranscription](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.SpeechTranscription)

### getSpeechTranscriptionsCount()

```
public abstract int getSpeechTranscriptionsCount()
```

Speech transcription.

`repeated .google.cloud.videointelligence.v1.SpeechTranscription speech_transcriptions = 11;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getSpeechTranscriptionsList()

```
public abstract List<SpeechTranscription> getSpeechTranscriptionsList()
```

Speech transcription.

`repeated .google.cloud.videointelligence.v1.SpeechTranscription speech_transcriptions = 11;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SpeechTranscription](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.SpeechTranscription)\>

### getSpeechTranscriptionsOrBuilder(int index)

```
public abstract SpeechTranscriptionOrBuilder getSpeechTranscriptionsOrBuilder(int index)
```

Speech transcription.

`repeated .google.cloud.videointelligence.v1.SpeechTranscription speech_transcriptions = 11;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[SpeechTranscriptionOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.SpeechTranscriptionOrBuilder)

### getSpeechTranscriptionsOrBuilderList()

```
public abstract List<? extends SpeechTranscriptionOrBuilder> getSpeechTranscriptionsOrBuilderList()
```

Speech transcription.

`repeated .google.cloud.videointelligence.v1.SpeechTranscription speech_transcriptions = 11;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1.SpeechTranscriptionOrBuilder\>

### getTextAnnotations(int index)

```
public abstract TextAnnotation getTextAnnotations(int index)
```

OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.

`repeated .google.cloud.videointelligence.v1.TextAnnotation text_annotations = 12;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[TextAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.TextAnnotation)

### getTextAnnotationsCount()

```
public abstract int getTextAnnotationsCount()
```

OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.

`repeated .google.cloud.videointelligence.v1.TextAnnotation text_annotations = 12;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getTextAnnotationsList()

```
public abstract List<TextAnnotation> getTextAnnotationsList()
```

OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.

`repeated .google.cloud.videointelligence.v1.TextAnnotation text_annotations = 12;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[TextAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.TextAnnotation)\>

### getTextAnnotationsOrBuilder(int index)

```
public abstract TextAnnotationOrBuilder getTextAnnotationsOrBuilder(int index)
```

OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.

`repeated .google.cloud.videointelligence.v1.TextAnnotation text_annotations = 12;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[TextAnnotationOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.6.0/com.google.cloud.videointelligence.v1.TextAnnotationOrBuilder)

### getTextAnnotationsOrBuilderList()

```
public abstract List<? extends TextAnnotationOrBuilder> getTextAnnotationsOrBuilderList()
```

OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.

`repeated .google.cloud.videointelligence.v1.TextAnnotation text_annotations = 12;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.videointelligence.v1.TextAnnotationOrBuilder\>

### hasError()

```
public abstract boolean hasError()
```

If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.

`.google.rpc.Status error = 9;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the error field is set.

### hasExplicitAnnotation()

```
public abstract boolean hasExplicitAnnotation()
```

Explicit content annotation.

`.google.cloud.videointelligence.v1.ExplicitContentAnnotation explicit_annotation = 7;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the explicitAnnotation field is set.

### hasSegment()

```
public abstract boolean hasSegment()
```

Video segment on which the annotation is run.

`.google.cloud.videointelligence.v1.VideoSegment segment = 10;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the segment field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
