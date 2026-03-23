-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Cloud Video Intelligence V1p2beta1 API - Class Google::Cloud::VideoIntelligence::V1p2beta1::TextSegment (v0.13.0) Stay organized with collections Save and categorize content based on your preferences.

Version 0.13.0keyboard\_arrow\_down

-   [0.16.1 (latest)](/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/latest/Google-Cloud-VideoIntelligence-V1p2beta1-TextSegment)
-   [0.16.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.16.0/Google-Cloud-VideoIntelligence-V1p2beta1-TextSegment)
-   [0.15.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.15.0/Google-Cloud-VideoIntelligence-V1p2beta1-TextSegment)
-   [0.14.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.14.0/Google-Cloud-VideoIntelligence-V1p2beta1-TextSegment)
-   [0.13.1](/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.13.1/Google-Cloud-VideoIntelligence-V1p2beta1-TextSegment)
-   [0.12.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.12.0/Google-Cloud-VideoIntelligence-V1p2beta1-TextSegment)
-   [0.11.2](/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.11.2/Google-Cloud-VideoIntelligence-V1p2beta1-TextSegment)
-   [0.10.2](/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.10.2/Google-Cloud-VideoIntelligence-V1p2beta1-TextSegment)
-   [0.9.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.9.0/Google-Cloud-VideoIntelligence-V1p2beta1-TextSegment)
-   [0.8.1](/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.8.1/Google-Cloud-VideoIntelligence-V1p2beta1-TextSegment)
-   [0.7.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.7.0/Google-Cloud-VideoIntelligence-V1p2beta1-TextSegment)
-   [0.6.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.6.0/Google-Cloud-VideoIntelligence-V1p2beta1-TextSegment)
-   [0.5.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.5.0/Google-Cloud-VideoIntelligence-V1p2beta1-TextSegment)
-   [0.4.5](/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.4.5/Google-Cloud-VideoIntelligence-V1p2beta1-TextSegment)

Reference documentation and code samples for the Cloud Video Intelligence V1p2beta1 API class Google::Cloud::VideoIntelligence::V1p2beta1::TextSegment.

Video segment level annotation results for text detection.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #confidence

```
def confidence() -> ::Float
```

**Returns**

-   (::Float) — Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.

### #confidence=

```
def confidence=(value) -> ::Float
```

**Parameter**

-   **value** (::Float) — Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.

**Returns**

-   (::Float) — Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.

### #frames

```
def frames() -> ::Array<::Google::Cloud::VideoIntelligence::V1p2beta1::TextFrame>
```

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p2beta1::TextFrame](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.13.0/Google-Cloud-VideoIntelligence-V1p2beta1-TextFrame)\>) — Information related to the frames where OCR detected text appears.

### #frames=

```
def frames=(value) -> ::Array<::Google::Cloud::VideoIntelligence::V1p2beta1::TextFrame>
```

**Parameter**

-   **value** (::Array<[::Google::Cloud::VideoIntelligence::V1p2beta1::TextFrame](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.13.0/Google-Cloud-VideoIntelligence-V1p2beta1-TextFrame)\>) — Information related to the frames where OCR detected text appears.

**Returns**

-   (::Array<[::Google::Cloud::VideoIntelligence::V1p2beta1::TextFrame](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.13.0/Google-Cloud-VideoIntelligence-V1p2beta1-TextFrame)\>) — Information related to the frames where OCR detected text appears.

### #segment

```
def segment() -> ::Google::Cloud::VideoIntelligence::V1p2beta1::VideoSegment
```

**Returns**

-   ([::Google::Cloud::VideoIntelligence::V1p2beta1::VideoSegment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.13.0/Google-Cloud-VideoIntelligence-V1p2beta1-VideoSegment)) — Video segment where a text snippet was detected.

### #segment=

```
def segment=(value) -> ::Google::Cloud::VideoIntelligence::V1p2beta1::VideoSegment
```

**Parameter**

-   **value** ([::Google::Cloud::VideoIntelligence::V1p2beta1::VideoSegment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.13.0/Google-Cloud-VideoIntelligence-V1p2beta1-VideoSegment)) — Video segment where a text snippet was detected.

**Returns**

-   ([::Google::Cloud::VideoIntelligence::V1p2beta1::VideoSegment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-video_intelligence-v1p2beta1/0.13.0/Google-Cloud-VideoIntelligence-V1p2beta1-VideoSegment)) — Video segment where a text snippet was detected.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
