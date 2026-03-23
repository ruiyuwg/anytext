Container Service for Kubernetes (ACK) strictly abides by the terms of the Certified Kubernetes Conformance Program. This topic describes the changes that ACK has made to support Kubernetes 1.26.

## **Table of contents**

-   [Version updates](#section-tjk-nrf-dim)
    
-   [Update notes](#section-j7y-vcn-r4p)
    
-   [Enhancements to Kubernetes 1.26](#84e0e940f9cqk)
    
-   [References](#section-plw-lp9-axv)
    

## Version updates

Components are updated and optimized by ACK to support Kubernetes 1.26.

**Key component**

**Version number**

**Description**

Kubernetes

1.26.15-aliyun.1 and 1.26.3-aliyun.1

-   A large number of enhancements are made to Kubernetes 1.26. Before you update your cluster, read [Update notes](#section-j7y-vcn-r4p).
    
-   A large number of beta APIs are deprecated in Kubernetes 1.25 and 1.26. Before you update your cluster to Kubernetes 1.26, check whether the controller or application that needs to interact with the deprecated beta APIs is updated to use the recommended API versions. For more information about the deprecated APIs, see [Deprecated APIs](#p-lne-g7f-23d).
    
-   Kubernetes 1.26 no longer supports Container Runtime Interface (CRI) v1alpha2 but requires the container runtime to support CRI v1. Therefore, make sure that containerd 1.6 or later is used in Kubernetes 1.26. Before you update your cluster to Kubernetes 1.26, you need to first update containerd to 1.6.0 or later.
    
-   The PodSecurityPolicy (PSP) admission controller is deprecated in Kubernetes 1.21 and removed from Kubernetes 1.25. The PSP admission controller is complex and can cause security issues because it may provide excessive permissions. For more information about the replacement for the PSP admission controller, see [Update notes](#section-j7y-vcn-r4p).
    
-   By default, the read-only port 10255 that is used by the kubelet to expose container metrics is no longer open in ACK clusters that run Kubernetes 1.26 or later. The authentication port 10250 is open and used by the kubelet instead. For more information, see [\[Product Changes\] Open the authentication port instead of the read-only port for the kubelet in ACK clusters that run Kubernetes versions earlier than 1.26](/help/en/ack/product-overview/product-updates-replace-the-monitoring-port-with-authentication-port-in-ack-clusters-of-earlier-versions).
    

etcd

v3.5.4

None

CoreDNS

1.9.3.10-7dfca203-aliyun

None

CRI

Containerd 1.6.20

Only Kubernetes 1.24.0 and later are supported.

CSI

Update csi-plugin and csi-provisioner to the latest versions. For more information about release notes, see [csi-plugin](/help/en/ack/product-overview/csi-plugin) and [csi-provisioner](/help/en/ack/product-overview/csi-provisioner).

None

CNI

Flannel v0.15.1.22-20a397e6-aliyun

None

Terway & TerwayControlplanev1.5.0 +

None

NVIDIA Container Runtime

v3.13.0

Only Kubernetes 1.26 supports NVIDIA Container Runtime v3.13.0. Other Kubernetes versions support NVIDIA Container Runtime v3.7.0.

Ingress Controller

v1.6.4-aliyun.1

None

## Update notes

### Major changes

-   A large number of beta APIs are deprecated in Kubernetes 1.25 and 1.26. Before you update your cluster to Kubernetes 1.26, check whether the controller or application that needs to interact with the deprecated beta APIs is updated to use the recommended API versions. For more information about the deprecated APIs, see [Deprecated APIs](#p-lne-g7f-23d).
    
-   Kubernetes 1.26 no longer supports CRI v1alpha2 but requires the container runtime to support the CRI v1. Therefore, Kubernetes 1.26 does not support containerd 1.5 or earlier. Make sure that containerd 1.6 or later is used in Kubernetes 1.26. Before you update your cluster to Kubernetes 1.26, you need to first update containerd to 1.6.0 or later.
    
-   The PSP admission controller is deprecated in Kubernetes 1.21 and removed from Kubernetes 1.25. The PSP admission controller is complex and can cause security issues because it may provide excessive permissions. For more information, see [PodSecurityPolicy: The Historical Context](https://kubernetes.io/blog/2022/08/23/podsecuritypolicy-the-historical-context/).
    
    For clusters where the PSP admission controller can be used, set one of the following limits before you update the clusters.
    
    -   Use the policy management feature provided by ACK. ACK provides more policies that best suit Kubernetes scenarios. These policies are easy to configure and use. For more information, see [Enable the policy governance feature](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/configure-and-enforce-ack-pod-security-policies#task-2148676).
        
    -   Use the user-friendly built-in pod security admission. For more information, see [Pod Security Admission](https://kubernetes.io/docs/concepts/security/pod-security-admission/). For more information about how to migrate from PodSecurityPolicy to the built-In PodSecurity admission controller, see [Migrate from PodSecurityPolicy to the Built-In PodSecurity Admission Controller](https://kubernetes.io/docs/tasks/configure-pod-container/migrate-from-psp/).
        
    -   Manually deploy and configure a third-party admission plug-in.
        
    
-   The following CVE vulnerabilities are fixed in 1.26.15-aliyun.1:
    
    -   CVE-2023-45288
        
    -   CVE-2024-3177
        
    -   CVE-2024-24786
        

### New features

-   A beta version of ephemeral containers is used in Kubernetes 1.23 and a stable version is used in Kubernetes 1.25. If the pod that you want to check has crashed or you do not have a debugging tool to run `kubectl exec`, you can run ephemeral containers in the pod to check the status of the pod and run arbitrary commands. For more information, see [Ephemeral Containers.](https://kubernetes.io/docs/concepts/workloads/pods/ephemeral-containers/)
    
-   cgroup v2 in Kubernetes 1.25 reaches the Stable phase. cgroup v2 is an optimized version of cgroup v1. For more information, see [About cgroup v2](https://kubernetes.io/docs/concepts/architecture/cgroups/).
    
-   Support for Windows in Kubernetes 1.25 is continuously optimized. For example, [CI unit tests](https://github.com/kubernetes/kubernetes/issues/51540) and [conformance tests](https://github.com/kubernetes/kubernetes/pull/108592) are supported and [a new repository can be created for Windows operational readiness](https://github.com/kubernetes-sigs/windows-operational-readiness).
    
-   In Kubernetes 1.25, image registry k8s.gcr.io is redirected to registry.k8s.io and requests are also redirected to registry.k8s.io. For more information, see [k8s.gcr.io Redirect to registry.k8s.io](https://kubernetes.io/blog/2023/03/10/image-registry-redirect/).
    
-   In Kubernetes 1.25, the EndPort field in network policies reaches the General Availability (GA) phase. If your network plug-in supports the EndPort field, you can use this field to specify a range of ports when configuring a network policy. If your network plug-in does not support the EndPort field and you create a network policy with this field, the policy will be applied only for the single port field. For more information, see [Network Policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/#targeting-a-range-of-ports).
    
-   In Kubernetes 1.25, local ephemeral storage capacity isolation reaches the GA (official release) phase. This feature provides support for capacity isolation of local ephemeral storage between pods, such as EmptyDir volumes. Pods can be hard limited in their consumption of local ephemeral storage. A pod is evicted if its consumption of local ephemeral storage exceeds the upper limit. For more information, see [Local Ephemeral Storage Capacity Isolation](https://github.com/kubernetes/enhancements/tree/master/keps/sig-storage/361-local-ephemeral-storage-isolation).
    
-   In Kubernetes 1.25, ephemeral CSI volumes are updated to a stable version. When ephemeral CSI volumes are used, you cannot directly specify CSI volumes originated from persistent volumes (PVs) and persistent volume claims (PVCs) in the Spec of a pod. For more information, see [Ephemeral Inline CSI volumes](https://github.com/kubernetes/enhancements/tree/master/keps/sig-storage/596-csi-inline-volumes).
    
-   In Kubernetes 1.25, the Key Management Service (KMS) v2 alpha1 API is introduced to improve performance and optimize key rotation and observability. The API replaces AES-CBC with AES-GCM, and uses DEK to encrypt static data (Kubernetes Secrets). No additional operations are required during the encryption process. The encrypted data can be decrypted by using AES-GCM and AES-CBC. For more information, see [Using a KMS provider for data encryption](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/).
    
-   In Kubernetes 1.25, the [Container Object Storage Interface (COSI)](https://kubernetes.io/blog/2022/09/02/cosi-kubernetes-object-storage-management/) standard is introduced to standardize the provisioning and consuming of object storage. The COSI is in the Alpha phase.
    
-   In Kubernetes 1.25, if [PodHasNetwork](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-has-network) in the `status` field of a pod is True, the pod runtime sandbox is initialized and created, and the network of the sandbox is configured. This is because the kubelet starts to pull images to launch containers only after PodHasNetwork is set to True. Therefore, this field can be used to indicate the pod initialization latency, excluding characteristics such as the image pulling speed and application loads. You can use PodHasNetwork to accurately generate service level indicators (SLIs). PodHasNetwork is in the Alpha phase. If you want to use PodHasNetwork, enable the PodHasNetworkCondition feature gate on the kubelet. For more information, see [How is this different from the existing Initialized condition reported for pods?](https://kubernetes.io/blog/2022/09/14/pod-has-network-condition/#how-is-this-different-from-the-existing-initialized-condition-reported-for-pods)
    
-   In Kubernetes 1.25, the minReadySeconds field for StatefulSets reaches the Stable phase. This field allows each pod to wait a specified period of time in order to slow down the rolling updates of StatefulSets. For more information, see [Minimum ready seconds](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#minimum-ready-seconds).
    
-   In Kubernetes 1.25, DaemonSet maxSurge reaches the Stable phase. maxSurge specifies the number of extra pods that can be created on a node during a DaemonSet rolling update. This helps reduce the downtime of the DaemonSet to the maximum extent. You cannot use maxSurge and hostPort at the same time in DaemonSets because two active pods cannot share the same port on a node. For more information, see [Perform a Rolling Update on a DaemonSet](https://kubernetes.io/docs/tasks/manage-daemon/update-daemon-set/).
    
-   In Kubernetes 1.25, alpha support for running pods with user namespaces is added. In a user namespace, you can map a root user inside a pod to a non-zero ID outside the pod. The ID is a root user ID from the container view and a regular unprivileged ID from the host view. To use this feature, you need to enable the UserNamespacesStatelessPodsSupport feature gate and ensure that the container runtime supports this feature. For more information, see [Kubernetes 1.25: alpha support for running Pods with user namespaces](https://kubernetes.io/blog/2022/10/03/userns-alpha/).
    
-   In Kubernetes 1.25, the RetroactiveDefaultStorageClass feature gate is added to change the way how a default StorageClass is allocated to a PVC. Before this feature gate is enabled, a default StorageClass is allocated to a PVC only if the StorageClass is created prior to the PVC. Otherwise, the StorageClass of the PVC remains in the nil state. After this feature gate is enabled, you no longer need to delete and then recreate such as a PVC. A default StorageClass can be automatically allocated to the PVC. This feature gate will reach the Beta phase in Kubernetes 1.26 and is enabled by default in Kubernetes 1.26.
    
-   In Kubernetes 1.25, JobPodFailurePolicy is added. This feature allows you to configure a Job to handle pod disruptions based on the exit codes and status of the pods. This feature reaches the Beta phase in Kubernetes 1.26. You can define the podFailurePolicy field in a Job to configure a pod failure policy to avoid unnecessary pod retries and ignore pod evictions. For more information, see [Handling retriable and non-retriable pod failures with Pod failure policy](https://kubernetes.io/docs/tasks/job/pod-failure-policy/).
    
-   In Kubernetes 1.25, the issue that PodTopologySpread cannot evenly spread pods during rolling updates is fixed. Beta support for the minDomains field is added.
    
-   In Kubernetes 1.25, kube-proxy is optimized for large clusters. For example, in a cluster that has 1,000 endpoints, unused iptables rules are retained for a period of time. The maximum retention period equals the maximum synchronization cycle of iptables rules. Therefore, you no longer need to scan old iptables rules each time. In small clusters, unused iptables rules are immediately deleted.
    
-   In Kubernetes 1.26, the [dynamic resource allocation](https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/) API is added. The API can be used to request and share resources between pods or between containers in a pod. The API also provides parameters for you to initialize resources. The API is in the Alpha phase. To use this API, you need to enable the DynamicResourceAllocation feature gate and the resource.k8s.io/v1alpha1 API group, and install a resource driver for the resources that you want to manage. For more information, see [Alpha API For Dynamic Resource Allocation](https://kubernetes.io/blog/2022/12/15/dynamic-resource-allocation/).
    
-   In Kubernetes 1.26, [non-graceful node shutdown](https://kubernetes.io/docs/concepts/architecture/nodes/#non-graceful-node-shutdown) reaches the Beta phase. When a node is shut down, the pods on the node will be stuck in the Terminating state and VolumeAttachments cannot be deleted. If the pods are created by a StatefulSet, the pods cannot be recreated on another node because duplicate pod names are not allowed. Compared with [graceful node shutdown](https://kubernetes.io/docs/concepts/architecture/nodes/#graceful-node-shutdown) based on node shutdown monitoring performed by kubelet, you need to manually add the `out-of-service` taint to a node to trigger non-graceful node shutdown and migrate the pods on the node to another node. After the node recovers, you need to manually delete the taint.
    
-   In Kubernetes 1.26, you can delegate fsGroup to the CSI driver when mounting a volume to a pod. This feature provides a mechanism for the CSI driver to apply fsGroup instead of the kubelet to change permissions on files and directories. This feature is transparent to users. If you are a CSI driver developer, refer to [CSI Driver fsGroup Support](https://kubernetes-csi.github.io/docs/support-fsgroup.html).
    
-   In Kubernetes 1.26, a pod scheduling gate is added to inform the scheduler when a pod is ready for scheduling. When a large number of pending pods cannot be scheduled due to external events, the performance of the scheduler is adversely affected. To resolve the preceding issue, the pod scheduling gate allows you to claim that newly created pods are not ready for scheduling. If `spec.schedulingGates` is configured for a pod, the scheduler ignores the pod when scheduling pods. This gate requires an external controller to confirm when the pod is ready for scheduling and then delete the gate. For more information, see [Pod Scheduling Readiness](https://kubernetes.io/docs/concepts/scheduling-eviction/pod-scheduling-readiness/).
    
-   In Kubernetes 1.26, the CPU manager reaches the GA phase. This feature has reached the Beta phase in Kubernetes 1.10. The CPU manager is a part of the kubelet and is used to allocate exclusive CPUs to containers. The CPU manager supports three policies. For more information, see [Control CPU Management Policies on the Node](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/).
    
-   In Kubernetes 1.26, alpha support for cross-namespace storage data sources is added. This feature allows you to specify a data source that belongs to different namespaces for a PVC. For more information, see [Kubernetes v1.26: Alpha support for cross-namespace storage data sources](https://kubernetes.io/blog/2023/01/02/cross-namespace-data-sources-alpha/).
    
-   In Kubernetes 1.26, you can specify the `.spec.unhealthyPodEvictionPolicy=AlwaysAllow` policy to force a PodDisruptionBudget to always allow the eviction of unhealthy pods. This feature is in the Alpha phase. To use this feature, you need to enable the PDBUnhealthyPodEvictionPolicy feature gate. For more information, see [Unhealthy Pod Eviction Policy](https://kubernetes.io/docs/tasks/run-application/configure-pdb/#unhealthy-pod-eviction-policy).
    
-   In Kubernetes 1.26, `httpGet` for container lifecycle hooks preStop and postStart conforms to the settings of the `scheme` and `headers` fields. You can configure custom headers and enable HTTPS in the same way as probes. If HTTPS is accidentally used, error messages are returned and the system switches to HTTP without causing compatibility issues. You can specify `--feature-gates=ConsistentHTTPGetHandlers=false` on the kubelet to disable this feature.
    
-   In Kubernetes 1.26, API Priority and Fairness (APF) can borrow seats from other priority levels. Two fields are added to `.spec.limited`. The `lendablePercent` field specifies the percentage of seats that can be borrowed by other priority levels from the current level. The `borrowingLimitPercent` field specifies the number of seats that can be borrowed from other priority levels.
    
-   In Kubernetes 1.26, you can set `--concurrent-horizontal-pod-autoscaler-syncs` for the kube-controller-manager component to specify the number of workers used by the Horizontal Pod Autoscaler (HPA) controller.
    
-   In Kubernetes 1.26, label selectors are verified for HPAs. When multiple HPAs point to the same collection of pods or Deployment, the HPAs do not take effect and an AmbiguousSelector event is generated.
    
-   In Kubernetes 1.26, when multiple StorageClasses are specified as default StorageClasses by adding the `storageclass.kubernetes.io/is-default-class` annotation, the system selects the latest StorageClass instead of throwing an exception.
    

### Deprecated features

-   **Deprecated and removed storage drivers**
    
    -   In Kubernetes 1.25, in-tree storage plug-ins are removed for storage integration. SIG Storage released [CSI migration](https://kubernetes.io/blog/2021/12/10/storage-in-tree-to-csi-migration-status-update/#quick-recap-what-is-csi-migration-and-why-migrate) to migrate in-tree storage plug-ins to the out-of-tree Container Storage Interface (CSI) plug-in in earlier Kubernetes versions. In Kubernetes 1.25, [core CSI migration](https://github.com/kubernetes/enhancements/tree/master/keps/sig-storage/625-csi-migration) reaches the GA phase.
        
    -   In Kubernetes 1.25, the [GlusterFS](https://github.com/kubernetes/enhancements/issues/3446) and [Portworx in-tree](https://github.com/kubernetes/enhancements/issues/2589) storage plug-ins are deprecated, and the [Flocker](https://github.com/kubernetes/kubernetes/pull/111618), [Quobyte](https://github.com/kubernetes/kubernetes/pull/111619), and [StorageOS](https://github.com/kubernetes/kubernetes/pull/111620) in-tree storage plug-ins are removed. The [In-tree vSphere storage driver](https://github.com/kubernetes/kubernetes/pull/111255) does not support vSphere versions earlier than 7.0u2.
        
    -   In Kubernetes 1.26, the GlusterFS in-tree storage driver is deprecated and the deprecated [OpenStack](https://github.com/kubernetes/enhancements/issues/1489) in-tree storage integration (Cinder volumes) is removed.
        
-   **Clean up iptables chain ownership**
    
    Kubernetes usually creates iptable chains to ensure that packets can reach their destinations. Iptable chains and their names are internal implementations of Kubernetes and are suitable only for internal use. Some components rely on iptable chains but these chains are not intended to be part of any components in Kubernetes. For more information, see [Kubernetes’s IPTables Chains Are Not API](https://kubernetes.io/blog/2022/09/07/iptables-chains-not-api/).
    
    In Kubernetes versions later than 1.25, the kubelet uses the IPTablesCleanup feature gate to complete migration progressively. This helps avoid creating iptable chains, such as KUBE-MARK-DROP, KUBE-MARK-MASQ, and KUBE-POSTROUTING, in the NAT table.
    
    For more information about cleaning up iptable chain ownership, see [Cleaning up IPTables Chain Ownership](https://github.com/kubernetes/enhancements/issues/3178).
    
-   **Remove in-tree credential management code**
    
    In Kubernetes versions later than 1.26, the nested identity authentication code for Azure and Google Cloud is removed from client-go and kubectl. It can be replaced by using authentication plug-ins. For more information, see [Authentication plug-ins](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#client-go-credential-plugins).
    
-   **Remove user-space mode from kube-proxy**
    
    -   In Kubernetes 1.26, the userspace mode is removed. The deprecated userspace mode is no longer supported by Linux or Windows. Linux users can use iptables or IPVS, and Windows users can use the kernelspace mode. Errors are returned if you use `--mode userspace`.
        
    -   Windows winkernel kube-proxy no longer supports Windows HNS v1 APIs.
        
-   **Kubectl deprecated the** `**--prune-whitelist**` **flag**
    
    In Kubernetes 1.26, the `--prune-whitelist` flag is [deprecated](https://github.com/kubernetes/kubernetes/pull/113116) and replaced by `--prune-allowlist` to support [Inclusive Naming Initiative](https://www.cncf.io/announcements/2021/10/13/inclusive-naming-initiative-announces-new-community-resources-for-a-more-inclusive-future/). The deprecated flag will be removed in later versions.
    
-   **Remove the DynamicKubeletConfig feature gate**
    
    The DynamicKubeletConfig feature gate is removed. The kubelet configuration of nodes can be dynamically updated by calling the API. The feature gate is removed from the kubelet in Kubernetes 1.24 and removed from the API server in Kubernetes 1.26. This simplifies the code and improves stability. We recommend that you modify the kubelet configuration file instead and then restart the kubelet. For more information, see [remove DynamicKubeletConfig feature gate from the code](https://github.com/kubernetes/kubernetes/pull/112643).
    
-   **Remove command line arguments**
    
    -   In Kubernetes 1.25, kubeadm UnversionedKubeletConfigMap reaches the GA phase. By default, kube-system or kubelet-config is used to replace kube-system or kubelet-config-x.yy.
        
    -   In Kubernetes 1.25, kubeadm no longer adds the `node-role.kubernetes.io/master:NoSchedule` label to control plane nodes. The label is removed when kubeadm upgrade apply is used.
        
    -   In Kubernetes 1.25, Seccomp annotations `seccomp.security.alpha.kubernetes.io/pod` and `container.seccomp.security.alpha.kubernetes.io` are no longer supported. We recommend that you use SeccompProfile. For more information, see [Restrict a Container's Syscalls with seccomp](https://kubernetes.io/docs/tutorials/security/seccomp/).
        
    -   In Kubernetes 1.25 and 1.26, some startup arguments of kube-controller-manager are deprecated and removed.
        
        -   The deleting-pods-qps, deleting-pods-burst, and register-retry-count arguments are removed.
            
        -   The experimental-cluster-signing-duration and pod-eviction-timeout arguments are deprecated and replaced by cluster-signing-duration.
            
        -   In Kubernetes 1.27, pod-eviction-timeout and enable-taint-manager are removed.
            
    -   In Kubernetes 1.26, some logging-related command line arguments are [removed](https://github.com/kubernetes/kubernetes/pull/112120). These arguments are [deprecated](https://github.com/kubernetes/enhancements/tree/3cb66bd0a1ef973ebcc974f935f0ac5cba9db4b2/keps/sig-instrumentation/2845-deprecate-klog-specific-flags-in-k8s-components#removed-klog-flags) in earlier versions.
        
    -   In Kubernetes 1.26, [the --master-service-namespace flag is deprecated](https://github.com/kubernetes/kubernetes/pull/38186). The flag is unused in the API server.
        
    -   In Kubernetes 1.26, the following unused subcommands in kubectl run are marked as [deprecated](https://github.com/kubernetes/kubernetes/pull/112261) and will be removed in later versions: `--cascade`, `--filename`, `--force`, `--grace-period`, `--kustomize`, `--recursive`, `--timeout`, and `--wait`.
        

### Deprecated APIs

In Kubernetes 1.25 and 1.26, some APIs are deprecated. For more information, see [Deprecated APIs](https://kubernetes.io/docs/reference/using-api/deprecation-guide/#v1-26).

-   **CronJob**
    
    In Kubernetes versions later than 1.25, the batch/v1beta1 API can no longer be used to create a CronJob. You can use the batch/v1 API, which is available in Kubernetes 1.21 and later versions.
    
-   **EndpointSlice**
    
    In Kubernetes versions later than 1.25, the discovery.k8s.io/v1beta1 API can no longer be used to create an EndpointSlice. You can use the discovery.k8s.io/v1 API, which is available in Kubernetes 1.21 and later versions.
    
    You need to pay close attention to the following changes in discovery.k8s.io/v1:
    
    -   The NodeName field of endpoints is used to replace the deprecated topology\["kubernetes.io/hostname"\]g field.
        
    -   The Zone field of endpoints is used to replace the deprecated topology\["kubernetes.io/zone"\] field.
        
    -   The Topology field is replaced by the deprecatedTopology field. The field is unavailable in API v1.
        
    
    **Important**
    
    After the cluster is upgraded, check whether an error message appears to indicate that the CoreDNS pod `failed to list *v1beta1.EndpointSlice`. If so, restart or upgrade the CoreDNS component. For more information, see [Why does CoreDNS use deprecated APIs?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-faq#9437d1601aytt).
    
-   **Event**
    
    In Kubernetes 1.25, the events.k8s.io/v1beta1 API can no longer be used to create an event. You can use the events.k8s.io/v1 API, which is available in Kubernetes 1.19 and later versions.
    
    You need to pay close attention to the following changes in events.k8s.io/v1:
    
    -   The type field can be set only to Normal or Warning.
        
    -   The involvedObject field is renamed as regarding.
        
    -   The action, reason, reportingController, and reportingInstance fields are required when you create an events.k8s.io/v1 event.
        
    -   The eventTime field is used to replace the deprecated firstTimestamp field. The firstTimestamp field is renamed as deprecatedFirstTimestamp and is not allowed in events.k8s.io/v1 events.
        
    -   The series.lastObservedTime field is used to replace the deprecated lastTimestamp field. The lastTimestamp field is renamed as deprecatedLastTimestamp and is not allowed in events.k8s.io/v1 events.
        
    -   The series.count field is used to replace the deprecated count field. The count field is renamed as deprecatedCount and is not allowed in events.k8s.io/v1 events.
        
    -   The reportingController field is used to replace the deprecated source.component field. The source.component field is renamed as deprecatedSource.component and is not allowed in events.k8s.io/v1 events.
        
    -   The reportingInstance field is used to replace the deprecated source.host field. The source.host field is renamed as deprecatedSource.host and is not allowed in events.k8s.io/v1 events.
        
    
-   **PodDisruptionBudget**
    
    In Kubernetes versions later than 1.25, the policy/v1beta1 API can no longer be used to create a PodDisruptionBudget. You can use the policy/v1 API, which is available in Kubernetes 1.21 and later versions.
    
    You need to pay close attention to the following changes in policy/v1: If spec.selector in policy/v1 PodDisruptionBudgets is left empty ({}), all pods in the namespace are selected. In policy/v1beta1 PodDisruptionBudgets, if spec.selector is left empty, no pod is selected. If you do not specify spec.selector, no pod is selected in both API versions.
    
-   **PodSecurityPolicy**
    
    In Kubernetes versions later than 1.25, the policy/v1beta1 API can no longer be used to create a PodSecurityPolicy, and the PSP admission controller is removed. You need to migrate from PodSecurityPolicy to [Pod Security Admission](https://kubernetes.io/docs/concepts/security/pod-security-admission/) or a third-party admission webhook.
    
    For more information about the migration, see [Migrate from PodSecurityPolicy to the Built-In PodSecurity Admission Controller](https://kubernetes.io/docs/tasks/configure-pod-container/migrate-from-psp/). For more information about the deprecation, see [PodSecurityPolicy Deprecation: Past, Present, and Future](https://kubernetes.io/blog/2021/04/06/podsecuritypolicy-deprecation-past-present-and-future/).
    
-   **RuntimeClass**
    
    In Kubernetes versions later than 1.25, the node.k8s.io/v1beta1 API can no longer be used to create a RuntimeClass. You can use the node.k8s.io/v1 API, which is available in Kubernetes 1.20 and later versions.
    
-   **HorizontalPodAutoscaler**
    
    -   In Kubernetes versions later than 1.25, the autoscaling/v2beta1 API can no longer be used to create a horizontal pod autoscaler (HPA).
        
    -   In Kubernetes versions later than 1.26, the autoscaling/v2beta2 API can no longer be used to create an HPA. You can use the autoscaling/v2 API, which is available in Kubernetes 1.23 and later versions.
        
-   **Flow control resources**
    
    In Kubernetes versions later than 1.26, the flowcontrol.apiserver.k8s.io/v1beta1 API can no longer be used to create a FlowSchema or PriorityLevelConfiguration. The API can use flowcontrol.apiserver.k8s.io/v1beta2 in Kubernetes 1.23 and later versions. The API can use flowcontrol.apiserver.k8s.io/v1beta3 in Kubernetes 1.26 and later versions.
    

### Feature gates

Feature gates have three phases. In the Alpha phase, feature gates are disabled by default. In the Beta phase, feature gates are enabled by default. In the GA phase, feature gates are enabled by default and cannot be disabled. The switch used to enable and disable feature gates will be deleted in later versions. For more information, see [Feature Gates](https://kubernetes.io/docs/reference/command-line-tools-reference/feature-gates/).

-   In Kubernetes 1.25, SeccompDefault reaches the Beta phase. For more information about how to use SeccompDefault, see [Restrict a Container's Syscalls with seccomp](https://kubernetes.io/docs/tutorials/security/seccomp/).
    
-   In Kubernetes 1.25, CustomResourceDefinition (CRD) Validation Expression Language reaches the Beta phase and CustomResourceValidationExpressions is enabled by default. It is more efficient to use Common Expression Language (CEL) to validate CRDs than using the webhook. For more information, see [Validation rules](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#validation-rules).
    
-   In Kubernetes 1.25, the ServerSideFieldValidation feature gate reaches the Beta phase and is enabled by default. The API server can validate unknown fields. Therefore, the field validation feature will be removed from the kubectl in later versions. For more information, see [Unknown field validation supported by the API server](https://kubernetes.io/docs/reference/kubernetes-api/common-parameters/common-parameters/#fieldValidation).
    
-   In Kubernetes 1.25, the ContainerCheckpoint alpha feature is added and the Kubelet Checkpoint API is enabled. For more information, see [Kubelet Checkpoint API](https://kubernetes.io/docs/reference/node/kubelet-checkpoint-api/).
    
-   In Kubernetes 1.25, the PodHasNetworkCondition alpha feature is added. This feature allows the kubelet to add the PodHasNetwork condition to pods. For more information, see [PodHasNetwork](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-has-network).
    
-   In Kubernetes 1.25, the UserNamespacesStatelessPodsSupport alpha feature is added to enable user namespaces for stateless pods.
    
-   In Kubernetes 1.25, the JobPodFailurePolicy alpha feature is added. This feature allows a Job to handle pod disruptions based on the exit codes and status of the pods. This feature reaches the Beta phase in Kubernetes 1.26.
    
-   In Kubernetes 1.25, the MultiCIDRRangeAllocator alpha feature is added to allow NodeIPAM to support multiple ClusterCIDRs. `--cidr-allocator-type=MultiCIDRRangeAllocator` is configured for kube-controller-manager to allow controllers to support multiple ClusterCIDRs.
    
-   In Kubernetes 1.25, the StatefulSetMinReadySeconds feature reaches the GA phase. The feature supports the minReadySeconds field by default and cannot be disabled.
    
-   In Kubernetes 1.25, the CronJobTimeZone feature reaches the GA phase. The feature is enabled by default to support the TimeZone field and cannot be disabled.
    
-   In Kubernetes 1.25, the DaemonSetUpdateSurge feature reaches the GA phase. The feature is enabled by default to support the DaemonSet MaxSurge field and cannot be disabled.
    
-   In Kubernetes 1.25, the IdentifyPodOS feature reaches the GA phase. The feature is enabled by default to support spec.podOS field and cannot be disabled.
    
-   In Kubernetes 1.25, the CSIInlineVolume feature reaches the GA phase. The feature is enabled by default to support CSI inline volumes and cannot be disabled.
    
-   In Kubernetes 1.25, the EphemeralContainers feature reaches the GA phase. The feature is enabled by default to support ephemeral containers and cannot be disabled.
    
-   In Kubernetes 1.25, the CSINodeExpandSecret feature is added. This feature allows you to pass identify authentication data stored in Secrets to the CSI driver when you add nodes.
    
-   In Kubernetes 1.25, the CSIMigration feature reaches the GA phase. The feature is enabled by default and cannot be disabled.
    
-   In Kubernetes 1.25, the CSIMigrationPortworx feature reaches the Beta phase.
    
-   In Kubernetes 1.25, the ProbeTerminationGracePeriod feature is still in the Beta phase but the default value changes to True. For more information, see [Probe-level terminationGracePeriodSeconds](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#probe-level-terminationgraceperiodseconds).
    
-   In Kubernetes 1.26, the JobTrackingWithFinalizers feature reaches the GA phase. The feature is enabled by default to track the progress of a Job by tracking the pods of the Job instead of counting the remaining pods. For more information, see [Job tracking with finalizers](https://kubernetes.io/docs/concepts/workloads/controllers/job/#job-tracking-with-finalizers).
    
-   In Kubernetes 1.26, the PDBUnhealthyPodEvictionPolicy alpha feature is added to allow you to configure the unhealthy pod eviction policy for a PodDisruptionBudget.
    
-   In Kubernetes 1.26, the dynamic resource allocation API is supported. You can manage and use resources with custom parameters and independent pod lifecycles.
    
-   In Kubernetes 1.26, the StatefulSetStartOrdinal alpha feature is added to allow you to configure StatefulSet start ordinals.
    
-   In Kubernetes 1.26, the ServiceInternalTrafficPolicy feature reaches the GA phase. This feature allows you to use the internalTrafficPolicy field to define an internal traffic policy for Services. This feature is enabled by default and cannot be disabled. For more information, see [Service Internal Traffic Policy](https://kubernetes.io/docs/concepts/services-networking/service-traffic-policy/).
    
-   In Kubernetes 1.26, the ValidatingAdmissionPolicy alpha feature is added. CEL expressions can be used to implement extensible admission controllers.
    
-   In Kubernetes 1.26, the MixedProtocolLBService feature reaches the GA phase. This feature allows the use of different protocols on the same LoadBalancer Service.
    
-   In Kubernetes 1.26, the EndpointSliceTerminatingCondition feature reaches the GA phase. This feature is enabled to support the EndpointSlice Terminating and Serving condition fields and cannot be disabled.
    
-   In Kubernetes 1.26, the APIServerIdentity feature reaches the Beta phase. By default, the feature is enabled in kube-system to create a lease for each active API server.
    
-   In Kubernetes 1.26, the DelegateFSGroupToCSIDriver feature reaches the GA phase and cannot be disabled.
    
-   In Kubernetes 1.26, the NodeOutOfServiceVolumeDetach feature reaches the Beta phase and is enabled by default. After you add the `node.kubernetes.io/out-of-service` taint to mark a node as out-of-service, pods that do not tolerate the taint are forcefully deleted. Volume detach operations are performed for the terminated pods on the node.
    
-   In Kubernetes 1.26, the ServiceIPStaticSubrange feature reaches the GA phase. This feature enables the Service ClusterIP allocation policy to subdivide the ClusterIP range.
    
-   In Kubernetes 1.26, the CPUManager and DevicePlugins features reach the GA phase. These features are enabled by default and cannot be disabled.
    
-   In Kubernetes 1.26, the ComponentSLIs alpha feature is added to enable the `/metrics/slis` endpoint on the following Kubernetes components in order to collect health check metrics: kubelet, kube-scheduler, kube-proxy, kube-controller-manager, and cloud-controller-manager.
    
-   In Kubernetes 1.26, the WindowsHostProcessContainers feature reaches the GA phase. This feature is enabled by default to support Windows HostProcess containers.
    
-   In Kubernetes 1.26, the ExpandedDNSConfig feature reaches the Beta phase. This feature allows more DNS search paths and a longer list of DNS search paths. This feature requires container runtime support.
    
-   In Kubernetes 1.26, the LegacyServiceAccountTokenNoAutoGeneration feature reaches the GA phase. This feature disables the auto generation of ServiceAccount tokens based on Secrets. This feature is enabled by default and cannot be disabled.
    
-   In Kubernetes 1.26, the ProxyTerminatingEndpoints feature reaches the Beta phase. This feature is enabled by default to allow kube-proxy to handle terminating endpoints when ExternalTrafficPolicy=Local.
    
-   In Kubernetes 1.26, the LegacyServiceAccountTokenTracking alpha feature is added. By default, this feature is disabled. This feature adds the `kubernetes.io/legacy-token-last-used` label to ServiceAccount tokens generated based on Secrets to indicate the expiration date of the tokens.
    
-   In Kubernetes 1.26, the PodDisruptionConditions feature reaches the Beta phase and is enabled by default. You can add the DisruptionTarget condition to a pod to indicate that the pod is about to be deleted due to a disruption, and query the reason of the pod termination in the `reason` field. For more information, see [Pod disruption conditions](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-conditions).
    

## Enhancements to Kubernetes 1.26

### **Security enhancement**

ACK has further limited access to the following Kubernetes files on cluster nodes.

**File path**

**Access permission**

/etc/kubernetes/admin.conf

600

/etc/kubernetes/kube.conf

600

/etc/kubernetes/controller-manager.conf

600

/etc/kubernetes/kubelet.conf

600

/etc/kubernetes/scheduler.conf

600

/etc/kubernetes/manifests/\*.yaml

600

/etc/kubernetes/pki/\*.key

600

/etc/kubernetes/pki/\*.crt

600

/etc/kubernetes/pki/dashboard/\*.crt

600

/etc/kubernetes/pki/etcd/\*.pem

600

/var/lib/etcd/cert/\*.pem

600

/var/lib/etcd/cert/\*.csr

600

/var/lib/kubelet/pki/\*.crt

600

/var/lib/kubelet/config.yaml

600

/usr/lib/systemd/system/etcd.service

600

/etc/systemd/system/kubelet.service

600

/etc/systemd/system/kubelet.service.d/10-kubeadm.conf

600

## References

-   [CHANGELOG-1.25](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.25.md)
    
-   [CHANGELOG-1.26](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.26.md)
