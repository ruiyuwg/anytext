Internet Shared Bandwidth enables bandwidth sharing and reuse at the region level. After you create an Internet Shared Bandwidth instance, you can add Elastic IP Addresses (EIPs) to the instance to share its bandwidth and reduce Internet costs.

## Line types

Internet Shared Bandwidth instances support two line types: BGP (Multi-ISP) and BGP (Multi-ISP)\\\_Premium.

**Item**

**BGP (Multi-ISP)**

**BGP (Multi-ISP)\\\_Premium**

Supported EIP line types

BGP (Multi-ISP) EIPs

BGP (Multi-ISP)\\\_Premium EIPs

Supported regions

All regions

China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok)

> In the Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok) regions, BGP (Multi-ISP)\\\_Premium lines support only the pay-as-you-go billing method.

## Create an Internet Shared Bandwidth instance

### Console

1.  Log on to the [Internet Shared Bandwidth console](https://vpc.console.alibabacloud.com/cbwp/cn-hangzhou/cbwps).
    
2.  Click **Purchase Internet Shared Bandwidth**.
    
3.  Configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Region**
    
    Select the region for the instance. An EIP can be added only to an Internet Shared Bandwidth instance in the same region.
    
    **Line Type**
    
    Select the line type. An EIP can be added only to an Internet Shared Bandwidth instance that has the same line type. Only the China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok) regions support BGP (Multi-ISP)\\\_Premium Internet Shared Bandwidth instances.
    
    **Billing Method**
    
    If the **Line Type** is BGP (Multi-ISP), only the **Pay By Traffic** billing method is supported. If the **Line Type** is BGP (Multi-ISP)\\\_Premium, the **Pay by bandwidth** billing method is used by default.
    
    **Bandwidth**
    
    Specify the bandwidth of the Internet Shared Bandwidth instance, in Mbps.
    
4.  Click **Buy Now**.
    

### API

Call the [CreateCommonBandwidthPackage](/help/en/internet-shared-bandwidth/developer-reference/api-vpc-2016-04-28-createcommonbandwidthpackage-brandwidths) operation to create an Internet Shared Bandwidth instance.

## Add EIPs to an Internet Shared Bandwidth instance

After you create an Internet Shared Bandwidth instance, add EIPs to the instance to share its bandwidth.

### EIP requirements

The EIPs that you add must meet all of the following requirements:

-   The billing method is pay-as-you-go.
    
-   The EIPs are in the same region as the Internet Shared Bandwidth instance.
    
-   The EIPs use the same line type as the Internet Shared Bandwidth instance.
    

### Behavior after an EIP is added

After an EIP is added to an Internet Shared Bandwidth instance, the following changes take effect:

**Change**

**Description**

Bandwidth sharing

The ECS instance, SLB instance, and NAT Gateway associated with the EIP share the bandwidth of the Internet Shared Bandwidth instance.

Peak bandwidth

The original peak bandwidth of the EIP becomes invalid. The EIP uses the peak bandwidth of the Internet Shared Bandwidth instance.

Billing

The original billing method of the EIP becomes invalid. You are no longer charged for data transfer of the EIP.

Configuration fees

[EIP configuration fees](/help/en/eip/billing-overview#concept-645525) are not affected by whether the EIP is added to an Internet Shared Bandwidth instance.

> A single Internet Shared Bandwidth instance can contain up to 100 EIPs. To add more EIPs, [request a quota increase](/help/en/internet-shared-bandwidth/user-guide/manage-internet-shared-bandwidth-quotas#task-nfp-g4k-wgb).

### Console

1.  Log on to the [Internet Shared Bandwidth console](https://vpc.console.alibabacloud.com/cbwp/cn-hangzhou/cbwps).
    
2.  Find the Internet Shared Bandwidth instance and click **Add IP** in the **Actions** column.
    
3.  Add EIPs by using one of the following methods:
    
    -   **Buy EIP and add to Bandwidth Package**: Enter the number of EIPs to purchase. The system automatically creates pay-as-you-go EIPs and adds them to the Internet Shared Bandwidth instance. You can purchase up to 50 EIPs at a time.
        
    -   **Select from EIP List**: Select the EIPs from the list of available EIPs in the region.
        

### API

-   Call the [AddCommonBandwidthPackageIp](/help/en/internet-shared-bandwidth/developer-reference/api-vpc-2016-04-28-addcommonbandwidthpackageip-brandwidths) operation to add a single EIP.
    
-   Call the [AddCommonBandwidthPackageIps](/help/en/internet-shared-bandwidth/developer-reference/api-vpc-2016-04-28-addcommonbandwidthpackageips-brandwidths) operation to add multiple EIPs in a batch.
    

## Remove EIPs from an Internet Shared Bandwidth instance

After an EIP is removed from an Internet Shared Bandwidth instance, the EIP reverts to its peak bandwidth and billing method before it was added.

### Console

1.  Log on to the [Internet Shared Bandwidth console](https://vpc.console.alibabacloud.com/cbwp/cn-hangzhou/cbwps).
    
2.  Find the Internet Shared Bandwidth instance and click **Manage** in the **Actions** column.
    
3.  Find the EIP to remove. In the **Actions** column, click the **More** icon > **Disassociate from EIP Bandwidth Plan**.
    

> After an EIP is removed, you can [adjust the EIP's peak bandwidth or billing method](/help/en/eip/modify-the-configuration-of-a-pay-as-you-go-eip) or [release the EIP](/help/en/eip/release-an-eip).

### API

Call the [RemoveCommonBandwidthPackageIp](/help/en/internet-shared-bandwidth/developer-reference/api-vpc-2016-04-28-removecommonbandwidthpackageip-brandwidths) operation to remove an EIP from an Internet Shared Bandwidth instance.

## Delete an Internet Shared Bandwidth instance

Before you delete an Internet Shared Bandwidth instance, remove all EIPs from the instance.

### Console

1.  Log on to the [Internet Shared Bandwidth console](https://vpc.console.alibabacloud.com/cbwp/cn-hangzhou/cbwps).
    
2.  Find the instance and choose **Actions** > **More** > **Delete Shared Bandwidth Package**.
    

### API

Call the [DeleteCommonBandwidthPackage](/help/en/internet-shared-bandwidth/developer-reference/api-vpc-2016-04-28-deletecommonbandwidthpackage-brandwidths) operation to delete an Internet Shared Bandwidth instance.

## See also

-   [Billing for Internet Shared Bandwidth: components and rules](/help/en/internet-shared-bandwidth/product-overview/billing-overview/)
    
-   [Differences between data transfer plans and Internet Shared Bandwidth](/help/en/internet-shared-bandwidth/support/faq#li-j14-zts-15y)
    
-   [Transfer an EIP from one Internet Shared Bandwidth instance to another](/help/en/eip/associate-eips-with-and-disassociate-eips-from-eip-bandwidth-plans#section-nut-k92-fhy)
    
-   [Impacts of transferring an EIP from one Internet Shared Bandwidth instance to another](/help/en/eip/associate-eips-with-and-disassociate-eips-from-eip-bandwidth-plans#section-nut-k92-fhy)
