-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class GlobalAddressesClient (3.4.0-rc) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1

Service for the globalAddresses resource.

[https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses](https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses)

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### GlobalAddressesClient(GlobalAddressesClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`GlobalAddressesClient const &`  

### GlobalAddressesClient(GlobalAddressesClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`GlobalAddressesClient &&`  

### GlobalAddressesClient(std::shared\_ptr< GlobalAddressesConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< GlobalAddressesConnection >`  

`opts`

`Options`  

## Operators

### operator=(GlobalAddressesClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`GlobalAddressesClient const &`  

**Returns**

**Type**

**Description**

`GlobalAddressesClient &`

### operator=(GlobalAddressesClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`GlobalAddressesClient &&`  

**Returns**

**Type**

**Description**

`GlobalAddressesClient &`

## Functions

### DeleteAddress(std::string const &, std::string const &, Options)

Deletes the specified address resource.

[https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/delete](https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/delete)

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`address`

`std::string const &`  

Name of the address resource to delete.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](http://cloud/compute/docs/api/how-tos/api-requests-responses#handling_api_responses)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteAddress(NoAwaitTag, std::string const &, std::string const &, Options)

Deletes the specified address resource.

Specifying the [`NoAwaitTag`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::cloud::cpp::compute::v1::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`project`

`std::string const &`  

`address`

`std::string const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### DeleteAddress(google::cloud::cpp::compute::global\_addresses::v1::DeleteAddressRequest const &, Options)

Deletes the specified address resource.

[https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/delete](https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/delete)

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::global_addresses::v1::DeleteAddressRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.global\_addresses.v1.DeleteAddressRequest](https://github.com/googleapis/google-cloud-cpp/blob/eb6007709205345acaa1f8cfa2fd13685a9df401/google/cloud/compute/global_addresses/v1/global_addresses.proto#L114). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](http://cloud/compute/docs/api/how-tos/api-requests-responses#handling_api_responses)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteAddress(NoAwaitTag, google::cloud::cpp::compute::global\_addresses::v1::DeleteAddressRequest const &, Options)

Deletes the specified address resource.

Specifying the [`NoAwaitTag`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::cloud::cpp::compute::v1::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::global_addresses::v1::DeleteAddressRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### DeleteAddress(google::cloud::cpp::compute::v1::Operation const &, Options)

Deletes the specified address resource.

This method accepts a `google::cloud::cpp::compute::v1::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### GetAddress(std::string const &, std::string const &, Options)

Returns the specified address resource.

[https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/get](https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/get)

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`address`

`std::string const &`  

Name of the address resource to return.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Address >`

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.Address](https://github.com/googleapis/google-cloud-cpp/blob/eb6007709205345acaa1f8cfa2fd13685a9df401/google/cloud/compute/v1/internal/common_004.proto#L30)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetAddress(google::cloud::cpp::compute::global\_addresses::v1::GetAddressRequest const &, Options)

Returns the specified address resource.

[https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/get](https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/get)

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::global_addresses::v1::GetAddressRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.global\_addresses.v1.GetAddressRequest](https://github.com/googleapis/google-cloud-cpp/blob/eb6007709205345acaa1f8cfa2fd13685a9df401/google/cloud/compute/global_addresses/v1/global_addresses.proto#L140). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Address >`

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.Address](https://github.com/googleapis/google-cloud-cpp/blob/eb6007709205345acaa1f8cfa2fd13685a9df401/google/cloud/compute/v1/internal/common_004.proto#L30)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### InsertAddress(std::string const &, google::cloud::cpp::compute::v1::Address const &, Options)

Creates an address resource in the specified project by using the data included in the request.

[https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/insert](https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/insert)

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`address_resource`

`google::cloud::cpp::compute::v1::Address const &`  

The Address for this request.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](http://cloud/compute/docs/api/how-tos/api-requests-responses#handling_api_responses)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### InsertAddress(NoAwaitTag, std::string const &, google::cloud::cpp::compute::v1::Address const &, Options)

Creates an address resource in the specified project by using the data included in the request.

Specifying the [`NoAwaitTag`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::cloud::cpp::compute::v1::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`project`

`std::string const &`  

`address_resource`

`google::cloud::cpp::compute::v1::Address const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### InsertAddress(google::cloud::cpp::compute::global\_addresses::v1::InsertAddressRequest const &, Options)

Creates an address resource in the specified project by using the data included in the request.

[https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/insert](https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/insert)

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::global_addresses::v1::InsertAddressRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.global\_addresses.v1.InsertAddressRequest](https://github.com/googleapis/google-cloud-cpp/blob/eb6007709205345acaa1f8cfa2fd13685a9df401/google/cloud/compute/global_addresses/v1/global_addresses.proto#L151). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](http://cloud/compute/docs/api/how-tos/api-requests-responses#handling_api_responses)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### InsertAddress(NoAwaitTag, google::cloud::cpp::compute::global\_addresses::v1::InsertAddressRequest const &, Options)

Creates an address resource in the specified project by using the data included in the request.

Specifying the [`NoAwaitTag`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::cloud::cpp::compute::v1::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::global_addresses::v1::InsertAddressRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### InsertAddress(google::cloud::cpp::compute::v1::Operation const &, Options)

Creates an address resource in the specified project by using the data included in the request.

This method accepts a `google::cloud::cpp::compute::v1::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### ListGlobalAddresses(std::string const &, Options)

Retrieves a list of global addresses.

[https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/list](https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/list)

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::cpp::compute::v1::Address >`

a [StreamRange](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.cpp.compute.v1.Address](https://github.com/googleapis/google-cloud-cpp/blob/eb6007709205345acaa1f8cfa2fd13685a9df401/google/cloud/compute/v1/internal/common_004.proto#L30), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListGlobalAddresses(google::cloud::cpp::compute::global\_addresses::v1::ListGlobalAddressesRequest, Options)

Retrieves a list of global addresses.

[https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/list](https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/list)

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::global_addresses::v1::ListGlobalAddressesRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.global\_addresses.v1.ListGlobalAddressesRequest](https://github.com/googleapis/google-cloud-cpp/blob/eb6007709205345acaa1f8cfa2fd13685a9df401/google/cloud/compute/global_addresses/v1/global_addresses.proto#L177). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::cpp::compute::v1::Address >`

a [StreamRange](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.cpp.compute.v1.Address](https://github.com/googleapis/google-cloud-cpp/blob/eb6007709205345acaa1f8cfa2fd13685a9df401/google/cloud/compute/v1/internal/common_004.proto#L30), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### Move(std::string const &, std::string const &, google::cloud::cpp::compute::v1::GlobalAddressesMoveRequest const &, Options)

Moves the specified address resource from one project to another project.

[https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/move](https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/move)

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

Source project ID which the Address is moved from.

`address`

`std::string const &`  

Name of the address resource to move.

`global_addresses_move_request_resource`

`google::cloud::cpp::compute::v1::GlobalAddressesMoveRequest const &`  

The GlobalAddressesMoveRequest for this request.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](http://cloud/compute/docs/api/how-tos/api-requests-responses#handling_api_responses)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### Move(NoAwaitTag, std::string const &, std::string const &, google::cloud::cpp::compute::v1::GlobalAddressesMoveRequest const &, Options)

Moves the specified address resource from one project to another project.

Specifying the [`NoAwaitTag`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::cloud::cpp::compute::v1::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`project`

`std::string const &`  

`address`

`std::string const &`  

`global_addresses_move_request_resource`

`google::cloud::cpp::compute::v1::GlobalAddressesMoveRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### Move(google::cloud::cpp::compute::global\_addresses::v1::MoveRequest const &, Options)

Moves the specified address resource from one project to another project.

[https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/move](https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/move)

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::global_addresses::v1::MoveRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.global\_addresses.v1.MoveRequest](https://github.com/googleapis/google-cloud-cpp/blob/eb6007709205345acaa1f8cfa2fd13685a9df401/google/cloud/compute/global_addresses/v1/global_addresses.proto#L245). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](http://cloud/compute/docs/api/how-tos/api-requests-responses#handling_api_responses)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### Move(NoAwaitTag, google::cloud::cpp::compute::global\_addresses::v1::MoveRequest const &, Options)

Moves the specified address resource from one project to another project.

Specifying the [`NoAwaitTag`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::cloud::cpp::compute::v1::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::global_addresses::v1::MoveRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### Move(google::cloud::cpp::compute::v1::Operation const &, Options)

Moves the specified address resource from one project to another project.

This method accepts a `google::cloud::cpp::compute::v1::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### SetLabels(std::string const &, std::string const &, google::cloud::cpp::compute::v1::GlobalSetLabelsRequest const &, Options)

Sets the labels on a GlobalAddress.

To learn more about labels, read the Labeling Resources documentation. [https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/setLabels](https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/setLabels)

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`resource`

`std::string const &`  

Name or id of the resource for this request.

`global_set_labels_request_resource`

`google::cloud::cpp::compute::v1::GlobalSetLabelsRequest const &`  

The GlobalSetLabelsRequest for this request.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](http://cloud/compute/docs/api/how-tos/api-requests-responses#handling_api_responses)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### SetLabels(NoAwaitTag, std::string const &, std::string const &, google::cloud::cpp::compute::v1::GlobalSetLabelsRequest const &, Options)

Sets the labels on a GlobalAddress.

Specifying the [`NoAwaitTag`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::cloud::cpp::compute::v1::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`project`

`std::string const &`  

`resource`

`std::string const &`  

`global_set_labels_request_resource`

`google::cloud::cpp::compute::v1::GlobalSetLabelsRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### SetLabels(google::cloud::cpp::compute::global\_addresses::v1::SetLabelsRequest const &, Options)

Sets the labels on a GlobalAddress.

To learn more about labels, read the Labeling Resources documentation. [https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/setLabels](https://cloud.google.com/compute/docs/reference/rest/v1/globalAddresses/setLabels)

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::global_addresses::v1::SetLabelsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.global\_addresses.v1.SetLabelsRequest](https://github.com/googleapis/google-cloud-cpp/blob/eb6007709205345acaa1f8cfa2fd13685a9df401/google/cloud/compute/global_addresses/v1/global_addresses.proto#L276). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](http://cloud/compute/docs/api/how-tos/api-requests-responses#handling_api_responses)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### SetLabels(NoAwaitTag, google::cloud::cpp::compute::global\_addresses::v1::SetLabelsRequest const &, Options)

Sets the labels on a GlobalAddress.

Specifying the [`NoAwaitTag`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::cloud::cpp::compute::v1::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::global_addresses::v1::SetLabelsRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### SetLabels(google::cloud::cpp::compute::v1::Operation const &, Options)

Sets the labels on a GlobalAddress.

This method accepts a `google::cloud::cpp::compute::v1::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-20 UTC.
