-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# AlloyDB v1beta API - Class ExportClusterRequest (1.0.0-beta16) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.0.0-beta16 (latest)](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest)
-   [1.0.0-beta15](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/1.0.0-beta15/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest)

```
public sealed class ExportClusterRequest : IMessage<ExportClusterRequest>, IEquatable<ExportClusterRequest>, IDeepCloneable<ExportClusterRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the AlloyDB v1beta API class ExportClusterRequest.

Export cluster request.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ExportClusterRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ExportClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ExportClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ExportClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AlloyDb.V1Beta](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta)

## Assembly

Google.Cloud.AlloyDb.V1Beta.dll

## Constructors

### ExportClusterRequest()

```
public ExportClusterRequest()
```

### ExportClusterRequest(ExportClusterRequest)

```
public ExportClusterRequest(ExportClusterRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[ExportClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest)`  

## Properties

### ClusterName

```
public ClusterName ClusterName { get; set; }
```

[ClusterName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ClusterName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest#Google_Cloud_AlloyDb_V1Beta_ExportClusterRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[ClusterName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ClusterName)`

### CsvExportOptions

```
public ExportClusterRequest.Types.CsvExportOptions CsvExportOptions { get; set; }
```

Options for exporting data in CSV format. Required field to be set for CSV file type.

**Property Value**

**Type**

**Description**

`[ExportClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest)[Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest.Types)[CsvExportOptions](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest.Types.CsvExportOptions)`

### Database

```
public string Database { get; set; }
```

Required. Name of the database where the export command will be executed. Note - Value provided should be the same as expected from `SELECT current_database();` and NOT as a resource reference.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DestinationCase

```
public ExportClusterRequest.DestinationOneofCase DestinationCase { get; }
```

**Property Value**

**Type**

**Description**

`[ExportClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest)[DestinationOneofCase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest.DestinationOneofCase)`

### ExportOptionsCase

```
public ExportClusterRequest.ExportOptionsOneofCase ExportOptionsCase { get; }
```

**Property Value**

**Type**

**Description**

`[ExportClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest)[ExportOptionsOneofCase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest.ExportOptionsOneofCase)`

### GcsDestination

```
public GcsDestination GcsDestination { get; set; }
```

Required. Option to export data to cloud storage.

**Property Value**

**Type**

**Description**

`[GcsDestination](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.GcsDestination)`

### Name

```
public string Name { get; set; }
```

Required. The resource name of the cluster.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SqlExportOptions

```
public ExportClusterRequest.Types.SqlExportOptions SqlExportOptions { get; set; }
```

Options for exporting data in SQL format. Required field to be set for SQL file type.

**Property Value**

**Type**

**Description**

`[ExportClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest)[Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest.Types)[SqlExportOptions](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest.Types.SqlExportOptions)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
