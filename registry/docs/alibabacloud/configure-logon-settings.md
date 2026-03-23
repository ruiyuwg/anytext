This topic describes how to configure a logon method, such as username-password logon and single sign-on (SSO), for CloudSSO users.

## Logon methods

Cloud SSO provides the username-password logon and SSO methods. You can enable only one of the methods. For example, if you enable username-password logon, SSO is automatically disabled.

-   Username-password logon
    
    When a Cloud SSO user accesses Alibaba Cloud, the username and password must be provided for the logon.
    
-   SSO
    
    If the user identity from an identity provider (IdP) is used to access Alibaba Cloud, you must enable SSO.
    

## Enable or disable username-password logon

Username-password logon is automatically enabled. If username-password logon is disabled, SSO is automatically enabled.

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Settings**.
    
3.  In the **Username-password Logon** section, enable or disable username-password logon.
    
    -   To enable username-password logon, turn on the switch for Username-password Logon.
        
    -   To disable username-password logon, turn off the switch for Username-password Logon. After you disable username-password logon, SSO is automatically enabled.
        
        **Note**
        
        You must upload the IdP metadata file before you can enable SSO. After SSO is enabled, username-password logon is automatically disabled.
        

## Enable or disable SSO

By default, SSO is not configured and is disabled. After SSO is enabled, username-password logon is automatically disabled. For more information, see [Configure SSO](/help/en/cloudsso/user-guide/configure-sso#task-2090822).
