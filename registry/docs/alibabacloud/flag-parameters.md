This topic lists flag parameters. You can search for a parameter to view its scope, property name, and description.

**Category**

**Scope of impact**

**Property name**

**Description**

**Valid values**

**Affected SQL commands and functions**

Ecosystem

Session

console.sql.result.instancetunnel

Specifies whether to enable InstanceTunnel. For more information about Tunnel commands, see [Usage notes](/help/en/maxcompute/user-guide/usage-notes-1#concept-2339901).

-   True: Enable.
    
-   False: Disable.
    

SELECT

Scheduling

Session

odps.stage.mapper.mem

The memory size of each Map worker.

Valid values: 256 MiB to 12288 MiB. The default value is 1024 MiB.

ALL

Scheduling

Session

odps.stage.reducer.mem

The memory size of each Reduce worker.

Range: 256 MiB to 12288 MiB. Default value: 1024 MiB.

ALL

Scheduling

Session

odps.stage.joiner.mem

The memory size of each Join worker.

Range: 256 MiB to 12288 MiB. Default value: 1024 MiB.

ALL

Scheduling

Session

odps.stage.mem

The total memory size of all workers in a specified MaxCompute job. This parameter has a lower priority than the odps.stage.mapper.mem, odps.stage.reducer.mem, and odps.stage.joiner.mem properties.

Range: 256 MiB to 12288 MiB. No default value.

ALL

Scheduling

Session

odps.stage.mapper.split.size

The input data volume of each Map worker, which is the split size of the input file. This parameter indirectly controls the number of workers at each Map stage.

**Note**

-   When you configure this parameter, avoid using `Limit` in SQL statements. `Limit` restricts workers to single-concurrency execution.
    
-   MaxCompute supports the [Split Size Hint](/help/en/maxcompute/user-guide/split-size-hint) feature to adjust the split size, control the degree of parallelism, and optimize computing performance.
    

Unit: MiB. Default value: 256 MiB.

ALL

Scheduling

Session

odps.sql.split.size

The data size of a single shard for table-level parallel processing.

Unit: MiB.

Example: `{"table1": 1024, "table2": 512}`.

ALL

Scheduling

Session

odps.sql.split.row.count

The number of rows in a single shard for table-level parallel processing.

**Note**

This parameter can be used only for internal tables, non-transactional tables, and non-clustered tables.

The value must be a positive integer.

Example: `{"table1": 100, "table2": 500}`.

ALL

Scheduling

Session

odps.sql.split.dop

The degree of parallelism for table-level processing.

**Note**

This parameter can be used only for internal tables, non-transactional tables, and non-clustered tables.

The value must be a positive integer.

Example: `{"table1": 1, "table2": 5}`.

ALL

Scheduling

Session

odps.stage.reducer.num

The number of workers at each Reduce stage.

**Note**

When you configure this parameter, avoid using `Limit` in SQL statements. `Limit` restricts workers to single-concurrency execution.

\-

ALL

Scheduling

Session

odps.stage.joiner.num

The number of workers at each Join stage.

**Note**

When you configure this parameter, avoid using `Limit` in SQL statements. `Limit` restricts workers to single-concurrency execution.

\-

ALL

Scheduling

Session

odps.stage.num

The concurrency of all workers in a specified MaxCompute job. This parameter has a lower priority than the odps.stage.mapper.split.size, odps.stage.reducer.num, and odps.stage.joiner.num properties.

**Note**

When you configure this parameter, avoid using `Limit` in SQL statements. `Limit` restricts workers to single-concurrency execution.

\-

ALL

Scheduling

Project

odps.instance.priority.enable

Specifies whether to enable the job priority feature for a project that uses subscription compute resources. For more information about the job priority feature, see [Job priority](/help/en/maxcompute/user-guide/job-priority#concept-2554678).

-   True: Enable.
    
-   False: Disable.
    

**Note**

Only the project owner or a user who is assigned the Super\_Administrator role can run this command to enable the priority feature.

ALL

SQL

Session

odps.sql.reshuffle.dynamicpt

Specifies whether to enable dynamic partitioning to prevent the generation of an excessive number of small files when dynamic partitions are split.

-   True: Enable.
    
-   False: Disable.
    

**Note**

If a small number of dynamic partitions are generated, set this parameter to False to prevent data skew.

-   INSERT INTO
    
-   INSERT OVERWRITE
    

SQL

Session

odps.sql.udf.getjsonobj.new

Specifies whether the GET\_JSON\_OBJECT function retains the original string when it returns a value.

**Note**

For more information about the GET\_JSON\_OBJECT function, see [String functions](/help/en/maxcompute/user-guide/string-functions/#concept-ulf-pfm-vdb).

-   For MaxCompute projects created on or after January 21, 2021, the GET\_JSON\_OBJECT function retains the original strings for the returned results by default.
    
-   For MaxCompute projects created before January 21, 2021, the GET\_JSON\_OBJECT function returns JSON reserved characters using escape characters by default. This prevents behavior changes from affecting existing jobs.
    

-   True: Enable.
    
-   False: Disable.
    

UDF

SQL

Session

odps.sql.udf.jvm.memory

The maximum memory of the JVM heap for a UDF.

If a large volume of data is computed and sorted in the memory using a UDF, an out of memory (OOM) error may occur. In this case, you can increase the value of this parameter. However, this method provides only temporary relief. Optimize the UDF code as needed.

Range: 256 MiB to 12288 MiB. Default value: 1024 MiB.

UDF

SQL

Session

odps.function.timeout

The timeout period of a UDF.

Range: 0s to 3600s. Default value: 600s.

UDF

SQL

Session

odps.sql.session.resources

The resources that are referenced by a UDT. You can specify multiple resources. Separate them with commas (,).

For more information about referenced resources, see [UDT overview](/help/en/maxcompute/user-guide/overview-4#concept-drb-xk4-hfb).

Uploaded resources.

UDT

SQL

Session

odps.sql.udt.display.tostring

Specifies whether to enable the mechanism that wraps all columns whose final output is a UDT with java.util.Objects.toString(...).

-   True: Enable.
    
-   False: Disable.
    

UDT

SQL

Session

odps.sql.session.java.imports

The Java packages that are referenced by UDTs. You can specify multiple Java packages. Separate them with commas (,). For more information about Java packages, see [UDT overview](/help/en/maxcompute/user-guide/overview-4#concept-drb-xk4-hfb).

Uploaded Java packages.

UDT

SQL

Session

odps.sql.skewjoin

Specifies whether to enable the SKEWJOIN feature to resolve long tail issues.

-   True: Enable.
    
-   False: Disable.
    

-   SELECT
    
-   JOIN
    

SQL

Session

odps.sql.skewinfo

The target key and its corresponding value for SKEWJOIN. For more information, see [Data skew tuning](/help/en/maxcompute/use-cases/data-skew-tuning#concept-2340407).

\-

-   SELECT
    
-   JOIN
    

SQL

Session

odps.sql.udf.ppr.deterministic

Specifies whether to enable partition pruning for UDFs. For more information about partition pruning, see [WHERE clause (WHERE\_condition)](/help/en/maxcompute/user-guide/select-syntax#section-lwx-cv2-ggb).

-   True: Enable.
    
-   False: Disable.
    

UDF

SQL

Session

odps.sql.udf.ppr.to.subquery

Specifies whether to ignore errors that occur during partition pruning backfill. For more information about partition pruning, see [WHERE clause (WHERE\_condition)](/help/en/maxcompute/user-guide/select-syntax#section-lwx-cv2-ggb).

-   True: Enable.
    
-   False: Disable.
    

UDF

SQL

Session

odps.optimizer.enable.range.partial.repartitioning

Specifies whether to enable the Shuffle Remove feature for range-clustered tables.

-   True: Enable.
    
-   False: Disable.
    

-   INSERT OVERWRITE
    
-   CREATE TABLE
    

SQL

Session

odps.optimizer.merge.partitioned.table

When a query repeatedly uses the same partitioned table, you can set this parameter to enable the system to merge the partitioned table. This minimizes I/O operations on the partitioned table and improves performance.

-   True: Enable.
    
-   False: Disable.
    

SELECT

SQL

Session

odps.optimizer.skew.join.topk.num

The number of hot values obtained by the optimizer when it runs an aggregate operation. For more information, see [SKEWJOIN HINT](/help/en/maxcompute/user-guide/skewjoin-hint#concept-2000470).

\-

SKEWJOIN HINT

SQL

Session

odps.optimizer.stat.collect.auto

Specifies whether to enable the Freeride feature. After the Freeride feature is enabled, column statistics of a table are automatically collected. For more information about how to collect optimizer information, see [Optimizer](/help/en/maxcompute/user-guide/collect-information-for-the-optimizer-of-maxcompute/#concept-2000166).

-   True: Enable.
    
-   False: Disable.
    

-   CREATE TABLE
    
-   INSERT INTO
    
-   INSERT OVERWRITE
    

SQL

Session

odps.optimizer.stat.collect.plan

A collection plan that is used to collect specified column statistics metrics of specified columns. For more information about how to collect optimizer information, see [Optimizer](/help/en/maxcompute/user-guide/collect-information-for-the-optimizer-of-maxcompute/#concept-2000166).

\-

-   CREATE TABLE
    
-   INSERT INTO
    
-   INSERT OVERWRITE
    

SQL

Session

odps.sql.external.net.vpc

Specifies whether to enable VPC support for external tables. For more information, see [Hologres foreign tables](/help/en/maxcompute/user-guide/hologres-foreign-tables#task-2040589).

-   True: Enable.
    
-   False: Disable.
    

CREATE TABLE

SQL

Session

odps.sql.groupby.position.alias

Specifies whether to use integer constants in the groupby clause as column ordinal numbers in a SELECT statement.

-   True: Enable.
    
-   False: Disable.
    

-   SELECT
    
-   GROUP BY
    

SQL

Session

odps.sql.groupby.skewindata

Specifies whether to enable the anti-skew mechanism for the groupby clause.

-   True: Enable.
    
-   False: Disable.
    

GROUP BY

SQL

Session

odps.sql.orderby.position.alias

Specifies whether to use integer constants in the orderby clause as column ordinal numbers in a SELECT statement.

-   True: Enable.
    
-   False: Disable.
    

-   ORDER BY
    
-   SELECT
    

SQL

Session

odps.sql.mapjoin.memory.max

The size of small tables that are read into memory in a MAPJOIN scenario. Unit: MiB.

**Note**

This parameter is also subject to the global memory limit at the task level. The global upper limit on the total memory for multiple small tables in the same task is `std::min(8G, odps.sql.mapjoin.memory.max * number of small tables in the same task)`.

Range: 0 MiB to 8192 MiB

JOIN

SQL

Session

odps.sql.distributed.map.join.memory.max

The memory size of each instance of the HashTableBuilder in a MAPJOIN scenario. Default value: 2048. Unit: MiB.

Range: 0 MiB to 8192 MiB

JOIN

SQL

Session

odps.sql.python.version

The Python version for running SQL statements.

-   cp27
    
-   cp37
    

-   UDTF
    
-   UDAF
    

SQL

Session

odps.sql.select.output.format

Specifies whether to display table headers in the results returned by the MaxCompute client. For more information about how to use the MaxCompute client, see [Connect to MaxCompute using the client (odpscmd)](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db).

-   `{""needHeader"":false,""fieldDelim"":""""}`: Do not display table headers.
    
-   `{""needHeader"":true,""fieldDelim"":""""}`: Display table headers.
    

ALL

SQL

Session

odps.sql.unstructured.data.oss.use.https

Specifies whether to enable the mechanism of obtaining data over HTTPS at the underlying layer when you access external tables. For more information about OSS external tables, see [ORC external tables](/help/en/maxcompute/user-guide/orc-external-tables#task-2044758).

-   True: Enable.
    
-   False: Disable.
    

ALL

SQL

Session

odps.sql.decimal.tostring.trimzero

Specifies whether to remove trailing zeros after the decimal point for data of the DECIMAL type. The default value is `True`, which indicates that trailing zeros are removed by default.

-   True: Remove trailing zeros after the decimal point.
    
-   False: Keep trailing zeros after the decimal point.
    

CAST

SQL

Session

odps.sql.unstructured.tablestore.put.row

Specifies whether to support writing data to Tablestore external tables using PutRow.

**Note**

For more information about PutRow, see [PutRow](/help/en/tablestore/developer-reference/putrow#reference1838).

-   True: Enable.
    
-   False: Disable.
    

ALL

SQL

Session

odps.sql.unstructured.external.max.dop

The maximum degree of parallelism for workers that access an external table.

A positive integer.

External table queries and writes

SQL

Session/Project

odps.sql.unstructured.file.pattern.black.list

When MaxCompute SQL reads data from an external table that points to an OSS or HDFS location, this parameter automatically ignores the `_SUCCESS` file. Spark creates this file when it writes to the directory. This prevents MaxCompute SQL from failing to read data in the directory. For example, specify the parameter at the session level:

```
CREATE EXTERNAL TABLE IF NOT EXISTS test_oss_pt( 
  t_id INT,
  t_string STRING)
PARTITIONED BY (pt1 INT,pt2 INT)
STORED BY 'com.aliyun.odps.CsvStorageHandler' 
WITH serdeproperties (
 'odps.properties.rolearn'='acs:ram::xxxxxx:role/aliyunodpsdefaultrole'
) 
LOCATION 'oss://oss-cn-hangzhou-internal.aliyuncs.com/oss-mc-test/Demo3/';

SET odps.sql.unstructured.file.pattern.black.list=.*_SUCCESS$;
INSERT INTO test_oss_pt PARTITION (pt1=8,pt2=8) VALUES (1,'tree');
SELECT t_id, t_string FROM test_oss_pt WHERE pt1=8 AND pt2=8;
```

Value: `.*_SUCCESS$`.

External table queries

SQL

Session

odps.meta.exttable.stats.onlinecollect

Because data from external queries is stored in a data lake, local metadata cannot be processed due to the open nature of data lakes. In addition, because the data is located externally and statistics are not collected in advance, a conservative strategy is often adopted when an execution plan is generated, which results in low execution efficiency.

This feature enables the Optimizer to discover small tables by temporarily collecting table Stats during query execution, allowing it to proactively use Hash Joins, optimize the join order, reduce a large amount of Shuffle, and shorten the execution pipeline to optimize the query plan.

True: Enable.

False (default): Disable.

External table queries

SQL

Project

odps.sql.allow.fullscan

Specifies whether to allow full table scans in a project. A full table scan consumes many resources. To improve processing efficiency, do not enable this feature.

-   True: Allow full table scans.
    
-   False: Prohibit full table scans.
    

SELECT

SQL

Project

odps.table.lifecycle

Specifies whether to configure a lifecycle for tables in a project.

-   Optional: The Lifecycle clause is optional when you create a table. If you do not set a lifecycle for a table, the table never expires.
    
-   Mandatory: The Lifecycle clause is required when you create a table. You must set a lifecycle for the table.
    
-   Inherit: If you do not set a lifecycle for a table when you create it, the value of odps.table.lifecycle.value is used.
    

CREATE TABLE

SQL

Project

odps.table.lifecycle.value

The lifecycle of a table. Unit: days.

Range: 1 to 37231. Default value: 37231.

CREATE TABLE

SQL

Project

READ\_TABLE\_MAX\_ROW

The number of data records returned by a SELECT statement.

Range: 1 to 10000. Default value: 10000.

SELECT

SQL

Project

odps.output.field.formatter

The dynamic data masking rules for SQL query results. For more information about dynamic data masking in MaxCompute, see [Dynamic data masking](/help/en/maxcompute/security-and-compliance/dynamic-data-masking#concept-2346299).

Custom dynamic data masking rules.

SELECT

SQL

Project

odps.sql.acid.table.enable

Specifies whether to enable the ACID mechanism. For more information about ACID, see [ACID semantics](/help/en/maxcompute/product-overview/acid-semantics#concept-287059).

-   True: Enable.
    
-   False: Disable.
    

ALL

SQL

Session/Project

odps.io.oss.use.vipserver

Specifies whether to use a virtual IP address (VIP) server to access OSS for external tables. If this parameter is disabled, an SLB is used. A VIP server provides a higher traffic limit and supports throttling. However, it poses stability risks, such as query failures. Evaluate the risks before you enable this parameter.

-   True: Enable
    
-   False (default): Disable
    

External table queries

SQL

Session/Project

odps.sql.executionengine.enable.string.to.date.full.format

To convert a date string that contains the hour, minute, and second, set this parameter to True. The default value is False.

-   True: Enable.
    
-   False: Disable.
    

CAST

SQL

Session/Project

odps.sql.executionengine.enable.rand.time.seed

If this parameter is set to False, the Rand function uses the current instance ID as the seed for random number initialization. This ensures the idempotence of the function.

If this parameter is set to True, the Rand function uses the current system time as the seed for random number initialization. In this case, the Rand function is no longer idempotent and cannot be used as a shuffle key. This causes different results for reruns.

The default value is False.

-   True: Enable.
    
-   False: Disable.
    

RAND

SQL

Session/Project

odps.sql.type.system.odps2

Specifies whether to enable the MaxCompute V2.0 data type edition. For more information about the MaxCompute V2.0 data types, see [Data types (version 2.0)](/help/en/maxcompute/user-guide/maxcompute-v2-0-data-type-edition#concept-2454988).

-   True: Enable.
    
-   False: Disable.
    

MaxCompute V2.0 extension functions

SQL

Session/Project

odps.sql.type.json.enable

Specifies whether to enable the JSON data type. For more information about the JSON data type, see [JSON data type](/help/en/maxcompute/user-guide/maxcompute-json-type-usage-guide-trial-beta-version).

-   True: Enable.
    
-   False: Disable.
    

MaxCompute JSON data type

SQL

Session/Project

odps.sql.hive.compatible

Specifies whether to enable Hive-compatible mode. After you enable Hive-compatible mode, MaxCompute supports various syntaxes specified for Hive, such as inputRecordReader, outputRecordReader, and Serde. For more information about compatible data types, see [Hive-compatible data types](/help/en/maxcompute/user-guide/hive-compatible-data-type-edition#concept-2454988).

-   True: Enable.
    
-   False: Disable.
    

ALL

SQL

Session/Project

odps.sql.metering.value.max

The consumption limit for a single SQL statement. For more information about consumer monitoring, see [Monitoring, alerting, and consumption control](/help/en/maxcompute/product-overview/consumption-control#concept-2349452).

\-

ALL

SQL

Session/Project

odps.sql.timezone

The time zone of the MaxCompute project. For more information about time zones, see [Time zone configuration operations](/help/en/maxcompute/user-guide/time-zone-configuration-operations#concept-844666).

\-

ALL

SQL

Session/Project

odps.sql.unstructured.oss.commit.mode

Specifies whether to enable the multipart upload feature of OSS to write data to OSS external tables. For more information, see [Write data to OSS](/help/en/maxcompute/user-guide/write-data-to-oss#concept-wsw-nnb-wdb).

-   True: Enable.
    
-   False: Disable.
    

INSERT OVERWRITE

SQL

Session/Project

odps.sql.groupby.orderby.position.alias

Specifies whether to use integer constants in the group by and order by clauses as column ordinal numbers in a SELECT statement.

**Note**

For an existing project, if you enable this parameter at the project level, the parsing and execution of your existing tasks may be affected. Before you modify this parameter, confirm that your existing tasks can still be correctly executed based on the original logic. Otherwise, set this parameter at the session level.

-   True: Enable.
    
-   False: Disable.
    

-   GROUP BY
    
-   ORDER BY
    
-   SELECT
    

SQL

Session/Project

odps.ext.oss.orc.native

Use the native ORC reader to read tables.

-   True: Enable.
    
-   False: Disable.
    

SELECT

SQL

Session

odps.sql.job.max.time.hours

The maximum running time of a single job.

Range: 1 to 72. Default value: 24.

SQL job

Billing

Session

odps.task.quota.preference.tag

Specifies the quota group for a job. The quota group is the quota group in MaxCompute Management. For projects that use subscription resources, you can use this property to specify a secondary quota group for a job. If the quota tag set when a job is submitted is the same as the quota tag in a quota group property, the job is preferentially scheduled to this quota group. Otherwise, the job is scheduled to the quota group specified for the project to which the job belongs.

Run the following statement to set the parameter.

```
set odps.task.quota.preference.tag = payasyougo
```

**Note**

This property is supported only for SQL jobs.

tag\_name is the quota group tag of the quota group in MaxCompute Management. The quota group can only be a quota group in the region where the owner of the project to which the job belongs is located. tag\_name can contain only letters, digits, and underscores (\_).

ALL

Billing

Session

odps.task.wlm.quota

The specified resource is used to run the tasks of the current session. The value is the corresponding QuotaName.

\-

ALL

Security and permissions

Project

odps.forbid.fetch.result.by.bearertoken

Specifies whether to prohibit Logview from displaying job running results on the Result tab. This parameter is used mainly to protect data security.

-   True: Prohibit the display of job running results.
    
-   False: Allow the display of job running results.
    

ALL

Security and permissions

Project

LabelSecurity

Specifies whether to enable the LabelSecurity mechanism. For more information about the LabelSecurity mechanism, see [Label-based access control](/help/en/maxcompute/user-guide/label-based-access-control#concept-nq3-zz1-wdb).

-   True: Enable.
    
-   False: Disable.
    

ALL

Security and permissions

Project

CheckPermissionUsingACL

Specifies whether to enable the ACL authorization mechanism. For more information about ACL authorization, see [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb).

-   True: Enable.
    
-   False: Disable.
    

ALL

Security and permissions

Project

CheckPermissionUsingPolicy

Specifies whether to enable the policy authorization mechanism. For more information about policy authorization, see [Policy-based access control](/help/en/maxcompute/user-guide/policy-based-access-control-1#concept-2478724).

-   True: Enable.
    
-   False: Disable.
    

ALL

Security and permissions

Project

ObjectCreatorHasAccessPermission

Specifies whether an object creator has access permissions on the object by default.

-   True: The object creator has access permissions by default.
    
-   False: The object creator does not have access permissions by default.
    

ALL

Security and permissions

Project

ObjectCreatorHasGrantPermission

Specifies whether an object creator has authorization permissions on the object by default.

-   True: The object creator has authorization permissions by default.
    
-   False: The object creator does not have authorization permissions by default.
    

ALL

Security and permissions

Project

ProjectProtection

Specifies whether to enable the data protection mechanism. For more information about the data protection mechanism, see [Data protection mechanism](/help/en/maxcompute/security-and-compliance/project-data-protection#concept-hdk-5g1-wdb).

-   True: Enable.
    
-   False: Disable.
    

ALL

Security and permissions

Project

odps.output.field.formatter

The dynamic data masking rules for SQL query results. For more information about dynamic data masking, see [Dynamic data masking](/help/en/maxcompute/security-and-compliance/dynamic-data-masking#concept-2346299).

Custom dynamic data masking rules.

SELECT

Permission security

Project

odps.security.ip.whitelist

The IP address whitelist that can be used to access the project in a cloud product interconnection scenario. For more information about IP address whitelists, see [Manage IP address whitelists](/help/en/maxcompute/security-and-compliance/manage-ip-address-whitelists#task-2330709).

A list of IP addresses. Separate IP addresses with commas (,).

ALL

Permission security

Project

odps.security.vpc.whitelist

The IP address whitelist that can be used to access the project in a VPC scenario. For more information about IP address whitelists, see [Manage IP address whitelists](/help/en/maxcompute/security-and-compliance/manage-ip-address-whitelists#task-2330709).

_RegionID\_VPCID\[IP Address\]_

ALL

Data type

Project

odps.sql.decimal.odps2

Specifies whether to enable DECIMAL(precision,scale) of the DECIMAL 2.0 data type. For more information about data types, see [Data types (version 2.0)](/help/en/maxcompute/user-guide/maxcompute-v2-0-data-type-edition#concept-2454988).

-   True: Enable.
    
-   False: Disable.
    

ALL

Data storage

Project

odps.timemachine.retention.days

The retention period of backup data. For more information about data backup, see [Local backup](/help/en/maxcompute/user-guide/backup-and-restoration#concept-2549238).

Range: 0 to 30. Default value: 1.

ALL

Metadata

Project

odps.schema.evolution.enable

Enables the schema evolution feature.

-   True: Enable.
    
-   False (default): Disable.
    

Schema evolution.

## Query flag parameter values

You can query the values of flag parameters at the project or session level.

-   Project level: In the MaxCompute client (odpscmd), run the `setproject;` command to query all flag parameter values in the project.
    
-   Session level: View the parameter values for a session in Logview.
