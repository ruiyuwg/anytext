-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class IdentityAwareProxyOAuthServiceClient (2.28.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

API to programmatically create, list and retrieve Identity Aware Proxy (IAP) OAuth brands; and create, retrieve, delete and reset-secret of IAP OAuth clients.

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### IdentityAwareProxyOAuthServiceClient(IdentityAwareProxyOAuthServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`IdentityAwareProxyOAuthServiceClient const &`  

### IdentityAwareProxyOAuthServiceClient(IdentityAwareProxyOAuthServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`IdentityAwareProxyOAuthServiceClient &&`  

### IdentityAwareProxyOAuthServiceClient(std::shared\_ptr< IdentityAwareProxyOAuthServiceConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< IdentityAwareProxyOAuthServiceConnection >`  

`opts`

`Options`  

## Operators

### operator=(IdentityAwareProxyOAuthServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`IdentityAwareProxyOAuthServiceClient const &`  

**Returns**

**Type**

**Description**

`IdentityAwareProxyOAuthServiceClient &`

### operator=(IdentityAwareProxyOAuthServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`IdentityAwareProxyOAuthServiceClient &&`  

**Returns**

**Type**

**Description**

`IdentityAwareProxyOAuthServiceClient &`

## Functions

### ListBrands(google::cloud::iap::v1::ListBrandsRequest const &, Options)

Lists the existing brands for the project.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::iap::v1::ListBrandsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.iap.v1.ListBrandsRequest](https://github.com/googleapis/googleapis/blob/0a250ef2318e97b1b3153423e7af0fdbe5731741/google/cloud/iap/v1/service.proto#L613). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::iap::v1::ListBrandsResponse >`

the result of the RPC. The response message type ([google.cloud.iap.v1.ListBrandsResponse](https://github.com/googleapis/googleapis/blob/0a250ef2318e97b1b3153423e7af0fdbe5731741/google/cloud/iap/v1/service.proto#L620)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateBrand(google::cloud::iap::v1::CreateBrandRequest const &, Options)

Constructs a new OAuth brand for the project if one does not exist.

The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::iap::v1::CreateBrandRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.iap.v1.CreateBrandRequest](https://github.com/googleapis/googleapis/blob/0a250ef2318e97b1b3153423e7af0fdbe5731741/google/cloud/iap/v1/service.proto#L626). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::iap::v1::Brand >`

the result of the RPC. The response message type ([google.cloud.iap.v1.Brand](https://github.com/googleapis/googleapis/blob/0a250ef2318e97b1b3153423e7af0fdbe5731741/google/cloud/iap/v1/service.proto#L712)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetBrand(google::cloud::iap::v1::GetBrandRequest const &, Options)

Retrieves the OAuth brand of the project.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::iap::v1::GetBrandRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.iap.v1.GetBrandRequest](https://github.com/googleapis/googleapis/blob/0a250ef2318e97b1b3153423e7af0fdbe5731741/google/cloud/iap/v1/service.proto#L636). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::iap::v1::Brand >`

the result of the RPC. The response message type ([google.cloud.iap.v1.Brand](https://github.com/googleapis/googleapis/blob/0a250ef2318e97b1b3153423e7af0fdbe5731741/google/cloud/iap/v1/service.proto#L712)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateIdentityAwareProxyClient(google::cloud::iap::v1::CreateIdentityAwareProxyClientRequest const &, Options)

Creates an Identity Aware Proxy (IAP) OAuth client.

The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::iap::v1::CreateIdentityAwareProxyClientRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.iap.v1.CreateIdentityAwareProxyClientRequest](https://github.com/googleapis/googleapis/blob/0a250ef2318e97b1b3153423e7af0fdbe5731741/google/cloud/iap/v1/service.proto#L674). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::iap::v1::IdentityAwareProxyClient >`

the result of the RPC. The response message type ([google.cloud.iap.v1.IdentityAwareProxyClient](https://github.com/googleapis/googleapis/blob/0a250ef2318e97b1b3153423e7af0fdbe5731741/google/cloud/iap/v1/service.proto#L730)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListIdentityAwareProxyClients(google::cloud::iap::v1::ListIdentityAwareProxyClientsRequest, Options)

Lists the existing clients for the brand.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::iap::v1::ListIdentityAwareProxyClientsRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.iap.v1.ListIdentityAwareProxyClientsRequest](https://github.com/googleapis/googleapis/blob/0a250ef2318e97b1b3153423e7af0fdbe5731741/google/cloud/iap/v1/service.proto#L643). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::iap::v1::IdentityAwareProxyClient >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.iap.v1.IdentityAwareProxyClient](https://github.com/googleapis/googleapis/blob/0a250ef2318e97b1b3153423e7af0fdbe5731741/google/cloud/iap/v1/service.proto#L730), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetIdentityAwareProxyClient(google::cloud::iap::v1::GetIdentityAwareProxyClientRequest const &, Options)

Retrieves an Identity Aware Proxy (IAP) OAuth client.

Requires that the client is owned by IAP.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::iap::v1::GetIdentityAwareProxyClientRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.iap.v1.GetIdentityAwareProxyClientRequest](https://github.com/googleapis/googleapis/blob/0a250ef2318e97b1b3153423e7af0fdbe5731741/google/cloud/iap/v1/service.proto#L687). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::iap::v1::IdentityAwareProxyClient >`

the result of the RPC. The response message type ([google.cloud.iap.v1.IdentityAwareProxyClient](https://github.com/googleapis/googleapis/blob/0a250ef2318e97b1b3153423e7af0fdbe5731741/google/cloud/iap/v1/service.proto#L730)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ResetIdentityAwareProxyClientSecret(google::cloud::iap::v1::ResetIdentityAwareProxyClientSecretRequest const &, Options)

Resets an Identity Aware Proxy (IAP) OAuth client secret.

Useful if the secret was compromised. Requires that the client is owned by IAP.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::iap::v1::ResetIdentityAwareProxyClientSecretRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.iap.v1.ResetIdentityAwareProxyClientSecretRequest](https://github.com/googleapis/googleapis/blob/0a250ef2318e97b1b3153423e7af0fdbe5731741/google/cloud/iap/v1/service.proto#L695). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::iap::v1::IdentityAwareProxyClient >`

the result of the RPC. The response message type ([google.cloud.iap.v1.IdentityAwareProxyClient](https://github.com/googleapis/googleapis/blob/0a250ef2318e97b1b3153423e7af0fdbe5731741/google/cloud/iap/v1/service.proto#L730)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### DeleteIdentityAwareProxyClient(google::cloud::iap::v1::DeleteIdentityAwareProxyClientRequest const &, Options)

Deletes an Identity Aware Proxy (IAP) OAuth client.

Useful for removing obsolete clients, managing the number of clients in a given project, and cleaning up after tests. Requires that the client is owned by IAP.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::iap::v1::DeleteIdentityAwareProxyClientRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.iap.v1.DeleteIdentityAwareProxyClientRequest](https://github.com/googleapis/googleapis/blob/0a250ef2318e97b1b3153423e7af0fdbe5731741/google/cloud/iap/v1/service.proto#L703). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

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
