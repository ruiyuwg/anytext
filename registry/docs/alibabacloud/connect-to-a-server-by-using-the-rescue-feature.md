The rescue feature provides browser-based Virtual Network Computing (VNC) access to your Simple Application Server. Use it to diagnose and fix issues that prevent Workbench or third-party tools such as PuTTY, Xshell, or SecureCRT from connecting.

**Limitation**

**Detail**

File transfer

Not supported over rescue connections

Low-bandwidth networks

Latency, stuttering, or image quality degradation may occur

Session timeout

About 300 seconds of inactivity; the connection closes automatically

For routine access, connect through Workbench or a third-party client. For more information, see [Connect to a Linux server](/help/en/simple-application-server/user-guide/connect-to-linux-server-remotely) and [Connect to a Windows server](/help/en/simple-application-server/user-guide/connect-to-windows-server-remotely).

## When to use the rescue feature

-   **Troubleshooting** -- Connect through VNC when high vCPU utilization or SSH configuration changes block Workbench and third-party tool access.
    
-   **GUI logon** -- After building a GUI on a server running an operating system such as Ubuntu, connect through VNC to use the graphical desktop.
    

## Prerequisites

Before you begin, ensure that you have:

-   Configured a password for the server. For more information, see [Set or reset server passwords](/help/en/simple-application-server/user-guide/manage-the-password-of-a-server)
    
-   Verified that the server is in the **Running** state
    

## Start a rescue connection

1.  Go to the [Servers page](https://swas.console.alibabacloud.com/servers/) in the Simple Application Server console.
    
2.  In the server card, click **Remote Connection**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9554036271/p839894.png)
    
3.  In the **Rescue Logon** section of the **Remote Connection** dialog box, click **Log on Now**. The rescue connection page opens. If the page does not appear, check whether your browser blocked the pop-up.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9554036271/p839901.png)
    
4.  Complete the logon for your operating system.
    
    ### **Log on to a Linux server**
    
    1.  Enter a username, such as root, and press `Enter`.
        
    2.  Enter the logon password and press `Enter`.
        
        **Note**
        
        Password characters are hidden during entry to prevent leakage. Verify that you enter the correct password.
        
        The following output indicates a successful logon.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9554036271/p840362.png)
        
    3.  (Optional) To paste long text, such as a file download URL, from your on-premises device to the server, click **copy command** in the upper-right corner of the rescue connection page and paste the text in the dialog box that appears.
        
    4.  (Optional) Switch VNC terminals by pressing **CTRL+ALT+F1** through **CTRL+ALT+F10**. Each terminal can run different programs. The default terminal is **CTRL+ALT+F1**. You can also switch terminals from the menu icon in the upper-left corner of the rescue connection page. For example, choose **![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1250626071/p696945.png)** > **CTRL+ALT+F2**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9554036271/p840304.png)
        
    
    ### **Log on to a Windows server**
    
    1.  (Conditionally required) If the desktop is locked, choose **![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1250626071/p696945.png)** > **CTRL+ALT+DELETE** in the upper-left corner of the page.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1250626071/p696942.png)
        
    2.  On the Windows administrator logon page, enter the logon password and press `Enter`.
        
        ![win2012登录界面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2441175661/p284637.png)
        
    

## FAQ

**Why does the rescue connection page display a white screen after I stop performing operations?**

A rescue connection session lasts about 300 seconds by default. After the session times out, the page goes blank. Close the page and reconnect through the rescue feature.

**Why am I unable to connect to a server by using the rescue feature?**

The server may be unresponsive due to high vCPU utilization and high memory usage. Restart the server during off-peak hours and try again.

## Related topics

-   Troubleshoot connection issues:
    
    -   [Check whether a Linux simple application server contains the files or directories required by SSH access](/help/en/simple-application-server/support/check-whether-the-required-files-or-directories-for-the-ssh-service-exist-in-the-linux-instance)
        
    -   [How to handle the "Permission denied, please try again" error that appears when you log on to a Linux simple application server as the root user by using SSH](/help/en/simple-application-server/support/how-to-solve-the-error-of-permission-denied-please-try-again-when-using-root-user-to-log-in-to-linux-instance-through-ssh)
        
    -   [An exception occurs during SSH remote connection on a Linux simple application server due to SELinux being enabled](/help/en/simple-application-server/support/ssh-remote-connection-exception-due-to-selinux-service-enabled-in-linux-instance)
        
    -   [Troubleshoot high CPU utilization on a Windows simple application server](/help/en/simple-application-server/use-cases/troubleshooting-and-solution-of-high-cpu-usage-in-windows-instances)
        
-   Build an Ubuntu GUI:
    
    -   [Use VNC to build an Ubuntu 16.04 GUI](/help/en/simple-application-server/use-cases/use-vnc-to-build-guis-on-ubuntu-16-04)
        
    -   [Use VNC to build an Ubuntu 18.04 or Ubuntu 20.04 GUI](/help/en/simple-application-server/use-cases/use-vnc-to-build-guis-on-ubuntu-18-04-and-20-04)
