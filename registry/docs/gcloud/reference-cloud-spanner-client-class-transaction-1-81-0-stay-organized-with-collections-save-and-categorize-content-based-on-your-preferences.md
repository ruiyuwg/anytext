-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Spanner Client - Class Transaction (1.81.0) Stay organized with collections Save and categorize content based on your preferences.

2.6.0 (latest) 2.5.1 2.4.1 2.3.0 2.2.0 2.1.0 2.0.1-RC1 1.106.0 1.105.1 1.104.1 1.103.0 1.102.0 1.101.0 1.100.0 1.98.0 1.97.0 1.96.0 1.95.0 1.94.0 1.93.1 1.92.1 1.91.0 1.90.0 1.89.0 1.88.0 1.87.0 1.86.0 1.85.0 1.84.0 1.83.0 1.82.0 1.81.0 1.80.0 1.79.0 1.78.0 1.77.0 1.76.1 1.68.0 1.67.0 1.66.0 1.65.0 1.64.0 1.63.2 1.62.1 1.61.0 1.60.0 1.59.0 1.58.4 1.57.0 1.56.0 1.55.0 1.54.2

Reference documentation and code samples for the Cloud Spanner Client class Transaction.

Manages interaction with Cloud Spanner inside a Transaction.

Transactions can be started via [Google\\Cloud\\Spanner\\Database::runTransaction()](/php/docs/reference/cloud-spanner/1.81.0/Database#_Google_Cloud_Spanner_Database__runTransaction__) (recommended) or via [Google\\Cloud\\Spanner\\Database::transaction()](/php/docs/reference/cloud-spanner/1.81.0/Database#_Google_Cloud_Spanner_Database__transaction__). Transactions should always call [Google\\Cloud\\Spanner\\Transaction::commit()](/php/docs/reference/cloud-spanner/1.81.0/Transaction#_Google_Cloud_Spanner_Transaction__commit__) or [Google\\Cloud\\Spanner\\Transaction::rollback()](/php/docs/reference/cloud-spanner/1.81.0/Transaction#_Google_Cloud_Spanner_Transaction__rollback__) to ensure that locks are released in a timely manner.

If you do not plan on performing any writes in your transaction, a [Google\\Cloud\\Spanner\\Snapshot](/php/docs/reference/cloud-spanner/1.81.0/Snapshot) is a better solution which does not require a commit or rollback and does not lock any data.

Transactions may raise Google\\Cloud\\Core\\Exception\\AbortedException errors when the transaction cannot complete for any reason. In this case, the entire operation (all reads and writes) should be reapplied atomically. Google Cloud PHP handles this transparently when using [Google\\Cloud\\Spanner\\Database::runTransaction()](/php/docs/reference/cloud-spanner/1.81.0/Database#_Google_Cloud_Spanner_Database__runTransaction__). In other cases, it is highly recommended that applications implement their own retry logic.

Example:

```
use Google\Cloud\Spanner\SpannerClient;

$spanner = new SpannerClient();

$database = $spanner->connect('my-instance', 'my-database');

$database->runTransaction(function (Transaction $t) {
    // do stuff.

    $t->commit();
});
```

```
// Get a transaction to manage manually.
$transaction = $database->transaction();
```

## Namespace

Google \\ Cloud \\ Spanner

## Methods

### \_\_construct

**Parameters**

**Name**

**Description**

`operation`

`[Google\Cloud\Spanner\Operation](/php/docs/reference/cloud-spanner/1.81.0/Operation)`  

The Operation instance.

`session`

`[Google\Cloud\Spanner\Session\Session](/php/docs/reference/cloud-spanner/1.81.0/Session.Session)`  

The session to use for spanner interactions.

`transactionId`

`string`  

\[optional\] The Transaction ID. If no ID is provided, the Transaction will be a Single-Use Transaction.

`isRetry`

`bool`  

Whether the transaction will automatically retry or not.

`tag`

`string`  

A transaction tag. Requests made using this transaction will use this as the transaction tag.

`options`

`array`  

Configuration Options.

`↳ begin`

`array`  

The begin Transaction options. [Refer](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#transactionoptions)

`mapper`

`[Google\Cloud\Spanner\ValueMapper](/php/docs/reference/cloud-spanner/1.81.0/ValueMapper)`  

Consumed internally for properly map mutation data.

### getCommitStats

Get the commit stats for this transaction. Commit stats are only available after commit has been called with `return_commit_stats` => true. If commit is called multiple times, only the commitStats for the last commit will be available.

Example:

```
$transaction->commit(["returnCommitStats" => true]);
$commitStats = $transaction->getCommitStats();
```

**Returns**

**Type**

**Description**

`array`

The commit stats

### executeUpdate

See also:

-   [ExecuteSqlRequest](https://cloud.google.com/spanner/reference/rpc/google.spanner.v1#google.spanner.v1.ExecuteSqlRequest)
-   [DML Syntax Guide](https://cloud.google.com/spanner/docs/dml-syntax)

**Parameters**

**Name**

**Description**

`sql`

`string`  

The query string to execute.

`options`

`array`  

Configuration Options.

`↳ parameters`

`array`  

A key/value array of Query Parameters, where the key is represented in the query string prefixed by a `@` symbol.

`↳ types`

`array`  

A key/value array of Query Parameter types. Generally, Google Cloud PHP can infer types. Explicit type declarations are required in the case of struct parameters, or when a null value exists as a parameter. Accepted values for primitive types are defined as constants on [Google\\Cloud\\Spanner\\Database](/php/docs/reference/cloud-spanner/1.81.0/Database), and are as follows: `Database::TYPE_BOOL`, `Database::TYPE_INT64`, `Database::TYPE_FLOAT64`, `Database::TYPE_TIMESTAMP`, `Database::TYPE_DATE`, `Database::TYPE_STRING`, `Database::TYPE_BYTES`. If the value is an array, use [Google\\Cloud\\Spanner\\ArrayType](/php/docs/reference/cloud-spanner/1.81.0/ArrayType) to declare the array parameter types. Likewise, for structs, use [Google\\Cloud\\Spanner\\StructType](/php/docs/reference/cloud-spanner/1.81.0/StructType).

`↳ requestOptions`

`array`  

Request options. For more information on available options, please see [the upstream documentation](https://cloud.google.com/spanner/docs/reference/rest/v1/RequestOptions). Please note, if using the `priority` setting you may utilize the constants available on [Google\\Cloud\\Spanner\\V1\\RequestOptions\\Priority](/php/docs/reference/cloud-spanner/1.81.0/V1.RequestOptions.Priority) to set a value. Please note, the `transactionTag` setting will be ignored as the transaction tag should have already been set when creating the transaction.

**Returns**

**Type**

**Description**

`int`

The number of rows modified.

### executeUpdateBatch

See also:

-   [ExecuteBatchDmlRequest](https://cloud.google.com/spanner/reference/rpc/google.spanner.v1#google.spanner.v1.ExecuteBatchDmlRequest)

**Parameters**

**Name**

**Description**

`statements`

`array[]`  

A list of DML statements to run. Each statement must contain a `sql` key, where the value is a DML string. If the DML contains placeholders, values are provided as a key/value array in key `parameters`. If parameter types are required, they must be provided in key `types`. Generally, Google Cloud PHP can infer types. Explicit type declarations are required in the case of struct parameters, or when a null value exists as a parameter. Accepted values for primitive types are defined as constants on [Google\\Cloud\\Spanner\\Database](/php/docs/reference/cloud-spanner/1.81.0/Database), and are as follows: `Database::TYPE_BOOL`, `Database::TYPE_INT64`, `Database::TYPE_FLOAT64`, `Database::TYPE_TIMESTAMP`, `Database::TYPE_DATE`, `Database::TYPE_STRING`, `Database::TYPE_BYTES`. If the value is an array, use [Google\\Cloud\\Spanner\\ArrayType](/php/docs/reference/cloud-spanner/1.81.0/ArrayType) to declare the array parameter types. Likewise, for structs, use [Google\\Cloud\\Spanner\\StructType](/php/docs/reference/cloud-spanner/1.81.0/StructType).

`options`

`array`  

Configuration Options.

`↳ requestOptions`

`array`  

Request options. For more information on available options, please see [the upstream documentation](https://cloud.google.com/spanner/docs/reference/rest/v1/RequestOptions). Please note, if using the `priority` setting you may utilize the constants available on [Google\\Cloud\\Spanner\\V1\\RequestOptions\\Priority](/php/docs/reference/cloud-spanner/1.81.0/V1.RequestOptions.Priority) to set a value. Please note, the `transactionTag` setting will be ignored as the transaction tag should have already been set when creating the transaction.

**Returns**

**Type**

**Description**

`[Google\Cloud\Spanner\BatchDmlResult](/php/docs/reference/cloud-spanner/1.81.0/BatchDmlResult)`

### rollback

Roll back a transaction.

Rolls back a transaction, releasing any locks it holds. It is a good idea to call this for any transaction that includes one or more Read or ExecuteSql requests and ultimately decides not to commit.

This closes the transaction, preventing any future API calls inside it.

Rollback will NOT error if the transaction is not found or was already aborted.

Example:

```
$transaction->rollback();
```

**Parameter**

**Name**

**Description**

`options`

`array`  

\[optional\] Configuration Options.

**Returns**

**Type**

**Description**

`void`

### commit

Commit and end the transaction.

It is advised that transactions be run inside [Google\\Cloud\\Spanner\\Database::runTransaction()](/php/docs/reference/cloud-spanner/1.81.0/Database#_Google_Cloud_Spanner_Database__runTransaction__) in order to take advantage of automated transaction retry in case of a transaction aborted error.

Example:

```
$transaction->commit();
```

**Parameters**

**Name**

**Description**

`options`

`array`  

Configuration Options.

`↳ mutations`

`array`  

An array of mutations to commit. May be used instead of or in addition to enqueing mutations separately.

`↳ returnCommitStats`

`bool`  

If true, commit statistics will be returned and accessible via [Google\\Cloud\\Spanner\\Transaction::getCommitStats()](/php/docs/reference/cloud-spanner/1.81.0/Transaction#_Google_Cloud_Spanner_Transaction__getCommitStats__). **Defaults to** `false`.

`↳ maxCommitDelay`

`Duration`  

The amount of latency this request is willing to incur in order to improve throughput. **Defaults to** null.

`↳ requestOptions`

`array`  

Request options. For more information on available options, please see [the upstream documentation](https://cloud.google.com/spanner/docs/reference/rest/v1/RequestOptions). Please note, if using the `priority` setting you may utilize the constants available on [Google\\Cloud\\Spanner\\V1\\RequestOptions\\Priority](/php/docs/reference/cloud-spanner/1.81.0/V1.RequestOptions.Priority) to set a value. Please note, the `requestTag` setting will be ignored as it is not supported for commit requests.

**Returns**

**Type**

**Description**

`[Google\Cloud\Spanner\Timestamp](/php/docs/reference/cloud-spanner/1.81.0/Timestamp)`

The commit timestamp.

### state

Retrieve the Transaction State.

Will be one of `Transaction::STATE_ACTIVE`, `Transaction::STATE_COMMITTED`, or `Transaction::STATE_ROLLED_BACK`.

Example:

```
$state = $transaction->state();
```

**Returns**

**Type**

**Description**

`int`

### isRetry

Check whether the current transaction is a retry transaction.

When using [Google\\Cloud\\Spanner\\Database::runTransaction()](/php/docs/reference/cloud-spanner/1.81.0/Database#_Google_Cloud_Spanner_Database__runTransaction__), transactions are automatically retried when a conflict causes it to abort. In such cases, subsequent invocations of the transaction callable will provide a transaction where `$transaction->isRetry()` is true. This can be useful for debugging and understanding how code is working.

Example:

```
if ($transaction->isRetry()) {
    echo 'This is a retry transaction!';
}
```

**Returns**

**Type**

**Description**

`bool`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
