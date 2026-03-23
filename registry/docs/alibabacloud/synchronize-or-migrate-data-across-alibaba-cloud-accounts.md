Data Transmission Service (DTS) allows you to configure a DTS task to replicate data across Alibaba Cloud accounts. This feature is suitable for scenarios such as resource migration and merging across Alibaba Cloud accounts and business architecture adjustment.

## Background

Before you configure a cross-account DTS task (select the **Replicate Data Across Alibaba Cloud Accounts** parameter to **Yes**), you must configure RAM authorization for the Alibaba Cloud account to which a database instance belongs (hereinafter referred to as Account A). You must specify the Alibaba Cloud account that is used to configure the DTS task (hereinafter referred to as Account B) as a trusted account and authorize Account B to access the cloud resources of Account A by using DTS.

### What is a cross-account DTS task?

A cross-account DTS task, also known as a DTS task across Alibaba Cloud accounts, is a DTS task where the source or destination database instance belongs to an Alibaba Cloud account different from the Alibaba Cloud Account that is used to create the DTS task.

### Scenarios

A cross-account DTS task is applicable to the following scenarios:

-   A cross-account DTS task where the source database does not belong to the Alibaba Cloud account that is used to create the DTS task
    
    Set the **Replicate Data Across Alibaba Cloud Accounts** parameter of the source database to **Yes**, and set the **Replicate Data Across Alibaba Cloud Accounts** parameter of the destination database to **No**.
    
-   A cross-account DTS task where the source database does not belong to the Alibaba Cloud account that is used to create the DTS task
    
    Set the **Replicate Data Across Alibaba Cloud Accounts** parameter of the source database to **No**, and set the **Replicate Data Across Alibaba Cloud Accounts** parameter of the destination database to **Yes**.
    
-   A cross-account DTS task where the source and destination databases do not belong to the Alibaba Cloud account that is used to create the DTS task
    
    Set the **Replicate Data Across Alibaba Cloud Accounts** parameter for the source database and destination database to **Yes**.
    

### Supported databases

A source or destination database instance that supports a cross-account DTS task is determined by only the **Database Type** and **Access Method**. The following table lists the database instances that support the cross-account DTS task.

**Note**

The setting of the **Replicate Data Across Alibaba Cloud Accounts** parameter for the source database does not affect the setting of the **Database Type** parameter of the destination database.

#### Source database

**Database type**

**Access method**

**MySQL**

**Alibaba Cloud Instance**, **Express Connect, VPN Gateway, or Smart Access Gateway**, **Self-managed Database on ECS**

**PolarDB for MySQL**

**Alibaba Cloud Instance**

**Tair/Redis**

**Alibaba Cloud Instance**, **Express Connect, VPN Gateway, or Smart Access Gateway**, **Self-managed Database on ECS**, **Cloud Enterprise Network (CEN)**, **Database Gateway**

**SQL Server**

**Alibaba Cloud Instance**, **Express Connect, VPN Gateway, or Smart Access Gateway**

**PostgreSQL**

**Alibaba Cloud Instance**, **Express Connect, VPN Gateway, or Smart Access Gateway**

**MongoDB**

**Alibaba Cloud Instance**, **Express Connect, VPN Gateway, or Smart Access Gateway**, **Self-managed Database on ECS**, **Cloud Enterprise Network (CEN)**

**Oracle**

**Express Connect, VPN Gateway, or Smart Access Gateway**

**PolarDB (Compatible with Oracle)**

**Alibaba Cloud Instance**, **Express Connect, VPN Gateway, or Smart Access Gateway**

**PolarDB for PostgreSQL**

**Alibaba Cloud Instance**

**PolarDB-X 1.0**

**Alibaba Cloud Instance**

**PolarDB-X 2.0**

**Alibaba Cloud Instance**

**DB2 for iSeries (AS/400)**

**Express Connect, VPN Gateway, or Smart Access Gateway**

**DB2 for LUW**

**Express Connect, VPN Gateway, or Smart Access Gateway**, **Self-managed Database on ECS**

**MariaDB**

**Alibaba Cloud Instance**, **Express Connect, VPN Gateway, or Smart Access Gateway**, **Self-managed Database on ECS**

**ApsaraDB OceanBase for MySQL**

**Alibaba Cloud Instance**, **Express Connect, VPN Gateway, or Smart Access Gateway**, **Self-managed Database on ECS**

**SLS**

**Alibaba Cloud Instance**

**AnalyticDB for MySQL 3.0**

**Alibaba Cloud Instance**

#### Destination database

**Database type**

**Access method**

**MySQL**

**Alibaba Cloud Instance**

**PolarDB for MySQL**

**Alibaba Cloud Instance**

**AnalyticDB for MySQL 3.0**

**Alibaba Cloud Instance**

**Tair/Redis**

**Alibaba Cloud Instance**

**ClickHouse**

**Alibaba Cloud Instance**

**SelectDB**

**Alibaba Cloud Instance**

**MongoDB**

**Alibaba Cloud Instance**

### Account information

In a cross-account DTS task, the use of the Alibaba Cloud account to which the source database and destination database belongs and that is used to create a DTS task is related to the across-account database.

**Note**

**Cross Alibaba Cloud account database**: When you configure a DTS task, set the **Replicate Data Across Alibaba Cloud Accounts** parameter to **Yes**. This parameter is used to determine the scenarios of a DTS task.

The following table describes how to decide the Alibaba Cloud accounts that you need to use in different stages of a cross-account DTS task. You must decide the across-account database that you want to use first. Find the row that meets your business requirements based on the **Across-account database** column. Then, you can view the Alibaba Cloud accounts that you need to use in different stages of the cross-account DTS task.

**Cross-Account Database**

**Alibaba Cloud account that is used to log on to the RAM console**

**Alibaba Cloud account that is specified in the trust policy**

**Alibaba Cloud Account that is used to create a DTS task**

**Alibaba Cloud account that is configured for a DTS task**

Source database

Alibaba Cloud account to which the source database belongs

Alibaba Cloud account to which the destination database belongs

Alibaba Cloud account to which the destination database belongs

Set the **Alibaba Cloud Account** parameter in the **Source Database** section to the Alibaba Cloud account to which the source database belongs.

Destination database

Alibaba Cloud account to which the destination database belongs

Alibaba Cloud account to which the source database belongs

Alibaba Cloud account to which the source database belongs

Set the **Alibaba Cloud Account** parameter in the **Destination Database** section to the Alibaba Cloud account to which the destination database belongs.

Source and destination databases

Alibaba Cloud account to which the source and destination databases belong

Specific Alibaba Cloud account

Specific Alibaba Cloud account

-   Set the **Alibaba Cloud Account** parameter in the **Source Database** section to the Alibaba Cloud account to which the source database belongs.
    
-   Set the **Alibaba Cloud Account** parameter in the **Destination Database** section to the Alibaba Cloud account to which the destination database belongs.
    

## Procedure

1.  Confirm the scenario of a cross-account DTS task.
    
    Select the **Replicate Data Across Alibaba Cloud Accounts** parameter to **Yes**.
    
2.  Obtain the ID of the Alibaba Cloud account.
    
    Obtain the ID of the Alibaba Cloud account to which a database instance belongs and that is used to create a DTS task.
    
3.  [Configure RAM authorization for cross-account DTS tasks](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization).
    
    Create a RAM role for the DTS task by using the ID of the Alibaba Cloud account to which the database instance belongs, grant permissions to the created RAM role, and edit the trust policy of the RAM role.
    
4.  Configure the cross-account DTS task.
    
    Configure the cross-account DTS task based on your business requirements.
    

## Prerequisites

-   The source or the source and destination instances are created.
    
-   DTS is authorized to access Alibaba Cloud resources of the Alibaba Cloud account to which a database instance belongs. For more information, see [Authorize DTS to access Alibaba Cloud resources](/help/en/dts/user-guide/authorize-dts-to-access-alibaba-cloud-resources).
    

## Usage notes

-   You can configure a two-way synchronization task across Alibaba Cloud accounts only between ApsaraDB RDS for MySQL instances, between ApsaraDB RDS for MySQL clusters, between Tair (Enterprise Edition) instances, between ApsaraDB for MongoDB replica set instances, or ApsaraDB for MongoDB sharded cluster instances.
    
-   The two-way synchronization task across Alibaba Cloud accounts is similar to the scenarios that synchronize data across Alibaba Cloud accounts. Both the source and destination instances do not belong to the Alibaba Cloud account that is used to create the data synchronization task. You must configure RAM authorization for the Alibaba Cloud accounts to which the source and destination instances belong.
    
-   You cannot use DTS to synchronize data between accounts of different infrastructures. For example, you cannot use DTS to synchronize data between an Alibaba Finance Cloud account and an Alibaba Gov Cloud account.
    
-   Log on to the RAM console by using your Alibaba Cloud account. If you grant permissions to a RAM role as a RAM user, an error message that indicates invalid permissions may appear when you configure a DTS task.
    

## Procedure

**Note**

In this example, a synchronization task is configured to show how to configure a DTS task across Alibaba Cloud accounts.

### **Scenario 1:** A cross-account DTS task where the source database does not **belong to the Alibaba Cloud account** that is used to create the DTS task

1.  Configure RAM authorization. For more information, see the [Scenario 1: A cross-account DTS task where the source database does not belong to the Alibaba Cloud account that is used to create the DTS task](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization#section-rfj-z3t-lhb) section in the topic of Configure RAM authorization for cross-account DTS tasks.
    
2.  Go to the **Configurations for Source and Destination Databases** page by using the Alibaba Cloud account to which the destination database belongs.
    
    1.  Use one of the following methods to go to the Data Synchronization page and select the region in which the data synchronization instance resides.
        
        #### DTS console
        
        1.  Log on to the [DTS console](https://dts.alibabacloud.com/).
            
        2.  In the left-side navigation pane, click **Data Synchronization**.
            
        3.  In the upper-left corner of the page, select the region in which the data synchronization instance resides.
            
        
        #### DMS console
        
        **Note**
        
        The actual operations may vary based on the mode and layout of the DMS console. For more information, see [Simple mode](/help/en/dms/simple-mode#concept-2103267) and [Customize the layout and style of the DMS console](/help/en/dms/configure-the-dms-console-based-on-your-business-requirements#task-2134256).
        
        1.  Log on to the [DMS console](https://dms.alibabacloud.com).
            
        2.  In the top navigation bar, move the pointer over **Data + AI** and choose **DTS (DTS)** > **Data Synchronization**.
            
        3.  From the drop-down list to the right of **Data Synchronization Tasks**, select the region in which the data synchronization instance resides.
            
        
    2.  Click **Create Task** to go to the task configuration page.
        
    
3.  Configure the source and destination databases. The following table describes the parameters.
    
    1.  Select the **Database Type**, **Access Method**, and **Instance Region** for the source database.
        
    2.  Select **Yes** for the **Replicate Data Across Alibaba Cloud Accounts** parameter.
        
        ![Cross-account](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9066063761/p508864.jpg)
        
    3.  In the **Alibaba Cloud Account** field, enter the ID of Alibaba Cloud account to which the source instance belongs.
        
        **Note**
        
        For more information, see [Obtain the ID of the Alibaba Cloud account to which the source database belongs](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization#140ae107e4y6d) in the Preparations section of the topic of Configure RAM authorization for cross-account DTS tasks.
        
    4.  In the **RAM Role Name** field, enter the name of the RAM role that is created by using the Alibaba Cloud account to which the source instance belongs. In this example, **ram-for-dts** is specified.
        
        **Important**
        
        -   Do not enter the RAM user name, the Alibaba Cloud Resource Name (ARN) of the RAM role or **AliyunDTSDefaultRole** role that is the default role in DTS.
            
        -   For more information about how to create a RAM role, see [Step 1: Create a RAM role](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization#e01867978bg70) in the section of "Scenario 1: A cross-account DTS task where the source database does not belong to the Alibaba Cloud account that is used to create the DTS task" of the topic "Configure RAM authorization for cross-account DTS tasks".
            
        
    
4.  Complete subsequent configurations based on your business requirements.
    

### Scenario 2: A cross-account DTS task where the destination database does not belong to the Alibaba Cloud account that is used to create the DTS task

1.  Configure RAM authorization. For more information, see the [Scenario 2: A cross-account DTS task where the destination database does not belong to the Alibaba Cloud account that is used to create the DTS task](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization#f3814e882fjt9) section in the topic of Configure RAM authorization for cross-account DTS tasks.
    
2.  Go to the **Configurations for Source and Destination Databases** page by using Account A that owns the source database.
    
    1.  Use one of the following methods to go to the Data Synchronization page and select the region in which the data synchronization instance resides.
        
        #### DTS console
        
        1.  Log on to the [DTS console](https://dts.alibabacloud.com/).
            
        2.  In the left-side navigation pane, click **Data Synchronization**.
            
        3.  In the upper-left corner of the page, select the region in which the data synchronization instance resides.
            
        
        #### DMS console
        
        **Note**
        
        The actual operations may vary based on the mode and layout of the DMS console. For more information, see [Simple mode](/help/en/dms/simple-mode#concept-2103267) and [Customize the layout and style of the DMS console](/help/en/dms/configure-the-dms-console-based-on-your-business-requirements#task-2134256).
        
        1.  Log on to the [DMS console](https://dms.alibabacloud.com).
            
        2.  In the top navigation bar, move the pointer over **Data + AI** and choose **DTS (DTS)** > **Data Synchronization**.
            
        3.  From the drop-down list to the right of **Data Synchronization Tasks**, select the region in which the data synchronization instance resides.
            
        
    2.  Click **Create Task** to go to the task configuration page.
        
    
3.  Configure the source and destination databases. The following table describes the parameters.
    
    1.  Configure the source database based on your business needs.
        
    2.  Select the **Database Type**, **Access Method**, and **Instance Region** for the destination database.
        
    3.  Select **Yes** for the **Replicate Data Across Alibaba Cloud Accounts** parameter.
        
        ![Cross-account](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9066063761/p508864.jpg)
        
    4.  In the **Alibaba Cloud Account** field, enter the ID of Alibaba Cloud account to which the destination instance belongs.
        
        **Note**
        
        For more information, see [Obtain the ID of the Alibaba Cloud account to which the destination database belongs](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization#ba7484110c6ju) in the Preparations section of the topic of Configure RAM authorization for cross-account DTS tasks.
        
    5.  In the **RAM Role Name** field, enter the name of the RAM role that is created by using the Alibaba Cloud account to which the destination instance belongs. In this example, **ram-for-dts** is specified.
        
        **Important**
        
        -   Do not enter the RAM user name, the Alibaba Cloud Resource Name (ARN) of the RAM role or **AliyunDTSDefaultRole** role that is the default role in DTS.
            
        -   For more information about how to create a RAM role, see [Step 1: Create a RAM role](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization#5e894a3449x9t) in the section of "Scenario 2: A cross-account DTS task where the destination database does not belong to the Alibaba Cloud account that is used to create the DTS task" of the topic "Configure RAM authorization for cross-account DTS tasks".
            
        
    
4.  Complete subsequent configurations based on your business requirements.
    

### **Scenario 3:** A cross-account DTS task where the source and destination databases do not belong to the Alibaba Cloud account that is used to create the DTS task

1.  Configure RAM authorization. For more information, see the [A cross-account DTS task where the source and destination databases do not belong to the Alibaba Cloud account that is used to create the DTS task](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization#2a35a8d747gx0) section in the topic of Configure RAM authorization for cross-account DTS tasks.
    
2.  Go to the **Configurations for Source and Destination Databases** page by using the ID of the Alibaba Cloud account that is used to create the DTS task.
    
    1.  Use one of the following methods to go to the Data Synchronization page and select the region in which the data synchronization instance resides.
        
        #### DTS console
        
        1.  Log on to the [DTS console](https://dts.alibabacloud.com/).
            
        2.  In the left-side navigation pane, click **Data Synchronization**.
            
        3.  In the upper-left corner of the page, select the region in which the data synchronization instance resides.
            
        
        #### DMS console
        
        **Note**
        
        The actual operations may vary based on the mode and layout of the DMS console. For more information, see [Simple mode](/help/en/dms/simple-mode#concept-2103267) and [Customize the layout and style of the DMS console](/help/en/dms/configure-the-dms-console-based-on-your-business-requirements#task-2134256).
        
        1.  Log on to the [DMS console](https://dms.alibabacloud.com).
            
        2.  In the top navigation bar, move the pointer over **Data + AI** and choose **DTS (DTS)** > **Data Synchronization**.
            
        3.  From the drop-down list to the right of **Data Synchronization Tasks**, select the region in which the data synchronization instance resides.
            
        
    2.  Click **Create Task** to go to the task configuration page.
        
    
3.  Configure the source and destination databases. The following table describes the parameters.
    
    1.  Select the **Database Type**, **Access Method**, and **Instance Region** for the source and destination databases.
        
    2.  Configure cross-account information for the source database.
        
        1.  Select **Yes** for the **Replicate Data Across Alibaba Cloud Accounts** parameter.
            
            ![Cross-account](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9066063761/p508864.jpg)
            
        2.  In the **Alibaba Cloud Account** field, enter the ID of Alibaba Cloud account to which the source instance belongs.
            
            **Note**
            
            For more information, see [Obtain the ID of the Alibaba Cloud account to which the source database belongs](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization#140ae107e4y6d) in the Preparations section of the topic of Configure RAM authorization for cross-account DTS tasks.
            
        3.  In the **RAM Role Name** field, enter the name of the RAM role that is created by using the Alibaba Cloud account to which the source instance belongs. In this example, **ram-for-dts** is specified.
            
            **Important**
            
            -   Do not enter the RAM user name, the Alibaba Cloud Resource Name (ARN) of the RAM role or **AliyunDTSDefaultRole** role that is the default role in DTS.
                
            -   For more information about how to create a RAM role, see [Create a RAM role](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization#2d5b429671z3e) in the section of "Scenario 3: A cross-account DTS task where the source and destination databases do not belong to the Alibaba Cloud account that is used to create the DTS task" of the topic "Configure RAM authorization for cross-account DTS tasks".
                
            
        
    3.  Configure cross-account information for the destination database.
        
        1.  Select **Yes** for the **Replicate Data Across Alibaba Cloud Accounts** parameter.
            
            ![Cross-account](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9066063761/p508864.jpg)
            
        2.  In the **Alibaba Cloud Account** field, enter the ID of Alibaba Cloud account to which the destination instance belongs.
            
            **Note**
            
            For more information, see [Obtain the ID of the Alibaba Cloud account to which the destination database belongs](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization#ba7484110c6ju) in the Preparations section of the topic of Configure RAM authorization for cross-account DTS tasks.
            
        3.  In the **RAM Role Name** field, enter the name of the RAM role that is created by using the Alibaba Cloud account to which the destination instance belongs. In this example, **ram-for-dts** is specified.
            
            **Important**
            
            -   Do not enter the RAM user name, the Alibaba Cloud Resource Name (ARN) of the RAM role or **AliyunDTSDefaultRole** role that is the default role in DTS.
                
            -   For more information about how to create a RAM role, see [Create a RAM role](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization#2d5b429671z3e) in the section of "Scenario 3: A cross-account DTS task where the source and destination databases do not belong to the Alibaba Cloud account that is used to create the DTS task" of the topic "Configure RAM authorization for cross-account DTS tasks".
                
            
        
    
4.  Complete subsequent configurations based on your business requirements.
    

## References

-   [Overview of data synchronization scenarios](/help/en/dts/user-guide/data-synchronization-scenarios)
    
-   [Overview of data migration scenarios](/help/en/dts/user-guide/overview-of-data-migration-scenarios)
    
-   [Overview of change tracking scenarios](/help/en/dts/user-guide/overview-of-change-tracking-scenarios)
    
-   [Configure a data verification task](/help/en/dts/user-guide/enable-data-verification)
    

## Common errors

**Error code**

**Error message**

**Cause**

**Solution**

DTS.Msg.Forbidden.AliyunUIDNotFound

`The current account **** has not logged into the DTS console, please use this account to log in to the DTS console, initialize the user information and try again.`

-   The specified Alibaba Cloud account is not used to log on to the DTS console.
    
-   The Alibaba Cloud account ID entered in the **Alibaba Cloud Account** field is invalid.
    

-   View the ID of the Alibaba Cloud account in the error message, log on to the DTS console by using the Alibaba Cloud account, and then try again.
    
-   Enter correct Alibaba Cloud account ID in the **Alibaba Cloud Account** field.
    
    **Note**
    
    For more information, see the [Preparations](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization#209196d247uwh) section in the topic of Configure RAM authorization for cross-account DTS tasks.
    

DTS.Msg.InvalidParameter.AliyunUidFormat

`The cloud account to which the source instance belongs should fill in the standard Alibaba Cloud UID`

The Alibaba Cloud account ID entered in the **Alibaba Cloud Account** field is invalid.

Enter correct Alibaba Cloud account ID in the **Alibaba Cloud Account** field.

**Note**

For more information, see the [Preparations](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization#209196d247uwh) section in the topic of Configure RAM authorization for cross-account DTS tasks.

AssumeRoleFail

`InvalidParameter : Invalid role arn format:acs:ram***`

You entered the ARN of the RAM role, and the permissions to the RAM role entered in the **RAM Role Name** field is invalid.

Enter correct RAM role name in the **RAM Role Name** field.

**Note**

For more information, see [Configure RAM authorization for cross-account DTS tasks](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization).

AssumeRoleFail

`EntityNotExist.Role : The role not exists`

-   The name of RAM role entered in the **RAM Role Name** field is invalid or does not exist.
    
-   The permissions to the RAM role entered in the **RAM Role Name** field is invalid.
    

-   Enter correct RAM role name in the **RAM Role Name** field.
    
-   Grant the required permissions to the RAM role entered in the **RAM Role Name** field.
    

**Note**

For more information, see [Configure RAM authorization for cross-account DTS tasks](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization).

AssumeRoleFail

`NoPermission : You are not authorized to do this action. You should be authorized by RAM.`

The permissions to the RAM role entered in the **RAM Role Name** field is invalid. The causes include but are not limited to the following:

-   The required permissions are not granted to the RAM role.
    
-   The trust policy of the RAM role is not edited.
    
-   The `<Alibaba Cloud account IDs` in the trust policy codes is not replaced.
    
-   The trust policy of the RAM role is not saved.
    

Grant the required permissions to the RAM role entered in the **RAM Role Name** field.

**Note**

For more information, see [Configure RAM authorization for cross-account DTS tasks](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization).

NoPermission

(Access Denied) You are not allowed to perform this action. Please contact your account administrators to grant permissions via RAM.

The required permissions are not granted to the RAM role entered in the **RAM Role Name** field or invalid permissions may occur.

Grant the required permissions to the RAM role entered in the **RAM Role Name** field.

**Note**

For more information, see [Configure RAM authorization for cross-account DTS tasks](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization).

Abnormal.RamCheckUserRole

You have not authorized the default role "AliyunDTSDefaultRole" of DTS. If your account has the write permissions on Resource Access Management (RAM), you can authorize the role in the RAM console by using the account. Otherwise, you must authorize the role in the RAM console by using the Alibaba Cloud account, and then refresh this page.

The default role name **AliyunDTSDefaultRole** is entered in the **RAM Role Name** field.

Enter correct RAM role name in the **RAM Role Name** field.

**Note**

For more information, see [Configure RAM authorization for cross-account DTS tasks](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization).
