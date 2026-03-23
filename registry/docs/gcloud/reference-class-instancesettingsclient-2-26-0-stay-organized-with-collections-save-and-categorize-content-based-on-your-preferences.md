-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class InstanceSettingsClient (2.26.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1

Service for the instanceSettings resource.

[https://cloud.google.com/compute/docs/reference/rest/v1/instanceSettings](https://cloud.google.com/compute/docs/reference/rest/v1/instanceSettings)

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### InstanceSettingsClient(InstanceSettingsClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`InstanceSettingsClient const &`  

### InstanceSettingsClient(InstanceSettingsClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`InstanceSettingsClient &&`  

### InstanceSettingsClient(std::shared\_ptr< InstanceSettingsConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< InstanceSettingsConnection >`  

`opts`

`Options`  

## Operators

### operator=(InstanceSettingsClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`InstanceSettingsClient const &`  

**Returns**

**Type**

**Description**

`InstanceSettingsClient &`

### operator=(InstanceSettingsClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`InstanceSettingsClient &&`  

**Returns**

**Type**

**Description**

`InstanceSettingsClient &`

## Functions

### GetInstanceSettings(std::string const &, std::string const &, Options)

Get Instance settings.

[https://cloud.google.com/compute/docs/reference/rest/v1/instanceSettings/get](https://cloud.google.com/compute/docs/reference/rest/v1/instanceSettings/get)

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`zone`

`std::string const &`  

Name of the zone for this request.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::InstanceSettings >`

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.InstanceSettings](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/v1/internal/common_062.proto#L27)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetInstanceSettings(google::cloud::cpp::compute::instance\_settings::v1::GetInstanceSettingsRequest const &, Options)

Get Instance settings.

[https://cloud.google.com/compute/docs/reference/rest/v1/instanceSettings/get](https://cloud.google.com/compute/docs/reference/rest/v1/instanceSettings/get)

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::instance_settings::v1::GetInstanceSettingsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.instance\_settings.v1.GetInstanceSettingsRequest](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/instance_settings/v1/instance_settings.proto#L65). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::InstanceSettings >`

the result of the RPC. The response message type ([google.cloud.cpp.compute.v1.InstanceSettings](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/v1/internal/common_062.proto#L27)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### PatchInstanceSettings(std::string const &, std::string const &, std::string const &, google::cloud::cpp::compute::v1::InstanceSettings const &, Options)

Patch Instance settings [https://cloud.google.com/compute/docs/reference/rest/v1/instanceSettings/patch](https://cloud.google.com/compute/docs/reference/rest/v1/instanceSettings/patch).

**Parameters**

**Name**

**Description**

`project`

`std::string const &`  

[Project](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) ID for this request.

`zone`

`std::string const &`  

The zone scoping this request. It should conform to RFC1035.

`update_mask`

`std::string const &`  

update\_mask indicates fields to be updated as part of this request.

`instance_settings_resource`

`google::cloud::cpp::compute::v1::InstanceSettings const &`  

The InstanceSettings for this request.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](http://cloud/compute/docs/api/how-tos/api-requests-responses#handling_api_responses)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### PatchInstanceSettings(ExperimentalTag, NoAwaitTag, std::string const &, std::string const &, std::string const &, google::cloud::cpp::compute::v1::InstanceSettings const &, Options)

Patch Instance settings [https://cloud.google.com/compute/docs/reference/rest/v1/instanceSettings/patch](https://cloud.google.com/compute/docs/reference/rest/v1/instanceSettings/patch).

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::cloud::cpp::compute::v1::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`ExperimentalTag`  

`NoAwaitTag`  

`project`

`std::string const &`  

`zone`

`std::string const &`  

`update_mask`

`std::string const &`  

`instance_settings_resource`

`google::cloud::cpp::compute::v1::InstanceSettings const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### PatchInstanceSettings(google::cloud::cpp::compute::instance\_settings::v1::PatchInstanceSettingsRequest const &, Options)

Patch Instance settings [https://cloud.google.com/compute/docs/reference/rest/v1/instanceSettings/patch](https://cloud.google.com/compute/docs/reference/rest/v1/instanceSettings/patch).

**Parameters**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::instance_settings::v1::PatchInstanceSettingsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.cpp.compute.instance\_settings.v1.PatchInstanceSettingsRequest](https://github.com/googleapis/google-cloud-cpp/blob/81505b7f1f3ba2157fea9339043191164befe7c9/google/cloud/compute/instance_settings/v1/instance_settings.proto#L75). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](http://cloud/compute/docs/api/how-tos/api-requests-responses#handling_api_responses)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a \[google.cloud.cpp.compute.v1.Operation\] proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### PatchInstanceSettings(ExperimentalTag, NoAwaitTag, google::cloud::cpp::compute::instance\_settings::v1::PatchInstanceSettingsRequest const &, Options)

Patch Instance settings [https://cloud.google.com/compute/docs/reference/rest/v1/instanceSettings/patch](https://cloud.google.com/compute/docs/reference/rest/v1/instanceSettings/patch).

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::cloud::cpp::compute::v1::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`ExperimentalTag`  

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::instance_settings::v1::PatchInstanceSettingsRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### PatchInstanceSettings(ExperimentalTag, google::cloud::cpp::compute::v1::Operation const &, Options)

Patch Instance settings [https://cloud.google.com/compute/docs/reference/rest/v1/instanceSettings/patch](https://cloud.google.com/compute/docs/reference/rest/v1/instanceSettings/patch).

This method accepts a `google::cloud::cpp::compute::v1::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`ExperimentalTag`  

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
