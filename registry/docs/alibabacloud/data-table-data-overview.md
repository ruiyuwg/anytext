This topic describes data overview of data tables.

## **Description**

Data Lake Formation (DLF) provides detailed metrics for each data table based on the statistics of metadata and stored data. The metrics include the storage size of the table, total number of files in the table, last DDL update time, last data update time, number of visits to the table, number of partitions, number of partitioned files, and last partition update time. If you have enabled the data lake management feature, you can also query the statistics on storage class distribution and file size distribution.

## **Scenarios**

-   As your business grows, if you want to quickly analyze the size of data stored in each table for more specific storage optimization, you can use the Size metric.
    
-   As the data volume increases, if you want to locate and cold archive the tables that are seldom accessed to save storage costs, you can use the File Visits metric.
    
-   If you want to quickly locate the tables that have not been updated for a long time and then clean or optimize the tables, you can use the Data Last Updated At metric.
    

## **Metrics**

**Metric**

**Description**

**Source**

Size

The size of all data stored in a table.

If the location is hosted in DLF, the value of this metric is derived from the statistics of Object Storage Service (OSS) data. Otherwise, the value of this metric is derived from the statistics of E-MapReduce (EMR) engines.

Total Number of Tables

The total number of files stored in a table.

If the location is hosted in DLF, the value of this metric is derived from the statistics of OSS data. Otherwise, the value of this metric is derived from the statistics of EMR engines.

Number of Partitions

The total number of partitions in a table.

The value of this metric is derived from metadata.

DDL Last Updated

The time when the table was last updated by using a data description language (DDL) statement.

If the location is hosted in DLF, the value of this metric is derived from the statistics of OSS.

Data Last Updated

The time when the data was last updated.

If the location is hosted in DLF, the value of this metric is derived from the statistics of OSS.

File Visits within Last Day

The number of visits to a table on the last day.

The data is derived from various compute engines. Currently, the data is derived from only EMR engines. Applicable conditions:

-   The EMR version must be V3.45.1 or later or V5.11.1 or later. For other EMR versions, you must upgrade the EMRHOOK component in an EMR gateway. For more information, see [Upgrade the EMRHOOK component in an EMR gateway](/help/en/dlf/dlf-1-0/user-guide/upgrade-the-emrhook-component-in-an-emr-gateway).
    
-   Only the Spark and Hive compute engines are supported.
    
-   The value of this metric is refreshed at 00:00 every day. A delay of about 10 minutes occurs during the refresh.
    

File Visits within Last Seven Days

The number of visits to a table in the last seven days.

File Visits within Last 30 Days

The number of visits to a table in the last 30 days.

## **Procedure**

1.  Log on to the [DLF console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc).
    
2.  In the left-side navigation pane, choose **Metadata** > **Metadata**.
    
3.  Click the **Table** tab, configure the **Catalog List** and **Database Name** parameters, and then enter the name of the table that you want to search for.
    
4.  Click the table name to go to the table details page.
    
5.  Click the **Data Overview** tab.
