-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Speech v1 API - Class LongRunningRecognizeResponse (3.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.4.0keyboard\_arrow\_down

-   [3.9.0 (latest)](/dotnet/docs/reference/Google.Cloud.Speech.V1/latest/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.8.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.7.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.6.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.5.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.4.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.3.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.2.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.1.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.0.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.9.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.8.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.7.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.6.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.5.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.4.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.3.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Speech.V1/2.2.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)

```
public sealed class LongRunningRecognizeResponse : IMessage<LongRunningRecognizeResponse>, IEquatable<LongRunningRecognizeResponse>, IDeepCloneable<LongRunningRecognizeResponse>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Speech v1 API class LongRunningRecognizeResponse.

The only message returned to the client by the `LongRunningRecognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages. It is included in the `result.response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> LongRunningRecognizeResponse

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[LongRunningRecognizeResponse](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.4.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[LongRunningRecognizeResponse](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.4.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[LongRunningRecognizeResponse](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.4.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google](https://cloud.google.com/dotnet/docs/reference/Google.Apis/latest/Google.html)[Cloud](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.Cloud.html)Google.Cloud.Speech[V1](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.4.0/Google.Cloud.Speech.V1)

## Assembly

Google.Cloud.Speech.V1.dll

## Constructors

### LongRunningRecognizeResponse()

```
public LongRunningRecognizeResponse()
```

### LongRunningRecognizeResponse(LongRunningRecognizeResponse)

```
public LongRunningRecognizeResponse(LongRunningRecognizeResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[LongRunningRecognizeResponse](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.4.0/Google.Cloud.Speech.V1.LongRunningRecognizeResponse)`  

## Properties

### OutputConfig

```
public TranscriptOutputConfig OutputConfig { get; set; }
```

Original output config if present in the request.

**Property Value**

**Type**

**Description**

`[TranscriptOutputConfig](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.4.0/Google.Cloud.Speech.V1.TranscriptOutputConfig)`

### OutputError

```
public Status OutputError { get; set; }
```

If the transcript output fails this field contains the relevant error.

**Property Value**

**Type**

**Description**

`[Status](https://cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Rpc.Status.html)`

### RequestId

```
public long RequestId { get; set; }
```

The ID associated with the request. This is a unique ID specific only to the given request.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### Results

```
public RepeatedField<SpeechRecognitionResult> Results { get; }
```

Sequential list of transcription results corresponding to sequential portions of audio.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[SpeechRecognitionResult](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.4.0/Google.Cloud.Speech.V1.SpeechRecognitionResult)`

### SpeechAdaptationInfo

```
public SpeechAdaptationInfo SpeechAdaptationInfo { get; set; }
```

Provides information on speech adaptation behavior in response

**Property Value**

**Type**

**Description**

`[SpeechAdaptationInfo](/dotnet/docs/reference/Google.Cloud.Speech.V1/3.4.0/Google.Cloud.Speech.V1.SpeechAdaptationInfo)`

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
