If you create a rule based on a managed rule that supports template remediation, you can select a preset Operation Orchestration Service (OOS) template to remediate the configurations of non-compliant resources. If a resource that is associated with this rule is evaluated as **Non-compliant**, the template takes effect and the resource is remediated quickly.

## **Limits**

Only some rules that are created based on managed rules support template remediation. For more information about the managed rules that support template remediation, see [Managed rules](/help/en/cloud-config/latest/managed-rules).

## Background information

This topic describes how to configure and execute template remediation. In this example, a rule is created based on the **required-tags** managed rule.

The **required-tags** managed rule checks whether a resource has all the specified tags. For example, you can use the **required-tags** managed rule to check whether all your Elastic Compute Service (ECS) instances have the `Project:A` tag. If an ECS instance does not have the tag, the instance is evaluated as **Non-compliant**. You can then execute the remediation to quickly add the specified tag to the ECS instance.

## Procedure

1.  Log on to the [Cloud Config console](https://confignew.console.alibabacloud.com).
    
2.  Optional. In the upper-left corner, select an account group.
    
    This operation is required only if you are using a management account of a resource directory. Otherwise, you do not need to perform the operation.
    
3.  In the left-side navigation pane, choose **Compliance & Audit** > **Rules**.
    
4.  On the **Rules** page, click **Create Rule**.
    
5.  In the **Select Create Method** step, select **Create from managed rule**, select **required-tags** from the list of managed rules, and then click **Next**.
    
6.  In the **Set Basic Properties** step, set a **Key** parameter to **Project** and the corresponding **Value** parameter to **A**. Retain the default settings for other parameters. Then, click **Next**.
    
7.  In the **Set Effective Scope** step, select **Ecs Instance** from the All Resource Type box, leave other parameters empty, and click **Next**.
    
8.  In the **Set Remediation** step, turn on **Set Remediation**, select **Template Remediation**, set **Invoke Type** to **Manual Remediation** and **Remediation Template** to **Add tags to specified resources**, and then click **Submit**.
    
    **Important**
    
    -   If you set Invoke Type to Automatic Remediation, Cloud Config automatically remediates configurations of non-compliant resources based on your settings. This may affect business continuity. Therefore, **Invoke Type** is set to **Manual Remediation** by default. We recommend that you retain the default setting.
        
    -   If the remediation does not affect your business, you can set **Invoke Type** to **Automatic Remediation**. In this case, Cloud Config automatically remediates configurations of non-compliant resources based on your settings.
        
    
9.  Trigger the remediation.
    
    1.  On the **Rules** page, find the rule that you want to manage, and click **Remediation Detail** in the **Remediation Template** column.
        
    2.  On the **Remediation Detail** tab, click **Perform Manual Remediation** next to **Remediation Detail**.
        
        In the **Execution Result List** section, you can view the remediation results. You can also view the reason why a resource fails to be remediated.
