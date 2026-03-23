Upgrade or downgrade specifications, adjust storage capacity, or change the node count of an ApsaraDB for MongoDB replica set instance to match your workload.

## Limitations

-   To change the number of **Read-only Nodes** on a **Classic Network** instance, first enable public access or switch to a virtual private cloud (VPC).
    
-   Storage can only be increased, not reduced. To reduce storage, create a new instance and migrate your data. For more information, see [Other configuration change scenarios and methods](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#section-akn-836-bi4).
    
-   Instance type and storage class cannot be changed. For example, a replica set instance cannot be converted to a sharded cluster instance. To switch instance type or storage class, create a new instance. For more information, see [Other configuration change scenarios and methods](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#section-akn-836-bi4).
    

## Impacts

Before you change instance configurations, review the following impacts:

-   **Transient disconnections:** A configuration change may cause one or two transient disconnections, each lasting approximately 30 seconds. Schedule changes during off-peak hours, and make sure your application supports automatic reconnection.
    
-   **Storage-only scale-out (no interruptions):**
    
    -   **Local disks (general-purpose or dedicated):** If you only increase storage and the host machine has enough resources, the scale-out runs locally without migration or switchover. The change takes effect immediately with no connection interruptions, regardless of the **Switching Time** setting.
        
    -   **Cloud disks:** If you only increase storage, the change takes effect immediately with no connection interruptions, regardless of the **Switching Time** setting.
        
-   **Minor version upgrade:** When you change the configurations of an instance that uses local disks, the system, by default, upgrades the minor database version to the latest version.
    
-   **No data loss:** Configuration changes do not cause data loss.
    

## Change instance configurations

1.  Go to the [MongoDB replica set instances](https://mongodb.console.alibabacloud.com/replicate/instances) page. At the top of the page, select a resource group and a region, and then click the target instance ID.
    
2.  In the **Specification Information** section, open the configuration change page:
    
    -   **Subscription instance:** In the upper-right corner, click **Upgrade** or **Downgrade**. If you click **Downgrade**, confirm the refund notice in the dialog box that appears.
        
    -   **Pay-as-you-go instance:** In the upper-right corner, click **Change Configurations**.
        
3.  On the configuration change page, set the following parameters.
    
    **Note**
    
    For storage-only scale-outs, the change takes effect immediately regardless of the **Switching Time** setting. For details, see [Impacts](#section-69w-h5p-app).
    
    **Parameter**
    
    **Description**
    
    **Active-standby Nodes**
    
    Select the number of primary and secondary nodes. Valid values: **Three Nodes Replicaset** (downgrade not supported), **Five Nodes Replicaset** (can downgrade to **Three Nodes Replicaset**), and **Seven Nodes Replicaset** (can downgrade to **Three Nodes Replicaset** or **Five Nodes Replicaset**).
    
    **Read-only Nodes**
    
    Select the number of read-only nodes. Valid values: 0 to 5.
    
    **Category**
    
    Select **General-purpose** or **Dedicated**.
    
    **Specifications**
    
    Select the target specifications. For available options, see [Instance types](/help/en/mongodb/product-overview/instance-types/#concept-wrp-kg4-tdb).
    
    **Storage**
    
    Select the new storage capacity. The value applies to each node individually, not the total across all nodes. Storage cannot be reduced. To reduce storage, see [Limitations](#section-lqr-nhm-8sg).
    
    **Switching Time**
    
    Select when the configuration change takes effect. **Switch Immediately After Data Migration**: the change applies as soon as data migration completes. **Switch Within Maintenance Window**: the change applies during the next maintenance window. To modify the maintenance window, click **Modify** next to **Switch Within Maintenance Window**, and then click **Edit** next to **Maintenance Window** in the **Specification Information** section. For more information, see [Set a maintenance window](/help/en/mongodb/user-guide/specify-a-maintenance-window#task-tng-h4t-j2b).
    
4.  Read the Terms of Service, click **Buy Now**, and complete the payment.
    

## Verify the result

After you submit the configuration change, the instance status changes to **Modifying**. When the status returns to **Running**, the configuration change is complete.

## Billing

For billing details, see [Configuration change fees](/help/en/mongodb/product-overview/configuration-change-fees#concept-1426323).

## API reference

**API**

**Description**

[ModifyDBInstanceSpec](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancespec)

Changes the specifications or storage capacity of a standalone or replica set instance.
