-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum StatementResult.ClientSideStatementType (6.79.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public enum StatementResult.ClientSideStatementType extends Enum<StatementResult.ClientSideStatementType>
```

The type of client side statement that was executed.

## Inherited Members

[Enum.<T>valueOf(Class<T>,String)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#valueOf-java.lang.Class-java.lang.String-)

[Enum.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#clone--)

[Enum.compareTo(E)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#compareTo-E-)

[Enum.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#equals-java.lang.Object-)

[Enum.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#finalize--)

[Enum.getDeclaringClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#getDeclaringClass--)

[Enum.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#hashCode--)

[Enum.name()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#name--)

[Enum.ordinal()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#ordinal--)

[Enum.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#toString--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Fields

**Name**

**Description**

`ABORT_BATCH`

`BEGIN`

`COMMIT`

`EXPLAIN`

`PARTITION`

`RESET_ALL`

`ROLLBACK`

`RUN_BATCH`

`RUN_PARTITION`

`RUN_PARTITIONED_QUERY`

`SET_AUTOCOMMIT`

`SET_AUTOCOMMIT_DML_MODE`

`SET_AUTO_BATCH_DML`

`SET_AUTO_BATCH_DML_UPDATE_COUNT`

`SET_AUTO_BATCH_DML_UPDATE_COUNT_VERIFICATION`

`SET_AUTO_PARTITION_MODE`

`SET_DATA_BOOST_ENABLED`

`SET_DEFAULT_TRANSACTION_ISOLATION`

`SET_DELAY_TRANSACTION_START_UNTIL_FIRST_WRITE`

`SET_DIRECTED_READ`

`SET_EXCLUDE_TXN_FROM_CHANGE_STREAMS`

`SET_KEEP_TRANSACTION_ALIVE`

`SET_MAX_COMMIT_DELAY`

`SET_MAX_PARTITIONED_PARALLELISM`

`SET_MAX_PARTITIONS`

`SET_OPTIMIZER_STATISTICS_PACKAGE`

`SET_OPTIMIZER_VERSION`

`SET_PROTO_DESCRIPTORS`

`SET_PROTO_DESCRIPTORS_FILE_PATH`

`SET_READONLY`

`SET_READ_ONLY_STALENESS`

`SET_RETRY_ABORTS_INTERNALLY`

`SET_RETURN_COMMIT_STATS`

`SET_RPC_PRIORITY`

`SET_SAVEPOINT_SUPPORT`

`SET_STATEMENT_TAG`

`SET_STATEMENT_TIMEOUT`

`SET_TRANSACTION_MODE`

`SET_TRANSACTION_TAG`

`SHOW_AUTOCOMMIT`

`SHOW_AUTOCOMMIT_DML_MODE`

`SHOW_AUTO_BATCH_DML`

`SHOW_AUTO_BATCH_DML_UPDATE_COUNT`

`SHOW_AUTO_BATCH_DML_UPDATE_COUNT_VERIFICATION`

`SHOW_AUTO_PARTITION_MODE`

`SHOW_COMMIT_RESPONSE`

`SHOW_COMMIT_TIMESTAMP`

`SHOW_DATA_BOOST_ENABLED`

`SHOW_DELAY_TRANSACTION_START_UNTIL_FIRST_WRITE`

`SHOW_DIRECTED_READ`

`SHOW_EXCLUDE_TXN_FROM_CHANGE_STREAMS`

`SHOW_KEEP_TRANSACTION_ALIVE`

`SHOW_MAX_COMMIT_DELAY`

`SHOW_MAX_PARTITIONED_PARALLELISM`

`SHOW_MAX_PARTITIONS`

`SHOW_OPTIMIZER_STATISTICS_PACKAGE`

`SHOW_OPTIMIZER_VERSION`

`SHOW_PROTO_DESCRIPTORS`

`SHOW_PROTO_DESCRIPTORS_FILE_PATH`

`SHOW_READONLY`

`SHOW_READ_ONLY_STALENESS`

`SHOW_READ_TIMESTAMP`

`SHOW_RETRY_ABORTS_INTERNALLY`

`SHOW_RETURN_COMMIT_STATS`

`SHOW_RPC_PRIORITY`

`SHOW_SAVEPOINT_SUPPORT`

`SHOW_STATEMENT_TAG`

`SHOW_STATEMENT_TIMEOUT`

`SHOW_TRANSACTION_ISOLATION_LEVEL`

`SHOW_TRANSACTION_TAG`

`START_BATCH_DDL`

`START_BATCH_DML`

## Static Methods

**Name**

**Description**

`valueOf(String name)`

`values()`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
