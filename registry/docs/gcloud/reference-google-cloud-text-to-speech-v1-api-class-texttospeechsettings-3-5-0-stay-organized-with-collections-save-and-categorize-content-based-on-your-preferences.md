-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Text-to-Speech v1 API - Class TextToSpeechSettings (3.5.0) Stay organized with collections Save and categorize content based on your preferences.

3.17.0 (latest) 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.5.0 2.4.0 2.3.0 2.2.0

```
public sealed class TextToSpeechSettings : ServiceSettingsBase
```

Reference documentation and code samples for the Google Cloud Text-to-Speech v1 API class TextToSpeechSettings.

Settings for [TextToSpeechClient](/dotnet/docs/reference/Google.Cloud.TextToSpeech.V1/3.5.0/Google.Cloud.TextToSpeech.V1.TextToSpeechClient) instances.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ServiceSettingsBase](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/ServiceSettingsBase.cs) \> TextToSpeechSettings

## Inherited Members

[ServiceSettingsBase.VersionHeaderBuilder](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/ServiceSettingsBase.cs)

[ServiceSettingsBase.CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/ServiceSettingsBase.cs)

[ServiceSettingsBase.Clock](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/ServiceSettingsBase.cs)

[ServiceSettingsBase.Scheduler](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/ServiceSettingsBase.cs)

[ServiceSettingsBase.Interceptor](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/ServiceSettingsBase.cs)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.TextToSpeech.V1](/dotnet/docs/reference/Google.Cloud.TextToSpeech.V1/3.5.0/Google.Cloud.TextToSpeech.V1)

## Assembly

Google.Cloud.TextToSpeech.V1.dll

## Constructors

### TextToSpeechSettings()

```
public TextToSpeechSettings()
```

Constructs a new [TextToSpeechSettings](/dotnet/docs/reference/Google.Cloud.TextToSpeech.V1/3.5.0/Google.Cloud.TextToSpeech.V1.TextToSpeechSettings) object with default settings.

## Properties

### ListVoicesSettings

```
public CallSettings ListVoicesSettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `TextToSpeechClient.ListVoices` and `TextToSpeechClient.ListVoicesAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   Initial retry delay: 100 milliseconds.
-   Retry delay multiplier: 1.3
-   Retry maximum delay: 60000 milliseconds.
-   Maximum attempts: Unlimited
-   Retriable status codes: [Unavailable](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/StatusCode.cs), [DeadlineExceeded](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/StatusCode.cs).
-   Timeout: 300 seconds.

### SynthesizeSpeechSettings

```
public CallSettings SynthesizeSpeechSettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `TextToSpeechClient.SynthesizeSpeech` and `TextToSpeechClient.SynthesizeSpeechAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   Initial retry delay: 100 milliseconds.
-   Retry delay multiplier: 1.3
-   Retry maximum delay: 60000 milliseconds.
-   Maximum attempts: Unlimited
-   Retriable status codes: [Unavailable](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/StatusCode.cs), [DeadlineExceeded](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/StatusCode.cs).
-   Timeout: 300 seconds.

## Methods

### Clone()

```
public TextToSpeechSettings Clone()
```

Creates a deep clone of this object, with all the same property values.

**Returns**

**Type**

**Description**

`[TextToSpeechSettings](/dotnet/docs/reference/Google.Cloud.TextToSpeech.V1/3.5.0/Google.Cloud.TextToSpeech.V1.TextToSpeechSettings)`

A deep clone of this [TextToSpeechSettings](/dotnet/docs/reference/Google.Cloud.TextToSpeech.V1/3.5.0/Google.Cloud.TextToSpeech.V1.TextToSpeechSettings) object.

### GetDefault()

```
public static TextToSpeechSettings GetDefault()
```

Get a new instance of the default [TextToSpeechSettings](/dotnet/docs/reference/Google.Cloud.TextToSpeech.V1/3.5.0/Google.Cloud.TextToSpeech.V1.TextToSpeechSettings).

**Returns**

**Type**

**Description**

`[TextToSpeechSettings](/dotnet/docs/reference/Google.Cloud.TextToSpeech.V1/3.5.0/Google.Cloud.TextToSpeech.V1.TextToSpeechSettings)`

A new instance of the default [TextToSpeechSettings](/dotnet/docs/reference/Google.Cloud.TextToSpeech.V1/3.5.0/Google.Cloud.TextToSpeech.V1.TextToSpeechSettings).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-11 UTC.
