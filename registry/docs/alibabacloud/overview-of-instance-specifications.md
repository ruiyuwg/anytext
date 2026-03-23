Hologres offers various instance specifications with different vCPU and memory resources. Due to its compute-storage separation architecture, storage resources are independent of the instance specs. This topic describes the resource specifications. You can dynamically adjust instance specifications as needed by upgrading, downgrading, or independently scaling compute and storage resources.

## Terms

Hologres runtime resources include process resources for data management, compute resources for query services, resources for optimizing data write paths, and cache services. All services are based on cloud-native container technology and use multiple parallel container compute nodes to achieve high-performance parallel computing.

Hologres sets a default maximum number of connections and a shard count for an instance based on its resource specifications. These default configurations are tuned and optimized for most scenarios. **The maximum number of connections cannot be modified. You can adjust the shard count by creating a new Table Group. When an instance is scaled out or in, the maximum number of connections is also adjusted. However, the default shard count for existing databases does not change during a scaling operation and must be modified manually. New databases use the default shard count for the new specifications**.

After a scale-out, more core resources can provide better query concurrency. In most scenarios, you do not need to adjust the shard count. If you need higher write throughput, you can increase the shard count to improve concurrent write throughput. However, for Online Analytical Processing (OLAP) queries, increasing the shard count does not significantly improve query performance and might even reduce the system's concurrent throughput. It is important to understand the underlying principles before you make adjustments. Additionally, for row-oriented tables, a higher number of shards leads to better read performance because of their natural distribution characteristics.

## Recommended instance specs

Each shard handles read and write service requests for a portion of the data. Within the same table group, a portion of each table's data is distributed to the same shard. If these tables can be joined within a shard, it is called a local join, which is a more efficient join method. If the data is not in the same shard, a redistribution operator is required to shuffle the data. This results in more network transmission and scheduling overhead. Therefore, when you design shards, you must carefully consider whether the computation process can be parallelized across shards or if it requires data exchange between shards. For data write and update scenarios, writes and updates can be parallelized across shards. Therefore, more shards result in higher throughput. For point query scenarios, if each query can accurately hit a specific shard (a process known as shard pruning), more shards result in higher concurrency. For OLAP queries, multiple shards must participate in the computation, which inevitably involves data exchange. Too many shards introduce more scheduling overhead between nodes and ultimately reduce query concurrency.

When you use a Hologres instance, you must determine the most suitable instance spec and shard count for your expected data volume. The optimal instance spec and shard count depend not only on the data storage volume but also on factors such as access frequency, actual data access volume, compute payload (such as point queries or analytics), write throughput, and the number of tables in the table group. Therefore, there is no single correct answer. The following table provides recommended shard counts and instance specs based on estimated data volume. You can choose the parameter settings that suit your needs.

**Note**

The recommended shard counts and instance specs in the following table are for reference only. For example, tables with small data volumes can be placed in an instance with a high shard count, and tables with large data volumes can be placed in an instance with a single shard. You should choose a suitable shard count based on your business scenario. The goal is to achieve high concurrency for better computational efficiency while keeping data concentrated to avoid unnecessary shuffle overhead.

**Total data size**

**Recommended specifications**

**Recommended shard count**

**Usage notes**

Less than 40 million rows

32 cores or more

10 to 20

Not suitable for stress testing. Recommended for development environments.

40 million to 400 million rows

64 cores or more

20 to 40

Suitable for simple business scenarios without mixed payloads.

400 million to 4 billion rows

128 cores or more

40 to 80

Balanced write and query capabilities. Recommended as the default starting configuration for production systems.

4 billion to 40 billion rows

256 cores or more

80 to 240

Consider using multiple table groups. Divide table groups based on the cohesion of different business attributes or by data volume. Design different shards for different table groups, and explicitly specify the table group when creating tables.

40 billion to 400 billion rows

512 cores or more

160 to 400

Consider using multiple table groups. Divide table groups based on the cohesion of different business attributes or by data volume. Design different shards for different table groups, and explicitly specify the table group when creating tables. Assign a larger number of shards only to very large tables. A high shard count is not recommended for standard tables.

## Default instance resources

Hologres provides a default maximum number of connections and a pre-allocated shard count based on the instance's resource specifications. The default configurations are shown in the following table.

Since April 25, 2022, general-purpose instances support compute resource specifications from 512 CUs to 1,024 CUs. For higher specifications, you can [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket?). Before you upgrade to a larger resource specification, you must upgrade your instance to V1.1.58 or later.

For compute group instances, you can flexibly purchase any specification from 32 CUs to 8,192 CUs without submitting a ticket.

**Note**

-   Each instance spec includes compute nodes and frontend access nodes. Each 16 CUs corresponds to one compute node. For specifications of 512 CUs or less, the default number of compute nodes is the same as the number of frontend nodes. For specifications of 1,600 CUs or more, the number of frontend nodes remains at 100.
    
-   If you scale out an instance by less than five times its original size, do not adjust the shard count. This default specification is suitable for most scenarios and provides a balanced configuration for writes and queries.
    
-   Total maximum connections = Maximum connections per frontend node × Number of frontend nodes. The values in parentheses show the specifications for each node. The number before the multiplication sign is the maximum connections per access node, and the number after is the total number of frontend access nodes.
    

**Instance spec**

**Number of compute nodes**

**Default shard count**

**Total maximum connections (for V2.1 and earlier)**

**Total maximum connections (for V2.2 and later)**

**Total reserved connections for Superuser (for V1.1 and later)**

32 CUs

2

**20**

**256 (128 × 2)**

**512 (256 × 2)**

10 (5 × 2)

48 to 80 CUs

3 to 5

**40**

**128 × Number of compute nodes**

**256 × Number of compute nodes**

5 × Number of compute nodes

96 to 112 CUs

6 to 7

**60**

**128 × Number of compute nodes**

**256 × Number of compute nodes**

5 × Number of compute nodes

128 to 192 CUs

8 to 12

**80**

**128 × Number of compute nodes**

**256 × Number of compute nodes**

5 × Number of compute nodes

208 to 352 CUs

13 to 22

**120**

**128 × Number of compute nodes**

**256 × Number of compute nodes**

5 × Number of compute nodes

368 to 992 CUs

23 to 62

**160**

**128 × Number of compute nodes**

**256 × Number of compute nodes**

5 × Number of compute nodes

1,008 to 1,584 CUs

63 to 99

**200**

**128 × Number of compute nodes**

**256 × Number of compute nodes**

5 × Number of compute nodes

1,600 to 2,272 CUs

100 to 142

**200**

**12,800 (128 × 100)**

**25,600 (256 × 100)**

500 (5 × 100)

2,288 to 4,000 CUs

143 to 250

**240**

**12,800 (128 × 100)**

**25,600 (256 × 100)**

500 (5 × 100)

4,016 to 8,000 CUs

251 to 500

**320**

**12,800 (128 × 100)**

**25,600 (256 × 100)**

500 (5 × 100)

8,016 to 8,192 CUs

501 to 512

**400**

**12,800 (128 × 100)**

**25,600 (256 × 100)**

500 (5 × 100)

## View and manage default instance connections

Hologres lets you view and manage the default number of connections for an instance.

-   View the number of connections.
    
    After you create an instance and connect to a developer tool, you can run the following statement to view the maximum number of connections for a single frontend access node. The return value is the maximum number of connections for a single frontend access node.
    
    **Note**
    
    Total maximum connections for a Hologres instance = Maximum connections per frontend node × Number of frontend nodes.
    
    ```
    -- View the maximum number of connections for a single access node. Connections are balanced across multiple access nodes.
    show max_connections;
    ```
    
-   Manage connections.
    
    The instance provides reserved connections for a Superuser. When the number of connections reaches the default limit, a Superuser can connect to Hologres and use SQL commands to view and release idle connections, or upgrade the instance as needed. For more information about how to view and release idle connections, see [Connections](/help/en/hologres/user-guide/hologres-metrics#section-qbs-kr4-jhf).
    

## View and modify the instance shard count

After you scale out an instance, you usually do not need to adjust the shard count because more core resources can provide better query concurrency. If you need higher write throughput, you can increase the shard count to improve concurrent write throughput.

Additionally, for row-oriented tables, more shards result in higher read performance due to their natural distribution characteristics. To view and modify the instance shard count, see [Table Group and Shard Count User Guide](/help/en/hologres/user-guide/user-guide-of-table-groups-and-shard-counts#concept-2069037).
