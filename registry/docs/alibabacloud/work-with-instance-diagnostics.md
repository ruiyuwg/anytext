Instance diagnosis provides a comprehensive health check for your cloud product instances. It covers diagnostic items such as instance configurations, status, fees, and security policies. It also provides diagnostic results and solutions to resolve exceptions.

## Background information

You can use instance diagnosis to diagnose the following types of instances:

-   Classic Load Balancer (CLB)
    
-   Application Load Balancer (ALB)
    
-   Network Load Balancer (NLB)
    
-   NAT Gateway
    
-   Elastic IP Address (EIP)
    
-   Global Accelerator (GA)
    
-   VPN Gateway
    
-   Virtual Border Router (VBR)
    
-   TransitRouter
    

## Diagnose an instance

1.  Log on to the [NIS console](https://nis.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Self-diagnostics** > **Instance Diagnostics**.
    
3.  On the **Instance Diagnostics** page, click **Diagnose Instance**.
    
    If this is the first time you run a diagnosis, the system automatically creates a service-linked role (AliyunServiceRoleForNis) to perform the required operations. For more information about AliyunServiceRoleForNis, see [Service-linked Role](/help/en/nis/security-and-compliance/service-linked-roles#concept-2136433).
    
4.  In the **Instance Health Diagnostics** dialog box, configure the instance information, and then click **Start**.
    
    **Configuration**
    
    **Description**
    
    **Diagnosis Type**
    
    Select the type of instance to diagnose.
    
    -   **CLB**: Diagnose a CLB instance.
        
    -   **ALB**: Diagnose an ALB instance.
        
    -   **NLB**: Diagnose an NLB instance.
        
    -   **NAT Gateway**: Diagnose an enhanced Internet NAT gateway instance.
        
    -   **Elastic IP Address**: Diagnose an EIP instance.
        
    -   **Global Accelerator**: Diagnose a GA instance.
        
    -   **VPN**: Diagnose a VPN Gateway instance.
        
    -   **Virtual Border Router**: Diagnose a VBR instance.
        
    -   **TransitRouter**: Diagnose a TR instance.
        
    
    **Region**
    
    Select the region where the instance to be diagnosed is deployed.
    
    **Instance**
    
    Select the specific instance in the selected region.
    
5.  In the ****Diagnostic Details**** panel, you can view the diagnosis progress, result statistics, and specific details.
    
    For example, suppose you diagnose a CLB instance created in the China (Qingdao) region. This CLB instance does not have a listener configured. After the diagnosis, the **Diagnostic Details** panel displays the following result: **Some diagnostic items of the instance show anomalies. Resolve the issues at the earliest opportunity.**
    
    In the **Diagnostic Details** panel, you can also select **Show All Diagnostic Items** in the **Diagnostic Items** section to view all diagnostic items and their results. For more information, see [Instance diagnosis items](#section-a3v-syc-iic).
    
6.  **Optional:** If you are diagnosing an EIP instance and need to check for carrier-related issues, you can run an Internet diagnosis on the EIP instance.
    
    1.  In the Internet Diagnosis section of the **Diagnostic Details** panel, click **Internet Diagnosis**.
        
    2.  In the dialog box that appears, select an **Access Area** and click **OK**.
        
    
    Based on the selected **Access Area**, you can check the Internet connectivity from carriers inside and outside the Chinese mainland to the target EIP. If an access issue is found, the system provides possible causes and troubleshooting suggestions.
    

## Instance diagnosis items

The following table describes the main diagnostic items.

**Diagnostic item**

**Description**

Health check diagnosis

Checks the health check status of listeners on SLB instances.

Configuration diagnosis

Checks whether the instance status and configurations are normal.

Capacity limit diagnosis

Checks for bandwidth limit excess, packet loss, number of connections, number of queries, and bandwidth usage.

Certificate diagnosis

Checks whether the instance certificate is valid.

Security policy check

Checks whether relevant security policies are added to the instance, such as the basic DDoS protection status, Cloud Firewall interception, and security control penalties.

Fee diagnosis

Checks for overdue payment warnings and status.

Service access diagnosis

Checks the number of connections, handshake failure rate, bandwidth, and error code distribution during service access.

Routing diagnosis

Checks for route conflicts between network instances under a TransitRouter and checks the match between VPC destination-based routes and TransitRouter destination-based routes.

For more information about the detailed diagnostic items for cloud service instances, see:

-   [ALB instance diagnosis](/help/en/slb/application-load-balancer/user-guide/diagnose-alb-instances)
    
-   [Internet NAT gateway instance diagnosis](/help/en/nat-gateway/user-guide/diagnose-an-internet-nat-gateway)
    
-   [EIP instance diagnosis](/help/en/eip/eip-diagnostics)
    
-   [GA instance diagnosis](/help/en/ga/user-guide/instance-diagnostics)
    
-   [VPN Gateway instance diagnosis](/help/en/vpn/sub-product-ipsec-vpn/user-guide/diagnose-a-vpn-gateway-for-ipsec-vpn)
    
-   [Virtual Border Router instance diagnosis](/help/en/express-connect/user-guide/perform-diagnostics-on-vbrs)
    
-   [Transit Router instance diagnosis](/help/en/cen/user-guide/diagnose-a-transit-router)
    

## More operations

On the **Instance Diagnostics** page, you can perform the following operations.

-   View a report
    
    Find the instance for which you want to view the diagnostic report. In the **Actions** column, click **View Report**. The report details are displayed in the **Diagnostic Details** panel.
    
-   Diagnose again
    
    To diagnose an instance again, find the instance and click **Re-diagnose** in the **Actions** column.
    
-   Delete instance diagnosis records
    
    To delete the diagnosis records for an instance, find the instance and click **Delete** in the **Actions** column. In the dialog box that appears, click **OK**.
    

## FAQ

### Does instance diagnosis support diagnosing the historical status of an instance?

No, it does not.

Instance diagnosis supports only real-time diagnosis of an instance's status by checking data from the last 15 minutes. It does not support diagnosing the historical status.

For example, an EIP instance becomes unreachable at 09:00:00 because of an issue and recovers at 09:30:00. If you run a diagnosis for this EIP instance at 10:00:00, the diagnosis covers only the instance status from 09:45:00 to 10:00:00. You cannot use the diagnosis to identify the cause of the issue that occurred from 09:00:00 to 09:30:00.

### The listener of my CLB instance is configured with health checks. Why does the diagnosis result show an abnormal status? Can instance diagnosis identify the specific cause of the exception?

Instance diagnosis checks the health of all listeners for a CLB instance. The diagnosis result is abnormal if health checks are not configured for the CLB instance or if the health check status is abnormal.

An abnormal health check status for a CLB instance can be caused by many factors. Instance diagnosis provides a "further diagnosis" feature. For example, if a service is not started on the listener port of a CLB backend server, or if a network filter (such as iptables) is configured on the operating system of a CLB backend server, you can use the "further diagnosis" feature to identify the specific cause of the issue.

### Why does the further diagnosis feature not support some CLB backend servers?

The further diagnosis feature currently supports only CLB backend servers that run CentOS, Ubuntu, and Alibaba Cloud Linux. This feature is not supported on CLB backend servers that run other operating systems, such as Windows.

### What are the typical scenarios for EIP instance diagnosis?

When an EIP that is attached to an ECS instance cannot be accessed from the Internet, you can run a diagnosis on the EIP to find the cause. Then, you can analyze and resolve the issue based on the specific diagnostic items and suggestions. Common causes include the following:

-   The EIP is under a DDoS attack and its traffic has reached the basic protection threshold. As a result, the EIP enters a blackhole filtering status.
    
-   The EIP is blocked by the security department because of violations.
    
-   The traffic of the EIP has reached the limit of its associated bandwidth plan, which affects normal traffic forwarding.
