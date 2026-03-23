Container Service for Kubernetes (ACK) clusters run pods that share cloud resources. A single pod may consume multiple resources, and a single resource may serve multiple pods. To allocate cluster costs by department or application, calculate the cost of each pod.

The ACK cost management suite provides two cost estimation policies based on resource watermarks (resource utilization ratios). Each policy calculates the share of cluster cost attributable to individual pods and namespaces.

## Choose a cost estimation policy

**Policy**

**Allocates cost by**

**Recommended when**

Single resource cost estimation

CPU **or** memory alone

One resource dominates. For example, the CPU watermark is much higher than the memory watermark, or most applications are memory-intensive.

Weighted resource cost estimation

CPU **and** memory, weighted by their respective utilization ratios

CPU and memory utilization are similar, or applications consume both resource types.

## Single resource cost estimation

The default policy in the cost management suite. It calculates pod cost based on a single resource dimension: CPU or memory.

### Applicable scenarios

The resource watermark is the ratio of requested resources to total allocatable resources. In many clusters, one resource type drives scheduling decisions. When the watermark of one resource is much higher than the other, that resource dominates the cluster cost.

**Example**: Memory-intensive applications such as Java workloads request large amounts of memory. If the memory watermark reaches 90%, memory supply determines whether pods can be scheduled. Memory cost then accounts for 90% of the total cluster cost. The single resource cost estimation policy captures this relationship accurately.

### Pod cost calculation

The policy calculates the CPU or memory cost of a pod with the following formula:

![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7582055861/p668963.png)

### Namespace cost calculation

A namespace groups related pods with common fields. The namespace cost equals the sum of cost ratios for all pods in that namespace, multiplied by the total payment amount from the cluster bills.

Namespace cost formula:

![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7582055861/p668966.png)

Namespace cost ratio formula:

![图片 1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9175317171/p786975.png)

## **Weighted resource cost estimation**

Calculates pod cost by using both CPU and memory, weighted by cluster-level utilization ratios. This produces a more balanced allocation when workloads consume both resource types.

### Applicable scenarios

Use the weighted resource cost estimation policy when:

-   The CPU watermark and memory watermark of the cluster are close to each other.
    
-   Applications in the cluster consume both CPU and memory resources.
    

When CPU cost and memory cost are similar, comparing their respective watermarks provides a meaningful basis for weighting the allocation.

### **Pod cost calculation**

The weighted resource cost estimation policy calculates the cost of a pod based on the CPU weight and memory weight of the pod. These weights are derived from the cluster-level CPU watermark and memory watermark.

Pod cost formula:

![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7582055861/p669022.png)

### Watermark and weight formulas

The CPU watermark, memory watermark, CPU weight, and memory weight are calculated as follows:

-   CPU watermark (CPU utilization ratio):
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7582055861/p669107.png)
    
-   Memory watermark (memory utilization ratio):
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7582055861/p669108.png)
    
-   CPU weight:
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7582055861/p669100.png)
    
-   Memory weight:
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7582055861/p669104.png)
    

## **Comparison of policy results**

### **Example 1: One resource type dominates**

**Setup**: Two memory-intensive applications run in a cluster.

**Application**

**vCore requested**

**Memory requested**

App A

1 vCore

2 GB

App B

1 vCore

4 GB

-   Memory watermark: 90%
    
-   CPU watermark: 20%
    
-   Daily cluster cost: USD 200
    

**Single resource cost estimation results**:

**Resource dimension**

**Pod cost**

**Calculation**

**Unallocated cost**

Memory

USD 180

USD 200 x 90%

USD 20

CPU

USD 40

USD 200 x 20%

USD 160

Allocating by memory captures 90% of the cluster cost. Allocating by CPU leaves 80% unallocated, even though only 10% of cluster memory is available for scheduling.

**Weighted resource cost estimation results**:

-   Memory weight: approximately 80%
    
-   CPU weight: approximately 20%
    
-   Pod cost: USD 152 (USD 180 x 80% + USD 40 x 20%)
    
-   Unallocated cost: USD 48
    

**Result**: The single resource cost estimation policy (using memory) allocates USD 180 out of USD 200, which closely matches actual resource consumption. The weighted policy allocates only USD 152, leaving USD 48 unallocated. For clusters where one resource dominates, the single resource policy produces more accurate results.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2546822771/CAEQUxiBgID7mNXa3xkiIDk5MjZkNTIwZmI5ODRhNWZiYjg2ODc5NWNlMTAxMTQ03963382_20230830144006.372.svg)

### Example 2: Both resource types are consumed

**Setup**: One memory-intensive application and one CPU-intensive application run in a cluster.

**Application**

**vCore requested**

**Memory requested**

App A

1 vCore

4 GB

App B

4 vCores

1 GB

-   CPU watermark: 40%
    
-   Memory watermark: 50%
    
-   Daily cluster cost: USD 200
    

**Single resource cost estimation results**:

**Resource dimension**

**Pod cost**

**Calculation**

Memory

USD 100

USD 200 x 50%

CPU

USD 80

USD 200 x 40%

**Weighted resource cost estimation results**:

-   Memory weight: approximately 56%
    
-   CPU weight: approximately 44%
    
-   Pod cost: USD 91.2 (USD 100 x 56% + USD 80 x 44%)
    
-   Unallocated cost: USD 8.8
    

**Result**: CPU and memory watermarks are close (40% and 50%), which means CPU and memory costs are similar. The weighted policy accounts for both dimensions and produces USD 8.8 of unallocated cost, compared to USD 100 or USD 120 unallocated under single resource allocation. For clusters with mixed workloads, the weighted resource policy produces more balanced results.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2546822771/CAEQUxiBgMC029fa3xkiIGEwYTAyNGRhNzlkNzQ5NWVhMzQyOGUyOWQ1MjRkMmRk3963382_20230830144006.372.svg)

## **Reduce unallocated cost with the weighted policy**

**Cause**: Unallocated cost occurs when the watermark of one resource is much higher than the other. The dominant resource reaches a bottleneck while the other resource remains idle. For example, if the CPU watermark is much higher than the memory watermark, idle memory resources exist. The single resource cost estimation policy can allocate the cost of those idle resources, but the weighted policy cannot.

**Solution**: Select Elastic Compute Service (ECS) instance types that match the resource profile of your workloads. Make sure the CPU watermark and memory watermark remain close to each other. Alternatively, switch to the single resource cost estimation policy.

## **Cost data API**

-   Send HTTP API requests to retrieve cost insights data for custom development. For more information, see [Overview of calling an API to query cost data](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-calling-an-api-to-query-cost-insights-data).
