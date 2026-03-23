**Important**

Starting from 00:00:00 (UTC+8) on April 14, 2025, Cloud Monitor no longer provides the Kubernetes container monitoring feature for new users. For more information, see [Announcement on the discontinuation of the Kubernetes container monitoring feature of Cloud Monitor](/help/en/cms/cloudmonitor-1-0/product-overview/announcement-on-the-discontinuation-of-kubernetes-container-monitoring-feature-of-cloudmonitor). We recommend that you use the container monitoring capability provided by Managed Service for Prometheus. For more information, see [Monitor an ACK cluster](/help/en/prometheus/container-observable).

This topic describes the metrics for clusters, nodes, and pods in Container Service for Kubernetes (ACK).

**Note**

-   The **metrics-server** component of ACK clusters must be upgraded to V0.3.8.5 or later. For more information, see [Update the metrics-server component before you update the Kubernetes version to 1.12](/help/en/ack/install-the-metrics-server-component#task-1664343).
    
-   For ACK clusters that are created after 10:00:00 on April 25, 2024, you must manually enable the monitoring feature of CloudMonitor for the **metrics-server** component before you can use CloudMonitor to monitor these clusters. For more information, see [Enable the monitoring feature of CloudMonitor for an ACK cluster](/help/en/cms/cloudmonitor-1-0/user-guide/enable-cloud-monitoring-for-container-service-kubernetes-clusters).
    

When you call an API operation provided by CloudMonitor, set the **Namespace** and **Period** parameters.

-   Set the **Namespace** parameter to **acs\_k8s**.
    
-   Set the **Period** parameter to an integral multiple of 60. Default value: 60. Unit: seconds.
    

The following table describes the valid values of the **MetricName** and **Dimensions** parameters.

**Metric**

**Unit**

**MetricName**

**Dimensions**

**Statistics**

cluster.cpu.limit

Core

cluster.cpu.limit

userId and cluster

Value

cluster.cpu.request

Core

cluster.cpu.request

userId and cluster

Value

cluster.cpu.usage\_rate

Core

cluster.cpu.usage\_rate

userId and cluster

Value

cluster.cpu.utilization

%

cluster.cpu.utilization

userId and cluster

Value

cluster.memory.limit

Byte

cluster.memory.limit

userId and cluster

Value

cluster.memory.request

Byte

cluster.memory.request

userId and cluster

Value

cluster.memory.utilization

%

cluster.memory.utilization

userId and cluster

Value

node.cpu.allocatable

Core

node.cpu.allocatable

userId, cluster, and node

Value

node.cpu.capacity

Core

node.cpu.capacity

userId, cluster, and node

Value

node.cpu.limit

Core

node.cpu.limit

userId, cluster, and node

Value

node.cpu.oversale\_rate(usage/request)

%

node.cpu.oversale\_rate

userId, cluster, and node

Value

node.cpu.request

Core

node.cpu.request

userId, cluster, and node

Value

node.cpu.usage\_rate

Core

node.cpu.usage\_rate

userId, cluster, and node

Value

node.cpu.utilization

%

node.cpu.utilization

userId, cluster, and node

Value

node.filesystem.available

Byte

node.filesystem.available

userId, cluster, and node

Value

node.filesystem.inodes

Count

node.filesystem.inodes

userId, cluster, and node

Value

node.filesystem.limit

Count

node.filesystem.limit

userId, cluster, and node

Value

node.filesystem.usage

Count

node.filesystem.usage

userId, cluster, and node

Value

node.memory.allocatable

Byte

node.memory.allocatable

userId, cluster, and node

Value

node.memory.cache

Count

node.memory.cache

userId, cluster, and node

Value

node.memory.limit

Byte

node.memory.limit

userId, cluster, and node

Value

node.memory.oversale\_rate(usage/request)

%

node.memory.oversale\_rate

userId, cluster, and node

Value

node.memory.request

Count

node.memory.request

userId, cluster, and node

Value

node.memory.usage

Count

node.memory.usage

userId, cluster, and node

Value

node.memory.utilization

%

node.memory.utilization

userId, cluster, and node

Value

node.memory.working\_set

Byte

node.memory.working\_set

userId, cluster, and node

Value

node.network.rx\_errors

Count

node.network.rx\_errors

userId, cluster, and node

Value

node.network.rx\_errors\_rate

%

node.network.rx\_errors\_rate

userId, cluster, and node

Value

node.network.rx\_rate

Byte/s

node.network.rx\_rate

userId, cluster, and node

Value

node.network.tx\_errors\_rate

%

node.network.tx\_errors\_rate

userId, cluster, and node

Value

node.network.tx\_rate

Byte/s

node.network.tx\_rate

userId, cluster, and node

Value

ns.cpu.limit

Core

ns.cpu.limit

userId, cluster, and namespace

Sum

pod.cpu.limit

Core

pod.cpu.limit

userId, cluster, namespace, type, app, and pod

Value

pod.cpu.oversale\_rate(usage/request)

%

pod.cpu.oversale\_rate

userId, cluster, namespace, type, app, and pod

Value

pod.cpu.request

Core

pod.cpu.request

userId, cluster, namespace, type, app, and pod

Value

pod.cpu.usage\_rate

Core

pod.cpu.usage\_rate

userId, cluster, namespace, type, app, and pod

Value

pod.cpu.utilization(usage/limit)

%

pod.cpu.utilization

userId, cluster, namespace, type, app, and pod

Value

pod.memory.cache

Byte

pod.memory.cache

userId, cluster, namespace, type, app, and pod

Value

pod.memory.limit

Byte

pod.memory.limit

userId, cluster, namespace, type, app, and pod

Value

pod.memory.oversale\_rate(usage/request)

%

pod.memory.oversale\_rate

userId, cluster, namespace, type, app, and pod

Value

pod.memory.request

Byte

pod.memory.request

userId, cluster, namespace, type, app, and pod

Value

pod.memory.rss

Byte

pod.memory.rss

userId, cluster, namespace, type, app, and pod

Value

pod.memory.utilization(working\_set/limit)

%

pod.memory.utilization

userId, cluster, namespace, type, app, and pod

Value

pod.memory.working\_set

Byte

pod.memory.working\_set

userId, cluster, namespace, type, app, and pod

Value

pod.network.rx\_errors\_rate

Byte/s

pod.network.rx\_errors\_rate

userId, cluster, namespace, type, app, and pod

Value

pod.network.rx\_rate

Byte/s

pod.network.rx\_rate

userId, cluster, namespace, type, app, and pod

Value

pod.network.tx\_errors\_rate

Byte/s

pod.network.tx\_errors\_rate

userId, cluster, namespace, type, app, and pod

Value

pod.network.tx\_rate

Byte/s

pod.network.tx\_rate

userId, cluster, namespace, type, app, and pod

Value

deployment.filesystem.available

Byte

deployment.filesystem.available

userId, cluster, namespace, type, and app

Sum

deployment.filesystem.limit

Byte

deployment.filesystem.limit

userId, cluster, namespace, type, and app

Sum

pod.filesystem.available

Byte

pod.filesystem.available

userId, cluster, namespace, type, app, and pod

Value

pod.filesystem.limit

Byte

pod.filesystem.limit

userId, cluster, namespace, type, app, and pod

Value

cluster.filesystem.available

Byte

cluster.filesystem.available

userId and cluster

Value

cluster.filesystem.limit

Byte

cluster.filesystem.limit

userId and cluster

Value

deployment.cpu.limit

Core

deployment.cpu.limit

userId, cluster, namespace, type, and app

Sum

deployment.cpu.request

Core

deployment.cpu.request

userId, cluster, namespace, type, and app

Sum

deployment.cpu.usage\_rate

Core

deployment.cpu.usage\_rate

userId, cluster, namespace, type, and app

Sum

deployment.memory.limit

Byte

deployment.memory.limit

userId, cluster, namespace, type, and app

Sum

deployment.memory.request

Byte

deployment.memory.request

userId, cluster, namespace, type, and app

Sum

deployment.memory.working\_set

Byte

deployment.memory.working\_set

userId, cluster, namespace, type, and app

Sum

deployment.network.rx\_errors\_rate

Byte/s

deployment.network.rx\_errors\_rate

userId, cluster, namespace, type, and app

Sum

deployment.network.rx\_rate

Byte/s

deployment.network.rx\_rate

userId, cluster, namespace, type, and app

Sum

deployment.network.tx\_errors\_rate

Byte/s

deployment.network.tx\_errors\_rate

userId, cluster, namespace, type, and app

Sum

deployment.network.tx\_rate

Byte/s

deployment.network.tx\_rate

userId, cluster, namespace, type, and app

Sum

node.cpu.reservation

Core

node.cpu.reservation

userId, cluster, and node

Value

node.memory.capacity

Byte

node.memory.capacity

userId, cluster, and node

Value

node.memory.major\_page\_faults

Count

node.memory.major\_page\_faults

userId, cluster, and node

Value

node.memory.major\_page\_faults\_rate

%

node.memory.major\_page\_faults\_rate

userId, cluster, and node

Value

node.memory.page\_faults

Count

node.memory.page\_faults

userId, cluster, and node

Value

node.memory.page\_faults\_rate

%

node.memory.page\_faults\_rate

userId, cluster, and node

Value

node.memory.reservation

Byte

node.memory.reservation

userId, cluster, and node

Value

node.memory.rss

Byte

node.memory.rss

userId, cluster, and node

Value

ns.cpu.oversale\_rate

%

ns.cpu.oversale\_rate

userId, cluster, and namespace

Value

ns.cpu.request

Core

ns.cpu.request

userId, cluster, and namespace

Sum

ns.cpu.usage\_rate

Core

ns.cpu.usage\_rate

userId, cluster, and namespace

Sum

ns.memory.limit

Byte

ns.memory.limit

userId, cluster, and namespace

Sum

ns.memory.oversale\_rate

%

ns.memory.oversale\_rate

userId, cluster, and namespace

Value

ns.memory.request

Byte

ns.memory.request

userId, cluster, and namespace

Sum

ns.memory.working\_set

Byte

ns.memory.working\_set

userId, cluster, and namespace

Sum
