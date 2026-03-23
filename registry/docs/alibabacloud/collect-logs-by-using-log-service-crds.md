This topic describes how to use a Simple Log Service CRD (custom resource definition) in a Container Service for Kubernetes (ACK) Serverless cluster to configure log collection and implement automated container log collection.

## Background information

Simple Log Service is an end-to-end data logging service. You can use Simple Log Service to collect, consume, deliver, query, and analyze log data without performing further development. For more information, see [What is Simple Log Service?](/help/en/sls/what-is-log-service#concept-mt2-ykn-vdb)

## Prerequisites

Simple Log Service is activated for the ACK Serverless cluster. Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/lognext/profile). If Simple Log Service is not activated for the cluster, you are prompted to follow on-screen instructions to activate the service.

## **Usage notes**

The log collection feature that is enabled by using Simple Log Service CRDs is valid only for the Elastic Container Instance pods that are created after the CRDs are created. If you want to collect logs of existing pods, you must perform a rolling release for the existing pods.

## Configure log collection

After you deploy the alibaba-log-controller component in a cluster, you can use an AliyunLogConfig CRD (CRD for log collection configurations) to configure log collection.

### **Deploy the alibaba-log-controller component in the cluster**.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com/?spm=a2c4g.11186623.2.16.61a036c8iieu29&amp;accounttraceid=caa7f456b82e4e998e461e8bee1a3cb6xetj#/k8s/cluster/list).
    
2.  In the top navigation bar, select a region.
    
3.  On the **Clusters** page, click the name of the ACK Serverless cluster whose container logs you want to collect to go to the management page of the cluster.
    
4.  Deploy the alibaba-log-controller component in the cluster.
    
    1.  In the left-side navigation pane of the details page, choose **Operations > Add-ons**.
        
    2.  Click the **Logs and Monitoring** tab, find the card of the **Alibaba-log-controller** component, and then click **Install**.
        
    3.  In the message that appears, click **OK**.
        
        After alibaba-log-controller is installed, the characters "Installed" are displayed in the upper-right corner of the card of **alibaba-log-controller**.
        

### **Create an AliyunLogConfig CRD**

1.  Connect to the ACK Serverless cluster.
    
2.  Compile the YAML configuration file of AliyunLogConfig CRD.
    
    **Important**
    
    After you create an AliyunLogConfig CRD, you can view the generated Logstore and Logtail configuration in the Simple Log Service console. If you use a CRD to create a Logtail configuration and modify the configuration in the Simple Log Service console, the modification is not synchronized to the CRD. If you want to update the Logtail configuration, modify the AliyunLogConfig CRD resource. Do not perform operations in the Simple Log Service console to prevent configuration inconsistency.
    
    **AliyunLogConfig CRD YAML template**
    
    ```
    apiVersion: log.alibabacloud.com/v1alpha1     
    kind: AliyunLogConfig                         
    metadata:
      name: simple-stdout-example                 
    spec:
      project: k8s-my-project                      
      logstore: k8s-stdout                         
      logstoreMode: standard                       
      shardCount: 2                               
      lifeCycle: 90                               
      logtailConfig:                            
        inputType: plugin                          
        configName: simple-stdout-example          
        inputDetail:                               
          ...
    ```
    
    -   **Basic parameters**
        
        **Parameter**
        
        **Type**
        
        **Required**
        
        **Description**
        
        project
        
        string
        
        No
        
        The name of the project. The default value is the name of the project that you use to install the Logtail components.
        
        If you want to create a project, specify a name for the project. If the project does not exist, the system automatically creates the project.
        
        logstore
        
        string
        
        Yes
        
        The name of the Logstore. If the specified Logstore does not exist, the system automatically creates a Logstore.
        
        logstoreMode
        
        string
        
        No
        
        The type of the Logstore. This parameter takes effect only when you create a Logstore. Valid values:
        
        -   query: Logstore for query
            
        -   standard: Standard Logstore
            
        
        For more information, see [Manage a logstore](/help/en/sls/manage-a-logstore#concept-xkb-zh5-vdb).
        
        shardCount
        
        int
        
        No
        
        The number of shards. Valid values: 1 to 10. Default value: 2.
        
        lifeCycle
        
        int
        
        No
        
        The retention period of data in the Logstore. Valid values: 1 to 3650. Default value: 90. Unit: days. The value 3650 specifies that data is permanently stored in the Logstore. This parameter takes effect only when you create a Logstore.
        
        machineGroups
        
        array
        
        No
        
        The machine group. When you install Logtail components, Simple Log Service automatically creates a machine group named `k8s-group-${your_k8s_cluster_id}`.
        
        logtailConfig
        
        object
        
        Yes
        
        The Logtail configuration. The configuration includes the following parameters:
        
        -   configName: the name of the Logtail configuration. The name must be the same as the name specified in metadata.name.
            
        -   inputType: the type of log inputs. Valid values:
            
            -   plugin: uses the Logtail plug-in to collect logs such as MySQL binary logs.
                
            -   file: collects text logs in a fixed mode, such as the regular expression mode and delimiter mode.
                
        -   inputDetail: the configurations for log inputs.
            
        -   outputType: the type of log outputs. Set the value to LogService. Logs can be uploaded only to Simple Log Service.
            
        -   outputDetail: the configurations for log outputs.
            
        -   logSample: a sample log.
            
        
        For more information about parameter settings, see [Logtail configurations](/help/en/sls/developer-reference/logtail-configurations#concept-f3n-s5q-12b).
        
    -   **Container filtering**
        
        -   **If you use Logtail earlier than v1.0.34, you can filter containers only by using environment variables and container labels.**
            
            A namespace of a Kubernetes cluster and the name of a container in a Kubernetes cluster can be mapped to container labels. The value of the Label Name parameter for a namespace is `io.kubernetes.pod.namespace`. The value of the Label Name parameter for a container name is `io.kubernetes.container.name`. We recommend that you use the two container labels to filter containers. If the container labels do not meet your business requirements, you can use the environment variable whitelist or the environment variable blacklist to filter containers.
            
        -   **If you use Logtail 1.0.34 or a later version, you can filter containers based on the Kubernetes-level information, such as a pod name, namespace, container name, and container label.**
            
            Container filtering parameters must be configured in the logtailConfig.inputDetail.advanced.k8s field. Supported parameters:
            
            -   IncludeK8sLabel: the Kubernetes label whitelist that specifies the containers from which you want to collect data.
                
            -   ExcludeK8sLabel: the Kubernetes label blacklist that specifies the containers from which you do not collect data.
                
            -   K8sNamespaceRegex: the namespace.
                
            -   K8sPodRegex: the name of the pod.
                
            -   K8sContainerRegex: the container name.
                
    
    For more information, see [Collect text logs from Kubernetes containers in DaemonSet mode](/help/en/sls/collect-container-text-logs-through-the-daemonset-console) and [Collect stdout and stderr from Kubernetes containers in DaemonSet mode (old version)](/help/en/sls/collect-container-stdout-and-stderr-in-daemonset-mode-1).
    
    **Sample YAML configuration file for AliyunLogConfig CRDs**
    
    #### **Sample YAML configuration file for CRDs that are used to collect text logs**
    
    Create a file named log-file.yaml and copy the following template into the file.
    
    ```
    apiVersion: log.alibabacloud.com/v1alpha1  # Use the default value. You do not need to modify this parameter. 
    kind: AliyunLogConfig                      # Use the default value. You do not need to modify this parameter. 
    metadata:
      name: test-file                  # The resource name, which is unique in the current Kubernetes cluster. 
    spec:
      project: k8s-log-c326bc86****    # Optional. The project name. If the project does not exist, the system automatically creates the project.
      logstore: test-file              # Required. The Logstore name. If the Logstore does not exist, the system automatically creates a Logstore.   
      logtailConfig:                   # The Logtail configuration.
        inputType: file                # The type of the data source. The value file specifies text logs, and the value plugin specifies stdout logs.
        configName: test-file          # The name of the Logtail configuration. The name must be the same as the resource name that is specified in metadata.name. 
        inputDetail:                   # The details of the Logtail configuration.
          logType: common_reg_log      # Collect text logs in simple mode.
          logPath: /log/               # The path of the log file.
          filePattern: "*.log"         # The name of the log file. The name can contain asterisks (*) and question marks (?). Example: log_*.log. 
          dockerFile: true             # Specify whether to collect logs from docker containers.
          advanced:                    # Configure filter conditions for containers.
            k8s:
              K8sNamespaceRegex: ^(default)$
              K8sPodRegex: '^(eci-sls-demo.*)$'
    ```
    
    #### **Sample YAML configuration file for CRDs that are used to collect stdout logs**
    
    Create a file named log-stdout.yaml and copy the following template into the file.
    
    ```
    apiVersion: log.alibabacloud.com/v1alpha1   # Use the default value. You do not need to modify this parameter. 
    kind: AliyunLogConfig                       # Use the default value. You do not need to modify this parameter. 
    metadata:
      name: test-stdout               # The resource name. The name must be unique in the current Kubernetes cluster. 
    spec:
      project: k8s-log-c326bc86****   # Optional. The project name. If the project does not exist, the system automatically creates the project.
      logstore: test-stdout           # Required. The Logstore name. If the Logstore does not exist, the system automatically creates a Logstore.                  
      shardCount: 2                   # Optional. The number of shards. Default value: 2. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10.                         
      lifeCycle: 90                   # Optional. The retention period of logs in the Logstore. This parameter takes effect only when you create a Logstore. Valid values: 1 to 3650. Default value: 90. Unit: days. A value of 3650 indicates that logs are permanently reserved.
      logtailConfig:                  # The Logtail configuration.
        inputType: plugin             # The type of the data source. The value file specifies text logs. The value plugin specifies stdout logs.                                
        configName: test-stdout       # The name of the Logtail configuration. The name must be the same as the resource name that is specified in metadata.name. 
        inputDetail:                  # The details of the Logtail configuration.
          plugin:
            inputs:
              - type: service_docker_stdout
                detail:
                  Stdout: true
                  Stderr: true
    #              IncludeEnv:
    #                aliyun_logs_test-stdout: "stdout"
    ```
    
3.  Create an AliyunLogConfig CRD.
    
    The following code provides sample commands. After the Logtail configuration is applied, Logtail collects stdout or text logs from each container, and then sends the collected logs to Simple Log Service.
    
    ```
    kubectl apply -f log-file.yaml
    kubectl apply -f log-stdout.yaml
    ```
    
    **Important**
    
    After logs are collected, you must create indexes. Then, you can query and analyze the logs in the Logstore. For more information, see [Create indexes](/help/en/sls/create-indexes#task-jqz-v55-cfb).
    

## **Test log collection**

After you create the AliyunLogConfig CRD, Simple Log Service automatically collects logs of pods that are created later. You can create the following application to test the log collection effect.

1.  Create an application.
    
    The following sample YAML file describes how to create a Deployment. In the example, relevant commands are run to continuously display the stdout and log files after the container is started.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: eci-sls-demo
      labels:
        app: sls
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: sls
      template:
        metadata:
          name: sls-test
          labels:
            app: sls
            alibabacloud.com/eci: "true" 
        spec:
          containers:
          - args:
            - -c
            - mkdir -p /log;while true; do echo hello world; date; echo hello sls >> /log/busy.log; sleep 1;done
            command:
            - /bin/sh
            image: registry-vpc.cn-beijing.aliyuncs.com/eci_open/busybox:1.30
            imagePullPolicy: Always
            name: busybox
    ```
    
    Create a file named test-sls-crd.yaml and copy the preceding YAML file template into the file. Run the following commands to create an application:
    
    ```
    kubectl create -f test-sls-crd.yaml
    ```
    
2.  Check the status of the application.
    
    ```
    kubectl get pod
    ```
    
    Expected output:
    
    ```
    NAME                            READY   STATUS    RESTARTS   AGE
    eci-sls-demo-7bf8849b9f-cgpbn   1/1     Running   0          2m14s
    ```
    
3.  View logs.
    
    1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/lognext/profile).
        
    2.  Click the name of the project.
        
    3.  Find the Logstore in which the logs of your containers are stored. Click the name of the Logstore to view the logs.
        
        ## Collection of text logs
        
        ![日志crd1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3812285761/p537036.png)
        
        ## Collection of stdout logs
        
        ![日志crd0](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3812285761/p537034.png)
        

## **Disable log collection**

After you create an AliyunLogConfig CRD, the system automatically collects logs of all pods that meet the conditions. If you do not want to collect logs of specific pods, you can add the `k8s.aliyun.com/eci-sls-enable: "false"` annotation to the metadata section of the pods to disable log collection. This prevents waste of resources caused by auto-creation of Logtail configurations.

**Important**

-   Annotations must be added to the metadata in the configuration file of the pod. For example, when you create a Deployment, you must add annotations in the spec.template.metadata section.
    
-   Elastic Container Instance-related annotations are only applied when a pod is created. Adding or modifying these annotations on an existing pod will have no effect.
    

Sample configurations:

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: eci-sls-demo2
  labels:
    app: sls
spec:
  replicas: 1
  selector:
    matchLabels:
      app: sls
  template:
    metadata:
      name: sls-test
      labels:
        app: sls
        alibabacloud.com/eci: "true"
      annotations:
        k8s.aliyun.com/eci-sls-enable: "false"    # Disables log collection.
    spec:
      containers:
      - args:
        - -c
        - mkdir -p /log;while true; do echo hello world; date; echo hello sls >> /log/busy.log; sleep 1;
          done
        command:
        - /bin/sh
        image: registry.cn-shanghai.aliyuncs.com/eci_open/busybox:1.30
        imagePullPolicy: Always
        name: busybox
```
