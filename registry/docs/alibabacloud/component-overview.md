Container Service for Kubernetes provides various components, such as application management, log monitoring, and networking, to help you manage and maintain clusters. ACK automatically upgrades some components. You can manually upgrade other components or configure them with finer granularity as needed. This topic describes how to upgrade, install, and uninstall components, and provides a component overview.

## Prerequisites

[Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb)

## Procedure

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the target cluster. Then, in the navigation pane on the left, click **Add-ons**.
    
3.  On the **Add-ons** page, search for the target component. On the component card, install, uninstall, upgrade, or modify component parameters as needed.
    
    **Note**
    
    To ensure control plane stability, the customization of parameters for select control plane core components is supported only for ACK managed cluster Pro Edition, ACK serverless cluster Pro Edition, ACK Edge cluster Pro Edition, and ACK LINGJUN Cluster.
    

## **Reference Information**

### **Component Types**

ACK manages the following cluster component types:

-   System components: Components installed by default when you create an ACK cluster.
    
-   Optional components: Components you can choose to install when you create an ACK cluster to extend cluster features.
    

### **Core Components**

**Component Name**

**Component Type**

**Description**

[Kube Scheduler](/help/en/ack/product-overview/kube-scheduler)

System component

A control plane component that schedules pods to appropriate nodes in a cluster based on node resource usage and pod scheduling requirements.

[Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager#concept-wk1-grd-qfb)

System component

Manages load balancing for cross-node communication in Kubernetes clusters. It integrates Kubernetes with Alibaba Cloud networking services, such as CLB, NLB, and VPC.

[Kube API Server](/help/en/ack/product-overview/kube-api-server#task-2088866)

System component

The bus and ingress gateway for Kubernetes clusters.

[Kube Controller Manager](/help/en/ack/product-overview/kube-controller-manager#task-2088870)

System component

The manager for internal resources in Kubernetes clusters.

[ACK Virtual Node](/help/en/ack/product-overview/ack-virtual-node#task-2441973)

Optional component

Based on the open-source Virtual Kubelet project, it extends support for Aliyun Provider and includes many optimizations to seamlessly connect Kubernetes with ACS and ECI.

### **Application Management**

**Component Name**

**Component Type**

**Description**

[Appcenter (Deprecated)](/help/en/ack/product-overview/appcenter#concept-1918228)

Optional component

A component that provides unified management for multi-cluster application deployment and application lifecycle.

Later, use the [application distribution](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/application-distribution-overview) feature of Distributed Cloud Container Platform ACK One to gain multi-cluster application deployment capabilities.

[ack-kruise](/help/en/ack/product-overview/openkruise#task-2097121)

Optional component

Efficiently manages application containers, Sidecar containers, and image distribution.

[migrate-controller](/help/en/ack/product-overview/migrate-controller#task-1955070)

Optional component

A component developed based on the open-source Velero project for backing up and migrating Kubernetes applications and PV data.

### **Log Monitoring**

**Component Name**

**Component Type**

**Description**

[alicloud-monitor-controller](/help/en/ack/product-overview/alicloud-monitor-controller#concept-1918110)

System component

A system component that integrates ACK with Cloud Monitor.

[metrics-server](/help/en/ack/product-overview/metrics-server#concept-w5w-q3q-zdb)

System component

An enhanced monitoring collection and offline component based on the community's open-source monitoring component. It provides a Metrics API for data consumption and enables HPA.

[ack-cost-exporter](/help/en/ack/product-overview/ack-cost-exporter#task-2078872)

Optional component

A component for data processing in ACK cost analysis.

[ack-node-problem-detector](/help/en/ack/product-overview/ack-node-problem-detector#concept-1935269)

Optional component

An enhanced cluster node anomaly monitoring component based on the community's open-source project. It also integrates with third-party monitoring platforms.

[ack-onepilot](/help/en/ack/product-overview/ack-onepilot)

Optional component

ack-onepilot is a probe access assistant provided by Alibaba Cloud ARMS for Kubernetes application integration scenarios. It enables monitoring of Java, Golang, and Python applications in container environments.

[ack-sysom-monitor](/help/en/ack/product-overview/ack-sysom-monitor)

Optional component

A container monitoring component for the operating system kernel layer in ACK clusters.

[ack-arms-cmonitor](/help/en/ack/product-overview/ack-arms-cmonitor)

Optional component

Use the eBPF edition of ARMS Application Monitoring to non-invasively monitor containerized applications.

[ack-arms-prometheus](/help/en/arms/prometheus-monitoring/prometheus-monitoring-change-records#concept-2473006)

Optional component

Use Alibaba Cloud Prometheus to monitor Container Service for Kubernetes clusters.

[logtail-ds](/help/en/sls/sls-release-notes#concept-w5w-q3q-zdb)

Optional component

Use Simple Log Service to collect Kubernetes container logs.

### **Storage**

**Component Name**

**Component Type**

**Description**

[storage-operator](/help/en/ack/product-overview/storage-operator#task-2061194)

System component

Manages the lifecycle of storage components.

[csi-plugin](/help/en/ack/product-overview/csi-plugin#concept-2043905)

Optional component

Supports mounting and unmounting volumes.

This component is installed by default when you create a cluster.

[csi-provisioner](/help/en/ack/product-overview/csi-provisioner#concept-2043907)

Optional component

Supports automatic creation of volumes.

If you select the CSI plug-in to integrate Alibaba Cloud storage when creating a cluster, this component is installed by default.

[csi-compatible-controller](/help/en/ack/product-overview/csi-compatible-controller)

Optional component

Allows csi-plugin and FlexVolume storage components to coexist.

### **Networking**

**Component Name**

**Component Type**

**Description**

[CoreDNS](/help/en/ack/product-overview/coredns)

System component

The default DNS service discovery plug-in in ACK clusters. It complies with the Kubernetes DNS-Based Service Discovery specification.

[Gateway API](/help/en/ack/product-overview/gateway-api#concept-2070185)

System component

A set of resources in Kubernetes for modeling service network traffic. Its goal is to establish a powerful, extensible, and role-oriented service networking model.

[ACK eRDMA Controller](/help/en/ack/product-overview/ack-erdma-controller)

Optional component

You can use the eRDMA controller to manage eRDMA network interface controllers (NICs).

[ACK NodeLocal DNSCache](/help/en/ack/product-overview/ack-nodelocal-dnscache#concept-2070185)

Optional component

A DNS local caching solution based on the open-source NodeLocal DNSCache project.

[ALB Ingress Controller](/help/en/ack/product-overview/alb-ingress-controller)

Optional component

Based on Alibaba Cloud Application Load Balancer (ALB), it provides more powerful Ingress traffic management. It is compatible with Nginx Ingress, handles complex business routing and automatic certificate discovery, and supports HTTP, HTTPS, and QUIC protocols. This meets the demand for extreme elasticity and large-scale Layer 7 traffic processing in cloud-native application scenarios.

[MSE Ingress Controller](/help/en/mse/user-guide/manage-the-mse-ingress-controller-component)

Optional component

Based on the MSE cloud-native gateway, it is suitable for microservice scenarios and compatible with Nginx Ingress. It supports various service discovery, authentication, and multi-language plug-in extensions. It provides Ingress traffic management capabilities such as phased release, prefetch, and rate limiting.

[Terway](/help/en/ack/product-overview/terway)

Optional component

Alibaba Cloud's open-source Terway CNI plug-in supports eBPF network acceleration and Kubernetes standard NetworkPolicy for defining access policies between containers. Use Terway to enable network communication within Kubernetes clusters. If you select the Terway network plug-in when creating a cluster, this component is installed by default.

[Flannel](/help/en/ack/product-overview/flannel#concept-2461414)

Optional component

A Container Network Interface (CNI) plug-in. The Flannel network mode used on Alibaba Cloud adopts the Alibaba Cloud VPC mode.

If you select the Flannel network plug-in to enable internal network communication when creating a cluster, this component is installed by default.

[Nginx Ingress Controller](/help/en/ack/product-overview/nginx-ingress-controller#concept-2461414)

Optional component

The Nginx Ingress Controller parses Ingress forwarding rules. When the Ingress Controller receives a request, it matches the Ingress forwarding rules and forwards the request to the backend Service.

[Poseidon](/help/en/ack/product-overview/poseidon)

Optional component

ACK's self-developed container NetworkPolicy plug-in. It supports Kubernetes standard NetworkPolicy features.

-   For ACK serverless clusters and scenarios where ECI instances are used in ACK clusters, install the Poseidon component to use the NetworkPolicy feature.
    
-   For other ACK cluster scenarios, install the Terway component to use the NetworkPolicy feature.
    

[Sidecar Acceleration using eBPF](/help/en/ack/product-overview/sidecar-acceleration-using-ebpf)

Optional component

Uses Sidecar acceleration to reduce network latency in Alibaba Cloud Service Mesh.

[Gateway with Inference Extension](/help/en/ack/product-overview/ack-gateway-with-inference-extension)

Optional component

Built on the open-source Envoy Gateway project, it supports Kubernetes Layer 4/Layer 7 routing services and provides intelligent load balancing for AI large language model (LLM) inference scenarios.

### **Security**

**Component Name**

**Component Type**

**Description**

[ack-advanced-audit](/help/en/ack/product-overview/ack-advanced-audit)

Optional component

The ack-advanced-audit component is based on the open source project [Falco](https://falco.org/). It uses the extended Berkeley Packet Filter (eBPF) feature of the kernel to audit system calls for operations within containers. This feature lets you audit commands executed by members of your organization or applications within a container.

[ack-pod-identity-webhook](/help/en/ack/product-overview/ack-pod-identity-webhook)

Optional component

The ack-pod-identity-webhook component helps you more conveniently use the RRSA (RAM Roles for Service Accounts) feature provided by Container Service for Kubernetes. It automatically injects mounted OIDC Tokens and environment variable configurations that your applications depend on into your application pods, eliminating tedious manual configuration.

[ack-ram-authenticator](/help/en/ack/product-overview/ack-ram-authenticator)

System component

The ack-ram-authenticator component is an authentication plugin for ACK managed clusters. It uses the native Kubernetes [Webhook Token Authentication](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#webhook-token-authentication) method to authenticate requests to the cluster API Server using RAM. The component also provides mappings between RAM identities and RBAC permissions as Custom Resource Definitions (CRDs). This lets you configure RBAC authorization more flexibly.

[gatekeeper](/help/en/ack/product-overview/gatekeeper#task-1938542)

Optional component

Helps you easily manage and apply Open Policy Agent (OPA) policies within clusters, enabling features such as namespace label management.

[kritis-validation-hook](/help/en/ack/product-overview/kritis-validation-hook#task-2445014)

Optional component

A key component for container image signature validation during trusted container deployment.

[aliyun-acr-credential-helper](/help/en/ack/product-overview/aliyun-acr-credential-helper)

Optional component

aliyun-acr-credential-helper pulls private images by reading the acr-configuration in the kube-system namespace within ACK clusters. It supports the following features:

-   The passwordless component currently supports only ACR Enterprise Edition and ACR Personal Edition created on or before September 8, 2024.
    
-   It supports pulling private images from the current user's Container Registry within the cluster. You can pull private images from other users through cross-account authorization or AccessKey ID and AccessKey secret configurations.
    
-   You can pull private images from Container Registry in different regions.
    

[policy-template-controller](/help/en/ack/product-overview/policy-template-controller#task-2185042)

Optional component

A key component that implements policy management features.

[security-inspector](/help/en/ack/product-overview/security-inspector#task-2552166)

Optional component

A key component that enables the security inspection feature.

### **Elasticity and scheduling**

**Component Name**

**Component Type**

**Description**

[ACK GOATScaler](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/instant-elasticity)

Optional component

Provides instant node elasticity.

[ack-kubernetes-cronhpa-controller](/help/en/ack/product-overview/ack-kubernetes-cronhpa-controller#task-2095127)

Optional component

Uses ack-kubernetes-cronhpa-controller to achieve timed scaling for application loads.

[ack-vertical-pod-autoscaler](/help/en/ack/product-overview/ack-vertical-pod-autoscaler)

Optional component

ack-vertical-pod-autoscaler can monitor the resource consumption mode of pods and provide recommendations on CPU and memory allocation. In addition, it can adjust resource allocation without changing the number of replicated pods. ack-vertical-pod-autoscaler is suitable for stateful applications that require stable resource supply.

[AHPA Controller](/help/en/ack/product-overview/application-intelligence-controller)

Optional component

AHPA predicts the number of pods required by an application based on the historical metric data of the application. This helps ACK scale resources for applications at the earliest opportunity. AHPA uses proactive prediction and passive prediction to adjust the number of pods in real time. AHPA also lets you configure policies to specify the maximum and minimum numbers of pods within a specific time period.

[ack-koordinator（ack-slo-manager）](/help/en/ack/product-overview/ack-koordinator-fka-ack-slo-manager#task-2172306)

Optional component

A core application that supports differentiated Service Level Objectives (SLO) capabilities in ACK. It significantly improves resource utilization efficiency while ensuring application service quality.

### **Others**

**Component Name**

**Component Type**

**Description**

[ack-helm-manager](/help/en/ack/product-overview/ack-helm-manager#task-2206291)

Optional component

Provides the ability to manage custom components.

[ack-cgpu](/help/en/ack/product-overview/ack-cgpu)

Optional component

Enables multiple containers to share the same GPU device through a GPU sharing scheduling framework.

[Argo Workflows](/help/en/ack/product-overview/argo-workflows)

Optional component

This component is built on native Argo Workflows and includes enhancements for stability and performance. It supports the deployment of large-scale workflows in your cluster and is ideal for standardized workflow scenarios, such as machine learning pipelines, autonomous driving simulation, genome sequencing, batch data processing, CI/CD, and infrastructure automation.

[aliyun-acr-acceleration-suite](/help/en/ack/product-overview/aliyun-acr-acceleration-suite#concept-1955815)

Optional component

A client plug-in that provides on-demand image loading acceleration. It is deployed as a DaemonSet on worker nodes.

[sandboxed-container-controller](/help/en/ack/product-overview/sandboxed-container-controller#task-2453572)

Optional component

A dedicated controller component provided by the sandboxed container runtime, designed to enhance and extend the basic features of sandboxed containers.

[sandboxed-container-helper](/help/en/ack/product-overview/sandboxed-container-helper#concept-2495792)

Optional component

A component that provides diagnostics and O&M for sandboxed containers.

[sgx-device-plugin](/help/en/ack/product-overview/sgx-device-plugin#task-1930888)

Optional component

A Kubernetes Device Plug-in jointly developed by the Alibaba Cloud Container Service team and the Ant Financial secure computing team for Intel SGX. It lets you more easily use SGX in containers.
