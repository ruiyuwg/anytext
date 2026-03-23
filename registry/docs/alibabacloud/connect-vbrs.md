This topic describes how to connect a virtual border router (VBR) to a transit router so that your data center can communicate with virtual private clouds (VPCs) in the same region or across regions, and with other data centers.

## Prerequisites

Before you connect a VBR to a transit router, ensure that you have:

-   Transit router and VBR owned by accounts in the same enterprise.
    
-   A transit router deployed in the region of the VBR. See [Transit routers](/help/en/cen/user-guide/transit-routers#section-qmu-6ox-hcu).
    
-   (Cross-account only) Permissions acquired for the transit router on the VBR. See [Cross-account network instance authorization](/help/en/cen/user-guide/grant-permissions-on-a-network-instance-that-belongs-to-another-account#task-1681162).
    

## Connect a VBR to an Enterprise Edition transit router

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, find the transit router and click **Create Connection** in the **Actions** column.
    
4.  On the **Connection with Peer Network Instance** page, set the following parameters and click **OK**.
    

**Parameter**

**Description**

**Instance Type**

Select **Virtual Border Router (VBR)**.

**Region**

Select the region where the network instance is deployed.

**Transit Router**

The transit router in the selected region is displayed.

**Resource Owner ID**

**Current Account** if same account; **Different Account** and enter the primary account ID of the network instance if not.

**Attachment Name**

A name for the VBR connection.

**Tag**

Optional. See [Tags](/help/en/cen/user-guide/manage-tags-2).

**Network Instance**

The VBR to connect to the transit router.

**Advanced Settings**

Optional. Default: **Associate with Default Route Table of Transit Router**; **Propagate System Routes to Default Route Table of Transit Router**; **Propagate Routes to VBR**. See [Manage routes](/help/en/cen/user-guide/manage-routes-1/).

You can view the VBR connection on the **Intra-region Connections** tab on the transit router details page. See [View network instance connections](/help/en/cen/user-guide/view-network-instance-connections#task-1995538).

**Note**

If you see DEVICE\_MODEL\_FORBIDDEN, see [FAQ](/help/en/cen/support/faq-1#section-mf4-ahk-7fg).

After you create a VBR connection, you can change which transit router route table is associated with it.

**Warning**

If route synchronization is enabled for the VBR connection, changing the route table withdraws the routes synchronized to the VBR. The routes in the new route table are then synchronized to all route tables of the VBR. See [Route synchronization](/help/en/cen/user-guide/route-synchronization#task-2263165).

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, click the ID of the transit router that you want to manage.
    
4.  On the **Intra-region Connections** tab, click the ID of the VBR connection that you want to manage.
    
5.  In the **Attachment Details** panel, under **Basic Information**, click **Modify** next to **Associated Route Table**.
    
6.  In the **Modify Route Table** dialog box, select a route table and click **OK**.
    

## Connect a VBR to a Basic Edition transit router

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, find the transit router and click **Create Connection** in the **Actions** column.
    
4.  On the **Connection with Peer Network Instance** page, set the parameters and click **OK**.
    

**Parameter**

**Description**

**Instance Type**

Select **Virtual Border Router (VBR)**.

**Region**

Select the region where the network instance is deployed.

**Transit Router**

The transit router in the selected region is displayed. If none exists, the system creates one.

**Resource Owner ID**

**Current Account** or **Different Account** (and enter the network instance primary account ID).

**Network Instance**

The network instance (VBR) to connect.

View the VBR connection on the **Intra-region Connections** tab. See [View network instance connections](/help/en/cen/user-guide/view-network-instance-connections#task-1995538).

**Note**

If you see DEVICE\_MODEL\_FORBIDDEN, see [FAQ](/help/en/cen/support/faq-1#section-mf4-ahk-7fg).

## Connect a VBR by calling API operations

You can create and manage VBR connections by using Alibaba Cloud SDKs (recommended), CLI, Terraform, or ROS. Relevant APIs:

-   **CreateTransitRouterVbrAttachment**: Create a VBR connection on an Enterprise Edition transit router.
    
-   **UpdateTransitRouterVbrAttachmentAttribute**: Update a VBR connection on an Enterprise Edition transit router.
    
-   **ReplaceTransitRouterRouteTableAssociation**: Associate a connection with a different transit router route table.
    
-   **AttachCenChildInstance**: Connect a VBR to a Basic Edition transit router.
