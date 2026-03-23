-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ForwardingResultSet (6.49.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public class ForwardingResultSet extends ForwardingStructReader implements ResultSet
```

Forwarding implementation of ResultSet that forwards all calls to a delegate.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ForwardingStructReader](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader) \> ForwardingResultSet

## Implements

[ResultSet](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ResultSet)

## Inherited Members

[ForwardingStructReader.checkValidState()](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_checkValidState__)

[ForwardingStructReader.getBigDecimal(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBigDecimal_int_)

[ForwardingStructReader.getBigDecimal(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBigDecimal_java_lang_String_)

[ForwardingStructReader.getBigDecimalList(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBigDecimalList_int_)

[ForwardingStructReader.getBigDecimalList(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBigDecimalList_java_lang_String_)

[ForwardingStructReader.getBoolean(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBoolean_int_)

[ForwardingStructReader.getBoolean(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBoolean_java_lang_String_)

[ForwardingStructReader.getBooleanArray(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBooleanArray_int_)

[ForwardingStructReader.getBooleanArray(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBooleanArray_java_lang_String_)

[ForwardingStructReader.getBooleanList(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBooleanList_int_)

[ForwardingStructReader.getBooleanList(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBooleanList_java_lang_String_)

[ForwardingStructReader.getBytes(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBytes_int_)

[ForwardingStructReader.getBytes(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBytes_java_lang_String_)

[ForwardingStructReader.getBytesList(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBytesList_int_)

[ForwardingStructReader.getBytesList(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBytesList_java_lang_String_)

[ForwardingStructReader.getColumnCount()](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getColumnCount__)

[ForwardingStructReader.getColumnIndex(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getColumnIndex_java_lang_String_)

[ForwardingStructReader.getColumnType(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getColumnType_int_)

[ForwardingStructReader.getColumnType(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getColumnType_java_lang_String_)

[ForwardingStructReader.getDate(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDate_int_)

[ForwardingStructReader.getDate(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDate_java_lang_String_)

[ForwardingStructReader.getDateList(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDateList_int_)

[ForwardingStructReader.getDateList(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDateList_java_lang_String_)

[ForwardingStructReader.getDouble(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDouble_int_)

[ForwardingStructReader.getDouble(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDouble_java_lang_String_)

[ForwardingStructReader.getDoubleArray(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDoubleArray_int_)

[ForwardingStructReader.getDoubleArray(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDoubleArray_java_lang_String_)

[ForwardingStructReader.getDoubleList(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDoubleList_int_)

[ForwardingStructReader.getDoubleList(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDoubleList_java_lang_String_)

[ForwardingStructReader.getJson(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getJson_int_)

[ForwardingStructReader.getJson(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getJson_java_lang_String_)

[ForwardingStructReader.getJsonList(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getJsonList_int_)

[ForwardingStructReader.getJsonList(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getJsonList_java_lang_String_)

[ForwardingStructReader.getLong(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getLong_int_)

[ForwardingStructReader.getLong(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getLong_java_lang_String_)

[ForwardingStructReader.getLongArray(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getLongArray_int_)

[ForwardingStructReader.getLongArray(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getLongArray_java_lang_String_)

[ForwardingStructReader.getLongList(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getLongList_int_)

[ForwardingStructReader.getLongList(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getLongList_java_lang_String_)

[ForwardingStructReader.getPgJsonb(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getPgJsonb_int_)

[ForwardingStructReader.getPgJsonb(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getPgJsonb_java_lang_String_)

[ForwardingStructReader.getPgJsonbList(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getPgJsonbList_int_)

[ForwardingStructReader.getPgJsonbList(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getPgJsonbList_java_lang_String_)

[ForwardingStructReader.getString(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getString_int_)

[ForwardingStructReader.getString(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getString_java_lang_String_)

[ForwardingStructReader.getStringList(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getStringList_int_)

[ForwardingStructReader.getStringList(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getStringList_java_lang_String_)

[ForwardingStructReader.getStructList(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getStructList_int_)

[ForwardingStructReader.getStructList(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getStructList_java_lang_String_)

[ForwardingStructReader.getTimestamp(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getTimestamp_int_)

[ForwardingStructReader.getTimestamp(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getTimestamp_java_lang_String_)

[ForwardingStructReader.getTimestampList(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getTimestampList_int_)

[ForwardingStructReader.getTimestampList(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getTimestampList_java_lang_String_)

[ForwardingStructReader.getType()](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getType__)

[ForwardingStructReader.getValue(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getValue_int_)

[ForwardingStructReader.getValue(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getValue_java_lang_String_)

[ForwardingStructReader.isNull(int)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_isNull_int_)

[ForwardingStructReader.isNull(String)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_isNull_java_lang_String_)

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

## Constructors

### ForwardingResultSet(ResultSet delegate)

```
public ForwardingResultSet(ResultSet delegate)
```

**Parameter**

**Name**

**Description**

`delegate`

`[ResultSet](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ResultSet)`  

### ForwardingResultSet(Supplier<ResultSet> supplier)

```
public ForwardingResultSet(Supplier<ResultSet> supplier)
```

**Parameter**

**Name**

**Description**

`supplier`

`com.google.common.base.Supplier<[ResultSet](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ResultSet)>`  

## Methods

### close()

```
public void close()
```

Explicitly close the result set, releasing any associated resources. This must always be called when disposing of a `ResultSet` before [#next()](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingResultSet#com_google_cloud_spanner_ForwardingResultSet_next__) has returned `false` or raised an exception. Calling `close()` is also allowed if the result set has been fully consumed, so a recommended practice is to unconditionally close the result set once it is done with, typically using a try-with-resources construct.

### getCurrentRowAsStruct()

```
public Struct getCurrentRowAsStruct()
```

Creates an immutable version of the row that the result set is positioned over. This may involve copying internal data structures, and so converting all rows to `Struct` objects is generally more expensive than processing the `ResultSet` directly.

**Returns**

**Type**

**Description**

`[Struct](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.Struct)`

### getMetadata()

```
public ResultSetMetadata getMetadata()
```

Returns the [ResultSetMetadata](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.spanner.v1.ResultSetMetadata) for this [ResultSet](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ResultSet). This is method may only be called after calling [ResultSet#next()](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ResultSet#com_google_cloud_spanner_ResultSet_next__) at least once.

**Returns**

**Type**

**Description**

`[ResultSetMetadata](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.spanner.v1.ResultSetMetadata)`

### getStats()

```
public ResultSetStats getStats()
```

Returns the [ResultSetStats](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.spanner.v1.ResultSetStats) for the query only if the query was executed in either the `PLAN` or the `PROFILE` mode via the ReadContext#analyzeQuery(Statement, com.google.cloud.spanner.ReadContext.QueryAnalyzeMode) method or for DML statements in [ReadContext#executeQuery(Statement, QueryOption...)](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ReadContext#com_google_cloud_spanner_ReadContext_executeQuery_). Attempts to call this method on a `ResultSet` not obtained from `analyzeQuery` or `executeQuery` will return a `null` `ResultSetStats`. This method must be called after [#next()](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.ForwardingResultSet#com_google_cloud_spanner_ForwardingResultSet_next__) has returned @{code false}. Calling it before that will result in `null` `ResultSetStats` too.

**Returns**

**Type**

**Description**

`[ResultSetStats](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.spanner.v1.ResultSetStats)`

### next()

```
public boolean next()
```

Advances the result set to the next row, returning false if no such row exists. This method may block.

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Exceptions**

**Type**

**Description**

`[SpannerException](/java/docs/reference/google-cloud-spanner/6.49.0/com.google.cloud.spanner.SpannerException)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
