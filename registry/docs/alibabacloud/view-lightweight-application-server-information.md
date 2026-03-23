After you create a simple application server, you can view its details in the Simple Application Server console, such as the configurations, expiration time, and resource usage.

## View the basic information of a server

You can view the basic information of the server, such as the server ID, server name, status, configuration information, IP address, and expiration time, on the **Server Overview** tab. You can also perform operations such as remote connection and password resetting on the server.

1.  Go to the [Servers page](https://swas.console.alibabacloud.com/servers/) in the Simple Application Server console.
    
2.  On the **Servers** page, you can view the basic information of all simple application servers in the current account. The following figure shows the basic information of a server.
    
    **Note**
    
    If you have multiple servers, you can search for a server by specifying a fuzzy server name, or exact server name, public IP address, or status in the search box.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0537837071/p762170.png)
    
    Description of major information
    
    -   ①: Server name.
        
        **Note**
        
        You can modify the server name by moving the pointer over the server name and then clicking the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3103825071/p697787.png) icon.
        
    -   ②: The running status, security, and monitoring information of the server.
        
        -   For more information about running statuses of servers, see [Instance lifecycle](/help/en/simple-application-server/user-guide/lifecycle-of-a-simple-application-server).
            
        -   You can move the pointer over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0537837071/p762270.png) icon to view the firewall informaiton of the server. A![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0537837071/p762277.png) icon indicates that the firewall, or default ports 22, 80, and 443 on the server are disabled. You need to enable the firewall or ports.
            
        -   You can move the pointer over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0537837071/p762271.png) icon and click **View Monitoring Data** to view the monitoring infomation about the server. For more information, see [View the monitoring information](/help/en/simple-application-server/user-guide/view-instance-monitoring-information).
            
    -   ③: The major information about the server, including the ID, specifications, image, IP address, and expiration time of the server.
        
        **Note**
        
        You can move the pointer over the ID or IP address of the server and then click the ![009](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7476284561/p432124.png) icon to copy the ID or IP address.
        
    -   ④: Operation buttons of the server, such as remote conneciton, password resetting, and renewal.
        
        **Warning**
        
        Stopping or restartting the server can interrupt your business. Proceed with caution.
        
    

## View the details of a server on the Server Overview page

You can view the basic information such as the **Server ID**, **Status**, and **IP Address** of the server. You can also view the usage of resources such as **Data Transfers** and the **CPU**, the **Firewall** status, the installation and usage status of the **Command Assistant** and **CloudMonitor** agent.

1.  Log on to the [Simple Application Server console](https://swas.console.alibabacloud.com/).
    
2.  Click the Server ID in the Basic Information section of the simple application server that you want to view.
    
3.  On the Server Overview page, view the sections described in the following table.
    
    **Section**
    
    **Description**
    
    **Server Monitoring**
    
    Shows the data transfer quota usage, CPU utilization, memory size, system disk size, and data disk size of the server. You can click **View Details** to view the detailed monitoring data of the server. If you want to view examples on the data transfer quota usage, see the "[Example: View the data transfers of servers](#section-qf5-vnx-9mm)" section of this topic.
    
    **Basic Information**
    
    Shows information about **Server ID**, Image Information, **IP Address**, and **Expire At**.
    
    **Application building guide**
    
    Shows an application building wizard. You can follow the wizard to build an application on the server with efficiency.
    
    **Command Assistant**
    
    Shows the installation status of Command Assistant.
    
    -   If Command Assistant is **installed**, you can click **Run Command** to perform O&M operations on the server without logging on to the server. For more information, see [Run command](/help/en/simple-application-server/user-guide/use-command-assistant).
        
    -   If Command Assistant is **uninstalled**, you can follow the on-screen instructions to **install** the Cloud Assistant agent.
        
    
    Related Services
    
    Shows related services such as Elastic Compute Service (ECS) and WUYING Workspace. You can click a service to navigate to the official website of the service.
    

## Example: View the data transfers of servers

### **Query the data transfer quota usage of a single simple application server**

1.  Go to the [Servers page](https://swas.console.alibabacloud.com/servers/) in the Simple Application Server console.
    
2.  On the **Servers** page, click the ID of the server that you want to query.
    
3.  On the **Server Monitoring** section of the **Server Overview** tab, view the data transfer quota usage (Used/Total) of the server.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7170626071/p756504.png)
    
4.  Click **View Details** to view the daily data transfer of the server.
    
    **Note**
    
    -   On the Metrics page, you can view the disks, CPU utilization, memory usage, network bandwidth usage, and traffic details of the server by time.
        
    -   The query cycle of data transfers is no less than one hour. If you query the data transfers that are used within the last one hour, no data is displayed.
        
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0982483071/p728388.png)
    

### **Query the data transfer quota usage of all simple application servers**

You can filter by the hour within a specific period to download and view detailed traffic usage for your Simple Application Servers.

1.  Log on to the [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview) console.
    
2.  In the navigation pane on the left, choose **Billing** > **Bill Details**.
    
3.  Click the **View Usage Details** tab and configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Time Period**
    
    Select the time range to query. You can query and export usage details for the last 12 months.
    
    You can query usage only within a single calendar month. For example, if the start time is 2025-05-01, the latest end time you can set is 2025-05-31. You cannot select 2025-06-01.
    
    **Commodity Name**
    
    Select **Simple Application Server**.
    
    **Billable Item**
    
    Select **Paid Traffic** or **Free Traffic**.
    
    **Billable Item**
    
    Select **Simple Application Server**.
    
    **Time Unit**
    
    Select **Hour**.
    
4.  Click **Export CSV**.
    
5.  On the **Export Record** page, wait for the export to complete.
    
    After the CSV file is exported, click **Download** in the **Actions** column to download the file to your local device. You can then view the usage details of your Simple Application Servers.
    
    **Note**
    
    -   Traffic is measured in bytes.
        
    -   You can filter the data by conditions such as instance ID or region.
