Stopping or uninstalling Cloud Assistant Agent disables key remote management features. You will lose access to the following: password-free logon through Session Manager and Workbench, command execution through CloudOps Orchestration Service (OOS), and self-service troubleshooting tools.

## Stop Cloud Assistant Agent

**Important**

If you are connected to the instance using Session Manager or Workbench, stopping the agent terminates your session. Before you proceed, connect to the instance using another method, such as [Workbench terminal connection](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key#caa6e215a8ad7), [third-party client tool (SSH)](/help/en/ecs/user-guide/connect-to-an-instance-by-using-third-party-client-tools/), or [VNC](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc).

### **Linux**

1.  [Connect to a Linux instance by using a username and password](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-1#concept-rsl-2vx-wdb).
    
2.  Stop the Cloud Assistant daemon process.
    
    > The daemon process monitors and stabilizes Cloud Assistant Agent. If you stop only the main agent service, the daemon process will automatically restart it.
    
    ```
    sudo /usr/local/share/assist-daemon/assist_daemon --stop
    ```
    
3.  Identify the init system type.
    
    > The init system manages services at startup. You need to identify your instance's init system because the commands to manage Cloud Assistant Agent differ for each type.
    
    -   `systemd`: Alibaba Cloud Linux, CentOS 7+, Red Hat Enterprise Linux (RHEL) 7+, Fedora 15+, Ubuntu 15.04+, Debian 8+, and others.
        
    -   `Upstart`: Ubuntu 6.10-14.10, RHEL 6, CentOS 6, and others.
        
    -   `SysVinit`: RHEL 5, CentOS 5, Debian 6, and others.
        
4.  Stop the Cloud Assistant Agent.
    
    #### **systemd**
    
    ```
    sudo systemctl stop aliyun.service
    
    # Verify that the service has stopped. The service is stopped if the output contains "inactive (dead)".
    sudo systemctl status aliyun.service
    ```
    
    #### Upstart
    
    ```
    sudo /sbin/initctl stop aliyun-service
    
    # Verify that the service has stopped. The service is stopped if the output is empty.
    ps aux | grep -v grep | grep "aliyun-service"
    ```
    
    #### SysVinit
    
    ```
    sudo /etc/init.d/aliyun-service stop
    
    # Verify that the service has stopped. The service is stopped if the output is empty.
    ps aux | grep -v grep | grep "aliyun-service"
    ```
    

### **Windows**

#### **Method 1: Use the Windows Services console**

1.  [Use RDP client or Windows App](/help/en/ecs/user-guide/connect-to-a-windows-instance-by-using-a-username-and-password#concept-n31-wyx-wdb).
    
2.  Click the Start icon, then select **Windows Administrative Tools** > **Computer Management**.
    
3.  In the left pane, navigate to **Computer Management (Local)** > **Services and Applications** > **Services**.
    
4.  Find the **Aliyun Assist Service** and click **Stop the service**.
    
    ![重启动此服务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0181865171/p5250.png)
    

#### **Method 2: Use Windows PowerShell**

1.  [Use RDP client or Windows App](/help/en/ecs/user-guide/connect-to-a-windows-instance-by-using-a-username-and-password#concept-n31-wyx-wdb).
    
2.  Click the Start icon, find **Windows PowerShell**, right-click it, then select **Run as administrator**.
    
3.  Stop the Cloud Assistant service.
    
    ```
    Stop-Service -Name "AliyunService"
    ```
    
4.  Verify that Cloud Assistant Agent has stopped.
    
    The agent is stopped if the value of `Status` in the command output is `Stopped`.
    
    ```
    Get-Service -Name "AliyunService"
    ```
    

## Uninstall Cloud Assistant Agent

**Important**

If you are connected to the instance using Session Manager or Workbench, stopping the agent terminates your session. Before you proceed, connect to the instance using another method, such as [Workbench terminal connection](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key#caa6e215a8ad7), [SSH](/help/en/ecs/user-guide/connect-to-an-instance-by-using-third-party-client-tools/), or [VNC](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc).

### **Linux**

1.  [Stop Cloud Assistant Agent](#dcb458efe747o).
    
2.  Delete the Cloud Assistant daemon process.
    
    ```
    sudo /usr/local/share/assist-daemon/assist_daemon --delete
    ```
    
3.  Uninstall the software package.
    
    -   `RPM`: For distributions such as Alibaba Cloud Linux, CentOS, RHEL, Fedora, Rocky Linux, and openSUSE.
        
    -   `DEB`: For distributions such as Debian and Ubuntu.
        
        #### **RPM**
        
        ```
        sudo rpm -qa | grep aliyun_assist | xargs sudo rpm -e
        ```
        
        #### **DEB**
        
        ```
        sudo apt-get purge -y aliyun-assist
        ```
        
4.  Clean up residual files and service configurations.
    
    ```
    sudo rm -rf /usr/local/share/aliyun-assist
    sudo rm -rf /usr/local/share/assist-daemon
    sudo rm -f /etc/systemd/system/aliyun.service
    sudo rm -f /etc/init.d/aliyun-service
    ```
    
5.  Verify that Cloud Assistant Agent has been uninstalled.
    
    The agent is uninstalled if the output is empty, which confirms the process no longer exists.
    
    ```
    ps aux | grep -v grep | grep "aliyun-service"
    ```
    

### **Windows**

#### **Method 1: Use the Windows desktop interface**

1.  [Stop the Cloud Assistant Agent](#dcb458efe747o).
    
2.  In File Explorer, go to the **View** tab, select the **Hidden items** checkbox, and then delete the C:\\ProgramData\\aliyun\\assist directory.
    
    ![d5c8f2f19778bba6247adb09143d4d1a](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2268912471/p927997.png)
    

#### **Method 2: Use Windows PowerShell**

1.  [Use RDP client or Windows App](/help/en/ecs/user-guide/connect-to-a-windows-instance-by-using-a-username-and-password#concept-n31-wyx-wdb).
    
2.  Click the Start icon, find **Windows PowerShell**, right-click it, then select **Run as administrator**.
    
3.  Stop the Cloud Assistant process.
    
    ```
    Stop-Service -Name "AliyunService" -Force
    ```
    
4.  Delete the installation directory and registry entry.
    
    ```
    # Delete the installation directory
    Remove-Item -Path "C:\ProgramData\aliyun\assist" -Recurse -Force
    
    # Delete the registry entry
    Remove-Item -Path "HKLM:\SYSTEM\CurrentControlSet\Services\AliyunService" -Recurse -Force
    ```
    
5.  Verify that Cloud Assistant Agent has been uninstalled.
    
    The agent is uninstalled if the output is empty or contains the message `Cannot find any service with service name 'AliyunService'`.
    
    ```
    Get-Service -Name "AliyunService"
    ```
    

## FAQ

#### **How do I restart Cloud Assistant Agent after stopping it?**

### **Linux**

1.  [Connect to a Linux instance by using a username and password](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-1#concept-rsl-2vx-wdb).
    
2.  Start the Cloud Assistant daemon process.
    
    ```
    sudo /usr/local/share/assist-daemon/assist_daemon --start
    ```
    
3.  [Identify the init system type](#bc65af5e6dlhr).
    
4.  Start Cloud Assistant Agent.
    
    #### **systemd**
    
    ```
    sudo systemctl start aliyun.service
    
    # Verify that the service has started. The service is running if the output contains "active (running)".
    sudo systemctl status aliyun.service
    ```
    
    #### **Upstart**
    
    ```
    sudo /sbin/initctl start aliyun-service
    
    # Verify that the service has started. The service is running if the output is not empty.
    ps aux | grep -v grep | grep "aliyun-service"
    ```
    
    #### **SysVinit**
    
    ```
    sudo /etc/init.d/aliyun-service start
    
    # Verify that the service has started. The service is running if the output is not empty.
    ps aux | grep -v grep | grep "aliyun-service"
    ```
    

### **Windows**

#### **Method 1: Use the Windows Services UI**

1.  [Use RDP client or Windows App](/help/en/ecs/user-guide/connect-to-a-windows-instance-by-using-a-username-and-password#concept-n31-wyx-wdb).
    
2.  Click the **Start icon**, then select **Windows Administrative Tools** > **Computer Management**.
    
3.  In the left pane, navigate to **Computer Management (Local)** > **Services and Applications** > **Services**.
    
4.  Find the **Aliyun Assist Service** and click **Start the service**.
    

#### **Method 2: Use Windows PowerShell**

1.  [Use RDP client or Windows App](/help/en/ecs/user-guide/connect-to-a-windows-instance-by-using-a-username-and-password#concept-n31-wyx-wdb).
    
2.  Click the **Start icon**, find **Windows PowerShell**, right-click it, then select **Run as administrator**.
    
3.  Start Cloud Assistant Agent service.
    
    ```
    Start-Service -Name "AliyunService"
    ```
    
4.  Verify that Cloud Assistant Agent has started.
    
    The agent is running if the value of `Status` in the command output is `Running`.
    
    ```
    Get-Service -Name "AliyunService"
    ```
    

## References

-   [Install agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent)
    
-   [Check status and handle anomalies](/help/en/ecs/user-guide/check-the-status-of-cloud-assistant-and-handle-exceptions)
