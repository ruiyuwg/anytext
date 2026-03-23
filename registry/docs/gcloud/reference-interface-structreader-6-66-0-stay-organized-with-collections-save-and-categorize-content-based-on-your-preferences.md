-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface StructReader (6.66.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public interface StructReader
```

A base interface for reading the fields of a `STRUCT`. The Cloud Spanner yields `StructReader` instances as one of the subclasses [ResultSet](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.spanner.v1.ResultSet) or [Struct](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Struct), most commonly as the result of a read or query operation. At any point in time, a `StructReader` provides access to a single tuple of data comprising multiple typed columns. Each column may have a `NULL` or non-`NULL` value; in both cases, columns always have a type.

Column values are accessed using the `getTypeName()` methods; a set of methods exists for each Java type that a column may be read as, and depending on the type of the column, only a subset of those methods will be appropriate. For example, [#getString(int)](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.StructReader#com_google_cloud_spanner_StructReader_getString_int_) and [#getString(String)](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.StructReader#com_google_cloud_spanner_StructReader_getString_java_lang_String_) exist for reading columns of type [Type#string()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_string__); attempting to call those methods for columns of other types will result in an `IllegalStateException`. The `getTypeName()` methods should only be called for non-`NULL` values, otherwise a `NullPointerException` is raised; [#isNull(int)](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.StructReader#com_google_cloud_spanner_StructReader_isNull_int_)/[#isNull(String)](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.StructReader#com_google_cloud_spanner_StructReader_isNull_java_lang_String_) can be used to test for `NULL`\-ness if necessary.

All methods for accessing a column have overloads that accept an `int` column index and a `String` column name. Column indices are zero-based. The column name overloads will fail with `IllegalArgumentException` if the column name does not appear exactly once in this instance's [#getType()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.StructReader#com_google_cloud_spanner_StructReader_getType__). The `int` overloads are typically more efficient than their `String` counterparts.

`StructReader` itself does not define whether the implementing type is mutable or immutable. For example, [ResultSet](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.spanner.v1.ResultSet) is a mutable implementation of `StructReader`, where the `StructReader` methods provide access to the row that the result set is currently positioned over and [ResultSet#next()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.ResultSet#com_google_cloud_spanner_ResultSet_next__) changes that view to the next row, whereas [Struct](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Struct) is an immutable implementation of `StructReader`.

## Methods

### <T>getProtoEnum(int columnIndex, Function<Integer,ProtocolMessageEnum> method)

```
public default T <T>getProtoEnum(int columnIndex, Function<Integer,ProtocolMessageEnum> method)
```

To get the proto enum of type `T` from Struct.

**Parameters**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

Index of the column.

`method`

`[Function](https://docs.oracle.com/javase/8/docs/api/java/util/function/Function.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html),[ProtocolMessageEnum](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolMessageEnum.html)>`  

A function that takes enum integer constant as argument and returns the enum. Use method @code{forNumber} from generated enum class (eg: MyProtoEnum::forNumber). @see [forNumber](https://developers.google.com/protocol-buffers/docs/reference/java-generated#enum)

**Returns**

**Type**

**Description**

`T`

The value of a non-`NULL` column with type [Type#protoEnum(String)](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_protoEnum_java_lang_String_) ()}.

### <T>getProtoEnum(String columnName, Function<Integer,ProtocolMessageEnum> method)

```
public default T <T>getProtoEnum(String columnName, Function<Integer,ProtocolMessageEnum> method)
```

To get the proto enum of type `T` from Struct.

**Parameters**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Name of the column.

`method`

`[Function](https://docs.oracle.com/javase/8/docs/api/java/util/function/Function.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html),[ProtocolMessageEnum](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolMessageEnum.html)>`  

A function that takes enum integer constant as argument and returns the enum. Use method @code{forNumber} from generated enum class (eg: MyProtoEnum::forNumber). @see [forNumber](https://developers.google.com/protocol-buffers/docs/reference/java-generated#enum)

**Returns**

**Type**

**Description**

`T`

The value of a non-`NULL` column with type [Type#protoEnum(String)](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_protoEnum_java_lang_String_) ()}.

### <T>getProtoEnumList(int columnIndex, Function<Integer,ProtocolMessageEnum> method)

```
public default List<T> <T>getProtoEnumList(int columnIndex, Function<Integer,ProtocolMessageEnum> method)
```

To get the proto enum of type `T` from Struct.

**Parameters**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

Index of the column.

`method`

`[Function](https://docs.oracle.com/javase/8/docs/api/java/util/function/Function.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html),[ProtocolMessageEnum](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolMessageEnum.html)>`  

A function that takes enum integer constant as argument and returns the enum. Use method @code{forNumber} from generated enum class (eg: MyProtoEnum::forNumber). @see [forNumber](https://developers.google.com/protocol-buffers/docs/reference/java-generated#enum)

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<T>`

The value of a non-`NULL` column with type `Type.array(Type.protoEnum(String))`.

### <T>getProtoEnumList(String columnName, Function<Integer,ProtocolMessageEnum> method)

```
public default List<T> <T>getProtoEnumList(String columnName, Function<Integer,ProtocolMessageEnum> method)
```

To get the proto enum list of type `T` from Struct.

**Parameters**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Name of the column.

`method`

`[Function](https://docs.oracle.com/javase/8/docs/api/java/util/function/Function.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html),[ProtocolMessageEnum](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolMessageEnum.html)>`  

A function that takes enum integer constant as argument and returns the enum. Use method @code{forNumber} from generated enum class (eg: MyProtoEnum::forNumber). @see [forNumber](https://developers.google.com/protocol-buffers/docs/reference/java-generated#enum)

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<T>`

The value of a non-`NULL` column with type `Type.array(Type.protoEnum(String))`.

### <T>getProtoMessage(int columnIndex, T message)

```
public default T <T>getProtoMessage(int columnIndex, T message)
```

To get the proto message of generic type `T` from Struct.

**Parameters**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

Index of the column.

`message`

`T`  

Proto message object. Message can't be null as it's internally used to find the type of proto. Use @code{MyProtoClass.getDefaultInstance()}. @see [getDefaultInstance()](https://developers.google.com/protocol-buffers/docs/reference/java-generated#message)

**Returns**

**Type**

**Description**

`T`

The value of a non-`NULL` column with type [Type#proto(String)](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_proto_java_lang_String_) ()}.

### <T>getProtoMessage(String columnName, T message)

```
public default T <T>getProtoMessage(String columnName, T message)
```

To get the proto message of type `T` from Struct.

**Parameters**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Name of the column.

`message`

`T`  

Proto message object. Message can't be null as it's internally used to find the type of proto. Use @code{MyProtoClass.getDefaultInstance()}. @see [getDefaultInstance()](https://developers.google.com/protocol-buffers/docs/reference/java-generated#message)

**Returns**

**Type**

**Description**

`T`

The value of a non-`NULL` column with type [Type#proto(String)](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_proto_java_lang_String_) ()}.

### <T>getProtoMessageList(int columnIndex, T message)

```
public default List<T> <T>getProtoMessageList(int columnIndex, T message)
```

To get the proto message of generic type `T` from Struct.

**Parameters**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

Index of the column.

`message`

`T`  

Proto message object. Message can't be null as it's internally used to find the type of proto. Use @code{MyProtoClass.getDefaultInstance()}. @see [getDefaultInstance()](https://developers.google.com/protocol-buffers/docs/reference/java-generated#message)

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<T>`

The value of a non-`NULL` column with type `Type.array(Type.proto(String))`.

### <T>getProtoMessageList(String columnName, T message)

```
public default List<T> <T>getProtoMessageList(String columnName, T message)
```

To get the proto message of type `T` from Struct.

**Parameters**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Name of the column.

`message`

`T`  

Proto message object. Message can't be null as it's internally used to find the type of proto. Use @code{MyProtoClass.getDefaultInstance()}. @see [getDefaultInstance()](https://developers.google.com/protocol-buffers/docs/reference/java-generated#message)

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<T>`

The value of a non-`NULL` column with type `Type.array(Type.proto(String))`.

### getBigDecimal(int columnIndex)

```
public abstract BigDecimal getBigDecimal(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[BigDecimal](https://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html)`

the value of a non-`NULL` column with type [Type#numeric()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_numeric__).

### getBigDecimal(String columnName)

```
public abstract BigDecimal getBigDecimal(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[BigDecimal](https://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html)`

the value of a non-`NULL` column with type [Type#numeric()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_numeric__).

### getBigDecimalList(int columnIndex)

```
public abstract List<BigDecimal> getBigDecimalList(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[BigDecimal](https://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html)>`

the value of a non-`NULL` column with type `Type.array(Type.numeric())` The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getBigDecimalList(String columnName)

```
public abstract List<BigDecimal> getBigDecimalList(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[BigDecimal](https://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html)>`

the value of a non-`NULL` column with type `Type.array(Type.numeric())` The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getBoolean(int columnIndex)

```
public abstract boolean getBoolean(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

the value of a non-`NULL` column with type [Type#bool()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_bool__).

### getBoolean(String columnName)

```
public abstract boolean getBoolean(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

the value of a non-`NULL` column with type [Type#bool()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_bool__).

### getBooleanArray(int columnIndex)

```
public abstract boolean[] getBooleanArray(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)[]`

the value of a non-`NULL` column with type `Type.array(Type.bool())`.

### getBooleanArray(String columnName)

```
public abstract boolean[] getBooleanArray(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)[]`

the value of a non-`NULL` column with type `Type.array(Type.bool())`.

### getBooleanList(int columnIndex)

```
public abstract List<Boolean> getBooleanList(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Boolean](https://docs.oracle.com/javase/8/docs/api/java/lang/Boolean.html)>`

the value of a non-`NULL` column with type `Type.array(Type.bool())`. The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getBooleanList(String columnName)

```
public abstract List<Boolean> getBooleanList(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Boolean](https://docs.oracle.com/javase/8/docs/api/java/lang/Boolean.html)>`

the value of a non-`NULL` column with type `Type.array(Type.bool())`. The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getBytes(int columnIndex)

```
public abstract ByteArray getBytes(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`com.google.cloud.ByteArray`

the value of a non-`NULL` column with type [Type#bytes()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_bytes__).

### getBytes(String columnName)

```
public abstract ByteArray getBytes(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`com.google.cloud.ByteArray`

the value of a non-`NULL` column with type [Type#bytes()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_bytes__).

### getBytesList(int columnIndex)

```
public abstract List<ByteArray> getBytesList(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<com.google.cloud.ByteArray>`

the value of a non-`NULL` column with type `Type.array(Type.bytes())`. The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getBytesList(String columnName)

```
public abstract List<ByteArray> getBytesList(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<com.google.cloud.ByteArray>`

the value of a non-`NULL` column with type `Type.array(Type.bytes())`. The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getColumnCount()

```
public abstract int getColumnCount()
```

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

the number of columns in the underlying data. This includes any columns with `NULL` values.

### getColumnIndex(String columnName)

```
public abstract int getColumnIndex(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

the index of the column named `columnName`.

### getColumnType(int columnIndex)

```
public abstract Type getColumnType(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[Type](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type)`

the type of a column.

### getColumnType(String columnName)

```
public abstract Type getColumnType(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[Type](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type)`

the type of a column.

### getDate(int columnIndex)

```
public abstract Date getDate(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`com.google.cloud.Date`

the value of a non-`NULL` column with type [Type#date()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_date__).

### getDate(String columnName)

```
public abstract Date getDate(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`com.google.cloud.Date`

the value of a non-`NULL` column with type [Type#date()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_date__).

### getDateList(int columnIndex)

```
public abstract List<Date> getDateList(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<com.google.cloud.Date>`

the value of a non-`NULL` column with type `Type.array(Type.date())`. The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getDateList(String columnName)

```
public abstract List<Date> getDateList(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<com.google.cloud.Date>`

the value of a non-`NULL` column with type `Type.array(Type.date())`. The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getDouble(int columnIndex)

```
public abstract double getDouble(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

the value of a non-`NULL` column with type [Type#float64()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_float64__).

### getDouble(String columnName)

```
public abstract double getDouble(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

the value of a non-`NULL` column with type [Type#float64()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_float64__).

### getDoubleArray(int columnIndex)

```
public abstract double[] getDoubleArray(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)[]`

the value of a non-`NULL` column with type `Type.array(Type.float64())`.

### getDoubleArray(String columnName)

```
public abstract double[] getDoubleArray(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)[]`

the value of a non-`NULL` column with type `Type.array(Type.float64())`.

### getDoubleList(int columnIndex)

```
public abstract List<Double> getDoubleList(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Double](https://docs.oracle.com/javase/8/docs/api/java/lang/Double.html)>`

the value of a non-`NULL` column with type `Type.array(Type.float64())` The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getDoubleList(String columnName)

```
public abstract List<Double> getDoubleList(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Double](https://docs.oracle.com/javase/8/docs/api/java/lang/Double.html)>`

the value of a non-`NULL` column with type `Type.array(Type.float64())` The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getFloat(int columnIndex)

```
public default float getFloat(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

the value of a non-`NULL` column with type [Type#float32()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_float32__).

### getFloat(String columnName)

```
public default float getFloat(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

the value of a non-`NULL` column with type [Type#float32()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_float32__).

### getFloatArray(int columnIndex)

```
public default float[] getFloatArray(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)[]`

the value of a non-`NULL` column with type `Type.array(Type.float32())`.

### getFloatArray(String columnName)

```
public default float[] getFloatArray(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)[]`

the value of a non-`NULL` column with type `Type.array(Type.float32())`.

### getFloatList(int columnIndex)

```
public default List<Float> getFloatList(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Float](https://docs.oracle.com/javase/8/docs/api/java/lang/Float.html)>`

the value of a non-`NULL` column with type `Type.array(Type.float32())` The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getFloatList(String columnName)

```
public abstract List<Float> getFloatList(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Float](https://docs.oracle.com/javase/8/docs/api/java/lang/Float.html)>`

the value of a non-`NULL` column with type `Type.array(Type.float32())` The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getJson(int columnIndex)

```
public default String getJson(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

the value of a non-`NULL` column with type [Type#json()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_json__).

### getJson(String columnName)

```
public default String getJson(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

the value of a non-`NULL` column with type [Type#json()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_json__).

### getJsonList(int columnIndex)

```
public default List<String> getJsonList(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

the value of a non-`NULL` column with type `Type.array(Type.json())`. The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getJsonList(String columnName)

```
public default List<String> getJsonList(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

the value of a non-`NULL` column with type `Type.array(Type.json())`. The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getLong(int columnIndex)

```
public abstract long getLong(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

the value of a non-`NULL` column with type [Type#int64()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_int64__).

### getLong(String columnName)

```
public abstract long getLong(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

the value of a non-`NULL` column with type [Type#int64()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_int64__).

### getLongArray(int columnIndex)

```
public abstract long[] getLongArray(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)[]`

the value of a non-`NULL` column with type `Type.array(Type.int64())`.

### getLongArray(String columnName)

```
public abstract long[] getLongArray(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)[]`

the value of a non-`NULL` column with type `Type.array(Type.int64())`.

### getLongList(int columnIndex)

```
public abstract List<Long> getLongList(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Long](https://docs.oracle.com/javase/8/docs/api/java/lang/Long.html)>`

the value of a non-`NULL` column with type `Type.array(Type.int64())`. The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getLongList(String columnName)

```
public abstract List<Long> getLongList(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Long](https://docs.oracle.com/javase/8/docs/api/java/lang/Long.html)>`

the value of a non-`NULL` column with type `Type.array(Type.int64())`. The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getPgJsonb(int columnIndex)

```
public default String getPgJsonb(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

the value of a non-`NULL` column with type [Type#pgJsonb()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_pgJsonb__).

### getPgJsonb(String columnName)

```
public default String getPgJsonb(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

the value of a non-`NULL` column with type [Type#pgJsonb()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_pgJsonb__).

### getPgJsonbList(int columnIndex)

```
public default List<String> getPgJsonbList(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

the value of a non-`NULL` column with type `Type.array(Type.pgJsonb())` The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getPgJsonbList(String columnName)

```
public default List<String> getPgJsonbList(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

the value of a non-`NULL` column with type `Type.array(Type.pgJsonb())` The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getString(int columnIndex)

```
public abstract String getString(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

the value of a non-`NULL` column with type [Type#string()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_string__).

### getString(String columnName)

```
public abstract String getString(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

the value of a non-`NULL` column with type [Type#string()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_string__).

### getStringList(int columnIndex)

```
public abstract List<String> getStringList(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

the value of a non-`NULL` column with type `Type.array(Type.string())`. The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getStringList(String columnName)

```
public abstract List<String> getStringList(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

the value of a non-`NULL` column with type `Type.array(Type.string())`. The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getStructList(int columnIndex)

```
public abstract List<Struct> getStructList(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Struct](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Struct)>`

the value of a non-`NULL` column with type `Type.array(Type.struct(...))` The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getStructList(String columnName)

```
public abstract List<Struct> getStructList(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Struct](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Struct)>`

the value of a non-`NULL` column with type `Type.array(Type.struct(...))` The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getTimestamp(int columnIndex)

```
public abstract Timestamp getTimestamp(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`com.google.cloud.Timestamp`

the value of a non-`NULL` column with type [Type#timestamp()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_timestamp__).

### getTimestamp(String columnName)

```
public abstract Timestamp getTimestamp(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`com.google.cloud.Timestamp`

the value of a non-`NULL` column with type [Type#timestamp()](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type#com_google_cloud_spanner_Type_timestamp__).

### getTimestampList(int columnIndex)

```
public abstract List<Timestamp> getTimestampList(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<com.google.cloud.Timestamp>`

the value of a non-`NULL` column with type `Type.array(Type.timestamp())` The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getTimestampList(String columnName)

```
public abstract List<Timestamp> getTimestampList(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<com.google.cloud.Timestamp>`

the value of a non-`NULL` column with type `Type.array(Type.timestamp())` The list returned by this method is lazily constructed. Create a copy of it if you intend to access each element in the list multiple times.

### getType()

```
public abstract Type getType()
```

**Returns**

**Type**

**Description**

`[Type](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Type)`

the type of the underlying data. This will always be a `STRUCT` type, with fields corresponding to the data's columns. For the result of a read or query, this will always match the columns passed to the `read()` call or named in the query text, in order.

### getValue(int columnIndex)

```
public default Value getValue(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[Value](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Value)`

the value of a nullable column as a [Value](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Value).

### getValue(String columnName)

```
public default Value getValue(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[Value](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Value)`

the value of a nullable column as a [Value](/java/docs/reference/google-cloud-spanner/6.66.0/com.google.cloud.spanner.Value).

### isNull(int columnIndex)

```
public abstract boolean isNull(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

index of the column

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

`true` if a column contains a `NULL` value.

### isNull(String columnName)

```
public abstract boolean isNull(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the column

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

`true` if a column contains a `NULL` value.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
