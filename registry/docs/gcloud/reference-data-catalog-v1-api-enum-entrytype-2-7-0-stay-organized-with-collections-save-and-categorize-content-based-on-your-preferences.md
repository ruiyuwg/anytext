-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Data Catalog v1 API - Enum EntryType (2.7.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.7.0keyboard\_arrow\_down

-   [2.17.0 (latest)](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/latest/Google.Cloud.DataCatalog.V1.EntryType)
-   [2.16.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.16.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [2.15.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.15.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.14.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.13.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.12.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.11.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.10.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.9.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.8.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.7.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.6.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.5.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.4.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.3.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.2.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.1.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.0.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/1.8.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/1.7.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/1.6.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/1.5.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/1.4.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/1.3.0/Google.Cloud.DataCatalog.V1.EntryType)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/1.2.0/Google.Cloud.DataCatalog.V1.EntryType)

```
public enum EntryType
```

Reference documentation and code samples for the Data Catalog v1 API enum EntryType.

Metadata automatically ingested from Google Cloud resources like BigQuery tables or Pub/Sub topics always uses enum values from `EntryType` as the type of entry.

Other sources of metadata like Hive or Oracle databases can identify the type by either using one of the enum values from `EntryType` (for example, `FILESET` for a Cloud Storage fileset) or specifying a custom value using the [`Entry`](#resource:-entry) field `user_specified_type`. For more information, see [Surface files from Cloud Storage with fileset entries](/data-catalog/docs/how-to/filesets) or [Create custom entries for your data sources](/data-catalog/docs/how-to/custom-entries).

## Namespace

[Google.Cloud.DataCatalog.V1](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.7.0/Google.Cloud.DataCatalog.V1)

## Assembly

Google.Cloud.DataCatalog.V1.dll

## Fields

**Name**

**Description**

`Cluster`

A group of servers that work together. For example, a Kafka cluster.

`Dashboard`

A Dashboard, for example from Looker.

`Database`

A database.

`DatabaseSchema`

Schema within a relational database.

`DataSourceConnection`

Connection to a data source. For example, a BigQuery connection.

`DataStream`

An entry type for streaming entries. For example, a Pub/Sub topic.

`Explore`

A Looker Explore.

For more information, see [Looker Explore API](https://developers.looker.com/api/explorer/4.0/methods/LookmlModel/lookml_model_explore).

`Fileset`

An entry type for a set of files or objects. For example, a Cloud Storage fileset.

`Lake`

A Dataplex lake.

`Look`

A Looker Look.

For more information, see [Looker Look API](https://developers.looker.com/api/explorer/4.0/methods/Look).

`Model`

The type of models.

For more information, see [Supported models in BigQuery ML](/bigquery/docs/bqml-introduction#supported_models).

`Routine`

Routine, for example, a BigQuery routine.

`Service`

A service, for example, a Dataproc Metastore service.

`Table`

The entry type that has a GoogleSQL schema, including logical views.

`Unspecified`

Default unknown type.

`Zone`

A Dataplex zone.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
