-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Vision AI V1 API - Class Google::Cloud::VisionAI::V1::UpdateApplicationInstancesRequest::UpdateApplicationInstance (v1.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0keyboard\_arrow\_down

-   [1.3.1 (latest)](/ruby/docs/reference/google-cloud-vision_ai-v1/latest/Google-Cloud-VisionAI-V1-UpdateApplicationInstancesRequest-UpdateApplicationInstance)
-   [1.3.0](/ruby/docs/reference/google-cloud-vision_ai-v1/1.3.0/Google-Cloud-VisionAI-V1-UpdateApplicationInstancesRequest-UpdateApplicationInstance)
-   [1.2.0](/ruby/docs/reference/google-cloud-vision_ai-v1/1.2.0/Google-Cloud-VisionAI-V1-UpdateApplicationInstancesRequest-UpdateApplicationInstance)
-   [1.1.1](/ruby/docs/reference/google-cloud-vision_ai-v1/1.1.1/Google-Cloud-VisionAI-V1-UpdateApplicationInstancesRequest-UpdateApplicationInstance)
-   [1.0.1](/ruby/docs/reference/google-cloud-vision_ai-v1/1.0.1/Google-Cloud-VisionAI-V1-UpdateApplicationInstancesRequest-UpdateApplicationInstance)
-   [0.4.0](/ruby/docs/reference/google-cloud-vision_ai-v1/0.4.0/Google-Cloud-VisionAI-V1-UpdateApplicationInstancesRequest-UpdateApplicationInstance)
-   [0.3.0](/ruby/docs/reference/google-cloud-vision_ai-v1/0.3.0/Google-Cloud-VisionAI-V1-UpdateApplicationInstancesRequest-UpdateApplicationInstance)
-   [0.2.0](/ruby/docs/reference/google-cloud-vision_ai-v1/0.2.0/Google-Cloud-VisionAI-V1-UpdateApplicationInstancesRequest-UpdateApplicationInstance)
-   [0.1.0](/ruby/docs/reference/google-cloud-vision_ai-v1/0.1.0/Google-Cloud-VisionAI-V1-UpdateApplicationInstancesRequest-UpdateApplicationInstance)

Reference documentation and code samples for the Vision AI V1 API class Google::Cloud::VisionAI::V1::UpdateApplicationInstancesRequest::UpdateApplicationInstance.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #instance

```
def instance() -> ::Google::Cloud::VisionAI::V1::Instance
```

**Returns**

-   ([::Google::Cloud::VisionAI::V1::Instance](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-vision_ai-v1/1.0.0/Google-Cloud-VisionAI-V1-Instance)) — Required. The resource being updated.

### #instance=

```
def instance=(value) -> ::Google::Cloud::VisionAI::V1::Instance
```

**Parameter**

-   **value** ([::Google::Cloud::VisionAI::V1::Instance](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-vision_ai-v1/1.0.0/Google-Cloud-VisionAI-V1-Instance)) — Required. The resource being updated.

**Returns**

-   ([::Google::Cloud::VisionAI::V1::Instance](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-vision_ai-v1/1.0.0/Google-Cloud-VisionAI-V1-Instance)) — Required. The resource being updated.

### #instance\_id

```
def instance_id() -> ::String
```

**Returns**

-   (::String) — Required. The id of the instance.

### #instance\_id=

```
def instance_id=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Required. The id of the instance.

**Returns**

-   (::String) — Required. The id of the instance.

### #update\_mask

```
def update_mask() -> ::Google::Protobuf::FieldMask
```

**Returns**

-   ([::Google::Protobuf::FieldMask](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-vision_ai-v1/1.0.0/Google-Protobuf-FieldMask)) — Optional. Field mask is used to specify the fields to be overwritten in the Draft resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.

### #update\_mask=

```
def update_mask=(value) -> ::Google::Protobuf::FieldMask
```

**Parameter**

-   **value** ([::Google::Protobuf::FieldMask](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-vision_ai-v1/1.0.0/Google-Protobuf-FieldMask)) — Optional. Field mask is used to specify the fields to be overwritten in the Draft resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.

**Returns**

-   ([::Google::Protobuf::FieldMask](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-vision_ai-v1/1.0.0/Google-Protobuf-FieldMask)) — Optional. Field mask is used to specify the fields to be overwritten in the Draft resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
