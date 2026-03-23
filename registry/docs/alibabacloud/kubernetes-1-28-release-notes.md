Container Service for Kubernetes (ACK) strictly follows the Certified Kubernetes Conformance Program. This topic describes the main changes for ACK in the Kubernetes 1.28 release, including upgrade notes, major changes, features, deprecated features and APIs, and feature gates.

## **Component versions**

The following table lists the supported versions of core components in ACK clusters.

**Core component**

**Version number**

Kubernetes

1.28.15-aliyun.1, 1.28.9-aliyun.1, and 1.28.3-aliyun.1

etcd

v3.5.9

CoreDNS

v1.9.3.10-7dfca203-aliyun

CRI

containerd 1.6.20

CSI

Upgrade to the latest supported version of the component. For more information, see the component changelogs for [csi-plugin](/help/en/ack/product-overview/csi-plugin#DAS) and [csi-provisioner](/help/en/ack/product-overview/csi-provisioner#DAS).

CNI

Flannel v0.15.1.22-20a397e6-aliyun

Terway and TerwayControlplane v1.5.0 and later

NVIDIA Container Runtime

v3.13.0

Ingress Controller

v1.8.0-aliyun.1

## **Upgrade notes**

**Component**

**Notes**

CephFS and Ceph RBD storage volume plugins

If your cluster uses the CephFS and RBD volume plugins, check if they no longer depend on the in-tree driver provided by Kubernetes and have switched to the off-tree driver. Evaluate the risks related to compatibility, stability, or performance.

## **Concepts**

Understand the following concepts before you read about the feature changes and deprecated resources in this Kubernetes version.

**Feature Gates**

[Feature gates](https://kubernetes.io/docs/reference/command-line-tools-reference/feature-gates/#using-a-feature) define the stages of a feature. A feature typically progresses through three stages:

-   Alpha stage: Disabled by default.
    
-   Beta stage: Enabled by default.
    
-   General Availability (GA) stage: Always enabled and cannot be disabled. The feature gate is no longer needed.
    

## **Major changes**

-   In Kubernetes v1.28, the scheduler's logic is optimized to reduce invalid retries, which improves its overall performance.
    
    If your cluster uses a custom scheduler plug-in, we recommend that you optimize and update the plug-in to improve scheduler performance. For more information, see [Scheduling framework changes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.28.md#no-really-you-must-read-this-before-you-upgrade).
    
-   For [CSI migration](https://kubernetes.io/blog/2021/12/10/storage-in-tree-to-csi-migration-status-update/#quick-recap-what-is-csi-migration-and-why-migrate), the Kubernetes community has been working to replace in-tree storage plug-ins with out-of-tree drivers that implement the standard CSI interface. This migration reached GA in Kubernetes v1.25. In Kubernetes v1.27, the `storage.k8s.io/v1beta1` API and the EBS plug-in were removed. In Kubernetes v1.28, the code for the CephFS volume plug-in was removed, `kubernetes.io/rbd` was deprecated, and the [CephFS CSI driver](https://github.com/ceph/ceph-csi/) is used instead. In addition, you can no longer migrate Ceph RBD volumes to the out-of-tree CSI driver in Kubernetes 1.28.
    
-   Version 1.28.15-aliyun.1 fixes [CVE-2024-10220](/help/en/ack/product-overview/vulnerability-cve-2024-10220).
    
-   The following CVEs were fixed in version 1.28.9-aliyun.1:
    
    -   CVE-2023-45288
        
    -   [CVE-2024-3177](/help/en/ack/product-overview/vulnerability-cve-2024-3177-bulletin)
        
    -   CVE-2024-24786
        

## **Features**

### **In Kubernetes 1.27**

-   The pod termination status is corrected. Pods deleted in the Pending state are set to Failed. Pods deleted in the Running state are set to Succeeded or Failed, depending on the container exit status. This correction fixes an issue where a pod might remain in the Pending state when a pod with a configured failure policy is deleted.
    
    However, if a pod is configured with `RestartPolicy=Always`, it may terminate with a Succeeded status after being deleted. Therefore, you may need to modify your controllers. For more information, see [Set the termination status for pods that do not require a restart](https://github.com/kubernetes/kubernetes/pull/115331).
    
-   The ReadWriteOncePod feature for persistent volumes (PVs) has reached Beta. This feature limits volume access to a single pod. For more information, see [Single Pod Access Mode for PersistentVolumes Graduates to Beta](https://kubernetes.io/blog/2023/04/20/read-write-once-pod-access-mode-beta/).
    
-   [Pod topology spread constraints](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/) control how pods are spread across multiple zones in a cluster. Several enhanced features have reached Beta, including support for specifying the minimum number of domains (`minDomains`), considering taints (`nodeTaintsPolicy`) and affinity (`nodeAffinityPolicy`) during scheduling, and specifying how to treat pods that do not meet constraints during rolling updates (`whenUnsatisfiable`). For more information, see [More fine-grained pod topology spread policies](https://kubernetes.io/blog/2023/04/17/fine-grained-pod-topology-spread-features-beta/).
    

-   The server-side field validation feature for validating resources sent to the API server has reached GA. kubectl will skip client-side validation, automatically use server-side field validation in `Strict` mode, and report an error if the validation fails. For more information, see [Server Side Field Validation and OpenAPI V3 move to GA](https://kubernetes.io/blog/2023/04/24/openapi-v3-field-validation-ga/).
    
-   OpenAPI V3 is a new OpenAPI standard. OpenAPI V3 was introduced in Kubernetes 1.23 and has reached GA in Kubernetes 1.27. For more information, see [Server Side Field Validation and OpenAPI V3 move to GA](https://kubernetes.io/blog/2023/04/24/openapi-v3-field-validation-ga/).
    
-   Horizontal Pod Autoscaler (HPA) lets you configure [ContainerResource](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/#container-resource-metrics) for containers in a Pod to enable auto-scaling based on the resource usage of each container. This feature reached Beta in Kubernetes 1.27. Unlike the original [Resource](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/#support-for-resource-metrics) type that considers the average resource usage of an entire Pod, this approach evaluates the resource usage of each container. This solves the issue where a Pod fails to scale out because it contains a sidecar container with low resource usage and an application container with high resource usage, causing the calculated average to remain below the scale-out threshold.
    
-   Multiple StatefulSet features reached Beta. This includes support for starting pod ordinals from a non-zero number and support for automatically deleting created PVCs during specified deletions and scale-ins.
    
-   A new feature lets you resize the CPU and memory resources specified in the `resources` field for a pod's containers without restarting the pod or its containers. A node allocates resources to a pod based on `requests` and limits its resource usage based on `limits`. New fields are added to pods to support this feature. For more information, see [Resize CPU and Memory Resources assigned to Containers](https://kubernetes.io/docs/tasks/configure-pod-container/resize-container-resources/). This feature has reached Alpha in Kubernetes 1.27 and is disabled by default.
    
-   You can set the `serializeImagePulls` field of the kubelet to `false` to enable [parallel image pulls](https://kubernetes.io/docs/concepts/containers/images/#serial-and-parallel-image-pulls) instead of the default serial image pulls. The [maxParallelImagePulls](https://kubernetes.io/docs/concepts/containers/images/#maximum-parallel-image-pulls) field is added in v1.27 to limit the number of images that can be pulled in parallel. This prevents image pulls from consuming excessive network bandwidth or disk I/O.
    
-   In addition to the Volume Snapshot API, a crash-consistent volume group snapshot API was introduced in Kubernetes 1.27 that lets you create snapshots for multiple PVs at a point in time. For more information, see [Introducing an API for Volume Group Snapshots](https://kubernetes.io/blog/2023/05/08/kubernetes-1-27-volume-group-snapshot-alpha/).
    

### **In Kubernetes 1.28**

-   [Non-graceful node shutdown](https://kubernetes.io/docs/concepts/architecture/nodes/#non-graceful-node-shutdown) has reached GA. This feature allows a StatefulSet to create pods with the same name on another node when the original node is shut down unexpectedly, such as due to a power failure, which helps avoid service interruptions.
    
-   The NodeOutOfServiceVolumeDetach feature gate is now GA. It allows immediate volume detachment for pods terminated on an abnormal node. This helps pods recover quickly on other nodes.
    
-   The [Retroactive default StorageClass assignment](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#retroactive-default-storageclass-assignment) feature has reached GA. Previously, if you created a PVC without the `storageClassName` when no default StorageClass existed, the PVC would remain in the Pending state indefinitely. Now, when a default StorageClass is created, any PVC without a `storageClassName` is automatically updated to use the default StorageClass.
    
-   Two new features are introduced for handling Job failures.
    
    -   The [JobPodReplacementPolicy](https://kubernetes.io/docs/concepts/workloads/controllers/job/#pod-replacement-policy) (Alpha feature gate) ensures that a pod is replaced only when it reaches the Failed phase (`status.phase: Failed`), not when it has a `deletionTimestamp` and is terminating, to prevent two pods from simultaneously occupying the same index and node resources.
        
    -   The [JobBackoffLimitPerIndex](https://kubernetes.io/docs/concepts/workloads/controllers/job/#backoff-limit-per-index) (Alpha feature gate) lets you configure `.spec.backoffLimitPerIndex` to limit the number of failure retries for individual indexes of an Indexed Job, preventing the entire job from failing when a single index persistently fails and reaches the `.spec.backoffLimit` limit.
        
-   If the `completion` count of an Indexed Job is set to more than 100,000, its `parallelism` is set to more than 10,000, and many pods fail, you may be unable to track the Job's termination status. To prevent this issue, warnings are displayed if you set the preceding fields to excessively large values when you create a Job.
    
-   The `reason` and `fieldPath` fields are added to CustomResourceDefinition (CRD) validation rules to return a specified reason and field path when validation fails. For more information, see [CRD Validation Expression Language](https://github.com/kubernetes/enhancements/tree/master/keps/sig-api-machinery/2876-crd-validation-expression-language).
    
-   Webhook matching requests now support [Common Expression Language (CEL) expressions](https://kubernetes.io/docs/reference/using-api/cel/#cel-community-libraries). Up to 64 matching conditions are supported. For more information, see [Matching requests: matchConditions](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#matching-requests-matchconditions).
    
-   The `.status.resizeStatus` field of a PVC is replaced with the `.status.allocatedResourceStatus` map field, which indicates the states of resources being resized for the PVC. For more information, see [PersistentVolumeClaimStatus](https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/persistent-volume-claim-v1/#PersistentVolumeClaimStatus).
    
-   Pods of type Indexed Job and StatefulSet now have the pod index (ordinal number) added to their labels.
    
-   [ValidatingAdmissionPolicy](https://kubernetes.io/docs/reference/access-authn-authz/validating-admission-policy/) (in Beta) provides a declarative way to validate resource requests. This serves as an alternative to deploying validating admission webhooks and lets you use [CEL expressions](https://kubernetes.io/docs/reference/using-api/cel/#cel-community-libraries) to write complex validation rules. The API server validates resource requests against the CEL expressions.
    
-   Kube Controller Manager introduces the `--concurrent-cron-job-syncs` flag to configure the concurrency of the CronJob controller and the `--concurrent-job-syncs` flag to configure the concurrency of the Job controller. For more information, see [\--concurrent-cron-job-syncs](https://github.com/kubernetes/kubernetes/pull/117550/files) and [\--concurrent-job-syncs](https://github.com/kubernetes/kubernetes/pull/117138/files).
    
-   API Server optimizations include the following:
    
    -   The memory usage of retrieving a list (GetList) from the cache is reduced. For more information, see [GetList test data](https://github.com/kubernetes/kubernetes/pull/116327).
        
    -   Fixed an issue where the endpoint of a Kubernetes Service was not removed when only one API Server replica remained. This ensures that the endpoint is removed promptly during a graceful shutdown.
        
    -   [The OpenAPI v2 controller is set to lazily aggregate CRD information](https://github.com/kubernetes/kubernetes/pull/118808), and [the OpenAPI v2 specifications are significantly reduced](https://github.com/kubernetes/kubernetes/pull/118204). When no client sends requests to the OpenAPI v2, the CPU and memory usage of the API server is reduced. In addition, the efficiency of installing large numbers of CRDs is improved. However, this slows down the processing of first-time requests. We recommend that you update your client to a version that supports OpenAPI v3.
        
    -   The [Consistent Reads from Cache](https://github.com/kubernetes/enhancements/tree/master/keps/sig-api-machinery/2340-Consistent-reads-from-cache) feature gate is introduced that lets you use the watch cache to guarantee consistent reads for LIST requests.
        
    -   More monitoring metrics are available and can be accessed through the metrics endpoint.
        

## **Deprecated features**

### **In Kubernetes 1.27**

-   The in-tree AWS EBS storage plug-in is replaced with the out-of-tree CSI plug-in. For more information, see [cloud-provider-aws](https://github.com/kubernetes/cloud-provider-aws).
    
-   The Node `spec.externalID` field is deprecated. Warnings are returned if clients send requests to update this field. For more information about how to return warnings to clients, see [Helpful Warnings Ahead](https://kubernetes.io/blog/2020/09/03/warnings/).
    
-   [Seccomp](https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/135-seccomp) (Secure Computing Mode) became GA in Kubernetes v1.19. It improves workload security by restricting the system calls that a pod or container can execute. The Alpha-stage `seccomp.security.alpha.kubernetes.io/pod` and `container.seccomp.security.alpha.kubernetes.io` annotations were deprecated in v1.19 and completely removed in v1.27.
    
    We recommend that you use the `securityContext.seccompProfile` field for pods or containers.
    
-   The Kube Controller Manager (KCM) removes the startup flags `--pod-eviction-timeout` (the graceful period for pod eviction from a NotReady node) and `--enable-taint-manager` (taint-based eviction, enabled by default).
    
-   The `--container-runtime`, `--container-runtime-endpoint`, and `--image-service-endpoint` startup flags are removed from kubelet. For the `--container-runtime` flag, its default value remains `remote` after the removal of dockershim. This flag was deprecated in v1.24 and removed in v1.27. The `--container-runtime-endpoint` and `--image-service-endpoint` flags are no longer supported as startup commands. You must configure these settings in the kubelet configuration file instead.
    
-   The [SecurityContextDeny](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#securitycontextdeny) admission controller is deprecated and will be removed in future versions.
    

### In Kubernetes 1.28

-   The in-tree CephFS volume plugin code has been removed.
    
    We recommend that you use the [CephFS CSI driver](https://github.com/ceph/ceph-csi/) instead.
    
-   Support for migrating Ceph RBD volumes to the out-of-tree CSI storage driver plugin is deprecated and will be completely removed in a future version.
    
    Complete the migration before the in-tree code is removed.
    
-   The RBD volume plugin (kubernetes.io/rbd) is deprecated and will be removed in a future version.
    
    We recommend that you use the [CephFS CSI driver](https://github.com/ceph/ceph-csi/) instead.
    
-   Key Management Service (KMS) v1 is deprecated. If you want to continue to use KMSv1, set `--feature-gates=KMSv1=true`. For more information, see [Mark KMS v1beta1 as deprecated with no further fixes](https://github.com/kubernetes/kubernetes/pull/119007).
    
    Use KMSv2.
    
-   The Kubernetes Controller Manager (KCM) has deprecated the startup flags `--volume-host-cidr-denylist` and `--volume-host-allow-local-loopback`.
    
-   The `--azure-container-registry-config` flag in kubelet is deprecated.
    
    We recommend that you use the `image-credential-provider-config` and `--image-credential-provider-bin-dir` flags.
    
-   Creating Windows node pools is no longer supported.
    
    You can create node pools that use other operating systems, such as Alibaba Cloud Linux 3 and ContainerOS 3.1. For more information, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#section-eq0-lmv-4a7).
    

## **Deprecated APIs**

The [CSIStorageCapacity](https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/csi-storage-capacity-v1/) API exposes the available storage capacity to ensure that Pods are scheduled to nodes with sufficient storage capacity. The `storage.k8s.io/v1beta1` API version of CSIStorageCapacity was deprecated in v1.24 and removed in v1.27.

We recommend that you use `storage.k8s.io/v1`. This API is available in Kubernetes v1.24 and later versions. For more information, see [Storage Capacity Constraints for Pod Scheduling KEP](https://github.com/kubernetes/enhancements/tree/master/keps/sig-storage/1472-storage-capacity-tracking).

## **Feature gates**

This section lists only the major changes. For more information, see [Feature Gates](https://kubernetes.io/docs/reference/command-line-tools-reference/feature-gates/).

### In Kubernetes 1.27

-   The `NodeLogQuery` feature gate in the Alpha stage is added. After you set `enableSystemLogHandler` and `enableSystemLogQuery` to `true` for the kubelet, you can use kubectl to query node logs.
    
-   The `StatefulSetStartOrdinal` feature gate has reached Beta. This feature gate lets you assign sequence numbers to pods created by StatefulSets from a number other than zero. By default, this feature gate is enabled.
    
-   The `StatefulSetAutoDeletePVC` feature gate has reached Beta. The new policy controls whether and when StatefulSets delete PVCs created from `volumeClaimTemplate`.
    
-   `IPv6DualStack` was enabled by default after reaching GA in v1.23 and was completely removed from all component code in v1.27.
    
    If you have manually configured this in your cluster, you must remove the configuration before you upgrade the cluster.
    
-   The `ServiceNodePortStaticSubrange` feature gate in the Alpha stage is added to reduce conflicts in assigning ports to NodePort Services. This feature gate divides the port range for NodePort Services into two bands. Dynamic port assignment uses the high band. The low band with a lower risk of port conflicts can be used to statically assign ports to NodePort Services. For more information, see [Avoid Collisions Assigning Ports to NodePort Services](https://kubernetes.io/blog/2023/05/11/nodeport-dynamic-and-static-allocation/).
    
-   The `InPlacePodVerticalScaling` Alpha feature gate is added to allow you to adjust the CPU and memory resources of a pod without restarting the pod or containers.
    
-   The following feature gates for expanding volumes have reached GA and are enabled by default: `ExpandCSIVolumes` (expands CSI volumes), `ExpandInUsePersistentVolumes` (expands PVs that are in use), and `ExpandPersistentVolumes` (expands PVs).
    
-   The `CSIMigration` feature gate, which migrates in-tree storage plugins to out-of-tree CSI drivers, is always enabled by default and has been removed.
    
-   `CSIInlineVolume`, a feature gate for inline volumes, has reached GA in Kubernetes 1.25 and is always enabled by default. This feature gate is removed in Kubernetes 1.27.
    
-   The `EphemeralContainers` feature has reached GA in v1.25, is always enabled by default, and its feature gate has been removed.
    
-   The `LocalStorageCapacityIsolation` feature gate provides support for ephemeral storage capacity isolation of `emptyDir` volumes. This lets you set a hard limit on a pod's local storage usage. If the usage exceeds the limit, the pod is evicted by the kubelet. This feature gate has reached GA in Kubernetes 1.25 and is always enabled by default. The feature gate is removed in Kubernetes 1.27.
    
-   `NetworkPolicyEndPort` is a feature gate that lets you set the `endPort` field in network policies to specify multiple ports. Before this feature gate was introduced, you could specify only one port. This feature gate has reached GA in Kubernetes 1.25 and is always enabled by default. The feature gate is removed in Kubernetes 1.27.
    
-   The `StatefulSetMinReadySeconds` feature gate lets you configure `minReadySeconds` for StatefulSets. This feature gate has reached GA in Kubernetes 1.25 and is always enabled by default. The feature gate is removed in Kubernetes 1.27.
    
-   The `DaemonSetUpdateSurge` feature gate lets you configure `maxSurge` for DaemonSets. This feature gate reached GA in v1.25 and is always enabled by default. The feature gate has been removed.
    
-   The `IdentifyPodOS` feature gate lets you specify an operating system for pods. It reached GA in v1.25 and is always enabled by default. The feature gate has since been removed.
    
-   The `ReadWriteOncePod` feature gate has reached Beta and is enabled by default. This feature gate lets you access PVs in `ReadWriteOncePod` mode.
    

### In Kubernetes 1.28

-   The `NodeOutOfServiceVolumeDetach` feature gate has reached GA in Kubernetes 1.28 and is always enabled by default. When the `node.kubernetes.io/out-of-service` taint is added to mark a node as out-of-service, pods that do not tolerate this taint are forcefully deleted, and their volumes are immediately detached.
    
-   The `AdmissionWebhookMatchCondition` feature gate is enabled by default and lets you use [CEL expressions](https://kubernetes.io/docs/reference/using-api/cel/#cel-community-libraries) as webhook matching conditions.
    
-   The `UnknownVersionInteroperabilityProxy` feature gate has reached Alpha. This feature gate can send requests to the correct API server when multiple API server versions exist. For more information, see [Mixed Version Proxy](https://kubernetes.io/docs/concepts/architecture/mixed-version-proxy/).
    
-   The `IPTablesOwnershipCleanup` feature gate has reached GA and no longer creates the KUBE-MARK-DROP and KUBE-MARK-MASQ iptables chains.
    
-   The `ConsistentListFromCache` feature gate has reached Alpha. This feature gate allows the API server to use the watch cache to serve LIST requests, which guarantees consistent reads.
    
-   The `ProbeTerminationGracePeriod` feature gate has reached GA and is enabled by default. This feature gate lets you use [probe-level terminationGracePeriodSeconds](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#probe-level-terminationgraceperiodseconds).
    
-   The following feature gates in the GA stage are removed: `DelegateFSGroupToCSIDriver`, `DevicePlugins`, `KubeletCredentialProviders`, `MixedProtocolLBService`, `ServiceInternalTrafficPolicy`, `ServiceIPStaticSubrange`, and `EndpointSliceTerminatingCondition`.
    

## **References**

For the complete changelogs for Kubernetes 1.27 and 1.28, see [CHANGELOG-1.27](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.27.md#changelog-since-v1260) and [CHANGELOG-1.28](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.28.md#changelog-since-v1270).
