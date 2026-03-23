To manage the alert rules of multiple Prometheus instances in different regions, you can use the alert rule template feature of Alibaba Cloud Managed Service for Prometheus. This topic describes how to create and manage alert rule templates to ensure the consistency and efficiency of the alert rules.

## Background information

If you separately create alert rules for multiple Prometheus instances across regions, the workload is heavy and the alert rules are difficult to be centrally managed. Managed Service for Prometheus provides the alert rule template feature to help you create alert rules for multiple Prometheus instances and manage them in a centralized manner. This reduces the cost of managing alert rules for multiple Prometheus instances.

## Create an alert rule template

1.  Log on to the [Managed Service for Prometheus console](https://cloudmonitor.console.alibabacloud.com/prom/instances/#/home).
    
2.  In the left-side navigation pane, click **Alert Rule Template**.
    
3.  On the Prometheus Alert Rule Templates page, click **Create Prometheus Alert Rule Template**.
    
4.  On the **Create Prometheus Alert Rule Template** page, configure the following parameters.
    
    When you create an alert rule template, you can set the Check Type parameter to Static Threshold or Custom PromQL.
    
    -   If you set Check Type to Static Threshold, you can select a preset alert metric and create an alert rule for the metric.
        
    -   To monitor metrics other than those preset by the system, you can specify custom PromQL statements to create an alert rule.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2046939171/p783546.png)
    
    Table 1. Use a preset metric
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Template Name
    
    Enter a name for the alert rule template.
    
    Production cluster - container CPU utilization alert
    
    Template Description
    
    Optional. Describe the template. You can enter the purpose, scenarios, or remarks of the template.
    
    None
    
    Check Type
    
    Select Static Threshold.
    
    Static Threshold
    
    Alert Contact Group
    
    Select an alert contact group.
    
    Kubernetes load
    
    Alert Metrics
    
    Select a metric. Different alert contact groups provide different metrics.
    
    Container CPU utilization
    
    Alert Conditions
    
    Specify the condition based on which alert events are generated.
    
    If the CPU utilization of the container is `greater than` 80%, an alert event is generated.
    
    Filter Conditions
    
    Specify the applicable scope of the alert rule. If a resource meets both the filter condition and the alert condition, an alert event is generated.
    
    The following types of filter conditions are supported:
    
    -   **Traverse**: The alert rule applies to all resources in the current Prometheus instance. By default, Traverse is selected.
        
    -   **Equal**: If you select this filter condition, you must enter a resource name. The alert rule applies only to the specified resource. You cannot specify multiple resources at the same time.
        
    -   **Not equal**: If you select this filter condition, you must enter a resource name. The alert rule applies to resources other than the specified resource. You cannot specify multiple resources at the same time.
        
    -   **Regex match**: If you select this filter condition, you must enter a regular expression to match resource names. The alert rule that you create by using the template applies to all resources that match the regular expression.
        
    -   **Regex not match**: If you select this filter condition, you must enter a regular expression to match resource names. The alert rule applies to resources that do not match the regular expression.
        
    
    Instance IP Address: Traverse
    
    Duration
    
    -   If the alert condition is met, an alert event is generated: If a data point reaches the threshold, an alert event is generated.
        
    -   If the alert condition is continuously met for N minutes, an alert event is generated: An alert event is generated only if the duration for which the threshold is reached is greater than or equal to N minutes.
        
    
    1
    
    Alert Level
    
    Specify the alert level. Default value: **Default**. Valid values: Default, P4, P3, P2, and P1. Default indicates the lowest severity level, while P1 indicates the highest severity level.
    
    Default
    
    Alert Message
    
    Specify the alert message that you want to send to the end users. You can specify custom variables in the alert message based on the Go template syntax.
    
    Namespace: {{$labels.namespace}} / Pod: {{$labels.pod\_name}} / Container: {{$labels.container}} CPU utilization: {{$labels.metrics\_params\_opt\_label\_value}} {{$labels.metrics\_params\_value}}%. Current value: {{ printf "%.2f" $value }}%
    
    Advanced Settings
    
    Tags
    
    Specify tags for the alert rule. The specified tags can be used to match notification policies.
    
    None
    
    Annotations
    
    Specify annotations for the alert rule.
    
    None
    
    Table 2. Use a custom PromQL statement
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Template Name
    
    Enter a name for the alert rule template.
    
    Pod CPU utilization exceeds 80%
    
    Template Description
    
    Optional. Describe the template. You can enter the purpose, scenarios, or remarks of the template.
    
    None
    
    Check Type
    
    Select Custom PromQL.
    
    Custom PromQL
    
    Custom PromQL Statement
    
    Enter a PromQL statement.
    
    max(container\_fs\_usage\_bytes{pod!="", namespace!="arms-prom",namespace!="monitoring"}) by (pod\_name, namespace, device)/max(container\_fs\_limit\_bytes{pod!=""}) by (pod\_name,namespace, device) \* 100 > 90
    
    Duration
    
    -   If the alert condition is met, an alert event is generated: If a data point reaches the threshold, an alert event is generated.
        
    -   If the alert condition is continuously met for N minutes, an alert event is generated: An alert event is generated only if the duration for which the threshold is reached is greater than or equal to N minutes.
        
    
    1
    
    Alert Level
    
    Specify the alert level. Default value: **Default**. Valid values: Default, P4, P3, P2, and P1. Default indicates the lowest severity level, while P1 indicates the highest severity level.
    
    Default
    
    Alert Message
    
    Specify the alert message that you want to send to the end users. You can specify custom variables in the alert message based on the Go template syntax.
    
    Namespace: {{$labels.namespace}} / Pod: {{$labels.pod\_name}} / The utilization of the {{$labels.device}} disk exceeds 90%. Current value: {{ printf "%.2f" $value }}%
    
    Advanced Settings
    
    Tags
    
    Specify tags for the alert rule. The specified tags can be used to match notification policies.
    
    None
    
    Annotations
    
    Specify annotations for the alert rule.
    
    None
    

## Apply an alert rule template

After you create an alert rule template, you can apply the template to specific Prometheus instances to create or update alert rules for the instances.

1.  On the **Prometheus Alert Rule Templates** page, find the alert rule template that you want to apply and click **Apply Template** in the Actions column.
    
2.  On the **Prometheus Instance Selection Mode** tab of the **Application Template** dialog box, select one or more Prometheus instances and click **OK**.
    
    **Note**
    
    You can query Prometheus instances by name, region, or type.
    
3.  In the dialog box that appears, specify whether to update existing alert rules of the selected Prometheus instances and click **OK**.
    
    ARMS uses the current template to create an alert rule for the selected Prometheus instances.
    
    -   If you do not select **Update Created Alert Rules**, and the Prometheus instances have alert rules created based on the current template, the following message appears: **The alert rules are not updated because they are created from this template**. In this case, the existing alert rules are not updated.
        
    -   If you select **Update Created Alert Rules**, the existing alert rules created for the Prometheus instances based on the current template are updated.
        
        **Important**
        
        If an alert rule is modified and the mapping between the alert rule and the template is retained, the modifications are overwritten by the new template.
        
    

## Delete templates

If you no longer need to use an alert rule template, you can delete the template. When you delete a template, you can specify whether to retain the alert rules that are created from the template.

1.  On the **Prometheus Alert Rule Templates** page, find the alert rule template that you want to delete and click **Delete** in the Actions column.
    
2.  In the dialog box that appears, specify whether to delete the alert rules that are created from the template and click **OK**.
    
    -   If you select **Delete Alert Rules Created from Template**, the alert rules that are created from the template are deleted. However, if you have modified an alert rule created from the template and selected **Remove the mapping between this alert rule and the alert rule template** when you saved the changes, the alert rule is not deleted.
        
    -   If you do not select **Delete Alert Rules Created from Template**, the alert rules that are created from the template are retained.
        
    

## View the alert rules created from a template

You can view and manage the alert rules that are created from a template.

1.  On the **Prometheus Alert Rule Templates** page, find the alert rule template and click **View Alert Rules** in the Actions column.
    
2.  In the **Alert Rules Created from Template** dialog box, manage alert rules based on your needs.
    
    -   Enable multiple alert rules: Select the alert rules that you want to enable and click **Enable Alert Rules**.
        
    -   Disable multiple alert rules: Select the alert rules that you want to disable and click **Disable Alert Rules**.
        
    -   Delete multiple alert rules: Select the alert rules that you want to delete and click **Delete Alert Rules**.
        
    

## Usage notes

After you modify an alert rule created from a template, a dialog box appears. In the dialog box, you must specify whether to retain the mapping between the alert rule and the template.

-   If you select **Retain the mapping between this alert rule and the alert rule template**, your modifications may be overwritten when you apply the template to the Prometheus instance corresponding to the alert rule and select Update Created Alert Rules.
    
-   If you select **Remove the mapping between this alert rule and the alert rule template**, the alert rule is considered as a separate rule. We recommend that you rename the alert rule. Otherwise, if you apply the alert rule template to the Prometheus instance again, a new alert rule fails to be created due to name conflicts.
