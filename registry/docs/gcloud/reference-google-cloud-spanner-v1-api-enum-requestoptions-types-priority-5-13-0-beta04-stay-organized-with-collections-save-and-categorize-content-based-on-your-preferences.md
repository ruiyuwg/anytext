-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Spanner v1 API - Enum RequestOptions.Types.Priority (5.13.0-beta04) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [5.13.0-beta04](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.13.0-beta04/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [5.13.0-beta03](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.13.0-beta03/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [5.12.0 (latest)](/dotnet/docs/reference/Google.Cloud.Spanner.V1/latest/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [5.11.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.11.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [5.10.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.10.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [5.9.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.9.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [5.8.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.8.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [5.7.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.7.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [5.6.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.6.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [5.5.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.5.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [5.4.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.4.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [5.3.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.3.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [5.2.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.2.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [5.1.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.1.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [5.0.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/5.0.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [4.6.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.6.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [4.5.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.5.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [4.4.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.4.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [4.3.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.3.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [4.2.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.2.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.1.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/4.0.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [3.15.1](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.15.1/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.14.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.13.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.12.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.11.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.10.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.9.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.8.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.7.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.6.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Spanner.V1/3.5.0/Google.Cloud.Spanner.V1.RequestOptions.Types.Priority)

```
public enum RequestOptions.Types.Priority
```

Reference documentation and code samples for the Google Cloud Spanner v1 API enum RequestOptions.Types.Priority.

The relative priority for requests. Note that priority isn't applicable for \[BeginTransaction\]\[google.spanner.v1.Spanner.BeginTransaction\].

The priority acts as a hint to the Cloud Spanner scheduler and doesn't guarantee priority or order of execution. For example:

-   Some parts of a write operation always execute at `PRIORITY_HIGH`, regardless of the specified priority. This can cause you to see an increase in high priority workload even when executing a low priority request. This can also potentially cause a priority inversion where a lower priority request is fulfilled ahead of a higher priority request.
-   If a transaction contains multiple operations with different priorities, Cloud Spanner doesn't guarantee to process the higher priority operations first. There might be other constraints to satisfy, such as the order of operations.

## Namespace

[Google.Cloud.Spanner.V1](/dotnet/docs/reference/Google.Cloud.Spanner.V1/latest/Google.Cloud.Spanner.V1)

## Assembly

Google.Cloud.Spanner.V1.dll

## Fields

**Name**

**Description**

`High`

This specifies that the request is high priority.

`Low`

This specifies that the request is low priority.

`Medium`

This specifies that the request is medium priority.

`Unspecified`

`PRIORITY_UNSPECIFIED` is equivalent to `PRIORITY_HIGH`.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
