-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class RecognizeResponse (2.7.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.7.0keyboard\_arrow\_down

-   [3.9.0 (latest)](/dotnet/docs/reference/Google.Cloud.Speech.V1/latest/Google.Cloud.Speech.V1.RecognizeResponse)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.8.0/Google.Cloud.Speech.V1.RecognizeResponse)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.7.0/Google.Cloud.Speech.V1.RecognizeResponse)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.6.0/Google.Cloud.Speech.V1.RecognizeResponse)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.5.0/Google.Cloud.Speech.V1.RecognizeResponse)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.4.0/Google.Cloud.Speech.V1.RecognizeResponse)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.3.0/Google.Cloud.Speech.V1.RecognizeResponse)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.2.0/Google.Cloud.Speech.V1.RecognizeResponse)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.1.0/Google.Cloud.Speech.V1.RecognizeResponse)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.0.0/Google.Cloud.Speech.V1.RecognizeResponse)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.9.0/Google.Cloud.Speech.V1.RecognizeResponse)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.8.0/Google.Cloud.Speech.V1.RecognizeResponse)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.7.0/Google.Cloud.Speech.V1.RecognizeResponse)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.6.0/Google.Cloud.Speech.V1.RecognizeResponse)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.5.0/Google.Cloud.Speech.V1.RecognizeResponse)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.4.0/Google.Cloud.Speech.V1.RecognizeResponse)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.3.0/Google.Cloud.Speech.V1.RecognizeResponse)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.2.0/Google.Cloud.Speech.V1.RecognizeResponse)

```
public sealed class RecognizeResponse : IMessage<RecognizeResponse>, IEquatable<RecognizeResponse>, IDeepCloneable<RecognizeResponse>, IBufferMessage, IMessage
```

The only message returned to the client by the `Recognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> RecognizeResponse

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[RecognizeResponse](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.7.0/Google.Cloud.Speech.V1.RecognizeResponse)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[RecognizeResponse](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.7.0/Google.Cloud.Speech.V1.RecognizeResponse)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[RecognizeResponse](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.7.0/Google.Cloud.Speech.V1.RecognizeResponse)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Speech.V1](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.7.0/Google.Cloud.Speech.V1)

## Assembly

Google.Cloud.Speech.V1.dll

## Constructors

### RecognizeResponse()

```
public RecognizeResponse()
```

### RecognizeResponse(RecognizeResponse)

```
public RecognizeResponse(RecognizeResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[RecognizeResponse](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.7.0/Google.Cloud.Speech.V1.RecognizeResponse)`  

## Properties

### Results

```
public RepeatedField<SpeechRecognitionResult> Results { get; }
```

Sequential list of transcription results corresponding to sequential portions of audio.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[SpeechRecognitionResult](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.7.0/Google.Cloud.Speech.V1.SpeechRecognitionResult)>`

### TotalBilledTime

```
public Duration TotalBilledTime { get; set; }
```

When available, billed audio seconds for the corresponding request.

**Property Value**

**Type**

**Description**

`[Duration](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Duration.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
