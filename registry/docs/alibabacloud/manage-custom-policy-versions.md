When you modify a custom Resource Access Management (RAM) policy, a new version is created. This versioning system allows you to track changes and revert to a previous version if necessary. This topic explains how to view, delete, and set the active (default) version of a custom policy.

## Understand policy versions

Keep the following key concepts in mind when working with policy versions:

-   A custom policy can have up to five versions.
    
-   When you save a change to a policy that already has five versions, a new version is created, and the oldest non-default version is automatically deleted.
    
-   Only one version of a policy can be active at a time. This is known as the **default version**.
    
-   The default version cannot be deleted. To delete it, you must first set another version as the default.
    

## Manage versions in the console

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Permissions** > **Policies**.
    
3.  On the **Policies** page, click the target policy.
    
4.  Select the **Policy Document** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9300966471/p951318.png)
    
    From here, you can perform the following actions:
    
    -   **View a policy version**
        
        From the **Policy Version** dropdown list, select the version you want to view. The JSON document for that version is displayed.
        
    -   **Set a version as default**
        
        From the **Policy Version** dropdown list, select the version you want to make active.
        
        Click **Set as Default Version**. This version immediately becomes the active policy.
        
    -   **Delete a policy version**
        
        From the **Policy Version** dropdown list, select a non-default version you want to delete.
        
        Click **Delete Version** and confirm the deletion in the dialog box.
