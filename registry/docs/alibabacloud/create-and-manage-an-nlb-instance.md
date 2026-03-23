Network Load Balancer (NLB) is a type of Layer 4 load balancer that is designed for Internet of Things (IoT) applications. NLB can receive requests from clients and forward requests to backend servers. This topic describes how to create and manage an NLB instance.

## Prerequisites

-   A virtual private cloud (VPC) is created. For more information, see [Create a VPC with an IPv4 CIDR block](/help/en/vpc/getting-started/create-vpc-with-ipv4#task-1512598).
    
-   Before you create an NLB instance, make sure that the vSwitches in the zones where you want to create the NLB instance provide sufficient IP addresses. At least three IP addresses are available in each vSwitch of the NLB instance. Two of the IP addresses are used to communicate with backend servers and perform health checks on backend servers. One of the IP addresses remains unchanged and functions as the virtual IP address (VIP) that provides services. If the vSwitch cannot provide sufficient IP addresses, an error arises and you cannot create the NLB instance.
    
    **Note**
    
    To ensure that the NLB instance can scale out resources, we recommend that you reserve at least eight IP addresses in each vSwitch of the NLB instance.
    
-   The AliyunServiceRoleForNlb service-linked role is created within your Alibaba Cloud account. The first time you create an NLB instance, you must create this role to allow NLB to access other Alibaba Cloud resources, such as elastic network interfaces (ENIs), elastic IP addresses (EIPs), and Internet Shared Bandwidth instances. For more information, see [AliyunServiceRoleForNlb](/help/en/slb/security-and-compliance/using-service-association-roles#8df280601c9fa).
    

## Create an NLB instance

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
2.  In the top navigation bar, select the region in which the NLB instance is deployed.
    
3.  On the **Instances** page, click **Create NLB**.
    
4.  On the NLB (Pay-As-You-Go) International Site page, select a region from the drop-down list at the upper part of the page, and configure the parameters. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Network Type**
    
    Select a network type for the NLB instance. The system assigns a public or private IP address to the NLB instance based on the selected network type.
    
    -   **Intranet**: If you create an internal-facing NLB instance, a private IP address is assigned to each zone. In this case, the NLB instance is accessible only over the internal network.
        
    -   **Internet**: If you create an Internet-facing NLB instance, a public IP address and a private IP address are assigned to each zone. Internet-facing NLB instances use EIPs to provide services over the Internet. If you create an Internet-facing NLB instance, you are charged instance fees and bandwidth or data transfer fees for the EIPs.
        
        -   EIPs are used to provide services over the Internet and expose NLB instances to the Internet.
            
        -   Private IP addresses are used by NLB instances to communicate with Elastic Compute Service (ECS) instances in VPCs.
            
    
    **Note**
    
    -   After the NLB instance is created, you can change the network type of the NLB instance as needed. For more information, see [Change the network type of an NLB instance](/help/en/slb/network-load-balancer/user-guide/change-the-network-type-of-an-nlb-instance#task-2260468).
        
    -   If an N LB instance is assigned an IPv4 address and an IPv6 address, the IPv4 address is used to provide services over the Internet. If you want to use the IPv6 address to provide services over the Internet, you must change the private IPv6 address to a public IPv6 address. In this case, you are charged IPv6 gateway fees. For more information, see [Billing rules](/help/en/ipv6-gateway/product-overview/ipv6-gateway-billing/#concept-gvc-fyt-zfb).
        
    
    **IP Version**
    
    Select an IP version. Valid values:
    
    -   **IPv4**: If you select this option, the NLB instance can be accessed only by IPv4 clients.
        
    -   **Dual-stack Networking**: If you select this option, the NLB instance can be accessed by IPv4 and IPv6 clients.
        
    
    **VPC**
    
    Select the VPC where you want to deploy the NLB instance.
    
    **Associate with EIP Bandwidth Plan**
    
    Specify whether to associate the NLB instance with an Internet Shared Bandwidth instance. If you select **Associate with EIP Bandwidth Plan**, you must select an Internet Shared Bandwidth instance. If no Internet Shared Bandwidth instance is available, click **Purchase EIP Bandwidth Plan** to purchase an Internet Shared Bandwidth instance. Then, return to the NLB buy page, click the ![刷新](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0579182361/p327839.png) icon, and then select the Internet Shared Bandwidth instance.
    
    We recommend that you purchase a pay-as-you-go Internet Shared Bandwidth instance. For more information, see [Create an Internet Shared Bandwidth instance](/help/en/internet-shared-bandwidth/user-guide/create-an-internet-shared-bandwidth-instance#task-hjr-jlk-z2b).
    
    **Note**
    
    This parameter is available only if **Network Type** is set to **Internet-facing**.
    
    **Internet Metering Method**
    
    **Pay-By-Data-Transfer** (default): The maximum bandwidth is not a guaranteed value and for reference only. In case of resource contention, the bandwidth allocated to each NLB instance may be lower than the maximum bandwidth value. For more information about the billing of EIPs, see [Pay-as-you-go](/help/en/eip/pay-as-you-go/#concept-rcd-sgl-vdb).
    
    **Note**
    
    This parameter is available only if **Network Type** is set to **Internet-facing** and **Associate with EIP Bandwidth Plan** is not selected.
    
    **Instance Name**
    
    Enter a name for the NLB instance.
    
    **Resource Group**
    
    Select a resource group for the NLB instance.
    
    **Service-linked Role**
    
    The first time you create an NLB instance, you must click **Create Service-linked Role** to create a service-linked role for NLB.
    
5.  Click **Buy Now** and complete the payment.
    
6.  Return to the **Instances** page and select the region in which the NLB instance is deployed to view the NLB instance.
    

## Release an NLB instance

You can release NLB instances that are not in use to reduce costs. After you release an NLB instance, you are no longer charged for the NLB instance.

**Warning**

-   If a custom domain name is mapped to the domain name or IP address of an NLB instance and you want to release the NLB instance, we recommend that you map the custom domain name to the domain name or IP address of another NLB instance to prevent service interruptions.
    
-   After an NLB instance is released, the configurations and data of the NLB instance are cleared and cannot be restored.
    
-   If your NLB instance is managed by another Alibaba Cloud service, such as Container Service for Kubernetes (ACK), services become unavailable after the NLB instance is released, and the released NLB instance cannot be restored.
    

If deletion protection is enabled for an NLB instance, you cannot release the NLB instance.

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
2.  In the top navigation bar, select the region in which the NLB instance is deployed.
    
3.  On the **Instances** page, find the instance that you want to release and click **![更多操作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3400449261/p103337.png)** > **Release** in the **Actions** column.
    
4.  In the **Release Instance** message, click **Confirm**.
    

## Related operations

**Operation**

**Procedure**

Rename an NLB instance

On the **Instances** page, find the NLB instance that you want to manage, move the pointer over the instance name, and then click the ![修改实例名](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1876810961/p268609.png) icon. Change the name of the instance and click **OK**.

Manage tags

-   Each tag is a key-value pair.
    
    -   You can add at most 20 tags to an NLB instance.
        
    -   The keys of tags that are added to the same NLB instance must be unique.
        
-   You can use tags to classify NLB instances by different dimensions, such as purpose or owner.
    
-   You can filter NLB instances by tag.
    

**Edit tags**

1.  On the **Instances** page, find the NLB instance that you want to manage, move the pointer over the ![标签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1876810961/p185180.png) icon in the **Tag** column, and click **Edit**.
    
2.  In the **Configure Tags** dialog box, select or enter a key and a value, and click **OK**.
    
    You can also click the ![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2500088561/p437159.png) icon next to a tag to remove the tag.
    

**Filter by tag**

On the **Instances** page, click **Filter by Tag** above the instance list. Select a **tag key** and a **tag value**.

You can click **Clear Filter Condition** above the instance list to clear the filter conditions.

Enable or disable cross-zone load balancing

After you enable cross-zone load balancing, NLB distributes network traffic across backend servers in different zones.

On the **Instances** page, find the NLB instance that you want to manage and click its ID. Enable or disable **Cross-Zone Distribution** in the **Instance Property** section.

Enable or disable deletion protection

You can enable deletion protection to prevent NLB instances from being accidentally released.

1.  On the **Instances** page, find the NLB instance that you want to manage and click its ID.
    
2.  On the **Instance Details** tab, click **Enable Deletion Protection** or **Disable Deletion Protection** in the **Instance Property** section.
    
    After deletion protection is enabled for an instance, you cannot release the instance. If you want to release the instance, you must first disable deletion protection.
    

Enable or disable the configuration read-only mode

**Important**

If you disable the configuration-read-only mode for an NLB instance that is managed by ACK, configurations changes of the NLB instance also affect the ACK cluster.

You can enable the configuration read-only mode to prevent NLB instances from being accidentally modified.

1.  On the **Instances** page, find the NLB instance that you want to manage and click its ID.
    
2.  On the **Instance Details** tab, click **Enable Configuration Read-Only Mode** or **Disable Configuration Read-Only Mode** in the **Instance Property** section.
    

## What to do next

Configure a listener to listen for connection requests and forward the requests to backend servers based on a specified scheduling algorithm.

-   [Add a TCP listener](/help/en/slb/network-load-balancer/user-guide/add-a-tcp-listener#task-2224869)
    
-   [Add a UDP listener](/help/en/slb/network-load-balancer/user-guide/add-a-udp-listener#task-2224870)
    
-   [Add a TCP/SSL listener](/help/en/slb/network-load-balancer/user-guide/create-a-listener-that-uses-ssl-over-tcp#task-2224872)
    

## References

-   Product overview
    
    -   For more information about the use scenarios and components of NLB, see [What is NLB?](/help/en/slb/network-load-balancer/product-overview/what-is-nlb/)
        
    -   For more information about the functions and features of NLB, see [Functions and features](/help/en/slb/network-load-balancer/product-overview/functions-and-features).
        
-   User guides
    
    -   For information about changing the network type of an NLB instance, see [Change the network type of an NLB instance](/help/en/slb/network-load-balancer/user-guide/change-the-network-type-of-an-nlb-instance#task-2260468).
        
    -   For information about changing the zones of an NLB instance, see [Change the zones where an NLB instance is deployed](/help/en/slb/network-load-balancer/user-guide/modify-the-configurations-of-an-nlb-instance#section-c9m-d81-p0x).
        
    -   For information about changing the status of zones to simulate disaster recovery, see [Change the status of zones](/help/en/slb/network-load-balancer/user-guide/modify-the-configurations-of-an-nlb-instance#section-wlh-tei-82h).
        
    -   For information about adding an Internet-facing NLB instance to an Internet Shared Bandwidth instance, or adjust the maximum bandwidth of an NLB instance, see [Modify the maximum bandwidth of an Internet-facing NLB instance](/help/en/slb/network-load-balancer/user-guide/modify-the-configurations-of-an-nlb-instance#section-b8o-1tg-jdd).
        
-   API references:
    
    -   [CreateLoadBalancer](/help/en/slb/api-createloadbalancer#doc-api-Nlb-CreateLoadBalancer): creates an NLB instance.
        
    -   [DeleteLoadBalancer](/help/en/slb/api-deleteloadbalancer#doc-api-Nlb-DeleteLoadBalancer): deletes an NLB instance.
        
    -   [UpdateLoadBalancerAttribute](/help/en/slb/api-updateloadbalancerattribute-nlb#doc-api-Nlb-UpdateLoadBalancerAttribute): modifies the status and name of an NLB instance.
        
    -   [UpdateLoadBalancerAddressTypeConfig](/help/en/slb/api-updateloadbalanceraddresstypeconfig-nlb#doc-api-Nlb-UpdateLoadBalancerAddressTypeConfig): changes the network type of the IPv4 address of an NLB instance.
        
    -   [UpdateLoadBalancerZones](/help/en/slb/api-updateloadbalancerzones-nlb#doc-api-Nlb-UpdateLoadBalancerZones): modifies the zone information about an NLB instance.
        
    -   [EnableLoadBalancerIpv6Internet](/help/en/slb/api-enableloadbalanceripv6internet#doc-api-Nlb-EnableLoadBalancerIpv6Internet): switches from a private IPv6 address to a public IPv6 address for an NLB instance.
        
    -   [DisableLoadBalancerIpv6Internet](/help/en/slb/api-disableloadbalanceripv6internet#doc-api-Nlb-DisableLoadBalancerIpv6Internet): switches from a public IPv6 address to a private IPv6 address for an NLB instance.
