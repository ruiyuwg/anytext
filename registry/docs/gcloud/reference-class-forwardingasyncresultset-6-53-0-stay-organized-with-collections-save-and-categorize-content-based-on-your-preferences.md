-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ForwardingAsyncResultSet (6.53.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public class ForwardingAsyncResultSet extends ForwardingResultSet implements AsyncResultSet
```

Forwarding implementation of [AsyncResultSet](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.AsyncResultSet) that forwards all calls to a delegate.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ForwardingStructReader](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader) \> [ForwardingResultSet](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingResultSet) \> ForwardingAsyncResultSet

## Implements

[AsyncResultSet](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.AsyncResultSet)

## Inherited Members

[ForwardingResultSet.close()](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingResultSet#com_google_cloud_spanner_ForwardingResultSet_close__)

[ForwardingResultSet.getCurrentRowAsStruct()](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingResultSet#com_google_cloud_spanner_ForwardingResultSet_getCurrentRowAsStruct__)

[ForwardingResultSet.getMetadata()](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingResultSet#com_google_cloud_spanner_ForwardingResultSet_getMetadata__)

[ForwardingResultSet.getStats()](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingResultSet#com_google_cloud_spanner_ForwardingResultSet_getStats__)

[ForwardingResultSet.next()](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingResultSet#com_google_cloud_spanner_ForwardingResultSet_next__)

[ForwardingStructReader.checkValidState()](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_checkValidState__)

[ForwardingStructReader.getBigDecimal(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBigDecimal_int_)

[ForwardingStructReader.getBigDecimal(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBigDecimal_java_lang_String_)

[ForwardingStructReader.getBigDecimalList(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBigDecimalList_int_)

[ForwardingStructReader.getBigDecimalList(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBigDecimalList_java_lang_String_)

[ForwardingStructReader.getBoolean(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBoolean_int_)

[ForwardingStructReader.getBoolean(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBoolean_java_lang_String_)

[ForwardingStructReader.getBooleanArray(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBooleanArray_int_)

[ForwardingStructReader.getBooleanArray(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBooleanArray_java_lang_String_)

[ForwardingStructReader.getBooleanList(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBooleanList_int_)

[ForwardingStructReader.getBooleanList(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBooleanList_java_lang_String_)

[ForwardingStructReader.getBytes(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBytes_int_)

[ForwardingStructReader.getBytes(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBytes_java_lang_String_)

[ForwardingStructReader.getBytesList(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBytesList_int_)

[ForwardingStructReader.getBytesList(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getBytesList_java_lang_String_)

[ForwardingStructReader.getColumnCount()](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getColumnCount__)

[ForwardingStructReader.getColumnIndex(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getColumnIndex_java_lang_String_)

[ForwardingStructReader.getColumnType(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getColumnType_int_)

[ForwardingStructReader.getColumnType(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getColumnType_java_lang_String_)

[ForwardingStructReader.getDate(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDate_int_)

[ForwardingStructReader.getDate(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDate_java_lang_String_)

[ForwardingStructReader.getDateList(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDateList_int_)

[ForwardingStructReader.getDateList(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDateList_java_lang_String_)

[ForwardingStructReader.getDouble(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDouble_int_)

[ForwardingStructReader.getDouble(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDouble_java_lang_String_)

[ForwardingStructReader.getDoubleArray(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDoubleArray_int_)

[ForwardingStructReader.getDoubleArray(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDoubleArray_java_lang_String_)

[ForwardingStructReader.getDoubleList(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDoubleList_int_)

[ForwardingStructReader.getDoubleList(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getDoubleList_java_lang_String_)

[ForwardingStructReader.getJson(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getJson_int_)

[ForwardingStructReader.getJson(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getJson_java_lang_String_)

[ForwardingStructReader.getJsonList(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getJsonList_int_)

[ForwardingStructReader.getJsonList(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getJsonList_java_lang_String_)

[ForwardingStructReader.getLong(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getLong_int_)

[ForwardingStructReader.getLong(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getLong_java_lang_String_)

[ForwardingStructReader.getLongArray(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getLongArray_int_)

[ForwardingStructReader.getLongArray(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getLongArray_java_lang_String_)

[ForwardingStructReader.getLongList(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getLongList_int_)

[ForwardingStructReader.getLongList(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getLongList_java_lang_String_)

[ForwardingStructReader.getPgJsonb(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getPgJsonb_int_)

[ForwardingStructReader.getPgJsonb(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getPgJsonb_java_lang_String_)

[ForwardingStructReader.getPgJsonbList(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getPgJsonbList_int_)

[ForwardingStructReader.getPgJsonbList(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getPgJsonbList_java_lang_String_)

[ForwardingStructReader.getString(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getString_int_)

[ForwardingStructReader.getString(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getString_java_lang_String_)

[ForwardingStructReader.getStringList(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getStringList_int_)

[ForwardingStructReader.getStringList(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getStringList_java_lang_String_)

[ForwardingStructReader.getStructList(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getStructList_int_)

[ForwardingStructReader.getStructList(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getStructList_java_lang_String_)

[ForwardingStructReader.getTimestamp(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getTimestamp_int_)

[ForwardingStructReader.getTimestamp(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getTimestamp_java_lang_String_)

[ForwardingStructReader.getTimestampList(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getTimestampList_int_)

[ForwardingStructReader.getTimestampList(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getTimestampList_java_lang_String_)

[ForwardingStructReader.getType()](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getType__)

[ForwardingStructReader.getValue(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getValue_int_)

[ForwardingStructReader.getValue(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_getValue_java_lang_String_)

[ForwardingStructReader.isNull(int)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_isNull_int_)

[ForwardingStructReader.isNull(String)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingStructReader#com_google_cloud_spanner_ForwardingStructReader_isNull_java_lang_String_)

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

### ForwardingAsyncResultSet(AsyncResultSet delegate)

```
public ForwardingAsyncResultSet(AsyncResultSet delegate)
```

**Parameter**

**Name**

**Description**

`delegate`

`[AsyncResultSet](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.AsyncResultSet)`  

## Methods

### <T>toList(Function<StructReader,T> transformer)

```
public List<T> <T>toList(Function<StructReader,T> transformer)
```

Transforms the row cursor into an immutable list using the given transformer function. `transformer` will be called once per row, thus the returned list will contain one entry per row. This method will block until all the rows have been yielded by the cursor.

WARNING: This will result in consuming the entire list so this should be used judiciously after considering the memory requirements of the returned list.

WARNING: The `RowBase` object passed to transformer function is not immutable and is not guaranteed to remain valid after the transformer function returns. The same `RowBase` object might be passed multiple times to the transformer with different underlying data each time. So _NEVER_ keep a reference to the `RowBase` outside of the transformer. Specifically do not use com.google.common.base.Functions#identity() function.

**Parameter**

**Name**

**Description**

`transformer`

`com.google.common.base.Function<[StructReader](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.StructReader),T>`  

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<T>`

**Exceptions**

**Type**

**Description**

`[SpannerException](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.SpannerException)`

### <T>toListAsync(Function<StructReader,T> transformer, Executor executor)

```
public ApiFuture<List<T>> <T>toListAsync(Function<StructReader,T> transformer, Executor executor)
```

Transforms the row cursor into an immutable list using the given transformer function. `transformer` will be called once per row, thus the returned list will contain one entry per row. The returned future will throw a [SpannerException](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.SpannerException) if the row cursor encountered any error or if the transformer threw an exception on any row.

The transformer will be run on the supplied executor. The implementation may batch multiple transformer invocations together into a single `Runnable` when possible to increase efficiency. At any point in time, there will be at most one invocation of the transformer in progress.

WARNING: This will result in materializing the entire list so this should be used judiciously after considering the memory requirements of the returned list.

WARNING: The `RowBase` object passed to transformer function is not immutable and is not guaranteed to remain valid after the transformer function returns. The same `RowBase` object might be passed multiple times to the transformer with different underlying data each time. So _NEVER_ keep a reference to the `RowBase` outside of the transformer. Specifically do not use com.google.common.base.Functions#identity() function.

**Parameters**

**Name**

**Description**

`transformer`

`com.google.common.base.Function<[StructReader](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.StructReader),T>`  

`executor`

`[Executor](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Executor.html)`  

**Returns**

**Type**

**Description**

`[ApiFuture](https://cloud.google.com/java/docs/reference/api-common/latest/com.google.api.core.ApiFuture.html)<[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<T>>`

### cancel()

```
public void cancel()
```

Attempt to cancel this operation and free all resources. Non-blocking. This is a no-op for child row cursors and does not cancel the parent cursor.

### resume()

```
public void resume()
```

Resume callbacks from the cursor. If there is more data available, a callback will be dispatched immediately. This can be called from any thread.

### setCallback(Executor exec, AsyncResultSet.ReadyCallback cb)

```
public ApiFuture<Void> setCallback(Executor exec, AsyncResultSet.ReadyCallback cb)
```

Register a callback with the ResultSet to be made aware when more data is available, changing the usage pattern from sync to async. Details:

-   The callback will be called at least once.
-   The callback is run each time more results are available, or when we discover that there will be no more results. (unless paused, see below). Spurious callbacks are possible, see below.
-   Spanner guarantees that one callback is ever outstanding at a time. Also, future callbacks guarantee the "happens before" property with previous callbacks.
-   A callback normally consumes all available data in the ResultSet, and then returns CallbackResponse#CONTINUE.
-   If a callback returns CallbackResponse#CONTINUE with data still in the ResultSet, the callback is invoked again immediately!
-   Once a callback has returned CallbackResponse#PAUSE on the cursor no more callbacks will be run until a corresponding [#resume()](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingAsyncResultSet#com_google_cloud_spanner_ForwardingAsyncResultSet_resume__).
-   Callback will stop being called once any of the following occurs:
    1.  Callback returns CallbackResponse#DONE.
    2.  [ForwardingAsyncResultSet#tryNext()](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingAsyncResultSet#com_google_cloud_spanner_ForwardingAsyncResultSet_tryNext__) returns CursorState#DONE.
    3.  [ForwardingAsyncResultSet#tryNext()](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingAsyncResultSet#com_google_cloud_spanner_ForwardingAsyncResultSet_tryNext__) throws an exception.
-   Callback may possibly be invoked after a call to [ForwardingAsyncResultSet#cancel()](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingAsyncResultSet#com_google_cloud_spanner_ForwardingAsyncResultSet_cancel__) call, but the subsequent call to [#tryNext()](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingAsyncResultSet#com_google_cloud_spanner_ForwardingAsyncResultSet_tryNext__) will yield a SpannerException.
-   Spurious callbacks are possible where cursors are not actually ready. Typically callback should return CallbackResponse#CONTINUE any time it sees CursorState#NOT\_READY.

#### Flow Control

If no flow control is needed (say because result sizes are known in advance to be finite in size) then async processing is simple. The following is a code example that transfers work from the cursor to an upstream sink:

{@code

**Parameters**

**Name**

**Description**

`exec`

`[Executor](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Executor.html)`  

`cb`

`[AsyncResultSet.ReadyCallback](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.AsyncResultSet.ReadyCallback)`  

**Returns**

**Type**

**Description**

`[ApiFuture](https://cloud.google.com/java/docs/reference/api-common/latest/com.google.api.core.ApiFuture.html)<[Void](https://docs.oracle.com/javase/8/docs/api/java/lang/Void.html)>`

### tryNext()

```
public AsyncResultSet.CursorState tryNext()
```

Non-blocking call that attempts to step the cursor to the next position in the stream. The cursor may be inspected only if the cursor returns `CursorState.OK`.

A caller will typically call tryNext in a loop inside the ReadyCallback, consuming all results available. For more information see [#setCallback(Executor, ReadyCallback)](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.ForwardingAsyncResultSet#com_google_cloud_spanner_ForwardingAsyncResultSet_setCallback_).

Currently this method may only be called if a ReadyCallback has been registered. This is for safety purposes only, and may be relaxed in future.

**Returns**

**Type**

**Description**

`[AsyncResultSet.CursorState](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.AsyncResultSet.CursorState)`

**Exceptions**

**Type**

**Description**

`[SpannerException](/java/docs/reference/google-cloud-spanner/6.53.0/com.google.cloud.spanner.SpannerException)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
