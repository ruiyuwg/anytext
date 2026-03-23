The ack-onepilot component is an assistant provided by Application Real-Time Monitoring Service (ARMS) for integration with applications deployed in Container Service for Kubernetes (ACK) clusters. This topic introduces ack-onepilot and describes the usage notes and release notes for ack-onepilot.

## Overview

You can use ack-onepilot to facilitate the integration with ARMS and Microservices Engine (MSE). This component provides the following features:

-   Automatic environment configuration: Automatically adds the environment variables required by the ARMS agent in container environments and prepares ARMS agent packages, such as the Java agent. This ensures the efficient and accurate collection and reporting of monitoring data, such as topology data, API calls, abnormal transactions, and slow transactions for Java, Go, and Python applications.
    
-   Microservices integration: Integrates microservices applications built with Spring Cloud or Dubbo that are deployed in the cluster to Microservices Governance. The service governance capabilities provided by MSE enhance the stability of production microservices and improve development efficiency.
    

For more information about ack-onepilot, see [Working principles of the ack-onepilot component](/help/en/arms/application-monitoring/developer-reference/ack-onepilot-assembly-fundamental-description).

## Usage notes

-   Use ack-onepilot to integrate ACK with ARMS:
    
    -   For Java applications deployed in ACK clusters, see [Install an ARMS agent for a Java application deployed in ACK or Container Compute Service (ACS)](/help/en/arms/application-monitoring/user-guide/install-arms-agent-for-java-applications-deployed-in-ack-and-acs#arms-cs-k8s-java).
        
    -   For Go applications deployed in ACK clusters, see [Install an ARMS agent for a Go application deployed in ACK or ACS](/help/en/arms/application-monitoring/user-guide/install-arms-agent-for-golang-applications-deployed-in-ack-and-acs).
        
    -   For Python applications deployed in ACK clusters, see [Install the Python agent for ACK and ACS using the ack-onepilot component](/help/en/arms/application-monitoring/user-guide/install-arms-agent-for-python-applications-deployed-in-ack-and-acs-clusters).
        
    
-   For more information about how to use ack-onepilot to integrate ACK with MSE, see [Implement the microservices governance feature](/help/en/mse/getting-started/enable-microservices-governance-for-microservice-applications-in-an-ack-cluster#task-2478089).
    

## Release notes

### September 2025

**Version**

**Image address**

**Release date**

**Description**

**Impact**

5.1.1

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:5.1.1

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:5.1.1

2025-09-15

-   Parameter settings related to Kubernetes during pod startup is optimized.
    
-   For Python non-intrusive integration, the cramjam dependency is pinned to version 2.10.0 to avoid potential version conflicts.
    
-   User AccessKey/SecretKey pairs in Helm values are automatically redacted for enhanced security.
    
-   The onboarding experience for ACS clusters is optimized.
    

This update has no impact on workloads.

### August 2025

**Version**

**Image address**

**Release date**

**Description**

**Impact**

5.1.0

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:5.1.0

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:5.1.0

2025-08-07

-   Integration with [Cloud Monitor 2.0](/help/en/cms/cloudmonitor-2-0/) is fully supported.
    
-   [ack-onepilot integration can be accelerated using the local image cache mode](/help/en/arms/application-monitoring/user-guide/accelerate-ack-onepilot-integration-in-local-image-cache-mode).
    
-   The issue that user-defined `terminationGracePeriodSeconds` field overwritten by the ack-onepilot component is fixed.
    

-   For ACS clusters, [install an ARMS agent via the automatic method intended for generic Kubernetes environments](/help/en/arms/application-monitoring/user-guide/automatically-install-an-arms-agent-in-an-open-source-kubernetes-cluster).
    
-   For registered clusters, [re-integrate the ARMS component into the cluster](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/enable-arms-for-a-registered-kubernetes-cluster) to grant the necessary CloudMonitor-related permissions.
    

### July 2025

**Version**

**Image address**

**Release date**

**Description**

**Impact**

5.0.0

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:5.0.0

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:5.0.0

2025-07-11

-   [The Python agent can be installed on ACK and ACS clusters via the ack-onepilot component](/help/en/arms/application-monitoring/user-guide/install-arms-agent-for-python-applications-deployed-in-ack-and-acs-clusters) in a fully non-intrusive manner.
    
-   The issue that Label parameters not taking effect for MSE graceful online/offline is fixed.
    

This update has no impact on workloads.

### May 2025

**Version**

**Image address**

**Release date**

**Description**

**Impact**

4.2.0

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:4.2.0

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:4.2.0

2025-05-30

[Monitoring of multi-container applications in a single pod](/help/en/arms/application-monitoring/user-guide/start-monitoring-multi-container-applications-in-a-single-pod) is supported in multiple languages through the Sidecar pattern.

This update has no impact on workloads.

4.1.2

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:4.1.2

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:4.1.2

2025-05-08

-   The network mode of ack-onepilot can be specified. For more information, see [Specify the network mode of ack-onepilot](/help/en/arms/application-monitoring/use-cases/specify-the-network-mode-of-ack-onepilot).
    
-   Specific pod labels can be recognized as application tags. For more information, see [Add and use tags](/help/en/arms/application-monitoring/use-cases/add-and-use-labels).
    
-   Annotation injection configured in Service Mesh (ASM) can be manually disabled. For more information, see [Mount an ARMS agent for Java into services using Istio](/help/en/arms/application-monitoring/use-cases/mount-java-probes-for-services-using-istio).
    

This update has no impact on workloads.

### April 2025

**Version**

**Image address**

**Release date**

**Description**

**Impact**

4.1.1

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:4.1.1

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:4.1.1

2025-04-09

-   Agent versions can be specified at the Kubernetes namespace level.
    
-   Automatic application creation is disabled by default in Enterprise Distributed Application Service (EDAS) integrations with ARMS, where an app ID is required.
    
-   The issue that application profiling metrics in MSE are not reported is fixed.
    

This update has no impact on workloads.

### March 2025

**Version**

**Image address**

**Release date**

**Description**

**Impact**

4.1.0

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:4.1.0

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:4.1.0

2025-03-13

-   The ordering issue that may occur when you inject environment variables is fixed.
    
-   The liveness detection logic for the Portable OpenAPI Proxy (POP) network is optimized.
    
-   The invalid deactivation switch behavior during ARMS integration is fixed.
    
-   The custom JAVA\_TOOL\_OPTIONS integration mode is added. For details, see [How do I configure the mount path for an ARMS agent for Java?](/help/en/arms/application-monitoring/support/how-do-i-specify-the-path-for-mounting-an-arms-agent-for-java)
    
-   The resource discovery issue that may occur in service governance control plane is fixed.
    
-   External node log reporting is supported.
    

This update has no impact on workloads.

### February 2025

**Version**

**Image address**

**Release date**

**Description**

**Impact**

4.0.1

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:4.0.1

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:4.0.1

2025-02-27

The issue that applications in the MSE Microservices Governance Professional Edition namespaces were incorrectly integrated as Enterprise Edition is fixed.

This update has no impact on workloads.

### January 2025

**Version**

**Image address**

**Release date**

**Description**

**Impact**

4.0.0

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:4.0.0

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:4.0.0

2025-01-09

-   The performance of ack-onepilot is optimized.
    
-   ARMS no longer supports integration through annotations. Refer to [Install an ARMS agent for a Java application deployed in ACK or ACS](/help/en/arms/application-monitoring/user-guide/install-arms-agent-for-java-applications-deployed-in-ack-and-acs) and use labels instead.
    

This update has no impact on workloads.

### December 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.3.4

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:3.3.4

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:3.3.4

2024-12-26

-   The application startup failure due to the old component arms-pilot is fixed.
    
-   The startup failure due to failed permission modifications to the agent package in extreme cases is fixed.
    
-   The invalid logic during Python agent integration is removed to accelerate the integration.
    
-   Logs related to timeout are optimized.
    

This update has no impact on workloads.

### November 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.3.3

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:3.3.3

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:3.3.3

2024-11-21

-   The integration of ARMS agent for Istio DNS proxy is adapted.
    
-   The health check intervals of ack-onepilot is adjusted to accelerate its startup.
    

This update has no impact on workloads.

3.3.2

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:3.3.2

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:3.3.2

2024-11-07

The logging and event notification logic for MSE is optimized when MSE is not integrated.

This update has no impact on workloads.

### October 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.3.1

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:3.3.1

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:3.3.1

2024-10-29

-   Sidecar injection can be skipped by configuring environment variables.
    
-   Fields for log reporting are added.
    

This update has no impact on workloads.

3.3.0

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:3.3.0

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:3.3.0

2024-10-11

-   The agent package can be updated in a progressive manner to ensure service availability throughout the update.
    
-   The integration issue in cases of network disconnection is fixed.
    
-   The issue with Helm failing to parse in specific scenarios is fixed.
    

This update has no impact on workloads.

### September 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.2.5

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:3.2.5

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:3.2.5

2024-09-10

The occasional restart issue that occurs when you use MSE is fixed.

This update has no impact on workloads.

3.2.4

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:3.2.4

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:3.2.4

2024-09-03

-   Supports integration with Python language applications.
    
-   Some bugs related to graceful startup and shutdown are fixed by MSE.
    

This update has no impact on workloads.

### July 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.2.3

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:3.2.3

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:3.2.3

2024-07-30

Go language server-side governance feature is available in MSE.

This update has no impact on workloads.

3.2.2

registry.{REGION}.aliyuncs.com/acs/ack-onepilot:3.2.2

registry.{REGION}.aliyuncs.com/acs/ack-onepilot-init:3.2.2

2024-07-05

The issue that applications fail to start due to invalid ARMS parameter values is fixed.

This update has no impact on workloads.

### **June 2024**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.2.0

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot:3.2.0

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot-init:3.2.0

2024-06-19

-   Supports integration with Go language applications.
    
-   Automatic injection of crash logs parameters is available in Java applications.
    

This update has no impact on workloads.

3.1.2

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot:3.1.2

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot-init:3.1.2

2024-06-19

The issue that causes access failures due to symbolic link handling problems in certain weak network scenarios.

This update has no impact on workloads.

3.1.1

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot:3.1.1

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot-init:3.1.1

2024-06-13

-   The issue that only partial agent package is downloaded when the network is unstable is fixed.
    
-   The issue that init-container is injected twice when pilotx is used is fixed.
    

This update has no impact on workloads.

### **May 2024**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.1.0

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot:3.1.0

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot-init:3.1.0

May 30, 2024

-   The agent package is available in JAR format.
    
-   The agent package is renamed as aliyun-java-agent.jar. The full path of the package is /home/admin/.opt/AliyunJavaAgent/aliyun-java-agent.jar.
    
-   The default memory consumption of init-container is increased from 100 MB to 250 MB.
    

ack-onepilot 3.1.0 no longer supports ARMS agent versions earlier than 2.7.3.5. Update your ARMS agent or do not update your ack-onepilot to 3.1.0.

### **April 2024**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.20

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot:3.0.20

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot-init:3.0.20

April 17, 2024

The issue that ack-onepilot fails to be started in open source ACK clusters that cannot access the Internet is fixed.

This update has no impact on workloads.

### **March 2024**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.19

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot:3.0.19

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot-init:3.0.19

March 23, 2024

-   The issue that redirection to the ARMS console occasionally fails when new applications are connected is fixed.
    
-   The issue that stateful applications fail to be connected is fixed.
    
-   The issue that ASM applications are connected but do not take effect is fixed.
    

This update has no impact on workloads.

3.0.18

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot:3.0.18

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot-init:3.0.18

March 13, 2024

-   The ACK SDK version is updated to support gRPC health checks.
    
-   ack-onepilot can automatically adapt to the network environment of ASM.
    
-   The issue that the `arms.workload` environment variable occasionally fails to be injected is fixed.
    

This update has no impact on workloads.

### **December 2023**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.17

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot:3.0.17

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot-init:3.0.17

December 26, 2023

-   A new probe version is available for download.
    
-   The internal network connection timeout issue is fixed.
    
-   A feature is added to generate an ACK event each time you update ack-onepilot.
    

This update has no impact on workloads.

### **November 2023**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.16

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot:3.0.16

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot-init:3.0.16

November 28, 2023

ack-onepilot can be downloaded as a TAR package.

This update has no impact on workloads.

### **October 2023**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.15

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot:3.0.15

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot-init:3.0.15

October 18, 2023

Resource configurations for ack-onepilot are added.

This update has no impact on workloads.

### **September 2023**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.14

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot:3.0.14

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot-init:3.0.14

September 5, 2023

-   Graceful update is supported.
    
-   ARMS users can use the AccessKey ID and AccessKey secret of a different account to access ack-onepilot.
    
-   MSE no longer relies on the AliyunMSEForECIRole role.
    
-   Duplicate environment variables used in pods are deleted.
    

This update has no impact on workloads.

### August 2023

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.13

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot:3.0.13

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot-init:3.0.13

August 18, 2023

-   The ARM64 architecture is supported.
    
-   Metrics are optimized and the success rate of mounting ack-onepilot is improved.
    
-   The issue that client creation times out at the webhook stage is fixed.
    

This update has no impact on workloads.

### **June 2023**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.12

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot:3.0.12

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot-init:3.0.12

June 20, 2023

The performance of ack-onepilot is improved.

This update has no impact on workloads.

### April 2023

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.11

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot:3.0.11

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot-init:3.0.11

April 20, 2023

-   The ack-onepilot permission issue is fixed.
    
-   The CPU request and memory request of ack-onepilot can be specified by using environment variables.
    

This update has no impact on workloads.

### March 2023

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.10

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot:3.0.10

registry.{REGION}.ack.aliyuncs.com/acs/ack-onepilot-init:3.0.10

March 24, 2023

-   Issues related to environment variables are fixed.
    
-   Issues are fixed to support Ingresses.
    
-   Globalized documentation is available on the Alibaba Cloud International site.
    
-   Helm V2 is supported.
    

This update has no impact on workloads.

### February 2023

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.9

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot:3.0.9

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot-init:3.0.9

February 20, 2023

-   Namespace labels of ACK can be used to select the microservices namespaces that you want to manage.
    
-   ARMS integration issues are fixed.
    

This update has no impact on workloads.

3.0.8

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot:3.0.8

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot-init:3.0.8

February 8, 2023

-   The number of pods created for ack-onepilot is reduced.
    
-   ASM integration issues are fixed.
    

This update has no impact on workloads.

### January 2023

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.7

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot:3.0.7

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot-init:3.0.7

January 16, 2023

Microservices Governance of MSE can be enabled for different namespaces. The pod parameter mseNamespace can be used to select the microservice namespace that you want to manage.

This update has no impact on workloads.

### November 2022

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.6

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot:3.0.6

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot-init:3.0.6

November 17, 2022

The mseruletrait component is deleted and discontinued.

This update has no impact on workloads.

### October 2022

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.5

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot:3.0.5

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot-init:3.0.5

October 21, 2022

Ingresses can be used to perform canary releases.

This update has no impact on workloads.

### August 2022

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.4

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot:3.0.4

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot-init:3.0.4

August 17, 2022

Labeling and partial label synchronization are supported in ACK clusters.

This update has no impact on workloads.

### July 2022

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.3

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot:3.0.3

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot-init:3.0.3

July 19, 2022

Labels can be used to enable graceful startup for pods.

This update has no impact on workloads.

3.0.2

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot:3.0.2

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot-init:3.0.2

July 5, 2022

Issues related PreStop hooks are fixed.

This update has no impact on workloads.

### June 2022

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.1

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot:3.0.1

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot-init:3.0.1

June 13, 2022

MSE Enterprise Edition can be enabled to provide traffic protection.

This update has no impact on workloads.

### May 2022

**Version**

**Image address**

**Release date**

**Description**

**Impact**

3.0.0

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot:3.0.0

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot-init:3.0.0

May 13, 2022

-   ASM is supported.
    
-   Kubernetes Services can be synchronized to MSE Nacos.
    

This update has no impact on workloads.

2.0.9

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot:2.0.9

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot-init:2.0.9

May 25, 2022

-   Issues related to download timeout settings are fixed.
    
-   Namespace creation issues are fixed.
    
-   The length of the value of the JAVA\_TOOL\_OPTIONS parameter is reduced.
    

This update has no impact on workloads.

### April 2022

**Version**

**Image address**

**Release date**

**Description**

**Impact**

2.0.8

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot:2.0.8

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot-init:2.0.8

April 19, 2022

-   Application High Availability Service (AHAS) traffic protection is supported.
    
-   The logging logic is optimized to help with troubleshooting.
    

This update has no impact on workloads.

2.0.6

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot:2.0.6

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot-init:2.0.6

April 11, 2022

Canary releases can be implemented for agents based on application names.

This update has no impact on workloads.

### March 2022

**Version**

**Image address**

**Release date**

**Description**

**Impact**

2.0.5

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot:2.0.5

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot-init:2.0.5

March 17, 2022

A separate ack-onepilot version is provided for EDAS.

This update has no impact on workloads.

### February 2022

**Version**

**Image address**

**Release date**

**Description**

**Impact**

2.0.4

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot:2.0.4

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot-init:2.0.4

February 28, 2022

The strict mode is supported and only label-based access is supported.

This update has no impact on workloads.

2.0.3

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot:2.0.3

registry.{REGION}.ack.aliyuncs.com/ack-onepilot/ack-onepilot-init:2.0.3

February 11, 2022

Readiness probes are added to prevent service interruptions during ack-onepilot updates.

This update has no impact on workloads.
