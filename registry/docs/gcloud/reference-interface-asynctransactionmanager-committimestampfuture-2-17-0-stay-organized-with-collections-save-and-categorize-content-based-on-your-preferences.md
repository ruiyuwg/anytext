-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface AsyncTransactionManager.CommitTimestampFuture (2.17.0) Stay organized with collections Save and categorize content based on your preferences.

2.35.4 (latest) 2.35.3 2.34.0 2.33.2 2.32.3 2.31.2 2.30.4 2.28.0 2.27.1 2.26.1 2.25.1 2.24.1 2.23.0 2.22.1 2.21.0 2.20.2 2.19.3 2.18.1 2.17.0 2.16.1 2.15.5 2.14.6 2.13.4 2.11.4 2.10.0 2.9.16 2.8.0 2.7.12 2.6.4 2.5.11

```
public static interface AsyncTransactionManager.CommitTimestampFuture extends ApiFuture<Timestamp>
```

## Implements

com.google.api.core.ApiFuture<com.google.cloud.Timestamp>

## Methods

### get()

```
public abstract Timestamp get()
```

**Returns**

**Type**

**Description**

`com.google.cloud.Timestamp`

**Exceptions**

**Type**

**Description**

`[AbortedException](/java/docs/reference/google-cloud-spanner-jdbc/2.17.0/com.google.cloud.spanner.AbortedException)`

`[InterruptedException](https://docs.oracle.com/javase/8/docs/api/java/lang/InterruptedException.html)`

`[ExecutionException](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ExecutionException.html)`

### get(long arg0, TimeUnit arg1)

```
public abstract Timestamp get(long arg0, TimeUnit arg1)
```

**Parameters**

**Name**

**Description**

`arg0`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`arg1`

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

**Returns**

**Type**

**Description**

`com.google.cloud.Timestamp`

**Exceptions**

**Type**

**Description**

`[AbortedException](/java/docs/reference/google-cloud-spanner-jdbc/2.17.0/com.google.cloud.spanner.AbortedException)`

`[InterruptedException](https://docs.oracle.com/javase/8/docs/api/java/lang/InterruptedException.html)`

`[ExecutionException](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ExecutionException.html)`

`[TimeoutException](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeoutException.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
