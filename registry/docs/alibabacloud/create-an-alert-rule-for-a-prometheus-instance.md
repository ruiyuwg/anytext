Managed Service for Prometheus evaluates alert rules at regular intervals and triggers alert events when metric conditions are met. Route these events to the right contacts through text message, email, phone call, DingTalk chatbot, WeCom chatbot, or webhook by configuring notification policies.

Two check types are available:

**Check type**

**When to use**

**PromQL required**

**Static Threshold**

Standard metrics such as CPU or memory utilization. Select a preset metric and define a threshold.

No

**Custom PromQL**

Metrics that preset options do not cover. Write your own PromQL expression.

Yes

## Prerequisites

Before you begin, make sure that you have:

-   A Prometheus instance in Managed Service for Prometheus. To create one, see:
    
    -   [Monitor an ACK cluster](/help/en/prometheus/container-observable)
        
    -   [Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)
        
    -   [Monitor ECS instances](/help/en/prometheus/host-observable)
        

## Open the alert rule creation page

1.  Log on to the [Managed Service for Prometheus console](https://cloudmonitor.console.alibabacloud.com/prom/instances/#/home).
    
2.  In the left-side navigation pane, click **View Alert Rules**.
    
3.  On the **Prometheus Alert Rules** page, click **Create Prometheus Alert Rule**.
    

## Create an alert rule with a preset metric

ARMS provides preset metrics for common monitoring scenarios. Select a metric and configure the alert condition without writing PromQL.

1.  On the **Create Prometheus Alert Rule** page, configure the following parameters.
    
    ### Define the alert condition
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Alert Rule Name
    
    A descriptive name for the alert rule.
    
    `Production cluster - container CPU utilization alert`
    
    Check Type
    
    Select **Static Threshold**.
    
    Static Threshold
    
    Prometheus Instance
    
    The Prometheus instance to monitor.
    
    Production cluster
    
    Alert Contact Group
    
    The contact group that receives alert notifications. Available groups vary by Prometheus instance type.
    
    Kubernetes load
    
    Alert Metric
    
    The metric to monitor. Available metrics vary by alert contact group.
    
    Container CPU Usage
    
    Alert Condition
    
    The threshold condition that triggers an alert event.
    
    CPU utilization `greater` than `80%`
    
    ### Filter the alert scope
    
    Filter conditions narrow the scope of the alert rule. A resource must match both the filter condition and the alert condition to generate an alert event.
    
    **Filter type**
    
    **Behavior**
    
    **Traverse** (default)
    
    Applies the rule to all resources in the Prometheus instance.
    
    **Equal**
    
    Applies the rule to a single specified resource. Enter the resource name. Only one resource can be specified.
    
    **Not Equal**
    
    Applies the rule to all resources except the specified one. Enter the resource name. Only one resource can be specified.
    
    **Regex match**
    
    Applies the rule created by using the template to all resources whose names match the regular expression.
    
    **Regex not match**
    
    Applies the rule to all resources whose names do not match the regular expression.
    
    **Note**
    
    After you set the filter conditions, the **Data Preview** section appears. Keep filter conditions within 300 characters.
    
    ### Preview metric data
    
    The **Data Preview** section shows the PromQL statement that corresponds to the alert condition and a time series graph of the metric values. By default, only real-time values for one resource are displayed. Adjust filter conditions to view different resources and time ranges.
    
    -   The red line represents the threshold.
        
    -   Dark red segments of the curve indicate values that meet the alert condition.
        
    -   Blue segments indicate values below the threshold.
        
    -   Hover over the curve to view resource details at a specific point in time. Select a time range on the graph to zoom in.
        
    
    ### Set alert duration and severity
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Duration
    
    Choose when to generate an alert event: **If the alert condition is met** (triggers on a single data point) or **If the alert condition is continuously met for N minutes** (triggers only after the condition persists for the specified duration).
    
    1
    
    Alert Level
    
    The severity level. Valid values: **Default** (lowest), **P4**, **P3**, **P2**, **P1** (highest). Default value: **Default**.
    
    Default
    
    Alert Message
    
    The notification message sent to recipients. Supports Go template syntax for dynamic variables.
    
    `Namespace: {{$labels.namespace}} / Pod: {{$labels.pod_name}} / Container: {{$labels.container}} CPU utilization: {{$labels.metrics_params_opt_label_value}} {{$labels.metrics_params_value}}%. Current value: {{ printf "%.2f" $value }}%`
    
    ### Configure notifications
    
    Choose one of two notification modes:
    
    -   **Simple Mode** -- Configure **Notification Objects**, **Notification Period**, and **Whether to Resend Notifications** directly.
        
    -   **Standard Mode** -- Link the alert rule to a notification policy:
        
        -   **Do Not Specify Notification Policy**: Create a notification policy later on the **Notification Policy** page with match rules and conditions. For details, see [Create and manage a notification policy](/help/en/arms/alarm-operation-center/create-and-manage-notification-policies).
            
        -   **Select an existing policy**: ARMS automatically adds a match rule to the selected policy, using the alert rule ID as the match condition. The alert rule name appears on the **Notification Policy** page.
            
    
    **Important**
    
    After you select a notification policy, alert events generated by this rule may also match other notification policies that use fuzzy matching. A single alert event can be matched by multiple notification policies.
    
    ### Advanced settings
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Alert Check Cycle
    
    The evaluation interval in minutes. Minimum and default: 1 minute.
    
    1
    
    Check When Data Is Complete
    
    Whether to evaluate the alert rule only when data collection is complete. Valid values: **Yes**, **No**.
    
    Yes
    
    Tags
    
    Key-value pairs for matching notification policies.
    
    \--
    
    Annotations
    
    Additional context for the alert rule.
    
    \--
    
2.  Click **Save**. On the **Prometheus Alert Rules** page, verify that the alert rule status is active.
    
    If **Automatic Interruption** appears in the **Status** column, modify the alert rule as prompted and click **Start** in the **Actions** column. In the message that appears, click **OK**. If the issue persists, contact technical support (DingTalk ID: d9j\_rg9e4062f).
    

## Create an alert rule with custom PromQL

Use a custom PromQL expression to monitor metrics beyond the preset options.

1.  On the **Create Prometheus Alert Rule** page, configure the following parameters.
    
    ### Define the PromQL expression
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Alert Rule Name
    
    A descriptive name for the alert rule.
    
    `Pod CPU utilization exceeds 8%`
    
    Check Type
    
    Select **Custom PromQL**.
    
    Custom PromQL
    
    Prometheus Instance
    
    The Prometheus instance to monitor.
    
    \--
    
    Reference Alert Contact Group
    
    The contact group for reference. Available groups vary by Prometheus instance type.
    
    Kubernetes load
    
    Reference Metrics
    
    (Optional) Select a common metric to populate the **Custom PromQL Statements** field with a starter expression. Available metrics vary by Prometheus instance type.
    
    Pod disk usage alert
    
    Custom PromQL Statements
    
    The PromQL expression to evaluate.
    
    `max(container_fs_usage_bytes{pod!="", namespace!="arms-prom",namespace!="monitoring"}) by (pod_name, namespace, device) / max(container_fs_limit_bytes{pod!=""}) by (pod_name, namespace, device) * 100 > 90`
    
    ### Preview query results
    
    The **Data Preview** section shows the PromQL expression and a time series graph of the query results.
    
    -   Hover over the curve to view resource details at a specific point in time.
        
    -   Select a time range on the graph to zoom in.
        
    
    ### Set alert duration and severity
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Duration
    
    Choose when to generate an alert event: **If the alert condition is met** (triggers on a single data point) or **If the alert condition is continuously met for N minutes** (triggers only after the condition persists for the specified duration).
    
    1
    
    Alert Level
    
    The severity level. Valid values: **Default** (lowest), **P4**, **P3**, **P2**, **P1** (highest). Default value: **Default**.
    
    Default
    
    Alert Message
    
    The notification message sent to recipients. Supports Go template syntax for dynamic variables.
    
    `Namespace: {{$labels.namespace}} / Pod: {{$labels.pod_name}} / The utilization of the {{$labels.device}} disk exceeds 90%. Current value: {{ printf "%.2f" $value }}%`
    
    ### Configure notifications
    
    Choose one of two notification modes:
    
    -   **Simple Mode** -- Configure **Notification Objects**, **Notification Period**, and **Whether to Resend Notifications** directly.
        
    -   **Standard Mode** -- Link the alert rule to a notification policy:
        
        -   **Do Not Specify Notification Policy**: Create a notification policy later on the **Notification Policy** page with match rules and conditions. For details, see [Create and manage a notification policy](/help/en/arms/alarm-operation-center/create-and-manage-notification-policies).
            
        -   **Select an existing policy**: ARMS automatically adds a match rule to the selected policy, using the alert rule ID as the match condition. The alert rule name appears on the **Notification Policy** page.
            
    
    **Important**
    
    After you select a notification policy, alert events generated by this rule may also match other notification policies that use fuzzy matching. A single alert event can be matched by multiple notification policies.
    
    ### Advanced settings
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Alert Check Cycle
    
    The evaluation interval in minutes. Minimum and default: 1 minute.
    
    1
    
    Check When Data Is Complete
    
    Whether to evaluate the alert rule only when data collection is complete. Valid values: **Yes**, **No**.
    
    Yes
    
    Tags
    
    Key-value pairs for matching notification policies.
    
    \--
    
    Annotations
    
    Additional context for the alert rule.
    
    \--
    
2.  Click **Save**. On the **Prometheus Alert Rules** page, verify that the alert rule status is active.
    
    If **Automatic Interruption** appears in the **Status** column, modify the alert rule as prompted and click **Start** in the **Actions** column. In the message that appears, click **OK**. If the issue persists, contact technical support (DingTalk ID: d9j\_rg9e4062f).
    

## Manage alert rules

On the **Prometheus Alert Rules** page, you can perform the following operations on alert rules created in the Managed Service for Prometheus console (both static threshold and custom PromQL rules):

-   Edit, delete, or copy a rule
    
-   Start or stop a rule
    
-   View historical alert events
    

For alert rules generated in other Alibaba Cloud service consoles, you can view historical alert events and navigate back to the alert rule list of those services.

## Troubleshoot automatic interruption

If **Automatic Interruption** appears in the **Status** column, the alert rule has stopped evaluating. To resolve this:

1.  Modify the alert rule as indicated by the error message.
    
2.  In the **Actions** column, click **Start**.
    
3.  In the confirmation dialog box, click **OK**.
    

Common causes of automatic interruption:

-   The number of results queried by the alert rule exceeds 1,500.
    
-   No notification object is configured.
    
-   The Prometheus instance is uninstalled or unavailable.
    

If the issue persists, contact technical support (DingTalk ID: d9j\_rg9e4062f).
