-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class MemoryDataStoreFactory (1.42.3) Stay organized with collections Save and categorize content based on your preferences.

Version 1.42.3keyboard\_arrow\_down

-   [2.1.0 (latest)](/java/docs/reference/google-http-client/latest/com.google.api.client.util.store.MemoryDataStoreFactory)
-   [2.0.3](/java/docs/reference/google-http-client/2.0.3/com.google.api.client.util.store.MemoryDataStoreFactory)
-   [1.47.1](/java/docs/reference/google-http-client/1.47.1/com.google.api.client.util.store.MemoryDataStoreFactory)
-   [1.46.3](/java/docs/reference/google-http-client/1.46.3/com.google.api.client.util.store.MemoryDataStoreFactory)
-   [1.45.3](/java/docs/reference/google-http-client/1.45.3/com.google.api.client.util.store.MemoryDataStoreFactory)
-   [1.44.2](/java/docs/reference/google-http-client/1.44.2/com.google.api.client.util.store.MemoryDataStoreFactory)
-   [1.43.2](/java/docs/reference/google-http-client/1.43.2/com.google.api.client.util.store.MemoryDataStoreFactory)
-   [1.42.3](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.util.store.MemoryDataStoreFactory)
-   [1.41.8](/java/docs/reference/google-http-client/1.41.8/com.google.api.client.util.store.MemoryDataStoreFactory)

```
public class MemoryDataStoreFactory extends AbstractDataStoreFactory
```

Thread-safe in-memory implementation of a data store factory.

For convenience, a default global instance is provided in [#getDefaultInstance()](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.util.store.MemoryDataStoreFactory#com_google_api_client_util_store_MemoryDataStoreFactory_getDefaultInstance__).

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractDataStoreFactory](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.util.store.AbstractDataStoreFactory) \> MemoryDataStoreFactory

## Inherited Members

[AbstractDataStoreFactory.<V>createDataStore(String)](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.util.store.AbstractDataStoreFactory#com_google_api_client_util_store_AbstractDataStoreFactory__V_createDataStore_java_lang_String_)

[AbstractDataStoreFactory.<V>getDataStore(String)](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.util.store.AbstractDataStoreFactory#com_google_api_client_util_store_AbstractDataStoreFactory__V_getDataStore_java_lang_String_)

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

### getDefaultInstance()

```
public static MemoryDataStoreFactory getDefaultInstance()
```

Returns a global thread-safe instance.

**Returns**

**Type**

**Description**

`[MemoryDataStoreFactory](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.util.store.MemoryDataStoreFactory)`

## Constructors

### MemoryDataStoreFactory()

```
public MemoryDataStoreFactory()
```

## Methods

### <V>createDataStore(String id)

```
protected DataStore<V> <V>createDataStore(String id)
```

Returns a new instance of a type-specific data store based on the given unique ID.

The [DataStore#getId()](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.util.store.DataStore#com_google_api_client_util_store_DataStore_getId__) must match the `id` parameter from this method.

**Parameter**

**Name**

**Description**

`id`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[DataStore](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.util.store.DataStore)<V>`

**Overrides**

[AbstractDataStoreFactory.<V>createDataStore(String id)](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.util.store.AbstractDataStoreFactory#com_google_api_client_util_store_AbstractDataStoreFactory__V_createDataStore_java_lang_String_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
