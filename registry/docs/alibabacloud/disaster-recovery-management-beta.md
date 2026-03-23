The disaster recovery management feature provides multi-availability zone (AZ) deployment for instances with separated storage and compute. This ensures that data remains accessible if a zone becomes unavailable. In a multi-zone deployment, the underlying data storage uses zone-redundant storage for higher reliability. This topic describes the fundamentals of disaster recovery management.

## **Comparison of zone types**

**Metric**

**Single zone**

**Two-zone**

**Three-zone**

**Disaster recovery capability**

Cross-data center disaster recovery is not supported.

Can withstand a single zone failure.

Can withstand two concurrent zone failures.

**Data storage**

Uses a data redundancy mechanism within a single AZ. Your data is stored redundantly on multiple devices across different facilities in the same zone.

Uses a data redundancy mechanism across multiple AZs. Your data is stored redundantly in multiple zones within the same region.

**Fault recovery capability**

Failures of BE/CN nodes are automatically recovered. Zone-level failures cause task interruptions.

If the primary zone fails, you can switch the frontend (FE) and compute nodes to a secondary zone to ensure service continuity.

If the primary zone fails, you can select a functioning secondary zone for a primary/secondary failover. This switches the FE and compute nodes to the secondary zone to ensure service continuity.

**Deployment cost**

No extra cost.

-   Cost of two sets of FE nodes.
    
-   Cost of one set of compute nodes.
    
-   Extra cost for data storage.
    

-   Cost of three sets of FE nodes.
    
-   Cost of one set of compute nodes.
    
-   Extra cost for data storage.
    

## **Limitations**

-   This feature is available only for instances that use a storage and compute separation architecture.
    
-   The primary zone cannot be changed.
    
-   The primary instance and disaster recovery nodes must be in different zones within the same region. Cross-region deployment is not supported.
    
-   After a disaster recovery switchover, the frontend and compute nodes are migrated to the secondary zone. The instance's network configuration and domain name remain unchanged. Ensure that the vSwitch in the secondary zone has enough available IP addresses.
    

## **Usage notes**

-   After you enable multi-zone disaster recovery, you cannot disable it.
    
-   If the primary instance fails and some data has not been synced to the disaster recovery nodes, this data may be lost after a switchover.
    
-   When FE resources are adjusted, such as by scaling out nodes, upgrading configurations, or expanding disks, the Observer resources in the secondary zone are synced with the FE.
    

## **Billing**

This feature incurs the following additional costs:

-   Additional FE nodes are required. This generates additional CU costs, which are recorded as **OBSERVER Computing Resources**. For more information, see [Computing fees](/help/en/emr/emr-serverless-starrocks/product-overview/billable-items#2715e39c5dfa7).
    
-   The underlying storage uses zone-redundant storage, which incurs additional storage costs. For more information, see [Data storage (multi-zone) fees](/help/en/emr/emr-serverless-starrocks/product-overview/billable-items#6da243ad3f5wh).
    

## **Enable multi-zone disaster recovery**

## Enable when creating an instance

1.  Go to the EMR Serverless StarRocks instance list page.
    
    1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the navigation pane on the left, choose **EMR Serverless** > **StarRocks**.
        
    3.  In the top menu bar, select the required region.
        
2.  On the **Instance List** page, click **Create Instance**.
    
3.  On the **E-MapReduce Serverless StarRocks** page, set the **Multi-zone Disaster Recovery** parameter to two or three zones and specify the backup vSwitch for each zone.
    
    For more information about creating an instance, see [Create an instance](/help/en/emr/emr-serverless-starrocks/create-an-instance).
    

## Enable for an existing instance

1.  Go to the Disaster Recovery Management page.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
        
    2.  In the navigation pane on the left, choose **EMR Serverless** > **StarRocks**.
        
    3.  Click the name of the target instance.
        
    4.  Click the **Disaster Recovery** tab.
        
2.  On the **Disaster Recovery** tab, click **Disaster Recovery Settings**.
    
3.  In the panel that appears, set the **Multi-zone Disaster Recovery** parameter to two or three zones and specify the backup vSwitch for each zone.
    
4.  Select the service agreement, and then click **OK**.
    

## **Switch zones**

**Important**

-   A zone switchover causes the instance to be unavailable for approximately one to two hours. To avoid business interruptions, perform this operation only when the instance is completely unavailable and cannot be recovered.
    
-   During a zone switchover, the operation might fail if the destination zone has insufficient server resources. To ensure a successful switchover, submit a ticket in advance to request sufficient server resources for the destination zone.
    

1.  Go to the Disaster Recovery Management page.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
        
    2.  In the navigation pane on the left, choose **EMR Serverless** > **StarRocks**.
        
    3.  Click the name of the target instance.
        
    4.  Click the **Disaster Recovery** tab.
        
2.  In the row of the target secondary zone, click **Switch Zone**.
    
3.  In the dialog box that appears, enter the current instance name to confirm the operation, and then click **OK**.
