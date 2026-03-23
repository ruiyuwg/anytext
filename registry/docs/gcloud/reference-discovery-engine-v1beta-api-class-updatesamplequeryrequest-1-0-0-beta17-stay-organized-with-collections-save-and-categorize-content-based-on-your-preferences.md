-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Discovery Engine v1beta API - Class UpdateSampleQueryRequest (1.0.0-beta17) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0-beta17keyboard\_arrow\_down

-   [1.0.0-beta21 (latest)](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/latest/Google.Cloud.DiscoveryEngine.V1Beta.UpdateSampleQueryRequest)
-   [1.0.0-beta20](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta20/Google.Cloud.DiscoveryEngine.V1Beta.UpdateSampleQueryRequest)

```
public sealed class UpdateSampleQueryRequest : IMessage<UpdateSampleQueryRequest>, IEquatable<UpdateSampleQueryRequest>, IDeepCloneable<UpdateSampleQueryRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Discovery Engine v1beta API class UpdateSampleQueryRequest.

Request message for \[SampleQueryService.UpdateSampleQuery\]\[google.cloud.discoveryengine.v1beta.SampleQueryService.UpdateSampleQuery\] method.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> UpdateSampleQueryRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[UpdateSampleQueryRequest](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.UpdateSampleQueryRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[UpdateSampleQueryRequest](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.UpdateSampleQueryRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[UpdateSampleQueryRequest](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.UpdateSampleQueryRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.DiscoveryEngine.V1Beta](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta)

## Assembly

Google.Cloud.DiscoveryEngine.V1Beta.dll

## Constructors

### UpdateSampleQueryRequest()

```
public UpdateSampleQueryRequest()
```

### UpdateSampleQueryRequest(UpdateSampleQueryRequest)

```
public UpdateSampleQueryRequest(UpdateSampleQueryRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[UpdateSampleQueryRequest](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.UpdateSampleQueryRequest)`  

## Properties

### SampleQuery

```
public SampleQuery SampleQuery { get; set; }
```

Required. The simple query to update.

If the caller does not have permission to update the \[SampleQuery\]\[google.cloud.discoveryengine.v1beta.SampleQuery\], regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned.

If the \[SampleQuery\]\[google.cloud.discoveryengine.v1beta.SampleQuery\] to update does not exist a `NOT_FOUND` error is returned.

**Property Value**

**Type**

**Description**

`[SampleQuery](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.SampleQuery)`

### UpdateMask

```
public FieldMask UpdateMask { get; set; }
```

Indicates which fields in the provided imported 'simple query' to update. If not set, will by default update all fields.

**Property Value**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
