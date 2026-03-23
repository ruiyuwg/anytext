Container Service for Kubernetes (ACK) strictly abides by the terms of the Certified Kubernetes Conformance Program. This topic describes the changes that ACK has made to support Kubernetes 1.16.

## Version upgrades

All ACK components have been updated and optimized to support Kubernetes 1.16.

**Core component**

**Version**

**Description**

Kubernetes

1.16.9

-   Vulnerability CVE-2020-8555 is fixed in Kubernetes 1.16.9. For more information, see [Vulnerability fixed: CVE-2020-8555 in kube-controller-manager](/help/en/ack/product-overview/vulnerability-fixed-cve-2020-8555-in-kube-controller-manager#concept-2513360).
    
-   Before you update the Kubernetes version of an ACK cluster, read [Update notes for CSI block volumes](https://developer.aliyun.com/article/781386?groupCode=kubernetes) if the applications in the cluster use disk volumes whose type is Block Volume.
    

1.16.6

In Kubernetes 1.16, the built-in CoreDNS version is 1.6.2. Compared with CoreDNS 1.3.1 in Kubernetes 1.14. The new version has the following changes:

-   The proxy plug-in is replaced with the forward plug-in, which offers higher performance.
    
-   By default, the ready plug-in is enabled. It is used to check the readiness of containers.
    

The Corefile will be automatically migrated to match the new CoreDNS version.

Docker

19.03.5 (containerd 1.2.10)

None

etcd

3.4.3

None

## Version details

-   **Performance optimizations**
    
    Compared with Kubernetes 1.14, Kubernetes 1.16.6 has the following performance optimizations:
    
    -   Optimizes PodAffinity to improve performance by about 100%.
        
    -   Optimizes serialization operations. Improves the performance of list operations on pods by 40% and improves the performance of list operations on nodes by 30%.
        
    -   Improves the performance of processing apply requests that involve large map objects on the server side.
        
    -   Improves the heartbeat solution based on node leases. Reduces 50,000 lease queries sent to the API server or etcd per minute in a cluster of 8,000 nodes.
        
    -   Dramatically speeds up the pod creation process. When it comes to creating stateless pods, which does not involve mounting volumes such as ConfigMaps or Secrets to the pods, the following optimizations are provided:
        
        -   Both Kubernetes 1.16.6 and 1.14 meet the service level agreements (SLAs) defined by Special Interest Group (SIG) Scalability. 99% of pods can be started within 5 seconds given that images are already pulled.
            
        -   Based on the statistics of the 1% of pod creation processes that require the longest time, Kubernetes 1.14 requires nearly 5 seconds to create a pod whereas Kubernetes 1.16.6 requires only 3 seconds under the same conditions.
            
    
    Compared with previous versions, Docker 19.03.5 has the following optimizations:
    
    -   Adds the built-in buildkit to speed up image builds.
        
    -   Optimizes the systemd detection logic for the runC command-line tool. Accelerates the container startup process and reduces the memory consumption of containers.
        
    
    Docker 19.03.5 has the following improvements on runtime stability:
    
    -   Fixes the issue where pods occasionally restart when health checks are performed by using exec probes.
        
    -   Fixes vulnerability CVE-2018-15664, which is exposed by the docker cp command.
        
    -   Fixes the issue where Docker does not respond when a rich container that runs multiple processes exits.
        
    -   Fixes the handle leak issue in containerd.
        
    
-   **Feature upgrades**
    
    Compared with Kubernetes 1.14, Kubernetes 1.16.6 has the following important changes.
    
    -   By default, the following API versions are not supported: extensions/v1beta1, apps/v1beta1, and apps/v1beta2. apps/v1beta1 is replaced by apps/v1. The API version used by resources defined in apps/v1beta1 is replaced by apps/v1. The API version used by DaemonSets, Deployments, and ReplicaSets defined in extensions/v1beta1 is replaced by apps/v1. The API version used by NetworkPolicies defined in extensions/v1beta1 is replaced by networking.k8s.io/v1.
        
        **Note**
        
        To ensure compatibility with your workloads, ACK has added support for the preceding API versions in Kubernetes 1.16.6 and will end the support in Kubernetes 1.18. We recommend that you change the API versions as soon as possible.
        
    -   The following kubelet security control parameters are deprecated and removed: AllowPrivileged, HostNetworkSources, HostPIDSources, and HostIPCSources. Access control parameters such as PodSecurityPolicy are added for enhanced security.
        
    -   More features have been stabilized. For example, CustomResourceDefinitions (CRDs) and admission webhooks are in general availability.
        
    

## Enhancements to Kubernetes 1.16.6

ACK has enhanced Kubernetes 1.16 in the following aspects:

-   Enhances stability and performance.
    
    -   Adds retries for idempotent functions to improve the success rate of cluster creation.
        
    -   Running containers are not restarted during kubelet upgrades.
        
    -   Fixes kubelet startup failures caused by hugetlb.
        
-   Improves observability
    
    -   Optimizes the log of liveness probes that are sent from Server Load Balancer (SLB) instances to the API server.
        
    -   Adjusts the log level of aggregationcontroller.
        
    -   Optimizes the output of the get cs command in ACK managed clusters.
        
    -   Optimizes monitoring metrics on sandboxed containers based on compatibility with existing metrics APIs.
        

## References

-   [CHANGELOG-1.16.md](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.16.md)
    
-   [CHANGELOG-1.15.md](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.15.md)
