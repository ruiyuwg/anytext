HTTPS Acceleration Gateway is a feature of Certificate Management Service that automates SSL certificate operations and maintenance (O&M) while accelerating website access over HTTPS. You can purchase two types of resources:

-   **HTTPS Acceleration Gateway instance** -- provides automated SSL certificate O&M for a domain name.
    
-   **Gateway Resource Calculation Quantity (GRCQ)** -- a specific amount of GRCQ is included free with each instance; additional GRCQ can be purchased separately.
    

## Before you begin

Before you purchase HTTPS Acceleration Gateway resources, make sure the following requirements are met:

-   You have an Alibaba Cloud account with sufficient balance or a valid payment method.
    
-   You have determined which edition suits your needs. See the following table for a comparison of available editions.
    

**Edition comparison**

**Feature**

**Entry Edition - Single Domain Name**

**Basic - Single Domain**

**Basic - Wildcard Domain**

Domain type

Single domain (e.g., `aliyundoc.com`)

Single domain (e.g., `aliyundoc.com`)

Wildcard domain (e.g., `*.aliyundoc.com`)

Use case

Personal websites

All website types

Websites with multiple subdomains

Domain restrictions

Does not support special domain names such as .edu, .gov, .org, .jp, .pay, .bank, .live, and .nuclear

No restrictions on domain name types, except for domain names that are widely restricted across the globe

Supports up to three levels of wildcard domain names (up to three dots), e.g., `*.example.aliyundoc.com`

**Note**

For information about the matching and issuance rules for wildcard domain names, see [What domain names are supported by wildcard certificates?](/help/en/ssl-certificate/domain-names-that-are-supported-by-wildcard-certificates)

**Important**

-   If your website content violates relevant national regulations, the HTTPS Acceleration Gateway service is automatically suspended.
    
-   If your website is under a DDoS attack, it becomes inaccessible. If you encounter these issues, contact your business manager for assistance.
    

## Purchase an HTTPS Acceleration Gateway instance

Each instance provides automated SSL certificate O&M for one domain name. You do not need to manage SSL certificates manually.

1.  Log on to the [Certificate Management Service console](https://account.alibabacloud.com/login/login.htm?spm=5176.12901015-2.0.0.57a4525c5R9Yj3).
    
2.  In the left-side navigation pane, choose **Certificate and Domain Application Services** > **HTTPS Acceleration Gateway**.
    
3.  On the **Domain Name Management** tab, click **Purchase**.
    
4.  In the **Purchase** panel, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Edition**
    
    Select the edition that fits your needs. For a comparison of editions, see the table in [Before you begin](#h2-42309c82).
    
    **Purchase Quantity**
    
    The number of domain names to add. Valid values: 1 to 99,999.
    
    **Subscription Duration**
    
    The subscription duration for the instance. The available durations vary based on the **Edition** you select. The maximum subscription duration is 3 years. To prevent service disruptions when your instance expires, select **Auto-renewal**. When auto-renewal is enabled, the renewal duration equals your initial subscription duration. For example, if you purchase a 3-month subscription, the instance is automatically renewed for another 3 months before it expires. For more information, see [Renewal policy](/help/en/ssl-certificate/product-overview/billing-of-https-acceleration-gateway).
    
5.  Click **Buy Now** and complete the payment.
    

## Purchase Gateway Resource Calculation Quantity (GRCQ)

When you purchase an HTTPS Acceleration Gateway instance, you receive a specific amount of GRCQ for free. If the included GRCQ is used up or your purchased GRCQ service expires, purchase additional GRCQ to keep your HTTPS Acceleration Gateway service running without interruption. For more information about included GRCQ amounts, see [Billable items and billing methods of HTTPS Acceleration Gateway](/help/en/ssl-certificate/product-overview/billing-of-https-acceleration-gateway).

1.  Log on to the [Certificate Management Service console](https://account.alibabacloud.com/login/login.htm?spm=5176.12901015-2.0.0.57a4525c5R9Yj3).
    
2.  In the left-side navigation pane, choose **Certificate and Domain Application Services** > **HTTPS Acceleration Gateway**.
    
3.  On the **HTTPS Acceleration Gateway** page, in the **Remaining Quota** section, click **Buy Now**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7990063271/p820844.png)
    
4.  In the panel that appears, select the specifications, quantity, and other parameters. Then, click **Buy Now** and complete the payment.
    

### Auto-repurchase

When you purchase GRCQ, you can enable auto-repurchase. Auto-repurchase is different from auto-renewal:

-   **Auto-renewal** renews your HTTPS Acceleration Gateway instance subscription before it expires.
    
-   **Auto-repurchase** automatically purchases additional GRCQ when the remaining GRCQ in your current order drops below 50%. This prevents service interruptions caused by GRCQ exhaustion.
    

To disable auto-repurchase or change the repurchase specifications after purchase, go to the **HTTPS Acceleration Gateway** page and click **Repeat Purchase Management**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7990063271/p820894.png)

**Important**

After you disable auto-repurchase, you must enable it again when you next purchase GRCQ if you want to continue using this feature.

## References

For more information about the billing and expiration policies of HTTPS Acceleration Gateway, see [Billing of HTTPS Acceleration Gateway](/help/en/ssl-certificate/product-overview/billing-of-https-acceleration-gateway).
