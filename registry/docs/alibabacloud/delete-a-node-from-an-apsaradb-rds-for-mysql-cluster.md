This topic describes how to delete a node from a primary ApsaraDB RDS for MySQL instance that runs RDS Cluster Edition. Note that a primary instance that runs RDS Cluster Edition must retain at least one primary node and one secondary node to ensure high availability.

## Prerequisites

The ApsaraDB RDS for MySQL **primary instance** must meet the following conditions:

-   Series: Cluster Edition
    
-   Instance status: Running
    

## Billing rules

For more information about the billing rules after you delete a node, see [Specification changes](/help/en/rds/product-overview/specification-changes#concept-syv-qk2-vdb).

## Procedure

When you delete a node, connections to the node are temporarily unavailable, but the operations of other nodes are not affected. To ensure business continuity, we recommend that you change the read weight of the node to 0 before you delete the node.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  On the **Basic Information** page, in the **Instance Topology Management** section, click **Add Or Delete Node**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6492183571/p988964.png)
    
3.  In the dialog box that appears, select **Delete Node** and click **Next**.
    
4.  To the left of the node that you want to delete, click the ![减号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6737390761/p521275.png) icon.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6492183571/p989040.png)
    
    **Note**
    
    If you want to cancel the deletion, you can click **Restore** to the left of the node.
    
5.  Read the terms of service and click **Confirm Order**.
    

## Related operations

-   After the node is deleted, we recommend that you promptly reconfigure [the weights of the cluster read-only endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-read-write-attributes-and-read-weights) to distribute traffic to other nodes for load balancing.
    
-   You can also delete a node from a primary ApsaraDB RDS for MySQL instance that runs RDS Cluster Edition by calling the [DeleteDBNodes](/help/en/rds/developer-reference/api-rds-2014-08-15-deletedbnodes) API operation.
