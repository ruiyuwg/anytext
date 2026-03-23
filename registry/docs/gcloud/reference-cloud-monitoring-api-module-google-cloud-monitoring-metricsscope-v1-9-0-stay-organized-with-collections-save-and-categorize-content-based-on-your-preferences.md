-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Cloud Monitoring API - Module Google::Cloud::Monitoring::MetricsScope (v1.9.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.9.0keyboard\_arrow\_down

-   [1.9.3 (latest)](/ruby/docs/reference/google-cloud-monitoring/latest/Google-Cloud-Monitoring-MetricsScope)
-   [1.9.2](/ruby/docs/reference/google-cloud-monitoring/1.9.2/Google-Cloud-Monitoring-MetricsScope)
-   [1.8.3](/ruby/docs/reference/google-cloud-monitoring/1.8.3/Google-Cloud-Monitoring-MetricsScope)
-   [1.7.0](/ruby/docs/reference/google-cloud-monitoring/1.7.0/Google-Cloud-Monitoring-MetricsScope)
-   [1.6.1](/ruby/docs/reference/google-cloud-monitoring/1.6.1/Google-Cloud-Monitoring-MetricsScope)
-   [1.5.0](/ruby/docs/reference/google-cloud-monitoring/1.5.0/Google-Cloud-Monitoring-MetricsScope)
-   [1.4.1](/ruby/docs/reference/google-cloud-monitoring/1.4.1/Google-Cloud-Monitoring-MetricsScope)
-   [1.3.1](/ruby/docs/reference/google-cloud-monitoring/1.3.1/Google-Cloud-Monitoring-MetricsScope)

Reference documentation and code samples for the Cloud Monitoring API module Google::Cloud::Monitoring::MetricsScope.

## Methods

### .configure

```
def self.configure() -> ::Google::Cloud::Config
```

Configure the google-cloud-monitoring-metrics\_scope library.

The following configuration parameters are supported:

-   `credentials` (_type:_ `String, Hash, Google::Auth::Credentials`) - The path to the keyfile as a String, the contents of the keyfile as a Hash, or a Google::Auth::Credentials object.
-   `lib_name` (_type:_ `String`) - The library name as recorded in instrumentation and logging.
-   `lib_version` (_type:_ `String`) - The library version as recorded in instrumentation and logging.
-   `interceptors` (_type:_ `Array<GRPC::ClientInterceptor>`) - An array of interceptors that are run before calls are executed.
-   `timeout` (_type:_ `Numeric`) - Default timeout in seconds.
-   `metadata` (_type:_ `Hash{Symbol=>String}`) - Additional headers to be sent with the call.
-   `retry_policy` (_type:_ `Hash`) - The retry policy. The value is a hash with the following keys:
    -   `:initial_delay` (_type:_ `Numeric`) - The initial delay in seconds.
    -   `:max_delay` (_type:_ `Numeric`) - The max delay in seconds.
    -   `:multiplier` (_type:_ `Numeric`) - The incremental backoff multiplier.
    -   `:retry_codes` (_type:_ `Array<String>`) - The error codes that should trigger a retry.

**Yields**

-   (::Google::Cloud.configure.monitoring\_metrics\_scope)

**Returns**

-   (::Google::Cloud::Config) — The default configuration used by this library

### .metrics\_scopes

```
def self.metrics_scopes(version: :v1, &block) -> ::Object
```

Create a new client object for MetricsScopes.

By default, this returns an instance of [Google::Cloud::Monitoring::MetricsScope::V1::MetricsScopes::Client](https://cloud.google.com/ruby/docs/reference/google-cloud-monitoring-metrics_scope-v1/latest/Google-Cloud-Monitoring-MetricsScope-V1-MetricsScopes-Client) for a gRPC client for version V1 of the API. However, you can specify a different API version by passing it in the `version` parameter. If the MetricsScopes service is supported by that API version, and the corresponding gem is available, the appropriate versioned client will be returned.

Raises an exception if the currently installed versioned client gem for the given API version does not support the MetricsScopes service. You can determine whether the method will succeed by calling [MetricsScope.metrics\_scopes\_available?](/ruby/docs/reference/google-cloud-monitoring/1.9.0/Google-Cloud-Monitoring-MetricsScope#Google__Cloud__Monitoring__MetricsScope_metrics_scopes_available__class_ "Google::Cloud::Monitoring::MetricsScope.metrics_scopes_available? (method)").

#### About MetricsScopes

Manages Cloud Monitoring Metrics Scopes, and the monitoring of Google Cloud projects and AWS accounts.

**Parameter**

-   **version** (::String, ::Symbol) _(defaults to: :v1)_ — The API version to connect to. Optional. Defaults to `:v1`.

**Returns**

-   (::Object) — A client object for the specified version.

### .metrics\_scopes\_available?

```
def self.metrics_scopes_available?(version: :v1) -> boolean
```

Determines whether the MetricsScopes service is supported by the current client. If true, you can retrieve a client object by calling [MetricsScope.metrics\_scopes](/ruby/docs/reference/google-cloud-monitoring/1.9.0/Google-Cloud-Monitoring-MetricsScope#Google__Cloud__Monitoring__MetricsScope_metrics_scopes_class_ "Google::Cloud::Monitoring::MetricsScope.metrics_scopes (method)"). If false, that method will raise an exception. This could happen if the given API version does not exist or does not support the MetricsScopes service, or if the versioned client gem needs an update to support the MetricsScopes service.

**Parameter**

-   **version** (::String, ::Symbol) _(defaults to: :v1)_ — The API version to connect to. Optional. Defaults to `:v1`.

**Returns**

-   (boolean) — Whether the service is available.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
