Alibaba Cloud partners (Network Service Providers such as China Unicom and China Telecom) maintain pre-established Express Connect circuits to Alibaba Cloud access points. You can use a partner's shared circuit to connect your on-premises data center (IDC) to a virtual private cloud (VPC). This approach works well when:

-   Your IDC is not near an Alibaba Cloud Express Connect access point.
    
-   You do not need a dedicated high-bandwidth connection.
    

## How partner connections work

A partner's Express Connect circuit is shared among multiple tenants. The partner maintains the circuit between their access point and the Alibaba Cloud access point. To connect your IDC, the partner only provisions the last-mile connection from their access point to your IDC.

Term

Definition

Partner (NSP)

A Network Service Provider, such as China Unicom or China Telecom, that has a pre-established shared Express Connect circuit with an Alibaba Cloud access point

Tenant

The end user who uses the partner's Express Connect circuit to connect their IDC to Alibaba Cloud

Compared with a dedicated Express Connect circuit, a shared connection through a partner has a shorter provisioning period — typically less than one month.

## Shared port mode

Partners use the shared port feature to provision connections for tenants. Instead of pushing a cross-account virtual border router (VBR) to a tenant, the partner pushes a cross-account shared port that belongs to the tenant.

### Billing

In shared port mode, billing is adjusted as follows:

Fee type

Billed to

Initial installation fee for the port

Not charged

VBR instance fee

Not charged

Port usage fee

Tenant

Outbound data transfer fee

Tenant

For more information, see [Billing overview](/help/en/express-connect/product-overview/billing-overview/#section-s76-2bc-qtx).

### Constraints

-   Each shared port supports only one VBR instance (1:1 ratio).
    
-   Partners assign a VLAN ID when creating the shared Express Connect circuit. After you accept the shared port, you inherit this VLAN ID when creating a VBR instance. The VLAN ID cannot be modified.
    

> **Important:** To connect to Alibaba Cloud through a partner, you must sign a contract with the Network Service Provider. The partner is responsible for the Service-Level Agreement (SLA) and any issues outside the Alibaba Cloud network.

## Connection workflow

### First-time setup

If you are setting up a shared circuit for the first time, contact a partner to help you establish the connection.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1210002771/CAEQTxiBgIDct_iI2BkiIDA3YThiYWJiMjFjODQ2ZDdiMmMzODY2NjI4YjA3OTQ04994967_20250321150913.464.svg)

### Migrate an existing connection to shared port mode

If you already connect to Alibaba Cloud through a shared circuit, the partner converts your resources to the cross-account shared port mode.

> **Note:** This conversion does not affect your services.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1210002771/CAEQTxiBgIDr4PiI2BkiIDA4YjNjYmQ5YTk3NjRjZjk5OTU3YTk1NTgxODZkZmEw4994967_20250321150913.464.svg)

## Example: Connect through Equinix

In this example, your IDC is in the Equinix DC11 data center in Virginia, US. You use an Equinix Cloud Exchange (ECX) Fabric cross-connection to connect to the Alibaba Cloud US (Virginia) region, and then use an Alibaba Cloud cross-border product to reach your VPC resources in the China (Beijing) region, such as ECS instances, OSS buckets, ApsaraDB RDS instances, and SLB instances.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1210002771/CAEQTxiBgMCSjZCJ2BkiIDEwOTVlYWFmNTRhNzRmYmViYjViYmE3NGY2N2JkMjcx4117247_20231215113845.879.svg)

> **Note:** Different partners offer cross-connections with different bandwidth specifications. Contact your partner for details.

1.  Contact Equinix to inquire about a hosted connection solution. Equinix performs a site survey, confirms the resources and fees for connecting from the ECX Fabric platform to your IDC, and provides a quote.
    
2.  Equinix completes the circuit construction to connect your IDC to the ECX Fabric platform.
    
3.  Provide your Alibaba Cloud account ID to Equinix.
    
    To find your account ID, log on to the [Console](https://home.console.alibabacloud.com/)[Console](https://home.console.alibabacloud.com/), hover your profile picture in the upper-right corner, and get Account ID from popup panel.
    
4.  Equinix creates a shared port for you.
    
5.  Go to the [Physical Connection Page](https://expressconnect.console.alibabacloud.com) to accept the shared port. For more information, see [Tenant guide](/help/en/express-connect/user-guide/operation-guide-for-tenants#concept-2066804).
