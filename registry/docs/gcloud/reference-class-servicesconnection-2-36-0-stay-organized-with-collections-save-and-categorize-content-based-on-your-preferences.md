-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class ServicesConnection (2.36.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

The [`ServicesConnection`](/cpp/docs/reference/appengine/2.36.0/classgoogle_1_1cloud_1_1appengine__v1_1_1ServicesConnection) object for [`ServicesClient`](/cpp/docs/reference/appengine/2.36.0/classgoogle_1_1cloud_1_1appengine__v1_1_1ServicesClient).

This interface defines virtual methods for each of the user-facing overload sets in [`ServicesClient`](/cpp/docs/reference/appengine/2.36.0/classgoogle_1_1cloud_1_1appengine__v1_1_1ServicesClient). This allows users to inject custom behavior (e.g., with a Google Mock object) when writing tests that use objects of type [`ServicesClient`](/cpp/docs/reference/appengine/2.36.0/classgoogle_1_1cloud_1_1appengine__v1_1_1ServicesClient).

To create a concrete instance, see [`MakeServicesConnection()`](/cpp/docs/reference/appengine/2.36.0/namespacegoogle_1_1cloud_1_1appengine__v1).

For mocking, see [`appengine_v1_mocks::MockServicesConnection`](/cpp/docs/reference/appengine/2.36.0/classgoogle_1_1cloud_1_1appengine__v1__mocks_1_1MockServicesConnection).

## Functions

### virtual options()

**Returns**

**Type**

**Description**

`Options`

### virtual ListServices(google::appengine::v1::ListServicesRequest)

**Parameter**

**Name**

**Description**

`request`

`google::appengine::v1::ListServicesRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::appengine::v1::Service >`

### virtual GetService(google::appengine::v1::GetServiceRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::appengine::v1::GetServiceRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::appengine::v1::Service >`

### virtual UpdateService(google::appengine::v1::UpdateServiceRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::appengine::v1::UpdateServiceRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::appengine::v1::Service > >`

### virtual UpdateService(NoAwaitTag, google::appengine::v1::UpdateServiceRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::appengine::v1::UpdateServiceRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual UpdateService(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::appengine::v1::Service > >`

### virtual DeleteService(google::appengine::v1::DeleteServiceRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::appengine::v1::DeleteServiceRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::appengine::v1::OperationMetadataV1 > >`

### virtual DeleteService(NoAwaitTag, google::appengine::v1::DeleteServiceRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::appengine::v1::DeleteServiceRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual DeleteService(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::appengine::v1::OperationMetadataV1 > >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
