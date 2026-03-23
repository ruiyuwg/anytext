You are charged for Elastic Container Instance-based pods (pods) that are in the Pending state. If you do not handle abnormal pods that remain in the Pending state for an extended period of time, you may be charged unnecessary fees. By default, the maximum pending duration of a pod is 4 hours. You can specify the maximum pending duration based on your business requirements. The system automatically terminates the pod after the pod times out. This helps you prevent issues that are caused by the failure to handle abnormal pods in a timely manner.

## **Feature description**

Each elastic container instance is equivalent to a pod. When you create a pod, you are charged for the pod after the pod enters the Pending state from the Scheduling state. During the Pending phase, if an error occurs, such as when an image fails to be pulled or a volume fails to be mounted, the pod remains in the Pending state and continues to be billed. You must resolve the issue in a timely manner to avoid unnecessary charges. By default, the system automatically terminates pods that remain in the Pending state for more than 4 hours and stops billing for the pods. You can specify the maximum pending duration of a pod.

**Important**

When an elastic container instance is in the Scheduling, Pending, or Restarting state, the corresponding pod status that is indicated by the PodStatus.Phase parameter is Pending. However, the maximum pending duration that you can specify refers only to the duration when the elastic container instance is in the Pending state, excluding the duration when the instance is in the Scheduling and Restarting states. For more information, see [Lifecycle of a pod](/help/en/eci/user-guide/lifecycle-of-an-elastic-container-instance-2).

## **Configuration description**

You can add the `k8s.aliyun.com/eci-max-pending-minute` annotation to the metadata in the configuration file of a pod to specify the maximum pending duration of the pod. Take note of the following limits on the annotation:

-   The value of the k8s.aliyun.com/eci-max-pending-minute annotation must be an integer from 10 to 1440. Unit: minutes. 1440 minutes are equal to 24 hours.
    
    **Important**
    
    Specify the maximum pending duration based on your business requirements. When you create a pod, an extended period of time is required to pull the image if the image is large and no image cache is available. In this case, if the maximum pending duration that you specified is too short, the pod may fail to be created.
    
-   If you do not add the annotation to the metadata of the pod, the default maximum pending duration is 4 hours.
    
-   If you configure an init container for a pod and the init container is running, the annotation does not take effect on the pod.
    

After the maximum pending duration elapses, the system reports the corresponding event. In this case, the status of the elastic container instance changes to Failed, and the corresponding pod status that is indicated by the PodStatus.Phase parameter is determined based on the value of the restartPolicy parameter.

-   If the restartPolicy parameter is set to Always or OnFailure, the value of the PodStatus.Phase parameter is Pending.
    
-   If the restartPolicy parameter is set to Never, the value of the PodStatus.Phase parameter is Pending.
    

## **Configuration example**

1.  Create a pod for which the maximum pending duration is configured.
    
    ```
    kubectl create -f pending-test.yaml
    ```
    
    The following sample code provides an example of the content of the pending-test.yaml file, which is used to simulate a pod that is in the Pending state due to an image pull failure.
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: pending-test
      labels:
        alibabacloud.com/eci: "true"
      annotations:
        k8s.aliyun.com/eci-max-pending-minute: "10"    # Sets the maximum pending duration to 10 minutes.
    spec:
      containers:
      - image: test****-registry.example.com/eci_test/nginx:1.0  # Specifies the private image that you want to pull. Replace the image with an actual image.
        name: test-container
      restartPolicy: Never  # Sets the container restart policy to Never, which specifies that the container is not to automatically restarted.
    ```
    
2.  Check the status of the pod.
    
    ```
    kubectl get pod <pod-name> -o=jsonpath='{.status.phase}'
    ```
    
    Sample command output:
    
    ![pending时长1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2517132271/p815904.png)
    
3.  Wait for 10 minutes. After the maximum pending duration elapses, check the status and the event information of the pod.
    
    -   The restartPolicy parameter is set to Never. In this case, the pod enters the Failed state after the maximum pending duration elapses.
        
        ```
        kubectl get pod <pod-name> -o=jsonpath='{.status.phase}'
        ```
        
        Sample command output:
        
        ![pending时长2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2517132271/p815907.png)
        
    -   View the pod event information.
        
        ```
        kubectl get events --field-selector involvedObject.name=<pod-name>
        ```
        
        Sample command output:
        
        ![pending时长3.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2517132271/p815928.png)
        
    
    **Note**
    
    You can also check whether the pod is in the Failed state in the [Elastic Container Instance console](https://eci.console.alibabacloud.com/) and view the event information on the **Events** tab of the instance details page.
