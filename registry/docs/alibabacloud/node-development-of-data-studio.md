DataWorks DataStudio provides a variety of nodes to meet different data processing needs. You can use data integration nodes for synchronization, engine compute nodes such as MaxCompute SQL, Hologres SQL, and EMR Hive for data cleaning, and general-purpose nodes such as zero load nodes and do-while loop nodes for complex logic processing. These nodes work together to effectively handle various data processing challenges.

## **Supported node types**

The following table lists the node types supported by recurring schedules. The node types supported by one-time tasks or manually triggered workflows may differ. For the most accurate information, refer to the UI.

**Note**

Node availability varies by DataWorks edition and region. For the most accurate information, refer to the UI.

**Node type**

**Node name**

**Description**

**Node code**

**TaskType**

**Data Integration**

[Batch synchronization](/help/en/dataworks/user-guide/offline-synchronization-node-new-data-studio)

Used for recurring batch data synchronization. It supports data synchronization between various disparate data sources in complex scenarios.

For more information about the data sources supported by batch synchronization, see [Supported data sources and synchronization solutions](/help/en/dataworks/user-guide/supported-data-source-types-and-read-and-write-operations).

23

DI

[Real-time synchronization](/help/en/dataworks/user-guide/real-time-synchronization-node)

The real-time data synchronization feature in DataWorks lets you sync data changes from a source database to a destination database in real time. This ensures data consistency. You can sync a single table or an entire database.

For more information about the data sources supported by real-time synchronization, see [Supported data sources and synchronization solutions](/help/en/dataworks/user-guide/supported-data-source-types-and-read-and-write-operations).

900

RI

**Notebook**

[Notebook development](/help/en/dataworks/user-guide/basic-notebook-development)

Notebook offers a flexible and interactive platform for data processing and analysis. It makes data processing, exploration, visualization, and model building more efficient by improving intuitiveness, modularity, and interaction.

1323

NOTEBOOK

**MaxCompute**

[MaxCompute SQL](/help/en/dataworks/user-guide/maxcompute-sql-node)

Supports recurring scheduling of MaxCompute SQL tasks. MaxCompute SQL tasks use an SQL-like syntax and are suitable for distributed processing of massive datasets (terabyte-scale) where real-time performance is not critical.

10

ODPS\_SQL

[SQL script template](/help/en/dataworks/user-guide/sql-component-node/)

An SQL script template is an SQL code template with multiple input and output parameters. It processes data and generates a sink table by filtering, joining, and aggregating data from source tables. During data development, you can create SQL script template nodes and use these predefined components to quickly build data processing flows. This significantly improves development efficiency.

1010

COMPONENT\_SQL

[MaxCompute Script](/help/en/dataworks/user-guide/maxcompute-script-node)

Combines multiple SQL statements into a single script for compilation and execution. This is ideal for complex query scenarios, such as nested subqueries or multi-step operations. By submitting the entire script at once, a unified execution plan is generated. The job only needs to be queued and executed once, leading to more efficient resource use.

24

ODPS\_SQL\_SCRIPT

[PyODPS 2](/help/en/dataworks/user-guide/pyodps-2-node)

Integrates the Python SDK for MaxCompute. This lets you write and edit Python code directly in a PyODPS 2 node to perform data processing and analysis tasks in MaxCompute.

221

PY\_ODPS

[PyODPS 3](/help/en/dataworks/user-guide/pyodps-3-node)

Use a PyODPS 3 node to write MaxCompute jobs directly in Python and configure them for recurring scheduling.

1221

PYODPS3

[MaxCompute Spark](/help/en/dataworks/user-guide/maxcompute-spark-node)

DataWorks supports running offline Spark jobs (in Cluster mode) based on MaxCompute.

225

ODPS\_SPARK

[MaxCompute MR](/help/en/dataworks/user-guide/maxcompute-mr-node)

Create a MaxCompute MR node and submit it for scheduling to write MapReduce programs using the MapReduce Java API. This lets you process large datasets in MaxCompute.

11

ODPS\_MR

[Map metadata to Hologres](/help/en/dataworks/user-guide/metadata-mapping-to-hologres)

When you need to accelerate queries on MaxCompute data in Hologres, you can use the MaxCompute metadata mapping feature of the data catalog. This maps MaxCompute table metadata to Hologres, allowing you to use Hologres foreign tables to accelerate queries on MaxCompute data.

\-

\-

[Sync data to Hologres](/help/en/dataworks/user-guide/data-synchronization-to-hologres)

Supports syncing data from a single MaxCompute table to Hologres. This facilitates efficient big data analysis and real-time queries.

\-

\-

**Hologres**

[Hologres SQL](/help/en/dataworks/user-guide/hologres-sql-node)

A Hologres SQL node supports queries on data in Hologres instances. Hologres and MaxCompute are seamlessly connected at the underlying layer. This lets you use a Hologres SQL node to directly query and analyze large-scale data in MaxCompute using standard PostgreSQL statements without data migration. This provides rapid query results.

1093

HOLOGRES\_SQL

[Sync data to MaxCompute](/help/en/dataworks/user-guide/data-synchronization-to-maxcompute)

Supports migrating data from a single Hologres table to MaxCompute.

1070

HOLOGRES\_SYNC\_DATA\_TO\_MC

[MaxCompute table schema synchronization](/help/en/dataworks/user-guide/one-click-maxcompute-table-structure-synchronization-node)

Provides a one-click feature to import table schemas. This lets you quickly create Hologres foreign tables in batches that have the same schema as MaxCompute tables.

1094

HOLOGRES\_SYNC\_DDL

[MaxCompute data synchronization](/help/en/dataworks/user-guide/one-click-maxcompute-data-synchronization-node)

Provides a one-click data synchronization feature. This lets you quickly sync data from MaxCompute to a Hologres database.

1095

HOLOGRES\_SYNC\_DATA

**Serverless Spark**

[Serverless Spark Batch](/help/en/dataworks/user-guide/serverless-spark-batch)

A Spark node based on Serverless Spark, suitable for large-scale data processing.

2100

SERVERLESS\_SPARK\_BATCH

[Serverless Spark SQL](/help/en/dataworks/user-guide/serverless-spark-sql-node)

An SQL query node based on Serverless Spark. It supports standard SQL syntax and provides high-performance data analysis capabilities.

2101

SERVERLESS\_SPARK\_SQL

[Serverless Kyuubi](/help/en/dataworks/user-guide/serverless-kyuubi)

Connects to Serverless Spark through the Kyuubi JDBC/ODBC interface to provide a multitenant Spark SQL service.

2103

SERVERLESS\_KYUUBI

**Severless StarRocks**

[Serverless StarRocks SQL](/help/en/dataworks/user-guide/serverless-starrocks-sql-node)

An SQL node based on EMR Serverless StarRocks. It is compatible with the SQL syntax of open source StarRocks and provides extremely fast online analytical processing (OLAP) query analysis and Lakehouse query analysis.

2104

SERVERLESS\_STARROCKS

**LLM**

[Large language model](/help/en/dataworks/user-guide/large-model-node)

Features a built-in engine for data processing, analysis, and mining. It intelligently performs data cleaning and mining based on your natural language instructions.

2200

LLM\_NODE

**Flink**

[Flink SQL Streaming](/help/en/dataworks/user-guide/flink-sql-streaming)

Supports using standard SQL statements to define real-time task processing logic. It is easy to use, supports rich SQL, and has powerful state management and fault tolerance. It is compatible with event time and processing time and can be flexibly extended. The node is easy to integrate with systems such as Kafka and HDFS and provides detailed logs and performance monitoring tools.

2012

FLINK\_SQL\_STREAM

[Flink SQL Batch](/help/en/dataworks/user-guide/flink-sql-batch)

Lets you use standard SQL statements to define and execute data processing tasks. It is suitable for analyzing and transforming large datasets, including data cleaning and aggregation. The node supports visual configuration and provides an efficient and flexible solution for large-scale batch processing.

2011

FLINK\_SQL\_BATCH

**EMR**

[EMR Hive](/help/en/dataworks/user-guide/emr-hive-new-data-studio)

Use SQL-like statements to read, write, and manage large datasets. This allows for efficient analysis and development of massive log data.

227

EMR\_HIVE

[EMR Impala](/help/en/dataworks/user-guide/emr-impala-node-new-data-studio)

An interactive SQL query engine for fast, real-time queries on petabyte-scale big data.

260

EMR\_IMPALA

[EMR MR](/help/en/dataworks/user-guide/emr-mr-node-new-data-studio)

Breaks down large datasets into multiple parallel Map tasks, which significantly improves data processing efficiency.

230

EMR\_MR

[EMR Presto](/help/en/dataworks/user-guide/emr-presto-node-new-data-studio)

A flexible and scalable distributed SQL query engine that supports interactive analysis of big data using the standard SQL query language.

259

EMR\_PRESTO

[EMR Shell](/help/en/dataworks/user-guide/emr-shell-node-new-data-studio)

Lets you edit custom Shell scripts to use advanced features such as data processing, calling Hadoop components, and file operations.

257

EMR\_SHELL

[EMR Spark](/help/en/dataworks/user-guide/emr-spark-node-new-data-studio)

A general-purpose big data analysis engine known for its high performance, ease of use, and wide applicability. It supports complex in-memory computing and is ideal for building large-scale, low-latency data analysis applications.

228

EMR\_SPARK

[EMR Spark SQL](/help/en/dataworks/user-guide/emr-spark-sql-node-new-data-studio)

Implements a distributed SQL query engine to process structured data and improve job execution efficiency.

229

EMR\_SPARK\_SQL

[EMR Spark Streaming](/help/en/dataworks/user-guide/emr-spark-streaming-node-new-data-studio)

Used to process high-throughput real-time streaming data. It has a fault tolerance mechanism that can quickly recover failed data streams.

264

EMR\_SPARK\_STREAMING

[EMR Trino](/help/en/dataworks/user-guide/emr-trino-node-new-data-studio)

A distributed SQL query engine suitable for interactive analysis across multiple data sources.

267

EMR\_TRINO

[EMR Kyuubi](/help/en/dataworks/user-guide/emr-kyuubi-node-new-data-studio)

A distributed and multitenant gateway that provides SQL and other query services for data lake query engines such as Spark, Flink, or Trino.

268

EMR\_KYUUBI

**ADB**

[ADB for PostgreSQL](/help/en/dataworks/user-guide/adb-for-postgresql)

Develop and schedule recurring AnalyticDB for PostgreSQL tasks.

1000090

\-

[ADB for MySQL](/help/en/dataworks/user-guide/adb-for-mysql)

Develop and schedule recurring AnalyticDB for MySQL tasks.

1000126

\-

[ADB Spark](/help/en/dataworks/user-guide/adb-spark-node)

Develop and schedule recurring AnalyticDB Spark tasks.

1990

ADB\_SPARK

[ADB Spark SQL](/help/en/dataworks/user-guide/adb-spark-sql-node)

Develop and schedule recurring AnalyticDB Spark SQL tasks.

1991

ADB\_SPARK\_SQL

**CDH**

[CDH Hive](/help/en/dataworks/user-guide/cdh-hive-node-new-data-studio)

Use this node if you have deployed a CDH cluster and want to use DataWorks to execute Hive tasks.

270

CDH\_HIVE

[CDH Spark](/help/en/dataworks/user-guide/cdh-spark-node-new-data-studio)

A general-purpose big data analysis engine with high performance, ease of use, and wide applicability. Use it for complex in-memory analysis and to build large-scale, low-latency data analysis applications.

271

CDH\_SPARK

[CDH Spark SQL](/help/en/dataworks/user-guide/cdh-spark-sql-node-new-data-studio)

Implements a distributed SQL query engine to process structured data and improve job execution efficiency.

272

CDH\_SPARK\_SQL

[CDH MR](/help/en/dataworks/user-guide/cdh-mr-node-new-data-studio)

Processes ultra-large datasets.

273

CDH\_MR

[CDH Presto](/help/en/dataworks/user-guide/cdh-presto-node-new-data-studio)

This node provides a distributed SQL query engine, which enhances the data analysis capabilities of the CDH environment.

278

CDH\_PRESTO

[CDH Impala](/help/en/dataworks/user-guide/cdh-impala-new-data-studio)

The CDH Impala node lets you write and execute Impala SQL scripts, which provides faster query performance.

279

CDH\_IMPALA

**Lindorm**

[Lindorm Spark](/help/en/dataworks/user-guide/lindorm-spark-node)

Develop and schedule recurring Lindorm Spark tasks.

1800

LINDORM\_SPARK

[Lindorm Spark SQL](/help/en/dataworks/user-guide/lindorm-spark-sql-node)

Develop and schedule recurring Lindorm Spark SQL tasks.

1801

LINDORM\_SPARK\_SQL

**ClickHouse**

[ClickHouse SQL](/help/en/dataworks/user-guide/clickhouse-sql)

Performs distributed SQL queries and processes structured data to improve job execution efficiency.

1301

CLICK\_SQL

**Data Quality**

[Data quality monitoring](/help/en/dataworks/user-guide/quality-monitoring)

Configure data quality monitoring rules to monitor the data quality of tables in a data source, for example, to check for dirty data. You can also customize scheduling policies to periodically run monitoring jobs for data validation.

1333

DATA\_QUALITY\_MONITOR

[Data comparison](/help/en/dataworks/user-guide/data-comparison)

The comparison node lets you compare data from different tables in various ways.

1331

DATA\_SYNCHRONIZATION\_QUALITY\_CHECK

**General**

[Virtual node](/help/en/dataworks/user-guide/virtual-node)

A zero load node is a control node. It is a dry-run node that does not generate data. It is typically used as the root node of a workflow to help you manage nodes and workflows.

99

VIRTUAL

[Assignment node](/help/en/dataworks/user-guide/assignment-node)

Used for parameter passing. The node's output passes the result of the last query or output to downstream nodes through the node context. This enables parameter passing across nodes.

1100

CONTROLLER\_ASSIGNMENT

[Shell node](/help/en/dataworks/user-guide/shell-node)

The Shell node supports standard Shell syntax but does not support interactive syntax.

6

DIDE\_SHELL

[Parameter node](/help/en/dataworks/user-guide/parameter-node)

Aggregates parameters from ancestor nodes and passes them to descendant nodes.

1115

PARAM\_HUB

[OSS object check node](/help/en/dataworks/user-guide/oss-object-check-node)

Triggers the execution of descendant nodes by monitoring an OSS object.

239

OSS\_INSPECT

[Python node](/help/en/dataworks/user-guide/python-for-new-diea)

Supports Python 3. It lets you retrieve upstream parameters and configure custom parameters through the scheduling parameters in the scheduling configuration. It also lets you pass its own output as parameters to downstream nodes.

1322

Python

[Merge node](/help/en/dataworks/user-guide/merge-node)

Merges the running statuses of ancestor nodes to resolve dependency attachment and execution trigger issues for descendant nodes of a branch node.

1102

CONTROLLER\_JOIN

[Branch node](/help/en/dataworks/user-guide/branch-node)

Evaluates the result of an ancestor node to determine which branch logic to follow. You can use it together with an assignment node.

1101

CONTROLLER\_BRANCH

[For-each node](/help/en/dataworks/user-guide/for-each-node)

Traverses the result set passed by an assignment node.

1106

CONTROLLER\_TRAVERSE

[do-while node](/help/en/dataworks/user-guide/do-while-node)

Loops through a part of the node logic. You can also use it with an assignment node to loop through the results passed by the assignment node.

1103

CONTROLLER\_CYCLE

[Check node](/help/en/dataworks/user-guide/check-node-of-new-ide)

Checks whether a target object (MaxCompute partitioned table, FTP file, or OSS file) is active. When the Check node meets the check policy, it returns a successful running status. If there are downstream dependencies, it runs successfully and triggers the downstream tasks. Supported target objects:

-   MaxCompute partitioned table
    
-   FTP file
    
-   OSS file
    
-   HDFS
    
-   OSS-HDFS
    

241

CHECK\_NODE

[Function Compute](/help/en/dataworks/user-guide/function-compute-node-of-new-ide)

Used for recurring scheduling of event processing functions.

1330

FUNCTION\_COMPUTE

[HTTP trigger](/help/en/dataworks/user-guide/http-trigger-node)

Use this node if you want to trigger a task in DataWorks after a task in another CDN mapping system is complete.

**Note**

DataWorks no longer supports creating **cross-tenant collaboration nodes**. If you are using a cross-tenant collaboration node, replace it with an HTTP trigger node, which provides the same capabilities.

1114

SCHEDULER\_TRIGGER

[SSH](/help/en/dataworks/user-guide/ssh-node-of-new-ide)

Lets you specify an SSH data source to remotely access the host connected to that data source from DataWorks and trigger a script to run on the remote host.

1321

SSH

[Data Push](/help/en/dataworks/user-guide/data-push-node-of-new-ide)

A Data Push node can push the query results generated by other nodes in a DataStudio workflow to DingTalk groups, Lark groups, WeCom groups, Teams, and mailboxes by creating a data push destination.

1332

DATA\_PUSH

[Database nodes](/help/en/dataworks/user-guide/new-studio-database-node)

MySQL node

The MySQL node lets you develop and schedule recurring MySQL tasks.

1000125

\-

SQL Server

The SQL Server node lets you develop and schedule recurring SQL Server tasks.

10001

\-

Oracle node

The Oracle node lets you develop and schedule recurring Oracle tasks.

10002

\-

PostgreSQL node

The PostgreSQL node lets you develop and schedule recurring PostgreSQL tasks.

10003

\-

StarRocks node

Develop and schedule recurring StarRocks tasks.

10004

\-

DRDS node

Develop and schedule recurring DRDS tasks.

10005

\-

PolarDB MySQL node

Develop and schedule recurring PolarDB for MySQL tasks.

10006

\-

PolarDB PostgreSQL node

The PolarDB PostgreSQL node lets you develop and schedule recurring PolarDB for PostgreSQL tasks.

10007

\-

Doris node

The Doris node lets you develop and schedule recurring Doris tasks.

10008

\-

MariaDB node

The MariaDB node lets you develop and schedule recurring MariaDB tasks.

10009

\-

SelectDB node

The SelectDB node lets you develop and schedule recurring SelectDB tasks.

10010

\-

Redshift node

The Redshift node lets you develop and schedule recurring Redshift tasks.

10011

\-

Saphana node

The Saphana node lets you develop and schedule recurring SAP HANA tasks.

10012

\-

Vertica node

The Vertica node lets you develop and schedule recurring Vertica tasks.

10013

\-

DM (Dameng) node

The DM node lets you develop and schedule recurring DM tasks.

10014

\-

KingbaseES node

The KingbaseES node lets you develop and schedule recurring KingbaseES tasks.

10015

\-

OceanBase node

The OceanBase node lets you develop and schedule recurring OceanBase tasks.

10016

\-

DB2 node

The DB2 node lets you develop and schedule recurring DB2 tasks.

10017

\-

GBase 8a node

The GBase 8a node lets you develop and schedule recurring GBase 8a tasks.

10018

\-

**Algorithm**

[PAI Designer](/help/en/dataworks/user-guide/pai-designer-node)

PAI Designer is a visual modeling tool for building end-to-end machine learning development workflows.

1117

PAI\_STUDIO

[PAI DLC](/help/en/dataworks/user-guide/pai-dlc-node)

PAI DLC is a container-based training service used to run distributed training tasks.

1119

PAI\_DLC

[PAI Flow](/help/en/dataworks/user-guide/pai-flow-node)

Generates a PAIFlow node in DataWorks for a PAI knowledge base index workflow.

1250

PAI\_FLOW

**Logic node**

[SUB\_PROCESS node](/help/en/dataworks/user-guide/sub-process-node)

The SUB\_PROCESS node integrates multiple workflows into a unified whole for management and scheduling.

1122

SUB\_PROCESS

## **Create a node**

### **Create a node for a scheduled workflow**

If your task needs to run automatically at a specified time, such as hourly, daily, or weekly, you can create an auto triggered task node. You can create a new auto triggered task node, add an inner node to a recurring workflow, or clone an existing node.

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the navigation pane on the left, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5969899371/p859647.png) to go to the Data Studio page.
    

#### **Create a scheduled task node**

1.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3390150471/p859711.png) to the right of the workspace directories and select **Create Node**. Select a [node type](#12476535d1cri).
    
    **Important**
    
    The system provides a list of Common Nodes and **All Nodes**. You can select **All Nodes** at the bottom to view the complete list. You can also use the **search box** to quickly find a node or filter by **category**, such as MaxCompute, Data Integration, or General, to locate and create the node you need.
    
    > You can create folders in advance to organize and manage your nodes.
    
2.  Set the node name, save it, and go to the node editor page.
    

#### **Create an inner node in a scheduled workflow**

1.  Create a [recurring workflow](/help/en/dataworks/user-guide/workflow).
    
2.  On the workflow canvas, click **Create Node** in the toolbar. Select a [node type](#12476535d1cri) for your task and drag it onto the canvas.
    
3.  Set the node name and save it.
    

#### **Create a node by cloning**

You can use the clone feature to quickly create a new node from an existing one. The cloned content includes the node's Scheduling information, including **Scheduling Parameters**, **Scheduling Time**, and **Scheduling Dependencies**.

1.  In the **Workspace Directories** in the navigation pane on the left, right-click the node to clone and select **Clone** from the pop-up menu.
    
2.  In the dialog box that appears, you can change the node **Name** and **Path**, or keep the default values. Then, click **OK** to start cloning.
    
3.  After the cloning is complete, you can view the new node in the **Workspace Directories**.
    

### **Create a node for a manually triggered workflow**

If your task does not require a recurring schedule but needs to be published to the production environment for manual execution, you can create an inner node in a manually triggered workflow.

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the navigation pane on the left, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2628787371/p852358.png) to go to the Manually Triggered Workflow page.
    
    1.  Create a [manually triggered workflow](/help/en/dataworks/user-guide/manual-workflow/).
        
    2.  In the toolbar at the top of the manually triggered workflow editor page, click **Create Internal Node**. Select a [node type](#12476535d1cri) for your task.
        
    3.  Set the node name and save it.
        

### **Create a one-time task node**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the navigation pane on the left, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2628787371/p852358.png) to go to the One-time Task page.
    
3.  In the Manually Triggered Tasks section, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025860471/p920489.png) to the right of **Manually Triggered Tasks**, select **Create Node**, and then select the required node type.
    
    **Note**
    
    One-time tasks only support creating **Batch Synchronization**, **Notebook**, **MaxCompute SQL**, **MaxCompute Script**, **PyODPS 2**, **MaxCompute MR**, **Hologres SQL**, **Python**, and **Shell** nodes.
    
4.  Set the node name, save it, and go to the node editor page.
    

## **Batch edit nodes**

When a workflow contains many nodes, opening and editing them individually is inefficient. DataWorks provides the **Inner Node List** feature, which lets you quickly preview, search, and batch edit all nodes in a list on the right side of the canvas.

#### How to use

1.  In the toolbar at the top of the workflow canvas, click the **Show Internal Node List** button to open the panel on the right.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6479081671/p1021083.png)
    
2.  After the panel opens, it displays all nodes in the current workflow as a list.
    
    -   **Code preview and sorting**:
        
        -   For nodes that support code editing, such as MaxCompute SQL, the code editor is expanded by default.
            
        -   For nodes that do not support code editing, such as zero load nodes, a card is displayed. These nodes are automatically placed at the bottom of the list.
            
    -   **Quick search and location**:
        
        -   **Search**: In the search box at the top, you can enter a keyword to perform a fuzzy search for a **node name**.
            
        -   **Synchronized focus**: The canvas and sidebar are synchronized. When you select a node on the canvas, the corresponding node is highlighted in the sidebar. Similarly, when you click a node in the sidebar, the canvas automatically focuses on that node.
            
    -   **Online editing**:
        
        -   **Operations**: The upper-right corner of each node card provides shortcuts such as **Load Latest Code**, **Open Node**, and **Edit**.
            
        -   **Auto-save**: After you enter edit mode, your changes are automatically saved when the mouse focus leaves the code block area.
            
        -   **Conflict detection**: If another user updates the code while you are editing it, a failure notification appears when you save. This prevents your changes from being accidentally overwritten.
            
    -   **Focus mode**:
        
        -   Select a node and click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6479081671/p1021091.png) in the upper-right corner of the floating window to enable **Focus Mode**. The sidebar then shows only the selected node, providing more space for code editing.
            

## **Version management**

You can use the version management feature to restore a node to a specific historical version. This feature also provides tools for viewing and comparing versions, which helps you analyze differences and make adjustments.

1.  In the **Workspace Directories** in the navigation pane on the left, double-click the target node name to go to the node editor page.
    
2.  On the right side of the node editor page, click **Version**. On the **Version** page, you can view and manage **Development History** and **Deployment History**.
    
    -   **View** a **version**:
        
        1.  On the **Development History** or **Deployment History** tab, find the node version you want to view.
            
        2.  Click **View** in the **Actions** column to open the details page. On this page, you can view the **node code** and **Scheduling** information.
            
            **Note**
            
            You can view the **Scheduling** information in **Code Editor** or **visualization** mode. You can switch the view mode in the upper-right corner of the **Scheduling** tab.
            
    -   **Compare** **versions**:
        
        You can compare different versions of a node on the **Development History** or **Deployment History** tab.
        
        -   **Compare versions in the development or deployment environment**: On the **Development History** tab, select two versions and click **Select Versions to Compare** at the top. You can then compare the node code and scheduling configuration of the different versions.
            
        -   **Compare versions between the development and deployment or build environments**:
            
            1.  On the **Development History** tab, locate a version of the node.
                
            2.  Click **Compare** in the **Actions** column. On the details page, you can select a version from the **Deployment History** or **Build History** to compare.
                
    -   **Restore** to a **version**:
        
        You can restore a node to a specific historical version only from the **Development History** tab. On the Development History tab, find the target version and click **Restore** in the **Actions** column. The node's code and **Scheduling** information are then restored to the selected version.
        

## **References**

-   For more information about node development in recurring and manual workflows, see [Scheduled workflow orchestration](/help/en/dataworks/user-guide/workflow) and [Manually triggered workflows](/help/en/dataworks/user-guide/manual-workflow/).
    
-   After a node is created and developed, you can publish it to the production environment. For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/) and [Publish nodes and workflows](/help/en/dataworks/user-guide/task-release/).
    

## **FAQ**

**Can I download node code, such as SQL or Python, to a local machine?**

-   **Answer:** A direct download feature is not available. As a workaround, you can copy the code to your local machine during development. Alternatively, in the new DataStudio, you can [add a local file](/help/en/dataworks/user-guide/personal-directory-project-development#324661f9a2oyh) in your personal folder for development. After development, you can submit the code to the workspace directories. In this case, your code is saved locally.
