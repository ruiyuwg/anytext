This topic describes common issues that may occur when you connect to a Simple Application Server and provides solutions.

## Troubleshooting procedure

If you cannot remotely connect to a Simple Application Server, troubleshoot the issue by following the steps in this section. The possible causes are sorted by probability, from most likely to least likely. Check each potential cause until the issue is resolved.

**Possible cause**

**Solution**

Abnormal server status

You can log on to Simple Application Servers only if they are in the **Running** state.

-   If the server is **Stopped**, restart it.
    
    **Warning**
    
    The restart operation stops the instance for a short period of time and may interrupt services that are running on the instance. We recommend that you restart the instance during off-peak hours.
    
-   If the server is in the **Disabled** state:
    
    -   Check whether the server has expired. If it has, renew the server. For more information, see [Renewal policy](/help/en/simple-application-server/product-overview/upgrade-and-renew-a-simple-application-server#task-2082615).
        
    -   Check whether you have an overdue payment for the server. If you do, add funds to your account.
        

For more information about how to view the status of a Simple Application Server, see [View the information about a Simple Application Server](/help/en/simple-application-server/user-guide/view-lightweight-application-server-information#task-2081274).

Incorrect logon credentials

Make sure that the username, password, or key is correct.

-   If you forget the password, reset it. After you reset the password, restart the Simple Application Server for the new password to take effect. For more information, see [Set or reset server passwords](/help/en/simple-application-server/user-guide/manage-the-password-of-a-server#task305).
    
    **Important**
    
    For a Windows operating system, if your account is locked due to multiple failed logon attempts with an incorrect password, do one of the following before you reset the password and log on again:
    
    -   The account is locked for 10 minutes by default. Wait for 10 minutes, reset the password, and then log on again.
        
    -   Use a [rescue connection](/help/en/simple-application-server/user-guide/connect-to-a-server-by-using-the-rescue-feature) (VNC) to connect to the server, change the account lockout threshold, reset the password, and then log on again. For more information, see [What do I do if an error message stating that the user account is locked for security reasons due to too many logon attempts or password change attempts is returned when I use Remote Desktop to connect to a Windows instance?](/help/en/ecs/for-safety-consideration-have-lock-the-user-account-the-reason-is-that-login-attempt-or-password-change-try-too-much)
        
    
-   If the operating system has disabled password-based logon, see [What do I do if I receive a prompt indicating that the operating system has disabled password-based logon and I cannot log on even with the correct username and password when I use Workbench to connect to a server?](#afa8352400kdr)
    
-   If the issue is with the key pair, change the key pair. For more information, see [Manage key pairs (Linux)](/help/en/simple-application-server/user-guide/manage-key-pairs-linux#section-19l-1kx-rpd).
    
-   If you cannot remotely log on to the server from the console, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to check whether the key file was deleted by mistake.
    

Abnormal port configuration

Check whether the remote logon port is open in the firewall. The default port is 22 for Linux servers and 3389 for Windows servers. If the port is not open, see [Manage firewalls](/help/en/simple-application-server/user-guide/manage-the-firewall-of-a-server#multiTask759).

Check the firewall

If you use a Windows server, check whether you can access the server after you disable the firewall.

Check whether the server is outside the Chinese mainland

If you are in the Chinese mainland and connect to a Simple Application Server in a region outside the Chinese mainland, high latency and packet loss may occur. This can make the server inaccessible. This issue is caused by international network carriers and cannot be resolved on the server. For more information, see [What do I do if a connection timeout occurs when I remotely connect to a server outside the Chinese mainland?](#section-nlg-a6b-fbu)

Check whether the issue is caused by the carrier network

To determine whether the connection failure is caused by a local network issue, try connecting from a different network, such as a mobile hotspot. If you can connect from another network, the issue is likely with your local carrier. Contact your carrier to resolve the issue.

Check whether the server load is too high

High disk usage, disk BPS, bandwidth usage, or CPU utilization on a Simple Application Server can prevent remote logon.

Try the following solutions:

-   Stop processes that are not in use and try again.
    
-   Try to restart the Simple Application Server.
    
-   Upgrade the server configuration. For more information, see [Upgrade configurations](/help/en/simple-application-server/user-guide/upgrade-a-simple-application-server#multiTask665).
    
-   Reset the Simple Application Server. Before you reset the server, back up important data. For more information, see [Reset the system](/help/en/simple-application-server/user-guide/reset-a-simple-application-server#task390).
    

Check whether an antivirus software blocks the connection

Third-party antivirus software may prevent you from connecting to the remote server.

-   If a third-party antivirus software is running, check whether it blocks the remote connection. If it does, add the public IP address of the Simple Application Server to the whitelist and try to connect again.
    
-   You can also disable or uninstall the third-party antivirus software and try again.
    

Check whether the server is infected with a virus such as a mining program

If the server is attacked, the public IP address of the Simple Application Server may be added to a blackhole. You can manually deactivate the blackhole filtering and try to log on again. For more information, see [Alibaba Cloud blackhole filtering policy](/help/en/anti-ddos/product-overview/blackhole-filtering-policy-of-alibaba-cloud#concept-40032-zh).

Check the Remote Desktop Protocol of the server

Check whether Remote Desktop Protocol (RDP) is enabled on the Windows server. If not, enable it. For more information, see [How do I troubleshoot a remote connection failure to a Windows server when no error message is prompted?](#section-mi3-s9l-lgk)

Check the specific error message for the remote logon

Resolve the issue based on the specific error message. For more information, see [FAQ navigation](#section-9be-f89-ids).

If the issue persists after you complete the preceding checks, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for technical support.

## FAQ navigation

-   General remote connection issues
    
    -   [What do I do if I receive a prompt indicating that the operating system has disabled password-based logon and I cannot log on even with the correct username and password when I use Workbench to connect to a server?](#159340dcacinv)
        
    -   [What do I do if a connection timeout occurs when I remotely connect to a server outside the Chinese mainland?](#section-nlg-a6b-fbu)
        
    -   [The public IP address of my server is locked. How do I apply for it to be unblocked?](#section-fnt-fo4-4oa)
        
    -   [Why does the connection fail with a 'Connection refused' message?](#section-o40-6w8-res)
        
    -   [Why does the connection fail with an 'Incorrect username or password' message?](#section-8ow-kek-5pg)
        
    -   [Why does the connection fail with an 'Operation failed. Please try again later.' message when I use VNC or Workbench?](#section-zgj-8n8-zhh)
        
    -   [Why can't I log on after I change the password online?](#4599aac096nyg)
        
-   Issues with connecting to Linux servers
    
    -   [What do I do if a remote connection to a Linux server fails because SELinux is enabled?](#section-hgi-96q-k3x)
        
    -   [What do I do if I cannot log on to the server with the correct username and password?](#45eadf90f4e0b)
        
    -   You can also use the remote connection solutions for ECS to troubleshoot the issue. For more information, see [Troubleshoot connection issues for Linux instances](/help/en/doc-detail/34403.html)
        
-   Issues with connecting to Windows servers
    
    -   [What do I do if an authentication error occurs when I remotely connect to a Windows server?](#section-4g4-rxc-kon)
        
    -   [What do I do if I cannot use the Administrator user to log on to a Windows server?](#section-fwb-s0e-riw)
        
    -   [How do I troubleshoot a remote connection failure to a Windows server when no error message is prompted?](#section-mi3-s9l-lgk)
        
    -   [What do I do if I am prompted with 'The remote computer that you are trying to connect to requires Network Level Authentication' when I remotely connect to a Windows server?](#section-psw-n46-x9f)
        
    -   [What do I do if I am prompted with 'No Remote Desktop license servers are available to provide a license' when I remotely connect to a Windows server?](#section-whf-z7k-648)
        
    -   [What do I do if a remote connection to a Windows server fails and the server cannot be accessed over the Internet?](#section-1ev-hh0-hjd)
        

### **What do I do if I receive a prompt indicating that the operating system has disabled password-based logon and I cannot log on even with the correct username and password when I use Workbench to connect to a server?**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4037915571/p988382.png)

Possible causes:

-   The server has insufficient memory, which can cause the system and applications to stop responding. Restart the server and try again. If you can log on after the restart, upgrade the server configuration. For more information, see [Upgrade configurations](/help/en/simple-application-server/user-guide/upgrade-a-simple-application-server).
    
-   You are using a key pair to log on, but the operating system has disabled root user logon. Modify the configuration file. For more information, see [How do I switch to password-based logon if I previously used a key pair?](/help/en/simple-application-server/user-guide/connect-to-linux-server-remotely#9102b540d7p3i)
    

### **What do I do if a connection timeout occurs when I remotely connect to a server outside the Chinese mainland?**

If you are in the Chinese mainland and connect to a server in a region outside the Chinese mainland, high latency and packet loss may occur. This can make the server inaccessible. This issue is caused by international network carriers and cannot be resolved on the server. For more information about the regions of Simple Application Server, see [Regions and network connectivity](/help/en/simple-application-server/product-overview/regions-and-network-connectivity#concept-2579961). You can try one of the following methods to resolve this issue:

-   The network access issue may not be persistent. You can try to switch to another local network environment or try to connect to the server again later.
    
-   If your server is not required to be deployed in a region outside the Chinese mainland, we recommend that you request a self-service refund for the server and purchase a new server in the Chinese mainland.
    
    **Note**
    
    If you cannot request a self-service refund for the server, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to apply for a refund.
    

### **The public IP address of my server is locked. How do I apply for it to be unblocked?**

A server may be locked for reasons such as mining viruses or attacks. You can request to have the server unblocked. To apply, go to the [Penalties](https://yundun.console.aliyun.com/?p=sc#/) page.

**Note**

-   You can request to unblock the server only once.
    
-   After the server is unblocked, it is automatically checked for 3 days. If mining behavior is detected again, the server is locked and cannot be unblocked.
    
-   After the server is unblocked, back up your data promptly.
    

### **Why does the connection fail with a 'Connection refused' message?**

Check the following items:

-   The corresponding remote service, such as Secure Shell (SSH) or RDP, must be enabled on the server.
    
-   The connection port must be open on the server. Typically, SSH uses port 22 and RDP uses port 3389.
    

### **Why does the connection fail with an 'Incorrect username or password' message?**

Check the following items:

-   Enter the correct username. The default username is root for Linux servers and Administrator for Windows servers.
    
-   Enter the correct password. If you forget the password, you can reset it. For more information, see [Set or reset server passwords](/help/en/simple-application-server/user-guide/manage-the-password-of-a-server#task305).
    
-   If you log on to a Windows instance as a non-administrator user, the user must belong to the Remote Desktop Users group.
    

### **Why does the connection fail with an 'Operation failed. Please try again later.' message when I use VNC or Workbench?**

When you remotely connect to the server from the console, you may receive the message "Operation failed. Please try again later."

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3545551371/p846588.png)

To troubleshoot the issue, perform the following steps:

1.  Connect to the server using a third-party tool, such as PuTTY.
    
2.  Run the following command to check whether the SSH public key file authorized\_keys exists.
    
    ```
    cd /home/admin/.ssh/
    ll
    ```
    
    -   If the SSH public key file does not exist, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to obtain the SSH public key information. Then, restore the file by following these steps:
        
        1.  Run the following command to create the SSH public key file.
            
            ```
            mkdir -p /home/admin/.ssh
            vim /home/admin/.ssh/authorized_keys
            ```
            
            Paste the public key information into the authorized\_keys file and save the file.
            
        2.  Run the following command to change the owner.
            
            ```
            chown -R admin:admin /home/admin
            ```
            
    -   If the SSH public key file authorized\_keys exists, run the cat /home/admin/.ssh/authorized\_keys command to view and copy the public key information. Then, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) with the public key information for technical support.
        
3.  Check whether the /etc/sudoers file contains `admin ALL=(ALL) NOPASSWD:ALL`.
    
    ```
    vim /etc/sudoers
    ```
    
    If not, you can add `admin ALL=(ALL) NOPASSWD:ALL`.
    
4.  Check whether the permissions of /home/admin/.ssh/authorized\_keys are set to 644.
    
    ```
    cd /home/admin/.ssh
    ll
    ```
    
    The output is as follows.
    
    ```
    [root@iZd3ru25weg**** .ssh]# ll
    total 0
    -rw-r--r-- 1 admin admin 272 Nov  3 10:52 authorized_keys
    ```
    
    If the permissions are not 644, run the chmod 644 authorized\_keys command to set them to 644.
    

### **Why can't I log on after I change the password online?**

Third-party antivirus software on a Simple Application Server instance can block the **Change Password Online** operation, which causes the password change to fail. If this occurs, we recommend that you select **Change Password Offline** or call the [UpdateInstanceAttribute](/help/en/simple-application-server/developer-reference/api-swas-open-2020-06-01-updateinstanceattribute) operation to reset the instance password. Then, restart the instance to log on.

### **What do I do if a remote connection to a Linux server fails because SELinux is enabled?**

For the solution, see [An SSH remote connection to a Linux instance is abnormal because the SELinux service is enabled](/help/en/ecs/an-ssh-remote-connection-exception-occurs-in-a-linux-instance-because-the-selinux-service-is-enabled).

Enabling Security-Enhanced Linux (SELinux) improves system security but may damage operating system files and cause system startup failures. We recommend that you enable or disable SELinux correctly to prevent system startup issues. For more information, see [Enable or disable SELinux](/help/en/ecs/user-guide/enable-or-disable-selinux#task-2385075).

### **What do I do if I cannot log on to the server with the correct username and password?**

If the operating system has disabled password-based logon, you cannot log on even with the correct username and password. If you want to use password-based logon, see [What do I do if I receive a prompt indicating that the operating system has disabled root user logon and I cannot log on even with the correct username and password when I use Workbench to connect to a server?](#afa8352400kdr)

### **What do I do if an authentication error occurs when I remotely connect to a Windows server?**

This issue may be caused by a Windows upgrade patch. For solutions, see the following topic:

-   [What do I do if the "An authentication error has occurred. The function requested is not supported." error is returned when I remotely connect to a Simple Application Server?](/help/en/simple-application-server/support/the-error-message-an-authentication-error-has-occurred-the-function-requested-is-not-supported-appears)
    

### **What do I do if I cannot use the Administrator user to log on to a Windows server?**

If you set a local security policy on your local Windows host to deny logon through terminal services, you cannot use a remote desktop connection tool to log on to the Windows server as the Administrator user. For the solution, see [What do I do if the "To sign in remotely, you need the right to sign in through Remote Desktop Services." message is returned when I connect to a Windows instance using Remote Desktop?](/help/en/ecs/user-guide/to-sign-in-remotely-you-need-the-right-to-sign-in-through-remote-desktop-services)

### **How do I troubleshoot a remote connection failure to a Windows server when no error message is prompted?**

This issue occurs when you use a remote desktop connection tool on your local Windows host to connect to a Windows server. This issue may be caused by disabled remote connection permissions on the Windows server. This topic uses a Windows Server 2012 R2 64-bit operating system as an example to describe how to troubleshoot this issue.

1.  Connect to the Windows server from the management console.
    
    For more information, see [Connect to a Windows server](/help/en/simple-application-server/user-guide/connect-to-windows-server-remotely#section-aid-tw7-fpu).
    
2.  Open **This PC**. In the left navigation pane, right-click **This PC** and click **Properties**.
    
3.  In the left navigation pane on the **System** page, click **Remote Settings**.
    
4.  In the **System Properties** dialog box, under the **Remote Desktop** section, select **Allow Remote Connections To This Computer**.
    
5.  Click **Apply** and then **OK**.
    
    After the configuration is complete, try to remotely connect to the server again.
    

### **What do I do if I am prompted with 'The remote computer that you are trying to connect to requires Network Level Authentication' when I remotely connect to a Windows server?**

This error may occur when you use a remote desktop connection tool on your local Windows host to connect to a Windows server if the tool is outdated. This topic uses a Windows Server 2012 R2 64-bit operating system as an example to describe how to resolve this issue.

1.  Connect to the Windows server from the management console.
    
    For more information, see [Connect to a Windows server](/help/en/simple-application-server/user-guide/connect-to-windows-server-remotely#section-aid-tw7-fpu).
    
2.  Open **This PC**. In the left navigation pane, right-click **This PC** and click **Properties**.
    
3.  In the left navigation pane on the **System** page, click **Remote Settings**.
    
4.  In the **Remote Desktop** section of the **System Properties** dialog box, clear **Allow Connections Only From Computers Running Remote Desktop With Network Level Authentication (recommended)**.
    
5.  Click **Apply** and then **OK**.
    
    After the configuration is complete, try to remotely connect to the server again.
    

### **What do I do if I am prompted with 'No Remote Desktop license servers are available to provide a license' when I remotely connect to a Windows server?**

For the solution, see [What do I do if the 'No Remote Desktop license servers are available to provide a license' error is returned when I connect to a Windows instance using Remote Desktop?](/help/en/ecs/user-guide/the-error-message-no-remote-desktop-authorization-server-can-provide-a-license-is-prompted-for-remote-login-to-a-windows-instance)

### **What do I do if a remote connection to a Windows server fails and the server cannot be accessed over the Internet?**

This issue may be caused by a disabled network interface card (NIC) on the Windows server. This topic uses a Windows Server 2012 R2 64-bit operating system as an example to describe how to resolve this issue.

1.  Connect to the Windows server from the management console.
    
    For more information, see [Connect to a Windows server](/help/en/simple-application-server/user-guide/connect-to-windows-server-remotely#section-aid-tw7-fpu).
    
2.  In the lower-right corner of the desktop, right-click the network icon ![网络图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5253300361/p285781.png) and click **Open Network and Sharing Center**.
    
3.  In the left navigation pane, click **Change Adapter Settings**.
    
4.  Right-click the disabled network and click **Enable**.
    
5.  Once the network is enabled, right-click the network and click **Properties**.
    
6.  In the **This Connection Uses The Following Items** section, select **Internet Protocol Version 4 (TCP/IPv4)** and then click **Properties**.
    
7.  On the **General** tab, select **Obtain an IP Address Automatically** and **Obtain DNS Server Address Automatically**, and then click **OK**.
    
    After the configuration is complete, try to remotely connect to the server again.
    

## **References**

If none of the preceding solutions resolve your issue, refer to the remote connection solutions for Elastic Compute Service (ECS) to troubleshoot the issue:

-   [Troubleshooting connection issues for Linux instances](/help/en/ecs/troubleshooting-guidelines-when-you-cannot-remotely-log-on-to-a-linux-instance-through-ssh)
    
-   [Troubleshooting remote connection issues for Windows instances](/help/en/ecs/solution-to-failure-in-remote-connection-to-windows-instance)
    
-   [SSH remote connection issues](/help/en/ecs/ssh-remote-connection-problems/)
    
-   [Remote Desktop (RDP) connection issues](/help/en/ecs/remote-desktop-connection-issue/)
