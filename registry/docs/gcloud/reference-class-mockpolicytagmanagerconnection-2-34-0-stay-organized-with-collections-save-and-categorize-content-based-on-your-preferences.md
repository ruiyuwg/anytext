-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class MockPolicyTagManagerConnection (2.34.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

A class to mock `PolicyTagManagerConnection`.

Application developers may want to test their code with simulated responses, including errors, from an object of type `PolicyTagManagerClient`. To do so, construct an object of type `PolicyTagManagerClient` with an instance of this class. Then use the Google Test framework functions to program the behavior of this mock.

###### See Also

[This example](https://cloud.google.com/cpp/docs/reference/bigquery/2.34.0/bigquery-read-mock) for how to test your application with GoogleTest. While the example showcases types from the BigQuery library, the underlying principles apply for any pair of `*Client` and `*Connection`.

## Functions

### virtual options()

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Returns**

**Type**

**Description**

`Options`

### virtual CreateTaxonomy(google::cloud::datacatalog::v1::CreateTaxonomyRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::datacatalog::v1::CreateTaxonomyRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::datacatalog::v1::Taxonomy >`

### virtual DeleteTaxonomy(google::cloud::datacatalog::v1::DeleteTaxonomyRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::datacatalog::v1::DeleteTaxonomyRequest const &`  

**Returns**

**Type**

**Description**

`Status`

### virtual UpdateTaxonomy(google::cloud::datacatalog::v1::UpdateTaxonomyRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::datacatalog::v1::UpdateTaxonomyRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::datacatalog::v1::Taxonomy >`

### virtual ListTaxonomies(google::cloud::datacatalog::v1::ListTaxonomiesRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::datacatalog::v1::ListTaxonomiesRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::datacatalog::v1::Taxonomy >`

### virtual GetTaxonomy(google::cloud::datacatalog::v1::GetTaxonomyRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::datacatalog::v1::GetTaxonomyRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::datacatalog::v1::Taxonomy >`

### virtual CreatePolicyTag(google::cloud::datacatalog::v1::CreatePolicyTagRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::datacatalog::v1::CreatePolicyTagRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::datacatalog::v1::PolicyTag >`

### virtual DeletePolicyTag(google::cloud::datacatalog::v1::DeletePolicyTagRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::datacatalog::v1::DeletePolicyTagRequest const &`  

**Returns**

**Type**

**Description**

`Status`

### virtual UpdatePolicyTag(google::cloud::datacatalog::v1::UpdatePolicyTagRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::datacatalog::v1::UpdatePolicyTagRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::datacatalog::v1::PolicyTag >`

### virtual ListPolicyTags(google::cloud::datacatalog::v1::ListPolicyTagsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::datacatalog::v1::ListPolicyTagsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::datacatalog::v1::PolicyTag >`

### virtual GetPolicyTag(google::cloud::datacatalog::v1::GetPolicyTagRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::datacatalog::v1::GetPolicyTagRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::datacatalog::v1::PolicyTag >`

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

### virtual ListOperations(google::longrunning::ListOperationsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

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

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

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

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

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

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::longrunning::CancelOperationRequest const &`  

**Returns**

**Type**

**Description**

`Status`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
