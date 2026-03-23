You can connect an on-premises database to Alibaba Cloud by using VPN Gateway, Express Connect, or Smart Access Gateway.

## Overview

You can use [VPN Gateway](/help/en/vpn/product-overview/what-is-vpn-gateway), [Express Connect](/help/en/express-connect/product-overview/what-is-express-connect/), [Smart Access Gateway](/help/en/sag/product-overview/what-is-sag), [Cloud Enterprise Network (CEN)](/help/en/cen/user-guide/what-is-cen-1), or [Database Gateway](/help/en/database-gateway/latest/what-is-database-gateway) to establish a private connection between your data center and a virtual private cloud (VPC) in Alibaba Cloud. Your on-premises database can communicate with Data Transmission Service (DTS) over the private connection. This allows you to extend the on-premises IT infrastructure to Alibaba Cloud. You can use the massive computing, storage, network, and CDN resources that are provided by Alibaba Cloud to handle fluctuating workloads and improve application stability.

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2623097951/p59252.png)

## Solutions

**Solution**

**Description**

VPN Gateway

You can use VPN Gateway to establish IPsec-VPN connections between a data center and VPC. The hot-standby architecture of VPN Gateway ensures automatic failovers within seconds.

VPN connections are established over the Internet. The latency and availability of your VPN connections depend on the quality of the Internet. If you do not require low network latency, we recommend that you use VPN Gateway.

For more information, see [Connect a data center to a VPC by using the IPsec-VPN function](/help/en/dts/connect-a-data-center-to-a-vpc-using-ipsec-vpn#task-2134537).

Express Connect

-   Express Connect circuits
    
    You can connect a data center to an Alibaba Cloud access point by using a dedicated circuit that is provided by a third-party service provider. You can configure the access point based on your business requirements in the Express Connect console.
    
    Physical connections offer high network quality and large bandwidth. If you require a high-quality network connection, we recommend that you use an Express Connect circuit. For more information, see [Overview of access solutions](/help/en/express-connect/product-overview/functions-and-features).
    
-   Redundant Express Connect circuits
    
    You can use redundant Express Connect circuits to establish high-quality and reliable private connections between a data center and VPC. You can provision up to four Express Connect circuits to achieve equal-cost multi-path routing (ECMP). For more information, see [Establish active/standby connections between a data center and Alibaba Cloud](/help/en/express-connect/use-cases/create-active-or-standby-physical-connections#task-1614428) and [Establish active/active connections between a data center and Alibaba Cloud](/help/en/express-connect/use-cases/create-redundant-connections-with-load-balancing-routing#task-1614428).
    
-   Active/standby connections over Border Gateway Protocol (BGP)
    
    By using the combination of an Express Connect circuit and a CEN instance, you can connect your data center to VPCs that reside in different regions.
    

Smart Access Gateway

Smart Access Gateway provides an end-to-end solution to connect on-premises networks to Alibaba Cloud. Smart Access Gateway allows enterprises to establish encrypted connections with the nearest VPCs over the Internet. This service features high intelligence, reliability, and security.

Smart Access Gateway is also easy to configure and cost-effective. We recommend that you use Smart Access Gateway if you need to connect multiple on-premises branch sites to Alibaba Cloud.

For more information, see [Connect on-premises networks outside the Chinese mainland to Alibaba Cloud](/help/en/sag/use-cases/connect-private-networks-outside-mainland-china-to-alibaba-cloud).

CEN

CEN allows you to build a hybrid cloud and a global network in which distributed business systems can be deployed. You can connect different networks by attaching the networks to a CEN instance.

For more information, see [CEN tutorial](/help/en/cen/user-guide/use-cen-to-enable-intra-region-network-communication).

Database Gateway

Database Gateway allows you to connect an on-premises database or a third-party cloud database to Alibaba Cloud without the need of opening a port to the Internet.

For more information, see [Connect an on-premises database or a third-party cloud database to Alibaba Cloud by using Database Gateway](/help/en/dts/user-guide/connect-an-on-premises-database-or-a-database-hosted-on-a-third-party-cloud-to-alibaba-cloud-using-database-gateway#task-2472548).

## References

You can use a user-created database as the source or destination database. You must make different preparations based on scenarios. Then, select the required instance type when you configure a task. For more information, see [Preparation overview](/help/en/dts/user-guide/preparation-overview#concept-2364477).
