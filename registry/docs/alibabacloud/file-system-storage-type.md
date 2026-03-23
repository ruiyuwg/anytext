This topic describes the storage classes of General-purpose NAS file systems.

## **Storage classes**

General-purpose NAS file systems provide the following storage classes designed for low-cost storage: Standard, Infrequent Access (IA), and Archive. The IA and Archive storage classes are used for tiered storage.

-   Standard storage class: provides highly reliable, highly available, and high-performance file storage services for storing frequently accessed hot data. After a file system is created, data is stored in the Standard storage class before data can be dumped to the IA or Archive storage class based on a lifecycle policy. For more information about the Standard storage class, see [General-purpose NAS file systems](/help/en/nas/product-overview/general-purpose-nas-file-systems).
    
-   IA storage class: provides file storage services with high durability and low storage costs. Data can be accessed in real time. You are charged for the read and write traffic when you access IA data. The IA storage class is suitable for storing data that is accessed 1 to 3 times each month on average.
    
-   Archive storage class: provides file storage services with high durability and low storage costs. Data can be accessed in real time. You are charged for the read and write traffic when you access Archive data. The Archive storage class is suitable for long-term storage of data that is accessed once or twice each quarter on average in scenarios such as data auditing and data archiving.
    

The following figures show the relationship between the Standard, IA, and Archive storage classes.

**Data storage**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2770722371/CAEQLxiBgIDw1cLNmhkiIDk3Y2UzOTVkYmZlMDQxMzM5MDk4OTRlMmM2MzkxODgz4286250_20240320184548.419.svg)

**Data retrieval**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3770722371/CAEQLxiBgMDf.7_NmhkiIDEzZjAwMDk4MTIzZDRlNzY4ZmU5MDUwMWE2MzRmMzI14286250_20240328163348.130.svg)

## **Cost optimization**

The IA and Archive storage classes are cost-optimized for cold data stored in the Standard storage class.

You can configure lifecycle policies to optimize storage costs. Data is automatically tiered between storage classes based on the access patterns of your workloads. If you want to frequently access data stored in the IA or Archive storage class, we recommend that you create a data retrieval task to retrieve data from a specified file or directory to the Standard storage class. For more information, see [Lifecycle management overview](/help/en/nas/user-guide/ia-storage-media/).

## **Comparison of storage classes**

**Item**

**Standard storage class**

**IA storage class**

**Archive storage class**

Average latency for reading 4-KiB files

-   Capacity NAS file system: 10 ms
    
-   Premium NAS file system: 2 ms
    
-   Performance NAS file system: 2 ms
    

When a file is read for the first time, the latency is 25 to 50 ms. When the file is read later, the latency is the same as the latency of reading data from the Standard storage class.

When a file is read for the first time, the latency is 25 to 50 ms. When the file is read later, the latency is the same as the latency of reading data from the Standard storage class.

Maximum IOPS

The maximum IOPS is shared within a file system.

-   Capacity NAS file system: 15,000
    
-   Premium NAS file system: 30,000
    
-   Performance NAS file system: 30,000
    

Maximum throughput

The Standard storage class provides exclusive throughput.

-   Capacity NAS file system: The maximum read throughput is 10 GB/s and the maximum write throughput is 5 GB/s.
    
-   Premium NAS file system: The maximum read throughput is 20 GB/s and the maximum write throughput is 5 GB/s.
    
-   Performance NAS file system: The maximum read throughput is 20 GB/s and the maximum write throughput is 5 GB/s.
    

The IA and Archive storage classes share a throughput of 1 GB/s for read and write operations.

Minimum configuration space

Directory

Directory

Directory

Minimum size of a file that can be dumped

N/A

64 KiB

64 KiB

Maximum size of a file that can be dumped

N/A

4.88 TiB

4.88 TiB

Minimum storage duration

N/A

N/A

60 days

For more information about the Standard storage class, see [General-purpose NAS file systems](/help/en/nas/product-overview/general-purpose-nas-file-systems).

## Scenarios

## IA storage class

-   Web content management
    
    Most web content management systems such as WordPress, FTP, and Internet Information Services (IIS) are used to upload and download data. In most cases, shared file systems are used at the backend of the content management systems to provide data storage. As your business develops over time, more and more data is infrequently accessed and becomes cold data. You can use the IA storage class to manage cold data and reduce storage costs.
    
-   Big data analysis
    
    You can use the IA storage class to store large amounts of unstructured data at a low cost. For example, you can store gene sequencing data, geographic information system (GIS) data, bill image data, or audio recording data. Data stored in the IA storage class can be access in real time.
    
-   Backup storage
    
    The IA storage class provides a cost-effective storage solution for the backup data of MySQL, Redis, and MongoDB databases. To back up Windows servers, you can integrate General-purpose NAS file systems with Volume Shadow Copy Service (VSS).
    

## Archive storage class

-   Data auditing
    
    If you have compliance requirements, you may need to store data for a long period of time. For example, in the medical industry, some patient records need to be retained for 6 years or more. In the financial industry, some transaction data needs to be retained for more than 5 years. The Archive storage class helps you easily manage cold data and reduce storage costs.
    
-   Data archiving
    
    You can use the Archive storage class to store cold data at an extremely low cost. For example, you can store archived historical data in big data analysis, historical cold data in AI scenarios, and historical files that are not accessed for a long time in enterprise applications. Data stored in the Archive storage class can be access in real time.
    

## **Billing**

When you use NAS file systems, you are charged storage fees based on the storage capacity and storage duration of your data in each storage class. The fees are included in your NAS bills. If you access data that is stored in the IA or Archive storage class, you are charged for the read and write traffic. For more information, see [Billing of General-purpose NAS file systems](/help/en/nas/product-overview/billing-of-general-purpose-nas-file-systems).

**Important**

Files in the Archive storage class must be stored for at least 60 days. If a file is stored for less than 60 days, you are charged for the remaining storage duration based on the original file size. For more information, see [Billing of General-purpose NAS file systems](/help/en/nas/product-overview/billing-of-general-purpose-nas-file-systems).
