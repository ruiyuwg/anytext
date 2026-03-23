-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class FeaturestoreOnlineServingServiceConnection (2.36.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0

The [`FeaturestoreOnlineServingServiceConnection`](/cpp/docs/reference/aiplatform/2.36.0/classgoogle_1_1cloud_1_1aiplatform__v1_1_1FeaturestoreOnlineServingServiceConnection) object for [`FeaturestoreOnlineServingServiceClient`](/cpp/docs/reference/aiplatform/2.36.0/classgoogle_1_1cloud_1_1aiplatform__v1_1_1FeaturestoreOnlineServingServiceClient).

This interface defines virtual methods for each of the user-facing overload sets in [`FeaturestoreOnlineServingServiceClient`](/cpp/docs/reference/aiplatform/2.36.0/classgoogle_1_1cloud_1_1aiplatform__v1_1_1FeaturestoreOnlineServingServiceClient). This allows users to inject custom behavior (e.g., with a Google Mock object) when writing tests that use objects of type [`FeaturestoreOnlineServingServiceClient`](/cpp/docs/reference/aiplatform/2.36.0/classgoogle_1_1cloud_1_1aiplatform__v1_1_1FeaturestoreOnlineServingServiceClient).

To create a concrete instance, see [`MakeFeaturestoreOnlineServingServiceConnection()`](/cpp/docs/reference/aiplatform/2.36.0/namespacegoogle_1_1cloud_1_1aiplatform__v1).

For mocking, see [`aiplatform_v1_mocks::MockFeaturestoreOnlineServingServiceConnection`](/cpp/docs/reference/aiplatform/2.36.0/classgoogle_1_1cloud_1_1aiplatform__v1__mocks_1_1MockFeaturestoreOnlineServingServiceConnection).

## Functions

### virtual options()

**Returns**

**Type**

**Description**

`Options`

### virtual ReadFeatureValues(google::cloud::aiplatform::v1::ReadFeatureValuesRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::aiplatform::v1::ReadFeatureValuesRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::aiplatform::v1::ReadFeatureValuesResponse >`

### virtual StreamingReadFeatureValues(google::cloud::aiplatform::v1::StreamingReadFeatureValuesRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::aiplatform::v1::StreamingReadFeatureValuesRequest const &`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::aiplatform::v1::ReadFeatureValuesResponse >`

### virtual WriteFeatureValues(google::cloud::aiplatform::v1::WriteFeatureValuesRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::aiplatform::v1::WriteFeatureValuesRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::aiplatform::v1::WriteFeatureValuesResponse >`

### virtual ListLocations(google::cloud::location::ListLocationsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::location::ListLocationsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::location::Location >`

### virtual GetLocation(google::cloud::location::GetLocationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::location::GetLocationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::location::Location >`

### virtual SetIamPolicy(google::iam::v1::SetIamPolicyRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::iam::v1::SetIamPolicyRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::Policy >`

### virtual GetIamPolicy(google::iam::v1::GetIamPolicyRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::iam::v1::GetIamPolicyRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::Policy >`

### virtual TestIamPermissions(google::iam::v1::TestIamPermissionsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::iam::v1::TestIamPermissionsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::TestIamPermissionsResponse >`

### virtual ListOperations(google::longrunning::ListOperationsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::longrunning::ListOperationsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::longrunning::Operation >`

### virtual GetOperation(google::longrunning::GetOperationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::longrunning::GetOperationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual DeleteOperation(google::longrunning::DeleteOperationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::longrunning::DeleteOperationRequest const &`  

**Returns**

**Type**

**Description**

`Status`

### virtual CancelOperation(google::longrunning::CancelOperationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::longrunning::CancelOperationRequest const &`  

**Returns**

**Type**

**Description**

`Status`

### virtual WaitOperation(google::longrunning::WaitOperationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::longrunning::WaitOperationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
