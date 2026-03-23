The DataStudio service of DataWorks allows you to create various types of nodes, such as data synchronization nodes, computing resource nodes, and general nodes, to meet your different data processing requirements. Computing resource nodes include ODPS SQL nodes, Hologres SQL nodes, and E-MapReduce (EMR) Hive nodes. General nodes include zero load nodes and Check nodes.

**Important**

If you cannot create a computing resource node, such as an ODPS SQL, a Hologres SQL, or an EMR Hive node, in DataStudio, you can click Computing Resource in the left-side navigation pane of the DataStudio page to check whether the corresponding computing resource is associated with DataStudio. If the corresponding computing resource is associated with DataStudio, but you still cannot create a node of the computing resource type, you can refresh the current page to update the cached data or attempt to use the browser in incognito mode.

## Data synchronization nodes

**Type**

**Description**

**Node code**

**Task type (specified by TaskType)**

[Batch synchronization node](/help/en/dataworks/user-guide/overview-of-the-batch-synchronization-feature)

This type of node is used to periodically synchronize offline data and to synchronize data between heterogeneous data sources in complex scenarios. For information about the data source types that support batch synchronization, see [Supported data source types and read and write operations](/help/en/dataworks/user-guide/supported-data-source-types-and-read-and-write-operations).

23

DI

[Real-time synchronization node](/help/en/dataworks/user-guide/overview-of-the-real-time-synchronization-feature)

This type of node is used to synchronize incremental data in real time. A real-time synchronization node uses three basic plug-ins to read, convert, and write data. These plug-ins interact with each other based on an intermediate data format that is defined by the plug-ins. For information about the data source types that support real-time synchronization, see [Supported data source types and read and write operations](/help/en/dataworks/user-guide/supported-data-source-types-and-read-and-write-operations).

900

RI

**Note**

In addition to the nodes that can be created on the DataStudio page, DataWorks also allows you to create different types of synchronization tasks in Data Integration. For example, you can create a synchronization task in Data Integration that synchronizes full data at a time and then incremental data in real time or a synchronization task that synchronizes all data in a database in offline mode. For more information, see [Overview of the full and incremental synchronization feature](/help/en/dataworks/user-guide/overview-of-the-solution-based-synchronization-feature#concept-2010752). In most cases, the node code of a task that is created in Data Integration is `24`.

## Compute engine nodes

In a specific workflow, you can create nodes of a specific compute engine type, use the nodes to develop data, issue the engine code to a corresponding data cleansing engine, and then run the code.

**Compute engine integrated with DataWorks**

**Encapsulated engine capability**

**Node code**

**Task type (specified by TaskType)**

**MaxCompute**

[Develop a MaxCompute SQL task](/help/en/dataworks/user-guide/create-an-odps-sql-node#task-2513475)

10

ODPS\_SQL

[Develop a MaxCompute Spark task](/help/en/dataworks/user-guide/create-an-odps-spark-node#task-2512261)

225

ODPS\_SPARK

[Develop a PyODPS 2 task](/help/en/dataworks/user-guide/create-a-pyodps-2-node#task-2502633)

221

PYODPS

[Develop a PyODPS 3 task](/help/en/dataworks/user-guide/create-a-pyodps-3-node#task-2503258)

1221

PYODPS3

[Develop a MaxCompute script task](/help/en/dataworks/user-guide/create-an-odps-script-node#task-1930738)

24

ODPS\_SCRIPT

[Develop a MaxCompute MR task](/help/en/dataworks/user-guide/create-an-odps-mr-node#task-1930751)

11

ODPS\_MR

[Reference a script template](/help/en/dataworks/create-an-sql-snippet-node-and-reference-a-script-template#task-2519867)

1010

COMPONENT\_SQL

**E-MapReduce**

[Create an EMR Hive node](/help/en/dataworks/user-guide/create-an-emr-hive-node#task-1920165)

227

EMR\_HIVE

[Create an EMR MR node](/help/en/dataworks/user-guide/create-an-emr-mr-node#task-1920168)

230

EMR\_MR

[Create an EMR Spark SQL node](/help/en/dataworks/user-guide/create-an-emr-spark-sql-node#task-1920169)

229

EMR\_SPARK\_SQL

[Create an EMR Spark node](/help/en/dataworks/user-guide/create-an-emr-spark-node#task-2079055)

228

EMR\_SPARK

[Create an EMR Shell node](/help/en/dataworks/user-guide/create-an-emr-shell-node#task-2078155)

257

EMR\_SHELL

[Create an EMR Presto node](/help/en/dataworks/user-guide/create-an-emr-presto-node#task-2513364)

259

EMR\_PRESTO

[Create an EMR Spark Streaming node](/help/en/dataworks/user-guide/create-an-emr-spark-streaming-node#task-2086510)

264

SPARK\_STREAMING

[Create an EMR Kyuubi node](/help/en/dataworks/user-guide/create-an-emr-kyuubi-node)

268

EMR\_KYUUBI

[Create an EMR Trino node](/help/en/dataworks/user-guide/create-an-emr-trino-node)

267

EMR\_TRINO

**CDH**

[Create a CDH Hive node](/help/en/dataworks/user-guide/create-a-cdh-hive-node)

270

CDH\_HIVE

[Create a CDH Spark node](/help/en/dataworks/user-guide/create-a-cdh-spark-node)

271

CDH\_SPARK

[Create a CDH MR node](/help/en/dataworks/user-guide/create-a-cdh-mr-node)

273

CDH\_MR

[Create a CDH Presto node](/help/en/dataworks/user-guide/create-a-cdh-presto-node#undefined)

278

CDH\_PRESTO

[Create a CDH Impala node](/help/en/dataworks/user-guide/create-a-cdh-impala-node)

279

CDH\_IMPALA

[Create a CDH Spark SQL node](/help/en/dataworks/user-guide/create-a-cdh-spark-sql-node)

272

CDH\_SPARK\_SQL

**AnalyticDB for PostgreSQL**

[Create and use AnalyticDB for PostgreSQL nodes](/help/en/dataworks/user-guide/create-an-adb-for-postgresql-node#task-2461740)

\-

\-

**AnalyticDB for MySQL**

[Create an AnalyticDB for MySQL node](/help/en/dataworks/user-guide/create-and-use-an-analyticdb-for-mysql-node#task-2038819)

1000126

\-

**Hologres**

[Create a Hologres SQL node](/help/en/dataworks/user-guide/create-a-hologres-sql-node#task-1955157)

1093

HOLOGRES\_SQL

[Create a node to synchronize schemas of MaxCompute tables](/help/en/dataworks/user-guide/create-a-node-to-synchronize-schemas-of-maxcompute-tables-with-a-few-clicks#task-2238857)

1094

HOLOGRES\_SYNC\_DDL

[Create a node to synchronize MaxCompute data with a few clicks](/help/en/dataworks/user-guide/create-a-node-to-synchronize-maxcompute-data-with-a-few-clicks#task-2239501)

1095

HOLOGRES\_SYNC\_DATA

**ClickHouse**

[Configure a ClickHouse SQL node](/help/en/dataworks/user-guide/create-and-use-a-clickhouse-sql-node#task-2080289)

1301

CLICK\_SQL

**StarRocks**

[Configure a StarRocks node](/help/en/dataworks/user-guide/starrocks-node)

\-

\-

**PAI**

[Use DataWorks tasks to schedule pipelines in Machine Learning Designer](/help/en/pai/user-guide/use-dataworks-tasks-to-schedule-pipelines-in-machine-learning-designer#task-2218893)

1117

PAI\_STUDIO

[Create and use a PAI DLC node](/help/en/dataworks/user-guide/create-pai-dlc-node)

1119

PAI\_DLC

**Database**

[Create and use a MySQL node](/help/en/dataworks/user-guide/create-and-use-a-mysql-node#task-2037333)

1000125

\-

[Configure an SQL Server node](/help/en/dataworks/user-guide/sql-server-node)

10001

\-

[Configure an Oracle node](/help/en/dataworks/user-guide/oracle-node)

10002

\-

[Configure a PostgreSQL node](/help/en/dataworks/user-guide/postgresql-node)

10003

\-

[Configure a DRDS node](/help/en/dataworks/user-guide/drds-node)

10005

\-

[Configure a PolarDB for MySQL node](/help/en/dataworks/user-guide/polardb-mysql-node)

10006

\-

[Configure a PolarDB for PostgreSQL node](/help/en/dataworks/user-guide/polardb-postgresql-node)

10007

\-

[Configure a Doris node](/help/en/dataworks/user-guide/doris-node)

10008

\-

[Configure a MariaDB node](/help/en/dataworks/user-guide/mariadb-node)

10009

\-

[Configure a Redshift node](/help/en/dataworks/user-guide/redshift-node)

10011

\-

[Configure a SAP HANA node](/help/en/dataworks/user-guide/sap-hana-node)

10012

\-

[Configure a Vertica node](/help/en/dataworks/user-guide/vertica-node)

10013

\-

[Configure a DM node](/help/en/dataworks/user-guide/dm-dream-node)

10014

\-

[Configure a KingbaseES node](/help/en/dataworks/user-guide/kingbasees-node)

10015

\-

[Configure an OceanBase node](/help/en/dataworks/user-guide/oceanbase-node)

10016

\-

[Configure a Db2 node](/help/en/dataworks/user-guide/db2-node)

10017

\-

[Configure a GBase 8a node](/help/en/dataworks/user-guide/gbase-8a-node)

10018

\-

**Others**

[Create and use a Data Lake Analytics node](/help/en/dataworks/user-guide/data-lake-analytics-node#task-1919395)

1000023

\-

## General nodes

In a specific workflow, you can create a general node and use the node together with compute engine nodes to process complex logic.

**Scenario**

**Node type**

**Description**

**Node code**

**Task type (specified by TaskType)**

**Business management**

[Zero load node](/help/en/dataworks/user-guide/create-and-use-a-zero-load-node#task-2523497)

A zero load node is a control node that supports dry-run scheduling and does not generate data. In most cases, a zero load node serves as the root node of a workflow and allows you to easily manage nodes and workflows.

99

VIRTUAL

**Event-based trigger**

[HTTP Trigger node](/help/en/dataworks/user-guide/create-an-http-trigger-node#task-1999740)

You can use this type of node if you want to trigger nodes in DataWorks to run after nodes in other scheduling systems finish running.

**Note**

DataWorks no longer allows you to create **cross-tenant collaboration nodes**. If you have used a cross-tenant collaboration node in your business, we recommend that you replace the cross-tenant collaboration node with an HTTP Trigger node. An HTTP Trigger node provides the same capabilities as a cross-tenant collaboration node.

1114

SCHEDULER\_TRIGGER

[OSS object inspection node](/help/en/dataworks/oss-object-inspection-node#concept-189375)

You can use this type of node if you want to trigger a descendant node to run after Object Storage Service (OSS) objects are generated.

239

OSS\_INSPECT

[FTP Check node](/help/en/dataworks/user-guide/create-an-ftp-check-node#task-1999740)

You can use this type of node if you want to trigger a descendant node to run after File Transfer Protocol (FTP) files are generated.

**Note**

FTP Check nodes are no longer supported in DataWorks. We recommend that you replace FTP Check nodes with [Check nodes](/help/en/dataworks/user-guide/check-node) to perform checks in DataWorks.

1320

FTP\_CHECK

[Check node](/help/en/dataworks/user-guide/check-node)

You can use this type of node to check the availability of objects based on check policies. If the condition that is specified in the check policy for a Check node is met, the task on the Check node is successfully run. If the running of a task depends on an object, you can use a Check node to check the availability of the object and configure the task as the descendant task of the Check node. If the condition that is specified in the check policy for the Check node is met, the task on the Check node is successfully run and then its descendant task is triggered to run. Supported objects:

-   MaxCompute partitioned table
    
-   FTP file
    
-   OSS object
    
-   HDFS
    
-   OSS-HDFS
    

241

CHECK\_NODE

**Data Quality**

[Data comparison node](/help/en/dataworks/user-guide/data-comparison-new-node)

You can use this type of node to compare data between different tables in multiple ways in a workflow.

1331

DATA\_SYNCHRONIZATION\_QUALITY\_CHECK

**Parameter value assignment and parameter passing**

[Assignment node](/help/en/dataworks/user-guide/configure-an-assignment-node#task-2485378)

You can use this type of node if you want to use the outputs parameter of an assignment node to pass the data from the output of the last row of the code for the assignment node to its descendant nodes.

1100

CONTROLLER\_ASSIGNMENT

[Parameter node](/help/en/dataworks/user-guide/create-a-parameter-node#task-2038733)

You can use this type of node to aggregate parameters of its ancestor nodes and distribute parameters to its descendant nodes.

1115

PARAM\_HUB

**Control**

[For-each node](/help/en/dataworks/user-guide/configure-a-for-each-node#task-2520874)

You can use this type of node to traverse the result set of an assignment node.

1106

CONTROLLER\_TRAVERSE

[Do-while node](/help/en/dataworks/user-guide/configure-a-do-while-node-1#task-2523522)

You can use this type of node to execute the logic of specific nodes in loops. You can also use this type of node together with an assignment node to generate the data that is passed to a descendant node of the assignment node in loops.

1103

CONTROLLER\_CYCLE

[Branch node](/help/en/dataworks/user-guide/configure-a-branch-node#task-2509802)

You can use this type of node to route results based on logical conditions. You can also use this type of node together with an assignment node.

1101

CONTROLLER\_BRANCH

[Merge node](/help/en/dataworks/user-guide/configure-a-merge-node#task-1995195)

You can use this type of node to merge the status of its ancestor nodes and prevent dry run of its descendant nodes.

1102

CONTROLLER\_JOIN

**Others**

[Shell node](/help/en/dataworks/user-guide/create-a-shell-node#task-2495337)

Shell nodes support the standard Shell syntax. The interactive syntax is not supported.

6

DIDE\_SHELL

[Function Compute node](/help/en/dataworks/user-guide/function-compute-node#task-2354734)

You can use this type of node to periodically schedule and process event functions and complete integration and joint scheduling with other types of nodes.

1330

FUNCTION\_COMPUTE

[Data push node](/help/en/dataworks/user-guide/data-push-node)

You can use this type of node to obtain the data query results generated by other nodes and push the obtained data to DingTalk groups, Lark groups, WeCom groups, or Microsoft Teams. This way, members in the groups or teams can receive the latest data at the earliest opportunity.

1332

DATA\_PUSH
