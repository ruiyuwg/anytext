Alibaba Cloud Container Service for Kubernetes (ACK) conforms to the Kubernetes community conformance tests. This topic describes the major changes in the ACK release of Kubernetes 1.35, including component versions, major changes, feature updates, and deprecations.

## Component version guide

The following table lists the versions of the core components in an ACK cluster.

**Core component**

**Version number**

Kubernetes

1.35.1-aliyun.1, 1.35.2-aliyun.1

etcd

v3.5.21

containerd

2.1.5

CoreDNS

v1.12.1.2

CSI

Upgraded to the latest supported version of the component. For more information, see the changelogs for [csi-plugin](/help/en/ack/product-overview/csi-plugin#DAS) and [csi-provisioner](/help/en/ack/product-overview/csi-provisioner#DAS).

CNI

Flannel v0.28.0.6

Terway and TerwayControlplane v1.15.0 or later

## Major changes

-   Starting with version 1.35, Kubernetes no longer supports cgroup v1. Support for cgroup v2 became stable in version 1.25. The node operating system must support [cgroup v2](https://kubernetes.io/docs/concepts/architecture/cgroups/). Otherwise, the kubelet fails to start.
    
    > For information about cgroup version support in ACK operating system images, see [Operating systems](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-os-images/#task-2286366). For more information about how to change or upgrade an operating system, see [Change the operating system](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/replace-the-operating-system).
    

## Feature changes

-   The `PreferSameNode` option for the `trafficDistribution` field of a service is now Generally Available (GA). This option prioritizes routing traffic to endpoints on the same node and falls back to other nodes only if no endpoints are available on the local node.
    
    The feature gate `PreferSameTrafficDistribution` has been enabled by default since version 1.34 and supports both `PreferSameNode` and `PreferSameZone`. The original `PreferClose` option has been renamed to `PreferSameZone`.
    
-   `PodObservedGenerationTracking` is now stable (GA). When a pod's `spec` is updated, its `.metadata.generation` field increments. The kubelet records the version of the `spec` that it has processed in the pod's `.status.observedGeneration` field. This allows controllers and Operators to accurately determine whether a pod change, such as an in-place scaling, has taken effect on the node. This helps prevent issues caused by status update delays.
    
-   The topology manager policy option `max-allowable-numa-nodes` ([max-allowable-numa-nodes](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager/#policy-option-max-allowable-numa-nodes)) is now stable (GA). The topology manager can now correctly calculate affinity on servers with more than 8 NUMA nodes.
    
-   The Downward API now supports injecting node topology labels, such as `topology.kubernetes.io/zone` and `topology.kubernetes.io/region`, into pods.
    
-   `StorageVersionMigrator` is now in Beta and is disabled by default. This feature moves the Storage Version Migration capability from an external tool to an internal Kubernetes implementation. For more information, see [Move Storage Version Migrator in-tree](https://github.com/kubernetes/enhancements/blob/master/keps/sig-api-machinery/4192-svm-in-tree/README.md).
    
-   `MutableCSINodeAllocatableCount` is now enabled by default. This allows Container Storage Interface (CSI) drivers to periodically update the number of allocatable volumes on a node. This helps resolve issues where outdated allocatable volume information could cause pods to be scheduled on nodes with insufficient volume capacity, causing them to become stuck in the `ContainerCreating` state.
    
-   With the introduction of [Opportunistic batching](https://github.com/kubernetes/enhancements/blob/master/keps/sig-scheduling/5598-opportunistic-batching/README.md), the scheduler can cache intermediate scheduling results. This significantly improves the scheduling throughput for similar pods.
    
-   `MaxUnavailableStatefulSet` is now in Beta and is enabled by default. This feature lets you set the `maxUnavailable` field for the rolling update policy of a StatefulSet. This field specifies the maximum number of unavailable pods during an update.
    
-   The Pod Certificates feature is now in Beta and is disabled by default. This feature allows pods to generate certificates for mutual authentication with the kube-apiserver. It also supports automatic certificate rotation, which provides a more secure authentication method than traditional ServiceAccount tokens. For more information, see [KEP-4317: Pod Certificates](https://github.com/kubernetes/enhancements/tree/master/keps/sig-auth/4317-pod-certificates).
    
-   Kubectl now supports the KYAML format. KYAML is a subset of YAML designed for Kubernetes to address ambiguities and security vulnerabilities found in standard YAML parsing. You can disable this feature by setting the `KUBECTL_KYAML=false` environment variable. For more information, see [Introducing KYAML](https://github.com/kubernetes/enhancements/blob/master/keps/sig-cli/5295-kyaml/README.md).
    
-   The `behavior` field of the HorizontalPodAutoscaler (HPA) now supports the configuration of a tolerance threshold. Previously, scaling decisions relied on a fixed global tolerance of 10%. You can now configure this threshold flexibly based on your requirements.
    
-   The [User Namespaces](https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/127-user-namespaces) feature is now in Beta. This feature allows a pod to run in a user namespace that is isolated from the host. Container processes can run as root (UID 0) within their namespace but are mapped to an unprivileged, non-zero user ID on the host. This reduces the security risk of privilege escalation from a container escape.
    
-   `ImageVolume` is now enabled by default. This lets you use volumes of type `image` in a pod. This type of volume can mount the contents of a container image as a read-only volume in the pod. To use this feature, containerd must be version 2.1 or later.
    
-   `KubeletEnsureSecretPulledImages` is now in Beta and is enabled by default. This feature improves security in multi-tenant clusters by enforcing credential checks for pods that use `imagePullPolicy: IfNotPresent`. This prevents a scenario in which a pod with credentials pulls a private image to a node, and other pods on the same node without credentials can then access that sensitive image from the local cache.
    
-   `ContainerRestartRules` is now in Beta and is enabled by default. This feature enables more granular, container-level restart policy configuration. You can override the pod-level restart policy by specifying the `restartPolicy` and `restartPolicyRules` fields for a container. For more information, see [Individual container restart policy and rules](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-restart-rules).
    
-   CSI drivers now support setting the `spec.serviceAccountTokenInSecrets` field in the `CSIDriver` object to `true`. This allows mounting ServiceAccount tokens through a Secret instead of placing them directly in the `volume context`. This helps prevent credentials from being accidentally exposed in logs and error messages. For more information, see [CSI driver opt-in for service account tokens via secrets field](https://github.com/kubernetes/enhancements/blob/master/keps/sig-storage/5538-csi-sa-tokens-secrets-field/README.md).
    
-   The Deployment object now includes a new `terminatingReplicas` field. This field records the number of pods that have a deletion timestamp but have not yet been fully removed from the system.
    
-   Version 1.35.2-aliyun.1 fixes CVE-2025-61732 and CVE-2025-68121.
    

## Deprecation notes

-   Starting with version 1.35, the `ipvs` mode for kube-proxy is deprecated and will be removed in a future version. The recommended replacement is [nftables mode](https://kubernetes.io/docs/reference/networking/virtual-ips/#proxy-mode-nftables), which has been stable since v1.33. Because `nftables` mode is relatively new, ACK continues to use `ipvs` mode by default for new clusters. Support for `nftables` mode is planned for a future release.
    
    > You can use Terway [Datapath V2](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#0638d4c37al74), which does not rely on kube-proxy.
    
-   Version 1.35 is the last version to support containerd 1.x. You must upgrade containerd to version 2.x before you upgrade to Kubernetes 1.36 or later. ACK clusters have used containerd 2.x by default since version 1.33. For more information, see [Introduction to containerd 2.1](/help/en/ack/product-overview/introduction-to-containerd-2-1).
    

## Reference links

For the complete Kubernetes 1.35 changelog, see [CHANGELOG-1.35](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md) and [Kubernetes v1.35: Timbernetes (The World Tree Release)](https://kubernetes.io/blog/2025/12/17/kubernetes-v1-35-release/).
