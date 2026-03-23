Tair (Redis OSS-compatible) instances are located at the data layer, close to application services. They often handle a high volume of data access requests and consume network bandwidth. The maximum bandwidth varies by instance type. Exceeding this limit affects the access performance of your applications.

## Step 1: Query traffic usage

You can [query](/help/en/redis/user-guide/view-monitoring-data#task-645669) the traffic usage of the instance for a specific time period. If you know when the traffic spike occurred, you can skip this step and proceed to [Step 2: Quick troubleshooting](#21388de0d7lam).

In this example, the inbound and outbound traffic rapidly increases and remains at 100%, as shown in the following figure:

**Note**

-   Typically, if the average traffic usage consistently remains at 80% or higher, you should investigate the issue. This may indicate that the bandwidth is insufficient.
    
-   The metrics to follow are **inbound traffic utilization** (**Intranet In Ratio**) and **outbound traffic utilization** (**Intranet Out Ratio**).
    

Figure 1. Traffic usage example![流量使用率示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5804795161/p212657.png)

## **Step 2: Quick troubleshooting**

Multiple issues can cause a traffic spike on an instance. Check the following items one by one to identify the cause.

**Note**

Before you begin troubleshooting, you can temporarily [adjust the instance bandwidth](/help/en/redis/user-guide/adjust-the-bandwidth-of-an-apsaradb-for-redis-instance#task-s5f-jy4-kgb) in an emergency. This helps reduce the impact on your services and provides a larger time window to investigate the problem.

### **Large keys and hot keys**

First, use the [Top Key Statistics](/help/en/redis/user-guide/use-the-real-time-key-statistics-feature) feature to check for large keys or hot keys. If any are found, the feature displays specific information about the keys in the console.

**Note**

Impact: Large keys cause traffic spikes, while hot keys cause a sustained increase in traffic.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3416394571/p995085.png)

-   If large keys exist, split them based on business logic, such as user ID or time range. Reduce access to them, or delete unnecessary large keys. For more information, see [Large keys and hot keys](/help/en/redis/user-guide/identify-and-handle-large-keys-and-hotkeys/).
    
-   If hot keys exist, you can also split them based on your business logic, or use the [Proxy Query Cache](/help/en/redis/user-guide/use-read-write-splitting-to-mitigate-issues-caused-by-hotkeys) feature to cache the hot keys.
    

### **Slow requests**

Use the [Slow Requests](/help/en/redis/user-guide/slow-queries) feature to check for any recently executed slow requests. If any are found, the feature displays specific command information in the console.

**Note**

Impact: Slow requests can block subsequent commands and cause traffic spikes.

If slow requests exist, consider [disabling](/help/en/redis/user-guide/disable-high-risk-commands) high-risk commands such as **KEYS** and **HGETALL** in your production environment.

### **Service traffic growth**

If traffic usage remains high after you perform the preceding optimization steps, the cause might be natural service traffic growth. In this case, evaluate whether to [upgrade](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#concept-mgf-z25-tdb) to an instance type with more memory or [upgrade](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#concept-mgf-z25-tdb) the instance architecture. For example, you can upgrade to a cluster or read/write splitting architecture to handle more network traffic.

**Note**

Before you upgrade the instance type, you can purchase a pay-as-you-go instance to test whether the target instance type meets your workload requirements. After the test is complete, [release](/help/en/redis/user-guide/release-pay-as-you-go-instances#section-z79-42z-at1) the instance.

If there are periodic traffic peaks, such as a peak at 22:00 every night, you can use the [Bandwidth Auto Scaling](/help/en/redis/user-guide/enable-bandwidth-auto-scaling) or [Scheduled Bandwidth Upgrade](/help/en/redis/use-cases/scheduled-upgrade-of-the-temporary-bandwidth-of-the-redis-instance) feature.

## References

-   [View performance monitoring](/help/en/redis/user-guide/view-monitoring-data#task-645669)
    
-   [Instance types](/help/en/redis/product-overview/overview-4/#concept-gph-q34-tdb)
    
-   [Real-time performance](/help/en/redis/user-guide/view-performance-metrics-in-real-time#task-2490929)
    
-   [Alert settings](/help/en/redis/user-guide/alert-settings#concept-sj5-m2z-5db)
