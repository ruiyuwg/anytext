Horizontal Pod Autoscaling (HPA) automatically adjusts the number of pod replicas based on observed CPU usage, memory usage, or custom metrics. When traffic spikes, HPA scales out replicas to handle the load. When demand drops, it scales them back in to free up resources. This keeps your application responsive without manual intervention.

HPA works well for workloads with unpredictable or fluctuating traffic patterns, such as e-commerce platforms, online education services, and financial applications.

## How the scaling algorithm works

HPA uses the following formula to determine the desired replica count:

```
desiredReplicas = ceil[ currentReplicas x (currentMetricValue / targetMetricValue) ]
```

For example, if two pods are running at an average CPU utilization of 90% and the target is 60%:

```
desiredReplicas = ceil[ 2 x (90 / 60) ] = ceil[ 3.0 ] = 3
```

HPA scales the Deployment from 2 to 3 replicas.

If the ratio of current to target utilization is within a 10% tolerance (0.9 to 1.1 by default), HPA does not trigger a scaling event.

### Key timing parameters

**Parameter**

**Default value**

**Description**

Metrics API check interval

15 seconds

How often HPA queries the Metrics API for changes

Kubelet metrics collection

60 seconds

How often the Kubelet reports resource usage to the Metrics API

Effective HPA update cycle

60 seconds

The practical interval at which HPA reacts to metric changes

Scale-out delay

None

No built-in delay for scale-out events (Kubernetes 1.12+)

Scale-in delay

5 minutes

Default stabilization window before scaling in

For more details on the core algorithm and configurable behaviors, see the Kubernetes [Horizontal Pod Autoscaling](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) documentation.

Container Service for Kubernetes (ACK) provides several workload and node scaling solutions. For a comparison of available options, see [Auto Scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-overview/).

## Prerequisites

Before you begin, make sure that you have:

-   An ACK managed cluster or ACK dedicated cluster. See [Create a cluster](/help/en/ack/create-a-cluster-1)
    
-   (For kubectl workflows) A kubectl connection to your cluster. See [Connect to an ACK cluster using kubectl](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-ubf-lhg-vdb)
    
-   Resource requests defined on your containers
    

**Important**

HPA requires resource requests on your containers to calculate utilization. Without resource requests, HPA cannot determine current usage relative to the target and the metric shows as `unknown`. Use the [resource profile](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling) feature to get recommendations for requests and limits based on historical usage.

## Create HPA in the ACK console

The ACK console provides three entry points for creating an HPA policy. The core configuration parameters are the same regardless of the entry point. Create only one HPA policy per workload to avoid conflicting scaling decisions.

### HPA configuration parameters

The following table describes the parameters available across all console entry points. The parameter labels vary slightly depending on which page you use.

**Parameter**

**Labels in console**

**Description**

Policy name

**Name** / **Policy Name**

A name for the HPA policy.

Metric

**Metric**

The resource metric to monitor. Options are **CPU Usage** and **Memory Usage** (additional metrics available on the Workload Scaling page). The metric type must match the resource type for which you set a request.

Target utilization

**Condition** / **Threshold**

The target average utilization percentage. HPA triggers a scale-out when usage exceeds this value.

Minimum replicas

**Min. Replicas** / **Min. Containers**

The minimum number of pod replicas. Must be an integer greater than or equal to 1.

Maximum replicas

**Max. Replicas** / **Max. Containers**

The maximum number of pod replicas. Must be greater than the minimum.

If you specify both CPU and memory metrics, HPA triggers a scaling event when **either** metric exceeds its threshold.

**Metric availability by entry point:**

**Entry point**

**Supported metrics**

Create with new application

CPU, memory

Add to existing application (Pod Scaling tab)

CPU, memory

Workload Scaling page

CPU, memory (default). GPU, Nginx Ingress QPS, and custom metrics require `ack-alibaba-cloud-metrics-adapter`.

### Option 1: Create HPA with a new application

This example uses a stateless Deployment. The steps are similar for other workload types.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the target cluster. In the left navigation pane, choose **Workloads** > **Deployments**.
    
3.  On the **Deployments** page, click **Create From Image**.
    
4.  On the **Create** page, configure the application: For complete configuration details, see [Create a stateless workload (Deployment)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment).
    
    -   **Basic Information**: Set the application name, replica count, and other details.
        
    -   **Container Configuration**: Set the container image and resource requests (CPU and memory).
        
    -   **Advanced Configuration** > **Scaling**: Select **HPA** and click **Enable**, then configure the metric, target utilization, minimum replicas, and maximum replicas.
        

After the Deployment is created, click the Deployment name on the **Deployments** page and open the **Pod Scaling** tab. This tab shows HPA metrics (CPU and memory usage, replica range) and provides options to update or disable the policy.

### Option 2: Add HPA to an existing application

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the target cluster. In the left navigation pane, choose **Workloads** > **Deployments**.
    
3.  On the **Deployments** page, click the target application name. Open the **Pod Scaling** tab and click **Create** in the HPA section.
    
4.  In the **Create** dialog box, configure the HPA policy:
    
    -   **Name**: Enter a policy name.
        
    -   **Metric**: Click **Add** to select a metric (CPU Usage or Memory Usage) and set the **Threshold** (target utilization percentage).
        
    -   **Max. Containers**: Set the maximum replica count.
        
    -   **Min. Containers**: Set the minimum replica count.
        

After the policy is created, click the Deployment name and open the **Pod Scaling** tab to view HPA metrics and manage the policy.

### Option 3: Use the Workload Scaling page

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the target cluster. In the left navigation pane, click **Workload Scaling**.
    
3.  In the upper-right corner, click **Create Auto Scaling**, then open the **HPA and CronHPA** tab.
    
4.  Select the target workload. In the **Configure Scaling Policy** section, select the **HPA** checkbox and configure the policy:
    
    -   **Scaling Policy Name**: Enter a policy name.
        
    -   **Min. Containers**: Set the minimum replica count (integer >= 1).
        
    -   **Max. Containers**: Set the maximum replica count (must be greater than the minimum).
        
    -   **Scaling Metric**: Select one or more metric categories and configure the threshold for each:
        
        -   **Resource**: CPU usage and memory usage. Available by default.
            
        -   **Custom**: GPU memory usage, GPU utilization, and custom metrics. Requires `ack-alibaba-cloud-metrics-adapter`.
            
        -   **External**: Nginx Ingress QPS and custom metrics. Requires `ack-alibaba-cloud-metrics-adapter`.
            
    
    **Note**
    
    If you select **Custom** or **External** metrics and `ack-alibaba-cloud-metrics-adapter` is not installed, the console displays an **Install** button. Click **Install** to deploy the adapter before configuring these metrics.
    

After the policy is created, view and manage it on the **Workload Scaling** page. The **Actions** column provides options to view metrics, update the configuration, or disable the policy.

## Create HPA with kubectl

Create an HPA resource using a YAML manifest and attach it to a Deployment. Create only one HPA per workload.

### Step 1: Deploy a sample application

Create a file named `nginx.yml`:

**Sample YAML**

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
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
        image: registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/nginx:1.27.0 # Replace the region ID with the region of your cluster.
        ports:
        - containerPort: 80
        resources:
          requests:         # Required. Without requests, HPA cannot calculate utilization.
            cpu: 500m
```

Apply the Deployment:

```
kubectl apply -f nginx.yml
```

### Step 2: Create the HPA resource

Create a file named `hpa.yml`. The `scaleTargetRef` field points to the Deployment that HPA manages. The example below scales the Deployment between 1 and 10 replicas, targeting 50% average CPU utilization.

## **Kubernetes 1.24 and later**

```
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: nginx-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: nginx
  minReplicas: 1
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50
```

## **Kubernetes 1.24 and earlier**

```
apiVersion: autoscaling/v2beta2
kind: HorizontalPodAutoscaler
metadata:
  name: nginx-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: nginx
  minReplicas: 1
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50
```

To scale on both CPU and memory, add both resource types in the `metrics` field of a single HPA. Do not create separate HPAs for each metric.

```
metrics:
- type: Resource
  resource:
    name: cpu
    target:
      type: Utilization
      averageUtilization: 50
- type: Resource
  resource:
    name: memory
    target:
      type: Utilization
      averageUtilization: 50
```

Apply the HPA:

```
kubectl apply -f hpa.yml
```

### Step 3: Verify the HPA

After applying the HPA, check its status:

```
kubectl get hpa nginx-hpa
```

During initial deployment, you may see warnings indicating that HPA is still collecting metrics:

```
Warning  FailedGetResourceMetric       2m (x6 over 4m)  horizontal-pod-autoscaler  missing request for cpu
```

Wait for HPA to start collecting metrics, then verify that it is operating normally:

```
kubectl describe hpa nginx-hpa
```

Expected output when HPA is running and the load is below the threshold:

```
Type    Reason             Age   From                       Message
----    ------             ----  ----                       -------
Normal  SuccessfulRescale  5m6s  horizontal-pod-autoscaler  New size: 1; reason: All metrics below target
```

## Verify HPA with a load test

To confirm that HPA scales correctly, generate artificial load and observe the scaling behavior.

1.  **Generate load.** Open a separate terminal and run a load generator pod:
    
    **Note**
    
    Replace the region ID (`cn-hangzhou`) in the image path with the region of your cluster.
    
    ```
       kubectl run -i --tty load-generator --rm \
         --image=registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/nginx:1.27.0 \
         --restart=Never -- /bin/sh -c "while sleep 0.01; do wget -q -O- http://nginx; done"
    ```
    
2.  **Monitor scaling.** In another terminal, watch the HPA status: As CPU utilization exceeds the 50% target, HPA increases the replica count. It may take one to two minutes for the changes to appear.
    
    ```
       kubectl get hpa nginx-hpa --watch
    ```
    
3.  **Stop the load.** Press `Ctrl+C` in the load generator terminal, or delete the pod:
    
    ```
       kubectl delete pod load-generator
    ```
    
4.  **Observe scale-in.** After the load stops, wait approximately five minutes (the default stabilization window). HPA gradually reduces the replica count as utilization drops below the target.
    

**Note**

In a production environment, HPA scales based on actual pod load. Use a staging environment for load testing to avoid impacting live traffic.

## Customize scaling behavior

If the default scaling speed does not match your requirements, use the `behavior` field to fine-tune scale-in (`scaleDown`) and scale-out (`scaleUp`) policies. For details, see [Configurable scaling behavior](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/#configurable-scaling-behavior).

Common scenarios:

**Scenario**

**Configuration approach**

Fast scale-out during traffic spikes

Increase the `scaleUp` pods-per-period value or reduce the stabilization window

Fast scale-out with slow scale-in

Configure a short `scaleUp` stabilization window and a long `scaleDown` stabilization window

Disable scale-in for stateful workloads

Set `scaleDown` policies to prevent any replica reduction

Limit scaling speed in cost-sensitive environments

Use `stabilizationWindowSeconds` to smooth out transient fluctuations

For configuration examples specific to ACK, see [Adjust the scaling sensitivity of HPA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/adjust-the-sensitivity-of-hpa-expansion-and-contraction).

## Best practices

-   **Set target utilization to 60-70%.** Leave headroom for traffic bursts. A target of 50% is safe but may over-provision; 80% or higher risks latency spikes before HPA can react.
    
-   **Always define resource requests.** HPA cannot calculate utilization without them. Use the [resource profile](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling) feature to determine appropriate values from historical data.
    
-   **Create one HPA per workload.** Multiple HPAs targeting the same workload cause conflicting scaling decisions and unpredictable replica counts.
    
-   **Do not set `spec.replicas` to 0.** HPA cannot scale from zero replicas. Set `minReplicas` to at least 1.
    
-   **Combine HPA with node autoscaling.** If HPA scales out pods but the cluster lacks node capacity, pods remain in `Pending` state. Enable [node autoscaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes) to automatically add nodes when resources are insufficient.
    
-   **Avoid frequent pod recreation.** Make sure pods and nodes remain healthy to prevent unnecessary churn that can interfere with HPA metrics.
    

## FAQ

-   [What do I do if the TARGETS column shows `unknown` in `kubectl get hpa` output?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling)
    
-   [What do I do if HPA cannot collect metrics and fails to scale?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling)
    
-   [What do I do if HPA creates excess pods during a rolling update?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling)
    
-   [What do I do if HPA does not scale when the threshold is reached?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling)
    
-   [How do I configure the metric collection interval?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling)
    
-   [How do CronHPA and HPA work together?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling)
    
-   [How do I prevent excess pods when CPU or memory usage spikes rapidly?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling)
    
-   [Why does HPA scale out when the audit log metric is below the threshold?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling)
    
-   [Can HPA control the order in which pods are scaled in?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling)
    
-   [What does the utilization unit in HPA metrics mean?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling)
    
-   [What metrics does HPA support?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling)
    
-   [How do I configure HPA after customizing the Nginx Ingress log format?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling)
    
-   [How do I get the Prometheus data request URL?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/horizontal-pod-scaling-based-on-prometheus-service-metrics-1)
    
-   [How do I query the sls\_ingress\_qps metric from the command line?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling)
    
-   [How do I manage a kubectl-installed VPA from the console?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/vertical-pod-autoscaling)
    
-   [What do I do if the alibaba-cloud-metrics-adapter image fails to pull?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling)
    

## References

### Related topics

-   [Horizontally scale pods with Alibaba Cloud metrics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/implement-horizontal-auto-scaling-based-on-alibaba-cloud-metrics) -- Use External Metrics from Alibaba Cloud components to drive HPA.
    
-   [Horizontal pod autoscaling based on Prometheus metrics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/horizontal-pod-scaling-based-on-prometheus-service-metrics-1) -- Convert Prometheus metrics into HPA-compatible metrics.
    
-   [Node autoscaling FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling) -- Troubleshoot common node scaling issues.
    
-   [Coordinate CronHPA and HPA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/make-cronhpa-compatible-with-hpa) -- Use scheduled and metric-based scaling together.
    

### Other scaling solutions

-   [CronHPA for scheduled horizontal scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cronhpa) -- Scale pods on a cron-like schedule for periodic traffic patterns.
    
-   [Predictive scaling (AHPA)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ahpa-overview-1/) -- Automatically identify business cycles from historical metrics and scale pods proactively.
    
-   [Vertical Pod Autoscaling (VPA)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/vertical-pod-autoscaling) -- Automatically adjust resource requests and limits based on usage.
    
-   [Event-driven autoscaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-keda) -- Scale pods based on Kubernetes events, message queues, or custom triggers.
    

### Combined solutions

Use HPA with [node autoscaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes) to automatically add nodes when pod scaling exhausts available cluster resources.
