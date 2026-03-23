This topic describes the error message "An authentication error has occurred. The function requested is not supported" that appears when you connect to a simple application server. This topic also describes the causes of and solutions to the error.

## Problem description

When you use Remote Desktop on your on-premises device to a Windows simple application server, the error message "An authentication error has occurred. The function requested is not supported" appears.

## Causes

In May 2018, Microsoft released an update for the Credential Security Support Provider protocol (CredSSP) and changed the authentication method. By default, if the update is not installed on your on-premises device or your simple application server, the on-premises device and the simple application server may not be able to communicate.

The connection error occurs in the following scenarios:

-   Scenario 1: No CredSSP update is installed on the on-premises device. A CredSSP update is installed on the simple application server, with Encryption Oracle Remediation set to Force Updated Clients.
    
    For more information about how to fix the connection error, see the [Solution 1: Allow the simple application server to use Remote Desktop Connection](#44a6eee195sjt) section of this topic.
    
-   Scenario 2: A CredSSP update is installed on the on-premises device, with Encryption Oracle Remediation set to **Force Updated Clients**. No CredSSP update is installed on the simple application server.
    
    For more information about how to fix the connection error, see the [Solution 2: Install a CredSSP update](#44a6ef11956aq) or [Solution 3: Modify the Windows registry](#44a716049517g) section of this topic.
    
-   Scenario 3: A CredSSP update is installed on the on-premises device, with Encryption Oracle Remediation set to **Mitigated**. No CredSSP update is installed on the simple application server.
    
    For more information about how to fix the connection error, see the [Solution 2: Install a CredSSP update](#44a6ef11956aq) or [Solution 3: Modify the Windows registry](#44a716049517g) section of this topic.
    

**Note**

-   The preceding description "no CredSSP update is installed" means no CredSSP update version released since May 2018 is installed.
    
-   The preceding description "a CredSSP update is installed" means a CredSSP update version released since May 2018 is installed.
    
-   For more information about Encryption Oracle Remediation policies, see [CredSSP updates for CVE-2018-0886](https://support.microsoft.com/zh-cn/topic/cve-2018-0886-%E7%9A%84-credssp-%E6%9B%B4%E6%96%B0-5cbf9e5f-dc6d-744f-9e97-7ba400d6d3ea).
    

## Solutions

You can fix this issue by allowing the simple application server to use Remote Desktop Connection, installing a CredSSP update, or modifying the Windows registry.

### **Solution 1: Allow the** simple application server **to use Remote Desktop Connection**

The operations slightly vary based on Windows versions. The following sections describe the operations on simple application servers of Windows Server 2008 R2, Windows 2012 R2, and Windows 2016 Datacenter.

## Windows Server 2008 R2

1.  Connect to the simple application server by using the Virtual Network Console (VNC).
    
    For more information, see the "Use VNC to connect to the server in the Simple Application Server console" section of the [Connect to a Windows server](/help/en/simple-application-server/user-guide/connect-to-windows-server-remotely#b4c056f5d8z2n) topic.
    
2.  Click **Start** on your on-premises device, right-click **Computer**, and then select **Properties**.
    
3.  In the **Control Panel Home** section, click **Remote settings**.
    
4.  In the **System Properties** dialog box, on the Remote tab, select **Allow connections from computers running any version of Remote Desktop (Less secure)**, and then click **OK**.
    

## Windows Server 2012 R2

1.  Connect to the simple application server by using the VNC.
    
    For more information, see the "Use VNC to connect to the server in the Simple Application Server console" section of the [Connect to a Windows server](/help/en/simple-application-server/user-guide/connect-to-windows-server-remotely#b4c056f5d8z2n) topic.
    
2.  Click the ![win2012开始图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8707844861/p530260.png) icon, right-click **This PC**, and then select **Properties**.
    
3.  In the **Control Panel Home** section, click **Remote settings**.
    
4.  On the **Remote** tab, clear **Allow connections only from computers running Remote Desktop with Network Level Authentication (more secure)**, and then click **OK**.
    

## Windows Server 2016 Datacenter

1.  Connect to the simple application server by using the VNC.
    
    For more information, see the "Use VNC to connect to the server in the Simple Application Server console" section of the [Connect to a Windows server](/help/en/simple-application-server/user-guide/connect-to-windows-server-remotely#b4c056f5d8z2n) topic.
    
2.  Click the ![Dingtalk_20210510142550.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8707844861/p519497.png) icon, and then click **Windows System**.
    
3.  Right-click **This PC** and choose **More > Properties**.
    
4.  In the **Control Panel Home** section, click **Remote settings**.
    
5.  On the **Remote** tab, clear **Allow connections only from computers running Remote Desktop with Network Level Authentication (more secure)**, and then click **OK**.
    

### **Solution 2: Install a CredSSP update**

In the following example, an on-premises device that runs Windows Server 2016 operating system is used. The operations for other Windows systems are similar with these operations.

1.  Connect to the simple application server by using the VNC.
    
    For more information, see the "Use VNC to connect to the server in the Simple Application Server console" section of the [Connect to a Windows server](/help/en/simple-application-server/user-guide/connect-to-windows-server-remotely#b4c056f5d8z2n) topic.
    
2.  Click the ![Dingtalk_20210510142550.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8707844861/p519497.png) icon, and then click **Settings****.**
    
3.  On the **Windows Settings** page, click **Update** **and** **Security**.
    
4.  On the **Update Status** page, click **Check for Updates** and wait for the update to be downloaded and installed.
    
    **Note**
    
    To manually install the security update package for CredSSP, visit the [Microsoft official website](https://www.microsoft.com/zh-cn/windows/) and download the security update package.
    
5.  On the simple application server, choose ![Dingtalk_20210510142550.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8707844861/p519497.png) **>** ![电源管理](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8707844861/p530476.png) **> Restart** to restart the simple application server and update the configurations of the server.
    

### **Solution 3: Modify the Windows registry**

In the following example, an on-premises device that runs Windows Server 2016 operating system is used. The operations for other Windows systems are similar with these operations. After a CredSSP update is installed on your on-premises device or your simple application server, use one of the following methods to modify the Windows registry.

**Warning**

If the registry is improperly modified, serious issues may occur on the Windows operating system. You need to modify the registry at your own risk. Before you modify the registry, we recommend that you create a snapshot to back up your data to avoid possible data loss. For more information, see the "Create a snapshot" section of the [Manage snapshots](/help/en/simple-application-server/user-guide/manage-snapshots#section-fup-p30-12b) topic.

## (Recommended) Use a script to modify the registry

1.  Connect to the simple application server by using the VNC.
    
    For more information, see the "Use VNC to connect to the server in the Simple Application Server console" section of the [Connect to a Windows server](/help/en/simple-application-server/user-guide/connect-to-windows-server-remotely#b4c056f5d8z2n) topic.
    
2.  Open the Command Prompt window.
    
    1.  Right-click the ![Dingtalk_20210510142550.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8707844861/p519497.png) icon, and then select **Run**.
        
    2.  In the **Run** dialog box, enter `cmd`.
        
    3.  Click **OK****.**
        
        Open the Command Prompt window.
        
3.  Run the following command to enter the PowerShell mode:
    
    ```
    powershell
    ```
    
4.  Run the following command to run the `Windows PowerShell` script as an administrator:
    
    ```
    New-Item -Path HKLM:\Software\Microsoft\Windows\CurrentVersion\Policies\System -Name CredSSP -Force
    New-Item -Path HKLM:\Software\Microsoft\Windows\CurrentVersion\Policies\System\CredSSP -Name Parameters -Force
    Get-Item -Path HKLM:\Software\Microsoft\Windows\CurrentVersion\Policies\System\CredSSP\Parameters | New-ItemProperty -Name AllowEncryptionOracle -Value 2 -PropertyType DWORD -Force
    ```
    
5.  On the simple application server, choose ![Dingtalk_20210510142550.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8707844861/p519497.png) **>** ![电源管理](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8707844861/p530476.png) **> Restart** to restart the simple application server and update the configurations of the server.
    
    **Note**
    
    If you have used this method to modify the registry and then installed security updates on the on-premises device and the simple application sever, we recommend that you set **Values** of `AllowEncryptionOracle` to `0` or `1` to enhance security. For more information about **Values** of `AllowEncryptionOracle`, see [CredSSP updates for CVE-2018-0886](https://support.microsoft.com/zh-cn/help/4093492/credssp-updates-for-cve-2018-0886-march-13-2018).
    

## Manually modify the registry

1.  Connect to the simple application server by using the VNC.
    
    For more information, see the "Use VNC to connect to the server in the Simple Application Server console" section of the [Connect to a Windows server](/help/en/simple-application-server/user-guide/connect-to-windows-server-remotely#b4c056f5d8z2n) topic.
    
2.  Open Registry Editor.
    
    1.  Right-click the ![Dingtalk_20210510142550.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8707844861/p519497.png) icon, and then select **Run**.
        
    2.  In the **Run** dialog box, enter `regedit`.
        
    3.  Click **OK**.
        
        Go to Registry Editor.
        
3.  On the **Registry Editor** page, in the `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System\CredSSP\Parameters` path, set **Values** of `AllowEncryptionOracle` to **2****.**
    
    **Note**
    
    For more information about **Values** of `AllowEncryptionOracle`, see [CredSSP updates for CVE-2018-0886](https://support.microsoft.com/zh-cn/help/4093492/credssp-updates-for-cve-2018-0886-march-13-2018).
    
    If the `CredSSP` key or `Parameters` key does not exist, create a new corresponding registry key, and then create a new `AllowEncryptionOracle` registry key of the REG\_DWORD type under the corresponding registry key. For example, if none of the `CredSSP` and `Parameters` keys exists, perform the following operations:
    
    1.  Create a new `CredSSP` key in the `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System` path.
        
        1.  Right-click the blank area of the registry keys and select **New (N) > Key (K)**.
            
        2.  Enter the `CredSSP` and press the `Enter` key.
            
    2.  Create a new `Parameters` key in the `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System\CredSSP` path.
        
    3.  Create a new `AllowEncryptionOracle` key in the `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System\CredSSP\Parameters` path.
        
    4.  Modify the **Values** of the `AllowEncryptionOracle` registry key**.**
        
        1.  Right-click `AllowEncryptionOracle`, and then click **Modify**.
            
        2.  In the dialog box, set **Value Data** to **2** and click **OK**.
            
4.  On the simple application server, choose ![Dingtalk_20210510142550.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8707844861/p519497.png) **>** ![电源管理](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8707844861/p530476.png) **> Restart** to restart the simple application server and update the configurations of the server.
    

## References

[CVE-2018-0886 | CredSSP Remote Code Execution Vulnerability](https://portal.msrc.microsoft.com/zh-cn/security-guidance/advisory/CVE-2018-0886)
