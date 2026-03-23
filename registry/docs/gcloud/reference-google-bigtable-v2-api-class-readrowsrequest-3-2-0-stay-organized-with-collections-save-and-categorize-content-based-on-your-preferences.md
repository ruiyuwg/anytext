-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Bigtable v2 API - Class ReadRowsRequest (3.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.2.0keyboard\_arrow\_down

-   [3.26.0 (latest)](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/latest/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.25.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.25.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.24.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.24.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.23.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.23.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.22.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.22.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.21.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.21.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.20.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.20.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.19.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.19.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.18.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.18.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.17.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.17.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.16.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.16.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.15.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.14.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.13.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.12.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.11.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.10.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.9.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.8.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.7.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.6.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.5.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.4.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.3.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.2.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.1.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.0.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/2.6.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/2.5.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/2.4.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/2.3.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/2.2.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)

```
public sealed class ReadRowsRequest : IMessage<ReadRowsRequest>, IEquatable<ReadRowsRequest>, IDeepCloneable<ReadRowsRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Bigtable v2 API class ReadRowsRequest.

Request message for Bigtable.ReadRows.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ReadRowsRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[ReadRowsRequest](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.2.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[ReadRowsRequest](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.2.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[ReadRowsRequest](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.2.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Bigtable.V2](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.2.0/Google.Cloud.Bigtable.V2)

## Assembly

Google.Cloud.Bigtable.V2.dll

## Constructors

### ReadRowsRequest()

```
public ReadRowsRequest()
```

### ReadRowsRequest(ReadRowsRequest)

```
public ReadRowsRequest(ReadRowsRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[ReadRowsRequest](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.2.0/Google.Cloud.Bigtable.V2.ReadRowsRequest)`  

## Properties

### AppProfileId

```
public string AppProfileId { get; set; }
```

This value specifies routing for replication. This API only accepts the empty value of app\_profile\_id.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Filter

```
public RowFilter Filter { get; set; }
```

The filter to apply to the contents of the specified row(s). If unset, reads the entirety of each row.

**Property Value**

**Type**

**Description**

`[RowFilter](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.2.0/Google.Cloud.Bigtable.V2.RowFilter)`

### RequestStatsView

```
public ReadRowsRequest.Types.RequestStatsView RequestStatsView { get; set; }
```

The view into RequestStats, as described above.

**Property Value**

**Type**

**Description**

`[ReadRowsRequest.Types.RequestStatsView](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.2.0/Google.Cloud.Bigtable.V2.ReadRowsRequest.Types.RequestStatsView)`

### Rows

```
public RowSet Rows { get; set; }
```

The row keys and/or ranges to read sequentially. If not specified, reads from all rows.

**Property Value**

**Type**

**Description**

`[RowSet](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.2.0/Google.Cloud.Bigtable.V2.RowSet)`

### RowsLimit

```
public long RowsLimit { get; set; }
```

The read will stop after committing to N rows' worth of results. The default (zero) is to return all results.

**Property Value**

**Type**

**Description**

`[Int64](https://learn.microsoft.com/dotnet/api/system.int64)`

### TableName

```
public string TableName { get; set; }
```

Required. The unique name of the table from which to read. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### TableNameAsTableName

```
public TableName TableNameAsTableName { get; set; }
```

[TableName](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Bigtable.Common.V2/latest/Google.Cloud.Bigtable.Common.V2.TableName.html)\-typed view over the [TableName](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.2.0/Google.Cloud.Bigtable.V2.ReadRowsRequest#Google_Cloud_Bigtable_V2_ReadRowsRequest_TableName) resource name property.

**Property Value**

**Type**

**Description**

`[TableName](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Bigtable.Common.V2/latest/Google.Cloud.Bigtable.Common.V2.TableName.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
