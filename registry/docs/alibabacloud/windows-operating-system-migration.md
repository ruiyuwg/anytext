If your operating system has reached its end-of-life (EOL) or you need to upgrade to a later version to meet business requirements, you can use Server Migration Center (SMC) to migrate the operating system of an ECS instance while retaining the data on its system disk. This topic describes how to use SMC to migrate Windows Server 2008 R2, 2012 R2, 2016, or 2019 to a later version.

## **Background information**

Microsoft ended support for Windows Server 2008/2008 R2 on January 14, 2020, and for Windows Server 2012/2012 R2 on October 10, 2023. If you have ECS instances that run these operating systems, you must take appropriate measures to continue receiving software updates and security patches to avoid the risks associated with an EOL operating system. For more information, see [Windows Server operating systems](/help/en/ecs/user-guide/windows-server-eol-guide). The operating system migration feature of Server Migration Center (SMC) provides several [migration paths](#section-gdx-qqw-6bo). After the migration, the OS kernel and major system software packages are upgraded in place, and the data on the system disk is retained.

**Note**

If you do not need to retain data on the system disk or require more OS conversion options, you can [replace the system disk](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance) to change the operating system.

## Migration paths

## Windows Server 2008 R2

Windows Server 2008 R2 is no longer supported. You can migrate your workloads to Windows Server 2016 or 2019, which are in mainstream support.

**Important**

Due to limitations of the Windows OS migration feature, you cannot directly migrate Windows Server 2008 R2 to Windows Server 2016 or 2019. You must first migrate to an intermediate version, Windows Server 2012 R2.

1.  Migrate Windows Server 2008 R2 to the intermediate version, Windows Server 2012 R2.
    
    **System architecture**
    
    **Source operating system**
    
    **Target operating system**
    
    x86
    
    Windows Server 2008 R2 Standard Edition 64-bit (Chinese/English)
    
    Windows Server 2012 R2 Datacenter Edition 64-bit (Chinese/English)
    
    Windows Server 2008 R2 Enterprise Edition 64-bit (Chinese/English)
    
2.  Migrate Windows Server 2012 R2 to Windows Server 2016 or 2019.
    
    **System architecture**
    
    **Source operating system**
    
    **Target operating system**
    
    x86
    
    Windows Server 2012 R2 Datacenter Edition 64-bit (Chinese/English)
    
    -   Windows Server 2016 Datacenter Edition 64-bit (Chinese/English)
        
    -   Windows Server 2019 Datacenter Edition 64-bit (Chinese/English)
        
    

## Windows Server 2012 R2

Windows Server 2012 R2 is no longer supported. You can migrate your workloads to Windows Server 2016 or 2019, which are in mainstream support.

**System architecture**

**Source operating system**

**Target operating system**

x86

Windows Server 2012 R2 Standard Edition 64-bit (Chinese/English)

-   Windows Server 2016 Datacenter Edition 64-bit (Chinese/English)
    
-   Windows Server 2019 Datacenter Edition 64-bit (Chinese/English)
    

Windows Server 2012 R2 Datacenter Edition 64-bit (Chinese/English)

## Windows Server 2016

**System architecture**

**Source operating system**

**Target operating system**

x86

Windows Server 2016 Standard Edition 64-bit (Chinese/English)

-   Windows Server 2019 Datacenter Edition 64-bit (Chinese/English)
    
-   Windows Server 2022 Datacenter Edition 64-bit (Chinese/English)
    

Windows Server 2016 Datacenter Edition 64-bit (Chinese/English)

## Windows Server 2019

**System architecture**

**Source operating system**

**Target operating system**

x86

Windows Server 2019 Datacenter Edition 64-bit (Chinese/English)

Windows Server 2022 Datacenter Edition 64-bit (Chinese/English)

## **Limitations**

-   Cross-language migration for Windows is not supported.
    
-   Only specific [migration paths](#section-gdx-qqw-6bo) are supported.
    
-   The Windows instance to be migrated must have an instance type with at least 2 vCPUs and 2 GiB of memory.
    
-   The OS migration tool downloads and installs software packages, which consumes resources. Before you start the migration, ensure that the C drive of the instance has at least 20 GiB of free space and that the amount of free space is larger than the size of the `C:\Windows` folder.
    
-   You cannot migrate an instance while a snapshot is being created for it. Wait for the snapshot creation to complete before you start the migration.
    
-   Windows OS migration is supported only in the following regions.
    
    **Asia-Pacific - China**
    
    **Asia-Pacific - Other**
    
    **Europe and Americas**
    
    **Middle East**
    
    -   China (Hangzhou)
        
    -   China (Shanghai)
        
    -   China (Qingdao)
        
    -   China (Beijing)
        
    -   China (Zhangjiakou)
        
    -   China (Hohhot)
        
    -   China (Ulanqab)
        
    -   China (Shenzhen)
        
    -   China (Heyuan)
        
    -   China (Guangzhou)
        
    -   China (Chengdu)
        
    -   China (Hong Kong)
        
    -   China (Wuhan - Local Region)
        
    
    -   Japan (Tokyo)
        
    -   South Korea (Seoul)
        
    -   Singapore
        
    -   Malaysia (Kuala Lumpur)
        
    -   Indonesia (Jakarta)
        
    -   Philippines (Manila)
        
    -   Thailand (Bangkok)
        
    
    -   Germany (Frankfurt)
        
    -   UK (London)
        
    -   US (Silicon Valley)
        
    -   US (Virginia)
        
    
    SAU (Riyadh - Partner Region)
    

## Precautions

**Important**

Before you migrate the operating system, note the following precautions.

**Migration stage**

**Notes**

Before migration

-   Complete the preparations. For more information, see [Preparations](/help/en/smc/user-guide/prepare-before-operating-system-migration).
    
-   Before you start the migration, read the [Limitations](#5a6916f0847f4) and conduct comprehensive tests of all your business applications in the target OS environment. This ensures application compatibility and performance, and helps avoid business disruptions or functional failures after migration.
    
-   During the migration, the system kernel and software packages on the source instance are installed or updated, and the instance restarts multiple times. This makes your services unavailable. Assess the impact and stop your services before you proceed.
    

During migration

-   During the migration, do not stop, restart, or release the ECS instance, either manually or using O&M scripts. This may cause the migration to fail.
    
-   Running a migration drill or canceling a migration may trigger an automatic rollback to the pre-migration snapshot. Data generated during the migration will be lost.
    
-   The migration process involves operations such as creating snapshots, converting the OS kernel version, reinstalling and upgrading software packages, and stopping and starting the ECS instance. To avoid business interruptions, back up important data and schedule the migration during an appropriate window.
    
-   During a Windows migration, a snapshot of the Windows installation media is automatically shared with your Alibaba Cloud account. This snapshot is used to create and attach an intermediate disk to the instance. Do not operate on this disk during the migration. It is automatically detached and released after the migration is complete.
    
-   During the migration, the system checks for migration conditions and performs a pre-migration assessment on the source instance. If the source system does not meet the conditions or the pre-assessment fails, the migration is interrupted with an error. Success is not guaranteed. Familiarize yourself with the migration conditions and troubleshooting documentation, and run tests in advance. For information about migration issues, see [OS migration issues (Windows)](/help/en/smc/support/faqs-in-windows-operating-system-migration/).
    

After migration

-   After the migration, the instance starts automatically. The instance ID, image ID, instance VPC, public and private IP addresses, hostname, and server machine code remain unchanged. The operating system of the instance is changed to the target operating system.
    
-   Data on the original system disk is retained, but applications might not run correctly due to changes in the environment or dependencies. This can cause business disruptions. Conduct thorough testing and verification.
    

## Migration Operations

**Important**

During the migration, SMC creates pay-as-you-go snapshots of all cloud disks on the ECS instance for data backup. For more information, see [Product Billing](/help/en/smc/product-overview/pricing).

### **Fast migration (Recommended)**

**Note**

To use this method, you must [install Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent) on the ECS instance if your instance was purchased before December 1, 2017, created from a custom image that you uploaded, or is a third-party server. ECS instances created from public images after December 1, 2017 have the required Cloud Assistant Agent pre-installed. In this case, you can ignore this note.

1.  Go to the [SMC console-Cloud Migration-OS Migration](https://smc.console.alibabacloud.com/onCloud/os).
    
2.  On the **OS Migration** page, click **Start Migration**.
    
3.  In the Migrate Operating System dialog box, select the ECS instance to migrate by its instance ID and region, then click **Pre-check**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0338255371/p890097.png)
    
4.  In the **Migrate Operating System** dialog box, the system automatically performs a pre-migration check, which takes about 10 seconds.
    
    -   If the pre-check status changes from ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4559358271/p844619.png) to ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4559358271/p844616.png), the pre-check is successful.
        
    -   If the pre-check status changes from ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4559358271/p844619.png) to ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4559358271/p844620.png), the pre-check failed. Follow the prompts on the interface to resolve the issue and then try migrating again.
        
5.  After you carefully read the notes for operating system migration, select **I acknowledge and accept these risks and authorize Alibaba Cloud to create snapshots for all disks on the ECS instance**, and then click **Next**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0338255371/p890099.png)
    
6.  In the **Migrate Operating System** dialog box, you can select the destination operating system.
    
    -   **Select the Same Destination Operating System**: If you perform a batch migration, you can migrate multiple instances to the same operating system.
        
    -   **Select Destination Operating System by Instance**: If you perform a batch migration, you can migrate multiple instances to different operating systems.
        
7.  Click **Check for Migratability** to view the migration check result.
    
    The check takes about 30 seconds.
    
    -   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4559358271/p844693.png): The operating system can be migrated.
        
    -   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4559358271/p844658.png): Migration is not supported. You can view the reason for the failure in the interface prompts.
        
8.  Click **Migrate**.
    
    You can view the progress of the operating system migration on the **Migrate Operating System** page.
    
    **Warning**
    
    During the operating system migration, do not manually stop, restart, or release the ECS instance. Do not use O&M scripts to perform these operations. Otherwise, the migration fails.
    

### **Staged migration**

#### **Step 1: Import the migration source**

A migration source is the data center server, VM, or cloud host from another platform that you plan to migrate.

#### Import the migration source from the command line (Recommended)

**Important**

-   The source server must have **public network access**. If the source server has firewall restrictions, see [What are the endpoints of SMC?](/help/en/smc/support/faq#731f25bdedugh) to obtain the SMC domain names and ports, and add them to the firewall whitelist.
    
-   If your source server cannot access the public network or you want to improve migration efficiency by transferring data over a private network, see the [private network migration](/help/en/smc/use-cases/migrate-servers-over-a-vpc) solution.
    

1.  Go to the [SMC console - Operating System Migration](https://smc.console.alibabacloud.com/onCloud/os) page.
    
2.  On the **OS Migration** page, click **Import Migration source**.
    
3.  Configure the parameters as prompted on the page and copy the activation code command. The parameters are described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Migration Source Type**
    
    **Alibaba Cloud ECS Server**.
    
    **Import Method**
    
    Select **Use CLI To Import Server**.
    
    **Activation Quota**
    
    The number of migration sources that can be activated by the activation code. The value ranges from 1 to 1000. The default value is 200.
    
    **Validity Period**
    
    The validity period of the activation code. The value ranges from 1 to 90 days. The default value is 90 days.
    
    **Activation Code**
    
    After generating the activation code, copy the command. Perform the following steps:
    
    1.  Click **Generate**.
        
    2.  Click the **Windows Powershell** tab.
        
    3.  Click **Copy** to copy the activation code command.
        
    
4.  Import the migration source.
    
    1.  Log on to the Windows source server.
        
    2.  Open Windows PowerShell with administrator privileges.
        
    3.  Paste and run the copied command to import the migration source.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3258862961/p701486.png)
        
        After you run the command, a message similar to `Import Source Server [s-bp19rlidl3mwuptc****] Successfully!` appears, which indicates that the migration source was imported successfully.
        
        > If the command fails to run, see [What do I do if the command fails to run when I import a Windows migration source from the command line?](/help/en/smc/support/how-to-resolve-the-failure-of-command-execution-when-importing-windows-migration-source-through-command-line).
        
5.  On the **Operating System Migration** page in the SMC console, check the migration source status in the **Migration Status** column.
    
    -   A status of **Migration SourceOnline** indicates a successful import.
        
    -   If the status is not Source Online, the import failed. Troubleshoot the issue using the following methods and then re-import the source.
        
        -   Troubleshoot the issue based on the error message in the console or by viewing the log files in the SMC client directory. The default installation directory of the SMC client is C:\\smc.
            
        -   For common issues and solutions, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshooting](/help/en/smc/support/troubleshoot-server-migration-failures/#concept-2267505).
            

#### Import the migration source using the SMC client

For more information about the SMC client, see [SMC client usage guide](/help/en/smc/user-guide/use-the-windows-gui-version-of-an-smc-client).

1.  Go to the [SMC console - Operating System Migration](https://smc.console.alibabacloud.com/onCloud/os) page.
    
2.  On the **OS Migration** page, click **Import Migration source**.
    
3.  On the **Import Migration Source** page, configure the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Migration Source Type**
    
    **Alibaba Cloud ECS Server**
    
    **Import Method**
    
    Select **Client Import**.
    
    **Import Instructions**
    
    In the **Import Instructions** section, download the SMC client that corresponds to the operating system (Linux or Windows) and architecture (32-bit or 64-bit) of the source server.
    
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
        
5.  On the **Operating System Migration** page in the SMC console, check the status of the migration source in the **Migration Status** column.
    
    -   A status of **Migration SourceOnline** indicates a successful import.
        
    -   If the status is not Source Online, the import failed. Troubleshoot the issue using the following methods and then re-import the source.
        
        -   Troubleshoot the issue based on the error message in the console or by viewing the log files in the SMC client directory. The default installation directory of the SMC client is C:\\smc.
            
        -   For common issues and solutions, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshooting](/help/en/smc/support/troubleshoot-server-migration-failures/#concept-2267505).
            

#### **Step 2: Configure the migration**

1.  Find the migration source that you want to manage and click **Start Migration** in the **Actions** column.
    
2.  Configure the parameters in the **Migration Configuration** dialog box.
    
    The following table describes the OS migration parameters.
    
    -   **Current Operating System**: Displays the name of the current operating system. This parameter is read-only. Example: Windows Server 2008 R2 64-bit Chinese.
        
    -   **Target Operating System**: Select an operating system from the drop-down list, such as Windows Server 2012 R2 Datacenter Edition 64-bit Chinese.
        
    
3.  Click **Start Migration**. In the **Confirm OS Migration** dialog box, read the notes carefully and click **I Confirm**.
    
4.  On the **Operating System Migration** page, you can view the migration status.
    
    **Warning**
    
    During the OS migration, do not stop, restart, or release the Windows instance, either manually or using O&M scripts. Doing so may cause the OS migration to fail.
    

## **Verify the migration result**

-   The OS migration is complete when the status is **Completed**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5261634471/p937091.png)
    
    **Note**
    
    After the migration task is complete, the ECS instance automatically restarts. During the system initialization phase, software packages are updated. Do not perform any operations on the ECS instance. Wait for the system to start. The initialization phase takes about 15 to 30 minutes, depending on the number of system software packages.
    
    In the **Actions** column for the target migration source, click **View Destination Instance**. On the ECS instance details page, verify that the operating system has been migrated to the target operating system.
    
    **Important**
    
    After the migration, the source instance is migrated to the new system kernel and software packages. The original system disk data remains unchanged. However, applications may not run as expected due to changes in the environment or dependencies, which can cause business failures. You must perform thorough testing and verification.
    

-   If the **Migration Status** is **Error**, the migration task failed.
    
    In this case, you need to troubleshoot the problem and retry the migration:
    
    1.  In the **Actions** column, click **Troubleshoot Errors**. Use the error code and error message to resolve the issue. For more information, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshooting](/help/en/smc/support/troubleshoot-server-migration-failures/).
        
    2.  After you resolve the issue, click **Retry Migration Job** in the **Actions** column. The migration will resume.
        
        **Important**
        
        If the intermediate instance has been released, you must start the migration again. For more information, see [What do I do if I accidentally release the intermediate instance?](/help/en/smc/support/faq#section-1nu-xd1-bip).
        
    
    To roll back the data on the system disk of the source instance, you can use the automatically created backup snapshot. The procedure is as follows:
    
    1.  Go to the [ECS console - Snapshot](https://ecs.console.alibabacloud.com/snapshot/region) page.
        
    2.  For the automatic backup snapshot, click **Roll Back Disk** in the **Actions** column.
        
    3.  In the **Roll Back Disk** dialog box, click **OK**.
        
    

## **Clean up resources**

During the migration, SMC creates pay-as-you-go snapshots named `SMC_Backup_Snapshot_XXX` to back up data on the cloud disks of the ECS instance. If you no longer need these snapshots, delete them promptly to avoid unnecessary charges. For more information, see [Delete a snapshot](/help/en/ecs/user-guide/delete-a-snapshot-1).
