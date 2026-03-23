When you create an elastic container instance (pod), if the vCPU and memory specifications that you specify do not meet the specification requirements of elastic container instances, the system automatically adjusts the specifications of the pod to the nearest specifications supported by Elastic Container Instance. If the specifications after the adjustment are larger than necessary, resource waste may occur. In this case, you can configure environment variables for containers that do not affect your business, such as sidecar containers, to ignore the containers during specification adjustment. This prevents resource waste and reduces the cost of using pods.

## Feature description

When you specify vCPU and memory specifications to create an elastic container instance, you can specify the vCPU and memory specifications of each container. The sums of the vCPU and memory specifications of all containers cannot be greater than the specifications of the instance. If you do not specify the vCPU and memory specifications of the elastic container instance that you create, the system uses the sums of the vCPU and memory specifications of all containers to create the instance. If the sums do not match a specification supported by Elastic Container Instance, the system automatically adjusts the sums of vCPU and memory specifications to create an instance.

![资源规整2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5251032761/p477026.png)

The specifications that you specify for each container are the resource upper limits for the container. When the system creates the instance, the system dynamically adjusts the resource allocation of each container. You can configure the `__ECI_RESOURCE_IGNORE__:TRUE` environment variable for specific containers that do not affect the business. This way, the system ignores the containers during resource adjustment. This prevents oversized instances from being created and saves resources.

Examples:

![资源规整](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9953576071/p476860.png)

As shown in the preceding figures, assume that you create an elastic container instance in the China (Hangzhou) region. The instance contains three containers. Containers 1 and 2 (business containers) are each configured with 2 vCPUs and 4 GiB of memory. Container 3 (sidecar container) is configured with 0.25 vCPU and 0.5 GiB of memory. In regular cases, the system automatically adjusts the specifications of the instance to 6 vCPUs and 10 GiB of memory. However, you may not actually require 6 vCPUs and 10 GiB of memory. In this case, you can configure the `_ECI_RESOURCE_IGNORE_:TRUE` environment variable for the sidecar container. After you configure the environment variable, the system ignores the sidecar container and adjusts the specifications of the instance to 4 vCPUs and 8 GiB of memory.

## **Configuration description**

To make the system ignore specific containers during specification adjustment, you can configure the following environment variable for the containers:

```
env: 
- name: "__ECI_RESOURCE_IGNORE__"
  value: "TRUE"
```

## **Configuration example**

A Deployment is created based on the following YAML file. Each pod contains 2 vCPUs and 4 GiB of memory. The Deployment uses the limits of the nginx1 container and ignores the limits of the nginx2 container.

**Note**

If the `__ECI_RESOURCE_IGNORE__:TRUE` environment variable is not set for the nginx2 container, the total resource requirements of the nginx1 and nginx2 containers are 3 vCPUs and 6 GiB of memory. If the Deployment is created in the China (Hangzhou) region, the pod that is actually created contains 4 vCPUs and 6 GiB of memory after the system adjusts the specifications of the pod upward.

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
      name: nginx-test
      labels:
        app: nginx
        alibabacloud.com/eci: "true" 
    spec:
      containers:
      - name: nginx1
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        resources:
          limits:
            cpu: "2000m"    
            memory: "4096Mi"   
      - name: nginx2
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        resources:
          limits:
            cpu: "1000m"    
            memory: "2048Mi"   
        env: 
        - name: "__ECI_RESOURCE_IGNORE__"
          value: "TRUE"
      restartPolicy: Always
```
