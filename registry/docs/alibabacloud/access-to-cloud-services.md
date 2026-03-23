If you want to allow your on-premises network to access a cloud service, you need to connect the virtual border router (VBR), IPsec-VPN connection, or Cloud Connect Network (CCN) instance used by your on-premises network to a transit router. Then, you need to connect a virtual private cloud (VPC) in the region of the cloud service to the transit router. After you connect the VPC to the transit router, your on-premises network can use the transit router to access the VPC in the region where the cloud service is deployed, and access the cloud service through the VPC. Within the same region, VPCs can access cloud services without using transit routers. If a VPC needs to access cloud services across regions, the VPC needs to connect to the transit router in the region.

## Background

Cloud services refer to the Alibaba Cloud services that use the 100.64.0.0/10 CIDR block to provide services. These cloud services include Object Storage Service (OSS), Simple Log Service, and Data Transmission Service (DTS).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8360535671/CAEQTxiBgICbgq.c2BkiIGM5NjZiYTA0ZDc1OTQ0ZWVhY2Q4OTlmYmJmODMzMWEz4119267_20231219174946.997.svg)

## **Limits**

-   VPCs can use only Enterprise Edition transit routers to access cloud services across regions.
    
-   On-premises networks associated with IPsec-VPN connections can use only Enterprise Edition transit routers to access cloud services.
    
-   If a VBR is connected to a Basic Edition transit router, the on-premises networks connected to the VBR can use the Basic Edition transit router to access cloud services in the same region as the VBR.
    
    For example, a VBR is deployed in the China (Beijing) region. In this case, the on-premises networks connected to the VBR can use the Basic Edition transit router to access cloud services that are also in the China (Beijing) region.
    

## Prerequisites

-   The IP address or CIDR block of the cloud service is obtained. You can refer to the documentation of the cloud service to find the IP address or CIDR block.
    
    For more information about the IP address or CIDR block of Object Storage Service (OSS), see [Access OSS using bucket domain names](/help/en/oss/user-guide/access-oss-via-bucket-domain-name#concept-2017327).
    
-   To allow an on-premises network to access cloud services:
    
    -   The VBR, IPsec-VPN connection, or CCN instance used by the on-premises network is connected to the transit router. For more information, see [Create a VBR connection](/help/en/cen/user-guide/connect-vbrs#task-1989155), [Create a VPN connection](/help/en/cen/user-guide/attach-an-ipsec-vpn-connection-to-a-transit-router), or [Create a CCN connection](/help/en/cen/user-guide/associate-a-ccn-instance-with-a-transit-router#task-1930825).
        
    -   A VPC in the region where the cloud services are deployed is connected to the transit router. For more information, see [Create a VPC connection](/help/en/cen/user-guide/connect-vpcs#task-1989141).
        
    -   If the on-premises network needs to access cloud services across regions, create an inter-region connection between the transit routers. For more information, see [Manage inter-region connections](/help/en/cen/user-guide/manage-inter-region-connections).
        
-   To allow a VPC to access cloud services across regions:
    
    -   The VPC is connected to the transit router.
        
    -   A VPC in the region where the cloud services are deployed is connected to a transit router. For more information, see [Create a VPC connection](/help/en/cen/user-guide/connect-vpcs#task-1989141).
        
    -   An inter-region connection is created between the transit routers in the regions. For more information, see [Manage inter-region connections](/help/en/cen/user-guide/manage-inter-region-connections).
        

## **Procedure**

## Enable access from an Enterprise Edition transit router

### Enable access to a cloud service

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, click the ID of the transit router that resides in the region where the cloud service is deployed.
    
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
    
    Enter the IP address or CIDR block that the cloud service uses to provide services.
    
    For example, OSS buckets in the China (Hangzhou) region use the CIDR block 100.118.28.0/24.
    
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
    
    **Important**
    
    If the cloud service uses more than one IP address or CIDR block, repeat this step to add all the IP addresses or CIDR blocks of the cloud service.
    
    ### Disable access to a cloud service
    
    1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
        
    2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
        
    3.  On the **Basic Information** > **Transit Router** tab, click the ID of the transit router that resides in the region where the cloud service is deployed.
        
    4.  On the details page of the transit router, click the **Route Table** tab.
        
    5.  On the **Route Table** tab, click the route table that you want to manage in the left-side list. In the **Route Table Details** section, click the **Route Entry** tab and find the route to the cloud service.
        
    6.  Then, click **Delete** in the **Actions** column. In the **Delete Route Entry** message, click **OK**.
        
    
    ### **Enable access to a cloud service from an Enterprise Edition transit router by calling API operations**
    
    You can use tools such as [Alibaba Cloud SDKs (recommended)](/help/en/openapi/alibaba-cloud-sdks), [Alibaba Cloud CLI](/help/en/openapi/alibaba-cloud-cli), [Terraform](/help/en/openapi/terraform), and [Resource Orchestration Service (ROS)](/help/en/openapi/ros) to call API operations to add and manage routes for an Enterprise Edition transit router. For more information, see the following API references:
    
    -   [CreateTransitRouterRouteEntry](/help/en/cen/developer-reference/api-cbn-2017-09-12-createtransitrouterrouteentry): Adds a route to a route table of an Enterprise Edition transit router.
        
    -   [DeleteTransitRouterRouteEntry](/help/en/cen/developer-reference/api-cbn-2017-09-12-deletetransitrouterrouteentry): Removes a static route from a route table of an Enterprise Edition transit router.
        
    
    ### **References**
    
    [Enable ECS instances to access OSS across regions over VPC connections](/help/en/cen/use-cases/use-enterprise-edition-transit-routers-to-enable-ecs-instances-to-access-oss-across-regions-over-vpc-connections)
    

## Enable access from a Basic Edition transit router

### Enable access to a cloud service

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, click the ID of the transit router that resides in the region where the cloud service is deployed.
    
4.  On the details page of the transit router, click the **Cloud Services** tab.
    
5.  On the **Cloud Services** tab, click **Configure AnyTunnel**.
    
6.  In the **Configure AnyTunnel** dialog box, configure the parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Service IP Address**
    
    Enter the IP address or CIDR block that the cloud service uses to provide services, for example, 100.118.28.0/24.
    
    **Service Region**
    
    Select the region where the cloud service is deployed.
    
    **Service VPC**
    
    Select the VPC that is connected to the transit router.
    
    **Access Region**
    
    Select the region where the VBR or CCN instance that needs to access the cloud service is deployed.
    
    **Description**
    
    Enter a description for the cloud service.
    
    **Important**
    
    If the cloud service uses more than one IP address or CIDR block, repeat this step to add all the IP addresses or CIDR blocks of the cloud service.
    

### Disable access to a cloud service

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, click the ID of the transit router that resides in the region where the cloud service is deployed.
    
4.  On the details page of the transit router, click the **Cloud Services** tab.
    
5.  On the **Cloud Services** tab, find the cloud service that you want to manage and click **Delete** in the **Actions** column.
    
6.  In the **Delete Route Service** message, click **OK**.
    

### **Enable access to a cloud service from a Basic Edition transit router by calling API operations**

You can use tools such as [Alibaba Cloud SDKs (recommended)](/help/en/openapi/alibaba-cloud-sdks), [Alibaba Cloud CLI](/help/en/openapi/alibaba-cloud-cli), [Terraform](/help/en/openapi/terraform), and [Resource Orchestration Service (ROS)](/help/en/openapi/ros) to call API operations to add and manage routes for a Basic Edition transit router. For more information, see the following API references:

-   [ResolveAndRouteServiceInCen](/help/en/cen/developer-reference/api-cbn-2017-09-12-resolveandrouteserviceincen): Connects an on-premises network to a cloud service.
    
-   [DescribeRouteServicesInCen](/help/en/cen/developer-reference/api-cbn-2017-09-12-describerouteservicesincen): Queries the cloud services that are configured on a Cloud Enterprise Network (CEN) instance.
    
-   [DeleteRouteServiceInCen](/help/en/cen/developer-reference/api-cbn-2017-09-12-deleterouteserviceincen): Deletes the configuration of a cloud service.
    

## **FAQ**

### **After I configure access to cloud services in the Alibaba Cloud Management Console, why does the on-premises network fail to access cloud services?**

After you configure access to cloud services in the Alibaba Cloud Management Console, you must add routes that point to the cloud services in your on-premises network. Check whether you have added such routes in your on-premises network.
