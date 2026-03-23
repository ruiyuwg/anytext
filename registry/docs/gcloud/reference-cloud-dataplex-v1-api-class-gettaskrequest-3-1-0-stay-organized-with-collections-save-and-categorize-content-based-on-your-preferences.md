-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Dataplex v1 API - Class GetTaskRequest (3.1.0) Stay organized with collections Save and categorize content based on your preferences.

3.13.0 (latest) 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.0.0

```
public sealed class GetTaskRequest : IMessage<GetTaskRequest>, IEquatable<GetTaskRequest>, IDeepCloneable<GetTaskRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud Dataplex v1 API class GetTaskRequest.

Get task request.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> GetTaskRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[GetTaskRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.1.0/Google.Cloud.Dataplex.V1.GetTaskRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[GetTaskRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.1.0/Google.Cloud.Dataplex.V1.GetTaskRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[GetTaskRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.1.0/Google.Cloud.Dataplex.V1.GetTaskRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Dataplex.V1](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.1.0/Google.Cloud.Dataplex.V1)

## Assembly

Google.Cloud.Dataplex.V1.dll

## Constructors

### GetTaskRequest()

```
public GetTaskRequest()
```

### GetTaskRequest(GetTaskRequest)

```
public GetTaskRequest(GetTaskRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[GetTaskRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.1.0/Google.Cloud.Dataplex.V1.GetTaskRequest)`  

## Properties

### Name

```
public string Name { get; set; }
```

Required. The resource name of the task: `projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{tasks_id}`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### TaskName

```
public TaskName TaskName { get; set; }
```

[TaskName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.1.0/Google.Cloud.Dataplex.V1.TaskName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.1.0/Google.Cloud.Dataplex.V1.GetTaskRequest#Google_Cloud_Dataplex_V1_GetTaskRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[TaskName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.1.0/Google.Cloud.Dataplex.V1.TaskName)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
