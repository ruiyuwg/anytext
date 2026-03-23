The Tracing Analysis of kubelet can record the traces of key operations performed by kubelet on nodes, such as pod lifecycle management and API calls. This helps you locate system performance bottlenecks and troubleshoot cluster issues. After you enable Tracing Analysis, the link information of kubelet is automatically reported to Managed Service for OpenTelemetry. This feature provides monitoring data such as tracing details and real-time topology.

> For more information about Tracing Analysis, see [Terms](/help/en/opentelemetry/product-overview/terms).

## **Prerequisites**

-   An ACK managed cluster or ACK dedicated cluster that runs Kubernetes 1.28 or later is created. For more information about how to upgrade a cluster, see [Manually upgrade ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
-   The version of Helm is V3. For more information about how to update Helm, see [Update Helm V2 to Helm V3](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-helm-v2-to-helm-v3).
    
    > When you install the OpenTelemetry Collector, the version of Helm must be 3.9 or later.
    
-   Managed Service for OpenTelemetry is activated and authorized. For more information, see [Prepare for using Managed Service for OpenTelemetry](/help/en/opentelemetry/user-guide/before-you-begin-before-you-begin).
    
    > [Managed Service for OpenTelemetry](/help/en/opentelemetry/product-overview/what-is-managed-service-for-opentelemetry) provides a set of tools for distributed application, including trace mapping, call statistics, trace topology, and application dependency analysis. Service Mesh (ASM) integrates with Managed Service for OpenTelemetry.
    

**Note**

When you use this feature, you are charged for Managed Service for OpenTelemetry in addition to the [ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/ack-pro-cluster-billing). For more information about the free quota and pricing of Managed Service for OpenTelemetry, see [Billing overview](/help/en/opentelemetry/product-overview/billing-description).

* * *

The following section describes the process for enabling Tracing Analysis for the cluster data plane:

1.  Obtain the endpoint and authentication token of Managed Service for OpenTelemetry, and store the authentication token in the cluster Secret so that the OpenTelemetry Collector can read the configuration and authentication information.
    
2.  Deploy the OpenTelemetry Collector to collect, process, and export observation data.
    
    > The Marketplace of Container Service for Kubernetes (ACK) allows you to deploy the OpenTelemetry Collector in DaemonSet mode in a cluster.
    
3.  Use kubelet to enable Tracing Analysis and configure relevant parameters (sample rate). Then, the collected data is forwarded to the Managed Service for OpenTelemetry by using the OpenTelemetry Collector.
    

## **Step 1: Obtain the endpoint and authentication token**

1.  Log on to the [Managed Service for OpenTelemetry console](https://trace.console.aliyun.com/). In the left-side navigation pane, click **Integration Center**.
    
2.  In the **Open Source Frameworks** section, click the **OpenTelemetry** card.
    
3.  Select a data reporting region, set **Connection Type** to **Alibaba Cloud VPC Network**, and **Export Protocol** to **gRPC**. Then, save the endpoint information for subsequent use.
    
    > Resources are automatically initialized in the region that you access for the first time. Perform operations based on the instructions on the page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9722232471/p929767.png)
    

## **Step 2: Store the authentication token in the Secret of the cluster**

Store the authentication token in a Secret within your ACK cluster and reference it through environment variables in the OpenTelemetry Collector. The Secret must reside in the same namespace as the OpenTelemetry Collector to be deployed in [step 3](#5e8b1f77285bd).

> By default, the OpenTelemetry Collector is deployed in the otel-collector namespace. You can manually create a namespace named otel-collector or use a different namespace and select it when you install the OpenTelemetry Collector.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left-side pane, choose **Configurations** > **Secrets**.
    
3.  Click **Create**. Configure the parameters based on the following instructions to create a Secret:
    
    **Parameter**
    
    **Valid value**
    
    **Example**
    
    **Name**
    
    opentelemetry-exporter-config
    
    **Important**
    
    Use this value instead of a custom name.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5172298471/p960413.png)
    
    **Type**
    
    Opaque
    
    Parameters in the **Add Secret** dialog box:
    
    **Name**
    
    grpc-token
    
    **Important**
    
    Use this value instead of a custom name.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5172298471/p960418.png)
    
    **Value**
    
    The authentication token obtained in [Step 1](#a225ef4406mwy).
    
    **Encode Data Values Using Base64**
    
    Enable
    

## **Step 3: Install the OpenTelemetry Collector**

The OpenTelemetry Collector is an observable data collector that provides unified data reception, processing, and export capabilities. The OpenTelemetry Collector can be used to connect to various types of open source observable data, such as Jaeger, Prometheus, and Fluent Bit. This avoids the need to deploy multiple observable collectors.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, choose **Marketplace** > **Marketplace**.
    
2.  Search for opentelemetry-collector and click the card.
    
    > This page contains the component introduction and parameter description. You can read this page or complete the necessary configurations according to the following guidelines.
    
3.  In the upper-right corner of the page, click **Deploy**. In the dialog box that appears, select a cluster and a namespace. Then, follow the instructions on the page to go to the next step.
    
    The namespace of the component must be the same as that of the Secret created in [Step 2](#2105a1d2e2pqe).
    
4.  Select a chart version. We recommend that you use the default version. Configure the parameters and install the chart as prompted.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    `mode`
    
    Set this parameter to `daemonset` to deploy the OpenTelemetry Collector in DaemonSet mode.
    
    ```
    mode: "daemonset"
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9722232471/p929776.png)
    
    `enableXtraceTokenFromSecret`
    
    Set this parameter to `true` to reference the authentication token through environment variables. Once enabled, the token will not be stored in the Secret of the OpenTelemetry Collector as plaintext, preventing sensitive information leakage.
    
    ```
    enableXtraceTokenFromSecret: true
    ```
    
    > Make sure that you have completed the operations in [Step 2](#hdV6H) to avoid failure in chart deployment.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9722232471/p929778.png)
    
    `exporters`
    
    Add a data exporter named `otlp` to specify the URL to which the tracing data is reported.
    
    Replace `endpoint` with the endpoint that you obtained in [Step 1](#a225ef4406mwy).
    
    ```
    exporters:
      otlp:
        endpoint: <The internal endpoint that you obtained>
        tls:
          insecure: true
        headers:
          Authentication: ${env:OPENTELEMETRY_GRPC_TOKEN}
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9722232471/p929780.png)
    
    `receivers`
    
    Add a receiver named `otlp/kubelet` to listen on port 4317 and receive kubelet data by using OTLP or gRPC.
    
    ```
      receivers:
        otlp/kubelet: # Create a receiver named otlp/kubelet.
          protocols:
            grpc:
              endpoint: 127.0.0.1:4317
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9860663471/p929781.png)
    
    `service.pipelines.traces`
    
    Configure the processing pipeline of the OpenTelemetry Collector, add the `otlp` exporter to `service.pipelines.traces.exporters`, and add the `otlp/kubelet` receiver to `service.pipelines.traces.receivers`.
    
    ```
          traces:
            exporters:
              - debug
              - otlp
            processors:
              - memory_limiter
              - batch
              - resource
            receivers:
              - otlp
              - jaeger
              - zipkin
              - otlp/kubelet
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9722232471/p929783.png)
    
    `hostNetwork`
    
    Set this parameter to `true`. The OpenTelemetry Collector can use the IP address and port of the host for communication.
    
    ```
    hostNetwork: true
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9722232471/p929785.png)
    
    After the installation, the page automatically redirects to the **Helm** page.
    
    In the left-side navigation pane, choose **Workloads** > **DaemonSets**. On the DaemonSets page, select the namespace of the component. If there is a DaemonSet named opentelemetry-collector-agent and the status of all pods is Running, the OpenTelemetry Collector is installed.
    

## **Step 4: Enable Tracing Analysis for kubelet**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left-side navigation pane, choose **Nodes** > **Node Pools**.
    
3.  On the **Node Pools** page, find the target node pool and choose **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4503103471/p931503.png)** > **Kubelet Configuration** in the **Actions** column. Follow the instructions to add custom parameters, read important considerations, select the nodes that you want to update, configure **Batch Update Policy** (**Maximum Number of Nodes to Repair per Batch**), and click **submit**.
    
    -   In the **Custom Parameters** section, click **\+ Custom Parameters**. Select **tracing** from the drop-down list of the **Name** parameter, and select **endpoint**. Set the **Value** parameter to `localhost:4317`, which indicates that kubelet tracing data are sent to localhost:4317. This address corresponds to the `endpoint` of the otlp/kubelet receiver in [Step 3](#e45844f30azli).
        
    -   Click **\+ Custom Parameters**, select **tracing** from the drop-down list of the **Name** parameter, and select **samplingRatePerMillion**. The control sample rate determines the percentage of requests that are sampled per million requests. Depending on your overall configuration, Tracing Analysis may have an impact on cluster network and CPU performance. In case of performance problems, you can reduce the sample rate according to the load of the cluster.
        
        > For example, 1000000 represents a 100% sampling rate, that is, for every million requests, all requests are sampled and recorded. 100000 represents a 10% sampling rate. 10000 represents a 1% sampling rate.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9722232471/p929787.png)
        

## **Step 5: View the tracing data in the Managed Service for OpenTelemetry console**

1.  Log on to the [Managed Service for OpenTelemetry console](https://trace.console.aliyun.com/). In the left-side navigation pane, click **Applications**.
    
2.  At the top of the page, select a region, click the application name **kubelet****,** and follow the instructions in the console to view the trace information.
    
    > The following section describes the main tabs. For more information about the tabs, see [Application details](/help/en/opentelemetry/user-guide/application-details-1/).
    
    -   **Trace Explorer**: displays the trace and application topology of kubelet requests.
        
        -   In the upper-left corner of the page, enter `resources.k8s.cluster.name : "ClusterId"` in the search box to filter the trace of the specified cluster.
            
            > You can obtain the ID of the cluster in the cluster list.
            
        -   Click the trace ID in the trace list to view the trace details of a kubelet request, which includes the topology view, the number of involved services, and the number of called interfaces.
            
    -   **Provided Services**: displays the number of requests, number of errors, and average duration of the interface provided by kubelet.
        
    -   **Dependencies**: the requests to the kubelet dependent services, such as the number of requests for containerd, the number of errors, and the average duration.
        

## **References**

To monitor and record the tracing data of the API server of a cluster, see [Enable Tracing Analysis for cluster control plane components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-tracing-for-control-plane-components).
