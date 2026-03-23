Asset fingerprint data helps you understand your assets, quickly find security vulnerabilities, and block threats by accurately identifying the features of your IT resources. Security Center provides the asset fingerprint investigation feature, which collects various types of asset fingerprint data from your servers, such as accounts, ports, and processes. This topic describes how to use the asset fingerprint investigation feature to collect and view asset fingerprint data.

## Version limitations

-   **Subscription**: **Enterprise** or **Ultimate**. If you are using a lower edition, you must [upgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center).
    
    **Note**
    
    The protection edition for the server must be set to the edition that you purchased. For more information, see [Attach a protection edition to a server](/help/en/security-center/user-guide/authorization-number-management#42fe49affaj3r).
    
-   **Pay-as-you-go**: The pay-as-you-go billing method must be enabled for **Host and Container Security**. If this billing method is not enabled, see [Purchase](/help/en/security-center/user-guide/purchase-security-center#5d3a3aef78bqy).
    
    **Note**
    
    The server protection level must be **Host Protection** or **Host and Container Protection**. For more information, see [Attach a protection level to a server](/help/en/security-center/user-guide/authorization-number-management#53d46981942l6).
    

## Data collection methods

Security Center does not automatically collect asset fingerprint data. You must configure automatic periodic collection or start a manual collection task to obtain the latest data.

**Collection method**

**Description**

[Automatic periodic collection](#562a83177dq76)

Security Center can automatically collect asset fingerprint data for all your assets. You can configure the frequency for automatic data collection.

[Manually collect the latest fingerprint data for all assets](#fb6635cbe1r51)

To immediately view the fingerprint data for all your assets, use the **Collect Latest Data** feature.

[Manually collect the latest fingerprint data for a single asset](#29edfde710j00)

To immediately view the fingerprint data for a specific asset, you can use the **Collect Data Now** feature to retrieve the latest data for that asset.

**Important**

The **AI Component** tab on the **Assets** > **Host** page contains three subtabs: **AI Application**, **AI Tools**, and **AI Service**. The data collection methods and data sources are different for each subtab. The following list describes these differences:

-   The **AI Application** subtab displays information collected by the Security Center client about AI applications on your servers.
    
-   The **AI Tools** and **AI Service** subtabs display information about AI tools and services detected by the agentless detection feature. If you do not use the agentless detection feature or have no AI-related assets, no data is displayed.
    

## Collect asset fingerprints

### **Prerequisites**

The Security Center client is installed and online on the servers from which you want to collect data. For more information, see [Install the Security Center client](/help/en/security-center/user-guide/install-the-security-center-agent).

### **Configure automatic periodic collection**

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland****Outside China**.
    
2.  In the left navigation pane, choose **Assets** > **Host**.
    
3.  On the **Assets** > **Host** > **Account** tab, click **Configuration Management**.
    
4.  In the **Configuration Management** dialog box, set the collection frequency for each asset fingerprint type and click **OK**.
    
    **Important**
    
    -   Security Center does not automatically trigger tasks to collect the latest asset fingerprint data. By default, the refresh rate for all asset fingerprints is set to **Disabled**. You can set different refresh rates for different asset fingerprint types.
        
    -   The fingerprint collection frequency for **Middleware**,**Database**, **Web Service**, and **AI Component** is determined by the frequency set for the **Middleware** configuration item.
        
    

After you configure the collection frequency, Security Center automatically triggers asset fingerprint collection tasks at the specified frequency and updates the data on the corresponding asset fingerprint tabs. You can view the latest fingerprint data on these tabs.

### **Manually collect the latest fingerprint data for all assets**

1.  On the **Assets** > **Host** > **Account** tab, click **Collect Latest Data**.
    
2.  In the **Collect Latest Data** dialog box, select the asset fingerprint data to collect and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0079163471/p935291.png)
    
    **Note**
    
    Data collection takes about 1 to 5 minutes.
    

### **Manually collect the latest fingerprint data for a single asset**

1.  On the **Assets** > **Host** > **Server** tab, find the server from which to collect asset fingerprints and click **View** in the **Actions** column.
    
2.  On the asset details page, click the **Asset Fingerprints** tab, and then click the tab for the type of asset fingerprint that you want to collect.
    
    **Important**
    
    The Asset Fingerprint Investigation tab is displayed only for servers protected by Security Center Enterprise or Ultimate Edition.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7270443471/p795618.png)
    
3.  In the upper-right corner, click **Collect Data Now**. In the **Data Collection Task Submitted** dialog box, click **OK**.
    

**Note**

Data collection takes about 1 to 5 minutes.

## View asset fingerprint data

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
2.  In the left navigation pane, choose **Assets** > **Host**.
    
3.  On the **Host** page, you can view the asset fingerprint data.
    
    -   View asset fingerprints for all assets
        
        On the **Host** page, click the tab for an asset fingerprint type, such as **Account**, to view the corresponding data.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0079163471/p935296.png)
        
        -   ①: A list of asset fingerprints. This list includes all asset fingerprints and the number of servers on which each fingerprint is found.
            
        -   ②: The details list for an asset fingerprint. If you click a fingerprint in the list on the left, such as an account name, the details of that fingerprint are displayed in the list on the right.
            
        -   ③: The search component for asset fingerprints. You can enter information in the search box to find a specific fingerprint. Fuzzy match is supported.
            
    -   View asset fingerprints for a single asset
        
        1.  On the **Servers** tab, find the target server and click **View** in the **Actions** column.
            
        2.  On the asset details page, click the **Asset Fingerprint Investigation** tab, and then select the tab for the asset fingerprint type that you want to view.
            
            **Important**
            
            The Asset Fingerprint Investigation tab is displayed only for servers protected by Security Center Enterprise or Ultimate Edition.
            
    

## Asset fingerprint details

**Asset fingerprint type**

**Description**

Account

Information about server accounts. This includes the following items:

-   **Server Information**: The server to which the account belongs.
    
-   **Account**: The name of the account.
    
-   **ROOT Permission**: Indicates whether the account has root permissions.
    
-   **User Group**: The user group to which the account belongs.
    
-   **Expiration Time**: The time when the account password expires.
    
-   **Password Expired**: Indicates whether the account password has expired.
    
-   **Password Locked**: Indicates whether the account password is locked.
    
-   **Account Expired**: Indicates whether the account has expired.
    
-   **Sudo Account**: Indicates whether the account has sudo permissions.
    
-   **Interactive Logon Account**: Indicates whether the account has logon permissions.
    
-   **Last Logon**: The last time the account was used to log on to the server.
    
-   **Last Scan Time**: The last time Security Center collected this type of information from the server.
    

Port

Information about the external ports of a server. This includes the following items:

-   **Server Information**: The server where the port is located, including the server name and IP address.
    
-   **Port**: The listener port number.
    
-   **Network Protocol**: The network protocol used by the listener port.
    
-   **PID**: The identifier of the running process on the server that corresponds to the listener port.
    
-   **Associated Process**: The running process on the server that corresponds to the listener port.
    
-   **IP**: The IP address of the network interface card (NIC) to which the listener port is attached.
    
-   **Last Scan Time**: The last time Security Center collected listener port information.
    

Process

Information about server processes. This includes the following items:

-   **Server Information**: The server where the process is running, including the server name and IP address.
    
-   **Process Name**: The name of the process.
    
-   **Process Path**: The startup path of the process.
    
-   **Startup Parameter**: The startup parameters of the process.
    
-   **Start Time**: The start time of the process.
    
-   **Running User**: The user who started the process.
    
-   **Running Permission**: The permissions of the user who started the process.
    
-   **PID**: The ID of the process.
    
-   **Parent Process PID**: The ID of the parent process that started the process.
    
-   **File MD5**: The MD5 hash of the process file.
    
-   **Package Process**: Indicates whether the process is from an installation package.
    
-   **Process Status**: The current status of the process.
    
-   **Last Scan Time**: The last time Security Center collected this type of information from the server.
    

Middleware

Information about middleware on the server. Middleware refers to independently runnable system components, such as MySQL (database) and Docker (container component). This includes the following items:

-   **Server Information**: The server where the middleware is located, including the server name and IP address.
    
-   **Middleware**: The name of the middleware.
    
-   **Type**: The type of the middleware.
    
-   **Runtime Environment Version**: The version of the middleware runtime environment.
    
-   **Version**: The version number of the original middleware.
    
-   **PID**: The ID of the middleware startup process.
    
-   **Startup Path**: The startup path of the middleware.
    
-   **Version Authentication Information**: The method used to obtain the middleware version.
    
-   **Parent Process PID**: The ID of the parent process that started the middleware.
    
-   **Running User**: The user who started the middleware.
    
-   **Listener IP**: The IP address on which the middleware starts to listen.
    
-   **Listener Port**: The port on which the middleware starts to listen.
    
-   **Listener Status**: The current listener status of the middleware.
    
-   **Listener Port Protocol**: The network protocol of the current listener port of the middleware.
    
-   **Start Time**: The start time of the middleware.
    
-   **Process Command Line**: The parameters of the command that is run to start the middleware.
    
-   **Container Name**: The name of the container where the middleware is located.
    
-   **Image Name**: The name of the image where the middleware is located.
    
-   **Configuration Path**: The absolute path where the middleware startup configuration is located.
    
-   **Last Scan Time**: The last time Security Center collected this type of information from the server.
    

AI Components

**AI Applications**: Information about AI applications on your servers that is collected by the Security Center client. AI components are basic functional modules that make up an artificial intelligence system, such as data modules, model modules, and inference modules. This includes the following information:

-   **Server Information**: The server where the AI component is located, including the server name and IP address.
    
-   **AI Component**: The name of the AI component.
    
-   **Type**: The type of the AI component.
    
-   **Version**: The version of the AI component.
    
-   **PID**: The ID of the AI component process.
    
-   **Startup Path**: The startup path of the AI component.
    
-   **Version Authentication Information**: The method and path used to obtain the AI component version.
    
-   **Parent Process PID**: The ID of the parent process that started the AI component.
    
-   **Running User**: The system user account to which the process started by the AI component belongs.
    
-   **Listener IP**: The network address to which the AI component is attached. A value of 0.0.0.0 indicates that the service listens on the specified port of all IPv4 network interfaces. A value of :: indicates that the service listens on the specified port of all IPv6 network interfaces.
    
-   **Listener Port**: The port on which the AI component starts to listen.
    
-   **Listener Status**: The current listener status of the AI component.
    
-   **Listener Port Protocol**: The network protocol of the current listener port of the AI component.
    
-   **Start Time**: The start time of the AI component.
    
-   **Startup Command Line**: The complete startup command and parameters for the AI component process.
    
-   **Container Name**: The name of the container instance where the AI component is located.
    
-   **Image Name**: The full path of the image in the image repository.
    
-   **Configuration Path**: A list of absolute paths to the key configuration files of the AI component.
    
-   **Last Scan Time**: The last time Security Center collected this type of information from the server.
    

**AI Tools**: Information about AI tools detected in ECS instances, and images by the agentless detection feature.

AI tools are software libraries and framework components used to develop, train, deploy, or call artificial intelligence models. These tools are usually Python packages and are fundamental to building and running large model applications. This includes the following information:

-   Server Information: The server where the AI tool is located, including the server name and IP address.
    
-   AI Tool: The name of the AI tool.
    
-   Version: The version number of the AI tool.
    
-   Installation Path: The installation path of the AI tool.
    
-   Last Scan Time: The last time the agentless detection feature scanned this information.
    

**AI Services**: Information about AI services detected in ECS instances, and images by the agentless detection feature.

AI services are large language model (LLM) interfaces provided by external platforms. They can be called over the network to implement AI features such as AI chat, code generation, and image understanding. This includes the following information:

-   Server Information: The server where the AI service is located, including the server name and IP address.
    
-   AI Service: The name of the AI service.
    
-   Endpoint: The interface address that provides access to the AI service.
    
-   File Location: The configuration file path of the AI service.
    
-   Last Scan Time: The last time the agentless detection feature scanned this information.
    

Database

Information about databases on the server. This includes the following items:

-   **Server Information**: The server where the database is located, including the server name and IP address.
    
-   **Database Name**: The name of the database.
    
-   **Type**: The type of the database.
    
-   **Version**: The version number of the database.
    
-   **PID**: The ID of the database startup process.
    
-   **Startup Path**: The startup path of the database.
    
-   **Version Authentication Information**: The method used to obtain the database version.
    
-   **Parent Process PID**: The ID of the parent process that started the database.
    
-   **Running User**: The user who started the database.
    
-   **Listener IP**: The IP address on which the database starts to listen.
    
-   **Listener Port**: The port on which the database starts to listen.
    
-   **Listener Status**: The current listener status of the database.
    
-   **Listener Port Protocol**: The network protocol of the current listener port of the database.
    
-   **Start Time**: The start time of the database.
    
-   **Startup Command Line**: The parameters of the command that is run to start the database.
    
-   **Container Name**: The name of the container where the database is located.
    
-   **Image Name**: The name of the image where the database is located.
    
-   **Configuration Path**: The absolute path where the database startup configuration is located.
    
-   **Last Scan Time**: The last time Security Center collected this type of information from the server.
    

Web Service

Information about web services. This includes the following items:

-   **Server Information**: The server where the web service is located, including the server name and IP address.
    
-   **Web Service Name**: The name of the web service.
    
-   **Type**: The type of the web service.
    
-   **Runtime Environment Version**: The version of the JDK runtime environment for the web service.
    
-   **Version**: The version number of the web service.
    
-   **PID**: The ID of the web service startup process.
    
-   **Startup Path**: The startup path of the web service.
    
-   **Version Authentication Information**: The method used to obtain the version.
    
-   **Parent Process PID**: The ID of the parent process that started the web service.
    
-   **Running User**: The user who started the web service.
    
-   **Listener IP**: The IP address on which the web service starts to listen.
    
-   **Listener Port**: The port on which the web service starts to listen.
    
-   **Listener Status**: The current listener status of the web service.
    
-   **Listener Port Protocol**: The network protocol of the current listener port of the web service.
    
-   **Start Time**: The start time of the web service.
    
-   **Startup Command Line**: The parameters of the command that is run to start the web service.
    
-   **Container Name**: The name of the container where the web service is located.
    
-   **Image Name**: The name of the image where the web service is located.
    
-   **Configuration Path**: The absolute path where the web service startup configuration is located.
    
-   **Web Directory**: The path of the web configuration page.
    
-   **Last Scan Time**: The last time Security Center collected this type of information from the server.
    

Software

Information about software assets. This includes the following items:

-   **Server Information**: The server where the software is located, including the server name and IP address.
    
-   **Software Name**: The name of the software.
    
-   **Version**: The version number of the software.
    
-   **Software Startup Path**: The startup path of the software.
    
-   **Software Update Time**: The time when the software version was updated.
    
-   **Last Scan Time**: The last time Security Center collected software information.
    

Scheduled Task

Information about the paths of tasks that are periodically run on your server. This includes the following items:

-   **Server Information**: The server where the scheduled task is located, including the server name and IP address.
    
-   **Command**: The command line that is run for the scheduled task.
    
-   **Task Schedule**: The schedule of the scheduled task.
    
-   **MD5**: The MD5 hash of the scheduled task process.
    
-   **Account Name**: The account that starts the task.
    
-   **Last Scan Time**: The last time Security Center collected this type of information from the server.
    

Startup Item

Information about startup items. This includes the following items:

-   **Server Information**: The server where the startup item is located, including the server name and IP address.
    
-   **Startup Item Path**: The path where the startup service is located.
    
-   **Last Scan Time**: The last time Security Center collected this type of information from the server.
    

Kernel Module

Information about kernel modules. This includes the following items:

-   **Server Information**: The server where the kernel module is located, including the server name and IP address.
    
-   **Module Name**: The name of the kernel module.
    
-   **Module Size**: The size of the kernel module file.
    
-   **Module File Path**: The path where the kernel module is located.
    
-   **Number Of Dependent Modules**: The number of other dependent modules.
    
-   **Last Scan Time**: The last time Security Center collected this type of information from the server.
    

Web Site

Information about web sites. This includes the following items:

-   **Server Information**: The server where the web site is located, including the server name and IP address.
    
-   **Domain Name**: The domain name configured for the web site.
    
-   **Site Type**: The type of software used by the web service.
    
-   **Port**: The listener port of the web service.
    
-   **Web Path**: The path of the WebHome directory.
    
-   **Web Root Path**: The path of the root directory in the web configuration.
    
-   **User**: The user who started the web service.
    
-   **Directory Permission**: The permissions of the web directory.
    
-   **Listener Protocol**: The listener protocol started by the web service.
    
-   **PID**: The ID of the process.
    
-   **Start Time**: The start time of the web service.
    
-   **Image Name**: The name of the image where the web site is located.
    
-   **Container Name**: The name of the container where the web site is located.
    
-   **Last Scan Time**: The last time Security Center collected this type of information from the server.
    

## **References**

-   To view detailed information about the security status of an asset, you can view the server details in Asset Center. For more information, see [Manage servers](/help/en/security-center/user-guide/manage-servers#section-tyj-o4j-0mf).
    
-   For more information about the IDC probe discovery feature, see [Connect to IDC assets](/help/en/security-center/user-guide/add-a-server-in-a-data-center-to-security-center).
