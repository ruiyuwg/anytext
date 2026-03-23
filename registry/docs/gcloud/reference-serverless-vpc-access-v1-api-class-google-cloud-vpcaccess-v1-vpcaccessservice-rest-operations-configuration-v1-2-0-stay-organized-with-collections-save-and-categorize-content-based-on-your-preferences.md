-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Serverless VPC Access V1 API - Class Google::Cloud::VpcAccess::V1::VpcAccessService::Rest::Operations::Configuration (v1.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.2.0keyboard\_arrow\_down

-   [1.5.1 (latest)](/ruby/docs/reference/google-cloud-vpc_access-v1/latest/Google-Cloud-VpcAccess-V1-VpcAccessService-Rest-Operations-Configuration)
-   [1.5.0](/ruby/docs/reference/google-cloud-vpc_access-v1/1.5.0/Google-Cloud-VpcAccess-V1-VpcAccessService-Rest-Operations-Configuration)
-   [1.4.0](/ruby/docs/reference/google-cloud-vpc_access-v1/1.4.0/Google-Cloud-VpcAccess-V1-VpcAccessService-Rest-Operations-Configuration)
-   [1.3.0](/ruby/docs/reference/google-cloud-vpc_access-v1/1.3.0/Google-Cloud-VpcAccess-V1-VpcAccessService-Rest-Operations-Configuration)
-   [1.2.1](/ruby/docs/reference/google-cloud-vpc_access-v1/1.2.1/Google-Cloud-VpcAccess-V1-VpcAccessService-Rest-Operations-Configuration)
-   [1.1.0](/ruby/docs/reference/google-cloud-vpc_access-v1/1.1.0/Google-Cloud-VpcAccess-V1-VpcAccessService-Rest-Operations-Configuration)
-   [1.0.2](/ruby/docs/reference/google-cloud-vpc_access-v1/1.0.2/Google-Cloud-VpcAccess-V1-VpcAccessService-Rest-Operations-Configuration)
-   [0.8.0](/ruby/docs/reference/google-cloud-vpc_access-v1/0.8.0/Google-Cloud-VpcAccess-V1-VpcAccessService-Rest-Operations-Configuration)
-   [0.7.2](/ruby/docs/reference/google-cloud-vpc_access-v1/0.7.2/Google-Cloud-VpcAccess-V1-VpcAccessService-Rest-Operations-Configuration)
-   [0.6.0](/ruby/docs/reference/google-cloud-vpc_access-v1/0.6.0/Google-Cloud-VpcAccess-V1-VpcAccessService-Rest-Operations-Configuration)
-   [0.5.1](/ruby/docs/reference/google-cloud-vpc_access-v1/0.5.1/Google-Cloud-VpcAccess-V1-VpcAccessService-Rest-Operations-Configuration)
-   [0.4.0](/ruby/docs/reference/google-cloud-vpc_access-v1/0.4.0/Google-Cloud-VpcAccess-V1-VpcAccessService-Rest-Operations-Configuration)
-   [0.3.0](/ruby/docs/reference/google-cloud-vpc_access-v1/0.3.0/Google-Cloud-VpcAccess-V1-VpcAccessService-Rest-Operations-Configuration)
-   [0.2.0](/ruby/docs/reference/google-cloud-vpc_access-v1/0.2.0/Google-Cloud-VpcAccess-V1-VpcAccessService-Rest-Operations-Configuration)
-   [0.1.4](/ruby/docs/reference/google-cloud-vpc_access-v1/0.1.4/Google-Cloud-VpcAccess-V1-VpcAccessService-Rest-Operations-Configuration)

Reference documentation and code samples for the Serverless VPC Access V1 API class Google::Cloud::VpcAccess::V1::VpcAccessService::Rest::Operations::Configuration.

Configuration class for the Operations REST API.

This class represents the configuration for Operations REST, providing control over timeouts, retry behavior, logging, transport parameters, and other low-level controls. Certain parameters can also be applied individually to specific RPCs. See Longrunning::Operations::Rest::Client::Configuration::Rpcs for a list of RPCs that can be configured independently.

Configuration can be applied globally to all clients, or to a single client on construction.

## Inherits

-   Object

## Extended By

-   Gapic::Config

## Example

\# Modify the global config, setting the timeout for
\# list\_operations to 20 seconds,
\# and all remaining timeouts to 10 seconds.
::Google::Longrunning::Operations::Rest::Client.configure do |config|
  config.timeout \= 10.0
  config.rpcs.list\_operations.timeout \= 20.0
end

\# Apply the above configuration only to a new client.
client \= ::Google::Longrunning::Operations::Rest::Client.new do |config|
  config.timeout \= 10.0
  config.rpcs.list\_operations.timeout \= 20.0
end

## Methods

### #credentials

```
def credentials() -> ::Object
```

Credentials to send with calls. You may provide any of the following types:

-   (`String`) The path to a service account key file in JSON format
-   (`Hash`) A service account key as a Hash
-   (`Google::Auth::Credentials`) A googleauth credentials object (see the [googleauth docs](https://rubydoc.info/gems/googleauth/Google/Auth/Credentials))
-   (`Signet::OAuth2::Client`) A signet oauth2 client object (see the [signet docs](https://rubydoc.info/gems/signet/Signet/OAuth2/Client))
-   (`nil`) indicating no credentials

Warning: If you accept a credential configuration (JSON file or Hash) from an external source for authentication to Google Cloud, you must validate it before providing it to a Google API client library. Providing an unvalidated credential configuration to Google APIs can compromise the security of your systems and data. For more information, refer to [Validate credential configurations from external sources](https://cloud.google.com/docs/authentication/external/externally-sourced-credentials).

**Returns**

-   (::Object)

### #credentials=

```
def credentials=(value) -> ::Object
```

Credentials to send with calls. You may provide any of the following types:

-   (`String`) The path to a service account key file in JSON format
-   (`Hash`) A service account key as a Hash
-   (`Google::Auth::Credentials`) A googleauth credentials object (see the [googleauth docs](https://rubydoc.info/gems/googleauth/Google/Auth/Credentials))
-   (`Signet::OAuth2::Client`) A signet oauth2 client object (see the [signet docs](https://rubydoc.info/gems/signet/Signet/OAuth2/Client))
-   (`nil`) indicating no credentials

Warning: If you accept a credential configuration (JSON file or Hash) from an external source for authentication to Google Cloud, you must validate it before providing it to a Google API client library. Providing an unvalidated credential configuration to Google APIs can compromise the security of your systems and data. For more information, refer to [Validate credential configurations from external sources](https://cloud.google.com/docs/authentication/external/externally-sourced-credentials).

**Parameter**

-   **value** (::Object)

**Returns**

-   (::Object)

### #endpoint

```
def endpoint() -> ::String, nil
```

A custom service endpoint, as a hostname or hostname:port. The default is nil, indicating to use the default endpoint in the current universe domain.

**Returns**

-   (::String, nil)

### #endpoint=

```
def endpoint=(value) -> ::String, nil
```

A custom service endpoint, as a hostname or hostname:port. The default is nil, indicating to use the default endpoint in the current universe domain.

**Parameter**

-   **value** (::String, nil)

**Returns**

-   (::String, nil)

### #lib\_name

```
def lib_name() -> ::String
```

The library name as recorded in instrumentation and logging

**Returns**

-   (::String)

### #lib\_name=

```
def lib_name=(value) -> ::String
```

The library name as recorded in instrumentation and logging

**Parameter**

-   **value** (::String)

**Returns**

-   (::String)

### #lib\_version

```
def lib_version() -> ::String
```

The library version as recorded in instrumentation and logging

**Returns**

-   (::String)

### #lib\_version=

```
def lib_version=(value) -> ::String
```

The library version as recorded in instrumentation and logging

**Parameter**

-   **value** (::String)

**Returns**

-   (::String)

### #logger

```
def logger() -> ::Logger, :default, nil
```

A custom logger to use for request/response debug logging, or the value `:default` (the default) to construct a default logger, or `nil` to explicitly disable logging.

**Returns**

-   (::Logger, :default, nil)

### #logger=

```
def logger=(value) -> ::Logger, :default, nil
```

A custom logger to use for request/response debug logging, or the value `:default` (the default) to construct a default logger, or `nil` to explicitly disable logging.

**Parameter**

-   **value** (::Logger, :default, nil)

**Returns**

-   (::Logger, :default, nil)

### #metadata

```
def metadata() -> ::Hash{::Symbol=>::String}
```

Additional headers to be sent with the call.

**Returns**

-   (::Hash{::Symbol=>::String})

### #metadata=

```
def metadata=(value) -> ::Hash{::Symbol=>::String}
```

Additional headers to be sent with the call.

**Parameter**

-   **value** (::Hash{::Symbol=>::String})

**Returns**

-   (::Hash{::Symbol=>::String})

### #quota\_project

```
def quota_project() -> ::String
```

A separate project against which to charge quota.

**Returns**

-   (::String)

### #quota\_project=

```
def quota_project=(value) -> ::String
```

A separate project against which to charge quota.

**Parameter**

-   **value** (::String)

**Returns**

-   (::String)

### #retry\_policy

```
def retry_policy() -> ::Hash
```

The retry policy. The value is a hash with the following keys:

-   `:initial_delay` (_type:_ `Numeric`) - The initial delay in seconds.
-   `:max_delay` (_type:_ `Numeric`) - The max delay in seconds.
-   `:multiplier` (_type:_ `Numeric`) - The incremental backoff multiplier.
-   `:retry_codes` (_type:_ `Array<String>`) - The error codes that should trigger a retry.

**Returns**

-   (::Hash)

### #retry\_policy=

```
def retry_policy=(value) -> ::Hash
```

The retry policy. The value is a hash with the following keys:

-   `:initial_delay` (_type:_ `Numeric`) - The initial delay in seconds.
-   `:max_delay` (_type:_ `Numeric`) - The max delay in seconds.
-   `:multiplier` (_type:_ `Numeric`) - The incremental backoff multiplier.
-   `:retry_codes` (_type:_ `Array<String>`) - The error codes that should trigger a retry.

**Parameter**

-   **value** (::Hash)

**Returns**

-   (::Hash)

### #rpcs

```
def rpcs() -> Rpcs
```

Configurations for individual RPCs

**Returns**

-   ([Rpcs](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-vpc_access-v1/1.2.0/Google-Cloud-VpcAccess-V1-VpcAccessService-Rest-Operations-Configuration-Rpcs))

### #scope

```
def scope() -> ::Array<::String>
```

The OAuth scopes

**Returns**

-   (::Array<::String>)

### #scope=

```
def scope=(value) -> ::Array<::String>
```

The OAuth scopes

**Parameter**

-   **value** (::Array<::String>)

**Returns**

-   (::Array<::String>)

### #timeout

```
def timeout() -> ::Numeric
```

The call timeout in seconds.

**Returns**

-   (::Numeric)

### #timeout=

```
def timeout=(value) -> ::Numeric
```

The call timeout in seconds.

**Parameter**

-   **value** (::Numeric)

**Returns**

-   (::Numeric)

### #universe\_domain

```
def universe_domain() -> ::String, nil
```

The universe domain within which to make requests. This determines the default endpoint URL. The default value of nil uses the environment universe (usually the default "googleapis.com" universe).

**Returns**

-   (::String, nil)

### #universe\_domain=

```
def universe_domain=(value) -> ::String, nil
```

The universe domain within which to make requests. This determines the default endpoint URL. The default value of nil uses the environment universe (usually the default "googleapis.com" universe).

**Parameter**

-   **value** (::String, nil)

**Returns**

-   (::String, nil)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
