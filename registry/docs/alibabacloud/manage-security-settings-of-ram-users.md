You can configure security settings that apply to all Resource Access Management (RAM) users in your Alibaba Cloud account. These settings help you establish a security baseline and improve your account's overall security posture. This topic describes how to configure general security policies, multi-factor authentication (MFA) settings, and network ACL policies.

## **Procedure**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) using an Alibaba Cloud account or as a RAM administrator (such as the `AliyunRAMFullAccess` policy).
    
2.  In the left-side navigation pane, click **Settings**. On the **Settings** page, configure the **Security**, **MFA**, and **Network Access Control** settings.
    
    **Note**
    
    All settings apply to all RAM users in your account. Carefully assess the risks before you enable settings that grant users more permissions, such as **Allow RAM users to manage their own AccessKey pairs**.
    

### **Global security settings**

These settings allow you to control whether RAM users can manage their own credentials (such as passwords, MFA devices, and AccessKey pairs). You can also configure expiration policies for logon sessions and idle credentials.

In the **Security** section, click **Modify**, configure the parameters as described in the following table, and click **OK**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0194718571/p837276.png)

**Parameter**

**Description**

**Configuration suggestions**

**Allow users to manage password**

Allows RAM users to change their own console logon passwords.

This setting is enabled by default.

-   **For security-sensitive scenarios**: Disable this setting and let RAM administrators manage password lifecycles.
    
-   **For agile development scenarios**: Enable this setting for user convenience.
    

**Allow users to manage MFA devices**

Allows RAM users to bind or unbind their own MFA devices.

This setting is enabled by default.

-   **For security-sensitive scenarios**: Disable this setting to require that administrators manage all MFA device assignments.
    
-   **For agile development scenarios**: Enable this setting for user convenience.
    

Allow users to manage AccessKey

Allows RAM users to manage their own AccessKey pairs, including creating, disabling, and deleting them.

This setting is disabled by default.

We recommend that you keep this setting disabled in production environments. Instead, have RAM administrators centrally manage AccessKeys.

**Login session duration**

Specifies the validity period of a RAM user's console logon session. Unit: hours.

**Valid values:** 1 to 24.

The default value is 6.

**Note**

When a user switch to a RAM role in the console or logs on through single sign-on (SSO), the session duration cannot exceed the value of this parameter. For more information, see [Assume a RAM role](/help/en/ram/user-guide/assume-a-ram-role#task-221553) and [SAML response for role-based SSO](/help/en/ram/saml-response-for-role-based-sso#concept-snl-vkq-bhb).

To balance security and convenience, we recommend setting this value to your typical workday length, such as 8 hours.

**Allow to keep login session for a long time**

Allows RAM users to remain logged on to the Alibaba Cloud mobile app and the ECS client for an extended period (up to 90 days).

This setting is disabled by default.

**Note**

If an anomalous logon is detected, the long-lived session is immediately invalidated, and the user must log on again.

This setting is suitable for users who need long-term access to manage resources from a mobile device or client.

**Allow users to login with passkey**

Allows RAM users to log on to the Alibaba Cloud Management Console by using a passkey. For more information, see [What is a passkey?](/help/en/ram/user-guide/what-is-a-passkey)

This setting is enabled by default.

We recommend enabling this setting to improve both security and user convenience.

**Max idle days for users**

Specifies the maximum number of days a RAM user can be inactive before their console access (excluding SSO logons) is automatically disabled.

**Valid values** : 730 days, 365 days, 180 days, and 90 days. The default value is 365 days.

**Effective time:** The setting takes effect the following day (UTC+8).

**Note**

A RAM user's console access is disabled if both of the following conditions are met:

-   The user has not logged on for longer than the specified period, or the user was created longer ago than the period and has never logged on.
    
-   The user's logon configuration has not been updated in the last 7 days. For more information, see [Manage console logon settings](/help/en/ram/user-guide/manage-console-logon-settings-for-a-ram-user).
    

We recommend setting this to 90 or 180 days to regularly disable inactive RAM users.

**Max idle days for AccessKey**

Specifies the maximum number of days an AccessKey pair can be inactive before it is automatically disabled. This applies to the AccessKey pairs of both the Alibaba Cloud account and RAM users.

**Valid values:** 730 Days, 365 Days, 180 Days, and 90 Days. The default value is 730 days.

**Effective time:** The setting takes effect the following day (UTC+8).

**Note**

An AccessKey pair is disabled if both of the following conditions are met:

-   The AccessKey pair was last used longer ago than the specified period.
    
-   The status of the AccessKey pair has not been updated in the last 7 days.
    

We recommend setting this to 90 days to disable idle AccessKey pairs and reduce the risk of compromise.

## **MFA settings**

MFA adds an extra layer of security for user logons and sensitive operations. You can configure a global MFA policy for all RAM users.

In the **MFA** section, click **Modify**, configure the parameters as described in the following table, and click **OK**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4812197371/p837292.png)

**Parameter**

**Description**

**Allowed MFA devices**

Specifies the MFA methods that RAM users can use for secondary authentication during console logon or sensitive operations.

-   **MFA Devices**: Uses a virtual MFA device for secondary authentication. **This option is enabled by default and cannot be modified.**
    
-   **Passkey**: Uses a passkey for secondary authentication. **This option is enabled by default and cannot be modified.**
    
-   **Secure Email**: Uses a security email address for secondary authentication. This method requires a user to first [bind an email address](/help/en/ram/user-guide/bind-an-mfa-device-to-a-ram-user#section-xmb-gj3-p2d) to their account.
    
    **Note**
    
    The **Security Email** method can only be used for secondary authentication during sensitive operations, not for console logon.
    

All options are enabled by default.

**MFA for RAM user sign-in**

Specifies whether MFA is required when RAM users log on to the console with a username and password.

-   **Force all users**: Requires MFA for all RAM users at logon.
    
    **Note**
    
    If you select **Force for all users**, [secondary authentication for sensitive operations](/help/en/ram/user-guide/overview-of-security-settings#section-qwk-45n-vtj) is automatically enabled for all RAM users.
    
-   **Depend on each user**: Adheres to the MFA configuration of each individual RAM user. For more information, see [Manage console logon settings](/help/en/ram/user-guide/manage-console-logon-settings-for-a-ram-user#task-2067777).
    
-   **Only when sign-in abnormally**: Requires MFA only when a logon is considered anomalous, such as a logon from a new location or device. For all other cases, MFA is not required.
    
    **Note**
    
    If you use the `acs:MFAPresent` condition key in a RAM policy, setting this parameter to **Only when sign-in abnormally** will cause the condition to fail validation during normal logons. To ensure your policy works as expected, set this parameter to **Depend on each user** instead.
    

The default setting is **Force for all users**.

**Allow to remember MFA validation for 7 days**

If enabled, users can choose to have their MFA status remembered on a specific device for 7 days. This remembered status is invalidated if the user logs off or logs on as a different RAM user on the same device.

This setting is disabled by default.

## **Network ACL policies**

Network ACL policies allow you to restrict where RAM users can log on or make API calls from, based on their source IP addresses.

**Important**

-   Before you configure **Network Access Control**, you must add a stable, trusted IP address (such as your office network's egress IP) to the allowlist. This ensures you have an emergency access path in case a misconfiguration blocks all users, including yourself.
    
-   If a RAM user is blocked by an IP restriction, a RAM administrator can log on by using the Alibaba Cloud account to modify the logon mask.
    

In the **Network Access Control** section, configure the parameters as described in the following table, and click **OK**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1605042471/p837337.png)

**Parameter**

**Description**

**Allowed network address while sign-in**

Specifies an allowlist of IPv4 addresses from which users can log on to the console with a **password** or through **SSO**. If left blank, logons are allowed from any IP address.

**Format**: Separate multiple IP addresses with spaces, commas (,), or semicolons (;).

**Limit**: You can specify up to 200 IP addresses.

**Allowed source network address while calling APIs by AccessKey**

-   Specifies an allowlist of IP addresses from which API calls can be made. This is an **account-level policy** that applies to all AccessKey pairs. If left blank, API calls are allowed from any IP address.
    
-   You can also set a more specific policy for an individual AccessKey pair. An AccessKey pair-level policy always overrides this account-level policy. For more information, see [Restrict an AccessKey pair with network ACL policies](/help/en/ram/user-guide/accesskey-network-access-restriction-policy).
    

## References

-   [Configure a password policy](/help/en/ram/user-guide/configure-a-password-policy-for-ram-users)
    
-   [Manage the logon suffixes of RAM users](/help/en/ram/user-guide/view-and-modify-the-default-domain-name)
    
-   [SetSecurityPreference](/help/en/ram/developer-reference/api-ims-2019-08-15-setsecuritypreference)
