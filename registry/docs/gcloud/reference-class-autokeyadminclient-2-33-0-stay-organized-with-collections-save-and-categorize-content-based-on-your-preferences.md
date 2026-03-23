-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class AutokeyAdminClient (2.33.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0 2.10.1

Provides interfaces for managing [Cloud KMS Autokey](https://cloud.google.com/kms/help/autokey) folder-level configurations.

A configuration is inherited by all descendent projects. A configuration at one folder overrides any other configurations in its ancestry. Setting a configuration on a folder is a prerequisite for Cloud KMS Autokey, so that users working in a descendant project can request provisioned \[CryptoKeys\]\[google.cloud.kms.v1.CryptoKey\], ready for Customer Managed Encryption Key (CMEK) use, on-demand.

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### AutokeyAdminClient(AutokeyAdminClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`AutokeyAdminClient const &`  

### AutokeyAdminClient(AutokeyAdminClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`AutokeyAdminClient &&`  

### AutokeyAdminClient(std::shared\_ptr< AutokeyAdminConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< AutokeyAdminConnection >`  

`opts`

`Options`  

## Operators

### operator=(AutokeyAdminClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`AutokeyAdminClient const &`  

**Returns**

**Type**

**Description**

`AutokeyAdminClient &`

### operator=(AutokeyAdminClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`AutokeyAdminClient &&`  

**Returns**

**Type**

**Description**

`AutokeyAdminClient &`

## Functions

### UpdateAutokeyConfig(google::cloud::kms::v1::AutokeyConfig const &, google::protobuf::FieldMask const &, Options)

Updates the [AutokeyConfig](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/kms/v1/autokey_admin.proto#L106) for a folder.

The caller must have both `cloudkms.autokeyConfigs.update` permission on the parent folder and `cloudkms.cryptoKeys.setIamPolicy` permission on the provided key project. A \[KeyHandle\]\[google.cloud.kms.v1.KeyHandle\] creation in the folder's descendant projects will use this configuration to determine where to create the resulting \[CryptoKey\]\[google.cloud.kms.v1.CryptoKey\].

**Parameters**

**Name**

**Description**

`autokey_config`

`google::cloud::kms::v1::AutokeyConfig const &`  

Required. [AutokeyConfig](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/kms/v1/autokey_admin.proto#L106) with values to update.

`update_mask`

`google::protobuf::FieldMask const &`  

Required. Masks which fields of the [AutokeyConfig](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/kms/v1/autokey_admin.proto#L106) to update, e.g. `keyProject`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::kms::v1::AutokeyConfig >`

the result of the RPC. The response message type ([google.cloud.kms.v1.AutokeyConfig](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/kms/v1/autokey_admin.proto#L106)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateAutokeyConfig(google::cloud::kms::v1::UpdateAutokeyConfigRequest const &, Options)

Updates the [AutokeyConfig](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/kms/v1/autokey_admin.proto#L106) for a folder.

The caller must have both `cloudkms.autokeyConfigs.update` permission on the parent folder and `cloudkms.cryptoKeys.setIamPolicy` permission on the provided key project. A \[KeyHandle\]\[google.cloud.kms.v1.KeyHandle\] creation in the folder's descendant projects will use this configuration to determine where to create the resulting \[CryptoKey\]\[google.cloud.kms.v1.CryptoKey\].

**Parameters**

**Name**

**Description**

`request`

`google::cloud::kms::v1::UpdateAutokeyConfigRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.kms.v1.UpdateAutokeyConfigRequest](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/kms/v1/autokey_admin.proto#L80). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::kms::v1::AutokeyConfig >`

the result of the RPC. The response message type ([google.cloud.kms.v1.AutokeyConfig](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/kms/v1/autokey_admin.proto#L106)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetAutokeyConfig(std::string const &, Options)

Returns the [AutokeyConfig](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/kms/v1/autokey_admin.proto#L106) for a folder.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. Name of the [AutokeyConfig](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/kms/v1/autokey_admin.proto#L106) resource, e.g. `folders/{FOLDER_NUMBER}/autokeyConfig`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::kms::v1::AutokeyConfig >`

the result of the RPC. The response message type ([google.cloud.kms.v1.AutokeyConfig](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/kms/v1/autokey_admin.proto#L106)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetAutokeyConfig(google::cloud::kms::v1::GetAutokeyConfigRequest const &, Options)

Returns the [AutokeyConfig](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/kms/v1/autokey_admin.proto#L106) for a folder.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::kms::v1::GetAutokeyConfigRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.kms.v1.GetAutokeyConfigRequest](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/kms/v1/autokey_admin.proto#L94). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::kms::v1::AutokeyConfig >`

the result of the RPC. The response message type ([google.cloud.kms.v1.AutokeyConfig](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/kms/v1/autokey_admin.proto#L106)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ShowEffectiveAutokeyConfig(std::string const &, Options)

Returns the effective Cloud KMS Autokey configuration for a given project.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. Name of the resource project to the show effective Cloud KMS Autokey configuration for. This may be helpful for interrogating the effect of nested folder configurations on a given resource project.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::kms::v1::ShowEffectiveAutokeyConfigResponse >`

the result of the RPC. The response message type ([google.cloud.kms.v1.ShowEffectiveAutokeyConfigResponse](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/kms/v1/autokey_admin.proto#L168)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ShowEffectiveAutokeyConfig(google::cloud::kms::v1::ShowEffectiveAutokeyConfigRequest const &, Options)

Returns the effective Cloud KMS Autokey configuration for a given project.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::kms::v1::ShowEffectiveAutokeyConfigRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.kms.v1.ShowEffectiveAutokeyConfigRequest](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/kms/v1/autokey_admin.proto#L154). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::kms::v1::ShowEffectiveAutokeyConfigResponse >`

the result of the RPC. The response message type ([google.cloud.kms.v1.ShowEffectiveAutokeyConfigResponse](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/kms/v1/autokey_admin.proto#L168)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListLocations(google::cloud::location::ListLocationsRequest, Options)

Lists information about the supported locations for this service.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::location::ListLocationsRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.location.ListLocationsRequest](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/location/locations.proto#L58). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::location::Location >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.location.Location](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/location/locations.proto#L88), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetLocation(google::cloud::location::GetLocationRequest const &, Options)

Gets information about a location.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::location::GetLocationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.location.GetLocationRequest](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/location/locations.proto#L82). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::location::Location >`

the result of the RPC. The response message type ([google.cloud.location.Location](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/cloud/location/locations.proto#L88)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetIamPolicy(google::iam::v1::SetIamPolicyRequest const &, Options)

Sets the access control policy on the specified resource.

Replaces any existing policy.

Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

**Parameters**

**Name**

**Description**

`request`

`google::iam::v1::SetIamPolicyRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.iam.v1.SetIamPolicyRequest](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/iam/v1/iam_policy.proto#L100). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::Policy >`

the result of the RPC. The response message type ([google.iam.v1.Policy](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/iam/v1/policy.proto#L102)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetIamPolicy(google::iam::v1::GetIamPolicyRequest const &, Options)

Gets the access control policy for a resource.

Returns an empty policy if the resource exists and does not have a policy set.

**Parameters**

**Name**

**Description**

`request`

`google::iam::v1::GetIamPolicyRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.iam.v1.GetIamPolicyRequest](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/iam/v1/iam_policy.proto#L123). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::Policy >`

the result of the RPC. The response message type ([google.iam.v1.Policy](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/iam/v1/policy.proto#L102)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### TestIamPermissions(google::iam::v1::TestIamPermissionsRequest const &, Options)

Returns permissions that a caller has on the specified resource.

If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`request`

`google::iam::v1::TestIamPermissionsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.iam.v1.TestIamPermissionsRequest](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/iam/v1/iam_policy.proto#L137). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::TestIamPermissionsResponse >`

the result of the RPC. The response message type ([google.iam.v1.TestIamPermissionsResponse](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/iam/v1/iam_policy.proto#L153)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

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

the result of the RPC. The response message type ([google.longrunning.Operation](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/longrunning/operations.proto#L121)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetOperation(google::longrunning::GetOperationRequest const &, Options)

Gets the latest state of a long-running operation.

Clients can use this method to poll the operation result at intervals as recommended by the API service.

**Parameters**

**Name**

**Description**

`request`

`google::longrunning::GetOperationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.longrunning.GetOperationRequest](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/longrunning/operations.proto#L160). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

the result of the RPC. The response message type ([google.longrunning.Operation](https://github.com/googleapis/googleapis/blob/f4eff5440fd07389f820d22d2a55690c6390dc6d/google/longrunning/operations.proto#L121)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
