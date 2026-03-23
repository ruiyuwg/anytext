[Security groups](/help/en/ecs/user-guide/overview-44) act as virtual firewalls for Elastic Compute Service (ECS) instances. By managing security groups and their rules, you can implement fine-grained network security, fencing, and access control.

The following figure shows an example scenario. Two security group rules are configured to allow only authorized IP addresses to remotely manage an instance and to block the instance from accessing high-risk sites on the internet.

-   Inbound rule: Allows a specific IP address (`121.XX.XX.XX`) to access the instance through the Secure Shell Protocol (SSH) (port 22).
    
-   Outbound rule: Denies the instance access to a known high-risk IP address (`XX.XX.XX.XX`).
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0044946571/p1002470.png)

## **Configure a security group for a new instance**

1.  **Go to the instance purchase page:** Go to the [ECS console - Custom Launch](https://ecs-buy.alibabacloud.com) page and select the instance configurations.
    
2.  **Create a new security group:** In the **Network & Security** section, create a basic security group or an enterprise security group and edit its name.
    
3.  **Quickly configure common rules:** When you purchase an instance, the console provides common ports and protocols. You can select the checkboxes to allow traffic from all IP addresses (`0.0.0.0/0`) to the destination ports or to allow traffic that follows the specified protocols to access the instance.
    

> You cannot configure fine-grained rules for a security group when you create it during the instance purchase. You can configure the rules after the instance is created. If you select ports for instance management, such as the common remote connection ports SSH (22) or RDP (3389), during the quick configuration, you must configure the security group rules to allow access only from secure IP addresses after the instance is created.

4.  **Modify, add, or delete security group rules after creation:** After you purchase an instance, you can use the information in [Security group rules](/help/en/ecs/user-guide/security-group-rules) to [add, modify, or delete security group rules](#233050ea35twy) for the new instance.
    

> For information about how to configure security group rules for various business scenarios, such as restricting instance access and defining database security policies, see [Security Group Application Guide and Examples](/help/en/ecs/user-guide/security-groups-for-different-use-cases).

## **Manage security groups**

You can modify the rules of a security group after it is created with an ECS instance. You can also create and manage security groups independently and then associate them with existing ECS instances.

### **Create a security group**

#### **Console**

1.  Go to the [ECS console - Security Groups](https://ecs.console.alibabacloud.com/securityGroup) page and click **Create Security Group**.
    
2.  Set the security group name and Virtual Private Cloud.
    
3.  For the Security group type, select **Basic Security Group** or **[Enterprise Security Group](/help/en/ecs/user-guide/basic-security-groups-and-advanced-security-groups)**.
    
4.  After you [add security group rules](#233050ea35twy), click **OK**.
    

#### **API**

Call [CreateSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createsecuritygroup) to create a security group.

> If no rules are configured for a newly created basic security group, it allows traffic from other ECS instances within the same security group by default, denies all other inbound traffic, and allows all outbound traffic.

### **Add, modify, or delete security group rules**

A [security group rule](/help/en/ecs/user-guide/security-group-rules#title-0ni-i3p-j3c) defines the conditions that network traffic must meet to be allowed inbound to or outbound from a security group. When you configure a rule, you must specify parameters such as the traffic direction, destination, and [priority](/help/en/ecs/user-guide/security-group-rules#855464eeabfeg). Because security group rules are stateful, you only need to configure an inbound rule, and the security group automatically allows the corresponding outbound response traffic.

#### **Console**

1.  Go to the [ECS console - Security Groups](https://ecs.console.alibabacloud.com/securityGroup) page and click the ID of the target security group to open its details page.
    
2.  Configure security group rules.
    
    -   **Add a rule:** On the details page of the target security group, select a rule direction and click **Add Rule**.
        
    -   **Modify a rule:** On the details page of the target security group, locate the destination rule in the **Rules** area and click **Edit** in the **Actions** column.
        
    -   **Delete a rule:** On the details page of the security group, in the **Rules** area, find the rule to delete and click **Delete** in the **Actions** column.
        

#### **API**

-   Call [AuthorizeSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-authorizesecuritygroup) to add an inbound rule.
    
-   Call [AuthorizeSecurityGroupEgress](/help/en/ecs/developer-reference/api-ecs-2014-05-26-authorizesecuritygroupegress) to add an outbound rule.
    
-   Call [ModifySecurityGroupRule](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifysecuritygrouprule) to modify the inbound rule.
    
-   Call [ModifySecurityGroupEgressRule](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifysecuritygroupegressrule) to modify the outbound rule.
    
-   Call [RevokeSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-revokesecuritygroup) to delete the inbound rule.
    
-   Call [RevokeSecurityGroupEgress](/help/en/ecs/developer-reference/api-ecs-2014-05-26-revokesecuritygroupegress) to delete an outbound rule.
    

> At the same priority level, deny rules take precedence. For [some specific network traffic](/help/en/ecs/user-guide/security-group-rules#492ef4fa87rdz), security groups allow the traffic by default.

**Warning**

-   To reduce security risks in your production environment, configure security group rules based on the principle of least privilege (whitelist). Avoid allowing access from all sources (do not use 0.0.0.0/0 or ::/0) for high-risk scenarios such as logging on to or managing ECS instances.
    
-   Avoid modifying security groups in a production environment directly. You can first [clone a security group](#0146b21260qal), test the changes in a staging environment, and ensure that instance traffic is normal. Then, you can modify the security group rules in the production environment.
    

### **Associate a security group with an instance**

When you associate a security group with an ECS instance, you are actually associating the security group with the primary network interface controller (NIC) of the ECS instance.

#### **Console**

1.  Go to the [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region) page and click the ID of the target instance to open its details page.
    
2.  On the instance details page, switch to the **Security Groups** tab and click **Change Security Groups** to add or remove a security group for the instance. If multiple security groups are associated with the instance, their rules are merged and applied in order of priority.
    

#### **API**

-   Call [ModifyInstanceAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstanceattribute#doc-api-Ecs-ModifyInstanceAttribute) to set multiple security groups for an ECS instance.
    
-   Call [JoinSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-joinsecuritygroup) to add an ECS instance to a specified security group.
    
-   Call [LeaveSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-leavesecuritygroup) to remove an ECS instance from a specified security group.
    

### **Associate a security group with a secondary ENI**

Security groups are applied to the [Elastic Network Interfaces (ENIs)](/help/en/ecs/user-guide/eni-overview) of an ECS instance. If an instance has multiple ENIs, you can associate different security groups with the ENIs and configure different security group rules to implement granular control and service isolation for internal network traffic.

#### **Console**

1.  Go to the [ECS console - Elastic Network Interfaces](https://ecs.console.alibabacloud.com/networkInterfaces) page and click the ID of the target secondary ENI to open its details page.
    
2.  Click **Change Security Groups**, select the security groups to associate, and click **OK**.
    

#### **API**

-   Call [JoinSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-joinsecuritygroup) to add an elastic network interface (ENI) to a specified security group.
    
-   Call [LeaveSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-leavesecuritygroup) to remove an elastic network interface from a specified security group.
    
-   You can use [ModifyNetworkInterfaceAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifynetworkinterfaceattribute) to specify multiple security groups for an elastic network interface.
    

### **Use prefix lists**

To grant access to multiple IP address segments, use prefix lists for centralized management. This simplifies security group rule configuration and improves batch maintenance efficiency.

#### **Console**

1.  Create a prefix list:
    
    1.  Go to [ECS console - Prefix List](https://ecs.console.alibabacloud.com/prefixList/).
        
    2.  Select the target tab as needed, and then click **Create Prefix List**.
        
        > For a security group that references a prefix list, the number of rules is calculated based on the maximum number of entries set for the list.
        
2.  In the **Rules** section on the details page of the target security group, add or modify a rule:
    
    1.  Set **Source** to Prefix List and then select the target prefix list.
        

#### **API**

-   Call [CreatePrefixList](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createprefixlist) to create a prefix list. After the list is created, call [DescribePrefixListAttributes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeprefixlistattributes) to query the details of the prefix list.
    
-   Call [AuthorizeSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-authorizesecuritygroup) to add an inbound rule that grants access from a prefix list by setting the SourcePrefixListId parameter.
    
-   Call [AuthorizeSecurityGroupEgress](/help/en/ecs/developer-reference/api-ecs-2014-05-26-authorizesecuritygroupegress) to add an outbound rule that grants access to a prefix list by setting the DestPrefixListId parameter.
    

### **Clone a security group**

When you need to create multiple security groups with the same configuration in batches, or perform cross-region or cross-network type replication and backup, you can use the Clone Security Group feature. After a successful clone, the new security group appears in the security group list of the destination region.

1.  Go to [Security Groups](https://ecs.console.alibabacloud.com/securityGroup) and click **Clone Security Group** in the **Operation** column of the target security group.
    
2.  Configure the destination security group. The new security group appears in the security group list of the destination region after it is cloned.
    
    -   **VPC ID**: The network type for the new security group. Select the classic network or a specific VPC.
        
    -   **Retention Rule**: Select this option to retain all rules in the original security group. Rules with a priority greater than 100 are adjusted to 100.
        
    -   **Copy Tags of Current Security Group**: Select whether to copy the tags from the source security group to the new security group.
        

### **Check for redundant rules**

The security group health check feature can detect redundant rules. A rule (Rule A) is redundant if its conditions are completely covered by another rule (Rule B) and its priority is not higher than the priority of Rule B. Redundant rules consume the security group rule quota. You should remove them periodically to avoid being unable to add new rules because the rule limit is reached.

1.  Go to [ECS console - Security groups](https://ecs.console.alibabacloud.com/securityGroup). On the details page of the target security group, in the **Rules** section, click **Health Check**.
    
2.  In the **Health Check** dialog box, select the redundant rules and click **Are you sure that you want to delete the preceding monitoring rules**.
    

### **Import or export rules**

You can use the import and export features to back up, recover, or migrate rules.

#### **Import rules**

Imported security group rules must meet the following requirements:

-   File format: JSON or CSV.
    
-   Number of rules: A maximum of 200 rules can be imported at a time.
    
-   Rule priority: 1 to 100. Rules with a priority higher than 100 are ignored.
    

> When you import rules across regions, security group rules that authorize security groups or prefix lists are not supported. Security group rules that specify port lists for the port range are also not supported.

1.  Go to [ECS console - Security Group](https://ecs.console.alibabacloud.com/securityGroup). On the security group details page, go to the **Rules** section and click **Import Security Group Rule**.
    
2.  On the **Import Security Group Rule** page, click **Select File**, select a local JSON or CSV file, and click **Confirm**.
    

> If the import fails, hover over the warning icon to view the reason.

#### **Export rules**

Go to [ECS console - Security Groups](https://ecs.console.alibabacloud.com/securityGroup). On the target security group's product page, click **Export** in the **Rules** area. The exported rule file is named in the following format:

-   JSON format: ecs\_${region\_id}\_${groupID}.json.
    
    > Example: If the Region ID is `cn-qingdao` and the security group ID is `sg-123`, the exported file is named `ecs_cn-qingdao_sg-123.json`.
    
-   CSV format: ecs\_sgRule\_${groupID}\_${region\_id}\_${time}.csv.
    
    > Example: If the Region ID is `cn-qingdao`, the security group ID is `sg-123`, and the export date is `2020-01-20`, the exported file is named `ecs_sgRule_sg-123_cn-qingdao_2020-01-20.csv`.
    

### **Security group snapshots**

Security group snapshots can automatically back up security group rules. When a security group rule changes, the system automatically creates a snapshot. You can use snapshots to recover security group rules from a specific point in time to prevent rule loss due to accidental operations.

**Important**

-   After a security group rule changes, the system creates a snapshot after 5 minutes. If multiple changes occur within 5 minutes, the system creates only one snapshot based on the rules before the first change.
    
-   Security group snapshots use Object Storage Service (OSS) to store backup data. OSS is a pay-as-you-go service. Using security group snapshots incurs corresponding OSS storage and request fees.
    

#### **Create a snapshot policy**

1.  On the [Security Group Snapshots](https://ecs.console.alibabacloud.com/securityGroupSnapshotPolicy) page, click **Create Security Group Snapshot Policy**.
    
2.  In the **Create Security Group Snapshot Policy** dialog box, configure the following settings:
    
    -   **Policy Name**: Enter a name for the snapshot policy.
        
    -   **Policy Status**: The status of the policy. Valid values are **Enable** and **Disable**. Snapshots are created for the associated security groups only if the policy is enabled.
        
    -   **Snapshot Retention Period**: The number of days to retain snapshots. The value can be from 1 to 30 days, with a default of 1 day. Snapshots are automatically deleted after the retention period expires.
        
    -   **OSS Storage Configuration**: Specifies the OSS bucket for storing snapshot data. If a bucket is not specified, the system uses the default bucket.
        
3.  Click **OK**.
    
    > When you create a snapshot policy for the first time, the system prompts you to grant the service-linked role (SLR) `ALIYUNSECURITYGROUPSNAPSHOTROLE` permission to access the OSS bucket. If this role already exists, you do not need to grant the permission again.
    

#### **Associate a security group with a snapshot policy**

After you create a snapshot policy, you must associate it with a security group to start backing up the security group rules.

> When you associate a security group with a snapshot policy, the system immediately creates a snapshot for that security group.

1.  Go to [ECS console - Security Group Snapshots](https://ecs.console.alibabacloud.com/securityGroupSnapshotPolicy), find the target snapshot policy, and click **Associate Security Group** in the **Actions** column.
    
2.  In the **Bind Security Group** dialog box, select the security groups.
    
    > A snapshot policy can be associated with up to 10 security groups. A security group can be associated with multiple snapshot policies that have different policies.
    
3.  Click **Confirm** to complete the association.
    

#### **Recover rules from a snapshot**

**Important**

The recovery operation takes effect immediately. All current rules are completely overwritten by the rules in the snapshot. The recovery cannot be undone.

1.  Go to the [ECS console - Security Groups](https://ecs.console.alibabacloud.com/securityGroup) page and click the ID of the target security group to open its details page.
    
2.  On the security group details page, switch to the **Snapshots** tab, and in the **Actions** column for the target snapshot, click **Restore Snapshot**.
    
3.  In the **Restore Security Group** dialog box, confirm the restore details.
    
    -   On the **Inbound** and **Outbound** tabs, you can compare the **Current Security Group Rules** with the **Restored Security Group Rules**.
        
    -   Confirm that the information is correct and click **OK**.
        

### **Delete a security group**

**Warning**

Deleting a security group is an irreversible operation that permanently deletes all rules in the security group. Before you perform this operation, make sure to back up the relevant configurations.

#### **Console**

1.  Go to [ECS Console - Security Group](https://ecs.console.alibabacloud.com/securityGroup) and click **Delete** in the **Operation** column of the target security group.
    
2.  In the **Delete Security Group** dialog box, confirm the details and click **Confirm**.
    
    If the security group is not associated with any ECS instances or elastic network interfaces (ENIs), but the **Delete Security Group** dialog box still displays **Non-deletable**, you can click **Force-delete**.
    

#### **API**

Call [DeleteSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletesecuritygroup) to delete a security group.

A security group cannot be deleted in the following scenarios:

-   It is associated with an ECS instance or ENI. You must remove the association first.
    
-   It is authorized by another security group rule. You must delete the authorization rule first.
    
-   [Managed security groups](/help/en/ecs/user-guide/managed-security-groups#concept-1989322) are view-only and cannot be deleted.
    
-   Deletion protection is enabled. Disable deletion protection and then try again. If you cannot disable deletion protection, you cannot delete the security group.
    
    > If you receive the `InvalidOperation.DeletionProtection` error code when you call the [DeleteSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletesecuritygroup)**Deletion Protection** message in the console, this indicates that deletion protection is enabled for the security group.
    

## **Network communication between instances in a security group**

By default, ECS instances within the same basic security group can communicate with each other over the internal network. To improve security, you can change the internal connectivity policy to internal isolation to prohibit internal network communication between instances.

> [Enterprise security groups](/help/en/ecs/user-guide/basic-security-groups-and-advanced-security-groups) do not support modifying the internal access policy.

-   If an instance is associated with multiple security groups, the instances can communicate with each other over the internal network as long as the internal connectivity policy of any of the security groups is set to allow internal communication.
    
-   If the internal connectivity policy of a security group is set to internal isolation, you can configure security group rules to allow communication between instances.
    

### **Console**

1.  Go to the [ECS console - Security Groups](https://ecs.console.alibabacloud.com/securityGroup) page and click the ID of the target security group to open its details page.
    
2.  In the **Basic Information** section on the **Security Group Details** page, click **Modify Internal Access Control Policy**.
    
3.  The internal network connectivity policy for the security group is set to **Internal Isolation**.
    

### **API**

Call the [ModifySecurityGroupPolicy](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifysecuritygrouppolicy) operation to modify the intra-group connectivity policy of a basic security group.

## **Network communication between instances in different security groups**

When you set another security group as the authorization object in a rule, you can allow instances in the other security group to access instances in the current security group over the internal network. For example, in the figure, after Security Group B is set as the authorization object for an inbound rule of Security Group A, instances in Security Group B can access instances in Security Group A over the internal network.

> [Enterprise security group](/help/en/ecs/user-guide/basic-security-groups-and-advanced-security-groups) rules do not support adding rules where the authorization object is a security group.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0044946571/p1002472.png)

### **Console**

1.  Go to the [ECS console - Security Groups](https://ecs.console.alibabacloud.com/securityGroup) page and click the ID of the target security group to open its details page.
    
2.  On the target **Security Group Details** page, select the rule direction and click **Add Rule**.
    
3.  On the **Create Security Group Rule** page, set **Source** to **Security Group** or **Cross-account Security Group**.
    

### **API**

-   Call [AuthorizeSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-authorizesecuritygroup) to set \`SourceGroupId\` in a security group inbound rule to authorize the created security group.
    
-   Call [AuthorizeSecurityGroupEgress](/help/en/ecs/developer-reference/api-ecs-2014-05-26-authorizesecuritygroupegress) to set the DestGroupId in an outbound rule of the security group to grant permissions to the created security group.
    

## **Production application recommendations**

-   Security group planning
    
    -   **Single responsibility:** Use separate security groups for different business scenarios, such as web, database, and cache services.
        
    -   **Environment isolation:** Keep security groups for production and staging environments separate. Do not mix them.
        
    -   **Naming convention:** Use the format `environment-application-purpose-sg`, such as `prod-mysql-db-sg`.
        
-   Rule configuration
    
    -   **Least privilege:** Open only necessary ports to necessary sources. Avoid opening management ports such as SSH (22) and RDP (3389) to `0.0.0.0/0`. Always restrict access to trusted, fixed IP addresses.
        
    -   **Default deny:** Deny all inbound traffic by default. Add inbound rules to allow access from specific ports and sources only when necessary.
        
    -   **Rule priority conflicts:** When an instance is associated with multiple security groups, a low-priority allow rule is overwritten by a high-priority deny rule. When troubleshooting network connectivity issues, check all associated security groups.
        
-   Change management
    
    -   **Avoid directly modifying the production environment:** Directly modifying a security group in a production environment is a high-risk operation. First, [clone the security group](#0146b21260qal) and test it in a staging environment. After you confirm that instance traffic is normal, you can modify the security group rules in the production environment.
        

## Billing rules

Security groups are free of charge.

## **Limits**

**Limit item**

**Basic security group limits**

**Enterprise security group limits**

Maximum number of security groups per Alibaba Cloud account in a region

Use the quota ID `q_security-groups` to view or request an increase for the corresponding quota. For more information, see [View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l).

Same as basic security groups

Number of security groups that can be associated with a single Elastic Network Interface (ENI)

10

Same as basic security groups

Maximum total number of rules (inbound and outbound) for all security groups associated with a single ENI

1,000

Same as basic security groups

Number of rules in a single security group where the authorization object is another security group

20

0\. In an enterprise security group, you cannot add rules where the authorization object is another security group. You also cannot use an enterprise security group as the authorization object in other security group rules.

Number of VPC-type ECS instances that a single VPC-type security group can contain

Not fixed. The number is affected by the number of private IP addresses the security group can contain.

Unlimited

Number of private IP addresses that a single VPC-type security group can contain for a single Alibaba Cloud account in a specific region

6,000

**Note**

-   The number of used IP addresses is calculated based on the number of private IP addresses on the ENIs (including the primary and secondary ENIs of an instance) associated with a security group. This count is the sum of all IP address types, such as primary private IPv4, IPv6, secondary private IPv4, IPv4 prefixes, and IPv6 prefixes.
    
-   If you have more than 6,000 private IP addresses to access each other over the internal network, add the ECS instances which use the private IP addresses, to multiple security groups, and configure security group rules to allow access between the security groups.
    
-   You can view the maximum number of private IP addresses in a basic security group in a VPC in the [Quota Center](https://quotas.console.alibabacloud.com/products/ecs/quotas?spm=a2c4g.11186623.0.0.376656addmG73f) by using the quota ID `q_vpc-normal-security-group-ip-count`.
    

65,536

**Note**

The number of used IP addresses represents the total number of ENIs associated with a security group, including both primary and secondary network interfaces of an instance.

Public access port

For security reasons, port 25 of ECS instances is restricted by default. Use a Secure Sockets Layer (SSL) encrypted port, usually port 465, to send emails.

Same as basic security groups

## **FAQ**

#### **What do I do if I cannot ping an instance?** 

Failure to ping an ECS instance is usually caused by the removal of the default inbound security group rule for the ICMP protocol, which is used by the ping command. You can use the security group rule diagnostic tool to quickly identify the problem.

1.  Go to the [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region) page, find the target instance, and note its ID.
    
2.  Click Diagnostics to go to self-service troubleshooting page, and switch to the target region.
    
3.  Select **Security Group Rule Diagnosis** and click **Start Diagnosis**.
    
4.  Select the recorded instance ID and the corresponding NIC, and then click **Start Detection**.
    
    > In most cases, an instance has only one NIC.
    
5.  View the check result. If the result indicates that the ICMP protocol is blocked, click **Open Port**.
    
    > In addition to ICMP, the diagnostic tool also checks whether the following common ports are allowed: 80, 443, 22, 3389, and 8080.
    
6.  If you still cannot ping the instance, see [Troubleshoot a failure to ping the public IP address of an ECS instance](/help/en/ecs/troubleshooting-for-ping-attempts-to-pass-the-server-and-port-disconnection) for further troubleshooting steps.
    

#### **What do I do if I cannot connect to an instance or access a service?** 

Failure to access a service is usually because the required port is not allowed by the security group. You can use the security group rule diagnostic tool to quickly identify the problem.

1.  Go to the [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region) page, find the target instance, and note its ID.
    
2.  Click Diagnostics to go to self-service troubleshooting page, and switch to the target region.
    
3.  Select **Security Group Rule Diagnosis** and click **Start Diagnosis**.
    
4.  Select the instance ID of the record, its corresponding Elastic Network Interface (ENI), and the service port for diagnosis, and then click **Start Detection** to view the diagnosis results.
    
    -   **One-click detection:** Applies to ports `80`, `443`, `22`, `3389`, or `8080`.
        
    -   **Custom detection:** Applies to all other ports. You need to enter the following information:
        
        -   Source address: Enter the public IP address of the local machine or client.
            
        -   Destination port: Enter the port number used by the service.
            
        -   Protocol Type: Select the protocol corresponding to the port.
            

#### **What is the difference between security groups and network ACLs (NACLs)?**

**Attribute**

**Security group**

**Network ACL**

Level

ENI

Subnet level

State

Stateful

Stateless

Purpose

Fine-grained firewall for instances

Border access control for subnets

#### **How do I change or add a security group for the primary NIC of an instance?**

Security groups take effect on the [Elastic Network Interfaces (ENIs)](/help/en/ecs/user-guide/eni-overview) of an ECS instance. The security group configured on the Security Groups tab of the ECS instance details page is the security group for the instance's primary NIC. To change the security group that is associated with the primary NIC of the instance, see [Associate a security group with an instance](#27b7f02b27u7s).

#### After setting a security group rule to deny all, how do I allow access from internal Alibaba Cloud services?

Add an inbound security group rule to allow access from the `100.64.0.0/10` address range. Alibaba Cloud uses this reserved address range to perform health checks and availability monitoring for instances.

## **References**

-   [Security Group Rule Check](/help/en/ecs/user-guide/safety-set-of-rules-to-detect)
    
-   [How to prevent RAM users from creating high-risk security group rules](/help/en/ecs/user-guide/prohibit-ram-users-from-creating-high-risk-security-group-rules)
    
-   [Automatically auditing and remediating security group rule compliance](/help/en/ecs/user-guide/automatically-audit-the-compliance-of-security-group-rules)
    
-   [Security group application guidance and examples](/help/en/ecs/user-guide/security-groups-for-different-use-cases)
    
-   [Common Ports](/help/en/ecs/user-guide/common-ports)
    
-   [Troubleshoot connection failures to a Linux instance](/help/en/ecs/troubleshooting-guidelines-when-you-cannot-remotely-log-on-to-a-linux-instance-through-ssh)
    
-   [Troubleshoot remote connection issues with your Windows instance](/help/en/ecs/solution-to-failure-in-remote-connection-to-windows-instance)
    
-   [Troubleshoot ineffective security group rules for an ECS instance](/help/en/ecs/user-guide/the-security-group-rules-for-the-ecs-instance-are-not-applied)
    
-   [Troubleshoot a failure to ping the public IP address of an ECS instance](/help/en/ecs/troubleshooting-for-ping-attempts-to-pass-the-server-and-port-disconnection)
