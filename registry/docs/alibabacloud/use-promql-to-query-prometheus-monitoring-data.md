Query monitoring data from your ACK cluster using Prometheus Query Language (PromQL) to verify the accuracy and timeliness of alert rules.

ACK clusters support two Prometheus deployment options -- Managed Service for Prometheus and open source Prometheus. Both support querying through the console UI and through the HTTP API.

## Prerequisites

Before you begin, ensure that you have:

-   A Container Service for Kubernetes (ACK) cluster with Prometheus monitoring deployed
    
-   One of the following Prometheus setups:
    
    -   [Managed Service for Prometheus](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster#task-2461398) deployed via ARMS
        
    -   [Open source Prometheus](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-open-source-prometheus-to-monitor-an-ack-cluster#task-1597149) deployed on your ACK cluster
        
-   (For API access to Managed Service for Prometheus V2) A RAM user with the [AliyunPrometheusMetricReadAccess or AliyunCloudMonitorFullAccess](/help/en/ram/user-guide/grant-permissions-to-the-ram-user) system permission
    

## Query via console

### Managed Service for Prometheus

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the left-side navigation pane, choose **Managed Service for Prometheus** > **Instances**.
    
3.  In the upper-left corner of the **Managed Service for Prometheus** page, select the region where your ACK cluster is located. In the **Grafana Workspace** column of the target instance, click **Shared Edition**.
    
4.  In the left-side navigation pane of the dashboard, click the ![大盘](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9244531861/p605046.png) icon. From the drop-down list to the right of **Explore** in the upper-left corner, select the appropriate data source.
    
5.  In the text box next to **Metric**, enter a PromQL query statement and click **Run query**.
    

### Open source Prometheus

To query open source Prometheus through the console, expose the Prometheus service over the Internet by attaching a Server Load Balancer (SLB) instance.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the target cluster and click its name. In the left-side pane, choose **Network** > **Services**.
    
3.  On the **Services** page, select the namespace where **ack-prometheus-operator** is deployed (**monitoring** by default). Find **ack-prometheus-operator-prometheus** and click **Update** in the **Actions** column.
    
4.  In the **Update Service** dialog box, set **Service Type** to **SLB**. Select **Create Resource** and set **Access Method** to **Public Access**. Select **Pay-as-you-go** for the **Billing Method** parameter, configure other parameters as needed, and click **OK**.
    
    > **Note:** SLB usage incurs charges. For details, see [Classic Load Balancer (CLB) billing](/help/en/slb/classic-load-balancer/product-overview/billing-overview/).
    
5.  After the update completes, copy the external IP address. Access the Prometheus console by entering `IP address:port number` in the browser address bar. Example: `47.XX.XX.12:9090`.
    
6.  In the Prometheus console, click the **Graph** tab. Enter a PromQL query statement in the text box and click **Execute**.
    

## Query via API

### Managed Service for Prometheus

#### Get the HTTP API URL

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the left-side navigation pane, choose **Managed Service for Prometheus** > **Instances**.
    
3.  At the top of the **Instances** page, select the region where the Prometheus instance is located. In the **Actions** column for the target cluster, click **Settings**.
    
4.  On the **Settings** page, in the **HTTP API URL (Grafana Read URL)** section, copy the public or internal HTTP API URL as needed.
    
5.  (Optional) For a Prometheus V1 instance, click **Generate Token** to obtain an authentication token.
    

**Important**

-   **V1 instance:** After you generate the authentication token, specify the token when adding the Prometheus instance as a data source in Grafana. Otherwise, monitoring data cannot be read from the Prometheus instance.
    
-   **V2 instance:** By default, data access requires both an AccessKey ID and an AccessKey secret of your account. The associated RAM user must have the [AliyunPrometheusMetricReadAccess or AliyunCloudMonitorFullAccess](/help/en/ram/user-guide/grant-permissions-to-the-ram-user) system permission.
    

#### V1 request example

Send a `GET` request to the instant query endpoint with a token-based authorization header:

```
GET {HTTP API}/api/v1/query

Accept: application/json
Content-Type: application/json
Authorization: {Token}

{
  "query":"arms_prometheus_target_interval_length_seconds_sum",
  "time":"1635302655",
  "timeout":"1000"
}
```

#### V2 request example

Send a `GET` request to the instant query endpoint with Base64-encoded AccessKey credentials:

```
GET {HTTP API}/api/v1/query

Accept: application/json
Content-Type: application/json
Authorization: Basic <base64Encode(<accessKey:secretKey>)>

{
  "query":"arms_prometheus_target_interval_length_seconds_sum",
  "time":"1635302655",
  "timeout":"1000"
}
```

For more information about the HTTP API, see the [Prometheus HTTP API documentation](https://prometheus.io/docs/prometheus/latest/querying/api/?spm=a2c4g.11186623.0.0.23e95f00D9uTgL).

### Open source Prometheus

#### Get the HTTP API URL

**Access from within the cluster**

The default service URL for data requests to ack-prometheus-operator is:

```
http://ack-prometheus-operator-prometheus.monitoring:9090
```

**Access over the Internet**

To access open source Prometheus over the Internet, attach an SLB instance to the ack-prometheus-operator service:

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the target cluster and click its name. In the left-side pane, choose **Network** > **Services**.
    
3.  At the top of the **Services** page, set **Namespace** to **monitoring**. Find **ack-prometheus-operator-prometheus** and click **Update** in the **Actions** column.
    
4.  In the **Update Service** dialog box, set the following parameters and click **Update**.
    
    **Parameter**
    
    **Value**
    
    **Service Type**
    
    **Server Load Balancer (LoadBalancer)**. Set **Access Method** to **Public Access**.
    
    Port Mapping
    
    Enter a port name. Set **Service Port** to 9090, **Container Port** to 9090, and **Protocol** to **TCP**.
    
5.  On the **Services** page, click the **ack-prometheus-operator-prometheus** service. In the **Basic Information** section, obtain the **External IP**. The external IP address is the HTTP API URL.
    

#### Call the HTTP API

**Instant query**

Query monitoring data at a specific point in time using the instant query endpoint:

```
GET {HTTP API}/api/v1/query

Headers:
Accept: application/json
Content-Type: application/json

Params:
{
  "query":"{{PromQL}}",
  "time":"1635302655",
  "timeout":"1000"
}
```

**Parameter**

**Description**

`query`

PromQL expression to evaluate.

`time`

Evaluation timestamp (RFC3339 or Unix timestamp).

`timeout`

Evaluation timeout. If the query exceeds this period, a result is returned.

**Range query**

Query monitoring data over a time range using the range query endpoint:

```
GET {HTTP API}/api/v1/query_range

Headers:
Accept: application/json
Content-Type: application/json

Params:
{
  "query":"{{PromQL}}",
  "start": 1673946024,
  "end": 1673949624,
  "step": 30
}
```

**Parameter**

**Description**

`query`

PromQL expression to evaluate.

`start`

Start timestamp of the query range (RFC3339 or Unix timestamp).

`end`

End timestamp of the query range (RFC3339 or Unix timestamp).

`step`

Query resolution step width in duration format (for example, `15s` or `1m`) or float number of seconds.

## References

-   [Best practices for configuring alert rules using Prometheus](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-configuring-alert-rules-in-prometheus#task-2299969)
    
-   [Prometheus HTTP API](https://prometheus.io/docs/prometheus/latest/querying/api/)
    
-   [Use Managed Service for Prometheus](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster#task-2461398)
    
-   [Open source Prometheus monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-open-source-prometheus-to-monitor-an-ack-cluster#task-1597149)
