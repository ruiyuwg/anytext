-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class EntityTypesClient (2.27.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

Service for managing [EntityTypes](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L156).

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### EntityTypesClient(EntityTypesClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`EntityTypesClient const &`  

### EntityTypesClient(EntityTypesClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`EntityTypesClient &&`  

### EntityTypesClient(std::shared\_ptr< EntityTypesConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< EntityTypesConnection >`  

`opts`

`Options`  

## Operators

### operator=(EntityTypesClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`EntityTypesClient const &`  

**Returns**

**Type**

**Description**

`EntityTypesClient &`

### operator=(EntityTypesClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`EntityTypesClient &&`  

**Returns**

**Type**

**Description**

`EntityTypesClient &`

## Functions

### GetEntityType(std::string const &, Options)

Retrieves the specified entity type.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the entity type. Format: `projects/<`[`Project`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html)`ID>/locations/<`[`Location`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Location.html)`ID>/agents/<Agent ID>/entityTypes/<Entity Type ID>`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dialogflow::cx::v3::EntityType >`

the result of the RPC. The response message type ([google.cloud.dialogflow.cx.v3.EntityType](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L156)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetEntityType(google::cloud::dialogflow::cx::v3::GetEntityTypeRequest const &, Options)

Retrieves the specified entity type.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dialogflow::cx::v3::GetEntityTypeRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dialogflow.cx.v3.GetEntityTypeRequest](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L505). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dialogflow::cx::v3::EntityType >`

the result of the RPC. The response message type ([google.cloud.dialogflow.cx.v3.EntityType](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L156)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateEntityType(std::string const &, google::cloud::dialogflow::cx::v3::EntityType const &, Options)

Creates an entity type in the specified agent.

Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The agent to create a entity type for. Format: `projects/<`[`Project`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html)`ID>/locations/<`[`Location`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Location.html)`ID>/agents/<Agent ID>`.

`entity_type`

`google::cloud::dialogflow::cx::v3::EntityType const &`  

Required. The entity type to create.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dialogflow::cx::v3::EntityType >`

the result of the RPC. The response message type ([google.cloud.dialogflow.cx.v3.EntityType](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L156)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateEntityType(google::cloud::dialogflow::cx::v3::CreateEntityTypeRequest const &, Options)

Creates an entity type in the specified agent.

Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dialogflow::cx::v3::CreateEntityTypeRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dialogflow.cx.v3.CreateEntityTypeRequest](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L533). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dialogflow::cx::v3::EntityType >`

the result of the RPC. The response message type ([google.cloud.dialogflow.cx.v3.EntityType](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L156)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateEntityType(google::cloud::dialogflow::cx::v3::EntityType const &, google::protobuf::FieldMask const &, Options)

Updates the specified entity type.

Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

**Parameters**

**Name**

**Description**

`entity_type`

`google::cloud::dialogflow::cx::v3::EntityType const &`  

Required. The entity type to update.

`update_mask`

`google::protobuf::FieldMask const &`  

The mask to control which fields get updated.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dialogflow::cx::v3::EntityType >`

the result of the RPC. The response message type ([google.cloud.dialogflow.cx.v3.EntityType](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L156)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateEntityType(google::cloud::dialogflow::cx::v3::UpdateEntityTypeRequest const &, Options)

Updates the specified entity type.

Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dialogflow::cx::v3::UpdateEntityTypeRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dialogflow.cx.v3.UpdateEntityTypeRequest](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L562). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dialogflow::cx::v3::EntityType >`

the result of the RPC. The response message type ([google.cloud.dialogflow.cx.v3.EntityType](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L156)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### DeleteEntityType(std::string const &, Options)

Deletes the specified entity type.

Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the entity type to delete. Format: `projects/<`[`Project`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html)`ID>/locations/<`[`Location`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Location.html)`ID>/agents/<Agent ID>/entityTypes/<Entity Type ID>`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### DeleteEntityType(google::cloud::dialogflow::cx::v3::DeleteEntityTypeRequest const &, Options)

Deletes the specified entity type.

Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dialogflow::cx::v3::DeleteEntityTypeRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dialogflow.cx.v3.DeleteEntityTypeRequest](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L585). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### ListEntityTypes(std::string const &, Options)

Returns the list of all entity types in the specified agent.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The agent to list all entity types for. Format: `projects/<`[`Project`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html)`ID>/locations/<`[`Location`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Location.html)`ID>/agents/<Agent ID>`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::dialogflow::cx::v3::EntityType >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.dialogflow.cx.v3.EntityType](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L156), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListEntityTypes(google::cloud::dialogflow::cx::v3::ListEntityTypesRequest, Options)

Returns the list of all entity types in the specified agent.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dialogflow::cx::v3::ListEntityTypesRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dialogflow.cx.v3.ListEntityTypesRequest](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L459). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::dialogflow::cx::v3::EntityType >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.dialogflow.cx.v3.EntityType](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L156), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ExportEntityTypes(google::cloud::dialogflow::cx::v3::ExportEntityTypesRequest const &, Options)

Exports the selected entity types.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dialogflow::cx::v3::ExportEntityTypesRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dialogflow.cx.v3.ExportEntityTypesRequest](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L263). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::dialogflow::cx::v3::ExportEntityTypesResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.dialogflow.cx.v3.ExportEntityTypesResponse](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L331) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ExportEntityTypes(NoAwaitTag, google::cloud::dialogflow::cx::v3::ExportEntityTypesRequest const &, Options)

Exports the selected entity types.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::dialogflow::cx::v3::ExportEntityTypesRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### ExportEntityTypes(google::longrunning::Operation const &, Options)

Exports the selected entity types.

This method accepts a `google::longrunning::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::dialogflow::cx::v3::ExportEntityTypesResponse > >`

### ImportEntityTypes(google::cloud::dialogflow::cx::v3::ImportEntityTypesRequest const &, Options)

Imports the specified entitytypes into the agent.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dialogflow::cx::v3::ImportEntityTypesRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dialogflow.cx.v3.ImportEntityTypesRequest](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L353). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::dialogflow::cx::v3::ImportEntityTypesResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.dialogflow.cx.v3.ImportEntityTypesResponse](https://github.com/googleapis/googleapis/blob/e3838fbf057c3b69efc1e0b8e1a5a288ee91a00d/google/cloud/dialogflow/cx/v3/entity_type.proto#L427) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ImportEntityTypes(NoAwaitTag, google::cloud::dialogflow::cx::v3::ImportEntityTypesRequest const &, Options)

Imports the specified entitytypes into the agent.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::dialogflow::cx::v3::ImportEntityTypesRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### ImportEntityTypes(google::longrunning::Operation const &, Options)

Imports the specified entitytypes into the agent.

This method accepts a `google::longrunning::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::dialogflow::cx::v3::ImportEntityTypesResponse > >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
