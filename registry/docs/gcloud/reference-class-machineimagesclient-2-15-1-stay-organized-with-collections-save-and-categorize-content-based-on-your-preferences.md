-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class MachineImagesClient (2.15.1) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1

Service for the machineImages resource.

[https://cloud.google.com/compute/docs/reference/rest/v1/machineImages](https://cloud.google.com/compute/docs/reference/rest/v1/machineImages)

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### MachineImagesClient(MachineImagesClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`MachineImagesClient const &`  

### MachineImagesClient(MachineImagesClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`MachineImagesClient &&`  

### MachineImagesClient(ExperimentalTag, std::shared\_ptr< MachineImagesConnection >, Options)

**Parameters**

**Name**

**Description**

`ExperimentalTag`  

`connection`

`std::shared_ptr< MachineImagesConnection >`  

`opts`

`Options`  

## Operators

### operator=(MachineImagesClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`MachineImagesClient const &`  

**Returns**

**Type**

**Description**

`MachineImagesClient &`

### operator=(MachineImagesClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`MachineImagesClient &&`  

**Returns**

**Type**

**Description**

`MachineImagesClient &`

## Functions

### DeleteMachineImages(std::string const &, std::string const &, Options)

Deletes the specified machine image.

Deleting a machine image is permanent and cannot be undone.

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`machine_image`

`std::string const &`  

The name of the machine image to delete.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteMachineImages(google::cloud::cpp::compute::machine\_images::v1::DeleteMachineImagesRequest const &, Options)

Deletes the specified machine image.

Deleting a machine image is permanent and cannot be undone.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::machine_images::v1::DeleteMachineImagesRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.machine\_images.v1.DeleteMachineImagesRequest](https://github.com/googleapis/googleapis/blob/6a6fd29a79fe2846001d90d93e79a19fcc303b85/google/cloud/compute/machine_images/v1/machine_images.proto#L122). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetMachineImages(std::string const &, std::string const &, Options)

Returns the specified machine image.

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`machine_image`

`std::string const &`  

The name of the machine image.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::MachineImage >`

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.MachineImage](https://github.com/googleapis/googleapis/blob/6a6fd29a79fe2846001d90d93e79a19fcc303b85/google/cloud/compute/v1/internal/common_071.proto#L34)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetMachineImages(google::cloud::cpp::compute::machine\_images::v1::GetMachineImagesRequest const &, Options)

Returns the specified machine image.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::machine_images::v1::GetMachineImagesRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.machine\_images.v1.GetMachineImagesRequest](https://github.com/googleapis/googleapis/blob/6a6fd29a79fe2846001d90d93e79a19fcc303b85/google/cloud/compute/machine_images/v1/machine_images.proto#L158). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::MachineImage >`

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.MachineImage](https://github.com/googleapis/googleapis/blob/6a6fd29a79fe2846001d90d93e79a19fcc303b85/google/cloud/compute/v1/internal/common_071.proto#L34)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetIamPolicy(std::string const &, std::string const &, Options)

Gets the access control policy for a resource.

May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`resource`

`std::string const &`  

Name or id of the resource for this request.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Policy >`

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.Policy](https://github.com/googleapis/googleapis/blob/6a6fd29a79fe2846001d90d93e79a19fcc303b85/google/cloud/compute/v1/internal/common_006.proto#L262)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetIamPolicy(google::cloud::cpp::compute::machine\_images::v1::GetIamPolicyRequest const &, Options)

Gets the access control policy for a resource.

May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::machine_images::v1::GetIamPolicyRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.machine\_images.v1.GetIamPolicyRequest](https://github.com/googleapis/googleapis/blob/6a6fd29a79fe2846001d90d93e79a19fcc303b85/google/cloud/compute/machine_images/v1/machine_images.proto#L146). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Policy >`

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.Policy](https://github.com/googleapis/googleapis/blob/6a6fd29a79fe2846001d90d93e79a19fcc303b85/google/cloud/compute/v1/internal/common_006.proto#L262)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### InsertMachineImages(std::string const &, google::cloud::cpp::compute::v1::MachineImage const &, Options)

Creates a machine image in the specified project using the data that is included in the request.

If you are creating a new machine image to update an existing instance, your new machine image should use the same network or, if applicable, the same subnetwork as the original instance.

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`machine_image_resource`

`google::cloud::cpp::compute::v1::MachineImage const &`  

The MachineImage for this request.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### InsertMachineImages(google::cloud::cpp::compute::machine\_images::v1::InsertMachineImagesRequest const &, Options)

Creates a machine image in the specified project using the data that is included in the request.

If you are creating a new machine image to update an existing instance, your new machine image should use the same network or, if applicable, the same subnetwork as the original instance.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::machine_images::v1::InsertMachineImagesRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.machine\_images.v1.InsertMachineImagesRequest](https://github.com/googleapis/googleapis/blob/6a6fd29a79fe2846001d90d93e79a19fcc303b85/google/cloud/compute/machine_images/v1/machine_images.proto#L167). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListMachineImages(std::string const &, Options)

Retrieves a list of machine images that are contained within the specified project.

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::cpp::compute::v1::MachineImage >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.cpp.compute.v1.MachineImage](https://github.com/googleapis/googleapis/blob/6a6fd29a79fe2846001d90d93e79a19fcc303b85/google/cloud/compute/v1/internal/common_071.proto#L34), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListMachineImages(google::cloud::cpp::compute::machine\_images::v1::ListMachineImagesRequest, Options)

Retrieves a list of machine images that are contained within the specified project.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::machine_images::v1::ListMachineImagesRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.machine\_images.v1.ListMachineImagesRequest](https://github.com/googleapis/googleapis/blob/6a6fd29a79fe2846001d90d93e79a19fcc303b85/google/cloud/compute/machine_images/v1/machine_images.proto#L195). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::cpp::compute::v1::MachineImage >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.cpp.compute.v1.MachineImage](https://github.com/googleapis/googleapis/blob/6a6fd29a79fe2846001d90d93e79a19fcc303b85/google/cloud/compute/v1/internal/common_071.proto#L34), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### SetIamPolicy(std::string const &, std::string const &, google::cloud::cpp::compute::v1::GlobalSetPolicyRequest const &, Options)

Sets the access control policy on the specified resource.

Replaces any existing policy.

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`resource`

`std::string const &`  

Name or id of the resource for this request.

`global_set_policy_request_resource`

`google::cloud::cpp::compute::v1::GlobalSetPolicyRequest const &`  

The GlobalSetPolicyRequest for this request.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Policy >`

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.Policy](https://github.com/googleapis/googleapis/blob/6a6fd29a79fe2846001d90d93e79a19fcc303b85/google/cloud/compute/v1/internal/common_006.proto#L262)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetIamPolicy(google::cloud::cpp::compute::machine\_images::v1::SetIamPolicyRequest const &, Options)

Sets the access control policy on the specified resource.

Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::machine_images::v1::SetIamPolicyRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.machine\_images.v1.SetIamPolicyRequest](https://github.com/googleapis/googleapis/blob/6a6fd29a79fe2846001d90d93e79a19fcc303b85/google/cloud/compute/machine_images/v1/machine_images.proto#L260). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Policy >`

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.Policy](https://github.com/googleapis/googleapis/blob/6a6fd29a79fe2846001d90d93e79a19fcc303b85/google/cloud/compute/v1/internal/common_006.proto#L262)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### TestIamPermissions(std::string const &, std::string const &, google::cloud::cpp::compute::v1::TestPermissionsRequest const &, Options)

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`resource`

`std::string const &`  

Name or id of the resource for this request.

`test_permissions_request_resource`

`google::cloud::cpp::compute::v1::TestPermissionsRequest const &`  

The TestPermissionsRequest for this request.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::TestPermissionsResponse >`

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.TestPermissionsResponse](https://github.com/googleapis/googleapis/blob/6a6fd29a79fe2846001d90d93e79a19fcc303b85/google/cloud/compute/v1/internal/common_130.proto#L30)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### TestIamPermissions(google::cloud::cpp::compute::machine\_images::v1::TestIamPermissionsRequest const &, Options)

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::machine_images::v1::TestIamPermissionsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.machine\_images.v1.TestIamPermissionsRequest](https://github.com/googleapis/googleapis/blob/6a6fd29a79fe2846001d90d93e79a19fcc303b85/google/cloud/compute/machine_images/v1/machine_images.proto#L274). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::TestPermissionsResponse >`

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.TestPermissionsResponse](https://github.com/googleapis/googleapis/blob/6a6fd29a79fe2846001d90d93e79a19fcc303b85/google/cloud/compute/v1/internal/common_130.proto#L30)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
