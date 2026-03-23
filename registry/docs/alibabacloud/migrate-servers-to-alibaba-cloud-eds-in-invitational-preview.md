Server Migration Center (SMC) supports migrating desktop systems from physical servers, on-premises virtualized environments (such as VMware, Xen, KVM, or Hyper-V), and other cloud providers (such as AWS, Azure, Google Cloud, or Tencent Cloud) to Alibaba Cloud Elastic Desktop Service (EDS) . This topic details the migration and validation process to facilitate your transition to a secure, elastic, and cloud-based office infrastructure.

**Note**

Elastic Desktop Service (EDS) is a secure, efficient, and user-friendly cloud desktop service that enables quick creation, deployment, and centralized management of desktop environments. By eliminating upfront investments in traditional hardware, EDS helps you build a secure, high-performance, and cost-effective enterprise desktop system. It is widely adopted in industries requiring strict data security and high-performance computing (HPC), such as finance, design, media, and education. For more information, see [What is Elastic Desktop Service (EDS) Enterprise?](/help/en/wuying-workspace/product-overview/what-is-elastic-desktop-service).

## Limitations

-   Migration to EDS is currently supported for **Windows** source servers only. The following versions are **not** supported:
    
    -   Windows 8.1 and earlier
        
    -   Windows 11
        
    -   Windows Server 2016 and earlier
        
-   Only the system disk (boot volume) is migrated. Data disks are **excluded** from the migration. You must synchronize content on data disks (e.g., D:\\ or E:\\ drives) using alternative methods, such as manually backing up data to OSS or using an internal network transfer tool. Once the migration is complete, you must manually attach the data disks to the cloud computer.
    

## Migration impact

Before you migrate, consider the following impacts.

**Item**

**Description**

Intermediate instance

Do not interfere with the intermediate instance.

To prevent migration failure, do not stop, start, restart, or release the intermediate instance, or change its billing method during the migration. After the migration is complete, the intermediate instance is automatically released.

**Note**

-   During each migration, SMC creates a temporary pay-as-you-go [intermediate instance](/help/en/smc/support/faq#title-9q4-e80-o94) named `No_Delete_SMC_Transition_Instance` in your destination Alibaba Cloud account to assist with the migration.
    
-   If you choose to migrate to a destination instance, that instance serves as the intermediate instance and is not automatically released.
    

For more information, see [Migration principles](/help/en/smc/product-overview/with-agent-migration#efbe48d01d31z).

IP address

The IP address changes after migration, which may cause service interruptions. We recommend that you perform the migration during off-peak hours. If your services involve IP address configurations, modify the domain name resolution and ICP filing information yourself after the migration.

**Note**

If a domain name is already mapped to the source server, map the domain name to the new public IP address of the server. For more information, see [Add a website resolution](/help/en/dns/add-an-a-record-to-a-website-domain).

Underlying hardware devices

The underlying hardware devices change after migration. This may invalidate some application licenses that are bound to hardware. Check your licenses.

Performance impact

The migration process consumes server resources, including CPU, memory, disk I/O, and network bandwidth.

Data consistency before and after migration

For information about data and system configuration changes that occur before and after migration, see [Data consistency issues after migration](/help/en/smc/support/data-consistency-issues-after-migration).

## Prerequisites

You have completed the [preparations before migration](/help/en/smc/user-guide/preparing-for-server-migration).

## Migration procedure

### Step 1: Import the migration source

A migration source is the data center server, VM, or cloud host from another platform that you plan to migrate.

#### Command line (recommended)

**Important**

-   The source server must have **public network access**. If the source server has firewall restrictions, see [What are the endpoints of SMC?](/help/en/smc/support/faq#731f25bdedugh) to obtain the SMC domain names and ports, and add them to the firewall whitelist.
    
-   If your source server cannot access the public network or you want to improve migration efficiency by transferring data over a private network, see the [private network migration](/help/en/smc/use-cases/migrate-servers-over-a-vpc) solution.
    

1.  Go to [SMC console - Desktop Migration](https://smc.console.alibabacloud.com/toCloud/desktop).
    
2.  On the **Desktop Migration** page, click **Import Migration source**.
    
3.  Configure the parameters as prompted on the page and copy the activation code command. The parameters are described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Migration Source Type**
    
    Select **Physical servers/VMs/Cloud server of other cloud platforms**.
    
    **Import Method**
    
    Select **Use CLI To Import Server**.
    
    **Migration Source Quota**
    
    The number of migration sources that can be activated by the activation code. The value ranges from 1 to 1000. The default value is 200.
    
    **Validity Period**
    
    The validity period of the activation code. The value ranges from 1 to 90 days. The default value is 90 days.
    
    **Activation Code**
    
    After generating the activation code, copy the command. Perform the following steps:
    
    1.  Click **Generate**.
        
    2.  Click the **Windows PowerShell** tab.
        
    3.  Click **Copy** to copy the activation code command.
        
    
4.  Import the migration source.
    
    1.  Log on to the Windows source server.
        
    2.  Open Windows PowerShell with administrator privileges.
        
    3.  Paste and run the copied command to import the migration source.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3258862961/p701486.png)
        
        After you run the command, a message similar to `Import Source Server [s-bp19rlidl3mwuptc****] Successfully!` appears, which indicates that the migration source was imported successfully.
        
        > If the command fails to run, see [What do I do if the command fails to run when I import a Windows migration source from the command line?](/help/en/smc/support/how-to-resolve-the-failure-of-command-execution-when-importing-windows-migration-source-through-command-line).
        
5.  On the **Desktop Migration** page of the SMC console, check the status of the migration source in the **Migration Status** column.
    
    -   A status of **Migration SourceOnline** indicates a successful import.
        
    -   If the status is not Source Online, the import failed. Troubleshoot the issue using the following methods and then re-import the source.
        
        -   Troubleshoot the issue based on the error message in the console or by viewing the log files in the SMC client directory. The default installation directory of the SMC client is C:\\smc.
            
        -   For common issues and solutions, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshooting](/help/en/smc/support/troubleshoot-server-migration-failures/#concept-2267505).
            

## Console

**Important**

-   The source server (the source ECS instance) must have **Internet access**.
    
-   The source server must be in the **Running** state, and the status of Cloud Assistant must be Normal. For more information, see [View Cloud Assistant status and handle abnormal statuses](/help/en/ecs/user-guide/check-the-status-of-cloud-assistant-and-handle-exceptions).
    
-   If you use a RAM user to import a migration source, you must [grant the following permissions to the RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800):
    
    -   Grant the AliyunECSReadOnlyAccess permission for read-only access to ECS.
        
    -   Grant the AliyunECSAssistantFullAccess permission for managing Cloud Assistant.
        

1.  Go to [SMC console - Desktop Migration](https://smc.console.alibabacloud.com/toCloud/desktop).
    
2.  On the **Desktop Migration** page, click **Import Migration source**.
    
3.  Configure the parameters based on the migration source type.
    
    **Parameter**
    
    **Description**
    
    **Migration Source Type**
    
    Select **Alibaba Cloud ECS Instance**.
    
    **Import Method**
    
    Select **Import From Console**.
    
    **Region**
    
    From the drop-down list, select the region where the server to be migrated resides.
    
    **Instance**
    
    You can search for and select the Alibaba Cloud ECS instances to be migrated in the specified region by instance ID, name, or IP address. You can select multiple instances to import in a batch.
    
    **Tag** (Optional)
    
    Bind a tag key-value pair to the migration task to facilitate the query and management of migration tasks. For more information, see [Use tags to manage migration sources and tasks](/help/en/smc/use-cases/use-tags-to-manage-migration-sources-and-migration-tasks) and [Implement fine-grained permission management using tags](/help/en/smc/use-cases/use-tags-to-implement-fine-grained-access-control).
    
    > You can bind a maximum of 20 tags to a migration task.
    
    **Resource Group** (Optional)
    
    To manage migration resources by business department or project, you can create resource groups.
    
4.  After you configure the parameters, click **Import**.
    
    SMC automatically starts Cloud Assistant Agent to perform the import. The import process takes about 3 to 10 minutes. Wait for the process to complete.
    
5.  On the **Desktop Migration** page of the SMC console, check the status of the migration source in the **Migration Status** column.
    
    -   A status of **Migration SourceOnline** indicates a successful import.
        
    -   If the status is not Source Online, the import failed. Troubleshoot the issue using the following methods and then re-import the source.
        
        -   Troubleshoot the issue based on the error message in the console or by viewing the log files in the SMC client directory. The default installation directory of the SMC client is C:\\smc.
            
        -   For common issues and solutions, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshooting](/help/en/smc/support/troubleshoot-server-migration-failures/#concept-2267505).
            

#### SMC client

For more information about the SMC client, see the [SMC client user guide](/help/en/smc/user-guide/use-the-windows-gui-version-of-an-smc-client).

**Important**

-   The client must run on the source server, and the public network access mode is enabled by default. If the source server has firewall restrictions, see [SMC service domain names](/help/en/smc/support/faq#731f25bdedugh), obtain the SMC domain names and ports, and add them to the firewall whitelist.
    
-   If your source server cannot access the Internet or you want to improve migration efficiency using private network transmission, see [Private Network Transmission Migration](/help/en/smc/use-cases/migrate-servers-over-a-vpc).
    

1.  Go to [SMC console - Desktop Migration](https://smc.console.alibabacloud.com/toCloud/desktop).
    
2.  On the **Desktop Migration** page, click **Import Migration Source**.
    
3.  On the **Import Migration source** page, configure the parameters as specified in the following table.
    
    **Parameter**
    
    **Description**
    
    **Migration Source Type**
    
    **Physical servsers/VMs/Cloud Servers of other platforms**.
    
    **Import Method**
    
    Select **Use Client to Import Server**.
    
    > You need to manually download and install the SMC client on the source server.
    
    **Description**
    
    1.  In the **Description** section, follow the prompts to download, install, and activate the corresponding SMC client based on the source server's operating system (Linux or Windows) and architecture (32-bit or 64-bit).
        
    2.  Click **Generate** and copy the activation code information.
        
        > You need to enter the activation code when installing the client.
        
    
4.  Import the migration source.
    
    **Important**
    
    Do not close the SMC client during the migration. Otherwise, the migration source will lose its connection to the SMC console and the migration will fail.
    
    1.  Use a remote connection tool that supports file transfer, such as WinSCP, to upload the [SMC client](/help/en/smc/user-guide/use-the-windows-gui-version-of-an-smc-client#3d950345141wg) to the Windows source server.
        
    2.  On the Windows source server, use the system's built-in or a third-party decompression tool to unzip the SMC client package.
        
    3.  In the SMC client folder that matches the system version of your source server, run the SMC client.
        
        > When prompted for administrator privileges, click **OK**.
        
        -   GUI version: Double-click the go2aliyun\_gui.exe application to run it.
            
        -   Command-line version: Double-click the go2aliyun\_client.exe application to run it.
            
    4.  Obtain an activation code or an AccessKey pair.
        
        -   (Recommended) Obtain an activation code. In the SMC console, go to the **Description** section, click **Generate**, and copy the activation code.
            
        -   Obtain an AccessKey pair: An AccessKey pair for an Alibaba Cloud account includes an AccessKey ID and an AccessKey secret. If you have not created an AccessKey pair, you must create one. For more information, see [Create an AccessKey pair](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair#task968).
            
    5.  Enter the activation code or AccessKey pair as prompted.
        
        -   In the GUI, enter the activation code or AccessKey pair into the **Token Id/AK** and **Token Code/SK** text boxes and click **Start**. For more information, see the [SMC client user guide](/help/en/smc/user-guide/use-the-windows-gui-version-of-an-smc-client#concept-861889).
            
        -   Command-line version: Enter the values for `access_access_token_id` and `access_token_code`, and press the `Enter` key.
            
        
        When a message similar to `Import Source Server [s-bp18x8751kgz2oyh****] Successfully!` appears, it indicates that the migration source was imported successfully.
        
5.  On the **Desktop Migration** page of the SMC console, check the status of the migration source in the **Migration Status** column.
    
    -   A status of **Migration SourceOnline** indicates a successful import.
        
    -   If the status is not Source Online, the import failed. Troubleshoot the issue using the following methods and then re-import the source.
        
        -   Troubleshoot the issue based on the error message in the console or by viewing the log files in the SMC client directory. The default installation directory of the SMC client is C:\\smc.
            
        -   For common issues and solutions, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshooting](/help/en/smc/support/troubleshoot-server-migration-failures/#concept-2267505).
            

### Step 2: Configure the migration

1.  Find the migration source that you want to manage and click **Start Migration** in the **Actions** column.
    
2.  Configure the parameters and click **Start Migration**.
    
    1.  Configure basic parameters.
        
        **Parameter**
        
        **Description**
        
        **Destination Type**
        
        Select **Desktop Image**.
        
        **Destination Region** (Required)
        
        The destination region is the Alibaba Cloud region to which you want to migrate your source server to create a WUYING Workspace. For more information about regions, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-2459516).
        
        **Image Name**
        
        Enter a name for the desktop image.
        
        **Execution Method**
        
        Select an execution mode for the migration task:
        
        -   **Migrate Now**: Starts the migration immediately after creating the migration task. By default, **Migrate Now** is selected.
            
        -   **Migrate Later**: After creating the migration task, it automatically starts at the set time.
            
            **Note**
            
            The earliest scheduled execution time can be set to 10 minutes after the current time.
            
        -   **Create Only**: Creates only the migration task. You will need to manually start the migration task later by clicking **Start Migration Job** in the **Actions** column.
            
        
        **Automatic Incremental Synchronization**
        
        Whether the migration task automatically synchronizes incremental data from the source server to Alibaba Cloud. By default, automatic incremental synchronization is disabled.
        
        -   If you enable this switch, you need to set the following configuration items:
            
            -   **Synchronization Interval**: The time interval at which the incremental migration task is automatically executed periodically.
                
            -   **Maximum Reserved Images**: The maximum number of images that the incremental migration task retains by default.
                
            
            The migration task will be executed periodically to synchronize incremental data to Alibaba Cloud. For best practices on incremental migration, see [Incremental server migration](/help/en/smc/use-cases/migrate-incremental-data-from-a-source-server#task-2314622).
            
        -   If you disable this switch, the migration task will run only once.
            
        
    2.  Adjust the disk partition structure as needed. The parameters are described in the following table.
        
        **Parameter**
        
        **Description**
        
        **Destination Disk (GiB)**
        
        The disk structure of the source server is displayed by default.
        
        -   System disk and system partitions: Selected by default and cannot be changed.
            
            -   **System Disk**: The size of the system disk of the destination Elastic Desktop Service, in GiB.
                
            -   **Partition <N>**: SMC automatically generates destination disk partitions based on the disk partition results of the migration source, in GiB. The variable `<N>` indicates the partition number. If the system disk of the migration source has a single-partition structure, only **Partition 0** is generated.
                
            -   **Block Replication**: If you enable **Block Replication**, you can achieve a higher transfer speed and more complete and consistent partition data. **Block Replication** is enabled by default and cannot be changed.
                
        -   Data disks and partitions: Not selected by default and cannot be changed.
            
            **Important**
            
            Data disks cannot be migrated.
            
        
    3.  (Optional) Click **Advanced Settings** to configure parameters such as the network mode, private IP address, and transfer throttling. For more information about these parameters, see the following table.
        
        **Parameter**
        
        **Description**
        
        **Install GPU Driver**
        
        Select whether to install a GPU driver as needed. By default, no GPU driver is installed.
        
        -   Enable: To use this image with an enterprise graphics instance type to create a GPU-accelerated Elastic Desktop Service, you must enable this feature and install a GPU driver.
            
            -   **NVIDIA GRID9**: Can be used to create desktops of the **Enterprise Graphics - 4 vCPU/23 GiB/4 GiB** and **Enterprise Graphics - 10 vCPU/46 GiB/8 GiB** instance types.
                
            -   **NVIDIA GRID12**: Can be used to create desktops of enterprise graphics instance types other than **Enterprise Graphics - 4 vCPU/23 GiB/4 GiB** and **Enterprise Graphics - 10 vCPU/46 GiB/8 GiB**.
                
            -   **Install Driver Manually**: To use desktops of the **Enterprise Graphics - G28** instance type, the drivers provided by the system do not meet the requirements. You must install the GPU driver yourself.
                
        -   Disable: No GPU driver is installed. This image is not used with enterprise graphics instance types.
            
        
        **Protocol Type**
        
        **ASP** is selected by default.
        
        **Security Protection**
        
        Select whether to enable security protection as needed. To ensure desktop security, we recommend that you enable security protection.
        
        -   Enable protection: Provides security protection for desktops created from this image. This feature is enabled by default.
            
        -   Disable protection: Security protection features such as security protection and vulnerability scans do not take effect for Elastic Desktop Service instances created from this image.
            
        
        **Transfer Speed Limit**
        
        Transfer throttling limits the actual network transfer speed, in Mbps. If the **Compression Ratio** is set to a value greater than 0, the actual network transfer speed (the transfer speed of compressed data) will be less than the speed displayed in the **Real-time Migration Status**.
        
        **Compression Ratio**
        
        The level of data compression during migration. Set the compression ratio based on your actual needs.
        
        -   In environments with limited bandwidth, using a high compression ratio can increase data transfer speed.
            
        -   In environments with very high bandwidth, we recommend not compressing data to reduce the consumption of CPU resources on the migration source.
            
        
        The value ranges from 0 to 10. The default value is 7. A value of 0 means no data compression.
        
        **Checksum Verification**
        
        Disabled by default. Enabling it enhances data consistency checks but may reduce transfer speed.
        
        **SSL-Encrypted Transmission**
        
        By default, **Auto** is selected. Using Secure Sockets Layer (SSL) encryption to transfer migration data can improve data security and ensure data integrity.
        
        **License Type**
        
        Select the license type.
        
        -   **Alibaba Cloud** (Default): Currently only supports providing Microsoft Windows Server licenses. After migration, when creating an ECS instance from an image in Hong Kong (China) and overseas regions, a license fee for the image will be charged, and it will be automatically activated. The specific fee is subject to the information displayed when creating the instance.
            
        -   **BYOL****:** Bring Your Own License (BYOL) migration to the cloud currently mainly includes Microsoft, Red Hat Enterprise Linux, and SUSE Linux Enterprise Server. After migration, no image license fee will be charged when creating an ECS instance from the image. Please use your own license for activation.
            
            **Note**
            
            If you have already created an ECS instance, Alibaba Cloud supports quickly purchasing software licenses such as Red Hat Enterprise Linux and SUSE Linux Enterprise Server for a specified ECS instance. For more information, see [Purchase a software license for an ECS instance](/help/en/ecs/user-guide/purchase-software-licenses-for-ecs-instances).
            
        
        **Tag**
        
        Bind tag key-value pairs to the migration task for easy querying and management. For more information, see [Use tags to manage migration sources and tasks](/help/en/smc/use-cases/use-tags-to-manage-migration-sources-and-migration-tasks) and [Implement fine-grained permission management using tags](/help/en/smc/use-cases/use-tags-to-implement-fine-grained-access-control).
        
        **Note**
        
        A maximum of 20 tags can be bound to a single migration task.
        
        **Intermediate Instance Type**
        
        Select an intermediate instance type as needed:
        
        -   After you specify this parameter, the system selects this instance type to create the intermediate instance. If this instance type is out of stock, the migration task fails to be created.
            
        -   Do not select an intermediate instance type: The system selects instance types in a default order to create the intermediate instance.
            
        
        **Important**
        
        To avoid migration errors, do not stop, start, restart, or release the intermediate instance during the migration process. After the migration is complete, the instance is automatically released.
        
        **Upload Diagnostic Logs**
        
        Automatically upload SMC client logs to the SMC server for error diagnosis and analysis, which helps in locating problems when migration errors occur. This feature is enabled by default.
        
        SMC client logs are generally saved in the `/smc/go2aliyun_client*/Logs` directory under the installation path.
        
3.  In the message that appears, read the migration notes and click **Got It**.
    
4.  On the **Desktop Migration** page, view the migration status.
    
    If you enabled a **migration test run**, SMC executes the test first. The transfer duration depends on factors such as data volume and network bandwidth. Wait for the migration task to complete.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1516890471/p877052.png)
    
    **Note**
    
    -   **Speed**: The data transfer rate (based on uncompressed data volume). If you set the **Compression Ratio** to a value greater than 0 when creating the migration job, the displayed speed will be higher than the actual physical network throughput (due to data compression).
        
    -   **Remaining Sync Time**: Calculated as: (Total Data Volume - Transferred Data Volume) / Speed.
        
    -   If the transfer speed is insufficient, you can temporarily increase the bandwidth of the source and destination servers. For more information, see [Estimate the migration time and test the transfer speed](/help/en/smc/use-cases/estimate-the-time-required-for-migration-and-test-the-data-transfer-speed).
        
    
    **Manage and monitor migration jobs**
    
    -   To prevent migration errors from blocking the process, you can [subscribe to SMC migration events](/help/en/smc/use-cases/subscribe-to-smc-task-failure-event-notifications) in CloudMonitor to receive timely email notifications.
        
    -   When the migration job is in the **Syncing** state, you can perform the following actions:
        
        -   Modify the migration job: In the **Actions** column, click **Modify Migration** to modify parameters such as the transfer speed limit, compression ratio, and checksum verification.
            
        -   Pause the migration task: In the **Actions** column, click **Pause Migration** to pause the migration.
            
    
5.  (Optional) View migration details.
    
    In the **Migration Source ID/Name** column, click a migration source ID to view its details.
    

## Verify the migration result

-   If the **Migration Status** shows **Completed**, the migration was successful.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3517140471/p815418.png)
    
    Upon successful migration, a custom desktop image is generated. You can verify the image and provision a cloud desktop:
    
    -   View the desktop image: Click the image link to navigate to the EDS console. On the **O&M** > **Image** page, you can view, copy, and share the desktop image.
        
    -   In the **Actions** column, click **Create Desktop**. This redirects you to the WUYING Workspace console. You can create a desktop template using this image and subsequently provision an EDS instance based on that template. For more information, see [Create and manage custom templates](/help/en/wuying-workspace/user-guide/create-cloud-computer-templates#section-dbp-f13-95u) and [Create a cloud computer](/help/en/wuying-workspace/user-guide/create-a-cloud-computer-3).
        
        **Note**
        
        When creating a desktop template, ensure you select **Custom Image** and and choose the image generated from the migration task.
        
    
    After you migrate the server, perform the following operations to ensure that your business runs normally:
    
    -   Verify the data to ensure its integrity and correctness. For more information, see [How do I check my system after I migrate a Linux server?](/help/en/smc/support/faq#section-gv6-9p9-ufk) or [How do I check my system after I migrate a Windows server?](/help/en/smc/support/faq#section-thf-9yp-xf8).
        
    -   If applications and services on the source server are not configured to start automatically, you must manually start them after the migration.
        
    -   The IP address changes after the migration.
        
        -   If your business involves IP address configurations, you must modify them.
            
        -   If a domain name is bound to the source server, the public IP address changes after the migration. You must resolve the domain name to the new public IP address of the server. For more information, see [Quickly add a website](/help/en/dns/add-an-a-record-to-a-website-domain).
            
    
-   If the **Migration Status** shows **Error**, the migration job failed.
    
    In this event, troubleshoot and retry the job as follows:
    
    1.  In the **Actions** column, click **Troubleshoot** and fix the issue based on the error code and error message. For more information, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshooting](/help/en/smc/support/troubleshoot-server-migration-failures/).
        
    2.  After you fix the issue, in the **Actions** column, click **Retry Task**.
        
        The migration job resumes from where it left off.
        
        **Important**
        
        If the intermediate instance has been released, you must restart the migration. For more information, see [What do I do if I accidentally release an intermediate instance?](/help/en/smc/support/faq#section-1nu-xd1-bip).
        
    

## Clean up resources

During migration, SMC provisions a temporary `Pay-As-You-Go` intermediate instance named `No_Delete_SMC_Transition_Instance` in your destination account. You must determine if manual cleanup is required based on the migration outcome:

-   Successful migration: The intermediate instance is automatically released. No manual cleanup is required.
    
-   Migration error: The intermediate instance persists alongside the failed task and continues to incur charges. To avoid unnecessary costs, release the instance using one of the following methods:
    
    -   If you no longer need the migration task, click the migration source ID. In the **Actions** column, click **Clean Up Migration**. This deletes the task and automatically releases the associated intermediate instance.
        
    -   Manually release the intermediate instance. For more information, see [Release an instance](/help/en/ecs/user-guide/release-an-instance).
        

## **Related documents**

-   To migrate incremental data multiple times, you can perform multiple incremental migrations at custom intervals after the initial full migration is complete. This synchronizes the incremental data generated on the source server to Alibaba Cloud, which reduces business downtime and the final cutover time. For more information, see [Incremental server migration](/help/en/smc/use-cases/migrate-incremental-data-from-a-source-server).
    
-   For common issues and solutions, see [FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshooting](/help/en/smc/support/troubleshoot-server-migration-failures/#concept-2267505).
