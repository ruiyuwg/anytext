You can create an RDS instance in the ApsaraDB RDS console or by calling an API operation. This topic describes how to create an ApsaraDB RDS for PostgreSQL instance in the console.

## Prerequisites

If you use a RAM user to create an RDS instance, the RAM user must have the \`AliyunRDSFullAccess\` and \`AliyunBSSOrderAccess\` permissions. For more information about how to grant permissions, see [Grant permissions to a RAM user](/help/en/rds/use-ram-for-resource-authorization#reference-lnh-1mn-12b).

## Procedure

1.  [Go to RDS buy page](https://rdsbuy.console.alibabacloud.com/newCreate/rds/PostgreSQL).
    
2.  Select a **Billing Method**.
    
    **Billing method**
    
    **Use case**
    
    **Benefits**
    
    **Subscription**
    
    Long-term workloads. Select **Subscription** (one-time payment) and specify a **Subscription Duration**.
    
    Cost-effective. Offers significant discounts for longer commitments.
    
    **Pay-as-you-go**
    
    Short-term usage, testing, or unpredictable workloads. Select **Pay-as-you-go** (hourly billing).
    
    You can first create a pay-as-you-go instance. After you confirm that the instance meets your requirements, you can change its billing method to **subscription**.
    
    Flexible. Billed hourly. You can release the instance at any time to stop charges.
    
    **Serverless**
    
    For scenarios that require scheduled tasks, have fluctuating workloads, are fully managed, or need to be completely O&M-free, select **Serverless**.
    
    It breaks the fixed resource payment model and implements a pay-as-you-go model where resources are dynamically matched to workloads. This can save significant costs.
    
    **Important**
    
    -   For more information about Serverless and how to create a Serverless instance, see [Create an ApsaraDB RDS for PostgreSQL Serverless instance](/help/en/rds/apsaradb-rds-for-postgresql/create-a-serverless-apsaradb-rds-for-postgresql-instance).
        
    -   You can view the price in the lower-right corner of the page. The final price is displayed after you complete the following configuration steps.
        
    
3.  Select the **Region** where you want to create the RDS instance.
    
    -   We recommend that you create the RDS instance in the same region as your [ECS](/help/en/ecs/user-guide/what-is-ecs) instance. If they are in different regions, the ECS instance can access the RDS instance only over the internet, which prevents optimal performance.
        
        **Important**
        
        You cannot change the region of an RDS instance after it is created. Be sure to select the correct region.
        
    -   If you want to connect to the RDS instance from a device other than an ECS instance, such as a local server or a computer, create the RDS instance in a region that is close to the device. This reduces network latency. You can then connect to the RDS instance using its public endpoint.
        
    
4.  Select a **Databse Engine**, complete the **SLR Authorization**, and then select an **Edition**, **Product Type**, and **Storage Type**.
    
    1.  Select an **Engine**.
        
        Select **PostgreSQL**. Select the PostgreSQL version that you require.
        
        **Note**
        
        RDS for PostgreSQL (versions 15) supports T-SQL syntax via open-source Babelfish integration. Select  **Enable Babelfish** to allow SQL Server applications and clients to connect directly to this instance. For details, [Introduction to Babelfish](/help/en/doc-detail/428613.html#concept-2212689).
        
    2.  Complete **SLR Authorization**.
        
        Click **Authorize** to grant the `AliyunServiceRoleForRdsPgsqlOnEcs` service-linked role. This one-time, free authorization enables RDS to manage Elastic Network Interfaces (ENIs) for network connectivity.
        
    3.  Select an **Edition**.
        
        **Edition**
        
        **Architecture**
        
        **Use case**
        
        **Basic Edition**
        
        Single node.
        
        Cost-effective. Suitable for:
        
        -   Personal learning.
            
        -   Microsites.
            
        -   Dev/Test environments or non-critical workloads.
            
        
        **Note**
        
        It takes longer recovery time during failures.
        
        **High-availability Edition**
        
        One primary + One secondary. A classic high-availability architecture. You can add read-only nodes.
        
        High availability. Suitable for:
        
        -   Production environments for medium and large enterprises.
            
        -   Industries such as the Internet, IoT, retail e-commerce, logistics, and gaming.
            
        
        **Cluster Edition** (Recommended)
        
        One primary + Multiple secondary nodes. The secondary node is accessible for read operations.
        
        Workloads requiring HA and read-scaling. Suitable for:
        
        -   Production environments for medium and large enterprises.
            
        -   Industries such as new retailing, automobile manufacturing, and large enterprise ERP systems.
            
        
        **Note**
        
        -   The available editions depend on the region and database engine you select.
            
        -   For more information about each edition, see [Overview of editions](/help/en/rds/overview-11#undefined).
            
        
    4.  Select a **Product Type** (**Standard** or **Yitian**).
        
        **Note**
        
        -   This configuration is not applicable to **Basic Edition**.
            
        -   **High-availability Edition** and **Cluster Edition** instances support **Standard** and **Yitian**. For more information, see [Introduction to product types](/help/en/rds/product-overview/product-types).
            
        
    5.  Select a **Storage Type**.
        
        **Feature**
        
        **Premium ESSD (Recommended)**
        
        **ESSD**
        
        Scalability
        
        ★★★★★
        
        -   **Capacity:** Up to 64,000 GB.
            
        -   **Stability:** No connection transients during storage scale-out.
            
        -   **Speed:** Online upgrade and scale-out completed in seconds.
            
        -   **Automation:** Supports automatic storage expansion.
            
        
        ★★★★★
        
        -   **Capacity:** Up to 64,000 GB.
            
        -   **Stability:** No connection transients during storage scale-out.
            
        -   **Speed:** Online upgrade and scale-out completed in seconds.
            
        -   **Automation:** Supports automatic storage expansion.
            
        
        Performance
        
        ★★★★★★
        
        Built on the ESSD architecture, this type integrates advanced features including [IO performance burst](/help/en/rds/apsaradb-rds-for-postgresql/io-performance-burst), [Buffer Pool Extension (BPE)](/help/en/rds/apsaradb-rds-for-postgresql/buffer-pool-extension-bpe), [data archiving](/help/en/rds/apsaradb-rds-for-postgresql/data-archiving).
        
        ★★★★★
        
        -   PL1<PL2<PL3
            
        -   PL2 delivers up to 2x the IOPS and throughput of PL1.
            
        -   PL3 delivers up to 20x the IOPS and 11x the throughput of PL1.
            
        
        Backup
        
        ★★★★★
        
        -   Minute-level or second-level backup.
            
        -   Maximum frequency of once every 15 minutes.
            
        
        ★★★★★
        
        -   Minute-level or second-level backup.
            
        -   Maximum frequency of once every 15 minutes.
            
        
        **Note**
        
        -   The supported storage types depend on the product type and edition you select.
            
        -   For **ESSD** and **Premium ESSD**, you can select **Cloud Disk Encryption** to encrypt your data. For more information, see [Disk encryption](/help/en/rds/apsaradb-rds-for-postgresql/configure-disk-encryption-for-an-apsaradb-rds-for-postgresql-instance#task-1079262).
            
        -   For **Premium ESSD**, you can also enable [IO performance burst](/help/en/rds/apsaradb-rds-for-postgresql/io-performance-burst), [Buffer Pool Extension (BPE)](/help/en/rds/apsaradb-rds-for-postgresql/buffer-pool-extension-bpe), and [data archiving](/help/en/rds/apsaradb-rds-for-postgresql/data-archiving). For more information, see [Premium ESSD](/help/en/rds/apsaradb-rds-for-postgresql/introduction-to-universal-cloud-disk-of-apsaradb-rds-for-postgresql/).
            
        -   For more information, see [Introduction to storage types](/help/en/rds/apsaradb-rds-for-postgresql/storage-types-of-apsaradb-rds-for-postgresql).
            
        
5.  Configure the network for the instance. The **Network Type** is set to **VPC**.
    
    1.  Select a **VPC**.
        
        If you want to connect to the RDS instance from an ECS instance over an internal network, ensure that they are in the same region and use the same VPC.
        
        **Note**
        
        An ECS instance and an RDS instance can communicate over the internal network even if they are in the same VPC but use different vSwitches.
        
    2.  Select whether to **Add to Whitelist**.
        
        If you add the CIDR block, ECS instances in the same VPC can access the RDS instance.
        
        **Note**
        
        If you select **No**, you can manually configure the whitelist after the instance is created. For more information, see [Configure a whitelist](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance#concept-sfx-kdg-wdb).
        
6.  Select the zone, vSwitch, and **Deployment Method**.
    
    -   Zone:
        
        -   Performance differences between zones in the same region are negligible.
            
        -   Colocate your ECS and RDS instances in the same zone to minimize network latency, though cross-zone latency is negligible for most workloads.
            
    -   vSwitch
        
        Select an existing vSwitch or click **Create VSwitch** to create one. For more information, see [Create and manage a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch).
        
    -   **Deployment Method**
        
        -   **Multi-zone Deployment** (Recommended): The primary and secondary nodes are in different zones within the same region. This provides cross-zone disaster recovery.
            
            If you set **Deployment Method** to **Multi-zone Deployment**, you must select the **Zone and Network of Primary Node** and the **Zone and Network of Secondary Node**.
            
        -   **Single-zone Deployment**: Co-locates both nodes in the same zone.
            
            **Basic Edition** supports **Single-zone Deployment** only.
            
        
        **Note**
        
        -   For instances with primary and secondary nodes, select **Multi-zone Deployment** to enable cross-zone disaster recovery.
            
        -   If **Sold Out** is displayed in the upper-right corner of the target zone, select a different zone.
            
        
    
7.  Select an **Instance Type**.
    
    1.  Select a **Category** (General-purpose or Dedicated).
        
        **Category**
        
        **Characteristics**
        
        **Best for**
        
        **General-purpose Instance Types**
        
        Dedicated: memory and I/O
        
        Shared: CPU and storage
        
        Balanced workloads requiring cost-efficiency.
        
        **Dedicated Instance Types**
        
        Dedicated: CPU, memory, storage, and I/O
        
        **Note**
        
        Resources are reserved exclusively for your instance.
        
        Production workloads requiring consistent, predictable performance.
        
        **Note**
        
        Not available for the **Basic Edition**.
        
    2.  Select a specific instance type (number of CPU cores, memory, maximum connections, and maximum IOPS).
        
        -   For a test environment, we recommend an instance type with 2 CPU cores or more.
            
        -   For a production environment, we recommend an instance type with 4 CPU cores or more.
            
        
        **Note**
        
        For a list of instance types, see [ApsaraDB RDS for PostgreSQL instance types](/help/en/rds/apsaradb-rds-for-postgresql/specifications-1/).
        
    
8.  Select a **Storage Capacity** capacity.
    
    Storage limits are determined by the selected instance and storage types. Capacity must be provisioned in 5 GB increments.
    
9.  Optional. If you set the **Billing Method** parameter to **Subscription**, configure a **Subscription Duration**. Discounts vary by subscription duration. Hover over **View Details** next to the cost for a pricing breakdown.
    
10.  Configure other custom parameters. If you do not have special requirements, you can use the default values.
     
     **Parameter**
     
     **Description**
     
     **Port**
     
     You can initialize the port when you create an ApsaraDB RDS for PostgreSQL instance. The value can be from 1000 to 5999. The default value is 5432.
     
     **Parameter Template**
     
     You can specify a parameter template when you create an ApsaraDB RDS for PostgreSQL instance. If you do not select a template, the default system template is used. You can set this to a custom template. For more information about how to create a custom template, see [Use a parameter template](/help/en/rds/apsaradb-rds-for-postgresql/use-a-parameter-template-to-configure-the-parameters-of-apsaradb-rds-for-postgresql-instances#task-1715439).
     
     **Release Protection**
     
     If you set **Billing Method** to **Pay-as-you-go**, you can enable **Release Protection** for the pay-as-you-go instance to prevent it from being accidentally released. For more information, see [Enable or disable instance release protection](/help/en/rds/apsaradb-rds-for-postgresql/enable-or-disable-the-release-protection-feature-for-an-apsaradb-rds-for-postgresql-instance#concept-cxt-bpl-ggb).
     
     **Minor Engine Version Update Policy**
     
     -   You can set the minor version upgrade policy when you create an ApsaraDB RDS for PostgreSQL instance. The default value is **Automatic Upgrade**. If the minor engine version of your instance is earlier than the latest minor engine version, the system periodically sends proactive O&M tasks to upgrade the minor engine version. You will be notified of the tasks by email, and internal message. The automatic upgrade is performed within the [maintenance window](/help/en/rds/apsaradb-rds-for-postgresql/set-the-maintenance-window-of-an-apsaradb-rds-for-postgresql-instance) that you specify.
         
         **Note**
         
         After the instance is created, you can go to the **Basic Information** page of the instance to modify the minor version upgrade policy. For more information, see [Modify the automatic upgrade settings](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance#221836a005iqn).
         
     -   You can specify the minor engine version when you create an ApsaraDB RDS for PostgreSQL instance. If you do not specify a version, the latest AliPG minor engine version is used.
         
         The following is an example of a minor version number:
         
         ```
         rds_postgres_1400_20220830_14.4
         ```
         
         The fields are described as follows:
         
         -   `rds`: RDS instance.
             
         -   `postgres`: PostgreSQL database.
             
         -   `1400`: The major version of PostgreSQL is 14.
             
         -   `20220830`: The AliPG minor engine version. The supported engine versions are subject to what is displayed on the purchase page. For more information about each minor version, see [AliPG minor engine version release notes (PostgreSQL 14 to 17)](/help/en/rds/apsaradb-rds-for-postgresql/release-notes-for-alipg#concept-1236825).
             
         -   `14.4`: The PostgreSQL community minor version number.
             
         
         **Note**
         
         If you select **Enable Babelfish** in the **Basic Resources** step, the following is an example of the minor version number of the ApsaraDB RDS for PostgreSQL instance:
         
         ```
         rds_postgres_1400_20220630_babelfish_14.4
         ```
         
     
     **Resource Group**
     
     Select a default or custom resource group to facilitate instance management.
     
     **Babelfish Migration Mode**
     
     You need to configure the following parameters only if you select **Enable Babelfish**.
     
     -   **Babelfish Migration Mode**: The data migration mode after you enable Babelfish.
         
         -   **single-db**: You can create only a single SQL Server database in the Babelfish for PostgreSQL instance, and it is created in the regular PostgreSQL mode.
             
         -   **multi-db**: You can create multiple SQL Server databases. Each database is created in a different PostgreSQL mode (<database\_name>\_<schema\_name>) to avoid name conflicts.
             
         
         **Note**
         
         For information about how to select a mode, see [Introduction to migration modes](/help/en/doc-detail/428613.html#section-x8n-ub1-ny3).
         
     -   **Initial Account**: Configure the Babelfish management account, which is used to access the RDS instance from the TDS port.
         
         **Important**
         
         This is a privileged account and cannot be deleted after it is created.
         
     -   **Password**: The password for the Babelfish management account.
         
         **Note**
         
         You can change the password after the instance is created. For more information, see [Reset the password](/help/en/rds/apsaradb-rds-for-postgresql/reset-the-password-of-an-account-on-an-apsaradb-rds-for-postgresql-instance#concept-ohx-bbp-ydb).
         
     
     **Time Zone**
     
     -   You can select a time zone when you purchase a primary instance. You cannot select a time zone for a read-only instance. A read-only instance inherits the time zone of its primary instance.
         
     -   Named time zones are supported, but UTC time zones are not. For more information about named time zones, see [List of common named time zones for ApsaraDB RDS for PostgreSQL instances](/help/en/rds/developer-reference/time-zones#section-zsl-6az-ays).
         
     -   If you do not configure this parameter, the system selects a default time zone based on the region where you purchase the instance. For information about the mappings between regions and default named time zones, see [Mappings between regions and default named time zones for ApsaraDB RDS for PostgreSQL instances](/help/en/rds/developer-reference/time-zones#section-330-qk5-nba).
         
     
     ****Instance Name****
     
     Customize the instance name for easy identification.
     
     **Tags**
     
     If you have many instances, you can attach tags to them for classification and management. For more information, see [Filter instances by tag](/help/en/rds/apsaradb-rds-for-postgresql/use-tags-to-filter-apsaradb-rds-for-mysql-instances-2).
     
     **Privileged Account**
     
     You can create a privileged account when you create an ApsaraDB RDS for PostgreSQL instance. If you select **Configure Later**, you can manually create the account after the instance is created.
     
     **Note**
     
     For more information about privileged accounts and how to manually create one, see [Create a database and an account](/help/en/rds/apsaradb-rds-for-postgresql/create-a-database-and-an-account-on-an-apsaradb-rds-for-postgresql-instance#concept-njz-1gg-wdb).
     
11.  In the upper-right corner of the page, set the number of instances to purchase.
     
     The default value is 1. You can purchase up to 20 instances at a time.
     
12.  Review the order information, quantity, and subscription duration (for subscription instances only). Click **Confirm Order**, and then complete the payment. A message is displayed in the console indicating that the instance is successfully created.
     
     **Note**
     
     For subscription instances, we recommend that you **Enable Auto-renewal** to prevent business interruptions caused by an expired subscription.
     
     Auto-renewal aligns with the subscription term (monthly or yearly) and can be disabled at any time. For details, see [Renew an expired resource](/help/en/user-center/renewal-guide-1) and [Auto-renewal](/help/en/rds/apsaradb-rds-for-postgresql/enable-auto-renewal-for-an-apsaradb-rds-for-postgresql-instance).
     
13.  View the instance.
     
     Go to the [Instances page](https://rds.console.alibabacloud.com/rdsList/basic). In the top navigation bar, select the region where the instance is located. Find the instance that you created based on its **Creation Time**.
     
     **Note**
     
     It takes 1 to 10 minutes to create the instance. You may need to refresh the page to view the instance.
     

## What to do next

[Create a database and an account](/help/en/rds/apsaradb-rds-for-postgresql/create-a-database-and-an-account-on-an-apsaradb-rds-for-postgresql-instance#concept-njz-1gg-wdb)

## FAQ

How do I view the total number of RDS instances under my Alibaba Cloud account?

Log on to the [RDS Overview](https://rds.console.alibabacloud.com/dashboard/cn-hangzhou) page to view the total number of RDS instances for all database engines under your Alibaba Cloud account. On this page, you can also see the regions where the instances are located and the number of running instances in each region.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6913323171/p784057.png)

Why can't I see the instance that is being created in the instance list?

**Possible cause**

**Description**

**Suggestion**

Incorrect region

The region you are in is different from the region that you selected when you created the instance.

Switch the region in the upper-left corner of the page.

Insufficient resources in the zone

The instance failed to be created because of insufficient resources in the zone.

If the creation fails, you can see a refund in the [Orders](https://billingnew.console.alibabacloud.com/?#/order/list/) list.

Select another zone and try again.

The RAM access policy prohibits the creation of unencrypted RDS instances

A RAM access policy is configured to prohibit RAM users from creating unencrypted RDS instances.

-   A RAM user tries to create an instance with a high-performance local disk, and the instance creation fails. Disk encryption cannot be set when you create an instance with a high-performance local disk.
    
-   A RAM user tries to create an instance with a cloud disk but does not set disk encryption, and the instance creation fails.
    

For more information, see [Use a RAM policy to restrict the permissions of a RAM user](/help/en/rds/apsaradb-rds-for-mysql/use-ram-policies-to-manage-the-permissions-of-ram-users-on-apsaradb-rds-instances#task-2158102).

When you create the instance, set the storage type to cloud disk, select [Disk Encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-the-disk-encryption-feature-for-an-apsaradb-rds-for-mysql-instance), set a key, and then try again.

How do I resolve the 'SLR does not exist' error during instance creation?

When you create an ApsaraDB RDS for PostgreSQL instance for the first time, you must authorize the service-linked role ([AliyunServiceRoleForRdsPgsqlOnEcs](/help/en/rds/developer-reference/service-linked-roles)). To do this, click the **Authorize** next to the **SLR Authorization** parameter. This one-time, free authorization enables RDS to manage Elastic Network Interfaces (ENIs) for network connectivity.

## References

-   Create an RDS instance by calling an API operation: [CreateDBInstance](/help/en/rds/api-create-an-instance#doc-api-Rds-CreateDBInstance)
    
-   To create other types of instances, see:
    
    -   [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb)
        
    -   [Create and use an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance#concept-pv1-n5z-vdb)
        
    -   [Create an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/create-an-apsaradb-rds-for-mariadb-instance#concept-wzp-ncf-vdb)
