If issues occur on your Application Load Balancer (ALB) instance, you can use the instance diagnostics feature to identify and troubleshoot issues. You can diagnose ALB instances based on the following aspects: health checks, idle instances, quota limits, certificates, security policies, costs, and listeners. ALB provides the causes of issues and suggestions on how to resolve the issues.

## Prerequisites

The first time that you use the instance diagnostics feature, Network Intelligence Service (NIS) is activated, and the service-linked role AliyunServiceRoleForNis is created. For more information, see [Service-linked role](/help/en/nis/security-and-compliance/service-linked-roles#concept-2136433).

## Procedure

1.  Log on to the [ALB console](https://slb.console.alibabacloud.com/alb).
    
2.  In the top navigation bar, select the region in which the ALB instance is deployed.
    
3.  On the **Instances** page, find the instance that you want to diagnose and click **Start Diagnostics** in the **Instance Diagnostics** column.
    
    If you cannot find the **Instance Diagnostics** column, drag the slider below the table.
    
4.  In the **Instance Diagnostics** panel, view the progress, summary, and details of the diagnostic task.
    
    -   If an exception is detected, the relevant diagnostic item is displayed in the Instance Diagnostics panel. You can click the diagnostic item to view the details.
        
    -   In the **Diagnostic Item** section, select **Show All Diagnostic Items**. All supported diagnostic items are displayed. You can view the details of all diagnostic items.
        
    -   In the upper part of the **Instance Diagnostics** panel, click **View Historical Diagnostics in NIS Console** to go to the NIS console and view more diagnostic information about the ALB instance.
        
    
5.  After you view the diagnostic information, click **Close**.
    

## Supported diagnostic items

**Category**

**Diagnostic item and description**

**Health Check Diagnostics**

**ALB Health Check Status**: analyzes the health check status of the ALB listeners.

**Certificate Diagnostics**

**Diagnostics of Certificate Validity Period**: checks the validity periods of certificates.

**Quota Limit Diagnostics**

-   **QPS Overage Check**: checks whether the number of QPS over virtual IP addresses (VIPs) exceeds the quota.
    
-   **New Connection Check**: checks whether new connections are evenly distributed among VIPs.
    
-   **Check whether the number of concurrent connections exceeds the upper limit**: checks whether the number of concurrent connections exceeds the quota.
    
-   **Check the bandwidth usage of the ALB instance**: checks the usage of the bandwidth among multiple VIPs and checks whether the bandwidth exceeds the quota or is evenly distributed among the VIPs.
    

**Configuration Diagnostics**

-   **Idle Server Check**: checks whether servers are idle.
    
-   **Listener Status Check**: checks whether listeners that stop working exist.
    
-   **The number of listeners exceeds the threshold**: checks whether the number of listeners configured for ALB instances exceeds 70% of the quota.
    
-   **Check for Idle ALB Instance**: checks whether listeners are configured for ALB instances.
    
-   **Alert for Forwarding Rule Usage**: checks whether the number of forwarding rules exceeds 70% of the quota.
    

**Security Policy Diagnostics**

-   **Penalty for Security Control**: checks whether network activities related to EIPs associated with ALB instances are penalized by Alibaba Cloud Security Control.
    
-   **Anti-DDoS Origin Basic Status**: checks whether network activities related to EIPs associated with ALB instances are protected by Anti-DDoS Origin.
    
-   **Interception by Cloud Firewall**: checks whether network activities related to EIPs associated with ALB instances are intercepted by Cloud Firewall.
    
-   **ACL Configuration Check**: checks whether ACLs are configured as whitelists or blacklists for ALB instances.
    

**Access Diagnostics**

-   **QPS Distribution Check**: checks whether the number of QPS over VIPs is evenly distributed.
    
-   **Check the distribution of new connections among multiple virtual IP addresses**: checks the distribution of new connections among VIPs.
    
-   **Concurrent Connection Distribution Check**: checks the distribution of concurrent connections among instances.
    
-   **Check the percentage of TLS handshake failure on the client**: checks the percentage of Transport Layer Security (TLS) handshake failures and active connections on the client.
    
-   **Check the bandwidth allocation**: checks the bandwidth allocation among multiple VIPs.
    
-   **Check the percentage of TLS handshake failures on the server**: checks the percentage of TLS handshake failures and active connections on the server.
    
-   **5XX Status Codes**: checks the distribution of HTTP 5xx status codes for all listeners of ALB instances.
    
-   **4XX Status Codes**: checks the distribution of HTTP 4xx status codes for all listeners of ALB instances.
    

**Cost Diagnostics**

-   **Alert for EIP Bandwidth Plan Expiration**: checks whether the Internet Shared Bandwidth instance is about to expire.
    
-   **Alert for ALB Instance Expiration**: checks whether the ALB instance is about to expire within 15 days.
    
-   **Alert for Overdue Payment of ALB Instance**: checks whether the ALB instance has overdue payments.
    

## FAQ

**Can the instance diagnostics feature diagnose the historical status of an instance within a specified time period?**

No, the instance diagnostics feature cannot diagnose the historical status of an instance within a specified time period.

This feature can analyze the status of an instance only within the last 15 minutes.

For example, an instance fails due to an exception at 09:00:00 and recovers at 09:30:00. If you diagnose the instance at 10:00:00, you can only analyze the instance status from 09:45:00 to 10:00:00. You cannot identify the cause of exception from 09:00:00 to 09:30:00.

## **References**

For more information about common issues and how to handle the issues, see [FAQ about ALB instances](/help/en/slb/application-load-balancer/support/faq-about-alb).
