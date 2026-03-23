ACK provides a resource profiling feature for native Kubernetes workloads. This feature analyzes historical resource usage to recommend container specifications. This simplifies the process of configuring container requests and limits. This topic describes how to use the resource profiling feature in the ACK console and from the command line.

## Prerequisites and notes

-   This feature is only supported on ACK Pro clusters that meet the following conditions:
    
    -   The ack-koordinator component (formerly ack-slo-manager) v0.7.1 or later is installed. For more information, see [ack-koordinator](/help/en/ack/product-overview/ack-koordinator-fka-ack-slo-manager#task-2172306).
        
    -   The metrics-server component v0.3.8 or later is installed.
        
    -   If a node uses containerd as its container runtime and was added to the cluster before 14:00 on January 19, 2022, you must re-add the node or upgrade the cluster to the latest version. For more information, see [Add existing nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster) and [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#task-1664343).
        
-   The resource profiling feature is in public preview as part of the cost management suite and is ready to use.
    
-   To ensure the accuracy of the profiling results, enable resource profiling for a workload and wait at least one day to collect sufficient data.
    

## **Billing description**

The ack-koordinator component is free to install and use. However, extra fees may apply in the following scenarios:

-   ack-koordinator is a self-managed component that consumes worker node resources after installation. You can configure the resource requests for each module during installation.
    
-   By default, ack-koordinator exposes monitoring metrics for features, such as resource profiling and fine-grained scheduling, in Prometheus format. If you enable **Enable Prometheus Monitoring for ACK-Koordinator** and use Managed Service for Prometheus when you configure the component, these metrics are reported to Managed Service for Prometheus as [basic metrics](/help/en/arms/prometheus-monitoring/container-cluster-metrics). If you change the default settings, such as the default storage duration, extra fees may apply. For more information, see [Billing of Managed Service for Prometheus](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/observable-billing-description).
    

## **Introduction to resource profiling**

In Kubernetes, resource requests provide a semantic description for container resource management. When a container specifies a request, the scheduler matches the request with the allocatable resources of a node to decide where to schedule the pod. Container requests are usually set based on experience. Administrators continuously adjust the settings by referring to historical resource utilization, application stress test performance, and online operational feedback.

However, this manual configuration method has the following limitations:

-   To ensure the stability of online applications, administrators often reserve a significant resource buffer to handle load fluctuations in upstream and downstream services. This practice leads to container requests being set much higher than the actual resource utilization, which results in low cluster resource utilization and significant waste.
    
-   When the cluster allocation rate is high, administrators may reduce request configurations to improve resource utilization. This increases the container deployment density, which can affect cluster stability when application traffic increases.
    

To address these issues, ack-koordinator provides the resource profiling feature. It recommends container resource specifications to reduce the complexity of container configuration. ACK provides a corresponding feature in the console that helps application administrators quickly analyze the validity of application resource specifications and change them as needed. ACK also provides command-line access, which lets you directly manage application resource profiling using CustomResourceDefinitions (CRDs).

## Use resource profiling in the console

### Step 1: Install the resource profiling feature

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Cost Suite** > **Cost Optimization**.
    
3.  On the **Cost Optimization** page, click the **Resource Profiling** tab, and follow the on-screen instructions to enable the feature.
    
    -   Component installation or upgrade: Follow the on-screen instructions to install or upgrade the ack-koordinator component. If this is the first time that you use the feature, you must install the ack-koordinator component.
        
        **Note**
        
        If the version of ack-koordinator is earlier than 0.7.0, you must migrate and upgrade it. For details, see [Migrate ack-koordinator from the marketplace to the component center](/help/en/ack/product-overview/ack-koordinator-fka-ack-slo-manager#section-9yj-oaq-ilp).
        
    -   To configure profiling when you first use this feature, select **Default Settings** after an installation or upgrade. This option controls the scope of resource profiling and is the recommended method. You can also adjust the settings later by clicking **Profiling Configuration** in the console.
        
4.  Click **Enable Resource Profiling** to go to the **Resource Profiling** tab.
    

### Step 2: Manage resource profiling policies

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Cost Suite** > **Cost Optimization**.
    
3.  On the **Cost Optimization** page, click the **Resource Profiling** tab, then click **Profiling Configuration**.
    
    Profiling configuration supports two modes: **Global Configuration** and **Automated O&M**. By default, the Global Configuration mode is selected when you install the resource profiling component. Modify the configuration mode and parameters as needed and click **OK** to apply the changes.
    
    ## Global Configuration (recommended)
    
    The Global Configuration mode enables resource profiling for all workloads. By default, this mode excludes the \`arms-prom\` and \`kube-system\` namespaces.
    
    **Parameter**
    
    **Description**
    
    **Value range**
    
    **Excluded Namespaces**
    
    The namespaces for which resource profiling is disabled. These are usually namespaces for system components. The final scope is the intersection of the specified namespaces and workload types.
    
    Existing namespaces in the current cluster. You can select multiple namespaces. The default values are \`kube-system\` and \`arms-prom\`.
    
    **Workload Type**
    
    The types of workloads for which resource profiling is enabled. The final scope is the intersection of the specified namespaces and workload types.
    
    Supports three native Kubernetes workload types: Deployment, StatefulSet, and DaemonSet. You can select multiple types.
    
    **CPU Redundancy Rate**
    
    The safety buffer used to generate resource profiling. For more information, see the description that follows.
    
    Must be a non-negative number. Three common buffer levels are provided: 70%, 50%, and 30%.
    
    **Memory Redundancy Rate**
    
    The safety buffer used to generate resource profiling. For more information, see the description that follows.
    
    Must be a non-negative number. Three common buffer levels are provided: 70%, 50%, and 30%.
    
    ## Automated O&M Configuration mode
    
    The Automated O&M Configuration mode enables resource profiling for workloads only in specific namespaces. If your cluster is large (for example, contains more than 1,000 nodes) or you want to enable the feature only for a few workloads, you can use this mode to specify the workloads as required.
    
    **Parameter**
    
    **Description**
    
    **Value range**
    
    **Enabled Namespaces**
    
    The namespaces for which resource profiling is enabled. The final scope is the intersection of the specified namespaces and workload types.
    
    Existing namespaces in the current cluster. You can select multiple namespaces.
    
    **Enabled Workload Types**
    
    The types of workloads for which resource profiling is enabled. The final scope is the intersection of the specified namespaces and workload types.
    
    Supports three native Kubernetes workload types: Deployment, StatefulSet, and DaemonSet. You can select multiple types.
    
    **CPU Consumption Buffer**
    
    The safety buffer used to generate resource profiling. For more information, see the description that follows.
    
    Must be a non-negative number. Three common buffer levels are provided: 70%, 50%, and 30%.
    
    **Memory Consumption Buffer**
    
    The safety buffer used to generate resource profiling. For more information, see the description that follows.
    
    Must be a non-negative number. Three common buffer levels are provided: 70%, 50%, and 30%.
    
    Resource consumption buffer: When administrators evaluate application capacity, such as queries per second (QPS), they usually do not use 100% of the physical resources. This is because of the limitations of physical resources, such as hyper-threading, and the need for applications to reserve resources for peak load requests. A downgrade suggestion is prompted when the difference between the profiled value and the original resource request exceeds the safety buffer. For more information about the algorithm, see the description of profiling suggestions in the [Step 3: View the application profiling overview](#p-3je-czf-9kt) section.![Resource buffer](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5707799661/p494464.jpg)
    

### Step 3: View the application profiling overview

After configuring the resource profiling policy, you can view the resource profiling of each workload on the **Resource Profiling** tab.

To improve the accuracy of the profiling results, the system prompts you to collect data for at least 24 hours the first time you use the feature.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9812015961/p687293.png)

The following table describes the columns in the profile overview.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0912015961/p687294.png)

**Note**

In the following table, a hyphen (-) indicates that the item is not applicable.

**Column**

**Description**

**Values**

**Filterable**

Workload Name

The name of the workload.

\-

Yes. You can perform an exact search by name in the menu bar.

Namespace

The namespace of the workload.

\-

Yes. By default, the \`kube-system\` namespace is not included in the filter.

Workload Type

The type of the workload.

Valid values: Deployment, DaemonSet, and StatefulSet.

Yes. The default filter is All.

CPU Request

The CPU resource request of the workload's pods.

\-

No.

Memory Request

The memory resource request of the workload's pods.

\-

No.

Profile Data Status

The resource profile of the workload.

-   Collecting: The resource profile is newly created and contains insufficient data. The first time you use the feature, wait at least one day. Before you use the profile, make sure that the workload runs in a stable manner for a period of time to cover traffic peaks and troughs.
    
-   Normal: The resource profile is generated.
    
-   Workload deleted: The corresponding workload is deleted. The profile is automatically deleted after a period of time.
    

No.

CPU Profile, Memory Profile

The adjustment suggestion for the original resource request of the workload. The suggestion is based on the profiled value, the original resource request, and the resource consumption buffer that is configured in the profiling policy. For more information, see the description that follows.

Valid values: Upgrade, Downgrade, and Keep. The percentage indicates the drift. The formula is: Requested value∣Profiled value−Requested value∣​.

Yes. The default filter includes Upgrade and Downgrade.

Creation Time

The time when the profile was created.

\-

No.

Change Resource Configuration

After you evaluate the profile and suggestion, click **Change Resource Configuration** to upgrade or downgrade the resources. For more information, see [Step 5: Change application resource specifications](#p-wcg-uj4-h8z).

\-

No.

ACK resource profiling generates a profiled value for the resource specification of each container in a workload. By comparing the profiled value (Recommend), the original resource request (Request), and the configured resource consumption buffer (Buffer), the resource profiling console generates operational prompts, such as to increase or decrease the resource request (upgrade or downgrade). If a workload has multiple containers, a prompt is displayed for the container with the largest drift. The calculation principles are as follows:

-   If the profiled value (Recommend) is greater than the original resource request (Request), the container has been overusing resources (usage is greater than request) for a long period. This poses a stability risk. You must increase the resource specification at the earliest opportunity. The console displays an "Upgrade suggested" prompt.
    

-   If the profiled value (Recommend) is less than the original resource request (Request), the container may be wasting resources and the resource specification can be lowered. This must be determined based on the configured resource consumption buffer. The details are as follows:
    
    1.  Calculate the target resource specification (Target) based on the profiled value and the configured resource consumption buffer: `**Target = Recommend × (1 + Buffer)**`**.**
        
    2.  Calculate the degree of drift (Degree) between the target resource specification (Target) and the original resource request (Request): `**Degree = 1 - (Request / Target)**`**.**
        
    3.  Based on the profiled value and the degree of drift (Degree), prompts for CPU and memory suggestions are generated. If the absolute value of the drift (Degree) is greater than 0.1, a downgrade suggestion is prompted.
        
-   In other cases, the resource profile suggests **Keep** for the application resource specification, which means that no adjustment is required.
    

### Step 4: View application profile details

On the **Resource Profiling** tab, click the name of a workload to go to its details page.

The details page has three parts: basic workload information, resource curves for the profile details of each container, and a window for changing the application resource specifications.![Application profile details](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5707799661/p494483.jpg)

As shown in the preceding figure, the metrics in the resource curve of the profile details are described as follows. CPU is used as an example.

**Curve Name**

**Meaning**

cpu limit

The CPU resource limit of the container.

cpu request

The CPU resource request of the container.

cpu recommend

The profiled CPU resource value of the container.

cpu usage (average)

The average CPU usage of all container replicas in the workload.

cpu usage (max)

The maximum CPU usage among all container replicas in the workload.

### Step 5: Change application resource specifications

1.  In the **Change Resource Configuration** section at the bottom of the application profile details page, modify the resource specifications of each container based on the profiled values.
    
    The columns are described as follows:![Change resources](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9018358861/p494497.png)
    
    **Configuration item**
    
    **Meaning**
    
    Resource Request
    
    The current resource request of the container.
    
    Resource Limit
    
    The current resource limit of the container.
    
    Recommended Value
    
    The profiled value generated for the container by resource profiling. It can be used as a reference for the resource request.
    
    Resource Redundancy Rate
    
    The safety buffer configured in the resource profiling policy management. It can be used as a reference for the target required resources. For example, add the buffer coefficient to the profiled value (for example, 4.742 × 1.3 ≈ 6.2 as shown in the figure).
    
    New Resource Request
    
    The target value to which the container's resource request is planned to be adjusted.
    
    New Resource Limit
    
    The target value to which the container's resource limit is planned to be adjusted. Note: If the workload uses CPU topology-aware scheduling, the CPU resource limit must be an integer.
    
2.  After completing the configuration, click **Submit**. The resource specifications are updated, and you are automatically redirected to the workload details page.
    
    After the resource specifications are updated, the controller performs a rolling update on the workload and recreates the pods.
    

## Use resource profiling from the command line

### Step 1: Enable resource profiling

1.  Create a `recommendation-profile.yaml` file that has the following YAML content to enable resource profiling for the workload.
    
    You can create a RecommendationProfile CRD to enable resource profiling for a workload and obtain the resource specification profile data for its containers. The RecommendationProfile CRD lets you control the scope by namespace and workload type. The final scope is the intersection of the two.
    
    ```
    apiVersion: autoscaling.alibabacloud.com/v1alpha1
    kind: RecommendationProfile
    metadata:
      # The name of the object. You do not need to specify a namespace for a non-namespaced object.
      name: profile-demo
    spec:
      # The types of workloads for which to enable resource profiling.
      controllerKind:
      - Deployment
      # The namespaces for which to enable resource profiling.
      enabledNamespaces:
      - default
    ```
    
    The configuration fields are described as follows:
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    `metadata.name`
    
    String
    
    The name of the object. If the RecommendationProfile is a non-namespaced type, you do not need to specify a namespace.
    
    `spec.controllerKind`
    
    String
    
    The types of workloads for which to enable resource profiling. Supported workload types include Deployment, StatefulSet, and DaemonSet.
    
    `spec.enabledNamespaces`
    
    String
    
    The namespaces for which to enable resource profiling.
    
2.  Enable resource profiling for the target application.
    
    ```
    kubectl apply -f recommendation-profile.yaml
    ```
    
3.  Create a `cpu-load-gen.yaml` file that has the following YAML content.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: cpu-load-gen
      labels:
        app: cpu-load-gen
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: cpu-load-gen-selector
      template:
        metadata:
          labels:
            app: cpu-load-gen-selector
        spec:
          containers:
          - name: cpu-load-gen
            image: registry.cn-zhangjiakou.aliyuncs.com/acs/slo-test-cpu-load-gen:v0.1
            command: ["cpu_load_gen.sh"]
            imagePullPolicy: Always
            resources:
              requests:
                cpu: 8 # The CPU request for this application is 8 cores.
                memory: "1Gi"
              limits:
                cpu: 12
                memory: "2Gi"
    ```
    
4.  Deploy the \`cpu-load-gen\` application using the \`cpu-load-gen.yaml\` file.
    
    ```
    kubectl apply -f cpu-load-gen.yaml
    ```
    
5.  Retrieve the resource specification profile.
    
    ```
    kubectl get recommendations -l \
      "alpha.alibabacloud.com/recommendation-workload-apiVersion=apps-v1, \
      alpha.alibabacloud.com/recommendation-workload-kind=Deployment, \
      alpha.alibabacloud.com/recommendation-workload-name=cpu-load-gen" -o yaml
    ```
    
    ack-koordinator generates a resource specification profile for each workload for which resource profiling is enabled and saves the result in a Recommendation CRD. The following code provides a sample resource specification profile for a workload named `cpu-load-gen`.
    
    ```
    apiVersion: autoscaling.alibabacloud.com/v1alpha1
    kind: Recommendation
    metadata:
      labels:
        alpha.alibabacloud.com/recommendation-workload-apiVersion: apps-v1
        alpha.alibabacloud.com/recommendation-workload-kind: Deployment
        alpha.alibabacloud.com/recommendation-workload-name: cpu-load-gen
      name: f20ac0b3-dc7f-4f47-b3d9-bd91f906****
      namespace: recommender-demo
    spec:
      workloadRef:
        apiVersion: apps/v1
        kind: Deployment
        name: cpu-load-gen
    status:
      recommendResources:
        containerRecommendations:
        - containerName: cpu-load-gen
          target:
            cpu: 4742m
            memory: 262144k
          originalTarget: # This indicates the intermediate result of the resource profiling algorithm. We do not recommend using it directly.
           # ...
    ```
    
    For easy retrieval, the Recommendation has the same namespace as the workload. The API version, type, and name of the workload are saved in the labels, as described in the following table.
    
    **Label Key**
    
    **Description**
    
    **Example**
    
    `alpha.alibabacloud.com/recommendation-workload-apiVersion`
    
    The API version of the workload. Due to Kubernetes label constraints, the forward slash (/) is replaced with a hyphen (-).
    
    apps-v1 (was apps/v1)
    
    `alpha.alibabacloud.com/recommendation-workload-kind`
    
    The type of the workload, such as Deployment or StatefulSet.
    
    Deployment
    
    `alpha.alibabacloud.com/recommendation-workload-name`
    
    The name of the workload. Due to Kubernetes label constraints, the length cannot exceed 63 characters.
    
    cpu-load-gen
    
    The resource specification profile for each container is saved in `status.recommendResources.containerRecommendations`. The following table describes the fields.
    
    **Field Name**
    
    **Meaning**
    
    **Format**
    
    **Example**
    
    `containerName`
    
    The name of the container.
    
    string
    
    cpu-load-gen
    
    `target`
    
    The resource specification profile result, including CPU and memory dimensions.
    
    map\[ResourceName\]resource.Quantity
    
    cpu: 4742m
    
    memory: 262144k
    
    `originalTarget`
    
    The intermediate result of the resource profiling algorithm. We do not recommend using it directly.
    
    \-
    
    \-
    
    **Note**
    
    The minimum profiled CPU value for a single pod is 0.025 cores, and the minimum memory value is 250 MB.
    
    By comparing the declared resource specifications in the target application (`cpu-load-gen`) with the profiling results from this step, you can see that the CPU request for this container is too large. You can reduce the request to save cluster resources.
    
    **Category**
    
    **Original Resource Specification**
    
    **Profiled Resource Specification**
    
    CPU
    
    8 cores
    
    4.742 cores
    

### **Step 2: (Optional) View results in Prometheus**

The ack-koordinator component provides a Prometheus query interface for resource profiling, which you can view directly using ACK Prometheus monitoring.

-   If this is the first time that you use the dashboard for this feature, make sure that the **Resource Profile** dashboard is upgraded to the latest version. For more information about the upgrade, see [Related operations](/help/en/prometheus/view-grafana-dashboards-1#title-bd9-r7y-ix4).
    
    To view the resource profiling in the ACK console using Prometheus monitoring, perform the following steps:
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Operations** > **Prometheus Monitoring**.
        
    3.  On the **Prometheus Monitoring** page, choose **Cost Analysis/Resource Optimization** > **Resource Profile**.
        
        On the **Resource Profile** tab, view the detailed data, including the container specification (request), actual resource usage (usage), and profiled resource specification (recommend). For more information, see [Connect to and configure Managed Service for Prometheus](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster#task-2461398).
        
-   If you have a self-managed Prometheus monitoring system, you can refer to the following metrics to configure the dashboard.
    
    ```
    # The profiled CPU resource specification for a container in a workload.
    koord_manager_recommender_recommendation_workload_target{exported_namespace="$namespace", workload_name="$workload", container_name="$container", resource="cpu"}
    # The profiled memory resource specification for a container in a workload.
    koord_manager_recommender_recommendation_workload_target{exported_namespace="$namespace", workload_name="$workload", container_name="$container", resource="memory"}
    ```
    
    **Important**
    
    The resource profiling metric provided by the ack-koordinator component was renamed to `koord_manager_recommender_recommendation_workload_target` in version v1.5.0-ack1.14. However, the metric from earlier versions, `slo_manager_recommender_recommendation_workload_target`, is still compatible. If you have a self-managed Prometheus monitoring system, we recommend that you switch to `koord_manager_recommender_recommendation_workload_target` after you upgrade the ack-koordinator component to v1.5.0-ack1.14 or later.
    

## FAQ

### How does the resource profiling algorithm work?

The resource profiling algorithm involves a multi-dimensional data model. The principles of the algorithm can be summarized as follows:

-   The resource profiling algorithm continuously collects container resource usage data and calculates aggregate statistics, such as the peak, weighted average, and percentile values of CPU and memory usage samples.
    
-   In the final profile, the recommended CPU value is set to the P95 percentile and the recommended memory value is set to the P99 percentile. A safety margin is added to both values to ensure workload reliability.
    
-   The algorithm is optimized for time. It refers only to data from the last 14 days and uses a half-life sliding window model for aggregate statistics. The weight of older data samples gradually decreases.
    
-   The algorithm considers container runtime status information, such as out-of-memory (OOM) events, to further improve the accuracy of the profiled values.
    

### What are the application type requirements for resource profiling?

This feature is suitable for online service applications.

Currently, the resource profiling prioritize meeting the resource needs of containers to ensure that most data samples are covered. However, for offline applications, this type of batch processing job is more concerned with overall throughput and can tolerate a certain degree of resource competition to improve the overall resource utilization of the cluster. The profiles may seem conservative for offline applications. In addition, for critical system components that are often deployed in active-passive mode, the replicas in the backup role are idle for long periods. The resource usage samples from these replicas can also interfere with the profiling algorithm. For these scenarios, process the profiles as needed before use. We recommend that you follow the product updates for resource profiling.

### Can I directly use the profiled values to set the container's request and limit?

This depends on the characteristics of your business. The results provided by resource profiling are a summary of the application's current resource demand. Administrators must process the profiled values based on the application's characteristics before use.

For example, to handle traffic peaks or achieve seamless switching in an active-active architecture, you need to reserve extra resource buffers. In addition, if the application is resource-sensitive and cannot run in a stable manner under a high host load, you must also increase the specifications based on the profiled values.

### How can I view resource profiling metrics with a self-managed Prometheus?

The relevant monitoring metrics for resource profiling are provided as a Prometheus-formatted HTTP interface in the ack-koord-manager module of the ack-koordinator component. You can run the following command to retrieve the pod IP address and access the metric data.

1.  Retrieve the pod IP address
    
    ```
    kubectl get pod -A -o wide | grep koord-manager
    ```
    
    Expected output:
    
    ```
    kube-system    ack-koord-manager-b86bd47d9-92f6m                                 1/1     Running     0               16h     10.10.0.xxx   cn-hangzhou.10.10.0.xxx   <none>           <none>
    kube-system    ack-koord-manager-b86bd47d9-vg5z7                                 1/1     Running     0               16h     10.10.0.xxx   cn-hangzhou.10.10.0.xxx   <none>           <none>
    ```
    
2.  Run the following command to view the metric data. Note that ack-koord-manager runs in active-passive mode with two replicas, and data is provided only by the active replica pod. For the port `port` (the default value is 9326), refer to the deployment configuration of the ack-koord-manager application.
    
    > Make sure that the server on which you run the command can communicate with the cluster's container network.
    
    ```
    curl -s http://10.10.0.xxx:9326/all-metrics | grep slo_manager_recommender_recommendation_workload_target
    # If you are using an earlier version of the ack-koordinator component (before v1.5.0-ack1.12), run the following command to view the metric data
    curl -s http://10.10.0.xxx:9326/metrics | grep slo_manager_recommender_recommendation_workload_target
    ```
    
    Expected output:
    
    ```
    # HELP slo_manager_recommender_recommendation_workload_target Recommendation of workload resource request.
    # TYPE slo_manager_recommender_recommendation_workload_target gauge
    slo_manager_recommender_recommendation_workload_target{container_name="xxx",namespace="xxx",recommendation_name="d2169dbf-fb36-4bf4-99d1-673577fb85c1",resource="cpu",workload_api_version="apps/v1",workload_kind="Deployment",workload_name="xxx"} 0.025
    slo_manager_recommender_recommendation_workload_target{container_name="xxx",namespace="xxx",recommendation_name="d2169dbf-fb36-4bf4-99d1-673577fb85c1",resource="memory",workload_api_version="apps/v1",workload_kind="Deployment",workload_name="xxx"} 2.62144e+08
    ```
    

After the ack-koordinator component is installed, it automatically creates Service and ServiceMonitor objects and associates them with the corresponding pods. If you use Managed Service for Prometheus, these metrics are automatically collected and displayed on the corresponding Grafana dashboard.

Because Prometheus supports multiple collection methods, if you use a self-managed Prometheus instance, you must configure it based on the official Prometheus documentation. During the configuration, refer to the preceding procedure for testing. After the test is complete, you can refer to [Step 2: (Optional) View results in Prometheus](#45723ea414o5k) to configure the corresponding Grafana monitoring dashboard in your environment.

### How do I clear resource profile results and rules?

The resource profiling and rules are saved in the Recommendation and RecommendationProfile CRDs, respectively. You can run the following commands to delete all resource profiling and rules.

```
# Delete all resource profile results.
kubectl delete recommendation -A --all

# Delete all resource profile rules.
kubectl delete recommendationprofile -A --all
```

### How do I grant a RAM user permissions to use resource profiling?

The authorization system of ACK includes RAM authorization at the basic resource layer and Role-Based Access Control (RBAC) authorization at the ACK cluster layer. For an introduction to the ACK authorization system, see [Best practices for authorization](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-of-authorization). To grant a RAM user permissions to use the resource profiling feature for a cluster, we recommend that you follow these best practices for authorization:

1.  **RAM authorization**
    
    Use your Alibaba Cloud account to log on to the [RAM console](https://ram.console.alibabacloud.com/) and grant the built-in **AliyunCSFullAccess** permission to the RAM user. For more information, see [Grant permissions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/authorization-overview/#764e042d25ky7).
    
2.  **RBAC authorization**
    
    After granting RAM permissions, you must also grant the RAM user the **developer** RBAC role or a higher role for the target cluster. For more information, see [Use RBAC to authorize operations on cluster resources](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles).
    

**Note**

The predefined developer role or higher RBAC roles have read and write permissions on all Kubernetes resources in the cluster. If you want to grant more fine-grained permissions to the RAM user, you can refer to [Use custom RBAC roles to restrict resource operations in a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-an-rbac-role) to create or edit a custom ClusterRole instance. The resource profiling feature requires that you add the following content to the ClusterRole:

```
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: recommendation-clusterrole
rules:
- apiGroups:
  - "autoscaling.alibabacloud.com"
  resources:
  - "*"
  verbs:
  - "*"
```
