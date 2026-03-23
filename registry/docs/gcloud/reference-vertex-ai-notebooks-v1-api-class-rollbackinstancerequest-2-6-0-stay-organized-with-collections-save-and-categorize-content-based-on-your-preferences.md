-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Vertex AI Notebooks v1 API - Class RollbackInstanceRequest (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/latest/Google.Cloud.Notebooks.V1.RollbackInstanceRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.5.0/Google.Cloud.Notebooks.V1.RollbackInstanceRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.4.0/Google.Cloud.Notebooks.V1.RollbackInstanceRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.3.0/Google.Cloud.Notebooks.V1.RollbackInstanceRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.2.0/Google.Cloud.Notebooks.V1.RollbackInstanceRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.1.0/Google.Cloud.Notebooks.V1.RollbackInstanceRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.0.0/Google.Cloud.Notebooks.V1.RollbackInstanceRequest)
-   [1.0.0-beta04](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/1.0.0-beta04/Google.Cloud.Notebooks.V1.RollbackInstanceRequest)

```
public sealed class RollbackInstanceRequest : IMessage<RollbackInstanceRequest>, IEquatable<RollbackInstanceRequest>, IDeepCloneable<RollbackInstanceRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Vertex AI Notebooks v1 API class RollbackInstanceRequest.

Request for rollbacking a notebook instance

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> RollbackInstanceRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[RollbackInstanceRequest](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/latest/Google.Cloud.Notebooks.V1.RollbackInstanceRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[RollbackInstanceRequest](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/latest/Google.Cloud.Notebooks.V1.RollbackInstanceRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[RollbackInstanceRequest](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/latest/Google.Cloud.Notebooks.V1.RollbackInstanceRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Notebooks.V1](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/latest/Google.Cloud.Notebooks.V1)

## Assembly

Google.Cloud.Notebooks.V1.dll

## Constructors

### RollbackInstanceRequest()

```
public RollbackInstanceRequest()
```

### RollbackInstanceRequest(RollbackInstanceRequest)

```
public RollbackInstanceRequest(RollbackInstanceRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[RollbackInstanceRequest](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/latest/Google.Cloud.Notebooks.V1.RollbackInstanceRequest)`  

## Properties

### Name

```
public string Name { get; set; }
```

Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### TargetSnapshot

```
public string TargetSnapshot { get; set; }
```

Required. The snapshot for rollback. Example: `projects/test-project/global/snapshots/krwlzipynril`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
