If the current metering method no longer meets your business requirements, you can change the metering method when you use Dynamic Route for CDN (DCDN). This topic describes how to change the metering method.

## References

DCDN allows you to change the metering method based on your business requirements. For more information, see the following content.

**Note**

-   If you purchase an outbound data transfer plan, you must select the pay-by-data-transfer metering method. Otherwise, the plan cannot be used.
-   After you submit a metering method change, you cannot cancel the change or submit another change before the change takes effect. Proceed with caution.
-   Before the change takes effect, you are charged based on the previous metering method.
-   You can follow the same procedure to change the metering method of WebSocket and IP Application Accelerator (IPA).

Change requirement

Method

Pay-by-peak-bandwidth to pay-by-data-transfer

[Change the metering method in the console](#section-99r-jbp-yas).

Other change requirements, such as pay-by-data-transfer to pay-by-peak-bandwidth.

Contact your account manager or contact us by other means. For more information, see [Contact us](/help/en/cloud-migration-guide-for-beginners/latest/contact-us#task-2155749). Alibaba Cloud determines whether to approve your application based on factors such as service security and resource quotas. If your application is approved, you can change the metering method in the DCDN console.

**Note**

To change the metering method to pay-by-peak-bandwidth, the peak bandwidth of your workloads in the last 30 days must be greater than 5 Gbit/s.

## Change the metering method in the console

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
2.  In the Billing Method section on the right side of the Overview page, find the service for which you want to change the metering method and click Change.
3.  Read the tips about when the new metering method takes effect and click OK.
4.  On the Upgrade/Downgrade page, select a new metering method, select DCDN Terms of Service, and then click Buy Now.

## Rules for changes to take effect

If you change the metering method by contacting your account manager or contacting us by other means, the configuration option is provided in the console after the application is approved. After the configuration is submitted, the change is submitted. The new metering method takes effect after the current billing cycle ends. The following rules apply:

-   If you change pay-by-data-transfer to another metering method, the new metering method takes effect at 00:00 (UTC+8) on the next day.
-   If you are charged on a daily basis and change pay-by-peak-bandwidth to another metering method, the new metering method takes effect at 00:00 (UTC+8) on the next day.
