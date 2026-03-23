-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Retail V2 API - Class Google::Cloud::Retail::V2::AttributesConfig (v2.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.0keyboard\_arrow\_down

-   [2.6.1 (latest)](/ruby/docs/reference/google-cloud-retail-v2/latest/Google-Cloud-Retail-V2-AttributesConfig)
-   [2.6.0](/ruby/docs/reference/google-cloud-retail-v2/2.6.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [2.5.0](/ruby/docs/reference/google-cloud-retail-v2/2.5.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [2.4.0](/ruby/docs/reference/google-cloud-retail-v2/2.4.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [2.3.0](/ruby/docs/reference/google-cloud-retail-v2/2.3.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [2.2.0](/ruby/docs/reference/google-cloud-retail-v2/2.2.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [2.1.0](/ruby/docs/reference/google-cloud-retail-v2/2.1.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [2.0.0](/ruby/docs/reference/google-cloud-retail-v2/2.0.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [1.3.0](/ruby/docs/reference/google-cloud-retail-v2/1.3.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [1.2.0](/ruby/docs/reference/google-cloud-retail-v2/1.2.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [1.1.0](/ruby/docs/reference/google-cloud-retail-v2/1.1.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [1.0.1](/ruby/docs/reference/google-cloud-retail-v2/1.0.1/Google-Cloud-Retail-V2-AttributesConfig)
-   [0.21.0](/ruby/docs/reference/google-cloud-retail-v2/0.21.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [0.20.0](/ruby/docs/reference/google-cloud-retail-v2/0.20.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [0.19.0](/ruby/docs/reference/google-cloud-retail-v2/0.19.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [0.18.2](/ruby/docs/reference/google-cloud-retail-v2/0.18.2/Google-Cloud-Retail-V2-AttributesConfig)
-   [0.17.0](/ruby/docs/reference/google-cloud-retail-v2/0.17.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [0.16.1](/ruby/docs/reference/google-cloud-retail-v2/0.16.1/Google-Cloud-Retail-V2-AttributesConfig)
-   [0.15.0](/ruby/docs/reference/google-cloud-retail-v2/0.15.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [0.14.0](/ruby/docs/reference/google-cloud-retail-v2/0.14.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [0.13.0](/ruby/docs/reference/google-cloud-retail-v2/0.13.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [0.12.0](/ruby/docs/reference/google-cloud-retail-v2/0.12.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [0.11.0](/ruby/docs/reference/google-cloud-retail-v2/0.11.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [0.10.0](/ruby/docs/reference/google-cloud-retail-v2/0.10.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [0.9.0](/ruby/docs/reference/google-cloud-retail-v2/0.9.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [0.8.0](/ruby/docs/reference/google-cloud-retail-v2/0.8.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [0.7.0](/ruby/docs/reference/google-cloud-retail-v2/0.7.0/Google-Cloud-Retail-V2-AttributesConfig)
-   [0.6.4](/ruby/docs/reference/google-cloud-retail-v2/0.6.4/Google-Cloud-Retail-V2-AttributesConfig)

Reference documentation and code samples for the Retail V2 API class Google::Cloud::Retail::V2::AttributesConfig.

Catalog level attribute config.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #attribute\_config\_level

```
def attribute_config_level() -> ::Google::Cloud::Retail::V2::AttributeConfigLevel
```

**Returns**

-   ([::Google::Cloud::Retail::V2::AttributeConfigLevel](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-retail-v2/2.0.0/Google-Cloud-Retail-V2-AttributeConfigLevel)) — Output only. The [AttributeConfigLevel](/ruby/docs/reference/google-cloud-retail-v2/2.0.0/Google-Cloud-Retail-V2-AttributeConfigLevel "Google::Cloud::Retail::V2::AttributeConfigLevel (module)") used for this catalog.

### #catalog\_attributes

```
def catalog_attributes() -> ::Google::Protobuf::Map{::String => ::Google::Cloud::Retail::V2::CatalogAttribute}
```

**Returns**

-   (::Google::Protobuf::Map{::String => ::Google::Cloud::Retail::V2::CatalogAttribute}) — Enable attribute(s) config at catalog level. For example, indexable, dynamic\_facetable, or searchable for each attribute.
    
    The key is catalog attribute's name. For example: `color`, `brands`, `attributes.custom_attribute`, such as `attributes.xyz`.
    
    The maximum number of catalog attributes allowed in a request is 1000.
    

### #catalog\_attributes=

```
def catalog_attributes=(value) -> ::Google::Protobuf::Map{::String => ::Google::Cloud::Retail::V2::CatalogAttribute}
```

**Parameter**

-   **value** (::Google::Protobuf::Map{::String => ::Google::Cloud::Retail::V2::CatalogAttribute}) — Enable attribute(s) config at catalog level. For example, indexable, dynamic\_facetable, or searchable for each attribute.
    
    The key is catalog attribute's name. For example: `color`, `brands`, `attributes.custom_attribute`, such as `attributes.xyz`.
    
    The maximum number of catalog attributes allowed in a request is 1000.
    

**Returns**

-   (::Google::Protobuf::Map{::String => ::Google::Cloud::Retail::V2::CatalogAttribute}) — Enable attribute(s) config at catalog level. For example, indexable, dynamic\_facetable, or searchable for each attribute.
    
    The key is catalog attribute's name. For example: `color`, `brands`, `attributes.custom_attribute`, such as `attributes.xyz`.
    
    The maximum number of catalog attributes allowed in a request is 1000.
    

### #name

```
def name() -> ::String
```

**Returns**

-   (::String) — Required. Immutable. The fully qualified resource name of the attribute config. Format: `projects/*/locations/*/catalogs/*/attributesConfig`

### #name=

```
def name=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Required. Immutable. The fully qualified resource name of the attribute config. Format: `projects/*/locations/*/catalogs/*/attributesConfig`

**Returns**

-   (::String) — Required. Immutable. The fully qualified resource name of the attribute config. Format: `projects/*/locations/*/catalogs/*/attributesConfig`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
