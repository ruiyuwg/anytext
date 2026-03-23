This topic describes how to add a node to a primary ApsaraDB RDS for MySQL cluster. This operation does not affect the read and write operations of the instance. After the node is added, you can configure the weight of the cluster's read-only endpoint to distribute traffic to the new node and implement load balancing. A single ApsaraDB RDS for MySQL cluster supports a maximum of eight secondary nodes.

## Prerequisites

The ApsaraDB RDS for MySQL **primary instance** must meet the following conditions:

-   Series: Cluster Edition
    
-   Instance status: Running
    

## Billing rules

For more information about the billing rules after nodes are added, see [Specification changes](/help/en/rds/product-overview/specification-changes#concept-syv-qk2-vdb).

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  On the **Basic Information** page, in the **Instance Topology Management** section, click **Add or Delete Node**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4692183571/p988976.png)
    
3.  In the dialog box that appears, select **Add Node** and click **Next**.
    
4.  In the **Node** configuration item, click the ![增加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7184166761/p521276.png) icon or **Add a Node**, and then configure the zone, instance type, and vSwitch for the new node.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4692183571/p988984.png)
    
    **Note**
    
    To cancel adding the new node, you can click the ![减号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6737390761/p521275.png) icon to the left of the node.
    
5.  Read the terms of service and click **Confirm Order**.
    
    The node is added when the instance status changes from **Adding Node** to **Running**.
    

## Related operations

-   After you add the node, you can [configure the weight of the cluster's read-only endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-read-write-attributes-and-read-weights) to distribute traffic to the new node for load balancing.
    
-   Add a node to a primary ApsaraDB RDS for MySQL cluster by calling the [CreateDBNodes](/help/en/rds/developer-reference/api-rds-2014-08-15-createdbnodes) API operation.
