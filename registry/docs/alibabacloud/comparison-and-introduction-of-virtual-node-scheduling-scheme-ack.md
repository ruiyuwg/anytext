The scheduling methods for virtual nodes differ between ACK managed clusters (Pro and Basic Editions) and ACK dedicated clusters. These solutions are designed for specific use scenarios, such as scheduling pods only to virtual nodes or spreading pods across zones. This topic helps you select a suitable scheduling method based on your scheduling scenario and cluster type.

## **Common virtual node scheduling scenarios**

1.  Schedule pods only to virtual nodes.
    
2.  Prioritize scheduling to ECS nodes and schedule to virtual nodes only when ECS node resources are insufficient.
    

For an ACK managed cluster (Basic Edition), we recommend that you use the label `alibabacloud.com/eci=true` for the first scenario. For the second scenario, we recommend that you upgrade the cluster to an ACK managed cluster (Pro Edition).

**Note**

ACK managed clusters (Pro Edition) provide scheduling capabilities that can better meet the requirements of the second scenario, offering higher reliability, Service-Level Agreement (SLA) guarantees, and larger cluster capacity. ACK supports seamless migration from an ACK managed cluster (Basic Edition) to an ACK managed cluster (Pro Edition). For more information, see [Hot migrate an ACK managed cluster (Basic Edition) to an ACK managed cluster (Pro Edition)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/hot-migration-from-ack-standard-clusters-to-ack-pro-clusters).

## **Usage notes**

-   Using the label `alibabacloud.com/eci=true` has the highest priority. If you use this label, the following scheduling methods are overridden:
    
    -   Kubernetes native scheduling semantics, such as nodeSelector, affinity and anti-affinity, and pod topology spread constraints
        
    -   ResourcePolicy
        
    -   ElasticResource (Annotation: `alibabacloud.com/burst-resource`)
        
-   We do not recommend that you use ElasticWorkload and ElasticResource (Annotation: `alibabacloud.com/burst-resource`) because they are in an inactive development state.
    
-   The virtual-kubelet-autoscaler component is no longer maintained. We recommend that you upgrade your ACK managed cluster (Basic Edition) to an ACK managed cluster (Pro Edition) and uninstall this component to free up node resources. You can implement spread deployment and affinity-based deployment for ECI pods based on Kubernetes native scheduling semantics. For more information, see [Implement spread deployment and affinity-based scheduling for ECI pods across zones](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/spread-elastic-container-instance-based-pods-across-zones-and-configure-affinities).
    
-   If a pod that is scheduled to a virtual node needs to use a dynamically provisioned disk volume, `WaitForFirstConsumer` type StorageClasses are not supported with the following scheduling methods:
    
    -   Using labels: `alibabacloud.com/eci=true`.
        
    -   By specifying a virtual node using nodeName.
        

## **Solution comparison and suggestions on how to select solutions**

The following terms are used in the comparison tables:

-   Priority-based scheduling: When different types of nodes exist in a cluster, you can configure the priority for scheduling pods to different types of nodes. For example, you can prioritize scheduling to ECS nodes and schedule to virtual nodes only when ECS node resources are insufficient.
    
    If a method does not support priority-based scheduling, you cannot orchestrate priorities for different node collections. For example, if you use the `alibabacloud.com/eci=true` label, you can only schedule specified pods to virtual nodes. You cannot configure the system to prioritize scheduling pods to ECS nodes and then to virtual nodes only when ECS resources are insufficient.
    
-   Strict scheduling policy: Specifies whether the rules for scheduling to different types of node pools are hard constraints.
    
    -   A non-strict scheduling policy is a soft constraint. For example, the preferredDuringSchedulingIgnoredDuringExecution field of node affinity prioritizes scheduling pods to ECS nodes. However, pods may still be scheduled to virtual nodes even when ECS node resources are available because of the comprehensive node scoring policy.
        
    -   A strict scheduling policy is a hard constraint. For example, ResourcePolicy can ensure that pods are scheduled to ECS nodes if the ECS nodes have sufficient resources to meet the pod's requirements.
        

### ACK managed cluster (Pro Edition)

**Scheduling method**

**Typical scenario**

**Priority-based scheduling**

**Preferentially scale in ECI pods**

**Recommended**

**Related operations**

labels: `alibabacloud.com/eci=true`

Schedules pods only to virtual nodes. You cannot specify which virtual node to schedule the pods to.

Not supported

N/A

Recommended

[Schedule pods to run on ECI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-the-virtual-node-controller-and-use-it-to-create-elastic-container-instance-based-pods)

Kubernetes native scheduling semantics

nodeSelector

After you add a toleration, you can schedule pods only to virtual nodes and specify which virtual node to schedule the pods to.

Not supported

N/A

Recommended

[nodeSelector](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector)

Affinity and anti-affinity

You can use Taint, Toleration, and NodeAffinity to specify that pods are scheduled only to ECI, only to ECS, or preferentially to ECS (for example, schedule to virtual nodes when ECS node resources are insufficient). This is an elastic scheduling policy.

This method also supports (and only supports) scaling in ECI first, and then scaling in ECS.

Supported (non-strict scheduling policy)

Supported

Recommended

[Specify resource allocation for ECS and ECI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-eci-scaling)

Pod topology spread constraints

Spreads pods across zones to meet high availability and high-performance scheduling requirements.

Not supported

Supported

Recommended

[Implement spread deployment and affinity-based scheduling for ECI pods across zones](/help/en/doc-detail/2337796.html)

ResourcePolicy

**Important**

In v1.20, the scheduler ignores the unschedulability check of pods for virtual nodes when processing virtual nodes. In v1.22 and later, only the taint check on virtual nodes is ignored.

To maintain the behavior of v1.20, you need to disable the virtual node scheduling capability in the scheduler parameters.

-   Supports priority-based scheduling based on node pools. For example, you can prioritize scheduling to Node Pool A and schedule to Node Pool B when resources are insufficient.
    
-   In scenarios where ECS and ECI are co-deployed, you can also configure resource billing methods. For example, you can prioritize scheduling to subscription ECS, then to pay-as-you-go ECS, and finally to ECI.
    
    This method also supports scaling in pods in the reverse order of scheduling. For example, scale in ECI first, then pay-as-you-go ECS, and finally subscription ECS.
    

Supported (strict scheduling policy)

Supported

Recommended

[Customize priority-based scheduling for elastic resources](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-priority-based-resource-scheduling)

UnitedDeployment

Supports creating a policy to schedule pods to ECS or virtual nodes based on the number of replicas of a deployment. For example, if the number of replicas is less than 10, subscription ECS resources are preferentially used. If the number of replicas is greater than 10 but not more than 20, Spot resources are used. If the number of replicas is greater than 20, ECI resources are used.

Supported

Supported

Recommended

-   [UnitedDeployment](https://openkruise.io/zh/docs/user-manuals/uniteddeployment)
    
-   [Scenarios where ECS and ECI resources are used together](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-the-uniteddeployment-controller-in-ack-clusters#1e3f0ac683fca)
    

ElasticWorkload

(In an inactive development state. We recommend that you use UnitedDeployment.)

Schedules replicas of a deployment to ECS or virtual nodes in groups.

Supported

Supported

Not recommended

[Schedule pods of elastic workloads to ECI using Elastic Workload (discontinued)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-ack-kubernetes-elastic-workload)

ElasticResource (Annotation: `alibabacloud.com/burst-resource`)

(In an inactive development state)

Only two elastic scheduling policies are supported:

-   Schedule to virtual nodes when ECS node resources are insufficient (the elastic scheduling policy is `eci`).
    
-   Schedule only to virtual nodes (the elastic scheduling policy is `eci_only`).
    

Supported

Supported

Not recommended

[Implement ECI-based elastic scheduling using ElasticResource (discontinued)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-elastic-container-instance-based-scheduling)

virtual-kubelet-autoscaler component

(Discontinued)

Only supports prioritizing scheduling to ECS nodes and scheduling to virtual nodes only when ECS node resources are insufficient.

Supported

Supported

Not recommended

None

### ACK managed cluster (Basic Edition) **and** ACK dedicated cluster

**Scheduling method**

**Typical scenario**

**Priority-based scheduling**

**Preferentially scale in ECI pods**

**Recommended**

**Related operations**

labels: `alibabacloud.com/eci=true`

Schedules pods only to virtual nodes. You cannot specify which virtual node to schedule the pods to.

Not supported

N/A

Recommended

[Schedule pods to run on ECI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-the-virtual-node-controller-and-use-it-to-create-elastic-container-instance-based-pods)

UnitedDeployment

Supports creating a policy to schedule pods to ECS or virtual nodes based on the number of replicas of a deployment. For example, if the number of replicas is less than 10, subscription ECS resources are preferentially used. If the number of replicas is greater than 10 but not more than 20, Spot resources are used. If the number of replicas is greater than 20, ECI resources are used.

Supported

Supported

Recommended

[UnitedDeployment](https://openkruise.io/zh/docs/user-manuals/uniteddeployment)

Kubernetes native scheduling semantics

nodeSelector

After you add a toleration, you can schedule pods only to virtual nodes and specify which virtual node to schedule the pods to.

Not supported

Supported

Not recommended

Compared with an ACK managed cluster (Pro Edition)**,** the kube-scheduler in an ACK managed cluster (Basic Edition) and an ACK dedicated cluster cannot perceive the underlying inventory during pod scheduling. Therefore, the certainty of successful creation is reduced.

[nodeSelector](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector)

Affinity and anti-affinity

You can use Taint, Toleration, and NodeAffinity to specify that pods are scheduled only to ECI, only to ECS, or preferentially to ECS (for example, schedule to virtual nodes when ECS node resources are insufficient). This is an elastic scheduling policy.

Supported (non-strict scheduling policy)

Supported

[Affinity and anti-affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity)

Pod topology spread constraints

Spreads pods across zones to meet high availability and high-performance scheduling requirements.

Not supported

Supported

[Pod topology spread constraints](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#pod-topology-spread-constraints)

ElasticWorkload

(In an inactive development state. We recommend that you use UnitedDeployment.)

Schedules replicas of a deployment to ECS or virtual nodes in groups.

Supported

Supported

Not recommended

[Schedule pods of elastic workloads to ECI using Elastic Workload (discontinued)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-ack-kubernetes-elastic-workload)

ElasticResource (Annotation: `alibabacloud.com/burst-resource`)

(In an inactive development state)

Only two elastic scheduling policies are supported:

-   Schedule to virtual nodes when ECS node resources are insufficient (the elastic scheduling policy is `eci`).
    
-   Schedule only to virtual nodes (the elastic scheduling policy is `eci_only`).
    

Supported

Supported

Not recommended

[Implement ECI-based elastic scheduling using ElasticResource (discontinued)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-elastic-container-instance-based-scheduling)

virtual-kubelet-autoscaler component

(Discontinued)

Only supports prioritizing scheduling to ECS nodes and scheduling to virtual nodes only when ECS node resources are insufficient.

Supported

Supported

Not recommended

None
