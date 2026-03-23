After you create an Application Load Balancer (ALB) instance, you can modify its zone deployment, edition, DNS records, and bandwidth settings as your business requirements change.

## Change zones

Adding or removing zones updates the ALB deployment to include or exclude the specified zones. For Internet-facing ALB instances, each zone requires an associated elastic IP address (EIP), and the EIPs may change when you modify zones.

### Limits

-   If an ALB instance is deployed in one or two zones, you cannot reduce the number of zones.
    
-   EIPs allocated to different zones of the same ALB instance must be of the same type.
    
-   Only pay-as-you-go (pay-by-data-transfer) EIPs that are not associated with Internet Shared Bandwidth instances can be associated with an ALB instance. Subscription EIPs and pay-as-you-go EIPs that use the pay-by-bandwidth metering method are not supported.
    
-   After you associate an EIP with an ALB instance, you can then associate an Internet Shared Bandwidth instance with the ALB instance in the ALB console.
    

### Effective time

Zone changes take effect immediately. If network latency is high, wait a few minutes.

### Billing impact

When you change the zones of an Internet-facing ALB instance, the associated EIPs may change. Check your bills for actual EIP charges. For more information, see [EIP billing](/help/en/eip/billing-overview#concept-645525).

### Procedure

1.  Log on to the [ALB console](https://slb.console.alibabacloud.com/alb).
    
2.  In the top navigation bar, select the region where the ALB instance is deployed.
    
3.  On the **Instances** page, find the ALB instance and choose **![More](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9060061261/p271002.png)** > **Modify Zone/Subnet** in the **Actions** column.
    
4.  In the **Modify Zone/Subnet** dialog box, select or clear zones and vSwitches, then click **OK**.
    
    **Note**
    
    If no vSwitch is available, click **Create vSwitch** in the drop-down list. For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575).
    
    For Internet-facing ALB instances:
    
    -   Assign an EIP to each selected zone.
        
    -   If you select **Purchase EIP**, a pay-as-you-go EIP that uses the pay-by-data-transfer metering method is created. The EIP uses BGP (Multi-ISP) lines and is protected by Anti-DDoS Origin Basic.
        
    

## Remove or restore DNS records

Removing or restoring DNS records for individual zones controls whether traffic is routed to those zones. Use this feature to simulate zone disaster recovery scenarios and verify the high availability of your ALB deployment.

When you remove a DNS record, the A record that resolves the ALB domain name to the zone IP address is deleted. The zone status changes from **Enabled** to **DNS Removed**, and the system stops probing the availability of that IP address.

When you restore a DNS record, a new A record is added that resolves the ALB domain name to the zone IP address. The zone status changes back to **Enabled**, and traffic is forwarded through that zone again.

**Important**

After you remove a DNS record, traffic that directly accesses the zone through its IP address continues to be forwarded, and the load balancer capacity unit (LCU) consumption is still calculated.

### Zone status reference

**Status**

**Description**

**Available action**

Enabled

The ALB instance uses the zone IP address to forward traffic.

Remove DNS

DNS Removed

The DNS record for the zone IP address has been removed.

Resume DNS

**Note**

If only one zone is in the **Enabled** state, you cannot remove its DNS record.

### Limits

-   Only [ALB upgraded instances](/help/en/slb/product-overview/alb) support DNS record removal and restoration.
    
    **Note**
    
    Before the upgrade, ALB instances in static IP mode supported this feature, while ALB instances in dynamic IP mode did not.
    
-   If only one zone of an ALB instance is in the **Enabled** state, you cannot remove its DNS record.
    

### Effective time

DNS record removal and restoration take effect immediately. If network latency is high, wait a few minutes.

### Billing impact

None.

### Procedure

1.  Log on to the [ALB console](https://slb.console.alibabacloud.com/alb).
    
2.  In the top navigation bar, select the region where the ALB instance resides.
    
3.  On the **Instances** page, click the ID of the ALB instance.
    
4.  On the **Instance Details** tab, go to the **Zone** section and perform one of the following operations:
    
    -   **Remove a DNS record**
        
        In the **Actions** column of the target zone, click **Remove DNS**. In the message that appears, confirm the impacts and click **Remove DNS**.
        
        **Note**
        
        -   This operation affects only the current ALB instance. Other instances in the zone are not affected.
            
        -   Removing a DNS record deletes the A record that resolves the ALB domain name to the zone IP address. Proceed with caution.
            
        
        After removal, the zone status changes to **DNS Removed** and the system stops probing the IP address availability.
        
    -   **Restore a DNS record**
        
        In the **Actions** column of a zone in the **DNS Removed** state, click **Resume DNS**. In the message that appears, confirm the impacts and click **Resume DNS**.
        
        **Note**
        
        After the DNS record is restored, an A record is added that resolves the ALB domain name to the zone IP address. Traffic destined for the ALB domain name is forwarded through this zone.
        
        After restoration, the zone status changes to **Enabled** and the IP address availability is probed.
        

## Change the edition

ALB provides three editions: basic, standard, and WAF-enabled. You can upgrade or downgrade the edition at any time. The instance continues to forward traffic during the change.

-   For edition feature comparisons, see [Functions and features](/help/en/slb/application-load-balancer/product-overview/functional-characteristics#concept-2021067).
    
-   For resource quotas by edition, see [ALB quotas](/help/en/slb/application-load-balancer/product-overview/quotas-and-limits#concept-2021067).
    

### Limits

-   You cannot downgrade a standard ALB instance to a basic ALB instance.
    
-   You can downgrade a WAF-enabled ALB instance to a standard ALB instance, but not to a basic ALB instance.
    
-   For limits on WAF-enabled ALB instances, see [Activate and manage WAF-enabled ALB instances](/help/en/slb/application-load-balancer/use-cases/enable-waf-protection-for-alb#task-2253186).
    

### Effective time

The new edition takes effect immediately in most cases. If network latency is high, wait a few minutes.

### Billing impact

-   Different editions have different fee structures. Check your bills for actual charges. For more information, see [Billing rules](/help/en/slb/application-load-balancer/product-overview/alb-billing-rules#concept-2012118).
    
-   Upgrading to the WAF-enabled edition incurs a security protection fee for Web Application Firewall (WAF) 3.0. For more information, see [Subscription WAF 3.0 instances](/help/en/waf/web-application-firewall-3-0/billing-description#task-2230251) and [Pay-as-you-go WAF 3.0 instances](/help/en/waf/web-application-firewall-3-0/billing-description-v3#concept-2152696).
    
-   If no WAF instance exists in your Alibaba Cloud account when you purchase a WAF-enabled ALB instance, a pay-as-you-go WAF 3.0 instance is automatically created.
    

### Procedure

1.  Log on to the [ALB console](https://slb.console.alibabacloud.com/alb).
    
2.  In the top navigation bar, select the region where the ALB instance is deployed.
    
3.  On the **Instances** page, find the instance and choose **![More](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9060061261/p271002.png)** > **Change Specification** in the **Actions** column.
    
4.  On the Application Load Balancer | Upgrade/Downgrade page, set **Edition** to **Standard** or **WAF Enabled**, review the Terms of Service, and click **Buy Now**.
    

### Verify the result

Return to the **Instances** page and confirm that the **edition** of the ALB instance is updated.

## Modify the maximum bandwidth

The maximum bandwidth of an Internet-facing ALB instance depends on how it is configured:

-   **Without Internet Shared Bandwidth:** The maximum bandwidth is the sum of the maximum bandwidths of the EIPs associated with each zone. For pay-by-data-transfer EIPs, this value is an upper limit for reference only and is not guaranteed.
    
-   **With Internet Shared Bandwidth:** The maximum bandwidth of the Internet Shared Bandwidth instance serves as the effective maximum bandwidth for the ALB instance.
    

To increase the bandwidth, associate an Internet Shared Bandwidth instance with the ALB instance, or modify the maximum bandwidth of an existing Internet Shared Bandwidth instance through the [Internet Shared Bandwidth console](https://vpc.console.alibabacloud.com/cbwp/cn-hangzhou/cbwps).

### Limits

-   The line types of the EIPs must match the line type of the Internet Shared Bandwidth instance.
    
-   Both subscription and pay-as-you-go Internet Shared Bandwidth instances are supported.
    

### Effective time

The association takes effect immediately. If network latency is high, wait a few minutes.

### Billing impact

You are charged for the Internet Shared Bandwidth instance. For more information, see [Billing overview](/help/en/internet-shared-bandwidth/product-overview/billing-overview/#concept-844578).

### Procedure

1.  Log on to the [ALB console](https://slb.console.alibabacloud.com/alb).
    
2.  In the top navigation bar, select the region where the ALB instance is deployed.
    
3.  On the **Instances** page, find the ALB instance and associate an Internet Shared Bandwidth instance by using one of the following methods:
    
    -   Choose **![More](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9060061261/p271002.png)** > **Associate with Internet Shared Bandwidth** in the **Actions** column, or click **Associate** in the **Internet Shared Bandwidth** column.
        
    -   Click the ID of the ALB instance. On the **Instance Details** tab, find the **Billing Information** section and click **Associate with Internet Shared Bandwidth**.
        
    
4.  In the **Associate with EIP Bandwidth Plan** dialog box, select an Internet Shared Bandwidth instance and click **OK**.
    
    **Note**
    
    If no Internet Shared Bandwidth instance is available, click **Purchase Internet Shared Bandwidth** in the drop-down list. For details, see [Create an Internet Shared Bandwidth instance](/help/en/internet-shared-bandwidth/user-guide/create-an-internet-shared-bandwidth-instance#task-hjr-jlk-z2b).
    

## API reference

**API**

**Description**

[UpdateLoadBalancerZones](/help/en/doc-detail/382326.html#doc-api-Alb-UpdateLoadBalancerZones)

Change the zones of an ALB instance.

[UpdateLoadBalancerEdition](/help/en/doc-detail/214386.html#doc-api-Alb-UpdateLoadBalancerEdition)

Change the edition of an ALB instance.

[StartShiftLoadBalancerZones](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-startshiftloadbalancerzones)

Remove a DNS record for an ALB instance.

[CancelShiftLoadBalancerZones](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-cancelshiftloadbalancerzones)

Restore a DNS record for an ALB instance.

[AttachCommonBandwidthPackageToLoadBalancer](/help/en/doc-detail/409274.html#doc-api-Alb-AttachCommonBandwidthPackageToLoadBalancer)

Associate an Internet Shared Bandwidth instance with an ALB instance.
