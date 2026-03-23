Kubernetes applications often require persistent storage to retain data. ACK integrates multiple Alibaba Cloud storage services (Cloud disk, OSS, NAS, and CPFS) through the Container Storage Interface (CSI), and also supports Kubernetes-native volume types. This gives you flexible storage options for both ephemeral and persistent workloads.

## Storage solutions

ACK storage options fall into two categories:

-   Kubernetes-native volumes: Used for ephemeral data, configuration injection, or interaction with the host node. These volumes are tied to the Pod lifecycle and are not suitable for persistent application data.
    
-   Alibaba Cloud persistent volumes: Integrate with Alibaba Cloud storage services through CSI. These volumes are decoupled from the Pod lifecycle and support stateful workloads.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1306403771/CAEQVBiBgMDev7Gy5RkiIGE1Yjg2ZDg2NGM3ODQwM2ViMTI0ZGU3YTUzOGRiMTEy6524298_20260213110940.495.svg)

> Before using container storage features, make sure you understand core [Kubernetes storage concepts](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-basics#task-2059271) such as volumes, PersistentVolumes (PVs), and PersistentVolumeClaims (PVCs).

### Kubernetes-native volumes

Kubernetes-native volumes are tied to the Pod lifecycle and are not designed for persistent data storage.

**Type**

**Description**

**Key features**

emptyDir

An ephemeral volume that shares the Pod lifecycle.

Data persists only for the lifetime of the Pod. Best for inter-container sharing and ephemeral caches.

HostPath

Mounts a file or directory from the host node into a Pod. Use the `type` field (for example, `DirectoryOrCreate`) to control pre-mount validation and creation behavior.

> For more information, see [HostPath volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-hostpath-volumes).

Data is bound to the node and does not follow Pod rescheduling. Not recommended for stateful applications that require high availability (such as databases or caches).

ConfigMap/Secret

Mounts configuration entries or sensitive credentials as files.

Intended for small configuration data, not application data. Use it to decouple configuration from application code.

### Alibaba Cloud persistent volumes

For stateful applications that require persistent data, use persistent storage volumes backed by Alibaba Cloud storage services. These volumes exist independently of the Pod lifecycle and integrate with Kubernetes through CSI.

#### Comparison

The comparison table below includes a quick-reference index under each storage solution name. Using Cloud disk as an example:

-   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6025825571/p991664.png)[Cloud disk](/help/en/ecs/user-guide/elastic-block-storage-devices): The storage service. Click for details.
    
-   [Static](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-a-statically-provisioned-disk-volume)/[Dynamic](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-disk-volumes): Supported [volume provisioning methods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-basics#section-682-oct-e0x), including statically provisioned volumes (PV/PVC) and dynamically provisioned volumes (StorageClass/PVC). Click for step-by-step instructions.
    
-   RWO: Supported [access modes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-basics#33a1b6f4201e1) (`accessModes`): RWO (`ReadWriteOnce`), RWX (`ReadWriteMany`), and ROX (`ReadOnlyMany`).
    
-   [Billing](/help/en/ecs/block-storage-devices#concept-1937442): Pricing details. Click for details.
    

**Storage solution**

**Description**

**Trade-offs and limitations**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6025825571/p991664.png) [Cloud disk](/help/en/ecs/user-guide/elastic-block-storage-devices)

[Static](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-a-statically-provisioned-disk-volume)/[Dynamic](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-disk-volumes) | RWO (no Multi-Attach) | [Billing](/help/en/ecs/block-storage-devices#concept-1937442)

-   Description: A block storage service with 99.9999999% data reliability and consistent I/O performance. Data is replicated with three copies on the backend. Supports filesystem mode (`volumeMode: Filesystem`) and block device mode (`volumeMode: Block`). Multiple [performance](/help/en/ecs/user-guide/block-storage-performance#title-btv-ypi-kdz) tiers are available (ESSD AutoPL, ESSD, ESSD Entry, and more), along with encryption at rest.
    
-   Use case: Databases (MySQL, PostgreSQL), middleware (Redis, Elasticsearch), and other single-instance stateful applications that demand high I/O performance and data reliability.
    

-   `accessModes`: Without Multi-Attach enabled, Cloud disk can only be attached to one Pod at a time. This does not support workloads that require shared data access across multiple instances (such as web cluster content sharing).
    
    > Use Cloud disk with StatefulSets or single-Pod Deployments, not multi-replica Deployments. See the guides for details.
    
-   Zone binding: Cloud disk can only be attached to Pods in the same zone (except ESSD zone-redundant disks).
    
    > Use a StorageClass with `WaitForFirstConsumer` binding mode to enable topology-aware scheduling.
    
-   Instance compatibility: Cloud disk types must match the ECS instance family. For details, see [Instance family overview](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2521963671/p991821.png) [NAS](/help/en/nas/product-overview/what-is-nas)

[Static](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-nas-volumes)/[Dynamic](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-a-dynamically-provisioned-nas-volume) | RWX, RWO, ROX | [Billing](/help/en/nas/product-overview/overview-1)

-   Description: A shared file storage service that supports the NFS protocol. Multiple Pods can read and write concurrently, and both capacity and performance scale elastically. Provides recycle bin, snapshot, and backup capabilities for data protection.
    
-   Use case: Web cluster content sharing, CI/CD pipelines, centralized log storage, and other scenarios where multiple application instances read and write the same data concurrently.
    

-   Network I/O overhead: All reads and writes go through the network, which introduces millisecond-level latency compared to Cloud disk. Not recommended for databases or other applications that are highly sensitive to I/O latency.
    
-   Noisy neighbor: In subpath or sharepath modes, dynamically provisioned PVs are subdirectories of the same backend NAS instance. They share performance resources (bandwidth and IOPS), which can cause noisy-neighbor effects.
    
-   Protocol and network limits: Only the NFS protocol is supported. Cross-VPC mounting is not supported.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1729622771/p1054411.png) [OSS](/help/en/oss/user-guide/what-is-oss)

Static [ossfs 1.0](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes)/[ossfs 2.0](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-oss-volumes-through-ossfs-2-0)

Dynamic [ossfs 1.0](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-oss-volumes)/[ossfs 2.0](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/using-dynamically-provisioned-volumes-with-ossfs-2-0)

RWX, ROX | [Billing](/help/en/oss/billing-overview)

-   Description: A high-capacity, low-cost object storage service. The `ossfs` tool mounts a bucket as a filesystem in the Pod. Two mount drivers are available: `ossfs 1.0` (optimized for POSIX compatibility) and `ossfs 2.0` (optimized for high throughput and concurrency).
    
-   Use case: Data lakes for AI and big data analytics, static media storage (images, videos), and application data backup and archival.
    

-   Non-native performance: Built on a user-space filesystem (FUSE), which translates filesystem operations into HTTP API calls. This results in high latency and low random I/O performance. Not recommended for databases or high-frequency write workloads.
    
-   Incomplete POSIX compatibility: Does not fully support all standard filesystem operations. For example, `chmod` and `chown` on the root path are restricted, which may cause application compatibility issues.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2521963671/p991821.png) [CPFS for Lingjun](/help/en/cpfs/bmcpfs/product-overview/what-is-cpfs-for-lingjun)

[Static](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cpfs-for-lingjun-statically-provisioned-volumes)/[Dynamic](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cpfs-for-lingjun-dynamic-volumes) | RWX | [Billing](/help/en/cpfs/bmcpfs/product-overview/billing-description)

-   Description: A high-performance parallel filesystem built for AI workloads. Delivers high-concurrency throughput and IOPS.
    
-   Use case: Large model training and inference (AIGC), autonomous driving simulation, and other AI workloads that require high parallel I/O performance.
    

-   Cost and availability: Higher cost than other solutions. Currently in invite-only preview and available only in [selected regions](/help/en/cpfs/bmcpfs/product-overview/what-is-cpfs-for-lingjun#cc2c2e40famtq).
    
-   Mounting limit: Cross-VPC mounting is not supported.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2521963671/p991821.png) [CPFS General-purpose Edition](/help/en/cpfs/what-is-cpfs)

[Static](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/statically-provisioned-cpfs-2-0-volumes-1) | RWX | [Billing](/help/en/cpfs/cpfsonecs/product-overview/cpfs-billing-overview)

-   Description: A shared filesystem for high-performance computing (HPC) that delivers higher IOPS and throughput than general-purpose NAS.
    
-   Use case: Genomics computing, big data analytics, data cache acceleration, and other traditional HPC workloads.
    

-   Cost and availability: Higher cost than general-purpose NAS, and available only in [selected regions](/help/en/cpfs/what-is-cpfs#section-5kf-e2e-fit).
    
-   Mounting limit: Only the NFS protocol is supported. Cross-VPC mounting is not supported.
    

Beyond baseline performance, storage solutions also differ in how they handle failure recovery, capacity management, and data protection. Consider the following questions to refine your choice.

Recover from node failures

When a node fails, fast application recovery and data safety are critical to high availability.

-   Cloud disk: CSI automatically detaches the disk from the failed node and attaches it to the new node.
    
-   NAS / OSS / CPFS: As shared storage, a Pod can remount the volume as soon as it starts on another node. Recovery time is mainly determined by application startup time.
    
-   HostPath: Data is pinned to a specific node. If that node fails, the Pod cannot access its original data from another node. Cross-node replication and HA must be handled by the application.
    

> **Recommendation**

> If your application (for example, a single-instance database) can tolerate short interruptions, choose Cloud disk. For fast failover (for example, highly available web services), prioritize shared storage solutions with multiple replicas.

Plan storage capacity

Capacity planning helps control costs and prevents outages caused by running out of storage. PVC capacity behaves differently depending on the storage type.

-   Cloud disk: PVC capacity maps one-to-one to the disk size. Capacity limits are enforced, and [volume expansion](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-a-disk-volume-without-service-interruptions) is supported. Suitable for workloads with predictable capacity needs and strong isolation requirements.
    
-   OSS: Elastic capacity and billed by actual usage. PVC capacity is used only for PV matching and does not enforce a usage limit.
    
-   NAS/CPFS:
    
    -   Statically provisioned volumes: PVC capacity is used only for PV matching and does not limit actual usage. Available capacity depends on the backend instance quota, shared across Pods.
        
    -   Dynamically provisioned volumes: For NAS (subpath mode only, with [allowVolumeExpansion: true](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-a-nas-volume)) and CPFS for Lingjun, the PVC capacity is converted into a directory quota that enforces actual usage limits. In other scenarios, behavior matches statically provisioned volumes.
        

> **Recommendation**

> For workloads that require precise budgeting and strong isolation (for example, databases in multi-tenant environments), use Cloud disk. For workloads where many Pods share data and capacity changes frequently (for example, logs or static web files), use shared storage solutions.

Back up application data

-   Cloud disk: Use [snapshots](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-volume-snapshots-created-from-disks) for fast, full-volume backup and restore. [Backup schedules and on-demand backups](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/back-up-and-restore-applications-in-an-ack-cluster#section-7ba-qxw-1k3) are also supported.
    
-   NAS: Provides a [recycle bin](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/recover-nas-file-data-using-recycle-bin-function) (via CNFS) for file/directory recovery and [snapshots](/help/en/nas/user-guide/manage-snapshots)(supported by some NAS types).
    
-   OSS: Supports [versioning](/help/en/oss/user-guide/overview-78/) and [lifecycle management](/help/en/oss/user-guide/overview-54/) to reduce the risk of accidental deletion and enable archival.
    
-   HostPath: Data protection relies entirely on application-level replication and HA mechanisms.
    

> **Recommendation**

> For fast and consistent full-volume backup and restore, use Cloud disk snapshots. For long-term archival, compliance needs, or single-file recovery, use the corresponding NAS or OSS features. If you use HostPath, ensure your application has a robust data protection strategy.

## Key add-ons and concepts

-   [CSI add-ons](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in)(csi-plugin, csi-provisioner)
    
    The Kubernetes-recommended storage plugin implementation, deployed by default in ACK clusters. These add-ons interact with Alibaba Cloud storage APIs to manage the volume lifecycle, including provisioning, attaching, detaching, and deletion.
    
-   [Container Network File System (CNFS)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cnfs-overview/)
    
    A storage enhancement available in ACK Pro clusters. CNFS represents NAS, OSS, and CPFS resources as Kubernetes Custom Resource Definitions (CRDs) and provides fine-grained management capabilities such as dynamic subdirectory creation, quota management, I/O monitoring, recycle bin management, and distributed caching.
    

## Usage notes

-   Cluster version: Kubernetes 1.14 or later is required. To upgrade, see [Manually upgrade an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
-   Cluster environment: CSI is fully tested and validated in ACK clusters. For non-ACK clusters (non-Alibaba Cloud environments, self-managed clusters on Alibaba Cloud), CSI may not work out of the box due to differences in configuration, permissions, and networking.
    
    > For non-ACK environments, see the [alibaba-cloud-csi-driver](https://github.com/kubernetes-sigs/alibaba-cloud-csi-driver/tree/master) source code and adapt it to your environment.
    
-   Node configuration: The `kubelet` parameter `--enable-controller-attach-detach` must be set to `true`.
    
-   Operating system: Windows nodes are not supported.
    
-   RBAC permissions: PVs are cluster-scoped resources, and PVCs are namespace-scoped resources. When you configure RBAC, consider the permission differences for these two resource types.
    
    If the predefined ACK roles (administrator, O&M engineer, and others) do not meet your needs, create custom roles. For example, the default O&M engineer role has read-write access to PVCs but read-only access to PVs, so it cannot create PVs manually. For more information, see [Grant RBAC permissions to a RAM user or RAM role](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles).
    

## FAQ

### How to determine which storage plugin your cluster uses?

Use one of the following methods.

## Check node annotations in the console

1.  On the [ACK Clusters](https://cs.console.alibabacloud.com) page, click the name of your cluster. On the cluster details page, in the navigation pane on the left, click **Nodes** > **Nodes**.
    
2.  In the **Actions** column, click **Details**, and then check the node **Annotations** on the **Overview** tab.
    
    If the annotation `volumes.kubernetes.io/controller-managed-attach-detach: true` exists, the cluster uses CSI. Otherwise, it uses Flexvolume.
    

## Check kubelet parameters via the command line

[Log on to a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-management/#ce56e9aa4fban) and check the kubelet parameters.

```
ps -ef | grep kubelet
```

Example output (truncated):

```
--enable-controller-attach-detach=true
```

-   `true`: CSI
    
-   `false`: Flexvolume
    

### How do I grant CSI permissions manually?

CSI requires permissions to access other Alibaba Cloud services when it attaches, detaches, creates, or deletes volumes. By default, CSI is installed with the required permissions. If you need to grant permissions manually, use one of the following methods.

-   RAM role authorization (default): CSI uses the AliyunCSManagedCsiRole role to access other cloud services. For more information, see [ACK roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-default-roles#section-ot3-h1u-t4i).
    
    -   ACK managed clusters: The RAM role token is stored in a Secret named `addon.csi.token`. Mount this Secret to authorize CSI through the RAM role.
        
    -   ACK dedicated clusters: CSI inherits the RAM role of the node where its Pod runs.
        
    
    For more information about granting permissions to RAM roles, see [Manage permissions for a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).
    
-   AccessKey authorization:
    
    -   Environment variables: Create the AccessKey as a Kubernetes Secret, then inject it into the CSI Pod as environment variables. This prevents credentials from being exposed in plaintext in deployment manifests.
        
    -   Inline YAML: Write the AccessKey directly in the CSI YAML. Not recommended for production environments.
        

## References

-   [Storage monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-monitoring/): Monitor cluster storage resources and diagnose client I/O issues.
    
-   [Use ENS disks](/help/en/ack/ack-edge/user-guide/use-ens-disks): Mount ENS disks in ACK Edge clusters.
    
-   [Best practices for storage](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-storage/): Best practices for container storage.
    
-   [Troubleshoot storage issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-troubleshooting-1): Troubleshoot storage issues.
    
-   [CSI storage FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-csi): Frequently asked questions about CSI.
    
-   [Upgrade from FlexVolume to CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-from-flexvolume-to-csi/): Flexvolume is no longer maintained. Migrate to CSI.
