ApsaraDB RDS (RDS) offers a variety of primary instance types to meet diverse performance, stability, and cost requirements for different workloads. Selecting the right instance type is a crucial step in optimizing both database performance and cost. This topic provides links to detailed instance type lists for primary RDS instances running different engines and explains the core metrics used across all instance types to help you make an informed choice.

## Instance types for primary RDS instances running different engines

The following table guides you to the detailed instance type lists for primary RDS instances running different engines.

**Engine**

**Supported product types**

**Supported storage types**

**Primary instance type lists**

MySQL

Standard and YiTian

Cloud disks and Premium Local SSDs

-   [Primary instance types for standard ApsaraDB RDS for MySQL instances (x86)](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types#concept-2096487)
    
-   [Primary instance types for YiTian ApsaraDB RDS for MySQL instances (ARM)](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types-5#concept-2256961)
    

PostgreSQL

Standard and YiTian

Cloud disks

[Primary instance types for standard and YiTian ApsaraDB RDS for PostgreSQL instances](/help/en/rds/apsaradb-rds-for-postgresql/primary-apsaradb-rds-for-postgresql-instance-types#concept-2096578)

SQL Server

N/A

Cloud disks

[Primary instance types for ApsaraDB RDS for SQL Server instances](/help/en/rds/apsaradb-rds-for-sql-server/primary-apsaradb-rds-for-sql-server-instance-types#concept-2096545)

MariaDB

Standard

Cloud disks

[Primary instance types for ApsaraDB RDS for MariaDB instances](/help/en/rds/apsaradb-rds-for-mariadb/instance-types#concept-2096591)

## **Core metrics**

The instance types of primary RDS instances involve three core metrics: **instance family**, **IOPS**, and **I/O bandwidth**.

### **Instance family**

The instance family defines whether the resources for an instance are dedicated or shared, which directly determines the instance performance.

**Instance family**

**Supported storage type**

**Dedicated/Shared resources**

**Description**

**Shared**

Cloud disk

-   Dedicated: Memory and storage
    
-   Shared: CPU and I/O
    

-   Supported only by the RDS for SQL Server.
    
-   Fluctuates in performance when the physical server is under high load.
    

**General-purpose**

Cloud disk

-   Dedicated: Memory and storage
    
-   Shared: CPU and I/O
    

Fluctuates in performance when the physical server is under high load.

Premium Local SSD

-   Dedicated: Memory
    
-   Shared: CPU, storage, and I/O
    

**Dedicated**

Cloud disk

All resources are dedicated to the instance.

Delivers stable performance without resource contention.

Premium Local SSD

-   Dedicated: CPU, memory, and storage
    
-   Shared: I/O
    

**Dedicated host**

Premium Local SSD

All resources are dedicated to the instance.

Delivers the highest level of performance stability and isolation.

### **IOPS**

IOPS (Input/Output Operations Per Second) measures the ability of a storage system to handle read and write requests and is a key metric for **random I/O performance**. The actual IOPS of an instancce is determined by its **instance type**, **storage type**, and **storage capacity**. You can find the maximum IOPS for an instance type in the [primary instance type lists](#section-tm8-aqe-r10) for reference. However, the actual maximum IOPS of the instance type is calculated as follows:

-   **For instances using Premium Local SSDs:** The actual maximum IOPS is equal to the maximum IOPS defined in the instance type.
    
-   **For instances using cloud disks:** The actual maximum IOPS is determined by the instance type, storage capacity, and storage type. Use the formulas in the following table to calculate the actual maximum IOPS:
    
    **Storage type**
    
    **Formula for actual maximum IOPS (Storage capacity unit: GB)**
    
    **Premium ESSD**
    
    With [I/O performance burst](/help/en/rds/apsaradb-rds-for-mysql/i-o-performance-burst) enabled
    
    `min{Maximum IOPS for the instance type, 1000000}`
    
    With [I/O performance burst](/help/en/rds/apsaradb-rds-for-mysql/i-o-performance-burst) disabled
    
    `min{Maximum IOPS for the instance type, 1800 + 50 × Storage capacity, 50000}`
    
    **ESSD**
    
    PL3
    
    `min{Maximum IOPS for the instance type, 1800 + 50 × Storage capacity, 1000000}`
    
    PL2
    
    `min{Maximum IOPS for the instance type, 1800 + 50 × Storage capacity, 100000}`
    
    PL1
    
    `min{Maximum IOPS for the instance type, 1800 + 50 × Storage capacity, 50000}`
    
    **Standard SSD**
    
    `min{Maximum IOPS for the instance type, 1800 + 30 × Storage capacity, 25000}`
    

**Example:**

Calculate the actual maximum IOPS of an RDS primary instance with the following specifications:

-   Instance type: `mysql.x2.large.2c`
    
-   Storage: PL1 ESSD of 20 GB in size
    

Based on the instance's storage type, the `min{Maximum IOPS for the instance type, 1800 + 50 x Storage capacity, 50000}` formula applies. The following table shows how to calculate the three values required in the formula:

**Value**

**Description**

`Maximum IOPS for the instance type`

According to the instance type list, this value for the `**mysql.x2.large.2c**` instance type is `20000`.

`1800 + 50 x Storage capacity`

This value can be calculated as follows: `1800 + 50 x 20 = 2800`.

`50000`

This value is the maximum IOPS supported by PL1 ESSD.

According to the formula, the actual maximum IOPS of the instance is 2800, which is the smallest among the three values.

**Note**

-   **Logical database I/Os and physical disk I/Os do not have a one-to-one correspondence**. For example, the default page size for MySQL's InnoDB storage engine is 16 KB and the underlying storage block size of the disk is 4 KB. Consequently, a single logical read that fetches one database page from the disk translates into four distinct physical disk I/Os.
    
-   **A database's capability of processing I/O operations is not solely determined by its underlying disk IOPS but also by the page size of the database engine.** This is because a single logical database page read may require multiple physical disk I/Os. For example, given 1,000 physical I/Os on a disk with a 4 KB block size, an RDS for MySQL instance whose default page size is 16 KB can complete 250 logical I/O operations, whereas an RDS for SQL Server instance whose default page size is 8 KB can complete 500 logical I/O operations.
    

### **I/O bandwidth (throughput)**

I/O bandwidth, also known as throughput, measures the ability of a storage system to handle sequential read and write operations and is a key metric for **sequential I/O performance**. The actual I/O bandwidth of an instancce is determined by its **instance type**, **storage type**, and **storage capacity**. You can find the maximum I/O bandwidth for an instance type in the [primary instance type lists](#section-tm8-aqe-r10) for reference. However, the actual maximum I/O bandwidth of the instance type is calculated using the formulas in the following table:

**Storage type**

**Formula for actual maximum I/O bandwidth (Unit: MB/s, Storage capacity unit: GB)**

**Premium ESSD**

With [I/O performance burst](/help/en/rds/apsaradb-rds-for-mysql/i-o-performance-burst) enabled

`min{Maximum I/O bandwidth for the instance type, 4000}`

With [I/O performance burst](/help/en/rds/apsaradb-rds-for-mysql/i-o-performance-burst) disabled

`min{Maximum I/O bandwidth for the instance type, 120 + 0.5 × Storage capacity, 350}`

**ESSD**

PL3

`min{Maximum I/O bandwidth for the instance type, 120 + 0.5 × Storage capacity, 4000}`

PL2

`min{Maximum I/O bandwidth for the instance type, 120 + 0.5 × Storage capacity, 750}`

PL1

`min{Maximum I/O bandwidth for the instance type, 120 + 0.5 × Storage capacity, 350}`

**Standard SSD**

`min{Maximum I/O bandwidth for the instance type, 120 + 0.5 × Storage capacity, 300}`

**Example:**

Calculate the actual maximum I/O bandwidth of an RDS primary instance with the following specifications:

-   Instance type: `mysql.x2.large.2c`
    
-   Storage: PL3 ESSD of 5,000 GB in size
    

Based on the instance's storage type, the `min{Maximum I/O bandwidth for the instance type, 120 + 0.5 × Storage capacity, 4000}` formula applies. The following table shows how to calculate the three values required in the formula:

**Value**

**Description**

`Maximum I/O bandwidth for the instance type`

According to the instance type list, this value for the `**mysql.x2.large.2c**` instance type is `192` MB/s.

`120 + 0.5 × Storage capacity`

This value can be calculated as follows: `120 + 0.5 x 5000 = 2620`.

`4000`

This value is the maximum I/O bandwidth supported by PL3 ESSD.

According to the formula, the actual maximum I/O bandwidth of the instance is 192, which is the smallest among the three values.

### **Relationship between IOPS and I/O bandwidth**

IOPS and I/O bandwidth are not independent metrics but rather two interconnected facets of storage performance. Their relationship is defined by the size of the I/O operations being performed as follows:

`**I/O bandwidth (MB/s) = IOPS × I/O Size (KB) / 1024**`.

**Note**

The `I/O Size` in this formula refers to the physical block size of the cloud disk (4 KB by default) but not the logical page size of a database.

This relationship means that the performance of an RDS instance is typically limited by either its IOPS or I/O bandwidth ceiling, depending on the application's I/O profile:

-   IOPS-bound workloads: Applications performing many small I/O operations (such as 4 KB reads/writes) will often hit the maximum IOPS limit of the instance. At this point, the usage of the instance's I/O bandwidth is still well below its maximum, making IOPS the performance bottleneck.
    
-   Bandwidth-bound workloads: Conversely, applications performing fewer, large I/O operations (such as 256 KB reads/writes) will saturate the available I/O bandwidth of the instance first. In this scenario, the IOPS of the instance remains relatively low, making I/O bandwidth the performance bottleneck.
    

## FAQ

-   **Why does an entry-level RDS instance support a larger maximum number of connections and higher maximum IOPS than an enterprise-level RDS instance that has the same number of CPU cores and memory capacity?**
    
    An entry-level RDS instance belongs to the shared or general-purpose instance family, and an enterprise-level RDS instance belongs to the dedicated instance family. The shared and general-purpose instance families share CPU resources, which allows them to support a larger maximum number of connections and higher maximum IOPS than an enterprise-level RDS instance. However, an enterprise-level RDS instance provides a more reliable database performance because the dedicated instance family exclusively enjoys the vCPU and memory resources that are allocated to the instance. For more information, see [Instance families](/help/en/rds/product-overview/instance-families#section-hmj-v1d-52b).
    
-   **How do I query the available resources that I can purchase?**
    
    Call the [DescribeAvailableResource](/help/en/rds/api-query-available-resources#doc-api-Rds-DescribeAvailableResource) operation to query the available resources in a region.
    
-   **Why are the QPS and the TPS not provided in the documentation?**
    
    To obtain the queries per second (QPS) and the transactions per second (TPS) of an RDS instance, you must create objects on the RDS instance and perform tests. The QPS and TPS of an RDS instance vary based on the implementation method and the business system even though its instance type remains unchanged. For more information about how to test the QPS and TPS, see [Test guidelines](/help/en/rds/support/test-guidelines#task-2399303).
    

## **References**

-   Read-only RDS instance types: [Instance types for read-only ApsaraDB RDS instances](/help/en/rds/product-overview/read-only-apsaradb-rds-instance-types#reference-2352913)
    
-   Introdution to read-only RDS instances:
    
    -   [Overview of read-only ApsaraDB RDS for MySQL instances](/help/en/rds/overview-of-read-only-apsaradb-rds-for-mysql-instances#concept-cst-z45-vdb)
        
    -   [Overview of read-only ApsaraDB RDS for SQL Server instances](/help/en/rds/overview-of-read-only-apsaradb-rds-for-sql-server-instances)
        
    -   [Overview of read-only ApsaraDB RDS for PostgreSQL instances](/help/en/rds/overview-of-read-only-apsaradb-rds-for-postgresql-instances)
        
-   Create and use a primary RDS instance after selecting its instance type:
    
    -   [Quickly create an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/step-1-create-an-apsaradb-rds-for-mysql-instance-and-configure-databases)
        
    -   [Quickly create an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance)
        
    -   [Quickly create an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-an-apsaradb-rds-for-postgresql-instance)
