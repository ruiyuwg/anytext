Tag inheritance allows a resource to automatically inherit tags from an associated primary resource. This helps ensure tagging consistency and improves operational efficiency. For example, when you tag an Elastic Compute Service (ECS) instance, its associated disks, elastic network interfaces (ENIs), and elastic IP addresses (EIPs) can automatically inherit the same tags.

## **Background information**

To manage tag inheritance, you must use your Alibaba Cloud account or a Resource Access Management (RAM) user that is attached the [AliyunTagAdministratorAccess](/help/en/ram/developer-reference/aliyuntagadministratoraccess) policy. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user) and [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).

## **Limitations**

-   For a list of supported resource types, see the "[Supported resources](#1c7870d06c88f)" section in this topic.
    
-   You can specify a maximum of 50 tag keys to inherit in a single rule.
    
-   If an inherited tag has the same key as an existing tag on the associated resource, the inherited tag will overwrite the existing one. For example, if a primary resource has the tag `cost:shanghai` and its associated resource has `cost:hangzhou`, enabling inheritance for the `cost` key will overwrite the associated resource's tag to `cost:shanghai`.
    
-   For some resource types, you can enable the **Apply to Existing Resources** switch to apply tag inheritance to existing associated resources. For a list of supported resource types, see the **Supports applying to existing resources** column in the the "[Supported resources](#1c7870d06c88f)" section of this topic.
    

## **Procedure**

### **Enable the associated tag inheritance feature**

1.  Go to the [Tag Inheritance of Associated Resources](https://resourcemanager.console.alibabacloud.com/tag-associated-resources) page.
    
2.  Read the instructions, select the option to create a service-linked role, then click **Enable and Configure Rules**.
    
    After you enable the feature, the system creates a service-linked role named AliyunServiceRoleForTag to manage tags on associated resources. For more information, see [Service-linked role for Tag](/help/en/resource-management/security-and-compliance/service-linked-role-for-tag).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8432365571/p930957.png)
    

### **Enable a rule**

1.  On the [Tag Inheritance of Associated Resources](https://resourcemanager.console.alibabacloud.com/tag-associated-resources) page, find the rule that you want to enable and click **Enable Rule** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8099665571/p998498.png)
    
2.  In the **Enable Rule** dialog box, configure the following parameters and click **Enable**.
    
    For example, if you enable this rule for ENIs, an ENI will automatically inherit tags from an ECS instance when attached. The ENI's tags are then kept in sync with the instance's tags. When the ENI is detached, the inherited tags are automatically removed from it.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8099665571/p998499.png)
    
    -   **Applicable Scope**: Specify which tag keys to inherit. You can choose to inherit all tag keys or a subset of them.
        
    -   **Apply to Existing Resources**: If you enable this switch, the rule also applies to existing resources.
        

### **Modify a rule**

1.  On the [Tag Inheritance of Associated Resources](https://resourcemanager.console.alibabacloud.com/tag-associated-resources) page, find the rule that you want to modify and click **Modify Rule** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8099665571/p998602.png)
    
2.  In the **Modify Rule** dialog box, modify the configuration and click **Modify**.
    
    You can configure the **Applicable Scope** or enable or disable the **Apply to Existing Resources** switch.
    

### **Disable a rule**

**Important**

After you disable a tag inheritance rule, associated resources will no longer automatically inherit tags from their primary resources. This may affect resource management and cost allocation that rely on tags.

1.  On the [Tag Inheritance of Associated Resources](https://resourcemanager.console.alibabacloud.com/tag-associated-resources) page, find the rule that you want to disable and click **Disable Rule** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8099665571/p998609.png)
    
2.  In the **Disable Rule** dialog box, click **Disable**.
    

### **Manage rules in batches**

On the [Tag Inheritance of Associated Resources](https://resourcemanager.console.alibabacloud.com/tag-associated-resources) page, you can select multiple resource types and manage their rules in a batch.

-   At the bottom-left of the list, click **Enable Rule** to enable rules for the selected resource types.
    
-   At the bottom-left of the list, click **Disable Rule** to disable rules for the selected resource types.
    
-   At the bottom-left of the list, click **Apply to Existing Resources** to apply tag inheritance to existing associated resources for the selected resource types.
    

### **Disable the tag inheritance feature**

**Important**

After you disable the associated tag inheritance feature, the system no longer manages tags on associated resources. Existing tags on resources are not affected.

1.  In the upper-right corner of the [Tag Inheritance of Associated Resources](https://resourcemanager.console.alibabacloud.com/tag-associated-resources) page, click **Disable**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8099665571/p930975.png)
    
2.  In the message that appears, click **Close**.
    

## **Supported resources**

**Primary resource**

**Associated resource**

**Triggering condition**

**Supports applying to existing resources**

**Rule setting name (SettingName)**

ECS instance

Disks (including data disks and system disks)

-   When a disk is attached to an ECS instance, it automatically inherits the instance's tags and is updated when the instance's tags change.
    
-   When the disk is detached from the instance, the system automatically deletes the inherited tags from the disk.
    

Yes

`rule:AttachDisk-DetachDisk-TagInstance:Ecs-Instance:Ecs-Disk`

ENIs (including primary and secondary ENIs)

-   When an ENI is attached to an ECS instance, it automatically inherits the instance's tags and is updated when the instance's tags change.
    
-   When the ENI is detached from the instance, the system automatically deletes the inherited tags from the ENI.
    

Yes

`rule:AttachEni-DetachEni-TagInstance:Ecs-Instance:Ecs-Eni`

EIP

-   When an EIP is associated with an ECS instance, it automatically inherits the instance's tags and is updated when the instance's tags change.
    
-   When the EIP is disassociated from the instance, the system automatically deletes the inherited tags from the EIP.
    

Yes

rule:AssociateEip-UnassociateEip-TagInstance:Ecs-Instance:Vpc-Eip

Disk

Snapshot

-   When you create a snapshot from a disk, the snapshot automatically inherits the disk's tags.
    
-   When you edit the disk's tags, the snapshot's tags are updated accordingly.
    

Yes

`rule:CreateSnapshot-TagDisk:Ecs-Disk:Ecs-Snapshot`

ApsaraMQ for Kafka instance

Topic

-   When you create a topic in a ApsaraMQ for Kafka instance, the topic automatically inherits the instance's tags.
    
-   When you edit the instance's tags, the topic's tags are updated accordingly.
    

Yes

`rule:CreateTopic-TagKafka:Kafka-Instance:Kafka-Topic`

Consumer group

-   When you create a consumer group in a ApsaraMQ for Kafka instance, the consumer group automatically inherits the instance's tags.
    
-   When you edit the instance's tags, the consumer group's tags are updated accordingly.
    

Yes

`rule:CreateConsumerGroup-TagKafka:Kafka-Instance:Kafka-ConsumerGroup`

Container Service for Kubernetes (ACK) cluster

Security group

When you edit the tags of an ACK cluster, the tags of the security group are updated accordingly.

No

`rule:TagCluster:Cs-Cluster:Ecs-SecurityGroup`

ECS instance

-   When you scale out an ACK managed cluster, the new ECS instances automatically inherit the cluster's tags.
    
-   When you edit the tags of an ACK cluster, the tags of the ECS instances are updated accordingly.
    

No

`rule:CreateInstance-TagCluster:Cs-Cluster:Ecs-Instance`

Classic Load Balancer (CLB) instance

When you edit the tags of an ACK cluster, the tags of the CLB instance are updated accordingly.

No

`rule:TagCluster:Cs-Cluster:Slb-Instance`

EIP

When you edit the tags of an ACK cluster, the tags of the EIP are updated accordingly.

No

`rule:TagCluster:Cs-Cluster:Vpc-Eip`

NAT gateway

When you edit the tags of an ACK cluster, the tags of the NAT gateway are updated accordingly.

No

`rule:TagCluster:Cs-Cluster:Vpc-Natgateway`

Scaling group

When you edit the tags of an ACK cluster, the tags of the scaling group are updated accordingly.

No

`rule:TagCluster:Cs-Cluster:Ess-ScalingGroup`

CLB instance

EIP

-   When an EIP is associated with a CLB instance, it automatically inherits the instance's tags and is updated when the instance's tags change.
    
-   When the EIP is disassociated from the CLB instance, the system automatically deletes the inherited tags from the EIP.
    

Yes

`rule:AssociateEip-UnassociateEip-TagSlbInstance:Slb-Instance:Vpc-Eip`

Network Load Balancer (NLB) instance

EIP

-   When an EIP is associated with an NLB instance through an update operation, it automatically inherits the instance's tags and is updated when the instance's tags change.
    

No

`rule:UpdateLoadBalancerZones-UpdateLoadBalancerAddressTypeConfig-TagNlb:Nlb-Loadbalancer:Vpc-Eip`

Application Load Balancer (ALB) instance

EIP

-   When an EIP is associated with an ALB instance through an update operation, it automatically inherits the instance's tags and is updated when the instance's tags change.
    

No

`rule:UpdateLoadBalancerZones-UpdateLoadBalancerAddressTypeConfig-TagAlb:Alb-LoadBalancer:Vpc-Eip`

Virtual Private Cloud-Internet NAT gateway

EIP

-   When an EIP is associated with an Internet NAT gateway, it automatically inherits the gateway's tags and is updated when the gateway's tags change.
    
-   When the EIP is disassociated from the gateway, the system automatically deletes the inherited tags from the EIP.
    

Yes

`rule:AssociateEipAddress-UnassociateEipAddress-TagVpc:Vpc-Natgateway:Vpc-Eip`

Elastic Container Instance (ECI)-Container group

EIP

-   When an EIP is associated with an elastic container instance, it automatically inherits the instance's tags and is updated when the instance's tags change.
    
-   When the EIP is disassociated from the elastic container instance, the system automatically deletes the inherited tags from the EIP.
    

No

`rule:AssociateEip-UnassociateEip-TagEci:Eci-ContainerGroup:Vpc-Eip`

## Supported regions

Indonesia (Jakarta), Malaysia (Kuala Lumpur), China (Hohhot), Singapore, Germany (Frankfurt), US (Virginia), US (Silicon Valley), China (Hong Kong), China (Qingdao), Japan (Tokyo), China (Zhangjiakou), China (Shenzhen), China (Beijing), China (Shanghai), China (Hangzhou), China (Chengdu), UK (London), China (Heyuan), China (Ulanqab), China (Guangzhou), Philippines (Manila), Thailand (Bangkok), China (Nanjing - Local Region) Closing Down, and China (Fuzhou - Local Region) Closing Down.
