An Elastic IP Address (EIP) is a public IP address that you can purchase and own independently. Once you associate an EIP with an Elastic Compute Service (ECS) instance, the instance uses the EIP to communicate with the Internet. An EIP is more flexible than a static public IP address and lets you associate it with various cloud resources, such as ECS instances, Server Load Balancer (SLB) instances, and NAT Gateways. This topic describes how to convert a static public IP address to an EIP.

#### Differences between static public IP addresses and EIPs

Both static public IP addresses and EIPs provide access to the Internet.

-   Static public IP addresses
    
    The system assigns a static public IP address when you create an ECS instance in a Virtual Private Cloud (VPC). You can also assign one after creating the instance by modifying its bandwidth configuration. For more information, see [Static public IP](/help/en/ecs/user-guide/public-ip-address).
    
-   EIPs
    
    You can disassociate an EIP from an ECS instance at any time and re-associate it when needed. For more information, see [Elastic IP addresses](/help/en/eip/product-overview/what-is-eip).
    

## **Before you begin**

**Item**

**Description**

Address convertibility

After you convert a static public IP address to an EIP, you cannot convert it back.

However, you can disassociate the EIP and then assign a new static public IP address by modifying the instance's public bandwidth. For more information, see [Modify the bandwidth configurations of subscription instances](/help/en/ecs/user-guide/modify-the-bandwidth-configurations) or [Modify for pay-as-you-go instance](/help/en/ecs/user-guide/modify-the-bandwidth-configurations-of-pay-as-you-go-instances).

**Note**

You can also call the [ModifyInstanceNetworkSpec](/help/en/ecs/api-modifyinstancenetworkspec) operation to modify the bandwidth of the ECS instance and assign a new static public IP address.

IP address

The IP address does not change; it is simply converted to an EIP.

Billing changes

After the conversion, the billing method for public bandwidth remains the same. The resulting EIP is billed separately. EIPs have different billing items than static public IP addresses. In some cases, configuration and association fees may apply to the EIP. For more information, see [EIP billing](/help/en/eip/pay-as-you-go/).

## Prerequisites

Before converting a static public IP address to an EIP, ensure the ECS instance meets these requirements:

-   The instance is in a VPC and has an assigned public IP address.
    
-   f the instance uses the pay-as-you-go billing method, your account must not have an overdue payment.
    
-   If the instance uses the subscription billing method, the public bandwidth must use the **pay-by-traffic** billing method. If the public bandwidth is billed bye **pay-by-bandwidth**, first change it to **pay-by-traffic**. For more information, see [Switch from pay-by-bandwidth to pay-by-traffic](/help/en/ecs/change-the-billing-method-for-network-usage-1#section-k0s-p13-wn2).
    
-   If the instance uses the subscription billing method, the conversion is not supported within 24 hours before its expiration.
    
-   You cannot convert static public IP addresses on BGP (Multi-ISP) Pro lines in the China (Hong Kong) region.
    
-   If you have changed the instance type, wait for the change to take effect before you convert the public IP address.
    
-   The ECS instance must be in the **Running** or **Stopped** state.
    

## Procedure

**Note**

You can also call the [ConvertNatPublicIpToEip](/help/en/ecs/api-convertnatpubliciptoeip#doc-api-Ecs-ConvertNatPublicIpToEip) operation to perform this conversion. When using the API, make sure you use an SDK version of 4.3.0 or later. We recommend using the latest SDK version. For more information, see [Install and use ECS SDKs](/help/en/ecs/developer-reference/overview-14#concept-25699-zh).

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the target ECS instance (network type as **VPC**) and go to its details page. Click **All Actions**, choose **Network and Security Group** > **Convert to EIP**.
    
4.  In the dialog box that appears, confirm the information and click **Confirm**.
    
5.  Refresh the instance details page to view the result.
    
    After the conversion, the instance's **Public IP Address** field is empty and the new EIP appears in the **EIP** field.
    
    Click the IP address to open the [Elastic IP Addresses](https://vpc.console.alibabacloud.com/eip/#/eips) console, where you can manage the EIP.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0068958471/p961764.png)
    

## What to do next

After converting the static public IP to an EIP, you can:

-   Disassociate the EIP from the ECS instance and associate it with an SLB instance or another ECS instance. For more information, see [Associate or Disassociate an EIP with an ECS Instance](/help/en/ecs/user-guide/associate-or-disassociate-an-eip#task-2187826).
    
-   Use EIP bandwidth plans to save costs. For more information, see [Reduce the costs of data transfer over the Internet](/help/en/vpc/user-guide/reduce-the-costs-of-data-transfer-over-the-internet#concept-aqz-v45-sdb).
    
-   Release the EIP when you no longer need it to avoid unnecessary fees. You are billed for an EIP until it is released. For more information, see [Release a pay-as-you-go EIP](/help/en/eip/release-an-eip#task-2021625).
