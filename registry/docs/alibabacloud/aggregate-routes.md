When using a transit router to connect network instances, route entries propagated to the instances may become excessive, making it difficult to manage route tables. You can use the aggregate route feature of transit routers to consolidate multiple entries into a single one. This reduces the size of the route tables and simplifies route management.

## Limits

-   Only [Enterprise Edition transit routers](/help/en/cen/user-guide/transit-routers#title-sg3-yo2-bsq) support aggregate routes.
    
    If you add an aggregate route to an Enterprise Edition transit router, the transit router continues forwarding network traffic without being affected the modification.
    
-   Aggregate routes added to an Enterprise Edition transit router can be advertised virtual private cloud (VPC), virtual border routers (VBR), Express Connect router (ECR), VPN, and inter-region transit router instances.
    
-   Aggregate routes cannot be aggregated into other aggregate routes.
    
    If you add an aggregate route whose destination CIDR block is 10.0.0.0/16 and another one whose destination CIDR block is 10.0.0.0/8 to an Enterprise Edition transit router, the transit router advertises the aggregate route whose destination CIDR block is 10.0.0.0/16 to the VPCs even if 10.0.0.0/16 is a subnet of 10.0.0.0/8.
    
-   If an aggregate route has the same destination CIDR block as a route entry in a route table of the Enterprise Edition transit router, you cannot add the route to the transit router.
    
-   The aggregate routes that an Enterprise Edition transit router advertises to the network instances consume the route quota on the route tables.
    
    For example, each route table of a VPC supports at most 200 custom routes. You can request a quota increase on the [Quota Management page in the VPC console](https://vpc.console.alibabacloud.com/quota) or in the [Quota Center console](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=vpc_quota_instances_num).
    
-   The aggregate routes do not support aggregating AS\_Path or setting AS\_Set behaviors. After you configure the aggregate routes, it is equivalent to initiating new routes and does not carry the BGP attributes.
    
-   The maximum number of aggregate routes that you can add to a route table of an Enterprise Edition transit router is 20. The quota is not adjustable.
    

## Add an aggregate route

After you add an aggregate route to a route table of an Enterprise Edition transit router, the transit router advertises the route only to VPCs that are connected to the transit router and have route synchronization enabled.

Before you add an aggregate route, make sure that the VPCs meet the following requirements.

-   Route synchronization has been enabled for the network instances. For more information, see [Enable route synchronization](/help/en/cen/user-guide/route-synchronization#section-vmw-tek-kcl).
    
-   Associated forwarding has been enabled between the instances and the Enterprise Edition transit router. For more information, see [Create an associated forwarding correlation](/help/en/cen/user-guide/associated-forwarding#section-9qu-gda-6mf).
    

After an aggregate route is advertised to the instance route tables, the specific routes whose destination CIDR blocks fall into that of the aggregate route are withdrawn from the route tables.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section, click the ID of the route table that you want to manage. On the details page of the transit router, click the **Aggregate Route** tab, and click **Add Aggregate Route**
    
6.  In the **Add Aggregate Route** dialog box, set the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    Enter a name for the aggregate route.
    
    **Destination CIDR Block**
    
    Enter a destination CIDR block for the aggregate route.
    
    **Route Type**
    
    Select the type of the aggregate route. Default value: **Static**.
    
    Aggregate routes advertised to network instances are custom routes by default. The next hops of the aggregate routes are the instance connections.
    
    **Destination Range**
    
    Enter the scope of network instances to which the aggregate route is advertised. Valid values:
    
    -   **VPC**
        
    -   **VBR**
        
    -   **Inter-region**
        
    -   **VPN**
        
    -   **ECR**
        
    
    After you add an aggregate route, it is automatically advertised to the instances that are in associated forwarding correlation with the Enterprise Edition transit router and have route synchronization enabled.
    
    **Description**
    
    Enter a description for the aggregate route.
    
    -   After you add an aggregate route, you can click **Details** in the **Status** column to view the advertisement status and description of the route.
        
        If an aggregate route fails to be advertised, you can re-advertise it to the instance route tables after you fix the issues. For information, see [Re-advertise an aggregate route](#section-mek-usm-ug6).
        
        ![Aggregate route advertisement details](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8756043761/p513123.png)
        
    -   After you add an aggregate route, you can view its status in the **Status** column on the **Network Routes** tab. ![Specific route advertisement details](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1279535961/p514112.png)
        
    

## Re-advertise an aggregate route

If an aggregate route fails to be advertised due to errors such as insufficient route quotas or route overlapping, you can fix the issues and re-advertise the aggregate route.

If the following solutions can fix the issues, the aggregate route is automatically advertised without manual operations.

-   Delete associated forwarding correlations
    
-   Disable route synchronization
    
-   Delete route tables
    
-   Delete aggregate routes
    

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section, click the ID of the route table that you want to manage.
    
6.  On the details page of the route table, click the **Aggregate Route** tab and find the aggregate route that you want to manage. Click **Re-apply** in the **Actions** column.
    

## Modify an aggregate route

You cannot modify aggregate routes in the CEN console. However, you can adjust the destination CIDR block of the aggregate route.

1.  Add an aggregate route whose destination CIDR block is the one to which you want to adjust the existing aggregate route.
    
2.  Delete the existing aggregate route.
    
    -   If the new aggregate router has a larger destination CIDR block than the existing aggregate route, the specific routes whose destination CIDR blocks fall into the destination CIDR block of the new aggregate route are withdrawn from the instances.
        
    -   If the new aggregate route has a smaller destination CIDR block than the existing aggregate route, specific routes whose destination CIDR blocks fall outside the destination CIDR block of the new aggregate route are advertised to the instances.
        
        **Warning**
        
        If the new aggregate route has a smaller destination CIDR block than the existing aggregate route, specific routes are advertised to the instances. Pay attention to the route quota on the instance route tables in case specific routes fail to be advertised to the instances due to insufficient route quotas. In this case, services may be interrupted.
        
    

### Examples

The following figure shows how routes are processed when the destination CIDR block is resized.

![Aggregate route - original CIDR block](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2405039761/p537216.png)

Route Table A of an Enterprise Edition transit router is associated with VPC1, VPC2, and VPC3. Route Table A contains three routes whose destination CIDR blocks are 10.0.0.0/21, 10.0.0.0/24, and 10.0.1.0/24. If you add an aggregate route whose destination CIDR block is 10.0.0.0/22 and enable route synchronization for VPC1 and VPC2, the routes whose destination CIDR blocks are 10.0.0.0/22 and 10.0.0.0/21 are advertised to VPC1 and VPC2.

**Increase the destination CIDR block of an aggregate route** ![Aggregate route - larger CIDR block ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2405039761/p537219.png)

If you need to increase the destination CIDR block of an aggregate route from 10.0.0.0/22 to 10.0.0.0/20, you can create a new aggregate route whose destination CIDR block is 10.0.0.0/20, and delete the existing aggregate route whose destination CIDR block is 10.0.0.0/22. Then, only the aggregate route whose destination CIDR block is 10.0.0.0/20 exists in the route tables of VPC1 and VPC2. The aggregate route whose destination CIDR block is 10.0.0.0/21 is withdrawn because it falls into 10.0.0.0/20.

**Decrease the destination CIDR block of an aggregate route**![Aggregate route - smaller CIDR block ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2405039761/p537221.png)

If you need to decrease the destination CIDR block of an aggregate from 10.0.0.0/20 to 10.0.0.0/23, you can create a new aggregate route whose destination CIDR block is 10.0.0.0/23, and delete the existing aggregate route whose destination CIDR block is 10.0.0.0/20. First, the aggregate route whose destination CIDR block is 10.0.0.0/21 is advertised to VPC1 and VPC2. Then, the aggregate route whose destination CIDR block is 10.0.0.0/20 is withdrawn. As a result, the aggregate route with a destination CIDR block of 10.0.0.0/21 and the aggregate route with a destination CIDR block of 10.0.0.0/23 both exist in the route tables of VPC1 and VPC2.

## Modify the target range

**Warning**

Before narrowing the target range of an aggregate route, make sure that there are redundant routes under the instances that you want to cancel propagation to avoid interruption to your operations.

After adding the aggregate routes, you can modify the propagation range by adding to or removing instance types from the target range. Valid values are as follows:

-   **VPC**
    
-   **VBR**
    
-   **Inter-region**
    
-   **VPN**
    
-   **ECR**
    

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section under the tab, click the ID of the route table.
    
6.  In the details page of the route table, choose the **Aggregate Route** tab, and click **Modify** in the **Actions** column.
    
7.  In the **Edit Aggregation Routes** dialog box, change the **Target Range** to modify the route propagation range, and click **OK**.
    

## Delete an aggregate route

**Warning**

Before deleting an aggregate route, make sure that your network has a redundant route to prevent service interruptions.

After an aggregate route is deleted, it is automatically withdrawn from all instances. Then, specific routes whose destination CIDR blocks fall into that of the deleted aggregate route are advertised to the instances.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section, click the ID of the route table that you want to manage.
    
6.  On the details page of the route table, click the **Aggregate Route** tab and find the route that you want to manage. Click **Delete** in the **Actions** column.
    
7.  In the message that appears, confirm the information and click **OK**.
    

## References

-   [CreateTransitRouteTableAggregation](/help/en/cen/developer-reference/api-cbn-2017-09-12-createtransitroutetableaggregation#main-107864): creates an aggregate route.
    
-   [DeleteTransitRouteTableAggregation](/help/en/cen/developer-reference/api-cbn-2017-09-12-deletetransitroutetableaggregation#main-107864): deletes an aggregate route.
    
-   [RefreshTransitRouteTableAggregation](/help/en/cen/developer-reference/api-cbn-2017-09-12-refreshtransitroutetableaggregation#main-107864): re-advertises an aggregate route.
    
-   [DescribeTransitRouteTableAggregationDetail](/help/en/cen/developer-reference/api-cbn-2017-09-12-describetransitroutetableaggregationdetail#main-107864): queries the configuration details about an aggregate route.
