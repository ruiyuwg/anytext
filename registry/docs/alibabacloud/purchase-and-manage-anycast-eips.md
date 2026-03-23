Anycast Elastic IP Address (Anycast EIP) is a service that you can use to improve the availability of your Internet-facing services and the quality of Internet connections. Before you use the Anycast EIP service, you must create an Anycast EIP. After an Anycast EIP is created, the system allocates a public IP address to the Anycast EIP. This way, you can use the Anycast EIP to access the Internet.

## Purchase an Anycast EIP

1.  Log on to the [Anycast EIP console](https://vpc.console.alibabacloud.com/eip/anycasts).
2.  On the **Anycast Elastic IP Addresses** page, click **Purchase Anycast EIP**.
    
3.  If this is your first time purchasing an Anycast EIP, the billing of Anycast EIP is managed by Cloud Data Transfer (CDT). You must first activate CDT.
    
    1.  Read and select Terms of Service and click **Activate**.
        
    2.  In the message that appears, click **Continue to Purchase**.
        
    
    **Note**
    
    If you used Anycast elastic IP addresses (Anycast EIPs) and did not activate Cloud Data Transfer (CDT) before 00:00:00 (UTC+8) on June 1, 2023, Anycast EIPs use the pay-by-data-transfer metering method by default. For more information, see [Billing](/help/en/anycast-eip/product-overview/billing-1#concept-2494826).
    
    To activate CDT, go to the [CDT](https://cdt.console.alibabacloud.com/cdt/list) page. For more information about CDT, see [Internet data transfers](/help/en/cdt/internet-data-transfers/) and [Inter-region traffic](/help/en/cdt/inter-region-data-transfers).
    
4.  On the buy page, set the following parameters and click **Activate Now**.
    
    **Parameter**
    
    **Description**
    
    **Region**
    
    Select an access area for the Anycast EIP. Default value: **Outside Mainland China**.
    
    **Instance Spec**
    
    Select an instance type. Default value: **Standard**.
    
    **Billing Method**
    
    Select a billing method. Default value: **Pay-By-Data-Transfer**. For more information, see [Billing](/help/en/anycast-eip/product-overview/billing-1#concept-2494826).
    
    **Resource Group**
    
    Select the resource group to which the Anycast EIP belongs.
    
    The resource group must be created in Resource Management by the current Alibaba Cloud account. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    
    **Name**
    
    Enter a name for the Anycast EIP.
    
    **Quantity**
    
    Specify the number of Anycast EIPs that you want to purchase.
    

After the purchase is complete, you can view the Anycast EIP in the instance list on the **Anycast Elastic IP Addresses** page.

## **Modify the configuration** of an Anycast EIP

You can adjust the bandwidth of an Anycast EIP. The new bandwidth immediately takes effect.

1.  Log on to the [Anycast EIP console](https://vpc.console.alibabacloud.com/eip/anycasts).
2.  On the **Anycast Elastic IP Addresses** page, find the Anycast EIP and choose  **![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9558732271/p108034.png) />Modify Configuration** in the **Actions** column.
    
3.  On the **Anycast EIP | Upgrade/Downgrade** page, modify **Maximum Bandwidth** and select **Terms of Service**.
    
4.  Click **Buy Now**.
    

## Release an Anycast EIP

If your cloud resource no longer requires Internet access, you can release the Anycast EIP that is associated with the cloud resource. After the Anycast EIP is released, you are no longer charged for the Anycast EIP.

Before you release an Anycast EIP, make sure that the Anycast EIP is not associated with a cloud resource. For more information about how to disassociate an Anycast EIP from a cloud resource, see [Disassociate an Anycast EIP](/help/en/anycast-eip/user-guide/manage-endpoints#section-0mr-ztr-oz1).

1.  Log on to the [Anycast EIP console](https://vpc.console.alibabacloud.com/eip/anycasts).
2.  On the **Anycast Elastic IP Addresses** page, select one or more Anycast EIPs that you want to release, and click **Release** below the instance list.
    
3.  In the message that appears, confirm the information and click **Yes**.
    

## References

-   [AllocateAnycastEipAddress](/help/en/anycast-eip/developer-reference/api-eipanycast-2020-03-09-allocateanycasteipaddress): creates an Anycast EIP.
    
-   [ModifyAnycastEipAddressSpec](/help/en/anycast-eip/developer-reference/api-eipanycast-2020-03-09-modifyanycasteipaddressspec): modifies the maximum bandwidth of an Anycast EIP.
    
-   [ReleaseAnycastEipAddress](/help/en/anycast-eip/developer-reference/api-eipanycast-2020-03-09-releaseanycasteipaddress): releases an Anycast EIP.
