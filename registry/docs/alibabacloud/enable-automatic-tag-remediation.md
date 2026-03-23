After you enable the automatic tag remediation feature of a tag policy, the system remediates non-compliant tags for resources to which the tag policy is applied based on the detection results.

## Prerequisites

The Tag Policy feature is enabled. For more information, see [Enable the Tag Policy feature](/help/en/resource-management/tag/user-guide/enable-the-tag-policy-feature#task-2182800).

## Background information

The automatic tag remediation feature is available when you use the Tag Policy feature in single-account mode or resource directory mode. This topic describes how to enable automatic tag remediation for resources within an Alibaba Cloud account. In this example, a tag policy in single-account mode is used, the cost center tag `CostCenter:Beijing` is defined in the tag policy, and the tag policy is attached to the Alibaba Cloud account. If the cost center tag is not added to the resources or tags that are added to the resources are non-compliant, the system remediates tags for the resources.

For information about the Alibaba Cloud services that support automatic tag remediation, see the **Support for automatic tag detection and automatic tag remediation** column in [Services that support tag policies](/help/en/resource-management/tag/user-guide/overview#section-5ob-hk3-fl6).

## Procedure

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags).
    
2.  Create a tag policy for which Automatic Remediation is not selected. Then, attach the tag policy to the logon account to enable the system to only detect resources whose tags are non-compliant within the account.
    
    In the tag policy, the tag key `CostCenter` and the tag value `Beijing` are specified. For more information, see [Perform automatic tag detection](/help/en/resource-management/tag/user-guide/perform-automatic-tag-detection#task-2186556).
    
3.  View the resources whose tags are non-compliant.
    
    The system detects the resources to which the `CostCenter:Beijing` tag is not added or to which tags other than CostCenter:Beijing are added based on the tag policy. You can view or download the detection results for non-compliant tags. For more information, see [View and download non-compliance detection results](/help/en/resource-management/tag/user-guide/view-and-download-non-compliance-detection-results#task-2186530).
    
4.  Modify the configuration of the tag policy to enable automatic tag remediation for the tag policy.
    
    1.  On the Policy Library page, find the tag policy and click **Modify** in the **Actions** column.
        
    2.  On the page that appears, select **Automatic Remediation**.
        
        **Note**
        
        If an asterisk (`*`) is specified for the tag value, automatic tag remediation cannot be enabled.
        
    3.  Click **Specify Scope for Automatic Remediation**.
        
    4.  In the **Specify Scope for Automatic Remediation** dialog box, configure settings for automatic tag remediation and click **OK**.
        
        -   **Without Automatic Remediation** (default): If you select this option, the system does not remediate non-compliant tags for the resources.
            
        -   **Specific Resource Scope**: If you select this option, you need to configure Specify Tag Scope, Specify Region Scope, Specify Resource Groups, Specify Resource Types for Detection, or Specify Regular Expression of Resource Names to specify the scope of resources for which you want to perform automatic tag remediation.
            
        -   **All**: If you select this option, the system remediates non-compliant tags for all resources in the detection results. In this example, All is selected.
            
        
        **Note**
        
        In this example, all resources with the `CostCenter:Beijing` tag are detected and automatically remediated. If you want to detect and remediate multiple tag values of `CostCenter`, such as `CostCenter:Beijing` and `CostCenter:Shanghai`, you can specify multiple tag values in the Specify Allowed Tag Values field. However, when you enable automatic tag remediation, you must specify different scopes for different tag values.
        
    5.  Click **Submit**.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4185997471/p959411.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4185997471/p959414.png)
    
5.  Wait until automatic tag remediation is complete and check whether the remediation results meet your business requirements.
    
    1.  In the left-side navigation pane, choose **Tag Policy** > **Effective Policies**.
        
    2.  Click the tag key of the desired effective policy. On the details page of the effective policy, click the **Remediation Records** tab.
        
        You can view information such as the details of a resource on which a remediation task is run, the remediation result, and the time consumed for the remediation. In addition, you can specify filter conditions to view the remediation tasks that are successfully run or fail to run.
        
    3.  Log on to the console of the Alibaba Cloud service to which one of the resources belongs and check whether tags added to the resource meet your business requirements.
        

## **References**

[Use tag policies to implement automatic tagging based on resource names](/help/en/resource-management/tag/use-cases/using-tag-policies-to-implement-automatic-marking-based-on-resource-names)
