After you create a tag policy, you must attach the tag policy to an object. This way, you can manage the tags that are added to the resources of the object.

## Single-account mode

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags).
    
2.  In the left-side navigation pane, choose **Tag Policy** > **Policy Library**.
    
3.  On the **Policy Library** page, click the **Current Account** tab.
    
    **Note**
    
    If the Tag Policy feature in resource directory mode is disabled, skip this step.
    
4.  Find the desired tag policy and click **Attach** in the **Actions** column.
    
5.  In the **Attach** message, click ****Attach****.
    
    The tag policy is attached to the Alibaba Cloud account that you use for logon.
    

## Resource directory mode

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags).
    
2.  In the left-side navigation pane, choose **Tag Policy** > **Policy Library**.
    
3.  On the **Policy Library** page, click the **Resource Directory** tab.
    
4.  Find the desired tag policy and click **Attach** in the **Actions** column.
    
5.  In the **Attach** dialog box, select the objects to which you want to attach the tag policy, and click ****Attach****.
    
    The effective scope of the tag policy varies based on the object type.
    
    -   Root folder: If you attach the tag policy to the Root folder, the tag policy takes effect for all members in the resource directory.
        
    -   Specific folder: If you attach the tag policy to a specific folder, the tag policy takes effect only for all members in the folder.
        
    -   Specific member: If you attach a tag policy to a specific member, the tag policy takes effect only for the member.
        
    
    **Note**
    
    If you enable only the Tag Policy feature in resource directory mode, you cannot attach tag policies to the management account of your resource directory. You can create tag policies for and attach tag policies to the account only after you enable the Tag Policy feature in single-account mode.
