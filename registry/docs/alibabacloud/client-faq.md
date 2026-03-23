This topic provides answers to some frequently asked questions about Alibaba Cloud Workspace clients (hereinafter referred to as Alibaba Cloud Workspace clients). The questions are related to logon exceptions, unexpected exits, and issue reporting.

## Index

**Category**

**FAQ**

Installation and uninstallation

-   [What do I do if the message "This program requires Windows Service Pack 1 or later" appears when I install an Alibaba Cloud Workspace client?](#faq-windows-service-package-1)
    
-   [What do I do if a message indicating a UsbDk Runtime Libraries Installer failure appears when I install an Alibaba Cloud Workspace client?](#faq-usbdk)
    
-   [How do I update an Alibaba Cloud Workspace terminal?](#faq-how-to-update)
    
-   [What do I do if the Alibaba Cloud Workspace icon still appears after I uninstall the macOS client?](#faq-macos-icon-remain)
    
-   [What do I do if the error message "The drive or UNC share you selected does not exist or is not accessible. Please select another." is displayed when installing the Alibaba Cloud Workspace client?](#8efffd0cc35uj)
    

Running and logon

-   [What do I do if an Alibaba Cloud Workspace client fails to run after I install it?](#faq-client-cannot-run)
    
-   [What do I do if the message indicating VCRUNTIME140.dll missing appears when I launch an Alibaba Cloud Workspace client?](#faq-vcruntime)
    
-   [What do I do if the message "Alibaba Cloud Workspace can't be opened because the identity of the developer cannot be confirmed" appears when I try to launch it?](#faq-developer-identity)
    
-   [What do I do if a Windows client unexpectedly exits when I launch it?](#faq-windows-client-crash)
    
-   [What do I do if the message indicating network request timeout appears when I log on to an Alibaba Cloud Workspace client?](#faq-network-request-timeout)
    
-   [What do I do if a message indicating that the current office network does not allow access from XX appears when I log on to an Alibaba Cloud Workspace client?](#faq-connection-type-not-supported)
    
-   [What do I do if a message indicating that an office network of the RAM user type is not supported appears when I log on to an Alibaba Cloud Workspace client?](#faq-ram-user-not-supported)
    
-   [What do I do if a message indicating invalid username or password appears when I log on to an Alibaba Cloud Workspace client?](#faq-username-pwd-incorrect)
    

Features and others

[Is the local disk mapping feature supported when I use an Alibaba Cloud Workspace client for web to connect to a cloud computer?](#faq-web-client-support-diskmap)

## **Installation and uninstallation**

### **What do I do if the message "This program requires Windows Service Pack 1 or later" appears when I install an** Alibaba Cloud Workspace client**?**

#### **Problem description**

When an end user installs an Alibaba Cloud Workspace client on a local PC running Windows 7, the message `This program requires Windows Service Pack 1 or later` appears.![或更高](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0904656171/p529304.png)

#### **Solution**

Manually install [Windows 7 Service Pack 1 (SP1)](https://ecd-client.oss-cn-shanghai.aliyuncs.com/tools/Windows7/Windows6.1-KB3033929-x64.msu).

### **What do I do if a message indicating a UsbDk Runtime Libraries Installer failure appears when I install an Alibaba Cloud Workspace client?**

#### **Problem description**

When an end user installs the Windows client on a local PC running Windows 7 SP1, the error message `UsbDk Runtime Libraries Installer` appears.

#### **Cause**

Windows 7 SP1 requires many patches. In some cases, the required patches for UsbDk are missing in Windows 7 SP1. Therefore, the message appears when an end user installs the client.

#### **Solution**

Install [Windows 7 SP1 patches](https://ecd-client.oss-cn-shanghai.aliyuncs.com/tools/Windows7/Windows6.1-KB3033929-x64.msu) for UsbDk on the local PC and then re-install the Windows client.

### **How do I update an Alibaba Cloud Workspace terminal?**

**Note**

The features of Alibaba Cloud Workspace terminals and related update vary with Alibaba Cloud Workspace terminals. The actual features and operations shall prevail.

Operations performed by an end user

#### Windows clients/macOS clients

**Note**

In the following example, a Windows client V7.2.2 is used. The information that is displayed on your client shall prevail.

1.  Choose the appropriate method based on your logon status:
    
    -   If you are not logged on: From the client login screen, click the icon in the top-right corner and select **About**.
        
        If you are logged in: From the cloud resource list screen, click the icon in the top-right corner and select **About**.
        
2.  In the **About** window, you can view the current version number. Click **Check for Update** to see if a new version is available.
    

Operations performed by an administrator

#### **Configure forcible update of software clients**

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Terminals** > **Hardware Terminals**.
    
3.  On the **Terminals** page, click **Terminal Update** in the upper-right corner of the page.
    
4.  On the **Software Clients** tab of the ****Terminal Upgrade**** page, turn on or turn off the **Forcible Update** switch as needed.
    

### **What do I do if the Alibaba Cloud Workspace client icon still appears after I uninstall the** macOS client**?**

After an end user uninstalls a macOS client, the client icon remains on the local PC and cannot be permanently removed. The end user can try the following solutions to resolve the issue:

1.  Delete the client icon in Finder or Launchpad.
    
    1.  Open a **Finder** window. In the left-side navigation pane of the **Finder** window, click **Applications**. Enter Alibaba Cloud Workspace in the search box on the right side of the page and search for the client. Alternatively, right-click the Alibaba Cloud Workspace icon in Dock and choose **Options** > **Show in Finder**.
        
    2.  Right-click the Alibaba Cloud Workspace icon and select **Move to Trash**.
        
    3.  Delete the icon or empty Trash to permanently delete the icon.
        
2.  After you restart the MacBook, uninstall the macOS client.
    

### What do I do if the error message "The drive or UNC share you selected does not exist or is not accessible. Please select another." is displayed when installing the Alibaba Cloud Workspace client?

#### **Problem description**

When installing the Alibaba Cloud Workspace client, the installation fails and displays the following error message: `**The drive or UNC share you selected does not exist or is not accessible. Please select another.**`

#### **Cause**

This error occurs because the installer is trying to access a previous installation path that is no longer available. This typically happens when the Alibaba Cloud Workspace client was originally installed on a removable storage device (e.g., an external hard drive, USB flash drive) that has since been disconnected from the system.

#### **Solution**

Delete the registry: `\HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\`

## **Running and logon**

### **What do I do if an Alibaba Cloud Workspace client fails to run after I install it?**

#### **Problem description**

An end user receives an error message `wuying.exe has stopped working` when the end user launch an Alibaba Cloud Workspace client on a local PC running Windows 7.

#### **Cause**

The GPU driver of the local PC is missing, or the driver version does not match.

#### **Solution**

1.  On the local PC, run Command Prompt as an administrator.
    
    1.  Press the shortcuts `Win+R`. In the **Run** dialog box, enter `cmd` and click **OK**.
        
    2.  Click the search box in the task bar, enter **Command Prompt**, and then select **Run as administrator** from the shortcut menu.
        
2.  Run the following command to start the diagnostic program:
    
    ```
    "C:\Program Files (x86)\Wuying Cloud Computer\bin\diagnose.exe"
    ```
    
3.  View the command output. If the following command output is returned, the GPU driver is missing. In this case, install a GPU driver.
    
    ```
    Could not initialize EGL display: error 0x3001
    ```
    

### **What do I do if the message indicating VCRUNTIME140.dll missing appears when I launch an Alibaba Cloud Workspace client?**

#### **Problem description**

When an end user launches an Alibaba Cloud Workspace client on a local Windows PC, the end user receives the following error message: `The program can't start because VCRUNTIME140.dll is missing from your computer. Try reinstalling the program to fix this problem.`![VC](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0904656171/p529307.png)

#### **Solution**

Manually install [VC Runtime 2019](https://ecd-client.oss-cn-shanghai.aliyuncs.com/tools/VC_redist.x64.exe).

### **What do I do if the message "Alibaba Cloud Workspace can't be opened because the identity of the developer cannot be confirmed" appears when I try to launch it?**

#### **Problem description**

An error message indicating that the developer identity cannot be confirmed appears after an end user clicks the Alibaba Cloud Workspace client icon on a MacBook running macOS 10.13 or 10.14.

#### **Solution**

You can perform the following operations to launch the client:

1.  Open **Finder** on the MacBook and click Applications.
    
2.  Find **Alibaba Cloud Workspace** from the application list.
    
3.  Right-click **Alibaba Cloud Workspace** and click **Open**.
    

**Note**

The issue occurs only the first time you launch the client.

### **What do I do if a Windows client exits unexpectedly when I launch it?**

This issue may be caused by the disabled port 55556. To resolve the issue, perform the following operations:

1.  Go to the directory in which the client is installed.
    
    By default, the client is installed in `C:\Program Files (x86)\Wuying Cloud Computer`.
    
2.  Open the `bin` folder, find the `sdbus_daemon.conf` file, and edit the file in a text editor.
    
3.  Change the port number.
    
    The default port number is 55556. You must change the port number to another port number that is not occupied. The port number ranges from 0 to 65535.![修改端口号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7045278861/p438232.png)
    
4.  Relaunch the client.
    

**Note**

If the issue persists, check whether the root certificate of the Windows OS on the local PC is valid.

### **What do I do if the message indicating network request timeout appears when I log on to an Alibaba Cloud Workspace client?**

Run the following command to check whether you can access Elastic Desktop Service over your local network:

```
ping ecd.region.aliyuncs.com
```

When you run the command, replace `region` with the actual region ID of the cloud computer. Example: `ping ecd.cn-hangzhou.aliyuncs.com`. If you fail to ping the region ID, check the local network status.

### **What do I do if a message indicating that the current office network does not allow access from XX appears when I log on to an Alibaba Cloud Workspace client?**

This message indicates that the connection type you selected on the Alibaba Cloud Workspace client is different from the connection method that your administrator specified for the office network. Select another connection type or contact your administrator to change the connection method.

### **What do I do if a message indicating that an office network of the RAM user type is not supported appears when I log on to an Alibaba Cloud Workspace client?**

Alibaba Cloud Workspace clients V2.0.0 or later no longer support logon by using office networks (formerly workspaces) of the Resource Access Management (RAM) user type. The ID of this type of office network is `****@****.onaliyun.com`. Contact your administrator to create office networks of the convenience account type.

### **What do I do if a message indicating invalid username or password appears when I log on to an Alibaba Cloud Workspace client?**

The following figure shows how to resolve the issue:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6057685671/CAEQJxiBgICJrYHSgRkiIDk5YzAxYmE1NTE4MTQ4OTRiMjNjOTA1MDM0YTE3OTgz4324181_20240410135950.995.svg)

1.  Check whether the username and password are correct, and re-enter the username and password.
    
2.  If the issue persists after you perform the preceding steps, you may have forgotten the password. In this case, you can perform the following operations based on the user account type.
    
    **Note**
    
    As a security measure, all active cloud computer sessions for this account will be automatically disconnected once the password reset is complete.
    
    #### **Convenience user**
    
    #### **Administrator-activated**
    
    Contact your administrator to change the password. Your administrator must perform the following operations:
    
    1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, choose **Users** > **Users**.
        
    3.  On the **User** tab of the **Users** page, find the user that you want to manage and click **Change Password** in the **Actions** column.
        
    4.  In the **Change Password** dialog box, proceed as prompted.
        
    5.  After your administrator sends you the username and new password, you can use the username and password to log on to the Alibaba Cloud Workspace client.
        
    
    #### **User-activated**
    
    You can reset the password on the WUYING client, or contact your administrator to reset the password in the WUYING Workspace console. Then, you can log on to the client by using the username and the new password.
    
    Reset the password on the WUYING client
    
    1.  On the logon page of the WUYING client, click **Forgot password**.
        
    2.  In the **Reset Password** dialog box, enter the username and email address
        
    3.  as prompted, and then click **Confirm**.
        
    
    5.  Then, the system automatically sends an initial password to you. You can use the initial password to log on to the client and change the password as prompted.
        
    
    Reset the password in the WUYING Workspace console
    
    1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, choose **Users** > **Users**.
        
    3.  On the **User** tab of the Users & Organizations page, find the user that you want to manage and click the ⋮ icon, and then click **Change Password** in the **Actions** column.
        
    4.  In the **Reset Password** dialog box, select a method to send the new password and click **OK**.
        
    
    Then, the system automatically sends an initial password to you. You can use the initial password to log on to the client and change the password as prompted.
    
    #### **Enterprise AD user**
    
    Contact your administrator to change the password. Your administrator must perform the following operations:
    
    1.  Log on to the AD domain controller of your enterprise.
        
    2.  Open Server Manager. In the left-side navigation pane, click **AD DS**.
        
    3.  In the server list, right-click the required server and select **Active Directory Users and Computers**.
        
    4.  In the dialog box that appears, find the user for which you want to change the password. You can also modify basic information of the user.
        
        -   Change the logon password
            
            1.  Right-click the desired user and select **Reset Password** from the shortcut menu.
                
            2.  In the **Reset Password** dialog box, specify a new password as prompted and click **OK**.
                
        -   Modify basic information
            
            1.  Right-click the desired user and select **Properties** from the shortcut menu.
                
            2.  Modify the basic information about the user based on your business requirements.
                
            3.  Click **OK**.
                
    
    After your administrator sends you the username and new password, you can use the username and password to log on to the Alibaba Cloud Workspace client.
    

## **Features and others**

### **Is the local disk mapping feature supported when I use an Alibaba Cloud Workspace client for web to connect to a cloud computer?**

The local disk mapping feature is not supported, regardless of whether the feature is enabled for the associated cloud computer. In this case, you cannot read or write data on the local disks from cloud computers.

You can click DesktopAssistant on the cloud computer and use the upload and download feature to read and write data on local disks.

**Note**

If the upload and download feature does not appear in the DesktopAssistant menu, contact the administrator to change the associated policy to allow file transfer between the web client and local PC.
