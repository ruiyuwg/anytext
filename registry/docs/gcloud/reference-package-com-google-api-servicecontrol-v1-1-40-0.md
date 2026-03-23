-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.1.10

# Package com.google.api.servicecontrol.v1 (1.40.0)

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-service-control/google-cloud-service-control/src/main/java/com/google/api/servicecontrol/v1)

## This package is not the latest GA version!

For this library, we recommend using the [package](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v2) associated with API version v2 for new applications.

## Client Classes

Client classes are the main entry point to using a package. They contain several variations of Java methods for each of the API's methods.

Client

Description

[com.google.api.servicecontrol.v1.QuotaControllerClient](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.QuotaControllerClient)

Service Description: [Google Quota Control API](/service-control/overview)

Allows clients to allocate and release quota against a [managed service](https://cloud.google.com/service-management/reference/rpc/google.api/servicemanagement.v1#google.api.servicemanagement.v1.ManagedService).

[com.google.api.servicecontrol.v1.ServiceControllerClient](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.ServiceControllerClient)

Service Description: [Google Service Control API](/service-control/overview)

Lets clients check and report operations against a [managed service](https://cloud.google.com/service-management/reference/rpc/google.api/servicemanagement.v1#google.api.servicemanagement.v1.ManagedService).

## Settings Classes

Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.

Settings

Description

[com.google.api.servicecontrol.v1.QuotaControllerSettings](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.QuotaControllerSettings)

Settings class to configure an instance of QuotaControllerClient.

The default instance has everything set to sensible defaults:

[com.google.api.servicecontrol.v1.ServiceControllerSettings](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.ServiceControllerSettings)

Settings class to configure an instance of ServiceControllerClient.

The default instance has everything set to sensible defaults:

## Classes

Class

Description

[com.google.api.servicecontrol.v1.AllocateQuotaRequest](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.AllocateQuotaRequest)

Request message for the AllocateQuota method.

[com.google.api.servicecontrol.v1.AllocateQuotaRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.AllocateQuotaRequest.Builder)

Request message for the AllocateQuota method.

[com.google.api.servicecontrol.v1.AllocateQuotaResponse](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.AllocateQuotaResponse)

Response message for the AllocateQuota method.

[com.google.api.servicecontrol.v1.AllocateQuotaResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.AllocateQuotaResponse.Builder)

Response message for the AllocateQuota method.

[com.google.api.servicecontrol.v1.CheckError](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckError)

Defines the errors to be returned in google.api.servicecontrol.v1.CheckResponse.check\_errors.

[com.google.api.servicecontrol.v1.CheckError.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckError.Builder)

Defines the errors to be returned in google.api.servicecontrol.v1.CheckResponse.check\_errors.

[com.google.api.servicecontrol.v1.CheckErrorProto](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckErrorProto)

[com.google.api.servicecontrol.v1.CheckRequest](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckRequest)

Request message for the Check method.

[com.google.api.servicecontrol.v1.CheckRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckRequest.Builder)

Request message for the Check method.

[com.google.api.servicecontrol.v1.CheckResponse](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckResponse)

Response message for the Check method.

[com.google.api.servicecontrol.v1.CheckResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckResponse.Builder)

Response message for the Check method.

[com.google.api.servicecontrol.v1.CheckResponse.CheckInfo](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckResponse.CheckInfo)

Contains additional information about the check operation.

[com.google.api.servicecontrol.v1.CheckResponse.CheckInfo.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckResponse.CheckInfo.Builder)

Contains additional information about the check operation.

[com.google.api.servicecontrol.v1.CheckResponse.ConsumerInfo](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckResponse.ConsumerInfo)

`ConsumerInfo` provides information about the consumer.

[com.google.api.servicecontrol.v1.CheckResponse.ConsumerInfo.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckResponse.ConsumerInfo.Builder)

`ConsumerInfo` provides information about the consumer.

[com.google.api.servicecontrol.v1.Distribution](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.Distribution)

Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information:

[com.google.api.servicecontrol.v1.Distribution.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.Distribution.Builder)

Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information:

[com.google.api.servicecontrol.v1.Distribution.ExplicitBuckets](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.Distribution.ExplicitBuckets)

Describing buckets with arbitrary user-provided width.

[com.google.api.servicecontrol.v1.Distribution.ExplicitBuckets.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.Distribution.ExplicitBuckets.Builder)

Describing buckets with arbitrary user-provided width.

[com.google.api.servicecontrol.v1.Distribution.ExponentialBuckets](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.Distribution.ExponentialBuckets)

Describing buckets with exponentially growing width.

[com.google.api.servicecontrol.v1.Distribution.ExponentialBuckets.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.Distribution.ExponentialBuckets.Builder)

Describing buckets with exponentially growing width.

[com.google.api.servicecontrol.v1.Distribution.LinearBuckets](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.Distribution.LinearBuckets)

Describing buckets with constant width.

[com.google.api.servicecontrol.v1.Distribution.LinearBuckets.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.Distribution.LinearBuckets.Builder)

Describing buckets with constant width.

[com.google.api.servicecontrol.v1.DistributionProto](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.DistributionProto)

[com.google.api.servicecontrol.v1.HttpRequest](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.HttpRequest)

A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.

[com.google.api.servicecontrol.v1.HttpRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.HttpRequest.Builder)

A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.

[com.google.api.servicecontrol.v1.HttpRequestProto](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.HttpRequestProto)

[com.google.api.servicecontrol.v1.LogEntry](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.LogEntry)

An individual log entry.

[com.google.api.servicecontrol.v1.LogEntry.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.LogEntry.Builder)

An individual log entry.

[com.google.api.servicecontrol.v1.LogEntryOperation](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.LogEntryOperation)

Additional information about a potentially long-running operation with which a log entry is associated.

[com.google.api.servicecontrol.v1.LogEntryOperation.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.LogEntryOperation.Builder)

Additional information about a potentially long-running operation with which a log entry is associated.

[com.google.api.servicecontrol.v1.LogEntryProto](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.LogEntryProto)

[com.google.api.servicecontrol.v1.LogEntrySourceLocation](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.LogEntrySourceLocation)

Additional information about the source code location that produced the log entry.

[com.google.api.servicecontrol.v1.LogEntrySourceLocation.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.LogEntrySourceLocation.Builder)

Additional information about the source code location that produced the log entry.

[com.google.api.servicecontrol.v1.MetricValue](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.MetricValue)

Represents a single metric value.

[com.google.api.servicecontrol.v1.MetricValue.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.MetricValue.Builder)

Represents a single metric value.

[com.google.api.servicecontrol.v1.MetricValueSet](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.MetricValueSet)

Represents a set of metric values in the same metric. Each metric value in the set should have a unique combination of start time, end time, and label values.

[com.google.api.servicecontrol.v1.MetricValueSet.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.MetricValueSet.Builder)

Represents a set of metric values in the same metric. Each metric value in the set should have a unique combination of start time, end time, and label values.

[com.google.api.servicecontrol.v1.MetricValueSetProto](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.MetricValueSetProto)

[com.google.api.servicecontrol.v1.Operation](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.Operation)

Represents information regarding an operation.

[com.google.api.servicecontrol.v1.Operation.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.Operation.Builder)

Represents information regarding an operation.

[com.google.api.servicecontrol.v1.OperationProto](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.OperationProto)

[com.google.api.servicecontrol.v1.QuotaControllerGrpc](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.QuotaControllerGrpc)

[Google Quota Control API](/service-control/overview) Allows clients to allocate and release quota against a [managed service](https://cloud.google.com/service-management/reference/rpc/google.api/servicemanagement.v1#google.api.servicemanagement.v1.ManagedService).

[com.google.api.servicecontrol.v1.QuotaControllerGrpc.QuotaControllerImplBase](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.QuotaControllerGrpc.QuotaControllerImplBase)

Base class for the server implementation of the service QuotaController. [Google Quota Control API](/service-control/overview)

[com.google.api.servicecontrol.v1.QuotaControllerProto](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.QuotaControllerProto)

[com.google.api.servicecontrol.v1.QuotaControllerSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.QuotaControllerSettings.Builder)

Builder for QuotaControllerSettings.

[com.google.api.servicecontrol.v1.QuotaError](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.QuotaError)

Represents error information for QuotaOperation.

[com.google.api.servicecontrol.v1.QuotaError.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.QuotaError.Builder)

Represents error information for QuotaOperation.

[com.google.api.servicecontrol.v1.QuotaOperation](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.QuotaOperation)

Represents information regarding a quota operation.

[com.google.api.servicecontrol.v1.QuotaOperation.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.QuotaOperation.Builder)

Represents information regarding a quota operation.

[com.google.api.servicecontrol.v1.ReportRequest](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.ReportRequest)

Request message for the Report method.

[com.google.api.servicecontrol.v1.ReportRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.ReportRequest.Builder)

Request message for the Report method.

[com.google.api.servicecontrol.v1.ReportResponse](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.ReportResponse)

Response message for the Report method.

[com.google.api.servicecontrol.v1.ReportResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.ReportResponse.Builder)

Response message for the Report method.

[com.google.api.servicecontrol.v1.ReportResponse.ReportError](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.ReportResponse.ReportError)

Represents the processing error of one Operation in the request.

[com.google.api.servicecontrol.v1.ReportResponse.ReportError.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.ReportResponse.ReportError.Builder)

Represents the processing error of one Operation in the request.

[com.google.api.servicecontrol.v1.ServiceControllerGrpc](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.ServiceControllerGrpc)

[Google Service Control API](/service-control/overview) Lets clients check and report operations against a [managed service](https://cloud.google.com/service-management/reference/rpc/google.api/servicemanagement.v1#google.api.servicemanagement.v1.ManagedService).

[com.google.api.servicecontrol.v1.ServiceControllerGrpc.ServiceControllerImplBase](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.ServiceControllerGrpc.ServiceControllerImplBase)

Base class for the server implementation of the service ServiceController. [Google Service Control API](/service-control/overview)

[com.google.api.servicecontrol.v1.ServiceControllerProto](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.ServiceControllerProto)

[com.google.api.servicecontrol.v1.ServiceControllerSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.ServiceControllerSettings.Builder)

Builder for ServiceControllerSettings.

## Interfaces

Interface

Description

[com.google.api.servicecontrol.v1.AllocateQuotaRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.AllocateQuotaRequestOrBuilder)

[com.google.api.servicecontrol.v1.AllocateQuotaResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.AllocateQuotaResponseOrBuilder)

[com.google.api.servicecontrol.v1.CheckErrorOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckErrorOrBuilder)

[com.google.api.servicecontrol.v1.CheckRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckRequestOrBuilder)

[com.google.api.servicecontrol.v1.CheckResponse.CheckInfoOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckResponse.CheckInfoOrBuilder)

[com.google.api.servicecontrol.v1.CheckResponse.ConsumerInfoOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckResponse.ConsumerInfoOrBuilder)

[com.google.api.servicecontrol.v1.CheckResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckResponseOrBuilder)

[com.google.api.servicecontrol.v1.Distribution.ExplicitBucketsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.Distribution.ExplicitBucketsOrBuilder)

[com.google.api.servicecontrol.v1.Distribution.ExponentialBucketsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.Distribution.ExponentialBucketsOrBuilder)

[com.google.api.servicecontrol.v1.Distribution.LinearBucketsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.Distribution.LinearBucketsOrBuilder)

[com.google.api.servicecontrol.v1.DistributionOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.DistributionOrBuilder)

[com.google.api.servicecontrol.v1.HttpRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.HttpRequestOrBuilder)

[com.google.api.servicecontrol.v1.LogEntryOperationOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.LogEntryOperationOrBuilder)

[com.google.api.servicecontrol.v1.LogEntryOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.LogEntryOrBuilder)

[com.google.api.servicecontrol.v1.LogEntrySourceLocationOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.LogEntrySourceLocationOrBuilder)

[com.google.api.servicecontrol.v1.MetricValueOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.MetricValueOrBuilder)

[com.google.api.servicecontrol.v1.MetricValueSetOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.MetricValueSetOrBuilder)

[com.google.api.servicecontrol.v1.OperationOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.OperationOrBuilder)

[com.google.api.servicecontrol.v1.QuotaControllerGrpc.AsyncService](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.QuotaControllerGrpc.AsyncService)

[Google Quota Control API](/service-control/overview) Allows clients to allocate and release quota against a [managed service](https://cloud.google.com/service-management/reference/rpc/google.api/servicemanagement.v1#google.api.servicemanagement.v1.ManagedService).

[com.google.api.servicecontrol.v1.QuotaErrorOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.QuotaErrorOrBuilder)

[com.google.api.servicecontrol.v1.QuotaOperationOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.QuotaOperationOrBuilder)

[com.google.api.servicecontrol.v1.ReportRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.ReportRequestOrBuilder)

[com.google.api.servicecontrol.v1.ReportResponse.ReportErrorOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.ReportResponse.ReportErrorOrBuilder)

[com.google.api.servicecontrol.v1.ReportResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.ReportResponseOrBuilder)

[com.google.api.servicecontrol.v1.ServiceControllerGrpc.AsyncService](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.ServiceControllerGrpc.AsyncService)

[Google Service Control API](/service-control/overview) Lets clients check and report operations against a [managed service](https://cloud.google.com/service-management/reference/rpc/google.api/servicemanagement.v1#google.api.servicemanagement.v1.ManagedService).

## Enums

Enum

Description

[com.google.api.servicecontrol.v1.CheckError.Code](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckError.Code)

Error codes for Check responses.

[com.google.api.servicecontrol.v1.CheckResponse.ConsumerInfo.ConsumerType](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.CheckResponse.ConsumerInfo.ConsumerType)

The type of the consumer as defined in [Google Resource Manager](https://cloud.google.com/resource-manager/).

[com.google.api.servicecontrol.v1.Distribution.BucketOptionCase](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.Distribution.BucketOptionCase)

[com.google.api.servicecontrol.v1.LogEntry.PayloadCase](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.LogEntry.PayloadCase)

[com.google.api.servicecontrol.v1.MetricValue.ValueCase](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.MetricValue.ValueCase)

[com.google.api.servicecontrol.v1.Operation.Importance](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.Operation.Importance)

Defines the importance of the data contained in the operation.

[com.google.api.servicecontrol.v1.QuotaError.Code](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.QuotaError.Code)

Error codes related to project config validations are deprecated since the quota controller methods do not perform these validations. Instead services have to call the Check method, without quota\_properties field, to perform

[com.google.api.servicecontrol.v1.QuotaOperation.QuotaMode](https://cloud.google.com/java/docs/reference/google-cloud-service-control/latest/com.google.api.servicecontrol.v1.QuotaOperation.QuotaMode)

Supported quota modes.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
