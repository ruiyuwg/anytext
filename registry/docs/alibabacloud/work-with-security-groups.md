A security group acts as a virtual firewall for your Elastic Compute Service (ECS) instances, controlling both inbound and outbound traffic. By grouping instances with similar security patterns and trust levels, you establish distinct security domains to isolate and protect your cloud resources.

## **How it works**

When creating an ECS instance, you must associate it with at least one security group. The rules from all associated security groups are sorted by priority to determine whether to allow or deny traffic.

You can add, modify, or delete rules at any time. Changes apply immediately to all instances within the group. A security group rule is defined by the source (for inbound) or destination (for outbound), port range, protocol, policy (**Allow**/**Deny**), and priority. Inbound rules control traffic attempting to reach the instance, while outbound rules control control traffic originating from the instance. For more information, see [Security group rules](/help/en/ecs/user-guide/security-group-rules#concept-2092336).

Rules apply to the primary elastic network interface (ENI) by default. For secondary ENIs attached to an instance in a VPC, you can assign different security groups to implement fine-grained traffic control.

Configuration constraints:

-   Security groups are regional and VPC-specific. When launching an instance, the defined vSwitch (subnet) and security group must reside in the same VPC.
    
-   An instance or ENI must belong to at least one security group. For limits on the number of groups per instance or per ENI, see [Limits](/help/en/ecs/user-guide/limitations#SecurityGroupQuota).
    
-   If no security group is specified during launch, the system automatically assigns the primary ENI to the VPC's default security group. For more information, see [Default security groups](/help/en/ecs/user-guide/default-security-groups).
    

As shown in the following figure, consider a VPC containing `ECS 1` and `ECS 2`. Both instances utilize the primary ENI and are associated with `Security Group 1`. Security Group 1 is a basic security group with a default intra-group connectivity policy. `ECS 1` and `ECS 2` can communicate with each other over the internal network. This implicit trust ignores custom rules unless explicitly overridden. Inbound and outbound access is governed by custom rules. For example, if inbound rules allow ICMP, any IP can ping these instances. If no outbound rules are defined, all outgoing traffic is allowed by default.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0104123771/CAEQOBiBgIDAj6PsqRkiIDg3NGI1ZjM5ZmRkNTQwODU4MjNlMmZiZWZhMzhjMmNi4791305_20241128162508.358.svg)

## **Security group types**

##### **Basic and advanced security groups**

Based on their network attributes, security groups are classified as basic or advanced. Both types are free of charge. When interacting with the ECS API or CLI, the `SecurityGroupType` parameter distinguishes between the two main attribute types: Basic (`normal`) and Advanced (`enterprise`).

-   Basic security group: Supports intra-group connectivity (instances in the group can communicate by default). You can allow traffic from another security group by specifying its ID (e.g., sg-123) as the source/destination. Basic security group supports fewer private IP addresses.
    
-   Advanced security group: No implicit intra-group connectivity. You must explicitly use IP addresses or CIDR blocks (e.g., 10.0.0.0/24) for rules. Advanced security group supports a significantly larger number of private IP addresses.
    

If an ENI is associated with multiple security groups, they must all be of the same type (all Basic or all Advanced). For more information, see [Basic and advanced security groups](/help/en/ecs/user-guide/basic-security-groups-and-advanced-security-groups#concept-2300998).

##### **Custom and managed security groups**

Based on management ownership, security groups are classified as custom or managed. Both custom and managed security groups can be basic or advanced.

-   Custom security group: Created and managed by you via the ECS Console or API. You have full control over rules and lifecycle. The default security group is a type of custom security group. For more information, see [Create a security group](/help/en/ecs/user-guide/create-a-security-group-1).
    
-   Managed security group: Created automatically by cloud services to facilitate their operations. It's read-only and you cannot modify rules. For more information, see [Managed security groups](/help/en/ecs/user-guide/managed-security-groups#concept-1989322).
    

Identify managed security group: The `ServiceManaged` attribute returns `True` in the [DescribeSecurityGroups](/help/en/ecs/api-describesecuritygroups#doc-api-Ecs-DescribeSecurityGroups) API, or the console displays a **Managed by Cloud Service** banner.

## Best practices for using security groups

To maintain a robust security posture, follow these guidelines:

-   **Establish a naming convention**
    
    Use clear, descriptive names and tags for your security groups. Consistent tagging allows for easier resource filtering and operational management as your infrastructure scales.
    
-   **Treat security groups as whitelists**
    
    Deny all access by default. Only add rules that explicitly authorize traffic for specific ports and source IPs.
    
-   **Principle of Least Privilege (PoLP)**
    
    Grant only the minimum necessary access. Instead of allowing `0.0.0.0/0` on port 22 (SSH), restrict port 22 access to your specific corporate office CIDR or a bastion host IP.
    
-   **Follow the principle of least privilege**
    
    If ECS instances within a basic security group do not need to communicate with each other over the internal network, set the intra-group connectivity policy to internal isolation.
    
-   **Keep rules simple**
    
    Group rules by purpose into different security groups and associate your instances with those groups. Too many rules in a single security group increases management complexity. Use the health check feature to identify and remove unused rules.
    
-   **Isolate instances by application role**
    
    Associate public-facing instances with a security group that only opens ports 80/443. Database instances (MySQL, Redis) should reside in a separate security group that denies all public internet access and only accepts traffic from the application tier security group.
    
-   **Never modify a production security group directly**
    
    Clone the security group to a staging environment -> Apply changes -> validate connectivity -> apply to production.
    

## References

-   Access control: For deep dives on isolation strategies, see [Manage security groups and rules](/help/en/ecs/user-guide/start-using-security-groups).
    
-   Quotas: For limits on rules per group or groups per instance, see [Limits](/help/en/ecs/user-guide/limitations#SecurityGroupQuota).
    
-   Networking: For attaching multiple interfaces, see [ENI overview](/help/en/ecs/user-guide/eni-overview).
    
-   Security note: While security groups are a critical layer of defense, they should be part of a comprehensive security strategy. For holistic security measures, see [ECS security](/help/en/ecs/user-guide/best-security-practices#task-2084924).
