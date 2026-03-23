Due to limited compatibility, mounting an SMB file system on a Linux client is recommended only when you need to share data across different operating systems. This topic describes how to mount an SMB file system on an Elastic Compute Service (ECS) instance that is running Linux and how to perform read and write operations.

## Prerequisites

-   A Linux ECS instance is available in the region where you create an SMB file system. For more information, see [Creation methods](/help/en/ecs/user-guide/create-instances/#concept-nx2-nzv-wgb).
    
    **Important**
    
    -   We recommend that you mount Network File System (NFS) file systems on a Linux ECS instance. Linux is not highly compatible with the SMB protocol. Therefore, we recommend that you mount an SMB file system on a Linux ECS instance only if you want to share data across operating systems.
        
    -   Due to defects in the SMB clients of some older Linux versions, Alibaba Cloud cannot guarantee the reliability of SMB file systems on unsupported operating systems.
        
    
    One of the following Linux distributions is run on the ECS instance. Unless otherwise specified, this topic applies only to the following Linux distributions.
    
    **Operating system**
    
    **Version**
    
    CentOS
    
    CentOS 7.6 64-bit: 3.10.0-957.21.3.el7.x86\_64 and later
    
    Alibaba Cloud Linux
    
    -   Alibaba Cloud Linux 2.1903 64-bit: 4.19.43-13.2.al7.x86\_64 and later
        
    -   Alibaba Cloud Linux 3.2104 64-bit: 5.10.23-4.al8.x86\_64 and later
        
    
    Debian
    
    Debian 9.10 64-bit: 4.9.0-9-amd64 and later
    
    Ubuntu
    
    Ubuntu 18.04 64-bit: 4.15.0-52-generic and later
    
    openSUSE
    
    openSUSE 42.3 64-bit: 4.4.90-28-default and later
    
    SUSE Linux
    
    SUSE Linux Enterprise Server 12 SP2 64-bit: 4.4.74-92.35-default and later
    
    CoreOS
    
    CoreOS 2079.4.0 64-bit: 4.19.43-coreos and later
    
-   An SMB file system is created. For more information, see [Create a General-purpose NAS file system in the console](/help/en/nas/user-guide/create-a-file-system#section-5jo-0kj-jn5).
    
-   A mount target is created. For more information, see [Create a mount target](/help/en/nas/user-guide/manage-mount-targets#section-6xi-a3u-zkq).
    
-   Network connectivity is established.
    
    -   The Linux ECS instance and the SMB file system reside in the same virtual private cloud (VPC).
        
    -   The IP address of the Linux ECS instance is in the whitelist of the SMB file system and the ECS instance can access the SMB file system.
        
    -   TCP port 445 is enabled for the ECS instance to access the SMB file system.
        
        If port 445 is disabled, you must add a rule to the security group of the ECS instance for the port. For more information, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
        

## Install a CIFS client

Before you mount an SMB file system on a Linux ECS instance, you must install a Common Internet File System (CIFS) client. This is a one-time setup for each Linux server.

1.  Connect to the Linux ECS instance. For more information, see [Connection methods](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
    
2.  Install a CIFS client.
    
    ## Ubuntu and Debian
    
    Install the CIFS client by using the apt-get package manager.
    
    ```
    sudo apt-get update
    sudo apt-get install cifs-utils
    ```
    
    ## Red Hat Enterprise Linux (RHEL), CentOS, and Alibaba Cloud Linux
    
    Install the CIFS client by using the Yellowdog Updater, Modified (YUM) package manager.
    
    ```
    sudo yum install cifs-utils
    ```
    
    ## openSUSE and SLES12-SP2
    
    Install the CIFS client by using the Zypper package manager.
    
    ```
    sudo zypper install cifs-utils
    ```
    
    ## CoreOS
    
    Install the CIFS client by performing the following steps:
    
    1.  Configure Security-Enhanced Linux (SELinux).
        
        ```
        sed -i 's/SELINUXTYPE=mcs/SELINUXTYPE=targeted/' /etc/selinux/config
        ```
        
    2.  Compile the CIFS client package on a CoreOS ECS instance.
        
        You can perform the following steps to create a Fedora container and compile the CIFS client package. You can also download the CIFS client package that Alibaba Cloud provides for CoreOS, and then copy the package to the /tmp/ or /bin directory.
        
        1.  Create a Fedora container and compile the cifs-utils package.
            
            ```
            docker run -t -i -v /tmp:/cifs fedora /bin/bash
            ```
            
        2.  Run the following commands in sequence in the Docker environment:
            
            1.  ```
                yum groupinstall -y "Development Tools" "Development Libraries"
                ```
                
            2.  ```
                yum install -y bzip2
                ```
                
            3.  ```
                curl https://download.samba.org/pub/linux-cifs/cifs-utils/cifs-utils-6.9.tar.bz2 --output cifs-utils-6.9.tar.bz2;
                ```
                
            4.  ```
                bunzip2 cifs-utils-6.9.tar.bz2 && tar xvf cifs-utils-6.9.tar
                ```
                
            5.  ```
                cd cifs-utils-6.9; ./configure && make
                ```
                
            6.  ```
                cp mount.cifs /cifs/
                ```
                
            7.  ```
                exit
                ```
                
    

## Mount the SMB file system

SMB file systems can be manually or automatically mounted on Linux ECS instances. Manual mounts are temporary. If you manually mount a NAS file system on an ECS instance, you must remount the file system every time the ECS instance is started or restarted. Automatic mounts are persistent. If you enable automatic mounting for a NAS file system, you do not need to remount the file system every time the ECS instance is started or restarted. To prevent the mount information from being lost after the ECS instance is restarted, we recommend that you enable automatic mounting for a NAS file system after you manually mount the file system.

### **Manually mount the file system**

Use the mount target address to mount the SMB file system on the Linux ECS instance.

1.  Connect to the Linux ECS instance. For more information, see [Connection methods](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
    
2.  Run the following command to mount the file system:
    
    ```
    sudo mount -t cifs //file-system-id.region.nas.aliyuncs.com/myshare /mnt -o vers=2.1,guest,uid=0,gid=0,dir_mode=0755,file_mode=0755,mfsymlinks,cache=strict,rsize=1048576,wsize=1048576
    ```
    
    Command syntax: `sudo mount -t cifs //<Domain name of the mount target>/myshare <Mount directory> -o <Mount options>`
    
    **Parameter**
    
    **Description**
    
    File system type
    
    To mount an SMB file system on a Linux ECS instance, you must specify the `-t cifs` parameter.
    
    Domain name of the mount target
    
    The domain name of the mount target is automatically generated when you create the mount target. Replace the domain name with the actual value. To obtain the domain name of the mount target, perform the following steps: Log on to the [NAS console](https://nas.console.alibabacloud.com/). On the File System List page, click the file system ID. Click the **Mount Targets** tab. Then, move the pointer over the ![挂载点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2613457661/p495288.png) icon in the **Mount Target** column.
    
    myshare
    
    The name of the shared directory for the SMB file system. You cannot change the name after you specify this parameter.
    
    Mount directory
    
    The path of the directory on which the SMB file system is mounted. For example, you can specify /mnt/sharepath.
    
    Mount options
    
    Specify the required mount options by adding the `-o` parameter in the mount command:
    
    -   vers: the version of the SMB protocol. Specify 2.1 or later for the option.
        
    -   guest: the identity that you want to use to mount the file system. You must use the guest identity that is authenticated based on the New Technology LAN Manager (NTLM) protocol.
        
    -   rsize: the maximum size of a data packet that the SMB client can read from the SMB file system. In most cases, set this option to 1048576 (1 MB).
        
    -   wsize: the maximum size of a data packet that the SMB client can write to the SMB file system. In most cases, set this option to 1048576 (1 MB).
        
    
    Specify the mount options by adding the `-o` parameter:
    
    -   uid: the user to which the files in the file system belong after a successful mount. The default value of uid is 0.
        
    -   gid: the user group to which the files in the file system belong after a successful mount. The default value of gid is 0.
        
    -   dir\_mode: the read, write, and execute permissions that you want to grant to the user on the specified directories. The value must start with 0, for example, 0755 and 0644. The default value of dir\_mode is 0755.
        
    -   file\_mode: the read, write, and execute permissions that you want to grant to the user on files. The value must start with 0, for example, 0755 and 0644. The default value of file\_mode is 0755.
        
    -   mfsymlinks: specifies whether symbol links are supported.
        
    -   cache:
        
        -   If you set this option to strict, caching is enabled for the SMB client. The default value of cache is strict.
            
        -   If you set this option to none, caching is disabled for the SMB client.
            
    -   atime|relatime: If file access time does not affect your business, we recommend that you do not set this option to atime. The default value of this option is relatime.
        
    
    **Note**
    
    -   An authorized administrator of the Linux ECS instance has full control over the SMB file system.
        
    -   If you want to view the details of a mount target, run the `mount | grep cifs` command.
        
    -   We recommend that you use a Linux distribution whose kernel version is later than 3.10.0-514. If you use a Linux distribution whose kernel version is 3.7 or earlier, set the cache option to strict. You can run the `uname -a` command to view the kernel version.
        
    
3.  Run the `mount -l` command to view the mount result.
    
    If a command output similar to the following example appears, the file system is mounted.
    
    ![回显信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3299119951/p54720.png)
    
    After the file system is mounted, you can run the `df -h` command to view the capacity of the file system.
    
    If the file system fails to be mounted, troubleshoot the issue. For more information, see [Troubleshoot the failure of mounting an SMB file system on Linux](/help/en/nas/user-guide/fix-mount-issues#section-9yb-tow-5u2).
    
4.  Read data from and write data to the file system.
    
    You can now access the SMB file system as you would a local directory. The following figure shows an example.
    
    ![访问NAS](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3299119951/p54347.png)
    

### **(Optional) Automatically mount the file system**

You can configure the `/etc/fstab` file of a Linux ECS instance to automatically mount an SMB file system when the ECS instance is restarted.

**Note**

Before you enable automatic mounting, make sure that the preceding manual mounting is successful. This prevents startup failures of the ECS instance.

1.  Open the `/etc/fstab` configuration file to add mounting configurations.
    
    -   Replace **<file-system-id.region.nas.aliyuncs.com>** with the domain name of the mount target. Example: `237*******-*****.cn-hangzhou.nas.aliyuncs.com`. For more information, see [View the domain name of a mount target](/help/en/nas/user-guide/manage-mount-targets#bec97c5c3f5ri).
        
    -   Replace **</mnt>** with the mount directory. Example: `/mnt`.
        
    
    ```
    file-system-id.region.nas.aliyuncs.com/myshare /mnt cifs vers=3,guest,uid=0,gid=0,dir_mode=0755,file_mode=0755,mfsymlinks,cache=strict,rsize=1048576,wsize=1048576 0 0
    ```
    
    For more information, see [Mount parameters](#ecb272580e5vr). The following table describes the parameters that are not included in the preceding table.
    
    **Parameter**
    
    **Description**
    
    0 (the first value after wsize)
    
    Specifies whether to back up a file system by running the dump command. A non-zero value indicates that the file system is backed up. For a NAS file system, the default value is 0.
    
    0 (the second value after wsize)
    
    The order in which the fsck command checks file systems at startup. For a NAS file system, the default value is 0, which indicates that the fsck command is not run at startup.
    
2.  Run the `reboot` command to restart the ECS instance.
    
    **Important**
    
    If you restart the ECS instance, services are interrupted. We recommend that you perform the operation during off-peak hours.
    
3.  Verify that automatic mounting is enabled.
    
    **Note**
    
    You can run the `df -h` command to check the mounted NAS file system within one minute after the ECS instance restarts.
    

## Scenarios

To ensure optimal performance of the file system, you can specify mount options based on specific scenarios. This section lists scenarios and the mount options that are suitable for each scenario:

### Shared access to a file system from multiple Linux ECS instances

Multiple Linux ECS instances share access to a file system and no access control is required. In this scenario, you can use an authorized administrator of each ECS instance to mount the file system on the ECS instances. The following command shows an example:

```
 mount -t cifs //file-system-id.region.nas.aliyuncs.com/myshare /mnt/sharepath -o vers=2.1,guest,mfsymlinks
```

Parameters:

-   `file-system-id.region.nas.aliyuncs.com`: the domain name of the mount target. Replace the domain name with the actual value. To obtain the domain name of the mount target, perform the following steps: Log on to the [NAS console](https://nas.console.alibabacloud.com/). On the File System List page, click the file system ID. Click the **Mount Targets** tab. Then, move the pointer over the ![挂载点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2613457661/p495288.png) icon in the **Mount Target** column.
    
-   `/mnt/sharepath`: the path of the directory on which the file system is mounted. Replace it with the actual path.
    

### Shared access from multiple Linux ECS instances to a home directory

Multiple Linux ECS instances share access to a home directory and you need to control access to the home directory. You can set the uid, gid, dir\_mode, and file\_mode options in the mount command to manage permissions.

### Shared access to a file system from multiple Linux ECS instances that function as web servers

You can install web server applications such as Apache HTTP Server on multiple Linux ECS instances and use an SMB file system as shared file storage.

**Note**

-   The SMB file system provides shared access, horizontal scalability, and high availability. When users access small files in the SMB file system, the performance of the SMB file system may be compromised. This occurs because the mechanism of SMB file systems is different from the mechanism of local disks. In this scenario, we recommend that you store shared files in the SMB file system and other files in local disks to ensure optimal performance.
    
-   In most cases, web server applications have heavy workloads. You can enable the acceleration feature for the applications to process heavy workloads. To enable this feature, contact [NAS technical support](https://smartservice.console.alibabacloud.com/#/ticket/).
    

### Shared access from both a Windows ECS instance and a Linux ECS instance to a file system

A Windows ECS instance and a Linux ECS instance share access to an SMB file system. In this scenario, you must set the cache option to strict or use the default value of this option when you mount the file system on the Linux ECS instance.

## Access control

To grant different permissions to different users, NAS allows you to authenticate users and control access to SMB file systems based on an Active Directory (AD) domain. After the mount target of an SMB file system is joined to an AD domain, AD users can access the SMB file system. Then, you can control access to files and directories in the SMB file system based on the AD domain.

For more information, see [Join the mount target of an SMB file system to an AD domain](/help/en/nas/user-guide/join-the-mount-target-of-an-smb-file-system-to-an-ad-domain#task-2419984) and [Mount and use an SMB file system on a Linux client as an AD domain user](/help/en/nas/user-guide/mount-and-use-an-smb-file-system-on-a-linux-client-as-an-ad-domain-user#task-2077654).

## **References**

-   For more information about how to back up data in an SMB file system, see [Back up a General-purpose NAS file system](/help/en/nas/user-guide/back-up-files-from-a-general-purpose-nas-file-system).
    
-   You can also enable the recycle bin feature. If you accidentally delete files from a General-purpose NAS file system, you can use the recycle bin feature to restore these files and their metadata such as user identifiers (UIDs), group identifiers (GIDs), and access control lists (ACLs). For more information, see [Recycle bin](/help/en/nas/user-guide/recycle-bin).
    
-   For more information about how to mount and access an SMB file system on an on-premises server or in a self-managed data center, see [Access a file system from a data center](/help/en/nas/user-guide/access-file-systems-in-on-premises-data-centers/).
    
-   To mount a file system across VPCs in the same region, or across different accounts and regions, use Cloud Enterprise Network (CEN). For more information, see [Use CEN to mount a NAS file system across VPCs in the same region](/help/en/nas/user-guide/mount-a-file-system-across-vpcs-in-the-same-region#task-bnk-22m-xgb) or [Use CEN to mount a NAS file system across accounts and regions](/help/en/nas/user-guide/mount-a-file-system-across-accounts-and-regions#task-tkk-hdn-xgb).
