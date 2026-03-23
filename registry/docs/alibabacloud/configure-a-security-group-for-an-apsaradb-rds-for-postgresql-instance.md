You can associate one or more Elastic Compute Service (ECS) security groups with an ApsaraDB RDS for PostgreSQL instance. All ECS instances in the associated security groups are automatically granted access to the RDS instance.

## Background

By default, a newly created RDS instance does not allow external access. To enable access, configure at least one of the following:

-   **IP address whitelist**: Grants access to specific IP addresses or CIDR blocks. For more information, see [Configure an IP address whitelist for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance#concept-sfx-kdg-wdb).
    
-   **Security group**: Grants access to all ECS instances in the associated ECS security group.
    

You can use both methods simultaneously. When both are configured, access is granted to all IP addresses in the whitelists and all ECS instances in the associated security groups.

For more information about ECS security groups, see [Create a security group](/help/en/ecs/user-guide/create-a-security-group-1#concept-ocl-bvz-xdb).

## Prerequisites

-   An ApsaraDB RDS for PostgreSQL instance is created.
    
-   An ECS security group exists with the same network type (VPC or classic network) as the RDS instance.
    

## Limits

**Item**

**Limit**

Maximum security groups per RDS instance

10

Network type

The security group and the RDS instance must use the same network type. Both must be in a VPC, or both must use the classic network.

**Note**: If you change the network type of your RDS instance, all previously configured security groups become invalid. You must configure security groups that match the new network type.

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Whitelist and SecGroup**. On the page that appears, click the **Security Group** tab.
3.  Click **Add Security Group**.
    
    **Note** Security groups followed by a **VPC** tag contain ECS instances that reside in virtual private clouds (VPCs).
    
    ![Security Group](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3680501161/p206787.png)
    
4.  Select the security group that you want to add, and then click **OK**.

## What to do next

[Create an account and a database](/help/en/rds/apsaradb-rds-for-postgresql/create-a-database-and-an-account-on-an-apsaradb-rds-for-postgresql-instance#concept-njz-1gg-wdb)

## Related operations

**Operation**

**Description**

[DescribeSecurityGroupConfiguration](/help/en/rds/api-query-ecs-security-groups-to-which-an-apsaradb-for-rds-instance-is-added#doc-api-Rds-DescribeSecurityGroupConfiguration)

Queries details about the ECS security groups that are associated with an instance.

[ModifySecurityGroupConfiguration](/help/en/rds/api-change-the-ecs-security-group-for-an-apsaradb-for-rds-instance#doc-api-Rds-ModifySecurityGroupConfiguration)

Modifies details about the ECS security groups that are associated with an instance.
