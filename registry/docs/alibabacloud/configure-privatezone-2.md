Alibaba Cloud DNS PrivateZone (PrivateZone) is an Alibaba Cloud private domain name resolution and management service based on Virtual Private Cloud (VPC). After a virtual border router (VBR), an IPsec-VPN connection, or a Cloud Connect Network (CCN) instance is connected to a transit router, the on-premises networks that are connected to these network instances can use the transit router to access PrivateZone.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7366695671/CAEQUBiBgMDWq6Cv2RkiIDUxZDI2NGJkNmQ5YTQ5NGI4M2Q4Yzk4N2Q3NzdkMmE24119267_20231219174946.997.svg)

## Limits

-   On-premises networks associated with an IPsec-VPN connection can use only Enterprise Edition transit routers to access PrivateZone.
    
-   If a VBR is connected to a Basic Edition transit router, the on-premises networks connected to the VBR can use only the Basic Edition transit router and VPC in the same region as the VBR to access PrivateZone. The on-premises networks cannot access PrivateZone across regions.
    
    For example, a VBR is deployed in the China (Beijing) region. In this case, the on-premises networks connected to the VBR can use only the Basic Edition transit router and VPC in the China (Beijing) region to access PrivateZone.
    

## Prerequisites

-   PrivateZone is deployed. For more information, see [Getting Started](/help/en/privatezone/latest/subscribe-service).
    
-   The VPC of PrivateZone, and the VBR, IPsec-VPN connection, or CCN instance that is connected to the on-premises network are connected to the transit router. For more information, see [Create a VPC connection](/help/en/cen/user-guide/connect-vpcs#task-1989141), [Create a VBR connection](/help/en/cen/user-guide/connect-vbrs#task-1989155), [Create a VPN connection](/help/en/cen/user-guide/attach-an-ipsec-vpn-connection-to-a-transit-router), or [Create a CCN connection](/help/en/cen/user-guide/associate-a-ccn-instance-with-a-transit-router#task-1930825).
    
    If the on-premises network needs to access PrivateZone across region, create an inter-region connection between the transit routers in the regions. For more information, see [Manage inter-region connections](/help/en/cen/user-guide/manage-inter-region-connections).
    
-   If your on-premises network uses a CCN instance to connect to Alibaba Cloud, and the CCN instance and the VPC or transit router belong to different Alibaba Cloud accounts, you must grant the required permissions to the CCN instance. For more information, see [Authorize CCN instances to use the PrivateZone service](/help/en/cen/user-guide/authorize-ccn-instances-to-use-the-privatezone-service#task-1512598).
    

## Use an Enterprise Edition transit router to enable access to PrivateZone

### Enable access to PrivateZone

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, click the ID of the transit router in the region of the VPC in which PrivateZone is deployed.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  On the **Route Table** tab, click the ID of the route table that you want to manage in the left-side list. In the **Route Table Details** section, click the **Route Entry** tab, and then click **Add Route Entry**.
    
6.  In the **Add Route Entry** dialog box, set the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Route Table**
    
    By default, the current route table is selected.
    
    **Transit Router**
    
    By default, the current transit router is selected.
    
    **Name**
    
    Enter a name for the route entry.
    
    **Destination CIDR**
    
    Enter the CIDR blocks of PrivateZone.
    
    PrivateZone uses 100.100.2.136/32 and 100.100.2.138/32 to provide services. Repeat this step to add all the two CIDR blocks to the route table of the transit router.
    
    **Blackhole Route**
    
    Select whether to specify the route as a blackhole route. Valid values:
    
    -   **Yes**: specifies the route as a blackhole route. Traffic that matches the route is dropped.
        
    -   **No**: specifies that the route is not a blackhole route. In this case, you must specify a next hop for the route.
        
    
    **No** is selected in this example.
    
    **Next Hop**
    
    Select a next hop.
    
    Select the ID of the VPC connection on the transit router.
    
    **Description**
    
    Enter a description for the route entry.
    

### Disable access to PrivateZone

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, click the ID of the transit router in the region of the VPC in which PrivateZone is deployed.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  On the **Route Table** tab, click the route table that you want to manage in the left-side route table list. Then, click the **Route Entry** tab in the **Route Table Details** section, and find the route that points to PrivateZone.
    
6.  Then, click **Delete** in the **Actions** column. In the **Delete Route Entry** message, click **OK**.
    

### **Enable access to PrivateZone from an Enterprise Edition transit router by calling API operations**

You can use tools such as [Alibaba Cloud SDKs (recommended)](/help/en/openapi/alibaba-cloud-sdks), [Alibaba Cloud CLI](/help/en/openapi/alibaba-cloud-cli), [Terraform](/help/en/openapi/terraform), and [Resource Orchestration Service (ROS)](/help/en/openapi/ros) to call API operations to add and manage routes for an Enterprise Edition transit router. For more information, see the following API references:

-   [CreateTransitRouterRouteEntry](/help/en/cen/developer-reference/api-cbn-2017-09-12-createtransitrouterrouteentry): Adds a route to a route table of an Enterprise Edition transit router.
    
-   [DeleteTransitRouterRouteEntry](/help/en/cen/developer-reference/api-cbn-2017-09-12-deletetransitrouterrouteentry): Removes a static route from a route table of an Enterprise Edition transit router.
    

## Use a Basic Edition transit router to enable access to PrivateZone

### Enable access to PrivateZone

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, click the ID of the transit router in the region of the VPC that is associated with PrivateZone.
    
4.  If this is the first time that you configure the PrivateZone service, click the **PrivateZone** tab on the details page of the transit router, and click **Authorize Now**. On the **RAM Quick Authorization** page, click **Authorize**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6498248471/p961210.png)
    
    After you grant permissions to the Smart Access Gateway (SAG) service associated with the on-premises network, the CCN instance that belongs to the SAG service can access the PrivateZone service.
    
5.  Return to the **PrivateZone** tab and click **Configure PrivateZone**. In the **Configure PrivateZone** dialog box, set the following parameters and click **OK**.
    
    ![PrivateZone](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7018728061/p141626.png)
    
    -   **Host Region**: Select the region where PrivateZone is deployed.
        
    -   **Service VPC**: Select the VPC associated with PrivateZone.
        
    -   **Access Region**: Select the region where the VBR or CCN instance that needs to access PrivateZone is deployed.
        
    

### Disable access to PrivateZone

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, click the ID of the transit router in the region where the PrivateZone service is deployed.
    
4.  On the details page of the transit router, click the **PrivateZone** tab, find the configuration record that you want to delete and click **Delete** in the **Actions** column.
    
5.  In the **Delete PrivateZone** message, click **OK**.
    

### **Enable access to PrivateZone from a Basic Edition transit router by calling API operations**

You can use tools such as [Alibaba Cloud SDKs (recommended)](/help/en/openapi/alibaba-cloud-sdks), [Alibaba Cloud CLI](/help/en/openapi/alibaba-cloud-cli), [Terraform](/help/en/openapi/terraform), and [Resource Orchestration Service (ROS)](/help/en/openapi/ros) to call API operations to add and manage routes for a Basic Edition transit router. For more information, see the following API references:

-   [RoutePrivateZoneInCenToVpc](/help/en/cen/developer-reference/api-cbn-2017-09-12-routeprivatezoneincentovpc): Enables access to PrivateZone.
    
-   [DescribeCenPrivateZoneRoutes](/help/en/cen/developer-reference/api-cbn-2017-09-12-describecenprivatezoneroutes): Queries the connections to PrivateZone.
    
-   [UnroutePrivateZoneInCenToVpc](/help/en/cen/developer-reference/api-cbn-2017-09-12-unrouteprivatezoneincentovpc): Disables access to PrivateZone.
