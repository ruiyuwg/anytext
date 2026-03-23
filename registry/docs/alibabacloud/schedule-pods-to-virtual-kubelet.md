For Container Service for Kubernetes (ACK) Serverless clusters, all pods run on virtual nodes without the need to be scheduled. By default, the virtual nodes are x86 architecture. For ACK clusters that use Elastic Compute Service (ECS) instances on real nodes and elastic container instances in virtual nodes, pods are scheduled to real nodes by default. You can schedule pods to virtual nodes based on your business requirements. This topic describes how to schedule pods in an ACK cluster to an x86-based virtual node to run the pods on Elastic Container Instance.

## Overview of scheduling methods

You can use one of the following methods to schedule pods to an x86-based virtual node.

**Note**

-   To use the following methods, you must modify existing resources. The modification may introduce vulnerabilities into your system. We recommend that you configure an eci-profile to automatically schedule pods that have the specified labels to run on Elastic Container Instance. For more information, see [Configure an eci-profile](/help/en/eci/user-guide/configure-an-eci-profile#topic-2061718).
    
-   If you use the scheduling method of adding a pod label or namespace label or specifying nodeName, the provisioner does not support the `WaitForFirstConsumer` StorageClass when a dynamically provisioned disk volume is mounted to an Elastic Container Instance-based pod. For more information, see [Use a dynamically provisioned disk volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-disk-volumes).
    

-   Configure pod labels
    
    If you want to schedule a small number of pods to run on Elastic Container Instance, you can add specific labels to the pods. Then, the pods run on the x86-based virtual node.
    
-   Configure namespace labels
    
    If you want to schedule a class of pods to run on Elastic Container Instance, you can create a namespace and add a specific label to the namespace. Then, all pods in the namespace run on the x86-based virtual node.
    
-   (Not recommended) Other methods
    
    By default, labels and taints are configured for x86-based virtual nodes. You can configure the nodeSelector and tolerations fields for pods to schedule the pods to run on x86-based virtual nodes. You can also specify the nodeName field to schedule pods to run on x86-based virtual nodes.
    

## Method 1: Configure pod labels

You can add an `alibabacloud.com/eci=true` label to a pod to schedule the pod to run on Elastic Container Instance.

**Note**

You can also add the `eci=true` label to pods, but we recommend that you do not use this label.

Procedure:

1.  Create a YAML configuration file for the pod that you want to create.
    
    ```
    vim test-pod.yaml
    ```
    
    Sample test-pod.yaml file.
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: nginx1
      labels: 
        alibabacloud.com/eci: "true"   # Add a label.
    spec:
      containers:
      - image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        imagePullPolicy: Always
        name: nginx
    ```
    
2.  Create the pod.
    
    ```
    kubectl create -f test-pod.yaml 
    ```
    

## Method 2: Configure namespace labels

You can create a namespace and add an `alibabacloud.com/eci=true` label to the namespace. Then, all pods in the namespace are scheduled to run on Elastic Container Instance.

**Note**

You can also add a `virtual-node-affinity-injection=enabled` label to a namespace, but we recommend that you do not use this label.

Procedure:

1.  Create a namespace.
    
    ```
    kubectl create ns vk
    ```
    
2.  Add a label to the namespace.
    
    ```
    kubectl label namespace vk alibabacloud.com/eci=true
    ```
    
3.  Create a YAML configuration file for the pod that you want to create.
    
    ```
    vim test-pod.yaml
    ```
    
    Sample test-pod.yaml file.
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: nginx
      namespace: vk  # Specify the namespace to which you added a label in Step 2.
    spec:
      containers:
      - image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        imagePullPolicy: Always
        name: nginx
    ```
    
4.  Create pods.
    
    ```
    kubectl create -f test-pod.yaml 
    ```
    

## Method 3: (Not recommended) Other methods

You can use other methods such as configuring the nodeSelector and tolerations fields or specifying the nodeName field to schedule pods to run on Elastic Container Instance.

Procedure:

1.  Create a YAML configuration file for the pod that you want to create.
    
    ```
    vim test-pod.yaml
    ```
    
    Sample test-pod.yaml file
    
    -   Configure the nodeSelector and tolerations fields.
        
        ```
        apiVersion: v1
        kind: Pod
        metadata:
          name: nginx
        spec:
          containers:
          - image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
            imagePullPolicy: Always
            name: nginx
          nodeSelector:     # Configure nodeSelector.
            type: virtual-kubelet
          tolerations:      # Configure tolerations.
          - key: virtual-kubelet.io/provider
            operator: Exists
        ```
        
    -   Specify the nodeName field.
        
        ```
        apiVersion: v1
        kind: Pod
        metadata:
          name: nginx
        spec:
          containers:
          - image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
            imagePullPolicy: Always
            name: nginx
          nodeName: virtual-kubelet-cn-beijing-g # Specify a node name
        ```
        
        .
        
2.  Create pods.
    
    ```
    kubectl create -f test-pod.yaml 
    ```
