This topic describes how to use the pg\_dump utility to create a logical backup for an ApsaraDB RDS for PostgreSQL instance and export the backup file for local storage.

## Background information

The pg\_dump utility provided with PostgreSQL is used to back up individual databases. For more information, see [pg\_dump](https://www.postgresql.org/docs/10/app-pgdump.html).

## Prerequisites

-   The IP address of your Elastic Compute Service (ECS) instance or on-premises host is added to the whitelist of your RDS instance. For more information, see [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance#concept-sfx-kdg-wdb).
    
-   Your ECS instance or on-premises host runs the same version of PostgreSQL as your RDS instance.
    
    **Note**
    
    In this topic, CentOS 7 and PostgreSQL 15 are used.
    

## Usage notes

We recommend that you use the privileged account of the RDS instance to create the logical backup. For more information about how to create a priviledged account, see [Create an account](/help/en/rds/apsaradb-rds-for-postgresql/create-an-account-on-an-apsaradb-rds-for-postgresql-instance).

## Back up a database

1.  Log on to your ECS instance or on-premises host. Then, run the following command to back up a database of the RDS instance:
    
    ```
    pg_dump -h '<hostname>' -U <username> -p <port> -Fc <dbname> > <dumpdir>
    ```
    
    **Parameter**
    
    **Description**
    
    hostname
    
    The endpoint that is used to connect to the RDS instance.
    
    **Note**
    
    -   If you want to connect your ECS instance to the RDS instance by using an internal endpoint, make sure that the ECS instance and the RDS instance use the same network type. If both instances use the virtual private cloud (VPC) network type, make sure that they reside in the same VPC. For more information, see [View and change the endpoints and port numbers of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/view-and-change-the-endpoints-and-port-numbers-of-an-apsaradb-rds-for-postgresql-instance#concept-fbd-ypv-ydb).
        
    -   If you want to connect the on-premises host or ECS instance to the RDS instance by using a public endpoint, make sure that a public endpoint is allocated to the RDS instance. For more information, see [View and change the endpoints and port numbers of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/view-and-change-the-endpoints-and-port-numbers-of-an-apsaradb-rds-for-postgresql-instance#concept-fbd-ypv-ydb) and [Apply for or release a public endpoint on an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/apply-for-or-release-a-public-endpoint-on-an-apsaradb-rds-for-postgresql-instance#concept-nsl-hff-vdb).
        
    
    username
    
    The username of the privileged account of the RDS instance.
    
    port
    
    The port that is used to connect to the RDS instance.
    
    \-Fc
    
    The format of the output file. `-Fc` specifies the use of the custom format. This format is ideal when you use pg\_restore to import logical backup files and restore databases. For more information, see [pg\_dump](https://www.postgresql.org/docs/10/app-pgdump.html).
    
    dbname
    
    The name of the database that you want to back up.
    
    dumpdir
    
    The directory and name of the logical backup file to export.
    
    Example
    
    ```
    pg_dump -h 'pgm-bpxxxxxx.pg.rds.aliyuncs.com' -U zht -p 5432 -Fc zht01 >  /tmp/testdb.dump
    ```
    
2.  Enter the password of the privileged account of the RDS instance if `Password:` appears in the CLI, and press the Enter key.
    
    You can run the `ll /tmp/testdb.dump` command to check whether the backup file is generated.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2401482961/p703672.png)
    

## Back up one or more tables

1.  Log on to your ECS instance or on-premises host. Then, run the following command to back up one or more tables from a database in the RDS instance:
    
    ```
    pg_dump -h '<hostname>' -U <username> -p <port> -t <Schema>.<table> -Fc <dbname> > <dumpdir>
    ```
    
    **Parameter**
    
    **Description**
    
    hostname
    
    The endpoint that is used to connect to the RDS instance.
    
    **Note**
    
    -   If you want to connect your ECS instance to the RDS instance by using an internal endpoint, make sure that the ECS instance and the RDS instance use the same network type. If both instances use the VPC network type, make sure that they reside in the same VPC. For more information, see [View and change the endpoints and port numbers of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/view-and-change-the-endpoints-and-port-numbers-of-an-apsaradb-rds-for-postgresql-instance#concept-fbd-ypv-ydb).
        
    -   If you want to connect your on-premises host or ECS instance to the RDS instance by using a public endpoint, make sure that the public endpoint is allocated to the RDS instance. For more information, see [View and change the internal and public endpoints and port numbers of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/view-and-change-the-endpoints-and-port-numbers-of-an-apsaradb-rds-for-postgresql-instance#concept-fbd-ypv-ydb) and [Apply for or release a public endpoint on an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/apply-for-or-release-a-public-endpoint-on-an-apsaradb-rds-for-postgresql-instance#concept-nsl-hff-vdb).
        
    
    username
    
    The username of the privileged account of the RDS instance.
    
    port
    
    The port that is used to connect to the RDS instance.
    
    Schema
    
    The schema of the table that you want to back up. The default value of this parameter is **Public**. If the schema of the table is Public, you do not need to specify this parameter.
    
    table
    
    The name of the table that you want to back up. You can use \-t <Schema>.<table> to specify multiple tables.
    
    \-Fc
    
    The format of the output file. `-Fc` specifies the use of the custom format. This format is ideal when you use pg\_restore to import logical backup files and restore databases. For more information, see [pg\_dump](https://www.postgresql.org/docs/10/app-pgdump.html).
    
    dbname
    
    The name of the database that you want to back up.
    
    dumpdir
    
    The directory and name of the logical backup file to export.
    
    Example:
    
    ```
    pg_dump -h 'pgm-bpxxxxxx.pg.rds.aliyuncs.com' -U zht -p 5432 -t zhttest0808 -Fc zht01 > /tmp/testdb2.dump
    ```
    
2.  Enter the password of the privileged account of the RDS instance if `Password:` appears in the CLI, and press the Enter key.
    
    You can run the `ll /tmp/testdb2.dump` command to check whether the backup file is generated.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2401482961/p703725.png)
    

## Back up a database with one or more tables excluded

1.  Log on to your ECS instance or on-premises host. Then, run the following command to back up a database from the RDS instance with one or more tables excluded:
    
    ```
    pg_dump -h '<hostname>' -U <username> -p <port> -T <table> -Fc <dbname> > <dumpdir>
    ```
    
    **Parameter**
    
    **Description**
    
    hostname
    
    The endpoint that is used to connect to the RDS instance.
    
    **Note**
    
    -   If you want to connect your ECS instance to the RDS instance by using an internal endpoint, make sure that the ECS instance and the RDS instance use the same network type. If both instances use the VPC network type, make sure that they reside in the same VPC. For more information, see [View and change the endpoints and port numbers of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/view-and-change-the-endpoints-and-port-numbers-of-an-apsaradb-rds-for-postgresql-instance#concept-fbd-ypv-ydb).
        
    -   If you want to connect your on-premises host or ECS instance to the RDS instance by using a public endpoint, make sure that the public endpoint is allocated to the RDS instance. For more information, see [View and change the internal and public endpoints and port numbers of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/view-and-change-the-endpoints-and-port-numbers-of-an-apsaradb-rds-for-postgresql-instance#concept-fbd-ypv-ydb) and [Apply for or release a public endpoint on an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/apply-for-or-release-a-public-endpoint-on-an-apsaradb-rds-for-postgresql-instance#concept-nsl-hff-vdb).
        
    
    username
    
    The username of the privileged account of the RDS instance.
    
    port
    
    The port that is used to connect to the RDS instance.
    
    table
    
    The name of the table that you want to exclude. You can use `-T <table>` to exclude multiple tables.
    
    \-Fc
    
    The format of the output file. `-Fc` specifies the use of the custom format. This format is ideal when you use pg\_restore to import logical backup files and restore databases. For more information, see [pg\_dump](https://www.postgresql.org/docs/10/app-pgdump.html).
    
    dbname
    
    The name of the database that you want to back up.
    
    dumpdir
    
    The directory and name of the logical backup file to export.
    
    Example:
    
    ```
    pg_dump -h 'pgm-bpxxxxxx.pg.rds.aliyuncs.com' -U zht -p 5432 -T zhttest0808 -Fc zht01 > /tmp/testdb3.dump
    ```
    
2.  Enter the password of the privileged account of the RDS instance if `Password:` appears in the CLI, and press the Enter key.
    
    You can run the `ll /tmp/testdb3.dump` command to check whether the backup file is generated.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2401482961/p703738.png)
    

## Back up the schema of a database with data excluded

1.  Log on to your ECS instance or on-premises host. Then, run the following command to back up the schema of a database from the RDS instance:
    
    ```
    pg_dump -h '<hostname>' -U <username> -p <port> -s -Fc <dbname> > <dumpdir>
    ```
    
    **Parameter**
    
    **Description**
    
    hostname
    
    The endpoint that is used to connect to the RDS instance.
    
    **Note**
    
    -   If you want to connect your ECS instance to the RDS instance by using an internal endpoint, make sure that the ECS instance and the RDS instance use the same network type. If both instances use the VPC network type, make sure that they reside in the same VPC. For more information, see [View and change the internal and public endpoints and port numbers of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/view-and-change-the-endpoints-and-port-numbers-of-an-apsaradb-rds-for-postgresql-instance#concept-fbd-ypv-ydb).
        
    -   If you want to connect an on-premises host or an ECS instance to an RDS instance by using a [public endpoint](/help/en/rds/apsaradb-rds-for-postgresql/view-and-change-the-endpoints-and-port-numbers-of-an-apsaradb-rds-for-postgresql-instance#concept-fbd-ypv-ydb), [apply for or release a public endpoint](/help/en/rds/apsaradb-rds-for-postgresql/apply-for-or-release-a-public-endpoint-on-an-apsaradb-rds-for-postgresql-instance#concept-nsl-hff-vdb).
        
    
    username
    
    The username of the privileged account of the RDS instance.
    
    port
    
    The port that is used to connect to the RDS instance.
    
    \-s
    
    Specifies that only the schema of the database is backed up. The data of the database is not backed up. For more information, see [pg\_dump](https://www.postgresql.org/docs/10/app-pgdump.html).
    
    \-Fc
    
    The format of the output file. `-Fc specifies the use of the custom format. This format is ideal when you use pg_restore to import logical backup files and restore databases.` For more information, see [pg\_dump](https://www.postgresql.org/docs/10/app-pgdump.html).
    
    dbname
    
    The name of the database that you want to back up.
    
    dumpdir
    
    The directory and name of the logical backup file to export.
    
    Example:
    
    ```
    pg_dump -h 'pgm-bpxxxxxx.pg.rds.aliyuncs.com' -U zht -p 5432 -s -Fc zht01 > /tmp/testdb4.dump
    ```
    
2.  Enter the password of the privileged account of the RDS instance if `Password:` appears in the CLI, and press the Enter key.
    
    You can run the `ll /tmp/testdb4.dump` command to check whether the backup file is generated.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2401482961/p703743.png)
    

## References

If your RDS instance is faulty and you want to restore data of the instance, follow the instructions provided in [Restore data from a logical backup file](/help/en/rds/apsaradb-rds-for-postgresql/restore-data-from-a-logical-backup-file#task-2336730).
