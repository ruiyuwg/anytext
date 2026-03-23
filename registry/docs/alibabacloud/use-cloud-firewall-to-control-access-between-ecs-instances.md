This topic describes how to configure security group rules based on the characteristics of security groups in Elastic Compute Service (ECS) to ensure the security and reliability of network traffic for cloud resources in common scenarios, such as deploying a website on an ECS instance to provide external web services and managing remote access to an ECS instance.

## **Guidelines for using security groups**

### **1\. Analyze your business requirements and plan different security groups**

Identify your business characteristics and security requirements. For example, you must know which services can be exposed to the Internet and which services are only for internal use.

-   **Create different security groups for ECS instances that provide Internet-facing services and ECS instances that provide internal network-facing services.**
    
    Excess open ports may allow your applications to be accessed over the Internet, which can cause security issues. The security groups to which you want to assign ECS instances must adhere to strict rules. We recommend that you preferentially configure Deny rules in the security groups. You can close all ports and protocols except for the ports and protocols required by the services deployed on the ECS instances.
    
    The security group that contains Internet-facing ECS instances must have clear and simple rules to ensure that the instances provide only primary services. For example, for MySQL and Redis applications, we recommend that you deploy the applications on ECS instances that do not have Internet access and configure security group rules to allow access only from specific security groups (specified as authorization objects).
    
-   **Assign different applications to different security groups.**
    
    In most cases, different operating systems in a production environment do not belong to the same application group for load balancing. To provide different services, operating systems must have different ports exposed and blocked. We recommend that you assign different operating systems to different security groups.
    
    For example, for a Linux operating system, you may need to expose TCP port 22 to allow SSH connections. For a Windows operating system, you may need to expose TCP port 3389 to allow Remote Desktop Protocol (RDP) connections.
    
    If instances that use the same image but provide different services do not need to communicate with each other over the internal network, we recommend that you assign the instances to different security groups. This helps decouple image types from security groups, simplify subsequent changes to security group rules, and ensure that instances have simple responsibilities.
    
    When you plan and add new applications, you must properly plan security groups in addition to using vSwitches to define subnets. Use CIDR blocks and security groups to define your role as a service provider or consumer.
    
-   **Use different security groups in production and test environments.**
    
    To better isolate systems, you may build multiple test environments and a single production environment in actual development. You may need to configure different security group rules for different environments to properly isolate networks. This way, you can prevent changes made for test purposes from being uploaded to the production environment and affecting the stability of the production environment.
    
    You can use security groups to confine access domains of applications and prevent communication between production and test environments. You can also assign different security groups to different test environments to block traffic between the environments and improve development efficiency.
    
-   **Do not assign public IP addresses to resources that do not require Internet access.**
    
    If you want to connect to an ECS instance, you can use a method that does not require a public IP address, such as Workbench, Session Manager, or a jump server, to minimize Internet exposure. If you want to directly access a service deployed in an environment that does not have Internet access or in a private network, you can use the port forwarding feature. For more information, see [Connect using port forwarding without public IP](/help/en/ecs/user-guide/perform-port-forwarding-by-using-ali-instance-cli).
    
    Most distributed applications have different layers and groups. For ECS instances that do not have Internet access, we recommend that you do not assign public IP addresses. If multiple instances provide Internet access, we recommend that you configure Server Load Balancer (SLB) to distribute Internet traffic to improve system availability and prevent single points of failure. For more information, go to the [Server Load Balancer](https://www.alibabacloud.com/help/en/slb/?spm=a2c63.m28257.0.i3) page.
    
    In virtual private clouds (VPCs), if your ECS instances do not have public IP addresses but require Internet access, we recommend that you use NAT gateways to provide Internet proxy services for the instances. You need to only configure Source Network Address Translation (SNAT) entries to enable Internet access for specific CIDR blocks or subnets. This way, you do not need to expose services to the Internet after public IP addresses are assigned when only outbound Internet access is required. For more information, see [Create and manage SNAT entries](/help/en/nat-gateway/create-a-snat-entry#task-491135).
    
-   **Use a security group as a whitelist**
    
    Use a security group as a whitelist. By default, a security group denies all inbound access. You can add Allow inbound rules to the security group to allow access from specific authorization objects on specific ports. We recommend that you minimize the number of open ports and public IP addresses for ECS instances. You can associate elastic IP addresses (EIPs) with online ECS instances to allow easy access for task log queries and troubleshooting. However, this operation exposes the instances to the Internet.
    

### **2\. Configure security group rules**

A security group serves as a virtual firewall to control inbound and outbound traffic for ECS instances. You must open only the required ports and restrict the allowed source IP address ranges.

-   **The default actions of basic and advanced security groups are different.**
    
    By default, basic and advanced security groups deny all inbound access. By default, a basic security group allows all outbound access and an advanced security group denies all outbound access.
    
-   **Instances in different security groups are isolated from each other over the internal network, and the default internal access control policy differs for instances in different types of security groups.**
    
    Instances in different security groups of the same account are inaccessible to each other over the internal network. By default, instances in a basic security group can communicate with each other over the internal network and instances in an advanced security group are isolated from each other over the internal network.
    
-   **The control objects of security group rules vary based on the network type.**
    
    -   In a VPC, each security group rule controls access to or from the Internet and the internal network. You can configure a security group rule to deny or allow traffic to or from the Internet and the internal network.
        
    -   In the classic network, public rules (Internet ingress and Internet egress rules) control access to and from the Internet and internal rules (inbound and outbound rules) control access to and from the internal network.
        
-   **Add security group rules based on the principle of least privilege.**
    
    For example, if you want to open port 22 on a Linux instance for remote logon, we recommend that you allow access only from specific IP addresses.
    
    **Warning**
    
    If you specify 0.0.0.0/0 as the authorization object in an inbound rule of a security group, all IPv4 addresses are allowed to access the instances in the security group and all ports are exposed. This increases security risks. To improve security, we recommend that you deny external access on all ports and then configure security group rules to open ports based on your business requirements. For example, if you want to expose web services, you can open common TCP ports, such as ports 80, 8080, and 443, and close other ports.
    
    To ensure security, we recommend that you specify IP addresses or CIDR blocks as authorization objects (traffic sources or destinations) based on your business requirements and the principle of least privilege. Exercise caution when you specify 0.0.0.0/0 or ::/0 as authorization objects to allow access from all IPv4 or IPv6 addresses. For information about the types of authorization objects supported by security groups, see the [Composition of each security group rule](/help/en/ecs/user-guide/security-group-rules#section-e6p-oc1-wdo) section of the "Security group rules" topic.
    
-   **Configure internal isolation based on the principle of least privilege.**
    
    For example, if you do not require intra-group connectivity between the ECS instances in a security group, change the internal access control policy of the security group from intra-group connectivity to internal isolation.
    
-   **Make sure that the purpose of the rules in each security group is consistent.**
    
    Add security group rules to security groups based on the purposes of the security groups and assign ECS instances to the security groups. Adding a large number of rules to a single security group increases management complexity.
    
-   **Exercise caution when you specify authorization objects for each security group rule.**
    
    The authorization objects of security group rules can be IP addresses, security groups, or CIDR blocks.
    
    If you want to allow resources in different security groups to communicate with each other, you must configure security group rules to allow mutual access between the security groups. For example, you can create different security groups for distributed applications. The security groups may not be accessible to each other. In this case, you can add security group rules that reference security groups (instead of IP addresses or CIDR blocks) as authorization objects to allow mutual access between the security groups so that resources in the security groups can access each other. For example, you create the `sg-web` security group for the web layer and the `sg-database` security group for the database layer of your applications. In the `sg-database` security group, you can add a rule that references the `sg-web` security group to allow all resources in the sg-web security group to access the resources in the sg-database security group on MySQL port 3306.
    
    To allow access over the internal network, you must specify security groups as authorization objects instead of CIDR blocks.
    
    By default, no inbound security group rules allow access to the internal network for ECS instances that reside in the classic network. To ensure security, we recommend that you do not enable access based on CIDR blocks.
    
-   **In most cases, common applications use the default ports.**
    
    Applications deployed on ECS instances use ports of the instances to provide external services. For more information, see [Common ports](/help/en/ecs/user-guide/common-ports#concept-gbt-s21-ydb).
    

### **3\. Continuously optimize and modify security group rules**

As your business grows, security groups and security group rules may no longer meet your business requirements. You must regularly check the existing security groups and security group rules and modify security group settings based on the most recent security posture. When you modify a security group, we recommend that you clone the security group to a test environment and modify and debug the security group rules in the test environment to ensure that the traffic of the instances in the security group can be correctly forwarded. Then, you can modify the security group rules in the online environment to prevent service interruptions caused by accidental modifications.

## **Security groups for different use cases**

##### **Control inbound traffic to ECS instances**

You can configure inbound rules in a security group to allow only specific users to access the services deployed on the ECS instances that belong to the security group. By default, a security group denies all inbound access. You need to only configure Allow security group rules. The following use cases describe how to control inbound traffic to ECS instances:

-   [Case 1: Allow websites deployed on ECS instances to provide web services](#title-a63-6ud-dm9)
    
-   [Case 2: Allow only specific users to connect to ECS instances](#section-6ts-4pj-mcx)
    
-   [Case 3: Control access to databases deployed on ECS instances](#section-6cj-vio-hg7)
    
-   [Case 4: Allow only traffic of specific protocols to access ECS instances](#section-u10-5r6-4ve)
    
-   [Case 5: Allow instances in different security groups to communicate with each other over the internal network](#section-z9s-v22-2pc)
    

##### **Control outbound traffic from ECS instances**

You can configure outbound rules in a security group to prohibit ECS instances in the security group from accessing specific external resources. By default, a basic security group allows all outbound access. You need to only configure Deny security group rules. The following use case describes how to control outbound traffic from ECS instances:

-   [Case 6: Restrict access from ECS instances to external websites](#section-y7j-0ed-4q0)
    

### **Case 1: Allow websites deployed on ECS instances to provide web services**

A website is deployed on an ECS instance and is accessible to any user over the Internet. To ensure instance security, you can configure security group rules to allow inbound traffic from any source only on TCP ports 80 (HTTP) and 443 (HTTPS). This ensures that the website can be accessed from the Internet but restricts direct access to other services on the instance.

The following table describes a sample security group rule.

**Rule direction**

**Action**

**Priority**

**Protocol type**

**Port range**

**Authorization object**

Inbound

Allow

1

Custom TCP

Open ports:

-   **HTTP(80)**
    
-   **HTTPS(443)**
    
-   Other custom ports: Enter the range of ports that you want to open.
    

Source: 0.0.0.0/0

**Note**

If the website remains inaccessible after you add the preceding rule, check whether all required ports are open and available. For more information, see [What do I do if I cannot access a service deployed on an instance?](/help/en/ecs/user-guide/check-whether-tcp-port-80-is-available)

### **Case 2: Allow only specific users to connect to ECS instances**

If you want to deploy services on an ECS instance, you must configure rules in the security groups to which the instance belongs to allow only specific users such as administrators or servers at specific IP addresses to connect to the instance on a connection port, such as TCP port 22 (default SSH port) or a custom SSH port. This reduces the risk of malicious attacks.

The following table describes a sample security group rule.

**Rule direction**

**Action**

**Priority**

**Protocol type**

**Port range**

**Authorization object**

Inbound

Allow

1

Custom TCP

-   To open port 22, which is the default port, on a Linux instance, select **SSH (22)**.
    
-   To open port 3389, which is the default port, on a Windows instance, select **RDP (3389)**.
    
-   To open other ports on a Linux or Windows instance, specify a port range.
    

Source: 192.168.XX.XX

**Note**

The IP address of a specific user or a specific server. Enter a public or private IP address based on whether the connection is over the Internet or a private network.

You can access an IP address search website, such as [IP Search](https://www.ip138.com/), to obtain the public IP address of your local network.

When you use Alibaba Cloud Workbench to connect to an ECS instance, you need to allow only specific authorization objects. The following table describes a sample **inbound** security group rule.

**Action**

**Priority**

**Protocol type**

**Port range**

**Authorization object**

**Allow**

1

**Custom TCP**

-   To open port 22, which is the default port, on a Linux instance, select **SSH (22)**.
    
-   To open port 3389, which is the default port, on a Windows instance, select **RDP (3389)**.
    
-   To open other ports on a Linux or Windows instance, specify a port range.
    

-   To connect to the instance by using the static public IP address (also called auto-assigned or system-assigned public IP address) or the EIP that is associated with the instance, specify 161.117.0.0/16.
    
-   To connect to the instance by using the private IP address of the instance, specify 100.104.0.0/16.
    

**Note**

For information about how to configure security group rules for connecting to an ECS instance that resides in the classic network by using Workbench, see the [Security group settings related to Workbench](/help/en/ecs/user-guide/workbench-overview/#fb0bbd8181cqb) section of the "Connect to an instance by using Workbench" topic.

### **Case 3: Control access to databases deployed on ECS instances**

In most cases, databases require strict security policies. You can configure security group rules to allow inbound connections only on specific ports from specific IP addresses or security groups, such as the security group to which an application server belongs. This ensures the privacy and security of database access.

If an inbound security group rule includes 0.0.0.0/0, review the ports and services that your applications must expose. If you do not want specific ports to directly provide external services, you can add a Deny rule for the ports. For example, if you deploy MySQL database services on your instance, port 3306 cannot be exposed to the Internet. In this case, you can add a Deny rule and set the priority of the rule to 100, which specifies the lowest priority.

The following table describes sample security group rules for common databases that use default ports.

**Database type**

**Rule direction**

**Action**

**Priority**

**Protocol type**

**Port range**

**Authorization object**

MySQL

Inbound

Allow

1

Custom TCP

Destination: 3306/3306

Source: 172.16.XX.XX.XX

Oracle

Inbound

Allow

1

Custom TCP

Destination: 1521/1521

Source: 192.168.XX.XX

MS SQL

Inbound

Allow

1

Custom TCP

Destination: 1433/1433

Source: 192.168.XX.XX/16

PostgreSQL

Inbound

Allow

1

Custom TCP

Destination: 5432/5432

Source: sg-bp1hv6wvmegs036\*\*\*\*

Redis

Inbound

Allow

1

Custom TCP

Destination: 6379/6379

Source: 160998252992\*\*\*\*/sg-bp174yoe2ib1sqj5\*\*\*\*

**Note**

The IP addresses, CIDR block, Alibaba Cloud account ID, and security group IDs provided in the preceding table are only for reference. Replace the information with actual values.

### **Case 4: Allow only traffic of specific protocols to access ECS instances**

You may need to restrict the network protocols that can be used to access ECS instances based on your business requirements. For example, you may need to allow traffic only over specific TCP or UDP. ports The Internet Control Message Protocol (ICMP) is used to transfer control messages between IP hosts and routers. Before you can perform specific test operations, such as running the `ping` command on a client to ping your ECS instance, you must add security group rules to allow inbound ICMP access. The following table describes a sample security group rule.

**Rule direction**

**Action**

**Priority**

**Protocol type**

**Port range**

**Authorization object**

Inbound

Allow

1

-   IPv4 network environment: **All ICMP (IPv4)**
    
-   IPv6 network environment: **All ICMP (IPv6)**
    

Destination: -1/-1

The IP address of the client.

**Note**

Enter an IPv4 address or an IPv6 address based on the network environment.

### **Case 5: Allow instances in different security groups to communicate with each other over the internal network**

If you want to share data between ECS instances from different security groups within the same VPC, such as when you want instances in Security Group A to access shared files on instances in Security Group B over FTP, you can add rules to allow mutual access between the security groups over the internal network. The preceding method is more convenient than adding rules to allow access to or from individual IP addresses or CIDR blocks. You do not need to separately configure access control for each instance in each security group.

**Note**

This method is not supported for ECS instances that reside within different VPCs.

-   If your service allows all ECS instances to be deployed on the same VPC, [change the VPC for ECS instances](/help/en/ecs/user-guide/change-the-vpc-of-an-ecs-instance) to utilize the internal network connectivity capability provided by VPC.
    
-   If your service requires ECS instances to be deployed on different VPCs, leverage one of the internal network connectivity solutions provided by Alibaba Cloud, including VPC peering connections, PrivateLink, and Cloud Enterprise Network (CEN). For differences between the solutions, see [Connect VPCs](/help/en/vpc/cross-vpc-interconnection-overview/).
    

-   **Scenario 1:**
    
    If Security Group A and Security Group B belong to the same Alibaba Cloud account, you must specify the ID of Security Group A as the authorization object when you add a rule to Security Group B to allow inbound access from Security Group A. The following table describes a sample security group rule.
    
    **Rule direction**
    
    **Action**
    
    **Priority**
    
    **Protocol type**
    
    **Port range**
    
    **Authorization object**
    
    Inbound
    
    Allow
    
    1
    
    Custom TCP
    
    Destination: 21/21
    
    Source: sg-bp1hv6wvmegs036\*\*\*\*
    
    **Note**
    
    The security group ID provided in the preceding table is only for reference. Replace the security group ID with the actual security group ID.
    
-   **Scenario 2:**
    
    If Security Group A and Security Group B do not belong to the same Alibaba Cloud account, you must specify the ID of Security Group A and the ID of the Alibaba Cloud account to which Security Group A belongs as the authorization object when you add a rule to Security Group B to allow inbound access from Security Group A. The following table describes a sample security group rule.
    
    **Rule direction**
    
    **Action**
    
    **Priority**
    
    **Protocol type**
    
    **Port range**
    
    **Authorization object**
    
    Inbound
    
    Allow
    
    1
    
    Custom TCP
    
    Destination: 21/21
    
    Source: 160998252992\*\*\*\*/sg-bp174yoe2ib1sqj5\*\*\*\*
    
    **Note**
    
    The Alibaba Cloud account ID and the security group ID provided in the preceding table are only for reference. Replace the IDs with the actual IDs.
    

### **Case 6: Restrict access from ECS instances to external websites**

By default, a basic security group allows all outbound access. To allow ECS instances in a basic security group to access only specific websites, you can use the security group as a whitelist and add a Deny rule that denies all outbound access and then Allow rules that allow outbound access to the IP addresses of the websites.

**Note**

Take note of the following items:

-   After multiple rules match a request based on the corresponding protocols, port ranges, and authorization objects, the request is matched against the priorities and actions of the rules to determine a single rule to apply. No session is established until an Allow rule is matched and applied.
    
-   A smaller priority value specifies a higher priority for a security group rule. If two security group rules have the same priority and differ only in the action, the Deny rule takes effect. The priority of the Deny rule must be lower than the priority of the Allow rule. This ensures that the Allow rule takes effect to allow outbound access to the IP addresses of the specified websites.
    

The following table describes sample security group rules.

**Rule direction**

**Action**

**Priority**

**Protocol type**

**Port range**

**Authorization object**

Outbound

Deny

2

All

Destination: -1/-1

Destination: 0.0.0.0/0

Outbound

Allow

1

Custom TCP

Destination: 80/80

Destination: 47.96.XX.XX

Outbound

Allow

1

Custom TCP

Destination: 443/443

Destination: 121.199.XX.XX

The preceding rules indicate that the ECS instances in the security group are allowed to access the HTTP service at 47.96.XX.XX on port 80 and the HTTPS service at 121.199.XX.XX on port 443. Other outbound access requests are denied.
