This topic answers frequently asked questions about DataWorks exclusive resource groups.

-   Use cases for exclusive resource groups
    
    -   Use cases for exclusive resource groups for scheduling
        
    -   Use cases for exclusive resource groups for Data Integration
        
-   Network configurations for exclusive resource groups
    
    -   What are the prerequisites for an exclusive resource group to access data in a VPC environment?
        
    -   Check the network environment of a data source
        
    -   Add an exclusive resource group to a whitelist
        
-   Billing and management of exclusive resource groups
    
    -   Renew a resource group
        
    -   Scale out, scale in, or resize a resource group
        
-   Usage of exclusive resource groups
    
    -   Switch the scheduling resource group for a task
        
    -   Switch the resource group for a Data Integration task
        
    -   Associate or disassociate a resource group from a workspace
        
    -   If a synchronization task runs out of resources, should I scale out the scheduling resource group or the data integration resource group?
        

## **Use cases for exclusive resource groups for scheduling**

To access databases in a Virtual Private Cloud (VPC) environment or databases protected by a whitelist for your non-data integration tasks, use an Exclusive Resource Group for Scheduling. For more information, see [Use exclusive resource groups for scheduling](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-scheduling#task-2494507).

## **Use cases for exclusive resource groups for Data Integration**

To synchronize data from a database in a VPC environment, use an Exclusive Resource Group for Data Integration. For more information, see [Use exclusive resource groups for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration#task-2353828).

## **Switch the resource group for scheduling**

1.  Switch the resource group for test runs in Data Studio: To switch the scheduling resource group for a test run, select **Run with Parameters**.
    
    ![高级运行](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6724913371/p302264.png)
    
2.  Switch the scheduling resource group for production runs:
    
    -   Switch the scheduling resource group for production tasks in Data Studio
        
        Open the **Properties** tab for the node. In the **Resource Group** section, select the desired resource group. Then, submit and deploy the node. For more information, see [Configure resource properties](/help/en/dataworks/user-guide/configure-the-resource-property#task-2479302).
        
        ![资源组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0111702461/p99941.png)
        
    -   Modify the scheduling resource group for the task in the Operation Center.
        
        In the upper-left corner, click the ![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4180508571/p94809.png) icon and choose **All Products** > **Data Development and O&M** > **Operation Center**. Select **Auto Triggered Nodes**.
        
        **Note**
        
        Zero-load nodes do not consume resources, so you cannot modify their scheduling resource group.
        

## **Switch the resource group for Data Integration**

1.  Switch the data integration resource group for test runs in the development environment.
    
    In Data Studio, open an offline synchronization task and select **Resource Group Configuration** on the right panel.![独享数据集成资源组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0440315261/p267356.png)
    
    **Note**
    
    If the production environment also needs to use this resource group, submit and deploy the node after changing the resource group.
    
2.  Switch the resource group for Data Integration during a production run:
    
    In the upper-left corner, click the ![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4180508571/p94809.png) icon and choose **All Products** > **Data Development and O&M** > **Operation Center**. Select **Auto Triggered Nodes**.
    

## **Renew a resource group**

In the DataWorks console, go to the **Resource Groups** page. Find the resource group that you want to renew and click **Renew**.

**Note**

-   If a RAM user needs to perform these operations, see [How do I grant a RAM user the permissions to purchase related services?](/help/en/dataworks/user-permission-management#section-tnn-kvx-kfx)
    
-   To change the renewal method (manual or auto-renewal), change this setting on the Alibaba Cloud renewal management page. Find the resource group by its instance name. 
    

## **Scale out, scale in, or resize a resource group**

You can scale out, scale in, or resize a resource group in the DataWorks console.

**Note**

-   If a RAM user needs to perform these operations, see [How do I grant a RAM user the permissions to purchase related services?](/help/en/dataworks/user-permission-management#section-tnn-kvx-kfx)
    
-   Scaling out or scaling in increases or decreases the number of nodes of the same specification within the resource group.
    

## **What are the prerequisites for an exclusive resource group to access data in a VPC environment?**

To use an exclusive resource group in DataWorks to access a database, ensure the following:

-   When you purchase the exclusive resource group, you must select the availability zone where your data source is located and bind the resource group to a VPC.
    
-   The VPC and vSwitch bound to the exclusive resource group must be the same as the data source's VPC and vSwitch.
    
-   If the database has whitelist restrictions, add the EIP address of the exclusive resource group and the CIDR block of the VPC (or vSwitch) bound to the resource group to the database's whitelist and security group rules. For more information, see [Add a whitelist](/help/en/dataworks/user-guide/configure-an-ip-address-whitelist-1#concept-jz3-bl5-q2b) and [Appendix: Configure a security group for a self-managed database on an ECS instance](/help/en/dataworks/user-guide/configure-a-security-group-for-an-ecs-instance-where-a-self-managed-data-store-resides#concept-ec4-cj5-q2b).
    

## **Check the network environment of a data source**

-   To check the network environment of an RDS data source:
    
    1.  Log on to the [RDS console](https://rds.console.alibabacloud.com/).
        
    2.  On the **Instances** page, click the name of the target instance.
        
    3.  In the navigation pane on the left, click **Database Connection**.
        
    4.  Click **Switch vSwitch**.
        
    5.  In the **Switch vSwitch** dialog box, view the vSwitch where the data source is located.
        
-   To check the network environment of a self-managed data source on an ECS instance:
    
    1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com/?spm=5176.13643011.favorites.decs.3c901450j74y8i#/server/region/cn-shanghai).
        
    2.  On the **Instances** page, click the name of the target instance.
        
    3.  On the **Instance Details** page, view the **Configuration Information** of the instance.
        

## Add an exclusive resource group to a whitelist

-   **Access over an internal network**
    
    You must add the vSwitch CIDR block of the resource group to the data source's whitelist. To find the CIDR block, go to the **Resource Group** page in the [DataWorks Console](https://workbench.data.aliyun.com/console), and select the **Exclusive Resource Groups** tab. Click **Network Settings** for the target resource group to view its **vSwitch CIDR Block**.
    
-   **Access over the internet**
    
    -   **Serverless resource group**: Add the EIP associated with the VPC configuration of the serverless resource group to the data source's whitelist. In the [Internet NAT Gateway](https://vpc.console.alibabacloud.com/nat/) console, find the configured SNAT entry to get the public IP address bound to the corresponding vSwitch.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0684860271/p762132.png)
        
    -   **Exclusive Resource Group (legacy)**: Add the resource group's own EIP to the data source's whitelist. On the [Resource Group List](https://dataworks.console.aliyun.com/resource/list) page, click the **Exclusive Resource Groups** tab. In the **Actions** column for the target resource group, click **Details**. On the **Resource Group Details** page, find the **EIP Address** in the **Basic Information** section.
        

## **Associate or disassociate a resource group from a workspace**

Go to the resource list page in the [DataWorks Console](https://workbench.data.aliyun.com/console?#/resourcelist) to associate or disassociate a resource group.

**Note**

You must have workspace administrator permissions to perform this operation.

## **If a synchronization task runs out of resources, should I scale out the scheduling resource group or the data integration resource group?**

Scale out the exclusive resource group for Data Integration. You do not need to scale out the scheduling resource group.
