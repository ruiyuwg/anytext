If the storage capacity of an ApsaraDB RDS for MySQL instance is insufficient, data may fail to be written to the instance. As a result, data loss occurs or even the RDS instance breaks down, which seriously affects business operations. ApsaraDB RDS for MySQL supports automatic storage expansion when the storage capacity of an RDS instance reaches the threshold that you specify. During the expansion, you do not need to restart the RDS instance, and your services are not affected.

## Prerequisites

-   The RDS instance uses the subscription or pay-as-you-go billing method.
    
    **Note**
    
    If the RDS instance uses the serverless billing method, the system automatically expands the storage capacity of the instance. You do not need to configure automatic storage expansion for the RDS instance.
    
-   The RDS instance runs RDS High-availability Edition or RDS Cluster Edition.
    
    **Note**
    
    If the RDS instance runs RDS Basic Edition with cloud disks, you can enable automatic storage expansion in the Database Autonomy Service (DAS) console. For more information, see [Automatic space expansion](/help/en/das/user-guide/automatic-space-expansion).
    
-   The RDS instance uses cloud disks.
    
-   The RDS instance is in the **Running** state.
    
-   The balance in your Alibaba Cloud account is sufficient for the expansion.
    

## Usage notes

When read-only RDS instances are attached to a primary RDS instance and automatic storage expansion is triggered for the primary RDS instance, the system automatically checks the storage capacity of each read-only RDS instance. If the storage capacity of a read-only RDS instance is smaller than the desired storage capacity of the primary RDS instance, the system first expands the storage capacity of the read-only RDS instance. After the storage capacity of each read-only RDS instance is expanded, the system automatically expands the storage capacity of the primary RDS instance. For more information, see [\[Notice\] Optimization of automatic storage expansion for ApsaraDB RDS for MySQL instances and ApsaraDB RDS for PostgreSQL instances](/help/en/rds/apsaradb-rds-for-mysql/optimization-of-automatic-storage-expansion-for-apsaradb-rds-for-mysql-instances-and-apsaradb-rds-for-postgresql-instances#concept-2303449).

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the **Usage Statistics** section of the page that appears, click **Settings** on the right of **Automatic Storage Expansion**.
    
    ![设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7289720261/p212936.png)
    
    **Note**
    
    If **Settings** is not displayed on the page, check whether your instance meets the requirements described in [Prerequisites](#prereq-1jk-fsi-ygc).
    
3.  Configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Automatic Storage Expansion**
    
    Specifies whether to enable or disable automatic storage expansion.
    
    **Available Storage ≤**
    
    The threshold based on which automatic storage expansion is triggered. The threshold is expressed as a percentage. If the available storage reaches the threshold, the system automatically expands the storage capacity of the RDS instance.
    
    **Note**
    
    The maximum amount of storage that you can expand is the larger value between the following values:
    
    -   5 GB. If the storage capacity of the RDS instance is less than 50 GB and the percentage of the available storage is less than 10% of the storage capacity, the step size for storage capacity expansion is adjusted to 10 GB.
        
    -   15% of the current storage capacity of the RDS instance. The result is the nearest integer that is a multiple of 5.
        
    
    For example, if the current storage capacity is 100 GB, the storage capacity is expanded by 15 GB when the threshold is reached. After the expansion, the total storage capacity is 115 GB.
    
    **Maximum Storage Capacity**
    
    The maximum **storage capacity of the RDS instance** after the storage capacity expansion. The value of this parameter must be greater than or equal to the current storage capacity of the RDS instance.
    
    The following list describes the maximum storage capacity that is supported by each type of cloud disk:
    
    -   If the RDS instance uses Enterprise SSDs (ESSDs), you can set this parameter to 32,000 GB.
        
    -   If the RDS instance uses Premium ESSDs, you can set this parameter to 64,000 GB.
        
    -   RDS instances that use standard SSDs: 6,000 GB
        
        **Note**
        
        The standard SSD storage type is phased out. We recommend that you upgrade the storage type of your RDS instance from standard SSD to ESSD. For more information, see [Upgrade the storage type from standard SSD to ESSD](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-storage-type-of-an-apsaradb-rds-for-mysql-instance-from-standard-ssds-to-essds#task-2117848).
        
    
4.  Click **OK**.
    

## **References**

-   After the storage capacity is expanded, the storage capacity cannot be automatically reduced. If you want to reduce the storage capacity, you must change the instance specifications to manually reduce the storage capacity. For more information, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb).
    
-   You can enable the automatic fragment reclamation feature to clear tablespace fragments and reduce storage capacity wastes. For more information, see [Use the automatic fragment reclamation feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-automatic-fragment-reclamation-feature-for-an-apsaradb-rds-for-mysql-instance).
    
-   You can use the storage analysis and capacity assessment features to view and analyze the storage usage. For more information, see [Use the storage analysis feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-storage-analysis-feature-for-an-apsaradb-rds-for-mysql-instance) and [Use the capacity assessment feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-capacity-assessment-feature-for-an-apsaradb-rds-for-mysql-instance).
    
-   For more information about the automatic storage expansions of RDS instances that run different database engines, see the following topics:
    
    -   ApsaraDB RDS for PostgreSQL instances: [Use the automatic storage expansion feature](/help/en/rds/apsaradb-rds-for-postgresql/use-the-automatic-storage-expansion-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2294029)
        
    -   ApsaraDB RDS for SQL Server instances: [Configure automatic storage expansion](/help/en/rds/apsaradb-rds-for-sql-server/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-sql-server-instance#main-2316147)
        

## Related operation

**Operation**

**Description**

[ModifyDasInstanceConfig](/help/en/rds/api-configure-automatic-storage-expansion#doc-api-Rds-ModifyDasInstanceConfig)

Configures automatic storage expansion.

## FAQ

Why am I unable to find **Settings** on the right of **Automatic Storage Expansion** in the **Usage Statistics** section?

You must check whether the RDS instance meets the prerequisites. If your RDS instance uses Premium Local SSDs, you must [manually expand the storage capacity](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance) or [change the storage type to cloud disk](/help/en/rds/apsaradb-rds-for-mysql/change-the-storage-type-from-local-ssd-to-essd) and then enable the automatic storage expansion feature.
