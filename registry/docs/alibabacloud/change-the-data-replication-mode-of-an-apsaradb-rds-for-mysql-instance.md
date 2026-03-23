This topic describes how to query and change the data replication mode of an ApsaraDB RDS for MySQL instance. The data replication mode specifies how data is replicated from the RDS instance to its secondary RDS instances. A suitable data replication mode increases the availability of your RDS instance.

## Prerequisites

Your RDS instance meets one of following requirements:

-   The RDS instance runs MySQL 5.7 or MySQL 8.0 on RDS High-availability Edition with Premium Local SSDs.
    
-   The RDS instance runs MySQL 5.7 or MySQL 8.0 on RDS High-availability Edition with Enterprise SSDs (ESSDs) and runs a minor engine version of 20201031 or later.
    
    **Note**
    
    -   If the RDS instance uses the standard SSD storage type, you must upgrade the storage type to ESSD. For more information, see [Upgrade the storage type of an ApsaraDB RDS for MySQL instance from standard SSDs to ESSDs](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-storage-type-of-an-apsaradb-rds-for-mysql-instance-from-standard-ssds-to-essds#task-2117848).
        
    -   For more information about how to update the minor engine version of an RDS instance, see [Update the minor engine version of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb11).
        
    
-   The RDS instance runs MySQL 5.6 on RDS High-availability Edition.
    
-   The RDS instance runs MySQL 5.7 or MySQL 8.0 on RDS Cluster Edition.
    
-   The RDS instance runs MySQL 5.5.
    

## Data replication modes

-   MGR
    
    MySQL Group Replication (MGR) is developed based on Paxos, a protocol for consensus in distributed-systems. Before a transaction is committed on the primary node, the system sends the data of the transaction to secondary nodes and ensures that a majority of secondary nodes receive the data. Compared with semi-synchronous replication and asynchronous replication, MGR ensures strong data consistency and higher data security. For more information, see [MGR overview](/help/en/rds/apsaradb-rds-for-mysql/introduction-to-the-mgr-mode#main-2319897).
    
-   Semi-synchronous
    
    After an update that is initiated by your application is complete on the primary RDS instance, the related log is synchronized to all the secondary RDS instances. The transaction that is used to perform the update is considered committed after the secondary RDS instances receive the log. Your database system does not need to wait for the secondary RDS instances to replay the log.
    
    If the secondary RDS instances are unavailable or a network interruption occurs between the primary and secondary RDS instances, the semi-synchronous mode is demoted to the asynchronous mode.
    
-   Asynchronous
    
    When your application initiates a request to add, delete, or modify data, the primary RDS instance responds to your application immediately after it completes the requested operation. At the same time, the primary RDS instance asynchronously replicates data to the secondary RDS instances. In asynchronous mode, the workloads on the primary RDS instance run as expected even if the secondary RDS instance is unavailable. However, if the primary RDS instance is unavailable, errors may occur due to data inconsistencies between the primary and secondary RDS instances.
    

## Data replication modes supported by various MySQL versions and RDS editions

**RDS edition**

**Replication mode**

RDS High-availability Edition

Semi-synchronous

Asynchronous

RDS Cluster Edition

Semi-synchronous

Asynchronous

MGR

RDS Basic Edition

Not supported

## **Query the data replication mode**

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the page that appears, click **Service Availability**.
    
3.  In the **Availability Information** section of the page that appears, check the value of the **Data Replication Mode** parameter.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7794838961/p726863.png)
    

## Change the data replication mode

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the page that appears, click **Service Availability**.
    
3.  In the **Availability Information** section of the page that appears, click **Change Data Replication Mode**.
    
4.  In the dialog box that appears, select a data replication mode and click **OK**.
    
    ![复制方式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7123852961/p575338.png)
    
    **Note**
    
    If your RDS instance runs RDS Cluster Edition, you can change the data replication mode in the Instance Topology Management section of the **Basic Information** page.
    

## FAQ

-   Which data replication mode is recommended?
    
    You can select a data replication mode based on your business requirements. If you require strong data consistency to ensure finance-grade reliability, we recommend that you use the MGR mode. The MGR mode is supported only for RDS Cluster Edition. If you require quick responses, we recommend that you use the asynchronous mode. In other scenarios, you can use the semi-synchronous mode.
    
-   Why am I unable to change the data replication mode of my RDS instance?
    
    Different RDS instances support different data replication modes. For more information, see [Data replication modes supported by various MySQL versions and RDS editions](#section-k4v-b78-w1y).
    

## Related operations

**Operation**

**Description**

[ModifyDBInstanceHAConfig](/help/en/rds/api-change-the-high-availability-mode-and-data-replication-mode#doc-api-Rds-ModifyDBInstanceHAConfig)

Changes the data replication mode and high availability mode of an instance.
