This tutorial demonstrates how to use DataWorks for user profile analysis, covering data synchronization, manipulation, and quality monitoring. To successfully complete this tutorial, you must prepare the necessary EMR cluster, DataWorks workspace, and environment configuration.

## **Business background**

To develop effective business management strategies, you must obtain basic profile data of website users based on their activities on websites. The basic profile data includes the geographical and social attributes of the website users. You can analyze profile data based on time and location and perform refined operations on website traffic by using basic user profile data.

## **Prerequisites**

To perform the tutorial operations successfully, you must read the experiment introduction to fully understand the user persona analysis experiment's overall process.

## **Notes**

-   Basic user information and website access logs of users that are required for tests in this experiment are provided.
    
-   The data in this experiment can be used only for experimental operations in DataWorks, and all the data is manual mock data.
    
-   For data manipulation, this tutorial uses [Data Development (DataStudio) (Old Version)](/help/en/dataworks/user-guide/overview-26/#task-2117519).
    

## **EMR environment preparation**

### **Create an EMR cluster**

You need to create an EMR cluster for integration with DataWorks, enabling data processing tasks on the DataWorks platform. Key configurations for creating and setting up the EMR cluster include the following:

**Parameter**

**Value**

**Region**

**China (shanghai)**.

**Business Scenario**

**Data Lake**.

**Product Version**

Select the latest version.

**Optional Services**

Select components based on actual needs. The Hive component and OSS-HDFS component are mandatory in this case.

**Metadata**

**DLF Unified Metadata**.

**Cluster Storage Root Path**

Select the OSS-HDFS instance. If the drop-down list is empty, click **Create OSS-HDFS Instance**.

For step-by-step instructions on creating an EMR cluster, see [Create a Cluster](/help/en/emr/emr-on-ecs/getting-started/quick-start-for-emr#section-55q-jmm-3ts).

**Note**

DataWorks' support for EMR cluster configurations varies. Before creating an EMR cluster for EMR tasks in DataWorks, refer to [Best Practices for Configuring DataWorks on EMR Clusters](/help/en/dataworks/user-guide/best-practices-for-configuring-emr-clusters-used-in-dataworks#task-2237869).

## **DataWorks environment preparation**

Before you develop tasks in DataWorks, you must activate DataWorks. For more information, see [Prepare an environment](/help/en/dataworks/user-guide/prepare-an-environment/).

### **Step 1: Create a workspace**

If you already have a workspace in the China (Shanghai) region, you can use it and skip this step.

1.  Log in to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the upper left corner, switch the region to **China (Shanghai)**.
    
2.  Click **Workspace** in the left-side navigation pane to access the workspace list. Click **Create Workspace** to create a standard mode workspace, which isolates production and development environments. For details, see [Create a Workspace](/help/en/dataworks/user-guide/create-a-workspace).
    

### **Step 2: Create a serverless resource group**

This tutorial requires a serverless resource group for data synchronization and scheduling in DataWorks. You must purchase and prepare a serverless resource group.

1.  Purchase a serverless resource group.
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, click **Resource Group** to go to the Resource Groups page.
        
    2.  Click **Create Resource Group**. On the resource group purchase page, select **Region And Zone** as **China (Shanghai)**, name the **Resource Group**, and configure other parameters as prompted. Complete the purchase following the interface prompts. For billing details, see [Serverless Resource Group Billing](/help/en/dataworks/new-resource-group-overview).
        
        **Note**
        
        In this example, a serverless resource group that is deployed in the **China (Shanghai)** region is used. Note that serverless resource groups do not support cross-region operations.
        
2.  Configure the serverless resource group.
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, click **Resource Group** to go to the Resource Groups page.
        
    2.  Find the serverless resource group that you purchased, click **Associate Workspace** in the **Actions** column and then associate the resource group with the DataWorks workspace that you create as prompted.
        
    3.  Enable public network access for the resource group.
        
        The test data required for this tutorial must be retrieved via the public network. By default, the resource group established in the preceding step lacks **public network access capability**. To access the data, you need to set up a public NAT Gateway for the VPC associated with the resource group and assign an EIP to facilitate the connection to the public data network.
        
        1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/nat/cn-shanghai/nats) and go to the Internet NAT Gateway page. In the top navigation bar, select the **China (Shanghai)** region.
            
        2.  Click **Create Internet NAT Gateway**. Configure the parameters that are described in the following table.
            
            **Parameter**
            
            **Description**
            
            **Region**
            
            Select China (Shanghai).
            
            **VPC**
            
            Select the virtual private cloud (VPC) and vSwitch with which the resource group is associated.
            
            To obtain the VPC and vSwitch with which the resource group is associated, perform the following steps: Log on to the [DataWorks console](https://dataworks.console.aliyun.com/welcome). In the top navigation bar, select a region. In the left-side navigation pane, click **Resource Groups**. On the Resource Groups page, find the created resource group and click **Network Settings** in the **Actions** column. In the **Data Scheduling & Data Integration** section of the VPC Binding tab, view the **VPC** and **vSwitch** with which the resource group is associated. For more information about VPCs and vSwitches, see [What is a VPC?](/help/en/vpc/what-is-vpc)
            
            **Associate vSwitch**
            
            **Access Mode**
            
            Select SNAT-enabled Mode.
            
            **EIP**
            
            Select Purchase EIP.
            
            **Create Service-Linked Role**
            
            Click **Create Service-Linked Role** to create a service-linked role. If this is the first time you create an Internet NAT gateway, this step is required.
            
            **Note**
            
            Retain the default values for other parameters that are not described in the preceding table.
            
        3.  Click **Buy Now**. On the Confirm page, read the terms of service, select the Terms of Service check box, and then click **Activate Now**.
            

For more information about how to create and use a serverless resource group, see [Create and use a serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).

### **Step 3: Register the EMR cluster and complete resource group initialization**

To utilize the EMR cluster in DataWorks, you must register it with DataWorks.

1.  Navigate to the EMR cluster registration page.
    
    1.  Access the Management Center.
        
        Log in to the [DataWorks console](https://dataworks.console.aliyun.com/overview). After switching to the **China (Shanghai)** region, click **More** > **Management Center** in the left-side navigation pane. Select the corresponding workspace from the drop-down box and then click **Go To Management Center**.
        
    2.  In the left-side navigation pane of the SettingCenter page, click **Cluster Management**. On the **Cluster Management** page, click **Register Cluster**. In the Select Cluster Type dialog box, click **E-MapReduce**. The **Register EMR Cluster** page appears.
        
2.  Register the EMR cluster.
    
    On the **Register E-mapreduce Cluster** page, enter the cluster information. The key parameters to configure are as follows:
    
    **Parameter**
    
    **Value**
    
    **Cluster Alibaba Cloud Account**
    
    **Current Alibaba Cloud Account**.
    
    **Cluster Type**
    
    **Data Lake (datalake)**.
    
    **Default Access Identity**
    
    **Cluster Account: Hadoop**.
    
    **Pass Proxy User Information**
    
    **Pass**.
    
3.  Initialize the resource group.
    
    1.  On the **Cluster Management** page, locate the registered EMR cluster and click **Resource Group Initialization** in the upper right corner.
        
    2.  Click **Initialize** next to the resource group that requires initialization.
        
    3.  Once complete, click **Confirm**.
        
    
    **Important**
    
    Ensure the resource group initialization is successful. Unsuccessful initialization may cause task failures. If initialization fails, review the error message and perform network connectivity diagnostics as suggested.
    

For detailed instructions on registering an EMR cluster, see [Register an EMR Cluster to DataWorks](/help/en/dataworks/user-guide/register-emr-cluster-to-dataworks).

## **What to do next**

Now that your environments are prepared, you can proceed to the next tutorial. In the following tutorial, you will learn how to synchronize basic user information and website access log data to OSS, create tables, and query the synchronized data using EMR Hive nodes. For more details, see Synchronize data.
