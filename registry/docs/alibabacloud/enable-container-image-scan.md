To use the container image scan feature, you must purchase and enable it. This topic explains how to do so.

## Limit

Container image scan is a value-added feature available only to users of the Advanced, Enterprise, and Ultimate editions, as well as the Value-added Plan.

## **Billing**

The container image scan feature is billed based on the number of image scans: USD 0.1 per scan per month.

## Procedure for Security Center Basic

1.  Log on to [the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Protection Configuration** > **Container Protection** > **Container Image Scan**.
    
3.  Click **Buy Now**.
    
4.  In the **Subscription** billing method, set the **Edition** to **Advanced**, **Enterprise,** **Ultimate**, or **Value-added Plan**.
    
    In addition to **Enterprise** features, **Ultimate** offers **Container Asset Overview**, **Threat Detection on Kubernetes Containers**, and **Runtime Threat Detection**. For higher container security needs, we recommend the **Ultimate** edition. For details on edition differences, see [Functions and features](/help/en/security-center/product-overview/functions-and-features#concept-fc1-xvb-zdb).
    
    **Note**
    
    If you only need the container image scan feature, set edition to **Value-added Plan** and purchase sufficient quotas for **Container Image Scan**.
    
5.  Set the **Purchase or Not** parameter of **Container Image Scan** to **Yes**, and increase the **Quantity**.
    
    We recommend setting the **Quantity** to the number of images you want to scan for vulnerabilities during the subscription. Security Center identifies images by their unique digest value. If the digest does not change, the quota is deducted by one only for the first scan. If the digest changes and the image is scanned again, the quota is deducted again. For instance, to scan 10 images with expected updates of 20 times during the subscription, set the quota to 30 (10 + 20).
    
    References:
    
    -   [Billing overview](/help/en/security-center/product-overview/billing-overview#concept-z2v-2bc-zdb)
        
    -   [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center#task-lxj-3bc-zdb)
        
    
6.  Read and select **Security Center Service Level Agreement**, click **Order Now**, and complete the payment.
    

## Procedure for paid editions

-   Anti-virus: Upgrade to Advanced, Enterprise, or Ultimate, enable **Container Image Scan**, and purchase sufficient quota for scans.
    
-   Advanced, Enterprise, or Ultimate: Enable **Container Image Scan** and purchase sufficient quota for scans.
    

For more information, see [Upgrade and downgrade Security Center](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center#task-o55-wgb-b2b).
