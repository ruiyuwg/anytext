-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Vertex AI v1 API - Class ModelGardenService.ModelGardenServiceClient (3.21.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public class ModelGardenService.ModelGardenServiceClient : ClientBase<ModelGardenService.ModelGardenServiceClient>
```

Reference documentation and code samples for the Vertex AI v1 API class ModelGardenService.ModelGardenServiceClient.

Client for ModelGardenService

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html)[ModelGardenService](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.21.0/Google.Cloud.AIPlatform.V1.ModelGardenService)[ModelGardenServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.21.0/Google.Cloud.AIPlatform.V1.ModelGardenService.ModelGardenServiceClient) \> ModelGardenService.ModelGardenServiceClient

## Inherited Members

[ClientBase<ModelGardenService.ModelGardenServiceClient>.WithHost(string)](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html#Grpc_Core_ClientBase_1_WithHost_System_String_)

[ClientBase.CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html#Grpc_Core_ClientBase_CallInvoker)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.21.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### ModelGardenServiceClient()

```
protected ModelGardenServiceClient()
```

Protected parameterless constructor to allow creation of test doubles.

### ModelGardenServiceClient(CallInvoker)

```
public ModelGardenServiceClient(CallInvoker callInvoker)
```

Creates a new client for ModelGardenService that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallInvoker.html)`  

The callInvoker to use to make remote calls.

### ModelGardenServiceClient(ChannelBase)

```
public ModelGardenServiceClient(ChannelBase channel)
```

Creates a new client for ModelGardenService

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ChannelBase.html)`  

The channel to use to make remote calls.

### ModelGardenServiceClient(ClientBaseConfiguration)

```
protected ModelGardenServiceClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html)[ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

The client configuration.

## Methods

### CreateIAMPolicyClient()

```
public virtual IAMPolicy.IAMPolicyClient CreateIAMPolicyClient()
```

Creates a new instance of [IAMPolicy.IAMPolicyClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.IAMPolicy.IAMPolicyClient.html) using the same call invoker as this client.

**Returns**

**Type**

**Description**

`[IAMPolicy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.IAMPolicy.html)[IAMPolicyClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.IAMPolicy.IAMPolicyClient.html)`

A new [IAMPolicy.IAMPolicyClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.IAMPolicy.IAMPolicyClient.html) for the same target as this client.

### CreateLocationsClient()

```
public virtual Locations.LocationsClient CreateLocationsClient()
```

Creates a new instance of [Locations.LocationsClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.Locations.LocationsClient.html) using the same call invoker as this client.

**Returns**

**Type**

**Description**

`[Locations](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.Locations.html)[LocationsClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.Locations.LocationsClient.html)`

A new [Locations.LocationsClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.Locations.LocationsClient.html) for the same target as this client.

### GetPublisherModel(GetPublisherModelRequest, CallOptions)

```
public virtual PublisherModel GetPublisherModel(GetPublisherModelRequest request, CallOptions options)
```

Gets a Model Garden publisher model.

**Parameters**

**Name**

**Description**

`request`

`[GetPublisherModelRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.21.0/Google.Cloud.AIPlatform.V1.GetPublisherModelRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[PublisherModel](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.21.0/Google.Cloud.AIPlatform.V1.PublisherModel)`

The response received from the server.

### GetPublisherModel(GetPublisherModelRequest, Metadata, DateTime?, CancellationToken)

```
public virtual PublisherModel GetPublisherModel(GetPublisherModelRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets a Model Garden publisher model.

**Parameters**

**Name**

**Description**

`request`

`[GetPublisherModelRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.21.0/Google.Cloud.AIPlatform.V1.GetPublisherModelRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[PublisherModel](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.21.0/Google.Cloud.AIPlatform.V1.PublisherModel)`

The response received from the server.

### GetPublisherModelAsync(GetPublisherModelRequest, CallOptions)

```
public virtual AsyncUnaryCall<PublisherModel> GetPublisherModelAsync(GetPublisherModelRequest request, CallOptions options)
```

Gets a Model Garden publisher model.

**Parameters**

**Name**

**Description**

`request`

`[GetPublisherModelRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.21.0/Google.Cloud.AIPlatform.V1.GetPublisherModelRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[PublisherModel](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.21.0/Google.Cloud.AIPlatform.V1.PublisherModel)`

The call object.

### GetPublisherModelAsync(GetPublisherModelRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<PublisherModel> GetPublisherModelAsync(GetPublisherModelRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets a Model Garden publisher model.

**Parameters**

**Name**

**Description**

`request`

`[GetPublisherModelRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.21.0/Google.Cloud.AIPlatform.V1.GetPublisherModelRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[PublisherModel](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.21.0/Google.Cloud.AIPlatform.V1.PublisherModel)`

The call object.

### NewInstance(ClientBaseConfiguration)

```
protected override ModelGardenService.ModelGardenServiceClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
```

Creates a new instance of client from given `ClientBaseConfiguration`.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html)[ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

**Returns**

**Type**

**Description**

`[ModelGardenService](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.21.0/Google.Cloud.AIPlatform.V1.ModelGardenService)[ModelGardenServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.21.0/Google.Cloud.AIPlatform.V1.ModelGardenService.ModelGardenServiceClient)`

**Overrides**

Grpc.Core.ClientBase<Google.Cloud.AIPlatform.V1.ModelGardenService.ModelGardenServiceClient>.NewInstance(Grpc.Core.ClientBase.ClientBaseConfiguration)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
