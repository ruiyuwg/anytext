-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# DataStream v1alpha1 API - Class MysqlColumn (2.0.0-alpha06) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.0.0-alpha06 (latest)](/dotnet/docs/reference/Google.Cloud.Datastream.V1Alpha1/latest/Google.Cloud.Datastream.V1Alpha1.MysqlColumn)
-   [2.0.0-alpha05](/dotnet/docs/reference/Google.Cloud.Datastream.V1Alpha1/2.0.0-alpha05/Google.Cloud.Datastream.V1Alpha1.MysqlColumn)
-   [1.0.0-beta02](/dotnet/docs/reference/Google.Cloud.Datastream.V1Alpha1/1.0.0-beta02/Google.Cloud.Datastream.V1Alpha1.MysqlColumn)

```
public sealed class MysqlColumn : IMessage<MysqlColumn>, IEquatable<MysqlColumn>, IDeepCloneable<MysqlColumn>, IBufferMessage, IMessage
```

Reference documentation and code samples for the DataStream v1alpha1 API class MysqlColumn.

MySQL Column.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> MysqlColumn

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[MysqlColumn](/dotnet/docs/reference/Google.Cloud.Datastream.V1Alpha1/latest/Google.Cloud.Datastream.V1Alpha1.MysqlColumn), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[MysqlColumn](/dotnet/docs/reference/Google.Cloud.Datastream.V1Alpha1/latest/Google.Cloud.Datastream.V1Alpha1.MysqlColumn), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[MysqlColumn](/dotnet/docs/reference/Google.Cloud.Datastream.V1Alpha1/latest/Google.Cloud.Datastream.V1Alpha1.MysqlColumn), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Datastream.V1Alpha1](/dotnet/docs/reference/Google.Cloud.Datastream.V1Alpha1/latest/Google.Cloud.Datastream.V1Alpha1)

## Assembly

Google.Cloud.Datastream.V1Alpha1.dll

## Constructors

### MysqlColumn()

```
public MysqlColumn()
```

### MysqlColumn(MysqlColumn)

```
public MysqlColumn(MysqlColumn other)
```

**Parameter**

**Name**

**Description**

`other`

`[MysqlColumn](/dotnet/docs/reference/Google.Cloud.Datastream.V1Alpha1/latest/Google.Cloud.Datastream.V1Alpha1.MysqlColumn)`  

## Properties

### Collation

```
public string Collation { get; set; }
```

Column collation.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ColumnName

```
public string ColumnName { get; set; }
```

Column name.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DataType

```
public string DataType { get; set; }
```

The MySQL data type. Full data types list can be found here: [https://dev.mysql.com/doc/refman/8.0/en/data-types.html](https://dev.mysql.com/doc/refman/8.0/en/data-types.html)

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Length

```
public int Length { get; set; }
```

Column length.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### Nullable

```
public bool Nullable { get; set; }
```

Whether or not the column can accept a null value.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### OrdinalPosition

```
public int OrdinalPosition { get; set; }
```

The ordinal position of the column in the table.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### PrimaryKey

```
public bool PrimaryKey { get; set; }
```

Whether or not the column represents a primary key.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
