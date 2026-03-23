This topic describes the specifications for ApsaraDB for MongoDB standalone instances.

#### **Notes**

-   The memory specified for an instance type is shared by MongoDB management services, database services, and the underlying operating system. This includes memory reserved for the BIOS, kernel, and hypervisor. Therefore, the available memory is less than the memory specified for the instance type.
    
-   For more information about the maximum input/output operations per second (IOPS) and throughput of different disk types, see [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds).
    
-   General-purpose instances with cloud disks do not support disk encryption.
    
-   To use standalone instances that run MongoDB 4.2 or later, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex).
    

**Important**

**A single collection file cannot exceed 16 TB. Otherwise, the instance becomes unavailable.**

**Database version**

**Instance type category**

**Instance type details**

**Instance type code**

**Maximum connections**

**Maximum IOPS**

**Maximum throughput (MB/s)**

**Storage capacity**

MongoDB 4.2 or later

General-purpose with cloud disk

1-core 2 GB

mdb.single.2x.small.c

2000

min{30 × Storage, 20000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage, 128, Maximum throughput of the selected disk type}

20 GB to 16000 GB, with a step size of 10 GB.

2-core 4 GB

mdb.single.2x.large.c

4000

4-core 8 GB

mdb.single.2x.xlarge.c

6000

min{120 + 0.5 × Storage, 192, Maximum throughput of the selected disk type}

4-core 16 GB

mdb.single.4x.xlarge.c

8000

8-core 16 GB

mdb.single.2x.2xlarge.c

8000

min{120 + 0.5 × Storage, 256, Maximum throughput of the selected disk type}

8-core 32 GB

mdb.single.4x.2xlarge.c

10000

MongoDB 4.0

General-purpose with cloud disk

4-core 8 GB

dds.sn2.large.1

6000

min{30 × Storage, 20000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage, 192, Maximum throughput of the selected disk type}

20 GB to 2000 GB, with a step size of 10 GB.

4-core 16 GB

dds.sn4.xlarge.1

8000

8-core 16 GB

dds.sn2.xlarge.1

8000

min{120 + 0.5 × Storage, 256, Maximum throughput of the selected disk type}

8-core 32 GB

dds.sn4.2xlarge.1

10000

**Note**

For information about how to test the high-connection capability of a standalone instance, see [Test the high-connection capability of a standalone instance](/help/en/mongodb/support/connectivity-testing-of-a-standalone-instance#task-2232442).
