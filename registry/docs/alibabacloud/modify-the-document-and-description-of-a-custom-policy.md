This topic describes how to modify the document and description of a custom policy in Resource Access Management (RAM). You cannot modify the name of the custom policy.

## Procedure

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM user who has administrative rights.
    
2.  In the left-side navigation pane, choose **Permissions** > **Policies**.
    
3.  On the **Policies** page, find the policy that you want to manage and click its name.
    
4.  On the details page, modify the document and description of the policy.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6800966471/p951343.png)
    
    -   Modify the document of the policy.
        
        On the **Policy Document** tab, click **Edit Policy Document**. On the page that appears, click the **Visual editor** or **JSON** tab to modify the document of the policy.
        
        After you modify the document of the policy, the system automatically generates a new version for the policy, which is used as the default version. For more information about policy versions, see [Manage custom policy versions](/help/en/ram/manage-custom-policy-versions).
        
    -   Modify the description of the policy.
        
        In the **Basic Information** section, click **Edit** next to **Description**. In the **Edit Description** dialog box, modify the description of the policy.
        
    

## References

-   [CreatePolicyVersion](/help/en/ram/developer-reference/api-ram-2015-05-01-createpolicyversion)
    
-   [UpdatePolicyDescription](/help/en/ram/developer-reference/api-ram-2015-05-01-updatepolicydescription)
