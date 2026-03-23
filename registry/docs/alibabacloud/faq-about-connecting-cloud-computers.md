This topic provides answers to some frequently asked questions about connecting to cloud computers as end users in Elastic Desktop Service (EDS).

## Table of contents

**Category**

**FAQ**

Before connection

-   [What do I do if I cannot find any cloud computer or I am prompted that cloud computer resources fail to be assigned?](#faq-no-cloud-computer)
    
-   [Why am I unable to connect to a cloud computer by using Safari on a MacBook?](#faq-safari-failure)
    

During connection

-   [What do I do if I fail to connect to a cloud computer and a message indicating that the server whose IP address is 127.0.0.1 failed to be connected appears?](#faq-cannot-connect-127001)
    
-   [What do I do if a message indicating that published resources are unavailable appears or an unknown error 0 occurs when I connect to a cloud computer?](#faq-resource-not-available)
    
-   [Why am I unable to connect to a cloud computer when a firewall is enabled?](#faq-about-firewall)
    
-   [What do I do if I fail to connect to a cloud computer and the DesktopGuestStop error code is returned?](#faq-DesktopGuestStop)
    
-   [What do I do if an error message appears when I connect to a Windows cloud computer?](#faq-connection-errors)
    
-   [What do I do if a connection timeout error is returned when I connect to a cloud computer?](#faq-connection-timeout)
    
-   [What do I do if my cloud computer remains in maintenance mode?](#faq-maintenance-mode)
    
-   [What do I do if a message indicating that a cloud computer fails to be connected \[2010\] appears when I connect to it?](#faq-error-2010)
    
-   [Error codes for abnormal disconnections](/help/en/wtc/support/cloud-computer-disconnection-error-codes)
    

After connection

-   [What do I do if a cloud computer unexpectedly exits from the macOS client?](#faq-macos-crash)
    
-   [What do I do if a Linux Ubuntu cloud computer unexpectedly exits when I connect to the cloud computer after I update an Alibaba Cloud Workspace terminal?](#faq-ubuntu-crash)
    

## Before connection

### **What do I do if I cannot find any cloud computer or I am prompted that cloud computers fail to be assigned?**

Cloud computers are assigned by administrators. If you cannot find any cloud computer, contact your administrator. For more information, see [What do I do if no cloud computer is displayed on the Alibaba Cloud Workspace client of an end user?](/help/en/wuying-workspace/user-guide/faq-4#section-3ba-79h-7fe)

### **Why am I unable to connect to a cloud computer by using Safari on a MacBook?**

#### **Problem description**

When an end user logs on to the web client by using Safari and attempts to connect to a cloud computer, a message appears, indicating that pop-up windows failed to be opened.

#### **Causes**

This issue is caused by the default Safari preference settings on the MacBook.

#### **Solutions**

Modify the default preference settings by performing the following operations:

1.  Open the [web client](https://workspace.alibabacloud.com/) in the Safari browser.
    
2.  In the top menu bar, choose **Safari** > **Preferences**.
    
3.  Select the Websites tab, click **Pop-up Windows** from the left-side navigation pane, and then locate **wuying.aliyun.com** from the Allow pop-up windows on the website below: section.
    
4.  Click the drop-down list next to **wuying.aliyun.com** and select **Allow**.
    
5.  Refresh the page in Safari and reconnect to the cloud computer.
    

For information about other settings of pop-up windows in the Safari browser, see [Allow or block pop-ups in Safari on Mac](https://support.apple.com/zh-cn/guide/safari/sfri40696/mac).

## During connection

### **What do I do if I fail to connect to a cloud computer and a message indicating that the server whose IP address is 127.0.0.1 failed to be connected appears?**

#### **Problem description**

When an end user connects to a cloud computer, an error message indicating that the server whose IP address is 127.0.0.1 failed to be connected appears.

#### **Causes**

This issue is caused by the network proxy or virtual private network (VPN) that you configured on your local PC.

#### **Solution**

Disable the network proxy or VPN and reconnect to the cloud computer. If the issue persists, restart the local PC and try again.

### **What do I do if a message indicating that published resources are unavailable appears or an unknown error 0 occurs when I connect to a cloud computer?**

#### **Problem description**

When an end user connects to a cloud computer, a message indicating that the published resources are unavailable and the end user must contact the administrator appears or an unknown error 0 occurs.

#### **Solution**

-   Check the firewall settings on your local PC and make sure that traffic over port 1494 is allowed.
    
-   Disable the network proxy and VPN on your local PC.
    
-   Reset the workspace plug-in.
    
    Go to the `C:\Program Files (x86)\Citrix\ICA Client\SelfServicePlugin` folder and run CleanUp.exe.
    
-   If you use the Windows client, you can download the workspace plug-in from one of the following links:
    
    -   [workspace for Windows 10](https://ecd-client.oss-cn-shanghai.aliyuncs.com/workspace/win10/workspace.exe)
        
    -   [workspace for Windows 7](https://ecd-client.oss-cn-shanghai.aliyuncs.com/workspace/win7/workspace.exe)
        

If the issue persists, the network is managed by the organization to which the cloud computer belongs. Contact your IT administrator to obtain network permissions.

### **Why am I unable to connect to a cloud computer when a firewall is enabled?**

Specific ports are blocked if the firewall is enabled. If you use one of these ports, you cannot connect to your cloud computer. In this case, you must open or connect to the ports after the firewall is enabled to ensure that your business can run as expected. For more information, see [Port requirements](/help/en/wuying-workspace/user-guide/port-overview#task-2260661).

### **What do I do if I fail to connect to a cloud computer and the DesktopGuestStop error code is returned?**

#### **Problem description**

When an end user connects to a cloud computer, the error code `DesktopGuestStop` is returned, indicating that the cloud computer fails to be connected because the Elastic Compute Service (ECS) instance is stopped.

#### **Cause**

This issue is caused probably because you modified the computer name on the cloud computer.

#### **Solution**

You need to contact the IT administrator to [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373). Then, the Alibaba Cloud technical support team resumes the computer name.

### **What do I do if an error message appears when I connect to a Windows cloud computer?**

#### **Problem description**

When an end user connects to a Windows cloud computer, one of the following error messages appears:

-   `22`
    
-   `5100`
    
-   `5102`
    
-   `5202`
    
-   `ConnectTicket.Timeout`
    
-   `UnavailableDesktop.ConnectionBroken`
    

#### **Solution**

Perform the following operations to resolve the issue:

1.  (Recommend) Restart the cloud computer
    
    Before you perform the following operations, make sure that files and data are stored on the cloud computer:
    
    1.  Log on to an Alibaba Cloud Workspace terminal and find the desired cloud computer.
        
    2.  Move the pointer on the cloud computer and choose **Power** > **Restart** on the card of the cloud computer.
        
2.  Send a remote command to the cloud computer and restart EDS
    
    If you have unsaved files or data on the cloud computer, contact your administrator to run a remote command and restart EDS. For more information, see [How do I restart a cloud computer by running a remote command?](/help/en/wuying-workspace/user-guide/faq-4#faq-restart-by-command)
    
3.  Update the image of the cloud computer
    
    If your administrator already enables the automatic image update feature for your cloud computer, you can also update the image of the cloud computer.
    
    1.  Log on to an Alibaba Cloud Workspace terminal and find the desired cloud computer.
        
    2.  Move the pointer over the cloud computer and click **Update**.![btn_update_border.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6635382471/p759583.png)
        
    
    **Note**
    
    -   The update does not affect the data and software on the cloud computer. Wait for 10 to 15 minutes after an image is updated.
        
    -   If you cannot find **Update** on the card, contact your administrator to confirm whether the automatic image update feature is enabled for your cloud computer. In this case, the system can push image update tasks to you if the feature is enabled. Contact your administrator to perform the following operations:
        
        1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
            
        2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Images**. On the **Images** page, click the **Image Updates** tab.
            
        3.  In the upper part of the **Image Updates** page, turn on **Auto Update**.
            
    -   If you still cannot find the **Update** feature on the card after your administrator enables the automatic image update feature, the cloud computer uses the latest image version.
        
    
4.  Use the system disk of the cloud computer to restore data
    
    You can contact the administrator to use snapshots of the system disk of the cloud computer to restore data. For more information, see [Restore data](/help/en/wuying-workspace/user-guide/use-snapshots-public-preview#sc-restore).
    

### **What do I do if a connection timeout error is returned when I connect to a cloud computer?**

#### **Problem description**

When an end user uses the Windows client to connect to a Windows cloud computer, a message indicating that a connection error occurs and the end user must relaunch the client appears.

#### **Cause**

This issue occurs because the cloud computer cannot communicate with the backend component. The following items describe the possible causes:

-   The IP address of the cloud computer is modified.
    
-   The Network Interface Cards (NICs) of the cloud computer are disabled.
    
-   The routing table of the cloud computer is damaged.
    
-   If the cloud computer uses a non-Adaptive Streaming Protocol (ASP), port 80 of the cloud computer is occupied by a non-System process.
    

#### **Solution**

Contact your administrator to perform the following operations:

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
3.  On the **Cloud Computers** page in the EDS console, find the desired cloud computer and choose one of the following methods to send commands:
    
    -   In the **Actions** column, click **Send Remote Commands**.
        
    -   Click the ID of the cloud computer to go to the cloud computer details page. Click the **Command Execution Details** tab and then **Send Remote Commands**.
        
4.  In the **Send Remote Commands** dialog box, set the Command Type parameter to **PowerShell**, enter commands in the **Command Content** editor, and then click **Execute**.
    
    Troubleshoot this issue by running the following commands:
    
    -   Run the `ipconfig` command to view the IP address of the cloud computer and check whether the IP address is modified.
        
        Check whether the IP address is changed in the command output. By default, each cloud computer has two NICs. One NIC is used to manage traffic and its IP address is the 10 or 172 CIDR block. The other NIC is for daily use, and its IP address is assigned by the CIDR block of the vSwitch to which the system belongs.
        
        If one of the preceding IP addresses is modified, you can use one of the following methods to restore the original IP address:
        
        -   Configure a NIC to automatically obtain an IP address
            
            Run the `Get-NetIPInterface` command to check the index of a NIC and then run the following command to configure the NIC to automatically obtain an IP address:
            
            ```
            Set-NetIPInterface -InterfaceIndex NIC index
            ```
            
        -   Configure an IP address
            
            Run the `Get-NetIPInterface` command to check the index of a NIC and then run the following command to configure an IP address and a subnet mask for the NIC:
            
            ```
            Set-NetIPAddress -InterfaceIndex NIC index -IPAddress IP address -PrefixLength Subnet mask bits
            ```
            
        
        If the issue persists, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373) to contact Alibaba Cloud technical support.
        
    -   Run the `Get-NetAdapter` command to check the NICs of the cloud computer and check whether the NICs are disabled.
        
        Check whether the `Status` parameter of the NICs is **Up**.
        
        If a NIC of the cloud computer is not in the **Up** state, the NIC is disabled. You can run the following command to enable the NIC:
        
        ```
        netsh interface set interface "NIC name" enabled
        ```
        
    -   Run the `route print` command to view the route table of the cloud computer and check whether the route table is damaged.
        
        Check whether the route table contains the IP address of the cloud computer, the 100.64 CIDR block, and the 10 or 172 CIDR blocks of the management component.
        
        If the route table is damaged, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373) to contact Alibaba Cloud technical support.
        
    -   If the cloud computer uses the ASP protocol and the message indicating that the connection times out and you must try again appears, run the following commands to check whether port 80 of the cloud computer is occupied by a process other than the System process:
        
        1.  Run the following command to obtain the process ID (PID) of the process that occupies port 80:
            
            ```
            netstat -ano |findstr ":80"
            ```
            
            By default, port 80 of the cloud computer is used to communicate with backend components. The corresponding PID is 4.
            
        2.  Run the following command to check the processes that occupy port 80: Replace `<PID>` with the PID value obtained in the previous step.
            
            ```
            tasklist /fi "PID eq <PID>"
            ```
            
            Identify the process that occupies port 80 in the command output. By default, the image of the System process is named **System**, and the session of the System process is named **Services**.
            
        
        If port 80 is occupied by other processes, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373) to contact Alibaba Cloud technical support.
        
    

### **What do I do if my cloud computer remains in maintenance mode?**

#### **Problem description**

A cloud computer remains in maintenance mode on the card of the cloud computer, and the cloud computer cannot be connected.

#### **Cause**

If your administrator put the cloud computer into maintenance mode, you cannot connect to it.

#### **Solution**

Contact your administrator to exit the cloud computer from the maintenance mode. For more information, see [Put a cloud computer into maintenance mode](/help/en/wuying-workspace/user-guide/maintain-a-cloud-computer#task-2225526).

### **What do I do if a message indicating that a cloud computer fails to be connected \[2010\] appears when I connect to it?**

#### **Problem description**

During the connection to a cloud computer, a message indicating that the cloud computer service is abnormal appears and an end user is promoted that the cloud computer fails to be connected \[2010\].

#### **Cause**

The aspvdagent.exe process of an ASP-based cloud computer fails to be connected.

#### **Solution**

1.  On the card display page of cloud computers on the Alibaba Cloud Workspace client, move the pointer over the card of the desired cloud computer, click **Manage**, click the **Details** tab, and then view the ID of the cloud computer. Forward the ID to your administrator and contact the administrator to proceed with the following operations:
    
2.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
3.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
4.  On the **Cloud Computers** page in the EDS console, find the desired cloud computer and choose one of the following methods to send commands:
    
    -   In the **Actions** column, click **Send Remote Commands**.
        
    -   Click the ID of the cloud computer to go to the cloud computer details page. Click the **Command Execution Details** tab and then **Send Remote Commands**.
        
5.  In the **Send Remote Commands** dialog box, set the Command Type parameter to **PowerShell**, enter commands in the **Command Content** editor, and then click **Execute**.
    
    ```
    tasklist | findstr "aspvdagent.exe"
    ```
    
6.  Check whether the aspvdagent.exe process exists based on the command output.
    
    -   If the command output contains information about the aspvdagent.exe process, the aspvdagent.exe process exists.
        
    -   If the command output is empty, the aspvdagent.exe process does not exist. Then, restart the cloud computer to launch the process.
        
7.  Check whether third-party security software such as 360 Total Security and QAX is installed. If such software is installed on the cloud computer, add the aspvdagent.exe process to the whitelist of the software.
    
8.  Restart the cloud computer and reconnect to the cloud computer.
    

## After connection

### **What do I do if a cloud computer unexpectedly exits from the macOS client?**

This issue frequently occurs when an end user uses a MacBook running macOS 12 or later. Perform the following operations to install workspace:

1.  [Download the installation package of workspace](https://ecd-client.oss-cn-shanghai.aliyuncs.com/workspace/mac1015/workspace.dmg).
    
2.  Reinstall workspace.
    

### **What do I do if a Linux Ubuntu cloud computer unexpectedly exits when I connect to the cloud computer after I update an Alibaba Cloud Workspace terminal?**

#### **Problem description**

After an end user updates the Windows client or macOS client from an earlier version such as V6.2.0 to a later version such as V6.4.0, a Linux Ubuntu cloud computer unexpectedly exits when the end user connects to the cloud computer.

#### **Cause**

This issue occurs because the image of the cloud computer is not updated to the latest version. In this case, update the image to the latest version.

#### **Solution**

1.  Log on to the Windows client or macOS client. On the card display page of cloud computers, find the desired cloud computer.
    
2.  Move the pointer over the card of the cloud computer and click **Update**.
    

**Note**

-   The update does not affect the data and software on the cloud computer. Wait for 10 to 15 minutes after an image is updated.
    
-   If you cannot find **Update** on the card, contact your administrator to confirm whether the automatic image update feature is enabled for your cloud computer. In this case, the system can push image update tasks to you if the feature is enabled. Contact your administrator to perform the following operations:
    
    1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Images**. On the **Images** page, click the **Image Updates** tab.
        
    3.  In the upper part of the **Image Updates** page, turn on **Auto Update**.
        
-   If you still cannot find the **Update** feature on the card after your administrator enables the automatic image update feature, the cloud computer uses the latest image version.
