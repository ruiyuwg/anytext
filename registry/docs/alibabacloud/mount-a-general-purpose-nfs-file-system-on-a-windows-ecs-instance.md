The Network File System (NFS) protocol has limited native support in Windows. Therefore, we recommend mounting NFS file systems on Windows only when cross-platform data sharing is required. For Windows-only environments, consider using the SMB protocol. This topic describes how to mount an NFS file system on a Windows Elastic Compute Service (ECS) instance.

## Prerequisites

-   A running Windows ECS instance in the same region as your NAS file system. For more information, see [Creation method overview](/help/en/ecs/user-guide/create-instances/#concept-nx2-nzv-wgb).
    
    **Show Windows operating systems supported by General-purpose NFS file systems**
    
    **Operating system**
    
    **Version**
    
    Windows Server 2025
    
    -   Windows Server 2025 Datacenter 64-bit (Simplified Chinese)
        
    -   Windows Server 2025 Datacenter 64-bit (English)
        
    
    Windows Server 2022
    
    -   Windows Server 2022 Datacenter 64-bit (Simplified Chinese)
        
    -   Windows Server 2022 Datacenter 64-bit (English)
        
    
    Windows Server 2012
    
    -   Windows Server 2012 R2 Datacenter 64-bit (Simplified Chinese)
        
    -   Windows Server 2012 R2 Datacenter 64-bit (English)
        
    
    Windows Server 2016
    
    -   Windows Server 2016 Datacenter 64-bit (Simplified Chinese)
        
    -   Windows Server 2016 Datacenter 64-bit (English)
        
    
    Windows Server 2019
    
    -   Windows Server 2019 Datacenter 64-bit (Simplified Chinese)
        
    -   Windows Server 2019 Datacenter 64-bit (English)
        
    
-   An NFS file system created on General-purpose NAS. The mount target for the file system must be in the same VPC as the ECS instance. For more information, see [Create a General-purpose NAS file system in the console](/help/en/nas/user-guide/create-a-file-system#section-5jo-0kj-jn5).
    

**Note**

You cannot mount an Extreme NFS file system on Windows.

## Step 1: Install an NFS client

1.  Connect to the ECS instance. For more information, see [Connect to an ECS instance](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
    
2.  Start **Server Manager**.
    
3.  Choose **Manage** > **Add Roles and Features**.
    
4.  Follow the **Add Roles and Features Wizard** to install the NFS client.
    
    1.  In the **Server Roles** step, select **File and Storage Services** > **File and iSCSI Services** > **Server for NFS**.
        
    2.  In the **Features** step, select **Client for NFS**.
        
    
5.  Restart the ECS instance.
    
6.  Start the **Command Prompt** and run the `mount` command.
    
    The following command output indicates that the NFS client is installed.
    
    ![安装结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1299119951/p13175.png)
    

## Step 2: Mount the General-purpose NFS file system

Mount an NFS file system manually for temporary use or configure it to mount automatically at boot. A manually mounted file system does not persist across instance reboots. For persistent storage, we recommend that you configure automatic mounting.

### Manually mount the NFS file system

1.  On a Windows client, run the following command to mount the NFS file system:
    
    ```
    mount -o nolock -o mtype=hard -o timeout=60 \\file-system-id.region.nas.aliyuncs.com\! Z:
    ```
    
    Replace `Z:` with your desired drive letter and `file-system-id.region.nas.aliyuncs.com` with your file system's [mount target](/help/en/nas/user-guide/manage-mount-targets#section-sjv-ozt-711).
    
    **Important**
    
    -   Do not use system drive letters (such as `C:`) to mount the file system. Instead, use high drive letters (such as `Z:`, `Y:`) as the mount targets.
        
    -   If you mount a subdirectory of a NAS file system, the mount may fail. We recommend that you do not mount a subdirectory of a NAS file system. For more information, see [What do I do if the invalid device error is returned when I rename a file in an NFS file system on a Windows client?](/help/en/nas/user-guide/cross-mount-compatibility-faq#title-6jn-nzn-rsp)
        
    
2.  Run the `mount` command to check the mount result.
    
    If the command output is similar to the following information and contains mount = hard, locking = no, and timeout = <a value that is greater than or equal to 10>, the NFS file system is mounted. Otherwise, the NFS file system fails to be mounted.
    
    To resolve a mount failure, run the `net use <Drive letter> /delete` command to unmount the file system and then mount the file system again based on the mount command provided in [Step 1](#step-1lt-8m4-ohg).
    
    ![检查UID和GID](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1299119951/p13180.png)
    
3.  Double-click the **This PC** icon to view the shared file system.
    
    Create files and folders in the shared file system to check whether you can manage the shared file system.
    
    ![挂载结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1299119951/p13177.png)
    

### Automatically mount the NFS file system

Configure the `c:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp\auto_mount.bat` file of a Windows ECS instance to automatically mount an NFS file system when the ECS instance is restarted.

1.  Go to the `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp` directory, create a script file named `nas_auto.bat`, and then enter the following content in the file.
    
    Example:
    
    ```
    mount -o nolock -o mtype=hard -o timeout=60 \\file-system-id.region.nas.aliyuncs.com\! Z:
    ```
    
    Replace `Z:` with your desired drive letter and `file-system-id.region.nas.aliyuncs.com` with your file system's [mount target](/help/en/nas/user-guide/manage-mount-targets#section-sjv-ozt-711). For more information, see [Mount parameters](/help/en/nas/user-guide/mount-an-nfs-file-system-on-a-linux-ecs-instance#table-bcw-ioo-ery).
    
2.  Create a scheduled task.
    
    1.  Open the **Control Panel** and click **System and Security**. In the **Windows Tools** section, click **Schedule tasks**. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2477103671/p1026310.png)
        
    2.  In the **Task Scheduler** window, choose **Action** > **Create Task**.
        
        ![创建任务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2541291851/p12128.png)
        
    3.  On the **General** tab, enter the **name** of the task and select **Run whether user is logged on or not** and **Run with highest privileges**.
        
        **Important**
        
        On Windows Server 2016, you must select **Run only when user is logged on** for the automatic mount to function correctly.
        
        ![常规设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2541291851/p12129.png)
        
    4.  On the **Triggers** tab, click **New**. Select **At log on** from the **Begin the task** drop-down list. In the **Advanced settings** section, select **Enabled**. Click **OK**.
        
        ![触发器设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2541291851/p12130.png)
        
    5.  On the **Actions** tab, click **New**. Select **Start a program** from the **Action** drop-down list and then specify the nas\_auto.bat file that you created in [Step 1](#step-8if-kv1-q1f) in the **Program/script** field. Click **OK**.
        
        ![启动程序](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3541291851/p12131.png)
        
    6.  On the **Conditions** tab, select **Start only if the following network connection is available** and **Any connection** in the **Network** section.
        
        ![条件设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7816151761/p12132.png)
        
    7.  On the **Settings** tab, select **If the running task does not end when requested, force it to stop**. Select **Do not start a new instance** from the drop-down list under **If the task is already running, then the following rule applies**.
        
        ![设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3541291851/p12133.png)
        
    8.  Click **OK**.
        
    9.  Restart the ECS instance to check whether the scheduled task is created.
        
        **Important**
        
        If you restart the ECS instance, services are interrupted. We recommend that you perform the operation during off-peak hours.
        
        -   View the status of the scheduled task.
            
            If the task appears in the list as shown in the following example, it was created successfully.![创建结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3541291851/p12134.png)
            
        -   Run the `mount` command to check the mount result.
            
            If the command output is similar to the following information and contains mount=hard, locking=no, and timeout=<a value that is greater than or equal to 10>, the NFS file system is mounted. Otherwise, the NFS file system fails to be mounted.
            
            To resolve a mount failure, open the nas\_auto.bat script file and replace the existing script based on the content provided in [Step 1](#step-8if-kv1-q1f).
            
            ![检查UID和GID](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1299119951/p13180.png)
            
        

## FAQ

-   [How do I resolve the file handle error when I mount a General-purpose NFS file system?](/help/en/nas/user-guide/fix-mount-issues#03f6c9eca7dnh)
    
-   [What can I do if I do not have the permissions to access an NFS file system?](/help/en/nas/user-guide/cross-mount-compatibility-faq#79d4df6639w7z)
    

## References

-   [Mount a file system across VPCs or Alibaba Cloud accounts](/help/en/nas/user-guide/mount-a-file-system-across-vpcs-or-alibaba-cloud-accounts/)
    
-   [Access a file system from a data center](/help/en/nas/user-guide/access-file-systems-in-on-premises-data-centers/)
    
-   [Use POSIX ACLs to control access](/help/en/nas/user-guide/use-posix-acls-to-control-access#task-2334148)
    
-   [Use NFSv4 ACLs to control access](/help/en/nas/user-guide/use-nfsv4-acls-to-control-access#task-2334150)
    
-   [Back up a General-purpose NAS file system](/help/en/nas/user-guide/back-up-files-from-a-general-purpose-nas-file-system#task-73045-zh)
    
-   [Recycle bin](/help/en/nas/user-guide/recycle-bin#task-2067898)
