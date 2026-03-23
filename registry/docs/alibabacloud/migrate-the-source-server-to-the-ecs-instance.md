Server Migration Center (SMC) lets you securely and efficiently migrate servers to Alibaba Cloud Elastic Compute Service (ECS). You can migrate servers from on-premises data centers, on-premises virtual machines (VMs) such as VMware, VirtualBox, Xen, KVM, and Hyper-V, and other cloud service providers such as Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), Tencent Cloud, UCloud, China Telecom e-Cloud, and QingCloud. SMC simplifies the migration process and reduces the technical barriers and risks of server migration.

## **Migration scenarios**

**Important**

Due to a change in the technical solution for intermediate instances, Server Migration Center (SMC) will no longer support migrating Windows servers to destination instances in regions outside the Chinese mainland after November 30, 2025 (UTC+8). Before this date, you can still use SMC client V2.8.5 and earlier versions. For more information about the change and its impact, see [\[Product Change\] Announcement on SMC no longer supporting the migration of Windows servers to destination instances in regions outside the Chinese mainland](/help/en/smc/product-overview/announcement-on-functional-restrictions-of-windows-server-migration-to-target-instances-in-non-mainland-china-regions).

-   **(Recommended) Migrate a server to an Alibaba Cloud ECS custom image**.
    
    If you have not purchased an Alibaba Cloud ECS instance, you can migrate your server to an Alibaba Cloud ECS custom image. Then, you can manually create an ECS instance from the custom image.
    
-   **Migrate a server to a purchased Alibaba Cloud ECS instance**.
    
    If you have an existing Alibaba Cloud ECS instance with storage, an operating system, and other configurations that are compatible with the source server, you can migrate the source server to that instance.
    
    **Warning**
    
    After the migration, the original data on the destination ECS instance is erased. The data on the source server is not affected. Therefore, do not use this migration method if the destination ECS instance contains important data.
    

## **Migration impact**

Before you migrate, take note of the following impacts.

**Impacted item**

**Description**

Migrated data directories

During migration, SMC automatically generates a destination disk partition structure that matches the source server's disk partition structure as closely as possible. You can adjust the destination disk's partition structure, including partition size, order, transfer method, and Logical Volume Management (LVM) configurations.

By default, all disks on the server are migrated:

-   If a **data disk has no mount target**, that data disk is not migrated.
    
-   If you do not need to migrate certain partition directories, you can choose not to migrate them when you adjust the partition structure.
    

Intermediate instance

Do not interfere with the intermediate instance.

To avoid migration failure, do not stop, start, restart, or release the intermediate instance during the migration. Do not change its billing method. After the migration is complete, the intermediate instance is automatically released.

**Note**

-   For each migration, SMC creates a pay-as-you-go [temporary intermediate instance](/help/en/smc/support/faq#title-9q4-e80-o94) named `No_Delete_SMC_Transition_Instance` in your destination Alibaba Cloud account to assist with the migration.
    
-   If you choose to migrate to a destination instance, that instance serves as the intermediate instance and is not automatically released.
    

For more information, see [How SMC works](/help/en/smc/product-overview/with-agent-migration#efbe48d01d31z).

IP address

The IP address changes after migration, which may cause service interruptions. Migrate during off-peak hours. If your services involve IP address configurations, modify the domain name resolution and ICP filing information after the migration.

-   If a domain name is mapped to the source server, map the domain name to the new server's public IP address. For more information, see [Add a DNS record](/help/en/dns/add-an-a-record-to-a-website-domain).
    
-   To keep the private IP address unchanged, perform the following operations:
    
    -   Migrate to an **ECS Image**: After the migration, using the ECS image, [specify the primary private IPv4 address of the primary network interface card when you purchase an ECS instance](/help/en/ecs/user-guide/modify-a-private-ip-address#e3c6288083hpl)**.**
        
    -   Migration to an **Elastic Compute Service Instance**: You can [modify the private IPv4 address of the target instance](/help/en/ecs/user-guide/modify-a-private-ip-address#bf60f728d0p4m) in the Advanced Configuration section of the Migration Settings step. You can also modify it after the migration.
        

Underlying hardware devices

After migration, the underlying hardware devices change. This may invalidate some application licenses that are bound to hardware. Check your licenses.

Performance impact

The migration process consumes server resources, including CPU, memory, disk I/O, and network bandwidth.

Data consistency before and after migration

For information about data and system configuration changes that occur before and after migration, see [Data consistency issues after migration](/help/en/smc/support/data-consistency-issues-after-migration).

**Impact on web applications after server migration**

After you migrate a server to Alibaba Cloud ECS, your business's network topology, computing and storage resources, application security settings, costs, monitoring, compatibility, network latency and bandwidth, backup and recovery, and operations and maintenance (O&M) processes will change. You must also consider the following aspects:

Impacted item

Description

Network connectivity

After migration, the ECS instance uses a new virtual private cloud (VPC). Its network location and other configurations change with the VPC migration. The ECS instance cannot directly communicate with the original network or other ECS instances in the VPC. To enable communication across accounts and VPCs, see [VPC connections](/help/en/vpc/cross-vpc-interconnection-overview/).

Security group

After migration, the ECS instance uses new security group rules to control inbound and outbound traffic. Changes to access rules may affect normal business access. If the destination account's security group does not have the necessary rules, you can quickly add them by exporting the rules from the original ECS instance's security group and importing them into the destination security group. For more information, see [Import and export security group rules](/help/en/ecs/user-guide/manage-security-group-rules#f3d78f19b0t3z).

SSL Certificate

If your website uses HTTPS, you need to apply for and install an SSL Certificate. You can apply for a free SSL certificate from Alibaba Cloud and deploy it to your ECS instance. For more information, see [Purchase and deploy an SSL certificate to an ECS instance](/help/en/ssl-certificate/deploy-ssl-certificates-to-cloud-servers).

Data migration

To migrate data from other servers to Alibaba Cloud, you can use methods such as FTP, SCP, or manual backup to OSS. For more information, see [Transfer files to an ECS instance](/help/en/ecs/user-guide/choose-how-to-transfer-files) and [Use ossutil to transfer data to an ECS instance](/help/en/oss/developer-reference/overview-59/#concept-cnr-3d4-vdb).

Other configurations

Ensure that database connections, APIs, and Server Load Balancer (SLB) instances point to the new domain name and ECS IP address.

## Preparations

-   Complete the [pre-migration preparations](/help/en/smc/user-guide/preparing-for-server-migration) for the server.
    
-   Read the [migration guide](/help/en/smc/user-guide/server-migration-guidelines) to understand the SMC client, migration principles, billing, migration process, and feedback channels.
    
-   To prevent data loss, back up important data to an image, snapshot, or a storage device other than the instance before you start the migration.
    
-   When you migrate servers across international regions, the migration speed may be slow because of unstable public network conditions. You can [estimate the migration time and test the transfer speed](/help/en/smc/use-cases/estimate-the-time-required-for-migration-and-test-the-data-transfer-speed#task-2333818). We recommend that you [connect your source server to the Alibaba Cloud VPC](/help/en/vpc/connect-vpc-to-local-idc-office-terminal-other-cloud#concept-lgm-hhl-wfb) using a VPN Gateway, Express Connect circuit, physical connection, or Smart Access Gateway, and then migrate over the private network.
    
-   If you can directly access a VPC in an Alibaba Cloud region from your on-premises data center, VM environment, or cloud host, we recommend that you use the SMC [private network migration](/help/en/smc/use-cases/migrate-servers-over-a-vpc) solution. This solution is faster and more stable than migrating over the public network and improves migration efficiency.
    
-   To migrate a source server to a purchased Alibaba Cloud ECS instance:
    
    -   If the source server runs a Linux system, the destination instance must run a Linux distribution. If the source server runs a Windows system, the destination instance must run a Windows system.
        
    -   The number of data disks attached to the destination instance must be greater than or equal to the number of data disks on the source server. If the destination instance does not have enough data disks, you must [attach data disks](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb).
        
    -   The capacity of the system disk and data disks on the destination instance must be greater than or equal to the capacity of the system disk and data disks on the source server. If you want to reduce the disk size, the capacity of the system and data disks on the destination instance must be greater than or equal to the used capacity of the disks on the source server. If the disk capacity of the destination instance is insufficient, you must [resize the disks](/help/en/ecs/user-guide/resize-cloud-disks/).
        

## **Migration procedure**

### **Step 1: Import the migration source**

A migration source is an on-premises server, a VM, or a server on another cloud platform that you plan to migrate.

#### **(Recommended) Import the migration source using a command**

**Important**

-   The source server must have **public network access**. If the source server has firewall restrictions, see [What are the SMC service domain names?](/help/en/smc/support/faq#731f25bdedugh) to obtain the SMC domain names and ports, and add them to the firewall whitelist.
    
-   If your source server cannot access the public network or you want to use private network transmission to improve migration efficiency, see the [private network migration](/help/en/smc/use-cases/migrate-servers-over-a-vpc) solution.
    

1.  Go to the [SMC console - Server Migration](https://smc.console.alibabacloud.com/toCloud/server) page.
    
2.  On the **Server Migration** page, click **Import Migration source**.
    
3.  Configure the parameters as prompted on the page and copy the activation code command. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Workgroup** (Optional)
    
    This applies to **batch migration to ECS images**. For single server migration, skip this parameter.
    
    You can add multiple migration sources to the same workgroup for management. Migration sources associated with a workgroup must have automatic incremental synchronization enabled during migration. For more information about batch server migration, see [Batch server migration](/help/en/smc/user-guide/workgroup-migration).
    
    If no workgroup has been created, click **Create a New Workgroup**.
    
    **Migration Source Type**
    
    **Physical Machine/VM/Cloud Server on Other Cloud Platform**
    
    **Import Method**
    
    Select **Command Line Import**.
    
    > Generate an activation code script command as needed. Run it on the source server to import the migration source.
    
    **Migration Source Quota**
    
    The number of migration sources that can be activated with the activation code. The value ranges from 1 to 1,000. The default is 200.
    
    **Validity Period**
    
    The validity period of the activation code. The value ranges from 1 to 90 days. The default is 90 days.
    
    **Activation Code**
    
    After generating the activation code, copy the command. Follow these steps:
    
    1.  Click **Generate**.
        
    2.  Based on the source server's operating system, click the **Linux Shell** or **Windows Powershell** tab.
        
    3.  Click **Copy** to copy the activation code command.
        
    
4.  Log on to the source server, and then paste and run the copied command with **administrator privileges** to import the migration source.
    
    ## Linux source server
    
    1.  Log on to the Linux source server.
        
    2.  Paste and run the copied command with **administrator privileges** to import the migration source.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3258862961/p701476.png)
        
        A message similar to `Import Source Server [s-bp18x8751kgz2oyh****] Successfully!` appears. This indicates that the migration source was imported successfully.
        
    
    ## Windows source server
    
    1.  Log on to the Windows source server.
        
    2.  Open Windows PowerShell as an administrator.
        
    3.  Paste and run the copied command to import the migration source.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3258862961/p701486.png)
        
        A message similar to `Import Source Server [s-bp19rlidl3mwuptc****] Successfully!` appears. This indicates that the migration source was imported successfully.
        
        > If the command fails to run, see [What do I do if the command fails when I import a Windows migration source from the command line?](/help/en/smc/support/how-to-resolve-the-failure-of-command-execution-when-importing-windows-migration-source-through-command-line).
        
    
5.  In the SMC console, on the **Server Migration** page, you can check the status of the migration source in the **Real-time Migration Status** column.
    
    -   If the status is **Source Online**, the import succeeded.
        
    -   If the status is any other value, the import has failed. To resolve the issue, refer to the following solutions and then try the import again.
        
        -   Troubleshoot based on the error message in the console or by checking the SMC client log file. The default installation directories for the SMC client are:
            
            -   Windows source server: C:\\smc.
                
            -   Linux source server: /smc.
                
        -   For more information about common issues and solutions, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshoot errors](/help/en/smc/support/troubleshoot-server-migration-failures/#concept-2267505).
            

#### **Import the migration source using the SMC client**

**Important**

-   The client must be running on the source server. Public network access mode is enabled by default. If the source server has firewall restrictions, see [What are the SMC service domain names?](/help/en/smc/support/faq#731f25bdedugh) to obtain the SMC domain names and ports, and add them to the firewall whitelist.
    
-   If your source server cannot access the public network or you want to use private network transmission to improve migration efficiency, see the [private network migration](/help/en/smc/use-cases/migrate-servers-over-a-vpc) solution.
    

1.  Go to the [SMC console - Server Migration](https://smc.console.alibabacloud.com/toCloud/server) page.
    
2.  On the **Server Migration** page, click **Import Migration source**.
    
3.  On the **Import Migration Source** page, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Source Type**
    
    **Physical Machine/VM/Cloud Server on Other Cloud Platform**.
    
    **Import Method**
    
    Select **Client Import**.
    
    > You need to manually download and install the SMC client on the source server.
    
    **Import Instructions**
    
    1.  In the **Import Instructions** section, follow the prompts to download, install, and activate the corresponding SMC client based on the source server's operating system (Linux or Windows) and architecture (32-bit or 64-bit).
        
    2.  Click **Generate Activation Code** and copy the activation code information.
        
        > You need to enter the activation code when installing the client.
        
    
4.  Import the migration source.
    
    **Important**
    
    Do not close the SMC client during the migration. Otherwise, the migration source loses its connection with the SMC console, which causes the migration to fail.
    
    ## Import a Windows migration source
    
    1.  Use a remote connection tool that supports file transfer, such as WinSCP, to upload the [SMC client](/help/en/smc/user-guide/use-the-windows-gui-version-of-an-smc-client#3d950345141wg) to the Windows source server.
        
    2.  On the Windows source server, use the system's built-in or a third-party decompression tool to extract the SMC client package.
        
    3.  In the SMC client folder that matches your source system version, double-click the go2aliyun\_client.exe application.
        
        > You will be prompted for administrator permissions. Click **OK**.
        
    4.  Obtain an activation code or an AccessKey pair.
        
        -   (Recommended) Obtain an activation code: In the **Import Instructions** section of the SMC console, click **Generate Activation Code** and copy the activation code.
            
        -   Obtain an AccessKey pair: An AccessKey pair for an Alibaba Cloud account consists of an AccessKey ID and an AccessKey secret. If you have not created an AccessKey pair, create one. For more information, see [Create an AccessKey pair](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair#task968).
            
    5.  Follow the prompts to enter the values for `access_access_token_id` and `access_token_code`, and press `Enter`.
        
        A message similar to `Import Source Server [s-bp18x8751kgz2oyh****] Successfully!` appears, which indicates that the migration source is imported successfully.
        
    
    ## Import a Linux migration source
    
    1.  Use a remote connection tool that supports file transfer, such as WinSCP, to upload the [SMC client](/help/en/smc/user-guide/use-the-windows-gui-version-of-an-smc-client#3d950345141wg) to the Linux source server.
        
    2.  Remotely connect to the Linux source server and decompress the SMC client package.
        
        This example uses the `Linux 64-bit General-purpose Edition`. If you use a different version of the SMC client, replace the package name in the command with the actual downloaded file name.
        
        ```
        tar -zxvf go2aliyun_client.tar.gz
        ```
        
        **Note**
        
        The **Linux 64-bit Arm Edition** supports the g6r general-purpose and c6r compute-optimized instance families. For more information about instance families, see [Arm-based enterprise-level computing instance families](/help/en/ecs/user-guide/overview-of-instance-families#table-y5i-qt9-7k9).
        
    3.  (Optional) You can [filter and exclude files or directories that you do not want to migrate](/help/en/smc/support/faq#section-16v-x4q-4z9).
        
        **Important**
        
        If you enable block replication for migration, you cannot exclude files or directories from migration.
        
    4.  Obtain an activation code or an AccessKey pair.
        
        -   (Recommended) Obtain an activation code: In the **Import Instructions** section of the SMC console, click **Generate Activation Code** and copy the activation code.
            
        -   Obtain an AccessKey pair: An AccessKey pair for an Alibaba Cloud account consists of an AccessKey ID and an AccessKey secret. If you have not created an AccessKey pair, create one. For more information, see [Create an AccessKey pair](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair#task968).
            
    5.  In the SMC client folder, run the following commands to run the SMC client.
        
        > This example uses the \`go2aliyun\_client2.6.5\_linux\_x86\_64\` directory. The directory name changes with the client version. Replace it with the name of the folder that you downloaded and decompressed.
        
        ```
        cd go2aliyun_client2.6.5_linux_x86_64
        sudo chmod +x go2aliyun_client
        sudo ./go2aliyun_client
        ```
        
    6.  Follow the prompts to enter the activation code or AccessKey pair. This example uses an activation code:![adad](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8425908761/p554044.png)
        
        After you enter the activation code or AccessKey pair, the following prompts may appear:
        
        -   If the source system does not have a snapshot driver installed, the SMC client prompts you. As shown in the following figure, you can choose whether to install the snapshot driver.
            
            -   If you enable block replication when you create the migration task, enter `yes` to automatically install the snapshot driver.
                
            -   If you do not enable block replication when you create the migration task, enter `no`.
                
            
            **Important**
            
            If the snapshot driver fails to install, do not enable block replication when you create the migration task. Otherwise, the migration fails.
            
            ![123](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2524006361/p312842.png)
            
        -   Most mainstream source systems have rsync installed by default. If not, the SMC client prompts you. Enter `yes` to automatically install rsync, as shown in the following figure.![安装rsync](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4994588951/p50398.png)
            
        -   If SELinux is enabled on the source system, the SMC client prompts you to disable it. Enter `yes` to automatically disable SELinux, as shown in the following figure.![关闭SELinux](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4994588951/p50473.png)
            
        
        A message similar to `Import Source Server [s-bp11npxndknsycqj****] Successfully!` appears, which indicates that the migration source is imported successfully.
        
        **Note**
        
        If importing the migration source fails, you can troubleshoot the issue based on the response message. Then, run the following commands in sequence to exit the background program and re-import the migration source. For more information about common issues and solutions, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshoot errors](/help/en/smc/support/troubleshoot-server-migration-failures/#concept-2267505).
        
        ```
        sudo ./go2aliyun_client --abort
        sudo ./go2aliyun_client
        ```
        
    
5.  In the SMC console, on the **Server Migration** page, you can check the status of the migration source in the **Real-time Migration Status** column.
    
    -   If the status is **Source Online**, the import succeeded.
        
    -   If the status is any other value, the import has failed. To resolve the issue, refer to the following solutions and then try the import again.
        
        -   Troubleshoot based on the error message in the console or by checking the SMC client log file. The default installation directories for the SMC client are:
            
            -   Windows source server: C:\\smc.
                
            -   Linux source server: /smc.
                
        -   For more information about common issues and solutions, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshoot errors](/help/en/smc/support/troubleshoot-server-migration-failures/#concept-2267505).
            

### **Step 2: Configure the migration**

1.  Find the migration source that you want to manage and click **Start Migration** in the **Actions** column.
    
2.  Configure the parameters and click **Start Migration**.
    
    1.  Configure basic parameters.
        
        **Parameter**
        
        **Description**
        
        **Destination Type** (Required)
        
        Select the destination type based on your migration scenario:
        
        #### **ECS Image**
        
        Convert the existing source server into an ECS custom image, and then use that custom image to create a new ECS instance to complete the migration.
        
        The following table describes the configuration items:
        
        -   **Destination Region**: The Alibaba Cloud region to which you want to migrate your source server. This parameter is required. For more information about regions, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-2459516).
            
        -   **Image Name Prefix**: The name of the destination Alibaba Cloud custom image that SMC generates for the migration source.
            
        
        #### **ECS Instance**
        
        Migrate the source server directly to a purchased ECS instance. The storage, operating system, and other configurations of the source server and the purchased ECS instance must be compatible.
        
        **Important**
        
        When migrating to a destination instance, the operating system of the destination instance is replaced first. Automatic snapshots of the system disk are cleared and cannot be recovered. To retain automatic snapshots for future use or data security, you can manually disable the automatic release of snapshots with the disk before migration. For more information, see [Configure automatic snapshots to be released with disks](/help/en/ecs/user-guide/enable-or-disable-an-automatic-snapshot-policy#1abb5dfb98d4a).
        
        The following table describes the configuration items:
        
        -   **Destination Region**: The Alibaba Cloud region to which you want to migrate your source server. This parameter is required. For more information about regions, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-2459516).
            
        -   **Destination Instance**: Select an ECS instance as the destination instance.
            
        
        **Migration Drill**
        
        The migration drill feature helps you understand the feasibility and risks of a migration task before the actual migration. It provides information such as data volume, migration speed, and total migration time, and offers repair suggestions to reduce potential problems and losses during the actual migration. Pay-as-you-go resources will incur some fees during the migration drill. By default, **Migration Drill** is enabled.
        
        **Warning**
        
        If the destination type is **ECS Instance**, snapshots will be created for all disks of the destination ECS instance during the migration drill. If the drill is abnormal or the execution mode is **Drill Only**, the snapshots will be automatically rolled back after the migration drill is complete. The destination ECS instance will be unavailable during the migration drill, and data will be lost. Ensure that the destination ECS instance does not contain important data.
        
        For more information, see [Configure a migration drill](/help/en/smc/user-guide/configuration-migration-walkthrough).
        
        **Execution Mode**
        
        Select an execution mode based on whether **Migration Drill** is enabled:
        
        #### **If Migration Drill is enabled**
        
        -   **Drill Only**: Creates only a migration drill task. After the drill is complete, you must manually start the server migration task if you want to migrate the server.
            
        -   **Drill and Migrate**: After the migration drill is complete, the system automatically starts the server migration task if there are no drill items with a **Critical** status. **Drill and Migrate** is selected by default.
            
        
        #### **If Migration Drill is not enabled**
        
        -   **Migrate Now**: Starts the migration immediately after creating the migration task. **Migrate Now** is selected by default.
            
        -   **Schedule Migration**: Creates a migration task that automatically starts at a set time.
            
            **Note**
            
            The earliest scheduled execution time can be set to 10 minutes from the current time.
            
        -   **Create Only**: Creates only a migration task. You must later manually start the migration task by clicking **Start Migration** in the **Actions** column.
            
        
        **Automatic Incremental Synchronization**
        
        Specifies whether the migration task automatically synchronizes incremental data from the source server to Alibaba Cloud. By default, automatic incremental synchronization is disabled.
        
        -   If you enable this switch, you need to set the following configuration items:
            
            -   **Sync Repeat Frequency**: The time interval at which the incremental migration task is automatically executed periodically.
                
            -   **Max Image Retention**: The maximum number of images that the incremental migration task retains by default.
                
            
            The migration task will run periodically and synchronize incremental data to Alibaba Cloud. For best practices on incremental migration, see [Incremental server migration](/help/en/smc/use-cases/migrate-incremental-data-from-a-source-server#task-2314622).
            
        -   If you disable this switch, the migration task runs only once.
            
        
        **Enable Migration Template**
        
        This parameter appears only when **Destination Type** is set to **ECS Image**.
        
        Migration templates are used to preset migration task parameters. When you start a migration, the template parameters are automatically filled in. For more information about setting a migration template, see [Set a migration template](/help/en/smc/user-guide/set-up-migration-templates).
        
        **Network Mode**
        
        Select the network to use for transferring migration data to the intermediate instance. By default, public network transmission is used. The intermediate instance is created in the selected virtual private cloud (VPC) and vSwitch, so it is assigned a public IP address.
        
        #### **Public Network Transmission** (Default)
        
        Migration data is transferred to the intermediate instance over the public network. This mode requires the source server to have public network access. As needed, choose whether to specify a VPC and a vSwitch.
        
        -   Specify a VPC and vSwitch: The migration task creates an intermediate instance in your specified VPC and vSwitch.
            
        -   Do not specify a VPC and vSwitch: The migration task creates an intermediate instance in a system-generated VPC and vSwitch.
            
        
        #### **Private Network Transmission**
        
        Migration data is transferred to the intermediate instance over the VPC's internal network. This mode requires you to connect the source server to the Alibaba Cloud VPC and specify a VPC and vSwitch.
        
        **Note**
        
        If you can directly access a VPC in an Alibaba Cloud region from your on-premises data center, VM environment, or cloud host, we recommend using this migration method. Using the internal network provides faster and more stable data transmission than the public network, improving migration efficiency. You can connect the source server to the cloud VPC using a VPN Gateway, Express Connect circuit, physical connection, or Smart Access Gateway. For more information, see [Connect a VPC to an on-premises data center or another cloud](/help/en/vpc/connect-vpc-to-local-idc-office-terminal-other-cloud#concept-lgm-hhl-wfb).
        
        **Destination Instance IPv4 Private Address**
        
        To change the private IP address of the destination instance, you can manually specify a private IP address. This parameter appears only when **Destination Type** is set to **ECS Instance**.
        
        -   **Keep Unchanged**: By default, the migration IP address of the **destination instance** remains unchanged.
            
        -   **Manually Specify**: Allows you to enter an address within the available IP CIDR block of the vSwitch where the **destination instance** is located. When the migration source's IP address is in the vSwitch's CIDR block, you can change the destination instance's IP address to the migration source's IP address.
            
            -   When the destination instance's CIDR block is the same as the migration source's: Directly enter the private IP address of the migration source.
                
            -   When the destination instance's CIDR block is different from the migration source's: You first need to [change the VPC of the destination instance](/help/en/ecs/user-guide/change-the-vpc-of-an-ecs-instance) so that their CIDR blocks are the same, and then enter the private IP address of the migration source.
                
        
    2.  Adjust the disk partition structure as needed. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Adjust Disk Partition Structure**
        
        Choose whether to enable adjusting the disk partition structure based on your needs. This feature is supported only in SMC client V2.8.0 and later. For more information about the SMC client, see [SMC client user guide](/help/en/smc/user-guide/use-the-windows-gui-version-of-an-smc-client).
        
        -   Disabled: The source instance's disk information is not displayed. The system automatically reads the source instance's disk information and generates a disk structure. After migration, the destination disk partition structure will be consistent with the automatically generated structure by default.
            
        -   Enabled: The source instance's disk information is displayed. The system automatically reads the source instance's disk information and generates a disk structure. You can adjust the destination disk partition structure, including partition size and order, transfer method, and whether to enable LVM.
            
            The following table describes the disk partition structure parameters:
            
            #### **Configure disks**
            
            -   **System Disk**: The size of the destination Alibaba Cloud server's system disk, in GiB. The system disk size ranges from 20 to 2,048.
                
                The destination system disk size must be larger than the actual used space of the source system disk. For example, if the source system disk is 400 GiB and 100 GiB is used, the destination system disk size must be greater than 100 GiB.
                
                **Note**
                
                The default value is the size of the source system disk. If you do not need to reduce the system disk capacity, we recommend not setting it to a value smaller than the default.
                
            -   **Data Disk** <N>: The size of the destination Alibaba Cloud server's data disk, in GiB. The data disk size ranges from 1 to 32,768.
                
                -   The variable `<N>` represents the data disk number. If migrating to a destination instance, N is the data disk ID.
                    
                -   The data disk size must be larger than the actual used space of the source data disk. For example, if the source data disk is 500 GiB and 100 GiB is used, the destination data disk size must be greater than 100 GiB.
                    
                -   If the **Data Disk** has no mount target or all mount targets are set not to be migrated, the data disk will not be migrated.
                    
            -   **LVM**: Logical Volume Management (LVM) is a mechanism for managing disk partitions in Linux systems. LVM is more flexible than standard disk partitions and allows for dynamic adjustment of disk space.
                
                You can choose whether to enable LVM based on your needs. If LVM is enabled, the destination will automatically rebuild the disk with an LVM structure.
                
                The following is an example:
                
                For each destination disk with LVM enabled, the system creates one physical volume (PV) and its corresponding volume group (VG). On this VG, it creates a number of logical volumes (LVs) equal to the number of mount targets. The VG name defaults to vgX (where X is the disk's sequence number), and the LV name defaults to lvX (where X is the LV's sequence number). For example:
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5720001371/p854447.png)
                
                **Important**
                
                LVM is not supported:
                
                -   You cannot enable LVM if the migration source is a Windows system.
                    
                -   LVM requires a boot partition on the system disk.
                    
                
                After enabling LVM, the feature will not take effect in the following scenarios:
                
                -   The migration source does not support lvm2 or the lvm2 package is not installed.
                    
                -   The migration source is a Debian system with a kernel version of 3.x or earlier, and has a disk with an XFS file system mounted.
                    
                
            
            #### **Configure mount targets**
            
            -   Migrate: You can choose whether to migrate the mount target based on your business needs.
                
            -   Enable block replication: Using block replication can effectively improve the stability of migration transfer speed and ensure consistency with the source partition structure, but the partition size cannot be modified. SMC determines whether to support enabling block replication based on the state of the source disk partition.
                
                -   If the source partition does not support enabling **block replication**, the switch cannot be turned on. The default file replication is used, and the partition size can be modified.
                    
                -   If the source partition supports enabling **block replication**, block replication is enabled by default to achieve partition-level disk migration.
                    
                
                **Note**
                
                -   When the migration source is a Windows operating system, the block replication feature is enabled by default and cannot be disabled.
                    
                -   If LVM is enabled on the disk and the partition size is not an integer multiple of 4 MiB, block replication will not take effect, and file replication will be used for data transfer.
                    
                
            -   Set partition size: When block replication is not enabled, you can set the partition size as needed, but the sum of partition sizes cannot exceed the size of the belonging disk.
                
            
            **Note**
            
            If the disk sizes of the destination instance do not match the source disks, the task cannot be created. In this case, the system automatically adjusts the mount target positions to meet the disk size requirements. If the requirements are still not met after adjusting the mount targets, resolve the issue based on the interface prompts.
            
            You can also manually drag and drop mount target positions to meet the disk size requirements. However, boot partitions or system partitions cannot be dragged. Follow these steps:
            
            1.  Hover your mouse over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5720001371/p852953.png) icon in front of the mount target.
                
            2.  Drag the mount target to another disk with your mouse.
                
            
        
    3.  To set advanced parameters, such as the network mode, private IP address, or transfer speed limit, click **Advanced Configuration**. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Task Name**
        
        The name of the migration task.
        
        **Task Description**
        
        Enter a description for the migration task.
        
        **Transfer Speed Limit**
        
        The transfer speed limit restricts the actual network transfer speed, in Mbps. If the **Compression Ratio** is set to a value greater than 0, the actual network transfer speed (the speed of compressed data transfer) will be less than the speed displayed in the **Real-time Migration Status**.
        
        **Compression Ratio**
        
        The level of data compression during migration. Set the compression ratio based on your actual needs.
        
        -   In environments with limited bandwidth, using a high compression ratio can increase data transfer speed.
            
        -   In environments with very high bandwidth, we recommend not compressing data to reduce the CPU resource consumption on the source server.
            
        
        The value ranges from 0 to 10. The default is 7. A value of 0 means no data compression.
        
        **Checksum Verification**
        
        Disabled by default. Enabling it enhances data consistency verification but may reduce transfer speed.
        
        **SSL Encrypted Transmission**
        
        The default is **Auto Select**. Using Secure Sockets Layer (SSL) encryption for data transmission can improve data security and ensure data integrity.
        
        **License Type**
        
        Select the license type.
        
        -   **Alibaba Cloud** (Default): Currently only supports Microsoft Windows Server licenses. When you create an ECS instance from the image in Hong Kong (China) or other regions outside China, you will be charged an image license fee, and the license will be automatically activated. The specific fee is subject to the information displayed when creating the instance.
            
        -   **Bring Your Own License****:** Bring Your Own License (BYOL) migration to the cloud currently includes Microsoft, Red Hat Enterprise Linux, and SUSE Linux Enterprise Server. When you create an ECS instance from the image after migration, you will not be charged an image license fee. Please use your own license for activation.
            
            **Note**
            
            If you have already created an ECS instance, Alibaba Cloud supports quickly purchasing software licenses such as Red Hat Enterprise Linux and SUSE Linux Enterprise Server for the specified ECS instance. For more information, see [Purchase a software license for an ECS instance](/help/en/ecs/user-guide/purchase-software-licenses-for-ecs-instances).
            
        
        **Image Detection**
        
        The image detection feature mainly checks whether an image is valid and whether it can be used to create a fully functional ECS instance. You can use the image detection feature when creating server migration and VMware agentless migration tasks.
        
        Image detection helps you quickly identify potential problems with the image or instance after migration and provides repair solutions to make it compliant with Alibaba Cloud standards, improving the success rate of instance startup.
        
        For more information, see [Configure image detection](/help/en/smc/user-guide/configure-image-check).
        
        **Tags**
        
        Bind tag key-value pairs to the migration task for easy querying and management. For more information, see [Use tags to manage migration sources and tasks](/help/en/smc/use-cases/use-tags-to-manage-migration-sources-and-migration-tasks) and [Implement fine-grained permission management using tags](/help/en/smc/use-cases/use-tags-to-implement-fine-grained-access-control).
        
        **Note**
        
        A single migration task can be bound with up to 20 tags.
        
        **Intermediate Instance Type**
        
        You can select an intermediate instance type based on your actual needs. This parameter appears only when **Destination Type** is set to **ECS Image**.
        
        -   If you specify this parameter, the system will use this instance type to create the intermediate instance. If this instance type is out of stock, the migration task creation will fail.
            
        -   If you do not select an intermediate instance type, the system will select an instance type to create the intermediate instance.
            
        
        **Important**
        
        To avoid migration errors, do not stop, start, restart, or release the intermediate instance during the migration process. After the migration is complete, the instance is automatically released.
        
        **Upload Diagnostic Logs**
        
        Automatically upload SMC client logs to the SMC server-side for error diagnosis and analysis, which helps locate problems when migration errors occur. This feature is enabled by default.
        
        SMC client logs are generally saved in the `/smc/go2aliyun_client*/Logs` directory under the installation directory.
        
    
3.  In the message that appears, read the migration notes and click **Got It**.
    
4.  On the **Server Migration** page, you can view the real-time migration status.
    
    If you enabled the migration drill, SMC first performs the migration drill. The transmission time is affected by factors such as the data volume and network bandwidth. Wait for the migration task to be completed.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1516890471/p877052.png)
    
    **Note**
    
    -   **Speed**: The amount of migration data transferred per second, which is calculated based on uncompressed data. If the **Compression Ratio** is set to a value greater than 0 when you create the migration task, the displayed speed will be greater than the actual network transfer speed, which is the transfer speed of compressed data.
        
    -   **Remaining Sync Time**: The estimated time to complete the synchronization, calculated as (Total Data Volume - Transferred Data Volume) / Speed.
        
    -   If the transfer speed is too slow, you can temporarily increase the fixed bandwidth of the source and destination servers. For more information, see [Estimate migration time and test transfer speed](/help/en/smc/use-cases/estimate-the-time-required-for-migration-and-test-the-data-transfer-speed).
        
    
    **Subscribe to migration error events, modify the migration, or pause the migration as follows:**
    
    -   To prevent the migration process from being interrupted by task errors, you can [subscribe to SMC migration task error event notifications](/help/en/smc/use-cases/subscribe-to-smc-task-failure-event-notifications) in CloudMonitor to receive timely email notifications.
        
    -   When the migration task status is **Syncing**, you can also perform the following operations as needed:
        
        -   To modify a migration task, in the **Actions** column, click **Modify Migration** to change parameters such as the transfer speed limit, compression ratio, and Checksum verification.
            
        -   To pause the migration task, click **Pause Migration** in the **Actions** column.
            
    
5.  (Optional) View migration details.
    
    In the **Source ID/Name** column for the migration source, click the source ID to view the migration details.
    

## **Verify the migration result**

-   A **Real-time Migration Status** of **Completed** indicates a successful migration.
    
    -   If you set **Destination Type** to **ECS Image**:
        
        After the migration is successful, a custom Alibaba Cloud image is created. You can scroll to the right and in the **Migration Deliverable** column, click **View Report** to view the image detection results. For more information, see [View image detection results](/help/en/smc/user-guide/configure-image-check#1f7c2030ebra4).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1516890471/p877056.png)
        
        ### **(Recommended) Manually verify the migration result**
        
        In the **Actions** column, click **Create Instance**. You are redirected to the instance creation page in the ECS console with the custom image pre-selected. For more information, see [Create an instance using a custom image or a shared image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1516890471/p877063.png)
        
        ### **Automatically verify the migration result**
        
        **Note**
        
        To use this feature, you need to install the Cloud Assistant plugin on the instance, and the instance's operating system version must support the plugin. For more information, see [Install Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent).
        
        This feature uses the Alibaba Cloud-provided OOS template `ACS-SMC-CreateAndVerifyInstance` to automatically verify whether an ECS instance can be created from the image generated by the migration task and start as expected.
        
        1.  In the **Actions** column, click **Verify Migration Result**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1516890471/p877062.png)
            
        2.  In the dialog box that appears, review the verification process and click **Verify Now**.
            
            You can also click **Customize Verification Script Parameters** to manually configure verification parameters.
            
        3.  View the verification result in the **Verify Migration Result** column.
            
            -   **Verification Passed**: The migration is valid. You can click **Details** to view the verification details.
                
            -   **Verification Not Completed**: Indicates that the migration result is abnormal. You can click **View Reason** to find the cause of the error and troubleshoot the problem.
                
            
            You can also click ![...](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9714973061/p169257.png) in the Actions column and then click **Go to OOS to View Historical Verifications** to view the execution history of the OOS template.
            
        
    -   If you set **Destination Type** to **ECS Instance**, you can click **View Destination Instance** in the **Actions** column to view the details of the destination ECS instance.
        
    
    After you migrate the server, perform the following operations to ensure that your business runs as expected:
    
    -   Perform data validation and verification to ensure data integrity and correctness. For more information, see [How do I check the system after migrating a Linux server?](/help/en/smc/support/faq#section-gv6-9p9-ufk) or [How do I check the system after migrating a Windows server?](/help/en/smc/support/faq#section-thf-9yp-xf8).
        
    -   If applications and services on the source server are not set to auto-start, you must manually start them after the migration.
        
    -   The IP address changes after the migration. If your business involves IP address configurations, you must modify the domain name resolution, ICP filing, and other settings after the migration.
        
        -   If a domain name is mapped to the source server, map the domain name to the public IP address of the destination server. For more information, see [Add a DNS record](/help/en/dns/add-an-a-record-to-a-website-domain).
            
        -   If you want to keep the original private IP address, you can manually modify it after the migration is complete.
            
            -   Migrate to an **ECS Image**: You can modify the private IP address when you create an ECS instance. For more information, see [Specify the primary private IPv4 address for the primary NIC when creating an ECS instance](/help/en/ecs/user-guide/modify-a-private-ip-address#e3c6288083hpl).
                
            -   Migrate to an **ECS Instance**: If you do not modify the private IPv4 address in the advanced configuration during the [migration settings](#48ee7a1a54pq6) step, you can modify it after the migration is complete. For more information, see [Modify the primary private IPv4 address of the primary NIC for an existing instance](/help/en/ecs/user-guide/modify-a-private-ip-address#bf60f728d0p4m).
                
    
-   If the migration drill status is ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8732135071/p747547.png), the migration drill failed.
    
    You need to view the drill report, fix any items marked as **Critical**, and then retry the migration drill. For more information, see [Configure a migration drill](/help/en/smc/user-guide/configuration-migration-walkthrough).
    
-   If the **Real-time Migration Status** is **Error**, the migration task has encountered an error.
    
    In this case, you must troubleshoot the issue and retry the migration:
    
    1.  In the **Actions** column, click **Troubleshoot Error** and resolve the issue based on the error code and error message. For more information, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshoot errors](/help/en/smc/support/troubleshoot-server-migration-failures/).
        
    2.  After fixing the problem, click **Retry Migration** in the **Actions** column. The system will resume the migration from where it left off.
        
        **Important**
        
        If the intermediate instance has been released, you must start a new migration. For more information, see [What do I do if I accidentally release an intermediate instance?](/help/en/smc/support/faq#section-1nu-xd1-bip).
        
    

## **Clean up** resources

### **Migrate to an ECS image**

During the migration, SMC creates a temporary pay-as-you-go intermediate instance named `No_Delete_SMC_Transition_Instance` in your destination Alibaba Cloud account to assist with the migration. Whether you need to manually clean up the instance depends on the migration result:

-   Migration successful: The intermediate instance is automatically released. You do not need to clean it up manually.
    
-   Migration error: The intermediate instance persists with the migration task and incurs charges. You can release it in one of the following ways to avoid unnecessary charges:
    
    -   If you no longer need this migration task, click the source ID, and then in the **Actions** column, click **Cancel Migration**. This action deletes the migration task and automatically cleans up the intermediate instance.
        
    -   Manually [release the intermediate instance](/help/en/ecs/user-guide/release-an-instance).
        

### **Migrate to an ECS instance**

During the migration, SMC creates a temporary pay-as-you-go intermediate disk named `SMC_Temp_Disk` under the destination instance to assist with the migration. Whether you need to manually clean up this intermediate disk depends on the migration result:

-   Migration successful: The intermediate disk is automatically released. You do not need to clean it up manually.
    
-   Migration error: The intermediate disk persists with the migration task and incurs charges. You can release it in one of the following ways to avoid unnecessary charges:
    
    -   If you have confirmed that a migration task is no longer needed, click its source ID. In the **Actions** column for the task, click **Cancel Migration**. This action deletes the migration task and automatically cleans up the intermediate disk.
        
    -   Manually [release the intermediate disk](/help/en/ecs/user-guide/release-a-disk).
        

## **References**

-   To migrate incremental data multiple times, you can perform multiple incremental migrations at custom intervals after the initial full migration is complete. This synchronizes the incremental data generated on the source server to Alibaba Cloud, which reduces business downtime and the final cutover time. For more information, see [Incremental server migration](/help/en/smc/use-cases/migrate-incremental-data-from-a-source-server).
    
-   For more information about common issues and solutions, see [FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshooting](/help/en/smc/support/troubleshoot-server-migration-failures/#concept-2267505).
