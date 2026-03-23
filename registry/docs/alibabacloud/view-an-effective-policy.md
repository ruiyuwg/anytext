A single Alibaba Cloud account can be used to view the effective policy that is attached to the account. The management account of a resource directory can be used to view the effective policy that is attached to the Root folder, a specific folder, a specific member, or the management account. A member can be used to view the effective policy that is attached to the member. An effective tag policy is obtained based on tag policy inheritance.

## Background information

For information about tag policy inheritance and the calculation of an effective policy, see [Inheritance of a tag policy and calculation of an effective policy](/help/en/resource-management/tag/user-guide/inheritance-of-a-tag-policy-and-calculation-of-an-effective-policy#concept-2184932).

## Procedure

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags).
    
2.  In the left-side navigation pane, choose **Tag Policy** > **Effective Policies**.
    
3.  View the related effective policy.
    
    -   View the effective policy for the current account.
        
        Click the tag key. On the page that appears, you can view the information about the effective policy for the current account. The information includes basic information, involved tag policies, detection results, and remediation records.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3700581471/p926743.png)
        
    -   View an effective policy for a resource directory.
        
        -   Click the **All Members** tab to view the members to which tag policies are attached in the resource directory. You can click **View Detection Results** in the **Actions** column that corresponds to a member. On the page that appears, you can view the information about the effective policy for the member. The information includes basic information, involved tag policies, detection results, and remediation records.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3700581471/p926730.png)
            
        -   Click the **Resource Directory** tab to view the effective policies that are attached to the folders and members in the resource directory. You can click a tag key. On the page that appears, you can view the information about the effective policy for the folder or member. The information includes basic information, involved tag policies, detection results, and remediation records.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3700581471/p926734.png)
