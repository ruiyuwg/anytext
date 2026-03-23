To ensure service stability and performance, PolarDB for PostgreSQL (Compatible with Oracle) imposes specific limits on resource usage and features. This document describes these limits to help you plan your application design and database operations and maintenance (O&M) and prevent operational issues that may arise from exceeding them.

The limits for this product include limits specific to PolarDB in a cloud environment and general limits that are inherited from the PostgreSQL kernel.

## PolarDB **limits**

The following limits are specific to PolarDB for PostgreSQL (Compatible with Oracle). These limits are designed to ensure stability, security, and resource isolation in a multi-tenant environment.

### **Maximum number of files**

PolarDB for PostgreSQL (Compatible with Oracle) limits the total number of files that you can create in a single cluster. This limit depends on the cluster's node specifications. If this limit is reached, you cannot create new data tables or indexes, and the error message `could not create file` is returned.

-   **File composition**: The total number of files includes user table files, database system table files, index files, and log files. A standard non-partitioned table typically uses three files: a data file, a Free Space Map (FSM) file, and a Visibility Map (VM) file. If the table has indexes, each index uses one additional file.
    
-   **Solutions**: If the file limit is reached, you can release resources by deleting unused tables or indexes. You can also increase the limit by [upgrading the configuration](/help/en/polardb/polardb-for-oracle/change-the-specifications-of-a-polardb-cluster).
    
-   **Limit details for each specification**:
    
    **Node specifications**
    
    **Maximum number of files**
    
    polar.o.x4.medium
    
    1048576
    
    polar.o.x4.large
    
    2097152
    
    polar.o.x4.xlarge
    
    2097152
    
    polar.o.x8.xlarge
    
    4194304
    
    polar.o.x8.2xlarge
    
    8388608
    
    polar.o.x8.4xlarge
    
    12582912
    
    polar.o.x8.12xlarge
    
    20971520
    

### **Feature and permission limits**

**Item**

**Constraint**

**Description**

Database permissions

The `superuser` permission is not provided.

Instead, the system provides the `polar_superuser` role, which is a [privileged account](/help/en/polardb/polardb-for-oracle/create-database-accounts). This role is a subset of the `superuser` permissions and meets most daily management needs.

## **PostgreSQL limits**

Because it is a cloud database service based on PostgreSQL, PolarDB also inherits the internal limits for database objects from the PostgreSQL kernel. The following table summarizes the common core limits that are stable across PostgreSQL versions. Pay close attention to these limits during database design.

-   [PostgreSQL 14 Limits](https://www.postgresql.org/docs/14/limits.html)
    

**Limit object**

**Limit value**

**Description**

Database size

500 TB

The default maximum storage space is 500 TB. The actual capacity is limited by your cluster specifications.

Maximum table size

32 TB

This is the effective limit based on the default 8 KB block size (`BLCKSZ`).

Maximum columns per table

1,600

The theoretical limit is 1,600. However, the actual number of usable columns depends on the data types of all columns. A single row of data, excluding TOAST values, cannot exceed one data page (about 8 KB). Using fixed-width data types such as `bigint` significantly reduces the column limit. For optimal performance, keep the number of columns under 250.

Maximum field size

1 GB

Applies to variable-length types such as `text`, `jsonb`, and `bytea`. Their storage relies on the TOAST mechanism, which stores oversized values out of line.

Identifier length

63 bytes

The maximum length for the names of database objects, such as tables and columns. Longer names are silently truncated. This can cause unexpected behavior.

Maximum indexes per table

Unlimited

There is no theoretical limit. The actual number of indexes you can create is limited by storage space, the [maximum number of files](#0cb3c5e3b6i7a), and system resources.

Index columns

32

The maximum number of columns that can be included in a single index.

Partition key columns

32

The maximum number of columns that the partition key can include when you create a partitioned table.

Number of function arguments

100

The maximum number of arguments for a user-defined function.

Number of query parameters

65,535

The maximum number of parameter markers (such as `$1`, `$2`) that can be used in a single query.
