-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ProtobufResultSet (6.111.1) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public interface ProtobufResultSet extends ResultSet
```

Interface for [ResultSet](/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.ResultSet)s that can return a protobuf value.

## Implements

[ResultSet](/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.ResultSet)

## Methods

### canGetProtobufValue(int columnIndex)

```
public abstract boolean canGetProtobufValue(int columnIndex)
```

Returns true if the protobuf value for the given column is still available.

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getProtobufValue(int columnIndex)

```
public abstract Value getProtobufValue(int columnIndex)
```

**Internal Only**: This feature is not stable for application use.

Returns the column value as a protobuf value.

This is an internal method not intended for external usage.

This method may only be called before the column value has been decoded to a plain Java object. This means that the [DecodeMode](/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.DecodeMode) that is used for the [ResultSet](/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.ResultSet) must be one of [DecodeMode#LAZY\_PER\_ROW](/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.DecodeMode#com_google_cloud_spanner_DecodeMode_LAZY_PER_ROW) and [DecodeMode#LAZY\_PER\_COL](/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.DecodeMode#com_google_cloud_spanner_DecodeMode_LAZY_PER_COL), and that the corresponding ResultSet#getValue(int), ResultSet#getBoolean(int), ... method may not yet have been called for the column.

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
