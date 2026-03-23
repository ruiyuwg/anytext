If you have self-managed Kubernetes clusters in a data center or on an Alibaba Cloud Elastic Compute Service (ECS) instance, you use both real nodes and virtual nodes (VNodes). In this case, you can configure the nodeSelector and tolerations fields, or specify the nodeName field to schedule pods to VNodes. Then, you can run the pods as elastic container instances. This topic describes how to schedule pods to a VNode.

## Overview of scheduling methods

VNodes are equivalent to native Kubernetes nodes. If a Kubernetes cluster uses both real nodes and VNodes, you can use one of the following methods to schedule pods to a VNode:

**Note**

To use the following methods, you must modify existing resources. These modifications may cause vulnerabilities in your system. We recommend that you deploy the eci-profile component. eci-profile allows you to configure the selector field to have pods that meet the conditions specified by the selector field automatically scheduled to VNodes. For more information, see [Use eci-profile to schedule pods to a VNode](/help/en/eci/user-guide/use-eci-profile-to-schedule-pods-to-a-vnode).

-   Configure the nodeSelector and tolerations fields
    
    By default, VNodes are configured with labels and taints. Therefore, you can configure nodeSelector and tolerations to schedule pods to VNodes and then run the pods as elastic container instances.
    
-   Specify the nodeName field
    
    You can specify the nodeName field to schedule pods to the specified VNode and then run the pods as elastic container instances.
    

## Method 1: Configure the nodeSelector and tolerations fields

By default, VNodes are configured with labels and taints, as shown in the following code.

```
...
  labels:
    k8s.aliyun.com/vnode: "true"
...
  taints:
  - effect: NoSchedule
    key: k8s.aliyun.com/vnode
    value: "true"
```

Therefore, you can configure the nodeSelector and tolerations fields to schedule pods to VNodes and then run the pods as elastic container instances. Perform the following operations:

1.  Save the following content as the deploy-vnode-test1.yaml file.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: vnode-nginx-test1
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: uid
      template:
        metadata:
          labels:
            app: uid
        spec:
          nodeSelector:     # Configure nodeSelector.
            k8s.aliyun.com/vnode: "true"
          tolerations:      # Configure tolerations.
          - key: k8s.aliyun.com/vnode
            operator: "Equal"
            value: "true"
            effect: "NoSchedule"
          containers:
          - name: nginx
            image: registry-vpc.cn-hangzhou.aliyuncs.com/eci_open/nginx:1.14.2
    ```
    
2.  Create a Deployment.
    
    ```
    kubectl apply -f deploy-vnode-test1.yaml
    ```
    

## Method 2: Specify the nodeName field

You can specify the nodeName field to schedule pods to VNodes. Perform the following operations:

1.  Run the following command to query VNodes.
    
    ```
    kubectl get nodes
    ```
    
    Obtain the name of the VNode from the command output. By default, the name format of a VNode is `<region>.<VNode ID>`. Sample output:
    
    ```
    NAME                                    STATUS   ROLES                  AGE    VERSION
    cn-hangzhou.vnd-2ze2qhf8lmp5kgsx****    Ready    agent                  132m   v1.20.6
    k8s-master                              Ready    control-plane,master   169m   v1.20.6
    ```
    
2.  Save the following content as the deploy-vnode-test2.yaml file.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: vnode-nginx-test2
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: uid
      template:
        metadata:
          labels:
            app: uid
        spec:
          containers:
          - name: nginx
            image: registry-vpc.cn-hangzhou.aliyuncs.com/eci_open/nginx:1.14.2
          nodeName: cn-hangzhou.vnd-2ze2qhf8lmp5kgsx****   # Specify the name of the VNode.
    ```
    
3.  Create a Deployment.
    
    ```
    kubectl apply -f deploy-vnode-test2.yaml
    ```
