-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Cloud Security Compliance V1 API - Class Google::Cloud::CloudSecurityCompliance::V1::Deployment::Operations (v0.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [0.2.0 (latest)](/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Cloud-CloudSecurityCompliance-V1-Deployment-Operations)
-   [0.1.1](/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/0.1.1/Google-Cloud-CloudSecurityCompliance-V1-Deployment-Operations)

Reference documentation and code samples for the Cloud Security Compliance V1 API class Google::Cloud::CloudSecurityCompliance::V1::Deployment::Operations.

Service that implements Longrunning Operations API.

## Inherits

-   Object

## Methods

### .configure

```
def self.configure() { |config| ... } -> Operations::Configuration
```

Configuration for the Deployment Operations API.

**Yields**

-   (config) — Configure the Operations client.

**Yield Parameter**

-   **config** ([Operations::Configuration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Cloud-CloudSecurityCompliance-V1-Deployment-Operations-Configuration))

**Returns**

-   ([Operations::Configuration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Cloud-CloudSecurityCompliance-V1-Deployment-Operations-Configuration))

### #cancel\_operation

```
def cancel_operation(request, options = nil) -> ::Google::Protobuf::Empty
def cancel_operation(name: nil) -> ::Google::Protobuf::Empty
```

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an [Operation.error](/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Longrunning-Operation#Google__Longrunning__Operation_error_instance_ "Google::Longrunning::Operation#error (method)") value with a [google.rpc.Status.code](/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Rpc-Status#Google__Rpc__Status_code_instance_ "Google::Rpc::Status#code (method)") of `1`, corresponding to `Code.CANCELLED`.

**Overloads**

```
def cancel_operation(request, options = nil) -> ::Google::Protobuf::Empty
```

Pass arguments to `cancel_operation` via a request object, either of type [Longrunning::CancelOperationRequest](/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Longrunning-CancelOperationRequest "Google::Longrunning::CancelOperationRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Longrunning::CancelOperationRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Longrunning-CancelOperationRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.

```
def cancel_operation(name: nil) -> ::Google::Protobuf::Empty
```

Pass arguments to `cancel_operation` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameter**

-   **name** (::String) — The name of the operation resource to be cancelled.

**Yields**

-   (response, operation) — Access the result along with the RPC operation

**Yield Parameters**

-   **response** ([::Google::Protobuf::Empty](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Protobuf-Empty))
-   **operation** (::GRPC::ActiveCall::Operation)

**Returns**

-   ([::Google::Protobuf::Empty](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Protobuf-Empty))

**Raises**

-   (::Google::Cloud::Error) — if the RPC is aborted.

**Example**

Basic example

require "google/longrunning"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Longrunning::Operations::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Longrunning::CancelOperationRequest.new

\# Call the cancel\_operation method.
result \= client.cancel\_operation request

\# The returned object is of type Google::Protobuf::Empty.
p result

### #configure

```
def configure() { |config| ... } -> Operations::Configuration
```

Configure the Deployment Operations instance.

The configuration is set to the derived mode, meaning that values can be changed, but structural changes (adding new fields, etc.) are not allowed. Structural changes should be made on [Operations.configure](/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Cloud-CloudSecurityCompliance-V1-Deployment-Operations#Google__Cloud__CloudSecurityCompliance__V1__Deployment__Operations_configure_class_ "Google::Cloud::CloudSecurityCompliance::V1::Deployment::Operations.configure (method)").

**Yields**

-   (config) — Configure the Operations client.

**Yield Parameter**

-   **config** ([Operations::Configuration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Cloud-CloudSecurityCompliance-V1-Deployment-Operations-Configuration))

**Returns**

-   ([Operations::Configuration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Cloud-CloudSecurityCompliance-V1-Deployment-Operations-Configuration))

### #delete\_operation

```
def delete_operation(request, options = nil) -> ::Google::Protobuf::Empty
def delete_operation(name: nil) -> ::Google::Protobuf::Empty
```

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

**Overloads**

```
def delete_operation(request, options = nil) -> ::Google::Protobuf::Empty
```

Pass arguments to `delete_operation` via a request object, either of type [Longrunning::DeleteOperationRequest](/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Longrunning-DeleteOperationRequest "Google::Longrunning::DeleteOperationRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Longrunning::DeleteOperationRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Longrunning-DeleteOperationRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.

```
def delete_operation(name: nil) -> ::Google::Protobuf::Empty
```

Pass arguments to `delete_operation` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameter**

-   **name** (::String) — The name of the operation resource to be deleted.

**Yields**

-   (response, operation) — Access the result along with the RPC operation

**Yield Parameters**

-   **response** ([::Google::Protobuf::Empty](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Protobuf-Empty))
-   **operation** (::GRPC::ActiveCall::Operation)

**Returns**

-   ([::Google::Protobuf::Empty](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Protobuf-Empty))

**Raises**

-   (::Google::Cloud::Error) — if the RPC is aborted.

**Example**

Basic example

require "google/longrunning"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Longrunning::Operations::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Longrunning::DeleteOperationRequest.new

\# Call the delete\_operation method.
result \= client.delete\_operation request

\# The returned object is of type Google::Protobuf::Empty.
p result

### #get\_operation

```
def get_operation(request, options = nil) -> ::Gapic::Operation
def get_operation(name: nil) -> ::Gapic::Operation
```

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

**Overloads**

```
def get_operation(request, options = nil) -> ::Gapic::Operation
```

Pass arguments to `get_operation` via a request object, either of type [Longrunning::GetOperationRequest](/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Longrunning-GetOperationRequest "Google::Longrunning::GetOperationRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Longrunning::GetOperationRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Longrunning-GetOperationRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.

```
def get_operation(name: nil) -> ::Gapic::Operation
```

Pass arguments to `get_operation` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameter**

-   **name** (::String) — The name of the operation resource.

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

require "google/longrunning"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Longrunning::Operations::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Longrunning::GetOperationRequest.new

\# Call the get\_operation method.
result \= client.get\_operation request

\# The returned object is of type Gapic::Operation. You can use it to
\# check the status of an operation, cancel it, or wait for results.
\# Here is how to wait for a response.
result.wait\_until\_done! timeout: 60
if result.response?
  p result.response
else
  puts "No response received."
end

### #initialize

```
def initialize() { |config| ... } -> Operations
```

Create a new Operations client object.

**Yields**

-   (config) — Configure the Client client.

**Yield Parameter**

-   **config** ([Operations::Configuration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Cloud-CloudSecurityCompliance-V1-Deployment-Operations-Configuration))

**Returns**

-   ([Operations](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Cloud-CloudSecurityCompliance-V1-Deployment-Operations)) — a new instance of Operations

### #list\_operations

```
def list_operations(request, options = nil) -> ::Gapic::PagedEnumerable<::Gapic::Operation>
def list_operations(name: nil, filter: nil, page_size: nil, page_token: nil, return_partial_success: nil) -> ::Gapic::PagedEnumerable<::Gapic::Operation>
```

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

**Overloads**

```
def list_operations(request, options = nil) -> ::Gapic::PagedEnumerable<::Gapic::Operation>
```

Pass arguments to `list_operations` via a request object, either of type [Longrunning::ListOperationsRequest](/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Longrunning-ListOperationsRequest "Google::Longrunning::ListOperationsRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Longrunning::ListOperationsRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Longrunning-ListOperationsRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.

```
def list_operations(name: nil, filter: nil, page_size: nil, page_token: nil, return_partial_success: nil) -> ::Gapic::PagedEnumerable<::Gapic::Operation>
```

Pass arguments to `list_operations` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameters**

-   **name** (::String) — The name of the operation's parent resource.
-   **filter** (::String) — The standard list filter.
-   **page\_size** (::Integer) — The standard list page size.
-   **page\_token** (::String) — The standard list page token.
-   **return\_partial\_success** (::Boolean) — When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the \[ListOperationsResponse.unreachable\] field.
    
    This can only be `true` when reading across collections e.g. when `parent` is set to `"projects/example/locations/-"`.
    
    This field is not by default supported and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
    

**Yields**

-   (response, operation) — Access the result along with the RPC operation

**Yield Parameters**

-   **response** (::Gapic::PagedEnumerable<::Gapic::Operation>)
-   **operation** (::GRPC::ActiveCall::Operation)

**Returns**

-   (::Gapic::PagedEnumerable<::Gapic::Operation>)

**Raises**

-   (::Google::Cloud::Error) — if the RPC is aborted.

**Example**

Basic example

require "google/longrunning"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Longrunning::Operations::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Longrunning::ListOperationsRequest.new

\# Call the list\_operations method.
result \= client.list\_operations request

\# The returned object is of type Gapic::PagedEnumerable. You can iterate
\# over elements, and API calls will be issued to fetch pages as needed.
result.each do |item|
  \# Each element is of type ::Google::Longrunning::Operation.
  p item
end

### #universe\_domain

```
def universe_domain() -> String
```

The effective universe domain

**Returns**

-   (String)

### #wait\_operation

```
def wait_operation(request, options = nil) -> ::Gapic::Operation
def wait_operation(name: nil, timeout: nil) -> ::Gapic::Operation
```

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

**Overloads**

```
def wait_operation(request, options = nil) -> ::Gapic::Operation
```

Pass arguments to `wait_operation` via a request object, either of type [Longrunning::WaitOperationRequest](/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Longrunning-WaitOperationRequest "Google::Longrunning::WaitOperationRequest (class)") or an equivalent Hash.

**Parameters**

-   **request** ([::Google::Longrunning::WaitOperationRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Longrunning-WaitOperationRequest), ::Hash) — A request object representing the call parameters. Required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash.
-   **options** (::Gapic::CallOptions, ::Hash) — Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.

```
def wait_operation(name: nil, timeout: nil) -> ::Gapic::Operation
```

Pass arguments to `wait_operation` via keyword arguments. Note that at least one keyword argument is required. To specify no parameters, or to keep all the default parameter values, pass an empty Hash as a request object (see above).

**Parameters**

-   **name** (::String) — The name of the operation resource to wait on.
-   **timeout** ([::Google::Protobuf::Duration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Protobuf-Duration), ::Hash) — The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.

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

require "google/longrunning"

\# Create a client object. The client can be reused for multiple calls.
client \= Google::Longrunning::Operations::Client.new

\# Create a request. To set request fields, pass in keyword arguments.
request \= Google::Longrunning::WaitOperationRequest.new

\# Call the wait\_operation method.
result \= client.wait\_operation request

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
