Elastic Compute Service (ECS) instances do not have a default password. If you forget the password, you can [reset](#0125b54267ba1) it. If you do not set a username when creating an instance, the system uses a default username.

**Operating system**

**Default username**

**Description**

Linux

`root`

The superuser for Linux.

Windows

`Administrator`

The superuser for Windows.

**Important**

The `root` user has high-level permissions, and using it directly is a security risk. To mitigate this risk, use `ecs-user` and obtain temporary `root` privileges with `sudo` for sensitive operations.

## **Password management**

### **Reset a password**

Try the online password reset method first because it does not require an instance restart.

#### **Online password reset (no restart required)**

1.  Go to the [ECS console - Instance](https://ecs.console.alibabacloud.com/server/region). select a region and resource group, and then find the target instance.
    
2.  Open the **Reset Instance Password** dialog box.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1730464571/p990366.png)
    
3.  In the **Reset Instance Password** dialog box, configure the following parameters and click **OK**. Wait for the password to be reset. Keep the default values for other parameters.
    
    -   **New Password/Confirm Password**: Enter a new password for the instance. For security, create a strong password that contains uppercase letters, lowercase letters, digits, and special characters.
        
    -   For **Password Reset Method**, select **Online Reset**.
        
        **Important**
        
        If **Online Reset** is unavailable, use another method: [Offline password reset (restart required)](#3638cefb321nb).
        
    
    If the password reset [fails](#94fdedd92c694), use another method: [Offline password reset (restart required)](#3638cefb321nb).
    

#### **Offline password reset (restart required)**

**Important**

An offline password reset requires you to restart the instance for the change to take effect. A restart may interrupt services that are running on the instance. Plan the restart time accordingly.

1.  Go to the [ECS console - Instance](https://ecs.console.alibabacloud.com/server/region). Select a region and resource group, and then find the instance that you want to manage.
    
2.  Follow the on-screen instructions to open the **Reset Instance Password** dialog box.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1730464571/p990366.png)
    
3.  In the **Reset Instance Password** dialog box, configure the following parameters and click **OK**. Wait for the password to be reset.
    
    -   **New Password/Confirm Password**: Enter a new password for the instance. For security, create a strong password that contains uppercase letters, lowercase letters, digits, and special characters.
        
    -   For **Password Reset Method**, select **Offline Reset**.
        
4.  [Restart the instance](/help/en/ecs/user-guide/restart-instances).
    
    You must restart the instance for the new password to take effect. To ensure service stability, restart the instance during off-peak hours.
    
5.  [Connect to the instance by using VNC](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc).
    
    A successful VNC logon indicates that the password was successfully reset in the operating system.
    
    > If you can log on to the instance using VNC but cannot log on using tools such as Workbench, the password was reset successfully. The issue may be with the SSH configuration. For more information, see [Troubleshoot connection failures to a Linux instance](/help/en/ecs/troubleshooting-guidelines-when-you-cannot-remotely-log-on-to-a-linux-instance-through-ssh#b804a3130a393).
    

### **Change a password**

You can change the password online from the console.

#### **Online password reset**

1.  Go to the [ECS console - Instance](https://ecs.console.alibabacloud.com/server/region). Select a region and resource group, and then find the instance that you want to manage.
    
2.  Depending on your console version, open the **Reset Instance Password** dialog box.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1730464571/p990366.png)
    
3.  In the **Reset Instance Password** dialog box, configure the following parameters and click **OK**. Wait for the password to be reset. Keep the default values for other parameters.
    
    -   **New Password/Confirm Password**: Enter a new password for the instance. Create a strong password that contains uppercase letters, lowercase letters, digits, and special characters.
        
    -   **Password Reset Method**: Select **Online Reset**.
        
        **Important**
        
        If **Online Reset** is unavailable, [change the password manually within the instance](#474b344043c9o).
        
    
    If the password reset [fails](#94fdedd92c694), [change the password manually within the instance](#474b344043c9o).
    

#### **Change the password manually within the instance**

## Windows instances

This example uses a Windows Server 2019 instance.

1.  [Log on to the Windows instance using Workbench](/help/en/ecs/user-guide/connect-to-a-windows-instance-through-workbench).
    
2.  Right-click the Start icon ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5556743961/p692599.png), click **Run (R)**, enter `compmgmt.msc`, and then press `Enter`.
    
3.  In the navigation pane on the left, choose **Computer Management** > **Local Users and Groups** > **Users**.
    
4.  Right-click the username for which you want to change the password, such as **Administrator**, and then click **Set Password**.
    
5.  In the **Set Password for Administrator** dialog box, click **Proceed**. Enter a new password in the **New Password** and **Confirm Password** fields.
    
    **Important**
    
    Create a strong password. It must contain uppercase letters, lowercase letters, digits, and special characters.
    
6.  Click **OK**. A confirmation message appears, indicating that the password has been set.
    

## Linux instances

This example uses an Alibaba Cloud Linux 3 instance.

1.  [Log on to the Linux instance using Workbench](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
2.  Run the following command to change the password for a specified user:
    
    > Replace `<username>` with the actual username.
    
    ```
    sudo passwd <username>
    ```
    
3.  Enter the new password and press `Enter`. Re-enter the new password and press `Enter` again.
    
    **Important**
    
    Create a strong password. It must contain uppercase letters, lowercase letters, digits, and special characters.
    
4.  If the password is changed, a message similar to the following is returned:
    
    ```
    passwd: all authentication tokens updated successfully.
    ```
    

## **Key pair management**

When creating an instance, you can bind a key pair that has been [created in or imported to](#999650194f3zy) Alibaba Cloud to log on to the instance. You can also [bind or replace a key pair](#939ea2f00ekaf) later.

A key pair is a more secure credential that can effectively defend against brute-force and dictionary attacks. It consists of a **public key**, which is stored on the instance, and a **private key**, which you must keep secure. To log on to the instance, provide the private key for authentication.

**How key pair authentication works**

The following figure shows the simplified SSH key pair authentication process. After the client initiates a logon request, the server uses the public key to encrypt a random string. The client decrypts this string with the private key and returns it to the server. The server then verifies the identity by comparing the returned string with the original one.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2491733771/CAEQSRiBgIDih.qixBkiIDAzODEwNDI0MWMzYjQ2NDFhMjk0NGQ2ZjE1NzdmZGYw4744283_20241105092700.442.svg)

> To use a key pair with a Windows instance, enable the SSH service on the instance. The console does not support managing key pairs for Windows instances.

### **Create or import a key pair**

## Console

#### **Create a key pair**

1.  Go to the [ECS console - Key Pairs page](https://ecs.console.alibabacloud.com/keyPair/region). In the upper-left corner, select a region and resource group.
    
    > An ECS instance can only be bound to a key pair in the same region.
    
2.  Click **Create SSH Key Pair** and select **Auto-create** as the creation method.
    
3.  Click **OK**.
    
    After the key pair is created, the private key file (_key\_pair\_name_.pem) is automatically downloaded to your local machine.
    

#### **Import a key pair**

**Supported encryption methods for imported key pairs**

-   rsa
    
-   dsa
    
-   ssh-rsa
    
-   ssh-dss
    
-   ecdsa
    

1.  **View the public key for a private key**
    
    ## Local machine runs Linux or macOS
    
    Use the `ssh-keygen` command to extract and display the public key from an existing private key file.
    
    > Replace `<path_to_key_pair>` with the path to your private key file, for example, `/path_to_key_pair/my-key-pair.pem`.
    
    ```
    ssh-keygen -y -f <path_to_key_pair>
    ```
    
    The public key information is returned:
    
    ```
    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABA****+GF9q7rhc6vYrExwT4WU4fsaRcVXGV2Mg9RHex21hl1au77GkmnIgukBZjywlQOT4GDdsJy2nBOdJPrCEBIPxxxxxxxxxx/fctNuKjcmMMOA8YUT+sJKn3l7rCLkesE+S5880yNdRjBiiUy40kyr7Y+fqGVdSOHGMXZQPpkBtojcxxxxxxxxxxx/htEqGa/Jq4fH7bR6CYQ2XgH/hCap29Mdi/G5Tx1nbUKuIHdMWOPvjxxxxxxxxxx+lHtTGiAIRG1riyNRVC47ZEVCxxxxxx
    ```
    
    ## Local machine runs Windows
    
    Perform the following steps to view the public key:
    
    1.  Start [PuTTYgen](https://www.puttygen.com/).
        
    2.  Click **Load**.
        
    3.  Select a `.ppk` or `.pem` file.
        
        PuTTYgen displays the public key.
        
    
2.  #### **Import a key pair (public key)**
    
    1.  Go to the [ECS console - Key Pairs page](https://ecs.console.alibabacloud.com/keyPair/region). In the upper-left corner, select a region.
        
        > An ECS instance can only be bound to a key pair in the same region.
        
    2.  Click **Create SSH Key Pair**, select **Import** as the creation method, and enter the **Public Key**.
        
    3.  Click **OK** to complete the import.
        

## API

-   **Create a key pair:** For more information, see [CreateKeyPair](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createkeypair).
    
-   **Import the public key of a key pair:** For more information, see [ImportKeyPair](/help/en/ecs/developer-reference/api-ecs-2014-05-26-importkeypair).
    

### **Bind or replace a key pair**

## Console

**Note**

Only Linux instances support binding, unbinding, and replacing key pairs in the console.

#### **Bind a key pair when creating an instance**

When you create an instance using the [Custom Launch method](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard), you can set **Logon Credential** to **Key Pair** and then select an existing **Key Pair**.

#### **Bind or replace a key pair**

**Important**

-   Binding or replacing a key pair in the console requires an instance restart for the change to take effect. Restarting the instance may interrupt your services. Plan this operation for a time that minimizes impact.
    
-   You can bind a maximum of one key pair to each instance in the console. To bind multiple key pairs, [manually bind on the instance (no restart required)](#37e30e9edbnv6).
    

## Bind or replace in the console (restart required)

Go to the [ECS console - Instance](https://ecs.console.alibabacloud.com/server/region). In the upper-left corner, select a region and resource group. Find the ECS instance and follow these instructions:

In the **Actions** column, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1730464571/p980893.png)** > **Bind Key Pair**. Select an existing key pair and click **OK**. The change takes effect after you restart the instance.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1730464571/p990372.png)

## Manually bind on the instance (no restart required)

1.  #### **Generate a key pair**
    
    > The steps to generate a key pair vary depending on the tool. This example uses the `ssh-keygen` tool.
    
    Run the following command to generate a key pair.
    
    ```
    ssh-keygen -t rsa -b 2048 -f id_rsa
    ```
    
    **Parameters:**
    
    -   `-t rsa`: Specifies the key type as `rsa`.
        
    -   `-b 2048`: Specifies the key length as 2048 bits.
        
    -   `-f id_rsa`: Specifies the filename and save location for the key pair.
        
    
    The system prompts you to enter a passphrase. This passphrase protects your private key. Setting a passphrase is a recommended security measure. If you do not need a passphrase, press `Enter` to continue.
    
    After the command runs successfully, two files are generated in the current directory:
    
    -   `id_rsa`: Your private key.
        
    -   `id_rsa.pub`: Your public key.
        
    
    **Important**
    
    Keep your private key secure and do not share it with others.
    
2.  #### **Bind the public key to the instance**
    
    After you [log on to the instance using Workbench](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key), follow these steps.
    
    The procedure differs for root and non-root users. Choose the appropriate steps based on your needs.
    
    ## Set the public key for the root user
    
    1.  **Create the** `**authorized_keys**` **configuration file.**
        
        If the `/root/.ssh` directory or the `authorized_keys` file does not exist, run the following commands to create them.
        
        ```
        sudo mkdir /root/.ssh
        sudo touch /root/.ssh/authorized_keys
        ```
        
    2.  **Add the public key.**
        
        Open the `authorized_keys` file with a text editor such as [Vim](/help/en/ecs/user-guide/use-the-vim-editor).
        
        ```
        sudo vim /root/.ssh/authorized_keys
        ```
        
        Paste your public key content into the file. You can add multiple public keys, with each public key on a new line. Save and close the file.
        
    3.  **Set file permissions.**
        
        SSH requires strict permission settings. Incorrect permissions can cause SSH logon to fail.
        
        Run the following commands to set the correct permissions.
        
        ```
        sudo chmod 700 /root/.ssh
        sudo chmod 600 /root/.ssh/authorized_keys
        ```
        
    
    ## Set the public key for a non-root user
    
    1.  **Create the** `**authorized_keys**` **configuration file.**
        
        If the `/root/.ssh` directory or the `authorized_keys` file does not exist, run the following commands to create them.
        
        > In the commands, `<username>` represents the username for which you want to bind the public key.
        
        ```
        sudo mkdir /home/<username>/.ssh
        sudo touch /home/<username>/.ssh/authorized_keys
        ```
        
    2.  **Add the public key.**
        
        Open the `authorized_keys` file with a text editor such as [Vim](/help/en/ecs/user-guide/use-the-vim-editor).
        
        ```
        sudo vim /home/<username>/.ssh/authorized_keys
        ```
        
        Paste your public key content into the file. You can add multiple public keys, with each public key on a new line. Save and close the file.
        
    3.  **Set file permissions.**
        
        SSH requires strict permission settings. Incorrect permissions can cause SSH logon to fail.
        
        Run the following commands to set the correct permissions.
        
        ```
        sudo chown -R <username>:<username> /home/<username>/.ssh
        sudo chmod 700 /home/<username>/.ssh
        sudo chmod 600 /home/<username>/.ssh/authorized_keys
        ```
        
    
3.  #### **Enable public key authentication for the SSH service**
    
    After configuring the public key, enable SSH public key authentication on the server. Otherwise, key-based logon will fail.
    
    1.  Back up the SSH configuration file `/etc/ssh/sshd_config`.
        
        ```
        sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
        ```
        
    
    1.  Open the `/etc/ssh/sshd_config` file with a text editor such as [Vim](/help/en/ecs/user-guide/use-the-vim-editor). Find the `PubkeyAuthentication` parameter and set its value to `yes` to enable public key authentication.
        
        ```
        sudo vim /etc/ssh/sshd_config
        ```
        
    2.  Restart the SSH service to apply the changes.
        
        For Alibaba Cloud Linux 3:
        
        ```
        sudo systemctl restart sshd
        ```
        
        > On some operating systems, such as Ubuntu and Debian, the SSH service is named `ssh` instead of `sshd`. Adjust the command accordingly.
        
        **Important**
        
        If you are connected to the instance over SSH, restarting the service may disconnect you. You can reconnect after the service restarts.
        
    

## API

**Note**

Only Linux instances support binding, replacing, and unbinding key pairs using the API.

-   **Set a key pair when creating an instance**: When you call [RunInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runinstances) to create an instance, set the `KeyPairName` parameter to the name of the key pair.
    
-   **Bind or replace a key pair:** Call [AttachKeyPair](/help/en/ecs/developer-reference/api-ecs-2014-05-26-attachkeypair) and specify the key pair name `KeyPairName` and instance IDs `InstanceIds`.
    
-   **unbind a key pair:** Call [DetachKeyPair](/help/en/ecs/developer-reference/api-ecs-2014-05-26-detachkeypair) and specify the key pair name `KeyPairName` and instance IDs `InstanceIds`.
    

### **Unbind a key pair**

**Important**

Unbinding a key pair in the console requires an instance restart for the change to take effect. Restarting the instance may interrupt your services. Plan this operation for a time that minimizes impact.

## Unbind in the console (restart required)

Go to the [ECS console - Instance](https://ecs.console.alibabacloud.com/server/region). In the upper-left corner, select a region and resource group. Find the ECS instance and follow these instructions:

In the **Actions** column, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1730464571/p980893.png)** > **Unbind Key Pair**, and then click **Unbind**. The change takes effect after you restart the instance.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1730464571/p990378.png)

## Manually unbind on the instance (no restart required)

You can manually purge the public keys stored in the `authorized_keys` file on the instance to unbind a key pair. The path to the `authorized_keys` configuration file varies depending on the user:

-   **root user**: `/root/.ssh/authorized_keys`
    
-   **Non-root user**: `/home/<username>/.ssh/authorized_keys`
    
    Here, `<username>` represents the non-root username.
    

### **Delete a key pair**

## Console

**Important**

You cannot delete a key pair that is bound to an instance.

1.  Go to the [ECS console - Key Pairs page](https://ecs.console.alibabacloud.com/keyPair/region). In the upper-left corner, select a region and resource group.
    
2.  Find the key pair that you want to delete and click **Delete** in the **Actions** column.
    

## API

Call [DeleteKeyPairs](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletekeypairs) and specify the `KeyPairNames` parameter with the names of the key pairs that you want to delete.

## **Multi-user remote logon**

To allow multiple users to access an ECS instance, follow these steps to create a standard user and enable remote access.

## Linux

[Log on to the instance using Workbench](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key) and follow these steps to create a user:

1.  #### **Create a user**
    
    > Replace <username> in the command with the desired username. For example, to create a user named `exampleuser`, run `sudo useradd -m exampleuser`.
    
    ```
    sudo useradd -m <username>
    ```
    
2.  #### **Set a password or key pair**
    
    ## Bind a key pair
    
    1.  **Generate a key pair file on your local machine.**
        
        **Important**
        
        For security reasons, do not create a key pair using ssh-keygen on the instance. Do not save the generated private key on the ECS instance that you want to connect to.
        
        > The steps to generate a key pair vary depending on the tool. This example uses the `ssh-keygen` tool.
        
        Run the following command to generate a key pair.
        
        ```
        ssh-keygen -t rsa -b 2048 -f id_rsa
        ```
        
        **Parameters:**
        
        -   `-t rsa`: Specifies the key type as `rsa`.
            
        -   `-b 2048`: Specifies the key length as 2048 bits.
            
        -   `-f id_rsa`: Specifies the filename and save location for the key pair.
            
        
        The system prompts you to enter a passphrase. This passphrase protects your private key. Setting a passphrase is a recommended security measure. If you do not need a passphrase, press `Enter` to continue.
        
        After the command runs successfully, two files are generated in the current directory:
        
        -   `id_rsa`: Your private key.
            
        -   `id_rsa.pub`: Your public key.
            
        
        **Important**
        
        Keep your private key secure and do not share it with others.
        
    2.  **Bind the public key to the user.**
        
        1.  **Create the** `**authorized_keys**` **configuration file.**
            
            If the `/root/.ssh` directory or the `authorized_keys` file does not exist, run the following commands to create them.
            
            > In the commands, `<username>` represents the username for which you want to bind the public key.
            
            ```
            sudo mkdir /home/<username>/.ssh
            sudo touch /home/<username>/.ssh/authorized_keys
            ```
            
        2.  **Add the public key.**
            
            Open the `authorized_keys` file with a text editor such as [Vim](/help/en/ecs/user-guide/use-the-vim-editor).
            
            ```
            sudo vim /home/<username>/.ssh/authorized_keys
            ```
            
            Paste your public key content into the file. You can add multiple public keys, with each public key on a new line. Save and close the file.
            
        3.  **Set file permissions.**
            
            SSH requires strict permission settings. Incorrect permissions can cause SSH logon to fail.
            
            Run the following commands to set the correct permissions.
            
            ```
            sudo chown -R <username>:<username> /home/<username>/.ssh
            sudo chmod 700 /home/<username>/.ssh
            sudo chmod 600 /home/<username>/.ssh/authorized_keys
            ```
            
        
    3.  **Enable public key authentication for the SSH service.**
        
        After configuring the public key, enable SSH public key authentication on the server. Otherwise, key-based logon will fail.
        
        1.  Back up the SSH configuration file `/etc/ssh/sshd_config`.
            
            ```
            sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
            ```
            
        
        1.  Open the `/etc/ssh/sshd_config` file with a text editor such as [Vim](/help/en/ecs/user-guide/use-the-vim-editor). Find the `PubkeyAuthentication` parameter and set its value to `yes` to enable public key authentication.
            
            ```
            sudo vim /etc/ssh/sshd_config
            ```
            
        2.  Restart the SSH service to apply the changes.
            
            For Alibaba Cloud Linux 3:
            
            ```
            sudo systemctl restart sshd
            ```
            
            > On some operating systems, such as Ubuntu and Debian, the SSH service is named `ssh` instead of `sshd`. Adjust the command accordingly.
            
            **Important**
            
            If you are connected to the instance over SSH, restarting the service may disconnect you. You can reconnect after the service restarts.
            
        
    
    ## Set a password
    
    Run the following command:
    
    > Replace `<username>` with the username for which you want to set the password.
    
    ```
    sudo passwd <username>
    ```
    
    Enter the new password and press `Enter`. Re-enter the new password to confirm and press `Enter`.
    
    If the change is successful, a message similar to the following is displayed:
    
    ```
    passwd: all authentication tokens updated successfully.
    ```
    
3.  #### **(Verification) Log on to the ECS instance as the new user.**
    

## Windows

**Important**

By default, Windows supports a maximum of two concurrent remote connections over Remote Desktop Protocol (RDP). If you need more than two users to log on to a Windows instance at the same time, you must use Microsoft's [Remote Desktop Services](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/remote-desktop-services-overview).

[Log on to the instance using Workbench](/help/en/ecs/user-guide/connect-to-a-windows-instance-through-workbench) and follow these steps:

1.  #### **Create a user**
    
    1.  Open Control Panel, find **User Accounts****,** and click **Change account type****.**
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2640912371/p864595.png)
    
    2.  On the **Manage Accounts** page, click **Add a user account** to go to the **Add a user** page.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2640912371/p864599.png)
    
    3.  On the Add a user page, follow the on-screen instructions to set the username and password for the new user.
        
        > This example creates a user named exampleuser. Set the **User name** as needed.
        
    4.  Click **Next**, and then click **Finish**. The new user is created.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2640912371/p864615.png)
    
2.  #### **Add the new user to the** `**Remote Desktop Users**` **group**
    
    Only users in the Remote Desktop Users group can log on to the instance remotely.
    
    1.  In the search box on the taskbar, search for **Computer Management** and click to open the **Computer Management** window.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2640912371/p864642.png)
    
    2.  Under **System Tools** > **Local Users and Groups** > **Groups**, find the **Remote Desktop Users** group. Double-click it to open the **Remote Desktop Users Properties** page.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2640912371/p864647.png)
    
    3.  Follow the steps shown in the figure.
        
        1.  On the **Remote Desktop Users Properties** page, click **Add**.
            
        2.  Enter the username of the user created in **Step 2** and click **Check Names**. The input box will automatically complete the full name of the user.
            
        3.  Click **OK**. On the **Remote Desktop Users Properties** page, click **Apply** and then **OK**. The user is added to the group.
            
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2640912371/p864654.png)
    
3.  #### **(Verification) Remotely log on to the ECS instance as the new user.**
    

## **FAQ**

#### **Q1: What is the default or initial username for an ECS instance?**

-   **Linux instances:** The default username is `root`. If you selected `ecs-user` during creation, the username is `ecs-user`.
    
-   **Windows instances:** The default username is `Administrator`.
    

#### **Q2: What is the default or initial password for an ECS instance?**

**There is no default password.**

For security purposes, Alibaba Cloud does not assign a default or initial password to ECS instances. If you did not set a password when creating the instance, you must [reset a password](#0125b54267ba1).

#### **Q3: How can I view the instance password?**

Alibaba Cloud does not store your instance password and therefore cannot retrieve them for you.

#### **Q4: How do I recover credentials if I forgot my username or password?**

**Forgot username:** You can find your username using the [reset password](#0125b54267ba1) feature in the console. The username set during instance creation is displayed at the top of the Reset Instance Password dialog box.

**Forgot password:** [Reset a password](#0125b54267ba1).

#### **Q5: Why does the online password reset fail?**

Most failures occur because security software on the instance blocks the password change command sent by Cloud Assistant. Use [Offline password reset](#3638cefb321nb) method instead.

#### **Q6: How do I switch between the root and ecs-user accounts?**

-   **Switching from root to ecs-user**
    
    The option to use `ecs-user` is only available when you create an instance from specific Linux images using the [custom purchase method](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard).
    
    After an instance is created, you cannot directly switch the default user to `ecs-user` . As a workaround, you can create a new user named `ecs-user`, grant it `sudo` permissions, and then [configure it for remote logon](#7a4106ba198pc).
    
-   **Switching from ecs-user to root**
    
    Continue using `ecs-user` and execute privileged commands with `sudo` instead of logging in directly as the `root` user.If you must switch to the `root` user within a logged-in session, log in as `ecs-user` and run the `sudo su` command.
    

> Console features such as offline password reset and binding key pairs only apply to the username that was set when the instance was created.

#### **Q7: How can I enable both SSH key pair and password authentication for a Linux instance?**

You can configure this by modifying the SSH service's `/etc/ssh/sshd_config` file.

-   **Enable SSH key pair authentication (recommended, more secure)**: This is controlled by the `PubkeyAuthentication` option. Set its value to `yes` to enable key pair authentication. Restart the SSH service for the change to take effect.
    
-   **Enable SSH password authentication (not recommended, less secure)**: This is controlled by the `PasswordAuthentication` option. Set its value to `yes` to enable password authentication. Restart the SSH service for the change to take effect.
    

#### **Q8:** How do I set the ECS logon username when creating an instance using Terraform?

The default username for an ECS instance is determined by its image. For example, the default username is root for Linux and Administrator for Windows. When you [Create and use an ECS instance using Terraform](/help/en/ecs/developer-reference/create-and-use-an-ecs-instance-by-using-terraform), you can configure the instance to log on as a non-`root` user using the `login_as_non_root` parameter in the `image_options` block.

-   **Parameter:** `login_as_non_root` (Boolean value).
    
-   **Method:** Set this parameter to `true`.
    
-   **Result:** The instance logon username is set to `**ecs-user**`.
