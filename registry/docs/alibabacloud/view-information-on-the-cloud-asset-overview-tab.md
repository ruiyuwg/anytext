The Cloud Asset Overview tab displays the overview of cloud assets, network topology, and visualized security situation. You can view the security situation of your assets from the dimensions of security score, security services, and cloud services. The information helps you manage cloud assets in a centralized manner and improve O&M efficiency.

## Limits

Only the Enterprise and Ultimate editions of Security Center support this feature. For more information about how to purchase and upgrade Security Center, see [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center#task-lxj-3bc-zdb) and [Upgrade and downgrade Security Center](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center#task-o55-wgb-b2b).

## Cloud Asset Overview

**Note**

We recommend that you use the latest version of the Chrome browser to view information on the Cloud Asset Overview tab.

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select **China** as the region of the asset that you want to protect.
    
2.  In the left-side navigation pane, choose **Assets** > **Overview**.
    
3.  Click the **Cloud Asset Overview** tab.
    
4.  On the **Cloud Asset Overview** tab, view the following information about assets:
    
    -   **Overview of assets and network topology**
        
        The security situation and network topology of your assets in all regions are displayed. You can view the security situation of your assets such as Elastic Compute Service (ECS) instances, Server Load Balancer (SLB) instances, and NAT gateways in the current region. In the network topology, you can view the virtual private cloud (VPC) in which an ECS instance resides and the security services that process the Internet traffic destined for your servers. For example, the Internet traffic is first processed by Alibaba Cloud DNS (DNS), then examined by Anti-DDoS Pro and Anti-DDoS Premium, Web Application Firewall (WAF), and Cloud Firewall, and finally passes through SLB and NAT Gateway to reach your ECS instance.
        
        Different colors indicate different risk levels. The following list describes the mappings between colors and risk levels:
        
        -   **Red**: The asset has high-level risks. We recommend that you view and handle the risks at the earliest opportunity.
            
        -   **Orange**: The asset has medium-level risks.
            
        -   **Green**: The asset does not have risks.
            
        
        You can move the pointer over an asset to view detailed information about the asset. The information includes the asset ID, security status, public IP address, private IP address, detected alerts, and vulnerabilities. The following list describes the icons used in the network topology:
        
        -   ![告警标识](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6387153761/p112872.png): alert. The number to the right of the icon indicates the number of alerts that are detected in the asset.
            
        -   ![漏洞标识](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6387153761/p112873.png): vulnerability. The number to the right of the icon indicates the number of vulnerabilities that are detected in the asset.
            
        -   ![基线检查风险项标识](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6387153761/p112874.png): baseline risk. The number to the right of the icon indicates the number of baseline risk items that are detected in the asset.
            
        
    -   **Security Score**
        
        The **Security Score** section displays the security score of your assets. In this section, you can click **Reinforce** to handle the security risks that are detected in your assets. For more information about the security score, see [Secure Score](/help/en/security-center/user-guide/asset-security-overview#section-moa-2is-or3).
        
    -   **Security Products**
        
        The **Security Products** section displays the number of Alibaba Cloud security services that you purchased and the entry point to the console of each security service. In this section, you can click the name of a security service to go to the console of the security service.
        
    -   **Cloud Products**
        
        The **Cloud Products** section displays the number of Alibaba Cloud services that you purchased. You can view the network topology of cloud assets by zone. In this section, you can click **Availability Zone** to view the risk statistics in the displayed zones. You can click the name of a zone to view the network topology of cloud assets in the zone. You can also click the name of a cloud service to view the risk statistics about the cloud service.
