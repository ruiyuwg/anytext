Container Service for Kubernetes (ACK) allows you to use gang scheduling together with topology-aware scheduling to enable the scheduler to loop through a list of topology domains until it finds a topology domain that meets the requirements of your pods. In addition, you can associate node pools in ACK with Elastic Compute Service (ECS) deployment sets to conduct affinity scheduling in lower dimensions, such as topology domains. You can schedule pods to ECS instances in the same deployment set in order to reduce the network latency among the pods. This topic describes how to configure topology-aware scheduling.

## **Introduction to topology-aware scheduling**

Pods created by machine learning or big data analysis jobs usually need to communicate frequently. By default, the Kubernetes scheduler evenly spreads pods across nodes in an ACK cluster. Consequently, pods may communicate at a high latency and the amount of time required for completing the job increases. To improve the efficiency of the preceding jobs, you can deploy pods in the same zone or on the same rack. This helps reduce the number of hops between pods so that pods can communicate at a lower latency. Kubernetes allows you to schedule pods based on node affinity and pod affinity. However, node affinity and pod affinity in Kubernetes have the following disadvantages.

-   You cannot configure the scheduler to loop through all topology domains during pod scheduling. In Kubernetes affinity scheduling, a job schedules pods to the node to which the first pod of the job is scheduled. If the node cannot meet the requirements of other pods, some pods may become pending. The zone of the pods is not automatically changed even if another topology domain meets the requirements of these pods.
    
-   This is because the node has only zone-specific labels. All pods are scheduled to the same zone by affinity scheduling. The scheduler cannot schedule pods in lower dimensions, such as topology domains.
    

## Loop through topology domains during pod scheduling

You can add gang scheduling labels to a job to ensure that the resource requests of all pods created by the job are fulfilled at the same time. This allows kube-scheduler to loop through multiple topology domains during pod scheduling.

1.  Add the following gang scheduling labels to pods. For more information about gang scheduling, see [Work with gang scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-gang-scheduling).
    
    ```
    ...
    labels:
      pod-group.scheduling.sigs.k8s.io/name: tf-smoke-gpu # Specify the name of the PodGroup, such as tf-smoke-gpu. 
      pod-group.scheduling.sigs.k8s.io/min-available: "3" # Set the value to the number of pods created by the job. 
    ...
    ```
    
2.  Add the following topology-aware scheduling constraint to pods in the labels section.
    
    ```
    annotations:
      alibabacloud.com/topology-aware-constraint: {\"name\":\"test\",\"required\":{\"topologies\":[{\"key\":\"kubernetes.io/hostname\"}],\"nodeSelectors\":[{\"matchLabels\":{\"test\":\"abc\"}}]}}
    ```
    
    The value of `alibabacloud.com/topology-aware-constraint` must be a valid JSON string. The JSON string must be in the following format.
    
    ```
    {
      "name": xxx # Specify a custom name. 
      "required": {
        "topologies": [
          {
            "key": xxx # The key of the topology domain for affinity scheduling. 
          }
        ],
        "nodeSelectors": [
          {
            # You can refer to the format of the LabelSelector in Kubernetes node affinity. 
            "matchLabels": {},
            "matchExpressions": {} 
          }
        ]
      }
    }
    ```
    
    After you complete the configuration, the scheduler schedules all pods with the `pod-group.scheduling.sigs.k8s.io/name: tf-smoke-gpu` label to nodes with the `test=abc` label. The following output shows the scheduling result:
    
    ```
    kubectl get pod -ojson | jq '.items[] | {"name":.metadata.name,"ann":.metadata.annotations["alibabacloud.com/topology-aware-constraint"], "node": spec.nodeName}'
    {
        "name": "nginx-deployment-basic-69f47fc6db-6****"
        "ann": "{\"name\": \"test\", \"required\": {\"topologies\":[{\"key\": \"kubernetes.io/hostname\"}], \"nodeSelectors\": [{\"matchLabels\": {\"test\": \"a\"}}]}} "
        "node": "cn-shenzhen.10.0.2.4"
    }
    {
        "name":"nginx-deployment-basic-69f47fc6db-h****"
        "ann": "{\"name\": \"test\", \"required\": {\"topologies\":[{\"key\": \"kubernetes.io/hostname\"}], \"nodeSelectors\": [{\"matchLabels\": {\"test\": \"a\"}}]}} "
        "node": "cn-shenzhen.10.0.2.4"
    }
    ```
    

## Schedule pods to the same deployment set to reduce network latency

In some scenarios, you may need to conduct affinity scheduling in lower dimensions, such as topology domains. ECS allows you to create a deployment set to reduce the network latency among ECS instances in the deployment set. For more information about how to use deployment sets in ACK, see [Best practices for associating deployment sets with node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-associating-deployment-sets-with-node-pools).

When you create a node pool that is associated with a deployment set, you must add a custom node label to distinguish the node pool from other node pools, as shown in the following figure.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9222889071/p717808.png)

After you complete the configuration, add the following annotations and labels to schedule a job to the deployment set.

1.  Add the following gang scheduling labels to pods. For more information about gang scheduling, see [Work with gang scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-gang-scheduling).
    
    ```
    labels:
      pod-group.scheduling.sigs.k8s.io/name: xxx # Specify the name of the PodGroup. 
      pod-group.scheduling.sigs.k8s.io/min-available: "x" # Set the value to the number of pods created by the job.
    ```
    
2.  Add the following topology-aware scheduling constraint to pods in the labels section.
    
    **Important**
    
    Replace `matchLabels` in this example with the custom node label of the node pool associated with the deployment set and replace `name` with the actual value.
    
    ```
    annotations:
      alibabacloud.com/topology-aware-constraint: {\"name\":\"test\",\"required\":{\"topologies\":[{\"key\":\"alibabacloud.com/nodepool-id\"}],\"nodeSelectors\":[{\"matchLabels\":{\"np-type\":\"low-latency\"}}]}}
    ```
