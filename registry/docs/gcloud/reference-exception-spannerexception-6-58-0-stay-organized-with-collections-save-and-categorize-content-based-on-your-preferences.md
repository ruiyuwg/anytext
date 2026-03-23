-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Exception SpannerException (6.58.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public class SpannerException extends BaseGrpcServiceException
```

Base exception type for all exceptions produced by the Cloud Spanner service.

## Inherited Members

com.google.cloud.BaseServiceException.equals(java.lang.Object)

com.google.cloud.BaseServiceException.getCode()

com.google.cloud.BaseServiceException.getDebugInfo()

com.google.cloud.BaseServiceException.getLocation()

com.google.cloud.BaseServiceException.getReason()

com.google.cloud.BaseServiceException.hashCode()

com.google.cloud.BaseServiceException.isRetryable()

com.google.cloud.BaseServiceException.isRetryable(boolean,java.io.IOException)

com.google.cloud.BaseServiceException.isRetryable(java.lang.Integer,java.lang.String,boolean,java.util.Set<com.google.cloud.BaseServiceException.Error>)

com.google.cloud.BaseServiceException.translate(com.google.cloud.RetryHelper.RetryHelperException)

com.google.cloud.BaseServiceException.translate(java.util.concurrent.ExecutionException)

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

## Methods

### getDomain()

```
public String getDomain()
```

Checks the underlying reason of the exception and if it's [ApiException](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ApiException.html) then return the specific domain otherwise null. See Also: [Domain](https://github.com/googleapis/googleapis/blob/master/google/rpc/error_details.proto#L125)

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

the logical grouping to which the "reason" belongs.

### getErrorCode()

```
public ErrorCode getErrorCode()
```

Returns the error code associated with this exception.

**Returns**

**Type**

**Description**

`[ErrorCode](/java/docs/reference/google-cloud-spanner/6.58.0/com.google.cloud.spanner.ErrorCode)`

### getErrorDetails()

```
public ErrorDetails getErrorDetails()
```

Checks the underlying reason of the exception and if it's [ApiException](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ApiException.html) then return the ErrorDetails otherwise null. See Also: [Error Details](https://github.com/googleapis/googleapis/blob/master/google/rpc/error_details.proto), [Status](https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto)

**Returns**

**Type**

**Description**

`[ErrorDetails](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ErrorDetails.html)`

An object containing getters for structured objects from error\_details.proto.

### getMetadata()

```
public Map<String,String> getMetadata()
```

Checks the underlying reason of the exception and if it's [ApiException](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ApiException.html) then return a map of key-value pairs otherwise null. See Also: [Metadata](https://github.com/googleapis/googleapis/blob/master/google/rpc/error_details.proto#L135)

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

the map of additional structured details about an error.

### getReason()

```
public String getReason()
```

Checks the underlying reason of the exception and if it's [ApiException](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ApiException.html) then return the reason otherwise null. See Also: [Reason](https://github.com/googleapis/googleapis/blob/master/google/rpc/error_details.proto#L117)

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

the reason of an error.

**Overrides**

com.google.cloud.BaseServiceException.getReason()

### getRetryDelayInMillis()

```
public long getRetryDelayInMillis()
```

Return the retry delay for operation in milliseconds. Return -1 if this does not specify any retry delay.

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
