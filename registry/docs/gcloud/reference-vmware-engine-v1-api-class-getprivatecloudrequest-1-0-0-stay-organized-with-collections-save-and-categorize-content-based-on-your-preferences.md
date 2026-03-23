-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# VMware Engine v1 API - Class GetPrivateCloudRequest (1.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0keyboard\_arrow\_down

-   [1.7.0 (latest)](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/latest/Google.Cloud.VmwareEngine.V1.GetPrivateCloudRequest)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.6.0/Google.Cloud.VmwareEngine.V1.GetPrivateCloudRequest)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.5.0/Google.Cloud.VmwareEngine.V1.GetPrivateCloudRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.4.0/Google.Cloud.VmwareEngine.V1.GetPrivateCloudRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.3.0/Google.Cloud.VmwareEngine.V1.GetPrivateCloudRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.2.0/Google.Cloud.VmwareEngine.V1.GetPrivateCloudRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.1.0/Google.Cloud.VmwareEngine.V1.GetPrivateCloudRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.0.0/Google.Cloud.VmwareEngine.V1.GetPrivateCloudRequest)

```
public sealed class GetPrivateCloudRequest : IMessage<GetPrivateCloudRequest>, IEquatable<GetPrivateCloudRequest>, IDeepCloneable<GetPrivateCloudRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the VMware Engine v1 API class GetPrivateCloudRequest.

Request message for \[VmwareEngine.GetPrivateCloud\]\[google.cloud.vmwareengine.v1.VmwareEngine.GetPrivateCloud\]

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> GetPrivateCloudRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[GetPrivateCloudRequest](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.0.0/Google.Cloud.VmwareEngine.V1.GetPrivateCloudRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[GetPrivateCloudRequest](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.0.0/Google.Cloud.VmwareEngine.V1.GetPrivateCloudRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[GetPrivateCloudRequest](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.0.0/Google.Cloud.VmwareEngine.V1.GetPrivateCloudRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.VmwareEngine.V1](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.0.0/Google.Cloud.VmwareEngine.V1)

## Assembly

Google.Cloud.VmwareEngine.V1.dll

## Constructors

### GetPrivateCloudRequest()

```
public GetPrivateCloudRequest()
```

### GetPrivateCloudRequest(GetPrivateCloudRequest)

```
public GetPrivateCloudRequest(GetPrivateCloudRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[GetPrivateCloudRequest](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.0.0/Google.Cloud.VmwareEngine.V1.GetPrivateCloudRequest)`  

## Properties

### Name

```
public string Name { get; set; }
```

Required. The resource name of the private cloud to retrieve. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### PrivateCloudName

```
public PrivateCloudName PrivateCloudName { get; set; }
```

[PrivateCloudName](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.0.0/Google.Cloud.VmwareEngine.V1.PrivateCloudName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.0.0/Google.Cloud.VmwareEngine.V1.GetPrivateCloudRequest#Google_Cloud_VmwareEngine_V1_GetPrivateCloudRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[PrivateCloudName](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.0.0/Google.Cloud.VmwareEngine.V1.PrivateCloudName)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
