If your Simple Application Server (SAS) cannot meet your business configuration requirements, you can smoothly migrate data from the simple application server to an Elastic Compute Service (ECS) instance to implement more flexible resource configuration. The source simple application server and the destination ECS instance must belong to the same Alibaba Cloud account but can reside in the same region or different regions. This topic describes how to use Server Migration Center (SMC) to migrate data from a simple application server to an ECS instance.

**Note**

We recommend that you preferentially use the image copy and image sharing features of Simple Application Server to migrate data from a simple application server to an ECS instance. For more information, see [Migrate data from a simple application server to an ECS instance](/help/en/simple-application-server/use-cases/migrate-data-from-lightweight-application-servers-to-ecs-instances-through#9914e9960476r). If the preceding features cannot meet your requirements, you can use the method described in this topic to migrate data from a simple application server to an ECS instance.

## **Scenarios**

-   **(Recommend) Migrate data from a simple application server to an ECS custom image in the same region or across regions**.
    
    If you have not purchased a destination ECS instance, you can migrate data from a simple application server to an ECS custom image and then create an ECS instance based on the custom image.
    
-   **Migrate data from a simple application server to an existing ECS instance in the same region**.
    
    If you have purchased a destination ECS instance, and the storage and operating system of the simple application server are the same as the storage and operating system of the destination ECS instance, you can migrate data from the simple application server to the existing ECS instance.
    
    **Warning**
    
    After you migrate the data, the original data in the destination ECS instance is deleted, and the data on the simple application server is not affected. If the destination ECS instance contains important data, we recommend that you do not migrate data from a simple application server to the destination ECS instance.
    

## **Impacts**

Before the migration, take note of the information in the following table.

**Item**

**Description**

Data directory

During migration, SMC can automatically generate a disk partition structure that is as consistent as possible with that of the source server based on the disk partition structure of the source server. You can adjust the partition structure of the destination disk as needed, including the partition size and location sequence, transfer mode, and whether to enable LVM.

By default, all the disks of the server are migrated, but the following conditions still need to be considered:

-   If **no mount targets exist under the data disk**, the data disk is not migrated.
    
-   If you do not need to migrate some partition directories, you can choose not to migrate these disks after adjusting the disk partition structure.
    

For more information, see [Step 2: Migration configurations](#1c04403fa7j4g).

Intermediate instance

Do not perform operations on the intermediate instance during the migration.

To prevent migration failures, do not stop, start, restart, or release the intermediate instance or change the billing method of the intermediate instance during the migration process. After the migration is complete, SMC automatically releases the intermediate instance.

**Note**

-   To run a migration job, SMC creates a pay-as-you-go temporary intermediate instance named `No_Delete_SMC_Transition_Instance` within your Alibaba Cloud account. For more information, see the "What specifications are available for intermediate instances?" section of the [FAQ about Server Migration Center (SMC)](/help/en/smc/support/faq#section-lii-mn5-7ki) topic.
    
-   When you migrate a server to an ECS instance, the ECS instance serves as the intermediate instance. The instance is not automatically released.
    

Formore information, see [How it works](/help/en/smc/product-overview/with-agent-migration#efbe48d01d31z).

IP address

After the migration, the IP address of your server is changed, which may cause service interruption. We recommend that you perform the migration during off-peak hours. If the business involves the configuration of IP addresses, modify the domain name resolution and ICP filing after migration.

-   If a domain name has been bound to the source server, the public IP address of the server is changed after the migration. In this case, you must resolve the domain name to the new public IP address of the server. For more information, see [Add an A record for a website domain name](/help/en/dns/add-an-a-record-to-a-website-domain).
    
-   If you want to keep the private IP address unchanged, perform the following operations:
    
    -   Migrate the source server to the **ECS Image**: After the migration, modify the private IP address when creating an ECS instance through the cloud server image. For more information, see [Specify the primary private IPv4 address when creating an ECS instance](/help/en/ecs/user-guide/modify-a-private-ip-address#e3c6288083hpl).
        
    -   Migrate the source server to the **Instance**: You can modify the IPv4 private IP address of the instance in the advanced configuration of [Migration settings](/help/en/smc/user-guide/migrate-the-source-server-to-the-ecs-instance#48ee7a1a54pq6), or after the migration. For more information, see [Change the primary private IPv4 address for an existing ECS instance](/help/en/ecs/user-guide/modify-a-private-ip-address#bf60f728d0p4m).
        

Underlying hardware

After the migration, the underlying hardware may change, and the application licenses that are associated with the underlying hardware may become invalid. Perform checks based on your business requirements.

## **Prerequisites**

-   The preparations for server migration are complete. For more information, see [Before you begin](/help/en/smc/user-guide/preparing-for-server-migration).
    
-   If you want to migrate data from a simple application server to an existing ECS instance, the following requirements must be met:
    
    -   Back up the important data on the destination ECS instance to an image, snapshot, or storage device other than the instance.
        
    -   The operating system of the destination ECS instance is the same as that of the source server.
        
    -   The number of data disks attached to the destination ECS instance is greater than or equal to that of data disks attached to the source server. Otherwise, the disk data of the source server cannot be migrated to the destination ECS instance. In this case, you must attach more data disks to the ECS instance. For more information, see [Attach a data disk](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb).
        
    -   The capacity of the system disk and data disks attached to the ECS instance is larger than or equal to that of the system disk and data disks attached to the source server. If you want to shrink the system disk and data disks attached to the source server, make sure that the capacity of the system disk and data disks attached to the destination ECS instance is larger than or equal to the size of the data on the system disk and data disks attached to the source server. Otherwise, data of the source server cannot be fully migrated to the destination ECS instance. In this case, you must scale up the data disks and system disk. For more information about how to resize a cloud disk, see [Overview](/help/en/ecs/user-guide/overview-19#concept-e1g-44g-ydb).
        

## **Procedure**

### **Step 1: Import the information about a migration source**

Migration sources can be servers of a variety of types to migrate, such as servers in data centers, VMs, and hosts on third-party cloud platforms. SMC supports multiple methods to import the information about migration sources. You can select a method based on your business requirements. For more information, see the [How do I select the method to import the information about a migration source?](/help/en/smc/support/faq#c38763e8d3ms6) section of the "FAQ" topic.

#### **(Recommend) Use the CLI**

**Important**

The source server must be **accessible over the Internet**.

1.  Log on to the [Server Migration Center (SMC) console](https://smc.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Migrate to Cloud** > **Server Migration**.
    
3.  On the **Server Migration** page, click **Import Migration source**.
    
4.  Configure the parameters as prompted and copy the activation code command. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Workgroup**
    
    Optional. Suitable for **scenarios involving batch migration to ECS image**. For single server migration, please skip this parameter.
    
    You can manage multiple migration sources in the same workgroup. Automatic incremental synchronization must be enabled for migration sources associated with the workgroup during migration. For more information, see [Batch migration of servers](/help/en/smc/user-guide/workgroup-migration).
    
    If a workgroup has not been created, click **Create a New Workgroup**.
    
    **Migration Source Type**
    
    The type of the migration source. Select **Physical Server or VM**.
    
    **Import Method**
    
    Select **Use CLI to Import Server**. Generate an activation code and a command, and run the command on the migration source.
    
    **Migration Source Quota**
    
    The number of migration sources whose information you want to import by using the activation code. Valid values: 1 to 1000. Default value: 200.
    
    **Validity Period**
    
    The validity period of the activation code. Unit: day. Valid values: 1 to 90. Default value: 90.
    
    **Activation Code**
    
    The activation code. Perform the following steps to generate the activation code and copy the generated command:
    
    1.  Click **Generate**.
        
    2.  Click the **Linux Shell** or **Windows Powershell** tab based on the operating system of the source.
        
    3.  Click **Copy** to copy the activation code command.
        
    
5.  Log on to the source server and paste and run the copied command **as an administrator** to import the information about the migration source.
    
    ##### Linux server
    
    1.  Log on to the Linux server.
        
    2.  Paste and run the copied command **as an administrator** to import the information about the migration source.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3258862961/p701476.png)
        
        After the command is run, if a message similar to `Import Source Server [s-bp18x8751kgz2oyh****] Successfully!` is returned, the information about the migration source is imported.
        
    
    ##### Windows server
    
    1.  Log on to the Windows server.
        
    2.  Open Windows PowerShell as an administrator.
        
    3.  Run the copied command to import the information about the migration source.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3258862961/p701486.png)
        
        After the command is run, if a message similar to `Import Source Server [s-bp19rlidl3mwuptc****] Successfully!` is returned, the information about the migration source is imported.
        
    
6.  On the **Server Migration** page in the SMC console, view the status of the migration source in the **Real-time Migration Status** column.
    
    -   If the status of the migration source is **Migration SourceOnline**, the information about the migration source is imported.
        
    -   If the migration source is in another state, the information fails to be imported. In this case, troubleshoot the failure based on the following solutions and import the information about the migration source again:
        
        -   Troubleshoot the failure based on the message displayed in the SMC console or the log file in the directory where the SMC client is installed. By default, the SMC client is installed in the following directory:
            
            -   Windows server: C:\\smc
                
            -   Linux server: /smc
                
        -   For more information about frequently asked questions (FAQ) and solutions, see [FAQ about Server Migration Center (SMC)](/help/en/smc/support/faq#concept-610474) and [Errors occurred during a server migration](/help/en/smc/support/troubleshoot-server-migration-failures/).
            

#### **Use the SMC console**

**Important**

-   The source server must be **accessible over the Internet**.
    

-   If you want to import the information about a migration source as a Resource Access Management (RAM) user, make sure that the following permissions are granted to the RAM user:
    
    -   `AliyunRAMReadOnlyAccess`. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
        
    -   `AliyunCloudShellFullAccess`. For more information, see [Authorize RAM users](/help/en/cloud-shell/access-control-ram#topic-2148475).
        

1.  Log on to the [Server Migration Center (SMC) console](https://smc.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Migrate to Cloud** > **Server Migration**.
    
3.  On the **Server Migration** page, click **Import Migration source**.
    
4.  On the Import Migration source page, configure the parameters based on the type of your migration source.
    
    **Parameter**
    
    **Description**
    
    **Workgroup**
    
    Optional. Suitable for **scenarios involving batch migration to ECS image**. For single server migration, please skip this parameter.
    
    You can manage multiple migration sources in the same workgroup. Automatic incremental synchronization must be enabled for migration sources associated with the workgroup during migration. For more information, see [Batch migration of servers](/help/en/smc/user-guide/workgroup-migration).
    
    If a workgroup has not been created, click **Create a New Workgroup**.
    
    **Migration Source Type**
    
    The type of the migration source. Select **Physical Server or VM**.
    
    **Import Method**
    
    Select **Import through Console**. In the SMC console, manually enter the public IP address, port number, and SSH user password of the source server, and authorize SMC to remotely connect to the source server to automatically import the migration source.
    
    **Migration Source Name**
    
    The name of the migration source. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (\_), and hyphens (-).
    
    **OS Type**
    
    The type of the operating system of the source server. Select **Linux** or **Windows** based on your business requirements.
    
    **Important**
    
    If you select **Windows** as the operating system, you must install OpenSSH. For more information, see the [How do I install OpenSSH on a Windows server?](/help/en/smc/support/faq#section-beu-cwd-dwe) section of the "FAQ" topic.
    
    **IP Address**
    
    The IPv4 address that is used to access the migration source over the Internet. Example: 120.55.XX.XX.
    
    **Port**
    
    The SSH port number of the migration source. Valid values: 1 to 65535. Default value: 22.
    
    **Username**
    
    The username with administrator permissions, used to log on to the operating system of the migration source.
    
    -   Linux: The default username is `root`.
        
    -   Windows: The default username is `Administrator`.
        
    
    **Password**
    
    The password corresponding to the username.
    
5.  After you configure the parameters, click **Import**.
    
    SMC automatically launches CloudShell to perform the import. The import process takes about 3 to 10 minutes. Wait until the import is complete.
    
6.  On the **Server Migration** page in the SMC console, view the status of the migration source in the **Real-time Migration Status** column.
    
    -   If the status of the migration source is **Migration SourceOnline**, the information about the migration source is imported.
        
    -   If the migration source is in another state, the information fails to be imported. In this case, troubleshoot the failure based on the following solutions and import the information about the migration source again:
        
        -   Troubleshoot the failure based on the message displayed in the SMC console or the log file in the directory where the SMC client is installed. By default, the SMC client is installed in the following directory:
            
            -   Windows server: C:\\smc
                
            -   Linux server: /smc
                
        -   For more information about frequently asked questions (FAQ) and solutions, see [FAQ about Server Migration Center (SMC)](/help/en/smc/support/faq#concept-610474) and [Errors occurred during a server migration](/help/en/smc/support/troubleshoot-server-migration-failures/).
            

#### **Use the SMC client**

For more information about the SMC client, see [Use the SMC client](/help/en/smc/user-guide/use-the-windows-gui-version-of-an-smc-client).

1.  Log on to the [Server Migration Center (SMC) console](https://smc.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Migrate to Cloud** > **Server Migration**.
    
3.  On the **Server Migration** page, click **Import Migration source**.
    
4.  On the **Import Migration source** page, configure the parameters. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Migration Source Type**
    
    The type of the migration source. Select **Physical Server or VM**.
    
    **Import Method**
    
    Select **Use Client to Import Server**. Manually download and install the SMC client on the source server.
    
    **Description**
    
    The description about how to download the SMC client. Read the information in the **Description** section and follow the prompts to download, install, and activate the corresponding SMC client based on the CPU architecture (ARM or x86) and bit version (32-bit or 64-bit) of the operating system of the migration source.
    
5.  Import the information about the migration source.
    
    Perform the operations based on the operating system of the migration source.
    
    **Important**
    
    During the migration, do not shut down the SMC client until the migration is complete. Otherwise, the migration source is disconnected from the SMC console, and the migration fails.
    
    ##### Windows server
    
    1.  You can use a remote connection tool that supports file transfer. For example, you can use WinSCP to upload the SMC client package to the source Windows server.
        
    2.  On the source Windows server, use the built-in decompression tool of Windows or the decompression tool that you install to decompress the SMC client package.
        
    3.  In the SMC client folder that corresponds to the source server, run the SMC client.
        
        -   To run the Windows GUI version, double-click the go2aliyun\_gui.exe file.
            
        -   To run the Windows CLI version, double-click the go2aliyun\_client.exe file.
            
        
        **Note**
        
        When you run the program, you must click **OK** to confirm that you have the administrator permissions.
        
    4.  Obtain an activation code or AccessKey pair.
        
        -   (Recommend) Obtain an activation code: In the **Description** section in the SMC console, click **Generate** and copy the generated activation code information.
            
        -   Obtain an AccessKey pair: An AccessKey pair consists of an AccessKey ID and an AccessKey secret. If no AccessKey pair is created, create one first. For more information, see [Obtain an AccessKey pair](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair#task968).
            
    5.  Enter the activation code or AccessKey pair as prompted.
        
        -   To run the Windows GUI version, enter the activation code or AccessKey pair in the **Token Id/AK** and **Token Code/SK** fields and click **Start**. For more information, see [Use the SMC client](/help/en/smc/user-guide/use-the-windows-gui-version-of-an-smc-client#concept-861889).
            
        -   To run the Windows CLI version, enter the obtained `access_access_token_id` and `access_token_code` and press the `Enter` key.
            
        
        If the information about the migration source is imported, a message similar to the following one is returned: `Import Source Server [s-bp18x8751kgz2oyh****] Successfully!`
        
    
    ##### Linux server
    
    1.  You can use a remote connection tool that supports file transfer. For example, you can use WinSCP to upload the SMC client package to the source Linux server.
        
    2.  Connect to the source Linux server and decompress the SMC client package.
        
        `Linux 64-bit Generic` is used in the example. Run the following command to decompress the package. If you use another version of the SMC client, replace the package name in the command with the name of your SMC client.
        
        ```
        tar xf go2aliyun_client_linux_x86_64.tar.gz
        ```
        
        **Note**
        
        **Linux ARM64** supports the g6r general-purpose instance family and the c6r compute-optimized instance family. For more information about instance types, see the "Arm-based enterprise-level computing instance families" section of the [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#table-y5i-qt9-7k9) topic.
        
    3.  (Optional) Exclude the files or directories that you do not need from the migration. For more information, see the [How do I exclude files or directories from a migration job?](/help/en/smc/support/faq#section-16v-x4q-4z9) section of the "FAQ" topic.
        
        **Important**
        
        If you enable the block replication feature, you cannot exclude files or directories from the migration job.
        
    4.  Obtain an activation code or AccessKey pair.
        
        -   (Recommend) Obtain an activation code: In the **Description** section in the SMC console, click **Generate** and copy the generated activation code information.
            
        -   Obtain an AccessKey pair: An AccessKey pair consists of an AccessKey ID and an AccessKey secret. If no AccessKey pair is created, create one first. For more information, see [Obtain an AccessKey pair](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair#task968).
            
    5.  In the SMC client folder, run the following commands to run the SMC client.
        
        ```
        cd go2aliyun_client_linux_x86_64
        sudo chmod +x go2aliyun_client
        sudo ./go2aliyun_client
        ```
        
    6.  Enter the activation code or AccessKey pair as prompted. The following figure shows an example of an activation code.![adad](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8425908761/p554044.png)
        
        The following messages may appear after you enter the activation code.
        
        -   If no snapshot dependency is installed on your source server, a message appears. The following figure shows the details of the message. You can decide whether to install a snapshot dependency based on whether you enable the block replication feature.
            
            -   If you want to enable block replication for the migration, enter `yes` to automatically install a snapshot dependency.
                
            -   If you do not want to enable block replication for the migration, enter `no`.
                
            
            **Important**
            
            If the snapshot dependency fails to be installed, do not enable block replication when you create a migration job. Otherwise, the migration may fail.
            
            ![123](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2524006361/p312842.png)
            
        -   The rsync tool is installed on most mainstream migration sources. If rsync is not installed on the migration source, the SMC client displays a message. Enter `yes` to install rsync, as shown in the following figure.![安装rsync](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4994588951/p50398.png)
            
        -   If SELinux is enabled on the migration source, a message that prompts you to disable SELinux appears. Enter `yes` to disable SELinux. The following figure shows how to disable SELinux.![关闭SELinux](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4994588951/p50473.png)
            
        
        If the information about the migration source is imported, a message similar to the following one is returned: `Import Source Server [s-bp11npxndknsycqj****] Successfully!`.
        
        **Note**
        
        If the information about the migration source fails to be imported, you can troubleshoot the issue based on the returned message. After you fix the issue, run the following commands to exit the background program and re-import the information about the migration source. For more information about FAQ and solutions, see [FAQ about Server Migration Center (SMC)](/help/en/smc/support/faq#concept-610474) and [Errors occurred during a server migration](/help/en/smc/support/troubleshoot-server-migration-failures/).
        
        ```
        sudo ./go2aliyun_client --abort
        sudo ./go2aliyun_client
        ```
        
    
6.  On the **Server Migration** page in the SMC console, view the status of the migration source in the **Real-time Migration Status** column.
    
    -   If the status of the migration source is **Migration SourceOnline**, the information about the migration source is imported.
        
    -   If the migration source is in another state, the information fails to be imported. In this case, troubleshoot the failure based on the following solutions and import the information about the migration source again:
        
        -   Troubleshoot the failure based on the message displayed in the SMC console or the log file in the directory where the SMC client is installed. By default, the SMC client is installed in the following directory:
            
            -   Windows server: C:\\smc
                
            -   Linux server: /smc
                
        -   For more information about frequently asked questions (FAQ) and solutions, see [FAQ about Server Migration Center (SMC)](/help/en/smc/support/faq#concept-610474) and [Errors occurred during a server migration](/help/en/smc/support/troubleshoot-server-migration-failures/).
            

### **Step 2:** Migration configurations

1.  Find the migration source that you want to manage and click **Start Migration** in the **Actions** column.
    
2.  Configure the parameters and click **Start Migration**.
    
    1.  Configure the basic parameters described in the following table.
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **Migration Job Name**
        
        The name of the migration job.
        
        Server migration
        
        **Job Description**
        
        The description of the migration job.
        
        test
        
        **Destination Type**
        
        Required. The type of the destination. Select a destination type based on the actual migration scenario.
        
        #### **ECS Image**
        
        Migrate the source server to an ECS custom image and then use the custom image to create an ECS instance.
        
        If you set the Destination Type parameter to ECS Image, the following parameters are displayed:
        
        -   **Destination Region**: the Alibaba Cloud region to which you want to migrate the source server. This parameter is required. For more information about regions, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-2459516).
            
        -   **Image Name**: the name of the destination custom image generated by SMC for the source server.
            
        
        #### **ECS Instance**
        
        Migrate the source server to an existing ECS instance whose configurations such as storage and operating system match those of the source server.
        
        **Important**
        
        During the migration, the operating system of the destination ECS instance is replaced, and automatic snapshots of the system disk are released and cannot be recovered. If you want to retain automatic snapshots for future needs or for data security considerations, you can manually cancel the release of automatic snapshots together with the disk before the migration. For more information, see [Delete automatic snapshots while releasing a disk](/help/en/ecs/user-guide/delete-automatic-snapshots-while-releasing-a-disk#task-1443759).
        
        If you set the Destination Type parameter to ECS Instance, the following parameters are displayed:
        
        -   **Destination Region**: the Alibaba Cloud region to which you want to migrate the source server. This parameter is required. For more information about regions, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-2459516).
            
        -   **Destination Instance**: the ECS instance that is used as the destination instance.
            
        
        #### **Container Image**
        
        Migrate the source server to ACR. You can migrate only Linux servers of the x86 architecture as container images. For more information, see [Migrate a server to Container Registry](/help/en/smc/user-guide/migrate-source-servers-to-container-registry).
        
        ECS Image
        
        **Migration Test**
        
        Specifies whether to enable the migration test feature. This feature helps you understand the feasibility and risks of a migration job before the migration job starts and provides solutions to identified issues. You can also obtain information such as the amount of data to be migrated, migration speed, and total duration of the migration. This helps reduce the issues and losses that may occur during the actual migration. During the test, you are charged for pay-as-you-go resources. By default, **Migration Test** is turned on.
        
        **Warning**
        
        If you set the Destination Type parameter to **ECS Instance**, snapshots are created for all disks of the destination ECS instance. If the migration test is abnormal or the Execution Method parameter is set to **Test Only**, the disk snapshots are automatically rolled back. During the migration test, the destination ECS instance is unavailable and all data is lost. Make sure that the destination ECS instance does not have important data.
        
        For more information, see [Configure a migration test](/help/en/smc/user-guide/configuration-migration-walkthrough).
        
        Keep the default setting
        
        **Execution Method**
        
        The mode in which the migration job is run. Select an execution method based on whether **Migration Test** is turned on.
        
        #### **When Migration Test is turned on**
        
        -   **Test Only**: The system performs only the migration test. After the migration test is complete, you must manually start the server migration job.
            
        -   **Test and Migrate**: The system performs the migration test. After the migration test is complete, if no test items are in the **Critical** state, the system automatically starts the server migration job. This is the default value.
            
        
        #### **When Migration Test is turned off**
        
        -   **Migrate Now**: The migration job starts immediately after it is created. This is the default value.
            
        -   **Migrate Later**: The migration job automatically starts at the specified time after it is created.
            
            **Note**
            
            The earliest time that you can specify to run a migration job is 10 minutes after the job is created.
            
        -   **Create Only**: After the migration job is created, you must click **Start Migration Job** in the **Actions** column to manually start the migration job.
            
        
        Keep the default setting
        
        **Automatic Incremental Synchronization**
        
        Specifies whether SMC automatically synchronizes incremental data of the migration source to Alibaba Cloud. By default, this feature is disabled.
        
        -   If you enable this feature, you must configure the following parameters:
            
            -   **Synchronization Interval**: the interval at which SMC automatically synchronizes incremental data to Alibaba Cloud.
                
            -   **Maximum Reserved Images**: the maximum number of images that can be retained during incremental data synchronization.
                
            
            SMC automatically synchronizes incremental data to Alibaba Cloud at the specified interval. For more information about the best practices for incremental data synchronization, see [Migrate incremental data from a server](/help/en/smc/use-cases/migrate-incremental-data-from-a-source-server#task-2314622).
            
        -   If you disable this feature, incremental data is not synchronized.
            
        
        Keep the default setting
        
        **Enable Migration Template**
        
        If you set the **Destination Type** parameter to **ECS Image**, this parameter is available.
        
        The migration template is used to preset parameters for a migration task, and the template parameters are automatically filled in when the migration starts. For more information about setting up a migration template, see [Configure the migration template](/help/en/smc/user-guide/set-up-migration-templates).
        
        Keep the default setting
        
    2.  Adjust the disk partition structure as needed. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **Modify Disk Partition**
        
        Determine whether to enable **Modify Disk Partition** based on your needs. This feature is only supported in SMC client 2.8.0 or above. For more information, see [Use the SMC client](/help/en/smc/user-guide/use-the-windows-gui-version-of-an-smc-client).
        
        -   Not enabled_:_ By default, the disk partition structure of the destination system are the same as those of the migration source.
            
        -   Enabled_:_ You can adjust the destination disk partition structure, including partition size and order, transfer method, whether to enable LVM, and other configurations.
            
            The parameter descriptions for the disk partition structure are as follows.
            
            #### Configure disks
            
            -   **System Disk**_:_ the size of the system disk of the destination instance. Unit: GiB. Valid values: 20 to 2048,
                
                The size of the destination system disk must be larger than the amount of data on the source system disk. For example, if the total size of the source system disk is 400 GiB but the size of data stored on this disk is only 100 GiB, you must set this parameter to a value greater than 100.
                
                **Note**
                
                The default value of this parameter is the size of the source system disk. We recommend that you retain the default value or specify a greater value.
                
            -   **Data Disk <N>**: the size of the data disk of the destination instance. Unit: GiB. Valid values: 1 to 32768.
                
                -   The variable `<N>` indicates the serial number of the data disk. If the disk is migrated to the destination instance, N is the ID of the data disk.
                    
                -   The size of the destination data disk must be larger than the amount of data on the source data disk. For example, if the total size of the source data disk is 500 GiB but the size of data stored on this disk is only 100 GiB, you must set this parameter to a value greater than 100.
                    
                -   If there are no mount targets under the **data disk** or if all mount targets are not migrated, the data disk will not be migrated.
                    
            -   **LVM**: Logical Volume Manager (LVM) is a mechanism for managing disk partitions in Linux systems. LVM is more flexible than traditional disk partitions and allows for dynamic adjustment of disk space.
                
                You can select whether to enable LVM based on your needs. After enabling LVM, the destination will automatically rebuild the disk with an LVM structure.
                
                **Example description**:
                
                For each destination disk where LVM is enabled, the system will create one Physical Volume (PV) and its corresponding Volume Group (VG). On the VG, a number of Logical Volume Manager (LVM) corresponding to the mount targets are created. By default, the VG name is vgX (where X is the serial number of the disk), and the LVM name is lvX (where X is the serial number of the LVM). An example is provided in the following figure.
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5720001371/p854447.png)
                
                **Important**
                
                LVM is not supported in the following scenarios:
                
                -   When the migration source is a Windows system.
                    
                -   When the system disk does not have a boot partition.
                    
                
                After enabling LVM, the feature does not take effect in the following scenarios:
                
                -   The migration source does not support lvm2 or the lvm2 package is not installed.
                    
                -   The migration source is a Debian system with a kernel version of 3.x or earlier, and disks with XFS file systems are mounted.
                    
                
            
            #### Configure mount targets
            
            -   Whether to Migrate: You can select whether to migrate the mount target based on your business needs.
                
            -   Enable Block Replication: Enabling block replication can effectively improve the stability of migration transmission speed while ensuring consistency with the source partition structure. However, the partition size cannot be modified. SMC determines whether to support enabling block replication based on the migration source disk partition status.
                
                -   If the migration source does not support block replication for partitions, the **Enable Block Replication** switch cannot be turned on, and default file replication method is used, allowing partition size modification.
                    
                -   If the migration source supports block replication for partitions, the **Enable Block Replication** switch is enabled by default to achieve partition-level disk migration.
                    
                
                **Note**
                
                -   When the migration source is a Windows operating system, the block replication feature is enabled by default and cannot be disabled.
                    
                -   If LVM is enabled on the disk and the partition size is not an integer multiple of 4 MiB, block replication does not take effect, and file replication is used for data transfer.
                    
                
            -   Set partition size: When block replication is not enabled, you can set the partition size based on your needs, but the sum of partition sizes cannot exceed the size of the disk they belong to.
                
            
            **Note**
            
            If the size of disks of the destination instance do not match that of the migration source disks, the migration task cannot be created. In this case, the system will automatically adjust the mount target positions to meet the disk size requirements. If the requirements cannot be met after the adjustment, handle the issue as prompted.
            
            You can also manually drag and drop mount targets to meet disk size requirements. However, drag-and-drop is not supported for partitions of type boot or system. The specific operations are as follows:
            
            1.  Move your pointer over ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5720001371/p852953.png) before the mount target.
                
            2.  Use your pointer to drag the mount target to another disk.
                
            
        
        Keep the default setting
        
    3.  Conditionally required. Click **Advanced Settings** to configure advanced parameters such as network type, private network IP address, and transmission speed limit. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **Network Type**
        
        The type of network that is used to migrate data from the source server to the intermediate instance. By default, data is migrated over the Internet. During the migration, SMC creates an intermediate instance that connects to a vSwitch in a VPC. If you select Public Network, a public IP address is assigned to the intermediate instance.
        
        #### **Public Network** (default value)
        
        SMC migrates data to the intermediate instance over the Internet. If you select Public Network, make sure that the source server can access the Internet. You can determine whether to specify a VPC and a vSwitch based on your business requirements.
        
        -   If you specify a VPC and a vSwitch, SMC creates an intermediate instance that connects to the specified VPC and vSwitch.
            
        -   If you do not specify a VPC or vSwitch, SMC creates an intermediate instance that connects to the VPC and vSwitch automatically created by the system.
            
        
        #### **VPC**
        
        SMC migrates data to the intermediate instance over a VPC. If you select VPC, you must specify a VPC and a vSwitch and make sure that the source server can connect to the VPC.
        
        **Note**
        
        If your server in a data center, your VM, or your third-party cloud server can connect to a VPC, we recommend that you select this network type to migrate data. Compared with migration over the Internet, migration over a VPC is more efficient and stable. You can use VPN Gateway, Express Connect, or SAG to connect a migration source to a VPC. For more information, see [Connect a data center to a VPC](/help/en/vpc/connect-vpc-to-local-idc-office-terminal-other-cloud#concept-lgm-hhl-wfb).
        
        Keep the default setting
        
        **Private IPv4 Address**
        
        If you need to change the private IP address of the destination instance, you can manually specify the private IP address. This parameter appears only when the **Destination Type** is selected as **ECS Instance**.
        
        -   **Remain Unchanged**: The default value is the IP address of the **destination** **instance** after migration and does not change.
            
        -   **Manually Specify**: You are allowed to enter an address within the available IP CIDR block of the vSwitch where the **destination instance** is located. When the migration source IP address is in the CIDR block of the vSwitch, you can change the destination instance IP address to the migration source IP address.
            
            -   When the CIDR block of the destination instance is the same as that of the migration source: Enter the private IP address of the migration source.
                
            -   When the CIDR block of the destination instance is different from that of the migration source: [Change the VPC of an ECS instance](/help/en/ecs/user-guide/change-the-vpc-of-an-ecs-instance) to make the CIDR block of the destination instance the same as that of the migration source, and then enter the private IP address of the source.
                
        
        **Transmission Speed Limit**
        
        The maximum network transfer speed during the migration. Unit: Mbit/s. If you set the **Compression Ratio** parameter to a value greater than 0, the actual network transfer speed, which is the transfer speed of compressed data, is lower than the speed displayed in the **Real-time Migration Status** column.
        
        Keep the default setting
        
        **Compression Ratio**
        
        The compression ratio of the data to be migrated. Set the compression ratio based on your business requirements.
        
        -   If the bandwidth is limited, a high compression ratio improves the transmission efficiency.
            
        -   If a high bandwidth is available, we recommend that you do not compress data. Data compression consumes CPU resources of the migration source.
            
        
        Valid values: 0 to 10. Default value: 7. A value of 0 indicates that data is not compressed.
        
        Keep the default setting
        
        **Checksum Verification**
        
        Specifies whether to verify data integrity by using a checksum. By default, this feature is disabled. If you enable this feature, data integrity is ensured, but transmission speed may be reduced.
        
        Keep the default setting
        
        **License Type**
        
        The license type. Valid values:
        
        -   **Alibaba Cloud** (default): Only a Microsoft Windows Server license is supported. After migration, you are charged license fees for an image when you use the image to create an ECS instance, and the image is automatically activated. For more information, see the [What Windows Server licenses does Alibaba Cloud support?](/help/en/smc/support/faq#section-dgm-v7i-gxx) section of the "FAQ" topic.
            
        -   **BYOL**: SMC allows you to bring your own license (BYOL). You can bring your own Microsoft license or register with Red Hat Enterprise Linux and SUSE Linux Enterprise Server. After migration, you are not charged license fees for an image when you use the image to create an ECS instance. You can use your own license for activation.
            
            **Note**
            
            If you have created an ECS instance, you can quickly purchase software licenses such as Red Hat Enterprise Linux and SUSE Linux Enterprise Server for specified ECS instances supported by Alibaba Cloud. For more information, see [Purchase a software license for an ECS instance](/help/en/ecs/user-guide/purchase-software-licenses-for-ecs-instances).
            
        
        Keep the default setting
        
        **Image Check**
        
        Specifies whether to enable the image check feature. The image check feature checks whether an image is valid and whether the image can be used to create full-featured ECS instances. You can use the image check feature when you migrate servers or VMware VMs without agents.
        
        This feature helps you identify potential issues in images or ECS instances after the migration job is complete, and provides solutions to the identified issues. This helps you improve the success rate of starting ECS instances.
        
        For more information, see [Configure image check](/help/en/smc/user-guide/configure-image-check).
        
        Keep the default setting
        
        **Tag**
        
        The tags that you specify for the migration job. Each tag contains a key and a value. You can use tags to query and manage migration jobs. For more information, see [Use tags to manage migration sources and migration jobs](/help/en/smc/use-cases/use-tags-to-manage-migration-sources-and-migration-tasks) and [Use tags to implement fine-grained access control](/help/en/smc/use-cases/use-tags-to-implement-fine-grained-access-control).
        
        **Note**
        
        You can specify up to 20 tags for a migration job.
        
        Keep the default setting
        
        **Intermediate Instance Type**
        
        The type of the intermediate instance. Select an intermediate instance type based on your business requirements. This parameter is available only if you set the **Destination Type** parameter to **ECS Image**.
        
        -   **The instance type of the intermediate instance is automatically selected**. If you specify an instance type, SMC creates an intermediate instance of the specified type. If the specified instance type is unavailable, the migration job fails to be created.
            
        -   If you do not specify an instance type, SMC automatically creates an intermediate instance.
            
        
        **Important**
        
        Do not stop, start, restart, or release the intermediate instance during the migration to prevent migration failures. After the migration is complete, SMC automatically releases the intermediate instance.
        
        Keep the default setting
        
    
3.  In the message that appears, read the migration notes and click **Got It**.
    
4.  On the **Server Migration** page, view the real-time status of the migration job.
    
    If you enable a migration test, SMC will first perform the test and proceed with the migration operation after the migration test is passed. The amount of time required for data transmission is subject to factors such as the data size of the migration source and network bandwidth. Wait until the migration job is complete. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1516890471/p877052.png)
    
    **Note**
    
    -   **Speed**: the amount of data that is migrated per second, which indicates the transfer speed of uncompressed data. If you set the **Compression Ratio** parameter to a value greater than 0, the actual network transfer speed, which is the transfer speed of compressed data, is lower than the displayed speed.
        
    -   **Time Remaining for Synchronization**: the remaining synchronization time calculated based on the current speed by using the following formula: Time remaining for synchronization = (Total data size - Transferred data size)/Speed.
        
    -   If the transmission speed is too slow to meet your plan, you may consider temporarily increasing the dedicated bandwidth of both the source server and the destination server. For more information, see [Estimate the time required for migration and test the data transfer speed](/help/en/smc/use-cases/estimate-the-time-required-for-migration-and-test-the-data-transfer-speed).
        
    
    **For details about how to subscribe to SMC migration job error-related events and modify and pause the migration job, perform the following operations.**
    
    -   To prevent migration process disruptions caused by errors in migration jobs, you can subscribe to SMC migration job error-related events in CloudMonitor so that you can promptly receive email notifications. For more information, see [Subscribe to SMC migration task error-related event notifications](/help/en/smc/use-cases/subscribe-to-smc-task-failure-event-notifications).
        
    -   When the migration job is in the **Synchronizing** state, you can perform the following operations as needed:
        
        -   Modify the migration job: In the **Actions** column, click **Modify Migration Job** to modify the Transmission Speed Limit, Compression Ratio, and Checksum Verification parameters.
            
        -   Pause the migration job: In the **Actions** column, click **Pause Migration Job**.
            
    
5.  Optional. To view details about the migration, perform the following steps:
    
    **View migration details**
    
    In the **Migration Source ID /Name** column of the destination migration source, click the migration source ID to view the job details.
    

## **Verify the migration result**

-   If **Completed** is displayed in the **Real-time Migration Status** column, the migration is successful.
    
    -   If you set the **Destination Type** parameter to **ECS Image** for the migration job, you can verify the migration result in the following way:
        
        After the migration is complete, an Alibaba Cloud custom image is generated. You can use your pointer to slide the scrollbar at the bottom to the right and click **View Report** in the **Migration Deliverables** column to view the check result of the image. For more information, see [View the image check results](/help/en/smc/user-guide/configure-image-check#1f7c2030ebra4) step of the "Configure image check" topic.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4840613371/p810468.png)
        
        ### **(Recommended) Manually verify the migration result**
        
        You can click **Create Instance** in the **Actions** column to go to the ECS instance creation page in the ECS console. The custom ECS image created by the migration job is selected by default for you to create an ECS instance. For more information, see [Create an instance by using a custom image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image).
        
        ### **Use the automatic migration result verification feature**
        
        **Note**
        
        To use this feature, you must install the Cloud Assistant Agent in your instance, and the system version of the instance must support this feature. For more information, see [Install Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent).
        
        This feature uses the `ACS-SMC-CreateAndVerifyInstance` template provided by Alibaba Cloud CloudOps Orchestration Service (OOS) to automatically verify whether the image generated by the migration job can be used to create an ECS instance and whether the ECS instance can start as expected.
        
        1.  Click **Verify Migration Result** in the **Actions** column.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1414911271/p817392.png)
            
        2.  In the dialog box that appears, read the instructions on the verification process and click **Verify Now**.
            
            You can also click **Customize Verification Parameters** to configure the parameters.
            
        3.  In the **Verify Migration Result** column, view the verification result. Valid values:
            
            -   **Verified**: indicates that the migration is successful. You can click **Details** to check the verification result.
                
            -   **Not Verified**: indicates that the migration failed. You can click **View Cause** to troubleshoot the failure.
                
            
            You can also click the ![...](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9714973061/p169257.png) icon in the Actions column and select **View Verification Records in OOS Console** to view the template history.
            
        
    -   If you set the **Destination Type** parameter to **ECS Instance** for the migration job, you can click **View Destination Instance** in the **Actions** column to go to the details page of the destination ECS instance to verify the migration result.
        
    
    After the server is migrated, you must perform the following operations to ensure normal operation of your business:
    
    -   Verify the integrity and correctness of the data. For more information, see the [How do I check my system after I migrate a Linux server?](/help/en/smc/support/faq#section-gv6-9p9-ufk) or [How do I check my system after I migrate a Windows server?](/help/en/smc/support/faq#section-thf-9yp-xf8) section of the "FAQ" topic.
        
    -   Manually start the applications and services after the migration if automatic start is not enabled for the applications and services on the source server.
        
    -   The IP address changes after the migration job is complete. If the service involves the configuration of the IP address, modify the domain name resolution and ICP filing after the migration.
        
        -   If a domain name has been bound to the source server, the public IP address of the server is changed after the migration. In this case, you must resolve the domain name to the new public IP address of the server. For more information, see [Add an A record for a website domain name](/help/en/dns/add-an-a-record-to-a-website-domain).
            
        -   If you want to keep the private IP address unchanged, you can modify the private IP address after the migration is complete.
            
            -   Migrate a server to an **ECS Image**: Modify the private IP address when creating an ECS instance. For more information, see [Specify the primary private IPv4 address when creating an ECS instance](/help/en/ecs/user-guide/modify-a-private-ip-address#e3c6288083hpl).
                
            -   Migrate a server to a **Destination Instance**: If you have not modified the IPv4 private network address in the advanced configuration of the [Migration Settings](/help/en/smc/user-guide/migrate-the-source-server-to-the-ecs-instance#48ee7a1a54pq6) step, you can also modify the IPv4 private network address after migration. For more information, see [Change the primary private IPv4 address for an existing ECS instance](/help/en/ecs/user-guide/modify-a-private-ip-address#bf60f728d0p4m).
                
    
-   If the migration test is in the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8732135071/p747547.png) state, the migration test failed.
    
    In this case, you need to check the test report, fix the test items that are in the **Critical** state, and then perform a test again. For more information, see [Configure a migration test](/help/en/smc/user-guide/configuration-migration-walkthrough).
    
-   If **Error** is displayed in the **Real-time Migration Status** column, the migration failed.
    
    In this case, you need to perform the following operations:
    
    1.  Click **Troubleshoot Errors** in the **Actions** column and fix the failure based on the error code and error message. For more information, see [FAQ about Server Migration Center (SMC)](/help/en/smc/support/faq#concept-610474) and [Errors occurred during a server migration](/help/en/smc/support/troubleshoot-server-migration-failures/).
        
    2.  In the migration source list, click **Retry Migration Job**.
        
        The migration job resumes from the point where it was suspended.
        
        **Important**
        
        If the intermediate instance is released, you must create another migration job. For more information, see the [What do I do if I release an intermediate instance by accident?](/help/en/smc/support/faq#section-1nu-xd1-bip) section of the "FAQ" topic.
        
    

## **Clear resources**

-   **Migrate a server to an ECS image**
    
    During the migration, SMC creates a temporary pay-as-you-go intermediate instance named `No_Delete_SMC_Transition_Instance` within the destination Alibaba Cloud account. The method to clear resources depends on whether the migration is successful.
    
    -   If the migration is successful, the intermediate instance is automatically released. No manual operation is required.
        
    -   If the migration failed, the intermediate instance is not automatically released and incurs fees as long as the migration job exists. You can release the intermediate instance in one of the following ways to reduce costs:
        
        -   If you no longer need the migration job, click the ID the migration job. On the job details page, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1414911271/p810498.png)** > **Clear migration task** in the **Actions** column in the Migration Jobs section to delete the migration job and release the intermediate instance at a time.
            
        -   Manually release the intermediate instance. For more information, see [Release an instance](/help/en/ecs/user-guide/release-an-instance).
            
    
-   **Migrate a server to an ECS instance**
    
    During the migration, SMC creates a temporary pay-as-you-go intermediate cloud disk named `SMC_Temp_Disk` in the destination instance. The method to clear resources depends on whether the migration is successful.
    
    -   If the migration is successful, the intermediate cloud disk is automatically released. No manual operation is required.
        
    -   If the migration failed, the intermediate cloud disk is not automatically released and incurs fees as long as the migration job exists. You can release the intermediate cloud disk in one of the following ways to reduce costs:
        
        -   If you no longer need the migration job, click the ID of the migration job. On the job details page, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1414911271/p810498.png)** > **Clear migration task** in the **Actions** column in the Migration Jobs section to delete the migration job and release the intermediate cloud disk at a time.
            
        -   Manually release the intermediate instance. For more information, see [Release a disk](/help/en/ecs/user-guide/release-a-disk).
            
    

## **R**elevant references

-   If you need to migrate incremental data multiple times, you can initiate incremental data migration multiple times at custom intervals after the first full migration is complete. This synchronizes the incremental data generated by the source server to Alibaba Cloud and reduces the suspension time and delivery time of the services provided by the source server. For more information, see [Migrate incremental data from a server](/help/en/smc/use-cases/migrate-incremental-data-from-a-source-server).
    
-   For more information about frequently asked questions (FAQ) and solutions, see [FAQ about Server Migration Center (SMC)](/help/en/smc/support/faq) and [Errors occurred during a server migration](/help/en/smc/support/troubleshoot-server-migration-failures/).
