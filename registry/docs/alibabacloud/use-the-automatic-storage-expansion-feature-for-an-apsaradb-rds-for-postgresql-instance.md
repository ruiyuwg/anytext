Database Autonomy Service (DAS) provides automatic storage expansion for ApsaraDB RDS for PostgreSQL. If the used storage of an ApsaraDB RDS for PostgreSQL instance is greater than or equal to the specified threshold, DAS automatically expands the storage capacity of the RDS instance to ensure business stability.

## Prerequisites

-   Your RDS instance uses cloud disks.
    
    **Note**
    
    For more information about how to configure automatic storage expansion for RDS instances that run different database engines, see the following topics:
    
    -   ApsaraDB RDS for MySQL instances: [Use the automatic storage expansion feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-automatic-storage-expansion-feature-for-an-apsaradb-rds-for-mysql-instance#task-2296866)
        
    -   ApsaraDB RDS for SQL Server instances: [Configure automatic storage expansion](/help/en/rds/apsaradb-rds-for-sql-server/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-sql-server-instance#main-2316147)
        
    
-   The balance in your Alibaba Cloud account is sufficient for the expansion. For more information about billing rules, see [Specification changes](/help/en/rds/product-overview/specification-changes).
    
-   A service-linked role is created for DAS. For more information, see [AliyunServiceRoleForDAS role](/help/en/das/user-guide/aliyunservicerolefordas-role#task-1930737).
    
    **Note**
    
    If no service-linked roles are created for DAS, the system automatically creates a service-linked role before the automatic storage expansion.
    

## Usage notes

-   After the storage capacity of your RDS instance is expanded, the storage capacity cannot be automatically reduced. However, you can manually reduce the storage capacity by changing the instance specifications. For more information, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance#concept-efl-pln-wdb).
    
-   If your RDS instance is a primary RDS instance and has read-only RDS instances, the system checks the storage capacity of each read-only instance when automatic storage expansion is triggered for the primary RDS instance. If the storage capacity of a read-only RDS instance is less than the required storage capacity of the primary RDS instance after the capacity expansion, the system preferentially expands the storage capacity of the read-only instance. After the system expands the storage capacity of all read-only instances, the system expands the storage capacity of the primary instance.
    
-   If the RDS instance is being backed up, you can start an automatic storage expansion task after the backup is complete.
    

## Billing rules

The billing rules for automatic storage expansion are the same as the billing rules for manual storage expansion of an RDS instance. For more information, see [Specification changes](/help/en/rds/product-overview/specification-changes).

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  Go to the **Autonomous Function Management** panel.
    
    -   In the left-side navigation pane, choose **Autonomy Services** > **Diagnostics**. On the page that appears, click the **Autonomy Center** tab. On the **Autonomy Center** tab, click **Autonomy Service Settings**.
        
    -   In the left-side navigation pane, choose **Autonomy Services** > **Dashboard**. On the page that appears, click **Autonomy Service Settings**.**Performance Trends**
        
    
3.  On the **Autonomous Function Settings** tab, click the **Auto Scaling** tab. Then, click **Add Policy**. In the panel that appears, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Policy Name**
    
    The name of the policy.
    
    **Mode**
    
    The mode of the policy. Select **Automatic Storage Expansion**.
    
    **Engine Type**
    
    The type of the database engine. Only **RDS PostgreSQL** is supported.
    
    **Specifications**
    
    The specifications of the RDS instance. Only **Disks** is supported.
    
    **Used Storage Space ≥**
    
    The threshold that triggers storage capacity expansion. The value equals the percentage of the used storage to the total storage capacity. Valid values: 50% to 90%. Default value: 50%.
    
    When the percentage of the used storage of the RDS instance is greater than or equal to the value of the Used Storage Space ≥ parameter, the system automatically expands the storage based on the larger value of the following items:
    
    -   5 GB.
        
        **Note**
        
        If the storage capacity of the RDS instance is less than 50 GB and the percentage of the available storage is less than 10% of the storage capacity, the step size for storage capacity expansion is adjusted to 10 GB.
        
    -   15% of the current storage capacity of the RDS instance. The result is the nearest integer that is a multiple of 5.
        
    
    For example, if the current storage capacity of your RDS instance is 100 GB, 15% of the current storage capacity is 15 GB, which is larger than 5 GB. Therefore, the storage capacity of the RDS instance is increased by 15 GB when the threshold is reached. After the expansion, the storage capacity of the RDS instance is 115 GB.
    
    **Note**
    
    The interval between two storage capacity expansion operations must be at least 10 minutes.
    
    **Maximum Storage**
    
    The maximum storage capacity of the RDS instance after automatic storage expansion. The specified value must be greater than or equal to the current total storage capacity of the instance.
    
    -   If the RDS instance uses enhanced SSDs (ESSDs), you can set this parameter to 32,000 GB.
        
    -   If the RDS instance uses standard SSDs, you can set this parameter to 6,000 GB.
        
    
4.  Click **OK**.
    
5.  In the **Recommended Policies** section, click **Apply** in the **Actions** column to add a policy to the RDS instance.
    
    **Note**
    
    -   To modify a policy, you can click **Actions** in the **Modify** column of the policy. In the **Update Policy** panel, update the policy settings.
        
    -   To cancel the application of a policy to the RDS instance, you can click **Applied Policies** in the **Actions** column of the policy in the **Cancel** section.
        
    

## View the result of automatic storage expansion

1.  On the [Autonomy Center](/help/en/rds/apsaradb-rds-for-postgresql/use-the-autonomy-center-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2293947) page, select a time range to view the **Elastic Scaling Events** that occurred during the selected time range.
    
2.  Click **Details** in the **Elastic Scaling Events** section to view the details of automatic storage expansion.
    
    ![弹性伸缩时间结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7806228561/p447213.png)
