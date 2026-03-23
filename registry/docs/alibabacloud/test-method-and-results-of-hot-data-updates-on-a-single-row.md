This topic describes how to test and analyze the performance of an ApsaraDB RDS for MySQL instance in updating hot data in a single row of a table.

## Test environment

In this test, an RDS instance that runs RDS High-availability Edition and uses the rds.mysql.st.v52 instance type and an RDS instance that runs RDS Enterprise Edition and uses the mysql.st.12xlarge.25 instance type are used.

-   Database engine and version: MySQL 5.7
    
-   Specifications: 90 CPU cores, 720 GB of memory (dedicated host instance family)
    
-   RDS editions: RDS High-availability Edition and RDS Enterprise Edition
    
-   Storage type: local disk
    
-   Template: high-performance parameter template
    

## Test data

The table that is used for the test contains 100 rows. The following code snippet describes the table schema:

```
CREATE TABLE `sbtest1`
(
`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT
,`k` INT(10) UNSIGNED NOT NULL DEFAULT '0'
,`c` CHAR(120) NOT NULL DEFAULT ''
,`pad` CHAR(60) NOT NULL DEFAULT ''
,PRIMARY KEY (`id`)
,KEY `k_1` (`k`)
)
ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT
CHARSET=utf8 MAX_ROWS=1000000
```

## Test script

Execute the following SQL statement to perform concurrent updates on the row whose ID is 100:

```
UPDATE sbtest1 SET k=k+1 WHERE id=100
```

The following Lua script is used for the test:

```
pathtest = string.match(test,"(.*/)")
if pathtest then
 dofile(pathtest .."common.lua")
else
 require("common")
end
function thread_init(thread_id)
 set_vars()
end
function event(thread_id)
 local table_name
 table_name ="sbtest".. sb_rand_uniform(1, oltp_tables_count)
 rs = db_query("begin")
 rs = db_query("update /*+commit_on_success rollback_on_fail target_affect_row(1) */ sbtest1 SET k=k+1 WHERE id=100")
 rs =db_query("commit")
end
```

## Test results

**Instance type**

**Maximum TPS on the single row**

RDS High-availability Edition

12,000

RDS Enterprise Edition

31,000

Figure 1. Test results for RDS Enterprise Edition![三节点企业版测试结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2192264361/p236744.png)
