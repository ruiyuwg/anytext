In a tag policy, you can specify a regular expression that tag values must match. Tag values that do not match the regular expression can be automatically remediated.

## Prerequisites

The Tag Policy feature is enabled. For more information, see [Enable the Tag Policy feature](/help/en/resource-management/tag/user-guide/enable-the-tag-policy-feature#task-2182800).

## Background information

Regular expression-based tag value detection can be used for services that support automatic tag detection and automatic tag remediation. For more information, see the **Support for automatic tag detection and automatic tag remediation** column in [Services that support tag policies](/help/en/resource-management/tag/user-guide/overview#section-5ob-hk3-fl6).

## **Procedure**

Both the Tag Policy feature in single-account mode and the Tag Policy feature in resource directory mode support regular expression-based tag value detection. In this example, the Tag Policy feature in single-account mode is used, and an enterprise wants employee ID-related tags to be added to all resources. The tag key is `staffNumber`, and the tag values are employee IDs. The employee IDs can contain only digits.

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags).
    
2.  Create a tag policy.
    
    1.  In the left-side navigation pane, choose **Tag Policy** > **Policy Library**.
        
    2.  On the **Policy Library** page, click **Create Tag Policy**.
        
    3.  Enter a policy name in the Policy Name field.
        
    4.  Enter a policy description in the Policy Description field.
        
    5.  Configure the tag policy on the **Quick Mode** tab.
        
        1.  Select **Match Tag Values with Specified Regular Expression** for **Policy Scenario**.
            
        2.  In the **Tag Key** field, enter `staffNumber`.
            
        3.  In the **Specify Allowed Tag Values** field, enter a regular expression.
            
            In this example, `^[0-9]+$` is entered. This regular expression indicates that tag values can contain only digits.
            
        4.  In the **Policy Execution Mode** section, configure the parameters based on your business requirements. By default, **Post-event Detection** is selected. The parameters include Specify Resource Types for Detection, Specify Resource Groups, Specify Region Scope, Specify Tag Scope, Specify Regular Expression of Resource Names, and Automatic Remediation.
            
            In this example, the default values of the parameters are retained to facilitate operations.
            
        
    6.  Click **Create**.
        
3.  Attach the tag policy.
    
    Attach the tag policy created in Step [2](/help/en/resource-management/tag/user-guide/perform-automatic-tag-detection#step-oou-td6-3bd) to the current Alibaba Cloud account. After the tag policy is attached to the account, the tag policy takes effect for the Alibaba Cloud account and the RAM users within the Alibaba Cloud account. For more information, see [Attach a tag policy](/help/en/resource-management/tag/user-guide/attach-a-tag-policy#task-2186523).
    
4.  View the effective policy.
    
    An effective policy is obtained by aggregating all tag policies that are attached to the current account. For more information, see [View an effective policy](/help/en/resource-management/tag/user-guide/view-an-effective-policy#task-2186529).
    
5.  Wait until the detection tasks are complete and view the detection results.
    
    The system detects resources to which tags whose tag key is `staffNumber` are not added and resources to which tags whose tag values do not match the specified regular expression are added. For example, if the tag `staffNumber:alice` is added to a resource, the system determines that the resource is non-compliant.
    
    You can view or download the detection results of non-compliant resources. For more information, see [View and download non-compliance detection results](/help/en/resource-management/tag/user-guide/view-and-download-non-compliance-detection-results#task-2186530).
    

## **What to do next**

You can manually modify non-compliant tags. You can also enable the automatic tag remediation feature for the tag policy. This way, the system can automatically remediate the non-compliant tags. For more information about how to use the automatic tag remediation feature, see [Enable automatic tag remediation](/help/en/resource-management/tag/user-guide/enable-automatic-tag-remediation).
