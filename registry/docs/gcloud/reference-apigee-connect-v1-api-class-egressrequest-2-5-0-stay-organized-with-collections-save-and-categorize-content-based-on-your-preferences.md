-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Apigee Connect v1 API - Class EgressRequest (2.5.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.ApigeeConnect.V1/latest/Google.Cloud.ApigeeConnect.V1.EgressRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.ApigeeConnect.V1/2.4.0/Google.Cloud.ApigeeConnect.V1.EgressRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.ApigeeConnect.V1/2.3.0/Google.Cloud.ApigeeConnect.V1.EgressRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.ApigeeConnect.V1/2.2.0/Google.Cloud.ApigeeConnect.V1.EgressRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.ApigeeConnect.V1/2.1.0/Google.Cloud.ApigeeConnect.V1.EgressRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.ApigeeConnect.V1/2.0.0/Google.Cloud.ApigeeConnect.V1.EgressRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.ApigeeConnect.V1/1.1.0/Google.Cloud.ApigeeConnect.V1.EgressRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.ApigeeConnect.V1/1.0.0/Google.Cloud.ApigeeConnect.V1.EgressRequest)

```
public sealed class EgressRequest : IMessage<EgressRequest>, IEquatable<EgressRequest>, IDeepCloneable<EgressRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Apigee Connect v1 API class EgressRequest.

gRPC request payload for tether.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> EgressRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[EgressRequest](/dotnet/docs/reference/Google.Cloud.ApigeeConnect.V1/latest/Google.Cloud.ApigeeConnect.V1.EgressRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[EgressRequest](/dotnet/docs/reference/Google.Cloud.ApigeeConnect.V1/latest/Google.Cloud.ApigeeConnect.V1.EgressRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[EgressRequest](/dotnet/docs/reference/Google.Cloud.ApigeeConnect.V1/latest/Google.Cloud.ApigeeConnect.V1.EgressRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.ApigeeConnect.V1](/dotnet/docs/reference/Google.Cloud.ApigeeConnect.V1/latest/Google.Cloud.ApigeeConnect.V1)

## Assembly

Google.Cloud.ApigeeConnect.V1.dll

## Constructors

### EgressRequest()

```
public EgressRequest()
```

### EgressRequest(EgressRequest)

```
public EgressRequest(EgressRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[EgressRequest](/dotnet/docs/reference/Google.Cloud.ApigeeConnect.V1/latest/Google.Cloud.ApigeeConnect.V1.EgressRequest)`  

## Properties

### Endpoint

```
public TetherEndpoint Endpoint { get; set; }
```

Tether Endpoint.

**Property Value**

**Type**

**Description**

`[TetherEndpoint](/dotnet/docs/reference/Google.Cloud.ApigeeConnect.V1/latest/Google.Cloud.ApigeeConnect.V1.TetherEndpoint)`

### Id

```
public string Id { get; set; }
```

Unique identifier for the request.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Payload

```
public Payload Payload { get; set; }
```

Actual payload to send to agent.

**Property Value**

**Type**

**Description**

`[Payload](/dotnet/docs/reference/Google.Cloud.ApigeeConnect.V1/latest/Google.Cloud.ApigeeConnect.V1.Payload)`

### Project

```
public string Project { get; set; }
```

GCP Project. Format: `projects/{project_number}`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Timeout

```
public Duration Timeout { get; set; }
```

Timeout for the HTTP request.

**Property Value**

**Type**

**Description**

`[Duration](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Duration.html)`

### TraceId

```
public string TraceId { get; set; }
```

Unique identifier for clients to trace their request/response.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
