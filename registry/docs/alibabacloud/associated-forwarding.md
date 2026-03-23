After you connect a network instance to an Enterprise Edition transit router, you can create an associated forwarding correlation to associate the network instance with a route table of the Enterprise Edition transit router. Then, the Enterprise Edition transit router queries the route table to forward network traffic for the network instance.

## Limits

-   Only route tables of Enterprise Edition transit routers support associated forwarding correlations. For more information about how to query the edition of a transit router, see [View the edition of a transit router](/help/en/cen/user-guide/transit-routers#section-3qx-d5r-25n).
    
-   Each network instance can be associated only with one route table of an Enterprise Edition transit router.
    

## Background information

![关联转发关系逻辑图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7183489461/p408984.png)The preceding figure shows how transit routers work. In this example, the transit router in the China (Hangzhou) region is connected to VPC1 and VPC2. The VPC1 connection is associated with Route Table A, and the VPC2 connection is associated with Route Table B. A client in VPC1 wants to access a server in VPC2. The IP address of the server falls into the CIDR block 10.1.1.0/24. The following table shows the process.

**No.**

**Description**

①

A server in VPC1 initiates a request to a server in VPC2. The IP address of the server in VPC2 falls into the CIDR block 10.1.1.0/24.

②

The VPC1 connection is associated with Route Table A. After the transit router receives the request from VPC1, the transit router queries whether Route Table A contains a route that points to the CIDR block 10.1.1.0/24.

-   If the route exists, the request from VPC1 is forwarded to the next hop of 10.1.1.0/24.
    
-   If the route does not exist, VPC1 cannot access the server in 10.1.1.0/24.
    

③

The transit router queries the information about the route that points to 10.1.1.0/24 in Route Table A and forwards the request to VPC2.

④

The VPC2 connection receives the request and returns an echo reply packet to VPC1.

⑤

The VPC2 connection is associated with Route Table B. After the transit router receives the echo reply packet from VPC2, the transit router queries whether Route Table B contains a route that points to 192.168.1.0/24.

-   If the route exists, the echo reply packet is forwarded to the next hop of 192.168.1.0/24.
    
-   If the route does not exist, VPC2 cannot send the echo reply packet to the client in VPC1.
    

⑥

The transit router queries the information about the route that points to 192.168.1.0/24 in Route Table B and forwards the echo reply packet to VPC1.

## Create an associated forwarding correlation

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section, click the ID of the route table that you want to manage. On the details page of the route table, click the **Route Table Association** tab.
    
6.  On the **Route Table Association** tab, click **Create Association**. In the **Add Association** dialog box, set the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Route Table**
    
    The current route table is selected by default.
    
    **Transit Router**
    
    The current transit router is selected by default.
    
    **Association**
    
    Select the network instance connection that you want to associate with the route table.
    
    The transit router queries the selected route table to forward network traffic for the network instance.
    

## Delete an associated forwarding correlation

**Warning**

-   After the associated forwarding correlation between a network instance and a transit router route table is deleted, the network instance can no longer use the transit router to communicate with other networks. Proceed with caution.
    
-   If route synchronization is enabled for the network instance, the routes are automatically withdrawn from the network instance after the associated forwarding correlation is deleted.
    

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section, click the ID of the route table that you want to manage. On the details page of the route table, click the **Route Table Association** tab.
    
6.  On the **Route Table Association** tab, find the network instance connection that you want to manage and click **Delete** in the **Actions** column.
    
7.  In the **Delete Association** message, confirm the information and click **OK**.
    

## References

-   [AssociateTransitRouterAttachmentWithRouteTable](/help/en/cen/developer-reference/api-associatetransitrouterattachmentwithroutetable#doc-api-Cbn-AssociateTransitRouterAttachmentWithRouteTable): creates an associated forwarding correlation.
    
-   [ListTransitRouterRouteTableAssociations](/help/en/cen/developer-reference/api-listtransitrouterroutetableassociations#doc-api-Cbn-ListTransitRouterRouteTableAssociations): queries associated forwarding correlations on an Enterprise Edition transit router.
    
-   [DissociateTransitRouterAttachmentFromRouteTable](/help/en/cen/developer-reference/api-dissociatetransitrouterattachmentfromroutetable#doc-api-Cbn-DissociateTransitRouterAttachmentFromRouteTable): deletes an associated forwarding correlation.
