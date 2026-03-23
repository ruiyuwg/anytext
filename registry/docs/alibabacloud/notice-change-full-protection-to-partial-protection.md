Dear Alibaba Cloud users,

To enhance your security service experience, Security Center now offers an on-demand protection mode, also known as partial protection mode, for your servers. This mode allows you to bind the purchased quotas of your subscription instances specifically to servers or cores that require protection, enabling a more targeted protection policy.

## **Change details**

-   Between December 12, 2024, and January 13, 2025, you can manually switch from full protection mode to partial protection mode in the Security Center console.
    
-   As of January 13, 2025, Security Center will support only partial protection mode and discontinue full protection mode.
    
-   On January 13, 2025, Security Center will automatically upgrade all users from full protection to partial protection mode, and automatically bind the purchased quotas to your servers connected to Security Center.
    

## **Impacts**

If you are in full protection mode on January 13, 2025, Security Center will automatically switch you to partial protection mode. Following this automatic switch, Security Center will bind your purchased quotas to your servers. You may need to review and adjust the binding of servers and quotas depending on your actual needs.

**Important**

Before upgrading the protection mode, either manually or automatically, ensure that the number of purchased quotas is at least equal to the number of servers requiring protection. This precaution helps prevent any servers from becoming unprotected due to a shortage of quota, thereby mitigating potential security risks and losses.

-   If the number of servers connected to Security Center under your account is less than or equal to the number of purchased quotas, Security Center will automatically bind quotas to all servers.
    
    When adding new servers in the future, you must manually bind quotas to them or enable the **Automatically Add New Servers to Security Center** option. Once this feature is enabled, Security Center will automatically allocate quotas to new servers until all quotas are used. For detailed instructions, see [Manage host and container security quotas](/help/en/security-center/user-guide/authorization-number-management).
    
-   If the number of servers exceeds the number of purchased quotas, Security Center will randomly bind all quotas to some servers to ensure no quotas are wasted.
    
    You can manually unbind the automatically bound quotas and servers, and batch unbinding is supported. After unbinding, you can rebind the freed quotas to specific servers. For detailed instructions, see [Manage host and container security quotas](/help/en/security-center/user-guide/authorization-number-management).
    
    If you need more quotas, you can upgrade your Security Center instance. For more information, see [Upgrades and downgrades](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center#section-3s4-ehb-3ij).
    

## **FAQ**

### **What is the difference between full protection and partial protection mode?**

In full protection mode, Security Center activates the security protection available for your purchased editions for all servers connected to Security Center under your account. Previously, Security Center only offered full protection mode, which required that the purchased quotas of your instance must be at least equal to the number of servers or cores under your account. In this mode, Security Center defaults to protecting all servers without the need for manual quota binding.

In partial protection mode, also known as on-demand protection mode, you can purchase quotas for the exact number of servers and cores needed and bind these quotas to the servers that require protection.

Security Center supports transitioning from full protection to partial protection mode but does not allow the reverse.

### **How do I** **determine whether my Security Center is in full protection or** partial **protection mode?**

The absence of the **Manage** button, as illustrated below in your Security Center console, indicates that your account is in full protection mode. If the **Manage** button is present, your account is in partial protection mode.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1949993371/p886944.png)

### **How** **do I** **manually upgrade full protection to** partial **protection mode?**

Manual upgrade is available from December 12, 2024, to January 13, 2025.

1.  Log on to the [Security Center console](https://yundun.console.aliyun.com/?&p=sas).
    
2.  In the **Partial Protection** dialog box, click **Change Now**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1949993371/p887110.png)
    
    If the **Partial Protection** dialog box does not appear in the console, you can click **Partial Protection** on the Overview page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1949993371/p887333.png)
    
3.  In the **Notes** dialog box, click **Confirm**.
    
4.  In the **Quota Management** dialog box, bind quotas to servers as needed and decide whether to enable the **Automatically Add New Servers to Security Center** option, then click **Confirm**.
    
5.  Verify that full protection mode has been switched to partial protection mode.
    
    The appearance of the **Manage** option in the **Remaining Quota** area on the overview page signifies that the switch to partial protection mode is complete.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1949993371/p886944.png)
    

Thank you for your continued support and understanding. Alibaba Cloud strives to provide you with more efficient and secure services.
