Container Compute Service (ACS) is integrated with Simple Log Service (SLS). When you create an ACS cluster, you can enable SLS. SLS can collect log data from containers in the ACS cluster. The log data includes stdout and text files. This topic describes how to collect application logs from an ACS cluster by using a type of custom resource named AliyunLogConfig, which can be defined by using a CustomResourceDefinition (CRD).

## Step 1: Install the alibaba-log-controller component

When you create an ACS cluster, you can select **Enable Log Service** to install the alibaba-log-controller component. If this check box is not selected during creation, you can also perform the following steps to install the alibaba-log-controller component after the cluster is created.

1.  Log on to the [ACS console](https://acs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its ID. In the left-side navigation pane of the cluster details page, choose **Operations** > **Add-ons**.
    
3.  Find **alibaba-log-controller** in the **Logs and Monitoring** section. Click **Install**. In the **Install alibaba-log-controller** dialog box, click **OK**.
    

**Important**

If an earlier version of the alibaba-log-controller component is installed, you can update it. After the alibaba-log-controller component is updated, the component parameters are reset. The settings and environment variables of alibaba-log-controller will be overwritten. If you have customized the settings and environment variables, you need to reconfigure them.

## Step 2: Create an AliyunLogConfig CRD to configure log collection

You can use an AliyunLogConfig to collect stdout and text logs from an application. In the left-side navigation pane of the cluster details page, choose **Custom Resources** > **CRDs** \> **Create from YAML** to create an AliyunLogConfig. Configure the parameters of the AliyunLogConfig. The following table describes the parameters.

**Parameter**

**Description**

**Example**

`.metadata.name`

The name of the AliyunLogConfig. The name must be unique in the ACS cluster.

test-stdout

`.spec.project`

The name of the SLS project that you want to use. This parameter is optional. You can specify a custom name. We recommend that you specify the project name in the `k8s-log-<ACS cluster ID>` format.

k8s-log-c326bc86\*\*\*\*

`.spec.logstore`

The name of the Logstore that you want to use. This parameter is required. If the Logstore that you specify does not exist, SLS automatically creates a Logstore with the specified name.

test-stdout

`.spec.logtailConfig.inputType`

The type of the source data that you want to collect. A value of `file` indicates text logs. A value of `plugin` indicates stdout.

plugin

`.spec.logtailConfig.configName`

The name of the Logtail configuration. The name must be the same as the value of `metadata.name`.

test-stdout

`.spec.logtailConfig.inputDetail`

The details of the Logtail configuration. The Logtail configuration specifies how to collect stdout and text logs.

```
plugin:
  inputs:
    - type: service_docker_stdout
      detail:
        Stdout: true
        Stderr: true
```

The sample settings indicate that `stdout` and `stderr` are collected.

`.spec.logtailConfig.inputDetail.advanced`

The extended settings for Logtail. The following `K8s`\-related extended settings are included:

-   `K8sNamespaceRegex`: filters pods by namespace. You can specify a regular expression.
    
-   `K8sContainerRegex`: filters containers by container name. You can specify a regular expression.
    
-   `K8sPodRegex`: filters pods by pod name. You can specify a regular expression.
    
-   `IncludeK8sLabel`: filters pods by label.
    

```
k8s:
  K8sNamespaceRegex: ^(default)$
  K8sContainerRegex: ^(busybox)$
  K8sPodRegex: ^backend.+$
  IncludeK8sLabel:
    app: backend
    application: prod
```

The sample settings indicate that container logs that match the following conditions are collected:

-   The pod belongs to the `default` namespace.
    
-   The pod name is prefixed with `backend`.
    
-   The container name is prefixed with `busybox`.
    
-   The pod has the `app: backend` and `application: prod` labels.
    

For more information about Logtail parameters, see [Logtail configurations](/help/en/sls/developer-reference/logtail-configurations).

### Scenario 1: Collect stdout from specific applications

To collect stdout and stderr from specific pods or containers, add filtering conditions to the `detail` field of the `logtailConfig` section in the AliyunLogConfig configurations. After you deploy the AliyunLogConfig in your cluster, you can collect stdout and stderr from the pods or containers that match the filtering conditions.

```
apiVersion: log.alibabacloud.com/v1alpha1      
kind: AliyunLogConfig                         
metadata:
  name: test-stdout               
spec:
  project: k8s-log-c326bc86****    # Replace the value with the actual project name.
  logstore: test-stdout                           
  shardCount: 2                                           
  lifeCycle: 90                    
  logtailConfig:                   
    inputType: plugin                                             
    configName: test-stdout        
    inputDetail:                   
      plugin:
        inputs:
          - type: service_docker_stdout
            detail:
              Stdout: true
              Stderr: true
              K8sNamespaceRegex: ^(default)$    
              K8sContainerRegex: ^(busybox)$    
              K8sPodRegex: ^backend.+$          
              IncludeK8sLabel:                  
                app: backend
                application: prod
```

### **Scenario 2: Collect text logs from specific applications**

To collect text logs from specific pods or containers, add filtering conditions to the `advanced` field of the `logtailConfig` section in the AliyunLogConfig configurations. After you deploy the AliyunLogConfig in your cluster, you can collect text logs from the pods or containers that match the filtering conditions.

```
apiVersion: log.alibabacloud.com/v1alpha1
kind: AliyunLogConfig
metadata:
  name: test-file                  
spec:
  project: k8s-log-c326bc86****    # Replace the value with the actual project name.
  logstore: test-file                 
  logtailConfig:                   
    inputType: file                
    configName: test-file           
    inputDetail:                  
      logType: common_reg_log      
      logPath: /log/               
      filePattern: "*.log"         
      dockerFile: true             
      advanced:
        k8s:
          K8sNamespaceRegex: ^(default)$    
          K8sContainerRegex: ^(busybox)$    
          K8sPodRegex: ^backend.+$          
          IncludeK8sLabel:                  
            app: backend
            application: prod
```

**Note**

The files for the AliyunLogConfigs in the preceding scenarios are named **test-stdout** and **test-file**. After you create the files, you can perform [Step 4: View logs in the SLS console](#c39c9b3764uqw) to check whether the specified Logstore is created. If the specified Logstore is not created, review the [Logtail configurations](/help/en/sls/developer-reference/logtail-configurations) and modify the relevant parameters.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4229194371/p854508.png)

## **Step 3: Create an application**

After you create the AliyunLogConfig CRD, Simple Log Service automatically collects logs of pods that are created later. You can create the following application to test log collection.

1.  In this example, a Deployment is created. The following YAML file provides an example. The system runs relevant commands after the container is started. stdout and text logs of the container are continuously printed.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: backend-busybox
      labels:
        app: backend
        application: prod
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: backend
          application: prod
      template:
        metadata:
          name: backend-busybox
          labels:
            app: backend
            application: prod
        spec:
          containers:
          - args:
            - -c
            - mkdir -p /log; while true; do echo hello world; date; echo hello sls >> /log/busybox.log; sleep 1; done
            command:
            - /bin/sh
            image: registry-cn-hangzhou.ack.aliyuncs.com/ack-demo/busybox:1.28
            imagePullPolicy: Always
            name: busybox
    ```
    

## Step 4: View logs by using the SLS console

The logs of the test application are stored in SLS. You can log on to the SLS console to view logs collected from the containers of the application.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the **Projects** section, find the project corresponding to the ACS cluster (default: k8s-log-{ACS cluster ID}), and click the project name to go to the **Logstore** tab.
    
3.  In the Logstores list, click the name of the Logstore that you specified in the log collection configuration. On the page that appears, view the logs.
    
    In this example, you can view the stdout (test-stdout) and text logs (test-file) inside the container of the application on the log query page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4229194371/p854550.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4229194371/p854549.png)
    

## References

For more information about how to troubleshoot log collection errors, see [What do I do if errors occur when I use Logtail to collect logs?](/help/en/sls/what-do-i-do-if-errors-occur-when-i-use-logtail-to-collect-logs#LogService-user-guide-0083)
