An elastic IP address (EIP) is a type of public IP address that you can purchase and hold as an independent resource. An EIP is a NAT IP address provisioned on the Internet-facing gateway of Alibaba Cloud and is mapped to the associated cloud resource by using NAT. After you associate an EIP with a cloud resource, the cloud resource can use the EIP to communicate over the Internet. EIPs provide more flexibility than static public IP addresses (also called system-assigned public IP addresses or auto-assigned public IP addresses). This topic describes how to apply for an EIP, associate EIPs with an Elastic Compute Service (ECS) instance deployed in a virtual private cloud (VPC), and disassociate EIPs from an ECS instance deployed in a VPC.

## **Apply for an EIP**

### Apply for a new EIP

EIPs support the subscription and pay-as-you-go billing methods.

-   [Subscription](/help/en/eip/subscription#task-2240237): The subscription billing method requires you to pay for resources before you can use the resources. The subscription billing method supports the **pay-by-bandwidth** metering method. This billing method is suitable for scenarios in which resource usage is stable.
    
-   [Pay-as-you-go](/help/en/eip/pay-as-you-go/#task-rcd-sgl-vdb): The pay-as-you-go billing method allows you to pay for the resources that you use. The pay-as-you-go billing method supports the **pay-by-data-transfer** and **pay-by-bandwidth** metering methods. This billing method is suitable for scenarios that experience temporary traffic spikes.
    

1.  On the [Elastic IP Addresses](https://vpc.console.alibabacloud.com/eip) page, click **Create EIP**.
    
2.  On the buy page, select the **Pay-as-you-go** or **Subscription** **billing method**, configure the EIP information, click **Buy Now**, and then complete the payment.
    
    #### **Pay-as-you-go**
    
    Region
    
    Select the region in which you want to create the EIP.
    
    Make sure that the EIP and the resource to be associated with the EIP are in the same region. EIPs can be associated with ECS instances in VPCs, NAT gateways, Server Load Balancer (SLB) instances, high-availability virtual IP addresses (HAVIPs), and secondary elastic network interfaces (ENIs).
    
    **Line Type**
    
    Select a line type for the EIP.
    
    -   **BGP (Multi-ISP)**: provides premium BGP lines across the world. BGP lines from different Internet service providers (ISPs) can be used. The optimal BGP line is automatically selected to ensure network stability. Supported ISPs are China Telecom, China Unicom, China Mobile, China Mobile Tietong, China Netcom, CERNET, NRTA, Dr. Peng Group, and Founder Broadband.
        
    -   **BGP (Multi-ISP) Pro**: BGP (Multi-ISP) Pro is provided to improve the efficiency of data transmission from regions outside the Chinese mainland to the Chinese mainland. Compared with BGP (Multi-ISP), when BGP (Multi-ISP) Pro provides services to users in the Chinese mainland (excluding data centers), cross-border connections are established by using Chinese mainland ISP services. This reduces network latency.
        
        **Note**
        
        For the pay-as-you-go billing method, BGP (Multi-ISP) Pro is supported in the following regions: China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
        
    
    **Network Type**
    
    Select a network type for the EIP.
    
    You can select only **Internet**.
    
    **Security Protection**
    
    Select an edition of Anti-DDoS based on your requirements.
    
    -   **Default**: Anti-DDoS Origin Basic, which can mitigate DDoS attacks at 5 Gbit/s or lower. For more information, see [What is Anti-DDoS Origin](/help/en/anti-ddos/anti-ddos-origin/product-overview/what-is-anti-ddos-origin#concept-63643-zh)
        
    -   **Anti-DDoS (Enhanced)**: specifies Anti-DDoS Pro/Premium, which can mitigate DDoS attacks at the Tbit/s level.
        
        **Important**
        
        If you use **Anti-DDoS Pro/Premium** to protect your EIP, take note of the following items:
        
        -   The first time you use Anti-DDoS Pro/Premium for your EIPs, click [Anti-DDoS Origin (pay-as-you-go)](https://common-buy-intl.alibabacloud.com/?spm=0.23591326.ddos.7.3681n6ven6verj&commodityCode=ddos_ddosorigin_public_intl) to activate Anti-DDoS Pro/Premium on a pay-as-you-go basis.
            
        -   If you use Anti-DDoS Pro/Premium to protect your EIP, you are charged a protection fee, which is managed by Anti-DDoS. For more information, see [Anti-DDoS Origin 2.0 (Pay-as-you-go)](/help/en/anti-ddos/anti-ddos-origin/product-overview/pay-as-you-go#task-2273180).
            
        -   Anti-DDoS Pro/Premium is supported only in some regions. For more information about the supported regions, see [Elastic IP addresses](/help/en/eip/elastic-ip-address#section-7ho-c8v-v5k).
            
        
    
    **IP Address Pool**
    
    Select an IP address pool based on your business requirements.
    
    -   By default, the system assigns an EIP from the public IP address pool of Alibaba Cloud.
        
    -   You can also select an IP address pool from the drop-down list. Then, an EIP is allocated from the selected IP address pool.
        
    
    For more information, see [Create and manage an IP address pool](/help/en/eip/create-and-manage-ip-address-pools#task-2209680).
    
    **Data Transfer**
    
    Select a metering method for data transfers over the EIP.
    
    -   **Pay-By-Data-Transfer**: You are charged based on the amount of data transfers over the Internet on an hourly basis.
        
        -   If you create a **pay-by-data-transfer** EIP after 00:00:00 on December 17, 2024 (UTC +8) for the first time, the EIP is billed by **CDT** by default. For more information about the billing rules and discount information about CDT, see [Internet traffic](/help/en/cdt/internet-data-transfers/).
            
        -   If your pay-by-data-transfer EIP was created after 00:00:00 on December 17, 2024 (UTC +8), the EIP is still billed based on the [billing rules for pay-by-data-transfer EIPs](/help/en/eip/pay-as-you-go/#a5af79baa540m).
            
            To enable CDT for EIP, select **Upgrade to Pay-by-CDT**. After you enable CDT for EIP, the data transfers of all existing and new EIPs are billed by CDT.
            
    -   **Pay-By-Bandwidth**: You are charged based on the specified maximum bandwidth on a daily basis, regardless of the actual usage.
        
    
    **Billing Method**
    
    **Pay-by-CDT** is selected by default if you select **Pay-By-Data-Transfer** for **Data Transfer** and one of the following conditions is met:
    
    -   It is your first time creating a **pay-by-data-transfer** EIP after 00:00:00 on December 17, 2024 (UTC +8).
        
    -   CDT is already enabled for EIP.
        
    
    **Maximum Bandwidth**
    
    Enter a bandwidth value or adjust the slider to specify a bandwidth value based on your business requirements.
    
    **Name**
    
    Enter a name for the EIP.
    
    **Resource Group**
    
    Select a resource group for the EIP.
    
    **Billing Cycle**
    
    Select a billing cycle for the EIP.
    
    Pay-by-bandwidth EIPs support only the **Day** option. Pay-by-data-transfer EIPs support only the **Hour** option.
    
    **Quantity**
    
    Select the number of EIPs that you want to purchase.
    
    #### Subscription
    
    Parameter
    
    Description
    
    Region
    
    Select the region in which you want to create the EIP.
    
    Make sure that the EIP and the resource to be associated with the EIP are in the same region. EIPs can be associated with Elastic Compute Service (ECS) instances in virtual private clouds (VPCs), NAT gateways, Classic Load Balancer (CLB) instances, High-availability virtual IP addresses (HAVIPs), and secondary elastic network interfaces (ENIs).
    
    **Line Type**
    
    Select a line type for the EIP.
    
    -   **BGP (Multi-ISP)**: provides premium BGP lines across the world. BGP lines from different Internet service providers (ISPs) can be used. The optimal BGP line is automatically selected to ensure network stability. Supported ISPs are China Telecom, China Unicom, China Mobile, China Mobile Tietong, China Netcom, CERNET, NRTA, Dr. Peng Group, and Founder Broadband.
        
    -   **BGP (Multi-ISP) Pro**: BGP (Multi-ISP) Pro is provided to improve the efficiency of data transmission from regions outside the Chinese mainland to the Chinese mainland. Compared with BGP (Multi-ISP), when BGP (Multi-ISP) Pro provides services to users in the Chinese mainland (excluding data centers), cross-border connections are established by using Chinese mainland ISP services. This reduces network latency.
        
        **Note**
        
        For the subscription billing method, BGP (Multi-ISP) Pro is supported only in the China (Hong Kong) region.
        
    
    **Netmode**
    
    Select a network type for the EIP.
    
    You can select only **Public**.
    
    **Bandwidth**
    
    Select a maximum bandwidth value for the EIP. Unit: Mbit/s.
    
    **Name**
    
    Enter a name for the EIP.
    
    **Resource Group**
    
    Select a resource group for the EIP.
    
    **Quantity**
    
    Select the number of EIPs that you want to purchase.
    
    **Duration**
    
    Select a subscription duration for the EIP based on your business requirements, and select whether you want to enable auto-renewal.
    

### Recover a released EIP

You can recover EIPs that are released within the last seven days by specifying the IP address or EIP ID.

If the EIP or ECS static IP address is already assigned to another Alibaba Cloud account, or is locked or recycled due to security reasons, the EIP cannot be recovered. You cannot recover the public IP addresses of ECS instances or CLB instances that are deployed in classic networks.

By default, a recovered EIP is billed on a pay-by-data-transfer basis and the maximum bandwidth of the EIP is 5 Mbit/s.

**Important**

If CDT is already enabled for EIP, the data transfers of the recovered EIP are billed by CDT. You can check whether CDT is enabled for EIP in the [CDT console](https://cdt.console.alibabacloud.com/cdt/). For more information about CDT billing rules and discounts, see [Internet traffic](/help/en/cdt/internet-data-transfers/).

1.  On the [Elastic IP Addresses](https://vpc.console.alibabacloud.com/eip) page, select the region of the EIP in the top navigation bar and click **Apply for Specific EIP**.
    
2.  In the **Apply for Specific EIP** dialog box, set **Request Type** to **Apply for Specific EIP**, configure the parameters, and then click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Request by IP Address**
    
    **Request by EIP ID**
    
    **Request Method**
    
    **Request by IP Address**: Specify the IP address of the EIP or the static public IP address of the ECS instance.
    
    **Request by EIP ID**: Request an EIP by specifying the ID of the EIP.
    
    **IP Address** or **EIP ID**
    
    ****IP Address****: Enter the IP address that you want to recover
    
    **EIP ID**: Enter the ID of the EIP that you want to recover.
    
    **Note**
    
    You can recover only EIPs that you have used before. You can view the EIPs that you have used on the [Orders](https://usercenter2-intl.console.alibabacloud.com/order/list) page.
    
    **Line Type**
    
    Select the line type of the EIP that you want to recover.
    
    -   **BGP (Multi-ISP)**: provides premium BGP lines across the world. BGP lines from different Internet service providers (ISPs) can be used. The optimal BGP line is automatically selected to ensure network stability. Supported ISPs are China Telecom, China Unicom, China Mobile, China Mobile Tietong, China Netcom, CERNET, NRTA, Dr. Peng Group, and Founder Broadband.
        
    -   **BGP (Multi-ISP) Pro**: BGP (Multi-ISP) Pro is provided to improve the efficiency of data transmission from regions outside the Chinese mainland to the Chinese mainland. Compared with BGP (Multi-ISP), when BGP (Multi-ISP) Pro provides services to users in the Chinese mainland (excluding data centers), cross-border connections are established by using Chinese mainland ISP services. This reduces network latency.
        
        **Note**
        
        Only the following regions support BGP (Multi-ISP) Pro: China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
        
    
    **IP Address Pool**
    
    You can select an IP address pool from the drop-down list only when the IP address pool feature is enabled.
    
    For more information, see [Create and manage an IP address pool](/help/en/eip/create-and-manage-ip-address-pools#task-2209680).
    

### Apply for a contiguous EIP group

**Important**

-   Beginning 00:00:00 (UTC+8), August 6, 2024, contiguous EIP groups are no longer available for new users. You can use [IP address pools](/help/en/eip/create-and-manage-ip-address-pools) to assign contiguous IP addresses.
    
-   If you already used contiguous EIP groups before 00:00:00 (UTC+8), August 6, 2024, you can continue to use contiguous EIP groups.
    
    You can [migrate contiguous EIP groups to IP address pools](#3a7a34fd0a4uj) to facilitate EIP management.
    

#### **Applies for a contiguous EIP group**

You can apply for multiple contiguous EIP groups at a time. Contiguous EIP groups facilitate network management. A contiguous EIP group consists of multiple contiguous EIPs. Contiguous EIP groups are similar to standard EIPs which are allocated from Alibaba Cloud IP address pools. You can associate contiguous EIP groups with cloud resources in VPCs, such as ECS instances, internal-facing CLB instances, internal-facing Application Load Balancer (ALB) instances, secondary ENIs, NAT gateways, and HAVIPs. After you associate a contiguous EIP group with a cloud resource, the cloud resource can use the EIPs in the contiguous EIP group for network communication.

Before you apply for a contiguous EIP group, take note of the following rules:

-   You cannot release only one EIP in a contiguous EIP group. If you want to release an EIP in a contiguous EIP group, you must release all EIPs in the contiguous EIP group.
    
-   The following table describes the differences between contiguous EIP groups and standard EIPs.
    
    **Item**
    
    **Contiguous** EIP group
    
    **Standard** EIP
    
    Billing methods
    
    Only the pay-as-you-go billing method is supported.
    
    The subscription and pay-as-you-go billing methods are supported.
    
    Switch between billing methods
    
    You cannot switch the billing method from pay-as-you-go to subscription.
    
    You can switch the billing method from pay-as-you-go to subscription.
    
    Billable items
    
    EIPs in contiguous EIP groups and standard EIPs support the same billable items. For more information, see [Billable items](/help/en/eip/billing-overview#section-mzb-fa5-zyg).
    

1.  On the [Elastic IP Addresses](https://vpc.console.alibabacloud.com/eip) page, select the region of the EIP in the top navigation bar and click **Apply for Specific EIP**.
    
2.  In the **Apply for Specific EIP** dialog box, set **Request Type** to **Request Contiguous EIP Group**, configure the parameters, and then click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Mask for Contiguous EIP Group**
    
    Select a subnet mask length for the contiguous EIP group, and select **I have read and understand that: N EIPs are allocated by default. One, three, or four EIPs may be reserved by the system**.
    
    Valid values: 24 to 28. The number of contiguous EIPs varies based on the subnet mask length selected for the contiguous EIP group.
    
    -   /28: allocates 16 contiguous EIPs by default.
        
    -   /27: allocates 32 contiguous EIPs by default.
        
    -   /26: allocates 64 contiguous EIPs by default.
        
    -   /25: allocates 128 contiguous EIPs by default.
        
    -   /24: allocates 256 contiguous EIPs by default.
        
    
    **Note**
    
    In some scenarios, the actual number of EIPs that are allocated may be less than the expected number because one, three, or four EIPs may be reserved.
    
    **Network Type**
    
    Select a network type for the contiguous EIP group.
    
    You can select only **Internet**.
    
    **Metering Method**
    
    Select a metering method for the contiguous EIP group.
    
    -   **Pay-By-Bandwidth**: You are charged based on the specified maximum bandwidth on a daily basis, regardless of the actual usage.
        
    -   **Pay-By-Data-Transfer**: You are charged based on the amount of data transfer over the Internet on an hourly basis.
        
        **Important**
        
        If CDT is already enabled for EIP, the data transfers of the continuous EIP group are billed by CDT. For more information about the billing rules and discount information about CDT, see [Internet traffic](/help/en/cdt/internet-data-transfers/).
        
    
    **Bandwidth**
    
    Specify a maximum bandwidth value for the contiguous EIP group.
    
    Valid values: 1 to 200. Unit: Mbit/s.
    

#### **Migrate a contiguous EIP group to an IP address pool**

To facilitate the management of continuous EIP groups, you can migrate continuous EIP groups to [IP address pools](/help/en/eip/create-and-manage-ip-address-pools). The release of an EIP that falls into the CIDR block of an IP address pool does not affect the public CIDR block. You can also [share the public CIDR block of an IP address pool](/help/en/eip/share-an-ip-address-pool) among multiple Alibaba Cloud accounts.

This procedure migrates an entire continuous EIP group to an IP address pool. Before you migrate a continuous EIP group, take note of the following information:

-   The association between the EIPs and cloud resources remains unchanged.
    
-   After the migration, the EIPs cannot be restored to a continuous EIP group.
    
-   After the migration is complete, you are charged an [IP address retention fee](/help/en/eip/create-and-manage-ip-address-pools#section-dvp-jcd-45x) for the public IP addresses in the IP address pool.
    

1.  On the [Elastic IP Addresses](https://vpc.console.alibabacloud.com/eip) page, select the region of the continuous EIP group in the top navigation bar.
    
2.  Find an EIP in the continuous EIP group and choose **![更多操作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1576420061/p140904.png)** > **Instance Management** > **Migrate to IP Address Pool** in the **Actions** column.
    
3.  In the **Migrate Contiguous EIP Groups to IP Address Pool** message, review the information and click **OK**.
    
    If this is your first time using an IP address pool, read the terms of service and click **Enable IP Address Pool**.
    
4.  Check the migration result.
    
    After you perform the migration, the ID of the IP address pool is displayed in the **IP Address Pool ID** column. You can click the ID to go to the [IP Address Pool](https://vpc.console.alibabacloud.com/pools/ap-northeast-1/ip-pools) page, where you can manage the IP addresses.
    
    ![迁移确认](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0557598371/p898242.png)
    

**Note**

Alternatively, you can call the [TransformEipSegmentToPublicIpAddressPool](/help/en/eip/developer-reference/api-vpc-2016-04-28-transformeipsegmenttopublicipaddresspool-eips) API operation to migrate a continuous EIP group to an IP address pool.

## Associate one or more EIPs with an instance

#### **Prerequisites**

To associate an EIP with an instance, make sure that the instance meets the following requirements:

-   The ECS instance is located in a VPC.
    
-   The ECS instance is located in the same region as the EIP.
    
-   The ECS instance is in the **Running** or **Stopped** state.
    
-   No public IP addresses are associated with the primary network interface controller (NIC) of the ECS instance.
    

#### **Procedure**

## Associate an EIP with an ECS instance

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the ECS instance with which you want to associate an EIP and choose **![icon1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6801148761/p477856.png)** > **Network and Security Group** > **Associate EIP** in the Action column.
    
4.  In the **Associate EIP** dialog box, select an EIP from the EIP drop-down list.
    
    If no EIPs are available in the EIP drop-down list, perform one of the following operations:
    
    -   Check whether EIPs exist. If no EIPs exist, click **Create EIP** to the right of the EIP field to create an EIP. For more information, see [Apply for EIPs](/help/en/eip/apply-for-new-eips#task-bh5-dll-vdb).
        
    -   Check whether the EIP that you want to use is associated with another cloud resource. If the EIP that you want to use is associated with another cloud resource, disassociate the EIP from the resource. For more information, see [Disassociate an EIP from a cloud resource](/help/en/eip/disassociate-an-eip-from-a-cloud-resource#task-bh5-dll-vdb).
        
    
5.  Click **Confirm**.
    
    After the EIP is associated with the ECS instance, you can [view the EIP](/help/en/ecs/user-guide/ip-address/#10a7bff6c9th3) on the Instances page.
    

## Associate multiple EIPs with an ECS instance

If multiple applications are hosted on the same ECS instance and you want each application to have an independent public IP address, you can associate multiple EIPs with a secondary elastic network interface (ENI) of the instance in NAT mode. For more information, see [Associate multiple EIPs with an ECS instance in NAT mode](/help/en/eip/use-cases/associate-multiple-eips-with-a-secondary-eni-in-nat-mode#task-1512598).

## Disassociate an EIP from an ECS instance

If you no longer need to access an ECS instance over the Internet or you need to change an EIP of the instance, we recommend that you disassociate the EIP from the instance to avoid resource waste.

**Important**

You are not able to access the ECS instance over the Internet after you disassociate an EIP from the instance. Before you disassociate an EIP, make sure that Internet access is no longer required or you can access the instance over alternative network connections.

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the ECS instance from which you want to disassociate an EIP and choose **![icon1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6801148761/p477856.png)** > **Network and Security Group** > **Disassociate EIP** in the Action column.
    
4.  In the **Disassociate EIP** message, confirm the message and select "I am aware of the costs and risks".
    
5.  Click **Confirm**.
    
    **Note**
    
    After the EIP is disassociated from the instance, the EIP is not displayed in the **IP Address** column corresponding to the instance on the Instances page.
    
6.  (Optional) After an EIP is disassociated from an ECS instance, you are still charged for the EIP. If you no longer use the EIP, you can release the EIP. For more information, see [Release a pay-as-you-go EIP](/help/en/eip/release-an-eip#task-2021625).
    

## Change an EIP

To change the EIP that is associated with an ECS instance, you can disassociate the EIP from the instance and associate a different EIP with the instance.

#### **Prerequisites**

-   The ECS instance is deployed in a VPC.
    
-   The ECS instance is in the Running or Stopped state.
    
-   The ECS instance and the EIP that you want to associate with the instance are in the same region.
    
-   The ECS instance is not associated with a static public IP address or EIPs other than the current EIP.
    

#### **Procedure**

1.  (Optional) Apply for a new EIP. For more information, see [Apply for an EIP](#a6c29c2b9abcr).
    
2.  Disassociate the current EIP from the ECS instance. For more information, see the [Disassociate an EIP from an ECS instance](#title-2bk-4qv-pkf) section of this topic.
    
    **Important**
    
    -   After you disassociate a pay-as-you-go EIP from a cloud resource, you are still charged an EIP configuration fee. To prevent unnecessary charges, release the EIP.
        
        -   For information about EIP configuration fees, see [Pay-as-you-go](/help/en/eip/pay-as-you-go/#section-tbh-f66-2wt).
            
        -   For information about how to release a pay-as-you-go EIP, see [Release a pay-as-you-go EIP](/help/en/eip/release-an-eip#task-2021625).
            
    -   If you no longer require a subscription EIP after you disassociate the EIP from a cloud resource, you can unsubscribe from the EIP. For more information, see [Rules for unsubscribing from resources](/help/en/user-center/refund-rules).
        
    
3.  Associate the new EIP with the ECS instance. For more information, see the [Associate one or more EIPs with an instance](#title-40t-ddx-rm7) section of this topic.
    

## **FAQ**

1.  Can I change the public IP address of an ECS instance in a region outside the Chinese mainland to resolve the high latency issue that occurs when I access the instance from the Chinese mainland?
    
    No, you cannot change the public IP address of the ECS instance to resolve the high latency issue.
    
    Cross-border communication between regions inside and outside the Chinese mainland may be affected by connection congestion and the regulations of Internet service providers (ISPs), which may lead to network link instability and cause packet loss or other exceptions. As a result, ECS instances in specific regions outside the Chinese mainland are inaccessible to users from specific regions inside the Chinese mainland.
    
    -   If you provide services for users in the Chinese mainland, we recommend that you deploy ECS instances in a region inside the Chinese mainland to bypass the limitations of cross-border communication.
        
    -   If you want to allow users in regions inside the Chinese mainland to access ECS instances in regions outside the Chinese mainland, we recommend that you use Global Accelerator (GA). For more information, see [What is GA?](/help/en/ga/product-overview/what-is-global-accelerator/)
        
2.  Can I specify a specific public IP address when I purchase an EIP?
    
    No, you cannot specify a specific public IP address when you purchase an EIP.
    
    When you purchase an EIP, the system randomly assigns a public IP address. You cannot manually specify a public IP address.
    

## **References**

After you associate an EIP with an ECS instance, you can view the following topics for more information about the billing method, bandwidth usage, and traffic consumption of EIPs.

-   [Billing overview](/help/en/eip/billing-overview#concept-645525)
    
-   [Monitoring and alerting](/help/en/eip/monitoring-and-alerting#p-t72-hqh-jkm)
    

After you disassociate an EIP from an ECS instance, the public IP address that is associated with the EIP is no longer available. You can perform the following operations to ensure that your applications or services can run normally.

-   [Modify a security group rule](/help/en/ecs/user-guide/modify-a-security-group-rule)
    
-   [Primary private IP addresses](/help/en/ecs/user-guide/modify-a-private-ip-address)
    
-   [Secondary private IP](/help/en/ecs/user-guide/assign-secondary-private-ip-addresses)
