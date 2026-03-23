Revoke an active SSL certificate to invalidate it if it is compromised, has incorrect information, or is no longer needed. This guide covers the revocation process via Certificate Management Service, its impact on quota refunds, and how to delete revoked or expired certificates.

## Revoke an SSL certificate

### Use cases for revocation

-   The SSL certificate is issued, but you need to modify the certificate application information, change the domain name bound to the certificate, or change the encryption algorithm.
    
    -   **The certificate was issued less than 28 calendar days ago and its domain name has not been changed**:
        
        After the certificate is successfully revoked, **Alibaba Cloud returns the corresponding SSL certificate quota**. You can use the returned quota to submit a new certificate application.
        
        **Note**
        
        The **28 calendar days** are calculated from the certificate's issuance time. For example, if a certificate is issued at **12:00:00 on May 1, 2025**, Alibaba Cloud refunds your certificate quota if the revocation is completed before **12:00:00 on May 29, 2025**, provided no domain name changes have been made. No refund is issued after this deadline.
        
    -   **The certificate was issued more than 28 calendar days ago or its domain name has been changed**:
        
        After the certificate is successfully revoked, **Alibaba Cloud does not return the consumed SSL certificate quota**. You must purchase a new SSL certificate.
        
-   You no longer need to use an issued SSL certificate.
    
    Execute the revocation operation directly.
    

### Revocation rules

-   Each time you purchase an SSL certificate of a specific specification (brand and type) from Certificate Management Service, you get one opportunity to revoke a certificate with the same specification.
    
-   If a refund was successfully processed for an SSL certificate order of a specific type, no revocation opportunities are included for that order.
    
    For example, if you purchase five DigiCert OV certificates, you get five opportunities to revoke that type of certificate. After five revocations, you cannot apply for more revocations.
    

**Important**

-   **If a certificate is revoked within 28 calendar days of issuance and its domain name has not been changed, Alibaba Cloud refunds the corresponding SSL certificate quota.**
    
-   **If a certificate is revoked more than 28 days after issuance or after its domain name has been changed, the SSL certificate quota is not refunded.**
    

### Revocation review period

The CA can take up to 5 business days to process a revocation. Therefore, to receive a refund, you must request revocation within 7 calendar days of your order. After the revocation is approved, it takes effect within 48 hours.

**Warning**

If you do not allow sufficient time for the revocation process, the certificate may be revoked after the refund period has expired. This prevents you from receiving a refund and may result in financial loss.

### Revocation procedure

Before you revoke an SSL certificate, ensure the following conditions are met:

-   The SSL certificate was purchased from and issued by Alibaba Cloud Certificate Management Service.
    
    **Note**
    
    If you uploaded a third-party certificate to Certificate Management Service, you cannot revoke it here. You must use your provider's system to revoke it.
    
-   The SSL certificate is not expired.
    
-   The SSL certificate is not in the **Hosted** state.
    
    Enabling certificate management service means the certificate is set for auto-renewal before it expires. If you revoke the certificate, auto-renewal will fail. To revoke a managed SSL certificate, you must first cancel its hosting. For more information, see [Cancel certificate hosting](/help/en/ssl-certificate/cancel-hosting-for-a-certificate#task-2209599).
    

Follow these steps to revoke an SSL certificate.

**Warning**

A revoked certificate cannot be restored. To prevent service disruptions, proceed with caution.

1.  Log in to the [Certificate Management Service console](https://yundunnext.console.alibabacloud.com/?p=cas).
    
2.  In the navigation pane on the left, choose **Certificate Management** > **SSL Certificate Management**.
    
3.  Choose your target certificate tab, find the target certificate, and click **More** in the **Actions** column.
    
4.  On the **Revoke** tab, confirm the revocation information and click **Confirm Revoke**.
    
5.  In the **Note** dialog box, read the message carefully and click **OK**.
    
    If you are revoking an Extended Validation (EV) certificate, the CA sends a revocation confirmation email to you. You must respond to this email promptly to avoid delays in the revocation review.
    
    After you submit the revocation application, on the **Commercial Certificates** tab, select **Validating Revocation** from the certificate status drop-down list to view the revocation progress. After the revocation is approved, it takes effect within 48 hours.
    
    If you select **Automatic Refund** when you submit the revocation request, Alibaba Cloud automatically initiates the refund process after the certificate is revoked.
    

## Delete an SSL certificate

**Warning**

-   Deleting a deployed SSL certificate may cause business disruptions.
    
-   You cannot recover a deleted SSL certificate. Proceed with caution.
    

Before deleting an SSL Certificate, note the following:

-   For an SSL certificate purchased through Certificate Management Service: if the certificate has expired, delete it directly. If the certificate has not expired, you must revoke it before deleting it. For more information, see [Revoke an SSL certificate](#section-rdj-yga-bv1).
    
-   You can directly delete third-party certificates that you manually uploaded.
    
-   Before you delete an SSL certificate, check its deployment status. If the certificate is deployed on Alibaba Cloud products, assess the business risks before proceeding with deletion.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2415834171/p751097.png)
    

Follow these steps to delete an SSL certificate.

1.  Log in to the [Certificate Management Service console](https://yundunnext.console.alibabacloud.com/?p=cas).
    
2.  In the navigation pane on the left, choose **Certificate Management** > **SSL Certificate Management**.
    
3.  On the **Commercial Certificates** tab, find your target certificate, and in the **Actions** column, click **Delete**.
    
4.  In the **Tip** dialog box, click **Confirm and Delete**.
    
    The certificate is then permanently removed from the certificate list.
    
    To delete multiple invalid certificates, filter the list by **Expired** or **Revoked** status, select the certificates, and then delete them.
    

## **References**

-   [退款](/help/en/ssl-certificate/product-overview/refunds/)
    
-   [Append and replace domain names](/help/en/ssl-certificate/change-a-domain-name)
    
-   [Cancel certificate management](/help/en/ssl-certificate/cancel-hosting-for-a-certificate)
