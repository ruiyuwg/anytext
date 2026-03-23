Multi-factor authentication (MFA) is an easy-to-use and effective authentication model and is a supplement to the username and password authentication model. MFA provides an extra layer of protection by verifying users who initiate console logons. MFA enhances the security of your account.

## Overview

If you enable the username-password logon for a CloudSSO user, MFA is automatically enabled. CloudSSO allows you to use MFA devices for authentication. The following table describes the steps to enable MFA for a CloudSSO user.

**Step**

**Description**

**Operator**

**References**

1

Configure MFA.

Enable MFA for a single CloudSSO user or for all CloudSSO users as a CloudSSO administrator based on your business requirements.

CloudSSO administrator

[Enable MFA for all CloudSSO users](#section-tnh-w10-pz4) and [Enable MFA for a CloudSSO user](#section-6ho-3ud-ogp)

2

Bind an MFA device.

The first time a CloudSSO user logs on to the CloudSSO user portal, the user needs to bind an MFA device for verification.

CloudSSO users

[Bind the first MFA device](/help/en/cloudsso/user-guide/bind-or-unbind-mfa-devices#section-8hh-7vf-7go)

The following sections describe how to enable MFA for all CloudSSO users, enable MFA for a single CloudSSO user, and unbind MFA devices. You must perform these operations as a CloudSSO administrator. For more information, see [Bind or unbind MFA devices](/help/en/cloudsso/user-guide/bind-or-unbind-mfa-devices#task-2090789).

## Enable MFA for all CloudSSO users

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Settings**.
    
3.  In the **Username-password Logon** section, click **Edit** below **Whether to Enable MFA When Logon**.
    
4.  In the **Edit MFA Verification Settings** dialog box, configure the following parameters.
    
    1.  Whether to Enable MFA When Logon
        
        -   **Enable**: enables MFA for all CloudSSO users.
            
            If you select this option, you must bind an MFA device the first time the user logs on to the CloudSSO user portal. For more information, see [Bind the first MFA device](/help/en/cloudsso/user-guide/bind-or-unbind-mfa-devices#section-8hh-7vf-7go).
            
        -   **Custom Configuration**: enables MFA based on the MFA settings of each CloudSSO user.
            
            For more information, see [Enable MFA for a CloudSSO user](#section-6ho-3ud-ogp).
            
        -   **Required Only for Unusual Logon**: MFA is required only in scenarios in which a logon is initiated from a different location or device than the common logon locations or devices.
            
        -   **Disable**: disables MFA for all users.
            
        
    2.  Configure the Whether to Enable MFA Upon Unusual Logon parameter if you select **Custom Configuration** or **Required Only for Unusual Logon** in the previous step.
        
        -   **Allow to SKip Binding MFA**: MFA is prompted for CloudSSO users who initiated unusual logons. However, the CloudSSO users are allowed to skip MFA.
            
        -   **Must Bind Or Verify MFA**: MFA is required for unusual logons.
            
        
5.  Click **OK**.
    

## Enable MFA for a single CloudSSO user

If you select **Custom Configuration** when you configure MFA for all CloudSSO users, you must configure MFA settings for each user as a CloudSSO administrator. For more information, see [Enable MFA for all CloudSSO users](#section-tnh-w10-pz4).

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **User Management** > **User**.
    
3.  Click the name of the user that you want to manage.
    
4.  On the **Details** tab, find the **MFA Settings** section and click **Edit** below **Whether to Enable MFA When Logon**.
    
5.  In the **Edit MFA Verification Settings** dialog box, configure the following parameter.
    
    -   **Enable**: enables MFA for the user.
        
        If you select this option, you must bind an MFA device the first time the user logs on to the CloudSSO user portal. For more information, see [Bind the first MFA device](/help/en/cloudsso/user-guide/bind-or-unbind-mfa-devices#section-8hh-7vf-7go).
        
    -   **Required Only for Unusual Logon**: MFA is required only in scenarios in which a logon is initiated from a different location or device than the common logon locations or devices.
        
    -   **Disable**: disables MFA for the user.
        
6.  Click **OK**.
    

## Unbind an MFA device

For users to which MFA devices are bound, a CloudSSO administrator or the users can unbind the MFA devices based on business requirements. The following section describes how to unbind MFA devices as a CloudSSO administrator.

**Warning**

If you unbind MFA devices from CloudSSO users, the MFA devices cannot be used to verify the identities of the CloudSSO users. This reduces account security.

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **User Management** > **User**.
    
3.  Click the name of the user that you want to manage.
    
4.  On the **Details** tab of the user details page that appears, find the MFA device that you want to unbind in the **MFA Devices** section and click **Delete** in the **Actions** column.
    
5.  In the **Unbind Virtual MFA Device** message, click **OK**.
    

## **References**

[Bind or unbind MFA devices](/help/en/cloudsso/user-guide/bind-or-unbind-mfa-devices)
