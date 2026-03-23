The billable items of Function Compute include CU usage and outbound Internet traffic. The resource usage items include **the number of function invocations**, **active vCPU usage**, **idle vCPU usage**, **memory usage**, **disk usage**, **active GPU usage (including Tesla series and Ada series)**, and **idle GPU usage (including Tesla series and Ada series)**. The vCPU usage, memory usage, disk usage, and GPU usage are calculated based on **the specifications that you configure for your function and the usage durations**. **The resource usage is then multiplied by the CU conversion factor** to calculate the CU usage. The final cost for Function Compute is calculated based on the CU usage multiplied by the unit price of CUs. The total amount of Internet data transfers of Function Compute and other Alibaba Cloud services that provide access to the Internet can be accumulated to generate bills in Cloud Data Transfer (CDT).

-   **Resource usage items**
    
    Resource usage items refer to the actual measured usage of resources, but do not contribute to the final billing and invoicing process.
    
-   **Billable items**
    
    Billable items are derived from the conversion and aggregation of resource usage items. Billable items serve as the basis for the final billing and invoicing process.
    

You can log on to the [Function Compute console](https://fc.console.alibabacloud.com/overview) and view the following information in the **Resource Usage Statistics** section of the **Overview** page: **the number of function invocations**, **active vCPU usage**, **idle vCPU usage**, **memory usage**, **disk usage**, **active GPU usage (including Tesla series and Ada series)**, **idle GPU usage (including Tesla series and Ada series)**, and **CU usage**. The resource usage of all RAM users is summed to the Alibaba Cloud account. The statistics are collected and billed in the Alibaba Cloud account.

**Note**

-   Starting from 00:00 on January 5, 2024, CDT is used to bill the outbound Internet traffic of Function Compute. You are charged for Internet traffic based on the billing rules of CDT. For more information, see [Supported services](/help/en/cdt/product-overview/supported-services-and-billing-methods#conbody-4m4-mx3-z92). For more information, see [\[Product changes\] Change of free Internet traffic quota](/help/en/functioncompute/fc/product-overview/public-network-traffic-free-quota-change).
    
-   Starting August 27, 2024, the original billable items of Function Compute, including **the number of function invocations**, **active vCPU usage**, **idle vCPU usage**, **memory usage**, **active GPU usage**, **idle GPU usage**, and **disk usage**, are no longer used. The preceding resource usage is converted to **CU usage** based on the conversion factors. You are charged based on the prices of **CU usage**. The CU conversion factors vary based on different resource types. For more information, see [](#3639ba590f9js).
    
-   If your Function Compute resources access other Alibaba Cloud services, pay attention to the billing of the related services.
    

## **Billing cycle**

You are charged for using Function Compute resources on an hourly basis. The CU usage of each function in each hour is rounded up and the CU usage of all functions is summed to calculate the total CU usage. If you have purchased a resource plan, the resource plan is used to offset the CU usage. After the resource plan is exhausted or expires, hourly fees are generated.

## **Resource usage items**

**Resource usage item**

**Unit**

**Description**

**Billing example**

**Function invocations**

N/A

Each execution of the function is counted as one invocation, and the cost is calculated based on the number of invocations.

Each execution of the function is counted as one invocation.

**Active vCPU usage**

vCPU-second

Active vCPU usage = vCPU specification × Execution duration (seconds)

For example, if the function is configured with 1 vCPU, runs for 1,500 ms, and is billed for a duration of 1,500 ms, the active vCPU usage for a single run is calculated by using the following formula: 1 × (1,500/1,000) = 1.5 vCPU-second.

**Idle vCPU usage**

vCPU-second

Idle vCPU usage = vCPU specification × Idle duration (seconds)

Not billed

**Memory usage**

GB-second

Memory usage = Memory specification × Execution duration (seconds)

For example, if the function is configured with 512 MB of memory, runs for 1,500 ms, and is billed for a duration of 1,500 ms, the memory usage for a single run is calculated by using the following formula: (512/1,024) × (1,500/1,000) = 0.75 GB-second.

**Disk usage**

GB-second

Disk usage = Disk specification × Execution duration (seconds)

Note: Disk usage up to 512 MB is free of charge.

For example, if the function is configured with a temporary disk size of 10 GB and runs for 1 second, the disk usage for a single run is calculated by using the following formula: (10 - 512/1,024) × 1 = 9.5 GB-second.

**Active GPU Usage**

GB-second

Active GPU usage = GPU specification × Execution duration (seconds)

For example, if the function is configured with 48 GB of Ada GPU memory and runs for 1 second, the active GPU usage for a single run is calculated by using the following formula: 48 × 1 = 48 GB-second.

**Idle GPU usage**

GB-second

Idle GPU usage = GPU capacity (GB) × Idle duration (seconds)

For example, if the function is configured with 48 GB of Ada GPU memory and the function instance is provisioned for 50 hours, in which the instance is in active mode for 10 hours and in idle mode for 40 hours, the idle GPU usage during this period is calculated by using the following formula: 48 × 40 × 3,600 = 6,912,000 GB-second.

### **Terms**

#### **Execution duration**

The execution duration is measured from the time when the function instance starts to execute requests until the requests are executed. The measurement of the execution duration of instances in the provisioned and on-demand modes varies.

-   On-demand mode: Function Compute automatically allocates and releases function instances. The billing of an on-demand function instance starts when the function instance starts to execute requests and ends when the requests are executed.
    
-   Provisioned mode: Function instances are allocated, released, and managed by you. The billing of a provisioned instance starts when Function Compute allocates the instance and ends when you release the instance. If your provisioned instances do not process requests and fees continue to be generated, release the instances at the earliest opportunity. For more information, see [Configure provisioned instances](/help/en/functioncompute/fc/user-guide/configure-launch-snapshot-and-auto-scaling-rules#section-l1c-ctl-9kp).
    

#### **Idle duration**

For a provisioned instance, if no requests are being executed on the instance after the idle mode is enabled, the instance enters the idle state. The idle resource usage is calculated based on **the corresponding function specifications multiplied by the idle duration**.

##### **Billing method**

-   **Active instance**
    
    Generally, instances that are processing requests are active instances. In the provisioned mode, instances are always active if you do not enable the idle mode. The billing of these provisioned instances starts when the instances are allocated and ends when you release the instances. Therefore, you are charged for the provisioned instances based on active mode prices even if they are not processing any requests if the instances are not released and the idle mode is not enabled.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1119337371/CAEQLxiBgIDPkKK2mhkiIGZmM2U5MWE1MDhiNDQ1MGM4M2YxMDhkZWJkMGRiNzli3963382_20230830144006.372.svg)
    
-   **Idle instances**
    
    For a provisioned instance, if no requests are being executed on the instance after the idle mode is enabled, the instance enters the idle state. By default, the idle mode is enabled for CPU instances and disabled for GPU-accelerated instances. You can manually enable the idle mode for GPU-accelerated instances. After the idle mode is enabled, Function Compute freezes GPU or vCPU resources for provisioned instances that are not processing requests and the instances enter the idle state, in which you are charged at much lower prices. For more information, see [CU conversion factors](/help/en/functioncompute/fc/product-overview/billing-overview-of-fc#3639ba590f9js).
    
    In the example shown in the following figure, the idle mode is enabled and the billing of provisioned instances starts when the provisioned instances are created and ends when the provisioned instances are released, When a provisioned instance is not processing requests, the instance enters the idle state. The instance enters the active state when it starts to process requests. Fees are calculated based on the following formula: `Fee = (Total idle resource usage x Unit price of idle resources) + (Total active resource usage x Unit price of active resource)`.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1119337371/CAEQLxiBgIDFibrJmhkiIDE2MDU1MDM0ZjI5NjQ4ODY5ZjdhOGM4Y2E4ODUyYmVk4730742_20241025163604.539.svg)

## Billable items and unit prices

Starting August 27, 2024, Function Compute uses CU usage as a billable item. **CU usage** is billed monthly on a tiered basis. The following table describes the details.

**Tier**

**CU usage (CU)**

**Unit price**

**Discounted unit price**

August 27, 2024 to August 27, 2025

1

(0, 100 million\]

USD 0.000020/CU

USD 0.0000160/CU

2

(100 million, 500 million\]

USD 0.000017/CU

USD 0.0000136/CU

3

\> 500 million

USD 0.000014/CU

USD 0.0000112/CU

### **CU conversion factors**

The billable items of Function Compute, including **the number of function invocations**, **active vCPU usage**, **idle vCPU usage**, **memory usage**, **disk usage, active GPU usage**, and **idle GPU usage** are converted to **CU usage** based on the following formula: **Resource usage × CU conversion factor = CU usage**.

The following table lists the conversion factors.

**Billable item**

**Function invocations**

**Active vCPU usage**

**Idle vCPU usage**

**Memory usage**

**Disk usage**

**Tesla series**

**Active GPU usage**

**Tesla series**

**Idle GPU usage**

**Ada series**

**Active GPU usage**

**Ada series**

**Idle GPU usage**

**Unit**

**CU/10,000 invocations**

**CU/vCPU-second**

**CU/vCPU-second**

**CU/GB-second**

**CU/GB-second**

**CU/GB-second**

**CU/GB-second**

**CU/GB-second**

**CU/GB-second**

CU conversion factor

75

1

0

0.15

0.05

2.1

0.5

1.5

0.25

## **Billing examples**

Assume that you have consumed the following resources in a month: 800 million vCPU-seconds of vCPU usage, 2 billion GB-seconds of memory usage, 0 GB-seconds of disk usage, 100 million GB-seconds of active GPU usage (Tesla series), 400 million GB-seconds of idle GPU usage (Tesla series), and 12 billion function invocations. The following table shows the CU usage and total cost.

**Resource usage type**

**Total usage**

**Conversion factor**

**Converted CU usage**

**Active vCPU usage**

800,000,000 vCPU-seconds

1 CU/vCPU-second

800,000,000 CU

**Memory usage**

2,000,000,000 GB-seconds

0.15 CU/GB-second

300,000,000 CU

**Disk usage**

0 GB-seconds

0.05 CU/GB-second

Note: Disk usage up to 512 MB is free of charge. You are charged for disk capacity that exceeds 512 MB.

0 CU

**Tesla series**

**Active GPU usage**

100,000,000 GB-seconds

2.1 CU/GB-second

210,000,000 CU

**Tesla series**

**Idle GPU usage**

400,000,000 GB-seconds

0.5 CU/GB-second

200,000,000 CU

**Function invocations**

12,000,000,000 invocations

0.0075 CU/invocation

90,000,000 CU

**Total CU usage**: 1,600,000,000 CUs

Fee = Tier 1 unit price × Tier 1 usage + Tier 2 unit price × Tier 2 usage + Tier 3 unit price × Tier 3 usage = USD 0.000020/CU × 100,000,000 CUs + USD 0.000017/CU × 400,000,000 CUs + USD 0.000014/CU × 1,100,000,000 CUs = USD 24,200

**Important**

The vCPU usage, memory usage, disk usage, and GPU usage are calculated based on the specifications that you configure for your function and durations of usage, not based on the actual amount of consumed resources during function invocations.

## **Billing examples of provisioned instances**

### CPU instances

This section provides a billing example of provisioned CPU instances. In this example, you have created a function that has the following configurations: 0.35 vCPUs, 512 MB of memory, and 512 MB of disk size. Instances of the functions are provisioned for 50 hours, in which the instances are in active mode for 10 hours and in idle mode for 40 hours. A total of 1 million invocations are initiated. The following table lists the CU usage and the total billable amount.

**Note**

In provisioned mode of CPU instances, memory usage and disk usage are billed based on the total execution duration. The active vCPU usage is billed based on the active execution duration.

**Resource usage type**

**Usage**

**Conversion factor**

**Equivalent CU usage**

**Active vCPU usage**

12,600 vCPU-seconds

1 CU/vCPU-second

12,600 CU

**Idle vCPU usage**

50,400 vCPU-seconds

0 CU/vCPU-second

Note: No fees are incurred for idle vCPUs.

0 CU

**Memory usage**

90,000 GB-seconds

0.15 CU/GB-second

13,500 CU

**Disk usage**

0 GB-seconds

0.05 CU/GB-second

Note: Disk usage up to 512 MB is free of charge. You are charged for disk capacity that exceeds 512 MB.

0 CU

**Function invocations**

1 million operations

0.0075 CU/invocation

7,500 CU

**Total CU usage**: 33,600 CUs

Fee = Tier 1 unit price × Tier 1 usage = USD 0.000020/CU × 33,600 CUs = USD 0.67

### GPU-accelerated instances

This section provides a billing example of GPU-accelerated instances. In this example, you have created a GPU function that has the following configurations: 16 GB of Tesla series GPU cards, 8 vCPUs, 32 GB of memory, and 512 MB of disk size. Instances of the function are provisioned for 50 hours, in which the instances are in active mode for 10 hours and in idle mode for 40 hours. A total of 1 million invocations are initiated. The following table lists the CU usage and the total billable amount.

**Note**

In provisioned mode of GPU-accelerated instances, memory usage and disk usage are billed based on the total execution duration. The active vCPU and GPU usage is billed based on the active execution duration. vCPUs and GPUs of GPU-accelerated instances are frozen when no requests are made to the instances.

**Resource usage type**

**Usage**

**Conversion factor**

**Equivalent CU usage**

**Active vCPU usage**

288,000 vCPU-seconds

1 CU/vCPU-second

288,000 CU

**Idle vCPU usage**

1,152,000 vCPU-seconds

0 CU/vCPU-second

Note: No fees are generated for idle vCPUs.

0 CU

**Memory usage**

5,760,000 GB-seconds

0.15 CU/GB-second

864,000 CU

**Disk usage**

0 GB-seconds

0.05 CU/GB-second

Note: Disk usage up to 512 MB is free of charge. You are charged for disk capacity that exceeds 512 MB.

0 CU

**Tesla series**

**Active GPU Usage**

576,000 GB-seconds

2.1 CU/GB-second

1,209,600 CU

**Tesla series**

**Idle GPU usage**

2,304,000 GB-seconds

0.5 CU/GB-second

1,152,000 CU

**Function invocations**

1,000,000 invocations

0.0075 CU/invocation

7,500 CU

**Total CU usage**: 3,521,100 CUs

Fee = Tier 1 unit price × Tier 1 usage = USD 0.000020/CU × 3,521,100 CUs = USD 70.42

## FAQ

-   [Am I charged after I purchase a free trial plan?](/help/en/functioncompute/fc/product-overview/faq-about-billing#7622db1183jeh)
    
-   [After I purchase a trial plan, my account has overdue payments. How do I view the overdue payments, and why do I have overdue payments?](/help/en/functioncompute/fc/product-overview/faq-about-billing#9a3b941283phr)
    
-   [Why am I still being charged after I suspend Function Compute?](/help/en/functioncompute/fc/product-overview/faq-about-billing#title-p4n-cyw-qq1)
    
-   [What resource usage items are involved in the running of GPU-accelerated instances?](/help/en/functioncompute/fc/product-overview/faq-about-billing#b1b36be083bpj)
    
-   [Can I use my resource plan to offset fees across regions?](/help/en/functioncompute/fc/product-overview/faq-about-billing#section-2ob-xg7-2cy)
    
-   [How do I unsubscribe from Function Compute if I have an overdue payment and no longer want to use the service? How do I settle an overdue bill?](/help/en/functioncompute/fc/product-overview/faq-about-billing#31395d301edta)
    
-   [Can I unsubscribe from notifications of Function Compute?](/help/en/functioncompute/fc/product-overview/faq-about-billing#3e26156af8t96)
