The storage overview displays data of the previous day (T-1), including the basic information about storage and metadata objects, storage trends, storage class distribution, table format distribution, and file distribution. This helps you quickly understand the current storage resource usage and potential issues, allowing you to take measures for optimization.

## Prerequisites

-   Object Storage Service (OSS) is activated.
    
-   Location hosting is completed in DLF. See [Location hosting](/help/en/dlf/dlf-1-0/user-guide/location-hosting).
    

## Activate storage overview

1.  Log on to the [DLF console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc).
    
2.  In the left-side navigation pane, click **Lake Management** > **Storage Overview**, and click **Enable Now** to activate the storage overview feature.
    

**Important**

1.  If you enable this feature, OSS buckets of database are written to statistical files. You are charged for the storage of these files.
    
2.  No statistics data is generated on the first day of activation. You need to wait until the data is produced the next day to view the statistics information.
    

## Feature description

-   [Metadata analysis](#p-cma-py3-pdx)
    
-   [Location analysis](#4b8bc5c06b1cl)
    

### **Metadata analysis**

#### **Total resources**

-   Total storage volume and monthly/daily changes: The total storage volume of tables in metadata management (only includes OSS type storage, excluding HDFS storage).
    
-   Total number of tables and monthly/daily changes: The total number of all tables in metadata management.
    
-   Total number of databases and monthly/daily changes: The total number of all databases in metadata management.
    
-   API monthly/daily access volume: The API access volume for the current month (calendar month).
    

![资源总计](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2254095071/p402000.png)

#### **Trend changes**

Trend change graphs of storage volume, number of tables, number of databases, and API interfaces. You can select the time period to query according to the time segment.

![趋势变化](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2254095071/p402001.png)

#### **Table/database storage ranking**

Statistics on the size ranking of OSS storage occupied by tables/databases. Optimize the top-ranked tables/databases according to business needs.

![表/库存储排名](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2254095071/p402003.png)

#### **Storage class distribution**

View the distribution of storage archives on OSS. OSS storage includes standard, IA, archive, and cold archive storage. You can choose the appropriate storage method for different business data as needed to optimize storage costs.

![存储分层分布](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2254095071/p402005.png)

#### **Storage format distribution**

View the storage format distribution of statistical tables.

![存储格式分布](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2254095071/p402006.png)

#### **File distribution and rankings of small files**

Statistics on the distribution and ranking of size files. You can optimize tables with many small files according to business conditions to improve query performance.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1639764371/p873628.png)

### **Location analysis**

Statistics on Location storage trends, request trends, and storage ranking. You can query by OSS Bucket and time segment.

#### **Location storage trend analysis**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1639764371/p875337.png)

#### **Location request trend analysis**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1639764371/p875341.png)

#### Location storage ranking

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1639764371/p873951.png)
