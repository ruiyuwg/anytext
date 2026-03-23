When Prometheus metrics exceed expected thresholds or exhibit abnormal patterns, timely notification prevents incidents from escalating. ARMS Prometheus alert rules let you define conditions on any metric -- either by selecting a preset metric or writing a custom PromQL statement -- and route notifications to your team through text message, email, phone call, DingTalk chatbot, WeCom chatbot, or webhook.

## Prerequisites

Before you begin, make sure that you have:

-   A Prometheus instance in Managed Service for Prometheus. For setup instructions, see one of the following:
    
    -   [Monitor an ACK cluster](/help/en/arms/prometheus-monitoring/getting-started/container-observable)
        
    -   [Monitor an Alibaba Cloud service](/help/en/arms/prometheus-monitoring/getting-started/cloud-service-observable)
        
    -   [Monitor ECS instances](/help/en/arms/prometheus-monitoring/getting-started/host-observable)
        

## Open the alert rule creation page

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the left-side navigation pane, choose **Managed Service for Prometheus** > **Prometheus Alert Rules**.
    
3.  On the **Prometheus Alert Rules** page, click **Create Prometheus Alert Rule**.
    

## Create a rule with a preset metric

ARMS provides built-in metrics for common monitoring targets such as container CPU usage, pod memory, and disk utilization. Select a preset metric to create an alert rule without writing PromQL.

On the **Create Prometheus Alert Rule** page, configure the following parameters:

### Basic settings

**Parameter**

**Description**

**Example**

**Alert Rule Name**

A descriptive name for the rule.

`Production cluster - container CPU utilization alert`

**Check Type**

Select **Static Threshold**.

Static Threshold

**Prometheus Instance**

The Prometheus instance to monitor.

Production cluster

**Alert Contact Group**

The contact group that receives alert notifications. Available groups vary by Prometheus instance type.

Kubernetes load

**Alert Metric**

The metric to monitor. Available metrics vary by contact group.

Container CPU Usage

### Alert condition

**Parameter**

**Description**

**Example**

**Alert Condition**

The threshold expression that triggers alert events.

CPU utilization of the container is `greater` than `80%`

### Filter conditions

**Filter Conditions** narrow the alert rule to specific resources. A resource must match both the filter condition and the alert condition before an alert event is generated.

**Filter type**

**Behavior**

**Traverse** (default)

Applies the rule to all resources in the Prometheus instance.

**Equal**

Applies the rule to a single named resource. You cannot specify multiple resources at the same time.

**Not Equal**

Applies the rule to all resources except the named resource. You cannot specify multiple resources at the same time.

**Regex match**

Applies the rule to resources whose names match the regular expression.

**Regex not match**

Applies the rule to resources whose names do not match the regular expression.

**Note**

Keep filter conditions within 300 characters.

After you set filter conditions, the **Data Preview** section appears. It shows the PromQL statement for your alert condition and a time series graph of the metric values. By default, only the real-time values of one resource are displayed. You can adjust filter conditions to view metric values for different resources and time ranges.

-   The red line represents the threshold.
    
-   Dark red segments indicate values that meet the alert condition. Blue segments indicate values that do not.
    
-   Hover over the curve to inspect values at a specific point in time.
    
-   Click and drag on the graph to zoom into a time range.
    

### Duration

The **Duration** parameter controls how long a condition must persist before an alert event is generated. This setting determines how the alert transitions between states:

**Option**

**Behavior**

**When to use**

**If the alert condition is met**

A single data point that reaches the threshold generates an alert event immediately.

Use for high-priority metrics where any breach requires attention.

**If the alert condition is continuously met for N minutes**

The threshold must be reached for at least N consecutive minutes before an alert event is generated.

Use to filter out brief spikes and reduce noise.

When you set a duration of N minutes, the alert follows this state flow: the condition is first detected and the alert enters a **Pending** state. If the condition persists for N minutes, the alert transitions to **Firing** and an alert event is generated. If the condition clears before N minutes elapse, the alert returns to **Normal** without generating an event.

### Alert level

**Level**

**Severity**

**Default**

Lowest

**P4**

Low

**P3**

Medium

**P2**

High

**P1**

Highest

### Alert message

**Parameter**

**Description**

**Example**

**Alert Message**

The notification text sent when the alert fires. Supports Go template variables for dynamic values.

`Namespace: {{$labels.namespace}} / Pod: {{$labels.pod_name}} / Container: {{$labels.container}} CPU utilization: {{$labels.metrics_params_opt_label_value}} {{$labels.metrics_params_value}}%. Current value: {{ printf "%.2f" $value }}%`

Common Go template variables for Prometheus alerts:

**Variable**

**Description**

`{{$labels.namespace}}`

Kubernetes namespace

`{{$labels.pod_name}}`

Pod name

`{{$labels.container}}`

Container name

`{{$labels.device}}`

Device name (for disk metrics)

`{{ printf "%.2f" $value }}`

Current metric value, formatted to two decimal places

### Alert notifications

Choose a notification mode:

**Simple Mode**: Set **Notification Objects**, **Notification Period**, and **Whether to Resend Notifications** directly in the rule. Use this mode for straightforward alerting that does not require policy-based routing.

**Standard Mode**: Link the rule to a notification policy for centralized alert routing. Two options:

-   **Do Not Specify Notification Policy**: Create a notification policy later on the **Notification Policy** page. Define match rules and conditions -- for example, match by alert rule name -- to route alert events to contacts or contact groups. For details, see [Create and manage a notification policy](/help/en/arms/alarm-operation-center/create-and-manage-notification-policies).
    
-   **Select a policy from the drop-down list**: ARMS automatically adds a match rule to the selected policy, using the alert rule ID as the match condition.
    

**Important**

After you select a notification policy, alert events from this rule may also be matched by other notification policies that use fuzzy match. One alert event can be matched by multiple notification policies.

### Advanced settings

**Parameter**

**Description**

**Default**

**Alert Check Cycle**

The interval, in minutes, at which the rule evaluates conditions. Minimum: 1.

1

**Check When Data Is Complete**

Whether to check when data is complete. Valid values: **Yes** and **No**.

Yes

**Tags**

Key-value pairs for categorizing the rule. Tags can be used as match conditions in notification policies to route alerts to different teams.

\--

**Annotations**

Free-form metadata about the rule. Use annotations to record context that helps responders act quickly -- for example, a runbook URL, escalation instructions, or a description of the expected behavior.

\--

### Save and verify

Click **Save**. On the **Prometheus Alert Rules** page, check the **Status** column.

If **Automatic Interruption** appears, the rule has been stopped. See Troubleshoot automatic interruption for causes and solutions.

## Create a rule with a custom PromQL statement

To monitor a metric that preset options do not cover, write a custom PromQL statement.

On the **Create Prometheus Alert Rule** page, configure the following parameters:

### Basic settings

**Parameter**

**Description**

**Example**

**Alert Rule Name**

A descriptive name for the rule.

`Pod CPU utilization exceeds 8%`

**Check Type**

Select **Custom PromQL**.

Custom PromQL

**Prometheus Instance**

The Prometheus instance to monitor.

\--

**Reference Alert Contact Group**

The contact group for the rule. Available groups vary by Prometheus instance type.

Kubernetes load

**Reference Metrics**

(Optional) Select a common metric to populate the PromQL field with its query. Modify the query as needed. Available metrics vary by Prometheus instance type.

Pod disk usage alert

### Write the PromQL statement

Enter your query in the **Custom PromQL Statements** field.

**Example** -- Alert when any pod's disk usage exceeds 90%:

```
max(container_fs_usage_bytes{pod!="", namespace!="arms-prom", namespace!="monitoring"})
  by (pod_name, namespace, device)
/
max(container_fs_limit_bytes{pod!=""})
  by (pod_name, namespace, device)
* 100 > 90
```

The **Data Preview** section displays the PromQL result and a time series graph:

-   Hover over the curve to inspect values at a specific point in time.
    
-   Click and drag on the graph to zoom into a time range.
    

### Duration, severity, and notifications

The remaining parameters -- **Duration**, **Alert Level**, **Alert Message**, **Alert Notification**, and **Advanced Settings** -- are the same as for preset metric rules. See Duration, Alert level, Alert message, Alert notifications, and Advanced settings.

Use Go template variables in the **Alert Message** to include dynamic values:

```
Namespace: {{$labels.namespace}} / Pod: {{$labels.pod_name}} /
The utilization of the {{$labels.device}} disk exceeds 90%.
Current value: {{ printf "%.2f" $value }}%
```

### Save and verify

Click **Save**. On the **Prometheus Alert Rules** page, check the **Status** column.

If **Automatic Interruption** appears, the rule has been stopped. See Troubleshoot automatic interruption for causes and solutions.

## Manage alert rules

On the **View Alert Rules** page in the Managed Service for Prometheus console:

**Rule origin**

**Available actions**

Rules created in ARMS (static threshold and custom PromQL)

Edit, delete, copy, start, stop, view historical alert events

Rules generated by other Alibaba Cloud services

View historical alert events, navigate to the source service's alert rule list

## Troubleshoot automatic interruption

If **Automatic Interruption** appears in the **Status** column of the **Prometheus Alert Rules** page, the rule has been stopped due to one of the following causes:

**Cause**

**Solution**

The query returns more than 1,500 results.

Add filter conditions to narrow the query scope, or refine the PromQL statement to reduce the number of matched time series.

No notification object is configured.

Configure a notification object in the alert rule or link the rule to a notification policy.

The Prometheus instance is uninstalled or unavailable.

Verify that the Prometheus instance is running and accessible. Reinstall if necessary.

To recover: modify the rule as prompted, then click **Start** in the **Actions** column. Click **OK** to confirm. If the issue persists, contact technical support (DingTalk ID: d9j\_rg9e4062f).
