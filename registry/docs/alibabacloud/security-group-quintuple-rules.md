Security group rules are custom access control rules that manage the inbound and outbound traffic of Elastic Compute Service (ECS) instances within a security group. These rules help you control access to your cloud resources and enhance network security.

Before you use security group rules, note the following information:

-   In a virtual private cloud (VPC), security group rules are categorized as inbound or outbound and control both Internet and internal network traffic. In a classic network, security group rules are categorized as public inbound, public outbound, internal inbound, and internal outbound. Public rules control Internet traffic, and internal rules control internal network traffic.
    
-   Security groups are stateful. A stateful session can last for up to 910 seconds. After access is allowed and a session is established, the security group permits all subsequent communication within that session. For example, if an inbound data packet is allowed, the corresponding outbound data packet is also allowed for the duration of the session.
    
-   Modifying security group rules or changing the security group associated with a network interface card does not affect established sessions, provided the rule behavior remains unchanged. If you rely on the internal interconnectivity of a basic security group to allow traffic and want to avoid disrupting established sessions when changing the associated security group, you must first add the ECS instance or network interface card to the new security group. Then, wait for approximately 10 seconds before removing it from the old security group.
    
-   TCP port 25 is the default email service port. For security reasons, TCP port 25 on ECS instances is restricted by default. You can use port 465 to send emails.
    
-   If you do not add any security group rules, a security group uses invisible default access control rules. These default rules work with your custom rules to control traffic for ECS instances. Basic and enterprise security groups have different default rules. For a basic security group, the default inbound rules allow internal network traffic from other instances in the same security group, and the default outbound rules allow all traffic. For an enterprise security group, both inbound and outbound traffic are denied by default. For more information, see [Basic and enterprise security groups](/help/en/ecs/user-guide/basic-security-groups-and-advanced-security-groups#concept-2300998).
    
-   The internal connectivity policy of a basic security group affects its default access control rules. The default policy is internal interconnectivity, which means that inbound rules allow internal network traffic from other instances in the same security group, and outbound rules allow internal network traffic to other instances in the same security group. If instances in a basic security group do not need to access each other over the internal network, you should follow the Principle of Least Privilege (PoLP) and set the internal connectivity policy to internal isolation. For more information, see [Modify the internal connectivity policy of a basic security group](/help/en/ecs/user-guide/modify-the-internal-access-control-policy-of-a-security-group#task-2301109).
    
-   To determine whether to allow traffic for an ECS instance, the rules from all of its associated security groups are combined. These rules are sorted based on a fixed policy and applied with the default access control rules to allow or deny traffic. For more information, see [Match policy for custom security group rules](#section-eh2-0ie-vdw).
    
-   The number of rules in a security group is limited.
    
    -   A single Elastic Network Interface (ENI) can be associated with a maximum of 10 security groups.
        
    -   The total number of rules, including inbound and outbound rules, across all security groups associated with the ENI cannot exceed 1,000.
        
    
    > For more information about the limits, see [Limits on security groups](/help/en/ecs/user-guide/limitations#SecurityGroupQuota).
    
    To avoid exceeding the limits and reduce management complexity, you should simplify the rules in a single security group. You can use the health check feature for security group rules to periodically detect and remove redundant rules. For more information, see [Check for redundant rules in a security group](/help/en/ecs/user-guide/view-security-group-rules#section-jx7-i9e-0dn).
    

## Components of a security group rule

A custom security group rule consists of the following components:

-   **Protocol Type**: The protocol type of the traffic to match. Two types of values are supported:
    
    -   Protocol name: TCP, UDP, ICMP (IPv4), ICMP (IPv6), and GRE.
        
    -   IP protocol numbers that comply with IANA standards: Integers from 0 to 255. The protocol numbers that correspond to the preceding protocol names are equivalent to specifying the protocol names. For example, 6 for TCP, 17 for UDP, 1 for ICMP (IPv4), 58 for ICMP (IPv6), and 47 for GRE.
        
        **Regions that support setting protocol numbers**
        
        **Region Name**
        
        **Region ID**
        
        China (Hohhot)
        
        cn-huhehaote
        
        China (Qingdao)
        
        cn-qingdao
        
        Philippines (Manila)
        
        ap-southeast-6
        
        UK (London)
        
        eu-west-1
        
        Malaysia (Kuala Lumpur)
        
        ap-southeast-3
        
        US (Silicon Valley)
        
        us-west-1
        
        Singapore
        
        ap-southeast-1
        
-   **Port Range**: The destination port of the traffic to match. Single port ranges and port lists are supported.
    
    -   Single port range: For TCP and UDP protocols, you can specify a port range separated by a forward slash (/), such as 8000/9000 or 22/22. For other protocols, this field is set to -1/-1. For more information, see [Common ports](/help/en/ecs/user-guide/common-ports#concept-gbt-s21-ydb).
        
    -   Port list: A port list is a collection of ports. If you set the Port Range to a port list, this rule counts as a number of security group rules equal to the maximum number of entries in the port list, regardless of the actual number of entries. When you use a port list, the protocol type of the security group rule must be TCP or UDP. For more information, see [Overview of port lists](/help/en/ecs/user-guide/overview-32#concept-2045640).
        
-   **Authorization Object**: The source address of the traffic to match in an inbound rule, or the destination address of the traffic to match in an outbound rule. Classless Inter-Domain Routing (CIDR) blocks (or IP addresses), security groups, and prefix lists are supported.
    
    -   IPv4 address: For example, 192.168.0.100.
        
    -   IPv4 CIDR block: For example, 192.168.0.0/24.
        
    -   IPv6 address: For example, 2408:4321:180:1701:94c7:bc38:3bfa:9. The interface standardizes IPv6 addresses. For example, 2408:180:0000::1 is processed as 2408:180::1.
        
    -   IPv6 CIDR block: For example, 2408:4321:180:1701::/64. The interface standardizes IPv6 CIDR blocks. For example, 2408:4321:180:0000::/64 is processed as 2408:4321:180::/64.
        
    -   Security group ID: You can grant access to a target security group in the current account or another account. The internal IP addresses of the ECS instances in the target security group are used to match traffic and control internal network access. For example, if Security Group A contains ECS instance B, granting access to Security Group A grants access permissions to the internal IP address of ECS instance B.
        
    -   Prefix list ID: A prefix list is a collection of network prefixes (CIDR blocks). If you set the Authorization Object to a prefix list, this rule counts as a number of security group rules equal to the maximum number of entries in the prefix list, regardless of the actual number of entries. For more information, see [Overview of prefix lists](/help/en/ecs/user-guide/overview-32#concept-2045640).
        
-   **Authorization Policy**: Allow or deny. After traffic matches a security group rule based on the protocol, port, and authorization object, the authorization policy is applied to either allow or deny the traffic.
    
-   **Priority**: The priority of the rule. The value can be from 1 to 100. A smaller value indicates a higher priority. Security group rules are sorted first by priority, and then by authorization policy. For more information, see [Match policy for custom security group rules](#section-eh2-0ie-vdw).
    
-   **Rule Direction**: Inbound or outbound. Inbound rules control inbound traffic, and outbound rules control outbound traffic.
    
-   **NIC Type**: This component is relevant only in a classic network. You can specify whether the rule applies to the public or internal network interface card of a classic network ECS instance. Security group rules that apply to a public network interface card control public network access. Rules that apply to an internal network interface card control internal network access. In a virtual private cloud (VPC), security group rules control both public and internal network access.
    
-   **Rule ID**: When you add a security group rule, the system generates a unique ID for the rule. To modify or delete an existing rule, you can use the rule ID to specify the rule.
    

A security group rule matches traffic based on the protocol type, port range, and authorization object, and then allows or denies the traffic based on the authorization policy. For a typical inbound rule, the authorization object matches the source address of the traffic, and the port range matches the destination port. For a typical outbound rule, the authorization object matches the destination address of the traffic, and the port range matches the destination port. If you require more precise access control, you can use quintuple rules. For more information, see [Security group quintuple rules](#title-rc9-4v5-ifk).

## Match policy for custom security group rules

An ECS instance can be associated with one or more security groups. When determining whether to allow traffic for an ECS instance (using inbound traffic as an example), the following rule matching policy applies:

1.  The inbound rules from multiple security groups are combined and sorted according to the following criteria:
    
    1.  First, rules are sorted by priority. A smaller priority value indicates a higher priority.
        
    2.  Second, rules are sorted by authorization policy. Deny (Drop) rules take precedence over Allow (Accept) rules.
        
2.  Traffic is matched against each custom rule in order, based on the protocol type, port range, and authorization object. If a match is found, the action specified in the rule's authorization policy is performed to allow or deny the traffic.
    

In addition to custom security group rules, security groups also have invisible default access control rules that affect whether traffic is allowed or denied. For more information, see [Basic and enterprise security groups](/help/en/ecs/user-guide/basic-security-groups-and-advanced-security-groups#section-cvc-d8p-vqi).

## **Special security group rules**

To ensure the stable operation of ECS instances and the functionality of certain cloud features, security groups allow specific network traffic by default. You cannot configure security group rules to block this default behavior. These special scenarios include the following:

-   **Network connectivity checks under specific conditions**:
    
    When underlying components change, Alibaba Cloud may perform on-demand Ping probes on ECS instances to verify network connectivity. These probes are not routine. To ensure the accuracy of these checks, security groups identify and allow this probe traffic by default.
    
-   **ICMP (PMTUD error messages)**:
    
    If an ECS instance sends a data packet that exceeds the path maximum transmission unit (MTU) and has the Don't Fragment (DF) flag set, the instance receives an ICMP error message that contains the correct path MTU. This message instructs the ECS instance to reduce the packet size. Security groups identify and allow this special network traffic by default. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/).
    
-   **SLB traffic**:
    
    When network traffic is forwarded to backend ECS instances through Server Load Balancer (SLB), such as ALB, NLB, or CLB, security groups identify and allow this traffic by default. In this case, the security groups or access control lists (ACLs) on the SLB instance control the inbound and outbound traffic of the ECS instances.
    
-   **MetaServer access**:
    
    MetaServer provides the global meta service, which is a fundamental service required for ECS instances to run correctly. Security groups allow outbound traffic to MetaServer (IP address 100.100.100.200) by default. You do not need to configure additional rules.
    

## Security group quintuple rules

By default, when you configure security group rules in the console, the rules are limited to the following components:

-   Inbound security group rules: Source IP address, destination port, and protocol type.
    
-   Outbound security group rules: Destination IP address, destination port, and protocol type.
    

To control the outbound and inbound traffic of an ECS instance more precisely, you can use an API to configure security group quintuple rules. Quintuple rules are fully compatible with existing security group rules. Inbound and outbound quintuple rules for a security group require you to configure the source IP address, source port, destination IP address, destination port, and protocol type.

When you configure the destination IP address in an inbound rule or the source IP address in an outbound rule to control traffic for a specific ECS instance within the security group, you must specify the private IP address of the ECS instance, not its public IP address (including static public IP addresses and elastic IP addresses (EIPs)). This is because static public IP addresses and EIPs are NAT IP addresses located on Alibaba Cloud's public gateways. Security groups operate on the instance's ENI and control traffic associated with the private IP address, which is mapped to the NAT IP address.

For example, the following code for a quintuple outbound rule indicates that `172.16.1.0/32` initiates TCP access to `10.0.0.1/32` on port 22.

```
Source IP address: 172.16.1.0/32
Source port: 22
Destination IP address: 10.0.0.1/32
Destination port: Not restricted
Protocol type: TCP
```

## Security group rule configuration examples

The following examples show security group rule configurations for common scenarios, such as hosting a website and remotely connecting to an instance.

-   [Case 1: Host a website on an ECS instance](/help/en/ecs/user-guide/security-groups-for-different-use-cases#section-smx-4d7-49p)
    
-   [Case 2: Allow specific users to remotely access an ECS instance](/help/en/ecs/user-guide/security-groups-for-different-use-cases#section-6ts-4pj-mcx)
    
-   [Case 3: Security policies for a database service deployed on an ECS instance](/help/en/ecs/user-guide/security-groups-for-different-use-cases#section-6cj-vio-hg7)
    
-   [Case 4: Allow access only for services that use a specific protocol](/help/en/ecs/user-guide/security-groups-for-different-use-cases#section-u10-5r6-4ve)
    
-   [Case 6: Restrict an ECS instance from accessing external websites](/help/en/ecs/user-guide/security-groups-for-different-use-cases#section-y7j-0ed-4q0)
    
-   [Case 5: Enable internal network communication between instances in different security groups](/help/en/ecs/user-guide/security-groups-for-different-use-cases#section-z9s-v22-2pc)
