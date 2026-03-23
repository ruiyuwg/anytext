This topic answers frequently asked questions about NAT Gateway and helps you troubleshoot common issues.

## **Usage and configuration**

### **Instance configuration**

#### **Why can't I purchase a NAT gateway in some zones?**

NAT gateways are not deployed in some zones because of resource planning. You can call the [ListEnhancedNatGatewayAvailableZones](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-listenhanhcednatgatewayavailablezones-natgws) operation to query the zones where NAT gateways are available.

Although you cannot create a NAT gateway in every zone, a NAT gateway deployed in any available zone can provide Internet access for instances and resources across the entire VPC.

#### **Can I change the vSwitch and private IP address of a NAT gateway instance?**

No, you cannot. To change the vSwitch where the NAT gateway is deployed, you must create a new NAT gateway and modify the route entries.

#### **Can a NAT gateway process fragmented data packets?**

Yes, it can. It can process fragmented TCP, UDP, and ICMP data packets.

### **SNAT configuration**

#### **If the source CIDR blocks of multiple SNAT entries overlap, how are the priorities of the SNAT entries matched?**

The system determines the priority of SNAT entries based on the longest prefix match rule to provide Internet access.

-   SNAT entries for ECS instances: The subnet mask of the source CIDR block is `/32`. This is the longest mask and has the highest priority.
    
-   SNAT entries for other resources: The priority is determined by the length of the subnet mask of the source CIDR block. The longer the mask, the higher the priority.
    

#### **What is the idle timeout period for an SNAT connection on a NAT gateway?**

-   TCP: 900 seconds.
    
-   UDP: 60 seconds.
    

#### **Can an ECS instance use SNAT on an Internet NAT gateway to access a DNAT service on the same gateway?**

Yes. After you switch an Internet NAT gateway to **NAT mode**, an ECS instance can use the gateway's SNAT capabilities to access a DNAT service on the same gateway, provided both SNAT and DNAT entries are configured.

-   How do I check if a NAT gateway is in NAT mode?
    
    Call the [DescribeNatGateways](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-describenatgateways-natgws) operation. If the value of the `EipBindMode` parameter is `NAT`, the gateway is in NAT mode.
    
-   How do I switch to NAT mode?
    
    Call the [ModifyNatGatewayAttribute](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-modifynatgatewayattribute-natgws) operation and set the `EipBindMode` parameter to `NAT`.
    

### **DNAT configuration**

#### **If an ECS instance is associated with an EIP, can I create a DNAT entry for it?**

Yes, you can. However, external users cannot access the ECS instance through this DNAT entry. To allow access through the DNAT entry, you must first disassociate the EIP from the ECS instance.

### **EIP configuration**

#### **When creating a NAT entry, why can't I find an existing EIP in the public IP address list?**

This occurs because the EIP and the NAT gateway are in different regions. You must select an EIP in the same region as the NAT gateway or create a new EIP in the NAT gateway's region.

#### **Can a NAT gateway use the same EIP or NAT IP for both DNAT and SNAT entries?**

Yes, it can. However, if a DNAT entry is configured for any port, that EIP or NAT IP cannot be used to create other DNAT or SNAT entries.

#### **What are the differences between the two modes for associating EIPs with an Internet NAT gateway?**

By default, Internet NAT gateways created in the console are in **NAT Mode**. The **Multi-EIP-to-ENI Mode** can be enabled only by calling the [CreateNatGateway](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-createnatgateway-natgws) API operation and specifying the `EipBindMode` parameter.

-   To use the NAT gateway with an IPv4 gateway, you must use NAT mode.
    
-   For greater flexibility in managing EIPs, you can choose the multi-EIP-to-ENI mode.
    

**Association mode**

**NAT Mode**

**Multi-EIP-to-ENI Mode**

Switching the association mode

You cannot switch to the multi-EIP-to-ENI mode.

-   **Switch in the console**: For more information, see [Switch the mode of an Internet NAT gateway](/help/en/nat-gateway/user-guide/use-internet-nat-gateway-for-public-network-access#section-r8g-i35-jym).
    
-   **Switch using OpenAPI**: Call the [ModifyNatGatewayAttribute](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-modifynatgatewayattribute-natgws) operation.
    
    Set the `EipBindMode` parameter to `NAT`.
    
    -   If five or fewer EIPs are associated with the NAT gateway, you can switch the mode directly by calling the API operation.
        
    -   If more than five EIPs are associated with the NAT gateway, contact your account manager to request the switch.
        

**Note**

-   During the mode switch, network connections may experience transient interruptions that last for seconds. The duration of the interruptions increases with the number of EIPs. Switch the mode during off-peak hours.
    
-   Before you switch the mode, make sure that the vSwitch to which the NAT gateway belongs has a sufficient number of available IP addresses.
    

Does adding EIPs to an Internet NAT gateway consume available IP addresses in the NAT gateway's vSwitch?

1.  Each time you add an EIP, the vSwitch to which the NAT gateway belongs allocates a private IP address and associates it with the EIP.
    
2.  When an ECS instance uses an SNAT or DNAT entry for forwarding, data is first received by the private IP address associated with the EIP and then forwarded to the corresponding EIP.
    

1.  Adding an EIP does not consume available IP addresses in the vSwitch to which the NAT gateway belongs.
    
2.  When an ECS instance uses an SNAT or DNAT entry for forwarding, data is directly forwarded through the corresponding EIP.
    

[IPv4 gateway](/help/en/vpc/ipv4-gateway-overview) support

Supported.

Not supported.

Can an ECS instance use SNAT on an Internet NAT gateway to access a DNAT service on the same gateway?

Yes.

Access failed.

Creation method

-   Created by default in the console.
    
-   Call the [CreateNatGateway](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-createnatgateway-natgws) operation and set the `EipBindMode` parameter to `NAT`.
    

Call the [CreateNatGateway](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-createnatgateway-natgws) operation and set the `EipBindMode` parameter to `MULTI_BINDED`.

## **Troubleshooting network connectivity**

### Cannot access the Internet through SNAT

-   Check the default route configuration that points to the NAT gateway:
    
    On the details page of the Internet NAT gateway instance, check the ****VPC routes that point to the NAT gateway**** information to confirm that a route entry points to the Internet NAT gateway. If a route entry is missing, configure a route in the relevant route table that points to the Internet NAT gateway and uses `0.0.0.0/0` as the destination CIDR block.
    
-   Verify the SNAT rule configuration:
    
    -   On the **SNAT** tab on the NAT Gateway instance details page, confirm that the status of the SNAT entry is **Available**.
        
    -   Confirm that the Internet access source address is in the **Source CIDR Block**.
        
-   Troubleshoot non-NAT issues:
    
    -   Cross-border access: The access link may be unstable.
        
    -   Domain name access: Check whether the domain name resolution and ICP filing are normal.
        
    -   Access control: Check whether the peer has configured an access control policy or added the EIP associated with the instance to a whitelist.
        
-   Check whether an IPv4 gateway is configured: When [used with an IPv4 gateway](#cbcda01f4bqc3), make sure the NAT gateway is in NAT mode and the routes are correctly configured.
    

### **A new ECS instance cannot access the Internet through SNAT**

This issue occurs when an ECS instance in a newly created vSwitch within a VPC cannot access the Internet through SNAT, while ECS instances in other vSwitches can.

-   Confirm that the SNAT entry includes the CIDR block of the new vSwitch:
    
    NAT Gateway does not automatically configure SNAT entries for new vSwitches. On the **SNAT** tab of the instance details page, check whether the **Source CIDR Block** of an existing SNAT entry includes the CIDR block of the new vSwitch. If not, [manually configure an SNAT entry](/help/en/nat-gateway/user-guide/use-internet-nat-gateway-for-public-network-access#1aa4663ab0cvr).
    
-   If the new vSwitch is associated with a custom route table, confirm that a route entry is configured with the destination CIDR block set to `0.0.0.0/0` and the next hop set to the NAT gateway. You can [manually add the corresponding route entry](/help/en/vpc/network-traffic-management-using-custom-routing-tables#e56fc9c6d4tgb).
    

### **An ECS instance cannot access the Internet when multiple NAT gateways exist**

This issue occurs if the VPC uses only a system route table that has only one route entry with a destination CIDR block of `0.0.0.0/0` pointing to one of the NAT gateways. If the source CIDR block of the SNAT entry on that NAT gateway does not include the CIDR block of a specific vSwitch, the ECS instances in that vSwitch cannot access the Internet.

-   If you do not need multiple NAT gateways, delete the unnecessary ones and add an SNAT entry to the remaining NAT gateway that covers the vSwitch's CIDR block.
    
-   To use multiple NAT gateways, see [Deploy multiple Internet NAT gateways in the same VPC](/help/en/nat-gateway/use-cases/deploy-multiple-internet-nat-gateways-in-one-vpc#task-2020912) for configuration instructions.
    

### **Failed to access an FTP server using SNAT**

This issue may occur for the following reasons:

-   **The FTP mode is active**: A NAT gateway with configured SNAT entries supports only active outbound access. In FTP active mode, the data connection cannot be established because SNAT does not support active inbound access. Use FTP passive mode to connect to the FTP server.
    
-   Multiple EIPs are selected for the SNAT entry: The FTP control and data connections may use different EIPs after SNAT, which prevents normal FTP interaction. Enable the [EIP affinity](/help/en/nat-gateway/user-guide/use-internet-nat-gateway-for-public-network-access#668d2ede4dper) feature for the SNAT rule to ensure that connections from the same client always use the same EIP. Alternatively, you can configure a separate SNAT rule for the FTP client and associate a single EIP with it.
    

### **Cannot be accessed from the Internet after a DNAT entry is configured**

-   Check the default route configuration that points to the NAT gateway:
    
    When the instance configured in the DNAT entry sends a response message, it also requires a route to the NAT gateway. Confirm that a route with the destination CIDR block set to `0.0.0.0/0` and the next hop set to the NAT gateway is configured in the system route table or custom route table that you are using. You can [manually add the corresponding route entry](/help/en/vpc/network-traffic-management-using-custom-routing-tables#e56fc9c6d4tgb).
    
-   Verify the DNAT rule configuration:
    
    -   On the **DNAT** tab of the NAT Gateway instance details page, confirm that the status of the DNAT entry is **Available**.
        
    -   Confirm that parameters such as the port, protocol, and destination address are correctly configured in the DNAT rule.
        
-   Check the security group, firewall configuration, and service port status:
    
    -   On another ECS instance in the same VPC, run the `telnet <private IP address of the ECS instance> <private port>` command to confirm whether the private port of the ECS instance configured in the DNAT entry can be accessed.
        
        -   If the response is `unable to connect to remote host: Connection timed out`, the private port cannot be accessed from the private network and therefore cannot be accessed from the Internet.
            
        -   If the response is `Connected to <private IP address of the ECS instance>`, the private port can be accessed.
            
    -   If the private port can be accessed, confirm whether the security group rules for the ECS instance allow Internet access to the corresponding port and whether the firewall has opened the corresponding port.
        
-   Troubleshoot domain name resolution issues: If you cannot access the service through a domain name but can access it directly through the EIP, check the domain name resolution settings and ICP filing status.
    
-   Check whether an IPv4 gateway is configured: When [used with an IPv4 gateway](#cbcda01f4bqc3), make sure the NAT gateway is in NAT mode and the routes are correctly configured.
    
-   Verify network interface consistency: If the ECS instance has multiple network interface cards, check whether the inbound and outbound network interfaces are the same. For more information, see [Centralized egress](/help/en/nat-gateway/use-cases/unified-public-network-export-ips).
    

## **Using NAT Gateway with an IPv4 gateway**

### Differences between an IPv4 gateway and a NAT gateway

IPv4 gateways and Internet NAT gateways have distinct features. For more information about how these network components relate to each other, see [Internet access](/help/en/vpc/public-network-access/).

**Network component**

**IPv4 gateway**

**Internet NAT gateway**

Function

A public IPv4 traffic control component at the border of a VPC

A NAT device inside a VPC

Scenarios

Centrally control Internet access traffic

Unify the egress for Internet traffic

Provides Internet access

No. It only controls Internet traffic.

Provides Internet access by attaching EIPs

(Internet access is provided by EIPs. The NAT gateway itself does not provide Internet access.)

After you create an IPv4 gateway, vSwitches are classified into the following types:

-   Public vSwitch: The route table associated with the vSwitch contains a route where the **Destination CIDR Block** is `0.0.0.0/0` and the **Next Hop** is the IPv4 gateway. Resources in this vSwitch can access the Internet if they have a public IP address.
    
-   Private vSwitch: The route table associated with the vSwitch does not contain a route that points to the IPv4 gateway. Resources in this vSwitch cannot access the Internet directly, even if they have a public IP address.
    

When using an IPv4 gateway with an Internet NAT gateway, you must deploy the Internet NAT gateway on a public vSwitch. For ECS instances on a private vSwitch, you must configure a route that points to the Internet NAT gateway. This configuration ensures that Internet-bound traffic is routed to the Internet NAT gateway and then to the Internet using the public IP address of the Internet NAT gateway. Note the following:

-   Make sure that the `EipBindMode` of the Internet NAT gateway is set to `NAT` to ensure compatibility with the IPv4 gateway.
    
    -   An Internet NAT gateway created in the console is in `NAT` mode by default. When you call the [CreateNatGateway](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-createnatgateway-natgws) operation, you must set `EipBindMode` to `NAT`. After the Internet NAT gateway is created, you can call the [ModifyNatGatewayAttribute](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-modifynatgatewayattribute-natgws) operation to change the `EipBindMode`.
        
    -   If you have an existing Internet NAT gateway with the `EipBindMode` parameter set to the `MULTI_BINDED` mode, you cannot create an IPv4 gateway because this mode is incompatible with IPv4 gateways.
        
    -   If an IPv4 gateway already exists, you cannot attach EIPs when you call [CreateNatGateway](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-createnatgateway-natgws) to create an Internet NAT gateway with `EipBindMode` set to `MULTI_BINDED`.
        
-   To prevent resources in a private vSwitch from losing Internet access after you activate the IPv4 gateway, ensure that you complete the route configuration before activation.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8994554671/CAEQSRiBgMCt693LwxkiIDYzNjc5YjBiMDI4NjQ1NTc4Y2VjNzVjZjBlY2MwYzUw5415840_20250701223050.768.svg)

### **Impacts of switching an Internet NAT gateway to NAT mode**

After the switch, the Internet NAT gateway can be used with an IPv4 gateway. If an instance has both SNAT and DNAT entries, it can use its SNAT capabilities to access the DNAT service on the same Internet NAT gateway.

-   Billing impact: The switch is free of charge and does not incur additional fees.
    
-   Service impact: During the switch, network connections may experience transient interruptions that last for seconds. The number of interruptions depends on the number of associated EIPs.
    
-   Configuration impact:
    
    -   The public egress IP address and original configurations are not changed.
        
    -   Associating an EIP consumes one private IP address from the vSwitch where the NAT gateway is located. Make sure the vSwitch has enough available private IP addresses.
        
    -   After the switch, you cannot disable the IPv4 gateway compatibility mode.
        

## **Performance and monitoring**

### **Connection timeouts or slow download speeds when a client accesses an Internet service**

-   Monitor traffic data
    
    -   [View monitoring data of EIPs associated with a NAT gateway](/help/en/nat-gateway/user-guide/view-monitoring-data#67c3239cdfk3m) to check for packet loss caused by bandwidth limits. If packet loss occurs, [upgrade the bandwidth of the EIP](/help/en/eip/product-overview/upgrades-and-downgrades).
        
    -   If you have many ECS instances and it is difficult to troubleshoot unusual traffic on them, you can use [NAT gateway traffic monitoring](/help/en/nat-gateway/user-guide/view-monitoring-data#0f4b74f3e6cq7) to identify the source of the unusual traffic.
        
-   Optimizing the Linux kernel
    
    -   Cause: The Linux kernel's implementation can cause it to drop TCP connection requests when multiple Linux-based ECS instances concurrently access a Linux server through a NAT gateway. This may result in connection timeouts or failures.
        
    -   Solution: You can disable either the `net.ipv4.tcp_tw_recycle` option on the server or the `net.ipv4.tcp_timestamps` option on the client.
        

### **Meaning of port allocation failures for a NAT gateway**

Meaning: When a client accesses a destination address through a NAT gateway, this metric indicates the number of connections that are dropped because the allocation of TCP or UDP ports failed. This failure is caused by an excessively high number of concurrent connections.

Cause: A single EIP or NAT IP can provide a limited number of ports for SNAT. If the number of sessions that access the same destination address is too large and the number of EIPs or NAT IPs used by the configured SNAT rule is too small, port allocation fails.

Solution: If the number of port allocation failures continues to increase, add more EIPs or NAT IPs to the SNAT rule.

## **Billing and quotas**

### **Sudden increase in NAT Gateway fees**

NAT Gateway is a pay-as-you-go product. An increase in fees usually indicates that more traffic is being processed through the NAT gateway. You can troubleshoot this issue as follows:

-   Check monitoring data: In the CloudMonitor console, view metrics such as inbound and outbound traffic and the number of connections for the NAT gateway instance to identify business peaks.
    
-   Check billing details: Use [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) to view the hourly billing details of the NAT gateway to pinpoint when the fees increased.
    
-   Enable traffic logs: Enable traffic logs for the NAT gateway, such as [session logs](/help/en/nat-gateway/user-guide/session-log-overview/#t2714254.html) and [flow logs](/help/en/nat-gateway/use-cases/locate-high-traffic-ecs-instances-that-use-internet-nat-gateways), and deliver the logs to Simple Log Service for analysis to accurately locate the traffic source.
    

### **Unsubscribing from a NAT Gateway resource plan**

NAT Gateway resource plans support **five-day unconditional refunds** and **pro-rated refunds**. For more information, see [Refund policy for international site (alibabacloud.com)](/help/en/user-center/refund-rules).

### **Billing continues after a NAT gateway is deleted**

If you continue to receive bills after you delete a NAT gateway instance, this is caused by a **billing delay** in the system. The bills you receive are for the resources that were used before the instance was deleted. You can view the specific usage period in your billing details to confirm the billing cycle.

### **Number of NAT gateways that can be created per account**

There is no limit on the number of NAT gateways that you can create per Alibaba Cloud account.
