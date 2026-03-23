This topic describes how to diagnose elastic IP addresses (EIPs) and troubleshoot EIP issues. The instance diagnostics feature allows you to check EIP configurations and status, and provides solutions based on detected EIP issues.

## Prerequisites

-   Network Intelligence Service (NIS) is activated. You can activate NIS on the [Service activation](https://common-buy-intl.alibabacloud.com/?commodityCode=netana_free_public_intl) page.
    
-   If this is the first time that you perform an instance diagnostic, the system automatically creates the service-linked role AliyunServiceRoleForNis. For more information, see [Service-linked roles](/help/en/nis/security-and-compliance/service-linked-roles#concept-2136433).
    
-   An EIP is created. For more information, see [Apply for EIPs](/help/en/eip/apply-for-new-eips#task-bh5-dll-vdb).
    

## Procedure

1.  Log on to the [Elastic IP Addresses console](https://vpc.console.alibabacloud.com/eip).
    
2.  In the top navigation bar, select the region where the EIP is created.
    
3.  On the **Elastic IP Addresses** page, find the EIP and choose **Diagnose** > **Instance Diagnosis** in the **Diagnose** column.
    
4.  In the **Instance Diagnostics** panel, you can view the progress, summary, and details of the diagnostic task.
    
    In the **Diagnostic Items** section, you can select **Show All Diagnostic Items** to view all diagnostic items of the EIP. In the upper part of the **Instance Diagnostics** panel, you can click **Go to the NIS console to view diagnostic records** to go to the **Overview** page of the NIS console to view more details of the EIP diagnostic. For more information about EIP diagnostic items, see [Diagnostic items](#section-hif-6hq-v83).
    
5.  To further diagnose Internet ISP issues of the EIP, perform the following operations.
    
    1.  In the lower part of the **Diagnostic Items** in the **Instance Diagnostics** panel, click **Internet Diagnostics** or **Re-diagnose**.
        
    2.  In the **Internet Diagnostics** dialog box, specify **Access Area** and **Destination Instance**, and click **OK**.
        
    
    After you specify **Access Area**, you can check the Internet connectivity between ISPs in the Chinese mainland and the EIP, or between ISPs outside the Chinese mainland and the EIP. If access fails, the system provides you with possible causes, as well as suggestions on how to solve the issues. For more information, see [Internet diagnostic results](#section-hif-6hq-v83).
    

## Diagnostic items and details

### Diagnostic items and details

The following table describes the EIP diagnostic items.

**Category**

**Diagnostic item and description**

**Configuration Diagnostics**

-   **Instance Status**: checks the status of the EIP.
    
-   **EIP Allocation Status**: checks whether the EIP is associated with an instance.
    

**Quota Limit Diagnostics**

-   **High EIP Bandwidth Usage**: checks whether the bandwidth usage of the EIP is normal.
    
-   **Packets Dropped Due to EIP Bandwidth Throttling**: checks whether packet loss occurs due to EIP bandwidth throttling.
    

**Security Policy Diagnostics**

-   **Anti-DDoS Origin Basic Status**: checks whether the EIP is protected by Anti-DDoS.
    
-   **Interception by Cloud Firewall**: checks whether EIP behaviors are intercepted by Cloud Firewall.
    
-   **Penalty for Security Control**: checks whether EIP behaviors are punished by Alibaba Cloud Security.
    
-   **Suspension for Security Reasons**: checks whether the EIP is suspended for security reasons.
    

**Cost Diagnostics**

-   **Alerts for Overdue Payments**: checks whether the EIP has overdue payments.
    
-   **Alerts for Expiration**: checks whether the EIP expires within 15 days.
    

### Internet diagnostic result

The following table describes the possible causes of access failure and provides suggestions after you run EIP Internet diagnostics.

**Possible cause**

**Suggestion**

Blocked by cloud security policies

Check whether the request is blocked by the security policies of the following services:

-   Anti-DDoS
    
    Anti-DDoS Origin Basic automatically sets a scrubbing threshold based on the EIP bandwidth. When traffic reaches the threshold, Anti-DDoS Origin Basic scrubs traffic regardless of whether the traffic is considered service traffic or attack traffic. If the amount of Internet traffic to a cluster exceeds the capacity of Anti-DDoS, the traffic is routed to a blackhole to protect the cluster. In this case, all traffic is blocked. For more information about the EIP scrubbing threshold, see [Anti-DDoS Origin Basic](/help/en/eip/anti-ddos-origin-basic#concept-2225478).
    
-   Blocked by WAF
    
    Access fails after your website is connected to Web Application Firewall (WAF). For more information about troubleshooting, see [How do I troubleshoot website access exceptions?](/help/en/waf/how-to-troubleshoot-website-access-exceptions#concept-zz3-xyl-q2b)
    
-   Blocked by Cloud Firewall
    
    Cloud Firewall provides the Internet firewall feature to detect the data transfer between the Internet and public IP addresses. If Cloud Firewall is enabled for the EIP, requests may be blocked by access control policies. For more information, see [Create access control policies for the Internet firewall](/help/en/cloud-firewall/cloudfirewall/user-guide/create-inbound-and-outbound-access-control-policies-for-the-internet-firewall#concept-xx1-wgr-ggb).
    

Blocked by security policies of the associated resource

Check whether requests are blocked by the resource associated with the EIP.

For example, if the EIP is associated with an Elastic Compute Service (ECS) instance, requests may be blocked by security rules of the ECS instance. You need to check iptables rules, firewall rules, and third-party security applications of the ECS instance, and check whether the network driver is properly installed.

Blocked by the ISP

After you complete the preceding steps, if the EIP still cannot be accessed, another possible cause for EIP access failure is ISP blocking.

You can run an Internet diagnostic on the EIP to check the regions where access to the EIP fails. For more information, see [Diagnose an EIP](/help/en/eip/eip-diagnostics#task-2209044).

If the EIP is blocked by the ISP, refer to the following suggestions:

-   Contact the ISP.
    
-   To view public network performance and traffic data for an EIP, ingest its VPC Flow Logs into the [NIS Traffic Analyzer](/help/en/nis/user-guide/traffic-analyzer/). To do this, configure the collection target of the flow log to be the Elastic Network Interface (ENI) that the EIP is associated with.
    
-   If the service is business-critical, you can use another EIP. To use another EIP, disassociate the original EIP from the associated resource, and then associate a new EIP with the resource. For more information, see [Associate an EIP with a cloud resource](/help/en/eip/bind-an-eip-to-a-cloud-resource/#task-bh5-dll-vdb) and [Disassociate an EIP from a cloud resource](/help/en/eip/disassociate-an-eip-from-a-cloud-resource#task-bh5-dll-vdb).
    

## References

-   For more information about the instance diagnostics feature, see [Work with instance diagnostics](/help/en/nis/user-guide/work-with-instance-diagnostics#section-isq-diw-99d).
    
-   You can also use the self-service diagnostics feature to troubleshoot EIP issues, such as access failures, access exceptions, quota issues, and fee issues. For more information, see [Troubleshoot issues](/help/en/eip/troubleshooting).
