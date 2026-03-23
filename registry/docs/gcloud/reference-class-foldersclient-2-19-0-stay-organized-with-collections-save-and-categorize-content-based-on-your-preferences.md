-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class FoldersClient (2.19.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

Manages Cloud Platform folder resources.

Folders can be used to organize the resources under an organization and to control the policies applied to groups of resources.

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### FoldersClient(FoldersClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`FoldersClient const &`  

### FoldersClient(FoldersClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`FoldersClient &&`  

### FoldersClient(std::shared\_ptr< FoldersConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< FoldersConnection >`  

`opts`

`Options`  

## Operators

### operator=(FoldersClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`FoldersClient const &`  

**Returns**

**Type**

**Description**

`FoldersClient &`

### operator=(FoldersClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`FoldersClient &&`  

**Returns**

**Type**

**Description**

`FoldersClient &`

## Functions

### GetFolder(std::string const &, Options)

Retrieves a folder identified by the supplied resource name.

Valid folder resource names have the format `folders/{folder_id}` (for example, `folders/1234`). The caller must have `resourcemanager.folders.get` permission on the identified folder.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The resource name of the folder to retrieve. Must be of the form `folders/{folder_id}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::resourcemanager::v3::Folder >`

the result of the RPC. The response message type ([google.cloud.resourcemanager.v3.Folder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L273)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetFolder(google::cloud::resourcemanager::v3::GetFolderRequest const &, Options)

Retrieves a folder identified by the supplied resource name.

Valid folder resource names have the format `folders/{folder_id}` (for example, `folders/1234`). The caller must have `resourcemanager.folders.get` permission on the identified folder.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::resourcemanager::v3::GetFolderRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.resourcemanager.v3.GetFolderRequest](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L335). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::resourcemanager::v3::Folder >`

the result of the RPC. The response message type ([google.cloud.resourcemanager.v3.Folder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L273)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListFolders(std::string const &, Options)

Lists the folders that are direct descendants of supplied parent resource.

`list()` provides a strongly consistent view of the folders underneath the specified parent resource. `list()` returns folders sorted based upon the (ascending) lexical ordering of their display\_name. The caller must have `resourcemanager.folders.list` permission on the identified parent.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The name of the parent resource whose folders are being listed. Only children of this parent resource are listed; descendants are not listed.  
If the parent is a folder, use the value `folders/{folder_id}`. If the parent is an organization, use the value `organizations/{org_id}`.  
Access to this method is controlled by checking the `resourcemanager.folders.list` permission on the `parent`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::resourcemanager::v3::Folder >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.resourcemanager.v3.Folder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L273), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListFolders(google::cloud::resourcemanager::v3::ListFoldersRequest, Options)

Lists the folders that are direct descendants of supplied parent resource.

`list()` provides a strongly consistent view of the folders underneath the specified parent resource. `list()` returns folders sorted based upon the (ascending) lexical ordering of their display\_name. The caller must have `resourcemanager.folders.list` permission on the identified parent.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::resourcemanager::v3::ListFoldersRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.resourcemanager.v3.ListFoldersRequest](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L347). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::resourcemanager::v3::Folder >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.resourcemanager.v3.Folder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L273), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### SearchFolders(std::string const &, Options)

Search for folders that match specific filter criteria.

`search()` provides an eventually consistent view of the folders a user has access to which meet the specified filter criteria.

This will only return folders on which the caller has the permission `resourcemanager.folders.get`.

**Parameters**

**Name**

**Description**

`query`

`std::string const &`  

Optional. Search criteria used to select the folders to return. If no search criteria is specified then all accessible folders will be returned.  
For more information, see [SearchFoldersRequest](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L389).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::resourcemanager::v3::Folder >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.resourcemanager.v3.Folder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L273), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### SearchFolders(google::cloud::resourcemanager::v3::SearchFoldersRequest, Options)

Search for folders that match specific filter criteria.

`search()` provides an eventually consistent view of the folders a user has access to which meet the specified filter criteria.

This will only return folders on which the caller has the permission `resourcemanager.folders.get`.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::resourcemanager::v3::SearchFoldersRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.resourcemanager.v3.SearchFoldersRequest](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L389). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::resourcemanager::v3::Folder >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.resourcemanager.v3.Folder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L273), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### CreateFolder(google::cloud::resourcemanager::v3::Folder const &, Options)

Creates a folder in the resource hierarchy.

Returns an `Operation` which can be used to track the progress of the folder creation workflow. Upon success, the `Operation.response` field will be populated with the created Folder.

In order to succeed, the addition of this new folder must not violate the folder naming, height, or fanout constraints.

-   The folder's `display_name` must be distinct from all other folders that share its parent.
-   The addition of the folder must not cause the active folder hierarchy to exceed a height of 10. Note, the full active + deleted folder hierarchy is allowed to reach a height of 20; this provides additional headroom when moving folders that contain deleted folders.
-   The addition of the folder must not cause the total number of folders under its parent to exceed 300.

If the operation fails due to a folder constraint violation, some errors may be returned by the `CreateFolder` request, with status code `FAILED_PRECONDITION` and an error description. Other folder constraint violations will be communicated in the `Operation`, with the specific `PreconditionFailure` returned in the details list in the `Operation.error` field.

The caller must have `resourcemanager.folders.create` permission on the identified parent.

**Parameters**

**Name**

**Description**

`folder`

`google::cloud::resourcemanager::v3::Folder const &`  

Required. The folder being created, only the display name and parent will be consulted. All other fields will be ignored.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::resourcemanager::v3::Folder > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.resourcemanager.v3.Folder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L273) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### CreateFolder(google::cloud::resourcemanager::v3::CreateFolderRequest const &, Options)

Creates a folder in the resource hierarchy.

Returns an `Operation` which can be used to track the progress of the folder creation workflow. Upon success, the `Operation.response` field will be populated with the created Folder.

In order to succeed, the addition of this new folder must not violate the folder naming, height, or fanout constraints.

-   The folder's `display_name` must be distinct from all other folders that share its parent.
-   The addition of the folder must not cause the active folder hierarchy to exceed a height of 10. Note, the full active + deleted folder hierarchy is allowed to reach a height of 20; this provides additional headroom when moving folders that contain deleted folders.
-   The addition of the folder must not cause the total number of folders under its parent to exceed 300.

If the operation fails due to a folder constraint violation, some errors may be returned by the `CreateFolder` request, with status code `FAILED_PRECONDITION` and an error description. Other folder constraint violations will be communicated in the `Operation`, with the specific `PreconditionFailure` returned in the details list in the `Operation.error` field.

The caller must have `resourcemanager.folders.create` permission on the identified parent.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::resourcemanager::v3::CreateFolderRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.resourcemanager.v3.CreateFolderRequest](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L445). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::resourcemanager::v3::Folder > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.resourcemanager.v3.Folder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L273) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UpdateFolder(google::cloud::resourcemanager::v3::Folder const &, google::protobuf::FieldMask const &, Options)

Updates a folder, changing its `display_name`.

Changes to the folder `display_name` will be rejected if they violate either the `display_name` formatting rules or the naming constraints described in the [CreateFolder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L112) documentation.

The folder's `display_name` must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be between 3 and 30 characters. This is captured by the regular expression: `[\p{L}\p{N}][\p{L}\p{N}_- ]{1,28}[\p{L}\p{N}]`. The caller must have `resourcemanager.folders.update` permission on the identified folder.

If the update fails due to the unique name constraint then a `PreconditionFailure` explaining this violation will be returned in the Status.details field.

**Parameters**

**Name**

**Description**

`folder`

`google::cloud::resourcemanager::v3::Folder const &`  

Required. The new definition of the Folder. It must include the `name` field, which cannot be changed.

`update_mask`

`google::protobuf::FieldMask const &`  

Required. Fields to be updated. Only the `display_name` can be updated.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::resourcemanager::v3::Folder > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.resourcemanager.v3.Folder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L273) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UpdateFolder(google::cloud::resourcemanager::v3::UpdateFolderRequest const &, Options)

Updates a folder, changing its `display_name`.

Changes to the folder `display_name` will be rejected if they violate either the `display_name` formatting rules or the naming constraints described in the [CreateFolder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L112) documentation.

The folder's `display_name` must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be between 3 and 30 characters. This is captured by the regular expression: `[\p{L}\p{N}][\p{L}\p{N}_- ]{1,28}[\p{L}\p{N}]`. The caller must have `resourcemanager.folders.update` permission on the identified folder.

If the update fails due to the unique name constraint then a `PreconditionFailure` explaining this violation will be returned in the Status.details field.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::resourcemanager::v3::UpdateFolderRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.resourcemanager.v3.UpdateFolderRequest](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L469). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::resourcemanager::v3::Folder > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.resourcemanager.v3.Folder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L273) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### MoveFolder(std::string const &, std::string const &, Options)

Moves a folder under a new resource parent.

Returns an `Operation` which can be used to track the progress of the folder move workflow. Upon success, the `Operation.response` field will be populated with the moved folder. Upon failure, a `FolderOperationError` categorizing the failure cause will be returned - if the failure occurs synchronously then the `FolderOperationError` will be returned in the `Status.details` field. If it occurs asynchronously, then the FolderOperation will be returned in the `Operation.error` field. In addition, the `Operation.metadata` field will be populated with a `FolderOperation` message as an aid to stateless clients. Folder moves will be rejected if they violate either the naming, height, or fanout constraints described in the [CreateFolder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L112) documentation. The caller must have `resourcemanager.folders.move` permission on the folder's current and proposed new parent.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The resource name of the Folder to move. Must be of the form folders/{folder\_id}

`destination_parent`

`std::string const &`  

Required. The resource name of the folder or organization which should be the folder's new parent. Must be of the form `folders/{folder_id}` or `organizations/{org_id}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::resourcemanager::v3::Folder > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.resourcemanager.v3.Folder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L273) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### MoveFolder(google::cloud::resourcemanager::v3::MoveFolderRequest const &, Options)

Moves a folder under a new resource parent.

Returns an `Operation` which can be used to track the progress of the folder move workflow. Upon success, the `Operation.response` field will be populated with the moved folder. Upon failure, a `FolderOperationError` categorizing the failure cause will be returned - if the failure occurs synchronously then the `FolderOperationError` will be returned in the `Status.details` field. If it occurs asynchronously, then the FolderOperation will be returned in the `Operation.error` field. In addition, the `Operation.metadata` field will be populated with a `FolderOperation` message as an aid to stateless clients. Folder moves will be rejected if they violate either the naming, height, or fanout constraints described in the [CreateFolder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L112) documentation. The caller must have `resourcemanager.folders.move` permission on the folder's current and proposed new parent.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::resourcemanager::v3::MoveFolderRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.resourcemanager.v3.MoveFolderRequest](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L485). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::resourcemanager::v3::Folder > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.resourcemanager.v3.Folder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L273) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteFolder(std::string const &, Options)

Requests deletion of a folder.

The folder is moved into the [DELETE\_REQUESTED](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L289) state immediately, and is deleted approximately 30 days later. This method may only be called on an empty folder, where a folder is empty if it doesn't contain any folders or projects in the [ACTIVE](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L286) state. If called on a folder in [DELETE\_REQUESTED](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L289) state the operation will result in a no-op success. The caller must have `resourcemanager.folders.delete` permission on the identified folder.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The resource name of the folder to be deleted. Must be of the form `folders/{folder_id}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::resourcemanager::v3::Folder > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.resourcemanager.v3.Folder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L273) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteFolder(google::cloud::resourcemanager::v3::DeleteFolderRequest const &, Options)

Requests deletion of a folder.

The folder is moved into the [DELETE\_REQUESTED](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L289) state immediately, and is deleted approximately 30 days later. This method may only be called on an empty folder, where a folder is empty if it doesn't contain any folders or projects in the [ACTIVE](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L286) state. If called on a folder in [DELETE\_REQUESTED](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L289) state the operation will result in a no-op success. The caller must have `resourcemanager.folders.delete` permission on the identified folder.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::resourcemanager::v3::DeleteFolderRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.resourcemanager.v3.DeleteFolderRequest](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L517). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::resourcemanager::v3::Folder > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.resourcemanager.v3.Folder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L273) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UndeleteFolder(std::string const &, Options)

Cancels the deletion request for a folder.

This method may be called on a folder in any state. If the folder is in the [ACTIVE](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L286) state the result will be a no-op success. In order to succeed, the folder's parent must be in the [ACTIVE](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L286) state. In addition, reintroducing the folder into the tree must not violate folder naming, height, and fanout constraints described in the [CreateFolder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L112) documentation. The caller must have `resourcemanager.folders.undelete` permission on the identified folder.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The resource name of the folder to undelete. Must be of the form `folders/{folder_id}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::resourcemanager::v3::Folder > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.resourcemanager.v3.Folder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L273) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UndeleteFolder(google::cloud::resourcemanager::v3::UndeleteFolderRequest const &, Options)

Cancels the deletion request for a folder.

This method may be called on a folder in any state. If the folder is in the [ACTIVE](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L286) state the result will be a no-op success. In order to succeed, the folder's parent must be in the [ACTIVE](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L286) state. In addition, reintroducing the folder into the tree must not violate folder naming, height, and fanout constraints described in the [CreateFolder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L112) documentation. The caller must have `resourcemanager.folders.undelete` permission on the identified folder.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::resourcemanager::v3::UndeleteFolderRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.resourcemanager.v3.UndeleteFolderRequest](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L533). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::resourcemanager::v3::Folder > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.resourcemanager.v3.Folder](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/cloud/resourcemanager/v3/folders.proto#L273) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetIamPolicy(std::string const &, Options)

Gets the access control policy for a folder.

The returned policy may be empty if no such policy or resource exists. The `resource` field should be the folder's resource name, for example: "folders/1234". The caller must have `resourcemanager.folders.getIamPolicy` permission on the identified folder.

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

the result of the RPC. The response message type ([google.iam.v1.Policy](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/iam/v1/policy.proto#L102)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetIamPolicy(google::iam::v1::GetIamPolicyRequest const &, Options)

Gets the access control policy for a folder.

The returned policy may be empty if no such policy or resource exists. The `resource` field should be the folder's resource name, for example: "folders/1234". The caller must have `resourcemanager.folders.getIamPolicy` permission on the identified folder.

**Parameters**

**Name**

**Description**

`request`

`google::iam::v1::GetIamPolicyRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.iam.v1.GetIamPolicyRequest](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/iam/v1/iam_policy.proto#L123). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::Policy >`

the result of the RPC. The response message type ([google.iam.v1.Policy](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/iam/v1/policy.proto#L102)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetIamPolicy(std::string const &, google::iam::v1::Policy const &, Options)

Sets the access control policy on a folder, replacing any existing policy.

The `resource` field should be the folder's resource name, for example: "folders/1234". The caller must have `resourcemanager.folders.setIamPolicy` permission on the identified folder.

**Parameters**

**Name**

**Description**

`resource`

`std::string const &`  

REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.

`policy`

`google::iam::v1::Policy const &`  

REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::Policy >`

the result of the RPC. The response message type ([google.iam.v1.Policy](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/iam/v1/policy.proto#L102)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetIamPolicy(std::string const &, IamUpdater const &, Options)

Updates the IAM policy for `resource` using an optimistic concurrency control loop.

The loop fetches the current policy for `resource`, and passes it to `updater`, which should return the new policy. This new policy should use the current etag so that the read-modify-write cycle can detect races and rerun the update when there is a mismatch. If the new policy does not have an etag, the existing policy will be blindly overwritten. If `updater` does not yield a policy, the control loop is terminated and kCancelled is returned.

**Parameters**

**Name**

**Description**

`resource`

`std::string const &`  

Required. The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.

`updater`

`IamUpdater const &`  

Required. Functor to map the current policy to a new one.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::Policy >`

google::iam::v1::Policy

### SetIamPolicy(google::iam::v1::SetIamPolicyRequest const &, Options)

Sets the access control policy on a folder, replacing any existing policy.

The `resource` field should be the folder's resource name, for example: "folders/1234". The caller must have `resourcemanager.folders.setIamPolicy` permission on the identified folder.

**Parameters**

**Name**

**Description**

`request`

`google::iam::v1::SetIamPolicyRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.iam.v1.SetIamPolicyRequest](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/iam/v1/iam_policy.proto#L101). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::Policy >`

the result of the RPC. The response message type ([google.iam.v1.Policy](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/iam/v1/policy.proto#L102)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### TestIamPermissions(std::string const &, std::vector< std::string > const &, Options)

Returns permissions that a caller has on the specified folder.

The `resource` field should be the folder's resource name, for example: "folders/1234".

There are no permissions required for making this API call.

**Parameters**

**Name**

**Description**

`resource`

`std::string const &`  

REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.

`permissions`

`std::vector< std::string > const &`  

The set of permissions to check for the `resource`. Permissions with wildcards (such as '_' or 'storage._') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::TestIamPermissionsResponse >`

the result of the RPC. The response message type ([google.iam.v1.TestIamPermissionsResponse](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/iam/v1/iam_policy.proto#L151)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### TestIamPermissions(google::iam::v1::TestIamPermissionsRequest const &, Options)

Returns permissions that a caller has on the specified folder.

The `resource` field should be the folder's resource name, for example: "folders/1234".

There are no permissions required for making this API call.

**Parameters**

**Name**

**Description**

`request`

`google::iam::v1::TestIamPermissionsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.iam.v1.TestIamPermissionsRequest](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/iam/v1/iam_policy.proto#L136). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::TestIamPermissionsResponse >`

the result of the RPC. The response message type ([google.iam.v1.TestIamPermissionsResponse](https://github.com/googleapis/googleapis/blob/0e3b813b0d0da539eacbe86b8716feeed00943c5/google/iam/v1/iam_policy.proto#L151)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
