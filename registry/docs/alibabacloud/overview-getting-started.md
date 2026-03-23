AnalyticDB for PostgreSQL is a cloud-native massively parallel processing (MPP) data warehouse for online analytical processing (OLAP) of large-scale data. AnalyticDB for PostgreSQL supports two instance modes: elastic storage mode and Serverless. Instances in elastic storage mode use an architecture that couples storage and compute. These instances support vertical scaling for compute nodes and horizontal scaling for storage. This topic describes how to create an instance in elastic storage mode and query data from it.

## Preparations

-   You must have an Alibaba Cloud account. If you do not have one, visit [the Alibaba Cloud official website](https://www.alibabacloud.com/en?spm=5176.28008736.J_4VYgf18xNlTAyFFbOuOQe.exp-location-0.19cd3e4dBwqwfU) to create one.
    
-   Authorize the service-linked role. If this is your first time using AnalyticDB for PostgreSQL, you must authorize it to create a service-linked role in the console. To do so, perform the following steps:
    
    1.  Log on to the [AnalyticDB for PostgreSQL console](https://gpdb.console.alibabacloud.com/gpdb/cn-hangzhou/list).
    2.  In the upper-right corner of the page, click **Create Instance**.
        
    3.  In the **Create Service Linked Role** dialog box, click **OK**.
        

## Billing

When you create an instance, you are charged for its compute and storage resources. For more information, see [Pricing](/help/en/analyticdb/analyticdb-for-postgresql/product-overview/pricing-1#concept-wpv-tnl-v2b).

### Free trial

Alibaba Cloud offers a free trial for instances that use elastic storage mode. If you are a new user of AnalyticDB for PostgreSQL, you can visit [Alibaba Cloud Free Tier](https://www.alibabacloud.com/free) to apply for one. If you are ineligible for a free trial, you can create an instance in the console by following the procedure in this topic.

## Procedure

### Create an instance

1.  Log on to the [AnalyticDB for PostgreSQL console](https://gpdb.console.alibabacloud.com/gpdb/cn-hangzhou/list).
2.  In the upper-right corner of the page, click **Create Instance** to open the buy page.
    
3.  On the buy page, configure the core parameters to quickly create an instance. You can leave the other parameters at their default settings. For more information about all parameters, see [Create an instance](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/create-an-instance-instance-management#task-r32-mgr-52b).
    
    **Parameter**
    
    **Description**
    
    **Example for this tutorial**
    
    **Product Type**
    
    -   **Subscription**: A prepaid method that is ideal for long-term use. It is more cost-effective than pay-as-you-go and offers larger discounts for longer subscription periods.
        
    -   **Pay-as-you-go**: A postpaid method with hourly billing that is ideal for short-term needs. Release the instance at any time to save costs.
        
    
    Pay-as-you-go
    
    **Region and Zone**
    
    The geographical location of the instance.
    
    This cannot be changed after purchase. Create the instance in the same region as your ECS instances to enable internal network communication.
    
    China (Hangzhou): China (Hangzhou) Zone J
    
    **Instance Resource Type**
    
    -   **Elastic Storage Mode**: Supports independent disk expansion and smooth online scale-out.
        
    -   **Serverless Pro**: Specify only the required compute resources without pre-allocating storage resources.
        
    
    Elastic Storage Mode
    
    **Engine Version**
    
    We recommend that you select **7.0 Standard Edition** for its expanded feature set. **6.0 Standard Edition** is also supported.
    
    7.0 Standard Edition
    
    **Instance Edition**
    
    -   **High-performance (Basic Edition)**: Suitable for most business analysis scenarios.
        
    -   **High-availability Edition**: Recommended for core business applications.
        
    
    High-performance (Basic Edition)
    
    **VPC**
    
    The ID of the VPC.
    
    To connect to an ECS instance in the same region over an internal network, select the same VPC as the ECS instance. You can select an existing VPC or [create a VPC and a vSwitch](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575) as prompted.
    
    vpc-xxxx
    
    **vSwitch**
    
    The vSwitch within the VPC. If no vSwitches are available, no vSwitch resources are available in the zone. You can switch to another zone or [create a vSwitch](/help/en/vpc/user-guide/create-and-manage-a-vpc#section-znz-rbv-vrx) in the current zone as prompted.
    
    vsw-xxxx
    
4.  Click **Buy Now**, confirm the order information, and click **Activate Now**.
    
5.  After you complete the payment, click **Management Console** to go to the instance list and view the new instance.
    
    **Note**
    
    The initialization of an AnalyticDB for PostgreSQL instance takes some time. Wait for the instance status to change to **Running** before you proceed with the next steps.
    

### (Optional) Configure a whitelist

**Note**

You can skip this step if you access the database only using Data Management (DMS). If you want to access the database from a local integrated development environment (IDE), you must configure an IP address whitelist. For more information about how to obtain the client IP address, see [Preparations](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/configure-an-ip-address-whitelist-user-guide#title-j5y-liu-5na).

1.  In the instance list, find the instance that you created and click its ID to open the instance details page.
    
2.  In the navigation pane on the left, click **Security Controls**.
    
3.  Click **Create Whitelist** and configure the following parameters:
    
    **Configuration**
    
    **Description**
    
    **Whitelist Name**
    
    The name of the new whitelist group. The name must meet the following requirements:
    
    -   Consist of lowercase letters, digits, and underscores (\_).
        
    -   Start with a lowercase letter and end with a lowercase letter or a digit.
        
    -   Be 2 to 32 characters in length.
        
    
    **IP Addresses**
    
    The IP addresses to add to the whitelist. Note the following:
    
    -   Separate multiple IP addresses with commas (,). You can add up to 999 unique IP addresses.
        
    -   The supported formats are specific IP addresses, such as 10.23.12.24, and [CIDR blocks](/help/en/vpc/faq-about-cidr-blocks#section-hlx-k34-tdb), such as 10.23.12.24/24. CIDR stands for Classless Inter-Domain Routing. The number after the slash (/) indicates the prefix length, which can be from 1 to 32.
        
    -   If you set the prefix length to 0, such as 0.0.0.0/0 or 127.0.0.1/0, all IP addresses can access the instance. This poses a high security risk. Use this setting with caution.
        
    -   The IP address 127.0.0.1 blocks access from all external IP addresses.
        
    
4.  Click **OK**.
    

### Create an initial account

**Important**

AnalyticDB for PostgreSQL provides two types of users:

-   Privileged user: The initial account is a privileged user with the RDS\_SUPERUSER role. This role grants all operational permissions on the database.
    
-   Regular user: By default, a regular user has no permissions. A privileged user, or another user with the GRANT permission, must explicitly grant permissions on database objects to the regular user. For more information about how to create a regular user, see [Create and manage users](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/create-and-manage-users#task-bhh-2mr-52b).
    

1.  In the navigation pane on the left, click **Account Management**.
    
2.  Click **Create Account**. In the **Create Account** window, enter an account name, set a password, and then click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Account**
    
    The name of the initial account.
    
    -   Contain lowercase letters, digits, and underscores (\_).
        
    -   Must start with a lowercase letter and end with a lowercase letter or a digit.
        
    -   Cannot start with gp.
        
    -   Must be 2 to 16 characters in length.
        
    
    **New Password** and **Confirm Password**
    
    The password of the initial account.
    
    -   Must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
        
    -   Special characters include `! @ # $ % ^ & * ( ) _ + - =`.
        
    -   Must be 8 to 32 characters in length.
        
    
    **Important**
    
    For security, change your password regularly and avoid reusing old ones.
    

### Load a sample dataset

You can load a sample dataset for testing. The loading process takes about 6 to 8 minutes.

1.  In the upper-right corner of the instance details page, choose **Sample Dataset** > **Load Dataset**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9495971671/p1020944.png)
    
2.  In the **Load Sample Dataset** dialog box, click **OK**.
    

### Connect to the database

This section describes how to connect to the database using DMS. For more information about how to connect to the database using other clients, see [Client connections](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/client-connection/#concept-ncj-gmr-52b).

1.  In the upper-right corner of the instance details page, click **Log On to Database**.
    
2.  On the **Log On to Instance** page, enter the **Database Account** and **Database Password**, and click **Logon**.
    

### Query data

1.  In the navigation pane on the left of the DMS console, click the target instance. If you are in simple mode, you must first switch to the **Database Instances** tab. Then, check whether the `adb_sampledata_tpch` database exists.
    
    If the item does not appear, click the refresh button to the right of the target instance and check again.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9495971671/p1020951.png)
    
2.  Double-click the `public` schema under the `adb_sampledata_tpch` database to open an SQL Console window. Then, run the following SQL statement to query data.
    
    ```
    SELECT count(*) FROM lineitem;
    ```
    
    The following result is returned:
    
    ```
    +-----------+
    | count(*)  |
    +-----------+
    |59986052   |
    +-----------+
    ```
    

## What to do next

After you complete this quick start, you can explore more features of AnalyticDB for PostgreSQL:

-   Data migration and synchronization: You can migrate data from self-managed databases or other cloud databases to AnalyticDB for PostgreSQL. For more information, see [Overview](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/overview-data-migration-and-synchronization).
    
-   Instance scaling: If your data volume or compute requirements grow, you can scale the compute nodes or storage capacity of your instance to meet higher performance demands. For more information, see [Scale an instance](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/node-configuration-change/).
