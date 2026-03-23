Keeping your ACK cluster on a supported Kubernetes version is essential for security, stability, and access to the latest features. A cluster upgrade is a two-phase process: you first upgrade the **control plane**, then upgrade your **node pools**. The control plane manages the API server and core cluster components, while the node pools run your workloads.

**Important**

Before you begin, review the full upgrade process in [Upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-clusters/) to understand the available methods, compatibility requirements, and best practices.

## Prerequisites

### Version compatibility

You must upgrade the control plane before upgrading node pools. The kubelet and container runtime versions on your nodes must be compatible with the target control plane version. If a version gap exists, you must close it first to avoid failures or service disruptions.

**Example**: If your control plane is at version 1.32 and your nodes are at 1.31, you must first upgrade the nodes to 1.32 before upgrading the control plane to 1.33.

### Runtime and OS requirements

**Important**

-   Starting with Kubernetes 1.24, Docker is no longer supported as a container runtime. When upgrading to 1.24 or later, you must [migrate the container runtime of nodes from Docker to containerd](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/change-the-container-runtime-from-docker-to-containerd).
    
-   Starting with Kubernetes 1.30, CentOS and Alibaba Cloud Linux 2 are no longer supported. Use a supported [operating system](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-os-images/).
    

## Open the upgrade page

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want to upgrade and click its name. In the left navigation pane, choose **Operations** > **Upgrade Cluster**.
    
3.  On the **Upgrade Cluster** page, select a **Target Version** and follow the on-screen instructions to complete the upgrade.
    

## Step 1: Upgrade the control plane

### Run a precheck

Before upgrading, run a precheck to identify potential risks. The precheck evaluates:

-   Use of deprecated APIs
    
-   Component compatibility
    
-   Overall cluster health
    

On the **Upgrade Cluster** page, click **Precheck**. After the scan completes, view the results in the **Precheck Result** section.

**Note**

For clusters running Kubernetes 1.20 or later, the system checks for [deprecated APIs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cluster-check-items-and-suggestions-on-how-to-fix-cluster-issues#section-bff-eip-5xe). This check does not block the upgrade, but we recommend resolving any issues beforehand to ensure smooth operations after the upgrade.

![Precheck results](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4832093571/p986430.png)

**Result**

**Action**

Normal

Proceed with the upgrade.

Abnormal

Address the issues using the console guidance, or refer to [Cluster check items and remediation solutions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cluster-check-items-and-suggestions-on-how-to-fix-cluster-issues).

### Perform the upgrade

After you resolve any precheck issues:

1.  Click **Upgrade Now**.
    
2.  Follow the prompts to complete the control plane upgrade.
    

**Cluster type**

**Estimated duration**

ACK managed and ACK Serverless

The upgrade is fast and highly available.

ACK Dedicated

Master nodes are upgraded one by one, taking about 8 minutes per node.

After the upgrade, new nodes added during scaling automatically use the upgraded version.

![Control plane upgrade](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4832093571/p986452.png)

### Verify the control plane upgrade

After the control plane upgrade completes, verify the following:

**Check item**

**Expected outcome**

Cluster version

Updated to the target version on the Clusters page.

API server & core components

Status is Normal.

Business applications

Running as expected.

Pod creation

New pods can be created successfully.

Node addition

New nodes can be added without issues.

## Step 2: Upgrade node pools

After the control plane is upgraded, upgrade your node pools. Schedule node pool upgrades during off-peak hours to minimize impact on running workloads.

A node pool upgrade updates the kubelet and container runtime on each node.

### Run a precheck

The node pool precheck evaluates:

-   Node status
    
-   System resources
    
-   Disk health
    
-   Network environment
    

To run the precheck:

1.  On the **Node Pool Upgrade** page, find the target node pool and click **Upgrade** in the Actions column.
    
2.  Click **Precheck** at the bottom of the page.
    
3.  Review the results in the **Precheck Result** section.
    

![Node pool precheck](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4832093571/p991778.png)

**Result**

**Action**

Normal

Proceed with the upgrade.

Abnormal

Address the issues using the console guidance, or refer to [Cluster check items and remediation solutions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cluster-check-items-and-suggestions-on-how-to-fix-cluster-issues).

### Configure the upgrade policy and start the upgrade

After you resolve any precheck issues, configure the following settings and click **Upgrade Now** to begin.

#### Upgrade settings

**Setting**

**Description**

Version Information

Shows the current and available versions for kubelet and container runtime.

**Nodes To Upgrade**

Choose to upgrade all nodes, or upgrade a subset first to validate before upgrading the rest.

**Upgrade Method**

Choose one of the methods described below. For details, see [In-place upgrade and system disk replacement upgrade](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates#6bb86c60557cq).

**Upgrade methods**

**Method**

**Behavior**

**In-place Upgrade**

Components are updated in place. System disks are not replaced. Node data (such as on data disks) is preserved.

**System Disk Replacement Upgrade**

Nodes are reinitialized with new system disks. The node name, instance ID, and IP address remain unchanged. Data on system disks is deleted. Data disks are unaffected.

#### Batch upgrade policy

**Setting**

**Description**

**Maximum Number Of Nodes Per Batch**

Nodes are upgraded in batches (1, 2, 4, 8, and so on) until the maximum batch size is reached, then fixed-size batches continue.

**Auto Pause Policy**

Choose whether to pause between batches. If you select **Do Not Pause**, set the **Interval Between Batches** (5 to 120 minutes).

**Automatic Snapshot**

Recommended for system disk replacement upgrades. [Snapshots](/help/en/ecs/user-guide/snapshot-overview) back up node system disks before the upgrade.

**Important**

Snapshots incur [costs](/help/en/ecs/snapshots-1) and are retained for 7 days by default. [Delete them](/help/en/ecs/user-guide/delete-a-snapshot-1) after the upgrade if they are no longer needed.

#### Estimated duration

**Scenario**

**Time per batch**

In-place upgrade

About 5 to 10 minutes

System disk replacement (no snapshots)

About 8 minutes

-   Time to drain nodes also affects total duration.
    
-   If snapshots are enabled, the upgrade starts only after snapshot creation completes. The time required varies with data volume.
    

### Verify the node pool upgrade

After the node pool upgrade completes, verify the following:

**Check item**

**Expected outcome**

Node versions

On the node details page, kubelet and containerd versions match the target version.

Pod scheduling

Pods are scheduled normally.

Business applications

Running as expected.

## References

-   [FAQ: Cluster upgrade](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-clusters/#23f9ffb1f9i37)
    
-   [Release notes for ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/support-for-kubernetes-versions/): Kubernetes version support policy
    
-   [Automatically upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-upgrade-an-ack-cluster): Reduce O&M effort with auto-upgrades
