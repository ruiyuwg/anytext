This topic describes the background information and benefits of AliPG.

## Background information

PostgreSQL is an advanced open source enterprise-grade database service.

AliPG is compatible with open source PostgreSQL and is put into commercial use in 2015. AliPG supports PostgreSQL 10 and later versions. AliPG has been running stably for years and supports the services inside Alibaba Group and on Alibaba Cloud.

## AliPG-running Alibaba Cloud database services

ApsaraDB RDS for PostgreSQL

## Major PostgreSQL versions supported

PostgreSQL 10 or later

## Benefits

AliPG is developed based on insights into the industry requirements and helps customers expand business boundaries.

AliPG has the following benefits over open source PostgreSQL:

-   Faster speed
    
    -   Image recognition and vector similarity-based searches are tens of thousands of times faster on AliPG than on open source PostgreSQL. For more information, see [Use PASE for efficient vector search](/help/en/rds/apsaradb-rds-for-postgresql/use-pase-for-efficient-vector-search).
        
    -   Marketing and user profiling in real time are thousands of times faster on AliPG than on open source PostgreSQL. For more information, see [Implement real-time precision marketing and user group selection by using an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/implement-real-time-precision-marketing-and-user-group-selection-by-using-an-apsaradb-rds-for-postgresql-instance#task-2418501).
        
    -   The GIS-based Mod operator on AliPG processes mobile objects 50 times faster than the Mod operator on open source PostGIS. For more information, see [Overview](/help/en/rds/apsaradb-rds-for-postgresql/overview-7#concept-nwr-lc5-qfb).
        
-   Higher stability
    
    AliPG uses the Platform as a Service (PaaS) architecture. This architecture allows you to transform traditional software from license-based services to subscription-based services. You can manage a large amount of metadata, optimize connections, and efficiently isolate resources. In addition, each RDS instance supports tens of thousands of schemas.
    
-   Higher security
    
    -   AliPG is certified based on leading national and international security standards, which empowers enterprises to increase institutional security scores in the financing and listing phases.
        
    -   AliPG provides the following security enhancements:
        
        -   Encrypts sensitive data that contains passwords. The sensitive data includes dynamic views, shared memory, the dblink extension, historical commands, and audit logs.
            
        -   Fixes the function-related bugs that are found in open source PostgreSQL.
            
        -   Supports the Always confidential database feature. This feature encrypts sensitive data columns so that the data can be transmitted, computed, and stored in ciphertext. For more information, see [Overview](/help/en/rds/overview#task-2339243).
            
        -   Supports the semi-synchronous mode. This mode allows you to specify a protection level for your RDS instance. The supported protection levels are maximum protection, maximum availability, and maximum performance. For more information, see [Set the protection level of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/change-the-data-replication-mode-of-an-apsaradb-rds-for-postgresql-instance#task-2399885).
            
        -   Supports the logical replication failover slot feature. This feature prevents primary/secondary switchovers from affecting the reliability of logical replication. For more information, see [Logical Replication Slot Failover](/help/en/rds/apsaradb-rds-for-postgresql/logical-replication-slot-failover#task-2488073).
            
        -   Supports the Transparent Data Encryption (TDE) feature. This feature encrypts and decrypts data files in real time to protect data privacy of users. For more information, see [Overview](/help/en/doc-detail/465651.html#concept-2272850).
            
        -   Supports the SSL encryption feature. This feature encrypts the connections between database clients and RDS instances and protects the data that is transmitted over the connections. For more information, see [Configure SSL encryption for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/configure-ssl-encryption-for-an-apsaradb-rds-for-postgresql-instance#task-1079262).
