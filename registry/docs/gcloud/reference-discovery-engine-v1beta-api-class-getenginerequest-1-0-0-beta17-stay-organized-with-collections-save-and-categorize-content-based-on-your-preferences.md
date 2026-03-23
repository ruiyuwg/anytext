-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Discovery Engine v1beta API - Class GetEngineRequest (1.0.0-beta17) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0-beta17keyboard\_arrow\_down

-   [1.0.0-beta21 (latest)](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/latest/Google.Cloud.DiscoveryEngine.V1Beta.GetEngineRequest)
-   [1.0.0-beta20](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta20/Google.Cloud.DiscoveryEngine.V1Beta.GetEngineRequest)

```
public sealed class GetEngineRequest : IMessage<GetEngineRequest>, IEquatable<GetEngineRequest>, IDeepCloneable<GetEngineRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Discovery Engine v1beta API class GetEngineRequest.

Request message for \[EngineService.GetEngine\]\[google.cloud.discoveryengine.v1beta.EngineService.GetEngine\] method.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> GetEngineRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[GetEngineRequest](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.GetEngineRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[GetEngineRequest](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.GetEngineRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[GetEngineRequest](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.GetEngineRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.DiscoveryEngine.V1Beta](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta)

## Assembly

Google.Cloud.DiscoveryEngine.V1Beta.dll

## Constructors

### GetEngineRequest()

```
public GetEngineRequest()
```

### GetEngineRequest(GetEngineRequest)

```
public GetEngineRequest(GetEngineRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[GetEngineRequest](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.GetEngineRequest)`  

## Properties

### EngineName

```
public EngineName EngineName { get; set; }
```

[EngineName](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.EngineName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.GetEngineRequest#Google_Cloud_DiscoveryEngine_V1Beta_GetEngineRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[EngineName](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.EngineName)`

### Name

```
public string Name { get; set; }
```

Required. Full resource name of \[Engine\]\[google.cloud.discoveryengine.v1beta.Engine\], such as `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
