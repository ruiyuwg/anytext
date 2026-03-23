This topic describes how to add an endpoint group to a basic Global Accelerator instance.

## Background information

Each endpoint group is associated with a specific region. Basic Global Accelerator instances distribute network traffic to endpoints in endpoint groups based on the associated regions.

The following table describes the endpoint types supported by basic Global Accelerator instances.

**Endpoint deployment**

**Connection type**

**Endpoint type**

**Endpoint**

On Alibaba Cloud

Private connection

**ENI**

Elastic network interface (ENI)

Only secondary ENIs are supported.

**CLB**

Classic Load Balancer (CLB) instance

Only CLB instances that are deployed in virtual private clouds (VPCs) are supported.

**NLB**

Network Load Balancer (NLB) instance

Only internal-facing NLB instances are supported.

**ECS**

Elastic Compute Service (ECS) instance

### Limits

-   You can add only one endpoint group. By default, you can add up to 200 endpoints.
    
    If you want to add more endpoints, you can increase the **gaplus\_quota\_basic\_endpoint\_limit** quota on the [Quota Management](https://ga.console.alibabacloud.com/quota) page. For more information, see the "Adjust quotas" section of the [Manage GA quotas](/help/en/ga/user-guide/manage-ga-quotas#section-yqx-xul-73a) topic.
    
-   Only the following endpoint types are supported: secondary ENIs, CLB instances in VPCs, internal-facing NLB instances, and Elastic Compute Service instances. ENIs, CLB instances, NLB instances, and ECS instances cannot be associated with EIPs or static public IP addresses.
    

**Note**

-   If your basic Global Accelerator instance was created after August 1, 2023, you can create multiple IP addresses for an acceleration region and use internal-facing Network Load Balancer (NLB) instances as endpoints. If your basic Global Accelerator instance was created before August 1, 2023 and you want to use the preceding features, contact your account manager to upgrade your GA instance.
    
-   If your Global Accelerator instances were created before August 1, 2023, the following limits apply:
    
    -   You can add only one acceleration area and one acceleration region to each GA instance.
        
    -   You can add only one endpoint group and one endpoint to each GA instance.
        
    -   You cannot specify an NLB instance as an endpoint.
        
    -   You do not need to add an accelerated IP address or associate an accelerated IP address with an endpoint.
        

## Prerequisites

-   A basic Global Accelerator instance is created. For more information, see [Create a basic GA instance](/help/en/ga/user-guide/create-and-manage-basic-ga-instances#d96efdb088qry).
    
-   A basic bandwidth plan is purchased and associated with the GA instance whose bandwidth billing method is subscription.
    
-   An application is deployed as an endpoint to receive requests that are forwarded by Global Accelerator. For more information about how to create different types of endpoints, see the following topics:
    
    -   [Create a secondary ENI](/help/en/ecs/user-guide/create-and-use-an-eni#task-728113)
        
    -   [Create a CLB instance](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-clb-instances#section-ajj-emg-9b5)
        
    -   [Create and manage an NLB instance](/help/en/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance#task-2223922)
        
    -   [Create an instance on the Custom Launch tab](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b)
        
-   Enterprise real-name verification must be completed if the bandwidth metering method of your basic Global Accelerator instance is pay-by-data-transfer and your business involves cross-border data transmission between regions in the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan). Otherwise, the endpoint group cannot be configured. For more information, see [How do I complete real-name registration?](/help/en/account/support/which-users-are-required-to-undergo-account-authentication)
    
    **Note**
    
    You can use the wizard to configure the instance, acceleration area, listeners, and endpoint groups when you create a standard Global Accelerator instance. If your business involves cross-border data transmission between regions in the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan), you can select a transmission network type as needed.
    
    -   **BGP (Multi-ISP) Pro**: BGP (Multi-ISP) Pro lines are used for network acceleration between regions in the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan).
        
        You do not need to perform enterprise real-name verification.
        
    -   **Cross-border Express Connect**: Cross-border Express Connect circuits are used for network acceleration between regions in the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan).
        
        Cross-border Express Connect circuits provide better acceleration performance but require enterprise real-name verification.
        
    
    For more information, see [Create a pay-as-you-go standard GA instance](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#f5b961f027dh8).
    

## Add an endpoint group and endpoints

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Basic Instance**.
    
3.  On the **Instances** page, find the basic Global Accelerator instance that you want to manage and click its ID.
    
4.  On the instance details page, click the **Endpoint Group** tab, and then click **Add Endpoint Group**.
    
5.  On the **Add Endpoint Group** page, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Endpoint Group**
    
    **Endpoint Group Name**
    
    Enter a name for the endpoint group.
    
    **Region**
    
    Select the region where you want to deploy the endpoint group.
    
    **Endpoint**
    
    **Backend Service**
    
    Endpoints are backend services that receive and handle client requests. To add an endpoint, specify the endpoint type and a backend instance.
    
    Valid values: **ENI**, **CLB**, **NLB**, and **ECS**.
    
    **Note**
    
    -   Only CLB instances that are deployed in VPCs and secondary ENIs are supported.
        
    -   ENIs, CLB instances, NLB instances, and ECS instances that are assigned public IP addresses (EIPs and static public IP addresses) are not supported.
        
    
    **Select Node**
    
    Select the private IP addresses that function as endpoints.
    
    1.  Select the private IP address that you want to use in the **Private IP Address** column.
        
        -   If the endpoint type is **ENI**, you can select the primary private IP address or secondary private IP addresses of the ENI.
            
        -   If the endpoint type is **NLB**, you can select the private IP addresses in different zones of the NLB instance.
            
        -   If the endpoint type is **CLB**, you do not need to select a private IP address.
            
        -   If the endpoint type is **ECS**, you can select the primary private IP address or secondary private IP addresses of the primary ENI of the ECS instance.
            
    2.  (Optional) In the **Node Name (Optional)** column, specify the name of the endpoint.
        
    3.  (Optional) In the **Accelerated IP Address (Optional)** column, select the accelerated IP address that you want to associate with the endpoint.
        
        If no accelerated IP addresses are available, click **Add Accelerated IP Address** on the right side to add an accelerated IP address.
        
        -   If no idle accelerated IP addresses are available
            
            When the message "The IP address is added" appears in the bubble below Add Accelerated IP Address, click **Use IP** or select the accelerated IP address from the Accelerated IP Address drop-down list.
            
        -   If no acceleration areas are available
            
            1.  In the **No acceleration area is available** message, click **Add Acceleration Area**.
                
            2.  In the **Add Acceleration Area** dialog box, select a region from the **Region** drop-down list and a protocol from the **Internet Protocol** drop-down list, and click **OK**. For more information, see [Add an acceleration area](/help/en/ga/user-guide/add-and-manage-acceleration-areas-1#section-fba-71z-oii).
                
            3.  Click **Add Accelerated IP Address** in the Accelerated IP Address (Optional) column. When the message "The IP address is added" appears in the bubble below Add Accelerated IP Address, click **Use IP** or select the accelerated IP address from the Accelerated IP Address drop-down list.
                
        
    
    You can click **\+ Add Endpoint** to add multiple endpoints.
    
    **Note**
    
    On the **Add Endpoint** page, you can add up to 20 endpoints at a time. By default, you can add up to 200 endpoints to a basic GA instance.
    
    If you want to add more endpoints, you can increase the **gaplus\_quota\_basic\_endpoint\_limit** quota on the [Quota Management](https://ga.console.alibabacloud.com/quota) page. For more information, see the "Adjust quotas" section of the [Manage GA quotas](/help/en/ga/user-guide/manage-ga-quotas#section-yqx-xul-73a) topic.
    
6.  **Conditionally required:** If the basic Global Accelerator instance is billed on a pay-as-you-go basis and the bandwidth is billed on a **pay-by-data-transfer** basis, and the service requires cross-border acceleration between the Chinese mainland and regions outside the Chinese mainland, or between different countries and regions, you must read **Compliance Commitments Regarding Cross-border Data Transfers** and select **Agree to the Preceding Compliance Agreement** in the **Cross-border Acceleration Settings** section.
    
    **Important**
    
    If your business involves cross-border data transmission between regions in the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan), make sure that you completed enterprise real-name verification.
    
7.  Click **OK**.
    

## Add an endpoint

After you add an endpoint group, you can perform the following steps to add more endpoints.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Basic Instance**.
    
3.  On the **Instances** page, find the basic Global Accelerator instance that you want to manage and click its ID.
    
4.  On the instance details page, click the **Endpoint Group** tab, and then click **Add Endpoint**.
    
5.  In the **Endpoint** section of the **Add Endpoint** page, configure the parameters and click **OK**.
    
    For more information, see [Step](#step-sqs-3uw-irn) [5](#step-sqs-3uw-irn) of [Add an endpoint group and endpoints](#section-efr-fbv-rly).
    

## Associate an accelerated IP address with an endpoint

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Basic Instance**.
    
3.  On the **Instances** page, find the basic Global Accelerator instance that you want to manage and click its ID.
    
4.  On the details page of the GA instance, click the **Endpoint Group** tab, find the endpoint with which you want to associate an accelerated IP address, and then click **Bind Accelerated IP Address** in the **Bind Accelerated IP Address** column.
    
5.  In the **Bind Accelerated IP Address** dialog box, select the accelerated IP address that you want to associate with the endpoint and click **OK**.
    
    If no idle accelerated IP addresses are available, click **Add Accelerated IP Address** below the **Accelerated IP Address** drop-down list. When the message "The IP address is added" appears in the bubble, click **Use IP** or select the accelerated IP address from the **Accelerated IP Address** drop-down list.
    

## More operations

**Operation**

**Procedure**

Modify the name of an endpoint group

1.  On the **Endpoint Group** tab, find the endpoint group that you want to manage. In the **Endpoint Group ID/Name** column, move the pointer over the right side of the endpoint group name and click ![编辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8655208961/p548919.png).
    
2.  In the dialog box that appears, modify the name of the endpoint group and click **OK**.
    

Disassociate an accelerated IP address from an endpoint

After you disassociate an accelerated IP address from an endpoint, the status of the accelerated IP address changes to **Idle**. When the number of idle accelerated IP addresses reaches the upper limit (10 by default), you cannot disassociate an accelerated IP addresses from an endpoint.

1.  On the **Endpoint Group** tab, find the endpoint from which you want to disassociate an accelerated IP address and click **Disassociate** in the **Actions** column.
    
2.  In the dialog box that appears, click **Unbind**.
    

Delete an endpoint

1.  On the **Endpoint Group** tab, find the endpoint that you want to delete and click **Delete** in the **Actions** column.
    
2.  Delete the endpoint based on the **status of the IP address** that is associated with the endpoint.
    
    -   When the **IP Status** of the endpoint is **Idle**
        
        In the dialog box that appears, click **Delete**.
        
    -   When the **IP Status** of the endpoint is **Associated**
        
        In the dialog box that appears, select **Delete Endpoint Only** or **Delete Accelerated IP Addresses Bound to Endpoint**, and then click **Delete**.
        

Delete an endpoint group

**Warning**

You can delete an endpoint group. After you delete an endpoint group, Global Accelerator no longer provides acceleration services for the endpoint group.

Before you delete an endpoint group, take note of the following items:

-   You cannot delete an endpoint group that has an endpoint whose **IP Status** is **Associated**. You must first disassociate the IP address from the endpoint.
    
-   If the **IP Status** of all endpoints in an endpoint group is **Idle**, you can delete the endpoint group. The system also deletes all endpoints in the endpoint group at the same time.
    

1.  On the **Endpoint Group** tab, find the endpoint group that you want to delete and click **Delete** in the **Actions** column.
    
2.  In the **Delete Endpoint Group** message, click **OK**.
    

## References

-   [CreateBasicEndpointGroup](/help/en/ga/api-createbasicendpointgroup#doc-api-Ga-CreateBasicEndpointGroup): creates an endpoint group for a basic GA instance.
    
-   [UpdateBasicEndpointGroup](/help/en/ga/api-updatebasicendpointgroup#doc-api-Ga-UpdateBasicEndpointGroup): updates the configuration of an endpoint group for a basic GA instance.
    
-   [DeleteBasicEndpointGroup](/help/en/ga/api-deletebasicendpointgroup#doc-api-Ga-DeleteBasicEndpointGroup): deletes an endpoint group for a basic GA instance.
    
-   [CreateBasicEndpoint](/help/en/ga/api-createbasicendpoint#doc-api-Ga-CreateBasicEndpoint): creates an endpoint for a basic GA instance.
    
-   [CreateBasicEndpoints](/help/en/ga/developer-reference/api-ga-2019-11-20-createbasicendpoints): creates endpoints for a basic GA instance.
    
-   [UpdateBasicEndpoint](/help/en/ga/api-updatebasicendpoint#doc-api-Ga-UpdateBasicEndpoint): modifies the name of an endpoint of a GA instance.
    
-   [DeleteBasicEndpoint](/help/en/ga/api-deletebasicendpoint#doc-api-Ga-DeleteBasicEndpoint): deletes an endpoint of a basic GA instance.
    
-   [CreateBasicAccelerateIpEndpointRelation](/help/en/ga/api-createbasicaccelerateipendpointrelation#doc-api-Ga-CreateBasicAccelerateIpEndpointRelation): associates an accelerated IP address with an endpoint of a basic GA instance.
    
-   [CreateBasicAccelerateIpEndpointRelations](/help/en/ga/api-createbasicaccelerateipendpointrelations#doc-api-Ga-CreateBasicAccelerateIpEndpointRelations): associates accelerated IP addresses with the endpoints of a basic GA instances.
    
-   [DeleteBasicAccelerateIpEndpointRelation](/help/en/ga/api-deletebasicaccelerateipendpointrelation#doc-api-Ga-DeleteBasicAccelerateIpEndpointRelation): disassociates an accelerated IP address from an endpoint of a basic GA instance.
