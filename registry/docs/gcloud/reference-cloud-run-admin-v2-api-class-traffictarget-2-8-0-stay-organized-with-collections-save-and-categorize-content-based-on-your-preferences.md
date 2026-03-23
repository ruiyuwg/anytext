-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Run Admin v2 API - Class TrafficTarget (2.8.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.8.0keyboard\_arrow\_down

-   [2.19.0 (latest)](/dotnet/docs/reference/Google.Cloud.Run.V2/latest/Google.Cloud.Run.V2.TrafficTarget)
-   [2.18.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.18.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.17.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.17.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.16.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.16.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.15.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.15.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.14.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.13.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.12.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.11.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.10.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.9.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.8.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.5.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.4.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.3.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.2.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.1.0/Google.Cloud.Run.V2.TrafficTarget)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.0.0/Google.Cloud.Run.V2.TrafficTarget)
-   [1.0.0-beta02](/dotnet/docs/reference/Google.Cloud.Run.V2/1.0.0-beta02/Google.Cloud.Run.V2.TrafficTarget)

```
public sealed class TrafficTarget : IMessage<TrafficTarget>, IEquatable<TrafficTarget>, IDeepCloneable<TrafficTarget>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud Run Admin v2 API class TrafficTarget.

Holds a single traffic routing entry for the Service. Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> TrafficTarget

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[TrafficTarget](/dotnet/docs/reference/Google.Cloud.Run.V2/2.8.0/Google.Cloud.Run.V2.TrafficTarget), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[TrafficTarget](/dotnet/docs/reference/Google.Cloud.Run.V2/2.8.0/Google.Cloud.Run.V2.TrafficTarget), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[TrafficTarget](/dotnet/docs/reference/Google.Cloud.Run.V2/2.8.0/Google.Cloud.Run.V2.TrafficTarget), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Run.V2](/dotnet/docs/reference/Google.Cloud.Run.V2/2.8.0/Google.Cloud.Run.V2)

## Assembly

Google.Cloud.Run.V2.dll

## Constructors

### TrafficTarget()

```
public TrafficTarget()
```

### TrafficTarget(TrafficTarget)

```
public TrafficTarget(TrafficTarget other)
```

**Parameter**

**Name**

**Description**

`other`

`[TrafficTarget](/dotnet/docs/reference/Google.Cloud.Run.V2/2.8.0/Google.Cloud.Run.V2.TrafficTarget)`  

## Properties

### Percent

```
public int Percent { get; set; }
```

Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### Revision

```
public string Revision { get; set; }
```

Revision to which to send this portion of traffic, if traffic allocation is by revision.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### RevisionAsRevisionName

```
public RevisionName RevisionAsRevisionName { get; set; }
```

[RevisionName](/dotnet/docs/reference/Google.Cloud.Run.V2/2.8.0/Google.Cloud.Run.V2.RevisionName)\-typed view over the [Revision](/dotnet/docs/reference/Google.Cloud.Run.V2/2.8.0/Google.Cloud.Run.V2.TrafficTarget#Google_Cloud_Run_V2_TrafficTarget_Revision) resource name property.

**Property Value**

**Type**

**Description**

`[RevisionName](/dotnet/docs/reference/Google.Cloud.Run.V2/2.8.0/Google.Cloud.Run.V2.RevisionName)`

### Tag

```
public string Tag { get; set; }
```

Indicates a string to be part of the URI to exclusively reference this target.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Type

```
public TrafficTargetAllocationType Type { get; set; }
```

The allocation type for this traffic target.

**Property Value**

**Type**

**Description**

`[TrafficTargetAllocationType](/dotnet/docs/reference/Google.Cloud.Run.V2/2.8.0/Google.Cloud.Run.V2.TrafficTargetAllocationType)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
