-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class PostgreSQLStatementParser (6.23.4) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public class PostgreSQLStatementParser extends AbstractStatementParser
```

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractStatementParser](/java/docs/reference/google-cloud-spanner/6.23.4/com.google.cloud.spanner.connection.AbstractStatementParser) \> PostgreSQLStatementParser

## Inherited Members

[AbstractStatementParser.convertPositionalParametersToNamedParameters(char,String)](/java/docs/reference/google-cloud-spanner/6.23.4/com.google.cloud.spanner.connection.AbstractStatementParser#com_google_cloud_spanner_connection_AbstractStatementParser_convertPositionalParametersToNamedParameters_char_java_lang_String_)

[AbstractStatementParser.getInstance(Dialect)](/java/docs/reference/google-cloud-spanner/6.23.4/com.google.cloud.spanner.connection.AbstractStatementParser#com_google_cloud_spanner_connection_AbstractStatementParser_getInstance_com_google_cloud_spanner_Dialect_)

[AbstractStatementParser.isDdlStatement(String)](/java/docs/reference/google-cloud-spanner/6.23.4/com.google.cloud.spanner.connection.AbstractStatementParser#com_google_cloud_spanner_connection_AbstractStatementParser_isDdlStatement_java_lang_String_)

[AbstractStatementParser.isQuery(String)](/java/docs/reference/google-cloud-spanner/6.23.4/com.google.cloud.spanner.connection.AbstractStatementParser#com_google_cloud_spanner_connection_AbstractStatementParser_isQuery_java_lang_String_)

[AbstractStatementParser.isUpdateStatement(String)](/java/docs/reference/google-cloud-spanner/6.23.4/com.google.cloud.spanner.connection.AbstractStatementParser#com_google_cloud_spanner_connection_AbstractStatementParser_isUpdateStatement_java_lang_String_)

[AbstractStatementParser.parse(Statement)](/java/docs/reference/google-cloud-spanner/6.23.4/com.google.cloud.spanner.connection.AbstractStatementParser#com_google_cloud_spanner_connection_AbstractStatementParser_parse_com_google_cloud_spanner_Statement_)

[AbstractStatementParser.removeCommentsAndTrim(String)](/java/docs/reference/google-cloud-spanner/6.23.4/com.google.cloud.spanner.connection.AbstractStatementParser#com_google_cloud_spanner_connection_AbstractStatementParser_removeCommentsAndTrim_java_lang_String_)

[AbstractStatementParser.supportsExplain()](/java/docs/reference/google-cloud-spanner/6.23.4/com.google.cloud.spanner.connection.AbstractStatementParser#com_google_cloud_spanner_connection_AbstractStatementParser_supportsExplain__)

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

## Methods

### getQueryParameters(String sql)

```
public Set<String> getQueryParameters(String sql)
```

Note: This is an internal API and breaking changes can be made without prior notice.

Returns the PostgreSQL-style query parameters ($1, $2, ...) in the given SQL string. The SQL-string is assumed to not contain any comments. Use #removeCommentsAndTrim(String) to remove all comments before calling this method. Occurrences of query-parameter like strings inside quoted identifiers or string literals are ignored.

The following example will return a set containing ("$1", "$2"). `select col1, col2, "col$4" from some_table where col1=$1 and col2=$2 and not col3=$1 and col4='$3'`

**Parameter**

**Name**

**Description**

sql

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

the SQL-string to check for parameters. Must not contain comments.

**Returns**

**Type**

**Description**

[Set](https://docs.oracle.com/javase/8/docs/api/java/util/Set.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

A set containing all the parameters in the SQL-string.

### supportsExplain()

```
protected boolean supportsExplain()
```

Indicates whether the parser supports the `EXPLAIN` clause. The PostgreSQL parser does not support it.

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

**Overrides**

[AbstractStatementParser.supportsExplain()](/java/docs/reference/google-cloud-spanner/6.23.4/com.google.cloud.spanner.connection.AbstractStatementParser#com_google_cloud_spanner_connection_AbstractStatementParser_supportsExplain__)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
