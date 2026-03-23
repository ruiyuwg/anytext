PolarDB for MySQL provides multiple auto scaling solutions to help you handle traffic spikes and ensure cluster stability.

The following solutions are applicable only to subscription or pay-as-you-go clusters with defined specifications. The resources of compute nodes in a serverless cluster can be automatically scaled based on your business workloads.

**Method**

**Cluster requirements**

**Description**

[Enable the serverless feature for a cluster with defined specifications](/help/en/polardb/polardb-for-mysql/user-guide/enable-the-serverless-function-for-fixed-specification-clusters)

PolarDB for MySQL 5.7 or 8.0

Serverless is a dynamic, elastic scaling capability of PolarDB clusters. Each node in a PolarDB cluster can elastically scale up within seconds to handle sudden workload surges without affecting ongoing operations and automatically scale down during periods of low business loads to optimize cost efficiency.

Auto scaling of cluster specifications

[Auto scaling for clusters that do not support serverless](/help/en/polardb/polardb-for-mysql/user-guide/automatic-configuration-changes-auto-scaling)

PolarDB for MySQL 5.6

With Database Autonomy Service (DAS), a cluster is scaled based on average CPU utilization and read/write traffic. Also, auto scale-back is supported to change the cluster specifications back during off-peak hours.

[Auto scaling by using DAS](/help/en/polardb/polardb-for-mysql/user-guide/configure-the-auto-scaling-feature-of-das)

-   Product edition: Enterprise Edition
    
-   Edition: Cluster Edition
