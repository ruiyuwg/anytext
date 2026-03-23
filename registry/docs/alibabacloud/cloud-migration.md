ApsaraDB RDS for PostgreSQL provides the cloud migration feature. This feature uses physical streaming replication to accelerate and simplify cloud migration in various business scenarios. You can use this feature to migrate the data of a self-managed PostgreSQL instance that is deployed on an Alibaba Cloud Elastic Compute Service (ECS) instance or in a data center to an ApsaraDB RDS for PostgreSQL instance. You can also use this feature to migrate the data of an RDS instance across regions or accounts by using backup files.

## **Scenarios**

The following table describes the scenarios that are applicable to the cloud migration feature.

**Note**

This feature supports only data migration between RDS for PostgreSQL instances that run the same engine version. To migrate data between instances that run different engine versions, test your business on the destination instance first and then use Data Transmission Service (DTS) to perform the migration. For more information, see [Data migration](/help/en/rds/apsaradb-rds-for-postgresql/data-migration-2/).

**Scenario**

**Source instance**

**Destination instance**

**Migration link**

**References**

Data migration over an internal network

Self-managed PostgreSQL instance that is deployed on an Alibaba Cloud ECS instance

RDS for PostgreSQL instance

VPC

-   If the self-managed PostgreSQL instance is deployed on an Alibaba Cloud ECS instance, the ECS instance and the RDS instance must reside in the same virtual private cloud (VPC). If the ECS instance and the RDS instance reside in different VPCs, you must use Cloud Enterprise Network (CEN) to connect the VPCs. For more information, see [What is CEN?](/help/en/cen/product-overview/what-is-cen/#concept-2090845)
    
-   If the self-managed PostgreSQL instance is deployed in a data center, you must use CEN, VPN Gateway, Express Connect, or Smart Access Gateway (SAG) to connect the data center and the RDS instance over an internal network. For more information,see [What is CEN?](/help/en/cen/product-overview/what-is-cen/#concept-2090845), [What is VPN Gateway?](/help/en/vpn/product-overview/what-is-vpn-gateway#concept-r5s-gzv-wdb), [What is Express Connect?](/help/en/express-connect/product-overview/what-is-express-connect/#concept-ipg-pry-xdb), or [What is SAG?](/help/en/sag/product-overview/what-is-sag#concept-2403019)
    

[Use the cloud migration feature for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cloud-migration-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2152223)

Read capability expansion in the cloud

Use an RDS instance to offload read requests from a self-managed PostgreSQL instance.

Self-managed PostgreSQL instance that is deployed on an Alibaba Cloud ECS instance or in a data center

Disaster recovery in the cloud

Use an RDS instance to run as a hot standby for a self-managed PostgreSQL instance. If the self-managed PostgreSQL instance fails, you can manually switch your workloads from the self-managed PostgreSQL instance to the RDS instance to make sure that your business can handle read and write requests.

Self-managed PostgreSQL instance that is deployed on an Alibaba Cloud ECS instance or in a data center

-   Cross-region migration
    
    Migrate the data of an RDS instance to another RDS instance that resides in a different region.
    
-   Geo-disaster recovery
    
    Add RDS instances that reside in different regions to a group to improve disaster recovery capabilities.
    

RDS for PostgreSQL instance

RDS for PostgreSQL instance that is created within the same Alibaba Cloud account but resides in a different region

VPC

Use [CEN](/help/en/cen/product-overview/what-is-cen/#concept-2090845) to connect the RDS instances over an internal network.

[Migrate data between ApsaraDB RDS for PostgreSQL instances that reside in different regions](/help/en/rds/apsaradb-rds-for-postgresql/migrate-data-between-apsaradb-rds-for-postgresql-instances-that-reside-in-different-regions#task-2159481)

Cross-account migration

Migrate the data of an RDS instance to another RDS instance that is created within a different Alibaba Cloud account.

RDS for PostgreSQL instance

RDS for PostgreSQL instance that is created within a different Alibaba Cloud account

VPC

Use [CEN](/help/en/cen/product-overview/what-is-cen/#concept-2090845) to connect the RDS instances over an internal network.

[Migrate data between ApsaraDB RDS for PostgreSQL instances within different accounts](/help/en/rds/apsaradb-rds-for-postgresql/migrate-data-between-apsaradb-rds-for-postgresql-instances-within-different-accounts#task-2159482)

Data migration from a self-managed PostgreSQL instance that is deployed on an ECS instance in the classic network

**Note**

We recommend that you use the cloud migration feature to migrate the database after you change the network of the ECS instance from the classic network to a VPC. This way, you do not need to configure NAT gateways for the destination RDS for PostgreSQL instance. For more information, see [Use the cloud migration feature for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cloud-migration-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2152223).

Self-managed PostgreSQL instance deployed on an ECS instance in the classic network

RDS for PostgreSQL instance

Internet

[Migrate the data of a PostgreSQL instance that has a public IP address to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/migrate-the-data-of-a-postgresql-instance-that-has-a-public-ip-address-to-an-apsaradb-rds-for-postgresql-instance#main-2347942)

Data migration from a PostgreSQL instance that has a public IP address

Migrate the data of a self-managed PostgreSQL instance that has a public IP address or a PostgreSQL instance of a third-party cloud service provider to an RDS instance.

**Note**

PostgreSQL instances of third-party cloud service providers include self-managed PostgreSQL instances in the cloud or managed PostgreSQL instances, such as Amazon RDS for PostgreSQL, Azure Database for PostgreSQL, and Google Cloud SQL instances.

Self-managed PostgreSQL instance that has a public IP address or PostgreSQL instance provided by a third-party cloud service provider
