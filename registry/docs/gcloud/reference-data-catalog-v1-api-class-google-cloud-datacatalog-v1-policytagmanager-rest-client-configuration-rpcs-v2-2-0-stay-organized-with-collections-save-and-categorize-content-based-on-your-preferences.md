-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Data Catalog V1 API - Class Google::Cloud::DataCatalog::V1::PolicyTagManager::Rest::Client::Configuration::Rpcs (v2.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.2.0keyboard\_arrow\_down

-   [2.5.1 (latest)](/ruby/docs/reference/google-cloud-data_catalog-v1/latest/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [2.5.0](/ruby/docs/reference/google-cloud-data_catalog-v1/2.5.0/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [2.4.0](/ruby/docs/reference/google-cloud-data_catalog-v1/2.4.0/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [2.3.1](/ruby/docs/reference/google-cloud-data_catalog-v1/2.3.1/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [2.2.2](/ruby/docs/reference/google-cloud-data_catalog-v1/2.2.2/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [2.1.1](/ruby/docs/reference/google-cloud-data_catalog-v1/2.1.1/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [2.0.0](/ruby/docs/reference/google-cloud-data_catalog-v1/2.0.0/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [1.4.0](/ruby/docs/reference/google-cloud-data_catalog-v1/1.4.0/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [1.3.1](/ruby/docs/reference/google-cloud-data_catalog-v1/1.3.1/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [1.2.0](/ruby/docs/reference/google-cloud-data_catalog-v1/1.2.0/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [1.1.0](/ruby/docs/reference/google-cloud-data_catalog-v1/1.1.0/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [1.0.1](/ruby/docs/reference/google-cloud-data_catalog-v1/1.0.1/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [0.23.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.23.0/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [0.22.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.22.0/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [0.21.2](/ruby/docs/reference/google-cloud-data_catalog-v1/0.21.2/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [0.20.1](/ruby/docs/reference/google-cloud-data_catalog-v1/0.20.1/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [0.19.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.19.0/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [0.18.1](/ruby/docs/reference/google-cloud-data_catalog-v1/0.18.1/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [0.17.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.17.0/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [0.16.1](/ruby/docs/reference/google-cloud-data_catalog-v1/0.16.1/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [0.15.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.15.0/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [0.14.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.14.0/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [0.13.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.13.0/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [0.12.1](/ruby/docs/reference/google-cloud-data_catalog-v1/0.12.1/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [0.11.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.11.0/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [0.10.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.10.0/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)
-   [0.9.1](/ruby/docs/reference/google-cloud-data_catalog-v1/0.9.1/Google-Cloud-DataCatalog-V1-PolicyTagManager-Rest-Client-Configuration-Rpcs)

Reference documentation and code samples for the Data Catalog V1 API class Google::Cloud::DataCatalog::V1::PolicyTagManager::Rest::Client::Configuration::Rpcs.

Configuration RPC class for the PolicyTagManager API.

Includes fields providing the configuration for each RPC in this service. Each configuration object is of type `Gapic::Config::Method` and includes the following configuration fields:

-   `timeout` (_type:_ `Numeric`) - The call timeout in seconds
-   `metadata` (_type:_ `Hash{Symbol=>String}`) - Additional headers
-   `retry_policy (_type:_`Hash\`) - The retry policy. The policy fields include the following keys:
    -   `:initial_delay` (_type:_ `Numeric`) - The initial delay in seconds.
    -   `:max_delay` (_type:_ `Numeric`) - The max delay in seconds.
    -   `:multiplier` (_type:_ `Numeric`) - The incremental backoff multiplier.
    -   `:retry_codes` (_type:_ `Array<String>`) - The error codes that should trigger a retry.

## Inherits

-   Object

## Methods

### #create\_policy\_tag

```
def create_policy_tag() -> ::Gapic::Config::Method
```

RPC-specific configuration for `create_policy_tag`

**Returns**

-   (::Gapic::Config::Method)

### #create\_taxonomy

```
def create_taxonomy() -> ::Gapic::Config::Method
```

RPC-specific configuration for `create_taxonomy`

**Returns**

-   (::Gapic::Config::Method)

### #delete\_policy\_tag

```
def delete_policy_tag() -> ::Gapic::Config::Method
```

RPC-specific configuration for `delete_policy_tag`

**Returns**

-   (::Gapic::Config::Method)

### #delete\_taxonomy

```
def delete_taxonomy() -> ::Gapic::Config::Method
```

RPC-specific configuration for `delete_taxonomy`

**Returns**

-   (::Gapic::Config::Method)

### #get\_iam\_policy

```
def get_iam_policy() -> ::Gapic::Config::Method
```

RPC-specific configuration for `get_iam_policy`

**Returns**

-   (::Gapic::Config::Method)

### #get\_policy\_tag

```
def get_policy_tag() -> ::Gapic::Config::Method
```

RPC-specific configuration for `get_policy_tag`

**Returns**

-   (::Gapic::Config::Method)

### #get\_taxonomy

```
def get_taxonomy() -> ::Gapic::Config::Method
```

RPC-specific configuration for `get_taxonomy`

**Returns**

-   (::Gapic::Config::Method)

### #list\_policy\_tags

```
def list_policy_tags() -> ::Gapic::Config::Method
```

RPC-specific configuration for `list_policy_tags`

**Returns**

-   (::Gapic::Config::Method)

### #list\_taxonomies

```
def list_taxonomies() -> ::Gapic::Config::Method
```

RPC-specific configuration for `list_taxonomies`

**Returns**

-   (::Gapic::Config::Method)

### #set\_iam\_policy

```
def set_iam_policy() -> ::Gapic::Config::Method
```

RPC-specific configuration for `set_iam_policy`

**Returns**

-   (::Gapic::Config::Method)

### #test\_iam\_permissions

```
def test_iam_permissions() -> ::Gapic::Config::Method
```

RPC-specific configuration for `test_iam_permissions`

**Returns**

-   (::Gapic::Config::Method)

### #update\_policy\_tag

```
def update_policy_tag() -> ::Gapic::Config::Method
```

RPC-specific configuration for `update_policy_tag`

**Returns**

-   (::Gapic::Config::Method)

### #update\_taxonomy

```
def update_taxonomy() -> ::Gapic::Config::Method
```

RPC-specific configuration for `update_taxonomy`

**Returns**

-   (::Gapic::Config::Method)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
