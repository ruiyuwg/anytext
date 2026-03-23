You can synchronize users or groups from an external IdP that supports System for Cross-domain Identity Management (SCIM) 2.0 to CloudSSO. This topic describes how to enable and disable SCIM synchronization in the CloudSSO console. This topic also describes how to obtain the SCIM endpoint.

## Enable SCIM synchronization

You can synchronize users or groups from an external IdP to CloudSSO only after SCIM synchronization is enabled.

You also need to create SCIM credentials for the synchronization. For more information, see [Create an SCIM credential](/help/en/cloudsso/user-guide/manage-scim-credentials#section-eas-0wd-sbc).

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Settings**.
    
3.  In the **SCIM-based User Synchronization Configuration** section of the Settings page, turn on the switch.
    

After you turn on the switch, you cannot modify or delete the users and groups that are synchronized to CloudSSO by using SCIM. You also cannot add or remove users from the groups that are synchronized to CloudSSO.

## **Obtain the SCIM endpoint**

In the **SCIM-based User Synchronization Configuration** section, view or copy the value of the **SCIM Endpoint** parameter. This value is required when you configure SCIM synchronization in an external identity provider (IdP).

**Note**

If you enable the accelerated URL feature, you can use the value of the **SCIM Endpoint (Accelerated)** parameter when you configure SCIM synchronization in an external IdP. For more information, see [Accelerate access from outside the Chinese mainland](/help/en/cloudsso/user-guide/cloud-sso-overseas-visit-accelerated).

## Disable SCIM synchronization

In the **SCIM-based User Synchronization Configuration** section of the Settings page, turn off the switch. After you turn off the switch, SCIM synchronization is disabled.

The following list describes the impacts after SCIM synchronization is disabled:

-   You cannot synchronize users or groups from an external IdP to CloudSSO.
    
-   You can modify or delete the users or groups that are synchronized to CloudSSO by using SCIM.
    
    **Note**
    
    If you enable SCIM synchronization after it is disabled, the modifications on the synchronized users or groups may be automatically rolled back, and the deleted synchronized users may appear in the CloudSSO console again.
