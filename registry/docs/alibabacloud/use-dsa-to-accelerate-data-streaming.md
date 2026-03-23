In data-intensive workloads, if you need to optimize data stream copying and transformation in dynamic random-access memory (DRAM), persistent memory, and various data processing processes, we recommend that you use Intel® Data Streaming Accelerator (DSA). DSA is a high-performance data replication and transformation accelerator that is integrated into the Intel® Sapphire Rapids processors of Elastic Compute Service (ECS) instances that use the eighth-generation SHENLONG architecture. After ack-koordinator is installed in the Container Service for Kubernetes (ACK) cluster, the cluster will automatically enable the DSA acceleration feature.

## Benefits

[Intel® DSA](https://www.intel.com/content/www/us/en/products/docs/accelerator-engines/data-streaming-accelerator.html?wapkw=DSA) is Integrated into the processors of ECS instances that use the eighth-generation SHENLONG architecture. Alibaba Cloud provides relevant drivers based on Alinux 3. If you use this DSA model as a worker node in an ACK cluster and install ack-koordinator on ECS instances, DSA acceleration is automatically enabled to transfer memory operations to DSA. This accelerates data replication and transformation, and mitigates CPU jitters during the acceleration process. DSA provides the following benefits:

-   It improves data processing performance for data-intensive workloads on nodes, optimizes memory operations in the OS kernel, such as memory balancing and compaction. This improves the overall memory performance of nodes.
    
-   It significantly improves the performance of the nearby memory access acceleration feature of ack-koordinator in handling individual data requests. The vCore-seconds consumed by workloads are reduced. The acceleration performance of DSA is improved when the usage of remote memory increases. The speed of accessing 100,000 to 1,000,000 memory pages is improved by 30% to 200%, and the CPU utilization is reduced. Approximately 1.7 GB of application memory is migrated to the local server. Compared with processors that are not integrated with DSA, the migration time is reduced to 31.25%, and the bandwidth is increased to 320%.
    
    **Important**
    
    The test statistics provided in this topic are only theoretical values. The actual values may vary based on your environment.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7293641371/CAEQLxiBgICgjJn9mBkiIGI1ZjUzYTU3NDhiYjRmYmZhYzNhNGZjMzk3YTMyMWJm3963382_20230830144006.372.svg)

## Prerequisites

-   Applications are deployed on instances with multiple non-uniform memory access (NUMA), specifically the eighth-generation SHENLONG Bare Metal model. For more information about ECS instance types, see [ECS instance types](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    
    This feature provides optimal support for eighth-generation models such as ecs.ebmc8i.48xlarge, ecs.c8i.32xlarge, and ecs.g8i.48xlarge. We recommend that you use these models.
    
-   ack-koordinator (FKA ack-slo-manager) 1.2.0-ack1.2 or later is installed. For more information about how to install ack-koordinator, see [ack-koordinator (FKA ack-slo-manager)](/help/en/ack/product-overview/ack-koordinator-fka-ack-slo-manager#task-2172306).
    
    **Note**
    
    ack-koordinator supports all features provided by resource-controller. If you are currently using resource-controller, you must uninstall it before you install ack-koordinator. For more information about how to uninstall resource-controller, see [Uninstall resource-controller](/help/en/ack/product-overview/resource-controller#section-5em-eoi-19v).
    
-   A kubectl client is connected to the ACK cluster. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
    

## Billing

No fee is charged when you install or use the ack-koordinator component. However, fees may be charged in the following scenarios:

-   ack-koordinator is a non-managed component that occupies worker node resources after it is installed. You can specify the amount of resources requested by each module when you install the component.
    
-   By default, ack-koordinator exposes the monitoring metrics of features such as resource profiling and fine-grained scheduling as Prometheus metrics. If you **enable Prometheus metrics for ack-koordinator** and use Managed Service for Prometheus, these metrics are considered [custom metrics](/help/en/arms/prometheus-monitoring/basic-metrics/) and fees are charged for these metrics. The fee depends on factors such as the size of your cluster and the number of applications. Before you enable Prometheus metrics, we recommend that you read the [Billing](/help/en/arms/prometheus-monitoring/product-overview/billing-description/) topic of Managed Service for Prometheus to learn about the free quota and billing rules of custom metrics. For more information about how to monitor and manage resource usage, see [Query the amount of observable data and bills](/help/en/arms/prometheus-monitoring/product-overview/billing-and-usage-query).
    

## Step 1: Enable DSA acceleration

The ack-koordinator component automatically activates the DSA acceleration feature on nodes that are integrated with DSA. Simply configure an ECS instance in the cluster and deploy ack-koordinator to use DSA acceleration.

**Note**

If the nearby memory access acceleration feature is enabled in the cluster, DSA can enhance the acceleration effect. For more information about how to enable nearby memory access acceleration, see [Enable nearby memory access acceleration for containers](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-the-nearby-memory-access-acceleration-feature-on-multi-numa-instances#task-2311181).

## Step 2: Verify DSA acceleration

The nearby memory access acceleration feature supports migrating memory from remote NUMA of a core-bound application to the local server in a secure manner. This improves the hit ratio of local memory access and optimizes memory access for memory-intensive workloads.

In the following example, ecs.ebmc8i.48xlarge is used to verify whether DSA acceleration works as expected:

### **Procedure**

1.  Log on to the node and run the following command to confirm that the processor is integrated with DSA.
    
    For more information about how to log on to the test node, see [Methods for connecting to an ECS instance](/help/en/ecs/user-guide/connect-to-instance).
    
    ```
    ls /sys/bus/dsa
    ```
    
    If no error message appears and the returned directory is not empty, the processor has been integrated with DSA.
    
2.  Deploy a test application and enable the nearby memory access acceleration feature for it.
    
    We recommend that you deploy a memory-intensive application, such as Redis, for deployment and verification. For more information about how to deploy a Redis application and enable the nearby memory access acceleration feature, see [Example](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-the-nearby-memory-access-acceleration-feature-on-multi-numa-instances#section-o2y-ne1-ylc).
    

### **Result analysis**

The following table compares the CPU utilization (based on 1 million memory pages) and migration time required to migrate 26.12 GB of Redis remote memory with and without DSA acceleration enabled:

**Scenario**

**Migration time (seconds)**

**CPU utilization**

**vCore-seconds (seconds)**

DSA acceleration disabled

9.649

1.000

9.649

DSA acceleration enabled

4.928

0.668

3.292

Test data indicates that when DSA acceleration is enabled, migration time, average CPU utilization, and vCore-seconds are reduced to 51.8%, 66.8%, and 34.1% of their values when DSA acceleration is disabled. These results demonstrate that DSA can accelerate memory migration and reduce CPU consumption.

## **Reference**

DSA can enhance the effect of nearby memory access acceleration. For more information about how to enable nearby memory access acceleration, see [Enable nearby memory access acceleration for containers](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-the-nearby-memory-access-acceleration-feature-on-multi-numa-instances#task-2311181).
