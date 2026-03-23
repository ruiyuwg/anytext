A backup gateway is a client that you install on a database server. The backup gateway backs up local databases to Data Disaster Recovery, performs physical backups and restores, and automatically downloads backup sets to self-managed servers. This topic describes how to install a backup gateway.

## Scenarios

## Server backup gateways

**Scenario**

**Description**

**Feature**

Physical backup

[Physical backup](/help/en/dms/getting-started/preparations-1#p-h00-xp5-dd0) is a backup performed at the database file level. The backup includes the database files on the operating system.

The backup gateway starts a process on the database server. This process receives operation tasks and backup schedule configurations that you run in the DBS console. The process also backs up and restores the database.

Private network backup

If your database is in a private network, such as a database in an on-premises data center or in a private network from another cloud provider, DBS cannot directly access and back up the database.

The backup gateway can act as an intermediary. It actively accesses the DBS server and cloud-based OSS. This solves the problem of DBS being unable to directly access the private network database.

Automatic download of backup sets

DBS supports automatic download of backup sets to a local server.

The backup gateway regularly accesses cloud storage to download backup sets to your local server. This ensures data security and reliability.

**Note**

You only need to install the backup gateway on the database server.

## Backup gateways in a bastion host architecture

If your company's database is on an internal network and cannot connect to the internet, you can install a proxy gateway on a bastion host and then install a backup gateway on the database host to back up data. The procedure is as follows:

**Step**

**Description**

[Install a proxy gateway on a bastion host](#section-612-wub-9m1)

**Install a proxy gateway on a bastion host.**

During a backup, the proxy gateway receives data from the database host where the backup gateway is located. It then forwards the data to DBS cloud storage over the internet. During a restore or database download, the proxy gateway can also receive data from DBS cloud storage and forward it to the database host.

[Install a backup gateway](#c946a80013rty)

**Install a backup gateway on the database server. During installation, enter the IP address of the proxy gateway, which is the private IP address of the bastion host.**

The backup gateway is backup software installed on the database host. During a backup, it connects to and queries the database. It then sends the backup data to the bastion host where the proxy gateway is installed. During a restore, the backup gateway gets data from the external network through the proxy gateway and writes the data to the database.

## **Prerequisites**

-   Ensure that the Java environment is installed on the database server. The following requirements must be met:
    
    -   **Linux server**: You must install Java Runtime Environment (**JRE**) **1.8**. You can download and install it from the [official website](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html).
        
    -   **Windows server**: You must install Java SE Development Kit (**JDK**) **version 8u261**. You can visit [the official website](https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html) to download and install it. Other versions cause the backup precheck to fail.
        
    
    **Note**
    
    Run the `java -version` command in the command line window to confirm that the Java version is correct.
    
-   The user has performed the following actions:
    
    -   When an **AccessKey** is created, an **AccessKey ID** and an **AccessKey Secret** are generated. The AccessKey is used to verify the identity of the client gateway and register it with the Data Disaster Recovery console. For more information, see [Create an AccessKey](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair#task-354412).
        
    -   If you use a Resource Access Management (RAM) user to add a backup gateway, the RAM user must have the AliyunDBSFullAccess and AliyunOSSFullAccess permissions. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
        
        **Note**
        
        -   By default, these permissions are granted to your Alibaba Cloud account when you activate DBS.
            
        -   After the backup gateway is added, it is visible to all users under your account in the DBS console.
            
        
-   Ensure that more than 1 GB of disk space is available in the server installation path and that you have the following server permissions:
    
    -   Linux: root permissions.
        
    -   Windows: administrator permissions.
        
-   To back up an SQL Server database, you must assign the Sysadmin role to the NT AUTHORITY\\SYSTEM account. You can do this by running the following SQL command :
    
    ```
    ALTER SERVER ROLE [sysadmin] ADD MEMBER [NT AUTHORITY\SYSTEM]
    GO
    ```
    
    **Note**
    
    By default, the NT AUTHORITY\\SYSTEM account is used to start AliyunDBSAgent.
    

## **Precautions**

-   If you have previously installed a backup gateway and want to reinstall it, we recommend that you first uninstall the previous backup gateway, delete the `dbs_agent` backup folder, and clean up the environment before you perform a new installation. For more information, see [Upgrade or uninstall a gateway](#section-7c5-z7l-xhk).
    
-   Some earlier versions of backup gateways have the Apache Log4j2 remote code execution (RCE) vulnerability. For more information, see [Alibaba Cloud Statement on the Impact Assessment of Apache Log4j2 RCE Vulnerability (CVE-2021-44228)](https://www.alibabacloud.com/zh/notice/log4j2impact). We recommend that you update a backup gateway of version 0.0.129 or earlier to the latest version as soon as possible and reconnect to the backup gateway for your physical backup schedule. For more information, see [Upgrade or uninstall a backup gateway](#section-7c5-z7l-xhk).
    

## **Installation methods**

The backup gateway automatically selects a graphical or command-line installation method based on the system environment. You can also install the backup gateway in unattended mode.

**Note**

By default, the graphical installation method is preferred. For example, the system checks whether the current environment supports a graphical user interface (GUI), such as Windows or GNOME/KDE on Linux. The command-line method is used only if a GUI is not supported.

#### **Install using the GUI**

1.  Log on to the [DMS console 5.0](https://dms.alibabacloud.com/new).
    
2.  Move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner and choose **All Features** > **Security and disaster recovery (DBS)** > **Data Disaster Recovery (DBS)** > **Backup Gateway**.
    
    **Note**
    
    If you use the DMS console in normal mode, choose **Security and disaster recovery (DBS)** > **Data Disaster Recovery (DBS)** > **Backup Gateway** in the top navigation bar.
    
3.  In the upper-right corner of the page, click **Add Backup Gateway**.
    
4.  Copy the Windows backup gateway installation command and run the command in the Windows command line window.
    
    ![执行安装命令](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1687007161/p207359.png)
    
    **Note**
    
    After the download is complete, the installation package runs automatically. Follow the steps in the installation wizard.
    
    1.  Select an installation language and click **Next**.
        
    2.  Review and accept the agreement, and then click **Next**.
        
    3.  Select **DBS Backup Gateway** and click **Next**.
        
        **Note**
        
        This example uses a **DBS Backup Gateway** to connect to on-premises data. To connect to data on a bastion host, see [Backup gateways of the bastion host architecture](#f71630f622jj1).
        
    4.  Select an installation path. Click **Next**, and then click **Confirm**.
        
    5.  Confirm the **Agent Region**, enter the **AccessKey ID** and **AccessKey Secret**, and then click **Next**.
        
        **Note**
        
        -   Ensure that the **Agent Region** is the one closest to your database. To change the region, select a destination region.
            
        -   The AccessKey information is stored in plaintext in the `.\config\dbs-agent.conf` file in the installation directory.
            
        -   If you use a bastion host architecture, enter the host's private IP address in the **Database Gateway Address** text box. The **Database Gateway Port** defaults to 9797. For more information, see [Backup gateways of the bastion host architecture](#f71630f622jj1).
            
        
    6.  Confirm the component package selection and click **Next**.
        
        The software begins to install. The installation takes 1 to 5 minutes.
        
    7.  When the installation finishes, click **Next**.
        
    8.  Click **Done**. The backup gateway installation is complete.
        
5.  In the Windows Run window, enter `services.msc` and click **OK** to open the Service Manager.
    
6.  In Service Manager, verify that the service is running. If it is not, right-click **AliyunDBSAgent** and select **Start**.
    
    **Note**
    
    The system starts the backup gateway by default. You can also start and stop the AliyunDBSAgent service in the Service Manager.
    
7.  In the DBS console, on the **Backup Gateway** page, click **Refresh** to view the new backup gateway.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7850289861/p685897.png)
    

#### **Install using the command line**

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
    
2.  Move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner and choose **All Features** > **Security and disaster recovery (DBS)** > **Data Disaster Recovery (DBS)** > **Backup Gateway**.
    
    **Note**
    
    If you use the DMS console in normal mode, choose **Security and disaster recovery (DBS)** > **Data Disaster Recovery (DBS)** > **Backup Gateway** in the top navigation bar.
    
3.  In the upper-right corner of the page, click **Add Backup Gateway**.
    
4.  Set the **Backup Gateway Network Type**. Copy the backup gateway installation command and run it on the database server.
    
    **Note**
    
    -   **Public Network**: Provides access to DBS over the Internet.
        
    -   **ECS Private Network/VPC**: Provides access to DBS over an Alibaba Cloud leased line.
        
    
    1.  In the Linux command line, run the installation command. The system downloads and automatically runs the installation package. Example:
        
        ```
        [root@iZbp****** ~]# wget -O aliyunDBSAgentInstaller.jar https://aliyun-dbs.oss-cn-hangzhou-internal.aliyuncs.com/installer/0.0.141/aliyunDBSAgentInstaller-0.0.141.jar && sudo java -Dregion=cn-hangzhou -jar aliyunDBSAgentInstaller.jar
        --2023-08-25 15:44:35--  https://aliyun-dbs.oss-cn-hangzhou-internal.aliyuncs.com/installer/0.0.141/aliyunDBSAgentInstaller-0.0.141.jar
        Resolving aliyun-dbs.oss-cn-hangzhou-internal.aliyuncs.com (aliyun-dbs.oss-cn-hangzhou-internal.aliyuncs.com)... 100.XXX.XX.XX, 100.XXX.XX.XX, 100.XXX.XX.XX, ...
        Connecting to aliyun-dbs.oss-cn-hangzhou-internal.aliyuncs.com (aliyun-dbs.oss-cn-hangzhou-internal.aliyuncs.com)|100.XXX.XX.XX|:443... connected.
        HTTP request sent, awaiting response... 200 OK
        Length: 247955671 (236M) [application/x-java-archive]
        Saving to: ‘aliyunDBSAgentInstaller.jar’
        
        100%[=====================================================================================================================================================================>] 247,955,671 17.4MB/s   in 13s    
        
        2023-08-25 15:44:49 (17.6 MB/s) - ‘aliyunDBSAgentInstaller.jar’ saved [247955671/247955671]
        ```
        
    2.  Select an installation language. Enter 0 for Chinese or 1 for English. Press Enter.
        
        ```
        Select your language
        0  [x] chn
        1  [ ] eng
        Input selection: 
        0
        ```
        
    3.  Enter 1 to read the gateway protocol and press Enter.
        
        ```
        2025-03-04 17:24:43 INFO JDKChecker - java.home: /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.432.b06-2.0.2.1.al8.x86_64/jre
        2025-03-04 17:24:43 INFO IdentifierGenerator - use defined variable region: cn-hangzhou
        2025-03-04 17:24:43 INFO IdentifierGenerator - Alibaba Cloud Linux#ca7c6767-57c2-484d-9fb6-807e385297bb#0F81FBFF006006A6#Intel64 Family 6 Model 106 Stepping 6#32
        
        ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
        Welcome
        ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
        
        Welcome to install Aliyun DBS Agent 0.0.144!
        Homepage: [International site: https://www.alibabacloud.com/en/product/database-backup | China site: https://www.aliyun.com/product/dbs]
        Press 1 to continue, 2 to quit, 3 to redisplay
        1
        ```
        
    4.  Enter 1 to accept the gateway protocol and press Enter.
        
        ```
        Press 1 to accept, 2 to reject, 3 to redisplay
        1
        ```
        
    5.  Select the component to install. Y indicates a backup gateway (Agent) and N indicates a proxy gateway (Database Gateway DG). In this example, a backup gateway is installed. Enter **Y** and press Enter.
        
        ```
        ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
        Component Selection
        ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
        
        -----
        Agent
        -----
        Enter Y for Yes, N for No: 
        Y
        DG Not Selected
        Done!
        ```
        
        **Note**
        
        In this example, a backup gateway is installed to access on-premises data. If you want to access data on a bastion host, enter `N` in this step. After the system switches to the database gateway (DG), enter `Y` to confirm the component information. For more information, see [Backup gateways in a bastion host architecture](#f71630f622jj1).
        
    6.  Enter 1 to confirm the component information and press Enter.
        
        ```
        Press 1 to continue, 2 to quit, 3 to redisplay
        1
        ```
        
    7.  Select an installation path. Press **Enter** to install in the default path `/usr/local/aliyun/dbs_agent`. To install in another path, enter the destination path. This example uses the default path.
        
        If the following message appears, a backup gateway is already installed. Enter Y and press Enter to continue the installation. Note: This operation overwrites the previously installed backup gateway.
        
        ```
        ---------------------------
        Warning!
        
        The directory already exists! This may overwrite existing files. Are you sure you want to install here?
        ---------------------------
        Enter Y for Yes, N for No: 
        Y
        Press 1 to continue, 2 to quit, 3 to redisplay
        1
        ```
        
    8.  Confirm the installation path. Enter O to confirm the installation or C to cancel the installation. Press Enter.
        
        ```
        The destination directory will be created at:
        /usr/local/aliyun/dbs_agent
        --------------------------------------
        Enter O for OK, C to Cancel: 
        O
        ```
        
    9.  Confirm the region information for the backup gateway. The default is `China (Hangzhou)`. Press Enter.
        
        ```
        ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
        User Information
        ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
        
        Backup Gateway Region:
        0  [x] China (Hangzhou)
        1  [ ] China (Shanghai)
        2  [ ] China (Beijing)
        3  [ ] China (Hong Kong)
        4  [ ] China (Shenzhen)
        5  [ ] China (Qingdao)
        6  [ ] US (Silicon Valley)
        7  [ ] US (Virginia)
        8  [ ] Germany (Frankfurt)
        9  [ ] Australia (Sydney)
        10 [ ] China (Hohhot)
        11 [ ] China (Zhangjiakou)
        12 [ ] Singapore
        13 [ ] Japan (Tokyo)
        14 [ ] China (Chengdu)
        15 [ ] China (Nanjing - Local Region - Shutting down)
        16 [ ] China (Fuzhou - Local Region - Shutting down)
        17 [ ] Malaysia (Kuala Lumpur)
        18 [ ] Indonesia (Jakarta)
        19 [ ] UAE (Dubai)
        20 [ ] UK (London)
        21 [ ] India (Mumbai)
        22 [ ] China (Hangzhou) Finance
        23 [ ] China (Shanghai) Finance
        24 [ ] China (Shenzhen) Finance
        25 [ ] China (Heyuan)
        26 [ ] China (Ulanqab)
        27 [ ] Alibaba Gov Cloud
        28 [ ] Thailand (Bangkok)
        29 [ ] Philippines (Manila)
        30 [ ] South Korea (Seoul)
        31 [ ] Saudi Arabia (Riyadh)
        Input selection: 
        ```
        
        **Note**
        
        Ensure the **Backup Gateway Region** is the closest region to your database. To change the region, enter the number that corresponds to the destination region.
        
    10.  Enter your Alibaba Cloud AccessKey information. The installation will fail if this information is incorrect. Press Enter to confirm.
         
         ```
         Alibaba Cloud AccessKey information (Make sure that the corresponding account has been granted the AliyunDBSFullAccess and AliyunOSSFullAccess permissions)
         AccessKey ID: [] 
         yourAccessKeyID
         Access Key Secret: [] 
         yourAccessKeySecret
         ```
         
    11.  **(Optional)** Enter the proxy gateway (Database Gateway DG) information. This step applies only to bastion host scenarios. This tutorial describes a non-bastion host architecture scenario. Press Enter twice to skip this step.
         
         ```
         Proxy Gateway Information (Optional, for bastion host scenarios)
         Proxy Gateway Address: [] 
         
         Proxy Gateway Port: [9797] 
         ```
         
         **Note**
         
         If you use a network topology that contains a bastion host, enter the private IP address and port number of the bastion host. The default port number is 9797. For more information, see [Backup gateways in a bastion host architecture](#f71630f622jj1).
         
    12.  Enter 1 to confirm the installation component, and then enter 1 again to start the installation. Press Enter.
         
         ```
         Press 1 to continue, 2 to quit, 3 to redisplay
         1
         ```
         
    13.  Wait for the installation to complete. The installation takes 1 to 5 minutes.
         
         ```
         ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
         Select Installation Component
         ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
         
         Select the package you want to install:
         
           [x] Pack 'DBS Backup Gateway Base File' required
         Done!
         
         Press 1 to continue, 2 to quit, 3 to redisplay
         1
         
         ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
         Installing
         ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
         
         ====================
         Installation started
         
         Platform: linux,version=3.10.0-1160.XX.X.el7.x86_64,arch=x64,symbolicName=null,javaVersion=1.8.0_372
         [ Starting to unpack ]
         [ Processing package: DBS Backup Gateway Base File (1/1) ]
         Cleaning up the target folder ...
         [ Unpacking finished ]
         Installation finished
         
         ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
         Installation Complete
         ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
         
         Installation was successful
         Application installed on /usr/local/aliyun/dbs_agent
         [ Writing the uninstaller data ... ]
         [ Console installation done ]
         ```
         
5.  Return to the **Add Backup Gateway** page and click **Complete Installation** in the lower-right corner.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9966975961/p711391.png)
    
6.  On the **Backup Gateway** page, click **Refresh** to view the new backup gateway.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9966975961/p711395.png)
    

## **Upgrade or uninstall a backup gateway**

1.  Uninstall the existing backup gateway, delete the dbs\_agent backup folder, and clear the environment. The methods are as follows:
    
    ## Linux
    
    1.  Log on to the Linux system and run the `cd /usr/local/aliyun/dbs_agent` command to go to the default installation directory.
        
    2.  In the installation directory, run the `java -jar Uninstaller/uninstaller.jar -c` command to uninstall the existing backup gateway. The following figure shows a successful uninstallation.![swss](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4002289861/p348301.png)
        
    3.  Run the `cd /usr/local/aliyun` command to return to the parent directory.
        
    4.  In the parent directory, run the `sudo rm -rf dbs_agent` command to delete the dbs\_agent folder.
        
    
    ## Windows
    
    1.  In the Windows system, uninstall AliyunDBSAgent from Programs and Features.
        
    2.  Manually delete the dbs\_agent folder.
        
        **Note**
        
        The default installation path for the backup gateway is `C:\Program Files\aliyun\dbs_agent`.
        
    
2.  After the existing gateway is uninstalled, reinstall the backup gateway. For more information, see [Installation methods](/help/en/dbs/user-guide/add-a-backup-gateway#c946a80013rty).
    

## Bastion host proxy gateway

If your company's database is on an internal network and cannot connect to the internet, you can install a proxy gateway on a bastion host and then install a backup gateway on the database host to back up data. The procedure is as follows:

1.  [Install a proxy gateway on a bastion host](#cf96a87ed2igr)
    
2.  [Install a backup gateway on the database server](#prereq-2tp-9v6-4ga)
    

### **Install a proxy gateway on the bastion host**

During a backup, the proxy gateway receives data from the database host where the backup gateway is located. It then forwards the data to DBS cloud storage over the internet. During a restore or database download, the proxy gateway can also receive data from DBS cloud storage and forward it to the database host.

### **Install a proxy gateway (on a bastion host)**

This topic provides an example of how to install a proxy gateway on a Linux **bastion host**. Data Disaster Recovery supports various installation methods, such as command-line and graphical installation. For more information about the installation methods, prerequisites, and precautions, see [Install a backup gateway](#prereq-2tp-9v6-4ga).

**Note**

For more information about how to install a proxy gateway on a Windows bastion host, see [Windows bastion host](/help/en/doc-detail/605173.html#section-bna-fr9-npe).

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
    
2.  Move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner and choose **All Features** > **Security and disaster recovery (DBS)** > **Data Disaster Recovery (DBS)** > **Backup Gateway**.
    
    **Note**
    
    If you use the DMS console in normal mode, choose **Security and disaster recovery (DBS)** > **Data Disaster Recovery (DBS)** > **Backup Gateway** in the top navigation bar.
    
3.  Click **Install Backup Gateway** in the upper-right corner of the page.
    
4.  Set the **Backup Gateway Network Type**, copy the backup gateway installation command, and run it on the database server.
    
    **Note**
    
    -   **Public Network**: Allows you to access DBS over the Internet.
        
    -   **ECS Private Network/VPC**: You can access DBS over an Alibaba Cloud leased line.
        
    
    1.  In the Linux command line, run the installation command. The system downloads and automatically runs the installation package. Example:
        
        ```
        [root@iZbp****** ~]# wget -O aliyunDBSAgentInstaller.jar https://aliyun-dbs.oss-cn-hangzhou-internal.aliyuncs.com/installer/0.0.141/aliyunDBSAgentInstaller-0.0.141.jar && sudo java -Dregion=cn-hangzhou -jar aliyunDBSAgentInstaller.jar
        --2023-08-25 16:04:52--  https://aliyun-dbs.oss-cn-hangzhou-internal.aliyuncs.com/installer/0.0.141/aliyunDBSAgentInstaller-0.0.141.jar
        Resolving aliyun-dbs.oss-cn-hangzhou-internal.aliyuncs.com (aliyun-dbs.oss-cn-hangzhou-internal.aliyuncs.com)... 100.XXX.XX.XX, 100.XXX.XX.XX, 100.XXX.XX.XX, ...
        Connecting to aliyun-dbs.oss-cn-hangzhou-internal.aliyuncs.com (aliyun-dbs.oss-cn-hangzhou-internal.aliyuncs.com)|100.XXX.XX.XX|:443... connected.
        HTTP request sent, awaiting response... 200 OK
        Length: 247955671 (236M) [application/x-java-archive]
        Saving to: ‘aliyunDBSAgentInstaller.jar’
        
        100%[=======================================================================================================>] 247,955,671 19.9MB/s   in 11s    
        
        2023-08-25 16:05:03 (21.4 MB/s) - ‘aliyunDBSAgentInstaller.jar’ saved [247955671/247955671]
        ```
        
    2.  Select an installation language. Enter 0 for Chinese or 1 for English.
        
        ```
        Select your language
        0  [x] chn
        1  [ ] eng
        Input selection: 
        0
        ```
        
    3.  Enter 1 to read the gateway protocol.
        
        ```
        Press 1 to continue, 2 to quit, 3 to redisplay
        1
        ```
        
    4.  Enter 1 to accept the gateway protocol.Press 1 to accept, 2 to reject, 3 to redisplay 1
        
        ```
        Press 1 to accept, 2 to reject, 3 to redisplay
        1
        ```
        
    5.  Select the component to install. Y indicates a backup gateway (Agent) and N indicates a proxy gateway (Database Gateway DG). In this example, a proxy gateway is installed. Enter **N**, and then enter Y to confirm the component information.
        
        ```
        Enter Y for Yes, N for No: 
        N
        --
        DG
        --
        Enter Y for Yes, N for No: 
        Y
        Done!
        ```
        
    6.  Enter 1 to continue the installation.
        
        ```
        Press 1 to continue, 2 to quit, 3 to redisplay
        1
        ```
        
    7.  Select an installation path. Press **Enter** to install in the default path `/usr/local/aliyun/dbs_agent`.
        
        To install in a custom path, enter the destination path and enter 1 to confirm. This example installs in the custom directory `/usr/local/aliyun/daili_dbs_agent`.
        
        ```
        Select installation path: [/usr/local/aliyun/dbs_agent] 
        /usr/local/aliyun/daili_dbs_agent
        
        Press 1 to continue, 2 to quit, 3 to redisplay
        1
        ```
        
    8.  Confirm the installation component and enter 1 to start the installation.
        
        Wait for the installation to complete. The installation takes 1 to 5 minutes.
        
        ```
        Select the package you want to install:
        
          [x] Pack 'Proxy Gateway Base File' required
        Done!
        
        Press 1 to continue, 2 to quit, 3 to redisplay
        1
        
        ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
        Installing
        ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
        
        ====================
        Installation started
        
        Platform: linux,version=3.10.0-1XXX.XX.X.el7.x86_64,arch=x64,symbolicName=null,javaVersion=1.8.0_372
        [ Starting to unpack ]
        [ Processing package: Proxy Gateway Base File (1/1) ]
        Cleaning up the target folder ...
        [ Unpacking finished ]
        Installation finished
        
        ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
        Installation Complete
        ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
        
        Installation was successful
        Application installed on /usr/local/aliyun/daili_dbs_agent
        [ Writing the uninstaller data ... ]
        [ Console installation done ]
        ```
        
5.  Run the following command to confirm that the proxy gateway is installed successfully.
    
    ```
    ps aux | grep app_aliyun_proxy
    ```
    
    The following output indicates that the process is running normally and the proxy gateway is installed successfully. If other errors occur that you cannot resolve, contact us in the DBS customer consultation DingTalk group (ID: 35585947).
    
    ```
    [root@iZbp****** ~]# ps aux | grep app_aliyun_proxy
    root     1****  0.0  0.5 7*****  9*** ?        Ssl  16:06   0:00 /usr/local/aliyun/daili_dbs_agent/dist/app_aliyun_proxy/app_aliyun_proxy -addr :9797 -logdir /usr/local/aliyun/daili_dbs_agent/logs
    root     2****  0.0  0.0 1*****   9** pts/1    S+   16:08   0:00 grep --color=auto app_aliyun_proxy
    ```
    
6.  After the bastion host proxy gateway is installed, install a backup gateway on the database host to perform data backups. For more information, see [Install a backup gateway](#prereq-2tp-9v6-4ga).
    

## **Commands to manage a backup gateway in Linux**

You can use the following commands in Linux to manage the backup gateway.

-   Start the backup gateway: `/usr/local/aliyun/dbs_agent/bin/aliyun-dbs-agent.sh start`
    
-   Stop the backup gateway: `/usr/local/aliyun/dbs_agent/bin/aliyun-dbs-agent.sh stop`
    
-   Restart the backup gateway: `/usr/local/aliyun/dbs_agent/bin/aliyun-dbs-agent.sh restart`
    
-   Uninstall the backup gateway: In the installation directory, run `java -jar Uninstaller/uninstaller.jar -c`
    

## FAQ

-   **The backup account has insufficient permissions when backing up SQL Server.**
    
    **Solution**: When you back up an SQL Server database, you must grant the Sysadmin role to the NT AUTHORITY\\SYSTEM account. You can run the following SQL command to configure the setting:
    
    ```
    ALTER SERVER ROLE [sysadmin] ADD MEMBER [NT AUTHORITY\SYSTEM]
    GO
    ```
    
-   **Do the gateway name and creation time change after I upgrade or reinstall the backup gateway? Do they change after I change the operating system?**
    
    -   If your hardware environment (CPU model/MAC address) does not change, the backup gateway name and creation time do not change after an upgrade or reinstallation.
        
    -   If you change the operating system, the backup gateway name and creation time will change.
        
        **Note**
        
        For example, if you change the operating system from CentOS 7.9 to Alibaba Cloud Linux 3.2104 LTS, the backup gateway name and creation time will change.
        
    -   If you reinstall the operating system to a different version of the same OS family, the backup gateway name and creation time do not change.
        
        **Note**
        
        For example, if you reinstall the operating system from CentOS 7.9 to CentOS 8.5, the backup gateway name and creation time do not change.
        
-   **Physical backup gateways can be securely upgraded.**
    
    **Solution**: Some earlier versions of backup gateways have the Apache Log4j2 RCE vulnerability. For more information, see and [Alibaba Cloud Statement on the Impact Assessment of Apache Log4j2 RCE Vulnerability (CVE-2021-44228)](https://www.alibabacloud.com/zh/notice/log4j2impact). If you use a backup gateway whose version is earlier than 0.0.129, we recommend that you upgrade the backup gateway to the latest version and reconnect to the backup gateway for your physical backup schedule. To upgrade the backup gateway, see [Upgrade or uninstall a backup gateway](/help/en/dbs/user-guide/add-a-backup-gateway#section-7c5-z7l-xhk).
    
-   **What do I do if my successfully installed backup gateway does not appear on the Backup Gateway page?**
    
    -   This issue may occur if your backup gateway has not started. Follow Step 5 to Step 6 in [Install using the GUI](#09a47eb1135bs) to start the backup gateway.
        
    -   Confirm that the region where the backup gateway is installed is the same as the region selected in the console.
        
    -   Check your agent log for errors, such as incorrect AccessKey information.
        
    -   The backup gateway list is not automatically refreshed. On the **Backup Gateway** page, click the **Refresh** button to view the newly added backup gateway.
        
-   **After the backup gateway is installed successfully, the console shows that the gateway is offline. What are the possible reasons?**
    
    -   This issue may occur if your backup gateway has not started. See Step 5 to Step 6 in [Install using the GUI](#09a47eb1135bs) to start the backup gateway.
        
    -   Confirm that the region where the backup gateway is installed is the same as the region selected in the console.
        
    -   The gateway may be offline due to network connection or routing issues.
        
    -   The JRE or JDK version installed on the server may be incorrect. For more information, see the **Prerequisites** section in this topic. Visit the official website to install **JRE 1.8** or **JDK 8u261**.
        
-   **Where can I find the backup gateway logs in Linux?**
    
    If you did not change the installation directory, the logs are in `/usr/local/aliyun/dbs_agent/logs`.
