The SQL editor in E-MapReduce (EMR) Serverless StarRocks Manager is a browser-based query workspace where data analysts and developers write, run, and manage SQL scripts against a StarRocks instance — no client software to install.

## Prerequisites

Before you begin, ensure that you have:

-   An EMR Serverless StarRocks instance. See [Create an instance](/help/en/emr/emr-serverless-starrocks/create-an-instance)
    

## Open the SQL editor

1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
    
2.  In the left-side navigation pane, choose **EMR Serverless** > **StarRocks**.
    
3.  In the top navigation bar, select the region where your instance is deployed.
    
4.  On the **Instances** tab, find the target instance and click **Connect** in the **Actions** column. For details, see [Use EMR StarRocks Manager to connect to an EMR Serverless StarRocks instance](/help/en/emr/emr-serverless-starrocks/use-sql-editor-to-operate-a-starrocks-instance).
    

> **Note:** Select the user you want to connect as before proceeding. The selected user determines which databases and tables are accessible in this session.

## SQL editor page layout

The SQL editor page is organized into three areas: the **Files panel**, the **Editor**, and the **Results panel**.

![SQL editor page overview](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4469455371/p856144.png)

### Files panel

The Files panel (area 1) lists all saved SQL files. It also includes built-in TPC-DS and TPC-H benchmark scripts for testing the instance directly. For details, see the [TPC-DS](/help/en/emr/emr-serverless-starrocks/tpc-ds/) and [TPC-H](/help/en/emr/emr-serverless-starrocks/tpc-h/) topics.

### Editor

The Editor (areas 2–5) is where you write and manage SQL scripts.

**Area**

**Control**

**Description**

2

New query icon

Create a new SQL query. On your first visit, a prompt icon appears in the center of the editor as an alternative entry point.

3

**Run**

Run the SQL script or a selected portion of it. For details, see the Run SQL statements section below.

4

**Save**

Save all statements in the current script.

5

**Format**

Auto-format the script: adjusts indentation, line breaks, and keyword case.

### Results panel

The Results panel (areas 6–9) displays query output and analysis.

**Area**

**Control**

**Description**

6

Results area

Shows query results or failure details after each run.

7

Export icon

Export the query results.

8

Full screen icon

Expand the results or failure details to full screen.

9

**Query Analysis**

Analyze the query execution plan. See [Manage and analyze queries](/help/en/emr/emr-serverless-starrocks/slow-and-all-queries).

## Run SQL statements

The **Run** button in area 3 supports two modes:

**Run the entire script**

Click **Run**. All statements in the current script are executed.

**Run a selection**

Select the SQL statements you want to execute, then click the run icon that appears on the left of the selected line. This icon is visible only when a line is clicked or selected.

## What's next

-   [Manage and analyze queries](/help/en/emr/emr-serverless-starrocks/slow-and-all-queries) — Use **Query Analysis** to inspect execution plans for slow or problematic queries.
    
-   [Audit logs](/help/en/emr/emr-serverless-starrocks/manage-audit-logs) — View and analyze the operations performed on a database.
    
-   [TPC-DS benchmark scripts](/help/en/emr/emr-serverless-starrocks/tpc-ds/) — Run industry-standard benchmarks against your StarRocks instance.
    
-   [TPC-H benchmark scripts](/help/en/emr/emr-serverless-starrocks/tpc-h/) — Run TPC-H queries to evaluate query performance.
