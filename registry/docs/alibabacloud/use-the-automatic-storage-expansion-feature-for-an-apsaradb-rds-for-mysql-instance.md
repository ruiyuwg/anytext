If the storage capacity of an ApsaraDB RDS for MySQL instance is insufficient, data may fail to be written to the instance. As a result, data loss occurs or even the RDS instance breaks down, which seriously affects business operations. Database Autonomy Service (DAS) supports automatic storage expansion when the storage capacity reaches the threshold that you specify. During the expansion, you do not need to restart the RDS instance, and your services are not affected.

## Prerequisites

-   The RDS instance meets the following requirements:
    
    -   The RDS instance runs MySQL 8.0 or MySQL 5.7.
        
    -   The RDS instance uses cloud disks.
        
-   Your Alibaba Cloud account has sufficient balance to cover the fees of automatic storage expansion.
    
-   A service-linked role for DAS is created. For more information, see [AliyunServiceRoleForDAS role](/help/en/das/user-guide/aliyunservicerolefordas-role#task-1930737).
    
    **Note**
    
    If the role does not exist, a service-linked role is automatically created for DAS when you enable the automatic storage expansion feature.
    

## Usage notes

If your RDS instance has read-only RDS instances and automatic storage expansion is triggered for the primary RDS instance, the system automatically checks the storage capacity of each read-only RDS instance. If the storage capacity of a read-only RDS instance is smaller than the desired storage capacity of the primary RDS instance, the system first expands the storage capacity of the read-only RDS instance. After the storage capacity of each read-only RDS instance that is attached to the primary RDS instance is expanded, the system automatically expands the storage capacity of the primary RDS instance. For more information, see [\[Product changes/Feature changes\] Optimization of automatic storage expansion for ApsaraDB RDS for MySQL instances and ApsaraDB RDS for PostgreSQL instances](/help/en/rds/apsaradb-rds-for-mysql/optimization-of-automatic-storage-expansion-for-apsaradb-rds-for-mysql-instances-and-apsaradb-rds-for-postgresql-instances#concept-2303449).

## Billing rules

The billing rules for automatic storage expansion are the same as the billing rules for manual storage expansion. For more information, see [Change instance specifications](/help/en/rds/product-overview/specification-changes#concept-syv-qk2-vdb).

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, choose **Autonomy Services** > **Diagnostics**. On the page that appears, click the **Autonomy Center** tab. On the **Autonomy Center** tab, click **Autonomy Service Settings**.
    
3.  On the **Autonomous Function Settings** tab of the **Autonomous Function Management** panel, enable the autonomy service.
    
4.  On the **Optimization and Throttling** tab, select **Automatic Space Expansion** and configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Available Storage Space**
    
    The available storage of your RDS instance. When the remaining storage of your RDS instance is less than or equal to the value that is specified by the **Available Storage Space** parameter, the system automatically expands the storage capacity of your RDS instance based on the larger value of the following items:
    
    -   5 GB.
        
        **Note**
        
        If the storage capacity of the RDS instance is less than 50 GB and the percentage of the available storage is less than 10% of the storage capacity, the step size for storage capacity expansion is adjusted to 10 GB.
        
    -   15% of the current storage capacity of the RDS instance. The result is the nearest integer that is a multiple of 5.
        
    
    For example, if the total storage capacity is 100 GB, the storage capacity is expanded by 15 GB when the threshold is reached. After the expansion, the total storage capacity is 115 GB.
    
    **Maximum Storage of Automatic Expansion**
    
    The maximum **storage capacity that is allowed** after the storage capacity expansion. The value of this parameter must be greater than or equal to the current storage capacity of your RDS instance.
    
    -   If your RDS instance uses the Enterprise SSD (ESSD) storage type, the maximum value of this parameter can be 32,000 GB.
        
    -   If your RDS instance uses the standard SSD storage type, the maximum value of this parameter can be 6,000 GB.
        
        **Note**
        
        The standard SSD storage type is phased out. We recommend that you upgrade the storage type to ESSD. For more information, see [Upgrade the storage type of an ApsaraDB RDS for MySQL instance from standard SSDs to ESSDs](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-storage-type-of-an-apsaradb-rds-for-mysql-instance-from-standard-ssds-to-essds#task-2117848).
        
    
    **Note**
    
    The minimum interval between consecutive storage expansion events is 10 minutes.
    
5.  Click **OK**.
    
6.  Optional. In the **Alert Configuration** section, configure an **alert template** and subscribe to alert notifications. This helps you understand the status of an **automatic storage expansion task** at the earliest opportunity.
    
    The system recommends an alert template and adds alert rules for the required autonomy events in the alert template. You can configure the alert template as prompted.
    
    **Note**
    
    -   If you have configured an alert template for your RDS instance, you must add alert rules for the required autonomy events to the alert template as prompted.
        
    -   If you have not configured an alert template for your RDS instance but you want to configure one, you can configure the alert template by following the instructions provided in [Configure alert templates](/help/en/das/user-guide/configure-alert-templates) and [Configure alert rules](/help/en/das/user-guide/configure-alert-rules).
        
    
    1.  In the Select Alert Contact Group step, select an **alert contact group**.
        
        -   Click **Add Contact** to add an alert contact.
            
        -   Click **Create Contact Group** to create an alert contact group.
            
        -   Find the alert contact that you want to manage and click **Edit** or **Remove** in the Actions column to modify or delete information about the alert contact.
            
        
        For more information, see [Manage alert contacts](/help/en/das/user-guide/manage-alert-contacts).
        
    2.  Confirm the settings in the **Associate with Resources** step.
        
    3.  Click **Submit Configuration**. In the dialog box that appears, confirm the configuration.
        

## View the details of automatic storage expansion events

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, choose **Autonomy Services** > **Diagnostics**.
    
3.  On the **Autonomy Center** tab, select a time range and select **Auto-Scaling Events** for Type to view the auto scaling events that are generated within the selected time range.
    
4.  Click **Details** to the right of an auto scaling event to view the details of the auto scaling event.**Auto-Scaling Events**
    
    ![详情](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7051277761/p562537.png)
    

## **References**

-   After the storage capacity is expanded, the storage capacity cannot be automatically reduced. If you want to reduce the storage capacity, you must change the instance specifications to manually reduce the storage capacity. For more information, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb).
    
-   You can enable the automatic fragment reclamation feature to clear tablespace fragments and reduce storage capacity wastes. For more information, see [Use the automatic fragment reclamation feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-automatic-fragment-reclamation-feature-for-an-apsaradb-rds-for-mysql-instance).
    
-   You can use the storage analysis and capacity assessment features to view and analyze the storage usage. For more information, see [Use the storage analysis feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-storage-analysis-feature-for-an-apsaradb-rds-for-mysql-instance) and [Use the capacity assessment feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-capacity-assessment-feature-for-an-apsaradb-rds-for-mysql-instance).
    
-   For more information about how to automatically expand the storage capacity of RDS instances that run different database engines, see the following topics:
    
    -   [Use the automatic storage expansion feature for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/use-the-automatic-storage-expansion-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2294029)
        
    -   [Configure automatic storage expansion for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-sql-server-instance#main-2316147)
