If you no longer require a private certificate, you can revoke the private certificate in the Certificate Management Service console before the private certificate expires.

**Warning**

Private certificates that are revoked or deleted are no longer trusted by the internal environments of enterprises and cannot be restored or re-enabled. Proceed with caution.

1.  Log in to the [Certificate Management Service console](https://yundunnext.console.alibabacloud.com/?p=cas).
    
2.  In the navigation pane on the left, choose **Certificate Management** > **Private Certificate Management**. On the **Private Certificate Management** page, select the region where the PCA service is located.
    
3.  On the **Private CAs** tab, find the private intermediate certificate authority (CA) from which the required private certificate is issued and click **Certificates** in the **Actions** column.
    
4.  On the **Certificates** page, find the private certificate that you want to revoke and click **Revoke** in the **Actions** column.
    
5.  In the **Confirmation** message, click **Revoke**.
    
    The private certificate is immediately revoked. After the value in the **Status** column of the private certificate changes to **Revoke**, you can delete the private certificate from the list of private certificates.
