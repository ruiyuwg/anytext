This topic describes how to migrate Hive Metastore metadata that is stored in an ApsaraDB RDS database or a built-in MySQL database of an E-MapReduce (EMR) cluster to Data Lake Formation (DLF). This topic also describes how to modify the configurations of an EMR cluster to store metadata by using DLF. If you use DLF to store metadata, you can write data from various data sources to a data lake and build efficient data lake solutions.

## **Scenarios**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1464185671/CAEQUBiBgMCgy4GL2RkiIGNiNTJjOGI0YTdiYjRiNTFiNDNlY2UxNTRjNTY0MjZi4791558_20241204134237.365.svg)

1.  For information about how to migrate metadata from a big data cluster to an EMR cluster that stores metadata in DLF, see the [Migrate metadata](#2c0d687380f9y) section in this topic.
    
2.  For information about how to migrate metadata from an EMR cluster that stores metadata in a built-in MySQL database or self-managed ApsaraDB RDS database to an EMR cluster that stores metadata in DLF, see [Migrate metadata](#2c0d687380f9y).
    
3.  For information about how to change the metadata storage of an EMR cluster from built-in MySQL or self-managed ApsaraDB RDS to DLF, see [Use DLF for unified metadata storage for an EMR cluster](#2c0e79e880b5x).
    
    **Important**
    
    -   Note: If you want to use DLF to store metadata of an EMR cluster, the major version of the EMR cluster must be EMR V3.33 or later V3.X, EMR V4.6 or later V4.X, or EMR V5.1 or later V5.X.
        
    -   For EMR clusters of earlier versions, join the DingTalk group **33719678**.
        
    

## **Migrate metadata**

DLF allows you to quickly migrate metadata from a Hive metastore to a data lake in a visualized manner.

### **Preparations**

1.  Create an EMR cluster that stores metadata in a self-managed ApsaraDB RDS database. For more information, see [Configure a self-managed ApsaraDB RDS database](/help/en/emr/emr-on-ecs/user-guide/configure-a-self-managed-apsaradb-rds-for-mysql-database). In this example, a self-managed ApsaraDB RDS database is used.
    
2.  Create a Hive database in the EMR cluster. For more information, see [Use Hive to perform basic operations](/help/en/emr/emr-on-ecs/user-guide/use-hive-to-perform-basic-operations). In this example, a database named `testdb2` is created.
    
3.  Check the remote access permissions on a specific database.
    
    -   Log on to the ApsaraDB RDS or MySQL database and execute the following statements to grant remote access permissions on the database. In the example, the root user and the testdb database are used. `xxxx` is the password of the root user.
        
        ```
        CREATE USER 'root'@'%' IDENTIFIED BY 'xxxx';
        GRANT ALL PRIVILEGES ON testdb.* TO 'root'@'%' WITH GRANT OPTION;
        FLUSH PRIVILEGES;
        ```
        
    -   For an ApsaraDB RDS database, you can also view and modify the access permissions in the ApsaraDB RDS console. For more information, see [Modify account permissions](/help/en/rds/apsaradb-rds-for-mysql/modify-the-permissions-of-a-standard-account-on-an-apsaradb-rds-for-mysql-instance).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9771207371/p877181.png)
        

### **Create a migration task**

1.  Log on to the [DLF console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc).
    
2.  Select the region where the EMR cluster resides.
    
3.  In the left-side navigation pane, choose **Metadata** > **Migrate Metadata**.
    
4.  On the **Migration Task** tab, click **Create Cloud Migration Task**.
    
5.  Configure the parameters and click **Next**. The following figure shows the sample configurations. For more information, see the [Create a metadata migration task](/help/en/dlf/dlf-1-0/user-guide/migrate-metadata#section-f3h-lrc-icx) in the "Metadata migration" topic.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6802207371/p889341.png)
    
6.  Configure the migration task and click **Next**. The following figure shows the sample configurations. In this example, the task name is `test_rds`.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9771207371/p889328.png)
    
7.  Confirm the task configurations and click **OK**.
    

### **Run the migration task**

On the **Migration Task** tab, find the task named `test_rds` and click **Run** in the **Actions** column. After the task is successfully run, the task enters the Succeeded state.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9771207371/p889336.png)

### **View the running record and logs**

1.  On the **Migration Task** tab, click **Running Record** in the **Actions** column to view the execution history of the task.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9771207371/p878018.png)
    
2.  On the **Execution History** tab, click **View Logs** in the **Actions** column to view the log details of the task.
    

### **Check whether metadata is migrated to DLF**

1.  In the left-side navigation pane, choose **Metadata** > **Metadata**.
    
2.  Click the **Database** tab, configure the **Catalog List** and **Database Name** parameters, and then press the Enter key. The following figure shows the result.
    

## **Use DLF for unified metadata storage for an EMR cluster**

To replace MySQL with DLF for metadata storage, you must update specific configurations to allow EMR to integrate with DLF and use the metadata management feature of DLF.

### **Hive**

In the **hive-site.xml** file of Hive, modify the following configuration items, save the configurations, and make the configurations take effect. For more information, see the [Modify configuration items](/help/en/emr/emr-on-ecs/user-guide/manage-configuration-items#section-2zx-r0v-1lm) section of the "Manage configuration items" topic.

**Important**

If you want to specify a catalog, you must modify the `dlf.catalog.id` configuration item. Otherwise, metadata is stored in the `default` catalog.

```
<!-- Configure the URL of the DLF metadata service. Replace regionId with the region ID of the desired cluster, such as cn-hangzhou. -->
dlf.catalog.endpoint=dlf-vpc.{regionId}.aliyuncs.com
<!-- Note: Check the configuration after you perform copy and paste operations. No spaces are allowed for the configuration. ! !   -->
hive.imetastoreclient.factory.class=com.aliyun.datalake.metastore.hive2.DlfMetaStoreClientFactory
dlf.catalog.akMode=EMR_AUTO
dlf.catalog.proxyMode=DLF_ONLY

<!-- Configuration for Hive 3 -->
hive.notification.event.poll.interval=0s
<!-- Configuration for a minor version earlier than EMR V3.33 or EMR V4.6.0 -->
dlf.catalog.sts.isNewMode=false
```

### **Presto**

In the hive.properties file of Hive, add the following configuration items, save the configurations, and make the configurations take effect. For more information, see the [Add configuration items](/help/en/emr/emr-on-ecs/user-guide/manage-configuration-items#section-st3-dhw-qnx) section of the "Manage configuration items" topic.

```
hive.metastore=dlf
<!-- Configure the URL of the DLF metadata service. Replace regionId with the region ID of the desired cluster, such as cn-hangzhou. -->
dlf.catalog.endpoint=dlf-vpc.{regionId}.aliyuncs.com
dlf.catalog.akMode=EMR_AUTO
dlf.catalog.proxyMode=DLF_ONLY
 
<!-- Refer to the value of hive.metastore.warehouse.dir configured in the hive-site.xml file of Hive. -->
dlf.catalog.default-warehouse-dir= <!-- Set the value of this configuration item to the value of hive.metastore.warehouse.dir. -->

<!-- Configuration for a minor version earlier than EMR V3.33 or EMR V4.6.0 -->
dlf.catalog.sts.isNewMode=false
```

### **Spark**

On the **Configure** tab of the Spark service page, click **Deploy Client Configuration**. Complete operations as prompted. Then, restart Spark.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9771207371/p877524.png)

### **Impala**

On the **Configure** tab of the Impala service page, click **Deploy Client Configuration**. Complete operations as prompted. Then, restart Impala.

### **Check whether the metadata storage is changed**

In the following example, Hive is used. You can perform the same operations for other engines.

1.  Log on to the cluster in SSH mode. For more information, see [Log on to a cluster](/help/en/emr/emr-on-ecs/user-guide/log-on-to-an-emr-cluster#task-2508490).
    
2.  Run the following command to open the Hive CLI:
    
    ```
    hive
    ```
    
3.  Execute the following statement to create a database: In this example, a database named dlf\_test\_db is used.
    
    ```
    CREATE database if NOT EXISTS dlf_test_db;
    ```
    
    If the returned information contains OK, the database dlf\_test\_db is created.
    
4.  Log on to the [DLF console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc).
    
5.  In the left-side navigation pane, choose **Metadata** > **Metadata**.
    
6.  Click the **Database** tab. On the tab, select the specific **catalog** from the **Catalog List** drop-down list, enter dlf\_test\_db in the **Database Name** field, and then press the Enter key. The following figure shows the result.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9771207371/p877516.png)
    
    If the database exists, the metadata storage for Hive is changed. Otherwise, the metadata storage for Hive fails to be changed.
    

## **FAQ**

What the result is if a migration task runs multiple times?

The result of a migration task that runs multiple times remains the same. The reason is that a migration task is executed based on metadata in an ApsaraDB RDS or a MySQL database to ensure the eventual consistency between the metadata in the source database and the metadata in DLF. You can configure the **Conflict Resolution Strategy** parameter for your migration task. For more information, see the [Create a metadata migration task](/help/en/dlf/dlf-1-0/user-guide/migrate-metadata#b10792e37bfpc) section of the "Metadata migration" topic.
