-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Run Admin v2 API - Class Jobs.JobsBase (2.7.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.7.0keyboard\_arrow\_down

-   [2.19.0 (latest)](/dotnet/docs/reference/Google.Cloud.Run.V2/latest/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.18.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.18.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.17.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.17.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.16.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.16.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.15.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.15.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.14.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.13.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.12.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.11.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.10.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.9.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.8.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.5.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.4.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.3.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.2.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.1.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.0.0/Google.Cloud.Run.V2.Jobs.JobsBase)
-   [1.0.0-beta02](/dotnet/docs/reference/Google.Cloud.Run.V2/1.0.0-beta02/Google.Cloud.Run.V2.Jobs.JobsBase)

```
[BindServiceMethod(typeof(Jobs), "BindService")]
public abstract class Jobs.JobsBase
```

Reference documentation and code samples for the Cloud Run Admin v2 API class Jobs.JobsBase.

Base class for server-side implementations of Jobs

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Jobs.JobsBase

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Run.V2](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2)

## Assembly

Google.Cloud.Run.V2.dll

## Methods

### CreateJob(CreateJobRequest, ServerCallContext)

```
public virtual Task<Operation> CreateJob(CreateJobRequest request, ServerCallContext context)
```

Creates a Job.

**Parameters**

**Name**

**Description**

`request`

`[CreateJobRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2.CreateJobRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

### DeleteJob(DeleteJobRequest, ServerCallContext)

```
public virtual Task<Operation> DeleteJob(DeleteJobRequest request, ServerCallContext context)
```

Deletes a Job.

**Parameters**

**Name**

**Description**

`request`

`[DeleteJobRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2.DeleteJobRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

### GetIamPolicy(GetIamPolicyRequest, ServerCallContext)

```
public virtual Task<Policy> GetIamPolicy(GetIamPolicyRequest request, ServerCallContext context)
```

Gets the IAM Access Control policy currently in effect for the given Job. This result does not include any inherited policies.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyRequest](https://github.com/googleapis/google-cloud-dotnet/blob/c910b9b4c9b6e2bd30fcf50ea6ab4b703b58fd62/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicy.g.cs)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](https://github.com/googleapis/google-cloud-dotnet/blob/c910b9b4c9b6e2bd30fcf50ea6ab4b703b58fd62/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/Policy.g.cs)`

The response to send back to the client (wrapped by a task).

### GetJob(GetJobRequest, ServerCallContext)

```
public virtual Task<Job> GetJob(GetJobRequest request, ServerCallContext context)
```

Gets information about a Job.

**Parameters**

**Name**

**Description**

`request`

`[GetJobRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2.GetJobRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Job](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2.Job)`

The response to send back to the client (wrapped by a task).

### ListJobs(ListJobsRequest, ServerCallContext)

```
public virtual Task<ListJobsResponse> ListJobs(ListJobsRequest request, ServerCallContext context)
```

Lists Jobs.

**Parameters**

**Name**

**Description**

`request`

`[ListJobsRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2.ListJobsRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ListJobsResponse](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2.ListJobsResponse)`

The response to send back to the client (wrapped by a task).

### RunJob(RunJobRequest, ServerCallContext)

```
public virtual Task<Operation> RunJob(RunJobRequest request, ServerCallContext context)
```

Triggers creation of a new Execution of this Job.

**Parameters**

**Name**

**Description**

`request`

`[RunJobRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2.RunJobRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

### SetIamPolicy(SetIamPolicyRequest, ServerCallContext)

```
public virtual Task<Policy> SetIamPolicy(SetIamPolicyRequest request, ServerCallContext context)
```

Sets the IAM Access control policy for the specified Job. Overwrites any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyRequest](https://github.com/googleapis/google-cloud-dotnet/blob/c910b9b4c9b6e2bd30fcf50ea6ab4b703b58fd62/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicy.g.cs)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](https://github.com/googleapis/google-cloud-dotnet/blob/c910b9b4c9b6e2bd30fcf50ea6ab4b703b58fd62/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/Policy.g.cs)`

The response to send back to the client (wrapped by a task).

### TestIamPermissions(TestIamPermissionsRequest, ServerCallContext)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissions(TestIamPermissionsRequest request, ServerCallContext context)
```

Returns permissions that a caller has on the specified Project.

There are no permissions required for making this API call.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsRequest](https://github.com/googleapis/google-cloud-dotnet/blob/c910b9b4c9b6e2bd30fcf50ea6ab4b703b58fd62/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicy.g.cs)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TestIamPermissionsResponse](https://github.com/googleapis/google-cloud-dotnet/blob/c910b9b4c9b6e2bd30fcf50ea6ab4b703b58fd62/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicy.g.cs)`

The response to send back to the client (wrapped by a task).

### UpdateJob(UpdateJobRequest, ServerCallContext)

```
public virtual Task<Operation> UpdateJob(UpdateJobRequest request, ServerCallContext context)
```

Updates a Job.

**Parameters**

**Name**

**Description**

`request`

`[UpdateJobRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2.UpdateJobRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
