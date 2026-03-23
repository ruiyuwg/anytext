-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SpannerPool (6.79.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public class SpannerPool
```

Pool for keeping track of [Spanner](/java/docs/reference/google-cloud-spanner/6.79.0/com.google.cloud.spanner.Spanner) instances needed for connections.

When a connection is opened for a Google Cloud Spanner database, a [Spanner](/java/docs/reference/google-cloud-spanner/6.79.0/com.google.cloud.spanner.Spanner) object can be opened in the background. The [SpannerPool](/java/docs/reference/google-cloud-spanner/6.79.0/com.google.cloud.spanner.connection.SpannerPool) keeps track of which [Spanner](/java/docs/reference/google-cloud-spanner/6.79.0/com.google.cloud.spanner.Spanner) objects have been opened by connections during the lifetime of the JVM, which connections are still opened and closed, and which [Spanner](/java/docs/reference/google-cloud-spanner/6.79.0/com.google.cloud.spanner.Spanner) objects could be closed.

Call the method [SpannerPool#closeSpannerPool()](/java/docs/reference/google-cloud-spanner/6.79.0/com.google.cloud.spanner.connection.SpannerPool#com_google_cloud_spanner_connection_SpannerPool_closeSpannerPool__) at the end of your application to gracefully shutdown all instances in the pool.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> SpannerPool

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

## Static Methods

### closeSpannerPool()

```
public static void closeSpannerPool()
```

Closes the default [SpannerPool](/java/docs/reference/google-cloud-spanner/6.79.0/com.google.cloud.spanner.connection.SpannerPool) and all [Spanner](/java/docs/reference/google-cloud-spanner/6.79.0/com.google.cloud.spanner.Spanner) instances that have been opened by connections and that are still open. Call this method at the end of your application to gracefully close all [Spanner](/java/docs/reference/google-cloud-spanner/6.79.0/com.google.cloud.spanner.Spanner) instances in the pool. Failing to call this method will keep your application running for 60 seconds after you close the last java.sql.Connection to Cloud Spanner, as this is the default timeout before the [SpannerPool](/java/docs/reference/google-cloud-spanner/6.79.0/com.google.cloud.spanner.connection.SpannerPool) closes the unused [Spanner](/java/docs/reference/google-cloud-spanner/6.79.0/com.google.cloud.spanner.Spanner) instances.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
