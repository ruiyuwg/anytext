When your workload changes, you can scale an ApsaraDB for MongoDB standalone instance up or down by upgrading or downgrading the instance specifications (CPU and memory) or increasing the storage capacity.

## Prerequisites

Before you begin, make sure that you have:

-   Reviewed the [configuration change fees](/help/en/mongodb/product-overview/configuration-change-fees#concept-1426323)
    
-   Scheduled the change during off-peak hours
    
-   Configured your application to support automatic reconnection
    

## Supported changes

**Configuration**

**Changeable**

**Details**

**Specifications** (CPU, memory)

Upgrade or downgrade

See [Instance types](/help/en/mongodb/product-overview/instance-types/#concept-wrp-kg4-tdb).

**Storage**

Increase only

Storage capacity cannot be decreased. To reduce storage, create a new instance and migrate your data. See [Other configuration change scenarios and methods](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#section-akn-836-bi4).

**Node count, architecture, storage engine**

Not supported

For example, you cannot convert a standalone instance to a replica set instance. Create a new instance instead. See [Other configuration change scenarios and methods](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#section-akn-836-bi4).

## Impacts

-   **Brief disconnections:** One or two transient disconnections may occur, each lasting approximately 30 seconds. To minimize disruption, set **Switching Time** to **Switch Within Maintenance Window**.
    
-   **No data loss:** Configuration changes do not cause data loss.
    
-   **Duration:** The time required to complete a configuration change depends on factors such as network conditions, task queue status, and data size.
    
-   **Minor version update:** If your instance runs an expired or unmaintained minor version, ApsaraDB for MongoDB automatically updates it to the latest version when the configuration change is applied.
    

## Procedure

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) page. In the top navigation bar, select the resource group and region, and then click the target instance ID.
    
2.  In the **Specification Information** section of the **Basic Information** page, click the button that matches your billing method:
    
    **Billing method**
    
    **Button**
    
    Subscription
    
    **Upgrade** or **Downgrade**
    
    Pay-as-you-go
    
    **Change Configurations**
    
3.  On the **Upgrade/Downgrade** page, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Specifications**
    
    The target instance type. See [Instance types](/help/en/mongodb/product-overview/instance-types/#concept-wrp-kg4-tdb).
    
    **Storage**
    
    The new storage capacity. Must be greater than or equal to the current value.
    
    **Note**
    
    This parameter is not displayed when you downgrade a subscription instance.
    
    **Switching Time**
    
    When the change takes effect. Options:
    
    -   **Switch Immediately After Data Migration** -- The change takes effect as soon as data migration is complete.
        
    -   **Switch Within Maintenance Window** -- The change takes effect during the next maintenance window. To modify the maintenance window, click **\[Modify\]** next to **Switch Within Maintenance Window**. Alternatively, go to the **Basic Information** page, find **Maintenance Window** in the **Specification Information** section, and click **Edit**. For details, see [Specify a maintenance window](/help/en/mongodb/user-guide/specify-a-maintenance-window#task-tng-h4t-j2b).
        
    
4.  Read the Terms of Service, click **Buy Now**, and complete the payment.
    

## Result

After you submit the change, the instance status changes to **Changing Configuration**. When the status returns to **Running**, the new configuration is in effect.

## API reference

**API**

**Description**

[ModifyDBInstanceSpec](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancespec)

Changes the specifications or storage capacity of a standalone or replica set instance.
