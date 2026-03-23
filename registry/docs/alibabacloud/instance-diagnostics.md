Global Accelerator provides a diagnosis feature to help you troubleshoot instance issues. The instance diagnosis feature can check multiple items of Global Accelerator instances, such as configurations, running status, resource limits, certificates, security policies, payment status, and service access, and provide intelligent suggestions based on the detected exceptions. You can also view previous diagnostic results.

## Prerequisites

-   Network Intelligence Service (NIS) is activated. You can go to the [service activation page](https://common-buy-intl.alibabacloud.com/?commodityCode=netana_free_public_intl) and activate the service.
    
-   The AliyunServiceRoleForNis service-linked role is created. The system automatically creates the AliyunServiceRoleForNis service-linked role the first time you diagnose a GA instance. For more information, see [Service-linked roles](/help/en/nis/security-and-compliance/service-linked-roles#concept-2136433).
    
-   A GA instance that you want to diagnose is created. For more information, see the "Create a standard GA instance" section of the [Create and manage standard GA instances](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#section-wme-8rk-i9x) topic.
    

## Instance diagnosis

Currently, only standard Global Accelerator instances support the instance diagnosis feature. Basic Global Accelerator instances do not support this feature.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, find the Global Accelerator instance that you want to diagnose and click **Diagnose** in the **Monitor/Diagnostics** column.
    
3.  In the **Instance Diagnostics** panel, you can view the progress, summary, and details of the diagnostic task.
    
    -   If an exception is detected, the diagnostic item to which the exception belongs is displayed in the Instance Diagnostics panel. You can click the diagnostic item to view the details.
        
    -   In the **Diagnostic Items** section, select **Show All Diagnostic Items**. All diagnostic items that are supported by Global Accelerator are displayed. You can expand each diagnostic item to view the details.
        
    
    You can also click **Go to the NIS console to view diagnostic records** in the **Instance Diagnostics** panel to go to the NIS console and view more information about the diagnostic task on the **Overview** page.
    

## Diagnostic items and details

The following table describes the diagnostic items that are supported by standard Global Accelerator instances.

**Category**

**Diagnostic item and description**

**Configuration Diagnostics**

-   **Check Instance Status**: checks whether the service status of the GA instance is normal.
    
-   **Configuration Integrity**: checks whether the acceleration configurations of the GA instance are complete.
    
-   **Configuration Correctness**: checks whether the configurations of the GA instance are valid.
    
-   **Access Control**: checks whether network access control lists (ACLs) are configured as whitelists or blacklists for the GA instance. For more information about ACLs, see [Enable access control for GA listeners](/help/en/ga/user-guide/access-control#task-2087382).
    

**Quota Limit Diagnostics**

Quota limit diagnostics are used for assessing the resource utilization status of the system, identifying performance bottlenecks and risks, and promptly optimizing and adjusting the resource allocation. View the risk level for each risk reported in the console.

-   **High Bandwidth Usage of Acceleration IP**: checks the inbound and outbound bandwidth utilization of accelerated IP addresses.
    
-   **Packet Loss Rate Due to Throttling on Acceleration IP**: checks the packet loss of accelerated IP addresses and calculates the packet loss rate.
    
-   **High Bandwidth Usage of Endpoint Group**: checks the inbound and outbound bandwidth usage of endpoint group IP addresses.
    
-   **Packet Loss Rate Due to Throttling on Endpoint Group**: checks the packet loss of endpoint group IP addresses and calculates the packet loss rate.
    
-   **Bandwidth Usage Check for Inter-region Connection**: checks the bandwidth usage of inter-region connections.
    
-   **Packet Loss Check for Inter-region Connection**: checks the packet loss of the inter-region connection and calculates the packet loss rate.
    

**Certificate Diagnostics**

**Certification Expiration**: checks whether the certificates of HTTPS listeners expire within 60 days.

For more information about the certificates of GA, see [Associate and manage certificates](/help/en/ga/user-guide/associate-and-manage-certificates#task-2184154).

**Security Policy Diagnostics**

-   **Anti-DDoS Origin Basic Status**: checks whether the accelerated IP addresses are protected by Anti-DDoS Origin Basic and whether traffic scrubbing or blackholing is triggered.
    
-   **Interception by Cloud Firewall**: checks whether network activities that are related to accelerated IP addresses are protected by Cloud Firewall.
    
-   **Penalty for Security Control**: checks whether network activities that are related to accelerated IP addresses are punished by Security Control of Alibaba Cloud Security.
    
-   **Suspension for Security Reasons**: checks whether accelerated IP addresses are suspended due to security risks.
    

**Cost Diagnostics**

-   **Alerts for Overdue Payments**: checks whether the GA instance or bandwidth plans have overdue payments.
    
-   **Alerts for Expiration**: checks whether the GA instance expires within seven days.
    

**Access Diagnostics**

-   **Health Check Status**: checks the health status of endpoints. For more information about endpoint health checks, see [Enable and manage health checks](/help/en/ga/user-guide/enable-and-manage-health-checks#task-2382619).
    
-   **Access Errors**: checks whether the backend service returns timeout errors or error codes.
    
-   **Traffic Check**: checks whether traffic flows from the Internet to the GA instance based on the access logs of the acceleration region. If the GA instance does not have inbound traffic, access failure occurs. For more information about access logs, see [Work with access logs](/help/en/ga/user-guide/using-access-logs).
    

## References

For more information about NIS, see [Work with instance diagnostics](/help/en/nis/user-guide/work-with-instance-diagnostics#section-isq-diw-99d).
