## Overview

The forward module forwards Domain Name System (DNS) requests for intranet zones in virtual private clouds (VPCs) to external DNS systems based on the configured forwarding rules and outbound endpoints. This is suitable for DNS resolution in hybrid cloud scenarios and DNS resolution between cloud and on-premises networks.

## Supported regions

The forward module is available in the following regions:

-   **Alibaba Cloud public cloud**: China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Chengdu), Hong Kong (China), Singapore, UK (London), US (Virginia), Germany (Frankfurt), Japan (Tokyo), Indonesia (Jakarta), China (Ulanqab), China (Guangzhou), China (Heyuan), Philippines (Manila), South Korea (Seoul), SAU (Riyadh - Partner Region), and Malaysia (Kuala Lumpur).
    
-   **Alibaba Finance Cloud**: China East 2 Finance and China South 1 Finance.
    

## Procedure

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3426637371/CAEQHRiBgIDs74GQ9BgiIDA4ZjVhMTAzYTU5ZjQ4NWE5ZGU2NWFmNDFmZGMwYjNj4211536_20240218192731.056.svg)

## **Outbound endpoints**

### **Create an outbound endpoint**

1.  Log on to the [Alibaba Cloud DNS console](https://dc.console.alibabacloud.com/dns/).
    
2.  In the left-side navigation pane, click **Private DNS (PrivateZone)**. In the upper-right corner of the Private DNS (PrivateZone) page, click **Configuration Mode**, and click the **Forward Module** tab.
    
3.  On the **Forward Module** tab, click the **Outbound Endpoint** tab, and click **Create Outbound Endpoint**.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4978329961/p723244.png)
    
4.  In the **Create Outbound Endpoint** panel, specify the following parameters: **Endpoint Name**, **Outbound VPC**, **Security Group**, and **Source IP Addresses of Outbound Traffic**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4978329961/p720827.png)
    
    -   **Endpoint Name:** Enter a name for the outbound endpoint based on your business requirements.
        
    -   **Outbound VPC**: Select a VPC. All outbound DNS requests in the forward module are forwarded by this VPC.
        
        **Important**
        
        -   **After you create an outbound endpoint, you cannot change the specified outbound VPC of the endpoint. This prevents the forwarding of DNS requests from being interrupted due to misoperations.**
            
        -   **For more information about the regions that support the forward module, see the "Supported regions" section of this topic. Alibaba Cloud continuously updates the module to support more regions. If you want other regions to support the forward module,**
            
            [](https://selfservims.console.alibabacloud.com/ticket/createIndex?spm=5176.2020520129.0.0.104746aeExF3rR)
            
            [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.12818093.top-nav.dticket.6cb216d0lhCUgm#/ticket/list)**.**
            
        
    -   **Security Group:** Select a security group that is associated with the VPC. The forwarding rules of the security group apply to the VPC.
        
        **Important**
        
        -   Configure a security group outbound rule that allows outbound traffic on port 53. Inbound rules do not affect the forwarding feature.
            
        -   Only security groups that are not in managed mode are supported. For more information, see [Managed security group](/help/en/ecs/user-guide/managed-security-groups).
            
        
    -   **Source IP Addresses of Outbound Traffic**: Enter available IP addresses that are not used by Elastic Compute Service (ECS) instances in the subnets in the specified zones. You must specify two to six IP addresses for the outbound endpoint to ensure high availability. We recommend that you specify the IP addresses in different zones.
        
        **Important**
        
        If you do not specify IP addresses, the system automatically allocates IP addresses to the outbound endpoint.
        
5.  Click **OK**. Private DNS creates a service-linked role if the role does not exist.
    
    **Note**
    
    Note: A message is displayed each time you create an outbound endpoint. If a role exists, no role is created.
    
6.  View the created outbound endpoints on the Outbound Endpoint tab. The states of outbound endpoints include **Normal**, **Creating**, **Create Failed**, **Modifying**, **Modify Failed**, and **Abnormal**.
    
    **Important**
    
    -   The system takes 5 to 10 minutes to create an outbound endpoint. If an outbound endpoint is in the Creating state, wait for a few minutes.
        
    -   You cannot modify or delete an outbound endpoint that is in the Creating state. If an outbound endpoint is in the Abnormal or Modify Failed state, [submit a ticket](https://smartservice.console.alibabacloud.com/?#/ticket/createIndex) to troubleshoot issues.
        
    

### **Modify the configurations of an outbound endpoint**

1.  Log on to the [Alibaba Cloud DNS console](https://dc.console.alibabacloud.com/dns/).
    

2.  In the left-side navigation pane, click **Private DNS (PrivateZone)**. In the upper-right corner of the Private DNS (PrivateZone) page, click **Configuration Mode**, and click the **Forward Module** tab.
    
3.  On the **Forward Module** tab, click the **Outbound Endpoint** tab, find the outbound endpoint whose configurations you want to modify, and then click **Edit** in the **Actions** column.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4978329961/p720828.png)
    
4.  In the **Modify Outbound Endpoint** panel, modify the following parameters based on your business requirements: **Endpoint Name** and **Source IP Addresses of Outbound Traffic****.**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4978329961/p720829.png)
    
5.  Click **OK**. The state of the endpoint changes to **Modifying**. You cannot **modify** or **delete** the endpoint that is in the Modifying state.
    

### **Delete an outbound endpoint**

1.  Log on to the [Alibaba Cloud DNS console](https://dc.console.alibabacloud.com/dns/).
    
2.  In the left-side navigation pane, click **Private DNS (PrivateZone)**. In the upper-right corner of the Private DNS (PrivateZone) page, click **Configuration Mode**, and click the **Forward Module** tab.
    
3.  On the **Forward Module** tab, click the **Outbound Endpoint** tab. Find the outbound endpoint that you want to delete, and click **Delete** in the **Actions** column. In the **Delete Confirmation** message, click **OK**.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4978329961/p723284.png)
    

**Note**

If the outbound endpoint is associated with a forwarding rule, delete the forwarding rule before you delete the outbound endpoint. For more information, see the [Delete a forwarding rule](#4SxVh) section of this topic.

## Forwarding rules

### **Create a forwarding rule**

1.  Log on to the [Alibaba Cloud DNS console](https://dc.console.alibabacloud.com/dns/).
    
2.  In the left-side navigation pane, click **Private DNS (PrivateZone)**. In the upper-right corner of the Private DNS (PrivateZone) page, click **Configuration Mode**, and click the **Forward Module** tab.
    
3.  On the **Forward Module** tab, click the **Forward Rule** tab, and click **Create Forward Rule**.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4978329961/p723246.png)
    
4.  In the **Create Forward Rule** panel, specify the following parameters:
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4978329961/p723247.png)
    

-   **Rule Name**: Enter a name for the forwarding rule based on your business requirements.
    
-   **Rule Type**: You can select only **Forward to External IP Address**.
    
-   **Forward Zone**: Enter the zone for which you want to forward DNS requests.
    
    **Important**
    
    All domain names (root domain names) are supported. `.` is the root domain name.
    
    Top-level domain names are supported. `com`, `cn`, and `top` are the top-level domain names.
    
    If a DNS request matches multiple levels of domain name, such as `example.com`,`com`, and`.`, the DNS record of the zone with the longest name takes effect. In this example, the DNS request matches the domain name `example.com`.
    
-   **Outbound Endpoint: Select an outbound endpoint. The outbound endpoint is used to forward DNS requests to the specified IP addresses.**
    
-   **IP Addresses and Ports of External DNS**: Enter the IP address and port number of the destination server to which the DNS requests are forwarded. You can enter up to six IP addresses and port numbers. Both private and public IP addresses are supported.
    

**Important**

-   If a VPC serves as both the inbound VPC and outbound VPC, the **IP addresses of external DNS servers** cannot be the same as the **IP addresses of the inbound endpoint** in the VPC. The IP addresses of external DNS servers are specified in the forwarding rule associated with the outbound endpoint in the same VPC.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3426637371/CAEQMRiBgMCjr5XonRkiIDljYmY4ODcxMDU4NzQ5NGZhYzQ1MTljODM5NjZjMzkw4239224_20240229173418.329.svg)
-   The following IP addresses are reserved by the system. You cannot specify them as the IP addresses of external DNS systems. 100.100.2.136 to 100.100.2.138 and 100.100.2.116 to 100.100.2.118.
    
-   If you specify public IP addresses as the IP addresses of the external DNS servers and ECS instances in the outbound VPC are not assigned public IP addresses, activate
    
    NAT Gateway for the VPC and create and manage SNAT entries on a NAT gateway. For more information, see [What is NAT Gateway](/help/en/nat-gateway/product-overview/what-is-nat-gateway) and [Create and manage SNAT entries on a VPC NAT gateway](/help/en/doc-detail/270909.html).
    

5.  After you specify the preceding parameters, click **OK**. The created forwarding rule is displayed in the forwarding rule list.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4978329961/p723248.png)
    

**Important**

You cannot modify the following parameters of a created forwarding rule: Rule Type, Forward Zone, and Outbound Endpoint. If you want to modify the preceding parameters, create a new forwarding rule and delete the original rule.

### **Modify a forwarding rule**

1.  Log on to the [Alibaba Cloud DNS console](https://dc.console.alibabacloud.com/dns/).
    
2.  In the left-side navigation pane, click **Private DNS (PrivateZone)**. In the upper-right corner of the Private DNS (PrivateZone) page, click **Configuration Mode**, and click the **Forward Module** tab.
    
3.  On the **Forward Module** tab, click the **Forward Rule** tab. Find the forwarding rule that you want to modify and click **Edit** in the **Actions** column.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4978329961/p723249.png)
    
4.  In the Modify Forward Rule panel, modify the **Rule Name** and **IP Addresses and Ports of External DNS** parameters, and click **OK**.
    

### **Delete a forwarding rule**

1.  Log on to the [Alibaba Cloud DNS console](https://dc.console.alibabacloud.com/dns/).
    
2.  In the left-side navigation pane, click **Private DNS (PrivateZone)**. In the upper-right corner of the Private DNS (PrivateZone) page, click **Configuration Mode**, and click the **Forward Module** tab.
    
3.  On the **Forward Module** tab, click the **Forward Rule** tab. Find the forwarding rule that you want to delete and click **Delete** in the **Actions** column.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4978329961/p723250.png)
    
4.  In the **Delete Confirmation** message, click **OK**. If the forwarding rule is configured with an effective scope, the operation fails.
    
    **Important**
    
    You must disassociate the forwarding rule from VPCs before you delete the forwarding rule. For more information about how to disassociate VPCs from a forwarding rule, see the [Remove an effective scope from a forwarding rule](#p-f5j-to9-zw0) section of this topic.
    

## Manage the effective scope of a forwarding rule

### **Specify an effective scope for a forwarding rule**

After you create a forwarding rule, you must specify an **effective scope** for the forwarding rule. In this way, the forwarding rule can take effect in the corresponding VPCs within the effective scope.

1.  Log on to the [Alibaba Cloud DNS console](https://dc.console.alibabacloud.com/dns/).
    
2.  In the left-side navigation pane, click **Private DNS (PrivateZone)**. In the upper-right corner of the Private DNS (PrivateZone) page, click **Configuration Mode**, and click the **Forward Module** tab.
    
3.  On the **Forward Module** tab, click the **Forward Rule** tab. Find the desired forwarding rule and click **Effective Scope of Forward Rule** in the **Actions** column.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4978329961/p723251.png)
    
4.  Select one or more VPCs where the forwarding rule will take effect and click **OK****.** You can associate the forwarding rule with VPCs across accounts. For more information, see [Associate a zone with VPCs across accounts](/help/en/privatezone/latest/associate-vpc-across-accounts).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4978329961/p723282.png)
    

**Important**

-   You can associate a forwarding rule with only VPCs that are deployed in the same region as the outbound endpoint specified in the rule.
    
-   If different forwarding rules are associated with the same VPC, the forward zones specified in the rules cannot be the same.
    
-   If a forwarding rule has the same effective scope as a built-in authoritative zone, the forward zone can be the same as the built-in authoritative zone, and the DNS requests in the associated VPCs are processed by the built-in authoritative module first.
    

### **Remove an effective scope from a forwarding rule**

1.  On the Forward Rule tab, find the desired forwarding rule that is configured with an effective scope, and click **Effective Scope of Forward Rule** in the Actions column.
    
2.  In the **Effective Scope of Forward Rule** panel, delete the associated VPCs and click **OK**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4978329961/p723283.png)
