-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Discovery Engine v1 API - Class ListEnginesResponse (1.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.3.0keyboard\_arrow\_down

-   [1.13.0 (latest)](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/latest/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse)
-   [1.12.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.12.0/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse)
-   [1.11.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.11.0/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse)
-   [1.10.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.10.0/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse)
-   [1.9.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.9.0/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.8.0/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.7.0/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.6.0/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.5.0/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.4.0/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.3.0/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.2.0/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.1.0/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse)
-   [1.0.0-beta06](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.0.0-beta06/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse)

```
public sealed class ListEnginesResponse : IMessage<ListEnginesResponse>, IEquatable<ListEnginesResponse>, IDeepCloneable<ListEnginesResponse>, IBufferMessage, IMessage, IPageResponse<Engine>, IEnumerable<Engine>, IEnumerable
```

Reference documentation and code samples for the Discovery Engine v1 API class ListEnginesResponse.

Response message for \[EngineService.ListEngines\]\[google.cloud.discoveryengine.v1.EngineService.ListEngines\] method.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ListEnginesResponse

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ListEnginesResponse](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.3.0/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ListEnginesResponse](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.3.0/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ListEnginesResponse](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.3.0/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageResponse](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageResponse-1.html)[Engine](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.3.0/Google.Cloud.DiscoveryEngine.V1.Engine), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[Engine](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.3.0/Google.Cloud.DiscoveryEngine.V1.Engine), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.DiscoveryEngine.V1](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.3.0/Google.Cloud.DiscoveryEngine.V1)

## Assembly

Google.Cloud.DiscoveryEngine.V1.dll

## Constructors

### ListEnginesResponse()

```
public ListEnginesResponse()
```

### ListEnginesResponse(ListEnginesResponse)

```
public ListEnginesResponse(ListEnginesResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListEnginesResponse](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.3.0/Google.Cloud.DiscoveryEngine.V1.ListEnginesResponse)`  

## Properties

### Engines

```
public RepeatedField<Engine> Engines { get; }
```

All the customer's \[Engine\]\[google.cloud.discoveryengine.v1.Engine\]s.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[Engine](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.3.0/Google.Cloud.DiscoveryEngine.V1.Engine)`

### NextPageToken

```
public string NextPageToken { get; set; }
```

Not supported.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

## Methods

### GetEnumerator()

```
public IEnumerator<Engine> GetEnumerator()
```

Returns an enumerator that iterates through the resources in this response.

**Returns**

**Type**

**Description**

`[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)[Engine](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.3.0/Google.Cloud.DiscoveryEngine.V1.Engine)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
