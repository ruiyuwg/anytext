-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TransactionOptions.Builder Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public static final class TransactionOptions.Builder extends GeneratedMessageV3.Builder<TransactionOptions.Builder> implements TransactionOptionsOrBuilder
```

Transactions: Each session can have at most one active transaction at a time (note that standalone reads and queries use a transaction internally and do count towards the one transaction limit). After the active transaction is completed, the session can immediately be re-used for the next transaction. It is not necessary to create a new session for each transaction. Transaction Modes: Cloud Spanner supports three transaction modes:

1.  Locking read-write. This type of transaction is the only way to write data into Cloud Spanner. These transactions rely on pessimistic locking and, if necessary, two-phase commit. Locking read-write transactions may abort, requiring the application to retry.
2.  Snapshot read-only. This transaction type provides guaranteed consistency across several reads, but does not allow writes. Snapshot read-only transactions can be configured to read at timestamps in the past. Snapshot read-only transactions do not need to be committed.
3.  Partitioned DML. This type of transaction is used to execute a single Partitioned DML statement. Partitioned DML partitions the key space and runs the DML statement over each partition in parallel using separate, internal transactions that commit independently. Partitioned DML transactions do not need to be committed. For transactions that only read, snapshot read-only transactions provide simpler semantics and are almost always faster. In particular, read-only transactions do not take locks, so they do not conflict with read-write transactions. As a consequence of not taking locks, they also do not abort, so retry loops are not needed. Transactions may only read/write data in a single database. They may, however, read/write data in different tables within that database. Locking Read-Write Transactions: Locking transactions may be used to atomically read-modify-write data anywhere in a database. This type of transaction is externally consistent. Clients should attempt to minimize the amount of time a transaction is active. Faster transactions commit with higher probability and cause less contention. Cloud Spanner attempts to keep read locks active as long as the transaction continues to do reads, and the transaction has not been terminated by Commit or Rollback. Long periods of inactivity at the client may cause Cloud Spanner to release a transaction's locks and abort it. Conceptually, a read-write transaction consists of zero or more reads or SQL statements followed by Commit. At any time before Commit, the client can send a Rollback request to abort the transaction. Semantics: Cloud Spanner can commit the transaction if all read locks it acquired are still valid at commit time, and it is able to acquire write locks for all writes. Cloud Spanner can abort the transaction for any reason. If a commit attempt returns `ABORTED`, Cloud Spanner guarantees that the transaction has not modified any user data in Cloud Spanner. Unless the transaction commits, Cloud Spanner makes no guarantees about how long the transaction's locks were held for. It is an error to use Cloud Spanner locks for any sort of mutual exclusion other than between Cloud Spanner transactions themselves. Retrying Aborted Transactions: When a transaction aborts, the application can choose to retry the whole transaction again. To maximize the chances of successfully committing the retry, the client should execute the retry in the same session as the original attempt. The original session's lock priority increases with each consecutive abort, meaning that each attempt has a slightly better chance of success than the previous. Under some circumstances (for example, many transactions attempting to modify the same row(s)), a transaction can abort many times in a short period before successfully committing. Thus, it is not a good idea to cap the number of retries a transaction can attempt; instead, it is better to limit the total amount of time spent retrying. Idle Transactions: A transaction is considered idle if it has no outstanding reads or SQL queries and has not started a read or SQL query within the last 10 seconds. Idle transactions can be aborted by Cloud Spanner so that they don't hold on to locks indefinitely. If an idle transaction is aborted, the commit will fail with error `ABORTED`. If this behavior is undesirable, periodically executing a simple SQL query in the transaction (for example, `SELECT 1`) prevents the transaction from becoming idle. Snapshot Read-Only Transactions: Snapshot read-only transactions provides a simpler method than locking read-write transactions for doing several consistent reads. However, this type of transaction does not support writes. Snapshot transactions do not take locks. Instead, they work by choosing a Cloud Spanner timestamp, then executing all reads at that timestamp. Since they do not acquire locks, they do not block concurrent read-write transactions. Unlike locking read-write transactions, snapshot read-only transactions never abort. They can fail if the chosen read timestamp is garbage collected; however, the default garbage collection policy is generous enough that most applications do not need to worry about this in practice. Snapshot read-only transactions do not need to call Commit or Rollback (and in fact are not permitted to do so). To execute a snapshot transaction, the client specifies a timestamp bound, which tells Cloud Spanner how to choose a read timestamp. The types of timestamp bound are:
4.  Strong (the default).
5.  Bounded staleness.
6.  Exact staleness. If the Cloud Spanner database to be read is geographically distributed, stale read-only transactions can execute more quickly than strong or read-write transaction, because they are able to execute far from the leader replica. Each type of timestamp bound is discussed in detail below. Strong: Strong reads are guaranteed to see the effects of all transactions that have committed before the start of the read. Furthermore, all rows yielded by a single read are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Strong reads are not repeatable: two consecutive strong read-only transactions might return inconsistent results if there are concurrent writes. If consistency across reads is required, the reads should be executed within a transaction or at an exact read timestamp. See TransactionOptions.ReadOnly.strong. Exact Staleness: These timestamp bounds execute reads at a user-specified timestamp. Reads at a timestamp are guaranteed to see a consistent prefix of the global transaction history: they observe modifications done by all transactions with a commit timestamp less than or equal to the read timestamp, and observe none of the modifications done by transactions with a larger commit timestamp. They will block until all conflicting transactions that may be assigned commit timestamps <= the read timestamp have finished. The timestamp can either be expressed as an absolute Cloud Spanner commit timestamp or a staleness relative to the current time. These modes do not require a "negotiation phase" to pick a timestamp. As a result, they execute slightly faster than the equivalent boundedly stale concurrency modes. On the other hand, boundedly stale reads usually return fresher results. See TransactionOptions.ReadOnly.read\_timestamp and TransactionOptions.ReadOnly.exact\_staleness. Bounded Staleness: Bounded staleness modes allow Cloud Spanner to pick the read timestamp, subject to a user-provided staleness bound. Cloud Spanner chooses the newest timestamp within the staleness bound that allows execution of the reads at the closest available replica without blocking. All rows yielded are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Boundedly stale reads are not repeatable: two stale reads, even if they use the same staleness bound, can execute at different timestamps and thus return inconsistent results. Boundedly stale reads execute in two phases: the first phase negotiates a timestamp among all replicas needed to serve the read. In the second phase, reads are executed at the negotiated timestamp. As a result of the two phase execution, bounded staleness reads are usually a little slower than comparable exact staleness reads. However, they are typically able to return fresher results, and are more likely to execute at the closest replica. Because the timestamp negotiation requires up-front knowledge of which rows will be read, it can only be used with single-use read-only transactions. See TransactionOptions.ReadOnly.max\_staleness and TransactionOptions.ReadOnly.min\_read\_timestamp. Old Read Timestamps and Garbage Collection: Cloud Spanner continuously garbage collects deleted and overwritten data in the background to reclaim storage space. This process is known as "version GC". By default, version GC reclaims versions after they are one hour old. Because of this, Cloud Spanner cannot perform reads at read timestamps more than one hour in the past. This restriction also applies to in-progress reads and/or SQL queries whose timestamp become too old while executing. Reads and SQL queries with too-old read timestamps fail with the error `FAILED_PRECONDITION`. Partitioned DML Transactions: Partitioned DML transactions are used to execute DML statements with a different execution strategy that provides different, and often better, scalability properties for large, table-wide operations than DML in a ReadWrite transaction. Smaller scoped statements, such as an OLTP workload, should prefer using ReadWrite transactions. Partitioned DML partitions the keyspace and runs the DML statement on each partition in separate, internal transactions. These transactions commit automatically when complete, and run independently from one another. To reduce lock contention, this execution strategy only acquires read locks on rows that match the WHERE clause of the statement. Additionally, the smaller per-partition transactions hold locks for less time. That said, Partitioned DML is not a drop-in replacement for standard DML used in ReadWrite transactions.
    -   The DML statement must be fully-partitionable. Specifically, the statement must be expressible as the union of many statements which each access only a single row of the table.
    -   The statement is not applied atomically to all rows of the table. Rather, the statement is applied atomically to partitions of the table, in independent transactions. Secondary index rows are updated atomically with the base table rows.
    -   Partitioned DML does not guarantee exactly-once execution semantics against a partition. The statement will be applied at least once to each partition. It is strongly recommended that the DML statement should be idempotent to avoid unexpected results. For instance, it is potentially dangerous to run a statement such as `UPDATE table SET column = column + 1` as it could be run multiple times against some rows.
    -   The partitions are committed automatically - there is no support for Commit or Rollback. If the call returns an error, or if the client issuing the ExecuteSql call dies, it is possible that some rows had the statement executed on them successfully. It is also possible that statement was never executed against other rows.
    -   Partitioned DML transactions may only contain the execution of a single DML statement via ExecuteSql or ExecuteStreamingSql.
    -   If any error is encountered during the execution of the partitioned DML operation (for instance, a UNIQUE INDEX violation, division by zero, or a value that cannot be stored due to schema constraints), then the operation is stopped at that point and an error is returned. It is possible that at this point, some partitions have been committed (or even committed multiple times), and other partitions have not been run at all. Given the above, Partitioned DML is good fit for large, database-wide, operations that are idempotent, such as deleting old rows from a very large table.

Protobuf type `google.spanner.v1.TransactionOptions`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> TransactionOptions.Builder

## Implements

[TransactionOptionsOrBuilder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptionsOrBuilder)

## Inherited Members

[AbstractMessage.Builder.findInitializationErrors()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_findInitializationErrors__)

[AbstractMessage.Builder.getInitializationErrorString()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_getInitializationErrorString__)

[AbstractMessage.Builder.internalMergeFrom(AbstractMessageLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_internalMergeFrom_com_google_protobuf_AbstractMessageLite_)

[AbstractMessage.Builder.mergeDelimitedFrom(InputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeDelimitedFrom_java_io_InputStream_)

[AbstractMessage.Builder.mergeDelimitedFrom(InputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeDelimitedFrom_java_io_InputStream_com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessage.Builder.mergeFrom(byte\[\])](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_byte___)

[AbstractMessage.Builder.mergeFrom(byte\[\],ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_byte___com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessage.Builder.mergeFrom(byte\[\],int,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_byte___int_int_)

[AbstractMessage.Builder.mergeFrom(byte\[\],int,int,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_byte___int_int_com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessage.Builder.mergeFrom(ByteString)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_ByteString_)

[AbstractMessage.Builder.mergeFrom(ByteString,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_ByteString_com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessage.Builder.mergeFrom(CodedInputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_)

[AbstractMessage.Builder.mergeFrom(CodedInputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessage.Builder.mergeFrom(Message)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

[AbstractMessage.Builder.mergeFrom(InputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_java_io_InputStream_)

[AbstractMessage.Builder.mergeFrom(InputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_java_io_InputStream_com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessage.Builder.newUninitializedMessageException(Message)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_newUninitializedMessageException_com_google_protobuf_Message_)

[AbstractMessage.Builder.toString()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_toString__)

[AbstractMessageLite.Builder.<T>addAll(Iterable<T>,Collection<? super T>)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder__T_addAll_java_lang_Iterable_T__java_util_Collection___super_T__)

[AbstractMessageLite.Builder.<T>addAll(Iterable<T>,List<? super T>)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder__T_addAll_java_lang_Iterable_T__java_util_List___super_T__)

[AbstractMessageLite.Builder.internalMergeFrom(MessageType)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder_internalMergeFrom_MessageType_)

[AbstractMessageLite.Builder.mergeFrom(MessageLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder_mergeFrom_com_google_protobuf_MessageLite_)

[AbstractMessageLite.Builder.newUninitializedMessageException(MessageLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder_newUninitializedMessageException_com_google_protobuf_MessageLite_)

[GeneratedMessageV3.Builder.addRepeatedField(Descriptors.FieldDescriptor,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

[GeneratedMessageV3.Builder.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

[GeneratedMessageV3.Builder.clearField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.Builder.clearOneof(Descriptors.OneofDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

[GeneratedMessageV3.Builder.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

[GeneratedMessageV3.Builder.getAllFields()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getAllFields__)

[GeneratedMessageV3.Builder.getDescriptorForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getDescriptorForType__)

[GeneratedMessageV3.Builder.getField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.Builder.getFieldBuilder(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getFieldBuilder_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.Builder.getOneofFieldDescriptor(Descriptors.OneofDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getOneofFieldDescriptor_com_google_protobuf_Descriptors_OneofDescriptor_)

[GeneratedMessageV3.Builder.getParentForChildren()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getParentForChildren__)

[GeneratedMessageV3.Builder.getRepeatedField(Descriptors.FieldDescriptor,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_)

[GeneratedMessageV3.Builder.getRepeatedFieldBuilder(Descriptors.FieldDescriptor,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getRepeatedFieldBuilder_com_google_protobuf_Descriptors_FieldDescriptor_int_)

[GeneratedMessageV3.Builder.getRepeatedFieldCount(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getRepeatedFieldCount_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.Builder.getUnknownFields()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getUnknownFields__)

[GeneratedMessageV3.Builder.hasField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_hasField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.Builder.hasOneof(Descriptors.OneofDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_hasOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

[GeneratedMessageV3.Builder.internalGetFieldAccessorTable()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetFieldAccessorTable__)

[GeneratedMessageV3.Builder.internalGetMapField(int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetMapField_int_)

[GeneratedMessageV3.Builder.internalGetMutableMapField(int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetMutableMapField_int_)

[GeneratedMessageV3.Builder.isClean()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_isClean__)

[GeneratedMessageV3.Builder.isInitialized()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_isInitialized__)

[GeneratedMessageV3.Builder.markClean()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_markClean__)

[GeneratedMessageV3.Builder.mergeUnknownFields(UnknownFieldSet)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

[GeneratedMessageV3.Builder.newBuilderForField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_newBuilderForField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.Builder.onBuilt()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_onBuilt__)

[GeneratedMessageV3.Builder.onChanged()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_onChanged__)

[GeneratedMessageV3.Builder.setField(Descriptors.FieldDescriptor,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

[GeneratedMessageV3.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

[GeneratedMessageV3.Builder.setUnknownFields(UnknownFieldSet)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

[GeneratedMessageV3.Builder.setUnknownFieldsProto3(UnknownFieldSet)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFieldsProto3_com_google_protobuf_UnknownFieldSet_)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Methods

### getDescriptor()

```
public static final Descriptors.Descriptor getDescriptor()
```

**Returns**

**Type**

**Description**

[Descriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.Descriptor.html)

## Methods

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public TransactionOptions.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
```

**Parameters**

**Name**

**Description**

field

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

value

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public TransactionOptions build()
```

**Returns**

**Type**

**Description**

[TransactionOptions](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions)

### buildPartial()

```
public TransactionOptions buildPartial()
```

**Returns**

**Type**

**Description**

[TransactionOptions](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions)

### clear()

```
public TransactionOptions.Builder clear()
```

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearField(Descriptors.FieldDescriptor field)

```
public TransactionOptions.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

field

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearMode()

```
public TransactionOptions.Builder clearMode()
```

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public TransactionOptions.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

oneof

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearPartitionedDml()

```
public TransactionOptions.Builder clearPartitionedDml()
```

Partitioned DML transaction. Authorization to begin a Partitioned DML transaction requires `spanner.databases.beginPartitionedDmlTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.PartitionedDml partitioned_dml = 3;`

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

### clearReadOnly()

```
public TransactionOptions.Builder clearReadOnly()
```

Transaction will not write. Authorization to begin a read-only transaction requires `spanner.databases.beginReadOnlyTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.ReadOnly read_only = 2;`

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

### clearReadWrite()

```
public TransactionOptions.Builder clearReadWrite()
```

Transaction may write. Authorization to begin a read-write transaction requires `spanner.databases.beginOrRollbackReadWriteTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.ReadWrite read_write = 1;`

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

### clone()

```
public TransactionOptions.Builder clone()
```

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getDefaultInstanceForType()

```
public TransactionOptions getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

[TransactionOptions](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions)

### getDescriptorForType()

```
public Descriptors.Descriptor getDescriptorForType()
```

**Returns**

**Type**

**Description**

[Descriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.Descriptor.html)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.getDescriptorForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getDescriptorForType__)

### getModeCase()

```
public TransactionOptions.ModeCase getModeCase()
```

**Returns**

**Type**

**Description**

[TransactionOptions.ModeCase](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.ModeCase)

### getPartitionedDml()

```
public TransactionOptions.PartitionedDml getPartitionedDml()
```

Partitioned DML transaction. Authorization to begin a Partitioned DML transaction requires `spanner.databases.beginPartitionedDmlTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.PartitionedDml partitioned_dml = 3;`

**Returns**

**Type**

**Description**

[TransactionOptions.PartitionedDml](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.PartitionedDml)

The partitionedDml.

### getPartitionedDmlBuilder()

```
public TransactionOptions.PartitionedDml.Builder getPartitionedDmlBuilder()
```

Partitioned DML transaction. Authorization to begin a Partitioned DML transaction requires `spanner.databases.beginPartitionedDmlTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.PartitionedDml partitioned_dml = 3;`

**Returns**

**Type**

**Description**

[TransactionOptions.PartitionedDml.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.PartitionedDml.Builder)

### getPartitionedDmlOrBuilder()

```
public TransactionOptions.PartitionedDmlOrBuilder getPartitionedDmlOrBuilder()
```

Partitioned DML transaction. Authorization to begin a Partitioned DML transaction requires `spanner.databases.beginPartitionedDmlTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.PartitionedDml partitioned_dml = 3;`

**Returns**

**Type**

**Description**

[TransactionOptions.PartitionedDmlOrBuilder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.PartitionedDmlOrBuilder)

### getReadOnly()

```
public TransactionOptions.ReadOnly getReadOnly()
```

Transaction will not write. Authorization to begin a read-only transaction requires `spanner.databases.beginReadOnlyTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.ReadOnly read_only = 2;`

**Returns**

**Type**

**Description**

[TransactionOptions.ReadOnly](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.ReadOnly)

The readOnly.

### getReadOnlyBuilder()

```
public TransactionOptions.ReadOnly.Builder getReadOnlyBuilder()
```

Transaction will not write. Authorization to begin a read-only transaction requires `spanner.databases.beginReadOnlyTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.ReadOnly read_only = 2;`

**Returns**

**Type**

**Description**

[TransactionOptions.ReadOnly.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.ReadOnly.Builder)

### getReadOnlyOrBuilder()

```
public TransactionOptions.ReadOnlyOrBuilder getReadOnlyOrBuilder()
```

Transaction will not write. Authorization to begin a read-only transaction requires `spanner.databases.beginReadOnlyTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.ReadOnly read_only = 2;`

**Returns**

**Type**

**Description**

[TransactionOptions.ReadOnlyOrBuilder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.ReadOnlyOrBuilder)

### getReadWrite()

```
public TransactionOptions.ReadWrite getReadWrite()
```

Transaction may write. Authorization to begin a read-write transaction requires `spanner.databases.beginOrRollbackReadWriteTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.ReadWrite read_write = 1;`

**Returns**

**Type**

**Description**

[TransactionOptions.ReadWrite](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.ReadWrite)

The readWrite.

### getReadWriteBuilder()

```
public TransactionOptions.ReadWrite.Builder getReadWriteBuilder()
```

Transaction may write. Authorization to begin a read-write transaction requires `spanner.databases.beginOrRollbackReadWriteTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.ReadWrite read_write = 1;`

**Returns**

**Type**

**Description**

[TransactionOptions.ReadWrite.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.ReadWrite.Builder)

### getReadWriteOrBuilder()

```
public TransactionOptions.ReadWriteOrBuilder getReadWriteOrBuilder()
```

Transaction may write. Authorization to begin a read-write transaction requires `spanner.databases.beginOrRollbackReadWriteTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.ReadWrite read_write = 1;`

**Returns**

**Type**

**Description**

[TransactionOptions.ReadWriteOrBuilder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.ReadWriteOrBuilder)

### hasPartitionedDml()

```
public boolean hasPartitionedDml()
```

Partitioned DML transaction. Authorization to begin a Partitioned DML transaction requires `spanner.databases.beginPartitionedDmlTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.PartitionedDml partitioned_dml = 3;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the partitionedDml field is set.

### hasReadOnly()

```
public boolean hasReadOnly()
```

Transaction will not write. Authorization to begin a read-only transaction requires `spanner.databases.beginReadOnlyTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.ReadOnly read_only = 2;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the readOnly field is set.

### hasReadWrite()

```
public boolean hasReadWrite()
```

Transaction may write. Authorization to begin a read-write transaction requires `spanner.databases.beginOrRollbackReadWriteTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.ReadWrite read_write = 1;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the readWrite field is set.

### internalGetFieldAccessorTable()

```
protected GeneratedMessageV3.FieldAccessorTable internalGetFieldAccessorTable()
```

**Returns**

**Type**

**Description**

[FieldAccessorTable](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.FieldAccessorTable.html)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.internalGetFieldAccessorTable()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetFieldAccessorTable__)

### isInitialized()

```
public final boolean isInitialized()
```

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.isInitialized()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_isInitialized__)

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public TransactionOptions.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

input

`[CodedInputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedInputStream.html)`  

extensionRegistry

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### mergeFrom(Message other)

```
public TransactionOptions.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

other

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeFrom(TransactionOptions other)

```
public TransactionOptions.Builder mergeFrom(TransactionOptions other)
```

**Parameter**

**Name**

**Description**

other

`[TransactionOptions](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

### mergePartitionedDml(TransactionOptions.PartitionedDml value)

```
public TransactionOptions.Builder mergePartitionedDml(TransactionOptions.PartitionedDml value)
```

Partitioned DML transaction. Authorization to begin a Partitioned DML transaction requires `spanner.databases.beginPartitionedDmlTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.PartitionedDml partitioned_dml = 3;`

**Parameter**

**Name**

**Description**

value

`[TransactionOptions.PartitionedDml](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.PartitionedDml)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

### mergeReadOnly(TransactionOptions.ReadOnly value)

```
public TransactionOptions.Builder mergeReadOnly(TransactionOptions.ReadOnly value)
```

Transaction will not write. Authorization to begin a read-only transaction requires `spanner.databases.beginReadOnlyTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.ReadOnly read_only = 2;`

**Parameter**

**Name**

**Description**

value

`[TransactionOptions.ReadOnly](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.ReadOnly)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

### mergeReadWrite(TransactionOptions.ReadWrite value)

```
public TransactionOptions.Builder mergeReadWrite(TransactionOptions.ReadWrite value)
```

Transaction may write. Authorization to begin a read-write transaction requires `spanner.databases.beginOrRollbackReadWriteTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.ReadWrite read_write = 1;`

**Parameter**

**Name**

**Description**

value

`[TransactionOptions.ReadWrite](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.ReadWrite)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final TransactionOptions.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

unknownFields

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setField(Descriptors.FieldDescriptor field, Object value)

```
public TransactionOptions.Builder setField(Descriptors.FieldDescriptor field, Object value)
```

**Parameters**

**Name**

**Description**

field

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

value

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setPartitionedDml(TransactionOptions.PartitionedDml value)

```
public TransactionOptions.Builder setPartitionedDml(TransactionOptions.PartitionedDml value)
```

Partitioned DML transaction. Authorization to begin a Partitioned DML transaction requires `spanner.databases.beginPartitionedDmlTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.PartitionedDml partitioned_dml = 3;`

**Parameter**

**Name**

**Description**

value

`[TransactionOptions.PartitionedDml](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.PartitionedDml)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

### setPartitionedDml(TransactionOptions.PartitionedDml.Builder builderForValue)

```
public TransactionOptions.Builder setPartitionedDml(TransactionOptions.PartitionedDml.Builder builderForValue)
```

Partitioned DML transaction. Authorization to begin a Partitioned DML transaction requires `spanner.databases.beginPartitionedDmlTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.PartitionedDml partitioned_dml = 3;`

**Parameter**

**Name**

**Description**

builderForValue

`[TransactionOptions.PartitionedDml.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.PartitionedDml.Builder)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

### setReadOnly(TransactionOptions.ReadOnly value)

```
public TransactionOptions.Builder setReadOnly(TransactionOptions.ReadOnly value)
```

Transaction will not write. Authorization to begin a read-only transaction requires `spanner.databases.beginReadOnlyTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.ReadOnly read_only = 2;`

**Parameter**

**Name**

**Description**

value

`[TransactionOptions.ReadOnly](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.ReadOnly)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

### setReadOnly(TransactionOptions.ReadOnly.Builder builderForValue)

```
public TransactionOptions.Builder setReadOnly(TransactionOptions.ReadOnly.Builder builderForValue)
```

Transaction will not write. Authorization to begin a read-only transaction requires `spanner.databases.beginReadOnlyTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.ReadOnly read_only = 2;`

**Parameter**

**Name**

**Description**

builderForValue

`[TransactionOptions.ReadOnly.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.ReadOnly.Builder)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

### setReadWrite(TransactionOptions.ReadWrite value)

```
public TransactionOptions.Builder setReadWrite(TransactionOptions.ReadWrite value)
```

Transaction may write. Authorization to begin a read-write transaction requires `spanner.databases.beginOrRollbackReadWriteTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.ReadWrite read_write = 1;`

**Parameter**

**Name**

**Description**

value

`[TransactionOptions.ReadWrite](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.ReadWrite)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

### setReadWrite(TransactionOptions.ReadWrite.Builder builderForValue)

```
public TransactionOptions.Builder setReadWrite(TransactionOptions.ReadWrite.Builder builderForValue)
```

Transaction may write. Authorization to begin a read-write transaction requires `spanner.databases.beginOrRollbackReadWriteTransaction` permission on the `session` resource.

`.google.spanner.v1.TransactionOptions.ReadWrite read_write = 1;`

**Parameter**

**Name**

**Description**

builderForValue

`[TransactionOptions.ReadWrite.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.ReadWrite.Builder)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public TransactionOptions.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
```

**Parameters**

**Name**

**Description**

field

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final TransactionOptions.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

unknownFields

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.v1.TransactionOptions.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
