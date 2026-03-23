This topic describes the basic operations that you can perform on groups. The basic operations include creating a group, viewing group information, modifying the basic information about a group, deleting a group, adding a user to a group, and removing a user from a group.

## Create a group

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **User Management** > **Group**.
    
3.  On the **Group** page, click **Create Group**.
    
4.  In the **Create Group** panel, configure **Group Name**.
    
    The group name must be unique within the directory. The group name can be up to 128 characters in length and can contain letters, digits, underscores (\_), hyphens (-), and periods (.).
    
5.  Configure **Description**.
    
6.  Click **OK**.
    

## View the information about a group

On the **Group** page, click the name of a group. On the page that appears, perform the following operations:

-   Click the **Details** tab to view the basic information about the group.
    
-   Click the **Users** tab to view the users in the group.
    
-   Click the **Access Assignment** tab to view the accounts in your resource directory and access configurations that are specified for the group.
    
-   Click the **RAM User Provisioning** tab to view the information about RAM user provisioning. For more information, see [Overview of a RAM user provisioning](/help/en/cloudsso/user-guide/overview-of-a-ram-user-provisioning).
    

## Modify the basic information of a group

**Note**

After System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot modify the basic information about the groups that are synchronized by using SCIM.

1.  On the **Group** page, click the name of a group.
    
2.  On the **Details** tab of the page that appears, click **Edit Group** in the **Basic Information** section.
    
3.  In the **Edit Basic Group Information** panel, change the values of **Group Name** and **Description**.
    
4.  Click **OK**.
    

## Delete a group

Before you delete a group, make sure that the group is not associated with the following resources. Otherwise, the deletion fails.

-   Users: You must remove users from the group. For more information, see [Remove a user from a group](#section-fsu-anv-6j3).
    
-   Access permissions: You must remove the access permissions on the accounts in your resource directory from the group. For more information, see [Remove the existing access permissions on an account in a resource directory](/help/en/cloudsso/user-guide/remove-the-existing-access-permissions-on-an-account-in-a-resource-directory#task-2092358).
    

**Note**

After SCIM synchronization is enabled, you cannot delete the groups that are synchronized by using SCIM.

1.  On the **Group** page, find the group that you want to delete and click **Delete** in the **Actions** column.
    
2.  In the **Delete Group** message, click **OK**.
    

## Add a user to a group

**Note**

After SCIM synchronization is enabled, you cannot add users to the groups that are synchronized by using SCIM.

1.  On the **Group** page, click the name of a group.
    
2.  On the **Users** tab of the page that appears, click **Add User to Group**.
    
3.  In the **Add User to Group** panel, select users.
    
    You can add a user to multiple groups.
    
4.  Click **OK**.
    
5.  Click **Close**.
    

## Remove a user from a group

**Note**

After SCIM synchronization is enabled, you cannot remove users from the groups that are synchronized by using SCIM.

1.  On the **Group** page, click the name of a group.
    
2.  On the page that appears, click the **Users** tab.
    
3.  Find the user who you want to remove and click **Remove** in the **Actions** column.
    
4.  In the **Remove Member** message, click **OK**.
