File Storage NAS (NAS) provides the lifecycle management feature to help you dump cold data from the Standard storage class to the Infrequent Access (IA) or Archive storage class. The IA or Archive storage class is more cost-effective than the Standard storage class and helps you reduce the storage costs of file systems. This topic describes lifecycle policies and the scenarios, limits, benefits, and workflow of lifecycle management.

## **Lifecycle policies**

You can create a lifecycle policy for a General-purpose NAS file system based on the time when files were last accessed. NAS periodically dumps cold data to the IA or Archive storage class.

-   IA storage class: suitable for storing data that is accessed 1 to 3 times each month on average. You can dump data that has not been accessed for more than 14 days, 30 days, 60 days, or 90 days to the IA storage class.
    
-   Archive storage class: suitable for long-term storage of data that is accessed once or twice each quarter on average in scenarios such as data auditing and data archiving. You can dump data that has not been accessed for more than 14 days, 30 days, 60 days, 90 days, or 180 days to the Archive storage class.
    

For more information about the IA and Archive storage classes, see [Storage classes of General-purpose NAS file systems](/help/en/nas/product-overview/file-system-storage-type).

## **Priority of lifecycle policies**

If multiple lifecycle policies point to the same time and the files or directories match the dump operation at the same time, NAS executes the lifecycle policies with the minimal overhead.

## **Limits**

-   General-purpose NAS file systems for which data encryption is enabled do not support the lifecycle management feature.
    
-   Extreme NAS file systems do not support the lifecycle management feature.
    
-   You cannot directly purchase the IA or Archive storage class or write data to the IA or Archive storage class. To use the lifecycle management feature, you must purchase a General-purpose NAS file system and create a lifecycle policy for the file system. For more information, see [Create a General-purpose NAS file system in the NAS console](/help/en/nas/user-guide/create-a-file-system#section-5jo-0kj-jn5) and [Create a lifecycle policy](/help/en/nas/user-guide/manage-a-lifecycle-policy#section-zfc-kkf-4gm).
    
-   A lifecycle policy dumps only infrequently-accessed files whose size ranges from 64 KiB to 4.88 TiB. Data that is not within this range is not dumped to the IA or Archive storage class.
    
-   The minimum storage duration of the Archive storage class is 60 days. If a file in the Archive storage class is deleted, retrieved, or reduced in size but the file is stored for less than 60 days (1,440 hours), you are charged for the remaining storage duration (1440 - actual storage duration) based on the original file size. For more information, see [Billing of General-purpose NAS file systems](/help/en/nas/product-overview/billing-of-general-purpose-nas-file-systems).
    
-   The time that is required to dump a file to the IA or Archive storage class depends on the storage usage of the file system and the size of the file. After the lifecycle management feature is enabled, a file that meets a specified lifecycle policy is dumped to the IA or Archive storage class within 2 to 24 hours. Subsequent file dumps are performed at a specific point in time every week. You can view the usage of the IA or Archive storage class on the details page of the file system. You can also view the files that have been dumped to the IA or Archive storage class in the NAS console. For more information, see [View the files stored in the IA or Archive storage class](/help/en/nas/user-guide/view-the-files-stored-in-an-ia-storage-medium).
    
-   When you create a lifecycle policy, you can configure a rule to dump a file or directory to the IA storage class and a rule to dump the file or directory to the Archive storage class. However, the number of days specified for the management rule of the Archive storage class must be greater than the number of days specified for the management rule of the IA storage class.
    

## Benefits

-   Easy configuration: You do not need to write scripts or manually migrate cold data.
    
    After you create a lifecycle policy for a file system, the files that meet the lifecycle policy are automatically dumped to the IA or Archive storage class. This eliminates the need for complex and high-risk data migration.
    
-   Lower cost: You can dump cold data by file to minimize your costs.
    
    After you create a lifecycle policy, the file system identifies cold data and dumps files in time based on the lifecycle policy. Compared with data archiving by directory, data dump by file allows you to implement finer-grained data management and minimize storage costs. If you need to frequently access files in the IA or Archive storage class, you can retrieve files or directories to the file system. This way, you are not charged traffic fees that are incurred when you frequently read data from or write data to the files.
    
-   Instant access: You can access cold data without the need to migrate the cold data back to the original file system or modify your applications.
    
    After cold data is dumped to the IA or Archive storage class, the content and structure of the file system remain unchanged. Applications can access the cold data as normal. You do not need to modify applications or interrupt your business.
    

## Cost optimization

### **Estimate whether you need to enable the lifecycle management feature**

Before you enable the lifecycle management feature, we recommend that you use the following method to estimate the costs for your specific scenarios. This way, you can decide whether to enable the lifecycle management feature and dump infrequently-accessed files to the IA or Archive storage class.

**Costs that can be saved if all files are dumped to the IA or Archive storage class (A)**

**Read and write traffic fees of the IA or Archive storage class (B)**

(Unit price of storage usage in a General-purpose NAS file system - Unit price of storage usage in the IA or Archive storage class) × Estimated storage usage

-   For more information about the unit prices, see [File Storage NAS Pricing](https://www.alibabacloud.com/zh/product/nas/pricing?spm=a2796.10410706.2023651640.1.175d1af8P6Xys1).
    
-   Estimated storage usage: On the details page of the file system, you can view the current storage usage of the file system and estimate the storage usage for your business scenario. For more information, see [View the storage usage of a file system](/help/en/nas/user-guide/view-the-details-of-a-file-system#section-gv7-4ea-h1g).
    

Unit price of read and write traffic × Estimated read and write traffic

-   For more information about the unit price of read and write traffic, see [File Storage NAS Pricing](https://www.alibabacloud.com/zh/product/nas/pricing?spm=a2796.10410706.2023651640.1.175d1af8P6Xys1).
    
-   Estimated read and write traffic: You can estimate the read and write traffic of the IA or Archive storage class based on your business scenario.
    
    **Note**
    
    For more information about the billing of the read and write traffic, see [Billable items of General-purpose NAS file systems](/help/en/nas/product-overview/billing-of-general-purpose-nas-file-systems#section-pcz-w1n-87u).
    

After you calculate A and B based on the preceding formulas, you can compare A and B.

-   If A is equal to or greater than B, we recommend that you enable the lifecycle management feature.
    
-   If A is lower than B, we recommend that you do not enable the lifecycle management feature.
    

Example:

In August 2021, you created a Capacity NAS file system in the China (Hangzhou) region. The estimated storage usage of the file system is 1 PiB per month and the estimated read and write traffic of the IA storage class is 5,000 GiB per month.

**Costs that can be saved if all files are dumped to the IA storage class (A)**

**Read and write traffic fees of the IA storage class (B)**

(Unit price of storage usage in a General-purpose NAS file system - Unit price of storage usage in the IA storage class) × Estimated storage usage

USD (0.06 - 0.02322) per GiB-month × 1 PiB × 1,024 × 1,024 = USD 38566.62528

Unit price of read and write traffic × Estimated read and write traffic

USD 0.00929 per GiB-month × 5,000 GiB = USD 46.45

The calculation result indicates that A is greater than B. To reduce storage costs, we recommend that you enable the lifecycle management feature.

### **Example of cost optimization**

In most cases, after you enable the lifecycle management feature, you can save up to 92% storage costs by dumping data to the IA storage class, and you can save up to 97% storage costs by dumping data to the Archive storage class.

For example, you create a Performance NAS file system in the China (Hangzhou) region and store 1 PiB of data per month. The following table shows the monthly cost of the file system.

**Note**

-   The unit price in this example comes from the price information published on the Alibaba Cloud official website on April 17, 2024. The unit price of each billable item may vary depending on the date of the price statistics. The price information published on the [File Storage NAS Pricing](https://www.alibabacloud.com/zh/product/nas/pricing?spm=a2796.10410706.2023651640.1.175d1af8P6Xys1) page shall prevail.
    
-   In this example, only data dump and data read are involved. If you use other features of NAS, fees may be incurred based on the corresponding billable items. For more information, see [Billing of General-purpose NAS file systems](/help/en/nas/product-overview/billing-of-general-purpose-nas-file-systems).
    

**Storage class**

**Data volume**

**Storage fee** **(USD 0.3 per GiB-month)**

**Read traffic fee**

**Total fee**

Standard

1 PiB

314,572.8

N/A

314,572.8

You can create a lifecycle policy to dump all data to the IA or Archive storage class and access the data proportionally. The following table shows the costs that you can save per month.

**Storage class**

**Total storage usage**

**Storage fee**

**IA storage class:** **USD 0.02322 per GiB-month**

**Archive storage class:** **USD 0.0076 per GiB-month**

**Data access ratio**

**Read traffic fee**

**IA storage class:** **USD 0.00929 per GiB-month**

**Archive storage class:** **USD 0.01524 per GiB-month**

**Total fee**

IA

1 PiB

24,347.9347

10%

974.127104

25,322.06182

50%

4,870.63552

29,218.57024

80%

7,793.016832

32,140.95155

Archive

1 PiB

7,969.1776

10%

1,598.029824

9,567.207424

50%

7,990.14912

15,959.32672

80%

12,784.238592

20,753.416192

As can be seen from the table:

-   Compared with the Standard storage class, the IA storage class can save about 89% to 92% of your storage costs.
    
-   Compared with the Standard storage class, the Archive storage class can save about 93% to 97% of your storage costs.
    

## Workflow

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7381876171/p781839.png)

The workflow of lifecycle management includes the following steps:

1.  You create a lifecycle policy for a General-purpose NAS file system based on the access frequency of the data in the file system. For more information, see [Manage lifecycle policies](/help/en/nas/user-guide/manage-a-lifecycle-policy#task-2507341).
    
2.  The lifecycle management module periodically checks whether the specified directories contain cold data based on the lifecycle policy. The lifecycle management module dumps the cold data from the Standard storage class to the IA or Archive storage class, or from the IA storage class to the Archive storage class (1 in the figure).
    
3.  When you access cold data in the IA or Archive storage class, the file system caches the data from the IA or Archive storage class to the Standard storage class (2 in the figure). The attributes of the cold data remain unchanged after you access the data. The latency of the first access to the cold data is higher than the latency of later access. The latency of the second or later access to the cold data is the same as the latency of access to the data stored in the Standard storage class. You are charged for the read and write traffic that is generated when you access the cold data in the IA or Archive storage class. For more information, see [Billing of General-purpose NAS file systems](/help/en/nas/product-overview/billing-of-general-purpose-nas-file-systems#task-2567548).
    
4.  If you need to frequently access data in the IA or Archive storage class, we recommend that you create a data retrieval task. This way, you can retrieve specified files or directories to the Standard storage class (3 in the figure). If you run the data retrieval task to read the required data, you are charged for the read traffic. For more information, see [Create a data retrieval task](/help/en/nas/manage-files-in-ia-storage-media#section-r6b-uhm-5cl) and [Billing of General-purpose NAS file systems](/help/en/nas/product-overview/billing-of-general-purpose-nas-file-systems#task-2567548).
    

## Billing

After you create a lifecycle policy to transfer cold data from the Standard storage class of a General-purpose NAS file system to the IA or Archive storage class, you are charged based on the storage class, data size, and storage duration. For more information, see [Billing of General-purpose NAS file systems](/help/en/nas/product-overview/billing-of-general-purpose-nas-file-systems).

-   Billing of the IA storage class
    
    -   Storage usage fees: You are charged for the storage usage of the IA storage class based on the size and storage duration of the files that are dumped to the IA storage class.
        
    -   Read and write traffic fees: You are charged based on the cumulative amount of read and write traffic that is generated when you access data in the IA storage class on an hourly basis. The system does not distinguish the traffic generated over an internal network and the traffic generated over the Internet.
        
-   Billing of the Archive storage class
    
    -   Storage usage fees: You are charged for the storage usage of the Archive storage class based on the size and storage duration of the files that are dumped to the Archive storage class.
        
    -   Storage usage fees of the Archive data that is stored for less than the minimum storage duration: If a file in the Archive storage class is deleted, retrieved, or reduced in size but the file is stored for less than 60 days (1,440 hours), you are charged for the remaining storage duration (1440 - actual storage duration) based on the original file size. You are charged for the storage usage of archive data retained for less than 60 days only once within 24 hours.
        
        **Note**
        
        The minimum storage duration starts from the time when a file is modified, which is indicated by the `mtime` parameter. If you modify a file, the storage duration of the file in the Archive storage class is reset.
        
    -   Read and write traffic fees: You are charged based on the cumulative amount of read and write traffic that is generated when you access data in the Archive storage class on an hourly basis. The system does not distinguish the traffic generated over an internal network and the traffic generated over the Internet.
        

## References

-   [Manage lifecycle policies](/help/en/nas/user-guide/manage-a-lifecycle-policy)
    
-   [View the files stored in the IA or Archive storage class](/help/en/nas/user-guide/view-the-files-stored-in-an-ia-storage-medium)
    
-   [Create a data retrieval task](/help/en/nas/user-guide/create-a-data-retrieval-task)
    
-   [View a data retrieval task](/help/en/nas/user-guide/view-a-data-retrieval-task)
    
-   [Cancel a data retrieval task](/help/en/nas/user-guide/cancel-a-data-retrieval-task)
    
-   [Retry a data retrieval task](/help/en/nas/user-guide/retry-a-data-retrieval-task)
    
-   [FAQ about lifecycle management](/help/en/nas/user-guide/faq-about-lifecycle-management)
