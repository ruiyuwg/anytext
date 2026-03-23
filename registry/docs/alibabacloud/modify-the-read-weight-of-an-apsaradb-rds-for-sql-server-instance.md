During peak hours or in scenarios in which highly concurrent read operations are performed, you can modify read weights for the read-only routing endpoint of an ApsaraDB RDS for SQL Server instance based on your business requirements. The read-only routing endpoint automatically forwards read requests to secondary nodes or all involved read-only RDS instances based on the new read weights. This helps meet different business requirements and loads and maximizes the performance of read/write splitting.

## Prerequisites

A read-only RDS instance is created. For more information, see [Create a read-only ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-a-read-only-apsaradb-rds-for-sql-server-instance).

## Procedure

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Cluster Management**.
    
3.  In the Basic Information section, click **Configure Readonly Splitting Address** . In the dialog box that appears, set Read Weight to **Customized Distribution** and configure Distribution.
    
    A higher read weight indicates more read requests to process. For example, if the primary RDS instance has three read-only RDS instances whose read weights are 100, 200, and 200, the read-only RDS instances process read requests at a ratio of 1:2:2.
    
    -   **Automatic Distribution**: The system assigns a read weight to each read-only RDS instance based on the instance specifications. After you create a read-only RDS instance, the system automatically assigns a read weight to the created read-only RDS instance. You do not need to specify a read weight for the new read-only RDS instance. For more information, see [Rules of weight allocation by the system](/help/en/rds/apsaradb-rds-for-sql-server/default-read-weights#concept-zfq-f41-kgb).
        
    -   **Customized Distribution**: You must specify a read weight for each RDS instance in your database system. Valid values: 0 to 10000. By default, the read weight of a read-only RDS is 0. After you create a read-only RDS instance, you must specify a read weight for the read-only RDS instance based on your business requirements.
        
    
    **Note**
    
    If you delete a read-only RDS instance, its read weight is also removed, but the read weights of other RDS instances remain unchanged.
    
4.  Click **OK**.
    

## **References**

-   If you use RDS Cluster Edition, secondary nodes in your RDS cluster are readable. An RDS instance that runs RDS Cluster Edition is referred to as an RDS cluster. After you create an RDS cluster, the secondary nodes in the RDS cluster serve as read-only nodes by default. For more information, see [Configure the read attribute for a secondary RDS instance](/help/en/rds/apsaradb-rds-for-sql-server/configure-the-read-attribute-for-a-secondary-rds-instance).
    
-   If your RDS instance no longer requires read/write splitting, you can disable the read-only routing endpoint for your RDS instance. For more information, see [Disable read/write splitting by disabling the read-only routing endpoint](/help/en/rds/apsaradb-rds-for-sql-server/disable-the-read-only-routing-endpoint-of-an-apsaradb-rds-for-sql-server-instance).
