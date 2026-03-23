In Linux, the /etc/fstab file is used to configure the automatic mounting information of file systems. If the /etc/fstab file of a Linux Elastic Compute Service (ECS) instance contains incorrect or unusable information of file systems that are automatically mounted, the operating system of the instance may fail to start when you restart the instance.

**Note**

For information about the configurations in the /etc/fstab file, expand the following section.

## fstab file

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2027046371/p900775.png)

The following section describes the fields in the fstab file:

-   file system: the UUID of the file system that you want to mount. The value is in the UUID=xxxx-xxxx format.
    
-   dir: the mount point of the file system.
    
-   type: the type of the file system that you want to mount. Valid values include ext4 and xfs.
    
-   options: the mount options. In most cases, the defaults option is used. Separate multiple options with commas (,). The following table describes the common mount options.
    
    Mount option
    
    Description
    
    defaults
    
    Uses the default settings of all mount options. For example, the defaults option is equivalent to `rw,suid,dev,exec,auto,nouser,async` for an Ext4 file system.
    
    rw
    
    Mounts the file system in read/write mode.
    
    ro
    
    Mounts the file system in read-only mode.
    
    auto
    
    Automatically mounts the file system when the operating system starts or when the `mount -a` command is run.
    
    noauto
    
    Mounts the file system only when a command is run to mount the file system.
    
    suid
    
    Allows Set User ID (SUID) operations and sets the Set Group ID (SGID) bit. In most cases, this option is used to temporarily escalate the privileges of specific users to allow the users to execute specific tasks.
    
    nosuid
    
    Denies SUID operations and does not set the SGID bit.
    
    dev
    
    Parses the block device on which the file system resides.
    
    nodev
    
    Does not parse the block device on which the file system resides.
    
    exec
    
    Allows the execution of executable files on the mount point.
    
    noexec
    
    Does not allow the execution of executable files on the mount point.
    
    nouser
    
    Allows only the root user to mount the file system.
    
    async
    
    Enables asynchronous I/O.
    
    sync
    
    Enables synchronous I/O.
    
    nofail
    
    Ignores a device to prevent exceptions if the device does not exist when the instance is started.
    
-   dump: is used by the dump utility to determine whether to back up the file system. A value of 0 indicates that the dump utility does not back up the file system. A value of 1 indicates that the dump utility backs up the file system.
    
-   pass: is used by the fsck utility to determine the check order of file systems. A smaller value indicates a higher priority. In most cases, this field is set to 1 for the root file system and 2 or greater for other file systems. If you do not want to check a partition, set this field to 0 for the partition.
    

## **Causes**

-   You did not modify the configurations in the fstab file before you detach or re-initialize a cloud disk. As a result, the file contains redundant automatic mounting information of file systems.
    
-   The device name or UUID of the file system is incorrectly configured.
    
-   The type of the file system is incorrectly configured.
    
-   The values of one or more mount parameters are invalid.
    

## **Solution**

1.  Connect to the Linux instance by using Virtual Network Computing (VNC). For more information, see [Connect to an instance by using VNC](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc#concept-sdk-1jx-wdb).
    
    **Note**
    
    When the preceding issue occurred, the system entered the emergency mode. You must enter the password of the root user to log on to the system.
    
2.  Back up the /etc/fstab file.
    
    ```
    cp /etc/fstab /etc/fstab.bak
    ```
    
3.  Run the following command to view the mounting information of all disks, including the partition names, file system types, and mount points:
    
    ```
    df -Th 
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3122936371/p901266.png)
    
4.  Run the following command to view the automatic mounting information of file systems in the /etc/fstab file:
    
    ```
    cat /etc/fstab
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3122936371/p901268.png)
    
5.  Compare the mount point information in the /etc/fstab file with the mount point information that you obtained in Step 3. Delete the redundant configuration lines from the /etc/fstab file.
    
6.  (Optional) If you want to configure the disk partitions that are not displayed in Step 3 to be automatically mounted on startup, perform the operations described in [Configure UUIDs in the fstab file to automatically mount data disks](/help/en/ecs/user-guide/configure-uuids-in-the-fstab-file-to-automatically-attach-data-disks).
    
7.  Run the following command to restart the operating system:
    
    ```
    reboot
    ```
