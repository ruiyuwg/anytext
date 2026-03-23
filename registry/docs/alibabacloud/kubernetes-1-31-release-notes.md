Container Service for Kubernetes (ACK) strictly abides by the terms of the Certified Kubernetes Conformance Program. This topic describes the updates in Kubernetes 1.31, including update notes, major changes, new features, deprecated features and APIs, and feature gates.

## Component versions

Kubernetes 1.31 supports the following key component versions.

**Key component**

**Version**

Kubernetes

1.31.9-aliyun.1 and 1.31.1-aliyun.1

etcd

v3.5.15

containerd

1.6.34

CoreDNS

v1.11.3.2-f57ea7ed6-aliyun

CSI

Update csi-plugin and csi-provisioner to the latest versions. For more information about release notes, see [csi-plugin](/help/en/ack/product-overview/csi-plugin) and [csi-provisioner](/help/en/ack/product-overview/csi-provisioner).

CNI

Flannel v0.15.1.22-20a397e6-aliyun

Terway and TerwayControlplane 1.10.0 and later

**Note**

By default, the [Trunk ENI feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-static-ip-address-a-separate-vswitch-and-a-separate-security-group-for-each-pod#section-n67-ros-u0a) is enabled for newly created ACK managed clusters that use Terway as the network plug-in and run Kubernetes 1.31 or later versions.

## **Features**

-   If the `caBundle` field in a CustomResourceDefinition (CRD) is non-empty but is either invalid or does not contain CA certificates, the CRD will not provide services. To maintain uninterrupted service for the CRD, any updates that may render the `caBundle` field invalid or empty are prohibited once a valid `caBundle` is established.
    
-   The MatchLabelKeysInPodAffinity feature gate has reached beta and is enabled by default. To resolve scheduling issues during rolling updates of Deployments that violate the affinity and anti-affinity rules, you can specify the new fields [matchLabelKeys](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#matchlabelkeys) and [mismatchLabelKeys](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#mismatchlabelkeys) in `podAffinity` and `podAntiAffinity` for the scheduler to distinguish between the old and new pods.
    
-   The JobSuccessPolicy feature has reached beta and is enabled by default. You can configure a success policy for an Indexed Jobs. For more information, see [Job success policy](https://kubernetes.io/docs/concepts/workloads/controllers/job/#success-policy).
    
-   DisableNodeKubeProxyVersion has reached beta and is enabled by default. The `status.nodeInfo.kubeProxyVersion` field no longer displays the kube-proxy version. The value displayed in this field is not accurate and cannot provide the actual version of kube-proxy.
    
-   The ServiceAccountTokenNodeBinding feature has reached beta and is enabled by default. This feature allows you to bind a ServiceAccount token to a node. The token becomes invalid if it expires, or the associated node or ServiceAccount is deleted.
    
-   The RecursiveReadOnlyMounts feature has reached beta and is enabled by default. You can make the mount recursively read-only on volumes mounted to pods, and all their subdirectories and files will be set to read-only mode. For more information, see [Recursive read-only mounts](https://kubernetes.io/docs/concepts/storage/volumes/#recursive-read-only-mounts).
    
-   If the `spec` field of a pod changes but does not involve changes to the `image` field, the kubelet will not restart the container. This avoids unnecessary pod restarts due to non-functional configuration updates.
    
-   HonorPVReclaimPolicy has reached beta and is enabled by default. You can add finalizers on a persistent volume (PV) to ensure that the PV with the `Delete` reclaim policy is deleted only after the relevent backing storage is deleted. For more information, see [PersistentVolume deletion protection finalizer](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolume-deletion-protection-finalizer).
    
-   `kubectl debug` supports the configuration of custom profiling for troubleshooting pods. For more information, see [Kubernetes 1.31: Custom Profiling in Kubectl Debug Graduates to Beta](https://kubernetes.io/blog/2024/08/22/kubernetes-1-31-custom-profiling-kubectl-debug/).
    
-   By default, Kubernetes clients, such as `kubectl`, use WebSocket for streaming. The `kubectl cp`, `kubectl attach`, `kubectl exec`, and `kubectl port-forward` commands now use the WebSocket protocol instead of SPDY to stream, which is a more modern and flexible protocol.
    
-   The Kubernetes API server can achieve consistent reads from cache instead of fetching the entire dataset from etcd, which improves the efficiency of List requests. For more information, see [Consistent reads from cache](https://kubernetes.io/blog/2024/08/15/consistent-read-from-cache-beta/).
    

## **Feature changes**

-   The built-in CephFS volume plug-in `kubernetes.io/cephfs` was removed in this release and the [CephFS CSI driver](https://github.com/ceph/ceph-csi/) is used instead.
    
    If you are using the CephFS volume plug-in, you must re-deploy your application to use the new driver after you upgrade the cluster version to 1.31.
    
-   The built-in CephRBD volume plug-in `kubernetes.io/rbd` was removed and the [RBD CSI driver](https://github.com/ceph/ceph-csi/) is used instead.
    
    If you are using the CephRBD volume plug-in, you must re-deploy your application to use the new driver after you upgrade the cluster version to 1.31.
    
-   The CSIMigrationPortworx feature gate is enabled by default. Migration of volumes from the legacy embedded Portworx plug-in to the Portworx CSI plug-in is supported. Before you upgrade the cluster version to 1.31, if you are using Portworx as a storage solution, make sure to install and configure the corresponding Portworx CSI plug-in.
    
-   [Vulnerability CVE-2025-0426](/help/en/ack/product-overview/vulnerability-cve-2025-0426) and [Vulnerability CVE-2024-9042](https://github.com/kubernetes/kubernetes/issues/129654) are fixed in 1.31.9-aliyun.1.
    

## References

For more information about the release notes for Kubernetes 1.31, see [CHANGELOG-1.31](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#changelog-since-v1300) and [Kubernetes v1.31 release notes](https://kubernetes.io/blog/2024/08/13/kubernetes-v1-31-release/).
