-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class MockCertificateAuthorityServiceConnection (2.18.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

A class to mock `CertificateAuthorityServiceConnection`.

Application developers may want to test their code with simulated responses, including errors, from an object of type `CertificateAuthorityServiceClient`. To do so, construct an object of type `CertificateAuthorityServiceClient` with an instance of this class. Then use the Google Test framework functions to program the behavior of this mock.

###### See Also

[This example](https://cloud.google.com/cpp/docs/reference/bigquery/2.18.0/bigquery-read-mock) for how to test your application with GoogleTest. While the example showcases types from the BigQuery library, the underlying principles apply for any pair of `*Client` and `*Connection`.

## Functions

### virtual options()

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Returns**

**Type**

**Description**

`Options`

### virtual CreateCertificate(google::cloud::security::privateca::v1::CreateCertificateRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::CreateCertificateRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::security::privateca::v1::Certificate >`

### virtual GetCertificate(google::cloud::security::privateca::v1::GetCertificateRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::GetCertificateRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::security::privateca::v1::Certificate >`

### virtual ListCertificates(google::cloud::security::privateca::v1::ListCertificatesRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::ListCertificatesRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::security::privateca::v1::Certificate >`

### virtual RevokeCertificate(google::cloud::security::privateca::v1::RevokeCertificateRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::RevokeCertificateRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::security::privateca::v1::Certificate >`

### virtual UpdateCertificate(google::cloud::security::privateca::v1::UpdateCertificateRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::UpdateCertificateRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::security::privateca::v1::Certificate >`

### virtual ActivateCertificateAuthority(google::cloud::security::privateca::v1::ActivateCertificateAuthorityRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::ActivateCertificateAuthorityRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::security::privateca::v1::CertificateAuthority > >`

### virtual CreateCertificateAuthority(google::cloud::security::privateca::v1::CreateCertificateAuthorityRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::CreateCertificateAuthorityRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::security::privateca::v1::CertificateAuthority > >`

### virtual DisableCertificateAuthority(google::cloud::security::privateca::v1::DisableCertificateAuthorityRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::DisableCertificateAuthorityRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::security::privateca::v1::CertificateAuthority > >`

### virtual EnableCertificateAuthority(google::cloud::security::privateca::v1::EnableCertificateAuthorityRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::EnableCertificateAuthorityRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::security::privateca::v1::CertificateAuthority > >`

### virtual FetchCertificateAuthorityCsr(google::cloud::security::privateca::v1::FetchCertificateAuthorityCsrRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::FetchCertificateAuthorityCsrRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::security::privateca::v1::FetchCertificateAuthorityCsrResponse >`

### virtual GetCertificateAuthority(google::cloud::security::privateca::v1::GetCertificateAuthorityRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::GetCertificateAuthorityRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::security::privateca::v1::CertificateAuthority >`

### virtual ListCertificateAuthorities(google::cloud::security::privateca::v1::ListCertificateAuthoritiesRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::ListCertificateAuthoritiesRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::security::privateca::v1::CertificateAuthority >`

### virtual UndeleteCertificateAuthority(google::cloud::security::privateca::v1::UndeleteCertificateAuthorityRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::UndeleteCertificateAuthorityRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::security::privateca::v1::CertificateAuthority > >`

### virtual DeleteCertificateAuthority(google::cloud::security::privateca::v1::DeleteCertificateAuthorityRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::DeleteCertificateAuthorityRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::security::privateca::v1::CertificateAuthority > >`

### virtual UpdateCertificateAuthority(google::cloud::security::privateca::v1::UpdateCertificateAuthorityRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::UpdateCertificateAuthorityRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::security::privateca::v1::CertificateAuthority > >`

### virtual CreateCaPool(google::cloud::security::privateca::v1::CreateCaPoolRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::CreateCaPoolRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::security::privateca::v1::CaPool > >`

### virtual UpdateCaPool(google::cloud::security::privateca::v1::UpdateCaPoolRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::UpdateCaPoolRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::security::privateca::v1::CaPool > >`

### virtual GetCaPool(google::cloud::security::privateca::v1::GetCaPoolRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::GetCaPoolRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::security::privateca::v1::CaPool >`

### virtual ListCaPools(google::cloud::security::privateca::v1::ListCaPoolsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::ListCaPoolsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::security::privateca::v1::CaPool >`

### virtual DeleteCaPool(google::cloud::security::privateca::v1::DeleteCaPoolRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::DeleteCaPoolRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::security::privateca::v1::OperationMetadata > >`

### virtual FetchCaCerts(google::cloud::security::privateca::v1::FetchCaCertsRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::FetchCaCertsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::security::privateca::v1::FetchCaCertsResponse >`

### virtual GetCertificateRevocationList(google::cloud::security::privateca::v1::GetCertificateRevocationListRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::GetCertificateRevocationListRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::security::privateca::v1::CertificateRevocationList >`

### virtual ListCertificateRevocationLists(google::cloud::security::privateca::v1::ListCertificateRevocationListsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::ListCertificateRevocationListsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::security::privateca::v1::CertificateRevocationList >`

### virtual UpdateCertificateRevocationList(google::cloud::security::privateca::v1::UpdateCertificateRevocationListRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::UpdateCertificateRevocationListRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::security::privateca::v1::CertificateRevocationList > >`

### virtual CreateCertificateTemplate(google::cloud::security::privateca::v1::CreateCertificateTemplateRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::CreateCertificateTemplateRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::security::privateca::v1::CertificateTemplate > >`

### virtual DeleteCertificateTemplate(google::cloud::security::privateca::v1::DeleteCertificateTemplateRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::DeleteCertificateTemplateRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::security::privateca::v1::OperationMetadata > >`

### virtual GetCertificateTemplate(google::cloud::security::privateca::v1::GetCertificateTemplateRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::GetCertificateTemplateRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::security::privateca::v1::CertificateTemplate >`

### virtual ListCertificateTemplates(google::cloud::security::privateca::v1::ListCertificateTemplatesRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::ListCertificateTemplatesRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::security::privateca::v1::CertificateTemplate >`

### virtual UpdateCertificateTemplate(google::cloud::security::privateca::v1::UpdateCertificateTemplateRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::security::privateca::v1::UpdateCertificateTemplateRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::security::privateca::v1::CertificateTemplate > >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
