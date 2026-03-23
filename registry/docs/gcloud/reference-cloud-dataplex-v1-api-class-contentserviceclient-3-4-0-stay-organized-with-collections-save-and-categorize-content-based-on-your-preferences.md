-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Dataplex v1 API - Class ContentServiceClient (3.4.0) Stay organized with collections Save and categorize content based on your preferences.

3.13.0 (latest) 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.0.0

```
public abstract class ContentServiceClient
```

Reference documentation and code samples for the Cloud Dataplex v1 API class ContentServiceClient.

ContentService client wrapper, for convenient use.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ContentServiceClient

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Derived Types

[ContentServiceClientImpl](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentServiceClientImpl)

## Namespace

[Google.Cloud.Dataplex.V1](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1)

## Assembly

Google.Cloud.Dataplex.V1.dll

## Remarks

ContentService manages Notebook and SQL Scripts for Dataplex.

## Properties

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the ContentService service, which is a host of "dataplex.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default ContentService scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`

**Remarks**

The default ContentService scopes are:

-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)

### GrpcClient

```
public virtual ContentService.ContentServiceClient GrpcClient { get; }
```

The underlying gRPC ContentService client

**Property Value**

**Type**

**Description**

`[ContentService](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentService)[ContentServiceClient](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentService.ContentServiceClient)`

### IAMPolicyClient

```
public virtual IAMPolicyClient IAMPolicyClient { get; }
```

The [IAMPolicyClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.IAMPolicyClient.html) associated with this client.

**Property Value**

**Type**

**Description**

`[IAMPolicyClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.IAMPolicyClient.html)`

### LocationsClient

```
public virtual LocationsClient LocationsClient { get; }
```

The [LocationsClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.LocationsClient.html) associated with this client.

**Property Value**

**Type**

**Description**

`[LocationsClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.LocationsClient.html)`

### ServiceMetadata

```
public static ServiceMetadata ServiceMetadata { get; }
```

The service metadata associated with this client type.

**Property Value**

**Type**

**Description**

`[ServiceMetadata](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceMetadata.html)`

## Methods

### Create()

```
public static ContentServiceClient Create()
```

Synchronously creates a [ContentServiceClient](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentServiceClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [ContentServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentServiceClientBuilder).

**Returns**

**Type**

**Description**

`[ContentServiceClient](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentServiceClient)`

The created [ContentServiceClient](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentServiceClient).

### CreateAsync(CancellationToken)

```
public static Task<ContentServiceClient> CreateAsync(CancellationToken cancellationToken = default)
```

Asynchronously creates a [ContentServiceClient](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentServiceClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [ContentServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentServiceClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ContentServiceClient](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentServiceClient)`

The task representing the created [ContentServiceClient](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentServiceClient).

### CreateContent(CreateContentRequest, CallSettings)

```
public virtual Content CreateContent(CreateContentRequest request, CallSettings callSettings = null)
```

Create a content.

**Parameters**

**Name**

**Description**

`request`

`[CreateContentRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.CreateContentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

The RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
gcdv::CreateContentRequest request = new gcdv::CreateContentRequest
{
    ParentAsLakeName = gcdv::LakeName.FromProjectLocationLake("[PROJECT]", "[LOCATION]", "[LAKE]"),
    Content = new gcdv::Content(),
    ValidateOnly = false,
};
// Make the request
gcdv::Content response = contentServiceClient.CreateContent(request);
```

### CreateContent(LakeName, Content, CallSettings)

```
public virtual Content CreateContent(LakeName parent, Content content, CallSettings callSettings = null)
```

Create a content.

**Parameters**

**Name**

**Description**

`parent`

`[LakeName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.LakeName)`  

Required. The resource name of the parent lake: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}

`content`

`[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`  

Required. Content resource.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

The RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
gcdv::LakeName parent = gcdv::LakeName.FromProjectLocationLake("[PROJECT]", "[LOCATION]", "[LAKE]");
gcdv::Content content = new gcdv::Content();
// Make the request
gcdv::Content response = contentServiceClient.CreateContent(parent, content);
```

### CreateContent(string, Content, CallSettings)

```
public virtual Content CreateContent(string parent, Content content, CallSettings callSettings = null)
```

Create a content.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the parent lake: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}

`content`

`[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`  

Required. Content resource.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

The RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]/lakes/[LAKE]";
gcdv::Content content = new gcdv::Content();
// Make the request
gcdv::Content response = contentServiceClient.CreateContent(parent, content);
```

### CreateContentAsync(CreateContentRequest, CallSettings)

```
public virtual Task<Content> CreateContentAsync(CreateContentRequest request, CallSettings callSettings = null)
```

Create a content.

**Parameters**

**Name**

**Description**

`request`

`[CreateContentRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.CreateContentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::CreateContentRequest request = new gcdv::CreateContentRequest
{
    ParentAsLakeName = gcdv::LakeName.FromProjectLocationLake("[PROJECT]", "[LOCATION]", "[LAKE]"),
    Content = new gcdv::Content(),
    ValidateOnly = false,
};
// Make the request
gcdv::Content response = await contentServiceClient.CreateContentAsync(request);
```

### CreateContentAsync(CreateContentRequest, CancellationToken)

```
public virtual Task<Content> CreateContentAsync(CreateContentRequest request, CancellationToken cancellationToken)
```

Create a content.

**Parameters**

**Name**

**Description**

`request`

`[CreateContentRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.CreateContentRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::CreateContentRequest request = new gcdv::CreateContentRequest
{
    ParentAsLakeName = gcdv::LakeName.FromProjectLocationLake("[PROJECT]", "[LOCATION]", "[LAKE]"),
    Content = new gcdv::Content(),
    ValidateOnly = false,
};
// Make the request
gcdv::Content response = await contentServiceClient.CreateContentAsync(request);
```

### CreateContentAsync(LakeName, Content, CallSettings)

```
public virtual Task<Content> CreateContentAsync(LakeName parent, Content content, CallSettings callSettings = null)
```

Create a content.

**Parameters**

**Name**

**Description**

`parent`

`[LakeName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.LakeName)`  

Required. The resource name of the parent lake: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}

`content`

`[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`  

Required. Content resource.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::LakeName parent = gcdv::LakeName.FromProjectLocationLake("[PROJECT]", "[LOCATION]", "[LAKE]");
gcdv::Content content = new gcdv::Content();
// Make the request
gcdv::Content response = await contentServiceClient.CreateContentAsync(parent, content);
```

### CreateContentAsync(LakeName, Content, CancellationToken)

```
public virtual Task<Content> CreateContentAsync(LakeName parent, Content content, CancellationToken cancellationToken)
```

Create a content.

**Parameters**

**Name**

**Description**

`parent`

`[LakeName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.LakeName)`  

Required. The resource name of the parent lake: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}

`content`

`[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`  

Required. Content resource.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::LakeName parent = gcdv::LakeName.FromProjectLocationLake("[PROJECT]", "[LOCATION]", "[LAKE]");
gcdv::Content content = new gcdv::Content();
// Make the request
gcdv::Content response = await contentServiceClient.CreateContentAsync(parent, content);
```

### CreateContentAsync(string, Content, CallSettings)

```
public virtual Task<Content> CreateContentAsync(string parent, Content content, CallSettings callSettings = null)
```

Create a content.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the parent lake: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}

`content`

`[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`  

Required. Content resource.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]/lakes/[LAKE]";
gcdv::Content content = new gcdv::Content();
// Make the request
gcdv::Content response = await contentServiceClient.CreateContentAsync(parent, content);
```

### CreateContentAsync(string, Content, CancellationToken)

```
public virtual Task<Content> CreateContentAsync(string parent, Content content, CancellationToken cancellationToken)
```

Create a content.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the parent lake: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}

`content`

`[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`  

Required. Content resource.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]/lakes/[LAKE]";
gcdv::Content content = new gcdv::Content();
// Make the request
gcdv::Content response = await contentServiceClient.CreateContentAsync(parent, content);
```

### DeleteContent(ContentName, CallSettings)

```
public virtual void DeleteContent(ContentName name, CallSettings callSettings = null)
```

Delete a content.

**Parameters**

**Name**

**Description**

`name`

`[ContentName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentName)`  

Required. The resource name of the content: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}/content/{content\_id}

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
gcdv::ContentName name = gcdv::ContentName.FromProjectLocationLakeContent("[PROJECT]", "[LOCATION]", "[LAKE]", "[CONTENT]");
// Make the request
contentServiceClient.DeleteContent(name);
```

### DeleteContent(DeleteContentRequest, CallSettings)

```
public virtual void DeleteContent(DeleteContentRequest request, CallSettings callSettings = null)
```

Delete a content.

**Parameters**

**Name**

**Description**

`request`

`[DeleteContentRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.DeleteContentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
gcdv::DeleteContentRequest request = new gcdv::DeleteContentRequest
{
    ContentName = gcdv::ContentName.FromProjectLocationLakeContent("[PROJECT]", "[LOCATION]", "[LAKE]", "[CONTENT]"),
};
// Make the request
contentServiceClient.DeleteContent(request);
```

### DeleteContent(string, CallSettings)

```
public virtual void DeleteContent(string name, CallSettings callSettings = null)
```

Delete a content.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the content: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}/content/{content\_id}

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/lakes/[LAKE]/content/[CONTENT]";
// Make the request
contentServiceClient.DeleteContent(name);
```

### DeleteContentAsync(ContentName, CallSettings)

```
public virtual Task DeleteContentAsync(ContentName name, CallSettings callSettings = null)
```

Delete a content.

**Parameters**

**Name**

**Description**

`name`

`[ContentName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentName)`  

Required. The resource name of the content: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}/content/{content\_id}

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::ContentName name = gcdv::ContentName.FromProjectLocationLakeContent("[PROJECT]", "[LOCATION]", "[LAKE]", "[CONTENT]");
// Make the request
await contentServiceClient.DeleteContentAsync(name);
```

### DeleteContentAsync(ContentName, CancellationToken)

```
public virtual Task DeleteContentAsync(ContentName name, CancellationToken cancellationToken)
```

Delete a content.

**Parameters**

**Name**

**Description**

`name`

`[ContentName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentName)`  

Required. The resource name of the content: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}/content/{content\_id}

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::ContentName name = gcdv::ContentName.FromProjectLocationLakeContent("[PROJECT]", "[LOCATION]", "[LAKE]", "[CONTENT]");
// Make the request
await contentServiceClient.DeleteContentAsync(name);
```

### DeleteContentAsync(DeleteContentRequest, CallSettings)

```
public virtual Task DeleteContentAsync(DeleteContentRequest request, CallSettings callSettings = null)
```

Delete a content.

**Parameters**

**Name**

**Description**

`request`

`[DeleteContentRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.DeleteContentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::DeleteContentRequest request = new gcdv::DeleteContentRequest
{
    ContentName = gcdv::ContentName.FromProjectLocationLakeContent("[PROJECT]", "[LOCATION]", "[LAKE]", "[CONTENT]"),
};
// Make the request
await contentServiceClient.DeleteContentAsync(request);
```

### DeleteContentAsync(DeleteContentRequest, CancellationToken)

```
public virtual Task DeleteContentAsync(DeleteContentRequest request, CancellationToken cancellationToken)
```

Delete a content.

**Parameters**

**Name**

**Description**

`request`

`[DeleteContentRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.DeleteContentRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::DeleteContentRequest request = new gcdv::DeleteContentRequest
{
    ContentName = gcdv::ContentName.FromProjectLocationLakeContent("[PROJECT]", "[LOCATION]", "[LAKE]", "[CONTENT]"),
};
// Make the request
await contentServiceClient.DeleteContentAsync(request);
```

### DeleteContentAsync(string, CallSettings)

```
public virtual Task DeleteContentAsync(string name, CallSettings callSettings = null)
```

Delete a content.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the content: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}/content/{content\_id}

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/lakes/[LAKE]/content/[CONTENT]";
// Make the request
await contentServiceClient.DeleteContentAsync(name);
```

### DeleteContentAsync(string, CancellationToken)

```
public virtual Task DeleteContentAsync(string name, CancellationToken cancellationToken)
```

Delete a content.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the content: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}/content/{content\_id}

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/lakes/[LAKE]/content/[CONTENT]";
// Make the request
await contentServiceClient.DeleteContentAsync(name);
```

### GetContent(ContentName, CallSettings)

```
public virtual Content GetContent(ContentName name, CallSettings callSettings = null)
```

Get a content resource.

**Parameters**

**Name**

**Description**

`name`

`[ContentName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentName)`  

Required. The resource name of the content: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}/content/{content\_id}

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

The RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
gcdv::ContentName name = gcdv::ContentName.FromProjectLocationLakeContent("[PROJECT]", "[LOCATION]", "[LAKE]", "[CONTENT]");
// Make the request
gcdv::Content response = contentServiceClient.GetContent(name);
```

### GetContent(GetContentRequest, CallSettings)

```
public virtual Content GetContent(GetContentRequest request, CallSettings callSettings = null)
```

Get a content resource.

**Parameters**

**Name**

**Description**

`request`

`[GetContentRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.GetContentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

The RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
gcdv::GetContentRequest request = new gcdv::GetContentRequest
{
    ContentName = gcdv::ContentName.FromProjectLocationLakeContent("[PROJECT]", "[LOCATION]", "[LAKE]", "[CONTENT]"),
    View = gcdv::GetContentRequest.Types.ContentView.Unspecified,
};
// Make the request
gcdv::Content response = contentServiceClient.GetContent(request);
```

### GetContent(string, CallSettings)

```
public virtual Content GetContent(string name, CallSettings callSettings = null)
```

Get a content resource.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the content: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}/content/{content\_id}

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

The RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/lakes/[LAKE]/content/[CONTENT]";
// Make the request
gcdv::Content response = contentServiceClient.GetContent(name);
```

### GetContentAsync(ContentName, CallSettings)

```
public virtual Task<Content> GetContentAsync(ContentName name, CallSettings callSettings = null)
```

Get a content resource.

**Parameters**

**Name**

**Description**

`name`

`[ContentName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentName)`  

Required. The resource name of the content: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}/content/{content\_id}

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::ContentName name = gcdv::ContentName.FromProjectLocationLakeContent("[PROJECT]", "[LOCATION]", "[LAKE]", "[CONTENT]");
// Make the request
gcdv::Content response = await contentServiceClient.GetContentAsync(name);
```

### GetContentAsync(ContentName, CancellationToken)

```
public virtual Task<Content> GetContentAsync(ContentName name, CancellationToken cancellationToken)
```

Get a content resource.

**Parameters**

**Name**

**Description**

`name`

`[ContentName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentName)`  

Required. The resource name of the content: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}/content/{content\_id}

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::ContentName name = gcdv::ContentName.FromProjectLocationLakeContent("[PROJECT]", "[LOCATION]", "[LAKE]", "[CONTENT]");
// Make the request
gcdv::Content response = await contentServiceClient.GetContentAsync(name);
```

### GetContentAsync(GetContentRequest, CallSettings)

```
public virtual Task<Content> GetContentAsync(GetContentRequest request, CallSettings callSettings = null)
```

Get a content resource.

**Parameters**

**Name**

**Description**

`request`

`[GetContentRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.GetContentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::GetContentRequest request = new gcdv::GetContentRequest
{
    ContentName = gcdv::ContentName.FromProjectLocationLakeContent("[PROJECT]", "[LOCATION]", "[LAKE]", "[CONTENT]"),
    View = gcdv::GetContentRequest.Types.ContentView.Unspecified,
};
// Make the request
gcdv::Content response = await contentServiceClient.GetContentAsync(request);
```

### GetContentAsync(GetContentRequest, CancellationToken)

```
public virtual Task<Content> GetContentAsync(GetContentRequest request, CancellationToken cancellationToken)
```

Get a content resource.

**Parameters**

**Name**

**Description**

`request`

`[GetContentRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.GetContentRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::GetContentRequest request = new gcdv::GetContentRequest
{
    ContentName = gcdv::ContentName.FromProjectLocationLakeContent("[PROJECT]", "[LOCATION]", "[LAKE]", "[CONTENT]"),
    View = gcdv::GetContentRequest.Types.ContentView.Unspecified,
};
// Make the request
gcdv::Content response = await contentServiceClient.GetContentAsync(request);
```

### GetContentAsync(string, CallSettings)

```
public virtual Task<Content> GetContentAsync(string name, CallSettings callSettings = null)
```

Get a content resource.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the content: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}/content/{content\_id}

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/lakes/[LAKE]/content/[CONTENT]";
// Make the request
gcdv::Content response = await contentServiceClient.GetContentAsync(name);
```

### GetContentAsync(string, CancellationToken)

```
public virtual Task<Content> GetContentAsync(string name, CancellationToken cancellationToken)
```

Get a content resource.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the content: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}/content/{content\_id}

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/lakes/[LAKE]/content/[CONTENT]";
// Make the request
gcdv::Content response = await contentServiceClient.GetContentAsync(name);
```

### GetIamPolicy(IResourceName, CallSettings)

```
public virtual Policy GetIamPolicy(IResourceName resource, CallSettings callSettings = null)
```

Gets the access control policy for a contentitem resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.

Caller must have Google IAM `dataplex.content.getIamPolicy` permission on the resource.

**Parameters**

**Name**

**Description**

`resource`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

The RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
// Make the request
Policy response = contentServiceClient.GetIamPolicy(resource);
```

### GetIamPolicy(GetIamPolicyRequest, CallSettings)

```
public virtual Policy GetIamPolicy(GetIamPolicyRequest request, CallSettings callSettings = null)
```

Gets the access control policy for a contentitem resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.

Caller must have Google IAM `dataplex.content.getIamPolicy` permission on the resource.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.GetIamPolicyRequest.html)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

The RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
GetIamPolicyRequest request = new GetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Options = new GetPolicyOptions(),
};
// Make the request
Policy response = contentServiceClient.GetIamPolicy(request);
```

### GetIamPolicy(string, CallSettings)

```
public virtual Policy GetIamPolicy(string resource, CallSettings callSettings = null)
```

Gets the access control policy for a contentitem resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.

Caller must have Google IAM `dataplex.content.getIamPolicy` permission on the resource.

**Parameters**

**Name**

**Description**

`resource`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

The RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
// Make the request
Policy response = contentServiceClient.GetIamPolicy(resource);
```

### GetIamPolicyAsync(IResourceName, CallSettings)

```
public virtual Task<Policy> GetIamPolicyAsync(IResourceName resource, CallSettings callSettings = null)
```

Gets the access control policy for a contentitem resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.

Caller must have Google IAM `dataplex.content.getIamPolicy` permission on the resource.

**Parameters**

**Name**

**Description**

`resource`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
// Make the request
Policy response = await contentServiceClient.GetIamPolicyAsync(resource);
```

### GetIamPolicyAsync(IResourceName, CancellationToken)

```
public virtual Task<Policy> GetIamPolicyAsync(IResourceName resource, CancellationToken cancellationToken)
```

Gets the access control policy for a contentitem resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.

Caller must have Google IAM `dataplex.content.getIamPolicy` permission on the resource.

**Parameters**

**Name**

**Description**

`resource`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
// Make the request
Policy response = await contentServiceClient.GetIamPolicyAsync(resource);
```

### GetIamPolicyAsync(GetIamPolicyRequest, CallSettings)

```
public virtual Task<Policy> GetIamPolicyAsync(GetIamPolicyRequest request, CallSettings callSettings = null)
```

Gets the access control policy for a contentitem resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.

Caller must have Google IAM `dataplex.content.getIamPolicy` permission on the resource.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.GetIamPolicyRequest.html)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
GetIamPolicyRequest request = new GetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Options = new GetPolicyOptions(),
};
// Make the request
Policy response = await contentServiceClient.GetIamPolicyAsync(request);
```

### GetIamPolicyAsync(GetIamPolicyRequest, CancellationToken)

```
public virtual Task<Policy> GetIamPolicyAsync(GetIamPolicyRequest request, CancellationToken cancellationToken)
```

Gets the access control policy for a contentitem resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.

Caller must have Google IAM `dataplex.content.getIamPolicy` permission on the resource.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.GetIamPolicyRequest.html)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
GetIamPolicyRequest request = new GetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Options = new GetPolicyOptions(),
};
// Make the request
Policy response = await contentServiceClient.GetIamPolicyAsync(request);
```

### GetIamPolicyAsync(string, CallSettings)

```
public virtual Task<Policy> GetIamPolicyAsync(string resource, CallSettings callSettings = null)
```

Gets the access control policy for a contentitem resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.

Caller must have Google IAM `dataplex.content.getIamPolicy` permission on the resource.

**Parameters**

**Name**

**Description**

`resource`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
// Make the request
Policy response = await contentServiceClient.GetIamPolicyAsync(resource);
```

### GetIamPolicyAsync(string, CancellationToken)

```
public virtual Task<Policy> GetIamPolicyAsync(string resource, CancellationToken cancellationToken)
```

Gets the access control policy for a contentitem resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.

Caller must have Google IAM `dataplex.content.getIamPolicy` permission on the resource.

**Parameters**

**Name**

**Description**

`resource`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
// Make the request
Policy response = await contentServiceClient.GetIamPolicyAsync(resource);
```

### ListContent(LakeName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListContentResponse, Content> ListContent(LakeName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

List content.

**Parameters**

**Name**

**Description**

`parent`

`[LakeName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.LakeName)`  

Required. The resource name of the parent lake: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListContentResponse](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ListContentResponse)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A pageable sequence of [Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content) resources.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
gcdv::LakeName parent = gcdv::LakeName.FromProjectLocationLake("[PROJECT]", "[LOCATION]", "[LAKE]");
// Make the request
PagedEnumerable<gcdv::ListContentResponse, gcdv::Content> response = contentServiceClient.ListContent(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (gcdv::Content item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (gcdv::ListContentResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gcdv::Content item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gcdv::Content> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gcdv::Content item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListContent(ListContentRequest, CallSettings)

```
public virtual PagedEnumerable<ListContentResponse, Content> ListContent(ListContentRequest request, CallSettings callSettings = null)
```

List content.

**Parameters**

**Name**

**Description**

`request`

`[ListContentRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ListContentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListContentResponse](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ListContentResponse)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A pageable sequence of [Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content) resources.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
gcdv::ListContentRequest request = new gcdv::ListContentRequest
{
    ParentAsLakeName = gcdv::LakeName.FromProjectLocationLake("[PROJECT]", "[LOCATION]", "[LAKE]"),
    Filter = "",
};
// Make the request
PagedEnumerable<gcdv::ListContentResponse, gcdv::Content> response = contentServiceClient.ListContent(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (gcdv::Content item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (gcdv::ListContentResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gcdv::Content item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gcdv::Content> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gcdv::Content item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListContent(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListContentResponse, Content> ListContent(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

List content.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the parent lake: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListContentResponse](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ListContentResponse)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A pageable sequence of [Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content) resources.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]/lakes/[LAKE]";
// Make the request
PagedEnumerable<gcdv::ListContentResponse, gcdv::Content> response = contentServiceClient.ListContent(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (gcdv::Content item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (gcdv::ListContentResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gcdv::Content item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gcdv::Content> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gcdv::Content item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListContentAsync(LakeName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListContentResponse, Content> ListContentAsync(LakeName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

List content.

**Parameters**

**Name**

**Description**

`parent`

`[LakeName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.LakeName)`  

Required. The resource name of the parent lake: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListContentResponse](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ListContentResponse)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A pageable asynchronous sequence of [Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content) resources.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::LakeName parent = gcdv::LakeName.FromProjectLocationLake("[PROJECT]", "[LOCATION]", "[LAKE]");
// Make the request
PagedAsyncEnumerable<gcdv::ListContentResponse, gcdv::Content> response = contentServiceClient.ListContentAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((gcdv::Content item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((gcdv::ListContentResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gcdv::Content item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gcdv::Content> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gcdv::Content item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListContentAsync(ListContentRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListContentResponse, Content> ListContentAsync(ListContentRequest request, CallSettings callSettings = null)
```

List content.

**Parameters**

**Name**

**Description**

`request`

`[ListContentRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ListContentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListContentResponse](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ListContentResponse)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A pageable asynchronous sequence of [Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content) resources.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::ListContentRequest request = new gcdv::ListContentRequest
{
    ParentAsLakeName = gcdv::LakeName.FromProjectLocationLake("[PROJECT]", "[LOCATION]", "[LAKE]"),
    Filter = "",
};
// Make the request
PagedAsyncEnumerable<gcdv::ListContentResponse, gcdv::Content> response = contentServiceClient.ListContentAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((gcdv::Content item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((gcdv::ListContentResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gcdv::Content item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gcdv::Content> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gcdv::Content item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListContentAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListContentResponse, Content> ListContentAsync(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

List content.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the parent lake: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListContentResponse](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ListContentResponse)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A pageable asynchronous sequence of [Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content) resources.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]/lakes/[LAKE]";
// Make the request
PagedAsyncEnumerable<gcdv::ListContentResponse, gcdv::Content> response = contentServiceClient.ListContentAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((gcdv::Content item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((gcdv::ListContentResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gcdv::Content item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gcdv::Content> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gcdv::Content item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### SetIamPolicy(SetIamPolicyRequest, CallSettings)

```
public virtual Policy SetIamPolicy(SetIamPolicyRequest request, CallSettings callSettings = null)
```

Sets the access control policy on the specified contentitem resource. Replaces any existing policy.

Caller must have Google IAM `dataplex.content.setIamPolicy` permission on the resource.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.SetIamPolicyRequest.html)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

The RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
SetIamPolicyRequest request = new SetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Policy = new Policy(),
    UpdateMask = new FieldMask(),
};
// Make the request
Policy response = contentServiceClient.SetIamPolicy(request);
```

### SetIamPolicyAsync(SetIamPolicyRequest, CallSettings)

```
public virtual Task<Policy> SetIamPolicyAsync(SetIamPolicyRequest request, CallSettings callSettings = null)
```

Sets the access control policy on the specified contentitem resource. Replaces any existing policy.

Caller must have Google IAM `dataplex.content.setIamPolicy` permission on the resource.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.SetIamPolicyRequest.html)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
SetIamPolicyRequest request = new SetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Policy = new Policy(),
    UpdateMask = new FieldMask(),
};
// Make the request
Policy response = await contentServiceClient.SetIamPolicyAsync(request);
```

### SetIamPolicyAsync(SetIamPolicyRequest, CancellationToken)

```
public virtual Task<Policy> SetIamPolicyAsync(SetIamPolicyRequest request, CancellationToken cancellationToken)
```

Sets the access control policy on the specified contentitem resource. Replaces any existing policy.

Caller must have Google IAM `dataplex.content.setIamPolicy` permission on the resource.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.SetIamPolicyRequest.html)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
SetIamPolicyRequest request = new SetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Policy = new Policy(),
    UpdateMask = new FieldMask(),
};
// Make the request
Policy response = await contentServiceClient.SetIamPolicyAsync(request);
```

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentServiceClient#Google_Cloud_Dataplex_V1_ContentServiceClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentServiceClient#Google_Cloud_Dataplex_V1_ContentServiceClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentServiceClient#Google_Cloud_Dataplex_V1_ContentServiceClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.ContentServiceClient#Google_Cloud_Dataplex_V1_ContentServiceClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

### TestIamPermissions(TestIamPermissionsRequest, CallSettings)

```
public virtual TestIamPermissionsResponse TestIamPermissions(TestIamPermissionsRequest request, CallSettings callSettings = null)
```

Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (a `NOT_FOUND` error is not returned).

A caller is not required to have Google IAM permission to make this request.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsRequest.html)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TestIamPermissionsResponse](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsResponse.html)`

The RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
TestIamPermissionsRequest request = new TestIamPermissionsRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Permissions = { "", },
};
// Make the request
TestIamPermissionsResponse response = contentServiceClient.TestIamPermissions(request);
```

### TestIamPermissionsAsync(TestIamPermissionsRequest, CallSettings)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsRequest request, CallSettings callSettings = null)
```

Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (a `NOT_FOUND` error is not returned).

A caller is not required to have Google IAM permission to make this request.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsRequest.html)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TestIamPermissionsResponse](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsResponse.html)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
TestIamPermissionsRequest request = new TestIamPermissionsRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Permissions = { "", },
};
// Make the request
TestIamPermissionsResponse response = await contentServiceClient.TestIamPermissionsAsync(request);
```

### TestIamPermissionsAsync(TestIamPermissionsRequest, CancellationToken)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsRequest request, CancellationToken cancellationToken)
```

Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (a `NOT_FOUND` error is not returned).

A caller is not required to have Google IAM permission to make this request.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsRequest.html)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TestIamPermissionsResponse](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsResponse.html)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
TestIamPermissionsRequest request = new TestIamPermissionsRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Permissions = { "", },
};
// Make the request
TestIamPermissionsResponse response = await contentServiceClient.TestIamPermissionsAsync(request);
```

### UpdateContent(Content, FieldMask, CallSettings)

```
public virtual Content UpdateContent(Content content, FieldMask updateMask, CallSettings callSettings = null)
```

Update a content. Only supports full resource update.

**Parameters**

**Name**

**Description**

`content`

`[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`  

Required. Update description. Only fields specified in `update_mask` are updated.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. Mask of fields to update.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

The RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
gcdv::Content content = new gcdv::Content();
FieldMask updateMask = new FieldMask();
// Make the request
gcdv::Content response = contentServiceClient.UpdateContent(content, updateMask);
```

### UpdateContent(UpdateContentRequest, CallSettings)

```
public virtual Content UpdateContent(UpdateContentRequest request, CallSettings callSettings = null)
```

Update a content. Only supports full resource update.

**Parameters**

**Name**

**Description**

`request`

`[UpdateContentRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.UpdateContentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

The RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = gcdv::ContentServiceClient.Create();
// Initialize request argument(s)
gcdv::UpdateContentRequest request = new gcdv::UpdateContentRequest
{
    UpdateMask = new FieldMask(),
    Content = new gcdv::Content(),
    ValidateOnly = false,
};
// Make the request
gcdv::Content response = contentServiceClient.UpdateContent(request);
```

### UpdateContentAsync(Content, FieldMask, CallSettings)

```
public virtual Task<Content> UpdateContentAsync(Content content, FieldMask updateMask, CallSettings callSettings = null)
```

Update a content. Only supports full resource update.

**Parameters**

**Name**

**Description**

`content`

`[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`  

Required. Update description. Only fields specified in `update_mask` are updated.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. Mask of fields to update.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::Content content = new gcdv::Content();
FieldMask updateMask = new FieldMask();
// Make the request
gcdv::Content response = await contentServiceClient.UpdateContentAsync(content, updateMask);
```

### UpdateContentAsync(Content, FieldMask, CancellationToken)

```
public virtual Task<Content> UpdateContentAsync(Content content, FieldMask updateMask, CancellationToken cancellationToken)
```

Update a content. Only supports full resource update.

**Parameters**

**Name**

**Description**

`content`

`[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`  

Required. Update description. Only fields specified in `update_mask` are updated.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. Mask of fields to update.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::Content content = new gcdv::Content();
FieldMask updateMask = new FieldMask();
// Make the request
gcdv::Content response = await contentServiceClient.UpdateContentAsync(content, updateMask);
```

### UpdateContentAsync(UpdateContentRequest, CallSettings)

```
public virtual Task<Content> UpdateContentAsync(UpdateContentRequest request, CallSettings callSettings = null)
```

Update a content. Only supports full resource update.

**Parameters**

**Name**

**Description**

`request`

`[UpdateContentRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.UpdateContentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::UpdateContentRequest request = new gcdv::UpdateContentRequest
{
    UpdateMask = new FieldMask(),
    Content = new gcdv::Content(),
    ValidateOnly = false,
};
// Make the request
gcdv::Content response = await contentServiceClient.UpdateContentAsync(request);
```

### UpdateContentAsync(UpdateContentRequest, CancellationToken)

```
public virtual Task<Content> UpdateContentAsync(UpdateContentRequest request, CancellationToken cancellationToken)
```

Update a content. Only supports full resource update.

**Parameters**

**Name**

**Description**

`request`

`[UpdateContentRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.UpdateContentRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Content](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.4.0/Google.Cloud.Dataplex.V1.Content)`

A Task containing the RPC response.

**Example**

```
// Create client
gcdv::ContentServiceClient contentServiceClient = await gcdv::ContentServiceClient.CreateAsync();
// Initialize request argument(s)
gcdv::UpdateContentRequest request = new gcdv::UpdateContentRequest
{
    UpdateMask = new FieldMask(),
    Content = new gcdv::Content(),
    ValidateOnly = false,
};
// Make the request
gcdv::Content response = await contentServiceClient.UpdateContentAsync(request);
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
