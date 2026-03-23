This topic describes how to resolve the issue that the following error message appears when you connect to a Windows Elastic Compute Service (ECS) instance by using Remote Desktop: The remote session was disconnected because there are no Remote Desktop License Servers available to provide a license.

## **Problem description**

When you try to connect to a Windows instance through Remote Desktop, the connection fails after you enter the correct username and password. The following error message is displayed.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4487352371/p872328.png)

## **Cause**

The Windows Server operating system allows up to two simultaneous Remote Desktop connection sessions by default. If more than two sessions are needed, or if device or user access control is required, Remote Desktop Services (RDS) must be installed, and Remote Desktop Services Client Access Licenses (RDS CALs) must be purchased and configured.

Following the RDS installation, the system enters a 120-day free trial license with the initial remote desktop connection. During this period, users can connect through Remote Desktop without purchasing RDS CALs. By default, multiple simultaneous Remote Desktop connection sessions are supported. Once the free trial period expires, RDS CALs must be purchased and configured for Remote Desktop connections. Otherwise the above error message appears.

## **Solutions**

-   If no more than two simultaneous remote connection sessions are required, select [Solution 1: Remove the role related to Remote Desktop Services](#eaf3894095nqd) to restore the default remote connection settings of the system.
    
-   If more than two simultaneous remote connection sessions are needed, or if device or user access control for remote connections is required, select [Solution 2: Purchase and configure RDS CALs for authorization](#a21ad36095qzz).
    

### **Solution 1: Remove the role related to Remote Desktop Services**

This section demonstrates how to remove the server role related for Remote Desktop Services using Windows Server 2016 as an example.

1.  Connect to the Windows ECS instance. For more information, see [Choose a connection method](/help/en/ecs/user-guide/connect-to-instance).
    
2.  Right-click ![开始](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6708271271/p508837.png), select **Run**, type `servermanager` in the dialog box, and click **OK**.
    
3.  In the **Server Manager** window, remove the role related to Remote Desktop Services.
    
    1.  Navigate to **Manage > Remove Roles and Features**. ![删除远程桌面zh.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4487352371/p872340.png)
        
    2.  On the **Server Selection** page, keep the default Windows instance selected and click **Next**.
        
    3.  On the **Server Roles** page, uncheck **Remote Desktop Services**, confirm in the dialog box by clicking **Remove Features**, and then click **Next**. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4487352371/p872235.png)
        
    4.  On the **Features** page, uncheck **Remote Server Administration Tools** and click **Next**.
        
    5.  Click **Remove** on the **Confirmation** page.
        
    6.  Monitor the progress of the removal task on the **Results** page.
        
4.  Restart the Windows instance after the removal task is completed.
    
    -   Method 1: Restart the instance through the ECS console. For more information, see [Restart an instance](/help/en/ecs/user-guide/restart-instances).
        
    -   Method 2: On the Windows instance desktop, right-click ![开始](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6708271271/p508837.png)**,** select **Shut down or sign out > Restart**.
        
5.  Try to connect to the Windows instance by using the Remote Desktop connection tool or Workbench. For more information, see [Connect to Windows](/help/en/ecs/user-guide/connect-to-a-windows-instance-through-workbench).
    

### **Solution 2:** Purchase and configure RDS CALs for authorization

Purchase and configure the appropriate RDS CALs for authorization. For more information, see [Activate RDS licenses](/help/en/ecs/user-guide/apply-for-multi-user-session-license-and-activate-windows-ecs-instance).
