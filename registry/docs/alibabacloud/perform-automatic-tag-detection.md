After resources are created, you can use tag policies to detect tag compliance of the resources. This helps you identify the resources to which compliant tags are not added or non-compliant tags are added in an efficient manner. For example, to determine tag compliance of the resources, you can use tag policies to detect whether tags added to the resources are compliant or tags defined in the tag policies are added to the resources. The automatic tag detection feature helps you identify tag non-compliance issues at the earliest opportunity.

## Prerequisites

The Tag Policy feature is enabled. For more information, see [Enable the Tag Policy feature](/help/en/resource-management/tag/user-guide/enable-the-tag-policy-feature#task-2182800).

## Background information

For information about the Alibaba Cloud services that support automatic tag detection, see the **Support for automatic tag detection and automatic tag remediation** column in [Services that support tag policies](/help/en/resource-management/tag/user-guide/overview#section-5ob-hk3-fl6).

## Procedure

The automatic tag detection feature can be used to check tag compliance of resources within the current account or the members in a resource directory. This section describes how to use a tag policy to automatically detect whether a tag whose tag key is `CostCenter` is added to all resources within the current Alibaba Cloud account.

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags). The Tags page appears.
    
2.  Create a tag policy.
    
    1.  In the left-side navigation pane, choose Tag Policy > **Policy Library**. On the Policy Library page, click **Create Tag Policy**.
        
    2.  On the Create Tag Policy page, enter a policy name in the Policy Name field.
        
    3.  **(Optional)** Enter a policy description in the Policy Description field.
        
    4.  Configure the tag policy on the **Quick Mode** tab.
        
        1.  Select **Add Tags with Specified Tag Values to Resources** for Policy Scenario.
            
        2.  In the **Tag Key** field, enter `CostCenter`.
            
        3.  Enter one or more tag values in the Specify Allowed Tag Values field.
            
            We recommend that you specify tag values based on the use scenario of the tag policy. The following use scenarios are supported:
            
            -   Use the tag policy to detect resources to which tags with the specified tag key are not added
                
                In this scenario, you can use an asterisk (`*`) as a tag value. In this example, the tag key is `CostCenter`. If you set the tag value to \* for the tag key, the tag policy is used to detect resources to which tags with the `CostCenter` tag key are not added.
                
                **Note**
                
                `*` indicates any tag value.
                
            -   Use the tag policy to detect resources to which the specified tag is not added
                
                In this example, the tag key is `CostCenter`. If you set the tag value to `Beijing` for the tag key, the tag policy is used to detect resources to which the `CostCenter:Beijing` tag is not added.
                
                You can specify multiple tag values for each tag key. You must make sure that each tag value occupies one row.
                
        
    5.  Click **Create**.
        
3.  Attach the tag policy.
    
    Attach the tag policy created in Step [2](#step-oou-td6-3bd) to the current Alibaba Cloud account. After the tag policy is attached to the account, the tag policy takes effect for the Alibaba Cloud account and the RAM users within the Alibaba Cloud account.
    
    For more information, see [Attach a tag policy](/help/en/resource-management/tag/user-guide/attach-a-tag-policy#task-2186523).
    
4.  View the effective policy.
    
    An effective policy is obtained by aggregating all tag policies that are attached to the current account. For more information, see [View an effective policy](/help/en/resource-management/tag/user-guide/view-an-effective-policy#task-2186529).
    
5.  Wait until the detection tasks are complete and view the detection results.
    
    The system detects tag compliance of resources that belong to the Alibaba Cloud account and the RAM users within the Alibaba Cloud account and identifies the resources whose tags are non-compliant. You can view and download a report for the detection results.
    
    For more information, see [View and download non-compliance detection results](/help/en/resource-management/tag/user-guide/view-and-download-non-compliance-detection-results#task-2186530).
    

## What to do next

You can manually remediate tags for resources whose tags are non-compliant, or enable Automatic Remediation for the tag policy to make the system automatically remediate tags for the resources. For information about how to use a tag policy to perform automatic tag remediation, see [Enable automatic tag remediation](/help/en/resource-management/tag/user-guide/enable-automatic-tag-remediation#task-2186556).

After tags are remediated for the resources, you can view detection results again and check whether the detection results meet your business requirements.
