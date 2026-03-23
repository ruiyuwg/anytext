The WUYING Workspace desktop client is designed for desktop environments. It includes the Windows client and the macOS client. You can use the client to connect to and use WUYING Workspace.

**Important**

This topic uses the macOS client V7.13 and the Enterprise Edition as an example. If your experience differs from the description in this topic, you may be using a different client or an outdated version. Upgrade to the latest version.

## Get to know the client interface

#### Logon interface 1

![101_signin_page1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7920493371/p809998.png)

1.  Select the client edition. You can switch between **Enterprise Edition & Business Edition** and **Individual Edition**.
    
2.  Enter your organization ID or workspace ID.
    
3.  Switch the logon method.
    
4.  Access more settings:
    
    -   Connection Type: The default is Internet access, which meets most needs. You can switch to a private network connection based on the administrator's configuration.
        
    -   Logon Guide: Guides you to select the appropriate client edition.
        
    -   Settings: Opens the Settings window to adjust general settings and more.
        
    -   Help: Opens the online help documentation.
        
    -   About: View the current version and check for updates.
        

1.  Enter your username.
    
2.  Enter your password.
    
3.  If you enable automatic logon, you do not need to re-enter your credentials for a period of time after a successful logon.
    
4.  If your initial password has expired or you have forgotten your custom password, click **Forgot Password** and follow the on-screen instructions to get a new initial password.
    

#### Logon interface 2

![101_signin_page2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7920493371/p810012.png)

#### Cloud resource list interface

![101_resource_list.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7920493371/p810017.png)

1.  Cloud resource card. You can perform common management operations on the card. For example, on a cloud computer card, you can start, stop, restart, or update the cloud computer.
    
2.  Log off.
    
3.  Search for cloud computers. Fuzzy search is supported.
    
4.  Refresh the cloud resource list.
    
5.  Notification Center. You can view various event messages.
    
6.  Personal Center. You can view account information, access settings, and submit product suggestions.
    

The Personal Center provides access to multiple feature modules, such as Account Information, Settings, and Product Suggestions.

#### **Personal Center**

![101_profile.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7920493371/p810026.png)

#### **Notification Center**

![101_message_center.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7920493371/p810027.png)

The Notification Center contains three types of event messages: Campaigns, Management Messages, and System Messages.

## Management capabilities of the Enterprise Edition desktop client

WUYING Workspace Enterprise Edition supports terminal management. An Enterprise Edition administrator can register an employee's desktop client to the organization. After registration, the administrator can use terminal policies to manage the client's user experience and mode. Enterprise Edition administrators can also group managed clients and attach different terminal policies to different groups as needed.

**Policy Item**

**Description**

**Supported Types**

**Supported Versions**

**Logon entry settings**

Personal Edition logon

Enabled by default. If disabled, the Personal Edition logon entry is hidden on the desktop client.

Windows client

macOS client

V7.8 and later

Enterprise Edition QR code logon

Enabled by default. If disabled, the Enterprise Edition QR code logon entry is hidden on the desktop client.

Windows client

macOS client

V7.8 and later

Enterprise Edition text message logon

Enabled by default. If disabled, the Enterprise Edition text message logon entry is hidden on the desktop client.

Windows client

macOS client

V7.8 and later

**Immersive mode settings**

Immersive mode

Disabled by default. If enabled, only the client interface is visible on the on-premises device that runs the Windows client. This provides end users with an immersive cloud computer experience and eliminates distractions from the on-premises device.

**Note**

This feature is in invitational preview. To use it, ask your Enterprise Edition administrator to submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373) to request access.

-   Effective mechanism: After an Enterprise Edition administrator enables or disables immersive mode in a policy, log off and then log on to the client again. Then, restart your on-premises computer for the setting to take effect.
    
-   Scope: If enabled at the organization ID dimension, it applies to all users in the current organization. If enabled at the terminal dimension, it applies to the specified client. The client dimension has a higher priority than the user dimension.
    
-   Effects: Immersive mode modifies your local Windows registry information. In immersive mode, you cannot open some applications on your on-premises device, such as the local Task Manager and local browsers.
    
-   FAQ: If the setting does not take effect, it may be blocked by your local security software.
    

Windows client

V7.10 and later

System Control Panel

This configuration item is visible after **Immersive Mode** is enabled.

Disabled by default. When disabled, the client hides the **System** control entry.

**Note**

You must log on to the client account again for the setting to take effect.

Windows client

V7.10 and later

## References

For more information about how Enterprise Edition administrators can create terminal policies, see [Manage terminal groups and policies](/help/en/wuying-workspace/user-guide/manage-terminal-groups-and-policies).
