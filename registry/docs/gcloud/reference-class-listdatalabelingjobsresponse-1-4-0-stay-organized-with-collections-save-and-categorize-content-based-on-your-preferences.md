-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ListDataLabelingJobsResponse (1.4.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class ListDataLabelingJobsResponse : IMessage<ListDataLabelingJobsResponse>, IEquatable<ListDataLabelingJobsResponse>, IDeepCloneable<ListDataLabelingJobsResponse>, IBufferMessage, IMessage, IPageResponse<DataLabelingJob>, IEnumerable<DataLabelingJob>, IEnumerable
```

Response message for \[JobService.ListDataLabelingJobs\]\[google.cloud.aiplatform.v1.JobService.ListDataLabelingJobs\].

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ListDataLabelingJobsResponse

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[ListDataLabelingJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.4.0/Google.Cloud.AIPlatform.V1.ListDataLabelingJobsResponse)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[ListDataLabelingJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.4.0/Google.Cloud.AIPlatform.V1.ListDataLabelingJobsResponse)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[ListDataLabelingJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.4.0/Google.Cloud.AIPlatform.V1.ListDataLabelingJobsResponse)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageResponse](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageResponse-1.html)<[DataLabelingJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.4.0/Google.Cloud.AIPlatform.V1.DataLabelingJob)\>, [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[DataLabelingJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.4.0/Google.Cloud.AIPlatform.V1.DataLabelingJob)\>, [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.4.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### ListDataLabelingJobsResponse()

```
public ListDataLabelingJobsResponse()
```

### ListDataLabelingJobsResponse(ListDataLabelingJobsResponse)

```
public ListDataLabelingJobsResponse(ListDataLabelingJobsResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListDataLabelingJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.4.0/Google.Cloud.AIPlatform.V1.ListDataLabelingJobsResponse)`  

## Properties

### DataLabelingJobs

```
public RepeatedField<DataLabelingJob> DataLabelingJobs { get; }
```

A list of DataLabelingJobs that matches the specified filter in the request.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[DataLabelingJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.4.0/Google.Cloud.AIPlatform.V1.DataLabelingJob)>`

### NextPageToken

```
public string NextPageToken { get; set; }
```

The standard List next-page token.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

## Methods

### GetEnumerator()

```
public IEnumerator<DataLabelingJob> GetEnumerator()
```

Returns an enumerator that iterates through the resources in this response.

**Returns**

**Type**

**Description**

`[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)<[DataLabelingJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.4.0/Google.Cloud.AIPlatform.V1.DataLabelingJob)>`

## Explicit Interface Implementations

### IEnumerable.GetEnumerator()

```
IEnumerator IEnumerable.GetEnumerator()
```

**Returns**

**Type**

**Description**

`[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.ienumerator)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
