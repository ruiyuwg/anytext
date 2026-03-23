ApsaraDB RDS for SQL Server provides an **instance-level** solution to migrate databases to the cloud. You can migrate the **full data of multiple or all databases** from a self-managed SQL Server instance to an ApsaraDB RDS for SQL Server instance. To do this, you must back up all databases on your self-managed SQL Server instance, upload the full backup files to the same folder in an OSS bucket, and then run the migration script.

**Note**

If you are performing a **database**\-level migration, which means you only need to migrate one database at a time, see [Migrating Full Backups to the Cloud](/help/en/rds/apsaradb-rds-for-sql-server/migrate-the-full-backup-data-of-a-self-managed-sql-server-instance-to-an-apsaradb-rds-for-sql-server-instance) and [Migrating Incremental Backups to the Cloud](/help/en/rds/apsaradb-rds-for-sql-server/migrate-the-incremental-backup-data-of-a-self-managed-sql-server-instance-to-an-apsaradb-rds-for-sql-server-instance).

## Prerequisites

-   The source database must be a self-managed SQL Server database.
    
-   The [destination ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance-1) must meet the following conditions:
    
    -   The available storage space of the instance **must be greater than** the size of the data files to be migrated. If the space is insufficient, [upgrade the instance specifications](/help/en/rds/apsaradb-rds-for-sql-server/change-the-specifications-of-an-apsaradb-rds-for-sql-server-instance#concept-efl-pln-wdb) in advance.
        
    -   For SQL Server 2008 R2 instances: [Create databases](/help/en/rds/apsaradb-rds-for-sql-server/create-a-database-and-account) on the destination instance that have the same names as the databases to be migrated. This step is not required for other SQL Server versions.
        
-   If you use a Resource Access Management (RAM) user, the following conditions must be met:
    
    -   The RAM user has the AliyunOSSFullAccess and AliyunRDSFullAccess permissions. For more information about how to grant permissions to a RAM user, see [Manage OSS permissions using RAM](/help/en/ram/use-cases/use-ram-to-manage-oss-permissions#task-ohn-ypx-ydb) and [Manage ApsaraDB RDS permissions using RAM](/help/en/ram/use-cases/use-ram-to-manage-apsaradb-rds-permissions#task-zqh-gqx-ydb).
        
    -   Your Alibaba Cloud account has granted the ApsaraDB RDS service account permissions to access your OSS resources.
        
        **Click to view the authorization method**
        
        1.  Go to the **Backup and Restoration** page of the ApsaraDB RDS instance and click **Migrate OSS Backup Data to RDS**.
            
        2.  In the **Import Guide**, click **Next** twice to proceed to step **3\. Import Data**.
            
            The authorization is complete if the message **You have authorized RDS official service account to access your OSS** is displayed in the lower-left corner of the page. If not, click the **Authorization URL** on the page to grant authorization.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9343202371/p872417.png)
            
        
    -   Your Alibaba Cloud account must manually [create an access policy](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m) and then attach the policy to the RAM user.
        
        **Click to view the policy content**
        
        ```
        {
            "Version": "1",
            "Statement": [
                {
                    "Action": [
                        "ram:GetRole"
                    ],
                    "Resource": "acs:ram:*:*:role/AliyunRDSImportRole",
                    "Effect": "Allow"
                }
            ]
        }
        ```
        

## Limitations

This solution supports only **full migration**. Incremental migration is not supported.

## Billing

If you use the method described in this topic to migrate data, you are charged only for the use of OSS buckets.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2517284671/CAEQFRiBgMDekN6v5xgiIDg0MWE0YWViMTM1MTQwNDhhNDkwYWM3NmUyYmRjOTQ53963382_20230830144006.372.svg)

**Scenario**

**Billing rule**

Upload backup files to an OSS bucket

Free of charge.

Store backup files in an OSS bucket

You are charged storage fees. For more information, visit the [Pricing](https://www.alibabacloud.com/zh/product/oss?spm=a3c0i.7990255.247275.8.7a40749en97oY9#pricing) page of OSS.

Migrate backup files from an OSS bucket to your RDS instance

-   If you migrate backup files from an OSS bucket to your RDS instance over an internal network, no fees are generated.
    
-   If you migrate backup files over the Internet, you are charged for the OSS bucket based on the outbound Internet traffic. For more information, visit the [Pricing](https://www.alibabacloud.com/zh/product/oss?spm=a3c0i.7990255.247275.8.7a40749en97oY9#pricing) page of OSS.
    

## Preparations

## 1\. **Install Python 3**

Go to the [official Python website](https://www.python.org/downloads/) to download and install the package for your operating system. **Select Python 3.12 or later**.

-   For Windows: During installation, **select** the `Add python.exe to PATH` checkbox to avoid manually configuring environment variables later.
    
-   For macOS or Linux: You can install Python from the official website or use a system package manager such as Homebrew, apt, or dnf. For more information, see the official Python documentation.
    

## 2\. **Verify the Python** installation and version

The name of the executable file may vary based on your operating system and installation method. Common names include python, python3, and py. **Try the following commands in order and use the one that corresponds to your installation.**

Windows (Command Prompt or PowerShell)

```
python --version
python3 --version
py --version
```

-   If the output is `Python 3.12.x` or a later version, Python is installed and ready to use.
    
-   If the message `'python' is not recognized as an internal or external command...` is returned, you must manually add the Python installation path to the system's PATH environment variable.
    

macOS/Linux (Terminal)

```
python --version
python3 --version
```

On some systems, the python command may still point to an older version. We recommend that you use the python3 command. Use the output to confirm that Python 3.12 or a later version is installed.

## 3\. Install SDK dependencies

```
pip install alibabacloud_rds20140815
pip install alibabacloud-oss-v2
```

## **1\. Back up all databases on the self-managed SQL Server instance**

**Important**

-   To ensure data consistency, do not write new data during the full backup. Plan the backup in advance to avoid service interruptions.
    
-   **If you do not use the backup script, you must name the backup files in the** `**DatabaseName_BackupType_BackupTime.bak**` **format**. For example, `Testdb_FULL_20180518153544.bak`. Otherwise, the migration will fail.
    

1.  Download the [backup script](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20220815/dcwq/1660544793749RDSBackupSpecifiedDatabasesToLocal.sql).
    
2.  Double-click the backup script file to open it using Microsoft SQL Server Management Studio (SSMS). For more information about how to connect using SSMS, see the [official documentation](https://learn.microsoft.com/zh-cn/sql/ssms/quickstarts/ssms-connect-query-sql-server?view=sql-server-ver15).
    
3.  Modify the following parameters as needed.
    
    **Click to view an example**
    
    ```
    SELECT
        /**
        * Databases list needed to backup, delimiter is : or ,
        * empty('') or null: means all databases excluding system database
        * example: '[testdb]: TestDR, Test, readonly'
        **/
        @backup_databases_list = N'[dtstestdata],[testdb]'
        @backup_type = N'FULL',                    -- Backup Type? FULL: FULL backup; DIFF: Differential backup; LOG: Log backup
        @backup_folder = N'C:\BACKUP'              -- Backup folder to store backup files.
        @is_run = 1                                -- Check or run? 1, run directly; 0, just check
    ```
    
    **Configuration item**
    
    **Description**
    
    @backup\_databases\_list
    
    The databases to be backed up. Separate multiple databases with semicolons (;) or commas (,).
    
    @backup\_type
    
    The backup type. Valid values:
    
    -   **FULL**: full backup.
        
    -   DIFF: differential backup.
        
    -   LOG: log backup.
        
    
    **Important**
    
    In this solution, set this parameter to **FULL**.
    
    @backup\_folder
    
    The local folder where the backup files are stored. If the folder does not exist, it is automatically created.
    
    @is\_run
    
    Specifies whether to perform the backup. Valid values:
    
    -   1: Perform the backup.
        
    -   0: Perform only a check without performing the backup.
        
    
4.  Run the backup script. The databases are backed up to the specified folder.
    
    ![备份脚本执行结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0649259951/p97253.png)
    

## 2\. Upload the backup files to OSS

1.  Before you upload the backup file to OSS, you must create a bucket in OSS.
    
    -   **If a bucket already exists in OSS, ensure that it meets the following requirements:**
        
        -   The [storage class](/help/en/oss/user-guide/overview-53/) of the bucket is **Standard**. Other storage classes, such as Infrequent Access, Archive, Cold Archive, and Deep Cold Archive, are not supported.
            
        -   [Server-side encryption](/help/en/oss/user-guide/server-side-encryption-8) is disabled for the bucket.
            
    -   **If no bucket exists in OSS, you must create one.** (Make sure that you have [activated OSS](/help/en/oss/getting-started/activate-oss#task-njz-hf4-tdb).)
        
        1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/), click **Buckets**, and then click **Create Bucket**.
            
        2.  Configure the following key parameters. You can retain the default values for other parameters.
            
            **Important**
            
            -   The bucket is created primarily for this data migration. you need to configure only the key parameters. You can delete the bucket after the migration is complete to prevent data breaches and reduce costs.
                
            -   When you create the bucket, do not enable [server-side encryption](/help/en/oss/user-guide/server-side-encryption-8).
                
            
            **Parameter**
            
            **Description**
            
            **Example**
            
            **Bucket Name**
            
            The name of the bucket. The name must be globally unique and cannot be changed after the bucket is created.
            
            Naming conventions:
            
            -   The name can contain only lowercase letters, digits, and hyphens (-).
                
            -   The name must start and end with a lowercase letter or a digit.
                
            -   The name must be 3 to 63 characters in length.
                
            
            migratetest
            
            **Region**
            
            The region where the bucket resides. If you upload data to the bucket from an ECS instance over the internal network and restore the data to an ApsaraDB RDS instance over the internal network, the bucket, ECS instance, and ApsaraDB RDS instance must be in the same region.
            
            China (Hangzhou)
            
            **Storage Class**
            
            Select **Standard**. The migration operation in this topic does not support buckets of other storage classes.
            
            Standard
            
2.  Upload the backup file to OSS.
    
    After you back up the local database, upload the backup file to an OSS bucket that is in the **same region** as your ApsaraDB RDS instance. If the bucket and the instance are in the same region, you can use the internal network for service interconnection. This method is free of charge for outbound internet traffic and provides faster data upload speeds. You can use one of the following methods:
    
    Use ossbrowser to upload the file (recommended)
    
    1.  Download [ossbrowser](/help/en/oss/developer-reference/install-ossbrowser-1-0#task-2065478).
        
    2.  The following steps use a Windows x64 operating system as an example. Decompress the downloaded `oss-browser-win32-x64.zip` package and double-click the `oss-browser.exe` application.
        
    3.  Select **Log On With AK**, configure the **AccessKeyId** and **AccessKeySecret** parameters, keep the default values for the other parameters, and then click **Log On**.
        
        **Note**
        
        An [AccessKey](/help/en/ram/create-an-accesskey-pair-1#task-2245479) pair is used for identity verification. Keep your AccessKey pair confidential to ensure data security.
        
        ![登录ossbrowser](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6273972471/p552538.png)
        
    4.  Click the destination bucket.![进入bucket中](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661485761/p552543.png)
        
    5.  Click ![上传图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7787095761/p552547.png), select the backup file that you want to upload, and then click Open. The local file is uploaded to OSS.
        
    
    Use the OSS console to upload the file
    
    **Note**
    
    If the backup file is smaller than 5 GB, we recommend that you upload it from the OSS console.
    
    1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
        
    2.  Click **Buckets** and then the name of the destination bucket.![网页进入bucket](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661485761/p552552.png)
        
    3.  In the **Objects** list, click **Upload Object**.![网页上传文件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6196239371/p552553.png)
        
    4.  You can drag a backup file to the **Files to Upload** area, or click **Select Files** to select a file.![网页扫描文件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661485761/p552554.png)
        
    5.  Click the **Upload Object** button at the bottom of the page to upload a local backup file to OSS.
        
    
    Use the OSS API for multipart upload (Python 3 project example)
    
    **Note**
    
    If the backup file is larger than 5 GB, we recommend that you call the OSS API to perform a multipart upload to the OSS bucket.
    
    ```
    # -*- coding: utf-8 -*-
    """
    Alibaba Cloud OSS Python SDK v2
    Dependency: pip install alibabacloud-oss-v2
    """
    
    import os
    import sys
    from pathlib import Path
    import alibabacloud_oss_v2 as oss
    from alibabacloud_oss_v2 import exceptions as oss_ex
    
    
    def get_client_from_env(region: str, endpoint: str | None = None) -> oss.Client:
        """
        Create a v2 client from environment variables.
        - Prioritize using Region (recommended), but also support custom Endpoints (optional).
        - Compatible with both AK and STS:
            * AK: Requires OSS_ACCESS_KEY_ID / OSS_ACCESS_KEY_SECRET
            * STS: Also requires OSS_SESSION_TOKEN (compatible with the old variable OSS_SECURITY_TOKEN)
        """
        # Compatibility: If the user uses the old variable OSS_SECURITY_TOKEN, map it to the v2 expected OSS_SESSION_TOKEN
        sec_token_legacy = os.getenv("OSS_SECURITY_TOKEN")
        if sec_token_legacy and not os.getenv("OSS_SESSION_TOKEN"):
            os.environ["OSS_SESSION_TOKEN"] = sec_token_legacy
    
        ak = os.getenv("OSS_ACCESS_KEY_ID")
        sk = os.getenv("OSS_ACCESS_KEY_SECRET")
        st = os.getenv("OSS_SESSION_TOKEN")  # STS Token (optional)
    
        if not (ak and sk):
            raise ValueError("No valid AK found. Set the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables. "
                             "If using STS, also set OSS_SESSION_TOKEN (or the old name OSS_SECURITY_TOKEN).")
    
        # Indicate the type of credential used
        if st:
            print("STS Token (OSS_SESSION_TOKEN) detected. Using STS credentials.")
        else:
            print("No STS Token detected. Using AccessKey (AK) credentials.")
    
        credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()
        cfg = oss.config.load_default()
        cfg.credentials_provider = credentials_provider
    
        # Basic network configuration
        cfg.region = region  # Example: 'cn-hangzhou'
        if endpoint:
            # Optional: Custom Endpoint (e.g., internal network, accelerated, dedicated domain)
            cfg.endpoint = endpoint
    
        # You can also add other configurations here, such as: cfg.use_accelerate_endpoint = True
        return oss.Client(cfg)
    
    
    def resumable_upload_file_v2(
        client: oss.Client,
        bucket_name: str,
        object_key: str,
        file_path: str,
        part_size: int = 1 * 1024 * 1024,
        parallel_num: int = 4,
        checkpoint_dir: str | None = None,
    ):
        """
        Implement concurrent multipart upload with resumable upload.
    
        :param client: Initialized oss.Client
        :param bucket_name: Destination bucket name
        :param object_key: Destination object key (without bucket name)
        :param file_path: Full path of the local file
        :param part_size: Part size in bytes, default is 1 MB
        :param parallel_num: Number of concurrent upload threads, default is 4
        :param checkpoint_dir: Directory to store breakpoint information; if None, resumable upload is disabled
        """
        file_path = str(file_path)
        if not Path(file_path).exists():
            raise FileNotFoundError(f"Error: Local file not found. Check the file_path configuration: {file_path}")
    
        # Construct the Uploader; enable resumable upload based on whether checkpoint_dir is provided
        if checkpoint_dir:
            uploader = client.uploader(
                enable_checkpoint=True,
                checkpoint_dir=checkpoint_dir,
                part_size=part_size,
                parallel_num=parallel_num,
            )
        else:
            uploader = client.uploader(
                part_size=part_size,
                parallel_num=parallel_num,
            )
    
        print(f"Starting to upload file: {file_path}")
        print(f"Destination Bucket: {bucket_name}")
        print(f"Destination Object: {object_key}")
        print(f"Part size: {part_size} bytes, Concurrency: {parallel_num}")
        if checkpoint_dir:
            print(f"Resumable upload: Enabled (checkpoint_dir={checkpoint_dir})")
        else:
            print("Resumable upload: Disabled (set checkpoint_dir to enable)")
    
        # Execute the upload (Uploader automatically chooses between multi/single part concurrent upload based on size)
        result = uploader.upload_file(
            oss.PutObjectRequest(bucket=bucket_name, key=object_key),
            filepath=file_path,
        )
    
        print("-" * 30)
        print("File uploaded successfully!")
        print(f"HTTP Status: {result.status_code}")
        print(f"ETag: {result.etag}")
        print(f"Request ID: {result.request_id}")
        # CRC-64 checksum; v2 enables data validation by default
        print(f"CRC64: {result.hash_crc64}")
        print("-" * 30)
    
    
    def main():
        # Before running the code example, make sure you have set the corresponding environment variables.
        # macOS/Linux:
        #   AK method:
        #     export OSS_ACCESS_KEY_ID=YOUR_AK_ID
        #     export OSS_ACCESS_KEY_SECRET=YOUR_AK_SECRET
        #   STS method:
        #     export OSS_ACCESS_KEY_ID=YOUR_STS_ID
        #     export OSS_ACCESS_KEY_SECRET=YOUR_STS_SECRET
        #     export OSS_SECURITY_TOKEN=YOUR_STS_TOKEN
        #
        # Windows:
        #   Powershell: $env:OSS_ACCESS_KEY_ID="YOUR_AK_ID"
        #   cmd: set OSS_ACCESS_KEY_ID=YOUR_AK_ID
    
        # ===================== Parameters (modify as needed) =====================
        # Region example: 'cn-hangzhou'; we recommend using Region first
        region = "cn-hangzhou"
    
        # Optional: Custom Endpoint (for internal network, dedicated domain, accelerated domain name, etc.)
        # Example: 'https://oss-cn-hangzhou.aliyuncs.com'
        endpoint = 'https://oss-cn-hangzhou.aliyuncs.com'  
    
        # Bucket and Object
        bucket_name = "examplebucket"
        object_key = "test.bak"
    
        # Full path of the local file to upload.
        # Windows example: r'D:\localpath\examplefile.txt'  (note the r at the beginning)
        # macOS/Linux example: '/Users/test/examplefile.txt'
        file_path = r"D:\oss\test.bak"
    
        # Sharding and concurrency
        part_size = 1 * 1024 * 1024  # Default is 1 MB; OSS requires a minimum part size of 100 KB
        parallel_num = 4
    
        # Resumable upload directory (pass None to disable; we recommend specifying a writable directory)
        checkpoint_dir = str(Path.cwd() / ".oss_checkpoints")
        # =================== End of parameters ===================
    
        print("Script execution starts...")
        try:
            client = get_client_from_env(region=region, endpoint=endpoint)
            # If resumable upload is enabled, make sure the directory exists
            if checkpoint_dir:
                Path(checkpoint_dir).mkdir(parents=True, exist_ok=True)
    
            resumable_upload_file_v2(
                client=client,
                bucket_name=bucket_name,
                object_key=object_key,
                file_path=file_path,
                part_size=part_size,
                parallel_num=parallel_num,
                checkpoint_dir=checkpoint_dir,
            )
        except FileNotFoundError as e:
            print(e)
        except oss_ex.ServiceError as e:
            # Error returned by the OSS server
            print("\nAn OSS server-side error occurred.")
            print(f"HTTP Status: {getattr(e, 'status_code', 'N/A')}")
            print(f"Error Code: {getattr(e, 'code', 'N/A')}")
            print(f"Message: {getattr(e, 'message', 'N/A')}")
            print(f"Request ID: {getattr(e, 'request_id', 'N/A')}")
            print(f"Endpoint: {getattr(e, 'request_target', 'N/A')}")
        except oss_ex.BaseError as e:
            # SDK local/serialization/deserialization/credential errors
            print("\nAn OSS SDK client-side error occurred.")
            print(str(e))
        except Exception as e:
            print(f"\nAn unknown error occurred: {e}")
    
    
    if __name__ == "__main__":
        main()
    ```
    

## 3\. Run the migration script to migrate the databases to ApsaraDB RDS

1.  Download the [SQL Server migration script](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250923/bysjfg/RDSSQLCreateMigrateTasksBatchly.zip).
    
2.  After you decompress the package, run the following command to view the required parameters for the script.
    
    ```
    python ~/Downloads/RDSSQLCreateMigrateTasksBatchly.py -h
    ```
    
    The following result is returned:
    
    ```
    RDSSQLCreateMigrateTasksBatchly.py -k <access_key_id> -s <access_key_secret> -i <rds_instance_id> -e <oss_endpoint> -b <oss_bucket> -d <directory>
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    access\_key\_id
    
    The AccessKey ID of the Alibaba Cloud account that owns the destination ApsaraDB RDS instance.
    
    access\_key\_secret
    
    The AccessKey secret of the Alibaba Cloud account that owns the destination ApsaraDB RDS instance.
    
    rds\_instance\_id
    
    The ID of the destination ApsaraDB RDS instance.
    
    oss\_endpoint
    
    The [endpoint of the bucket](/help/en/oss/bucket-overview-page) where the backup files are stored.
    
    oss\_bucket
    
    The name of the bucket where the backup files are stored.
    
    directory
    
    The folder in the OSS bucket where the backup files are stored. If the files are in the root directory, enter `/`.
    
3.  Run the migration script to complete the migration task.
    
    This example shows how to migrate all eligible backup files from the `Migrationdata` folder in the `testdatabucket` OSS bucket to an ApsaraDB RDS for SQL Server instance with the ID rm-2zesz5774ud8s\*\*\*\*.
    
    ```
    python ~/Downloads/RDSSQLCreateMigrateTasksBatchly.py -k yourAccessKeyID -s yourAccessKeySecret -i rm-2zesz5774ud8s**** -e oss-cn-beijing.aliyuncs.com -b testdatabucket -d Migrationdata
    ```
    

## **4\. View the migration task progress**

Select a method based on the version of your ApsaraDB RDS for SQL Server instance.

## **SQL Server 2012 and later**

In the navigation pane on the left of the ApsaraDB RDS instance, click **Backup and Restoration**. On the ****Cloud Migration Records of Backup Data**s** tab, you can view the migration records, including the task status, start time, and end time. By default, records from the last week are displayed. You can adjust the time range as needed.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4404070571/p962075.png)

**Note**

If the **Task Status** is **Failed**, check the **Task Description** or click **View File Details** for the failed migration task to identify the cause of the failure. After you fix the issue, run the data migration script again.

## SQL Server 2008 R2

In the navigation pane on the left of the ApsaraDB RDS instance, click **Data Migration To Cloud**. Find the target migration task to view its progress.

**Note**

If the **Task Status** is **Failed**, check the **Task Description** or click **View File Details** for the failed migration task to identify the cause of the failure. After you fix the issue, run the data migration script again.

## Common errors

**Error message**

**Cause**

**Solution**

`HTTP Status: 404 Error:InvalidAccessKeyId.NotFound Specified access key is not found. RequestID: XXXXXXXXXXXXXXXXX`

The AccessKey ID used to call the OpenAPI operation is incorrect.

Enter the correct [AccessKey ID and AccessKey secret](/help/en/ram/support/faq-about-accesskey-pairs).

`HTTP Status: 400 Error:IncompleteSignature The request signature does not conform to Aliyun standards. server string to sign is:......`

The AccessKey secret used to call the OpenAPI operation is incorrect.

`RDS engine doesn't support, this is only for RDS SQL Server engine.`

This solution supports only ApsaraDB RDS for SQL Server. Other database engines are not supported.

Use an ApsaraDB RDS for SQL Server instance as the destination instance.

`Couldn't find specify RDS [XXX].`

The ApsaraDB RDS instance ID does not exist.

Check whether the ApsaraDB RDS instance ID is correct.

`{'status': -2, 'request-id': '', 'details': "RequestError: HTTPConnectionPool(host='xxxxxxxxxxxxxxxxx', port=80): Max retries exceeded with url: /?bucketInfo= (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x10e996490>: Failed to establish a new connection: [Errno 8] nodename nor servname provided, or not known',))"}`

The endpoint is incorrect, which causes the connection to fail.

Check whether the specified [endpoint](/help/en/oss/bucket-overview-page) is correct.

`{'status': 404,'-id': 'xxxxxxxxx', 'details': {'HostId': 'xxxxxxxxx', 'Message': 'The specified bucket does not exist.', 'Code': 'NoSuchBucket', 'RequestId': 'xxxxxxxx', 'BucketName': 'aaaatp-test-on-ecs'}}`

The OSS bucket does not exist.

Check whether the specified OSS bucket is correct.

`There is no backup file on OSS Bucket [xxxxxx] under [xxxxxxxxx] folder, check please.`

The specified folder does not exist in the OSS bucket, or the folder does not contain eligible database backup files.

Check whether the folder exists in the OSS bucket and whether the folder contains eligible database backup files.

`Warning!!!!!, [autotest_2005_ent_broken_full_dbcc_failed.bak] is not backup file, filtered.`

The backup file name does not follow the naming convention.

If you do not use the backup script, you must name the backup files in the `database_name_backup_type_backup_time.bak` format. For example, `Testdb_FULL_20180518153544.bak`.

`HTTP Status: 403 Error:Forbidden.RAM The user is not authorized to operate the specified resource, or this operation does not support RAM. RequestID: xxxxx{'status': 403, 'request-id': 'xxxx', 'details': {'HostId': 'atp-test-on-ecs.oss-cn-beijing.aliyuncs.com', 'Message': 'The bucket you visit is not belong to you.', 'Code': 'AccessDenied', 'RequestId': 'xxxx'}}`

The RAM user does not have sufficient permissions.

You must [grant the RAM user the permissions to use OSS and ApsaraDB RDS](#section-j2c-urk-q9l) (the **AliyunOSSFullAccess** and **AliyunRDSFullAccess** permissions).

`OPENAPI Response Error !!!!! : HTTP Status: <Http Status Code> Error:<Error> <Description>. RequestID: 32BB6886-775E-4BB7-A054-635664****`

An error message was returned when calling an OpenAPI operation.

Analyze the cause based on the [error code and error message](#table-pjc-fbm-cgb).

OpenAPI error codes

**HTTP Status Code**

**Error**

**Description**

**Description**

403

InvalidDBName

The specified database name is not allowed.

The database name is invalid. You cannot use system database names.

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

The ApsaraDB RDS instance is in an invalid state. For example, the instance status is **Creating**.

400

IncorrectDBInstanceType

Current DB instance type does not support this operation.

The database engine is not supported. This feature is available only for ApsaraDB RDS for SQL Server.

400

IncorrectDBInstanceLockMode

Current DB instance lock mode does not support this operation.

The database is in an invalid lock state.

400

InvalidDBName.NotFound

Specified one or more DB name does not exist or DB status does not support.

The database does not exist.

-   For ApsaraDB RDS for SQL Server 2008 R2, you must first create a database with the same name.
    
-   For ApsaraDB RDS for SQL Server 2012 and later, a database with the same name cannot exist.
    

400

IncorrectDBType

Current DB type does not support this operation.

The database type does not support this operation.

400

IncorrectDBState

Current DB state does not support this operation.

The database is in an invalid state. For example, the database is being created or a migration task is in progress.

400

UploadLimitExceeded

UploadTimesQuotaExceeded: Exceeding the daily upload times of this DB.

The number of migration operations exceeds the limit. You can perform a maximum of 20 migration operations per database on each instance per day.

400

ConcurrentTaskExceeded

Concurrent task exceeding the allowed amount.

The number of migration operations exceeds the limit. You can perform a maximum of 500 migration operations on each instance per day.

400

IncorrectFileExtension

The file extension does not support.

The file extension of the backup file is invalid.

400

InvalidOssUrl

Specified oss url is not valid.

The provided OSS download URL is unavailable.

400

BakFileSizeExceeded

Exceeding the allowed bak file size.

The database backup file exceeds the size limit. The maximum size is 3 TB.

400

FileSizeExceeded

Exceeding the allowed file size of DB instance.

The restored backup file will exceed the storage capacity of the current instance.

## Related API operations

**API**

**Description**

[CreateMigrateTask](/help/en/rds/api-create-a-migration-task#doc-api-Rds-CreateMigrateTask)

Restores a backup file from OSS to an ApsaraDB RDS for SQL Server instance and creates a data migration task.

[CreateOnlineDatabaseTask](/help/en/rds/api-open-the-database-to-which-backup-data-is-migrated#doc-api-Rds-CreateOnlineDatabaseTask)

Opens the database of an ApsaraDB RDS for SQL Server data migration task.

[DescribeMigrateTasks](/help/en/rds/api-query-backup-data-migration-tasks#doc-api-Rds-DescribeMigrateTasks)

Queries the list of data migration tasks for an ApsaraDB RDS for SQL Server instance.

[DescribeOssDownloads](/help/en/rds/api-query-backup-data-files-of-migration-task#doc-api-Rds-DescribeOssDownloads)

Queries the file details of an ApsaraDB RDS for SQL Server data migration task.
