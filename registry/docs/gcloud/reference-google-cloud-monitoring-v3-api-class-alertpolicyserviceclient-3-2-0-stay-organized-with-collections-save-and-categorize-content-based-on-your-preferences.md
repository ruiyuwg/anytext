-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Monitoring v3 API - Class AlertPolicyServiceClient (3.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.2.0keyboard\_arrow\_down

-   [3.16.0 (latest)](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/latest/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.15.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.14.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.12.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.11.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.10.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.9.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.8.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.7.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.6.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.4.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.3.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.1.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.5.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.4.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.3.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)

```
public abstract class AlertPolicyServiceClient
```

Reference documentation and code samples for the Google Cloud Monitoring v3 API class AlertPolicyServiceClient.

AlertPolicyService client wrapper, for convenient use.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> AlertPolicyServiceClient

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Derived Types

[AlertPolicyServiceClientImpl](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClientImpl)

## Namespace

[Google.Cloud.Monitoring.V3](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3)

## Assembly

Google.Cloud.Monitoring.V3.dll

## Remarks

The AlertPolicyService API is used to manage (list, create, delete, edit) alert policies in Cloud Monitoring. An alerting policy is a description of the conditions under which some aspect of your system is considered to be "unhealthy" and the ways to notify people or services about this state. In addition to using this API, alert policies can also be managed through [Cloud Monitoring](https://cloud.google.com/monitoring/docs/), which can be reached by clicking the "Monitoring" tab in [Cloud console](https://console.cloud.google.com/).

## Properties

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the AlertPolicyService service, which is a host of "monitoring.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default AlertPolicyService scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

**Remarks**

The default AlertPolicyService scopes are:

-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)
-   [https://www.googleapis.com/auth/monitoring](https://www.googleapis.com/auth/monitoring)
-   [https://www.googleapis.com/auth/monitoring.read](https://www.googleapis.com/auth/monitoring.read)

### GrpcClient

```
public virtual AlertPolicyService.AlertPolicyServiceClient GrpcClient { get; }
```

The underlying gRPC AlertPolicyService client

**Property Value**

**Type**

**Description**

`[AlertPolicyService.AlertPolicyServiceClient](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyService.AlertPolicyServiceClient)`

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
public static AlertPolicyServiceClient Create()
```

Synchronously creates a [AlertPolicyServiceClient](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [AlertPolicyServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClientBuilder) .

**Returns**

**Type**

**Description**

`[AlertPolicyServiceClient](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)`

The created [AlertPolicyServiceClient](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient).

### CreateAlertPolicy(IResourceName, AlertPolicy, CallSettings)

```
public virtual AlertPolicy CreateAlertPolicy(IResourceName name, AlertPolicy alertPolicy, CallSettings callSettings = null)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID\_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the container.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`

The RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
IResourceName name = new UnparsedResourceName("a/wildcard/resource");
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = alertPolicyServiceClient.CreateAlertPolicy(name, alertPolicy);
```

### CreateAlertPolicy(FolderName, AlertPolicy, CallSettings)

```
public virtual AlertPolicy CreateAlertPolicy(FolderName name, AlertPolicy alertPolicy, CallSettings callSettings = null)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[FolderName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.FolderName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID\_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the container.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`

The RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
FolderName name = FolderName.FromFolder("[FOLDER]");
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = alertPolicyServiceClient.CreateAlertPolicy(name, alertPolicy);
```

### CreateAlertPolicy(OrganizationName, AlertPolicy, CallSettings)

```
public virtual AlertPolicy CreateAlertPolicy(OrganizationName name, AlertPolicy alertPolicy, CallSettings callSettings = null)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[OrganizationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.OrganizationName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID\_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the container.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`

The RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
OrganizationName name = OrganizationName.FromOrganization("[ORGANIZATION]");
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = alertPolicyServiceClient.CreateAlertPolicy(name, alertPolicy);
```

### CreateAlertPolicy(ProjectName, AlertPolicy, CallSettings)

```
public virtual AlertPolicy CreateAlertPolicy(ProjectName name, AlertPolicy alertPolicy, CallSettings callSettings = null)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[ProjectName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.ProjectName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID\_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the container.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`

The RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
ProjectName name = ProjectName.FromProject("[PROJECT]");
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = alertPolicyServiceClient.CreateAlertPolicy(name, alertPolicy);
```

### CreateAlertPolicy(CreateAlertPolicyRequest, CallSettings)

```
public virtual AlertPolicy CreateAlertPolicy(CreateAlertPolicyRequest request, CallSettings callSettings = null)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`request`

`[CreateAlertPolicyRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.CreateAlertPolicyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`

The RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
CreateAlertPolicyRequest request = new CreateAlertPolicyRequest
{
    AlertPolicy = new AlertPolicy(),
    ProjectName = ProjectName.FromProject("[PROJECT]"),
};
// Make the request
AlertPolicy response = alertPolicyServiceClient.CreateAlertPolicy(request);
```

### CreateAlertPolicy(String, AlertPolicy, CallSettings)

```
public virtual AlertPolicy CreateAlertPolicy(string name, AlertPolicy alertPolicy, CallSettings callSettings = null)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID\_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the container.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`

The RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]";
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = alertPolicyServiceClient.CreateAlertPolicy(name, alertPolicy);
```

### CreateAlertPolicyAsync(IResourceName, AlertPolicy, CallSettings)

```
public virtual Task<AlertPolicy> CreateAlertPolicyAsync(IResourceName name, AlertPolicy alertPolicy, CallSettings callSettings = null)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID\_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the container.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
IResourceName name = new UnparsedResourceName("a/wildcard/resource");
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = await alertPolicyServiceClient.CreateAlertPolicyAsync(name, alertPolicy);
```

### CreateAlertPolicyAsync(IResourceName, AlertPolicy, CancellationToken)

```
public virtual Task<AlertPolicy> CreateAlertPolicyAsync(IResourceName name, AlertPolicy alertPolicy, CancellationToken cancellationToken)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID\_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the container.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
IResourceName name = new UnparsedResourceName("a/wildcard/resource");
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = await alertPolicyServiceClient.CreateAlertPolicyAsync(name, alertPolicy);
```

### CreateAlertPolicyAsync(FolderName, AlertPolicy, CallSettings)

```
public virtual Task<AlertPolicy> CreateAlertPolicyAsync(FolderName name, AlertPolicy alertPolicy, CallSettings callSettings = null)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[FolderName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.FolderName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID\_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the container.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
FolderName name = FolderName.FromFolder("[FOLDER]");
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = await alertPolicyServiceClient.CreateAlertPolicyAsync(name, alertPolicy);
```

### CreateAlertPolicyAsync(FolderName, AlertPolicy, CancellationToken)

```
public virtual Task<AlertPolicy> CreateAlertPolicyAsync(FolderName name, AlertPolicy alertPolicy, CancellationToken cancellationToken)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[FolderName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.FolderName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID\_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the container.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
FolderName name = FolderName.FromFolder("[FOLDER]");
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = await alertPolicyServiceClient.CreateAlertPolicyAsync(name, alertPolicy);
```

### CreateAlertPolicyAsync(OrganizationName, AlertPolicy, CallSettings)

```
public virtual Task<AlertPolicy> CreateAlertPolicyAsync(OrganizationName name, AlertPolicy alertPolicy, CallSettings callSettings = null)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[OrganizationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.OrganizationName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID\_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the container.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
OrganizationName name = OrganizationName.FromOrganization("[ORGANIZATION]");
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = await alertPolicyServiceClient.CreateAlertPolicyAsync(name, alertPolicy);
```

### CreateAlertPolicyAsync(OrganizationName, AlertPolicy, CancellationToken)

```
public virtual Task<AlertPolicy> CreateAlertPolicyAsync(OrganizationName name, AlertPolicy alertPolicy, CancellationToken cancellationToken)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[OrganizationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.OrganizationName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID\_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the container.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
OrganizationName name = OrganizationName.FromOrganization("[ORGANIZATION]");
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = await alertPolicyServiceClient.CreateAlertPolicyAsync(name, alertPolicy);
```

### CreateAlertPolicyAsync(ProjectName, AlertPolicy, CallSettings)

```
public virtual Task<AlertPolicy> CreateAlertPolicyAsync(ProjectName name, AlertPolicy alertPolicy, CallSettings callSettings = null)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[ProjectName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.ProjectName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID\_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the container.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
ProjectName name = ProjectName.FromProject("[PROJECT]");
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = await alertPolicyServiceClient.CreateAlertPolicyAsync(name, alertPolicy);
```

### CreateAlertPolicyAsync(ProjectName, AlertPolicy, CancellationToken)

```
public virtual Task<AlertPolicy> CreateAlertPolicyAsync(ProjectName name, AlertPolicy alertPolicy, CancellationToken cancellationToken)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[ProjectName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.ProjectName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID\_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the container.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
ProjectName name = ProjectName.FromProject("[PROJECT]");
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = await alertPolicyServiceClient.CreateAlertPolicyAsync(name, alertPolicy);
```

### CreateAlertPolicyAsync(CreateAlertPolicyRequest, CallSettings)

```
public virtual Task<AlertPolicy> CreateAlertPolicyAsync(CreateAlertPolicyRequest request, CallSettings callSettings = null)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`request`

`[CreateAlertPolicyRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.CreateAlertPolicyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
CreateAlertPolicyRequest request = new CreateAlertPolicyRequest
{
    AlertPolicy = new AlertPolicy(),
    ProjectName = ProjectName.FromProject("[PROJECT]"),
};
// Make the request
AlertPolicy response = await alertPolicyServiceClient.CreateAlertPolicyAsync(request);
```

### CreateAlertPolicyAsync(CreateAlertPolicyRequest, CancellationToken)

```
public virtual Task<AlertPolicy> CreateAlertPolicyAsync(CreateAlertPolicyRequest request, CancellationToken cancellationToken)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`request`

`[CreateAlertPolicyRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.CreateAlertPolicyRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
CreateAlertPolicyRequest request = new CreateAlertPolicyRequest
{
    AlertPolicy = new AlertPolicy(),
    ProjectName = ProjectName.FromProject("[PROJECT]"),
};
// Make the request
AlertPolicy response = await alertPolicyServiceClient.CreateAlertPolicyAsync(request);
```

### CreateAlertPolicyAsync(String, AlertPolicy, CallSettings)

```
public virtual Task<AlertPolicy> CreateAlertPolicyAsync(string name, AlertPolicy alertPolicy, CallSettings callSettings = null)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID\_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the container.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]";
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = await alertPolicyServiceClient.CreateAlertPolicyAsync(name, alertPolicy);
```

### CreateAlertPolicyAsync(String, AlertPolicy, CancellationToken)

```
public virtual Task<AlertPolicy> CreateAlertPolicyAsync(string name, AlertPolicy alertPolicy, CancellationToken cancellationToken)
```

Creates a new alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID\_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the container.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]";
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = await alertPolicyServiceClient.CreateAlertPolicyAsync(name, alertPolicy);
```

### CreateAsync(CancellationToken)

```
public static Task<AlertPolicyServiceClient> CreateAsync(CancellationToken cancellationToken = default(CancellationToken))
```

Asynchronously creates a [AlertPolicyServiceClient](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [AlertPolicyServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClientBuilder) .

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicyServiceClient](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient)>`

The task representing the created [AlertPolicyServiceClient](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient).

### DeleteAlertPolicy(IResourceName, CallSettings)

```
public virtual void DeleteAlertPolicy(IResourceName name, CallSettings callSettings = null)
```

Deletes an alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

Required. The alerting policy to delete. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

For more information, see \[AlertPolicy\]\[google.monitoring.v3.AlertPolicy\].

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
IResourceName name = new UnparsedResourceName("a/wildcard/resource");
// Make the request
alertPolicyServiceClient.DeleteAlertPolicy(name);
```

### DeleteAlertPolicy(AlertPolicyName, CallSettings)

```
public virtual void DeleteAlertPolicy(AlertPolicyName name, CallSettings callSettings = null)
```

Deletes an alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[AlertPolicyName](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyName)`  

Required. The alerting policy to delete. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

For more information, see \[AlertPolicy\]\[google.monitoring.v3.AlertPolicy\].

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
AlertPolicyName name = AlertPolicyName.FromProjectAlertPolicy("[PROJECT]", "[ALERT_POLICY]");
// Make the request
alertPolicyServiceClient.DeleteAlertPolicy(name);
```

### DeleteAlertPolicy(DeleteAlertPolicyRequest, CallSettings)

```
public virtual void DeleteAlertPolicy(DeleteAlertPolicyRequest request, CallSettings callSettings = null)
```

Deletes an alerting policy.

**Parameters**

**Name**

**Description**

`request`

`[DeleteAlertPolicyRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.DeleteAlertPolicyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
DeleteAlertPolicyRequest request = new DeleteAlertPolicyRequest
{
    AlertPolicyName = AlertPolicyName.FromProjectAlertPolicy("[PROJECT]", "[ALERT_POLICY]"),
};
// Make the request
alertPolicyServiceClient.DeleteAlertPolicy(request);
```

### DeleteAlertPolicy(String, CallSettings)

```
public virtual void DeleteAlertPolicy(string name, CallSettings callSettings = null)
```

Deletes an alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The alerting policy to delete. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

For more information, see \[AlertPolicy\]\[google.monitoring.v3.AlertPolicy\].

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/alertPolicies/[ALERT_POLICY]";
// Make the request
alertPolicyServiceClient.DeleteAlertPolicy(name);
```

### DeleteAlertPolicyAsync(IResourceName, CallSettings)

```
public virtual Task DeleteAlertPolicyAsync(IResourceName name, CallSettings callSettings = null)
```

Deletes an alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

Required. The alerting policy to delete. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

For more information, see \[AlertPolicy\]\[google.monitoring.v3.AlertPolicy\].

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
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
IResourceName name = new UnparsedResourceName("a/wildcard/resource");
// Make the request
await alertPolicyServiceClient.DeleteAlertPolicyAsync(name);
```

### DeleteAlertPolicyAsync(IResourceName, CancellationToken)

```
public virtual Task DeleteAlertPolicyAsync(IResourceName name, CancellationToken cancellationToken)
```

Deletes an alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

Required. The alerting policy to delete. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

For more information, see \[AlertPolicy\]\[google.monitoring.v3.AlertPolicy\].

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
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
IResourceName name = new UnparsedResourceName("a/wildcard/resource");
// Make the request
await alertPolicyServiceClient.DeleteAlertPolicyAsync(name);
```

### DeleteAlertPolicyAsync(AlertPolicyName, CallSettings)

```
public virtual Task DeleteAlertPolicyAsync(AlertPolicyName name, CallSettings callSettings = null)
```

Deletes an alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[AlertPolicyName](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyName)`  

Required. The alerting policy to delete. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

For more information, see \[AlertPolicy\]\[google.monitoring.v3.AlertPolicy\].

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
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
AlertPolicyName name = AlertPolicyName.FromProjectAlertPolicy("[PROJECT]", "[ALERT_POLICY]");
// Make the request
await alertPolicyServiceClient.DeleteAlertPolicyAsync(name);
```

### DeleteAlertPolicyAsync(AlertPolicyName, CancellationToken)

```
public virtual Task DeleteAlertPolicyAsync(AlertPolicyName name, CancellationToken cancellationToken)
```

Deletes an alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[AlertPolicyName](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyName)`  

Required. The alerting policy to delete. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

For more information, see \[AlertPolicy\]\[google.monitoring.v3.AlertPolicy\].

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
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
AlertPolicyName name = AlertPolicyName.FromProjectAlertPolicy("[PROJECT]", "[ALERT_POLICY]");
// Make the request
await alertPolicyServiceClient.DeleteAlertPolicyAsync(name);
```

### DeleteAlertPolicyAsync(DeleteAlertPolicyRequest, CallSettings)

```
public virtual Task DeleteAlertPolicyAsync(DeleteAlertPolicyRequest request, CallSettings callSettings = null)
```

Deletes an alerting policy.

**Parameters**

**Name**

**Description**

`request`

`[DeleteAlertPolicyRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.DeleteAlertPolicyRequest)`  

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
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteAlertPolicyRequest request = new DeleteAlertPolicyRequest
{
    AlertPolicyName = AlertPolicyName.FromProjectAlertPolicy("[PROJECT]", "[ALERT_POLICY]"),
};
// Make the request
await alertPolicyServiceClient.DeleteAlertPolicyAsync(request);
```

### DeleteAlertPolicyAsync(DeleteAlertPolicyRequest, CancellationToken)

```
public virtual Task DeleteAlertPolicyAsync(DeleteAlertPolicyRequest request, CancellationToken cancellationToken)
```

Deletes an alerting policy.

**Parameters**

**Name**

**Description**

`request`

`[DeleteAlertPolicyRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.DeleteAlertPolicyRequest)`  

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
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteAlertPolicyRequest request = new DeleteAlertPolicyRequest
{
    AlertPolicyName = AlertPolicyName.FromProjectAlertPolicy("[PROJECT]", "[ALERT_POLICY]"),
};
// Make the request
await alertPolicyServiceClient.DeleteAlertPolicyAsync(request);
```

### DeleteAlertPolicyAsync(String, CallSettings)

```
public virtual Task DeleteAlertPolicyAsync(string name, CallSettings callSettings = null)
```

Deletes an alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The alerting policy to delete. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

For more information, see \[AlertPolicy\]\[google.monitoring.v3.AlertPolicy\].

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
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/alertPolicies/[ALERT_POLICY]";
// Make the request
await alertPolicyServiceClient.DeleteAlertPolicyAsync(name);
```

### DeleteAlertPolicyAsync(String, CancellationToken)

```
public virtual Task DeleteAlertPolicyAsync(string name, CancellationToken cancellationToken)
```

Deletes an alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The alerting policy to delete. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

For more information, see \[AlertPolicy\]\[google.monitoring.v3.AlertPolicy\].

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
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/alertPolicies/[ALERT_POLICY]";
// Make the request
await alertPolicyServiceClient.DeleteAlertPolicyAsync(name);
```

### GetAlertPolicy(IResourceName, CallSettings)

```
public virtual AlertPolicy GetAlertPolicy(IResourceName name, CallSettings callSettings = null)
```

Gets a single alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

Required. The alerting policy to retrieve. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`

The RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
IResourceName name = new UnparsedResourceName("a/wildcard/resource");
// Make the request
AlertPolicy response = alertPolicyServiceClient.GetAlertPolicy(name);
```

### GetAlertPolicy(AlertPolicyName, CallSettings)

```
public virtual AlertPolicy GetAlertPolicy(AlertPolicyName name, CallSettings callSettings = null)
```

Gets a single alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[AlertPolicyName](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyName)`  

Required. The alerting policy to retrieve. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`

The RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
AlertPolicyName name = AlertPolicyName.FromProjectAlertPolicy("[PROJECT]", "[ALERT_POLICY]");
// Make the request
AlertPolicy response = alertPolicyServiceClient.GetAlertPolicy(name);
```

### GetAlertPolicy(GetAlertPolicyRequest, CallSettings)

```
public virtual AlertPolicy GetAlertPolicy(GetAlertPolicyRequest request, CallSettings callSettings = null)
```

Gets a single alerting policy.

**Parameters**

**Name**

**Description**

`request`

`[GetAlertPolicyRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.GetAlertPolicyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`

The RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
GetAlertPolicyRequest request = new GetAlertPolicyRequest
{
    AlertPolicyName = AlertPolicyName.FromProjectAlertPolicy("[PROJECT]", "[ALERT_POLICY]"),
};
// Make the request
AlertPolicy response = alertPolicyServiceClient.GetAlertPolicy(request);
```

### GetAlertPolicy(String, CallSettings)

```
public virtual AlertPolicy GetAlertPolicy(string name, CallSettings callSettings = null)
```

Gets a single alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The alerting policy to retrieve. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`

The RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/alertPolicies/[ALERT_POLICY]";
// Make the request
AlertPolicy response = alertPolicyServiceClient.GetAlertPolicy(name);
```

### GetAlertPolicyAsync(IResourceName, CallSettings)

```
public virtual Task<AlertPolicy> GetAlertPolicyAsync(IResourceName name, CallSettings callSettings = null)
```

Gets a single alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

Required. The alerting policy to retrieve. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
IResourceName name = new UnparsedResourceName("a/wildcard/resource");
// Make the request
AlertPolicy response = await alertPolicyServiceClient.GetAlertPolicyAsync(name);
```

### GetAlertPolicyAsync(IResourceName, CancellationToken)

```
public virtual Task<AlertPolicy> GetAlertPolicyAsync(IResourceName name, CancellationToken cancellationToken)
```

Gets a single alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

Required. The alerting policy to retrieve. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
IResourceName name = new UnparsedResourceName("a/wildcard/resource");
// Make the request
AlertPolicy response = await alertPolicyServiceClient.GetAlertPolicyAsync(name);
```

### GetAlertPolicyAsync(AlertPolicyName, CallSettings)

```
public virtual Task<AlertPolicy> GetAlertPolicyAsync(AlertPolicyName name, CallSettings callSettings = null)
```

Gets a single alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[AlertPolicyName](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyName)`  

Required. The alerting policy to retrieve. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
AlertPolicyName name = AlertPolicyName.FromProjectAlertPolicy("[PROJECT]", "[ALERT_POLICY]");
// Make the request
AlertPolicy response = await alertPolicyServiceClient.GetAlertPolicyAsync(name);
```

### GetAlertPolicyAsync(AlertPolicyName, CancellationToken)

```
public virtual Task<AlertPolicy> GetAlertPolicyAsync(AlertPolicyName name, CancellationToken cancellationToken)
```

Gets a single alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[AlertPolicyName](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyName)`  

Required. The alerting policy to retrieve. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
AlertPolicyName name = AlertPolicyName.FromProjectAlertPolicy("[PROJECT]", "[ALERT_POLICY]");
// Make the request
AlertPolicy response = await alertPolicyServiceClient.GetAlertPolicyAsync(name);
```

### GetAlertPolicyAsync(GetAlertPolicyRequest, CallSettings)

```
public virtual Task<AlertPolicy> GetAlertPolicyAsync(GetAlertPolicyRequest request, CallSettings callSettings = null)
```

Gets a single alerting policy.

**Parameters**

**Name**

**Description**

`request`

`[GetAlertPolicyRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.GetAlertPolicyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
GetAlertPolicyRequest request = new GetAlertPolicyRequest
{
    AlertPolicyName = AlertPolicyName.FromProjectAlertPolicy("[PROJECT]", "[ALERT_POLICY]"),
};
// Make the request
AlertPolicy response = await alertPolicyServiceClient.GetAlertPolicyAsync(request);
```

### GetAlertPolicyAsync(GetAlertPolicyRequest, CancellationToken)

```
public virtual Task<AlertPolicy> GetAlertPolicyAsync(GetAlertPolicyRequest request, CancellationToken cancellationToken)
```

Gets a single alerting policy.

**Parameters**

**Name**

**Description**

`request`

`[GetAlertPolicyRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.GetAlertPolicyRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
GetAlertPolicyRequest request = new GetAlertPolicyRequest
{
    AlertPolicyName = AlertPolicyName.FromProjectAlertPolicy("[PROJECT]", "[ALERT_POLICY]"),
};
// Make the request
AlertPolicy response = await alertPolicyServiceClient.GetAlertPolicyAsync(request);
```

### GetAlertPolicyAsync(String, CallSettings)

```
public virtual Task<AlertPolicy> GetAlertPolicyAsync(string name, CallSettings callSettings = null)
```

Gets a single alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The alerting policy to retrieve. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/alertPolicies/[ALERT_POLICY]";
// Make the request
AlertPolicy response = await alertPolicyServiceClient.GetAlertPolicyAsync(name);
```

### GetAlertPolicyAsync(String, CancellationToken)

```
public virtual Task<AlertPolicy> GetAlertPolicyAsync(string name, CancellationToken cancellationToken)
```

Gets a single alerting policy.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The alerting policy to retrieve. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[ALERT\_POLICY\_ID\]

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/alertPolicies/[ALERT_POLICY]";
// Make the request
AlertPolicy response = await alertPolicyServiceClient.GetAlertPolicyAsync(name);
```

### ListAlertPolicies(IResourceName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListAlertPoliciesResponse, AlertPolicy> ListAlertPolicies(IResourceName name, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists the existing alerting policies for the workspace.

**Parameters**

**Name**

**Description**

`name`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose alert policies are to be listed. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policies to be listed are stored. To retrieve a single alerting policy by name, use the \[GetAlertPolicy\]\[google.monitoring.v3.AlertPolicyService.GetAlertPolicy\] operation, instead.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListAlertPoliciesResponse](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.ListAlertPoliciesResponse), [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A pageable sequence of [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy) resources.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
IResourceName name = new UnparsedResourceName("a/wildcard/resource");
// Make the request
PagedEnumerable<ListAlertPoliciesResponse, AlertPolicy> response = alertPolicyServiceClient.ListAlertPolicies(name);

// Iterate over all response items, lazily performing RPCs as required
foreach (AlertPolicy item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListAlertPoliciesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (AlertPolicy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<AlertPolicy> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (AlertPolicy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAlertPolicies(FolderName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListAlertPoliciesResponse, AlertPolicy> ListAlertPolicies(FolderName name, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists the existing alerting policies for the workspace.

**Parameters**

**Name**

**Description**

`name`

`[FolderName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.FolderName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose alert policies are to be listed. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policies to be listed are stored. To retrieve a single alerting policy by name, use the \[GetAlertPolicy\]\[google.monitoring.v3.AlertPolicyService.GetAlertPolicy\] operation, instead.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListAlertPoliciesResponse](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.ListAlertPoliciesResponse), [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A pageable sequence of [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy) resources.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
FolderName name = FolderName.FromFolder("[FOLDER]");
// Make the request
PagedEnumerable<ListAlertPoliciesResponse, AlertPolicy> response = alertPolicyServiceClient.ListAlertPolicies(name);

// Iterate over all response items, lazily performing RPCs as required
foreach (AlertPolicy item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListAlertPoliciesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (AlertPolicy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<AlertPolicy> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (AlertPolicy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAlertPolicies(OrganizationName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListAlertPoliciesResponse, AlertPolicy> ListAlertPolicies(OrganizationName name, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists the existing alerting policies for the workspace.

**Parameters**

**Name**

**Description**

`name`

`[OrganizationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.OrganizationName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose alert policies are to be listed. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policies to be listed are stored. To retrieve a single alerting policy by name, use the \[GetAlertPolicy\]\[google.monitoring.v3.AlertPolicyService.GetAlertPolicy\] operation, instead.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListAlertPoliciesResponse](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.ListAlertPoliciesResponse), [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A pageable sequence of [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy) resources.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
OrganizationName name = OrganizationName.FromOrganization("[ORGANIZATION]");
// Make the request
PagedEnumerable<ListAlertPoliciesResponse, AlertPolicy> response = alertPolicyServiceClient.ListAlertPolicies(name);

// Iterate over all response items, lazily performing RPCs as required
foreach (AlertPolicy item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListAlertPoliciesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (AlertPolicy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<AlertPolicy> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (AlertPolicy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAlertPolicies(ProjectName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListAlertPoliciesResponse, AlertPolicy> ListAlertPolicies(ProjectName name, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists the existing alerting policies for the workspace.

**Parameters**

**Name**

**Description**

`name`

`[ProjectName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.ProjectName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose alert policies are to be listed. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policies to be listed are stored. To retrieve a single alerting policy by name, use the \[GetAlertPolicy\]\[google.monitoring.v3.AlertPolicyService.GetAlertPolicy\] operation, instead.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListAlertPoliciesResponse](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.ListAlertPoliciesResponse), [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A pageable sequence of [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy) resources.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
ProjectName name = ProjectName.FromProject("[PROJECT]");
// Make the request
PagedEnumerable<ListAlertPoliciesResponse, AlertPolicy> response = alertPolicyServiceClient.ListAlertPolicies(name);

// Iterate over all response items, lazily performing RPCs as required
foreach (AlertPolicy item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListAlertPoliciesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (AlertPolicy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<AlertPolicy> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (AlertPolicy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAlertPolicies(ListAlertPoliciesRequest, CallSettings)

```
public virtual PagedEnumerable<ListAlertPoliciesResponse, AlertPolicy> ListAlertPolicies(ListAlertPoliciesRequest request, CallSettings callSettings = null)
```

Lists the existing alerting policies for the workspace.

**Parameters**

**Name**

**Description**

`request`

`[ListAlertPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.ListAlertPoliciesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListAlertPoliciesResponse](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.ListAlertPoliciesResponse), [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A pageable sequence of [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy) resources.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
ListAlertPoliciesRequest request = new ListAlertPoliciesRequest
{
    ProjectName = ProjectName.FromProject("[PROJECT]"),
    Filter = "",
    OrderBy = "",
};
// Make the request
PagedEnumerable<ListAlertPoliciesResponse, AlertPolicy> response = alertPolicyServiceClient.ListAlertPolicies(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (AlertPolicy item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListAlertPoliciesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (AlertPolicy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<AlertPolicy> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (AlertPolicy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAlertPolicies(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListAlertPoliciesResponse, AlertPolicy> ListAlertPolicies(string name, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists the existing alerting policies for the workspace.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose alert policies are to be listed. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policies to be listed are stored. To retrieve a single alerting policy by name, use the \[GetAlertPolicy\]\[google.monitoring.v3.AlertPolicyService.GetAlertPolicy\] operation, instead.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListAlertPoliciesResponse](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.ListAlertPoliciesResponse), [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A pageable sequence of [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy) resources.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]";
// Make the request
PagedEnumerable<ListAlertPoliciesResponse, AlertPolicy> response = alertPolicyServiceClient.ListAlertPolicies(name);

// Iterate over all response items, lazily performing RPCs as required
foreach (AlertPolicy item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListAlertPoliciesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (AlertPolicy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<AlertPolicy> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (AlertPolicy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAlertPoliciesAsync(IResourceName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListAlertPoliciesResponse, AlertPolicy> ListAlertPoliciesAsync(IResourceName name, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists the existing alerting policies for the workspace.

**Parameters**

**Name**

**Description**

`name`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose alert policies are to be listed. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policies to be listed are stored. To retrieve a single alerting policy by name, use the \[GetAlertPolicy\]\[google.monitoring.v3.AlertPolicyService.GetAlertPolicy\] operation, instead.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListAlertPoliciesResponse](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.ListAlertPoliciesResponse), [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A pageable asynchronous sequence of [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy) resources.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
IResourceName name = new UnparsedResourceName("a/wildcard/resource");
// Make the request
PagedAsyncEnumerable<ListAlertPoliciesResponse, AlertPolicy> response = alertPolicyServiceClient.ListAlertPoliciesAsync(name);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((AlertPolicy item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListAlertPoliciesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (AlertPolicy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<AlertPolicy> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (AlertPolicy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAlertPoliciesAsync(FolderName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListAlertPoliciesResponse, AlertPolicy> ListAlertPoliciesAsync(FolderName name, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists the existing alerting policies for the workspace.

**Parameters**

**Name**

**Description**

`name`

`[FolderName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.FolderName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose alert policies are to be listed. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policies to be listed are stored. To retrieve a single alerting policy by name, use the \[GetAlertPolicy\]\[google.monitoring.v3.AlertPolicyService.GetAlertPolicy\] operation, instead.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListAlertPoliciesResponse](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.ListAlertPoliciesResponse), [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A pageable asynchronous sequence of [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy) resources.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
FolderName name = FolderName.FromFolder("[FOLDER]");
// Make the request
PagedAsyncEnumerable<ListAlertPoliciesResponse, AlertPolicy> response = alertPolicyServiceClient.ListAlertPoliciesAsync(name);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((AlertPolicy item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListAlertPoliciesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (AlertPolicy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<AlertPolicy> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (AlertPolicy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAlertPoliciesAsync(OrganizationName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListAlertPoliciesResponse, AlertPolicy> ListAlertPoliciesAsync(OrganizationName name, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists the existing alerting policies for the workspace.

**Parameters**

**Name**

**Description**

`name`

`[OrganizationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.OrganizationName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose alert policies are to be listed. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policies to be listed are stored. To retrieve a single alerting policy by name, use the \[GetAlertPolicy\]\[google.monitoring.v3.AlertPolicyService.GetAlertPolicy\] operation, instead.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListAlertPoliciesResponse](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.ListAlertPoliciesResponse), [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A pageable asynchronous sequence of [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy) resources.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
OrganizationName name = OrganizationName.FromOrganization("[ORGANIZATION]");
// Make the request
PagedAsyncEnumerable<ListAlertPoliciesResponse, AlertPolicy> response = alertPolicyServiceClient.ListAlertPoliciesAsync(name);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((AlertPolicy item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListAlertPoliciesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (AlertPolicy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<AlertPolicy> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (AlertPolicy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAlertPoliciesAsync(ProjectName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListAlertPoliciesResponse, AlertPolicy> ListAlertPoliciesAsync(ProjectName name, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists the existing alerting policies for the workspace.

**Parameters**

**Name**

**Description**

`name`

`[ProjectName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.ProjectName.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose alert policies are to be listed. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policies to be listed are stored. To retrieve a single alerting policy by name, use the \[GetAlertPolicy\]\[google.monitoring.v3.AlertPolicyService.GetAlertPolicy\] operation, instead.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListAlertPoliciesResponse](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.ListAlertPoliciesResponse), [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A pageable asynchronous sequence of [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy) resources.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
ProjectName name = ProjectName.FromProject("[PROJECT]");
// Make the request
PagedAsyncEnumerable<ListAlertPoliciesResponse, AlertPolicy> response = alertPolicyServiceClient.ListAlertPoliciesAsync(name);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((AlertPolicy item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListAlertPoliciesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (AlertPolicy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<AlertPolicy> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (AlertPolicy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAlertPoliciesAsync(ListAlertPoliciesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListAlertPoliciesResponse, AlertPolicy> ListAlertPoliciesAsync(ListAlertPoliciesRequest request, CallSettings callSettings = null)
```

Lists the existing alerting policies for the workspace.

**Parameters**

**Name**

**Description**

`request`

`[ListAlertPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.ListAlertPoliciesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListAlertPoliciesResponse](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.ListAlertPoliciesResponse), [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A pageable asynchronous sequence of [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy) resources.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
ListAlertPoliciesRequest request = new ListAlertPoliciesRequest
{
    ProjectName = ProjectName.FromProject("[PROJECT]"),
    Filter = "",
    OrderBy = "",
};
// Make the request
PagedAsyncEnumerable<ListAlertPoliciesResponse, AlertPolicy> response = alertPolicyServiceClient.ListAlertPoliciesAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((AlertPolicy item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListAlertPoliciesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (AlertPolicy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<AlertPolicy> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (AlertPolicy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAlertPoliciesAsync(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListAlertPoliciesResponse, AlertPolicy> ListAlertPoliciesAsync(string name, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists the existing alerting policies for the workspace.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose alert policies are to be listed. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

Note that this field names the parent container in which the alerting policies to be listed are stored. To retrieve a single alerting policy by name, use the \[GetAlertPolicy\]\[google.monitoring.v3.AlertPolicyService.GetAlertPolicy\] operation, instead.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListAlertPoliciesResponse](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.ListAlertPoliciesResponse), [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A pageable asynchronous sequence of [AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy) resources.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]";
// Make the request
PagedAsyncEnumerable<ListAlertPoliciesResponse, AlertPolicy> response = alertPolicyServiceClient.ListAlertPoliciesAsync(name);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((AlertPolicy item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListAlertPoliciesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (AlertPolicy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<AlertPolicy> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (AlertPolicy item in singlePage)
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

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient#Google_Cloud_Monitoring_V3_AlertPolicyServiceClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient#Google_Cloud_Monitoring_V3_AlertPolicyServiceClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient#Google_Cloud_Monitoring_V3_AlertPolicyServiceClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyServiceClient#Google_Cloud_Monitoring_V3_AlertPolicyServiceClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

### UpdateAlertPolicy(UpdateAlertPolicyRequest, CallSettings)

```
public virtual AlertPolicy UpdateAlertPolicy(UpdateAlertPolicyRequest request, CallSettings callSettings = null)
```

Updates an alerting policy. You can either replace the entire policy with a new one or replace only certain fields in the current alerting policy by specifying the fields to be updated via `updateMask`. Returns the updated alerting policy.

**Parameters**

**Name**

**Description**

`request`

`[UpdateAlertPolicyRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.UpdateAlertPolicyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`

The RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
UpdateAlertPolicyRequest request = new UpdateAlertPolicyRequest
{
    UpdateMask = new FieldMask(),
    AlertPolicy = new AlertPolicy(),
};
// Make the request
AlertPolicy response = alertPolicyServiceClient.UpdateAlertPolicy(request);
```

### UpdateAlertPolicy(FieldMask, AlertPolicy, CallSettings)

```
public virtual AlertPolicy UpdateAlertPolicy(FieldMask updateMask, AlertPolicy alertPolicy, CallSettings callSettings = null)
```

Updates an alerting policy. You can either replace the entire policy with a new one or replace only certain fields in the current alerting policy by specifying the fields to be updated via `updateMask`. Returns the updated alerting policy.

**Parameters**

**Name**

**Description**

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Optional. A list of alerting policy field names. If this field is not empty, each listed field in the existing alerting policy is set to the value of the corresponding field in the supplied policy (`alert_policy`), or to the field's default value if the field is not in the supplied alerting policy. Fields not listed retain their previous value.

Examples of valid field masks include `display_name`, `documentation`, `documentation.content`, `documentation.mime_type`, `user_labels`, `user_label.nameofkey`, `enabled`, `conditions`, `combiner`, etc.

If this field is empty, then the supplied alerting policy replaces the existing policy. It is the same as deleting the existing policy and adding the supplied policy, except for the following:

-   The new policy will have the same `[ALERT_POLICY_ID]` as the former policy. This gives you continuity with the former policy in your notifications and incidents.
-   Conditions in the new policy will keep their former `[CONDITION_ID]` if the supplied condition includes the `name` field with that `[CONDITION_ID]`. If the supplied condition omits the `name` field, then a new `[CONDITION_ID]` is created.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The updated alerting policy or the updated values for the fields listed in `update_mask`. If `update_mask` is not empty, any fields in this policy that are not in `update_mask` are ignored.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`

The RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = AlertPolicyServiceClient.Create();
// Initialize request argument(s)
FieldMask updateMask = new FieldMask();
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = alertPolicyServiceClient.UpdateAlertPolicy(updateMask, alertPolicy);
```

### UpdateAlertPolicyAsync(UpdateAlertPolicyRequest, CallSettings)

```
public virtual Task<AlertPolicy> UpdateAlertPolicyAsync(UpdateAlertPolicyRequest request, CallSettings callSettings = null)
```

Updates an alerting policy. You can either replace the entire policy with a new one or replace only certain fields in the current alerting policy by specifying the fields to be updated via `updateMask`. Returns the updated alerting policy.

**Parameters**

**Name**

**Description**

`request`

`[UpdateAlertPolicyRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.UpdateAlertPolicyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
UpdateAlertPolicyRequest request = new UpdateAlertPolicyRequest
{
    UpdateMask = new FieldMask(),
    AlertPolicy = new AlertPolicy(),
};
// Make the request
AlertPolicy response = await alertPolicyServiceClient.UpdateAlertPolicyAsync(request);
```

### UpdateAlertPolicyAsync(UpdateAlertPolicyRequest, CancellationToken)

```
public virtual Task<AlertPolicy> UpdateAlertPolicyAsync(UpdateAlertPolicyRequest request, CancellationToken cancellationToken)
```

Updates an alerting policy. You can either replace the entire policy with a new one or replace only certain fields in the current alerting policy by specifying the fields to be updated via `updateMask`. Returns the updated alerting policy.

**Parameters**

**Name**

**Description**

`request`

`[UpdateAlertPolicyRequest](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.UpdateAlertPolicyRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
UpdateAlertPolicyRequest request = new UpdateAlertPolicyRequest
{
    UpdateMask = new FieldMask(),
    AlertPolicy = new AlertPolicy(),
};
// Make the request
AlertPolicy response = await alertPolicyServiceClient.UpdateAlertPolicyAsync(request);
```

### UpdateAlertPolicyAsync(FieldMask, AlertPolicy, CallSettings)

```
public virtual Task<AlertPolicy> UpdateAlertPolicyAsync(FieldMask updateMask, AlertPolicy alertPolicy, CallSettings callSettings = null)
```

Updates an alerting policy. You can either replace the entire policy with a new one or replace only certain fields in the current alerting policy by specifying the fields to be updated via `updateMask`. Returns the updated alerting policy.

**Parameters**

**Name**

**Description**

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Optional. A list of alerting policy field names. If this field is not empty, each listed field in the existing alerting policy is set to the value of the corresponding field in the supplied policy (`alert_policy`), or to the field's default value if the field is not in the supplied alerting policy. Fields not listed retain their previous value.

Examples of valid field masks include `display_name`, `documentation`, `documentation.content`, `documentation.mime_type`, `user_labels`, `user_label.nameofkey`, `enabled`, `conditions`, `combiner`, etc.

If this field is empty, then the supplied alerting policy replaces the existing policy. It is the same as deleting the existing policy and adding the supplied policy, except for the following:

-   The new policy will have the same `[ALERT_POLICY_ID]` as the former policy. This gives you continuity with the former policy in your notifications and incidents.
-   Conditions in the new policy will keep their former `[CONDITION_ID]` if the supplied condition includes the `name` field with that `[CONDITION_ID]`. If the supplied condition omits the `name` field, then a new `[CONDITION_ID]` is created.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The updated alerting policy or the updated values for the fields listed in `update_mask`. If `update_mask` is not empty, any fields in this policy that are not in `update_mask` are ignored.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
FieldMask updateMask = new FieldMask();
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = await alertPolicyServiceClient.UpdateAlertPolicyAsync(updateMask, alertPolicy);
```

### UpdateAlertPolicyAsync(FieldMask, AlertPolicy, CancellationToken)

```
public virtual Task<AlertPolicy> UpdateAlertPolicyAsync(FieldMask updateMask, AlertPolicy alertPolicy, CancellationToken cancellationToken)
```

Updates an alerting policy. You can either replace the entire policy with a new one or replace only certain fields in the current alerting policy by specifying the fields to be updated via `updateMask`. Returns the updated alerting policy.

**Parameters**

**Name**

**Description**

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Optional. A list of alerting policy field names. If this field is not empty, each listed field in the existing alerting policy is set to the value of the corresponding field in the supplied policy (`alert_policy`), or to the field's default value if the field is not in the supplied alerting policy. Fields not listed retain their previous value.

Examples of valid field masks include `display_name`, `documentation`, `documentation.content`, `documentation.mime_type`, `user_labels`, `user_label.nameofkey`, `enabled`, `conditions`, `combiner`, etc.

If this field is empty, then the supplied alerting policy replaces the existing policy. It is the same as deleting the existing policy and adding the supplied policy, except for the following:

-   The new policy will have the same `[ALERT_POLICY_ID]` as the former policy. This gives you continuity with the former policy in your notifications and incidents.
-   Conditions in the new policy will keep their former `[CONDITION_ID]` if the supplied condition includes the `name` field with that `[CONDITION_ID]`. If the supplied condition omits the `name` field, then a new `[CONDITION_ID]` is created.

`alertPolicy`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)`  

Required. The updated alerting policy or the updated values for the fields listed in `update_mask`. If `update_mask` is not empty, any fields in this policy that are not in `update_mask` are ignored.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy)>`

A Task containing the RPC response.

**Example**

```
// Create client
AlertPolicyServiceClient alertPolicyServiceClient = await AlertPolicyServiceClient.CreateAsync();
// Initialize request argument(s)
FieldMask updateMask = new FieldMask();
AlertPolicy alertPolicy = new AlertPolicy();
// Make the request
AlertPolicy response = await alertPolicyServiceClient.UpdateAlertPolicyAsync(updateMask, alertPolicy);
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
