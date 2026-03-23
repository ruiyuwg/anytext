-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class TextAnnotation.Types.DetectedBreak (2.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.4.0keyboard\_arrow\_down

-   [3.8.0 (latest)](/dotnet/docs/reference/Google.Cloud.Vision.V1/latest/Google.Cloud.Vision.V1.TextAnnotation.Types.DetectedBreak)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.7.0/Google.Cloud.Vision.V1.TextAnnotation.Types.DetectedBreak)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.6.0/Google.Cloud.Vision.V1.TextAnnotation.Types.DetectedBreak)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.5.0/Google.Cloud.Vision.V1.TextAnnotation.Types.DetectedBreak)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.4.0/Google.Cloud.Vision.V1.TextAnnotation.Types.DetectedBreak)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.3.0/Google.Cloud.Vision.V1.TextAnnotation.Types.DetectedBreak)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.2.0/Google.Cloud.Vision.V1.TextAnnotation.Types.DetectedBreak)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.1.0/Google.Cloud.Vision.V1.TextAnnotation.Types.DetectedBreak)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.TextAnnotation.Types.DetectedBreak)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/2.5.0/Google.Cloud.Vision.V1.TextAnnotation.Types.DetectedBreak)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/2.4.0/Google.Cloud.Vision.V1.TextAnnotation.Types.DetectedBreak)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/2.3.0/Google.Cloud.Vision.V1.TextAnnotation.Types.DetectedBreak)

```
public sealed class DetectedBreak : IMessage<TextAnnotation.Types.DetectedBreak>, IEquatable<TextAnnotation.Types.DetectedBreak>, IDeepCloneable<TextAnnotation.Types.DetectedBreak>, IBufferMessage, IMessage
```

Detected start or end of a structural component.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> TextAnnotation.Types.DetectedBreak

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[TextAnnotation.Types.DetectedBreak](/dotnet/docs/reference/Google.Cloud.Vision.V1/2.4.0/Google.Cloud.Vision.V1.TextAnnotation.Types.DetectedBreak)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[TextAnnotation.Types.DetectedBreak](/dotnet/docs/reference/Google.Cloud.Vision.V1/2.4.0/Google.Cloud.Vision.V1.TextAnnotation.Types.DetectedBreak)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[TextAnnotation.Types.DetectedBreak](/dotnet/docs/reference/Google.Cloud.Vision.V1/2.4.0/Google.Cloud.Vision.V1.TextAnnotation.Types.DetectedBreak)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Vision.V1](/dotnet/docs/reference/Google.Cloud.Vision.V1/2.4.0/Google.Cloud.Vision.V1)

## Assembly

Google.Cloud.Vision.V1.dll

## Constructors

### DetectedBreak()

```
public DetectedBreak()
```

### DetectedBreak(TextAnnotation.Types.DetectedBreak)

```
public DetectedBreak(TextAnnotation.Types.DetectedBreak other)
```

**Parameter**

**Name**

**Description**

`other`

`[TextAnnotation.Types.DetectedBreak](/dotnet/docs/reference/Google.Cloud.Vision.V1/2.4.0/Google.Cloud.Vision.V1.TextAnnotation.Types.DetectedBreak)`  

## Properties

### IsPrefix

```
public bool IsPrefix { get; set; }
```

True if break prepends the element.

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Type

```
public TextAnnotation.Types.DetectedBreak.Types.BreakType Type { get; set; }
```

Detected break type.

**Property Value**

**Type**

**Description**

`[TextAnnotation.Types.DetectedBreak.Types.BreakType](/dotnet/docs/reference/Google.Cloud.Vision.V1/2.4.0/Google.Cloud.Vision.V1.TextAnnotation.Types.DetectedBreak.Types.BreakType)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
