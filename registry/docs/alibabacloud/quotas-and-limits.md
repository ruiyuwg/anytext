This topic describes the quotas and limits on ApsaraDB RDS for PostgreSQL. Before you create an ApsaraDB RDS for PostgreSQL instance, make sure that you understand the quotas and limits. This way, you can ensure the stability and security of your RDS instance.

## Specifications and performance

**Item**

**Specification**

**Description**

Storage capacity

-   RDS instances that use Premium Local SSDs: up to 6,000 GB.
    
-   RDS instances that use standard SSDs: up to 6,000 GB.
    
-   RDS instances that use Enterprise SSDs (ESSDs): up to 64,000 GB.
    
-   RDS instances that use Premium ESSDs: up to 64,000 GB.
    

The storage capacity of an RDS instance that uses Premium Local SSDs varies based on the instance type. This limit does not apply to RDS instances that use standard SSDs or ESSDs. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db).

Connections

Up to 76,800.

The number of connections that can be established to an RDS instance varies based on the instance type. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db).

IOPS

-   RDS instances that use Premium Local SSDs: up to 50,000.
    
-   RDS instances that use cloud disks: For more information, see [IOPS](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#section-ire-dbl-kzm).
    

None.

Memory capacity

-   RDS instances that use Premium Local SSDs: up to 512 GB.
    
-   RDS instances that use cloud disks: up to 768 GB.
    

For RDS instances that use cloud disks, the memory includes the memory that is occupied by the underlying operating system and the memory that is occupied by the RDS-related management services. Therefore, the available memory of an RDS instance may be less than the memory capacity that is supported by the instance type. The following list describes the memory that is occupied by the underlying operating system and the memory that is occupied by the RDS-related management services:

-   The underlying operating system occupies 500 MB to 700 MB of memory.
    
-   The RDS-related management services occupy approximately 500 MB of memory.
    

## Quotas

**Item**

**Quota**

Read-only RDS instance

Read-only RDS instances are supported only for RDS instances that run PostgreSQL 10 or later. The read-only RDS instances that you create must reside in the same region as the primary RDS instance to which the read-only RDS instances are attached.

-   If the primary RDS instance uses Premium Local SSDs, take note of the following points:
    
    -   You can create up to five read-only RDS instances.
        
    -   You can create read-only RDS instances only when the primary RDS instance is a dedicated instance that provides at least 8 cores and 32 GB of memory.
        
-   If the primary RDS instance uses standard SSDs or ESSDs, take note of the following points:
    
    -   You can create up to 32 read-only RDS instances.
        
    -   Each read-only RDS instance runs based on a single-node architecture. In this architecture, no secondary RDS instances are provided as standbys for read-only RDS instances.
        

For more information about read-only RDS instances, see [Overview of read-only ApsaraDB RDS for PostgreSQL instances](/help/en/rds/overview-of-read-only-apsaradb-rds-for-postgresql-instances#concept-rst-2z1-ygb).

Tag

The key of a tag must be unique. You can add up to 20 tags to an RDS instance. You can add tags to up to 50 RDS instances at a time. For more information, see [Add tags to ApsaraDB RDS instances](/help/en/rds/apsaradb-rds-for-postgresql/add-tags-to-apsaradb-rds-instances-2#concept-dmq-yw4-ydb).

Free quota on backup storage

RDS instances that use cloud disks support only snapshot backups. RDS instances that use Premium Local SSDs support only physical backups. If your backup storage exceeds the free quota, you are charged for your excess backup storage. Your excess backup storage is calculated by using the following formula: Excess backup storage = Size of data backup files + Size of log backup files - Free quota. Unit: GB. The obtained result is rounded up to the next integer.

-   RDS instances that use Premium Local SSDs: Free quota for the storage of physical backup files = 50% × Purchased storage capacity.
    
-   RDS instances that use standard SSDs or ESSDs: Free quota for the storage of snapshot backup files = 200% × Purchased storage capacity.
    

For more information, see [Back up an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance#concept-l1m-xgn-ydb).

Backup retention period

The default retention period is 7 days, and the maximum retention period is 730 days.

Retention period of error logs

The retention period is 30 days. For more information, see [View logs](/help/en/rds/apsaradb-rds-for-postgresql/view-the-logs-of-an-apsaradb-rds-for-postgresql-instance#concept-ujc-hz4-ydb).

Retention period of slow log details

The retention period is 30 days. For more information, see [View logs](/help/en/rds/apsaradb-rds-for-postgresql/view-the-logs-of-an-apsaradb-rds-for-postgresql-instance#concept-ujc-hz4-ydb).

## Limits on names

**Item**

**Description**

Instance name

-   The name of an RDS instance must be 2 to 256 characters in length.
    
-   The name can contain letters, digits, underscores (\_), and hyphens (-).
    
-   The name of an RDS instance must start with a letter.
    

Username

-   The username of the account. It must be 2 to 63 characters in length.
    
-   It can contain lowercase letters, digits, and underscores (\_).
    
-   It must start with a letter and end with a letter or a digit.
    
-   It cannot be the same as the username of an existing account.
    
-   It cannot start with pg.
    
-   It cannot contain SQL keywords. For more information, see [SQL Keywords](https://www.postgresql.org/docs/14/sql-keywords-appendix.html).
    

Database name

-   The name can contain up to 63 characters.
    
-   The name can contain lowercase letters, digits, underscores (\_), and hyphens (-).
    
-   The name of a database must start with a lowercase letter and end with a lowercase letter or a digit.
    
-   The name must be unique.
    
-   The name of a database cannot contain SQL keywords. For more information, see [SQL Keywords](https://www.postgresql.org/docs/14/sql-keywords-appendix.html).
    

## Limits on security

**Item**

**Description**

Password

The password of an account must meet the following requirements:

-   It is 8 to 32 characters in length.
    
-   It must contain at least three types of the following characters: uppercase letters, lowercase letters, digits, and special characters. It can contain the following special characters: `! @ # $ % ^ & * () _ + - =`
    

Port

By default, an RDS instance is connected over port 5432. You can change the port number based on your business requirements.

Instance parameter configuration

For security and stability purposes, some parameters cannot be modified. You can modify most of the instance parameters in the ApsaraDB RDS console or by calling the ApsaraDB RDS API. For more information, see [Modify the parameters of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/modify-the-parameters-of-an-apsaradb-rds-for-postgresql-instance#concept-lfl-xmn-wdb).

Cloud disk encryption

You can enable cloud disk encryption for an RDS instance only when you purchase the instance. Cloud disk encryption cannot be disabled after it is enabled. For more information, see [Configure the cloud disk encryption feature](/help/en/rds/apsaradb-rds-for-postgresql/configure-disk-encryption-for-an-apsaradb-rds-for-postgresql-instance#task-1079262).

Number of security groups

You can configure up to 10 security groups for an RDS instance.

-   After you configure security groups for an RDS instance, all Elastic Compute Service (ECS) instances in the configured security groups can communicate with the RDS instance.
    
-   The security groups that you configure for an RDS instance must have the same network type as the RDS instance. This means that the network types of the RDS instance and the security groups that you want to configure must both be virtual private cloud (VPC) or classic network.
    

For more information, see [Configure a security group](/help/en/rds/apsaradb-rds-for-postgresql/configure-a-security-group-for-an-apsaradb-rds-for-postgresql-instance#task-2047334).

Number of IP address whitelists

You can configure up to 50 IP address whitelists for an RDS instance. For more information about how to configure a whitelist, see [Configure an IP whitelist](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance-1#concept-rpj-hs4-ydb).

Root account

You cannot create root accounts. ApsaraDB RDS for PostgreSQL does not provide superuser accounts such as root accounts.

Privileged account

You can create and manage privileged accounts in the ApsaraDB RDS console or by using the ApsaraDB RDS API. You can create multiple privileged accounts for an RDS instance. The privileged accounts of an RDS instance have the permissions to disconnect all standard accounts of the RDS instance.

For more information, see [Create an account](/help/en/rds/apsaradb-rds-for-postgresql/create-an-account-on-an-apsaradb-rds-for-postgresql-instance#concept-kxw-k1p-ydb).

Standard account

You can create and manage standard accounts in the ApsaraDB RDS console. You can also use the ApsaraDB RDS API or execute SQL statements to create and manage standard accounts. You must grant the permissions on specific databases to each standard account. A standard account of an RDS instance does not have the permissions to create, manage, or disconnect the other accounts of the RDS instance.

For more information, see [Create an account](/help/en/rds/apsaradb-rds-for-postgresql/create-an-account-on-an-apsaradb-rds-for-postgresql-instance#concept-kxw-k1p-ydb).

## Limits on SQL statements

The limits on SQL statements in ApsaraDB RDS for PostgreSQL are the same as the limits on SQL statements in open source PostgreSQL. For more information, see [SQL Commands](https://www.postgresql.org/docs/14/sql-commands.html) and [PostgreSQL Limits](https://www.postgresql.org/docs/14/limits.html).

## Other limits

**Item**

**Description**

Public endpoint

If you want to connect to an RDS instance by using a public endpoint, you must manually apply for a public endpoint for the RDS instance. For more information, see [View and change the endpoints and port numbers](/help/en/rds/apsaradb-rds-for-postgresql/view-and-change-the-endpoints-and-port-numbers-of-an-apsaradb-rds-for-postgresql-instance#concept-fbd-ypv-ydb).

Replication

ApsaraDB RDS for PostgreSQL supports primary/secondary replication in all RDS editions except for RDS Basic Edition. In primary/secondary replication, a secondary RDS instance is provided as a standby for the primary RDS instance. Secondary RDS instances are invisible to you and cannot be accessed by your applications.

Instance restart

You can restart an RDS instance only in the ApsaraDB RDS console or by using the ApsaraDB RDS API.

Tablespace creation

You cannot create tablespaces.
