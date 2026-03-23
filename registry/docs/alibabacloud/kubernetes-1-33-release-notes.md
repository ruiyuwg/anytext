Alibaba Cloud Container Service for Kubernetes (ACK) is fully compliant with the community's conformance certification. This topic describes the major changes in ACK's release of Kubernetes 1.33, including upgrade considerations, major changes, new features, and deprecated features and APIs.

## Component versions

The following table lists the versions of the core components in an ACK cluster.

**Core component**

**Version number**

Kubernetes

1.33.1-aliyun.1 and 1.33.3-aliyun.1

etcd

v3.5.21

containerd

2.1.1

CoreDNS

v1.11.3.5-5321daf49-aliyun

CSI

Upgraded to the latest supported version. For more information, see the change logs for [csi-plugin](/help/en/ack/product-overview/csi-plugin#DAS) and [csi-provisioner](/help/en/ack/product-overview/csi-provisioner#DAS).

CNI

Flannel v0.15.1.22-20a397e6-aliyun

Terway and TerwayControlplane v1.14.0 and later

## **Upgrade considerations**

If your cluster contains pods that were created in Kubernetes 1.20 or earlier and have never had their containers restarted or updated, the pods will be restarted when the cluster is upgraded to Kubernetes 1.33.

## Major changes

-   In Kubernetes 1.33 and later, ACK uses containerd 2.1 by default. For existing clusters, ACK upgrades the container runtime to containerd 2.1 during node upgrades. For more information, see [Introduction to containerd 2.1](/help/en/ack/product-overview/introduction-to-containerd-2-1).
    
-   In Kubernetes 1.33 and later, newly created ACK managed clusters install the latest version of the ack-ram-authenticator component by default. For more information, see [\[Service Notice\] ack-ram-authenticator is installed by default on ACK managed clusters of v1.33 and later](/help/en/ack/product-overview/announcement-on-default-installation-of-ack-ram-authenticator-for-ack-managed-clusters-v1-33-and-later).
    

## Feature changes

-   [In-place pod resize](https://kubernetes.io/blog/2025/05/16/kubernetes-v1-33-in-place-pod-resize-beta/) is promoted to Beta and enabled by default. This feature lets you dynamically modify the CPU and memory resource configurations of a container without restarting the pod.
    
-   kubectl supports adjusting specific subresources using the `--subresources` command. For example, you can dynamically adjust the resource size of a pod by running `kubectl edit pod <pod-name> --subresource resize`. Subresources supported in Kubernetes 1.33 include `status`, `scale`, and `resize`.
    
-   EndpointSlice TopologyAwareHints is promoted to General Availability (GA). The Beta annotation `service.kubernetes.io/topology-mode` is deprecated. Use the `spec.trafficDistribution` field to define topology policies. For example, by setting `trafficDistribution` to `PreferClose`, you can route traffic to endpoints in the same zone as the client. For more information, see [Traffic distribution](https://kubernetes.io/docs/concepts/services-networking/service/#traffic-distribution).
    
-   The `.status.resize` field of a pod is deprecated and cannot be set. Two new condition fields are added: `PodResizeInProgress` and `PodResizePending`.
    
-   DisableNodeKubeProxyVersion is enabled by default and cannot be disabled. The kubelet no longer sets the `status.kubeProxyVersion` field of a node.
    
-   The `.spec.serviceName` field of a StatefulSet is now optional. The validation for this field is strengthened to ensure compliance with the DNS-1123 standard. If the `.spec.serviceName` field of an existing StatefulSet fails validation, you cannot create new pods until you manually remove the field. This update moves the DNS validation from the pod creation phase to the StatefulSet resource configuration phase. This reduces failed retries by the StatefulSet controller.
    
-   The Git-Repo volume plug-in is disabled by default. To use this plug-in, you must manually enable the `GitRepoVolumeDriver` feature gate.
    
-   Version 1.33.3-aliyun.1 fixes vulnerabilities [CVE-2025-4563](https://github.com/kubernetes/kubernetes/issues/132151).
    

## Features

-   [Sidecar containers](https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/) are promoted to GA and enabled by default. A sidecar container is a special type of init container. You can use `restartPolicy: Always` to ensure that it runs throughout the pod lifecycle. It also supports probe configuration.
    
-   OrderedNamespaceDeletion is promoted to Beta. This feature optimizes the resource release process for namespaces. When a namespace is deleted, workload pods are deleted first. Then, dependencies such as NetworkPolicy and storage resources are deleted. This prevents pods from remaining after critical security resources are deleted.
    
-   SupplementalGroupsPolicy is promoted to Beta and enabled by default. It supports fine-grained control of supplemental groups for a pod through the `.spec.securityContext.supplementalGroupsPolicy` field. This allows for more precise control over access permissions for persistent volumes. For more information, see [Configure fine-grained SupplementalGroups control for a Pod](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#supplementalgroupspolicy).
    
-   MultiCIDRServiceAllocator is promoted to GA and enabled by default. It introduces ServiceCIDR and IPAddress resources to record the ClusterIP allocations for services. It also supports dynamically expanding the allocatable range of ClusterIPs through ServiceCIDR.
    
-   JobBackoffLimitPerIndex is promoted to GA. It lets you specify the maximum number of pod retries for each index in an indexed job.
    
-   JobSuccessPolicy is promoted to GA. It lets you define custom success policies for a job. For example, you can determine job completion based on which indexes succeeded and the number of successful indexes. For more information, see [Job's SuccessPolicy Goes GA](https://kubernetes.io/blog/2025/05/15/kubernetes-1-33-jobs-success-policy-goes-ga/).
    
-   ImageVolume is promoted to Beta and is disabled by default. You must manually enable its feature gates on the apiserver and kubelet. This lets you use an `image` volume source in a pod to mount a container image as a read-only volume.
    
-   UserNamespacesSupport is promoted to Beta and enabled by default. It allows pods to use Linux user namespaces to improve container security. This feature does not affect existing pods. To use this feature, you must manually specify `pod.spec.hostUsers`. For more information, see [User Namespaces enabled by default](https://kubernetes.io/blog/2025/04/25/userns-enabled-by-default/).
    
-   RelaxedDNSSearchValidation is promoted to Beta and enabled by default. It allows the use of special characters, such as `.` and `_`, in the `.spec.dnsConfig.searches` field of a pod. This provides more flexibility for DNS configuration.
    
-   The kube-apiserver disables the WatchList mechanism by default. It now uses streaming encoding mechanisms, including [StreamingCollectionEncodingToJSON](https://github.com/kubernetes/enhancements/blob/4c66da9cbf355ff618642aea3d98d17111311646/keps/sig-api-machinery/5116-streaming-response-encoding/README.md) and StreamingCollectionEncodingToProtobuf. This change improves the performance of list operations by streaming responses for large-scale resource list requests. For list requests that contain many resources, this can significantly reduce memory usage and improve system stability. For more information, see [Streaming List responses](https://kubernetes.io/blog/2025/05/09/kubernetes-v1-33-streaming-list-responses/).
    
    The kube-controller-manager no longer actively enables the WatchListClient feature.
    
-   CPUManagerPolicyOptions is promoted to GA and enabled by default. It lets you fine-tune the resource allocation policies of the CPU Manager:
    
    -   When a pod requires exclusive CPUs, you can force Simultaneous Multithreading (SMT) alignment to ensure that the allocated CPUs exclusively occupy complete physical cores. For more information, see [cpu manager extension to reject non SMT-aligned workload](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/2625-cpumanager-policies-thread-placement/README.md).
        
    -   When CPU resources need to be allocated across Non-Uniform Memory Access (NUMA) nodes, you can ensure that CPU resources are evenly distributed across the NUMA nodes. For more information, see [Add CPUManager policy option to distribute CPUs across NUMA nodes instead of packing them](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/2902-cpumanager-distribute-cpus-policy-option/README.md).
        
-   MatchLabelKeysInPodAffinity is promoted to GA and enabled by default. It adds `matchLabelKeys` and `mismatchLabelKeys` to pod affinity rules for more precise control over pod colocation.
    
-   NodeInclusionPolicyInPodTopologySpread is promoted to GA and enabled by default. It lets you use `nodeAffinityPolicy` and `nodeTaintsPolicy` in [pod topology spread constraints](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/) to dynamically filter schedulable nodes.
    
    -   `nodeAffinityPolicy`: The default value is Honor. Only nodes that match the pod's `nodeSelector` or `nodeAffinity` are included in the topology spread calculation.
        
    -   `nodeTaintsPolicy`: The default value is Ignore. The `nodeAffinity` and `nodeSelector` rules are ignored, and all nodes are included in the topology spread calculation.
        
-   HonorPVReclaimPolicy is promoted to GA and enabled by default. It ensures that when the `reclaimPolicy` of a PV is set to `Delete`, the underlying storage resource is deleted according to the policy, regardless of the deletion order of the PV or PVC. This prevents storage resource leaks.
    
-   ProcMountType is promoted to Beta. It lets you customize the mount type of the /proc file system in a container using the pod's `securityContext.procMount` field. This provides fine-grained control over access to the /proc file system and improves pod security and isolation. This feature is useful for scenarios that require running unprivileged containers in user namespaces. Relaxing the restrictions on /proc improves compatibility and flexibility.
    
-   PodLifecycleSleepActionAllowZero is promoted to Beta. It allows setting the wait time for the `sleep` operation to 0 in the `preStop` container lifecycle callback.
    
-   You can use `ResourceQuota` to limit the number of PVCs associated with a specific Volume Attributes Class.
    
-   Scheduler performance optimizations:
    
    -   The SchedulerPopFromBackoffQ feature is added and enabled by default. It optimizes the processing logic of the scheduling queue by allowing pods to be popped directly from the backoffQ when the activeQ is empty. This significantly reduces pod scheduling latency.
        
    -   SchedulerAsyncPreemption is promoted to Beta and enabled by default. It allows preemptive scheduling to be converted to an asynchronous execution. Preemption is a costly operation. Making this operation asynchronous can effectively reduce scheduling latency.
        
    -   The scheduling performance for pods that use topology spread constraints is optimized.
        

## Deprecated APIs

-   Kubernetes 1.33 uses containerd 2.1 by default. containerd 2.1 no longer supports the CRI v1alpha2 API. If you depend on this API version, you must migrate to the CRI v1 API to ensure compatibility.
    
-   The v1 Endpoints API is officially deprecated. Use the EndpointSlice API instead. The EndpointSlice API has been stable since Kubernetes 1.21 and introduces features such as dual-stack network support. However, the v1 Endpoints API will not be deleted at this time. For more information, see [Continuing the transition from Endpoints to EndpointSlices](https://kubernetes.io/blog/2025/04/24/endpoints-deprecation/).
    
-   The apidiscovery.k8s.io/v2beta1 API group is disabled. Clients use this API to query information about all registered API resources in a cluster. You must migrate to the stable v2 version. Older clients can use a fallback mechanism to automatically use the unaggregated v1 API for service discovery, so clients will not immediately report errors. However, if a client is not updated for the v2 version, it must make multiple API calls to retrieve the complete unaggregated data. This may increase the number of requests and latency.
    

## References

For the complete changelog for Kubernetes 1.33, see [CHANGELOG-1.33](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md) and [Kubernetes v1.33: Octarine](https://kubernetes.io/blog/2025/04/23/kubernetes-v1-33-release/).
