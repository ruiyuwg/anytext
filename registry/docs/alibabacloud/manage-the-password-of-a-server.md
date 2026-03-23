After you create a Simple Application Server, you can set or reset its logon password. This is useful if you need to set an initial password or if you have forgotten the current one. You can reset the password either online (without a restart) or offline (requires a restart).

## Prerequisites

The prerequisites depend on which password reset method you plan to use:

-   **Offline (requires restart)**: The server must be in the **Running** or **Stopped** state.
    
-   **Online (no restart)**: All of the following conditions must be met:
    
    -   The server must be in the **Running** state.
        
    -   **Command Assistant** must be in the **Running** state.
        
    -   The **Command Assistant** version must meet the following requirements:
        
        -   Linux servers: version 2.2.3.398 or later
            
        -   Windows servers: version 2.1.3.398 or later
            

## Limits

The offline password reset feature can only set or reset the password for the server administrator account in the Simple Application Server console.

-   The administrator account for Linux servers is `root`.
    
-   The administrator account for Windows servers is `administrator`.
    

## Procedure

1.  Go to the [Servers page](https://swas.console.alibabacloud.com/servers/) in the Simple Application Server console.
    
2.  On the card of the server whose password you want to set, click **Set Password**.
    
3.  In the **Reset Password** dialog box, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Logon Name**
    
    This field cannot be changed. The value is `root` for Linux servers and `administrator` for Windows servers.
    
    **New Password**
    
    Enter a new password. The password must meet the following requirements:
    
    -   Length: 8 to 30 characters.
        
    -   Complexity: Contains at least three of the following character types: lowercase letters (a to z), uppercase letters (A to Z), digits (0 to 9), and special characters.
        
    -   Supported special characters: `( )` ~ ! @ # $ % ^ & \* - \_ + = | { } \[ \] : ; ' < > , . ? /\`
        
    
    **Important**
    
    -   For Windows servers, the logon password cannot start with a forward slash (`/`).
        
    -   Use a sufficiently complex password and change it regularly to reduce the risk of brute-force attacks.
        
    
    **Enter Password Again**
    
    Re-enter the new password for confirmation.
    
    **Ways to set password**
    
    Select a method:
    
    -   **No restart needed to enable the password**: Takes effect immediately without a server restart. Requires Command Assistant to be running.
        
    -   **Restart the server to enable the new password**: Takes effect after you restart the server.
        
    
4.  Click **Confirm Settings**.
    
5.  In the **Set Password** dialog box, take the appropriate action based on the method you selected:
    
    -   **Online (no restart)**: If the message **Password set successful** appears, the password has been updated. You can click **Log on Now** to connect to the server.
        
    -   **Offline (requires restart)**: Choose whether to restart the server now or later.
        
        -   To restart immediately, click **Immediately Restarting an Instance**. The new password takes effect after the server restarts.
            
            **Warning**
            
            The restart operation stops the instance for a short period of time and may interrupt services that are running on the instance. We recommend that you restart the instance during off-peak hours.
            
        -   To restart later, click **Not Restart**. You can restart the server during off-peak hours to apply the new password.
            

## FAQ

### Why am I unable to log on after changing the password online?

If third-party antivirus software is installed on your server, it may block the online password change operation, which causes the password change to fail. In this case, use the offline method (restart required) instead, or call the [UpdateInstanceAttribute](/help/en/simple-application-server/developer-reference/api-swas-open-2020-06-01-updateinstanceattribute) API operation to reset the password. Then restart the server and log on with the new password.

### Why was my logon password changed automatically?

Your logon password may have been changed automatically because of malicious scripts or mining programs on the server. Go to the [Security Center console](https://yundun.console.aliyun.com/) to investigate and resolve the issue.

For more information, see [FAQ](/help/en/simple-application-server/user-guide/faq-about-remote-connection) about remote connection.

## References

To improve server security, we recommend that you use an SSH key pair to log on to a Linux server instead of a password. For more information, see [Manage key pairs (Linux)](/help/en/simple-application-server/user-guide/manage-key-pairs-linux).
