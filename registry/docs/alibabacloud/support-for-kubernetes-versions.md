The ACK Lingjun cluster is a specialized container service optimized for Intelligent Computing LINGJUN. This fully managed Kubernetes service provides highly available control planes based on native Kubernetes, and supports direct integration with Lingjun compute nodes as worker nodes in Kubernetes clusters. ACK Lingjun clusters periodically release supported Kubernetes versions, maintaining version compatibility with the Kubernetes community. This topic describes the Kubernetes version support for ACK Lingjun clusters, including release history, support rules, release cycles, and version support policies.

## Release history

ACK Lingjun clusters maintain version compatibility across the following releases:

**Version**

**Status**

**Release date**

**End of life date**

[1.31](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-31-release-notes)

Released

Jan 2025

Subject to the actual situation of ACK Lingjun clusters

[1.30](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-30-release-notes)

Released

Jan 2025

Subject to the actual situation of ACK Lingjun clusters

[1.28](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-28-release-notes)

Released

Dec 2023

Subject to the actual situation of ACK Lingjun clusters

[1.22](/help/en/ack/ack-lingjun-managed-clusters/user-guide/kubernetes-lingjun-1-22-release-notes)

Outdated

Nov 2023

Subject to the actual situation of ACK Lingjun clusters

[1.20](/help/en/ack/ack-lingjun-managed-clusters/user-guide/kubernetes-lingjun-1-20-release-notes)

Outdated

Apr 2023

Nov 2023

## **Version description**

The Kubernetes versions supported by ACK Lingjun clusters follow the semantic versioning scheme in the **x.y.z-aliyun.n** format, where x.y.z is the open-source Kubernetes version:

-   `x`: major version (API compatibility changes)
    
-   `y`: minor version (feature enhancements)
    
-   `z`: patch version (bug fixes)
    
-   `n`: Alibaba Cloud patch version
    

For example, version 1.31.1-aliyun.1 is based on open-source Kubernetes 1.31.1. For more information, see [Kubernetes Release Versioning](https://git.k8s.io/sig-release/release-engineering/versioning.md#kubernetes-release-versioning).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3690045471/CAEQOhiBgMD52KqHsxkiIDFmMmY2YTgxMDJlMjRmZDRhOTY1MjY0ZDJiOTlhMmFk4828145_20241217173930.084.svg)

### Version upgrades

Starting January 2025 (Kubernetes 1.31), ACK has expanded the support range from only even-numbered minor versions (such as 1.28 and 1.30) to all minor versions. The actual release dates are subject to the ACK Lingjun clusters' release schedule. After a new version is released, ACK Lingjun clusters will periodically release patch versions for feature updates and vulnerability fixes.

## **Kubernetes version support policy**

-   **Cluster creation**
    
    ACK Lingjun clusters support creation using the three most recent minor versions of Kubernetes. Current supported versions are 1.31, 1.30, and 1.28. Version restrictions:
    
    -   When Kubernetes 1.31 becomes available, minor versions prior to 1.28 will be deprecated for new cluster creation.
        
    -   New patch releases disable earlier patch versions within the same minor version. For example, when version 1.30.7 is released, you can no longer create clusters of version 1.30.1.
        

-   **Cluster upgrade**
    
    -   Valid upgrade path requires sequential minor version upgrades:
        
        1.28 → 1.30 → 1.31
        
    -   Prohibited operations:
        
        -   Cross-version upgrades (1.28 → 1.31)
            
        -   Version rollbacks
            
        
        For example, if your ACK Lingjun cluster is running Kubernetes 1.28, upgrading to 1.31 requires a step-wise upgrade path: first upgrade to 1.30, then upgrade to 1.31.
        
    -   For patch versions, you can upgrade an ACK Lingjun cluster only to the latest patch version.
        
-   **Technical support**
    
    For maintained versions, ACK Lingjun clusters provide comprehensive technical support, including Q&A assistance, real-time guidance, fault diagnosis, and issue resolution. For versions that are no longer maintained, ACK Lingjun clusters will gradually discontinue technical support.
    

## EOL Kubernetes versions

End-of-Life (EOL) Kubernetes versions may contain security vulnerabilities and stability risks. We strongly recommend immediate cluster upgrades. For EOL versions, ACK Lingjun clusters cease security patch delivery and bug resolution, with technical support transitioning to best-effort basis.
