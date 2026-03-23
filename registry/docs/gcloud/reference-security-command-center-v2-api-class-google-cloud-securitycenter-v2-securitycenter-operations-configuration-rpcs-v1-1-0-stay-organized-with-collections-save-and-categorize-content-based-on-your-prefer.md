-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Security Command Center V2 API - Class Google::Cloud::SecurityCenter::V2::SecurityCenter::Operations::Configuration::Rpcs (v1.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.1.0keyboard\_arrow\_down

-   [1.5.1 (latest)](/ruby/docs/reference/google-cloud-security_center-v2/latest/Google-Cloud-SecurityCenter-V2-SecurityCenter-Operations-Configuration-Rpcs)
-   [1.5.0](/ruby/docs/reference/google-cloud-security_center-v2/1.5.0/Google-Cloud-SecurityCenter-V2-SecurityCenter-Operations-Configuration-Rpcs)
-   [1.4.0](/ruby/docs/reference/google-cloud-security_center-v2/1.4.0/Google-Cloud-SecurityCenter-V2-SecurityCenter-Operations-Configuration-Rpcs)
-   [1.3.0](/ruby/docs/reference/google-cloud-security_center-v2/1.3.0/Google-Cloud-SecurityCenter-V2-SecurityCenter-Operations-Configuration-Rpcs)
-   [1.2.0](/ruby/docs/reference/google-cloud-security_center-v2/1.2.0/Google-Cloud-SecurityCenter-V2-SecurityCenter-Operations-Configuration-Rpcs)
-   [1.1.1](/ruby/docs/reference/google-cloud-security_center-v2/1.1.1/Google-Cloud-SecurityCenter-V2-SecurityCenter-Operations-Configuration-Rpcs)
-   [1.0.0](/ruby/docs/reference/google-cloud-security_center-v2/1.0.0/Google-Cloud-SecurityCenter-V2-SecurityCenter-Operations-Configuration-Rpcs)
-   [0.6.0](/ruby/docs/reference/google-cloud-security_center-v2/0.6.0/Google-Cloud-SecurityCenter-V2-SecurityCenter-Operations-Configuration-Rpcs)
-   [0.5.0](/ruby/docs/reference/google-cloud-security_center-v2/0.5.0/Google-Cloud-SecurityCenter-V2-SecurityCenter-Operations-Configuration-Rpcs)
-   [0.4.1](/ruby/docs/reference/google-cloud-security_center-v2/0.4.1/Google-Cloud-SecurityCenter-V2-SecurityCenter-Operations-Configuration-Rpcs)
-   [0.3.0](/ruby/docs/reference/google-cloud-security_center-v2/0.3.0/Google-Cloud-SecurityCenter-V2-SecurityCenter-Operations-Configuration-Rpcs)
-   [0.2.0](/ruby/docs/reference/google-cloud-security_center-v2/0.2.0/Google-Cloud-SecurityCenter-V2-SecurityCenter-Operations-Configuration-Rpcs)
-   [0.1.0](/ruby/docs/reference/google-cloud-security_center-v2/0.1.0/Google-Cloud-SecurityCenter-V2-SecurityCenter-Operations-Configuration-Rpcs)

Reference documentation and code samples for the Security Command Center V2 API class Google::Cloud::SecurityCenter::V2::SecurityCenter::Operations::Configuration::Rpcs.

Configuration RPC class for the Operations API.

Includes fields providing the configuration for each RPC in this service. Each configuration object is of type `Gapic::Config::Method` and includes the following configuration fields:

-   `timeout` (_type:_ `Numeric`) - The call timeout in seconds
-   `metadata` (_type:_ `Hash{Symbol=>String}`) - Additional gRPC headers
-   `retry_policy (_type:_`Hash\`) - The retry policy. The policy fields include the following keys:
    -   `:initial_delay` (_type:_ `Numeric`) - The initial delay in seconds.
    -   `:max_delay` (_type:_ `Numeric`) - The max delay in seconds.
    -   `:multiplier` (_type:_ `Numeric`) - The incremental backoff multiplier.
    -   `:retry_codes` (_type:_ `Array<String>`) - The error codes that should trigger a retry.

## Inherits

-   [Object](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-security_center-v2/1.1.0/Google-Cloud-SecurityCenter-V2-Kubernetes-Object)

## Methods

### #cancel\_operation

```
def cancel_operation() -> ::Gapic::Config::Method
```

RPC-specific configuration for `cancel_operation`

**Returns**

-   (::Gapic::Config::Method)

### #delete\_operation

```
def delete_operation() -> ::Gapic::Config::Method
```

RPC-specific configuration for `delete_operation`

**Returns**

-   (::Gapic::Config::Method)

### #get\_operation

```
def get_operation() -> ::Gapic::Config::Method
```

RPC-specific configuration for `get_operation`

**Returns**

-   (::Gapic::Config::Method)

### #list\_operations

```
def list_operations() -> ::Gapic::Config::Method
```

RPC-specific configuration for `list_operations`

**Returns**

-   (::Gapic::Config::Method)

### #wait\_operation

```
def wait_operation() -> ::Gapic::Config::Method
```

RPC-specific configuration for `wait_operation`

**Returns**

-   (::Gapic::Config::Method)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
