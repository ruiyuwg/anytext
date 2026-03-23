-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ReadOnlyTransaction (6.85.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public interface ReadOnlyTransaction extends ReadContext
```

A transaction type that provides guaranteed consistency across several reads, but does not allow writes. Snapshot read-only transactions can be configured to read at timestamps in the past. Snapshot read-only transactions do not need to be committed.

Snapshot read-only transactions provide a simpler method than locking read-write transactions for doing several consistent reads. However, this type of transaction does not support writes.

Snapshot read-only transactions do not take locks. Instead, they work by choosing a Cloud Spanner timestamp, then executing all reads at that timestamp. Since they do not acquire locks, they do not block concurrent read-write transactions.

Unlike locking read-write transactions, snapshot read-only transactions never abort. They can fail if the chosen read timestamp is garbage collected; however, the default garbage collection policy is generous enough that most applications do not need to worry about this in practice. See the class documentation of [TimestampBound](/java/docs/reference/google-cloud-spanner/6.85.0/com.google.cloud.spanner.TimestampBound) for more details.

To execute a snapshot transaction, specify a [TimestampBound](/java/docs/reference/google-cloud-spanner/6.85.0/com.google.cloud.spanner.TimestampBound), which tells Cloud Spanner how to choose a read timestamp. See Also: Session#readOnlyTransaction(TimestampBound), Session#singleUseReadOnlyTransaction(TimestampBound)

## Implements

[ReadContext](/java/docs/reference/google-cloud-spanner/6.85.0/com.google.cloud.spanner.ReadContext)

## Methods

### getReadTimestamp()

```
public abstract Timestamp getReadTimestamp()
```

Returns the timestamp chosen to perform reads and queries in this transaction. The value can only be read after some read or query has either returned some data or completed without returning any data.

**Returns**

**Type**

**Description**

`com.google.cloud.Timestamp`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
