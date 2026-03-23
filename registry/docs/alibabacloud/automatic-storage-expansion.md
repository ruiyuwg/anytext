If the storage capacity of a database is insufficient, data may fail to be written to the database, which causes data loss or even database breakdown and seriously affects your business. Database Autonomy Service (DAS) provides the automatic storage expansion feature. If the used storage capacity of a database instance is greater than or equal to the specified threshold, DAS automatically expands the storage capacity of the database instance. During the expansion, you do not need to restart the instance, and your services are not affected.

## Prerequisites

-   The database instance that you want to manage is of the type described in the following table.
    
    **Database instance**
    
    **Region**
    
    ApsaraDB RDS for PostgreSQL instance that uses standard SSDs or Enterprise SSDs (ESSDs)
    
    The automatic storage expansion feature depends on the anomaly detection feature. You can enable automatic storage expansion only for database instances in regions that support the anomaly detection feature. The following regions support the anomaly detection feature for ApsaraDB RDS for PostgreSQL instances:
    
    China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Chengdu), China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), UAE (Dubai), Germany (Frankfurt), US (Silicon Valley), US (Virginia), and UK (London)
    
    **Note**
    
    For information about how to expand the storage capacity of an ApsaraDB RDS for MySQL or ApsaraDB RDS for SQL Server instance, see [Automatic space expansion](/help/en/das/user-guide/automatic-space-expansion#multiTask361).
    
-   The balance in your Alibaba Cloud account is sufficient to pay for the resources required to expand the storage.
    
-   The service-linked role for DAS is created. For more information, see [AliyunServiceRoleForDAS role](/help/en/das/user-guide/aliyunservicerolefordas-role#task-1930737).
    
    **Note**
    
    If the service-linked role for DAS is not created, the system automatically creates a service-linked role before the automatic storage expansion.
    

## Usage notes

-   After the storage capacity of your database instance is expanded, the storage capacity cannot be automatically reduced. However, you can manually reduce the storage capacity by changing the instance specifications. For more information, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance#concept-efl-pln-wdb).
    
-   From February 28, 2023, the automatic storage expansion feature is optimized for database instances in different regions. If your database instance has read-only instances, DAS automatically checks the storage capacity of each read-only instance when automatic storage expansion is triggered for the primary instance. If the storage capacity of one or more read-only instances is smaller than the desired storage capacity of the primary instance, DAS first expands the storage capacity of the read-only instances. After the storage capacity of each read-only instance is expanded, DAS automatically expands the storage capacity of the primary instance. For more information, see [\[Notice\] Optimization of automatic storage expansion for ApsaraDB RDS for MySQL instances and ApsaraDB RDS for PostgreSQL instances](/help/en/das/product-overview/optimization-of-automatic-storage-expansion-for-apsaradb-rds-for-mysql-instances-and-apsaradb-rds-for-postgresql-instances#concept-2303965).
    
-   If a database instance is being backed up when automatic storage expansion is triggered, the automatic storage expansion task is postponed until the backup is complete.
    

## Billing

The billing rules for automatic space expansion are the same as those for manual space expansion of ApsaraDB RDS instances. For more information, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-postgresql/specification-changes).

## Procedure

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  Add an automatic storage expansion policy.
    
    -   Add an automatic storage expansion policy on the **Management and Settings** page.
        
        1.  In the left-side navigation pane, choose **Resources** > **Auto Scaling Settings**.
            
        2.  In the **Auto Scaling Policies** section, click **Add Policy**. In the **Add Policy** panel, configure the following parameters.
            
            Table 1. Parameters
            
            **Parameter**
            
            **Description**
            
            **Policy Name**
            
            The name of the policy.
            
            **Mode**
            
            The mode of the policy. Select **Automatic Storage Expansion** from the Mode drop-down list.
            
            **Engine Type**
            
            The type of the database engine. Set the value to **RDS PostgreSQL**.
            
            **Specifications**
            
            The specifications of the database engine. Set the value to **Disks**.
            
            **Used Storage Space ≥**
            
            The ratio of the used storage space to the total storage capacity. Valid values: 50 to 90. Default value: 50. Unit: percentage.
            
            When the percentage of the used storage capacity of the database instance is greater than or equal to the value of this parameter, the system automatically expands the storage capacity by the larger one of the following values:
            
            -   5 GB
                
                **Note**
                
                If the storage capacity of the database instance is less than 50 GB and the available storage is less than 10% of the total storage capacity, the step size for storage capacity expansion is adjusted to 10 GB.
                
            -   15% of the current storage capacity of the database instance. The result is the nearest integer that is a multiple of 5.
                
            
            **Note**
            
            The interval between two storage expansion operations is at least 10 minutes.
            
            **Maximum Storage**
            
            The maximum storage capacity of the database instance after automatic expansion. The specified value must be greater than or equal to the current total storage capacity.
            
            -   If the database instance uses ESSDs, you can set this parameter up to 32,000 GB.
                
            -   If the database instance uses standard SSDs, you can set this parameter up to 6,000 GB.
                
            
        3.  Click **Next Step**.
            
        4.  In the **Apply Policies** dialog box, select the database instances to which you want to apply the policy, and click the ![xy](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1899358461/p371832.png) icon.
            
        5.  Click **Confirm** to apply the policy to the selected database instances.
            
    -   Add an automatic storage expansion policy on the **Autonomous Function Settings** tab of the **Autonomous Function Management** panel.
        
        1.  In the left-side navigation pane, choose **Intelligent O&M Center** > **Instance Monitoring**.
            
        2.  On the page that appears, find the database instance that you want to manage and click the instance ID. The instance details page appears.
            
        3.  On the instance details page, click **Autonomy Service Settings** in the upper-right corner.
            
        4.  On the **Autonomous Function Settings** tab of the **Autonomous Function Management** panel, click the **Auto Scaling** tab. On the Auto Scaling tab, click **Add Policy**. In the Add Policy panel, add an automatic storage expansion policy. For more information about how to configure the parameters, see the [Parameters](#table-cjm-iv5-t1z) section of this topic.
            
        5.  In the **Recommended Policies** section, find the policy that you want to apply and click **Apply** in the **Actions** column.
            
            **Note**
            
            -   In the **Recommended Policies** section, find the policy that you want to apply and click **Apply** in the **Actions** column.
                
            -   To cancel a policy for the database instance, find the policy and click **Cancel** in the **Actions** column in the **Applied Policies** section.
                
            
        6.  Click **OK**.
            
        7.  In the **Alert Configuration** section, configure an alert template and subscribe to alert notifications. This helps you understand the status of an automatic storage expansion task at the earliest opportunity.
            
            The system automatically configures an alert template and adds alert rules for the required autonomy events in the alert template. For more information about how to configure an alert template and alert rules for your database instance, see [Configure alert templates](/help/en/das/user-guide/configure-alert-templates) and [Configure alert rules](/help/en/das/user-guide/configure-alert-rules).
            
        8.  In the **Select Contact Group** section, select an alert contact group.
            
            -   Click **Add Contact** to add an alert contact.
                
            -   Click **Create Contact Group** to create an alert contact group.
                
            -   Find the alert contact that you want to manage and click **Edit** or **Remove** in the Actions column to modify or delete information about the alert contact.
                
            
            For more information, see [Manage alert contacts](/help/en/das/user-guide/manage-alert-contacts).
            
        9.  Click **Submit Configuration**. In the dialog box that appears, confirm the configuration.
            
    

## View the results of automatic storage expansion

1.  In the left-side navigation pane of the DAS console, choose **Intelligent O&M Center** > **Instance Monitoring**.
    
2.  On the page that appears, find the database instance that you want to view and click the instance ID. The instance details page appears.
    
3.  On the instance details page, click **Autonomy Center** in the left-side navigation pane.
    
4.  On the **Autonomy Center** page, select a time range to view the auto scaling events that occurred during the selected time range.
    
5.  Click **Details** in the **Elastic Scaling Events** section to view the details of automatic storage capacity expansion.
    
    ![弹性伸缩时间结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7806228561/p447213.png)
    

## References

[Auto Scaling](/help/en/das/product-overview/auto-scaling-1#concept-1955467)
