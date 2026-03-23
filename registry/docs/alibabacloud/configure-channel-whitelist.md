Secure Access Service Edge (SASE) lets you configure whitelists for code repositories and peripherals. If you determine that the behavior of a repository or device is safe, you can add it to a whitelist. After an item is whitelisted, SASE no longer controls or blocks content uploads to the repository or data transfers from the device. This topic describes how to configure these whitelists.

## **Prerequisites**

-   You have purchased the Data Protection for Office edition of SASE. For more information, see [Billing overview of Secure Access Service Edge](/help/en/sase/product-overview/billing-overview).
    
-   The SASE app installed on your enterprise terminals is version 4.3.1 or later.
    

## **Configure a code repository whitelist**

After you add a code repository URL to the whitelist, SASE no longer controls or blocks content uploads to that repository.

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Data Protection** > **Policy Center**.
    
3.  On the **Channel Whitelist** > **Code Repository** tab, click **Add**.
    
4.  In the **Add to Whitelist** panel, enter the code repository URL and click **OK**.
    
    You can enter one or more URLs. Separate them with commas (,).
    

## **Configure a USB whitelist**

When the system detects an outbound data transfer, it automatically identifies the peripheral device. You can add the device to a whitelist. SASE does not control or block outbound transfers from whitelisted devices.

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Data Protection** > **Policy Center**.
    
3.  On the **Channel Whitelist** > **USB Whitelist** tab, click **Add**.
    
4.  In the **Add USB Whitelist** panel, select the devices to whitelist and click **OK**.
