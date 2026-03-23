This topic describes how to use Cloud Config to search for resources to which specific tags are not added. Cloud Config facilitates resource management.

## Prerequisites

Your resource tags comply with the principles of tag design. For more information, see [Best practices for tag design](/help/en/resource-management/tag/use-cases/best-practices-for-tag-design#concept-1796690).

## Procedure

1.  Log on to the [Cloud Config console](https://confignew.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Compliance & Audit** > **Rules**.
    
3.  On the **Rules** page, click **Create Rule**.
    
4.  In the **Select Create Method** step, select **Based on managed rule**, select the **required-tags** rule, and then click **Next**.
    
5.  In the **Set Basic Properties** step, configure the Rule Name, Parameter Settings, Risk Level, Trigger, Tags, and Description parameters. Then, click **Next**.
    
6.  In the **Set Effective Scope** step, specify resource types and click **Next**.
    
    You can also configure the Excluded Resource IDs, Effective for the designated resource groups, Effective for designated regions, and Effective for designated tags parameters to narrow down the scope of applicable resources.
    
    In this example, ECS, EIP, OSS, and RDS are selected.
    
7.  In the **Set Remediation** step, choose whether to turn on the Set Remediation switch and click **Submit**.
    
    You can turn on **Set** **Remediation** and configure template remediation or custom remediation for the rule as prompted. For more information about how to configure remediation, see [Overview of remediation settings](/help/en/cloud-config/latest/remediation-settings-overview).
    
8.  On the page that appears, find the newly created rule and click **Detail** in the **Actions** column. Then, view the details of the rule.
    
    -   On the **Result** tab, view the compliance evaluation results of resources.
        
        Cloud Config identifies the resources to which the specified tags are not added. The following figure shows the resources.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9186920171/p772701.png)
        
    -   On the **Remediation Detail** tab, view the remediation results.
        
        If remediation is performed, the specified tags are automatically added to the resources, as shown in the following figure.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9186920171/p772710.png)
        
    

## What to do next

Configure Cloud Config to send resource non-compliance events to Simple Message Queue (formerly MNS) (SMQ). For more information, see [Deliver resource data to an SMQ topic](/help/en/cloud-config/latest/deliver-resource-data-to-an-mns-topic#task-2425025).
