-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class TimeseriesInsightsControllerClient (2.26.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0

[TimeseriesInsightsControllerClient](/cpp/docs/reference/timeseriesinsights/2.26.0/classgoogle_1_1cloud_1_1timeseriesinsights__v1_1_1TimeseriesInsightsControllerClient).

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### TimeseriesInsightsControllerClient(TimeseriesInsightsControllerClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`TimeseriesInsightsControllerClient const &`  

### TimeseriesInsightsControllerClient(TimeseriesInsightsControllerClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`TimeseriesInsightsControllerClient &&`  

### TimeseriesInsightsControllerClient(std::shared\_ptr< TimeseriesInsightsControllerConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< TimeseriesInsightsControllerConnection >`  

`opts`

`Options`  

## Operators

### operator=(TimeseriesInsightsControllerClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`TimeseriesInsightsControllerClient const &`  

**Returns**

**Type**

**Description**

`TimeseriesInsightsControllerClient &`

### operator=(TimeseriesInsightsControllerClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`TimeseriesInsightsControllerClient &&`  

**Returns**

**Type**

**Description**

`TimeseriesInsightsControllerClient &`

## Functions

### ListDataSets(std::string const &, Options)

Lists [DataSets](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173) under the project.

The order of the results is unspecified but deterministic. Newly created [DataSets](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173) will not necessarily be added to the end of this list.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. [Project](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) owning the DataSet in the format of "projects/{project}".

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::timeseriesinsights::v1::DataSet >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.timeseriesinsights.v1.DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListDataSets(google::cloud::timeseriesinsights::v1::ListDataSetsRequest, Options)

Lists [DataSets](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173) under the project.

The order of the results is unspecified but deterministic. Newly created [DataSets](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173) will not necessarily be added to the end of this list.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::timeseriesinsights::v1::ListDataSetsRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.timeseriesinsights.v1.ListDataSetsRequest](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L362). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::timeseriesinsights::v1::DataSet >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.timeseriesinsights.v1.DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### CreateDataSet(std::string const &, google::cloud::timeseriesinsights::v1::DataSet const &, Options)

Create a [DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173) from data stored on Cloud Storage.

The data must stay immutable while we process the [DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173) creation; otherwise, undefined outcomes might result. For more information, see [DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173).

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. Client project name which will own this DataSet in the format of 'projects/{project}'.

`dataset`

`google::cloud::timeseriesinsights::v1::DataSet const &`  

Required. Dataset to be loaded.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::timeseriesinsights::v1::DataSet >`

the result of the RPC. The response message type ([google.cloud.timeseriesinsights.v1.DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateDataSet(google::cloud::timeseriesinsights::v1::CreateDataSetRequest const &, Options)

Create a [DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173) from data stored on Cloud Storage.

The data must stay immutable while we process the [DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173) creation; otherwise, undefined outcomes might result. For more information, see [DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173).

**Parameters**

**Name**

**Description**

`request`

`google::cloud::timeseriesinsights::v1::CreateDataSetRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.timeseriesinsights.v1.CreateDataSetRequest](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L336). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::timeseriesinsights::v1::DataSet >`

the result of the RPC. The response message type ([google.cloud.timeseriesinsights.v1.DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### DeleteDataSet(std::string const &, Options)

Delete a [DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173) from the system.

**NOTE**: If the [DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173) is still being processed, it will be aborted and deleted.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. Dataset name in the format of "projects/{project}/datasets/{dataset}"

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### DeleteDataSet(google::cloud::timeseriesinsights::v1::DeleteDataSetRequest const &, Options)

Delete a [DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173) from the system.

**NOTE**: If the [DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173) is still being processed, it will be aborted and deleted.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::timeseriesinsights::v1::DeleteDataSetRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.timeseriesinsights.v1.DeleteDataSetRequest](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L351). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### AppendEvents(std::string const &, std::vector< google::cloud::timeseriesinsights::v1::Event > const &, Options)

Append events to a `LOADED`[DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173).

**Parameters**

**Name**

**Description**

`dataset`

`std::string const &`  

Required. The DataSet to which we want to append to in the format of "projects/{project}/datasets/{dataset}"

`events`

`std::vector< google::cloud::timeseriesinsights::v1::Event > const &`  

Events to be appended.  
Note:  

1.  The [DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173) must be shown in a `LOADED` state in the results of `list` method; otherwise, all events from the append request will be dropped, and a `NOT_FOUND` status will be returned. 0. All events in a single request must have the same [groupId](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L293) if set; otherwise, an `INVALID_ARGUMENT` status will be returned. 0. If [groupId](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L293) is not set (or 0), there should be only 1 event; otherwise, an `INVALID_ARGUMENT` status will be returned. 0. The events must be newer than the current time minus [DataSet TTL](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L230) or they will be dropped.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::timeseriesinsights::v1::AppendEventsResponse >`

the result of the RPC. The response message type ([google.cloud.timeseriesinsights.v1.AppendEventsResponse](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L330)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### AppendEvents(google::cloud::timeseriesinsights::v1::AppendEventsRequest const &, Options)

Append events to a `LOADED`[DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173).

**Parameters**

**Name**

**Description**

`request`

`google::cloud::timeseriesinsights::v1::AppendEventsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.timeseriesinsights.v1.AppendEventsRequest](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L300). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::timeseriesinsights::v1::AppendEventsResponse >`

the result of the RPC. The response message type ([google.cloud.timeseriesinsights.v1.AppendEventsResponse](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L330)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### QueryDataSet(google::cloud::timeseriesinsights::v1::QueryDataSetRequest const &, Options)

Execute a Timeseries Insights query over a loaded [DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173).

**Parameters**

**Name**

**Description**

`request`

`google::cloud::timeseriesinsights::v1::QueryDataSetRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.timeseriesinsights.v1.QueryDataSetRequest](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L774). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::timeseriesinsights::v1::QueryDataSetResponse >`

the result of the RPC. The response message type ([google.cloud.timeseriesinsights.v1.QueryDataSetResponse](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L831)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### EvaluateSlice(google::cloud::timeseriesinsights::v1::EvaluateSliceRequest const &, Options)

Evaluate an explicit slice from a loaded [DataSet](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L173).

**Parameters**

**Name**

**Description**

`request`

`google::cloud::timeseriesinsights::v1::EvaluateSliceRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.timeseriesinsights.v1.EvaluateSliceRequest](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L844). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::timeseriesinsights::v1::EvaluatedSlice >`

the result of the RPC. The response message type ([google.cloud.timeseriesinsights.v1.EvaluatedSlice](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L499)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### EvaluateTimeseries(google::cloud::timeseriesinsights::v1::EvaluateTimeseriesRequest const &, Options)

Evaluate an explicit timeseries.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::timeseriesinsights::v1::EvaluateTimeseriesRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.timeseriesinsights.v1.EvaluateTimeseriesRequest](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L874). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::timeseriesinsights::v1::EvaluatedSlice >`

the result of the RPC. The response message type ([google.cloud.timeseriesinsights.v1.EvaluatedSlice](https://github.com/googleapis/googleapis/blob/622e10a1e8b2b6908e0ac7448d347a0c1b4130de/google/cloud/timeseriesinsights/v1/timeseries_insights.proto#L499)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
