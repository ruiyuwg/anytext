During maintenance windows, incident response, or periods of known issues, alert notifications can overwhelm on-call teams without adding value. Silence policies in Application Real-Time Monitoring Service (ARMS) filter and converge alerts that match specific rules, reducing the possibility of alert storms.

When matching rules are triggered, the alert events are silenced and are not matched by notification policies.

Common use cases:

-   **Planned maintenance** -- Silence expected alerts during infrastructure upgrades.
    
-   **Incident response** -- Reduce notification noise during active investigation.
    
-   **Known-issue suppression** -- Mute alerts for issues with a fix already in progress.
    

**Important**

Silence policies take precedence over notification policies. Any alert event that matches a silence policy is silenced and cannot be matched by a notification policy. For more information, see [Create and manage a notification policy](/help/en/arms/alarm-operation-center/create-and-manage-notification-policies#concept-rr3-55h-hhb).

## Create a silence policy

### Prerequisites

Before you begin, make sure that you have:

-   An Alibaba Cloud account with access to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home)
    

### Define the policy

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home). In the left-side navigation pane, choose **Alert Management** > **Silence Policies**.
    
2.  On the **Silence Policies** page, click **Create Silence Policy**.
    
3.  Set **Silence Policy Name**. Choose a descriptive name, such as `k8s-cluster-maintenance` or `staging-env-mute`.
    

### Configure matching rules

In the **Silent Event Matching Rule** section, define which alert events to silence.

1.  Select a data source.
    
    -   To silence alerts from a specific integration, select that data source.
        
    -   To silence alerts from all sources, leave the data source unspecified.
        
2.  Specify one or more expressions by selecting existing tags or adding custom tags. Conditions within the same rule use AND logic -- all conditions must match for the rule to apply. Separate rules use OR logic -- if any rule matches, the alert is silenced.
    
    -   To add an AND condition within the same rule, click **\+ Add Condition**.
        
    -   To add a separate OR rule, click **\+ Add Rule**.
        
    
    **Example matching patterns:**
    
    **Goal**
    
    **Configuration**
    
    Silence alerts from a specific cluster
    
    Add a condition: `clustername` equals your cluster name
    
    Silence P3 and P4 alerts only
    
    Add a condition: `severity` equals `P3`, then click **\+ Add Rule** and add `severity` equals `P4`
    
    Silence alerts from a service in a specific namespace
    
    Add two AND conditions in the same rule: `namespace` equals your namespace, and `alertname` equals the alert name
    

#### Available tags

Tags come from two sources: fields defined in your alert rule expressions, and default tags provided by ARMS.

For information about creating tags in alert rule expressions, see [Create an alert rule for a Prometheus instance](/help/en/arms/prometheus-monitoring/create-alert-rules-for-prometheus-instances#task-2121615).

**Common fields**

**Tag**

**Description**

`alertname`

Name of the alert

`clustername`

Name of the Kubernetes cluster

`severity`

Severity level. Valid values: P1, P2, P3, P4, Default

`namespace`

Kubernetes [namespace](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)

`pod_name`

Kubernetes [Pod](https://kubernetes.io/docs/concepts/workloads/pods/) name

**Preset system fields**

**Tag**

**Description**

`_aliyun_arms_integration_name`

Name of the integration specified as the data source. Default: `ARMS-DEFAULT`

`_aliyun_arms_involvedObject_id`

ID of the object that triggers the alert

`_aliyun_arms_involvedObject_name`

Name of the object that triggers the alert

`_aliyun_arms_region_id`

ARMS region ID

`_aliyun_arms_alert_rule_id`

ID of the alert rule

`_aliyun_arms_alert_type`

Type of alert rule. Valid values: `101` (Prometheus alert), `5` (Application Monitoring alert), `4` (Browser Monitoring alert)

### Set the effective period

Set **Effective Period** to control when the silence policy is active:

**Option**

**Behavior**

**When to use**

**Persistent**

Always active.

Long-term suppression of known issues.

**Recurring**

Active on a repeating schedule. Select **Every Day** or **Weekly**, then click **Create**.

Regular maintenance windows or off-hours muting.

**Custom Time Period**

Active during a specific time window. Click **Create** to define the start and end time.

One-time maintenance or scheduled deployments.

### Save the policy

Click **Save**.

To verify, return to the **Silence Policies** page and confirm that the new policy appears with the expected status.

## Manage silence policies

The **Silence Policies** page supports the following operations:

**Operation**

**Steps**

Edit

Click **Edit** in the **Actions** column. Update the settings and click **Save**.

Enable or disable

Toggle the switch in the **Status** column.

Delete

Click **Delete** in the **Actions** column, then click **OK** to confirm.

Copy

Click **Copy** in the **Actions** column to duplicate the policy.
