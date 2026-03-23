-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google BigQuery v2 API - Enum CreateDisposition (3.8.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.8.0keyboard\_arrow\_down

-   [3.11.0 (latest)](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/latest/Google.Cloud.BigQuery.V2.CreateDisposition)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.10.0/Google.Cloud.BigQuery.V2.CreateDisposition)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.9.0/Google.Cloud.BigQuery.V2.CreateDisposition)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.8.0/Google.Cloud.BigQuery.V2.CreateDisposition)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.7.0/Google.Cloud.BigQuery.V2.CreateDisposition)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.6.0/Google.Cloud.BigQuery.V2.CreateDisposition)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.5.0/Google.Cloud.BigQuery.V2.CreateDisposition)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.4.0/Google.Cloud.BigQuery.V2.CreateDisposition)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.3.0/Google.Cloud.BigQuery.V2.CreateDisposition)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.2.0/Google.Cloud.BigQuery.V2.CreateDisposition)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.1.0/Google.Cloud.BigQuery.V2.CreateDisposition)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.0.0/Google.Cloud.BigQuery.V2.CreateDisposition)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/2.4.0/Google.Cloud.BigQuery.V2.CreateDisposition)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/2.3.0/Google.Cloud.BigQuery.V2.CreateDisposition)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/2.2.0/Google.Cloud.BigQuery.V2.CreateDisposition)

```
public enum CreateDisposition
```

Reference documentation and code samples for the Google BigQuery v2 API enum CreateDisposition.

Specifies whether a job is allowed to create new tables.

## Namespace

[Google.Cloud.BigQuery.V2](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.8.0/Google.Cloud.BigQuery.V2)

## Assembly

Google.Cloud.BigQuery.V2.dll

## Fields

**Name**

**Description**

`CreateIfNeeded`

If the table does not exist, BigQuery creates the table.

`CreateNever`

The table must already exist. If it does not, a 'notFound' error is returned in the job result.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
