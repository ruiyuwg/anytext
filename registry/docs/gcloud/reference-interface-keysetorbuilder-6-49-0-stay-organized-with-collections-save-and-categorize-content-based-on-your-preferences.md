-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface KeySetOrBuilder (6.49.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public interface KeySetOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAll()

```
public abstract boolean getAll()
```

For convenience `all` can be set to `true` to indicate that this `KeySet` matches all keys in the table or index. Note that any keys specified in `keys` or `ranges` are only yielded once.

`bool all = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The all.

### getKeys(int index)

```
public abstract ListValue getKeys(int index)
```

A list of specific keys. Entries in `keys` should have exactly as many elements as there are columns in the primary or index key with which this `KeySet` is used. Individual key values are encoded as described here.

`repeated .google.protobuf.ListValue keys = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ListValue](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ListValue.html)`

### getKeysCount()

```
public abstract int getKeysCount()
```

A list of specific keys. Entries in `keys` should have exactly as many elements as there are columns in the primary or index key with which this `KeySet` is used. Individual key values are encoded as described here.

`repeated .google.protobuf.ListValue keys = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getKeysList()

```
public abstract List<ListValue> getKeysList()
```

A list of specific keys. Entries in `keys` should have exactly as many elements as there are columns in the primary or index key with which this `KeySet` is used. Individual key values are encoded as described here.

`repeated .google.protobuf.ListValue keys = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ListValue](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ListValue.html)>`

### getKeysOrBuilder(int index)

```
public abstract ListValueOrBuilder getKeysOrBuilder(int index)
```

A list of specific keys. Entries in `keys` should have exactly as many elements as there are columns in the primary or index key with which this `KeySet` is used. Individual key values are encoded as described here.

`repeated .google.protobuf.ListValue keys = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ListValueOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ListValueOrBuilder.html)`

### getKeysOrBuilderList()

```
public abstract List<? extends ListValueOrBuilder> getKeysOrBuilderList()
```

A list of specific keys. Entries in `keys` should have exactly as many elements as there are columns in the primary or index key with which this `KeySet` is used. Individual key values are encoded as described here.

`repeated .google.protobuf.ListValue keys = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.protobuf.ListValueOrBuilder>`

### getRanges(int index)

```
public abstract KeyRange getRanges(int index)
```

A list of key ranges. See KeyRange for more information about key range specifications.

`repeated .google.spanner.v1.KeyRange ranges = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[KeyRange](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.spanner.v1.KeyRange)`

### getRangesCount()

```
public abstract int getRangesCount()
```

A list of key ranges. See KeyRange for more information about key range specifications.

`repeated .google.spanner.v1.KeyRange ranges = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getRangesList()

```
public abstract List<KeyRange> getRangesList()
```

A list of key ranges. See KeyRange for more information about key range specifications.

`repeated .google.spanner.v1.KeyRange ranges = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[KeyRange](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.spanner.v1.KeyRange)>`

### getRangesOrBuilder(int index)

```
public abstract KeyRangeOrBuilder getRangesOrBuilder(int index)
```

A list of key ranges. See KeyRange for more information about key range specifications.

`repeated .google.spanner.v1.KeyRange ranges = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[KeyRangeOrBuilder](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.spanner.v1.KeyRangeOrBuilder)`

### getRangesOrBuilderList()

```
public abstract List<? extends KeyRangeOrBuilder> getRangesOrBuilderList()
```

A list of key ranges. See KeyRange for more information about key range specifications.

`repeated .google.spanner.v1.KeyRange ranges = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.spanner.v1.KeyRangeOrBuilder>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
