-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class MetricServiceConnection (2.30.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

The [`MetricServiceConnection`](/cpp/docs/reference/monitoring/2.30.0/classgoogle_1_1cloud_1_1monitoring__v3_1_1MetricServiceConnection) object for [`MetricServiceClient`](/cpp/docs/reference/monitoring/2.30.0/classgoogle_1_1cloud_1_1monitoring__v3_1_1MetricServiceClient).

This interface defines virtual methods for each of the user-facing overload sets in [`MetricServiceClient`](/cpp/docs/reference/monitoring/2.30.0/classgoogle_1_1cloud_1_1monitoring__v3_1_1MetricServiceClient). This allows users to inject custom behavior (e.g., with a Google Mock object) when writing tests that use objects of type [`MetricServiceClient`](/cpp/docs/reference/monitoring/2.30.0/classgoogle_1_1cloud_1_1monitoring__v3_1_1MetricServiceClient).

To create a concrete instance, see [`MakeMetricServiceConnection()`](/cpp/docs/reference/monitoring/2.30.0/namespacegoogle_1_1cloud_1_1monitoring__v3).

For mocking, see [`monitoring_v3_mocks::MockMetricServiceConnection`](/cpp/docs/reference/monitoring/2.30.0/classgoogle_1_1cloud_1_1monitoring__v3__mocks_1_1MockMetricServiceConnection).

## Functions

### virtual options()

**Returns**

**Type**

**Description**

`Options`

### virtual ListMonitoredResourceDescriptors(google::monitoring::v3::ListMonitoredResourceDescriptorsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::monitoring::v3::ListMonitoredResourceDescriptorsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::api::MonitoredResourceDescriptor >`

### virtual GetMonitoredResourceDescriptor(google::monitoring::v3::GetMonitoredResourceDescriptorRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::monitoring::v3::GetMonitoredResourceDescriptorRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::api::MonitoredResourceDescriptor >`

### virtual ListMetricDescriptors(google::monitoring::v3::ListMetricDescriptorsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::monitoring::v3::ListMetricDescriptorsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::api::MetricDescriptor >`

### virtual GetMetricDescriptor(google::monitoring::v3::GetMetricDescriptorRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::monitoring::v3::GetMetricDescriptorRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::api::MetricDescriptor >`

### virtual CreateMetricDescriptor(google::monitoring::v3::CreateMetricDescriptorRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::monitoring::v3::CreateMetricDescriptorRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::api::MetricDescriptor >`

### virtual DeleteMetricDescriptor(google::monitoring::v3::DeleteMetricDescriptorRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::monitoring::v3::DeleteMetricDescriptorRequest const &`  

**Returns**

**Type**

**Description**

`Status`

### virtual ListTimeSeries(google::monitoring::v3::ListTimeSeriesRequest)

**Parameter**

**Name**

**Description**

`request`

`google::monitoring::v3::ListTimeSeriesRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::monitoring::v3::TimeSeries >`

### virtual CreateTimeSeries(google::monitoring::v3::CreateTimeSeriesRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::monitoring::v3::CreateTimeSeriesRequest const &`  

**Returns**

**Type**

**Description**

`Status`

### virtual CreateServiceTimeSeries(google::monitoring::v3::CreateTimeSeriesRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::monitoring::v3::CreateTimeSeriesRequest const &`  

**Returns**

**Type**

**Description**

`Status`

### virtual AsyncCreateTimeSeries(google::monitoring::v3::CreateTimeSeriesRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::monitoring::v3::CreateTimeSeriesRequest const &`  

**Returns**

**Type**

**Description**

`future< Status >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
