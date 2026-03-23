The migration evaluation feature is provided by PolarDB to ensure the successful execution of migration tasks and high migration efficiency. This feature allows you to precheck the prerequisites such as the instance status, migration task dependencies, and attributes of the source instance before you upgrade an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster. This way, you can identify the factors that may affect the migration progress and resolve the issue in advance to reduce the processing and resource costs during migration.

Issues may occur during a migration evaluation. For information about how to resolve the issues, see [FAQ](#5dae0ca388jb4).

## **Supported regions**

The migration evaluation feature is available in the following regions:

China (Hangzhou), China (Shanghai), China (Shenzhen), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Chengdu), China (Hong Kong), Singapore, Indonesia (Jakarta), US (Silicon Valley), and US (Virginia).

## **Impacts**

A migration evaluation does not affect your business.

## **Create a migration evaluation task**

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/cn-hangzhou/clusters). On the **Clusters** page, click **Migrate/Upgrade Evaluation**.
    
2.  Create a migration evaluation task. PolarDB provides the following methods for creating an evaluation task:
    
    -   From the **Clusters** page: Click **Migration/Upgrade Evaluation** in the upper-left corner of the **Clusters** page.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8817920171/p762424.png)
        
    -   From the **Migration/Upgrade** page: Click **Migration/Upgrade Evaluation** in the upper-left corner of the **Migration/Upgrade** page.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8817920171/p762425.png)
        
    -   From the PolarDB buy page: Select **Migrate from RDS**, set **Source RDS Version**, **Database Engine**, and **Database Edition**, and then click **Migration Evaluation**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7500618171/p763960.png)
        
3.  Configure parameters for the migration evaluation task.
    
    **Parameter**
    
    **Description**
    
    Creation Method
    
    Select **Migrate from RDS**.
    
    If you create a migration evaluation task from the PolarDB buy page, you do not need to specify this parameter. **Migrate from RDS** is automatically selected.
    
    Source RDS Version
    
    The database engine version of the source ApsaraDB RDS instance.
    
    Source RDS Instance
    
    Select a source ApsaraDB RDS instance from the drop-down list.
    
    Database Engine
    
    The database engine version of the destination PolarDB for MySQL cluster.
    
    Database Edition
    
    The edition of the destination PolarDB for MySQL cluster.
    
    Click **Next**.
    
4.  PolarDB prechecks and evaluates your source ApsaraDB RDS instance and migration plan in terms of **Basic Information Verification**, **Migration Task Dependency Verification**, **Key Information Verification**, and **Other Verification**. Handle the issues based on the evaluation results.
    
    Answers to some frequently asked questions about migration evaluation in PolarDB are provided in this topic. For more information, see [FAQ](#dc4fab7ce8oek).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7392177371/p889302.png)
    
    **Note**
    
    You cannot synchronize events in a DTS migration or upgrade task. If the event check result is **Existing**, you must manually synchronize the events to the destination PolarDB cluster.
    
5.  Click **Continue to Buy** or **Buy** to go to the PolarDB buy page. For more information, see [Procedure](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql).
    

## **Manage evaluation tasks**

To view the details of an evaluation task, go to the [Migration/Evaluation](https://polardb.console.alibabacloud.com/cn-hangzhou/migration) page. If the evaluation task is complete, you can click Re-evaluate or Buy.

**Note**

An evaluation task is retained for seven days and then automatically deleted. If your evaluation task has expired, you can create a new one.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8817920171/p762352.png)

## **FAQ**

**Category**

**Check item**

**Solution**

Notes

Event Check

The source RDS instance has events, but DTS does not support event synchronization. You must manually synchronize the events to the destination PolarDB cluster.

Basic Information Verification

Source Instance Running Status

The source ApsaraDB RDS instance must be in the **Running** state.

Source Instance Read/Write Status

The source ApsaraDB RDS instance must be in the **Running** state and in Read/Write mode.

Source Instance Account Mode

If Database Proxy (Safe Mode) is enabled for the ApsaraDB RDS for MySQL instance, create a privileged account or switch the network connection mode of the ApsaraDB RDS for MySQL instance to high-performance mode. For more information, see [Create an account](/help/en/rds/create-databases-and-accounts-for-an-apsaradb-rds-for-mysql-instance#section-wkq-j35-q2b) and [\[Product changes/Feature changes\] The network connection mode of an ApsaraDB RDS instance is upgraded](/help/en/rds/apsaradb-rds-for-mysql/rds-network-link-upgrade#concept-vyz-wf2-wfb).

Service-linked Role for PolarDB

The service-linked role for PolarDB is created for the account.

For more information about how to create a PolarDB service-linked role, see [Precheck whether the service-linked role for PolarDB is created](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#section-84v-pal-efr). You can also create a PolarDB service-linked role by calling the [API](https://next.api.aliyun.com/api/ResourceManager/2020-03-31/CreateServiceLinkedRole?spm=a2c4g.171226.0.i0&tab=DEBUG&params={%22ServiceName%22:%22polardb.aliyuncs.com%22}) operation.

Migration Task Dependency Verification

DTS Permissions

Your Alibaba Cloud account must have the permissions to access cloud resources over DTS.

For more information, see [Authorize DTS to access Alibaba Cloud resources](/help/en/dts/user-guide/authorize-dts-to-access-alibaba-cloud-resources#concept-47556-zh).

Whether Source Instance is Empty

Databases are created in the source ApsaraDB RDS instance. You must [create a database](/help/en/rds/create-databases-and-accounts-for-an-apsaradb-rds-for-mysql-instance#section-6hn-wc7-g8k) in the instance before you can migrate data.

Source Instance Table Engine Verification

The table storage engine for the source RDS instance must be InnoDB or X-Engine.

Source Instance Trigger Verification

If triggers are created for the source ApsaraDB RDS instance, delete the triggers first. Otherwise, the migration process are interrupted.

**Note**

You can execute the following statements to delete triggers in the source ApsaraDB RDS instance based on your business requirements.

```
-- Display all the triggers that exist in the source ApsaraDB RDS instance.
SHOW TRIGGERS;
-- Delete a specific trigger from the source ApsaraDB RDS instance.
DROP TRIGGER  trigger_name;
```

You can manually create triggers in the destination PolarDB cluster after the migration process is complete.

Verification for Non-primary-key Tables in Source Instance

If the source ApsaraDB RDS instance contains tables without primary keys, duplicate data may occur in the destination PolarDB cluster after data is synchronized.

You can connect to the database on the source ApsaraDB RDS instance by using a privileged account and execute the following SQL statement to query tables without primary keys:

```
SELECT t1.table_schema, t1.table_name 
FROM information_schema.TABLES t1 LEFT OUTER 
	JOIN information_schema.TABLE_CONSTRAINTS t2 
  ON t1.table_schema = t2.TABLE_SCHEMA AND t1.table_name = t2.TABLE_NAME AND t2.CONSTRAINT_NAME 
  IN ("PRIMARY") 
WHERE t2.table_name IS NULL AND t1.table_type = "BASE TABLE" AND t1.TABLE_SCHEMA NOT IN ("information_schema", "performance_schema", "mysql", "sys") 
```

You can add primary keys to the tables without primary keys.

If you confirm that duplicate data is acceptable, you can ignore this evaluation result and select **Continue** when the error message is returned when you [Upgrade an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#section-wvm-69o-xqd).

Key Information Verification

Source Instance Root Account Verification

To ensure compatibility between ApsaraDB RDS for MySQL and PolarDB in terms of the system account structure and to prevent the system accounts of the destination PolarDB cluster from being overwritten during migration, make sure that the root and aliyun\_root accounts do not exist in the source ApsaraDB RDS instance at the same time. For more information, see [Remove redundant system accounts from the source ApsaraDB RDS instance](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#1e5bfe20250rn).
