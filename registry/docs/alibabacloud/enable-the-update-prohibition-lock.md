An update lock is a security feature that prevents unauthorized changes to your domain name's registration information. By enabling this lock, you can protect your domain name from unauthorized transfers, deletions, or modifications resulting from account compromise or operational errors.

When you enable the update lock, the following critical registration information for your domain name is protected from modification via the console or APIs:

-   Registrant information
    
-   Administrator, buyer, or technical contact information
    
-   DNS servers
    

Enabling the lock sets the **clientUpdateProhibited** status code for your domain name in [WHOIS lookups](https://www.alibabacloud.com/zh/whois/home).

> The update lock secures only the domain name's registration information. It does not affect the management of individual DNS records (such as A and CNAME records) in the Alibaba Cloud DNS console.

## **Enable or disable the update lock**

You can enable or disable the lock at any time. You must temporarily disable the update lock before you can modify any protected information, such as [changing registrant information](/help/en/dws/user-guide/modify-registrant-contact-information-or-transfer-domain-name-ownership) or [modifying DNS servers](/help/en/dws/user-guide/modify-dns-server). For security, we strongly recommend re-enabling the lock immediately after completing your modifications.

1.  Log on to the [Alibaba Cloud Domain Names console](https://dc.console.alibabacloud.com/#/domain/list/all-domain) .
    
2.  On the ****Domain Names**** page, find the domain name that you want to manage and click ****Manage**** in the ****Actions**** column.
    
3.  In the left-side navigation pane, click ****Security Settings****.
    
4.  In the ****Update Lock**** section, click ****Enable**** or ****Disable**** in the Actions column.
    
5.  In the **Confirm the Operation** dialog box, complete the security verification.
    
    1.  Click ****Send Verification Code**** to obtain an email verification code.
        
    2.  Enter the verification code and click ****Confirm****.
        

## **FAQ**

### **How do I modify the domain name's information if the update lock is enabled?**

You must disable the lock before you can modify protected registration information. We recommend re-enabling the lock immediately after completing your changes.

### **Is the update lock still valid after a domain name expires?**

No. The update lock is only effective for active domain names. If a domain expires, the lock is automatically removed, and its registration information is no longer protected. Once the domain is **renewed** or **redeemed**, you must manually re-enable the update lock to secure it again.
