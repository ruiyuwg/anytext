-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Exception HttpResponseException (1.42.3) Stay organized with collections Save and categorize content based on your preferences.

Version 1.42.3keyboard\_arrow\_down

-   [2.1.0 (latest)](/java/docs/reference/google-http-client/latest/com.google.api.client.http.HttpResponseException)
-   [2.0.3](/java/docs/reference/google-http-client/2.0.3/com.google.api.client.http.HttpResponseException)
-   [1.47.1](/java/docs/reference/google-http-client/1.47.1/com.google.api.client.http.HttpResponseException)
-   [1.46.3](/java/docs/reference/google-http-client/1.46.3/com.google.api.client.http.HttpResponseException)
-   [1.45.3](/java/docs/reference/google-http-client/1.45.3/com.google.api.client.http.HttpResponseException)
-   [1.44.2](/java/docs/reference/google-http-client/1.44.2/com.google.api.client.http.HttpResponseException)
-   [1.43.2](/java/docs/reference/google-http-client/1.43.2/com.google.api.client.http.HttpResponseException)
-   [1.42.3](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.http.HttpResponseException)
-   [1.41.8](/java/docs/reference/google-http-client/1.41.8/com.google.api.client.http.HttpResponseException)

```
public class HttpResponseException extends IOException
```

Exception thrown when an error status code is detected in an HTTP response.

Implementation is not thread safe.

## Inherited Members

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

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

## Static Methods

### computeMessageBuffer(HttpResponse response)

```
public static StringBuilder computeMessageBuffer(HttpResponse response)
```

Returns an exception message string builder to use for the given HTTP response.

**Parameter**

**Name**

**Description**

`response`

`[HttpResponse](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.http.HttpResponse)`  

**Returns**

**Type**

**Description**

`[StringBuilder](https://docs.oracle.com/javase/8/docs/api/java/lang/StringBuilder.html)`

## Constructors

### HttpResponseException(HttpResponse response)

```
public HttpResponseException(HttpResponse response)
```

Constructor that constructs a detail message from the given HTTP response that includes the status code, status message and HTTP response content.

Callers of this constructor should call [HttpResponse#disconnect](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.http.HttpResponse#com_google_api_client_http_HttpResponse_disconnect_) after [HttpResponseException](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.http.HttpResponseException) is instantiated. Example usage:

try { throw new HttpResponseException(response); } finally { response.disconnect(); }

**Parameter**

**Name**

**Description**

`response`

`[HttpResponse](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.http.HttpResponse)`  

HTTP response

### HttpResponseException(HttpResponseException.Builder builder)

```
protected HttpResponseException(HttpResponseException.Builder builder)
```

**Parameter**

**Name**

**Description**

`builder`

`[HttpResponseException.Builder](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.http.HttpResponseException.Builder)`  

builder

## Methods

### getAttemptCount()

```
public final int getAttemptCount()
```

Returns the attempt count

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getContent()

```
public final String getContent()
```

Returns the HTTP response content or `null` for none.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getHeaders()

```
public HttpHeaders getHeaders()
```

Returns the HTTP response headers.

**Returns**

**Type**

**Description**

`[HttpHeaders](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.http.HttpHeaders)`

### getStatusCode()

```
public final int getStatusCode()
```

Returns the HTTP status code or `0` for none.

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getStatusMessage()

```
public final String getStatusMessage()
```

Returns the HTTP status message or `null` for none.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### isSuccessStatusCode()

```
public final boolean isSuccessStatusCode()
```

Returns whether received a successful HTTP status code `>= 200 && < 300` (see [#getStatusCode()](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.http.HttpResponseException#com_google_api_client_http_HttpResponseException_getStatusCode__)).

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
