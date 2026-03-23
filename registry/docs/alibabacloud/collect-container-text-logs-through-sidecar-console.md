Simple Log Service provides two methods for deploying Logtail to collect Kubernetes logs: DaemonSet and Sidecar. For details on the differences between them, see [Install Logtail to collect logs from a Kubernetes cluster](/help/en/sls/user-guide/logtail-installation-and-collection-guide-for-k8s-cluster-scenario). This topic explains how to deploy Logtail using Sidecar mode to collect text logs from a Kubernetes cluster.

## **Prerequisites**

-   A [project](/help/en/sls/manage-a-project/#section-ahq-ggx-ndb) and [logstore](/help/en/sls/manage-a-logstore) are created.
    
-   If you use a self-managed Kubernetes cluster, make sure that [kubectl](https://kubernetes.io/zh-cn/docs/reference/kubectl/) is installed.
    

## **Procedure**

This topic uses an **ACK managed cluster** as an example to describe the steps for collecting text logs in Sidecar mode:

1.  Inject a Logtail container into an application pod: Each pod runs a Logtail container to collect logs from all containers in the current pod. Log collection from each pod is isolated.
    
2.  Create a machine group with a custom identifier: Create a machine group for each pod. Simple Log Service manages all containers that need to collect logs through Logtail by using machine groups.
    
3.  Create a Logtail configuration: After a Logtail configuration is created, Logtail collects incremental logs based on the Logtail configuration, then processes and uploads the collected logs to the created logstore.
    
4.  Query and analyze logs: View log data in the logstore.
    

## **Step 1: Inject a Logtail container into an application pod**

The login method differs between self-managed clusters and ACK clusters, but all other steps are the same.

1.  Log on to the [Container Service for Kubernetes console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**, click **More** in the **Actions** column of the target cluster, then click **Manage ACK clusters**.![processed_6](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4667835471/p947927.png)
    
2.  Add the following to your existing application container YAML:
    
    **YAML configuration required to inject a Logtail container**
    
    ```
    ...
        #  containers:
          #  Add the following content under the containers tag in your YAML to mount the log directory of the application container to the shared volume, which is shared with the Logtail container.
              volumeMounts: 
                - name: ${shared_volume_name} 
                  mountPath: ${shared_volume_path} # Mount the shared volume to the log directory of the container.
                - mountPath: /tasksite # Shared directory for communication with the Logtail container.
                  name: tasksite
            # Add a Logtail sidecar container.
            - name: logtail
              image: ${logtail_image}
              command: ["/bin/sh", "-c"]
              args:
                - /etc/init.d/ilogtaild start;
                  sleep 10; # Wait until the Logtail configuration is downloaded.
                  touch /tasksite/cornerstone;
                  until [[ -f /tasksite/tombstone ]]; do sleep 1; done;
                  sleep 10; # Wait until Logtail finishes sending logs.
                  /etc/init.d/ilogtaild stop;
              livenessProbe:
                exec:
                  command:
                    - /etc/init.d/ilogtaild
                    - status
                initialDelaySeconds: 30
                periodSeconds: 30
              env:
                # Specify the time zone in the Region/City format based on the region where the Kubernetes cluster resides. If the cluster is in the Chinese mainland, you can set the time zone to Asia/Shanghai.
                # If the specified time zone is invalid, the time labels of raw logs and processed logs may not match. As a result, logs may be archived based on an incorrect point in time.
                - name: TZ   
                  value: "${timezone}"
                - name: ALIYUN_LOGTAIL_USER_ID
                  value: "${your_aliyun_user_id}"
                - name: ALIYUN_LOGTAIL_USER_DEFINED_ID
                  value: "${your_machine_group_user_defined_id}"
                - name: ALIYUN_LOGTAIL_CONFIG
                  value: "/etc/ilogtail/conf/${your_region_config}/ilogtail_config.json"
                # Specify the pod environment information as log labels.
                - name: "ALIYUN_LOG_ENV_TAGS"
                  value: "_pod_name_|_pod_ip_|_namespace_|_node_name_|_node_ip_"
                # Obtain the pod and node information.
                - name: "_pod_name_"
                  valueFrom:
                    fieldRef:
                      fieldPath: metadata.name
                - name: "_pod_ip_"
                  valueFrom:
                    fieldRef:
                      fieldPath: status.podIP
                - name: "_namespace_"
                  valueFrom:
                    fieldRef:
                      fieldPath: metadata.namespace
                - name: "_node_name_"
                  valueFrom:
                    fieldRef:
                      fieldPath: spec.nodeName
                - name: "_node_ip_"
                  valueFrom:
                    fieldRef:
                      fieldPath: status.hostIP
              volumeMounts:
                # Mount the log directory of the Logtail container to the shared volume.
                - name: ${shared_volume_name}
                  mountPath: ${dir_containing_your_files}
                # Create a mount target to interact with the application container.
                - mountPath: /tasksite
                  name: tasksite
          volumes:
            # Define an empty shared volume for log storage.
            - name: ${shared_volume_name}
              emptyDir: {}
            # Define a volume for containers to communicate with each other.
            - name: tasksite
              emptyDir:
                medium: Memory
    ```
    
    **Key parameters**
    
    **Variable**
    
    **Description**
    
    `${timezone}`
    
    The [time zone](/help/en/ack/product-overview/supported-time-zones) of the container.
    
    `${your_aliyun_user_id}`
    
    The ID of your Alibaba Cloud account. For more information, see [Configure a user identifier](/help/en/sls/configure-a-user-identifier#section-dzm-o12-6id).
    
    `${your_machine_group_user_defined_id}`
    
    The custom identifier of your machine group. For example, `nginx-log-sidecar`.
    
    **Important**
    
    The identifier must be unique in the region to which your project belongs.
    
    `${your_region_config}`
    
    Specify a value based on the ID of the [region](/help/en/sls/sls-supported-regions1) to which your project belongs and the type of the network for your project.
    
    -   Example: If your project belongs to the Singapore region, the value is `ap-southeast-1` for the internal network and `ap-southeast-1-internet` for the Internet.
        
    
    `${logtail_image}`
    
    The [Logtail image address](https://cr.console.alibabacloud.com/repository/cn-hangzhou/log-service/logtail/details). For example, `registry.cn-hangzhou.aliyuncs.com/log-service/logtail:latest`.
    
    `${shared_volume_name}`
    
    The name of the volume.
    
    **Important**
    
    The `name` parameter under the `volumeMounts` node must be the same as the `name` parameter under the `volumes` node. This ensures that the Logtail container and the application container are mounted to the same volume.
    
    `${dir_containing_your_files}`
    
    The mount path. Specify the directory of container text logs that you want to collect.
    
    If you do not have an existing application container or you want to test the procedure, this topic also provides a YAML example: Simply modify the ALIYUN\_LOGTAIL\_USER\_ID in the example to your Alibaba Cloud account ID, and ensure that the region `${region_id}` in ALIYUN\_LOGTAIL\_CONFIG is the same as the region of your Simple Log Service project. For the value, see [Supported regions](/help/en/sls/sls-supported-regions1#title-noy-ano-5fm) and replace it.
    
    **YAML example**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      annotations:
        deployment.kubernetes.io/revision: '1'
      labels:
        app: deployment-file
        cluster_label: CLUSTER-LABEL-A
      name: deployment-file
      namespace: default
    spec:
      progressDeadlineSeconds: 600
      replicas: 1
      revisionHistoryLimit: 10
      selector:
        matchLabels:
          app: deployment-file
      strategy:
        rollingUpdate:
          maxSurge: 25%
          maxUnavailable: 25%
        type: RollingUpdate
      template:
        metadata:
          labels:
            app: deployment-file
            cluster_label: CLUSTER-LABEL-A
        spec:
          containers:
            - name: timestamp-test
              image: 'mirrors-ssl.aliyuncs.com/busybox:latest'
              args:
                - >-
                  while true; mkdir -p /root/log; do date '+%Y-%m-%d %H:%M:%S'
                  >>/root/log/timestamp.log; echo 1 >>/root/log/timestamp.log; echo
                  2 >>/root/log/timestamp.log; echo 3 >>/root/log/timestamp.log;
                  echo 4 >>/root/log/timestamp.log; echo 5
                  >>/root/log/timestamp.log; echo 6 >>/root/log/timestamp.log;
                  echo 7 >>/root/log/timestamp.log; echo 8
                  >>/root/log/timestamp.log; echo 9 >>/root/log/timestamp.log;
                  sleep 10; done
              command:
                - /bin/sh
                - '-c'
                - '--'
              env:
                - name: cluster_id
                  value: CLUSTER-A
              imagePullPolicy: IfNotPresent
              resources: {}
              terminationMessagePath: /dev/termination-log
              terminationMessagePolicy: File
              volumeMounts:
                # Mount the log directory of the application container to the shared volume.
                - name: test-logs
                  mountPath: /root/log
                 # Create a mount target to interact with the Logtail container.
                - mountPath: /tasksite
                  name: tasksite
                - name: tz-config
                  mountPath: /etc/localtime
                  readOnly: true
            # Logtail sidecar container
            - name: logtail
              image: registry.cn-hangzhou.aliyuncs.com/log-service/logtail:v1.8.7.0-aliyun
              command: ["/bin/sh", "-c"]
              args:
                - /etc/init.d/ilogtaild start;
                  sleep 10;
                  touch /tasksite/cornerstone;
                  until [[ -f /tasksite/tombstone ]]; do sleep 1; done;
                  sleep 10;
                  /etc/init.d/ilogtaild stop;
              livenessProbe:
                exec:
                  command:
                    - /etc/init.d/ilogtaild
                    - status
                initialDelaySeconds: 30
                periodSeconds: 30
              resources:
                limits:
                  cpu: 500m
                  memory: 512Mi
                requests:
                  cpu: 10m
                  memory: 30Mi
              env:
                # Specify the time zone in the Region/City format based on the region where the Kubernetes cluster resides. If the cluster is in the Chinese mainland, you can set the time zone to Asia/Shanghai.
                # If the specified time zone is invalid, the time labels of raw logs and processed logs may not match. As a result, logs may be archived based on an incorrect point in time.
                - name: TZ
                  value: "Asia/Shanghai"
                # Replace the environment variables with the actual values.
                - name: ALIYUN_LOGTAIL_USER_ID
                  value: "12************80"
                - name: ALIYUN_LOGTAIL_USER_DEFINED_ID
                  value: "nginx-log-sidecar"
                - name: ALIYUN_LOGTAIL_CONFIG
                  value: "/etc/ilogtail/conf/${region_id}-internet/ilogtail_config.json"
                # Specify the pod environment information as log labels.
                - name: "ALIYUN_LOG_ENV_TAGS"
                  value: "_pod_name_|_pod_ip_|_namespace_|_node_name_|_node_ip_"
                # Obtain the pod and node information.
                - name: "_pod_name_"
                  valueFrom:
                    fieldRef:
                      fieldPath: metadata.name
                - name: "_pod_ip_"
                  valueFrom:
                    fieldRef:
                      fieldPath: status.podIP
                - name: "_namespace_"
                  valueFrom:
                    fieldRef:
                      fieldPath: metadata.namespace
                - name: "_node_name_"
                  valueFrom:
                    fieldRef:
                      fieldPath: spec.nodeName
                - name: "_node_ip_"
                  valueFrom:
                    fieldRef:
                      fieldPath: status.hostIP
              volumeMounts:
                # Mount the log directory of the Logtail container to the shared volume.
                - name: test-logs
                  mountPath: /root/log
          volumes:
            # Define an empty shared volume for log storage.
            - name: test-logs
              emptyDir: {}
              # Define a volume for containers to communicate with each other.
            - name: tasksite
              emptyDir:
                medium: Memory
            - name: tz-config
              hostPath:
                path: /usr/share/zoneinfo/Asia/Shanghai  # Specify the time zone file on your server.
          dnsPolicy: ClusterFirst
          restartPolicy: Always
          schedulerName: default-scheduler
          securityContext: {}
          terminationGracePeriodSeconds: 30
    ```
    
3.  Run `kubectl apply -f` to apply the configuration.
    
4.  Run `kubectl describe pod` to obtain the following information, which indicates that the Logtail container is successfully injected.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6634073471/p922317.png)
    

## **Step 2: Create a machine group with a custom identifier**

**Important**

The `${your_machine_group_user_defined_id}` in the [YAML](#6767bd63001yb) is a custom identifier. In this example, the value is `nginx-log-sidecar`.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com). In the **Projects** section, click the one you want.
    
2.  In the navigation pane on the left, choose **Resources** > **Machine Groups**. In the **Machine Groups** list, choose **![机器组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2123359951/p52484.png)** > **Create Machine Group**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2286682371/p867659.png)
    
3.  In the **Create Machine Group** panel, enter the following information and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    The name of the machine group must meet the following requirements:
    
    -   Contains only lowercase letters, digits, hyphens (-), and underscores (\_).
        
    -   Starts and ends with a lowercase letter or a digit.
        
    -   Is 2 to 128 characters in length.
        
    
    **Important**
    
    After you create a machine group, you cannot change its name. Proceed with caution.
    
    **Machine Group Identifier**
    
    Select **Custom Identifier**.
    
    **Machine Group Topic**
    
    Optional. The [topic](/help/en/sls/log-topics#undefined) is used to identify the logs generated by different servers.
    
    **Custom Identifier**
    
    Enter the custom identifier configured in Step 1, such as `nginx-log-sidecar`.
    

## **Step 3: Create a Logtail configuration**

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the **Quick Data Import** section, click **Import Data**. In the **Import Data** dialog box, click the **Kubernetes - File** card.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6450708171/p776198.png)
    
3.  Select the target project and logstore, and click **Next**.
    
4.  On the **Machine Group Configurations** page, perform the following operations. For information about machine groups, see [Machine groups](/help/en/sls/machine-group-overview).
    
    1.  Set **Scenario** to **Kubernetes Clusters** and **Deployment Method** to **Sidecar**.
        
    2.  Make sure that the target machine group appears in the **Applied Server Groups** list, then click **Next**. The machine group is the one created in [Step 2](#66ff734a26wx5).
        
        If the heartbeat status of the machine group is FAIL or no machine information exists, click **Automatic Retry**. If the status is still FAIL, check whether the region in ALIYUN\_LOGTAIL\_CONFIG in the [YAML](#6767bd63001yb) is the same as the region of the project.
        
        If the issue persists, see [How do I troubleshoot an error that is related to a Logtail machine group in a host environment?](/help/en/sls/troubleshoot-the-errors-related-to-logtail-machine-groups#concept-nfs-hs3-bfb)
        
5.  Create a Logtail configuration and click **Next**. Simple Log Service starts to collect logs.
    
    **Note**
    
    It takes about 3 minutes to create a Logtail configuration.
    
    This section describes only the required configurations. For information about all configurations, see [Logtail configurations](/help/en/sls/collect-container-text-logs-through-the-daemonset-console#580645b06cy4o).
    
    -   **Global Configurations**
        
        **Configuration Name**: The name of the Logtail configuration. The name must be unique in the project to which the Logtail configuration belongs. After it is created, you cannot change its name.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1475485371/p837126.png)
        
    -   **Input Configurations**
        
        -   **Logtail Deployment Mode**: Select **Sidecar**.
            
        -   **File Path**: The directory name and file name can be in a full path or a path that contains wildcard characters. Wildcard characters include asterisks (\*) and question marks (?). In this example, the directory value is the `${dir_containing_your_files}` in the [YAML](#6767bd63001yb).
            
            -   `/apsara/nuwa/**/*.log` indicates files with the .log extension in the `/apsara/nuwa` folder (including its recursive subdirectories).
                
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6634073471/p898837.png)
        
    -   **Processor Configurations**
        
        -   **Log Sample**: You can enter multiple logs. We recommend entering log samples to help configure processing parameters and reduce complexity.
            
        -   **Multi-line Mode**: In this example, multi-line logs are collected. Enable this feature.
            
            -   **Type**: Select **Custom**.
                
            -   **Processing Method If Splitting Fails**: Select **Retain Single Line**.
                
        -   **Regex to Match First Line**: Specify a regular expression and click **Validate**, or click **Generate** and **Automatically Generate**.
            
        -   **Processing Method**: Select **None**. For more information, see [Overview of Logtail plug-ins for data processing](/help/en/sls/overview-22).
            
6.  Create indexes and preview data, then click **Next**. By default, **Full-text Index** is enabled for Simple Log Service. You can also manually create field indexes based on the collected logs, or click **Automatic Index Generation** to automatically generate field indexes. For more information, see [Create indexes](/help/en/sls/create-indexes#task-jqz-v55-cfb).
    

**Important**

To query all fields in logs, use full-text indexes. To query specific ones, use field indexes to reduce index traffic. For field analysis (SELECT statement), create field indexes.

## **Step 4: Query and analyze logs**

1.  In the **Projects** section of the Simple Log Service console, click the project that you want to manage to go to its details page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6450708171/p794557.png)
    
2.  Find the logstore that you want to manage, move the pointer over the logstore, click the ![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6892268171/p794555.png) icon, then select **Search & Analysis** to view the logs of your Kubernetes cluster.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6450708171/p794556.png)
    

### **K8s log fields**

The following table describes the default fields that are included in each container text log in Kubernetes.

**Field**

**Description**

**\_\_tag\_\_:\_\_hostname\_\_**

The name of the container host.

**\_\_tag\_\_:\_\_path\_\_**

The log file path in the container.

**\_\_tag\_\_:\_container\_ip\_**

The IP address of the container.

**\_\_tag\_\_:\_image\_name\_**

The name of the image used by the container.

**Note**

If there are multiple images with the same hash but different names or tags, the collection configuration will select one name based on the hash for collection. It cannot ensure that the selected name matches the one defined in the YAML file.

**\_\_tag\_\_:\_pod\_name\_**

The name of the pod.

**\_\_tag\_\_:\_namespace\_**

The namespace to which the pod belongs.

**\_\_tag\_\_:\_pod\_uid\_**

The unique identifier (UID) of the pod.

## **References**

-   With the visualization feature of Simple Log Service, you can aggregate and get an overview of your log data. For more information, see [Create a dashboard](/help/en/sls/dashboard-overview).
    
-   Use the alert feature in Simple Log Service to receive automatic notifications about abnormalities in your logs. For more information, see [Configure an alert rule in Simple Log Service](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service).
    
-   Simple Log Service only collects incremental logs. To gather historical log files, see [Import historical logs from log files](/help/en/sls/import-historical-logs).
    
-   For troubleshooting container log collection, consider the following:
    
    -   Verify if there are error messages in the console. For more information, see [Logtail diagnostics](/help/en/sls/logtail-diagnostics).
        
    -   If the console shows no error messages, investigate the heartbeat of a machine group, Logtail configuration, and related issues. For more information, see [What do I do if errors occur when I collect logs from containers?](/help/en/sls/what-do-i-do-if-an-error-occurs-when-i-use-logtail-to-collect-logs-from-containers)
