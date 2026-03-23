Terminal policies are used to manage WUYING terminals, which include desktop clients, mobile clients, and hardware terminals. These policies control various terminal behaviors. For efficient and unified management, policies are applied to terminal groups rather than individual terminals. This lets you manage all terminals within a group at the same time. This topic describes how to manage terminal groups and policies.

## Create a terminal policy

**Note**

For all policy settings to take effect, ensure that the terminal is upgraded to the latest version and connected to the internet.

1.  Log on to the [Elastic Desktop Service (Enterprise) console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Terminals** > **Terminal Grouping and Policy**.
    
3.  On the **Terminal Groups and Policies** page, click the **Terminal Policies** tab and then click **Create Policy**.
    
4.  On the **Create Policy** page, configure the following items as needed and click **OK**.
    
    **Policy Item**
    
    **Description**
    
    **Supported Terminal Models**
    
    **Supported Terminal Versions**
    
    **Basic Information**
    
    Policy Name
    
    Enter a custom policy name. The name can be up to 30 characters long.
    
    Not applicable
    
    Not applicable
    
    **General Policy**
    
    **Note**
    
    The settings in the **Logon Entry Settings** section apply to both desktop clients and hardware terminals.
    
    **Logon Entry Settings**
    
    Enterprise Edition QR Code Logon
    
    If disabled, the QR code logon entry for the Enterprise Edition is hidden on the terminal.
    
    All models
    
    V7.8 and later
    
    Enterprise Edition Text Message Logon
    
    If disabled, the text message logon entry for the Enterprise Edition is hidden on the terminal.
    
    All models
    
    V7.8 and later
    
    **Auto-connect settings for a single cloud desktop**
    
    Auto-connect for a single cloud desktop
    
    -   End user-defined
        
    -   Administrator-configured
        
        **Note**
        
        After configuration, end users cannot edit this setting.
        
        When an end user logs on to the client, if the account has only one cloud desktop, the selected actions are automatically performed:
        
        -   **Running Cloud Desktop — Auto-connect**
            
        -   **Hibernated Cloud Desktop — Auto-wake And Connect**
            
        -   **Shutdown Cloud Desktop — Auto-start And Connect**
            
    -   Forcibly disabled by administrator
        
        **Note**
        
        After being disabled, end users cannot edit this setting.
        
    
    All models
    
    V8.0 and later
    
    **Desktop Client Policy**
    
    **Note**
    
    All the following settings apply only to desktop clients.
    
    Immersive Mode
    
    If disabled, all the following immersive mode settings do not take effect.
    
    **Note**
    
    -   Effective mechanism: After you enable or disable immersive mode in the policy, the setting takes effect after the end user logs off and then logs back on to the client, and then restarts the on-premises computer.
        
    -   Scope: If enabled at the organization ID level, it applies to all users in the current organization. If enabled at the terminal level, it applies to the specified client. The client-level setting has a higher priority than the user-level setting.
        
    -   Effect: Immersive mode modifies the local Windows registry information of the end user. In immersive mode, the end user cannot open some applications on the on-premises device, such as the local Task Manager and local browser.
        
    -   FAQ: If the setting does not take effect, it might be blocked by the local security software of the end user.
        
    
    Only WUYING Windows clients are supported.
    
    **Note**
    
    Use Windows client V7.10 or later.
    
    System Control Panel
    
    If disabled, the entry for the "System Control Panel" feature is hidden on the client and is not visible to the end user.
    
    **Note**
    
    The setting takes effect after the user logs on to the client account again.
    
    **Hardware Terminal Policy**
    
    **Note**
    
    All the following settings apply only to hardware terminals.
    
    **Hardware Terminal Mode**
    
    Terminal Mode
    
    PC Mode
    
    All models
    
    V7.5 and later
    
    Background Mode:
    
    -   A special mode provided by WUYING hardware terminals. It supports automatic connection when the cloud desktop is running and hides the cloud desktop management and interaction interface from the end user. This mode features stability, privacy, scalability, and O&M convenience. It is suitable for scenarios such as Robotic Process Automation (RPA) that require a clean IP address.
        
    -   After you enable background mode, the following option is available:
        
        Screen saver text: You can customize the screen saver text (2 to 25 characters, Chinese and English only).
        
    
    **Note**
    
    -   After you enable background mode, make sure not to trigger scheduled disconnection tasks for the cloud desktop or log off from the terminal.
        
    -   After you disable background mode, the change does not take effect immediately. It takes effect after the terminal is shut down or restarted.
        
    
    All models
    
    V7.5 and later
    
    Screen Casting Mode:
    
    -   When enabled, the terminal acts only as a screen casting receiver.
        
        **Note**
        
        In screen casting mode, the screen lock and manual screen lock features must be disabled. Otherwise, screen casting is unavailable.
        
    -   The sender can click **Screen Casting** in the floating ball menu of the WUYING Workspace and enter the screen casting code displayed on the terminal.
        
        **Note**
        
        Make sure the administrator has enabled the **Cloud Desktop Floating Ball Management** > **Screen Casting** item in the cloud desktop policy.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4040229571/p1013680.png)
        
    -   After you enable screen casting mode, the following options are available:
        
        -   Screen casting text: The default text is the **Terminal Alias**. You can edit it in the hardware terminal list.
            
        -   Screen casting wallpaper
            
            -   Default wallpaper
                
            -   Custom wallpaper: Upload a custom wallpaper from your on-premises device.
                
                **Note**
                
                -   Supported formats: .jpg, .png
                    
                -   Supported dimensions: 1320 × 1080 px
                    
                -   Supported size: ≤ 10 MB
                    
                -   Maximum number of images: 3. The images can be displayed in a carousel.
                    
                
    
    WUYING Magic Cube
    
    V7.7.5 and later
    
    **Bluetooth/Wi-Fi**
    
    Bluetooth
    
    Options:
    
    -   End user-defined
        
    -   Forcibly disabled by administrator
        
        **Important**
        
        Disabling this feature may affect normal use for the end user. Proceed with caution.
        
    
    All models
    
    V6.8 and later
    
    Wi-Fi
    
    Options:
    
    -   End user-defined
        
    -   Administrator-configured (Prioritize connection to a specified Wi-Fi network)
        
        **Note**
        
        -   This feature is in invitational preview. To use this feature, submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373).
            
        -   After this feature is enabled, you can still manually switch to other Wi-Fi networks. However, the configuration is re-enabled every time the hardware terminal restarts or starts.
            
        
    -   Forcibly disabled by administrator
        
        **Important**
        
        Disabling this feature may affect normal use for the end user. Proceed with caution.
        
    
    All models
    
    V6.8 and later
    
    **Screen Display**
    
    Resolution
    
    Options:
    
    -   End user-defined
        
    -   Administrator-controlled
        
    
    All models
    
    V7.0 and later
    
    Resolution Settings
    
    If **Resolution** is set to **Administrator-controlled**, this item is displayed. It specifies the screen resolution of the hardware terminal. If the resolution set here exceeds the actual maximum resolution of the terminal, the latter prevails.
    
    All models
    
    V7.0 and later
    
    Scaling Ratio
    
    Options:
    
    -   End user-defined
        
    -   Administrator-controlled
        
    
    Scaling Ratio Settings
    
    If **Scaling Ratio** is set to **Administrator-controlled**, this item is displayed. It specifies the UI scaling ratio for the hardware terminal.
    
    **Note**
    
    This item sets the scaling ratio for the hardware terminal screen. The cloud desktop scaling ratio inherits this setting by default. However, you can also set a custom scaling ratio for the cloud desktop. The custom scaling ratio has a higher priority than the one set in the hardware terminal policy.
    
    All models
    
    V7.0 and later
    
    Extended Screen Mode
    
    Options:
    
    -   End user-defined
        
    -   Administrator-controlled
        
    
    WUYING Magic Cube Pro/WUYING Ark Pro
    
    V7.0 and later
    
    Extended Screen Mode Settings
    
    If **Extended Screen Mode** is set to **Administrator-controlled**, this item is displayed. It specifies the display mode for the second screen when a hardware terminal is connected to it. Modes include **Mirror Mode** and **Extended Mode**.
    
    WUYING Magic Cube Pro/WUYING Ark Pro
    
    V7.0 and later
    
    **Volume Settings**
    
    Synchronized output volume between terminal and cloud
    
    -   End user-defined
        
    -   Administrator-controlled
        
        -   If enabled, the output volume of the cloud desktop and the on-premises device are always synchronized.
            
        -   If disabled, the output volumes of the cloud desktop and the on-premises device must be set independently. The final volume is the combined result of both.
            
    
    All models
    
    V8.0 and later
    
    **Screen Lock Management**
    
    Screen Lock Settings
    
    -   If disabled, you cannot set an automatic screen lock or a screen lock password, or trigger the manual screen lock feature in **System Settings** > **Screen Lock Settings**.
        
    -   If enabled, the end user must set a screen lock password to use the auto-lock when idle feature.
        
    
    **Note**
    
    If screen casting mode is enabled, you cannot enable this option. Disable screen casting mode and then enable it.
    
    All models
    
    V6.8 and later
    
    Manual Screen Lock
    
    -   If disabled, the terminal does not respond to any screen lock operations.
        
    -   If enabled, the terminal can still respond to actions such as closing the lid, using a keyboard shortcut, or short-pressing the power button to lock the screen for protection. No password is required to unlock.
        
    
    **Note**
    
    If screen casting mode is enabled, you cannot enable this option. Disable screen casting mode and then enable it.
    
    Unlock Method
    
    Options:
    
    -   Unlock with PIN:
        
        This is a device-level lock. Each device has only one PIN.
        
    -   Unlock with the password of a convenience account or AD account:
        
        **Note**
        
        This feature is in invitational preview. To use this feature, submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373).
        
        -   The screen can be locked only when logged on. The screen lock operation cannot be performed in a logged-off state.
            
        -   Automatic logon is disabled, and PIN and fingerprint ID are also automatically disabled.
            
        -   Do not select this method for SSO accounts or password-free logon. Otherwise, a logical conflict occurs and the screen lock feature is unavailable.
            
    
    V7.12 and later
    
    Force users to set a PIN
    
    If enabled, end users must set a PIN before they can continue to use the terminal.
    
    Auto-lock when idle
    
    Options:
    
    -   End user-defined
        
    -   Administrator-controlled
        
    
    If you select **Administrator-controlled**, you must select **Never Lock** or a specific idle duration. When there is no keyboard or mouse activity for the specified duration, the hardware terminal automatically locks. After the screen is automatically locked, the end user still needs to set the screen lock password.
    
    All models
    
    -   End user-defined: V6.8 and later
        
    -   Administrator-controlled: V7.7 and later
        
    
    **Power Management**
    
    Idle Timeout Power Policy
    
    Options:
    
    -   End user-defined
        
    -   Administrator-controlled
        
    
    All models
    
    V6.8 and later
    
    Idle Timeout Power Configuration
    
    This item is displayed if **Idle Timeout Power Policy** is set to **Administrator-controlled**. If you select **Disable**, no power management action is performed regardless of how long the terminal is idle.
    
    All models
    
    V6.8 and later
    
    If idle time exceeds
    
    This item is displayed if the **Idle Timeout Power Configuration** switch is turned on. It specifies the continuous duration of no keyboard or mouse activity on the hardware terminal.
    
    **Important**
    
    This setting also takes effect if there is no keyboard or mouse activity for a long time while connected to a cloud desktop. Configure with caution.
    
    All models
    
    V6.8 and later
    
    Then automatically perform power action
    
    This item is displayed if the **Idle Timeout Power Configuration** switch is turned on. It specifies the power action to be performed when the idle duration limit is reached. It can be set to **Hibernation** or **Shutdown**.
    
    All models
    
    V6.8 and later
    
    Scheduled Shutdown Policy
    
    Options:
    
    -   End user-defined
        
    -   Administrator-controlled
        
    
    All models
    
    V6.8 and later
    
    Scheduled Shutdown Time
    
    This item is displayed if **Scheduled Shutdown Policy** is set to **Administrator-controlled**. It specifies the time for the scheduled shutdown of the terminal.
    
    **Note**
    
    The scheduled shutdown time and scheduled restart time must be at least 10 minutes apart.
    
    All models
    
    V6.8 and later
    
    Scheduled Restart Policy
    
    Options:
    
    -   End user-defined
        
    -   Administrator-controlled
        
    
    All models
    
    V6.8 and later
    
    Scheduled Restart Time
    
    This item is displayed if **Scheduled Restart Policy** is set to **Administrator-controlled**. It specifies the time for the scheduled restart of the terminal.
    
    **Note**
    
    The scheduled restart time and scheduled shutdown time must be at least 10 minutes apart.
    
    All models
    
    V6.8 and later
    
    Synchronized action for cloud desktop shutdown
    
    Options:
    
    -   End user-defined
        
    -   Administrator-controlled: Select the action to be automatically performed when the end user shuts down the cloud desktop from the floating ball menu, the cloud desktop card, or the power options within the cloud desktop's operating system.
        
        -   Shut down only the cloud desktop
            
        -   Shut down both the cloud desktop and the WUYING hardware terminal
            
    
    All models
    
    V7.7 or later
    
    Synchronized action for cloud desktop restart
    
    Options:
    
    -   End user-defined
        
    -   Administrator-controlled: Select the action to be automatically performed when the end user restarts the cloud desktop from the floating ball menu, the cloud desktop card, or the power options within the cloud desktop's operating system.
        
        -   Restart only the cloud desktop
            
        -   Restart both the cloud desktop and the WUYING hardware terminal
            
    
    All models
    
    V7.7 or later
    
    **Custom Hardware Operation Behavior**
    
    Synchronized action for hardware terminal shutdown
    
    Options:
    
    -   End user-defined
        
    -   Administrator-controlled: Select the action to be automatically performed when the end user presses the power button on the terminal or clicks Shutdown in the system power options.
        
        -   Shut down only the terminal device
            
        -   Shut down both the terminal device and all cloud desktops
            
    
    **Note**
    
    This takes effect only when all the following conditions are met:
    
    -   The administrator has enabled the synchronized power action.
        
    -   The terminal device is logged on and not locked.
        
    -   The cloud desktop is in one of the following states:
        
        -   In use
            
        -   Running
            
        -   Hibernation
            
    
    All models
    
    V7.10 and later
    
    Synchronized action for hardware terminal restart
    
    Options:
    
    -   End user-defined
        
    -   Administrator-controlled: Select the action to be automatically performed when the end user presses the power button on the terminal or clicks Shutdown in the system power options.
        
        -   Restart only the terminal device
            
        -   Restart both the terminal device and all cloud desktops
            
    
    **Note**
    
    This takes effect only when all the following conditions are met:
    
    -   The administrator has enabled the synchronized power action.
        
    -   The terminal device is logged on and not locked.
        
    -   The cloud desktop is in one of the following states:
        
        -   In use
            
        -   Running
            
    
    All models
    
    V7.10 and later
    
    Startup method after power is connected
    
    Options:
    
    -   End user-defined
        
    -   Administrator-controlled
        
    
    WUYING Magic Cube
    
    V6.8 and later
    
    Startup Method Settings
    
    This item is displayed if **Startup Method After Power Is Connected** is set to **Administrator-controlled**. It specifies the system startup policy for the hardware terminal after it is connected to power. You can select **Wait For Startup** or **Auto-startup**.
    
    WUYING Magic Cube
    
    V6.8 and later
    
    Define short-press behavior for power button
    
    The behavior when the power button is short-pressed.
    
    **Note**
    
    A long press of the power button shuts down the terminal. This setting cannot be changed.
    
    Box-style cloud computer terminal/WUYING Magic Cube/WUYING Magic Cube Pro/WUYING Ark Pro
    
    V6.8 and later
    
    WUYING Magic Cube series products
    
    Options:
    
    -   End user-defined
        
    -   Administrator-controlled
        
    
    Box-style cloud computer terminal/WUYING Magic Cube/WUYING Magic Cube Pro
    
    V6.8 and later
    
    Short-press behavior settings for power button
    
    This item is displayed if **WUYING Magic Cube Series Products** is set to **Administrator-controlled**. It specifies the behavior when the power button is short-pressed. Options include **Hibernation**, **Lock Screen**, or **Shutdown**.
    
    Box-style cloud computer terminal/WUYING Magic Cube/WUYING Magic Cube Pro
    
    V6.8 and later
    
    WUYING Laptop
    
    Options:
    
    -   End user-defined
        
    -   Administrator-controlled
        
    
    WUYING Ark Pro
    
    V6.8 and later
    
    Short-press behavior settings for power button
    
    This item is displayed if **WUYING Laptop** is set to **Administrator-controlled**. It specifies the behavior when the power button is short-pressed. Options include **Hibernation**, **Lock Screen**, or **Shutdown**.
    
    WUYING Ark Pro /WUYING Ark
    
    V6.8 and later
    
    Keyboard Shortcut Settings
    
    Options:
    
    -   Set the `win+L` keyboard shortcut to **Respond To The Screen Lock Operation**.
        
    -   Set the `win+L` keyboard shortcut to **Respond To The Logoff Operation**. This configuration conflicts with the screen lock feature. We recommend disabling the screen lock feature at the same time. After you enable **Respond To The Logoff Operation**, select **Disable Screen Lock Feature And Manual Screen Lock** in the dialog box and click OK.
        
        **Note**
        
        This configuration does not take effect in password-free logon mode.
        
    
    WUYING Magic Cube
    
    V7.12 and later
    
    **Lock Terminal System Settings**
    
    Lock Terminal System Settings
    
    Controls whether to lock the Settings page of the terminal.
    
    **Note**
    
    Settings that are forcibly controlled by the administrator can never be modified by the end user and are not affected by this setting.
    
    Disabled by default. This means the end user can directly modify policies that are configured for user definition. If enabled, the end user must enter the management password that you set in the console to access the terminal's Settings page for configuration. For information about how to set the management password, see [Set a management password for the root group](#sc-set-settings-passcode).
    
    All models
    
    V7.5 and later
    

## **Manage terminal groups**

You can move specific terminals into custom groups for unified and efficient management. For example, instead of applying policies to individual terminals, you can apply a policy to a group, and it will automatically apply to all terminals within that group.

### **Create a custom group**

The system automatically creates a default root group (Group ID: `tg-default`). You can create custom groups under the root group.

1.  Log on to the [Elastic Desktop Service (Enterprise) console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Terminals** > **Terminal Grouping and Policy**.
    
3.  On the **Terminal Groups and Policies** page, click the **Terminal Groups** tab and then click **Create Group**.
    
4.  In the **Create Group** panel, enter a group name, select a parent group, and select a group policy. You can choose to inherit the policy from the parent group or bind a custom policy. Then, click **OK**.
    

In the terminal group tree on the left, click the ⋮ icon next to a custom group to perform operations such as **Rename**, **Change Policy**, and **Delete Group**.

### **Move a terminal to another group**

By default, terminals belong to the default root group. You can move terminals to a custom group.

#### **Software clients**

1.  Log on to the [Elastic Desktop Service (Enterprise) console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Terminals** > **Desktop & Mobile Clients**.
    
3.  On the **Desktop and Mobile Clients** page, perform one of the following operations as needed:
    
    -   Single operation: Find the target client and click **Move Group** in the **Actions** column.
        
    -   Batch operation: Select multiple target clients and click **Move Group** at the bottom of the list.
        
4.  In the **Move Group** dialog box, select the destination group and click **OK**.
    
    **Note**
    
    After a software client is moved to a new group, the policy of the new group applies to the client, and the policy of the previous group no longer applies.
    

### **Change the terminal policy for a group**

By default, all managed terminals belong to the root group and use the default system policy associated with that group. You can change the policy for the root group or any custom group.

1.  Log on to the [Elastic Desktop Service (Enterprise) console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Terminals** > **Terminal Grouping and Policy**.
    
3.  On the **Terminal Groups and Policies** page, on the **Terminal Groups** tab, find the target group, and click **Change Policy** in the **Actions** column (or click the ⋮ icon in the **Actions** column, and select **Change Policy**).
    
4.  In the **Change Policy** panel, select the new policy and click **OK**.
    
    **Note**
    
    -   When you change the policy, you can select **Inherit Policy From Parent Group** or **Custom Group Policy**.
        
    -   The policy change takes effect only for the current group and its child groups that inherit the policy.
        
    -   The policy takes effect after the terminal connects to the internet. Some policies require a terminal restart to take effect.
        
    

### **Configure password-free logon for a level-1 group**

**Note**

This feature is in invitational preview. To use it, submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373) to request access.

1.  Log on to the [Elastic Desktop Service (Enterprise) console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Terminals** > **Terminal Grouping and Policy**.
    
3.  On the **Endpoint Groups** tab of the **Endpoint Groups and Policies** page, find the target top-level group, and in the **Actions** column, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4040229571/p1012966.png) and select **Passwordless Logon Settings**.
    
    **Note**
    
    If you change the password-free logon method (for example, by switching between a password-free organization ID and a password-free workspace ID, or by switching from Workspace A to Workspace B), all active terminal sessions are automatically logged off to apply the new configuration. Proceed with caution.
    
    1.  Bypass Organization ID Entry
        
        If you select this option, users who log on to hardware terminals in the current group or its child groups do not need to enter an organization ID. The ID is automatically pre-filled and cannot be modified, so the step is skipped. Users only need to enter their password to log on.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4040229571/p1013441.png)
        
    2.  Password-free Workspace ID
        
        If you select this option, users who log on to hardware terminals in the current group or its child groups do not need to enter a workspace ID. The ID is automatically pre-filled and cannot be modified, so the step is skipped. Users only need to enter their password to log on.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4040229571/p1013504.png)
        

## Set a management password for the root group

If you enabled the Lock Terminal System Settings option in a terminal policy, end users must enter a management password to access the terminal's Settings page. Follow these steps to set the management password.

1.  Log on to the [Elastic Desktop Service (Enterprise) console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Terminals** > **Terminal Grouping and Policy**.
    
3.  On the **Terminal Groups and Policies** page, on the **Terminal Groups** tab, find the root group, and click **Set Management Password** in the **Actions** column.
    
4.  In the **Set Management Password** dialog box, set a password that meets the requirements and click **OK**.
