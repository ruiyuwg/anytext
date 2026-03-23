The 16K atomic write feature of ApsaraDB RDS for MySQL improves write efficiency by disabling the innodb\_doublewrite parameter (InnoDB doublewrite mechanism). This topic describes how to use the write optimization feature and how to conduct a performance test.

## **Background information**

The minimum read and write unit of data in the MySQL InnoDB engine is a page (usually 16 KB in size), but the minimum I/O unit of a file system is usually 4 KB. When a data page is written to a disk, extreme conditions such as power outages may cause some data pages in InnoDB to be incompletely written to the disk. Therefore, InnoDB introduced the doublewrite mechanism to ensure the atomicity of data pages and prevent partial write errors. When InnoDB needs to flush dirty pages, the data is written to the doublewrite buffer. When the buffer is full, the thread that is used to flush dirty pages can be executed again only after the previous batch of data is written to the disk. Each flush operation involves two write operations. This increases the consumption of disk I/O resources.

In most cases, disk I/O may become a performance bottleneck for write-intensive applications. The InnoDB doublewrite mechanism significantly increases the consumption of bandwidth resources and affects the performance of your ApsaraDB RDS for MySQL instance.

## **Feature overview**

ApsaraDB RDS for MySQL supports end-to-end 16K atomic write. After you enable the 16K atomic write feature, the atomicity of each data page write is ensured, which allows you to safely disable the InnoDB doublewrite mechanism. This reduces the number of write I/O operations, simplifies flush operations, and significantly reduces IOPS and bandwidth required for data writes to disks to improve the write performance of your RDS instance.

After you enable the 16K atomic write feature, the queries per second (QPS) increases by at least 40%. For more information, see [Performance Testing](#bb9a886cac48p).

## **Prerequisites**

-   The RDS instance runs MySQL 5.7 or MySQL 8.0.
    
-   Storage type: The RDS instance uses standard SSDs or premium performance disks.
    

## **Billing**

The 16K atomic write feature is free of charge. You are not charged when you enable or disable the 16K atomic write feature.

## **Precautions**

-   When you enable or disable the 16K atomic write feature, your RDS instance restarts. Proceed with caution.
    
-   When you enable the 16K atomic write feature for a primary instance, you cannot disable the 16K atomic write feature for its read-only instances to prevent replication delay caused by performance inconsistency.
    
-   When you create a read-only instance or restore data from a backup, the 16K atomic write configuration is inherited from the source instance.
    

## **Manage 1**6K atomic write

**Important**

To improve instance performance and user experience, instances that meet the [prerequisites](#39cb8454e0p0i) for enabling the 16K atomic write feature and the following conditions have the 16K atomic write feature enabled by default:

-   **New instances**: instances purchased from the ApsaraDB RDS console on or after May 14, 2025.
    
-   **Existing YiTian RDS instances**: instances whose [product type](/help/en/rds/product-overview/product-types) has not been changed.
    

Existing standard instances do not support the 16K atomic write feature.

You can manually enable or disable the 16K atomic write feature in the console for instances that support this feature**.**

1.  Visit [ApsaraDB RDS instance list](https://rds.console.alibabacloud.com/rdsList/basic), select a region at the top, and then click the target instance ID.
    
2.  On the **Basic Information** page, click the 16K atomic write switch to enable or disable the 16K atomic write feature.
    

## **Performance Testing**

### **Test preparation**

-   **Test resources and methods:** This test performs data write operations on general-purpose and dedicated instance types of high-availability instances with premium performance disks to observe the performance differences before and after enabling the 16K atomic write feature.
    
    **Edition**
    
    **Storage type**
    
    **Instance Family**
    
    **Instance Type**
    
    **CPU and memory**
    
    High-availability
    
    Premium performance disk
    
    General-purpose
    
    mysql.n2.large.2c
    
    4 cores, 8 GB
    
    High-availability
    
    Premium performance disk
    
    Dedicated
    
    mysql.x2.large.2c
    
    4 cores, 8 GB
    
-   **Test tool installation**: This example shows how to install Sysbench on a CentOS system. You can execute the following commands to install it. For more information, see [Sysbench official documentation](https://github.com/akopytov/sysbench?spm=a2c4g.11186623.0.0.2be71d39APhndM).
    
    ```
    git clone https://github.com/akopytov/sysbench.git
    cd sysbench
    git checkout 0.5
    
    yum -y install make automake libtool pkgconfig libaio-devel
    yum -y install mariadb-devel
    
    
    ./autogen.sh
    ./configure
    make -j
    make install
     
    ```
    
-   **Test data preparation**: 300 GB of data (30 tables, 40 million rows per table)
    
    ```
    sysbench oltp_write_only --tables=30 --table_size=40000000 --rand-type=special --rand-spec-pct=15 --threads=64 --time=100 prepare
    ```
    
    The following table describes the parameters that are involved in the performance test.
    
    **Parameter**
    
    **Description**
    
    tables
    
    The number of tables. In this example, 30 tables are used.
    
    table\_size
    
    The number of rows in each table. In this example, each table contains 40 million rows.
    
    rand-type
    
    The distribution type of random numbers. In this example, special is used.
    
    rand-spec-pct
    
    The percentage of special random numbers that are considered as special values. In this example, 15% is used.
    
    threads
    
    The number of concurrent threads. In this example, 64 is used.
    
    time
    
    The duration of the test. Unit: seconds. In this example, 100 is used.
    

### **Test write performance**

Execute the following command on the test instance to compare the QPS performance with the 16K atomic write feature enabled and disabled.

```
sysbench oltp_write_only --tables=30 --table_size=40000000 --rand-type=special --rand-spec-pct=15 --threads=64 --time=100 run
```

### **Test results**

#### **16K atomic write test results**

-   The following figure shows the test results for the standard RDS instance that runs RDS High-availability Edition and uses a general-purpose instance type with 4 cores and 8 GB of memory:
    
    After the 16K atomic write feature is enabled (orange), the QPS increases by 48%.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2371337471/p954211.png)
    
-   The following figure shows the test results for the standard RDS instance that runs RDS High-availability Edition and uses a dedicated instance type with 4 cores and 8 GB of memory:
    
    After the 16K atomic write feature is enabled (orange), the QPS increases by 47%.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2371337471/p954212.png)
    

#### **16K atomic write +** Buffer Pool Extension (BPE) **test results**

**Note**

For more information about the Buffer Pool Extension (BPE) feature for premium performance disks, see [Use the I/O acceleration feature of general ESSDs](/help/en/rds/apsaradb-rds-for-mysql/buffer-pool-extension-bpe).

The following figure shows the test results for the standard RDS instance that runs RDS High-availability Edition and uses a general-purpose instance type with 4 cores and 8 GB of memory:

After the 16K atomic write and Buffer Pool Extension (BPE) features are enabled (orange), the QPS increases by 93%.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2371337471/p954215.png)

## **References**

-   [Premium ESSD](/help/en/rds/apsaradb-rds-for-mysql/premium-essd/)
    
-   [Use the I/O acceleration feature of general ESSDs](/help/en/rds/apsaradb-rds-for-mysql/buffer-pool-extension-bpe)
