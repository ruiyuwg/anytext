This topic describes how to manage system policies and inline policies. You can add and remove system policies. You can create, modify, and delete inline policies.

## **Limits**

-   By default, you can configure up to 20 system policies and 1 inline policy for each access configuration. If the default quotas cannot meet your requirements, you can apply for quota adjustments in [Quota Center](https://quotas.console.alibabacloud.com/products/cloudsso/quotas).
    
-   The document of an inline policy can be up to 6,144 characters in length.
    

## Add or remove a system policy

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Access Configuration**.
    
3.  On the **Access Configuration** page, find the desired access configuration and click its name.
    
4.  On the **Policy** tab, add or remove a system policy.
    
    -   Add a system policy
        
        1.  Click **Add System Policy**.
            
        2.  In the **Add System Policy** panel, select the desired system policies and click **Add**.
            
        3.  Click **Close**.
            
    -   Remove a system policy
        
        1.  On the System Policy tab, find the desired system policy and click **Remove** in the **Actions** column.
            
        2.  In the **Remove System Policy** message, click **OK**.
            
    

If you add a system policy to or remove a system policy from an access configuration that is provisioned for the accounts in your resource directory, you must re-provision the access configuration for the modification to take effect. For more information, see [Re-provision an access configuration](/help/en/cloudsso/user-guide/re-provision-an-access-configuration#task-2091223).

## Create, modify, or delete an inline policy

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Access Configuration**.
    
3.  On the **Access Configuration** page, find the desired access configuration and click its name.
    
4.  On the **Policy** tab, manage inline policies.
    
    -   Create an inline policy
        
        1.  Click **Add Inline Policy**.
            
        2.  Enter a name for the inline policy and click **OK**.
            
        3.  Enter the content of the inline policy and click **Update Inline Policy**.
            
            The Resource Access Management (RAM) policy syntax is reused for inline policies. For information about the policy syntax, see [Policy structure and syntax](/help/en/ram/policy-structure-and-syntax#concept-srq-fbk-xdb).
            
    -   Modify an inline policy
        
        Modify the content of the inline policy and click **Update Inline Policy**.
        
    -   Delete an inline policy
        
        1.  Click **Delete Inline Policy**.
            
        2.  In the **Delete Inline Policy** message, click **OK**.
            
    

If you create, modify, or delete an inline policy for an access configuration that is provisioned for the accounts in your resource directory, you must re-provision the access configuration for the modification to take effect. For more information, see [Re-provision an access configuration](/help/en/cloudsso/user-guide/re-provision-an-access-configuration#task-2091223).
