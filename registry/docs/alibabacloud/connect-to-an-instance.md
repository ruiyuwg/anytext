HoloWeb is a data processing and development tool provided by Hologres. This topic describes how to use HoloWeb to connect to a Hologres instance.

## Prerequisites

-   You have registered an Alibaba Cloud account.
    
-   You have completed identity verification.
    
-   You have activated Hologres. For more information, see [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#task-1918224).
    

## Connect to an instance

1.  Log on to the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance).
    
2.  In the navigation pane on the left of the top menu bar, select the desired region.
    
3.  You can click **Go to HoloWeb** to go to the HoloWeb development page.
    
4.  Click **Metadata Management**, then click **Instances**.
    
5.  You can configure the parameters in the **Instances** dialog box and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Required**
    
    Network type
    
    -   **Public Network**: Supported in China (Shanghai), China (Shenzhen), China (Beijing), China (Hangzhou), China (Zhangjiakou), Singapore, China (Hong Kong), Malaysia (Kuala Lumpur), Indonesia (Jakarta), and US (Silicon Valley).
        
        An instance with the ![公网实例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8429393261/p273449.png) icon uses the public network type.
        
    -   **VPC**: Only supported in the region where HoloWeb is logged on.
        
        An instance with the ![VPC网络](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3229393261/p273444.png) icon uses the VPC type. You cannot edit its details or delete it.
        
    
    No
    
    Instance name
    
    Select an instance that has been created under your current account.
    
    **Note**
    
    After purchasing an instance, HoloWeb may take time to load the instance information. If the instance name does not appear immediately, manually configure connection details such as the **Domain Name** to connect to the target instance.
    
    No
    
    Name
    
    If you select an **Instance Name**, the **Name** field defaults to the selected instance name. You can also customize the connection name.
    
    Yes
    
    Description
    
    A description for the connection.
    
    No
    
    Domain name
    
    The network domain name of the Hologres instance.
    
    You can go to the instance details page in the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance) and obtain the domain name from the **Network Information** section.
    
    If you select an **Instance Name**, the system automatically fills in the corresponding **Domain Name**. You can also enter the domain name manually.
    
    Yes
    
    Port
    
    The network port of the Hologres instance.
    
    You can navigate to the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance) instance details page and obtain the port from the **Network Information**.
    
    If you select an **Instance Name**, the system automatically fills in the corresponding **Port**. You can also enter the port number manually.
    
    Yes
    
    Logon method
    
    -   **Password-free Logon**: Log on directly using your current account without entering a username or password.
        
    -   **Password Logon**: Enter the username and password of your account or another account to log on.
        
    
    Yes
    
    Username
    
    This parameter is required only if you set logon method to logon with account and password.
    
    The AccessKey ID for the current account.
    
    You can obtain your AccessKey ID from [AccessKey Management](https://usercenter2-intl.console.alibabacloud.com/?spm=5176.2020520153.nav-right.dak.3bcf415dCWGUBj#/manage/ak).
    
    No
    
    Password
    
    This parameter is required only if you set logon method to logon with account and password.
    
    Enter the AccessKey secret of your current account.
    
    No
    
    Test connectivity
    
    Check whether the connection succeeds:
    
    -   If **The test is successful.** appears, the connection succeeded.
        
    -   If **The test failed.** appears, the connection failed.
        
    
    No
    
    Log on after connecting
    
    Choose whether to log on to the instance after connecting.
    
    -   **Yes**: The instance logs on and appears in the logged-on instances list on the left.
        
    -   **No**: The instance appears in the not logged-on instances list on the left.
        
    
    Yes
    
6.  After the connection is established, click the ![Refresh](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0610148951/p117260.png) icon to the right of **Instance Management** to refresh the current instance list. Click **Logged-in Instances** to view the related information.
    
    You can right-click a target instance to manage it. For more information about instance management, see [Manage instances](/help/en/hologres/user-guide/manage-instances#task-2079639).
