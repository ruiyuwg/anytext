Container Service for Kubernetes (ACK) strictly abides by the terms of the Certified Kubernetes Conformance Program. This topic lists the changes that ACK has made to support Kubernetes 1.18.

## Version upgrade

All ACK components have been upgraded and optimized to support Kubernetes 1.18.8.

  

Core component

Version

Upgrade notes

Kubernetes

1.18.8

Some commonly used API versions are deprecated in Kubernetes 1.18. Before you upgrade a cluster, we recommend that you upgrade the deprecated API versions that are listed in this topic.

Docker

19.03.5 (containerd 1.2.10)

None

etcd

3.4.3

None

CoreDNS

1.6.7

None

## Version details

-   Resource changes and deprecation
    
    The following API versions are deprecated in Kubernetes 1.18:
    
    -   The apps/v1beta1 and apps/v1beta2 API versions of all resources are replaced by apps/v1.
    -   The extensions/v1beta1 API version of DaemonSets, Deployments, and ReplicaSets is replaced by apps/v1.
    -   The extensions/v1beta1 API version of NetworkPolicies is replaced by networking.k8s.io/v1.
    -   The extensions/v1beta1 API version of PodSecurityPolicies is replaced by policy/v1beta1.
    
    The label that specifies the region of a node is changed to topology.kubernetes.io/region. The label that specifies the zone of a node is changed to topology.kubernetes.io/zone. We recommend that you update your workload configurations.
    
-   Feature enhancements
    -   [Server-side Apply](https://kubernetes.io/blog/2020/04/01/kubernetes-1.18-feature-server-side-apply-beta-2/) Beta 2 is introduced. You can view the relationships between the configuration items of a resource in the metadata.managedFields field of the metadata of the resource.
        
    -   The [NodeLocal DNSCache](https://kubernetes.io/docs/tasks/administer-cluster/nodelocaldns/) feature is released to improve the DNS availability and performance of your cluster.
        
    -   The [Volume Snapshot](https://kubernetes.io/docs/concepts/storage/volume-snapshots/) feature is in the public preview phase and supports operations such as volume backup, restoration, and scheduled backup.

## Enhancements to Kubernetes 1.18.8

For Kubernetes 1.18.8, ACK enables the following feature for kubelet: Users who use raw data volumes can upgrade clusters on the fly without the need to drain nodes.

## References

-   [CHANGELOG-1.18.md](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.18.md)
-   [CHANGELOG-1.17.md](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.17.md)
