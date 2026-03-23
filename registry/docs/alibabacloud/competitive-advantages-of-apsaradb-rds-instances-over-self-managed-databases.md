ApsaraDB RDS provides highly available, reliable, secure, and scalable managed databases that are comparable to commercial databases in terms of performance. The managed databases cost less than self-managed databases that are deployed on Elastic Compute Service (ECS) instances and third-party database servers. This reduces the deployment and maintenance costs.

## **Advantages of ApsaraDB RDS instances over self-managed databases**

## Advantages of ApsaraDB RDS for MySQL instances over self-managed MySQL databases

**Item**

**ApsaraDB RDS for MySQL instance**

**Self-managed database on an ECS instance**

**Self-managed database on a third-party database server**

Cost-effectiveness

-   Scalable resources are provided.
    
-   AliSQL is an independent MySQL branch that is developed by Alibaba Cloud. AliSQL provides features that are similar to the features of MySQL Enterprise Edition to improve user experience. For more information, see [Overview of AliSQL features](/help/en/rds/apsaradb-rds-for-mysql/overview-of-alisql-features#concept-1663672).
    
-   A free quota on backup storage is provided. The free quota is up to twice the purchased storage capacity based on the instance configuration. For more information, see [Backup storage pricing for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance#concept-ipg-lm4-ydb).
    
-   Internet traffic is free of charge.
    
-   User-provided domain names are supported free of charge.
    
-   Updates to ApsaraDB RDS for MySQL are released by Alibaba Cloud to keep pace with the latest MySQL releases.
    

-   Scalable resources are provided.
    
-   Open source MySQL is used. No optimization is provided.
    
-   You are charged for the backup storage that you use.
    
-   You are charged for the Internet traffic that you consume.
    

-   The initial investment cost is high.
    
-   Open source MySQL is used. No optimization is provided.
    
-   You must allocate independent backup resources. This requires high costs.
    
-   You are charged for the Internet traffic that you consume and the domain names that you use. The domain names are charged at high prices.
    

Availability

-   In RDS Basic Edition, your database system requires approximately 15 minutes to complete a failover.
    
-   In RDS High-availability Edition or RDS Cluster Edition, your database system runs in a proprietary high-availability architecture of Alibaba Cloud. This architecture allows your database system to complete a failover within 30 seconds.
    
-   You can create read-only RDS instances to balance loads in your database system. For more information, see [Overview of read-only ApsaraDB RDS for MySQL instances](/help/en/rds/overview-of-read-only-apsaradb-rds-for-mysql-instances#concept-cst-z45-vdb).
    
-   Read/write splitting allows your database system to distribute read and write requests by using a read/write splitting endpoint. For more information, see [Enable the proxy terminal feature for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/enable-the-proxy-terminal-feature-for-an-apsaradb-rds-for-mysql-instance#concept-ptl-fl4-wdb).
    
-   Analytic RDS instances that can be used to analyze data are in development.
    

-   In the basic edition, your databases require approximately 30 minutes to complete a failover.
    
-   You must purchase additional software or hardware to build a high-availability architecture.
    
-   You must configure or purchase additional software or hardware to build a load balancing architecture.
    
-   If you want to analyze data, you must create analytic databases. The process of creating analytic databases is time-consuming and requires high costs.
    

-   Your databases are standalone. If a database server breaks down, repairs can take hours to weeks.
    
-   You must purchase additional software or hardware to build a high-availability architecture.
    
-   You must configure or purchase additional software or hardware to build a load balancing architecture.
    
-   If you want to analyze data, you must create analytic databases. The process of creating analytic databases is time-consuming and requires high costs.
    

Reliability

-   Automated replication of data between primary and secondary RDS instances, data backups, and log backups are supported to ensure high data reliability.
    
-   RDS Enterprise Edition supports a recovery point objective (RPO) of 0 and a recovery time objective (RTO) of approximately 1 minute when this edition is used with MySQL 5.7 or MySQL 8.0.
    

-   Your databases are highly available only when they are deployed in an optimal high-availability architecture.
    
-   To ensure an RPO of 0, you must purchase independent R&D services. This requires high costs.
    

-   Data reliability is moderate and varies based on the corruption probability of individual disks.
    
-   To ensure an RPO of 0, you must purchase independent R&D services. This requires high costs.
    

Usability

-   An automated backup and restoration system is provided to support point in time recovery (PITR) and database-level backup and restoration. In addition, streaming backups are supported to minimize the impacts on performance. For more information, see [Enable automatic backups for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance#concept-l1m-xgn-ydb).
    
-   An automated monitoring and alerting system allows you to monitor all supported metrics at the instance and database levels and view monitoring information that is collected over a time range of a few seconds. If the value of a metric exceeds the specified threshold, ApsaraDB RDS sends you an alert by text message, email, or DingTalk. In addition, a free quota for alert notifications over text messages is provided based on your purchase details. For more information, see [Configure an alert rule for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/configure-an-alert-rule-for-an-apsaradb-rds-for-mysql-instance#concept-ir2-twp-wdb).
    
-   You can update the minor engine version of an RDS instance with a few clicks. For more information, see [Update the minor engine version of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb11).
    

-   Automated backups are not supported. You must purchase or configure the streaming backup and PITR features. This requires high costs.
    
-   You must purchase an independent monitoring system and configure the system in the CloudMonitor console.
    
-   Technical challenges are imposed on usability.
    
-   Version updates require high costs.
    

-   Automated backups are not supported. You must purchase or configure the streaming backup and PITR features. This requires high costs.
    
-   You must purchase or configure an independent monitoring system. This requires high costs.
    
-   Remote data centers require high costs and are difficult to be built. As a result, geo-disaster recovery is difficult to be implemented.
    
-   Version updates require high costs.
    

Performance

-   RDS instances that are equipped with Premium Local SSDs provide high performance.
    
-   RDS instances that are equipped with enhanced SSDs (ESSDs) provide higher performance than RDS instances that are equipped with SSDs.
    
-   You can create read-only RDS instances to improve performance and balance loads.
    
-   You can use the advanced optimization capabilities that are provided by DAS. For more information, see [Overview of DAS](/help/en/doc-detail/144875.html).
    
-   The SQL Explorer feature can meet most of your business requirements for monitoring and performance optimization. For more information, see [Use the SQL Explorer feature on an ApsaraDB RDS for MySQL instance](/help/en/rds/use-sql-explorer-features-on-apsaradb-rds-for-mysql-instances#task-msp-gz1-mfb).
    

-   If you choose local disks, data reliability is reduced. If you choose cloud disks, you must plan a disk architecture. This requires high costs.
    
-   The cluster edition is difficult to be deployed and requires high consultancy costs and high maintenance costs.
    
-   You must recruit experienced DBAs. This requires high costs.
    

-   Database servers are updated at lower speeds than cloud computing hardware. Therefore, self-managed databases on these servers are inferior to RDS instances.
    
-   Computing-storage separation is difficult to be implemented and may require you to spend millions of US dollars on advanced storage media.
    
-   The cluster edition is difficult to be deployed and requires high consultancy costs and high maintenance costs.
    
-   You must recruit experienced DBAs. This requires high costs.
    

Security

-   [IP address whitelists](/help/en/rds/use-a-database-client-or-the-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance-2#concept-pdr-k2f-vdb), [security groups](/help/en/rds/use-a-database-client-or-the-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance-2#section-dsr-nt4-ydb), and [VPCs](/help/en/vpc/what-is-vpc) can be used to control access to RDS instances.
    
-   [Link encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#concept-ack-rv4-ydb) and [disk encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-tde-for-an-apsaradb-rds-for-mysql-instance#task-jrp-dw4-ydb) are provided to protect data. In addition, disk encryption supports Bring Your Own Keys (BYOKs) for various storage media.
    
-   The [SQL Explorer](/help/en/rds/use-sql-explorer-features-on-apsaradb-rds-for-mysql-instances#task-msp-gz1-mfb) feature is provided to audit the executed SQL statements.
    

-   IP address whitelists, security groups, and VPCs can be used to control access to ECS-hosted self-managed databases.
    
-   Link encryption and disk encryption must be separately configured to protect data. This requires high consultancy costs due to difficulties in the rotation of BYOKs.
    
-   SQL logs are difficult to be audited because they must be separately stored.
    

-   IP address whitelists and VPCs can be used to control access to self-managed databases on third-party servers. This requires high consultancy costs.
    
-   Link encryption and disk encryption must be separately configured to protect data. This requires high consultancy costs due to difficulties in the rotation of BYOKs.
    
-   SQL logs are difficult to be audited because they must be separately stored.
    

## Advantages of ApsaraDB RDS for PostgreSQL instances over self-managed PostgreSQL databases

**Item**

**ApsaraDB RDS for PostgreSQL instance**

**Self-managed database on an ECS instance**

**Self-managed database on a third-party database server**

Cost-effectiveness

-   Scalable resources are provided.
    
-   AliPG is compatible with open source PostgreSQL. AliPG provides a number of proprietary features to improve user experience. For more information, see [AliPG benefits](/help/en/rds/apsaradb-rds-for-postgresql/alipg-benefits#concept-1948111).
    
-   A free quota on backup storage is provided. The free quota is up to twice the purchased storage capacity based on the instance configuration. For more information, see [Backup storage pricing for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-postgresql/view-the-free-quota-for-backup-storage-of-an-apsaradb-rds-for-postgresql-instance#concept-ipg-lm4-ydb).
    
-   Internet traffic is free of charge.
    
-   User-provided domain names are supported free of charge.
    
-   Updates to ApsaraDB RDS for PostgreSQL are released by Alibaba Cloud to keep pace with the latest PostgreSQL releases.
    

-   Scalable resources are provided.
    
-   Open source MySQL is used. No optimization is provided.
    
-   You are charged for the backup storage that you use.
    
-   You are charged for the Internet traffic that you consume.
    

-   The initial investment cost is high.
    
-   Open source MySQL is used. No optimization is provided.
    
-   You must allocate independent backup resources. This requires high costs.
    
-   You are charged for the Internet traffic that you consume and the domain names that you use. The domain names are charged at high prices.
    

Availability

-   In RDS Basic Edition, your database system requires approximately 15 minutes to complete a failover.
    
-   In RDS High-availability Edition, your database system runs in a proprietary high-availability architecture of Alibaba Cloud. This architecture allows your database system to complete a failover within 30 seconds.
    
-   You can create read-only RDS instances to balance loads in your database system. For more information, see [Overview of read-only ApsaraDB RDS for PostgreSQL instances](/help/en/rds/overview-of-read-only-apsaradb-rds-for-postgresql-instances#concept-rst-2z1-ygb).
    

-   In the basic edition, your databases require approximately 30 minutes to complete a failover.
    
-   You must purchase additional software or hardware to build a high-availability architecture.
    
-   You must configure or purchase additional software or hardware to build a load balancing architecture.
    

-   Your databases are standalone. If a database server breaks down, repairs can take hours to weeks.
    
-   You must purchase additional software or hardware to build a high-availability architecture.
    
-   You must configure or purchase additional software or hardware to build a load balancing architecture.
    

Reliability

-   Automated replication of data between primary and secondary RDS instances, data backups, and log backups are supported to ensure high data reliability.
    
-   RPO customization allows you to specify an RPO of 0.
    

-   Your databases are highly available only when they are deployed in an optimal high-availability architecture.
    
-   To ensure an RPO of 0, you must purchase independent R&D services. This requires high costs.
    

-   Data reliability is moderate and varies based on the corruption probability of individual disks.
    
-   To ensure an RPO of 0, you must purchase independent R&D services. This requires high costs.
    

Usability

-   An automated backup and restoration system is provided to support PITR and database-level backup and restoration. In addition, streaming backups are supported to minimize the impacts on performance. For more information, see [Enable automatic backups for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance#concept-l1m-xgn-ydb).
    
-   An automated monitoring and alerting system allows you to monitor all supported metrics at the instance and database levels and view monitoring information that is collected over a time range of a few seconds. If the value of a metric exceeds the specified threshold, ApsaraDB RDS sends an alert to you by text message, email, or DingTalk. In addition, a free quota for alert notifications over text messages is provided based on your purchase details. For more information, see [Configure an alert rule for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-alert-rules-of-an-apsaradb-rds-for-postgresql-instance#concept-ir2-twp-wdb).
    

-   Automated backups are not supported. You must purchase or configure the streaming backup and PITR features. This requires high costs.
    
-   You must purchase an independent monitoring system and configure the system in the CloudMonitor console.
    

-   Automated backups are not supported. You must purchase or configure the streaming backup and PITR features. This requires high costs.
    
-   You must purchase or configure an independent monitoring system. This requires high costs.
    

Performance

-   RDS instances that are equipped with ESSDs provide higher performance than RDS instances that are equipped with SSDs.
    
-   You can create read-only RDS instances to improve performance and balance loads.
    
-   You can use the advanced optimization capabilities that are provided by DAS. For more information, see [Overview of DAS](/help/en/doc-detail/159166.html).
    
-   The SQL Audit feature meets most of your database monitoring and performance optimization requirements. For more information, see [Use the SQL Audit feature on an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/use-the-sql-audit-feature-on-an-apsaradb-rds-for-postgresql-instance#concept-njf-cr4-ydb).
    

-   If you choose local disks, data reliability is reduced. If you choose cloud disks, you must plan a disk architecture. This requires high costs.
    
-   You must recruit experienced DBAs. This requires high costs.
    

-   Database servers are updated at a lower speed than cloud computing hardware. Therefore, self-managed databases on these servers are inferior to RDS instances.
    
-   Computing-storage separation is difficult to be implemented. If you use advanced storage media to separate computing from storage, you need to spend millions of US dollars.
    
-   You must recruit experienced DBAs. This requires high costs.
    

Security

-   [IP address whitelists](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance-1#concept-rpj-hs4-ydb), [security groups](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance#section-dsr-nt4-ydb), and [VPCs](/help/en/vpc/what-is-vpc) can be used to control access to RDS instances.
    
-   [Link encryption](/help/en/rds/apsaradb-rds-for-postgresql/configure-disk-encryption-for-an-apsaradb-rds-for-postgresql-instance#task-1079262) and [disk encryption](/help/en/rds/apsaradb-rds-for-postgresql/configure-disk-encryption-for-an-apsaradb-rds-for-postgresql-instance#section-ffo-jzy-q7z) are provided to protect data.
    

-   IP address whitelists, security groups, and VPCs can be used to control access to ECS-hosted self-managed databases.
    
-   Link encryption must be separately configured to protect data.
    

-   IP address whitelist and VPCs can be used to control access to self-managed databases on third-party servers. This requires high consultancy costs.
    
-   Link encryption must be separately configured to protect data.
    

## Advantages of ApsaraDB RDS for SQL Server instances over self-managed SQL Server databases

**Item**

**ApsaraDB RDS for SQL Server instance**

**Self-managed database on an ECS instance**

**Self-managed database on a third-party database server**

Cost-effectiveness

-   Scalable resources are provided.
    
-   SQL Server Web Edition is supported to increase cost-effectiveness.
    
-   A free quota on backup storage is provided. The free quota is equal to half the purchased storage capacity. For more information, see [Backup storage fees of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-sql-server-instance#concept-ipg-lm4-ydb).
    
-   Internet traffic is free of charge.
    

-   Scalable resources are provided.
    
-   SQL Server Web Edition is not supported.
    
-   You are charged for the backup storage that you use.
    
-   You are charged for the Internet traffic that you consume.
    

-   The initial investment cost is high.
    
-   SQL Server Web Edition is not supported.
    
-   You must allocate independent backup resources. This requires high costs.
    
-   You are charged for the Internet traffic that you consume and the domain names that you use. The domain names are charged at high prices.
    

Availability

-   In RDS Basic Edition, your database system requires approximately 15 minutes to complete a failover.
    
-   In RDS High-availability Edition or RDS Cluster Edition, your database system runs in a proprietary high-availability architecture of Alibaba Cloud. This architecture allows your database system to complete a failover within 30 seconds.
    
-   In RDS Cluster Edition, you can create read-only RDS instances to balance loads in your database system. For more information, see [Overview of read-only ApsaraDB RDS for SQL Server instances](/help/en/rds/overview-of-read-only-apsaradb-rds-for-sql-server-instances#concept-cst-z45-vdb).
    
-   In RDS Cluster Edition, you can use read/write splitting to distribute read and write requests by using a read/write splitting endpoint. For more information, see [Overview of read/write splitting](/help/en/rds/overview-of-read-or-write-splitting#concept-ptl-fl4-wdb).
    

-   In the basic edition, your databases require approximately 30 minutes to complete a failover.
    
-   You must purchase additional software or hardware to build a high-availability architecture.
    
-   You must configure or purchase additional software or hardware to build a load balancing architecture.
    

-   Your databases are standalone. If a database server breaks down, repairs can take hours to weeks.
    
-   You must purchase additional software or hardware to build a high-availability architecture.
    
-   You must configure or purchase additional software or hardware to build a load balancing architecture.
    

Reliability

-   Automated replication of data between primary and secondary RDS instances, data backups, and log backups are supported to ensure high data reliability.
    
-   RDS Cluster Edition delivers an RPO of 0.
    

-   Your databases are highly available only when they are deployed in an optimal high-availability architecture.
    
-   To ensure an RPO of 0, you must purchase independent R&D services. This requires high costs.
    

-   Data reliability is moderate and varies based on the corruption probability of individual disks.
    
-   To ensure an RPO of 0, you must purchase independent R&D services. This requires high costs.
    

Usability

-   An automated backup and restoration system is provided to support point in time recovery (PITR) and database-level backup and restoration. In addition, streaming backups are supported to minimize the impacts on performance. For more information, see [Enable automatic backups for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-sql-server/back-up-an-apsaradb-rds-for-sql-server-instance#concept-l1m-xgn-ydb).
    
-   An automated monitoring and alerting system allows you to monitor all supported metrics at the instance and database levels and view monitoring information that is collected over a time range of a few seconds. If the value of a metric exceeds the specified threshold, ApsaraDB RDS sends you an alert by text message, email, or DingTalk. In addition, a free quota for alert notifications over text messages is provided based on your purchase details. For more information, see [Manage an alert rule](/help/en/rds/apsaradb-rds-for-sql-server/configure-an-alert-rule-for-an-apsaradb-rds-for-sql-server-instance#concept-ir2-twp-wdb).
    
-   Geo-disaster recovery is in development.
    

-   Automated backups are not supported. You must purchase or configure the streaming backup and PITR features. This requires high costs.
    
-   You must purchase an independent monitoring system and configure the system in the CloudMonitor console.
    
-   Technical challenges are imposed on usability.
    

-   Automated backups are not supported. You must purchase or configure the streaming backup and PITR features. This requires high costs.
    
-   You must purchase or configure an independent monitoring system. This requires high costs.
    
-   Remote data centers require high costs and are difficult to be built. As a result, geo-disaster recovery is difficult to be implemented.
    

Performance

-   RDS instances that run SQL Server 2008 R2 with Premium Local SSDs provide high performance. RDS instances that run SQL Server 201x support next-generation compute-storage decoupling and can benefit from hardware dividends.
    
-   RDS instances that are equipped with ESSDs provide higher performance than RDS instances that are equipped with SSDs.
    
-   You can create read-only RDS instances to improve performance and balance loads.
    
-   You can use the advanced optimization capabilities that are provided by DAS. For more information, see [Overview of DAS](/help/en/doc-detail/98989.html).
    

-   If you choose local disks, data reliability is reduced. If you choose cloud disks, you must plan a disk architecture. This requires high costs.
    
-   The parameters of the RDS instances that use ESSDs are optimized and adapted. In this case, RDS instances that use ESSDs have higher performance than self-managed SQL Server databases on ECS instances.
    
-   The cluster edition is difficult to be deployed and requires high consultancy costs and high maintenance costs.
    
-   You must recruit experienced DBAs. This requires high costs.
    

-   Database servers are updated at lower speeds than cloud computing hardware. Therefore, self-managed databases on these servers are inferior to RDS instances.
    
-   Computing-storage separation is difficult to be implemented and may require you to spend millions of US dollars on advanced storage media.
    
-   The cluster edition is difficult to be deployed and requires high consultancy costs and high maintenance costs.
    
-   You must recruit experienced DBAs. This requires high costs.
    

Security

-   [IP address whitelists](/help/en/rds/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-sql-server-instance-1#concept-jvp-nwz-vdb) and [VPCs](/help/en/vpc/what-is-vpc) can be used to control access to RDS instances.
    
-   [Link encryption](/help/en/rds/apsaradb-rds-for-sql-server/configure-ssl-encryption-for-an-apsaradb-rds-for-sql-server-instance#concept-ack-rv4-ydb) and [disk encryption](/help/en/rds/apsaradb-rds-for-sql-server/configure-tde-for-an-apsaradb-rds-for-sql-server-instance#concept-jrp-dw4-ydb) are provided to protect data.
    
-   Updates to ApsaraDB RDS for SQL Server are released by Alibaba Cloud to keep pace with the latest Microsoft releases.
    

-   IP address whitelists, security groups, and VPCs can be used to control access to ECS-hosted self-managed databases.
    
-   Link encryption and disk encryption must be separately configured to protect data. This requires high consultancy costs.
    
-   SQL logs are difficult to be audited because they must be separately stored.
    

-   IP address whitelists and VPCs can be used to control access to self-managed databases on third-party servers. This requires high consultancy costs.
    
-   Link encryption and disk encryption must be separately configured to protect data. This requires high consultancy costs.
    
-   SQL logs are difficult to be audited because they must be separately stored.
    

Legal liability

ApsaraDB RDS for SQL Server is provided with a valid license. No legal liabilities are imposed on you.

You must purchase a valid license.

You must purchase a valid license. Otherwise, legal liabilities may be imposed on you.

## Get started with ApsaraDB RDS

-   [Overview](/help/en/rds/getting-started#concept-rrc-tdh-wdb)
    
-   [RDS Learning Path](https://www.alibabacloud.com/getting-started/learningpath/rds)
    
-   Migrate data from self-managed databases to ApsaraDB RDS:
    
    -   MySQL: [Data Migration from a User-created Database to an ApsaraDB RDS MySQL Instance](/help/en/rds/apsaradb-rds-for-mysql/data-migration-from-a-user-created-database-to-an-apsaradb-rds-mysql-instance/)
        
    -   SQL Server: [Migrate data from a self-managed SQL Server database to an ApsaraDB RDS for SQL Server instance](/help/en/rds/overview-of-data-migration-methods#557f37e215198)
        
    -   PostgreSQL: [Migrate user-created databases to ApsaraDB](/help/en/rds/apsaradb-rds-for-postgresql/migrate-user-created-databases-to-apsaradb/)
        
    -   MariaDB: [Migrate data from an ApsaraDB RDS for MariaDB instance to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mariadb/data-migration/)
