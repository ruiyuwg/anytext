Before you use the database proxy feature for ApsaraDB RDS for MySQL, review the following notes to ensure a smooth experience.

-   General-purpose Edition proxies are free. Dedicated proxies, read-only instances, and primary instances are billed separately.
    
-   If the persistent connections feature is not enabled for the database proxy, changing the configuration of the primary instance or a read-only instance may cause an instance switchover. For more information about the effects of an instance switchover, see [Effects of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
    
-   If you add a read-only instance to a database proxy endpoint or restart a read-only instance that is connected to the endpoint, requests from both new and existing connections are routed to the new or restarted read-only instance.
    
-   If you remove a read-only instance from a database proxy endpoint, statements that are running on that instance fail. To take a read-only instance offline without affecting your application, upgrade the proxy minor engine version to 2.8.41 or later and set the read/write attribute of the proxy to Read/Write. For more information, see [Upgrade the minor engine version of a database proxy](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-dedicated-proxy-version-of-an-apsaradb-rds-for-mysql-instance) and [Configure read/write attributes and read weights](/help/en/rds/apsaradb-rds-for-mysql/configure-read-write-attributes-and-read-weights).
    
-   Database proxy endpoints do not support the compression protocol.
    
-   For an RDS instance that runs the High-availability Edition, the **max\_prepared\_stmt\_count** parameter must have the same value on the primary instance and its read-only instances.
    
-   The database proxy uses a 1:N connection model. When your application connects to the proxy, the proxy establishes connections to the primary instance and all configured read-only instances. The database proxy itself does not limit the maximum number of connections. This limit is determined by the specifications of the backend database nodes. If transaction-level connection pooling is disabled, each client connection creates a corresponding connection on the primary instance and on every read-only instance. After you enable the database proxy, keep the maximum connection specifications for the primary and read-only instances as consistent as possible. Otherwise, the number of connections for your application is limited by the instance with the lowest connection limit.
    
-   When you use a database proxy endpoint, if transaction splitting is disabled, all transaction requests are routed to the primary instance.
    
-   When you use a database proxy endpoint for read/write splitting, read consistency for non-transactional reads is not guaranteed. To ensure read consistency, encapsulate read requests in a transaction or use [hint syntax](/help/en/rds/apsaradb-rds-for-mysql/execute-hints-on-an-apsaradb-rds-for-mysql-instance#concept-2021299).
    
-   The [connection pool](/help/en/rds/apsaradb-rds-for-mysql/set-the-connection-pool-type-of-an-apsaradb-rds-for-mysql-instance#task-2357903) feature is enabled by default, which may cause the `show processlist` command to display idle user connections. When you use a database proxy endpoint, the `show processlist` command merges and returns the results from all nodes.
    
-   If you execute [multi-statements](https://dev.mysql.com/doc/c-api/8.0/en/c-api-multiple-queries.html) or call stored procedures, all subsequent requests over the current connection are routed to the primary node. To resume read/write splitting, you must close the current connection and establish a new connection.
    
-   If you use the MySQL command line to connect and execute hint statements, include the -c option in the command. Otherwise, the MySQL command-line tool filters out the hints. For more information about hint syntax, see [Use hint syntax](/help/en/rds/apsaradb-rds-for-mysql/execute-hints-on-an-apsaradb-rds-for-mysql-instance#concept-2021299).
    
-   If the primary instance is locked, proxy instances of version **2.9.5** or later are not released. They can continue to process read requests but cannot process write requests.
    
-   If you release the primary instance, the database proxy is automatically released, and no charges apply to the Dedicated proxy after release.
    
-   Because the proxy currently does not support switching VPCs or vSwitches, modifying the primary instance's VPC will not change the proxy's VPC. While the proxy can still communicate with the primary instance, you will be unable to access the proxy endpoint through the modified VPC.
    
-   When you use a privileged account to configure an account's host range, the proxy supports CIDR blocks in the `10.1.2.%` format.
    
-   The IP whitelist for the database proxy is the same as the IP whitelist for the primary instance. If you update the IP whitelist for the primary instance, the IP whitelist for the database proxy is also updated.
    
-   In a high-latency network, if you subscribe to binary logging (Binlog) through a database proxy endpoint, the network throughput for Binlog Dump can become a performance bottleneck. This may cause replication delay to build up in downstream systems. We recommend that you pull Binlog data by configuring a direct connection to the database node in your application or service.
    
-   Migrating the zone may cause the nearest access feature to become invalid.
    
    After the migration, you can access the new zone by default, and the nearest access feature for the original zone becomes invalid. If you change the target zone of the database proxy endpoint to a zone that is different from the default zone, the nearest access feature for the corresponding zone also becomes invalid. The following table describes example scenarios.
    
    **Scenario**
    
    **Original proxy information**
    
    **Target proxy information**
    
    **Current proxy instance zone**
    
    **Proxy endpoint**
    
    **Nearest access**
    
    **Target proxy instance zone**
    
    **Default proxy endpoint zone**
    
    **Target proxy endpoint zone**
    
    **Nearest access**
    
    Scenario 1:
    
    Migrate from `Zone A + Zone B` to `Zone A + Zone C`
    
    Zone A
    
    Proxy endpoint a
    
    Zone A
    
    Zone A
    
    Zone A
    
    Zone A
    
    Zone A
    
    Zone C
    
    Invalid
    
    Zone B
    
    Proxy endpoint b
    
    Zone B
    
    Zone C
    
    Zone C
    
    Zone C
    
    Zone C
    
    Zone D
    
    Invalid
    
    Scenario 2:
    
    Migrate from `Zone A + Zone B` to `Zone C + Zone D`
    
    Zone A
    
    Proxy endpoint a
    
    Zone A
    
    Zone C
    
    Zone C
    
    Zone C
    
    Zone C
    
    Zone E
    
    Invalid
    
    Zone B
    
    Proxy endpoint b
    
    Zone B
    
    Zone D
    
    Zone D
    
    Zone D
    
    Zone D
    
    Zone E
    
    Invalid
    
-   The nearest access feature is supported only for Deployment Mode 1 of dedicated proxies. If this feature is enabled and you want to change to a general-purpose proxy or another deployment mode, you must first disable the nearest access feature before you change the configuration. For more information about how to disable the nearest access feature, see [Set up nearest access](/help/en/rds/apsaradb-rds-for-mysql/nearby-access). For more information about proxy deployment architectures, see [Proxy deployment architecture](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#4b2472beact70).
    

**Note**

Configuring the proxy's CIDR block as `10.1.2.0/24` is not supported.
