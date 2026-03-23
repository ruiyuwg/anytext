An Express Connect Router (ECR) provides low-latency connectivity between your data center and VPCs over an Express Connect circuit. However, the ECR alone cannot reach networks connected by other means, such as VPN attachments, and cannot route traffic between cloud networks. Connect the ECR to a Cloud Enterprise Network (CEN) transit router to enable communication between your data center and all attached networks through a central hub.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3329300771/p1051809.svg)

The connection chain involves the following components:

-   **Express Connect circuit** -- The physical link between your data center and Alibaba Cloud.
    
-   **Express Connect Router (ECR)** -- The gateway that forwards traffic over Express Connect circuits on the Alibaba Cloud side.
    
-   **CEN transit router** -- The central hub that connects the ECR to VPCs and other network attachments.
    
-   **Attached networks** -- VPCs, VPN connections, other ECRs, or virtual border routers (VBRs) connected to the same transit router.
    

## Limits

-   Only Enterprise Edition transit routers support ECR connections.
    
-   If a VPC is connected to both a transit router and an ECR, route synchronization between that VPC and the transit router cannot be enabled.
    
-   In each region, an ECR can connect to only one transit router. For example, if a company has two CEN instances, each with a transit router in China (Hangzhou), the ECR can connect to only one of those two transit routers.
    
-   For more information about ECRs, see [Express Connect Router](/help/en/express-connect/user-guide/ecr/).
    

## Route advertisement rules

### Routes between an ECR and a VPC on the same ECR

If an ECR is connected to both a VPC and a transit router, the VPC and transit router do not advertise routes to each other and cannot communicate over the ECR.

### Static routes pointing to the ECR

If you add a static route or route prefix pointing to the ECR to the transit router route table:

-   The route is not advertised to the route table of the peer transit router of an inter-region connection. To propagate the route, manually add it to the peer transit router.
    
-   If a VPC and an IPsec connection are attached to the transit router and route synchronization is enabled for both, the route can be advertised to their route tables.
    

### Default routing policy for ECR connections

After you connect an ECR to a transit router, a default routing policy is added to the transit router route table:

**Setting**

**Value**

Direction

**Egress Regional Gateway**

Priority

**5000**

Action

**Reject**

This policy blocks route advertisement between IPsec connections, ECRs, VBRs, and Cloud Connect Network (CCN) instances.

**Important**

To allow these attachment types to advertise routes to each other, create a routing policy with a higher priority (lower number) and set the action to **Allow**. See [Routing policies](/help/en/cen/user-guide/routing-policy-overview/).

## Billing

After an ECR is connected to a transit router, two fees apply:

-   **Connection fee** -- Charged for the ECR-to-transit-router attachment.
    
-   **Data process fee** -- Charged for traffic processed through the transit router.
    

For pricing details, see [Billing](/help/en/cen/product-overview/billing-rules).

## Create an ECR connection

### Prerequisites

Before you begin, make sure that you have:

-   An ECR. See [Create and manage an ECR](/help/en/express-connect/user-guide/create-and-manage-the-leased-line-gateway-ecr).
    
-   An Enterprise Edition transit router in the target region. See [Create a transit router](/help/en/cen/user-guide/transit-routers#xref-khx-qku-ubg).
    
-   (Cross-account only) Permissions granted on the ECR by the ECR owner account to the transit router owner account. See [Acquire permissions to connect to a network instance that belongs to another account](/help/en/cen/user-guide/grant-permissions-on-a-network-instance-that-belongs-to-another-account).
    

**Note**

The transit router must be Enterprise Edition. Basic Edition transit routers do not support ECR connections.

### Procedure

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance.
    
3.  On the **Transit Router** tab, find the target transit router and click **Create Connection** in the **Actions** column.
    
4.  On the **Connection with Peer Network Instance** page, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Instance Type**
    
    Select **ECR**.
    
    **Region**
    
    Select the region where the transit router is deployed.
    
    **Transit Router**
    
    The transit router ID in the selected region. Displayed automatically.
    
    **Resource Owner ID**
    
    Select **Current Account** if the ECR and transit router belong to the same account. Select **Different Account** and enter the primary account ID of the ECR owner if they belong to different accounts.
    
    **Attachment Name**
    
    Enter a name for the ECR connection.
    
    **Network Instance**
    
    Select the ECR to connect to the transit router.
    
    **Route Prefix**
    
    Select the route prefix that the transit router advertises to the ECR. Configure the prefix in the [Express Connect console](https://expressconnect.console.alibabacloud.com) first. When a prefix is selected, the transit router advertises only that prefix to the ECR, not specific routes. See [Create and manage an ECR](/help/en/express-connect/user-guide/create-and-manage-the-leased-line-gateway-ecr).
    
    **Advanced Settings**
    
    Three options are enabled by default. Clear them to use custom routing (associated forwarding, route learning). See [Manage routes](/help/en/cen/user-guide/manage-routes-1/).
    
    **Advanced Settings options:**
    
    -   **Associate with Default Route Table of Transit Router** -- Associates the ECR with the default route table. The transit router forwards traffic from the ECR using that table.
        
    -   **Propagate System Routes to Default Route Table of Transit Router** -- The ECR advertises data center routes to the default route table.
        
    -   **Automatically Advertise Routes to ECR** -- Routes in the transit router route table associated with the ECR are advertised to the ECR. This option is enabled by default and cannot be disabled. If a route prefix is set in the [Express Connect console](https://expressconnect.console.alibabacloud.com), only that prefix is advertised to the ECR; specific routes are not.
        

### Verify the connection

After the connection is created, verify that it is active:

1.  On the **Transit Router** tab, click the transit router ID.
    
2.  Click the **Intra-region Connections** tab.
    
3.  Confirm that the ECR connection status is **Attached**.
    

**Note**

The connection may take a few minutes to become active. If the status does not change, refresh the page.

## Change the associated route table

After you create an ECR connection, you can change which transit router route table is associated with it.

**Warning**

After you change the associated route table, routes previously synchronized to the ECR are withdrawn. The routes in the new route table are then synchronized to the ECR.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance.
    
3.  On the **Basic Information** > **Transit Router** tab, click the ID of the transit router.
    
4.  On the **Intra-region Connections** tab, click the ID of the ECR connection.
    
5.  In the **Attachment Details** panel, under **Basic Information**, click **Modify** next to **Associated Route Table**.
    
6.  In the **Modify Route Table** dialog box, select a route table and click **OK**.
