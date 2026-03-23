-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class KeyTrackingServiceClient (2.29.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0 2.10.1

Returns information about the resources in an org that are protected by a given Cloud KMS key via CMEK.

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### KeyTrackingServiceClient(KeyTrackingServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`KeyTrackingServiceClient const &`  

### KeyTrackingServiceClient(KeyTrackingServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`KeyTrackingServiceClient &&`  

### KeyTrackingServiceClient(std::shared\_ptr< KeyTrackingServiceConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< KeyTrackingServiceConnection >`  

`opts`

`Options`  

## Operators

### operator=(KeyTrackingServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`KeyTrackingServiceClient const &`  

**Returns**

**Type**

**Description**

`KeyTrackingServiceClient &`

### operator=(KeyTrackingServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`KeyTrackingServiceClient &&`  

**Returns**

**Type**

**Description**

`KeyTrackingServiceClient &`

## Functions

### GetProtectedResourcesSummary(std::string const &, Options)

Returns aggregate information about the resources protected by the given Cloud KMS \[CryptoKey\]\[google.cloud.kms.v1.CryptoKey\].

Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The resource name of the \[CryptoKey\]\[google.cloud.kms.v1.CryptoKey\].

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::kms::inventory::v1::ProtectedResourcesSummary >`

the result of the RPC. The response message type ([google.cloud.kms.inventory.v1.ProtectedResourcesSummary](https://github.com/googleapis/googleapis/blob/6a474b31c53cc1797710206824a17b364a835d2d/google/cloud/kms/inventory/v1/key_tracking_service.proto#L79)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetProtectedResourcesSummary(google::cloud::kms::inventory::v1::GetProtectedResourcesSummaryRequest const &, Options)

Returns aggregate information about the resources protected by the given Cloud KMS \[CryptoKey\]\[google.cloud.kms.v1.CryptoKey\].

Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::kms::inventory::v1::GetProtectedResourcesSummaryRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.kms.inventory.v1.GetProtectedResourcesSummaryRequest](https://github.com/googleapis/googleapis/blob/6a474b31c53cc1797710206824a17b364a835d2d/google/cloud/kms/inventory/v1/key_tracking_service.proto#L66). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::kms::inventory::v1::ProtectedResourcesSummary >`

the result of the RPC. The response message type ([google.cloud.kms.inventory.v1.ProtectedResourcesSummary](https://github.com/googleapis/googleapis/blob/6a474b31c53cc1797710206824a17b364a835d2d/google/cloud/kms/inventory/v1/key_tracking_service.proto#L79)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SearchProtectedResources(std::string const &, std::string const &, Options)

Returns metadata about the resources protected by the given Cloud KMS \[CryptoKey\]\[google.cloud.kms.v1.CryptoKey\] in the given Cloud organization.

**Parameters**

**Name**

**Description**

`scope`

`std::string const &`  

Required. Resource name of the organization. Example: organizations/123

`crypto_key`

`std::string const &`  

Required. The resource name of the \[CryptoKey\]\[google.cloud.kms.v1.CryptoKey\].

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::kms::inventory::v1::ProtectedResource >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.kms.inventory.v1.ProtectedResource](https://github.com/googleapis/googleapis/blob/6a474b31c53cc1797710206824a17b364a835d2d/google/cloud/kms/inventory/v1/key_tracking_service.proto#L172), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### SearchProtectedResources(google::cloud::kms::inventory::v1::SearchProtectedResourcesRequest, Options)

Returns metadata about the resources protected by the given Cloud KMS \[CryptoKey\]\[google.cloud.kms.v1.CryptoKey\] in the given Cloud organization.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::kms::inventory::v1::SearchProtectedResourcesRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.kms.inventory.v1.SearchProtectedResourcesRequest](https://github.com/googleapis/googleapis/blob/6a474b31c53cc1797710206824a17b364a835d2d/google/cloud/kms/inventory/v1/key_tracking_service.proto#L111). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::kms::inventory::v1::ProtectedResource >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.kms.inventory.v1.ProtectedResource](https://github.com/googleapis/googleapis/blob/6a474b31c53cc1797710206824a17b364a835d2d/google/cloud/kms/inventory/v1/key_tracking_service.proto#L172), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
