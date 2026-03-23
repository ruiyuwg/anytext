-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Exception JdbcSqlExceptionFactory.JdbcSqlTimeoutException (2.23.0) Stay organized with collections Save and categorize content based on your preferences.

2.35.4 (latest) 2.35.3 2.34.0 2.33.2 2.32.3 2.31.2 2.30.4 2.28.0 2.27.1 2.26.1 2.25.1 2.24.1 2.23.0 2.22.1 2.21.0 2.20.2 2.19.3 2.18.1 2.17.0 2.16.1 2.15.5 2.14.6 2.13.4 2.11.4 2.10.0 2.9.16 2.8.0 2.7.12 2.6.4 2.5.11

```
public static class JdbcSqlExceptionFactory.JdbcSqlTimeoutException extends SQLTimeoutException implements JdbcSqlException
```

Specific [SQLException](https://docs.oracle.com/javase/8/docs/api/java/sql/SQLException.html) that is thrown when a statement times out

## Implements

[JdbcSqlException](/java/docs/reference/google-cloud-spanner-jdbc/2.23.0/com.google.cloud.spanner.jdbc.JdbcSqlException)

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

[SQLException.getErrorCode()](https://docs.oracle.com/javase/8/docs/api/java/sql/SQLException.html#getErrorCode--)

[SQLException.getNextException()](https://docs.oracle.com/javase/8/docs/api/java/sql/SQLException.html#getNextException--)

[SQLException.getSQLState()](https://docs.oracle.com/javase/8/docs/api/java/sql/SQLException.html#getSQLState--)

[SQLException.iterator()](https://docs.oracle.com/javase/8/docs/api/java/sql/SQLException.html#iterator--)

[SQLException.setNextException(SQLException)](https://docs.oracle.com/javase/8/docs/api/java/sql/SQLException.html#setNextException-java.sql.SQLException-)

## Methods

### getCode()

```
public Code getCode()
```

Returns the corresponding gRPC code for this exception

**Returns**

**Type**

**Description**

`com.google.rpc.Code`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
