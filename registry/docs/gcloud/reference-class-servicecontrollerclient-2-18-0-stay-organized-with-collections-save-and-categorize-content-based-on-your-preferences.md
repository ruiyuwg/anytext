-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class ServiceControllerClient (2.18.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

[Service Control API v2](https://cloud.google.com/service-infrastructure/docs/service-control/access-control)

Private Preview. This feature is only available for approved services.

This API provides admission control and telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure).

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### ServiceControllerClient(ServiceControllerClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`ServiceControllerClient const &`  

### ServiceControllerClient(ServiceControllerClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`ServiceControllerClient &&`  

### ServiceControllerClient(std::shared\_ptr< ServiceControllerConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< ServiceControllerConnection >`  

`opts`

`Options`  

## Operators

### operator=(ServiceControllerClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`ServiceControllerClient const &`  

**Returns**

**Type**

**Description**

`ServiceControllerClient &`

### operator=(ServiceControllerClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`ServiceControllerClient &&`  

**Returns**

**Type**

**Description**

`ServiceControllerClient &`

## Functions

### Check(google::api::servicecontrol::v2::CheckRequest const &, Options)

Private Preview.

This feature is only available for approved services.

This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control).

NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes.

NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times.

This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

**Parameters**

**Name**

**Description**

`request`

`google::api::servicecontrol::v2::CheckRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.api.servicecontrol.v2.CheckRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/api/servicecontrol/v2/service_controller.proto#L104). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::api::servicecontrol::v2::CheckResponse >`

the result of the RPC. The response message type ([google.api.servicecontrol.v2.CheckResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/api/servicecontrol/v2/service_controller.proto#L157)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### Report(google::api::servicecontrol::v2::ReportRequest const &, Options)

Private Preview.

This feature is only available for approved services.

This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting).

NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call.

This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

**Parameters**

**Name**

**Description**

`request`

`google::api::servicecontrol::v2::ReportRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.api.servicecontrol.v2.ReportRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/api/servicecontrol/v2/service_controller.proto#L168). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::api::servicecontrol::v2::ReportResponse >`

the result of the RPC. The response message type ([google.api.servicecontrol.v2.ReportResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/api/servicecontrol/v2/service_controller.proto#L190)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
