-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class TopicStatsServiceClient (2.35.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

This service allows users to get stats about messages in their topic.

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### TopicStatsServiceClient(TopicStatsServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`TopicStatsServiceClient const &`  

### TopicStatsServiceClient(TopicStatsServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`TopicStatsServiceClient &&`  

### TopicStatsServiceClient(std::shared\_ptr< TopicStatsServiceConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< TopicStatsServiceConnection >`  

`opts`

`Options`  

## Operators

### operator=(TopicStatsServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`TopicStatsServiceClient const &`  

**Returns**

**Type**

**Description**

`TopicStatsServiceClient &`

### operator=(TopicStatsServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`TopicStatsServiceClient &&`  

**Returns**

**Type**

**Description**

`TopicStatsServiceClient &`

## Functions

### ComputeMessageStats(google::cloud::pubsublite::v1::ComputeMessageStatsRequest const &, Options)

Compute statistics about a range of messages in a given topic and partition.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::ComputeMessageStatsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.pubsublite.v1.ComputeMessageStatsRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/pubsublite/v1/topic_stats.proto#L76). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::pubsublite::v1::ComputeMessageStatsResponse >`

the result of the RPC. The response message type ([google.cloud.pubsublite.v1.ComputeMessageStatsResponse](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/pubsublite/v1/topic_stats.proto#L98)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ComputeHeadCursor(google::cloud::pubsublite::v1::ComputeHeadCursorRequest const &, Options)

Compute the head cursor for the partition.

The head cursor's offset is guaranteed to be less than or equal to all messages which have not yet been acknowledged as published, and greater than the offset of any message whose publish has already been acknowledged. It is zero if there have never been messages in the partition.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::ComputeHeadCursorRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.pubsublite.v1.ComputeHeadCursorRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/pubsublite/v1/topic_stats.proto#L117). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::pubsublite::v1::ComputeHeadCursorResponse >`

the result of the RPC. The response message type ([google.cloud.pubsublite.v1.ComputeHeadCursorResponse](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/pubsublite/v1/topic_stats.proto#L131)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ComputeTimeCursor(google::cloud::pubsublite::v1::ComputeTimeCursorRequest const &, Options)

Compute the corresponding cursor for a publish or event time in a topic partition.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::ComputeTimeCursorRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.pubsublite.v1.ComputeTimeCursorRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/pubsublite/v1/topic_stats.proto#L138). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::pubsublite::v1::ComputeTimeCursorResponse >`

the result of the RPC. The response message type ([google.cloud.pubsublite.v1.ComputeTimeCursorResponse](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/pubsublite/v1/topic_stats.proto#L157)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListOperations(std::string const &, std::string const &, Options)

Lists operations that match the specified filter in the request.

If the server doesn't support this method, it returns `UNIMPLEMENTED`.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name of the operation's parent resource.

`filter`

`std::string const &`  

The standard list filter.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::longrunning::Operation >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.longrunning.Operation](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/longrunning/operations.proto#L121), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListOperations(google::longrunning::ListOperationsRequest, Options)

Lists operations that match the specified filter in the request.

If the server doesn't support this method, it returns `UNIMPLEMENTED`.

**Parameters**

**Name**

**Description**

`request`

`google::longrunning::ListOperationsRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.longrunning.ListOperationsRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/longrunning/operations.proto#L167). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::longrunning::Operation >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.longrunning.Operation](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/longrunning/operations.proto#L121), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetOperation(std::string const &, Options)

Gets the latest state of a long-running operation.

Clients can use this method to poll the operation result at intervals as recommended by the API service.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name of the operation resource.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

the result of the RPC. The response message type ([google.longrunning.Operation](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/longrunning/operations.proto#L121)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetOperation(google::longrunning::GetOperationRequest const &, Options)

Gets the latest state of a long-running operation.

Clients can use this method to poll the operation result at intervals as recommended by the API service.

**Parameters**

**Name**

**Description**

`request`

`google::longrunning::GetOperationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.longrunning.GetOperationRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/longrunning/operations.proto#L160). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

the result of the RPC. The response message type ([google.longrunning.Operation](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/longrunning/operations.proto#L121)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### DeleteOperation(std::string const &, Options)

Deletes a long-running operation.

This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name of the operation resource to be deleted.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### DeleteOperation(google::longrunning::DeleteOperationRequest const &, Options)

Deletes a long-running operation.

This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

**Parameters**

**Name**

**Description**

`request`

`google::longrunning::DeleteOperationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.longrunning.DeleteOperationRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/longrunning/operations.proto#L200). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### CancelOperation(std::string const &, Options)

Starts asynchronous cancellation on a long-running operation.

The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use [Operations.GetOperation](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/longrunning/operations.proto#L70) or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an [Operation.error](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/longrunning/operations.proto#L144) value with a [google.rpc.Status.code](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/rpc/status.proto#L38) of `1`, corresponding to `Code.CANCELLED`.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name of the operation resource to be cancelled.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### CancelOperation(google::longrunning::CancelOperationRequest const &, Options)

Starts asynchronous cancellation on a long-running operation.

The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use [Operations.GetOperation](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/longrunning/operations.proto#L70) or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an [Operation.error](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/longrunning/operations.proto#L144) value with a [google.rpc.Status.code](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/rpc/status.proto#L38) of `1`, corresponding to `Code.CANCELLED`.

**Parameters**

**Name**

**Description**

`request`

`google::longrunning::CancelOperationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.longrunning.CancelOperationRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/longrunning/operations.proto#L193). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

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
