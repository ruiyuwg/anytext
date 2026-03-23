Kubernetes clusters use etcd as a persistent storage device to store cluster state and metadata. As a distributed key-value store, etcd ensures strong consistency and high availability (HA) for cluster data. This topic describes the metrics for the etcd component, explains how to use the dashboard, and provides an analysis of common metric anomalies.

## Before you begin

### **Access the dashboard**

For more information, see [View the monitoring dashboard for control plane components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/view-control-plane-component-dashboards-in-ack-pro-clusters).

### **Metric checklist**

Metrics are a way for a component to expose its status and parameters. The following table lists the metrics for the etcd component.

**Metric**

**Type**

**Description**

cpu\_utilization\_core

Gauge

CPU usage. Unit: cores.

etcd\_server\_has\_leader

Gauge

etcd uses the Raft consensus algorithm. In Raft, one member in the cluster is elected as the Leader (primary node), and the other members become Followers (secondary nodes). The Leader periodically sends heartbeats to all members to maintain cluster stability.

This metric indicates whether a leader exists among the etcd members.

-   1: A leader exists.
    
-   0: No leader exists.
    

etcd\_server\_is\_leader

Gauge

Indicates whether the etcd member is the leader.

-   1: Yes.
    
-   0: No.
    

etcd\_server\_leader\_changes\_seen\_total

Counter

The number of times the leader has changed for an etcd member over a period of time.

etcd\_mvcc\_db\_total\_size\_in\_bytes

Gauge

The total size of the etcd member database (DB).

etcd\_mvcc\_db\_total\_size\_in\_use\_in\_bytes

Gauge

The actual size in use of the etcd member DB.

etcd\_disk\_backend\_commit\_duration\_seconds\_bucket

Histogram

The latency of backend commits in etcd. This is the time it takes for data changes to be written to the storage backend and successfully committed.

The bucket thresholds are `[0.001, 0.002, 0.004, 0.008, 0.016, 0.032, 0.064, 0.128, 0.256, 0.512, 1.024, 2.048, 4.096, 8.192]`.

etcd\_debugging\_mvcc\_keys\_total

Gauge

The total number of keys stored in etcd.

etcd\_server\_proposals\_committed\_total

Gauge

etcd uses the Raft consensus algorithm. In Raft, any action that attempts to change the system state is submitted as a proposal.

This metric indicates the number of proposals that have been successfully committed to the Raft log in etcd.

etcd\_server\_proposals\_applied\_total

Gauge

The number of proposals that have been successfully applied or executed.

etcd\_server\_proposals\_pending

Gauge

The number of proposals that are pending.

etcd\_server\_proposals\_failed\_total

Counter

The number of proposals that have failed.

memory\_utilization\_byte

Gauge

Memory usage. Unit: bytes.

**Note**

The following resource utilization metrics are deprecated. Remove any alerts or monitoring that depend on these metrics.

-   cpu\_utilization\_ratio: CPU utilization.
    
-   memory\_utilization\_ratio: Memory usage.
    

## Dashboard guide

The dashboard is built from component metrics and related Prometheus Query Language (PromQL) queries. The following sections describe the observability display and features of the dashboard.

### **Observability Display**

![etcd](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5638181271/p474534.png)

### **Feature Analysis**

**Name**

**PromQL**

**Description**

**Etcd Health Status**

-   etcd\_server\_has\_leader
    
-   etcd\_server\_is\_leader == 1
    

-   Indicates whether the etcd members are alive. The normal value is 3.
    
-   Indicates whether an etcd member is the leader. In normal cases, one member must be the leader.
    

**Leader Changes In The Last Day**

changes(etcd\_server\_leader\_changes\_seen\_total{job="etcd"}\[1d\])

The number of times the leader has changed in the etcd cluster over the last day.

**Memory Usage**

memory\_utilization\_byte{container="etcd"}

Memory usage. Unit: bytes.

**CPU Usage**

cpu\_utilization\_core{container="etcd"}\*1000

CPU usage. Unit: millicores.

**Disk Size**

etcd\_mvcc\_db\_total\_size\_in\_bytes

The total size of the etcd backend DB.

etcd\_mvcc\_db\_total\_size\_in\_use\_in\_bytes

The actual size in use of the etcd backend DB.

**Total Key-value Pairs**

etcd\_debugging\_mvcc\_keys\_total

The total number of key-value (KV) pairs in the etcd cluster.

**Backend Commit Latency**

histogram\_quantile(0.99, sum(rate(etcd\_disk\_backend\_commit\_duration\_seconds\_bucket{job="etcd"}\[5m\])) by (instance, le))

The backend commit latency. This is the time required for a proposal to be persistently stored in the etcd database.

**Raft Proposal Status**

rate(etcd\_server\_proposals\_failed\_total{job="etcd"}\[1m\])

The rate of failed Raft proposal submissions per minute.

etcd\_server\_proposals\_pending{job="etcd"}

The total number of pending Raft proposals.

etcd\_server\_proposals\_committed\_total{job="etcd"} - etcd\_server\_proposals\_applied\_total{job="etcd"}

The difference between the number of committed and applied Raft proposals. This indicates the number of proposals that have been committed but not yet executed.

## Common metric anomalies

### **Etcd Health Status**

**Normal case**

**Abnormal case**

**Description of anomaly**

All three etcd members have a leader, and one of them is the leader. This means `sum(etcd_server_has_leader)=3`, and only one member has `etcd_server_is_leader == 1`.

A single member is abnormal.

The abnormal member has `etcd_server_has_leader!=1`. This does not affect the overall service of the etcd cluster.

More than one member is abnormal.

Multiple members have `etcd_server_has_leader!=1`. If more than one member is abnormal, the etcd cluster cannot provide services.

Also, check if any member has `etcd_server_is_leader == 1`. If not, etcd has no leader and cannot provide services.

### **Backend Commit Latency**

**Normal case**

**Abnormal case**

**Description of anomaly**

The metric is in the range of a few milliseconds to tens of milliseconds.

The latency persists at hundreds of milliseconds or even seconds.

There is an anomaly in disk I/O.

### **Raft Proposal Anomalies**

**Normal case**

**Abnormal case**

**Description of anomaly**

The rate of failed Raft proposals is 0.

The number of failed Raft proposals is greater than 0.

Some Raft proposals failed to be submitted. If this number is high, further investigation is required.

The total number of pending Raft proposals is 0.

The total number of pending Raft proposals is greater than 0.

There is a backlog of submitted Raft proposals. This is usually because the apply speed is slow. You can analyze this in conjunction with the backend commit latency.

The difference between the number of committed and applied Raft proposals is 0.

The difference between the number of committed and applied proposals is greater than 0.

There are too many client requests, which puts high pressure on etcd.

If this value exceeds 5000, etcd rejects subsequent requests and returns `too many requests` until the backlog of proposals is processed.

## **References**

For more information about the metrics, dashboard guides, and common metric anomalies for other control plane components, see [kube-apiserver component metrics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-kube-apiserver), [kube-scheduler component metrics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-kube-scheduler), [Component metrics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-kube-controller-manager), and [cloud-controller-manager component metrics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-cloud-controller-manager).
