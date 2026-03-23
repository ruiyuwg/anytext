Container Service for Kubernetes (ACK) strictly abides by the terms of the Certified Kubernetes Conformance Program. This topic describes the updates in Kubernetes v1.32, including description, major changes, new features, deprecated features and APIs, and feature gates.

## Component versions

ACK clusters support the following key component versions:

**Key component**

**Version**

Kubernetes

1.32.1-aliyun.1 and 1.32.7-aliyun.1

etcd

3.5.15

containerd

1.6.36

CoreDNS

1.11.3.2-f57ea7ed6-aliyun

CSI

Update csi-plugin and csi-provisioner to the latest versions. For more information about release notes, see [csi-plugin](/help/en/ack/product-overview/csi-plugin) and [csi-provisioner](/help/en/ack/product-overview/csi-provisioner).

CNI

Flannel 0.15.1.22-20a397e6-aliyun

Terway and TerwayControlplane are both 1.10.0 or later

## Major changes

-   Starting from v1.32, the following changes apply:
    
    -   When you create an ACK cluster by calling API operations through the [CreateCluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-createcluster) interface, the default Proxy Mode of kube-proxy is changed from iptables to IP Virtual Server (IPVS). This change only affects new clusters. Existing clusters upgraded to v1.32 retain their current kube-proxy Proxy Mode.
        
    -   kube-apiserver no longer supports the `TLS_RSA_WITH_AES_256_GCM_SHA384` and `TLS_RSA_WITH_AES_128_GCM_SHA256` Transport Layer Security (TLS) cipher suites. Existing clusters upgraded to v1.32 will automatically apply this change.
        
    -   When you enable the RAM Roles for Service Accounts (RRSA) feature, the `--api-audiences` parameter of `kube-apiserver` will no longer be modified and will retain the configuration value set prior to enabling RRSA. This change only affects clusters that have not enabled RRSA. Existing clusters that have enabled RRSA and are upgraded to v1.32 will not be impacted.
        
    -   [NVIDIA Device Plugin can be configured and managed through the console](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/gpu-device-plugin-related-operations), with its deployment mode transitioning from Static Pod to DaemonSet.
        
-   The annotation `kubernetes.io/enforce-mountable-secrets` of ServiceAccount is deprecated in v1.32. We recommend that you use separate namespaces to isolate access to Secrets.
    
-   The `DRAControlPlaneController` feature gate has been in alpha since v1.26. It is disabled by default, and is no longer available. If you have enabled and used this feature, remove the related resources before upgrading to avoid abnormal workloads post-upgrade. For more information, see [#128003](https://github.com/kubernetes/kubernetes/pull/128003).
    
-   In v1.32.7-aliyun.1, [CVE-2025-4563](https://github.com/kubernetes/kubernetes/issues/132151) is fixed.
    

## Other highlights

-   The `WatchList` feature gate reaches beta and is enabled by default. Normally, list operations consume more control plane resources. With the WatchListClient feature enabled, the client-go client can use streaming requests instead of full list operations, reducing control plane resource consumption. The kube-controller-manager component enables this feature by default. For more information, see [Enhancing Kubernetes API Server Efficiency with API Streaming](https://kubernetes.io/blog/2024/12/17/kube-apiserver-api-streaming/).
    
-   The `RelaxedEnvironmentVariableValidation` feature gate reaches beta and is enabled by default. This feature allows for more flexible environment variable names, supporting almost all ASCII printable characters, excluding the equal sign (=).
    
-   The display of pod status is optimized. When an image pull fails, the `status.containerStatuses[*].state.waiting` field of the pod records the reason for the failure (`ImagePullBackOff`), along with specific failure details.
    
-   The `CustomResourceFieldSelectors` feature gate reaches General Availability (GA) in v1.32 and is enabled by default. This feature allows for the use of `selectableFields` in CustomResourceDefinition (CRD) to filter CRD resources more efficiently and accurately.
    
-   The `StatefulSetAutoDeletePVC` feature gate reaches GA in v1.32 and is enabled by default. It allows for automatic cleanup of persistent volume claims (PVCs) when they are no longer needed by the StatefulSet, reducing the impact of orphaned PVCs. Automatic PVC cleanup is not triggered during the process of StatefulSet updates and node maintenance.
    
-   The `JobManagedBy` feature gate reaches beta and is enabled by default. It allows Jobs to be reconciled by an external controller by configuring the `spec.managedBy` field, thereby offering more flexibility in Job scheduling and management.
    
    The `managedBy` field cannot be set to `kubernetes.io/job-controller`, because this is reserved for the built-in Kubernetes controller.
    
-   All scheduler plug-ins implement the `QueueingHint` function, which quickly determines whether each incoming event could make the pod schedulable. This reduces unnecessary scheduling attempts and enhances scheduling throughput. For more information, see [QueueingHint Brings a New Possibility to Optimize Pod Scheduling](https://kubernetes.io/blog/2024/12/12/scheduler-queueinghint/).
    
-   The `RecoverVolumeExpansionFailure` feature gate reaches beta and is enabled by default. It allows users to manually reduce the `.spec.resources` of a PVC, enabling the PVC to recover from expansion failures quickly and without data loss. For more information, see [Recovering from Failure when Expanding Volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#recovering-from-failure-when-expanding-volumes).
    
-   The `AuthorizeWithSelectors` and `AuthorizeNodeWithSelectors` feature gates are promoted to beta, with the latter dependent on the former for joint use. Once activated, `AuthorizeNodeWithSelectors` allow the node authorizer to use more precise selection operators, such as `fieldSelector` and `labelSelector`, for enhanced authorization flexibility within the Kubernetes system. The kubelet is granted only essential permissions, allowing it to read only its associated node object and pods assigned to that node. For more information, see [Using Node Authorization](https://kubernetes.io/docs/reference/access-authn-authz/node/).
    
-   The `PodLogOptions` parameter for client requests to pod logs includes the `Stream` field, which enables real-time streaming of container logs to the client without waiting for the entire log file to be downloaded. Note that the `Stream` and `TailLines` fields cannot be used simultaneously.
    
-   The `JobController` is optimized to significantly improve the efficiency of Job updates and deletions, particularly in scenarios with extensive Job usage. For more information, see [#126567](https://github.com/kubernetes/kubernetes/pull/126567), [#127228](https://github.com/kubernetes/kubernetes/pull/127228), and [#127378](https://github.com/kubernetes/kubernetes/pull/127378).
    
-   kube-proxy uses `fieldSelector: clusterIP!=None` when you update a Service to avoid monitoring Headless Services, reducing unnecessary network bandwidth. For more information, see [#126769](https://github.com/kubernetes/kubernetes/pull/126769).
    

## Deprecated API

-   The `flowcontrol.apiserver.k8s.io/v1beta3` API version of `FlowSchema` and `PriorityLevelConfiguration` is no longer serviced in v1.32. We recommend that you migrate to the `flowcontrol.apiserver.k8s.io/v1` API version, which has been available since v1.29.
    
    In the `flowcontrol.apiserver.k8s.io/v1` API version, the `spec.limited.nominalConcurrencyShares` field of `PriorityLevelConfiguration` defaults to 30 when unspecified. However, if it is explicitly set to `0`, it will not be changed to `30`.
    

## Reference

For the complete changelog of Kubernetes 1.32, see [CHANGELOG-1.32](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md) and [Kubernetes v1.32: Penelope](https://kubernetes.io/blog/2024/12/11/kubernetes-v1-32-release/).
