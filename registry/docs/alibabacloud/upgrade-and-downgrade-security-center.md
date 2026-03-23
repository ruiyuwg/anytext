When your security protection needs change, you can adjust your Security Center edition and add-ons by upgrading or downgrading. For example, you can upgrade Security Center from Anti-virus Edition to Advanced Edition, or cancel the Anti-ransomware add-on. This topic describes how to upgrade or downgrade Security Center.

## Supported upgrades and downgrades

**Important**

-   Services not listed below cannot be downgraded. For example, Security Center editions and Cloud Honeypot services cannot be downgraded. If you need to downgrade the edition or reduce the Cloud Honeypot quotas, you can renew with a configuration change. This schedules the change for the next billing cycle, while your current billing cycle remains unaffected. For more information about how to renew with a configuration change, see [Manual renewal](/help/en/security-center/product-overview/renew-the-subscription-to-security-center#section-e6k-rz6-uhw).
    
-   Starting from January 14, 2025, when you upgrade or downgrade the purchase quantity of the Agentic SOC, you must meet the minimum purchase quantity and step size requirements for log ingestion traffic and Log Storage Capacity. This means you must manually adjust the quantity to meet the minimum and step-size requirements to perform the upgrade or downgrade. For more information about the minimum purchase quantity and step size for the Agentic SOC service, see [\[Notice\] Billing rules of Cloud Threat Detection and Response (CTDR) change](/help/en/security-center/product-overview/notice-cloud-threat-detection-and-response-adjustment-sales-strategy).
    
-   To upgrade one add-on and downgrade another, you must perform two separate operations.
    

**Change type**

**Supported item**

**Use case**

Upgrade

Upgrade service edition (from a lower edition to a higher edition: Anti-virus Edition, Advanced Edition, Enterprise Edition, Ultimate Edition)

You need a higher edition for more comprehensive protection because the current one is insufficient.

Increase the Number of Protected Servers or Number of vCPUs for a Security Center instance

The current quota for the Number of Protected Servers or Number of vCPUs for your Security Center instance is insufficient.

**Note**

If you purchased a Security Center instance and onboarded all your assets, and the purchased quota is less than the total number of servers or vCPUs under your Alibaba Cloud account, you must upgrade to increase quotas. A notification appears in the upper-right corner of the Overview page on the Security Center console, prompting you to increase your quotas promptly.

Purchase add-ons

After purchasing a subscription Security Center instance, you need to purchase add-ons such as Web Tamper Proofing, Anti-ransomware, Container Image Scan, or Application Protection.

Increase add-on quotas

You need to increase the Log Storage Capacity, anti-ransomware capacity, or number of Web Tamper Proofing quotas.

Downgrade

Decrease the **Number of Protected Servers** or **Number of vCPUs**

If you have unbound quotas for the **Number of Protected Servers** or **Number of vCPUs**, you can downgrade to release them.

**Note**

If you purchased a Security Center instance and have unused quotas for **Number of Protected Servers** or **Number of vCPUs** that you no longer need, you can perform a downgrade. After the downgrade, the **Number of Protected Servers** and **Number of vCPUs** must be at least the total number of servers or vCPUs under your Alibaba Cloud account.

Cancel add-ons

You have purchased add-ons such as Web Tamper Proofing or Anti-ransomware but no longer need to use them.

**Important**

To cancel the Web Tamper Proofing service, you need to set the number of quotas to 0 and disable the feature during the configuration change.

Decrease add-on quotas

You need to decrease the Log Storage Capacity, anti-ransomware capacity, number of Web Tamper Proofing quotas, number of , or number of Application Protection quotas.

**Note**

Logs are automatically deleted when you release a Security Center instance.

## Upgrade and downgrade fees

**Change type**

**Fee description**

Upgrade

You must pay the price difference for the upgrade.

Formula for calculating the price difference: (Fee for increased quotas + Fee for add-ons) \* Remaining subscription period (in seconds)

Downgrade

You will receive a refund for the fees for disabled services or reduced quotas.

For the refund calculation formula, see [Billing Details](/help/en/user-center/cancel-subscription/#p-07a-r3i-jet).

For more information about billing, see [Billing details](/help/en/security-center/product-overview/billing-overview#concept-z2v-2bc-zdb).

## Prerequisites

You cannot upgrade or downgrade your service if a pending renewal order with configuration changes exists.

In the upper-right corner of the console, choose ****Expenses**** > ******Expenses** and Costs****. On the **Order Management** > **Orders** > **Orders for Services** page, select **Security Center** from the **Product** filter, and click **Search**. Check the **Status** of a recent renewal order for pending configuration changes.

## Upgrade

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  On the **Overview** page, in the ****Subscription**** section, click **Change****\>** **Upgrade Now**.
    
3.  On the **Order Upgrade** tab, configure the desired changes.
    
    -   To increase the **Protected Servers** or **Cores**, adjust the parameters to the desired quantity.
        
    -   To enable an add-on, set ****Purchase or Not**** to **Yes** for that add-on and set the purchase quantity.
        
    
4.  Read and select **Security Center Service Agreement**, click **Order Now**. Then, confirm the order information and complete the payment.
    

## Downgrade

1.  Log on to the [Security Center Console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  On the **Overview** page, in the **Subscription** area, click **Change** > **Downgrade**.
    
3.  On the **Order Downgrade** tab, select the items that you want to downgrade.
    
    -   If you need to decrease the number of protected servers, the new quantity cannot be less than the number of currently bound quotas.
        
        **Note**
        
        If you purchased a Security Center instance and onboarded all your assets, the **Protected Servers** and **Cores** after the downgrade must be at least the total number of servers or vCPUs under your Alibaba Cloud account.
        
    -   If you no longer need an add-on, set ****Purchase or Not**** to **No** for that add-on.
        
    -   To decrease an add-on's quota, you must first release its associated quotas or capacity.
        
        **Important**
        
        The final refund amount is displayed on the downgrade page.
        
4.  Read and select **Security Center Service Agreement**, and then click ****Order Now****.
    

## Related topics

-   [Can the subscription period of upgraded server quotas or add-ons be different from that of the purchased Security Center instance?](/help/en/security-center/product-overview/billing-faq#38dc3439131pc)
    
-   [Can I downgrade Security Center Enterprise Edition to the free edition?](/help/en/security-center/product-overview/billing-faq#section-nmg-zcm-qdy)
    
-   [What to do if you get a "pending renewal order" error](/help/en/security-center/product-overview/billing-faq#section-dxi-0qh-wxm)
