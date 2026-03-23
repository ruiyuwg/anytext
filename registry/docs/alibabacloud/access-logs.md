This topic describes how to analyze user behaviors and distribution, and troubleshoot errors by using Simple Log Service, which is interfaced with Application Load Balancer (ALB).

## Background information

ALB serves as an ingress to receive and forward a large number of requests. ALB allows you to deliver access logs to Simple Log Service, which provides powerful big data computing capabilities. You can analyze user activities, view the geographical distribution of users, and troubleshoot issues based on the access logs. ALB access logs have the following benefits:

-   Ease of use: ALB access logs reduce the amount of time and effort required to manage logs and allow developers and O&M engineers to focus on service development and technology exploration.
    
-   High volume: ALB access logs store a large amount of data. Therefore, the service that is used to manage the access logs must be a high-capacity and cost-effective service. Simple Log Service can process 100 million log entries within 1 second. Compared with self-managed and open source services, Simple Log Service is faster and more cost-effective.
    
-   Timeliness: Timeliness is essential in scenarios such as DevOps, data monitoring, and alerting. Simple Log Service provides superior computing capabilities for big data tasks and can process a large amount of log data within seconds.
    
-   Elasticity: You can enable or disable the access log feature for an ALB instance based on your business requirements. The storage capacity of Logstores is scalable based on your workloads.
    

## Billing

After the access logs of ALB are delivered to Simple Log Service, you are charged for data storage, read traffic, requests, data transformation, and data shipping. For more information, see [Simple Log Service billing](/help/en/sls/billable-items#concept-xzl-hjg-vgb).

## Prerequisites

Simple Log Service is activated. For more information, see [Activate Simple Log Service](https://www.alibabacloud.com/zh/product/log-service).

## Create an access log

1.  Log on to the [ALB console](https://slb.console.alibabacloud.com/alb).
    
2.  In the top navigation bar, select the region in which the ALB instance is deployed.
    
3.  In the left-side navigation pane, choose **ALB** > **Instances**. On the **Instances** page, click the ID of the instance that you want to manage.
    
4.  On the instance details page, click the **Access Logs** tab and click **Create Access Log**.
    
5.  In the **Create Access Log** dialog box, configure the **Project** and **Logstore** parameters, and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Project**
    
    Select the Simple Log Service project that you want to use to isolate and manage resources. Valid values:
    
    -   **Select Project**: Select an existing project from the drop-down list.
        
    -   **Create Project**: Enter a project name in the field.
        
    
    **Logstore**
    
    Select the Logstore that you want to use to collect, store, and query log data in Simple Log Service. Valid values:
    
    -   **Select Logstore**: Select an existing Logstore from the drop-down list.
        
    -   **Create Logstore**: Enter a Logstore name in the field. If you select Create Project, you must also select Create Logstore.
        
    
    **Notes on Creating Service-linked Role**
    
    After you perform this operation, a service-linked role is automatically created.
    
6.  In the message that appears, read the information and click **OK**.
    
    -   If you create a Logstore, indexes and dashboards are created and enabled for the Logstore by default.
        
    -   If you select an existing Logstore, dashboards are automatically enabled for the Logstore. Existing indexes of the Logstore are not overwritten. You can create indexes in the [Simple Log Service console](https://sls.console.alibabacloud.com/).
        
    

## View an access log

1.  On the **Access Logs** tab, click the link on the right side of **Simple Log Service** to go to the Simple Log Service console to view log data.
    
2.  On the **Access Logs** tab, click the **Monitoring Center**, **Access Center**, or **Fine-grained Monitoring** tab and specify filter conditions to query metrics.
    
    **Module**
    
    **Description**
    
    Monitoring Center
    
    Displays the real-time monitoring data of the ALB instance. The metrics include PVs, Request Success Rate, Average Latency, Requests with Status Code 4xx, Status Distribution, Traffic, P50 Latency, P90 Latency, P99 Latency, P9999 Latency, Hosts with Most Requests, Hosts with Highest Latency, Hosts with Highest Failure Rate, URLs with Most Requests, URLs with Highest Latency, URLs with Highest Failure Rate, Backends with Most Requests, Backends with Highest Latency, and Backends with Highest Failure Rate.
    
    Access center
    
    Displays the access information about the ALB instance. The metrics include PVs (Day-on-day), PVs (Week-on-week), UVs (Day-on-day), UVs (Week-on-week), PV Distribution, UV Distribution, PVs Today, PVs of 7 Days, Top 10 States with Most Requests, Percentage of Mobile Users, TOP 10 Hosts with Most Requests, TOP 10 User Agents with Most Requests, and IP Addresses with Most Requests.
    
    Fine-grained Monitoring
    
    Displays the metrics that are aggregated at one-second intervals. You can use the metrics to identify exceptions that are related to transient jitters. The metrics include QPS, Access Latency, Upstream Latency, Success Rate, Request Traffic, Response Body Traffic, Status Code 2xx, Status Code 3xx, Error Codes, Upstream Status Code 2xx, Upstream Status Code 3xx, and Upstream Error Codes.
    
    -   In the upper-right corner of the **Monitoring Center**, **Access Center**, or **Fine-grained Monitoring** tab, you can click **More Charts** to go to the **CloudLens for ALB** page to view more ALB reports. For more information, see [View reports](/help/en/sls/view-reports#task-2183021).
        
    -   In the upper-right corner of the **Monitoring Center**, **Access Center**, or **Fine-grained Monitoring** tab, you can click **Configure Alert Rules** to go to the **CloudLens for ALB** page to view alert incidents of ALB.
        
    -   You can also use the following features in the upper-right corner of the **Monitoring Center**, **Access Center**, or **Fine-grained Monitoring** tab:
        
        -   ![SQL独享版](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6891520861/p275403.png): enables Dedicated SQL. For more information, [see Enable Dedicated SQL](/help/en/sls/dedicated-sql/#task-2081182).
            
        -   After access logs are delivered to Simple Log Service, you can query, analyze, download, deliver, and process the access logs. You can also create alert rules for the access logs. For more information, see [Common operations on logs of Alibaba Cloud services](/help/en/sls/common-operations-on-logs-of-alibaba-cloud-services#concept-2534704).
            
    

## Record custom headers

slb\_headers can record the names and values of custom request headers. You can use the data to analyze requests.

The maximum size of custom headers that can be recorded in an access log is 1 KB, which can be increased to 4 KB. To request an increase, contact your account manager. For more information, see [What is the request length limit for ALB and can it be changed?](/help/en/slb/application-load-balancer/support/faq-about-alb#section-x5h-nb4-8xt)

1.  On the **Access Logs** tab, click **Record Custom Headers** in the **Basic Information** section.
    
2.  In the **Record Custom HTTP Headers in Logs** dialog box, select the listener that is added to the ALB instance from the drop-down list.
    
    To create a listener, click **Create Listener** in the drop-down list. For more information, see [Add an HTTP listener](/help/en/slb/application-load-balancer/user-guide/add-an-http-listener#task-1960530), [Add an HTTPS listener](/help/en/slb/application-load-balancer/user-guide/add-an-https-listener#task-2020924), and [Add a QUIC listener](/help/en/slb/application-load-balancer/user-guide/add-a-quic-listener#task-2020924).
    
3.  In the message that appears, read the information and click **OK**.
    
    After the configuration is complete, the slb\_headers field is added to access logs to record the names and values of all headers in a request except the following headers:
    
    ```
    # The slb_headers field does not record information about the following headers:
    host
    referer
    user-agent
    x-forwarded-for
    x-readtime
    x-real-ip
    uber-trace-id
    X-B3-TraceId
    X-B3-SpanId
    X-B3-ParentSpanId
    X-B3-Sampled
    ```
    

## Delete an access log

1.  On the **Access Logs** tab, click **Disable Logging** in the **Basic Information** section.
    
2.  In the message that appears, read the information and click **OK**.
    

## Log fields

**Field**

**Description**

app\_lb\_id

The ID of the ALB instance.

\_\_topic\_\_

The log topic. The default topic is alb\_layer7\_access\_log.

body\_bytes\_sent

The size of the HTTP response body. Unit: bytes.

client\_ip

This field contains the IP address of a client if the Retrieve Client IP feature is enabled. Otherwise, it contains the IP address of the previous hop from the ALB instance.

host

The domain name or IP address. By default, the value is obtained from request parameters. If no value is obtained from request parameters, the value is obtained from the host header field. If no value is obtained from request parameters or the host header field, the IP address of the backend server that processes the request is used as the value.

http\_host

The Host header of an HTTP request.

http\_referer

The Referer header of an HTTP request.

http\_user\_agent

The User-Agent header of an HTTP request.

http\_x\_forwarded\_for

The X-Forwarded-For header of an HTTP request.

http\_x\_real\_ip

The X-Real-IP header of an HTTP request.

read\_request\_time

The amount of time that CLB takes to process the request. Unit: milliseconds.

request\_length

The combined size of the start line, headers, and body of an HTTP request. Unit: bytes.

request\_method

The request method.

request\_time

The amount of time from when the ALB instance receives the request to when the ALB instance returns a response. Unit: seconds.

request\_uri

The URI of a request.

scheme

Request scheme: HTTP or HTTPS.

server\_protocol

The version of the HTTP protocol that is received by the ALB instance. Examples: HTTP/1.0 and HTTP/1.1.

slb\_vport

The listener port of the ALB instance.

slb\_xtrace

The trace ID of the ALB instance for tracing analysis.

xtrace\_type

The data type used by Xtrace for tracing analysis for the ALB instance. Only Zipkin is supported.

ssl\_cipher

The cipher suite that is used to establish the SSL connection. Example: ECDHE-RSA-AES128-GCM-SHA256.

ssl\_protocol

The protocol that is used to establish the SSL connection. Example: TLS 1.2.

status

The status of the response that is returned by the ALB instance.

tcpinfo\_rtt

The amount of time that is taken to establish a TCP connection. Unit: milliseconds.

time

The time when the log entry was generated. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.

upstream\_addr

The IP address and port of the backend server.

upstream\_response\_time

The amount of time from when ALB establishes a connection to the backend server to when the connection is closed. Unit: seconds.

upstream\_status

The HTTP status code sent from the backend server to the ALB instance.

vip\_addr

The virtual IP address.

write\_response\_time

The amount of time that is taken to respond to the write request. Unit: milliseconds.

client\_port

The port number of the client that sends the request.

slb\_headers

The custom headers. This field is available only after you enable the feature of recording custom headers.

## **FAQ**

### **Can I view data about requests accessing my ALB instance before I create an access log?**

No, you cannot.

You can only view information captured by access logs that you create. Before you create an access log, Simple Log Service does not collect any access data from ALB.
