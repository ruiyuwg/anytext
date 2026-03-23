In scenarios such as machine learning or big data analysis, pods often require frequent communication. By default, the Kubernetes scheduler evenly spreads pods across nodes in a Container Service for Kubernetes (ACK) cluster. Consequently, pods may communicate at a high latency, resulting in increased time required to complete the job. In ACK Lingjun clusters, network topology-aware scheduling can assign pods to the same Layer 1 or Layer 2 forwarding domains. This approach reduces network latency and accelerates job completion.

## Solution overview

Network topology-aware scheduling uses the greedy algorithm to assign tasks to Lingjun nodes with minimal topological spans.

Suppose an ACK Lingjun cluster has two layers of network topology: Pod and Access Switch (ASW). ASW serves as the direct interface for the Lingjun cluster, while Pod represents a broader network topology. Transmissions between Lingjun nodes require at least one hop of network forwarding, and transmissions between ASW nodes require at least two hops.

-   For a task requiring two Lingjun nodes, network topology-aware scheduling will assign the task to either Node Pair A-B or Node Pair E-F.
    
-   For a task requiring four Lingjun nodes, network topology-aware scheduling will assign the task to either Node Pair A-D or Node Pair E-H.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8534286371/CAEQLhiBgIC31NOalxkiIDA1MGYyY2E5MjhmNjQ4NDdhY2JmZDUyZmQ3ZTBkYjVh4675295_20240923133745.743.svg)

To determine whether nodes in the ACK Lingjun cluster are part of the same ASW or Pod, you can check whether the nodes have the labels `alibabacloud.com/asw-id` and `alibabacloud.com/point-of-delivery`. These labels provide details about network location.

## **Declare topology structure**

To implement network topology-aware scheduling in an ACK Lingjun cluster, define the cluster-level topology scheduling requirements and identify the scheduling information in the task.

1.  Create a file named `cluster-network-topology.yaml` to declare a two-level topology structure.
    
    **Expand to view full YAML template**
    
    ```
    apiVersion: scheduling.koordinator.sh/v1alpha1
    kind: ClusterNetworkTopology
    metadata:
      # Keep unchanged.
      name: default
    spec:
      networkTopologySpec:
      # parentTopologyLayer is used to declare the upper topology structure.
      - parentTopologyLayer: ASWTopologyLayer
      # When you define topology for Lingjun nodes, the lowest level must be NodeTopologyLayer.
        topologyLayer: NodeTopologyLayer
      # The following section defines cross-layer network topology. Normally, no modification is needed.
      - labelKey:
        - alibabacloud.com/point-of-delivery
        topologyLayer: PoDTopologyLayer
      - labelKey:
        - alibabacloud.com/asw-id
        parentTopologyLayer: PoDTopologyLayer
        topologyLayer: ASWTopologyLayer
    ```
    
2.  Create a file named `sample-network-topology.yaml` to declare the network topology-aware scheduling requirements for the task.
    
    **Expand to view full YAML template**
    
    ```
    apiVersion: scheduling.koordinator.sh/v1alpha1
    kind: JobNetworkTopology
    metadata:
      labels:
        network-topology-permit-wait-time: "999999"
      # The task name.
      name: sample-network-topology
      # The namespace to which the task belongs.
      namespace: sample-network-topology
    spec:
      topologyStrategy:
      # This configuration allows scheduling across ASWs.
      - layer: ASWTopologyLayer
        # This configuration supports two strategies: PreferGather and MustGather. PreferGather allows pod scheduling across different layers,
        # while MustGather restricts pod scheduling to within the same layer.
        strategy: PreferGather
      - layer: NodeTopologyLayer
        strategy: PreferGather
      # Do not allow scheduling across pods.
      - layer: PoDTopologyLayer
        strategy: MustGather
      # The number of pods for this task.
      workerNum: 2
    ```
    
3.  Create a file named `pi.yaml` to declare the network topology-aware scheduling information.
    
    When you submit a task, you must include the relevant `JobNetworkTopology` information.
    
    **Expand to view full YAML template**
    
    ```
    apiVersion: batch/v1
    kind: Job
    metadata:
      name: pi
    spec:
      # The number of pods for the task. This number must be consistent with the number in JobNetworkTopology.
      parallelism: 2
      template:
        metadata:
          labels:
            # The number of pods for the task. This number must be consistent with the number in JobNetworkTopology.
            pod-group.scheduling.sigs.k8s.io/min-available: "2"
            pod-group.scheduling.sigs.k8s.io/name: sample-gang
            # Reference the task topology information just submitted.
            network-topology-job-name: sample-network-topology
            network-topology-job-namespace: sample-network-topology
        spec:
          schedulerName: default-scheduler
          containers:
          - name: pi
            image: perl:5.34.0
            command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]
            resources:
              limits:
                # This example uses a single GPU. Adjust this number as needed for actual use cases.
                nvidia.com/gpu: 1
          restartPolicy: Never
      backoffLimit: 4
    ```
    
4.  Run the following command to deploy the YAML files in the cluster:
    
    ```
    kubectl apply -f cluster-network-topology.yaml
    kubectl apply -f sample-network-topology.yaml
    kubectl apply -f pi.yaml
    ```
    

## **Scheduling result demonstration**

1.  Use kubectl to connect to the cluster and retrieve the network topology information.
    
    In the ACK Lingjun cluster, the lingjun-networktopology-collector component collects this information and labels it on the Lingjun nodes.
    
    For other nodes or different types of clusters, you must manually add labels, and ensure that the label keys correspond to the `labelKey` specified in the `ClusterNetworkTopology` in the preceding YAML template.
    
    ```
    # Network topology is like:
    #              test-pod-1                     test-pod-2
    #        /          |           \                   |
    #    test-1      test-2      test-3               test-4
    #     /   \         |           |                   |
    #   0.12  0.14     0.15        0.16                0.17
    
    ➜  network kubectl get no -l alibabacloud.com/asw-id,alibabacloud.com/point-of-delivery -ojson | jq '.items[] | {"Name":.metadata.name, "ASW":.metadata.labels."alibabacloud.com/asw-id", "POD":.metadata.labels."alibabacloud.com/point-of-delivery"}'
    {
      "Name": "cn-hongkong.10.1.0.12",
      "ASW": "test-1",
      "POD": "test-pod-1"
    }
    {
      "Name": "cn-hongkong.10.1.0.14",
      "ASW": "test-1",
      "POD": "test-pod-1"
    }
    {
      "Name": "cn-hongkong.10.1.0.15",
      "ASW": "test-2",
      "POD": "test-pod-1"
    }
    {
      "Name": "cn-hongkong.10.1.0.16",
      "ASW": "test-3",
      "POD": "test-pod-1"
    }
    {
      "Name": "cn-hongkong.10.1.0.17",
      "ASW": "test-4",
      "POD": "test-pod-2"
    }
    ```
    
2.  Run the following command to submit the configured Job task and observe its execution on two Lingjun nodes within test-1:
    
    ```
    ➜ kubectl get pod -owide
    NAME       READY   STATUS              RESTARTS   AGE   IP               NODE                    NOMINATED NODE   READINESS GATES
    pi-8p89l   1/1     Running             0          4s    172.30.240.197   cn-hongkong.10.1.0.14   <none>           <none>
    pi-p8swv   0/1     ContainerCreating   0          4s    <none>           cn-hongkong.10.1.0.12   <none>           <none>
    ```
    
    1.  If you set the number of pods in the task to 4, you must update the `parallelism` and `pod-group.scheduling.sigs.k8s.io/min-available` parameters in the preceding YAML configuration file for Job, and the `workerNum` parameter in the preceding YAML configuration file for JobNetworkTopology.
        
        After making these modifications, you will notice that only the Lingjun node running test-pod-2 remains unscheduled.
        
    
    ```
    ➜ kubectl get pod -owide
    NAME       READY   STATUS              RESTARTS   AGE   IP               NODE                    NOMINATED NODE   READINESS GATES
    pi-2kwq9   1/1     Running             0          4s    172.30.241.123   cn-hongkong.10.1.0.12   <none>           <none>
    pi-87hm5   0/1     ContainerCreating   0          4s    <none>           cn-hongkong.10.1.0.16   <none>           <none>
    pi-bsvx8   1/1     Running             0          4s    172.30.240.198   cn-hongkong.10.1.0.14   <none>           <none>
    pi-dvwhl   0/1     ContainerCreating   0          4s    <none>           cn-hongkong.10.1.0.15   <none>           <none>
    ```
    
    1.  If you set the number of pods in the task to 5, you must update the `parallelism` and `pod-group.scheduling.sigs.k8s.io/min-available` parameters in the preceding YAML configuration file for Job, and the `workerNum` parameter in the preceding YAML configuration file for JobNetworkTopology.
        
        After making these modifications, you will see the task scheduling fail. The first scheduled pod containing a scheduling failure message `all fail topology paths by MustGather reason: [path:RootNode->test-pod-1, freeSlotNum:4], [path:RootNode->DefaultTopologyName, freeSlotNum:0], [path:RootNode->test-pod-2, freeSlotNum:1]`. This message indicates that the scheduling failed because cross-pod scheduling is not permitted.
        
        ```
        ➜ kubectl get pod
        NAME       READY   STATUS    RESTARTS   AGE
        pi-75qf5   0/1     Pending   0          2s
        pi-8k4nd   0/1     Pending   0          2s
        pi-b2pmc   0/1     Pending   0          2s
        pi-n7c2b   0/1     Pending   0          2s
        pi-wf4zn   0/1     Pending   0          2s
        
        
        ➜ kubectl get pod -ojson | jq '.items[].status'
        {
          "conditions": [
            {
              "lastProbeTime": null,
              "lastTransitionTime": "2024-05-29T07:46:27Z",
              "message": "0/6 nodes are available: 1 Insufficient nvidia.com/gpu, 1 [NetworkTopology begin] cluster total nodes:6, 5 node provide 5 freeSlot, 1 node unavailable cause Insufficient nvidia.com/gpu, job desireNum:5, all fail topology paths by MustGather reason: [path:RootNode->test-pod-1, freeSlotNum:4], [path:RootNode->DefaultTopologyName, freeSlotNum:0], [path:RootNode->test-pod-2, freeSlotNum:1] [NetworkTopology end], 4 NetworkTopology bestPlan empty. network topology job sample-network-topology/sample-network-topology gets rejected due to pod is unschedulable, preemption: 0/6 nodes are available: 1 No victims found on node cn-hongkong.10.1.0.10 for preemptor pod pi-75qf5, 5 Preemption is not helpful for scheduling..",
              "reason": "Unschedulable",
              "status": "False",
              "type": "PodScheduled"
            }
          ],
          "phase": "Pending",
          "qosClass": "BestEffort"
        }
        {
          "phase": "Pending",
          "qosClass": "BestEffort"
        }
        {
          "phase": "Pending",
          "qosClass": "BestEffort"
        }
        {
          "phase": "Pending",
          "qosClass": "BestEffort"
        }
        {
          "phase": "Pending",
          "qosClass": "BestEffort"
        }
        ```
