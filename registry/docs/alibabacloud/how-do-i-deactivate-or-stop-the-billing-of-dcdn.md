If you directly deactivate Dynamic Content Delivery Network (DCDN), your business may be interrupted. Therefore, Alibaba Cloud does not allow you to deactivate DCDN in the console. However, if you do not add domain names to DCDN or use features such as edge security and EdgeRoutine, you are not charged for DCDN. This is equivalent to deactivating DCDN. You can perform the following operations to stop the billing of DCDN:

-   **Disable real-time log delivery:** If you have enabled the real-time log delivery feature, disable the feature and clear the logs that are stored in Log Service before you remove domain names. For more information, see [Real-time log delivery](/help/en/edge-security-acceleration/dcdn/user-guide/real-time-log-delivery-1).
    
-   **Disable DDoS mitigation:** If you have enabled the DDoS mitigation feature, disable the feature before you remove domain names. For more information, see [DDoS mitigation](/help/en/edge-security-acceleration/dcdn/user-guide/ddos-mitigation).
    
-   **Disable WAF:** If you have enabled the WAF feature, disable the feature before you remove domain names. For more information, see [Getting started with WAF (new edition)](/help/en/edge-security-acceleration/dcdn/user-guide/getting-started-with-waf).
    
-   **Delete routines:** If you have activated EdgeRoutine, delete routines before you remove domain names. For more information, see [Use EdgeRoutine in the DCDN console](/help/en/edge-security-acceleration/dcdn/user-guide/use-edgeroutine-in-the-dcdn-console).
    
-   **Deactivate EdgeKV:** If you have activated the EdgeKV feature, deactivate the feature before you remove domain names. For more information, see [EdgeKV](/help/en/edge-security-acceleration/dcdn/user-guide/edgekv).
    
-   **Remove domain names:** If you have added domain names to DCDN, remove all domain names. After you remove the domain names, DCDN disables the acceleration service and stops charging you for the domain names. For more information, see [Add a domain name](/help/en/edge-security-acceleration/dcdn/getting-started/add-a-domain-name). If you have added domain names to IP Application Accelerator (IPA), remove the domain names. For more information, see [Add a domain name to IPA](/help/en/edge-security-acceleration/dcdn/user-guide/add-a-domain-name-to-ipa).
