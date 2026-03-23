If you use CLB Layer 7 listeners and want to troubleshoot errors for backend servers, you can analyze the access log data to locate errors. CLB is interfaced with Simple Log Service, which can record and store access logs of CLB to help you efficiently analyze log data and locate errors.

## **Limits**

Only Layer 7 CLB listeners, including HTTP and HTTPS listeners, support access logs.

## Prerequisites

-   A CLB instance is created. For more information, see [Create and manage CLB instances](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-clb-instances#task-ctx-xsm-vdb).
    
-   A vServer group is created. For more information, see [Create and manage a vServer group](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-a-vserver-group#task-1597080). Backend servers are added to the vServer group, and applications are deployed on the backend servers.
    
-   An HTTP or HTTPS listener is created for the CLB instance. For more information, see [Add an HTTP listener](/help/en/slb/classic-load-balancer/user-guide/add-an-http-listener-1) and [Add an HTTPS listener](/help/en/slb/classic-load-balancer/user-guide/add-an-https-listener-1).
    
-   Log Service is activated. For more information, see [Activate Simple Log Service](/help/en/sls/getting-started#title-4aw-px0-ex4).
    

## Step 1: Configure an access log

1.  Log on to the [CLB console](https://slb.console.alibabacloud.com/slb).
    
2.  In the left-side navigation pane, choose **Logs** > **Access Log**.
    
3.  In the top navigation bar, select the region in which the CLB instance is deployed.
    
4.  The first time you use the access log feature, you must grant the required permissions to your account. Click **Authorize**. On the **RAM Quick Authorization** page, click **Authorize**.
    
    **Note**
    
    You only need to perform the authorization once.
    
    If you use a Resource Access Management (RAM) user, you must authorize the RAM user by using the Alibaba Cloud account to which the RAM user belongs. For more information, see [Authorize a RAM user to use the access log feature of CLB](/help/en/slb/security-and-compliance/authorize-a-sub-account-to-use-access-logs#task-kdv-g4n-vdb).
    
5.  On the **Access Log (Layer 7)** page, find the CLB instance that you want to manage and click **Configure** in the Actions column.
    
6.  In the **Log Settings** panel, configure the **Project** and **Logstore** parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Project**
    
    Projects in Simple Log Service are used to isolate and manage different resources.
    
    -   **Select Project**: Select an existing project from the drop-down list.
        
    -   **Create Project**: Enter a project name in the field.
        
    
    **Note**
    
    Make sure that the name of the project is unique and the region of the project is the same as that of the CLB instance.
    
    **Logstore**
    
    Logstores in Simple Log Service are used to collect, store, and query logs.
    
    -   **Select Logstore**: Select an existing Logstore from the drop-down list.
        
    -   **Create Logstore**: Enter a Logstore name in the field.
        
    

## Step 2: View access log data

1.  Log on to the [CLB console](https://slb.console.alibabacloud.com/slb).
    
2.  In the left-side navigation pane, choose **Logs** > **Access Log**.
    
3.  In the top navigation bar, select the region in which the CLB instance is deployed.
    
4.  Find the CLB instance that you want to manage and click **View Logs** in the **Actions** column to go to the Simple Log Service console.
    
5.  Log entries are generated when clients access CLB. You can view the log data in Simple Log Service.
    
6.  Enter an SQL statement to query log data.
    
    For example, you can enter the following SQL statement to query the top 20 most active clients. You can analyze the request sources and make informed business decisions.
    
    ```
    * | select http_user_agent, count(*) as pv group by http_user_agent order by pv desc limit 20
    ```
    

## Step 3: Locate unhealthy backend servers

You can locate unhealthy backend servers by checking the dashboard in Simple Log Service.

1.  On the project page, move your pointer over the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9862565071/p754031.png) icon in the left-side navigation pane and click **Dashboard**.
    
2.  Click the name of the access log, such as slb\_layer7\_access\_center\_en, to view log data.
    
3.  On the dashboard, find the **top upstream\_response\_time** section. In this section, you can view the response time of CLB. You can sort the **avg upstream\_response\_time(s)** data in descending order to check whether the response time of the backend server exceeds 1 second.
    
    If the response time of a backend server exceeds 1 second, you can log on to the backend server to troubleshoot errors.
    

## **References**

-   For more information about Simple Log Service, see [What is Simple Log Service?](/help/en/sls/what-is-log-service).
    
-   For more information about CLB access logs, see [Overview of CLB access logs](/help/en/slb/classic-load-balancer/user-guide/clb-access-logs) and [Configure a CLB access log](/help/en/slb/classic-load-balancer/user-guide/configure-access-logs).
    
-   For more information about the frequently asked questions (FAQ) about CLB and the solutions, see [FAQ](/help/en/slb/classic-load-balancer/support/faq-about-clb-1).
