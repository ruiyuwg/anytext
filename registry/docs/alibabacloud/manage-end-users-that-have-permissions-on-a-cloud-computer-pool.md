A many-to-many share, formerly known as a cloud computer pool, is a unified collection of cloud computers designed to manage and schedule resources efficiently. This approach enhances the management and utilization of cloud computers while reducing operational costs. This topic describes how to create a many-to-many share.

## Background information

Elastic Desktop Service (EDS) Enterprise automatically manages the creation, assignment, and release of cloud computers in a many-to-many share. This process is based on the chosen billing method and the configured scaling policy. For information about how a many-to-many share works, see [Overview](/help/en/wuying-workspace/user-guide/shared-cloud-computers-overview).

## Prerequisites

-   An office network is set up, which can be either a convenience office network or an enterprise Active Directory (AD) office network. Additionally, a user account is created, which can be either a convenience account or an enterprise AD account. For more information, see the following topics:
    
    -   Convenience account:
        
        -   [Create a convenience account](/help/en/wuying-workspace/user-guide/create-a-convenience-user#task-2071329)
            
        -   [Create and manage convenience office networks](/help/en/wuying-workspace/user-guide/create-or-delete-a-convenience-office-network#task-2071724)
            
    -   Enterprise AD account:
        
        -   [Create and manage enterprise AD accounts](/help/en/wuying-workspace/user-guide/create-modify-and-delete-ad-users#task-1987654)
            
        -   [Create and manage an enterprise AD office network](/help/en/wuying-workspace/user-guide/create-and-configure-an-ad-office-network#task-2074476)
            
-   A cloud computer template is created, or an existing cloud computer template is available. For more information, see [Create and manage custom templates](/help/en/wuying-workspace/user-guide/create-cloud-computer-templates#task-1964296).
    
-   A policy is created, or an existing policy is available. For more information, see [Create and manage cloud computer policies](/help/en/wuying-workspace/user-guide/create-and-manage-cloud-computer-policies).
    

## **Create a** **many-to-many share**

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Shared Cloud Computer**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Many-to-Many** tab of the **Share** page, click **Create Share** and configure the following parameters as needed.
    
    **Parameter**
    
    **Description**
    
    **Billing Method**
    
    The billing method of the many-to-many share.
    
    -   Subscription: You need to pay an upfront fee before you can use resources. This billing method also enables you to reserve specific resources and benefit from discounted pricing.
        
    -   Pay-as-you-go: You are charged based on the specifications of resources and the actual time you use them. You can release the resources at any time.
        
    
    For more information, see [Billing overview](/help/en/wuying-workspace/product-overview/billing-overview#concept-1986940).
    
    **Name**
    
    The name of the many-to-many share. The name must conform to the naming conventions as prompted.
    
    **Region**
    
    The region where you want to deploy the many-to-many share.
    
    **Office Network**
    
    The office network in which the many-to-many share resides. You can select a convenience or an enterprise AD office network. For more information about the types of office networks, see [Office network types](/help/en/wuying-workspace/user-guide/workspace-overview#sc-office-network-type).
    
    **Authorize End Users**
    
    After you add authorized end users for the many-to-many share, cloud computers within the share will be assigned to these users. However, unlike regular cloud computers, those in a many-to-many share are not permanently tied to specific end users. Instead, EDS Enterprise randomly allocates the cloud computers to authorized end users based on their connection status. When an end user disconnects from a cloud computer, EDS Enterprise resets the cloud computer according to the reset type defined in the reset task. Once reset, the cloud computer becomes available and can be assigned to another end user for use.
    
    -   If you want to add authorized end users after you create the many-to-many share, you can set the Authorize End Users parameter to **Disable**.
        
    -   If you want to add authorized end users when you create the many-to-many share, you can set the Authorize End Users parameter to **Enable**.
        
        -   If you use a convenience office network, click **Authorize User** and select one or more existing convenience accounts. Alternatively, click **Create User** to create and add new convenience accounts. For more information about how to create a convenience account, see [Create a convenience account](/help/en/wuying-workspace/user-guide/create-a-convenience-user).
            
        -   If you use an enterprise AD office network, click **Authorize User** and select one or more enterprise AD accounts in an AD controller. Alternatively, import enterprise AD accounts by uploading a CSV file that contains AD user information on the **Upload** tab.
            
            **Note**
            
            You can import up to 500 enterprise AD accounts at a time by uploading a CSV file.
            
    
    Batch import enterprise AD accounts
    
    1.  In the **Select Users** panel, click the **Upload** tab.
        
    2.  Prepare a CSV file and upload the file to the EDS Enterprise console by using one of the following methods:
        
        -   Click **Download CSV Template**. Open the downloaded template, enter the AD account information in the format that is provided by the template, and then save the file.
            
        -   Use spreadsheet software to create a file, specify information about AD accounts in the valid format, and then save the file in the CSV format.
            
    3.  Click **Select File**, select the CSV file that you want to upload, and then click **OK**.
        
        The system uploads the CSV file to the EDS Enterprise console and checks whether the information about the imported AD accounts matches that recorded in the AD domain controller. You can click **View Match Details** to view the results. You can assign cloud computers only to users that are displayed in the **Matched User** list. For accounts that are in the **Mismatched User** list, you can modify the information, click **Resubmit**, and then grant permissions again.
        
    
    **Data Roaming**
    
    Enabling the data roaming feature allows data in the `C:\Users\<username>` directory to follow end users wherever they connect to cloud computers with the share, which ensures a seamless and consistent user experience. For more information about the feature and how to configure the feature, see [Configure user data roaming](#sc-upm).
    
    **Security Policy**
    
    The policy that you want to associate with the many-to-many share, which is designed to manage cloud computer usage behaviors and user experience settings. You can either choose an existing policy or create a new one tailored to your specific business needs. For more information, see [Create and manage cloud computer policies](/help/en/wuying-workspace/user-guide/create-and-manage-cloud-computer-policies).
    
    **Computer Template**
    
    The template from which cloud computers within the many-to-many share are created. Cloud computer templates define the specifications and images for cloud computers. These templates allow you to quickly create cloud computers. You can either choose from existing templates or create a custom one tailored to your business needs. For more information, see [Create and manage custom templates](/help/en/wuying-workspace/user-guide/create-cloud-computer-templates).
    
    **Note**
    
    When you create a many-to-many share, cloud computer templates that include custom Linux images are not supported. To enable user data roaming, ensure that the image version of the selected template is V1.9.0 or later.
    
    **Tag**
    
    The tag that you want to add to cloud computers within the share.
    
    If you set the **Billing Method** parameter to **Subscription**, you must configure the following parameters:
    
    **Quantity**
    
    The number of cloud computers you want to create in the first batch within the share.
    
    **Duration**
    
    The subscription duration of the many-to-many share. You can also enable the auto-renewal feature.
    
    **Allow Auto-creation**
    
    If you enable the **auto-creation** feature, EDS Enterprise will automatically create and allocate new cloud computers from the selected template when all cloud computers in the many-to-many share are in use and additional end users request access. These new cloud computers are billed on a pay-as-you-go basis. Once the end users disconnect, EDS Enterprise will release the cloud computers after 10 minutes.
    
    **Max. Auto-created Desktops**
    
    If you enable the **auto-creation** feature, you need to specify the maximum number of cloud computers that can be created automatically. This helps control the upper limit of your expenses.
    
    If you set the **Billing Method** parameter to **Pay-as-you-go**, you must configure the following parameters:
    
    ****Min. Cloud Computers****
    
    The initial number of cloud computers you want to create and permanently reserve within the many-to-many share. These reserved computers will be released simultaneously when you release the many-to-many share.
    
    **Status of Min. Cloud Computers**
    
    The status of the initial batch of cloud computers within the many-to-many share. By default, they are in the Running state. When cloud computers are running, you are charged for computing and storage resources. To lower expenses, you can set this parameter to Stopped. When cloud computers are in the Stopped state, you are not charged for computing resources. Only the storage resources used during this period are billed.
    
    ****Max. Cloud Computers****
    
    The upper limit for the number of cloud computers that can be created within the many-to-many share. EDS Enterprise dynamically creates cloud computers based on the number of connected users, but this number will never exceed the value specified by this parameter. You can specify up to 500 cloud computers.
    
    **Reserved Idle Cloud Computers**
    
    The number of cloud computers that are on standby within the many-to-many share. The default value is 0. If you enter a value greater than 0, EDS Enterprise will create a specified number of cloud computers in advance and set them to the Running state within the many-to-many share. This ensures the cloud computers are ready for immediate connection, reducing wait times for end users when they need to access them.
    
    **Note**
    
    If you keep the default setting, EDS Enterprise will create, start, and assign cloud computers only when end users request them. This approach results in a longer processing time. We recommend that set this parameter to a value greater than 0 to improve user experience.
    
5.  Confirm the settings and fee and click **Confirm Order**.
    
6.  On the **Create Share** page, confirm the information again and select **Product Terms of Service** next to **Service Agreement**. Then, click **Create Order**.
    
    -   If the selected billing method is pay-as-you-go, the creation process stops here.
        
    -   If you set the **Billing Method** parameter to **Subscription**, click **Subscribe** on the **Purchase** page and complete the payment as prompted.
        

## **Manage users**

If you do not add authorized end users while creating the many-to-many share, you can still manage them after the share has been created.

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Shared Cloud Computer**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Many-to-Many** tab of the **Share** page, find the desired may-to-many share, click the ⋮ icon in the **Actions** column, and then select **View/Add User**.
    
5.  In the **View/Add User** panel, perform one of the following operations as needed:
    
    -   Add authorized end users
        
        1.  Click **Add User**.
            
        2.  In the **Add User** dialog box, select one or more user accounts and click **OK**.
            
            You can filter users by organization, username, or email address.
            
            **Note**
            
            Take note that this process may take some time, and the list of added users will not update instantly.
            
    -   Remove authorized end users
        
        1.  In the **Added Users** section, select one or more user accounts that you want to remove and click **Remove** below the list.
            
            You can filter users by organization, username, or email address.
            
        2.  In the message that appears, review the warnings and click **OK**.
            
            **Note**
            
            Take note that this process may take some time, and the list of added users will not update instantly.
            

## Configure a session management policy

A session refers to a logical connection that is created when an end user accesses a cloud computer through an Alibaba Cloud Workspace terminal. This session remains active until the user disconnects from the cloud computer. The session management feature allows you to optimize cloud computer usage by configuring thresholds such as the maximum session duration, the duration a session is retained after disconnection, and the maximum idle time for a session.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9949004471/CAEQORiBgMC0ppa8sBkiIDQwZTA2NjJlMmJiZjQzYzRhNzIyMGE4Yjk0OWMzZDQ43963382_20230830144006.372.svg)

**Note**

The session management feature supports only Windows cloud computers running image version V0.0.8 or later and utilizing the Adaptive Streaming Protocol (ASP).

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Shared Cloud Computer**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Many-to-Many** tab of the **Share** page, click the ID of the desired many-to-many share.
    
5.  On the **Basic Information** tab of the many-to-many share details page, scroll down to the **Session Management** section and configure the following parameters as needed.
    
    **Parameter**
    
    **Description**
    
    **Max. Session Duration**
    
    The maximum allowed time for a session. Valid values: 15 to 5760. Unit: minutes.
    
    If end users are still connected to cloud computers within the last 5 minutes before the session duration ends, they will be prompted to save their data on the cloud computers to avoid data loss.
    
    Once the specified duration is reached, the session will be automatically disconnected.
    
    **Keep-active Duration**
    
    The time period during which a session stays active after being disconnected. Valid values: 3 to 5760. Unit: minutes.
    
    If sessions are disconnected for any reason, they will remain active for a set duration. If end users reconnect within this time period, they can access the original session data. However, if end users do not resume the sessions within the specified time period, any unsaved data will be erased, and the sessions will be terminated.
    
    **Important**
    
    You can also select **Always**, which keeps sessions active even after they are disconnected. However, this action could use up the session quota, potentially preventing new end users from connecting to cloud computers within the many-to-many share. Proceed with caution.
    
    **Max. Duration of Idle Session**
    
    The maximum amount of time a session can remain inactive before it is automatically disconnected. Valid values: 6 to 60. Default value: 15. Unit: minutes. When end users connect to cloud computers in a many-to-many sharing environment, sessions are established. If EDS Enterprise does not detect any keyboard or mouse activity on the cloud computers within a specified time period, the sessions will be disconnected. Valid values: 6 to 60. Default value: 15. Unit: minutes.
    
    However, if end users are still connected to the cloud computers 30 seconds before this time period expires, they will be prompted to save their data. In such cases, end users must save their data on the cloud computers to avoid potential data loss.
    
    **Note**
    
    This parameter applies only to cloud computers whose image version is V1.0.2 or later.
    

## Configure a reset or scheduled policy

You can configure the reset switch, define reset trigger conditions, specify the reset scope, and set up scheduled startup or shutdown policies for cloud computers within a many-to-many share.

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Shared Cloud Computer**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Many-to-Many** tab of the **Share** page, click the ID of the desired many-to-many share.
    
5.  On the **Basic Information** tab of the many-to-many share details page, scroll down to the **Share reset and scheduled startup/shutdown settings** section and configure the following parameters as needed.
    
    **Parameter**
    
    **Description**
    
    **Reset Type**
    
    The reset scope, including system disks and data disks.
    
    **Reset Time**
    
    The reset time option.
    
    -   Auto: automatically executes the reset task when cloud computers disconnect.
        
    -   Scheduled: automatically executes the reset task at a specific time. If you select this option, specify the desired time in the **Configure Scheduled Reset Time** panel.
        
    
    **Scheduled Start/Stop**
    
    The specific time points when cloud computers within the many-to-many share are set to start or stop. If you enable this feature, you will need to specify the exact time points in the **Scheduled Start/Stop Time** panel.
    
    **Important**
    
    When setting up scheduled stop and restart tasks, you must choose whether to forcibly stop or restart the cloud computers by setting the **Forcibly Stop/Restart Cloud Computer** parameter to **Yes** or **No**. If you select **Yes**, the cloud computers will be forcibly stopped or restarted, even if they are currently in use. In this case, end users will receive a prompt to save their data 5 minutes before the forced stop or restart. If the end users do not save their data, all unsaved information on the cloud computers will be lost.
    

## **Manage power options**

You can start, stop, or restart cloud computers within a many-to-many share just as you would with regular computers.

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Shared Cloud Computer**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Many-to-Many** tab of the **Share** page, find the desired many-to-many share and click **Running**,**Stop**, or **Restart** in the **Actions** column. Then, click **OK** in the confirmation message that appears.
    

## **Replace the image of a** **many-to-many share**

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Shared Cloud Computer**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Many-to-Many** tab of the **Share** page, find the desired many-to-many share, click the ⋮ icon in the **Actions** column, and then select **Change Image**.
    
5.  In the **Change Image** panel, replace the existing image of the current many-to-many share with a new one as prompted. For more information, see [Change images](/help/en/wuying-workspace/user-guide/change-the-images-of-cloud-computers-or-cloud-computer-pools).
    
    **Warning**
    
    After the image replacement, the software and private data stored on the system disks of the cloud computers within the many-to-many share will be permanently erased and cannot be recovered. Before proceeding with the image replacement, ensure that all data from the system disks of the cloud computers has backed up.
    

## **Configure user data roaming**

In a many-to-many share, cloud computers are not permanently assigned to specific end users. This means that authorized end users may connect to different cloud computers each time they access the many-to-many share. By default, data and personal settings on these cloud computers are automatically reset based on administrator configurations, so user-specific data is not saved.

To address this issue, we recommend that you enable user data roaming. When it is enabled, User Profile Management (UPM) saves the contents of the `C:\Users\<username>` directory to a File Storage NAS (NAS) located at `C:\Users` within the office network of the many-to-many share. This ensures that the user data follows end users across different cloud computers, maintaining a consistent user experience. Additionally, the data stored in the NAS directory is only accessible to the respective user, ensuring data security.

To enable and configure the user data roaming feature, perform the following steps:

1.  Perform one of the following operations as needed:
    
    -   To enable user data roaming for a new many-to-many share, select **Enable** in the **Data Roaming** section of the Create Share page.
        
    -   To enable user data roaming for an existing many-to-many share, find the desired many-to-many share on the **Many-to-Many** tab of the **Share** page, click its ID, and then turn on the **Data Roaming** switch in the **Basic Info** section of the **Basic Information** tab.
        
2.  Select an existing NAS file system or click **Create NAS File System** to create a file system as prompted.
    
    **Note**
    
    -   To create a NAS file system for a many-to-many share to implement user data roaming, you must activate Key Management Service (KMS). If you have not activated KMS, activate it on the **Create NAS File System** panel as prompted.
        
    -   Before enabling user data roaming, you must first initialize an NAS file system. This initialization process takes some time, and you must ensure that the Data Roaming switch remains on throughout this period. Once the NAS file system is initialized, the user data roaming feature will be ready for use.
        
    -   For more information about NAS file systems, see [General-purpose NAS file systems](/help/en/nas/product-overview/general-purpose-nas-file-systems#concept-61136-zh).
        
    
3.  (Optional) To implement fine-grained control over the roaming scope, you can configure directory blacklist and whitelist settings. By default, roaming is supported for all data within the C:\\Users\\username directory.
    
    1.  Perform one of the following operations as needed:
        
        -   If you are creating a many-to-many share, click **UPM Blacklist and Whitelist** on the Create Share page.
            
        -   If you have created a many-to-many share, go to the share details page, create and mount a NAS file system, and then click **View/Configure Blacklist and Whitelist**.
            
    2.  In the **UPM Blacklist and Whitelist** panel, click **Add to Blacklist**. In the dialog box that appears, add level-1 directories.
        
        Level-1 directories are the parent directories that contain the files or folders you want to exclude from the roaming scope.
        
    3.  (Optional) Click **Add Level-2 Whitelist** in the **Actions** column of a level-1 directory.
        
        Level-2 directories are the parent directories that contain the files or folders you want to include in the roaming scope. Once the UPM blacklist and whitelist policy is configured, only the level-2 whitelist directory within the level-1 blacklist directory will participate in data roaming. All other data will be excluded from the roaming process.
        

**Note**

For more information about how to delete the user directory and data of an end user in a NAS file system or authorize an end user to access the data in the `C:\Users` NAS directory, see [Manage NAS file systems](/help/en/wuying-workspace/user-guide/manage-nas-file-systems).

## **Delete a** **many-to-many share**

You can delete any many-to-many shares that are no longer needed. Before doing so, ensure the following conditions are met:

-   No end users are currently connected to the cloud computers in the many-to-many share you want to delete. For information about how to revoke permissions from authorized end users on many-to-many shares, see [Manage authorized users](/help/en/wuying-workspace/wuying-workspace-pro-edition/manage-end-users-that-have-permissions-on-a-cloud-computer-pool#task-2101738).
    
-   For subscription many-to-many shares, you must first unsubscribe from any cloud computers in the share that have not yet reached their expiration date before deleting the share. For information about how to unsubscribe from cloud computers, see [Refunds](/help/en/wuying-workspace/wuying-workspace-pro-edition/product-overview/refunds).
    

To delete a many-to-many share, perform the following steps:

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Shared Cloud Computer**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Many-to-Many** tab of the **Share** page, find the desired many-to-many share and click **Delete** in the **Actions** column. In the confirmation message that appears, click **OK**.
    
    **Warning**
    
    After you delete the many-to-many share, all data stored on the cloud computers within the share will be permanently deleted. To avoid data loss, please ensure you back up any important information before proceeding with the deletion.
    

## Other operations

After you create a many-to-many share, you can perform the following operations on the share details page:

-   View and modify basic information
    
    On the **Basic Information** tab, you can modify the name or associated policy of the share as needed. If the share is billed on the pay-as-you-go basis, you can modify the **Min. Cloud Computers**, **Status of Min. Cloud Computers**, **Max. Cloud Computers**, and other parameters as needed.
    
-   View user session details
    
    On the **Session Information** tab, you can view the username and contact details of the user in a session, and the session status. You can perform operations on the session, such as viewing user connection records and managing multiple-factor authentication (MFA) settings of end users that use AD accounts.
    
-   View cloud computer details
    
    On the **Cloud Computer Information** tab, you can filter cloud computers by creation time and status to view their basic properties. Additionally, you can perform various operations on these cloud computers, including starting, stopping, restarting, or resetting them, and changing their images.
    
-   Send remote commands to cloud computers
    
    The remote command feature enables you to send commands to multiple cloud computers within a many-to-many share. This allows you to perform routine O&M tasks without needing to directly connect to each cloud computer. If you want to send remote commands, click **Send Remote Commands** on the **Command Execution Details** tab and proceed as prompted. For more information, see [Send remote commands](/help/en/wuying-workspace/user-guide/send-remote-commands).
    
-   Renew cloud computers
    
    For more information, see [Renew a many-to-many share](/help/en/wuying-workspace/product-overview/subscription#sc-steps).
