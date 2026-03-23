After end users install WUYING software clients, register the clients with your organization to enforce terminal policies, control logon access, and push mandatory upgrades.

## Platform support

WUYING software clients include desktop clients (Windows and macOS) and mobile clients (Android and iOS).

**Client type**

**Platforms**

**Minimum version**

Desktop client

Windows, macOS

7.8

Mobile client

Android, iOS

7.7

Not all features are available on every platform.

**Feature**

**Windows**

**macOS**

**Android**

**iOS**

Register with invitation code

Yes

Yes

Yes

Yes

Register by UUID (manual or bulk import)

Yes

Yes

Yes

Yes

Password-free logon

No

No

Yes

No

Mandatory upgrade

Yes

Yes

Yes

No

## Prerequisites

Before you begin, make sure that you have:

-   An Alibaba Cloud account with access to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/)
    
-   Desktop client version 7.8 or later, or mobile client version 7.7 or later, installed on end user devices
    
-   (Optional) Custom terminal groups and policies configured. A default root group and policy are provided. To create custom groups and policies, see [Manage terminal groups and policies](/help/en/wuying-workspace/user-guide/manage-terminal-groups-and-policies)
    

## View client details

After an end user logs on to a WUYING software client with your organization ID, the client appears in the console.

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Terminals** > **Desktop & Mobile Clients**.
    
3.  On the **Desktop & Mobile Clients** page, view the registered client list. The left side shows the **Terminal Group** tree, and the right side shows the client list with details such as UUID, Client Type, and Last Logon User.
    

**Note**

For mobile clients, to prevent accidental management, we recommend that you manage them using an invitation code.

To delete a client from this list, click **Delete** in the **Actions** column, then click **Confirm**.

## Register clients

Register a client to place it under your organization's control. After registration, the client:

-   Allows only accounts under the current organization ID to log on
    
-   Automatically applies the terminal policies attached to its group
    

Choose one of the following registration methods.

### Register with an invitation code

Use invitation codes to register both desktop and mobile clients. This is the recommended method for mobile clients.

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Terminals** > **Desktop & Mobile Clients**.
    
3.  In the **Terminal Group** section on the left, click the ... icon next to the target group and choose **Generate Invitation Code**.
    
4.  In the **Generate Invitation Code** dialog box, set the validity period and click **Generate Invitation Code**.
    
5.  In the **Invitation Code** dialog box, copy the auto-generated 6-digit invitation code and share it with end users.
    
6.  Ask end users to complete registration on their client.
    
    -   **Desktop client:**
        
        1.  Open the **Settings** window. Under **General** > **Terminal Registration**, click **Register**.
            
        2.  Enter the 6-digit invitation code and click **Next**.
            
        3.  In the **Your administrator invites you to join the client control** dialog box, click **Accept**.
            
    -   **Mobile client:**
        
        1.  In the WUYING Workspace app, tap **Me** > **Settings**. Under **General** > **Registration**, tap **Terminal Registration**.
            
        2.  Enter the 6-digit invitation code and tap **Yes**.
            
        3.  In the **Registration Invitation** dialog box, tap **Accept**.
            

### Register by entering UUIDs

Add clients manually by UUID or import multiple clients from an XLSX file.

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Terminals** > **Desktop & Mobile Clients**.
    
3.  Get the UUID of each client through one of these methods:
    
    -   Ask the end user to open the **About** window on the desktop client and provide the **Unique Device Identifier (UUID)** at the bottom of the window.
        
4.  On the **Desktop & Mobile Clients** page, click **Add Client**.
    
5.  In the **Add Client** panel, add clients using one of the following methods.
    
    #### **Add a single client**
    
    1.  Click the **Manually Add** tab.
        
    2.  Enter the Terminal UUID, Terminal Alias, and Terminal Group, then click **Confirm**.
        
    
    #### **Add multiple clients from an XLSX file**
    
    1.  Click the **Bulk Add** tab.
        
    2.  Prepare an XLSX file with client information. Either:
        
        -   Click **Download Template**, fill in the template, and save the file.
            
        -   Create an XLSX file in a spreadsheet application with the following columns:
            
            **Column**
            
            **Field**
            
            **Required**
            
            1
            
            Terminal UUID
            
            Yes
            
            2
            
            Group ID
            
            Yes
            
            3
            
            Terminal Alias
            
            No
            
    3.  Drag the file to the upload area, or click the upload area to select the XLSX file.
        
    
    The system imports the client information. After the import completes, review the import status for each client. If an import fails, verify that the data format matches the template.
    

## Manage registered clients

After clients are registered, search, organize, and configure them from the **Desktop & Mobile Clients** page.

### Search for clients

Search by Terminal UUID, terminal alias, IP, or last logged-on user. Fuzzy search is supported.

### Set a client alias

Assign a custom name to a client:

-   In the **Terminal Alias** column, click the edit icon, enter a name, and click **OK**.
    
-   Click the UUID of a client to open the details page, then edit the alias.
    

### Export client information

Select one or more clients, then click the export icon in the upper-right corner of the list. The system downloads a workbook with the details of the selected clients.

### Move a client to a different group

Click **Move** in the **Actions** column for the target client. In the dialog box, select a new group.

### Unregister a client

Click **Cancel Management** in the **Actions** column, then click **Confirm**.

**Important**

Unregistration takes effect after the client connects to the network. The client is forced to restart, which may disrupt the end user's work. Proceed with caution.

### Configure password-free logon

**Note**

Password-free logon is supported only on Android clients.

1.  Click **Configure Password-Free Logon** in the **Actions** column for the target client.
    
2.  Select the target users and click **Confirm**.
    

After password-free logon is enabled, the mobile client logs on directly without a password. The logoff button is hidden on the client. To allow the end user to log off, disable password-free logon first.

## Configure mandatory client upgrades

Require desktop clients and Android clients to upgrade to the latest version before logging on. This ensures that end users can use all features of their cloud computers and that their data is secure.

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Terminals** > **Desktop & Mobile Clients**.
    
3.  In the upper-right corner, click **Configure Terminal Update**.
    
4.  On the **Software Clients** tab of the **Terminal Upgrade** page, configure the following settings:
    
    -   **Push Version Updates**: Turn this switch on to push version update notifications to clients.
        
    -   **Forcible Update**: Turn this switch on to require clients to upgrade before logging on.
        

When **Forcible Update** is enabled, WUYING Workspace pushes mandatory upgrade tasks to all desktop clients and Android clients under your Alibaba Cloud account. End users must complete the upgrade before they can log on.

## Next steps

To restrict end users to log on only from specific software clients, add logon-restricted clients to user accounts. For more information, see [Add logon-restricted clients for a convenience account](/help/en/wuying-workspace/user-guide/manage-convenience-users-1#sc-associate-terminal).
