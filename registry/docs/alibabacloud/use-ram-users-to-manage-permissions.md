With RAM users, you can split permissions, grant different permissions to RAM users as needed, and avoid security risks caused by exposing Alibaba Cloud account keys. To grant team members access without sharing your account credentials, create Resource Access Management (RAM) users and assign them the appropriate permissions.

## System policies

Managed Service for OpenTelemetry provides two system policies. Choose the one that matches the access level required:

**Policy**

**Type**

**Permissions**

`AliyunTracingAnalysisFullAccess`

System policy

Full access to Managed Service for OpenTelemetry

`AliyunTracingAnalysisReadOnlyAccess`

System policy

Read-only access to Managed Service for OpenTelemetry

## Grant a RAM user access to Managed Service for OpenTelemetry

### Create and authorize a RAM user

1.  [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user). When you create the RAM user, enable **Console Access** if the user needs to sign in to the Alibaba Cloud console, or create an **AccessKey pair** if the user needs to call API operations programmatically.
    
2.  [Grant permissions to the RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user). Attach either `AliyunTracingAnalysisFullAccess` or `AliyunTracingAnalysisReadOnlyAccess` based on the access level required.
    
3.  Share the logon credentials or AccessKey pair with the team member so they can access Managed Service for OpenTelemetry through the console or API.
    

## Log on to the console as a RAM user

1.  Open the [RAM User Logon](https://signin.alibabacloud.com/login.htm) page.
    
2.  Enter the RAM user logon name in one of the following formats, and then click **Next**.
    
    **Format**
    
    **Example**
    
    **Notes**
    
    `<UserName>@<AccountAlias>.onaliyun.com`
    
    username@company-alias.onaliyun.com
    
    Uses the [default domain name](/help/en/ram/user-guide/view-and-modify-the-default-domain-name).
    
    `<UserName>@<AccountAlias>`
    
    username@company-alias
    
    Uses the [account alias](/help/en/ram/terms).
    
    `<UserName>@<DomainAlias>`
    
    username@example.com
    
    Uses a [domain alias](/help/en/ram/create-and-verify-a-domain-alias). Available only if a domain alias is configured.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0406334371/p887068.png)
    
3.  Enter the password and click **Log On**.
    
4.  (Optional) If multi-factor authentication (MFA) is enabled for the RAM user, complete the MFA verification. For details, see [MFA overview](/help/en/ram/user-guide/overview-of-security-settings) and [Bind an MFA device to a RAM user](/help/en/ram/user-guide/bind-an-mfa-device-to-a-ram-user).
    

## Call API operations as a RAM user

To call Managed Service for OpenTelemetry API operations programmatically, specify the AccessKey ID and AccessKey secret of the RAM user in your code.

## See also

-   [RAM overview](/help/en/opentelemetry/overview-2#concept-123671-zh)
