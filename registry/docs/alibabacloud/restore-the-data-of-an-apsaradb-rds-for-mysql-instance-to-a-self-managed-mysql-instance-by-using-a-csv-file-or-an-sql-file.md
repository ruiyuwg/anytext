You can use the backup download feature of RDS for MySQL to convert snapshot backup data from an RDS for MySQL instance into a CSV or SQL file. You can then download the file and restore it to a self-managed MySQL database on your local machine or an ECS (Elastic Compute Service) instance.

## Prerequisites

-   The RDS for MySQL instance must meet the following requirements:
    
    -   Database version: 8.0 or 5.7 (Serverless instances are supported)
        
    -   Storage class: enterprise SSD (ESSD) or premium performance disk
        
    -   Status: running
        
    
    **Note**
    
    -   You can view this information on the **Basic Information** page within the instance product page.
        
    -   **The advanced download feature is not supported for premium performance disk instances that have the** [data archiving](/help/en/rds/apsaradb-rds-for-mysql/rds-mysql-data-archiving-function) **feature enabled.** Download tasks will fail.
        
    
-   Transparent data encryption (TDE) must be disabled on the RDS instance. If the instance contains encrypted tables, the restore process will fail. You must perform [decryption](/help/en/rds/apsaradb-rds-for-mysql/configure-tde-for-an-apsaradb-rds-for-mysql-instance#section-0nx-bpi-ef8) on the encrypted tables before you proceed.
    
-   Make sure that the `local_infile` parameter is enabled for your self-managed MySQL database.
    
    **Note**
    
    -   Check the status of the `local_infile` parameter (ON indicates that it is enabled): `SHOW GLOBAL VARIABLES LIKE 'local_infile';`
        
    -   Enable the `local_infile` parameter: `SET GLOBAL local_infile=1;`
        
    

## Limitations

The following limitations apply when you restore data from a downloaded backup set to a self-managed MySQL database. A downloaded backup set is a CSV or SQL file that is converted from the snapshot backup data of a disk-based instance.

-   **Unsupported binary field types**: BIT, BINARY, VARBINARY, TINYBLOB, BLOB, MEDIUMBLOB, and LONGBLOB.
    
    **Note**
    
    -   If a backup set contains these field types, they are stored in hexadecimal format. During the import, MySQL processes binary fields as strings. In this case, you must manually use the UNHEX function in the `load data local infile` command to convert the hexadecimal format back to the original binary string.
        
    -   Data of the BLOB type can be backed up and restored to a local MySQL database using `mysqldump`.
        
        Back up data: `mysqldump -h 127.0.0.1 -u user -p --opt --default-character-set=utf8 --hex-blob <self-managed_database_name> --skip-triggers --skip-lock-tables > /tmp/<self-managed_database_name>.sql`
        
        Restore data: `mysql -h 127.0.0.1 -u username -p database_name < backup_file.sql`
        
    
-   **Unsupported spatial field types**: GEOMETRY, POINT, LINESTRING, POLYGON, MULTIPOINT, MULTILINESTRING, MULTIPOLYGON, and GEOMETRYCOLLECTION.
    

## **Before you begin**

-   **Python script maintenance status**: The `restore_from_downloads.py` script provided in this topic is for reference only. It is no longer maintained. Use it with caution and verify its compatibility.
    
-   **Database version consistency**: The versions of your RDS for MySQL database and your self-managed MySQL database must be consistent. Different database versions may have incompatible features, which can cause the restore to fail.
    
-   **No databases or tables with the same name**: Before you run the restore command, make sure that the target self-managed database does not contain any databases or tables with the same names as those in the backup data. Otherwise, the restore will fail.
    
-   **Job interruption**: If you interrupt the restore job for any reason, the restored data may be incomplete or the job may fail. Proceed with caution.
    
-   **Handling special characters**: When you run the commands in this topic, if a file path, database account, or password contains special characters, such as `&`, `#`, or `space`, you must enclose it in double quotation marks (""). Otherwise, an error will occur. For example:
    
    ```
    # If the file path contains a special character (&), enclose the path in double quotation marks.
    python ./restore_from_downloads.py "/path/to/data&test" 127.0.0.1 3306 root zhtpasswordtest
    
    # If the database password contains special characters (#, @), enclose the password in double quotation marks.
    python ./restore_from_downloads.py /data 127.0.0.1 3306 root "#Test@20250821"
    ```
    

## Procedure

This topic provides an example of restoring an SQL file from an RDS for MySQL instance that uses disks to a self-managed MySQL database on an ECS instance that runs Alibaba Cloud Linux 3.2104 LTS 64-bit. Use the commands that are appropriate for your environment.

1.  **Download and decompress the backup file**
    
    1.  Log on to the RDS console. Use the [Download Backup](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#section-o98-ral-xt0) feature to convert the backup file of the RDS for MySQL instance into a CSV or SQL file and download it to your local machine or an ECS instance.
        
    2.  Decompress the downloaded backup file on your local machine or ECS instance.
        
        -   If the backup file is in `.tar.gz` format:
            
            ```
            tar -izxvf <compressed_package_name>.tar.gz -C <destination_directory>
            
            # This example decompresses a file named backup.tar.gz to the /home/mysql/data directory. Use your actual file name and directory.
            tar -izxvf backup.tar.gz -C /home/mysql/data
            ```
            
        -   If the backup file is in `.tar.zst` format:
            
            ```
            zstd -d -c <compressed_package_name>.tar.zst | tar -xvf - -C <destination_directory>
            
            # This example decompresses a file named backup.zst to the /home/mysql/data directory. Use your actual file name and directory.
            zstd -d -c backup.tar.zst | tar -xvf - -C /home/mysql/data
            ```
            
        
    3.  (Optional) Check whether the backup file is decompressed to the specified location (/home/mysql/data).
        
        ```
        ls -al /home/mysql/data
        ```
        
2.  **Prepare the restore script**
    
    1.  Prepare the restore script.
        
        You can download the [MySQL Python script file](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20240415/tykevb/restore_from_downloads.py) to your local machine or an ECS instance.
        
        **Important**
        
        This script is for reference only. You need to adjust it based on your environment. Use it with caution.
        
    2.  Run the following command to grant permissions to the script.
        
        ```
        chmod +x ./<script_name>.py
        
        # Example
        chmod +x ./restore_from_downloads.py
        ```
        
3.  **Run the restore command**
    
    **Important**
    
    If an error message such as `Command 'python' not found` appears, it indicates that Python is not installed or the Python command is not in the system's search path. In this case, confirm the Python version installed on your system and use the correct command to run it. For example, if Python 3 is installed, you can use `python3 ./restore_from_downloads.py /home/mysql/data/test1.sql 127.0.0.1 3306 zhtxxxxx "#txxxxx"`.
    
    ```
    python ./<script_name>.py <path_to_CSV_or_SQL_file_directory> <database_host> <database_port> <database_account> <database_password>
    
    # Example
    python ./restore_from_downloads.py /home/mysql/data 127.0.0.1 3306 root "#Tes********"
    ```
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3716083961/p707474.png)
    

## **References**

-   This solution applies only to restoring snapshot backups from instances that use disks. To restore a backup from an instance that uses high-performance local disks, see [Restore an RDS for MySQL physical backup file to a self-managed database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-physical-backup-file-to-a-self-managed-mysql-database) or [Restore an RDS for MySQL logical backup file to a self-managed database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-logical-backup-file-to-a-self-managed-mysql-instance).
    
-   Alibaba Cloud also provides migration services. For more information, see [Migrate data from an RDS for MySQL instance to a self-managed MySQL database](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-a-self-managed-mysql-database).
    
-   For more data restoration solutions, see [Overview of data restoration solutions](/help/en/doc-detail/157519.html).
