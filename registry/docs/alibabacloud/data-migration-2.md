This topic describes the methods that you can use to migrate data among self-managed data centers, third-party clouds, and ApsaraDB RDS with no downtime.

## **Scenarios**

The following table provides links to the documentation that may help you migrate data in different scenarios.

**Scenario**

**References**

Migrate data from a PostgreSQL database in a self-managed data center to an ApsaraDB RDS for PostgreSQL instance

-   [Use pg\_dump and pg\_restore to migrate data from a self-managed PostgreSQL instance to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/migrate-data-from-a-self-managed-postgresql-database-to-an-apsaradb-rds-for-postgresql-instance-by-using-pg-dump-and-pg-restore#concept-qhq-gbw-ydb)
    
-   [Use DTS to migrate data from a self-managed PostgreSQL database to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/migrate-data-from-a-self-managed-postgresql-database-to-an-apsaradb-rds-for-postgresql-instance#task-2117817)
    

Migrate data from a PostgreSQL database on a third-party cloud to an ApsaraDB RDS for PostgreSQL instance

-   [Migrate incremental data from an Amazon RDS for PostgreSQL instance to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/migrate-incremental-data-from-an-amazon-rds-for-postgresql-instance-to-an-apsaradb-rds-for-postgresql-instance#task-2331161)
    
-   [Migrate full data from an Amazon RDS for PostgreSQL instance to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/migrate-full-data-from-an-amazon-rds-for-postgresql-instance-to-an-apsaradb-rds-for-postgresql-instance#concept-u5b-hhq-fhb)
    

Migrate data between ApsaraDB RDS for PostgreSQL instances

-   [Use DTS to migrate data between ApsaraDB RDS for PostgreSQL instances](/help/en/rds/apsaradb-rds-for-postgresql/use-dts-to-migrate-data-between-apsaradb-rds-for-postgresql-instances#task-2218592)
    
-   [Use the cloud migration feature to migrate data between ApsaraDB RDS for PostgreSQL instances](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cloud-migration-feature-to-migrate-data-between-apsaradb-rds-for-postgresql-instances#task-2218593)
    

Migrate data from an ApsaraDB RDS for PostgreSQL instance to an on-premises PostgreSQL database

-   [Use DTS to migrate data between ApsaraDB RDS for PostgreSQL instances](/help/en/rds/apsaradb-rds-for-postgresql/use-dts-to-migrate-data-between-apsaradb-rds-for-postgresql-instances#task-2218592)
    
-   [Use the cloud migration feature to migrate data between ApsaraDB RDS for PostgreSQL instances](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cloud-migration-feature-to-migrate-data-between-apsaradb-rds-for-postgresql-instances#task-2218593)
    

## **Usage notes**

-   Compatibility issues may occur when you migrate data between RDS instances that run different versions of PostgreSQL. Therefore, we recommend that you test your business on the destination RDS for PostgreSQL instance and make sure that your business can normally run on the destination instance before you migrate data.
    
-   Elastic Compute Service (ECS) instances in the classic network will reach end of life (EoL) on February 28, 2025. If your database is deployed on an ECS instance in the classic network, we recommend that you migrate the ECS instance from the classic network to a VPC. For more information about the EoL of ECS instances in the classic network, see [EOL notice for Alibaba Cloud ECS instances in the classic network](/help/en/ecs/end-of-sale-announcement-for-ecs-instances-of-the-classic-network-type). For more information about how to migrate the ECS instance, see [Migrate ECS instances from the classic network to a VPC](/help/en/vpc/migrate-ecs-instances-from-the-classic-network-to-a-vpc).
