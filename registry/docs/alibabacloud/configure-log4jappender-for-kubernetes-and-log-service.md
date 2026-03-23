You can collect logs from Java applications running in your ACK cluster and write them to Simple Log Service (SLS) without modifying your application code. To do this, configure the LogHub Log4j Appender in your workload YAML file so that logs are sent directly to an SLS project.

[Log4j](https://logging.apache.org/log4j/2.x/index.html) is an open-source logging framework maintained by Apache and designed for Java applications. Its core components include Appenders (output targets), Layouts (output formats), and Filters. By configuring Appenders, you can route logs to different destinations, such as the console, files, or external services.

## Prerequisites

-   An [ACK managed cluster is created](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).
    
-   An [AccessKey pair is created](/help/en/ram/user-guide/create-an-accesskey-pair) for integrating the Log4j Appender in the application.
    

> To protect your account, we recommend that you use a Resource Access Management (RAM) user instead of your Alibaba Cloud account and create the AccessKey pair for the RAM user.

## Step 1: Configure the Log4j Appender in SLS

In this step, you create an SLS project and a Logstore, and then configure the Logstore data source as a Log4j Appender. This allows your Java application to send logs directly to SLS.

We recommend that you create the SLS project in the same region as your ACK cluster. This routes log data over the internal network, which avoids external bandwidth costs and reduces latency.

> For more information about SLS project billing, see [Billing overview](/help/en/sls/billing-overview).

1.  Create an SLS project.
    
    The following describes the key parameters. You can keep the default values for other parameters. For more information, see [Manage a project](/help/en/sls/manage-a-project/#section-ahq-ggx-ndb).
    
    -   **Region**: Select the same region as your ACK cluster. In this example, China (Hangzhou) is selected.
        
    -   **Project Name**: Enter a project name. In this example, k8s-log4j is used.
        
2.  Create a Logstore in the project.
    
    In this example, the **Logstore Name** is k8s-logstore and other parameters use default values. For more information, see [Manage a logstore](/help/en/sls/manage-a-logstore#concept-xkb-zh5-vdb).
    
3.  After k8s-logstore is created, follow the on-screen prompts to access data.
    
    ![创建数据接入向导](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0207179071/p10633.png)
    
4.  Find the Log4j access card and follow the prompts to complete the data access configuration.
    
    In this example, the default configuration is used. You can adjust the settings based on your log data usage scenarios.![自定义数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9107179071/p10634.png)
    

## Step 2: Integrate Log4j in your application

This step walks you through integrating the Log4j Appender into a Java application by deploying a Spring Boot sample application. After integration, the container passes SLS configuration through the `JAVA_OPTS` environment variable at startup. Log4j reads these parameters and sends logs to SLS in real time.

1.  Obtain the demo-deployment.yaml file and configure the `JAVA_OPTS` environment variable.
    
    For the file source, see [demo-deployment](https://github.com/brucewu-fly/log4j-appender-demo-spring-boot/blob/master/k8s/demo-deployment.yaml).
    
    **View the sample file**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: log4j-appender-demo-spring-boot
      labels:
        app: log4j-appender
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: log4j-appender
      template:
        metadata:
          labels:
            app: log4j-appender
        spec:
          containers:
          - name: log4j-appender-demo-spring-boot
            image: registry.cn-hangzhou.aliyuncs.com/jaegertracing/log4j-appender-demo-spring-boot:0.0.2
            env:
              - name: JAVA_OPTS            #  Set the JAVA_OPTS environment variable
                value: "-Dproject={your_project} -Dlogstore={your_logstore} -Dendpoint={your_endpoint} -Daccess_key_id={your_access_key_id} -Daccess_key={your_access_key_secret}"
            ports:
            - containerPort: 8080
    ```
    
    The following table describes the `JAVA_OPTS` parameters:
    
    **Important**
    
    Replace the placeholder values in the YAML file with your actual SLS project name, Logstore name, endpoint, AccessKey ID, and AccessKey secret before deploying.
    
    **Parameter**
    
    **Description**
    
    **Example value**
    
    `-Dproject`
    
    The SLS project name.
    
    k8s-log4j
    
    `-Dlogstore`
    
    The SLS Logstore name.
    
    k8s-logstore
    
    `-Dendpoint`
    
    The SLS service endpoint. Set this value based on the region of your project. For more information, see [Endpoints](/help/en/sls/developer-reference/api-sls-2020-12-30-endpoint).
    
    cn-hangzhou.log.aliyuncs.com
    
    `-Daccess_key_id`
    
    Your AccessKey ID.
    
    N/A
    
    `-Daccess_key`
    
    Your AccessKey secret.
    
    N/A
    
2.  Create the Deployment.
    
    ```
    kubectl create -f demo-deployment.yaml
    ```
    
3.  Obtain the demo-Service.yaml file. You can keep the default configuration.
    
    For the file source, see [demo-Service](https://github.com/brucewu-fly/log4j-appender-demo-spring-boot/blob/master/k8s/demo-service.yaml).
    
    **View the sample file**
    
    ```
    apiVersion: v1
    kind: Service
    metadata:
      labels:
        app: log4j-appender
      name: log4j-appender-demo-spring-boot-svc
      namespace: default
    spec:
      ports:
      - port: 8080
        protocol: TCP
        targetPort: 8080
      selector:
        app: log4j-appender
      type: LoadBalancer
    ```
    
4.  Deploy the demo-Service.yaml file to create a Service.
    
    ```
    kubectl create -f demo-service.yaml
    ```
    

## **Step 3: Test log collection**

After the Deployment and Service are deployed, you can verify that logs are written to SLS by accessing the service through its external IP address.

1.  Get the `EXTERNAL-IP` of the Service.
    
    ```
    kubectl get svc
    ```
    
    Expected output:
    
    ```
    NAME                                  TYPE           CLUSTER-IP     EXTERNAL-IP      PORT(S)          AGE
    log4j-appender-demo-spring-boot-svc   LoadBalancer   172.21.XX.XX   120.55.XXX.XXX   8080:30398/TCP   1h
    ```
    
2.  Run the `login` command to generate a test log entry.
    
    Replace `K8S_SERVICE_IP` with the `EXTERNAL-IP` value from the previous step.
    
    ```
    curl http://${K8S_SERVICE_IP}:8080/login?name=bruce
    ```
    
    > You can view the complete API collection in [GitHub log4j-appender-demo](https://github.com/brucewu-fly/log4j-appender-demo-spring-boot).
    

## **Step 4: View logs in the SLS console**

You can log on to the SLS console to query and analyze the collected logs.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the **Projects** section, click the target project to open the project details page.
    
3.  Click the ![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5055359951/p55777.png) icon to the right of the Logstore and select **Search & Analysis** to view the logs collected from your cluster.
    
    ![查询分析](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8083045471/p55775.png)
    

## **References**

-   [Collect Log4j logs](/help/en/sls/collect-log4j-logs)
    
-   [Guide to log query and analysis](/help/en/sls/quick-guide-to-query-and-analysis)
