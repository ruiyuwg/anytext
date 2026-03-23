During traffic spikes, precise scaling improves response speed and increases cluster resource efficiency. This topic shows how to use Kubernetes External Metrics to integrate key business metrics—such as HTTP request rate and Ingress queries per second (QPS)—and build more automated scaling policies.

This topic walks you through the following steps to configure horizontal pod autoscaling (HPA) using Ingress QPS metrics from Simple Log Service (SLS). The example deploys a Deployment named nginx, a Service, and an Ingress.

## Step 1: Deploy the ack-alibaba-cloud-metrics-adapter component

The ack-alibaba-cloud-metrics-adapter component enables Kubernetes to retrieve monitoring data from Alibaba Cloud services—including ECS, SLB, and RDS—through the External Metrics API. This enhances cluster monitoring and autoscaling.

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the left navigation pane, choose **Applications** > **Helm**.
    
3.  On the **Helm** page, click **Create**. Complete the **Basic Information** configuration. Select **ack-alibaba-cloud-metrics-adapter** and click **Next**.
    
4.  On the **Parameter Settings** page, select a **Chart Version** and click **OK**.
    

**Note**

The ack-alibaba-cloud-metrics-adapter component does not support smooth upgrades. To upgrade, uninstall the current version first and then install the latest version.

## Step 2: Create an application and a service

1.  Create a file named nginx-test.yaml.
    
    **Expand to view the YAML example**
    
    ```
    apiVersion: apps/v1 
    kind: Deployment
    metadata:
      name: nginx-deployment-basic
      labels:
        app: nginx
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: nginx:1.7.9 
            ports:
            - containerPort: 80
    ---
    apiVersion: v1
    kind: Service
    metadata:
      name: nginx
      namespace: default
    spec:
      ports:
        - port: 80
          protocol: TCP
          targetPort: 80
      selector:
        app: nginx
      type: ClusterIP
    ```
    
2.  Run the following command to create the Deployment and its Service.
    
    ```
    kubectl apply -f nginx-test.yaml
    ```
    

## **Step 3: Create a route**

1.  In the left navigation pane of the cluster management page, choose **Network** > **Ingress**. On the **Ingress** page, click **Create Ingress** in the upper-left corner.
    
2.  Fill in the required fields in the **Create** panel and click **OK**. After creation, the system automatically redirects you to the **Ingress** page.
    
3.  In the **Name** column, click the name of the Ingress you created to view its routing rules. For more information, see [Manage Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ingress-management-2/).
    

## Step 4: Configure HPA

You can configure two SLS Project metrics for scaling in HPA: sls\_ingress\_qps and sls\_ingress\_latency\_p9999.

-   sls\_ingress\_qps: Use AverageValue. The QPS value is divided by the number of pods before comparison.
    
-   sls\_ingress\_latency\_p9999: Use Value. The raw value is used without division.
    

1.  Create a file named ingress-hpa.yaml and paste the following content into it.
    
    **Expand to view the YAML example**
    
    ```
    apiVersion: autoscaling/v2
    kind: HorizontalPodAutoscaler
    metadata:
      name: ingress-hpa
    spec:
      scaleTargetRef:
        apiVersion: apps/v1
        kind: Deployment
        name: nginx-deployment-basic
      minReplicas: 2
      maxReplicas: 10
      metrics:
        - type: External
          external:
            metric:
              name: sls_ingress_qps
              selector:
                matchLabels:
                  sls.project: "***" # Replace *** with your actual SLS project name.
                  sls.logstore: "nginx-ingress"
                  sls.ingress.route: "default-nginx-80"
            target:
              type: AverageValue
              averageValue: 10
        - type: External
          external:
            metric:
              name: sls_ingress_latency_p9999
              selector:
                matchLabels:
                  # Default Ingress log project is k8s-log-clusterId
                  sls.project: "***" 
                  # Default Ingress logstore is nginx-ingress
                  sls.logstore: "nginx-ingress"
                  # Format: namespace-svc-port
                  sls.ingress.route: "default-nginx-80"
                  # SLS VPC endpoint. Default is true.
                  # sls.internal.endpoint:true
            target:
              type: Value
              # If sls_ingress_latency_p9999 > 10 ms, HPA increases the number of pods in nginx-deployment-basic.
              value: 10
    ```
    
    The following table describes the parameters used in the HPA configuration.
    
    **Parameter name**
    
    **Required**
    
    **Description**
    
    sls.ingress.route
    
    Yes
    
    Format: `<namespace>-<svc>-<port>`. `<namespace>` is the namespace where the Ingress resides. `<svc>` is the name of the Service associated with the Ingress. `<port>` is the port name of that Service. Example: **default-nginx-80**.
    
    sls.logstore
    
    Yes
    
    The name of the Logstore in Simple Log Service. By default, `sls.logstore` is `nginx-ingress`.
    
    sls.project
    
    Yes
    
    The name of the Project in Simple Log Service. By default, `sls.project` is `k8s-log-<cluster-id>`.
    
    sls.internal.endpoint
    
    No
    
    Set whether to access Simple Log Service over the internal network or the public network. Default is true.
    
    -   true: Access SLS over the internal network.
        
    -   false: Access SLS over the public network.
        
    
2.  Run the following command to create the HPA.
    
    ```
    kubectl apply -f ingress-hpa.yaml
    ```
    

## Step 5: Verify the result

1.  After configuring HPA, run the following command to perform stress testing.
    
    ```
    ab -t 300 -c 10 <domain-name-configured-for-the-ingress> # Use Apache Benchmark to send 10 concurrent requests to the Ingress-exposed service for 300 seconds.
    ```
    
2.  Verify the scaling status.
    
    Run the following command to check the status.
    
    ```
    kubectl get hpa ingress-hpa
    ```
    
    Expected output:
    
    ```
    NAME            REFERENCE                              TARGETS           MINPODS    MAXPODS    REPLICAS   AGE
    ingress-hpa     Deployment/nginx-deployment-basic      21/10 (avg)       2          10         10         7m49s
    ```
    
    If the REPLICAS value equals the MAXPODS value, scaling succeeded.
    

## FAQ

### How do I obtain the `sls_ingress_qps` metric using the command line?

You can run the following command to query data. The sls\_ingress\_qps request metric is used as an example.

```
kubectl get --raw  /apis/external.metrics.k8s.io/v1beta1/namespaces/*/sls_ingress_qps?labelSelector=sls.project={{SLS_Project}},sls.logstore=nginx-ingress
```

In the preceding command, `{{SLS_Project}}` is the name of the Simple Log Service project that corresponds to the ACK cluster. If you do not specify a custom configuration, the default project name is `k8s-log-{{ClusterId}}`. **{{ClusterId}}** is the ID of the cluster.

If the following result is returned:

```
Error from server: {
    "httpCode": 400,
    "errorCode": "ParameterInvalid",
    "errorMessage": "key (slb_pool_name) is not config as key value config,if symbol : is  in your log,please wrap : with quotation mark \"",
    "requestID": "xxxxxxx"
}
```

This indicates that no data is available for this metric. This may be because ALB Ingress is not configured, but the sls\_alb\_ingress\_qps metric was used for the data query.

If a result similar to the following is returned:

```
{
  "kind": "ExternalMetricValueList",
  "apiVersion": "external.metrics.k8s.io/v1beta1",
  "metadata": {},
  "items": [
    {
      "metricName": "sls_ingress_qps",
      "timestamp": "2025-02-26T16:45:00Z", 
      "value": "50",   # QPS value
      "metricLabels": {
        "sls.project": "your-sls-project-name",
        "sls.logstore": "nginx-ingress"
      }
    }
  ]
}
```

This indicates that the queries per second (QPS) of the Kubernetes external metric is found. `value` is the QPS value.

### What if the `target` column is `unknown` after running `kubectl get hpa`?

You can perform the following steps to resolve this issue.

1.  Run the `kubectl describe hpa <hpa_name>` command to identify why HPA is not working.
    
    -   If the value of `AbleToScale` in the `Conditions` field is `False`, confirm that the deployment is normal.
        
    -   If the value of `ScalingActive` in the `Conditions` field is `False`, proceed to the next step.
        
2.  Run the `kubectl get --raw "/apis/external.metrics.k8s.io/v1beta1/"` command. If `Error from server (NotFound): the server could not find the requested resource` is returned, check the startup status of alibaba-cloud-metrics-adapter.
    
    If alibaba-cloud-metrics-adapter is running as normal, confirm whether the HPA metrics are related to Ingress. If they are, you must deploy the Simple Log Service component in advance. For more information, see [Collect and analyze Nginx Ingress access logs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/analyze-and-monitor-the-access-log-of-nginx-ingress#task-1796525).
    
3.  Confirm that the HPA metrics are entered correctly. The value format for sls.ingress.route is `<namespace>-<svc>-<port>`.
    
    -   `namespace`: The namespace where the Ingress is located.
        
    -   `svc`: The name of the Service that corresponds to the Ingress.
        
    -   `port`: The name of the port for the Service that corresponds to the Ingress.
        

### How do I find the metric names supported by HPA?

For more information, see [Alibaba Cloud HPA Metrics](https://github.com/AliyunContainerService/alibaba-cloud-metrics-adapter). The following table lists common metrics.

**Metric name**

**Description**

**Additional parameters**

sls\_ingress\_qps

Queries per second (QPS) for the specified IngressRoute

sls.ingress.route

sls\_alb\_ingress\_qps

Queries per second (QPS) for ALB data IngressRoute

sls.ingress.route

sls\_ingress\_latency\_avg

Latency for all requests

sls.ingress.route

sls\_ingress\_latency\_p50

Latency for 50% of requests

sls.ingress.route

sls\_ingress\_latency\_p95

Latency for 95% of requests

sls.ingress.route

sls\_ingress\_latency\_p99

Latency for 99% of requests

sls.ingress.route

sls\_ingress\_latency\_p9999

Latency for 99.99% of requests

sls.ingress.route

sls\_ingress\_inflow

Inbound bandwidth for Ingress

sls.ingress.route

### **How to Adapt After Customizing the Nginx Ingress Log Format?**

For more information about how to use SLS Ingress metrics for horizontal pod autoscaling, see [Horizontal pod autoscaling based on Nginx Ingress component metrics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/implement-horizontal-auto-scaling-based-on-alibaba-cloud-metrics). You must enable and correctly configure Nginx Ingress logs to be ingested into Simple Log Service in your cluster.

-   When you create a cluster, Simple Log Service is enabled by default. If you retain the default settings, you can view Nginx Ingress access log analysis reports and monitor the real-time status of Nginx Ingress in the [Simple Log Service console](https://sls.console.alibabacloud.com) after the cluster is created.
    
-   If you manually disabled Simple Log Service when you created the cluster and you want to use SLS Ingress metrics for horizontal pod autoscaling after the cluster is created, you must re-enable or configure Simple Log Service. For more information, see [Collect and analyze Nginx Ingress access logs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/analyze-and-monitor-the-access-log-of-nginx-ingress#task-1796525).
    
-   To customize the Nginx Ingress log format, the AliyunLogConfig custom resource definition (CRD) that is deployed when Simple Log Service is first enabled in the cluster applies only to the log format in the default ACK Ingress Controller. If you modified the access log format of the Ingress Controller, you must modify the `processor_regex` section in the regular expression of the CRD configuration. For more information, see [Collect container logs using a DaemonSet and a CRD](/help/en/sls/use-crds-to-collect-container-logs-in-daemonset-mode#concept-tfg-pl1-f2b).
    

### Failed to pull alibaba-cloud-metrics-adapter image

### **Symptom**

When you upgrade the ack-alibaba-cloud-metrics-adapter component to version 1.3.7, an error occurs while you pull the image. The error message is as follows:

Failed to pull image "registry-<region-id>-vpc.ack.aliyuncs.com/acs/alibaba-cloud-metrics-adapter-amd64:v0.2.9-ba634de-aliyun".

### **Cause**

The ack-alibaba-cloud-metrics-adapter component does not support direct updates.

### **Solution**

You can perform the following steps to upgrade the component.

1.  Back up the current component configuration.
    
2.  Uninstall the old version of the component.
    
3.  Install the latest version of the component using the backup configuration.
    

**Important**

During the uninstallation and reinstallation of the component, related HPAs pause scaling because monitoring data retrieval stops.

## References

-   [Horizontal Pod Autoscaling Based on Alibaba Cloud Prometheus Metrics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/horizontal-pod-scaling-based-on-prometheus-service-metrics-1#task-1955727)
    
-   [Multi-application Horizontal Pod Autoscaling Based on Nginx Ingress Traffic Metrics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-horizontal-pod-autoscaling-for-multiple-applications-based-on-the-metrics-of-the-nginx-ingress-controller#task-2214729)
