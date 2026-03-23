-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Google Cloud Data Catalog V1BETA1 API - Class Google::Cloud::DataCatalog::V1beta1::ListTagsRequest (v0.8.3) Stay organized with collections Save and categorize content based on your preferences.

Version 0.8.3keyboard\_arrow\_down

-   [0.10.1 (latest)](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/latest/Google-Cloud-DataCatalog-V1beta1-ListTagsRequest)
-   [0.10.0](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.10.0/Google-Cloud-DataCatalog-V1beta1-ListTagsRequest)
-   [0.9.1](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.9.1/Google-Cloud-DataCatalog-V1beta1-ListTagsRequest)
-   [0.8.4](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.8.4/Google-Cloud-DataCatalog-V1beta1-ListTagsRequest)
-   [0.7.0](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.7.0/Google-Cloud-DataCatalog-V1beta1-ListTagsRequest)
-   [0.6.0](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.6.0/Google-Cloud-DataCatalog-V1beta1-ListTagsRequest)
-   [0.5.2](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.5.2/Google-Cloud-DataCatalog-V1beta1-ListTagsRequest)
-   [0.4.0](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.4.0/Google-Cloud-DataCatalog-V1beta1-ListTagsRequest)
-   [0.3.2](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.3.2/Google-Cloud-DataCatalog-V1beta1-ListTagsRequest)
-   [0.2.1](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.2.1/Google-Cloud-DataCatalog-V1beta1-ListTagsRequest)
-   [0.1.1](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.1.1/Google-Cloud-DataCatalog-V1beta1-ListTagsRequest)

Reference documentation and code samples for the Google Cloud Data Catalog V1BETA1 API class Google::Cloud::DataCatalog::V1beta1::ListTagsRequest.

Request message for [ListTags](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.8.3/Google-Cloud-DataCatalog-V1beta1-DataCatalog-Client#Google__Cloud__DataCatalog__V1beta1__DataCatalog__Client_list_tags_instance_ "Google::Cloud::DataCatalog::V1beta1::DataCatalog::Client#list_tags (method)").

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #page\_size

```
def page_size() -> ::Integer
```

**Returns**

-   (::Integer) — The maximum number of tags to return. Default is 10. Max limit is 1000.

### #page\_size=

```
def page_size=(value) -> ::Integer
```

**Parameter**

-   **value** (::Integer) — The maximum number of tags to return. Default is 10. Max limit is 1000.

**Returns**

-   (::Integer) — The maximum number of tags to return. Default is 10. Max limit is 1000.

### #page\_token

```
def page_token() -> ::String
```

**Returns**

-   (::String) — Token that specifies which page is requested. If empty, the first page is returned.

### #page\_token=

```
def page_token=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Token that specifies which page is requested. If empty, the first page is returned.

**Returns**

-   (::String) — Token that specifies which page is requested. If empty, the first page is returned.

### #parent

```
def parent() -> ::String
```

**Returns**

-   (::String) —
    
    Required. The name of the Data Catalog resource to list the tags of. The resource could be an [Entry](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.8.3/Google-Cloud-DataCatalog-V1beta1-Entry "Google::Cloud::DataCatalog::V1beta1::Entry (class)") or an [EntryGroup](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.8.3/Google-Cloud-DataCatalog-V1beta1-EntryGroup "Google::Cloud::DataCatalog::V1beta1::EntryGroup (class)").
    
    Examples:
    
    -   projects/{project\_id}/locations/{location}/entryGroups/{entry\_group\_id}
    -   projects/{project\_id}/locations/{location}/entryGroups/{entry\_group\_id}/entries/{entry\_id}

### #parent=

```
def parent=(value) -> ::String
```

**Parameter**

-   **value** (::String) —
    
    Required. The name of the Data Catalog resource to list the tags of. The resource could be an [Entry](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.8.3/Google-Cloud-DataCatalog-V1beta1-Entry "Google::Cloud::DataCatalog::V1beta1::Entry (class)") or an [EntryGroup](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.8.3/Google-Cloud-DataCatalog-V1beta1-EntryGroup "Google::Cloud::DataCatalog::V1beta1::EntryGroup (class)").
    
    Examples:
    
    -   projects/{project\_id}/locations/{location}/entryGroups/{entry\_group\_id}
    -   projects/{project\_id}/locations/{location}/entryGroups/{entry\_group\_id}/entries/{entry\_id}

**Returns**

-   (::String) —
    
    Required. The name of the Data Catalog resource to list the tags of. The resource could be an [Entry](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.8.3/Google-Cloud-DataCatalog-V1beta1-Entry "Google::Cloud::DataCatalog::V1beta1::Entry (class)") or an [EntryGroup](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.8.3/Google-Cloud-DataCatalog-V1beta1-EntryGroup "Google::Cloud::DataCatalog::V1beta1::EntryGroup (class)").
    
    Examples:
    
    -   projects/{project\_id}/locations/{location}/entryGroups/{entry\_group\_id}
    -   projects/{project\_id}/locations/{location}/entryGroups/{entry\_group\_id}/entries/{entry\_id}

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
