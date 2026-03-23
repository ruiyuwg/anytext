-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Device Streaming v1 API - Class StreamData (1.0.0-beta02) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.0.0-beta02 (latest)](/dotnet/docs/reference/Google.Cloud.DeviceStreaming.V1/latest/Google.Cloud.DeviceStreaming.V1.StreamData)
-   [1.0.0-beta01](/dotnet/docs/reference/Google.Cloud.DeviceStreaming.V1/1.0.0-beta01/Google.Cloud.DeviceStreaming.V1.StreamData)

```
public sealed class StreamData : IMessage<StreamData>, IEquatable<StreamData>, IDeepCloneable<StreamData>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Device Streaming v1 API class StreamData.

Data for a stream.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> StreamData

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[StreamData](/dotnet/docs/reference/Google.Cloud.DeviceStreaming.V1/latest/Google.Cloud.DeviceStreaming.V1.StreamData), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[StreamData](/dotnet/docs/reference/Google.Cloud.DeviceStreaming.V1/latest/Google.Cloud.DeviceStreaming.V1.StreamData), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[StreamData](/dotnet/docs/reference/Google.Cloud.DeviceStreaming.V1/latest/Google.Cloud.DeviceStreaming.V1.StreamData), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.DeviceStreaming.V1](/dotnet/docs/reference/Google.Cloud.DeviceStreaming.V1/latest/Google.Cloud.DeviceStreaming.V1)

## Assembly

Google.Cloud.DeviceStreaming.V1.dll

## Constructors

### StreamData()

```
public StreamData()
```

### StreamData(StreamData)

```
public StreamData(StreamData other)
```

**Parameter**

**Name**

**Description**

`other`

`[StreamData](/dotnet/docs/reference/Google.Cloud.DeviceStreaming.V1/latest/Google.Cloud.DeviceStreaming.V1.StreamData)`  

## Properties

### Close

```
public Close Close { get; set; }
```

The stream is closing. EOF.

**Property Value**

**Type**

**Description**

`[Close](/dotnet/docs/reference/Google.Cloud.DeviceStreaming.V1/latest/Google.Cloud.DeviceStreaming.V1.Close)`

### ContentsCase

```
public StreamData.ContentsOneofCase ContentsCase { get; }
```

**Property Value**

**Type**

**Description**

`[StreamData](/dotnet/docs/reference/Google.Cloud.DeviceStreaming.V1/latest/Google.Cloud.DeviceStreaming.V1.StreamData)[ContentsOneofCase](/dotnet/docs/reference/Google.Cloud.DeviceStreaming.V1/latest/Google.Cloud.DeviceStreaming.V1.StreamData.ContentsOneofCase)`

### Data

```
public ByteString Data { get; set; }
```

Data in the stream.

**Property Value**

**Type**

**Description**

`[ByteString](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.ByteString.html)`

### HasData

```
public bool HasData { get; }
```

Gets whether the "data" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### StreamId

```
public int StreamId { get; set; }
```

Required. The unique ID of this stream, assigned by the client.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
