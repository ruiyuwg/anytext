This topic describes the billable items, billing methods, expiration, , and refund policy for the HTTPS acceleration gateway service.

## **Billable items and billing methods**

The HTTPS Acceleration Gateway service is billed based on the number of instances you purchase, the Gateway Resource Calculation Quantity (GRCQ), and the subscription duration.

GRCQ is calculated based on two dimensions: website requests and outbound traffic. If there are both website requests and outbound traffic within an hour, a minimum of 2 GRCQ is consumed. No GRCQ is consumed if there are no website requests or outbound traffic. The rules are as follows:

-   Website requests: 1 GRCQ per 150 requests. This means if the number of website requests is between 1 and 150 within one hour, one GRCQ is consumed.
    
-   Outbound traffic: 1 GRCQ per 30 MB. This means if the outbound traffic is between 1 MB and 30 MB within one hour, one GRCQ is consumed.
    

The following table describes the GRCQ included with HTTPS Acceleration Gateway instances for different subscription durations. Estimate the number of GRCQ you need based on your website traffic. If the default resource specifications do not meet your needs, you can purchase additional GRCQ. For more information, see [Purchase GRCQ](/help/en/ssl-certificate/purchase-https-acceleration-gateway-resources#2ba3454083gke).

**HTTPS Acceleration Gateway instance duration**

**Gateway Resource Calculation Quantity (GRCQ)**

1 month

300

3 months

900

6 months

1,800

1 year

4,000

2 years

8,000

3 years

12,000

## **Pricing**

The actual price is subject to the prices shown on the [HTTPS Acceleration Gateway purchase page](https://common-buy-intl.alibabacloud.com/?spm=0.2020520163.0.0.29a6Q6jvQ6jvfT&commodityCode=cas_gateway_public_intl#/buy) and the [Gateway Resource Calculation Units purchase page](https://common-buy-intl.alibabacloud.com/?spm=0.2020520163.0.0.29a6Q6jvQ6jvfT&commodityCode=cas_requests_public_intl&commodityParams=%7B%22instanceId%22%3A%22cas_gateway-sg-ju33r46zu02%22%7D). For more information about purchasing the HTTPS Acceleration Gateway service through the Certificate Management Service console, see [Purchase HTTPS Acceleration Gateway](/help/en/ssl-certificate/purchase-https-acceleration-gateway-resources).

## Service expiration

If your HTTPS Acceleration Gateway instance expires or your GRCQ is depleted, your website cannot be securely accessed and accelerated over HTTPS. This also affects your website's search engine ranking. To avoid business disruptions, manage your services before they expire.

-   30 calendar days before your HTTPS Acceleration Gateway instance expires, the system notifies you by email that the service is about to expire.
    
-   Gateway Compute Resource Count (GRCQ): When your GRCQ balance drops below 30%, the system notifies you by email every two days, prompting you to purchase more GRCQ. We recommend that you enable auto-renewal when you purchase a GRCQ extension resource plan to prevent your website services from being affected by delayed GRCQ purchases. For more information, see [Purchase Gateway Compute Resource Count (GRCQ)](/help/en/ssl-certificate/purchase-https-acceleration-gateway-resources#2ba3454083gke).
    

## **Renewal policy**

**Renewal method**

**Overview and Renewal Process**

Manual renewal

1.  Log in to the [Certificate Management Service console](https://yundunnext.console.alibabacloud.com/?p=cas).
    
2.  In the navigation pane on the left, choose **Certificate and Domain Application Services** > **HTTPS Acceleration Gateway**.
    
3.  On the **Domain Name Management** tab, find the target instance, and in the **Actions** or **Expiry On** column, click **Renew**.
    
4.  In the **Renew** panel, select a **Subscription Duration**. Read and select **Technical Support Agreement for Certificate Management Service**. Then, click **Buy Now** and complete the payment.
    

Auto-renewal

-   When you purchase an HTTPS Acceleration Gateway instance, you can select **Enable Repeat Purchase** in the **Subscription Duration** section. After you enable auto-renewal, the service is automatically renewed upon expiration. This saves you from the hassle of frequent manual renewals and prevents service interruptions or resource releases that can affect your business.
    
-   If you did not enable auto-renewal during purchase, follow these steps to enable it.
    
    1.  Log in to the [Certificate Management Service console](https://yundunnext.console.alibabacloud.com/?p=cas).
        
    2.  In the top menu bar, choose **Billing > Renew**.
        
    3.  On the **Manual Renewal** tab of the **Renew** page, find the HTTPS Acceleration Gateway instance for which you want to enable auto-renewal. In the **Actions** column, click **Enable Auto-Renewal**.
        
    4.  In the **Enable Auto-Renewal** dialog box, set the auto-renewal duration and click **Enable Auto-Renewal**.
        
        **Important**
        
        The auto-renewal payment is deducted 9 days before the service expires. Make sure your account has a sufficient balance to ensure the payment is processed and the renewal is successful.
        

## **Refund policy**

A full refund is available for services that have not been enabled within 7 days of purchase. For specific refund rules, see [Refunds for HTTPS Acceleration Gateway](/help/en/ssl-certificate/product-overview/https-acceleration-gateway-refund).

**Important**

Extension resource plans for gateway computation resources are non-refundable.
