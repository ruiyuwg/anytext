Integrate Managed Service for Prometheus with a Container Service for Kubernetes (ACK) cluster to collect metrics, view built-in dashboards, and configure alert notifications.

## Prerequisites

Before you begin, ensure that you have:

-   [Managed Service for Prometheus activated](/help/en/prometheus/product-overview/billing-description/)
    
-   [An ACK cluster created](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/)
    
-   [Alibaba Cloud Resource Center activated](/help/en/resource-management/resource-center/user-guide/activate-resource-center)
    

## Step 1: Integrate your ACK cluster

Managed Service for Prometheus provides a built-in integration with ACK. Choose one of the following methods.

For ACK managed Pro clusters, Container Monitoring is available in two editions:

**Edition**

**Cost**

Basic Edition

Free

Pro Edition

[Billed per node](/help/en/prometheus/product-overview/container-cluster-monitoring-pro-version-billing-rule)

### Method 1: Integrate through the ACK console

**New clusters**

When you create an ACK cluster, Managed Service for Prometheus is enabled by default.

![Prometheus enabled by default for new clusters](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1602719371/p905518.jpg)

**Existing clusters**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find your cluster and click its name. In the left navigation pane, choose **Operations** > **Prometheus Monitoring**.
    
3.  On the **Prometheus Monitoring** page, click **Install**.
    

**Note**

The system automatically installs the required components and sets up monitoring dashboards. After installation, click each tab to view the monitoring data. Data ingestion takes 1 to 2 minutes, during which dashboards display no data.

### Method 2: Integrate through the ARMS or Managed Service for Prometheus console

You can integrate your cluster through the [ARMS](https://arms.console.aliyun.com/?spm=5176.2020520152.products-recent.darms.602e16ddXyk2XQ#/home) or [Managed Service for Prometheus](https://cloudmonitor.console.alibabacloud.com/prom/instances/?spm=5176.arms.categories-n-products.dprometheus.1e45f167mOu3Cm#/prom/cn-hangzhou) console. Use this method to manage integrations for multiple clusters from a single console.

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home). In the left navigation pane, click **Integration Center**.
    
2.  On the **Integration Center** page, click **Infrastructure**. In the **Infrastructure** section, click **Kubernetes Cluster Monitor**. ![Integration Center - Kubernetes Cluster Monitor](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052726171/p770424.png)
    
3.  In the panel that appears, follow the on-screen instructions to complete the integration. The wizard guides you through selecting the target cluster, choosing the monitoring edition, and confirming the configuration.
    

**Note**

After integration, the dashboard data is updated within 1 to 2 seconds.

## Step 2: View monitoring dashboards

Managed Service for Prometheus provides built-in dashboards that cover cluster overview, core components, nodes, and pods. Access these dashboards from either console.

### Method 1: View in the ACK console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find your cluster and click its name. In the left navigation pane, choose **Operations** > **Prometheus Monitoring**.
    
3.  On the **Prometheus Monitoring** page, click a dashboard tab to view the monitoring data.
    

### Method 2: View in the ARMS or Managed Service for Prometheus console

You can also log on to the [ARMS](https://arms.console.aliyun.com/?spm=5176.2020520152.products-recent.darms.602e16ddXyk2XQ#/home) or [Managed Service for Prometheus](https://cloudmonitor.console.alibabacloud.com/prom/instances/?spm=5176.arms.categories-n-products.dprometheus.1e45f167mOu3Cm#/prom/cn-hangzhou) console to view cluster monitoring dashboards.

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home). In the left navigation pane, click **Integration Management**.
    
2.  On the **Integration Management** page, click the **Query Dashboards** tab.
    
3.  Select your ACK cluster to view its dashboards.
    

## Step 3: Configure alerts

Managed Service for Prometheus includes built-in alert rules for common cluster issues. These rules generate alert events but do not send notifications by default.

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home). In the left navigation pane, click **Integration Management**.
    
2.  On the **Integrated Environments** tab of the **Integration Management** page, click **Container Service**. In the list of environments, click the name of the target environment.
    
3.  On the **Component Management** tab, click **Alert Rule** in the **Add-on Type** section to view the built-in alert rules. ![Built-in alert rules](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9055414271/p770714.png)
    
4.  To enable notifications for a rule, click **Edit** and configure a notification method. On the configuration page, customize the alert threshold, duration, and alert content as needed. For more information, see [Create an alert rule for a Prometheus instance](/help/en/arms/prometheus-monitoring/create-alert-rules-for-prometheus-instances). ![Alert notification configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052726171/p770619.png)
    

**Note**

In simple mode, you can configure notification recipients, notification period, and repeat policy.

## FAQ

### How do I upgrade Container Monitoring from Basic to Pro Edition?

1.  Log on to the [ARMS console](https://arms.console.aliyun.com/?spm=5176.2020520152.products-recent.darms.602e16ddXyk2XQ#/home). In the left navigation pane, click **Integration Management**.
    
2.  Find the cluster and click **Upgrade to Pro Edition** in the **Actions** column. ![Upgrade to Pro Edition](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1602719371/p905663.jpg)
    

## Next steps

After monitoring is set up, explore these related capabilities:

-   [Create custom alert rules](/help/en/arms/prometheus-monitoring/create-alert-rules-for-prometheus-instances) to monitor specific metrics
    
-   [Explore Managed Service for Prometheus documentation](/help/en/arms/prometheus-monitoring/) for advanced monitoring and visualization
    
-   [Enable application monitoring](https://www.alibabacloud.com/help/en/arms/) to trace requests across services
