Compared to Internet access, internal network access safeguards against certain network attacks and unauthorized access. It is ideal for secure, high-speed internal communications. This access method uses private IP addresses and domain names, with network access control lists (ACLs) and security groups enabling control over access between Elastic Compute Service (ECS) instances within a virtual private cloud (VPC). For cross-VPC access, whether across accounts or regions, Alibaba Cloud offers solutions such as Cloud Enterprise Network (CEN), VPC peering connections, and VPN Gateway.

## **Internal network access methods**

### **Use private IP addresses for internal network access**

In most cases, private IP addresses refer to private IPv4 addresses. A private IPv4 address is an IPv4 address that is not reachable over the Internet. You can use private IPv4 addresses to allow communication between ECS instances and internal resources. Private IPv4 addresses are assigned to ECS instances by using the Dynamic Host Configuration Protocol (DHCP).

To enable IPv6 internal network access within a VPC, create ECS instances with IPv6 addresses in a VPC and a vSwitch configured with IPv6 CIDR blocks.

For more information, see [IP addresses](/help/en/ecs/user-guide/ip-address/).

### **Use private domain names for internal network access**

You can use private domain names for network connections between Elastic Compute Service (ECS) instances in the same virtual private cloud (VPC) to prevent service access issues caused by IP address changes, simplify the management of large-scale internal networks, and maintain isolation of internal networks from the Internet. This enhances security and isolation for internal communications.

Configure private DNS resolution for ECS instances to enable internal network access using private domain names. Ensure the DNS hostname feature is enabled in the VPC. For more information, see [ECS private DNS resolution](/help/en/ecs/user-guide/ecs-private-domain-resolution).

## **Internal network access control**

### Configure network ACLs for access control

Network ACLs serve as a network access control mechanism within a VPC. By creating and associating network ACL rules with a vSwitch, you can manage the inbound and outbound traffic for ECS instances connected to that vSwitch. For more information, see [Network ACLs](/help/en/vpc/network-acl-overview) and [Create and manage a network ACL](/help/en/vpc/work-with-network-acls).

Network ACLs can also restrict internal network connections between ECS instances across different vSwitches. For more information, see [Manage communication among ECS instances in different vSwitches](/help/en/vpc/manage-intercommunication-among-ecs-instances-connected-to-different-vswitches).

### **Configure security group rules for access control**

Security groups act as virtual firewalls at the network interface card level, regulating inbound and outbound ECS instance traffic. Strategic use of security groups significantly improves instance security. Within the same VPC, ECS instances can manage internal network access through security group rules.

-   Within the same security group: By default, a basic security group allows intra-group communication. Placing ECS instances that require internal network access within the same basic security group facilitates this access. Then an advanced security group maintains network isolation within the group. For more information, see [Modify the internal access control policy of a basic security group](/help/en/ecs/user-guide/modify-the-internal-access-control-policy-of-a-security-group).
    
-   Across security groups: To facilitate internal network access between ECS instances in different security groups, or to employ an advanced security group for its default intra-group isolation and granular access control in complex network environments, authorize security groups accordingly. For more information, see [Security groups for different use cases](/help/en/ecs/user-guide/security-groups-for-different-use-cases#section-z9s-v22-2pc).
    

### **Enable the system firewall on an ECS instance**

Firewall technology helps computers build a relatively isolated protective barrier between internal and external networks to protect data. If you enable a firewall for an ECS instance and configure firewall rules to block external access, you may be unable to connect to the instance. For more information, refer to the following topics:

-   [Enable or disable the system firewall on a Linux ECS instance](/help/en/ecs/user-guide/enable-or-disable-the-system-firewall-in-a-linux-instance)
    
-   [Manage the system firewall of a Windows instance](/help/en/ecs/user-guide/manage-windows-system-firewall)
    

## **Cross-VPC internal network interconnection**

If you want to enable private and secure communication among virtual private clouds (VPCs), you can use Cloud Enterprise Network (Cloud Enterprise Network), VPN Gateway, VPC peering connections, or PrivateLink.

Different methods for interconnecting VPCs vary in implementation, supported regions, configuration complexity, number of interconnected VPCs, and associated costs. For more information, see [Overview of VPC connections](/help/en/vpc/cross-vpc-interconnection-overview/#section-fz7-c87-cna).

## **References**

-   To modify the default primary private IP address of an instance, see [Primary private IP address](/help/en/ecs/user-guide/modify-a-private-ip-address#task-bng-thn-xdb).
    
-   For scenarios that require multiple private IP addresses, such as hosting multiple applications or ensuring failover, assign multiple secondary private IP addresses to an ECS instance. For more information, see [Secondary private IP addresses](/help/en/ecs/user-guide/assign-secondary-private-ip-addresses).
    
-   For use of security groups, see [Overview](/help/en/ecs/user-guide/overview-44#section-wak-1fd-70l).
    
-   You can also use Cloud Firewall to manage traffic between ECS instances (east-west) and between the Internet and ECS instances (north-south), preventing unauthorized access. For more information, see [Overview](/help/en/cloud-firewall/cloudfirewall/user-guide/overview-of-vpc-firewalls).
