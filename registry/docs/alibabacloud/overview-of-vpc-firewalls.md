This topic describes the basic concepts and common scenarios of virtual private cloud (VPC) firewalls in Cloud Firewall.

## What is a VPC firewall?

A VPC firewall helps you detect and manage traffic between VPCs and between a VPC and a data center. If VPCs are attached to the same Cloud Enterprise Network (CEN) instance or connected by an Express Connect circuit, you can create a VPC firewall to control traffic between the VPCs and between a VPC and a data center.

VPC firewalls also support cross-account management. For example, if Account A creates a CEN instance and VPC\_1, and Account B creates VPC\_2, and both VPCs are connected through the CEN instance of Account A, you can use Account A to purchase Cloud Firewall Enterprise Edition or Ultimate Edition to protect the traffic between VPC\_1 and VPC\_2.

## **How it works**

For diagrams that illustrate how VPC firewalls work, see the following topics:

-   [Protection diagram of a VPC firewall for an Enterprise Edition transit router](/help/en/cloud-firewall/cloudfirewall/user-guide/configure-a-vpc-firewall-for-an-enterprise-edition-transit-router#5adffb41218qi)
    
-   [Protection diagram of a VPC firewall for a Basic Edition transit router](/help/en/cloud-firewall/cloudfirewall/user-guide/configure-a-vpc-firewall-for-a-basic-edition-transit-router#cebc9fcfa1nem)
    
-   [Protection diagram of a VPC firewall for an Express Connect circuit](/help/en/cloud-firewall/cloudfirewall/user-guide/configure-a-vpc-firewall-for-vpcs-connected-by-using-an-express-connect-circuit#0b57f2c437glx)
    

## Protection scope

Cloud Firewall provides three types of VPC firewalls. You can select a firewall type based on your network architecture.

**VPC firewall type**

**Application Scenario**

**Operation guide**

VPC firewall for an Enterprise Edition transit router

Protection features:

-   Traffic between multiple virtual private clouds (VPCs) in the same region
    
-   Traffic between multiple cross-region VPCs that are connected using an Enterprise Edition transit router (TR)
    
-   Traffic between a VPC and a virtual border router (VBR), which is traffic between a VPC and a data center
    
-   Traffic between a VPC and a Cloud Connect Network (CCN) instance
    
-   Traffic between multiple VBRs
    
-   Traffic between a CCN instance and a VBR
    
-   Traffic between a VPC and a public VPN gateway
    

Does not protect traffic between multiple CCN instances

[Configure a VPC firewall for an Enterprise Edition transit router](/help/en/cloud-firewall/cloudfirewall/user-guide/configure-a-vpc-firewall-for-an-enterprise-edition-transit-router#task-2229461)

VPC firewall for a Basic Edition transit router

Protection features:

-   Traffic between multiple virtual private clouds (VPCs) in the same region
    
-   Traffic between multiple cross-region VPCs that are connected using a Basic Edition transit router (TR)
    
-   Traffic between a VPC and a virtual border router (VBR), which is traffic between a VPC and a data center
    
-   Traffic between a VPC and a Cloud Connect Network (CCN) instance
    

Does not protect:

-   Traffic between multiple VBRs
    
-   Traffic between a CCN instance and a VBR
    
-   Traffic between multiple CCN instances
    

[Configure a VPC firewall for a Basic Edition transit router](/help/en/cloud-firewall/cloudfirewall/user-guide/configure-a-vpc-firewall-for-a-basic-edition-transit-router#task-2275010)

VPC firewall for an Express Connect circuit

Protects:

-   Traffic between multiple VPCs that are in the same region, belong to the same account, and are connected using an Express Connect circuit in virtual private cloud (VPC) mode
    
-   Traffic between multiple VPCs in the same region that are connected using a VPC peering connection. The VPCs can belong to the same account or different accounts.
    

Does not protect:

-   Traffic between multiple cross-account and cross-region VPCs that are connected using an Express Connect circuit in virtual private cloud (VPC) mode
    
-   Traffic between a VPC and a virtual border router (VBR)
    

**Note**

To protect traffic between cross-region or cross-account VPCs, or traffic between a VPC and a VBR, we recommend that you use a CEN network. For more information, submit a [ticket](https://smartservice.console.alibabacloud.com/console.htm#/ticket/createIndex).

[Configure a VPC firewall for an Express Connect circuit](/help/en/cloud-firewall/cloudfirewall/user-guide/configure-a-vpc-firewall-for-vpcs-connected-by-using-an-express-connect-circuit#task-2275006)

**Note**

VPC firewalls do not support the [jumbo frame](/help/en/ecs/user-guide/jumbo-frame/) feature.

## **Specifications**

The specifications of a VPC firewall include the number of public IP addresses that can be protected and the Protected Internet Traffic quota.

**Specification**

**Description**

**Cloud Firewall Subscription (Enterprise and Ultimate Editions)**

**Cloud Firewall pay-as-you-go**

Number of VPC Firewalls

The number of VPC firewalls that can be created.

This depends on the number of VPC firewalls that you create and the Protected VPC Traffic that you purchase. If the quota is insufficient, upgrade the specifications. For more information, see [Configure a VPC firewall for an Enterprise Edition transit router](/help/en/cloud-firewall/cloudfirewall/user-guide/configure-a-vpc-firewall-for-an-enterprise-edition-transit-router#078f92aceefwg).

The quota varies based on the Cloud Firewall edition. For more information, see [Subscription 2.0](/help/en/cloud-firewall/cloudfirewall/product-overview/subscription).

**Note**

If your service traffic exceeds the purchased traffic processing specifications of Cloud Firewall, the product Service-Level Agreement (SLA) cannot be guaranteed. This may trigger service degradation rules. These rules include but are not limited to security feature failures such as access control, intrusion prevention system (IPS), and log audit, firewall shutdown for top assets that exceed the traffic limit, and packet loss due to throttling.

If your service traffic is at risk of exceeding the limit, see [Pay-as-you-go for elastic traffic](/help/en/cloud-firewall/cloudfirewall/product-overview/elastic-pay-by-traffic-in-cloud-firewall-that-uses-the-subscription-billing-method).

You are charged based on the number of protected instances and the total processed traffic. No quota limit exists. For more information about billing, see [Pay-as-you-go 2.0](/help/en/cloud-firewall/cloudfirewall/product-overview/pay-as-you-go).

Protected VPC Traffic

The peak total traffic between VPCs that can be protected.

#### **View the protection status of assets and quota usage**

You can view the protected assets in your account on the VPC Firewall page.

1.  Log on to the [Cloud Firewall console](https://yundun.console.aliyun.com/?p=cfwnext). In the navigation pane on the left, click **Firewall Settings**.
    
2.  On the ****VPC Firewall**** tab, you can view the number of created and uncreated VPC firewalls, the number of available authorizations, the total number of network elements, and the number of protected and unprotected network elements in your account.
    
    If you exhaust the available authorizations for your edition, which correspond to the number of VPC firewall instances you can protect, you can click **Increase Quota** to purchase more. For more information about the number of VPC firewall instances that each edition supports, see [Subscription 2.0](/help/en/cloud-firewall/cloudfirewall/product-overview/subscription).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8499186961/p684557.png)
    
3.  Click the ![查看](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8499186961/p432197.png) icon in the VPC Firewall section to view the number of created and uncreated VPC firewall instances for CEN (Enterprise Edition), CEN (Basic Edition), and Express Connect.
    
4.  Click the ![查看](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8499186961/p432197.png) icon in the Protected Network Elements section to view the total number of protected and unprotected VPCs, VBRs, TRs, and VPNs.
    

The following describes the data:

-   CEN (Enterprise Edition)
    
    -   Unprotected network elements: The number of network elements that are not protected by VPC firewalls. These network elements include VPCs, VBRs, transit routers, and VPN gateways that are not added in manual mode.
        
    -   Protected network elements: The number of network elements that are protected by VPC firewalls. These network elements include VPCs, VBRs, transit routers, and VPN gateways that are added in manual mode.
        
    -   Available quota: The number of VPC firewalls that you are authorized to enable. Each transit router corresponds to one VPC firewall.
        
-   CEN (Basic Edition)
    
    -   Unprotected network elements: the number of VPCs that are not protected by VPC firewalls.
        
    -   Protected network elements: the number of VPCs that are protected by VPC firewalls.
        
    -   Available quota: The number of VPC firewalls that you are authorized to enable. Each VPC corresponds to one VPC firewall.
        
-   Express Connect
    
    -   Unprotected network elements: the number of VPCs that are not protected by VPC firewalls.
        
    -   Protected network elements: the number of VPCs that are protected by VPC firewalls.
        
    -   Available quota: The number of VPC firewalls that you are authorized to enable. A local VPC and its peer VPC correspond to one VPC firewall.
