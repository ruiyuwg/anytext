This topic describes the access logs of Classic Load Balancer (CLB). If you use CLB Layer 7 listeners, you can use the access log data to debug errors, locate issues, and analyze user behaviors. Simple Log Service interfacing with CLB can record and store access logs from CLB to help you efficiently analyze log data and locate errors.

## Overview

### **What are access logs?**

CLB access logs are used to record detailed information about all requests that are sent to CLB, including the time when requests are sent, client IP addresses, network latency, request URLs, and server responses. As an ingress for Internet access, CLB distributes many access requests. You can use access logs to analyze the activities and geographical distribution of client users and troubleshoot errors.

After you enable the access log feature for a CLB instance, access log data is collected and stored in a Logstore of Simple Log Service for log analysis. You can disable the access log feature at any time.

The access log feature of CLB is free of charge. You are charged only for Simple Log Service. For more information about the pricing and billing of Simple Log Service, see [Billing overview](/help/en/sls/billing-overview).

**Important**

-   Only Layer 7 CLB listeners support access logs.
    
-   Ensure that the HTTP header value does not contain `||`. Otherwise, the exported logs may be misplaced.
    

### **Benefits**

The access log feature of CLB provides the following benefits:

-   **Ease of use**
    
    This feature allows developers and O&M engineers to spend less time on log management, instead focusing on business development and technical exploration.
    
-   **Large storage capacity**
    
    CLB generates a large amount of access log data, which requires high log processing performance and costs. Simple Log Service supports higher performance at a lower cost than open-source log services.
    
-   **Real-time processing**
    
    Scenarios such as DevOps, monitoring, and alerting require real-time log data. The access log feature of CLB, powered by Simple Log Service capabilities, can analyze and process real-time log data within seconds.
    
-   **Flexibility**
    
    CLB allows you to enable or disable the access log feature for a CLB instance. Simple Log Service is interfaced with CLB at the service level. You do not need to manually maintain Simple Log Service.
    

### **Limitation**

Only Layer 7 CLB listeners, including HTTP and HTTPS listeners, support access logs.

> Access logs are not supported for Layer 4 (TCP/UDP) listeners, as they record application-level (Layer 7) request information.

## Prerequisites

-   A [CLB instance](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-clb-instances#task-ctx-xsm-vdb) is created.
    
-   A [vServer group](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-a-vserver-group#task-1597080) is created. Backend servers are added to the vServer group, and applications are deployed on the backend servers.
    
-   An [HTTP](/help/en/slb/classic-load-balancer/user-guide/add-an-http-listener-1) or [HTTPS listener](/help/en/slb/classic-load-balancer/user-guide/add-an-https-listener-1) is created for the CLB instance.
    
-   [Simple Log Service](/help/en/sls/getting-started#title-4aw-px0-ex4) is activated.
    

## Configure an access log

1.  Log on to the [CLB console](https://slb.console.alibabacloud.com/slb).
    
2.  In the left-side navigation pane, choose **Logs** > **Access Log**.
    
3.  In the top navigation bar, select the region in which the CLB instance is deployed.
    
4.  The first time you use the access log feature, you must grant the required permissions to your account. Click **Authorize**. On the **Cloud Resource Access Authorization** page, click **Confirm Authorization Policy**. This authorization is only required once.
    
    If you are a Resource Access Management (RAM) user, you must be granted the necessary permissions by your Alibaba Cloud account. For more information, see [Authorize a RAM user to use the access log feature of CLB](/help/en/slb/security-and-compliance/authorize-a-sub-account-to-use-access-logs).
    
5.  On the **Access Log (Layer 7)** page, find the CLB instance you want and click **Configure** in the **Actions** column.
    
6.  In the **Log Settings** panel, set the **Project** and **Logstore** parameters, then click **OK**.
    
    -   **[Project](/help/en/sls/project)**: a unit for isolating, managing, and controlling resources in Simple Log Service. We recommend that you use different projects to manage data from different applications, products, or programs.
        
    -   **[Logstore](/help/en/sls/logstore)**: a unit for collecting, storing, and querying log data in Simple Log Service. We recommend that you use different Logstores to manage different types of log data for a single application.
        
        -   **Select Logstore**: If you select this option, the system automatically creates preset dashboards for the Logstore you select. If you have configured indexes for this Logstore, the configuration is overwritten.
            
    
    **Note**
    
    -   If you choose to create a project, ensure that the project name is unique within Alibaba Cloud. If it is not, the project cannot be created.
        
    -   If you choose to select an existing project, ensure that the project you want to select is in the same region as your CLB instance.
        
    
    After the access log feature is enabled, you can query and retrieve log data using the fields listed in the following table:
    
    **Field**
    
    **Description**
    
    body\_bytes\_sent
    
    The size of the HTTP response body. Unit: bytes.
    
    client\_ip
    
    The IP address of the last hop that sends the request.
    
    client\_port
    
    The port number of the last hop that sends the request.
    
    host
    
    By default, the value of this field is retrieved from the request parameters. If the request parameters do not contain the host information, the value is retrieved from the Host header. If this value cannot be retrieved from either, the IP address of the backend server that processes the request is used.
    
    http\_host
    
    The Host header of the HTTP request received by CLB.
    
    http\_referer
    
    The Referer header of the HTTP request received by CLB.
    
    http\_user\_agent
    
    The Http\_User\_Agent header of the HTTP request received by CLB.
    
    http\_x\_forwarded\_for
    
    The X-Forwarded-For header of the HTTP request received by CLB.
    
    http\_x\_real\_ip
    
    The X-Real-IP header of the HTTP request received by CLB, which indicates the real client IP address.
    
    read\_request\_time
    
    The time that CLB takes to process the request. Unit: milliseconds.
    
    request\_length
    
    The length of the request, consisting of the request line, request headers, and request body.
    
    request\_method
    
    The request method.
    
    request\_time
    
    The time from when CLB receives the first request packet to when it returns the response. Unit: seconds.
    
    request\_uri
    
    The URI of the request received by CLB.
    
    scheme
    
    The scheme of the request. Valid values: HTTP and HTTPS.
    
    server\_protocol
    
    The HTTP protocol version of the request received by CLB. Examples: HTTP/1.0 and HTTP/1.1.
    
    slb\_vport
    
    The listening port of the CLB instance.
    
    slbid
    
    The ID of the CLB instance.
    
    ssl\_cipher
    
    The cipher suite used to establish the SSL connection. Example: ECDHE-RSA-AES128-GCM-SHA256.
    
    ssl\_protocol
    
    The protocol used to establish the SSL connection. Example: TLS 1.2.
    
    status
    
    The status of the response returned by CLB.
    
    tcpinfo\_rtt
    
    The round-trip time (RTT) of the TCP connection established between the client and CLB. Unit: microseconds.
    
    time
    
    The time when the log entry is generated.
    
    upstream\_addr
    
    The IP address and port of the backend server that processes the request.
    
    upstream\_response\_time
    
    The time from when a connection is established between CLB and the backend server to when the connection is closed. Unit: seconds.
    
    upstream\_status
    
    The HTTP status code sent from the backend server to CLB.
    
    vip\_addr
    
    The virtual IP address that the request is sent to.
    
    write\_response\_time
    
    The time that CLB takes to process the write request. Unit: milliseconds.
    

## Query access log data

After you enable the access log feature, you can query log data in the Simple Log Service console.

1.  Log on to the [CLB console](https://slb.console.alibabacloud.com/slb).
    
2.  In the left-side navigation pane, choose **Logs** > **Access Log**.
    
3.  In the top navigation bar, select the region in which the CLB instance is deployed.
    
4.  On the **Access Log (Layer 7)** page, find the CLB instance you want and click **View Logs** in the **Actions** column.
    
5.  After you have enabled the access log feature, if a client accesses CLB, log entries are generated and you can view the log data in the Simple Log Service console.
    
6.  Enter an SQL statement to query specific log data.
    
    For example, to query the top 20 most active clients, you can enter the following SQL statement:
    
    ```
    * | select http_user_agent, count(*) as pv group by http_user_agent order by pv desc limit 20
    ```
    
    This analysis helps identify request sources and informs business decisions.
    

## Analyze access log data

You can analyze access log data using dashboards provided by Simple Log Service, which offer comprehensive data insights.

1.  In the Simple Log Service console, on the page of the project that your CLB instance uses, move your pointer over the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9862565071/p754031.png) icon in the left-side navigation pane and click **Dashboards**.
    
2.  Click the name of the access log, such as slb\_layer7\_access\_center\_en, to view log data.
    

## Disable access logs

If you no longer need to collect access data of your CLB instance, you can disable access logs.

**Note**

After you disable access logs for your CLB instance, the log project, Logstore and historical logs are not deleted. You can still access the log data in Simple Log Service.

1.  Log on to the [CLB console](https://slb.console.alibabacloud.com/slb).
    
2.  In the left-side navigation pane, choose **Logs** > **Access Log**.
    
3.  In the top navigation bar, select the region in which the CLB instance is deployed.
    
4.  On the **Access Log (Layer 7)** page, find the desired CLB instance and click **Disable Logging** in the **Actions** column.
    
5.  In the message that appears, click **OK**.
    

## **References**

-   For more information about Simple Log Service, see [What is Simple Log Service?](/help/en/sls/what-is-log-service)
    
-   If you use CLB Layer 7 listeners (HTTP and HTTPS listeners) and want to troubleshoot errors on backend servers, you can analyze the access log data to locate errors. For more information, see [Use CLB access logs to locate unhealthy backend servers](/help/en/slb/classic-load-balancer/use-cases/use-access-logs-to-find-unhealthy-backend-servers).
