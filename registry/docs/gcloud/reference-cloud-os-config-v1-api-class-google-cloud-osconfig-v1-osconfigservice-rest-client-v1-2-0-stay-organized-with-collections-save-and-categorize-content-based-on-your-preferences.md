-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Cloud OS Config V1 API - Class Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client (v1.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.2.0keyboard\_arrow\_down

-   [1.6.1 (latest)](/ruby/docs/reference/google-cloud-os_config-v1/latest/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client)
-   [1.6.0](/ruby/docs/reference/google-cloud-os_config-v1/1.6.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client)
-   [1.5.0](/ruby/docs/reference/google-cloud-os_config-v1/1.5.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client)
-   [1.4.0](/ruby/docs/reference/google-cloud-os_config-v1/1.4.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client)
-   [1.3.0](/ruby/docs/reference/google-cloud-os_config-v1/1.3.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client)
-   [1.2.1](/ruby/docs/reference/google-cloud-os_config-v1/1.2.1/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client)
-   [1.1.0](/ruby/docs/reference/google-cloud-os_config-v1/1.1.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client)
-   [1.0.1](/ruby/docs/reference/google-cloud-os_config-v1/1.0.1/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client)
-   [0.16.0](/ruby/docs/reference/google-cloud-os_config-v1/0.16.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client)
-   [0.15.2](/ruby/docs/reference/google-cloud-os_config-v1/0.15.2/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client)
-   [0.14.0](/ruby/docs/reference/google-cloud-os_config-v1/0.14.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client)
-   [0.13.0](/ruby/docs/reference/google-cloud-os_config-v1/0.13.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client)
-   [0.12.0](/ruby/docs/reference/google-cloud-os_config-v1/0.12.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client)
-   [0.11.0](/ruby/docs/reference/google-cloud-os_config-v1/0.11.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client)
-   [0.10.0](/ruby/docs/reference/google-cloud-os_config-v1/0.10.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client)
-   [0.9.1](/ruby/docs/reference/google-cloud-os_config-v1/0.9.1/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client)

Reference documentation and code samples for the Cloud OS Config V1 API class Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client.

REST client for the OsConfigService service.

OS Config API

The OS Config service is a server-side component that you can use to manage package installations and patch jobs for virtual machine instances.

## Inherits

-   Object

## Includes

-   [Google::Cloud::OsConfig::V1::OsConfigService::Paths](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-OsConfigService-Paths)

## Methods

### .configure

```
def self.configure() { |config| ... } -> Client::Configuration
```

Configure the OsConfigService Client class.

See [Configuration](/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client-Configuration "Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client::Configuration (class)") for a description of the configuration fields.

**Yields**

-   (config) — Configure the Client client.

**Yield Parameter**

-   **config** ([Client::Configuration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client-Configuration))

**Returns**

-   ([Client::Configuration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client-Configuration))

**Example**

\# Modify the configuration for all OsConfigService clients
::Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client.configure do |config|
  config.timeout \= 10.0
end

### #cancel\_patch\_job

```
def cancel_patch_job(request, options = nil) -> ::Google::Cloud::OsConfig::V1::PatchJob
def cancel_patch_job(name: nil) -> ::Google::Cloud::OsConfig::V1::PatchJob
```

Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.

**Overloads**

```
def cancel_patch_job(request, options = nil) -> ::Google::Cloud::OsConfig::V1::PatchJob
```

Pass arguments to `cancel_patch_job` via a request object, either of type [CancelPatchJobRequest](/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-CancelPatchJobRequest "Google::Cloud::OsConfig::V1::CancelPatchJobRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Cloud::OsConfig::V1::CancelPatchJobRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-CancelPatchJobRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

```
def cancel_patch_job(name: nil) -> ::Google::Cloud::OsConfig::V1::PatchJob
```

Pass arguments to `cancel_patch_job` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameter**

-   **name** (::String) — Required. Name of the patch in the form `projects/*/patchJobs/*`

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** ([::Google::Cloud::OsConfig::V1::PatchJob](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchJob))
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   ([::Google::Cloud::OsConfig::V1::PatchJob](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchJob))

**Raises**

-   (::Google::Cloud::Error) — if the REST call is aborted.

**Example**

Basic example

require "google/cloud/os\_config/v1"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Cloud::OsConfig::V1::CancelPatchJobRequest.new

\# Call the cancel\_patch\_job method.
result \= client.cancel\_patch\_job request

\# The returned object is of type Google::Cloud::OsConfig::V1::PatchJob.
p result

### #configure

```
def configure() { |config| ... } -> Client::Configuration
```

Configure the OsConfigService Client instance.

The configuration is set to the derived mode, meaning that values can be changed, but structural changes (adding new fields, etc.) are not allowed. Structural changes should be made on [Client.configure](/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client#Google__Cloud__OsConfig__V1__OsConfigService__Rest__Client_configure_class_ "Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client.configure (method)").

See [Configuration](/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client-Configuration "Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client::Configuration (class)") for a description of the configuration fields.

**Yields**

-   (config) — Configure the Client client.

**Yield Parameter**

-   **config** ([Client::Configuration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client-Configuration))

**Returns**

-   ([Client::Configuration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client-Configuration))

### #create\_patch\_deployment

```
def create_patch_deployment(request, options = nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
def create_patch_deployment(parent: nil, patch_deployment_id: nil, patch_deployment: nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
```

Create an OS Config patch deployment.

**Overloads**

```
def create_patch_deployment(request, options = nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
```

Pass arguments to `create_patch_deployment` via a request object, either of type [CreatePatchDeploymentRequest](/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-CreatePatchDeploymentRequest "Google::Cloud::OsConfig::V1::CreatePatchDeploymentRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Cloud::OsConfig::V1::CreatePatchDeploymentRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-CreatePatchDeploymentRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

```
def create_patch_deployment(parent: nil, patch_deployment_id: nil, patch_deployment: nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
```

Pass arguments to `create_patch_deployment` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameters**

-   **parent** (::String) — Required. The project to apply this patch deployment to in the form `projects/*`.
-   **patch\_deployment\_id** (::String) —
    
    Required. A name for the patch deployment in the project. When creating a name the following rules apply:
    
    -   Must contain only lowercase letters, numbers, and hyphens.
    -   Must start with a letter.
    -   Must be between 1-63 characters.
    -   Must end with a number or a letter.
    -   Must be unique within the project.
-   **patch\_deployment** ([::Google::Cloud::OsConfig::V1::PatchDeployment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchDeployment), ::Hash) — Required. The patch deployment to create.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** ([::Google::Cloud::OsConfig::V1::PatchDeployment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchDeployment))
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   ([::Google::Cloud::OsConfig::V1::PatchDeployment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchDeployment))

**Raises**

-   (::Google::Cloud::Error) — if the REST call is aborted.

**Example**

Basic example

require "google/cloud/os\_config/v1"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Cloud::OsConfig::V1::CreatePatchDeploymentRequest.new

\# Call the create\_patch\_deployment method.
result \= client.create\_patch\_deployment request

\# The returned object is of type Google::Cloud::OsConfig::V1::PatchDeployment.
p result

### #delete\_patch\_deployment

```
def delete_patch_deployment(request, options = nil) -> ::Google::Protobuf::Empty
def delete_patch_deployment(name: nil) -> ::Google::Protobuf::Empty
```

Delete an OS Config patch deployment.

**Overloads**

```
def delete_patch_deployment(request, options = nil) -> ::Google::Protobuf::Empty
```

Pass arguments to `delete_patch_deployment` via a request object, either of type [DeletePatchDeploymentRequest](/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-DeletePatchDeploymentRequest "Google::Cloud::OsConfig::V1::DeletePatchDeploymentRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Cloud::OsConfig::V1::DeletePatchDeploymentRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-DeletePatchDeploymentRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

```
def delete_patch_deployment(name: nil) -> ::Google::Protobuf::Empty
```

Pass arguments to `delete_patch_deployment` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameter**

-   **name** (::String) — Required. The resource name of the patch deployment in the form `projects/*/patchDeployments/*`.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** ([::Google::Protobuf::Empty](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Protobuf-Empty))
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   ([::Google::Protobuf::Empty](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Protobuf-Empty))

**Raises**

-   (::Google::Cloud::Error) — if the REST call is aborted.

**Example**

Basic example

require "google/cloud/os\_config/v1"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Cloud::OsConfig::V1::DeletePatchDeploymentRequest.new

\# Call the delete\_patch\_deployment method.
result \= client.delete\_patch\_deployment request

\# The returned object is of type Google::Protobuf::Empty.
p result

### #execute\_patch\_job

```
def execute_patch_job(request, options = nil) -> ::Google::Cloud::OsConfig::V1::PatchJob
def execute_patch_job(parent: nil, description: nil, instance_filter: nil, patch_config: nil, duration: nil, dry_run: nil, display_name: nil, rollout: nil) -> ::Google::Cloud::OsConfig::V1::PatchJob
```

Patch VM instances by creating and running a patch job.

**Overloads**

```
def execute_patch_job(request, options = nil) -> ::Google::Cloud::OsConfig::V1::PatchJob
```

Pass arguments to `execute_patch_job` via a request object, either of type [ExecutePatchJobRequest](/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-ExecutePatchJobRequest "Google::Cloud::OsConfig::V1::ExecutePatchJobRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Cloud::OsConfig::V1::ExecutePatchJobRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-ExecutePatchJobRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

```
def execute_patch_job(parent: nil, description: nil, instance_filter: nil, patch_config: nil, duration: nil, dry_run: nil, display_name: nil, rollout: nil) -> ::Google::Cloud::OsConfig::V1::PatchJob
```

Pass arguments to `execute_patch_job` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameters**

-   **parent** (::String) — Required. The project in which to run this patch in the form `projects/*`
-   **description** (::String) — Description of the patch job. Length of the description is limited to 1024 characters.
-   **instance\_filter** ([::Google::Cloud::OsConfig::V1::PatchInstanceFilter](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchInstanceFilter), ::Hash) — Required. Instances to patch, either explicitly or filtered by some criteria such as zone or labels.
-   **patch\_config** ([::Google::Cloud::OsConfig::V1::PatchConfig](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchConfig), ::Hash) — Patch configuration being applied. If omitted, instances are patched using the default configurations.
-   **duration** ([::Google::Protobuf::Duration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Protobuf-Duration), ::Hash) — Duration of the patch job. After the duration ends, the patch job times out.
-   **dry\_run** (::Boolean) — If this patch is a dry-run only, instances are contacted but will do nothing.
-   **display\_name** (::String) — Display name for this patch job. This does not have to be unique.
-   **rollout** ([::Google::Cloud::OsConfig::V1::PatchRollout](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchRollout), ::Hash) — Rollout strategy of the patch job.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** ([::Google::Cloud::OsConfig::V1::PatchJob](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchJob))
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   ([::Google::Cloud::OsConfig::V1::PatchJob](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchJob))

**Raises**

-   (::Google::Cloud::Error) — if the REST call is aborted.

**Example**

Basic example

require "google/cloud/os\_config/v1"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Cloud::OsConfig::V1::ExecutePatchJobRequest.new

\# Call the execute\_patch\_job method.
result \= client.execute\_patch\_job request

\# The returned object is of type Google::Cloud::OsConfig::V1::PatchJob.
p result

### #get\_patch\_deployment

```
def get_patch_deployment(request, options = nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
def get_patch_deployment(name: nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
```

Get an OS Config patch deployment.

**Overloads**

```
def get_patch_deployment(request, options = nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
```

Pass arguments to `get_patch_deployment` via a request object, either of type [GetPatchDeploymentRequest](/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-GetPatchDeploymentRequest "Google::Cloud::OsConfig::V1::GetPatchDeploymentRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Cloud::OsConfig::V1::GetPatchDeploymentRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-GetPatchDeploymentRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

```
def get_patch_deployment(name: nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
```

Pass arguments to `get_patch_deployment` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameter**

-   **name** (::String) — Required. The resource name of the patch deployment in the form `projects/*/patchDeployments/*`.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** ([::Google::Cloud::OsConfig::V1::PatchDeployment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchDeployment))
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   ([::Google::Cloud::OsConfig::V1::PatchDeployment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchDeployment))

**Raises**

-   (::Google::Cloud::Error) — if the REST call is aborted.

**Example**

Basic example

require "google/cloud/os\_config/v1"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Cloud::OsConfig::V1::GetPatchDeploymentRequest.new

\# Call the get\_patch\_deployment method.
result \= client.get\_patch\_deployment request

\# The returned object is of type Google::Cloud::OsConfig::V1::PatchDeployment.
p result

### #get\_patch\_job

```
def get_patch_job(request, options = nil) -> ::Google::Cloud::OsConfig::V1::PatchJob
def get_patch_job(name: nil) -> ::Google::Cloud::OsConfig::V1::PatchJob
```

Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.

**Overloads**

```
def get_patch_job(request, options = nil) -> ::Google::Cloud::OsConfig::V1::PatchJob
```

Pass arguments to `get_patch_job` via a request object, either of type [GetPatchJobRequest](/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-GetPatchJobRequest "Google::Cloud::OsConfig::V1::GetPatchJobRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Cloud::OsConfig::V1::GetPatchJobRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-GetPatchJobRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

```
def get_patch_job(name: nil) -> ::Google::Cloud::OsConfig::V1::PatchJob
```

Pass arguments to `get_patch_job` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameter**

-   **name** (::String) — Required. Name of the patch in the form `projects/*/patchJobs/*`

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** ([::Google::Cloud::OsConfig::V1::PatchJob](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchJob))
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   ([::Google::Cloud::OsConfig::V1::PatchJob](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchJob))

**Raises**

-   (::Google::Cloud::Error) — if the REST call is aborted.

**Example**

Basic example

require "google/cloud/os\_config/v1"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Cloud::OsConfig::V1::GetPatchJobRequest.new

\# Call the get\_patch\_job method.
result \= client.get\_patch\_job request

\# The returned object is of type Google::Cloud::OsConfig::V1::PatchJob.
p result

### #initialize

```
def initialize() { |config| ... } -> Client
```

Create a new OsConfigService REST client object.

**Yields**

-   (config) — Configure the OsConfigService client.

**Yield Parameter**

-   **config** ([Client::Configuration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client-Configuration))

**Returns**

-   ([Client](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-OsConfigService-Rest-Client)) — a new instance of Client

**Example**

\# Create a client using the default configuration
client \= ::Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client.new

\# Create a client using a custom configuration
client \= ::Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client.new do |config|
  config.timeout \= 10.0
end

### #list\_patch\_deployments

```
def list_patch_deployments(request, options = nil) -> ::Gapic::Rest::PagedEnumerable<::Google::Cloud::OsConfig::V1::PatchDeployment>
def list_patch_deployments(parent: nil, page_size: nil, page_token: nil) -> ::Gapic::Rest::PagedEnumerable<::Google::Cloud::OsConfig::V1::PatchDeployment>
```

Get a page of OS Config patch deployments.

**Overloads**

```
def list_patch_deployments(request, options = nil) -> ::Gapic::Rest::PagedEnumerable<::Google::Cloud::OsConfig::V1::PatchDeployment>
```

Pass arguments to `list_patch_deployments` via a request object, either of type [ListPatchDeploymentsRequest](/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-ListPatchDeploymentsRequest "Google::Cloud::OsConfig::V1::ListPatchDeploymentsRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Cloud::OsConfig::V1::ListPatchDeploymentsRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-ListPatchDeploymentsRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

```
def list_patch_deployments(parent: nil, page_size: nil, page_token: nil) -> ::Gapic::Rest::PagedEnumerable<::Google::Cloud::OsConfig::V1::PatchDeployment>
```

Pass arguments to `list_patch_deployments` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameters**

-   **parent** (::String) — Required. The resource name of the parent in the form `projects/*`.
-   **page\_size** (::Integer) — Optional. The maximum number of patch deployments to return. Default is 100.
-   **page\_token** (::String) — Optional. A pagination token returned from a previous call to ListPatchDeployments that indicates where this listing should continue from.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** (::Gapic::Rest::PagedEnumerable<[::Google::Cloud::OsConfig::V1::PatchDeployment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchDeployment)\>)
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   (::Gapic::Rest::PagedEnumerable<[::Google::Cloud::OsConfig::V1::PatchDeployment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchDeployment)\>)

**Raises**

-   (::Google::Cloud::Error) — if the REST call is aborted.

**Example**

Basic example

require "google/cloud/os\_config/v1"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Cloud::OsConfig::V1::ListPatchDeploymentsRequest.new

\# Call the list\_patch\_deployments method.
result \= client.list\_patch\_deployments request

\# The returned object is of type Gapic::PagedEnumerable. You can iterate
\# over elements, and API calls will be issued to fetch pages as needed.
result.each do |item|
  \# Each element is of type ::Google::Cloud::OsConfig::V1::PatchDeployment.
  p item
end

### #list\_patch\_job\_instance\_details

```
def list_patch_job_instance_details(request, options = nil) -> ::Gapic::Rest::PagedEnumerable<::Google::Cloud::OsConfig::V1::PatchJobInstanceDetails>
def list_patch_job_instance_details(parent: nil, page_size: nil, page_token: nil, filter: nil) -> ::Gapic::Rest::PagedEnumerable<::Google::Cloud::OsConfig::V1::PatchJobInstanceDetails>
```

Get a list of instance details for a given patch job.

**Overloads**

```
def list_patch_job_instance_details(request, options = nil) -> ::Gapic::Rest::PagedEnumerable<::Google::Cloud::OsConfig::V1::PatchJobInstanceDetails>
```

Pass arguments to `list_patch_job_instance_details` via a request object, either of type [ListPatchJobInstanceDetailsRequest](/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-ListPatchJobInstanceDetailsRequest "Google::Cloud::OsConfig::V1::ListPatchJobInstanceDetailsRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Cloud::OsConfig::V1::ListPatchJobInstanceDetailsRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-ListPatchJobInstanceDetailsRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

```
def list_patch_job_instance_details(parent: nil, page_size: nil, page_token: nil, filter: nil) -> ::Gapic::Rest::PagedEnumerable<::Google::Cloud::OsConfig::V1::PatchJobInstanceDetails>
```

Pass arguments to `list_patch_job_instance_details` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameters**

-   **parent** (::String) — Required. The parent for the instances are in the form of `projects/*/patchJobs/*`.
-   **page\_size** (::Integer) — The maximum number of instance details records to return. Default is 100.
-   **page\_token** (::String) — A pagination token returned from a previous call that indicates where this listing should continue from.
-   **filter** (::String) — A filter expression that filters results listed in the response. This field supports filtering results by instance zone, name, state, or `failure_reason`.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** (::Gapic::Rest::PagedEnumerable<[::Google::Cloud::OsConfig::V1::PatchJobInstanceDetails](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchJobInstanceDetails)\>)
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   (::Gapic::Rest::PagedEnumerable<[::Google::Cloud::OsConfig::V1::PatchJobInstanceDetails](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchJobInstanceDetails)\>)

**Raises**

-   (::Google::Cloud::Error) — if the REST call is aborted.

**Example**

Basic example

require "google/cloud/os\_config/v1"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Cloud::OsConfig::V1::ListPatchJobInstanceDetailsRequest.new

\# Call the list\_patch\_job\_instance\_details method.
result \= client.list\_patch\_job\_instance\_details request

\# The returned object is of type Gapic::PagedEnumerable. You can iterate
\# over elements, and API calls will be issued to fetch pages as needed.
result.each do |item|
  \# Each element is of type ::Google::Cloud::OsConfig::V1::PatchJobInstanceDetails.
  p item
end

### #list\_patch\_jobs

```
def list_patch_jobs(request, options = nil) -> ::Gapic::Rest::PagedEnumerable<::Google::Cloud::OsConfig::V1::PatchJob>
def list_patch_jobs(parent: nil, page_size: nil, page_token: nil, filter: nil) -> ::Gapic::Rest::PagedEnumerable<::Google::Cloud::OsConfig::V1::PatchJob>
```

Get a list of patch jobs.

**Overloads**

```
def list_patch_jobs(request, options = nil) -> ::Gapic::Rest::PagedEnumerable<::Google::Cloud::OsConfig::V1::PatchJob>
```

Pass arguments to `list_patch_jobs` via a request object, either of type [ListPatchJobsRequest](/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-ListPatchJobsRequest "Google::Cloud::OsConfig::V1::ListPatchJobsRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Cloud::OsConfig::V1::ListPatchJobsRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-ListPatchJobsRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

```
def list_patch_jobs(parent: nil, page_size: nil, page_token: nil, filter: nil) -> ::Gapic::Rest::PagedEnumerable<::Google::Cloud::OsConfig::V1::PatchJob>
```

Pass arguments to `list_patch_jobs` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameters**

-   **parent** (::String) — Required. In the form of `projects/*`
-   **page\_size** (::Integer) — The maximum number of instance status to return.
-   **page\_token** (::String) — A pagination token returned from a previous call that indicates where this listing should continue from.
-   **filter** (::String) — If provided, this field specifies the criteria that must be met by patch jobs to be included in the response. Currently, filtering is only available on the patch\_deployment field.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** (::Gapic::Rest::PagedEnumerable<[::Google::Cloud::OsConfig::V1::PatchJob](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchJob)\>)
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   (::Gapic::Rest::PagedEnumerable<[::Google::Cloud::OsConfig::V1::PatchJob](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchJob)\>)

**Raises**

-   (::Google::Cloud::Error) — if the REST call is aborted.

**Example**

Basic example

require "google/cloud/os\_config/v1"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Cloud::OsConfig::V1::ListPatchJobsRequest.new

\# Call the list\_patch\_jobs method.
result \= client.list\_patch\_jobs request

\# The returned object is of type Gapic::PagedEnumerable. You can iterate
\# over elements, and API calls will be issued to fetch pages as needed.
result.each do |item|
  \# Each element is of type ::Google::Cloud::OsConfig::V1::PatchJob.
  p item
end

### #logger

```
def logger() -> Logger
```

The logger used for request/response debug logging.

**Returns**

-   (Logger)

### #pause\_patch\_deployment

```
def pause_patch_deployment(request, options = nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
def pause_patch_deployment(name: nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
```

Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.

**Overloads**

```
def pause_patch_deployment(request, options = nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
```

Pass arguments to `pause_patch_deployment` via a request object, either of type [PausePatchDeploymentRequest](/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PausePatchDeploymentRequest "Google::Cloud::OsConfig::V1::PausePatchDeploymentRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Cloud::OsConfig::V1::PausePatchDeploymentRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PausePatchDeploymentRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

```
def pause_patch_deployment(name: nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
```

Pass arguments to `pause_patch_deployment` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameter**

-   **name** (::String) — Required. The resource name of the patch deployment in the form `projects/*/patchDeployments/*`.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** ([::Google::Cloud::OsConfig::V1::PatchDeployment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchDeployment))
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   ([::Google::Cloud::OsConfig::V1::PatchDeployment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchDeployment))

**Raises**

-   (::Google::Cloud::Error) — if the REST call is aborted.

**Example**

Basic example

require "google/cloud/os\_config/v1"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Cloud::OsConfig::V1::PausePatchDeploymentRequest.new

\# Call the pause\_patch\_deployment method.
result \= client.pause\_patch\_deployment request

\# The returned object is of type Google::Cloud::OsConfig::V1::PatchDeployment.
p result

### #resume\_patch\_deployment

```
def resume_patch_deployment(request, options = nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
def resume_patch_deployment(name: nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
```

Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.

**Overloads**

```
def resume_patch_deployment(request, options = nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
```

Pass arguments to `resume_patch_deployment` via a request object, either of type [ResumePatchDeploymentRequest](/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-ResumePatchDeploymentRequest "Google::Cloud::OsConfig::V1::ResumePatchDeploymentRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Cloud::OsConfig::V1::ResumePatchDeploymentRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-ResumePatchDeploymentRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

```
def resume_patch_deployment(name: nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
```

Pass arguments to `resume_patch_deployment` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameter**

-   **name** (::String) — Required. The resource name of the patch deployment in the form `projects/*/patchDeployments/*`.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** ([::Google::Cloud::OsConfig::V1::PatchDeployment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchDeployment))
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   ([::Google::Cloud::OsConfig::V1::PatchDeployment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchDeployment))

**Raises**

-   (::Google::Cloud::Error) — if the REST call is aborted.

**Example**

Basic example

require "google/cloud/os\_config/v1"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Cloud::OsConfig::V1::ResumePatchDeploymentRequest.new

\# Call the resume\_patch\_deployment method.
result \= client.resume\_patch\_deployment request

\# The returned object is of type Google::Cloud::OsConfig::V1::PatchDeployment.
p result

### #universe\_domain

```
def universe_domain() -> String
```

The effective universe domain

**Returns**

-   (String)

### #update\_patch\_deployment

```
def update_patch_deployment(request, options = nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
def update_patch_deployment(patch_deployment: nil, update_mask: nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
```

Update an OS Config patch deployment.

**Overloads**

```
def update_patch_deployment(request, options = nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
```

Pass arguments to `update_patch_deployment` via a request object, either of type [UpdatePatchDeploymentRequest](/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-UpdatePatchDeploymentRequest "Google::Cloud::OsConfig::V1::UpdatePatchDeploymentRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Cloud::OsConfig::V1::UpdatePatchDeploymentRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-UpdatePatchDeploymentRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

```
def update_patch_deployment(patch_deployment: nil, update_mask: nil) -> ::Google::Cloud::OsConfig::V1::PatchDeployment
```

Pass arguments to `update_patch_deployment` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameters**

-   **patch\_deployment** ([::Google::Cloud::OsConfig::V1::PatchDeployment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchDeployment), ::Hash) — Required. The patch deployment to Update.
-   **update\_mask** ([::Google::Protobuf::FieldMask](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Protobuf-FieldMask), ::Hash) — Optional. Field mask that controls which fields of the patch deployment should be updated.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** ([::Google::Cloud::OsConfig::V1::PatchDeployment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchDeployment))
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   ([::Google::Cloud::OsConfig::V1::PatchDeployment](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-os_config-v1/1.2.0/Google-Cloud-OsConfig-V1-PatchDeployment))

**Raises**

-   (::Google::Cloud::Error) — if the REST call is aborted.

**Example**

Basic example

require "google/cloud/os\_config/v1"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::OsConfig::V1::OsConfigService::Rest::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Cloud::OsConfig::V1::UpdatePatchDeploymentRequest.new

\# Call the update\_patch\_deployment method.
result \= client.update\_patch\_deployment request

\# The returned object is of type Google::Cloud::OsConfig::V1::PatchDeployment.
p result

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
