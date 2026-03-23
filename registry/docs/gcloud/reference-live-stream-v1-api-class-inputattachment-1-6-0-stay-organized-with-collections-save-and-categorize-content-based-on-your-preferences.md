-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Live Stream v1 API - Class InputAttachment (1.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.6.0keyboard\_arrow\_down

-   [1.11.0 (latest)](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/latest/Google.Cloud.Video.LiveStream.V1.InputAttachment)
-   [1.10.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.10.0/Google.Cloud.Video.LiveStream.V1.InputAttachment)
-   [1.9.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.9.0/Google.Cloud.Video.LiveStream.V1.InputAttachment)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.8.0/Google.Cloud.Video.LiveStream.V1.InputAttachment)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.7.0/Google.Cloud.Video.LiveStream.V1.InputAttachment)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.InputAttachment)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.5.0/Google.Cloud.Video.LiveStream.V1.InputAttachment)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.4.0/Google.Cloud.Video.LiveStream.V1.InputAttachment)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.3.0/Google.Cloud.Video.LiveStream.V1.InputAttachment)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.2.0/Google.Cloud.Video.LiveStream.V1.InputAttachment)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.1.0/Google.Cloud.Video.LiveStream.V1.InputAttachment)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.0.0/Google.Cloud.Video.LiveStream.V1.InputAttachment)

```
public sealed class InputAttachment : IMessage<InputAttachment>, IEquatable<InputAttachment>, IDeepCloneable<InputAttachment>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Live Stream v1 API class InputAttachment.

A group of information for attaching an input resource to this channel.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> InputAttachment

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[InputAttachment](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.InputAttachment), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[InputAttachment](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.InputAttachment), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[InputAttachment](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.InputAttachment), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Video.LiveStream.V1](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1)

## Assembly

Google.Cloud.Video.LiveStream.V1.dll

## Constructors

### InputAttachment()

```
public InputAttachment()
```

### InputAttachment(InputAttachment)

```
public InputAttachment(InputAttachment other)
```

**Parameter**

**Name**

**Description**

`other`

`[InputAttachment](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.InputAttachment)`  

## Properties

### AutomaticFailover

```
public InputAttachment.Types.AutomaticFailover AutomaticFailover { get; set; }
```

Automatic failover configurations.

**Property Value**

**Type**

**Description**

`[InputAttachment](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.InputAttachment)[Types](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.InputAttachment.Types)[AutomaticFailover](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.InputAttachment.Types.AutomaticFailover)`

### Input

```
public string Input { get; set; }
```

The resource name of an existing input, in the form of: `projects/{project}/locations/{location}/inputs/{inputId}`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### InputAsInputName

```
public InputName InputAsInputName { get; set; }
```

[InputName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.InputName)\-typed view over the [Input](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.InputAttachment#Google_Cloud_Video_LiveStream_V1_InputAttachment_Input) resource name property.

**Property Value**

**Type**

**Description**

`[InputName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.InputName)`

### Key

```
public string Key { get; set; }
```

A unique key for this input attachment.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
