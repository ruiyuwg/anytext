IDaaS supports System for Cross-domain Identity Management (SCIM) synchronization. You can use IDaaS to synchronize your existing corporate account data from sources such as DingTalk, Lark, and Active Directory (AD) to Alibaba Cloud RAM. For more information, see [Identity providers](/help/en/idaas/eiam/user-guide/idps/). This topic uses AD as an example to describe how to synchronize accounts to RAM using the SCIM protocol.

## Activate an IDaaS instance

1.  Go to the [Alibaba Cloud IDaaS Management Console](https://yundun.console.alibabacloud.com/?p=idaas#/overview/new/cn-hangzhou). Alternatively, in the product and service navigation pane, you can find and click Application Identity Service to go to the management console.
    
2.  Click **Create Instance**.
    

## Synchronize AD data to IDaaS

This topic uses AD as an example. When you perform the integration, select the option that applies to your scenario:

-   To synchronize DingTalk account data to IDaaS, see [Attach DingTalk - Inbound](/help/en/idaas/eiam/user-guide/bind-idaas-to-dingtalk-inbound).
    
-   To synchronize WeCom account data to IDaaS, see [Attach WeCom](/help/en/idaas/eiam/user-guide/bind-idaas-to-wecom).
    
-   To synchronize Lark account data to IDaaS, see [Attach Lark](/help/en/idaas/eiam/user-guide/connect-idaas-to-lark).
    
-   To synchronize AD accounts to IDaaS, see [Attach AD](/help/en/idaas/eiam/user-guide/bind-idaas-to-ad).
    
-   To synchronize OpenLDAP accounts to IDaaS, see [Attach OpenLDAP](/help/en/idaas/eiam/user-guide/bind-idaas-to-openldap).
    
-   To synchronize account data from international identity providers such as Okta and Azure to IDaaS, see [Attach an OIDC identity provider](/help/en/idaas/eiam/user-guide/bind-oidc-identity-provider/).
    

**Note**

To use AD authentication to log on, make sure that the delegate authentication feature is enabled. For more information, see [Use AD/LDAP authentication to log on to a third-party application](/help/en/idaas/eiam/use-cases/use-ad-or-ldap-to-log-on-to-a-third-party-application).

After the synchronization is complete, you can view the synchronized accounts on the Accounts page.

## Synchronize data from IDaaS to RAM

After you import your existing account data to IDaaS, you can import the accounts to RAM using the SCIM protocol. For more information about the integration process, see [Synchronize accounts to RAM using SCIM](/help/en/idaas/eiam/use-cases/use-scim-to-synchronize-accounts-to-ram).

### **Step 1: Create and grant permissions to an OAuth application in the RAM console**

1.  Create an OAuth application.
    
    1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, choose **Integrations** > **OAuth Preview**.
        
    3.  On the **Enterprise Application** tab, click **Create Application**.
        
    4.  On the **Create Application** page, configure the parameters.
        
        1.  Configure **Application Name** and **Display Name**.
            
        2.  Set **Application Type** to **Native Application**.
            
        3.  Configure **Access Token Validity**.
            
        4.  Configure **Refresh Token Validity**.
            
        
    5.  Click **Create Application**.
        
    
2.  Grant permissions on the OAuth application.
    
    1.  On the **Enterprise Application** tab, find the application that you want to manage.
        
    2.  On the **OAuth Scope** tab, click **Add OAuth Scope**.
        
    3.  In the **Add OAuth Scope** panel, select **/acs/scim**.
        
    4.  Click **OK**.
        
    
3.  Create an application secret for the OAuth application.
    
    1.  Click the ****Application Secret**** tab, and then click **Create Secret**.
        
    2.  In the **Create Secret** dialog box, view and copy the created application secret and click **Close**.
        
        **Important**
        
        The application secret (**AppSecretValue**) is displayed only during creation and cannot be queried. Save the secret at the earliest opportunity.
        
    

### Step 2: Configure SCIM synchronization in IDaaS

### **Step 3: Perform synchronization**

Click **One-click Push**. The accounts within the synchronization scope are synchronized to RAM.
