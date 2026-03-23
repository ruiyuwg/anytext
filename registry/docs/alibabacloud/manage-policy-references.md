This topic describes how to view policy-based authorization records, attach a policy to a principal, and detach a policy from a principal.

## Procedure

1.  Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/) as a RAM user who has administrative rights.
    
2.  In the left-side navigation pane, choose **Permissions** > **Policies**.
    
3.  On the **Policies** page, find the policy that you want to manage and click its name.
    
4.  Click the **Grants** tab to manage the authorization.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0820966471/p951432.png)
    

-   View the authorization records, including **Principal**, **Resource Scope**, and **Granted At**.
    
-   Attach the policy to a principal: Click **Grant Permission**. In the **Grant Permission** panel, attach the policy to a RAM user, RAM user group, or RAM role.
    
-   Detach the policy from a principal: Find the authorization record that you want to manage and click **Revoke Permission** in the **Actions** column to detach the policy from a RAM user, RAM user group, or RAM role. In the **Revoke Permission** message, click **Revoke Permission**.
    
    **Note**
    
    You can select multiple authorization records and click **Revoke Permission** below the authorization record list to detach the policy from multiple principals at a time.
    

## References

-   [ListEntitiesForPolicy](/help/en/ram/developer-reference/api-ram-2015-05-01-listentitiesforpolicy)
