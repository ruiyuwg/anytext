-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Infrastructure Manager v1 API - Class ResourceCAIInfo (1.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.3.0keyboard\_arrow\_down

-   [1.11.0 (latest)](/dotnet/docs/reference/Google.Cloud.Config.V1/latest/Google.Cloud.Config.V1.ResourceCAIInfo)
-   [1.10.0](/dotnet/docs/reference/Google.Cloud.Config.V1/1.10.0/Google.Cloud.Config.V1.ResourceCAIInfo)
-   [1.9.0](/dotnet/docs/reference/Google.Cloud.Config.V1/1.9.0/Google.Cloud.Config.V1.ResourceCAIInfo)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.Config.V1/1.8.0/Google.Cloud.Config.V1.ResourceCAIInfo)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.Config.V1/1.7.0/Google.Cloud.Config.V1.ResourceCAIInfo)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.Config.V1/1.6.0/Google.Cloud.Config.V1.ResourceCAIInfo)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.Config.V1/1.5.0/Google.Cloud.Config.V1.ResourceCAIInfo)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Config.V1/1.4.0/Google.Cloud.Config.V1.ResourceCAIInfo)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Config.V1/1.3.0/Google.Cloud.Config.V1.ResourceCAIInfo)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Config.V1/1.2.0/Google.Cloud.Config.V1.ResourceCAIInfo)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Config.V1/1.1.0/Google.Cloud.Config.V1.ResourceCAIInfo)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Config.V1/1.0.0/Google.Cloud.Config.V1.ResourceCAIInfo)

```
public sealed class ResourceCAIInfo : IMessage<ResourceCAIInfo>, IEquatable<ResourceCAIInfo>, IDeepCloneable<ResourceCAIInfo>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Infrastructure Manager v1 API class ResourceCAIInfo.

CAI info of a Resource.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ResourceCAIInfo

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ResourceCAIInfo](/dotnet/docs/reference/Google.Cloud.Config.V1/1.3.0/Google.Cloud.Config.V1.ResourceCAIInfo), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ResourceCAIInfo](/dotnet/docs/reference/Google.Cloud.Config.V1/1.3.0/Google.Cloud.Config.V1.ResourceCAIInfo), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ResourceCAIInfo](/dotnet/docs/reference/Google.Cloud.Config.V1/1.3.0/Google.Cloud.Config.V1.ResourceCAIInfo), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Config.V1](/dotnet/docs/reference/Google.Cloud.Config.V1/1.3.0/Google.Cloud.Config.V1)

## Assembly

Google.Cloud.Config.V1.dll

## Constructors

### ResourceCAIInfo()

```
public ResourceCAIInfo()
```

### ResourceCAIInfo(ResourceCAIInfo)

```
public ResourceCAIInfo(ResourceCAIInfo other)
```

**Parameter**

**Name**

**Description**

`other`

`[ResourceCAIInfo](/dotnet/docs/reference/Google.Cloud.Config.V1/1.3.0/Google.Cloud.Config.V1.ResourceCAIInfo)`  

## Properties

### FullResourceName

```
public string FullResourceName { get; set; }
```

CAI resource name in the format following [https://cloud.google.com/apis/design/resource\_names#full\_resource\_name](https://cloud.google.com/apis/design/resource_names#full_resource_name)

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
