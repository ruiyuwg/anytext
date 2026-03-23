-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Cloud Talent Solution V4beta1 API - Class Google::Cloud::Talent::V4beta1::CreateTenantRequest (v0.14.0) Stay organized with collections Save and categorize content based on your preferences.

Version 0.14.0keyboard\_arrow\_down

-   [0.17.1 (latest)](/ruby/docs/reference/google-cloud-talent-v4beta1/latest/Google-Cloud-Talent-V4beta1-CreateTenantRequest)
-   [0.17.0](/ruby/docs/reference/google-cloud-talent-v4beta1/0.17.0/Google-Cloud-Talent-V4beta1-CreateTenantRequest)
-   [0.16.0](/ruby/docs/reference/google-cloud-talent-v4beta1/0.16.0/Google-Cloud-Talent-V4beta1-CreateTenantRequest)
-   [0.15.0](/ruby/docs/reference/google-cloud-talent-v4beta1/0.15.0/Google-Cloud-Talent-V4beta1-CreateTenantRequest)
-   [0.14.1](/ruby/docs/reference/google-cloud-talent-v4beta1/0.14.1/Google-Cloud-Talent-V4beta1-CreateTenantRequest)
-   [0.13.0](/ruby/docs/reference/google-cloud-talent-v4beta1/0.13.0/Google-Cloud-Talent-V4beta1-CreateTenantRequest)
-   [0.12.0](/ruby/docs/reference/google-cloud-talent-v4beta1/0.12.0/Google-Cloud-Talent-V4beta1-CreateTenantRequest)
-   [0.11.1](/ruby/docs/reference/google-cloud-talent-v4beta1/0.11.1/Google-Cloud-Talent-V4beta1-CreateTenantRequest)
-   [0.10.2](/ruby/docs/reference/google-cloud-talent-v4beta1/0.10.2/Google-Cloud-Talent-V4beta1-CreateTenantRequest)
-   [0.9.0](/ruby/docs/reference/google-cloud-talent-v4beta1/0.9.0/Google-Cloud-Talent-V4beta1-CreateTenantRequest)
-   [0.8.1](/ruby/docs/reference/google-cloud-talent-v4beta1/0.8.1/Google-Cloud-Talent-V4beta1-CreateTenantRequest)
-   [0.7.0](/ruby/docs/reference/google-cloud-talent-v4beta1/0.7.0/Google-Cloud-Talent-V4beta1-CreateTenantRequest)
-   [0.6.1](/ruby/docs/reference/google-cloud-talent-v4beta1/0.6.1/Google-Cloud-Talent-V4beta1-CreateTenantRequest)
-   [0.5.0](/ruby/docs/reference/google-cloud-talent-v4beta1/0.5.0/Google-Cloud-Talent-V4beta1-CreateTenantRequest)
-   [0.4.6](/ruby/docs/reference/google-cloud-talent-v4beta1/0.4.6/Google-Cloud-Talent-V4beta1-CreateTenantRequest)

Reference documentation and code samples for the Cloud Talent Solution V4beta1 API class Google::Cloud::Talent::V4beta1::CreateTenantRequest.

The Request of the CreateTenant method.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #parent

```
def parent() -> ::String
```

**Returns**

-   (::String) — Required. Resource name of the project under which the tenant is created.
    
    The format is "projects/{project\_id}", for example, "projects/foo".
    

### #parent=

```
def parent=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Required. Resource name of the project under which the tenant is created.
    
    The format is "projects/{project\_id}", for example, "projects/foo".
    

**Returns**

-   (::String) — Required. Resource name of the project under which the tenant is created.
    
    The format is "projects/{project\_id}", for example, "projects/foo".
    

### #tenant

```
def tenant() -> ::Google::Cloud::Talent::V4beta1::Tenant
```

**Returns**

-   ([::Google::Cloud::Talent::V4beta1::Tenant](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-talent-v4beta1/0.14.0/Google-Cloud-Talent-V4beta1-Tenant)) — Required. The tenant to be created.

### #tenant=

```
def tenant=(value) -> ::Google::Cloud::Talent::V4beta1::Tenant
```

**Parameter**

-   **value** ([::Google::Cloud::Talent::V4beta1::Tenant](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-talent-v4beta1/0.14.0/Google-Cloud-Talent-V4beta1-Tenant)) — Required. The tenant to be created.

**Returns**

-   ([::Google::Cloud::Talent::V4beta1::Tenant](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-talent-v4beta1/0.14.0/Google-Cloud-Talent-V4beta1-Tenant)) — Required. The tenant to be created.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
