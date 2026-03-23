This topic describes how to use the SQL Analysis feature in the MaxCompute console to edit, execute, and analyze the results of SQL statements online.

**Important**

To adapt to the evolution of cloud-native technologies and meet increasingly complex data analytics needs, the SQL Analysis feature in the Alibaba Cloud MaxCompute console has been upgraded and is now available in all regions. For more information about the new features and how to enable them, see [Connect using SQL Analysis (new version)](/help/en/maxcompute/user-guide/sql-to-analyze-connections).

The entry point for the previous version of SQL Analysis will be shut down on **March 31, 2026** (UTC+8). Make sure to clear local files from the old workspace promptly. We recommend manually moving them to your personal folder in the new version of SQL Analysis for future use.

## **Function overview**

-   Edit and execute SQL statements online, and analyze query results using charts.
    
-   Includes built-in public dataset demos that you can run directly to quickly experience and test MaxCompute features.
    

## Use case

-   Quick experience: Quickly experience the core features of MaxCompute based on public datasets.
    
-   Ad hoc testing: Run SQL commands for temporary tests, such as viewing table data.
    

## **SQL Analysis interface**

### **Editor area**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2609004671/p1028766.png)

**Module**

**Description**

Tab bar

File tabs. You can open multiple files at the same time.

-   Double-click the empty area of the tab bar to quickly create a `.sql` file.
    
-   Right-click the empty area of the tab bar and select **New File**.
    

Toolbar

-   **Run**: Executes the SQL script. You can select a segment of the SQL script in the current file to run. If you do not make a selection, all SQL scripts in the current file are executed by default.
    
-   **Stop**: The **Stop** button appears after you click **Run**.
    
-   **Save**: The current public preview version does not support online file storage. You can only save files locally. Save the file as a `.sql` file.
    
-   **Format**: Formats the SQL code in the current file.
    
-   **Run Result**: If an SQL script has been executed in the current file and the results area is hidden, click this button to display it.
    
-   **Cost Analysis**: Executes a [COST SQL](/help/en/maxcompute/user-guide/cost-sql) statement to estimate metering. It returns the data volume to be scanned and the complexity of the SQL statement.
    

Editor

-   The first line of the script must be a script that can be run.
    
-   If a `.sql` file contains multiple SQL scripts, any flags (SET statements) must be placed at the beginning. The flags apply to all SQL statements in the file.
    
-   Supports full screen mode to enter, execute, and view results.
    

### **Runtime parameter configuration area**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2609004671/p1028768.png)

**Module**

**Description**

**Project**

-   Select the project where you want to run the SQL code. This is a required option.
    
-   The current account must have the `create instance` permission for the selected project.
    
-   You must select a project for the first run. The cache then records the last selected project. You can change the project at any time.
    
-   The selection applies to all file tabs.
    

**Computing quota**

-   Select the compute quota to use. This is an optional setting.
    
-   If you select a quota, the current account must have the `usage` permission for that quota.
    
-   If you do not select a quota, the **default compute quota** of the project is used.
    
-   The selection applies to all file tabs.
    

### **Results area**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2609004671/p1028772.png)

**Module**

**Description**

**PROBLEMS**

Before script execution, the syntax and standards of all open file scripts in the editor area are automatically checked.

**METADATA**

Select an object, such as a table, resource, or user-defined function, from **Table Data** or **Public Datasets** to display its metadata details. The details include basic information, column information, generated DDL, and data preview.

Note that you need the relevant [database permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#section-yzi-e4i-g3z) for the object.

**RESULT**

The results of the executed script:

-   Run list: Each time an SQL statement in the current file is executed, a start time is recorded. You can click a record to view information about that run.
    
-   Log: The log content for each execution.
    
-   SQL: The specific SQL code for each run.
    
-   Result list: If there are results to display, they appear here.
    
-   Analysis: If there are results, you can perform simple chart analysis here.
    

**COST ANALYSIS**

Displays the results of the [COST SQL](/help/en/maxcompute/user-guide/cost-sql) statement executed during the **COST ANALYSIS**. The results include the execution log and the final result.

### **Resource manager**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2609004671/p1028773.png)

Right-click the empty area to the right of the **EXPLORER** to configure the display modules. For example, you can hide the **TIMELINE** module.

**Module**

**Description**

File list

-   When you first access it, it shows **No folder opened**.
    
-   Click the **Open Folder** button to open an on-premises folder. The first time you open a folder, a dialog box appears asking you to confirm the permission to view the folder.
    

**Important**

Each time the system tries to read an on-premises folder, you must manually grant access permissions to all files in the folder to ensure data security.

The server does not save any content from the folder.

**COMMONDATASET DEMO**

-   MaxCompute SQL Analysis has built-in public dataset demo query files. You can run them directly or after temporary edits. However, you cannot modify the online demo files. If you refresh the page, the file content reverts to its initial state. **Save any modified files to your local machine**.
    
-   The built-in demos are mainly SQL scripts edited based on public datasets. The public datasets use schema storage. Therefore, the script `set odps.namespace.schema=true;` is added by default to enable the schema syntax switch.
    
-   In the built-in demo files, each file contains multiple SQL scripts. The number before `-query` in the script name indicates the number of queries. For example, the TPC-DS dataset demos each contain 99 queries of different data volume specifications. Executing them consumes compute resources. Proceed with caution.
    

**TIMELINE**

Records the operation logs for files opened in the editor. The log information is stored in the cache. Clearing the cache deletes the logs.

### **Search**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2609004671/p1028775.png)

**Module**

**Description**

**Search**

-   Performs a global search of the content of all files in the resource manager. For example, you can search for files that contain the FROM table\_test1 statement.
    
-   Click a search result to open the corresponding file in the editor on the right and go directly to the keyword's location.
    

**Replace**

-   Replaces the searched keyword with another statement.
    
-   For example, to replace the `FROM table_test1` statement with `FROM table_test2` in all files, enter `FROM table_test1` in the **Search** box, enter `FROM table_test2` in the **Replace** box, and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6975423171/p627881.png) button to perform the replacement.
    

### **Table Data**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2609004671/p1028780.png)

Displays a list of objects for all projects under the current tenant in the region. The objects include schemas, tables, views, resources, and functions.

-   **Scope**: An **Alibaba Cloud account** can view all projects. A **Resource Access Management (RAM) user must be added to a project** to view it.
    
-   `**SYSTEM_CATALOG**` **project**: The `SYSTEM_CATALOG` project in the list is a system project for the [tenant-level Information Schema](/help/en/maxcompute/user-guide/tenant-level-information-schema). It is created by the system by default. The INFORMATION\_SCHEMA is placed as a view under the "INFORMATION\_SCHEMA" schema of this project and can be viewed directly.
    
-   **View permissions**: To view the list of objects in a project, you need the corresponding [List permission](/help/en/maxcompute/user-guide/maxcompute-permissions#section-yzi-e4i-g3z).
    
    For table objects, if the currently logged-on account has `SELECT` permission, the icon for the table in the list is a green table icon ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6975423171/p767548.png). This helps you quickly identify tables for which you have permissions.
    
-   **Schema level**: After you expand a project, if the project has a schema level, the schema list is displayed first. If not, the data object classifications are displayed directly. Click a classification to expand the list of objects of that type.
    
-   Click an object to display its metadata details on the **Metadata** tab in the results area on the right.
    

### **Public datasets**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2609004671/p1028778.png)

Displays the table metadata information for the [public datasets](/help/en/maxcompute/getting-started/overview-of-public-datasets) provided by the system.

## Use SQL Analysis

-   SQL jobs execute within a project. After activating the MaxCompute service, create a project to perform SQL analysis.
    

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
    
2.  [Create a MaxCompute Project](/help/en/maxcompute/getting-started/create-a-maxcompute-project)
    
    Because SQL jobs must be initiated within a project, create a project after activating the MaxCompute service to use the SQL analysis feature.
    
3.  In the navigation pane on the left, choose **Data Exploration** > **SQL Analysis**.
    
4.  On the **Data Exploration** > **SQL Analysis** page, create an SQL file.
    
    1.  When you open the SQL Analysis page for the first time, an SQL file named `untitled_x` is created and opened by default. You can edit this file directly.
        
    2.  Double-click a blank area on the file tab bar in the editor to create an SQL file.
        
    3.  Right-click the file tab bar in the editor and select New File.
        
5.  After you enter SQL in the SQL editor, click **Run Configurations** on the right and configure the **Project** and **Computing Quota**.
    
    -   **Project**: **Required**. The project in which to execute the SQL statements. You must have the `CREATE instance` permission for this project.
        
    -   **Computing Quota**: **Optional**. This parameter specifies the compute resource quota for the job. If you specify a quota, your account must have the `USAGE` permission for it. If you do not specify a quota, the SQL statements are executed using the default compute resource quota configured for the project.
        
6.  Click **Run** and wait for the query to complete. In the execution results, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6975423171/p625504.png) icon to perform a simple visual analysis.
    
    The SQL analysis interface does not support downloading execution results. To download results locally, use the following methods:
    
    -   Execute the SQL task in the MaxCompute client (odpscmd), and then use the Tunnel command to download the results locally. For more information, see [Download instance data](/help/en/maxcompute/user-guide/usage-notes-1#section-ede-jyn-vtk).
        
    -   Execute the SQL task in an ODPS SQL node in DataWorks Data Studio, and then click the Export button to download the results to your local computer. For more information, see [Export, share, and download workbooks](/help/en/dataworks/user-guide/export-share-and-download-spreadsheets).
        
7.  Click **Save** to save the current SQL file to your local computer.
