Mount a NAS file system that uses the Server Message Block (SMB) protocol on a Windows server to share files. This topic describes how to mount an SMB file system on an Alibaba Cloud Elastic Compute Service (ECS) instance that runs Windows.

## Prerequisites

-   You have created an ECS instance that runs Windows. For more information, see [Create an ECS instance](/help/en/ecs/user-guide/create-instances/#concept-nx2-nzv-wgb).
    
-   You have created an SMB file system on NAS and obtained its mount target address. The file system and the ECS instance must be in the same region and Virtual Private Cloud (VPC). For more information, see [Create a General-purpose NAS file system in the console](/help/en/nas/user-guide/create-a-file-system#section-5jo-0kj-jn5).
    
-   Network connectivity is established.
    
    -   If you are mounting over a classic network, the ECS instance and the NAS file system must belong to the same Alibaba Cloud account.
        
    -   The file system's permission group must grant access to the Windows ECS instance.
        
    -   TCP port 445 must be open, as it is required for SMB communication.
        
        If port 445 is not open, add a rule to the security group of the target ECS instance to allow traffic on this port. For more information, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
        

## Step 1: Prepare the environment

Perform these steps once on each Windows server before you mount a file system for the first time.

**Note**

-   Windows supports mounting only General-purpose NAS file systems.
    
-   If you want to mount a NAS file system from a non-Alibaba Cloud node, such as an on-premises server or a personal computer, see [Access a file system from a data center](/help/en/nas/user-guide/access-file-systems-in-on-premises-data-centers/).
    
-   If you are unsure which operating system to choose, see [Recommended kernel images for Server Message Block (SMB) clients](/help/en/nas/recommended-kernel-images#section-5d3-pnk-65o).
    

1.  [Connect to the ECS instance](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
    
2.  On the following Windows versions, you need to allow insecure guest logons.
    
    1.  For Windows Server 2016 and later, run the following command.
        
        ```
        REG ADD HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\LanmanWorkstation\Parameters /f /v AllowInsecureGuestAuth /t REG_DWORD /d 1
        ```
        
    2.  For Windows Server 2025, you also need to disable SMB signing. Use one of the following methods:
        
        -   **Method 1: Use Group Policy (GUI)**
            
            1.  Press **Win+R** and enter `gpedit.msc` to open the Local Group Policy Editor.
                
            2.  Navigate to **Computer Configuration** > **Windows Settings** > **Security Settings** > **Local Policies** > **Security Options**. Double-click **Microsoft network client: Digitally sign communications (always)**, select **Disabled**, and then click **OK**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9907198471/p961593.png)
                
        -   **Method 2: Use the registry**
            
            If you cannot use Group Policy, disable SMB signing by using the registry. Choose one of the following methods:
            
            ## Registry Editor
            
            1.  Press **Win+R** and enter `regedit` to open the Registry Editor.
                
            2.  Navigate to the following key: `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters`.
                
            3.  Find the `RequireSecuritySignature` entry and set its value to 0.
                
            4.  Restart the computer for the change to take effect.
                
            
            ## Command line
            
            1.  Open Command Prompt as an administrator and run the following command:
                
                ```
                reg add "HKLM\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters" /v RequireSecuritySignature /t REG_DWORD /d 0 /f
                ```
                
            2.  Restart the computer for the change to take effect.
                
            
3.  Enable the Workstation service.
    
    1.  Navigate to **All Programs** > **Accessories** > **Run**, or press **Win+R** and enter `services.msc` to open the Services console.
        
    2.  In the list of services, find Workstation. Verify that its status is **Started** and its startup type is **Automatic**.
        
        By default, the Workstation service is running.
        
        ![Workstation](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9571029951/p42055.png)
        
    
4.  Enable the TCP/IP NetBIOS Helper service.
    
    1.  Open the **Network and Sharing Center** and click the active network connection.
        
    2.  Click **Properties**, double-click **Internet Protocol Version 4 (TCP/IPv4)**, and then click **Advanced**.
        
    3.  In the **Advanced TCP/IP Settings** dialog box, click the **WINS** tab and select **Enable NetBIOS over TCP/IP**.![Enable NetBIOS over TCP/IP](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9571029951/p42056.png)
        
    4.  Navigate to **All Programs** > **Accessories** > **Run**, or press **Win+R** and enter `services.msc` to open the Services console.
        
    5.  In the list of services, find TCP/IP NetBIOS Helper. Verify that its status is **Started** and its startup type is **Automatic**.
        
        By default, the TCP/IP NetBIOS Helper service is running.
        
        ![TCP/IP NetBIOS Helper](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0671029951/p54417.png)
        
    

## Step 2: Mount the SMB file system

Mount an SMB file system manually for temporary access or configure an automatic mount that persists after server restarts. We recommend configuring an automatic mount after a successful manual mount.

### **Manually mount the file system**

Mount the NAS SMB file system on your Windows ECS instance by using its mount target address.

1.  [Connect to the ECS instance](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
    
2.  Open a Command Prompt window and run the following command to mount the SMB file system.
    
    ```
    net use Z: \\file-system-id.region.nas.aliyuncs.com\myshare
    ```
    
    **Parameter**
    
    **Description**
    
    **Z**
    
    The drive letter for the mapped file system. Choose an unused letter, especially if you plan to mount multiple file systems.
    
    **file-system-id.region.nas.aliyuncs.com**
    
    The mount target address that was generated when you created the SMB file system. Replace this placeholder with your actual address.
    
    In the [NAS console](https://nas.console.alibabacloud.com/), click the file system ID, go to the **Mount Targets** tab, and then hover over the ![Mount Target](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2613457661/p495288.png) icon in the Mount Target column to find the address.
    
    **myshare**
    
    The name of the SMB share. Do not change this value.
    
    For Windows Server 2019 and later, use the `New-SmbGlobalMapping` PowerShell cmdlet to ensure that the mount point is accessible to all users. The commands are as follows:
    
    If you are prompted for credentials, enter any valid credentials for the workgroup. For example, use workgroup\\administrator and the password for the ECS administrator account.
    
    -   Mount command
        
        ```
        New-SmbGlobalMapping -LocalPath z: -RemotePath \\file-system-id.region.nas.aliyuncs.com\myshare -Persistent $true
        ```
        
    -   Unmount command
        
        ```
        Remove-SmbGlobalMapping -LocalPath z:
        ```
        
    -   Verify mount command`Get-SmbGlobalMapping`
        
    
3.  Verify that the SMB file system is mounted successfully.
    
    -   Run the following command:
        
        ```
        net use
        ```
        
    -   Example output
        
        A similar output confirms a successful mount. You can now read from and write to the NAS file system on your ECS instance.
        
        ![Check mount result](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0671029951/p49545.png)
        
    
    If the mount fails, use a script to automatically diagnose the issue or refer to common error codes for solutions. For more information, see [Run the auto-check script to troubleshoot the failure of mounting an SMB file system on Windows](/help/en/nas/user-guide/fix-mount-issues#section-txh-rdh-dfn) and [FAQ about mounting](/help/en/nas/user-guide/faq-about-mounting/#section-ktz-20x-xj8).
    

### Optional: Automatically mount the file system

To automatically mount the SMB file system when the ECS instance restarts, create a startup script in the following location:

```
c:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp\auto_mount.bat
```

1.  Open a Command Prompt window and run the following command to create the auto\_mount.bat script.
    
    ```
    echo %HOMEPATH%\mount.bat > auto_mount.bat
    ```
    
2.  Run the following three commands to move the script to the startup folder, grant read and execute permissions to all users, and register the script to run at startup.
    
    ```
    MOVE auto_mount.bat "c:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp"
    ```
    
    ```
    icacls "c:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp\auto_mount.bat" /grant everyone:rx
    ```
    
    ```
    REG ADD HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run /f /v MyMount /t REG_SZ /d "c:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp\auto_mount.bat"
    ```
    
3.  Run the following command to create the mount.bat script.
    
    ## Mount without authentication
    
    For scenarios that do not require authentication, use the following command:
    
    ```
    echo net use z: \\file-system-id.region.nas.aliyuncs.com\myshare > "%HOMEPATH%\mount.bat"
    ```
    
    ## Mount with authentication
    
    If your SMB file system uses Active Directory (AD) or ACLs and you need to mount it with domain credentials different from the current user, run the following command to configure the script.
    
    ```
    echo net use z: \\file-system-id.region.nas.aliyuncs.com\myshare /user:user@domain password > "%HOMEPATH%\mount.bat"
    ```
    
    Replace the drive letter `z`, [mount target address](/help/en/nas/user-guide/manage-mount-targets#ec9222e3a2aq9) `file-system-id.region.nas.aliyuncs.com`, domain username `user@domain`, and domain user password `password` with your actual values.
    
4.  Restart the ECS instance.
    
    After the instance restarts and you log back in, run the `net use` command to verify the mount.
    
    **Important**
    
    Restarting the ECS instance interrupts your services. Perform this operation during off-peak hours.
    

## References

-   To configure a permission group for your NAS file system, see [Manage permission groups](/help/en/nas/user-guide/manage-a-permission-group).
    
-   To learn about NAS performance, see [NAS performance overview](/help/en/nas/user-guide/nas-performance-overview).
    
-   To learn how to mount from Linux, containers, or other clients, see [Usage notes](/help/en/nas/user-guide/usage-notes#title-qim-sd5-xc9).
    
-   To set up Access Control Lists (ACLs) for different users with specific permissions, such as read-only or read-write, see [Build an AD domain on a Windows instance](/help/en/ecs/user-guide/ecs-instance-building-windows-active-directory-domain#section-7y6-p2h-zxs), [Join the mount target of an SMB file system to an AD domain](/help/en/nas/user-guide/join-the-mount-target-of-an-smb-file-system-to-an-ad-domain#task-2419984), and [Mount and use an SMB file system on a Windows client as an AD domain user](/help/en/nas/user-guide/mount-and-use-an-smb-file-system-on-a-windows-client-as-an-ad-domain-user#task-2459643).
    
-   To learn how to build Windows applications on NAS, see [Windows applications](/help/en/nas/use-cases/windows-applications#task-2000129).
    
-   To use NAS for content management systems and web service applications, see [Web service and content management](/help/en/nas/use-cases/web-service-and-content-management#task-2000028).
    
-   For more best practices for NAS, see [Best practices](/help/en/nas/use-cases/best-practices/).
