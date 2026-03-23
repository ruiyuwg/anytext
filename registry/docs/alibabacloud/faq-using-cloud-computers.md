This topic answers frequently asked questions (FAQs) about using cloud computers. The questions cover connections and Internet access, files and transmission, and configurations and permissions.

## Index

**Category**

**FAQ**

Connections and Internet access

-   [What do I do if I cannot start my cloud computer?](#faq-cannot-start-up)
    
-   [What do I do if my cloud computer cannot access the Internet?](#faq-no-internet-connection)
    
-   [What do I do if I cannot access a website from my cloud computer?](#faq-cannot-access-website)
    
-   [What do I do if the Firefox browser on my Ubuntu cloud computer cannot access certain websites?](#faq-cannot-access-website-with-firefox)
    
-   [What do I do if the VPN software on my Windows cloud computer keeps disconnecting?](#faq-frequent-disconnection-vpn)
    
-   [What do I do if my Windows cloud computer cannot access high-security sites?](#faq-cannot-access-secure-site)
    

Files and transmission

-   [Is there a size limit for files uploaded to a cloud computer?](#faq-upload-filesize-limit)
    
-   [How do I upload and download files when using a cloud computer?](#faq-how-to-upload-and-download)
    
-   [What do I do if an error occurs when I copy and paste a file from my local computer to a cloud computer?](#faq-path-length-limit)
    
-   [What do I do if I cannot create files and folders in the root directory of the C drive?](#faq-cannot-create-file-under-c)
    
-   [What do I do if the content of an Excel cell becomes an image when I copy it on an ASP-based cloud computer?](#faq-copy-excel-as-pic)
    

Configurations and permissions

-   [Why am I prompted for administrator permissions when I already have them?](#faq-prompt-for-admin-permission)
    
-   [What permissions do I need to install fonts on a cloud computer?](#faq-permission-required-for-install-fonts)
    
-   [What do I do if the data disk capacity is smaller than the size specified in the cloud computer template?](#faq-data-disk-volume-short)
    
-   [What do I do if my cloud computer disk runs out of space?](#faq-how-to-increase-volume)
    
-   [What do I do if the system disk capacity of my Windows cloud computer does not change after a scale-out?](#faq-system-disk-volume-not-extended)
    

System and settings

-   [How do I open the toolbar or performance panel in a cloud computer?](#faq-how-to-open-toolbar)
    
-   [How do I update the Windows system of a cloud computer?](#faq-how-to-update-windows)
    
-   [What do I do if a "Your Windows license will expire soon" pop-up appears on my cloud computer?](#faq-windows-license-expiration)
    
-   [Can I change the system time of a cloud computer?](#faq-support-modify-system-time)
    
-   [How do I view the GPU information of an Enterprise Graphics cloud computer?](#faq-query-gpu-info)
    
-   [Can I change the color format of a Windows cloud computer?](#faq-support-change-color-format)
    
-   [What do I do if the spacing between desktop icons on my cloud computer becomes very large?](#faq-desktop-shortcut-distance)
    
-   [What do I do if the display settings window on my cloud computer closes unexpectedly?](#faq-display-setting-disappear)
    
-   [How do I use the dual-screen mode on a cloud computer?](#faq-how-to-use-dual-screen)
    
-   [What do I do if I cannot enter dual-screen mode when using a cloud computer?](#faq-cannot-enter-dual-screen)
    
-   [What do I do if a Windows cloud computer does not have IIS?](#faq-no-iis-in-windows)
    
-   [What do I do if the UI scaling ratio I modified does not take effect for certain software?](#faq-ui-scaling-not-working)
    

Software and applications

-   [Can I purchase applications from the marketplace on a subscription or pay-as-you-go basis?](#faq-buy-app-payg-or-subscribe)
    
-   [Can I run local applications in a cloud computer?](#faq-run-local-app)
    
-   [What do I do if I am prompted to enter an administrator password when I install an application on a cloud computer?](#faq-admin-password-required)
    
-   [How do I install applications that only administrators can install?](#faq-install-admin-only-app)
    
-   [What do I do if I cannot install Adobe software on a Windows cloud computer?](#faq-cannot-install-adobe-app)
    
-   [What is the difference between a system disk and a data disk? Can I run programs that I installed on the data disk?](#faq-diff-between-c-and-d)
    

Games and entertainment

-   [What do I do if the mouse pointer behaves abnormally when I play a game or use 3D software in a cloud computer?](#faq-relative-mouse)
    
-   [What do I need to know when I run software or games on a cloud computer?](#faq-note-for-gamers)
    
-   [What do I do if a cloud computer cannot run certain game software?](#faq-game-not-supported)
    

## Connections and Internet access

### **What do I do if I cannot start my cloud computer?**

If you cannot start a cloud computer, try the following solutions:

-   Disable the firewall and try to restart the cloud computer.
    
-   Restore disk data from the latest valid snapshot. For more information, see [Back up and restore cloud computer data](/help/en/wtc/user-guide/backup-and-restore-data#section-dmp-dju-881).
    
-   Reset the cloud computer by changing its image. For more information, see [Change the image of a cloud computer or a cloud computer in a pool](/help/en/wuying-workspace/user-guide/change-the-images-of-cloud-computers-or-cloud-computer-pools#task-2074648).
    
    **Note**
    
    Before you change the image, create a snapshot to back up your data. For more information, see [Use snapshots (public preview)](/help/en/wuying-workspace/user-guide/use-snapshots-public-preview#task-2013589).
    
-   If you have important data on the cloud computer or the issue persists after you try the preceding solutions, you can [submit a ticket](https://signin-intl.aliyun.com/5316109394402871.onaliyun.com/login.htm?callback=https%3A%2F%2Fsmartservice.console.alibabacloud.com%2F%23%2Fticket%2FcreateIndex&accounttraceid=aae02443c0a84f428381c1860cf4257fppzi&cspNonce=yOlXPozXDH&oauth_callback=https%3A%2F%2Fsmartservice.console.alibabacloud.com%2F%23%2Fticket%2FcreateIndex&spma=a2c45&spmb=11132017#/main) for professional support.
    

### **What do I do if my cloud computer cannot access the Internet?**

You have logged on to the client and connected to the cloud computer, but you cannot access the Internet from the cloud computer. In this case, contact your administrator to enable Internet access bandwidth for the office network where the cloud computer is located. For more information, see [Network FAQ](/help/en/wuying-workspace/user-guide/network-faq#li-ejy-v67-m3i).

### **What do I do if I cannot access a website from my cloud computer?**

If you cannot access a website from your cloud computer, the cause may be one of the following:

-   The office network to which the cloud computer belongs may not have Internet access enabled. To resolve this, ask your administrator to enable Internet access for the office network. For more information, see [Manage public bandwidth](/help/en/wuying-workspace/user-guide/manage-internet-access#task-2074484).
    
-   A proxy may be enabled on the cloud computer, which can prevent access to some websites. To resolve this, try disabling the proxy or use a browser plug-in to implement Proxy Auto-Configuration.
    

### **What do I do if the Firefox browser on my Ubuntu cloud computer cannot access certain websites?**

When you use the built-in Firefox browser on an Ubuntu cloud computer to access certain websites, you may receive a "403 Forbidden" error. However, you can open the websites in the Chrome browser. To resolve this issue, perform the following steps.

1.  Open the Firefox browser, click the ![3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5044289861/p532020.png) icon in the upper-right corner, and select **Add-ons and themes**.
    
2.  In the panel that appears, select **Extensions** and click **Add to Firefox**.
    
3.  After the installation is successful, a new ![h](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5044289861/p532027.png) icon appears in the upper-right corner of the browser.
    
4.  Restart the browser.
    
5.  Click the ![h](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5044289861/p532027.png) icon and select **Firefox** > **Windows** > **firefox 105.0ser**.
    
6.  Click **Apply (container)**.
    

### **What do I do if the VPN software on my Windows cloud computer keeps disconnecting?**

If the VPN software on your Windows cloud computer keeps disconnecting, you can resolve the issue by configuring domain name-to-IP address mappings in the Hosts file.

1.  Click [vpnhosts.exe](https://ecd-client.oss-cn-shanghai.aliyuncs.com/tools/net-tool/vpnhost/vpnhosts.exe) to download the vpnhosts.exe tool.
    
2.  Open the Command Prompt application, go to the directory where the vpnhosts.exe tool is located, and then run the following command to add the domain name-to-IP address mappings to the Hosts file.
    
    ```
    .\vpnhosts.exe -set
    ```
    
    If the message `set hosts successfully` appears, the Hosts file was modified successfully.
    
    **Important**
    
    If you modify the Hosts file in a cloud computer, you can create a snapshot for the cloud computer. However, the snapshot cannot be used to create a custom image.
    

To delete the domain name-to-IP address mappings that you configured, run the following command to restore the Hosts file:

```
.\vpnhosts.exe -clean
```

If the `clean hosts successfully` message appears, the Hosts file has been successfully restored.

### **What do I do if my Windows cloud computer cannot access high-security sites?**

When you access certain sites with high security requirements from a Windows cloud computer, you may be unable to access the Internet or the web content may be blocked. For example, the page cannot be refreshed when you register an application, or the QR code is not displayed when you refresh the client. This may be because the **IE Enhanced Security Configuration** feature is disabled by default on WUYING Windows cloud computers. Enable the feature and try again. The following procedure uses the Baidu Netdisk client as an example, where the QR code is not displayed after a refresh. This procedure describes how to enable the **IE Enhanced Security Configuration** feature and add a trusted site.

1.  In the search box in the lower-left corner of the cloud computer desktop, enter Control Panel and click **Control Panel**.
    
2.  Set **View By** to **Small Icons** and click **Administrative Tools**.![管理工具](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9108637471/p577286.jpg)
    
3.  Double-click **Server Manager** and click **Local Server**.
    
4.  In the **Properties** section, click **Off** next to **IE Enhanced Security Configuration**.
    
5.  In the **Internet Explorer Enhanced Security Configuration** panel, select **On (Recommended)** in the **Administrator** and **User** sections and click **OK**.
    
    ![db_ie_enhanced_security_configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9108637471/p955715.png)
    
    Reopen the **Server Manager** > **Local Server** page. The status of **IE Enhanced Security Configuration** is updated to **On**.
    
6.  When you access Baidu Netdisk again, a dialog box for the enhanced security configuration of **Internet Explorer** appears. Note the website address at the top of the dialog box. Click **Add**. In the Add this website to the zone text box, enter the address. Click **Add** and then click **Close**.![添加信任站点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5044289861/p577358.jpg)
    
7.  The dialog box for the enhanced security configuration of **Internet Explorer** appears again. Note the website address at the top of the dialog box. Click **Add**. In the **Add this website to the zone** text box, enter the address. Click **Add** and then click **Close**.![再次添加信任站点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5044289861/p577368.jpg)
    
    Reopen Baidu Netdisk. The logon QR code is automatically refreshed on the logon page.
    

## Files and transmission

### **Is there a size limit for files uploaded to a cloud computer?**

There is no limit for Windows cloud computers. The maximum file size for Linux cloud computers is 4 GB.

**Note**

When you connect to a cloud computer from the web client, the file upload is limited to 2 GB. If you want to transfer files larger than 2 GB, connect to the cloud computer from the Windows client or macOS client.

### **How do I upload and download files when using a cloud computer?**

You can connect to cloud computers from various clients. The supported file transfer methods and operations vary based on the client. Choose the appropriate operation for your needs. For more information, see [Transfer files](/help/en/wtc/user-guide/transfer-files-via-desktop-client).

### What do I do if an error occurs when I copy and paste a file from my local computer to a cloud computer?

**Problem**

You cannot copy and paste files from your local computer to a cloud computer.

**Cause**

The path of the file that you are copying may be too long. The maximum path length for a file in the Windows operating system is 260 characters. For more information, see [Maximum Path Length Limitation](https://learn.microsoft.com/zh-cn/windows/win32/fileio/maximum-file-path-limitation?tabs=registry).

**Solution**

-   Copy and paste the files in the folder in batches, or shorten the file path to reduce the number of characters.
    
-   You can also transfer files using other methods, such as local disk mapping or the file transfer module.
    

### **What do I do if I cannot create files and folders in the root directory of the C drive?**

**Problem**

An end user uses a Windows cloud computer from a shared cloud computer pool. The end user has local administrator permissions but receives an "Access to the destination folder is denied" message when the user tries to create a folder in the root directory of the C drive.

**Cause**

The root directory of the C drive on cloud computers in a shared cloud computer pool is restricted. Users are not allowed to create files or folders in the root directory of the C drive on a cloud computer.

**Solution**

On the cloud computer card page of the client, move the mouse pointer over the cloud computer, click **Manage**, and select **Info** to view the cloud computer ID. Then, contact an administrator for help. For information about the operations that an administrator must perform, see [What should I do if end users are unable to create files and folders in the root directory of the C drive?](/help/en/wuying-workspace/user-guide/faq-4#faq-cannot-create-under-drivec).

### **What do I do if the content of an Excel cell becomes an image when I copy it on an ASP-based cloud computer?**

**Problem**

After you connect to an Adaptive Streaming Protocol (ASP)-based cloud computer from the Windows client or macOS client, when you copy the content of an Excel cell from your local computer to an Excel file on the cloud computer, the content of the cell becomes an image. The same issue occurs when you copy the content of an Excel cell from the cloud computer to an Excel file on your local computer.

**Cause**

The clipboard of an ASP-based cloud computer supports only text and images. Rich text is converted into an image by the system.

#### **Solution**

You can copy the content of an Excel cell in one of the following ways.

-   Double-click the Excel cell, copy the content in the cell, and then paste the text into the cell of the destination Excel file.
    
-   Copy the content of one or more Excel cells, paste the content into a text editor, and then copy the content from the text editor to the cells of the destination Excel file.
    

## Configurations and permissions

### **Why am I prompted for administrator permissions when I already have them?**

**Problem**

You have administrator permissions, but you are still prompted for administrator permissions in the following scenarios.

Scenarios:

-   In the cloud computer, you right-click **ThisPC** and select **Properties**. In the navigation pane on the left, you select **Remote settings** and then select **Advanced** > **Settings**. On the **Data Execution Prevention** tab, a message indicates that you must be an administrator of the computer to change the settings.
    
-   When you install some installation packages, you right-click an installation package and select **Run as administrator**, but the installation fails.
    

**Cause**

If you have administrator permissions but do not have the SeShutdownPrivilege permission, you are still prompted for administrator permissions in some scenarios.

**Solution**

1.  In the search box on the taskbar, enter cmd and click **Open**.
    
2.  In the **Command Prompt** panel, enter gpedit.msc and press Enter.
    
3.  Open **Local Group Policy Editor**, select **Computer Configuration** > **Windows Settings** > **Security Settings** > **User Rights Assignment**, find SeShutdownPrivilege, and then add Administrators to the "Shut down the system" policy.**Shut down the system**, and then add Administrators to the "Shut down the system" policy.![admin](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9108637471/p534041.png)
    
4.  Restart the cloud computer.
    

### **What permissions do I need to install fonts on a cloud computer?**

You can install your own fonts on a cloud computer. Before you install fonts, ask your administrator to grant you administrator permissions for the cloud computer.

**Entry point**: On the [User Management page](https://eds.console.alibabacloud.com/usermanage/cn-shanghai), select the user to whom you want to grant permissions, click **Configure Local Administrator**, and then grant administrator permissions for the cloud computer to the user.

### **What do I do if the data disk capacity is smaller than the size specified in the cloud computer template?**

**Problem**

The data disk size specified in the cloud computer template is 150 GiB, but the data disk capacity is only 70 GiB after you log on to the cloud computer.

**Description**

If a cloud computer template contains a custom image and the data disk size specified in the template is larger than the data disk size of the image, the initial data disk capacity of a cloud computer created from the template is the same as the data disk size of the image. The extra capacity is in an unallocated state. You cannot directly use this unallocated capacity. You must manually scale out the disk to allocate the unallocated capacity to an existing or new data disk partition.

**Solution**

Log on to the cloud computer and manually scale out the data disk partition. For more information, see [Scale out a data disk partition](/help/en/wuying-workspace/user-guide/scale-up-the-partition-of-a-data-disk#task-2065794).

### What do I do if my cloud computer disk runs out of space?

If you are an Enterprise Edition user, contact your administrator to increase the disk capacity. For more information, see [Increase disk capacity](/help/en/wuying-workspace/user-guide/cloud-disk-scale-up).

### **What do I do if the system disk capacity of my Windows cloud computer does not change after a scale-out?**

**Problem**

You use a Windows cloud computer. If security software such as Huorong Security is installed in the cloud computer, the system disk capacity of the cloud computer does not change after an administrator scales out the disk in the console.

**Cause**

The Huorong Security software prevents AliyunEDSAgent from scaling out the system disk.

**Solution**

1.  Open the Huorong Security software, select **Protection**, and then disable **Enhanced Protection**.
    
2.  Right-click a blank area on the taskbar and select **Task Manager**. In the Task Manager panel, find and restart AliyunEDSAgent on the **Services** tab.![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9108637471/p534030.png)
    
3.  Wait for one minute and check whether the system disk capacity has changed. If the system disk capacity is updated to the scaled-out capacity, re-enable **Enhanced Protection** in Huorong Security.
    

## **System and settings**

### How do I open the toolbar or performance panel in a cloud computer?

After you connect to a cloud computer, the toolbar appears as a floating ball on the desktop. The floating ball automatically hides when it is near the edge of your screen. You can open the toolbar and performance panel in the following ways.

-   Open the toolbar
    
    On the cloud computer desktop, move the mouse pointer over the small tab at the edge of the screen to show the floating ball.
    
-   Open the performance panel
    
    -   To open the monitoring bar, click DesktopAssistant on the desktop of your cloud computer and click **Metrics**.
        
    -   If this is your first time to open the monitoring bar, the simple mode applies. That is, only specific metrics are displayed. To switch the display mode of the bar, perform the following operations: click the icon to switch to the detailed mode. Then, all metrics in the bar are displayed. You can also click the icon to switch back to the simple mode.
        
    -   To close the monitoring bar, click the icon to the right side of the bar.
        

### **How do I update the Windows system of a cloud computer?**

**Important**

Before you update the Windows OS, back up the system by creating a snapshot.

1.  Open the command prompt application.
    
    For example, you can press the `Win+R` keyboard shortcut, enter `cmd` in the **Run** dialog box, and click **OK**.
    
2.  In the command prompt window, enter the following command:
    
    ```
    sc.exe config "wuauserv" start=demand
    ```
    
3.  After a success message is returned, enter the following command:
    
    ```
    sc.exe start wuauserv
    ```
    

### **What do I do if the following message appears on my cloud computer:** `**Your Windows license will expire soon**`**?**

**Problem**

The message `Your Windows license will expire soon` appears on your cloud computer desktop.

**Solution**

-   If your cloud computer is created from an image that you imported, you must use your own license for activation when you import the image. Therefore, you must update the license when it expires. For more information, see [Step 6: Import an image](/help/en/wuying-workspace/user-guide/import-image#sc-step6).
    
-   If this is not the case, you can use a Key Management Service (KMS) domain name to activate the cloud computer instance.
    
    1.  Add the IP address that corresponds to the KMS domain name to the allowlist of the firewall or security group.
        
        **Note**
        
        You can run the `ping <KMS domain name>` command to query the IP address of the KMS domain name. For example, to view the IP address of the KMS domain name for the Chinese mainland, run the `ping kms.cloud.aliyuncs.com` command.
        
    2.  Log on to the WUYING Terminal and open your cloud computer.
        
    3.  Open the command prompt application.
        
        For example, you can press the `Win+R` shortcut key, enter `cmd` in the **Run** dialog box, and click **OK**.
        
    4.  In the command prompt window, enter the following command to change the KMS domain name.
        
        ```
        slmgr -skms kms.cloud.aliyuncs.com
        ```
        
        **Note**
        
        For information about the KMS domain names for different regions, see [Appendix](#sc-kms-domain-list).
        
    5.  In the **Windows Script Host** dialog box, click **OK**.
        
        **Important**
        
        If the execution fails, check whether the DNS server that you use is an Alibaba Cloud DNS server. If you are not using an Alibaba Cloud DNS server, the resolution of `kms.cloud.aliyuncs.com` fails. We recommend that you set the default DNS server to `100.100.2.136` or `100.100.2.138`.
        
    6.  In the command prompt window, enter the following command to activate the KMS service.
        
        ```
        slmgr -ato
        ```
        
        If the message `Product activated successfully` is displayed, the activation is successful.
        

**Appendix: KMS domain names**

**Region name**

**KMS domain name**

Chinese mainland

kms.cloud.aliyuncs.com

China (Hong Kong)

kms.cloud.aliyuncs.com

Singapore

sg.kms.cloud.aliyuncs.com

US (Silicon Valley)

us1.kms.cloud.aliyuncs.com

US (Virginia)

us2.kms.cloud.aliyuncs.com

Japan (Tokyo)

jp.kms.cloud.aliyuncs.com

Germany (Frankfurt)

de.kms.cloud.aliyuncs.com

UAE (Dubai)

db.kms.cloud.aliyuncs.com

Malaysia (Kuala Lumpur)

my.kms.cloud.aliyuncs.com

Indonesia (Jakarta)

id.kms.cloud.aliyuncs.com

UK (London)

eu.kms.cloud.aliyuncs.com

### **Can I change the system time of a cloud computer?**

You cannot change the system time of a cloud computer. If you forcibly change the system time, a service error may occur and you cannot connect to the cloud computer.

### **How do I view the GPU information of an Enterprise Graphics cloud computer?**

You can view the GPU information of the cloud computer in one of the following ways:

-   View the information in **NVIDIA Control Panel**:
    
    After you connect to the cloud computer, right-click a blank area on the desktop and select **NVIDIA Control Panel** to view the GPU model and version information.
    
-   View the information on the **Task Manager** page:
    
    1.  After you connect to the cloud computer, right-click a blank area on the taskbar and select **Task Manager**.
        
    2.  On the **Task Manager** page, select **Performance** > **GPU** to view the GPU model, version, and usage.
        
-   View the information using a command:
    
    1.  After you connect to the cloud computer, enter cmd in the search box, select **Run As Administrator**, and open the **Command Prompt** page.
        
    2.  Run the following command to view the GPU model, version, and usage.
        
        ```
        "C:/Program Files/NVIDIA Corporation/NVSMI/nvidia-smi.exe"
        ```
        

### **Can I change the color format of a Windows cloud computer?**

No, you cannot.

### What do I do if the spacing between desktop icons on my cloud computer becomes very large?

**Problem**

The distance between desktop icons becomes very large.

**Cause**

This issue can be triggered by a known error in the Windows operating system after the cloud computer's resolution changes during startup or a restart.

**Solution**

Perform the following steps to modify the registry in the cloud computer to resolve the issue:

1.  In the cloud computer, press `Win`+`R` to open the Run window, enter `regedit`, and click **OK** to open Registry Editor.
    
2.  In the Registry Editor window, open the directory `HKEY_CURRENT_USER\Control Panel\Desktop\WindowMetrics`, and then press the Enter key.
    
3.  On the right, find the two keys named `IconSpacing` and `IconVerticalSpacing`, and double-click them to change their values to `-1125`.
    
4.  Restart the cloud computer.
    

### **What do I do if the display settings window on my cloud computer closes unexpectedly?**

**Problem**

You right-click a blank area on the cloud computer desktop and select **Display Settings**. After a while, the **Settings** window closes unexpectedly.

**Cause**

The required system services in the cloud computer are not enabled.

**Solution**

Perform the following steps to enable the required system services:

1.  On the cloud computer, press the shortcut `Win+R`, enter the command `services.msc` in the **Run** window, and then click **OK**.
    
2.  In the **Services** window, follow these steps to start the `Remote Procedure Call (RPC)`, `Network Connection Broker`, and `Connected Devices Platform Service` services one by one.
    
    1.  Right-click the service name and select **Properties**.
        
    2.  In the dialog box, select **Automatic** from the **Startup Type** drop-down list.
        
    3.  Below **Service Status**, click **Start**.
        
    4.  At the bottom of the dialog box, click **Apply** and **OK**.
        

### **How do I use the dual-screen mode on a cloud computer?**

To use the dual-screen feature of a cloud computer, click the floating ball in the cloud computer. If the floating ball is in edge-adsorption mode, click the small green tab to reveal the floating ball. Select **Settings** > **Display** and turn on the right-side switch for **Cloud Computer Dual-screen**. In addition, connect an external display to your local computer. When the cloud computer enters full-screen mode, the external display automatically becomes the extended screen of the cloud computer. This setting takes effect only for the current cloud computer. After you change the setting, exit and re-enter full-screen mode for the setting to take effect. For more information, see [Adjust the cloud computer display](/help/en/wtc/user-guide/adjust-display-in-desktop-client).

### **What do I do if I cannot enter dual-screen mode when using a cloud computer?**

This issue is caused by driver incompatibility. If your cloud computer uses the Windows Server 2016 system image and you cannot enter dual-screen mode, contact your administrator to change the system image to Windows Server 2019 or Windows Server 2022. Then, you can enter dual-screen mode.For more information, see [Change the image of a cloud computer or a cloud computer in a pool](/help/en/wuying-workspace/user-guide/change-the-images-of-cloud-computers-or-cloud-computer-pools).

### **What do I do if a Windows cloud computer does not have IIS?**

Internet Information Services (IIS) is a built-in service of the Windows operating system. By default, IIS is not installed. Before you use IIS, you must manually install the service. The following procedure uses a cloud computer that runs the Windows Server 2016 operating system as an example to describe how to install IIS.

1.  In the lower-left corner of the cloud computer desktop, select **Start** > **Server Manager**.
    
2.  On the **Dashboard** page, click **Add roles and features**.
    
3.  On the **Before You Begin**, **Installation Type**, and **Server Selection** tabs, retain the default settings and click **Next**.
    
4.  On the **Server Roles** tab, select **Web Server (IIS)**. In the **Add features that are required for Web Server (IIS)?** dialog box that appears, click **Add Features** and then click **Next**.![常见问题1..jpeg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6701289861/p679177.jpeg)
    
5.  On the **Features** tab, select the features that you may use and click **Next**.
    
6.  On the **Web Server Role (IIS)** tab, click **Next**.
    
7.  On the **Select role services** tab, select the role services that you may use and click **Next**.
    
8.  On the **Confirmation** tab, confirm the services and features to be installed and click **Install**.
    
9.  Wait for 2 to 5 minutes. After the service is installed, you are redirected to the **Results** tab.
    
10.  Open a browser and enter `localhost` or `127.0.0.1`. If information similar to the following figure is displayed, IIS is installed successfully.![FAQ2.jpeg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6701289861/p679208.jpeg)
     

### **What do I do if the UI scaling ratio I modified does not take effect for certain software?**

After you change the UI scaling ratio in a cloud computer, the setting does not take effect for some software. This is because the software is not compatible with dynamic resolution switching. You can try to restart the cloud computer to resolve the issue. If the issue persists, report the issue to the software developer and request them to optimize the compatibility with dynamic resolution switching.

## **Software and applications**

### **Can I purchase applications from the marketplace on a subscription or pay-as-you-go basis?**

Applications in the marketplace are provided by service providers. The purchase and billing methods are specified on the purchase page in the marketplace. You can directly consult the service provider.

**Consultation entry point**: On the purchase page of the application, click **Chat Now** and submit your question. The service provider will answer your question.

### **Can I run local applications in a cloud computer?**

Running locally installed applications on a cloud computer is not supported. You can run portable local applications if needed. However, running portable local applications can affect bandwidth and your user experience. We do not recommend running local applications on a cloud computer. You can enable local disk mapping to read or write local files in a cloud computer. For more information, see [Policy overview](/help/en/wuying-workspace/user-guide/cloud-computer-policy-overview#concept-1993678).

### **What do I do if I am prompted to enter an administrator password when I install an application on a cloud computer?**

When you install an application on a cloud computer, if a dialog box that requires you to enter an administrator username and password appears, your user account does not have administrator permissions for the cloud computer. In this case, contact an administrator to grant you administrator permissions for the cloud computer.

**Entry point**: On the [User Management page](https://eds.console.alibabacloud.com/usermanage/cn-shanghai), select the user to whom you want to grant permissions. In the **Local Administrator** column, click the ![修改.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2617138961/p710592.png) icon and follow the prompts to grant local administrator permissions for the cloud computer to the user.

**Note**

An administrator can also use the remote command feature to grant your user account administrator permissions for the cloud computer. For more information, see [What do I do if an end user is prompted to enter an administrator password to install an application on a cloud computer?](/help/en/wuying-workspace/user-guide/faq-4#faq-admin-pwd-required).

### **How do I install applications that only administrators can install?**

To prevent data breaches, strict permission control is imposed on applications that are installed from WUYING App Center. If you do not have administrator permissions and need to install an application that is under administrator permission control, you can [submit a ticket](https://signin-intl.aliyun.com/5316109394402871.onaliyun.com/login.htm?callback=https%3A%2F%2Fsmartservice.console.alibabacloud.com%2F%23%2Fticket%2FcreateIndex&accounttraceid=4a2b982b37ec489c94c1b9731b097c97jorp&cspNonce=5Jn0ehp3ax&oauth_callback=https%3A%2F%2Fsmartservice.console.alibabacloud.com%2F%23%2Fticket%2FcreateIndex&spma=a2c45&spmb=11132017#/main) to obtain technical support and have the application installed.

**Note**

The preceding method applies only to applications that are downloaded and installed from WUYING App Center, but not to applications that are downloaded from the Internet.

### **What do I do if I cannot install Adobe software on a Windows cloud computer?**

When you install Adobe software on a Windows cloud computer, a message indicates that the installation failed because the operating system does not meet the minimum system requirements of the installer. This is because the Windows Server operating system version is too low. In this case, contact an administrator to upgrade the image of the cloud computer. For more information, see [Change the image of a cloud computer or a cloud computer in a pool](/help/en/wuying-workspace/user-guide/change-the-images-of-cloud-computers-or-cloud-computer-pools#task-2074648).

### What is the difference between a system disk and a data disk? Can I run programs that I installed on the data disk?

In a Windows cloud computer, the C drive is the system disk and the D drive is the data disk.

The system disk is the default system partition of a computer hard disk. It is usually where the operating system is installed. It also stores system drivers, the registry, default program installation directories such as Program Files, and user documents such as the desktop and Downloads folder. A data disk is a partition other than the system disk. It is generally used to store personal data of users.

Just like on a regular computer, you can choose to install applications on the D drive. Applications that can run on the D drive of a regular computer can also run on the D drive of a cloud computer.

## Games and entertainment

### **What do I do if the mouse pointer behaves abnormally when I play a game or use 3D software in a cloud computer?**

After you enable the cursor confinement setting in the cloud computer, you can use the mouse as expected.

**Important**

-   After you enable the cursor confinement setting, the setting takes effect only for the current connection. After you disconnect from and reconnect to the cloud computer, the cursor confinement setting is restored to disabled.
    
-   The following procedure uses a Windows client version 7.11 as an example. The operations may vary based on the client version that you use.
    

1.  Connect to the cloud computer.
    
2.  Click the floating ball on the cloud computer desktop and select **Settings**.
    
3.  In the panel that appears, select **Preferences** > **Control**.
    
4.  On the Control tab, turn on the **Confine Cursor** switch.
    
    After you turn on the switch, the mouse pointer is confined within the cloud computer desktop and cannot be moved to other areas.
    
    **Note**
    
    Areas other than the cloud computer desktop include areas outside the cloud computer window and the floating ball. The floating ball is part of the client interface and does not belong to the cloud computer desktop.
    
5.  (Optional) You can use a default keyboard shortcut (press the Esc key twice, or press `Ctrl+Alt+2` or `Ctrl+Option+2`) to temporarily disable the cursor confinement feature. You can also specify a custom keyboard shortcut in the **Release Cursor Shortcut** section.
    

### **What do I need to know when I run software or games on a cloud computer?**

Note the following items when you run software or games on a cloud computer:

-   Some software or games have requirements for the running environment and may require high-configuration discrete graphics cards. In this case, purchase a cloud computer that meets your requirements.
    
    **Note**
    
    To check whether a software or game requires a graphics card, go to the official website of the software or game.
    
-   For a Citrix-based cloud computer, due to the limits of Citrix policies, you must make sure that the cloud computer is connected when you run software or games. If the cloud computer is disconnected, the software or game cannot run.
    
-   You cannot deploy games that are accessed over the Internet.
    

### **What do I do if a cloud computer cannot run certain game software?**

If your cloud computer meets the running requirements of a game but the game still cannot run, the DirectPlay component may be missing. You can perform the following operations to configure the component to resolve the issue.

1.  In the lower-left corner of the Windows cloud computer, select **Start** > **Windows Administrative Tools** > **Server Manager**.
    
2.  On the **Dashboard** page of **Server Manager**, click **Add Roles and Features**.
    
3.  On the **Before You Begin**, **Installation Type**, **Server Selection**, and **Server Roles** tabs, retain the default options and click **Next**.
    
4.  On the **Features** tab, select **DirectPlay** and click **Next**.
    
5.  On the **Confirmation** tab, click **Install**.
    
6.  Wait for 2 to 5 minutes. After the service is installed, you are redirected to the **Results** tab.
