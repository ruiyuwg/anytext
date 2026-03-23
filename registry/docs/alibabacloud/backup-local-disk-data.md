To improve data security and prevent data loss or corruption caused by accidental deletion, modification, or overwriting, you can back up files stored on local disks regularly. This topic describes three common backup methods: regular backup using the Cloud Backup service, backup to Object Storage Service (OSS), and backup to cloud disks or File Storage NAS (NAS). This topic does not apply to backing up self-managed databases.

**Important**

This topic applies only to backing up files on a local disk. If your local disk stores a database and you need to back up the database, see [Back up self-managed databases on ECS](/help/en/cloud-backup/user-guide/ecs-hosted-database-overview).

## Method 1: Use Cloud Backup to back up data stored on a local disk on a regular basis

**Scenario**

**Limit**

**Benefit**

**Billing**

Cloud Backup supports regular backup of files or directories on ECS instances (such as backing up local disks or self-managed Oracle/MySQL/SQL Server databases) and data restoration when needed. Cloud Backup is suitable for scenarios that require highly reliable backup solutions. For more information about Cloud Backup, see [Advantages of Cloud Backup?](/help/en/cloud-backup/product-overview/advantages)

-   Cloud Backup is not supported in specific regions. For information about the regions that support Cloud Backup, see [Supported regions](/help/en/cloud-backup/product-overview/supported-regions).
    
-   Cloud Assistant Agent must be installed on the instance.
    

-   SaaS-based cloud backup service, convenient and efficient
    
-   No need to compile scripts
    
-   File content-level deduplication and compression to save storage costs
    
-   Support for backup and recovery
    

You are charged for **file backup software usage** and **storage capacity**. For information about billing, see [ECS file backup fees](/help/en/cloud-backup/user-guide/ecs-file-backup-overview#section-gbp-k0w-479).

#### **Procedure**

1.  Make preparations.
    
    -   Make sure that Cloud Backup is supported in the region where the local disk you want to back up resides. For information about the regions that support Cloud Backup, see [Supported regions](/help/en/cloud-backup/product-overview/supported-regions).
        
    -   Make sure that Cloud Assistant Agent is installed on the instance equipped with the local disk.
        
        **Important**
        
        If the instance was purchased after December 1, 2017, Cloud Assistant Agent is provisioned on the instance. If Cloud Assistant Agent is not installed, you must install it on the instance. For more information, see [Install Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent#undefined).
        
2.  Log on to the [Cloud Backup console](https://hbr.console.alibabacloud.com) and select the region where the local disk resides.
    
3.  In the navigation pane on the left, choose **Backup** > **ECS File Backup**. On the **ECS Instances** tab, find the instance equipped with the local disk and click **Back Up** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2744553271/p824057.png)
    
4.  On the **Create Backup Plan** panel, configure parameters as prompted and click **OK**.
    
    Take note of the following configurations. For information about other parameters, see [Create a backup plan to periodically back up ECS files](/help/en/cloud-backup/user-guide/back-up-files-from-an-ecs-instance#section-ljd-99d-mgl):
    
    -   **Backup Folder Rule**: Select **Specified Folders**.
        
    -   **Source Paths**: Enter the absolute data storage path of the local disk you want to back up. You can enter multiple paths. For information about the rules, see the prompts.
        
    -   **Backup Policy**: Select a backup policy that specifies parameters such as the backup time, backup cycle, and backup retention period. If no backup policy appears, create a backup policy first. For more information, see [Create a backup policy](/help/en/cloud-backup/user-guide/manage-backup-policies#section-49a-5tg-0ij).
        
    
    When the backup time in the backup policy is reached, the system runs the backup job. If the **Status** of the backup job is Completed, the backup job is completed for the current day. You can view the backup points in the backup history.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2744553271/p824063.png)
    

###### **Related operations**

-   **Restore data**: After you back up data from a local disk to a cloud backup vault, you can restore files using historical backup points if the files are missing or corrupted. For more information, see [Restore ECS files](/help/en/cloud-backup/user-guide/restore-files-to-an-ecs-instance).
    
-   **Browse and download backup files:** For more information, see [Browse and download backup files](/help/en/cloud-backup/user-guide/back-up-files-from-an-ecs-instance#7a0d53c1e0f2e).
    

## **Method 2:** Back up data from a local disk to OSS on a regular basis

You can run the `ossutil` and `crontab` commands and compile an automated script to back up data from a local disk to OSS regularly.

**Scenario**

**Features**

**Billing**

This method is suitable for large-scale data backup scenarios, ideal for storage solutions that require low cost and high reliability. For more information about OSS, see [Benefits](/help/en/oss/benefits).

You need to write a script.

You are charged OSS storage fees. For more information, see [Storage fees](/help/en/oss/storage-fees).

**Important**

This solution provides a basic example that describes a fundamental approach. It has limitations, and you will need to enhance and supplement it to meet your specific business requirements.

For example, full backup is performed each time, which causes incremental increases in storage space usage over time, or entire directories are packaged in ZIP files, which reduces backup speed and storage efficiency. In real business scenarios, you can use custom backup policies as needed. Examples:

-   Incremental or differential backups: Back up only the modified data since the previous backup to improve storage efficiency and accelerate the backup process.
    
-   Block backup: Before you back up data, you can divide the data set into multiple blocks or group the data based on logic such as the directory structure and file type.
    

#### **Procedure**

1.  Make preparations.
    
    -   Activate OSS and create an OSS bucket. For more information, see [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4).
        
    -   Obtain the OSS bucket name, OSS endpoint, and data storage path of the local disk you want to back up.
        
2.  Log on to the ECS instance.
    
3.  Install the ossutil tool and configure the access credentials.
    
    **Important**
    
    To download the ossutil tool, make sure that the ECS instance equipped with the local disk has access to the Internet. For more information, see [How do I enable Internet access for an ECS instance?](/help/en/ecs/user-guide/best-practices-for-configuring-public-bandwidth)
    
    1.  Install ossutil.
        
        ```
        sudo yum install unzip -y
        sudo -v ; curl https://gosspublic.alicdn.com/ossutil/install.sh | sudo bash
        ```
        
    2.  Configure the access credentials of ossutil.
        
        Create a `.ossutilconfig` file in the user directory and configure the credentials.
        
        ```
        sudo -i  # Switch to the root user. If the current user does not have sudo permissions, use other logon methods or grant the permissions.
        
        cat <<EOF > /root/.ossutilconfig
        [Credentials]
        language=EN
        endpoint=YourEndpoint
        accessKeyID=YourAccessKeyId
        accessKeySecret=YourAccessKeySecret
        EOF
        ```
        
        Replace `YourEndpoint`, `YourAccessKeyId`, and `YourAccessKeySecret` with your actual information.
        
4.  Implement scheduled backup.
    
    1.  Install the compression tool. In this example, the `zip` tool is installed.
        
        ```
        sudo yum install zip
        ```
        
    2.  Compile the backup script. In this example, the script is named backup\_to\_oss.sh.
        
        The following code provides a sample script. You must modify the script as needed. The sample script is used to compress local disk data into a ZIP package and back up the ZIP package to the specified OSS bucket.
        
        -   `/path/to/your/local/data`: Replace the value with the actual directory in which the local disk stores data.
            
        -   `your-bucket-name`: Replace the value with the name of your OSS bucket.
            
        -   `path/in/oss/to/store/backups/`: Replace the value with the directory in OSS where you want to store the backup file.
            
        -   `/path/to/backup_tmp/`: Used for temporarily storing the packaged ZIP files. After the ZIP files are successfully uploaded to OSS, they are deleted to free up space. Replace this with a temporary backup directory that has sufficient space.
            
        
        ```
        #!/bin/bash
        
        LOCAL_DIR="/path/to/your/local/data/"
        BACKUP_TMP_DIR="/path/to/backup_tmp/"
        OSS_BUCKET="your-bucket-name"
        OSS_PREFIX="path/in/oss/to/store/backups/"
        SYNC_TIME_FILE="/var/tmp/last_backup.timestamp"
        OSSUTIL_PATH="/usr/bin/ossutil"
        LOG_FILE="/var/log/backup_to_oss.log"
        DATE_STAMP=$(date +%Y%m%d%H%M%S)
        ZIP_FILE_NAME="backup_$DATE_STAMP.zip"
        
        # Check whether the ZIP tool is installed.
        if ! command -v zip &> /dev/null; then
            echo "zip command not found. Please install zip." >&2
            exit 1
        fi
        
        # Check whether LOCAL_DIR exists and is not empty.
        if [ -z "$(ls -A "$LOCAL_DIR")" ]; then
            echo "No files to backup in $LOCAL_DIR" | tee -a "$LOG_FILE"
            exit 0
        fi
        
        # Package the files that you want to back up and capture error outputs.
        (cd "$LOCAL_DIR" && zip -r "$BACKUP_TMP_DIR/$ZIP_FILE_NAME" .) >> "$LOG_FILE" 2>&1 || {
            echo "Failed to create ZIP archive. Error: $(zip -r "$BACKUP_TMP_DIR/$ZIP_FILE_NAME" . 2>&1)" | tee -a "$LOG_FILE"
            exit 1
        }
        
        if [ $? -eq 0 ]; then
            # Use ossutil to upload a ZIP file.
            OSS_PATH="oss://$OSS_BUCKET/$OSS_PREFIX$ZIP_FILE_NAME"
            if "$OSSUTIL_PATH" cp "$BACKUP_TMP_DIR/$ZIP_FILE_NAME" "$OSS_PATH" >> "$LOG_FILE" 2>&1; then
                echo "Uploaded: $ZIP_FILE_NAME" | tee -a "$LOG_FILE"
            else
                echo "Failed to upload: $ZIP_FILE_NAME" | tee -a "$LOG_FILE"
            fi
            rm "$BACKUP_TMP_DIR/$ZIP_FILE_NAME" # Delete the local ZIP file after a successful upload.
        else
            echo "Failed to create ZIP archive." | tee -a "$LOG_FILE"
        fi
        
        # Record the backup time even if the backup fails to avoid re-uploading the same content.
        date +%s > "$SYNC_TIME_FILE"
        echo "Backup process completed." | tee -a "$LOG_FILE"
        ```
        
5.  Grant the permissions to run the script and test the script.
    
    ```
    sudo chmod +x /home/backup_to_oss.sh
    ./backup_to_oss.sh
    ```
    
    Make sure that the script runs as expected and the data can be uploaded to OSS.
    
6.  Run the `crontab -e` command to open the crontab editor and add a line to schedule your backup script. For example, run the following command to run the backup script at 02:00 every day:
    
    ```
    0 2 * * * /home/backup_to_oss.sh
    ```
    
    `/home/backup_to_oss.sh`: Replace the value with the actual storage path of the script.
    
7.  You can configure other settings as needed.
    
    -   **(Optional) Run the script on system startup.**
        
        1.  Create the `backup_to_oss.service` file.
            
            ```
            sudo vi /etc/systemd/system/backup_to_oss.service
            ```
            
        2.  In the file, add the following content. Press the Esc key, enter `:wq`, and then press the Enter key to save and close the file.
            
            ```
            [Unit]
            Description=Back to OSS
            After=network.target
            
            [Service]
            ExecStart=/home/backup_to_oss.sh
            RestartSec=3
            Restart=always
            
            [Install]
            WantedBy=default.target
            ```
            
        3.  Run the following command to reload the systemd configuration:
            
            ```
            sudo systemctl daemon-reload
            ```
            
        4.  Run the following commands to start the script and configure the script to start on system startup:
            
            ```
            sudo systemctl start backup_to_oss.service
            sudo systemctl enable backup_to_oss.service
            ```
            
        
    -   **(Optional) Specify the retention period of backup files in OSS.**
        
        1.  Create an on-premises file and configure lifecycle rules in the XML format in the file.
            
            ```
            vim OSSLifecycleConfig.xml
            ```
            
            In the following example, a rule is configured to store the file in the test/ path of the bucket for 30 days, and all files stored longer than 30 days are deleted. You can modify the rule as needed. For more information about rule parameters, see [lifecycle](/help/en/oss/developer-reference/lifecycle#section-saz-heb-epb).
            
            ```
            <?xml version="1.0" encoding="UTF-8"?>
            <LifecycleConfiguration>
              <Rule>
                <ID>test-rule1</ID>
                <Prefix>test/</Prefix>
                <Status>Enabled</Status>
                <Expiration>
                  <Days>30</Days>
                </Expiration>
              </Rule>
            </LifecycleConfiguration>
            ```
            
        2.  ossutil reads and adds the lifecycle configurations to the specified bucket.
            
            ```
            ossutil lifecycle --method put oss://bucketname OSSLifecycleConfig.xml
            ```
            
            `bucketname`: Replace the value with the actual OSS bucket name.
            
        

###### **Download backup data**

You can download data that is backed up from OSS in the OSS console or using ossutil. For more information, see [Simple download](/help/en/oss/user-guide/simple-download-1).

## Method 3: Back up data from a local disk to a cloud disk or NAS file system attached to the same instance on a regular basis

Periodically compress local disk data into a ZIP package and back up the data to a specific path of the cloud disk or NAS file system.

**Scenario**

**Features**

**Billing**

-   Cloud disk: suitable for scenarios in which online storage and easy access to backup files are required.
    
-   NAS file system: suitable for data sharing and backup, or scenarios in which quick access to backup data is required.
    

You need to write a script.

-   Backup to a cloud disk: You are charged for the cloud disk. For information about billing, see [Billing of cloud disks](/help/en/ecs/block-storage-devices#section-gd6-jrq-0jf).
    
-   Backup to a NAS file system: NAS fees are generated. For information about billing, see [Billing overview](/help/en/nas/product-overview/overview-1).
    

**Important**

This solution provides a basic example that describes a fundamental approach. It has limitations, and you will need to enhance and supplement it to meet your specific business requirements.

For example, full backup is performed each time, which causes incremental increases in storage space usage over time, or entire directories are packaged in ZIP files, which reduces backup speed and storage efficiency. In real business scenarios, you can use custom backup policies as needed. Examples:

-   Incremental or differential backups: Back up only the modified data since the previous backup to improve storage efficiency and accelerate the backup process.
    
-   Block backup: Before you back up data, you can divide the data set into multiple blocks or group the data based on logic such as the directory structure and file type.
    

#### **Procedure**

1.  Make preparations.
    
    -   Create a data disk for the instance equipped with the local disk, and attach and initialize the data disk. Alternatively, mount a NAS file system to the instance.
        
        For more information, see [Guide to creating and using disks](/help/en/ecs/user-guide/quickly-create-and-use-disks/) or [Create a NAS file system and mount it to an ECS instance](/help/en/nas/getting-started/quick-start#section-dti-pds-5oq).
        
    -   Obtain the mount path of the cloud disk or NAS file system, and the data storage path of the local disk you want to back up.
        
2.  Configure scheduled backup.
    
    1.  Log on to the ECS instance.
        
    2.  Install the ZIP tool. In the following example, Alibaba Cloud Linux is used.
        
        ```
        sudo yum install zip
        ```
        
    3.  Compile the backup script. In this example, the script is stored in the /home/backup\_script.sh directory.
        
        Run the following command to compile and save the script:
        
        ```
        vim /home/backup_script.sh
        ```
        
        In the following example, a script is compiled to compress local disk data into a ZIP package and back up the ZIP package to a specific path. Modify the script as needed:
        
        -   `/path/to/local_disk/`: Replace the value with the absolute data storage path of the local disk you want to back up.
            
        -   `/path/to/backup/`: Replace the value with the destination path of the data you want to back up.
            
        
        ```
        #!/bin/bash
        
        # Configure variables.
        LOCAL_DISK="/path/to/local_disk/"
        NAS_MOUNT="/path/to/backup/"
        ZIP_NAME="backup_$(date +%Y%m%d%H%M%S).zip"
        LOG_FILE="/var/log/backup_to_nas.log"
        
        # Make sure that the ZIP tool is installed.
        if ! command -v zip &> /dev/null; then
            echo "Error: zip command not found. Please install zip." >&2
            exit 1
        fi
        
        # Back up data.
        echo "Starting backup at $(date)" >> "$LOG_FILE"
        zip -r "$NAS_MOUNT/$ZIP_NAME" "$LOCAL_DISK" >> "$LOG_FILE" 2>&1
        if [ $? -eq 0 ]; then
            echo "Backup completed successfully at $(date)" | tee -a "$LOG_FILE"
            echo "Backup file: $NAS_MOUNT/$ZIP_NAME" | tee -a "$LOG_FILE"
        else
            echo "Backup failed. Check log for details." >> "$LOG_FILE"
            exit 1
        fi
        
        # Clear expired backups. For example, retain the backups within the previous 30 days.
        
        # find "$NAS_MOUNT" -type f -name 'backup_*' -mtime +30 -delete >> "$LOG_FILE" 2>&1
        # if [ $? -eq 0 ]; then
        #    echo "Old backups cleaned up successfully." >> "$LOG_FILE"
        # else
        #    echo "Error occurred while cleaning up old backups. Check log for details." >> "$LOG_FILE"
        # fi
        
        echo "Backup process finished at $(date)" >> "$LOG_FILE"
        ```
        
    4.  Save the script and grant the permissions to run the script.
        
        ```
        sudo chmod +x /home/backup_script.sh
        ```
        
        `/home/backup_script.sh`: Replace the value with the actual storage path of the script.
        
    5.  Run the `crontab -e` command to open the crontab editor and add a line to schedule your backup script. For example, run the following command at 02:00 every day:
        
        ```
        0 2 * * * /home/backup_script.sh
        ```
        
        `/home/backup_script.sh`: Replace the value with the actual storage path of the script.
        
    6.  **(Optional) Run the script on system startup.**
        
        1.  Create the `backup_script.service` file.
            
            ```
            sudo vi /etc/systemd/system/backup_script.service
            ```
            
        2.  In the file, add the following content. Press the Esc key, enter `:wq`, and then press the Enter key to save and close the file.
            
            ```
            [Unit]
            Description=Backup Files Script
            After=network.target
            
            [Service]
            ExecStart=/home/backup_script.sh
            
            [Install]
            WantedBy=default.target
            ```
            
        3.  Run the following command to reload the systemd configuration:
            
            ```
            sudo systemctl daemon-reload
            ```
            
        4.  Run the following commands to start the script and configure the script to start on system startup:
            
            ```
            sudo systemctl start backup_script.service
            sudo systemctl enable backup_script.service
            ```
            
        

###### **Download** backup data

-   Backup to a cloud disk: For more information, see [Upload or download files](/help/en/ecs/user-guide/upload-a-file-from-on-premises-to-an-ecs-instance/).
    
-   Backup to a NAS file system: For more information, see [Migrate data from a NAS file system to an on-premises storage system](/help/en/nas/user-guide/migrate-nas-data-to-a-local).
    

## **Related operations**

-   **Migrate data from a local disk to another ECS instance**
    
    You can migrate all data of one or more instances with local disks to another ECS instance with a few clicks, and store the data in the cloud disks attached to the destination instance. This way, the data of the source instances with local disks is backed up. For more information, see [Migrate servers to ECS instances](/help/en/smc/migrate-servers-to-ecs-instances).
    
-   **Handle local disk damages**
    
    If a local disk is damaged, Alibaba Cloud triggers a system event and sends you notifications, countermeasures, and event cycles. You can perform O&M based on scenarios. For more information, see [O&M scenarios and system events for instances equipped with local disks](/help/en/ecs/user-guide/operations-and-maintenance-scenarios-and-system-events-for-instances-equipped-with-local-disks).
