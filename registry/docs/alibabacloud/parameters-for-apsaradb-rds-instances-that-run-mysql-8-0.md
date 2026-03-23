This topic describes the parameters for ApsaraDB RDS instances that run MySQL 8.0 as of the release date.

**Note**

The parameter descriptions are from official MySQL documentation.

**Parameter**

**Major engine version**

**Dynamic parameter**

**Default value**

**Value range**

**Minor engine version**

**Description**

**References**

automatic\_sp\_privileges

8.0

1

ON

\[ON|OFF\]

Unlimited

If the default value ON is used for this parameter, the server automatically grants the EXECUTE and ALTER ROUTINE permissions to the user who creates a stored procedure when the user cannot execute, alter, or delete the stored procedure. The ALTER ROUTINE permission is required to delete a stored procedure. When the stored procedure is deleted, the server automatically revokes the permissions from the user. If you set this parameter to OFF, the server does not automatically grant or revoke the permissions.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_automatic\_sp\_privileges](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_automatic_sp_privileges)

auto\_increment\_increment

8.0

1

1

\[1-65535\]

Unlimited

The increment value of an auto-increment column.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-source.html#sysvar\_auto\_increment\_increment](https://dev.mysql.com/doc/refman/8.0/en/replication-options-source.html#sysvar_auto_increment_increment)

auto\_increment\_offset

8.0

1

1

\[1-65535\]

Unlimited

The offset that is applied on an auto-increment column when auto-increment-increment is set to a value other than 1.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-source.html#sysvar\_auto\_increment\_offset](https://dev.mysql.com/doc/refman/8.0/en/replication-options-source.html#sysvar_auto_increment_offset)

avoid\_temporal\_upgrade

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether the ALTER TABLE statement can be executed to implicitly upgrade temporal columns of the types that are supported before MySQL 5.6.4. The temporal columns indicate TIMESTAMP columns that do not support fractional seconds, TIME columns, and DATETIME columns. Upgrading the columns creates tables. This disables fast alterations on the columns.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_avoid\_temporal\_upgrade](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_avoid_temporal_upgrade)

back\_log

8.0

0

3000

\[0-65535\]

Unlimited

The number of outstanding connection requests that are allowed in MySQL.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_back\_log](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_back_log)

binlog\_cache\_size

8.0

1

2097152

\[4096-16777216\]

Unlimited

The size of the cache for transactions that are used to update binary logs.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar\_binlog\_cache\_size](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_cache_size)

binlog\_checksum

8.0

0

CRC32

\[CRC32|NONE\]

Unlimited

The type of BINLOG\_CHECKSUM\_ALG. Binary logs include the checksum for log events. Valid values: NONE and CRC32. Default value: CRC32.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar\_binlog\_checksum](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_checksum)

binlog\_group\_commit\_sync\_delay

8.0

1

0

\[0-1000000\]

Unlimited

The period of time that the binary log commit waits before the binary log commit synchronizes the binary log file to the disk. Unit: microseconds.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar\_binlog\_group\_commit\_sync\_delay](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_group_commit_sync_delay)

binlog\_group\_commit\_sync\_no\_delay\_count

8.0

1

0

\[0-100000\]

Unlimited

The maximum number of transactions that can wait in the current delay specified by binlog\_group\_commit\_sync\_delay. If binlog\_group\_commit\_sync\_delay is set to 0, this parameter does not take effect.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar\_binlog\_group\_commit\_sync\_no\_delay\_count](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_group_commit_sync_no_delay_count)

binlog\_max\_flush\_queue\_time

8.0

1

0

\[0-100000\]

Unlimited

The period of time to continue reading transactions from the flush queue before a group commit is performed. Unit: microseconds. This parameter is deprecated and is marked for eventual removal in a future MySQL release. It no longer takes effect.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar\_binlog\_max\_flush\_queue\_time](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_max_flush_queue_time)

binlog\_order\_commits

8.0

1

OFF

\[ON|OFF\]

Unlimited

If you enable this variable for the replication source server, transactions are committed in the same order as they are written to the binary log. By default, this variable is enabled for the replication source server. If this parameter is disabled, transactions can be committed in parallel. In some cases, disabling this parameter may improve performance.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar\_binlog\_order\_commits](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_order_commits)

binlog\_rows\_query\_log\_events

8.0

1

OFF

\[ON|OFF\]

Unlimited

This parameter affects only row-based logging. If you enable this variable, the MySQL server writes informational log events, such as row query log events, into its binary log. The informational log events can be used for debugging and related purposes. For example, if you cannot reconstruct a primary query from row updates, you can use the informational log events to obtain the original query issued on the primary query.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar\_binlog\_rows\_query\_log\_events](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_rows_query_log_events)

binlog\_row\_image

8.0

1

full

\[full|minimal\]

Unlimited

Specifies whether to write all columns or only the required columns to the images of the binary log.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar\_binlog\_row\_image](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_row_image)

binlog\_stmt\_cache\_size

8.0

1

32768

\[4096-16777216\]

Unlimited

The size of the cache for non-transactional statements that are used to update the binary log.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar\_binlog\_stmt\_cache\_size](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_stmt_cache_size)

binlog\_transaction\_dependency\_history\_size

8.0

1

500000

\[1-1000000\]

\[20210930,99999999)

The maximum number of rows to retain in the writeset history.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar\_binlog\_transaction\_dependency\_history\_size](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_transaction_dependency_history_size)

binlog\_transaction\_dependency\_tracking

8.0

1

WRITESET

\[WRITESET|WRITESET\_SESSION|COMMIT\_ORDER\]

\[20210930,99999999)

If you want to set binlog\_transaction\_dependency\_tracking to WRITESET or WRITESET\_SESSION, you must also configure transaction\_write\_set\_extraction or use its default value to specify an algorithm. The value of transaction\_write\_set\_extraction cannot be OFF.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar\_binlog\_transaction\_dependency\_tracking](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_transaction_dependency_tracking)

block\_encryption\_mode

8.0

1

"aes-128-ecb"

\["aes-128-ecb"|"aes-192-ecb"|"aes-256-ecb"|"aes-128-cbc"|"aes-192-cbc"|"aes-256-cbc"\]

Unlimited

The block encryption mode for block-based algorithms such as AES. It affects the behaviors of AES\_ENCRYPT() and AES\_DECRYPT().

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_block\_encryption\_mode](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_block_encryption_mode)

bulk\_insert\_buffer\_size

8.0

1

4194304

\[0-4294967295\]

Unlimited

MyISAM uses a special tree-like cache to accelerate the execution of statements that are used to insert a large number of data records to non-empty tables at a time, such as INSERT ... SELECT, INSERT ... VALUES (...), (...), ..., and LOAD DATA INFILE. This parameter limits the size of the cache tree per thread. Unit: bytes. If you set this parameter to 0, the special tree-like cache is not used to accelerate the insert operations. Default value: 8 MB.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_bulk\_insert\_buffer\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_bulk_insert_buffer_size)

character\_set\_filesystem

8.0

1

binary

\[utf8|latin1|gbk|binary\]

Unlimited

The character set of the file system. This parameter is used to interpret string literals that reference file names, such as the LOAD DATA INFILE and SELECT ... INTO OUTFILE statements and the LOAD\_FILE() function. The file names are converted from character\_set\_client to character\_set\_filesystem before the file opening attempt occurs. The default value is binary, which specifies that no conversion occurs. For systems on which multi-byte file names are allowed, we recommend that you set this parameter to a value other than binary. For example, if the system uses UTF-8 to represent file names, you need to set character\_set\_filesystem to 'utf8'.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_character\_set\_filesystem](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_character_set_filesystem)

character\_set\_server

8.0

1

utf8

\[utf8|latin1|gbk|gb18030|utf8mb4\]

Unlimited

The default character set of the server.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_character\_set\_server](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_character_set_server)

completion\_type

8.0

1

NO\_CHAIN

\[NO\_CHAIN|CHAIN|RELEASE|0|1|2\]

Unlimited

The transaction completion type. The value of this parameter can be a name value or an integer value.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_completion\_type](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_completion_type)

concurrent\_insert

8.0

1

1

\[0|1|2\]

Unlimited

0: disables concurrent inserts.

1: enables concurrent inserts for MyISAM tables without holes. This is the default value.

2: enables concurrent inserts for all MyISAM tables even if the tables have holes. If a table that has a hole is being used by another thread, new rows are inserted at the end of the table. Otherwise, MySQL acquires a normal write lock and inserts rows into the hole.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_concurrent\_insert](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_concurrent_insert)

connect\_timeout

8.0

1

10

\[1-3600\]

Unlimited

The period of time that the MySQL server waits for a CONNECT packet before it responds to a bad handshake. Unit: seconds. For MySQL 5.1.23 or earlier, the default value is 5 seconds. For versions later than MySQL 5.1.23, the default value is 10 seconds. If your client frequently encounters errors such as "Lost connection to MySQL server at 'XXX', system error: errno", you can increase the value of connect\_timeout.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_connect\_timeout](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_connect_timeout)

cte\_max\_recursion\_depth

8.0

1

1000

\[0-4294967295\]

Unlimited

The maximum recursion depth of a common table expression (CTE). If the recursion depth for a CTE exceeds the value of this parameter, the server terminates the execution.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_cte\_max\_recursion\_depth](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_cte_max_recursion_depth)

default\_authentication\_plugin

8.0

0

mysql\_native\_password

\[mysql\_native\_password|sha256\_password|caching\_sha2\_password\]

Unlimited

The default authentication extension.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_default\_authentication\_plugin](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_default_authentication_plugin)

default\_storage\_engine

8.0

0

InnoDB

\[InnoDB|innodb\]

Unlimited

The default storage engine of the new table.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_default\_storage\_engine](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_default_storage_engine)

default\_time\_zone

8.0

0

SYSTEM

\[SYSTEM|-12:00|-11:00|-10:00|-9:00|-8:00|-7:00|-6:00|-5:00|-4:00|-3:00|-2:00|-1:00|\\+0:00|\\+1:00|\\+2:00|\\+3:00|\\+4:00|\\+5:00|\\+5:30|\\+5:45|\\+6:00|\\+6:30|\\+7:00|\\+8:00|\\+9:00|\\+10:00|\\+11:00|\\+12:00|\\+13:00\]

Unlimited

The default time zone of the database.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

default\_week\_format

8.0

1

0

\[0-7\]

Unlimited

The default mode value to use the WEEK() function.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_default\_week\_format](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_default_week_format)

delayed\_insert\_limit

8.0

1

100

\[1-4294967295\]

Unlimited

After a specific number of delayed insert operations are performed, the INSERT DELAYED handler thread checks whether pending SELECT statements exist. The number of delayed insert operations is specified by delayed\_insert\_limit. If pending SELECT statements exist, the statements can be executed before the remaining delayed insert operations are performed.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_delayed\_insert\_limit](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_delayed_insert_limit)

delayed\_insert\_timeout

8.0

1

300

\[1-3600\]

Unlimited

The period of time that an INSERT DELAYED handler thread can wait for INSERT statements before the thread is terminated. Unit: seconds.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_delayed\_insert\_timeout](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_delayed_insert_timeout)

delayed\_queue\_size

8.0

1

1000

\[1-4294967295\]

Unlimited

The maximum number of rows that can be queued on each table when INSERT DELAYED statements are executed. If the queue is full, all clients from which INSERT DELAYED requests are sent must wait until the queue has available space.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_delayed\_queue\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_delayed_queue_size)

delay\_key\_write

8.0

1

ON

\[ON|OFF|ALL\]

Unlimited

This parameter applies only to MyISAM tables. This parameter affects the handling of the DELAY\_KEY\_WRITE table option that can be used in CREATE TABLE statements.

OFF: The DELAY\_KEY\_WRITE table option is ignored.

ON: You can specify any DELAY\_KEY\_WRITE option for the CREATE TABLE statement in MySQL. This is the default value.

ALL: The system processes all newly opened tables as tables that are created with the DELAY\_KEY\_WRITE option enabled.

**Important**

If you set this parameter to ALL, you cannot use in-use MyISAM tables from other programs, such as other MySQL servers or myisamchk. This helps prevent index damages.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_delay\_key\_write](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_delay_key_write)

disconnect\_on\_expired\_password

8.0

0

ON

\[ON|OFF\]

Unlimited

Specifies how the server handles clients with expired passwords.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_disconnect\_on\_expired\_password](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_disconnect_on_expired_password)

div\_precision\_increment

8.0

1

4

\[0-30\]

Unlimited

The number of decimal places that need to be added to the result of a division operation performed with the / operator. Default value: 4. Minimum value: 0. Maximum value: 30.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_div\_precision\_increment](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_div_precision_increment)

end\_markers\_in\_json

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether to add an end marker to the JSON output of an optimizer.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_end\_markers\_in\_json](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_end_markers_in_json)

eq\_range\_index\_dive\_limit

8.0

1

100

\[0-4294967295\]

Unlimited

The number of equality ranges for an index. If the number of equality ranges for an index is greater than or equal to the value of this parameter, the optimizer uses existing index statistics instead of doing index dives for equality ranges. If you set this parameter to 0, index dives are used.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_eq\_range\_index\_dive\_limit](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_eq_range_index_dive_limit)

event\_scheduler

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether to enable the event scheduler. Valid values: ON, OFF, and DISABLED. The value DISABLED indicates that the event scheduler is completely disabled and cannot be enabled when it is running.

**Note**

You cannot modify this parameter for RDS instances that run RDS High-availability Edition. For more information, see [RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-high-availability-edition).

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_event\_scheduler](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_event_scheduler)

explicit\_defaults\_for\_timestamp

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether the default value of the TIMESTAMP column is the current timestamp.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_explicit\_defaults\_for\_timestamp](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_explicit_defaults_for_timestamp)

flush\_time

8.0

1

0

\[0-31536000\]

Unlimited

If you set this parameter to a value other than 0, all tables are closed at an interval that is specified by flush\_time to release resources and synchronize unflushed data to the disk. We recommend that you use this parameter only on systems with minimal resources.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_flush\_time](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_flush_time)

ft\_max\_word\_len

8.0

0

84

\[10-4294967295\]

Unlimited

The maximum length of the word that needs to be included in a MyISAM FULLTEXT index.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_ft\_max\_word\_len](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_ft_max_word_len)

ft\_min\_word\_len

8.0

0

4

\[1-3600\]

Unlimited

The minimum length of the word that is to be included in a MyISAM FULLTEXT index.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_ft\_min\_word\_len](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_ft_min_word_len)

ft\_query\_expansion\_limit

8.0

0

20

\[0-1000\]

Unlimited

The number of top N matches that you want to use for full-text searches with WITH QUERY EXPANSION modifiers.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_ft\_query\_expansion\_limit](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_ft_query_expansion_limit)

general\_log

8.0

0

OFF

\[ON|OFF\]

Unlimited

Specifies whether to enable general query logging. The destination for log output is specified by log\_output.

The feature is not supported for RDS instances that run RDS Basic Edition.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_general\_log](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_general_log)

group\_concat\_max\_len

8.0

1

1024

\[4-1844674407370954752\]

Unlimited

The maximum length of the result for the GROUP\_CONCAT() function. Unit: bytes. Default value: 1024.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_group\_concat\_max\_len](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_group_concat_max_len)

histogram\_generation\_max\_mem\_size

8.0

1

20000000

\[1000000-18446744073709551615\]

Unlimited

The maximum amount of memory that is required to generate histogram statistics.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_histogram\_generation\_max\_mem\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_histogram_generation_max_mem_size)

host\_cache\_size

8.0

1

644

\[0-65535\]

Unlimited

The size of the host cache. If you set this parameter to 0, host caching is disabled. Changing the cache size at runtime causes an implicit FLUSH HOSTS operation that clears the host cache and truncates the host\_cache table.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_host\_cache\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_host_cache_size)

init\_connect

8.0

1

''

\[''|'set names utf8mb4'|'set names utf8'|'set default\_collation\_for\_utf8mb4=utf8mb4\_general\_ci'|'set default\_collation\_for\_utf8mb4=utf8mb4\_general\_ci;set names utf8mb4'|'set names utf8mb4 collate utf8mb4\_general\_ci'|'set names utf8mb4 COLLATE utf8mb4\_bin'\]

Unlimited

The commands that are run for each new connection.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_init\_connect](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_init_connect)

innodb\_adaptive\_flushing

8.0

1

ON

\[ON|OFF\]

Unlimited

Specifies whether to dynamically adjust the flush rate of dirty pages in the InnoDB buffer pool based on workloads. Adjusting the flush rate aims to prevent burstable I/O operations.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_adaptive\_flushing](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_adaptive_flushing)

innodb\_adaptive\_flushing\_lwm

8.0

1

10

\[0-70\]

Unlimited

The threshold for the percentage of redo log capacity. If the threshold is reached, adaptive flushing is enabled.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_adaptive\_flushing\_lwm](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_adaptive_flushing_lwm)

innodb\_adaptive\_hash\_index

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether to enable adaptive hash indexing. This parameter is available for the InnoDB storage engine.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_adaptive\_hash\_index](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_adaptive_hash_index)

innodb\_adaptive\_max\_sleep\_delay

8.0

1

150000

\[1-1000000\]

Unlimited

Enables InnoDB to automatically adjust the value of innodb\_thread\_sleep\_delay based on workloads. innodb\_thread\_sleep\_delay specifies the sleep duration of the InnoDB thread when the InnoDB thread has no pending events. If you set innodb\_adaptive\_max\_sleep\_delay to a value other than 0, the value of innodb\_thread\_sleep\_delay is automatically adjusted. The maximum value of innodb\_thread\_sleep\_delay is specified by innodb\_adaptive\_max\_sleep\_delay. Unit: microseconds. This parameter is suitable for scenarios in which systems slow down, especially when more than 16 InnoDB threads exist.

This parameter is most suitable for MySQL systems that have hundreds or thousands of concurrent connections.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_adaptive\_max\_sleep\_delay](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_adaptive_max_sleep_delay)

innodb\_autoextend\_increment

8.0

1

64

\[1-1000\]

Unlimited

The increment size that is used to extend the size of an auto-extending InnoDB system tablespace file when the size of the file reaches the upper limit. Unit: megabytes. Default value: 64.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_autoextend\_increment](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_autoextend_increment)

innodb\_autoinc\_lock\_mode

8.0

0

2

\[0|1|2\]

Unlimited

The lock mode that is used to generate auto-increment values. Valid values:

0: traditional mode

1: consecutive mode

2: interleaved mode

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_autoinc\_lock\_mode](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_autoinc_lock_mode)

innodb\_buffer\_pool\_dump\_at\_shutdown

8.0

1

ON

\[ON|OFF\]

Unlimited

Specifies whether to record the pages that are cached in the InnoDB buffer pool when the MySQL server is shut down. Recording the pages shortens the warmup process at the next restart. In most cases, this parameter is used in combination with innodb\_buffer\_pool\_load\_at\_startup. innodb\_buffer\_pool\_dump\_pct defines the percentage of most recently used pages that need to be dumped in the buffer pool.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_buffer\_pool\_dump\_at\_shutdown](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_buffer_pool_dump_at_shutdown)

innodb\_buffer\_pool\_dump\_pct

8.0

1

25

\[1-100\]

Unlimited

The percentage of the most recently used pages that need to be read and dumped in each buffer pool. Valid values: 1 to 100. Default value: 25. For example, if four buffer pools are available, 100 pages are cached in each buffer pool, and innodb\_buffer\_pool\_dump\_pct is set to 25, a total of 25 most recently used pages from each buffer pool are dumped.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_buffer\_pool\_dump\_pct](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_buffer_pool_dump_pct)

innodb\_buffer\_pool\_instances

8.0

0

8

\[1-64\]

Unlimited

The number of regions into which the InnoDB buffer pool is divided. For a system with a buffer pool in the multi-gigabyte range, dividing the buffer pool into separate instances can improve concurrency and reduce contention when different threads read data from and write data to cached pages. Each page that is stored in or read from the buffer pool is randomly assigned to one of the buffer pool instances by calling a hash function. Each buffer pool manages its idle lists, flush lists, LRUs, and other data structures connected to a buffer pool, and is protected by its own buffer pool mutex.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_buffer\_pool\_instances](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_buffer_pool_instances)

innodb\_buffer\_pool\_load\_at\_startup

8.0

0

ON

\[ON|OFF\]

Unlimited

Specifies whether to load the same pages stored in the InnoDB buffer pool to automatically warm up the buffer pool during the MySQL server startup. In most cases, this parameter is used in combination with innodb\_buffer\_pool\_dump\_at\_shutdown.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_buffer\_pool\_load\_at\_startup](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_buffer_pool_load_at_startup)

innodb\_buffer\_pool\_size

8.0

1

{DBInstanceClassMemory\*3/4}

\[134217728-18446744073709551615\]

Unlimited

The size of the buffer pool, which indicates the memory in which InnoDB caches table and index data. Unit: bytes. The value of this parameter must be an expression rather than a specific numeric value.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_buffer\_pool\_size](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_buffer_pool_size)

innodb\_change\_buffering

8.0

1

all

\[none|inserts|deletes|changes|purges|all\]

Unlimited

Specifies whether InnoDB performs change buffering to delay write operations to secondary indexes so that the I/O operations can be sequentially performed.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_change\_buffering](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_change_buffering)

innodb\_change\_buffer\_max\_size

8.0

1

25

\[0-50\]

Unlimited

The maximum size of the InnoDB change buffer, as a percentage of the total size of the buffer pool. You can increase the value for a MySQL server on which a large number of insert, update, and delete operations are performed. You can also decrease the value for a MySQL server with unchanging data that is used for reporting.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_change\_buffer\_max\_size](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_change_buffer_max_size)

innodb\_checksum\_algorithm

8.0

1

crc32

\[innodb|crc32|none|strict\_innodb|strict\_crc32|strict\_none\]

Unlimited

Specifies how to generate and verify the checksum stored in the disk blocks of InnoDB tablespaces.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_checksum\_algorithm](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_checksum_algorithm)

innodb\_cmp\_per\_index\_enabled

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether to enable compression-related statistics on each index for the INFORMATION\_SCHEMA.INNODB\_CMP\_PER\_INDEX table. Statistics collection is costly. We recommend that you enable the parameter in development and testing environments or for secondary instances to improve performance related to InnoDB compressed tables.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_cmp\_per\_index\_enabled](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_cmp_per_index_enabled)

innodb\_commit\_concurrency

8.0

0

0

\[0-1000\]

Unlimited

The number of threads that can be committed at a time. The default value 0 indicates that the number is unlimited.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_commit\_concurrency](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_commit_concurrency)

innodb\_compression\_failure\_threshold\_pct

8.0

1

5

\[0-100\]

Unlimited

The threshold of the compression failure rate for a table, in percentage. If this threshold is reached, MySQL adds padding to compressed pages. This helps prevent costly compression failures. If this threshold is exceeded, MySQL reserves additional idle storage for each new compressed page and dynamically adjusts the amount of the idle storage up to the percentage of the idle storage that is specified by innodb\_compression\_pad\_pct\_max. If you set this parameter to 0, the mechanism that is used to monitor compression efficiency and dynamically adjust the padding amount is disabled.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_compression\_failure\_threshold\_pct](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_compression_failure_threshold_pct)

innodb\_compression\_level

8.0

1

6

\[0-9\]

Unlimited

The level of the zlib compression for InnoDB compressed tables and indexes. A large value allows you store a large amount data in a storage device but causes a high CPU overhead during compression. A small value allows you to reduce the CPU overhead when the storage is not a critical metric or the data that you want to use cannot be efficiently compressed.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_compression\_level](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_compression_level)

innodb\_compression\_pad\_pct\_max

8.0

1

50

\[0-70\]

Unlimited

The maximum percentage of the idle storage that can be reserved for each compressed page. This ensures sufficient storage to reorganize the data and modification logs within a page when a compressed table or index is updated or the data may need to be compressed again. This parameter is suitable only when innodb\_compression\_failure\_threshold\_pct is set to a value other than 0 and the rate of compression failures exceeds the threshold.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_compression\_pad\_pct\_max](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_compression_pad_pct_max)

innodb\_concurrency\_tickets

8.0

1

5000

\[1-4294967295\]

Unlimited

The number of threads that can concurrently enter InnoDB. If the number of threads reaches the limit, a thread that tries to enter InnoDB is put into the queue. When a thread is allowed to enter InnoDB, tickets are assigned to the thread. The thread can enter and exit InnoDB until it runs out of the tickets. The number of tickets is the same as the value of innodb\_concurrency\_tickets. If a thread runs out of the tickets and tries to enter InnoDB again, it is subject to concurrency checks and may be put into a queue again. Default value: 5000.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_concurrency\_tickets](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_concurrency_tickets)

innodb\_data\_file\_purge

8.0

1

ON

\[ON|OFF\]

Unlimited

Specifies whether to enable asynchronous file deletion.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

innodb\_data\_file\_purge\_interval

8.0

1

100

\[0-10000\]

Unlimited

The interval to delete the file. Unit: milliseconds.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

innodb\_data\_file\_purge\_max\_size

8.0

1

128

\[16-1073741824\]

Unlimited

The maximum size of the file that you can delete. Unit: MB.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

innodb\_deadlock\_detect

8.0

1

ON

\[ON|OFF\]

Unlimited

Specifies whether to disable deadlock detection. If a large number of threads wait for the same lock in a high-concurrency system, deadlock detection may slow down the system. In some cases, we recommend that you disable deadlock detection and configure innodb\_lock\_wait\_timeout for transaction rollback, which is more efficient.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_deadlock\_detect](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_deadlock_detect)

innodb\_default\_row\_format

8.0

1

DYNAMIC

\[REDUNDANT|COMPACT|DYNAMIC\]

Unlimited

The default row format for InnoDB tables and user-created temporary tables. Default value: DYNAMIC. Valid values: REDUNDANT, COMPACT, and DYNAMIC. You cannot use COMPRESSED as the default format because it is not supported for system tablespaces.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_default\_row\_format](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_default_row_format)

innodb\_disable\_sort\_file\_cache

8.0

1

OFF

\[ON|OFF\]

Unlimited

If this parameter is enabled, page caching is disabled when InnoDB uses sorted files.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_disable\_sort\_file\_cache](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_disable_sort_file_cache)

innodb\_fill\_factor

8.0

1

100

\[10-100\]

Unlimited

InnoDB performs batch loads when an index is created or rebuilt. This method is named sorted index construction.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_fill\_factor](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_fill_factor)

innodb\_flush\_log\_at\_trx\_commit

8.0

1

1

\[0|1|2\]

Unlimited

Valid values:

0: Logs are written and flushed to the disk once per second.

1: Logs are written and flushed to the disk each time a transaction is committed.

2: Logs are written when a transaction is committed and flushed to the disk once per second.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

innodb\_flush\_method

8.0

0

O\_DIRECT

\[fsync|O\_DSYNC|littlesync|nosync|O\_DIRECT|O\_DIRECT\_NO\_FSYNC\]

Unlimited

The method that is used to flush data to InnoDB data files and log files, which may affect I/O throughput.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_flush\_method](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_flush_method)

innodb\_flush\_neighbors

8.0

1

0

\[0|1|2\]

Unlimited

Specifies whether to flush dirty pages in the same extension when a page is flushed from the InnoDB buffer pool.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_flush\_neighbors](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_flush_neighbors)

innodb\_flush\_sync

8.0

1

ON

\[ON|OFF\]

Unlimited

This parameter is enabled by default. This setting causes the innodb\_io\_capacity setting to be ignored when burstable I/O operations occur at checkpoints. To make sure that the number of I/O operations does not exceed the number specified by innodb\_io\_capacity, we recommend that you set innodb\_flush\_sync to OFF.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_flush\_sync](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_flush_sync)

innodb\_ft\_cache\_size

8.0

0

8000000

\[1600000-80000000\]

Unlimited

The memory that is allocated to the InnoDB FULLTEXT index cache. The memory is used to store parsed documents when an InnoDB FULLTEXT index is created. Unit: bytes. Index insert and update operations can be committed to the disk only when the limit that is specified by innodb\_ft\_cache\_size size is reached. innodb\_ft\_cache\_size defines the cache size on a per table basis.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_ft\_cache\_size](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_ft_cache_size)

innodb\_ft\_enable\_diag\_print

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether to enable additional full-text search (FTS) diagnostic output. This parameter is intended for advanced FTS debugging. Output is recorded in error logs, including information.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_ft\_enable\_diag\_print](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_ft_enable_diag_print)

innodb\_ft\_enable\_stopword

8.0

1

ON

\[ON|OFF\]

Unlimited

The set of stopwords to associate with an InnoDB FULLTEXT index when the index is created. If innodb\_ft\_user\_stopword\_table is configured, the stopwords are obtained from the table specified by innodb\_ft\_user\_stopword\_table. If innodb\_ft\_server\_stopword\_table is configured, the stopwords are obtained from the table specified by innodb\_ft\_server\_stopword\_table. If none of these parameters is configured, the default stopword set is used.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_ft\_enable\_stopword](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_ft_enable_stopword)

innodb\_ft\_max\_token\_size

8.0

0

84

\[10-84\]

Unlimited

The maximum length of a word that is stored in an InnoDB FULLTEXT index.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_ft\_max\_token\_size](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_ft_max_token_size)

innodb\_ft\_min\_token\_size

8.0

0

3

\[0-16\]

Unlimited

The minimum length of a word that is stored in an InnoDB FULLTEXT index.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_ft\_min\_token\_size](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_ft_min_token_size)

innodb\_ft\_num\_word\_optimize

8.0

1

2000

\[0-10000\]

Unlimited

The number of words that need to be processed during each OPTIMIZE TABLE operation on an InnoDB FULLTEXT index. If you perform a large number of insert or update operations on a table that contains an InnoDB FULLTEXT index, a large number of index maintenance operations are required to incorporate all changes. As a result, a large number of OPTIMIZE TABLE statements may be executed, and each statement is executed at the point at which the last statement is stopped.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_ft\_num\_word\_optimize](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_ft_num_word_optimize)

innodb\_ft\_result\_cache\_limit

8.0

1

2000000000

\[1000000-4294967295\]

Unlimited

The result cache limit on the InnoDB full-text search or the thread. Unit: bytes. Intermediate and final InnoDB full-text search query results are processed in memory. This parameter helps prevent excessive memory consumption when an InnoDB full-text search generates a query result that contains a large number of data records, such as millions or hundreds of millions of data rows. Memory is allocated for a full-text search based on your business requirements. If the result cache limit is reached, an error indicating that the full-text search exceeds the maximum allowed memory is reported.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_ft\_result\_cache\_limit](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_ft_result_cache_limit)

innodb\_ft\_sort\_pll\_degree

8.0

0

2

\[1-16\]

Unlimited

The number of threads that are used for parallel indexing and to tokenize text in an InnoDB FULLTEXT index when a search index is created.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_ft\_sort\_pll\_degree](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_ft_sort_pll_degree)

innodb\_ft\_total\_cache\_size

8.0

0

640000000

\[32000000-1600000000\]

Unlimited

The total memory that is allocated for the index caches of InnoDB full-text searches on all tables. Unit: bytes. If you create a large number of tables that contain FULLTEXT indexes, a large amount of memory is occupied. innodb\_ft\_total\_cache\_size defines a global memory limit on all full-text indexes to prevent excessive memory consumption. If the index-related operations reach the global limit, forceful synchronization is triggered.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_ft\_total\_cache\_size](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_ft_total_cache_size)

innodb\_io\_capacity

8.0

1

20000

\[0-18446744073709551615\]

Unlimited

The maximum number of I/O operations for InnoDB background tasks, such as flushing pages from the buffer pool and merging data from the change buffer.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_io\_capacity](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_io_capacity)

innodb\_io\_capacity\_max

8.0

1

40000

\[0-18446744073709551615\]

Unlimited

If a flushing operation falls behind, InnoDB can forcefully perform the operation at a higher rate than innodb\_io\_capacity. In this case, innodb\_io\_capacity\_max defines the maximum number of I/O operations for InnoDB background tasks.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_io\_capacity\_max](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_io_capacity_max)

innodb\_lock\_wait\_timeout

8.0

1

50

\[1-1073741824\]

Unlimited

The period of timeout that an InnoDB transaction waits for a row lock before the transaction is aborted. Unit: seconds. Default value: 50.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_lock\_wait\_timeout](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_lock_wait_timeout)

innodb\_log\_buffer\_size

8.0

1

16777216

\[1048576-4294967295\]

Unlimited

The size of the buffer that the InnoDB storage engine uses to store log files. Unit: bytes. Default value: 16 MB. A large log buffer indicates that large transactions do not need to be written to the disk before the large transactions are committed. If transactions that are executed to update, insert, or delete multiple rows, a large log buffer reduces disk I/O.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_log\_buffer\_size](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_log_buffer_size)

innodb\_log\_checksums

8.0

1

ON

\[ON|OFF\]

Unlimited

Specifies whether to enable the checksums for redo log pages. innodb\_log\_checksums is an alternative for innodb\_log\_checksum\_algorithm.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_log\_checksums](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_log_checksums)

innodb\_log\_compressed\_pages

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether to write images of re-compressed pages to the redo log. Recompression may occur when the compressed data is changed.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_log\_compressed\_pages](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_log_compressed_pages)

innodb\_log\_file\_size

8.0

0

1500M

\[4194304-107374182400\]

Unlimited

The size of each log file in a log group. Unit: bytes.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_log\_file\_size](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_log_file_size)

innodb\_log\_spin\_cpu\_abs\_lwm

8.0

1

80

\[0-4294967295\]

Unlimited

The minimum amount of CPU utilization below which user threads no longer spin when redo logs are flushed. The value is the sum of CPU core usage. The default value 80 indicates 80% of a single CPU core. In a system with a multi-core processor, the value 150 indicates 100% usage of a core plus 50% usage of another CPU core.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_log\_spin\_cpu\_abs\_lwm](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_log_spin_cpu_abs_lwm)

innodb\_log\_spin\_cpu\_pct\_hwm

8.0

1

50

\[0-100\]

Unlimited

The maximum amount of CPU utilization below which user threads no longer spin when redo logs are flushed. The value represents the percentage of processing capacity of all CPU cores. Default value: 50. For example, if a server has four CPU cores, the 100% usage of two CPU cores is the 50% of the processing capacity of all CPU cores.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_log\_spin\_cpu\_pct\_hwm](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_log_spin_cpu_pct_hwm)

innodb\_log\_wait\_for\_flush\_spin\_hwm

8.0

1

400

\[0-18446744073709551615\]

Unlimited

The maximum average period of time to flush logs. If the value of this parameter is exceeded, user threads no longer spin when redo logs are flushed. Default value: 400 microseconds.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_log\_wait\_for\_flush\_spin\_hwm](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_log_wait_for_flush_spin_hwm)

innodb\_lru\_scan\_depth

8.0

1

{LEAST(DBInstanceClassMemory/1048576/8, 8192)}

\[100-18446744073709551615\]

Unlimited

A parameter that affects the flush algorithms and heuristic algorithms of the InnoDB buffer pool. This parameter is used to tune I/O-intensive workloads. It specifies how deep the page cleaner thread scans the LRU lists in the buffer pool to identify dirty pages to be flushed for a buffer pool instance. The operation is performed in the background once per second.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_lru\_scan\_depth](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_lru_scan_depth)

innodb\_max\_dirty\_pages\_pct

8.0

1

75

\[0-99\]

Unlimited

The value is an integer that ranges from 0 to 100. The default value for the built-in InnoDB storage engine is 90. The default value for the InnoDB extension is 75. The main thread in InnoDB tries to flush data from the buffer pool to pages so that the percentage of dirty pages does not exceed this value.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_max\_dirty\_pages\_pct](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_max_dirty_pages_pct)

innodb\_max\_dirty\_pages\_pct\_lwm

8.0

1

10

\[0-99\]

Unlimited

The threshold for the percentage of dirty pages. If the threshold is exceeded, preflushing is enabled to control the ratio of dirty pages. The default value 0 indicates that preflushing is disabled.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_max\_dirty\_pages\_pct\_lwm](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_max_dirty_pages_pct_lwm)

innodb\_max\_purge\_lag

8.0

1

0

\[0-4294967295\]

Unlimited

The maximum length of the purge lag. If this value is exceeded, a latency is imposed on INSERT, UPDATE, and DELETE operations. The default value 0 indicates that no limits are imposed and no latency occurs.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_max\_purge\_lag](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_max_purge_lag)

innodb\_max\_purge\_lag\_delay

8.0

1

0

\[0-10000000\]

Unlimited

The maximum latency when the threshold specified by innodb\_max\_purge\_lag is exceeded. Unit: microseconds. A non-zero value indicates the latency that is imposed on INSERT, UPDATE, and DELETE operations. The default value 0 indicates that no upper limit is imposed on the latency.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_max\_purge\_lag\_delay](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_max_purge_lag_delay)

innodb\_max\_undo\_log\_size

8.0

1

1073741824

\[10485760-18446744073709551615\]

Unlimited

The threshold of the undo tablespace. If an undo tablespace exceeds the threshold, it can be marked as truncation when innodb\_undo\_log\_truncate is enabled. Default value: 1073741824 bytes, which is 1,024 MiB.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_max\_undo\_log\_size](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_max_undo_log_size)

innodb\_monitor\_disable

8.0

1

all

Unlimited

Disables the InnoDB metrics counter. You can use the INFORMATION\_SCHEMA.INNODB\_METRICS table to query counter data.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_monitor\_disable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_monitor_disable)

innodb\_monitor\_enable

8.0

1

all

Unlimited

Enables the InnoDB Monitor for output. After the InnoDB Monitor is enabled, InnoDB generates detailed runtime information that can be used for performance analysis and troubleshooting. You can execute the SHOW ENGINE INNODB STATUS statement to view the output.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_monitor\_enable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_monitor_enable)

innodb\_monitor\_reset

8.0

1

\[counter|module|pattern|all\]

Unlimited

Resets the count value of the InnoDB metric counter to zero. You can use the information schema INNODB\_METRICS table to query counter data.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_monitor\_reset](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_monitor_reset)

innodb\_monitor\_reset\_all

8.0

1

\[counter|module|pattern|all\]

Unlimited

Resets all values, including the minimum and maximum values, of the InnoDB metric counter. You can use the information schema INNODB\_METRICS table to query counter data.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_monitor\_reset\_all](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_monitor_reset_all)

innodb\_old\_blocks\_pct

8.0

1

37

\[5-95\]

Unlimited

The approximate percentage of the InnoDB buffer pools that are used for the old block sublist. This parameter is suitable only for the InnoDB extension. Valid values: 5 to 95. Default value: 37, which is 3/8 of the buffer pools.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_old\_blocks\_pct](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_old_blocks_pct)

innodb\_old\_blocks\_time

8.0

1

1000

\[0-1024\]

Unlimited

The period of time that a block inserted into the old sublist must stay after its first access before the block can be moved to the new sublist. Unit: milliseconds. This parameter is suitable only for the InnoDB extension. If the default value 0 is used for this parameter, a block inserted into the old sublist is immediately moved to a new sublist after its first access, regardless when the block is accessed. If you set this parameter to a value greater than 0, a block inserted into the old sublist must stay for the specified period of time and then is moved to a new sublist after its first access.

Unit: milliseconds.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_old\_blocks\_time](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_old_blocks_time)

innodb\_online\_alter\_log\_max\_size

8.0

1

134217728

\[134217728-2147483647\]

Unlimited

The maximum size of alert logs for online index creation.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_online\_alter\_log\_max\_size](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_online_alter_log_max_size)

innodb\_open\_files

8.0

0

{LEAST(DBInstanceClassCPU\*500, 8000)}

\[10-2147483647\]

Unlimited

The maximum number of IDB files that can remain open at a time in MySQL. This parameter is suitable only when multiple InnoDB tablespaces are used. Minimum value: 10. Default value: 300.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_open\_files](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_open_files)

innodb\_optimize\_fulltext\_only

8.0

1

OFF

\[ON|OFF\]

Unlimited

The changes on how the OPTIMIZE TABLE statement is executed on InnoDB tables. This parameter is temporarily enabled when InnoDB tables with FULLTEXT indexes are maintained.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_optimize\_fulltext\_only](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_optimize_fulltext_only)

innodb\_page\_cleaners

8.0

0

8

\[1-64\]

Unlimited

The number of page cleaner threads that are used to flush dirty pages from buffer pool instances. Page cleaner threads are used to flush LRU lists and flush lists. In MySQL 5.6, one page-cleaner thread is introduced to offload the buffer pool refresh from the InnoDB main thread. In MySQL 5.7, multi-page cleaner threads are supported by InnoDB. The value 1 indicates that the configuration before MySQL 5.7 is used, which indicates one page-cleaner thread exists. If multiple page cleaner threads exist, the flushing tasks for each buffer pool instance are distributed to idle page cleaner threads. In MySQL 5.7, the default value is changed from 1 to 4. If the number of page cleaner threads exceeds the number of buffer pool instances, the additional threads remain idle and do not consume CPU resources. This parameter is dynamic and can be changed online.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_page\_cleaners](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_page_cleaners)

innodb\_print\_all\_deadlocks

8.0

1

OFF

\[OFF|ON\]

Unlimited

If this parameter is enabled, information about all deadlocks is recorded in the MySQL error log. By default, this parameter is disabled.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_print\_all\_deadlocks](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_print_all_deadlocks)

innodb\_print\_ddl\_logs

8.0

1

OFF

\[ON|OFF\]

Unlimited

If you enable this parameter, MySQL writes DDL logs to stderr. For more information, see the details in DDL logs.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_print\_ddl\_logs](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_print_ddl_logs)

innodb\_purge\_batch\_size

8.0

1

300

\[1-5000\]

Unlimited

The number of undo logs to purge in one batch. The purge operation is to flush changed blocks in the buffer pool to the disk.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_purge\_batch\_size](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_purge_batch_size)

innodb\_purge\_rseg\_truncate\_frequency

8.0

1

128

\[1-128\]

Unlimited

The frequency at which the purge system releases rollback segments in terms of the number of times that the PURGE method is invoked. Before rollback segments are released, an undo tablespace cannot be truncated. In most cases, the purge system releases rollback segments every 128 times that the PURGE method is invoked. Default value: 128. A small value indicates a high frequency at which the purge thread releases rollback segments.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_purge\_rseg\_truncate\_frequency](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_purge_rseg_truncate_frequency)

innodb\_purge\_threads

8.0

0

{LEAST(DBInstanceClassMemory/1073741824, 8)}

\[1-32\]

Unlimited

The number of background threads dedicated to the InnoDB purge.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_purge\_threads](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_purge_threads)

innodb\_random\_read\_ahead

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether to enable random read-ahead to optimize InnoDB I/O operations.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_random\_read\_ahead](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_random_read_ahead)

innodb\_read\_ahead\_threshold

8.0

1

56

\[0-1024\]

Unlimited

The sensitivity of linear read-ahead that InnoDB uses to prefetch pages into the buffer pool. This parameter is suitable only for the InnoDB extension. If the number of pages that InnoDB sequentially reads from an extent (64 pages) is greater than or equal to the value of innodb\_read\_ahead\_threshold, an asynchronous read for the following extents is enabled.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_read\_ahead\_threshold](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_read_ahead_threshold)

innodb\_read\_io\_threads

8.0

0

4

\[1-64\]

Unlimited

The number of I/O threads for read operations in InnoDB. This parameter is suitable only for the InnoDB extension. Default value: 4.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_read\_io\_threads](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_read_io_threads)

innodb\_rollback\_on\_timeout

8.0

0

OFF

\[OFF|ON\]

Unlimited

By default, InnoDB rolls back only the last statement when a transaction times out. If innodb-rollback-on-timeout is configured, a transaction timeout causes InnoDB to abort and roll back the entire transaction. This process is the same as that in MySQL 4.1. This parameter is introduced in MySQL 5.1.15.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_rollback\_on\_timeout](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_rollback_on_timeout)

innodb\_rollback\_segments

8.0

1

128

\[1-128\]

Unlimited

The number of rollback segments used by InnoDB.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_rollback\_segments](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_rollback_segments)

innodb\_segment\_reserve\_factor

8.0

2

12.5

\[0.03-40\]

\[20220830,99999999\]

The percentage of segment pages of the tablespace file that are reserved as empty pages. The setting is applicable to file-per-table tablespaces and general tablespaces. Default value: 12.5, which is the same percentage of pages reserved in previous MySQL releases.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_segment\_reserve\_factor](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_segment_reserve_factor)

innodb\_sort\_buffer\_size

8.0

0

1048576

\[65536-67108864\]

Unlimited

The size of the sort buffer that is used to sort data during InnoDB index creation. The amount of data that is read into memory for internal sorting and written to the disk. This process is called "running". During the merge phase, a pair of buffers with the specified size are read and merged. A large value indicates a few running processes and merging operations.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_sort\_buffer\_size](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_sort_buffer_size)

innodb\_spin\_wait\_delay

8.0

1

6

\[0-4294967295\]

Unlimited

The maximum latency between polls for a spin lock. The underlying implementation of this mechanism varies based on the combination of hardware and operating systems. As a result, the latency is not fixed.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_spin\_wait\_delay](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_spin_wait_delay)

innodb\_stats\_auto\_recalc

8.0

1

ON

\[ON|OFF\]

Unlimited

Specifies whether to enable InnoDB to automatically recalculate persistence statistics after the data in a table is significantly changed. The threshold equals 10% of the rows in the table. This parameter is suitable for tables that are created when innodb\_stats\_persistent is enabled. You can also configure the STATS\_PERSISTENT=1 setting for the CREATE TABLE or ALTER TABLE statement to automatically recalculate persistence statistics. The amount of sample data that is used to generate statistical data is specified by innodb\_stats\_persistent\_sample\_pages.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_stats\_auto\_recalc](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_stats_auto_recalc)

innodb\_stats\_include\_delete\_marked

8.0

1

OFF

\[ON|OFF\]

Unlimited

By default, InnoDB reads uncommitted data when it calculates statistics. In an uncommitted transaction, if rows are deleted from a table, InnoDB excludes records that are marked deleted when it calculates row estimates and index statistics. This way, the execution plans for other transactions that use a transaction isolation level other than READ UNCOMMITTED and are concurrently executed on the table may not be optimal. To prevent this issue, you can enable innodb\_stats\_include\_delete\_marked to ensure that InnoDB counts records that are marked deleted when it calculates persistence optimizer statistics.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_stats\_include\_delete\_marked](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_stats_include_delete_marked)

innodb\_stats\_method

8.0

1

nulls\_equal

\[nulls\_equal|nulls\_unequal|nulls\_ignored\]

Unlimited

The method that the server uses to process NULL values during the collection of statistics about the distribution of index values for InnoDB tables. Valid values: nulls\_equal, nulls\_unequal, and nulls\_ignored. The value nulls\_equal indicates that all NULL values are considered equivalent and a single value group that has the same size as the number of NULL values is generated. The value nulls\_unequal indicates that NULL values are considered unequivalent, and each NULL value forms a distinct value group with the size of 1. The value nulls\_ignored indicates that NULL values are ignored.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_stats\_method](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_stats_method)

innodb\_stats\_on\_metadata

8.0

1

OFF

\[ON|OFF\]

Unlimited

This parameter is suitable only when optimizer statistics are non-persistent. If a table is created or changed when innodb\_stats\_persistent is disabled or STATS\_PERSISTENT is set to 0, optimizer statistics are not stored to disks.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_stats\_on\_metadata](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_stats_on_metadata)

innodb\_stats\_persistent

8.0

1

ON

\[ON|OFF\]

Unlimited

Specifies whether InnoDB index statistics are stored to disks. If InnoDB index statistics are not stored to disks, statistical data may be frequently recalculated, which may cause changes to query execution plans. This setting is stored with each table when the table is created. You can set innodb\_stats\_persistent at the global level before you create a table or use the STATS\_PERSISTENT clause in the CREATE TABLE and ALTER TABLE statements to override the system-level setting and configure persistent statistics for individual tables.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_stats\_persistent](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_stats_persistent)

innodb\_stats\_persistent\_sample\_pages

8.0

1

20

\[0-4294967295\]

Unlimited

The number of sampled index pages that are used to calculate the cardinality and other statistics, such as statistics calculated by the ANALYZE TABLE statement, for an indexed column. A large value indicates a high accuracy of index statistics. This improves the query execution plan but increases the I/O workloads during the execution of the ANALYZE TABLE statement on an InnoDB table.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_stats\_persistent\_sample\_pages](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_stats_persistent_sample_pages)

innodb\_stats\_transient\_sample\_pages

8.0

1

8

\[1-4294967295\]

Unlimited

The number of sampled index pages that are used to calculate the cardinality and other statistics, such as statistics calculated by the ANALYZE TABLE statement, for an indexed column. Default value: 8. A large value indicates a high accuracy of index statistics. This improves the query execution plan but increases the I/O workloads when an InnoDB table is opened or the statistics are recalculated.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_stats\_transient\_sample\_pages](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_stats_transient_sample_pages)

innodb\_status\_output

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether to enable periodic output for the standard InnoDB Monitor. This parameter is used in combination with innodb\_status\_output\_locks to enable or disable periodic output for the InnoDB Lock Monitor.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_status\_output](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_status_output)

innodb\_status\_output\_locks

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether to enable the InnoDB Lock Monitor. If this parameter is enabled, the InnoDB Lock Monitor records additional information about locks in the SHOW ENGINE INNODB STATUS output and records the information in the periodic output of the MySQL error log. The periodic output for the InnoDB Lock Monitor is recorded as part of the output of the standard InnoDB Monitor. As a result, the standard InnoDB Monitor must be enabled for the InnoDB Lock Monitor to periodically record data to the MySQL error log.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_status\_output\_locks](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_status_output_locks)

innodb\_strict\_mode

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether InnoDB returns an error rather than a warning for similar operations in strict SQL mode under certain conditions. This parameter is suitable only for the InnoDB extension. Default value: OFF. For more information about the affected conditions, see the description of innodb\_strict\_mode.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_strict\_mode](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_strict_mode)

innodb\_sync\_array\_size

8.0

0

128

\[1-1024\]

Unlimited

The size of the mutex or lock wait array. Increasing the value splits the internal data structure that is used to coordinate threads. This improves the concurrency in workloads with a large number of waiting threads. You must configure this parameter when you start the MySQL instance. The setting of the parameter cannot be changed. We recommend that you set this parameter to a large value for workloads that frequently generate a large number of waiting threads, typically greater than 768.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_sync\_array\_size](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_sync_array_size)

innodb\_sync\_spin\_loops

8.0

1

100

\[0-4294967295\]

Unlimited

The number of times a thread waits for an InnoDB mutex to be released before the thread is suspended.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_sync\_spin\_loops](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_sync_spin_loops)

innodb\_table\_locks

8.0

1

ON

\[ON|OFF\]

Unlimited

If autocommit is set to 0, InnoDB accepts LOCK TABLES. MySQL does not return results before the LOCK TABLES ... WRITE statement is executed until all threads release their locks on a table. Default value: 1, which indicates that LOCK TABLES causes InnoDB to internally lock a table when autocommit is set to 0.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_table\_locks](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_table_locks)

innodb\_thread\_concurrency

8.0

1

0

\[0-1000\]

Unlimited

The maximum number of threads that can be concurrently run in InnoDB. If the threshold is reached, additional threads enter the first in, first out (FIFO) queue.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_thread\_concurrency](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_thread_concurrency)

innodb\_thread\_sleep\_delay

8.0

1

10000

\[0-1000000\]

Unlimited

The number of microseconds that an InnoDB thread sleeps for before the InnoDB thread enters the InnoDB queue. The value 0 indicates that the InnoDB thread does not sleep.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_thread\_sleep\_delay](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_thread_sleep_delay)

innodb\_write\_io\_threads

8.0

0

4

\[1-64\]

Unlimited

The number of I/O threads that are used for write operations in InnoDB. This parameter is suitable only for the InnoDB extension. Default value: 4.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_write\_io\_threads](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_write_io_threads)

interactive\_timeout

8.0

1

7200

\[10-86400\]

Unlimited

The period of time that the server waits for the activity on an interactive connection before the interactive connection is terminated. Unit: seconds. An interactive client is defined as a client that uses the CLIENT\_INTERACTIVE option to connect to mysql\_real\_connect().

Unit: seconds.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_interactive\_timeout](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_interactive_timeout)

join\_buffer\_size

8.0

1

{LEAST(DBInstanceClassMemory/1048576\*128, 262144)}

\[128-4294967295\]

Unlimited

The minimum size of the buffer that is used for plain index scans, range index scans, and joins that do not use indexes and thus perform full table scans.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_join\_buffer\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_join_buffer_size)

key\_buffer\_size

8.0

1

8388608

\[0-18446744073709551615\]

Unlimited

The size of the buffer used for index blocks of MyISAM tables. These index blocks are buffered and shared by all threads. The size of the buffer used for index blocks of MyISAM tables. The key buffer is also known as the key cache.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_key\_buffer\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_key_buffer_size)

key\_cache\_age\_threshold

8.0

1

300

\[100-4294967295\]

Unlimited

The demotion of buffers from the hot sublist of a key cache to the warm sublist. A small value indicates a quick demotion. Minimum value: 100. Default value: 300.

Unit: seconds.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_key\_cache\_age\_threshold](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_key_cache_age_threshold)

key\_cache\_block\_size

8.0

1

1024

\[512-16384\]

Unlimited

The size of blocks in the key cache. Default value: 1024.

Unit: bytes.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_key\_cache\_block\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_key_cache_block_size)

key\_cache\_division\_limit

8.0

1

100

\[1-100\]

Unlimited

The division point between the hot sublist and warm sublist of the key cache buffer list. The value is the percentage of the buffer list that can be used for the warm sublist. Valid values: 1 to 100. Default value: 100.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_key\_cache\_division\_limit](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_key_cache_division_limit)

lc\_time\_names

8.0

1

en\_US

\[ja\_JP|pt\_BR|en\_US\]

Unlimited

The locale that controls the language used to display the day name, month name, and abbreviations. This parameter affects the output of the DATE\_FORMAT(), DAYNAME() and MONTHNAME() functions. Locale names are POSIX-style values such as 'ja\_JP' or 'pt\_BR'. Default value: 'en\_US', regardless of the system locale settings.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_lc\_time\_names](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_lc_time_names)

local\_infile

8.0

1

ON

\[ON|OFF\]

Unlimited

Specifies whether to enable the server-side LOCAL capability for LOAD DATA statements.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_local\_infile](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_local_infile)

lock\_wait\_timeout

8.0

1

31536000

\[1-1073741824\]

Unlimited

The timeout for an attempt to acquire metadata locks. Unit: seconds. Valid values: 1 to 31536000. The value 31536000 indicates a year. Default value: 31536000.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_lock\_wait\_timeout](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_lock_wait_timeout)

log\_bin\_use\_v1\_row\_events

8.0

1

1

\[0|1\]

Unlimited

If you set this parameter to 1, the system writes row events that use Version 1 to row-based binary logs. If you set this parameter to 0, the system writes row events that use the most recent version to row-based binary logs. This parameter is suitable for some upgrade scenarios.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar\_log\_bin\_use\_v1\_row\_events](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_log_bin_use_v1_row_events)

log\_error\_verbosity

8.0

1

3

\[1-3\]

Unlimited

The verbosity of the server to handle events that are used for error logs.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_log\_error\_verbosity](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_log_error_verbosity)

log\_queries\_not\_using\_indexes

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether to write queries that do not use indexes to slow query logs.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_log\_queries\_not\_using\_indexes](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_log_queries_not_using_indexes)

log\_slow\_admin\_statements

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether to write slow administration statements to slow query logs.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_log\_slow\_admin\_statements](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_log_slow_admin_statements)

log\_throttle\_queries\_not\_using\_indexes

8.0

1

0

\[0-4294967295\]

Unlimited

If log\_queries\_not\_using\_indexes is enabled, the log\_throttle\_queries\_not\_using\_indexes parameter limits the number of queries that can be written to the slow query logs per minute. This parameter is suitable when the queries do not use indexes.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_log\_throttle\_queries\_not\_using\_indexes](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_log_throttle_queries_not_using_indexes)

long\_query\_time

8.0

1

1

\[0.1-31536000\]

Unlimited

If a query takes a period of time that is longer than the threshold specified by this parameter, the Slow\_queries counter increments. If slow query logging is enabled, the query is written to the slow query log file. Unit: seconds.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_long\_query\_time](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_long_query_time)

loose\_binlog\_parallel\_flush

8.0

1

{LEAST(DBInstanceClassCPU/16, 1)}

\[ON|OFF\]

\[20230324,99999999)

Specifies whether to enable binlog\_parallel\_flush\_optimize to reduce refresh bottlenecks.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_ccl\_queue\_bucket\_count

8.0

1

4

\[1-64\]

\[20201231,99999999\]

The number of groups when the CCL queue is used.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_ccl\_queue\_bucket\_size

8.0

1

64

\[1-4096\]

\[20201231,99999999\]

The maximum number of concurrent requests when the CCL queue is used.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_ccl\_queue\_hot\_delete

8.0

1

OFF

\[ON|OFF\]

\[20201231,99999999\]

Specifies whether to enter the CCL queue in a delete operation under certain conditions.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_ccl\_queue\_hot\_update

8.0

1

OFF

\[ON|OFF\]

\[20201231,99999999\]

Specifies whether to enter the CCL queue in an update operation under certain conditions.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_force\_memory\_to\_innodb

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether to change the storage engine of a table from MEMORY to InnoDB.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_group\_replication\_flow\_control\_applier\_threshold

8.0

1

25000

\[0-2147483647\]

\[20221231,99999999\]

The number of waiting transactions that trigger flow control in the applier queue.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_group\_replication\_flow\_control\_certifier\_threshold

8.0

1

25000

\[0-2147483647\]

\[20221231,99999999\]

The number of waiting transactions that trigger flow control in the certifier queue.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_group\_replication\_flow\_control\_hold\_percent

8.0

1

10

\[0-100\]

\[20221231,99999999\]

The percentage of the group quota that is reserved to allow a cluster under flow control to process backlog. The value 0 indicates that no quota is reserved to process backlog.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_group\_replication\_flow\_control\_max\_commit\_quota

8.0

1

0

\[0-2147483647\]

\[20221231,99999999\]

The maximum flow control quota of the group, or the maximum available quota for any period when flow control is enabled. The value 0 indicates that no maximum quota is specified. The value of this parameter cannot be smaller than the value of group\_replication\_flow\_control\_min\_quota or group\_replication\_flow\_control\_min\_recovery\_quota.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_group\_replication\_flow\_control\_member\_quota\_percent

8.0

1

0

\[0-100\]

\[20221231,99999999\]

The percentage of the assumed quota. During quota calculation, a member needs to assume a quota that can be used by itself. The value 0 indicates that the quota must be equally assigned to members that act as writers in the last period.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_group\_replication\_flow\_control\_min\_quota

8.0

1

0

\[0-2147483647\]

\[20221231,99999999\]

The minimum flow control quota that can be assigned to a member, independently of the calculated minimum quota assigned in the last period. The value 0 indicates that no minimum quota is specified. The value of this parameter cannot be greater than the value of group\_replication\_flow\_control\_max\_quota.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_group\_replication\_flow\_control\_min\_recovery\_quota

8.0

1

0

\[0-2147483647\]

\[20221231,99999999\]

The minimum quota that can be assigned to a member because of another recovering member in the group, independently of the calculated minimum quota assigned in the last period. The value 0 indicates that no minimum quota is specified. The value of this parameter cannot be greater than the value of group\_replication\_flow\_control\_max\_quota.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_group\_replication\_flow\_control\_mode

8.0

1

DISABLED

\[DISABLED|QUOTA\]

\[20221231,99999999\]

The mode that is used for flow control.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_group\_replication\_flow\_control\_period

8.0

1

1

\[1-60\]

\[20221231,99999999\]

The interval of consecutive flow control iterations, at which flow control messages are sent and flow control management tasks are run. Unit: seconds.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_group\_replication\_flow\_control\_release\_percent

8.0

1

50

\[0-1000\]

\[20221231,99999999\]

Specifies how to release the group quota when writer members no longer need to be limited in flow control. This percentage indicates the quota increase per flow control period. The value 0 indicates that the quota is released in a single flow control iteration once the flow control thresholds are within limits. The quota can be increased to up to 10 times the current quota. This better meets the requirements in scenarios in which the flow control period is long and the quota is small.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_group\_replication\_transaction\_size\_limit

8.0

1

150000000

\[0-2147483647\]

\[20221231,99999999\]

The maximum transaction size that the replication group accepts. Unit: bytes. If the size of a transaction is larger than the value of this parameter, the receiving member rolls back the transaction and the transaction is not broadcast to the group. If you set this parameter to 0, no limits are imposed on the transaction size that the replication group accepts.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_ignore\_index\_hint\_error

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether to ignore index prompt errors.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_information\_schema\_stats\_expiry

8.0

1

86400

\[0-31536000\]

\[20201231,99999999\]

The period of time that the system receives the data read by mysqld from the storage engine and replaces the data in the cache. Unit: seconds.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_innodb\_doublewrite\_pages

8.0

0

64

\[0-512\]

\[20201231,99999999)

The maximum number of doublewrite pages per thread.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_innodb\_log\_optimize\_ddl

8.0

1

OFF

\[ON|OFF\]

\[20201231,99999999\]

Specifies whether to reduce redo logs when indexes are created or tables are recreated locally. The value OFF prevents latencies caused by page refresh operations and allows concurrent backups.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_innodb\_log\_write\_ahead\_size

8.0

1

4096

\[512-16384\]

\[20200430,99999999)

The size of write-ahead logs in bytes. To prevent read-on-write, this parameter must match the I/O size of the OS block size.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_innodb\_numa\_interleave

8.0

0

ON

\[ON|OFF\]

Unlimited

Specifies whether to enable the NUMA interleave memory policy for allocation of the InnoDB buffer pool. When this parameter is enabled, the NUMA memory policy of mysqld is set to MPOL\_INTERLEAVE. After the InnoDB buffer pool is allocated, the NUMA memory policy is set back to MPOL\_DEFAULT. This parameter is suitable only when MySQL is compiled on a NUMA-enabled Linux system.

[https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar\_innodb\_numa\_interleave](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_numa_interleave)

loose\_innodb\_parallel\_read\_threads

8.0

1

1

\[0-256\]

\[20200831,99999999)

The number of threads to read in parallel.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_innodb\_rds\_chunk\_flush\_interval

8.0

1

100

\[0-100000\]

\[20210930,99999999)

The interval between two consecutive block refresh operations. Unit: milliseconds.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_innodb\_rds\_faster\_ddl

8.0

1

ON

\[ON|OFF\]

\[20200430,99999999)

Specifies whether to enable the faster DDL feature.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_innodb\_rds\_flashback\_task\_enabled

8.0

1

OFF

\[ON|OFF\]

\[20210930,99999999)

Specifies whether to automatically scroll new read views forward. This parameter is enabled by default.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_innodb\_rds\_free\_resize

8.0

1

ON

\[ON|OFF\]

\[20210930,99999999)

Specifies whether to process pages by block when you resize the InnoDB buffer pool.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_innodb\_trx\_resurrect\_table\_lock\_accelerate

8.0

1

OFF

\[OFF|ON\]

\[20221231,99999999)

Specifies whether to store table information in the undo log.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_innodb\_undo\_retention

8.0

1

0

\[0-172800\]

\[20210930,99999999)

The retention period of undo data. Unit: seconds.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_innodb\_undo\_space\_reserved\_size

8.0

1

0

\[0-20480\]

\[20210930,99999999)

The size of the reserved undo file space. Unit: MiB.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_innodb\_undo\_space\_supremum\_size

8.0

1

10240

\[0-524288\]

\[20210930,99999999)

The maximum size of the undo file space. Unit: MiB.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_json\_document\_max\_depth

8.0

1

100

\[100-1000\]

\[20220830, 99999999)

The maximum number of nested levels in a JSON document.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_multi\_blocks\_ddl\_count

8.0

1

0

\[0-1024\]

\[20201231,99999999\]

The number of blocks that can be queried at a time in some DDL queries.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_optimizer\_switch

8.0

1

index\_merge=on,index\_merge\_union=on,index\_merge\_sort\_union=on,index\_merge\_intersection=on,engine\_condition\_pushdown=on,index\_condition\_pushdown=on,mrr=on,mrr\_cost\_based=on,block\_nested\_loop=on,batched\_key\_access=off,materialization=on,semijoin=on,loosescan=on,firstmatch=on,subquery\_materialization\_cost\_based=on,use\_index\_extensions=on

.\*

Unlimited

The optimizer\_switch parameter controls the optimizer behavior.

[https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar\_optimizer\_switch](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_optimizer_switch)

loose\_optimizer\_trace

8.0

1

enabled=off,one\_line=off

.\*

Unlimited

The optimizer\_trace parameter has the following options: enabled and one\_line.

[https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar\_optimizer\_trace](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_optimizer_trace)

loose\_optimizer\_trace\_features

8.0

1

greedy\_search=on,range\_optimizer=on,dynamic\_range=on,repeated\_subselect=on

.\*

Unlimited

The optimizer\_trace\_features parameter specifies the features that are not traced.

[https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar\_optimizer\_trace\_features](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_optimizer_trace_features)

loose\_performance\_schema\_accounts\_size

8.0

0

10000

\[-1-1048576\]

Unlimited

The number of rows in the accounts table. If you set this parameter to 0, Performance Schema does not maintain connection statistics in the accounts table or maintain status variable information in the status\_by\_account table.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_accounts\_size](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_accounts_size)

loose\_performance\_schema\_digests\_size

8.0

0

10000

\[-1-1048576\]

Unlimited

The maximum number of rows in the events\_statements\_summary\_by\_digest table. If this threshold is exceeded, a digest cannot be instrumented. As a result, Performance Schema increases the value of performance\_schema\_digest\_lost.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_digests\_size](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_digests_size)

loose\_performance\_schema\_error\_size

8.0

0

0

\[0-1048576\]

Unlimited

The number of codes of server errors detected. The default value is the actual number of server error codes. You can set this parameter to a value within the value range. This expected purpose of this parameter is to detect all errors (the default value) or not to detect errors (the value 0).

[https://dev.mysql.com/doc/refman/8.0/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_error\_size](https://dev.mysql.com/doc/refman/8.0/en/performance-schema-system-variables.html#sysvar_performance_schema_error_size)

loose\_performance\_schema\_events\_stages\_history\_long\_size

8.0

0

0

\[-1-1048576\]

Unlimited

The number of rows in the events\_stages\_history\_long table.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_events\_stages\_history\_long\_size](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_events_stages_history_long_size)

loose\_performance\_schema\_events\_stages\_history\_size

8.0

0

0

\[-1-1024\]

Unlimited

The number of rows per thread in the events\_stages\_history table.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_events\_stages\_history\_size](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_events_stages_history_size)

loose\_performance\_schema\_events\_statements\_history\_long\_size

8.0

0

0

\[-1-1048576\]

Unlimited

The number of rows in the events\_statements\_history\_long table.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_events\_statements\_history\_long\_size](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_events_statements_history_long_size)

loose\_performance\_schema\_events\_statements\_history\_size

8.0

0

0

\[-1-1024\]

Unlimited

The number of rows per thread in the events\_statements\_history table.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_events\_statements\_history\_size](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_events_statements_history_size)

loose\_performance\_schema\_events\_transactions\_history\_long\_size

8.0

0

0

\[-1-1048576\]

Unlimited

The number of rows in the events\_transactions\_history\_long table.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_events\_transactions\_history\_long\_size](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_events_transactions_history_long_size)

loose\_performance\_schema\_events\_transactions\_history\_size

8.0

0

0

\[-1-1024\]

Unlimited

The number of rows per thread in the events\_transactions\_history table.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_events\_transactions\_history\_size](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_events_transactions_history_size)

loose\_performance\_schema\_events\_waits\_history\_long\_size

8.0

0

0

\[-1-1048576\]

Unlimited

The number of rows in the events\_waits\_history\_long table.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_events\_waits\_history\_long\_size](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_events_waits_history_long_size)

loose\_performance\_schema\_events\_waits\_history\_size

8.0

0

0

\[-1-1024\]

Unlimited

The number of rows per thread in the events\_waits\_history table.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_events\_waits\_history\_size](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_events_waits_history_size)

loose\_performance\_schema\_hosts\_size

8.0

0

10000

\[-1-1048576\]

Unlimited

The number of rows in the hosts table. If you set this parameter to 0, Performance Schema does not maintain connection statistics in the hosts table or maintain status variable information in the status\_by\_host table.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_hosts\_size](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_hosts_size)

loose\_performance\_schema\_max\_cond\_classes

8.0

0

150

\[0-256\]

Unlimited

The maximum number of condition instruments.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_cond\_classes](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_cond_classes)

loose\_performance\_schema\_max\_cond\_instances

8.0

0

10000

\[-1-1048576\]

Unlimited

The maximum number of instrumented condition objects.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_cond\_instances](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_cond_instances)

loose\_performance\_schema\_max\_digest\_length

8.0

0

0

\[0-1048576\]

Unlimited

The maximum size of memory that is reserved to calculate the digest value for a normalized statement per statement in Performance Schema. Unite: bytes. This parameter depends on max\_digest\_length.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_digest\_length](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_digest_length)

loose\_performance\_schema\_max\_digest\_sample\_age

8.0

0

0

\[0-1048576\]

Unlimited

This parameter affects the statement sampling of the events\_statements\_summary\_by\_digest table. When a new row is inserted into the table, the statement that is used to generate the row digest value is stored as the current sample statement associated with the digest.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_performance\_schema\_max\_file\_classes

8.0

0

80

\[0-256\]

Unlimited

The maximum number of file instruments.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_file\_classes](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_file_classes)

loose\_performance\_schema\_max\_file\_handles

8.0

0

0

\[-1-32768\]

Unlimited

The maximum number of open file objects.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_file\_handles](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_file_handles)

loose\_performance\_schema\_max\_file\_instances

8.0

0

1000

\[-1-1048576\]

Unlimited

The maximum number of instrumented file objects.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_file\_instances](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_file_instances)

loose\_performance\_schema\_max\_index\_stat

8.0

0

10000

\[-1-1048576\]

Unlimited

The maximum number of indexes for Performance Schema to maintain statistics. If this threshold is exceeded, index statistics are lost. As a result, Performance Schema increases the value of performance\_schema\_index\_stat\_lost. The default value is automatically adjusted based on the value of performance\_schema\_max\_table\_instances.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_index\_stat](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_index_stat)

loose\_performance\_schema\_max\_memory\_classes

8.0

0

500

\[0-1024\]

Unlimited

The maximum number of memory instruments.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_memory\_classes](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_memory_classes)

loose\_performance\_schema\_max\_metadata\_locks

8.0

0

10000

\[-1-1048576\]

Unlimited

The maximum number of metadata lock instruments. This parameter specifies the size of the metadata\_locks table. If this threshold is exceeded, a metadata lock cannot be instrumented. As a result, Performance Schema increases the value of performance\_schema\_metadata\_lock\_lost.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_metadata\_locks](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_metadata_locks)

loose\_performance\_schema\_max\_mutex\_classes

8.0

0

256

\[0-256\]

Unlimited

The maximum number of mutex instruments.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_mutex\_classes](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_mutex_classes)

loose\_performance\_schema\_max\_mutex\_instances

8.0

0

10000

\[-1-104857600\]

Unlimited

The maximum number of instrumented mutex objects.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_mutex\_instances](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_mutex_instances)

loose\_performance\_schema\_max\_prepared\_statements\_instances

8.0

0

1000

\[-1-4194304\]

Unlimited

The maximum number of rows in the prepared\_statements\_instances table. If this threshold is exceeded, a prepared statement cannot be instrumented. As a result, Performance Schema increases the value of performance\_schema\_prepared\_statements\_lost status.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_prepared\_statements\_instances](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_prepared_statements_instances)

loose\_performance\_schema\_max\_program\_instances

8.0

0

10000

\[-1-1048576\]

Unlimited

The maximum number of stored procedures for Performance Schema to maintain statistics. If this threshold is exceeded, Performance Schema increases the value of performance\_schema\_program\_lost.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_program\_instances](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_program_instances)

loose\_performance\_schema\_max\_rwlock\_classes

8.0

0

100

\[0-256\]

Unlimited

The maximum number of read/write lock (RW lock) instruments.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_rwlock\_classes](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_rwlock_classes)

loose\_performance\_schema\_max\_rwlock\_instances

8.0

0

10000

\[-1-104857600\]

Unlimited

The maximum number of instrumented RW lock objects.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_rwlock\_instances](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_rwlock_instances)

loose\_performance\_schema\_max\_socket\_classes

8.0

0

10

\[0-256\]

Unlimited

The maximum number of socket instruments.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_socket\_classes](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_socket_classes)

loose\_performance\_schema\_max\_socket\_instances

8.0

0

1000

\[-1-1048576\]

Unlimited

The maximum number of instrumented socket objects.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_socket\_instances](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_socket_instances)

loose\_performance\_schema\_max\_sql\_text\_length

8.0

0

0

\[0-1048576\]

Unlimited

The maximum number of bytes to store SQL statements in the SQL\_TEXT column of the events\_statements\_current, events\_statements\_history, and events\_statements\_history\_long tables. The bytes that exceed the value of this parameter are discarded and are not included in the SQL\_TEXT column. In this column, statements that differ only after the specified initial bytes are indistinguishable.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_sql\_text\_length](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_sql_text_length)

loose\_performance\_schema\_max\_stage\_classes

8.0

0

200

\[0-256\]

Unlimited

The maximum number of stage instruments.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_stage\_classes](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_stage_classes)

loose\_performance\_schema\_max\_statement\_classes

8.0

0

256

\[0-256\]

Unlimited

The maximum number of statement instruments.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_statement\_classes](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_statement_classes)

loose\_performance\_schema\_max\_statement\_stack

8.0

0

1

\[0-256\]

Unlimited

The maximum number of nested stored procedure calls for which Performance Schema maintains statistics. When this threshold is exceeded, Performance Schema increases the value of performance\_schema\_nested\_statement\_lost for each stored procedure.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_statement\_stack](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_statement_stack)

loose\_performance\_schema\_max\_table\_handles

8.0

0

10000

\[-1-1048576\]

Unlimited

The maximum number of open table objects. This parameter controls the size of the table\_handles table. If this threshold is exceeded, a table handle cannot be instrumented. As a result, Performance Schema increases the value of performance\_schema\_table\_handles\_lost status variable.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_table\_handles](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_table_handles)

loose\_performance\_schema\_max\_table\_instances

8.0

0

1000

\[-1-1048576\]

Unlimited

The maximum number of instrumented table objects.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_table\_instances](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_table_instances)

loose\_performance\_schema\_max\_table\_lock\_stat

8.0

0

10000

\[-1-1048576\]

Unlimited

The maximum number of tables for which Performance Schema maintains lock statistics. If this threshold is exceeded, table lock statistics are lost. As a result, Performance Schema increases the value of performance\_schema\_table\_lock\_stat\_lost.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_table\_lock\_stat](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_table_lock_stat)

loose\_performance\_schema\_max\_thread\_classes

8.0

0

100

\[0-256\]

Unlimited

The maximum number of thread instruments.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_thread\_classes](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_thread_classes)

loose\_performance\_schema\_max\_thread\_instances

8.0

0

10000

\[-1-1048576\]

Unlimited

The maximum number of instrumented thread objects. The parameter controls the size of the threads table. If this threshold is exceeded, a thread cannot be instrumented. As a result, Performance Schema increases the value of performance\_schema\_thread\_instances\_lost.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_max\_thread\_instances](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_max_thread_instances)

loose\_performance\_schema\_session\_connect\_attrs\_size

8.0

0

0

\[-1-1048576\]

Unlimited

The amount of preallocated memory per thread. The preallocated memory is used to store the key-value pairs of connection attributes. If the size of connection attribute data that is sent from a client is greater than this threshold, Performance Schema truncates the attribute data and increases the value of performance\_schema\_session\_connect\_attrs\_lost. If the value of log\_error\_verbosity is greater than 1, Performance Schema also writes a message indicating that truncation occurs to the error log.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_session\_connect\_attrs\_size](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_session_connect_attrs_size)

loose\_performance\_schema\_setup\_actors\_size

8.0

0

10000

\[-1-1048576\]

Unlimited

The number of rows in the setup\_actors table.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_setup\_actors\_size](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_setup_actors_size)

loose\_performance\_schema\_setup\_objects\_size

8.0

0

10000

\[-1-1048576\]

Unlimited

The number of rows in the setup\_objects table.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_setup\_objects\_size](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_setup_objects_size)

loose\_performance\_schema\_users\_size

8.0

0

10000

\[-1-1048576\]

Unlimited

The number of rows in the users table. If you set this parameter to 0, Performance Schema does not maintain connection statistics in the users table or maintain status variable information in the status\_by\_user table.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema\_users\_size](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema_users_size)

loose\_persist\_binlog\_to\_redo

8.0

1

ON

\[ON|OFF\]

\[20230324,99999999)

Specifies whether to write transaction binary log events to redo logs to reduce I/O.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_rds\_audit\_log\_event\_buffer\_size

8.0

1

8192

\[0-32768\]

\[20201031,99999999)

The maximum SQL size in the ApsaraDB RDS audit log.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_rds\_audit\_log\_version

8.0

1

MYSQL\_V1

\[MYSQL\_V1|MYSQL\_V3\]

\[20210930,99999999)

The version of audit logs. MYSQL\_V1 and MYSQL\_V3 are supported.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_recycle\_bin

8.0

1

OFF

\[OFF|ON\]

\[20200831,99999999)

Specifies whether to enable the recycle bin.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_recycle\_bin\_retention

8.0

1

604800

\[86400-1209600\]

\[20200831,99999999)

The retention period in the recycle bin. Unit: seconds.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_recycle\_scheduler

8.0

1

OFF

\[OFF|ON\]

\[20200831,99999999)

Specifies whether to clean up threads.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_slave\_parallel\_workers

8.0

1

{GREATEST(DBInstanceClassCPU, 8)}

\[0-1024\]

Unlimited

The number of applier threads for executing replication transactions in parallel.

-   If this parameter is set to a value greater than 0, the system creates a multi-threaded replica with the specified number of applier threads.
    
-   If the default value 0 is used, parallel execution is disabled, and the replica uses a single applier thread.
    

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar\_slave\_parallel\_workers](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_slave_parallel_workers)

loose\_sql\_safe\_updates

8.0

1

OFF

\[ON|OFF\]

\[20200430,99999999)

If this parameter is enabled, an error occurs when keys are not used in the WHERE or LIMIT clause of the UPDATE or DELETE statement.

[https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar\_sql\_safe\_updates](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_sql_safe_updates)

loose\_ssl\_cipher

8.0

0

"ALL:@SECLEVEL=0"

\[""|"ALL:@SECLEVEL=0"\]

\[20231215,99999999)

The SSL password.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_ssl\_cipher](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_ssl_cipher)

loose\_thread\_pool\_enabled

8.0

1

ON

\[ON|OFF\]

Unlimited

Specifies whether to enable thread pooling.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_thread\_pool\_oversubscribe

8.0

1

32

\[10-64\]

Unlimited

The number of additionally active worker threads in each group.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

loose\_thread\_pool\_size

8.0

1

{LEAST(DBInstanceClassCPU\*2, 64)}

\[1-16\]

Unlimited

The number of thread groups in the thread pool.

[https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar\_thread\_pool\_size](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_thread_pool_size)

loose\_validate\_password\_length

8.0

1

8

\[1-12\]

Unlimited

The minimum length of the password. If you set this value to 8, the length of the password length must be greater than or equal to 8.

[https://dev.mysql.com/doc/refman/5.7/en/validate-password-options-variables.html#sysvar\_validate\_password\_length](https://dev.mysql.com/doc/refman/5.7/en/validate-password-options-variables.html#sysvar_validate_password_length)

low\_priority\_updates

8.0

1

0

\[0|1\]

Unlimited

If you set this parameter to 1, all INSERT, UPDATE, DELETE, and LOCK TABLE WRITE statements wait until no pending SELECT or LOCK TABLE READ statements exist on the required table. This parameter is suitable for storage engines that use only table-level locking, such as MyISAM, MEMORY, and MERGE. This parameter is formerly known as sql\_low\_priority\_updates.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_low\_priority\_updates](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_low_priority_updates)

master\_verify\_checksum

8.0

1

OFF

\[ON|OFF\]

Unlimited

If you enable this parameter, the primary server verifies checksums when it reads data from the binary log. By default, this parameter is disabled. In this case, the primary server uses the event length from the binary log to verify events. This ensures that only complete events can be read from the binary log.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar\_master\_verify\_checksum](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_master_verify_checksum)

max\_allowed\_packet

8.0

1

1073741824

\[16384-1073741824\]

Unlimited

The maximum size of a packet, a generated string, or an intermediate string.

Unit: bytes.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_max\_allowed\_packet](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_allowed_packet)

max\_binlog\_cache\_size

8.0

1

18446744073709547520

\[4096-18446744073709547520\]

Unlimited

The size of the transaction cache. The visibility of max\_binlog\_cache\_size to sessions matches that of binlog\_cache\_size.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar\_max\_binlog\_cache\_size](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_max_binlog_cache_size)

max\_binlog\_stmt\_cache\_size

8.0

1

18446744073709547520

\[4096-18446744073709547520\]

Unlimited

If the memory that is required for non-transactional statements is greater than the value of this parameter, an error is reported. Minimum value: 4096. Maximum value and default value: 4 GB for 32-bit platforms and 16 exabytes (EB) for 64-bit platforms.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar\_max\_binlog\_stmt\_cache\_size](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_max_binlog_stmt_cache_size)

max\_connections

8.0

1

600

\[1-200000\]

Unlimited

The maximum number of concurrent client connections.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_max\_connections](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_connections)

max\_connect\_errors

8.0

1

100

\[0-4294967295\]

Unlimited

If the number of failed connection requests caused by interrupted consecutive connection requests from a host is greater than the value of this parameter, the server blocks the requests from the host. To resolve this issue, you can flush the host cache.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_max\_connect\_errors](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_connect_errors)

max\_digest\_length

8.0

0

1024

\[0-1048576\]

Unlimited

The maximum number of bytes that are reserved to calculate normalized statement digests per session. If the number of bytes that are used during digest calculation exceeds the value of this parameter, truncation occurs. In this case, no further tokens from a parsed statement are collected or considered into its digest value. Statements at the location starting from the number of the specified bytes after the parsed tokens produce the same normalized statement digest and are considered identical for comparison or digest statistics collection.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_max\_digest\_length](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_digest_length)

max\_error\_count

8.0

1

64

\[0-65535\]

Unlimited

The maximum number of error, warning, and information messages to be stored for display by the SHOW ERRORS and SHOW WARNINGS statements. The value is the same as the number of condition areas in the diagnostics area. You can execute GET DIAGNOSTICS statement to diagnose the same number of conditions.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_max\_error\_count](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_error_count)

max\_execution\_time

8.0

1

0

\[0-4294967295\]

Unlimited

The execution timeout of the statement. If this threshold is exceeded, the statement is interrupted.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_max\_execution\_time](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_execution_time)

max\_heap\_table\_size

8.0

1

67108864

\[16384-1844674407370954752\]

Unlimited

The maximum size to which a user-created MEMORY table can be increased. This parameter is used to calculate the MAX\_ROWS value in the MEMORY table. This parameter is suitable if you execute the CREATE TABLE statement to recreate the table or execute the ALTER TABLE or TRUNCATE TABLE statement to modify the table. If your server is restarted, the maximum size of an existing MEMORY table is set to the value of max\_heap\_table\_size.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_max\_heap\_table\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_heap_table_size)

max\_join\_size

8.0

1

18446744073709551615

\[1-18446744073709551615\]

Unlimited

If the number of rows or row groups or the number of disk queries is greater than value of this parameter, the statements cannot be executed. If you execute single-table statements, this parameter specifies the maximum number of rows. If you execute multi-table statements, this parameter specifies the maximum number of row groups. This parameter helps identify the statements that do not properly use keys and thus require a long period of time. If you want to perform joins that lack a WHERE clause, require a long period of time, or return millions of rows, we recommend that you configure this parameter.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_max\_join\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_join_size)

max\_length\_for\_sort\_data

8.0

1

1024

\[0-838860\]

Unlimited

The cutoff on the size of an index value to determine the filesort algorithm.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_max\_length\_for\_sort\_data](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_length_for_sort_data)

max\_points\_in\_geometry

8.0

1

65536

\[3-1048576\]

Unlimited

The maximum value of points\_per\_circle in the ST\_Buffer\_Strategy() function.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_max\_points\_in\_geometry](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_points_in_geometry)

max\_prepared\_stmt\_count

8.0

1

16382

\[0-1048576\]

Unlimited

The total number of prepared statements in the server.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_max\_prepared\_stmt\_count](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_prepared_stmt_count)

max\_seeks\_for\_key

8.0

1

18446744073709500000

\[1-18446744073709551615\]

Unlimited

The assumed maximum number of times that rows are identified based on keys. When the MySQL optimizer scans an index, the MySQL optimizer assumes that the number of times that keys are checked to identify required rows is less than or equal to the value of this parameter, regardless of the cardinality of the index. You can set this parameter to a small value, such as 100, to force the MySQL optimizer to preferentially scan indexes rather than tables.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_max\_seeks\_for\_key](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_seeks_for_key)

max\_sort\_length

8.0

1

1024

\[4-8388608\]

Unlimited

The number of bytes that are used to sort data values. The server uses only the first max\_sort\_length bytes of each value. As a result, the bytes except the first max\_sort\_length bytes are considered the same for GROUP BY, ORDER BY, and DISTINCT operations.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_max\_sort\_length](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_sort_length)

max\_sp\_recursion\_depth

8.0

1

0

\[0-255\]

Unlimited

The number of times that a given stored procedure may be recursively called. Default value: 0, which indicates that recursion of stored procedures is disabled. Maximum value: 255.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_max\_sp\_recursion\_depth](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_sp_recursion_depth)

max\_user\_connections

8.0

1

600

\[10-200000\]

Unlimited

The maximum number of concurrent connections for a given MySQL account.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_max\_user\_connections](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_user_connections)

max\_write\_lock\_count

8.0

1

102400

\[1-102400\]

Unlimited

If the number of write locks reaches the value of this parameter, read locks are allowed to run.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_max\_write\_lock\_count](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_write_lock_count)

min\_examined\_row\_limit

8.0

1

0

\[0-4294967295\]

Unlimited

If the number of rows checked by a query is less than the value of this parameter, the query is not recorded to the slow query log.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_min\_examined\_row\_limit](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_min_examined_row_limit)

myisam\_sort\_buffer\_size

8.0

1

262144

\[262144-16777216\]

Unlimited

The size of the buffer that is allocated when the REPAIR TABLE statement is executed to sort MyISAM indexes or when CREATE INDEX or ALTER TABLE statement is executed to create indexes.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_myisam\_sort\_buffer\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_myisam_sort_buffer_size)

mysql\_native\_password\_proxy\_users

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether the mysql\_native\_password built-in authentication extension supports proxy users. The effect of this parameter varies based on check\_proxy\_users.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_mysql\_native\_password\_proxy\_users](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_mysql_native_password_proxy_users)

net\_buffer\_length

8.0

1

16384

\[1024-1048576\]

Unlimited

Each client thread is associated with a connection buffer and a result buffer. This parameter specifies the minimum size of the connection buffer or result buffer. You can increase the size of the connection buffer or result buffer to the value of max\_allowed\_packet based on your business requirements. After each SQL statement is executed, the size of the result buffer is decreased to the value of net\_buffer\_length.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_net\_buffer\_length](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_net_buffer_length)

net\_read\_timeout

8.0

1

30

\[1-18446744073709551615\]

Unlimited

The number of seconds to wait for more data from a connection before the read operation is aborted.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_net\_read\_timeout](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_net_read_timeout)

net\_retry\_count

8.0

1

10

\[1-4294967295\]

Unlimited

The number of retries before a read or write operation on a communication port is aborted if the operation is interrupted.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_net\_retry\_count](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_net_retry_count)

net\_write\_timeout

8.0

1

60

\[1-18446744073709551615\]

Unlimited

The number of seconds to wait for a block to be written to a connection before the write is aborted.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_net\_write\_timeout](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_net_write_timeout)

ngram\_token\_size

8.0

0

2

\[0-20\]

Unlimited

The n-gram token size for the n-gram full-text parser. This parameter is read-only and can only be modified at startup. Default value: 2 (2-tuples). Maximum value: 10.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_ngram\_token\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_ngram_token_size)

open\_files\_limit

8.0

0

655350

\[1-2147483647\]

Unlimited

If you set this parameter to a value other than 0, mysqld uses the value to reserve file descriptors for the use with setrlimit().

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_open\_files\_limit](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_open_files_limit)

optimizer\_prune\_level

8.0

1

1

\[0|1\]

Unlimited

The heuristics method applied during query optimization to prune some less-promising plans from the optimizer search space. If you set this parameter to 0, the heuristics method is disabled, and the optimizer performs an exhaustive search. If you set this parameter to 1, the optimizer prunes the plans based on the number of rows retrieved by intermediate plans.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_optimizer\_prune\_level](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_optimizer_prune_level)

optimizer\_search\_depth

8.0

1

62

\[0-62\]

Unlimited

The maximum depth of a search performed by the query optimizer. If you set this parameter to a value that is greater than the number of relations in the result of a query, a better query plan is used, but it requires a long period of time to generate an execution plan for a query. If you set this parameter to a value that is smaller than the number of relations in the result of a query, an execution plan is generated in a quick manner, but the query plan is not optimal. If you set this parameter to 0, the system automatically uses an appropriate value.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_optimizer\_search\_depth](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_optimizer_search_depth)

optimizer\_trace\_limit

8.0

1

1

\[0-4294967295\]

Unlimited

The maximum number of optimizer traces to display.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_optimizer\_trace\_limit](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_optimizer_trace_limit)

optimizer\_trace\_max\_mem\_size

8.0

1

16384

\[0-4294967295\]

Unlimited

The maximum cumulative size of stored optimizer traces.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_optimizer\_trace\_max\_mem\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_optimizer_trace_max_mem_size)

optimizer\_trace\_offset

8.0

1

\-1

\[-2147483648-2147483647\]

Unlimited

The offset of optimizer traces to display.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_optimizer\_trace\_offset](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_optimizer_trace_offset)

opt\_indexstat

8.0

0

OFF

\[ON|OFF\]

Unlimited

Specifies whether to collect statistics on indexes.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

opt\_tablestat

8.0

0

OFF

\[ON|OFF\]

Unlimited

Specifies whether to collect statistics on tables.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

performance\_point\_iostat\_interval

8.0

1

2

\[0-60\]

Unlimited

The interval at which I/O statistics are collected. Unite: milliseconds.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

performance\_point\_iostat\_volume\_size

8.0

0

10000

\[0-100000\]

Unlimited

The maximum capacity of I/O statistics that can be collected. Unit: number of slots.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

performance\_point\_lock\_rwlock\_enabled

8.0

1

ON

\[ON|OFF\]

Unlimited

Specifies whether to enable the performance optimization feature for read or write locks.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

performance\_schema

8.0

0

{LEAST(DBInstanceClassMemory/68719476736, 1)}

\[0-1\]

Unlimited

Specifies whether to enable Performance Schema. Default value: ON. When the server starts, you can configure this parameter based on your business requirements. You can leave this parameter empty. You can set this parameter to ON or 1 to enable Performance Schema. You can also set this parameter to OFF or 0 to disable Performance Schema.

[https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar\_performance\_schema](https://dev.mysql.com/doc/refman/5.7/en/performance-schema-system-variables.html#sysvar_performance_schema)

preload\_buffer\_size

8.0

1

32768

\[1024-1073741824\]

Unlimited

The size of the buffer that is allocated to preload indexes.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_preload\_buffer\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_preload_buffer_size)

query\_alloc\_block\_size

8.0

1

8192

\[1024-16384\]

Unlimited

The size in of memory blocks that are allocated for objects created during statement parsing and execution.

Unit: bytes.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_query\_alloc\_block\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_query_alloc_block_size)

query\_prealloc\_size

8.0

1

8192

\[8192-1048576\]

Unlimited

The size of the persistent buffer that is used for statement parsing and execution. This buffer is not released between statements. If complex queries are being run, a large value of query\_prealloc\_size helps improve query performance because the large value reduces the need for the server to allocate memory during queries.

Unit: bytes.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_query\_prealloc\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_query_prealloc_size)

range\_alloc\_block\_size

8.0

1

4096

\[4096-18446744073709551615\]

Unlimited

The size of blocks that are allocated when range optimization is performed.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_range\_alloc\_block\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_range_alloc_block_size)

range\_optimizer\_max\_mem\_size

8.0

1

8388608

\[0-18446744073709551615\]

Unlimited

The limit on memory consumption for the range optimizer. The value 0 indicates that no limits are imposed. If an execution plan selected by the optimizer uses the range access method but the optimizer estimates that the amount of memory required for this method may exceed the limit, the optimizer abandons the execution plan and select other plans.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_range\_optimizer\_max\_mem\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_range_optimizer_max_mem_size)

read\_buffer\_size

8.0

1

{LEAST(DBInstanceClassMemory/1048576\*128, 262144)}

\[8200-2147479552\]

Unlimited

The size of the buffer allocated for each table that is scanned by a thread for sequential scans on a MyISAM table. Unit: bytes. If the value of this parameter is not a multiple of 4 KB, the value is rounded to the nearest multiple of 4 KB.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_read\_buffer\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_read_buffer_size)

read\_rnd\_buffer\_size

8.0

1

360448

\[8200-2147483647\]

Unlimited

This parameter is used for reads from MyISAM tables and for multi-range read optimization of storage engines.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_read\_rnd\_buffer\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_read_rnd_buffer_size)

regexp\_stack\_limit

8.0

1

8000000

\[0-2147483647\]

Unlimited

The maximum available memory of the internal stack that is used for the matching of the regular expressions used by REGEXP\_LIKE() or similar functions. Unit: bytes.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_regexp\_stack\_limit](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_regexp_stack_limit)

regexp\_time\_limit

8.0

1

32

\[0-2147483647\]

Unlimited

The time limit on the matching of the regular expressions used by REGEXP\_LIKE() or similar functions. This limit is expressed as the maximum permitted number of steps performed by the match engine and indirectly affects the execution time only. In most cases, it is measured in milliseconds.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_regexp\_time\_limit](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_regexp_time_limit)

rpl\_read\_size

8.0

1

8192

\[8192-4294959104\]

Unlimited

The minimum volume of data that is read from binary log files and relay log files. Unit: bytes. If the disk I/O activity for these files affects database performance, a large value of this parameter may reduce file reads and I/O stalls because the file data is not cached by the OS.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar\_rpl\_read\_size](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_rpl_read_size)

schema\_definition\_cache

8.0

1

256

\[256-524288\]

Unlimited

The limit on the number of schema definition objects, both used and unused, that can be stored in the dictionary object cache.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_schema\_definition\_cache](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_schema_definition_cache)

session\_track\_gtids

8.0

1

OFF

\[OFF|OWN\_GTID|ALL\_GTIDS\]

Unlimited

Specifies whether to capture GTIDs and return the tracers of the GTIDs in the OK packet. If this parameter is enabled, the specified GTID is captured by the tracer and appended to the OK packet at the end of a transaction.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_session\_track\_gtids](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_session_track_gtids)

sha256\_password\_proxy\_users

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether the sha256\_password built-in authentication extension supports proxy users. This parameter takes effect only when check\_proxy\_users is enabled.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_sha256\_password\_proxy\_users](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_sha256_password_proxy_users)

show\_create\_table\_verbosity

8.0

1

OFF

\[ON|OFF\]

Unlimited

In most cases, if the default format is ROW, the ROW\_FORMAT table option is not displayed for SHOW CREATE TABLE. If you enable this parameter, the ROW\_FORMAT table option is displayed for SHOW CREATE TABLE regardless of whether the default format is ROW.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_show\_create\_table\_verbosity](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_show_create_table_verbosity)

show\_old\_temporals

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether to include comments in the output of SHOW CREATE TABLE to mark the temporal columns of the types that are supported in versions earlier than MySQL 5.6.4. The temporal columns indicate TIMESTAMP columns that do not support fractional seconds, TIME columns, and DATETIME columns. This parameter is disabled by default. If this parameter is enabled, the output of SHOW CREATE TABLE includes the comments to mark the temporal columns.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_show\_old\_temporals](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_show_old_temporals)

skip\_show\_database

8.0

0

OFF

\[ON|OFF\]

Unlimited

Specifies whether to prevent users from executing SHOW DATABASES if the users do not have the SHOW DATABASES permission. If you do not want a user to view the databases that belong to a different user, you can enable this parameter to improve security. The effect of this parameter depends on the SHOW DATABASES permission. If this parameter is set to ON, only the users who have the SHOW DATABASES permission can execute SHOW DATABASES, and the names of all databases are displayed in the output. If this parameter is set to OFF, all users can execute SHOW DATABASES, but only the names of the databases on which a user has the SHOW DATABASES permission or other permissions are displayed in the output.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_skip\_show\_database](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_skip_show_database)

slave\_net\_timeout

8.0

1

60

\[15-300\]

Unlimited

The number of seconds for the primary server to wait for more data. If this threshold is exceeded, the secondary server considers the connection disconnected, terminates read operations, and then tries to reconnect.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar\_slave\_net\_timeout](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_slave_net_timeout)

slave\_parallel\_type

8.0

0

LOGICAL\_CLOCK

\[DATABASE|LOGICAL\_CLOCK\]

Unlimited

The policy used to determine the transactions to be executed in parallel on the secondary server. This parameter is not suitable for the secondary server for which multithreading is disabled. If slave\_preserve\_commit\_order is set to 1, the value of this parameter must be LOGICAL\_CLOCK.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar\_slave\_parallel\_type](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_slave_parallel_type)

slave\_transaction\_retries

8.0

1

10

\[0-18446744073709551615\]

Unlimited

From MySQL 8.0.26, replica\_transaction\_retries is used to replace slave\_transaction\_retries that is deprecated from that version. In versions before MySQL 8.0.26, use slave\_transaction\_retries.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar\_slave\_transaction\_retries](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_slave_transaction_retries)

slave\_type\_conversions

8.0

0

\[s\*|ALL\_LOSSY|ALL\_NON\_LOSSY|ALL\_SIGNED|ALL\_UNSIGNED\]

Unlimited

The type conversion mode on the secondary server when row-based replication is used.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar\_slave\_type\_conversions](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_slave_type_conversions)

slow\_launch\_time

8.0

1

2

\[1-1024\]

Unlimited

If the time that is required to create a thread exceeds the value of this parameter, the server increases the value of slow\_launch\_threads.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_slow\_launch\_time](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_slow_launch_time)

slow\_query\_log

8.0

1

ON

\[ON|OFF\]

Unlimited

Specifies whether slow query logging is enabled. If this parameter is not used or set to ON, the slow query log is enabled. If this parameter is not specified or set to OFF, the slow query log is disabled.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_slow\_query\_log](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_slow_query_log)

sort\_buffer\_size

8.0

1

262144

\[32768-4294967295\]

Unlimited

The size of the buffer allocated to each session that must perform a sort operation.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_sort\_buffer\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_sort_buffer_size)

sql\_mode

8.0

1

ONLY\_FULL\_GROUP\_BY,STRICT\_TRANS\_TABLES,NO\_ZERO\_IN\_DATE,NO\_ZERO\_DATE,ERROR\_FOR\_DIVISION\_BY\_ZERO,NO\_ENGINE\_SUBSTITUTION

(s\*|REAL\_AS\_FLOAT|PIPES\_AS\_CONCAT|ANSI\_QUOTES|IGNORE\_SPACE|ONLY\_FULL\_GROUP\_BY|NO\_UNSIGNED\_SUBTRACTION|NO\_DIR\_IN\_CREATE|ANSI|NO\_AUTO\_VALUE\_ON\_ZERO|NO\_BACKSLASH\_ESCAPES|STRICT\_TRANS\_TABLES|STRICT\_ALL\_TABLES|NO\_ZERO\_IN\_DATE|NO\_ZERO\_DATE|ALLOW\_INVALID\_DATES|ERROR\_FOR\_DIVISION\_BY\_ZERO|TRADITIONAL|HIGH\_NOT\_PRECEDENCE|NO\_ENGINE\_SUBSTITUTION|PAD\_CHAR\_TO\_FULL\_LENGTH)(,REAL\_AS\_FLOAT|,PIPES\_AS\_CONCAT|,ANSI\_QUOTES|,IGNORE\_SPACE|,ONLY\_FULL\_GROUP\_BY|,NO\_UNSIGNED\_SUBTRACTION|,NO\_DIR\_IN\_CREATE|,ANSI|,NO\_AUTO\_VALUE\_ON\_ZERO|,NO\_BACKSLASH\_ESCAPES|,STRICT\_TRANS\_TABLES|,STRICT\_ALL\_TABLES|,NO\_ZERO\_IN\_DATE|,NO\_ZERO\_DATE|,ALLOW\_INVALID\_DATES|,ERROR\_FOR\_DIVISION\_BY\_ZERO|,TRADITIONAL|,HIGH\_NOT\_PRECEDENCE|,NO\_ENGINE\_SUBSTITUTION|,PAD\_CHAR\_TO\_FULL\_LENGTH)\*

Unlimited

The SQL mode that defines the SQL syntax supported for MySQL and the type of data validation.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_sql\_mode](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_sql_mode)

sql\_require\_primary\_key

8.0

1

OFF

\[ON|OFF\]

Unlimited

Specifies whether the statement that is used to create a table or alter the schema of an existing table must have a primary key.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_sql\_require\_primary\_key](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_sql_require_primary_key)

stored\_program\_cache

8.0

1

256

\[16-524288\]

Unlimited

The soft upper limit on the number of cached stored procedures for each connection. This parameter is specified based on the number of stored procedures in the caches that the MySQL server use for stored procedures and stored functions.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_stored\_program\_cache](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_stored_program_cache)

stored\_program\_definition\_cache

8.0

1

256

\[256-524288\]

Unlimited

The limit on the number of stored procedure definition objects, both used and unused, that can be stored in the dictionary object cache.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_stored\_program\_definition\_cache](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_stored_program_definition_cache)

sync\_binlog

8.0

1

1

\[0-4294967295\]

Unlimited

The number of file writes to trigger the synchronous flushing of binary logs to the disk. The default value 0 indicates that synchronous flushing is disabled.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar\_sync\_binlog](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_sync_binlog)

sync\_master\_info

8.0

1

10000

\[0-18446744073709551615\]

Unlimited

The effects of this parameter on a replication secondary server vary based on the value (FILE or TABLE) of master\_info\_repository that is specified for the secondary server.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar\_sync\_master\_info](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_sync_master_info)

sync\_relay\_log

8.0

1

10000

\[0-4294967295\]

Unlimited

If the value of this parameter is greater than 0, the MySQL server uses fdatasync() to synchronize its relay log to the disk each time the system writes events to the relay log. The number of written events is specified by sync\_relay\_log. This parameter setting immediately takes effect for all replication channels, including running channels.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar\_sync\_relay\_log](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_sync_relay_log)

sync\_relay\_log\_info

8.0

1

10000

\[0-18446744073709551615\]

Unlimited

This parameter setting immediately takes effect for all replication channels, including running channels.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar\_sync\_relay\_log\_info](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_sync_relay_log_info)

tablespace\_definition\_cache

8.0

1

256

\[256-524288\]

Unlimited

The limit on the number of tablespace definition objects, both used and unused, that can be stored in the dictionary object cache.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_tablespace\_definition\_cache](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_tablespace_definition_cache)

table\_definition\_cache

8.0

1

{LEAST(DBInstanceClassMemory/1073741824\*512, 8192)}

\[400-524288\]

Unlimited

The number of table definitions that can be stored in the definition cache. The table definitions are from an FRM file. If you use a large number of tables, you can create a large table definition cache to speed up the opening of tables. The table definition cache does not use file descriptors and occupies less storage than the standard table cache. Minimum value: 400. Default value: 400.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_table\_definition\_cache](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_table_definition_cache)

table\_open\_cache

8.0

1

{LEAST(DBInstanceClassMemory/1073741824\*512, 8192)}

\[1-524288\]

Unlimited

The number of open tables for all threads. A large value increases the number of file descriptors that mysqld requires. You can check Opened\_tables to determine whether to increase the table cache. For more information, see Server status variables. If the value of Opened\_tables is large and you do not frequently use FLUSH TABLES, we recommend that you set this parameter to a large value. FLUSH TABLES forcefully closes all tables and opens the tables again.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_table\_open\_cache](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_table_open_cache)

table\_open\_cache\_instances

8.0

0

16

\[1-64\]

Unlimited

The number of open table cache instances. To improve scalability by reducing contention among sessions, the system can partition the open table cache into smaller cache instances. The number of the smaller cache instances is calculated by using the following formula: Value of table\_open\_cache/Value of table\_open\_cache\_instances. A session needs to lock only one instance and access the instance to execute DML statements. This segments cache access among instances, improving execution performance of the statements that use the cache when a large number of sessions access tables. DDL statements still need to lock the entire cache, but the frequency to use DDL statements is much less than the frequency to use DML statements.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_table\_open\_cache\_instances](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_table_open_cache_instances)

temptable\_max\_mmap

8.0

1

1073741824

\[0-18446744073709551615\]

\[20210930,99999999\]

The maximum amount of memory that the TempTable storage engine can allocate from memory-mapped temporary files before data is stored to InnoDB internal temporary tables. Unit: bytes. If you set this parameter to 0, the allocation of memory from memory-mapped temporary files is disabled.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_temptable\_max\_mmap](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_temptable_max_mmap)

temptable\_max\_ram

8.0

1

1073741824

\[2097152-107374182400\]

Unlimited

The maximum amount of memory that the TempTable storage engine can allocate from random-access memory (RAM) before data is stored to the disk. Unit: bytes.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_temptable\_max\_ram](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_temptable_max_ram)

thread\_cache\_size

8.0

1

100

\[0-16384\]

Unlimited

The number of threads that are cached by the server for reuse. If a client disconnects and the number of client threads in the cache is less than the value of thread\_cache\_size, the threads are stored in the cache. Requests for threads are satisfied by reusing threads in the cache if possible. A thread is created only when the cache is empty. If a large number of new connections are established, you can increase the value of this parameter to improve performance. In most cases, if a thread is implemented in a better manner, this parameter does not significantly improve performance. However, if your server processes hundreds of connections per second, we recommend that you set thread\_cache\_size to a large value. This way, most new connections can use cached threads. You can check the differences between Connections and Threads\_created to view the caching efficiency.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_thread\_cache\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_thread_cache_size)

thread\_stack

8.0

0

1048576

\[131072-2147483647\]

Unlimited

The stack size of each thread. The default value is 192 KB. If you use a 64-bit operating system, the default value is 256 KB. The default value is enough for standard operations. If the stack size of a thread is set to a small value, the following items are affected: the capability of the server to process complex SQL statements, the recursion depth of stored procedures, and memory-consuming operations.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_thread\_stack](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_thread_stack)

tls\_version

8.0

0

TLSv1,TLSv1.1,TLSv1.2

\[TLSv1,TLSv1.1,TLSv1.2,TLSv1.3|TLSv1,TLSv1.1|TLSv1.2,TLSv1.3|TLSv1.3\]

Unlimited

The version of the protocol that the server can use to encrypt connections. The value is a comma-separated list that contains one or more protocol versions. The protocols that can be specified for this parameter depend on the SSL library used to compile MySQL.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_tls\_version](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_tls_version)

tmp\_table\_size

8.0

1

2097152

\[262144-268435456\]

Unlimited

The maximum size of the internal in-memory temporary table.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_tmp\_table\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_tmp_table_size)

transaction\_alloc\_block\_size

8.0

1

8192

\[1024-131072\]

Unlimited

The amount of memory that is allocated to a memory pool to process each additional transaction. Unit: bytes. For more information, see the description of transaction\_prealloc\_size.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_transaction\_alloc\_block\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_transaction_alloc_block_size)

transaction\_isolation

8.0

1

READ-COMMITTED

\[READ-UNCOMMITTED|READ-COMMITTED|REPEATABLE-READ|SERIALIZABLE\]

Unlimited

The transaction isolation level.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_transaction\_isolation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_transaction_isolation)

transaction\_prealloc\_size

8.0

1

4096

\[1024-131072\]

Unlimited

The initial size of the memory pool for a transaction. Unit: bytes. The memory pool is used to allocate transaction-related memory. If each allocation cannot be satisfied from the pool because the pool does not have sufficient memory, the size of the pool is increased by the value of transaction\_alloc\_block\_size. When the transaction ends, the pool is truncated to transaction\_prealloc\_size bytes.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_transaction\_prealloc\_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_transaction_prealloc_size)

transaction\_write\_set\_extraction

8.0

1

XXHASH64

\[OFF|XXHASH64\]

\[20210930,99999999)

The hash algorithm that is used to extract write operations during transactions. Default value: XXHASH64.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar\_transaction\_write\_set\_extraction](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_transaction_write_set_extraction)

updatable\_views\_with\_limit

8.0

1

YES

\[YES|NO\]

Unlimited

Specifies whether a view can be updated when the LIMIT clause is used in updates and when the view does not contain all columns of the primary key defined in the underlying table. In most cases, these updates are generated by GUI tools. An update can be an UPDATE or DELETE statement. The primary key indicates a primary key, or a UNIQUE index in which no column can contain NULL.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_updatable\_views\_with\_limit](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_updatable_views_with_limit)

wait\_timeout

8.0

1

86400

\[1-31536000\]

Unlimited

The period of time that the server waits for activity on a non-interactive connection before the server closes the non-interactive connection. Unit: seconds.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_wait\_timeout](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_wait_timeout)

windowing\_use\_high\_precision

8.0

1

ON

\[ON|OFF\]

Unlimited

Specifies whether to compute window operations without precision loss.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_windowing\_use\_high\_precision](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_windowing_use_high_precision)

loose\_innodb\_log\_writer\_threads

8.0

1

ON

\[ON|OFF\]

This parameter is available for RDS instances that run minor engine versions of 20201231 and later.

ON: You can enable log writing threads. This way, a dedicated thread is used to write and refresh logs. OFF: Each thread independently writes and refreshes logs.

[https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar\_innodb\_log\_writer\_threads](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_log_writer_threads)

loose\_log\_error\_suppression\_list

8.0

1

MY-010520,MY-013360

.\*

Unlimited

The parameter applies to the events that are triggered by error logs. This parameter also specifies which events of the WARNING or INFORMATION log level should be silenced. For example, if an event of the WARNING log level frequently occurs but the event is unimportant, the event is considered as unwanted noise in the error log and the event can be silenced.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_log\_error\_suppression\_list](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_log_error_suppression_list)

loose\_session\_track\_system\_variables

8.0

1

No default value

.\*

Unlimited

Controls whether the server tracks and notifies the client of assignments to session system variables. You can configure this parameter to specify the variables whose assignments you want the server to track and allow the server to notify the client of the names and new values of the variables.

[https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar\_session\_track\_system\_variables](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_session_track_system_variables)

loose\_rpl\_semi\_sync\_master\_timeout

8.0

1

1000

\[0-18446744073709551615\]

Unlimited

The period of time during which the primary server waits before the primary server receives a commit confirmation from the replica. If the primary server does not receive a commit confirmation within the period of time, the replication mode of the primary server is degraded to asynchronous replication. Unit: milliseconds. Default value: 10000, which equals 10 seconds.

**Note**

This parameter is available only if the semi-synchronous replication plug-in is installed on the primary server.

[https://dev.mysql.com/doc/refman/8.0/en/replication-options-source.html#sysvar\_rpl\_semi\_sync\_master\_timeout](https://dev.mysql.com/doc/refman/8.0/en/replication-options-source.html#sysvar_rpl_semi_sync_master_timeout)
