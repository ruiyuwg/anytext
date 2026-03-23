When you need to create many pods quickly within a short time, scaling ECS nodes may be too slow. Reserving extra ECS nodes wastes resources. With ACK virtual nodes, you can schedule pods directly to Elastic Container Instances (ECI) without purchasing or managing ECS nodes. This topic describes how to schedule pods to ECI in an ACK managed cluster.

## **Scenarios**

You can use ECI to handle traffic spikes and reduce computing costs. Typical scenarios include the following:

-   Online services with clear traffic peaks and troughs
    
    Traffic for online education, e-commerce, and similar services often has clear peaks and troughs. Using ECI-based pods helps you respond faster to traffic spikes and reduces the need to maintain fixed resource pools, which lowers computing costs.
    
-   Non-continuous computing tasks
    
    Run computing tasks on ECI-based pods. You do not need to keep fixed nodes. You pay only for the compute resources used during task execution, which lowers computing costs. Examples include Spark and AI tasks.
    

## Prerequisites

Your ACK cluster runs Kubernetes version 1.16 or later. The region where your cluster is located supports ECI.

**Note**

Check whether your cluster's region is supported. For more information, see [Regions and zones supported by ECI](/help/en/eci/product-overview/regions-and-zones). Then log on to the [Elastic Container Instance console](https://eci.console.alibabacloud.com/) to activate the ECI service.

## **Procedure**

### **Step 1: Deploy the ack-virtual-node component**

**Note**

The following steps use an ACK managed cluster as an example. For an ACK dedicated cluster, deploy the ack-virtual-node component from the **Marketplace** page. For details, see [Deploy the ack-virtual-node component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/virtual-node-overview/#a80c0de73cycc).

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  On the **Component Management** page, find **ACK Virtual Node** in the **Core Components** section and click **Install**. Then, complete the operation as prompted.
    
    During the installation, the default virtual switch and security group of the cluster are used as the initial ECI configuration parameters. To modify them, you can update the [eci-profile configuration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-an-eci-profile).
    

### **Step 2: Schedule pods to elastic container instances**

**Note**

The following steps show how to schedule pods to virtual nodes for running on ECI by adding labels to pods or namespaces. For more scheduling options, see [Schedule a pod to a virtual node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-and-introduction-of-virtual-node-scheduling-scheme-ack/).

## Add a label to a pod

To schedule a specific pod to run on ECI, add the label `alibabacloud.com/eci: "true"` to the pod. The pod will run on an x86 architecture virtual node as an ECI.

1.  Create a deployment using the following YAML file:
    
    ```
    kubectl create -f eci-pod.yaml
    ```
    
    The following is an example of eci-pod.yaml:
    
    **Note**
    
    This YAML uses the `k8s.aliyun.com/eci-use-specs` annotation to specify the ECI pod specifications. For more information about configuring ECI pod specifications, see [Specify the compute specification of an elastic container instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-eci-pod).
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: test
      labels:
        app: test
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          name: test
          labels:
            app: nginx
            alibabacloud.com/eci: "true"             # Add this label to schedule the pod to ECI 
          annotations:
            k8s.aliyun.com/eci-use-specs: "2-4Gi"   # Specify 2 vCPUs and 4 GiB of memory for the ECI pod
        spec:
          containers:
          - name: nginx
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            ports:
            - containerPort: 80
    ```
    
2.  Check whether the pod is running on a virtual node.
    
    ```
    kubectl get pod -o wide -l app=nginx
    ```
    
    The expected output is as follows. In the `NODE` column, you can see that the pod is scheduled to a virtual node.
    
    ```
    NAME                    READY   STATUS    RESTARTS   AGE   IP            NODE                            NOMINATED NODE   READINESS GATES
    test-86f7fbc94f-g5m22   1/1     Running   0          38s   10.16.XX.XX   virtual-kubelet-cn-hangzhou-j   <none>           <none>
    test-86f7fbc94f-r4wcn   1/1     Running   0          38s   10.16.XX.XX   virtual-kubelet-cn-hangzhou-j   <none>           <none>
    ```
    
3.  View the details of the ECI pod.
    
    ```
    kubectl get pod <pod-name> -o yaml
    ```
    
    In the returned YAML, use the `k8s.aliyun.com/eci-instance-id` field to obtain the ECI instance ID. Use the `k8s.aliyun.com/eci-instance-spec` field to confirm the actual billing specification of the ECI pod.
    

## Add a label to a namespace

To schedule a group of pods to run on ECI, create a namespace and add the label `alibabacloud.com/eci: "true"`. All pods in this namespace will run on x86 architecture virtual nodes as ECI.

1.  Create a namespace named `vk` and add the label to it.
    
    ```
    kubectl create ns vk
    kubectl label namespace vk alibabacloud.com/eci=true
    ```
    
2.  Create a deployment in the `vk` namespace using the following YAML file:
    
    ```
    kubectl create -f eci-namespace.yaml
    ```
    
    The following is an example of eci-namespace.yaml:
    
    **Note**
    
    This YAML uses the `k8s.aliyun.com/eci-use-specs` annotation to specify the ECI pod specifications. For more information about configuring ECI pod specifications, see [Specify the compute specification of an elastic container instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-eci-pod).
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: test
      namespace: vk       # Specify a namespace with the label to schedule pods to ECI
      labels:
        app: test
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          name: test
          labels:
            app: nginx
          annotations:
            k8s.aliyun.com/eci-use-specs: "2-4Gi"   # Specify 2 vCPUs and 4 GiB of memory for the ECI pod
        spec:
          containers:
          - name: nginx
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            ports:
            - containerPort: 80
    ```
    
3.  Check whether the pod is running on a virtual node.
    
    ```
    kubectl get pod -o wide -l app=nginx -n vk
    ```
    
    The expected output is as follows. In the `NODE` column, you can see that the pod is scheduled to a virtual node.
    
    ```
    NAME                   READY   STATUS    RESTARTS   AGE   IP            NODE                            NOMINATED NODE   READINESS GATES
    test-8f54bcfb5-86pvc   1/1     Running   0          14s   10.16.XX.XX   virtual-kubelet-cn-hangzhou-j   <none>           <none>
    test-8f54bcfb5-skvkg   1/1     Running   0          14s   10.16.XX.XX   virtual-kubelet-cn-hangzhou-j   <none>           <none>
    ```
    
4.  View the details of the ECI pod.
    
    ```
    kubectl get pod <pod-name> -o yaml -n vk
    ```
    
    In the returned YAML, use the `k8s.aliyun.com/eci-instance-id` field to obtain the ECI instance ID. Use the `k8s.aliyun.com/eci-instance-spec` field to confirm the actual billing specification of the ECI pod.
    

## References

-   You can configure pod or namespace labels to schedule pods to ECI. However, this requires changes to pod or namespace YAML files, which affects your business code. To automatically schedule pods to ECI without changing your business code, [configure an eci-profile](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-an-eci-profile). Custom selectors automatically route matching pods to ECI.
    
-   You can add annotations to ECI pods without changing Kubernetes semantics. This lets you use ECI features such as specifying pod compute specs, enabling image caching to speed up pod creation, assigning IPv6 addresses, and increasing temporary storage space. For details, see [Annotations for ECI pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/pod-annotations-1).
