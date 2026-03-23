-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class BigQueryPage (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.3.0keyboard\_arrow\_down

-   [3.11.0 (latest)](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/latest/Google.Cloud.BigQuery.V2.BigQueryPage)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.10.0/Google.Cloud.BigQuery.V2.BigQueryPage)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.9.0/Google.Cloud.BigQuery.V2.BigQueryPage)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.8.0/Google.Cloud.BigQuery.V2.BigQueryPage)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.7.0/Google.Cloud.BigQuery.V2.BigQueryPage)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.6.0/Google.Cloud.BigQuery.V2.BigQueryPage)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.5.0/Google.Cloud.BigQuery.V2.BigQueryPage)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.4.0/Google.Cloud.BigQuery.V2.BigQueryPage)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.3.0/Google.Cloud.BigQuery.V2.BigQueryPage)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.2.0/Google.Cloud.BigQuery.V2.BigQueryPage)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.1.0/Google.Cloud.BigQuery.V2.BigQueryPage)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.0.0/Google.Cloud.BigQuery.V2.BigQueryPage)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/2.4.0/Google.Cloud.BigQuery.V2.BigQueryPage)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/2.3.0/Google.Cloud.BigQuery.V2.BigQueryPage)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/2.2.0/Google.Cloud.BigQuery.V2.BigQueryPage)

```
public sealed class BigQueryPage
```

A page of rows loaded into memory from a [BigQueryResults](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/2.3.0/Google.Cloud.BigQuery.V2.BigQueryResults), up to a given maximum count. A page token may be present to indicate that more results are available.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> BigQueryPage

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.BigQuery.V2](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/2.3.0/Google.Cloud.BigQuery.V2)

## Assembly

Google.Cloud.BigQuery.V2.dll

## Constructors

### BigQueryPage(List<BigQueryRow>, TableSchema, JobReference, TableReference, String)

```
public BigQueryPage(List<BigQueryRow> rows, TableSchema schema, JobReference jobReference, TableReference tableReference, string nextPageToken)
```

Constructs a result set with the given rows and schema, retrieved from the specified job. This constructor exists for the sake of testing.

**Parameters**

**Name**

**Description**

`rows`

`[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[BigQueryRow](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/2.3.0/Google.Cloud.BigQuery.V2.BigQueryRow)>`  

The rows returned in the query. Must not be null.

`schema`

`[TableSchema](https://googleapis.dev/dotnet/Google.Apis.Bigquery.v2/1.54.0.2397/api/Google.Apis.Bigquery.v2.Data.TableSchema.html)`  

The schema of the results. Must not be null.

`jobReference`

`[JobReference](https://googleapis.dev/dotnet/Google.Apis.Bigquery.v2/1.54.0.2397/api/Google.Apis.Bigquery.v2.Data.JobReference.html)`  

Reference to the job this result set was fetched from. Must not be null.

`tableReference`

`[TableReference](https://googleapis.dev/dotnet/Google.Apis.Bigquery.v2/1.54.0.2397/api/Google.Apis.Bigquery.v2.Data.TableReference.html)`  

Reference to the table this result set may has been fetched from. May be null. (For example, script queries don't store results in tables.)

`nextPageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The page token to use to fetch further results. May be null, indicating that there are no more results.

## Properties

### JobReference

```
public JobReference JobReference { get; }
```

Reference to the job this result set was fetched from.

**Property Value**

**Type**

**Description**

`[JobReference](https://googleapis.dev/dotnet/Google.Apis.Bigquery.v2/1.54.0.2397/api/Google.Apis.Bigquery.v2.Data.JobReference.html)`

### NextPageToken

```
public string NextPageToken { get; }
```

If non-null, indicates more results may be available. Use this page token to fetch subsequent rows. This will never be present if fewer rows are returned than were requested, and will never be empty.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Rows

```
public IReadOnlyList<BigQueryRow> Rows { get; }
```

The rows returned in the query.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[BigQueryRow](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/2.3.0/Google.Cloud.BigQuery.V2.BigQueryRow)>`

### Schema

```
public TableSchema Schema { get; }
```

Schema of the results (even if there are no rows).

**Property Value**

**Type**

**Description**

`[TableSchema](https://googleapis.dev/dotnet/Google.Apis.Bigquery.v2/1.54.0.2397/api/Google.Apis.Bigquery.v2.Data.TableSchema.html)`

### TableReference

```
public TableReference TableReference { get; }
```

Reference to the table this result set may has been fetched from. May be null. (For example, script queries don't store results in tables.)

**Property Value**

**Type**

**Description**

`[TableReference](https://googleapis.dev/dotnet/Google.Apis.Bigquery.v2/1.54.0.2397/api/Google.Apis.Bigquery.v2.Data.TableReference.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
