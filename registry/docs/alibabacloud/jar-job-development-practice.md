This topic describes the steps for developing JAR jobs for the Lindorm compute engine.

## Prerequisites

-   A Lindorm instance is created and LindormTable is enabled for the instance. For more information, see [Create an instance](/help/en/lindorm/getting-started/create-an-instance#task-2045184).
    
-   The compute engine service is enabled for the Lindorm instance. For more information, see [Enable, upgrade, or downgrade the service](/help/en/lindorm/user-guide/activate-ldps-and-modify-the-configurations#task-2142804).
    
-   A Java environment is installed. JDK 1.8 or a later version is required.
    

## Step 1: Configure dependencies

Lindorm compute engine JAR jobs depend on the community edition of Spark 3.3.1. You must set the `scope` field to `provided`. The following code provides an example:

```
<!-- Example -->
<dependency>
  <groupId>org.apache.spark</groupId>
  <artifactId>spark-core_2.12</artifactId>
  <version>3.3.1</version>
  <scope>provided</scope>
</dependency>
```

## Step 2: Configure permissions

If you want to use Spark SQL to access data in LindormTable, you must configure a username and password. For more information about how to access the data, see [Access data in LindormTable](/help/en/lindorm/user-guide/access-data-in-lindormtable#concept-2143733). The following code provides an example:

```
SparkConf conf = new SparkConf();
conf.set("spark.sql.catalog.lindorm_table.username", "root");
conf.set("spark.sql.catalog.lindorm_table.password", "root");
```

**Parameter**

**Value**

**Description**

spark.sql.catalog.lindorm\_table.username

The default username is root.

The username that is used to access LindormTable.

spark.sql.catalog.lindorm\_table.password

The default password is root.

The password that is used to access LindormTable.

## Step 3: Configure parameters

For more information about the configuration items and methods that the Lindorm compute engine provides, see [Job configuration](/help/en/lindorm/user-guide/parameter-description#concept-2144045).

## Step 4: Code example

JAR job development is fully compatible with the community edition of Spark 3.3.1. For a code example, see [Spark job example](https://lindorm-compute.oss-cn-hangzhou.aliyuncs.com/downloads/lindorm-spark-examples-current.tar.gz).

## Step 5: Submit the job

The Lindorm compute engine lets you submit and manage jobs in the following two ways.

-   Submit jobs in the Lindorm console. For more information, see [Manage jobs in the console](/help/en/lindorm/user-guide/manage-jobs-in-the-apsaradb-for-lindorm-console#task-2143991).
    
-   Submit jobs using DMS. For more information, see [Manage jobs using DMS](/help/en/lindorm/user-guide/use-dms-to-schedule-lindorm-spark-jobs#task-2221126).
