This topic describes the billing rules and examples for computing resources of Elastic Container Instance.

**Note**

This topic mainly describes the billing rules for computing resources of Elastic Container Instance. If you use image caches, increase the size of the temporary storage space, or configure an elastic IP address (EIP) when you create an elastic container instance, you are also charged for the use of these resources.

## Billing

One of the following billing modes is applied based on how you create an elastic container instance.

**Billing rule**

**Billing based on vCPU and memory specifications**

**Billing based on the ECS instance type**

Billing overview

In this mode, you are charged for elastic container instances based on the vCPU and memory specifications that you specify when you create the elastic container instances. If the vCPU and memory specifications that you specify are not supported by Elastic Container Instance, the system automatically adjusts the specifications. Then, the system charges you based on the adjusted specifications.

In this mode, you are charged for elastic container instances based on the ECS instance types that you specify when you create the elastic container instances.

For example, if you want to use GPU-accelerated capabilities, you can specify the ecs.gn5i-c4g1.xlarge instance type when you create elastic container instances.

Billing method

Elastic container instances are billed on a pay-as-you-go basis. Bills are generated on an hourly basis for the amount of seconds the instance was in use.

Elastic container instances are billed on a pay-as-you-go basis. Bills are generated on an hourly basis for the amount of seconds the instance was in use.

Cost optimization

General-purpose savings plans

-   General-purpose or ECS compute savings plans
    
-   Reserved instances
    
-   Preemptible Instances
    
    **Note**
    
    You can create a preemptible instance by specifying an ECS instance type, or by specifying the number of vCPUs and memory size. When you create a preemptible instance by specifying the number of vCPUs and memory size, the system automatically selects an ECS instance type that meets your requirements for the number of vCPUs, memory size, and prices. The created preemptible instance is billed based on the real-time discounted market price of the used ECS instance type, instead of the pay-as-you-go prices of the vCPU and memory resources that are used by the elastic container instance.
    

Billing formula

Fees for a single instance = (Number of vCPUs × Unit price of vCPUs + Memory size × Unit price of memory) × Billing duration

Fees for a single instance = Unit price of the ECS instance type × Billing duration

Resource price

-   Unit price of vCPUs (1 vCPU): USD 0.0000077/second (USD 0.02772 hour)
    
-   Unit price of memory (1 GiB): USD 0.00000096/second (USD 0.003456/hour)
    

**Note**

-   The unit price of vCPUs for elastic container instances that are crated based on ECS economy compute instance types is USD 0.00000424/second (USD 0.015264/hour).
    
-   The prices that are displayed on the buy page and in bills take precedence.
    

Prices of an ECS instance type may vary based on the region. For more information, see the [ECS pricing page](https://www.alibabacloud.com/product/ecs).

Billing duration

The billing duration of an elastic container instance begins when the container image starts being pulled and ends when the instance stops running. When the container image is being pulled, the instance is in the Pending state. When the instance stops running, the instance enters the Succeeded or Failed state. You are not charged for elastic container instances that fail to be created or started. For more information, see [Lifecycle of elastic container instances](/help/en/eci/user-guide/lifecycle-of-an-elastic-container-instance-1#topic700).

If you do not require special specifications such as GPUs and local disks, we recommend that you specify the number of vCPUs and memory size to create elastic container instances. This way, the system tries multiple ECS instance types to create elastic container instances to ensure resource provisioning. For example, if you want to create an elastic container instance that has 2 vCPUs and 4 GiB memory, the system tries multiple ECS instance types such as ecs.c6.large, ecs.c5.large, and ecs.sn1ne.large to create the elastic container instance based on resource availability.

**Important**

Each elastic container instance is billed based on your requested resources instead of the actual vCPU utilization and memory usage. For example, you create an elastic container instance that has 2 vCPUs and 4 GiB memory. The average vCPU utilization of the instance is 20% and the memory usage is 60%. The instance is billed based on the specifications of 2 vCPUs and 4 GiB memory, instead of the vCPU utilization and memory usage.

## Billing examples

The billable items of elastic container instances vary based on how you create the instances. The following examples show how to calculate the price of an elastic container instance:

**Note**

The following examples are provided only for reference. The prices in your bills take precedence.

### Example 1: Billed by the vCPU and memory specifications

An elastic container instance is created based on the following specifications: 2 vCPUs and 4 GiB memory. The hourly price of the instance is calculated based on the following formula:

-   vCPU: 0.0000077 × 3600 × 2 = USD 0.05544
    
-   Memory: 0.00000096 × 3600 × 4 = USD 0.013824
    

Billable items in the bill are vCPU and Memory, whose codes are cpu and mem. The following figure shows an example.![计费示例3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9873980561/p423112.png)

### Example 2: Billed by the ECS instance type

You create an elastic container instance in the China (Hangzhou) region by specifying the ecs.c6.large instance type. The unit price of ecs.c6.large is USD 0.06/hour for the region, so the hourly price of the instance is USD 0.06.

The billable item in the bill is Instance Type, whose code is instance\_type. The following figure shows an example.![计费示例4](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9873980561/p423374.png)

## Cost optimization

For different business workloads, you can use a combination of savings plans, reserved instances, and preemptible instances to optimize your instance usage costs. ![计费方式 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0876073161/p210832.png)

The following table describes the billing options.

Billing option

Description

References

Savings plan

A plan that can be used together with pay-as-you-go elastic container instances. Savings plans are suitable for stable services that run 24/7 over a long period of time. Savings plans have a slightly higher cost than reserved instances but are more flexible because savings plans are not limited by regions or instance families.

Prices of savings plans are determined based on the hourly commitment, payment method, and subscription duration. Savings plans offset bills based on the committed consumption amount.

**Note**

Savings plans are categorized into general-purpose and ECS compute types. ECS compute savings plans can only be applied to the elastic container instances that are created by using specified ECS instance types. General-purpose savings plans have no limits on ECS instance types.

-   [Overview](/help/en/ecs/user-guide/what-is-savings-plan#concept-1950740)
    
-   [Use savings plans](/help/en/eci/user-guide/apply-savings-plans-2#topic-2044352)
    

Reserved instance

A discount coupon that can be used together with pay-as-you-go elastic container instances. Reserved instances are suitable for stable services that run 24/7 over a long period of time and require reserved resources. The cost of a reserved instance is similar to the cost of a subscription ECS instance of the same instance type. You must follow specific rules to use reserved instances.

Prices of reserved instances are determined based on the region, instance type, operating system, payment method, and term. Reserved instances offset bills based on the committed resource consumption amount.

**Note**

Reserved instances can only be applied to elastic container instances that are created by using specified ECS instance types. Reserved instances can be applied only if they are matched with elastic container instances.

-   [Overview](/help/en/ecs/user-guide/overview-6#concept-tc4-zhq-dgb)
    
-   [Use reserved instances](/help/en/eci/user-guide/use-reserved-instances#topic649)
    

Preemptible Instance

A type of on-demand instance that is suitable for job-based computing scenarios that have a short running period. Costs of preemptible instances are significantly lower than costs of pay-as-you-go instances. However, prices of preemptible instances change based on the supply and demand of resources. After the protection period expires, preemptible instances may be released due to insufficient resource inventory or bidding that is lower than the market price.

-   [What are preemptible instances?](/help/en/ecs/user-guide/what-is-a-spot-instance#concept-t3p-gv2-5db)
    
-   [Create a preemptible elastic container instance](/help/en/eci/user-guide/create-a-preemptible-elastic-container-instance#topic-2445170)
    

**Note**

You can purchase both savings plans and reserved instances. Reserved instances are preferentially used to offset bills.
