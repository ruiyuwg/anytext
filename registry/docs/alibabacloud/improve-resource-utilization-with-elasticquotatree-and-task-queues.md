To allow different teams and jobs to share computing resources in a cluster and ensure effective resource allocation and isolation, you can use ack-kube-queue, ElasticQuotaTree, and ack-scheduler. The ack-kube-queue component manages job queues for AI, machine learning (ML), and batch workloads. ElasticQuotaTree manages fine-grained resource quotas. The ack-scheduler component selects nodes to run jobs.

## **Prerequisites**

[The ack-koordinator component is installed](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-ack-kube-queue-to-manage-job-queues).

## Submit a **resource quota** by using ElasticQuotaTree

You can efficiently schedule jobs within a limited range of resources by using ElasticQuotaTree in an ACK cluster. This ensures that each team utilizes allocated resources and prevents waste and competition. ElasticQuotaTree uses a tree structure to specify the number of resources or machines that each team or individual can use. After the team submits a job, the system automatically checks whether the resource quota of the job is sufficient. The system allocates compute resources to the job and starts the job only after confirming that the resource quota can meet the resource request. If the minimum resources requirement of a resource quota cannot be guaranteed, the scheduling system reclaims resources from quotas that exceed the lower limit.

The following figure shows an example. In an enterprise, the text team and video team of the O&M department, the algorithm department, and the test team of the infrastructure department have different CPU, memory, and GPU resource quotas in their namespaces.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2623499371/CAEQNBiBgICciMTyqBkiIGFiMGYxMzlkOGYxYjQ0NDRhNWRmYjg1ZDFmZDNmNDJk4885631_20250116161148.878.svg)

The following section provides usage notes and examples for submitting resource quotas by using ElasticQuotaTree:

-   You can mount namespaces only to leaf nodes. You cannot mount namespaces to parent nodes.
    
-   On the same node, the value of the min parameter must be less than or equal to the value of the max parameter.
    
-   The min value of a parent node must be less than or equal to the sum of the min values of its child quota nodes.
    
-   The max value of a parent node must be less than or equal to the max value of any child quota node of the parent quota node.
    

```
---
apiVersion: v1
kind: Namespace
metadata:
  name: devops 
---
apiVersion: v1
kind: Namespace
metadata:
  name: text1 
---
apiVersion: v1
kind: Namespace
metadata:
  name: text2 
---
apiVersion: v1
kind: Namespace
metadata:
  name: video 
---
apiVersion: v1
kind: Namespace
metadata:
  name: test1 
---
apiVersion: v1
kind: Namespace
metadata:
  name: test2 
---
apiVersion: scheduling.sigs.k8s.io/v1beta1
kind: ElasticQuotaTree
metadata:
  name: elasticquotatree # Only one ElasticQuotaTree is supported. 
  namespace: kube-system # The elastic quota group takes effect only if the group is created in the kube-system namespace. 
spec:
  root:
    name: root 
    min:       # The default value of min is 0. This indicates that no resources are guaranteed, but you can still submit jobs. 
      cpu: 100
      memory: 50Gi
      nvidia.com/gpu: 16
    max: # The default value of max is NA. This indicates that the maximum number of available resources is unlimited. 
      cpu: 100
      memory: 50Gi
      nvidia.com/gpu: 16
    children:
    - name: devops 
      min:
        cpu: 20
        memory: 10Gi
        nvidia.com/gpu: 4 
      max:
        cpu: 40
        memory: 20Gi
        nvidia.com/gpu: 8 
      namespaces: # Configure the namespaces. 
      - devops 
    - name: algorithm  
      min:
        cpu: 50
        memory: 25Gi
        nvidia.com/gpu: 10 
      max:
        cpu: 80
        memory: 50Gi
        nvidia.com/gpu: 14 
      children:
      - name: text 
        min:
          cpu: 40
          memory: 15Gi
          nvidia.com/gpu: 8 
        max:
          cpu: 40
          memory: 30Gi
          nvidia.com/gpu: 10 
        namespaces: # Configure the namespace. 
        - text1 
        - text2 
      - name: video 
        min:
          cpu: 12
          memory: 12Gi
          nvidia.com/gpu: 2 
        max:
          cpu: 14
          memory: 14Gi
          nvidia.com/gpu: 4 
        namespaces: # Configure the namespace. 
        - video 
    - name: infrastructure  
      min:
        cpu: 30
        memory: 15Gi
        nvidia.com/gpu: 2 
      max:
        cpu: 50
        memory: 30Gi
        nvidia.com/gpu: 4 
      children:
      - name: test
        min:
          cpu: 30
          memory: 15Gi
          nvidia.com/gpu: 2 
        max:
          cpu: 50
          memory: 30Gi
          nvidia.com/gpu: 4 
        namespaces: # Configure the namespace. 
        - test1 
        - test2
```

## Manage job queues by using ack-kube-queue

ack-kube-queue can assign jobs from different departments and teams to the appropriate queue. After the ElasticQuotaTree is submitted, ack-kube-queue creates queues in the cluster. The resource quota of each leaf node is mapped to a separate queue in the cluster. When a job is submitted to a cluster, ack-kube-queue automatically creates a QueueUnit object for the job. As the unit of resource allocation in Kube Queue, QueueUnit is automatically associated with the job. ack-kube-queue automatically assigns jobs to the corresponding queues based on the namespace of the QueueUnit and its resource quota relationships.

In this example, a RayJob is used. The video team associates videos with a specific namespace and configures resource quotas by using the `min` and `max` parameters. The ack-kube-queue component automatically creates an associated queue named `root-algorithm-video` for the quota. After you submit a RayJob object in the `video` namespace, the corresponding QueueUnit resource object is automatically created and queued in the `root-algorithm-video` queue. If the total amount of resources requested by the RayJob meets the available quotas, the RayJob is dequeued from the `root-algorithm-video` queue and processed by the scheduler.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2623499371/CAEQNBiBgMDU5cfyqBkiIDQzNzYxZTg0MGMyZjQ5OGI4OThiMjI3MzU1MGEyYmVi4885631_20250116170720.827.svg)

### **Automatic association logic between ElasticQuotaTree and queues**

A controller logic in ack-kube-queue can automatically manage the queue resources within the cluster. This logic is maintained based on the ElasticQuotaTree and maps the association between quotas and namespaces defined in the ElasticQuotaTree to the corresponding queues.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2623499371/CAEQNBiBgMCj_cnyqBkiIDQ2ZDY2NGU0YWU4YzRlYTE4MmJiMWY1Mjc0Yzk2ZWQw4885631_20250116173551.964.svg)

### **Queue operation logic**

In this example, a RayJob is used. If the `suspend` field is set to `true` for the RayJob, ack-kube-queue detects the job and creates a QueueUnit. The QueueUnit is queued in the corresponding queue. After the queue is dequeued based on the conditions of the queuing policy, ack-kube-queue sets the `suspend` field of the RayJob to `false`. The RayJob managed by the KubeRay operator and pods are created. The pods are managed by the scheduler.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2623499371/CAEQNBiBgMDr2s7yqBkiIDJkOGY3YjE4ZDA5ZTRkM2M4NDlhMGI1YTQ4YWNmNDIz4885631_20250116173556.630.svg)
