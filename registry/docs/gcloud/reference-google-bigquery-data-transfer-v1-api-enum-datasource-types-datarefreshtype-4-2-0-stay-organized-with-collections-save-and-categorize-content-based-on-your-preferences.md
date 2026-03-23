-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google BigQuery Data Transfer v1 API - Enum DataSource.Types.DataRefreshType (4.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 4.2.0keyboard\_arrow\_down

-   [4.11.0 (latest)](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/latest/Google.Cloud.BigQuery.DataTransfer.V1.DataSource.Types.DataRefreshType)
-   [4.10.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.10.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource.Types.DataRefreshType)
-   [4.9.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.9.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource.Types.DataRefreshType)
-   [4.8.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.8.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource.Types.DataRefreshType)
-   [4.7.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource.Types.DataRefreshType)
-   [4.6.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.6.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource.Types.DataRefreshType)
-   [4.5.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.5.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource.Types.DataRefreshType)
-   [4.4.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.4.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource.Types.DataRefreshType)
-   [4.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.3.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource.Types.DataRefreshType)
-   [4.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.2.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource.Types.DataRefreshType)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.1.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource.Types.DataRefreshType)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.0.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource.Types.DataRefreshType)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/3.4.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource.Types.DataRefreshType)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/3.3.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource.Types.DataRefreshType)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/3.2.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource.Types.DataRefreshType)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/3.1.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource.Types.DataRefreshType)

```
public enum DataRefreshType
```

Reference documentation and code samples for the Google BigQuery Data Transfer v1 API enum DataSource.Types.DataRefreshType.

Represents how the data source supports data auto refresh.

## Namespace

[Google.Cloud.BigQuery.DataTransfer.V1](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.2.0/Google.Cloud.BigQuery.DataTransfer.V1)

## Assembly

Google.Cloud.BigQuery.DataTransfer.V1.dll

## Fields

**Name**

**Description**

`CustomSlidingWindow`

The data source supports data auto refresh, and runs will be scheduled for the past few days. Allows custom values to be set for each transfer config.

`SlidingWindow`

The data source supports data auto refresh, and runs will be scheduled for the past few days. Does not allow custom values to be set for each transfer config.

`Unspecified`

The data source won't support data auto refresh, which is default value.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
