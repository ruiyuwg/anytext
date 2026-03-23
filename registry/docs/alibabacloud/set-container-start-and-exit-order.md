This topic describes how to configure the startup and exit priorities of containers in an Elastic Container Instance-based pod (elastic container instance). This way, the containers start and exit in sequence.

## **Feature description**

By default, containers in an elastic container instance concurrently start and exit. In some scenarios, containers in an instance may have a dependency relationship. A container must start after another container starts, or a container must exit after another container exits. For example:

-   In Istio service governance scenarios, the istio-proxy container must be ready before data transfers generate on application containers, and the istio-proxy container can exit only after application containers exit.
    
-   In log collection scenarios, the log container must be ready before logs generate on application containers, and the log container can exit only after application containers exit.
    

In the preceding scenarios, Elastic Container Instance allows you to configure the startup and exit priorities for containers in an elastic container instance by using environment variables. You can add environment variables to containers based on your business requirements to ensure that containers start or exit in sequence.

## **Configuration description**

The following table describes the environment variables that can be used to configure the startup and exit priorities of containers:

**Item**

**Name of the environment variable**

**Description**

Container startup priority

ECI\_CONTAINER\_LAUNCH\_PRIORITY

-   Valid values: -1000 to 1000. Default value: 0. A larger value indicates a higher startup priority.
    
-   Containers with a higher priority are guaranteed to start before containers with a lower priority start. Containers with the same priority are not guaranteed to start in sequence, and they concurrently start.
    
-   If a container depends on another container to provide services, you must configure a readiness probe for another container. For example, if Container B depends on Container A to provide services, you must configure a higher startup priority and readiness probe for Container A to ensure that Container B can start only after Container A is ready.
    

Container exit priority

ECI\_CONTAINER\_EXIT\_PRIORITY

-   Valid values: -1000 to 1000. Default value: 0. A larger value indicates a higher exit priority.
    
-   Containers with a higher priority are guaranteed to exit before containers with a lower priority exit. Containers with the same priority are not guaranteed to exit in sequence, and they concurrently exit.
    

**Important**

After you configure the sequence in which containers exit, the duration in which the pod is destroyed may be longer than the duration that is specified by TerminationGracePeriodSeconds in the pod specification.

## **Configuration examples**

### **Configure the startup priorities of containers**

1.  Write a YAML configuration file for the application, and then use the YAML file to create a Deployment.
    
    ```
    kubectl apply -f test-launch.yaml
    ```
    
    The following example test-launch.yaml shows the configuration of creating a Deployment that contains one pod replica. The pod contains two containers. The c1 container has a higher startup priority than the c2 container. The c1 container is configured with a readiness probe. In this case, the c2 container starts only after the c1 container is ready.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: test-launch
      labels:
        app: test
    spec:
      replicas: 1 
      selector:
        matchLabels:
          app: test
      template:
        metadata:
          labels:
            app: test
        spec:
          containers:
          - image: registry-vpc.cn-shanghai.aliyuncs.com/eci_open/nginx:alpine
            name: c1
            env:
            - name: ECI_CONTAINER_LAUNCH_PRIORITY
              value: "1000"
            readinessProbe:                  
              httpGet:
                path: /
                port: 80
              initialDelaySeconds: 30     
              periodSeconds: 3
          - image: registry-vpc.cn-shanghai.aliyuncs.com/eci_open/nginx:alpine
            name: c2
            env:
            - name: ECI_CONTAINER_LAUNCH_PRIORITY
              value: "0"
            args:
            - /bin/sh
            - -c
            - sleep 3600s
    ```
    
2.  Observe the start time of each container in the pod status.
    
    ```
    kubectl describe pod <pod name>
    ```
    
    The `Containers` section of the response shows that the startup time of the c2 container is later than the startup time of the c1 container. Example response:
    
    ![容器启动k8s.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1017685961/p706804.png)

### **Configure the exit priorities of containers**

1.  Write a YAML configuration file for the application, and then use the YAML file to create a Deployment.
    
    ```
    kubectl apply -f test-exit.yaml
    ```
    
    The following example test-exit.yaml shows the configuration of creating a Deployment that contains one pod replica. The pod contains the c1, c2, and c3 containers, which have descending exit priorities.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: test-exit
      labels:
        app: test
    spec:
      replicas: 1 
      selector:
        matchLabels:
          app: test
      template:
        metadata:
          labels:
            app: test
        spec:
          containers:
          - image: registry-vpc.cn-shanghai.aliyuncs.com/eci_open/nginx:alpine
            name: c1
            env:
            - name: ECI_CONTAINER_EXIT_PRIORITY
              value: "1000"
          - image: registry-vpc.cn-shanghai.aliyuncs.com/eci_open/nginx:alpine
            name: c2
            env:
            - name: ECI_CONTAINER_EXIT_PRIORITY
              value: "0"
            args:
            - /bin/sh
            - -c
            - sleep 3600s
          - image: registry-vpc.cn-shanghai.aliyuncs.com/eci_open/nginx:alpine
            name: c3
            env:
            - name: ECI_CONTAINER_EXIT_PRIORITY
              value: "-1000"
            args:
            - /bin/sh
            - -c
            - sleep 3600s
    ```
    
2.  Delete the pod and then observe the killing event sequence of containers in the pod.
    
    **Note**
    
    If you want to check the sequence in which the containers exit, view the events in a timely manner. You may not be able to observe the events after the pod is deleted.
    
    ```
    kubectl describe pod <pod name>
    ```
    
    The `Events` section of the response shows that the c1, c2, and c3 containers exit in sequence. Example response:
    
    ![容器退出.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1017685961/p706956.png)
