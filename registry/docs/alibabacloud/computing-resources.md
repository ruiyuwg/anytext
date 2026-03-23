Computing resources are the core components of CloudBox, including vCPUs and memory resources. When you purchase a cloud box, you must purchase computing resources. This topic describes the billing method of the computing resources of CloudBox, and the types of compute stock keeping units (SKUs) that you can purchase.

## Billing

CloudBox provides computing resources in compute SKUs. Each SKU has different vCPU and memory specifications. A cloud box contains at least one compute SKU. You can purchase multiple compute SKUs of different types and quantities based on your business requirements. For more information, see the "Compute SKU specifications" section of the [Computing resources](#section-pqy-1zc-joq) topic.

You are charged based on the unit price, quantity, and subscription duration of the purchased compute SKUs. Formula: Fees for compute SKUs = Unit price of SKUs × Number of SKUs × Subscription duration.

-   Unit price: The unit price of each compute SKU varies with the number of vCPUs and the memory size in the compute SKU.
    
    **Note**
    
    Log on to the [CloudBox console](https://ecs.console.alibabacloud.com/cloudBox/region/cn-hangzhou/boxList) to view the specifications and prices of compute SKUs.
    
-   Number: You can purchase multiple compute SKUs for each compute SKU type.
    
-   Subscription duration: Compute SKUs are purchased on a yearly basis. If you purchase a cloud box for the first time, the initial subscription duration must be three or five years.
    

## Payment

The fees for computing resources and other resources purchased in the same cloud box order are paid together. The subscription billing method is supported. You can select All Upfront or Half Upfront as the payment option.

-   All Upfront: You must pay all the fees at the time of purchase.
    
-   Half Upfront: You can first pay 50% of the fees and then pay the remaining fees by month.
    
    After you confirm the completion of a cloud box order, Alibaba Cloud generates an installment bill on the first day of each subsequent month. The first installment bill arrives in the month after your order completion confirmation. The amount of each installment bill is calculated based on the following formula: Outstanding payment/Number of months in your subscription duration. Make sure that you maintain a sufficient balance within your account and pay the bills at the earliest opportunity. If you do not pay a bill within seven calendar days after you receive the bill, your cloud box cannot run as expected.
    

## Compute SKU specifications

Compute SKUs are the core compute units of CloudBox. A compute SKU specifies the number of vCPUs and the memory size. Each compute SKU provides the instance type of the highest specifications among its family and determines the instance family and number of Elastic Compute Service (ECS) instances in a cloud box. The following table describes the instance types of the highest specifications provided by compute SKUs.

**Note**

For more information about how to configure computing resources for a cloud box, see [Best practices for configuring computing resources for a cloud box](/help/en/cloud-box/use-cases/best-practices-for-configuring-computing-resources-for-a-cloud-box#main-2352622).

**Instance type of the highest specifications**

**Type**

**Description**

**Other instance types of the same instance family**

[ecs.g6.26xlarge](/help/en/ecs/user-guide/general-purpose-instance-families#section-gck-bi6-q6l)

General-purpose

-   Offers a vCPU-to-memory ratio of 1:4.
    
-   Uses 2.5 GHz Intel ® Xeon ® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz.
    

Examples: ecs.g6.large and ecs.g6.xlarge

[ecs.c6.26xlarge](/help/en/ecs/user-guide/compute-optimized-instance-families#section-0yl-3wv-ims)

Compute-optimized

-   Offers a vCPU-to-memory ratio of 1:2.
    
-   Uses 2.5 GHz Intel ® Xeon ® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz.
    

Examples: ecs.c6.large and ecs.c6.xlarge

[ecs.r6.26xlarge](/help/en/ecs/user-guide/memory-optimized-instance-families-1#section-qcw-6gn-p4u)

Memory-optimized

-   Offers a vCPU-to-memory ratio of 1:8.
    
-   Uses 2.5 GHz Intel ® Xeon ® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz.
    

Examples: ecs.r6.large and ecs.r6.xlarge

[ecs.gn6i-c24g1.24xlarge](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1#section-e88-tau-vwf)

GPU-accelerated compute-optimized

-   Offers a vCPU-to-memory ratio of 1:4.
    
-   Uses 2.5 GHz Intel ® Xeon ® Platinum 8163 (Skylake) processors.
    
-   GPU accelerator: NVIDIA T4.
    

Examples: ecs.gn6i-c4g1.xlarge and ecs.gn6i-c8g1.2xlarge

ecs.g6se.26xlarge

Storage-enhanced

-   Offers a vCPU-to-memory ratio of 1:4.
    
-   Uses 2.5 GHz Intel ® Xeon ® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz.
    
-   Provides enhanced storage and delivers a sequential read/write throughput of up to 32 Gbit/s per instance.
    

Examples: ecs.g6se.large and ecs.g6se.xlarge

When you create an ECS instance, you can select other instance types that belong to the same instance family as the instance type of the highest specifications. The vCPU-to-memory ratio of instance types in the same instance family is the same. For example, if the instance type of the highest specifications supported by the purchased compute SKU is ecs.g6.26xlarge and the vCPU-to-memory ratio of this instance type is 1:4, you can choose ecs.g6.large of 2 vCPUs and 8 GiB of memory or ecs.g6.xlarge of 4 vCPUs and 16 GiB of memory when you create an ECS instance.

Compute SKUs are classified into **general-purpose compute units**, **compute-optimized units**, **memory-optimized units**, and **GPU-accelerated compute-optimized units** based on scenarios. You can purchase multiple types of compute SKUs to combine multiple instance types.

**Note**

If the specifications of existing compute SKUs do not meet your business requirements, you can contact your account manager to customize the specifications of compute SKUs.

Table 1. General-purpose compute units

**SKU ID**

**vCPU**

**Memory (GiB)**

**Instance type of the highest specifications**

**Instance quantity**

**Description**

OR-3EAB470501

208

768

ecs.g6.26xlarge

2

A small general-purpose unit that is suitable for running applications in scenarios such as retail or enterprise.

OR-2DDFCB757E

312

1152

ecs.g6.26xlarge

3

A small and medium-sized general-purpose compute-optimized unit that is suitable for running applications in I/O-intensive scenarios such as medium-sized and large online transaction processing (OLTP) databases.

OR-E651CE3606

416

1536

ecs.g6.26xlarge

4

A small and medium-sized general-purpose unit that is suitable for running applications in scenarios such as retail or enterprise.

OR-9E266697B6

520

1920

ecs.g6.26xlarge

5

A medium-sized general-purpose unit that is suitable for running applications in scenarios such as point-of-sale systems or enterprise workspaces.

OR-724E59CD09

624

2304

ecs.g6.26xlarge

6

A medium-sized general-purpose unit that is suitable for running applications in scenarios such as sales systems or enterprise workspaces.

OR-A8B62E9514

936

3456

ecs.g6.26xlarge

9

A large general-purpose unit that is suitable for running IoT applications that can store and manage sensor data.

OR-68B18B81EE

624

2688

ecs.g6.26xlarge

2

A medium-sized hybrid capacity unit that is suitable for running applications of multiple teams on a single cloud box.

ecs.c6.26xlarge

2

ecs.r6.26xlarge

2

OR-218DCFD832

936

3648

ecs.g6.26xlarge

4

A large hybrid capacity unit that is suitable for running different applications on a single cloud box and sharing capacity.

ecs.c6.26xlarge

3

ecs.r6.26xlarge

2

OR-B900CF0F79

624

1728

ecs.g6.26xlarge

3

A medium-sized general-purpose compute unit that is suitable for running applications that require high-performance computing.

ecs.c6.26xlarge

3

OR-2603EC27DF

936

2880

ecs.g6.26xlarge

6

A large general-purpose compute unit that is suitable for running compute-intensive applications.

ecs.c6.26xlarge

3

OR-6BF6AC9C02

416

1536

ecs.g6se.26xlarge

4

A small and medium-sized general-purpose compute unit that is suitable for running I/O-intensive applications such as large and medium-sized OLTP core databases.

OR-715AEEC381

936

3456

ecs.g6se.26xlarge

9

A large and medium-sized general-purpose compute unit that is suitable for running I/O-intensive applications such as large and medium-sized OLTP core databases.

Table 2. Compute-optimized units

**SKU ID**

**vCPU**

**Memory (GiB)**

**Instance type of the highest specifications**

**Instance quantity**

**Description**

OR-BC72F47D81

208

384

ecs.c6.26xlarge

2

A small compute-optimized unit that is suitable for running compute-intensive applications.

OR-8E676BE2D7

416

768

ecs.c6.26xlarge

4

A small and medium-sized compute-optimized unit that is suitable for running compute-intensive applications.

OR-D4ADF7B9A7

936

1728

ecs.c6.26xlarge

9

A medium-sized compute-optimized unit that is suitable for running compute-intensive applications.

OR-E05A0A94CB

624

1536

ecs.c6.26xlarge

4

A medium-sized general-purpose compute unit that is suitable for running applications that require high-performance computing.

ecs.g6.26xlarge

2

OR-EFC36249B2

936

2304

ecs.c6.26xlarge

6

A large general-purpose compute unit that is suitable for running applications that require high-performance computing.

ecs.g6.26xlarge

3

Table 3. Memory-optimized units

**SKU ID**

**vCPU**

**Memory (GiB)**

**Instance type of the highest specifications**

**Instance quantity**

**Description**

OR-A6A14CF18D

624

3840

ecs.r6.26xlarge

4

A small memory-optimized unit that is suitable for running on-premises databases that provide the memory analysis feature.

ecs.g6.26xlarge

2

OR-31D9EEAC15

624

4608

ecs.r6.26xlarge

6

A medium-sized memory-optimized unit that is suitable for running on-premises databases that provide the memory analysis feature.

OR-D598F0C820

832

6144

ecs.r6.26xlarge

8

A large memory-optimized unit that is suitable for running large on-premises databases.

Table 4. GPU-accelerated compute-optimized units

**SKU ID**

**vCPU**

**Memory (GiB)**

**GPU**

**Instance type of the highest specifications**

**Instance quantity**

**Description**

OR-FD8C1EA2E4

592

2256

NVIDIA T4 \* 16

ecs.gn6i-c24g1.24xlarge

4

-   Suitable for processing AI-based deep learning computing tasks such as image classification, object recognition, video moderation, character recognition, and speech recognition.
    
-   Suitable for processing professional graphics tasks such as image rendering, industrial 3D design, and non-linear video editing.
    

ecs.g6.26xlarge

2

OR-48E9DF43BC

304

1140

NVIDIA T4 \* 4

ecs.gn6i-c24g1.24xlarge

1

-   Suitable for processing AI-based deep learning computing tasks such as image classification, object recognition, video moderation, character recognition, and speech recognition.
    
-   Suitable for processing professional graphics tasks such as image rendering, industrial 3D design, and non-linear video editing.
    

ecs.g6.26xlarge

2

## **Reference**

For more information about how to purchase computing resources for a cloud box, see [Purchase resources for a cloud box](/help/en/cloud-box/user-guide/purchase-resources-for-a-cloud-box).
