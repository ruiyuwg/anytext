If an access configuration has been provisioned for the accounts in your resource directory but the access configuration is modified, you must manually re-provision the access configuration for the modifications to take effect. The reason is that the modifications cannot be automatically applied to the accounts.

## Background information

If one of the following modifications is made to an access configuration, you must re-provision the access configuration:

-   A system policy is added or removed.
    
-   An inline policy is created, modified, or deleted.
    

**Note**

If the session duration and relay state are modified, you do not need to re-provision the access configuration.

## Re-provision an access configuration on the Access Configuration Management page

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Access Configuration**.
    
3.  On the **Access Configuration** page, click the name of the required access configuration.
    
    The system automatically identifies the access configurations that need to be re-provisioned. **Provisioning Status** for these access configurations is **Re-provisioning Required**.
    
4.  On the page that appears, click the **Provisioning** tab.
    
5.  Select the required account in your resource directory.
    
    The system automatically identifies the accounts for which the access configuration needs to be re-provisioned in your resource directory. **Provisioning Status** for these accounts is **Re-provisioning Required**.
    
6.  Click **Re-provision**.
    
    After the re-provisioning is complete, **Provisioning Status** is displayed as **Provisioned**.
    

## Re-provision an access configuration on the Multi-account Permission Configuration page

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Multi-account Permission Configuration**.
    
3.  On the **Multi-account Permission Configuration** page, click the name of the required account.
    
4.  On the page that appears, click the **Provisioned Access Configurations** tab.
    
5.  Select the access configuration that needs to be re-provisioned.
    
    The system automatically identifies the access configurations that need to be re-provisioned. **Provisioning Status** for these access configurations is **Re-provisioning Required**.
    
6.  Click **Re-provision**.
    
    After the re-provisioning is complete, **Provisioning Status** is displayed as **Provisioned**.
