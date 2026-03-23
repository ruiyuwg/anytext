This topic describes how to use SQL Server Management Studio (SSMS) to migrate data from an SQL Server database on another cloud platform or a self-managed SQL Server database to an Alibaba Cloud RDS for SQL Server instance. In this topic, Azure SQL Database is used as an example.

## Prerequisites

-   An [RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance#concept-pv1-n5z-vdb) that has a **larger** storage capacity than the source instance is created. The RDS instance meets the following requirements:
    
    **Note**
    
    We recommend that the storage capacity of the destination instance be 1.2 times the storage capacity of the source instance. If you have an RDS for SQL Server instance but the storage capacity of the instance is insufficient, you must [expand the storage capacity](/help/en/rds/apsaradb-rds-for-sql-server/change-the-specifications-of-an-apsaradb-rds-for-sql-server-instance) at the earliest opportunity.
    
    -   The RDS instance runs RDS Basic Edition, RDS High-availability Edition, or RDS Cluster Edition. If your RDS instance runs RDS High-availability Edition, make sure that the instance runs SQL Server 2012 or later.
        
    -   The RDS instance belongs to the general-purpose or dedicated instance family. The shared instance family is not supported.
        
    -   The RDS uses the subscription or pay-as-you-go billing method. Serverless instances are not supported.
        
    -   The RDS instance resides in a virtual private cloud (VPC). For more information about how to change the network type of an RDS instance, see [Change the network type](/help/en/rds/apsaradb-rds-for-sql-server/change-the-network-type-of-an-apsaradb-rds-for-sql-server-instance#concept-zqv-gxx-wdb).
        
    -   The creation time of the RDS instance meets the following requirements:
        
        -   If the RDS instance runs RDS High-availability Edition or RDS Cluster Edition, the instance is created on or after January 01, 2021.
            
        -   If the RDS instance runs RDS Basic Edition, the instance is created on or after September 02, 2022.
            
        
        **Note**
        
        You can view the **Creation Time** parameter of an RDS instance in the ****Status**** section of the **Basic Information** page in the ApsaraDB RDS console.
        
-   [SSMS](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?spm=a2c63.p38356.879954.7.15df54088yM5PK&view=sql-server-2017) is installed on your computer or [ECS instance](/help/en/ecs/getting-started/create-and-manage-an-ecs-instance-by-using-the-ecs-console). The ECS instance must reside in a virtual private cloud (VPC), run a Windows Server image, and be assigned a public IP address.
    
    **Note**
    
    In this example, `SSMS 19.1` is used to describe how to migrate the data to the cloud. The actual procedure varies based on multiple factors, such as the installation location, version, and settings of SSMS.
    

## Usage notes

-   To prevent data inconsistency, you must stop data writes to the source instance. The period of time during which data cannot be written to the source instance varies based on the amount of data that you want to migrate and the actual operation time.
    
-   The speed of exporting data varies based on the specifications of the source instance.
    

## Preparations

-   Enable access to Azure SQL Database over the Internet. Configure your firewall to allow the public IP address of the ECS instance or the IP address of your on-premises device to access Azure services and resources.
    
    **Note**
    
    For more information, see official Azure documentation or contact the technical support of Azure.
    
-   Make sure that the constraints and views of the source instance do not cause exporting failures.
    
-   Log on to the RDS instance by using an **Alibaba Cloud account** and [create a system admin account](/help/en/rds/apsaradb-rds-for-sql-server/create-a-system-admin-account-for-an-apsaradb-rds-for-sql-server-instance).
    
-   Execute the `SELECT name, compatibility_level FROM sys.databases;` statement on both the source and destination instances to check whether the destination instance is [compatible with the source instance](https://learn.microsoft.com/en-us/sql/t-sql/statements/alter-database-transact-sql-compatibility-level?view=sql-server-ver16).
    
-   [Configure a whitelist](/help/en/rds/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-sql-server-instance-1) for the RDS instance to allow the ECS instance or on-premises device on which the client is deployed to connect to the RDS instance.
    
    **Note**
    
    -   If you want to connect an ECS instance to the RDS instance over an internal network, make sure that these instances reside in the same region and the same VPC and the private IP address of the ECS instance is added to an IP address whitelist of the RDS instance.
        
    -   If you want to connect an on-premises device to the RDS instance, make sure that the public IP address of the on-premises device is added to an IP address whitelist of the RDS instance.
        
    

## **1\. Export data from Azure SQL Database**

Stop writing data to Azure SQL Database and export the data in the database.

1.  [Use SSMS to connect to Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/connect-query-ssms?view=azuresql#get-server-connection-information).
    
2.  Go to the page for exporting data.
    
    1.  In **Object Explorer**, expand **Databases**.
        
    2.  Right-click the required database.
        
    3.  Choose **Tasks** > **Export Data-tier Application**.
        
    
    **Note**
    
    For more information about data exporting, see [Export a Data-tier Application](https://learn.microsoft.com/en-us/sql/relational-databases/data-tier-applications/export-a-data-tier-application?view=sql-server-ver16).
    
3.  Click **Next**.
    
4.  Select the objects that you want to export.
    
    1.  On the **Settings** tab of the **Export Settings** page, select **Save To Local Disk**.
        
    2.  Click **Browse** and select a file save path and file name.
        
    3.  On the **Advanced** tab, select the tables that you want to export.
        
        **Note**
        
        If you need to select other objects, such as triggers and stored procedures, right-click the required database in **Object Explorer** and choose **Tasks** > **Generate Scripts**.
        
    4.  Click **Next**.
        
5.  Click **Finish**.
    
6.  After the data is exported, click **Close**.
    

## **2\. Import data into the RDS instance**

Import the exported data into the RDS for SQL Server instance.

1.  [Use SSMS to connect to the RDS instance](/help/en/rds/apsaradb-rds-for-sql-server/connection-instance).
    
    1.  Open SSMS.
        
    2.  In the **Connect To Server** dialog box, configure the following parameters.
        
        **Parameter**
        
        **Description**
        
        **Server Type**
        
        Select **Database Engine**.
        
        **Server Name**
        
        Enter the **Internal Endpoint** or **Public Endpoint** of the RDS for SQL Server instance. For more information about how to obtain the endpoint, see [View and change the endpoints and port numbers](/help/en/rds/apsaradb-rds-for-sql-server/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-sql-server-instance).
        
        **Authentication**
        
        Select **SQL Server Authentication**.
        
        **Login**
        
        Enter the username of the system admin account.
        
        **Password**
        
        Enter the password of the system admin account.
        
    3.  Click **Connect**.
        
2.  In **Object Explorer**, right-click **Databases**.
    
3.  Select **Import Data-tier Application**.
    
4.  Click **Next**.
    
5.  Configure **Import Settings**.
    
    1.  Select **Import From Local Disk**.
        
    2.  Click **Browse** and select the **.bacpac** file exported from Azure SQL Database.
        
    3.  Click **Next**.
        
6.  Configure **Database Settings**.
    
    1.  In the **New Database Name** field, enter the name of the database on the RDS for SQL Server instance. The database corresponds to the source database.
        
        **Important**
        
        -   We recommend that you use the same name as the name of the database in Azure SQL Database. If you do not use the same name, some features may not work as expected after your workloads are switched over to the RDS for SQL Server instance.
            
        -   If the database name you entered exists in the RDS for SQL Server instance, the data import may fail or the data may be inconsistent.
            
        
    2.  In the **SQL Server Settings** section, change the values of **Data File Path** and **Log File Path** to **E:\\SQLDATA\\DATA**.
        
    3.  Click **Next**.
        
7.  Click **Finish**.
    
8.  After the data is imported, click **Close**.
    

## **3\. Verify data consistency**

After the data is imported, execute the required statements on the source and destination databases to verify data consistency. If the return results for the source and destination databases are the same, the data is consistent.

-   Query the number of data rows in the database. The sum of data rows in all business tables is returned.
    
    **Important**
    
    Make sure that the source table data and snapshot data are not changed during data migration. Otherwise, the number of data rows in the source database is inconsistent with that in the destination database.
    
    ```
    USE <database name>;
    
    SELECT SUM(b.rows) AS 'RowCount' 
    FROM sysobjects AS a INNER JOIN
    sysindexes AS b ON a.id = b.id
    WHERE (a.type = 'u') AND (b.indid IN (0, 1))
    ```
    
-   Query the data size. The percentage of the storage occupied by data files to the total storage capacity is returned.
    
    ```
    USE <database name>;
    
    SELECT a.name [File name]
      ,cast(a.[size]*1.0/128 as decimal(12,1)) AS [Specified file size (MB)]
      ,CAST( fileproperty(s.name,'SpaceUsed')/(8*16.0) AS DECIMAL(12,1)) AS [Storage occupied by the file (MB)]
      ,CAST( (fileproperty(s.name,'SpaceUsed')/(8*16.0))/(s.size/(8*16.0))*100.0  AS DECIMAL(12,1)) AS [Percentage of the storage occupied by the file to the total storage capacity]
      ,CASE WHEN A.growth =0 THEN 'Fixed file size' ELSE 'Increment at which the storage that is allocated to the file increases' end [Increase mode]
      ,CASE WHEN A.growth > 0 AND is_percent_growth = 0 THEN 'Fixed increment'
        WHEN A.growth > 0 AND is_percent_growth = 1 THEN 'Increment represented by an integer percentage'
        ELSE 'Fixed file size' END AS [Increase mode]
      ,CASE WHEN A.growth > 0 AND is_percent_growth = 0 THEN cast(cast(a.growth*1.0/128as decimal(12,0)) AS VARCHAR)+'MB'
        WHEN A.growth > 0 AND is_percent_growth = 1 THEN cast(cast(a.growth AS decimal(12,0)) AS VARCHAR)+'%'
        ELSE 'Fixed file size' end AS [Increment (% or MB)]
      ,a.physical_name AS [File directory]
      ,a.type_desc AS [File type]
    FROM sys.database_files  a 
    INNER JOIN sys.sysfiles AS s ON a.[file_id]=s.fileid 
    LEFT JOIN sys.dm_db_file_space_usage b ON a.[file_id]=b.[file_id] 
    ORDER BY a.[type]
    ```
    

After data consistency verification is complete, you can switch your workloads to the RDS for SQL Server instance and test whether features run as expected.
