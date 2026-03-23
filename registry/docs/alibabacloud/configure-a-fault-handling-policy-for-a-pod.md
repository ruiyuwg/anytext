By default, the system automatically retries to recreate an Elastic Container Instance-based pod after the pod fails to be created. If you want to quickly obtain the creation result and handle the fault at the earliest opportunity, you can modify the fault handling policy of the pod.

## **Configuration description**

You may fail to create a pod on a virtual node due to insufficient resources. By default, the system automatically reschedules resources and tries to recreate the pod. You can add the `k8s.aliyun.com/eci-fail-strategy` annotation to configure the fault handling policy of the pod and specify whether to recreate the pod after the pod fails to be created.

**Important**

-   Annotations must be added to the metadata in the configuration file of the pod. For example, when you create a Deployment, you must add annotations in the spec.template.metadata section.
    
-   To use features of Elastic Container Instance, you can add annotations only when you create Elastic Container Instance-based pods. If you add or modify annotations when you update pods, these annotations do not take effect.
    

The following table describes the valid values of the `k8s.aliyun.com/eci-fail-strategy` annotation.

**Value**

**Description**

**Scenario**

fail-back

After a pod fails to be created, the system automatically tries to recreate the pod. The pod remains in the Pending state until it is successfully recreated. After the pod is recreated, the status of the pod changes to the Running state.

You require a high success rate and can accept the delayed delivery of pods.

fail-over

The effects of fail-over and fail-back are the same.

fail-fast

After a pod fails to be created, the system directly reports an error. The pod is in the ProviderFailed state. The upper-layer orchestration determines whether the system retries to recreate the pod or schedules the pod to a real node.

You require high efficiency and want to quickly deliver pods. The system provides optimized fault handling logic.

**Note**

-   If the `k8s.aliyun.com/eci-fail-strategy: "fail-fast"` annotation is added to the metadata in the configuration file of an Elastic Container Instance-based pod, the provisioner does not support the `WaitForFirstConsumer` StorageClass when a dynamically provisioned disk volume is mounted to the pod.
    
-   We recommend that you do not use the `k8s.aliyun.com/eci-reschedule-enable` annotation to configure rescheduling.
    

## **Configuration example**

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
        k8s.aliyun.com/eci-fail-strategy: "fail-fast" # If a pod fails to be created, the system directly reports an error without attempting to recreate the pod.
        k8s.aliyun.com/eci-use-specs: "ecs.c6.large"
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        ports:
        - containerPort: 80
```

In the preceding sample YAML file, the fault handling policy of the pod is fail-fast. If the pod remains in the Pending state for a long period of time, you can view the pod status.reason.

-   If the pod status.reason is ContainerInstanceScheduleFailed, the pod fails to be scheduled. In this case, you can view the ContainerInstanceCreated condition and identify the cause based on the reason and message of the condition. Then, you can take appropriate measures, such as modifying the specifications of the pod and configuring multiple zones to create the pod. For more information, see [ContainerInstanceCreated](/help/en/eci/user-guide/eci-custom-condition#61de43d047mw3).
    
-   If the pod status.reason is empty, you can view the ContainerInstanceCreated condition and check the scheduling status based on the value of the condition. In most cases, if the fault handling policy is fail-fast, the pod status.reason is not empty.
    
    -   If the value of ContainerInstanceCreated is True, the pod is successfully scheduled and an exception occurs during the creation of the sandbox.
        
    -   If the value of ContainerInstanceCreated is False and the value of reason is not Creating, the pod failed to be scheduled and you must wait for the pod to be scheduled.
        

For example, a pod fails to be created due to insufficient resources. The following sample code provides an example of the ContainerInstanceCreated condition when the fault handling policy of the pod is fail-fast.

**Note**

If the fault handling policy of the pod is fail-back, the system automatically reschedules the pod after the pod fails to be created. In this case, the pod status.reason is not ContainerInstanceScheduleFailed. You can view the ContainerInstanceCreated condition and identify the cause of the scheduling failure in the current scheduling cycle based on the reason and message of the condition.

```
{
    "conditions": [
        {
            "lastProbeTime": "2023-03-30T18:11:31Z",
            "lastTransitionTime": "2023-03-30T18:11:31Z",
            "message": "Create ECI failed because the specified instance is out of stock. %s",
            "reason": "ContainerGroup.NoStock",
            "status": "False",
            "type": "ContainerInstanceCreated"
        }
    ],
    "Reason":"ContainerInstanceScheduleFailed",
    "phase": "Pending"
}
```
