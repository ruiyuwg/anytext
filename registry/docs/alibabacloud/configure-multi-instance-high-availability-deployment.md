Hologres V1.1 and later lets you deploy a primary instance with up to 10 read-only secondary instances that share a single storage layer. This separates read and write traffic across instances, providing load and fault isolation without duplicating data. Storage is charged once.

## Set up primary and secondary instances

### Step 1: Purchase a read-only secondary instance

1.  Go to the Hologres purchase page.
    
2.  Set **Instance Type** to Read-only Secondary Instance.
    
3.  For **Primary Instance ID of the Read-only Secondary Instance**, select the ID of the primary instance. The secondary must be in the same region as the primary instance.
    
4.  Configure the remaining parameters as needed. For more information, see [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#task-1918224).
    

**Important**

The read-only secondary instance must be in the same region as the primary instance.

### Step 2: Verify the secondary is attached

After purchase, the secondary instance is automatically attached to the primary instance that you selected on the purchase page. Wait for the instance state to change to **Running as Expected**. The secondary is ready to use after the state changes.

### Step 3: Connect to the secondary endpoint

Each secondary instance has its own endpoint. Direct read traffic to the secondary instance endpoint instead of the primary instance endpoint. Use different endpoints for different secondary instances to isolate workloads by business scenario.

## Use the deployment

-   Perform all write operations, table creation, user authorization, and parameter changes on the primary instance. Secondary instances support only read operations.
    
-   Secondary instances automatically inherit all objects from the primary instance, including users, tables, and access control policies. You cannot create users specifically for a secondary instance at the access control layer.
    
-   After setup, direct online traffic to the secondary instance endpoint.
    

## Recommended scenarios

**Scenario**

**Primary instance**

**Secondary instances**

Read/write splitting

Data ingestion and transformation

Data analytics

Online service isolation (high P99 stability)

All writes

Dedicated replica for online queries, isolated from other workloads

OLAP query isolation

All writes

Separate analytics-focused replica, distinct from the online service replica

## How it works

### Single-instance automatic recovery

Every Hologres instance includes a built-in recovery mechanism that runs by default. No manual operations and maintenance (O&M) is required.

Compute nodes run in containers, referred to as Worker Nodes. The Resource Manager performs periodic health checks on every container. If a container fails to respond within one minute -- due to memory overflow, hardware failure, or software bugs -- the Resource Manager launches a replacement compute node and migrates shard responsibilities to it.

Data is stored in the Pangu distributed storage system, not on compute nodes. Because compute nodes are lightweight and stateless, the system recovers quickly without data migration. In Hologres V1.1 and later, the recovery mechanism restores nodes in approximately one minute, which is 5 to 10 times faster than earlier versions.

During recovery, any query operator that attempts to access the recovering node fails immediately.

![Single-instance automatic recovery](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0521247461/p363684.png)

### Multi-instance shared storage architecture

The single-instance model still results in a brief unavailability window during node recovery. For mission-critical workloads that require continuous availability, Hologres V1.1 and later supports multi-instance deployment with shared storage.

**Component**

**Capabilities**

Primary instance

Read/write operations, permission management, system parameter configuration

Secondary instances

Read-only; all changes (table creation, user authorization, system parameters) must be made on the primary instance

Primary and secondary instances do not share compute resources, which provides load and fault isolation. All instances share the same data and access control policies. Storage is charged once.

![Multi-instance shared storage architecture](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3126342561/p401358.png)

### Synchronization between instances

Memory states are synchronized in real time between instances. Within the same region, synchronization occurs at the instance level and takes only milliseconds. When data is written to the primary instance, the system automatically syncs it to the secondary instances.

Secondary instances consume some CPU and memory even when idle -- approximately 1/8 of the primary instance's usage. Do not configure primary and secondary instances with significantly different specifications.

## Prerequisites

Before you begin, make sure that you meet the following requirements:

**Requirement**

**Detail**

Hologres version

V1.1 or later for the primary instance. If your instance runs an earlier version, see [Common upgrade preparation errors](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) or join the Hologres user group to request an upgrade. For more information, see [How to get online support?](/help/en/hologres/support/obtain-online-support-for-hologres#concept-2379947)

Region

Primary and secondary instances must reside in the same region

Version parity

Primary and secondary instances must run the same Hologres version

RAM permissions

The RAM user performing attach and detach operations must have the AliyunHologresFullAccess access policy. For more information, see [Grant permissions to RAM users](/help/en/hologres/security-and-compliance/grant-permissions-on-hologres-to-ram-users#task-1995156)

## Limits

**Constraint**

**Detail**

Maximum secondary instances

10 read-only secondary instances per primary instance

Shard count

All instances must have the same number of shards

Specifications

Resource configurations can differ between instances but should not vary significantly

Unattached replicas

A read-only secondary instance cannot accept connections until it is attached to a primary instance

Attach duration

Attaching a replica takes approximately 3 to 5 minutes. The replica is unavailable until the process completes

Primary availability during attach

The primary instance remains fully operational while a replica is being attached

Synchronization latency threshold

In Hologres V1.3.27 and later, the threshold is 60 minutes (increased from 20 minutes in earlier versions). If resource utilization on a replica stays at 100% for more than 60 minutes, the replica automatically restarts. If utilization stays at 100% for extended periods, perform performance tuning or scale out the instance

MaxCompute direct read

If MaxCompute directly reads from the Hologres storage layer and Hologres uses a primary-secondary architecture, the connection URL must point to the primary instance, not a replica. For more information, see [Enable direct read from Hologres foreign table storage](/help/en/maxcompute/user-guide/hologres-foreign-tables#section-fu1-iyy-ibu)
