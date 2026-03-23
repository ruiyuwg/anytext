You can manually renew a subscription instance or enable auto-renewal to extend its usage period. The renewal fee is the same as the purchase fee for a new instance. The renewal feature is available only for subscription instances. Pay-as-you-go instances do not require renewal. For these instances, simply ensure that your account has a sufficient balance. This topic describes how to manually renew an instance and enable auto-renewal.

## Prerequisites

You must pay for or cancel all unpaid scale-out, scale-in, and renewal orders in your Alibaba Cloud account.

## Precautions

-   Enable auto-renewal to prevent service interruptions caused by a late renewal.
    
-   If you manually renew an instance before an auto-renewal payment is processed, the system reschedules the next auto-renewal to occur before the new expiration date.
    
-   Auto-renewal takes effect on the day after you enable it. If your instance expires the next day, you must manually renew it to avoid service interruptions.
    

## Auto-renewal

### Enable auto-renewal when you create an instance

When you create a subscription instance, turn on the **Enable Auto-renewal** switch.

**Note**

After you enable auto-renewal, the system automatically renews the instance based on the selected renewal period. For example, if you select a 3-month renewal period, you are charged for three months at each renewal.

### Enable auto-renewal in the Renewal Management console

On the Renewal Management page, you can enable auto-renewal for one or more EMR Serverless StarRocks instances.

1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
    
2.  In the top menu bar, hover over the **Expenses** button and click **Renewal Management**.
    
3.  On the **Resource Renewal** page, filter for the instances that you want to renew by instance ID, status, time, product, and region.
    
4.  In the Actions column of the target instance, click **Enable Auto-renewal**.
    
    To enable auto-renewal for multiple instances, select the instances and click **Enable Auto-renewal** at the bottom of the page.
    
5.  In the dialog box that appears, set the renewal duration.
    
6.  Click **Enable Auto-renewal**.
    

### Enable auto-renewal on the EMR Serverless StarRocks instance details page

You can enable auto-renewal or modify the renewal duration for an instance on its details page in the EMR Serverless StarRocks console.

1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
    
2.  In the navigation pane on the left, choose **EMR Serverless** > **StarRocks**.
    
3.  In the top menu bar, select a region as needed.
    
4.  Click the name of the target instance to go to its details page.
    
5.  In the **Basic Information** section of the **Instance Details** page, click **Auto-renewal**.
    
6.  Click **On**, select an auto-renewal duration, and then click **OK**.
    

## Manual renewal

### Manually renew an instance in the E-MapReduce console

1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
    
2.  In the navigation pane on the left, choose **EMR Serverless** > **StarRocks**.
    
3.  In the top menu bar, select a region as needed.
    
4.  In the **Actions** column of the target instance, click **Renew**.
    
5.  In the dialog box that appears, set the renewal duration.
    
6.  Click **OK** and complete the payment as prompted.
