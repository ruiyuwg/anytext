You can use Alibaba Cloud's Server Migration Center (SMC) to migrate your existing lightweight servers, such as Tencent Cloud Lighthouse instances, Huawei Cloud's lightweight cloud servers, or AWS Lightsail instances, to Alibaba Cloud Simple Application Server (SAS). SMC is an Alibaba Cloud migration platform that provides accessible, consistent, and efficient services to meet your migration requirements.

**Note**

-   Alibaba Cloud Simple Application Server is a lightweight cloud server that is easy to set up and manage. It provides services for application deployment, security management, and service monitoring for a single server, offering a one-stop solution to improve your server experience and efficiency. For more information, see [What is Simple Application Server?](/help/en/simple-application-server/product-overview/what-is-simple-application-server).
    
-   If Alibaba Cloud Simple Application Server does not meet your business needs, you can migrate your lightweight servers from other cloud providers directly to Alibaba Cloud ECS instances for more flexible resource configurations. For more information, see [Migrate servers to Elastic Compute Service](/help/en/smc/user-guide/migrate-the-source-server-to-the-ecs-instance).
    

## **Limits**

-   SMC does not support migrating Alibaba Cloud ECS instances to Alibaba Cloud Simple Application Server.
    
    You can use the SCP command and Data Transmission Service (DTS) to migrate website applications deployed on ECS instances to Simple Application Server. For more information, see [Migrate ECS instances to Simple Application Server](/help/en/simple-application-server/use-cases/migrate-data-from-an-ecs-instance-to-a-simple-application-server).
    
-   SMC does not support migrating data between Alibaba Cloud Simple Application Server instances.
    
    To migrate data between Alibaba Cloud Simple Application Server instances, see [Data migration between Simple Application Server instances](/help/en/simple-application-server/use-cases/migrate-data-between-simple-application-servers).
    
-   Migration between Windows and Linux systems is not supported. You can migrate Windows systems only to other Windows systems, and Linux systems only to other Linux systems.
    
-   The source lightweight server can have a maximum of one data disk attached.
    
-   Migration drills are not supported. During the migration phase, the migration drill step is automatically skipped.
    

## **Migration impact**

Before you migrate, take note of the following.

**Impacted item**

**Description**

Migrated data directories

During migration, SMC automatically generates a disk partition structure for the destination that is as consistent as possible with the source server's disk partition structure. You can adjust the partition structure of the destination disk, including partition size, order, transfer method, and logical volume management (LVM) configurations.

By default, all disks on the server are migrated:

-   If a **data disk has no mount target**, the data disk is not migrated.
    
-   If you do not need to migrate certain partition directories, you can choose not to migrate them when you adjust the partition structure.
    

For more information, see [Adjust the disk partition structure as needed](#9cc5be823f04g).

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

## Preparations

-   Complete the [pre-migration preparations](/help/en/smc/user-guide/preparing-for-server-migration) for the server.
    
-   Familiarize yourself with the SMC client, migration principles, billing, migration procedure, and feedback channels. For more information, see [Migration guide](/help/en/smc/user-guide/server-migration-guidelines).
    
-   Create an Alibaba Cloud Simple Application Server instance. Ensure its storage and operating system configurations are compatible with the source server. If you have not created a destination Alibaba Cloud Simple Application Server instance, see [Create a Simple Application Server instance](/help/en/simple-application-server/user-guide/create-a-server).
    
    **Warning**
    
    After the migration, the original data on the destination Alibaba Cloud Simple Application Server instance is cleared. The data on the source server is not affected. Therefore, if the destination Simple Application Server instance contains important data, you must back it up.
    
    -   **Consistent operating systems**: The source server and the destination server must run the same operating system. You can migrate a Windows system only to another Windows system, and a Linux system only to another Linux system.
        
    -   **Data disk quantity and capacity requirements**:
        
        -   The number of data disks attached to the destination server must be greater than or equal to the number of data disks on the source server. However, the destination instance can have a maximum of one data disk attached. If the destination instance has an insufficient number of data disks, you must attach one data disk. For more information about how to attach a data disk, see [Attach a data disk](/help/en/simple-application-server/user-guide/attach-a-data-disk) and [Partition and format a data disk](/help/en/simple-application-server/user-guide/partition-and-format-a-data-disk).
            
        -   The capacity of the system disk and data disk on the destination server must be greater than or equal to the capacity of the disks on the source server. If you want to shrink the system disk and data disk of the source server, the disk capacity on the destination instance must be at least equal to the used disk capacity on the source server. If the disk capacity of the destination instance is insufficient, you must resize the disks. For more information about how to resize a disk, see [Resize a data disk](/help/en/simple-application-server/user-guide/scale-up-the-data-disk).
            

## **Migration procedure**

### **Step 1: Import the migration source**

A migration source is a server that you want to migrate, such as an on-premises server in an IDC, a virtual machine, or a cloud host from another cloud platform. SMC supports multiple methods for importing a migration source. You can choose a method based on your requirements. For more information, see [How do I choose a method to import migration sources?](/help/en/smc/support/faq#c38763e8d3ms6)

#### **Import the migration source from the command line (Recommended)**

**Important**

-   The source server must have public network access. If the source server has firewall restrictions, see [What are the service domains of SMC?](/help/en/smc/support/faq#731f25bdedugh) to obtain the SMC domain names and ports, and add them to the firewall whitelist.
    
-   If your source server cannot access the public network or you want to improve migration efficiency using a private network transfer, see the [private network migration](/help/en/smc/use-cases/migrate-servers-over-a-vpc) solution.
    

1.  Visit [SMC Console-Server Migration](https://smc.console.alibabacloud.com/toCloud/server).
    
2.  On the **Server Migration** page, click **Import Migration source**.
    
3.  Configure the parameters as prompted on the page and copy the activation code command. The parameters are described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Workgroup** (Optional)
    
    This applies to the **scenario of batch migration to cloud server images**. For single server migration, skip this parameter.
    
    You can add multiple migration sources to the same workgroup for management. Migration sources associated with a workgroup must have automatic incremental synchronization enabled during migration. For more information about batch server migration, see [Batch migration of servers](/help/en/smc/user-guide/workgroup-migration).
    
    If no workgroup has been created, click **Create a New Workgroup**.
    
    **Migration Source Type**
    
    **Physical Machine/VM/Cloud Server From Other Platform**
    
    **Import Method**
    
    Select **Command-line Import**.
    
    > Generate an activation code script command as needed. Run the command on the source server with a single click to import the migration source.
    
    **Migration Source Quota**
    
    The number of migration sources that can be activated by the activation code. The value ranges from 1 to 1000. The default value is 200.
    
    **Validity Period**
    
    The validity period of the activation code. The value ranges from 1 to 90 days. The default value is 90 days.
    
    **Activation Code**
    
    After generating the activation code, copy the command. Perform the following steps:
    
    1.  Click **Generate**.
        
    2.  Based on the source server's operating system, click the **Linux Shell** or **Windows Powershell** tab.
        
    3.  Click **Copy** to copy the activation code command.
        
    
4.  Log on to the source server, and then paste and run the copied command with **administrator privileges** to import the migration source.
    
    ##### Linux source server
    
    1.  Log on to the Linux source server.
        
    2.  Paste and run the copied command with **administrator privileges** to import the migration source.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3258862961/p701476.png)
        
        After you run the command, a message similar to `Import Source Server [s-bp18x8751kgz2oyh****] Successfully!` appears, which indicates that the migration source was imported successfully.
        
    
    ##### Windows source server
    
    1.  Log on to the Windows source server.
        
    2.  Open Windows PowerShell with administrator privileges.
        
    3.  Paste and run the copied command to import the migration source.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3258862961/p701486.png)
        
        After you run the command, a message similar to `Import Source Server [s-bp19rlidl3mwuptc****] Successfully!` appears, which indicates that the migration source was imported successfully.
        
        > If the command fails to run, see [What do I do if the command fails to run when I import a Windows migration source from the command line?](/help/en/smc/support/how-to-resolve-the-failure-of-command-execution-when-importing-windows-migration-source-through-command-line).
        
    
5.  On the **Server Migration** page of the SMC console, you can check the status of the migration source in the **Real-time Migration Status** column.
    
    -   A status of **Source Online** indicates that the import was successful.
        
    -   If the status is not Source Online, the import failed. Troubleshoot the issue using the following solutions and then re-import the source.
        
        -   Troubleshoot the issue based on the error message in the console or by checking the SMC client log file. The default installation directories for the SMC client are:
            
            -   Windows source server: C:\\smc.
                
            -   Linux source server: /smc.
                
        -   For common issues and solutions, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshooting](/help/en/smc/support/troubleshoot-server-migration-failures/#concept-2267505).
            

#### **Import the migration source using the SMC client**

For more information about the SMC client, see [SMC client user guide](/help/en/smc/user-guide/use-the-windows-gui-version-of-an-smc-client).

**Important**

-   The client must run on the source server, with public network access enabled by default. If the source server has firewall restrictions, see [What are the service domains of SMC?](/help/en/smc/support/faq#731f25bdedugh) to obtain the SMC domain names and ports, and add them to the firewall whitelist.
    
-   If your source server cannot access the public network or you want to improve migration efficiency using a private network transfer, see the [private network migration](/help/en/smc/use-cases/migrate-servers-over-a-vpc) solution.
    

1.  Visit [SMC Console-Server Migration](https://smc.console.alibabacloud.com/toCloud/server).
    
2.  On the **Server Migration** page, click **Import Migration source**.
    
3.  On the **Import Migration Source** page, configure the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Migration Source Type**
    
    **Physical Machine/VM/Cloud Server From Other Platform**.
    
    **Import Method**
    
    Select **Client Import**.
    
    > You need to manually download and install the SMC client on the source server.
    
    **Import Instructions**
    
    1.  In the **Import Instructions** section, follow the prompts to download, install, and activate the corresponding SMC client based on the source server's operating system (Linux or Windows) and architecture (32-bit or 64-bit).
        
    2.  Click **Generate Activation Code** and copy the activation code information.
        
        > You need to enter the activation code when installing the client.
        
    
4.  Import the migration source.
    
    **Important**
    
    Do not close the SMC client during the migration process. Otherwise, the migration source loses its connection with the SMC console, which causes the migration to fail.
    
    ##### Import a migration source from a Windows source server
    
    1.  Use a remote connection tool that supports file transfer, such as WinSCP, to upload the [SMC client](/help/en/smc/user-guide/use-the-windows-gui-version-of-an-smc-client#3d950345141wg) to the Windows source server.
        
    2.  On the Windows source server, use the system's built-in or a self-installed decompression tool to unzip the SMC client package.
        
    3.  In the SMC client folder that matches the system version of your source server, run the SMC client.
        
        > You will be prompted for administrator privileges. Click **OK**.
        
        -   GUI version: Double-click the go2aliyun\_gui.exe application to run it.
            
        -   Command-line version: Double-click the go2aliyun\_client.exe application to run it.
            
    4.  Obtain an activation code or an AccessKey pair.
        
        -   (Recommended) Obtain an activation code. In the **Import Instructions** section of the SMC console, click **Generate Activation Code** and copy the activation code.
            
        -   Obtain an AccessKey pair: An AccessKey pair for an Alibaba Cloud account includes an AccessKey ID and an AccessKey secret. If you have not created an AccessKey pair, you must create one. For more information, see [Create an AccessKey pair](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair#task968).
            
    5.  Enter the activation code or AccessKey pair as prompted.
        
        -   In the GUI, enter the activation code or AccessKey pair in the **Token Id/AK** and **Token Code/SK** text boxes and click **Run**. For more information, see [SMC client user guide](/help/en/smc/user-guide/use-the-windows-gui-version-of-an-smc-client#concept-861889).
            
        -   Command-line version: Enter the values for `access_access_token_id` and `access_token_code`, and press the `Enter` key.
            
        
        When a message similar to `Import Source Server [s-bp18x8751kgz2oyh****] Successfully!` appears, it indicates that the migration source was imported successfully.
        
    
    ##### Import a migration source from a Linux source server
    
    1.  Use a remote connection tool that supports file transfer, such as WinSCP, to upload the [SMC client](/help/en/smc/user-guide/use-the-windows-gui-version-of-an-smc-client#3d950345141wg) to the Linux source server.
        
    2.  Remotely connect to the Linux source server and unzip the SMC client package.
        
        This example uses the `Linux 64-bit General-purpose Edition`. If you use a different version of the SMC client, replace the package name in the command with the actual downloaded file name.
        
        ```
        tar -zxvf go2aliyun_client.tar.gz
        ```
        
        **Note**
        
        The **Linux 64-bit ARM Edition** supports the g6r general-purpose instance family and the c6r compute-optimized instance family. For more information about instance families, see [Enterprise-level Arm-based compute instance families](/help/en/ecs/user-guide/overview-of-instance-families#table-y5i-qt9-7k9).
        
    3.  (Optional) As needed, [filter and exclude files or directories that do not need to be migrated](/help/en/smc/support/faq#section-16v-x4q-4z9).
        
        **Important**
        
        If you enable block replication for migration, you cannot exclude files or directories from migration.
        
    4.  Obtain an activation code or an AccessKey pair.
        
        -   (Recommended) In the **Import Instructions** section of the SMC console, click **Generate Activation Code** to obtain an activation code, and then copy the code.
            
        -   Obtain an AccessKey pair: An AccessKey pair for an Alibaba Cloud account includes an AccessKey ID and an AccessKey secret. If you have not created an AccessKey pair, you must create one. For more information, see [Create an AccessKey pair](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair#task968).
            
    5.  In the SMC client folder, run the following commands to start the SMC client.
        
        ```
        cd go2aliyun_client_linux_x86_64
        sudo chmod +x go2aliyun_client
        sudo ./go2aliyun_client
        ```
        
    6.  Enter the activation code or AccessKey pair as prompted. This example uses an activation code:![adad](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8425908761/p554044.png)
        
        After you enter the activation code or AccessKey pair, the following prompts may appear:
        
        -   If the source system does not have a snapshot driver installed, the SMC client prompts you, as shown in the following figure. You can choose whether to install the snapshot driver based on your needs.
            
            -   If you enable block replication when you create the migration task, enter `yes` to automatically install the snapshot driver.
                
            -   If you do not enable block replication when you create the migration task, enter `no`.
                
            
            **Important**
            
            If the snapshot driver fails to install, do not enable block replication when you create the migration task. Otherwise, the migration fails.
            
            ![123](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2524006361/p312842.png)
            
        -   Most mainstream source systems have rsync installed by default. If it is not installed, the SMC client prompts you. Enter `yes` to automatically install rsync, as shown in the following figure.![安装rsync](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4994588951/p50398.png)
            
        -   If SELinux is enabled on the source system, the SMC client prompts you to disable it. Enter `yes` to automatically disable SELinux, as shown in the following figure.![关闭SELinux](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4994588951/p50473.png)
            
        
        When a message similar to `Import Source Server [s-bp11npxndknsycqj****] Successfully!` appears, it indicates that the migration source was imported successfully.
        
        **Note**
        
        If importing the migration source fails, you can resolve the issue based on the displayed message, and then run the following commands in sequence to exit the background program and re-import the migration source. For more information about common issues and solutions, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshooting](/help/en/smc/support/troubleshoot-server-migration-failures/#concept-2267505).
        
        ```
        sudo ./go2aliyun_client --abort
        sudo ./go2aliyun_client
        ```
        
    
5.  On the **Server Migration** page of the SMC console, you can check the status of the migration source in the **Real-time Migration Status** column.
    
    -   A status of **Source Online** indicates that the import was successful.
        
    -   If the status is not Source Online, the import failed. Troubleshoot the issue using the following solutions and then re-import the source.
        
        -   Troubleshoot the issue based on the error message in the console or by checking the SMC client log file. The default installation directories for the SMC client are:
            
            -   Windows source server: C:\\smc.
                
            -   Linux source server: /smc.
                
        -   For common issues and solutions, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshooting](/help/en/smc/support/troubleshoot-server-migration-failures/#concept-2267505).
            

### **Step 2: Configure the migration**

1.  Find the migration source that you want to manage and click **Start Migration** in the **Actions** column.
    
2.  Configure the parameters and click **Start Migration**.
    
    1.  Configure basic parameters.
        
        **Parameter**
        
        **Description**
        
        **Migration Job Name**
        
        The name of the migration task.
        
        **Job Description**
        
        Enter a description for the migration task.
        
        **Destination Type**
        
        Select **Simple Application Server**.
        
        **Destination Region** (Required)
        
        The region where you want to migrate your lightweight server to on Alibaba Cloud. For more information about regions, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-2459516).
        
        **Destination Instance** (Required)
        
        Select a Simple Application Server instance as the destination instance.
        
        The storage, operating system, and other configurations of the Simple Application Server instance must be compatible with the source server. For example, you can migrate a server only from a Linux source server to a Linux simple application server, or from a Windows source server to a Windows simple application server.
        
        **Important**
        
        -   To prevent migration failure, do not stop, start, restart, or release the destination instance during the migration.
            
        -   If the number of data disks on the destination instance is less than the number of data disks on the migration source, not all data disks from the source will be migrated.
            
        -   If the disk capacity of the destination instance is smaller than that of the migration source, we recommend that you first resize the disks of the destination instance. For more information, see [Resize a data disk](/help/en/simple-application-server/user-guide/scale-up-the-data-disk).
            
        
        **Execution Method**
        
        Select an execution method for the migration task:
        
        -   **Migrate Now**: Starts the migration immediately after creating the migration task. By default, **Migrate Now** is selected.
            
        -   **Schedule Migration**: After creating the migration task, it automatically starts at the set time.
            
            **Note**
            
            The earliest scheduled execution time can be set to 10 minutes after the current time.
            
        -   **Create Only**: Creates only the migration task. You will need to manually start the migration task later by clicking **Start Task** in the **Actions** column.
            
        
    2.  Adjust the disk partition structure as needed. The parameters are described in the following table.
        
        **Parameter**
        
        **Description**
        
        **Adjust Disk Partition Structure**
        
        Choose whether to enable adjusting the disk partition structure based on your needs. This feature is supported only in SMC client V2.8.0 and later. For more information about the SMC client, see [SMC client user guide](/help/en/smc/user-guide/use-the-windows-gui-version-of-an-smc-client).
        
        -   Disabled: The disk information of the source instance is not displayed. The system automatically reads the source instance disk information and generates a disk structure. After migration, the destination disk partition structure is consistent with the automatically generated disk structure by default.
            
        -   Enabled: The disk information of the source instance is displayed. The system automatically reads the source instance disk information and generates a disk structure. You can adjust the destination disk partition structure, including partition size and order, transfer method, and whether to enable LVM.
            
            The parameters for the disk partition structure are described as follows:
            
            #### **Configure disks**
            
            -   **System Disk**: The size of the destination Alibaba Cloud server's system disk, in GiB. The system disk size ranges from 20 to 2048.
                
                The destination system disk size must be larger than the actual used size of the source system disk. For example, if the source system disk is 400 GiB and the actual used space is 100 GiB, the destination system disk size must be greater than 100 GiB.
                
                **Note**
                
                The default value is the size of the source system disk. If you do not need to reduce the system disk capacity, we recommend not setting it to a value smaller than the default.
                
            -   **Data Disk <N>**: The size of the data disk of the Alibaba Cloud server after migration, in GiB. The data disk size ranges from 1 to 32768.
                
                -   The variable `<N>` represents the data disk number. If migrating to a destination instance, N is the data disk ID.
                    
                -   The data disk size must be larger than the actual used size of the source data disk. For example, if the source data disk is 500 GiB and the actual used space is 100 GiB, the destination data disk size must be greater than 100 GiB.
                    
                -   If there is no mount target under the **Data Disk** or all mount targets are set not to be migrated, the data disk will not be migrated.
                    
            -   **LVM**: Logical Volume Manager (LVM) is a mechanism for managing disk partitions in Linux systems. LVM is more flexible than standard disk partitions and allows for dynamic adjustment of disk space.
                
                You can choose whether to enable LVM based on your needs. If LVM is enabled, the destination end will automatically rebuild the disk with an LVM structure.
                
                An example is described as follows:
                
                For each destination disk with LVM enabled, the system creates 1 physical volume (PV) and its corresponding volume group (VG). On this volume group, it creates a number of logical volumes (LVMs) corresponding to the number of mount targets. The volume group name defaults to vgX (where X is the disk's sequence number), and the logical volume name defaults to lvX (where X is the logical volume's sequence number), as shown in the following example:
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5720001371/p854447.png)
                
                **Important**
                
                LVM is not supported in the following cases:
                
                -   If the migration source is a Windows system, LVM is not supported.
                    
                -   If the system disk has no boot partition, LVM is not supported.
                    
                
                After enabling LVM, the feature will not take effect in the following scenarios:
                
                -   The migration source does not support lvm2 or the lvm2 package is not installed.
                    
                -   The migration source is a Debian system with a kernel version of 3.x or earlier, and a disk with an XFS file system is mounted.
                    
                
            
            #### **Configure mount targets**
            
            -   Migrate: You can choose whether to migrate the mount target based on your business needs.
                
            -   Enable Block Replication: Using block replication can effectively improve the stability of migration transfer speed and ensure consistency with the source partition structure, but the partition size cannot be modified. SMC determines whether to support enabling block replication based on the state of the migration source disk partitions.
                
                -   If the migration source does not support enabling **Block Replication** for a partition, the switch cannot be turned on. The default file replication is used, and the partition size can be modified.
                    
                -   If the migration source supports enabling **Block Replication** for a partition, block replication is enabled by default to achieve partition-level disk migration.
                    
                
                **Note**
                
                -   When the migration source is a Windows operating system, the block replication feature is enabled by default and cannot be disabled.
                    
                -   If LVM is enabled on the disk and the partition size is not a multiple of 4 MiB, block replication will not take effect, and file replication will be used for data transfer.
                    
                
            -   Set Partition Size: When block replication is not enabled, you can set the partition size as needed, but the sum of the partition sizes cannot exceed the size of the belonging disk.
                
            
            **Note**
            
            If the disk sizes of the destination instance do not match the migration source disks, the task cannot be created. In this case, the system will automatically adjust the mount target positions to meet the disk size requirements. If the requirements are still not met after adjusting the mount targets, handle the issue according to the prompts on the page.
            
            You can also manually drag the mount target positions to meet the disk size requirements. However, dragging is not supported for boot or system partitions. Perform the following steps:
            
            1.  Hover your mouse over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5720001371/p852953.png) icon in front of the mount target.
                
            2.  Use the mouse to drag the mount target to another disk.
                
            
        
    3.  (Optional) To set parameters such as the network mode and compression ratio, click **Advanced Configuration** and configure the advanced parameters. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Network Type**
        
        Migration data is transferred to the intermediate instance over the public network. To use this mode, the source server must be able to access the public network. Choose whether to specify a VPC and vSwitch as needed.
        
        -   Specify VPC and vSwitch: The migration task creates an intermediate instance in the VPC and vSwitch you specify.
            
        -   Do not specify VPC and vSwitch: The migration task creates an intermediate instance in a new VPC and vSwitch that the system automatically creates.
            
        
        **Transmission Speed Limit**
        
        Transfer throttling limits the actual network transfer speed, in Mbps. If the **Compression Ratio** is set to a value greater than 0, the actual network transfer speed (the transfer speed of compressed data) will be less than the speed displayed in the **Real-time Migration Status**.
        
        **Compression Ratio**
        
        The level of data compression during migration. Set the compression ratio based on your actual needs.
        
        -   In environments with limited bandwidth, using a high compression ratio can increase data transfer speed.
            
        -   In environments with very high bandwidth, we recommend not compressing data to reduce the consumption of CPU resources on the migration source.
            
        
        The value ranges from 0 to 10. The default value is 7. A value of 0 means no data compression.
        
        **Checksum Verification**
        
        Disabled by default. Enabling it enhances data consistency checks but may reduce transfer speed.
        
        **Enable SSL Encrypted Transfer**
        
        Enabled by default. Using Secure Sockets Layer (SSL) encryption to transfer migration data can improve data security and ensure data integrity.
        
        **Tag**
        
        Bind tag key-value pairs to the migration task for easy querying and management. For more information, see [Use tags to manage migration sources and tasks](/help/en/smc/use-cases/use-tags-to-manage-migration-sources-and-migration-tasks) and [Implement fine-grained permission management using tags](/help/en/smc/use-cases/use-tags-to-implement-fine-grained-access-control).
        
        **Note**
        
        A maximum of 20 tags can be bound to a single migration task.
        
        **Upload Diagnostic Logs**
        
        Automatically upload SMC client logs to the SMC server for error diagnosis and analysis, which helps in locating problems when migration errors occur. This feature is enabled by default.
        
        SMC client logs are generally saved in the `/smc/go2aliyun_client*/Logs` directory under the installation path.
        
3.  In the message that appears, read the migration notes and click **Got It**.
    
4.  On the **Server Migration** page, view the real-time migration status.
    
    The time required for data transmission is affected by factors such as the source data size and network bandwidth. Wait for the migration task to complete.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1516890471/p877052.png)
    
    **Note**
    
    -   **Speed**: The amount of uncompressed migration data transferred per second. If the **Compression Ratio** is set to a value greater than 0 for a migration task, the displayed speed will be greater than the actual network transfer speed of the compressed data.
        
    -   **Remaining Sync Time**: This is calculated as (Total Data Volume - Transferred Data Volume) / Speed.
        
    -   If the transfer speed is too slow to meet your schedule, you can consider temporarily increasing the fixed bandwidth of the source and destination servers. For more information, see [Estimate migration time and test transfer speed](/help/en/smc/use-cases/estimate-the-time-required-for-migration-and-test-the-data-transfer-speed).
        
    
    **You can subscribe to migration error events, modify the migration, and pause the migration.**
    
    -   To prevent the migration process from being blocked by task errors, you can [subscribe to SMC migration task error event notifications](/help/en/smc/use-cases/subscribe-to-smc-task-failure-event-notifications) in Cloud Monitor to receive timely email alerts.
        
    -   When the migration task status is **Syncing**, you can also perform the following operations on the task as needed:
        
        -   In the **Actions** column, click **Modify Migration** to change parameters such as transfer throttling, compression ratio, and Checksum verification.
            
        -   To pause a migration task, click **Pause Migration** in the **Actions** column.
            
    
5.  (Optional) To view the migration details, perform the following steps.
    
    **View migration details**
    
    In the **Migration Source ID/Name** column of the target migration source, click the migration source ID to view the migration details.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0259081471/p924139.png)
    

## **Verify the migration result**

-   When the **Real-time Migration Status** is **Completed**, the migration is successful.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1713021471/p811152.png)
    
    -   After the lightweight server is migrated, perform the following steps to check whether the data is complete and whether the instance and applications are running as expected:
        
        1.  In the **Actions** column of the target migration task, click **View Destination Instance**.
            
            You are redirected to the Alibaba Cloud Simple Application Server console.
            
        2.  Remotely log on to the Simple Application Server instance. For more information, see [Remotely connect to a Linux server](/help/en/simple-application-server/user-guide/connect-to-linux-server-remotely) or [Remotely connect to a Windows server](/help/en/simple-application-server/user-guide/connect-to-windows-server-remotely).
            
        3.  Check the data and applications on the Simple Application Server instance. For more information, see [How do I check a Linux server after migration?](/help/en/smc/support/faq#section-gv6-9p9-ufk) or [How do I check a Windows server after migration?](/help/en/smc/support/faq#section-thf-9yp-xf8).
            
        
        **Note**
        
        The IP address changes after the migration:
        
        -   If your services involve IP address configurations, you must modify them.
            
        -   If a domain name is already mapped to the source server, map the domain name to the new public IP address of the server. For more information, see [Add a website resolution](/help/en/dns/add-an-a-record-to-a-website-domain).
            
        
    
-   If the **Real-time Migration Status** is **Error**, the migration task has an error.
    
    In this case, you need to troubleshoot the problem and retry:
    
    1.  In the **Actions** column, click **Troubleshoot Error** and use the error code and error message to resolve the issue. For more information, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshooting](/help/en/smc/support/troubleshoot-server-migration-failures/).
        
    2.  After you fix the problem, click **Retry Migration** in the **Actions** column. The migration will resume.
        
    

## **References**

-   Because the server is replaced, its public IP address changes. If you have mapped a domain name to the previous server, you must map the domain name to the new server after the data migration is complete. For more information, see [Register and resolve a domain name](/help/en/simple-application-server/user-guide/register-and-resolve-domain-names#task236).
    
-   You can use the SCP command and Data Transmission Service (DTS) to migrate website applications deployed on ECS instances to Simple Application Server. For more information, see [Migrate ECS instances to Simple Application Server](/help/en/simple-application-server/use-cases/migrate-data-from-an-ecs-instance-to-a-simple-application-server).
    
-   To migrate data between Alibaba Cloud Simple Application Server instances, see [Data migration between Simple Application Server instances](/help/en/simple-application-server/use-cases/migrate-data-between-simple-application-servers).
