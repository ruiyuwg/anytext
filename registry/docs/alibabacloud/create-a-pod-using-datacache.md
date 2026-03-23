After you create a DataCache, you can use the DataCache to create a pod and mount the cached data to the pod. This eliminates data pulling when you create the pod and accelerates service startup. This topic describes how to use a DataCache to create a pod.

## **Prerequisites**

A DataCache is created. For more information, see [Create and manage a DataCache](/help/en/eci/user-guide/create-and-manage-datacache).

## **Configuration description**

DataCaches are cluster-level resources. You can use DataCaches to pull data in advance when you create pods in different namespaces.

When you use a DataCache to create a pod, you must add an annotation to specify the bucket that stores the DataCache. You must also specify the path in which the DataCache is mounted by using the HostPath parameter.

**Note**

When you use a DataCache to create a pod, the system automatically creates and mounts a pay-as-you-go disk to the pod. The storage capacity of the disk is equal to the size of the DataCache. The disk is created and released together with the pod.

The following table describes the annotations that you can add when you use a DataCache to create a pod.

**Annotation**

**Example**

**Description**

k8s.aliyun.com/eci-data-cache-bucket

default

Specifies the bucket that is used to store the DataCache. You must configure this annotation when you use DataCaches to create pods.

k8s.aliyun.com/eci-data-cache-pl

PL1

Specifies the performance level of the disk that is created based on the DataCache. By default, a PL1 enhanced SSD (ESSD) is used.

k8s.aliyun.com/eci-data-cache-provisionedIops

"40000"

Specifies the read/write IOPS that is provisioned for the ESSD AutoPL disk. Valid values: 0 to min{50000, 1000 × Storage capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Storage capacity, 50,000}. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

If you add this annotation, the disk that is created based on the DataCache is an ESSD AutoPL disk.

k8s.aliyun.com/eci-data-cache-burstingEnabled

"true"

Specifies whether to enable the performance burst feature for the ESSD AutoPL disk. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

If you add this annotation, the disk that is created based on the DataCache is an ESSD AutoPL disk.

Sample YAML file:

```
apiVersion: v1
kind: Pod
metadata:
  name: test
  labels: 
    alibabacloud.com/eci: "true" 
  annotations:
    k8s.aliyun.com/eci-data-cache-bucket: "default"   # Specifies the bucket that is used to store the DataCache.
spec:
  containers:
    - name: modelscope
      image: registry.cn-hangzhou.aliyuncs.com/modelscope-repo/modelscope:ubuntu20.04-py38-torch1.11.0-tf1.15.5-1.6.1
      command: ["sleep", "999999"]
      volumeMounts:
        - name: "model"
          mountPath: "/model"
  volumes:                  
    - name: "model"
      hostPath:              
        path: "/model/ms/"  # Specifies the path in which the DataCache is mounted.
```
