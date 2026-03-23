You can use the automatic tag remediation feature of tag policies to automatically add tags to resources whose names have specific prefixes.

## **Scenarios**

Assume that an enterprise used to manage resources and allocate costs by resource name. Tags enable more powerful resource management capabilities and more flexible cost allocation capabilities. Therefore, the enterprise wants to add different tags to resources based on resource names. For example, the enterprise wants the `bu:abc` tag to be automatically added to resources whose names start with `abc-`.

In this scenario, the automatic tag remediation feature of tag policies is used to automatically add tags to resources. A regular expression of resource names can be used to specify the resource range. Both Tag Policy in single-account mode and Tag Policy in resource directory mode support this feature. In this example, Tag Policy in single-account mode is used.

For information about the resource types that support automatic tag remediation, see the **Support for automatic tag detection and automatic tag remediation** column in [Services that support tag policies](/help/en/resource-management/tag/user-guide/overview#section-5ob-hk3-fl6).

## **Procedure**

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags).
    
2.  Enable the Tag Policy feature that is in single-account mode.
    
    For more information, see [Enable the Tag Policy feature](/help/en/resource-management/tag/user-guide/enable-the-tag-policy-feature).
    
3.  Create a tag policy.
    
    1.  On the **Policy Library** page, click **Create Tag Policy**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8443017471/p953757.png)
        
    2.  On the Create Tag Policy page, configure the Policy Name and Policy Description parameters.
        
    3.  Configure the tag policy on the **Quick Mode** tab.
        
        1.  Select **Add Tags with Specified Tag Values to Resources** for Policy Scenario.
            
        2.  Specify the tag key and tag value.
            
            In this example, the tag key is bu and the tag value is abc. This indicates that the `bu:abc` tag must be added to resources.
            
        3.  Select **Automatic Remediation**. Then, use a regular expression of resource names to specify the range of resources that require automatic tag remediation.
            
            In this example, the regular expression `abc-.*` is used to indicate that automatic tag remediation will be performed for resources whose names start with `abc-`.
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8443017471/p953743.png)
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8443017471/p953745.png)
        
    4.  Click **Create**.
        
4.  Attach the tag policy.
    
    1.  Go to the Current Account tab of the Policy Library page, find the tag policy created in Step [3](#step-8av-k8f-lye) and click **Attach** in the **Actions** column.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8443017471/p953755.png)
        
    2.  In the **Attach** message, click **OK**.
        
        The tag policy takes effect for the current Alibaba Cloud account and RAM users within the account.
        
5.  Wait for a period of time. On the details page of the related effective policy, view automatic remediation results.
    
    If resources whose names start with `abc-` have the `bu:abc` tag, the resources meet requirements.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8443017471/p953775.png)
    
    **Note**
    
    A tag policy requires a period of time to take effect. For information about the time that is required, see [Limits](/help/en/resource-management/tag/user-guide/overview#section-buy-tdn-6k7).
