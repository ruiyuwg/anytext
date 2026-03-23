System for Cross-domain Identity Management (SCIM) credentials are required for SCIM synchronization. This topic describes how to create, disable, enable, delete, and rotate SCIM credentials.

## Limits

-   SCIM credentials are displayed only when you create them and cannot be queried later. Therefore, you must save the SCIM credentials after you create them.
    
-   You can create up to two SCIM credentials in a CloudSSO directory.
    

## Create SCIM credentials

By default, new SCIM credentials are enabled.

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Settings**.
    
3.  In the **SCIM-based User Synchronization Configuration** section of the **User Settings** tab, click **Generate New SCIM Credential**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4079044671/p1030832.png)
    
4.  In the **SCIM Credential Generated** dialog box, copy the generated SCIM credential and click **OK**.
    

## Disable SCIM credentials

**Warning**

After you disable an SCIM credential, the synchronization task that uses the SCIM credential fails.

1.  In the left-side navigation pane, click **Settings**.
    
2.  In the **SCIM-based User Synchronization Configuration** section of the **User Settings** tab, find the SCIM credential that you want to disable and click **Disable**.
    
3.  In the **Determine Whether to Disable SCIM Credential** message, click **OK**.
    

## Enable SCIM credentials

You can re-enable SCIM credentials that are disabled.

1.  In the left-side navigation pane, click **Settings**.
    
2.  In the **SCIM-based User Synchronization Configuration** section of the **User Settings** tab, find the SCIM credential that you want to enable and click **Enable**.
    
3.  In the **Enable SCIM Credential** message, click **OK**.
    

## Delete SCIM credentials

You can delete SCIM credentials that you no longer require.

**Warning**

After you delete an SCIM credential, the synchronization task that uses the SCIM credential fails.

1.  In the left-side navigation pane, click **Settings**.
    
2.  In the **SCIM-based User Synchronization Configuration** section of the **User Settings** tab, find the SCIM credential that you want to delete and click **Delete**.
    
3.  In the **Delete SCIM Credential** message, click **OK**.
    

## **Rotate SCIM credentials**

1.  Create an SCIM credential.
    
    For more information, see [Create an SCIM credential](#section-eas-0wd-sbc).
    
2.  Configure the SCIM credential in the enterprise identity provider (IdP).
    
3.  Disable the previous SCIM credential.
    
4.  Check whether the SCIM synchronization task that uses the new SCIM credential runs as expected.
    
    -   If the task runs as expected, the new SCIM credential is in effect. You can delete the previous SCIM credential.
        
    -   If the task does not run as expected, you must enable the previous SCIM credential and repeat steps 1 to 4 until the new SCIM credential takes effect.
        
5.  Delete the previous SCIM credential.
    
    Before you delete the previous SCIM credential, you can query the recent events of CloudSSO by calling the `ListUsers` operation in ActionTrail. Check whether `SCIMCredentialId` contains the ID of the previous SCIM credential. If the ID of the previous SCIM credential is not used, you can delete the previous SCIM credential.
