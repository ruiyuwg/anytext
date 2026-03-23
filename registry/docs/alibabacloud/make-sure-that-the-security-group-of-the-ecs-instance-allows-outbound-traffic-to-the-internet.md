An Internet NAT gateway is a Network Address Translation (NAT) service that improves security by translating and hiding the private IPs of Alibaba Cloud services, preventing the IPs from being exposed to the Internet.

After you create an Internet NAT gateway and associate an Elastic IP Address (EIP) with it, perform the following operations:

-   Configure Source Network Address Translation (SNAT) to let Elastic Compute Service (ECS) instances share EIPs for Internet access, conserving public IPs.
    
-   Configure Destination Network Address Translation (DNAT) to let ECS instances provide services over the Internet through port or IP mapping.
    

**SNAT - Access the Internet**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0165958571/CAEQTBiBgMDw2reFyxkiIDgwNzhlNmMzZjQwMTQ4YWI4YWNjNWNhNjY1NmZmODEx3963382_20230830144006.372.svg)

**DNAT - Provide services over the Internet**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0165958571/CAEQTBiBgICo8LaFyxkiIGMzYzQ3NGU2OTIxZDQ5OTBhNzBkYTBhMmMyZTlmODJi3963382_20230830144006.372.svg)

## **Use SNAT to access the Internet**

Allocating an EIP to each ECS instance for Internet access can be expensive. With SNAT, you can let ECS instances that require Internet access share the same EIP. You can lower expenses and enhance security by masking the IP addresses of instances and restricting incoming traffic.

### **How it works**

The following example shows how an ECS instance with the private IP of 192.168.1.100 accesses the Internet.

1.  Route forwarding: Data packets are sent to the Internet NAT gateway based on the VPC route table.
    
2.  SNAT: Upon receiving packets, the NAT gateway converts the source IP address 192.168.1.100 to the associated EIP as defined by SNAT rules. It logs both the original five-tuple (protocol, source IP, source port, destination IP, destination port) and the translated five-tuple (protocol, EIP, external source port, destination IP, destination port) for tracking purposes.
    
3.  Access Internet: The data packet with the translated IP is sent to the Internet, with the EIP shown as the source instead of the ECS instance’s internal IP.
    

When the target server on the Internet returns a response packet, the NAT gateway uses the session mapping table to restore the original private IP and forwards the packet back to the ECS instance.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0165958571/CAEQTBiBgMC4.M7uyhkiIDkzZTA4Zjk4ZjE4ZjQ0ZTY5YzY0ZWJiMWVkNmFmZGM45700065_20250908150924.313.svg)

#### **SNAT rule precedence**

Whether SNAT takes effect depends on the following rules:

-   Ensure that outbound traffic from the VPC to the Internet is properly routed to the NAT gateway. The route entry to destination CIDR should point to the Internet NAT gateway.
    
    -   Automatic: If no `0.0.0.0/0` route exists in the VPC route table, the system automatically adds this route when you create the first Internet NAT gateway.
        
    -   Manual: If you use a custom route table, or already have a `0.0.0.0/0` route in the system route table, manually add or modify a custom route entry. Follow the principle of least privilege and set the destination CIDR to the specific public CIDR that you need to access.
        
    -   [Route priority](/help/en/vpc/vpc-route-table/#b591890db5qjy): If there are overlapping route entries, traffic is forwarded based on the longest prefix match.
        

-   Egress IP priority: Static public IP or EIPs associated with an instance > DNAT IP mappings (Any port) > EIPs in an SNAT entry. See [Centralized egress IP](/help/en/nat-gateway/use-cases/unified-public-network-export-ips) to change your network architecture.
    
-   SNAT priority: If the source CIDR blocks overlap, the longest mask take priority. For example, an SNAT of an ECS instance has a source CIDR block with a `/32` mask. This is the longest mask and has the highest priority.
    

### **1\. Create an Internet NAT gateway and attach an EIP**

> An Internet NAT gateway must have an EIP associated with it to function. You can associate up to 20 EIPs with an Internet NAT gateway. To increase this quota, go to the [Quota Center](https://vpc.console.alibabacloud.com/quota) page.

> Starting from September 19, 2022, binding an EIP with a newly created Internet NAT gateway will use up one private IP from the gateway's vSwitch. This does not affect existing NAT gateways. Make sure that the vSwitch has enough available private IPs.

#### **Console**

Go to the [NAT Gateway - Internet NAT Gateway](https://vpc.console.alibabacloud.com/buy/nat?regionId=cn-hangzhou) purchase page.

-   **Billing Method**: Pay-as-you-go.
    
-   **Region**: Select the region where you want to create the Internet NAT gateway.
    
-   **Network and Zone**: Select the VPC and vSwitch for the Internet NAT gateway. You cannot change these settings after the gateway is created.
    
-   **EIP**: Select an option based on whether you have already created an EIP.
    
    -   **Select EIP**: Select an EIP that is not associated with an instance.
        
    -   **Purchase EIP**: Select this option if you do not have any available EIPs. By default, a pay-by-traffic **BGP (Multi-ISP)** EIP is created. Select the **Maximum Bandwidth** as needed.
        
        > To attach an EIP of BGP (Multi-ISP) Pro or an EIP with a different billing method, [apply for an EIP](/help/en/eip/apply-for-new-eips), and select **Select EIP** during creation.
        
    -   **Configure Later**: The NAT gateway will not have Internet access. Manually associate an EIP later.
        
        After creation, find the **EIP** column for the target Internet NAT gateway and click **Associate Now**. You can select an existing EIP, or purchase and bind a new one.
        

#### **API**

-   Call [CreateNatGateway](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-createnatgateway-natgws#doc-api-Vpc-CreateNatGateway) to create an Internet NAT gateway.
    
-   Call [ModifyNatGatewayAttribute](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-modifynatgatewayattribute-natgws#doc-api-Vpc-ModifyNatGatewayAttribute) to modify the configuration of an Internet NAT gateway.
    
-   Call [AssociateEipAddress](/help/en/vpc/developer-reference/api-vpc-2016-04-28-associateeipaddress#doc-api-Vpc-AssociateEipAddress) to associate an EIP.
    

### **2\. Configure an SNAT entry**

#### **Console**

Go to the [NAT Gateway](https://vpc.console.alibabacloud.com/nat/cn-hangzhou/nats) page. Click **Configure SNAT** in the **Actions** column of the target instance, and click **Create SNAT Entry**.

-   **SNAT Entry**: The scope of the SNAT rule. Choose one of the following scopes:
    
    -   **Specify VPC**: Grants Internet access to all ECS instances in the entire VPC through the SNAT rule.
        
        -   Best for: Simple setups where broad control is sufficient.
            
        -   Note: The least granular option.
            
    -   **Specify vSwitch**: Grants Internet access only to ECS instances within the selected vSwitches.
        
        -   Best for: Environments where vSwitches are used to separate services for stricter access control.
            
        -   Note_:_ If you select multiple vSwitches, a separate SNAT entry is created for each, all using the same EIP.
            
    -   **Specify ECS Instance/ENI**: Grants Internet access only to selected ECS instances or Elastic Network Interfaces (ENIs).
        
        -   Best for: Scenarios requiring precise access control.
            
        -   Note: Configuration may be time-consuming for multiple instances.
            
    -   **Specify Custom CIDR Block**: Grants Internet access to a specific CIDR block.
        
        -   Best for: Complex network designs.
            
-   **Select EIP**: In the drop-down list, select an EIP.
    
    -   Choose an EIP: If no EIPs are available, click **Purchase and Associate EIP** in the drop-down list and follow the prompts to buy and bind a new EIP.
        
    -   Choose multiple EIPs: Select multiple EIPs for the SNAT rule. Connection traffic is distributed across the selected EIPs using a hash algorithm. Because traffic patterns vary, the actual traffic may not be evenly spread across the EIPs. To avoid disruptions when one EIP hits its bandwidth limit, we recommend adding all selected EIPs to an Internet Shared Bandwidth instance.
        
-   **EIP Affinity**:
    
    -   Disabled: When you select multiple EIPs, a private IP address that accesses a destination IP address may use different EIPs.
        
    -   Enabled: The same EIP is always used for that connection. If too many concurrent connections are made to a single destination, port exhaustion can occur and allocation may fail. You must monitor the [failed port allocations](/help/en/nat-gateway/user-guide/view-monitoring-data#17ad1a6e34mm1).
        

> After the entry is created, click **Edit** in the **Actions** column to modify the EIP and EIP affinity settings.

#### **API**

-   Call [CreateSnatEntry](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-createsnatentry-natgws) to create an SNAT entry.
    
-   Call [ModifySnatEntry](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-modifysnatentry-natgws) to modify the specified SNAT entry.
    

### **3\. Configure routes**

Configure routes to ensure that traffic from ECS instances to the Internet is correctly routed to the NAT gateway.

#### **Console**

Go to the [VPC Console - Route Tables](https://vpc.console.alibabacloud.com/vpc/cn-hangzhou/route-tables) page. In the top navigation bar, select the region where the Internet NAT gateway is deployed. Find the route table that is associated with the vSwitch where the ECS instance is located. Click its ID to open the details page. Choose either manual or automatic configuration:

-   If you are creating the first Internet NAT gateway in this VPC and the vSwitch for your ECS instance is linked to the system route table, the system will automatically add a route entry with destination `0.0.0.0/0` and the NAT gateway as the next hop. No manual operation is required in this case.
    
-   If a `0.0.0.0/0` route already exists in the VPC, or if the vSwitch is associated with a custom route table, manually add a route to the route table. Set the destination CIDR block to the specific public CIDR block you need to access, and set the NAT gateway as the next hop.
    

#### **API**

-   Call [CreateRouteEntry](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createrouteentry) to add a single route entry
    
-   Call [ModifyRouteEntry](/help/en/vpc/developer-reference/api-vpc-2016-04-28-modifyrouteentry) to modify the next hop of a route entry.
    

#### **Verify network connectivity**

Log on to the ECS instance and run the following commands.

```
# Make sure that the security group of the ECS instance allows outbound traffic to the internet.
# Test connectivity to the Internet.
ping www.aliyun.com

# View the current egress public IP address. It should be the EIP attached to the NAT gateway.
curl ifconfig.me
```

## **Use DNAT to provide services over the internet**

If an ECS instance needs to provide web services to the Internet, assigning an EIP exposes all of its ports and increases security risks. Instead, use the DNAT feature of an Internet NAT gateway to forward only specific ports or all traffic from the NAT gateway's EIP to the ECS instance. The private IP address remains hidden. Before you begin, ensure that the ECS instance does not have an EIP attached.

### **How it works**

The following example shows how an ECS instance with the private IP address 192.168.1.100 provides services to the Internet.

1.  User request: A user on the Internet sends a request to the EIP associated with the Internet NAT gateway.
    
2.  DNAT translation: The Internet NAT gateway receives the packet and, using the DNAT rule, translates the destination EIP to the private IP of the ECS instance. It also records the address mapping.
    
3.  Packet forwarding: The translated packet is forwarded to the ECS instance.
    
4.  Response: When the ECS instance sends a response, the packet is routed back to the Internet NAT gateway. The gateway translates the source IP from the private IP back to the EIP using its session mapping table, then sends the packet to the user on the Internet.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0165958571/CAEQTBiBgMDHmuXuyhkiIGNiNmE0M2ZhNjkwOTRiZGFiODFjODE1OGUzODBlNDE05700065_20250908150924.313.svg)

### **Configure a DNAT entry**

> This section describes only how to configure DNAT entries. For details on how to create a NAT gateway, associate an EIP, and configure routing, see [Enable a server to access the Internet](#8ca4b0b781hl3).

#### **Console**

1.  Go to the [Internet NAT Gateway](https://vpc.console.alibabacloud.com/nat/cn-hangzhou/nats) page. In the top menu bar, select the region of the Internet NAT gateway.
    
2.  Click **Configure DNAT** in the **Actions** column of the Internet NAT gateway, and click **Create DNAT Entry**.
    
    -   **Select EIP**: Choose the EIP that internet users will access. You can use the same EIP for both DNAT and SNAT entries.
        
    -   **Select Private IP Address**: Select the private IP of the backend server that provides the service. You can select an ECS instance or ENI, or enter the IP manually.
        
    -   **Port Settings**: Configure the DNAT mapping.
        
        -   **Any Port**: IP mapping. All requests to this EIP are forwarded to the destination ECS instance, occupying all ports.
            
            -   The ECS instance can use this EIP to access the Internet. This EIP cannot be used for other DNAT or SNAT entries concurrently.
                
            -   If both DNAT IP mapping and SNAT entry are configured for an Internet NAT gateway, traffic from the ECS instance uses the EIP assigned to DNAT IP mapping first.
                
        -   **Specific Port**: Port mapping. Only requests to the EIP on a port (or port range) and protocol are forwarded to the configured port on the ECS instance. Configure the **Public Port** (external) and **Private Port** (internal), as well as **Protocol Type**.
            
            -   Ports must be in the range 1 to 65535. For port ranges, use a forward slash (/), for example, `10/20`. Public and private port settings must be consistent. Both should be single ports or port ranges of the same length. For example, set **Public Port** to 10/20 and **Private Port** to 80/90.
                
            -   If the selected EIP is already used in an SNAT entry and you need to set a public port greater than `1024`, you must click **Remove Port Limits**. This is because the default SNAT port range is 1025 to 65535.
                
    
    **Important**
    
    Port override may cause temporary disruptions to active SNAT sessions. Connections will recover after being re-established. Proceed with caution.
    
    > After the entry is created, you can click **Edit** in the **Actions** column for the entry to modify the EIP, private IP, and port settings.
    

#### **API**

-   Call [CreateForwardEntry](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-createforwardentry-natgws) to create a DNAT entry.
    
-   Call [ModifyForwardEntry](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-modifyforwardentry-natgws) to modify the specified DNAT entry.
    

## **Remove resources**

You will be billed for an Internet NAT gateway from the time it is created until it is released, including instance fees and capacity unit (CU) charges for processed traffic. To avoid unwanted costs, delete resources when they are no longer needed. Follow these steps:

### **Console**

1.  Delete entries: On the **SNAT** and **DNAT** tabs of the instance details page, delete the entries.
    
2.  Detach and release the EIP: On the **Associated EIP** tab, detach the EIP. You are still charged for an EIP that is only detached but not released. To stop billing, you must release the EIP on the [EIP](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips) console.
    
    If an entry is not deleted, you can select **Force Unbind NAT**.
    
3.  To delete an Internet NAT gateway, click **![More actions](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3400449261/p103337.png)** > **Delete** in the **Actions** column of the instance.
    
    If you have not detached EIPs or deleted route entries, select **Force Delete (Delete the NAT gateway and associated SNAT/DNAT entries)**. The system then deletes the instance and its associated resources.
    
    You can enable release protection to prevent accidental deletion. Before deletion, you must disable release protection.
    

### **API**

1.  Call [DeleteSnatEntry](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-deletesnatentry-natgws) and [DeleteForwardEntry](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-deleteforwardentry-natgws) to delete the SNAT entry and the DNAT entry, respectively.
    
2.  Call [UnassociateEipAddress](/help/en/vpc/developer-reference/api-vpc-2016-04-28-unassociateeipaddress#doc-api-Vpc-UnassociateEipAddress) to detach the EIP.
    
3.  Call [DeleteNatGateway](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-deletenatgateway-natgws#doc-api-Vpc-DeleteNatGateway) to delete the Internet NAT gateway.
    

## **Go live**

### **Best practices**

-   **Network planning**: Create a dedicated vSwitch for the Internet NAT gateway and reserve enough private IPs. This prevents IP exhaustion when associating multiple EIPs with the gateway.
    
-   **Fine-grained control**: Configure SNAT entries at the vSwitch or ECS instance level. Follow the principle of least privilege by granting Internet access only to resources that require it.
    

### **Disaster recovery strategies**

-   **High availability and disaster recovery**: Internet NAT gateways support disaster recovery across a primary and backup zone, with the backup being selected by Alibaba Cloud. Failover between zones may interrupt service for up to 10 minutes. For critical applications, deploy NAT gateways in different zones and implement traffic rerouting and failover at the application layer.
    
-   **EIP redundancy**: Associate multiple EIPs with your SNAT entry. If one EIP becomes unavailable due to attack or failure, outbound traffic will automatically switch to other available EIPs.
    

### **Risk prevention**

-   **Security group**: The Internet NAT gateway performs address translation, but backend ECS security still relies on properly configured security groups and network ACLs. Apply strict inbound rules and only open necessary ports to minimize exposure.
    
-   **Monitoring and alerts**: Set up alerts for key NAT gateway metrics, such as concurrent connections and inbound/outbound bandwidth. Monitor these metrics to ensure timely resource scaling before hitting capacity limits.
    
-   **Connection limits**: If your services require many connections to a single public service, such as a payment gateway, outbound connections per SNAT entry are limited to N × 55,000. N is the number of EIPs configured. Plan for a sufficient EIPs and monitor the **ErrorPortAllocationCount** metric.
    
-   **ICMP echo reply**: This feature is enabled by default, allowing the NAT gateway to reply to ping commands. This only confirms NAT gateway health, not backend server status. If you require backend monitoring, disable **ICMP echo reply** on the details page.
    
    -   ICMP ping requests are forwarded to the backend server only when DNAT is configured for **Any Port**.
        
    -   For **Specific Port** mapping, ping probes will fail. Use `telnet <EIP> <Public Port>` to probe the mapped service port.
        

## **FAQ**

### **Why can't I access the Internet after I configure SNAT?**

Follow these steps to troubleshoot:

1.  [Route configuration](#1d450970e7amg): On the details page of the Internet NAT gateway, view **VPC routes that point to the NAT gateway** and confirm that a route entry exists that points to the Internet NAT gateway.
    
2.  SNAT entry configuration: On the **SNAT** tab of the Internet NAT gateway, confirm that the status of the SNAT entry is **Active**. The source address used to access the internet is within the specified **Source CIDR Block**.
    
3.  Access control: Check whether the public endpoint you are trying to access has an access control policy configured, or if the associated EIP has been added to a whitelist.
    
4.  Check if an IPv4 gateway is configured: When [used with an IPv4 gateway](/help/en/nat-gateway/support/nat-gateway-faq/#cbcda01f4bqc3), ensure that the NAT gateway is in NAT mode and that the routing is configured correctly.
    

### **Why does the Internet access time out or run slow?**

This is usually caused by the following reasons:

-   Insufficient bandwidth: [View monitoring data for associated EIPs](/help/en/nat-gateway/user-guide/view-monitoring-data#67c3239cdfk3m) and check the bandwidth usage. If the usage is close to 100%, increase the bandwidth or add more EIPs and associate them with an Internet Shared Bandwidth instance.
    
-   Connection limit exceeded: When concurrent connections to one destination exceed the limit, the system drops connections due to failed port allocation. View the [ErrorPortAllocationCount](/help/en/nat-gateway/user-guide/view-monitoring-data#17ad1a6e34mm1) metric. If this value increases, add more EIPs to the SNAT.
    
-   When concurrent connections to one destination exceed the limit, the system drops connections due to failed port allocation. Keep an eye on the ErrorPortAllocationCount metric. If it goes up, add more EIPs to your SNAT configuration.
    

## **More information**

### **Billing**

Internet NAT gateways incur [instance fees and capacity unit (CU) fees](/help/en/nat-gateway/nat-gateway-billing#902cb3fe942hs). Associated EIPs are [billed separately](/help/en/eip/billing-overview).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0165958571/CAEQTBiBgIC3w4OFyxkiIGE1ODM3NDUzZTI5ODRiNWNhNWJmMDNlN2YxMGE5YzFi4729461_20241029092552.793.svg)

### **Quotas**

**Quota Name**

**Description**

**Default Limit**

**Increase Quota**

natgw\_quota\_nat\_num\_per\_vpc

Number of NAT gateways that can be created in a VPC

5

Go to [Quota Management](https://vpc.console.alibabacloud.com/quota) or [Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=peer) to request a quota increase.

natgw\_quota\_nat\_ip\_num\_per\_vpc\_nat

Number of EIPs that can be attached to each NAT gateway

20

natgw\_quota\_snat\_entry\_num

Number of SNAT entries that can be created for each NAT gateway

40

natgw\_quota\_dnat\_entry\_num

Number of DNAT entries that can be created for each NAT gateway

100
