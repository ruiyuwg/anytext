PolarDB for MySQL clusters with subscription or pay-as-you-go billing can add serverless auto-scaling to dynamically adjust each node's PolarDB Capacity Unit (PCU) allocation based on workload. After enablement, each node scales within the range of **(defined specifications + minimum PCU)** to **(defined specifications + maximum PCU)**, retaining its base capacity while gaining elastic scaling.

## How it works

Serverless on a defined-spec cluster is an additive model: the system layers serverless scaling on top of existing provisioned resources.

For example, if a node has 4 cores of defined specifications and you set the PCU range to 2-8:

-   Minimum effective capacity: 4 cores + 2 PCU (approximately 2 cores and 4 GB memory) = approximately 6 cores
    
-   Maximum effective capacity: 4 cores + 8 PCU (approximately 8 cores and 16 GB memory) = approximately 12 cores
    

### Component architecture

![Architecture diagram](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6852675671/CAEQUBiBgICmuMr.2BkiIDFiYmM4MzRlZjA5ODRiZjFiOWQ2NDc3ODczODU0MGY04577196_20240806161152.160.svg)

**Component**

**Behavior**

**PolarProxy**

Uses a serverless architecture independent of compute nodes. Resources scale automatically in units of 0.5 PCU. No manual configuration is required.

**Compute nodes**

The primary node and read-only nodes adopt serverless scaling. Resources scale in units of 0.5 PCU based on workload. The system monitors PCU usage every second.

**Storage**

Uses pay-as-you-go billing. Capacity grows automatically as data increases. You pay only for the storage space used. Check **Database Storage Usage** on the **Basic Information** page. For details, see [View the database storage usage](/help/en/polardb/polardb-for-mysql/user-guide/view-the-database-storage-usage).

**Note**

When serverless is enabled for a cluster with defined specifications, the maximum number of connections is 100,000. Scalable IOPS is proportional to the [configured upper limit for a single serverless node](/help/en/polardb/polardb-for-mysql/user-guide/set-a-serverless-resource-scaling-policy). The [No-activity Suspension](/help/en/polardb/polardb-for-mysql/user-guide/set-automatic-manual-start-stop-serverless-cluster) feature is not supported.

## Prerequisites

Before you begin, make sure that your cluster meets the following requirements:

-   **Minor engine version:**
    
    -   MySQL 5.7: 5.7.1.0.29 or later
        
    -   MySQL 8.0.1: 8.0.1.1.30.1 or later
        
    -   MySQL 8.0.2: 8.0.2.2.19 or later
        
    
    **Note**
    
    MySQL 5.6 is not supported.
    
-   **Database proxy (Proxy) version:** 2.4.30 or later
    
-   **CPU architecture:** X86 only. Yitian ARM is not supported.
    

## Limitations

**Limitation**

**Details**

Single-node clusters without PolarProxy

Serverless cannot be enabled for an existing single-node cluster without PolarProxy. Add read-only nodes first. See [Add a node](/help/en/polardb/polardb-for-mysql/user-guide/add-or-remove-read-only-nodes). You can enable serverless for a new single-node cluster that meets the version requirements.

Manual storage scaling

[Manually scale up or scale down the storage capacity](/help/en/polardb/polardb-for-mysql/user-guide/manually-scale-up-the-storage-capacity-of-a-cluster-1) is not supported for Enterprise Edition clusters.

PCU scaling caps (dedicated specifications)

Not supported for nodes with more than 32 CPU cores.

PCU scaling caps (general-purpose specifications)

Not supported for nodes with more than 16 CPU cores.

Mutual exclusion with auto scaling

If serverless is enabled, [auto scaling for non-serverless clusters](/help/en/polardb/polardb-for-mysql/user-guide/automatic-configuration-changes-auto-scaling) cannot be enabled, and vice versa.

X-Engine support

Available for MySQL 8.0.1 revision 8.0.1.1.41 or later and MySQL 8.0.2 revision 8.0.2.2.23 or later.

Global Database Network (GDN)

Supported with restrictions: automatic start and stop cannot be enabled on all serverless clusters in a GDN. Each serverless cluster in the GDN must have at least one read-only node if the version is MySQL 8.0.1 (revision 8.0.1.1.42 or later) or MySQL 8.0.2 (revision 8.0.2.2.23 or later).

Read-only column store nodes

Can be added to the cluster and configured after serverless is enabled.

## Enable serverless

**Important**

The cluster may be migrated to an idle host due to resource shortage during enablement. Enable serverless during off-peak hours.

-   **Primary endpoint:** A disconnection of 5-10 seconds occurs during migration.
    
-   **Cluster endpoint:** No disconnection occurs. Use a cluster endpoint and make sure that failover with hot replica is active. See [Connecting to a PolarDB cluster](/help/en/polardb/polardb-for-mysql/user-guide/connection-connection-endpoints) and [Failover with hot replica](/help/en/polardb/polardb-for-mysql/user-guide/failover-with-hot-standby-in-seconds/).
    

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Clusters**.
    
3.  In the upper-left corner, select the region where the cluster is deployed.
    
4.  Click the cluster ID to open the **Basic Information** page.
    
5.  In the **Database Nodes** section, click **Enable Serverless**.
    
    ![Enable Serverless button](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2037559371/p739167.png)
    
6.  In the **Enable Serverless** dialog box, configure the following parameters, and then click **OK**.
    

### Single-node resource range

**Parameter**

**Description**

**Valid values**

**Maximum Resources for Single Node**

Maximum PCU that can be added to each node beyond its defined specifications.

0-16 PCU

**Minimum Resources for Single Node**

Minimum PCU that can be added to each node beyond its defined specifications. Must be less than or equal to the maximum.

0-16 PCU

**Note**

One PCU is approximately equal to 1 CPU core and 2 GB of memory. Resources scale in units of 0.5 PCU. The values do not include the defined specifications of the cluster. The effective range for each node is **(defined specifications + minimum)** to **(defined specifications + maximum)**.

**Example:** Set the minimum to 2 PCU and the maximum to 8 PCU. Each node starts with defined specifications plus 2 PCU (approximately 2 cores, 4 GB). Under load, each node can scale up to defined specifications plus 8 PCU (approximately 8 cores, 16 GB).

**Note**

Automatically added read-only nodes use a default scaling range of 1-32 PCU. This range does not need to be specified.

### Read-only node range

**Parameter**

**Description**

**Valid values**

**Maximum Read-only Nodes**

Maximum number of read-only nodes that can be automatically added.

0-15

**Minimum Read-only Nodes**

Minimum number of read-only nodes that can be automatically added. Cannot exceed the maximum.

0-15

**Note**

These values do not include the original read-only nodes already in the cluster.

**Example:** Set the minimum to 1 and the maximum to 2. One read-only node is added immediately. Under load, the system can add up to two read-only nodes on top of the original count.

### Read-only column store nodes

**Parameter**

**Description**

**Valid values**

**Read-only Column Storage Nodes**

Number of read-only column store nodes to add.

0-15

**Note**

This value does not include the original read-only column store nodes. This parameter appears only when the cluster already has read-only column store nodes.

**Important**

A cluster supports a maximum of 15 read-only nodes in total. Make sure the sum of original read-only nodes, automatically added read-only nodes, and read-only column store nodes does not exceed 15.

## Verify enablement

After you click **OK**, the serverless feature takes effect on the cluster.

1.  On the **Basic Information** page, confirm that the **Database Nodes** section displays **Serverless: Enabled** along with the **Serverless Configuration** and **Disable Serverless** buttons.
    
2.  Go to **Performance Monitoring** and check the **Serverless Monitoring Metrics** section. This section displays PCU, CPU usage, and memory usage charts for each node. The node specifications show the format **(defined specifications + PCU range)**, for example, "4 Cores, 8 GB of Local Memory + (2~8) PCU".
    

## Usage notes

-   **Maximum connections and IOPS** are proportional to the **Maximum Resources for Single Node** value.
    
-   **Dynamic parameter adjustment:** After enablement, the values of `innodb_buffer_pool_size`, `loose_thread_pool_size`, and `table_open_cache` are dynamically adjusted to match the current PCU allocation. Disabling serverless restores the original values.
    

## Billing

The total cost for a serverless-enabled cluster with defined specifications consists of two parts:

**Fee component**

**Description**

[Defined specifications fees](/help/en/polardb/polardb-for-mysql/enterprise-billing-item-overview)

Base cost for the provisioned cluster resources

[Serverless fees](/help/en/polardb/polardb-for-mysql/user-guide/billing-of-serverless-clusters)

Cost for the additional serverless PCU consumption

## Next steps

-   [Configure a scaling policy for serverless resources](/help/en/polardb/polardb-for-mysql/user-guide/set-a-serverless-resource-scaling-policy)
    
-   [Disable the serverless feature or modify configurations for a cluster with defined specifications](/help/en/polardb/polardb-for-mysql/user-guide/modify-and-disable-the-serverless-feature-of-a-fixed-specification-cluster)
    

## API reference

**API**

**Description**

[EnableDBClusterServerless](/help/en/polardb/api-polardb-2017-08-01-enabledbclusterserverless)

Enable serverless for a cluster with defined specifications

[DescribeDBClusterServerlessConf](/help/en/polardb/api-polardb-2017-08-01-describedbclusterserverlessconf)

Query the serverless configuration of a cluster
