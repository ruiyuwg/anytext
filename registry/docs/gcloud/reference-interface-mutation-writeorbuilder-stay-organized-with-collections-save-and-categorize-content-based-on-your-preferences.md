-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface Mutation.WriteOrBuilder Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public static interface Mutation.WriteOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getColumns(int index)

```
public abstract String getColumns(int index)
```

The names of the columns in table to be written. The list of columns must contain enough columns to allow Cloud Spanner to derive values for all primary key columns in the row(s) to be modified.

`repeated string columns = 2;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The columns at the given index.

### getColumnsBytes(int index)

```
public abstract ByteString getColumnsBytes(int index)
```

The names of the columns in table to be written. The list of columns must contain enough columns to allow Cloud Spanner to derive values for all primary key columns in the row(s) to be modified.

`repeated string columns = 2;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes of the columns at the given index.

### getColumnsCount()

```
public abstract int getColumnsCount()
```

The names of the columns in table to be written. The list of columns must contain enough columns to allow Cloud Spanner to derive values for all primary key columns in the row(s) to be modified.

`repeated string columns = 2;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of columns.

### getColumnsList()

```
public abstract List<String> getColumnsList()
```

The names of the columns in table to be written. The list of columns must contain enough columns to allow Cloud Spanner to derive values for all primary key columns in the row(s) to be modified.

`repeated string columns = 2;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

A list containing the columns.

### getTable()

```
public abstract String getTable()
```

Required. The table whose rows will be written.

`string table = 1;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The table.

### getTableBytes()

```
public abstract ByteString getTableBytes()
```

Required. The table whose rows will be written.

`string table = 1;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for table.

### getValues(int index)

```
public abstract ListValue getValues(int index)
```

The values to be written. `values` can contain more than one list of values. If it does, then multiple rows are written, one for each entry in `values`. Each list in `values` must have exactly as many entries as there are entries in columns above. Sending multiple lists is equivalent to sending multiple `Mutation`s, each containing one `values` entry and repeating table and columns. Individual values in each list are encoded as described here.

`repeated .google.protobuf.ListValue values = 3;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ListValue](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ListValue.html)

### getValuesCount()

```
public abstract int getValuesCount()
```

The values to be written. `values` can contain more than one list of values. If it does, then multiple rows are written, one for each entry in `values`. Each list in `values` must have exactly as many entries as there are entries in columns above. Sending multiple lists is equivalent to sending multiple `Mutation`s, each containing one `values` entry and repeating table and columns. Individual values in each list are encoded as described here.

`repeated .google.protobuf.ListValue values = 3;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getValuesList()

```
public abstract List<ListValue> getValuesList()
```

The values to be written. `values` can contain more than one list of values. If it does, then multiple rows are written, one for each entry in `values`. Each list in `values` must have exactly as many entries as there are entries in columns above. Sending multiple lists is equivalent to sending multiple `Mutation`s, each containing one `values` entry and repeating table and columns. Individual values in each list are encoded as described here.

`repeated .google.protobuf.ListValue values = 3;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ListValue](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ListValue.html)\>

### getValuesOrBuilder(int index)

```
public abstract ListValueOrBuilder getValuesOrBuilder(int index)
```

The values to be written. `values` can contain more than one list of values. If it does, then multiple rows are written, one for each entry in `values`. Each list in `values` must have exactly as many entries as there are entries in columns above. Sending multiple lists is equivalent to sending multiple `Mutation`s, each containing one `values` entry and repeating table and columns. Individual values in each list are encoded as described here.

`repeated .google.protobuf.ListValue values = 3;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ListValueOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ListValueOrBuilder.html)

### getValuesOrBuilderList()

```
public abstract List<? extends ListValueOrBuilder> getValuesOrBuilderList()
```

The values to be written. `values` can contain more than one list of values. If it does, then multiple rows are written, one for each entry in `values`. Each list in `values` must have exactly as many entries as there are entries in columns above. Sending multiple lists is equivalent to sending multiple `Mutation`s, each containing one `values` entry and repeating table and columns. Individual values in each list are encoded as described here.

`repeated .google.protobuf.ListValue values = 3;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.protobuf.ListValueOrBuilder\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
