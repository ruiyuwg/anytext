-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class ContentServiceClient (2.34.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

ContentService manages Notebook and SQL Scripts for Dataplex.

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### ContentServiceClient(ContentServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`ContentServiceClient const &`  

### ContentServiceClient(ContentServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`ContentServiceClient &&`  

### ContentServiceClient(std::shared\_ptr< ContentServiceConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< ContentServiceConnection >`  

`opts`

`Options`  

## Operators

### operator=(ContentServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`ContentServiceClient const &`  

**Returns**

**Type**

**Description**

`ContentServiceClient &`

### operator=(ContentServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`ContentServiceClient &&`  

**Returns**

**Type**

**Description**

`ContentServiceClient &`

## Functions

### CreateContent(std::string const &, google::cloud::dataplex::v1::Content const &, Options)

Create a content.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The resource name of the parent lake: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}

`content`

`google::cloud::dataplex::v1::Content const &`  

Required. Content resource.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dataplex::v1::Content >`

the result of the RPC. The response message type ([google.cloud.dataplex.v1.Content](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/cloud/dataplex/v1/analyze.proto#L175)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateContent(google::cloud::dataplex::v1::CreateContentRequest const &, Options)

Create a content.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dataplex::v1::CreateContentRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dataplex.v1.CreateContentRequest](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/cloud/dataplex/v1/content.proto#L157). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dataplex::v1::Content >`

the result of the RPC. The response message type ([google.cloud.dataplex.v1.Content](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/cloud/dataplex/v1/analyze.proto#L175)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateContent(google::cloud::dataplex::v1::Content const &, google::protobuf::FieldMask const &, Options)

Update a content.

Only supports full resource update.

**Parameters**

**Name**

**Description**

`content`

`google::cloud::dataplex::v1::Content const &`  

Required. Update description. Only fields specified in `update_mask` are updated.

`update_mask`

`google::protobuf::FieldMask const &`  

Required. Mask of fields to update.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dataplex::v1::Content >`

the result of the RPC. The response message type ([google.cloud.dataplex.v1.Content](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/cloud/dataplex/v1/analyze.proto#L175)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateContent(google::cloud::dataplex::v1::UpdateContentRequest const &, Options)

Update a content.

Only supports full resource update.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dataplex::v1::UpdateContentRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dataplex.v1.UpdateContentRequest](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/cloud/dataplex/v1/content.proto#L174). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dataplex::v1::Content >`

the result of the RPC. The response message type ([google.cloud.dataplex.v1.Content](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/cloud/dataplex/v1/analyze.proto#L175)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### DeleteContent(std::string const &, Options)

Delete a content.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The resource name of the content: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}/content/{content\_id}

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### DeleteContent(google::cloud::dataplex::v1::DeleteContentRequest const &, Options)

Delete a content.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dataplex::v1::DeleteContentRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dataplex.v1.DeleteContentRequest](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/cloud/dataplex/v1/content.proto#L189). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### GetContent(std::string const &, Options)

Get a content resource.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The resource name of the content: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}/content/{content\_id}

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dataplex::v1::Content >`

the result of the RPC. The response message type ([google.cloud.dataplex.v1.Content](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/cloud/dataplex/v1/analyze.proto#L175)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetContent(google::cloud::dataplex::v1::GetContentRequest const &, Options)

Get a content resource.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dataplex::v1::GetContentRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dataplex.v1.GetContentRequest](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/cloud/dataplex/v1/content.proto#L243). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dataplex::v1::Content >`

the result of the RPC. The response message type ([google.cloud.dataplex.v1.Content](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/cloud/dataplex/v1/analyze.proto#L175)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetIamPolicy(std::string const &, Options)

Gets the access control policy for a contentitem resource.

A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.

Caller must have Google IAM `dataplex.content.getIamPolicy` permission on the resource.

**Parameters**

**Name**

**Description**

`resource`

`std::string const &`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::Policy >`

the result of the RPC. The response message type ([google.iam.v1.Policy](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/iam/v1/policy.proto#L102)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetIamPolicy(google::iam::v1::GetIamPolicyRequest const &, Options)

Gets the access control policy for a contentitem resource.

A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.

Caller must have Google IAM `dataplex.content.getIamPolicy` permission on the resource.

**Parameters**

**Name**

**Description**

`request`

`google::iam::v1::GetIamPolicyRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.iam.v1.GetIamPolicyRequest](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/iam/v1/iam_policy.proto#L123). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::Policy >`

the result of the RPC. The response message type ([google.iam.v1.Policy](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/iam/v1/policy.proto#L102)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetIamPolicy(google::iam::v1::SetIamPolicyRequest const &, Options)

Sets the access control policy on the specified contentitem resource.

Replaces any existing policy.

Caller must have Google IAM `dataplex.content.setIamPolicy` permission on the resource.

**Parameters**

**Name**

**Description**

`request`

`google::iam::v1::SetIamPolicyRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.iam.v1.SetIamPolicyRequest](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/iam/v1/iam_policy.proto#L100). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::Policy >`

the result of the RPC. The response message type ([google.iam.v1.Policy](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/iam/v1/policy.proto#L102)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### TestIamPermissions(google::iam::v1::TestIamPermissionsRequest const &, Options)

Returns the caller's permissions on a resource.

If the resource does not exist, an empty set of permissions is returned (a `NOT_FOUND` error is not returned).

A caller is not required to have Google IAM permission to make this request.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`request`

`google::iam::v1::TestIamPermissionsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.iam.v1.TestIamPermissionsRequest](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/iam/v1/iam_policy.proto#L137). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::TestIamPermissionsResponse >`

the result of the RPC. The response message type ([google.iam.v1.TestIamPermissionsResponse](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/iam/v1/iam_policy.proto#L153)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListContent(std::string const &, Options)

List content.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The resource name of the parent lake: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::dataplex::v1::Content >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.dataplex.v1.Content](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/cloud/dataplex/v1/analyze.proto#L175), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListContent(google::cloud::dataplex::v1::ListContentRequest, Options)

List content.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dataplex::v1::ListContentRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dataplex.v1.ListContentRequest](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/cloud/dataplex/v1/content.proto#L201). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::dataplex::v1::Content >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.dataplex.v1.Content](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/cloud/dataplex/v1/analyze.proto#L175), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListLocations(google::cloud::location::ListLocationsRequest, Options)

Lists information about the supported locations for this service.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::location::ListLocationsRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.location.ListLocationsRequest](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/cloud/location/locations.proto#L58). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::location::Location >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.location.Location](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/cloud/location/locations.proto#L88), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetLocation(google::cloud::location::GetLocationRequest const &, Options)

Gets information about a location.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::location::GetLocationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.location.GetLocationRequest](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/cloud/location/locations.proto#L82). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::location::Location >`

the result of the RPC. The response message type ([google.cloud.location.Location](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/cloud/location/locations.proto#L88)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

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

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.longrunning.Operation](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/longrunning/operations.proto#L121), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListOperations(google::longrunning::ListOperationsRequest, Options)

Lists operations that match the specified filter in the request.

If the server doesn't support this method, it returns `UNIMPLEMENTED`.

**Parameters**

**Name**

**Description**

`request`

`google::longrunning::ListOperationsRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.longrunning.ListOperationsRequest](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/longrunning/operations.proto#L167). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::longrunning::Operation >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.longrunning.Operation](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/longrunning/operations.proto#L121), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

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

the result of the RPC. The response message type ([google.longrunning.Operation](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/longrunning/operations.proto#L121)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetOperation(google::longrunning::GetOperationRequest const &, Options)

Gets the latest state of a long-running operation.

Clients can use this method to poll the operation result at intervals as recommended by the API service.

**Parameters**

**Name**

**Description**

`request`

`google::longrunning::GetOperationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.longrunning.GetOperationRequest](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/longrunning/operations.proto#L160). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

the result of the RPC. The response message type ([google.longrunning.Operation](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/longrunning/operations.proto#L121)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

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

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.longrunning.DeleteOperationRequest](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/longrunning/operations.proto#L200). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

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

The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use [Operations.GetOperation](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/longrunning/operations.proto#L70) or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an [Operation.error](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/longrunning/operations.proto#L144) value with a [google.rpc.Status.code](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/rpc/status.proto#L38) of `1`, corresponding to `Code.CANCELLED`.

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

The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use [Operations.GetOperation](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/longrunning/operations.proto#L70) or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an [Operation.error](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/longrunning/operations.proto#L144) value with a [google.rpc.Status.code](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/rpc/status.proto#L38) of `1`, corresponding to `Code.CANCELLED`.

**Parameters**

**Name**

**Description**

`request`

`google::longrunning::CancelOperationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.longrunning.CancelOperationRequest](https://github.com/googleapis/googleapis/blob/c3556b45dc35a145e04b5692bc72e01a4f58a6b2/google/longrunning/operations.proto#L193). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

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
