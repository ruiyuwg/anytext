If you want to use an Express Connect circuit to access Alibaba Cloud with a lower latency, a higher bandwidth, and no additional advanced network requirements, you can deploy your hybrid cloud networking by using an Express Connect Router (ECR).

## **Scenario**

**Important**

-   Migration involves a switchover. Before migration, make sure that the maximum bandwidth of a single connection does not exceed 50% of the total bandwidth. Otherwise, packet loss may occur.
    
-   When you migrate from multiple transit router connections to ECR connections, you must initiate migration for the transit router connections one by one. Make sure that the current ECR connection after the migration forwards traffic as expected before you can migrate from the next transit router connection.
    

In this example, a data center is connected to Alibaba Cloud virtual private clouds (VPCs) by using a transit router before the migration. The following figure shows the migration configurations. After the migration, VPC1 and VPC2 can communicate with each other by using a transit router, and VPC1 and VPC2 can communicate with VBR1 and VBR2 by using an ECR.

Migration procedure:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2556875671/CAEQUBiBgICC86iE2RkiIGM5OWEyYjMzOTViNDRlZjNhZDQ1NTY5YjAzNWUyZjQ04372921_20240416131826.481.svg)

The following table describes how CIDR blocks are allocated in this example. You can allocate CIDR blocks based on your business requirements. Make sure that the CIDR blocks do not overlap with each other.

**Entity**

**CIDR block planning**

Data center

10.10.10.0/24

VPC

192.168.1.0/24

VBR1

IPv4 address of the gateway on the Alibaba Cloud side: 10.0.0.1

IPv4 address of the gateway on the customer side: 10.0.0.2

IPv4 subnet mask: 255.255.255.252

VBR2

IPv4 address of the gateway on the Alibaba Cloud side: 10.0.0.5

IPv4 address of the gateway on the customer side: 10.0.0.6

IPv4 subnet mask: 255.255.255.252

## **Prerequisites**

-   Two VPCs are created in the China (Hangzhou) region and cloud resources such as Elastic Compute Service (ECS) instances are deployed in the VPCs. For more information, see [Create a VPC with an IPv4 CIDR block](/help/en/vpc/getting-started/create-vpc-with-ipv4#task-1512598).
    
-   An ECR is created. For more information, see the [Create an ECR](/help/en/express-connect/user-guide/create-and-manage-the-leased-line-gateway-ecr#5699c66f57h5z) section of the "Create and manage an ECR" topic.
    
-   An Express Connect circuit and a VBR are created. You can create a hosted connection over a shared Express Connect circuit provided by an Express Connect partner or a dedicated Express Connect circuit. For more information, see [Classic mode](/help/en/express-connect/user-guide/classic-mode#task-2367309), [Connection process for hosted connections over Express Connect circuits](/help/en/express-connect/user-guide/overview-of-hosted-connections/#task-2359306), and [Create and manage a VBR](/help/en/express-connect/user-guide/create-and-manage-a-vbr).
    
-   An Enterprise Edition transit router is created in the same region as the VPCs. The transit router is configured to connect the VPC resources to a data center. For more information, see the [Create a transit router](/help/en/cen/user-guide/transit-routers#section-qmu-6ox-hcu) section of the "Transit routers" topic and [Connect a data center to ECS by using an Express Connect circuit](/help/en/express-connect/use-cases/connect-a-data-center-to-ecs-by-using-an-express-connect-circuit).
    

## **Step 1: Route traffic to VBR1**

You need to use CEN routing policies to route traffic to VBR1 so that VBR1 can handle both inbound and outbound traffic.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the navigation pane on the left, click the ID of the route table that you want to manage.
    
6.  On the route table details page, click the **Routing Policies** tab.
    
7.  On the **Routing Policies** tab, click **Add Routing Policy**.
    
8.  On the **Add Routing Policy** page, specify the following parameters to set VBR2 as a standby VBR and deny traffic to VBR2.
    
    This topic describes only the key parameters. For more information about the other parameters, see [Use routing policies](/help/en/cen/user-guide/work-with-routing-policies).
    
    -   Deny traffic to VBR2
        
        **Parameter**
        
        **Description**
        
        **Policy Priority**
        
        A smaller value indicates a higher priority. The priority value of the routing policy for VBR 2 must be greater than that of the routing policy for VBR 1.
        
        In this example, **30** is used.
        
        **Policy Direction**
        
        In this example, **Ingress Regional Gateway** is selected.
        
        **Match Conditions**
        
        In this example, **Source Instance ID List** is selected and the ID of VBR 2 is selected. This way, the routing policy applies to all routes of VBR 2.
        
        **Policy Action**
        
        Select **Reject** for **Policy Action**.
        
    -   Deny traffic to VBR2
        
        **Parameter**
        
        **Description**
        
        **Policy Priority**
        
        In this example, **30** is used.
        
        **Policy Direction**
        
        In this example, **Egress Regional Gateway** is selected.
        
        **Match Conditions**
        
        In this example, **Source Instance ID List** is selected and the ID of VBR 2 is selected. This way, the routing policy applies to all routes of VBR 2.
        
        **Policy Action**
        
        Select **Reject** for **Policy Action**.
        
    

## **Step 2: Add routes for the VPCs**

Repeat this step to add routes that point to the data center for VPC1 and VPC2. Make sure that the added routes are more specific than the BGP routes advertised by the data center through the ECR.  

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  In the left-side navigation pane, click **Route Tables**.
    
3.  In the top navigation bar, select the region to which the route table belongs.
    
4.  On the **Route Tables** page, find the route table that you want to manage and click its ID.
    
5.  On the details page of the route table, perform the following operations.
    
    1.  Turn off **Accept Advertised Routes**. After you turn off Accept Advertised Routes, the route table does not accept synchronized dynamic routes.
        
    2.  Choose **Route Entry List** > **Custom Route** and click **Add Route Entry**.
        
        **Parameter**
        
        **Description**
        
        **Name**
        
        The name of the custom route.
        
        **Resource Group**
        
        The resource group to which the next hop belongs.
        
        **Destination CIDR Block**
        
        The destination CIDR block to which traffic is forwarded and the type of the destination CIDR block. In this example, **IPv4 CIDR Block** is selected and **10.10.10.0/24** is used as the destination CIDR block.
        
        **Next Hop Type**
        
        Select the type of next hop. In this example, **Transit Router** is selected.
        
        **Transit Router**
        
        Enter the name of the transit router.
        
        **Description**
        
        Enter the description of the custom route.
        

## **Step 3: Create and start a failure drill task for Express Connect circuit 2**

You need to create and start a failure drill task for Express Connect circuit 2 that is associated with VBR 2. The failure drill task disables Express Connect circuit 2 and VBR 2 to simulate failure scenarios. For more information, see the [Create a failure drill task](/help/en/express-connect/user-guide/failover-test#20009ed07et4o) and [Start a failure drill task](/help/en/express-connect/user-guide/failover-test#13f859807e7hr) sections of the "Use the failure drill feature" topic.

## Step 4: Delete the associated forwarding correlation between VBR 2 and the transit router

Delete the associated forwarding correlation between VBR 2 and the transit router.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section, click the ID of the route table that you want to manage. On the details page of the route table, click the **Route Table Association** tab.
    
6.  On the **Route Table Association** tab, find the network instance connection that you want to manage and click **Delete** in the **Actions** column.
    
7.  In the **Delete Association** message, confirm the information and click **OK**.
    

## **Step 5: Delete the route learning policy between VBR 2 and the transit router**

Delete the route learning policy between VBR 2 and the transit router.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section, click the ID of the route table that you want to manage. On the details page of the route table, click the **Route Table Association** tab.
    
6.  On the **Route Table Association** tab, find the network instance connection that you want to manage and click **Delete** in the **Actions** column.
    
7.  In the **Delete Association** message, confirm the information and click **OK**.
    

## **Step 6: Disassociate VBR 2 from the transit router**

You must disassociate VBR 2 from the transit router before you can associate VBR 2 with the ECR.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, find the CEN instance that you want to manage and click the instance ID.
    
3.  On the **Basic Information** tab of the instance details page, click the **Transit Router** tab. On the Transit Router tab, find the transit router that you want to manage and click its ID.
    
4.  On the **Intra-region Connections** tab, find the connection between VBR 2 and the transit router and click **Detach** in the **Actions** column.
    
5.  In the dialog box that appears, confirm the information and click **OK**.
    

## **Step 7: Associate the VPCs with the ECR**

Associate VPC 1 and VPC 2 with the ECR.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the region.
    
3.  In the left-side navigation pane, click **Express Connect Router (ECR)**. On the **Express Connect Router (ECR)** page, find the ECR that you want to manage and click the name of the ECR.
    

1.  On the ECR details page, click the **VPC** tab. On the VPC tab, click **Associate VPC**.
    
2.  In the **Associate VPC** dialog box, configure the parameters described in the following table and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Region**
    
    The region in which the VPC resides.
    
    **Resource Owner**
    
    The type of the account to which the VPC belongs. Valid values:
    
    -   **Current Account**
        
    -   **Another Account**
        
    
    **VPC ID**
    
    The ID of the VPC.
    
    **Allowed Route Prefixes**
    
    The prefixes of the routes that you want to advertise to the local network by using the ECR.
    

## **Step 8: Associate VBR 2 with the ECR**

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Express Connect Router (ECR)**. On the **Express Connect Router (ECR)** page, find the ECR that you want to manage and click the name of the ECR.
    
4.  Click the VBR tab. On the **VBR** tab, click **Associate VBR**.
    
5.  In the **Associate VBR** dialog box, configure the parameters described in the following table and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Resource Owner**
    
    The type of the account to which the VBR belongs. Valid values:
    
    -   **Current Account**
        
    -   **Another Account**
        
    
    **Region**
    
    The region in which the VBR resides.
    
    **Network Instance**
    
    The VBR that you want to associate with the ECR. In this example, VBR2 is selected.
    

## **Step 9: Finish the failure drill task for Express Connect circuit 2**

Finish the failure drill task that is created for Express Connect circuit 2 and restore Express Connect circuit 2 and VBR 2 to the previous state. For more information, see the [Finish a failure drill task](/help/en/express-connect/user-guide/failover-test#e1037fe07eibd) section of the "Use the failure drill feature" topic.

## **Step 10: Route traffic to VBR2**

Refer to [Step 1](#2d491daac63js) to set Action Policy to Allow for **Egress Regional Gateway** and **Ingress Regional Gateway**.

## **Step 11: Delete the static route that points to the transit router from the VPC**

If the CIDR block configured for your VPC is more specific than the received BGP CIDR block, you need to delete the static routes that point to the transit router in VPC1 and VPC2. This way, inbound and outbound traffic are forwarded through VBR2.

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  In the left-side navigation pane, click **Route Tables**.
    
3.  In the top navigation bar, select the region to which the route table belongs.
    
4.  On the **Route Tables** page, find the route table that you want to manage and click its ID.
    
5.  On the details page of the route table, choose **Route Entry List** > **Custom Route**. On the Custom Route tab, find the route that you added in [Step 7](#14b72c0fc1tkg), and click **Delete** in the **Actions** column. In the message that appears, click **OK**.
    

## **Step 13: Create and start a failure drill task for Express Connect circuit 1**

You need to create and start a failure drill task for Express Connect circuit 1 that is associated with VBR 1. The failure drill task disables Express Connect circuit 1 and VBR 1 to simulate failure scenarios. For more information, see the [Create a failure drill task](/help/en/express-connect/user-guide/failover-test#20009ed07et4o) and [Start a failure drill task](/help/en/express-connect/user-guide/failover-test#13f859807e7hr) sections of the "Use the failure drill feature" topic.

## Step 13: Delete the associated forwarding correlation between VBR1 and the transit router

Delete the associated forwarding correlation between VBR 1 and the transit router.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section, click the ID of the route table that you want to manage. On the details page of the route table, click the **Route Table Association** tab.
    
6.  On the **Route Table Association** tab, find the network instance connection that you want to manage and click **Delete** in the **Actions** column.
    
7.  In the **Delete Association** message, confirm the information and click **OK**.
    

## **Step 15: Delete the route learning policy between VBR 1 and the transit router**

Delete the route learning policy between VBR 1 and the transit router.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section, click the ID of the route table that you want to manage. On the details page of the route table, click the **Route Table Association** tab.
    
6.  On the **Route Table Association** tab, find the network instance connection that you want to manage and click **Delete** in the **Actions** column.
    
7.  In the **Delete Association** message, confirm the information and click **OK**.
    

## **Step 16: Disassociate VBR 1 from the transit router**

You must disassociate VBR 1 from the transit router before you can associate VBR 1 with the ECR.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, find the CEN instance that you want to manage and click the instance ID.
    
3.  On the **Basic Information** tab of the instance details page, click the **Transit Router** tab. On the Transit Router tab, find the transit router that you want to manage and click its ID.
    
4.  On the **Intra-region Connections** tab, find the connection between VBR 1 and the transit router and click **Detach** in the **Actions** column.
    
5.  In the dialog box that appears, confirm the information and click **OK**.
    

## **Step 17: Associate VBR 1 with the ECR**

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Express Connect Router (ECR)**. On the **Express Connect Router (ECR)** page, find the ECR that you want to manage and click the name of the ECR.
    
4.  Click the VBR tab. On the **VBR** tab, click **Associate VBR**.
    
5.  In the **Associate VBR** dialog box, configure the parameters described in the following table and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Resource Owner**
    
    The type of the account to which the VBR belongs. Valid values:
    
    -   **Current Account**
        
    -   **Another Account**
        
    
    **Region**
    
    The region in which the VBR resides.
    
    **Network Instance**
    
    The VBR that you want to associate with the ECR. In this example, VBR1 is selected.
    

## **Step 18: Finish the failure drill task for Express Connect circuit 1**

Finish the failure drill task that is created for Express Connect circuit 1 and restore Express Connect circuit 1 and VBR1 to the previous state. For more information, see the [Finish a failure drill task](/help/en/express-connect/user-guide/failover-test#e1037fe07eibd) section of the "Use the failure drill feature" topic.

## **Step 18: View the traffic monitoring data**

Check the traffic monitoring data of VBR 2 to ensure that the ECR connection after the migration starts to forward traffic. This way, the migration is complete. Traffic is forwarded from and to the cloud based on active/active connections that are established by associating an ECR and two Express Connect circuits.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region. In the left-side navigation pane, click **Virtual Border Routers (VBRs)**.
    
3.  On the **Virtual Border Routers (VBRs)** page, find the VBR that you want to manage and click ![监控](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6894140061/p41324.png) in the **Monitor** column to view the traffic monitoring data.
