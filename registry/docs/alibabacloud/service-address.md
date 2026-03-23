## **Overview**

Service addresses are the Domain Name System (DNS) server addresses of Private DNS. You can configure DNS server addresses for clients in the cloud such as Elastic Compute Service (ECS) instances and elastic container instances. You can also configure IP addresses of DNS servers in the cloud accessed by clients outside the cloud such as hosts and DNS servers outside the cloud. Service addresses can be assigned by the system or specified by customers. By default, the DNS server addresses of Private DNS allocated by the system are `100.100.2.136` and `100.100.2.138`. The DNS servers provide the DNS service for all virtual private clouds (VPCs) in all regions by using the Anycast method. The DNS server addresses are used free of charge.

If you want to use the private IP addresses in a VPC to provide intranet DNS resolution services, you can create an inbound endpoint to specify custom DNS server addresses of Private DNS. The number of addresses varies based on your business requirements and the addresses are billed based on the number. For more information about billing rules, see the [Service address](/help/en/dns/product-billing#9e2c810a5cb01) section of the Pricing topic.

This topic describes how to create an inbound endpoint to specify custom DNS server addresses of Private DNS.

## **Supported regions**

-   You can specify the IP addresses of VPCs in the South Korea (Seoul), China (Hongkong), Singapore, China (Beijing), China (Shanghai), China (Hangzhou), China (Ulanqab), Philippines (Manila), US (Virginia), Malaysia (Kuala Lumpur), Germany (Frankfurt), Japan (Tokyo) , Indonesia (Jakarta) region as custom DNS server addresses of Private DNS.
    
-   Regions in the Finance Cloud: China (Beijing), China (Hangzhou).
    

## **Limits**

**Item**

**Limit**

**Description**

Maximum number of DNS requests sent to an inbound IP address that is associated with an inbound endpoint of Standard Edition

5,000 per second

Up to 5,000 DNS requests can be sent to an inbound IP address per second. Once the upper limit is exceeded, DNS request packets are randomly discarded. The service level agreement (SLA) compliance cannot be guaranteed.

Maximum number of DNS requests sent from the IP address of a client

5,000 per second

-   Up to 5,000 DNS requests and up to 600 external recursive DNS requests can be sent from the IP address of a client per second.
    
-   The number of DNS requests sent to an inbound VPC per second is not limited. Up to 5,000 external recursive DNS requests can be sent from an inbound VPC per second.
    
    **Note**
    
    The limits apply to the IP addresses of all inbound endpoints in a VPC.
    

Maximum number of external recursive DNS requests sent from the IP address of a client

600 per second

Number of IP addresses for an inbound endpoint

Minimum number: 2. Maximum number: 6.

To ensure high availability, you must add two to six IP addresses for an inbound endpoint.

## **Usage notes**

The usage notes on inbound endpoints vary based on the DNS request sources.

### **DNS requests from clients in the cloud such as ECS instances and elastic container instances**

**Effective scope**

**Inbound endpoint with custom IP addresses in a VPC**

**Inbound endpoint with system-assigned IP addresses 100.100.2.136 and 100.100.2.138**

**Effective scope of inbound IP addresses**

Inbound VPC. If other VPCs need to access the inbound IP addresses, the VPCs must be connected to the inbound VPC by using Express Connect circuits or Cloud Enterprise Network (CEN).

All VPCs can access the inbound IP addresses.

**Specify an effective scope of DNS resolution by associating VPCs with a built-in authoritative zone, a cache retention domain name, and a forwarding rule**

Supported. The effective scope of the zone must be the inbound VPC. This way, DNS resolution settings take effect.

Supported. The effective scope of the zone can be the inbound VPC or other VPCs. The DNS resolution settings take effect in the inbound VPC or other VPCs.

**Method of implementing line-based intelligent DNS resolution**

Specify [custom lines](/help/en/dns/custom-resolution-line#17855cd05doos).

Specify custom lines or set the effective scope of zones.

### **DNS requests from clients outside the cloud forwarded by inbound VPCs**

**Effective scope**

**Inbound endpoint with custom IP addresses in a VPC**

**Inbound endpoint with system-assigned IP addresses 100.100.2.136 and 100.100.2.138**

**Effective scope of inbound IP addresses**

Inbound VPC. If on-premises data centers need to access the inbound IP addresses, the data centers must be connected to the inbound VPC by using Express Connect circuits, VPN gateways, or Service-Defined Wide Area Network(SD-WAN).

Inbound VPC. If on-premises data centers need to access the inbound IP addresses, the data centers must be connected to the inbound VPC by using Express Connect circuits, VPN gateways, or SD-WAN.

**Specify an effective scope of DNS resolution by associating VPCs with a built-in authoritative zone, a cache retention domain name, and a forwarding rule**

Supported. The effective scope of the zone must be the inbound VPC. This way, DNS resolution settings take effect.

Supported. The effective scope of the zone must be the inbound VPC. This way, DNS resolution settings take effect.

**Method of implementing line-based intelligent DNS resolution**

Specify [custom lines](/help/en/dns/custom-resolution-line#17855cd05doos).

Specify custom lines.

## **Create an inbound endpoint**

1.  Log on to the [Alibaba Cloud DNS console](https://dc.console.alibabacloud.com/dns/).
    
2.  In the left-side navigation pane, click **Private DNS (PrivateZone)**. In the upper-right corner of the Private DNS (PrivateZone) page, click **Configuration Mode** and click the **Service Address** tab.
    
3.  Click **Create Inbound Endpoint**. In the **Create Inbound Endpoint** panel, configure the following parameters: **Edition**, **Endpoint Name**, **Inbound VPC**, **Security Group**, and **Inbound service IP addresses**. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6675069071/p768934.png)
    

-   **Edition**: Select the edition of the inbound endpoint. Valid value: Standard.
    
-   **Endpoint Name**: Enter the name of the inbound endpoint based on your business requirements.
    
-   **Inbound VPC**: Select a VPC by which all inbound DNS requests are forwarded.
    
    **Important**
    
    -   After you create an outbound endpoint, you cannot change the specified VPC of the endpoint. This prevents the forwarding of DNS requests from being interrupted caused by misoperations.
        
    -   For more information about the regions that support inbound endpoints, see the "Supported regions" section of this topic. Alibaba Cloud continuously updates the feature to support more regions. If you need to create outbound endpoints in other regions, [submit a ticket](https://smartservice.console.alibabacloud.com/?#/ticket/createIndex).
        
    
-   **Security Group**: Select a security group. Security group rules apply to the inbound VPC. For more information about how to create a security group, see [Create a security group](/help/en/ecs/user-guide/create-a-security-group-1).
    
    **Important**
    
    -   Specify an inbound rule of the security group in the inbound VPC to allow all inbound DNS requests on port 53.
        
    -   Specify the outbound rules of the security groups in other VPCs that send DNS requests to the inbound VPC to allow outbound DNS requests on port 53.
        
    
-   **Inbound service IP addresses**: Select available IP addresses in the subnets of Alibaba Cloud zones. The IP addresses are not used by ECS instances. To ensure high availability, you must add at least two inbound IP addresses. We recommend that you select two IP addresses that are distributed in different Alibaba Cloud zones. You can add up to six inbound IP addresses for an inbound endpoint.
    
    **Important**
    
    -   If the inbound endpoint is deployed in the same VPC as the outbound endpoint specified in a forwarding rule, an IP address of the inbound endpoint cannot be specified as the same as the destination IP address of the forwarding rule. If the inbound endpoint is deployed in a different VPC from the outbound endpoint specified in a forwarding rule, an IP address of the inbound endpoint can be specified as the same as the destination IP address of the forwarding rule. However, if the two VPCs are connected by using CEN, DNS requests that are sent from the inbound endpoint to the outbound endpoint are sent back to the inbound endpoint. This leads to resolution loops. In this case, Servfail is returned.
        
    -   If you do not specify inbound IP addresses, the system automatically allocates IP addresses to the inbound endpoint.
        
    

4.  Click **OK**. The inbound endpoint is created.
    
5.  The created endpoint is displayed with other created endpoints on the inbound endpoint list. Inbound endpoints can be in the following states: **Normal**, **Creating**, **Create failed**, **Modifying**, **Failed**, and **Abnormal**.
    
    **Important**
    
    -   After you click OK, wait for five to ten minutes until the state of the outbound endpoint changes from Creating to Created.
        
    -   If an inbound endpoint is in the Creating or Modifying state, you cannot modify the configurations of the endpoint or delete the endpoint. If the inbound endpoint is in the Abnormal or Modify failed state, **submit a ticket** to apply for troubleshooting.
        
    

## **Modify the configurations of an inbound endpoint**

1.  Log on to the [Alibaba Cloud DNS console](https://dc.console.alibabacloud.com/dns/).
    
2.  In the left-side navigation pane, click **Private DNS (PrivateZone)**. In the upper-right corner of the Private DNS (PrivateZone) page, click **Configuration Mode** and click the **Service Address** tab.
    
3.  Find the desired endpoint and click **Edit** in the **Actions** column.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6675069071/p769133.png)
    
4.  In the **Edit Inbound Endpoint** panel, modify the **Endpoint Name** and **Inbound service IP addresses** parameters.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6675069071/p769134.png)
    
5.  After you modify the parameters, click **OK**. The state of the endpoint changes to **Modifying** and you cannot click **Edit** and **Delete** in the Actions column that corresponds to the endpoint.
    

## **Delete an inbound endpoint and multiple inbound endpoints in batches**

### **Delete an inbound endpoint**

1.  Log on to the [Alibaba Cloud DNS console](https://dc.console.alibabacloud.com/dns/).
    
2.  In the left-side navigation pane, click **Private DNS (PrivateZone)**. In the upper-right corner of the Private DNS (PrivateZone) page, click **Configuration Mode** and click the **Service Address** tab.
    
3.  Find the endpoint that you want to delete and click **Delete** in the **Actions** column. In the **Delete** message, click **OK**.
    

### **Delete multiple inbound endpoints in batches**

1.  Log on to the [Alibaba Cloud DNS console](https://dc.console.alibabacloud.com/dns/).
    
2.  In the left-side navigation pane, click **PrivateZone**. In the upper-right corner of the Private DNS (PrivateZone) page, click **Configuration Mode** and click the **Service Address** tab.
    
3.  Select the inbound endpoints that you want to delete and click **Batch Delete** below the endpoints. In the **Batch Delete** message, click **OK**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6675069071/p769135.png)
