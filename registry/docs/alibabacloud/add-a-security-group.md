A security group is a virtual firewall that controls the inbound and outbound traffic of the ECS instances in the group. After you add a security group to the whitelist of a Lindorm instance, all ECS instances in the group can access the Lindorm instance. This topic describes how to add a security group.

## Prerequisites

Before you add an ECS security group to a Lindorm whitelist, make sure that the following prerequisites are met:

-   An ECS security group is created. For more information, see [Create a security group](/help/en/ecs/user-guide/create-a-security-group-1#concept-ocl-bvz-xdb).
    
-   The ECS instance and the Lindorm instance use the same network type. If they use a virtual private cloud (VPC), they must be in the same VPC.
    

## Notes

-   You can configure both a whitelist and a security group for an instance. Both the IP addresses in the whitelist and the ECS instances in the security group can access the Lindorm instance.
    
-   After an ECS security group is associated with a Lindorm instance, access is supported **only over a VPC**. Access over the public network or using an Elastic IP address is not supported.
    
-   Each Lindorm instance supports a maximum of three security groups.
    

## Procedure

1.  Log on to the [Lindorm console](https://lindorm.console.alibabacloud.com/cn-hangzhou/clusterhou/cluster).
    
2.  In the upper-left corner of the page, select the region where the instance is deployed.
    
3.  On the **Instances** page, click the ID of the target instance or click **View Instance Details** in the **Actions** column for the instance.
    
4.  In the navigation pane on the left, choose **Access Control**.
    
5.  Click the **Security Groups** tab.
    
6.  Click **Add Security Group**.
    
7.  In the **Add Security Group** dialog box, select the security group that you want to add.
    
8.  Click **OK**.
