-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Notebooks v2 API - Class UpgradeInstanceRequest (1.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.1.0keyboard\_arrow\_down

-   [1.3.0 (latest)](/dotnet/docs/reference/Google.Cloud.Notebooks.V2/latest/Google.Cloud.Notebooks.V2.UpgradeInstanceRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V2/1.2.0/Google.Cloud.Notebooks.V2.UpgradeInstanceRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V2/1.1.0/Google.Cloud.Notebooks.V2.UpgradeInstanceRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V2/1.0.0/Google.Cloud.Notebooks.V2.UpgradeInstanceRequest)

```
public sealed class UpgradeInstanceRequest : IMessage<UpgradeInstanceRequest>, IEquatable<UpgradeInstanceRequest>, IDeepCloneable<UpgradeInstanceRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Notebooks v2 API class UpgradeInstanceRequest.

Request for upgrading a notebook instance

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> UpgradeInstanceRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[UpgradeInstanceRequest](/dotnet/docs/reference/Google.Cloud.Notebooks.V2/1.1.0/Google.Cloud.Notebooks.V2.UpgradeInstanceRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[UpgradeInstanceRequest](/dotnet/docs/reference/Google.Cloud.Notebooks.V2/1.1.0/Google.Cloud.Notebooks.V2.UpgradeInstanceRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[UpgradeInstanceRequest](/dotnet/docs/reference/Google.Cloud.Notebooks.V2/1.1.0/Google.Cloud.Notebooks.V2.UpgradeInstanceRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Notebooks.V2](/dotnet/docs/reference/Google.Cloud.Notebooks.V2/1.1.0/Google.Cloud.Notebooks.V2)

## Assembly

Google.Cloud.Notebooks.V2.dll

## Constructors

### UpgradeInstanceRequest()

```
public UpgradeInstanceRequest()
```

### UpgradeInstanceRequest(UpgradeInstanceRequest)

```
public UpgradeInstanceRequest(UpgradeInstanceRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[UpgradeInstanceRequest](/dotnet/docs/reference/Google.Cloud.Notebooks.V2/1.1.0/Google.Cloud.Notebooks.V2.UpgradeInstanceRequest)`  

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

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
