You can increase or decrease the maximum bandwidth of a pay-as-you-go Internet Shared Bandwidth instance. The billing method cannot be changed.

## Prerequisites

Before you begin, make sure that you have:

-   A pay-as-you-go Internet Shared Bandwidth instance that uses the **Pay By Traffic** billing method
    

## Procedure

1.  Log on to the [Internet Shared Bandwidth console](https://vpc.console.alibabacloud.com/cbwp/cn-hangzhou/cbwps).
    
2.  In the top navigation bar, select the region where the Internet Shared Bandwidth is created.
    
3.  On the **Internet Shared Bandwidth** page, find the target instance and choose **More** > **Modify Configuration** in the **Actions** column.
    
4.  On the **Shared Bandwidth Package (Pay-As-You-Go) | Upgrade/Downgrade** page, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Billing Method**
    
    Only **Pay By Traffic** is supported.
    
    **Bandwidth**
    
    The new maximum bandwidth value. Valid values: 1 to 1000 Mbit/s. You can increase or decrease the value.
    
    **Terms of Service**
    
    Read and agree to the terms of service.
    
5.  Click **Buy Now** and complete the payment.
    

## API reference

[ModifyCommonBandwidthPackageSpec](/help/en/internet-shared-bandwidth/developer-reference/api-vpc-2016-04-28-modifycommonbandwidthpackagespec-brandwidths): Modifies the maximum bandwidth of an Internet Shared Bandwidth instance.
