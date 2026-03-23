This topic guides you through house buying group analysis to help you quickly understand the data development and data analysis processes in DataWorks.

## **Introduction**

This tutorial analyzes house buying situations of different groups based on house buying data. In this tutorial, on-premises data is uploaded to a MaxCompute table named **bank\_data** by using DataWorks, and **MaxCompute SQL** nodes are used to analyze user groups to obtain a table named **result\_table**. Finally, simple visualization and analysis are performed based on **result\_table** to obtain user group profile data.

**Note**

This tutorial demonstrates DataWorks features based on simulated data. In actual business scenarios, you must make adjustments based on your business data.

The following figure shows the data forwarding path and data development process in this tutorial.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8672052771/CAEQPxiBgMD9y9qzthkiIDU1Y2UyNzg4ZjA2MzQ3NDlhOTBkY2MzYTg4ZjYxYWNk4950254_20250226175746.704.svg)

After data analysis is complete, you can obtain the following group analysis profile from the house buying data: The education levels of single people who have mortgages are mainly `university.degree` and `high.school`.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9714377471/p948642.png)

## Preparations

### **Activate DataWorks**

This tutorial uses the **Singapore** region. Log in to the [DataWorks Console](https://dataworks.console.aliyun.com/welcome), switch to the **Singapore** region, and check if DataWorks is activated in that region.

**Note**

This tutorial uses **Singapore**. Select the region where your data resides:

-   If your business data resides in other Alibaba Cloud services, select the same region.
    
-   If your business is on-premises and requires access via the public network, select a region geographically closer to you to reduce access latency.
    

#### New user

New users will see the following prompt. Click **Purchase Product Portfolio for Free**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5196594471/p944329.png)

1.  Configure the parameters on the combination purchase page.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Region**
    
    Select the target region.
    
    Singapore
    
    **DataWorks Edition**
    
    Select the DataWorks edition to purchase.
    
    **Note**
    
    This tutorial uses **Basic Edition** as an example. All editions can experience the features involved in this tutorial. You can refer to [Features by edition](/help/en/dataworks/user-guide/differences-among-dataworks-editions#title-7di-af7-zpy) to select the appropriate DataWorks edition based on your actual business needs.
    
    Basic Edition
    
2.  Click **Confirm Order and Pay** to complete the payment.
    

#### Activated but expired

If you have previously activated DataWorks in the **Singapore** region but the DataWorks edition has expired, the following prompt will appear, and you need to click **Purchase Edition**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5196594471/p944348.png)

1.  Configure the parameters on the purchase page.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Edition**
    
    Select the DataWorks edition to purchase.
    
    **Note**
    
    This tutorial uses **Basic Edition** as an example. All editions can experience the features involved in this tutorial. You can refer to [Features by edition](/help/en/dataworks/user-guide/differences-among-dataworks-editions#title-7di-af7-zpy) to select the appropriate DataWorks edition based on your actual business needs.
    
    Basic Edition
    
    **Region and Zone**
    
    Select the region where you want to activate DataWorks.
    
    Singapore
    
2.  Click **Buy Now** to complete the payment.
    

**Important**

After purchasing a DataWorks edition, if you cannot find the relevant DataWorks edition, perform the following operations:

-   Wait a few minutes and refresh the page, as there may be a delay in system updates.
    
-   Check if the current region matches the region where you purchased the DataWorks edition to prevent failing to find the relevant DataWorks edition due to incorrect region selection.
    

#### Activated

If you have already activated DataWorks in the **Singapore** region, you will enter the DataWorks overview page and can proceed directly to the next step.

### **Create a workspace**

1.  On the [DataWorks Workspace List](https://dataworks.console.aliyun.com/workspace/list) page, select **Singapore** and click **Create Workspace**.
    
2.  On the **Create Workspace** page, enter a custom **Workspace Name**, enable **Use Data Studio (New Version)**, and click **Create Workspace**.
    
    **Note**
    
    After February 18, 2025, new workspaces created by primary accounts in Singapore enable the new DataStudio by default. The **Use Data Studio (New Version)** option will not appear.
    

### **Create and associate resources**

1.  Go to the [DataWorks Resource Group List](https://dataworks.console.aliyun.com/resource/list) page, switch to the **Singapore** region, and click **Create Resource Group**.
    
2.  On the resource group purchase page, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Resource Group Name**
    
    Custom.
    
    **VPC**, **vSwitch**
    
    Select an existing VPC and vSwitch. If there are none in the current region, click the console link in the parameter description to create them.
    
    **Service-linked Role**
    
    Follow the on-screen instructions to create a [service-linked role](/help/en/dataworks/user-guide/dataworks-service-linked-role-1).
    
3.  Click **Buy Now** to complete the payment.
    
4.  Go to the [DataWorks Resource Groups](https://dataworks.console.aliyun.com/resource/list) page, switch to the **Singapore** region, find the created resource group, and click **Associate Workspace** in the **Actions** column.
    
5.  On the **Associate Workspace** page, find the created DataWorks workspace and click **Associate** in its **Actions** column.
    

### **Associate MaxCompute resources**

Create a MaxCompute project and associate it with DataWorks for data ingestion and analysis.

1.  Go to the [DataWorks Workspace List](https://dataworks.console.aliyun.com/workspace/list) page, switch to the **Singapore** region, find the created workspace, and click the workspace name to enter the **Workspace Details** page.
    
2.  In the left navigation pane, click **Computing Resource** to enter the computing resources page. Click **Associate Computing Resource** and select the **MaxCompute** type. Configure the following key parameters to create a MaxCompute project and associate it as a DataWorks computing resource.
    
    **Note**
    
    Keep the default values for parameters not mentioned in the table.
    
    **Parameter**
    
    **Description**
    
    **MaxCompute Project**
    
    Click **Create** in the drop-down selection box and fill in the following parameters.
    
    -   **Project Name**: Custom, unique across the entire network.
        
    -   **Billing Method**: Select **Pay-as-you-go**.
        
        **Note**
        
        If pay-as-you-go is not selectable, click **Activate** to complete the activation of the MaxCompute service.
        
    -   **Default Quota**: Select an existing default Quota from the drop-down list.
        
    
    **Default Access Identity**
    
    Select **Alibaba Cloud Account**.
    
    **Computing Resource Instance Name**
    
    Identifies the resource for task execution. For example, in this tutorial, it is named `MaxCompute_Source`.
    
3.  Click **OK**.
    

## **Procedure**

In this tutorial, you need to use DataWorks to upload the test data provided for this tutorial to a MaxCompute project and create a workflow in Data Studio to cleanse and write the test data. In addition, you need to debug and run the workflow and execute SQL statements to query and verify the running result.

### **Step 1: Create a MaxCompute table**

Before you upload the test data, you need to use the data catalog feature of DataWorks to create a table named `bank_data` in the MaxCompute project to store the test data to be uploaded.

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane of the DataWorks console, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the Select Workspace drop-down list and click **Go to** **Data Studio**.
    
2.  In the left-side navigation pane of the Data Studio page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9714377471/p946213.png) icon to go to the **Data Catalog** pane.
    
3.  (Optional) If your MaxCompute project is not added to DataWorks as a data catalog, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9714377471/p949576.png) icon next to MaxCompute to go to the **DataWorks** **Data Sources** tab. On the DataWorks Data Sources tab, add the MaxCompute project that is already added as a computing resource or data source to the workspace as a MaxCompute data catalog.
    
4.  In the DATA CATALOG pane, click **MaxCompute**. In the MaxCompute section**,** create a MaxCompute table in the **Table** folder under the MaxCompute project that is added as a data catalog.
    
    **Note**
    
    -   If the schema feature is enabled for the MaxCompute project, you must open the schema in the MaxCompute project before you can create a MaxCompute table in the **Table** folder under the MaxCompute project.
        
    -   In this tutorial, a workspace in standard mode is used, and debugging needs to be performed only in the development environment. Therefore, you need to create the `bank_data` table in the MaxCompute project only in the development environment. If you use a workspace in basic mode, you need to create the `bank_data` table in the MaxCompute project only in the production environment.
        
    
5.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9714377471/p946214.png) icon next to Table to go to the table creation tab.
    
    In the **DDL** section of the table creation tab, enter the following SQL code. Then, the system automatically generates all information for the table.
    
    ```
    CREATE TABLE IF NOT EXISTS bank_data
    (
     age             BIGINT COMMENT 'The age',
     job             STRING COMMENT 'The job type',
     marital         STRING COMMENT 'The marital status',
     education       STRING COMMENT 'The education level',
     default         STRING COMMENT 'Whether a credit card is possessed',
     housing         STRING COMMENT 'The mortgage',
     loan            STRING COMMENT 'The loan',
     contact         STRING COMMENT 'The contact information',
     month           STRING COMMENT 'The month',
     day_of_week     STRING COMMENT 'The day of the week',
     duration        STRING COMMENT 'The duration',
     campaign        BIGINT COMMENT 'The number of contacts during the campaign',
     pdays           DOUBLE COMMENT 'The time elapsed since the last contact',
     previous        DOUBLE COMMENT 'The number of contacts with the customer',
     poutcome        STRING COMMENT 'The result of the previous marketing campaign',
     emp_var_rate    DOUBLE COMMENT 'The employment change rate',
     cons_price_idx  DOUBLE COMMENT 'The consumer price index',
     cons_conf_idx   DOUBLE COMMENT 'The consumer confidence index',
     euribor3m       DOUBLE COMMENT 'The euro deposit rate',
     nr_employed     DOUBLE COMMENT 'The number of employees',
     y               BIGINT COMMENT 'Whether a time deposit is possessed'
    );
    ```
    
6.  In the top toolbar of the configuration tab, click **Deploy** to create the `bank_data` table in the MaxCompute project in the development environment.
    
7.  After the `bank_data` table is created, click the table name in the MaxCompute section to view the detailed information of the table.
    

### **Step 2: Upload data to the** `bank_data` **table**

Download the [banking.csv](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250514/oxnifj/banking.csv) file to your on-premises machine and then upload data in the file to the `bank_data` table created in the MaxCompute project. For more information, see [Limits](/help/en/dataworks/user-guide/data-upload#327b67705bv8t).

**Important**

Before you upload data in the file, make sure that you specify a resource group for scheduling and a resource group for Data Integration for data upload. For more information, see [Limits](/help/en/dataworks/user-guide/data-upload#327b67705bv8t).

1.  In the upper-left corner of the DataWorks console, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0069373371/p874347.png) icon and choose **All Products** > **Data Integration** > **Upload and Download**.
    
2.  In the **Recent Upload Records** section of the Upload and Download page, click **Upload Data**. On the Upload Data page, configure the parameters by referring to the following table.
    
    **Section**
    
    **Description**
    
    **Data Source**
    
    Select Local File.
    
    **Specify Data to Be Uploaded**
    
    **Select File**
    
    Upload the `banking.csv` file that is downloaded to your on-premises machine.
    
    **Configure Destination Table**
    
    **Compute Engine**
    
    Select **MaxCompute**.
    
    **MaxComputeProject Name**
    
    Select the MaxCompute project to which the `bank_data` table belongs.
    
    **Select Destination Table**
    
    Select `bank_data`.
    
    **Preview Data of Uploaded File**
    
    Click **Mapping by Order** to complete mapping between the data in the file to the fields in the `bank_data` table.
    
    **Note**
    
    -   You can upload files whose names are suffixed with `.csv`, `.xls`, `.xlsx`, and `.json` from your on-premises machine.
        
    -   If you upload a file whose name is suffixed with .xls or .xlsx, the first sheet of the file is uploaded by default.
        
    -   If you upload a file whose name is suffixed with `.csv`, the size of the file cannot exceed **5 GB**. For other types of files, the file size cannot exceed **100 MB**.
        
    
3.  Click **Upload Data** to upload data in the CSV file to the `bank_data` table.
    
4.  Check whether the data is written to the bank\_data table.
    
    After the data is uploaded, you can use the [SQL Query (legacy version)](/help/en/dataworks/user-guide/sql-query#title-4b3-04z-bui) feature to check whether the data is written to the `bank_data` table.
    
    1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0069373371/p874347.png) icon in the upper-left corner, and click **All Products** > **Data Analysis** > **SQL Query** in the pop-up page.
        
    2.  Click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3580464271/p821437.png)** > **Create File** next to **My Files**, customize the **File Name**, and click **OK**.
        
    3.  On the SQL Query page, configure the following SQL.
        
        ```
        SELECT * FROM bank_data limit 10;
        ```
        
    4.  In the upper-right corner of the configuration tab of the SQL query file, select the workspace to which the `bank_data` table belongs and the desired MaxCompute data source, and click **OK**.
        
        **Note**
        
        In this tutorial, a workspace in standard mode is used, and the `bank_data` table is created only in the development environment. Therefore, you must select a MaxCompute data source in the development environment. If you use a workspace in basic mode, you can select a MaxCompute data source in the production environment.
        
    5.  In the top toolbar of the configuration tab, click the **Run** icon. In the **Estimate Costs** dialog box, click **Run**. After the SQL statement is executed, you can view the first ten data records in the bank\_data table that are displayed in the lower part of the configuration tab. This indicates that the data in the file is successfully uploaded from your on-premises machine to the bank\_data table.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9714377471/p949669.png)
        

### **Step 3: Process data**

In this step, you need to use MaxCompute SQL nodes to filter data that is uploaded to the `bank_data` table to obtain the data about the distribution of education levels among single people who have mortgages, and write the processed data to the `result_table` table.

#### **Build a data processing link**

1.  In the upper-left corner of the DataWorks console, click the ![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5196594471/p944454.png) icon and choose **All Products** > **Data Development And Task Operation** > **DataStudio**.
    
2.  In the top navigation bar of the Data Studio page, switch to the workspace created for this tutorial. In the left-side navigation pane of the Data Studio page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5196594471/p944456.png) icon.
    
3.  In the **Workspace Directories** section of the DATA STUDIO pane, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5196594471/p944455.png) icon and select **Create Workflow**. In the Create Workflow dialog box, enter a name in the Name field and click **OK** to save the workflow. In this tutorial, the Name parameter is set to `dw_basic_case`.
    
4.  On the configuration tab of the workflow, drag **Zero Load Node** and **MaxCompute SQL** from the left-side section to the canvas on the right, and specify names for the nodes.
    
    The following table lists the node names that are used in this tutorial and the functionalities of the nodes.
    
    **Node type**
    
    **Node name**
    
    **Node functionality**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9714377471/p948291.png) Zero load node
    
    `workshop_start`
    
    This node is a **zero load node** used to manage all nodes involved in this tutorial. This node helps clarifies the data forwarding path. You do not need to write code for this node.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7400745471/p920712.png) MaxCompute SQL
    
    `ddl_result_table`
    
    This node is used to create a table named result\_table. This table is used to store the cleansed data in the bank\_data table
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7400745471/p920712.png) MaxCompute SQL
    
    `insert_result_table`
    
    This node is used to filter data in the bank\_data table and write the filtered data to the result\_table table.
    
5.  Draw lines to configure dependencies between the nodes, as shown in the following figure.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9714377471/p948929.png)
    
    **Note**
    
    You can draw lines to configure [scheduling dependencies](/help/en/dataworks/user-guide/scenario-selection-based-on-consanguinity-configuration-scheduling-dependency#439dd1ff09hj0) for nodes in a workflow. You can also use the automatic parsing feature to enable the system to automatically identify scheduling dependencies between nodes. In this tutorial, scheduling dependencies between nodes are configured by drawing lines. For information about the automatic parsing feature, see [Use the automatic parsing feature](/help/en/dataworks/user-guide/scenario-selection-based-on-consanguinity-configuration-scheduling-dependency#0bfa9216dcfre).
    
6.  In the top toolbar of the configuration tab, click **Save**.
    

#### **Configure the data processing nodes**

##### **Configure the ddl\_result\_table node**

This node is used to create the `result_table` table. The table is used to store the data about the distribution of education levels among single people who have mortgages. You can use the `insert_result_table` node to write the data in the table.

1.  In the canvas of the workflow, move the pointer over the `ddl_result_table` node and click **Open Node**. In the code editor that appears, enter the following statement to create a table named result\_table to store the data about the distribution of education levels among single people who have mortgages. You can use the `insert_result_table` node to query the data in the table.
    
2.  Copy the following code and paste it in the code editor:
    
    ```
    CREATE TABLE IF NOT EXISTS result_table
    (  
     education   STRING COMMENT 'The education level',
     num         BIGINT COMMENT 'The number of persons'
    );
    ```
    
3.  Configure debugging parameters.
    
    In the right-side navigation pane of the configuration tab of the MaxCompute SQL node, click **Debugging Configurations**. On the Debugging Configurations tab, make the following configurations:
    
    1.  Select the MaxCompute computing resource that is associated with the workspace when you [make preparations](#prereq-32o-m59-fkj) from the **Computing Resource** drop-down list, and select the desired quota from the Computing Quota drop-down list.
        
    2.  Select the serverless resource group that you purchase when you [make preparations](#prereq-32o-m59-fkj) from the **Resource Group** drop-down list.
        
4.  In the top toolbar of the configuration tab, click **Save**.
    

##### **Configure the insert\_result\_table node**

This node is used to process and filter data in the `bank_data` table to obtain the data about the distribution of education levels among single people who have mortgages and write the data to the `result_table` table for subsequent data analysis and chart display.

1.  In the canvas of the workflow, move the pointer over the `insert_result_table` node and click **Open Node**.
    
2.  Copy the following code and paste it in the code editor:
    
    ```
    INSERT OVERWRITE TABLE result_table  -- Insert data into result_table.
    SELECT education
        , COUNT(marital) AS num
    FROM bank_data
    WHERE housing = 'yes'
        AND marital = 'single'
    GROUP BY education;
    ```
    
3.  Configure debugging parameters.
    
    In the right-side navigation pane of the configuration tab of the MaxCompute SQL node, click **Debugging Configurations**. On the Debugging Configurations tab, make the following configurations:
    
    1.  Select the MaxCompute computing resource that is associated with the workspace when you [make preparations](#prereq-32o-m59-fkj) from the **Computing Resource** drop-down list, and select the desired quota from the Computing Quota drop-down list.
        
    2.  Select the serverless resource group that you purchase when you [make preparations](#prereq-32o-m59-fkj) from the **Resource Group** drop-down list.
        
4.  In the top toolbar of the configuration tab, click **Save**.
    

### **Step 4: Debug and run the workflow**

After the workflow is configured, go to the `dw_basic_case` workflow configuration page. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1710913571/p978199.png) button to debug and run the entire workflow. If the workflow fails to run, you can troubleshoot the issue based on the debug logs.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9714377471/p947730.png)

### **Step 5: Query and display data**

After the data is uploaded to the MaxCompute computing resource and processed in Data Studio, You can now query the `result_table` in [SQL Query (legacy version)](/help/en/dataworks/user-guide/sql-query) and perform data analysis.

1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0069373371/p874347.png) icon in the upper-left corner, and click **All Products** > **Data Analysis** > **SQL Query** in the pop-up page.
    
2.  Click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3580464271/p821437.png)** > **Create File** next to **My Files**, customize the **File Name**, and click **OK**.
    
3.  On the SQL Query page, configure the following SQL.
    
    ```
    SELECT * FROM result_table;
    ```
    
4.  In the upper-right corner of the configuration tab of the SQL query file, select the workspace to which the `result_table` table belongs and the desired MaxCompute data source, and click **OK**.
    
    **Note**
    
    In this tutorial, a workspace in standard mode is used, and the `result_table` table is created only in the development environment and is not deployed to the production environment. Therefore, you must select a MaxCompute data source in the development environment. If you use a workspace in basic mode, you can select a MaxCompute data source in the production environment.
    
5.  In the top toolbar of the configuration tab, click the **Run** icon. In the **Estimate Costs** dialog box, click **Run**.
    
6.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3650294471/p821445.png) in the query results to view the visualized chart results. You can click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1760464271/p823639.png) in the upper-right corner of the chart to customize the chart style.
    
7.  You can also click **Save** in the upper-right corner of the chart to save the chart as a card, and then click **Card** (![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3650294471/p828378.png)) in the left navigation pane to view it.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9714377471/p948968.png)
    

## **Additional information**

-   For information about details of operations in the modules involved in this tutorial and about parameter descriptions, see the topics in the [Data Studio (New)](/help/en/dataworks/user-guide/overview-new-data-studio/#d3fd73a8e1y5c) and [Data Analysis](/help/en/dataworks/user-guide/data-analysis-overview/#title-vtr-xyh-bg1) directories.
    
-   In addition to the modules involved in this tutorial, DataWorks also supports other modules and features, such as Data Modeling, Data Quality, Data Security Guard, DataService Studio, Data Integration, and node scheduling configuration, to provide end-to-end data monitoring and O&M services. For more information, see [Data Modeling](/help/en/dataworks/user-guide/data-modeling-10#title-433-00w-lgq), [Data Quality](/help/en/dataworks/user-guide/data-quality/#ariaid-title1), [Data Security Guard](/help/en/dataworks/user-guide/data-security-guard/#ariaid-title1), [DataService Studio](/help/en/dataworks/user-guide/data-services-overview/#title-9d4-tbw-evh), [Data Integration](/help/en/dataworks/user-guide/overview-of-data-integration/#title-x5q-xz6-cks), and [Node scheduling configuration](/help/en/dataworks/user-guide/schedule/#title-ff1-8x4-6nv).
    
-   You can also experience more DataWorks tutorials. For more information, see [More use cases and tutorials](/help/en/dataworks/user-guide/advanced-tutorial-guide#5936226022rkf).
    

## **Appendix: Resource release and deletion**

If you want to release resources or delete nodes created for this tutorial, perform the following operations:

1.  Undeploy auto triggered nodes.
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Operation Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Operation Center**.
        
    2.  In **Auto Triggered Node O&M** > **Auto Triggered Nodes**, select all previously created periodic tasks (the workspace root node does not need to be taken offline), and then click **More Actions** > **Undeploy** at the bottom.
        
2.  Delete the workflow and disassociate the MaxCompute computing resource from the workspace.
    
    1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
        
    2.  In the left navigation pane of DataStudio, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5316381471/p917206.png) to enter the data development page. Then, in the **Workspace Directoies** area, find the created workflow, right-click the workflow, and click **Delete**.
        
    3.  In the left navigation pane, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5196594471/p944699.png)** > **Computing Resources**, find the associated MaxCompute computing resource, and click **Disassociate**. In the confirmation window, check the options and follow the instructions.
        
3.  Delete the MaxCompute project.
    
    Go to the [MaxCompute Project Management](https://maxcompute.console.alibabacloud.com/cn-shanghai/project-list) page, find the created MaxCompute project, click **Delete** in the **Actions** column, and follow the instructions to complete the deletion.
    
4.  Delete the DataWorks workspace.
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the region in which the workspace to delete resides. In the left-side navigation pane of the DataWorks console, click Workspace. On the Workspaces page, find the workspace that you want to delete, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9714377471/p948738.png) icon in the Actions column, and then select Delete Workspace.
        
    2.  In the **Delete Workspace** dialog box, select the check boxes for deletion confirmation, and click **OK**.
