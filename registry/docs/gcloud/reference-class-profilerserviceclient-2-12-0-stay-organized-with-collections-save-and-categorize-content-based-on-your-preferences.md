-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class ProfilerServiceClient (2.12.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

Manage the collection of continuous profiling data provided by profiling agents running in the cloud or by an offline provider of profiling data.

General guidelines:

-   Profiles for a single deployment must be created in ascending time order.
-   Profiles can be created in either online or offline mode, see below.

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### ProfilerServiceClient(ProfilerServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`ProfilerServiceClient const &`  

### ProfilerServiceClient(ProfilerServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`ProfilerServiceClient &&`  

### ProfilerServiceClient(std::shared\_ptr< ProfilerServiceConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< ProfilerServiceConnection >`  

`opts`

`Options`  

## Operators

### operator=(ProfilerServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`ProfilerServiceClient const &`  

**Returns**

**Type**

**Description**

`ProfilerServiceClient &`

### operator=(ProfilerServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`ProfilerServiceClient &&`  

**Returns**

**Type**

**Description**

`ProfilerServiceClient &`

## Functions

### CreateProfile(google::devtools::cloudprofiler::v2::CreateProfileRequest const &, Options)

CreateProfile creates a new profile resource in the online mode.

The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available.

The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin".

**Parameters**

**Name**

**Description**

`request`

`google::devtools::cloudprofiler::v2::CreateProfileRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.devtools.cloudprofiler.v2.CreateProfileRequest](https://github.com/googleapis/googleapis/blob/a3f983b38c357a1e7a7810d9ad795756b77d4332/google/devtools/cloudprofiler/v2/profiler.proto#L97). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::devtools::cloudprofiler::v2::Profile >`

the result of the RPC. The response message type ([google.devtools.cloudprofiler.v2.Profile](https://github.com/googleapis/googleapis/blob/a3f983b38c357a1e7a7810d9ad795756b77d4332/google/devtools/cloudprofiler/v2/profiler.proto#L135)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateOfflineProfile(std::string const &, google::devtools::cloudprofiler::v2::Profile const &, Options)

CreateOfflineProfile creates a new profile resource in the offline mode.

The client provides the profile to create along with the profile bytes, the server records it.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Parent project to create the profile in.

`profile`

`google::devtools::cloudprofiler::v2::Profile const &`  

Contents of the profile to create.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::devtools::cloudprofiler::v2::Profile >`

the result of the RPC. The response message type ([google.devtools.cloudprofiler.v2.Profile](https://github.com/googleapis/googleapis/blob/a3f983b38c357a1e7a7810d9ad795756b77d4332/google/devtools/cloudprofiler/v2/profiler.proto#L135)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateOfflineProfile(google::devtools::cloudprofiler::v2::CreateOfflineProfileRequest const &, Options)

CreateOfflineProfile creates a new profile resource in the offline mode.

The client provides the profile to create along with the profile bytes, the server records it.

**Parameters**

**Name**

**Description**

`request`

`google::devtools::cloudprofiler::v2::CreateOfflineProfileRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.devtools.cloudprofiler.v2.CreateOfflineProfileRequest](https://github.com/googleapis/googleapis/blob/a3f983b38c357a1e7a7810d9ad795756b77d4332/google/devtools/cloudprofiler/v2/profiler.proto#L112). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::devtools::cloudprofiler::v2::Profile >`

the result of the RPC. The response message type ([google.devtools.cloudprofiler.v2.Profile](https://github.com/googleapis/googleapis/blob/a3f983b38c357a1e7a7810d9ad795756b77d4332/google/devtools/cloudprofiler/v2/profiler.proto#L135)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateProfile(google::devtools::cloudprofiler::v2::Profile const &, google::protobuf::FieldMask const &, Options)

UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode.

Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.

**Parameters**

**Name**

**Description**

`profile`

`google::devtools::cloudprofiler::v2::Profile const &`  

Profile to update.

`update_mask`

`google::protobuf::FieldMask const &`  

Field mask used to specify the fields to be overwritten. Currently only profile\_bytes and labels fields are supported by UpdateProfile, so only those fields can be specified in the mask. When no mask is provided, all fields are overwritten.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::devtools::cloudprofiler::v2::Profile >`

the result of the RPC. The response message type ([google.devtools.cloudprofiler.v2.Profile](https://github.com/googleapis/googleapis/blob/a3f983b38c357a1e7a7810d9ad795756b77d4332/google/devtools/cloudprofiler/v2/profiler.proto#L135)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateProfile(google::devtools::cloudprofiler::v2::UpdateProfileRequest const &, Options)

UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode.

Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.

**Parameters**

**Name**

**Description**

`request`

`google::devtools::cloudprofiler::v2::UpdateProfileRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.devtools.cloudprofiler.v2.UpdateProfileRequest](https://github.com/googleapis/googleapis/blob/a3f983b38c357a1e7a7810d9ad795756b77d4332/google/devtools/cloudprofiler/v2/profiler.proto#L123). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::devtools::cloudprofiler::v2::Profile >`

the result of the RPC. The response message type ([google.devtools.cloudprofiler.v2.Profile](https://github.com/googleapis/googleapis/blob/a3f983b38c357a1e7a7810d9ad795756b77d4332/google/devtools/cloudprofiler/v2/profiler.proto#L135)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
