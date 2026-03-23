EMR Serverless StarRocks provides multiple gateway functions. It supports allocating independent gateways to different business scenarios in storage-compute separation environments. This ensures isolation and stability of FE services. You can route critical business queries when instance load is high. Routing independent FE nodes through specific gateways can maintain service performance and reliability.

## **Prerequisites**

You have created a storage-compute separated instance. For more information, see [Create an instance](/help/en/emr/emr-serverless-starrocks/create-an-instance).

## **Limits**

Only applicable to instances that the last three digits are 1.7.9 or higher. For example, 3.3.8-1.94-1.7.10.

## **Check the default gateway**

The system will automatically create a default gateway instance to handle all query requests from implicit gateways. You can view information about the default gateway by following steps.

1.  Go to the EMR Serverless StarRocks instance details page.
    
    1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the left-side navigation pane, select **EMR Serverless** > **StarRocks**
        
    3.  In the top menu bar, select the region.
        
    4.  Click the name of the target instance.
        
2.  On the **Instance Details** page, in the **FE Details** section, you can check the default gateway information.
    
    **Parameter**
    
    **Description**
    
    **Internal Endpoint**
    
    The internal access endpoint of the gateway, for applications or services within the same VPC.
    
    -   **View PrivateZone**: You can view DNS records.
        
    -   **Enable SLB**: After enabling SLB, load balancing will be performed using SLB (small type I slb.s1.small).
        
        **Important**
        
        -   Enabling SLB will incur corresponding fees. For more information, see [CLB Billing overview](/help/en/slb/classic-load-balancer/product-overview/billing-overview/).
            
        -   After using SLB, you cannot switch back to PrivateZone.
            
        
        After enabling, click **View SLB** to navigate to the Alibaba Cloud Server Load Balancer (SLB) console, to view details of the SLB instance associated with the current gateway.
        
    
    **Public Endpoint**
    
    You can access and use the StarRocks instance through the public network. After enabling public access, the StarRocks instance can be accessed from within Alibaba Cloud VPC.
    
    To access the gateway from the public network, click **Enable Access over Internet**.
    
    **Important**
    
    Enabling public access will create a CLB instance and incur fees. For more information, see [CLB Billing overview](/help/en/slb/classic-load-balancer/product-overview/billing-overview/).
    
    **Write to Leader Only**
    
    Whether to restrict the Leader node to process only write requests (such as data import operations) and not query requests.
    
    -   Disabled: The Leader node processes both write and query requests.
        
    -   Enabled: The Leader node processes only write requests, and query requests are distributed among other Follower nodes.
        
    
    In high concurrency write scenarios, enabling this option can reduce the pressure on the Leader node, improving write performance.
    
    **Network Type**
    
    Indicates the network connection type of the current gateway.
    
    **Number of Associated FEs**
    
    The number of Frontend (FE) nodes associated with the current gateway.
    
    The default gateway automatically associates with the initial FE nodes during system initialization. It will automatically associate with new-added FE nodes after scaling out. If you do not create a new gateway, the default gateway always associates with all FE nodes.
    

## **Create a gateway**

Default gateway is suitable for most scenarios. However, if higher isolation or performance optimization required, we recommend creating a custom gateway.

**Important**

-   Binding a new gateway may cause brief interruptions to some queries. We recommend performing during off-peak business hours to minimize impact on business.
    
-   Creating a new gateway will incur corresponding SLB fees. For more information, see [CLB Billing overview](/help/en/slb/classic-load-balancer/product-overview/billing-overview/).
    
-   If there are insufficient FE nodes, you cannot create a gateway. You must first scale out FE nodes. For more information about scaling, see [Scale in or out an instance](/help/en/emr/emr-serverless-starrocks/add-or-remove-be-nodes#section-s3i-gtb-4of).
    

1.  Enable SLB.
    
    1.  On the **Instance Details** page, in the **Gateway Information** section, click **Enable SLB**.
        
    2.  In the dialog box that appears, click **OK**.
        
2.  On the **Instance Details** page, in the **Gateway Information** section, click **Create Gateway**.
    
3.  In the **Create Gateway** dialog box, complete the following configurations.
    
    **Parameter**
    
    **Description**
    
    **Gateway Name**
    
    Enter a name for the gateway for identification and management.
    
    **Assigned Node Count**
    
    A new gateway allows you to flexibly assign FE nodes to the new gateway based on requirements. A node assignment step size is 2.
    
    For example, if your default gateway originally had 3 FE nodes, and you scaled out by 2 nodes, the default gateway would have 5 FE nodes. When you create a new gateway, you can associate 2 nodes with the new gateway. This is to achieve independent management of the additional resources.
    
4.  Click **OK**.
    

## **Modify a gateway**

1.  On the **Instance Details** page, in the **Gateway Information** section, click **Modify Gateway** to the right of the newly created gateway.
    
2.  In the dialog box that appears, you can modify the **Gateway Name** and **Assigned Node Count** parameters. Then click **OK**.
    

## **Delete a gateway**

**Note**

-   You can only delete newly created gateways.
    
-   Before deleting a gateway, make sure that no business is connected. Once deleted, all tasks submitted by clients connected to that gateway will fail.
    

1.  On the **Instance Details** page, in the **Gateway Information** section, click **Delete Gateway** to the right of the newly created gateway.
    
2.  In the dialog box that appears, click **OK**.
