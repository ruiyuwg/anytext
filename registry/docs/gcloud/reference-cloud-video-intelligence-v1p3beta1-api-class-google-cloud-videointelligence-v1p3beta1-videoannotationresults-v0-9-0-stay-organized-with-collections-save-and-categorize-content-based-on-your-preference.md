-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Cloud Video Intelligence V1p3beta1 API - Class Google::Cloud::VideoIntelligence::V1p3beta1::VideoAnnotationResults (v0.9.0) Stay organized with collections Save and categorize content based on your preferences.

Version 0.9.0keyboard\_arrow\_down

-   [0.12.1 (latest)](/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/latest/Google-Cloud-VideoIntelligence-V1p3beta1-VideoAnnotationResults)
-   [0.12.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.12.0/Google-Cloud-VideoIntelligence-V1p3beta1-VideoAnnotationResults)
-   [0.11.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.11.0/Google-Cloud-VideoIntelligence-V1p3beta1-VideoAnnotationResults)
-   [0.10.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.10.0/Google-Cloud-VideoIntelligence-V1p3beta1-VideoAnnotationResults)
-   [0.9.1](/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.1/Google-Cloud-VideoIntelligence-V1p3beta1-VideoAnnotationResults)
-   [0.8.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.8.0/Google-Cloud-VideoIntelligence-V1p3beta1-VideoAnnotationResults)
-   [0.7.2](/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.7.2/Google-Cloud-VideoIntelligence-V1p3beta1-VideoAnnotationResults)
-   [0.6.2](/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.6.2/Google-Cloud-VideoIntelligence-V1p3beta1-VideoAnnotationResults)
-   [0.5.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.5.0/Google-Cloud-VideoIntelligence-V1p3beta1-VideoAnnotationResults)
-   [0.4.1](/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.4.1/Google-Cloud-VideoIntelligence-V1p3beta1-VideoAnnotationResults)
-   [0.3.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.3.0/Google-Cloud-VideoIntelligence-V1p3beta1-VideoAnnotationResults)
-   [0.2.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.2.0/Google-Cloud-VideoIntelligence-V1p3beta1-VideoAnnotationResults)
-   [0.1.2](/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.1.2/Google-Cloud-VideoIntelligence-V1p3beta1-VideoAnnotationResults)

Reference documentation and code samples for the Cloud Video Intelligence V1p3beta1 API class Google::Cloud::VideoIntelligence::V1p3beta1::VideoAnnotationResults.

Annotation results for a single video.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #celebrity\_recognition\_annotations

```
def celebrity_recognition_annotations() -> ::Google::Cloud::VideoIntelligence::V1p3beta1::CelebrityRecognitionAnnotation
```

**Returns**

-   ([::Google::Cloud::VideoIntelligence::V1p3beta1::CelebrityRecognitionAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-CelebrityRecognitionAnnotation)) — Celebrity recognition annotations.

### #celebrity\_recognition\_annotations=

```
def celebrity_recognition_annotations=(value) -> ::Google::Cloud::VideoIntelligence::V1p3beta1::CelebrityRecognitionAnnotation
```

**Parameter**

-   **value** ([::Google::Cloud::VideoIntelligence::V1p3beta1::CelebrityRecognitionAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-CelebrityRecognitionAnnotation)) — Celebrity recognition annotations.

**Returns**

-   ([::Google::Cloud::VideoIntelligence::V1p3beta1::CelebrityRecognitionAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-CelebrityRecognitionAnnotation)) — Celebrity recognition annotations.

### #error

```
def error() -> ::Google::Rpc::Status
```

**Returns**

-   ([::Google::Rpc::Status](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Rpc-Status)) — If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.

### #error=

```
def error=(value) -> ::Google::Rpc::Status
```

**Parameter**

-   **value** ([::Google::Rpc::Status](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Rpc-Status)) — If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.

**Returns**

-   ([::Google::Rpc::Status](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Rpc-Status)) — If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.

### #explicit\_annotation

```
def explicit_annotation() -> ::Google::Cloud::VideoIntelligence::V1p3beta1::ExplicitContentAnnotation
```

**Returns**

-   ([::Google::Cloud::VideoIntelligence::V1p3beta1::ExplicitContentAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-ExplicitContentAnnotation)) — Explicit content annotation.

### #explicit\_annotation=

```
def explicit_annotation=(value) -> ::Google::Cloud::VideoIntelligence::V1p3beta1::ExplicitContentAnnotation
```

**Parameter**

-   **value** ([::Google::Cloud::VideoIntelligence::V1p3beta1::ExplicitContentAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-ExplicitContentAnnotation)) — Explicit content annotation.

**Returns**

-   ([::Google::Cloud::VideoIntelligence::V1p3beta1::ExplicitContentAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-ExplicitContentAnnotation)) — Explicit content annotation.

### #face\_detection\_annotations

```
def face_detection_annotations() -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::FaceDetectionAnnotation>
```

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::FaceDetectionAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-FaceDetectionAnnotation)\>) — Face detection annotations.

### #face\_detection\_annotations=

```
def face_detection_annotations=(value) -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::FaceDetectionAnnotation>
```

**Parameter**

-   **value** (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::FaceDetectionAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-FaceDetectionAnnotation)\>) — Face detection annotations.

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::FaceDetectionAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-FaceDetectionAnnotation)\>) — Face detection annotations.

### #frame\_label\_annotations

```
def frame_label_annotations() -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation>
```

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LabelAnnotation)\>) — Label annotations on frame level. There is exactly one element for each unique label.

### #frame\_label\_annotations=

```
def frame_label_annotations=(value) -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation>
```

**Parameter**

-   **value** (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LabelAnnotation)\>) — Label annotations on frame level. There is exactly one element for each unique label.

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LabelAnnotation)\>) — Label annotations on frame level. There is exactly one element for each unique label.

### #input\_uri

```
def input_uri() -> ::String
```

**Returns**

-   (::String) — Video file location in [Cloud Storage](https://cloud.google.com/storage/).

### #input\_uri=

```
def input_uri=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Video file location in [Cloud Storage](https://cloud.google.com/storage/).

**Returns**

-   (::String) — Video file location in [Cloud Storage](https://cloud.google.com/storage/).

### #logo\_recognition\_annotations

```
def logo_recognition_annotations() -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::LogoRecognitionAnnotation>
```

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LogoRecognitionAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LogoRecognitionAnnotation)\>) — Annotations for list of logos detected, tracked and recognized in video.

### #logo\_recognition\_annotations=

```
def logo_recognition_annotations=(value) -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::LogoRecognitionAnnotation>
```

**Parameter**

-   **value** (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LogoRecognitionAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LogoRecognitionAnnotation)\>) — Annotations for list of logos detected, tracked and recognized in video.

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LogoRecognitionAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LogoRecognitionAnnotation)\>) — Annotations for list of logos detected, tracked and recognized in video.

### #object\_annotations

```
def object_annotations() -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::ObjectTrackingAnnotation>
```

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::ObjectTrackingAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-ObjectTrackingAnnotation)\>) — Annotations for list of objects detected and tracked in video.

### #object\_annotations=

```
def object_annotations=(value) -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::ObjectTrackingAnnotation>
```

**Parameter**

-   **value** (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::ObjectTrackingAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-ObjectTrackingAnnotation)\>) — Annotations for list of objects detected and tracked in video.

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::ObjectTrackingAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-ObjectTrackingAnnotation)\>) — Annotations for list of objects detected and tracked in video.

### #person\_detection\_annotations

```
def person_detection_annotations() -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::PersonDetectionAnnotation>
```

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::PersonDetectionAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-PersonDetectionAnnotation)\>) — Person detection annotations.

### #person\_detection\_annotations=

```
def person_detection_annotations=(value) -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::PersonDetectionAnnotation>
```

**Parameter**

-   **value** (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::PersonDetectionAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-PersonDetectionAnnotation)\>) — Person detection annotations.

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::PersonDetectionAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-PersonDetectionAnnotation)\>) — Person detection annotations.

### #segment

```
def segment() -> ::Google::Cloud::VideoIntelligence::V1p3beta1::VideoSegment
```

**Returns**

-   ([::Google::Cloud::VideoIntelligence::V1p3beta1::VideoSegment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-VideoSegment)) — Video segment on which the annotation is run.

### #segment=

```
def segment=(value) -> ::Google::Cloud::VideoIntelligence::V1p3beta1::VideoSegment
```

**Parameter**

-   **value** ([::Google::Cloud::VideoIntelligence::V1p3beta1::VideoSegment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-VideoSegment)) — Video segment on which the annotation is run.

**Returns**

-   ([::Google::Cloud::VideoIntelligence::V1p3beta1::VideoSegment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-VideoSegment)) — Video segment on which the annotation is run.

### #segment\_label\_annotations

```
def segment_label_annotations() -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation>
```

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LabelAnnotation)\>) — Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.

### #segment\_label\_annotations=

```
def segment_label_annotations=(value) -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation>
```

**Parameter**

-   **value** (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LabelAnnotation)\>) — Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LabelAnnotation)\>) — Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.

### #segment\_presence\_label\_annotations

```
def segment_presence_label_annotations() -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation>
```

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LabelAnnotation)\>) — Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.

### #segment\_presence\_label\_annotations=

```
def segment_presence_label_annotations=(value) -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation>
```

**Parameter**

-   **value** (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LabelAnnotation)\>) — Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LabelAnnotation)\>) — Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.

### #shot\_annotations

```
def shot_annotations() -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::VideoSegment>
```

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::VideoSegment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-VideoSegment)\>) — Shot annotations. Each shot is represented as a video segment.

### #shot\_annotations=

```
def shot_annotations=(value) -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::VideoSegment>
```

**Parameter**

-   **value** (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::VideoSegment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-VideoSegment)\>) — Shot annotations. Each shot is represented as a video segment.

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::VideoSegment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-VideoSegment)\>) — Shot annotations. Each shot is represented as a video segment.

### #shot\_label\_annotations

```
def shot_label_annotations() -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation>
```

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LabelAnnotation)\>) — Topical label annotations on shot level. There is exactly one element for each unique label.

### #shot\_label\_annotations=

```
def shot_label_annotations=(value) -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation>
```

**Parameter**

-   **value** (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LabelAnnotation)\>) — Topical label annotations on shot level. There is exactly one element for each unique label.

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LabelAnnotation)\>) — Topical label annotations on shot level. There is exactly one element for each unique label.

### #shot\_presence\_label\_annotations

```
def shot_presence_label_annotations() -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation>
```

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LabelAnnotation)\>) — Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.

### #shot\_presence\_label\_annotations=

```
def shot_presence_label_annotations=(value) -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation>
```

**Parameter**

-   **value** (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LabelAnnotation)\>) — Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::LabelAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-LabelAnnotation)\>) — Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.

### #speech\_transcriptions

```
def speech_transcriptions() -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::SpeechTranscription>
```

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::SpeechTranscription](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-SpeechTranscription)\>) — Speech transcription.

### #speech\_transcriptions=

```
def speech_transcriptions=(value) -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::SpeechTranscription>
```

**Parameter**

-   **value** (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::SpeechTranscription](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-SpeechTranscription)\>) — Speech transcription.

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::SpeechTranscription](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-SpeechTranscription)\>) — Speech transcription.

### #text\_annotations

```
def text_annotations() -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::TextAnnotation>
```

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::TextAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-TextAnnotation)\>) — OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.

### #text\_annotations=

```
def text_annotations=(value) -> ::Array<::Google::Cloud::VideoIntelligence::V1p3beta1::TextAnnotation>
```

**Parameter**

-   **value** (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::TextAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-TextAnnotation)\>) — OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p3beta1::TextAnnotation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p3beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p3beta1-TextAnnotation)\>) — OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
