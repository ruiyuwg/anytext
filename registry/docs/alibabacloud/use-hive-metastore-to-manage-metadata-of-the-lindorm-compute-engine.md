The Lindorm compute engine provides comprehensive Hive data warehouse capabilities. You can use Hive or Spark SQL to define data warehouse processing logic and develop jobs. This topic describes how to access Hive data using SQL.

## Prerequisites

The compute engine is enabled for your Lindorm instance. For more information, see [Enable the service](/help/en/lindorm/user-guide/activate-ldps-and-modify-the-configurations#task-2142804).

## Activation steps

1.  Log on to the [Lindorm console](https://lindorm.console.alibabacloud.com/cn-hangzhou/clusterhou/cluster).
    
2.  In the upper-left corner of the page, select the region where the instance is deployed.
    
3.  On the **Instances** page, click the ID of the target instance or click **View Instance Details** in the **Actions** column for the instance.
    
4.  In the navigation pane on the left, choose **Compute Engine** > **Service Management**.
    
5.  On the **Hive Metastore** tab, click **Activate Now**.
    
    ![开通Hive服务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7215334661/p459631.png)
    

## Examples

The following SQL examples show how to create a table and read and write data. For more information about the SQL syntax, see [SQL Reference](https://spark.apache.org/docs/latest/sql-ref.html).

```
USE spark_catalog;

CREATE TABLE test (id INT, name STRING, score DOUBLE);

INSERT INTO test VALUES (0, 'Jay', 90.8);

SELECT * FROM test;
```
