DBS charges for the network traffic that is generated when you perform a cross-region backup from the RDS, PolarDB, or MongoDB console, or download a backup set using the public download URL provided in the RDS console. This applies to products such as RDS MySQL, RDS PostgreSQL, RDS SQL Server, PolarDB for MySQL, and MongoDB.

## **Precautions**

System operations that involve disk replacement, such as secondary database reconstruction, increase the network traffic for cross-region backups of RDS instances that use disks. This results in higher fees for cross-region backup network traffic (Billing Item Code: NetworkOutDuplicationSize).

**Note**

For example, if you perform DDL operations on an RDS instance that uses disks and this causes a long latency on the secondary database, the system may automatically trigger a secondary database reconstruction to ensure product stability. This increases the network traffic fees for cross-region backups of the instance.

## Network fees (pay-as-you-go)

### Cross-region backup network fees

-   Cross-region backup network fees for RDS MySQL (local disk) instances, RDS PostgreSQL, RDS SQL Server, PolarDB for MySQL, PolarDB for PostgreSQL, and MongoDB instances.
    
    **Source region**
    
    **Destination region**
    
    **Network traffic fees (USD/GB)**
    
    **Network plan offset factor**
    
    the Chinese mainland
    
    the Chinese mainland
    
    0.075
    
    0.625
    
    US (Silicon Valley), US (Virginia), UAE (Dubai)
    
    0.31
    
    2.58
    
    China (Hong Kong), UK (London), Singapore, Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok)
    
    0.19
    
    1.58
    
    Germany (Frankfurt), Japan (Tokyo), Malaysia (Kuala Lumpur)
    
    0.28
    
    2.33
    
    South Korea (Seoul)
    
    0.1805
    
    1.50
    
    China (Hong Kong)
    
    US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), South Korea (Seoul), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok)
    
    0.118
    
    0.98
    
    Japan (Tokyo)
    
    0.12
    
    1.00
    
    the Chinese mainland
    
    0.19
    
    1.58
    
    UAE (Dubai)
    
    0.299
    
    2.49
    
    Japan (Tokyo)
    
    China (Hong Kong), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), South Korea (Seoul), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok)
    
    0.12
    
    1.00
    
    the Chinese mainland
    
    0.28
    
    2.33
    
    UAE (Dubai)
    
    0.299
    
    2.49
    
    South Korea (Seoul)
    
    US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok)
    
    0.076
    
    0.63
    
    Singapore
    
    0.08
    
    0.67
    
    China (Hong Kong)
    
    0.118
    
    0.98
    
    Japan (Tokyo)
    
    0.12
    
    1.00
    
    the Chinese mainland
    
    0.1805
    
    1.50
    
    UAE (Dubai)
    
    0.299
    
    2.49
    
    Singapore
    
    US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok)
    
    0.08
    
    0.67
    
    China (Hong Kong), South Korea (Seoul)
    
    0.119
    
    0.99
    
    Japan (Tokyo)
    
    0.12
    
    1.00
    
    the Chinese mainland
    
    0.19
    
    1.58
    
    UAE (Dubai)
    
    0.299
    
    2.49
    
    Malaysia (Kuala Lumpur)
    
    US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), South Korea (Seoul), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok)
    
    0.076
    
    0.63
    
    Singapore
    
    0.08
    
    0.67
    
    China (Hong Kong)
    
    0.118
    
    0.98
    
    Japan (Tokyo)
    
    0.12
    
    1.00
    
    the Chinese mainland
    
    0.28
    
    2.33
    
    UAE (Dubai)
    
    0.299
    
    2.49
    
    Indonesia (Jakarta)
    
    US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London)
    
    0.08
    
    0.67
    
    South Korea (Seoul), Malaysia (Kuala Lumpur), Philippines (Manila), Thailand (Bangkok)
    
    0.08
    
    0.67
    
    Singapore
    
    0.08
    
    0.67
    
    China (Hong Kong)
    
    0.118
    
    0.98
    
    Japan (Tokyo)
    
    0.12
    
    1.00
    
    the Chinese mainland
    
    0.19
    
    1.58
    
    UAE (Dubai)
    
    0.299
    
    2.49
    
    Philippines (Manila)
    
    US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), South Korea (Seoul), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Thailand (Bangkok)
    
    0.076
    
    0.63
    
    Singapore
    
    0.08
    
    0.67
    
    China (Hong Kong)
    
    0.118
    
    0.98
    
    Japan (Tokyo)
    
    0.12
    
    1.00
    
    the Chinese mainland
    
    0.19
    
    1.58
    
    UAE (Dubai)
    
    0.299
    
    2.49
    
    Thailand (Bangkok)
    
    US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), South Korea (Seoul), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila)
    
    0.076
    
    0.63
    
    Singapore
    
    0.08
    
    0.67
    
    China (Hong Kong)
    
    0.118
    
    0.98
    
    Japan (Tokyo)
    
    0.12
    
    1.00
    
    the Chinese mainland
    
    0.19
    
    1.58
    
    UAE (Dubai)
    
    0.299
    
    2.49
    
    US (Silicon Valley)
    
    US (Virginia)
    
    0.076
    
    0.63
    
    Germany (Frankfurt), UK (London)
    
    0.076
    
    0.63
    
    Indonesia (Jakarta)
    
    0.08
    
    0.67
    
    South Korea (Seoul), Malaysia (Kuala Lumpur), Philippines (Manila), Thailand (Bangkok)
    
    0.076
    
    0.63
    
    Singapore
    
    0.08
    
    0.67
    
    China (Hong Kong)
    
    0.118
    
    0.98
    
    Japan (Tokyo)
    
    0.12
    
    1.00
    
    the Chinese mainland
    
    0.31
    
    2.58
    
    UAE (Dubai)
    
    0.299
    
    2.49
    
    US (Virginia)
    
    US (Silicon Valley)
    
    0.076
    
    0.63
    
    Germany (Frankfurt), UK (London)
    
    0.076
    
    0.63
    
    Indonesia (Jakarta)
    
    0.08
    
    0.67
    
    South Korea (Seoul), Malaysia (Kuala Lumpur), Philippines (Manila), Thailand (Bangkok)
    
    0.076
    
    0.63
    
    Singapore
    
    0.08
    
    0.67
    
    China (Hong Kong)
    
    0.118
    
    0.98
    
    Japan (Tokyo)
    
    0.12
    
    1.00
    
    the Chinese mainland
    
    0.31
    
    2.58
    
    UAE (Dubai)
    
    0.299
    
    2.49
    
    Germany (Frankfurt)
    
    US (Silicon Valley), US (Virginia), UK (London)
    
    0.076
    
    0.63
    
    Indonesia (Jakarta)
    
    0.08
    
    0.67
    
    South Korea (Seoul), Malaysia (Kuala Lumpur), Philippines (Manila), Thailand (Bangkok)
    
    0.076
    
    0.63
    
    Singapore
    
    0.08
    
    0.67
    
    China (Hong Kong)
    
    0.118
    
    0.98
    
    Japan (Tokyo)
    
    0.12
    
    1.00
    
    the Chinese mainland
    
    0.28
    
    2.33
    
    UAE (Dubai)
    
    0.299
    
    2.49
    
    UK (London)
    
    US (Silicon Valley), US (Virginia), Germany (Frankfurt)
    
    0.076
    
    0.63
    
    Indonesia (Jakarta)
    
    0.08
    
    0.67
    
    South Korea (Seoul), Malaysia (Kuala Lumpur), Philippines (Manila), Thailand (Bangkok)
    
    0.076
    
    0.63
    
    Singapore
    
    0.08
    
    0.67
    
    China (Hong Kong)
    
    0.118
    
    0.98
    
    Japan (Tokyo)
    
    0.12
    
    1.00
    
    the Chinese mainland
    
    0.19
    
    2.33
    
    UAE (Dubai)
    
    0.299
    
    2.49
    
    UAE (Dubai)
    
    the Chinese mainland
    
    1.53
    
    12.75
    
    China (Hong Kong), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), Japan (Tokyo), South Korea (Seoul), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok)
    
    0.299
    
    2.49
    
-   Cross-region backup network fees for RDS MySQL (disk) instances.
    
    **Note**
    
    -   RDS MySQL (disk) instances use the exclusive mode by default. You can [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to use the general mode ([Click to view the fees for the general mode](#bd1ec9db84qus)).
        
    -   Only RDS MySQL (disk) instances support the exclusive mode.
        
        If you require high performance for cross-region backup dumps, we recommend that you use the exclusive mode. Compared with the general mode, which is the default for instances, the exclusive mode provides a higher **scheduling priority** and a higher **bandwidth cap** at a higher price.
        
    
    **Source region**
    
    **Destination region**
    
    **Network traffic fees (USD/GB)**
    
    **Network plan offset factor**
    
    the Chinese mainland
    
    the Chinese mainland
    
    0.075
    
    0.625
    
    China (Hong Kong)
    
    0.55
    
    4.625
    
    Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), UAE (Dubai)
    
    0.55
    
    4.625
    
    China (Hong Kong)
    
    the Chinese mainland
    
    0.55
    
    4.625
    
    Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), UAE (Dubai)
    
    0.93
    
    8
    
    Thailand (Bangkok)
    
    the Chinese mainland
    
    0.55
    
    4.625
    
    China (Hong Kong)
    
    0.93
    
    8
    
    South Korea (Seoul), Philippines (Manila), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), UAE (Dubai)
    
    0.93
    
    8
    
    South Korea (Seoul)
    
    the Chinese mainland
    
    0.55
    
    4.625
    
    China (Hong Kong)
    
    0.93
    
    8
    
    Thailand (Bangkok), Philippines (Manila), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), UAE (Dubai)
    
    0.93
    
    8
    
    Philippines (Manila)
    
    the Chinese mainland
    
    0.55
    
    4.625
    
    China (Hong Kong)
    
    0.93
    
    8
    
    Thailand (Bangkok), South Korea (Seoul), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), UAE (Dubai)
    
    0.93
    
    8
    
    Japan (Tokyo)
    
    the Chinese mainland
    
    0.55
    
    4.625
    
    China (Hong Kong)
    
    0.93
    
    8
    
    Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), UAE (Dubai)
    
    0.93
    
    8
    
    Singapore
    
    the Chinese mainland
    
    0.55
    
    4.625
    
    China (Hong Kong)
    
    0.93
    
    8
    
    Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), Japan (Tokyo), Malaysia (Kuala Lumpur), Indonesia (Jakarta), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), UAE (Dubai)
    
    0.93
    
    8
    
    Malaysia (Kuala Lumpur)
    
    the Chinese mainland
    
    0.55
    
    4.625
    
    China (Hong Kong)
    
    0.93
    
    8
    
    Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), Japan (Tokyo), Singapore, Indonesia (Jakarta), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), UAE (Dubai)
    
    0.93
    
    8
    
    Indonesia (Jakarta)
    
    the Chinese mainland
    
    0.55
    
    4.625
    
    China (Hong Kong)
    
    0.93
    
    8
    
    Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), Japan (Tokyo), Singapore, US (Silicon Valley), US (Virginia), Malaysia (Kuala Lumpur), Germany (Frankfurt), UK (London), UAE (Dubai)
    
    0.93
    
    8
    
    US (Silicon Valley)
    
    the Chinese mainland
    
    0.55
    
    4.625
    
    China (Hong Kong)
    
    0.93
    
    8
    
    US (Virginia)
    
    0.21
    
    1.875
    
    Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Germany (Frankfurt), UK (London), UAE (Dubai)
    
    0.93
    
    8
    
    US (Virginia)
    
    the Chinese mainland
    
    0.55
    
    4.625
    
    China (Hong Kong)
    
    0.93
    
    8
    
    US (Silicon Valley)
    
    0.21
    
    1.875
    
    Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Germany (Frankfurt), UK (London), UAE (Dubai)
    
    0.93
    
    8
    
    Germany (Frankfurt)
    
    the Chinese mainland
    
    0.55
    
    4.625
    
    China (Hong Kong)
    
    0.93
    
    8
    
    Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), UK (London), UAE (Dubai)
    
    0.93
    
    8
    
    UK (London)
    
    the Chinese mainland
    
    0.55
    
    4.625
    
    China (Hong Kong)
    
    0.93
    
    8
    
    Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UAE (Dubai)
    
    0.93
    
    8
    
    UAE (Dubai)
    
    the Chinese mainland
    
    0.55
    
    4.625
    
    China (Hong Kong)
    
    0.93
    
    8
    
    Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London)
    
    0.93
    
    8
    

**References**

-   [Cross-region backup for RDS MySQL](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance#concept-405443)
    
-   [Cross-region backup for RDS SQL Server](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance#concept-405443)
    
-   [Cross-region backup for RDS PostgreSQL](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2054022)
    
-   [Cross-region backup for PolarDB for MySQL](/help/en/polardb/polardb-for-mysql/user-guide/configure-backup-settings#section-imu-z04-zp9)
    
-   [Cross-region backup for PolarDB for PostgreSQL](/help/en/polardb/polardb-for-oracle/configure-a-backup-policy)
    
-   [Cross-region backup for MongoDB](/help/en/mongodb/user-guide/cross-region-backup)
    

### Network fees for downloading backup sets

-   **Download over an internal network**: No fees are charged for downloading regular backup sets and cross-region backup sets over an internal network.
    
-   **Download over the internet**: A free quota of 500 GB per instance per month is provided. If you exceed the free quota, you are charged for the data that you download. Bills are generated on a daily basis. The following tables list the unit prices. You can also view the bills in [Billing Details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance?month=2022-05&statisticCycle=MONTHLY_SUMMARY).
    
    **Source region**
    
    **Network traffic fees (USD/GB)**
    
    **Offset factor**
    
    the Chinese mainland
    
    0.125
    
    1
    
    -   China (Hong Kong)
        
    -   Other regions outside China
        
    
    0.15
    
    1.25
    
    **Note**
    
    -   To view the size of data downloaded from public backups, go to the [RDS Instances](https://rds.console.alibabacloud.com/rdsList/cn-zhangjiakou/basic) page, click the instance ID, and then view **Backup Downloads** on the **Basic Information** page in the **Instance Resources** section.
        
    -   The free quota for downloads over the internet is calculated on a calendar month basis. The quota takes effect on the first day of each month and is cleared at the end of the month.
        
    -   No network traffic fees are charged for failed download tasks.
        
    

**References**

-   [Download an RDS MySQL backup set](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-yjb-pn4-ydb)
    
-   [Download an RDS SQL Server backup set](/help/en/rds/apsaradb-rds-for-sql-server/download-the-data-backup-files-and-log-backup-files-of-an-apsaradb-rds-for-sql-server-instance#concept-yjb-pn4-ydb)
    
-   [Download an RDS PostgreSQL backup set](/help/en/rds/apsaradb-rds-for-postgresql/download-the-backup-files-of-an-apsaradb-rds-for-postgresql-instance#concept-yjb-pn4-ydb)
    

## Use network plans (subscription)

If you have a large amount of data, we recommend that you purchase a DBS network plan to offset the network fees generated by cross-region backups and backup set downloads. A network plan is valid for one year. The larger the capacity of the DBS network plan that you purchase, the greater the discount . If your network traffic exceeds the quota of your network plan, the excess traffic is billed on a pay-as-you-go basis.

**Important**

The prices in this topic are for reference only. The actual prices are displayed on the [buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=cbs_network_dp_intl).

**Network plan specifications**

**One year (USD)**

1 TB

102

5 TB

448

10 TB

832

50 TB

3,520

100 TB

6,400

500 TB

25,600

## **Offset objects**

**Offset object**

**Description**

Network usage for cross-region backups

DBS network plans are available in all regions. After you purchase a network plan, you can use it to offset the network fees for cross-region backups of RDS MySQL, RDS PostgreSQL, RDS SQL Server, PolarDB for MySQL, PolarDB for PostgreSQL, and MongoDB instances in different regions. The offset is calculated based on different offset factors for different regions.

Network usage for downloading backup sets

DBS network plans are available in all regions. After you purchase a network plan, you can use it to offset the network fees that are generated when you download backup sets of RDS MySQL, RDS PostgreSQL, and RDS SQL Server instances in different regions. The offset is calculated based on different offset factors for different regions.

## **Offset rules**

**Rule item**

**Rule description**

Offset method

-   The total network usage for cross-region backups and backup set downloads of an instance is calculated on a daily basis. The usage is offset from the capacity of your network plan based on the offset factor. If the data volume exceeds the capacity of the network plan, the excess usage is billed on a pay-as-you-go basis.
    
-   The actual usage is offset from the total capacity of the network plan.
    
    For example, you purchase a 1 TB storage plan with a subscription duration of one year. You have a total of 1 TB of network plan capacity to use for offsets within the year. For a detailed example, see [Example of network plan offset](/help/en/dbs/product-overview/network-traffic-fees#f85c6ce0383cm).
    

Offset order

The offset is applied based on the billing time of the instance bills. The bill that is generated first is offset first.

## **Example of network plan offset**

A user purchases a 1 TB network plan. The user has an RDS MySQL instance in the China (Hangzhou) region with 1,000 GB of cross-region backup usage and 800 GB of backup set download usage. **In this example, the bill for the cross-region backup is generated first.** The network plan offset is calculated as follows:

1.  The total traffic that can be offset by the network plan is calculated as follows: 1 TB / 0.625 = 1.6 TB (1638.4 GB)
    
2.  The network plan first offsets the cross-region backup usage of the instance. After the offset, the remaining capacity of the network plan is: (1638.4 GB - 1000 GB) × 0.625 = 399 GB
    
3.  The backup set download usage that can be offset by the remaining capacity of the network plan is 399 GB (399 GB / 1). This is not enough to offset the 800 GB of backup set download usage. Therefore, the network plan is used to offset 399 GB of this usage.
    
4.  The remaining backup set download usage of 800 GB - 399 GB = 401 GB is billed on a pay-as-you-go basis.
    

**Note**

For an instance in the China (Hangzhou) region, the offset factor for cross-region backups is 0.625, and the offset factor for backup set downloads is 1.
