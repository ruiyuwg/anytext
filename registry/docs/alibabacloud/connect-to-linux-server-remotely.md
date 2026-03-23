You can connect to your Linux server using a browser, an SSH client, or a rescue connection, depending on your needs.

**Connection method**

**Recommended scenario**

Workbench (Recommended)

Connect to your server quickly and easily through a browser without installing a client.

SSH client

Supports key pair logon. Suitable for frequent or long-duration connections.

VNC rescue connection

Use this for emergencies, such as when the SSH service is abnormal or you cannot log on remotely. It can be used for troubleshooting.

## **Method 1: Connect using Workbench (Recommended)**

1.  Log on to the [Simple Application Server console](https://swas.console.alibabacloud.com/servers/).
    
2.  In the server list, find the server's card and click **Remote Connection**.
    
3.  In the dialog box that appears, choose one of the following logon methods.
    
    #### One-click logon with Workbench
    
    In the **One-click Logon with Workbench** section, click **Log On Now**.
    
    #### Password logon with Workbench
    
    Click **Log On By Using Other Methods**. Under **Password Logon With Workbench**, click **Log On Now** and enter the `root` user's password.
    
    **Important**
    
    A default password is not provided for the server. Before you log on for the first time, you must [set a password for the server](/help/en/simple-application-server/user-guide/manage-the-password-of-a-server#title-vbl-wll-43r).
    

## **Method 2: Connect using an SSH client**

### Prerequisites

1.  To obtain the public IP address of the server, you can log on to the [Simple Application Server console](https://swas.console.alibabacloud.com/servers/) and find the public **IP Address** on the server card.
    
2.  Prepare your logon credentials. Complete one of the following operations based on the authentication method that you want to use.
    
    -   Password logon: A default password is not provided for the server. Before you log on for the first time, you must [set a password for the server](/help/en/simple-application-server/user-guide/manage-the-password-of-a-server#title-vbl-wll-43r).
        
    -   Key pair logon: To use a key pair, you must first [attach a key pair to the instance](/help/en/simple-application-server/user-guide/manage-key-pairs-linux#title-c1h-4fd-48i).
        

### Password logon

## On Windows (using PuTTY)

1.  [Download and install PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/).
    
2.  Open PuTTY and configure the session.
    
    **Parameter**
    
    **Description**
    
    **Host Name(or IP address)**
    
    Enter **Root@Public IP Address**. Example: `root@121.40.XX.XX`.
    
    **Port**
    
    Enter **22**.
    
    **Saved Sessions**
    
    Enter a session name, such as My-Server, and then click **Save** to save the session for quick logons.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3602946571/p993346.png)
    
3.  Click **Open**. At the command line prompt, enter the server logon password and press the `Enter` key.
    
    > For security, the password characters are not displayed on the command line.
    

## On macOS or Linux (using the built-in terminal as an example)

1.  Open the terminal on your local Linux or macOS computer.
    
2.  Run the following command. Replace `<Public IP address of the server>` with the actual IP address.
    
    ```
    ssh root@<Public IP address of the server>
    ```
    
3.  If you are connecting for the first time, type `yes` and press the `Enter` key to confirm that you trust the server.
    
4.  Enter the server's logon password and press the `Enter` key.
    
    > For security, the password characters are not displayed on the command line.
    

### Key pair logon

## On Windows (using PuTTY)

1.  Download and install [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe) and [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/).
    
2.  Convert the format of the private key file. Use PuTTYgen to convert the `.pem` private key file to the `.ppk` format.
    
    1.  Open PuTTYgen and click **Load**.
        
    2.  Select **All Files (\*.\*)**. Find and select the `.pem` private key file. In the dialog box that appears, click **OK**.![All Files](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5699175661/p272302.png)
        
    3.  Click **Save private key**. In the dialog box, click **Yes**.
        
    4.  Enter a new **File Name** and save the converted private key as a `.ppk` file.
        
    
3.  Open PuTTY and configure the session.
    
    **Parameter**
    
    **Description**
    
    **Host Name(or IP address)**
    
    Enter **Root@Public IP Address**. Example: `root@121.40.XX.XX`.
    
    **Port**
    
    Enter **22**.
    
    **Saved Sessions**
    
    Enter a session name, such as My-Server, and then click **Save** to save the session for quick logons.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3602946571/p993346.png)
    
4.  Configure the private key for authentication.
    
    1.  In the navigation pane on the left, choose **Connection** > **SSH** > **Auth** > **Credentials**.
        
    2.  Under **Private key file for authentication:**, click **Browse**.
        
    3.  Select the `.ppk` private key file you just saved and click **Open**.![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4745905861/p673591.png)
        
5.  Click **Open** to log on.
    

## On macOS or Linux (using the built-in terminal as an example)

1.  Find the saved private key file (in `.pem` format) on your local computer.
    
2.  Run the following command to modify the permissions of the private key file.
    
    Replace `_/test/XXX.pem_` in the command with the actual path to your private key file.
    
    ```
    chmod 400 /test/XXX.pem
    ```
    
3.  Run the following command to connect to the server using the private key.
    
    Replace `_<Public IP address of the Linux server>_` and `_/test/XXX.pem_` with the actual information.
    
    ```
    ssh root@<Public IP address of the Linux server> -i /test/XXX.pem
    ```
    
    If the connection fails and the message `no mutual signature supported` appears, run the following command:
    
    ```
    ssh -o PubkeyAcceptedKeyTypes=+ssh-rsa root@<Public IP address of the Linux server> -i /test/XXX.pem
    ```
    

## Method 3: Connect using rescue logon

If you cannot connect to the server using standard methods such as Workbench or SSH, you can use this method for emergency troubleshooting.

> A rescue connection session has a timeout limit. The default timeout period is 300 seconds. If the connection times out due to inactivity, you must start a new session.

1.  Log on to the [Simple Application Server console](https://swas.console.alibabacloud.com/servers/).
    
2.  On the server card, click **Remote Connection**. In the dialog box that appears, click **Log On By Using Other Methods**.
    
3.  In the **Rescue Logon** section, click **Log On Now**.
    
    > You are automatically redirected to the rescue logon page. If you are not redirected, check your browser settings to ensure that pop-up windows are not blocked.
    
4.  On the VNC logon page, enter the username `root` and press the `Enter` key.
    
5.  Enter the server's logon password and press the `Enter` key.
    
    > For security, the password characters are not displayed.
    
    A successful logon is indicated by a screen similar to the following one.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9554036271/p840362.png)
    
    To copy long text, such as a command or a file download URL, from your local device to the server, you can use the **Copy Command** feature in the upper-right corner of the page.
    

## FAQ

### **Q1: I previously used a key pair to log on. How do I switch to using a password?**

After you attach a key pair to the server and restart it, password logon for the `root` user is disabled by default. To re-enable password logon, [reset the server password](/help/en/simple-application-server/user-guide/manage-the-password-of-a-server#task305).

> You can reset the password to the one that you previously used.

### **Q2: Why can't I connect to the server using rescue logon?**

This may be because the server's vCPU or memory usage is too high, which causes the system to become unresponsive. We recommend that you restart the server during off-peak hours and try to connect again.

For more information about remote connection issues, such as connection timeouts or failures, see [Remote connection FAQ](/help/en/simple-application-server/user-guide/faq-about-remote-connection#concept-2088909).

## **References**

-   [Use Alibaba Cloud Client to connect to a server](/help/en/simple-application-server/user-guide/manage-lightweight-application-servers-through-alibaba-cloud-clients#9ff699e4c4cb0)
    
    You can install Alibaba Cloud Client on your on-premises computer to connect to a server.
    
-   [Set a custom port to connect to a server](/help/en/simple-application-server/user-guide/set-workbench-remote-login-custom-port)
    
    The default remote connection port for a Linux server is `22`. To improve security, you can change the default remote connection port.
