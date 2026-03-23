Knative is an open source serverless framework built on Kubernetes. It provides a cloud-native, cross-platform standard for serverless orchestration. The Knative Serving component is the core of Knative. It manages serverless workloads and provides features such as application deployment and version control. It can also scale application instances down to zero when there is no service traffic. ACK Knative provides a fully managed Serving component. This topic describes the release history of the Knative Serving component.

## Component overview

ACK Knative is fully compatible with the community version of Knative. It integrates with the Alibaba Cloud product ecosystem to provide enhanced features and a wider range of solutions. For more information about Knative, see [Knative overview](/help/en/ack/serverless-kubernetes/user-guide/knative-overview#concept-1956405).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6338795071/p755609.png)

Knative consists the following core components, which provide different features:

-   Knative Serving: provides serverless workload management capabilities. Knative Serving enables serverless deployment, version management, and canary releases for your applications. Knative Serving also supports pod auto scaling based on resource requests. If no traffic is processed, the number of pods is scaled to zero.
    
-   Knative Eventing: provides event management capabilities, which allow you to interface with external event sources, register and subscribe to events, and filter events. The event system decouples event producers and event consumers.
    
-   Knative Functions: allows you to create, build, and deploy Knative Services in an efficient manner. You can deploy stateless, event-driven functions as Knative Services to a Kubernetes cluster by using Knative Functions without the need to have a deep understanding of the underlying technology stack, such as Kubernetes, containers, and Knative.
    

## Usage notes

To learn how to use Knative, see [Deploy and manage the Knative component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-knative). For more information about managing and upgrading the component, see [Manage the Knative component](/help/en/ack/deploy-a-knative-component) and [Upgrade the Knative Serving component](/help/en/ack/upgrade-a-knative-component).

## Release notes

### November 2025

**Version**

**Update time**

**Changes**

**Impact**

v1.18.1.10

November 28, 2025

**Important**

The cluster version must be 1.31 or later.

-   New features:
    
    -   Compatible with Knative community version 1.18.1.
        
    -   Supports Gateway API.
        
    -   Supports the AI inference gateway [Gateway with Inference Extension](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/access-services-through-ack-gateway-with-inference-extension).
        

This upgrade does not affect your services. Perform the upgrade during off-peak hours.

### September 2025

**Version**

**Update time**

**Changes**

**Impact**

v1.16.3.15

September 9, 2025

**Important**

The cluster version must be 1.30 or later.

-   New features:
    
    -   Supports defining wildcard domain names for Knative services.
        
    -   Supports ACS reserved instances.
        

This upgrade does not affect your services. Perform the upgrade during off-peak hours.

### June 2025

**Version**

**Update time**

**Changes**

**Impact**

v1.16.3-aliyun.9

June 25, 2025

**Important**

The cluster version must be 1.30 or later.

-   Compatible with Knative community version 1.16.3.
    
-   Supports HostPath.
    
-   Supports custom `terminationGracePeriodSeconds` and decouples it from the `timeoutSeconds` parameter configuration.
    

This upgrade does not affect your services. Perform the upgrade during off-peak hours.

### December 2024

**Version**

**Update time**

**Changes**

**Impact**

v1.14.2-aliyun.6

December 26, 2024

**Important**

The cluster version must be 1.28 or later.

-   Compatible with Knative community version 1.14.2.
    
-   Supports liveness and readiness probes for multiple containers.
    
-   Supports checking `ContainerHealthy` for all containers to determine if the revision is ready.
    

This upgrade does not affect your services. Perform the upgrade during off-peak hours.

### November 2024

**Version**

**Update time**

**Changes**

**Impact**

v1.12.7-aliyun.6

November 12, 2024

-   Integrates Knative with EventBridge.
    
-   Supports `StartupProbe`.
    

This upgrade does not affect your services. Perform the upgrade during off-peak hours.

### September 2024

**Version**

**Update time**

**Changes**

**Impact**

v1.12.5-aliyun.7

September 9, 2024

-   Compatible with Kourier 1.12.
    
-   The image repository is compatible with ACR Enterprise Edition.
    
-   Supports the dashboard for ECS spot instances.
    
-   In ACK virtual node scenarios, supports specifying ECI as the resource type for reserved instances.
    

This upgrade does not affect your services. Perform the upgrade during off-peak hours.

### June 2024

**Version**

**Update time**

**Changes**

**Impact**

v1.12.4-aliyun.7

June 18, 2024

**Important**

The cluster version must be 1.26 or later.

-   Compatible with Knative community version 1.12.4.
    
-   ACK managed clusters support hosting for Knative control plane components, including `controller`, `autoscaler`, and `webhook`. These components no longer occupy your pod resources. When you install Knative in a cluster, the Knative control plane components are automatically hosted.
    
-   Improves the user experience of the Knative and ASM integration.
    
-   Optimizes the log output of the queue-proxy component.
    

This upgrade does not affect your services. Perform the upgrade during off-peak hours.

### May 2024

**Version**

**Update time**

**Changes**

**Impact**

v1.10.9-aliyun.7

May 23, 2024

-   Supports configuring both private and public ALB instances at the same time.
    
-   Fixes an issue where routing rules were purged when a DomainMapping was deleted.
    
-   Fixes an issue where reserved instances were repeatedly created.
    
-   Supports scaling Knative applications down to zero in ACK serverless clusters.
    

This upgrade does not affect your services. Perform the upgrade during off-peak hours.

### **December 2023**

**Version**

**Update time**

**Changes**

**Impact**

v1.10.6-aliyun.1

December 25, 2023

**Important**

The cluster version must be 1.26 or later.

-   Supports reusing existing ALBs.
    
-   Knative Service supports the Downward API.
    
-   Fixes the CVE-2023-48713 vulnerability.
    

This upgrade does not affect your services. Perform the upgrade during off-peak hours.

### October 2023

**Version**

**Update time**

**Changes**

**Impact**

v1.8.3-aliyun.1

October 17, 2023

-   Supports using DomainMapping to configure an MSE gateway for HTTPS access with certificates in Knative.
    
-   Fixes an issue with reserved instance scale-in.
    

This upgrade does not affect your services. Perform the upgrade during off-peak hours.

### **July 2023**

**Version**

**Update time**

**Changes**

**Impact**

v1.8.2-aliyun.1

July 20, 2023

**Important**

The cluster version must be 1.24 or later.

-   Knative creates a specific number of pods during the initial service phase based on the `autoscaling.knative.dev/activation-scale` setting. This handles traffic spikes when requests scale up from zero.
    
-   Supports upgrading Knative from version 1.4.x to 1.8.2.
    

This upgrade does not affect your services. Perform the upgrade during off-peak hours.

### **June 2023**

**Version**

**Update time**

**Changes**

**Impact**

v1.4.5-aliyun.1

June 19, 2023

-   ACK Serverless Knative supports scaling pods down to zero based on the MSE gateway.
    

-   Supports KServe.
    

This upgrade does not affect your services. Perform the upgrade during off-peak hours.

### May 2023

**Version**

**Update time**

**Changes**

**Impact**

v1.4.3-aliyun.1

May 18, 2023

-   Supports the MSE gateway.
    
-   Supports precise elastic control based on concurrent requests.
    

This upgrade does not affect your services. Perform the upgrade during off-peak hours.

### April 2023

**Version**

**Update time**

**Changes**

**Impact**

v1.4.2-aliyun.1

April 26, 2023

-   Compatible with Kubernetes 1.26.
    
-   Supports Advanced Horizontal Pod Autoscaler (AHPA) for GPU metric prediction.
    
-   Fixes an issue with the Kourier gateway version.
    

This upgrade does not affect your services. Perform the upgrade during off-peak hours.

### March 2023

**Version**

**Update time**

**Changes**

**Impact**

v1.4.1-aliyun.1

March 23, 2023

-   Supports reserved instances.
    
-   The podspec-fieldref parameter is enabled by default.
    
-   Fixes an issue with Kafka Source startup.
    

This upgrade does not affect your services. Perform the upgrade during off-peak hours.
