Alibaba Cloud DNS lets you smoothly migrate DNS records from one Alibaba Cloud account to another.

## **Transfer DNS records to another Alibaba Cloud account**

**Note**

This process transfers only the DNS records and their management permissions to another Alibaba Cloud account. The domain name's management permissions remain with the original account. To transfer both the domain name and its DNS records, see [How to transfer a domain name between Alibaba Cloud accounts without affecting DNS resolution](/help/en/dns/how-to-avoid-the-impact-on-dns-resolution-when-a-domain-name-account-transfer). To migrate DNS records for a domain name that is not registered with Alibaba Cloud, see [Smoothly migrate DNS resolution to Alibaba Cloud DNS](/help/en/dns/pubz-how-to-smoothly-migrate-domain-name-resolution-to-alibaba-cloud-dns).

### **Limits**

1.  You cannot directly transfer domain names that are used as suffixes for the **Access Domain** of a Global Traffic Manager (GTM) instance. You must delete the relevant **Access Domain** before you transfer the DNS records.
    
    **Note**
    
    This rule applies to **Global Traffic Manager 3.0**. For earlier versions of GTM, after you transfer the DNS records, GTM uses the last effective policy and no longer provides failover. Any subsequent adjustments to the GTM scheduling policy will not take effect.
    
2.  This feature is available only for domain names registered under your account. It is not supported for domain names registered under other accounts or domain names that are not registered with Alibaba Cloud.
    
3.  After you perform a batch transfer of domain names, the destination account obtains management permissions for domain name resolution. These permissions include DNS record management but not domain name registration management.
    
4.  This feature is available only to Alibaba Cloud accounts. RAM users cannot use this feature.
    
5.  This feature supports transfers only between accounts that are both on the Alibaba Cloud China Website (www.aliyun.com) or both on the Alibaba Cloud International Website (www.alibabacloud.com). Cross-site transfers are not supported.
    

### **Scenario 1: Domain name using Free Edition DNS**

You can directly transfer a domain name that is registered with Alibaba Cloud and uses the Free Edition of DNS. If a domain name is attached to a paid Alibaba Cloud DNS instance, see [Scenario 2: Domain name that uses a paid edition of DNS](#ca27d610112r7).

1.  Go to [Alibaba Cloud DNS - Public Authoritative Zone](https://dnsnext.console.alibabacloud.com/authoritative).
    
2.  On the **Public Zone** tab, click the **Batch Operation** button.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7999964671/p1031206.png)
    
3.  Click **Domain Name** > **Manage Domain Names**. Then, enter the domain names whose DNS records you want to transfer and click **Transfer Domain Names to Another Account**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7999964671/p1031211.png)
    
4.  In the dialog box that appears, enter the verification code from the text message or email, the **Login Account**, and the **Destination Account ID**. Then, submit the form.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7999964671/p1031217.png)
    
5.  To check the result of the batch task, go to the **Batch Operation Logs** tab and click **Download Log Details**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7999964671/p1031224.png)
    

### **Scenario 2: Domain name using paid DNS**

You cannot directly transfer the DNS records of a domain name that uses a paid edition of DNS.

**Important**

If you are sure that downgrading the paid DNS instance to the Free Edition does not affect your services, you can first detach the domain name from the instance and then follow the steps in [Scenario 1: Domain name that uses the Free Edition of DNS](#5e3333b03fnfg).

To smoothly migrate the DNS records and ensure uninterrupted domain name resolution, follow these steps:

1.  Transfer the domain name from Account A to Account B. For more information, see [Transfer a domain name to another Alibaba Cloud account](/help/en/dns/how-to-avoid-the-impact-on-dns-resolution-when-a-domain-name-account-transfer). After the transfer is complete, the domain name registration is transferred to Account B. Because the domain name uses a paid edition of DNS, its DNS records remain in Account A.
    
2.  In Account B, follow the instructions in [Transfer DNS records between accounts](#a630de028268i). **Make sure to select Attach an instance of the same edition.** The DNS records are then migrated to Account B.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8557885571/p755436.png)
    
3.  Transfer the domain name from Account B back to Account A. For more information, see [Transfer a domain name to another Alibaba Cloud account](/help/en/dns/how-to-avoid-the-impact-on-dns-resolution-when-a-domain-name-account-transfer). After the transfer is complete, the domain name registration is transferred to Account A. Because the domain name uses a paid edition of DNS, its DNS records remain in Account B.
    
4.  After you complete these three steps, the domain name registration remains in Account A, and the DNS records are transferred to Account B.
    

## **Revoke a domain name and its DNS records**

### **Retrieve a domain name and its DNS records**

For a domain name registered with Alibaba Cloud, if its DNS records are transferred to another Alibaba Cloud account, you can retrieve the DNS records and their management rights to the current account using the **Add Zone** feature in the account that owns the domain name. For example, if a domain name is in Account A and its DNS records are transferred to Account B, you can use the **Add Zone** feature in Account A to retrieve the DNS records from Account B.

1.  On the [Alibaba Cloud DNS - Authoritative Zone](https://dnsnext.console.alibabacloud.com/authoritative) page, click **Add Zone**, and enter the target domain name in the dialog box that appears.
    
2.  A message appears in the dialog box: **The domain name has been transferred to another account. Do you want to retrieve the management rights to this account?** To retrieve the domain name and its DNS records, select **Reclaim Domain Name and DNS Records**. The system then checks the DNS instance attached to the domain name in Account B. If the instance is a paid edition, you must first purchase an instance of the same edition in Account A. Then, select **Attach an instance of the same edition** to automatically attach the new instance and prevent service interruptions.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8557885571/p755436.png)
    
    **Warning**
    
    1.  If the domain name is attached to a paid instance in Account B, you must purchase an instance of the same edition in Account A. Otherwise, the domain name is attached to a Free Edition instance by default when its DNS records are retrieved. This may pause DNS records that are supported by the paid instance and cause service interruptions.
        
    2.  If you do not want to attach a paid instance after you retrieve the DNS records, check the DNS records in Account B before you proceed. Also, disable the [update lock](/help/en/dws/user-guide/enable-the-update-prohibition-lock) and [DNSSEC](/help/en/dns/pubz-dnssec) features.
        
    3.  If the domain name in Account B uses a Free Edition DNS instance, you can directly retrieve the DNS records. The records are not affected and can be smoothly transferred.
        
    
3.  Select the instance to attach and click **OK** to retrieve the DNS records to the current account.
