This topic describes the RDS editions and the scenarios of each RDS edition. This topic also describes how to view and change the RDS edition of an RDS instance.

## **RDS editions** of ApsaraDB RDS for MySQL

**RDS edition**

**Description**

**Scenario**

[RDS Basic Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-basic-edition#concept-nyq-cvw-5db)

-   The database system consists of only a primary RDS instance. Computing is separated from storage.
    
-   Read-only RDS instances are not supported.
    

-   Personal learning
    
-   Microsites
    
-   Development and testing environments for small and medium-sized enterprises
    

[RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-high-availability-edition#concept-1443745)

-   The database system consists of a primary RDS instance and a secondary RDS instance. These instances work in HA mode and support automatic failover. The secondary RDS instance cannot be accessed.
    
-   You can create read-only RDS instances to increase the read capability of your database system. For more information, see [Create a read-only ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-a-read-only-apsaradb-rds-for-mysql-instance#concept-ghp-wq5-vdb).
    

-   Production databases for large and medium-sized enterprises
    
-   Databases that are used in industries such as the Internet, IoT, e-commerce, logistics, and gaming
    

[RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-cluster-edition#concept-vcs-h1c-5fb)

-   The database system consists of a primary RDS instance and multiple secondary RDS instances. These instances work in HA mode and support automatic failover. The secondary RDS instances can be accessed. This increases the read capability of your database system.
    
-   You can create multiple secondary RDS instances to increase the read capability of your database system.
    

-   Production databases for large and medium-sized enterprises
    
-   Databases that are used in industries such as Internet-based new retail and automobile manufacturing, and databases that are used for Enterprise Resource Planning (ERP) systems
    

## **Change of the RDS edition**

-   [Upgrade from RDS Basic Edition to RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/upgrade-an-apsaradb-rds-for-mysql-instance-from-basic-edition-to-high-availability-edition#task-2326701): This applies if your RDS instance runs MySQL 5.7 or MySQL 8.0.
    
-   [Upgrade from RDS High-availability Edition to RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/upgrade-an-apsaradb-rds-for-mysql-instance-from-rds-high-availability-edition-to-rds-cluster-edition#main-2272489): This applies if your RDS instance runs MySQL 5.7 or MySQL 8.0 and uses cloud disks.
    

**Note**

You cannot change the RDS edition of an RDS instance that does not meet the preceding requirements. If you want to change the RDS edition of the RDS instance, you must create an RDS instance that runs the specified RDS edition and migrate the data of the original RDS instance to the new RDS instance. For more information, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance) and [Migrate data between ApsaraDB RDS for MySQL instances](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-between-apsaradb-rds-for-mysql-instances).

## **Check on the RDS edition**

You can log on to the ApsaraDB RDS console, find the RDS instance, and then go to the **Basic Information** page to view the RDS edition of the RDS instance.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6234867961/p725879.png)

## **Supported instance types**

-   For more information, see [Instance types for standard primary ApsaraDB RDS for MySQL instances (original x86 architecture)](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types).
    
-   For more information, see [Instance types for economy primary ApsaraDB RDS for MySQL instances (original ARM architecture)](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types-5).
    

## **Supported features**

For more information, see [Features](/help/en/rds/apsaradb-rds-for-mysql/features).

## **Create an RDS instance**

For more information, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb).

## **RDS editions of ApsaraDB RDS for PostgreSQL**

**RDS edition**

**Description**

**Scenario**

[RDS Basic Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-basic-edition#concept-nyq-cvw-5db)

-   The database system consists of only a primary RDS instance. Computing is separated from storage.
    
-   Read-only RDS instances are not supported.
    

-   Personal learning
    
-   Microsites
    
-   Development and testing environments for small and medium-sized enterprises
    

[RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-high-availability-edition#concept-1443745)

-   The database system consists of a primary RDS instance and a secondary RDS instance. These instances work in high availability (HA) mode and support automatic failover. The secondary RDS instance cannot be accessed.
    
-   You can create read-only RDS instances to increase the read capability of your database system. For more information, see [Create a read-only ApsaraDB RDS for PostgreSQL instance](/help/en/rds/overview-of-read-only-apsaradb-rds-for-postgresql-instances).
    

-   Production databases for large and medium-sized enterprises
    
-   Databases that are used in industries such as the Internet, IoT, e-commerce, logistics, and gaming
    

## **Change of the RDS edition**

You can upgrade an RDS instance that runs PostgreSQL 10 or later from RDS Basic Edition to RDS High-availability Edition. For more information, see [Upgrade an ApsaraDB RDS for PostgreSQL instance from RDS Basic Edition to RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-an-apsaradb-rds-for-postgresql-instance-from-basic-edition-to-high-availability-edition#task-1999514).

**Note**

You cannot change the RDS edition of an RDS instance that does not meet the preceding requirements. If you want to change the RDS edition of the RDS instance, you must create an RDS instance that runs the specified RDS edition and migrate the data of the original RDS instance to the new RDS instance. For more information, see [Create an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-an-apsaradb-rds-for-postgresql-instance) and [Migrate data between ApsaraDB RDS for PostgreSQL instances](/help/en/rds/apsaradb-rds-for-postgresql/use-dts-to-migrate-data-between-apsaradb-rds-for-postgresql-instances).

## **Check on the RDS edition**

You can log on to the ApsaraDB RDS console, find the RDS instance, and then go to the **Basic Information** page to view the edition of the RDS instance.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6234867961/p725883.png)

## **Supported instance types**

For more information, see [Primary ApsaraDB RDS for PostgreSQL instance types](/help/en/rds/apsaradb-rds-for-postgresql/primary-apsaradb-rds-for-postgresql-instance-types).

## **Supported features**

For more information, see [Features](/help/en/rds/apsaradb-rds-for-postgresql/features-of-apsaradb-rds-for-postgresql).

## **Create an RDS instance**

For more information, see [Create an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-an-apsaradb-rds-for-postgresql-instance#concept-kzn-qcg-wdb).

## Description of RDS editions of ApsaraDB RDS for SQL Server

**RDS edition**

**Description**

**Scenario**

[RDS Basic Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-basic-edition#concept-nyq-cvw-5db)

-   The database system consists of only one primary RDS instance. Computing is separated from storage.
    
-   Read-only RDS instances are not supported.
    

-   Personal learning
    
-   Microsites
    
-   Development and testing environments for small and medium-sized enterprises
    

[RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-high-availability-edition#concept-1443745)

-   The database system consists of a primary RDS instance and a secondary RDS instance. These instances work in high availability (HA) mode and support automatic failover. The secondary RDS instance cannot be accessed.
    
-   Read-only RDS instances are not supported.
    

-   Production databases for large and medium-sized enterprises
    
-   Databases that are used in industries such as the Internet, IoT, e-commerce, logistics, and gaming
    

[RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-cluster-edition#concept-vcs-h1c-5fb)

-   The database system consists of a primary RDS instance and a secondary RDS instance. These instances work in HA mode and support automatic failover. The secondary RDS instances can be accessed. This increases the read capability of your database system.
    
-   You can create up to seven read-only RDS instances to improve the read capability. However, read-only RDS instances do not participate in the primary instance election or workload switchover. For more information, see [Create a read-only ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-a-read-only-apsaradb-rds-for-sql-server-instance#concept-ghp-wq5-vdb).
    

-   Production databases for large and medium-sized enterprises
    
-   Databases that are used in industries such as Internet-based new retail and automobile manufacturing, and databases that are used for ERP systems
    

## **Change the RDS edition of an RDS instance**

-   If your RDS instance runs one of the following database engine versions, you can upgrade the RDS instance from RDS Basic Edition to RDS High-availability Edition. For more information, see [Upgrade the major engine version](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-the-major-engine-version-and-rds-edition-of-an-apsaradb-rds-for-sql-server-instance).
    
    -   SQL Server 2022 SE, SQL Server 2019 SE, SQL Server 2017 SE, SQL Server 2016 SE, and SQL Server 2014 SE
        
    -   SQL Server 2022 Web, SQL Server 2019 Web, SQL Server 2017 Web, SQL Server 2016 Web, and SQL Server 2012 Web
        
    -   SQL Server 2016 EE and SQL Server 2012 EE Basic
        
-   If your RDS instance runs one of the following database engine versions, you can upgrade the RDS instance from RDS High-availability Edition to RDS Cluster Edition. For more information, see [Upgrade the major engine version](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-the-major-engine-version-and-rds-edition-of-an-apsaradb-rds-for-sql-server-instance#concept-1426110).
    
    -   SQL Server 2022 SE, SQL Server 2019 SE, SQL Server 2017 SE, SQL Server 2016 SE, SQL Server 2014 SE, and SQL Server 2012 SE
        
    -   SQL Server 2016 EE, SQL Server 2014 EE, and SQL Server 2012 EE
        

**Note**

You cannot change the RDS edition of an RDS instance that does not meet the requirements in the preceding list. If you want to change the RDS edition of the RDS instance, you must create an RDS instance that runs the specified RDS edition and then migrate the data of the original RDS instance to the new RDS instance. For more information, see [Create an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance) and [Migrate data between ApsaraDB RDS for PostgreSQL instances](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-between-apsaradb-rds-for-sql-server-instances).

## **View the RDS edition of an RDS instance**

You can log on to the ApsaraDB RDS console, find the RDS instance, and then go to the **Basic Information** page to view the edition of the RDS instance.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6234867961/p725884.png)

## **Instance types supported by various RDS editions**

For more information, see [Instance types for primary ApsaraDB RDS for SQL Server instances](/help/en/rds/apsaradb-rds-for-sql-server/primary-apsaradb-rds-for-sql-server-instance-types).

## **Features supported by various RDS editions**

For more information, see [Features](/help/en/rds/apsaradb-rds-for-sql-server/features).

## **Create an RDS instance**

For more information, see [Create an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance#concept-pv1-n5z-vdb).

## RDS editions of ApsaraDB RDS for MariaDB

**RDS edition**

**Description**

**Scenario**

[RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-high-availability-edition#concept-1443745)

The database system consists of a primary RDS instance and a secondary RDS instance. These RDS instances work in high availability (HA) mode. Dual-zone disaster recovery is supported. The secondary RDS instance cannot be accessed.

-   Production databases for large and medium-sized enterprises
    
-   Databases that are used in industries such as the Internet, IoT, e-commerce, logistics, and gaming
    

## **Check on the RDS edition**

You can log on to the ApsaraDB RDS console, find the RDS instance, and then go to the **Basic Information** page to view the edition of the RDS instance.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6234867961/p725887.png)

## **Supported instance types**

For more information, see [Instance types](/help/en/rds/apsaradb-rds-for-mariadb/instance-types).

## **Supported features**

For more information, see [Features](/help/en/rds/apsaradb-rds-for-mariadb/features-1).

## **Create an RDS instance**

For more information, see [Create an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/create-an-apsaradb-rds-for-mariadb-instance#concept-wzp-ncf-vdb).
