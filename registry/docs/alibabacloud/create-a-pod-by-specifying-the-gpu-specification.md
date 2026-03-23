Learn how to create an Elastic Container Instance (ECI) Pod with a specific Elastic Compute Service (ECS) GPU instance type and change the GPU driver version.

## **Instance specifications**

GPU-accelerated instance types are suitable for scenarios such as deep learning and image editing. You can run Docker images for GPUs directly on ECI GPU-accelerated instances. A NVIDIA graphics card driver is pre-installed in each instance. The supported driver and CUDA versions vary by GPU instance type.

**Note**

The gn8ia and gn8is instance families in the following table are available only in some regions outside China. To use these instance families, contact Alibaba Cloud sales.

**Category**

**GPU instance family**

**Driver and CUDA versions**

vGPU-accelerated instance family

sgn7i-vws

GRID 470, CUDA 11.4 (default)

vgn7i-vws

vgn6i-vws

GPU-accelerated compute-optimized instance family

gn7e

-   Tesla 470, CUDA 11.4 (default)
    
-   Tesla 535, CUDA 12.2
    
-   Tesla 550, CUDA 12.4
    

gn7i

gn7s

gn7

gn6v

gn6e

gn6i

gn5i

gn5

gn8ia

-   Tesla 535, CUDA 12.2 (default)
    
-   Tesla 550, CUDA 12.2
    

gn8is

**Important**

Starting March 17, 2025, specify only the major version number for GPU drivers, such as 535, instead of the full version number, such as 535.161.08. The created instance will use a driver with the specified major version, but the minor version may be updated. When an older driver is unpublished, a newer version is automatically used to create the instance. The support period for a driver version aligns with NVIDIA's official support. For more information, see [NVIDIA Driver Documentation](https://docs.nvidia.com/datacenter/tesla/index.html).

**GPU driver update history**

**Update time**

**Update description**

March 2025

-   The GRID 470 driver is updated to 470.239.06.
    
-   The Tesla 470 driver is updated to 470.256.02, the Tesla 535 driver is updated to 535.230.02, and the Tesla 550 driver is updated to 550.127.08.
    
-   The Tesla 525 driver is no longer supported. If you specify this driver, the system falls back to version 535.
    

For more information about ECS instance types, see the following topics:

-   [Instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb)
    
-   [Pricing of ECS instance types](https://www.alibabacloud.com/product/ecs)
    
-   [Overview of ECS Instance Types Available by Region](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion)
    

## **Configuration**

To specify a GPU instance type, add the `k8s.aliyun.com/eci-use-specs` annotation to the Pod metadata. After you specify an instance type, you must declare the required GPU resources for each container by adding the `nvidia.com/gpu` field under `resources.limits`.

**Important**

-   The `nvidia.com/gpu` field specifies the number of GPUs required by the container. You must set this value when creating a GPU Pod; otherwise, the Pod will fail to start.
    
-   By default, multiple containers can share GPUs. When you configure the Pod, ensure the GPU count for a single container does not exceed the number available in the specified instance type.
    

The following is a sample configuration:

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
      annotations:
        k8s.aliyun.com/eci-use-specs: "ecs.gn6i-c4g1.xlarge,ecs.gn6i-c8g1.2xlarge"  # Specify up to five supported ECS GPU instance types.
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        resources:
            limits:
              nvidia.com/gpu: "1"    # The number of GPUs required by the nginx container. GPUs are shared by default.
        ports:
        - containerPort: 80
      - name: busybox
        image: registry.cn-shanghai.aliyuncs.com/eci_open/busybox:1.30
        command: ["sleep"]
        args: ["999999"]
        resources:
            limits:
              nvidia.com/gpu: "1"    # The number of GPUs required by the busybox container. GPUs are shared by default.
```

By default, ECI automatically installs a supported driver and CUDA version based on the GPU-accelerated instance type you specify. If your workload requires a specific driver and CUDA version, use the `k8s.aliyun.com/eci-gpu-driver-version` annotation to specify it.

For example, when you specify the `ecs.gn6i-c4g1.xlarge` instance type, the system installs the Tesla 550 driver with CUDA 12.4 by default. You can switch to the Tesla 535 driver with CUDA 12.2 by adding the `k8s.aliyun.com/eci-gpu-driver-version: tesla=535` annotation. The following is a sample YAML:

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: test
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
        k8s.aliyun.com/eci-use-specs: ecs.gn6i-c4g1.xlarge      # Specify a GPU instance type that supports driver version overrides.
        k8s.aliyun.com/eci-gpu-driver-version: tesla=535  # Specify the GPU driver version.
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        resources:
            limits:
              nvidia.com/gpu: "1"    # The number of GPUs required by the container.
```
