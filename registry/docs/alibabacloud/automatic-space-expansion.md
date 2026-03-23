With automatic space expansion, you can set a storage threshold for your database. When storage usage reaches this threshold, the system automatically expands the storage space. This prevents data loss and database crashes that can affect your business. The instance is not restarted during the expansion, so your services are not affected.

## Prerequisites

-   The target database instance is:
    
    **Database**
    
    **Region**
    
    -   ApsaraDB RDS for MySQL instances that run the Basic, High-availability, or Cluster Edition and use cloud disks
        
    -   PolarDB for MySQL Standard Edition
        
    
    The automatic space expansion feature depends on anomaly detection. Therefore, the target database instance must be in a region that supports anomaly detection. The supported regions are:
    
    China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Nanjing - Local Region), China (Fuzhou - Local Region), China (Chengdu), China (Zhengzhou), China (Hong Kong), Japan (Tokyo), South Korea (Seoul), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok), UAE (Dubai), SAU (Riyadh - Partner Region), Germany (Frankfurt), US (Silicon Valley), US (Virginia), and UK (London)
    
    ApsaraDB RDS for SQL Server instances that run the High-availability Edition or Cluster Edition and use cloud disks
    
    **Note**
    
    Read-only instances of ApsaraDB RDS for SQL Server do not support automatic space expansion.
    
    China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Chengdu), China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), UAE (Dubai), Germany (Frankfurt), US (Silicon Valley), US (Virginia), and UK (London)
    
-   Your account has a sufficient balance to pay for the scale-out.
    
-   The [service-linked role for DAS](/help/en/das/user-guide/aliyunservicerolefordas-role#task-1930737) is created.
    
    **Note**
    
    If you have not created the service-linked role for DAS, the system automatically creates the role before performing the automatic space expansion.
    

## Background information

For more information, see [DAS Auto Scaling capabilities](/help/en/das/product-overview/auto-scaling-1#concept-1955467).

## Usage notes

-   If a database instance has read-only instances and automatic space expansion is triggered for the primary instance, the system checks the storage space of each read-only instance. If the storage space of a read-only instance is smaller than the target storage space of the primary instance after the expansion, the system expands the storage of the read-only instance first. After the storage of all read-only instances is expanded, the system then expands the storage of the primary instance.
    
-   Because of Windows driver limitations, this feature is unavailable for some instances. We recommend that you [upgrade the minor engine version of SQL Server](/help/en/rds/apsaradb-rds-for-sql-server/update-the-minor-engine-version-of-an-apsaradb-rds-for-sql-server-instance#task-2075103).
    

## Billing

The billing rules for automatic space expansion are the same as those for manually upgrading the storage space of an RDS instance. For more information, see [Billing for specification changes](/help/en/rds/product-overview/specification-changes).

## Procedure

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, click **Intelligent O&M Center** **>** **Instance Monitoring**.
    
3.  Find the target instance, click the instance ID, and then go to the instance details page.
    
4.  In the navigation pane on the left, click **Autonomy Center**.
    
5.  In the upper-right corner of the **Autonomy Center** page, click **Autonomy Service Settings**.
    
6.  On the **Autonomous Function Management** > **Autonomous Function Settings** tab, turn on the autonomous function switch.
    
7.  On the **Optimization and Throttling** tab, select **Automatic Space Expansion** and configure the parameters described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Available Storage Space ≤**
    
    The threshold for scaling out.
    
    When the available storage space of your instance is less than or equal to the threshold you set, the system scales out the storage by the larger of the following two values:
    
    -   5 GB.
        
        **Note**
        
        If the total storage space of the instance is less than 50 GB and the available storage space is less than 10% of the total storage space, the scaling step size is adjusted to 10 GB.
        
    -   15% of the current total storage space of the instance. The result is rounded to the nearest multiple of 5.
        
    
    For example, if the current total storage space is 100 GB, 15% of this is 15 GB, which is greater than 5 GB. When the threshold is reached and a scale-out is triggered, 15 GB of storage is added. After the scale-out, the total storage space is 115 GB.
    
    **Note**
    
    For PolarDB for MySQL Standard Edition instances, the scale-out threshold is set by default and does not need to be configured. For more information about the threshold, see [Scale-out thresholds for PolarDB for MySQL Standard Edition](#6a1a21f024cbe).
    
    **Maximum Storage of Automatic Expansion**
    
    The maximum **total storage space of the instance** after a scale-out. This value must be greater than or equal to the current total storage space of the instance.
    
    **Important**
    
    For PolarDB for MySQL Standard Edition database instances, the scaling step size is an integer multiple of 10. We recommend that you set the **Maximum Storage of Automatic Expansion** to an integer multiple of 10. Otherwise, the scale-out may fail or the storage may fail to reach the specified **Maximum Storage of Automatic Expansion**.
    
    **Note**
    
    The minimum interval between two space expansion operations is 10 minutes.
    
8.  Click **OK**.
    
9.  Configure an **Alert Rules in Template** and subscribe to alerts to receive timely notifications about the status of automatic storage expansion for your database instance.
    
    The system recommends an alert template and adds alert rules for the corresponding autonomy events. You can perform the configuration as prompted.
    
    **Note**
    
    -   If you have already configured an alert template for the instance, add alert rules for the corresponding autonomy events to the template as prompted.
        
    -   To set the alert template and alert rules yourself, see [Configure alert templates](/help/en/das/user-guide/configure-alert-templates) and [Configure alert rules](/help/en/das/user-guide/configure-alert-rules).
        
    
10.  Select an **Contacts in Contact Group** to receive alert notifications.
     
     -   Click **Add Contact** to add a new alert contact.
         
     -   Click **Create Contact Group** to create an alert contact group.
         
     -   Click **Edit** or **Remove** next to the target contact to modify or delete its information.
         
     
     For more information, see [Manage alert contacts](/help/en/das/user-guide/manage-alert-contacts).
     
11.  Click **Submit Configuration**. In the dialog box that appears, confirm the alert configuration.
     

## View the results of automatic space expansion

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, click **Intelligent O&M Center** **>** **Instance Monitoring**.
    
3.  Find the target instance, click the instance ID, and then go to the instance details page.
    
4.  In the navigation pane on the left, click **Autonomy Center**.
    
5.  On the **Autonomy Center** page, view the **Auto-Scaling Events** that occurred within the selected time range.
    
6.  Click **Details** to view the details of automatic storage expansion.![Auto Scaling event](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5343134861/p610553.png)
    

## Scale-out thresholds for PolarDB for MySQL **Standard Edition**

The scale-out threshold is related to the total storage space of the database instance, as shown in the following table:

**Total storage space**

**Scale-out threshold**

Total storage space < 120 GB

Available storage space < 50% of the total storage space

120 GB ≤ Total storage space < 1 TB

Available storage space < 30% of the total storage space

1 TB ≤ Total storage space < 10 TB

Available storage space < 20% of the total storage space

Total storage space ≥ 10 TB

Available storage space < 10% of the total storage space

## **References**

-   After the storage space is automatically expanded, automatic scale-in is not supported. To scale in the storage, you must manually change the configuration. For more information, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb).
    
    **Note**
    
    Manual scale-in is not supported for RDS SQL Server and PolarDB for MySQL Standard Edition instances.
    
-   You can enable [automatic fragment reclamation](/help/en/das/user-guide/automatic-tablespace-fragment-recycling) to clear tablespace fragments and reduce wasted storage space.
    
-   You can use the [storage analysis](/help/en/das/user-guide/storage-analysis-6) and [capacity assessment](/help/en/das/user-guide/capacity-assessment) features to view and analyze storage usage.
    
-   If the database instance is an RDS PostgreSQL instance, see [Automatic storage expansion](/help/en/das/user-guide/automatic-storage-expansion#task-2217098).
    
-   If the database instance is a PolarDB for MySQL instance, see [Set automatic storage expansion for ESSDs](/help/en/polardb/polardb-for-mysql/user-guide/auto-expand-essd-storage).
