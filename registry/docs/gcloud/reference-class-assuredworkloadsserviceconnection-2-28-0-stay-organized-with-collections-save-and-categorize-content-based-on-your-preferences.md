-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class AssuredWorkloadsServiceConnection (2.28.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

The [`AssuredWorkloadsServiceConnection`](/cpp/docs/reference/assuredworkloads/2.28.0/classgoogle_1_1cloud_1_1assuredworkloads__v1_1_1AssuredWorkloadsServiceConnection) object for [`AssuredWorkloadsServiceClient`](/cpp/docs/reference/assuredworkloads/2.28.0/classgoogle_1_1cloud_1_1assuredworkloads__v1_1_1AssuredWorkloadsServiceClient).

This interface defines virtual methods for each of the user-facing overload sets in [`AssuredWorkloadsServiceClient`](/cpp/docs/reference/assuredworkloads/2.28.0/classgoogle_1_1cloud_1_1assuredworkloads__v1_1_1AssuredWorkloadsServiceClient). This allows users to inject custom behavior (e.g., with a Google Mock object) when writing tests that use objects of type [`AssuredWorkloadsServiceClient`](/cpp/docs/reference/assuredworkloads/2.28.0/classgoogle_1_1cloud_1_1assuredworkloads__v1_1_1AssuredWorkloadsServiceClient).

To create a concrete instance, see [`MakeAssuredWorkloadsServiceConnection()`](/cpp/docs/reference/assuredworkloads/2.28.0/namespacegoogle_1_1cloud_1_1assuredworkloads__v1).

For mocking, see [`assuredworkloads_v1_mocks::MockAssuredWorkloadsServiceConnection`](/cpp/docs/reference/assuredworkloads/2.28.0/classgoogle_1_1cloud_1_1assuredworkloads__v1__mocks_1_1MockAssuredWorkloadsServiceConnection).

## Functions

### virtual options()

**Returns**

**Type**

**Description**

`Options`

### virtual CreateWorkload(google::cloud::assuredworkloads::v1::CreateWorkloadRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::assuredworkloads::v1::CreateWorkloadRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::assuredworkloads::v1::Workload > >`

### virtual CreateWorkload(NoAwaitTag, google::cloud::assuredworkloads::v1::CreateWorkloadRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::assuredworkloads::v1::CreateWorkloadRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual CreateWorkload(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::assuredworkloads::v1::Workload > >`

### virtual UpdateWorkload(google::cloud::assuredworkloads::v1::UpdateWorkloadRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::assuredworkloads::v1::UpdateWorkloadRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::assuredworkloads::v1::Workload >`

### virtual RestrictAllowedResources(google::cloud::assuredworkloads::v1::RestrictAllowedResourcesRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::assuredworkloads::v1::RestrictAllowedResourcesRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::assuredworkloads::v1::RestrictAllowedResourcesResponse >`

### virtual DeleteWorkload(google::cloud::assuredworkloads::v1::DeleteWorkloadRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::assuredworkloads::v1::DeleteWorkloadRequest const &`  

**Returns**

**Type**

**Description**

`Status`

### virtual GetWorkload(google::cloud::assuredworkloads::v1::GetWorkloadRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::assuredworkloads::v1::GetWorkloadRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::assuredworkloads::v1::Workload >`

### virtual ListWorkloads(google::cloud::assuredworkloads::v1::ListWorkloadsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::assuredworkloads::v1::ListWorkloadsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::assuredworkloads::v1::Workload >`

### virtual ListViolations(google::cloud::assuredworkloads::v1::ListViolationsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::assuredworkloads::v1::ListViolationsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::assuredworkloads::v1::Violation >`

### virtual GetViolation(google::cloud::assuredworkloads::v1::GetViolationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::assuredworkloads::v1::GetViolationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::assuredworkloads::v1::Violation >`

### virtual AcknowledgeViolation(google::cloud::assuredworkloads::v1::AcknowledgeViolationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::assuredworkloads::v1::AcknowledgeViolationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::assuredworkloads::v1::AcknowledgeViolationResponse >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
