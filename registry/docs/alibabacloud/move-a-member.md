Resource Directory allows you to move members between folders to meet your business requirements.

## **Impacts**

-   [Access control policies](/help/en/resource-management/resource-directory/user-guide/control-policy-overview): An access control policy that is attached to a folder in a resource directory is inherited by the subfolders of the folder. After a member is moved from one folder to another, it is no longer managed by the access control policies attached to its original parent folder. Instead, it is managed by the access control policies attached to its new parent folder.
    
-   [Contacts](/help/en/resource-management/resource-directory/user-guide/manage-contacts-for-a-member): Members automatically inherit the contacts bound to their parent folders. After a member is moved from one folder to another, it no longer inherits the contacts bound to its original parent folder. Instead, it inherits the contacts bound to its new parent folder.
    
-   [Trusted services](/help/en/resource-management/resource-directory/user-guide/overview-1): Some trusted services are managed at the folder level. Moving a member may affect business outcomes. The specific impact depends on your actual business scenarios.
    

## Procedure

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/) as a management account.
    
2.  In the left-side navigation pane, choose **Resource Directory** > **Management**.
    
3.  On the page that appears, click **Resource Organization View** or **Member List View** in the upper-right corner. Then, move one or more members.
    
    -   Move a single member.
        
        Click **Move** in the **Actions** column of the member. In the panel that appears, select the destination folder and click **OK**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0120843471/p934210.png)
        
    -   Move multiple members.
        
        Select the members and click **Move** in the lower part of the page. In the panel that appears, select the destination folder and click **OK**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0120843471/p934211.png)
