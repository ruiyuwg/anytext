This topic describes how to build a data warehouse for an enterprise based on AnalyticDB for MySQL, and use the data warehouse to perform O&M operations and manage metadata.

Before you perform operations in this topic, create a workspace. For more information, see [Create a workspace](/help/en/dataworks/user-guide/create-a-workspace#task-861928).

## Add an AnalyticDB for MySQL V3.0 data source

1.  Go to the Data Sources page.
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **More** > **Management Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Management Center**.
        
    2.  In the left-side navigation pane of the SettingCenter page, click **Data Sources**.
        
    
2.  In the **Add Data Source** dialog box, click **AnalyticDB for MySQL (V3.0)**.
    
3.  On the page that appears, configure the parameters. For more information, see [Add an AnalyticDB for MySQL 3.0 data source](/help/en/dataworks/add-an-analyticdb-for-mysql-3-0-data-source).
    
    **Note**
    
    -   You can use a serverless resource group (recommended) or an old-version exclusive resource group for scheduling to run an AnalyticDB for MySQL node to access an AnalyticDB for MySQL cluster that is deployed in a virtual private cloud (VPC). You cannot use another type of resource group to run an AnalyticDB for MySQL node to access an AnalyticDB for MySQL cluster that is deployed in a VPC. If you run an AnalyticDB for MySQL node on another type of resource group to access an AnalyticDB for MySQL cluster that is deployed in a VPC, the connection between the node and AnalyticDB for MySQL cluster may time out. For information about how to use a serverless resource group, see [Use serverless resource groups](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).
        
    -   If you add an AnalyticDB for MySQL V2.0 data source, you must use the AccessKey pair of the current Alibaba Cloud account or a RAM user for identity authentication.
        
    -   If you add an AnalyticDB for MySQL V3.0 data source, you must use the username and password of an AnalyticDB for MySQL V3.0 database for identity authentication. After you create an AnalyticDB for MySQL V3.0 database, you must first create the username and password that are used to connect to the database in the AnalyticDB for MySQL console.
        
    
4.  Find the desired resource group and click **Test Network Connectivity**.
    
5.  After the data source passes the network connectivity test, click **Complete Creation**.
    

## Configure the IP address whitelist of the AnalyticDB for MySQL V3.0 data source

An AnalyticDB for MySQL V3.0 data source uses an IP address whitelist to control client access. It allows access requests from a client only when the client information is included in the IP address whitelist.

## **Internal network environment**

During the network connectivity test, you can use the network connectivity diagnostic tool to associate the serverless resource group that is used to run nodes with the VPC in which the AnalyticDB for MySQL V3.0 cluster is deployed and add the CIDR block of the vSwitch with which the serverless resource group is associated to the IP address whitelist of the AnalyticDB for MySQL V3.0 data source. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/data-source-test-connectivity#9c0d16e866rir).

## Public network environment

Configure an [Internet NAT gateway](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet) and an elastic IP address (EIP) for the VPC with which the serverless resource group is associated. Then, add the EIP to the IP address whitelist of the AnalyticDB for MySQL V3.0 data source.

-   Configure an Internet NAT gateway and an EIP for the VPC with which the serverless resource group is associated.
    
    To allow DataWorks gateways to send requests to the AnalyticDB for MySQL V3.0 data source, you must configure an Internet NAT gateway and an EIP for the VPC with which the serverless resource group is associated. For more information, see [Overview of network connectivity solutions](/help/en/dataworks/user-guide/data-source-test-connectivity). You must add the EIP to the IP address whitelist of the AnalyticDB for MySQL V3.0 data source. If you added an AnalyticDB for MySQL V2.0 data source, you can skip the operations in this section.
    
-   Configure the IP address whitelist of the AnalyticDB for MySQL V3.0 data source.
    
    1.  Log on to the AnalyticDB for MySQL console. In the left-side navigation pane, click **Clusters**. Find the desired cluster and click the name of the cluster in the **Cluster ID/Description** column. The **details page of the cluster** appears. In the left-side navigation pane, choose **Cluster Management** > **Cluster Information**. In the **Data Security - Whitelist Settings** section of the Cluster Information page, configure a whitelist.
        
    2.  Click **Create Whitelist**. The **Create Whitelist** panel appears. Configure the Whitelist Name parameter based on your business requirements and enter the EIP configured for the VPC with which the serverless resource group is associated to the **IP Addresses** field. Click **OK**.
        

## Create a workflow

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select a desired workspace from the drop-down list and click **Go to Data Development**.
    
2.  In the top navigation bar of the DataStudio page, move the pointer over the **Create** icon and select **Create Workflow**. In the **Create workflow** dialog box, configure the **Workflow Name** and **Description** parameters.
    
3.  Click **Create**.
    

## Create a batch synchronization node

1.  Click the created workflow, right-click **Data Integration**, and then choose **Create Node** > **Offline synchronization**.
    
2.  In the **Create Node** dialog box, configure the **Name** parameter and click **Confirm**.
    
3.  Configure a **source** and a **destination** for the batch synchronization node.
    
4.  In the Field Mapping section, configure the field mappings between the source and the destination.
    
    The fields in the source on the left have a one-to-one mapping with the fields in the destination on the right. You can click **Add a row** to add a field. To remove an existing field, move the pointer over the field and click the **Remove** icon.
    
5.  Configure channel control policies.
    
    Configure the maximum transmission rate and dirty data check rules.
    
    **Parameter**
    
    **Description**
    
    **Task Expected Maximum Concurrency**
    
    The maximum number of parallel threads that the synchronization node can use to read data from the source or write data to the destination. You can configure the parallelism for the data synchronization node in the codeless UI.
    
    **Synchronization rate**
    
    Specifies whether to enable throttling. You can enable throttling and specify a maximum transmission rate to prevent heavy read workloads on the source. We recommend that you enable throttling and set the maximum transmission rate to an appropriate value based on the configurations of the source.
    
    **Policy for Dirty Data Records**
    
    The maximum number of dirty data records allowed.
    
    **Distributed Execution**
    
    Specifies whether to enable distributed execution for the batch synchronization node. If you use the shared resource group and a large number of nodes are run on the shared resource group, your node may need to wait for resources in the resource group. We recommend that you use a serverless resource group. For more information, see [Use serverless resource groups](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).
    
6.  Click the **Properties** tab in the right-side navigation pane to configure scheduling properties for the batch synchronization node.
    
7.  After the configuration is complete, click the ![保存](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8828477951/p103600.png) icon to **save** the configurations and then click the ![提交](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2272191371/p98393.png) icon to **commit** the node.
    

## Create a node for data development

1.  Click the created workflow, right-click **UserDefined**, and then choose **Create Node** > **AnalyticDB for MySQL**.
    
2.  In the **Create Node** dialog box, configure the **Name** parameter and click **Confirm**.
    
3.  On the configuration tab that appears, select the related data source and enter SQL statements based on the syntax supported by AnalyticDB for MySQL. You can write data manipulation language (DML) or data definition language (DDL) statements.
    
4.  Click the **Properties** tab in the right-side navigation pane to configure scheduling properties for the AnalyticDB for MySQL node.
    
5.  After the configuration is complete, click the **Save** icon to save the node settings. Then, click the **Run** icon to run the SQL statements you wrote.
    

## Perform O&M operations on data

After you commit and deploy the node, the node is periodically run based on the scheduling properties. You can click **Operation Center** in the upper-right corner of the configuration tab of the node to go to Operation Center and view the scheduling status of the node. For more information, see [Manage scheduled tasks](/help/en/dataworks/user-guide/view-and-manage-auto-triggered-nodes#task-1939610).

## Manage metadata

Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the left-side navigation pane, choose **Data Catalog** > **Data Map** to manage metadata. For more information, see [Overview](/help/en/dataworks/overview-datamap#concept-265529).
