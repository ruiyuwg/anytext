-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class MockTargetHttpsProxiesConnection (2.32.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1

A class to mock `TargetHttpsProxiesConnection`.

Application developers may want to test their code with simulated responses, including errors, from an object of type `TargetHttpsProxiesClient`. To do so, construct an object of type `TargetHttpsProxiesClient` with an instance of this class. Then use the Google Test framework functions to program the behavior of this mock.

###### See Also

[This example](https://cloud.google.com/cpp/docs/reference/bigquery/latest/bigquery-read-mock) for how to test your application with GoogleTest. While the example showcases types from the BigQuery library, the underlying principles apply for any pair of `*Client` and `*Connection`.

## Functions

### virtual options()

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Returns**

**Type**

**Description**

`Options`

### virtual AggregatedListTargetHttpsProxies(google::cloud::cpp::compute::target\_https\_proxies::v1::AggregatedListTargetHttpsProxiesRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::target_https_proxies::v1::AggregatedListTargetHttpsProxiesRequest`  

**Returns**

**Type**

**Description**

`StreamRange< std::pair< std::string, google::cloud::cpp::compute::v1::TargetHttpsProxiesScopedList > >`

### virtual DeleteTargetHttpsProxy(google::cloud::cpp::compute::v1::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual GetTargetHttpsProxy(google::cloud::cpp::compute::target\_https\_proxies::v1::GetTargetHttpsProxyRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::target_https_proxies::v1::GetTargetHttpsProxyRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::TargetHttpsProxy >`

### virtual InsertTargetHttpsProxy(google::cloud::cpp::compute::v1::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual ListTargetHttpsProxies(google::cloud::cpp::compute::target\_https\_proxies::v1::ListTargetHttpsProxiesRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::target_https_proxies::v1::ListTargetHttpsProxiesRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::cpp::compute::v1::TargetHttpsProxy >`

### virtual PatchTargetHttpsProxy(google::cloud::cpp::compute::v1::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual SetCertificateMap(google::cloud::cpp::compute::v1::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual SetQuicOverride(google::cloud::cpp::compute::v1::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual SetSslCertificates(google::cloud::cpp::compute::v1::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual SetSslPolicy(google::cloud::cpp::compute::v1::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual SetUrlMap(google::cloud::cpp::compute::v1::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
