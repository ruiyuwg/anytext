If a Resource Access Management (RAM) role no longer needs specific permissions, you can revoke the permissions from the RAM role. This topic describes how to revoke the permissions from a RAM role.

**Note**

You cannot revoke permissions from service-linked roles by detaching policies from the roles. This is because the policies that are attached to this type of role are defined by the linked cloud services. For more information, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621).

## Method 1: Revoke permissions from a RAM role on the Roles page

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM user who has administrative rights.
    
2.  In the left-side navigation pane, choose **Identities** > **Roles**.
    
3.  On the **Roles** page, click the name of the RAM role that you created.
    
4.  On the **Permissions** tab, find the policy that you want to detach from the RAM role and click **Revoke Permission** in the **Actions** column.
    
    You can also select multiple policies and click **Revoke Permission** below the policy list to detach the policies from the RAM role at a time.
    
5.  In the **Revoke Permission** dialog box, click **Revoke Permission**.
    

## Method 2: Revoke permissions from a RAM role on the Grants page

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM user who has administrative rights.
    
2.  In the left-side navigation pane, choose **Permissions** > **Grants**.
    
3.  On the **Permission** page, find the RAM role from which you want to revoke permissions and click **Revoke Permission** in the **Actions** column.
    
    You can also select multiple RAM roles and click Revoke Permission below the RAM role list to revoke permissions from multiple RAM roles at a time.
    
4.  In the **Revoke Permission** dialog box, click **Revoke Permission**.
    

## References

[DetachPolicyFromRole](/help/en/ram/developer-reference/api-ram-2015-05-01-detachpolicyfromrole)
