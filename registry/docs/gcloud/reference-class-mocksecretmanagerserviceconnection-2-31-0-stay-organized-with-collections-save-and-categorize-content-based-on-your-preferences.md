-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class MockSecretManagerServiceConnection (2.31.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0 2.10.1

A class to mock `SecretManagerServiceConnection`.

Application developers may want to test their code with simulated responses, including errors, from an object of type `SecretManagerServiceClient`. To do so, construct an object of type `SecretManagerServiceClient` with an instance of this class. Then use the Google Test framework functions to program the behavior of this mock.

###### See Also

[This example](https://cloud.google.com/cpp/docs/reference/bigquery/latest/bigquery-read-mock) for how to test your application with GoogleTest. While the example showcases types from the BigQuery library, the underlying principles apply for any pair of `*Client` and `*Connection`.

## Functions

### virtual options()

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Returns**

**Type**

**Description**

`Options`

### virtual ListSecrets(google::cloud::secretmanager::v1::ListSecretsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::secretmanager::v1::ListSecretsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::secretmanager::v1::Secret >`

### virtual CreateSecret(google::cloud::secretmanager::v1::CreateSecretRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::secretmanager::v1::CreateSecretRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::secretmanager::v1::Secret >`

### virtual AddSecretVersion(google::cloud::secretmanager::v1::AddSecretVersionRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::secretmanager::v1::AddSecretVersionRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::secretmanager::v1::SecretVersion >`

### virtual GetSecret(google::cloud::secretmanager::v1::GetSecretRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::secretmanager::v1::GetSecretRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::secretmanager::v1::Secret >`

### virtual UpdateSecret(google::cloud::secretmanager::v1::UpdateSecretRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::secretmanager::v1::UpdateSecretRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::secretmanager::v1::Secret >`

### virtual DeleteSecret(google::cloud::secretmanager::v1::DeleteSecretRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::secretmanager::v1::DeleteSecretRequest const &`  

**Returns**

**Type**

**Description**

`Status`

### virtual ListSecretVersions(google::cloud::secretmanager::v1::ListSecretVersionsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::secretmanager::v1::ListSecretVersionsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::secretmanager::v1::SecretVersion >`

### virtual GetSecretVersion(google::cloud::secretmanager::v1::GetSecretVersionRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::secretmanager::v1::GetSecretVersionRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::secretmanager::v1::SecretVersion >`

### virtual AccessSecretVersion(google::cloud::secretmanager::v1::AccessSecretVersionRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::secretmanager::v1::AccessSecretVersionRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::secretmanager::v1::AccessSecretVersionResponse >`

### virtual DisableSecretVersion(google::cloud::secretmanager::v1::DisableSecretVersionRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::secretmanager::v1::DisableSecretVersionRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::secretmanager::v1::SecretVersion >`

### virtual EnableSecretVersion(google::cloud::secretmanager::v1::EnableSecretVersionRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::secretmanager::v1::EnableSecretVersionRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::secretmanager::v1::SecretVersion >`

### virtual DestroySecretVersion(google::cloud::secretmanager::v1::DestroySecretVersionRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::secretmanager::v1::DestroySecretVersionRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::secretmanager::v1::SecretVersion >`

### virtual SetIamPolicy(google::iam::v1::SetIamPolicyRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

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

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

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

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::iam::v1::TestIamPermissionsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::TestIamPermissionsResponse >`

### virtual ListLocations(google::cloud::location::ListLocationsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

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

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::location::GetLocationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::location::Location >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
