In a cloud-native instance deployed across multiple zones, when the number of nodes in the primary zone is greater than or equal to 2 (with a total of at least 3 nodes), the high availability (HA) system performs a failover first within the primary zone if the master node fails. This feature helps prevent latency spikes during a master node failover to the secondary zone.

**Note**

The current cloud-native standard and cluster architectures automatically enable this feature, requiring no manual intervention from you. This topic uses the cluster architecture as an example for explanation.

## **Background information**

In multi-zone deployment, the master and replica nodes of each shard in a cluster instance are deployed across different zones within the same region. The zones are physically separated areas with independent power and network connections to ensure high disaster recovery.

When the master node of a shard fails, the instance automatically triggers a failover to minimize the impact. In most cases, the client is also deployed in the primary zone. If no instance failover occurs, the client and the master node of the cluster instance remain in the same zone. In this case, access latency is minimized, which results in the most healthy connection. The following figure shows the architecture of a three-shard cluster instance.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8585595671/CAEQUBiBgIC75_K72BkiIGVmNzkwYTdlMzBhZTRlNjVhNGYxNTEwODdkMmU2NzNj4867715_20250108161653.903.svg)

When the master node of a shard fails and triggers a failover, the HA system switches workloads from the master node to a replica node in the secondary zone. In this case, the client accesses the instance across zones (data centers), which can significantly increase access latency.

**Note**

Cross-zone latency is much higher than latency within the same zone. For information about the average cross-zone latency, go to the [Cloud Network Performance](https://nis.console.alibabacloud.com/performance/netana?type=inner_region) page.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8585595671/CAEQUBiBgIC1kPa72BkiIGNkYzlhNzU0MTNiYjQzN2RiMjI3NjgyZDkxMTU1NmMw4867715_20250108161653.903.svg)

Tair (Redis OSS-compatible) is an in-memory database that provides high performance and low latency. High network latency can directly affect the overall response time of service requests. To optimize performance, stability, and disaster recovery, we recommend that you **add a replica node to the primary zone of the cluster instance**.

-   If the master node fails and triggers a failover, the instance preferentially performs a switchover in the same zone. After the switchover, the master node remains in the primary zone, which does not increase access latency.
    
-   If a zone-level failure occurs in the primary zone, the instance performs a cross-zone switchover for disaster recovery.
    

## **Solution overview**

Tair (Redis OSS-compatible) allows you to specify two to five nodes for a shard of a cluster instance.

-   When the number of nodes is 2, one node is deployed in the primary zone and the other is deployed in the secondary zone.
    
-   When the number of nodes is 3, two nodes are deployed in the primary zone and one node is deployed in the secondary zone.
    
-   When the number of nodes is 4 or 5, you can deploy the remaining nodes in the primary or secondary zone.
    

The following figure shows the architecture of a cluster instance with three shards and three nodes (two nodes in the primary zone and one node in the secondary zone).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9585595671/CAEQUBiBgID0pfm72BkiIGU5YWZkNDFiZjA0MzQyNTU5ZWJlODVjMmI0NmI5NDRm4867715_20250108161653.903.svg)

If the master node of a shard fails and triggers a failover, the HA system preferentially switches workloads from the master node to a replica node in the primary zone. In this case, the client continues to access the instance within the same zone to prevent increase in access latency, as shown in the following figure.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9585595671/CAEQUBiBgICvuPy72BkiIDNmMzhhNTVlYTRiYzQ1MGFiZGE5Y2FkZTU0YTI5MWNm4867715_20250108161653.903.svg)

## **How-to guide**

-   If you have not created an instance, you must create a cloud-native instance that is deployed across multiple zones. For more information, see [Step 1: Create an instance](/help/en/redis/getting-started/step-1-create-an-apsaradb-for-redis-instance).
    
    The following figure shows a configuration in which the number of nodes in the primary zone is greater than or equal to 2. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5977097471/p902657.png)
    
-   If you have created a cloud-native cluster instance that is deployed across multiple zones, you can go to the **Node Management** page of the instance details page and click **Modify** to increase the number of nodes in the primary zone to at least 2. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5977097471/p903131.png)
    
-   If you have created a classic instance, you can create an instance that meets the preceding conditions and use Data Transmission Service (DTS) to synchronize data to the new instance. For more information, see [Configure one-way data synchronization between instances](/help/en/redis/user-guide/configure-one-way-data-synchronization-between-apsaradb-for-redis-instances).
