-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Transcoder v1 API - Class TranscoderServiceClient (2.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.4.0keyboard\_arrow\_down

-   [2.12.0 (latest)](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/latest/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.11.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.10.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.9.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.8.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.7.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.6.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.5.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.3.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.2.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.1.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.0.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/1.0.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient)

```
public abstract class TranscoderServiceClient
```

Reference documentation and code samples for the Transcoder v1 API class TranscoderServiceClient.

TranscoderService client wrapper, for convenient use.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> TranscoderServiceClient

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Derived Types

[TranscoderServiceClientImpl](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClientImpl)

## Namespace

[Google](https://cloud.google.com/dotnet/docs/reference/Google.Apis/latest/Google.html)Google.CloudGoogle.Cloud.VideoGoogle.Cloud.Video.Transcoder[V1](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1)

## Assembly

Google.Cloud.Video.Transcoder.V1.dll

## Remarks

Using the Transcoder API, you can queue asynchronous jobs for transcoding media into various output formats. Output formats may include different streaming standards such as HTTP Live Streaming (HLS) and Dynamic Adaptive Streaming over HTTP (DASH). You can also customize jobs using advanced features such as Digital Rights Management (DRM), audio equalization, content concatenation, and digital ad-stitch ready content generation.

## Properties

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the TranscoderService service, which is a host of "transcoder.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default TranscoderService scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`

**Remarks**

The default TranscoderService scopes are:

-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)

### GrpcClient

```
public virtual TranscoderService.TranscoderServiceClient GrpcClient { get; }
```

The underlying gRPC TranscoderService client

**Property Value**

**Type**

**Description**

`[TranscoderService](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.TranscoderService)[TranscoderServiceClient](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.TranscoderService.TranscoderServiceClient)`

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
public static TranscoderServiceClient Create()
```

Synchronously creates a [TranscoderServiceClient](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [TranscoderServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClientBuilder).

**Returns**

**Type**

**Description**

`[TranscoderServiceClient](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient)`

The created [TranscoderServiceClient](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient).

### CreateAsync(CancellationToken)

```
public static Task<TranscoderServiceClient> CreateAsync(CancellationToken cancellationToken = default)
```

Asynchronously creates a [TranscoderServiceClient](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [TranscoderServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TranscoderServiceClient](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient)`

The task representing the created [TranscoderServiceClient](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient).

### CreateJob(LocationName, Job, CallSettings)

```
public virtual Job CreateJob(LocationName parent, Job job, CallSettings callSettings = null)
```

Creates a job in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The parent location to create and process this job. Format: `projects/{project}/locations/{location}`

`job`

`[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`  

Required. Parameters for creating transcoding job.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

The RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Job job = new Job();
// Make the request
Job response = transcoderServiceClient.CreateJob(parent, job);
```

### CreateJob(CreateJobRequest, CallSettings)

```
public virtual Job CreateJob(CreateJobRequest request, CallSettings callSettings = null)
```

Creates a job in the specified region.

**Parameters**

**Name**

**Description**

`request`

`[CreateJobRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.CreateJobRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

The RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
CreateJobRequest request = new CreateJobRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Job = new Job(),
};
// Make the request
Job response = transcoderServiceClient.CreateJob(request);
```

### CreateJob(string, Job, CallSettings)

```
public virtual Job CreateJob(string parent, Job job, CallSettings callSettings = null)
```

Creates a job in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The parent location to create and process this job. Format: `projects/{project}/locations/{location}`

`job`

`[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`  

Required. Parameters for creating transcoding job.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

The RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Job job = new Job();
// Make the request
Job response = transcoderServiceClient.CreateJob(parent, job);
```

### CreateJobAsync(LocationName, Job, CallSettings)

```
public virtual Task<Job> CreateJobAsync(LocationName parent, Job job, CallSettings callSettings = null)
```

Creates a job in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The parent location to create and process this job. Format: `projects/{project}/locations/{location}`

`job`

`[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`  

Required. Parameters for creating transcoding job.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Job job = new Job();
// Make the request
Job response = await transcoderServiceClient.CreateJobAsync(parent, job);
```

### CreateJobAsync(LocationName, Job, CancellationToken)

```
public virtual Task<Job> CreateJobAsync(LocationName parent, Job job, CancellationToken cancellationToken)
```

Creates a job in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The parent location to create and process this job. Format: `projects/{project}/locations/{location}`

`job`

`[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`  

Required. Parameters for creating transcoding job.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Job job = new Job();
// Make the request
Job response = await transcoderServiceClient.CreateJobAsync(parent, job);
```

### CreateJobAsync(CreateJobRequest, CallSettings)

```
public virtual Task<Job> CreateJobAsync(CreateJobRequest request, CallSettings callSettings = null)
```

Creates a job in the specified region.

**Parameters**

**Name**

**Description**

`request`

`[CreateJobRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.CreateJobRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
CreateJobRequest request = new CreateJobRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Job = new Job(),
};
// Make the request
Job response = await transcoderServiceClient.CreateJobAsync(request);
```

### CreateJobAsync(CreateJobRequest, CancellationToken)

```
public virtual Task<Job> CreateJobAsync(CreateJobRequest request, CancellationToken cancellationToken)
```

Creates a job in the specified region.

**Parameters**

**Name**

**Description**

`request`

`[CreateJobRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.CreateJobRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
CreateJobRequest request = new CreateJobRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Job = new Job(),
};
// Make the request
Job response = await transcoderServiceClient.CreateJobAsync(request);
```

### CreateJobAsync(string, Job, CallSettings)

```
public virtual Task<Job> CreateJobAsync(string parent, Job job, CallSettings callSettings = null)
```

Creates a job in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The parent location to create and process this job. Format: `projects/{project}/locations/{location}`

`job`

`[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`  

Required. Parameters for creating transcoding job.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Job job = new Job();
// Make the request
Job response = await transcoderServiceClient.CreateJobAsync(parent, job);
```

### CreateJobAsync(string, Job, CancellationToken)

```
public virtual Task<Job> CreateJobAsync(string parent, Job job, CancellationToken cancellationToken)
```

Creates a job in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The parent location to create and process this job. Format: `projects/{project}/locations/{location}`

`job`

`[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`  

Required. Parameters for creating transcoding job.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Job job = new Job();
// Make the request
Job response = await transcoderServiceClient.CreateJobAsync(parent, job);
```

### CreateJobTemplate(LocationName, JobTemplate, string, CallSettings)

```
public virtual JobTemplate CreateJobTemplate(LocationName parent, JobTemplate jobTemplate, string jobTemplateId, CallSettings callSettings = null)
```

Creates a job template in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The parent location to create this job template. Format: `projects/{project}/locations/{location}`

`jobTemplate`

`[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`  

Required. Parameters for creating job template.

`jobTemplateId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The ID to use for the job template, which will become the final component of the job template's resource name.

This value should be 4-63 characters, and valid characters must match the regular expression `[a-zA-Z][a-zA-Z0-9_-]*`.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

The RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
JobTemplate jobTemplate = new JobTemplate();
string jobTemplateId = "";
// Make the request
JobTemplate response = transcoderServiceClient.CreateJobTemplate(parent, jobTemplate, jobTemplateId);
```

### CreateJobTemplate(CreateJobTemplateRequest, CallSettings)

```
public virtual JobTemplate CreateJobTemplate(CreateJobTemplateRequest request, CallSettings callSettings = null)
```

Creates a job template in the specified region.

**Parameters**

**Name**

**Description**

`request`

`[CreateJobTemplateRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.CreateJobTemplateRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

The RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
CreateJobTemplateRequest request = new CreateJobTemplateRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    JobTemplate = new JobTemplate(),
    JobTemplateId = "",
};
// Make the request
JobTemplate response = transcoderServiceClient.CreateJobTemplate(request);
```

### CreateJobTemplate(string, JobTemplate, string, CallSettings)

```
public virtual JobTemplate CreateJobTemplate(string parent, JobTemplate jobTemplate, string jobTemplateId, CallSettings callSettings = null)
```

Creates a job template in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The parent location to create this job template. Format: `projects/{project}/locations/{location}`

`jobTemplate`

`[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`  

Required. Parameters for creating job template.

`jobTemplateId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The ID to use for the job template, which will become the final component of the job template's resource name.

This value should be 4-63 characters, and valid characters must match the regular expression `[a-zA-Z][a-zA-Z0-9_-]*`.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

The RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
JobTemplate jobTemplate = new JobTemplate();
string jobTemplateId = "";
// Make the request
JobTemplate response = transcoderServiceClient.CreateJobTemplate(parent, jobTemplate, jobTemplateId);
```

### CreateJobTemplateAsync(LocationName, JobTemplate, string, CallSettings)

```
public virtual Task<JobTemplate> CreateJobTemplateAsync(LocationName parent, JobTemplate jobTemplate, string jobTemplateId, CallSettings callSettings = null)
```

Creates a job template in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The parent location to create this job template. Format: `projects/{project}/locations/{location}`

`jobTemplate`

`[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`  

Required. Parameters for creating job template.

`jobTemplateId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The ID to use for the job template, which will become the final component of the job template's resource name.

This value should be 4-63 characters, and valid characters must match the regular expression `[a-zA-Z][a-zA-Z0-9_-]*`.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
JobTemplate jobTemplate = new JobTemplate();
string jobTemplateId = "";
// Make the request
JobTemplate response = await transcoderServiceClient.CreateJobTemplateAsync(parent, jobTemplate, jobTemplateId);
```

### CreateJobTemplateAsync(LocationName, JobTemplate, string, CancellationToken)

```
public virtual Task<JobTemplate> CreateJobTemplateAsync(LocationName parent, JobTemplate jobTemplate, string jobTemplateId, CancellationToken cancellationToken)
```

Creates a job template in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The parent location to create this job template. Format: `projects/{project}/locations/{location}`

`jobTemplate`

`[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`  

Required. Parameters for creating job template.

`jobTemplateId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The ID to use for the job template, which will become the final component of the job template's resource name.

This value should be 4-63 characters, and valid characters must match the regular expression `[a-zA-Z][a-zA-Z0-9_-]*`.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
JobTemplate jobTemplate = new JobTemplate();
string jobTemplateId = "";
// Make the request
JobTemplate response = await transcoderServiceClient.CreateJobTemplateAsync(parent, jobTemplate, jobTemplateId);
```

### CreateJobTemplateAsync(CreateJobTemplateRequest, CallSettings)

```
public virtual Task<JobTemplate> CreateJobTemplateAsync(CreateJobTemplateRequest request, CallSettings callSettings = null)
```

Creates a job template in the specified region.

**Parameters**

**Name**

**Description**

`request`

`[CreateJobTemplateRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.CreateJobTemplateRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
CreateJobTemplateRequest request = new CreateJobTemplateRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    JobTemplate = new JobTemplate(),
    JobTemplateId = "",
};
// Make the request
JobTemplate response = await transcoderServiceClient.CreateJobTemplateAsync(request);
```

### CreateJobTemplateAsync(CreateJobTemplateRequest, CancellationToken)

```
public virtual Task<JobTemplate> CreateJobTemplateAsync(CreateJobTemplateRequest request, CancellationToken cancellationToken)
```

Creates a job template in the specified region.

**Parameters**

**Name**

**Description**

`request`

`[CreateJobTemplateRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.CreateJobTemplateRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
CreateJobTemplateRequest request = new CreateJobTemplateRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    JobTemplate = new JobTemplate(),
    JobTemplateId = "",
};
// Make the request
JobTemplate response = await transcoderServiceClient.CreateJobTemplateAsync(request);
```

### CreateJobTemplateAsync(string, JobTemplate, string, CallSettings)

```
public virtual Task<JobTemplate> CreateJobTemplateAsync(string parent, JobTemplate jobTemplate, string jobTemplateId, CallSettings callSettings = null)
```

Creates a job template in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The parent location to create this job template. Format: `projects/{project}/locations/{location}`

`jobTemplate`

`[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`  

Required. Parameters for creating job template.

`jobTemplateId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The ID to use for the job template, which will become the final component of the job template's resource name.

This value should be 4-63 characters, and valid characters must match the regular expression `[a-zA-Z][a-zA-Z0-9_-]*`.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
JobTemplate jobTemplate = new JobTemplate();
string jobTemplateId = "";
// Make the request
JobTemplate response = await transcoderServiceClient.CreateJobTemplateAsync(parent, jobTemplate, jobTemplateId);
```

### CreateJobTemplateAsync(string, JobTemplate, string, CancellationToken)

```
public virtual Task<JobTemplate> CreateJobTemplateAsync(string parent, JobTemplate jobTemplate, string jobTemplateId, CancellationToken cancellationToken)
```

Creates a job template in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The parent location to create this job template. Format: `projects/{project}/locations/{location}`

`jobTemplate`

`[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`  

Required. Parameters for creating job template.

`jobTemplateId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The ID to use for the job template, which will become the final component of the job template's resource name.

This value should be 4-63 characters, and valid characters must match the regular expression `[a-zA-Z][a-zA-Z0-9_-]*`.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
JobTemplate jobTemplate = new JobTemplate();
string jobTemplateId = "";
// Make the request
JobTemplate response = await transcoderServiceClient.CreateJobTemplateAsync(parent, jobTemplate, jobTemplateId);
```

### DeleteJob(DeleteJobRequest, CallSettings)

```
public virtual void DeleteJob(DeleteJobRequest request, CallSettings callSettings = null)
```

Deletes a job.

**Parameters**

**Name**

**Description**

`request`

`[DeleteJobRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.DeleteJobRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
DeleteJobRequest request = new DeleteJobRequest
{
    JobName = JobName.FromProjectLocationJob("[PROJECT]", "[LOCATION]", "[JOB]"),
    AllowMissing = false,
};
// Make the request
transcoderServiceClient.DeleteJob(request);
```

### DeleteJob(JobName, CallSettings)

```
public virtual void DeleteJob(JobName name, CallSettings callSettings = null)
```

Deletes a job.

**Parameters**

**Name**

**Description**

`name`

`[JobName](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobName)`  

Required. The name of the job to delete. Format: `projects/{project}/locations/{location}/jobs/{job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
JobName name = JobName.FromProjectLocationJob("[PROJECT]", "[LOCATION]", "[JOB]");
// Make the request
transcoderServiceClient.DeleteJob(name);
```

### DeleteJob(string, CallSettings)

```
public virtual void DeleteJob(string name, CallSettings callSettings = null)
```

Deletes a job.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the job to delete. Format: `projects/{project}/locations/{location}/jobs/{job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/jobs/[JOB]";
// Make the request
transcoderServiceClient.DeleteJob(name);
```

### DeleteJobAsync(DeleteJobRequest, CallSettings)

```
public virtual Task DeleteJobAsync(DeleteJobRequest request, CallSettings callSettings = null)
```

Deletes a job.

**Parameters**

**Name**

**Description**

`request`

`[DeleteJobRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.DeleteJobRequest)`  

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
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteJobRequest request = new DeleteJobRequest
{
    JobName = JobName.FromProjectLocationJob("[PROJECT]", "[LOCATION]", "[JOB]"),
    AllowMissing = false,
};
// Make the request
await transcoderServiceClient.DeleteJobAsync(request);
```

### DeleteJobAsync(DeleteJobRequest, CancellationToken)

```
public virtual Task DeleteJobAsync(DeleteJobRequest request, CancellationToken cancellationToken)
```

Deletes a job.

**Parameters**

**Name**

**Description**

`request`

`[DeleteJobRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.DeleteJobRequest)`  

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
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteJobRequest request = new DeleteJobRequest
{
    JobName = JobName.FromProjectLocationJob("[PROJECT]", "[LOCATION]", "[JOB]"),
    AllowMissing = false,
};
// Make the request
await transcoderServiceClient.DeleteJobAsync(request);
```

### DeleteJobAsync(JobName, CallSettings)

```
public virtual Task DeleteJobAsync(JobName name, CallSettings callSettings = null)
```

Deletes a job.

**Parameters**

**Name**

**Description**

`name`

`[JobName](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobName)`  

Required. The name of the job to delete. Format: `projects/{project}/locations/{location}/jobs/{job}`

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
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
JobName name = JobName.FromProjectLocationJob("[PROJECT]", "[LOCATION]", "[JOB]");
// Make the request
await transcoderServiceClient.DeleteJobAsync(name);
```

### DeleteJobAsync(JobName, CancellationToken)

```
public virtual Task DeleteJobAsync(JobName name, CancellationToken cancellationToken)
```

Deletes a job.

**Parameters**

**Name**

**Description**

`name`

`[JobName](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobName)`  

Required. The name of the job to delete. Format: `projects/{project}/locations/{location}/jobs/{job}`

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
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
JobName name = JobName.FromProjectLocationJob("[PROJECT]", "[LOCATION]", "[JOB]");
// Make the request
await transcoderServiceClient.DeleteJobAsync(name);
```

### DeleteJobAsync(string, CallSettings)

```
public virtual Task DeleteJobAsync(string name, CallSettings callSettings = null)
```

Deletes a job.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the job to delete. Format: `projects/{project}/locations/{location}/jobs/{job}`

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
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/jobs/[JOB]";
// Make the request
await transcoderServiceClient.DeleteJobAsync(name);
```

### DeleteJobAsync(string, CancellationToken)

```
public virtual Task DeleteJobAsync(string name, CancellationToken cancellationToken)
```

Deletes a job.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the job to delete. Format: `projects/{project}/locations/{location}/jobs/{job}`

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
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/jobs/[JOB]";
// Make the request
await transcoderServiceClient.DeleteJobAsync(name);
```

### DeleteJobTemplate(DeleteJobTemplateRequest, CallSettings)

```
public virtual void DeleteJobTemplate(DeleteJobTemplateRequest request, CallSettings callSettings = null)
```

Deletes a job template.

**Parameters**

**Name**

**Description**

`request`

`[DeleteJobTemplateRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.DeleteJobTemplateRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
DeleteJobTemplateRequest request = new DeleteJobTemplateRequest
{
    JobTemplateName = JobTemplateName.FromProjectLocationJobTemplate("[PROJECT]", "[LOCATION]", "[JOB_TEMPLATE]"),
    AllowMissing = false,
};
// Make the request
transcoderServiceClient.DeleteJobTemplate(request);
```

### DeleteJobTemplate(JobTemplateName, CallSettings)

```
public virtual void DeleteJobTemplate(JobTemplateName name, CallSettings callSettings = null)
```

Deletes a job template.

**Parameters**

**Name**

**Description**

`name`

`[JobTemplateName](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplateName)`  

Required. The name of the job template to delete. `projects/{project}/locations/{location}/jobTemplates/{job_template}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
JobTemplateName name = JobTemplateName.FromProjectLocationJobTemplate("[PROJECT]", "[LOCATION]", "[JOB_TEMPLATE]");
// Make the request
transcoderServiceClient.DeleteJobTemplate(name);
```

### DeleteJobTemplate(string, CallSettings)

```
public virtual void DeleteJobTemplate(string name, CallSettings callSettings = null)
```

Deletes a job template.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the job template to delete. `projects/{project}/locations/{location}/jobTemplates/{job_template}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/jobTemplates/[JOB_TEMPLATE]";
// Make the request
transcoderServiceClient.DeleteJobTemplate(name);
```

### DeleteJobTemplateAsync(DeleteJobTemplateRequest, CallSettings)

```
public virtual Task DeleteJobTemplateAsync(DeleteJobTemplateRequest request, CallSettings callSettings = null)
```

Deletes a job template.

**Parameters**

**Name**

**Description**

`request`

`[DeleteJobTemplateRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.DeleteJobTemplateRequest)`  

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
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteJobTemplateRequest request = new DeleteJobTemplateRequest
{
    JobTemplateName = JobTemplateName.FromProjectLocationJobTemplate("[PROJECT]", "[LOCATION]", "[JOB_TEMPLATE]"),
    AllowMissing = false,
};
// Make the request
await transcoderServiceClient.DeleteJobTemplateAsync(request);
```

### DeleteJobTemplateAsync(DeleteJobTemplateRequest, CancellationToken)

```
public virtual Task DeleteJobTemplateAsync(DeleteJobTemplateRequest request, CancellationToken cancellationToken)
```

Deletes a job template.

**Parameters**

**Name**

**Description**

`request`

`[DeleteJobTemplateRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.DeleteJobTemplateRequest)`  

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
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteJobTemplateRequest request = new DeleteJobTemplateRequest
{
    JobTemplateName = JobTemplateName.FromProjectLocationJobTemplate("[PROJECT]", "[LOCATION]", "[JOB_TEMPLATE]"),
    AllowMissing = false,
};
// Make the request
await transcoderServiceClient.DeleteJobTemplateAsync(request);
```

### DeleteJobTemplateAsync(JobTemplateName, CallSettings)

```
public virtual Task DeleteJobTemplateAsync(JobTemplateName name, CallSettings callSettings = null)
```

Deletes a job template.

**Parameters**

**Name**

**Description**

`name`

`[JobTemplateName](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplateName)`  

Required. The name of the job template to delete. `projects/{project}/locations/{location}/jobTemplates/{job_template}`

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
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
JobTemplateName name = JobTemplateName.FromProjectLocationJobTemplate("[PROJECT]", "[LOCATION]", "[JOB_TEMPLATE]");
// Make the request
await transcoderServiceClient.DeleteJobTemplateAsync(name);
```

### DeleteJobTemplateAsync(JobTemplateName, CancellationToken)

```
public virtual Task DeleteJobTemplateAsync(JobTemplateName name, CancellationToken cancellationToken)
```

Deletes a job template.

**Parameters**

**Name**

**Description**

`name`

`[JobTemplateName](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplateName)`  

Required. The name of the job template to delete. `projects/{project}/locations/{location}/jobTemplates/{job_template}`

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
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
JobTemplateName name = JobTemplateName.FromProjectLocationJobTemplate("[PROJECT]", "[LOCATION]", "[JOB_TEMPLATE]");
// Make the request
await transcoderServiceClient.DeleteJobTemplateAsync(name);
```

### DeleteJobTemplateAsync(string, CallSettings)

```
public virtual Task DeleteJobTemplateAsync(string name, CallSettings callSettings = null)
```

Deletes a job template.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the job template to delete. `projects/{project}/locations/{location}/jobTemplates/{job_template}`

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
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/jobTemplates/[JOB_TEMPLATE]";
// Make the request
await transcoderServiceClient.DeleteJobTemplateAsync(name);
```

### DeleteJobTemplateAsync(string, CancellationToken)

```
public virtual Task DeleteJobTemplateAsync(string name, CancellationToken cancellationToken)
```

Deletes a job template.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the job template to delete. `projects/{project}/locations/{location}/jobTemplates/{job_template}`

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
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/jobTemplates/[JOB_TEMPLATE]";
// Make the request
await transcoderServiceClient.DeleteJobTemplateAsync(name);
```

### GetJob(GetJobRequest, CallSettings)

```
public virtual Job GetJob(GetJobRequest request, CallSettings callSettings = null)
```

Returns the job data.

**Parameters**

**Name**

**Description**

`request`

`[GetJobRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.GetJobRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

The RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
GetJobRequest request = new GetJobRequest
{
    JobName = JobName.FromProjectLocationJob("[PROJECT]", "[LOCATION]", "[JOB]"),
};
// Make the request
Job response = transcoderServiceClient.GetJob(request);
```

### GetJob(JobName, CallSettings)

```
public virtual Job GetJob(JobName name, CallSettings callSettings = null)
```

Returns the job data.

**Parameters**

**Name**

**Description**

`name`

`[JobName](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobName)`  

Required. The name of the job to retrieve. Format: `projects/{project}/locations/{location}/jobs/{job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

The RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
JobName name = JobName.FromProjectLocationJob("[PROJECT]", "[LOCATION]", "[JOB]");
// Make the request
Job response = transcoderServiceClient.GetJob(name);
```

### GetJob(string, CallSettings)

```
public virtual Job GetJob(string name, CallSettings callSettings = null)
```

Returns the job data.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the job to retrieve. Format: `projects/{project}/locations/{location}/jobs/{job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

The RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/jobs/[JOB]";
// Make the request
Job response = transcoderServiceClient.GetJob(name);
```

### GetJobAsync(GetJobRequest, CallSettings)

```
public virtual Task<Job> GetJobAsync(GetJobRequest request, CallSettings callSettings = null)
```

Returns the job data.

**Parameters**

**Name**

**Description**

`request`

`[GetJobRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.GetJobRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
GetJobRequest request = new GetJobRequest
{
    JobName = JobName.FromProjectLocationJob("[PROJECT]", "[LOCATION]", "[JOB]"),
};
// Make the request
Job response = await transcoderServiceClient.GetJobAsync(request);
```

### GetJobAsync(GetJobRequest, CancellationToken)

```
public virtual Task<Job> GetJobAsync(GetJobRequest request, CancellationToken cancellationToken)
```

Returns the job data.

**Parameters**

**Name**

**Description**

`request`

`[GetJobRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.GetJobRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
GetJobRequest request = new GetJobRequest
{
    JobName = JobName.FromProjectLocationJob("[PROJECT]", "[LOCATION]", "[JOB]"),
};
// Make the request
Job response = await transcoderServiceClient.GetJobAsync(request);
```

### GetJobAsync(JobName, CallSettings)

```
public virtual Task<Job> GetJobAsync(JobName name, CallSettings callSettings = null)
```

Returns the job data.

**Parameters**

**Name**

**Description**

`name`

`[JobName](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobName)`  

Required. The name of the job to retrieve. Format: `projects/{project}/locations/{location}/jobs/{job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
JobName name = JobName.FromProjectLocationJob("[PROJECT]", "[LOCATION]", "[JOB]");
// Make the request
Job response = await transcoderServiceClient.GetJobAsync(name);
```

### GetJobAsync(JobName, CancellationToken)

```
public virtual Task<Job> GetJobAsync(JobName name, CancellationToken cancellationToken)
```

Returns the job data.

**Parameters**

**Name**

**Description**

`name`

`[JobName](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobName)`  

Required. The name of the job to retrieve. Format: `projects/{project}/locations/{location}/jobs/{job}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
JobName name = JobName.FromProjectLocationJob("[PROJECT]", "[LOCATION]", "[JOB]");
// Make the request
Job response = await transcoderServiceClient.GetJobAsync(name);
```

### GetJobAsync(string, CallSettings)

```
public virtual Task<Job> GetJobAsync(string name, CallSettings callSettings = null)
```

Returns the job data.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the job to retrieve. Format: `projects/{project}/locations/{location}/jobs/{job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/jobs/[JOB]";
// Make the request
Job response = await transcoderServiceClient.GetJobAsync(name);
```

### GetJobAsync(string, CancellationToken)

```
public virtual Task<Job> GetJobAsync(string name, CancellationToken cancellationToken)
```

Returns the job data.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the job to retrieve. Format: `projects/{project}/locations/{location}/jobs/{job}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/jobs/[JOB]";
// Make the request
Job response = await transcoderServiceClient.GetJobAsync(name);
```

### GetJobTemplate(GetJobTemplateRequest, CallSettings)

```
public virtual JobTemplate GetJobTemplate(GetJobTemplateRequest request, CallSettings callSettings = null)
```

Returns the job template data.

**Parameters**

**Name**

**Description**

`request`

`[GetJobTemplateRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.GetJobTemplateRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

The RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
GetJobTemplateRequest request = new GetJobTemplateRequest
{
    JobTemplateName = JobTemplateName.FromProjectLocationJobTemplate("[PROJECT]", "[LOCATION]", "[JOB_TEMPLATE]"),
};
// Make the request
JobTemplate response = transcoderServiceClient.GetJobTemplate(request);
```

### GetJobTemplate(JobTemplateName, CallSettings)

```
public virtual JobTemplate GetJobTemplate(JobTemplateName name, CallSettings callSettings = null)
```

Returns the job template data.

**Parameters**

**Name**

**Description**

`name`

`[JobTemplateName](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplateName)`  

Required. The name of the job template to retrieve. Format: `projects/{project}/locations/{location}/jobTemplates/{job_template}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

The RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
JobTemplateName name = JobTemplateName.FromProjectLocationJobTemplate("[PROJECT]", "[LOCATION]", "[JOB_TEMPLATE]");
// Make the request
JobTemplate response = transcoderServiceClient.GetJobTemplate(name);
```

### GetJobTemplate(string, CallSettings)

```
public virtual JobTemplate GetJobTemplate(string name, CallSettings callSettings = null)
```

Returns the job template data.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the job template to retrieve. Format: `projects/{project}/locations/{location}/jobTemplates/{job_template}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

The RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/jobTemplates/[JOB_TEMPLATE]";
// Make the request
JobTemplate response = transcoderServiceClient.GetJobTemplate(name);
```

### GetJobTemplateAsync(GetJobTemplateRequest, CallSettings)

```
public virtual Task<JobTemplate> GetJobTemplateAsync(GetJobTemplateRequest request, CallSettings callSettings = null)
```

Returns the job template data.

**Parameters**

**Name**

**Description**

`request`

`[GetJobTemplateRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.GetJobTemplateRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
GetJobTemplateRequest request = new GetJobTemplateRequest
{
    JobTemplateName = JobTemplateName.FromProjectLocationJobTemplate("[PROJECT]", "[LOCATION]", "[JOB_TEMPLATE]"),
};
// Make the request
JobTemplate response = await transcoderServiceClient.GetJobTemplateAsync(request);
```

### GetJobTemplateAsync(GetJobTemplateRequest, CancellationToken)

```
public virtual Task<JobTemplate> GetJobTemplateAsync(GetJobTemplateRequest request, CancellationToken cancellationToken)
```

Returns the job template data.

**Parameters**

**Name**

**Description**

`request`

`[GetJobTemplateRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.GetJobTemplateRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
GetJobTemplateRequest request = new GetJobTemplateRequest
{
    JobTemplateName = JobTemplateName.FromProjectLocationJobTemplate("[PROJECT]", "[LOCATION]", "[JOB_TEMPLATE]"),
};
// Make the request
JobTemplate response = await transcoderServiceClient.GetJobTemplateAsync(request);
```

### GetJobTemplateAsync(JobTemplateName, CallSettings)

```
public virtual Task<JobTemplate> GetJobTemplateAsync(JobTemplateName name, CallSettings callSettings = null)
```

Returns the job template data.

**Parameters**

**Name**

**Description**

`name`

`[JobTemplateName](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplateName)`  

Required. The name of the job template to retrieve. Format: `projects/{project}/locations/{location}/jobTemplates/{job_template}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
JobTemplateName name = JobTemplateName.FromProjectLocationJobTemplate("[PROJECT]", "[LOCATION]", "[JOB_TEMPLATE]");
// Make the request
JobTemplate response = await transcoderServiceClient.GetJobTemplateAsync(name);
```

### GetJobTemplateAsync(JobTemplateName, CancellationToken)

```
public virtual Task<JobTemplate> GetJobTemplateAsync(JobTemplateName name, CancellationToken cancellationToken)
```

Returns the job template data.

**Parameters**

**Name**

**Description**

`name`

`[JobTemplateName](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplateName)`  

Required. The name of the job template to retrieve. Format: `projects/{project}/locations/{location}/jobTemplates/{job_template}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
JobTemplateName name = JobTemplateName.FromProjectLocationJobTemplate("[PROJECT]", "[LOCATION]", "[JOB_TEMPLATE]");
// Make the request
JobTemplate response = await transcoderServiceClient.GetJobTemplateAsync(name);
```

### GetJobTemplateAsync(string, CallSettings)

```
public virtual Task<JobTemplate> GetJobTemplateAsync(string name, CallSettings callSettings = null)
```

Returns the job template data.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the job template to retrieve. Format: `projects/{project}/locations/{location}/jobTemplates/{job_template}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/jobTemplates/[JOB_TEMPLATE]";
// Make the request
JobTemplate response = await transcoderServiceClient.GetJobTemplateAsync(name);
```

### GetJobTemplateAsync(string, CancellationToken)

```
public virtual Task<JobTemplate> GetJobTemplateAsync(string name, CancellationToken cancellationToken)
```

Returns the job template data.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the job template to retrieve. Format: `projects/{project}/locations/{location}/jobTemplates/{job_template}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A Task containing the RPC response.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/jobTemplates/[JOB_TEMPLATE]";
// Make the request
JobTemplate response = await transcoderServiceClient.GetJobTemplateAsync(name);
```

### ListJobs(LocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListJobsResponse, Job> ListJobs(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists jobs in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. Format: `projects/{project}/locations/{location}`

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListJobsResponse](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.ListJobsResponse)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A pageable sequence of [Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job) resources.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedEnumerable<ListJobsResponse, Job> response = transcoderServiceClient.ListJobs(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (Job item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListJobsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Job item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Job> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Job item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListJobs(ListJobsRequest, CallSettings)

```
public virtual PagedEnumerable<ListJobsResponse, Job> ListJobs(ListJobsRequest request, CallSettings callSettings = null)
```

Lists jobs in the specified region.

**Parameters**

**Name**

**Description**

`request`

`[ListJobsRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.ListJobsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListJobsResponse](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.ListJobsResponse)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A pageable sequence of [Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job) resources.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
ListJobsRequest request = new ListJobsRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Filter = "",
    OrderBy = "",
};
// Make the request
PagedEnumerable<ListJobsResponse, Job> response = transcoderServiceClient.ListJobs(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (Job item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListJobsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Job item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Job> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Job item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListJobs(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListJobsResponse, Job> ListJobs(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists jobs in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Format: `projects/{project}/locations/{location}`

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListJobsResponse](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.ListJobsResponse)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A pageable sequence of [Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job) resources.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedEnumerable<ListJobsResponse, Job> response = transcoderServiceClient.ListJobs(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (Job item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListJobsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Job item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Job> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Job item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListJobsAsync(LocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListJobsResponse, Job> ListJobsAsync(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists jobs in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. Format: `projects/{project}/locations/{location}`

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListJobsResponse](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.ListJobsResponse)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A pageable asynchronous sequence of [Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job) resources.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListJobsResponse, Job> response = transcoderServiceClient.ListJobsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Job item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListJobsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Job item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Job> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Job item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListJobsAsync(ListJobsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListJobsResponse, Job> ListJobsAsync(ListJobsRequest request, CallSettings callSettings = null)
```

Lists jobs in the specified region.

**Parameters**

**Name**

**Description**

`request`

`[ListJobsRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.ListJobsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListJobsResponse](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.ListJobsResponse)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A pageable asynchronous sequence of [Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job) resources.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
ListJobsRequest request = new ListJobsRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Filter = "",
    OrderBy = "",
};
// Make the request
PagedAsyncEnumerable<ListJobsResponse, Job> response = transcoderServiceClient.ListJobsAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Job item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListJobsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Job item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Job> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Job item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListJobsAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListJobsResponse, Job> ListJobsAsync(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists jobs in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Format: `projects/{project}/locations/{location}`

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListJobsResponse](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.ListJobsResponse)[Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job)`

A pageable asynchronous sequence of [Job](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.Job) resources.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedAsyncEnumerable<ListJobsResponse, Job> response = transcoderServiceClient.ListJobsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Job item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListJobsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Job item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Job> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Job item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListJobTemplates(LocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListJobTemplatesResponse, JobTemplate> ListJobTemplates(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists job templates in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The parent location from which to retrieve the collection of job templates. Format: `projects/{project}/locations/{location}`

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListJobTemplatesResponse](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.ListJobTemplatesResponse)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A pageable sequence of [JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate) resources.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedEnumerable<ListJobTemplatesResponse, JobTemplate> response = transcoderServiceClient.ListJobTemplates(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (JobTemplate item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListJobTemplatesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (JobTemplate item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<JobTemplate> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (JobTemplate item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListJobTemplates(ListJobTemplatesRequest, CallSettings)

```
public virtual PagedEnumerable<ListJobTemplatesResponse, JobTemplate> ListJobTemplates(ListJobTemplatesRequest request, CallSettings callSettings = null)
```

Lists job templates in the specified region.

**Parameters**

**Name**

**Description**

`request`

`[ListJobTemplatesRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.ListJobTemplatesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListJobTemplatesResponse](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.ListJobTemplatesResponse)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A pageable sequence of [JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate) resources.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
ListJobTemplatesRequest request = new ListJobTemplatesRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Filter = "",
    OrderBy = "",
};
// Make the request
PagedEnumerable<ListJobTemplatesResponse, JobTemplate> response = transcoderServiceClient.ListJobTemplates(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (JobTemplate item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListJobTemplatesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (JobTemplate item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<JobTemplate> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (JobTemplate item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListJobTemplates(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListJobTemplatesResponse, JobTemplate> ListJobTemplates(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists job templates in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The parent location from which to retrieve the collection of job templates. Format: `projects/{project}/locations/{location}`

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListJobTemplatesResponse](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.ListJobTemplatesResponse)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A pageable sequence of [JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate) resources.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedEnumerable<ListJobTemplatesResponse, JobTemplate> response = transcoderServiceClient.ListJobTemplates(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (JobTemplate item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListJobTemplatesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (JobTemplate item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<JobTemplate> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (JobTemplate item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListJobTemplatesAsync(LocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListJobTemplatesResponse, JobTemplate> ListJobTemplatesAsync(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists job templates in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The parent location from which to retrieve the collection of job templates. Format: `projects/{project}/locations/{location}`

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListJobTemplatesResponse](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.ListJobTemplatesResponse)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A pageable asynchronous sequence of [JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate) resources.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListJobTemplatesResponse, JobTemplate> response = transcoderServiceClient.ListJobTemplatesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((JobTemplate item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListJobTemplatesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (JobTemplate item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<JobTemplate> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (JobTemplate item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListJobTemplatesAsync(ListJobTemplatesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListJobTemplatesResponse, JobTemplate> ListJobTemplatesAsync(ListJobTemplatesRequest request, CallSettings callSettings = null)
```

Lists job templates in the specified region.

**Parameters**

**Name**

**Description**

`request`

`[ListJobTemplatesRequest](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.ListJobTemplatesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListJobTemplatesResponse](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.ListJobTemplatesResponse)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A pageable asynchronous sequence of [JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate) resources.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
ListJobTemplatesRequest request = new ListJobTemplatesRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Filter = "",
    OrderBy = "",
};
// Make the request
PagedAsyncEnumerable<ListJobTemplatesResponse, JobTemplate> response = transcoderServiceClient.ListJobTemplatesAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((JobTemplate item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListJobTemplatesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (JobTemplate item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<JobTemplate> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (JobTemplate item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListJobTemplatesAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListJobTemplatesResponse, JobTemplate> ListJobTemplatesAsync(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists job templates in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The parent location from which to retrieve the collection of job templates. Format: `projects/{project}/locations/{location}`

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListJobTemplatesResponse](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.ListJobTemplatesResponse)[JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate)`

A pageable asynchronous sequence of [JobTemplate](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.JobTemplate) resources.

**Example**

```
// Create client
TranscoderServiceClient transcoderServiceClient = await TranscoderServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedAsyncEnumerable<ListJobTemplatesResponse, JobTemplate> response = transcoderServiceClient.ListJobTemplatesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((JobTemplate item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListJobTemplatesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (JobTemplate item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<JobTemplate> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (JobTemplate item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient#Google_Cloud_Video_Transcoder_V1_TranscoderServiceClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient#Google_Cloud_Video_Transcoder_V1_TranscoderServiceClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient#Google_Cloud_Video_Transcoder_V1_TranscoderServiceClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.TranscoderServiceClient#Google_Cloud_Video_Transcoder_V1_TranscoderServiceClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
