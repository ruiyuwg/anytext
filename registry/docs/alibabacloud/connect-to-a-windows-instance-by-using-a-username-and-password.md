On Windows 10 or Windows 11, use the built-in Remote Desktop Connection (MSTSC) to connect to your instance. On macOS, use the Windows App.

**Important**

We recommend connecting to your Alibaba Cloud instances by using [Workbench](/help/en/ecs/user-guide/connect-to-a-windows-instance-through-workbench). It provides browser-based, password-free logon and is more convenient than MSTSC and Windows App.

## Usage notes

-   The instance runs Windows.
    
-   The instance has a [static public IP address](/help/en/ecs/user-guide/public-ip-address) or an [Elastic IP Address (EIP)](/help/en/ecs/user-guide/associate-or-disassociate-an-eip).
    

## Method 1: Use Remote Desktop (for Windows)

### Before you begin

-   **Instance public IP address:** In the [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region), find and click the target instance to open its details page. In the **Configuration Information** section, find the **Public IP Address**.
    
-   **Instance logon credentials:** [Set a password](/help/en/ecs/user-guide/instance-logon-credential-management#0125b54267ba1) for the instance.
    
-   **Security group configuration:** For the Security Group associated with the instance, [configure an inbound rule](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-an-ssh-key-pair#3f58c0bfaboi4) that allows your local IP address to access the instance over Remote Desktop Protocol (RDP), with port 3389.
    

### Procedure

1.  Launch Remote Desktop Connection.
    
    Press `Win+R`, type `mstsc`, and press `Enter` to open the **Remote Desktop Connection** tool.
    
2.  Configure the connection.
    
    In the **Computer** text box, enter the **public IP address** of the instance.
    
3.  Initiate the connection and enter the password.
    
    Click **Connect**. In the dialog box that appears, enter the **User name** (default: Administrator) and **Password**, and then click **OK**.
    
    > A certificate warning may appear that says, "**The identity of this remote computer cannot be verified**." Click **Yes** to trust the certificate.
    
4.  Log on successfully.
    
    Wait for the connection to complete. The desktop of the Windows instance appears.
    

## Method 2: Use the Windows App (for macOS)

### Before you begin

-   Search for and install the Windows App from the **App Store**.
    
-   **Instance public IP address:** In the [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region), find and click the target instance to open its details page. In the **Configuration Information** section, find the **Public IP Address**.
    
-   **Instance logon credentials:** [Set a password](/help/en/ecs/user-guide/instance-logon-credential-management#0125b54267ba1) for the instance.
    
-   **Security group configuration:** For the Security Group associated with the instance, [configure an inbound rule](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-an-ssh-key-pair#3f58c0bfaboi4) that allows your local IP address to access the instance over RDP (port 3389).
    

### Procedure

1.  Start the Windows App.
    
    In the navigation pane on the left, click **Devices**. Then, in the upper-right corner, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5387019571/p1010797.png)** > **Add PC**. The **Add PC** dialog box appears.
    
2.  Configure the connection.
    
    In the **PC name** text box, enter the **public IP address** of the instance and click **Add**.
    
3.  Initiate the connection.
    
    In the navigation pane on the left, click **Devices**. Double-click the connection card for the newly created PC.
    
4.  Enter your credentials.
    
    In the **Enter Your Credentials** dialog box that appears, enter the **Username** (default: Administrator) and **Password**, and then click **Continue**.
    
    > If a certificate security warning appears, click **Continue** to trust the certificate.
    
5.  Log on successfully.
    
    Wait for the connection to complete. You are redirected to the desktop of the Windows instance.
    

## Apply in production

-   #### Modify the default RDP port
    
    Change the default RDP port 3389 to a high-numbered, non-standard port, such as 33890. This reduces the risk of automated scanning and brute-force attacks.
    
    1.  **Allow traffic on the new port:** [Add an inbound rule](/help/en/ecs/user-guide/start-using-security-groups#233050ea35twy) to the instance's security group to allow inbound traffic on the new port.
        
    2.  **Modify the service port:** Log on to the instance and modify the port in the registry.
        
        1.  Press `Win+R`, type `regedit`, and press `Enter` to open the Registry Editor.
            
        2.  Navigate to the path `HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp`.
            
        3.  Find the `PortNumber` value. Right-click it and select **Modify**. In the dialog box that appears, change the base to **Decimal** and enter the new port number.
            
        4.  Press `Win+R`, type `services.msc`, and press `Enter` to open the Services window. Find and right-click `Remote Desktop Services`, and then select **Restart** to apply the changes.
            
    3.  **Connect using the new port:** To connect by using the new port, specify it after the instance's public IP address in the following format: `<Public IP>:<Port number>`.
        
-   #### Authorize only trusted IP addresses to access the instance
    
    [Modify the security group rules](/help/en/ecs/user-guide/start-using-security-groups#233050ea35twy) to allow access to the instance's RDP service port (default: 3389) only from your local IP address or other trusted IP addresses. This blocks access from unknown hosts.
    

## FAQ

-   #### How do I configure a security group rule to allow traffic on port 3389?
    
    [Add an inbound rule](/help/en/ecs/user-guide/start-using-security-groups#233050ea35twy) to the instance's security group:
    
    **Action**
    
    **Protocol**
    
    **Source**
    
    **Destination (This Instance)**
    
    Allow
    
    Custom TCP
    
    Enter the public IP address of your local client.
    
    **Important**
    
    If you set the source to `0.0.0.0/0`, you allow access from any IP address, which poses a security risk. Use this value with caution.
    
    RDP(3389)
    
    > If you changed the RDP service port of the instance, update this to the actual port number.
    
-   #### After I initiate a connection, it times out and fails to connect. What should I do?
    
    This means the client cannot connect to the server. Check the following in order:
    
    1.  Verify that the public IP address is correct.
        
    2.  Check if the security group allows traffic on the required port.
        
    3.  Ensure the instance is running.
        
    4.  Use the [ECS console - Self-service Troubleshooting](https://ecs.console.alibabacloud.com/activeDiagnosis/region) tool to troubleshoot the issue.
        
-   #### How do I transfer files using MSTSC or the Windows App?
    
    -   [Transfer files using MSTSC from a local Windows computer.](/help/en/ecs/user-guide/use-mstsc-exe-to-upload-a-file-to-a-windows-instance#5723e82023dw9)
        
    -   [Transfer files to an instance using the Windows App from a local macOS computer.](/help/en/ecs/user-guide/use-mstsc-exe-to-upload-a-file-to-a-windows-instance#5365db4e670i3)
