-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Text-to-Speech v1 API - Class TextToSpeechLongAudioSynthesize.TextToSpeechLongAudioSynthesizeBase (3.8.0) Stay organized with collections Save and categorize content based on your preferences.

3.17.0 (latest) 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.5.0 2.4.0 2.3.0 2.2.0

```
[BindServiceMethod(typeof(TextToSpeechLongAudioSynthesize), "BindService")]
public abstract class TextToSpeechLongAudioSynthesize.TextToSpeechLongAudioSynthesizeBase
```

Reference documentation and code samples for the Google Cloud Text-to-Speech v1 API class TextToSpeechLongAudioSynthesize.TextToSpeechLongAudioSynthesizeBase.

Base class for server-side implementations of TextToSpeechLongAudioSynthesize

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> TextToSpeechLongAudioSynthesize.TextToSpeechLongAudioSynthesizeBase

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.TextToSpeech.V1](/dotnet/docs/reference/Google.Cloud.TextToSpeech.V1/3.8.0/Google.Cloud.TextToSpeech.V1)

## Assembly

Google.Cloud.TextToSpeech.V1.dll

## Methods

### SynthesizeLongAudio(SynthesizeLongAudioRequest, ServerCallContext)

```
public virtual Task<Operation> SynthesizeLongAudio(SynthesizeLongAudioRequest request, ServerCallContext context)
```

Synthesizes long form text asynchronously.

**Parameters**

**Name**

**Description**

`request`

`[SynthesizeLongAudioRequest](/dotnet/docs/reference/Google.Cloud.TextToSpeech.V1/3.8.0/Google.Cloud.TextToSpeech.V1.SynthesizeLongAudioRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response to send back to the client (wrapped by a task).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-11 UTC.
