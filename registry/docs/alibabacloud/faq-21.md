This topic answers frequently asked questions about upgrading an RDS for MySQL instance to a PolarDB for MySQL cluster.

-   Q: What should I do if a check item in the [migration evaluation](/help/en/polardb/polardb-for-mysql/user-guide/migration-assessment) fails?
    
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
    
-   Q: What are the differences between upgrading an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster and [cloning an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster](/help/en/polardb/polardb-for-mysql/user-guide/create-a-polardb-for-mysql-cluster-by-cloning-an-apsaradb-rds-for-mysql-instance#task-1580301)?
    
    A: The following table describes the differences.
    
    **Item**
    
    **Upgrade an RDS for MySQL instance to a** PolarDB for MySQL cluster
    
    [Clone an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster](/help/en/polardb/polardb-for-mysql/user-guide/create-a-polardb-for-mysql-cluster-by-cloning-an-apsaradb-rds-for-mysql-instance#task-1580301)
    
    Supports incremental data migration or synchronization
    
    Support
    
    No
    
    Affects operations on the source RDS instance
    
    No effect
    
    No impact.
    
    Can the source and target MySQL versions differ?
    
    They can be different.
    
    May be different
    
-   Q: Must the node specifications of the destination PolarDB for MySQL cluster be the same as the instance type of the source RDS for MySQL instance?
    
    A: Not necessarily. You can select the specifications for the PolarDB for MySQL cluster as needed. We recommend that the specifications are not lower than the source RDS instance type.
    
-   Q: Do I need to purchase a PolarDB for MySQL cluster before the upgrade?
    
    A: You do not need to purchase a PolarDB for MySQL cluster in advance. The upgrade process creates a PolarDB cluster with the same data as the source RDS instance.
    
-   Q: Does the migration from RDS affect the source RDS instance?
    
    A: No, it does not. The normal operation of the source RDS instance is not affected.
    
-   Q: Does a smooth migration affect the performance of the source RDS instance?
    
    A: The migration does not affect the availability of the source RDS instance. However, because data migration involves query operations, it consumes some of the query performance of the source RDS instance.
    
-   Q: Does a smooth migration affect my business?
    
    A: A smooth migration ensures that no data is lost. The downtime is less than 10 minutes. During the downtime, your business application is paused to prevent new data from being generated, but the database is not stopped. You can also roll back the migration if needed.
    
-   Q: What happens if I cancel the migration?
    
    A: Canceling the migration has the following effects:
    
    -   The synchronization link between the source and destination clusters is disconnected, and the clusters are no longer associated.
        
    -   The destination cluster becomes read-write and is not automatically released. **If you no longer need this cluster, release it as soon as possible to avoid incurring unnecessary fees**.
        
    -   When you manually cancel the migration, you can choose whether to disable binary logging for the cluster. Binary logging is not disabled when the migration is canceled automatically.
        
        **Note**
        
        Disabling binary logging slightly improves write performance. Existing binary log files are retained after you disable binary logging. Before you disable binary logging, you can shorten the retention period of binary log files and wait for the unwanted files to be automatically deleted. After you disable binary logging, the cluster automatically restarts. The restart completes within 5 minutes. During the restart, a transient disconnection of about 40 seconds occurs. The specific duration depends on the data volume and number of tables. We recommend that you perform this operation during off-peak hours and ensure that your application has a reconnection mechanism.
        

-   Q: After the upgrade is complete and I switch my business to PolarDB, do I need to modify the connection addresses in my applications?
    
    A: You can select **Switch with Endpoints (Connection Changes Not Required)** during the switchover. The system automatically exchanges the RDS and PolarDB endpoints. Your application will then automatically connect to PolarDB without requiring any configuration changes.
    
-   Q: If the privileged account of the destination cluster is missing some permissions during the migration and upgrade, can I modify the account permissions during the process?
    
    A: No, you cannot. Account permissions cannot be modified during the migration and upgrade process. The permissions of the privileged account of the destination cluster are synchronized from the source instance. If the privileged account is missing default permissions after the upgrade, you can reset its permissions on the Account Management page in the console.
    
-   Q: I selected **Switch with Endpoints (Connection Changes Not Required)** for the migration. After the migration is complete, why does the PolarDB cluster still use a new connection address?
    
    A: Endpoints can be exchanged only if a corresponding endpoint exists on both the source RDS instance and the destination PolarDB cluster. By default, only the primary endpoint for the private network can be switched. To switch other connection addresses, you must create the corresponding endpoints on the destination cluster before the switchover. Otherwise, the connection addresses will not be switched. For more information about how to create connection addresses for PolarDB clusters and RDS instances, see [Manage connection addresses](/help/en/polardb/polardb-for-mysql/user-guide/apply-for-a-cluster-endpoint-or-a-primary-endpoint#task-1580301) and [Set connection addresses](/help/en/rds/configure-endpoints-for-an-rds-instance#concept-tv3-pq1-ydb).
    
-   Q: The source RDS instance also contains read-only instances. If I select **Switch with Endpoints (Connection Changes Not Required)**, can the connection addresses of the read-only instances be switched as well?
    
    A: Yes. When you select Switch with Endpoints (No application changes required), the connection address of a read-only RDS instance can be switched if the PolarDB cluster has a corresponding cluster endpoint or custom endpoint.
    
-   Q: After a successful switchover, why am I unable to connect to the PolarDB database, or why is the connection read-only?
    
    A: After the domain names are switched, connection issues may occur because of the local DNS cache on your server. During the time-to-live (TTL) of the cache, your application may fail to connect to the database or may establish a read-only connection. We recommend that you refresh the DNS cache on your server.
    
-   Q: Before a one-click upgrade to PolarDB, can I first perform a compatibility test and a simple migration workload assessment?
    
    A: Yes, you can. You can clone data to a PolarDB cluster to perform compatibility tests and a workload evaluation. For more information, see [Clone an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster](/help/en/polardb/polardb-for-mysql/user-guide/create-a-polardb-for-mysql-cluster-by-cloning-an-apsaradb-rds-for-mysql-instance#task-1580301). After you confirm that there are no issues, you can follow the steps in this topic to perform a one-click upgrade to PolarDB.
    
-   Q: After the migration switchover, why is the **Complete Migration** button not visible in the PolarDB console?
    
    A: If you have already clicked the **Complete Migration** button, the button is hidden to prevent you from performing the operation again.
    
-   Q: After a one-click upgrade to PolarDB, do I still need to create the same accounts and passwords from the source RDS instance in the destination PolarDB cluster?
    
    A: No, you do not. After the upgrade, the PolarDB cluster contains the accounts, passwords, databases, IP whitelists, and required parameters from the source RDS instance.
    
-   Q: The source RDS instance has SSL enabled. How do I migrate it to a PolarDB cluster?
    
    A: Yes, an RDS instance with SSL enabled can be upgraded to a PolarDB cluster using the one-click upgrade feature. You can perform the migration using either the Physical Migration or Logical Migration method.
    
    **Note**
    
    If you select **Switch with Endpoint** to switch a connection address for which [SSL](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#concept-ack-rv4-ydb) is enabled, ensure that SSL is also enabled for the corresponding connection address of the PolarDB cluster.
    
-   Q: The source RDS instance has Transparent Data Encryption (TDE) enabled. How do I migrate it to a PolarDB cluster?
    
    A: Yes, an RDS instance with TDE enabled can be upgraded to a PolarDB cluster using the one-click upgrade feature. You can perform the migration using either the Physical Migration or Logical Migration method.
    
-   Q: Does the one-click upgrade support cross-version upgrades? For example, upgrading an RDS MySQL 5.6 instance to a PolarDB for MySQL 8.0 cluster?
    
    A: The Logical Migration (DTS data synchronization) method supports cross-version upgrades for the one-click upgrade feature.
    
-   Q: If a DTS data synchronization task is already running on the source RDS instance before the one-click upgrade to PolarDB for MySQL, will the upgrade affect this task?
    
    A: No, it will not. During a one-click upgrade, a full data copy is first replicated from the RDS instance to a new PolarDB cluster. Then, incremental data is continuously synchronized to the PolarDB cluster. The data source of the existing DTS task remains the source RDS instance, and the upgrade to PolarDB does not affect the operations of the source RDS instance.
    
    After the migration switchover, the source RDS instance becomes read-only. If the RDS instance is the destination of a DTS data synchronization task, write operations to the instance will fail. In this case, you must change the destination of the DTS task to the new PolarDB cluster. If the RDS instance is the source of a DTS task, we recommend that you also change the source of the DTS task to the new PolarDB cluster as soon as possible after the switchover.
    
    Currently, you can modify the source or destination instance of a DTS task only using OpenAPI. For more information, see [Modify the source or destination instance of a DTS task](/help/en/dts/developer-reference/api-modifydtsjobendpoint).
    
-   Q: When I try to release or change the zone of an RDS instance, the error message "The specified operation is disabled while the instance is undergoing an engine migration" is returned. What should I do?
    
    **A:** This error occurs because the RDS instance is being upgraded using the [one-click upgrade from RDS for MySQL to PolarDB for MySQL](/help/en/polardb/polardb-for-mysql/user-guide/create-a-polardb-for-mysql-cluster-by-migrating-an-apsaradb-rds-for-mysql-instance/) feature. Go to the [PolarDB console](https://polardb.console.alibabacloud.com/) to check whether a PolarDB cluster is undergoing migration. You must complete all [upgrade operations, including the migration switchover,](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql) for the PolarDB cluster before you can release or change the zone of the RDS instance.
