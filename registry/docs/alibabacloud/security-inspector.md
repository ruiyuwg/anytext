The security-inspector component is essential for performing security inspections. This topic describes its features, usage notes, and release notes.

## Overview

You can use security-inspector to scan workload configurations across multiple dimensions. This helps you understand in real time whether your applications have security risks. The following figure shows the architecture of the security-inspector component.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5737702771/CAEQJhiBgMCFyc.y_xgiIDg4NThlNDNlMDk5MTQyNWFhZWI1MDc0MTI4MWVhZDEw3963382_20230830144006.372.svg)

## Usage notes

The security-inspector component currently supports secure configuration inspection.

-   You can use Polaris with security-inspector to scan workload configurations in your cluster for security risks in real time.
    
    **Note**
    
    Polaris is an open source tool that scans workload configurations in a Kubernetes cluster for security risks. For more information, see [Polaris](https://github.com/FairwindsOps/polaris).
    
-   security-inspector scans workload configurations across multiple dimensions. You can view inspection results in the report, which include health checks, images, networks, resources, and security details. This helps you understand in real time whether your running applications have insecure configurations and provides security hardening recommendations. For more information, see [Use configuration inspection to check workloads in an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-the-inspection-feature-to-detect-security-risks-in-the-workloads-of-an-ack-cluster#task-2552179).
    

## Release notes

### December 2025

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v0.16.7

registry-cn-hangzhou.ack.aliyuncs.com/acs/security-inspector:v0.16.7

2025-12-03

Upgrade the Go version used by the component to 1.24.11 to improve stability.

No impact on business.

### August 2025

**Version number**

**Registry Address**

**Change date**

**Changes**

**Impact**

v0.16.6

registry-cn-hangzhou.ack.aliyuncs.com/acs/security-inspector:v0.16.6

August 11, 2025

Upgrade the Golang version used by the component to 1.24.6 to improve stability.

This upgrade does not affect your services.

### July 2025

**Version Number**

**Registry Address**

**Change Time**

**Change Content**

**Change Impact**

v0.16.5.2-gffa860c-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/security-inspector:v0.16.5.2-gffa860c-aliyun

July 09, 2025

Upgrade the component's Golang version to 1.24.4 to improve stability.

This upgrade will not affect services.

### April 2025

**Version number**

**Registry Address**

**Change date**

**Changes**

**Impact**

v0.16.3.3-ge515753-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/security-inspector:v0.16.3.3-ge515753-aliyun

April 16, 2025

Upgrade the Go version used by the component to 1.24.2 to improve stability.

This upgrade has no impact on your workloads.

v0.16.2.0-gbce6b15-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/security-inspector:v0.16.2.0-gbce6b15-aliyun

April 9, 2025

Fix a crash issue in the component pod when resources in the security-inspector namespace are deleted. The new version logs error messages in the component container logs instead.

This upgrade has no impact on your workloads.

### March 2025

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v0.16.1.0-gea4d02f-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/security-inspector:v0.16.1.0-gea4d02f-aliyun

2025-03-18

Upgrade the Go version used by the component to 1.23.7 to improve stability.

No impact on business.

### January 2025

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.16.0.0-g4e93dcd-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/security-inspector:v0.16.0.0-g4e93dcd-aliyun

2025-01-02

Upgrade the Go version used by the component to 1.23.4 to improve stability.

No impact on business.

### October 2024

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v0.15.0.0-g4218661-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/security-inspector:v0.15.0.0-g4218661-aliyun

2024-10-10

Add support for checking whether plaintext AccessKey pairs are stored in environment variables.

No impact on business.

### August 2024

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.14.1.0-g829a93d-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/security-inspector:v0.14.1.0-g829a93d-aliyun

2024-08-01

Improve version compatibility.

No impact on business.

### July 2024

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v0.14.0.0-gfc02c67-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/security-inspector:v0.14.0.0-gfc02c67-aliyun

2024-07-26

Starting with this version, inspection tasks run in the security-inspector namespace.

No impact on business.

### March 2024

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v0.13.0.0-g88dfa8f-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/security-inspector:v0.13.0.0-g88dfa8f-aliyun

2024-03-26

Expand RBAC-related inspection items, including wildcard detection, cluster-admin role detection, and detection of modifications to default cluster roles such as system:basic-user, system:discovery, and system:public-info-viewer.

No impact on business.

### February 2024

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v0.12.0.7-g6f9d47f-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/security-inspector:v0.12.0.7-g6f9d47f-aliyun

2024-02-21

Add support for configuring whether the component uses the host network and modifying the health check port on the **Add-ons** page.

No impact on business.

### December 2023

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v0.11.0.3-ga2fad87-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/security-inspector:v0.11.0.3-ga2fad87-aliyun

2023-12-21

Preserve user modifications to the ttlSecondsAfterFinished configuration item of security-inspector-polaris-cronjob during component upgrades.

No impact on business.

### June 2023

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v0.10.1.2-g13c9de7-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/security-inspector:v0.10.1.2-g13c9de7-aliyun

2023-06-02

-   Fix an issue where the component malfunctions after upgrading the cluster to version 1.26.3-aliyun.1.
    
-   Optimize periodic scanning logic to ensure only one task runs at a time, preventing multiple pending task pods in the cluster.
    

No impact on business.

### April 2023

**Version**

**Registry Address**

**Last Modified**

**Changes**

**Change Impact**

v0.10.0.3-g15b35c4-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/security-inspector:v0.10.0.3-g15b35c4-aliyun

2023-04-13

Add support for Kubernetes 1.26.

No impact on business.

### February 2023

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.9.1.0-gcdddfa7-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/security-inspector:v0.9.1.0-gcdddfa7-aliyun

2023-02-27

Fix CVE-2023-0286 in the base image used by the component image.

No impact on business.

### December 2022

**Version**

**Image address**

**Modification Time**

**Changes**

**Change impact**

v0.9.0.0-g1d38ec6-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/security-inspector:v0.9.0.0-g1d38ec6-aliyun

2022-12-22

-   Add support for ACK Serverless clusters running Kubernetes 1.18 or later.
    
-   Automatically restore accidentally deleted SLS dashboards by restarting component containers.
    

No impact on business.

v0.8.3.2-ge5496db-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/security-inspector:v0.8.3.2-ge5496db-aliyun

2022-12-13

This version is in canary release.

Speed up program initialization to resolve the issue where inspection tasks could not run immediately after component installation.

No impact on business.

### August 2022

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v0.8.3.1-gf7bf0e0-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/security-inspector:v0.8.3.1-gf7bf0e0-aliyun

2022-08-30

Improve message content for `SecurityInspectorConfigAuditHighRiskFound` and `SecurityInspectorConfigAuditFinished` events by adding links to detailed information.

No impact on business.

### June 2022

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.8.2.16-gc84d60d-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/security-inspector:v0.8.2.16-gc84d60d-aliyun

2022-06-21

-   Fix an issue where the event `MountVolume.SetUp failed for volume "config" : object "kube-system"/"security-inspector-polaris-config" not registered` may occur in Kubernetes 1.22 clusters.
    
-   Optimize API server requests from the component to further reduce load on large clusters.
    

No impact on business.

### April 2022

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.8.1.0-g58d1a56-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/security-inspector:v0.8.1.0-g58d1a56-aliyun

2022-04-11

-   Fix an issue where nodes hosting pods could not be automatically drained due to improper component configuration.
    
-   Fix an issue where inspection reports displayed incorrectly when multiple clusters shared the same log project.
    

No impact on business.

### February 2022

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v0.8.0.0-gb0edd1d-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/security-inspector:v0.8.0.0-gb0edd1d-aliyun

2022-02-15

-   Set the severity level of the `privilegeEscalationAllowed` inspection item to medium.
    
-   Improve support for Kubernetes 1.16 clusters and fix the issue caused by [#84880](https://github.com/kubernetes/kubernetes/issues/84880).
    

No impact on business.

### December 2021

**Version**

**Image address**

**Change Time**

**Change Content**

**Impact**

v0.7.0.5-g8cc37b6-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/security-inspector:v0.7.0.5-g8cc37b6-aliyun

2021-12-03

-   Add support for Kubernetes 1.22. Starting with this version, only clusters running Kubernetes 1.16 or later are supported.
    
-   Add support for ARM64 architecture.
    

No impact on business.

### September 2021

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v0.6.0.4-gc12ad66-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/security-inspector:v0.6.0.4-gc12ad66-aliyun

2021-09-20

-   Add support for scanning against the CIS Kubernetes V1.20 Benchmark v1.0.0 baseline.
    
-   Make the capabilitiesAdded inspection case-insensitive. For more information, see [Use configuration inspection to check workloads in an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-the-inspection-feature-to-detect-security-risks-in-the-workloads-of-an-ack-cluster#task-2552179).
    

No impact on business.

### June 2021

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.5.0.2-g5e33765-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/security-inspector:v0.5.0.2-g5e33765-aliyun

2021-06-24

Fix an issue where report data displayed incorrectly when multiple clusters used the same SLS project.

No impact on business.

### March 2021

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v0.4.0.0-g541eb31-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/security-inspector:v0.4.0.0-g541eb31-aliyun

2021-03-15

-   Add support for CIS Kubernetes baseline checks.
    
-   Add the following Kubernetes events (visible in the Event Hub when a scan is triggered):
    
    -   SecurityInspectorConfigAuditStart: Configuration inspection started.
        
    -   SecurityInspectorConfigAuditFinished: Configuration inspection completed.
        
    -   SecurityInspectorConfigAuditHighRiskFound: High-risk configurations found after configuration inspection.
        
    -   SecurityInspectorBenchmarkStart: Baseline check started.
        
    -   SecurityInspectorBenchmarkFinished: Baseline check completed.
        
    -   SecurityInspectorBenchmarkFailedCheckFound: Failed scored checks found after baseline check.
        

No impact on business.

### January 2021

**Version number**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.3.0.2-gcb49252-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/security-inspector:v0.3.0.2-gcb49252-aliyun

2021-01-05

Add support for scanning anonymous user access permissions to identify insecure RBAC permission configurations.

No impact on business.

### December 2020

**Version**

**Image address**

**Change Time**

**Content updates**

**Impact**

v0.2.0.22-gd1fbaff-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/security-inspector:v0.2.0.22-gd1fbaff-aliyun

2020-12-16

-   Store the latest inspection results using Custom Resource Definitions (CRDs).
    
-   Enable or disable specific inspection items as needed.
    
-   Configure workload whitelists.
    

No impact on business.

### July 2020

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.1.0.3-g69f71f6-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/security-inspector:v0.1.0.3-g69f71f6-aliyun

2020-07-06

Manually trigger configuration inspection tasks to check workloads in your cluster and generate inspection reports.

No impact on business.
