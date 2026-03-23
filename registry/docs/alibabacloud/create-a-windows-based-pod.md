Elastic Container Instance supports Windows-based instances. If you want to run containers in a Windows environment, you can add a Windows virtual node to the cluster and schedule pods to run on the Windows virtual node. This way, you can create a Windows-based pod (elastic container instance) to run the containers.

**Important**

Windows-based instances are in invitational preview. To use Windows-based instances, submit a ticket.

## **Prerequisites**

The version of the Virtual Kubelet component in the cluster is v2.11.0-rc.0 or later. The Virtual Kubelet component is the Container Service for Kubernetes (ACK) Virtual Node component. For more information, see [Manage components](/help/en/ack/manage-system-components) and [ACK Virtual Node](/help/en/ack/product-overview/ack-virtual-node).

## **Limits**

-   When you create a Windows-based elastic container instance, the vCPU and memory specifications of the instance must be not smaller than 2 vCPUs and 4 GiB of memory. The instance cannot be GPU-accelerated instances, instances that have local disks, or ARM-based instances.
    
-   The version of the Windows container image must be 10.0.20348.\*. This means the container image must be a Windows Server 2022 image.
    

## **Add a Windows virtual node**

You can modify the eci-profile to add a Windows virtual node to the cluster. Procedure:

1.  Modify the eci-profile.
    
    ```
    kubectl edit -n kube-system cm/eci-profile
    ```
    
    Set enableWindowsAmd64Node to true in the data section of the eci-profile. Example:
    
    ```
    data:
      ......
      enableWindowsAmd64Node: "true"   # Enable the Windows virtual node.
      ......
    ```
    
2.  Check whether the Windows virtual node exists in the cluster.
    
    ```
    kubectl get nodes -l kubernetes.io/os=windows
    ```
    
    The following result is expected to return. Windows virtual nodes are automatically generated in the cluster.
    
    ![windows.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2362727071/p748689.png)
    

## **Create a Windows-based pod**

A Windows virtual node has a `"kubernetes.io/os": windows` label. When you create an Elastic Container Instance-based pod, you can use nodeSelector to specify a Windows virtual node and schedule the pod to run on the Windows virtual node. This way, you can create a Windows-based pod to run containers.

```
nodeSelector:
  kubernetes.io/os: windows 
```

Sample YAML file:

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: test-windows
  labels:
    app: test
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      name: nginx-test
      labels:
        app: nginx
        alibabacloud.com/eci: "true" 
      annotations:
        k8s.aliyun.com/eci-with-eip: "true"              # Associate an elastic IP address (EIP) with the pod to pull images over the Internet.
        k8s.aliyun.com/eci-use-specs: "ecs.c6.4xlarge"   # Specify an ECS instance type to create the pod.
    spec:
      containers:
      - name: test
        image: mcr.microsoft.com/windows/nanoserver:ltsc2022   # Use a Windows container image.
        command: ["ping","-t","localhost" ]
      nodeSelector:
        kubernetes.io/os: windows  # Schedule the pod to run on the Windows virtual node.
```
