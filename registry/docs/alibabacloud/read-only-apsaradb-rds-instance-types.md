This topic describes the instance types available for RDS read-only instances and provides their specific configurations.

RDS lets you scale out read performance by adding [read-only instances](/help/en/rds/overview-of-read-only-apsaradb-rds-for-mysql-instances#concept-cst-z45-vdb).

For more information about primary instance types, see [Primary instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db).

## Read-only instance types for each database engine

-   [RDS for MySQL read-only instance types (Standard Edition, formerly X86)](/help/en/rds/apsaradb-rds-for-mysql/read-only-apsaradb-rds-for-mysql-instance-types#concept-2096604)
    
-   [RDS for MySQL read-only instance types (Yitian Edition, formerly ARM)](/help/en/rds/apsaradb-rds-for-mysql/read-only-apsaradb-rds-for-mysql-instance-types-5#concept-2256965)
    
-   [RDS for PostgreSQL read-only instance types](/help/en/rds/apsaradb-rds-for-postgresql/read-only-apsaradb-rds-for-postgresql-instance-types#concept-2096611)
    
-   [RDS for SQL Server read-only instance types](/help/en/rds/apsaradb-rds-for-sql-server/read-only-apsaradb-rds-for-sql-server-instance-types#concept-2096608)
    

### **Instance families**

The instance family determines how resources are allocated and directly affects instance performance.

**Family**

**Storage class**

**Dedicated/Shared resources**

**Description**

**General-purpose**

Cloud disk

-   Dedicated: Memory, storage
    
-   Shared: CPU, I/O resources
    

Performance may fluctuate when the physical server is under high load.

Premium Local SSDs

-   Dedicated: Memory
    
-   Shared: CPU, storage, I/O resources
    

**Dedicated**

Cloud disk

Fully dedicated CPU, memory, storage medium, and I/O resources.

Stable performance with no resource contention.

Premium Local SSDs

-   Dedicated: CPU, memory, storage
    
-   Shared: I/O resources
    

**Dedicated physical server**

Premium Local SSDs

Fully dedicated CPU, memory, storage medium, and I/O resources.

Provides the highest performance stability and isolation.

### **IOPS**

Input/output operations per second (IOPS) measures a storage system's ability to handle read and write requests. It is a key metric for random I/O performance. The main factors that affect an instance's IOPS are its **instance type, storage class, and storage capacity**. You can find the maximum IOPS for an instance type in the [read-only instance type tables for each engine](#section-jf9-87s-22q). The actual maximum IOPS of an instance is calculated as follows:

-   **Instances with Premium Local SSDs:** The actual maximum IOPS is determined solely by the instance type. The value listed in the primary instance type table is the actual maximum IOPS for the instance.
    
-   **Instances that use cloud disks:** The actual maximum IOPS is determined by the instance type, storage capacity, and storage class. The formula is as follows:
    
    **Storage class**
    
    **Formula for actual maximum IOPS (Storage capacity unit: GB)**
    
    **Premium performance disk**
    
    [Performance burst](/help/en/rds/apsaradb-rds-for-mysql/i-o-performance-burst) enabled
    
    `min{Maximum IOPS of the instance type, 1,000,000}`
    
    [Performance burst](/help/en/rds/apsaradb-rds-for-mysql/i-o-performance-burst) disabled
    
    `min{Maximum IOPS of the instance type, 1,800 + 50 * Storage capacity, 50,000}`
    
    **Enterprise SSD (ESSD)**
    
    PL3
    
    `min{Maximum IOPS of the instance type, 1,800 + 50 * Storage capacity, 1,000,000}`
    
    PL2
    
    `min{Maximum IOPS of the instance type, 1,800 + 50 * Storage capacity, 100,000}`
    
    PL1
    
    `min{Maximum IOPS of the instance type, 1,800 + 50 * Storage capacity, 50,000}`
    
    **Standard SSD**
    
    `min{Maximum IOPS of the instance type, 1,800 + 30 * Storage capacity, 25,000}`
    

**Example:** Calculate the actual IOPS for an instance that uses a PL1 ESSD, has an instance type of `mysql.x2.large.2c`, and has a storage capacity of 20 GB.

**Limiting factor**

**Description**

**Instance type**

Query the primary instance type table. The maximum IOPS for the `**mysql.x2.large.2c**` instance type is `20,000`.

**Storage capacity**

The maximum IOPS for a storage capacity of 20 GB is `1,800 + 50 * 20 = 2,800`.

**Storage class**

The maximum IOPS for a PL1 ESSD is `50,000`.

The actual maximum IOPS for this instance is 2,800, which is the minimum of these three values. The performance is mainly limited by the storage capacity.

**Note**

-   **The actual number of database reads and writes is not equivalent to the number of disk I/O operations**. For example, a single MySQL read or write operation is 16 KB by default, while the I/O block size of a cloud disk is 4 KB. Therefore, one MySQL read or write operation consumes four disk I/O operations.
    
-   **Different database engines have different default page sizes. This results in a different number of actual database reads and writes for the same number of disk I/O operations. This means that for the same IOPS metric, different databases have different read and write processing capabilities.** For example, the I/O block size of a cloud disk is 4 KB. For 1,000 disk I/O operations, the MySQL engine (default page size of 16 KB) performs 250 actual read and write operations. The SQL Server engine (default page size of 8 KB) performs 500 actual read and write operations.
    

### **I/O bandwidth (throughput)**

I/O bandwidth reflects the ability of a storage system to continuously read and write data. It is a key metric for sequential I/O performance. The main factors that affect an instance's I/O bandwidth are its instance type, storage class, and storage capacity. You can find the maximum I/O bandwidth for an instance type in the [read-only instance type tables for each engine](#section-jf9-87s-22q). The actual maximum I/O bandwidth of an instance is calculated as follows:

**Storage class**

**Formula for actual I/O bandwidth of a cloud disk instance (I/O bandwidth unit: MB/s, Storage capacity unit: GB)**

**Premium performance disk**

[Performance burst](/help/en/rds/apsaradb-rds-for-mysql/i-o-performance-burst) enabled

`min{Maximum I/O bandwidth of the instance type, 4,000}`

[Performance burst](/help/en/rds/apsaradb-rds-for-mysql/i-o-performance-burst) disabled

`min{Maximum I/O bandwidth of the instance type, 120 + 0.5 * Storage capacity, 350}`

**ESSD**

PL3

`min{Maximum I/O bandwidth of the instance type, 120 + 0.5 * Storage capacity, 4,000}`

PL2

`min{Maximum I/O bandwidth of the instance type, 120 + 0.5 * Storage capacity, 750}`

PL1

`min{Maximum I/O bandwidth of the instance type, 120 + 0.5 * Storage capacity, 350}`

**Standard SSD**

`min{Maximum I/O bandwidth of the instance type, 120 + 0.5 * Storage capacity, 300}`

Example: Calculate the actual maximum I/O bandwidth for an instance that uses a PL3 ESSD, has an instance type of `mysql.x2.large.2c`, and has a storage capacity of 5,000 GB.

**Limiting factor**

**Description**

**Instance type**

Query the primary instance type table. The maximum I/O bandwidth for the `**mysql.x2.large.2c**` instance type is `192`.

**Storage capacity**

The maximum I/O bandwidth for a storage capacity of 5,000 GB is `120 + 0.5 * 5,000 = 2,620`.

**Storage class**

The maximum I/O bandwidth for a PL3 ESSD is `4,000`.

The actual maximum I/O bandwidth for this instance is the minimum of these three values: 192. This is mainly limited by the instance type.

### **Relationship between IOPS and I/O bandwidth**

A disk's IOPS and I/O bandwidth are not independent performance metrics. In addition to being dependent on the instance type, storage class, and storage capacity, they also constrain each other:

-   **Conversion formula:** `**I/O bandwidth (MB/s) = IOPS × I/O block size (KB) / 1,024**`. In this formula, I/O block size refers to the size of a single disk I/O operation (4 KB for cloud disks by default), not the database page size.
    
-   **Constraint: In most cases, IOPS and I/O bandwidth do not reach their maximum values at the same time.**
    
    -   When IOPS reaches its maximum value, if the I/O block size is small (such as 4 KB), the instance's I/O bandwidth may not reach its maximum value. In this case, IOPS becomes the performance bottleneck.
        
    -   When I/O bandwidth reaches its maximum value, if the I/O block size is large (such as 256 KB), the instance's IOPS may not reach its maximum value. In this case, I/O bandwidth becomes the performance bottleneck.
        

## Read-only instance pricing

For the prices of read-only instances, see the official purchase page.
