When cluster issues go undetected, they can escalate into outages, resource exhaustion, or security incidents. ACK alert management monitors your cluster for anomalous events, resource utilization thresholds, and core component health, and notifies your team through configurable channels. You customize thresholds and notification targets through an `AckAlertRule` CustomResourceDefinition (CRD).

## How it works

ACK alert management collects data from three sources, evaluates rules against that data, and generates alerts when conditions are met:

**Data source**

**What it monitors**

**Billing**

Simple Log Service (SLS)

Cluster events, including pod failures, node issues, scaling operations, and audit trails. See [Default alert rule templates](#c3d61bc56e0h0) for the complete list.

[Pay-by-feature](/help/en/sls/billable-items)

Managed Service for Prometheus

Core component health, including API server, etcd, kube-scheduler, CoreDNS, and Ingress. See [Default alert rule templates](#c3d61bc56e0h0) for the complete list.

Free of charge

CloudMonitor

Resource metrics, including CPU, memory, disk, bandwidth, and SLB utilization. See [Default alert rule templates](#c3d61bc56e0h0) for the complete list.

[Pay-as-you-go](/help/en/cms/cloudmonitor-1-0/product-overview/pay-as-you-go-1)

Phone call and text message notifications incur additional fees.

When you enable alert management, ACK creates an `AckAlertRule` CRD in the `kube-system` namespace with default alert rule templates. An alert fires when a rule condition is met, and notifications are sent to the configured contact groups.

## Prerequisites

Before you enable alert management, activate the required services for each data source:

-   **SLS event monitoring** -- [Enable event monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/event-monitoring). Event monitoring is enabled by default when you enable alert management.
    
-   **Prometheus monitoring** -- [Configure Prometheus monitoring for your cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster).
    
-   **CloudMonitor** -- [Enable the Cloud Monitor feature for your cluster](/help/en/cms/cloudmonitor-1-0/user-guide/enable-cloud-monitoring-for-container-service-kubernetes-clusters).
    

## Enable alert management for ACK managed clusters

### Enable for an existing cluster

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster and click its name. In the left-side pane, choose **Operations** > **Alerts**.
    
3.  On the **Alerts** page, follow the on-screen instructions to install or upgrade the components.
    
4.  After the installation or upgrade is complete, go to the **Alerts** page to configure alert rules and contacts. For details on each tab, see [Manage alerts in the console](#h2-890db628).
    

### Enable during cluster creation

1.  On the **Component Configurations** page of the cluster creation wizard, select **Use Default Alert Rule Template** for **Alerts**, then select a contact group from **Select Alert Contact Group**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7862182471/p923864.png)
    
2.  Complete the remaining cluster creation steps. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/).
    

After cluster creation, the system enables the default alert rules and sends notifications to the default alert contact group. To update contacts later, see [Modify alert contacts or alert contact groups](/help/en/cms/cloudmonitor-1-0/user-guide/modify-an-alert-contact-or-alert-contact-group).

## Enable alert management for ACK dedicated clusters

For ACK dedicated clusters, grant permissions to the worker RAM role before you enable alert rules.

### Step 1: Grant permissions to the worker RAM role

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster and click its name. In the left-side pane, click **Cluster Information**.
    
3.  In the **Cluster Resources** section, copy the name of the **Worker RAM Role** and click the link to open the Resource Access Management (RAM) console.
    
4.  Create a custom policy with the following permissions. For more information, see [Create a custom policy on the JSON tab](/help/en/ram/create-a-custom-policy).
    
    > This policy grants broad permissions for simplicity. In a production environment, follow the principle of least privilege and grant only the required permissions.
    
    ```
       {
           "Action": [
               "log:*",
               "arms:*",
               "cms:*",
               "cs:UpdateContactGroup"
           ],
           "Resource": [
               "*"
           ],
           "Effect": "Allow"
       }
    ```
    
5.  Attach the custom policy to the worker RAM role. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
    

### Step 2: Verify permissions

1.  In the left-side pane of the cluster management page, choose **Workloads** > **Deployments**.
    
2.  Set **Namespace** to `kube-system` and click the name of the `alicloud-monitor-controller` application.
    
3.  Click the **Logs** tab. The pod logs indicate that the authorization was successful.
    

### Step 3: Enable default alert rules

1.  In the left-side pane, choose **Operations** > **Alerts**.
    
2.  On the **Alerts** page, configure alert rules and contacts. For details on each tab, see [Manage alerts in the console](#h2-890db628).
    

## Manage alerts in the console

The **Alerts** page has four tabs:

### Alert Rules

-   **Status**: Toggle alert rule sets on or off.
    
-   **Modify Contacts**: Assign a contact group for alert notifications.
    

> Only contact groups can be selected as notification targets. To notify a single person, create a group containing only that contact. Create contacts and contact groups before you configure alert rules.

### Alert History

View the most recent 100 alert records from the last 24 hours.

-   Click the link in the **Alert Rule** column to view the detailed rule configuration in the corresponding monitoring system.
    
-   Click **Details** to locate the resource where the anomaly occurred.
    
-   Click **Intelligent Analytics** for AI-assisted root cause analysis and troubleshooting guidance.
    

### Alert Contacts

Create, edit, or delete alert contacts. Supported notification methods:

**Method**

**Details**

Phone / text message

Set a mobile number. Only verified mobile numbers can receive phone call notifications. For verification steps, see [Verify a mobile number](/help/en/prometheus/user-guide/create-and-manage-contacts#section-bmz-kvv-rwl).

Email

Set an email address for the contact.

Chat robots

[DingTalk Robot](/help/en/prometheus/user-guide/obtain-the-webhook-url-of-a-dingtalk-chatbot#concept-106247-zh), [WeCom Robot](/help/en/prometheus/user-guide/create-a-wecom-chatbot), and [Lark Robot](/help/en/prometheus/user-guide/create-a-lark-chatbot).

> For DingTalk robots, add the security keywords: `Alerting`, `Dispatch`.

> Before you configure email and robot notifications, verify them in the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/newOverview) under **Alert Service** > **Alert Contacts**.

### Alert Contact Groups

Create, edit, or delete contact groups. Contact groups are the only selectable notification targets when you **Modify Contacts** for an alert rule set.

> If no contact group exists, the console creates a default group based on your Alibaba Cloud account information.

## Customize alert rules

After you enable alert management, an `AckAlertRule` CRD resource named `default` is created in the `kube-system` namespace. Modify this CRD to customize alert thresholds, enable or disable individual rules, and set contact groups.

### Console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster and click its name. In the left-side pane, choose **Operations** > **Alerts**.
    
3.  On the **Alert Rules** tab, click **Configure Alert Rule** in the upper-right corner. Click **YAML** in the **Actions** column of the target rule to view the `AckAlertRule` configuration.
    
4.  Modify the YAML as needed. See [AckAlertRule YAML reference](#1d15555a4ajel) for the full specification.
    

### kubectl

Run the following command to edit the `AckAlertRule` resource directly:

```
kubectl edit ackalertrules default -n kube-system
```

Modify the YAML and save. See [AckAlertRule YAML reference](#1d15555a4ajel) for the full specification.

**AckAlertRule YAML reference**

The following example shows the CRD structure with two rule groups -- one event-based and one metric-based:

```
apiVersion: alert.alibabacloud.com/v1beta1
kind: AckAlertRule
metadata:
  name: default
spec:
  groups:
    # Event-based alert rule group
    - name: pod-exceptions
      rules:
        - name: pod-oom
          type: event                              # Rule type: event, metric-cms, or metric-prometheus
          expression: sls.app.ack.pod.oom          # Maps to SLS_Event_ID in the default templates
          enable: enable                           # Valid values: enable, disable

        - name: pod-failed
          type: event
          expression: sls.app.ack.pod.failed
          enable: enable

    # Metric-based alert rule group (CloudMonitor)
    - name: res-exceptions
      rules:
        - name: node_cpu_util_high
          type: metric-cms                         # Rule type: event, metric-cms, or metric-prometheus
          expression: cms.host.cpu.utilization      # Maps to the CloudMonitor metric
          contactGroups:                            # Contact group (managed by ACK console, shared across clusters)
          enable: enable
          thresholds:
            - key: CMS_ESCALATIONS_CRITICAL_Threshold
              unit: percent
              value: '85'                          # CPU utilization threshold (default: 85%)
            - key: CMS_ESCALATIONS_CRITICAL_Times
              value: '3'                           # Alert triggers after 3 consecutive breaches
            - key: CMS_RULE_SILENCE_SEC
              value: '900'                         # 900-second silence period between repeat alerts
```

In this example, an alert fires when node CPU utilization exceeds 85% for three consecutive checks and the previous alert was triggered more than 900 seconds ago.

### Threshold parameters

Threshold parameters apply to `metric-cms` type rules:

**Parameter**

**Required**

**Description**

**Default**

`CMS_ESCALATIONS_CRITICAL_Threshold`

Yes

The alert threshold. If omitted, the rule fails to sync and is disabled. Set `unit` to `percent`, `count`, or `qps`, and set `value` to the threshold number.

Depends on the template

`CMS_ESCALATIONS_CRITICAL_Times`

No

Number of consecutive threshold breaches required to trigger the alert.

3

`CMS_RULE_SILENCE_SEC`

No

Silence period in seconds after an alert fires. Subsequent alerts for the same rule are suppressed during this period to prevent alert fatigue.

900

## Default alert rule templates

Alert rules are synced from SLS, Managed Service for Prometheus, and CloudMonitor. On the **Alerts** page, click **Advanced Settings** in the **Actions** column to view each rule's configuration.

The following sections list all default rules grouped by category.

**Error events**

**Alert**

**Description**

**Source**

**Rule type**

**CRD rule name**

**Event ID**

Error event

Triggered by all Error-level anomalous events in the cluster.

SLS

event

error-event

sls.app.ack.error

**Warning events**

**Alert**

**Description**

**Source**

**Rule type**

**CRD rule name**

**Event ID**

Warn event

Triggered by key Warn-level anomalous events, excluding some ignorable events.

SLS

event

warn-event

sls.app.ack.warn

**Core component anomalies (ACK managed clusters)**

**Alert**

**Description**

**Source**

**Rule type**

**CRD rule name**

**Event ID**

API server unavailable

The API server becomes unavailable, which may limit cluster management features.

Prometheus

metric-prometheus

apiserver-unhealthy

prom.apiserver.notHealthy.down

etcd unavailable

etcd unavailability affects the status of the entire cluster.

Prometheus

metric-prometheus

etcd-unhealthy

prom.etcd.notHealthy.down

kube-scheduler unavailable

The scheduler is unavailable. New pods may fail to start.

Prometheus

metric-prometheus

scheduler-unhealthy

prom.scheduler.notHealthy.down

kube-controller-manager (KCM) unavailable

Control loop anomalies affect automatic repair and resource adjustment.

Prometheus

metric-prometheus

kcm-unhealthy

prom.kcm.notHealthy.down

cloud-controller-manager unavailable

Lifecycle management of cloud service components may be affected.

Prometheus

metric-prometheus

ccm-unhealthy

prom.ccm.notHealthy.down

CoreDNS request drops to zero

CoreDNS anomalies affect service discovery and domain name resolution.

Prometheus

metric-prometheus

coredns-unhealthy-requestdown

prom.coredns.notHealthy.requestdown

CoreDNS panic error

A panic error occurs in CoreDNS. Analyze the logs immediately.

Prometheus

metric-prometheus

coredns-unhealthy-panic

prom.coredns.notHealthy.panic

High Ingress error rate

High HTTPS error rate from the Ingress controller may affect service accessibility.

Prometheus

metric-prometheus

ingress-err-request

prom.ingress.request.errorRateHigh

Ingress SSL certificate expiring

An expired SSL certificate causes HTTPS requests to fail. Renew in advance.

Prometheus

metric-prometheus

ingress-ssl-expire

prom.ingress.ssl.expire

Pending pods > 1,000

Too many pods in Pending state. May indicate insufficient resources or scheduling issues.

Prometheus

metric-prometheus

pod-pending-accumulate

prom.pod.pending.accumulate

High mutating admission webhook RT

Slow mutating admission webhook affects resource creation and modification.

Prometheus

metric-prometheus

apiserver-admit-rt-high

prom.apiserver.mutating.webhook.rt.high

High validating admission webhook RT

Slow validating admission webhook may delay configuration changes.

Prometheus

metric-prometheus

apiserver-validate-rt-high

prom.apiserver.validation.webhook.rt.high

Control plane OOM

An out-of-memory (OOM) error occurs in a core cluster component. Investigate immediately.

SLS

event

ack-controlplane-oom

sls.app.ack.controlplane.pod.oom

**Node pool operations**

**Alert**

**Description**

**Source**

**Rule type**

**CRD rule name**

**Event ID**

Node auto-healing fails

Identify the cause and fix the issue to maintain high availability.

SLS

event

node-repair\_failed

sls.app.ack.rc.node\_repair\_failed

Node CVE fix fails

Cluster security may be affected. Assess and fix urgently.

SLS

event

nodepool-cve-fix-failed

sls.app.ack.rc.node\_vulnerability\_fix\_failed

Node pool CVE fix succeeds

A CVE fix was applied successfully, reducing security risks.

SLS

event

nodepool-cve-fix-succ

sls.app.ack.rc.node\_vulnerability\_fix\_succeed

Node pool CVE auto-fix skipped

Auto-fix was skipped, possibly due to compatibility issues. Check the security policy.

SLS

event

nodepool-cve-fix-skip

sls.app.ack.rc.node\_vulnerability\_fix\_skipped

kubelet config update fails

The kubelet configuration fails to update, which may affect node performance.

SLS

event

nodepool-kubelet-cfg-failed

sls.app.ack.rc.node\_kubelet\_config\_failed

kubelet config update succeeds

Confirm the new kubelet configuration takes effect.

SLS

event

nodepool-kubelet-config-succ

sls.app.ack.rc.node\_kubelet\_config\_succeed

kubelet upgrade fails

May affect cluster stability. Confirm the upgrade process and configuration.

SLS

event

nodepool-k-c-upgrade-failed

sls.app.ack.rc.node\_kubelet\_config\_upgrade\_failed

kubelet upgrade succeeds

Verify the kubelet version meets cluster and application requirements.

SLS

event

nodepool-k-c-upgrade-succ

sls.app.ack.rc.kubelet\_upgrade\_succeed

Runtime upgrade succeeds

The container runtime in the node pool was upgraded successfully.

SLS

event

nodepool-runtime-upgrade-succ

sls.app.ack.rc.runtime\_upgrade\_succeed

Runtime upgrade fails

The container runtime in the node pool failed to upgrade.

SLS

event

nodepool-runtime-upgrade-fail

sls.app.ack.rc.runtime\_upgrade\_failed

OS image upgrade succeeds

The operating system image in the node pool was upgraded successfully.

SLS

event

nodepool-os-upgrade-succ

sls.app.ack.rc.os\_image\_upgrade\_succeed

OS image upgrade fails

The operating system image in the node pool failed to upgrade.

SLS

event

nodepool-os-upgrade-failed

sls.app.ack.rc.os\_image\_upgrade\_failed

Lingjun pool config change succeeds

The Node Lingjun pool configuration was changed successfully.

SLS

event

nodepool-lingjun-config-succ

sls.app.ack.rc.lingjun\_configuration\_apply\_succeed

Lingjun pool config change fails

The Node Lingjun pool configuration failed to change.

SLS

event

nodepool-lingjun-cfg-failed

sls.app.ack.rc.lingjun\_configuration\_apply\_failed

**Node anomalies**

**Alert**

**Description**

**Source**

**Rule type**

**CRD rule name**

**Event ID**

Docker process anomaly

The Dockerd or containerd runtime on a cluster node is abnormal.

SLS

event

docker-hang

sls.app.ack.docker.hang

Eviction event

An eviction event occurs in the cluster.

SLS

event

eviction-event

sls.app.ack.eviction

GPU XID error

An anomalous GPU XID event occurs in the cluster.

SLS

event

gpu-xid-error

sls.app.ack.gpu.xid\_error

Node goes offline

A node in the cluster goes offline.

SLS

event

node-down

sls.app.ack.node.down

Node restarts

A node in the cluster restarts.

SLS

event

node-restart

sls.app.ack.node.restart

NTP service anomaly

The time synchronization service on a cluster node is abnormal.

SLS

event

node-ntp-down

sls.app.ack.ntp.down

PLEG anomaly

The Pod Lifecycle Event Generator (PLEG) on a cluster node is abnormal.

SLS

event

node-pleg-error

sls.app.ack.node.pleg\_error

Process anomaly

The number of processes on a cluster node is abnormal.

SLS

event

ps-hang

sls.app.ack.ps.hang

Too many file handles

The number of file handles on the node is too large.

SLS

event

node-fd-pressure

sls.app.ack.node.fd\_pressure

Too many processes

The number of processes on the cluster node is too large.

SLS

event

node-pid-pressure

sls.app.ack.node.pid\_pressure

Failed to delete a node

The cluster failed to delete a node.

SLS

event

node-del-err

sls.app.ack.ccm.del\_node\_failed

Failed to add a node

The cluster failed to add a node.

SLS

event

node-add-err

sls.app.ack.ccm.add\_node\_failed

Managed node pool command execution fails

Command execution failed in a managed node pool.

SLS

event

nlc-run-cmd-err

sls.app.ack.nlc.run\_command\_fail

Empty task command in managed node pool

No specific command is provided for the task in the managed node pool.

SLS

event

nlc-empty-cmd

sls.app.ack.nlc.empty\_task\_cmd

Unimplemented task mode in managed node pool

An unimplemented task mode occurs in the managed node pool.

SLS

event

nlc-url-m-unimp

sls.app.ack.nlc.url\_mode\_unimpl

Unknown repair operation in managed node pool

An unknown repair operation occurs in the managed node pool.

SLS

event

nlc-opt-no-found

sls.app.ack.nlc.op\_not\_found

Error destroying managed node pool node

An error occurred while destroying a node in the managed node pool.

SLS

event

nlc-des-node-err

sls.app.ack.nlc.destroy\_node\_fail

Failed to drain managed node pool node

Anomalous draining event in a managed node pool.

SLS

event

nlc-drain-node-err

sls.app.ack.nlc.drain\_node\_fail

Restarted ECS instance not reaching desired state

A restarted ECS instance in a managed node pool does not reach the desired state.

SLS

event

nlc-restart-ecs-wait

sls.app.ack.nlc.restart\_ecs\_wait\_fail

Failed to restart ECS instance in managed node pool

An ECS instance in a managed node pool failed to restart.

SLS

event

nlc-restart-ecs-err

sls.app.ack.nlc.restart\_ecs\_fail

Failed to reset ECS instance in managed node pool

An ECS instance in a managed node pool failed to reset.

SLS

event

nlc-reset-ecs-err

sls.app.ack.nlc.reset\_ecs\_fail

Self-healing task fails in managed node pool

A self-healing task failed in a managed node pool.

SLS

event

nlc-sel-repair-err

sls.app.ack.nlc.repair\_fail

**Resource utilization**

**Alert**

**Default threshold**

**Description**

**Source**

**Rule type**

**CRD rule name**

**Event ID**

Node CPU utilization high

\>= 85%

Remaining resources below 15% may exceed the container engine's CPU reservation and cause CPU throttling. See [Node resource reservation policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-reservation-policy).

CloudMonitor

metric-cms

node\_cpu\_util\_high

cms.host.cpu.utilization

Node memory utilization high

\>= 85%

Remaining resources below 15% will exceed the container engine's memory reservation, triggering kubelet forced eviction. See [Node resource reservation policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-reservation-policy).

CloudMonitor

metric-cms

node\_mem\_util\_high

cms.host.memory.utilization

Node disk usage high

\>= 85%

Disk usage on a node instance exceeds the threshold.

CloudMonitor

metric-cms

node\_disk\_util\_high

cms.host.disk.utilization

Node outbound bandwidth high

\>= 85%

Outbound Internet bandwidth of a node instance exceeds the threshold.

CloudMonitor

metric-cms

node\_public\_net\_util\_high

cms.host.public.network.utilization

Node inode usage high

\>= 85%

Inode usage on a node instance exceeds the threshold.

CloudMonitor

metric-cms

node\_fs\_inode\_util\_high

cms.host.fs.inode.utilization

SLB Layer 7 QPS high

\>= 85%

QPS of an SLB instance (API server or Ingress-associated) exceeds the threshold.

CloudMonitor

metric-cms

slb\_qps\_util\_high

cms.slb.qps.utilization

SLB outbound bandwidth high

\>= 85%

Outbound bandwidth of an SLB instance (API server or Ingress-associated) exceeds the threshold.

CloudMonitor

metric-cms

slb\_traff\_tx\_util\_high

cms.slb.traffic.tx.utilization

SLB max connections high

\>= 85%

Maximum connection usage of an SLB instance (API server or Ingress-associated) exceeds the threshold.

CloudMonitor

metric-cms

slb\_max\_con\_util\_high

cms.slb.max.connection.utilization

SLB dropped connections

\>= 1/sec

Dropped connections per second for an SLB listener (API server or Ingress-associated) continuously exceeds the threshold.

CloudMonitor

metric-cms

slb\_drop\_con\_high

cms.slb.drop.connection

Insufficient disk space

\--

Insufficient disk space on a node.

SLS

event

node-disk-pressure

sls.app.ack.node.disk\_pressure

Insufficient scheduling resources

\--

No available scheduling resources in the cluster.

SLS

event

node-res-insufficient

sls.app.ack.resource.insufficient

Insufficient IP resources

\--

Insufficient IP resources in the cluster.

SLS

event

node-ip-pressure

sls.app.ack.ip.not\_enough

Disk usage exceeds threshold

\--

Cluster disk usage exceeds the threshold. Check disk usage.

SLS

event

disk\_space\_press

sls.app.ack.csi.no\_enough\_disk\_space

**Control plane operations**

**Alert**

**Description**

**Source**

**Rule type**

**CRD rule name**

**Event ID**

Cluster task notification

Records control plane plans and changes.

SLS

event

ack-system-event-info

sls.app.ack.system\_events.task.info

Cluster task failure

A cluster operation failed. Investigate promptly.

SLS

event

ack-system-event-error

sls.app.ack.system\_events.task.error

**Auto scaling events**

**Alert**

**Description**

**Source**

**Rule type**

**CRD rule name**

**Event ID**

Scale-out

Nodes are scaled out to handle increased load.

SLS

event

autoscaler-scaleup

sls.app.ack.autoscaler.scaleup\_group

Scale-in

Nodes are scaled in as load decreases.

SLS

event

autoscaler-scaledown

sls.app.ack.autoscaler.scaledown

Scale-out timeout

May indicate insufficient resources or an improper policy.

SLS

event

autoscaler-scaleup-timeout

sls.app.ack.autoscaler.scaleup\_timeout

Scale-in of empty nodes

Inactive nodes are cleaned up to optimize resource usage.

SLS

event

autoscaler-scaledown-empty

sls.app.ack.autoscaler.scaledown\_empty

Scale-out fails

Analyze the cause and adjust the resource policy.

SLS

event

autoscaler-up-group-failed

sls.app.ack.autoscaler.scaleup\_group\_failed

Unhealthy cluster (auto scaling)

Unhealthy cluster status due to auto scaling. Handle promptly.

SLS

event

autoscaler-cluster-unhealthy

sls.app.ack.autoscaler.cluster\_unhealthy

Deletion of nodes that fail to start

Invalid nodes are cleaned up to reclaim resources.

SLS

event

autoscaler-del-started

sls.app.ack.autoscaler.delete\_started\_timeout

Deletion of unregistered nodes

Redundant nodes are processed to optimize cluster resources.

SLS

event

autoscaler-del-unregistered

sls.app.ack.autoscaler.delete\_unregistered

Scale-in fails

May lead to resource waste and uneven load distribution.

SLS

event

autoscaler-scale-down-failed

sls.app.ack.autoscaler.scaledown\_failed

Node deleted before drain

When auto scaling deletes a node, pods fail to be evicted or migrated.

SLS

event

autoscaler-instance-expired

sls.app.ack.autoscaler.instance\_expired

**Workload anomalies**

**Alert**

**Description**

**Source**

**Rule type**

**CRD rule name**

**Event ID**

Job fails to run

A Job fails during execution.

Prometheus

metric-prometheus

job-failed

prom.job.failed

Deployment replica anomaly

Insufficient available replicas in a Deployment may cause full or partial service outage.

Prometheus

metric-prometheus

deployment-rep-err

prom.deployment.replicaError

DaemonSet status anomaly

Some DaemonSet replicas are in an abnormal state (failing to start or crashing).

Prometheus

metric-prometheus

daemonset-status-err

prom.daemonset.scheduledError

DaemonSet scheduling anomaly

A DaemonSet fails to correctly schedule some or all nodes, possibly due to resource constraints.

Prometheus

metric-prometheus

daemonset-misscheduled

prom.daemonset.misscheduled

**Pod anomalies**

**Alert**

**Description**

**Source**

**Rule type**

**CRD rule name**

**Event ID**

Pod OOM

An out-of-memory (OOM) error occurs in a pod or a process within it.

SLS

event

pod-oom

sls.app.ack.pod.oom

Pod fails to start

A pod in the cluster fails to start.

SLS

event

pod-failed

sls.app.ack.pod.failed

Unhealthy pod status

A pod is in an unhealthy state (Pending, Failed, or Unknown).

Prometheus

metric-prometheus

pod-status-err

prom.pod.status.notHealthy

Pod CrashLoopBackOff

A pod frequently fails to start and enters the CrashLoopBackOff state.

Prometheus

metric-prometheus

pod-crashloop

prom.pod.status.crashLooping

**Storage anomalies**

**Alert**

**Description**

**Source**

**Rule type**

**CRD rule name**

**Event ID**

Disk capacity < 20 GiB

Disks smaller than 20 GiB cannot be attached. Check the disk capacity.

SLS

event

csi\_invalid\_size

sls.app.ack.csi.invalid\_disk\_size

Subscription disk not supported

Subscription disks cannot be used as container volumes. Check the billing method.

SLS

event

csi\_not\_portable

sls.app.ack.csi.disk\_not\_portable

Failed to unmount (device busy)

The resource has not been fully released, or an active process is accessing the mount target.

SLS

event

csi\_device\_busy

sls.app.ack.csi.deivce\_busy

No available disks

No available disks can be attached to the cluster storage.

SLS

event

csi\_no\_ava\_disk

sls.app.ack.csi.no\_ava\_disk

Disk IOHang

An IOHang anomaly occurs in the cluster.

SLS

event

csi\_disk\_iohang

sls.app.ack.csi.disk\_iohang

Slow I/O on PVC-bound disk

A slow I/O anomaly occurs on the PVC bound to the cluster disk.

SLS

event

csi\_latency\_high

sls.app.ack.csi.latency\_too\_high

PersistentVolume (PV) failed

An anomaly occurs on a PV in the cluster.

Prometheus

metric-prometheus

pv-failed

prom.pv.failed

**Network anomalies**

**Alert**

**Description**

**Source**

**Rule type**

**CRD rule name**

**Event ID**

Multiple VPC route tables

May complicate network configuration or cause route conflicts.

SLS

event

ccm-vpc-multi-route-err

sls.app.ack.ccm.describe\_route\_tables\_failed

No available SLB instances

The cluster cannot create an SLB instance.

SLS

event

slb-no-ava

sls.app.ack.ccm.no\_ava\_slb

SLB sync failure

The cluster failed to sync the created SLB instance.

SLS

event

slb-sync-err

sls.app.ack.ccm.sync\_slb\_failed

SLB deletion failure

The cluster failed to delete the SLB instance.

SLS

event

slb-del-err

sls.app.ack.ccm.del\_slb\_failed

Route creation failure

The cluster failed to create a VPC network route.

SLS

event

route-create-err

sls.app.ack.ccm.create\_route\_failed

Route sync failure

The cluster failed to sync a VPC network route.

SLS

event

route-sync-err

sls.app.ack.ccm.sync\_route\_failed

Invalid Terway resource

An invalid Terway network resource in the cluster.

SLS

event

terway-invalid-res

sls.app.ack.terway.invalid\_resource

Terway IP allocation failure

Terway failed to assign an IP address.

SLS

event

terway-alloc-ip-err

sls.app.ack.terway.alloc\_ip\_fail

Ingress bandwidth config parse failure

A configuration parsing error for the cluster Ingress network.

SLS

event

terway-parse-err

sls.app.ack.terway.parse\_fail

Terway resource allocation failure

Terway network resources failed to be allocated.

SLS

event

terway-alloc-res-err

sls.app.ack.terway.allocate\_failure

Terway resource reclaim failure

Terway network resources failed to be reclaimed.

SLS

event

terway-dispose-err

sls.app.ack.terway.dispose\_failure

Terway virtual mode change

A change in the virtual mode of the cluster Terway network.

SLS

event

terway-virt-mod-err

sls.app.ack.terway.virtual\_mode\_change

Terway pod IP config check

Terway triggered a pod IP configuration check.

SLS

event

terway-ip-check

sls.app.ack.terway.config\_check

Ingress reload failure

The cluster Ingress configuration failed to reload. Check if the Ingress configuration is correct.

SLS

event

ingress-reload-err

sls.app.ack.ingress.err\_reload\_nginx

**Audit operations**

**Alert**

**Description**

**Source**

**Rule type**

**CRD rule name**

**Event ID**

Container exec / command execution

A user logs on to a container or runs a command in the cluster. Track for security auditing.

SLS

event

audit-at-command

sls.app.k8s.audit.at.command

Node scheduling status change

Node scheduling status changed, affecting service efficiency and resource load.

SLS

event

audit-cordon-switch

sls.app.k8s.audit.at.cordon.uncordon

Resource deletion

A resource was deleted. Audit the operation to prevent risks.

SLS

event

audit-resource-delete

sls.app.k8s.audit.at.delete

Node drain / eviction

Reflects node load pressure or policy execution. Confirm necessity and impact.

SLS

event

audit-drain-eviction

sls.app.k8s.audit.at.drain.eviction

Internet logon

Logging on from the Internet may pose security risks. Verify logon and access permissions.

SLS

event

audit-internet-login

sls.app.k8s.audit.at.internet.login

Node label update

Label updates affect node resource management. Verify correctness.

SLS

event

audit-node-label-update

sls.app.k8s.audit.at.label

Node taint update

Taint changes affect scheduling policies and toleration mechanisms.

SLS

event

audit-node-taint-update

sls.app.k8s.audit.at.taint

Resource modification

Real-time resource modifications may indicate policy adjustments. Verify alignment with business objectives.

SLS

event

audit-resource-update

sls.app.k8s.audit.at.update

**Security anomalies**

**Alert**

**Description**

**Source**

**Rule type**

**CRD rule name**

**Event ID**

High-risk configuration found

A cluster security inspection has found a high-risk configuration.

SLS

event

si-c-a-risk

sls.app.ack.si.config\_audit\_high\_risk

**Cluster inspection anomalies**

**Alert**

**Description**

**Source**

**Rule type**

**CRD rule name**

**Event ID**

Inspection finds anomaly

The automatic inspection captured a potential anomaly. Analyze the specific issue.

SLS

event

cis-sched-failed

sls.app.ack.cis.schedule\_task\_failed

## Troubleshooting

### Pod eviction triggered by disk pressure

**Alert message:**

```
(combined from similar events): Failed to garbage collect required amount of images.
Attempted to free XXXX bytes, but only found 0 bytes eligible to free
```

**Symptoms:** The pod status is Evicted. The node reports disk pressure (`The node had condition: [DiskPressure].`).

**Cause:** When node disk usage reaches the eviction threshold (default: 85%), the kubelet performs pressure-based eviction and garbage collection to reclaim unused image files. Run `df -h` on the target node to check disk usage.

**Solution:**

1.  Log on to the target node (containerd runtime) and remove unused container images:
    
    ```
       crictl rmi --prune
    ```
    
2.  Clean up logs or resize the node disk:
    
    -   Create a [snapshot backup](/help/en/ecs/user-guide/create-a-snapshot) of the data disk or system disk, then delete files or folders that are no longer needed. For more information, see [Resolve full disk space issues on Linux instances](/help/en/ecs/user-guide/resolve-the-issue-of-insufficient-disk-space-on-a-linux-instance).
        
    -   [Scale out the system disk or data disk](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-the-system-disk-or-data-disk-of-a-node) of the target node to increase storage capacity.
        
3.  Adjust thresholds:
    
    -   Adjust the kubelet image garbage collection threshold to reduce pod evictions. See [Customize kubelet configurations for a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-kubelet-configurations-of-a-node-pool).
        
    -   Modify the alert threshold in the `node_disk_util_high` alert rule in the YAML configuration. See [Customize alert rules](#d693db701dcgx).
        

**Best practices:**

-   For nodes that frequently encounter this issue, assess the actual storage needs and plan resource requests and node disk capacity accordingly.
    
-   Regularly monitor storage usage with the [Node Storage Dashboard](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-csi-plugin-to-monitor-storage-resources-at-the-node-side#cf590a568etph) to identify and address potential issues early.
    

### Pod OOMKilling

**Alert message:**

```
pod was OOM killed. node:xxx pod:xxx namespace:xxx uuid:xxx
```

**Symptoms:** The pod status is abnormal, and the event details contain `PodOOMKilling`.

**Cause:** OOM events can occur at two levels:

-   **Container cgroup-level OOM**: The actual memory usage of a pod exceeds its memory limits. The Kubernetes cgroup forcibly terminates the pod.
    
-   **Node-level OOM**: Too many pods without resource limits (requests/limits) are running on a node, or non-Kubernetes processes consume excessive memory.
    

**Diagnosis:** Log on to the target node and run:

```
dmesg -T | grep -i "memory"
```

If the output contains `out_of_memory`, an OOM event occurred. If the log also contains `Memory cgroup`, it is a container cgroup-level OOM. Otherwise, it is a node-level OOM.

**Solution:**

-   **Container cgroup-level OOM:**
    
    -   Increase the pod's memory limits. Keep actual usage below 80% of the specified limits. See [Manage pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-pods) and [Upgrade or downgrade node resources](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-the-configurations-of-a-worker-node).
        
    -   Enable [resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling) to get recommended configurations for container requests and limits.
        
-   **Node-level OOM:**
    
    -   Scale out the memory resources of the node or distribute workloads across more nodes. See [Upgrade or downgrade node resources](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-the-configurations-of-a-worker-node) and [Schedule applications to specific nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/schedule-pods-to-specific-nodes).
        
    -   Identify pods with high memory usage on the node and set reasonable memory limits.
        

For more information, see [Causes and solutions for OOM Killer](/help/en/alinux/support/causes-of-and-solutions-to-the-issue-of-oom-killer-being-triggered#section-v6c-lau-22i).

### Pod CrashLoopBackOff

When a process in a pod exits unexpectedly, ACK tries to restart the pod. If the pod fails to reach the desired state after multiple restarts, its status changes to CrashLoopBackOff.

**Diagnosis:**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster and click its name. In the left-side pane, choose **Workloads** > **Pods**.
    
3.  Find the abnormal pod and click **View Details** in the **Actions** column.
    
4.  Check the **Events** section for abnormal event descriptions.
    
5.  Click the **Logs** tab to view process-level errors.
    
    > If the pod has been restarted, select **Show the log of the last container exit** to view the logs of the previous container.
    
    > The console displays a maximum of 500 recent log entries. To view more historical logs, [set up a log persistence solution](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-text-logs-from-ack-clusters-using-daemonset-deployed-logtail-agents) for unified collection and storage.
