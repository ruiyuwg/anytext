This topic describes the new and historical instance types of ApsaraDB for MongoDB.

## New Instance types

Starting from July 10, 2017, the following types of ApsaraDB for MongoDB instances are used due to the updates of physical resources.

**Note**

The supported memory capacity of each instance type includes the memory that is occupied by management services in ApsaraDB for MongoDB, the database service, and the underlying operating system (such as the BIOS, the kernel of the operating system, and the hypervisor). Therefore, the available memory may be less than the memory capacity that is supported by the instance type.

-   [Standalone instance types](/help/en/mongodb/product-overview/standalone-instance-types#concept-2114214)
    
-   [Replica set instance types](/help/en/mongodb/product-overview/replica-set-instance-types#concept-2114215)
    
-   [Sharded cluster instance types](/help/en/mongodb/product-overview/sharded-cluster-instance-types#concept-2114216)
    

## Historical instance types

For more information about the historical instance types of ApsaraDB for MongoDB, see [Unavailable instance types](/help/en/mongodb/historical-instance-types#concept-2114218).

## Maximum IOPS for local SSDs and ESSDs

The IOPS of a local SSD is tied to the instance type. The IOPS of an Enterprise SSD (ESSD) is proportional to the storage capacity. The Elastic Compute Service (ECS) instance type also limits the maximum IOPS.

The IOPS of an ESSD is calculated by using the following formula:

```
min{1,800 + 50 × Storage capacity, 50,000, ECS-limited IOPS}
```

**Note**

If the throughput of an instance reaches the upper limit, the IOPS of the instance decreases. For more information, see the "Storage I/O performance of new-generation enterprise-level instance families" section of the [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#section-9h4-dr9-6nh) topic.

Description of the values in the preceding formula:

-   `1,800 + 50 × Storage capacity`: the basic calculation formula for the IOPS of the ESSD.
    
-   `50,000`: the maximum IOPS of a single PL1 ESSD. For more information, see [ESSDs](/help/en/ecs/user-guide/essds#concept-727754).
    
-   `ECS-limited IOPS`: the maximum IOPS of the ECS instance type.
    

The actual IOPS of an instance is the minimum of the three values. Examples:

-   If the storage capacity of an instance is 20 GB, the actual IOPS of the instance is 2,800 (1,800 + 50 × 20).
    
-   The ECS-limited IOPS of an instance of the `mdb.shard.2x.xlarge.d` instance type is 20,000. If the storage capacity of the instance is 6,000 GB, the calculated IOPS of the instance is 301,800, which exceeds the maximum IOPS of a single PL1 ESSD and the ECS-limited IOPS. In this case, the actual IOPS of the instance is 20,000.
    

**Note**

In practice, the maximum IOPS of an instance that uses cloud disks is greater than or equal to the IOPS calculated by using the preceding formula.

## **Maximum throughput for ESSDs**

The maximum throughput for an ESSD is not only determined by the instance type of the Apsara for MongoDB instance associated with the ESSD but also limited by the storage capacity of the Apsara for MongoDB instance and the specifications of the ECS instance that is attached to the ESSD.

The throughput of an ESSD is calculated by using the following formula:

```
min{120 + 0.5 × Storage capacity, 350, ECS-limited throughput}
```

**Note**

If the IOPS of an ECS instance reaches the upper limit, the maximum throughput of the instance may not be delivered.

Description of the values in the preceding formula:

-   `120 + 0.5 × Storage capacity`: the calculation formula for the throughput of the ESSD. Unit: MB/s.
    
-   `350`: the maximum throughput of a single PL1 ESSD. For more information, see [ESSDs](/help/en/ecs/user-guide/essds#concept-727754).
    
-   `ECS-limited throughput`: the maximum I/O bandwidth of the ECS instance type.
    

The actual throughput of an instance is the minimum of the three values. Examples:

-   If the storage capacity of an instance is 20 GB, the actual throughput of the instance is 130 MB/s (120 + 0.5 × 20).
    
-   The ECS-limited throughput of an instance of the `mdb.shard.2x.xlarge.d` instance type is 192 MB/s. If the storage capacity of the instance is 6,000 GB, the calculated throughput of the instance is 3,120 MB/s, which exceeds the maximum throughput of a single PL1 ESSD and the ECS-limited throughput. In this case, the actual throughput of the instance is 192 MB/s.
    

**Note**

In practice, the maximum throughput of an instance that uses cloud disks is greater than or equal to the throughput calculated by using the preceding formula.

## Instance categories

The maximum number of connections and maximum IOPS of an instance vary based on the instance category. In practice, an instance may fail to deliver the maximum number of connections or maximum IOPS due to various reasons. The following table describes the instance categories.

**Category**

**Description**

**Maximum connections guaranteed**

**Maximum IOPS guaranteed**

Dedicated instance that uses cloud disks

Occupies exclusive CPU, memory, storage medium, and I/O resources.

Yes

Yes

Dedicated host instance

Occupies exclusive CPU, memory, storage medium, and I/O resources.

Yes

Yes

Dedicated instance that uses local disks

Occupies exclusive CPU and memory and shares I/O resources with other instances on the same physical server.

Yes

No

General-purpose instance

Occupies exclusive memory and shares CPU and I/O resources with other instances on the same physical server.

Yes

No

**Note**

For more information, see [Instance categories](/help/en/mongodb/product-overview/instance-categories#concept-ic2-kd3-fhb).
