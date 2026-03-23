-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Confidential Computing v1 API - Class ConfidentialComputingClient (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.2.0keyboard\_arrow\_down

-   [1.11.0 (latest)](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/latest/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient)
-   [1.10.0](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.10.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient)
-   [1.9.0](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.9.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.8.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.7.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.6.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.5.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.4.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.3.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.1.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.0.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient)

```
public abstract class ConfidentialComputingClient
```

Reference documentation and code samples for the Confidential Computing v1 API class ConfidentialComputingClient.

ConfidentialComputing client wrapper, for convenient use.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ConfidentialComputingClient

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Derived Types

[ConfidentialComputingClientImpl](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClientImpl)

## Namespace

[Google.Cloud.ConfidentialComputing.V1](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1)

## Assembly

Google.Cloud.ConfidentialComputing.V1.dll

## Remarks

Service describing handlers for resources

## Properties

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the ConfidentialComputing service, which is a host of "confidentialcomputing.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default ConfidentialComputing scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`

**Remarks**

The default ConfidentialComputing scopes are:

-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)

### GrpcClient

```
public virtual ConfidentialComputing.ConfidentialComputingClient GrpcClient { get; }
```

The underlying gRPC ConfidentialComputing client

**Property Value**

**Type**

**Description**

`[ConfidentialComputing](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputing)[ConfidentialComputingClient](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputing.ConfidentialComputingClient)`

### LocationsClient

```
public virtual LocationsClient LocationsClient { get; }
```

The [LocationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/94ef638cba52b4508a352c841dd68e3cc9817fce/apis/Google.Cloud.Location/Google.Cloud.Location/LocationsClient.g.cs) associated with this client.

**Property Value**

**Type**

**Description**

`[LocationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/94ef638cba52b4508a352c841dd68e3cc9817fce/apis/Google.Cloud.Location/Google.Cloud.Location/LocationsClient.g.cs)`

### ServiceMetadata

```
public static ServiceMetadata ServiceMetadata { get; }
```

The service metadata associated with this client type.

**Property Value**

**Type**

**Description**

`[ServiceMetadata](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/ServiceMetadata.cs)`

## Methods

### Create()

```
public static ConfidentialComputingClient Create()
```

Synchronously creates a [ConfidentialComputingClient](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [ConfidentialComputingClientBuilder](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClientBuilder).

**Returns**

**Type**

**Description**

`[ConfidentialComputingClient](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient)`

The created [ConfidentialComputingClient](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient).

### CreateAsync(CancellationToken)

```
public static Task<ConfidentialComputingClient> CreateAsync(CancellationToken cancellationToken = default)
```

Asynchronously creates a [ConfidentialComputingClient](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [ConfidentialComputingClientBuilder](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ConfidentialComputingClient](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient)`

The task representing the created [ConfidentialComputingClient](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient).

### CreateChallenge(LocationName, Challenge, CallSettings)

```
public virtual Challenge CreateChallenge(LocationName parent, Challenge challenge, CallSettings callSettings = null)
```

Creates a new Challenge in a given project and location.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The resource name of the location where the Challenge will be used, in the format `projects/*/locations/*`.

`challenge`

`[Challenge](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.Challenge)`  

Required. The Challenge to be created. Currently this field can be empty as all the Challenge fields are set by the server.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Challenge](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.Challenge)`

The RPC response.

**Example**

```
// Create client
ConfidentialComputingClient confidentialComputingClient = ConfidentialComputingClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Challenge challenge = new Challenge();
// Make the request
Challenge response = confidentialComputingClient.CreateChallenge(parent, challenge);
```

### CreateChallenge(CreateChallengeRequest, CallSettings)

```
public virtual Challenge CreateChallenge(CreateChallengeRequest request, CallSettings callSettings = null)
```

Creates a new Challenge in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateChallengeRequest](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.CreateChallengeRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Challenge](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.Challenge)`

The RPC response.

**Example**

```
// Create client
ConfidentialComputingClient confidentialComputingClient = ConfidentialComputingClient.Create();
// Initialize request argument(s)
CreateChallengeRequest request = new CreateChallengeRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Challenge = new Challenge(),
};
// Make the request
Challenge response = confidentialComputingClient.CreateChallenge(request);
```

### CreateChallenge(string, Challenge, CallSettings)

```
public virtual Challenge CreateChallenge(string parent, Challenge challenge, CallSettings callSettings = null)
```

Creates a new Challenge in a given project and location.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the location where the Challenge will be used, in the format `projects/*/locations/*`.

`challenge`

`[Challenge](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.Challenge)`  

Required. The Challenge to be created. Currently this field can be empty as all the Challenge fields are set by the server.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Challenge](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.Challenge)`

The RPC response.

**Example**

```
// Create client
ConfidentialComputingClient confidentialComputingClient = ConfidentialComputingClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Challenge challenge = new Challenge();
// Make the request
Challenge response = confidentialComputingClient.CreateChallenge(parent, challenge);
```

### CreateChallengeAsync(LocationName, Challenge, CallSettings)

```
public virtual Task<Challenge> CreateChallengeAsync(LocationName parent, Challenge challenge, CallSettings callSettings = null)
```

Creates a new Challenge in a given project and location.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The resource name of the location where the Challenge will be used, in the format `projects/*/locations/*`.

`challenge`

`[Challenge](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.Challenge)`  

Required. The Challenge to be created. Currently this field can be empty as all the Challenge fields are set by the server.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Challenge](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.Challenge)`

A Task containing the RPC response.

**Example**

```
// Create client
ConfidentialComputingClient confidentialComputingClient = await ConfidentialComputingClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Challenge challenge = new Challenge();
// Make the request
Challenge response = await confidentialComputingClient.CreateChallengeAsync(parent, challenge);
```

### CreateChallengeAsync(LocationName, Challenge, CancellationToken)

```
public virtual Task<Challenge> CreateChallengeAsync(LocationName parent, Challenge challenge, CancellationToken cancellationToken)
```

Creates a new Challenge in a given project and location.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The resource name of the location where the Challenge will be used, in the format `projects/*/locations/*`.

`challenge`

`[Challenge](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.Challenge)`  

Required. The Challenge to be created. Currently this field can be empty as all the Challenge fields are set by the server.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Challenge](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.Challenge)`

A Task containing the RPC response.

**Example**

```
// Create client
ConfidentialComputingClient confidentialComputingClient = await ConfidentialComputingClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Challenge challenge = new Challenge();
// Make the request
Challenge response = await confidentialComputingClient.CreateChallengeAsync(parent, challenge);
```

### CreateChallengeAsync(CreateChallengeRequest, CallSettings)

```
public virtual Task<Challenge> CreateChallengeAsync(CreateChallengeRequest request, CallSettings callSettings = null)
```

Creates a new Challenge in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateChallengeRequest](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.CreateChallengeRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Challenge](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.Challenge)`

A Task containing the RPC response.

**Example**

```
// Create client
ConfidentialComputingClient confidentialComputingClient = await ConfidentialComputingClient.CreateAsync();
// Initialize request argument(s)
CreateChallengeRequest request = new CreateChallengeRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Challenge = new Challenge(),
};
// Make the request
Challenge response = await confidentialComputingClient.CreateChallengeAsync(request);
```

### CreateChallengeAsync(CreateChallengeRequest, CancellationToken)

```
public virtual Task<Challenge> CreateChallengeAsync(CreateChallengeRequest request, CancellationToken cancellationToken)
```

Creates a new Challenge in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateChallengeRequest](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.CreateChallengeRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Challenge](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.Challenge)`

A Task containing the RPC response.

**Example**

```
// Create client
ConfidentialComputingClient confidentialComputingClient = await ConfidentialComputingClient.CreateAsync();
// Initialize request argument(s)
CreateChallengeRequest request = new CreateChallengeRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Challenge = new Challenge(),
};
// Make the request
Challenge response = await confidentialComputingClient.CreateChallengeAsync(request);
```

### CreateChallengeAsync(string, Challenge, CallSettings)

```
public virtual Task<Challenge> CreateChallengeAsync(string parent, Challenge challenge, CallSettings callSettings = null)
```

Creates a new Challenge in a given project and location.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the location where the Challenge will be used, in the format `projects/*/locations/*`.

`challenge`

`[Challenge](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.Challenge)`  

Required. The Challenge to be created. Currently this field can be empty as all the Challenge fields are set by the server.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Challenge](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.Challenge)`

A Task containing the RPC response.

**Example**

```
// Create client
ConfidentialComputingClient confidentialComputingClient = await ConfidentialComputingClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Challenge challenge = new Challenge();
// Make the request
Challenge response = await confidentialComputingClient.CreateChallengeAsync(parent, challenge);
```

### CreateChallengeAsync(string, Challenge, CancellationToken)

```
public virtual Task<Challenge> CreateChallengeAsync(string parent, Challenge challenge, CancellationToken cancellationToken)
```

Creates a new Challenge in a given project and location.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the location where the Challenge will be used, in the format `projects/*/locations/*`.

`challenge`

`[Challenge](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.Challenge)`  

Required. The Challenge to be created. Currently this field can be empty as all the Challenge fields are set by the server.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Challenge](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.Challenge)`

A Task containing the RPC response.

**Example**

```
// Create client
ConfidentialComputingClient confidentialComputingClient = await ConfidentialComputingClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Challenge challenge = new Challenge();
// Make the request
Challenge response = await confidentialComputingClient.CreateChallengeAsync(parent, challenge);
```

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient#Google_Cloud_ConfidentialComputing_V1_ConfidentialComputingClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient#Google_Cloud_ConfidentialComputing_V1_ConfidentialComputingClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient#Google_Cloud_ConfidentialComputing_V1_ConfidentialComputingClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.ConfidentialComputingClient#Google_Cloud_ConfidentialComputing_V1_ConfidentialComputingClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

### VerifyAttestation(VerifyAttestationRequest, CallSettings)

```
public virtual VerifyAttestationResponse VerifyAttestation(VerifyAttestationRequest request, CallSettings callSettings = null)
```

Verifies the provided attestation info, returning a signed OIDC token.

**Parameters**

**Name**

**Description**

`request`

`[VerifyAttestationRequest](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.VerifyAttestationRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[VerifyAttestationResponse](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.VerifyAttestationResponse)`

The RPC response.

**Example**

```
// Create client
ConfidentialComputingClient confidentialComputingClient = ConfidentialComputingClient.Create();
// Initialize request argument(s)
VerifyAttestationRequest request = new VerifyAttestationRequest
{
    ChallengeAsChallengeName = ChallengeName.FromProjectLocationUuid("[PROJECT]", "[LOCATION]", "[UUID]"),
    GcpCredentials = new GcpCredentials(),
    TpmAttestation = new TpmAttestation(),
    ConfidentialSpaceInfo = new ConfidentialSpaceInfo(),
    TokenOptions = new TokenOptions(),
};
// Make the request
VerifyAttestationResponse response = confidentialComputingClient.VerifyAttestation(request);
```

### VerifyAttestationAsync(VerifyAttestationRequest, CallSettings)

```
public virtual Task<VerifyAttestationResponse> VerifyAttestationAsync(VerifyAttestationRequest request, CallSettings callSettings = null)
```

Verifies the provided attestation info, returning a signed OIDC token.

**Parameters**

**Name**

**Description**

`request`

`[VerifyAttestationRequest](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.VerifyAttestationRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[VerifyAttestationResponse](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.VerifyAttestationResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
ConfidentialComputingClient confidentialComputingClient = await ConfidentialComputingClient.CreateAsync();
// Initialize request argument(s)
VerifyAttestationRequest request = new VerifyAttestationRequest
{
    ChallengeAsChallengeName = ChallengeName.FromProjectLocationUuid("[PROJECT]", "[LOCATION]", "[UUID]"),
    GcpCredentials = new GcpCredentials(),
    TpmAttestation = new TpmAttestation(),
    ConfidentialSpaceInfo = new ConfidentialSpaceInfo(),
    TokenOptions = new TokenOptions(),
};
// Make the request
VerifyAttestationResponse response = await confidentialComputingClient.VerifyAttestationAsync(request);
```

### VerifyAttestationAsync(VerifyAttestationRequest, CancellationToken)

```
public virtual Task<VerifyAttestationResponse> VerifyAttestationAsync(VerifyAttestationRequest request, CancellationToken cancellationToken)
```

Verifies the provided attestation info, returning a signed OIDC token.

**Parameters**

**Name**

**Description**

`request`

`[VerifyAttestationRequest](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.VerifyAttestationRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[VerifyAttestationResponse](/dotnet/docs/reference/Google.Cloud.ConfidentialComputing.V1/1.2.0/Google.Cloud.ConfidentialComputing.V1.VerifyAttestationResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
ConfidentialComputingClient confidentialComputingClient = await ConfidentialComputingClient.CreateAsync();
// Initialize request argument(s)
VerifyAttestationRequest request = new VerifyAttestationRequest
{
    ChallengeAsChallengeName = ChallengeName.FromProjectLocationUuid("[PROJECT]", "[LOCATION]", "[UUID]"),
    GcpCredentials = new GcpCredentials(),
    TpmAttestation = new TpmAttestation(),
    ConfidentialSpaceInfo = new ConfidentialSpaceInfo(),
    TokenOptions = new TokenOptions(),
};
// Make the request
VerifyAttestationResponse response = await confidentialComputingClient.VerifyAttestationAsync(request);
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
