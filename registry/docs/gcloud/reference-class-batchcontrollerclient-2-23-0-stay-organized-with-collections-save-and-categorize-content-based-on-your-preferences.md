-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class BatchControllerClient (2.23.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

The BatchController provides methods to manage batch workloads.

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### BatchControllerClient(BatchControllerClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`BatchControllerClient const &`  

### BatchControllerClient(BatchControllerClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`BatchControllerClient &&`  

### BatchControllerClient(std::shared\_ptr< BatchControllerConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< BatchControllerConnection >`  

`opts`

`Options`  

## Operators

### operator=(BatchControllerClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`BatchControllerClient const &`  

**Returns**

**Type**

**Description**

`BatchControllerClient &`

### operator=(BatchControllerClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`BatchControllerClient &&`  

**Returns**

**Type**

**Description**

`BatchControllerClient &`

## Functions

### CreateBatch(std::string const &, google::cloud::dataproc::v1::Batch const &, std::string const &, Options)

Creates a batch workload that executes asynchronously.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The parent resource where this batch will be created.

`batch`

`google::cloud::dataproc::v1::Batch const &`  

Required. The batch to create.

`batch_id`

`std::string const &`  

Optional. The ID to use for the batch, which will become the final component of the batch's resource name.  
This value must be 4-63 characters. Valid characters are `/[a-z][0-9]-/`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::dataproc::v1::Batch > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.dataproc.v1.Batch](https://github.com/googleapis/googleapis/blob/f0ad2158a1b40b23afb18e39a956184b938fbc68/google/cloud/dataproc/v1/batches.proto#L187) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### CreateBatch(google::cloud::dataproc::v1::CreateBatchRequest const &, Options)

Creates a batch workload that executes asynchronously.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dataproc::v1::CreateBatchRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dataproc.v1.CreateBatchRequest](https://github.com/googleapis/googleapis/blob/f0ad2158a1b40b23afb18e39a956184b938fbc68/google/cloud/dataproc/v1/batches.proto#L79). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::dataproc::v1::Batch > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.dataproc.v1.Batch](https://github.com/googleapis/googleapis/blob/f0ad2158a1b40b23afb18e39a956184b938fbc68/google/cloud/dataproc/v1/batches.proto#L187) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetBatch(std::string const &, Options)

Gets the batch workload resource representation.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT\_ID/locations/DATAPROC\_REGION/batches/BATCH\_ID"

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dataproc::v1::Batch >`

the result of the RPC. The response message type ([google.cloud.dataproc.v1.Batch](https://github.com/googleapis/googleapis/blob/f0ad2158a1b40b23afb18e39a956184b938fbc68/google/cloud/dataproc/v1/batches.proto#L187)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetBatch(google::cloud::dataproc::v1::GetBatchRequest const &, Options)

Gets the batch workload resource representation.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dataproc::v1::GetBatchRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dataproc.v1.GetBatchRequest](https://github.com/googleapis/googleapis/blob/f0ad2158a1b40b23afb18e39a956184b938fbc68/google/cloud/dataproc/v1/batches.proto#L113). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dataproc::v1::Batch >`

the result of the RPC. The response message type ([google.cloud.dataproc.v1.Batch](https://github.com/googleapis/googleapis/blob/f0ad2158a1b40b23afb18e39a956184b938fbc68/google/cloud/dataproc/v1/batches.proto#L187)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListBatches(std::string const &, Options)

Lists batch workloads.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The parent, which owns this collection of batches.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::dataproc::v1::Batch >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.dataproc.v1.Batch](https://github.com/googleapis/googleapis/blob/f0ad2158a1b40b23afb18e39a956184b938fbc68/google/cloud/dataproc/v1/batches.proto#L187), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListBatches(google::cloud::dataproc::v1::ListBatchesRequest, Options)

Lists batch workloads.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dataproc::v1::ListBatchesRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dataproc.v1.ListBatchesRequest](https://github.com/googleapis/googleapis/blob/f0ad2158a1b40b23afb18e39a956184b938fbc68/google/cloud/dataproc/v1/batches.proto#L124). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::dataproc::v1::Batch >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.dataproc.v1.Batch](https://github.com/googleapis/googleapis/blob/f0ad2158a1b40b23afb18e39a956184b938fbc68/google/cloud/dataproc/v1/batches.proto#L187), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteBatch(std::string const &, Options)

Deletes the batch workload resource.

If the batch is not in terminal state, the delete fails and the response returns `FAILED_PRECONDITION`.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT\_ID/locations/DATAPROC\_REGION/batches/BATCH\_ID"

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### DeleteBatch(google::cloud::dataproc::v1::DeleteBatchRequest const &, Options)

Deletes the batch workload resource.

If the batch is not in terminal state, the delete fails and the response returns `FAILED_PRECONDITION`.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dataproc::v1::DeleteBatchRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dataproc.v1.DeleteBatchRequest](https://github.com/googleapis/googleapis/blob/f0ad2158a1b40b23afb18e39a956184b938fbc68/google/cloud/dataproc/v1/batches.proto#L176). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
