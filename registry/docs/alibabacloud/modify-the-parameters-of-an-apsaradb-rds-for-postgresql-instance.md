This topic describes how to modify parameters of an ApsaraDB RDS for PostgreSQL instance to optimize performance or meet your business requirements. You can also view the parameter modification history.

## Usage notes

-   Modifying some parameters triggers an instance restart. The instance restarts immediately after you modify the parameters and click **Apply Parameters**. To check whether modifying a parameter triggers a restart, view the **Force Restart** column on the **Modifiable Parameters** tab. If the instance restarts, your application is disconnected. Make sure your business can tolerate the restart before you proceed.
    
-   When you modify a parameter in the console, refer to the **Valid Values** column on the **Modifiable Parameters** tab for allowed values.
    
-   When you modify the following parameters on the primary instance, the changes are synchronized to all associated read-only instances.
    
    `wal_level, max_replication_slots, max_wal_senders, max_locks_per_transaction, max_worker_processes, max_prepared_transactions`
    
-   When you modify a parameter, the system attempts to apply the change. If the new value is invalid or causes the instance to fail, the modification is rolled back and the result is marked as **Failed**. You can view the result in the **Status** column on the **Edit History** tab.
    
-   The `log_statement` parameter cannot be modified directly. To change this parameter, [enable or disable SQL Explorer and Audit](/help/en/rds/apsaradb-rds-for-postgresql/sql-insight-or-audit).
    

## Modify parameter values

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left navigation pane, click **Parameters**.
    
3.  On the **Modifiable Parameters** tab, find the parameter that you want to modify. You can modify parameters individually or in batches:
    
    -   Modify a single parameter
        
        1.  Click the ![](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/26179/cn_zh/1466499669749/Image%20005.png) icon next to the parameter that you want to modify.
            
        2.  Enter the new value and click **OK**.
            
        3.  Click **Apply Parameters**.
            
        4.  In the dialog box, select when the new value takes effect: **Take Effect Immediately**, **Take Effect Within the Maintenance Window (02:00-06:00)**, or **Take Effect at Specified Time**. Then, click **OK**.
            
    -   Modify parameters in batches
        
        1.  Click **Export Parameters** to download the parameter file to your computer.
            
        2.  Open the parameter file and modify the parameter values.
            
        3.  Click **Import Parameters**.
            
        4.  In the **Import Parameters** dialog box, paste the parameters and their new values, and then click **OK**.
            
        5.  Confirm the modifications in the parameter list and click **Apply Parameters**.
            
        6.  In the dialog box, select when the new values take effect: **Take Effect Immediately**, **Take Effect Within the Maintenance Window (02:00-06:00)**, or **Take Effect at Specified Time**, and then click **OK**.
            
    
    **Note**
    
    On the **Scheduled Tasks** tab, you can view parameter modification tasks scheduled for ****Take Effect Within the Maintenance Window (02:00-06:00)** or **Take Effect at Specified Time****.
    

## Query parameter modification history

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left navigation pane, click **Parameters**.
    
3.  Click the **Edit History** tab.
    
4.  Select a time range and click **OK**.
    

## Parameter expressions

You can use expressions to set parameters. When you set an instance type-related parameter to an expression, the parameter value automatically adjusts when you change the instance type. This ensures the parameter value remains optimal for the new instance type.

The following table describes the supported expression syntax.

**Category**

**Usage notes**

**Example**

Parameters

The following parameters support expressions:

Parameters that support expressions

-   work\_mem: specifies the amount of memory that is used by internal sorting operations and hash tables before data is written to temporary files.
    
-   maintenance\_work\_mem: sets the maximum amount of memory that can be used for maintenance operations, such as VACUUM and CREATE&nbsp;INDEX.
    
-   autovacuum\_work\_mem: specifies the maximum amount of memory that each autovacuum worker process can use.
    
-   max\_parallel\_workers: sets the maximum number of workers that the system can support for parallel operations.
    
-   max\_parallel\_workers\_per\_gather: sets the maximum number of workers that can be started by a single Gather or Gather Merge node.
    
-   effective\_cache\_size: sets the preset value of the optimizer for the total size of the data cache.
    
-   autovacuum\_max\_workers: specifies the maximum number of autovacuum processes that can run at the same time, except for the autovacuum launcher.
    
-   max\_wal\_size: sets the size of the write-ahead logging (WAL) files that trigger a checkpoint.
    
-   min\_wal\_size: sets the minimum size of WAL files to recycle. As long as WAL disk usage remains below this setting, old WAL files are always recycled for future use at a checkpoint, rather than deleted.
    
-   temp\_file\_limit: specifies the maximum disk space that a process can use for temporary files, such as sort and hash temporary files, or the storage file for a held cursor.
    
-   wal\_buffers: sets the size of disk-page buffers in shared memory for WAL, which is the amount of shared memory used for WAL data that is not written to a disk.
    
-   max\_parallel\_maintenance\_workers: sets the maximum number of parallel workers for a CREATE INDEX operation.
    
-   max\_worker\_processes: sets the maximum number of concurrent worker processes.
    

**Note**

The **max\_parallel\_maintenance\_workers** parameter is supported only for RDS PostgreSQL 11.0 and later.

effective\_cache\_size

Variables

-   AllocatedStorage: the storage capacity of the instance type in MB. The value of this variable is an integer.
    
-   DBInstanceClassMemory: the memory size of the instance type in bytes. The value of this variable is an integer.
    
-   DBInstanceClassCPU: the number of CPU cores of the instance type. The value of this variable is an integer.
    
-   DBInstanceClassConnections: the maximum number of connections of the instance type. The value of this variable is an integer.
    

**Note**

For more information about the instance types and the storage capacity, memory size, number of CPU cores, and maximum number of connections that are supported by each instance type, see [Primary RDS for PostgreSQL instance types](/help/en/rds/apsaradb-rds-for-postgresql/primary-apsaradb-rds-for-postgresql-instance-types#concept-2096578).

effective\_cache\_size={DBInstanceClassMemory/16384}

Operators

-   Expression syntax: An expression is enclosed in braces (`{}`).
    
-   Division operator (/): divides a dividend by a divisor and returns an integer quotient. If the quotient is a decimal, the system does not round the quotient but truncates the decimal part. The dividend and divisor can be decimals.
    
-   Multiplication operator (\*): multiplies two multipliers and returns an integer product. If the product is a decimal, the system does not round the product but truncates the decimal part. The two multipliers can be decimals.
    

Functions

-   The GREATEST() function returns the largest value in a list of integers or parameter formulas.
    
-   The LEAST() function returns the smallest value in a list of integers or parameter formulas.
    
-   The SUM() function adds the values of specified integers or parameter formulas.
    

max\_parallel\_workers={GREATEST(DBInstanceClassCPU\*3/4, 8)}

## References

-   For more information about PostgreSQL parameters, see [Server Configuration](https://www.postgresql.org/docs/10/static/runtime-config.html) in the PostgreSQL documentation.
    
-   To modify parameters by calling API operations, see the following APIs:
    
    **API**
    
    **Description**
    
    [ModifyParameter](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifyparameter-postgresql)
    
    Modifies the parameters of an RDS instance.
    
    [DescribeParameterTemplates](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeparametertemplates-postgresql)
    
    Queries the parameter template of a database.
    
    [DescribeParameters](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeparameters-postgresql)
    
    Queries the current parameter settings of an instance.
    

## **FAQ**

**How do I change the maximum number of connections for an RDS for PostgreSQL instance?**

The maximum number of connections for an RDS for PostgreSQL instance is determined by the instance type and **cannot be manually changed**. To increase it, upgrade to a larger instance type. The maximum connections can differ between primary and read-only instances. For more information, see [Primary instance types](/help/en/rds/apsaradb-rds-for-postgresql/primary-apsaradb-rds-for-postgresql-instance-types#8739f6bf1fy11) and [Read-only instance types](/help/en/rds/apsaradb-rds-for-postgresql/read-only-apsaradb-rds-for-postgresql-instance-types).
