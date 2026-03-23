-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Vision AI V1 API - Class Google::Cloud::VisionAI::V1::GetStreamThumbnailRequest (v1.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0keyboard\_arrow\_down

-   [1.3.1 (latest)](/ruby/docs/reference/google-cloud-vision_ai-v1/latest/Google-Cloud-VisionAI-V1-GetStreamThumbnailRequest)
-   [1.3.0](/ruby/docs/reference/google-cloud-vision_ai-v1/1.3.0/Google-Cloud-VisionAI-V1-GetStreamThumbnailRequest)
-   [1.2.0](/ruby/docs/reference/google-cloud-vision_ai-v1/1.2.0/Google-Cloud-VisionAI-V1-GetStreamThumbnailRequest)
-   [1.1.1](/ruby/docs/reference/google-cloud-vision_ai-v1/1.1.1/Google-Cloud-VisionAI-V1-GetStreamThumbnailRequest)
-   [1.0.1](/ruby/docs/reference/google-cloud-vision_ai-v1/1.0.1/Google-Cloud-VisionAI-V1-GetStreamThumbnailRequest)
-   [0.4.0](/ruby/docs/reference/google-cloud-vision_ai-v1/0.4.0/Google-Cloud-VisionAI-V1-GetStreamThumbnailRequest)
-   [0.3.0](/ruby/docs/reference/google-cloud-vision_ai-v1/0.3.0/Google-Cloud-VisionAI-V1-GetStreamThumbnailRequest)
-   [0.2.0](/ruby/docs/reference/google-cloud-vision_ai-v1/0.2.0/Google-Cloud-VisionAI-V1-GetStreamThumbnailRequest)
-   [0.1.0](/ruby/docs/reference/google-cloud-vision_ai-v1/0.1.0/Google-Cloud-VisionAI-V1-GetStreamThumbnailRequest)

Reference documentation and code samples for the Vision AI V1 API class Google::Cloud::VisionAI::V1::GetStreamThumbnailRequest.

Message for getting the thumbnail of a Stream.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #event

```
def event() -> ::String
```

**Returns**

-   (::String) — Optional. The name of the event. If unspecified, the thumbnail will be retrieved from the latest event.

### #event=

```
def event=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Optional. The name of the event. If unspecified, the thumbnail will be retrieved from the latest event.

**Returns**

-   (::String) — Optional. The name of the event. If unspecified, the thumbnail will be retrieved from the latest event.

### #gcs\_object\_name

```
def gcs_object_name() -> ::String
```

**Returns**

-   (::String) — Required. The name of the GCS object to store the thumbnail image.

### #gcs\_object\_name=

```
def gcs_object_name=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Required. The name of the GCS object to store the thumbnail image.

**Returns**

-   (::String) — Required. The name of the GCS object to store the thumbnail image.

### #request\_id

```
def request_id() -> ::String
```

**Returns**

-   (::String) — Optional. An optional request ID to identify the requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.
    
    For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
    
    The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
    

### #request\_id=

```
def request_id=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Optional. An optional request ID to identify the requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.
    
    For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
    
    The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
    

**Returns**

-   (::String) — Optional. An optional request ID to identify the requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.
    
    For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
    
    The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
    

### #stream

```
def stream() -> ::String
```

**Returns**

-   (::String) — Required. The name of the stream for to get the thumbnail from.

### #stream=

```
def stream=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Required. The name of the stream for to get the thumbnail from.

**Returns**

-   (::String) — Required. The name of the stream for to get the thumbnail from.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
