Change which private pool an existing pay-as-you-go instance uses, or remove it from a private pool entirely.

## Use cases

-   **Free up pool capacity for new instances**: Remove existing instances from a private pool so that the freed capacity can be used to create new instances when resources are constrained.
    
-   **Apply a pool to running instances**: Associate existing instances with a private pool from a purchased capacity reservation to improve utilization and reduce wasted reserved capacity.
    
-   **Unblock a capacity reservation purchase**: If a capacity reservation purchase is rejected due to insufficient resources, set the private pool type of your existing instances to **Open**. The instances then count as matchable resources, which allows the capacity reservation purchase to succeed.
    

## Prerequisites

Before you begin, make sure you have:

-   A pay-as-you-go ECS instance (private pool configuration is not supported for subscription instances)
    

## Procedure

1.  Go to the [Instances](https://ecs.console.alibabacloud.com/server/region) page in the ECS console.
    
2.  In the top navigation bar, select the region and resource group of the instance. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png)
    
3.  Click the instance ID. On the **Instance Details** tab, click **All Actions** in the upper-right corner, then search for and click **Configure Private Pool**.
    
4.  In the **Configure Private Pool** dialog box, set **Private Pool Type** to one of the following:
    
    **Private Pool Type**
    
    **Behavior**
    
    **Targeted**
    
    Uses a specific private pool. Enter the ID of a dedicated or open private pool. This ID corresponds to an elastic assurance or an immediate capacity reservation.
    
    **Open**
    
    Matches an open private pool. If you attach tags to the instance that match the tags of an elastic assurance or capacity reservation, the instance uses the corresponding open private pool. If no tags are attached, the system automatically selects an untagged open private pool.
    
    **None**
    
    Removes the instance from all private pools. The instance uses only the public pool.
    
    **Important**
    
    Removing an instance from a private pool may reduce the pool's capacity if the system lacks inventory to replenish it. This applies when you change the type from **Targeted** to **Open**, or from **Targeted** or **Open** to **None**. Proceed with caution.
    
5.  Click **Confirm**.
    

## Tag matching and rematch behavior

If an instance already matches an open private pool by tag and you need to trigger a rematch, do one of the following:

-   [Modify the tags of the instance](/help/en/ecs/user-guide/edit-the-tags-of-an-instance#task-2094089).
    
-   Enable economical mode for the instance.
    
-   Stop and then start the instance.
    

**Note**

Restarting the instance does not trigger a rematch.

**ID takes precedence over tags**

If you specify an open private pool ID and also attach tags that match a different open private pool, the pool with the specified ID is used. For example, if you enter the ID of open private pool A and attach tags matching open private pool B, the instance uses pool A.

## Verify the configuration

After you change the private pool configuration, go to the **Instance Details** tab and check the **Private Pool** field in the **Other Information** section to confirm the change. For details, see [View a private pool](/help/en/ecs/user-guide/view-a-private-pool#task-2100080).
