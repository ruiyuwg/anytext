Elastic Compute Service (ECS) enforces limits on product features, service performance, and related quotas. Some of these limits can be increased. Before using ECS, review these limits to plan your deployment accordingly. Request quota increases or design workarounds for fixed limits to ensure ECS meets your business requirements. This topic describes ECS limits and explains how to increase some of them.

## Table dimension

Use the tables in this topic to understand specific limits. The table columns are described as follows:

-   Restriction item: The product feature, service performance, or related quota that is subject to a limit.
    
    **Note**
    
    A quota is the maximum amount of a cloud resource or the maximum number of operations that a single Alibaba Cloud account can use.
    
-   Restriction: The limitations specific to the current item.
    
    If the restriction item is an ECS quota, it has a quota ID. Use the quota ID to query the current maximum value of the quota.
    
-   How to increase quota: The method to increase the limit for the restriction item.
    
    If a limit cannot be increased, plan your resources to work around it. If a limit can be increased, request a quota increase.
    

## Instances

**Restriction item**

**Limit**

**How to increase quota**

vCPU quotas

The maximum number of vCPUs for an instance family that a single Alibaba Cloud account can have in a specific region and for a specific billing method (subscription, pay-as-you-go, or spot). For more information, see [vCPU quotas](#218fcf8739o4c).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

GPU and vGPU quotas

The maximum number of GPUs or vGPU instances for an instance family that a single Alibaba Cloud account can have in a specific region and for a specific billing method (subscription, pay-as-you-go, or spot). For more information, see [GPU and vGPU quotas](#73cf9a6a6fsd9).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

Maximum number of subscription instances that a single Alibaba Cloud account can purchase at a time in a specific region

To view the quota, use the quota ID `q_prepaid-instance-count-per-once-purchase`. For more information, see [View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l).

Not applicable

Convert pay-as-you-go to subscription

-   No limit on the number of instances or the quota.
    
-   Instance types that are discontinued cannot be converted to subscription. For more information, see [Convert a pay-as-you-go instance to a subscription instance](/help/en/ecs/change-the-billing-method-of-an-ecs-instance-from-pay-as-you-go-to-subscription-1).
    

Not applicable

Convert subscription to pay-as-you-go

Converting a subscription instance to a pay-as-you-go instance generates a refund. This consumes your monthly refund limit. If you exceed the limit, you cannot perform more refunds. This means you cannot convert more subscription instances to pay-as-you-go. For more information, see [Convert a subscription instance to a pay-as-you-go instance](/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1).

**Note**

The refund limit is displayed on the conversion page. The limit resets on the first day of the next month.

Not applicable

Instance families that support secondary virtualization

Only ECS Bare Metal Instances and Super Computing Clusters support secondary virtualization. Other instance families do not support installing virtualization software or secondary virtualization.

Not applicable

Sound card applications

Sound card applications are not supported.

Not applicable

Attach external hardware devices

You cannot directly attach external hardware devices, such as hardware dongles, USB flash drives, external hard drives, or bank U-Keys. You can try using software dongles or dynamic passwords for secondary authentication.

Not applicable

Multicast protocol

The multicast protocol is not supported. To implement one-to-many communication similar to multicast, use unicast point-to-point communication instead.

Not applicable

Website ICP filing

To apply for an ICP filing for a website or an app, you must purchase a subscription ECS instance with a duration of three months or more. Each ECS instance can be used for ICP filings for a maximum of five websites or apps. For more information, see [Check the server for ICP filing](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check#concept-m5j-vrl-zdb).

Not applicable

License

The licenses of some software or applications must be bound to the hardware information of the ECS instance. Migrating an ECS instance may change its hardware information, which can invalidate the license.

Not applicable

### **vCPU quotas**

**Note**

When you view a quota, the value indicates the maximum number of vCPUs for a single Alibaba Cloud account in the current region, not the total number of vCPUs across all regions.

**Quota ID**

**Quota description**

**Applicable instance families (Click a link to view the instance types of an instance family.)**

**Quota**

**How to increase quota**

q\_ecs\_restrict\_prepay\_c

Maximum vCPU count for subscription instances with quota limits

-   [xn4, n4, mn4, and e4, previous-generation shared instance families](/help/en/ecs/user-guide/shared-instance-families#section-9zj-1ov-92r)
    
-   [Discontinued instance types](/help/en/ecs/user-guide/retired-instance-types#re4e)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_local\_storage\_prepay\_c

Maximum number of vCPUs for subscription instances with local storage (d and i series)

-   [Big data instance families (d series)](/help/en/ecs/user-guide/big-data-instance-families)
    
-   [Instance families with local SSDs (i series)](/help/en/ecs/user-guide/instance-families-with-local-ssds)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_share\_prepay\_c

Maximum number of vCPUs for subscription shared entry-level instances (e and t series)

-   [e, economy instance family](/help/en/ecs/user-guide/shared-instance-families#e)
    
-   [t6, burstable instance family](/help/en/ecs/user-guide/burst-performance-instance-overview#section-6gl-pk7-f56)
    
-   [t5, burstable instance family](/help/en/ecs/user-guide/burst-performance-instance-overview#section-mq2-x7y-0jl)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_ebm\_prepay\_c

Maximum number of vCPUs for subscription ECS Bare Metal Instances (ebm)

[ECS Bare Metal Instance types](/help/en/ecs/user-guide/elastic-bare-metal-server-overview) (excluding GPU-accelerated compute-optimized ECS Bare Metal Instance types)

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_hpc\_prepay\_c

Maximum number of vCPUs for subscription high-performance computing (HPC) instances (scc)

[SCC instance types](/help/en/ecs/user-guide/overview-40) (excluding GPU-accelerated compute-optimized instance types)

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_high\_mem\_prepay\_c

Maximum number of vCPUs for subscription memory-optimized instances (re and se series)

-   [re7p high-memory instance family](/help/en/ecs/user-guide/enhanced-instance-families/#re7p)
    
-   [re6p persistent memory-optimized instance family](/help/en/ecs/user-guide/enhanced-instance-families/#re6p)
    
-   [re6p persistent memory-optimized instance family](/help/en/ecs/user-guide/enhanced-instance-families/#re6p)
    
-   [re4, high-memory instance family](/help/en/ecs/user-guide/enhanced-instance-families/#re4)
    
-   [re4e, high-memory instance family](/help/en/ecs/user-guide/enhanced-instance-families/#re4e)
    
-   [se1ne, network-enhanced memory-optimized instance family](/help/en/ecs/user-guide/memory-optimized-instance-families-1#se1ne)
    
-   [se1, memory-optimized instance family](/help/en/ecs/user-guide/memory-optimized-instance-families-1#se1)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_enterprise\_prepay\_c

Maximum number of vCPUs for subscription enterprise-level compute instances (g, c, r, u, hf, and sn series)

-   [General-purpose instance families (g series)](/help/en/ecs/user-guide/general-purpose-instance-families)
    
-   [Compute-optimized instance families (c series)](/help/en/ecs/user-guide/compute-optimized-instance-families)
    
-   [Enhanced instance families](/help/en/ecs/user-guide/enhanced-instance-families/) (excluding re6p, re6, and re4)
    
-   [Memory-optimized instance families (r series)](/help/en/ecs/user-guide/memory-optimized-instance-families-1#re7p) (excluding se1ne and se1)
    
-   [Universal instance families (U instances)](/help/en/ecs/user-guide/general-work-force)
    
-   [High frequency instance families (hf series)](/help/en/ecs/user-guide/instance-families-with-high-clock-speeds)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_restrict\_postpay\_c

vCPU limit for pay-as-you-go instances of instance classes with purchase limits

-   [xn4, n4, mn4, and e4, previous-generation shared instance families](/help/en/ecs/user-guide/shared-instance-families#section-9zj-1ov-92r)
    
-   [Discontinued instance types](/help/en/ecs/user-guide/retired-instance-types#re4e)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_local\_storage\_postpay\_c

Maximum number of vCPUs for pay-as-you-go instances with local storage (d and i series)

-   [Big data instance families (d series)](/help/en/ecs/user-guide/big-data-instance-families)
    
-   [Instance families with local SSDs (i series)](/help/en/ecs/user-guide/instance-families-with-local-ssds)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_share\_postpay\_c

Maximum number of vCPUs for pay-as-you-go shared entry-level instances (e and t series)

-   [e, economy instance family](/help/en/ecs/user-guide/shared-instance-families#e)
    
-   [t6, burstable instance family](/help/en/ecs/user-guide/burst-performance-instance-overview#section-6gl-pk7-f56)
    
-   [t5, burstable instance family](/help/en/ecs/user-guide/burst-performance-instance-overview#section-mq2-x7y-0jl)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_ebm\_postpay\_c

Maximum number of vCPUs for pay-as-you-go ECS Bare Metal Instances (ebm)

[ECS Bare Metal Instance types](/help/en/ecs/user-guide/elastic-bare-metal-server-overview) (excluding GPU-accelerated compute-optimized ECS Bare Metal Instance types)

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_hpc\_postpay\_c

Maximum number of vCPUs for pay-as-you-go HPC instances (scc)

[SCC instance types](/help/en/ecs/user-guide/overview-40) (excluding GPU-accelerated compute-optimized)

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_high\_mem\_postpay\_c

Maximum number of vCPUs for pay-as-you-go memory-optimized instances (re and se series)

-   [re7p high-memory instance family](/help/en/ecs/user-guide/enhanced-instance-families/#re7p)
    
-   [re6p persistent memory-optimized instance family](/help/en/ecs/user-guide/enhanced-instance-families/#re6p)
    
-   [re6p persistent memory-optimized instance family](/help/en/ecs/user-guide/enhanced-instance-families/#re6p)
    
-   [re4, high-memory instance family](/help/en/ecs/user-guide/enhanced-instance-families/#re4)
    
-   [re4e, high-memory instance family](/help/en/ecs/user-guide/enhanced-instance-families/#re4e)
    
-   [se1ne, network-enhanced memory-optimized instance family](/help/en/ecs/user-guide/memory-optimized-instance-families-1#se1ne)
    
-   [se1, memory-optimized instance family](/help/en/ecs/user-guide/memory-optimized-instance-families-1#se1)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_enterprise\_postpay\_c

Maximum number of vCPUs for pay-as-you-go enterprise-level compute instances (g, c, r, u, hf, and sn series)

-   [General-purpose instance families (g series)](/help/en/ecs/user-guide/general-purpose-instance-families)
    
-   [Compute-optimized instance families (c series)](/help/en/ecs/user-guide/compute-optimized-instance-families)
    
-   [Enhanced instance families](/help/en/ecs/user-guide/enhanced-instance-families/) (excluding re6p, re6, and re4)
    
-   [Memory-optimized instance families (r series)](/help/en/ecs/user-guide/memory-optimized-instance-families-1#re7p) (excluding se1ne and se1)
    
-   [Universal instance families (U instances)](/help/en/ecs/user-guide/general-work-force#re7p)
    
-   [High frequency instance families (hf series)](/help/en/ecs/user-guide/instance-families-with-high-clock-speeds)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_restrict\_spot\_c

vCPU quota for preemptible instances

-   [xn4, n4, mn4, and e4, previous-generation shared instance families](/help/en/ecs/user-guide/shared-instance-families#section-9zj-1ov-92r)
    
-   [Discontinued instance types](/help/en/ecs/user-guide/retired-instance-types#re4e)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_local\_storage\_spot\_c

Maximum number of vCPUs for spot instances with local storage (d and i series)

-   [Big data instance families (d series)](/help/en/ecs/user-guide/big-data-instance-families)
    
-   [Instance families with local SSDs (i series)](/help/en/ecs/user-guide/instance-families-with-local-ssds)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_share\_spot\_c

Maximum number of vCPUs for spot shared entry-level instances (e and t series)

-   [e, economy instance family](/help/en/ecs/user-guide/shared-instance-families#e)
    
-   [t6, burstable instance family](/help/en/ecs/user-guide/burst-performance-instance-overview#section-6gl-pk7-f56)
    
-   [t5, burstable instance family](/help/en/ecs/user-guide/burst-performance-instance-overview#section-mq2-x7y-0jl)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_ebm\_spot\_c

Maximum number of vCPUs for spot ECS Bare Metal Instances (ebm)

[ECS Bare Metal Instance types](/help/en/ecs/user-guide/elastic-bare-metal-server-overview) (excluding GPU-accelerated compute-optimized ECS Bare Metal Instance types)

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_hpc\_spot\_c

vCPU limit for preemptible high-performance computing (HPC) instances (scc)

[SCC instance types](/help/en/ecs/user-guide/overview-40) (excluding GPU-accelerated compute-optimized)

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_high\_mem\_spot\_c

Maximum number of vCPUs for spot memory-optimized instances (re and se series)

-   [re7p high-memory instance family](/help/en/ecs/user-guide/enhanced-instance-families/#re7p)
    
-   [re6p persistent memory-optimized instance family](/help/en/ecs/user-guide/enhanced-instance-families/#re6p)
    
-   [re6p persistent memory-optimized instance family](/help/en/ecs/user-guide/enhanced-instance-families/#re6p)
    
-   [re4, high-memory instance family](/help/en/ecs/user-guide/enhanced-instance-families/#re4)
    
-   [re4e, high-memory instance family](/help/en/ecs/user-guide/enhanced-instance-families/#re4e)
    
-   [se1ne, network-enhanced memory-optimized instance family](/help/en/ecs/user-guide/memory-optimized-instance-families-1#se1ne)
    
-   [se1, memory-optimized instance family](/help/en/ecs/user-guide/memory-optimized-instance-families-1#se1)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_enterprise\_spot\_c

Maximum number of vCPUs for spot enterprise-level compute instances (g, c, r, u, hf, and sn series)

-   [General-purpose instance families (g series)](/help/en/ecs/user-guide/general-purpose-instance-families)
    
-   [Compute-optimized instance families (c series)](/help/en/ecs/user-guide/compute-optimized-instance-families)
    
-   [Enhanced instance families](/help/en/ecs/user-guide/enhanced-instance-families/) (excluding re6p, re6, and re4)
    
-   [Memory-optimized instance families (r series)](/help/en/ecs/user-guide/memory-optimized-instance-families-1#re7p) (excluding se1ne and se1)
    
-   [Universal instance families (U instances)](/help/en/ecs/user-guide/general-work-force#re7p)
    
-   [High frequency instance families (hf series)](/help/en/ecs/user-guide/instance-families-with-high-clock-speeds)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

### **GPU and vGPU quotas**

**Note**

When you view a quota, the value indicates the maximum number of GPUs or vGPU instances for a single Alibaba Cloud account in the current region, not the total number of GPUs or vGPU instances across all regions.

**Quota ID**

**Quota description**

**Applicable instance families (Click a link to view the instance types of an instance family.)**

**Quota**

**How to increase quota**

q\_ecs\_ag\_prepay\_g

Maximum number of GPUs for ARM-based GPU-accelerated subscription instances

[ebmgn6ia, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/retired-instance-types#section-cig-esp-uiv)

Use the quota ID to view the quota. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_vgpu\_prepay\_g

Maximum number of subscription vGPU-accelerated instances

-   [sgn8ia, vGPU-accelerated instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#sgn8ia)
    
-   [sgn7i-vws (shared CPU), vGPU-accelerated instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-7ae-lxh-zw5)
    
-   [vgn7i-vws, vGPU-accelerated instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-7ae-lxh-zw5)
    
-   [vgn6i-vws, vGPU-accelerated instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#vgn7i-vws)
    
-   [vgn6i, vGPU-accelerated instance family](/help/en/ecs/user-guide/retired-instance-types#section-dti-hon-urw)
    
-   [vgn5i, vGPU-accelerated instance family](/help/en/ecs/user-guide/retired-instance-types#vgn6i)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn7i\_prepay\_g

The maximum number of GPUs for subscription ebmgn7i/gn7s instances

-   [gn7i, GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#1e1b34c035zgf)
    
-   [Elastic GPU Service (gn/vgn/sgn series)](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#7388b68035rz1)
    
-   [ebmgn7i, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#ebmgn7i)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn5\_prepay\_g

The maximum number of GPUs for subscription gn5 and gn5i instances

-   [gn5, GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#gn5)
    
-   [gn5i, GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-ye9-eyj-ek2)
    

You can use the quota ID to view the quota. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn6i\_prepay\_g

Maximum number of GPUs for subscription instances in the gn6i family

-   [gn6i, GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-e88-tau-vwf)
    
-   [ebmgn6i, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#section-slz-oyd-k1t)
    

You can use the quota ID to view the quota. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn6v\_prepay\_g

Maximum number of GPUs for subscription ebmgn6v instances

-   [gn6v, GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-698-e4v-7rh)
    
-   [ebmgn6v, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#section-lke-80h-kzu)
    

Use the quota ID to view the quota. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn6e\_prepay\_g

Maximum number of GPUs for subscription gn6e and ebmgn6e instances

-   [gn6e, GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-8gr-min-yk3)
    
-   [ebmgn6e, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#section-xyl-5bo-wez)
    

You can use the quota ID to view the quota. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn8i\_prepay\_g

Maximum number of GPUs for subscription (ebm) gn8is series GPU-accelerated instances

-   [Elastic GPU Service (gn/vgn/sgn series)](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#8a109660ecmmx)
    
-   [ebmgn8is (GPU-accelerated compute-optimized ECS Bare Metal Instance family)](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#ebmgn8is)
    

You can use the quota ID to view the quota. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn7v\_prepay\_g

Maximum number of GPUs for subscription (ebm)gn7 instance families

-   [gn7, GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-4xh-rvo-jxy)
    
-   [ebmgn7, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#section-71m-cxy-5ct)
    

You can use the quota ID to view the quota. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn7e\_prepay\_g

Maximum number of GPUs for subscription instances in the (ebm)gn7e instance families

-   [gn7e, GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#11b8bc2035lit)
    
-   [ebmgn7e, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#section-w3a-unf-ttk)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn8v\_prepay\_g

Maximum number of GPUs for subscription instances of the gn8v instance family

-   [gn8v/gn8v-tee, GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#gn8v)
    
-   [ebmgn8v, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#ebmgn8v)
    

You can view the quota using the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_ag\_postpay\_g

Maximum number of GPUs for pay-as-you-go ARM-based GPU-accelerated instances

[ebmgn6ia, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/retired-instance-types#section-cig-esp-uiv)

You can use the quota ID to view the quota. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_vgpu\_postpay\_g

Maximum number of pay-as-you-go vGPU-accelerated instances

-   [sgn8ia vGPU-accelerated instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#sgn8ia)
    
-   [sgn7i-vws (shared CPU) vGPU-accelerated instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-7ae-lxh-zw5)
    
-   [vgn7i-vws vGPU-accelerated instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-7ae-lxh-zw5)
    
-   [vgn6i-vws: vGPU-accelerated instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#vgn7i-vws)
    
-   [vgn6i vGPU-accelerated instance family](/help/en/ecs/user-guide/retired-instance-types#section-dti-hon-urw)
    
-   [vgn5i, vGPU-accelerated instance family](/help/en/ecs/user-guide/retired-instance-types#vgn6i)
    

You can use a quota ID to view a quota. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn7i\_postpay\_g

Maximum number of GPUs for pay-as-you-go ebmgn7i/gn7s instances

-   [gn7i GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#1e1b34c035zgf)
    
-   [Elastic GPU Service (gn, vgn, and sgn)](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#7388b68035rz1)
    
-   [ebmgn7i GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#ebmgn7i)
    

You can view a quota by specifying its quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn5\_postpay\_g

GPU quota for pay-as-you-go gn5/gn5i series GPU-accelerated instances

-   [gn5, a GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#gn5)
    
-   [gn5i GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-ye9-eyj-ek2)
    

You can view a quota by specifying its quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn6i\_postpay\_g

GPU limits for pay-as-you-go ebmgn6i GPU-accelerated instances

-   [gn6i GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-e88-tau-vwf)
    
-   [ebmgn6i: GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#section-slz-oyd-k1t)
    

You can view the quota using its quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn6v\_postpay\_g

Maximum number of GPUs for pay-as-you-go ebmgn6v GPU-accelerated instances

-   [gn6v GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-698-e4v-7rh)
    
-   [ebmgn6v GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#section-lke-80h-kzu)
    

To view a quota, specify its quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn6e\_postpay\_g

Maximum number of cards for gn6e-series pay-as-you-go (ebm) GPU-accelerated instances

-   [gn6e GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-8gr-min-yk3)
    
-   [ebmgn6e: GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#section-xyl-5bo-wez)
    

You can view a quota using its quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn8i\_postpay\_g

Maximum number of GPUs for pay-as-you-go ECS Bare Metal (ebm) gn8is series GPU-accelerated instances

-   [Elastic GPU Service (gn/vgn/sgn series)](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#8a109660ecmmx)
    
-   [ebmgn8is GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#ebmgn8is)
    

You can view the quota using its quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn7v\_postpay\_g

Maximum number of GPUs for pay-as-you-go ebmgn7 instances

-   [gn7 GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-4xh-rvo-jxy)
    
-   [ebmgn7: GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#section-71m-cxy-5ct)
    

You can use the quota ID to view the quota. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn7e\_postpay\_g

Maximum number of GPUs for pay-as-you-go (ebm)gn7e GPU-accelerated instances

-   [gn7e, a GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#11b8bc2035lit)
    
-   [ebmgn7e, a GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#section-w3a-unf-ttk)
    

To view a quota, use its quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn8v\_postpay\_g

Maximum number of GPUs for pay-as-you-go (ebm) gn8v series instances

-   [gn8v/gn8v-tee, GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#gn8v)
    
-   [ebmgn8v, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#ebmgn8v)
    

To view the quota, use the quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_ag\_spot\_g

GPU card limits for preemptible ARM-based GPU instance classes

[ebmgn6ia GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/retired-instance-types#section-cig-esp-uiv)

You can view a specific quota using its quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase quotas for ECS instance types](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_vgpu\_spot\_g

Preemptible vGPU instance quota

-   [sgn8ia vGPU-accelerated instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#sgn8ia)
    
-   [sgn7i-vws vGPU-accelerated instance family (shared CPU)](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-7ae-lxh-zw5)
    
-   [vgn7i-vws vGPU-accelerated instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-7ae-lxh-zw5)
    
-   [vgn6i-vws: vGPU-accelerated instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#vgn7i-vws)
    
-   [vgn6i vGPU-accelerated instance family](/help/en/ecs/user-guide/retired-instance-types#section-dti-hon-urw)
    
-   [vgn5i, vGPU-accelerated instance family](/help/en/ecs/user-guide/retired-instance-types#vgn6i)
    

You can use a quota ID to view a quota. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase quotas for ECS instance types](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn7i\_spot\_g

Limit on GPU cards for preemptible (ebm)gn7i/gn7s GPU-accelerated instances

-   [gn7i GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#1e1b34c035zgf)
    
-   [Elastic GPU Service (gn, vgn, and sgn)](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#7388b68035rz1)
    
-   [ebmgn7i GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#ebmgn7i)
    

You can view a quota by specifying its quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn5\_spot\_g

GPU quota for preemptible gn5 and gn5i GPU-accelerated instances

-   [gn5 GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#gn5)
    
-   [gn5i GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-ye9-eyj-ek2)
    

You can view a quota by specifying its quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn6i\_spot\_g

GPU limits for preemptible ebmgn6i GPU-accelerated instances

-   [gn6i GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-e88-tau-vwf)
    
-   [ebmgn6i GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#section-slz-oyd-k1t)
    

You can view the quota using its quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn6v\_spot\_g

Maximum number of GPU cards for preemptible GPU-accelerated instances in the gn6v series (ebm)

-   [gn6v GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-698-e4v-7rh)
    
-   [ebmgn6v GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#section-lke-80h-kzu)
    

You can view a quota by specifying its quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase quotas for ECS instance types](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn6e\_spot\_g

Preemptible (ebm) gn6e GPU-accelerated instance family: maximum number of GPUs

-   [gn6e GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-8gr-min-yk3)
    
-   [ebmgn6e: GPU-accelerated compute-optimized ECS Bare Metal Instance Family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#section-xyl-5bo-wez)
    

You can look up a quota by its quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase quotas for ECS instance types](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn8i\_spot\_g

Maximum number of GPUs for spot (EBM) gn8is instances

-   [Elastic GPU Service (gn/vgn/sgn series)](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#8a109660ecmmx)
    
-   [ebmgn8is, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#ebmgn8is)
    

You can view the quota using its quota ID. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn7v\_spot\_g

GPU limits for preemptible (ebm) gn7 series GPU-accelerated instances

-   [gn7 GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-4xh-rvo-jxy)
    
-   [ebmgn7: GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#section-71m-cxy-5ct)
    

You can use the quota ID to view the quota. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase quotas for ECS instance types](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn7e\_spot\_g

Maximum number of GPUs for spot instances in the ebmgn7e series

-   [gn7e instance family (GPU-accelerated compute-optimized)](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#11b8bc2035lit)
    
-   [ebmgn7e, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#section-w3a-unf-ttk)
    

Use the quota ID to view the quota. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

q\_ecs\_gn8v\_spot\_g

The maximum number of GPUs for preemptible instances of the gn8v instance family

-   [gn8v/gn8v-tee, GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#gn8v)
    
-   [ebmgn8v, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#ebmgn8v)
    

You can use the quota ID to view the quota. For more information, see [View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw).

[View or increase ECS instance type quotas](/help/en/ecs/user-guide/quota-management#c3adabff96ubw)

## Image

**Restriction item**

**Limit**

**How to increase quota**

Maximum number of custom images that a single Alibaba Cloud account can have in a specific region

To view the quota, use the quota ID `q_user-image-count`. For more information, see [View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l).

[View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l)

Maximum number of users with whom a single custom image can be shared

To view the quota, use the quota ID `q_user-per-image-shared-user-count`. For more information, see [View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l).

[View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l)

Limits on images and instance types

Instance types with 4 GiB or more of memory cannot use 32-bit images.

Not applicable

For more information, see [Overview](/help/en/ecs/user-guide/image-overview).

## Block storage

**Restriction item**

**Limit**

**How to increase quota**

Number of system disks per instance

1 unit

Not applicable

Number of data disks per instance

The maximum number of disks that can be attached to an instance varies by instance type. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).

**Note**

The maximum number of disks that can be attached to an instance is determined by its type. You can query this limit by calling the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes#doc-api-Ecs-DescribeInstanceTypes) operation. When you create an instance, you can specify a maximum of 1 system disk and 64 data disks. The actual number is subject to what is displayed in the console. If you need more data disks, you can attach them after the instance is created.

Not applicable

Disk capacity quota for a single Alibaba Cloud account in a specific region and zone

The capacity quota varies by disk type. You can view the quota for each disk type. For more information, see [View or increase block storage quotas](/help/en/ecs/user-guide/quota-management#11b7b157fc5vb).

[View or increase block storage quotas](/help/en/ecs/user-guide/quota-management#11b7b157fc5vb)

Capacity of a single basic disk

5 GiB to 2,000 GiB

Not applicable

Capacity of a single standard SSD

20 GiB to 32,768 GiB

Not applicable

Capacity of a single ultra disk

20 GiB to 32,768 GiB

Not applicable

Capacity of a single ESSD

-   PL0: 1 GiB to 65,536 GiB
    
-   PL1: 20 GiB to 65,536 GiB
    
-   PL2: 461 GiB to 65,536 GiB
    
-   PL3: 1,261 GiB to 65,536 GiB
    

Not applicable

Capacity of a single ESSD AutoPL disk

1 GiB to 65,536 GiB

Not applicable

Single ESSD Entry disk

10 GiB to 32,768 GiB

Not applicable

A single regional Enterprise SSD (ESSD) cloud disk

1 GiB to 65,536 GiB

Not applicable

Capacity of a single local SSD

Depends on the instance type, ranging from 5 GiB to 7,152 GiB

Not applicable

Total capacity of local SSDs per instance

Depends on the instance type, with a maximum of 8 × 7,152 GiB

Not applicable

Capacity of a single elastic ephemeral disk

64 GiB to 8,192 GiB

Not applicable

Capacity limit for a single system disk

-   Windows Server: 40 GiB to 2,048 GiB
    
-   FreeBSD: 30 GiB to 2,048 GiB
    
-   Other Linux operating systems: 20 GiB to 2,048 GiB
    

**Note**

When a basic disk (a previous-generation disk product that is being phased out) is used as a system disk, its maximum capacity is 500 GiB.

Not applicable

Whether you can attach new local disks to an instance with local disks

Not allowed.

Not applicable

Whether instances with local disks support configuration changes

Only bandwidth changes are allowed.

Not applicable

Mount point range for Linux system disks

`/dev/vda`

Not applicable

Mount point range for Linux data disks

The naming of mount points varies with the number of attached data disks:

-   1 to 25 data disks: `/dev/vd[b-z]`.
    
-   More than 25 data disks: `/dev/vd[aa-zz]`. For example, the 26th data disk is named `/dev/vdaa`, the 27th is `/dev/vdab`, and so on.
    

Not applicable

**Note**

Block storage capacity is measured in binary units, which express data sizes using base 1024. For example, 1 GiB equals 1,024 MiB.

For more information about block storage, see [Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).

## Snapshots

**Restriction item**

**Limit**

**How to increase quota**

Number of manual snapshots that can be retained for a single disk

2,000

Not applicable

Number of automatic snapshots that can be retained for a single disk

2,000

Not applicable

Number of archived snapshots that can be retained for a single disk

10,000

Not applicable

Number of automatic snapshot policies that a single Alibaba Cloud account can retain in a single region

100

Not applicable

Number of automatic snapshot policies that can be set for a single disk

10

Not applicable

Number of concurrent snapshots that can be created for a single disk

-   Enterprise SSD (ESSD) series disks (ESSDs, ESSD AutoPL disks, ESSD Entry disks, and Regional ESSDs): 10
    
-   Legacy disks (standard SSDs, ultra disks, and basic disks): 1
    

Not applicable

Number of concurrent archived snapshots that can be created for a single disk

10

Not applicable

Block storage types

-   You cannot create snapshots for local disks or elastic ephemeral disks.
    
-   Only ESSD series disks (ESSDs, ESSD AutoPL disks, and ESSD Entry disks) for which the multi-attach feature is disabled support the snapshot-consistent group feature. For information about the multi-attach feature, see [Multi-attach](/help/en/ecs/user-guide/enable-multi-attach).
    
-   Only ESSD series disks (ESSDs, ESSD AutoPL disks, ESSD Entry disks, and Regional ESSDs) support the IA feature. For more information, see [Snapshot instant access](/help/en/ecs/user-guide/enable-or-disable-the-instant-access-feature).
    

Not applicable

Download or export snapshots

You cannot download or export created snapshots.

You can [create custom images from snapshots](/help/en/ecs/user-guide/create-a-custom-image-from-a-snapshot) and [export the custom images](/help/en/ecs/user-guide/export-a-custom-image) to your on-premises device.

Not applicable

Constraints on creating manual and automatic snapshots

-   ESSD series disks (ESSD, ESSD AutoPL, ESSD Entry, and ESSD zone-redundant disks)
    
    A single disk supports the concurrent creation of manual and automatic snapshots. However, the number of concurrent snapshots that can be created is limited. For more information, see [Snapshot limits](/help/en/ecs/user-guide/limitations#SnapshotQuota). If the number of concurrent snapshots that are being created for a disk reaches the upper limit, subsequent snapshot creation tasks fail.
    
-   Previous generation disks (standard SSDs, ultra disks, and basic disks)
    
    -   Concurrent creation of manual and automatic snapshots is not supported.
        
    -   At the point in time when an automatic snapshot is scheduled to be created, if a snapshot (manual or automatic) is being created for the disk, the system does not create an automatic snapshot at this point in time. An automatic snapshot is created at the next scheduled point in time.
        
    -   If an automatic snapshot is being created for a disk, you must wait for the automatic snapshot to be created before you can manually create a snapshot.
        

Not applicable

For more information about snapshots, see [Overview](/help/en/ecs/user-guide/snapshot-overview).

## SSH key pairs

**Restriction item**

**Limit**

**How to increase quota**

SSH key pair quota for a single Alibaba Cloud account in a single region

500

Not applicable

Image types that support SSH key pairs

Only Linux is supported.

Not applicable

For more information, see [Manage SSH key pairs](/help/en/ecs/user-guide/ssh-key-pairs/).

## Public bandwidth

-   The total peak bandwidth limit applies to all pay-as-you-go and spot instances that use the pay-by-bandwidth billing method under a single Alibaba Cloud account in a single region.
    
    **Note**
    
    If you need a higher bandwidth limit, you can view and request to increase the quota using the quota ID `q_internet-bandwidth-pay-by-bandwidth-of-postpaid-instance`. For more information, see [View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l).
    
    **Region Name**
    
    **Limit**
    
    China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen)
    
    50 Gbps
    
    China (Hong Kong) and Singapore
    
    20 Gbps
    
    Other
    
    10 Gbps
    

-   Starting from November 27, 2020, the peak bandwidth for creating and changing the configuration of ECS instances is affected by account-level rate limiting policies:
    
    **Note**
    
    If you need a higher peak bandwidth, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    
    -   In a single region, the total **actual peak bandwidth** of all **pay-by-traffic** ECS instances under a single Alibaba Cloud account cannot exceed 5 Gbps.
        
    -   In a single region, the total **actual peak bandwidth** of all **pay-by-bandwidth** ECS instances under a single Alibaba Cloud account cannot exceed 50 Gbps.
        

-   Limits on the peak bandwidth and public IP address replacement for a single instance:
    
    **Important**
    
    For the **pay-by-traffic** billing method, the inbound and outbound peak bandwidth values are upper limits and are not guaranteed. During periods of resource contention, the peak bandwidth may be limited. If your business requires guaranteed bandwidth, use the **pay-by-bandwidth** billing method.
    
    **Restriction item**
    
    **Limit**
    
    **How to increase quota**
    
    Peak inbound bandwidth for a single instance
    
    -   If the purchased outbound peak bandwidth is 10 Mbit/s or less, Alibaba Cloud allocates 10 Mbit/s of inbound bandwidth.
        
    -   If the purchased outbound peak bandwidth is greater than 10 Mbit/s, Alibaba Cloud allocates inbound bandwidth equal to the purchased outbound peak bandwidth.
        
    
    Not applicable
    
    Peak outbound bandwidth for a single instance
    
    -   Pay-by-traffic:
        
        -   Subscription instances: 200 Mbit/s
            
        -   Pay-as-you-go instances: 100 Mbit/s
            
    -   Pay-by-bandwidth: 200 Mbit/s
        
    
    **Note**
    
    -   The public bandwidth limit for a single ECS instance also depends on the instance type. You can view the **Baseline Network Bandwidth** metric in the [Instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb) list. The total public bandwidth of a single instance will not exceed this limit.
        
    -   Some instance types, such as ecs.t6-c4m1.large, ecs.t6-c2m1.large, ecs.t6-c1m1.large, and ecs.t6-c1m4.large, are limited by the baseline network bandwidth to a peak of 80 Mbit/s.
        
    
    Not applicable
    
    Limit on replacing the public IP address of a single instance
    
    Replace the public IP address of a new instance within six hours of its creation. An instance's public IP address can be replaced a maximum of three times.
    
    Not applicable
    

For more information about public bandwidth, see [Public bandwidth](/help/en/ecs/user-guide/network-bandwidth/#section-9fs-zkw-9ca).

## Elastic Network Interfaces

**Restriction item**

**Limit**

**How to increase quota**

Maximum number of ENIs (secondary ENIs) that a single Alibaba Cloud account can create in a specific region

To view the quota, use the quota ID `q_elastic-network-interfaces`. For more information, see [View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l).

[View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l)

VPC and zone limits for attaching ENIs to an instance

The instance and the attached ENI must be in the same VPC and the same zone.

-   Multiple ENIs attached to an instance can belong to different vSwitches in the same VPC and zone.
    
-   If you attach two or more ENIs from the same vSwitch to an instance, you may encounter network issues such as asymmetric routing. Assign one or more secondary private IP addresses to an ENI (primary or secondary) to achieve high utilization of VPC-type ECS instances and traffic failover. For more information, see [Secondary private IP addresses](/help/en/ecs/user-guide/assign-secondary-private-ip-addresses#concept-ff2-hbk-ggb).
    

Not applicable

Maximum number of ENIs that can be attached to a single instance

The number of ENIs that can be attached to an instance is determined by the instance type. For more information, see the **Elastic Network Interface** column in [Instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).

Not applicable

For more information about elastic network interfaces (ENIs), see [Overview](/help/en/ecs/user-guide/eni-overview).

## Prefix lists

**Restriction item**

**Limit**

**How to increase quota**

Maximum number of prefix lists for a single Alibaba Cloud account in a single region

100

Not applicable

Maximum number of entries in a single prefix list

200

Not applicable

Maximum number of associated instances for a single prefix list

1,000

Not applicable

For more information, see [Prefix List Overview](/help/en/ecs/user-guide/overview-32).

## Security groups

**Restriction**

**Basic security group limits**

**Enterprise security group limits**

Maximum number of security groups for a single Alibaba Cloud account in a specific region

To view or increase this quota, use the quota ID `q_security-groups`. For more information, see [View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l).

Same as for basic security groups

Number of security groups that can be associated with a single Elastic Network Interface (ENI)

10

Same as for basic security groups

Maximum number of rules (inbound and outbound) for all security groups associated with a single ENI

1,000

Same as for basic security groups

Maximum number of rules per security group that specify another security group as the authorization object

20

0\. You cannot add rules that use a security group as the authorization object to an enterprise security group. You also cannot use an enterprise security group as the authorization object in other security group rules.

Number of ECS instances that a security group in a virtual private cloud (VPC) can contain

This number is not fixed. It depends on the number of private IP addresses that the security group can contain.

No limit

Maximum number of private IP addresses that a security group in a VPC can contain per Alibaba Cloud account in a region

6,000

**Note**

-   The number of used IP addresses is calculated based on the number of private IP addresses on the ENIs (including the primary and secondary ENIs of an instance) associated with a security group. This count is the sum of all IP address types, such as primary private IPv4, IPv6, secondary private IPv4, IPv4 prefixes, and IPv6 prefixes.
    
-   If you have more than 6,000 private IP addresses to access each other over the internal network, add the ECS instances which use the private IP addresses, to multiple security groups, and configure security group rules to allow access between the security groups.
    
-   You can view the maximum number of private IP addresses in a basic security group in a VPC in the [Quota Center](https://quotas.console.alibabacloud.com/products/ecs/quotas?spm=a2c4g.11186623.0.0.376656addmG73f) by using the quota ID `q_vpc-normal-security-group-ip-count`.
    

65,536

**Note**

The number of used IP addresses represents the total number of ENIs associated with a security group, including both primary and secondary network interfaces of an instance.

Public port access

For security reasons, port 25 on ECS instances is restricted by default. We recommend that you use an SSL-encrypted port, such as port 465, to send emails.

Same as for basic security groups

For more information about security groups, see [Overview](/help/en/ecs/user-guide/overview-44).

## Reserved instances

**Restriction item**

**Limit**

**How to increase quota**

Total number of regional reserved instances for a single Alibaba Cloud account across all regions

20

[Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm)

Number of zonal reserved instances for a single Alibaba Cloud account in a single zone

20

[Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm)

Reserved instance types

The gn6i and t5 instance families do not support regional reserved instances, splitting, or merging.

**Note**

The available instance types are displayed on the purchase page.

Not applicable

Resource types that can be offset

-   Only pay-as-you-go instances (excluding spot instances) can be offset.
    
-   Only the costs of computing resources (vCPUs and memory) can be offset. Costs for resources such as network and storage cannot be offset. For more information about ECS instance billing, see [Billing overview](/help/en/ecs/billing-overview).
    
-   Windows-type reserved instances also support offsetting image costs.
    
    **Note**
    
    The cost of a Windows image is included when you purchase a Windows-type reserved instance. This can offset the image portion of the bill for pay-as-you-go instances that run Windows.
    

Not applicable

For more information, see [What is a reserved instance?](/help/en/ecs/reserved-instances).

## Savings plans

**Restriction item**

**Limitations**

**How to increase quota**

Number of savings plans a single Alibaba Cloud account can purchase

200

Not applicable

Resource types that can be offset

-   Only pay-as-you-go ECS and ECI instances (excluding spot instances) can be offset. For more information about offset items and rules, see [Savings plan offset items and rules](/help/en/ecs/savings-plan-credit-rules).
    
-   For ECS instances, only the following can be offset: computing resources (vCPUs and memory), images, system disks, data disks (including capacity fees, provisioned performance fees, and performance burst fees), and fixed public bandwidth. For more information about ECS instance billing, see [Billing overview](/help/en/ecs/billing-overview).
    
-   For ECI instances (with unspecified instance types), only computing resources (vCPUs and memory) can be offset. For more information about ECI instance billing, see [ECI instance billing](/help/en/eci/product-overview/elastic-container-instances).
    

Not applicable

For more information about savings plans, see [What is a savings plan?](/help/en/ecs/savings-plans).

## Storage Capacity Unit

**Restriction item**

**Limit**

**How to increase quota**

Maximum capacity of an SCU that can be purchased at a time

50 TiB

[Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm)

Maximum number of SCUs that can be purchased in a single region

100

Not applicable

Product types supported by SCUs

-   ESSDs, standard SSDs, ultra disks, and basic disks.
    
-   Capacity NAS file systems and Performance NAS file systems.
    
-   Standard snapshots.
    
-   Standard, Infrequent Access (IA), and Archive OSS.
    
-   Storage capacity of Cloud Backup backup vaults.
    
-   Photo Album and Cloud Storage.
    

Not applicable

Offset type

Only pay-as-you-go bills can be offset. Pay-as-you-go bills for disks of spot instances cannot be offset.

Not applicable

Effective time

Set an effective time. The effective time cannot be more than six months after the creation time.

Not applicable

Create and manage SCUs using an API

Not supported.

Not applicable

For more information about SCUs, see [Storage Capacity Unit (SCU)](/help/en/ecs/storage-capacity-units-1).

## **Launch templates**

**Limits**

**Limit**

**How to increase the quota**

The maximum number of launch templates that an Alibaba Cloud account can have in a region

To view the quota, use the quota ID `q_launch-template-count`. For more information, see [View or increase Elastic Compute Service quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l).

[View or increase Elastic Compute Service quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l)

The maximum number of versions that a launch template can have in a region

To view the quota, use the quota ID `q_launch-template-version-count`. For more information, see [View or increase Elastic Compute Service quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l).

[View or increase Elastic Compute Service quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l)

Launch template parameters

All parameters are optional when you create a launch template. However, if the launch template does not include required parameters, such as the instance type and image, you must provide these parameters when you use the template to create an instance.

Not applicable

Modifying a launch template

You cannot modify a launch template after it is created. To change configuration parameters, you must create a new version of the launch template. For more information, see [Manage launch template versions](/help/en/ecs/user-guide/create-a-launch-template-version).

Not applicable

For more information, see [Launch template overview](/help/en/ecs/user-guide/overview-30).

## Deployment sets

**Restriction item**

**Limit**

**How to increase quota**

Maximum number of deployment sets that a single Alibaba Cloud account can have in a specific region

To view the quota, use the quota ID `q_deployment-set-count`. For more information, see [View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l).

[View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l)

Number of instances that a single deployment set can contain

The number of instances a deployment set can contain depends on the deployment strategy you choose. For more information, see [Deployment strategies](/help/en/ecs/user-guide/overview-43#d20ee9a121x8p).

Not applicable

Create a dedicated host in a deployment set

Deployment sets do not support creating dedicated hosts.

Not applicable

Region and zone limits

An instance and its deployment set must be in the same region. For deployment sets with a low-latency network strategy, all instances must be in the same zone.

Not applicable

Instance types that can be created in a deployment set

Different deployment strategies support only specific instance families. You can call the [DescribeDeploymentSetSupportedInstanceTypeFamily](/help/en/ecs/api-describedeploymentsetsupportedinstancetypefamily#doc-api-Ecs-DescribeDeploymentSetSupportedInstanceTypeFamily) operation and specify a deployment strategy to get the supported instance families.

Not applicable

Merge deployment sets

Deployment sets cannot be merged.

Not applicable

For more information, see [Deployment sets](/help/en/ecs/user-guide/overview-43).

## **Auto provisioning groups**

**Restriction item**

**Limit**

**How to increase quota**

Provision instances across regions

Auto provisioning groups do not support provisioning instances across regions.

Not applicable

Maximum number of configuration sources that can be specified for a single auto provisioning group

A single auto provisioning group can specify a maximum of one specific version of a launch template as the basic configuration for instances. However, you can extend the instance types in the template to form multiple resource pools.

Not applicable

Maximum number of resource pools that can be set for a single auto provisioning group

A single auto provisioning group supports a maximum of 20 resource pools (combinations of zones and instance types).

Not applicable

Maximum number of instances that can be created in a single auto provisioning group

1000

Not applicable

For more information, see [Overview](/help/en/ecs/user-guide/overview-46).

## Cloud Assistant

**Restriction**

**Restrictions**

**How to request a quota increase**

Maximum number of Cloud Assistant commands per Alibaba Cloud account in a region

To view the quota, use the quota ID `q_axt-command-count`. For more information, see [View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l).

[View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l)

Output size limit for Cloud Assistant tasks per Alibaba Cloud account in a region

To view the quota, use the quota ID `q_axt-task-output-size`. For more information, see [View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l).

Not applicable

Retention period for Cloud Assistant task output per Alibaba Cloud account in a region

To view the quota, use the quota ID `q_axt-task-output-life`. For more information, see [View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l).

Not applicable

Maximum number of activation codes for Cloud Assistant managed instances per Alibaba Cloud account in a region

To view the quota, use the quota ID `q_cloud-assistant-activation-count`. For more information, see [View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l).

Not applicable

Maximum number of instances for command execution per Alibaba Cloud account in a region

To view the quota, use the quota ID `q_task-instance-count`. For more information, see [View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l).

[View or increase ECS quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l)

Scenarios and file size limits for Base64-encoded scripts (Bat, PowerShell, or Shell) and custom parameters

-   Create command: The size of the script after Base64 encoding cannot exceed 18 KB.
    
-   Run and save command: The size of the script cannot exceed 18 KB.
    
-   Run command without saving: The size of the script cannot exceed 24 KB.
    
-   Upload file: The size of the file cannot exceed 32 KB.
    

Not applicable

Maximum number of custom parameters per command

20

Not applicable

Operating system

You can run Cloud Assistant commands only on the following operating systems:

-   Alibaba Cloud Linux
    
-   CentOS 6, 7, 8, and later
    
-   CoreOS
    
-   Debian 8, 9, 10, and later
    
-   OpenSUSE
    
-   Red Hat Enterprise Linux 5, 6, 7, and later
    
    **Note**
    
    For Red Hat Enterprise Linux, you must download and install the RPM package for the Cloud Assistant Agent. For more information, see [Install the Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent).
    
-   SUSE Linux Enterprise Server 11, 12, 15, and later
    
-   Ubuntu 12, 14, 16, 18, and later
    
-   FreeBSD 11, 12, 13, 14, and later
    
-   Windows Server 2012, 2016, 2019, and later
    

**Note**

-   The Cloud Assistant Agent is installed by default on instances created from ECS public images.
    
-   For instances created from custom images or Alibaba Cloud Marketplace images, you must confirm that the operating system is supported and then install the Cloud Assistant Agent. For more information, see [Install the Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent).
    

Not applicable

For more information about Cloud Assistant, see [Cloud Assistant overview](/help/en/ecs/user-guide/overview-10).

## Network connectivity diagnosis

**Restriction item**

**Limit**

**How to increase quota**

Maximum number of diagnostic lines in a single region

100

Not applicable

Maximum number of diagnostic tasks in a single region

1,000

Not applicable

Maximum number of concurrent diagnostic tasks in a single region

5

Not applicable

For more information, see [Diagnose network connectivity](/help/en/ecs/user-guide/diagnose-network-connectivity).

## API

**Restriction item**

**Limits**

**How to increase quota**

API rate limit

An API rate limit is a constraint on the frequency of OpenAPI calls. It is categorized into two types based on the API version and resource type:

-   **Elastic Compute Service** API rate limit: This applies to APIs with the version `2014-05-26` for resources such as images, security groups, and block storage.
    
    For more information about how to view the ECS API rate limit, see [View the ECS API rate limit](/help/en/ecs/user-guide/quota-management#714a7a8311xar).
    
-   **Elastic Block Storage** API rate limit: This applies to advanced feature APIs for block storage with the version `2021-07-30`.
    
    For more information about how to view the Elastic Block Storage API rate limit, see [View or increase the Elastic Block Storage API rate limit](/help/en/ecs/user-guide/quota-management#51930117d0ac1).
    

-   **Elastic Compute Service** API rate limit: You cannot request to increase this type of API rate limit.
    
-   **Elastic Block Storage** API rate limit: You can request to increase this quota. For more information, see [View or increase the Elastic Block Storage API rate limit](/help/en/ecs/user-guide/quota-management#51930117d0ac1).
    

For more information about ECS APIs, see [Integration overview](/help/en/ecs/developer-reference/integration-overview).
