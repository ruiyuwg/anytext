On macOS or Windows 10/11, you can use the built-in OpenSSH command-line tool to connect to your Linux Elastic Compute Service (ECS) instance. Alternatively, you can use the Xshell client on Windows. Both methods support authentication using a password or a key pair.

**Important**

We recommend using [Workbench](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key) to connect to your Alibaba Cloud instances. This browser-based tool supports password-free logon and is more convenient than using OpenSSH or Xshell.

## Usage notes

-   The instance runs a **Linux** operating system.
    
-   The instance has a [static public IP address](/help/en/ecs/user-guide/public-ip-address) or an associated [Elastic IP Address (EIP)](/help/en/ecs/user-guide/associate-or-disassociate-an-eip).
    

## Method 1: Use an OpenSSH client (command line)

OpenSSH is the standard Secure Shell (SSH) client built into macOS and modern Windows operating systems, letting you connect quickly from the command line.

### Before you connect

-   **Instance public IP address:** In the [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region), find the target instance and open its details page. In the **Configuration Information** section, find the **Public IP Address**.
    
-   **Instance Logon credentials:** [Set a password](/help/en/ecs/user-guide/instance-logon-credential-management#0125b54267ba1) or [bind a key pair](/help/en/ecs/user-guide/instance-logon-credential-management#d63a004e87306) for the instance.
    
-   **Configure a security group:** [Add an inbound rule](#3f58c0bfaboi4) to the instance's security group to allow SSH access on port 22 from your local IP address.
    

### Procedure

## Windows 10/11

## **Connect with a password**

1.  Open PowerShell.
    
    Press `Win`+`R`, enter `powershell`, and then press `Enter`.
    
2.  Start the remote connection.
    
    ```
    ssh <instance_username>@<instance_public_IP_address>
    ```
    
    > Example: `ssh root@47.98.xxx.xxx`
    
3.  (First-time connection) Verify the host fingerprint.
    
    When you connect to a new ECS instance for the first time, a message similar to the following appears, asking you to verify the host key fingerprint.
    
    > This is an SSH security mechanism. For security, [get the host key fingerprint of the instance and compare it with the one displayed](#66719a5b83n6e). If they do not match, you may be experiencing a man-in-the-middle attack. Switch to a secure network and try to connect again.
    
    After confirming the host key fingerprint is correct, enter `yes` and press Enter.
    
    ```
    The authenticity of host '47.98.xxx.xxx (47.98.xxx.xxx)' can't be established.
    ED25519 key fingerprint is SHA256:AbCdEf123456...
    This key is not known by any other names.
    Are you sure you want to continue connecting (yes/no/[fingerprint])? 
    ```
    
4.  Enter the password to access the instance.
    
    > When you enter the password, no characters appear on the screen. This is normal. Press `Enter` after you finish typing.
    
    Once authenticated, you will see a welcome message, and the command prompt changes to `[<username>@<hostname> ~]$`. This indicates a successful logon.
    
    ```
    Welcome to Alibaba Cloud Elastic Compute Service !
    
    [root@Connect-Instance-Example ~]#
    ```
    

## **Connect with a key pair**

1.  Open PowerShell.
    
    Press `Win`+`R`, enter `powershell`, and then press `Enter`.
    
2.  Start the remote connection.
    
    ```
    ssh -i /path/to/private_key.pem <instance_username>@<instance_public_IP_address>
    ```
    
    > Example: `ssh -i /path/to/private_key.pem root@47.98.xxx.xxx`. In this command, `/path/to/private_key.pem` is the path to your private key file, such as `C:\Users\Administrator\Downloads\private_key.pem`.
    
3.  (First-time connection) Verify the host fingerprint.
    
    When you connect to a new ECS instance for the first time, a message similar to the following appears, asking you to verify the host key fingerprint.
    
    > This is an SSH security mechanism. For security, [get the host key fingerprint of the instance and compare it with the one displayed](#66719a5b83n6e). If they do not match, you may be experiencing a man-in-the-middle attack. Switch to a secure network and try to connect again.
    
    After confirming the host key fingerprint is correct, enter `yes` and press `Enter`.
    
    ```
    The authenticity of host '47.98.xxx.xxx (47.98.xxx.xxx)' can't be established.
    ED25519 key fingerprint is SHA256:AbCdEf123456...
    This key is not known by any other names.
    Are you sure you want to continue connecting (yes/no/[fingerprint])? 
    ```
    
4.  Authenticate with the key to access the instance.
    
    Once the key is authenticated, you will see a welcome message, and the command prompt changes to `[<username>@<hostname> ~]$`. This indicates a successful logon.
    
    ```
    Welcome to Alibaba Cloud Elastic Compute Service !
    
    [root@Connect-Instance-Example ~]#
    ```
    

## macOS

## **Connect with a password**

1.  Open **Terminal**.
    
2.  Start the remote connection.
    
    ```
    ssh <instance_username>@<instance_public_IP_address>
    ```
    
    > Example: `ssh root@47.98.xxx.xxx`
    
3.  (First-time connection) Verify the host fingerprint.
    
    When you connect to a new ECS instance for the first time, a message similar to the following appears, asking you to verify the host key fingerprint.
    
    > This is an SSH security mechanism. For security, [get the host key fingerprint of the instance and compare it with the one displayed](#66719a5b83n6e). If they do not match, you may be experiencing a man-in-the-middle attack. Switch to a secure network and try to connect again.
    
    After confirming the host key fingerprint is correct, enter `yes` and press `Enter`.
    
    ```
    The authenticity of host '47.98.xxx.xxx (47.98.xxx.xxx)' can't be established.
    ED25519 key fingerprint is SHA256:AbCdEf123456...
    This key is not known by any other names.
    Are you sure you want to continue connecting (yes/no/[fingerprint])? 
    ```
    
4.  Enter the password to access the instance.
    
    > When you enter the password, no characters appear on the screen. This is normal. Press `Enter` after you finish typing.
    
    After authentication, the system's welcome message appears, the command prompt changes to `[<username>@<hostname> ~]$`. This indicates a successful logon.
    
    ```
    Welcome to Alibaba Cloud Elastic Compute Service !
    
    [root@Connect-Instance-Example ~]#
    ```
    

## **Connect with a key pair**

1.  Open **Terminal**.
    
2.  Start the remote connection.
    
    ```
    # chmod 400: Sets read-only permissions for the owner of the private key file. This is a security requirement of the SSH client.
    chmod 400 /path/to/private_key.pem
    ssh -i /path/to/private_key.pem <instance_username>@<instance_public_IP_address>
    ```
    
    > Example: `ssh -i /path/to/private_key.pem root@47.98.xxx.xxx`. In this command, `/path/to/private_key.pem` is the path to your private key file.
    
3.  (First-time connection) Verify the host fingerprint.
    
    When you connect to a new ECS instance for the first time, a message similar to the following appears, asking you to verify the host key fingerprint.
    
    > This is an SSH security mechanism. For security, [get the host key fingerprint of the instance and compare it with the one displayed](#66719a5b83n6e). If they do not match, you may be experiencing a man-in-the-middle attack. Switch to a secure network and try to connect again.
    
    After confirming the host key fingerprint is correct, enter `yes` and press `Enter`.
    
    ```
    The authenticity of host '47.98.xxx.xxx (47.98.xxx.xxx)' can't be established.
    ED25519 key fingerprint is SHA256:AbCdEf123456...
    This key is not known by any other names.
    Are you sure you want to continue connecting (yes/no/[fingerprint])? 
    ```
    
4.  Authenticate the key and access the instance.
    
    Once the key is authenticated, you will see a welcome message, and the command prompt changes to `[<username>@<hostname> ~]$`. This indicates a successful logon.
    
    ```
    Welcome to Alibaba Cloud Elastic Compute Service !
    
    [root@Connect-Instance-Example ~]#
    ```
    

## Method 2: Use the Xshell client (Windows only)

Xshell is an SSH client for Windows used to manage Linux servers.

### Before you connect

-   **Download and install Xshell:** Go to the [official Xshell website](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.xshell.com%2Fzh%2Fxshell%2F) to download and install the latest client.
    
-   **Instance Public IP address:** In the [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region), find the target instance, and open its details page. In the **Configuration Information** section, find the **Public IP Address**.
    
-   **Instance Logon credentials:** [Set a password](/help/en/ecs/user-guide/instance-logon-credential-management#0125b54267ba1) or [bind a key pair](/help/en/ecs/user-guide/instance-logon-credential-management#d63a004e87306) for the instance.
    
-   **Configure a security group:** [Configure an inbound rule](#3f58c0bfaboi4) to the instance's security group to allow SSH access on port 22 from your local IP address.
    

### Procedure

1.  Start Xshell and create a new session.
    
    1.  Open the Xshell application.
        
    2.  In the **Sessions** window that appears, click **New**. Alternatively, from the menu bar, select **File** > **New**.
        
2.  Configure the connection.
    
    In the left navigation pane, click **Connection** and configure the following parameters:
    
    -   **Name**: Enter a descriptive name for the session, for example, My-Web-Server.
        
    -   **Protocol**: Keep the default, **SSH**.
        
    -   **Host**: Enter the instance's public IP address.
        
    -   **Port Number**: Keep the default, **22**.
        
3.  Configure user authentication.
    
    In the left navigation pane, click **Authentication**.
    
    ## Connect with a password
    
    1.  **Method**: Select **Password**.
        
    2.  **User Name**: Enter the logon name for the server, such as root.
        
    3.  **Password**: Enter the corresponding logon password.
        
    
    ## Connect with a key pair
    
    1.  **User Name:** Enter the logon name for the server, such as root.
        
    2.  **Method:** Select **Public Key** and configure the user key as follows:
        
        1.  Click **Settings...**.
            
        2.  Select the **Key File** option. Click **...** next to **User Key**, click **Import...**, and then select the `.pem` private key file from your local storage.
            
        3.  After import, select the key and click **OK**.
            
        4.  (Optional) If your key file is password-protected, enter the **Password**.
            
    
4.  Connect to the instance.
    
    Click **Connect**.
    
5.  (First-time connection) Verify the host key.
    
    When you connect to a new ECS instance for the first time, Xshell displays an **SSH Security Warning** window with the host key fingerprint.
    
    > This is an SSH security mechanism. For security, [get the host key fingerprint of the instance and compare it with the one displayed](#66719a5b83n6e). If they do not match, you may be experiencing a man-in-the-middle attack. Switch to a secure network and try to connect again.
    
    After verifying the key, click **Accept and Save**.
    
6.  Access the instance.
    
    When the command prompt appears, you have successfully connected.
    
    ```
    Welcome to Alibaba Cloud Elastic Compute Service !
    
    [root@Connect-Instance-Example ~]#
    ```
    

## Apply in production

To enhance the security of your remote connection in a production environment, follow these best practices.

-   #### Verify the host fingerprint to prevent man-in-the-middle attacks
    
    When connecting to an instance for the first time, [verify the host key fingerprint of the instance](#66719a5b83n6e) to ensure you are connecting to the correct instance, not an attacker's server.
    
-   #### Disable password-based logon and enforce key pair authentication
    
    Key pair authentication is significantly more secure than password authentication and reduces the risk of brute-force attacks.
    
    1.  [Bind a key pair](/help/en/ecs/user-guide/instance-logon-credential-management#939ea2f00ekaf) to your instance.
        
    2.  Log on to the instance, edit the `/etc/ssh/sshd_config` configuration file, and change the value of `PasswordAuthentication` to `no`. Restart the SSH service for the changes to take effect.
        
-   #### Change the default SSH port
    
    Changing the default port 22 to a non-standard port (such as 2222) reduces exposure to automated scans.
    
    1.  **Allow the new port:** [Add an inbound rule](/help/en/ecs/user-guide/start-using-security-groups#233050ea35twy) to the instance's security group to allow traffic on the new port.
        
    2.  **Change the SSH service port:** Log on to the instance, edit the `/etc/ssh/sshd_config` configuration file, and change `#Port 22` to `Port 2222`. Restart the SSH service for the changes to take effect.
        
    3.  **Connect using the new port:** When connecting, you must specify the new port with the `-p` flag. For example: `ssh -p 2222 username@instance_ip`.
        
-   #### Allow access only from trusted IP addresses
    
    [Modify security group rules](/help/en/ecs/user-guide/start-using-security-groups#233050ea35twy) to allow SSH access only from your local IP or other trusted IP addresses.
    

## FAQ

-   #### How do I configure a security group rule for port 22?
    
    In the instance's security group, [add](/help/en/ecs/user-guide/start-using-security-groups#233050ea35twy) a rule with the following settings:
    
    **Action**
    
    **Protocol**
    
    **Source**
    
    **Destination (This Instance)**
    
    Allow
    
    Custom TCP
    
    Your local client's public IP address.
    
    **Important**
    
    Using `0.0.0.0/0` allows any IP address to access the port, which poses a security risk. Use it with caution.
    
    SSH(22)
    
    > If you changed the SSH port, use the new port number.
    
-   #### How do I verify the instance's host key fingerprint**?**
    
    When you connect to an instance for the first time, you are prompted to verify the host key fingerprint.
    
    ## In the console
    
    1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region). In the upper-left corner, select a region and resource group.
        
    2.  Find the instance and click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0136398571/p1009481.png)** > **Obtain Instance System Logs**. Then, find `BEGIN SSH HOST KEY FINGERPRINTS`. The host fingerprints are displayed.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0136398571/p1009486.png)
        
        Check if the fingerprint displayed by your SSH client **exactly matches** a fingerprint in the output. If they do not match, you may be experiencing a man-in-the-middle attack. Switch to a secure network and try to connect again.
        
        > If you cannot find this section, log on to the instance to view the host fingerprint.
        
    
    ## In the instance
    
    [Log on to the instance using Workbench](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key) and run the following command to view the host key fingerprint:
    
    ```
    for f in /etc/ssh/ssh_host_*_key.pub; do ssh-keygen -l -f "$f"; done
    ```
    
    Sample output:
    
    ```
    1024 SHA256:9C******co root@Connect-Instance-Example (DSA)
    256 SHA256:u6******SU root@Connect-Instance-Example (ECDSA)
    256 SHA256:iQ******jg root@Connect-Instance-Example (ED25519)
    3072 SHA256:8R******64 root@Connect-Instance-Example (RSA)
    ```
    
    Check if the fingerprint displayed by your SSH client **exactly matches** a fingerprint in the output. If they do not match, you may be experiencing a man-in-the-middle attack. Switch to a secure network and try to connect again.
    
-   #### How can I simplify the connection command with an SSH config file?
    
    To simplify the connection command, create and configure an SSH `config` file on your local machine to set an alias for your server.
    
    1.  Find or create the config file.
        
        ## Windows 10/11
        
        The default path of the config file is `C:\Users\YourUsername\.ssh\config`. If the file does not exist, create it manually.
        
        > Replace `YourUsername` with your current Windows username.
        
        ## macOS
        
        The default path of the config file is `~/.ssh/config`. If the file does not exist, create it manually.
        
    2.  Edit the config file and add instance information.
        
        Open the `config` file in a text editor and add a `Host` block for each server.
        
        ```
        # Configure an alias "web-server" for the web server
        Host web-server
            HostName        47.98.xxx.xxx
            User            root
            Port            22
            # (Optional) If you use a key pair to log on, specify the private key path. Ignore this if you use a password.
            IdentityFile    /path/to/your/private_key.pem
        
        # You can add more configurations for other servers
        Host other-server
            HostName        8.123.xxx.xxx
            User            ecs-user
            Port            2222
            IdentityFile    ~/.ssh/another_key.pem
        ```
        
        **Parameter description:**
        
        -   **Host**: A custom alias for the server.
            
        -   **HostName**: The instance's public IP address.
            
        -   **User**: The logon username.
            
        -   **Port**: The SSH port number (default is 22).
            
        -   **IdentityFile**: The absolute path to the private key file.
            
    3.  Connect using the alias.
        
        Save the `config` file. You can now connect using the alias.
        
        ```
        # Connect directly using the alias. SSH automatically reads the IP address, username, and key information from the config file.
        ssh web-server
        ```
        
-   #### Why do I get a `Connection timed out` error?
    
    This error occurs when the client fails to establish a connection with the server. Check the following:
    
    1.  The public IP address is correct.
        
    2.  The security group allows traffic on the required port.
        
    3.  The instance is Running.
        
    4.  Use the [ECS console - Self-service Troubleshooting](https://ecs.console.alibabacloud.com/activeDiagnosis/region) tool to diagnose any issues.
        
-   #### Why do I get a `Permission denied, please try again` error?
    
    This error means the server rejected your password. Check the following:
    
    1.  [Reset the password](/help/en/ecs/user-guide/instance-logon-credential-management#0125b54267ba1) in the console and try again.
        
    2.  Use the [ECS console - Self-service Troubleshooting](https://ecs.console.alibabacloud.com/activeDiagnosis/region) tool to diagnose any issues.
        
-   #### Why do I get a `Permission denied (publickey)` error?
    
    This error means the server rejected your key. Check the following:
    
    1.  [Bind](/help/en/ecs/user-guide/instance-logon-credential-management#939ea2f00ekaf) the key pair again in the console and retry.
        
    2.  The patch to the private key file is correct. The private key matches the key pair associated with the instance.
        
    3.  (On macOS) The private key file permissions are `400` or `600`.
        
    4.  Use the [ECS console - Self-service Troubleshooting](https://ecs.console.alibabacloud.com/activeDiagnosis/region) tool to diagnose any issues.
        
-   #### Why do I get a `WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!` error?
    
    This SSH security feature triggers when the server's host key fingerprint changes after your first connection. This can happen if you change the system disk, reinstall the operating system, or delete the host key files on the instance.
    
    **Solution:** [Verify the host key fingerprint of the instance](#66719a5b83n6e). If it is correct, run the following command on your local machine to remove the outdated fingerprint.
    
    ```
    ssh-keygen -R <instance_public_IP_address>
    ```
