-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Exception DatabaseNotFoundException (6.77.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public class DatabaseNotFoundException extends SpannerException.ResourceNotFoundException
```

Exception thrown by Cloud Spanner when an operation detects that the database that is being used no longer exists. This type of error has its own subclass as it is a condition that should cause the client library to stop trying to send RPCs to the backend until the user has taken action.

## Inherited Members

com.google.cloud.BaseServiceException.equals(java.lang.Object)

com.google.cloud.BaseServiceException.getCode()

com.google.cloud.BaseServiceException.getDebugInfo()

com.google.cloud.BaseServiceException.getLocation()

com.google.cloud.BaseServiceException.hashCode()

com.google.cloud.BaseServiceException.isRetryable()

com.google.cloud.BaseServiceException.isRetryable(boolean,java.io.IOException)

com.google.cloud.BaseServiceException.isRetryable(java.lang.Integer,java.lang.String,boolean,java.util.Set<com.google.cloud.BaseServiceException.Error>)

com.google.cloud.BaseServiceException.translate(com.google.cloud.RetryHelper.RetryHelperException)

com.google.cloud.BaseServiceException.translate(java.util.concurrent.ExecutionException)

[SpannerException.ResourceNotFoundException.getResourceName()](/java/docs/reference/google-cloud-spanner/6.77.0/com.google.cloud.spanner.SpannerException.ResourceNotFoundException#com_google_cloud_spanner_SpannerException_ResourceNotFoundException_getResourceName__)

[SpannerException.getDomain()](/java/docs/reference/google-cloud-spanner/6.77.0/com.google.cloud.spanner.SpannerException#com_google_cloud_spanner_SpannerException_getDomain__)

[SpannerException.getErrorCode()](/java/docs/reference/google-cloud-spanner/6.77.0/com.google.cloud.spanner.SpannerException#com_google_cloud_spanner_SpannerException_getErrorCode__)

[SpannerException.getErrorDetails()](/java/docs/reference/google-cloud-spanner/6.77.0/com.google.cloud.spanner.SpannerException#com_google_cloud_spanner_SpannerException_getErrorDetails__)

[SpannerException.getMetadata()](/java/docs/reference/google-cloud-spanner/6.77.0/com.google.cloud.spanner.SpannerException#com_google_cloud_spanner_SpannerException_getMetadata__)

[SpannerException.getReason()](/java/docs/reference/google-cloud-spanner/6.77.0/com.google.cloud.spanner.SpannerException#com_google_cloud_spanner_SpannerException_getReason__)

[SpannerException.getRetryDelayInMillis()](/java/docs/reference/google-cloud-spanner/6.77.0/com.google.cloud.spanner.SpannerException#com_google_cloud_spanner_SpannerException_getRetryDelayInMillis__)

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

[Throwable.addSuppressed(Throwable)](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html#addSuppressed-java.lang.Throwable-)

[Throwable.fillInStackTrace()](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html#fillInStackTrace--)

[Throwable.getCause()](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html#getCause--)

[Throwable.getLocalizedMessage()](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html#getLocalizedMessage--)

[Throwable.getMessage()](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html#getMessage--)

[Throwable.getStackTrace()](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html#getStackTrace--)

[Throwable.getSuppressed()](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html#getSuppressed--)

[Throwable.initCause(Throwable)](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html#initCause-java.lang.Throwable-)

[Throwable.printStackTrace()](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html#printStackTrace--)

[Throwable.printStackTrace(PrintStream)](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html#printStackTrace-java.io.PrintStream-)

[Throwable.printStackTrace(PrintWriter)](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html#printStackTrace-java.io.PrintWriter-)

[Throwable.setStackTrace(StackTraceElement\[\])](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html#setStackTrace-java.lang.StackTraceElement[]-)

[Throwable.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html#toString--)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
