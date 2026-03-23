After creating a Network Load Balancer (NLB) instance, you can update its zones, manage DNS records for zone status changes, and increase the maximum bandwidth for Internet-facing instances.

## Update zones

Update zones when the current zone deployment or associated elastic IP addresses (EIPs) no longer match your traffic requirements.

### **Limitations**

-   For NLB instances deployed in two or fewer zones, the number of zones cannot be reduced.
    
-   For Internet-facing NLB instances:
    
    -   EIPs associated with different zones must be of the same type.
        
    -   Only pay-as-you-go (pay-by-data-transfer) EIPs that are not added to any Internet Shared Bandwidth can be associated. After associating these EIPs with the NLB instance, you can then associate the NLB instance with an Internet Shared Bandwidth instance in the NLB console to save costs.
        
    -   Subscription or pay-as-you-go (pay-by-bandwidth) EIPs are not supported.
        
    -   When the NLB instance is released, EIPs automatically assigned by the system are released with it. EIPs that you created separately are retained.
        

### **Billing impact**

Zone updates for an Internet-facing NLB instance may change the associated EIPs. You are charged for the EIPs in use. For details, see [EIP billing overview](/help/en/eip/billing-overview#concept-645525).

### **Effective time**

New zone settings take effect immediately. If the network latency is high, wait a few minutes for propagation.

### **Procedure**

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
    
2.  In the top navigation bar, select the region.
    
3.  On the **Instances** page, locate your NLB instance and use one of the following paths:
    
    -   In the **Actions** column, choose **![更多操作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9060061261/p271002.png)** > **Modify Zone/Subnet**.
        
    -   Click the NLB instance ID. On the **Instance Details** tab, click **Modify Zone/Subnet**.
        
4.  In the **Modify Zone/Subnet** dialog box:
    
    -   **To enable a zone**: Select its check box, select a vSwitch, and for Internet-facing instances, assign an EIP. Click **OK**.
        
        **Note**
        
        If you select **Purchase EIP**, a pay-as-you-go (pay-by-data-transfer) BGP (Multi-ISP) EIP with basic DDoS protection is created by default.
        
    -   **To disable a zone**: Clear its check box, then click **OK**.
        

## Change the status of zones

Manage DNS records for individual zones on your NLB instance to simulate zone-disaster recovery scenarios and verify high availability.

### **Zone statuses**

**Status**

**Description**

**Available operations**

**Enabled**

The NLB instance uses the virtual IP address (VIP) of the zone to forward traffic.

Remove DNS record

**Note**

You cannot remove a DNS record or stop an NLB instance if the instance is **enabled** in only one zone.

**DNS Removed**

The DNS record created from the VIP of the zone is removed.

Restore DNS record

### **What happens when a DNS record is removed**

-   **Traffic continues on direct VIP access.** Traffic that reaches the zone through the VIP continues to be forwarded. Load Balancer Capacity Unit (LCU) consumption is still calculated.
    
-   **The A record is deleted.** The A record that resolves the NLB instance domain name to the VIP of the zone is deleted.
    
-   **Health checks stop.** The health check on the VIP of the zone stops.
    
-   **Scope is limited to the current instance.** Other NLB instances in the zone are not affected.
    

### **What happens when a DNS record is restored**

-   An A record that resolves the NLB instance domain name to the VIP of the zone is added.
    
-   Traffic destined for the NLB domain name is forwarded through the VIP of the zone.
    
-   The health check on the VIP restarts.
    

### **Effective time**

DNS record removal and restoration take effect immediately. If the network latency is high, wait a few minutes for propagation.

### **Billing impact**

No billing changes occur when you remove or restore DNS records.

**Important**

Although no additional charges are incurred from the DNS operation itself, traffic that still reaches the zone through the VIP continues to generate LCU consumption charges.

### **Procedure**

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
    
2.  In the top navigation bar, select the region.
    
3.  On the **Instances** page, click the ID of the NLB instance.
    
4.  On the **Instance Details** tab, in the **Zone** section, perform one of the following operations:
    
    -   **Remove a DNS record**
        
        Find the target zone, click **Remove DNS** in the **Actions** column, confirm the impact in the dialog box, and then click **Remove DNS**.
        
        After removal, the zone status changes to **DNS Removed** and the health check on the VIP stops.
        
    -   **Restore a DNS record**
        
        For a zone with **DNS Removed** status, click **Resume DNS** in the **Actions** column, confirm the impact in the dialog box, and then click **Resume DNS**.
        
        After restoration, the zone status changes to **Enabled**.
        

## Increase the maximum bandwidth for an Internet-facing NLB instance

An Internet-facing NLB instance uses its associated EIPs to access the Internet. The way bandwidth is calculated depends on whether the instance is associated with an Internet Shared Bandwidth instance.

### **How maximum bandwidth is determined**

**Scenario**

**Maximum bandwidth**

**Bandwidth guarantee**

Without Internet Shared Bandwidth

Per zone: the maximum bandwidth of the EIP assigned to that zone.

The maximum bandwidth for an EIP is a reference value, not a guaranteed service level agreement (SLA). The sum of all EIP bandwidths is also a reference value, not a guaranteed SLA.

With Internet Shared Bandwidth

All EIPs share bandwidth resources. The per-EIP bandwidth limit no longer applies. The maximum bandwidth equals the bandwidth of the Internet Shared Bandwidth instance.

The maximum bandwidth for an Internet Shared Bandwidth instance is also a reference value, not a guaranteed SLA.

**Important**

For example, an NLB instance deployed across three zones uses one EIP per zone, each configured at 200 Mbit/s. If infrastructure resources are insufficient, the actual maximum bandwidth for each EIP may be less than 200 Mbit/s, and the overall maximum bandwidth for the NLB instance may not reach 600 Mbit/s.

### **How to increase the maximum bandwidth**

1.  If the maximum bandwidth for an EIP is below the supported maximum value of 200 Mbit/s, upgrade the EIP to increase its maximum bandwidth.
    
2.  If the maximum bandwidth is still insufficient, use one of the following methods:
    
    **Method**
    
    **Description**
    
    **Best for**
    
    Add more zones
    
    Within regions that support multi-zone deployment, add zones to the NLB instance to use additional EIPs. This increases the overall maximum bandwidth.
    
    Saving on Internet data transfer costs with fluctuating traffic patterns
    
    Associate with Internet Shared Bandwidth
    
    Associate the NLB instance with an Internet Shared Bandwidth instance to exceed the per-EIP bandwidth cap. An NLB instance can use only one EIP per zone, so the theoretical maximum without shared bandwidth is: `Maximum number of zones x 200 Mbit/s (maximum bandwidth per EIP)`. If your workloads require more than this theoretical maximum, you can use Internet Shared Bandwidth (additional charges apply).
    
    Workloads that require bandwidth beyond the theoretical maximum
    

### **Possible causes of packet loss**

**Cause**

**Details**

Different maximum bandwidths per EIP

NLB distributes traffic across EIPs using round-robin DNS for zone-disaster recovery. If EIPs in different zones have different maximum bandwidths, packet loss can occur when traffic shifts from a high-bandwidth EIP to a low-bandwidth EIP. For example, with three EIPs at 200, 200, and 100 Mbit/s, when total traffic exceeds 300 Mbit/s, each EIP receives more than 100 Mbit/s. The 100 Mbit/s EIP drops packets.

Uneven traffic distribution

If a client accesses a specific EIP directly instead of the NLB domain name, that EIP may receive disproportionate traffic, causing packet loss even when all EIPs have the same bandwidth configuration.

Insufficient backend capacity

Even with adequate EIP or Internet Shared Bandwidth resources, packet loss occurs if backend servers cannot handle the connection volume. Indicators include high CPU usage, response delays, and TCP retransmission.

### **Configuration recommendations**

-   Set the maximum bandwidth for each EIP or the associated Internet Shared Bandwidth instance slightly above your actual traffic requirements.
    
-   Without Internet Shared Bandwidth:
    
    -   Set all EIPs for the NLB instance to the same maximum bandwidth. This prevents service disruption caused by bandwidth differences when failover occurs between zones.
        
    -   Resolve the domain name of your NLB instance (not a specific EIP) to your service domain name. This avoids uneven traffic distribution.
        

## API references

-   [UpdateLoadBalancerZones](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-updateloadbalancerzones): Update zones and edit zone attributes for an NLB instance.
    
-   [AttachCommonBandwidthPackageToLoadBalancer](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-attachcommonbandwidthpackagetoloadbalancer): Associate an Internet Shared Bandwidth instance with an NLB instance.
    
-   [DetachCommonBandwidthPackageFromLoadBalancer](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-detachcommonbandwidthpackagefromloadbalancer): Disassociate an Internet Shared Bandwidth instance from an NLB instance.
