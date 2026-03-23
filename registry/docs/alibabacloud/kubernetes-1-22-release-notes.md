Container Service for Kubernetes (ACK) strictly abides by the terms of the Certified Kubernetes Conformance Program. This topic describes the changes that ACK has made to support Kubernetes 1.22.

## Version upgrades

Components are updated and optimized by ACK to support Kubernetes 1.22.

**Key component**

**Version**

**Description**

Kubernetes

1.22.15-aliyun.1

-   A number of beta API versions are discontinued in Kubernetes 1.22. Before you update to Kubernetes 1.22, take note of the following items:
    
    -   Existing resources that are created by using the beta API versions are not affected. After you update to Kubernetes 1.22, you can use stable API versions to manage resources.
        
    -   Before you update to Kubernetes 1.22, you must recreate the controllers and applications that are managed by using the beta API versions. Otherwise, the controllers and applications cannot work as normal after you update to Kubernetes 1.22. For more information, see [Version details](#section-mv9-6fz-gtk).
        
-   A number of optimizations are added in Kubernetes 1.22. For more information, see [Version details](#section-mv9-6fz-gtk).
    
-   Dockershim was deprecated in Kubernetes 1.20 and later versions, and will be removed in Kubernetes 1.24. ACK provides the following suggestions to help you handle this issue:
    
    -   Before you update to Kubernetes 1.24, we recommend that you change the container runtime of the cluster nodes from Docker to containerd by updating node pools. For more information, see [Change the container runtime from Docker to containerd](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/change-the-container-runtime-from-docker-to-containerd#task-2248823). If you use an ACK dedicated cluster, the container runtime of master nodes is automatically changed from Docker to containerd during a cluster update. All containers on master nodes are recreated during a Kubernetes version update. Back up data in the containers before you start a Kubernetes version update.
        
    -   containerd is not fully compatible with the Windows operating system. For Windows containers, we recommend that you use Docker Enterprise Edition (EE).
        
    -   Before you update to Kubernetes 1.24, we recommend that you migrate workloads that run in Docker containers to containers that run other container runtimes. For more information, see [Version details](#section-mv9-6fz-gtk).
        
-   In Kubernetes 1.22.10 and later versions, kube-proxy no longer listens on the ports of NodePort Services. After this update, TCP connections may occasionally fail if the port range of a NodePort Service (specified by the ServiceNodePortRange parameter of the API server) conflicts with the port range specified by the `net.ipv4.ip_local_port_range` kernel parameter. This may lead to health check failures and cause service exceptions on the node. Before you update the Kubernetes version of your cluster to 1.22.10 or later, make sure that the port ranges of all NodePort Services in the cluster do not conflict with the port range specified by the `net.ipv4.ip_local_port_range` kernel parameter. For more information about how to configure the port range of a NodePort Service, see [How do I configure a proper node port range?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#023c3ce009sv0) or [Kubernetes community PR](https://github.com/kubernetes/kubernetes/pull/108888).
    
-   The PodSecurityPolicy (PSP) resource was deprecated in Kubernetes 1.21 and later versions, and will be removed in Kubernetes 1.25. You can use continue to use PSPs in Kubernetes 1.22. We recommend that you use the PodSecurity admission controller as an alternative. For more information, see [Version details](#section-mv9-6fz-gtk).
    
-   The [CVE-2022-3172](/help/en/ack/product-overview/vulnerability-cve-2022-3172#task-2251437) vulnerability may exist. For more information about the vulnerability and solution, see [Vulnerability CVE-2022-3172](/help/en/ack/product-overview/vulnerability-cve-2022-3172#task-2251437).
    
-   In Kubernetes 1.22 and later, the validity period of a service account token is one year. The kubelet periodically renews service account tokens. For more information, see [BoundServiceAccountTokenVolume](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.21.md#api-change-6). If the client-go version is 11.0.0 or later or 0.15.0 or later, the system automatically reloads service account tokens from disks to renew the tokens. If the client-go version is earlier than 11.0.0 or 0.15.0, the system does not automatically renew service account tokens. The validity period of a service account token is one year. You cannot access the API server from within the cluster after service account token expires. In this case, update client-go to 11.0.0 or later or 0.15.0 or later. For more information about the impacts of service account token expiration and the solutions, see [\[Product Changes\] Solutions for service account token expiration in Kubernetes 1.22 and later](/help/en/ack/product-overview/solution-to-serviceaccount-token-expiration-after-upgrading-122-version).
    
-   After upgrading to Kubernetes 1.22 or later, virtual node scheduling is enabled by default. Pods scheduled to virtual nodes will be subject to:
    
    -   Taints on virtual nodes
        
    -   Node affinity
        
    -   Pod affinity/anti-affinity rules
        
    -   Topology spread constraints
        
    
    To maintain pre-upgrade scheduling behavior, unselect **Enable Virtual Node-based Pod Scheduling** in kube-scheduler. For configuration steps, see [Custom scheduler parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-scheduler-parameters).
    

etcd

3.5.1

None

CoreDNS

v1.9.3.6-32932850-aliyun

The update does not affect your workloads. The following features are provided:

-   EndpointSlices can be monitored.
    
-   IPv6 addresses are supported by DNS resolutions.
    

CRI

-   Docker CE 19.03.15
    
-   Docker EE is supported for the Windows operating system.
    

None

containerd 1.4.8

None

CSI

1.26

None

CNI

Flannel 0.15.1.4-e02c8f12-aliyun

The update does not affect your workloads. The following features are provided:

-   The API version for resources such as Authorization is updated to support Kubernetes 1.22.
    
-   Services can be exposed by using the HostPort method.
    
-   The hairpin mode can be enabled.
    

Terway

None

NVIDIA Container Runtime

3.7.0

None

Ingress Controller

1.1.0-aliyun.1

The update may temporarily interrupt your workloads and cause compatibility issues with your workload configurations. We recommend that you evaluate the impact of the component update before you update to Kubernetes 1.22.

## Version details

### Resource changes and deprecation

-   \[Resource changes\] The `admissionregisration.k8s.io/v1beta1` API version for the MutatingWebhookConfiguration and ValidatingWebhookConfiguration resources is discontinued. Admission webhook configurations and mutating webhook configurations cannot be created by using this API version, which adversely affects the use of admission webhooks and mutating webhooks. You can use the `admissionregisration.k8s.io/v1` API version instead.
    
-   \[Resource changes\] The `apiextensions.k8s.io/v1beta1` API version for the CustomResourceDefinition (CRD) resource is discontinued. CRDs cannot be created by using this API version, which adversely affects the reconciliation of controllers that use CRDs. You can use the `apiextensions.k8s.io/v1` API version instead.
    
-   \[Resource changes\] The `apiregistration.k8s.io/v1beta1` API version for the APIService resource is discontinued. Extended Kubernetes APIs that are managed by using this API version cannot be used. You can use the `apiregistration.k8s.io/v1` API version instead.
    
-   \[Resource changes\] The `authentication.k8s.io/v1beta1` API version for the TokenReview resource is discontinued. TokenReviews that are created by using this API version cannot be used for authentication, which adversely affects your applications. You can use the `authentication.k8s.io/v1` API version instead.
    
-   \[Resource changes\] The `authorization.k8s.io/v1beta1` API version for the SubjectAccessReview resource is discontinued. SubjectAccessReviews that are created by using this API version cannot be used for authorization, which adversely affects your applications. You can use the `authorization.k8s.io/v1` API version instead.
    
-   \[Resource changes\] The `certificates.k8s.io/v1beta1` API version for the CertificateSigningRequest (CSR) resource is discontinued. CSRs that are created by using this API version cannot be used to apply for certificate signing and issuing. You can use the `certificates.k8s.io/v1` API version instead.
    
-   \[Resource changes\] The `coordination.k8s.io/v1beta1` API version for the Lease resource is discontinued. Leases that are created by using this API version cannot be used for leader election, which adversely affects your applications. You can use the `coordination.k8s.io/v1` API version instead.
    
-   \[Resource changes\] The `networking.k8s.io/v1beta1` and `extensions/v1beta1` API versions of the Ingress and IngressClass resources are discontinued. Ingresses that are created by using these API versions cannot be used to expose Services. You can use the `networking.k8s.io/v1` API version instead.
    
-   \[Resource changes\] The `rbac.authorization.k8s.io/v1beta1` API version for the ClusterRole, ClusterRoleBinding, Role, and RoleBinding resources is discontinued. Role-based access control (RBAC) resources that are managed by using this API version cannot be used to grant permissions to manage applications and clusters. You can use the `rbac.authorization.k8s.io/v1` API version instead.
    
-   \[Resource changes\] The `storage.k8s.io/v1beta1` API version for the CSIDriver, CSINode, StorageClass, and VolumeAttachment resources is discontinued. If you use this API version to manage resources that are related to the Container Storage Interface (CSI) plug-in, the CSI plug-in may not run as normal and storage services in your cluster are adversely affected. You can use `storage.k8s.io/v1` instead.
    
-   \[Resource changes\] The `scheduling.k8s.io/v1beta1` API version for the PriorityClass resource is discontinued. PriorityClasses that are managed by using this API version cannot be used to configure pod priorities. You can use the `scheduling.k8s.io/v1` version instead.
    
-   \[Resource deprecation\] Dockershim is deprecated and will be removed in Kubernetes 1.24. For more information, see [EP-2221](https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/2221-remove-dockershim) and [cri-containerd](https://kubernetes.io/docs/setup/production-environment/windows/intro-windows-in-kubernetes/#cri-containerd).
    
    Before you update to Kubernetes 1.24, we recommend that you perform the following steps to migrate workloads that run in Docker containers to containers that run other container runtimes:
    
    -   Decide the node specifications and calculate the number of nodes that run container runtimes other than Docker based on the number of existing Docker containers.
        
    -   Add new nodes to your cluster during off-peak hours.
        
    -   Drain nodes that run the Docker runtime one after one. Each time a node is drained, verify that application pods on the node are successfully migrated to new nodes before you drain another node.
        
    -   After all the nodes that run the Docker runtime are drained and no pod runs on the nodes, remove the nodes.
        
-   \[Resource deprecation\] In Kubernetes 1.22.10 and later versions, kube-proxy no longer listens on the ports of NodePort Services. After this update, TCP connections may occasionally fail if the port range of a NodePort Service (specified by the ServiceNodePortRange parameter of the API server) conflicts with the port range specified by the `net.ipv4.ip_local_port_range` kernel parameter. This may lead to health check failures and cause service exceptions on the node. Before you update the Kubernetes version of your cluster to 1.22.10 or later, make sure that the port ranges of all NodePort Services in the cluster do not conflict with the port range specified by the `net.ipv4.ip_local_port_range` kernel parameter. For more information about how to configure the port range of a NodePort Service, see [How do I configure a proper node port range?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#023c3ce009sv0) or [Kubernetes community PR](https://github.com/kubernetes/kubernetes/pull/108888).
    

### Feature enhancements

-   By default, the ImmutableEphemeralVolumes feature is enabled in Kubernetes 1.21 and later versions. You can use this feature to set ConfigMaps and Secrets as immutable, which significantly reduces the load on the Kubernetes API server of your cluster. For more information, see [Secrets](https://kubernetes.io/docs/concepts/configuration/secret/#secret-immutable) and [ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/#configmap-immutable).
    
-   By default, the IPv4/IPv6 dual stack (IPv6DualStack) feature is enabled in Kubernetes 1.21 and later versions. To use IPv4/IPv6 dual stack, you must specify proper IPv4 CIDR blocks and IPv6 CIDR blocks when you create a cluster, and install a Container Network Interface (CNI) plug-in that supports IPv4/IPv6 dual stack. For more information, see [IPv4/IPv6 dual stack](https://kubernetes.io/docs/concepts/services-networking/dual-stack/).
    
-   By default, the GracefulNodeShutdown feature is enabled in Kubernetes 1.21 and later versions. This feature supports only Linux nodes. After this feature is enabled, kubelet is aware of node shutdown events that are about to take place and can evict the pods on a node within a specific shutdown period. For more information, see [Graceful node shutdown](https://kubernetes.io/docs/concepts/architecture/nodes/#graceful-node-shutdown).
    
-   By default, the EfficientWatchResumption feature is enabled in Kubernetes 1.21 and later versions. This feature can resume the watch cache of the Kubernetes API server in an efficient manner after the API server is restarted. This feature is suitable for large-scale clusters. For more information, see [KEP-1904](https://github.com/kubernetes/enhancements/blob/master/keps/sig-api-machinery/1904-efficient-watch-resumption/README.md).
    
-   By default, the CSIStorageCapacity feature is enabled in Kubernetes 1.22 and later versions. This feature enables kube-scheduler to schedule a pod to a node whose storage capacity is sufficient for creating the volume that is used by the pod. For more information, see [Storage capacity](https://kubernetes.io/docs/concepts/storage/storage-capacity/).
    
-   By default, the DaemonSetUpdateSurge feature is enabled in Kubernetes 1.22 and later versions. This feature allows you to use the `.spec.strategy.rollingUpdate.maxSurge` field to specify the percentage of pods that can be created above the expected number of pods during a rolling update on a DaemonSet. For more information, see [Perform a Rolling Update on a DaemonSet](https://kubernetes.io/docs/tasks/manage-daemon/update-daemon-set/).
    
-   By default, the IndexedJob feature is enabled in Kubernetes 1.22 and later versions. This feature allows you to create an indexed Job by setting .spec.completionMode to Indexed in the Job configuration. This way, the annotation batch.kubernetes.io/job-completion-index and the JOB\_COMPLETION\_INDEX environment variable are added to each pod that is created by the Job. For more information, see [Kubernetes](https://kubernetes.io/blog/2021/04/19/introducing-indexed-jobs/).
    
-   By default, the MemoryManager feature is enabled in Kubernetes 1.22 and later versions. This feature supports only Linux nodes. You can use this feature to enable non-uniform memory access (NUMA)-aware memory management. This feature is suitable for applications that require guaranteed memory resources to significantly improve application performance. ACK does not configure memory reservation for this feature. For more information, see [Memory maps at runtime](https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/1769-memory-manager#memory-maps-at-start-up-with-examples) and [Utilize the NUMA-aware memory manager](https://kubernetes.io/docs/tasks/administer-cluster/memory-manager/).
    
-   By default, the PodAffinityNamespaceSelector feature is enabled in Kubernetes 1.22 and later versions. This feature allows you to apply label selectors of pod affinity settings across namespaces instead of within the same namespace. This optimizes affinity-based pod scheduling. For more information, see [KEP-2249](https://github.com/kubernetes/enhancements/blob/master/keps/sig-scheduling/2249-pod-affinity-namespace-selector/README.md).
    
-   By default, the PodDeletionCost feature is enabled in Kubernetes 1.22 and later versions. After this feature is enabled, pods with lower resource utilization incur lower pod deletion costs. For more information, see [ReplicaSet](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/#pod-deletion-cost).
    
-   By default, the PreferNominatedNode is enabled in Kubernetes 1.22 and later versions. After this feature is enabled, kube-scheduler preferably schedules pods to nominated nodes. kube-scheduler evaluates the other nodes only if all nominated nodes fail to match the pods. For more information, see [KEP-1923](https://github.com/kubernetes/enhancements/blob/master/keps/sig-scheduling/1923-prefer-nominated-node/README.md).
    
-   The ProbeTerminationGracePeriod feature is enabled in Kubernetes 1.22 and later versions. This feature supports only liveness probes. This feature allows you to set a probe-level or pod-level teminationGracePeriodSeconds field to shorten the time period that a pod must wait to restart after the pod fails a liveness probe. For more information, see [Configure liveness, readiness, and startup probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#probe-level-terminationgraceperiodseconds).
    
-   By default, the NetworkPolicyEndPort feature is enabled in Kubernetes 1.22 and later versions. This feature allows you to specify a port range in a NetworkPolicy. For more information, see [Network policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/#targeting-a-range-of-ports).
    
-   By default, the LogarithmicScaleDown feature is enabled in Kubernetes 1.22 and later versions. This feature provides a randomized approach to scale in pods and therefore reduces the impact of issues caused by pod topology spread constraints. For more information, see [Pod topology spread constraints should be taken into account on scale down](https://github.com/kubernetes/kubernetes/issues/96748) and [KEP-2185](https://github.com/kubernetes/enhancements/tree/master/keps/sig-apps/2185-random-pod-select-on-replicaset-downscale).
    
-   By default, the SuspendJob feature is enabled in Kubernetes 1.22 and later versions. This feature allows users to manage the lifecycle of Jobs in a more efficient manner. For example, you can use this feature to suspend and resume Jobs. For more information, see [Introduce suspended Jobs](https://kubernetes.io/blog/2021/04/12/introducing-suspended-jobs/).
    
-   By default, the ServiceInternalTrafficPolicy feature is enabled in Kubernetes 1.22 and later versions. You can use this feature to route internal traffic to node-local endpoints that are ready or all endpoints that are ready in the cluster. For more information, see [Services](https://kubernetes.io/docs/concepts/services-networking/service/#internal-traffic-policy).
    
-   By default, the ServiceLoadBalancerClass feature is enabled in Kubernetes 1.22 and later versions. You can use this feature to customize load balancing. For more information, see [Specify the class of load balancer implementation](https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-class).
    
-   By default, the ServiceLBNodePortControl feature is enabled in Kubernetes 1.22 and later versions. This feature allows you to disable node port allocation for a LoadBalancer Service by setting .spec.allocateLoadBalancerNodePorts to false in the Service configuration. This way, the Service routes traffic directly to pods. For more information, see [Disable load balancer NodePort allocation](https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-nodeport-allocation).
    
-   By default, the SizeMemoryBackedVolumes feature is enabled in Kubernetes 1.22 and later versions. This feature supports only Linux nodes. You can use this feature to specify the size of an emptyDir memory-backed volume by setting the emptyDir.sizeLimit field. This improves the observability of pod scheduling. For more information, see [KEP-1967](https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/1967-size-memory-backed-volumes).
    
-   By default, the Server-side Apply feature is enabled in Kubernetes 1.22 and later versions. This feature allows you to track changes to the fields of a resource configuration. You can track information about the change, such as the source, time, and operation. For more information, see [Server-side apply](https://kubernetes.io/docs/reference/using-api/server-side-apply/).
    
-   The feature of integrating the CSI plug-in with Windows containers is stabilized in Kubernetes 1.22 and later versions. This feature allows you to use CSI Proxy to perform storage operations on the host whose operating system does not support privileged containers, such as Windows Server 2019 and Windows Server version 2004. To use this feature, make sure that the CSI plug-in that you use supports this feature. For more information, see [CSI Proxy](https://github.com/kubernetes-csi/csi-proxy).
    
-   By default, the CSRDuration feature is enabled in Kubernetes 1.22 and later versions. After this feature is enabled, the validity period of a certificate to be signed and issued is set to the smaller value between the value of .spec.expirationSeconds in the CSR and the value of `--cluster-signing-duration` in the kube-controller-manager configuration. In ACK clusters, the default value of --cluster-signing-duration in the kube-controller-manager configuration is 10 years. For more information, see [Signers](https://kubernetes.io/docs/reference/access-authn-authz/certificate-signing-requests/#signers).
    
-   In Kubernetes 1.22 and later, the BoundServiceAccountTokenVolume feature gate reaches General Availability (GA). When this feature gate is enabled, the default validity period of service account tokens that are not mounted as projected volumes to pods is one year. For more information, see [Feature details](https://github.com/kubernetes/enhancements/blob/master/keps/sig-auth/1205-bound-service-account-tokens/README.md#production-readiness-review-questionnaire).
    

### New features

-   The volume health monitoring feature is supported in Kubernetes 1.21 and later versions. This feature helps detect the health status of persistent volumes (PVs) that are provisioned by using the CSI plug-in. This prevents data from being read from or written to unhealthy PVs. By default, this feature is enabled for ACK clusters that use the CSI plug-in. To use this feature, make sure that the CSI plug-in that you use supports this feature. For more information, see [Volume health monitoring](https://kubernetes.io/docs/concepts/storage/volume-health-monitoring/).
    
-   The memory Quality of Service (QoS) feature that is developed based on cgroups v2 is supported in Kubernetes 1.22 and later versions. In scenarios where computing resources are insufficient, such as scenarios where resource request spikes occur, CPU throttling is performed to ensure the availability of CPU resources. However, memory throttling is not supported. To support memory throttling, open source Linux kernel optimizes specific interfaces in cgroups v2. By default, the memory QoS feature is enabled for ACK clusters. This feature supports only Linux nodes. To use this feature, make sure that the OS kernels of the Linux nodes that you use support this feature. For more information, see [Memcg QoS feature of the cgroup v1 interface](/help/en/alinux/user-guide/memcg-qos-function-ensures-system-stability-and-response-speed#concept-2482889) and [2570-memory-qos](https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/2570-memory-qos).
    
-   Windows privileged containers can be created from HostProcess containers in Kubernetes 1.22 and later versions. By default, the Windows HostProcess container feature is enabled for ACK clusters. To use this feature, make sure that the OS kernels of the nodes that you use support this feature. For more information, see [What's new for Windows containers on Windows Server 2022](https://techcommunity.microsoft.com/t5/containers/what-s-new-for-windows-containers-on-windows-server-2022/ba-p/2167036) and [Create a Windows HostProcess Pod](https://kubernetes.io/docs/tasks/configure-pod-container/create-hostprocess-pod/).
    
-   The swap memory feature is supported for workloads in Kubernetes 1.22 and later versions. This feature supports only Linux nodes. For scenarios in which the swap memory feature is required, you can use the swap memory feature to improve the performance of your application. For example, a node administrator wants to improve node performance or reduce stability issues that are caused by memory contention. The swap memory feature is disabled for ACK clusters. For more information, see [Swap memory management](https://kubernetes.io/docs/concepts/architecture/nodes/#swap-memory) and [KEP-2400](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/2400-node-swap/README.md).
    
-   Default seccomp profiles are configured for workloads in Kubernetes 1.22 and later versions. This feature supports only Linux nodes. After this feature is enabled, the RuntimeDefault seccomp profile is used by default. Specific workloads may require fewer limits on system calls than other workloads. These workloads may fail after this feature is enabled. This feature is disabled for ACK clusters. For more information, see [Enable the use of RuntimeDefault as the default seccomp profile for all workloads](https://kubernetes.io/docs/tutorials/clusters/seccomp/#enable-the-use-of-runtimedefault-as-the-default-seccomp-profile-for-all-workloads).
    

### Feature updates

-   The PSP resource was deprecated in Kubernetes 1.21 and later versions, and will be removed in Kubernetes 1.25. By default, the pod security policy feature is enabled for ACK clusters. You can use ACK pod security policies as an alternative to the PSP resource in Kubernetes 1.22. For more information, see [Pod security admission](https://kubernetes.io/docs/concepts/security/pod-security-admission/) and [PodSecurityPolicy deprecation: past, present, and future](https://kubernetes.io/blog/2021/04/06/podsecuritypolicy-deprecation-past-present-and-future/).
    
-   The topologyKeys field was deprecated in Kubernetes 1.21 and later versions. Instead, the Topology Aware Hints feature is used to enable the Service topology feature. By default, the Service topology feature is disabled for ACK clusters. If the Service topology feature is enabled for a cluster of Kubernetes 1.22, you can enable the Topology Aware Hints feature to achieve the same effect as the topologyKeys field. For more information, see [Topology Aware Hints](https://kubernetes.io/docs/concepts/services-networking/topology-aware-hints/).
    

## Enhancements to Kubernetes 1.22

### Observability

-   More metrics about the access and requests to the Kubernetes API server are added. This improves the observability of the Kubernetes API server.
    
-   Key metrics of control plane components can be collected for ACK Pro clusters, ACK Serverless Pro clusters, and ACK Edge Pro clusters. This improves the observability of control plane components.
    

### Stability

The following enhancements are provided for all types of ACK clusters:

-   Protection for storage resources is improved to reduce the load on etcd during cold starts.
    
-   Traffic throttling can be performed on the Kubernetes API server based on the combination of the sources, types, and routes of requests. This reduces the load on etcd during cold starts.
    

### Performance improvements

-   kubelet: During the in-place update of kubelet, the system prevents pod restarts with the best effort. For more information, see [kubelet's calculation of whether a container has changed can cause cluster-wide outages](https://github.com/kubernetes/kubernetes/issues/63814).
    
-   kube-proxy: kube-proxy is compatible with Alibaba Cloud Linux 2 (kernel-4.19.91-23) and later versions. When the IP Virtual Server (IPVS) mode is enabled, conn\_reuse\_mode is not set to 0. For more information, see [\[ipvs\] Set conn\_reuse\_mode=1 on Linux kernel version >= v5.9](https://github.com/kubernetes/kubernetes/issues/93297).
    
-   ACK Serverless clusters: ACK Serverless clusters do not proactively evict Elastic Container Instance-based pods if virtual nodes are not ready. This reduces business losses.
    
-   ACK Pro and ACK Edge Pro clusters: The scheduler is optimized. Scheduling features are improved, including gang scheduling, topology-aware CPU scheduling, and topology-aware GPU scheduling. For more information, see [Overview of ACK Pro clusters](/help/en/ack/overview-of-ack-pro-clusters#concept-2558837).
    

### Fixed issues

The issue of EndpointSlice leakage in specific scenarios is fixed for kube-controller-manager. For more information, see [Fixing how EndpointSlice Mirroring handles Service selector transitions](https://github.com/kubernetes/kubernetes/pull/105997).

## References

-   [CHANGELOG-1.21.md](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.21.md)
    
-   [CHANGELOG-1.22.md](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.22.md)
