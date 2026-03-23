**Forward Zone** lets you forward DNS query traffic for internal domain names from an Alibaba Cloud VPC to an external DNS system by creating **Forward Rule** and **Outbound Endpoint**. This feature enables service calls in hybrid cloud scenarios that involve both cloud-based and on-premises environments.

## Available regions

This feature is available in the following regions:

**Public cloud regions**: China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Chengdu), China (Hong Kong), Singapore, UK (London), US (Virginia), Germany (Frankfurt), Japan (Tokyo), Indonesia (Jakarta), China (Ulanqab), China (Guangzhou), China (Heyuan), Philippines (Manila), South Korea (Seoul), SAU (Riyadh - Partner Region), Malaysia (Kuala Lumpur).

## Procedure

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6070975671/CAEQUBiBgIDYwby92BkiIDM4OTgzNTQwZDRlNDQ5ZTBhMGMzNWEyODEyZjk3ZjFk4211536_20240218192731.056.svg)

## **Outbound Endpoint**

### **Add Outbound Endpoint**

1.  Go to [Alibaba Cloud DNS Private Zone](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  On the **Forward Zone** page, select the **Outbound Endpoint** tab, and then click **Add Outbound Endpoint**.
    
3.  Complete and submit the form.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4978329961/p720827.png)
    
    -   **Endpoint Name** Name the endpoint as needed.
        
    -   **Outbound VPC**: The VPC through which all outbound DNS query traffic is forwarded.
        
        **Important**
        
        -   **Outbound Endpoint** **is created, you cannot change its outbound VPC. This prevents service interruptions caused by accidental operations.**
            
        -   **For a list of available regions, see the** [Available regions](#title-17p-pbj-5pt) **section. To request this feature in another region,** [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl?activeTabKey=1) **and specify the region.**
            
        
    -   **Security Group** The security group whose rules are applied to the outbound VPC.
        
        **Important**
        
        -   Ensure that port 53 is open for outbound traffic in the security group. Inbound rules do not affect the forwarding feature.
            
        -   Currently, you can select only unmanaged security groups.
            
        
    -   **Source IP Addresses of Outbound Traffic** Specify available IP addresses from the subnets of a zone. These IP addresses cannot be used by ECS instances. To ensure high availability, you must add at least two source IP addresses for outbound traffic and place them in different zones. You can add a maximum of six source IP addresses for outbound traffic.
        
        **Important**
        
        If you do not enter any IP addresses, the system automatically allocates them.
        
4.  If the role does not exist, Alibaba Cloud DNS Private Zone creates a service-linked role.
    
    **Note**
    
    A prompt is displayed each time you create an **Outbound Endpoint**, but the role is created only if it does not exist.
    
5.  The **Outbound Endpoint** list displays the newly created endpoint and all existing endpoints. The status of an **Outbound Endpoint** can be **Normal**, **Creating**, **Modifying**, **Modify failed.**, or **Abnormal**.
    
    **Important**
    
    The endpoint creation process takes about 5 to 10 minutes. If the status is **Creating**, wait for the process to complete.
    

### **Modify an** **Outbound Endpoint**

1.  Go to [Alibaba Cloud DNS Private Zone](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  On the **Forward Zone** page, select the **Outbound Endpoint** tab, find the target **Outbound Endpoint**, and then click **Edit** in the Actions column.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4978329961/p720828.png)
    
3.  Modify the form items and submit the form.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4978329961/p720829.png)
    
4.  After you submit your changes, the status of the endpoint in the list changes to **Modifying**. You cannot modify or delete the endpoint during this process.
    

### **Delete an** **Outbound Endpoint**

1.  Go to [Alibaba Cloud DNS Private Zone](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  On the **Forward Zone** page, select the **Outbound Endpoint** tab, find the target outbound endpoint, and then click **Delete** in the Actions column.
    
3.  In the confirmation message that appears, confirm that you want to delete the **Outbound Endpoint**.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4978329961/p723284.png)
    

**Note**

If the **Outbound Endpoint** is associated with a **Forward Rule**, you must delete the **Forward Rule** before you can delete the **Outbound Endpoint**. For more information, see [Delete a forwarding rule](#4SxVh).

## **Forward Rule**

### **Create a** **Forward Rule**

1.  Go to [Alibaba Cloud DNS Private Zone](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  On the **Forward Zone** page, select the **Forward Rule** tab, and then click **Add Forward Rule**.
    
3.  Complete and submit the form.
    
    -   **Forward Zone**: The domain name (zone) for which you want to forward DNS queries.
        
        **Important**
        
        -   You can forward requests for all domain names (the root domain) by entering a period: `.`.
            
        -   Top-level domain forwarding is supported. For example, you can enter `com`, `cn`, or `top`.
            
        -   If a resolution request matches multiple forwarding domain names, such as `example.com`, `com`, and `.`, the request matches `example.com` based on the longest-match principle.
            
        
    -   **Rule Name**: Name the rule as needed.
        
    -   **Forward to Address**: The IP addresses and ports of the destination servers to which DNS query traffic is forwarded. You can specify a maximum of six destination servers. Both private IP addresses and public IP addresses are supported.
        
        **Important**
        
        -   If the outbound VPC and inbound VPC are the same, the **IP addresses of the external DNS system** in the **Forward Rule** associated with the **Outbound Endpoint** cannot be the same as the **service IP addresses of the inbound endpoint**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6070975671/CAEQUBiBgMCrzqeF2RkiIDMyNGI5YTViNTQ2ZjQwYTFiMWQ4NjEwMTNiOTczNzFm4239224_20240229173418.329.svg)
        -   The following IP addresses are reserved by the system and cannot be configured as IP addresses of the external DNS system: 100.100.2.136 to 100.100.2.138, and 100.100.2.116 to 100.100.2.118.
            
        -   If the external DNS server uses a public IP address and the ECS instances in the VPC associated with the **Outbound Endpoint** do not have public IP addresses, activate
            
            Create a [NAT Gateway](/help/en/nat-gateway/product-overview/what-is-nat-gateway) and configure [SNAT entries for a VPC NAT gateway](/help/en/doc-detail/270909.html).
            
        
    -   **Outbound Endpoint**: The **Outbound Endpoint** used to forward DNS query traffic to the specified destination IP addresses.
        
        **Note**
        
        -   If the scope of the rule is an Alibaba Cloud VPC, you must configure an **Outbound Endpoint**.
            
        -   If a domain name is scoped to a self-managed DNS cluster, you do not need to configure an **Outbound Endpoint**.
            
        
4.  After you complete the configuration, click **OK**. A **Forward Rule** is added to the **Forward Rule** list.
    
    **Important**
    
    After a **Forward Rule** is created, you cannot modify its rule type, forwarding domain, or **Outbound Endpoint**. To make changes, you must create a new rule and delete the existing one.
    

### **Modify a** **Forward Rule**

1.  Go to [Alibaba Cloud DNS Private Zone](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  On the **Forward Zone** page, select the **Forward Rule** tab, find the target **Forward Rule**, and then click **Modify** in the Actions column.
    
3.  Modify the form items and submit the form.
    

### **Delete a** **Forward Rule**

1.  Go to [Alibaba Cloud DNS Private Zone](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  On the **Forward Zone** page, select the **Forward Rule** tab, find the target **Forward Rule**, and then click **Delete** in the Actions column.
    
3.  A prompt appears asking you to confirm the node deletion.
    
    **Important**
    
    If the current **Forward Rule** is associated with a VPC, you must first disassociate the VPC from the rule before you can delete the rule.
    

## **Effective Scope**

You must configure the **Effective Scope** to enable the **Forward Rule** in the specified VPC.

1.  Go to [Alibaba Cloud DNS Private Zone](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  On the **Forward Zone** page, select the **Forward Rule** tab, find the target **Forward Rule**, and then click **Effective Scope** in the Actions column.
    
3.  Select the VPCs where the **Forward Rule** applies, and then click **OK**. You can [associate VPCs that belong to other accounts](/help/en/dns/pvtz-cross-account-vpc-association).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9177781571/p982600.png)
    

**Important**

-   The VPCs that can be associated with a **Forward Rule** must be in the same region as the **Outbound Endpoint**.
    
-   If you associate different **Forward Rule** with the same VPC, the forwarding domains cannot be the same.
    
-   If a **Forward Rule** and an internal authoritative domain name share the same scope, the forwarding domain name can be the same as the internal authoritative domain name. In this case, the internal authoritative domain takes precedence during domain name resolution in the associated VPC.
    
-   The **Effective Scope** can include both Alibaba Cloud VPCs and self-managed DNS clusters.
