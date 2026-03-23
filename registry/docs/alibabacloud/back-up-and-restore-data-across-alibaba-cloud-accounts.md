This topic answers common questions about using Data Disaster Recovery (DBS).

## **How do I configure RAM authorization to back up or restore data across Alibaba Cloud accounts?**

1.  Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/) using the Alibaba Cloud account that owns the source database instance.
    
    **Note**
    
    Ensure the account has `AliyunDBSDefaultRole` permissions.
    
2.  In the navigation pane on the left, click **Identities** > **Roles**.
    
3.  Create a RAM role:
    
    1.  Click **Create Role** and set **Principal Type** to **Cloud Account**.
        
    2.  For **Principal Name**, select `Current account 164882xxxx` and click **OK**.
        
    3.  In the dialog box, enter a role name, such as `ram-for-dbs`, and click **OK**.
        
4.  Grant permissions to the role:
    
    1.  On the details page for the role you created, click the **Permissions** tab and then click **Grant Permission**.
        
    2.  In the panel that appears, set Permission Type to **System Policy**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0403783571/p991743.png)
        
    3.  Select the required policies based on the **Database Location**.
        
        -   RDS Instance: `AliyunRDSReadOnlyAccess` and `AliyunVPCReadOnlyAccess`.
            
        -   Self-managed database connected via an Express Connect circuit, a VPN Gateway, or a Smart Access Gateway: `AliyunVPCReadOnlyAccess`
            
        -   PolarDB: `AliyunPolardbFullAccess`
            
        
    4.  Click **OK**.
        
5.  Edit the trust policy:
    
    1.  In the basic information section of the role, click ****Trust Policy**** > **Edit **Trust Policy****.
        
    2.  On the **Edit **Trust Policy**** page, click **JSON Editor**. Copy and paste the code below into the box:
        
        Replace `<Account ID>` with the **ID of the Alibaba Cloud account** that manages the backup schedule.
        
        ```
        {
         "Statement": [
             {
                 "Action": "sts:AssumeRole",
                 "Effect": "Allow",
                 "Principal": {
                     "RAM": [
                         "acs:ram::<Account ID>:root"
                     ],
                     "Service": [
                         "<Account ID>@dbs.aliyuncs.com"
                     ]
                 }
             }
         ],
         "Version": "1"
        }
        ```
        
6.  Click **OK** to complete the RAM authorization.
    

## How do I back up and restore data across Alibaba Cloud accounts?

### Configure cross-account backup

1.  [Create a backup schedule](/help/en/dms/create-a-backup-plan-dbs).
    
2.  [Configure a backup schedule](/help/en/dms/manage-backup-plans-dms).
    
    1.  In the **Database Location** section, select a destination instance that supports the cross-account feature. Then, click **Cross Alicloud instance**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7837761471/p924920.png)
        
    2.  Enter the following information:
        
        -   **Cross Alicloud UID**: The ID of the Alibaba Cloud account that owns the source database.
            
        -   **Role name**: The name of the role that you created in the source account, such as `ram-for-dbs`. This role must have the required [trust policy](#0451cf4b3cu0v).
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7837761471/p924921.png)
        

### **Configure cross-account restoration**

For detailed instruction, see [Configure a backup schedule and restore data](/help/en/dms/configure-a-backup-plan-and-restore-data/).

**Note**

You cannot migrate backup sets across Alibaba Cloud accounts in the console.

## **How do I back up a database across accounts using a public endpoint?**

1.  [Create a backup schedule](/help/en/dms/create-a-backup-plan-dbs).
    
2.  [Configure a backup schedule](/help/en/dms/manage-backup-plans-dms).
    
3.  Set **Database Location** to **User-Created Database with Public IP Address <IP Address:Port Number>**.
    

**Note**

If the **User-Created Database with Public IP Address <IP Address:Port Number>** option is unavailable, search for DingTalk group ID 35585947 or [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to request access.

## **How do I automatically archive backup sets to a backup server?**

1.  Using an **operations account**, [create a backup schedule](/help/en/dms/create-a-backup-plan-dbs).
    
2.  Using an **operations account**, [Manage the backup schedule](/help/en/dms/manage-backup-plans-dms).
    
3.  Using the **backup account**, [install a backup gateway](/help/en/dms/install-backup-gateway) on the backup server.
    
    **Note**
    
    If you do not have a backup server, [purchase a server](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b) first.
    
4.  Using the **operations account**, find the target schedule in the backup schedule list and click **Manage** in the **Actions** column. On the **Configure Task** page, go to the **Backup Set Download** section at the bottom and click **Set Backup Set Download Rules**. In the dialog box that appears, configure the parameters as described in the table below.
    
    **Note**
    
    This button is displayed only if the database engine supports backup set downloads and the destination backup storage type is DBS Storage.
    
    **Parameter**
    
    **Description**
    
    **Auto download status**
    
    Select **Enable**.
    
    **Target type**
    
    Fixed to **Backup gateway installed**.
    
    **Backup Gateway**
    
    Select a backup gateway. DBS uses the backup gateway to connect to the on-premises device.
    
    **Important**
    
    The automatic download feature is in beta and may cause performance bottlenecks. To prevent data accumulation and other issues, do not use the same backup gateway for multiple backup schedules.
    
    **Target location**
    
    Select the destination type and specify the directory or path to store the backup data. The following destination types are supported:
    
    -   Dump direction
        
    -   FTP direction
        
    -   NAS direction
        
    -   Minio direction
        
    
    **Full data format**
    
    Uses the system default value and cannot be modified.
    
    **Note**
    
    For more information about the data formats of full and incremental backup sets, see the preceding feature limits and format description.
    
    **Incremental data format**
    
    Defaults to the native format and cannot be modified.
    
5.  After you complete the configuration, click **OK**.
    
6.  Using the **operations account**, navigate to the **Configure Task** page and click **Backup Set Download** in the left navigation pane to view the download progress.
    

## **How do I modify the backup lifecycle?**

1.  Log on to [Data Management (DMS) 5.0](https://dms.alibabacloud.com/new).
    
2.  In the top navigation bar, choose **Security and disaster recovery (DBS)** > **Data Disaster Recovery (DBS)** > **Backup Plan**.
    
    **Note**
    
    If you use the DMS console in simple mode, move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner of the DMS console and choose **All Features** > **Security and disaster recovery (DBS)** > **Data Disaster Recovery (DBS)** > **Backup Plan**.
    
3.  In the **Actions** column of the target backup schedule, click **Manage** to go to the **Configure Task** page.
    
4.  In the **Lifecycle Information** section, click **Edit Lifecycle**.
    
5.  Set the retention period for full or incremental backups, and then click **Save**.
    
    ![fdfdf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3372678171/p386867.png)
    
    **Important**
    
    -   The minimum retention period is 7 days and the maximum is 3,650 days. After the retention period expires, the backup set is automatically deleted and cannot be restored.
        
    -   If you do not enable incremental backup, the console displays only the lifecycle configuration for full backups. To learn how to enable incremental backup, see [Enable or disable incremental log backup](/help/en/dbs/user-guide/enable-or-disable-incremental-log-backup).
        
    

## **How do I set the minimum retention policy for backup sets?**

-   You can set the lifecycle of backup sets when you configure a backup schedule, or modify it later as needed. You can use one of the following methods:
    
    -   Console: See [Manage a backup schedule](/help/en/dms/manage-backup-plans-dms) and [Modify the backup lifecycle](#909c0da9feozk).
        
    -   API operations: See [CreateAndStartBackupPlan](/help/en/dms/developer-reference/api-dbs-2019-03-06-createandstartbackupplan) and [ModifyStorageStrategy](/help/en/dms/developer-reference/api-dbs-2019-03-06-modifystoragestrategy).
        
-   Storage costs depend on the backup destination. Storing data in your own OSS bucket incurs no DBS storage fees, while storing data in **DBS Storage** incurs fees based on data volume and storage duration. For more information, see [Differences between DBS Storage and user-owned OSS buckets](/help/en/dbs/product-overview/built-in-storage-and-oss) and [Storage billing](/help/en/dms/product-overview/pricing#db90e5b1208i0).
    
    **Note**
    
    If you have a large data volume, purchase a DBS storage plan to offset the storage fees generated by the backup schedule. For more information, see [Use a storage plan](/help/en/dms/product-overview/pricing#f51142d795d16).
    
-   If necessary, you can also manually delete backup sets to reduce storage fees.
    

## **How do I perform disaster recovery and ensure security for a self-managed database on an ECS instance?**

1.  [Create a backup schedule](/help/en/dms/create-a-backup-plan-dbs) and set the **Backup Method** to **Logical Backup**.
    
2.  Set **Database Location** to **ECS-Hosted Database**, as described in [Manage the backup schedule](/help/en/dms/manage-backup-plans-dms).
    

## **How do I perform geo-redundant backup for an RDS for MySQL instance?**

1.  [Apply for a public endpoint](/help/en/rds/apsaradb-rds-for-mysql/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mysql-instance#section-nrs-9a3-nal) for the source RDS MySQL instance.
    
2.  [Create a backup schedule](/help/en/dms/create-a-backup-plan-dbs). For geo-redundant backups, purchase a backup schedule in a region different from the source region and set **Backup Method** to **Logical Backup**.
    
3.  [Configure the backup schedule](/help/en/dms/manage-backup-plans-dms).
    

## **How do I perform geo-redundant backup for a self-managed database?**

1.  [Create a backup schedule](/help/en/dms/create-a-backup-plan-dbs) and set **Backup Method** to **Logical Backup**.
    
2.  When you [configure the backup schedule](/help/en/dms/manage-backup-plans-dms), set **Database Location** to **User-Created Database with Public IP Address <IP Address:Port Number>**.
    

**Note**

If the **User-Created Database with Public IP Address <IP Address:Port Number>** option is not available, search for DingTalk group 35585947 or [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to request access.

## **How do I use Database Gateway (DG) to back up a private database on premises or in a third-party cloud to cloud storage?**

1.  [Install a backup gateway](/help/en/dms/install-backup-gateway).
    
2.  [Create a backup schedule](/help/en/dms/create-a-backup-plan-dbs) and set the **Backup Method** to **Logical Backup**.
    
3.  [Configure the backup schedule](/help/en/dms/manage-backup-plans-dms), and then set **Database Location** to **No public network IP: Port's self-built database (accessed through the database gateway)**.
    

## **How do I** back up an on-premises database accessed over an Express Connect circuit to cloud storage?

1.  [Create a backup schedule](/help/en/dms/create-a-backup-plan-dbs) and set **Backup Method** to **Logical Backup**.
    
2.  Connect your on-premises IDC to Alibaba Cloud via an Express Connect circuit to enable network interoperability between the VPC and the local IDC. For more information, see [Connect an on-premises IDC to a VPC using an Express Connect circuit](/help/en/express-connect/getting-started/connect-a-data-center-to-a-vpc-by-using-an-express-connect-circuit).
    
3.  Add a static route pointing to the DBS IP address range on the client-side access device in the local IDC. The configuration format is: `ip route <DBS CIDR block> {Alibaba Cloud-side interconnection IP}`. For a list of DBS IP address ranges, see [DBS IP address ranges](#78e8b0334a380).
    
4.  [Configure the backup schedule](/help/en/dms/manage-backup-plans-dms), and set **Database Location** to **Express Connect DB/VPN Gateway/Intelligent Gateway**.
    

## **How do I** back up a self-managed Redis database to the cloud**?**

## **How do I perform disaster recovery for a self-managed MySQL database?**

### Prerequisites

The logical backup is complete.

**Note**

-   Only logical backup schedules are supported. Physical backups do not support individual database/table restoration.
    
-   Logical backups of PolarDB for Xscale instances support only the backup of the entire instance. Therefore, individual database/table restoration is not supported.
    

### **Backup and recovery**

For more information, see [Cross-cloud or self-managed MySQL logical backup and restoration](/help/en/dms/logical-backup-and-restoration-for-a-cross-cloud-or-self-managed-mysql-database).

## DBS IP address ranges

**Region**

**DBS IP address range**

China (Hangzhou)

100.104.217.0/24

China (Beijing)

100.104.119.0/24

China (Qingdao)

100.104.183.0/24

China (Shanghai)

100.104.191.0/24

China (Shenzhen)

100.104.81.0/24

China (Chengdu)

100.104.133.128/26

China (Ulanqab)

100.104.76.192/26

China (Heyuan)

100.104.127.0/26

South Korea (Seoul)

100.104.150.192/26

Thailand (Bangkok)

100.104.119.128/26

China (Hong Kong)

100.104.10.0/24

Singapore

100.104.10.0/24

Japan (Tokyo)

100.104.144.0/24

China (Hohhot)

100.104.40.0/24

China (Zhangjiakou)

100.104.48.0/24

US (Virginia)

100.104.220.0/24

US (Silicon Valley)

100.104.17.0/24

Germany (Frankfurt)

100.104.133.0/24

Malaysia (Kuala Lumpur)

100.104.10.0/24

Indonesia (Jakarta)

100.104.209.0/24
