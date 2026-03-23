This topic describes the global consistency feature.

## **Overview**

PolarDB for PostgreSQL (Compatible with Oracle) clusters provide the global consistency feature at the database kernel level. This feature ensures strongly consistent results for read requests sent to read-only nodes in your cluster.

## Prerequisites

Your PolarDB for PostgreSQL (Compatible with Oracle) cluster runs the following database engine version:

PolarDB for PostgreSQL (Compatible with Oracle) 2.0 whose revision version 2.0.14.22.0 or later

**Note**

You can execute the following statement to view the database engine revision version of your PolarDB for PostgreSQL (Compatible with Oracle) cluster:

```
SHOW polar_version;
```

For information about how to upgrade the database engine revision version of your cluster, see [Upgrade the version](/help/en/polardb/polardb-for-oracle/version-management-2#section-dsd-05e-ro1).

## **Background information**

In the original one-writer, multi-reader architecture of PolarDB, the read-only nodes provide session consistency. Although the physical replication and shared storage technologies effectively reduce the replication delay of read-only nodes, they cannot ensure that the requests sent to read-only nodes always read the most recent data written to the primary node. This delay can cause business logic inconsistency in latency-sensitive industries such as finance and gaming.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2131861471/CAEQORiBgMCe4NHwqRkiIDBlMmVjYmY1MGZjNTQ0MzE5NzUzNzc0MzVmOTQ3YmI34557324_20240730164133.216.svg)

In most cases, business applications are broken down into smaller, independent services by using a microservices framework, as shown in the preceding figure. After Service A writes data, it generates a write success message and sends the message to Service B by using a message queue. After Service A updates the value of the col column to 20, session consistency ensures that Service A can immediately read the updated value by using the same session even if the read request is routed to a read-only node. However, when Service B receives the update message from Service A and reads the value of the col column from a read-only node, Service B may still retrieve the previous value, which is 10. This discrepancy may lead to data consistency issues for upstream services. To ensure read-after-write consistency, read requests from services can be routed only to the primary node. As a result, read-only nodes are underutilized.

## **Technical solution**

PolarDB for PostgreSQL (Compatible with Oracle) provides strong consistency reading capabilities at the database kernel level for read-only nodes. This ensures that all read requests to read-only nodes always read the most recent data written to the primary node. This ensures cluster-wide strong consistency for read operations. After you enable the global consistency feature, each read-write transaction committed on the primary node is assigned a Commit Sequence Number (CSN). CSNs indicates the order in which transactions are committed and replace the active transaction list in native PostgreSQL. The primary node records the CSNs to the Write Ahead Log (WAL). This allows read-only nodes to build a complete view of transaction status by replaying WAL records.

The following section describes the SQL execution process that ensures strong consistency reading capabilities for read-only nodes:

1.  The client sends a query request to a read-only node.
    
2.  The read-only node obtains the current largest CSN from the primary node over the network.
    
3.  The read-only node builds a consistent read view by using the largest CSN obtained from the primary node and waits until its transaction state to be synchronized up to the point corresponding to the maximum CSN.
    
4.  The read-only node determines the visibility of data relevant to the query based on the consistent read view and returns the query result to the client.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2131861471/CAEQORiBgICs4tHwqRkiIGNkMmU5Yjk1NWVmNjRmMGU4MjE0YzMxM2ExNTgyYzQ24557324_20240730170441.221.svg)

## **Procedure**

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Clusters**.
    
3.  In the upper-left corner, select the region in which the cluster is deployed.
    
4.  Find the cluster and click its ID.
    
5.  In the left-side navigation pane, choose **Settings and Management** > **Parameters**. Set the `polar_csn_enable` and `polar_global_csn_enable` parameters to `ON` to enable the CSN feature for transactions.
    
    **Note**
    
    You must restart the cluster to allow the modified parameter settings to take effect. Before you modify the parameters, make business arrangements and proceed with caution. For more information about how to configure cluster parameters in the PolarDB console, see [Configure cluster parameters](/help/en/polardb/polardb-for-postgresql/configure-cluster-parameters).
    
6.  In the **Database Connections** section of the **Basic Information** page of the cluster, click **Configure** next to **Cluster Endpoint**. You can also move the pointer over the Cluster Endpoint card and click **Modify** in the message that appears.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2013559371/p888972.png)
    
7.  In the Modify Endpoint Settings dialog box, set the Consistency Level parameter to **Global Consistency (Strong)** and configure the parameters. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Global Consistency Timeout**
    
    The maximum amount of time that the system waits for read-only nodes to synchronize with the most recent data from the primary node. Value range: 1 to 1000000. Unit: milliseconds. Default value: 100.
    
    **Global Consistency Timeout Policy**
    
    The policy to be applied when read-only nodes fail to synchronize with most recent data from the primary node within the specified timeout period. Valid values:
    
    -   **Send Requests to Primary Node (Default)**
        
    -   **Return Error Messages Due to Timeout**
        
    -   **Automatic Downgrade to Inconsistent Read Due to Timeout**
        
    

## **FAQ**

### What do I do if I do not want to implement global consistency for specific queries after I enable the global consistency feature?

By default, after you enable the global consistency feature for read-only nodes, the feature takes effect on all new queries. If you do not want to implement global consistency for specific queries, you can execute the following statement to disable the feature for the session:

```
SET polar_scc_enable = off;
```

### How do I configure the Global Consistency Timeout parameter?

Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/) and go to the Basic Information page of your cluster. Find the cluster endpoint and click **Configure**. You can also move the pointer over the Cluster Endpoint card and click **Modify** in the message that appears. Then, modify the value of the **Global Consistency Timeout** parameter. If a global consistency timeout occurs, the client receives the following error message:

```
SCC timeout waiting for WAL replay
```

**Note**

If your cluster handles heavy or unpredictable write loads, you can set the **Global Consistency Timeout** parameter to a larger value.

### How do I downgrade the global consistency level after a timeout occurs?

Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/) and go to the Basic Information page of your cluster. Find the cluster endpoint and click **Configure**. You can also move the pointer over the Cluster Endpoint card and click **Modify** in the message that appears. Then, set the value of the **Global Consistency Timeout Policy** parameter to **Automatic Downgrade to Inconsistent Read Due to Timeout**. This way, when a global consistency read query times out, the system automatically downgrades the consistency level of the query to inconsistent read. No error message is returned to the client. For information about the valid values of the Global Consistency Timeout Policy parameter, see the [table that describes the Global Consistency Timeout Policy parameter](#1a3f750425guq).

### How do I prevent read latency in low-write load scenarios?

Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/) and set the `synchronous_commit` parameter to ON to prevent read latency in low-write load scenarios. For information about how to configure cluster parameters in the PolarDB console, see [Configure cluster parameters](/help/en/polardb/polardb-for-oracle/configure-cluster-parameters).
