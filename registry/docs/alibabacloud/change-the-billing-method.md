The pay-as-you-go billing method is suitable for short-term or temporary business needs, whereas the subscription billing method is suitable for long-term or stable business needs. If your business needs change, Hologres lets you switch between the pay-as-you-go and subscription billing methods to help you save costs. This topic describes how to switch the billing method for a Hologres instance.

## Notes

-   For more information about the pay-as-you-go and subscription billing methods, see [Billing overview](/help/en/hologres/product-overview/billing-overview).
    
-   After you switch from pay-as-you-go to subscription, the default storage resource is 0 GB. If your current instance contains data, you are billed for the storage on a pay-as-you-go basis. You must purchase a storage resource for the storage to be billed based on the subscription method.
    
-   For more information about the rules for calculating refunds when you switch from subscription to pay-as-you-go, see [Refunds for switching from subscription to pay-as-you-go](/help/en/user-center/refund-rules#X0JDx).
    

## Procedure

1.  Log on to the [Hologres console](https://hologram.console.alibabacloud.com/#/instance). In the upper-left corner of the top menu bar, select the destination region.
    
2.  In the navigation pane on the left, click **Instances**.
    
3.  In the **Billing Method** column of the target instance, click **Switch to Subscription** or **Switch to Pay-as-you-go**.
    
4.  On the billing method conversion page, complete the configuration.
    
    -   Set Duration. This parameter is required only when you switch from pay-as-you-go to subscription.
        
    -   Read and accept the Terms of Service.
        
5.  Click **Buy Now** and follow the prompts to complete the payment.
    

## **References**

You can upgrade or downgrade the compute and storage resources of a Hologres instance to improve resource utilization. For more information, see [Upgrade or downgrade an instance](/help/en/hologres/product-overview/upgrade-or-downgrade-instance-specifications).
