You can delete a Resource Access Management (RAM) role when it is no longer needed. Before you delete a role, ensure that it is not being used by any users, applications, or services to avoid potential service interruptions.

## Procedure

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Identities** > **Roles**.
    
3.  On the **Roles** page, find the RAM role that you want to delete and click **Delete Role** in the **Actions** column.
    
4.  In the **Delete Role** dialog box, enter the name of the RAM role to confirm the deletion and click **Delete Role**.
    
    **Note**
    
    When you delete a role, any attached policies are automatically detached. If the deletion fails, the role might still be in use by a service. To view details about the failure, choose **Role Deletion Tasks** in the upper-right corner of the **Roles** page.
    

## References

-   [DeleteRole](/help/en/ram/developer-reference/api-ram-2015-05-01-deleterole)
    
-   [DeleteServiceLinkedRole](/help/en/resource-management/api-deleteservicelinkedrole#doc-api-ResourceManager-DeleteServiceLinkedRole)
