-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class SnoozeServiceClient (2.17.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

The SnoozeService API is used to temporarily prevent an alert policy from generating alerts.

A Snooze is a description of the criteria under which one or more alert policies should not fire alerts for the specified duration.

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### SnoozeServiceClient(SnoozeServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`SnoozeServiceClient const &`  

### SnoozeServiceClient(SnoozeServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`SnoozeServiceClient &&`  

### SnoozeServiceClient(std::shared\_ptr< SnoozeServiceConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< SnoozeServiceConnection >`  

`opts`

`Options`  

## Operators

### operator=(SnoozeServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`SnoozeServiceClient const &`  

**Returns**

**Type**

**Description**

`SnoozeServiceClient &`

### operator=(SnoozeServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`SnoozeServiceClient &&`  

**Returns**

**Type**

**Description**

`SnoozeServiceClient &`

## Functions

### CreateSnooze(std::string const &, google::monitoring::v3::Snooze const &, Options)

Creates a `Snooze` that will prevent alerts, which match the provided criteria, from being opened.

The `Snooze` applies for a specific time interval.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which a `Snooze` should be created. The format is:  
projects/\[PROJECT\_ID\_OR\_NUMBER\]

`snooze`

`google::monitoring::v3::Snooze const &`  

Required. The `Snooze` to create. Omit the `name` field, as it will be filled in by the API.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::monitoring::v3::Snooze >`

the result of the RPC. The response message type ([google.monitoring.v3.Snooze](https://github.com/googleapis/googleapis/blob/bc3c83b41b1589cca21f713a500f179ef86a7e18/google/monitoring/v3/snooze.proto#L35)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateSnooze(google::monitoring::v3::CreateSnoozeRequest const &, Options)

Creates a `Snooze` that will prevent alerts, which match the provided criteria, from being opened.

The `Snooze` applies for a specific time interval.

**Parameters**

**Name**

**Description**

`request`

`google::monitoring::v3::CreateSnoozeRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.monitoring.v3.CreateSnoozeRequest](https://github.com/googleapis/googleapis/blob/bc3c83b41b1589cca21f713a500f179ef86a7e18/google/monitoring/v3/snooze_service.proto#L85). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::monitoring::v3::Snooze >`

the result of the RPC. The response message type ([google.monitoring.v3.Snooze](https://github.com/googleapis/googleapis/blob/bc3c83b41b1589cca21f713a500f179ef86a7e18/google/monitoring/v3/snooze.proto#L35)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListSnoozes(std::string const &, Options)

Lists the `Snooze`s associated with a project.

Can optionally pass in `filter`, which specifies predicates to match `Snooze`s.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose `Snooze`s should be listed. The format is:  
projects/\[PROJECT\_ID\_OR\_NUMBER\]

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::monitoring::v3::Snooze >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.monitoring.v3.Snooze](https://github.com/googleapis/googleapis/blob/bc3c83b41b1589cca21f713a500f179ef86a7e18/google/monitoring/v3/snooze.proto#L35), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListSnoozes(google::monitoring::v3::ListSnoozesRequest, Options)

Lists the `Snooze`s associated with a project.

Can optionally pass in `filter`, which specifies predicates to match `Snooze`s.

**Parameters**

**Name**

**Description**

`request`

`google::monitoring::v3::ListSnoozesRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.monitoring.v3.ListSnoozesRequest](https://github.com/googleapis/googleapis/blob/bc3c83b41b1589cca21f713a500f179ef86a7e18/google/monitoring/v3/snooze_service.proto#L105). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::monitoring::v3::Snooze >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.monitoring.v3.Snooze](https://github.com/googleapis/googleapis/blob/bc3c83b41b1589cca21f713a500f179ef86a7e18/google/monitoring/v3/snooze.proto#L35), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetSnooze(std::string const &, Options)

Retrieves a `Snooze` by `name`.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The ID of the `Snooze` to retrieve. The format is:  
projects/\[PROJECT\_ID\_OR\_NUMBER\]/snoozes/\[SNOOZE\_ID\]

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::monitoring::v3::Snooze >`

the result of the RPC. The response message type ([google.monitoring.v3.Snooze](https://github.com/googleapis/googleapis/blob/bc3c83b41b1589cca21f713a500f179ef86a7e18/google/monitoring/v3/snooze.proto#L35)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetSnooze(google::monitoring::v3::GetSnoozeRequest const &, Options)

Retrieves a `Snooze` by `name`.

**Parameters**

**Name**

**Description**

`request`

`google::monitoring::v3::GetSnoozeRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.monitoring.v3.GetSnoozeRequest](https://github.com/googleapis/googleapis/blob/bc3c83b41b1589cca21f713a500f179ef86a7e18/google/monitoring/v3/snooze_service.proto#L157). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::monitoring::v3::Snooze >`

the result of the RPC. The response message type ([google.monitoring.v3.Snooze](https://github.com/googleapis/googleapis/blob/bc3c83b41b1589cca21f713a500f179ef86a7e18/google/monitoring/v3/snooze.proto#L35)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateSnooze(google::monitoring::v3::Snooze const &, google::protobuf::FieldMask const &, Options)

Updates a `Snooze`, identified by its `name`, with the parameters in the given `Snooze` object.

**Parameters**

**Name**

**Description**

`snooze`

`google::monitoring::v3::Snooze const &`  

Required. The `Snooze` to update. Must have the name field present.

`update_mask`

`google::protobuf::FieldMask const &`  

Required. The fields to update.  
For more information, see [UpdateSnoozeRequest](https://github.com/googleapis/googleapis/blob/bc3c83b41b1589cca21f713a500f179ef86a7e18/google/monitoring/v3/snooze_service.proto#L182).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::monitoring::v3::Snooze >`

the result of the RPC. The response message type ([google.monitoring.v3.Snooze](https://github.com/googleapis/googleapis/blob/bc3c83b41b1589cca21f713a500f179ef86a7e18/google/monitoring/v3/snooze.proto#L35)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateSnooze(google::monitoring::v3::UpdateSnoozeRequest const &, Options)

Updates a `Snooze`, identified by its `name`, with the parameters in the given `Snooze` object.

**Parameters**

**Name**

**Description**

`request`

`google::monitoring::v3::UpdateSnoozeRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.monitoring.v3.UpdateSnoozeRequest](https://github.com/googleapis/googleapis/blob/bc3c83b41b1589cca21f713a500f179ef86a7e18/google/monitoring/v3/snooze_service.proto#L182). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::monitoring::v3::Snooze >`

the result of the RPC. The response message type ([google.monitoring.v3.Snooze](https://github.com/googleapis/googleapis/blob/bc3c83b41b1589cca21f713a500f179ef86a7e18/google/monitoring/v3/snooze.proto#L35)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
