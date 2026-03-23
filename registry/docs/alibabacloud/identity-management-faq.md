This topic describes frequently asked questions about identity management in SASE.

-   [Why does synchronization fail for a Windows AD domain account after I provide the required information?](#a8f6318c1flli)
    
-   [Can I use third-party and custom identity sources at the same time?](#cc4ab0a44fgdm)
    
-   [Why is the organizational structure not synchronized after I connect to a third-party identity source?](#78d8c2001cbec)
    
-   [Do I need to obtain the schema for a WeChat identity source from a SASE engineer?](#c062a298c3q4n)
    
-   [If an administrator deletes a user from DingTalk, WeCom, or Lark after the user resigns, does the SASE platform automatically delete the user?](#4664a1da600go)
    

## Why does synchronization fail for a Windows AD domain account after I provide the required information?

Check whether the Base DN information is correctly configured. For more information, see [Connect to an LDAP identity source](/help/en/sase/user-guide/connect-an-ldap-identity-source).

## Can I use third-party and custom identity sources at the same time?

SASE lets you enable up to five identity sources at the same time. Only one of these can be a custom identity source. You can configure and enable third-party identity sources, such as DingTalk and WeCom, along with a custom identity source.

## Why is the organizational structure not synchronized after I connect to a third-party identity source?

During identity source configuration, check whether you enabled automatic synchronization and employee information synchronization. If automatic synchronization is enabled, you can view the synchronization records for the identity source. For more information, see Identity synchronization.

## Do I need to obtain the schema for a WeChat identity source from an SASE engineer?

Yes, you do.

Submit a [ticket](https://smartservice.console.alibabacloud.com/service/create-ticket) to contact SASE engineers to obtain the schema value.

## If an administrator deletes a user from DingTalk, WeCom, or Lark after the user resigns, does the SASE platform automatically delete the user?

No, it does not.

If the DingTalk, WeCom, or Lark identity source is configured correctly, the SASE client is automatically unregistered and the user's permissions are revoked. However, the user account is retained on the **Terminal Management** > **Terminal Registration** page in the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
