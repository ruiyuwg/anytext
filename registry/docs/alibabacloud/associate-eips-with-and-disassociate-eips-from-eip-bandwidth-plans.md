An Elastic IP address (EIP) is a public IPv4 address that you can independently purchase and control. Associate an EIP with cloud resources, such as Elastic Compute Service (ECS) instances in a virtual private cloud (VPC), Internet NAT gateways, and Server Load Balancer (SLB) instances to enable Internet access for them. You can dynamically associate and dissassociate EIPs from cloud resources for flexible public IP address management.

## **EIP selection guide**

### **Billing method**

**Billing method**

**Internet metering method**

**Use cases**

[Pay-as-you-go](/help/en/eip/pay-as-you-go/#task-rcd-sgl-vdb)

Pay-by-data-transfer

-   Workloads with fluctuating peak traffic, such as in the gaming or video streaming industries.
    
-   Resources for temporary or burstable workloads.
    

If you cannot estimate your traffic usage, use the pay-by-data-transfer method.

Pay-by-bandwidth

-   Workloads with stable peak traffic.
    
-   Resources for temporary or burstable workloads.
    

[Subscription](/help/en/eip/subscription#task-2240237)

Pay-by-bandwidth

-   For predictable usage trends.
    
-   Workloads with stable peak traffic.
    
-   For long-term use. This is more cost-effective than paying by bandwidth on an on-demand basis.
    

### **Line types**

**Important**

You can select a line type only when you create an EIP. After the EIP is created, the line type can never be changed.

**Line type**

**BGP (Multi-ISP)**

**BGP (Multi-ISP) Pro**

Description

Delivers a fast and stable user experience by connecting to multiple ISP lines and automatically selecting the optimal route. This line type is supported in all Alibaba Cloud regions.

An optimized public network route for traffic from outside the Chinese mainland to the Chinese mainland. It is designed to improve network performance for end users in the Chinese mainland, excluding data centers. This line type reduces latency and improves the quality of international services through direct connections to dedicated ISP lines.

Use cases

A general-purpose choice suitable for most internet-facing services, ensuring network stability and broad coverage.

An optimized line for traffic from outside the Chinese mainland to the Chinese mainland, significantly reducing cross-border network latency.

Limitations

-   Your services can be deployed in any region.
    
-   End users can access the services from any location over the internet.
    

-   Your services can only be deployed in specific regions outside the Chinese mainland. The supported regions vary based on the billing method.
    
    **Regions that support BGP (Multi-ISP) Pro EIPs**
    
    -   Pay-as-you-go: China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
        
    -   Subscription: China (Hong Kong).
        
    
-   End users must access the services from the Chinese mainland over the internet.
    

Cost

Low

Medium

### **Security protection**

**Important**

You can select a security protection type only when you create an EIP. After the EIP is created, the security protection type can never be changed.

**Security protection type**

**Default**

**Anti-DDoS (Enhanced)**

Use cases

For services with no special security requirements.

> A single EIP provides up to 5 Gbit/s of basic DDoS protection by default, which meets fundamental security needs.

For services requiring terabit-level DDoS protection or when default security is insufficient.

How to configure

This basic protection is enabled by default for all EIPs.

You must select this type when you create an EIP.

Limitations

Supported for EIPs in all regions.

-   Supported only for pay-as-you-go BGP (Multi-ISP) EIPs.
    
-   If you want to create an Anti-DDoS (Enhanced) EIP from an [IP address pool](/help/en/eip/ip-address-pools/), the IP address pool must also be of the Anti-DDoS (Enhanced) type.
    
-   Supported only in specific regions.
    
    **Regions that support Anti-DDoS (Enhanced)**
    
    ## EIP
    
    -   China: China (Beijing), China (Hangzhou), China (Shanghai), and China (Hong Kong)
        
    -   Asia Pacific: Philippines (Manila), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), South Korea (Seoul), and Thailand (Bangkok)
        
    -   Others: US (Virginia), US (Silicon Valley), Germany (Frankfurt), UK (London), and Mexico
        
    
    ## IP address pool
    
    -   China: China (Hong Kong)
        
    -   Asia Pacific: Philippines (Manila), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), South Korea (Seoul), and Thailand (Bangkok)
        
    -   Others: US (Virginia), US (Silicon Valley), Germany (Frankfurt), UK (London), and Mexico
        
    

Billing impact

The default security protection is free of charge.

Incurs security protection fees charged by the Anti-DDoS service. For billing rules, see [Anti-DDoS Origin 2.0 (Pay-as-you-go)](/help/en/anti-ddos/anti-ddos-origin/product-overview/pay-as-you-go).

## **Create an EIP**

## Console

1.  In the [Elastic IP Addresses console](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips), click **Create EIP**.
    
2.  Configure the parameters and complete the payment.
    
    1.  **Billing Method**: **Pay-as-you-go** is for services with fluctuating workloads, while **Subscription** is ideal for long-term, stable services. For more information, see [Billing method](#b037706805x05).
        
        For the pay-as-you-go billing method, select a data transfer metering method:
        
        1.  If you set **Data Transfer** to **Pay-By-Data-Transfer**, we recommend that you set **Billing Method** to **Pay-by-CDT**. Cloud Data Transfer (CDT) helps save your Internet data transfer costs. We recommend that you keep the default bandwidth value, which you can adjust at any time. The maximum bandwidth value for a pay-by-data-transfer EIP is a performance upper limit, not a service commitment.
            
        2.  If you set **Data Transfer** to **Pay-By-Bandwidth**, you are charged for bandwidth usage. Set the maximum bandwidth value based on your actual needs.
            
        
    2.  **Region**: Select the region where your cloud resources are deployed. An EIP is a regional resource.
        
3.  **Line Type**: This parameter is available only in specific regions. For selection guidance, see [Line types](#6d29428cfen8q).
    
4.  **Security Protection**: This parameter is available only for pay-as-you-go BGP (Multi-ISP) EIPs. For selection guidance, see [Security protection](#c71bfe404627n).
    
5.  **IP Address Pool**: If you have an existing [IP address pool](/help/en/eip/ip-address-pools/), you can choose to allocate an EIP from it.
    

## API

Call the [AllocateEipAddress](/help/en/eip/developer-reference/api-vpc-2016-04-28-allocateeipaddress-eips) operation to create an EIP.

## **Recover a released public IP address**

You can try to recover an EIP, a static public IP address of an ECS instance, or a static public IP address of a Server Load Balancer (SLB) instance that you released within the last seven days.

Upon successful recovery, the public IP address becomes a pay-as-you-go EIP that is billed on a pay-by-data-transfer basis, with a default maximum bandwidth of 5 Mbit/s. If your EIP service has been upgraded to pay-by-CDT, the data transfer fees for the recovered public IP address will be billed through CDT.

> A recovery request will fail if the target IP address has been assigned to another account, locked for security reasons, or reclaimed.

## Console

1.  In the [Elastic IP Addresses console](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips), select the target region and click **Apply for Specific EIP**.
    
2.  Set **Request Type** to **Apply for Specific EIP**. Configure the parameters and click **OK**.
    
    1.  To **Request by IP Address**, enter the public IP address you previously owned. To **Request by EIP ID**, find the ID in your [historical orders](https://usercenter2-intl.console.alibabacloud.com/order/list?parentCommodityCode=eip) and enter the ID.
        
    2.  If the released EIP was a BGP (Multi-ISP) Pro EIP, set **Line Type** to **BGP (Multi-ISP)\_Pro**. Note that BGP (Multi-ISP) Pro EIPs are supported only in specific regions.
        
        **Regions that support BGP (Multi-ISP) Pro EIPs**
        
        -   Pay-as-you-go: China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
            
        -   Subscription: China (Hong Kong).
            
        
    3.  If you have enabled [IP address pools](/help/en/eip/ip-address-pools/), you can specify an IP address pool and request a specific EIP from it.
        

## API

Call the [AllocateEipAddressPro](/help/en/eip/developer-reference/api-vpc-2016-04-28-allocateeipaddresspro-eips) operation to request a specific EIP.

## **Request a contiguous EIP block**

You can request a contiguous block of EIPs in the following ways:

-   Use [IP address pools](/help/en/eip/ip-address-pools/): This feature is disabled by default. To use it, contact your business manager.
    
-   Contiguous EIP group: Similar to individually created EIPs, EIPs in a contiguous EIP group can be associated with cloud resources to enable Internet access and have the same billable items. However, there are also some differences:
    
    -   EIPs in a contiguous EIP group are pay-as-you-go and cannot be converted to subscription.
        
    -   You cannot release individual EIPs from a contiguous EIP group. You can only release all EIPs in the group at a time.
        

**Important**

As of August 6, 2024, this feature is available only to accounts that have used it previously. New users should use the IP address pools feature instead. We recommend all users migrate to IP address pools for greater flexibility and more advanced management options.

**How to request a contiguous EIP group**

## Console

1.  In the [Elastic IP Addresses console](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips), select the target region and click **Apply for Specific EIP**.
    
2.  Set **Request Type** to **Request Continuous EIP Group**. Configure the parameters and click **OK**.
    
    1.  **Mask for Contiguous EIP Group**: This determines the number of allocatable EIPs. Due to system-reserved addresses, a requested contiguous EIP group may have one, three, or four fewer allocatable IPs.
        
    2.  **Billing Type**: Choose between pay-by-bandwidth and pay-by-data-transfer. If your EIP service has been upgraded to pay-by-CDT, data transfer fees for EIPs in the requested contiguous EIP group will be billed through CDT.
        

## API

Call the [AllocateEipSegmentAddress](/help/en/eip/developer-reference/api-vpc-2016-04-28-allocateeipsegmentaddress-eips) operation to request a contiguous EIP group.

**How to migrate a contiguous EIP group to an IP address pool**

Migrate the entire CIDR block of the contiguous EIP group into an IP address pool. Before you begin, note the following:

-   The migration does not affect the association between the EIPs and cloud resources.
    
-   You cannot roll back the migration.
    
-   After a successful migration, you will be charged [public IP retention fees for IP address pools](/help/en/eip/create-and-manage-ip-address-pools#section-dvp-jcd-45x).
    

## Console

1.  In the [Elastic IP Addresses console](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips), select the target region in the top navigation bar. Find any EIP in the target contiguous EIP group. In the **Actions** column, choose **![更多操作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1576420061/p140904.png)** > **Migrate to IP Address Pool**.
    
2.  Review the information in the message, then click **OK**.
    
3.  After the migration is successful, the **IP Address Pool ID** column for the EIPs will display the ID of the new IP address pool.
    
    ![迁移确认](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0557598371/p898242.png)
    

## API

Call the [TransformEipSegmentToPublicIpAddressPool](/help/en/eip/developer-reference/api-vpc-2016-04-28-transformeipsegmenttopublicipaddresspool-eips) operation to migrate a contiguous EIP group to an IP address pool.

## **Add an EIP to or remove an EIP from an Internet Shared Bandwidth instance**

[Internet Shared Bandwidth](/help/en/internet-shared-bandwidth/product-overview/what-is-internet-shared-bandwidth#concept-mks-snx-b2b) provides region-level bandwidth sharing and reuse. Add EIPs to an Internet Shared Bandwidth instance and all the EIPs can share the purchased bandwidth, which helps reduce overall public network costs.

-   You can only add pay-as-you-go EIPs to an Internet Shared Bandwidth instance. Once an EIP is added, its individual maximum bandwidth setting is ignored, and the Internet Shared Bandwidth instance manages its bandwidth. The EIP no longer incurs public network fees (data transfer or bandwidth fees), but the [EIP configuration fee (public IP retention fee)](/help/en/eip/pay-as-you-go/#title-dcu-yw2-38q) still applies.
    
-   The EIP and the Internet Shared Bandwidth instance must be in the same region and have the same [line type](#6d29428cfen8q).
    
-   You can add up to 100 EIPs to a single Internet Shared Bandwidth instance. To add more EIPs, [request a quota increase](https://quotas.console.alibabacloud.com/products/cbwp/quotas).
    

## Console

#### **Add an EIP to an Internet Shared Bandwidth instance**

1.  In the [Elastic IP Addresses console](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips), select the target region in the top navigation bar.
    
2.  Find the target EIP. In the **Actions** column, choose **![更多操作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1576420061/p140904.png)** > **Bind EIP Bandwidth Plan**.
    
3.  Select the Internet Shared Bandwidth instance that you want to add the EIP to and click **OK**.
    

#### **Remove an EIP from an Internet Shared Bandwidth instance**

When an EIP is removed from an Internet Shared Bandwidth instance, its maximum bandwidth and billing method settings are restored to their previous state. To avoid issues such as packet loss due to changes in the maximum bandwidth value, perform this operation during off-peak hours.

1.  In the [Elastic IP Addresses console](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips), select the target region in the top navigation bar.
    
2.  Find the target EIP. In the **Actions** column, choose **![更多操作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1576420061/p140904.png)** > **Disassociate from EIP Bandwidth Plan**. Then, confirm the action.
    

## API

-   Call the [AddCommonBandwidthPackageIp](/help/en/internet-shared-bandwidth/developer-reference/api-vpc-2016-04-28-addcommonbandwidthpackageip-brandwidths) operation to add an EIP to an Internet Shared Bandwidth instance.
    
-   Call the [RemoveCommonBandwidthPackageIp](/help/en/internet-shared-bandwidth/developer-reference/api-vpc-2016-04-28-removecommonbandwidthpackageip-brandwidths) operation to remove an EIP from an Internet Shared Bandwidth instance.
    

## **Release an EIP**

A pay-as-you-go EIP continues to incur an [EIP configuration fee (public IP retention fee)](/help/en/eip/pay-as-you-go/#section-tbh-f66-2wt) even when it is not associated with any cloud resource. If you no longer need an EIP, release it promptly to avoid unnecessary charges.

-   You can only release pay-as-you-go EIPs. Subscription EIPs cannot be released.
    
-   You cannot release EIPs locked for security reasons.
    
-   After you release an EIP, billing for the EIP stops, but you may still receive a final bill.
    
    -   Pay-by-data-transfer EIPs are billed hourly.
        
        For example, if you release a pay-by-data-transfer EIP at 10:30, you are still billed for the entire 10:00-11:00 hour.
        
    -   Pay-by-bandwidth EIPs are billed daily.
        
        For example, if you release a pay-by-bandwidth EIP on January 1, 2025, you will receive a bill for the bandwidth fees of January 1, 2025, after midnight on January 2, 2025.
        
    

## Console

#### **Standard release**

Before you can release an EIP, first resolve its dependencies: Remove the EIP from any Internet Shared Bandwidth instance, disassociate the EIP from any cloud resources, and remove any SNAT or DNAT entries associated with the EIP.

1.  In the [Elastic IP Addresses console](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips), select the target region in the top navigation bar.
    
2.  Find the target EIP. In the **Actions** column, choose **![More](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1576420061/p140904.png)** > **Release** and confirm the action.
    
    You cannot release an individual EIP from a contiguous EIP group. To release it, you must release all EIPs in the group.
    

#### **Forced release**

When you force release an EIP, the system first disassociates the EIP from any associated cloud resources, removes it from any Internet Shared Bandwidth instance, and then releases the EIP.

If the EIP is used in an SNAT or DNAT entry of an Internet NAT gateway, first remove the associated entry.

> You cannot force release an EIP that is part of a contiguous EIP group.

1.  In the [Elastic IP Addresses console](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips), select the target region in the top navigation bar.
    
2.  Find the target EIP. In the **Actions** column, choose **![更多操作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1576420061/p140904.png)** > **Forceful Release**, then confirm the action.
    

## API

-   Call the [ReleaseEipAddress](/help/en/eip/developer-reference/api-vpc-2016-04-28-releaseeipaddress-eips#undefined) operation to release a specific EIP.
    
-   Call the [ReleaseEipSegmentAddress](/help/en/eip/developer-reference/api-vpc-2016-04-28-releaseeipsegmentaddress-eips) operation to release all EIPs in a contiguous EIP group.
    

### **Deletion protection**

To prevent accidental release, which can lead to irreversible consequences, you can enable deletion protection for a pay-as-you-go EIP. Enabling deletion protection for EIPs used in your production environment.

## Console

1.  In the [Elastic IP Addresses console](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips), choose the target region in the top navigation bar. Click the ID of the target EIP.
    
2.  On the EIP details page, enable or disable deletion protection.
    

## API

Call the [DeletionProtection](/help/en/vpc/developer-reference/api-vpc-2016-04-28-deletionprotection) operation. Set the `Type` parameter to `EIP` and use the `ProtectionEnable` parameter to enable or disable deletion protection.

## Apply in production

-   **Considerations**:
    
    -   **Cost optimization**:
        
        -   For pay-by-data-transfer EIPs, consider paying by CDT. CDT offers various benefits, including a free tier, consolidated billing for IPv4 and IPv6 traffic across multiple cloud products, and tiered pricing. It can significantly reduce your Internet data transfer costs.
            
        -   For pay-by-bandwidth EIPs, consider setting the maximum bandwidth slightly higher than your business requires. If your services use multiple pay-by-bandwidth EIPs, consider using an Internet Shared Bandwidth instance to reduce costs.
            
    -   **Type selection**: Choose pay-by-bandwidth for stable or high-traffic services to save costs. Choose pay-by-data-transfer for services with fluctuating or low traffic for greater flexibility.
        
    -   **IP address management**: For centralized planning and allocation in use cases that require contiguous IP addresses or specific IP ranges, consider using the IP address pool.
        
-   **Risk prevention**:
    
    -   **Cost risks**: A pay-as-you-go EIP incurs an EIP configuration fee (public IP retention fee) after it is created, even if it is not associated with any resource. Associate your EIPs with resources or release unused EIPs promptly.
        
    -   **Operational risks**: Enable deletion protection for critical EIPs in your production environment to prevent accidental release, which could disrupt your services.
        

## **Quota**

By default, all Alibaba Cloud accounts have a quota of 20 EIPs. You can request a quota increase from the [Quota Center console](https://quotas.console.alibabacloud.com/products/eip/quotas).

## FAQ

### **Does the EIP configuration fee (public IP retention fee) apply immediately after I purchase an EIP?**

-   For pay-as-you-go EIPs:
    
    -   The EIP configuration fee (public IP retention fee) applies immediately after the EIP is successfully purchased. EIPs allocated from a specified IP address pool are not subject to this fee.
        
    -   For EIPs associated with ECS instances or Elastic Container Instances in a VPC, Alibaba Cloud waives the EIP configuration fee (public IP retention fee), provided that your account's EIP quota is 2,000 or less. (This refers to the quota limit, not the number of EIPs you currently hold.)
        
    
    > To avoid unnecessary charges, purchase EIPs only when you need them.
    
-   For subscription EIPs: The EIP configuration fee (public IP retention fee) does not apply.
