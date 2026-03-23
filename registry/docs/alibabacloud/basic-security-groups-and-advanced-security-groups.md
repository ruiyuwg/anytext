Security groups are classified into basic security groups and advanced security groups. Basic and advanced security groups are provided free of charge. Basic and advanced security groups are suitable for different scenarios and differ in the following items: security group capacity, support for security group rules that reference security groups as authorization objects, support for the internal interconnectivity policy, and default access control rules. This topic describes the characteristics of and differences between basic and advanced security groups.

**Note**

When you associate an Elastic Compute Service (ECS) instance or elastic network interface (ENI) with multiple security groups, the security groups must be of the same type. You cannot associate an ECS instance or an ENI with both types of security groups.

## Number of private IP addresses per security group

The capacity of a security group is measured based on the number of private IP addresses. When you associate resources such as ECS instances, ENIs, and elastic container instances with a security group, the private IP addresses of the resources consume the capacity of the security group. Take note that a single resource may have one or more private IP addresses.

The following table describes the differences between the capacities of basic and advanced security groups.

**Security group type**

**Number of private IP addresses per security group**

Basic security group

-   A basic security group in a virtual private cloud (VPC) can have 6,000 private IP addresses.
    
    **Note**
    
    -   The number of used IP addresses is calculated based on the number of private IP addresses on the ENIs (including the primary and secondary ENIs of an instance) associated with a security group. This count is the sum of all IP address types, such as primary private IPv4, IPv6, secondary private IPv4, IPv4 prefixes, and IPv6 prefixes.
        
    -   If you have more than 6,000 private IP addresses to access each other over the internal network, add the ECS instances which use the private IP addresses, to multiple security groups, and configure security group rules to allow access between the security groups.
        
    -   You can view the maximum number of private IP addresses in a basic security group in a VPC in the [Quota Center](https://quotas.console.alibabacloud.com/products/ecs/quotas?spm=a2c4g.11186623.0.0.376656addmG73f) by using the quota ID `q_vpc-normal-security-group-ip-count`.
        
    
-   A basic security group in the classic network can have 1,000 private IP addresses.
    

Advanced security group

An advanced security group in a VPC can have 65,536 private IP addresses.

**Note**

-   The number of used IP addresses represents the total number of ENIs associated with a security group, including both primary and secondary network interfaces of an instance.
    
-   Advanced security groups support VPCs but do not support the classic network.
    

In VPCs, advanced security groups can contain more private IP addresses than basic security groups. If the number of private IP addresses in a cluster exceeds the capacity of a basic security group, we recommend that you use an advanced security group for the cluster.

For information about how to check the number of used IP addresses through ECS console or calling an API operation, see [Search for a security group](/help/en/ecs/user-guide/manage-security-groups#1d4aa92124s73).

## Support for security groups as authorization objects

A security group rule can reference the ID of a security group as an authorization object (source or destination) to control traffic for the resources that are associated with the security group.

**Security group type**

**Support for security groups as authorization objects**

**Description**

Basic security group

Yes

You can create security group rules that reference security groups as authorization objects in basic security groups. Each basic security group can contain up to 20 security group rules that reference security groups as authorization objects. For more information, see the [Security group limits](/help/en/ecs/user-guide/limitations#SecurityGroupQuota) section of the "Limits" topic.

Advanced security group

No

You cannot create security group rules that reference security groups as authorization objects in advanced security groups, or reference advanced security groups as authorization objects in security group rules.

## **Support for** the internal interconnectivity policy

Two internal access control policies are available for security groups: the internal interconnectivity policy that allows access between ECS instances in a security group over the internal network and the internal isolation policy that denies access between ECS instances in a security group over the internal network. Basic security groups support the internal interconnectivity policy. The internal interconnectivity policy of a basic security group can be considered as a special Allow rule that references the basic security group. You can switch between the internal interconnectivity policy and the internal isolation policy to allow or deny access between ECS instances in basic security groups over the internal network. By default, advanced security groups use the internal isolation policy. You cannot change the internal isolation policy of advanced security groups to the internal interconnectivity policy.

**Security group type**

**Support for change to the internal interconnectivity policy**

Basic security group

Yes. By default, basic security groups use the **internal interconnectivity policy**.

**Note**

You can modify the internal access control policy of a basic security group in the ECS console to limit interconnection between ECS instances in the security group over the internal network to increase network security. For more information, see [Modify the internal access control policy of a basic security group](/help/en/ecs/user-guide/modify-the-internal-access-control-policy-of-a-security-group).

Advanced security group

No. By default, advanced security groups use the **internal isolation policy**.

## Default access control rules

Basic and advanced security groups use different default access control rules. The internal access control policy of a basic security group affects the default access control rules of the security group. The default access control rules of security groups are invisible and work with custom security group rules to control traffic for associated resources.

**Note**

The serial numbers in the following sections indicate the order of rules. Rules are processed in ascending order of serial number. Processing continues until a rule is matched.

### Basic security groups

## Basic security groups that use the internal interconnectivity policy

-   **Inbound**
    
    The following table describes how default access control rules and custom security group rules in a basic security group that uses the internal interconnectivity policy are applied to control inbound traffic. Traffic that is transmitted between ECS instances in the basic security group over the internal network matches a default access control rule (Rule 1) and is allowed regardless of custom security group rules. If inbound traffic does not match Rule 1 but matches one or more custom security group rules (Rules 2), the traffic is allowed or denied based on the action in a custom security group rule. Other inbound traffic matches another default access control rule (Rule 3) and is denied.
    
    **Serial number**
    
    **Rule type**
    
    **Traffic type**
    
    **Action**
    
    1
    
    Default access control rule
    
    Traffic that is transmitted between ECS instances in the basic security group over the internal network
    
    Allow
    
    2
    
    Custom security group rule
    
    Traffic that matches one or more custom security group rules
    
    Allow or deny based on the action in a custom security group rule
    
    3
    
    Default access control rule
    
    Other traffic
    
    Deny
    
-   **Outbound**
    
    The following table describes how default access control rules and custom security group rules in a basic security group that uses the internal interconnectivity policy are applied to control outbound traffic. Outbound traffic that matches one or more custom security group rules (Rules 1) in the basic security group is allowed or denied based on the action in a custom security group rule. Other outbound traffic matches the default access control rule (Rule 2) and is allowed.
    
    **Serial number**
    
    **Rule type**
    
    **Traffic type**
    
    **Action**
    
    1
    
    Custom security group rule
    
    Traffic that matches one or more custom security group rules
    
    Allow or deny based on the action in a custom security group rule
    
    2
    
    Default access control rule
    
    Other traffic
    
    Allow
    

## Basic security groups that use the internal isolation policy

-   **Inbound**
    
    The following table describes how default access control rules and custom security group rules in a basic security group that uses the internal isolation policy are applied to control inbound traffic. Traffic that is transmitted between ECS instances in the basic security group is denied. If inbound traffic matches one or more custom security group rules (Rules 1), the traffic is allowed or denied based on the action in a custom security group rule. Other inbound traffic matches the default access control rule (Rule 2) and is denied.
    
    **Serial number**
    
    **Rule type**
    
    **Traffic type**
    
    **Action**
    
    1
    
    Custom security group rule
    
    Traffic that matches one or more custom security group rules
    
    Allow or deny based on the action in a custom security group rule
    
    2
    
    Default access control rule
    
    Other traffic
    
    Deny
    
-   **Outbound**
    
    Rules in basic security groups that use the internal isolation policy are applied in the same manner that rules in basic security groups that use the internal connectivity policy are applied to control outbound traffic.
    
    **Serial number**
    
    **Rule type**
    
    **Traffic type**
    
    **Action**
    
    1
    
    Custom security group rule
    
    Traffic that matches one or more custom security group rules
    
    Allow or deny based on the action in a custom security group rule
    
    2
    
    Default access control rule
    
    Other traffic
    
    Allow
    

The internal access control policy of a basic security group affects the default access control rules of the security group, as described in the preceding tables. When a basic security group uses the internal interconnectivity policy, traffic that is transmitted between ECS instances in the security group over the internal network is automatically allowed. If ECS instances in a basic security group do not need to access each other over the internal network, we recommend that you configure the internal isolation policy as the internal access control policy of the security group based on the principle of least privilege.

### Advanced security groups

-   **Inbound**
    
    The following table describes how default access control rules and custom security group rules in an advanced security group are applied to control inbound traffic. Inbound traffic that matches one or more custom security group rules (Rules 1) in the advanced security group is allowed or denied based on the action in a custom security group rule. Other inbound traffic matches the default access control rule (Rule 2) and is denied.
    
    **Serial number**
    
    **Rule type**
    
    **Traffic type**
    
    **Action**
    
    1
    
    Custom security group rule
    
    Traffic that matches one or more custom security group rules
    
    Allow or deny based on the action in a custom security group rule
    
    2
    
    Default access control rule
    
    Other traffic
    
    Deny
    
-   **Outbound**
    
    The following table describes how default access control rules and custom security group rules in an advanced security group are applied to control outbound traffic. Outbound traffic that matches one or more custom security group rules (Rules 1) in the advanced security group is allowed or denied based on the action in a custom security group rule. Other outbound traffic matches the default access control rule (Rule 2) and is denied.
    
    **Serial number**
    
    **Rule type**
    
    **Traffic type**
    
    **Action**
    
    1
    
    Custom security group rule
    
    Traffic that matches one or more custom security group rules
    
    Allow or deny based on the action in a custom security group rule
    
    2
    
    Default access control rule
    
    Other traffic
    
    Deny
    

## **Other items**

**Item**

**Basic security group**

**Advanced security group**

Supported network type

-   Classic network
    
-   VPC
    

VPC

Support for adding Allow or Deny rules to security groups

Yes

Yes

Support for specifying the priorities of security group rules

Yes

Yes
