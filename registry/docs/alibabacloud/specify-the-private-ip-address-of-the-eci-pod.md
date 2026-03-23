In some business scenarios, worker pods need to use a fixed IP address. This topic describes how to specify a private IP address for an Elastic Container Instance-based pod when you create the pod.

## **Feature description**

By default, the system randomly assigns a private IP address to an Elastic Container Instance-based pod from the vSwitch CIDR block that you specified in the eci-profile when you create the pod. In some business scenarios, you may want to specify the private IP addresses of pods. For example, if you want to migrate a service, after you delete the old pod, you can specify the IP address of the old pod for the new pod. This ensures service continuity.

**Note**

For more information about how to configure vSwitches for clusters or pods, see [Create pods across multiple zones](/help/en/eci/user-guide/create-pods-in-multiple-zones).

## **Limits**

The private IP addresses that you specified for pods must be IPv4 addresses.

## **Configuration description**

You can add the `k8s.aliyun.com/eci-private-ip-address` annotation to the metadata of a pod to specify a private IP address for the pod. Take note of the following items:

-   The specified IP address must belong to the CIDR block of the vSwitch specified in the `vSwitchIds` parameter in the eci-profile. Make sure that the IP address is idle.
    
-   You cannot specify multiple IP addresses. If you add the annotation when you create a resource such as a Deployment, you can configure only one replica for the pod. If you configure multiple replicas, only one pod is created. Other pods fail to be created because they cannot be assigned IP addresses.
    

## **Configuration example**

1.  Specify a private IP address to create a pod.
    
    ```
    kubectl create -f private-ip-test.yaml
    ```
    
    Sample content of private-ip-test.yaml:
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: private-ip-test
      labels:
        alibabacloud.com/eci: "true"
      annotations:
        k8s.aliyun.com/eci-private-ip-address: "172.16.0.11"    # Specify a private IP address for the pod.
    spec:
      containers:
      - image: registry-vpc.cn-beijing.aliyuncs.com/eci_open/nginx:1.14.2
        name: test-container
    ```
    
2.  Check the private IP address of the pod.
    
    ```
    kubectl get pod -o wide
    ```
    
    The following figure shows a sample output. The system has assigned the specified private IP address to the pod.
    
    ![指定ip-k8s.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3527854961/p703714.png)
