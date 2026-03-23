-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class AutokeyAdminConnection (2.31.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0 2.10.1

The [`AutokeyAdminConnection`](/cpp/docs/reference/kms/2.31.0/classgoogle_1_1cloud_1_1kms__v1_1_1AutokeyAdminConnection) object for [`AutokeyAdminClient`](/cpp/docs/reference/kms/2.31.0/classgoogle_1_1cloud_1_1kms__v1_1_1AutokeyAdminClient).

This interface defines virtual methods for each of the user-facing overload sets in [`AutokeyAdminClient`](/cpp/docs/reference/kms/2.31.0/classgoogle_1_1cloud_1_1kms__v1_1_1AutokeyAdminClient). This allows users to inject custom behavior (e.g., with a Google Mock object) when writing tests that use objects of type [`AutokeyAdminClient`](/cpp/docs/reference/kms/2.31.0/classgoogle_1_1cloud_1_1kms__v1_1_1AutokeyAdminClient).

To create a concrete instance, see [`MakeAutokeyAdminConnection()`](/cpp/docs/reference/kms/2.31.0/namespacegoogle_1_1cloud_1_1kms__v1).

For mocking, see [`kms_v1_mocks::MockAutokeyAdminConnection`](/cpp/docs/reference/kms/2.31.0/classgoogle_1_1cloud_1_1kms__v1__mocks_1_1MockAutokeyAdminConnection).

## Functions

### virtual options()

**Returns**

**Type**

**Description**

`Options`

### virtual UpdateAutokeyConfig(google::cloud::kms::v1::UpdateAutokeyConfigRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::kms::v1::UpdateAutokeyConfigRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::kms::v1::AutokeyConfig >`

### virtual GetAutokeyConfig(google::cloud::kms::v1::GetAutokeyConfigRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::kms::v1::GetAutokeyConfigRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::kms::v1::AutokeyConfig >`

### virtual ShowEffectiveAutokeyConfig(google::cloud::kms::v1::ShowEffectiveAutokeyConfigRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::kms::v1::ShowEffectiveAutokeyConfigRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::kms::v1::ShowEffectiveAutokeyConfigResponse >`

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

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
