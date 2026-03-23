-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class LicensesClient (2.26.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1

Service for the licenses resource.

[https://cloud.google.com/compute/docs/reference/rest/v1/licenses](https://cloud.google.com/compute/docs/reference/rest/v1/licenses)

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### LicensesClient(LicensesClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`LicensesClient const &`  

### LicensesClient(LicensesClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`LicensesClient &&`  

### LicensesClient(std::shared\_ptr< LicensesConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< LicensesConnection >`  

`opts`

`Options`  

## Operators

### operator=(LicensesClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`LicensesClient const &`  

**Returns**

**Type**

**Description**

`LicensesClient &`

### operator=(LicensesClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`LicensesClient &&`  

**Returns**

**Type**

**Description**

`LicensesClient &`

## Functions

### DeleteLicense(std::string const &, std::string const &, Options)

Deletes the specified license.

_Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. [https://cloud.google.com/compute/docs/reference/rest/v1/licenses/delete](https://cloud.google.com/compute/docs/reference/rest/v1/licenses/delete)

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`license`

`std::string const &`  

Name of the license resource to delete.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](http://cloud/compute/docs/api/how-tos/api-requests-responses#handling_api_responses)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteLicense(ExperimentalTag, NoAwaitTag, std::string const &, std::string const &, Options)

Deletes the specified license.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::cloud::cpp::compute::v1::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`ExperimentalTag`  

`NoAwaitTag`  

`project`

`std::string const &`  

`license`

`std::string const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### DeleteLicense(google::cloud::cpp::compute::licenses::v1::DeleteLicenseRequest const &, Options)

Deletes the specified license.

_Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. [https://cloud.google.com/compute/docs/reference/rest/v1/licenses/delete](https://cloud.google.com/compute/docs/reference/rest/v1/licenses/delete)

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::licenses::v1::DeleteLicenseRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.licenses.v1.DeleteLicenseRequest](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/licenses/v1/licenses.proto#L142). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](http://cloud/compute/docs/api/how-tos/api-requests-responses#handling_api_responses)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteLicense(ExperimentalTag, NoAwaitTag, google::cloud::cpp::compute::licenses::v1::DeleteLicenseRequest const &, Options)

Deletes the specified license.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::cloud::cpp::compute::v1::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`ExperimentalTag`  

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::licenses::v1::DeleteLicenseRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### DeleteLicense(ExperimentalTag, google::cloud::cpp::compute::v1::Operation const &, Options)

Deletes the specified license.

This method accepts a `google::cloud::cpp::compute::v1::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`ExperimentalTag`  

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### GetLicense(std::string const &, std::string const &, Options)

Returns the specified License resource.

_Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. [https://cloud.google.com/compute/docs/reference/rest/v1/licenses/get](https://cloud.google.com/compute/docs/reference/rest/v1/licenses/get)

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`license`

`std::string const &`  

Name of the License resource to return.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::License >`

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.License](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/v1/internal/common_071.proto#L28)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetLicense(google::cloud::cpp::compute::licenses::v1::GetLicenseRequest const &, Options)

Returns the specified License resource.

_Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. [https://cloud.google.com/compute/docs/reference/rest/v1/licenses/get](https://cloud.google.com/compute/docs/reference/rest/v1/licenses/get)

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::licenses::v1::GetLicenseRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.licenses.v1.GetLicenseRequest](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/licenses/v1/licenses.proto#L183). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::License >`

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.License](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/v1/internal/common_071.proto#L28)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetIamPolicy(std::string const &, std::string const &, Options)

Gets the access control policy for a resource.

May be empty if no such policy or resource exists. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. [https://cloud.google.com/compute/docs/reference/rest/v1/licenses/getIamPolicy](https://cloud.google.com/compute/docs/reference/rest/v1/licenses/getIamPolicy)

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

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.Policy](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/v1/internal/common_007.proto#L291)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetIamPolicy(google::cloud::cpp::compute::licenses::v1::GetIamPolicyRequest const &, Options)

Gets the access control policy for a resource.

May be empty if no such policy or resource exists. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. [https://cloud.google.com/compute/docs/reference/rest/v1/licenses/getIamPolicy](https://cloud.google.com/compute/docs/reference/rest/v1/licenses/getIamPolicy)

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::licenses::v1::GetIamPolicyRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.licenses.v1.GetIamPolicyRequest](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/licenses/v1/licenses.proto#L168). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Policy >`

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.Policy](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/v1/internal/common_007.proto#L291)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### InsertLicense(std::string const &, google::cloud::cpp::compute::v1::License const &, Options)

Create a License resource in the specified project.

_Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. [https://cloud.google.com/compute/docs/reference/rest/v1/licenses/insert](https://cloud.google.com/compute/docs/reference/rest/v1/licenses/insert)

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`license_resource`

`google::cloud::cpp::compute::v1::License const &`  

The License for this request.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](http://cloud/compute/docs/api/how-tos/api-requests-responses#handling_api_responses)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### InsertLicense(ExperimentalTag, NoAwaitTag, std::string const &, google::cloud::cpp::compute::v1::License const &, Options)

Create a License resource in the specified project.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::cloud::cpp::compute::v1::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`ExperimentalTag`  

`NoAwaitTag`  

`project`

`std::string const &`  

`license_resource`

`google::cloud::cpp::compute::v1::License const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### InsertLicense(google::cloud::cpp::compute::licenses::v1::InsertLicenseRequest const &, Options)

Create a License resource in the specified project.

_Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. [https://cloud.google.com/compute/docs/reference/rest/v1/licenses/insert](https://cloud.google.com/compute/docs/reference/rest/v1/licenses/insert)

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::licenses::v1::InsertLicenseRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.licenses.v1.InsertLicenseRequest](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/licenses/v1/licenses.proto#L194). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](http://cloud/compute/docs/api/how-tos/api-requests-responses#handling_api_responses)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### InsertLicense(ExperimentalTag, NoAwaitTag, google::cloud::cpp::compute::licenses::v1::InsertLicenseRequest const &, Options)

Create a License resource in the specified project.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::cloud::cpp::compute::v1::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`ExperimentalTag`  

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::licenses::v1::InsertLicenseRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### InsertLicense(ExperimentalTag, google::cloud::cpp::compute::v1::Operation const &, Options)

Create a License resource in the specified project.

This method accepts a `google::cloud::cpp::compute::v1::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`ExperimentalTag`  

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### ListLicenses(std::string const &, Options)

Retrieves the list of licenses available in the specified project.

This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 9. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. [https://cloud.google.com/compute/docs/reference/rest/v1/licenses/list](https://cloud.google.com/compute/docs/reference/rest/v1/licenses/list)

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

`StreamRange< google::cloud::cpp::compute::v1::License >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.cpp.compute.v1.License](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/v1/internal/common_071.proto#L28), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListLicenses(google::cloud::cpp::compute::licenses::v1::ListLicensesRequest, Options)

Retrieves the list of licenses available in the specified project.

This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 9. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. [https://cloud.google.com/compute/docs/reference/rest/v1/licenses/list](https://cloud.google.com/compute/docs/reference/rest/v1/licenses/list)

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::licenses::v1::ListLicensesRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.licenses.v1.ListLicensesRequest](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/licenses/v1/licenses.proto#L220). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::cpp::compute::v1::License >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.cpp.compute.v1.License](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/v1/internal/common_071.proto#L28), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### SetIamPolicy(std::string const &, std::string const &, google::cloud::cpp::compute::v1::GlobalSetPolicyRequest const &, Options)

Sets the access control policy on the specified resource.

Replaces any existing policy. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. [https://cloud.google.com/compute/docs/reference/rest/v1/licenses/setIamPolicy](https://cloud.google.com/compute/docs/reference/rest/v1/licenses/setIamPolicy)

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

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.Policy](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/v1/internal/common_007.proto#L291)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetIamPolicy(google::cloud::cpp::compute::licenses::v1::SetIamPolicyRequest const &, Options)

Sets the access control policy on the specified resource.

Replaces any existing policy. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. [https://cloud.google.com/compute/docs/reference/rest/v1/licenses/setIamPolicy](https://cloud.google.com/compute/docs/reference/rest/v1/licenses/setIamPolicy)

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::licenses::v1::SetIamPolicyRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.licenses.v1.SetIamPolicyRequest](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/licenses/v1/licenses.proto#L288). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Policy >`

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.Policy](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/v1/internal/common_007.proto#L291)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### TestIamPermissions(std::string const &, std::string const &, google::cloud::cpp::compute::v1::TestPermissionsRequest const &, Options)

Returns permissions that a caller has on the specified resource.

_Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. [https://cloud.google.com/compute/docs/reference/rest/v1/licenses/testIamPermissions](https://cloud.google.com/compute/docs/reference/rest/v1/licenses/testIamPermissions)

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

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.TestPermissionsResponse](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/v1/internal/common_137.proto#L30)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### TestIamPermissions(google::cloud::cpp::compute::licenses::v1::TestIamPermissionsRequest const &, Options)

Returns permissions that a caller has on the specified resource.

_Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. [https://cloud.google.com/compute/docs/reference/rest/v1/licenses/testIamPermissions](https://cloud.google.com/compute/docs/reference/rest/v1/licenses/testIamPermissions)

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::licenses::v1::TestIamPermissionsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.licenses.v1.TestIamPermissionsRequest](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/licenses/v1/licenses.proto#L304). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::TestPermissionsResponse >`

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.TestPermissionsResponse](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/v1/internal/common_137.proto#L30)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
