After you enable route synchronization, the system automatically advertises route entries from the transit router (TR) route table to network instances.

## Limits

-   Only Enterprise Edition transit routers support route synchronization.
    
-   If a VPC is connected to multiple Enterprise Edition transit routers, you can enable route synchronization for only one of the Enterprise Edition transit routers.
    
-   If a VPC is connected to a Basic Edition transit router and an Enterprise Edition transit router, you cannot enable route synchronization for the VPC.
    
-   If a VPC is associated with a VPN Gateway instance over an IPsec-VPN connection and the VPN Gateway instance has [automatic BGP route propagation](/help/en/vpn/sub-product-ipsec-vpn/user-guide/configure-bgp-dynamic-routing#0b2a830c3386i) enabled, you cannot enable route synchronization for the VPC.
    
-   After you enable route synchronization, the Enterprise Edition transit router advertises routes to the network instance. You cannot delete these routes from the network instance.
    
-   The routes advertised from an Enterprise Edition transit router to a VPC consume the custom route entry quota of the VPC route table.
    
    By default, each route table of a VPC supports up to 200 custom route entries. You can request a quota increase on the [VPC quota management page](https://vpc.console.alibabacloud.com/quota) or in [Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=vpc_quota_instances_num).
    
-   The following table describes the limits on resources related to the route synchronization feature.
    
    **Resource**
    
    **Default limit**
    
    **Request a Quota Increase**
    
    The maximum number of VPC instances for which route synchronization can be enabled under an Enterprise Edition transit router
    
    50
    
    Cannot be adjusted
    

## How route synchronization works

-   After you create a network instance connection on a Basic Edition transit router, the Basic Edition transit router automatically advertises the route entries in its default route table to the route table of the network instance.
    
-   When you create a network instance connection on an Enterprise Edition transit router, the transit router does not advertise any route entries to the network instance by default. To allow the Enterprise Edition transit router to automatically advertise route entries to the route table of the network instance, you must enable route synchronization.
    
    **Note**
    
    When you [create a VPC connection](/help/en/cen/user-guide/connect-vpcs#section-hqv-wg2-oh2), if you enable **Automatically Create Route That Points to Transit Router and Add to All Route Tables of Current VPC** in the **Advanced Settings** section, the system automatically adds the following three route entries to all route tables of the VPC-connected instance: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. The next hop of these routes points to the VPC connection to direct IPv4 traffic from the VPC-connected instance to the transit router. If these three route entries meet your connectivity needs, you do not need to enable route synchronization for the VPC-connected instance.
    
    After you enable route synchronization for a network instance, route synchronization works in the following ways:
    
    -   VPC instance
        
        After you enable route synchronization for a VPC instance, the Enterprise Edition transit router automatically advertises routes from the transit router route table associated with the VPC connection to all route tables of the VPC instance.
        
    -   ECR instance
        
        After you enable route synchronization for an ECR instance, the Enterprise Edition transit router automatically advertises routes from the transit router route table associated with the ECR connection to the route table of the ECR instance.
        
        **Important**
        
        If you configure a route prefix for the transit router instance in the [Express Connect console](https://expressconnect.console.alibabacloud.com/), the system advertises only the route prefix to the ECR instance. The routes in the route table of the transit router are not advertised. For more information, see [Create and manage an ECR](/help/en/express-connect/user-guide/create-and-manage-the-leased-line-gateway-ecr).
        
    -   IPsec-VPN connection
        
        **Note**
        
        The route synchronization feature applies only when the IPsec-VPN connection uses the BGP dynamic routing protocol.
        
        After you enable route synchronization for an IPsec-VPN connection, the Enterprise Edition transit router automatically advertises routes from the transit router route table associated with the VPN connection to the BGP route table of the IPsec-VPN connection.
        
    -   Virtual Border Router (VBR) instance
        
        After you enable route synchronization for a VBR instance, the Enterprise Edition transit router automatically synchronizes routes from the route table associated with the VBR connection to the route table of the VBR instance.
        
    -   Inter-region connection
        
        After you enable route synchronization for an inter-region connection, the local Enterprise Edition transit router automatically advertises routes from the transit router route table associated with the inter-region connection to the peer Enterprise Edition transit router.
        
    

## Enable route synchronization

You can enable route synchronization for a network instance when you create the network instance connection, or enable it for the network instance separately after the connection is created.

### Enable route synchronization when you create a network instance connection

-   ECR instance
    
    When you [create an ECR connection](/help/en/cen/user-guide/connect-ecrs), **Automatically Advertise Routes to ECR** is enabled by default in the Advanced Settings section. This enables route synchronization for the ECR instance and cannot be disabled.
    
-   IPsec-VPN connection
    
    To enable route synchronization for an IPsec-VPN connection, select **Automatically Advertise Routes to VPN** in the **Advanced Settings** section when you [create a VPN connection](/help/en/cen/user-guide/attach-an-ipsec-vpn-connection-to-a-transit-router#task-2226582).
    
-   VBR instance
    
    When you [create a VBR connection](/help/en/cen/user-guide/connect-vbrs#task-1989155), you can select **Propagate Routes to VBR** in the **Advanced Settings** section to enable route synchronization for the VBR instance.
    
-   Inter-region connection
    
    When you [create an inter-region connection](/help/en/cen/user-guide/manage-inter-region-connections#section-9yi-a1v-b5u), select **Automatically Advertise Routes to Peer Region** in the **Advanced Settings** section to enable route synchronization.
    

**Note**

For a VPC instance, you can enable route synchronization only after the VPC instance is connected to an Enterprise Edition transit router.

### Enable route synchronization for a network instance separately

Before you enable route synchronization for a network instance separately, make sure that the network instance connection is [associated](/help/en/cen/user-guide/associated-forwarding) with a route table of the Enterprise Edition transit router.

You can use one of the following two methods to enable route synchronization for VBR instances and IPsec-VPN connections. VPC instances support only Method 1. Inter-region connections support only Method 2.

### Method 1: Enable route synchronization for a network instance

1.  Log on to the [Cloud Enterprise Network (CEN) console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, find the CEN instance and click its ID.
    
3.  On the **Basic Information** > **Transit Router** tab, find the transit router in the destination region and click its ID.
    
4.  On the **Intra-region Connections** tab, find the connection that you want to manage and enable route synchronization in the **Route Synchronization** column.
    
    After you enable route synchronization for a network instance, the Enterprise Edition transit router connected to the network instance automatically advertises its routes to the network instance. You can click **Details** in the **Route Synchronization** column to view route synchronization details on the **Network Routes** tab.
    

### Method 2: Enable route synchronization for a network instance

1.  Log on to the [Cloud Enterprise Network (CEN) console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, find the CEN instance and click its ID.
    
3.  On the **Basic Information** > **Transit Router** tab, find the transit router in the destination region and click its ID.
    
4.  On the details page of the transit router, find the VBR connection, VPN connection, or inter-region connection based on the following information, and then click the network instance connection ID.
    
    -   On the **Intra-region Connections** tab, find the VBR connection or VPN connection.
        
    -   On the **Cross-region Connections** tab, find the inter-region connection that you want to manage.
        
5.  In the **Attachment Details** panel, in the **Basic Information** section, click **Enable** next to **Automatic Route Advertisement**.
    
6.  In the **Enable Automatic Route Advertisement** dialog box, click **Confirm**.
    

## Disable route synchronization

**Warning**

-   After you disable route synchronization, the Enterprise Edition transit router automatically revokes the routes that were advertised to the network instance. Before you proceed, ensure that you have redundant routes configured to prevent service interruptions.
    
-   If you enabled the option to automatically add the 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16 route entries when you created the VPC connection, these three route entries are not revoked when you disable route synchronization for the VPC instance.
    

You can use one of the following two methods to disable route synchronization for VBR instances and IPsec-VPN connections. VPC instances support only Method 1. Inter-region connections support only Method 2.

### Method 1: Disable route synchronization for a network instance

1.  Log on to the [Cloud Enterprise Network (CEN) console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, find the CEN instance and click its ID.
    
3.  On the **Basic Information** > **Transit Router** tab, find the transit router in the destination region and click its ID.
    
4.  On the **Intra-region Connections** tab, find the target network instance connection and disable route synchronization in the **Route Synchronization** column.
    

### Method 2: Disable route synchronization for a network instance

1.  Log on to the [Cloud Enterprise Network (CEN) console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, find the CEN instance and click its ID.
    
3.  On the **Basic Information** > **Transit Router** tab, find the transit router in the destination region and click its ID.
    
4.  On the details page of the transit router, find the VBR connection, VPN connection, or inter-region connection based on the following information, and then click the network instance connection ID.
    
    -   On the **Intra-region Connections** tab, find the VBR connection or VPN connection.
        
    -   Click the **Inter-region Connections** tab to find the inter-region connection.
        
5.  In the **Attachment Details** panel, in the **Basic Information** section, click **Disable** next to **Automatic Route Advertisement**.
    
6.  In the **Disable Automatic Route Advertisement** dialog box, click **OK**.
