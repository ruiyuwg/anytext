This tutorial describes how to create an ApsaraDB RDS for SQL Server instance in the console, configure database and account information, and connect to the instance using various methods to get started with ApsaraDB RDS for SQL Server.

If you are new to ApsaraDB RDS, we recommend that you first read about the [limits of ApsaraDB RDS](/help/en/rds/apsaradb-rds-for-sql-server/limits-of-apsaradb-rds-for-sql-server#concept-nrk-ntz-vdb).

## Prerequisites

If you use a Resource Access Management (RAM) user to create an RDS instance, the AliyunRDSFullAccess and AliyunBSSOrderAccess policies must be attached to the RAM user. For more information, see [Use RAM for resource authorization](/help/en/rds/use-ram-for-resource-authorization#reference-lnh-1mn-12b).

## **Costs**

When you create an ApsaraDB RDS for SQL Server instance, you are charged for the [instance type and storage](/help/en/rds/apsaradb-rds-for-sql-server/billable-items-billing-methods-and-pricing). The fees depend on parameters such as the billing method, instance edition, instance type, storage class, and storage capacity.

## 1\. Create an ApsaraDB RDS for SQL Server instance

1.  Go to the [ApsaraDB RDS instance creation page](https://rdsbuy.console.alibabacloud.com/newCreate/bards/mssql).
    
2.  Select a **Billing Method**.
    
    **Billing method**
    
    **Use case**
    
    **Benefits**
    
    **Subscription**
    
    Long-term workloads. Select **Subscription** and specify a **Subscription Duration**.
    
    Cost-effective. Offers significant discounts for longer commitments.
    
    **Pay-as-you-go**
    
    Short-term usage, testing, or unpredictable workloads. Select **Pay-as-you-go**.
    
    Flexible. Billed hourly. You can release the instance at any time to stop charges.
    
    **Note**
    
    You can start with **Pay-as-you-go** and [convert to subscription](/help/en/rds/apsaradb-rds-for-sql-server/switch-an-apsaradb-rds-for-sql-server-instance-from-pay-as-you-go-to-subscription) later once your requirements are finalized.
    
3.  Select a **Region**.
    
    **Important**
    
    The region cannot be changed after the instance is created.
    
    To minimize latency and enable connectivity over internal network, select the same Region as your ECS instances.
    
    **Note**
    
    -   To connect an ECS instance to an ApsaraDB RDS instance over an internal network, the ApsaraDB RDS instance and the ECS instance must be in the same region and VPC.
        
    -   To connect to an RDS instance from on-premises servers or local devices, select a region geographically closest to you. You can connect to the RDS instance using a [public endpoint](/help/en/rds/apsaradb-rds-for-sql-server/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-sql-server-instance) later.
        
    
4.  Select the **Database Engine**, **Edition**, and **Storage Type** of the database.
    
    1.  Select an **Database Engine** for the database.
        
        Select **Microsoft SQL Server**. Supported versions are 2012, 2016, 2017, 2019, and 2022.
        
    2.  Select **Edition**. Choose [editions](/help/en/rds/overview-11#undefined) based on your availability and scalability needs.
        
        **Edition**
        
        **Architecture**
        
        **Use case**
        
        **Basic Edition**
        
        -   Single-node. Compute is decoupled from storage.
            
        -   Does not support Read-only instances.
            
        
        Dev/Test environments or non-critical workloads. Cost-effective.
        
        **Note**
        
        It takes Longer recovery time during failures.
        
        **High-availability Edition** (Recommended)
        
        -   Primary + Secondary. Supports automatic failover. The secondary node is strictly for standby and is not accessible.
            
        -   Does not support Read-only instances.
            
        
        Production environments requiring high availability (HA). Covers ~80% of use cases.
        
        **Cluster Edition** (Recommended)
        
        Primary + Secondary (Readable)**.** Supports automatic failover. The secondary node is accessible for read operations.
        
        -   Workloads requiring HA and read-scaling. Supports adding 1 to 7 [read-only instances](/help/en/rds/apsaradb-rds-for-sql-server/create-a-read-only-apsaradb-rds-for-sql-server-instance#concept-ghp-wq5-vdb). but the read-only instances do not participate in primary node election or switchover.
            
        -   Flexible cost control.
            
        -   Supports readable secondary databases.
            
        
    3.  Select a ****Storage Type****.
        
        Recommend Enterprise SSDs (ESSDs) for high performance (See [Introduction to Storage Classes](/help/en/rds/apsaradb-rds-for-sql-server/storage-type/)). We recommend enabling **Cloud Disk Encryption** for enhanced data security (See [Disk Encryption](/help/en/rds/apsaradb-rds-for-sql-server/configure-disk-encryption-for-an-apsaradb-rds-for-sql-server-instance#concept-2054813)).
        
5.  Configure network settings. The **Network Type** is defaulted to **VPC**.
    
    1.  Select a **VPC**.
        
        Select the VPC where your application (ECS) resides.
        
        **Note**
        
        Instances must be in the **same VPC** to communicate over the internal network. They can reside in different vSwitches (Subnets) within that VPC.
        
    2.  Select whether to **Add to Whitelist**.
        
        **Yes** (recommended): Automatically adds the VPC CIDR block to the RDS whitelist, allowing internal access from ECS instances in this VPC.
        
        **Note**
        
        If you select **No**, you can [set the whitelist manually](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance#bc7c339fd03ey) after the instance is created.
        
6.  Select the zone, vSwitch, and **Deployment Method**.
    
    -   Zone
        
        A physical location within a region.
        
        -   Performance differences between zones in the same region are negligible.
            
        -   Colocate your ECS and RDS instances in the same zone to minimize network latency, though cross-zone latency is negligible for most workloads.
            
    -   vSwitch
        
        A logical sub-network within a VPC. Resources must be deployed into a specific vSwitch.
        
        Select an existing vSwitch or click **Create vSwitch** to create one. For more information, see [Create and manage a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch).
        
    -   **Deployment Method**
        
        -   **Multi-zone Deployment** (Recommended): The Primary and Secondary nodes are deployed in different zones.
            
            You must explicitly configure the zone and network settings for both nodes.
            
        -   **Single-zone Deployment**: Co-locates both nodes in the same zone. Offers minimal replication latency but lacks cross-zone redundancy.
            
            **Basic Edition** supports Single-zone deployment only.
            
        
        **Note**
        
        -   For instances with primary and secondary nodes, select **Multi-zone Deployment** to enable cross-zone disaster recovery.
            
        -   If a zone is sold out, select a different zone.
            
        
    
7.  Select an **Instance Type**.
    
    1.  Select a **Category**. Note that availability varies by Region and Edition; the console displays only the options currently available for your configuration.
        
        **Category**
        
        **Characteristics**
        
        **Best For**
        
        **General-purpose**
        
        Dedicated: memory and I/O
        
        Shared: CPU and storage
        
        Balanced workloads requiring cost-efficiency.
        
        **Dedicated**
        
        Dedicated: CPU, memory, storage, and I/O
        
        **Note**
        
        Resources are reserved exclusively for your instance.
        
        Production workloads requiring consistent, predictable performance.
        
        **Note**
        
        Not available for the Basic Edition.
        
        **Shared**
        
        Dedicated: memory and storage
        
        Shared: CPU
        
        Entry-level applications or development environments.
        
    2.  Select a specific instance type (CPU cores, memory, maximum connections, and other specifications).
        
        **Note**
        
        For a list of instance types, see [ApsaraDB RDS for SQL Server primary instance types](/help/en/rds/apsaradb-rds-for-sql-server/primary-apsaradb-rds-for-sql-server-instance-types#concept-2096545).
        
    
8.  Select a **Storage Capacity**.
    
    Define the storage size (increments of 5 GB). This capacity includes data, system files, transaction logs, and temporary files.
    
    **Note**
    
    Local SSD capacity is **tied to** the [instance type](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db). ESSDs and standard SSDs allow for independent capacity scaling.
    
9.  Optional. If you set the **Billing Method** parameter to **Subscription**, configure the **Subscription Duration** parameter in the upper-right corner of the page.
    
    Alibaba Cloud provides lower prices for longer subscription durations. You can move your pointer over **View Details** next to the **Price** to view the details.
    
10.  (Optional) Configure additional custom parameters.
     
     **Parameter**
     
     **Description**
     
     **Port**
     
     Custom database port (Default: 1433). Range: 1000–5999.
     
     **Release Protection**
     
     (**Pay-as-you-go** only) Prevents accidental termination of the instance. For more information, see [Enable or disable release protection for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/enable-or-disable-the-release-protection-feature-for-an-apsaradb-rds-for-sql-server-instance#task-2196190).
     
     **Resource Group**
     
     Logical grouping for permission management and billing.
     
     **Instance Name**
     
     Specify a custom instance name to identify the instance.
     
     **Character Set Collation Rule**
     
     Default: **Chinese\_PRC\_CI\_AS**. You can also [modify the character set collation](/help/en/rds/apsaradb-rds-for-sql-server/change-the-character-set-collation-and-time-zone-of-system-databases-on-an-apsaradb-rds-for-sql-server-instance) after the instance is created.
     
     **Tags**
     
     If you have many instances, you can add tags to them for categorized management. For more information, see [Filter instances by tag](/help/en/rds/apsaradb-rds-for-sql-server/use-tags-to-filter-apsaradb-rds-for-sql-server-instances).
     
     **Privileged Account**
     
     The superuser account. You can **Configure Now** or **Configure Later** ([manually create an account](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance#cd6081e252pdz) after the instance is created).
     
     **Important**
     
     Each instance supports only one privileged account. The privileged account cannot be deleted.
     
11.  In the upper-right corner of the page, select the **Quantity**.
     
     The default value is 1. You can purchase up to 20 instances at a time.
     
12.  Double check the order information. Click **Confirm Order** and complete the payment.
     
     **Note**
     
     -   For subscription instances, check **Enable Auto-renewal** to prevent business interruptions due to expirationn.
         
     -   If you purchase an instance on a monthly basis, the auto-renewal cycle is one month. If you purchase an instance on a yearly basis, the auto-renewal cycle is one year. The actual cycle depends on your order. You can disable auto-renewal at any time. For more information, see [Renew an expired resource](/help/en/user-center/renewal-guide-1) and [Auto-renewal](/help/en/rds/apsaradb-rds-for-sql-server/enable-auto-renewal-for-an-apsaradb-rds-for-sql-server-instance).
         
     
13.  View the instance.
     
     Navigate to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) list and select the appropriate region. Provisioning typically takes 1–10 minutes. Refresh the page to check the status.
     

## **2\. Create a database**

1.  Go to the [ApsaraDB RDS Instances](https://rds.console.alibabacloud.com/rdsList/basic) list. In the top navigation bar, select the region where you created the instance in Step 1. Then, click the ID of the target instance.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8852800371/p853703.png)
    
2.  In the left navigation pane, click **Database Management**, and then click the **Create Database** button.
    
3.  In the panel that appears, set the database parameters.
    
    For this tutorial, set the **Database Name** to `dbtest` and the **Supported Character Set** to Chinese\_PRC\_CI\_AS. Then, click **Create**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1321298371/p853729.png)
    
4.  You can view the newly created database on the **Database Management** page, or after you [connect to the SQL Server instance](#92d72b52d9jdo).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1321298371/p853732.png)
    

## **3\. Create an account**

1.  On the instance details page, click **Accounts** in the left navigation pane.
    
2.  Click **Password Policy** to set the password validity period for accounts and enhance account security.
    
    **Note**
    
    [Shared](/help/en/rds/product-overview/instance-families) and [Serverless instances](/help/en/rds/apsaradb-rds-for-sql-server/serverless/) do not support setting a [custom password policy](/help/en/rds/apsaradb-rds-for-sql-server/customize-account-password-policies). You can skip this step for these types of instances and proceed to the next one.
    
    **Click to view the configuration example for this tutorial**
    
    To configure passwords to be changed every 90 days and ensure that new passwords are used for at least 30 days, set **Maximum Password Age** to 90 days and **Minimum Password Age** to 30 days.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8852800371/p853842.png)
    
3.  Click **Create Account**. In the pop-up panel, set the account parameters.
    
    **Note**
    
    An error may occur if the account name is a duplicate or if you create accounts too frequently, such as before the previous account creation is complete. If this happens, check whether the account name is a duplicate or wait for the previous account creation to finish before you create the next account.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8852800371/p854052.png)
    
    1.  Enter a value for **Database Account**. For this tutorial, the value for **Database Account** is `testuser`.
        
    2.  Select an **Account Type**. RDS for SQL Server lets you create **Privileged Account**, **Standard Account**, and **Super Privileged Accounts**. This tutorial uses a **Privileged Account** as an example. For more information, see [Create other types of accounts](/help/en/rds/apsaradb-rds-for-sql-server/accounts-and-permissions-3/).
        
        **Important**
        
        The **first account** for an ApsaraDB RDS for SQL Server instance must be a privileged account, and each instance is **allowed to have only one privileged account**. This account has [read and write permissions](/help/en/rds/apsaradb-rds-for-sql-server/modify-account-permissions#1e306fbb283p9) for all databases on the instance. If the creation fails, you may already have a privileged account on your instance.
        
    3.  In the **New Password** and **Confirm Password** fields, enter your new password.
        
    4.  Apply the password policy set in Step 2 to this privileged account.
        
4.  Click **OK** to create your account.
    
5.  Refresh the **Accounts** page to view the newly created privileged account.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8852800371/p854121.png)
    

## **4\. Configure secure access to the instance**

If you plan to **log on to the database using the command line or a client**, you must first add the IP address of your ECS instance or on-premises device to the IP whitelist of the ApsaraDB RDS for SQL Server instance. Then, obtain the internal or public endpoint of the instance based on the access type to connect to the instance. If you plan to log on to the database using Alibaba Cloud DMS, you can proceed directly to Step 5.

### **4.1 Set an IP whitelist**

1.  On the instance details page, click **Whitelist and SecGroup** in the navigation pane on the left.
    
2.  Click **Create Whitelist**, enter a **Group Name**, and add the application server's IP address to the whitelist group.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8852800371/p854239.png)
    
    **Click to view how to obtain common IP addresses**
    
    **Scenario**
    
    **IP address to be obtained**
    
    **How to obtain**
    
    Requirements for internal network access
    
    Corresponding IP address of the container in the ACK cluster
    
    -   If the [container network plugin](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-between-terway-and-flannel) of the ACK cluster is Flannel, add the node IP address where the application is located.
        
    -   If the container network plugin of the ACK cluster is Terway, add the Pod IP address where the application is located.
        
    
    You can view the Pod IP address and node IP address on the [pod](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-pods) page of the target ACK cluster.
    
    Private IP address of the ECS instance
    
    1.  [Log on to the ECS console and go to the Instances page](https://ecs.console.alibabacloud.com/server/region/cn-hangzhou?spm=a2c4g.11186623.0.0.464857ef2mkKgn#/).
        
    2.  In the top navigation bar, select the region in which the ECS instance resides.
        
    3.  View the public IP address and private IP address of the ECS instance.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3363564471/p854144.png)
        
    
    You want to connect to the RDS instance from an ECS instance that is inaccessible over an internal network.
    
    Public IP address of the ECS instance
    
    You want to connect to the RDS instance from an on-premises device.
    
    Public IP address of the on-premises device
    
    On the on-premises device, use a search engine such as Google to search for IP.
    
    **Note**
    
    The IP address that is obtained using this method may be inaccurate. You can use [other methods](/help/en/rds/support/how-sql-server-determines-the-public-ip-address-of-an-external-server-or-client) to obtain the IP address.
    
3.  Click **OK** to save the whitelist configuration.
    
4.  You can refresh the **Whitelist and SecGroup** page to view the newly added whitelists.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8852800371/p854244.png)
    

### **4.2 Select a connection type**

Connection types are divided into internal network access and public network access. If your setup meets the conditions for internal network access, you must use the instance's internal endpoint for a remote connection. If your setup does not meet the conditions or you are using an on-premises device to access the ApsaraDB RDS for SQL Server instance, you must use the instance's public endpoint. The conditions for internal network access and the methods for obtaining internal and public endpoints are as follows:

**Important**

To access the instance over an internal network, your setup must meet the following conditions:

-   You are using an Alibaba Cloud server, and the server and the RDS instance are in the same region and use the same network type.
    
-   If the network type for both the server and the instance is VPC, they must have the same VPC ID.
    

**Scenario**

**RDS Instance Endpoint to Obtain**

**How to Obtain**

Meets the conditions for internal network access

RDS internal endpoint

On the instance details page, click **Database Connection** in the navigation pane on the left to view the instance address and port number.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8852800371/p854265.png)

**Note**

The public endpoint is displayed only after you click **Enable Public Endpoint**.

Accessing the RDS instance from an ECS instance, but the conditions for internal network access are not met

RDS public endpoint

Accessing the RDS instance from an on-premises device

## **5\. Connect to the ApsaraDB RDS for SQL Server instance**

You can log on to the SQL Server database directly using [Alibaba Cloud DMS](/help/en/dms/product-overview/what-is-dms), connect remotely using a client, or connect using a Java application.

## Method 1: Log on to the instance using DMS

> [Data Management (DMS)](/help/en/dms/product-overview/what-is-dms) is a one-stop data management platform that supports the entire data lifecycle. It provides features such as global data asset management, data governance, database design and development, data integration, data development, and data consumption. to help enterprises efficiently and securely extract data value and accelerate their digital transformation.

You can use DMS to quickly and conveniently log on to an ApsaraDB RDS for SQL Server instance for data management and use without needing to configure the instance's IP whitelist or select a connection type.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  Click **Log On to Database** to navigate to the DMS logon page.
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3385527861/p680316.png)
    
3.  In the **Log on to Instance** dialog box, enter the logon information and click **Log on**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8852800371/p854351.png)
    
    -   For **Access Mode**, select **Account and Password Logon** as an example.
        
    -   Enter the **Database Account** and **Database Password**. For this tutorial, use the privileged account `testuser` and a user-defined password.
        
    -   Select a **Control Mode**. In this example, select **Flexible Management**.
        
        **Note**
        
        -   **Flexible Management** is free of charge. **Stable Change** and **Security Collaboration** [incur fees](/help/en/dms/product-overview/pricing).
            
        -   Compared to the [control mode](/help/en/dms/product-overview/control-modes) of **Flexible Management**, **Stable Change** and **Security Collaboration** offer more features and enhanced database control. If you are evaluating ApsaraDB RDS for SQL Server, we recommend using the Flexible Management mode.
            
        
4.  After a successful logon, you can view the newly created database in the **Logged-in Instances** list on the left side of the DMS page. This tutorial uses the `dbtest` database as an example. You can also double-click another database to switch to it.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8852800371/p854357.png)
    
    **Note**
    
    If the instance exists but the target database is not found in the DMS logged-in instance list, it may be for one of the following reasons:
    
    -   **The logon account does not have permission to access the target database**: Go to the **Accounts** page on the RDS instance details page and click **Actions** in the **Change Permissions** column for the target account to [grant permissions](/help/en/rds/apsaradb-rds-for-sql-server/modify-account-permissions).
        
    -   **The directory cannot be displayed because metadata is not synchronized**: Hover the pointer over the instance to which the target database belongs. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8543800371/p854371.png) button to the right of the instance name to refresh the database list and display the target database.
        
    
5.  After you successfully log on to the SQL Server database in DMS, you can create databases, create tables, and query and change table data in the [SQL Console](/help/en/dms/manage-a-database-on-the-sqlconsole-tab).
    

## Method 2: Connect to the instance using the SSMS client

> [Microsoft SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?spm=a2c63.p38356.879954.7.15df54088yM5PK&view=sql-server-2017) is a graphical interface tool for managing and working with SQL Server. It can be used to connect to different SQL Server databases, including ApsaraDB RDS for SQL Server instances, on-premises SQL Server instances, or SQL Server instances in the cloud.

This tutorial uses `Microsoft SQL Server Management Studio 19.0 (SSMS)` as an example to show you how to connect to an ApsaraDB RDS for SQL Server instance using a client.

**Note**

-   We recommend that you download the latest version of the client to support all SQL Server versions.
    
-   Connecting to an instance using a client **requires you to preset an IP whitelist and obtain the instance's connection address as needed**.
    

1.  Open the local Microsoft SQL Server Management Studio 19.0 (SSMS) client.
    
2.  Select **Connect** > **Database Engine**.
    
3.  Enter the logon information in the **Connect to Server** dialog box.
    
    **Parameter**
    
    **Value in this tutorial**
    
    **Description**
    
    **Server name**
    
    rm-2ze\*\*\*\*.rds.aliyuncs.com,1433
    
    The endpoint and port number of the RDS instance. Enter the **Public Endpoint** and **Public Port** obtained when you enabled the public endpoint. Separate the endpoint and port number with a comma (,).
    
    **Authentication**
    
    SQL Server Authentication
    
    The authentication method for SQL Server.
    
    **Login Name**
    
    testuser
    
    Enter the account name of the RDS instance.
    
    **Password**
    
    Test\_pw123
    
    Enter the password for the RDS instance account.
    
4.  To connect to the instance, click **Connect**.
    
    After a successful connection, the database connection information is displayed on the left side of SSMS.
    

## Method 3: Connect to the instance using a **Java application**

The following section describes how to connect to an ApsaraDB RDS for SQL Server instance using a Java application with JDBC.

**Note**

Before you connect to the database, add the IP address of the application's runtime environment, such as an ECS instance or an on-premises device, to the IP whitelist of the ApsaraDB RDS for SQL Server instance. For more information, see [Set a whitelist](/help/en/rds/apsaradb-rds-for-sql-server/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-sql-server-instance).

1.  Add the Microsoft JDBC driver to your Maven project to access the SQL Server database.
    
    Method 1: Manually add the dependency to the `pom.xml` file of your Maven project
    
    **Note**
    
    -   We recommend that you choose the dependency version based on the corresponding Java version. For example, the `mssql-jdbc-12.2.0.jre8.jar` file in the 12.2.0 package should be used with Java 8 or later.
        
    -   To view the history of dependency versions, see the [official tutorial](https://central.sonatype.com/artifact/com.microsoft.sqlserver/mssql-jdbc/versions).
        
    
    ```
    <dependency>
      <groupId>com.microsoft.sqlserver</groupId>
      <artifactId>mssql-jdbc</artifactId>
      <version>12.2.0.jre8</version> <!-- Please check for the latest version number -->
    </dependency>
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7012378371/p903944.png)
    
    After you add the dependency, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7012378371/p904281.png). The dependency in the `pom.xml` file is automatically downloaded.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7012378371/p904280.png)
    
    Method 2: Manually download the JDBC and add it to the classpath of your Maven project
    
    1.  Download the driver that matches your Java version from [Microsoft JDBC Driver for SQL Server](https://docs.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server).
        
        > The Microsoft JDBC Driver for SQL Server is a Type 4 JDBC driver that provides database connectivity through the standard JDBC application programming interfaces (APIs) available on the Java platform. It can access SQL Server from any Java application, application server, or Java-enabled applet.
        
    2.  After you download and decompress the file, manually save the JAR file, such as `sqljdbc4.jar` or `sqljdbc.jar`, to your project.
        
        This tutorial uses `IntelliJ IDEA` as an example to demonstrate the method:
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7012378371/p904247.png)
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7012378371/p904250.png)
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7012378371/p904251.png)
        
    
2.  Write the sample code to connect to the SQL Server database using Java, as follows:
    
    Replace the endpoint, database name, username, password, and SQL command in the example with your actual information. For more information, see [View or change the endpoint and port number](/help/en/rds/apsaradb-rds-for-sql-server/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-sql-server-instance).
    
    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.SQLException;
    import java.sql.Statement;
    import java.sql.ResultSet;
    
    public class testMSSQLJDBC {
    
        public static void main(String[] args) {
            // Enter the database endpoint. Use the internal endpoint if the application is deployed on an ECS instance. Use the public endpoint if it is deployed locally or in another environment.
            String url = "jdbc:sqlserver://rm-2vc367d081200******.mssql.cn-chengdu.rds.aliyuncs.com:1433;"
                    + "database=YourDatabaseName;"
                    + "encrypt=true;"
                    + "trustServerCertificate=true;"
                    + "loginTimeout=30;";
            // The username and password. You must specify them if you do not use Windows Authentication.
            String username = "usernametest";
            String password = "Passwordtest!";
    
            // Create a connection object.
            Connection connection = null;
    
            try {
                // Load the JDBC driver.
                Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
                // Establish a connection to the SQL Server database.
                connection = DriverManager.getConnection(url, username, password);
                System.out.println("Connection successful!");
    
                // Create a Statement object to execute SQL commands.
                Statement statement = connection.createStatement();
                // Execute an SQL query. Replace the table name and column names as needed.
                String sql = "SELECT TOP 10 * FROM YourTableName";
                ResultSet resultSet = statement.executeQuery(sql);
    
                // Process the result set.
                while (resultSet.next()) {
                    System.out.println("Column 1: " + resultSet.getString("YourColumnName1"));
                    System.out.println("Column 2: " + resultSet.getString("YourColumnName2"));
                }
    
                // Close the result set.
                resultSet.close();
                // Close the Statement object.
                statement.close();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } catch (SQLException e) {
                e.printStackTrace();
            } finally {
                // Close the connection.
                if (connection != null) {
                    try {
                        connection.close();
                    } catch (SQLException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }
    ```
    
3.  Test whether the connection is successful.
    
    Save the above code as a `SqlServerConnection.java` file. Compile and run the program in the command line or an IDE. If the configuration is correct, the program outputs a result similar to the following, which indicates that the program has successfully connected to the SQL Server database.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7012378371/p903925.png)
    

## **Next steps**

-   [Tutorial: Migrate a self-managed SQL Server database to ApsaraDB RDS for SQL Server](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-from-a-user-created-sql-server-to-an-rds-sql-server)
    
-   [Advanced use of ApsaraDB RDS for SQL Server](/help/en/rds/apsaradb-rds-for-sql-server/follow-up-guide)
    

## Appendix: Quick start video guide

## **FAQ**

How do I view the total number of RDS instances within my Alibaba Cloud account?

Log on to the ApsaraDB RDS console. On the [Overview](https://rds.console.alibabacloud.com/dashboard/cn-hangzhou) page, you can view the total number of RDS instances that run different database engines within your Alibaba Cloud account. On this page, you can also view the regions in which the RDS instances are created and the number of running RDS instances in each region.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6913323171/p784057.png)

After I create an RDS instance, why am I unable to find the RDS instance?

**Possible cause**

**Description**

**Suggestion**

Incorrect region

The RDS instance does not reside in the region that you selected in the top navigation bar of the ApsaraDB RDS console.

In the top navigation bar, select the region in which the RDS instance resides.

Insufficient resources

The zone that you selected cannot provide sufficient resources.

If the RDS instance cannot be created, you can go to [the Orders page](https://billingnew.console.alibabacloud.com/?#/order/list/) in the Billing Management console to view the refunded fees.

Select a different zone and try again.

RAM policies that do not allow users to create unencrypted RDS instances

RAM policies that do not allow users to create unencrypted RDS instances are attached to a RAM user.

-   If you use the credentials of the RAM user to create an RDS instance that uses local disks, the RDS instance cannot be created. When you create an RDS instance that uses local disks, you cannot enable cloud disk encryption.
    
-   If you use the credentials of the RAM user to create an RDS instance that uses cloud disks and you do not enable cloud disk encryption for the RDS instance, the RDS instance cannot be created.
    

For more information, see [Use RAM policies to manage the permissions of RAM users on ApsaraDB RDS instances](/help/en/rds/apsaradb-rds-for-mysql/use-ram-policies-to-manage-the-permissions-of-ram-users-on-apsaradb-rds-instances#task-2158102).

When you create an RDS instance, select the standard SSD or ESSD storage type, select Cloud Disk Encryption, configure the Key parameter, and then try again.

## References

-   Create an RDS instance using an API: [CreateDBInstance](/help/en/rds/api-create-an-instance#doc-api-Rds-CreateDBInstance)
    
-   For more information about how to create other types of instances, see the following topics:
    
    -   [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb)
        
    -   [Create an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-an-apsaradb-rds-for-postgresql-instance#concept-kzn-qcg-wdb)
        
    -   [Create an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/create-an-apsaradb-rds-for-mariadb-instance#concept-wzp-ncf-vdb)
