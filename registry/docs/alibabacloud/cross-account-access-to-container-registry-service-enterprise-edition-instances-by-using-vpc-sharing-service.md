The virtual private cloud (VPC) sharing feature allows multiple Alibaba Cloud accounts to create cloud resources in a shared and centrally managed VPC, and allows different accounts to access cloud resources each other over the shared VPC. For example, Alibaba Cloud Account A (Account A) can access Container Registry Enterprise Edition instances (Enterprise Edition instances) in Alibaba Cloud Account B (Account B) over a shared VPC.

## **Prerequisites**

-   Alibaba Cloud DNS PrivateZone is activated for Account A. To enable Alibaba Cloud DNS PrivateZone, visit [Alibaba Cloud DNS PrivateZone](https://dnsnext.console.alibabacloud.com/privateDNS/introduce?resourceGroupId=). In addition, Container Registry is granted the permission to access Alibaba Cloud DNS PrivateZone. To grant the permission, click [RAM Quick Authorization](https://ram.console.alibabacloud.com/authorize?request=%7B%22referrer%22%3A%22CR%22%2C%22payloads%22%3A%5B%7B%22missionId%22%3A%22CR.SLRForContainerRegistryAccessCustomerPrivateZone%22%7D%5D%2C%22callback%22%3A%22https%3A%2F%2Fwww.alibabacloud.com/help/zh/acr/user-guide/cross-account-access-to-container-registry-service-enterprise-edition-instances-by-using-vpc-sharing-service%22%7D).
    
    **Note**
    
    You are charged for using Alibaba Cloud DNS PrivateZone. For more information about the billing of Alibaba Cloud DNS PrivateZone, see [Billing](/help/en/dns/product-billing).
    
-   An Enterprise Edition instance is created in Account B. For more information, see [Create a Container Registry Enterprise Edition instance](/help/en/acr/user-guide/create-a-container-registry-enterprise-edition-instance).
    
-   The VPC in Account A is shared with Account B. For more information, see [Resource owner enables VPC sharing](/help/en/vpc/user-guide/resource-owner-enables-vpc-sharing).
    

## **Limits**

Before you use the VPC sharing feature to access an Enterprise Edition instance across accounts, you must understand the limits of VPC sharing. For more information, see [VPC sharing](/help/en/vpc/vpc-sharing#section-4sz-h2l-2x4).

## **Configure cross-account VPC access control for the Enterprise Edition instance**

**Note**

Use Account B to log on to the Container Registry console.

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Enterprise Edition instance that you want to manage.
    
5.  In the left-side navigation pane of the management page of the Enterprise Edition instance, choose **Repository** > **Access Control**.
    
6.  On the VPC tab of the **Access Control** page, click **Add VPC**.
    
7.  In the **Add VPC** dialog box, select a VPC and vSwitch in Account A. Click **Confirm**.
    
    Wait until the **Status** of the VPC and vSwitch changes to **Running**.
    

## **References**

For more information, see [VPC sharing](/help/en/vpc/vpc-sharing).
