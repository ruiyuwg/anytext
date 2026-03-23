-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class AppEngineDataStoreFactory.Builder (1.46.3) Stay organized with collections Save and categorize content based on your preferences.

Version 1.46.3keyboard\_arrow\_down

-   [2.1.0 (latest)](/java/docs/reference/google-http-client/latest/com.google.api.client.extensions.appengine.datastore.AppEngineDataStoreFactory.Builder)
-   [2.0.3](/java/docs/reference/google-http-client/2.0.3/com.google.api.client.extensions.appengine.datastore.AppEngineDataStoreFactory.Builder)
-   [1.47.1](/java/docs/reference/google-http-client/1.47.1/com.google.api.client.extensions.appengine.datastore.AppEngineDataStoreFactory.Builder)
-   [1.46.3](/java/docs/reference/google-http-client/1.46.3/com.google.api.client.extensions.appengine.datastore.AppEngineDataStoreFactory.Builder)
-   [1.45.3](/java/docs/reference/google-http-client/1.45.3/com.google.api.client.extensions.appengine.datastore.AppEngineDataStoreFactory.Builder)
-   [1.44.2](/java/docs/reference/google-http-client/1.44.2/com.google.api.client.extensions.appengine.datastore.AppEngineDataStoreFactory.Builder)
-   [1.43.2](/java/docs/reference/google-http-client/1.43.2/com.google.api.client.extensions.appengine.datastore.AppEngineDataStoreFactory.Builder)
-   [1.42.3](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.extensions.appengine.datastore.AppEngineDataStoreFactory.Builder)
-   [1.41.8](/java/docs/reference/google-http-client/1.41.8/com.google.api.client.extensions.appengine.datastore.AppEngineDataStoreFactory.Builder)

```
public static class AppEngineDataStoreFactory.Builder
```

App Engine data store factory builder.

Implementation is not thread-safe.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> AppEngineDataStoreFactory.Builder

## Inherited Members

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

### Builder()

```
public Builder()
```

## Methods

### build()

```
public AppEngineDataStoreFactory build()
```

Returns a new App Engine data store factory instance.

**Returns**

**Type**

**Description**

`[AppEngineDataStoreFactory](/java/docs/reference/google-http-client/1.46.3/com.google.api.client.extensions.appengine.datastore.AppEngineDataStoreFactory)`

### getDisableMemcache()

```
public final boolean getDisableMemcache()
```

Returns whether to disable the memcache.

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getMemcacheExpiration()

```
public final Expiration getMemcacheExpiration()
```

Returns the Memcache expiration policy on puts.

**Returns**

**Type**

**Description**

`com.google.appengine.api.memcache.Expiration`

### setDisableMemcache(boolean disableMemcache)

```
public AppEngineDataStoreFactory.Builder setDisableMemcache(boolean disableMemcache)
```

Sets whether to disable the memcache (`false` by default).

Overriding is only supported for the purpose of calling the super implementation and changing the return type, but nothing else.

**Parameter**

**Name**

**Description**

`disableMemcache`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[AppEngineDataStoreFactory.Builder](/java/docs/reference/google-http-client/1.46.3/com.google.api.client.extensions.appengine.datastore.AppEngineDataStoreFactory.Builder)`

### setMemcacheExpiration(Expiration memcacheExpiration)

```
public AppEngineDataStoreFactory.Builder setMemcacheExpiration(Expiration memcacheExpiration)
```

Sets the Memcache expiration policy on puts.

Overriding is only supported for the purpose of calling the super implementation and changing the return type, but nothing else.

**Parameter**

**Name**

**Description**

`memcacheExpiration`

`com.google.appengine.api.memcache.Expiration`  

**Returns**

**Type**

**Description**

`[AppEngineDataStoreFactory.Builder](/java/docs/reference/google-http-client/1.46.3/com.google.api.client.extensions.appengine.datastore.AppEngineDataStoreFactory.Builder)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
