The billable items for ApsaraDB RDS include RDS instance billable items, value-added service billable items, and billable items for other Alibaba Cloud services related to RDS. This topic describes the definitions, billing formulas, and billing methods of the billable items.

## **RDS instances**

Based on the [billing method](/help/en/rds/product-overview/billing-overview#section-uot-xx1-aot), RDS instances can be classified into the following types:

-   Subscription or pay-as-you-go RDS instances. When you purchase such an RDS instance, you must specify the specifications of the computing resources and storage capacity. After you purchase the instance, you are charged **RDS instance type** fees and **storage capacity** fees.
    
-   Serverless instances. The computing resources of a serverless RDS instance are automatically scaled within the specified range based on your workloads. The storage capacity of the serverless RDS instance is automatically expanded based on the data volume. Serverless instances incur **RCU** fees and **storage capacity** fees.
    

### **RDS instance type**

**Category**

**Description**

**Definition**

Fees for the computing resource specifications of subscription or pay-as-you-go RDS instances (including regular instances, read-only instances, and disaster recovery instances). The billable item is named **RDS Instance Type (rds\_class)** or **Instance Type (ClassCode)**.

After you create an RDS instance, fees are generated for the billable item. If the computing resource specifications or the number of nodes of the instance are increased or decreased, the fees for the billable item generally change.

**Billing formula**

-   RDS Basic Edition, RDS High-availability Edition: RDS instance type fee = Unit price of the instance type for the instance × Duration
    
-   Cluster Edition: RDS instance type fee = Unit price of the instance type for a single node × Number of nodes × Duration
    

**Note**

The unit price of the instance type varies based on the region, database engine, and specifications. For more information, visit the ApsaraDB RDS buy page or check your bills.

**Billing method**

Subscription or pay-as-you-go.

### **RCU** for serverless instances

**Category**

**Description**

**Definition**

Fees for the computing resources of a serverless RDS instance. The billable item is named **RCU (rds\_serverless\_rcu)**.

After you create a serverless RDS instance, fees are generated for the billable item based on the actual usage of RCUs. If you suspend the serverless RDS instance, fees are no longer generated for the billable item.

**Billing formula**

RCU fee = Unit price of RCUs on a single node × Number of RCUs used by a single node × Number of nodes × Duration

**Note**

For more information about the unit price of RCUs, see [Serverless ApsaraDB RDS for MySQL fees](/help/en/doc-detail/447753.html).

**Billing method**

Serverless.

### Storage capacity

**Category**

**Description**

**Definition**

Fees for the storage capacity of subscription, pay-as-you-go, or serverless RDS instances (including regular instances, read-only instances, and disaster recovery instances). The billable item is named **Storage Capacity (rds\_storage** or **Storage)**.

After you create an RDS instance, fees are generated for the billable item. If you expand or reduce the storage capacity of your RDS instance, the fees for the billable item change.

**Billing formula**

-   Subscription or pay-as-you-go RDS instances on RDS Basic Edition and RDS High-availability Edition: Storage capacity fee = Unit price of the storage capacity for the instance × Storage used by the instance × Duration
    
-   Subscription or pay-as-you-go RDS instances on RDS Cluster Edition: Storage capacity fee = Unit price of the storage capacity for a single node × Storage used by a single node × Number of nodes × Duration
    
-   instances: Storage capacity fee = Unit price of the storage capacity for a single node × Storage used by a single node × Number of nodes × Duration
    

**Note**

-   The unit price of the storage capacity varies based on the region, RDS edition, storage type, and billing method. The actual price in the ApsaraDB RDS console shall prevail.
    
-   The duration in the preceding formulas is calculated in different methods based on the billing method of the instance.
    
    -   Subscription instances: The duration indicates the subscription duration of the instances.
        
    -   Pay-as-you-go or serverless instances: The duration indicates the billable hours. The billing cycle is 1 hour.
        

**Billing method**

Subscription, pay-as-you-go, and serverless.

## **Value-added features of ApsaraDB RDS**

The value-added features are the paid features that are provided by ApsaraDB RDS. After you enable or use a value-added feature, fees are generated for the feature. The fee for the value-added feature is charged by ApsaraDB RDS.

### **Auto scaling**

**Category**

**Description**

**Definition**

You are not charged for enabling the [auto scaling](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-scale-up-feature-for-an-apsaradb-rds-for-mysql-instance#task-2092452) feature. However, if you enable the feature and the CPU utilization reaches the threshold, the computing resources of the ApsaraDB RDS for MySQL instance are increased and fees are generated for the increased computing resources based on the pay-as-you-go billing method.

-   When a disk instance automatically scales out its performance, it will be changed to other RDS specifications. The system will charge the [RDS specifications](#b53bebc736ltm) fee based on the new specifications. The fee change rules are the same as those for changing configurations. For more information, see [Change configurations](/help/en/rds/product-overview/specification-changes).
    
-   If your RDS instance uses local SSDs, the auto scaling feature automatically increases the number of CPU cores. A new billable item named **Elastic Computing Resources (CPU+IOPS)** with the code **cpu\_cores\_flexible** is generated.
    

**Billing formula**

-   Fee for the elastic computing resources of an RDS instance that uses local SSDs = Unit price of CPU cores × Number of increased CPU cores × Duration
    
-   Fee for the new instance type of an RDS instance with cloud disks = Unit price of the instance type × Duration
    

**Note**

-   For more information about the unit price of CPU cores for the auto scaling feature of an RDS instance that uses local SSDs, see [Configure auto scaling](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-scale-up-feature-for-an-apsaradb-rds-for-mysql-instance).
    
-   The unit price of the instance type for an RDS instance that uses cloud disks is the same as that displayed on the ApsaraDB RDS buy page.
    

**Billing method**

Pay-as-you-go.

### **I/O burst for premium performance disks**

**Category**

**Description**

**Definition**

Fees for the I/O burst of an RDS instance that uses premium performance disks. You are not charged for enabling the I/O burst feature for premium performance disks. However, if you enable the feature and the I/O burst exceeds the free quota, fees are generated for the billable item named **I/O Burst (io\_burst)**.

For more information about the feature, see [I/O burst for ApsaraDB RDS for MySQL](/help/en/rds/apsaradb-rds-for-mysql/i-o-performance-burst).

**Billing formula**

I/O burst fee for premium performance disks = (Total I/O burst of all nodes in the instance - Free quota) × Unit price of I/O burst × Duration

**Note**

For more information about the total I/O burst of all nodes in the instance, free quota, and unit price of I/O burst, see [Billing of I/O burst for ApsaraDB RDS for MySQL](/help/en/rds/apsaradb-rds-for-mysql/i-o-performance-burst#e14560852e3zl).

**Billing method**

Pay-as-you-go.

### Premium performance **disk data archiving**

**Category**

**Description**

**Definition**

Fees for the archived data volume of an RDS instance that uses premium performance disks. You are not charged for enabling the data archiving feature. However, if you enable the feature, fees are generated for the billable item named **OSS Storage Capacity (rds\_oss\_storage)** for the data that is archived to Object Storage Service (OSS).

For more information about the feature, see [Data archiving for ApsaraDB RDS for MySQL](/help/en/rds/apsaradb-rds-for-mysql/rds-mysql-data-archiving-function).

**Billing formula**

Premium performance disk data archiving fee = Archived data volume × Unit price of data archiving × Duration

**Note**

For more information about the unit price of data archiving, see [Billing of data archiving for ApsaraDB RDS for MySQL](/help/en/rds/apsaradb-rds-for-mysql/rds-mysql-data-archiving-function).

**Billing method**

Pay-as-you-go.

### **Regular backup and archived backup**

### Regular backup storage

**Category**

**Description**

**Definition**

Data backup files and log backup files are stored in the backup storage that is provided by Alibaba Cloud. Alibaba Cloud provides a free quota for backup storage. If the backup storage exceeds the free quota, you are charged for the excess backup storage on a pay-as-you-go basis. The billable item is named **RDS Basic Backup Fee (backup\_charged)**.

For more information about the feature, see [Back up an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance#concept-l1m-xgn-ydb).

**Billable product**

Relational database.

**Billing formula**

Backup storage fee = (Total storage of backup files - Free quota) × Unit price of backup storage × Duration

**Note**

-   Free quota for backup storage : The free quota for **RDS instances that use cloud disks** is 200% of the storage capacity. The free quota for **RDS instances that use local SSDs** is 50% of the storage capacity.
    
-   For more information about the unit price of backup storage, see [Backup fees for ApsaraDB RDS for MySQL](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance#section-idj-2m4-ydb).
    
-   For information about how to reduce backup costs and size, see [Reduce RDS MySQL backup costs](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance#section-qyc-r9l-pe1).
    

**Billing method**

Pay-as-you-go.

## Archived backup storage

**Category**

**Description**

**Definition**

Data backups that are more than 730 days old are automatically converted to archived backups. The billable item is named **Long-term Backup (ArchivedBackupCharged)**.

For more information, see [Automatic backup](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance#87397dc0ee6q5).

**Product**

Relational database.

**Billing formula**

Fee for archived backup storage = Unit price of archived backup storage × Amount of archived backup storage × Duration

**Note**

For the unit price of archived backup storage, see [Backup fees](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance#concept-ipg-lm4-ydb).

**Billing method**

Pay-as-you-go.

**Note**

-   The billing items generated by cross-region backup include relational database and Database Backup products on your bill. For more information, see [Data Disaster Recovery: cross-region backup, backup storage for deleted instances, and download of backup files](#3b619c4e9fz0x).
    
-   The billing items generated by backup storage for deleted instances and download of backup files are billed as Database Backup products. For more information, see [Data Disaster Recovery: cross-region backup, backup storage for deleted instances, and download of backup files](#3b619c4e9fz0x).
    

### **Full restoration and regular database and table restoration**

## Full restoration (instance cloning)

When you use data backups and log backups of the original instance for data restoration to a new instance, you are charged for the [RDS instance type](#b53bebc736ltm) and [storage](#1da116ea966k8) of the new instance.

For more information, see [Restore MySQL data](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance).

## Regular database and table restoration

When you restore specific databases or tables to a new instance by using backup sets or to a point in time, you are charged for the [RDS instance type](#b53bebc736ltm) and [storage](#1da116ea966k8) of the new instance. If you restore to the original instance, no fees are generated.

For more information, see [Restore MySQL databases and tables](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance).

### **SQL Audit (DAS Enterprise V0)**

**Category**

**Description**

**Definition**

Fees for the storage of the SQL logs that are generated by the SQL Audit feature. If you enable the SQL Audit feature, you are charged based on the size of the SQL logs that are generated by the SQL Audit feature and storage duration of the logs. The billing item is named **SQL Audit (sql\_collected)**.

For more information, see [RDS MySQL SQL Explorer and Audit](/help/en/rds/use-sql-explorer-features-on-apsaradb-rds-for-mysql-instances#task-msp-gz1-mfb).

**Billing product**

Relational database.

**Billing formula**

SQL audit fee = Unit price × Storage used by SQL logs that are generated by the SQL Audit feature × Duration

**Note**

For the unit price of SQL Audit, see [Billing](/help/en/rds/use-sql-explorer-features-on-apsaradb-rds-for-mysql-instances#section-5vk-6lp-um8).

**Billing method**

Pay-as-you-go.

**Note**

For the SQL Explorer and Audit feature provided by DAS Enterprise V3/V2/V1, the billing product is Database Autonomy Service. For more information, see [DAS: SQL Explorer and Audit](#d5849d402exxi).

### **Performance monitoring**

**Category**

**Description**

**Definition**

When you set the performance monitoring frequency of an RDS MySQL instance to once every 5 seconds, **performance monitoring (advanced\_monitor)** fees are incurred. If you select the 60-second or 300-second monitoring frequency, you are not charged for performance monitoring. The performance monitoring feature is provided free of charge for RDS instances that run PostgreSQL, SQL Server, or MariaDB.

For more information about this feature, see [Set the frequency of the legacy monitoring](/help/en/rds/apsaradb-rds-for-mysql/set-the-monitoring-frequency-of-an-apsaradb-rds-for-mysql-instance).

**Billing formula**

Performance monitoring fee = Unit price of performance monitoring × Duration

**Note**

For the unit price of performance monitoring, see [Fees](/help/en/rds/apsaradb-rds-for-mysql/set-the-monitoring-frequency-of-an-apsaradb-rds-for-mysql-instance#section-mnp-6pn-xul).

**Billing method**

Pay-as-you-go.

### **Database proxy**

**Category**

**Description**

**Definition**

Fees for the database proxy feature. When you enable the database proxy feature and select **Dedicated proxy** as the proxy type, you are charged based on the specifications of the proxy and the duration of use. The billing item is named **Number of database proxy instance shards (MaxscaleChargedSliceNum)**. General-purpose database proxies are provided free of charge.

For more information about this feature, see [RDS MySQL database proxy](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#task-2167178).

**Billing formula**

Database proxy fee = Unit price × Number of database proxies × Duration

**Note**

For the unit price of database proxies, see [Dedicated proxy pricing](/help/en/rds/apsaradb-rds-for-mysql/billing-rules-for-the-dedicated-proxy-feature-of-apsaradb-rds-for-mysql#8cab0ac07fflg).

**Billing method**

Pay-as-you-go.

### **Public endpoint traffic**

If you apply for a public endpoint for your RDS instance and use the public endpoint to connect to your RDS instance, Internet traffic is consumed. Currently, you are not charged for the inbound or outbound Internet traffic that is consumed to connect to your RDS instance by using the public endpoint.

For more information, see [Enable or disable the public endpoint for an RDS MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mysql-instance#concept-nsl-hff-vdb).

## Other cloud products providing services and billing

ApsaraDB RDS integrates with other Alibaba Cloud services. If you use the following features, additional billable items are generated.

### **Data Disaster Recovery: cross-region backup, backup storage for deleted instances, download of backup files**

### Cross-region backup

**Category**

**Description**

**Definition**

Fee for traffic that is consumed by cross-region backups and fee for the storage of backup files that are generated by cross-region backups. The following billable items are used:

**Cross-region backup storage (DdrOssStorageSize)** and **Traffic consumed by cross-region backups (NetworkOutDuplicationSize).**

-   ApsaraDB RDS for MySQL with local SSDs: **Cross-region backup storage (DdrOssStorageSize)** and **Traffic consumed by cross-region backups (NetworkOutDuplicationSize)**.
    
-   ApsaraDB RDS for MySQL with standard SSDs: **Database backup storage (BackupStorageSize)** and **Traffic consumed by cross-region backups (NetworkOutDuplicationSize).**
    

For more information, see [Cross-region backup for MySQL](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance#concept-405443).

**Billing product**

-   **Cross-region backup storage (DdrOssStorageSize):** relational database.
    
-   **Database backup storage (BackupStorageSize):** Database Backup.
    
-   **Traffic consumed by cross-region backups (NetworkOutDuplicationSize):** Database Backup.
    

**Billing formula**

-   Fee for cross-region backup storage = Unit price of cross-region backup storage × Size of cross-region backup files × Duration
    
-   Fee for instance backup storage = Unit price of instance backup storage × Size of instance backup files × Duration
    
-   Fee for traffic that is consumed by cross-region backups = Unit price of traffic × Amount of traffic that is consumed
    

**Note**

-   For the unit price of cross-region backup storage, see [Cross-region backup for MySQL with local SSDs](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance#p-2u6-i6f-cs7).
    
-   For the unit price of database backup storage, see [Cross-region backup for MySQL with standard SSDs](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance#p-s20-fs3-uwe).
    
-   For the unit price of traffic, see [Network fees](/help/en/dbs/product-overview/network-traffic-fees).
    

**Billing method**

Pay-as-you-go.

**Whether savings plans or resource plans can be used for deduction**

[DBS network plan](/help/en/dbs/getting-started/use-network-plans#task-1953491) can be used to offset the **traffic consumed by cross-region backups (NetworkOutDuplicationSize)** fees for **subscription or pay-as-you-go** ApsaraDB RDS instances.

### Backup storage for deleted instances

**Category**

**Description**

**Definition**

Fees for the storage of backup sets of deleted ApsaraDB RDS for MySQL instances. If an RDS instance is deleted, the backup sets of the RDS instance are retained free of charge within seven days. After the 7-day retention period elapses, you are charged for the storage of the backup sets based on the size of the backup sets and retention duration. The following billable items are used:

-   ApsaraDB RDS for MySQL with local SSDs: **Standard storage (StandardStorageSize)**
    
-   ApsaraDB RDS for MySQL with standard SSDs: **Database backup storage (BackupStorageSize)**
    

For more information, see [Configure the backup retention policy after instance release](/help/en/rds/apsaradb-rds-for-mysql/configure-backup-retention-policies-for-released-instances).

**Billing product**

Database Backup.

**Billing formula**

Fee for the backup storage of a deleted instance = Unit price of the backup storage for a deleted instance × Size of the backup sets of the deleted instance × Duration

**Note**

For the unit price of the backup storage for a deleted instance, see [Billing](/help/en/rds/apsaradb-rds-for-mysql/retain-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-for-a-long-period-of-time#a18e6fc0ee4ix).

**Billing method**

Pay-as-you-go.

### Download of backup files

**Category**

**Description**

**Definition**

Fees that are generated when you download the backup files of an ApsaraDB RDS instance, including the **outbound traffic over Internet (NetworkOutSize)** fee and the **traffic consumed for the backup set conversion (BackupAnalyticSize)** fee that is generated when you use the advanced download feature.

For more information, see [Download the backup files of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-yjb-pn4-ydb).

**Billing product**

Database Backup.

**Billing formula**

-   Fee for the traffic consumed for the backup set conversion = Unit price × Size of backup sets that are converted
    
-   Fee for outbound Internet traffic = Unit price × (Amount of traffic - Free quota)
    

**Note**

For the unit price of backup calculation data volume (also called backup conversion fee unit price) and outbound traffic over Internet unit price generated by downloading backups, see [Download backup](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#2aa4d7717f77t).

**Billing method**

Pay-as-you-go.

**Whether savings plans or resource plans can be used for deduction**

[DBS network plan](/help/en/dbs/getting-started/use-network-plans#task-1953491) can be used to offset the **outbound traffic over Internet (NetworkOutSize)** fees for **subscription or pay-as-you-go** ApsaraDB RDS instances.

### **Data Disaster Recovery: fast restoration of individual databases and tables (within 5 minutes), emergency recovery**

### Fast restoration of individual databases and tables and fast restoration of individual databases and tables within 5 minutes

**Important**

Fast restoration of individual databases and tables within 5 minutes can no longer be enabled.

**Category**

**Description**

**Definition**

The fast restoration feature for individual databases and tables of ApsaraDB RDS for MySQL with local SSDs instances is available in two editions: free edition and paid edition. The details are as follows:

-   Free edition: If you enable and use the fast restoration feature for individual databases and tables of this edition, no fees are generated.
    
-   Paid edition: After you enable and use the fast restoration feature for individual databases and tables of this edition, you are charged based on the data volume. The billable item is **CDM local disk storage (CapacitySandboxStorageSize)**.
    

**Billing product**

Database Backup.

**Billing formula**

Fee = Unit price of the CDM local disk storage × Amount of the CDM local disk storage × Duration

**Note**

For the unit price of the CDM local disk storage, see [Restore individual databases and tables](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance#p-1ox-wh3-rwu).

**Billing method**

Pay-as-you-go.

**Whether savings plans or resource plans can be used for deduction**

[CDM sandbox storage plan](/help/en/dbs/product-overview/dbs-sandbox-fees#7b28e1cf9fpmy) can be used to offset the **CDM local disk storage (CapacitySandboxStorageSize)** fees for **subscription or pay-as-you-go** ApsaraDB RDS for **MySQL with local SSDs** instances.

### Emergency recovery

**Category**

**Description**

**Definition**

The emergency recovery feature of ApsaraDB RDS for MySQL with local SSDs instances involves the following billable items:

-   **CDM local disk storage (CapacitySandboxStorageSize)**: After you enable the Data Disaster Recovery sandbox feature, each database instance corresponds to a sandbox storage. Data Disaster Recovery automatically synchronizes the data of the database instance to the CDM storage and generates sandbox snapshots for the data. Data Disaster Recovery charges sandbox storage fees based on the data volume in the sandbox storage.
    
-   **CDM sandbox instance type (SandboxDatabaseSpec)**: After you restore data to a temporary sandbox instance, Data Disaster Recovery charges temporary sandbox instance fees based on the instance type and usage duration of the temporary sandbox instance. The fees are charged on an hourly basis. If you do not create a temporary sandbox instance for data restoration, you are not charged for the temporary sandbox instance.
    

For more information, see [Use the emergency recovery feature for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-an-rds-emergency-instance).

**Billing product**

Database Backup.

**Billing formula**

-   Fee for the CDM local disk storage = Unit price of the CDM local disk storage × Duration × Amount of the CDM local disk storage
    
-   Fee for the CDM sandbox instance type \= Unit price of the sandbox instance type × Duration
    

**Note**

-   For the unit price of the CDM local disk storage, see [Sandbox storage fees](/help/en/dbs/product-overview/dbs-sandbox-fees#section-zem-2el-l1d).
    
-   For the unit price of the sandbox instance type, see [Temporary sandbox instance fees](/help/en/dbs/product-overview/dbs-sandbox-fees#section-kbj-aba-mlq).
    

**Billing method**

Pay-as-you-go.

**Whether savings plans or resource plans can be used for deduction**

[CDM sandbox storage plan](/help/en/dbs/product-overview/dbs-sandbox-fees#7b28e1cf9fpmy) can be used to offset the **CDM local disk storage (CapacitySandboxStorageSize)** fees for **subscription or pay-as-you-go** ApsaraDB RDS for **MySQL with local SSDs** instances.

### **DAS: SQL Explorer and Audit**

The billable items of DAS Enterprise Edition V3, DAS Enterprise Edition V2, and DAS Enterprise Edition V1 belong to the Database Autonomy Service billing product.

**Billing details**

#### Enterprise Edition V3

**Important**

Billing for Enterprise Edition V3 is feature-based, offering more flexibility and significant cost savings.

-   Upon activating Enterprise Edition V3, **log traffic** fees apply by default, with additional fees incurred based on the use of specific features.
    
-   Data migration from Enterprise Edition V1 and V2 to V3 is complimentary. Charges apply according to the source version before migration and the destination version upon completion. For more information, see [the referenced document](/help/en/das/user-guide/faq#a3a950500f3s3).
    

##### **Enterprise Edition V3 billing method overview**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1176685471/CAEQORiBgMCl8ay1rRkiIDJmZGE2ODQ0MWI2MjQwYjRiYTljMzZjZGJiZTI3Njg34179735_20240619161305.059.svg)

##### **Billing examples**

The following are two billing examples based on business scenarios and selected features:

###### Scenario

Supports comprehensive SQL log recording and cluster analysis for quick SQL issue querying and resolution, emergency service handling, and in-depth optimization. For more information, see [SQL Explorer and Audit](/help/en/das/user-guide/sql-explorer-and-audit-5/). In the O&M scenario, consider enabling the following features.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5776267371/p889304.png)

For an instance with 10 GB of daily write traffic, set **SQL Log Storage** to 30 days and **Log Indexing** hot storage to 7 days.

**Note**

The **SQL Log Storage Duration** is the total time for **SQL Log Storage**, which defaults to cold storage. For instance, after enabling log indexing, new logs are stored in hot storage for 7 days and then in cold storage for the remaining 23 days.

**Feature**

**Billable items**

**Daily unit price (for Alibaba Cloud public cloud in the Chinese mainland)**

**Daily usage**

**Daily fee**

**SQL logs**

**Log traffic (DataIngestion)**

0.24 CNY/GB

10 GB

2.4 CNY

**Cold storage (SqlInsightColdDataSize)**

0.003 CNY/GB/day

After SQL logs start to be stored in cold storage

10 GB on the first day

20 GB on the second day

……

and 230 GB on the 23rd day

0

(Logs can be stored in cold storage free of charge for 30 days.)

**Log indexing**

**Log indexing (RealTimeSearchAnalytics)**

0.24 CNY/GB

10 GB

2.4 CNY

**Hot storage (SqlInsightHotDataSize)**

0.01 CNY/GB/day

After this feature is enabled

the daily usage is 10 GB on the first day

20 GB on the second day

……

and 70 GB on the seventh day

(Data is dumped to cold storage after seven days.)

If data is stored in hot storage for seven days

10 × (7 - 1) × 0.01 = 0.6 CNY

(Logs are stored in hot storage free of charge on the first day.)

**SQL Explorer**

**Insight analysis (InsightAnalysis)**

0.08 CNY/GB

10 GB

0.8 CNY

###### Audit and compliance

Meets bank-level security compliance and regulatory requirements in the Chinese mainland, offering long-term transparent monitoring of database behavior with real-time alerts. It detects abnormal access, vulnerability attacks, data breaches, and baseline deviations to protect database services. For more information, see [Security Audit (new version)](/help/en/das/user-guide/security-audit-new-version/). In this scenario, consider enabling the following features.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5776267371/p889309.png)

For an instance with 10 GB of daily write traffic, set **SQL Log Storage** to 180 days to comply with regulations in the Chinese mainland.

**Note**

-   The **SQL Log Storage Duration** is the total storage time for **SQL Log**, which defaults to cold storage.
    
-   To comply with regulations in the Chinese mainland, the cold storage duration must be at least 180 days.
    

**Feature**

**Billable items**

**Daily unit price (for Alibaba Cloud public cloud in the Chinese mainland)**

**Daily usage**

**Daily fee**

**SQL logs**

**Log traffic (DataIngestion)**

0.24 CNY/GB

10 GB

2.4 CNY

**Cold storage (SqlInsightColdDataSize)**

0.003 CNY/GB/day

10 GB on the first day

20 GB on the second day

……

and 1,800 GB on the 180th day

10 × (180 - 30) × 0.003 = 4.5 CNY

(Logs can be stored in cold storage free of charge for 30 days.)

**Security audit**

**Security audit (SecurityAudit)**

0.48 CNY/GB

10 GB

4.8 CNY

##### **Public cloud**

**Billable items**

**Billing method**

**Pricing in the Chinese mainland**

**Pricing in Hong Kong (China) and regions outside China**

**Description**

**Log traffic (DataIngestion)**

Pay-as-you-go

0.04 USD/GB

0.06 USD/GB

Default Fee.

You are charged for the traffic consumed for collecting, transferring, and writing logs to storage on a pay-as-you-go basis.

For more information, see [the referenced document](#d5ad4c375eevs).

**Log indexing (RealTimeSearchAnalytics)**

0.04 USD/GB

0.06 USD/GB

You are charged fees after you enable the log indexing feature.

Log indexes are stored as hot data. DAS dynamically adjusts and optimizes indexes to ensure rapid data retrieval.

If you enable the log indexing feature, log indexes can be stored in hot storage free of charge for one day.

**SQL Explorer (InsightAnalysis)**

0.0134 USD/GB

0.02 USD/GB

You are charged for automatic data aggregation and analysis by using the SQL Explorer feature based on the log volume.

**Hot storage (SqlInsightHotDataSize)**

0.00167 USD/GB/day

0.0025 USD/GB/day

You are charged for hot storage based on the log volume and storage duration.

Logs can be stored in hot storage free of charge for one day after they are written to hot storage. If cold storage is enabled, the logs are automatically dumped to cold storage free of charge after the specified hot storage duration ends.

Logs can be stored in hot storage for up to seven days.

**Cold storage (SqlInsightColdDataSize)**

0.0005 USD/GB/day

0.00075 USD/GB/day

Default Fee.

You are charged for cold storage based on the log volume and storage duration.

-   If hot storage is disabled, logs are stored only in cold storage. Logs can be stored in cold storage free of charge for 30 days.
    
-   If hot storage is enabled:
    
    -   New logs are stored in hot storage (Logs are stored in hot storage free of charge on the first day.). You are charged for hot storage during the hot storage period (`hot storage duration - first day`).
        
    -   After the specified hot storage duration ends, the logs are automatically dumped to cold storage free of charge. Logs can be stored in cold storage free of charge during the cold storage period (`30 days - hot storage duration`).
        

**Cold query (SqlScanDataSize)**

0.0025 USD/GB

0.00375 USD/GB

You are charged for querying logs in cold storage offline based on the log volume.

**Cold query (SqlScanDataSize)**

0.067 USD/GB

0.1 USD/GB

You are charged for data exporting and dumping. Currently, this service is free of charge.

**Security audit (SecurityAudit)**

0.08 USD/GB

0.12 USD/GB

You are charged for the new version of the security audit feature based on the log volume.

#### Enterprise Edition V2

##### Public cloud

**Billable items**

**Billing method**

**Pricing in the Chinese mainland, Malaysia (Kuala Lumpur), and Indonesia (Jakarta)**

**Pricing in Hong Kong (China) and Singapore**

**Description**

**Hot storage (SqlInsightHotDataSize)**

Pay-as-you-go

0.00145 USD/GB/hour

0.002175 USD/GB/hour

Data is stored in high-performance storage devices to provide query acceleration and SQL aggregation information capabilities. The SQL Explorer and Audit data generated in the previous seven days is stored in hot storage.

**Cold storage (SqlInsightColdDataSize)**

0.00018 USD/GB/hour

0.00027 USD/GB/hour

Data is stored in low-cost storage devices to reduce usage costs. SQL Explorer and Audit data that exceeds the previous seven days is automatically transferred from hot storage to cold storage. The response time of a cold data query is longer than that of a hot data query.

Data query fee (**SqlScanDataSize**)

0.029 USD/GB

0.0435 USD/GB

You are charged for querying data that is stored in cold storage on a pay-as-you-go basis.

**Security audit (SecurityAudit)**

0.08 USD/GB

0.12 USD/GB

-   Optional. You can enable or disable the feature separately.
    
-   You are charged for the new version of the security audit feature based on the log volume.
    

#### **Enterprise Edition V1** and V0

**Important**

Enterprise Edition V1 incurs subscription fees only.

**Billable items**

**Billing method**

**Pricing**

**Description**

**Subscription costs**

Subscription

USD 6.2 per instance-month

The number of instances used for billing refers to the specified quota of DAS Enterprise Edition V1, which indicates the total number of database instances for which you can enable DAS Professional Edition V1.

For example, if the current account's Enterprise Edition V1 quota is 3 and the number of database instances with DAS Professional Edition enabled is 1, then the subscription fee for DAS Professional Edition for this account is `6.2 USD/month × 3 = 18.6 USD/month`.

**Important**

You are charged subscription fees only for DAS Enterprise Edition V1.

**Storage fees for SQL Explorer (sql\_storage\_used)**

Pay-as-you-go

-   Free quota: 5 GB of free storage.
    
    **Important**
    
    Free storage is provided only for DAS Enterprise Edition V1.
    
-   Unit price for excess storage: USD 0.0013 per GB-hour.
    

Pricing in the Chinese mainland, Malaysia (Kuala Lumpur), and Indonesia (Jakarta).

-   Free quota: 3 GB of free storage.
    
    **Important**
    
    Free storage is provided only for DAS Enterprise Edition V1.
    
-   Unit price for excess storage: USD 0.0019 per GB-hour.
    

Applicable regions: China (Hong Kong) and Singapore.

**Security audit (SecurityAudit)**

-   Chinese mainland: USD 0.08 per GB.
    
-   China (Hong Kong) and regions outside China: USD 0.12 per GB.
    

-   Optional. You can enable or disable the feature separately.
    
-   You are charged for the new version of the security audit feature based on the log volume.
    

#### **Economy edition**

**Billable items**

**Billing method**

**Pricing**

**Description**

Basic plan

Subscription

USD 7.5714 per month

Up to 10 database instances can be connected.

Medium plan

USD 21.4286 per month

Up to 50 database instances can be connected.

Advanced plan

USD 42.8571 per month

The number of database instances that can be connected is not limited.

#### Basic Edition

Complimentary.

#### Enterprise Edition V3

**Important**

Billing for Enterprise Edition V3 is feature-based, offering more flexibility and significant cost savings.

-   Upon activating Enterprise Edition V3, **log traffic** fees apply by default, with additional fees incurred based on the use of specific features.
    
-   Data migration from Enterprise Edition V1 and V2 to V3 is complimentary. Charges apply according to the source version before migration and the destination version upon completion. For more information, see [the referenced document](/help/en/das/user-guide/faq#a3a950500f3s3).
    

##### **Enterprise Edition V3 billing method overview**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1176685471/CAEQORiBgMCl8ay1rRkiIDJmZGE2ODQ0MWI2MjQwYjRiYTljMzZjZGJiZTI3Njg34179735_20240619161305.059.svg)

##### **Billing examples**

The following are two billing examples based on business scenarios and selected features:

###### Scenario

Supports comprehensive SQL log recording and cluster analysis for quick SQL issue querying and resolution, emergency service handling, and in-depth optimization. For more information, see [SQL Explorer and Audit](/help/en/das/user-guide/sql-explorer-and-audit-5/). In the O&M scenario, consider enabling the following features.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5776267371/p889304.png)

For an instance with 10 GB of daily write traffic, set **SQL Log Storage** to 30 days and **Log Indexing** hot storage to 7 days.

**Note**

The **SQL Log Storage Duration** is the total time for **SQL Log Storage**, which defaults to cold storage. For instance, after enabling log indexing, new logs are stored in hot storage for 7 days and then in cold storage for the remaining 23 days.

**Feature**

**Billable items**

**Daily unit price (for Alibaba Cloud public cloud in the Chinese mainland)**

**Daily usage**

**Daily fee**

**SQL logs**

**Log traffic (DataIngestion)**

0.24 CNY/GB

10 GB

2.4 CNY

**Cold storage (SqlInsightColdDataSize)**

0.003 CNY/GB/day

After SQL logs start to be stored in cold storage

10 GB on the first day

20 GB on the second day

……

and 230 GB on the 23rd day

0

(Logs can be stored in cold storage free of charge for 30 days.)

**Log indexing**

**Log indexing (RealTimeSearchAnalytics)**

0.24 CNY/GB

10 GB

2.4 CNY

**Hot storage (SqlInsightHotDataSize)**

0.01 CNY/GB/day

After this feature is enabled

the daily usage is 10 GB on the first day

20 GB on the second day

……

and 70 GB on the seventh day

(Data is dumped to cold storage after seven days.)

If data is stored in hot storage for seven days

10 × (7 - 1) × 0.01 = 0.6 CNY

(Logs are stored in hot storage free of charge on the first day.)

**SQL Explorer**

**Insight analysis (InsightAnalysis)**

0.08 CNY/GB

10 GB

0.8 CNY

###### Audit and compliance

Meets bank-level security compliance and regulatory requirements in the Chinese mainland, offering long-term transparent monitoring of database behavior with real-time alerts. It detects abnormal access, vulnerability attacks, data breaches, and baseline deviations to protect database services. For more information, see [Security Audit (new version)](/help/en/das/user-guide/security-audit-new-version/). In this scenario, consider enabling the following features.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5776267371/p889309.png)

For an instance with 10 GB of daily write traffic, set **SQL Log Storage** to 180 days to comply with regulations in the Chinese mainland.

**Note**

-   The **SQL Log Storage Duration** is the total storage time for **SQL Log**, which defaults to cold storage.
    
-   To comply with regulations in the Chinese mainland, the cold storage duration must be at least 180 days.
    

**Feature**

**Billable items**

**Daily unit price (for Alibaba Cloud public cloud in the Chinese mainland)**

**Daily usage**

**Daily fee**

**SQL logs**

**Log traffic (DataIngestion)**

0.24 CNY/GB

10 GB

2.4 CNY

**Cold storage (SqlInsightColdDataSize)**

0.003 CNY/GB/day

10 GB on the first day

20 GB on the second day

……

and 1,800 GB on the 180th day

10 × (180 - 30) × 0.003 = 4.5 CNY

(Logs can be stored in cold storage free of charge for 30 days.)

**Security audit**

**Security audit (SecurityAudit)**

0.48 CNY/GB

10 GB

4.8 CNY

##### **Public cloud**

**Billable items**

**Billing method**

**Pricing in the Chinese mainland**

**Pricing in Hong Kong (China) and regions outside China**

**Description**

**Log traffic (DataIngestion)**

Pay-as-you-go

0.04 USD/GB

0.06 USD/GB

Default Fee.

You are charged for the traffic consumed for collecting, transferring, and writing logs to storage on a pay-as-you-go basis.

For more information, see [the referenced document](#d5ad4c375eevs).

**Log indexing (RealTimeSearchAnalytics)**

0.04 USD/GB

0.06 USD/GB

You are charged fees after you enable the log indexing feature.

Log indexes are stored as hot data. DAS dynamically adjusts and optimizes indexes to ensure rapid data retrieval.

If you enable the log indexing feature, log indexes can be stored in hot storage free of charge for one day.

**SQL Explorer (InsightAnalysis)**

0.0134 USD/GB

0.02 USD/GB

You are charged for automatic data aggregation and analysis by using the SQL Explorer feature based on the log volume.

**Hot storage (SqlInsightHotDataSize)**

0.00167 USD/GB/day

0.0025 USD/GB/day

You are charged for hot storage based on the log volume and storage duration.

Logs can be stored in hot storage free of charge for one day after they are written to hot storage. If cold storage is enabled, the logs are automatically dumped to cold storage free of charge after the specified hot storage duration ends.

Logs can be stored in hot storage for up to seven days.

**Cold storage (SqlInsightColdDataSize)**

0.0005 USD/GB/day

0.00075 USD/GB/day

Default Fee.

You are charged for cold storage based on the log volume and storage duration.

-   If hot storage is disabled, logs are stored only in cold storage. Logs can be stored in cold storage free of charge for 30 days.
    
-   If hot storage is enabled:
    
    -   New logs are stored in hot storage (Logs are stored in hot storage free of charge on the first day.). You are charged for hot storage during the hot storage period (`hot storage duration - first day`).
        
    -   After the specified hot storage duration ends, the logs are automatically dumped to cold storage free of charge. Logs can be stored in cold storage free of charge during the cold storage period (`30 days - hot storage duration`).
        

**Cold query (SqlScanDataSize)**

0.0025 USD/GB

0.00375 USD/GB

You are charged for querying logs in cold storage offline based on the log volume.

**Cold query (SqlScanDataSize)**

0.067 USD/GB

0.1 USD/GB

You are charged for data exporting and dumping. Currently, this service is free of charge.

**Security audit (SecurityAudit)**

0.08 USD/GB

0.12 USD/GB

You are charged for the new version of the security audit feature based on the log volume.

#### Enterprise Edition V2

##### Public cloud

**Billable items**

**Billing method**

**Pricing in the Chinese mainland, Malaysia (Kuala Lumpur), and Indonesia (Jakarta)**

**Pricing in Hong Kong (China) and Singapore**

**Description**

**Hot storage (SqlInsightHotDataSize)**

Pay-as-you-go

0.00145 USD/GB/hour

0.002175 USD/GB/hour

Data is stored in high-performance storage devices to provide query acceleration and SQL aggregation information capabilities. The SQL Explorer and Audit data generated in the previous seven days is stored in hot storage.

**Cold storage (SqlInsightColdDataSize)**

0.00018 USD/GB/hour

0.00027 USD/GB/hour

Data is stored in low-cost storage devices to reduce usage costs. SQL Explorer and Audit data that exceeds the previous seven days is automatically transferred from hot storage to cold storage. The response time of a cold data query is longer than that of a hot data query.

Data query fee (**SqlScanDataSize**)

0.029 USD/GB

0.0435 USD/GB

You are charged for querying data that is stored in cold storage on a pay-as-you-go basis.

**Security audit (SecurityAudit)**

0.08 USD/GB

0.12 USD/GB

-   Optional. You can enable or disable the feature separately.
    
-   You are charged for the new version of the security audit feature based on the log volume.
    

#### **Enterprise Edition V1** and V0

**Important**

Enterprise Edition V1 incurs subscription fees only.

**Billable items**

**Billing method**

**Pricing**

**Description**

**Subscription costs**

Subscription

USD 6.2 per instance-month

The number of instances used for billing refers to the specified quota of DAS Enterprise Edition V1, which indicates the total number of database instances for which you can enable DAS Professional Edition V1.

For example, if the current account's Enterprise Edition V1 quota is 3 and the number of database instances with DAS Professional Edition enabled is 1, then the subscription fee for DAS Professional Edition for this account is `6.2 USD/month × 3 = 18.6 USD/month`.

**Important**

You are charged subscription fees only for DAS Enterprise Edition V1.

**Storage fees for SQL Explorer (sql\_storage\_used)**

Pay-as-you-go

-   Free quota: 5 GB of free storage.
    
    **Important**
    
    Free storage is provided only for DAS Enterprise Edition V1.
    
-   Unit price for excess storage: USD 0.0013 per GB-hour.
    

Pricing in the Chinese mainland, Malaysia (Kuala Lumpur), and Indonesia (Jakarta).

-   Free quota: 3 GB of free storage.
    
    **Important**
    
    Free storage is provided only for DAS Enterprise Edition V1.
    
-   Unit price for excess storage: USD 0.0019 per GB-hour.
    

Applicable regions: China (Hong Kong) and Singapore.

**Security audit (SecurityAudit)**

-   Chinese mainland: USD 0.08 per GB.
    
-   China (Hong Kong) and regions outside China: USD 0.12 per GB.
    

-   Optional. You can enable or disable the feature separately.
    
-   You are charged for the new version of the security audit feature based on the log volume.
    

#### **Economy edition**

**Billable items**

**Billing method**

**Pricing**

**Description**

Basic plan

Subscription

USD 7.5714 per month

Up to 10 database instances can be connected.

Medium plan

USD 21.4286 per month

Up to 50 database instances can be connected.

Advanced plan

USD 42.8571 per month

The number of database instances that can be connected is not limited.

#### Basic Edition

Complimentary.
