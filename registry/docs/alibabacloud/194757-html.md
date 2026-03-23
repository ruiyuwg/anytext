A compliance package is a set of rules that are predefined by Cloud Config based on a specific compliance scenario. You can create a compliance package based on a compliance package template, managed rules, and custom rules. After you create a compliance package, you can view the compliance evaluation results by rule, resource, or member account. You can view the evaluation results by member account only in multi-account scenarios.

## Background information

Cloud Config provides default compliance package templates. For more information, see [Overview](/help/en/cloud-config/latest/compliance-packages-overview#concept-2060360).

The rules that are created based on compliance packages are also displayed on the **Rules** page. The total number of rules in the rule list cannot exceed 200.

After you create a compliance package, Cloud Config automatically executes the rules to evaluate resources once. Then, the rules are executed to evaluate resources if the specified trigger conditions are met. You can also manually execute the rules to evaluate resources. You can modify, delete, enable, or disable the rules.

## **Procedure**

In this example, a compliance package is created based on the **BestPracticesForECS** compliance package template to check the compliance of ECS instances.

1.  Log on to the [Cloud Config console](https://confignew.console.alibabacloud.com).
    
2.  Optional. In the upper-left corner, select an account group.
    
    This operation is required only if you are using a management account of a resource directory. Otherwise, you do not need to perform the operation.
    
3.  In the left-side navigation pane, choose **Compliance & Audit** > **Compliance Package**.
    
4.  On the **Compliance Package** page, click **Create Package**.
    
5.  In the **Select Template (Optional)** step, find the **BestPracticesForECS** compliance package template, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5045741961/p689766.png) icon in the upper-right corner of the compliance package template, and then click **Next**.
    
6.  In the **Set Basic Properties** step, set the name of the compliance package and use the default values for other parameters. Then, click **Next**.
    
7.  In the **Select Rules** step, select all rules in the **BestPracticesForECS** compliance package template and click **Next**.
    
    **Note**
    
    If you did not select a compliance package template in [Step 5](#77e6fa101axro), perform the following operations to select rules:
    
    1.  Click **Add Rule**. In the **Add Rule** panel, select rules on the **Rule Templates** or **List of existing rules** tab and click **OK**.
        
    2.  In the **Select Rules** step, select the rules that you want to use and click **Next**.
        
    
8.  In the **Set Rule Parameters** step, set the parameters for the rules and click **OK**.
    
    **Note**
    
    For more information about how to set parameters for the rules, see the topics described in the Resource type column of the table in the [Supported resource types and relationships in Cloud Config](/help/en/cloud-config/latest/alibaba-cloud-services-that-are-supported-by-cloud-config) topic.
    
9.  View the compliance evaluation results of the compliance package.
    
    On the **Compliance Package** page, find the compliance package that you want to manage and click the ID of the compliance package or click **Detail** in the **Actions** column.
    
    -   On the **Rule Result** tab of the compliance package details page, you can view the number of non-compliant resources that are evaluated based on each rule. You can also perform the following operations on this tab:
        
        -   Modify or delete a rule: Find the rule that you want to manage and click **Edit** or **Delete** in the **Actions** column of the rule. If a rule in a compliance package is modified or deleted, the rule on the Rules page is also modified or deleted.
            
        -   Remove a rule from the current compliance package: Find the rule that you want to manage and click **Move out** in the **Actions** column.
            
    -   On the **Resource Result** tab, you can view the non-compliant resources. You can also perform the following operations on this tab:
        
        -   View the details of a resource: Find the resource that you want to manage and click **Resource ID/Name**. On the page that appears, view the information about the resource, including the basic information, related resources, configuration change history, and compliance check history. For more information, see [View the information about a resource](/help/en/cloud-config/latest/view-the-information-about-a-resource), [View the resources that are associated with a resource](/help/en/cloud-config/latest/view-the-resources-that-are-associated-with-a-resource), [View the configuration change history of a resource](/help/en/cloud-config/latest/view-the-configuration-timeline-of-a-resource), and [View the compliance detection history of a resource](/help/en/cloud-config/latest/global-resources-view-the-compliance-timeline-of-a-resource).
            
        -   Ignore the evaluation result generated by a specific rule for a resource: Find the resource that you want to manage and click **Ignore Result** in the **Actions** column. For more information, see [Ignore evaluation results](/help/en/cloud-config/latest/ignore-detection-results).
            
    -   On the **Member Result** tab, you can view non-compliant member accounts.
        
        If a member account has non-compliant resources, the member account is evaluated as a non-compliant member account.
        
        **Note**
        
        The **Member Result** tab is available only in multi-account mode.
        

## **References**

-   [Check the resource compliance of an Alibaba Cloud account](/help/en/cloud-config/latest/quick-start-for-ordinary-accounts)
    
-   [Check the resource compliance of multiple accounts](/help/en/cloud-config/latest/quick-start-for-management-accounts)
    
-   [Compliance package templates](/help/en/cloud-config/latest/compliance-package-templates)
