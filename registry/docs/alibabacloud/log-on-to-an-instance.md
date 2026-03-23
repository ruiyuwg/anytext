HoloWeb is a data processing and development tool for Hologres. This topic describes how to use HoloWeb to log on to a Hologres instance.

## Prerequisites

-   You have registered an Alibaba Cloud account.
    
-   You have completed identity verification.
    
-   You have activated Hologres. For more information, see [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#task-1918224).
    

## Log on to an Instance

1.  Log on to the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance).
    
2.  In the navigation pane on the left of the top menu bar, select the desired region.
    
3.  You can click **Go to HoloWeb** to go to the HoloWeb development page.
    
4.  You can log on to an instance in one of the following ways:
    
    -   **Log on using the pop-up dialog box**
        
        If you are not logged on to an instance, the **Connect to Instance** dialog box appears when you open HoloWeb. Configure the parameters and click **OK** to log on to the instance.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5417186271/p838149.png)
        
        **Parameter**
        
        **Description**
        
        Instance name
        
        Select an existing unlogged-on instance from the drop-down list.
        
        **Note**
        
        -   The unlogged-on instances list displays all instances that your root account has access privileges to in the current region.
            
        -   The Hologres engine instance that you enable automatically generates an unlogged-in instance of the VPC network type with an ![VPC network](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3229393261/p273444.png) icon. This instance is displayed in the list and cannot be edited or deleted.
            
        
        Select database
        
        Select one of the following methods:
        
        -   Log on to an existing database: Select the target database from the database name drop-down list.
            
        -   Create a new database: Enter a database name as needed and configure an access policy for the database.
            
        
        Database name
        
        -   When logging on to an existing database, select the target database from the drop-down list.
            
        -   When creating a new database, enter a database name as needed.
            
        
        Access policy
        
        This configuration item appears when you select to create a new database for the Select database parameter. Configure the corresponding access privileges for the database as needed. For more information about access policies, see:
        
        -   [SPM](/help/en/hologres/security-and-compliance/simple-permission-model/#concept-2449386)
            
        -   [SLPM](/help/en/hologres/security-and-compliance/schema-level-simple-permission-model/#concept-2021462)
            
        -   [standard PostgreSQL authorization model](/help/en/hologres/security-and-compliance/standard-postgresql-authorization-model#task-1917508)
            
        
    -   **Log on through an unlogged instance**
        
        In the list of instances to which you are not logged on, you can right-click the target instance and select **Connect to Instance**. Configure the parameters and click **OK** to log on to the instance. For more information about the parameter settings, see [Log on to instance parameter description](#table-rb8-wh8-1xs).![Log on to an instance](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3229393261/p273414.png)
        
    -   **Log on to a new instance**
        
        You can connect to instances in other regions by clicking **Metadata Management**, and then clicking **Instances**. When you configure parameters, select **Yes** for the Log on After Connection configuration item to log on to the instance. For more information about configuring new instances, see [Connect to Instance](/help/en/hologres/user-guide/connect-to-an-instance#section-8bp-vhc-dlg).
        
    
5.  The instances that you have logged on to appear in the **Logged-on Instances** list. You can right-click the target instance to perform management operations. For more information about managing instances, see [Manage Instances](/help/en/hologres/user-guide/manage-instances#task-2079639).
