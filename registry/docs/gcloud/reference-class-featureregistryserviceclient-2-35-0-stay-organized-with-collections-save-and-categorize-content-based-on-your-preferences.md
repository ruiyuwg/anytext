-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class FeatureRegistryServiceClient (2.35.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0

The service that handles CRUD and List for resources for FeatureRegistry.

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### FeatureRegistryServiceClient(FeatureRegistryServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`FeatureRegistryServiceClient const &`  

### FeatureRegistryServiceClient(FeatureRegistryServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`FeatureRegistryServiceClient &&`  

### FeatureRegistryServiceClient(std::shared\_ptr< FeatureRegistryServiceConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< FeatureRegistryServiceConnection >`  

`opts`

`Options`  

## Operators

### operator=(FeatureRegistryServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`FeatureRegistryServiceClient const &`  

**Returns**

**Type**

**Description**

`FeatureRegistryServiceClient &`

### operator=(FeatureRegistryServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`FeatureRegistryServiceClient &&`  

**Returns**

**Type**

**Description**

`FeatureRegistryServiceClient &`

## Functions

### CreateFeatureGroup(std::string const &, google::cloud::aiplatform::v1::FeatureGroup const &, std::string const &, Options)

Creates a new FeatureGroup in a given project and location.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The resource name of the [Location](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Location.html) to create FeatureGroups. Format: `projects/{project}/locations/{location}`

`feature_group`

`google::cloud::aiplatform::v1::FeatureGroup const &`  

Required. The FeatureGroup to create.

`feature_group_id`

`std::string const &`  

Required. The ID to use for this FeatureGroup, which will become the final component of the FeatureGroup's resource name.  
This value may be up to 128 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number.  
The value must be unique within the project and location.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::aiplatform::v1::FeatureGroup > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.aiplatform.v1.FeatureGroup](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature_group.proto#L33) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### CreateFeatureGroup(NoAwaitTag, std::string const &, google::cloud::aiplatform::v1::FeatureGroup const &, std::string const &, Options)

Creates a new FeatureGroup in a given project and location.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`parent`

`std::string const &`  

`feature_group`

`google::cloud::aiplatform::v1::FeatureGroup const &`  

`feature_group_id`

`std::string const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### CreateFeatureGroup(google::cloud::aiplatform::v1::CreateFeatureGroupRequest const &, Options)

Creates a new FeatureGroup in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::aiplatform::v1::CreateFeatureGroupRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.aiplatform.v1.CreateFeatureGroupRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature_registry_service.proto#L179). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::aiplatform::v1::FeatureGroup > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.aiplatform.v1.FeatureGroup](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature_group.proto#L33) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### CreateFeatureGroup(NoAwaitTag, google::cloud::aiplatform::v1::CreateFeatureGroupRequest const &, Options)

Creates a new FeatureGroup in a given project and location.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::aiplatform::v1::CreateFeatureGroupRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### CreateFeatureGroup(google::longrunning::Operation const &, Options)

Creates a new FeatureGroup in a given project and location.

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

`future< StatusOr< google::cloud::aiplatform::v1::FeatureGroup > >`

### GetFeatureGroup(std::string const &, Options)

Gets details of a single FeatureGroup.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the FeatureGroup resource.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::aiplatform::v1::FeatureGroup >`

the result of the RPC. The response message type ([google.cloud.aiplatform.v1.FeatureGroup](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature_group.proto#L33)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetFeatureGroup(google::cloud::aiplatform::v1::GetFeatureGroupRequest const &, Options)

Gets details of a single FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::aiplatform::v1::GetFeatureGroupRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.aiplatform.v1.GetFeatureGroupRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature_registry_service.proto#L205). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::aiplatform::v1::FeatureGroup >`

the result of the RPC. The response message type ([google.cloud.aiplatform.v1.FeatureGroup](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature_group.proto#L33)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListFeatureGroups(std::string const &, Options)

Lists FeatureGroups in a given project and location.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The resource name of the [Location](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Location.html) to list FeatureGroups. Format: `projects/{project}/locations/{location}`

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::aiplatform::v1::FeatureGroup >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.aiplatform.v1.FeatureGroup](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature_group.proto#L33), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListFeatureGroups(google::cloud::aiplatform::v1::ListFeatureGroupsRequest, Options)

Lists FeatureGroups in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::aiplatform::v1::ListFeatureGroupsRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.aiplatform.v1.ListFeatureGroupsRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature_registry_service.proto#L217). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::aiplatform::v1::FeatureGroup >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.aiplatform.v1.FeatureGroup](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature_group.proto#L33), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UpdateFeatureGroup(google::cloud::aiplatform::v1::FeatureGroup const &, google::protobuf::FieldMask const &, Options)

Updates the parameters of a single FeatureGroup.

**Parameters**

**Name**

**Description**

`feature_group`

`google::cloud::aiplatform::v1::FeatureGroup const &`  

Required. The FeatureGroup's `name` field is used to identify the FeatureGroup to be updated. Format: `projects/{project}/locations/{location}/featureGroups/{feature_group}`

`update_mask`

`google::protobuf::FieldMask const &`  

Field mask is used to specify the fields to be overwritten in the FeatureGroup resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update\_mask to `*` to override all fields.  
Updatable fields:  

-   `labels`
-   `description`
-   `big_query`
-   `big_query.entity_id_columns`

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::aiplatform::v1::FeatureGroup > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.aiplatform.v1.FeatureGroup](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature_group.proto#L33) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UpdateFeatureGroup(NoAwaitTag, google::cloud::aiplatform::v1::FeatureGroup const &, google::protobuf::FieldMask const &, Options)

Updates the parameters of a single FeatureGroup.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`feature_group`

`google::cloud::aiplatform::v1::FeatureGroup const &`  

`update_mask`

`google::protobuf::FieldMask const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### UpdateFeatureGroup(google::cloud::aiplatform::v1::UpdateFeatureGroupRequest const &, Options)

Updates the parameters of a single FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::aiplatform::v1::UpdateFeatureGroupRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.aiplatform.v1.UpdateFeatureGroupRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature_registry_service.proto#L286). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::aiplatform::v1::FeatureGroup > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.aiplatform.v1.FeatureGroup](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature_group.proto#L33) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UpdateFeatureGroup(NoAwaitTag, google::cloud::aiplatform::v1::UpdateFeatureGroupRequest const &, Options)

Updates the parameters of a single FeatureGroup.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::aiplatform::v1::UpdateFeatureGroupRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### UpdateFeatureGroup(google::longrunning::Operation const &, Options)

Updates the parameters of a single FeatureGroup.

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

`future< StatusOr< google::cloud::aiplatform::v1::FeatureGroup > >`

### DeleteFeatureGroup(std::string const &, bool, Options)

Deletes a single FeatureGroup.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the FeatureGroup to be deleted. Format: `projects/{project}/locations/{location}/featureGroups/{feature_group}`

`force`

`bool`  

If set to true, any Features under this FeatureGroup will also be deleted. (Otherwise, the request will only work if the FeatureGroup has no Features.)

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::aiplatform::v1::DeleteOperationMetadata > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.aiplatform.v1.DeleteOperationMetadata](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/operation.proto#L52) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteFeatureGroup(NoAwaitTag, std::string const &, bool, Options)

Deletes a single FeatureGroup.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`name`

`std::string const &`  

`force`

`bool`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### DeleteFeatureGroup(google::cloud::aiplatform::v1::DeleteFeatureGroupRequest const &, Options)

Deletes a single FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::aiplatform::v1::DeleteFeatureGroupRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.aiplatform.v1.DeleteFeatureGroupRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature_registry_service.proto#L311). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::aiplatform::v1::DeleteOperationMetadata > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.aiplatform.v1.DeleteOperationMetadata](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/operation.proto#L52) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteFeatureGroup(NoAwaitTag, google::cloud::aiplatform::v1::DeleteFeatureGroupRequest const &, Options)

Deletes a single FeatureGroup.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::aiplatform::v1::DeleteFeatureGroupRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### DeleteFeatureGroup(google::longrunning::Operation const &, Options)

Deletes a single FeatureGroup.

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

`future< StatusOr< google::cloud::aiplatform::v1::DeleteOperationMetadata > >`

### CreateFeature(std::string const &, google::cloud::aiplatform::v1::Feature const &, std::string const &, Options)

Creates a new Feature in a given FeatureGroup.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The resource name of the EntityType or FeatureGroup to create a Feature. Format for entity\_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature\_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}`

`feature`

`google::cloud::aiplatform::v1::Feature const &`  

Required. The Feature to create.

`feature_id`

`std::string const &`  

Required. The ID to use for the Feature, which will become the final component of the Feature's resource name.  
This value may be up to 128 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number.  
The value must be unique within an EntityType/FeatureGroup.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::aiplatform::v1::Feature > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.aiplatform.v1.Feature](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature.proto#L34) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### CreateFeature(NoAwaitTag, std::string const &, google::cloud::aiplatform::v1::Feature const &, std::string const &, Options)

Creates a new Feature in a given FeatureGroup.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`parent`

`std::string const &`  

`feature`

`google::cloud::aiplatform::v1::Feature const &`  

`feature_id`

`std::string const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### CreateFeature(google::cloud::aiplatform::v1::CreateFeatureRequest const &, Options)

Creates a new Feature in a given FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::aiplatform::v1::CreateFeatureRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.aiplatform.v1.CreateFeatureRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/featurestore_service.proto#L956). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::aiplatform::v1::Feature > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.aiplatform.v1.Feature](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature.proto#L34) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### CreateFeature(NoAwaitTag, google::cloud::aiplatform::v1::CreateFeatureRequest const &, Options)

Creates a new Feature in a given FeatureGroup.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::aiplatform::v1::CreateFeatureRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### CreateFeature(google::longrunning::Operation const &, Options)

Creates a new Feature in a given FeatureGroup.

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

`future< StatusOr< google::cloud::aiplatform::v1::Feature > >`

### BatchCreateFeatures(std::string const &, std::vector< google::cloud::aiplatform::v1::CreateFeatureRequest > const &, Options)

Creates a batch of Features in a given FeatureGroup.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The resource name of the EntityType/FeatureGroup to create the batch of Features under. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}``projects/{project}/locations/{location}/featureGroups/{feature_group}`

`requests`

`std::vector< google::cloud::aiplatform::v1::CreateFeatureRequest > const &`  

Required. The request message specifying the Features to create. All Features must be created under the same parent EntityType / FeatureGroup. The `parent` field in each child request message can be omitted. If `parent` is set in a child request, then the value must match the `parent` value in this request message.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::aiplatform::v1::BatchCreateFeaturesResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.aiplatform.v1.BatchCreateFeaturesResponse](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/featurestore_service.proto#L1009) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### BatchCreateFeatures(NoAwaitTag, std::string const &, std::vector< google::cloud::aiplatform::v1::CreateFeatureRequest > const &, Options)

Creates a batch of Features in a given FeatureGroup.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`parent`

`std::string const &`  

`requests`

`std::vector< google::cloud::aiplatform::v1::CreateFeatureRequest > const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### BatchCreateFeatures(google::cloud::aiplatform::v1::BatchCreateFeaturesRequest const &, Options)

Creates a batch of Features in a given FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::aiplatform::v1::BatchCreateFeaturesRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.aiplatform.v1.BatchCreateFeaturesRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/featurestore_service.proto#L986). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::aiplatform::v1::BatchCreateFeaturesResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.aiplatform.v1.BatchCreateFeaturesResponse](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/featurestore_service.proto#L1009) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### BatchCreateFeatures(NoAwaitTag, google::cloud::aiplatform::v1::BatchCreateFeaturesRequest const &, Options)

Creates a batch of Features in a given FeatureGroup.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::aiplatform::v1::BatchCreateFeaturesRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### BatchCreateFeatures(google::longrunning::Operation const &, Options)

Creates a batch of Features in a given FeatureGroup.

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

`future< StatusOr< google::cloud::aiplatform::v1::BatchCreateFeaturesResponse > >`

### GetFeature(std::string const &, Options)

Gets details of a single Feature.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the Feature resource. Format for entity\_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature\_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}`

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::aiplatform::v1::Feature >`

the result of the RPC. The response message type ([google.cloud.aiplatform.v1.Feature](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature.proto#L34)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetFeature(google::cloud::aiplatform::v1::GetFeatureRequest const &, Options)

Gets details of a single Feature.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::aiplatform::v1::GetFeatureRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.aiplatform.v1.GetFeatureRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/featurestore_service.proto#L1018). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::aiplatform::v1::Feature >`

the result of the RPC. The response message type ([google.cloud.aiplatform.v1.Feature](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature.proto#L34)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListFeatures(std::string const &, Options)

Lists Features in a given FeatureGroup.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The resource name of the [Location](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Location.html) to list Features. Format for entity\_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature\_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}`

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::aiplatform::v1::Feature >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.aiplatform.v1.Feature](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature.proto#L34), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListFeatures(google::cloud::aiplatform::v1::ListFeaturesRequest, Options)

Lists Features in a given FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::aiplatform::v1::ListFeaturesRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.aiplatform.v1.ListFeaturesRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/featurestore_service.proto#L1036). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::aiplatform::v1::Feature >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.aiplatform.v1.Feature](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature.proto#L34), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UpdateFeature(google::cloud::aiplatform::v1::Feature const &, google::protobuf::FieldMask const &, Options)

Updates the parameters of a single Feature.

**Parameters**

**Name**

**Description**

`feature`

`google::cloud::aiplatform::v1::Feature const &`  

Required. The Feature's `name` field is used to identify the Feature to be updated. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}/features/{feature}``projects/{project}/locations/{location}/featureGroups/{feature_group}/features/{feature}`

`update_mask`

`google::protobuf::FieldMask const &`  

Field mask is used to specify the fields to be overwritten in the Features resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update\_mask to `*` to override all fields.  
Updatable fields:  

-   `description`
-   `labels`
-   `disable_monitoring` (Not supported for FeatureRegistryService Feature)
-   `point_of_contact` (Not supported for FeaturestoreService FeatureStore)

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::aiplatform::v1::Feature > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.aiplatform.v1.Feature](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature.proto#L34) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UpdateFeature(NoAwaitTag, google::cloud::aiplatform::v1::Feature const &, google::protobuf::FieldMask const &, Options)

Updates the parameters of a single Feature.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`feature`

`google::cloud::aiplatform::v1::Feature const &`  

`update_mask`

`google::protobuf::FieldMask const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### UpdateFeature(google::cloud::aiplatform::v1::UpdateFeatureRequest const &, Options)

Updates the parameters of a single Feature.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::aiplatform::v1::UpdateFeatureRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.aiplatform.v1.UpdateFeatureRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/featurestore_service.proto#L1244). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::aiplatform::v1::Feature > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.aiplatform.v1.Feature](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/feature.proto#L34) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UpdateFeature(NoAwaitTag, google::cloud::aiplatform::v1::UpdateFeatureRequest const &, Options)

Updates the parameters of a single Feature.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::aiplatform::v1::UpdateFeatureRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### UpdateFeature(google::longrunning::Operation const &, Options)

Updates the parameters of a single Feature.

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

`future< StatusOr< google::cloud::aiplatform::v1::Feature > >`

### DeleteFeature(std::string const &, Options)

Deletes a single Feature.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the Features to be deleted. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}/features/{feature}``projects/{project}/locations/{location}/featureGroups/{feature_group}/features/{feature}`

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::aiplatform::v1::DeleteOperationMetadata > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.aiplatform.v1.DeleteOperationMetadata](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/operation.proto#L52) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteFeature(NoAwaitTag, std::string const &, Options)

Deletes a single Feature.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`name`

`std::string const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### DeleteFeature(google::cloud::aiplatform::v1::DeleteFeatureRequest const &, Options)

Deletes a single Feature.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::aiplatform::v1::DeleteFeatureRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.aiplatform.v1.DeleteFeatureRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/featurestore_service.proto#L1273). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::aiplatform::v1::DeleteOperationMetadata > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.aiplatform.v1.DeleteOperationMetadata](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/aiplatform/v1/operation.proto#L52) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteFeature(NoAwaitTag, google::cloud::aiplatform::v1::DeleteFeatureRequest const &, Options)

Deletes a single Feature.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::aiplatform::v1::DeleteFeatureRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### DeleteFeature(google::longrunning::Operation const &, Options)

Deletes a single Feature.

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

`future< StatusOr< google::cloud::aiplatform::v1::DeleteOperationMetadata > >`

### ListLocations(google::cloud::location::ListLocationsRequest, Options)

Lists information about the supported locations for this service.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::location::ListLocationsRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.location.ListLocationsRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/location/locations.proto#L58). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::location::Location >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.location.Location](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/location/locations.proto#L88), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetLocation(google::cloud::location::GetLocationRequest const &, Options)

Gets information about a location.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::location::GetLocationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.location.GetLocationRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/location/locations.proto#L82). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::location::Location >`

the result of the RPC. The response message type ([google.cloud.location.Location](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/cloud/location/locations.proto#L88)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetIamPolicy(google::iam::v1::SetIamPolicyRequest const &, Options)

Sets the access control policy on the specified resource.

Replaces any existing policy.

Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

**Parameters**

**Name**

**Description**

`request`

`google::iam::v1::SetIamPolicyRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.iam.v1.SetIamPolicyRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/iam/v1/iam_policy.proto#L100). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::Policy >`

the result of the RPC. The response message type ([google.iam.v1.Policy](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/iam/v1/policy.proto#L102)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetIamPolicy(google::iam::v1::GetIamPolicyRequest const &, Options)

Gets the access control policy for a resource.

Returns an empty policy if the resource exists and does not have a policy set.

**Parameters**

**Name**

**Description**

`request`

`google::iam::v1::GetIamPolicyRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.iam.v1.GetIamPolicyRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/iam/v1/iam_policy.proto#L123). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::Policy >`

the result of the RPC. The response message type ([google.iam.v1.Policy](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/iam/v1/policy.proto#L102)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### TestIamPermissions(google::iam::v1::TestIamPermissionsRequest const &, Options)

Returns permissions that a caller has on the specified resource.

If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`request`

`google::iam::v1::TestIamPermissionsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.iam.v1.TestIamPermissionsRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/iam/v1/iam_policy.proto#L137). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::TestIamPermissionsResponse >`

the result of the RPC. The response message type ([google.iam.v1.TestIamPermissionsResponse](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/iam/v1/iam_policy.proto#L153)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

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

### WaitOperation(google::longrunning::WaitOperationRequest const &, Options)

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state.

If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

**Parameters**

**Name**

**Description**

`request`

`google::longrunning::WaitOperationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.longrunning.WaitOperationRequest](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/longrunning/operations.proto#L207). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

the result of the RPC. The response message type ([google.longrunning.Operation](https://github.com/googleapis/googleapis/blob/280725e991516d4a0f136268faf5aa6d32d21b54/google/longrunning/operations.proto#L121)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
