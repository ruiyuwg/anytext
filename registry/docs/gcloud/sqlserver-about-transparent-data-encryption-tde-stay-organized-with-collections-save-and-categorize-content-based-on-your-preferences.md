-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Databases](https://docs.cloud.google.com/docs/databases)
-   [Cloud SQL](https://docs.cloud.google.com/sql/docs)
-   [SQL Server](https://docs.cloud.google.com/sql/docs/sqlserver)
-   [Guides](https://docs.cloud.google.com/sql/docs/sqlserver/features)

Send feedback

# About transparent data encryption (TDE) Stay organized with collections Save and categorize content based on your preferences.

MySQL   |  PostgreSQL   |  SQL Server

This page describes transparent data encryption (TDE) in Cloud SQL for SQL Server.

Cloud SQL for SQL Server supports using TDE to encrypt data stored in your Cloud SQL for SQL Server instances. TDE automatically encrypts data before it is written to storage, and automatically decrypts data when the data is read from storage.

TDE is used in scenarios where another layer of encryption is required in addition to Google's default offering of [encryption for data at rest](/docs/security/encryption/default-encryption) and Google's optional offering of [Customer-managed encryption keys (CMEK)](/sql/docs/sqlserver/cmek). Specifically, you can use TDE to help you meet regulatory compliance requirements such as Payment Card Industry Data Security Standard (PCI DSS) or when importing or exporting encrypted backups.

## How TDE works

TDE for Cloud SQL for SQL Server provides encryption key management by using a two-tier key architecture. A certificate, which is generated from the database primary key, is used to protect the data encryption keys. The database encryption key performs the encryption and decryption of data on the user database. Cloud SQL manages both the database primary key and the TDE certificate.

-   Each eligible Cloud SQL for SQL Server instance is provisioned with a unique TDE certificate that's valid for one year. Cloud SQL for SQL Server automatically rotates this certificate annually.
    
-   You can import external TDE certificates to the instance, but you must rotate these manually.
    
-   If the instance has replicas, then all TDE certificates, including those managed by Cloud SQL and those you imported manually, are automatically distributed across all replicas.
    
-   Instances with TDE enabled generate an internal database called `gcloud_cloudsqladmin`. This database is reserved for internal Cloud SQL processes, isn't accessible to users, stores minimal data, and has negligible storage cost.
    
-   Cloud SQL for SQL Server uses the `gcloud_tde_system_` naming prefix when provisioning a TDE certificate.
    
-   Any imported certificates use the `gcloud_tde_user_`CERT\_NAME`_`UUID naming prefix.
    
-   After you either import or rotate a certificate on an instance that has both TDE and point-in-time recovery (PITR) enabled, the instance creates a new backup. This helps reduce the risk of certificate loss if and when you want to restore an encrypted database to a point in time before the certificate was accessible to the instance.
    

## Limitations

-   Available only in Cloud SQL for SQL Server instances with the following database [versions](/sql/docs/sqlserver/editions-intro#edition-features):
    
    -   SQL Server Enterprise
    -   SQL Server 2019 or later (Standard edition)
-   If TDE is used for an instance with replicas and VPC Service Controls are enabled, then you must ensure the primary instance and all replicas are within the same service perimeter.
    
    For more information, see [Configure VPC Service Controls](/sql/docs/sqlserver/admin-api/configure-service-controls) and [Overview of VPC Service Controls](/vpc-service-controls/docs/overview).
    
-   You can't delete a TDE certificate that is managed by Cloud SQL.
    
-   You can't delete a TDE certificate while it is in use.
    
-   You can't directly import external TDE certificates to replica instances.
    
-   You can import up to ten TDE certificates per instance. If you need to import more, delete any unnecessary certificates using the `msdb.dbo.gcloudsql_drop_tde_user_certificate` stored procedure.
    

## What's next

-   [Use TDE](/sql/docs/sqlserver/use-tde)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
