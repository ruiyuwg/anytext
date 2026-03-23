To quickly locate performance bottlenecks and troubleshoot cluster issues, we recommend that you enable Tracing Analysis for the API server of the cluster and record their request interaction details. After you enable Tracing Analysis, the API server link information is automatically reported to Managed Service for OpenTelemetry. This feature provides monitoring data such as tracing details and real-time topology.

> For more information about Tracing Analysis, see [Terms](/help/en/opentelemetry/product-overview/terms).

## **Prerequisites**

-   An [ACK managed Pro cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/) that runs Kubernetes 1.28 or later is created. For more information about how to upgrade a cluster, see [Manually upgrade ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
-   Managed Service for OpenTelemetry is activated and authorized. For more information, see [Prepare for using Managed Service for OpenTelemetry](/help/en/opentelemetry/user-guide/before-you-begin-before-you-begin).
    
    > [Managed Service for OpenTelemetry](/help/en/opentelemetry/product-overview/what-is-managed-service-for-opentelemetry) provides a set of tools for distributed application, including trace mapping, call statistics, trace topology, and application dependency analysis. Service Mesh (ASM) integrates with Managed Service for OpenTelemetry.
    

**Note**

When you use this feature, you are charged for Managed Service for OpenTelemetry in addition to the [ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/ack-pro-cluster-billing). For more information about the free quota and pricing of Managed Service for OpenTelemetry, see [Billing overview](/help/en/opentelemetry/product-overview/billing-description).

You can configure the parameters of the API server to enable Tracing Analysis and configure Tracing Analysis sample rate. After the configuration is complete, the tracing data is displayed in the [Managed Service for OpenTelemetry console](https://trace.console.aliyun.com/).

## **Step 1:** Enable Tracing Analysis for the API server

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left-side navigation pane, choose **Operations** > **Add-ons**.
    
3.  On the **Core Components** tab, find **Kube API Server** and click **Configuration** in the lower-right corner of the Kube API Server card.
    
4.  In the panel that appears, find the **enableTrace** and **samplingRatePerMillion** parameters, configure the parameters as prompted.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9660922471/p929623.png)
    
    -   **enableTrace**: Enable Tracing Analysis for the API server.
        
    -   **samplingRatePerMillion**: The control sample rate determines the percentage of requests that are sampled per million requests. You can configure the sample rate based on the load of your cluster.
        
        > For example, 1000000 specifies a 100% sampling rate, that is, for every million requests, all requests are sampled and recorded. 100000 specifies a 10% sampling rate. 10000 specifies a 1% sampling rate.
        

## **Step 2: View the tracing data in the Managed Service for OpenTelemetry console**

1.  Log on to the [Managed Service for OpenTelemetry console](https://trace.console.aliyun.com/). In the left-side navigation pane, click **Applications**.
    
2.  At the top of the page, select a region, click the application name **apiserver**, and follow the instructions in the console to view the tracing information.
    
    -   **Trace Explorer**: displays the tracing and application topology of API Server requests.
        
        > The following section describes the main tabs. For more information about the details on each tab, see [Application details](/help/en/opentelemetry/user-guide/application-details-1/).
        
        -   In the upper-left corner of the page, enter `resources.k8s.cluster.name : "ClusterId"` in the search box to filter the tracing of a specified cluster.
            
            > You can obtain the ID of the cluster in the cluster list.
            
        -   Click the trace ID in the trace list to view the tracing details of a API server request, which includes the topology view, the number of involved services, and the number of calls.
            
    -   **Provided Services**: displays the number of API requests, number of errors, and average duration of the API server.
        
    -   **Dependencies**: displays the external components that the API server depends on, such as the number of requests to etcd, the number of errors, average response time.
        

## **References**

For more information about how to monitor the tracing data of the cluster data plane components, see [Enable Tracing Analysis for data plane components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-tracing-for-data-plane-components).
