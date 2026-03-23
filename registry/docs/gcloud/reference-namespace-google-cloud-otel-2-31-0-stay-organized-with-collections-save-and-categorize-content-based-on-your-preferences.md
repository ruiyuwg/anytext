-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Namespace google::cloud::otel (2.31.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0

## Classes

### [BasicTracingConfiguration](/cpp/docs/reference/opentelemetry/2.31.0/classgoogle_1_1cloud_1_1otel_1_1BasicTracingConfiguration)

Implementation details for `ConfigureBasicTracing`.

## Structs

### [BasicTracingRateOption](/cpp/docs/reference/opentelemetry/2.31.0/structgoogle_1_1cloud_1_1otel_1_1BasicTracingRateOption)

Configure the tracing rate for basic tracing.

### [MetricNameFormatterOption](/cpp/docs/reference/opentelemetry/2.31.0/structgoogle_1_1cloud_1_1otel_1_1MetricNameFormatterOption)

Change formatting for metric names.

### [MonitoredResourceOption](/cpp/docs/reference/opentelemetry/2.31.0/structgoogle_1_1cloud_1_1otel_1_1MonitoredResourceOption)

Override the monitored resource to tie metrics to.

### [ServiceTimeSeriesOption](/cpp/docs/reference/opentelemetry/2.31.0/structgoogle_1_1cloud_1_1otel_1_1ServiceTimeSeriesOption)

Export Google-defined metrics.

## Functions

### ConfigureBasicTracing(Project, Options)

Configure the application for basic request tracing.

This function configures basic request tracing to [Cloud Trace](https://cloud.google.com/trace). The `google-cloud-cpp` libraries use [OpenTelemetry](https://opentelemetry.io) to provide observability into their operation at runtime.

You do not need to add OpenTelemetry instrumentation to your code. The C++ client libraries are already instrumented and all sampled RPCs will be sent to Cloud Trace. However, you may want to add instrumentation if multiple RPCs are performed as part of a single logical "operation" in your application.

OpenTelemetry traces, including those reported by the C++ client libraries start as soon as this function returns. Tracing stops when the object returned by this function is deleted.

OpenTelemetry is very configurable, supporting different sampling rates and filters, multiple "exporters" to send the collected data to different services, and multiple mechanisms to chain requests as they move from one program to the next. We do not expect this function will meet the needs of all applications. However, some applications will want a basic configuration that works with Gooogle Cloud Trace.

This function uses the [OpenTelemetry C++ API](https://opentelemetry-cpp.readthedocs.io/en/latest/) to change the global trace provider (`opentelemetry::trace::Provider::#SetTraceProvider()`). Do not use this function if your application needs fine control over OpenTelemetry settings.

**Note:** If you are using CMake as your build system, OpenTelemetry is not enabled by default in `google-cloud-cpp`. Please consult the build documentation to enable the additional libraries.

###### Usage Example

Change your build scripts to also build and link the library that provides this function, as described in this library's [quickstart](https://github.com/googleapis/google-cloud-cpp/blob/main/google/cloud/opentelemetry/quickstart/README.md#opentelemetry-dependency).

Change your application to call this function once, for example in `main()` as follows:

```
#include <google/cloud/opentelemetry/configure_basic_tracing.h>

...

int main(...) {
...
  auto tracing_project = std::string([TRACING PROJECT]);
  auto tracing = google::cloud::opentelemetry::ConfigureBasicTracing(
      google::cloud::Project(tracing_project));
}
```

Where `[TRACING PROJECT]` is the project id where you want to store the traces.

###### Permissions

The principal (user or service account) running your application will need `cloud.traces.patch` permissions on the project where you send the traces. These permissions are typically granted as part of the `roles/cloudtrace.agent` role. If the principal configured in your [Application Default Credentials](https://cloud.google.com/docs/authentication#adc) does not have these permissions you will need to provide a different set of credentials:

```
auto credentials = google::cloud::MakeServiceAccountCredentials(...);
auto tracing = google::cloud::opentelemetry::ConfigureBasicTracing(
    google::cloud::Project(tracing_project),
    google::cloud::Options{}
        .set<google::cloud::UnifiedCredentialsOption>(credentials));
```

###### Sampling Rate

By default this function configures the application to trace all requests. This is useful for troubleshooting, but it is excessive if you want to enable tracing by default and use the results to gather latency statistics. To reduce the sampling rate use `@ref`[`BasicTracingRateOption`](/cpp/docs/reference/opentelemetry/2.31.0/structgoogle_1_1cloud_1_1otel_1_1BasicTracingRateOption). If desired, you can use an environment variable (or any other configuration source) to initialize its value.

  ```
  namespace gc = ::google::cloud;
  [](std::string project_id) {
    auto project = gc::Project(std::move(project_id));
    auto options = gc::Options{}.set<gc::otel::BasicTracingRateOption>(.001);
    auto configuration = gc::otel::ConfigureBasicTracing(project, options);

    MyApplicationCode();
  }
```

###### Troubleshooting

By design, OpenTelemetry exporters fail silently. To troubleshoot problems, [enable logging](https://cloud.google.com/cpp/docs/reference/common/latest/logging#enabling-logs) in the client library. Errors during the export are logged at a WARNING level.

Look through the logs for mentions of "BatchWriteSpans". These mentions are likely accompanied by actionable error messages.

If "BatchWriteSpans" is not mentioned in the logs, the client library did not attempt to export any traces. In this case, check that the project ID is not empty and that the sample rate is high enough. Also ensure that OpenTelemetry tracing is enabled in the library.

See also: [https://cloud.google.com/trace/docs/troubleshooting#no-data](https://cloud.google.com/trace/docs/troubleshooting#no-data)

###### See Also

[https://cloud.google.com/trace/docs/iam](https://cloud.google.com/trace/docs/iam) for more information about IAM permissions for Cloud Trace.

**Parameters**

**Name**

**Description**

`project`

  

the project to send the traces to.

`options`

  

how to configure the traces. The configuration parameters include `@ref`[`BasicTracingRateOption`](/cpp/docs/reference/opentelemetry/2.31.0/structgoogle_1_1cloud_1_1otel_1_1BasicTracingRateOption), `@ref`[`google::cloud::UnifiedCredentialsOption`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1UnifiedCredentialsOption.html).

**Returns**

**Type**

**Description**

`std::unique_ptr< BasicTracingConfiguration >`

### MakeMonitoringExporter(Project, std::shared\_ptr< monitoring\_v3::MetricServiceConnection >, Options)

**Parameters**

**Name**

**Description**

`project`

  

`conn`

  

`options`

  

**Returns**

**Type**

**Description**

`std::unique_ptr< opentelemetry::sdk::metrics::PushMetricExporter >`

### MakeResourceDetector()

Make an OpenTelemetry Resource Detector for Google Cloud Platform.

**Returns**

**Type**

**Description**

`std::unique_ptr< opentelemetry::sdk::resource::ResourceDetector >`

### MakeTraceExporter(Project, Options)

Make an OpenTelemetry Trace Exporter for Google Cloud Trace.

**Parameters**

**Name**

**Description**

`project`

  

`options`

  

**Returns**

**Type**

**Description**

`std::unique_ptr< opentelemetry::sdk::trace::SpanExporter >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
