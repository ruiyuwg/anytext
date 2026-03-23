Basic Global Accelerator instances provide one-to-one acceleration services between acceleration regions and origin server regions. Basic GA instances provide acceleration services only at Layer 3 (IP). This topic describes how to use a basic Global Accelerator instance to accelerate content delivery and improve user experience.

## Scenarios

The scenario in the following figure is used as an example. A company headquartered in the US (Silicon Valley) region deploys an application on an Elastic Compute Service (ECS) instance in a virtual private cloud (VPC). The ECS instance provides services by using an elastic IP address (EIP) on an elastic network interface (ENI). When users from the office in the China (Hong Kong) region connect to the enterprise application deployed in the US (Silicon Valley) region over the Internet, issues such as latency, network jitters, and packet loss often occur due to unstable network performance.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3532445671/CAEQUBiBgMCk2qCy2BkiIDNlYmM0OGI1YjFhMjQ1YTRiZTI5MTI2MzMxZjg4MzEy3963382_20230830144006.372.svg)

To resolve these issues, you can use a basic Global Accelerator instance to allow users from the office in the China (Hong Kong) region to connect to the global transmission network of Alibaba Cloud by sending requests to an accelerated IP address. Then, user requests are redirected to an endpoint in the US (Silicon Valley) region. This accelerates content delivery and improves user experience.

## Prerequisites

-   A VPC is created in the US (Silicon Valley) region. For more information, see [Create a VPC with an IPv4 CIDR block](/help/en/vpc/getting-started/create-vpc-with-ipv4#task-1512598).
    
-   An ECS instance is created in the VPC. For more information, see [Create an instance on the Custom Launch tab](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).
    
-   The ECS instance is not assigned a public IP address or EIP. If the ECS instance is assigned an EIP, you must disassociate the EIP from the ECS instance.
    
    -   For more information, see [Disassociate an EIP from a cloud resource](/help/en/ecs/user-guide/associate-or-disassociate-an-eip#section-whd-7ne-mfn).
        
    -   If the ECS instance is assigned a public IP address, convert the public IP address to an EIP and disassociate the EIP from the ECS instance. For more information, see [Convert the static public IP address of an ECS instance to an EIP](/help/en/ecs/user-guide/convert-the-public-ip-address-of-an-instance-in-a-vpc-to-an-eip).
        
-   The security group rules of the ECS instance allow access from the clients in the China (Hong Kong) region. For more information about how to configure a security group, see [Work with security groups](/help/en/ecs/user-guide/work-with-security-groups#concept-2556610).
    

**Note**

This topic uses a basic pay-as-you-go Global Accelerator instance as an example to describe how to use Global Accelerator to accelerate content delivery. Before you purchase a basic pay-as-you-go Global Accelerator instance, take note of the following items:

-   After you purchase a Global Accelerator instance whose bandwidth metering method is **Pay-By-Data-Transfer**, you do not need to associate a bandwidth plan with it. The data transfer fees are managed by Cloud Data Transfer (CDT). For more information about the CDT billing rules, see [Pay-by-data-transfer](/help/en/ga/product-overview/pay-by-data-transfer#task-2261223).
    
-   The first time you use a pay-as-you-go GA instance, you must go to the [Activate Service](https://common-buy-intl.alibabacloud.com/?commodityCode=ga_afterpay_public_intl) page to activate the pay-as-you-go Global Accelerator service.
    

## Step 1: Create a basic GA instance

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Basic Instance**.
    
3.  On the **Basic GA Instance** page, click **Create Basic Instance**.
    
4.  On the **Create Basic GA Instance** page, configure the following parameters, click **Buy Now**, and then complete the payment.
    
    **Parameter**
    
    **Description**
    
    **Instance Billing Method**
    
    Select a billing method for the basic Global Accelerator instance.
    
    In this example, **Pay-As-You-Go** is selected.
    
    If you use a basic pay-as-you-go Global Accelerator instance, you are charged for the instance fee and data transfer fee.
    
    -   For more information, see [Billing of pay-as-you-go GA instances](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances).
        
    -   For more information, see [Pay-by-data-transfer](/help/en/ga/product-overview/pay-by-data-transfer).
        
    
    **Bandwidth Billing Method**
    
    Select a bandwidth metering method.
    
    In this example, the default value **Pay-By-Data-Transfer** is used.
    
    After you purchase a Global Accelerator instance whose bandwidth metering method is **Pay-By-Data-Transfer**, you do not need to associate a bandwidth plan with it. The data transfer fees are managed by Cloud Data Transfer (CDT). For more information about the CDT billing rules, see [Pay-by-data-transfer](/help/en/ga/product-overview/pay-by-data-transfer#task-2261223).
    
    If this is the first time that you create a Global Accelerator instance whose bandwidth metering method is **Pay-By-Data-Transfer**, you must activate CDT.
    
    **Resource Group**
    
    Select the resource group to which the basic Global Accelerator instance belongs.
    
    The resource group must be a resource group that is created in Resource Management by the current Alibaba Cloud account. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    

## Step 2: Associate a basic bandwidth plan with the GA instance

You can add an acceleration area for a basic Global Accelerator instance and specify the region where the users that require the acceleration service are located. After you add an acceleration area and an acceleration region, you must add an accelerated IP address. Clients can connect to the nearest acceleration region of the Alibaba Cloud global transmission network by sending requests to the accelerated IP address.

1.  On the **Basic GA Instance** page, find the basic Global Accelerator instance that you want to manage and click its ID.
    
2.  On the instance details page, click the **Acceleration Areas** tab. Then, click **Add Acceleration Area**.
    
3.  In the **Add Acceleration Area** dialog box, configure the parameters described in the following table and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Regions**
    
    Select the region that requires acceleration.
    
    In this example, **China (Hong Kong)** is selected.
    
    For more information about acceleration areas and regions, see [Acceleration area overview](/help/en/ga/user-guide/overview-1/#section-99j-n10-9c3).
    
    **Bandwidth**
    
    Specify the bandwidth of the acceleration region. Unit: Mbit/s.
    
    Bandwidth range: 2 Mbit/s to 20,000 Mbit/s.
    
    **Important**
    
    If you specify a small maximum bandwidth value, throttling may occur and traffic may be dropped. Specify a maximum bandwidth value based on your business requirements.
    
    **Internet Protocol**
    
    Select the IP version that is used to connect to Global Accelerator. Only **IPv4** is supported.
    
    **ISP Line Type**
    
    Select an ISP line type for the Global Accelerator instance.
    
    In this example, **BGP(Multi ISP)** is selected.
    
4.  On the **Acceleration Areas** tab, find the added acceleration area and click **Add Accelerated IP Address**.
    
5.  In the **Associate Endpoint** dialog box, click **Cancel**.
    
    Then, you can view the accelerated IP addresses that are assigned to the accelerated area and the accelerated IP addresses are in the **Idle** state.
    

## Step 3: Add an endpoint group and an endpoint

You can add an endpoint group to forward traffic to endpoints in a specified region.

1.  On the details page of the basic instance, click the **Endpoint Group** tab, and then click **Add Endpoint Group**.
    
2.  On the **Add Endpoint Group** page, configure the parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Endpoint Group**
    
    **Endpoint Group Name**
    
    Specify a name for the endpoint group.
    
    **Region**
    
    Select the region where you want to deploy the endpoint group.
    
    In this example, **US (Silicon Valley)** is selected.
    
    **Endpoint**
    
    **Backend Service**
    
    Endpoints are backend services that receive and handle client requests. To add an endpoint, specify the backend service type and instance.
    
    In this example, **ECS** is selected. Then, you need to select an ECS instance.
    
    **Note**
    
    ECS instances that are assigned EIPs or public IP addresses are not supported.
    
    **Select Node**
    
    Select the private IP address that functions as the endpoint.
    
    1.  In the **Private IP Address** column, select the private IP address that you want to use.
        
    2.  In the **Node Name (Optional)** column, enter a name for the endpoint.
        
    3.  In the **Accelerated IP Address (Optional)** column, select the accelerated IP address that you added in [Step 2](#section-fld-5uh-k6b).
        
    
3.  In the **Cross-border Acceleration Settings** dialog box, read **Compliance Commitments Regarding Cross-border Data Transfers** and select **Agree to the Preceding Compliance Agreement**.
    
4.  **Optional.** After an endpoint group is created and an endpoint is added to the endpoint group, click **View Endpoint Groups**.
    
    Then, you can view the endpoint that you added on the **Endpoint Group** tab and its **IP Status** is **Associated**.
    

## Step 5: Verify the acceleration performance

After you configure the basic Global Accelerator instance, the accelerated IP address serves as the public IP address of the backend service. Clients can connect to the global transmission network of Alibaba Cloud by sending requests to the accelerated IP address. This accelerates access to the backend service.

1.  Open the command prompt on a client in the China (Hong Kong) region.
    
2.  Run the following command to test the network latency:
    
    ```
    ping <The accelerated IP address assigned of the GA instance>
    ```
    

## **References**

-   For more information about basic GA instances, see [Basic GA instances](/help/en/ga/user-guide/basic-ga-instances/).
    
-   For more information about the difference between a basic GA instance and a standard GA instance, see [What is Global Accelerator?](/help/en/ga/product-overview/what-is-global-accelerator/)
