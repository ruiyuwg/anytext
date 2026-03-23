This topic describes how to associate an Anycast elastic IP address (Anycast EIP) with an endpoint. After you associate an Anycast EIP with an endpoint, clients can access cloud resources through the Anycast EIP. This improves Internet access experience.

## Background information

### Endpoints that support Anycast EIPs

**Endpoint type**

**Description**

**Scenarios**

**Classic Load Balancer (CLB) instance**

-   A CLB instance that is associated with an Anycast EIP can distribute requests to multiple Elastic Compute Service (ECS) instances based on forwarding rules.
    
-   Clients can access a CLB instance that is associated with an Anycast EIP over the Internet.
    

You can associate an Anycast EIP with a CLB instance if your application needs to handle a large amount of user traffic and you want to ensure the high availability of the application. After you associate an Anycast EIP with a CLB instance, the applications that are attached to the CLB instance can provide stable and reliable Internet-facing services. For more information about CLB, see [What is CLB?](/help/en/slb/classic-load-balancer/product-overview/what-is-clb/#concept-whs-lp4-tdb)

**ENI**

-   An ENI that is associated with an Anycast EIP can be used to access the Internet or receive requests from the Internet. The same path is used for inbound and outbound traffic.
    
-   An ENI that is associated with an Anycast EIP cannot distribute network traffic to specific backend servers or perform load balancing.
    

You can associate an Anycast EIP with an ENI if the application that uses the ENI needs to access the Internet or receive requests from the Internet.

**Note**

To associate an Anycast EIP with an Application Load Balancer (ALB) instance or a Network Load Balancer (NLB) instance, go to the [SLB console](https://slb.console.alibabacloud.com/overview).

-   For more information about how to associate an Anycast EIP with an ALB instance, see [Associate Anycast EIPs with an ALB instance to enable access through the nearest access point](/help/en/slb/application-load-balancer/use-cases/associate-an-anycast-eip-with-an-alb-instance#task-2258131).
    
-   For more information about how to associate an Anycast EIP with an NLB instance, see [Associate Anycast EIPs with an NLB instance to enable access through the nearest access point](/help/en/slb/network-load-balancer/use-cases/associate-anycast-eips-with-an-nlb-instance-to-enable-access-through-the-nearest-access-point#main-2345430).
    

### Map access points to endpoints in different regions

![自定义转发规则](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5751096461/p398777.png)

You can associate an Anycast EIP with multiple endpoints in different regions, and then map access points to the endpoints. When you create mappings, take note of the following items:

-   You can select an endpoint that is associated with your Anycast EIP and specify the endpoint as the default endpoint. After you specify the default endpoint, requests from access points that are not mapped to endpoints are automatically routed to the default endpoint.
    
-   If you do not specify the default endpoint, the system selects the first endpoint that is associated with the Anycast EIP as the default endpoint. Requests from all access points are automatically routed to the default endpoint.
    
-   After you disassociate the default endpoint from the Anycast EIP, the system randomly selects an endpoint as the default endpoint.
    
-   After you associate an Anycast EIP with multiple endpoints in different regions, you can map access points to the endpoints.
    
-   Anycast EIPs do not support automatic failovers. When an endpoint is down, the Anycast EIP cannot fail over to another endpoint.
    

**Note**

We recommend that you use Anycast EIPs only to provide services. Third parties may use Anycast or similar features to provide services. If you use Anycast EIPs to access third-party services, errors may occur.

## Prerequisites

-   A CLB instance that is deployed in a virtual private cloud (VPC) or an ENI is created. For more information, see [Create a CLB instance](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-clb-instances#task-ctx-xsm-vdb) or [Create a secondary ENI](/help/en/ecs/user-guide/create-and-use-an-eni#task-728113).
    
-   If you want to associate an Anycast EIP with an ENI, make sure that the ENI is associated with an ECS instance.
    

## Associate an Anycast EIP with an endpoint

1.  Log on to the [Anycast EIP console](https://vpc.console.alibabacloud.com/eip/anycasts).
2.  On the **Anycast Elastic IP Addresses** page, find the Anycast EIP that you want to manage and click **Manage** in the **Actions** column.
    
3.  On the **Bound Instances** tab of the Anycast EIP details page, click **Associate with Resource**.
    
4.  In the **Associate Anycast EIP with Resource** dialog box, set the following parameters and click **OK**.
    
    **Item**
    
    **Description**
    
    **Instance Type**
    
    Select the type of endpoint with which you want to associate the Anycast EIP. Valid values:
    
    -   **CLB Instance** (default)
        
    -   **ENI**
        
    
    **Important**
    
    -   You can associate an Anycast EIP to only one endpoint in a region.
        
    -   Only CLB instances that are deployed in VPCs are supported.
        
    -   Before you associate an Anycast EIP with an ENI, make sure that the ENI is associated with an ECS instance but is not associated with a public IP address.
        
    
    **Resource Group**
    
    Select the resource group to which the endpoint belongs.
    
    **Set as Default**
    
    Specify whether to set the endpoint as the default endpoint. Requests from access points that are not mapped to endpoints are routed to the default endpoint. Valid values:
    
    -   **Yes**
        
    -   **No**
        
    
    **Region**
    
    Select the region where the endpoint is deployed.
    
    The following regions are supported: China (Hong Kong), Singapore, US (Silicon Valley), US (Virginia), and Germany (Frankfurt).
    
    **Areas**
    
    Select access points. You can map access points to endpoints.
    
    You can select access points only if you set **Set as Default** to **No**.
    
    **Select an instance to associate**
    
    Select the endpoint with which you want to associate the Anycast EIP.
    

## More operations

**Operation**

**Description**

Change access points

You can change the access points that are mapped to an endpoint associated with your Anycast EIP. You can add or remove access points based on your business requirements.

1.  On the **Bound Instances** tab of the Anycast EIP details page, find the endpoint that you want to manage and click **Areas** in the Actions column.
    
2.  In the **Areas** dialog box, add or remove access points based on your business requirements and click **OK**.
    
    -   To add access points, select access points from the **Access Points** list and click ![选择增加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6751096461/p401092.png).
        
    -   To remove access points, select access points from the **Selected Access Points** list and click ![选择删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6751096461/p401095.png).
        

Disassociate an Anycast EIP from an endpoint

If your endpoint no longer needs to communicate with the Internet, you can disassociate the Anycast EIP from the endpoint. After you disassociate an Anycast EIP from an endpoint, you are still charged a configuration fee for the Anycast EIP.

1.  On the **Bound Instances** tab of the Anycast EIP details page, find the endpoint from which you want to disassociate the Anycast EIP and click **Unbind** in the Actions column.
    
2.  In the message that appears, confirm the information and click **OK**.
    

## References

-   [AssociateAnycastEipAddress](/help/en/anycast-eip/developer-reference/api-eipanycast-2020-03-09-associateanycasteipaddress): associates an Anycast EIP with an endpoint in a specified region.
    
-   [UpdateAnycastEipAddressAssociations](/help/en/anycast-eip/developer-reference/api-eipanycast-2020-03-09-updateanycasteipaddressassociations): updates the association information about an Anycast EIP.
    
-   [UnassociateAnycastEipAddress](/help/en/anycast-eip/developer-reference/api-eipanycast-2020-03-09-unassociateanycasteipaddress): disassociates an Anycast EIP from an endpoint.
