You can use the Simple Application Server console or Remote Desktop Connection (RDC) on your on-premises Windows device to connect to a Windows simple application server. This topic describes how to connect to a Windows server.

## Prerequisites

-   The Windows server to which you want to connect is in the **Running** state.
    
-   The password of the Windows server is configured. For more information, see [Set or reset the password of a server](/help/en/simple-application-server/user-guide/manage-the-password-of-a-server#task305).
    

## Procedure

You can connect to a simple application server by using Workbench or VNC in the Simple Application Server console. You can also connect to a Windows server by using RDC on an on-premises Windows device. You can choose a connection method based on your requirements.

For information about the differences between Workbench connection and VNC connection, see [Overview of remote connection methods](/help/en/simple-application-server/user-guide/overview-of-remote-connection-methods#section-sl9-elf-jn3).

## Use Workbench to connect to the server in the Simple Application Server console

You can use this method when you connect to the server by using the administrator account.

1.  Go to the [Servers page](https://swas.console.alibabacloud.com/servers/) in the Simple Application Server console.
    
2.  In the server card, click **Connect** to connect to the server.
    
    You can also click the server ID in the server card to connect to the server on the **Remote Connection** tab.
    
3.  In the Remote Connection dialog box, click **Log on Now** in the **Password-based Logons on Workbench** section, and enter `administrator` and password of the Windows server.
    
    **Note**
    
    If you use Workbench to connect to a server, you can set a custom port for the connection. For more information, see [Modify the remote connection port of a Windows server](/help/en/simple-application-server/user-guide/set-workbench-remote-login-custom-port#b65163b20e01o).
    
4.  Click **OK**.
    

## Connect to a server in the Simple Application Server console by using the rescue feature

You can use this method when the server to which you want to connect is running but the operating system of the server is not booted.

1.  Go to the [Servers page](https://swas.console.alibabacloud.com/servers/) in the Simple Application Server console.
    
2.  In the server card, click **Connect** to connect to the server.
    
    You can also click the server ID in the server card to connect to the server on the **Remote Connection** tab.
    
3.  In the Remote Connection dialog box, click **Log on By Using Other Methods**. In the **Rescue Logon** section, click **Log on Now**, and enter the account name and password of the Windows server.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1250626071/p756453.png)
    
4.  (Optional) Click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1250626071/p696945.png) icon and select **CTRL+ALT+DELETE**.
    
    **Note**
    
    If the desktop of the Windows server is not locked, skip this step.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1250626071/p696942.png)
    
5.  On the Windows administrator logon page, enter the logon password of the server and press the `Enter` key.![win2012登录界面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2441175661/p284637.png)
    

## Use Microsoft Terminal Services Client (MSTSC) to connect to a Windows server

1.  Start RDC on your on-premises Windows device.
    
    On the Windows desktop, press `Win+R`, enter `mstsc`, and then click **OK**.
    
2.  In the **Remote Desktop Connection** dialog box, click **Show Options** and configure the Windows server.
    
    You must specify the following parameters and can optionally specify other parameters:
    
    -   Computer: Enter the public IP address of the Windows server.
        
    -   User Name: Enter `Administrator`, which is the default username of the Windows server.
        
    
3.  Click **Connect**. Then, enter the password that corresponds to the default username and click **OK**.
    
    -   If you forget the password, reset the password and try again. For more information, see [Set or reset the password of a server](/help/en/simple-application-server/user-guide/manage-the-password-of-a-server#task305).
        
    -   If an authentication error occurs when you attempt to connect to the Windows server, you must manually troubleshoot and resolve the error. For more information, see [How to handle an authentication error when connecting to a Windows instance remotely](/help/en/ecs/how-to-handle-an-authentication-error-when-connecting-to-a-windows-instance-remotely).
        
4.  When you connect to the server for the first time, you may receive a certificate error prompt. Select **Don't ask me again for connections to this computer** and click **Yes**.
    
    After you connect to the Windows server, the Windows remote desktop appears, as shown in the following figure.![windows桌面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5955931261/p264234.png)
