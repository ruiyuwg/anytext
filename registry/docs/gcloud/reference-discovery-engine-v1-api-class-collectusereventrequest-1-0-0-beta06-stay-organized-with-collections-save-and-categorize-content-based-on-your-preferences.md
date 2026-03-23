-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Discovery Engine v1 API - Class CollectUserEventRequest (1.0.0-beta06) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0-beta06keyboard\_arrow\_down

-   [1.13.0 (latest)](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/latest/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest)
-   [1.12.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.12.0/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest)
-   [1.11.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.11.0/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest)
-   [1.10.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.10.0/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest)
-   [1.9.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.9.0/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.8.0/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.7.0/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.6.0/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.5.0/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.4.0/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.3.0/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.2.0/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.1.0/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest)
-   [1.0.0-beta06](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.0.0-beta06/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest)

```
public sealed class CollectUserEventRequest : IMessage<CollectUserEventRequest>, IEquatable<CollectUserEventRequest>, IDeepCloneable<CollectUserEventRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Discovery Engine v1 API class CollectUserEventRequest.

Request message for CollectUserEvent method.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> CollectUserEventRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[CollectUserEventRequest](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.0.0-beta06/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[CollectUserEventRequest](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.0.0-beta06/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[CollectUserEventRequest](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.0.0-beta06/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.DiscoveryEngine.V1](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.0.0-beta06/Google.Cloud.DiscoveryEngine.V1)

## Assembly

Google.Cloud.DiscoveryEngine.V1.dll

## Constructors

### CollectUserEventRequest()

```
public CollectUserEventRequest()
```

### CollectUserEventRequest(CollectUserEventRequest)

```
public CollectUserEventRequest(CollectUserEventRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[CollectUserEventRequest](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.0.0-beta06/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest)`  

## Properties

### Ets

```
public long Ets { get; set; }
```

The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### HasEts

```
public bool HasEts { get; }
```

Gets whether the "ets" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasUri

```
public bool HasUri { get; }
```

Gets whether the "uri" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Parent

```
public string Parent { get; set; }
```

Required. The parent DataStore resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsDataStoreName

```
public DataStoreName ParentAsDataStoreName { get; set; }
```

[DataStoreName](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.0.0-beta06/Google.Cloud.DiscoveryEngine.V1.DataStoreName)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.0.0-beta06/Google.Cloud.DiscoveryEngine.V1.CollectUserEventRequest#Google_Cloud_DiscoveryEngine_V1_CollectUserEventRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[DataStoreName](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.0.0-beta06/Google.Cloud.DiscoveryEngine.V1.DataStoreName)`

### Uri

```
public string Uri { get; set; }
```

The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for third-party requests.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### UserEvent

```
public string UserEvent { get; set; }
```

Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
