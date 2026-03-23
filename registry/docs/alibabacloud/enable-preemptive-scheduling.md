When cluster resources become insufficient, high-priority tasks may fail to run. After you enable preemption, ACK Scheduler determines and evicts low-priority pods through resource simulation, releasing computing resources to launch high-priority pods.

## **Before you begin**

Before enabling preemption, read [Pod priority and preemption](https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/) to understand the related concepts, including PriorityClass, `priorityClassName`, and how pod priority affects scheduling and eviction order.

## **How preemption works**

When preemption is enabled, ACK Scheduler follows this procedure:

1.  Specify task priority: Add the `priorityClassName` parameter to pod configurations to declare the priority of each pod.
    
    > System components (such as kube-proxy and etcd) are typically associated with the `system-node-critical` PriorityClass, which assigns a high priority. Most system components are deployed as DaemonSets and are not evicted by default.
    
2.  Simulate preemption: When ACK Scheduler detects a pending pod that cannot be scheduled due to insufficient resources, it simulates whether evicting certain low-priority pods would release enough resources for the high-priority pod.
    
3.  Securely evict low-priority pods: After ACK Scheduler triggers the preemption logic, kubelet evicts the identified low-priority pods from the node in a secure manner, releasing resources to complete the scheduling of the high-priority pod.
    
4.  Reschedule evicted pods: Evicted low-priority pods are recreated by their controllers (such as Deployments) and scheduled to other nodes. If cluster resources remain insufficient, the pods stay in a pending state.
    

## **Preemption policies**

ACK Scheduler supports the following preemption policies by default. You can manage and configure them by using the `PreemptionAlgorithm` parameter.

**Policy**

**Description**

Default

The default Kubernetes preemption policy. ACK Scheduler first attempts direct scheduling. When resources are insufficient, ACK Scheduler simulates resource preemption to identify the low-priority pods to evict in order to free up resources for the high-priority pod. For more information, see [Pod priority and preemption](https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/).

ElasticQuota

Performs preemption based on the [ElasticQuotaTree](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/improve-resource-utilization-with-elasticquotatree-and-task-queues). See [ElasticQuota policy details](#elasticquota-policy-details) below.

Auto

Adjusts the preemption policy based on cluster configuration. ACK Scheduler prioritizes the ElasticQuota policy and automatically falls back to the Default policy when the ElasticQuota policy does not take effect.

None

Disables preemption. No preemption behavior occurs in the cluster.

When preemption is enabled, the policy takes effect according to the logic shown in the following figure.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3761985671/CAEQUBiBgIDvufKc2RkiIDNjYzMzNmY2ZGZmMTRiY2E5YjM2MGNlNTFjYzAyNmZh4999147_20250324204343.335.svg)

### **ElasticQuota policy details**

When the ElasticQuota policy is active, ACK Scheduler performs preemption in three steps:

1.  Identify the preemption list: Unlike regular tasks, ACK Scheduler combines all pending pods of an entire [gang](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-gang-scheduling) into a single preemption list. The entire gang is processed only when all pods in the list can be scheduled through preemption. If any single pod cannot be scheduled, the gang is not processed. If any pod in the gang has a high priority, the entire gang is treated as high-priority for preemption purposes.
    
2.  Generate a list of feasible nodes: ACK Scheduler determines candidate nodes using the following rules:
    
    -   If multiple pods in the gang require preemption, any node that matches one pod is added to the candidate pool. ACK Scheduler then attempts to free up resources for the remaining pods.
        
    -   If only one pod requires preemption, ACK Scheduler filters out nodes marked as Unschedulable to accurately identify nodes with insufficient or mismatched resources.
        
3.  Simulate preemption: ACK Scheduler filters pods eligible for preemption from the feasible node list. A pod is eligible if it meets both of the following conditions:
    
    -   It is not currently being preempted by another pod or task.
        
    -   It can be evicted according to the relevant [PodDisruptionBudgets (PDBs)](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets).
        
    
    ACK Scheduler then applies the [ElasticQuotaTree](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/improve-resource-utilization-with-elasticquotatree-and-task-queues) rules configured in the cluster:
    
    -   **If the preempting pod belongs to a Quota**:
        
        -   If current Quota usage is at or below its `Min` guarantee: The Quota has not yet consumed its minimum guaranteed resources. The pod is allowed to preempt pods from other Quotas that are currently using resources above their `Min` guarantee.
            
        -   If current Quota usage exceeds its `Min` guarantee: The pod is only allowed to preempt lower-priority pods within its own Quota (intra-quota preemption).
            
    -   **If the preempting pod does not belong to any Quota**: Preemption is not allowed.
        
    
    After identifying the pods to preempt, ACK Scheduler simulates removing those pods and rescheduling the preempting pod. If the simulation indicates successful scheduling, the identified pods are securely evicted and rescheduled to other nodes. If the simulation indicates failed scheduling, preemption is terminated.
    

## **Enable preemption**

To enable preemption, [customize the scheduler parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-scheduler-parameters) by setting the **preemptionAlgorithm** parameter to the desired policy value (`Default`, `ElasticQuota`, `Auto`, or `None`). The default preemption policy is Auto.

## **What's next**

-   [Work with gang scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-gang-scheduling) — Learn how gang scheduling interacts with the ElasticQuota preemption policy.
    
-   [Improve resource utilization with ElasticQuotaTree and task queues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/improve-resource-utilization-with-elasticquotatree-and-task-queues) — Configure ElasticQuotaTree to define quota boundaries used by the ElasticQuota preemption policy.
    
-   [Pod priority and preemption](https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/) — Kubernetes upstream reference for PriorityClass and preemption concepts.
    
-   [PodDisruptionBudgets](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets) — Protect critical workloads from being evicted during preemption.
