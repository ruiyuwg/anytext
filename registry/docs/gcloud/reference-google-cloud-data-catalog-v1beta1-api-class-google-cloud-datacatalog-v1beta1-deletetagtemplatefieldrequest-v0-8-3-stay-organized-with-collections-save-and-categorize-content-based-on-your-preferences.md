-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Google Cloud Data Catalog V1BETA1 API - Class Google::Cloud::DataCatalog::V1beta1::DeleteTagTemplateFieldRequest (v0.8.3) Stay organized with collections Save and categorize content based on your preferences.

Version 0.8.3keyboard\_arrow\_down

-   [0.10.1 (latest)](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/latest/Google-Cloud-DataCatalog-V1beta1-DeleteTagTemplateFieldRequest)
-   [0.10.0](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.10.0/Google-Cloud-DataCatalog-V1beta1-DeleteTagTemplateFieldRequest)
-   [0.9.1](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.9.1/Google-Cloud-DataCatalog-V1beta1-DeleteTagTemplateFieldRequest)
-   [0.8.4](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.8.4/Google-Cloud-DataCatalog-V1beta1-DeleteTagTemplateFieldRequest)
-   [0.7.0](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.7.0/Google-Cloud-DataCatalog-V1beta1-DeleteTagTemplateFieldRequest)
-   [0.6.0](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.6.0/Google-Cloud-DataCatalog-V1beta1-DeleteTagTemplateFieldRequest)
-   [0.5.2](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.5.2/Google-Cloud-DataCatalog-V1beta1-DeleteTagTemplateFieldRequest)
-   [0.4.0](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.4.0/Google-Cloud-DataCatalog-V1beta1-DeleteTagTemplateFieldRequest)
-   [0.3.2](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.3.2/Google-Cloud-DataCatalog-V1beta1-DeleteTagTemplateFieldRequest)
-   [0.2.1](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.2.1/Google-Cloud-DataCatalog-V1beta1-DeleteTagTemplateFieldRequest)
-   [0.1.1](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.1.1/Google-Cloud-DataCatalog-V1beta1-DeleteTagTemplateFieldRequest)

Reference documentation and code samples for the Google Cloud Data Catalog V1BETA1 API class Google::Cloud::DataCatalog::V1beta1::DeleteTagTemplateFieldRequest.

Request message for [DeleteTagTemplateField](/ruby/docs/reference/google-cloud-data_catalog-v1beta1/0.8.3/Google-Cloud-DataCatalog-V1beta1-DataCatalog-Client#Google__Cloud__DataCatalog__V1beta1__DataCatalog__Client_delete_tag_template_field_instance_ "Google::Cloud::DataCatalog::V1beta1::DataCatalog::Client#delete_tag_template_field (method)").

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #force

```
def force() -> ::Boolean
```

**Returns**

-   (::Boolean) — Required. Currently, this field must always be set to `true`. This confirms the deletion of this field from any tags using this field. `force = false` will be supported in the future.

### #force=

```
def force=(value) -> ::Boolean
```

**Parameter**

-   **value** (::Boolean) — Required. Currently, this field must always be set to `true`. This confirms the deletion of this field from any tags using this field. `force = false` will be supported in the future.

**Returns**

-   (::Boolean) — Required. Currently, this field must always be set to `true`. This confirms the deletion of this field from any tags using this field. `force = false` will be supported in the future.

### #name

```
def name() -> ::String
```

**Returns**

-   (::String) —
    
    Required. The name of the tag template field to delete. Example:
    
    -   projects/{project\_id}/locations/{location}/tagTemplates/{tag\_template\_id}/fields/{tag\_template\_field\_id}

### #name=

```
def name=(value) -> ::String
```

**Parameter**

-   **value** (::String) —
    
    Required. The name of the tag template field to delete. Example:
    
    -   projects/{project\_id}/locations/{location}/tagTemplates/{tag\_template\_id}/fields/{tag\_template\_field\_id}

**Returns**

-   (::String) —
    
    Required. The name of the tag template field to delete. Example:
    
    -   projects/{project\_id}/locations/{location}/tagTemplates/{tag\_template\_id}/fields/{tag\_template\_field\_id}

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
