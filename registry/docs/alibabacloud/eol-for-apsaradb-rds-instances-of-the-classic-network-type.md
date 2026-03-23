Alibaba Cloud is phasing out ApsaraDB RDS instances that use the classic network. This affects RDS instances running MySQL, SQL Server, and PostgreSQL. Switch your affected instances to a virtual private cloud (VPC) before the service shutdown date.

## Summary

-   **What is changing:** RDS instances on the classic network are reaching end-of-sale.
    
-   **Who is affected:** RDS instances that use the classic network, including instances with hybrid access mode enabled.
    
-   **Action required:** Switch affected instances from the classic network to a VPC.
    

## Timeline

**Date**

**What happens**

October 30, 2024 (00:00)

Classic network and hybrid access mode instances can no longer be renewed, upgraded, downgraded, or cloned. Existing subscription instances on the classic network cannot be renewed.

February 28, 2025 (00:00)

Classic network instances are forcefully stopped and workloads are interrupted. For hybrid access mode instances, the classic network endpoint is released and classic network workloads are interrupted. VPC endpoints are retained.

VPC instances are not affected by either phase.

## Check whether your instances are affected

Your instance is affected if it meets either of these conditions:

-   The instance uses the classic network type.
    
-   The instance has hybrid access mode enabled. In hybrid access mode, both the VPC endpoint and the classic network endpoint are retained.
    

VPC instances are not affected.

### Check in the console

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page.
    
2.  In the top navigation bar, select a region.
    
3.  In the **Network Type** column, select **Classic Network** and click **OK**.
    

All classic network instances in the selected region are displayed.

![Filter by classic network type](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7522091271/p824451.png)

### Check by using the API

Call the `DescribeDBInstances` operation. Specify a region and set the `InstanceNetworkType` parameter to `Classic`. This returns all classic network RDS instances in the specified region.

For more information, see [DescribeDBInstances](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describedbinstances-mysql).

**Important**

If you already switched your instance to VPC but still receive a classic network discontinuation notification, the classic network endpoint in hybrid access mode was not released. Your instance remains subject to classic network restrictions, such as the inability to renew the subscription or change specifications. To resolve this, go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page, click your instance ID, and on the **Database Connection** page, manually release the classic network endpoint or modify its expiration time.

## Switch to VPC

To avoid service interruption, switch the network type of your RDS instance from the classic network to a VPC.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page.
    
2.  In the top navigation bar, select the region where your instance resides.
    
3.  Click the instance ID to go to the instance details page.
    
4.  In the left-side navigation pane, click **Database Connection**.
    
5.  Click **Switch to VPC**.
    

Choose one of the following methods:

-   **Direct change:** Immediately switch the network type from the classic network to VPC without retaining the classic network endpoint. For more information, see [Change the network type of an RDS instance](/help/en/rds/apsaradb-rds-for-sql-server/change-the-network-type-of-an-apsaradb-rds-for-sql-server-instance).
    
-   **Smooth change:** Switch the network type by enabling hybrid access mode. The classic network endpoint is temporarily retained, and a VPC endpoint is generated. Use both endpoints during the transition while you update your application configurations to the new VPC endpoint. After the transition, delete the classic network endpoint. For more information, see [Configure hybrid access](/help/en/rds/apsaradb-rds-for-sql-server/configure-the-hybrid-access-solution-for-an-apsaradb-rds-for-sql-server-instance).
    

### Impact comparison

**Affected item**

**Direct change**

**Smooth change**

Instance connection

Momentarily disconnected.

Not disconnected.

Internal endpoint

One internal endpoint. The endpoint address stays the same, but the type changes from classic network to VPC.

Two internal endpoints. The classic network endpoint is retained and a VPC endpoint is generated.

Internal network access

After the switch, only VPC instances (such as ECS instances) can access the RDS instance through the internal network.

Both classic network and VPC instances can access the RDS instance. Classic network instances use the classic network internal endpoint. VPC instances use the VPC internal endpoint. After the classic network endpoint expires, only the VPC endpoint is available.

Public endpoint

Not affected.

Not affected.

Internet access

Not affected.

Not affected.

**Important**

If you switched to VPC but cannot renew the subscription or change specifications, the classic network endpoint in hybrid access mode was not released. Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page, click your instance ID, and on the **Database Connection** page, release the classic network endpoint or modify its expiration time.

## See also

-   [EOL notice for Alibaba Cloud ECS instances in the classic network](/help/en/ecs/end-of-sale-announcement-for-ecs-instances-of-the-classic-network-type)
    
-   [Migrate ECS instances from the classic network to a VPC](/help/en/ecs/user-guide/migrate-ecs-instances-from-the-classic-network-to-a-vpc)
