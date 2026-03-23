-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class RegionInstancesClient (2.19.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1

Service for the regionInstances resource.

[https://cloud.google.com/compute/docs/reference/rest/v1/regionInstances](https://cloud.google.com/compute/docs/reference/rest/v1/regionInstances)

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### RegionInstancesClient(RegionInstancesClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`RegionInstancesClient const &`  

### RegionInstancesClient(RegionInstancesClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`RegionInstancesClient &&`  

### RegionInstancesClient(std::shared\_ptr< RegionInstancesConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< RegionInstancesConnection >`  

`opts`

`Options`  

## Operators

### operator=(RegionInstancesClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`RegionInstancesClient const &`  

**Returns**

**Type**

**Description**

`RegionInstancesClient &`

### operator=(RegionInstancesClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`RegionInstancesClient &&`  

**Returns**

**Type**

**Description**

`RegionInstancesClient &`

## Functions

### BulkInsert(std::string const &, std::string const &, google::cloud::cpp::compute::v1::BulkInsertInstanceResource const &, Options)

Creates multiple instances in a given region.

Count specifies the number of instances to create. [https://cloud.google.com/compute/docs/reference/rest/v1/regionInstances/bulkInsert](https://cloud.google.com/compute/docs/reference/rest/v1/regionInstances/bulkInsert)

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`region`

`std::string const &`  

The name of the region for this request.

`bulk_insert_instance_resource`

`google::cloud::cpp::compute::v1::BulkInsertInstanceResource const &`  

The BulkInsertInstanceResource for this request.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](http://cloud/compute/docs/api/how-tos/api-requests-responses#handling_api_responses)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### BulkInsert(google::cloud::cpp::compute::region\_instances::v1::BulkInsertRequest const &, Options)

Creates multiple instances in a given region.

Count specifies the number of instances to create. [https://cloud.google.com/compute/docs/reference/rest/v1/regionInstances/bulkInsert](https://cloud.google.com/compute/docs/reference/rest/v1/regionInstances/bulkInsert)

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::region_instances::v1::BulkInsertRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.region\_instances.v1.BulkInsertRequest](https://github.com/googleapis/google-cloud-cpp/blob/178c73799c6f16df39b26ea70307038110e18c77/google/cloud/compute/region_instances/v1/region_instances.proto#L55). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](http://cloud/compute/docs/api/how-tos/api-requests-responses#handling_api_responses)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
