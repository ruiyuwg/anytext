Classic Load Balancer (CLB) distributes client requests across backend servers to improve service availability and performance. Create a CLB instance to start receiving traffic, then manage its lifecycle — including protection settings, idle instance cleanup, and release.

## **Prerequisites**

Before you create a CLB instance, complete the following preparations:

-   **VPC and vSwitch:** Create a Virtual Private Cloud (VPC) and at least one vSwitch in the target region. The CLB instance must be in the same region as your backend servers.
    
-   **Zone planning:** In regions with multiple zones, CLB deploys instances across a primary zone and a secondary zone for automatic failover. Select zone where your backend servers reside as the primary zone to reduce network latency. The zone configuration cannot be changed after creation.
    
-   **Network type decision:** Choose between Internet-facing and internal before creation. The network type is permanent and cannot be changed. For details, see [CLB instances](/help/en/slb/classic-load-balancer/user-guide/clb-instance/).
    

## **Create an internal CLB instance**

An internal CLB instance receives a private IP address from the vSwitch CIDR block. Only clients that can communicate with the VPC can access the service.

### **Console**

1.  Go to the [CLB buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=slb_intl) and configure the following settings.
    
    **Setting**
    
    **Description**
    
    **Region**
    
    Select the region where your backend servers are deployed.
    
    **Zone Type**
    
    **Multi-zone** (default): Deploys the instance in a primary and secondary zone. If the primary zone fails, traffic switches to the secondary zone automatically. **Single zone**: Available only in regions with one zone.
    
    **Primary Zone**
    
    Select the zone that handles traffic by default. To use a different zone, create a new instance.
    
    **Instance Type**
    
    Select **Intranet**. The system assigns a private IP address from the vSwitch CIDR block.
    
    **IP Version**
    
    **IPv4** only.
    
    VPC and vSwitch
    
    Select the VPC and vSwitch in the target region and primary zone.
    
    **Instance Billing Method**
    
    **Pay-by-CLCU**.
    
    **Instance Name**
    
    Optional. You can modify the name and also tags on the instance details page after creation.
    
2.  Click **Buy Now** to create the instance.
    

> Internal instances do not incur Internet data transfer fees. To enable public access, associate an Elastic IP Address (EIP) with the instance after creation. See [Enable public access for an internal CLB instance](#8ded7817d4b4z).

### **API**

Call [CreateLoadBalancer](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-createloadbalancer) with `AddressType` set to `intranet`.

## **Create an Internet-facing CLB instance**

An Internet-facing CLB instance receives a static public IP address assigned by the system. The public IP is bound to the instance and cannot be independently associated or disassociated. When releasing the instance, you can choose to retain the public IP as an EIP. See [Release a CLB instance](#8d3e05df893l7).

### **Console**

1.  Go to the [CLB buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=slb_intl) and configure the following settings. For settings not listed here, see [Console](#28bce3eee1phy).
    
    **Setting**
    
    **Description**
    
    **Instance Type**
    
    Select **Internet**. The system assigns a static public IP address.
    
    **IP Version**
    
    IPv4 or IPv6. IPv6 is available only in [supported regions](/help/en/slb/classic-load-balancer/product-overview/regions-that-support-clb#section-ml2-ykb-wdb).
    
    **Internet Data Transfer Fee**
    
    **By traffic**.
    
2.  Click **Buy Now** to create the instance.
    

### **API**

Call [CreateLoadBalancer](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-createloadbalancer) with `AddressType` set to `internet`.

## **Next steps**

After you create a CLB instance, complete the following steps to start receiving traffic:

1.  **Add a listener:** Configure a TCP, UDP, HTTP, or HTTPS listener to define how the CLB instance receives and distributes requests. See [CLB listeners](/help/en/slb/classic-load-balancer/user-guide/listener-overview/).
    
2.  **Add backend servers:** Create a server group and add backend servers to receive forwarded requests. See [CLB server groups](/help/en/slb/classic-load-balancer/user-guide/backend-server-overview).
    
3.  **Configure domain name resolution (optional):** Resolve a custom domain name to the CLB instance domain name. See [Add a DNS record](/help/en/dns/pubz-add-parsing-record).
    

## **Enable public access for an internal CLB instance**

Associate an EIP with an internal CLB instance to enable public access. This approach is recommended over creating an Internet-facing instance because EIPs can be flexibly associated and disassociated and can be added to an [Internet Shared Bandwidth](/help/en/internet-shared-bandwidth/product-overview/what-is-internet-shared-bandwidth) instance to reduce costs.

**Constraints:**

-   Each internal CLB instance supports only one EIP in the same region.
    
-   The associated EIP incurs separate [charges](/help/en/eip/billing-overview).
    

### **Console**

1.  Go to the [CLB Instances](https://slb.console.alibabacloud.com/slb/ap-southeast-1/slbs) page and create an internal CLB instance.
    
2.  In the **Actions** column of the target instance, choose **![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7453126461/p94906.png)** > **Change Specification** > **Bind EIP**.
    
3.  Select an available EIP from the drop-down list. If no EIPs are available, click **Purchase EIP** to create one.
    

### **API**

1.  Call [CreateLoadBalancer](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-createloadbalancer) with `AddressType` set to `intranet`.
    
2.  Call [AssociateEipAddress](/help/en/eip/developer-reference/api-vpc-2016-04-28-associateeipaddress-eips) to associate an EIP with the instance.
    

## **Enable deletion protection**

Enable deletion protection and configuration read-only mode to prevent CLB instances from being accidentally deleted or modified.

> Configuration read-only mode applies only to console operations. API calls can still modify instance configurations.

### **Console**

1.  Go to the [CLB Instances](https://slb.console.alibabacloud.com/slb/ap-southeast-1/slbs) page and click the target instance ID.
    
2.  On the **Instance Details** tab, click **Enable/Disable Deletion Protection** and **Enable/Disable Configuration Read-only Mode** to turn on or off the protection.
    

### **API**

-   Call [SetLoadBalancerDeleteProtection](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-setloadbalancerdeleteprotection) to enable or disable deletion protection.
    
-   Call [SetLoadBalancerModificationProtection](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-setloadbalancermodificationprotection) to enable or disable configuration read-only mode.
    

## **Manage idle instances**

A pay-as-you-go CLB instance is considered idle if it has been unused for more than 7 days and meets any of the following conditions:

-   The instance is in the **Stopped** state.
    
-   No listener is configured.
    
-   All listeners are stopped.
    
-   No backend servers are added.
    
-   All backend server weights are set to 0.
    

**Important**

Idle instances continue to incur charges. Release idle instances promptly to reduce costs. For more information, see [Am I still charged after a CLB instance is stopped?](/help/en/slb/classic-load-balancer/product-overview/faq-about-billing#section-zur-j6r-5zc)

### **Console**

1.  Go to the [CLB Instances](https://slb.console.alibabacloud.com/slb/idle-slbs) page and click **Idle SLB Instances** to view all pay-as-you-go instances unused for more than 7 days.
    
2.  Review the idle reason and confirm the instance is no longer needed.
    
3.  Click **Release** in the **Actions** column.
    

## **Release a CLB instance**

You are charged instance fees from the time a CLB instance is created until it is released, regardless of whether the instance is in use. Release instances that you no longer need to avoid unnecessary costs.

**Warning**

Releasing an instance permanently deletes all its configurations. This action is irreversible.

**Before you release an instance:**

-   Disable **Deletion Protection** for the instance. If enabled, disable it on the **Instance Details** page first.
    
-   If a custom domain name resolves to the instance's IP address, update the DNS record before releasing to avoid service interruptions.
    
-   If the instance is managed by another Alibaba Cloud service (such as Container Service for Kubernetes), releasing the CLB instance causes the associated service to become unavailable.
    
-   Only pay-as-you-go instances can be released manually.
    

**Release options:**

**Option**

**Description**

**Release Now**

The instance is released immediately.

**Scheduled Release**

Billing stops at the specified time. The instance is released at the next full hour.

**Retain the public IP as an EIP:**

When you release an Internet-facing IPv4 CLB instance, you can convert the static public IP address to an EIP and retain it.

-   The retained EIP can be associated with another instance in the same region, so you can keep the same public IP address during instance migration.
    
-   The retained EIP is billed separately using pay-as-you-go (pay-by-data-transfer) with a maximum bandwidth of 200 Mbps.
    
-   The first time you retain an EIP, the system automatically creates the service-linked role `AliyunServiceRoleForSlbEipAccess`.
    

**What happens after release:**

-   Running backend ECS instances are not affected.
    

### **Console**

1.  Go to the [CLB Instances](https://slb.console.alibabacloud.com/slb/ap-southeast-1/slbs) page. In the **Actions** column of the target instance, choose **![更多操作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3400449261/p103337.png)** > **Release Settings**.
    
2.  Select a release option. For Internet-facing IPv4 instances, choose whether to retain the public IP as an EIP.
    

### **API**

Call [DeleteLoadBalancer](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-deleteloadbalancer) to release a pay-as-you-go CLB instance.

## **Billing**

New CLB instances use pay-as-you-go billing only. For details about billable items and pricing, see [Pay-as-you-go](/help/en/slb/classic-load-balancer/product-overview/pay-as-you-go).

**Instance type**

**Fees**

**Internet-facing**

Instance fees + Load Balancer Capacity Unit (LCU) fees + Internet data transfer fees + public IP retention fees (if applicable).

**Internal**

Instance fees + LCU fees. After associating an EIP, the EIP incurs separate charges.

## **Quotas**

**Resource**

**Default limit**

**How to increase**

CLB instances per Alibaba Cloud account

30

Go to the [Quota Center](https://quotas.console.alibabacloud.com/products/slb/quotas?query=slb_quota_instances_num) and request a increase for the `slb_quota_instances_num` quota.

## **References**

-   [CLB instances](/help/en/slb/classic-load-balancer/user-guide/clb-instance/): Understand CLB network types, IP versions, and performance specifications.
    
-   [CLB server groups](/help/en/slb/classic-load-balancer/user-guide/backend-server-overview): Route requests distributed by CLB to backend servers.
    
-   [CLB listeners](/help/en/slb/classic-load-balancer/user-guide/listener-overview/): Check connection requests and distribute traffic based on scheduling algorithms.
    
-   [Add a DNS record](/help/en/dns/pubz-add-parsing-record): Resolve a custom domain name to the CLB instance domain name.
