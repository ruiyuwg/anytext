Cold data archiving moves infrequently accessed data from PolarDB for MySQL to Object Storage Service (OSS), reducing storage costs while keeping the data queryable. Archived data is stored in CSV or ORC (Optimized Row Columnar) format.

## Supported editions and versions

Cold data archiving supports two archive formats with different version requirements.

### CSV format

**Edition**

**Required version**

Cluster Edition

MySQL 8.0.1 revision 8.0.1.1.47 or later, or MySQL 8.0.2 revision 8.0.2.2.10 or later

Multi-master Cluster (Limitless) Edition

Kernel version 8.0.1.0.13 or later

### ORC format

**Edition**

**Required version**

Cluster Edition

Revision version 8.0.2.2.30 or later

Multi-master Cluster (Limitless) Edition

Revision version 8.0.2.2.30 or later

### CSV and ORC comparison

**Aspect**

**CSV**

**ORC**

**Compatibility**

Widely supported by analytics and ETL tools

Optimized for columnar analytics workloads

**Version availability**

Available on MySQL 8.0.1 and 8.0.2

Requires MySQL 8.0.2 revision 8.0.2.2.30 or later

## Limitations

**Important**

After cold data archiving is enabled, it cannot be disabled.

-   Cold data tables in OSS cannot be backed up or restored. When a cluster is restored from backups, cold data tables in OSS are skipped by default. For more information, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-72).
    
-   Cold data tables in OSS cannot be accessed from a secondary cluster in a Global Database Network (GDN). For more information, see [Add and manage a secondary cluster](/help/en/polardb/polardb-for-mysql/user-guide/manage-a-secondary-cluster).
    

## Billing

If the amount of archived cold data displayed in the console is 0, no additional fees are incurred.

## Enable cold data archiving

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Clusters**.
    
3.  In the upper-left corner, select the region where the target cluster is deployed.
    
4.  On the **Clusters** page, click the cluster name.
    
5.  In the left-side navigation pane, choose **Settings and Management** > **Data Lifecycle**. ![Data Lifecycle navigation](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1657114171/p781252.png)
    
6.  On the **Data Archive (Cold Data)** tab, click **Enable**.
    

## View archived data

After you enable cold data archiving, open the **Cold Data Archiving** page to view:

-   Total amount of archived cold data
    
-   Details of archived databases and tables
    

![Cold data archiving information](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8684044961/p529899.png)

## References

-   [FAQ about cold data archiving](/help/en/polardb/polardb-for-mysql/user-guide/faq-6)
