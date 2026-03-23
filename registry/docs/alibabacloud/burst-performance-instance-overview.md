Burstable instances deliver a sustained baseline level of CPU performance and can temporarily burst above it when demand spikes. They cost less than enterprise-level instances and suit workloads with low average CPU usage but occasional peaks.

## How burstable instances work

A burstable instance earns CPU credits at a steady rate determined by its instance type. When CPU utilization stays below the baseline, unused credits accumulate into a credit balance. When a workload spike pushes utilization above the baseline, the instance draws from this balance to sustain higher performance.

Two instance families are available:

-   **t6** -- current-generation burstable instances
    
-   **t5** -- previous-generation burstable instances
    

**Note**

A burstable instance is a specific type of shared instance. For other shared instance families, see [Shared instance families](/help/en/ecs/user-guide/shared-instance-families#concept-ycf-pzy-wgb).

## Key concepts

**Term**

**Description**

**Baseline performance**

The sustained CPU utilization an instance delivers, determined by its instance type.

**Initial CPU credits**

A one-time grant of 30 credits per vCPU at instance creation. Not replenished once consumed.

**CPU credit balance**

Credits that accumulate when the instance earns more than it consumes. Unused credits expire after 24 hours.

**Max CPU credit balance**

The cap on accumulated credits, equal to 24 hours of earned credits.

**Standard mode**

Default mode. CPU utilization cannot exceed the baseline after credits are exhausted.

**Unlimited mode**

CPU utilization can exceed the baseline by consuming advance or overdrawn credits, which may incur extra charges.

**Advance CPU credits**

Credits borrowed from the next 24 hours of earnings. Available only in unlimited mode. May incur charges.

**Overdrawn CPU credits**

Credits consumed after advance credits are depleted. Available only in unlimited mode. Always incurs charges.

## Use cases

With an enterprise-level instance, you pay for full vCPU capacity whether utilization is 0% or 100%. If your workload only peaks during specific periods, most of that capacity goes unused. Burstable instances match cost to actual usage.

Good fits for burstable instances:

-   Web application servers
    
-   Lightweight applications and microservices
    
-   Development, testing, and stress testing environments
    

Select an instance type whose baseline performance covers your off-peak CPU requirements. During peak periods, the instance draws from its credit balance to handle the additional load.

**Note**

-   If a burstable instance type does not meet your needs, change its configuration. For details, see Instance type changes.
    
-   Windows applications and graphical user interfaces (GUIs) require sustained high CPU resources. Running them on t-series instances may cause freezes or crashes. Use a General-purpose (g-series), Compute-optimized (c-series), or Memory-optimized (r-series) instance type instead.
    

## Baseline performance

Each instance type has a fixed baseline CPU performance expressed as a percentage. This is the sustained utilization the instance can maintain indefinitely. Find the baseline for each type in the **Average baseline CPU performance** column of the instance type tables below.

## CPU credits

CPU credits determine the burst capacity of a burstable instance. One CPU credit provides one vCPU running at 100% utilization for one minute.

### Initial credits

Each vCPU receives 30 credits when the instance is created. These credits are consumed first and do not replenish.

**Examples:**

-   `ecs.t5-lc1m2.large` (2 vCPUs): 60 initial credits
    
-   `ecs.t5-c1m1.xlarge` (4 vCPUs): 120 initial credits
    

### Credit earning rate

After startup, the instance earns credits at a fixed rate set by its instance type. The **CPU credits/hour** column in the instance type tables shows the total credits all vCPUs of an instance earn per hour.

**Example:** An `ecs.t5-c1m1.large` instance has a 25% baseline and 2 vCPUs. Each vCPU earns 15 credits/hour, totaling 30 credits/hour. These 30 credits sustain the 2 vCPUs at 25% utilization for one hour, or at 100% utilization for 15 minutes (60 min x 25%).

### Credit balance

When an instance earns more credits than it consumes, the surplus accumulates as a credit balance. Credits expire after 24 hours, so the balance is capped at the maximum shown in the **Max CPU credit balance** column.

**Example:** `ecs.t5-c1m1.large` earns 30 credits/hour, so the maximum balance is 720 (30 x 24).

### Credit consumption

Credit consumption depends on vCPU count, CPU utilization, and duration. Each of these scenarios consumes 1 credit:

-   1 vCPU at 100% for 1 minute
    
-   1 vCPU at 50% for 2 minutes
    
-   2 vCPUs at 25% for 2 minutes
    

Initial credits are consumed first. Once depleted, the instance uses earned credits only:

**CPU utilization vs. baseline**

**Credit balance**

Below baseline

Increases (earning > consumption)

Equal to baseline

Stable (earning = consumption)

Above baseline

Decreases (earning < consumption)

**Note**

CPU utilization for credit consumption is measured at the physical host level, including overhead for virtual machine privileged instruction emulation. View this data in the CloudMonitor console: open the **Host monitoring** page, click an instance ID, then check the **Basic monitoring** tab. For details, see [Host monitoring overview](/help/en/cms/cloudmonitor-1-0/overview-8#concept-ypb-thv-vdb).

### How instance stops affect credit earning

**Scenario**

**Credit balance**

**Credit earning**

Pay-as-you-go instance stopped (standard mode)

Retained

Continues

Pay-as-you-go instance stopped (economical mode)

Expires

Stops. New initial credits granted on restart.

Pay-as-you-go instance stopped (overdue payment)

Retained

Stops. Resumes after payment.

Subscription instance stopped (expired)

Retained

Stops. Resumes on restart.

Subscription instance stopped (before expiration)

Retained

Continues

## Performance modes

Burstable instances run in either **standard mode** (default) or **unlimited mode**.

### Standard mode

Once initial credits and the credit balance are exhausted, performance cannot exceed the baseline. To prevent a sharp drop, performance decreases gradually to the baseline over 15 minutes as credits run low.

Standard mode suits workloads with predictable CPU usage that rarely exceeds the baseline: lightweight web servers, development and test environments, low-to-medium performance databases.

### Unlimited mode

In unlimited mode, the instance sustains CPU utilization above the baseline at any time by consuming advance or overdrawn credits:

-   **Advance CPU credits** -- credits earned over the next 24 hours. May incur extra charges.
    
-   **Overdrawn CPU credits** -- consumed after advance credits are depleted. Always incurs extra charges.
    

**Note**

For more information about extra charges, see [Extra charges](/help/en/ecs/user-guide/billing#section-lqi-vqf-dsc).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0195922771/CAEQUBiBgMCm3Y7V2RkiIDhlZmUwMDA1ZjdjNTRjODc5MTAxZjU0OWJlZjUyZmMz3963382_20230830144006.372.svg)

**Note**

If your instance consumes advance CPU credits and is then stopped (economical mode), undergoes a configuration change, is released, or switches to standard mode before the advance credits are fully replenished, a one-time fee applies for the used credits.

**When to use unlimited mode:**

-   **Planned traffic spikes** -- Enable unlimited mode temporarily for product launches, promotions, or marketing campaigns. Disable it afterward to reduce costs.
    
-   **Daily traffic patterns** -- If average 24-hour CPU utilization stays below the baseline, keep unlimited mode enabled. Credits earned during off-peak hours replenish advance credits consumed during peaks, maintaining performance without extra charges.
    

By default, burstable instances are created in standard mode. To switch, see [Enable unlimited mode](/help/en/ecs/user-guide/switch-the-performance-mode-of-a-burstable-instance#section-cds-zh0-eh7).

For credit change examples, see [CPU credit change examples](/help/en/ecs/user-guide/cpu-credit-change-examples#concept-fl1-tl4-cfb).

## When to change instance types

If monitoring shows that CPU utilization consistently stays above or below the baseline, the current instance type may not fit your workload. Re-evaluate and change the instance type if needed. The procedure depends on the billing method. For details, see [Instance configuration changes overview](/help/en/ecs/user-guide/overview-of-instance-configuration-changes#concept-anb-bbf-5db).

## t6, burstable instance family

Features:

-   Baseline CPU performance with credit-based bursting
    
-   Better cost-performance ratio than t5
    
-   **Processor:** 2.5 GHz base / 3.2 GHz turbo, Intel Xeon Cascade Lake
    
-   **Memory:** DDR4
    
-   **Storage:** I/O optimized. Supports ESSDs, ESSD AutoPL disks, standard SSDs, and ultra disks.
    
-   **Network:** IPv4 and IPv6. VPC only.
    

**Important**

ESSDs at performance level (PL) 2 and PL3 cannot deliver peak performance on burstable instances. Use enterprise-grade instance types or ESSDs at lower PLs instead.

**Use cases:** Web application servers, lightweight applications and microservices, development and testing environments.

### t6 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Average baseline CPU performance**

**CPU credits/hour**

**Max CPU credit balance**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.t6-c4m1.large

2

0.5

5%

6

144

0.08/up to 0.4

40,000

1

2

2

1

ecs.t6-c2m1.large

2

1.0

10%

12

288

0.08/up to 0.6

60,000

1

2

2

1

ecs.t6-c1m1.large

2

2.0

20%

24

576

0.08/up to 1

100,000

1

2

2

1

ecs.t6-c1m2.large

2

4.0

20%

24

576

0.08/up to 1

100,000

1

2

2

1

ecs.t6-c1m4.large

2

8.0

30%

36

864

0.08/up to 1

100,000

1

2

2

1

ecs.t6-c1m4.xlarge

4

16.0

40%

96

2,304

0.16/up to 2

200,000

1

2

6

1

ecs.t6-c1m4.2xlarge

8

32.0

40%

192

4,608

0.32/up to 4

400,000

2

2

6

1

**Note**

-   This family does not support adding secondary elastic network interfaces (ENIs) during instance creation. Attach one after the instance is created. The following types require the instance to be in the **Stopped** state to attach or detach a secondary ENI: `ecs.t6-c1m1.large`, `ecs.t6-c1m2.large`, `ecs.t6-c1m4.large`, `ecs.t6-c2m1.large`, `ecs.t6-c4m1.large`.
    
-   To check regional availability, see the [Instance Types Available for Each Region page](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion).
    
-   For metric definitions, see [Instance type metrics](/help/en/ecs/user-guide/instance-specification-naming-and-classification#ad60bb6239ts8).
    

## t5, burstable instance family

Features:

-   Baseline CPU performance with credit-based bursting
    
-   Balanced compute, memory, and network resources
    
-   **Processor:** 2.5 GHz base, Intel Xeon
    
-   **Memory:** DDR4
    
-   **Storage:** Supports ultra disks and standard SSDs only
    
-   **Network:** IPv4 and IPv6. VPC only.
    

**Use cases:** Web application servers, lightweight applications and microservices, development and testing environments.

### t5 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Average baseline CPU performance**

**CPU credits/hour**

**Max CPU credit balance**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.t5-lc2m1.nano

1

0.5

20%

12

288

0.1

40,000

1

2

2

1

ecs.t5-lc1m1.small

1

1.0

20%

12

288

0.2

60,000

1

2

2

1

ecs.t5-lc1m2.small

1

2.0

20%

12

288

0.2

60,000

1

2

2

1

ecs.t5-lc1m2.large

2

4.0

20%

24

576

0.4

100,000

1

2

2

1

ecs.t5-lc1m4.large

2

8.0

20%

24

576

0.4

100,000

1

2

2

1

ecs.t5-c1m1.large

2

2.0

25%

30

720

0.5

100,000

1

2

2

1

ecs.t5-c1m2.large

2

4.0

25%

30

720

0.5

100,000

1

2

2

1

ecs.t5-c1m4.large

2

8.0

25%

30

720

0.5

100,000

1

2

2

1

ecs.t5-c1m1.xlarge

4

4.0

25%

60

1,440

0.8

200,000

1

2

6

1

ecs.t5-c1m2.xlarge

4

8.0

25%

60

1,440

0.8

200,000

1

2

6

1

ecs.t5-c1m4.xlarge

4

16.0

25%

60

1,440

0.8

200,000

1

2

6

1

ecs.t5-c1m1.2xlarge

8

8.0

25%

120

2,880

1.2

400,000

1

2

6

1

ecs.t5-c1m2.2xlarge

8

16.0

25%

120

2,880

1.2

400,000

1

2

6

1

ecs.t5-c1m4.2xlarge

8

32.0

25%

120

2,880

1.2

400,000

1

2

6

1

ecs.t5-c1m1.4xlarge

16

16.0

25%

240

5,760

1.2

600,000

2

2

6

1

ecs.t5-c1m2.4xlarge

16

32.0

25%

240

5,760

1.2

600,000

2

2

6

1

**Note**

-   This family does not support adding secondary ENIs during instance creation. Attach one after the instance is created. The following types require the instance to be in the **Stopped** state to attach or detach a secondary ENI: `ecs.t5-lc2m1.nano`, `ecs.t5-c1m1.large`, `ecs.t5-c1m2.large`, `ecs.t5-c1m4.large`, `ecs.t5-lc1m1.small`, `ecs.t5-lc1m2.large`, `ecs.t5-lc1m2.small`, `ecs.t5-lc1m4.large`.
    
-   To check regional availability, see the [Instance Types Available for Each Region page](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion).
    
-   For metric definitions, see [Instance type metrics](/help/en/ecs/user-guide/instance-specification-naming-and-classification#ad60bb6239ts8).
