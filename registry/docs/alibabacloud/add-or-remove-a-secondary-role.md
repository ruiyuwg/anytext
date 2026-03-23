After creating an RDS for MySQL Global Active Database (GAD), you can create a new instance or add an existing instance as a secondary role to the GAD database instance group. When your business needs change, you can remove the secondary role from the instance group as needed. After removal, the secondary role can still function as an independent RDS for MySQL instance.

## **Prerequisites**

-   You have [created a GAD database](/help/en/rds/apsaradb-rds-for-mysql/create-or-delete-an-instance-group).
    
-   The status of the GAD database instance group must be **Running**.
    
-   Currently, only specific regions are supported:
    
    The primary and secondary instances must be deployed in different regions. Currently, the active geo-redundancy and DR features support the same regions, as listed below:
    
    -   **Mainland China:** China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Shenzhen), China (Guangzhou), China (Hohhot), China (Ulanqab), China (Heyuan), China (Chengdu)
        
    -   **China (Hong Kong)**
        
    -   **Regions outside China:** Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London)
        
    

## **Limits**

-   A GAD database instance group can contain only one primary role and supports adding 1 to 4 secondary roles.
    
-   For instance groups of the **GAD** type, secondary role instances must be deployed in regions different from the primary role instance, and different secondary roles must be in different regions. For instance groups of the **disaster recovery** type, secondary roles can be in the same region as or different regions from the primary role instance.
    
-   **An RDS for MySQL instance can be added as either a primary role or a secondary role to only one GAD database instance group**. The same RDS for MySQL instance cannot be added to multiple GAD database instance groups.
    
-   When a secondary role RDS for MySQL instance exists in a GAD database instance group, you cannot release (pay-as-you-go type) or unsubscribe (subscription type) from the instance. To release or unsubscribe from the instance, you must first [remove the secondary role from the instance group](#13f203e419nsj), and then [manually release the RDS for MySQL instance corresponding to the secondary role](/help/en/rds/apsaradb-rds-for-mysql/release-or-unsubscribe-from-an-instance).
    

## **Billing**

The GAD database fee includes **new RDS instance fees** and **DTS data synchronization fees**. When [adding an existing instance as a secondary role](#1c832d90fdz8j), no additional instance fee is charged, but data synchronization fees will apply. For billing details, see GAD [database billing](/help/en/rds/apsaradb-rds-for-mysql/what-is-a-global-active-database/#629b7275445jz).

## **Method 1: Create a new instance and add it as a secondary role**

You can create a new RDS for MySQL instance and add it as a secondary role to a GAD database instance group.

1.  Visit the [GAD](https://rds.console.alibabacloud.com/globalDataBase/cn-hangzhou?spm=a2c4g.11186623.0.0.415d2aa52dtUMc) instances page.
    
2.  On the GAD instance list page, click **Add Secondary Role** in the **Actions** column on the right side of the target instance group.
    
    **Note**
    
    You can also click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5952489471/p840833.png) on the details page of the target GAD database instance group.
    
3.  Configure the RDS for MySQL instance and DTS data synchronization link.
    
    1.  **Configure the RDS for MySQL instance**:
        
        The new RDS for MySQL instance must meet the following requirements. For descriptions of other configuration items, see [Create an RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-an-apsaradb-rds-for-mysql-instance-1).
        
        -   **Supported regions**: Only specific regions are supported. For details, see the **Prerequisites** section in this topic.
            
        -   **Instance type**: Must be greater than or equal to 2 cores and 4 GB (**Serverless has no such specification limit**).
            
        -   **Instance version**: currently only 5.7 and 8.0 are supported.
            
        -   **Storage capacity**: Must be greater than or equal to the **total storage capacity** of the primary role instance.
            
            **Note**
            
            You can go to the **Basic Information** page of the primary role instance details page and view the total storage space in the **Usage Statistics** section.
            
    2.  **Configure the DTS data synchronization link**:
        
        ## When the instance group type is active-active
        
        **Note**
        
        When the instance group type is **GAD**, the region where the secondary role is located must be different from the region where the primary role is located, and the regions where different secondary roles are located must be different.
        
        **Configuration item**
        
        **Description**
        
        **Data Synchronization Type**
        
        The synchronization type is set to **Two-way Synchronization** by default.
        
        **Conflict Resolution Policy**
        
        Evaluate your actual business needs and select an appropriate conflict resolution policy. For more information, see [Conflict types](/help/en/dts/user-guide/configure-two-way-data-synchronization-between-mysql-instances#section-lj1-t3m-e7v).
        
        -   **Overwrite On Conflict**
            
            When data synchronization encounters a conflict, it directly overwrites the conflicting record in the destination database. The synchronization task will not be interrupted.
            
        -   **Exit On Conflict**
            
            When data synchronization encounters a conflict, the synchronization task reports an error and exits. The synchronization task enters the failed state, and you need to manually repair the task.
            
        -   **Skip On Conflict**
            
            When data synchronization encounters a conflict, it skips the current synchronization statement and continues to execute, choosing to use the conflicting record in the destination database. The synchronization task will not be interrupted.
            
        
        **Primary role** **Database Account**
        
        Currently, only **privileged account** is supported.
        
        **Primary role** **Password**
        
        The password corresponding to the primary role privileged account.
        
        **Synchronization Objects**
        
        Click **Get Synchronization Objects**, select the objects to be synchronized in the **Source Database Objects** box, and then click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6519522571/p840857.png) to move them to the **Selected Objects** box.
        
        **Note**
        
        -   Synchronization of RDS for MySQL system libraries `sys` and `__recycle_bin__` is not supported.
            
        -   To change the name of a single/multiple synchronization object in the secondary role instance, click **Selected Objects** in the upper right corner of the box and click **Batch Edit**. For the setting method, see [Database, table, and column name mapping](/help/en/dts/user-guide/map-object-names#section-g21-1wy-98l).
            
        -   To filter the DML&DDL operations that need to be synchronized, right-click the synchronization object in **Selected Objects** and select the operations in the dialog box that appears.
            
        
        **Secondary role** **Database Account**
        
        The database account name of the secondary role instance.
        
        **Secondary role** **Password**
        
        The database account password of the secondary role instance.
        
        **Secondary role** **Confirm Password**
        
        The database account password of the secondary role instance.
        
        ## When the instance group type is disaster recovery
        
        **Configuration item**
        
        **Description**
        
        **Data Synchronization Type**
        
        Supports **One-way Synchronization** or **Two-way Synchronization**.
        
        **Important**
        
        The synchronization type and synchronization scope of the primary role and secondary role in the same instance group must be consistent.
        
        **Data Synchronization Scope**
        
        -   **One-way Synchronization**: Supports **Entire Instance Synchronization** or **Specified Databases And Tables**.
            
        -   **Two-way Synchronization**: Default is **Specified Databases And Tables**.
            
        
        **Primary role** **Database Account**
        
        Currently, only **privileged account** is supported.
        
        **Primary role** **Password**
        
        Enter the password corresponding to the primary role privileged account.
        
        **Synchronization Objects**
        
        Click **Get Synchronization Objects**, select the objects to be synchronized in the **Source Database Objects** box, and then click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6519522571/p840857.png) to move them to the **Selected Objects** box.
        
        **Note**
        
        -   This parameter only needs to be configured when synchronizing **Specified Databases And Tables** data. It is not required when synchronizing the entire instance data.
            
        -   Synchronization of RDS for MySQL system libraries `sys` and `__recycle_bin__` is not supported.
            
        -   To change the name of a single/multiple synchronization object in the secondary role instance, click **Selected Objects** in the upper right corner of the box and click **Batch Edit**. For the setting method, see [Database, table, and column name mapping](/help/en/dts/user-guide/map-object-names#section-g21-1wy-98l).
            
        -   To filter the DML&DDL operations that need to be synchronized, right-click the synchronization object in **Selected Objects** and select the operations in the dialog box that appears.
            
        
        **Secondary role** **Database Account**
        
        The database account name of the secondary role instance.
        
        **Secondary role** **Password**
        
        The database account password of the secondary role instance.
        
        **Secondary role** **Confirm Password**
        
        The database account password of the secondary role instance.
        
4.  Confirm the configuration information of the secondary role and DTS synchronization instance along with the fee details. If everything looks correct, click **Confirm Order**, and then click **OK**.
    
    The system will automatically create a secondary role RDS for MySQL instance and a DTS synchronization link.
    
5.  After successful payment, the page will redirect to the GAD database instance group details page. After the secondary role is successfully added, you can view the secondary role and DTS synchronization instance on this page. For more information about the page, see [View instance group information](/help/en/rds/apsaradb-rds-for-mysql/view-instance-group-information).
    

## **Method 2: Add an existing instance as a secondary role**

You can add an existing RDS for MySQL instance as a secondary role to a GAD database instance group. **The existing RDS for MySQL instance must meet the following conditions:**

-   **Instance type**: Must be greater than or equal to 2 cores and 4 GB (**Serverless has no such specification limit**).
    
-   **Instance version**: Must be consistent with the major version of the primary role instance. Currently, only 5.7 and 8.0 are supported.
    
-   **Instance series**: currently only High Availability Edition or Cluster Edition is supported.
    
-   **Storage space**: Must be greater than or equal to the **total storage space** of the primary role instance.
    

**Note**

You can check the above information on the instance **Basic Information** page. If the instance type or storage space is insufficient, you can increase it through [Change Configuration](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance).

1.  Visit [RDS Instance List](https://rds.console.alibabacloud.com/rdsList/basic), select a region at the top, and then click the target instance ID (secondary role instance).
    
2.  Click **Join GAD Database** in the upper right corner of the page.
    
3.  In the dialog box that appears, configure the secondary role information and target GAD database information.
    
    1.  **Configure secondary role information.**
        
        Configuration item
        
        Description
        
        **Database Account (privileged)**
        
        The database account of the secondary role. Currently, only privileged accounts are supported.
        
        **Note**
        
        If the secondary role does not have a database account yet, click **Create Now** to [create an account](/help/en/rds/apsaradb-rds-for-mysql/create-an-account-on-an-apsaradb-rds-for-mysql-instance) for the secondary role.
        
        **Password**
        
        The password corresponding to the secondary role privileged account.
        
    2.  **Configure GAD database information.**
        
        Configuration item
        
        Description
        
        **Region**
        
        Select the region where the GAD database instance group is located.
        
        **Select GAD Database (name/ID)**
        
        Select the target GAD database instance group.
        
        **Database Account (privileged)**
        
        The database account of the primary role in the instance group. Currently, only privileged accounts are supported.
        
        **Note**
        
        If the primary role does not have a database account yet, click **Create Now** to [create an account](/help/en/rds/apsaradb-rds-for-mysql/create-an-account-on-an-apsaradb-rds-for-mysql-instance) for the primary role.
        
        **Password**
        
        The password corresponding to the primary role privileged account.
        
4.  Click **Check**. After all prechecks pass, click **Next** in the lower right corner of the page.
    
5.  Configure the DTS data synchronization link, confirm the DTS synchronization fee details, and if everything looks correct, click **Confirm**, and then click **OK**.
    
    The system will automatically create a DTS synchronization link.
    
    ## When the instance group type is multi-active
    
    **Configuration item**
    
    **Description**
    
    **Data Synchronization Type**
    
    Default is **Two-way Synchronization**. No configuration required.
    
    **Conflict Resolution Policy**
    
    Evaluate your actual business needs and select an appropriate conflict resolution policy. For more information, see [Conflict types](/help/en/dts/user-guide/configure-two-way-data-synchronization-between-mysql-instances#section-lj1-t3m-e7v).
    
    -   **Overwrite On Conflict**
        
        When data synchronization encounters a conflict, it directly overwrites the conflicting record in the destination database. The synchronization task will not be interrupted.
        
    -   **Exit On Conflict**
        
        When data synchronization encounters a conflict, the synchronization task reports an error and exits. The synchronization task enters the failed state, and you need to manually repair the task.
        
    -   **Skip On Conflict**
        
        When data synchronization encounters a conflict, it skips the current synchronization statement and continues to execute, choosing to use the conflicting record in the destination database. The synchronization task will not be interrupted.
        
    
    **Synchronization Account Type**
    
    No configuration required. Default is **User Account**.
    
    **Synchronization Objects**
    
    Select the objects to be synchronized in the **Source Database Objects** box, and then click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6519522571/p840857.png) to move them to the **Selected Objects** box.
    
    **Note**
    
    -   Synchronization of RDS for MySQL system libraries `sys` and `__recycle_bin__` is not supported.
        
    -   To change the name of a single/multiple synchronization object in the secondary role instance, click **Selected Objects** in the upper right corner of the box and click **Batch Edit**. For the setting method, see [Database, table, and column name mapping](/help/en/dts/user-guide/map-object-names#section-g21-1wy-98l).
        
    -   To filter the DML&DDL operations that need to be synchronized, right-click the synchronization object in **Selected Objects** and select the operations in the dialog box that appears.
        
    
    ## When the instance group type is disaster recovery
    
    Configuration item
    
    Description
    
    **Data Synchronization Type**
    
    Supports **One-way Synchronization** or **Two-way Synchronization**. Select as needed.
    
    **Important**
    
    The synchronization type and synchronization scope of the primary role and secondary role in the same instance group must be consistent.
    
    **Data Synchronization Scope**
    
    -   **One-way Synchronization**: Supports **Entire Instance Synchronization** or **Specified Databases And Tables**.
        
    -   **Two-way Synchronization**: Default is **Specified Databases And Tables**.
        
    
    **Conflict Resolution Policy**
    
    Evaluate your actual business needs and select an appropriate conflict resolution policy. For more information, see [Conflict types](/help/en/dts/user-guide/configure-two-way-data-synchronization-between-mysql-instances#section-lj1-t3m-e7v).
    
    **Note**
    
    This parameter only needs to be configured for two-way synchronization.
    
    -   **Overwrite On Conflict**
        
        When data synchronization encounters a conflict, it directly overwrites the conflicting record in the destination database. The synchronization task will not be interrupted.
        
    -   **Exit On Conflict**
        
        When data synchronization encounters a conflict, the synchronization task reports an error and exits. The synchronization task enters the failed state, and you need to manually repair the task.
        
    -   **Skip On Conflict**
        
        When data synchronization encounters a conflict, it skips the current synchronization statement and continues to execute, choosing to use the conflicting record in the destination database. The synchronization task will not be interrupted.
        
    
    **Synchronization Account Type**
    
    No configuration required. Default is **User Account**.
    
    **Synchronization Objects**
    
    Select the objects to be synchronized in the **Source Database Objects** box, and then click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6519522571/p840857.png) to move them to the **Selected Objects** box.
    
    **Note**
    
    -   This parameter only needs to be configured when synchronizing **Specified Databases And Tables** data. It is not required when synchronizing the entire instance data.
        
    -   Synchronization of RDS for MySQL system libraries `sys` and `__recycle_bin__` is not supported.
        
    -   To change the name of a single/multiple synchronization object in the secondary role instance, click **Selected Objects** in the upper right corner of the box and click **Batch Edit**. For the setting method, see [Database, table, and column name mapping](/help/en/dts/user-guide/map-object-names#section-g21-1wy-98l).
        
    -   To filter the DML&DDL operations that need to be synchronized, right-click the synchronization object in **Selected Objects** and select the operations in the dialog box that appears.
        
    
6.  The page will redirect to the GAD database instance group details page. After the secondary role is successfully added, you can view the secondary role and DTS synchronization instance on this page. For more information about the page, see [View instance group information](/help/en/rds/apsaradb-rds-for-mysql/view-instance-group-information).
    

## **Remove a secondary role from an instance group**

**Note**

-   **Removing a secondary role** and **releasing or unsubscribing from a secondary role instance** are two different operations:
    
    -   **Removing a secondary role**: Only removes the secondary role from the GAD database instance group. **The RDS for MySQL instance corresponding to the secondary role is still retained and runs normally**, and the data in the instance remains unchanged. You can query this instance on the [Instance List](https://rds.console.alibabacloud.com/rdsList/cn-hangzhou) page.
        
    -   **Releasing or unsubscribing from a secondary role instance**: You need to first remove the secondary role, and then [release or unsubscribe from](/help/en/rds/apsaradb-rds-for-mysql/release-or-unsubscribe-from-an-instance) the secondary role instance. After that, the instance enters the [instance recycle bin](/help/en/rds/apsaradb-rds-for-mysql/manage-apsaradb-rds-for-mysql-instances-in-the-recycle-bin) and is permanently deleted when it expires.
        
-   To release the primary role instance, you need to first remove all secondary roles from the GAD database instance group, then [delete the instance group](/help/en/rds/apsaradb-rds-for-mysql/create-or-delete-an-instance-group#d50ff29d83sk5), and finally go to the [Instance List](https://rds.console.alibabacloud.com/rdsList/cn-hangzhou) page to release the RDS for MySQL instance corresponding to the primary role.
    

1.  Visit the GAD [database](https://rds.console.alibabacloud.com/globalDataBase/cn-hangzhou) page.
    
2.  On the GAD database instance group list page, click the instance ID of the target instance group.
    
3.  In the **RDS Instance List** section at the bottom of the page, click **Remove** in the **Actions** column on the right side of the secondary role.
    
4.  Click **Delete**.
    
    **Important**
    
    -   During the removal of the secondary role, the database connection of the RDS for MySQL corresponding to the secondary role will not be interrupted, and normal access to the RDS for MySQL instance will not be affected. After removal, it can still be added to the GAD database instance group as a new secondary role, but it needs to pass constraint checks.
        
    -   After the secondary role is removed from the GAD database instance group, the DTS synchronization instance (synchronization link) between the secondary role and the primary role will be interrupted, and the RDS for MySQL instance corresponding to the secondary role will be converted to read-write (rw) state and become an independent RDS instance.
        
    

## **References**

-   For information about what GAD database is, its product features, and benefits, see GAD [database](/help/en/rds/apsaradb-rds-for-mysql/what-is-a-global-active-database/).
    
-   RDS for MySQL supports [switching a secondary role to a primary role](/help/en/rds/apsaradb-rds-for-mysql/perform-primary-secondary-role-switchover-for-disaster-recovery) in a GAD database instance group, which can be used for disaster recovery switchover drills, geo-disaster recovery switchover, and other scenarios.
