After you purchase a private certificate authority (CA), you can obtain a private root CA and a private intermediate CA. By default, the private root CA provides a quota that allows the private intermediate CA to issue 10 private certificates free of charge. If the quota cannot meet your requirements, you can purchase an additional quota based on your business requirements. This topic describes how to purchase and assign a quota on private certificates.

## **Prerequisites**

A private CA is purchased and enabled. For more information, see [Purchase and enable a private CA](/help/en/ssl-certificate/purchase-and-enable-a-private-ca).

## **Purchase a quota on private certificates**

1.  Log in to the [Certificate Management Service console](https://yundunnext.console.alibabacloud.com/?p=cas).
    
2.  In the navigation pane on the left, choose **Certificate Management** > **Private Certificate Management**. On the **Private Certificate Management** page, select the region where the PCA service is located.
    
3.  On the **Private CAs** tab, find the private root CA for which you want to purchase a quota and click **Purchase Certificate** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5825738271/p840442.png)
    
4.  In the **Purchase Certificate** panel, enter the number of certificates that you require, click **Purchased**, and then complete the payment.
    
    **Important**
    
    If the quota on private certificates that you purchase for a private root CA exceeds a specific threshold, you are not charged for the excess certificates. For more information about the threshold, contact your account manager.
    

## Assign the quota on private certificates

After you purchase a quota on private certificates for a private root CA, you can assign the quota to a private intermediate CA that is subordinate to the private root CA and is in the **Enabled** state to issue server certificates or client certificates.

1.  Log in to the [Certificate Management Service console](https://yundunnext.console.alibabacloud.com/?p=cas).
    
2.  In the navigation pane on the left, choose **Certificate Management** > **Private Certificate Management**. On the **Private Certificate Management** page, select the region where the PCA service is located.
    
3.  On the **Private CAs** tab, find the private root CA whose quota you want to assign and click **Assign Certificate** in the **Remaining Certificates** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5825738271/p840458.png)
    
4.  In the **Assign Certificate** panel, configure the Select Intermediate CA and Remaining Certificate Quota parameters and click **OK**.
    
    **Remaining Certificate Quota**: The quota that is already assigned to the selected private intermediate CA.
    

## **What to do next**

After you assign the quota on private certificates to a private intermediate CA, you can apply for a server certificate or a client certificate. For more information, see [Apply for a private certificate](/help/en/ssl-certificate/apply-for-a-private-certificate).
