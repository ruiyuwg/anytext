This topic describes how to specify Elastic Compute Service (ECS) instance types that use a local disk to create an Elastic Container Instance (ECI) pod.

## **Supported instance type families**

Local disks reside on the same physical server as the elastic container instance to which the disks are attached. Local disks are cost-effective and provide high random IOPS, high throughput, and low latency. Local disks reside on a single physical server, which increases the risks of single points of failure (SPOFs). For more information, see [Local disks](/help/en/ecs/user-guide/local-disks#concept-g3w-qzv-tdb).

**Important**

Local disks reside on a single physical server, which increases the risks of SPOFs. The durability of data stored on local disks is determined by the reliability of the associated physical server. For more information, see [Limits](/help/en/ecs/user-guide/local-disks#concept-g3w-qzv-tdb/section-ydp-m2w-ydb).

The following ECS instance families with local disks can be used to create elastic container instances:

-   d1, big data instance family
    
-   d1ne, big data instance family with enhanced network performance
    
-   i2, instance family with local SSDs
    
-   i2g, instance family with local SSDs
    
-   gn5, GPU-accelerated compute-optimized instance family
    

**Note**

gn5 is a GPU-accelerated instance family. If you select this instance family, you must specify GPU-related parameters in addition to local disk-related parameters.

For more information about ECS instance types, see the following topics:

-   [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb)
    
-   [Pricing of ECS instance types](https://www.alibabacloud.com/product/ecs)
    
-   [ECS Instance Types Available for Each Region](https://ecs-buy4service.aliyun.com/instanceTypes/#/instanceTypeByRegion)
    

## **Configurations**

You can add the `Kubernetes. aliyun.com/eci-use-specs` annotation to the pod metadata to specify ECS instance types that use a local disk. When you mount your local disk, you can set the medium parameter to LocalRaid0 under EmptyDir to use the disk in a RAID 0 configuration and mount it to a specified path.

Example:

1.  Run the following command to create a pod by specifying ECS instance types that use a local disk.
    
    ```
    kubectl create -f localdisk-test.yaml
    ```
    
    The following code provides an example in YAML format.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: localdisk-test
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
            k8s.aliyun.com/eci-use-specs: "ecs.i2g.2xlarge,ecs.i2.xlarge" # Specify a maximum of five ECS instance types that use a local disk. 
        spec:
          containers:
          - name: nginx
            image: registryc.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
            ports:
            - containerPort: 80
            volumeMounts:
              - name: localdisk
                mountPath: /localdisk-test
          volumes:                               # Mount a local disk.
            - name: localdisk
              emptyDir:
                medium: LocalRaid0
    ```
    
2.  View the information about the mounted local disk.
    
    After the pod is created, view the pod information. You can see that a RAID 0 configuration (`/dev/md0`) is generated for the local disk, and the disk is mounted to the specified path, which is `/localdisk-test` in the following example.
    
    ![本地盘-k8s](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6843290761/p523085.png)
