-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# API hub v1 API - Class DeleteDependencyRequest (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.2.0 (latest)](/dotnet/docs/reference/Google.Cloud.ApiHub.V1/latest/Google.Cloud.ApiHub.V1.DeleteDependencyRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.ApiHub.V1/1.1.0/Google.Cloud.ApiHub.V1.DeleteDependencyRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.ApiHub.V1/1.0.0/Google.Cloud.ApiHub.V1.DeleteDependencyRequest)

```
public sealed class DeleteDependencyRequest : IMessage<DeleteDependencyRequest>, IEquatable<DeleteDependencyRequest>, IDeepCloneable<DeleteDependencyRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the API hub v1 API class DeleteDependencyRequest.

The \[DeleteDependency\]\[google.cloud.apihub.v1.ApiHubDependencies.DeleteDependency\] method's request.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> DeleteDependencyRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[DeleteDependencyRequest](/dotnet/docs/reference/Google.Cloud.ApiHub.V1/latest/Google.Cloud.ApiHub.V1.DeleteDependencyRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[DeleteDependencyRequest](/dotnet/docs/reference/Google.Cloud.ApiHub.V1/latest/Google.Cloud.ApiHub.V1.DeleteDependencyRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[DeleteDependencyRequest](/dotnet/docs/reference/Google.Cloud.ApiHub.V1/latest/Google.Cloud.ApiHub.V1.DeleteDependencyRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.ApiHub.V1](/dotnet/docs/reference/Google.Cloud.ApiHub.V1/latest/Google.Cloud.ApiHub.V1)

## Assembly

Google.Cloud.ApiHub.V1.dll

## Constructors

### DeleteDependencyRequest()

```
public DeleteDependencyRequest()
```

### DeleteDependencyRequest(DeleteDependencyRequest)

```
public DeleteDependencyRequest(DeleteDependencyRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[DeleteDependencyRequest](/dotnet/docs/reference/Google.Cloud.ApiHub.V1/latest/Google.Cloud.ApiHub.V1.DeleteDependencyRequest)`  

## Properties

### DependencyName

```
public DependencyName DependencyName { get; set; }
```

[DependencyName](/dotnet/docs/reference/Google.Cloud.ApiHub.V1/latest/Google.Cloud.ApiHub.V1.DependencyName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.ApiHub.V1/latest/Google.Cloud.ApiHub.V1.DeleteDependencyRequest#Google_Cloud_ApiHub_V1_DeleteDependencyRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[DependencyName](/dotnet/docs/reference/Google.Cloud.ApiHub.V1/latest/Google.Cloud.ApiHub.V1.DependencyName)`

### Name

```
public string Name { get; set; }
```

Required. The name of the dependency resource to delete. Format: `projects/{project}/locations/{location}/dependencies/{dependency}`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
