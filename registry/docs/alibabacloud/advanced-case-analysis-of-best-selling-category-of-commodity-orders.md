DataWorks is a unified, end-to-end big data development and governance platform powered by big data engines like MaxCompute, Hologres, E-MapReduce (EMR), AnalyticDB, and CDP. It supports data warehouses, data lakes, and lakehouse architectures. This tutorial shows you how to ingest data, orchestrate business workflows, schedule periodic tasks, and create data visualizations with DataWorks.

## **Getting started**

This tutorial uses an e-commerce scenario to demonstrate how to build an end-to-end Data Pipeline—from raw data ingestion to data analysis and Data Visualization. Following this standardized process lets you quickly build reusable data Workflows that ensure reliable Scheduling and operational Observability. This approach lets business users turn data into insights without deep technical expertise and makes it easier for your organization to adopt big data applications.

In this tutorial, you will:

1.  **Data Synchronization**: Use the Data Integration module in DataWorks to create a single-table Batch Task that synchronizes business data to a big data computing platform, such as MaxCompute.
    
2.  **Data Cleaning**: Use the Data Studio module in DataWorks to process, analyze, and mine business data.
    
3.  **Data Visualization**: Use the Data Analysis module in DataWorks to convert analysis results into easy-to-understand charts for business users.
    
4.  **Periodic Scheduling**: Configure Periodic Scheduling for the Data Synchronization and Data Cleaning processes.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4885176271/p823208.png)

In this tutorial, you will use the following Workflow to generate a daily ranking of the best-selling product categories by syncing and analyzing raw product and order data from a public data source to MaxCompute:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8956213771/CAEQUxiBgIC17.K.4hkiIGE3NTAwZDU4OWFmZTQ4NWJiMWM5NWE0MmYzYWNlODYz4940006_20250225155244.226.svg)

## **Prerequisites**

To complete this tutorial, you need an Alibaba Cloud account or a RAM user with the **AliyunDataWorksFullAccess** permission. For more information, see [Prepare an Alibaba Cloud account](/help/en/dataworks/user-guide/prepare-an-alibaba-cloud-account) or [Prepare a RAM user](/help/en/dataworks/user-guide/prepare-a-ram-user/).

**Note**

DataWorks provides a comprehensive permission system that supports access control at the product and module levels. If you need more fine-grained access control, see [Overview of the DataWorks permission management system](/help/en/dataworks/user-guide/overview-of-the-dataworks-permission-management-system).

## **Prerequisites**

### **Activate DataWorks**

This tutorial uses the **China (Shanghai)** region to demonstrate how to get started with DataWorks. You must sign in to the [DataWorks console](https://dataworks.console.aliyun.com/welcome), switch to the **China (Shanghai)** region, and check whether DataWorks is activated.

**Note**

Select a region based on the location of your business data:

-   If your business data is on other Alibaba Cloud services, select the same region as those services.
    
-   If your business is on-premises and requires access over the public network, select the region closest to you to reduce latency.
    

## New users

If you are new to DataWorks, the following page appears, indicating that DataWorks is not yet activated in the current region. Click **Purchase Product Portfolio for Free**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5196594471/p944329.png)

1.  Configure the parameters on the purchase page.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Region**
    
    Select the region where you want to activate DataWorks.
    
    China (Shanghai)
    
    **DataWorks edition**
    
    Select the DataWorks edition you want to purchase.
    
    **Note**
    
    This tutorial uses the **Basic Edition** as an example. All editions support the features covered in this tutorial. For more information, see [DataWorks editions and features](/help/en/dataworks/user-guide/differences-among-dataworks-editions#title-7di-af7-zpy) to choose the edition that best suits your business needs.
    
    Basic Edition
    
2.  Click **Confirm Order and Pay** to complete the payment.
    

## Activated but expired

If you previously activated DataWorks in the **China (Shanghai)** region but the service has expired, the following prompt appears. Click **Purchase Edition**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5196594471/p944348.png)

1.  Configure the parameters on the purchase page.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Edition**
    
    Select the DataWorks edition you want to purchase.
    
    **Note**
    
    This tutorial uses the **Basic Edition** as an example. All editions support the features covered in this tutorial. For more information, see [DataWorks editions and features](/help/en/dataworks/user-guide/differences-among-dataworks-editions#title-7di-af7-zpy) to choose the edition that best suits your business needs.
    
    Basic Edition
    
    Region
    
    Select the region where you want to activate DataWorks.
    
    China (Shanghai)
    
2.  Click **Buy Now** to complete the payment.
    

**Important**

If you cannot find the DataWorks edition you purchased, try the following:

-   Wait a few minutes and refresh the page, as there may be a system delay.
    
-   Ensure the current region matches the one where you purchased the DataWorks edition. If the regions do not match, the edition will not be displayed.
    

## Already activated

If you have already activated DataWorks in the **China (Shanghai)** region, the DataWorks overview page appears. You can proceed to the next step.

### **Create workspace**

1.  Go to the [DataWorks Workspace List](https://dataworks.console.aliyun.com/workspace/list) page, switch to the **China (Shanghai)** region, and click **Create Workspace**.
    
2.  On the **Create Workspace** page, enter a custom **Workspace Name**, enable **Use Data Studio (New Version)**, and then click **Create Workspace**.
    
    **Note**
    
    Starting February 18, 2025, for an Alibaba Cloud account creating its first DataWorks workspace in the China (Shanghai) region, the new version of Data Studio is enabled by default. Consequently, the **Use Data Studio (New Version)** parameter is not displayed.
    

### **Set up resource group**

1.  Go to the [DataWorks Resource Group List](https://dataworks.console.aliyun.com/resource/list) page, switch to the **China (Shanghai)** region, and click **Create Resource Group**.
    
2.  On the resource group purchase page, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Resource group name**
    
    Enter a custom name.
    
    **VPC**, **vSwitch**
    
    Select an existing VPC and vSwitch. If none are available in the current region, click the console link in the parameter description to create them.
    
    **service-linked role**
    
    Follow the on-screen instructions to create the [AliyunServiceRoleForDataWorks service-linked role](/help/en/dataworks/user-guide/dataworks-service-linked-role-1).
    
3.  Click **Buy Now** to complete the payment.
    
4.  Go to the [DataWorks Resource Group List](https://dataworks.console.aliyun.com/resource/list) page, switch to the **China (Shanghai)** region, find the resource group you created, and click **Associate Workspace** in the **Actions** column.
    
5.  On the **Associate Workspace** page, find the DataWorks workspace you created and click **Associate** in its **Actions** column.
    

### **Enable public network access**

This tutorial uses public e-commerce test data that is accessed over the public network. By default, the resource group created in the previous step does not have public network access. You must configure an Internet NAT Gateway and add an Elastic IP Address (EIP) for the Virtual Private Cloud (VPC) associated with the resource group to enable public network access and retrieve the data.

1.  Sign in to the [VPC - Internet NAT Gateway console](https://vpc.console.alibabacloud.com/nat/cn-shanghai/nats). In the top navigation bar, switch to the **China (Shanghai)** region, and click **Create Internet NAT Gateway**. Configure the following parameters.
    
    **Note**
    
    You can keep the default values for parameters not listed in the table.
    
    **Parameter**
    
    **Value**
    
    **Region**
    
    China (Shanghai).
    
    **Network and zone**
    
    Select the VPC and vSwitch associated with the resource group.
    
    You can find the VPC and vSwitch on the [DataWorks Resource Group List](https://dataworks.console.aliyun.com/resource/list) page. Switch to the **China (Shanghai)** region, find the resource group, and click **Network Settings** in the **Actions** column. You can find the **VPC Binding** and **vSwitch** in the **Data Scheduling & Data Integration** section. For more information about VPC, see [What is a Virtual Private Cloud?](/help/en/vpc/what-is-vpc).
    
    **Network type**
    
    Internet NAT Gateway.
    
    **Elastic IP address (EIP)**
    
    Select to purchase a new EIP.
    
    **Create service-linked role**
    
    If you are creating an Internet NAT Gateway for the first time, create a service-linked role by clicking **Create service-linked role**.
    
2.  Click **Buy Now** to complete the payment and create the Internet NAT Gateway instance.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3319680571/p828277.png)
    
3.  After creating the Internet NAT Gateway instance, return to the console and create an SNAT entry for it.
    
    **Note**
    
    The resource group can access the public network through this VPC only after you configure an SNAT entry.
    
    1.  In the Actions column for the new instance, click **Manage**, and then click the **Configure SNAT** tab.
        
    2.  On the **SNAT Entry List**, click **Create SNAT Entry** and configure the following key parameters:
        
        **Parameter**
        
        **Value**
        
        SNAT entry
        
        Select **Specify VPC** to ensure that all resource groups within the VPC of the Internet NAT Gateway can access the public network using the configured EIP.
        
        Select EIP
        
        Select the EIP bound to the current Internet NAT Gateway instance.
        
        After you configure the parameters for the SNAT entry, click **OK** to create it.
        
    
    On the **SNAT Entry List**, when the **Status** of the new SNAT entry changes to **Available**, the VPC associated with the resource group has public network access.
    

### **Set up MaxCompute resource**

In this tutorial, you will create a MaxCompute project and associate it as a DataWorks compute resource. You will use this resource to ingest data and perform big data analytics.

1.  Go to the [DataWorks Workspace List](https://dataworks.console.aliyun.com/workspace/list) page, switch to the **China (Shanghai)** region, find the workspace you created, and click its name to go to the **Workspace Details** page.
    
2.  In the left-side navigation pane, click **Computing Resource**, then click **Associate Computing Resource** and select the **MaxCompute** type. Configure the following key parameters to create a MaxCompute project and associate it as a DataWorks compute resource.
    
    **Note**
    
    You can keep the default values for parameters not listed in the table.
    
    **Parameter**
    
    **Description**
    
    **MaxCompute project**
    
    From the drop-down list, click **Create** and configure the following parameters:
    
    -   **Project name**: Enter a custom name that is globally unique.
        
    -   **Billing method**: Select **Pay-as-you-go**.
        
        **Note**
        
        If **Pay-as-you-go** is not available, click **Activate** next to it to activate the MaxCompute service.
        
    -   **Default quota**: Select an existing quota from the drop-down list.
        
    
    **Default access identity**
    
    Select **Alibaba Cloud account**.
    
    **Computing resource instance name**
    
    You use this name to select the compute resource when running a task. Use a descriptive name, such as `MaxCompute_Source`.
    
3.  Click **OK**.
    

## **Procedure**

This tutorial demonstrates the core features of DataWorks through a practical example.

Imagine an e-commerce platform that stores its product and order information in a MySQL database. The goal is to periodically analyze this data and visualize a daily ranking of the best-selling product categories.

### **Step 1: Synchronize data**

#### **Create a data source**

In this step, create a MySQL **Data Source** to connect to the tutorial's source database.

**Note**

You do not need to prepare your own business data. DataWorks provides a sample dataset in a public MySQL database for this tutorial. Create a MySQL Data Source to connect to it.

1.  Go to the [DataWorks Management Center](https://dataworks.console.aliyun.com/product/ms_menu) page. Switch the region to **China East 2 (Shanghai)**, select your Workspace from the drop-down list, and click **Go to Management Center**.
    
2.  In the left navigation pane, click **Data Sources** to go to the **Data Source List** page. Click **Add Data Source**, select the MySQL type, and configure the Data Source parameters.
    
    **Note**
    
    -   You can keep the default values for parameters not mentioned in the table.
        
    -   When you add a data source for the first time, you need to complete **cross-service authorization**. Follow the on-screen prompts to grant the **AliyunDIDefaultRole** service-linked role.
        
    
    **Parameter**
    
    **Description**
    
    **Data Source Name**
    
    For this tutorial, enter **MySQL\_Source**.
    
    **Configuration Mode**
    
    Select **Connection String Mode**.
    
    **Endpoint**
    
    -   Host Address IP: `rm-bp1z69dodhh85z9qa.mysql.rds.aliyuncs.com`
        
    -   Port: `3306`
        
    
    **Important**
    
    The data in this tutorial is for hands-on practice with DataWorks. It is for testing purposes and is read-only within the Data Integration module.
    
    **Database Name**
    
    Enter `retail_e_commerce`.
    
    **Username**
    
    Enter `workshop`.
    
    **Password**
    
    Enter `workshop#2017`.
    
3.  In the **Connection Configuration** section, switch to the **Data Integration** tab. Locate the resource group bound to your workspace and click **Test Network Connectivity** in the **Connectivity Status** column.
    
    **Note**
    
    If the connectivity test for the MySQL data source fails, perform the following actions:
    
    -   Complete the follow-up steps in the connectivity diagnostics tool.
        
    -   Check if an Elastic IP address (EIP) is configured for the VPC bound to the resource group. The MySQL data source requires the resource group to have public network access. For more information, see [Enable public network access for a resource group](#2d0f5eeb03l6k).
        
    
4.  Click **Complete Creation**.
    

#### **Build a synchronization pipeline**

In this step, build a synchronization pipeline to sync e-commerce product and order data to MaxCompute tables for further processing.

1.  Click the ![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5196594471/p944454.png) icon in the upper-left corner and select **All Products** > **Data Development and O&M** > **DataStudio (Data Development)** to go to the DataStudio page.
    
2.  At the top of the page, switch to your Workspace. In the left navigation pane, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5196594471/p944456.png) to go to the DataStudio page.
    
3.  In the **Workspace Directories** section, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5196594471/p944455.png), select **Create Workflow**, and name it `dw_quickstart`.
    
4.  On the workflow canvas, drag a **Zero Load** node and two **Batch Synchronization** nodes from the left panel onto the canvas. Configure the **Batch Synchronization** nodes as follows:
    
    -   **Data Source Type**: `MySQL`
        
    -   **Data Destination Type**: `MaxCompute`
        
    -   **Specific Type**: **Batch Synchronization Node**
        
    
    The following table lists the node names and their functions for this tutorial:
    
    **Node type**
    
    **Node name**
    
    **Function**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4495663471/p919176.png)Zero Load
    
    `workshop`
    
    Serves as the Workflow's entry point to define a clear data flow. This is a **Dry-run** task that requires no code.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4495663471/p919186.png)Batch Synchronization Node
    
    `ods_item_info`
    
    Synchronizes the product information source table `item_info` from MySQL to the `ods_item_info` table in MaxCompute.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4495663471/p919186.png)Batch Synchronization Node
    
    `ods_trade_order`
    
    Synchronizes the order information source table `trade_order` from MySQL to the `ods_trade_order` table in MaxCompute.
    
    Connect the nodes by dragging and dropping, making the `workshop` node the upstream node for both Batch Synchronization nodes. The final result should look like this:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9956213771/CAEQUxiBgIDZoeW.4hkiIGUyNjg1OTBhZTA2YTQwODk4NTI2YzU1OWMwZDM0Y2Fl4940004_20250219181506.148.svg)
5.  Configure workflow scheduling.
    
    On the right side of the workflow canvas, click **Scheduling** and configure the parameters. The following table describes the key parameters for this tutorial. Use the default values for all other parameters.
    
    **Scheduling parameter**
    
    **Description**
    
    **Scheduling Parameters**
    
    Set scheduling parameters for the entire workflow. These can be used directly by the nodes within the workflow.
    
    For this tutorial, set it to `bizdate=$[yyyymmdd-1]` to get the previous day's date.
    
    **Note**
    
    DataWorks provides scheduling parameters that allow for dynamic values in your code. You can define variables in your SQL code by using the `**${variable_name}**` format and assign values to them in **Scheduling** > **Scheduling Parameters**. For supported parameter formats, see [Supported formats for scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters).
    
    **Scheduling Cycle**
    
    For this tutorial, set it to `Daily`.
    
    **Scheduling Time**
    
    For this tutorial, set the **Scheduling Time** to `00:30`. The workflow will start at `00:30` every day.
    
    **Scheduling Dependencies**
    
    This workflow has no upstream dependencies, so you can leave this unconfigured. For unified management, you can click **Use Workspace Root Node** to attach the workflow to the workspace root node.
    
    The workspace root node is named in the format `WorkspaceName_root`.
    

#### **Configure synchronization tasks**

##### **Initial node**

1.  On the workflow canvas, hover over the `workshop` node and click **Open Node**.
    
2.  On the right side of the `workshop` node editor, click **Scheduling** and configure the parameters. The following table describes the key parameters for this tutorial. You can keep the default values for any other parameters.
    
    **Scheduling parameter**
    
    **Description**
    
    **Scheduling Type**
    
    For this tutorial, set it to `Dry-run`.
    
    **Resource Group**
    
    For this tutorial, select the serverless resource group created in [Create a resource group and bind it to a workspace](#311a0fc68eqeg).
    
    **Node Dependency Configuration**
    
    Because `workshop` is the initial node and has no upstream dependencies, you can click **Use Workspace Root Node** to have the workflow triggered by the workspace root node.
    
    The workspace root node is named in the format `WorkspaceName_root`.
    
3.  Click **Save** in the node toolbar to save the node.
    

##### **Product information sync (ods\_item\_info)**

1.  On the workflow canvas, hover over the `ods_item_info` node and click **Open Node**.
    
2.  Configure the Data Source and Resource Group.
    
    **Parameter**
    
    **Description**
    
    **Source**
    
    Data Source: `MySQL_Source`.
    
    **Destination**
    
    Data Source: Select the MaxCompute computing resource bound in [Create and bind a MaxCompute computing resource](#a07436a832m0h). This example uses `MaxCompute_Source`.
    
    **Resource Group**
    
    Select the serverless resource group purchased in [Create a resource group and bind it to a workspace](#311a0fc68eqeg).
    
3.  Configure the synchronization settings.
    
    1.  **Configure the Data Source and destination**
        
        **Note**
        
        You can keep the default values for parameters not mentioned in the table.
        
        **Configuration area**
        
        **Parameter**
        
        **Description**
        
        **Data Source**
        
        **Table**
        
        `item_info`.
        
        **Data Destination**
        
        **Table**
        
        Click **Generate Destination Table Schema** to quickly create a MaxCompute table. Paste the following statement into the **Table Creation Statement** area and click **Create Table**. This table receives the product information from the data source.
        
        **Table Creation SQL**
        
        ```
        CREATE TABLE IF NOT EXISTS ods_item_info(
          `id`                              BIGINT COMMENT '',
          `cate_id`                         BIGINT COMMENT '',
          `cate_name`                       STRING COMMENT '',
          `commodity_id`                    BIGINT COMMENT '',
          `commodity_name`                  STRING COMMENT '',
          `desc_path`                       STRING COMMENT '',
          `duration`                        BIGINT COMMENT '',
          `features`                        STRING COMMENT '',
          `gmt_create`                      DATETIME COMMENT '',
          `gmt_modified`                    DATETIME COMMENT '',
          `is_deleted`                      BIGINT COMMENT '',
          `is_virtual`                      STRING COMMENT '',
          `item_id`                         BIGINT COMMENT '',
          `item_status`                     BIGINT COMMENT '',
          `last_offline_time`               DATETIME COMMENT '',
          `last_online_quantity`            BIGINT COMMENT '',
          `last_online_time`                DATETIME COMMENT '',
          `pict_url`                        STRING COMMENT '',
          `reserve_price`                   DECIMAL(38,18) COMMENT '',
          `secure_trade_ems_post_fee`       DECIMAL(38,18) COMMENT '',
          `secure_trade_fast_post_fee`      DECIMAL(38,18) COMMENT '',
          `secure_trade_ordinary_post_fee`  DECIMAL(38,18) COMMENT '',
          `shop_id`                         BIGINT COMMENT '',
          `shop_nick`                       STRING COMMENT '',
          `sub_title`                       STRING COMMENT '',
          `title`                           STRING COMMENT ''
        )
        COMMENT ''
        PARTITIONED BY (pt STRING) 
        lifecycle 36500;
        ```
        
        **Partition Information**
        
        For this tutorial, enter `${bizdate}`. This variable uses a constant value for testing and a dynamic value for scheduled runs. For more information on variable formats and configuration in DataStudio, see [Scheduling parameters](/help/en/dataworks/user-guide/scheduling-parameters-of-datastudio/).
        
    2.  Confirm the **Field Mapping** and **Channel Control**.
        
        DataWorks maps source fields to their corresponding destination fields. You can also configure settings like task concurrency and the Dirty Data Policy in the Channel Control panel on the right. For this tutorial, set the **Policy for Dirty Data Records** to **Disallow Dirty Data Records** and keep other settings at their defaults. For more information, see [Configure a batch synchronization node in wizard mode](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui).
        
4.  Click **Save** in the node toolbar to save the node.
    

##### **Order data sync (ods\_trade\_order)**

1.  On the workflow canvas, hover over the `ods_trade_order` node and click **Open Node**.
    
2.  Configure the Data Source and Resource Group.
    
    **Parameter**
    
    **Description**
    
    **Source**
    
    Data Source: `MySQL_Source`.
    
    **Destination**
    
    Data Source: Select the MaxCompute computing resource bound in [Create and bind a MaxCompute computing resource](#a07436a832m0h). This example uses `MaxCompute_Source`.
    
    **Resource Group**
    
    Select the serverless resource group purchased in [Create a resource group and bind it to a workspace](#311a0fc68eqeg).
    
3.  Click **Next** to configure the synchronization task.
    
    1.  **Configure the Data Source and destination**
        
        **Note**
        
        You can keep the default values for parameters not mentioned in the table.
        
        **Configuration area**
        
        **Parameter**
        
        **Description**
        
        **Data Source**
        
        **Table**
        
        `trade_order`
        
        **Data Destination**
        
        **Table**
        
        Click **Generate Destination Table Schema** to quickly create a MaxCompute table. Paste the following statement into the **Table Creation Statement** area and click **Create Table**. This table receives the product information from the data source.
        
        **Table Creation SQL**
        
        ```
        CREATE TABLE IF NOT EXISTS ods_trade_order(
          `id`                BIGINT COMMENT '',
          `biz_type`          BIGINT COMMENT '',
          `buy_amount`        BIGINT COMMENT '',
          `buyer_id`          BIGINT COMMENT '',
          `buyer_memo`        STRING COMMENT '',
          `buyer_nick`        STRING COMMENT '',
          `end_time`          DATETIME COMMENT '',
          `gmt_create`        DATETIME COMMENT '',
          `gmt_modified`      DATETIME COMMENT '',
          `ip`                STRING COMMENT '',
          `is_parent`         BIGINT COMMENT '',
          `is_sub`            BIGINT COMMENT '',
          `item_id`           BIGINT COMMENT '',
          `item_price`        DECIMAL(38,18) COMMENT '',
          `logistics_status`  BIGINT COMMENT '',
          `memo`              STRING COMMENT '',
          `parent_order_id`   BIGINT COMMENT '',
          `pay_status`        BIGINT COMMENT '',
          `pay_time`          DATETIME COMMENT '',
          `seller_memo`       STRING COMMENT '',
          `shop_id`           BIGINT COMMENT '',
          `status`            BIGINT COMMENT '',
          `sub_order_id`      BIGINT COMMENT '',
          `total_fee`         DECIMAL(38,18) COMMENT ''
        )
        COMMENT ''
        PARTITIONED BY (pt STRING) 
        lifecycle 36500;
        ```
        
        **Partition Information**
        
        For this tutorial, enter `${bizdate}`. This variable uses a constant value for testing and a dynamic value for scheduled runs. For more information on variable formats and configuration in DataStudio, see [Scheduling parameters](/help/en/dataworks/user-guide/scheduling-parameters-of-datastudio/).
        
    2.  Confirm the **Field Mapping** and **Channel Control**.
        
        DataWorks maps source fields to their corresponding destination fields. You can also configure settings like task concurrency and the Dirty Data Policy in the Channel Control panel on the right. For this tutorial, set the **Policy for Dirty Data Records** to **Disallow Dirty Data Records** and keep other settings at their defaults. For more information, see [Configure a batch synchronization node in wizard mode](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui).
        
4.  Click **Save** in the node toolbar to save the node.
    

### **Step 2: Clean and process data**

After synchronizing the data to MaxCompute, use the DataStudio module to clean, process, and analyze the `ods_item_info` and `ods_trade_order` tables to generate a daily ranking of best-selling product categories.

#### **Build a data processing pipeline**

1.  In the left navigation pane of DataStudio, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5316381471/p917206.png) to go to the DataStudio page. In the **Workspace Directories** section, find and click the workflow you created. On the workflow canvas, drag MaxCompute SQL nodes from the left panel and name them accordingly.
    
    The following table shows the example node names and their functions for this tutorial:
    
    **Node type**
    
    **Node name**
    
    **Function**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7400745471/p920712.png)MaxCompute SQL
    
    `dim_item_info`
    
    Processes product data from the `ods_item_info` table to create the `dim_item_info` Dimension Table.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7400745471/p920712.png)MaxCompute SQL
    
    `dwd_trade_order`
    
    Cleans and transforms transaction data from the `ods_trade_order` table to create the `dwd_trade_order` Fact Table.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7400745471/p920712.png)MaxCompute SQL
    
    `dws_daily_category_sales`
    
    Aggregates the cleaned and standardized detail data from the `dwd_trade_order` and `dim_item_info` tables to produce the daily product category sales summary table, `dws_daily_category_sales`.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7400745471/p920712.png)MaxCompute SQL
    
    `ads_top_selling_categories`
    
    Generates the daily top-selling product categories ranking table, `ads_top_selling_categories`, based on the `dws_daily_category_sales` table.
    
2.  Drag and drop to connect the nodes and configure their upstream dependencies. The final result should look like this:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9956213771/CAEQUxiBgICwqei.4hkiIGE2ODEwNDNmMjVmMDQ0OTRiZWNjYWFkZjM2YzMzODM54940006_20250225155244.226.svg)
    
    **Note**
    
    You can set [dependencies](/help/en/dataworks/user-guide/scenario-selection-based-on-consanguinity-configuration-scheduling-dependency#35c3ec1a33ag1) by either manually connecting nodes or enabling automatic parsing of the code within each node. This tutorial uses the manual connection method. For more information on automatic parsing, see [Automatic dependency parsing](/help/en/dataworks/user-guide/scenario-selection-based-on-consanguinity-configuration-scheduling-dependency#0bfa9216dcfre).
    

#### **Configure data processing nodes**

##### **dim\_item\_info node**

This node processes product dimension data from the `ods_item_info` table to produce the product information dimension table, `dim_item_info`.

1.  On the workflow canvas, hover over the `dim_item_info` node and click **Open Node**.
    
2.  Paste the following code into the node editor.
    
    ```
    CREATE TABLE IF NOT EXISTS dim_item_info (
        gmt_modified                   STRING COMMENT 'Product last modified date',
        gmt_create                     STRING COMMENT 'Product creation time',
        item_id                        BIGINT COMMENT 'Product numeric ID',
        title                          STRING COMMENT 'Product title',
        sub_title                      STRING COMMENT 'Product subtitle',
        pict_url                       STRING COMMENT 'URL of the main picture',
        desc_path                      STRING COMMENT 'Path of the product description',
        item_status                    BIGINT COMMENT 'Product status: 1 = approved, 0 = not approved',
        last_online_time               DATETIME COMMENT 'Most recent time the product went on sale',
        last_offline_time              DATETIME COMMENT 'End time of the sale, marks the end of a sales cycle (auction items only)',
        duration                       BIGINT COMMENT 'Validity period or sales cycle (either 7 or 14 days)',
        reserve_price                  DOUBLE COMMENT 'Current price',
        secure_trade_ordinary_post_fee DOUBLE COMMENT 'Standard mail fee',
        secure_trade_fast_post_fee     DOUBLE COMMENT 'Express delivery fee',
        secure_trade_ems_post_fee      DOUBLE COMMENT 'EMS mail fee',
        last_online_quantity           BIGINT COMMENT 'Stock quantity when the product was last listed',
        features                       STRING COMMENT 'Product features',
        cate_id                        BIGINT COMMENT 'ID of the product leaf category',
        cate_name                      STRING COMMENT 'Name of the product leaf category',
        commodity_id                   BIGINT COMMENT 'Product category ID',
        commodity_name                 STRING COMMENT 'Product category name',
        is_virtual                     STRING COMMENT 'Indicates if the product is virtual',
        shop_id                        BIGINT COMMENT 'Shop ID',
        shop_nick                      STRING COMMENT 'Shop nickname',
        is_deleted                     BIGINT COMMENT 'Indicates if the category is deleted'
    )
    COMMENT 'Product information dimension table'
    PARTITIONED BY (pt STRING COMMENT 'Business date, yyyymmdd')
    LIFECYCLE 365;
    
    
    -- Insert data into the dim_item_info table
    INSERT OVERWRITE TABLE dim_item_info PARTITION(pt='${bizdate}')
    SELECT
        gmt_create,
        gmt_modified,
        item_id,
        title,
        sub_title,
        pict_url,
        desc_path,
        item_status,
        last_online_time,
        last_offline_time,
        duration,
        cast(reserve_price as DOUBLE),
        cast(secure_trade_ordinary_post_fee as DOUBLE),
        cast(secure_trade_fast_post_fee as DOUBLE),
        cast(secure_trade_ems_post_fee as DOUBLE),
        last_online_quantity,
        features,
        cate_id,
        cate_name,
        commodity_id,
        commodity_name,
        is_virtual,
        shop_id,
        shop_nick,
        is_deleted
    FROM ods_item_info
    WHERE pt = '${bizdate}';
    ```
    
3.  Configure runtime parameters.
    
    On the right side of the MaxCompute SQL node editor, click **Running Configurations**:
    
    -   Configure the **Computing Resource** parameter by selecting the MaxCompute computing resource and its corresponding computing quota that you bound in [Create and bind a MaxCompute computing resource](#a07436a832m0h).
        
    -   Configure the Resource Group parameter by selecting the serverless resource group purchased in [Create a resource group and bind it to a workspace](#311a0fc68eqeg).
        
4.  Click **Save** in the node toolbar to save the node.
    

##### **dwd\_trade\_order node**

This node performs initial cleaning, transformation, and business logic processing on detailed transaction data from the `ods_trade_order` table to produce the transaction detail fact table, `dwd_trade_order`.

1.  On the workflow canvas, hover over the `dwd_trade_order` node and click **Open Node**.
    
2.  Paste the following code into the node editor.
    
    ```
    CREATE TABLE IF NOT EXISTS dwd_trade_order (
        id               BIGINT COMMENT 'Primary key: latest ID after deduplication',
        gmt_create       DATETIME COMMENT 'Creation time',
        gmt_modified     DATETIME COMMENT 'Modification time',
        sub_order_id     BIGINT COMMENT 'Sub-order ID',
        parent_order_id  BIGINT COMMENT 'Parent order ID',
        buyer_id         BIGINT COMMENT 'Buyer numeric ID',
        buyer_nick       STRING COMMENT 'Buyer nickname (empty string if null)',
        item_id          BIGINT COMMENT 'Product numeric ID',
        item_price       DECIMAL(38,18) COMMENT 'Product price, in cents',
        buy_amount       BIGINT COMMENT 'Purchase quantity',
        biz_type         BIGINT COMMENT 'Transaction type',
        memo             STRING COMMENT 'Memo (empty string if null)',
        pay_status       BIGINT COMMENT 'Payment status',
        logistics_status BIGINT COMMENT 'Logistics status',
        status           BIGINT COMMENT 'Status',
        seller_memo      STRING COMMENT 'Seller memo for the transaction',
        buyer_memo       STRING COMMENT 'Buyer memo for the transaction',
        clean_ip         STRING COMMENT 'Cleaned buyer IP; filters invalid formats',
        end_time         DATETIME COMMENT 'Transaction end time',
        pay_time         DATETIME COMMENT 'Payment time',
        is_sub           BIGINT COMMENT 'Indicates if it is a sub-order (1 for yes)',
        is_parent        BIGINT COMMENT 'Indicates if it is a parent order (1 for yes)',
        shop_id          BIGINT COMMENT 'Shop ID',
        total_fee        DECIMAL(38,18) COMMENT 'Sub-order fee after discounts and adjustments',
        is_large_order_flag BOOLEAN COMMENT 'Flag indicating if it is a large-value order'
    )
    COMMENT 'Transaction detail fact table, including initial cleaning and business logic'
    PARTITIONED BY (pt STRING COMMENT 'Business date, yyyymmdd')
    LIFECYCLE 365; -- Data lifecycle set to 365 days
    
    
    INSERT OVERWRITE TABLE dwd_trade_order PARTITION(pt='${bizdate}')
    SELECT
        id,
        gmt_create,
        gmt_modified,
        sub_order_id,
        parent_order_id,
        buyer_id,
        COALESCE(buyer_nick, '') AS buyer_nick, -- Handle null buyer_nick
        item_id,
        item_price,
        buy_amount,
        biz_type,
        COALESCE(memo, '') AS memo, -- Handle null memo
        pay_status,
        logistics_status,
        status,
        seller_memo,
        buyer_memo,
        CASE 
            WHEN ip LIKE '__.__.__.__' THEN NULL -- Filter invalid IP formats
            ELSE ip 
        END AS clean_ip,
        end_time,
        pay_time,
        is_sub,
        is_parent,
        shop_id,
        total_fee,
        CASE 
            WHEN total_fee >= 10000 THEN TRUE -- Assume an order over 10,000 cents is a large-value order
            ELSE FALSE 
        END AS is_large_order_flag -- Add business logic flag
    FROM (
        SELECT
            *,
            ROW_NUMBER() OVER(PARTITION BY buyer_id, item_id, gmt_create ORDER BY id DESC) AS rn -- Row number for deduplication
        FROM ods_trade_order
        WHERE pt = '${bizdate}'
    ) AS sub_query
    WHERE rn = 1;
    ```
    
3.  Configure runtime parameters.
    
    On the right side of the MaxCompute SQL node editor, click **Running Configurations**:
    
    -   Configure the **Computing Resource** parameter by selecting the MaxCompute computing resource and its corresponding computing quota that you bound in [Create and bind a MaxCompute computing resource](#a07436a832m0h).
        
    -   Configure the Resource Group parameter by selecting the serverless resource group purchased in [Create a resource group and bind it to a workspace](#311a0fc68eqeg).
        
4.  Click **Save** in the node toolbar to save the node.
    

##### **dws\_daily\_category\_sales node**

This node aggregates the cleaned and standardized detail data from the `dwd_trade_order` and `dim_item_info` tables to produce the daily product category sales summary table, `dws_daily_category_sales`.

1.  On the workflow canvas, hover over the `dws_daily_category_sales` node and click **Open Node**.
    
2.  Paste the following code into the node editor.
    
    ```
    CREATE TABLE IF NOT EXISTS dws_daily_category_sales (
        cate_id             BIGINT COMMENT 'ID of the product leaf category',
        cate_name           STRING COMMENT 'Name of the product leaf category',
        total_sales_amount  DECIMAL(38,18) COMMENT 'Total category sales amount, in cents',
        order_count         BIGINT COMMENT 'Order count'
    )
    COMMENT 'Daily product category sales summary table'
    PARTITIONED BY (pt STRING COMMENT 'Business date, yyyymmdd')
    LIFECYCLE 365;
    
    
    INSERT OVERWRITE TABLE dws_daily_category_sales PARTITION(pt='${bizdate}')
    SELECT
        i.cate_id,
        i.cate_name,
        SUM(t.total_fee) AS total_sales_amount,
        COUNT(DISTINCT t.id) AS order_count
    FROM dwd_trade_order t
    JOIN dim_item_info i ON t.item_id = i.item_id AND t.pt = i.pt
    WHERE t.pt = '${bizdate}'
    GROUP BY t.pt, i.cate_id, i.cate_name;
    ```
    
3.  Configure runtime parameters.
    
    On the right side of the MaxCompute SQL node editor, click **Running Configurations**:
    
    -   Configure the **Computing Resource** parameter by selecting the MaxCompute computing resource and its corresponding computing quota that you bound in [Create and bind a MaxCompute computing resource](#a07436a832m0h).
        
    -   Configure the Resource Group parameter by selecting the serverless resource group purchased in [Create a resource group and bind it to a workspace](#311a0fc68eqeg).
        
4.  Click **Save** in the node toolbar to save the node.
    

##### **ads\_top\_selling\_categories node**

This node generates the daily top-selling product categories ranking table, `ads_top_selling_categories`, based on the `dws_daily_category_sales` table.

1.  On the workflow canvas, hover over the `ads_top_selling_categories` node and click **Open Node**.
    
2.  Paste the following code into the node editor.
    
    ```
    CREATE TABLE IF NOT EXISTS ads_top_selling_categories (
        rank                BIGINT COMMENT 'Sales rank',
        cate_id             BIGINT COMMENT 'ID of the product leaf category',
        cate_name           STRING COMMENT 'Name of the product leaf category',
        total_sales_amount  DECIMAL(38,18) COMMENT 'Total sales amount for the product category, in cents',
        order_count         BIGINT COMMENT 'Number of orders'
    )
    COMMENT 'Daily ranking table of the best-selling product categories'
    PARTITIONED BY (pt STRING COMMENT 'Business date, yyyymmdd');
    
    
    INSERT OVERWRITE TABLE ads_top_selling_categories PARTITION(pt='${bizdate}')
    SELECT
        rank,
        cate_id,
        cate_name,
        total_sales_amount,
        order_count
    FROM (
        SELECT
            DENSE_RANK() OVER(ORDER BY total_sales_amount DESC) AS rank,
            cate_id,
            cate_name,
            total_sales_amount,
            order_count
        FROM (
            SELECT
                cate_id,
                cate_name,
                SUM(total_sales_amount) AS total_sales_amount,
                SUM(order_count) AS order_count
            FROM dws_daily_category_sales
            WHERE pt = '${bizdate}'
            GROUP BY cate_id, cate_name
        ) agg_sub
    ) agg_outer
    WHERE rank <= 10;
    ```
    
3.  Configure runtime parameters.
    
    On the right side of the MaxCompute SQL node editor, click **Running Configurations**:
    
    -   Configure the **Computing Resource** parameter by selecting the MaxCompute computing resource and its corresponding computing quota that you bound in [Create and bind a MaxCompute computing resource](#a07436a832m0h).
        
    -   Configure the Resource Group parameter by selecting the serverless resource group purchased in [Create a resource group and bind it to a workspace](#311a0fc68eqeg).
        
4.  Click **Save** in the node toolbar to save the node.
    

### **Step 3: Run and debug workflow**

After configuring the Workflow, run it to verify its configuration before deploying it to the Production Environment.

1.  In the left navigation pane of DataStudio, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5316381471/p917206.png) to go to the DataStudio page, then find the workflow you created in the **Workspace Directories** section.
    
2.  Click **Run** in the node toolbar. In the **Enter running parameters** dialog box, enter the previous day's date (for example, `20250416`).
    
    **Note**
    
    The workflow nodes use scheduling parameters for dynamic code. When debugging, you must assign a constant value to these parameters for testing.
    
3.  Click **OK** to go to the debugging run page.
    
4.  Wait for the run to complete. The expected result is as follows:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5196594471/p944653.png)
    

### **Step 4: Query and visualize data**

Now that the raw data is processed and aggregated into the `ads_top_selling_categories` table, you can query it to view the results.

1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0069373371/p874347.png) icon in the upper-left corner and click **All Products** > **Data Analysis** > **SQL Query**.
    
2.  Next to **My Files**, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3580464271/p821437.png)** > **Create File**. Enter a custom **File Name** and click **OK**.
    
3.  In the SQL Query editor, enter the following SQL statement.
    
    ```
    SELECT * FROM ads_top_selling_categories WHERE pt=${bizdate};
    ```
    
4.  In the upper-right corner, select the MaxCompute data source and click **OK**.
    
5.  Click the **Run** button at the top. On the **Cost Estimation** page, click **Run**.
    
6.  In the query results, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3650294471/p821445.png) to view the chart. You can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1760464271/p823639.png) icon in the upper-right corner of the chart to customize its style.
    
7.  You can also click **Save** in the upper-right corner of the chart to save it as a card. You can then view it by clicking **Card** (![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3650294471/p828378.png)) in the left navigation pane.
    

### **Step 5: Configure periodic scheduling**

To get daily updates, deploy the Workflow to the Production Environment for periodic execution.

**Note**

Scheduling parameters have already been configured for the workflow and its nodes during the data synchronization and processing steps. You only need to deploy the workflow to the production environment. For more information about scheduling configurations, see [Configure node scheduling](/help/en/dataworks/user-guide/schedule/).

1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0069373371/p874347.png) icon in the upper-left corner and click **All Products** > **Data Development and O&M** > **DataStudio (Data Development)**.
    
2.  In the left navigation pane of DataStudio, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5316381471/p917206.png) to go to the DataStudio page. Switch to the Workspace used for this tutorial, and then find the workflow you created in the **Workspace Directories** section.
    
3.  Click **Deploy** in the node toolbar. In the deployment panel, click **Start Deployment to Production**. Wait for the **Build Package** and **Prod Online Check** steps to complete, then click **Deploy**.
    
4.  After the **Prod Online** status changes to **Complete**, click **Perform O&M** to go to the Operation Center.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5196594471/p944686.png)
    
5.  In **Auto Triggered Node O&M** > **Auto Triggered Nodes**, you can see the periodic task for the Workflow (named `dw_quickstart` in this tutorial).
    
6.  To view the periodic tasks for the child nodes within the Workflow, right-click the workflow's periodic task and select **View Internal Tasks**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5196594471/p944693.png)
    
    The expected result is as follows:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3637594471/p944695.png)
    

## **Next steps**

-   For details about the operations and parameters of the modules covered in this tutorial, see [Data Integration](/help/en/dataworks/user-guide/overview-of-data-integration/), [Data Studio (New)](/help/en/dataworks/user-guide/overview-new-data-studio/), [Data Analysis](/help/en/dataworks/user-guide/data-analysis-overview/#title-vtr-xyh-bg1), and [Node scheduling configuration](/help/en/dataworks/user-guide/schedule/).
    
-   Besides the modules covered in this tutorial, DataWorks also supports other modules such as [Data Modeling](/help/en/dataworks/user-guide/data-modeling-10), [Data Quality](/help/en/dataworks/user-guide/data-quality/), [Data Security Guard](/help/en/dataworks/user-guide/data-security-guard/), and [DataService Studio](/help/en/dataworks/user-guide/data-services-overview/) to provide end-to-end data monitoring and O&M.
    
-   For more hands-on tutorials and use cases, see [More use cases and tutorials](/help/en/dataworks/user-guide/advanced-tutorial-guide).
    

## **Resource cleanup**

To clean up the resources you created in this tutorial, follow these steps:

1.  Undeploy the Auto Triggered Nodes.
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Operation Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Operation Center**.
        
    2.  Go to **Auto Triggered Node O&M** > **Auto Triggered Nodes**. Select the checkboxes for all the Auto Triggered Nodes you created. Do not undeploy the root node of the Workspace. Then, at the bottom of the page, click **Actions** > **Undeploy**.
        
2.  Delete the data development nodes and disassociate the MaxCompute Computing Resource.
    
    1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
        
    2.  In the left navigation pane of Data Studio, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5316381471/p917206.png) icon to open the **Data Development** page. In the **Workspace Directories** section, find and right-click the Workflow you created, and then click **Delete**.
        
    3.  In the left navigation pane, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5196594471/p944699.png)** > **Computing Resources**. Find the associated MaxCompute Computing Resource and click **Disassociate**. In the confirmation dialog box, select the checkbox and follow the on-screen instructions.
        
3.  Delete the MySQL Data Source.
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **More** > **Management Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Management Center**.
        
    2.  In the left navigation pane, click **Data Sources**. On the **Data Sources** page, find the MySQL Data Source you created, click **Delete** in the **Actions** column, and follow the on-screen instructions.
        
4.  Delete the MaxCompute project.
    
    Go to the [MaxCompute Project Management](https://maxcompute.console.alibabacloud.com/cn-shanghai/project-list) page. Find the MaxCompute project you created, click **Delete** in the **Actions** column, and follow the on-screen instructions.
    
5.  Delete the Internet NAT Gateway and release the Elastic IP Address (EIP).
    
    1.  Go to the [VPC - Internet NAT Gateway Console](https://vpc.console.alibabacloud.com/nat/cn-shanghai/nats). In the top menu bar, switch the Region to **China (Shanghai)**.
        
    2.  Find the Internet NAT Gateway you created and click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1760464271/p823731.png)** > **Delete** in the **Actions** column. In the confirmation dialog box, select the **Force Delete** checkbox, and then click **OK**.
        
    3.  In the left navigation pane, click **Access to Internet** > **Elastic IP Addresses**. Find the EIP you created and, in the **Actions** column, choose **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1760464271/p823731.png)** > **Instance Management** > **Release**. In the confirmation dialog box, click **OK**.
