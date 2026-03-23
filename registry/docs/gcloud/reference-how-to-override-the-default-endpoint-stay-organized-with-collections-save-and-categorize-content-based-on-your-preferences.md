-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# How to Override the Default Endpoint Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

In some cases, you may need to override the default endpoint used by the client library. Use the [EndpointOption](https://docs.cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1EndpointOption.html) when initializing the client library to change this default.

For example, this will override the default endpoint for `sql_v1::SqlAvailableDatabaseVersionsServiceClient`:

  ```
  // This configuration is common with Private Google Access:
  //     https://cloud.google.com/vpc/docs/private-google-access
  auto options = google::cloud::Options{}.set<google::cloud::EndpointOption>(
      "private.googleapis.com");
  auto vpc_client =
      google::cloud::sql_v1::SqlAvailableDatabaseVersionsServiceClient(
          google::cloud::sql_v1::
              MakeSqlAvailableDatabaseVersionsServiceConnectionRest(options));
```

Follow these links to find examples for other `*Client` classes:

-   [`sql_v1::SqlAvailableDatabaseVersionsServiceClient`](/cpp/docs/reference/sql/latest/sql_v1_1_1SqlAvailableDatabaseVersionsServiceClient-endpoint-snippet)
-   [`sql_v1::SqlBackupRunsServiceClient`](/cpp/docs/reference/sql/latest/sql_v1_1_1SqlBackupRunsServiceClient-endpoint-snippet)
-   [`sql_v1::SqlConnectServiceClient`](/cpp/docs/reference/sql/latest/sql_v1_1_1SqlConnectServiceClient-endpoint-snippet)
-   [`sql_v1::SqlDatabasesServiceClient`](/cpp/docs/reference/sql/latest/sql_v1_1_1SqlDatabasesServiceClient-endpoint-snippet)
-   [`sql_v1::SqlEventsServiceClient`](/cpp/docs/reference/sql/latest/sql_v1_1_1SqlEventsServiceClient-endpoint-snippet)
-   [`sql_v1::SqlFlagsServiceClient`](/cpp/docs/reference/sql/latest/sql_v1_1_1SqlFlagsServiceClient-endpoint-snippet)
-   [`sql_v1::SqlIamPoliciesServiceClient`](/cpp/docs/reference/sql/latest/sql_v1_1_1SqlIamPoliciesServiceClient-endpoint-snippet)
-   [`sql_v1::SqlInstanceNamesServiceClient`](/cpp/docs/reference/sql/latest/sql_v1_1_1SqlInstanceNamesServiceClient-endpoint-snippet)
-   [`sql_v1::SqlInstancesServiceClient`](/cpp/docs/reference/sql/latest/sql_v1_1_1SqlInstancesServiceClient-endpoint-snippet)
-   [`sql_v1::SqlOperationsServiceClient`](/cpp/docs/reference/sql/latest/sql_v1_1_1SqlOperationsServiceClient-endpoint-snippet)
-   [`sql_v1::SqlRegionsServiceClient`](/cpp/docs/reference/sql/latest/sql_v1_1_1SqlRegionsServiceClient-endpoint-snippet)
-   [`sql_v1::SqlSslCertsServiceClient`](/cpp/docs/reference/sql/latest/sql_v1_1_1SqlSslCertsServiceClient-endpoint-snippet)
-   [`sql_v1::SqlTiersServiceClient`](/cpp/docs/reference/sql/latest/sql_v1_1_1SqlTiersServiceClient-endpoint-snippet)
-   [`sql_v1::SqlUsersServiceClient`](/cpp/docs/reference/sql/latest/sql_v1_1_1SqlUsersServiceClient-endpoint-snippet)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
