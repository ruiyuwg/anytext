When technical support for an operating system is discontinued due to reasons such as end of lifecycle, end of third-party support, or evolution of open source projects, you can use the operating system migration feature to replace or upgrade the operating system. This lets you obtain stable system maintenance and technical support while retaining the data on the system disk of your Elastic Compute Service (ECS) instance.

## Scenarios

When the operating system of your ECS instance enters the end of life (EOL) phase as described in [Operating system lifecycle overview](/help/en/ecs/user-guide/eol-overview), you may face increased security and usage risks. In this case, we recommend that you replace the operating system that is in the EOL phase as soon as possible. The operating system migration feature lets you retain your existing application data after replacing the operating system, but provides only some [operating system migration options](#title-djn-9db-thu).

> If you do not need to retain the data on the system disk or require more operating system conversion options, you can change the operating system by [replacing the system disk](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance). You can also refer to [Operating system maintenance cycle and EOL guidance](/help/en/ecs/user-guide/eol-overview#de9d81cbbd63c) to obtain the recommended migration solution and detailed handling methods for your current operating system.

## Pre-migration assessment

Before performing the migration, we strongly recommend that you understand the migration limits of the corresponding operating system and perform comprehensive testing and validation of all your business applications in the target operating system environment in advance. This helps ensure compatibility and performance between the applications and the target operating system, effectively avoiding issues such as business operation problems or function failures that may occur after migration.

The operating system migration tool does not support hot migration. During migration, the system kernel and software packages of the source instance will be installed or updated, and the instance will automatically restart multiple times, causing business interruptions. Therefore, before migration, you need to [create snapshots](/help/en/ecs/user-guide/create-a-snapshot) to back up data and isolate the operating system environment to be migrated to avoid affecting normal business operations.

## Source operating system is Windows

### **Migration limits**

**Important**

Please make sure you understand the following notes before migrating the operating system.

-   Cross-language migration for Windows is not supported.
    
-   Only specific [migration paths](/help/en/smc/user-guide/windows-operating-system-migration#section-gdx-qqw-6bo) are supported.
    
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
    

### **Supported operating systems for migration**

The ECS operating system migration feature supports migration to the following operating systems.

#### Windows Server 2008 R2

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
        
    

#### Windows Server 2012 R2

Windows Server 2012 R2 is no longer supported. You can migrate your workloads to Windows Server 2016 or 2019, which are in mainstream support.

**System architecture**

**Source operating system**

**Target operating system**

x86

Windows Server 2012 R2 Standard Edition 64-bit (Chinese/English)

-   Windows Server 2016 Datacenter Edition 64-bit (Chinese/English)
    
-   Windows Server 2019 Datacenter Edition 64-bit (Chinese/English)
    

Windows Server 2012 R2 Datacenter Edition 64-bit (Chinese/English)

#### Windows Server 2016

**System architecture**

**Source operating system**

**Target operating system**

x86

Windows Server 2016 Standard Edition 64-bit (Chinese/English)

-   Windows Server 2019 Datacenter Edition 64-bit (Chinese/English)
    
-   Windows Server 2022 Datacenter Edition 64-bit (Chinese/English)
    

Windows Server 2016 Datacenter Edition 64-bit (Chinese/English)

#### Windows Server 2019

**System architecture**

**Source operating system**

**Target operating system**

x86

Windows Server 2019 Datacenter Edition 64-bit (Chinese/English)

Windows Server 2022 Datacenter Edition 64-bit (Chinese/English)

## Source operating system is Linux

### Migration limits

**Important**

Please make sure you understand the following notes before migrating the operating system.

**Limit category**

**Description**

General limit

-   Anolis OS and Alibaba Cloud Linux do not provide i686-based software packages. If your CentOS operating system is equipped with i386-based or i686-based software packages, you cannot migrate to Anolis OS or Alibaba Cloud Linux.
    
-   The migration tool consumes resources when software packages are downloaded and installed during migration. Before you migrate an operating system of an ECS instance, make sure that the following resources are available:
    
    -   Memory size: 600 MiB
        
    -   Available disk capacity for the following directories:
        
        -   /usr: 250 MiB
            
        -   /var: 4 GiB
            
        -   /boot: 100 MiB
            
    
    **Note**
    
    If your instance has a small number of vCPUs, a small amount of memory, and a small amount of storage capacity for the system disk and data disks, we recommend that you stop the services that are running on the instance before you perform migration. This helps prevent migration failures caused by insufficient resources.
    

**Kernel compatibility limits for migrating CentOS 7/8 to Alibaba Cloud Linux**

The following compatibility limits exist between CentOS 7/8 and Alibaba Cloud Linux operating systems**.** If your business uses applications that depend on kernel APIs for different purposes, such as building out-of-tree kernel modules and using hardware resources, you must assess the applications in advance to determine whether the applications can run as expected after direct migration.

**Limit category**

**Description**

Limit on migrating from CentOS 7 to Alibaba Cloud Linux 2

Alibaba Cloud Linux 2 uses kernel version 4.19, which is incompatible with kernel version 3.10 of CentOS 7.

Limit on migrating from CentOS 7 to Alibaba Cloud Linux 3

CentOS 7 uses kernel version 3.10. Alibaba Cloud Linux 3 uses Linux Kernel 5.10 LTS. The GNU toolchain of Alibaba Cloud Linux 3 contains GCC 10.2, Binutils 2.35, and glibc 2.32. These two kernel versions are incompatible with each other.

Limit on migrating from CentOS 8 to Alibaba Cloud Linux 3

Alibaba Cloud Linux 3 uses Linux Kernel 5.10 LTS. The GNU toolchain of Alibaba Cloud Linux 3 contains GCC 10.2, Binutils 2.35, and glibc 2.32. Alibaba Cloud Linux 3 is compatible with the CentOS 8 ecosystem. The operating system migration tool performs a basic assessment on the source operating system, but you still need to perform your own migration assessment before migration to prevent business operation issues after migration.

The following table describes the limits on migrating features or software related to your operating system:

Feature or software

Supported

Migration affected

Description

i386-based software package

Not supported

Yes

Alibaba Cloud Linux does not provide i386-based software packages. If your current system contains i386-based software packages, you cannot use the migration tool to migrate the operating system. You need to delete these packages before performing migration to prevent system exceptions during migration.

epel-modular

Not supported

No

The platform on which the EPEL repository of CentOS 7/8 depends is different from that of Alibaba Cloud Linux 3. After migration, you cannot install software packages based on epel-modular.

Compatibility with C/C++ programs

Not guaranteed

No

Alibaba Cloud Linux 3 is equipped with software packages that provide better compatibility with C/C++ programs. The GNU toolchain of Alibaba Cloud Linux 3 contains GCC 10.2, Binutils 2.35, and glibc 2.32. After you migrate an operating system, we recommend that you compile and verify your C/C++ programs using the new GNU toolchain to prevent incompatibility issues.

MySQL database

Only migrations to the same or later MySQL versions are supported

-   If the target MySQL version is the same as or later than the source MySQL version, the migration performance is not affected
    
-   If the target MySQL version is earlier than the source MySQL version, the migration performance is affected
    

Alibaba Cloud Linux 3 supports MySQL. However, MySQL version downgrades are not supported. If the MySQL version provided by Alibaba Cloud Linux 3 is earlier than the MySQL version provided by CentOS 7 or 8, you cannot use the migration tool to migrate operating systems.

### **Supported operating systems for migration**

The ECS operating system migration feature supports migration to the following operating systems.

#### CentOS 7/8

**Operating system architecture**

**Source operating system**

**Destination operating system**

x86

CentOS 7.x

-   AnolisOS 7
    
-   AnolisOS 8
    
-   Alibaba Cloud Linux 2
    
-   Alibaba Cloud Linux 3
    
    **Note**
    
    For more information about Alibaba Cloud Linux, see [What is Alibaba Cloud Linux?](/help/en/alinux/product-overview/alibaba-cloud-linux-overview).
    
-   Red Hat 7
    
    **Note**
    
    Currently, only some users can upgrade from CentOS 7.9 to Red Hat 7. If you want to use this feature, you can to apply for the feature to be added to the whitelist.
    

CentOS 8.x

-   AnolisOS 8
    
-   Alibaba Cloud Linux 3
    
-   Red Hat 8
    
    **Note**
    
    Currently, only some users can upgrade from CentOS 8.5 to Red Hat 8. If you want to use this feature, you can to apply for the feature to be added to the whitelist.
    

ARM64

CentOS 7.x

-   AnolisOS 7
    
-   AnolisOS 8
    
-   Alibaba Cloud Linux 3
    

CentOS 8.x

-   AnolisOS 8
    
-   Alibaba Cloud Linux 3
    

#### Red Hat 7/8

**Operating system architecture**

**Source operating system**

**Destination operating system**

x86

Red Hat 7.9

-   Alibaba Cloud Linux 3
    
-   Red Hat 8
    
    **Note**
    
    You cannot specify a minor version of Red Hat as the destination operating system during migration.
    

Red Hat 8.x

-   Red Hat 9
    
    **Note**
    
    You cannot specify a minor version of Red Hat as the destination operating system during migration.
    
-   Alibaba Cloud Linux 3
    

#### Alibaba Cloud Linux 2

**Operating system architecture**

**Source operating system**

**Destination operating system**

x86

Alibaba Cloud Linux 2

Alibaba Cloud Linux 3

## Migration preparation

-   Resource Access Management (RAM) is activated. Server Migration Center (SMC) is granted the permissions to access cloud resources.
    
    To grant the access permissions to SMC, log on to the [RAM console](https://ram.console.alibabacloud.com/#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunSMCDefaultRole%22,%20%22TemplateId%22:%20%22DefaultRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fsmc.console.alibabacloud.com%2F%22,%20%22Service%22:%20%22SMC%22%7D) and click **Authorize** to complete the authorization.
    
    **Note**
    
    If you use a RAM user, log on to the [RAM console](https://ram.console.alibabacloud.com/users) with the corresponding Alibaba Cloud account and grant the `AliyunSMCFullAccess` policy permissions to the RAM user.
    
-   The ECS Snapshot service is activated. Snapshots are created for an ECS instance when the operating system of the instance is being migrated. For more information, see [Activate ECS Snapshot](/help/en/ecs/user-guide/activate-ecs-snapshot#task-ojj-1tr-lgb).
    
-   The ECS instance whose operating system you want to migrate is in the **Running** state. Cloud Assistant Agent is installed and ran on the instance within the previous 24 hours. For information about how to install Cloud Assistant Agent, see [Install Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent).
    

## Migration procedure

**Warning**

-   During the migration, the system automatically creates snapshots for basic disks on the ECS instance, changes the operating system kernel version, re-installs or upgrades software packages, and stops and then restarts the instance. To prevent your business from being affected by these operations, we recommend backing up important data in advance and selecting an appropriate time to perform the migration.
    
-   During the migration process, do not manually or through maintenance scripts perform operations such as stopping, restarting, or releasing the ECS instance, as this may cause the migration to fail.
    
-   If you perform a migration test or cancel a migration on an ECS instance, all disks on the instance may be automatically rolled back to snapshots created before the migration. In this case, the data generated during the migration is lost.
    
-   During Windows migration, the Windows installation media snapshot resource will be automatically shared with the Alibaba Cloud account being migrated, and a transit disk will be created from this snapshot and attached to the instance. Do not operate this disk during migration. The transit disk will be automatically detached and released after the migration is complete.
    
-   During migration, the system performs migration condition checks and pre-migration assessments on the source instance. If the source system does not meet the migration conditions or the pre-migration assessment fails, the migration will be interrupted with an error and cannot guarantee successful migration. We recommend familiarizing yourself with the migration conditions and error troubleshooting documentation in advance and perform tests.
    

1.  (Conditional) To migrate CentOS 7/8 to Red Hat 7/8, you must complete the following operations. Otherwise, skip this step.
    
    1.  If the Security Center client is installed on the source system, you must first uninstall it.
        
        **Note**
        
        You can reinstall it after the migration is complete. For more information, see [Manual installation](/help/en/security-center/user-guide/install-the-security-center-agent#section-qxq-hkv-ghb).
        
        1.  Go to the [Alibaba Cloud Security Center client uninstallation interface](https://yundun.console.alibabacloud.com/?p=sas#/setting/install/uninstall) and select the instance from which to uninstall the client. For more information, see [Uninstall the client](/help/en/security-center/user-guide/uninstall-the-security-center-agent).
            
        2.  Use a remote connection tool to connect to the server and run the following command.
            
            ```
            wget "http://update2.aegis.aliyun.com/download/uninstall.sh" && chmod +x uninstall.sh && ./uninstall.sh
            if ! lsmod | grep AliSecGuard; then echo 'Uninstall Success'; else echo "Uninstall Failed"; fi
            ```
            
            The `Uninstall Success` message indicates that the Security Center client is uninstalled.
            
    2.  Run the following command to upgrade the source system to the latest kernel version.
        
        ### **CentOS 7**
        
        ```
        # Back up the original yum software source and update it to the Alibaba Cloud CentOS 7 source.
        mv /etc/yum.repos.d/ /etc/yum.repos.d.backup/
        mkdir -p /etc/yum.repos.d/
        wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
        wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
        yum clean all
        yum makecache
        # Update and restart the system.
        yum -y update
        reboot
        ```
        
        ### **CentOS 8**
        
        ```
        # Back up the original yum software source and update it to the Alibaba Cloud CentOS 8 source.
        mv /etc/yum.repos.d/ /etc/yum.repos.d.backup/
        mkdir -p /etc/yum.repos.d/
        wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.cloud.aliyuncs.com/repo/Centos-8.repo
        wget -O /etc/yum.repos.d/epel-archive-8.repo http://mirrors.cloud.aliyuncs.com/repo/epel-archive-8.repo
        yum clean all
        yum makecache
        # Update and restart the system.
        yum -y update
        reboot
        ```
        
    
2.  Open the Replace Operating System dialog box.
    
    1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
        
    2.  In the top navigation bar, select the region of the ECS instance.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9434404471/p704780.png)
        
    3.  Click the ID of the target instance to go to the instance details page, click **All Actions** to expand all operation panels, then search for and click ****Replace Operating System****.
        
3.  Select **Migrate Operating System**. Wait for the system to automatically perform a pre-migration check, which takes about 10 seconds. When the pre-check status changes from ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4559358271/p844619.png) to ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4559358271/p844616.png), it indicates that the pre-check has passed.
    

4.  Read the operating system migration notes carefully, select **I acknowledge and accept these risks and authorize Alibaba Cloud to create snapshots for all disks on the ECS instance.** Then click **Next**.
    
    **Note**
    
    To migrate the operating systems of multiple ECS instances at a time, select the ECS instances whose operating systems you want to migrate.
    
5.  In the **Replace Operating System** dialog box, select a destination operating system based on your requirements.
    
    1.  **Select the Same Destination Operating System**: If you migrate the operating systems of multiple ECS instances at a time, you can select this option and specify a destination operating system for all the selected instances.
        
    2.  **Select Destination Operating System by Instance**: If you migrate the operating systems of multiple ECS instances at a time, you can select this option and specify a destination operating system for each selected instance.
        
6.  Click **Check For Migratability** to view the migration check results. The check takes about 30 seconds, please be patient. When the status shows ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4559358271/p844693.png), click **Migrate**.
    

## Migration validation

1.  In the **Replace Operating System** dialog box, click the instance ID. On the **Instance Details** tab, check whether the operating system of the ECS instance is migrated based on the value of the **Instance Status** parameter.
    
    **Note**
    
    Approximately 15 to 30 minutes are required to migrate the operating system. This excludes the time that is required to create snapshots. During the migration, you can move the pointer over **Replacing Operating System** to view the progress of the migration task.
    

2.  If the operating system is migrated, the value of the Instance Status parameter changes from **Running** (**Replacing Operating System**) to **Running**.
    
    **Important**
    
    If the instance status shows **Running** (**Operating System Replacement Failed**), it indicates that the operating system migration has failed. You can move the pointer over **Operating System Replacement Failed** to view the cause of the failure, click **Troubleshooting & contact us** to resolve the issue. After the issue is resolved, click **Retry Replacement** to migrate the operating system of the ECS instance again.
    
3.  After the migration, the instance starts automatically. The ECS instance ID, ECS image ID, VPC, public and private IP addresses, hostname, and server machine code remain unchanged. The operating system is replaced with the target operating system. Although the data on the original system disk is preserved, applications may not run correctly due to changes in the environment or dependencies, which can disrupt your business operations. Therefore, you must perform thorough testing and verification. To roll back the source system disk, you can use an automatic backup snapshot to [roll back the disk](/help/en/ecs/user-guide/roll-back-a-disk-by-using-a-snapshot).
    

## **What to do next**

-   When you migrate the operating system of an ECS instance, snapshots are automatically created for the instance. After you migrate the operating system of the instance, if you confirm that you no longer need these snapshots, we recommend that you [delete the snapshots](/help/en/ecs/user-guide/delete-a-snapshot-1#task-1478465) at the earliest opportunity to prevent additional costs. To keep the snapshots, you can check [Snapshot billing](/help/en/ecs/snapshots-1#concept-rq2-pcx-ydb) to understand the specific billing rules.
    
-   You can view and manage the history records of operating system migration tasks in the [SMC console](https://smc.console.alibabacloud.com/onCloud/os), or visit [Server Migration Center (SMC)](/help/en/smc/product-overview/what-is-smc) to explore more SMC features.
    
-   For migration issues, you can refer to [Operating system migration issues (Windows)](/help/en/smc/support/faqs-in-windows-operating-system-migration/), [Operating system migration issues (Linux)](/help/en/smc/support/faqs-in-linux-operating-system-migration/), and [Red Hat migration troubleshooting official documentation](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/8/html/converting_from_a_linux_distribution_to_rhel_using_the_convert2rhel_utility/assembly_troubleshooting-rhel-conversions_converting-from-a-linux-distribution-to-rhel).
