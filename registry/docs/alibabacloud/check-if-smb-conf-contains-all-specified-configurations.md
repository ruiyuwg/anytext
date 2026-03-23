This topic provides answers to some frequently asked questions (FAQ) about managing cloud computers in Elastic Desktop Service (EDS) Enterprise as administrators.

## **Table of contents**

**Category**

**Question**

Creation and deployment

-   [What should I do if cloud computers fail to be created?](#faq-create-error)
    
-   [What should I do if a cloud computer remains in the Registering state?](#faq-status-registering)
    
-   [Can I migrate a cloud computer from the China (Hangzhou) region to the China (Beijing) region?](#faq-migration)
    
-   [How do I quickly duplicate a cloud computer?](#faq-computer-duplicate)
    
-   [What do I do if I do not receive the email containing my account information after I paid for EDS Enterprise Edition?](#858fc9eef5jo5)
    

User and assignment

-   [Why are there no users available to select when I create cloud computers?](#faq-no-user-to-select)
    
-   [Is it possible for multiple end users to connect to and use a single cloud computer at the same time?](#faq-used-by-multiple-users)
    
-   [What should I do if end users find no cloud computers available after logging onto their clients?](#section-3ba-79h-7fe)
    
-   [What should I do if end users are unable to create files and folders in the root directory of the C drive?](#faq-cannot-create-under-drivec)
    

Query and management

-   [How do I restart a cloud computer by running a remote command?](#faq-restart-by-command)
    
-   [How do I upgrade the GRID driver of an Enterprise Graphics cloud computer?](#faq-update-grid-driver)
    

Storage and networking

-   [What should I do if the cloud computer's disk space does not change after expansion?](#faq-disk-upgrade-not-working)
    
-   [What should I do if the office network cannot be selected when creating an NAS storage?](#faq-no-office-network-for-nas)
    
-   [What should I do when the error message "The charge type of network package in office site is not allowed to delete" appears while attempting to delete an office network?](#faq-delete-office-network-error)
    

Cloud computer connections

-   [What do I do if the logon is disabled on the Alibaba Cloud Workspace web client?](#452e9d2d7erqj)
    
-   [What do I do if the logon is disabled on the Alibaba Cloud Workspace web client?](#0e4f85ac8bllz)
    
-   [When I log on to the client, a prompt similar to the following is displayed: "The administrator has enabled the file approval feature. Because your IT administrator requires approval for files transferred to or from the cloud computer, you must upgrade your client to version 7.13 or higher..."](#148c408d38uud)
    

Application and peripheral

-   [What should I do when end users are required to enter an admin password to install applications on their cloud computers?](#faq-admin-pwd-required)
    
-   [How do I set self-uploaded applications for automatic installation?](#faq-set-app-as-auto-install)
    
-   [What should I do if the cloud computer fails to recognize the USB device connected to the local terminal?](#faq-usb-device-not-working)
    

Cloud computer startup, restart, and wakeup errors

-   [What do I do if a Windows cloud computer is stuck "Starting" and then fails, showing as "Stopped"?](#5dc7fa1f18zro)
    
-   [What do I do if a Linux cloud computer is stuck "Starting" and then fails, showing as "Stopped"?](#c0b166786155i)
    
-   [What do I do if a cloud computer is stuck "Starting" after wake-up, then shows as "Hibernated"?](#296184587e35l)
    
-   [What do I do if a Windows cloud computer fails to load the desktop and shows "The trust relationship between this workstation and the primary domain failed"?](#5848f6901b43a)
    

Extension and others

[How can I troubleshoot EDS API call errors?](#faq-api-call-failure)

## **Creation and deployment**

### What should I do if cloud computers fail to be created?

#### **Problem description**

When I created cloud computers, the EDS console displayed a creation failure.

#### **Cause**

The queuing mechanism is activated when an excessive number of administrators concurrently attempt to create cloud computers. If the process is not finalized within one hour, the EDS console will indicate a failed creation.

#### **Solution**

You can release the cloud computers that failed to be created and then recreate them. If the failed cloud computers are not released within 7 days, they will be automatically reclaimed. No billing will be incurred for cloud computers that failed to be created.

### **What should I do if a cloud computer remains in the Registering state?**

#### **Problem description**

The cloud computer is stuck in the "Registering" state.

#### **Solution**

-   Recreate the cloud computer after shutdown. For more information, see [Create a Cloud Desktop](/help/en/wuying-workspace/user-guide/create-a-cloud-computer-3#task-1963849).
    
-   Restore the cloud computer using snapshots after shutdown. For more information, see [Use snapshots (public preview)](/help/en/wuying-workspace/user-guide/use-snapshots-public-preview#task-2013589).
    

### Can I migrate a cloud computer from the China (Hangzhou) region to the China (Beijing) region?

No. Cross-region migration of cloud computers is not supported.

### **How do I quickly duplicate a cloud computer?**

If you need to quickly create a copy of a cloud computer, you can follow these steps:

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Cloud Computers** page, find the target cloud computer. In the **Actions** column, click the ⋮ icon and select **Create Image**. This will generate a custom image of the cloud computer for future use. For more information, see [Create a custom image](/help/en/wuying-workspace/user-guide/create-an-image#task-1963850).
    
5.  After creating a custom image, create a custom cloud computer template based on that custom image. For more information, see [Create and manage custom templates](/help/en/wuying-workspace/user-guide/create-cloud-computer-templates#section-dbp-f13-95u).
    
6.  Once the custom template is created, create a cloud computer based on this custom template. The newly created cloud computer will be identical to the one used to make the custom image, thereby achieving the goal of quickly replicating the cloud computer. For more information, see [Create a Cloud Desktop](/help/en/wuying-workspace/user-guide/create-a-cloud-computer-3#task-1963849).
    

### **What do I do if I do not receive the email containing my account information after I paid for** EDS Enterprise Edition?

After you have paid for EDS Enterprise Edition, EDS will send an email containing your account information to the email address you provided during purchase. If you have completed your payment but have not received the email, perform the following checks:

-   Double check your email address: Make sure the email box you are checking is the email address you provided during purchase. If you find out that you specified a wrong email address during purchase, modify it promptly.
    
-   Check the trash folder: The email may be mistakenly considered a trash or advertisement email.
    
-   Wait for another period of time: In some cases, it takes 5 to 15 minutes for the email to be sent. Please wait for some more time and check your inbox again.
    

If the email is still absent, submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373) to contact Alibaba Cloud technical support.

## **User and assignment**

### Why are there no users available to select when I create cloud computers?

If no users appear in the list when you select authorized users, it means you have not yet created any users. You can create users based on the user account system type. For more information, see [Create a convenience account](/help/en/wuying-workspace/user-guide/create-a-convenience-user#task-2071329) or [Create and manage enterprise AD accounts](/help/en/wuying-workspace/user-guide/create-modify-and-delete-ad-users#task-1987654).

### Is it possible for multiple end users to connect to and use a single cloud computer at the same time?

-   One cloud computer can be assigned to multiple end users, but only one end user can connect to and use it at any given time. Until the currently connected end user disconnects from the cloud computer, no other end users can connect to it. For more information, see [Assign cloud computers to end users](/help/en/wuying-workspace/user-guide/assign-cloud-computers-to-end-users#task-1963859).
    
    **Note**
    
    Each time a new user logs on to a cloud computer, the session with the previous user is forcibly logged off, closing all windows and applications they opened. However, any user data written to the disk is retained.
    
-   If needed, you can set up a one-to-many share, configure the number of concurrent connections, and assign it to multiple end users. Each end user can connect to this one-to-many share at the same time, but they will operate in isolated environments.
    
    **Note**
    
    The feature is in invitational preview. If you want to use this feature, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373).
    

### What should I do if end users find no cloud computers available after logging onto their clients?

Follow the steps below to confirm whether cloud computers have been assigned to end users:

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
3.  In the top navigation bar, select a region.
    
4.  From the search criteria list, select **Username**, enter an end user's name, and press Enter.
    
    -   If the end user already has a cloud computer, ask the user to verify whether the office network ID (formerly workspace ID) or organization ID entered during logon is correct.
        
    -   If the end user has no cloud computer, you can assign one to the user. For more information, see [Manage convenience accounts](/help/en/wuying-workspace/user-guide/manage-convenience-users-1#task-2256282).
        

### What should I do if end users are unable to create files and folders in the root directory of the C drive?

#### **Problem description**

When end users use Windows cloud computers within a many-to-many share (formerly known as the cloud computer pool), they already have local admin privileges. However, when attempting to create a folder in the root directory of the C: drive, they still receive an `Access Denied` error for the target folder.

#### Cause

For cloud computers from a many-to-many share, the system imposes default restrictions on the root directory of the C: drive. Users are prohibited from creating any files or folders in the C: drive's root directory.

#### Solution

To remove the restrictions, follow these steps:

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Cloud Computer Shares**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Share** page, locate the target many-to-many share using the share ID (previously known as the cloud computer pool ID) provided by the end user.
    
5.  Click the share ID, and select the **Command Execution Details** tab.
    
6.  Under the **Command Execution Details** tab, click **Send Remote Commands**.
    
7.  In the **Send Remote Commands** panel, select the command type and the target cloud computer.
    
    **Note**
    
    For Windows cloud computers, choose either **PowerShell** or **Bat** as the command type.
    
8.  In the **Command Content** text box, enter the following command and click **Execute** to remove the restrictions on the root directory of the C: drive:
    
    ```
    cmd.exe /c "icacls C:\ /grant CDriveLimited:(AD)"
    ```
    
    If the **command output** displays a message similar to the following, the restrictions on the root directory of the C: drive have been successfully removed:
    
    ```
    Processed file: C:\
    Successfully processed 1 file; Failed to process 0 files.
    ```
    

End users can now create files and folders in the root directory of the C: drive.

## Query and management

### How do I restart a cloud computer by running a remote command?

End users may encounter errors such as `22`, `5100`, `5102`, `5202`, `ConnectTicket.Timeout`, `UnavailableDesktop.ConnectionBroken`, or other abnormal situations (e.g., keyboard unresponsiveness) when connecting to Windows cloud computers. In such cases, restarting cloud computers via a remote command may resolve the issue.

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Cloud Computers** page, locate the target cloud computer with a **Running** status. In the **Actions** column, click the ⋮ icon and select **Send Remote Commands**.
    
5.  On the **Send Remote Commands** page, select **PowerShell** as the command type.
    
6.  In the **Command Content** text box, enter the following command and click **Execute** to restart the target cloud computer:
    
    ```
    taskkill /im spmonitor.exe -f | taskkill /im aspsvdi.exe -f | taskkill /im edsagent.exe -f 
    ```
    

If the command output displays messages similar to the following, the cloud computer has been successfully restarted:

```
SUCCESS: The process "aspsvdi.exe" with PID 4164 has been terminated.
```

The example above uses a Windows cloud computer. Please adjust the actual steps based on your specific environment. For more information about sending remote commands, see [Send remote commands](/help/en/wuying-workspace/user-guide/send-remote-commands#task-2024532).

### **How do I upgrade the GRID driver of an Enterprise Graphics cloud computer?**

#### **Prerequisites**

-   Before upgrading the GRID driver, ensure that the cloud computer's system disk has at least 4 GiB of available space.
    
-   A system disk snapshot has been created prior to upgrading. If the upgrade fails, you can restore the system disk data using the snapshot. For more information, see [Use snapshots (public preview)](/help/en/wuying-workspace/user-guide/use-snapshots-public-preview#section-fyo-tu2-8pa).
    

#### **Procedure**

#### **Windows cloud computers (admin operations)**

For Windows cloud computers, simply upgrade the image to version 1.8.0 or later to complete the GRID driver upgrade. Follow these steps as an administrator to upgrade the image:

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Images Center** > **Image Updates**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Image Updates** page, locate the current image version of the cloud computer. In the **Actions** column, click **Query Involved Cloud Computer and Update Progress**.
    
5.  In the **Query Involved Cloud Computer and Update Progress** panel, perform one of the following operations as needed:
    
    -   Single operation: Click **Update** in the **Actions** column for the target cloud computer. Choose **Update Now** or **Schedule Updat**e. Then, follow the on-screen instructions to proceed.
        
    -   Batch operation: Select multiple cloud computers that require an image upgrade. Click **Immediate/Schedule Update** at the bottom. Then, follow the on-screen instructions to proceed.
        

For more information, see [Update an image](/help/en/wuying-workspace/user-guide/upgrade-mirror).

#### Windows cloud computers (end user operations)

For Windows cloud computers, simply upgrade the image to version 1.8.0 or later to complete the GRID driver upgrade. End users can follow these steps to upgrade the image:

**Important**

-   Save all opening files before the upgrade.
    
-   It takes 10 to 15 minutes for the upgrade to complete. You cannot use the cloud computer during the process.
    

1.  Click **Upgrade** in the target cloud computer card.
    
2.  In the dialog box that appears, choose an upgrade time:
    
    -   To upgrade immediately, choose **Upgrade Now** and select a **Status after Upgrade** for the cloud computer, either Remain in Current Status, Shut Down, Running, or Hibernate.
        
    -   To upgrade later, choose **Scheduled Upgrade** and select a start time, either 4 hours, 8 hours, or 12 hours, from the **Select Start Time** drop-down list.
        
3.  Click **Confirm**.
    
4.  In the **Upgraded** dialog box, click **Got it**.
    
    -   If you cannot connect to the cloud computer after an upgrade or need to roll back the upgrade, click **Manage** on the cloud computer card and choose **Restore Points** > **System Restore Point**. Click **Restore**, select the target system disk or data disk, and click **Confirm**. Alternatively, contact your enterprise IT administrator for a rollback.
        
    -   If the upgrade fails, please try again or contact your enterprise IT administrator.
        

#### **Linux cloud computers (administrator operations)**

For Linux cloud computers, administrators must update the GRID driver via remote commands.

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Cloud Computers** page, restart the target cloud computer.
    
5.  Open the **Send Remote Commands** dialog using one of the following methods:
    
    -   Click the cloud computer ID, select the **Command Execution Details** tab, and then click **Send Remote Commands**.
        
    -   Click the ⋮ icon in the **Actions** column and select **Send Remote Commands**.
        
6.  In the **Command Content** text box, execute the following commands to upgrade the GRID driver:
    
    **Important**
    
    -   Ensure the cloud computer is disconnected before sending commands.
        
    -   Command execution takes about 2 minutes.
        
    
    ```
    if acs-plugin-manager --list --local | grep grid_driver_install > /dev/null 2>&1
    then
    acs-plugin-manager --remove --plugin grid_driver_install
    fi
    acs-plugin-manager --exec --plugin grid_driver_install
    ```
    
    Check the command status at the bottom of the **output** or on the **Command Execution Details** tab. If it shows **Succeeded**, the command is successfully executed.
    
7.  Restart the cloud computer.
    

#### **Verification**

-   Linux
    
    Connect to the cloud computer and open **NVIDIA X Server Settings**. Click **X Server Information** in the left panel. If **NVIDIA Driver Version** shows `470.161.03`, the GRID driver upgrade succeeded.
    
-   Windows
    
    Connect to the cloud computer, right-click the desktop, and select **NVIDIA Control Panel**. If the version is `474.04`, the GRID driver upgrade succeeded.
    

**Note**

If the upgrade fails, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373) for technical assistance.

## Storage and networking

### What should I do if the cloud computer's disk space does not change after expansion?

If your cloud computer runs out of disk space, you can upgrade its configuration to meet your business needs. After increasing the disk space, if the available space remains the same, you may need to manually extend the disk partition. For more information, see [Resize a data disk partition](/help/en/wuying-workspace/user-guide/scale-up-the-partition-of-a-data-disk#task-2065794).

### What should I do if the office network cannot be selected when creating an NAS storage?

#### **Problem description**

In EDS Enterprise, file sharing between cloud computers within the same office network requires creating an NAS storage. However, the Office Network option is unavailable during NAS creation.

#### Cause

-   NAS is not activated.
    
-   An advanced office network is not created in the target region.
    

#### Solution

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/introduction) and check whether NAS is activated. If NAS is not activated, activate NAS as prompted.
    
2.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
3.  In the left-side navigation pane, choose **Networks & Storage** > **Office Networks**.
    
4.  On the **Office Network** page, check whether an advanced office network is created. If no advanced office network is created, create one. For more information, see [Create and manage convenience office networks](/help/en/wuying-workspace/user-guide/create-or-delete-a-convenience-office-network#section-o03-cxe-rri).
    
5.  After you perform the preceding steps, create an NAS storage again. For more information, see [Mount an NAS file system on a Windows cloud computer](/help/en/wuying-workspace/user-guide/create-and-delete-a-nas-file-system#task-2071727).
    

### What should I do when the error message `"The charge type of network package in office site is not allowed to delete"` appears while attempting to delete an office network?

#### **Problem description**

If you no longer need a specific office network, you can release all cloud computers associated with it and then delete the office network. However, when attempting to delete the office network, you may encounter the following error message: `The charge type of network package in office site is not allowed to delete.`

#### Cause

The office network still has an unbound subscription premium bandwidth plan.

#### Solution

To unbind the subscription premium bandwidth plan from the office network, follow these steps:

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Networks & Storage** > **Premium Bandwidth Plans**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Premium Bandwidth Plan** page, find the target premium bandwidth plan and click **Disassociate Office Network** in the **Actions** column.
    
5.  In the **Confirm Office Network Disassociation** message, click **Confirm**.
    
    If the plan changes to the **Not Associated** state, the plan is unbound from the office network.
    
6.  Retry deleting the office network. For more information, see [Create and manage convenience office networks](/help/en/wuying-workspace/user-guide/create-or-delete-a-convenience-office-network#section-3ud-ftg-soz).
    

## **Cloud computer connections**

### **What should I do if the "Exceptions occur in the EDS service. Failed to connect to the cloud computer. \[22\]" message appears?**

#### Causes

-   The `AF_UNIX` dependency file required for `asp-server` connections is deleted. The `1.5.x` and `1.6.x` images of the file are stored in the `C:\windows\Temp` directory, which can be accidentally deleted by cleanup tools.
    
-   The `AF_UNIX` dependency file is configured with System and Hidden attributes in the 1.7.x image. Then, exceptions may occur when the system connects to `asp-server` in some Windows systems.
    

#### Solution

This issue is fixed in the `1.8.0` image. For images `1.5.x`, `1.6.x`, and `1.7.x`, you can follow the description below to proceed:

You can modify the `server` config file and use `local socket` for connection to prevent the `AF_UNIX` file being deleted by mistake. Use Cloud Assistant Agent to run the following commands for troubleshooting:

```
$server_path = Split-Path -Path (Get-Process -Name aspsvdi).path -Parent
$json_path = $server_path + "\asp-server.json"
$oldLine = '"conn_type": "3",'
$newLine = '"conn_type": "0",'
$content = Get-Content -Path $json_path
$newContent = $content -replace [regex]::Escape($oldLine), $newLine
$newContent | Set-Content -Path $json_path
echo $newContent
taskkill /f /im aspsvdi.exe
```

### What do I do if the logon is disabled on the Alibaba Cloud Workspace web client?

#### Cause

1.  For cloud computers deployed in China (Hong Kong) and other regions outside the Chinese mainland: These instances cannot be accessed through the default domain (`wuying.aliyun.com`). They can only be accessed via a custom domain that an enterprise administrator has configured in the console.
    
2.  For cloud computers deployed in Chinese mainland regions: The connection is likely blocked by a policy restriction on the cloud computer, which results in the "disabled" message.
    

#### Solution

1.  If the instance is in China (Hong Kong) or another region outside the Chinese mainland: You must first bind a custom domain to the web client. After the binding is complete, please use your new custom domain to connect to the cloud computer. For detailed instructions, see [Bind a custom domain to a web client](/help/en/wuying-workspace/user-guide/configure-a-domain-name-for-the-web-client).
    
2.  If the instance is in a Chinese mainland region: You need to modify the policy of the affected cloud computer. Follow these steps:
    
    1.  Navigate to the policy settings for the cloud computer.
        
    2.  Under User Logon Control, find the Logon Method Control setting.
        
    3.  Ensure that the checkbox for Web Client is selected.
        

After you bind a custom domain name to the web client, reconnect to the cloud computers. For more information, see [Bind a custom domain to a web client](/help/en/wuying-workspace/user-guide/configure-a-domain-name-for-the-web-client).

### When I log on to the client, a prompt similar to the following is displayed: **"**The administrator has enabled the file approval feature. Because your IT administrator requires approval for files transferred to or from the cloud computer, you must upgrade your client to version 7.13 or higher..."

#### Cause

The administrator has enabled the file approval feature for the user's account, but the user's client software version is older than 7.13, which is the minimum version required for this feature.

#### **Solution**

1.  In the client application, go to the "About" section in the top-right corner to check the current version. If the version is below 7.13, you must [download and install the latest version](https://www.alibabacloud.com/zh/product/cloud-desktop/download-client?_p_lc=1).
    
2.  Within the client, check the cloud computer details to confirm that the cloud computer version meets the requirements.
    
3.  If using an Ubuntu cloud computer, confirm that its version also meets the necessary requirements.
    

## Application and peripheral

### What should I do when end users are required to enter an admin password to install applications on their cloud computers?

If a username and password prompt appears when an end user installs applications, it means the user account does not have local admin privileges on the cloud computer. You can resolve this issue by granting local admin privileges to the end user using one of the following methods:

-   Grant through the **Users & Organizations** module
    
    1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, choose **Users** > **Users**.
        
    3.  On the **User** tab of the **Users & Organizations** page, find the username of the account and choose one of the following methods to grant local admin privileges:
        
        -   Click the ![修改.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4087501961/p690716.png) icon in the **Local Administrator** column that corresponds to the end user. In the **Configure Local Administrator** dialog box, select **Yes** for the Local Administrator parameter and click **Confirm**.
            
        -   Select the check box of the username in the first column, choose **More** > **Configure Local Administrator**, select **Yes** in the dialog box that appears, and then click **Confirm**.
            
    4.  Restart the cloud computer.
        
-   Grant through the **Cloud Computers** module
    
    1.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
        
    2.  In the top navigation bar, select a region.
        
    3.  On the **Cloud Computers** page, find the target cloud computer, click the ⋮ icon in the **Actions** column, and then select **Send Remote Commands**.
        
    4.  Choose the appropriate command based on the cloud computer OS:
        
        -   Windows
            
            Set the **Command Type** parameter to **PowerShell** and run the following command:
            
            ```
            net localgroup administrators "Username" /add
            ```
            
        -   Linux
            
            Set the **Command Type** parameter to **Shell** and run the following command:
            
            ```
            #!/bin/bash 
            echo "ecd\\\Username ALL=(ALL) NOPASSWD:ALL #SET_BY_EDS" >> /etc/sudoers 
            ```
            
            **Note**
            
            -   The `username` should be provided by the end user.
                
                To find the username, the end user can follow these steps: Connect to the cloud computer. Open **Command Prompt** (press `Win+R`, type `cmd`, and then press Enter). Then, run the `whoami` command. The returned string is the `username`.
                
            -   If the end user still encounters a password prompt when installing applications on a Linux cloud computer, proceed as follows: Run the `sudo su` command to switch to the root user. Run the `passwd root` command to change the password. Then, retry the application installation.
                
            
    5.  Restart the cloud computer.
        

### How do I set self-uploaded applications for automatic installation?

Whether self-uploaded applications support automatic installation depends on silent installation compatibility.

-   If silent installation is supported, perform the following operations: Locate the target self-uploaded application in the EDS Enterprise console. Click **Automatically Install** in the **Actions** column. Then, follow the on-screen instructions to complete the process. For more information, see [Manage self-managed applications](/help/en/wuying-workspace/user-guide/manage-self-managed-applications).
    

-   If silent installation is not supported, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373) for technical assistance.
    

### What should I do if the cloud computer fails to recognize the USB device connected to the local terminal?

If end users cannot access locally connected USB devices on their cloud computers, follow these steps to diagnose and configure the necessary settings:

**Warning**

For Windows cloud computers, avoid installing drivers in the `temp` directory. If USB drivers are installed in the **temp** directory, they will be cleared upon reboot, causing USB devices to malfunction.

1.  Check whether USB redirection is enabled. For more information, see [Peripheral-related rules](/help/en/wuying-workspace/user-guide/peripheral-related-rules#task-2221324).
    
2.  If end users need to use local USB printers or cameras, check whether printer redirection or webcam redirection is enabled accordingly. For more information, see [Security-related rules](/help/en/wuying-workspace/user-guide/security-related-rules#task-2222829).
    
3.  If end users need to use a USB security token (U-shield), check whether the necessary drivers for the device are installed.
    
4.  Ask end users to check whether the USB policy is enabled in their cloud computers.
    
    Method: On the cloud computer card in the Alibaba Cloud Workspace client, click the ![个人中心1.PNG](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8474452171/p706428.png) icon in the top-right corner, and choose **Settings** > **Peripherals**. Then, configure the USB device whitelist or blacklist as needed.
    

## **Cloud computer startup, restart, and wakeup errors**

### **What do I do if a Windows cloud computer is stuck "Starting" and then fails, showing as "Stopped"?**

If you encounter this issue, there are several possible causes. Please use the following guide to identify the cause and apply the appropriate solution.

-   **Startup failure due to an underlying resource issue**
    
    **Cause:**
    
    You are unable to send remote commands to the cloud computer. This may indicate that the cloud computer is in a Blue Screen of Death (BSOD) or frozen state, or that underlying resources failed to allocate due to inventory or virtualization issues.
    
    **Solution:**
    
    Please ask your IT administrator to submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373) Alibaba Cloud technical support will resolve the startup failure.
    
-   **Startup failure due to VPN software**
    
    **Cause:**
    
    By sending network-related remote commands like `ipconfig /all(ifconfig)` and `route print(route -n)`, you find network adapters other than Red Hat VirtIO or routes not related to the Ethernet adapter. This may be caused by VPN software installed on the cloud computer.
    
    **Solution:**
    
    Use the `taskkill` command to terminate the VPN process, or uninstall the VPN software via remote command.
    
    **Note**
    
    If the methods above do not resolve the issue, you can submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373) for assistance from Alibaba Cloud technical support.
    
-   **Startup failure due to security software**
    
    **Cause:**
    
    By sending the tasklist (ps -aux) remote command to get the list of running processes, you find processes related to security software.
    
    **Solution:**
    
    Use the taskkill command to terminate the security software process, or uninstall the software via remote command.
    
    If the security software has a management console, add the blocked EDS processes to the whitelist.
    
-   **Note**
    
    If the methods above do not resolve the issue, you can submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373) for assistance from Alibaba Cloud technical support.
    
-   **Startup failure due to insufficient disk space**
    
    **Cause:**
    
    By sending the remote command `Get-PSDrive C | Select-Object Free（df）`, you find that the C: drive (system disk) has no free space.
    
    **Solution:**
    
    1.  Expand the system disk of the cloud computer in the EDS console.
        
    2.  Delete unnecessary files from the C: drive (system disk) by sending remote commands.
        

### What do I do if a Linux cloud computer is stuck "Starting" and then fails, showing as "Stopped"?

**Cause:** Send the following remote command script to detect and fix the issue.

```
#!/bin/bash
echo "1. Checking hostname"
NAME=$(cat /etc/hostname)
echo Local hostname: $NAME"
HOSTNAME=$(curl http://100.100.100.200/latest/meta-data/hostname 2>/dev/null)
echo "Alibaba Cloud Workspace hostname: $HOSTNAME"
if [ "$NAME" != "$HOSTNAME" ]; then
sudo hostnamectl set-hostname $HOSTNAME
echo "Hostname has been changed to $HOSTNAME"
else
echo "Hostnames are identical."
fi
echo "2.Checking resolv.conf"
Raesolv_home=$(cat /etc/resolv.conf | grep "nameserver" | awk '{print $2}')
echo "Raesolv points to: $Raesolv_home"
realm=$(cat /etc/krb5.conf | grep "default_realm" | awk '{print $3}')
if [[ -z $(cat /etc/hosts | grep $realm) ]]; then
HOSTNAME=$(hostname)
CTRL_REALM=$(cat /etc/krb5.conf | grep "default_realm" | awk '{print $3}')
cat <<- EOF >/etc/hosts
127.0.0.1 $HOSTNAME.$CTRL_REALM $HOSTNAME localhost
$(ifconfig eth0 | grep inet | grep -v inet6 | awk '{print $2}') $HOSTNAME $HOSTNAME
AME
EOF
fi
echo "3. Checking DNS IP"
IP=$(cat  /run/systemd/network/10-netplan-eth0.network  |  grep  'DNS='  |   awk -F= '{print $2}' )
DNS_IP=$(curl http://100.100.100.200/latest/user-data 2>/dev/null | grep  '^DNS_IP=' | cut -d "=" -f 2 | cut -d \" -f 2  |  sed 's/,/ /g')
echo $IP
echo $DNS_IP
if [[ "$IP" != "$DNS_IP" ]]; then
        DNS_IP=$(echo $DNS_IP | tr ' ' ',')
        a=`cat /usr/sbin/edsnetworkinit.sh | grep -A 15 eth0 | grep -A 5 nameservers | grep addresses | cut -d : -f 2 | cut -d [ -f 2 | cut -d ] -f 1`
        sed -i "s/$a/$DNS_IP/g" /usr/sbin/edsnetworkinit.sh

fi
/usr/sbin/edsnetworkinit.sh
echo "4. Checking domain"
NAME=$(cat  /run/systemd/network/10-netplan-eth0.network  |  grep  'Domains='  |   awk -F= '{print $2}' )
DOMAIN_NAME=$(curl http://100.100.100.200/latest/user-data 2>/dev/null | grep  $NAME|  cut -d "=" -f 2  |  cut -d \" -f 2)
echo "Local Hostname: $NAME"
echo "EDS domain name: $DOMAIN_NAME"
echo "5. Checking permissions"
for dir in /home/WUYING*
do
    if [ -d "$dir" ]; then
        echo "Found directory: $dir"
        current_owner=$(stat -c '%U' "$dir")
        expected_owner=$(basename "$dir"  | sed 's/_/\\/')
        if [ "$current_owner" != "$expected_owner" ]; then
            echo "Changing owner of $dir from $current_owner to $expected_owner"
            chown -R "$expected_owner" "$dir"
        else
            echo "Owner of $dir is already $expected_owner"
        fi
    fi
done
echo "6. Checking SMB service configuration and domain join status"
smb_conf="/etc/samba/smb.conf"
krb5_conf="/etc/krb5.conf"
smb_realm=$(cat /etc/samba/smb.conf | grep "^realm" | awk '{print $3}')
krb_realm=$(cat /etc/krb5.conf | grep "default_realm" | awk '{print $3}')
# Check if smb.conf contains all specified configurations
if grep -q "workgroup * = *WUYING" $smb_conf &&
   grep -q "template shell * = */bin/bash" $smb_conf &&
   grep -q "template homedir * = */home/%D_%U" $smb_conf && 
   [ "$smb_realm" = "$krb_realm" ]; then
    echo "Not modified"
else
    echo "Modified"
    # Find the appropriate domain join script
    sh=$(find /usr/local/share/aliyun-assist/work/script -type f -size +10000c)
    $sh > /dev/null 2>&1
fi
if net ads testjoin | grep -q "Join is OK"; then
    echo "Domain join successful"
else
    echo "Domain join failed"
fi
echo "7. Checking for black screen issue (libasp-server.so file)"
if [ -n "$(find /opt -name "libasp-server.so*" 2>/dev/null)" ]; then
    echo "libasp-server.so file exists"
else
    echo "libasp-server.so file is missing"
fi
echo "8. Checking firewall and port 5912"
if [ "$(systemctl is-active firewalld)" = "active" ]; then
    echo "Firewall is active, stopping it now..."
    systemctl stop firewalld
    systemctl disable firewalld
else
    echo "Firewall is inactive."
fi
if [ "$(ss -tulpn | grep ':5912')" ]; then
    echo "Port 5912 is open."
else
    echo "Port 5912 is not open, opening it now..."
    firewall-cmd --zone=public --add-port=5912/tcp --permanent
    firewall-cmd --reload
    echo "Port 5912 has been opened."
fi
```

**Solution:**

1.  Address any issues found in the output of the diagnostic script.
    
2.  Restore the cloud computer from a snapshot or rebuild the system disk.
    

**Note**

If the methods above do not resolve the issue, you can submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373) for assistance from Alibaba Cloud technical support.

### What do I do if a cloud computer is stuck "Starting" after wake-up, then shows as "Hibernated"?

**Cause:**

This may be caused by an anomaly in the cloud computer's wake-up interface, leading to a wake-up failure.

**Solution:**

Try waking the cloud computer multiple times.

**Note**

If the cloud desktop consistently fails to wake up, you can submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373) for assistance from Alibaba Cloud technical support.

### What do I do if a Windows cloud computer fails to load the desktop and shows "**The trust relationship between this workstation and the primary domain failed**"?

**Cause:**

This may occur if the cloud computer object has been deleted from the domain controller, or if it failed a security check with the domain controller.

**Solution:**

You can create a custom image from the affected cloud computer and then use this image to provision a new one. Alternatively, you can directly re-provision the cloud computer using the original base image.

**Note**

If the problem persists after changing the image, you can [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373) for assistance from Alibaba Cloud technical support.

## Extension and others

### **How can I troubleshoot EDS API call errors?**

If an API call fails, you can use the returned request ID to check the error details on the [OpenAPI problem diagnosis](https://next.api.alibabacloud.com/troubleshoot) platform.

**Note**

An API request involves building the request on the client side, sending it over the network, and processing it on the server. Since errors can occur at any stage, it's recommended to add exception handling logic that fits your business needs.
