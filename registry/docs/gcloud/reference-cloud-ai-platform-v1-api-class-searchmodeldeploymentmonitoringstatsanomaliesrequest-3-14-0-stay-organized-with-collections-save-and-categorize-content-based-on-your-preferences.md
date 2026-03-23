-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud AI Platform v1 API - Class SearchModelDeploymentMonitoringStatsAnomaliesRequest (3.14.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class SearchModelDeploymentMonitoringStatsAnomaliesRequest : IMessage<SearchModelDeploymentMonitoringStatsAnomaliesRequest>, IEquatable<SearchModelDeploymentMonitoringStatsAnomaliesRequest>, IDeepCloneable<SearchModelDeploymentMonitoringStatsAnomaliesRequest>, IBufferMessage, IMessage, IPageRequest
```

Reference documentation and code samples for the Cloud AI Platform v1 API class SearchModelDeploymentMonitoringStatsAnomaliesRequest.

Request message for \[JobService.SearchModelDeploymentMonitoringStatsAnomalies\]\[google.cloud.aiplatform.v1.JobService.SearchModelDeploymentMonitoringStatsAnomalies\].

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> SearchModelDeploymentMonitoringStatsAnomaliesRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[SearchModelDeploymentMonitoringStatsAnomaliesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.SearchModelDeploymentMonitoringStatsAnomaliesRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[SearchModelDeploymentMonitoringStatsAnomaliesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.SearchModelDeploymentMonitoringStatsAnomaliesRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[SearchModelDeploymentMonitoringStatsAnomaliesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.SearchModelDeploymentMonitoringStatsAnomaliesRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageRequest](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageRequest.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### SearchModelDeploymentMonitoringStatsAnomaliesRequest()

```
public SearchModelDeploymentMonitoringStatsAnomaliesRequest()
```

### SearchModelDeploymentMonitoringStatsAnomaliesRequest(SearchModelDeploymentMonitoringStatsAnomaliesRequest)

```
public SearchModelDeploymentMonitoringStatsAnomaliesRequest(SearchModelDeploymentMonitoringStatsAnomaliesRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[SearchModelDeploymentMonitoringStatsAnomaliesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.SearchModelDeploymentMonitoringStatsAnomaliesRequest)`  

## Properties

### DeployedModelId

```
public string DeployedModelId { get; set; }
```

Required. The DeployedModel ID of the \[ModelDeploymentMonitoringObjectiveConfig.deployed\_model\_id\].

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### EndTime

```
public Timestamp EndTime { get; set; }
```

The latest timestamp of stats being generated. If not set, indicates feching stats till the latest possible one.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### FeatureDisplayName

```
public string FeatureDisplayName { get; set; }
```

The feature display name. If specified, only return the stats belonging to this feature. Format: \[ModelMonitoringStatsAnomalies.FeatureHistoricStatsAnomalies.feature\_display\_name\]\[google.cloud.aiplatform.v1.ModelMonitoringStatsAnomalies.FeatureHistoricStatsAnomalies.feature\_display\_name\], example: "user\_destination".

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ModelDeploymentMonitoringJob

```
public string ModelDeploymentMonitoringJob { get; set; }
```

Required. ModelDeploymentMonitoring Job resource name. Format: `projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ModelDeploymentMonitoringJobAsModelDeploymentMonitoringJobName

```
public ModelDeploymentMonitoringJobName ModelDeploymentMonitoringJobAsModelDeploymentMonitoringJobName { get; set; }
```

[ModelDeploymentMonitoringJobName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.ModelDeploymentMonitoringJobName)\-typed view over the [ModelDeploymentMonitoringJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.SearchModelDeploymentMonitoringStatsAnomaliesRequest#Google_Cloud_AIPlatform_V1_SearchModelDeploymentMonitoringStatsAnomaliesRequest_ModelDeploymentMonitoringJob) resource name property.

**Property Value**

**Type**

**Description**

`[ModelDeploymentMonitoringJobName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.ModelDeploymentMonitoringJobName)`

### Objectives

```
public RepeatedField<SearchModelDeploymentMonitoringStatsAnomaliesRequest.Types.StatsAnomaliesObjective> Objectives { get; }
```

Required. Objectives of the stats to retrieve.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[SearchModelDeploymentMonitoringStatsAnomaliesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.SearchModelDeploymentMonitoringStatsAnomaliesRequest)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.SearchModelDeploymentMonitoringStatsAnomaliesRequest.Types)[StatsAnomaliesObjective](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.SearchModelDeploymentMonitoringStatsAnomaliesRequest.Types.StatsAnomaliesObjective)`

### PageSize

```
public int PageSize { get; set; }
```

The standard list page size.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### PageToken

```
public string PageToken { get; set; }
```

A page token received from a previous \[JobService.SearchModelDeploymentMonitoringStatsAnomalies\]\[google.cloud.aiplatform.v1.JobService.SearchModelDeploymentMonitoringStatsAnomalies\] call.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### StartTime

```
public Timestamp StartTime { get; set; }
```

The earliest timestamp of stats being generated. If not set, indicates fetching stats till the earliest possible one.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
