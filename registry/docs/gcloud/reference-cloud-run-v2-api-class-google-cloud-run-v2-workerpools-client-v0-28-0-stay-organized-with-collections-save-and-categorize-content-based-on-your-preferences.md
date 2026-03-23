-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Cloud Run V2 API - Class Google::Cloud::Run::V2::WorkerPools::Client (v0.28.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [0.28.0 (latest)](/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.27.0](/ruby/docs/reference/google-cloud-run-v2/0.27.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.26.0](/ruby/docs/reference/google-cloud-run-v2/0.26.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.25.0](/ruby/docs/reference/google-cloud-run-v2/0.25.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.24.1](/ruby/docs/reference/google-cloud-run-v2/0.24.1/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.23.0](/ruby/docs/reference/google-cloud-run-v2/0.23.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.22.1](/ruby/docs/reference/google-cloud-run-v2/0.22.1/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.21.0](/ruby/docs/reference/google-cloud-run-v2/0.21.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.20.0](/ruby/docs/reference/google-cloud-run-v2/0.20.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.19.0](/ruby/docs/reference/google-cloud-run-v2/0.19.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.18.0](/ruby/docs/reference/google-cloud-run-v2/0.18.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.17.0](/ruby/docs/reference/google-cloud-run-v2/0.17.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.16.1](/ruby/docs/reference/google-cloud-run-v2/0.16.1/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.15.0](/ruby/docs/reference/google-cloud-run-v2/0.15.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.14.0](/ruby/docs/reference/google-cloud-run-v2/0.14.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.13.2](/ruby/docs/reference/google-cloud-run-v2/0.13.2/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.12.0](/ruby/docs/reference/google-cloud-run-v2/0.12.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.11.0](/ruby/docs/reference/google-cloud-run-v2/0.11.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.10.1](/ruby/docs/reference/google-cloud-run-v2/0.10.1/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.9.1](/ruby/docs/reference/google-cloud-run-v2/0.9.1/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.8.0](/ruby/docs/reference/google-cloud-run-v2/0.8.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.7.0](/ruby/docs/reference/google-cloud-run-v2/0.7.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.6.0](/ruby/docs/reference/google-cloud-run-v2/0.6.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.5.0](/ruby/docs/reference/google-cloud-run-v2/0.5.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.4.0](/ruby/docs/reference/google-cloud-run-v2/0.4.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.3.1](/ruby/docs/reference/google-cloud-run-v2/0.3.1/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.2.0](/ruby/docs/reference/google-cloud-run-v2/0.2.0/Google-Cloud-Run-V2-WorkerPools-Client)
-   [0.1.0](/ruby/docs/reference/google-cloud-run-v2/0.1.0/Google-Cloud-Run-V2-WorkerPools-Client)

Reference documentation and code samples for the Cloud Run V2 API class Google::Cloud::Run::V2::WorkerPools::Client.

Client for the WorkerPools service.

Cloud Run WorkerPool Control Plane API.

## Inherits

-   Object

## Includes

-   [Google::Cloud::Run::V2::WorkerPools::Paths](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPools-Paths)

## Methods

### .configure

```
def self.configure() { |config| ... } -> Client::Configuration
```

Configure the WorkerPools Client class.

See [Configuration](/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPools-Client-Configuration "Google::Cloud::Run::V2::WorkerPools::Client::Configuration (class)") for a description of the configuration fields.

**Yields**

-   (config) — Configure the Client client.

**Yield Parameter**

-   **config** ([Client::Configuration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPools-Client-Configuration))

**Returns**

-   ([Client::Configuration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPools-Client-Configuration))

**Example**

\# Modify the configuration for all WorkerPools clients
::Google::Cloud::Run::V2::WorkerPools::Client.configure do |config|
  config.timeout \= 10.0
end

### #configure

```
def configure() { |config| ... } -> Client::Configuration
```

Configure the WorkerPools Client instance.

The configuration is set to the derived mode, meaning that values can be changed, but structural changes (adding new fields, etc.) are not allowed. Structural changes should be made on [Client.configure](/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPools-Client#Google__Cloud__Run__V2__WorkerPools__Client_configure_class_ "Google::Cloud::Run::V2::WorkerPools::Client.configure (method)").

See [Configuration](/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPools-Client-Configuration "Google::Cloud::Run::V2::WorkerPools::Client::Configuration (class)") for a description of the configuration fields.

**Yields**

-   (config) — Configure the Client client.

**Yield Parameter**

-   **config** ([Client::Configuration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPools-Client-Configuration))

**Returns**

-   ([Client::Configuration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPools-Client-Configuration))

### #create\_worker\_pool

```
def create_worker_pool(request, options = nil) -> ::Gapic::Operation
def create_worker_pool(parent: nil, worker_pool: nil, worker_pool_id: nil, validate_only: nil) -> ::Gapic::Operation
```

Creates a new WorkerPool in a given project and location.

**Overloads**

```
def create_worker_pool(request, options = nil) -> ::Gapic::Operation
```

Pass arguments to `create_worker_pool` via a request object, either of type [CreateWorkerPoolRequest](/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-CreateWorkerPoolRequest "Google::Cloud::Run::V2::CreateWorkerPoolRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Cloud::Run::V2::CreateWorkerPoolRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-CreateWorkerPoolRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.

```
def create_worker_pool(parent: nil, worker_pool: nil, worker_pool_id: nil, validate_only: nil) -> ::Gapic::Operation
```

Pass arguments to `create_worker_pool` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameters**

-   **parent** (::String) — Required. The location and project in which this worker pool should be created. Format: `projects/{project}/locations/{location}`, where `{project}` can be project id or number. Only lowercase characters, digits, and hyphens.
-   **worker\_pool** ([::Google::Cloud::Run::V2::WorkerPool](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPool), ::Hash) — Required. The WorkerPool instance to create.
-   **worker\_pool\_id** (::String) — Required. The unique identifier for the WorkerPool. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the worker pool becomes `{parent}/workerPools/{worker_pool_id}`.
-   **validate\_only** (::Boolean) — Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.

**Yields**

-   (response, operation) — Access the result along with the RPC operation

**Yield Parameters**

-   **response** (::Gapic::Operation)
-   **operation** (::GRPC::ActiveCall::Operation)

**Returns**

-   (::Gapic::Operation)

**Raises**

-   (::Google::Cloud::Error) — if the RPC is aborted.

**Example**

Basic example

require "google/cloud/run/v2"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::Run::V2::WorkerPools::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Cloud::Run::V2::CreateWorkerPoolRequest.new

\# Call the create\_worker\_pool method.
result \= client.create\_worker\_pool request

\# The returned object is of type Gapic::Operation. You can use it to
\# check the status of an operation, cancel it, or wait for results.
\# Here is how to wait for a response.
result.wait\_until\_done! timeout: 60
if result.response?
  p result.response
else
  puts "No response received."
end

### #delete\_worker\_pool

```
def delete_worker_pool(request, options = nil) -> ::Gapic::Operation
def delete_worker_pool(name: nil, validate_only: nil, etag: nil) -> ::Gapic::Operation
```

Deletes a WorkerPool.

**Overloads**

```
def delete_worker_pool(request, options = nil) -> ::Gapic::Operation
```

Pass arguments to `delete_worker_pool` via a request object, either of type [DeleteWorkerPoolRequest](/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-DeleteWorkerPoolRequest "Google::Cloud::Run::V2::DeleteWorkerPoolRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Cloud::Run::V2::DeleteWorkerPoolRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-DeleteWorkerPoolRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.

```
def delete_worker_pool(name: nil, validate_only: nil, etag: nil) -> ::Gapic::Operation
```

Pass arguments to `delete_worker_pool` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameters**

-   **name** (::String) — Required. The full name of the WorkerPool. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`, where `{project}` can be project id or number.
-   **validate\_only** (::Boolean) — Optional. Indicates that the request should be validated without actually deleting any resources.
-   **etag** (::String) — A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.

**Yields**

-   (response, operation) — Access the result along with the RPC operation

**Yield Parameters**

-   **response** (::Gapic::Operation)
-   **operation** (::GRPC::ActiveCall::Operation)

**Returns**

-   (::Gapic::Operation)

**Raises**

-   (::Google::Cloud::Error) — if the RPC is aborted.

**Example**

Basic example

require "google/cloud/run/v2"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::Run::V2::WorkerPools::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Cloud::Run::V2::DeleteWorkerPoolRequest.new

\# Call the delete\_worker\_pool method.
result \= client.delete\_worker\_pool request

\# The returned object is of type Gapic::Operation. You can use it to
\# check the status of an operation, cancel it, or wait for results.
\# Here is how to wait for a response.
result.wait\_until\_done! timeout: 60
if result.response?
  p result.response
else
  puts "No response received."
end

### #get\_iam\_policy

```
def get_iam_policy(request, options = nil) -> ::Google::Iam::V1::Policy
def get_iam_policy(resource: nil, options: nil) -> ::Google::Iam::V1::Policy
```

Gets the IAM Access Control policy currently in effect for the given Cloud Run WorkerPool. This result does not include any inherited policies.

**Overloads**

```
def get_iam_policy(request, options = nil) -> ::Google::Iam::V1::Policy
```

Pass arguments to `get_iam_policy` via a request object, either of type [Iam::V1::GetIamPolicyRequest](/ruby/docs/reference/google-cloud-run-v2/latest/Google-Iam-V1-GetIamPolicyRequest "Google::Iam::V1::GetIamPolicyRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Iam::V1::GetIamPolicyRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Iam-V1-GetIamPolicyRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.

```
def get_iam_policy(resource: nil, options: nil) -> ::Google::Iam::V1::Policy
```

Pass arguments to `get_iam_policy` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameters**

-   **resource** (::String) — REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
-   **options** ([::Google::Iam::V1::GetPolicyOptions](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Iam-V1-GetPolicyOptions), ::Hash) — OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.

**Yields**

-   (response, operation) — Access the result along with the RPC operation

**Yield Parameters**

-   **response** ([::Google::Iam::V1::Policy](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Iam-V1-Policy))
-   **operation** (::GRPC::ActiveCall::Operation)

**Returns**

-   ([::Google::Iam::V1::Policy](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Iam-V1-Policy))

**Raises**

-   (::Google::Cloud::Error) — if the RPC is aborted.

**Example**

Basic example

require "google/cloud/run/v2"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::Run::V2::WorkerPools::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Iam::V1::GetIamPolicyRequest.new

\# Call the get\_iam\_policy method.
result \= client.get\_iam\_policy request

\# The returned object is of type Google::Iam::V1::Policy.
p result

### #get\_worker\_pool

```
def get_worker_pool(request, options = nil) -> ::Google::Cloud::Run::V2::WorkerPool
def get_worker_pool(name: nil) -> ::Google::Cloud::Run::V2::WorkerPool
```

Gets information about a WorkerPool.

**Overloads**

```
def get_worker_pool(request, options = nil) -> ::Google::Cloud::Run::V2::WorkerPool
```

Pass arguments to `get_worker_pool` via a request object, either of type [GetWorkerPoolRequest](/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-GetWorkerPoolRequest "Google::Cloud::Run::V2::GetWorkerPoolRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Cloud::Run::V2::GetWorkerPoolRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-GetWorkerPoolRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.

```
def get_worker_pool(name: nil) -> ::Google::Cloud::Run::V2::WorkerPool
```

Pass arguments to `get_worker_pool` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameter**

-   **name** (::String) — Required. The full name of the WorkerPool. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`, where `{project}` can be project id or number.

**Yields**

-   (response, operation) — Access the result along with the RPC operation

**Yield Parameters**

-   **response** ([::Google::Cloud::Run::V2::WorkerPool](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPool))
-   **operation** (::GRPC::ActiveCall::Operation)

**Returns**

-   ([::Google::Cloud::Run::V2::WorkerPool](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPool))

**Raises**

-   (::Google::Cloud::Error) — if the RPC is aborted.

**Example**

Basic example

require "google/cloud/run/v2"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::Run::V2::WorkerPools::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Cloud::Run::V2::GetWorkerPoolRequest.new

\# Call the get\_worker\_pool method.
result \= client.get\_worker\_pool request

\# The returned object is of type Google::Cloud::Run::V2::WorkerPool.
p result

### #initialize

```
def initialize() { |config| ... } -> Client
```

Create a new WorkerPools client object.

**Yields**

-   (config) — Configure the WorkerPools client.

**Yield Parameter**

-   **config** ([Client::Configuration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPools-Client-Configuration))

**Returns**

-   ([Client](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPools-Client)) — a new instance of Client

**Example**

\# Create a client using the default configuration
client \= ::Google::Cloud::Run::V2::WorkerPools::Client.new

\# Create a client using a custom configuration
client \= ::Google::Cloud::Run::V2::WorkerPools::Client.new do |config|
  config.timeout \= 10.0
end

### #list\_worker\_pools

```
def list_worker_pools(request, options = nil) -> ::Gapic::PagedEnumerable<::Google::Cloud::Run::V2::WorkerPool>
def list_worker_pools(parent: nil, page_size: nil, page_token: nil, show_deleted: nil) -> ::Gapic::PagedEnumerable<::Google::Cloud::Run::V2::WorkerPool>
```

Lists WorkerPools. Results are sorted by creation time, descending.

**Overloads**

```
def list_worker_pools(request, options = nil) -> ::Gapic::PagedEnumerable<::Google::Cloud::Run::V2::WorkerPool>
```

Pass arguments to `list_worker_pools` via a request object, either of type [ListWorkerPoolsRequest](/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-ListWorkerPoolsRequest "Google::Cloud::Run::V2::ListWorkerPoolsRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Cloud::Run::V2::ListWorkerPoolsRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-ListWorkerPoolsRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.

```
def list_worker_pools(parent: nil, page_size: nil, page_token: nil, show_deleted: nil) -> ::Gapic::PagedEnumerable<::Google::Cloud::Run::V2::WorkerPool>
```

Pass arguments to `list_worker_pools` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameters**

-   **parent** (::String) — Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: `projects/{project}/locations/{location}`, where `{project}` can be project id or number.
-   **page\_size** (::Integer) — Maximum number of WorkerPools to return in this call.
-   **page\_token** (::String) — A page token received from a previous call to ListWorkerPools. All other parameters must match.
-   **show\_deleted** (::Boolean) — If true, returns deleted (but unexpired) resources along with active ones.

**Yields**

-   (response, operation) — Access the result along with the RPC operation

**Yield Parameters**

-   **response** (::Gapic::PagedEnumerable<[::Google::Cloud::Run::V2::WorkerPool](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPool)\>)
-   **operation** (::GRPC::ActiveCall::Operation)

**Returns**

-   (::Gapic::PagedEnumerable<[::Google::Cloud::Run::V2::WorkerPool](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPool)\>)

**Raises**

-   (::Google::Cloud::Error) — if the RPC is aborted.

**Example**

Basic example

require "google/cloud/run/v2"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::Run::V2::WorkerPools::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Cloud::Run::V2::ListWorkerPoolsRequest.new

\# Call the list\_worker\_pools method.
result \= client.list\_worker\_pools request

\# The returned object is of type Gapic::PagedEnumerable. You can iterate
\# over elements, and API calls will be issued to fetch pages as needed.
result.each do |item|
  \# Each element is of type ::Google::Cloud::Run::V2::WorkerPool.
  p item
end

### #location\_client

```
def location_client() -> Google::Cloud::Location::Locations::Client
```

Get the associated client for mix-in of the Locations.

**Returns**

-   (Google::Cloud::Location::Locations::Client)

### #logger

```
def logger() -> Logger
```

The logger used for request/response debug logging.

**Returns**

-   (Logger)

### #operations\_client

```
def operations_client() -> ::Google::Cloud::Run::V2::WorkerPools::Operations
```

Get the associated client for long-running operations.

**Returns**

-   ([::Google::Cloud::Run::V2::WorkerPools::Operations](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPools-Operations))

### #set\_iam\_policy

```
def set_iam_policy(request, options = nil) -> ::Google::Iam::V1::Policy
def set_iam_policy(resource: nil, policy: nil, update_mask: nil) -> ::Google::Iam::V1::Policy
```

Sets the IAM Access control policy for the specified WorkerPool. Overwrites any existing policy.

**Overloads**

```
def set_iam_policy(request, options = nil) -> ::Google::Iam::V1::Policy
```

Pass arguments to `set_iam_policy` via a request object, either of type [Iam::V1::SetIamPolicyRequest](/ruby/docs/reference/google-cloud-run-v2/latest/Google-Iam-V1-SetIamPolicyRequest "Google::Iam::V1::SetIamPolicyRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Iam::V1::SetIamPolicyRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Iam-V1-SetIamPolicyRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.

```
def set_iam_policy(resource: nil, policy: nil, update_mask: nil) -> ::Google::Iam::V1::Policy
```

Pass arguments to `set_iam_policy` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameters**

-   **resource** (::String) — REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
-   **policy** ([::Google::Iam::V1::Policy](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Iam-V1-Policy), ::Hash) — REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
-   **update\_mask** ([::Google::Protobuf::FieldMask](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Protobuf-FieldMask), ::Hash) — OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:
    
    `paths: "bindings, etag"`
    

**Yields**

-   (response, operation) — Access the result along with the RPC operation

**Yield Parameters**

-   **response** ([::Google::Iam::V1::Policy](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Iam-V1-Policy))
-   **operation** (::GRPC::ActiveCall::Operation)

**Returns**

-   ([::Google::Iam::V1::Policy](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Iam-V1-Policy))

**Raises**

-   (::Google::Cloud::Error) — if the RPC is aborted.

**Example**

Basic example

require "google/cloud/run/v2"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::Run::V2::WorkerPools::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Iam::V1::SetIamPolicyRequest.new

\# Call the set\_iam\_policy method.
result \= client.set\_iam\_policy request

\# The returned object is of type Google::Iam::V1::Policy.
p result

### #test\_iam\_permissions

```
def test_iam_permissions(request, options = nil) -> ::Google::Iam::V1::TestIamPermissionsResponse
def test_iam_permissions(resource: nil, permissions: nil) -> ::Google::Iam::V1::TestIamPermissionsResponse
```

Returns permissions that a caller has on the specified Project.

There are no permissions required for making this API call.

**Overloads**

```
def test_iam_permissions(request, options = nil) -> ::Google::Iam::V1::TestIamPermissionsResponse
```

Pass arguments to `test_iam_permissions` via a request object, either of type [Iam::V1::TestIamPermissionsRequest](/ruby/docs/reference/google-cloud-run-v2/latest/Google-Iam-V1-TestIamPermissionsRequest "Google::Iam::V1::TestIamPermissionsRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Iam::V1::TestIamPermissionsRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Iam-V1-TestIamPermissionsRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.

```
def test_iam_permissions(resource: nil, permissions: nil) -> ::Google::Iam::V1::TestIamPermissionsResponse
```

Pass arguments to `test_iam_permissions` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameters**

-   **resource** (::String) — REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
-   **permissions** (::Array<::String>) — The set of permissions to check for the `resource`. Permissions with wildcards (such as '_' or 'storage._') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).

**Yields**

-   (response, operation) — Access the result along with the RPC operation

**Yield Parameters**

-   **response** ([::Google::Iam::V1::TestIamPermissionsResponse](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Iam-V1-TestIamPermissionsResponse))
-   **operation** (::GRPC::ActiveCall::Operation)

**Returns**

-   ([::Google::Iam::V1::TestIamPermissionsResponse](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Iam-V1-TestIamPermissionsResponse))

**Raises**

-   (::Google::Cloud::Error) — if the RPC is aborted.

**Example**

Basic example

require "google/cloud/run/v2"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::Run::V2::WorkerPools::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Iam::V1::TestIamPermissionsRequest.new

\# Call the test\_iam\_permissions method.
result \= client.test\_iam\_permissions request

\# The returned object is of type Google::Iam::V1::TestIamPermissionsResponse.
p result

### #universe\_domain

```
def universe_domain() -> String
```

The effective universe domain

**Returns**

-   (String)

### #update\_worker\_pool

```
def update_worker_pool(request, options = nil) -> ::Gapic::Operation
def update_worker_pool(update_mask: nil, worker_pool: nil, validate_only: nil, allow_missing: nil, force_new_revision: nil) -> ::Gapic::Operation
```

Updates a WorkerPool.

**Overloads**

```
def update_worker_pool(request, options = nil) -> ::Gapic::Operation
```

Pass arguments to `update_worker_pool` via a request object, either of type [UpdateWorkerPoolRequest](/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-UpdateWorkerPoolRequest "Google::Cloud::Run::V2::UpdateWorkerPoolRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Cloud::Run::V2::UpdateWorkerPoolRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-UpdateWorkerPoolRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.

```
def update_worker_pool(update_mask: nil, worker_pool: nil, validate_only: nil, allow_missing: nil, force_new_revision: nil) -> ::Gapic::Operation
```

Pass arguments to `update_worker_pool` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameters**

-   **update\_mask** ([::Google::Protobuf::FieldMask](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Protobuf-FieldMask), ::Hash) — Optional. The list of fields to be updated.
-   **worker\_pool** ([::Google::Cloud::Run::V2::WorkerPool](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-run-v2/latest/Google-Cloud-Run-V2-WorkerPool), ::Hash) — Required. The WorkerPool to be updated.
-   **validate\_only** (::Boolean) — Optional. Indicates that the request should be validated and default values populated, without persisting the request or updating any resources.
-   **allow\_missing** (::Boolean) — Optional. If set to true, and if the WorkerPool does not exist, it will create a new one. The caller must have 'run.workerpools.create' permissions if this is set to true and the WorkerPool does not exist.
-   **force\_new\_revision** (::Boolean) — Optional. If set to true, a new revision will be created from the template even if the system doesn't detect any changes from the previously deployed revision.
    
    This may be useful for cases where the underlying resources need to be recreated or reinitialized. For example if the image is specified by label, but the underlying image digest has changed) or if the container performs deployment initialization work that needs to be performed again.
    

**Yields**

-   (response, operation) — Access the result along with the RPC operation

**Yield Parameters**

-   **response** (::Gapic::Operation)
-   **operation** (::GRPC::ActiveCall::Operation)

**Returns**

-   (::Gapic::Operation)

**Raises**

-   (::Google::Cloud::Error) — if the RPC is aborted.

**Example**

Basic example

require "google/cloud/run/v2"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Cloud::Run::V2::WorkerPools::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Cloud::Run::V2::UpdateWorkerPoolRequest.new

\# Call the update\_worker\_pool method.
result \= client.update\_worker\_pool request

\# The returned object is of type Gapic::Operation. You can use it to
\# check the status of an operation, cancel it, or wait for results.
\# Here is how to wait for a response.
result.wait\_until\_done! timeout: 60
if result.response?
  p result.response
else
  puts "No response received."
end

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
