You can use the backup download feature of ApsaraDB RDS for PostgreSQL to export the snapshot backup file of your ApsaraDB RDS for PostgreSQL instance that uses cloud disks as a CSV file or an SQL file. Then, you can use the CSV file or SQL file to restore the data of the RDS instance to a self-managed PostgreSQL instance.

## Procedure

This section describes how to use the SQL file to restore the data of an RDS instance that uses cloud disks to a self-managed PostgreSQL instance on your Elastic Compute Service (ECS) instance running 64-bit CentOS 7.8. If you use other operating systems, you must use the corresponding commands. Otherwise, an error is reported.

1.  Log on to the ApsaraDB RDS console and convert the backup file of the RDS instance that uses cloud disks to a CSV file or an SQL file and then download the file to your computer or ECS instance. For more information, see [Download backup files](/help/en/rds/apsaradb-rds-for-postgresql/download-the-backup-files-of-an-apsaradb-rds-for-postgresql-instance#section-ojf-3ux-3no).
    
2.  Run the following command to decompress the downloaded package:
    
    ```
    tar -zxvf <Name of the package>.tar.gz -C <Directory to store the files that are obtained from the package>
    ```
    
    In this example, a package named `backup.tar.gz` is decompressed to the `/home/ecs-test-user` directory. You can replace the package name and directory name with actual names.
    
    ```
    tar -zxvf backup.tar.gz -C /home/ecs-test-user
    ```
    
3.  Optional. Check whether the backup file is decompressed to the /home/ecs-test-user directory.
    
    ```
    ls -al /home/ecs-test-user
    ```
    
4.  Download the [PostgreSQL Python script](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20240415/hylmrv/restore_from_downloads.py) to your computer or ECS instance.
    
5.  Run the following command to grant the required permissions on the `restore_from_downloads.py` file:
    
    ```
    chmod +x ./restore_from_downloads.py
    ```
    
6.  Run the following command to restore the data of the RDS instance to the self-managed PostgreSQL instance by using the CSV file or SQL file:
    
    ```
    python3 restore_from_downloads.py <Directory of the CSV file or SQL file> <Database host> <Database port> <Username of the account> <Password of the account>
    ```
    
    Examples
    
    ```
    python3 restore_from_downloads.py /home/ecs-test-user 127.0.0.1 5432 postgres "#Tes********"
    ```
    
    **Important**
    
    -   If the self-managed PostgreSQL instance contains a database that has the same name as the database whose data you want to import, the import fails.
        
    -   If the username or password of the account that you want to use contains special characters, such as number signs (#) and spaces, you must enclose the username or password in double quotation marks (""). For example, if the password is `#1234`, you must enter `"#1234"` in the preceding command.
        
    -   If Python 3.x is not installed, errors may occur during the data restoration. You can run the `python3 --version` command to check the Python version.
        
    

## **References**

-   If you want to restore a small amount of data, such as the data of a table, you can use a logical backup file. For more information, see [Use pg\_restore to restore data from a logical backup file](/help/en/rds/apsaradb-rds-for-postgresql/restore-data-from-a-logical-backup-file).
    
-   You can also use the migration services provided by Alibaba Cloud to migrate data from an RDS instance to a self-managed PostgreSQL instance. For more information, see [Migrate data from a PostgreSQL database](/help/en/dts/user-guide/migrate-data-from-a-postgresql-database/).
    
-   For more information about data restoration methods, see [Overview of data restoration methods](/help/en/doc-detail/444453.html).
