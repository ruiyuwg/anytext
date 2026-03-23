-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Struct (6.83.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public abstract class Struct extends AbstractStructReader implements Serializable
```

Represents a non-`NULL` value of [Type.Code#STRUCT](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.Type.Code#com_google_cloud_spanner_Type_Code_STRUCT). Such values are a tuple of named and typed columns, where individual columns may be null. Individual rows from a read or query operation can be considered as structs; [ResultSet#getCurrentRowAsStruct()](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.ResultSet#com_google_cloud_spanner_ResultSet_getCurrentRowAsStruct__) allows an immutable struct to be created from the row that the result set is currently positioned over.

`Struct` instances are immutable.

This class does not support representing typed `NULL` `Struct` values.

However, struct values _inside_ SQL queries are always typed and can be externally supplied to a query only in the form of struct/array-of-struct query parameter values for which typed `NULL` struct values can be specified in the following ways:

1\. As a standalone `NULL` struct value or as a nested struct field value, constructed using [ValueBinder#to(Type, Struct)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.ValueBinder#com_google_cloud_spanner_ValueBinder_to_com_google_cloud_spanner_Type_com_google_cloud_spanner_Struct_) or [Value#struct(Type, Struct)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.Value#com_google_cloud_spanner_Value_struct_com_google_cloud_spanner_Type_com_google_cloud_spanner_Struct_).

2\. As as a null `Struct` reference representing a `NULL` struct typed element value inside an array/list of '`Struct`' references, that is used to construct an array-of-struct value using [Value#structArray(Type, Iterable)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.Value#com_google_cloud_spanner_Value_structArray_com_google_cloud_spanner_Type_java_lang_Iterable_com_google_cloud_spanner_Struct__) or [ValueBinder#toStructArray(Type, Iterable)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.ValueBinder#com_google_cloud_spanner_ValueBinder_toStructArray_com_google_cloud_spanner_Type_java_lang_Iterable_com_google_cloud_spanner_Struct__). In this case, the type of the `NULL` struct value is assumed to be the same as the explicitly specified struct element type of the array/list.

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractStructReader](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader) \> Struct

## Implements

[Serializable](https://docs.oracle.com/javase/8/docs/api/java/io/Serializable.html)

## Inherited Members

[AbstractStructReader.<T>getProtoEnum(int,Function<Integer,ProtocolMessageEnum>)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader__T_getProtoEnum_int_java_util_function_Function_java_lang_Integer_com_google_protobuf_ProtocolMessageEnum__)

[AbstractStructReader.<T>getProtoEnum(String,Function<Integer,ProtocolMessageEnum>)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader__T_getProtoEnum_java_lang_String_java_util_function_Function_java_lang_Integer_com_google_protobuf_ProtocolMessageEnum__)

[AbstractStructReader.<T>getProtoEnumInternal(int,Function<Integer,ProtocolMessageEnum>)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader__T_getProtoEnumInternal_int_java_util_function_Function_java_lang_Integer_com_google_protobuf_ProtocolMessageEnum__)

[AbstractStructReader.<T>getProtoEnumList(int,Function<Integer,ProtocolMessageEnum>)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader__T_getProtoEnumList_int_java_util_function_Function_java_lang_Integer_com_google_protobuf_ProtocolMessageEnum__)

[AbstractStructReader.<T>getProtoEnumList(String,Function<Integer,ProtocolMessageEnum>)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader__T_getProtoEnumList_java_lang_String_java_util_function_Function_java_lang_Integer_com_google_protobuf_ProtocolMessageEnum__)

[AbstractStructReader.<T>getProtoEnumListInternal(int,Function<Integer,ProtocolMessageEnum>)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader__T_getProtoEnumListInternal_int_java_util_function_Function_java_lang_Integer_com_google_protobuf_ProtocolMessageEnum__)

[AbstractStructReader.<T>getProtoMessage(int,T)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader__T_getProtoMessage_int_T_)

[AbstractStructReader.<T>getProtoMessage(String,T)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader__T_getProtoMessage_java_lang_String_T_)

[AbstractStructReader.<T>getProtoMessageInternal(int,T)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader__T_getProtoMessageInternal_int_T_)

[AbstractStructReader.<T>getProtoMessageList(int,T)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader__T_getProtoMessageList_int_T_)

[AbstractStructReader.<T>getProtoMessageList(String,T)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader__T_getProtoMessageList_java_lang_String_T_)

[AbstractStructReader.<T>getProtoMessageListInternal(int,T)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader__T_getProtoMessageListInternal_int_T_)

[AbstractStructReader.checkNonNull(int,Object)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_checkNonNull_int_java_lang_Object_)

[AbstractStructReader.getBigDecimal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBigDecimal_int_)

[AbstractStructReader.getBigDecimal(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBigDecimal_java_lang_String_)

[AbstractStructReader.getBigDecimalInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBigDecimalInternal_int_)

[AbstractStructReader.getBigDecimalList(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBigDecimalList_int_)

[AbstractStructReader.getBigDecimalList(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBigDecimalList_java_lang_String_)

[AbstractStructReader.getBigDecimalListInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBigDecimalListInternal_int_)

[AbstractStructReader.getBoolean(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBoolean_int_)

[AbstractStructReader.getBoolean(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBoolean_java_lang_String_)

[AbstractStructReader.getBooleanArray(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBooleanArray_int_)

[AbstractStructReader.getBooleanArray(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBooleanArray_java_lang_String_)

[AbstractStructReader.getBooleanArrayInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBooleanArrayInternal_int_)

[AbstractStructReader.getBooleanInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBooleanInternal_int_)

[AbstractStructReader.getBooleanList(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBooleanList_int_)

[AbstractStructReader.getBooleanList(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBooleanList_java_lang_String_)

[AbstractStructReader.getBooleanListInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBooleanListInternal_int_)

[AbstractStructReader.getBytes(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBytes_int_)

[AbstractStructReader.getBytes(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBytes_java_lang_String_)

[AbstractStructReader.getBytesInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBytesInternal_int_)

[AbstractStructReader.getBytesList(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBytesList_int_)

[AbstractStructReader.getBytesList(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBytesList_java_lang_String_)

[AbstractStructReader.getBytesListInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getBytesListInternal_int_)

[AbstractStructReader.getColumnCount()](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getColumnCount__)

[AbstractStructReader.getColumnIndex(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getColumnIndex_java_lang_String_)

[AbstractStructReader.getColumnType(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getColumnType_int_)

[AbstractStructReader.getColumnType(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getColumnType_java_lang_String_)

[AbstractStructReader.getDate(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getDate_int_)

[AbstractStructReader.getDate(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getDate_java_lang_String_)

[AbstractStructReader.getDateInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getDateInternal_int_)

[AbstractStructReader.getDateList(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getDateList_int_)

[AbstractStructReader.getDateList(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getDateList_java_lang_String_)

[AbstractStructReader.getDateListInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getDateListInternal_int_)

[AbstractStructReader.getDouble(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getDouble_int_)

[AbstractStructReader.getDouble(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getDouble_java_lang_String_)

[AbstractStructReader.getDoubleArray(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getDoubleArray_int_)

[AbstractStructReader.getDoubleArray(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getDoubleArray_java_lang_String_)

[AbstractStructReader.getDoubleArrayInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getDoubleArrayInternal_int_)

[AbstractStructReader.getDoubleInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getDoubleInternal_int_)

[AbstractStructReader.getDoubleList(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getDoubleList_int_)

[AbstractStructReader.getDoubleList(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getDoubleList_java_lang_String_)

[AbstractStructReader.getDoubleListInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getDoubleListInternal_int_)

[AbstractStructReader.getFloat(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getFloat_int_)

[AbstractStructReader.getFloat(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getFloat_java_lang_String_)

[AbstractStructReader.getFloatArray(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getFloatArray_int_)

[AbstractStructReader.getFloatArray(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getFloatArray_java_lang_String_)

[AbstractStructReader.getFloatArrayInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getFloatArrayInternal_int_)

[AbstractStructReader.getFloatInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getFloatInternal_int_)

[AbstractStructReader.getFloatList(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getFloatList_int_)

[AbstractStructReader.getFloatList(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getFloatList_java_lang_String_)

[AbstractStructReader.getFloatListInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getFloatListInternal_int_)

[AbstractStructReader.getJson(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getJson_int_)

[AbstractStructReader.getJson(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getJson_java_lang_String_)

[AbstractStructReader.getJsonInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getJsonInternal_int_)

[AbstractStructReader.getJsonList(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getJsonList_int_)

[AbstractStructReader.getJsonList(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getJsonList_java_lang_String_)

[AbstractStructReader.getJsonListInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getJsonListInternal_int_)

[AbstractStructReader.getLong(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getLong_int_)

[AbstractStructReader.getLong(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getLong_java_lang_String_)

[AbstractStructReader.getLongArray(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getLongArray_int_)

[AbstractStructReader.getLongArray(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getLongArray_java_lang_String_)

[AbstractStructReader.getLongArrayInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getLongArrayInternal_int_)

[AbstractStructReader.getLongInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getLongInternal_int_)

[AbstractStructReader.getLongList(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getLongList_int_)

[AbstractStructReader.getLongList(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getLongList_java_lang_String_)

[AbstractStructReader.getLongListInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getLongListInternal_int_)

[AbstractStructReader.getPgJsonb(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getPgJsonb_int_)

[AbstractStructReader.getPgJsonb(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getPgJsonb_java_lang_String_)

[AbstractStructReader.getPgJsonbInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getPgJsonbInternal_int_)

[AbstractStructReader.getPgJsonbList(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getPgJsonbList_int_)

[AbstractStructReader.getPgJsonbList(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getPgJsonbList_java_lang_String_)

[AbstractStructReader.getPgJsonbListInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getPgJsonbListInternal_int_)

[AbstractStructReader.getString(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getString_int_)

[AbstractStructReader.getString(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getString_java_lang_String_)

[AbstractStructReader.getStringInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getStringInternal_int_)

[AbstractStructReader.getStringList(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getStringList_int_)

[AbstractStructReader.getStringList(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getStringList_java_lang_String_)

[AbstractStructReader.getStringListInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getStringListInternal_int_)

[AbstractStructReader.getStructList(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getStructList_int_)

[AbstractStructReader.getStructList(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getStructList_java_lang_String_)

[AbstractStructReader.getStructListInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getStructListInternal_int_)

[AbstractStructReader.getTimestamp(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getTimestamp_int_)

[AbstractStructReader.getTimestamp(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getTimestamp_java_lang_String_)

[AbstractStructReader.getTimestampInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getTimestampInternal_int_)

[AbstractStructReader.getTimestampList(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getTimestampList_int_)

[AbstractStructReader.getTimestampList(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getTimestampList_java_lang_String_)

[AbstractStructReader.getTimestampListInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getTimestampListInternal_int_)

[AbstractStructReader.getValue(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getValue_int_)

[AbstractStructReader.getValue(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getValue_java_lang_String_)

[AbstractStructReader.getValueInternal(int)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_getValueInternal_int_)

[AbstractStructReader.isNull(String)](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.AbstractStructReader#com_google_cloud_spanner_AbstractStructReader_isNull_java_lang_String_)

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Methods

### newBuilder()

```
public static Struct.Builder newBuilder()
```

Returns a builder for creating a non-`NULL` `Struct` instance.

**Returns**

**Type**

**Description**

`[Struct.Builder](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.Struct.Builder)`

## Methods

### equals(Object o)

```
public boolean equals(Object o)
```

**Parameter**

**Name**

**Description**

`o`

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

### getStruct(int columnIndex)

```
public Struct getStruct(int columnIndex)
```

TODO(user) : Consider moving these methods to the StructReader interface once STRUCT-typed columns are supported in [ResultSet](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.spanner.v1.ResultSet).

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Struct](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.Struct)`

### getStruct(String columnName)

```
public Struct getStruct(String columnName)
```

**Parameter**

**Name**

**Description**

`columnName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Struct](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.Struct)`

### getStructInternal(int columnIndex)

```
protected abstract Struct getStructInternal(int columnIndex)
```

**Parameter**

**Name**

**Description**

`columnIndex`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Struct](/java/docs/reference/google-cloud-spanner/6.83.0/com.google.cloud.spanner.Struct)`

### hashCode()

```
public int hashCode()
```

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
