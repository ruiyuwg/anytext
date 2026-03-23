VPN Gateway is integrated with Network Intelligence Service (NIS). NIS can help you diagnose VPN gateways and provide suggestions based on the issues that are detected. This way, you can troubleshoot the issues that you encounter when you use VPN Gateway. The issues include IPsec negotiation issues, route configuration issues, and issues that are related to VPN gateway status. The diagnostic process does not affect your business.

## Diagnostic items

The following table describes the diagnostic items of VPN Gateway.

**Category**

**Diagnostic item**

**Description**

**Configurations**

**Instance configurations**

Checks whether a VPN gateway is being configured.

If a VPN gateway is being configured, wait until its status changes to **Available** before you perform an operation on the VPN gateway.

**Version**

Checks whether the VPN gateway is of the latest version.

We recommend that you upgrade your VPN gateway to the latest version. For more information, see [Upgrade a VPN gateway](/help/en/vpn/sub-product-ipsec-vpn/user-guide/upgrade-a-vpn-gateway-1#task-2107907).

**IPsec negotiations**

Checks the status of Phase 1 and Phase 2 negotiations for each IPsec-VPN connection on the VPN gateway.

If an exception occurs during the negotiations, see the solution displayed in the console or relevant topics for troubleshooting. For more information, see [Troubleshoot IPsec-VPN connection issues](/help/en/vpn/sub-product-ipsec-vpn/support/troubleshoot-ipsec-vpn-connection-issues#task-2288402).

**VPN tunnel configurations**

Checks whether the IPsec-VPN connections configured on the VPN gateway.

If the system detects that the required configuration items of a IPsec-VPN connection are missing, you need to configure the IPsec-VPN connection based on your network requirements. For more information, see [Create and manage IPsec-VPN connections in single-tunnel mode](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-ipsec-vpn-connections-in-single-tunnel-mode#task-llj-prx-bhb) or [Create and manage IPsec-VPN connections in dual-tunnel mode](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-an-ipsec-vpn-connection-in-dual-tunnel-mode).

**CIDR block conflicts**

Checks whether the destination CIDR blocks of the policy-based routes, destination-based routes, and Border Gateway Protocol (BGP) routes on the VPN gateway conflict with 100.64.0.0/10.

100.64.0.0/10 is reserved by Alibaba Cloud. Make sure that the destination CIDR blocks of the policy-based routes, destination-based routes, and BGP routes on the VPN gateway do not conflict with 100.64.0.0/10 or its subnets. Otherwise, the VPN gateway cannot work as expected.

If such conflicts exist, modify the conflicted CIDR blocks or use NAT Gateway for address translation. For more information, see [Use a VPC NAT gateway and a VPN gateway to connect a data center and a VPC](/help/en/nat-gateway/use-cases/use-a-vpc-nat-gateway-and-a-vpn-gateway-to-connect-a-data-center-and-a-vpc#task-2139351).

**BGP consistency**

Checks whether Phase 2 negotiations succeed but BGP negotiations failed.

If Phase 2 negotiations succeed but BGP negotiations fail, check the BGP configurations and transmission of BGP packets. For more information, see the "What do I do if the system prompts that Phase 2 negotiations succeeded but the BGP negotiation is in the Abnormal state?" section of the [FAQ about IPsec-VPN connections](/help/en/vpn/sub-product-ipsec-vpn/support/faq-about-ipsec-vpn-connections#section-d38-nj5-e9r) topic.

**Shared Phase 1 IPsec negotiations**

Checks whether the configurations of multiple IPsec-VPN connections are the same if the IPsec-VPN connections share Phase 1 negotiations.

If multiple IPsec-VPN connections are associated with the same VPN gateway and customer gateway, and use the same Internet Key Exchange (IKE) version, the IPsec-VPN connections share the same Phase 1 negotiation. In scenarios in which multiple IPsec-VPN connections share the same Phase 1 negotiation, the IPsec-VPN connections must have the same **Pre-Shared Key** and **IKE settings**, including the **version**, **negotiation mode**, **encryption algorithm**, **authentication algorithm**, **DH group**, and **SA lifetime (in seconds)**. This ensures that the **IKE settings** of each IPsec-VPN connection can be shared during IPsec negotiations.

Modify the IPsec-VPN connection configurations based on your business requirements to ensure that the IPsec-VPN connections use the same configurations. For more information, see the "Modify an IPsec-VPN connection" section of the [Create and manage IPsec-VPN connections in single-tunnel mode](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-ipsec-vpn-connections-in-single-tunnel-mode#section-jzo-tpu-s5q) topic.

**Quotas**

**VPN gateway bandwidth usage**

Checks whether the bandwidth usage of the VPN gateway reaches 80% of the upper limit.

If the bandwidth usage of the VPN gateway reaches 80% of the upper limit, you can upgrade the bandwidth of the VPN gateway based on your network requirements. For more information, see [Upgrade or downgrade a VPN gateway](/help/en/vpn/sub-product-ipsec-vpn/upgrade-or-downgrade-a-ipsec-vpn-gateway#task-qth-qvx-bhb).

**Fees**

**Overdue payments**

Checks whether the VPN gateway has overdue payments.

If the VPN gateway has overdue payments, add funds to your account.

**Overdue payment alert**

Checks whether the VPN gateway expires within seven days.

**Routes**

**Unadvertised routes**

Checks whether the VPN gateway has unadvertised policy-based or destination-based routes.

If unadvertised policy-based or destination-based routes exist, delete or advertise the routes based on your network communication requirements. For more information, see the [Advertise a policy-based route](/help/en/vpn/sub-product-ipsec-vpn/user-guide/manage-policy-based-routes#section-vsm-6qc-z3s) and [Delete a policy-based route](/help/en/vpn/sub-product-ipsec-vpn/user-guide/manage-policy-based-routes#section-qb5-ruk-feo) sections of the "Configure policy-based routes" topic, or the [Advertise a destination-based route](/help/en/vpn/sub-product-ipsec-vpn/user-guide/manage-destination-based-routes#section-n7h-ah6-diu) and [Delete a destination-based route](/help/en/vpn/sub-product-ipsec-vpn/user-guide/manage-destination-based-routes#section-dph-o5r-m1e) sections of the "Manage destination-based routes" topic.

**Improper BGP configurations**

Checks whether the VPN gateway uses proper BGP configurations if an IPsec-VPN connection uses BGP.

-   If an IPsec-VPN connection uses BGP, we recommend that you do not configure policy-based or destination-based routes. We recommend that you use BGP for networking.
    
-   If an IPsec-VPN connection uses BGP, we recommend that you disable the health check feature.
    
-   If an IPsec-VPN connection uses BGP, we recommend that you set the **Routing Mode** parameter of the IPsec-VPN connection to **Destination Routing Mode**.
    

**VPN route configurations**

-   Checks whether required route configurations are missing for the VPN gateway when you use an IPsec-VPN connection.
    
    For more information about how to add destination-based routes, policy-based routes, or BGP configurations for the VPN gateway, see [Configure policy-based routes](/help/en/vpn/sub-product-ipsec-vpn/user-guide/manage-policy-based-routes#task-2069511), [Manage destination-based routes](/help/en/vpn/sub-product-ipsec-vpn/user-guide/manage-destination-based-routes#task-2069511), [Create and manage IPsec-VPN connections in single-tunnel mode](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-ipsec-vpn-connections-in-single-tunnel-mode#task-llj-prx-bhb), or [Create and manage IPsec-VPN connections in dual-tunnel mode](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-an-ipsec-vpn-connection-in-dual-tunnel-mode).
    
-   Checks whether automatic BGP route propagation is enabled for the VPN gateway if an IPsec-VPN connection uses BGP.
    
    FFor more information, see the [Procedure](/help/en/vpn/sub-product-ipsec-vpn/user-guide/configure-bgp-dynamic-routing#77c5049e07fwz) section of the "Configure BGP dynamic routing" topic.
    

**Destination-based route conflicts**

Checks whether the destination CIDR blocks of destination-based routes on the VPN gateway overlap with each other.

If such conflicts exist, delete the conflicted destination-based routes and create new ones. Make sure that the destination CIDR blocks of destination-based routes do not overlap with each other. For more information, see [Manage destination-based routes](/help/en/vpn/sub-product-ipsec-vpn/user-guide/manage-destination-based-routes#task-2069511).

You can also use BGP for networking. For more information, see [Connect a VPC to a data center in dual-tunnel and BGP routing mode](/help/en/vpn/sub-product-ipsec-vpn/product-overview/establish-a-connection-between-the-vpc-and-the-on-premises-data-1).

**Policy-based route conflicts**

Checks whether the destination CIDR blocks of policy-based routes on the VPN gateway overlap with each other.

If such conflicts exist, delete the conflicted policy-based routes and create new ones. Make sure that the destination CIDR blocks of policy-based routes do not overlap with each other. For more information, see [Configure policy-based routes](/help/en/vpn/sub-product-ipsec-vpn/user-guide/manage-policy-based-routes#task-2069511).

You can also use BGP for networking. For more information, see [Connect a VPC to a data center in dual-tunnel and BGP routing mode](/help/en/vpn/sub-product-ipsec-vpn/product-overview/establish-a-connection-between-the-vpc-and-the-on-premises-data-1).

**BGP route conflicts**

-   Checks whether the destination CIDR blocks of BGP routes overlap with each other.
    
-   Checks whether the destination CIDR blocks of BGP routes and destination-based routes overlap.
    
-   Checks whether the destination CIDR blocks of BGP routes and policy-based routes overlap.
    

If such conflicts exist, troubleshoot the issues by following the on-screen instructions displayed in the console.

**Match between VPC routes and VPN routes**

Checks whether the destination CIDR block of the route in a VPC route table that points to the VPN gateway overlaps with the destination CIDR block of the policy-based route on the VPN gateway.

Make sure that the destination CIDR block of the policy-based route contains the destination CIDR block of the route in the VPC route table that points to the VPN gateway.

If the preceding condition is not met, you need to modify the destination CIDR block of the policy-based route. You must delete the policy-based route and create a new one that meets the condition. For more information, see [Configure policy-based routes](/help/en/vpn/sub-product-ipsec-vpn/user-guide/manage-policy-based-routes#task-2069511).

## Start a diagnostics

1.  Log on to the [VPN Gateway console](https://vpc.console.alibabacloud.com/vpn).
    
2.  In the top navigation bar, select the region in which the VPN gateway is deployed.
    
3.  On the **VPN Gateways** page, find the VPN gateway that you want to manage and choose ****Diagnose**** > **Instance Diagnosis** in the **Diagnose** column.
    
4.  In the **Instance Diagnostics** panel, view the diagnostic details.
    
    **Note**
    
    -   If NIS is not activated, select **Terms of Service for Standard Edition NIS** and click **Activate NIS free of charge to diagnose instances**.
        
    -   If you activate NIS as a Resource Access Management (RAM) user and a message appears indicating that you do not have the permission, grant the AliyunNISFullAccess permission to the RAM user by using your Alibaba Cloud account. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
        
    -   Ifyou diagnose a VPN gateway for the first time, the system automatically creates the service-linked role AliyunServiceRoleForNis. For more information, see [Service-linked roles](/help/en/nis/security-and-compliance/service-linked-roles#concept-2136433).
        
    
    ![发起诊断](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5974402861/p606256.png)
    
    **Section**
    
    **Description**
    
    ①
    
    Anomalies are displayed in the Instance Diagnostics panel. You can view the diagnosis description, relevant resources, and suggestions.
    
    ②
    
    You can view all diagnostic details about the VPN gateway by selecting **Show All Diagnostic Items** in the **Diagnostic Items** section.
    
    ③
    
    You can go to the **Overview** page of the NIS console by clicking **Go to the NIS console to view diagnostic records** in the upper part of the **Instance Diagnostics** panel to view historical diagnostic reports about the VPN gateway. For more information, see [Use features on the Overview page](/help/en/nis/user-guide/use-features-on-the-overview-page#task-2174778).
    

## Diagnostic examples

![实例诊断-IPsec-VPN](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2328402861/p606227.png)

In scenarios in which a data center accesses resources in a VPC by using an IPsec-VPN connection, you can diagnose your VPN gateway to ensure that the IPsec-VPN connection works as expected before you use the connection to transmit service data.

1.  Start a diagnostics on the VPN gateway. For more information, see the [Start a diagnostics](#section-l00-muc-ihd) section of this topic.
    
2.  In the **Instance Diagnostics** panel, view the diagnostic details.
    
    ![发起诊断-示例1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4974402861/p606259.png)
    
    The preceding figure shows an example of a VPN gateway that fails the diagnostics because the **Phase 1 negotiation of an IPsec-VPN connection fails**. You can click **Phase 1 Negotiation Failed** in the **Result** column to view more details and troubleshoot issues.
    
    You can also troubleshoot issues based on the error message on the **IPsec Connections** page. If the Phase 1 or Phase 2 negotiation of an IPsec-VPN connection fails, an error message is displayed on the **IPsec Connections** page. You can use the error message for troubleshooting. For more information, see [Troubleshoot IPsec-VPN connection issues](/help/en/vpn/sub-product-ipsec-vpn/support/troubleshoot-ipsec-vpn-connection-issues#task-2288402).![发起诊断-示例1-IPsec连接错误码](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5974402861/p606275.png)
    
    The preceding figure shows an example of the error message displayed on the IPsec Connections page due to failed Phase 1 negotiation of an IPsec-VPN connection. The IPsec-VPN connection fails because the pre-shared key is different on the VPN gateway and the peer gateway. To resolve this issue, make sure that both gateways use the same pre-shared key.
    
3.  After you resolve the issue, diagnose the VPN gateway again. Make sure that the VPN gateway passes the diagnostics.
    
    ![发起诊断-示例1-诊断通过](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5974402861/p606285.png)
    
4.  If the VPN gateway passes the diagnostics, but issues occur when you use the IPsec-VPN connection, such as communication failures between the data center and the VPC, see the FAQ topics of VPN Gateway for troubleshooting. For more information, see [FAQ about IPsec-VPN connections](/help/en/vpn/sub-product-ipsec-vpn/support/faq-about-ipsec-vpn-connections#concept-pkd-53h-xdb).
