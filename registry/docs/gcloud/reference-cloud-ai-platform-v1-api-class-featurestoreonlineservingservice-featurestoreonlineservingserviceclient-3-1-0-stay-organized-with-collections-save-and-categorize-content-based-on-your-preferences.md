-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud AI Platform v1 API - Class FeaturestoreOnlineServingService.FeaturestoreOnlineServingServiceClient (3.1.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public class FeaturestoreOnlineServingService.FeaturestoreOnlineServingServiceClient : ClientBase<FeaturestoreOnlineServingService.FeaturestoreOnlineServingServiceClient>
```

Reference documentation and code samples for the Cloud AI Platform v1 API class FeaturestoreOnlineServingService.FeaturestoreOnlineServingServiceClient.

Client for FeaturestoreOnlineServingService

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs) \> [ClientBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)[FeaturestoreOnlineServingService](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.FeaturestoreOnlineServingService)[FeaturestoreOnlineServingServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.FeaturestoreOnlineServingService.FeaturestoreOnlineServingServiceClient) \> FeaturestoreOnlineServingService.FeaturestoreOnlineServingServiceClient

## Inherited Members

[ClientBase<FeaturestoreOnlineServingService.FeaturestoreOnlineServingServiceClient>.WithHost(string)](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)

[ClientBase.CallInvoker](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### FeaturestoreOnlineServingServiceClient()

```
protected FeaturestoreOnlineServingServiceClient()
```

Protected parameterless constructor to allow creation of test doubles.

### FeaturestoreOnlineServingServiceClient(CallInvoker)

```
public FeaturestoreOnlineServingServiceClient(CallInvoker callInvoker)
```

Creates a new client for FeaturestoreOnlineServingService that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallInvoker.cs)`  

The callInvoker to use to make remote calls.

### FeaturestoreOnlineServingServiceClient(ChannelBase)

```
public FeaturestoreOnlineServingServiceClient(ChannelBase channel)
```

Creates a new client for FeaturestoreOnlineServingService

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ChannelBase.cs)`  

The channel to use to make remote calls.

### FeaturestoreOnlineServingServiceClient(ClientBaseConfiguration)

```
protected FeaturestoreOnlineServingServiceClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)[ClientBaseConfiguration](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)`  

The client configuration.

## Methods

### CreateIAMPolicyClient()

```
public virtual IAMPolicy.IAMPolicyClient CreateIAMPolicyClient()
```

Creates a new instance of [IAMPolicy.IAMPolicyClient](https://github.com/googleapis/google-cloud-dotnet/blob/6402728473aef5db9cdf9383998a536821f03112/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicyGrpc.g.cs) using the same call invoker as this client.

**Returns**

**Type**

**Description**

`[IAMPolicy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.IAMPolicy.html)[IAMPolicyClient](https://github.com/googleapis/google-cloud-dotnet/blob/6402728473aef5db9cdf9383998a536821f03112/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicyGrpc.g.cs)`

A new [IAMPolicy.IAMPolicyClient](https://github.com/googleapis/google-cloud-dotnet/blob/6402728473aef5db9cdf9383998a536821f03112/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicyGrpc.g.cs) for the same target as this client.

### CreateLocationsClient()

```
public virtual Locations.LocationsClient CreateLocationsClient()
```

Creates a new instance of [Locations.LocationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/efda2feec93774d4ba31cefd752fdd1fce55d6fa/apis/Google.Cloud.Location/Google.Cloud.Location/LocationsGrpc.g.cs) using the same call invoker as this client.

**Returns**

**Type**

**Description**

`[Locations](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.Locations.html)[LocationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/efda2feec93774d4ba31cefd752fdd1fce55d6fa/apis/Google.Cloud.Location/Google.Cloud.Location/LocationsGrpc.g.cs)`

A new [Locations.LocationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/efda2feec93774d4ba31cefd752fdd1fce55d6fa/apis/Google.Cloud.Location/Google.Cloud.Location/LocationsGrpc.g.cs) for the same target as this client.

### NewInstance(ClientBaseConfiguration)

```
protected override FeaturestoreOnlineServingService.FeaturestoreOnlineServingServiceClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
```

Creates a new instance of client from given `ClientBaseConfiguration`.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)[ClientBaseConfiguration](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)`  

**Returns**

**Type**

**Description**

`[FeaturestoreOnlineServingService](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.FeaturestoreOnlineServingService)[FeaturestoreOnlineServingServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.FeaturestoreOnlineServingService.FeaturestoreOnlineServingServiceClient)`

**Overrides**

[ClientBase<FeaturestoreOnlineServingService.FeaturestoreOnlineServingServiceClient>.NewInstance(ClientBase.ClientBaseConfiguration)](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)

### ReadFeatureValues(ReadFeatureValuesRequest, CallOptions)

```
public virtual ReadFeatureValuesResponse ReadFeatureValues(ReadFeatureValuesRequest request, CallOptions options)
```

Reads Feature values of a specific entity of an EntityType. For reading feature values of multiple entities of an EntityType, please use StreamingReadFeatureValues.

**Parameters**

**Name**

**Description**

`request`

`[ReadFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.ReadFeatureValuesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ReadFeatureValuesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.ReadFeatureValuesResponse)`

The response received from the server.

### ReadFeatureValues(ReadFeatureValuesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual ReadFeatureValuesResponse ReadFeatureValues(ReadFeatureValuesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Reads Feature values of a specific entity of an EntityType. For reading feature values of multiple entities of an EntityType, please use StreamingReadFeatureValues.

**Parameters**

**Name**

**Description**

`request`

`[ReadFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.ReadFeatureValuesRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/Metadata.cs)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[ReadFeatureValuesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.ReadFeatureValuesResponse)`

The response received from the server.

### ReadFeatureValuesAsync(ReadFeatureValuesRequest, CallOptions)

```
public virtual AsyncUnaryCall<ReadFeatureValuesResponse> ReadFeatureValuesAsync(ReadFeatureValuesRequest request, CallOptions options)
```

Reads Feature values of a specific entity of an EntityType. For reading feature values of multiple entities of an EntityType, please use StreamingReadFeatureValues.

**Parameters**

**Name**

**Description**

`request`

`[ReadFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.ReadFeatureValuesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ReadFeatureValuesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.ReadFeatureValuesResponse)`

The call object.

### ReadFeatureValuesAsync(ReadFeatureValuesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<ReadFeatureValuesResponse> ReadFeatureValuesAsync(ReadFeatureValuesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Reads Feature values of a specific entity of an EntityType. For reading feature values of multiple entities of an EntityType, please use StreamingReadFeatureValues.

**Parameters**

**Name**

**Description**

`request`

`[ReadFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.ReadFeatureValuesRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/Metadata.cs)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ReadFeatureValuesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.ReadFeatureValuesResponse)`

The call object.

### StreamingReadFeatureValues(StreamingReadFeatureValuesRequest, CallOptions)

```
public virtual AsyncServerStreamingCall<ReadFeatureValuesResponse> StreamingReadFeatureValues(StreamingReadFeatureValuesRequest request, CallOptions options)
```

Reads Feature values for multiple entities. Depending on their size, data for different entities may be broken up across multiple responses.

**Parameters**

**Name**

**Description**

`request`

`[StreamingReadFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.StreamingReadFeatureValuesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncServerStreamingCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncServerStreamingCall.cs)[ReadFeatureValuesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.ReadFeatureValuesResponse)`

The call object.

### StreamingReadFeatureValues(StreamingReadFeatureValuesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncServerStreamingCall<ReadFeatureValuesResponse> StreamingReadFeatureValues(StreamingReadFeatureValuesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Reads Feature values for multiple entities. Depending on their size, data for different entities may be broken up across multiple responses.

**Parameters**

**Name**

**Description**

`request`

`[StreamingReadFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.StreamingReadFeatureValuesRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/Metadata.cs)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncServerStreamingCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncServerStreamingCall.cs)[ReadFeatureValuesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.ReadFeatureValuesResponse)`

The call object.

### WriteFeatureValues(WriteFeatureValuesRequest, CallOptions)

```
public virtual WriteFeatureValuesResponse WriteFeatureValues(WriteFeatureValuesRequest request, CallOptions options)
```

Writes Feature values of one or more entities of an EntityType.

The Feature values are merged into existing entities if any. The Feature values to be written must have timestamp within the online storage retention.

**Parameters**

**Name**

**Description**

`request`

`[WriteFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.WriteFeatureValuesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[WriteFeatureValuesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.WriteFeatureValuesResponse)`

The response received from the server.

### WriteFeatureValues(WriteFeatureValuesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual WriteFeatureValuesResponse WriteFeatureValues(WriteFeatureValuesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Writes Feature values of one or more entities of an EntityType.

The Feature values are merged into existing entities if any. The Feature values to be written must have timestamp within the online storage retention.

**Parameters**

**Name**

**Description**

`request`

`[WriteFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.WriteFeatureValuesRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/Metadata.cs)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[WriteFeatureValuesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.WriteFeatureValuesResponse)`

The response received from the server.

### WriteFeatureValuesAsync(WriteFeatureValuesRequest, CallOptions)

```
public virtual AsyncUnaryCall<WriteFeatureValuesResponse> WriteFeatureValuesAsync(WriteFeatureValuesRequest request, CallOptions options)
```

Writes Feature values of one or more entities of an EntityType.

The Feature values are merged into existing entities if any. The Feature values to be written must have timestamp within the online storage retention.

**Parameters**

**Name**

**Description**

`request`

`[WriteFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.WriteFeatureValuesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[WriteFeatureValuesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.WriteFeatureValuesResponse)`

The call object.

### WriteFeatureValuesAsync(WriteFeatureValuesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<WriteFeatureValuesResponse> WriteFeatureValuesAsync(WriteFeatureValuesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Writes Feature values of one or more entities of an EntityType.

The Feature values are merged into existing entities if any. The Feature values to be written must have timestamp within the online storage retention.

**Parameters**

**Name**

**Description**

`request`

`[WriteFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.WriteFeatureValuesRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/Metadata.cs)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[WriteFeatureValuesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.1.0/Google.Cloud.AIPlatform.V1.WriteFeatureValuesResponse)`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
