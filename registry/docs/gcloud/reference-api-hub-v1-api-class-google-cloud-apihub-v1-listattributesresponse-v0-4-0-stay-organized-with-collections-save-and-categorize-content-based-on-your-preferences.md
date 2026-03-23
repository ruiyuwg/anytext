-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# API hub V1 API - Class Google::Cloud::ApiHub::V1::ListAttributesResponse (v0.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 0.4.0keyboard\_arrow\_down

-   [0.7.0 (latest)](/ruby/docs/reference/google-cloud-api_hub-v1/latest/Google-Cloud-ApiHub-V1-ListAttributesResponse)
-   [0.6.0](/ruby/docs/reference/google-cloud-api_hub-v1/0.6.0/Google-Cloud-ApiHub-V1-ListAttributesResponse)
-   [0.5.0](/ruby/docs/reference/google-cloud-api_hub-v1/0.5.0/Google-Cloud-ApiHub-V1-ListAttributesResponse)
-   [0.4.1](/ruby/docs/reference/google-cloud-api_hub-v1/0.4.1/Google-Cloud-ApiHub-V1-ListAttributesResponse)
-   [0.3.0](/ruby/docs/reference/google-cloud-api_hub-v1/0.3.0/Google-Cloud-ApiHub-V1-ListAttributesResponse)
-   [0.2.0](/ruby/docs/reference/google-cloud-api_hub-v1/0.2.0/Google-Cloud-ApiHub-V1-ListAttributesResponse)
-   [0.1.1](/ruby/docs/reference/google-cloud-api_hub-v1/0.1.1/Google-Cloud-ApiHub-V1-ListAttributesResponse)

Reference documentation and code samples for the API hub V1 API class Google::Cloud::ApiHub::V1::ListAttributesResponse.

The [ListAttributes](/ruby/docs/reference/google-cloud-api_hub-v1/0.4.0/Google-Cloud-ApiHub-V1-ApiHub-Rest-Client#Google__Cloud__ApiHub__V1__ApiHub__Rest__Client_list_attributes_instance_ "Google::Cloud::ApiHub::V1::ApiHub::Rest::Client#list_attributes (method)") method's response.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #attributes

```
def attributes() -> ::Array<::Google::Cloud::ApiHub::V1::Attribute>
```

**Returns**

-   (::Array<[::Google::Cloud::ApiHub::V1::Attribute](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-api_hub-v1/0.4.0/Google-Cloud-ApiHub-V1-Attribute)\>) — The list of all attributes.

### #attributes=

```
def attributes=(value) -> ::Array<::Google::Cloud::ApiHub::V1::Attribute>
```

**Parameter**

-   **value** (::Array<[::Google::Cloud::ApiHub::V1::Attribute](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-api_hub-v1/0.4.0/Google-Cloud-ApiHub-V1-Attribute)\>) — The list of all attributes.

**Returns**

-   (::Array<[::Google::Cloud::ApiHub::V1::Attribute](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-api_hub-v1/0.4.0/Google-Cloud-ApiHub-V1-Attribute)\>) — The list of all attributes.

### #next\_page\_token

```
def next_page_token() -> ::String
```

**Returns**

-   (::String) — A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

### #next\_page\_token=

```
def next_page_token=(value) -> ::String
```

**Parameter**

-   **value** (::String) — A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

**Returns**

-   (::String) — A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
