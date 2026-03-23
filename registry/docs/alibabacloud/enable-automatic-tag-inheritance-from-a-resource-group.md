Resource Management provides the automatic tag inheritance feature. This feature allows resources that are added to or created in a resource group to automatically inherit the tags that are added to the resource group.

## Background information

For information about Alibaba Cloud services that support the automatic tag inheritance feature, see the **Support for automatic tag inheritance from a resource group** column in [Services that support tag policies](/help/en/resource-management/tag/user-guide/overview#section-5ob-hk3-fl6).

## Procedure

Both the Tag Policy feature in single-account mode and the Tag Policy feature in resource directory mode support automatic tag inheritance from resource groups. In this example, the Tag Policy feature in single-account mode is used, the tag `env:test` is added to the resource group, and a tag policy is used to enable Elastic Compute Service (ECS) instances in the resource group to automatically inherit the tag `env:test`.

1.  Add a tag to a resource group.
    
    In this example, the tag env:test is used. For more information, see [Add a tag to a resource group](/help/en/resource-management/resource-group/user-guide/add-a-tag-to-a-resource-group#task-2201862).
    
2.  Enable the Tag Policy feature.
    
    For more information, see [Enable the Tag Policy feature](/help/en/resource-management/tag/user-guide/enable-the-tag-policy-feature#task-2182800).
    
3.  Create a tag policy.
    
    1.  Go to the Current Account tab of the **Policy Library** page in the Resource Management console and click **Create Tag Policy**.
        
    2.  On the Create Tag Policy page, enter a policy name in the Policy Name field.
        
    3.  Enter a description for the tag policy in the Policy Description field.
        
    4.  Configure the tag policy on the **Quick Mode** tab.
        
        1.  Select **Automatically Inherit Tags for Resources from Resource Groups** for Policy Scenario.
            
        2.  Enter `env` in the **Tag Key** field.
            
        3.  Select **Specify Resource Types for Detection** and click Specify Resource Types. In the dialog box that appears, select all resource types of ECS.
            
            By default, the tag policy detects resources of all resource types that are supported. If you select a specific resource type, the tag policy detects only the resources of the selected resource type.
            
        4.  Select **Specify Resource Groups** and click **Select Resource Groups**. In the Specify Resource Groups dialog box, select the resource group that is used in Step [1](#step-6vu-6a5-dw6) and click OK.
            
            **Note**
            
            -   By default, a tag policy in single-account mode takes effect for all resource groups. However, you can specify the resource groups for which you want the tag policy to take effect. You can specify a maximum of 20 resource groups.
                
            -   By default, a tag policy in resource directory mode takes effect for all resource groups. You cannot specify the resource groups for which you want the tag policy to take effect.
                
            
        5.  If you do not want some resources in the resource group to inherit the tag, select **Specify IDs of Resources to Be Excluded** and click **Specify Resource IDs**. In the Specify IDs of Resources to Be Excluded dialog box, enter the resource IDs that you want to exclude. Then, click OK.
            
            **Note**
            
            You can specify a maximum of 20 resource IDs that you want to exclude.
            
        
    5.  Click **Create**.
        
4.  Attach the tag policy.
    
    1.  Go to the Current Account tab of the Policy Library page, find the tag policy created in Step [3](#step-8av-k8f-lye) and click **Attach** in the **Actions** column.
        
    2.  In the **Attach** message, click **OK**.
        
        The tag policy takes effect for the current Alibaba Cloud account and RAM users within the account.
        
5.  Check whether the tag policy is in effect.
    
    If the tag `env:test` is automatically added to the ECS instances in the resource group, the tag policy is in effect. If other tags are added to the resource group but the tags are not defined in the tag policy, the ECS instances in the resource group do not automatically inherit the tags.
    
    **Note**
    
    You must wait a period of time before a tag policy that is attached to an object takes effect. For information about the time that is required, see [Limits](/help/en/resource-management/tag/user-guide/overview#section-buy-tdn-6k7) in Overview.
