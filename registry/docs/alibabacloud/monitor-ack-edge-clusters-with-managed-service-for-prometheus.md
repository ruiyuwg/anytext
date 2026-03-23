You can view predefined dashboards and performance metrics for ACK Edge clusters in Managed Service for Prometheus. This topic describes how to connect Managed Service for Prometheus to ACK Edge clusters.

## Prerequisites

-   An [ACK Edge cluster](/help/en/ack/ack-edge/user-guide/create-an-ack-edge-cluster-1) of version 1.18.8-aliyunedge.1 or later is created.
    
-   The ack-arms-prometheus component of version 1.1.4 or later is installed in the ACK Edge cluster. If the component is of an earlier version, [update ack-arms-prometheus](#1).
    
-   If your cluster runs a Kubernetes version earlier than 1.26, you must make sure that port forwarding is enabled for Node Exporter port 9100 and GPU Exporter port 9445 in the `kube-system/edge-tunnel-server-cfg` ConfigMap of the cluster. The following code provides the configuration details:
    
    ```
    http-proxy-ports: 9445
    https-proxy-ports: 9100
    ```
    

## Introduction to Managed Service for Prometheus

[Managed Service for Prometheus](/help/en/arms/prometheus-monitoring/product-overview/what-is-prometheus#concept-662038) is a fully managed monitoring service that is integrated with the open source Prometheus ecosystem. Managed Service for Prometheus monitors various components, provides multiple ready-to-use predefined dashboards, and offers a fully managed Prometheus service. Using Managed Service for Prometheus, you do not need to build a Prometheus monitoring system or manage underlying data storage, data display, or O&M.

ACK Edge clusters support the Basic Edition of Container Monitoring.

## View Grafana dashboards in Managed Service for Prometheus

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, choose **Operations** > **Prometheus Monitoring**.
    
    **Note**
    
    If this is your first time logging on, follow the on-screen instructions and click **Install** for the component. The console automatically installs the component and checks the dashboards. After the installation is complete, you are redirected to the Prometheus Monitoring details page.
    
    On the **Prometheus Monitoring** page, you can view monitoring data for nodes, applications, and GPUs in the cluster on predefined dashboards.
    

## Configure Prometheus alert rules

You can create alert rules for monitoring jobs to receive real-time notifications when an alert is triggered. You can receive notifications by phone, email, text message, DingTalk, WeCom, or webhook. This helps you proactively identify exceptions. When an alert rule is triggered, a notification is sent to a specified contact group. Before you create a contact group, you must create contacts. When you create a contact, you can specify a mobile number and an email address. You can also specify the recipient group in a notification policy to make sure that alerts are managed promptly.

-   For more information about how to create a DingTalk robot, see [DingTalk Robot](/help/en/arms/alarm-operation-center/dingtalk-chatbots#concept-42953-zh).
    
-   For more information about how to create a WeCom robot, see [WeCom Robot](/help/en/arms/alarm-operation-center/wecom-chatbots#concept-42953-zh).
    

### Step 1: Create A Contact

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home). In the left-side navigation pane, choose **Alert Management** > **Notification Objects**.
    
2.  On the **Contacts** tab, click **Create Contact**.
    
3.  In the **Create Contact** dialog box, configure the parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    Name
    
    The name of the contact.
    
    Phone Number
    
    After you specify the mobile phone number of a contact, the contact can be notified by phone call and text message.
    
    **Note**
    
    You can specify only verified mobile phone numbers in a notification policy. For more information about how to verify a mobile phone number, see [Verify a mobile number](/help/en/arms/alarm-operation-center/contacts#section-bmz-kvv-rwl).
    
    Email
    
    After you specify the email address of a contact, the contact can be notified by email.
    
    **Important**
    
    You can create a maximum of 100 contacts.
    

### Step 2: Create A Prometheus Alert Rule

#### **Create a Prometheus alert rule based on a static threshold**

The static threshold check type provides preset metrics. You can select a metric and quickly create an alert rule for the metric.

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the left-side navigation pane, choose **Managed Service for Prometheus** > **Prometheus Alert Rules**.
    
3.  On the **Prometheus Alert Rules** page, click **Create Prometheus Alert Rule**.
    
4.  On the **Create Prometheus Alert Rule** page, set the following alert parameters and click **Save**.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Alert Rule Name
    
    Enter the name of the alert rule.
    
    Production cluster - container CPU utilization alert
    
    Check Type
    
    Select Static Threshold.
    
    Static Threshold
    
    Prometheus Instance
    
    Select the Prometheus instance.
    
    Production cluster
    
    Alert Contact Group
    
    Select an alert contact group.
    
    The alert contact groups that are supported by a Prometheus instance vary based on the type of the Prometheus instance.
    
    Kubernetes load
    
    Alert Metric
    
    Select a metric. Different alert contact groups provide different metrics.
    
    Container CPU Usage
    
    Alert Condition
    
    Specify the condition based on which alert events are generated.
    
    If the CPU utilization of the container is `greater` than 80%, an alert event is generated.
    
    Filter Conditions
    
    Specify the applicable scope of the alert rule. If a resource meets both the filter condition and the alert condition, an alert event is generated.
    
    The following types of filter conditions are supported:
    
    -   **Traverse**: The alert rule applies to all resources in the current Prometheus instance. By default, Traverse is selected.
        
    -   **Equal**: If you select this filter condition, you must enter a resource name. The alert rule applies only to the specified resource. You cannot specify multiple resources at the same time.
        
    -   **Not Equal**: If you select this filter condition, you must enter a resource name. The alert rule applies to resources other than the specified resource. You cannot specify multiple resources at the same time.
        
    -   **Regex match**: If you select this filter condition, you must enter a regular expression to match resource names. The alert rule that you create by using the template applies to all resources that match the regular expression.
        
    -   **Regex not match**: If you select this filter condition, you must enter a regular expression to match resource names. The alert rule applies to resources that do not match the regular expression.
        
    
    **Note**
    
    -   After you set the filter conditions, the **Data Preview** section appears.
        
    -   Keep the filter condition within 300 characters.
        
    
    Traverse
    
    Data Preview
    
    The **Data Preview** displays the PromQL statement that corresponds to the alert condition. The section also displays the values of the specified metric in a time series graph.
    
    By default, only the real-time values of one resource are displayed. You can specify filter conditions to view the metric values of different resources in different time ranges.
    
    **Note**
    
    -   The threshold in the time series graph is represented by a red line. The part of the curve that meets the alert condition is displayed in dark red, and the part of the curve that does not meet the alert condition is displayed in blue.
        
    -   You can move the pointer over the curve to view resource details at a specific point in time.
        
    -   You can also select a time period on the time series curve to view the time series curve of the selected time period.
        
    
    None
    
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
    
    Alert Notification
    
    -   **Simple Mode**: You need to set the **Notification Objects**, **Notification Period**, and **Whether to Resend Notifications**.
        
    -   **Standard Mode**:
        
        -   Do Not Specify Notification Policy: If you select this option, you can create a notification policy on the **Notification Policy** page after you create the alert rule. On the Notification Policy page, you can specify match rules and match conditions. For example, you can specify an alert rule name as the match condition. When the alert rule is triggered, an alert event is generated and an alert notification is sent to the contacts or contact groups that are specified in the notification policy. For more information, see [Create and manage a notification policy](/help/en/arms/alarm-operation-center/create-and-manage-notification-policies#concept-rr3-55h-hhb).
            
        -   You can also select a notification policy from the drop-down list. ARMS automatically adds a match rule to the selected notification policy and specifies the ID of the alert rule as the match condition. The name of the alert rule is displayed on the Notification Policy page. This way, the alert events that are generated based on the alert rule can be matched by the selected notification policy.
            
        
        **Important**
        
        After you select a notification policy, the alert events that are generated based on the alert rule can be matched by the notification policy and alerts can be generated. The alert events may also be matched by other notification policies that use fuzzy match, and alerts may be generated. One or more alert events can be matched by one or more notification policies.
        
    
    Do Not Specify Notification Policy
    
    **Advanced Settings**
    
    Alert Check Cycle
    
    An alert rule is triggered every N minutes to check whether the alert conditions are met. Default value: 1. Minimum value: 1.
    
    1
    
    Check When Data Is Complete
    
    -   Yes
        
    -   No
        
    
    Yes
    
    Tags
    
    Specify tags for the alert rule. The specified tags can be used to match notification policies.
    
    None
    
    Annotations
    
    Specify annotations for the alert rule.
    
    None
    

#### **Create a Prometheus alert rule using a custom PromQL statement**

To monitor metrics that are not preset for static thresholds, you can use the custom PromQL check type to create an alert rule.

On the **Create Prometheus Alert Rule** page, set the following alert parameters and click **Save**.

**Parameter**

**Description**

**Example**

Alert Rule Name

Enter the name of the alert rule.

Pod CPU utilization exceeds 8%

Check Type

Select Custom PromQL.

Custom PromQL

Prometheus Instance

Select the Prometheus instance.

None

Reference Alert Contact Group

Select an alert contact group.

The alert contact groups that are supported by a Prometheus instance vary based on the type of the Prometheus instance.

Kubernetes load

Reference Metrics

Optional. The Reference Metrics drop-down list displays common metrics. After you select a metric, the PromQL statement of the metric is displayed in the Custom PromQL Statements field. You can modify the statement based on your business requirements.

The values in the Reference Metrics drop-down list vary based on the type of the Prometheus instance.

Pod disk usage alert

Custom PromQL Statements

Enter a PromQL statement.

Namespace: {{$labels.namespace}}/Pod: {{$labels.pod\_name}} / The utilization of the {{$labels.device}} disk exceeds 90%. Current value: {{ printf "%.2f" $value }}%max(container\_fs\_usage\_bytes{pod!="", namespace!="arms-prom",namespace!="monitoring"}) by (pod\_name, namespace, device)/max(container\_fs\_limit\_bytes{pod!=""}) by (pod\_name,namespace, device) \* 100 > 90

Data Preview

The **Data Preview** displays the PromQL statement that corresponds to the alert condition. The section also displays the values of the specified metric in a time series graph.

By default, only the real-time values of one resource are displayed. You can specify filter conditions to view the metric values of different resources in different time ranges.

**Note**

-   You can move the pointer over the curve to view resource details at a specific point in time.
    
-   You can also select a time period on the time series curve to view the time series curve of the selected time period.
    

None

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

Alert Notification

-   **Simple Mode**: You need to set the **Notification Objects**, **Notification Period**, and **Whether to Resend Notifications**.
    
-   **Standard Mode**:
    
    -   Do Not Specify Notification Policy: If you select this option, you can create a notification policy on the **Notification Policy** page after you create the alert rule. On the Notification Policy page, you can specify match rules and match conditions. For example, you can specify an alert rule name as the match condition. When the alert rule is triggered, an alert event is generated and an alert notification is sent to the contacts or contact groups that are specified in the notification policy. For more information, see [Create and manage a notification policy](/help/en/arms/alarm-operation-center/create-and-manage-notification-policies#concept-rr3-55h-hhb).
        
    -   You can also select a notification policy from the drop-down list. ARMS automatically adds a match rule to the selected notification policy and specifies the ID of the alert rule as the match condition. The name of the alert rule is displayed on the Notification Policy page. This way, the alert events that are generated based on the alert rule can be matched by the selected notification policy.
        
    
    **Important**
    
    After you select a notification policy, the alert events that are generated based on the alert rule can be matched by the notification policy and alerts can be generated. The alert events may also be matched by other notification policies that use fuzzy match, and alerts may be generated. One or more alert events can be matched by one or more notification policies.
    

Do Not Specify Notification Policy

Advanced Settings

Alert Check Cycle

An alert rule is triggered every N minutes to check whether the alert conditions are met. Default value: 1. Minimum value: 1.

1

Check When Data Is Complete

-   Yes
    
-   No
    

Yes

Tags

Specify tags for the alert rule. The specified tags can be used to match notification policies.

None

Annotations

Specify annotations for the alert rule.

None

## FAQ

### How Do I Check The Version Of The Ack-arms-prometheus Component?

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  On the **Add-ons** page, click the **Logs and Monitoring** tab and find the **ack-arms-prometheus** component.
    
    The version number is displayed on the component card. If a new version is available, click **Upgrade** to update the component.
    
    **Note**
    
    The **Upgrade** button is displayed only if the component is not the latest version.
    

### How is monitoring data collected from ACK Edge clusters?

In edge computing scenarios, edge nodes are deployed in offline data centers. Therefore, virtual private clouds (VPCs) in the cloud and edge nodes are on different network planes. The Prometheus Agent that is deployed in the cloud cannot access the endpoints of the Node Exporter and GPU Exporter to collect monitoring metrics. Starting from ack-arms-prometheus 1.1.4, with the help of the built-in [cloud-native O&M communication component Tunnel](/help/en/ack/ack-edge/user-guide/cloud-edge-tunneling#concept-2035665) in ACK Edge clusters, ack-arms-prometheus can automatically establish a link to collect monitoring data between the cloud and the edge.

### Why Cannot GPU Monitoring Be Deployed?

If a GPU node has taints, the deployment of GPU monitoring may fail. You can perform the following steps to view the taints of the GPU node.

1.  Run the following command to view the taints of the target GPU node.
    
    If the GPU node has custom taints, you can find the taint-related entries. This topic uses a taint whose `key` is `test-key`, `value` is `test-value`, and `effect` is `NoSchedule` as an example:
    
    ```
    kubectl describe node cn-beijing.47.100.***.***
    ```
    
    Expected output:
    
    ```
    Taints:test-key=test-value:NoSchedule
    ```
    
2.  Handle the taints of the GPU node in one of the following ways:
    
    -   Run the following command to delete the taints from the GPU node.
        
        ```
        kubectl taint node cn-beijing.47.100.***.*** test-key=test-value:NoSchedule-
        ```
        
    -   Declare a toleration for the taints of the GPU node to allow pods to be scheduled to the node with the taints.
        
        ```
        # 1. Run the following command to edit ack-prometheus-gpu-exporter.
        kubectl edit daemonset -n arms-prom ack-prometheus-gpu-exporter
        
        # 2. Add the following fields to the YAML file to declare the toleration for the taints.
        # Other fields are omitted.
        # The tolerations field is added above the containers field and at the same level as the containers field.
        tolerations:
        - key: "test-key"
          operator: "Equal"
          value: "test-value"
          effect: "NoSchedule"
        containers:
         # Other fields are omitted.
        ```
        

### How to completely delete ARMS-Prometheus configurations if a manual deletion causes reinstallation to fail

If you delete only the namespace of Managed Service for Prometheus, residual configurations are retained, which can cause reinstallation to fail. You can perform the following operations to completely delete the residual ARMS-Prometheus configurations.

-   Delete the arms-prom namespace.
    
    ```
    kubectl delete namespace arms-prom
    ```
    
-   Delete the ClusterRoles.
    
    ```
    kubectl delete ClusterRole arms-kube-state-metrics
    kubectl delete ClusterRole arms-node-exporter
    kubectl delete ClusterRole arms-prom-ack-arms-prometheus-role
    kubectl delete ClusterRole arms-prometheus-oper3
    kubectl delete ClusterRole arms-prometheus-ack-arms-prometheus-role
    kubectl delete ClusterRole arms-pilot-prom-k8s
    kubectl delete ClusterRole gpu-prometheus-exporter
    kubectl delete ClusterRole o11y:addon-controller:role
    kubectl delete ClusterRole arms-aliyunserviceroleforarms-clusterrole
    ```
    
-   Delete the ClusterRoleBindings.
    
    ```
    kubectl delete ClusterRoleBinding arms-node-exporter
    kubectl delete ClusterRoleBinding arms-prom-ack-arms-prometheus-role-binding
    kubectl delete ClusterRoleBinding arms-prometheus-oper-bind2
    kubectl delete ClusterRoleBinding arms-kube-state-metrics
    kubectl delete ClusterRoleBinding arms-pilot-prom-k8s
    kubectl delete ClusterRoleBinding arms-prometheus-ack-arms-prometheus-role-binding
    kubectl delete ClusterRoleBinding gpu-prometheus-exporter
    kubectl delete ClusterRoleBinding o11y:addon-controller:rolebinding
    kubectl delete ClusterRoleBinding arms-kube-state-metrics-agent
    kubectl delete ClusterRoleBinding arms-node-exporter-agent
    kubectl delete ClusterRoleBinding arms-aliyunserviceroleforarms-clusterrolebinding
    ```
    
-   Delete the Roles and RoleBindings.
    
    ```
    kubectl delete Role arms-pilot-prom-spec-ns-k8s
    kubectl delete Role arms-pilot-prom-spec-ns-k8s -n kube-system
    kubectl delete RoleBinding arms-pilot-prom-spec-ns-k8s
    kubectl delete RoleBinding arms-pilot-prom-spec-ns-k8s -n kube-system
    ```
    

After you manually delete the ARMS-Prometheus resources, go to the [Container Service console](https://cs.console.alibabacloud.com), choose **Operations > Add-ons**, and reinstall the **ack-arms-prometheus** component.
