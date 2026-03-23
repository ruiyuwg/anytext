-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud AI Platform v1 API - Class PredictionServiceSettings (3.3.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class PredictionServiceSettings : ServiceSettingsBase
```

Reference documentation and code samples for the Cloud AI Platform v1 API class PredictionServiceSettings.

Settings for [PredictionServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.3.0/Google.Cloud.AIPlatform.V1.PredictionServiceClient) instances.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ServiceSettingsBase](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html) \> PredictionServiceSettings

## Inherited Members

[ServiceSettingsBase.VersionHeaderBuilder](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html#Google_Api_Gax_Grpc_ServiceSettingsBase_VersionHeaderBuilder)

[ServiceSettingsBase.CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html#Google_Api_Gax_Grpc_ServiceSettingsBase_CallSettings)

[ServiceSettingsBase.Clock](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html#Google_Api_Gax_Grpc_ServiceSettingsBase_Clock)

[ServiceSettingsBase.Scheduler](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html#Google_Api_Gax_Grpc_ServiceSettingsBase_Scheduler)

[ServiceSettingsBase.Interceptor](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html#Google_Api_Gax_Grpc_ServiceSettingsBase_Interceptor)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.3.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### PredictionServiceSettings()

```
public PredictionServiceSettings()
```

Constructs a new [PredictionServiceSettings](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.3.0/Google.Cloud.AIPlatform.V1.PredictionServiceSettings) object with default settings.

## Properties

### DirectPredictSettings

```
public CallSettings DirectPredictSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `PredictionServiceClient.DirectPredict` and `PredictionServiceClient.DirectPredictAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   No timeout is applied.

### DirectRawPredictSettings

```
public CallSettings DirectRawPredictSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `PredictionServiceClient.DirectRawPredict` and `PredictionServiceClient.DirectRawPredictAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   No timeout is applied.

### ExplainSettings

```
public CallSettings ExplainSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `PredictionServiceClient.Explain` and `PredictionServiceClient.ExplainAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   No timeout is applied.

### GenerateContentSettings

```
public CallSettings GenerateContentSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `PredictionServiceClient.GenerateContent` and `PredictionServiceClient.GenerateContentAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   No timeout is applied.

### IAMPolicySettings

```
public IAMPolicySettings IAMPolicySettings { get; set; }
```

The settings to use for the [IAMPolicyClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.IAMPolicyClient.html) associated with the client.

**Property Value**

**Type**

**Description**

`[IAMPolicySettings](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.IAMPolicySettings.html)`

### LocationsSettings

```
public LocationsSettings LocationsSettings { get; set; }
```

The settings to use for the [LocationsClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.LocationsClient.html) associated with the client.

**Property Value**

**Type**

**Description**

`[LocationsSettings](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.LocationsSettings.html)`

### PredictSettings

```
public CallSettings PredictSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `PredictionServiceClient.Predict` and `PredictionServiceClient.PredictAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   No timeout is applied.

### RawPredictSettings

```
public CallSettings RawPredictSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `PredictionServiceClient.RawPredict` and `PredictionServiceClient.RawPredictAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   No timeout is applied.

### ServerStreamingPredictSettings

```
public CallSettings ServerStreamingPredictSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `PredictionServiceClient.ServerStreamingPredict` and `PredictionServiceClient.ServerStreamingPredictAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   No timeout is applied.

### StreamDirectPredictSettings

```
public CallSettings StreamDirectPredictSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `PredictionServiceClient.StreamDirectPredict` and `PredictionServiceClient.StreamDirectPredictAsync` .

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   No timeout is applied.

### StreamDirectPredictStreamingSettings

```
public BidirectionalStreamingSettings StreamDirectPredictStreamingSettings { get; set; }
```

[BidirectionalStreamingSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.BidirectionalStreamingSettings.html) for calls to `PredictionServiceClient.StreamDirectPredict` and `PredictionServiceClient.StreamDirectPredictAsync` .

**Property Value**

**Type**

**Description**

`[BidirectionalStreamingSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.BidirectionalStreamingSettings.html)`

**Remarks**

The default local send queue size is 100.

### StreamDirectRawPredictSettings

```
public CallSettings StreamDirectRawPredictSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `PredictionServiceClient.StreamDirectRawPredict` and `PredictionServiceClient.StreamDirectRawPredictAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   No timeout is applied.

### StreamDirectRawPredictStreamingSettings

```
public BidirectionalStreamingSettings StreamDirectRawPredictStreamingSettings { get; set; }
```

[BidirectionalStreamingSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.BidirectionalStreamingSettings.html) for calls to `PredictionServiceClient.StreamDirectRawPredict` and `PredictionServiceClient.StreamDirectRawPredictAsync`.

**Property Value**

**Type**

**Description**

`[BidirectionalStreamingSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.BidirectionalStreamingSettings.html)`

**Remarks**

The default local send queue size is 100.

### StreamGenerateContentSettings

```
public CallSettings StreamGenerateContentSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `PredictionServiceClient.StreamGenerateContent` and `PredictionServiceClient.StreamGenerateContentAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   No timeout is applied.

### StreamRawPredictSettings

```
public CallSettings StreamRawPredictSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `PredictionServiceClient.StreamRawPredict` and `PredictionServiceClient.StreamRawPredictAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   No timeout is applied.

### StreamingPredictSettings

```
public CallSettings StreamingPredictSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `PredictionServiceClient.StreamingPredict` and `PredictionServiceClient.StreamingPredictAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   No timeout is applied.

### StreamingPredictStreamingSettings

```
public BidirectionalStreamingSettings StreamingPredictStreamingSettings { get; set; }
```

[BidirectionalStreamingSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.BidirectionalStreamingSettings.html) for calls to `PredictionServiceClient.StreamingPredict` and `PredictionServiceClient.StreamingPredictAsync`.

**Property Value**

**Type**

**Description**

`[BidirectionalStreamingSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.BidirectionalStreamingSettings.html)`

**Remarks**

The default local send queue size is 100.

### StreamingRawPredictSettings

```
public CallSettings StreamingRawPredictSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `PredictionServiceClient.StreamingRawPredict` and `PredictionServiceClient.StreamingRawPredictAsync` .

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   No timeout is applied.

### StreamingRawPredictStreamingSettings

```
public BidirectionalStreamingSettings StreamingRawPredictStreamingSettings { get; set; }
```

[BidirectionalStreamingSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.BidirectionalStreamingSettings.html) for calls to `PredictionServiceClient.StreamingRawPredict` and `PredictionServiceClient.StreamingRawPredictAsync` .

**Property Value**

**Type**

**Description**

`[BidirectionalStreamingSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.BidirectionalStreamingSettings.html)`

**Remarks**

The default local send queue size is 100.

## Methods

### Clone()

```
public PredictionServiceSettings Clone()
```

Creates a deep clone of this object, with all the same property values.

**Returns**

**Type**

**Description**

`[PredictionServiceSettings](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.3.0/Google.Cloud.AIPlatform.V1.PredictionServiceSettings)`

A deep clone of this [PredictionServiceSettings](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.3.0/Google.Cloud.AIPlatform.V1.PredictionServiceSettings) object.

### GetDefault()

```
public static PredictionServiceSettings GetDefault()
```

Get a new instance of the default [PredictionServiceSettings](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.3.0/Google.Cloud.AIPlatform.V1.PredictionServiceSettings).

**Returns**

**Type**

**Description**

`[PredictionServiceSettings](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.3.0/Google.Cloud.AIPlatform.V1.PredictionServiceSettings)`

A new instance of the default [PredictionServiceSettings](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.3.0/Google.Cloud.AIPlatform.V1.PredictionServiceSettings).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
