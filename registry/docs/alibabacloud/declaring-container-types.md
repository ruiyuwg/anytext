If you use a sidecar container to implement an effect similar to that of a DaemonSet, a job-type pod may fail to complete running. In this case, you can configure environment variables to specify the type of the sidecar container and ignore the exit code of the sidecar container. This ensures that the job can complete running as expected.

## **Feature description**

If you use Elastic Container Instance in Container Service for Kubernetes (ACK) Serverless clusters, Elastic Container Instance does not support the DaemonSet feature of Kubernetes due to the limitation of virtual nodes. In some scenarios where you want to use DaemonSets, you can add sidecar containers to Elastic Container Instance-based pods to achieve a similar effect as DaemonSets. However, if you set the RestartPolicy parameter to OnFailure or Never, the lifecycle of the pods is affected. For example, after you add a filebeat sidecar container to a job, the sidecar container continues to run after application containers exit. As a result, the job cannot reach the desired state and cannot complete running.

For the preceding scenarios, Elastic Container Instance supports the following features:

-   **Specify the type of containers**
    
    You can use environment variables to add a type label to a sidecar container. This way, if application containers exit and do not restart, Elastic Container Instance forcibly terminates the running of the sidecar container to ensure that the job can complete running.
    
-   **Ignore the exit codes of containers**
    
    If Elastic Container Instance forcibly terminates the running of the sidecar container, the exit code of the sidecar container is not 0 to indicate that the container terminates in the failed state. Then, the final state of the job is Failed. To address this issue, you can use environment variables of containers to ignore the exit code of the sidecar container and forcibly set the state of sidecar container to Succeeded. This ensures that the final state of the job is Succeeded.
    

## **Configuration description**

**Configuration item**

**Name of the environment variable**

**Description**

Specify the type of containers

ECI\_CONTAINER\_TYPE

Valid values:

-   normal: specifies that the container is a normal container. If this environment variable is left empty, the normal value is used.
    
-   sidecar: specifies that the container is a sidecar container.
    

Ignore the exit codes of containers

ECI\_CONTAINER\_IGNORE\_EXIT\_CODE

Specifies whether to ignore the exit codes of containers. When a container for which this environment variable is set is terminated and the exit code is not 0, Elastic Container Instance forcibly sets the state of the container to Succeeded and adds the actual exit code, cause of failure, and failure information to the Message field in the form of text.

## **Configuration example**

1.  Write the YAML configuration file of a job and then use the YAML file to create the job.
    
    ```
    kubectl apply -f test-sidecar.yaml
    ```
    
    The following example provides a YAML file named test-sidecar.yaml. In the file, a job that includes two containers is created. c1 is the application container, and c2 is the sidecar container. Environment variables are added to specify the type of containers and ignore the exit codes of containers.
    
    ```
    apiVersion: batch/v1
    kind: Job
    metadata:
      name: test
    spec:
      template:
        metadata:
          labels:
            app: test
            alibabacloud.com/eci: "true" 
        spec:
          containers:
          - name: c1
            image: registry.cn-shanghai.aliyuncs.com/eci_open/perl:5
            command: ["perl","-Mbignum=bpi","-wle","print bpi(2000)"]
          - name: c2
            image: registry.cn-shanghai.aliyuncs.com/eci_open/perl:5
            command: ["/bin/sh","-c","sleep 999"] 
            env:
            - name: ECI_CONTAINER_TYPE
              value: "sidecar"
            - name: ECI_CONTAINER_IGNORE_EXIT_CODE
              value: "true"
          restartPolicy: Never
          backoffLimit: 2
    ```
    
2.  View the details of the job and pod and observe the effect of the environment variables.
    
    -   Run the following command to check whether the final state of the job is Succeeded.
        
        ```
        kubectl describe job <job-name>
        ```
        
        Sample response:
        
        ![job-1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4764624071/p744628.png)
        
    -   View the details of the sidecar container and check the actual exit code and related information.
        
        ```
        kubectl describe pod <pod-name>
        ```
        
        Sample response:
        
        ![job-2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4764624071/p744629.png)
