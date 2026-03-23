-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class MockWebSecurityScannerConnection (2.23.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

A class to mock `WebSecurityScannerConnection`.

Application developers may want to test their code with simulated responses, including errors, from an object of type `WebSecurityScannerClient`. To do so, construct an object of type `WebSecurityScannerClient` with an instance of this class. Then use the Google Test framework functions to program the behavior of this mock.

###### See Also

[This example](https://cloud.google.com/cpp/docs/reference/bigquery/2.23.0/bigquery-read-mock) for how to test your application with GoogleTest. While the example showcases types from the BigQuery library, the underlying principles apply for any pair of `*Client` and `*Connection`.

## Functions

### virtual options()

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Returns**

**Type**

**Description**

`Options`

### virtual CreateScanConfig(google::cloud::websecurityscanner::v1::CreateScanConfigRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::websecurityscanner::v1::CreateScanConfigRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::websecurityscanner::v1::ScanConfig >`

### virtual DeleteScanConfig(google::cloud::websecurityscanner::v1::DeleteScanConfigRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::websecurityscanner::v1::DeleteScanConfigRequest const &`  

**Returns**

**Type**

**Description**

`Status`

### virtual GetScanConfig(google::cloud::websecurityscanner::v1::GetScanConfigRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::websecurityscanner::v1::GetScanConfigRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::websecurityscanner::v1::ScanConfig >`

### virtual ListScanConfigs(google::cloud::websecurityscanner::v1::ListScanConfigsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::websecurityscanner::v1::ListScanConfigsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::websecurityscanner::v1::ScanConfig >`

### virtual UpdateScanConfig(google::cloud::websecurityscanner::v1::UpdateScanConfigRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::websecurityscanner::v1::UpdateScanConfigRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::websecurityscanner::v1::ScanConfig >`

### virtual StartScanRun(google::cloud::websecurityscanner::v1::StartScanRunRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::websecurityscanner::v1::StartScanRunRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::websecurityscanner::v1::ScanRun >`

### virtual GetScanRun(google::cloud::websecurityscanner::v1::GetScanRunRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::websecurityscanner::v1::GetScanRunRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::websecurityscanner::v1::ScanRun >`

### virtual ListScanRuns(google::cloud::websecurityscanner::v1::ListScanRunsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::websecurityscanner::v1::ListScanRunsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::websecurityscanner::v1::ScanRun >`

### virtual StopScanRun(google::cloud::websecurityscanner::v1::StopScanRunRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::websecurityscanner::v1::StopScanRunRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::websecurityscanner::v1::ScanRun >`

### virtual ListCrawledUrls(google::cloud::websecurityscanner::v1::ListCrawledUrlsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::websecurityscanner::v1::ListCrawledUrlsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::websecurityscanner::v1::CrawledUrl >`

### virtual GetFinding(google::cloud::websecurityscanner::v1::GetFindingRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::websecurityscanner::v1::GetFindingRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::websecurityscanner::v1::Finding >`

### virtual ListFindings(google::cloud::websecurityscanner::v1::ListFindingsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::websecurityscanner::v1::ListFindingsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::websecurityscanner::v1::Finding >`

### virtual ListFindingTypeStats(google::cloud::websecurityscanner::v1::ListFindingTypeStatsRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::websecurityscanner::v1::ListFindingTypeStatsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::websecurityscanner::v1::ListFindingTypeStatsResponse >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
