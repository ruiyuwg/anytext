Container Service for Kubernetes (ACK) streams control plane component logs from managed clusters to a Simple Log Service (SLS) project in your account. You can use these logs to monitor cluster health, troubleshoot issues, and audit control plane activity.

## Prerequisites

Before you begin, ensure that you have:

-   A sufficient [Logstore quota](/help/en/sls/basic-resources) in SLS
    
-   An understanding of SLS [pay-as-you-go](/help/en/sls/pay-as-you-go#concept-y3m-g5n-vdb) billing -- collected logs are delivered to your SLS project as log streams and billed accordingly
    

> High-volume components such as kube-apiserver can generate significant log data. To manage costs, enable log collection only for the components you need and disable collection for components you are not actively monitoring.

## Supported components and Logstores

Each control plane component writes to a dedicated SLS Logstore. The following table lists the available components. For general information about Kubernetes control plane components, see [Kubernetes Components](https://kubernetes.io/docs/concepts/overview/components/).

**Component**

**Logstore**

**Collected by default**

**Description**

[kube-apiserver](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/)

apiserver

Yes

Exposes the Kubernetes API.

[kube-controller-manager](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/)

kcm

Yes

Runs the core control loops shipped with Kubernetes.

[kube-scheduler](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/)

scheduler

Yes

Assigns pods to nodes.

[Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager#concept-wk1-grd-qfb)

ccm

Yes

Integrates Kubernetes with Alibaba Cloud services such as Classic Load Balancer (CLB) and Virtual Private Cloud (VPC). CLB was formerly known as Server Load Balancer (SLB).

controlplane-events

controlplane-events

Yes

Captures operational events from control plane components, such as out of memory (OOM) kills.

[ALB Ingress controller](/help/en/ack/product-overview/alb-ingress-controller)

alb

Yes

Provides a unified Ingress entry point for Services based on Application Load Balancer (ALB).

[cluster-autoscaler](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes)

cluster-autoscaler

No

Automatically scales nodes in ACK clusters.

[ack-goatscaler](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/instant-elasticity)

ack-goatscaler

No

Provides instant elasticity for ACK nodes.

[kuberay-operator](/help/en/ack/cloud-native-ai-suite/use-cases/ray-cluster-best-practices/)

kuberay-operator

No

Extends the open-source KubeRay operator with ACK scheduling, elastic quota, and resource priority capabilities to simplify Ray cluster management.

> Components marked **No** in the **Collected by default** column require you to manually enable log collection. See [Update the list of components for log collection](#03c3827ca6mkp).

## Enable log collection

You can enable control plane component log collection when you create a cluster or for an existing cluster. For more information about Kubernetes control plane components, see [Control Plane Components](https://kubernetes.io/docs/concepts/overview/components/#control-plane-components).

> -   Log collection is enabled by default for ACK managed Pro clusters. For ACK managed Basic clusters, enable it manually.
>     
> -   You can select an existing SLS Project in the **Control Plane Component Logs** section.
>     

### Enable during cluster creation

1.  Follow the steps in [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/).
    
2.  In the **Component Configurations** step, set **Control Plane Component Logs** to **Enable**. ![Enable control plane component logs during cluster creation](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8942337471/p934740.png)
    

### Enable for an existing cluster

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the target cluster. In the left-side pane, choose **Operations** > **Log Center**.
    
3.  Click the **Control Plane Component Logs** tab, and then click **Enable Component Log Collection**.
    

## Query logs

Query control plane component logs in the ACK console or the SLS console. For query syntax details, see [Index-based query and analysis](/help/en/sls/query-and-analyze-logs-in-index-mode/).

### Query in the ACK console

Use either of the following paths:

**From the cluster overview:**

1.  On the cluster details page, click the **Basic Information** tab.
    
2.  Click **View** next to **Control Plane Component Logs**.
    
3.  On the **Log Center** page, select a component to view its logs.
    

**From the Operations section:**

1.  In the left navigation pane of the cluster details page, choose **Operations** > **Log Center**.
    
2.  Click the **Control Plane Component Logs** tab, then select a component.
    

### Query in the SLS console

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/).
    
2.  In the **Projects** section, click the project associated with your cluster.
    
3.  On the **Log Storage** > **Logstores** tab, click the Logstore for the component you want to inspect.
    

## Update the list of components for log collection

Add or remove components from log collection at any time.

1.  On the **Clusters** page, click the name of the target cluster. In the left-side pane, choose **Operations** > **Log Center**.
    
2.  Click the **Control Plane Component Logs** tab, and then click **Update Component**.
    
3.  In the dialog box, select or clear components as needed, and then click **OK**.
    

> Clearing all components disables the control plane component log feature entirely.

![Update component selection dialog](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8942337471/p953144.png)

## Disable log collection

1.  On the **Clusters** page, click the name of the target cluster. In the left-side pane, choose **Operations** > **Log Center**.
    
2.  Click the **Control Plane Component Logs** tab, and then click **Close**.
    

## See also

-   [Guide to log query and analysis](/help/en/sls/quick-guide-to-query-and-analysis)
