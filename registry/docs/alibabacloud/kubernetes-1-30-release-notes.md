Alibaba Cloud Container Service for Kubernetes (ACK) complies with the Kubernetes Certified Conformance program. This topic describes the major changes in Kubernetes 1.30 for ACK, including update notes, new features, deprecated features and APIs, and feature gates.

## Component versions

The following table lists the versions of the core components in an ACK cluster.

**Core component**

**Version number**

Kubernetes

1.30.7-aliyun.1, 1.30.1-aliyun.1

etcd

v3.5.9

containerd

1.6.28

CoreDNS

v1.9.3.10-7dfca203-aliyun

CSI

Upgrade to the latest supported version of the component. For more information, see the component release notes for [csi-plugin](/help/en/ack/product-overview/csi-plugin#DAS) and [csi-provisioner](/help/en/ack/product-overview/csi-provisioner#DAS).

CNI

Flannel v0.15.1.22-20a397e6-aliyun

Terway and TerwayControlplane v1.9.0 and later

**Note**

Starting from v1.30, when you create a new cluster and select Terway NetworkPolicy, the network policy is implemented using eBPF. Upgrading the cluster or its components does not change this behavior. For more information, see [Use network policies in ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-network-policies).

## Update notes

**Category**

**Note**

**Solution**

Operating system (OS)

CentOS and Alibaba Cloud Linux 2 are no longer supported as node pool operating systems. For more information, see [\[Product Change\] Announcement on the discontinuation of maintenance for Alibaba Cloud Linux 2 and CentOS 7](/help/en/ack/product-overview/announcement-on-stopping-maintenance-of-alibaba-cloud-linux-2-and-centos-7).

Change the operating system of a node pool by upgrading the node pool. For more information about the operation and related notes, see [Upgrade a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates).

We recommend that you use the official Alibaba Cloud operating systems: [ContainerOS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/containeros-overview/) and [Alibaba Cloud Linux 3](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-alibaba-cloud-linux-3).

kube-proxy component

In versions later than v1.29, kube-proxy changes how the \`conntrack\_max\` value is configured. It calculates and updates the node's \`conntrack\_max\` value based on the kube-proxy configuration and the number of CPU cores. In versions from v1.23 to v1.28, kube-proxy does not overwrite a manually set \`conntrack\_max\` value. After you upgrade to v1.29 or later, kube-proxy may automatically lower the \`conntrack\_max\` value based on its new logic. For more information, see [#120448](https://github.com/kubernetes/kubernetes/pull/120448).

If you previously customized the \`conntrack\_max\` value, add the `nf_conntrack_max` setting and other configurations to the kube-proxy ConfigMap before you upgrade. This prevents the value from being overwritten. For more information, see [How do I increase the Linux connection tracking (Conntrack) limit?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-jbl-6zq-9b5).

To check if the sysctl value was modified, enable the cluster inspection feature. For more information, see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).

## Features

Version 1.30.7-aliyun.1 fixes the vulnerability [CVE-2024-10220](/help/en/ack/product-overview/vulnerability-cve-2024-10220).

### **In Kubernetes 1.29**

-   A sleep action is added to the PreStop hook. This allows a container to pause for a specified time before it is terminated to wait for pending processes or network requests. For more information, see [KEP-3960: Introducing Sleep Action for PreStop Hook](https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/3960-pod-lifecycle-sleep-action).
    
-   SidecarContainers is now in Beta and enabled by default. This feature lets you run an init container as a sidecar container by setting its `restartPolicy` to `Always`. A sidecar container can start, stop, or restart independently without affecting the main application container or other init containers. For more information, see [Sidecar Containers](https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/).
    
    When you use this feature, make sure that the kubelet version on the nodes is the same as the control plane version.
    
-   The new ServiceCIDR resource type lets you dynamically configure the range of ClusterIP addresses for Services in the cluster. This feature is in Alpha and disabled by default. For more information about dynamically expanding the number of available IP addresses for a Service, see [KEP-1880: Multiple Service CIDRs](https://github.com/kubernetes/enhancements/tree/master/keps/sig-network/1880-multiple-service-cidrs).
    
-   The Persistent Volume Claim (PVC) and Container APIs used the same ResourceRequirements struct to define resource `requests` and `limits`. As a result, when the Container `resources` struct changed, for example, by adding a `claims` field, the PVC API also changed. Therefore, PVCs now use a separate VolumeResourceRequirements struct that contains only `requests` and `limits`, and not `claims`. For more information, see [Volume resource requirements](https://github.com/kubernetes/kubernetes/pull/118653).
    
-   The `PodReadyToStartContainers` condition is now in Beta and enabled by default. This condition indicates that the pod sandbox has been created and its network is configured. This helps the kubelet better track the pod's startup status. For more information, see [Pod conditions](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-conditions).
    
-   PodAffinity and PodAntiAffinity now support \`matchLabelKeys\` and \`mismatchLabelKeys\`. This solves a problem where the scheduler could not distinguish between old and new pods during a deployment's rolling update, which caused unexpected scheduling results. When you configure \`matchLabelKeys\` for PodAffinity, the deployment adds a `pod-template-hash` label to the ReplicaSet. Each pod in the deployment is assigned a corresponding hash string. This instructs the scheduler to evaluate only pods with the same `pod-template-hash` value, which helps distinguish pods within the same update batch. For more information, see [KEP-3633](https://github.com/kubernetes/enhancements/tree/master/keps/sig-scheduling/3633-matchlabelkeys-to-podaffinity#user-stories-optional).
    
-   In addition to core Kubernetes API resources, ValidatingAdmissionPolicy type checking now supports CustomResourceDefinition (CRD) and API Extension types. This helps ensure policy reliability and correct cluster configuration. For more information, see [type-checking](https://kubernetes.io/docs/reference/access-authn-authz/validating-admission-policy/#type-checking).
    
-   The new UserNamespacesPodSecurityStandards feature gate integrates user namespaces with Pod Security Standards. When this feature is enabled, containers can be run as a non-root user or as a specific user defined in the pod's security context. This feature is in Alpha and is disabled by default. It may remain disabled in future versions. For more information, see [KEP-127: Update PSS based on feature gate](https://github.com/kubernetes/kubernetes/pull/118760).
    
-   For node objects, the new DisableNodeKubeProxyVersion feature gate deprecates the `status.nodeInfo.kubeProxyVersion` field. This prevents the `kubeProxyVersion` field from being set on the node. Because the kubelet cannot always accurately identify the kube-proxy version, this field can be inaccurate. This feature is in Alpha and is disabled by default.
    
-   The JobBackoffLimitPerIndex feature gate is now in Beta and enabled by default. This feature lets you specify the maximum number of retries for each index in an indexed job. For more information about indexed jobs, see [Indexed Job for Parallel Processing with Static Work Assignment](https://kubernetes.io/docs/tasks/job/indexed-parallel-processing-static/).
    

### In Kubernetes 1.30

-   The ImageMaximumGCAge feature allows the kubelet to configure the maximum time to live (TTL) for an unused image before it is garbage collected. If an image remains unused after the specified time, it becomes eligible for garbage collection. The default value is `"0s"`, which means no time limit is set. This feature was promoted to Beta in v1.30 after entering Alpha in v1.29.
    
-   The kubelet adds the `image_pull_duration_seconds` metric to track image pull times. For more information, see [List of Alpha Kubernetes Metrics](https://kubernetes.io/docs/reference/instrumentation/metrics/#list-of-alpha-kubernetes-metrics).
    
-   The LegacyServiceAccountTokenCleanUp feature gate is now Generally Available (GA) and enabled by default. If an auto-generated secret for a ServiceAccount is unused for a specific period (one year by default) and is not mounted by any pod, the kube-controller-manager adds the `kubernetes.io/legacy-token-invalid-since` label to the secret. The label's value is the current date, which marks the secret as invalid. If the secret remains unused for another specific period (one year by default) after being marked invalid, the kube-controller-manager automatically removes it. To reactivate a secret that is marked invalid but not yet removed, you can remove the `kubernetes.io/legacy-token-invalid-since` label. For more information, see [Auto-generated legacy ServiceAccount token clean up](https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/#auto-generated-legacy-serviceaccount-token-clean-up) and [Legacy ServiceAccount token cleaner](https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/#legacy-serviceaccount-token-cleaner).
    
-   In v1.30, if the kube-proxy `--nodeport-addresses` flag is not set, which is the default behavior, updates to a NodePort Service affect only the primary node IP address, not all of the node's IP addresses. For more information, see [#122724](https://github.com/kubernetes/kubernetes/pull/122724).
    
-   To prevent configuration conflicts and security issues, do not configure the OIDC Issuer URL with the same value as the API Server ServiceAccount Issuer URL. For more information, see [#123561](https://github.com/kubernetes/kubernetes/pull/123561).
    
-   The LoadBalancerIPMode feature lets you add a `.status.loadBalancer.ingress.ipMode` field to a Service of type LoadBalancer. This field specifies the forwarding behavior for the load balancer's IP address. This field can be specified only if the `.status.loadBalancer.ingress.ip` field is also specified. The LoadBalancerIPMode feature is now in Beta. For more information, see [Specifying IPMode of load balancer status](https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-ip-mode) and [Load Balancer IP Mode for Services](https://kubernetes.io/blog/2023/12/18/kubernetes-1-29-feature-loadbalancer-ip-mode-alpha/).
    
-   Pod autoscaling based on ContainerResource metrics from the HorizontalPodAutoscaler (HPA) is now Stable in v1.30. This new behavior allows the HPA to scale based on the resource usage of individual containers in a pod, not just the pod's overall resource usage. This is useful for setting scaling thresholds for the most important containers in a pod. For more information, see [Container resource metrics](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/#container-resource-metrics).
    
-   The AdmissionWebhookMatchConditions feature gate is now GA, enabled by default, and cannot be disabled. This feature lets you define match conditions for admission webhooks. This provides more granular control over when a webhook is called. For more information, see [Dynamic Admission Control](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#matching-requests-matchconditions).
    
-   The new JobSuccessPolicy feature lets you declare a job as successfully completed based on a set of succeeded pods. The success policy can specify certain indexes (such as pod indexes x, y, and z) or a count of indexes (such as 3 pods from a set of indexes) to declare the job complete. This feature is in Alpha. For more information, see [Job success/completion policy](https://github.com/kubernetes/enhancements/tree/master/keps/sig-apps/3998-job-success-completion-policy).
    
-   The new RelaxedEnvironmentVariableValidation feature allows most printable ASCII characters (all characters from 32 to 126, except `=`) in environment variables. This feature is in Alpha and disabled by default. For more information, see [#123385](https://github.com/kubernetes/kubernetes/pull/123385).
    
-   The new `CustomResourceFieldSelectors` feature lets you configure `selectableFields` on a CRD. This lets you use [Field Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/) to filter List, Watch, and DeleteCollection requests. This makes it easier to find or manage CRD resources that meet specific criteria. This feature is in Alpha and disabled by default. For more information, see [Custom Resource Field Selectors](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#custom-resource-field-selectors).
    
-   The CRDValidationRatcheting feature is updated. When you add a new validation to a CRD, the API Server does not reject updates to existing resources, even if those resources become invalid due to the new validation. This behavior applies as long as the invalid parts of the resource remain unchanged. This behavior does not affect existing resources or users. This lets you safely add new validation rules and migrate CRDs to use [OpenAPI v3 schemas](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.0.md#schemaObject) for validation. This feature is now in Beta and enabled by default. For more information, see [CRD Validation ratcheting](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#validation-ratcheting).
    
-   The Downward API now supports dual-stack (IPv4 and IPv6) using the `status.hostIPs` field. The first IP address in the `status.hostIPs` list is always the same as `status.hostIP`. For more information, see [Downward API](https://kubernetes.io/docs/concepts/workloads/pods/downward-api/).
    
-   The NodeLogQuery feature lets you query node service logs using the `/logs` endpoint. This feature is promoted to Beta and is disabled by default. For more information, see [Log query](https://kubernetes.io/docs/concepts/cluster-administration/system-logs/#log-query).
    

## **Deprecated features**

### **In Kubernetes 1.29**

-   CronJob no longer supports setting `CRON_TZ` or `TZ` in `.spec.schedule`. Use the `.spec.timeZone` field instead, which has been available since v1.25. For more information, see [CronJob limitations](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations).
    
-   The networking/v1alpha1 ClusterCIDR API, which was in Alpha, has been removed.
    

### In Kubernetes 1.30

-   The `--prune-whitelist` flag for the \`kubectl apply\` command has been removed. Use `--prune-allowlist` instead. For more information, see [\--prune](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/#alternative-kubectl-apply-f-directory-prune).
    
-   The SecurityContextDeny admission plugin, deprecated in v1.27, is removed in v1.30. Use the PodSecurity admission plugin instead. This plugin has been Stable since v1.25 and is enabled by default. For more information, see [PodSecurity](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#podsecurity).
    

## **Deprecated APIs**

The \`flowcontrol.apiserver.k8s.io/v1beta2\` API version of FlowSchema and PriorityLevelConfiguration is deprecated in v1.29. Use the \`flowcontrol.apiserver.k8s.io/v1\` API version (available since v1.29) or the \`flowcontrol.apiserver.k8s.io/v1beta3\` API version (available since v1.26).

-   Notable changes in \`flowcontrol.apiserver.k8s.io/v1\` include the following:
    
    The `spec.limited.assuredConcurrencyShares` field in PriorityLevelConfiguration is renamed to `spec.limited.nominalConcurrencyShares`. This field defaults to 30 if it is not specified. An explicit value of 0 is not changed to 30.
    
-   Notable changes in \`flowcontrol.apiserver.k8s.io/v1beta3\` include the following:
    
    The `spec.limited.assuredConcurrencyShares` field in PriorityLevelConfiguration is renamed to `spec.limited.nominalConcurrencyShares`.
    

## **Feature gates**

For more information about Kubernetes feature gates, including version support and feature descriptions, see [Feature Gates](https://kubernetes.io/docs/reference/command-line-tools-reference/feature-gates/).

Feature gates generally have three stages:

-   Alpha: The feature is disabled by default.
    
-   Beta: The feature is typically enabled by default.
    
-   GA: The feature is enabled by default and cannot be disabled. The feature gate toggle is no longer needed.
    

## **References**

For the complete change logs for Kubernetes 1.29 and 1.30, see [CHANGELOG-1.29](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md) and [CHANGELOG-1.30](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md).
