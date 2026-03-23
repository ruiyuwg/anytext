This guide shows you how to connect DataWorks to EMR Serverless StarRocks and use five DataWorks features with your StarRocks data: data integration, data development and scheduling, ad-hoc analysis, API generation, and metadata management.

## Overview

StarRocks is a next-generation, high-speed Massively Parallel Processing (MPP) database for unified analytics. EMR Serverless StarRocks is a fully managed service for open-source StarRocks on Alibaba Cloud. You can create and manage StarRocks instances without provisioning infrastructure.

As an online analytical processing (OLAP) engine compatible with the MySQL protocol, StarRocks supports:

-   Multi-dimensional OLAP analysis
    
-   Data lake analysis
    
-   High-concurrency queries
    
-   Real-time data analysis
    

DataWorks connects to EMR Serverless StarRocks through a data source. After connecting, you can run data integration jobs, schedule recurring tasks, perform interactive analysis, build data APIs, and manage metadata from a single platform.

**Note**

After you create a StarRocks instance, you can view instance details in the EMR console. You can also connect to the instance through EMR StarRocks Manager to view database and table information.

## Choose the right feature

Use the following table to decide which DataWorks feature fits your goal.

**Goal**

**DataWorks feature**

**When to use**

Move data into StarRocks from external sources

**Data Integration**

Sync data from MySQL, Hive, Kafka, OSS, HDFS, or other sources into StarRocks tables on a recurring schedule.

Run and schedule SQL tasks

**Data Development** + **Operation Center**

Create StarRocks SQL tasks, debug them, and run them on a recurring schedule with dependency management.

Run ad-hoc queries

**Data Analysis**

Interactively query, analyze, and share data in StarRocks tables without a scheduled job.

Expose StarRocks data as REST APIs

**DataService Studio**

Generate and publish API endpoints that serve StarRocks data to downstream applications.

Search and manage metadata

**Data Map**

Catalog StarRocks metadata, search for tables, view table details, or trace data lineage.

## Key concepts

**Concept**

**Description**

**References**

Resource group

Runs DataWorks tasks. You must purchase, bind, and configure a resource group before using DataWorks features.

[Resource group fees](/help/en/dataworks/dataworks-resource-group-fees/), [Resource group management](/help/en/dataworks/user-guide/resource-group-management/)

Data source

A connection to an external data store. For EMR Serverless StarRocks, create a **StarRocks** data source.

[StarRocks data source](/help/en/dataworks/user-guide/starrocks-data-source)

Data Integration

Synchronizes data between heterogeneous data sources in batch or real-time mode.

[Data Integration overview](/help/en/dataworks/user-guide/overview-of-data-integration/)

Data Development and Operation Center

Data Development lets you write and debug tasks. Operation Center runs them on a recurring, automated schedule.

[DataStudio (Old Version)](/help/en/dataworks/user-guide/overview-26/), [Operation Center overview](/help/en/dataworks/user-guide/overview-43)

Data Analysis

Online service for interactive data querying, editing, and sharing.

[Data Analysis](/help/en/dataworks/user-guide/data-analysis-overview/)

DataService Studio

Platform for building, managing, and publishing data APIs with codeless and code-based interfaces.

[DataService Studio](/help/en/dataworks/user-guide/data-services-overview/)

Data Map

Metadata management module with global search, metadata detail viewing, data preview, data lineage, and data category management.

[Data Map overview](/help/en/dataworks/overview-datamap)

## Prerequisites

Complete all of the following before you begin:

1.  **Activate DataWorks and create a workspace.** See [Purchasing guide](/help/en/dataworks/purchase-guide).
    
2.  **Purchase and configure a resource group.** Bind the resource group to your workspace and configure its network settings. See [Resource group management](/help/en/dataworks/user-guide/resource-group-management/).
    
3.  **Create an EMR Serverless StarRocks instance.** See [Quickly use an all-in-one instance](/help/en/emr/emr-serverless-starrocks/getting-started/use-compute-storage-integrated-instances).
    
4.  **Add the DataWorks resource group IP address to your StarRocks whitelist.** In the EMR console, open your StarRocks instance and add the IP address to the whitelist.
    
    ![Whitelist entry point in EMR console](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8472926271/p723079.png)
    

## Navigate to the DataWorks console

Most procedures in this guide start from the DataWorks console. Use these steps each time:

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview).
    
2.  In the top navigation bar, select the target region.
    
3.  In the left-side navigation pane, choose the target service (specified in each section below).
    
4.  Select the target workspace from the drop-down list and click **Go to**.
    

The sections below reference this as "navigate to the DataWorks console" and specify the exact menu path.

## Create a data source

A StarRocks data source connects DataWorks to your StarRocks database. All DataWorks features use this connection.

**Important**

-   For workspaces that **Use Data Studio (New Version)**, a data source is automatically created when you [bind an EMR Serverless StarRocks compute resource](/help/en/dataworks/user-guide/binding-serverless-starrocks-computing-resources). You do not need to follow the steps below.
    
-   For workspaces that do **not** use **Use Data Studio (New Version)**, you must create the data source manually.
    

For full parameter details, see [StarRocks data source](/help/en/dataworks/user-guide/starrocks-data-source).

### Open the Data Sources page

1.  Navigate to the DataWorks console.
    
2.  In the left-side navigation pane, choose **More** > **Management Center**.
    
3.  Select the desired workspace and click **Go to Management Center**.
    
4.  In the left-side navigation pane of the Management Center page, click **Data Sources**.
    
5.  Click **Add Data Source**.
    

Choose a connection method based on network connectivity between your StarRocks instance and DataWorks resource group. For help, see [Overview of network connectivity solutions](/help/en/dataworks/user-guide/data-source-test-connectivity).

### Option A: Connect over an internal network

Use this method when your StarRocks instance and DataWorks resource group are in the same VPC or can communicate over the Alibaba Cloud internal network.

**Parameter**

**Description**

**Configuration Mode**

Select **Alibaba Cloud Instance Mode**.

**Alibaba Cloud Account**

Select **Current Alibaba Cloud Account** if the StarRocks instance belongs to the same account as DataWorks. Select **Another Alibaba Cloud Account** if it belongs to a different account -- provide the **UID Of Another Alibaba Cloud Account** and configure a **RAM Role**. See [Cross-account authorization (RDS, Hive, or Kafka)](/help/en/dataworks/user-guide/configure-cross-account-authorization).

**Region**

Select the region where your EMR Serverless StarRocks instance resides.

**Instance**

Select your **Serverless** StarRocks instance.

**Database Name**

Enter the database name. Find this in EMR StarRocks Manager on the **Metadata Management** page.

**Username** / **Password**

Enter the instance credentials. An admin user is created by default when you create a StarRocks instance. The password is the one set during instance creation.

**Connection Configuration**

Test connectivity between the data source and your resource group. A status of **Connected** confirms the connection is working.

### Option B: Connect over the Internet

Use this method when your StarRocks instance and DataWorks resource group are not on the same internal network and you need to connect through the public endpoint.

**Parameter**

**Description**

**Configuration Mode**

Select **Connection String Mode**.

**Host Address/IP Address**

Enter the **Public endpoint** of the FE node in your EMR Serverless StarRocks instance. ![Public endpoint location](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3778348271/p846962.png)

**Port**

Enter the FE query port. The default query port is 9030.

**Load URL**

Enter the addresses of StarRocks FE nodes for StreamLoad. Use the format `FE public IP address:FE HTTP port`. Separate multiple addresses with commas.

**Database Name**

Enter the database name. Find this in EMR StarRocks Manager under **Metadata Management**.

**Username** / **Password**

Enter the instance credentials. An admin user is created by default when you create a StarRocks instance. The password is the one set during instance creation.

**Connection Configuration**

Test connectivity between the data source and your resource group. A status of **Connected** confirms the connection is working.

**Verification:** After you save the data source, return to the **Data Sources** list and confirm your new StarRocks data source appears with a **Connected** status.

## Sync data with Data Integration

Use DataWorks Data Integration to sync data from external sources -- including MySQL, Hive, Kafka, OSS, and HDFS -- into EMR Serverless StarRocks tables. The following example syncs data from MySQL to StarRocks.

**Note**

For full details on configuring a StarRocks synchronization task, see [StarRocks data source](/help/en/dataworks/user-guide/starrocks-data-source).

### Create and run a batch synchronization task

1.  Navigate to the DataWorks console.
    
2.  In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**.
    
3.  Select the desired workspace and click **Go to Data Development**.
    
4.  Create a new batch synchronization node.
    
5.  Set the source data source to MySQL.
    
6.  Set the destination data source to StarRocks.
    
    ![Batch synchronization node configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8472926271/p723103.png)
    
7.  Select a resource group for the task.
    
8.  Test the connectivity to both the source and destination data sources.
    
9.  Click **Properties** in the right sidebar.
    
10.  Configure the scheduling parameters:
     
     -   Set the scheduling cycle (for example, daily or hourly).
         
     -   Set the rerun policy.
         
     -   Assign a resource group for the node.
         
11.  Click **Submit**.
     
12.  Click **Deploy** to publish the task to Operation Center for recurring execution.
     

**Verification:** After deployment, open Operation Center and confirm the synchronization task appears in the task list with the correct schedule.

## Develop and schedule SQL tasks

Create a StarRocks node in DataStudio for SQL tasks that run on a recurring schedule. You can write SQL, debug it interactively, and set up automated scheduling.

### Create and schedule a StarRocks SQL task

1.  Navigate to the DataWorks console.
    
2.  In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**.
    
3.  Select the desired workspace and click **Go to Data Development**.
    
4.  Create a new StarRocks node.
    
5.  Select the connected StarRocks data source.
    
6.  Write your EMR Serverless StarRocks SQL statements in the editor.
    
    ![StarRocks node in DataStudio](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8472926271/p723092.png)
    
7.  To debug the SQL, select the statements you want to run.
    
8.  Click the **Run** button.
    
9.  Select a resource group when prompted to run the debugging task.
    
10.  After successful debugging, click **Properties** in the right sidebar.
     
11.  Configure the scheduling parameters:
     
     -   Set the scheduling cycle (for example, daily or hourly).
         
     -   Set the rerun policy.
         
     -   Assign a resource group for the task.
         
12.  Click **Submit**.
     
13.  Click **Deploy** to publish the task to Operation Center for recurring execution.
     

**Verification:** After deployment, open Operation Center and confirm the task appears with the correct schedule and dependency settings.

## Run ad-hoc queries with Data Analysis

Use the Data Analysis service to run ad-hoc queries against EMR Serverless StarRocks tables without setting up a scheduled task.

### Set up and run a query

1.  Navigate to the DataWorks console.
    
2.  In the left-side navigation pane, choose **Data Analysis and Service** > **DataAnalysis**.
    
3.  Click **Go to DataAnalysis**.
    
4.  In the left-side navigation pane, click **SQL Query**.
    
5.  Click the ![Settings icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8821373371/p872792.png) icon in the left sidebar.
    
6.  Click **More** > **System Management**.
    
7.  On the **System Management** page, set the query resource group for the StarRocks engine type to the resource group your task uses.
    
    ![System Management resource group configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8472926271/p723120.png)
    
8.  Return to the **SQL Query** page.
    
9.  In the upper-right corner, switch the engine type to **StarRocks**.
    
10.  Select your data source.
     
11.  Write and run your query statements to analyze data in EMR Serverless StarRocks.
     
     ![Data Analysis query editor](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8472926271/p723121.png)
     

**Verification:** After running a query, confirm that results appear in the results panel below the editor.

## Generate APIs with DataService Studio

Use DataService Studio to generate REST APIs that serve data from StarRocks data sources. DataService Studio provides both a codeless UI and a code editor. The code editor can automatically generate request and response parameters from an SQL query.

The following steps describe how to create an API using the codeless UI.

### Create and publish a StarRocks API

1.  Navigate to the DataWorks console.
    
2.  In the left-side navigation pane, choose **Data Analysis and Service** > **DataService Studio**.
    
3.  Select the desired workspace and click **Go to DataService Studio**.
    
4.  Create a new API.
    
5.  Set the data source type to **StarRocks**.
    
6.  Select the StarRocks data source you created and the target table.
    
7.  Configure the API parameters (request parameters and response parameters) as prompted on the page.
    
    ![DataService Studio API configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8472926271/p723123.png)
    
8.  Click **Resource Group** in the right sidebar.
    
9.  Set the resource group to an exclusive resource group for DataService Studio.
    
    ![Resource group configuration for DataService Studio](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8472926271/p723128.png)
    
10.  Test the API to make sure it returns the expected results.
     
11.  Click **Submit**.
     
12.  Click **Deploy** to publish the API.
     

**Verification:** After publishing, call the API endpoint and confirm it returns the expected data.

## Manage metadata with Data Map

Data Map lets you catalog, search, and explore metadata for StarRocks tables.

### Acquire metadata

Configure metadata acquisition to crawl your StarRocks data source and catalog its metadata.

1.  Navigate to the DataWorks console.
    
2.  In the left-side navigation pane, choose **Data Governance** > **Data Map**.
    
3.  Click **Go to Data Map**.
    
4.  In the left-side navigation pane, click the ![Data Map nav icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8821373371/p873221.png) icon.
    
5.  Click the **Manage** button in the upper-right corner of the StarRocks module.
    
6.  Switch to the **Data Sources for Which No Crawler Is Created** tab.
    
7.  In the **Actions** column, click **Metadata Acquisition**.
    
8.  Configure the **Resource Group Name**.
    
9.  Click **Test Network Connectivity** to verify the connection.
    
10.  Set the **Collection Plan**.
     
11.  Click **Confirmation** to save the metadata acquisition configuration.
     
     ![Metadata acquisition configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9334992271/p766169.png)
     

**Note**

-   For more details, see [Metadata acquisition](/help/en/dataworks/user-guide/metadata-collection/).
    
-   Only serverless resource groups can run this task.
    

**Verification:** After saving, return to the Data Map main page and confirm that your StarRocks data source appears with an active crawler.

### Search for tables

Find StarRocks tables by name, type, or other attributes.

1.  Navigate to the DataWorks console.
    
2.  In the left-side navigation pane, choose **Data Governance** > **Data Map**.
    
3.  Click **Go to Data Map**.
    
4.  In the left-side navigation pane, click the ![Search nav icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8821373371/p873224.png) icon.
    
5.  On the **Data Source** tab, select **StarRocks**.
    
6.  Use the search bar at the top to search for tables by type.
    
    ![Data Map search results](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9334992271/p766190.png)
    

**Note**

For more details, see [Query and manage common data](/help/en/dataworks/user-guide/metadata-search).

### View table details

View detailed information about a specific StarRocks table, including schema, output records, lineage, and usage notes.

1.  Navigate to the DataWorks console.
    
2.  In the left-side navigation pane, choose **Data Governance** > **Data Map**.
    
3.  Click **Go to Data Map**.
    
4.  On the Data Map homepage or in search results, find the target table.
    
5.  Click the table name to open the table details page.
    
6.  Review the following tabs: **Details**, **Output**, **Lineage**, and **Usage Notes**.
    
    ![Table details page](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9334992271/p766194.png)
    

**Note**

-   For more details on table information, see [Query and manage common data](/help/en/dataworks/user-guide/metadata-search).
    
-   StarRocks serverless clusters of V3.1.13, V3.2.9, and later versions support metadata and data lineage analysis. For configuration details, see [View data lineage](/help/en/dataworks/user-guide/view-lineages#4a19f7e068i93).
