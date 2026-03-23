Private Certificate Authority (PCA) enables you to build a private CA hierarchy for your organization to manage identity authentication, data encryption, and decryption for internal applications. This topic describes the billable items, expiration policies, and renewal rules for PCA.

## Billing Items

**Important**

The prices in the following table are for reference only. For actual prices, see the service [purchase page](https://common-buy-intl.alibabacloud.com/?spm=5176.2020520163.0.0.6e76bWAAbWAAo0&commodityCode=cas_casdeposit_public_intl&request=%7B%22Commodity%22%3A%22pca%22%2C%22ca_root%22%3A%221%22%2C%22pca_use%22%3A%22Unregulated%22%2C%22region%22%3A%22eu-central-1%22%7D).

**Service Type**

**Billing Method**

**Price**

**Billing Rule**

Private root CA

Subscription

USD 760/month

Unit price of a private root CA (in USD/month) × subscription duration

**Note**

Each root CA instance includes one root CA, one intermediate CA, and a quota for 10 free private certificates. The following rules apply to the free quota:

-   Usage period: Use the quota to issue certificates within 30 days from the date of purchase. Unused quota expires and is purged.
    
-   Certificate validity: Certificates issued using the free quota are valid for 30 days from the date of issuance. Their validity period does not extend with root CA renewal. For separately purchased private certificates, customize the validity period.
    

Private intermediate CA

Subscription

USD 380/month

Unit price of a private intermediate CA (in USD/month) × subscription duration

Private certificate

Upfront

The unit price of private certificates decreases as the quantity increases.

Prices are the same within the following quantity ranges. The higher the quantity, the lower the price.

-   1 to 1,000 certificates: USD 0.7.
    
-   1,001 to 10,000 certificates: USD 0.3.
    

**Note**

Within each calendar year (January 1 to December 31), after the cumulative number of purchased private certificates reaches 120,000, any additional certificates are free of charge. The cumulative quantity resets on January 1 of the next year.

Unit price per certificate (in USD) × quantity

## Expiration

After a root CA or an intermediate CA expires, you cannot enable it or request new certificates from it. To avoid service disruptions, renew your CAs within 30 calendar days before they expire. If a CA has already expired, you must reactivate it.

## Renewal

If a root CA or an intermediate CA is about to expire, you can renew it in the Certificate Management Service console within 30 calendar days of its expiration date. After a CA expires, you can no longer renew it. To continue using the service, you must reactivate the CA.

### Renew

**Important**

You can renew a root CA or an intermediate CA only within 30 calendar days before it expires.

1.  Log in to the [Certificate Management Service console](https://yundunnext.console.alibabacloud.com/?p=cas).
    
2.  In the navigation pane on the left, choose **Certificate Management** > **Private Certificate Management**. On the **Private Certificate Management** page, select the region where the PCA service is located.
    
3.  On the **Private CAs** tab, locate the target private CA. In the **Actions** column, click **Renew**.
    
    The renewal object depends on how the CA was created. Details are as follows:
    
    -   If the root CA and the intermediate CA were created at the same time, renew only the root CA. This extends the service period for both the root CA and the intermediate CA created with it.
        
    -   If the intermediate CA was purchased separately, first renew the root CA to ensure it is valid. Then, renew the intermediate CA separately to extend its service period.
        
    
4.  On the private certificate renewal page, confirm the current configuration. Select the **Subscription Duration** (the service duration to renew). Read and select the **Terms of Service**, then click **Buy Now** and complete the payment.
    
    After you complete the purchase, you can view the **Expire On** date for the root CA or intermediate CA on the **Private CAs** page of the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas) . This date is updated to the expiration date after renewal.
    

### Reactivate

If a root CA or an intermediate CA expires, reactivate it in the Certificate Management Service console to continue using the private certificate service. Reactivate the root CA and intermediate CA separately.

1.  Log in to the [Certificate Management Service console](https://yundunnext.console.alibabacloud.com/?p=cas).
    
2.  In the navigation pane on the left, choose **Certificate Management** > **Private Certificate Management**. On the **Private Certificate Management** page, select the region where the PCA service is located.
    
3.  On the **Private CAs** tab, locate the target CA. In the **Actions** column, click **Reactivate**.
    
4.  On the **Certificate Management Service** page, select the CA configuration. Read and select the **Terms of Service**, then click **Buy Now** and complete the payment.
    
    **Important**
    
    -   When reactivating a root CA, select only the **Certificate Algorithm** and **Duration**. When reactivating an intermediate CA, select only the **Duration**.
        
    -   If the CA status was **Disabled** before reactivation, enable the CA after reactivation to continue using the PCA service. For more information, see [Enable a Private CA](/help/en/ssl-certificate/enable-a-private-ca#task-2061942). If the CA status was **Enabled** before reactivation, use the PCA service immediately after reactivation.
        
    
5.  **Optional:** Return to the Certificate Management Service console to view the expiration date of the reactivated private root CA.
