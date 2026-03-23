To address the write performance bottleneck in the traditional architecture that uses one primary node and multiple read-only nodes, Alibaba Cloud developed the Multi-master Cluster (Limitless) edition for PolarDB for MySQL. The Multi-master Cluster (Limitless) edition uses multiple primary nodes and multiple read-only nodes and distributes the write load across the primary nodes, which significantly improves write performance and scalability while still maintaining robust support for read-heavy workloads. The Multi-master Cluster (Limitless) edition is designed for high-concurrency read and write scenarios such as software as a service (SaaS) multi-tenant systems, gaming systems, and e-commerce platforms.

The following figure shows the architecture of Multi-master Cluster (Limitless) Edition.![多主架构](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3739178461/p374173.png)

All data files in a cluster are stored in PolarStore. Each primary node uses PolarFileSystem to access data in PolarStore. When you access the cluster by using a cluster endpoint, PolarProxy automatically routes the SQL statements to the correct primary node.

## Core advantages

-   **Write scale-out in seconds**
    
    Concurrent data writes to databases on up to 63 compute nodes are supported. Dynamic failover of nodes for databases can be implemented within seconds to improve the overall concurrent read and write capabilities of clusters.
    
-   **Multiple-mater backup (no read-only nodes)**.
    
    If a primary node fails, failover to another low-traffic primary node can be implemented in seconds. The costs are halved because no additional idle resources are deployed for hot standby.
    

## Scenarios

Multi-master Cluster (Limitless) Edition is suitable for scenarios such as multitenancy in SaaS, gaming, and e-commerce. These scenarios feature high-concurrency read and write requests.

-   **Multitenancy in SaaS: high concurrency and load balance between tenants**
    
    Scenario: The number of databases of tenants rapidly changes, and the load volume undergoes substantial changes. Users must schedule database resources among different instances to deliver optimal experience.
    
    Solution: Multi-master Cluster (Limitless) Edition helps customers switch between different primary nodes of databases of tenants or add new primary nodes in seconds to process burst traffic. This implements load balancing.
    
-   **Global gaming server and e-commerce scenarios: scaling in minutes to cater to fast-growing business requests**
    
    Scenario: The middleware-based or business-based database and table sharding solution is often used. During version updates and major promotions, sharp scale-out of cluster capacity is required. Quick scale-in is necessary when version updates and major promotions end. However, the scaling of traditional clusters involves complex steps for data migration.
    
    Solution: The scale-out in seconds and transparent routing features of Multi-master Cluster (Limitless) Edition can be used together with the middleware-based or business-based database and table sharding solution to shorten the scale-out process from several days to several minutes.
    
-   **Gaming applications deployed on different servers: better performance and scalability**
    
    Scenario: During the growth period of a game, database loads are heavy and feature continual increase. During this period, the number of databases keeps growing. As a result, the loads of primary nodes also increase. During the decline period of a game, database loads are significantly reduced, and databases are merged. As a result, the loads of primary nodes are also decreased.
    
    Solution: During the growth period, you can switch some databases to new primary nodes to implement load balance. During the decline period, you can aggregate databases to a few primary nodes to reduce operating costs.
    

## Supported versions

-   Make sure that the Database Engine of the cluster is MySQL 8.0.
    
-   You cannot directly change the edition of a PolarDB for MySQL cluster from Cluster edition to Multi-master Cluster (Limitless) edition. For information about how to upgrade the major version or edition of a PolarDB for MySQL cluster, see [Major version upgrade](/help/en/polardb/polardb-for-mysql/user-guide/major-version-upgrades/).
    

## Performance improvement

After tests, the overall concurrent read and write capabilities of a cluster show a linear increase because the databases of the cluster are switched to more primary nodes. The following code snippet provides an example of stress testing:

-   Test background: The cluster contains eight databases and eight primary nodes.
    
-   Test procedure: At the beginning of a test, eight databases share one primary node. Data is synchronized to all databases at the same time to perform the same stress test. During the stress testing period, eight databases are scheduled to two primary nodes, four primary nodes, and eight primary nodes respectively. View the change trend of the overall performance of the cluster.
    
-   The following figure shows the change trend of QPS.![性能提升](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3484360661/p374226.png)
    

In the preceding figure, as databases are scheduled to more primary nodes, the overall concurrent read and write capabilities of the cluster are significantly improved and show a linear increase.

## **Compute node specifications and fees**

-   You can specify the General-purpose or Dedicated specifications for compute nodes. For more information, see [Compute node specifications of PolarDB for MySQL Enterprise Edition](/help/en/polardb/polardb-for-mysql/specifications-of-compute-nodes).
    
-   For information about the fees for the compute nodes, see [Billable items](/help/en/polardb/polardb-for-mysql/billing-item/) and [Compute nodes](/help/en/polardb/polardb-for-mysql/compute-nodes).
    

## **Get started with a cluster of the Multi-master Cluster (Limitless) edition**

1.  [Purchase a cluster of the Multi-master Cluster (Limitless) edition](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-pay-as-you-go-cluster).
    
2.  Configure the basic settings for the cluster. You can [create a database account](/help/en/polardb/polardb-for-mysql/user-guide/create-and-manage-database-accounts#title-ivq-4vq-xgp), [configure a whitelist for the cluster](/help/en/polardb/polardb-for-mysql/user-guide/configure-a-whitelist-for-a-cluster/), and [connect to the database](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-polardb/).
    
3.  [Create a database](/help/en/polardb/polardb-for-mysql/user-guide/usage-1#title-o6j-0pq-jz4).
    
    A PolarDB for MySQL cluster of the Multi-master Cluster (Limitless) edition allows you to write the data of each database or data object to only one node. When you create a database, you can specify a primary node for the database. You can also set the `loose_innodb_mm_default_master_id` parameter to 0 to allow the system to randomly select a primary node to create the database.
    
4.  Query data by using `SELECT` statements.
    
    When you query data, you do not need to specify the primary node. PolarProxy automatically selects the correct primary node to execute the query.
    

For more information, see [How to use Multi-master Cluster Edition](/help/en/polardb/polardb-for-mysql/user-guide/usage-1#title-o6j-0pq-jz4).
