The Kubernetes community releases a minor version approximately every four months. Container Service for Kubernetes follows the upstream release cadence for Kubernetes versions, including their creation, maintenance, and discontinuation. This topic describes how ACK supports different Kubernetes versions, covering version releases, support status, the version lifecycle, and support policies.

## Version Releases

This section provides details about the Kubernetes versions supported by ACK managed clusters.

**Important**

Starting from version 1.31, ACK has expanded its support from only even-numbered minor versions (such as 1.28 and 1.30) to all minor versions of Kubernetes. Additionally, for minor versions 1.31 and later, the ACK support period is adjusted to one year.

**Version**

**Status**

**ACK Release Date**

**ACK End-of-Life Date**

[1.35](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-35-release-notes)

Released

February 2026

February 28, 2027

[1.34](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-34-release-notes)

Released

September 2025

September 30, 2026

[1.33](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-33-release-notes)

Released

May 2025

May 31, 2026

[1.30](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-30-release-notes)

Released

June 2024

June 30, 2026

**Expand to view end-of-life versions**

**Important**

Clusters that run on expired versions pose security and stability risks. To upgrade your cluster to a supported version, see [Manually Upgrade a Cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#task-1664343) or [Automatically Upgrade a Cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-upgrade-an-ack-cluster).

**Version**

**Status**

**ACK Release Date**

**ACK End-of-Life Date**

[1.32](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-32-release-notes)

End of maintenance

January 2025

January 31, 2026

[1.31](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-31-release-notes)

End-of-life

September 2024

September 30, 2025

[1.28](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-28-release-notes)

End-of-life

October 2023

October 31, 2025

[1.26](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-26-release-notes)

Maintenance has ended.

April 2023

April 2025

[1.24](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-24-release-notes#task-2249356)

End-of-life

September 2022

September 2024

[1.22](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-22-release-notes#concept-2170736)

End-of-life

December 2021

October 2023

[1.20](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-20-release-notes#task-2070898)

Stopping maintenance

April 2021

April 2023

[1.18](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-18-release-notes#concept-1964323)

End-of-life

September 2020

September 2022

[1.16](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-16-release-notes#task-2434487)

Maintenance discontinued

February 2020

June 2022

1.14

End-of-life

August 2019

July 2021

[1.12](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-12-release-notes#concept-270435)

End-of-life

March 2019

December 2020

## **Version Number Description**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7198863771/CAEQVBiBgIDIgbLg5xkiIDcxZDYwMjRhZDJhNjRiODA5ZDFmNGI3ZWVkZTA1NTYx4828145_20241217173930.084.svg)

ACK Kubernetes versions are formatted as **x.y.z-aliyun.n**. In this format, x.y.z represents the community Kubernetes version, where x is the major version, y is the minor version, and z is the patch version. The letter n indicates the Alibaba Cloud patch version, also known as the ACK patch version.

## **Version Lifecycle**

After the Kubernetes community releases a new minor version, ACK performs a risk assessment and compatibility test for that version. Typically, ACK makes the new version available for cluster creation and upgrades within two weeks after the community releases a patch for that minor version.

After the Kubernetes community releases a new patch for a minor version, ACK determines whether to release the patch based on the risk level of the bugs that it fixes. For patches that address important security vulnerabilities, ACK typically completes the assessment and validation within 24 hours and then makes the patch version available for cluster creation and upgrades.

## Version Support Policies

-   **Cluster Creation**
    
    ACK supports cluster creation on the three most recent Kubernetes minor versions. For example, if the three most recent minor versions are 1.35, 1.34, and 1.33, you cannot create clusters that run version 1.32 after ACK adds support for version 1.35. You also cannot create clusters that run expired patch versions.
    
    When a new patch is released for a minor version, you can no longer create clusters that run older patch versions. For example, after version 1.30.7 is released, you can no longer use version 1.30.1 to create clusters.
    
-   **Cluster Upgrades**
    
    You can only upgrade a cluster to the next minor version. Skipping minor versions during an upgrade and version rollbacks are not supported. For example, to upgrade an ACK cluster from Kubernetes 1.33 to 1.35, you must first upgrade the cluster to 1.34 and then to 1.35.
    
    For patch versions, you can upgrade a cluster only to the latest patch version. Upgrades to expired patch versions are not supported.
    
-   **Technical Support**
    
    ACK provides technical support for maintained versions. This support includes Q&A, online guidance, troubleshooting, and issue resolution.
    

## **Risks of Expired Versions**

Expired cluster versions pose security and stability risks. After a cluster version expires, you no longer receive new Kubernetes features, bug fixes, or timely and effective technical support. This also exposes your cluster to unpatched security vulnerabilities.

Upgrade your cluster to a secure and stable version.

-   [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster): Upgrade your cluster incrementally to the latest version. You can control the upgrade pace by specifying which nodes to upgrade, setting the maximum number of nodes to upgrade per batch, and configuring upgrade intervals and pause policies.
    
-   [Automatically upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-upgrade-an-ack-cluster): Enable the cluster auto-upgrade feature and select an appropriate upgrade frequency to ensure your cluster is upgraded automatically and periodically.
    

## **Mandatory Upgrades for Expired Versions**

The Kubernetes community does not disclose CVE risks or provide patches for unsupported versions. Potential security risks in expired versions might not be discovered or fixed promptly. Because ACK clusters use a managed architecture, these security risks can affect your cluster and the overall security of Alibaba Cloud. Therefore, ACK does not allow clusters to remain in an expired state for extended periods. ACK performs mandatory upgrades to bring clusters to a secure and stable version.

ACK does not immediately perform a mandatory upgrade after a cluster version expires. You should manually upgrade your cluster to a secure and stable version. Before performing a mandatory upgrade, ACK notifies you at least one month in advance by text message, email, and internal message.

A mandatory cluster version upgrade includes the following:

-   Upgrading [cluster components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/component-overview). This upgrade includes only the components that have compatibility issues with later cluster versions.
    
-   Upgrading the cluster control plane.
    
-   Upgrading node pools and nodes.
    

Mandatory upgrades are not performed in the following cases. You must perform a manual upgrade instead:

-   The cluster type is ACK dedicated cluster. We recommend that you migrate to an ACK Pro managed cluster. For more information, see [Hot migrate an ACK dedicated cluster to an ACK Pro managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/hot-migration-from-ack-dedicated-clusters-to-ack-pro-clusters).
    
-   The cluster runs Kubernetes 1.22 and uses Docker as the container runtime. To migrate to the containerd runtime, see [Migrate the node container runtime from Docker to containerd](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/change-the-container-runtime-from-docker-to-containerd).
    
-   The NGINX Ingress controller version installed in your cluster is outdated and incompatible with newer versions of ACK. For more information, see the component changelog [Nginx Ingress Controller](/help/en/ack/product-overview/nginx-ingress-controller).
    

## **FAQs**

#### **Can I avoid upgrading my cluster version and stay on one version indefinitely?**

No, you cannot. The potential security risks of expired versions can affect your cluster and the overall security of Alibaba Cloud. ACK does not allow clusters to remain in an expired state for extended periods. ACK performs mandatory upgrades to bring clusters to a secure and stable version.

You should promptly upgrade your cluster version ([Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster)) to benefit from the latest features and improved technical support from ACK. Before you upgrade, see the [Release notes](/help/en/doc-detail/2361875.html) to learn about feature changes and upgrade considerations for each version.We recommend that you enable the [Automatically upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-upgrade-an-ack-cluster) feature to ensure your cluster is upgraded automatically and periodically.

#### **My cluster version is old. How can I upgrade it quickly?**

You can use the following two solutions.

-   Method 1: Incrementally upgrade the cluster to the latest Kubernetes version. This method requires multiple, sequential upgrades. You must verify that the applications in the cluster run stably between upgrades. For more information, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
-   Method 2: Create a cluster that runs the latest Kubernetes version and migrate the workloads from the old cluster to the new one. After the migration is complete, you can delete the old cluster. For more information about how to create and configure a cluster, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/).
    

#### **Does ACK support upgrading across multiple versions?**

No, it does not. ACK does not support skipping minor versions during an upgrade. You must upgrade incrementally. Additionally, before you upgrade the cluster control plane, ensure that the node version in the cluster matches the control plane version.

#### **How do I switch from Docker to containerd when upgrading a 1.22 cluster to 1.24?**

ACK no longer supports Docker as a container runtime for clusters of version 1.24 or later. You must migrate the node container runtime from Docker to containerd.

You can switch the runtime on an existing node pool using the node pool upgrade feature, or create a new containerd node pool to perform a rolling migration. For step-by-step instructions, see [Migrate the node container runtime from Docker to containerd](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/change-the-container-runtime-from-docker-to-containerd).

#### **How does ACK ensure cluster upgrade stability?**

An ACK cluster consists of two parts: the control plane and the node pool.

-   Control plane upgrade: Before you upgrade the control plane of a cluster, ACK performs a pre-upgrade check for deprecated APIs, incompatible components, incompatible feature configurations, and control plane issues. The pre-upgrade check does not affect the workloads that run in the cluster. If the pre-upgrade check reports issues, you can fix them based on the suggestions provided in the console. For more information, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
-   Node pool upgrade: Node pool upgrades include kubelet and containerd upgrades. ACK provides pre-upgrade checks to verify the node status, system resources, disk status, and network environment. The check does not affect the services that run in the cluster. If the check reports an issue, refer to the console for remediation suggestions.
    
    You can also configure an upgrade policy to control the upgrade pace by specifying which nodes to upgrade, setting the maximum number of nodes to upgrade in each batch, and configuring a pause policy. If a node has important application data on its system disk, you can also create a [snapshot](/help/en/ecs/user-guide/snapshot-overview) for the node before you upgrade the node pool. For more information, see [Upgrade a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates).
    

#### **What are the considerations for cluster upgrades?**

-   You cannot roll back a cluster upgrade. We recommend that you first upgrade your staging environment. After you verify that the upgrade is successful, you can upgrade your production environment. You can also [prioritize the upgrade of certain nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates#289a37543e2ke) for validation during the upgrade process.
    
-   Each Kubernetes version supports different component versions, features, and deprecated features. For more information, see the [Release notes](/help/en/doc-detail/2361875.html) for each version.
    
-   Follow the [Control Plane Upgrade Precautions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#bedb60902bxau).
    
-   Follow the [Node Pool Upgrade Precautions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates#7ac2e16ab0yx1).
    

## **References**

-   For more information about cluster upgrades, including the impact, upgrade flow, considerations, and upgrade methods, see [Upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-clusters/).
    
-   For information about the operating systems and image versions that ACK supports, see [Operating system image release records](/help/en/ack/product-overview/release-notes-for-os-images).
    
-   For information about CVE vulnerability fixes and related solutions that ACK provides, see [CVE vulnerability fixes](/help/en/ack/product-overview/security-bulletins/).
    
-   For more information about pre-upgrade cluster checks and deprecated APIs, see [Cluster check items and remediation plans](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cluster-check-items-and-suggestions-on-how-to-fix-cluster-issues).
    
-   ACK managed cluster Pro Edition builds on the Basic Edition to deliver enhanced reliability and security for large-scale production environments. It also includes a financially backed Service-level agreement. To migrate, see [Hot migrate from ACK managed cluster Basic Edition to ACK managed cluster Pro Edition](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/hot-migration-from-ack-standard-clusters-to-ack-pro-clusters).
