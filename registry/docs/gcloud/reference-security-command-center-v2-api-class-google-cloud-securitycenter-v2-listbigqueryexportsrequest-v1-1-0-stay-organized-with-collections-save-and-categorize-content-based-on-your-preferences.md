-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Security Command Center V2 API - Class Google::Cloud::SecurityCenter::V2::ListBigQueryExportsRequest (v1.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.1.0keyboard\_arrow\_down

-   [1.5.1 (latest)](/ruby/docs/reference/google-cloud-security_center-v2/latest/Google-Cloud-SecurityCenter-V2-ListBigQueryExportsRequest)
-   [1.5.0](/ruby/docs/reference/google-cloud-security_center-v2/1.5.0/Google-Cloud-SecurityCenter-V2-ListBigQueryExportsRequest)
-   [1.4.0](/ruby/docs/reference/google-cloud-security_center-v2/1.4.0/Google-Cloud-SecurityCenter-V2-ListBigQueryExportsRequest)
-   [1.3.0](/ruby/docs/reference/google-cloud-security_center-v2/1.3.0/Google-Cloud-SecurityCenter-V2-ListBigQueryExportsRequest)
-   [1.2.0](/ruby/docs/reference/google-cloud-security_center-v2/1.2.0/Google-Cloud-SecurityCenter-V2-ListBigQueryExportsRequest)
-   [1.1.1](/ruby/docs/reference/google-cloud-security_center-v2/1.1.1/Google-Cloud-SecurityCenter-V2-ListBigQueryExportsRequest)
-   [1.0.0](/ruby/docs/reference/google-cloud-security_center-v2/1.0.0/Google-Cloud-SecurityCenter-V2-ListBigQueryExportsRequest)
-   [0.6.0](/ruby/docs/reference/google-cloud-security_center-v2/0.6.0/Google-Cloud-SecurityCenter-V2-ListBigQueryExportsRequest)
-   [0.5.0](/ruby/docs/reference/google-cloud-security_center-v2/0.5.0/Google-Cloud-SecurityCenter-V2-ListBigQueryExportsRequest)
-   [0.4.1](/ruby/docs/reference/google-cloud-security_center-v2/0.4.1/Google-Cloud-SecurityCenter-V2-ListBigQueryExportsRequest)
-   [0.3.0](/ruby/docs/reference/google-cloud-security_center-v2/0.3.0/Google-Cloud-SecurityCenter-V2-ListBigQueryExportsRequest)
-   [0.2.0](/ruby/docs/reference/google-cloud-security_center-v2/0.2.0/Google-Cloud-SecurityCenter-V2-ListBigQueryExportsRequest)
-   [0.1.0](/ruby/docs/reference/google-cloud-security_center-v2/0.1.0/Google-Cloud-SecurityCenter-V2-ListBigQueryExportsRequest)

Reference documentation and code samples for the Security Command Center V2 API class Google::Cloud::SecurityCenter::V2::ListBigQueryExportsRequest.

Request message for listing BigQuery exports at a given scope e.g. organization, folder or project.

## Inherits

-   [Object](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-security_center-v2/1.1.0/Google-Cloud-SecurityCenter-V2-Kubernetes-Object)

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

-   (::Integer) — The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.

### #page\_size=

```
def page_size=(value) -> ::Integer
```

**Parameter**

-   **value** (::Integer) — The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.

**Returns**

-   (::Integer) — The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.

### #page\_token

```
def page_token() -> ::String
```

**Returns**

-   (::String) — A page token, received from a previous `ListBigQueryExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryExports` must match the call that provided the page token.

### #page\_token=

```
def page_token=(value) -> ::String
```

**Parameter**

-   **value** (::String) — A page token, received from a previous `ListBigQueryExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryExports` must match the call that provided the page token.

**Returns**

-   (::String) — A page token, received from a previous `ListBigQueryExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryExports` must match the call that provided the page token.

### #parent

```
def parent() -> ::String
```

**Returns**

-   (::String) — Required. The parent, which owns the collection of BigQuery exports. Its format is `organizations/[organization_id]/locations/[location_id]`, `folders/[folder_id]/locations/[location_id]`, or `projects/[project_id]/locations/[location_id]`.

### #parent=

```
def parent=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Required. The parent, which owns the collection of BigQuery exports. Its format is `organizations/[organization_id]/locations/[location_id]`, `folders/[folder_id]/locations/[location_id]`, or `projects/[project_id]/locations/[location_id]`.

**Returns**

-   (::String) — Required. The parent, which owns the collection of BigQuery exports. Its format is `organizations/[organization_id]/locations/[location_id]`, `folders/[folder_id]/locations/[location_id]`, or `projects/[project_id]/locations/[location_id]`.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
