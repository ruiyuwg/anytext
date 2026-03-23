This topic describes all Elastic Compute Service (ECS) instance families available for purchase and introduces their features, instance types, and supported scenarios to facilitate instance type selection.

**Note**

-   [**View instance availability by region**](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion)**:** Instance types may vary by region. We recommend that you check the purchase availability in each region.
    
-   [**View instance type selection guide**](/help/en/ecs/user-guide/best-practices-for-instance-type-selection)**:** First, determine which instance families are suitable for your business scenario. Then, use this topic to select a specific instance type.
    
-   [**View instance metric descriptions**](/help/en/ecs/user-guide/instance-specification-naming-and-classification#ad60bb6239ts8)**:** Read this topic to understand the metrics for instance types.
    
-   [**Use the ECS Price Calculator**](https://www.alibabacloud.com/zh/pricing-calculator?_p_lc=1#/commodity/vm_intl)**:** You can use the price calculator to estimate instance fees.
    

## **Catalog**

### **x86-based** **enterprise-level computing instance families**

#### **General-purpose instance families (g series)**

**Intel processor-powered instance families**

**AMD processor-powered instance families**

**Not recommended instance families (If the following instance families are sold out, we recommend that you use the instance families in the preceding columns.)**

-   [g9i general-purpose instance family](#g9i)
    
-   [g8i general-purpose instance family](#g8i)
    
-   [g7, general-purpose instance family](#g7)
    
-   [g6e, performance-enhanced general-purpose instance family](#g6e)
    
-   [g6, general-purpose instance family](#g6)
    

-   [g9ae general-purpose instance family](#g9ae)
    
-   [g9a general-purpose instance family](#g9a)
    
-   [g8a, general-purpose instance family](#g8a)
    
-   [g8ae, performance-enhanced general-purpose instance family](#g8ae)
    
-   [g7a, general-purpose instance family](#g7a)
    
-   [g6a, general-purpose instance family](#g6a)
    

-   [g5, general-purpose instance family](#g5)
    
-   [sn2ne, network-enhanced general-purpose instance family](#sn2ne)
    

#### **Compute-optimized instance families (c series)**

**Intel processor-powered instance families**

**AMD processor-powered instance families**

**Not recommended instance families (If the following instance families are sold out, we recommend that you use the instance families in the preceding columns.)**

-   [c9i, compute-optimized instance family](#c9i)
    
-   [c8i, compute-optimized instance family](#c8i)
    
-   [c8ine, network-enhanced compute-optimized instance family](#c8ine)
    
-   [c7, compute-optimized instance family](#c7)
    
-   [c6e, performance-enhanced compute-optimized instance family](#c6e)
    
-   [c6, compute-optimized instance family](#c6)
    

-   [c9ae, compute-optimized instance family](#c9ae)
    
-   [c9a, compute-optimized instance family](#c9a)
    
-   [c8a, compute-optimized instance family](#c8a)
    
-   [c8ae, performance-enhanced compute-optimized instance family](#c8ae)
    
-   [c7a, compute-optimized instance family](#c7a)
    
-   [c6a, compute-optimized instance family](#c6a)
    

-   [ic5, compute-intensive instance family](#ic5)
    
-   [c5, compute-optimized instance family](#c5)
    
-   [sn1ne, network-enhanced compute-optimized instance family](#sn1ne)
    

#### **Memory-optimized instance families (r series)**

**Intel processor-powered instance families**

**AMD processor-powered instance families**

**Not recommended instance families (If the following instance families are sold out, we recommend that you use the instance families in the preceding columns.)**

-   [r9i, memory-optimized instance family](#r9i)
    
-   [r8i, memory-optimized instance family](#r8i)
    
-   [r7, memory-optimized instance family](#r7)
    
-   [r6e, performance-enhanced memory-optimized instance family](#r6e)
    
-   [r6, memory-optimized instance family](#f48bcefcb9xn8)
    

-   [r9ae, memory-optimized instance family](#r9ae)
    
-   [r9a, memory-optimized instance family](#r9a)
    
-   [r8a, memory-optimized instance family](#r8a)
    
-   [r8ae, performance-enhanced memory-optimized instance family](#r8ae)
    
-   [r7a, memory-optimized instance family](#r7a)
    
-   [r6a, memory-optimized instance family](#r6a)
    

-   [r5, memory-optimized instance family](#r5)
    
-   [se1ne, network-enhanced memory-optimized instance family](#se1ne)
    
-   [se1, memory-optimized instance family](#se1)
    

#### **Universal instance families**

[u2a, universal instance family](#u2a)

[u2i, universal instance family](#u2i)

[u1, universal instance family](#u1)

#### **Big data instance families (d series)**

**Recommended instance families**

**Not recommended instance families (If the following instance families are sold out, we recommend that you use the recommended instance families.)**

-   [d3s, storage-intensive big data instance family](#d3s)
    
-   [d3c, compute-intensive big data instance family](#d3c)
    
-   [d2c, compute-intensive big data instance family](#d2c)
    
-   [d2s, storage-intensive big data instance family](#d2s)
    

[d1ne, network-enhanced big data instance family](#d1ne)

#### **Instance families with local SSDs (i series)**

Instance families powered by **Intel****®** **Xeon****®** **Granite Rapids processors**

Instance families powered by **Intel****®** **Xeon****®** **Scalable (Ice Lake) processors**

Instance families powered by **Intel****®** **Xeon****®** **Platinum 8269CY (Cascade Lake) processors**

Instance families powered by **Intel****®** **Xeon****®** **Platinum 8163 (Skylake) processors**

-   [i5g, instance family with local SSDs](#i5g)
    
-   [i5ge, instance family with local SSDs](#i5ge)
    
-   [i5e, instance family with local SSDs](#i5e)
    
-   [i5, instance family with local SSDs](#i5)
    

-   [i4, instance family with local SSDs](#i4)
    
-   [i4g, instance family with local SSDs](#i4g)
    
-   [i4r, instance family with local SSDs](#i4r)
    
-   [i4p, performance-enhanced instance family with local SSDs](#i4p)
    

-   [i3g, instance family with local SSDs](#i3g)
    
-   [i3, instance family with local SSDs](#i3)
    

-   [i2, instance family with local SSDs](#i2)
    
-   [i2g, instance family with local SSDs](#i2g)
    
-   [i2ne, instance family with local SSDs](#i2ne)
    
-   [i2gne, instance family with local SSDs](#i2gne)
    

#### **Instance families with high clock speeds (hf series)**

**Recommended instance families**

**Not recommended instance families (If the following instance families are sold out, we recommend that you use the instance families in the preceding columns.)**

**Intel** **®****Xeon** **®****6 processors with Performance Core (P-core)**

**fourth-generation Intel****®** **Xeon****®** **Scalable (Sapphire Rapids) processors**

**Intel****®** **Xeon****®** **Cooper Lake processors**

**Intel****®** **Xeon****®** **Platinum 8269CY (Cascade Lake) processors**

-   [hfc9i, compute-optimized instance family with high clock speeds](#hfc9i)
    
-   [hfg9i, general-purpose instance family with high clock speeds](#hfg9i)
    
-   [hfr9i, memory-optimized instance family with high clock speeds](#hfr9i)
    

-   [hfc8i, compute-optimized instance family with high clock speeds](#hfc8i)
    
-   [hfg8i, general-purpose instance family with high clock speeds](#hfg8i)
    
-   [hfr8i, memory-optimized instance family with high clock speeds](#hfr8i)
    

-   [hfc7, compute-optimized instance family with high clock speeds](#hfc7)
    
-   [hfg7, general-purpose instance family with high clock speeds](#hfg7)
    
-   [hfr7, memory-optimized instance family with high clock speeds](#hfr7)
    

-   [hfc6, compute-optimized instance family with high clock speeds](#hfc6)
    
-   [hfg6, general-purpose instance family with high clock speeds](#hfg6)
    
-   [hfr6, memory-optimized instance family with high clock speeds](#hfr6)
    

-   [hfc5, compute-optimized instance family with high clock speeds](#hfc5)
    
-   [hfg5, general-purpose instance family with high clock speeds](#hfg5)
    

#### Enhanced instance families

**Storage-enhanced instance families**

**Network-enhanced instance families**

**Security-enhanced instance families**

**Memory-enhanced instance families**

-   [g7se, storage-enhanced general-purpose instance family](#g7se)
    
-   [c7se, storage-enhanced compute-optimized instance family](#c7se)
    
-   [r7se, storage-enhanced memory-optimized instance family](#r7se)
    

-   [g8ine network-enhanced general-purpose instance family](#g8ine)
    
-   [c8ine, network-enhanced compute-optimized instance family](#c8ine)
    
-   [g7nex, network-enhanced general-purpose instance family](#g7nex)
    
-   [c7nex, network-enhanced compute-optimized instance family](#c7nex)
    
-   [g7ne, network-enhanced general-purpose instance family](#g7ne)
    
-   [g5ne, network-enhanced general-purpose instance family](#g5ne)
    

-   [g9it, security-enhanced general-purpose instance family](#g9it)
    
-   [r9it, security-enhanced memory-optimized instance family](#r9it)
    
-   [g7t, security-enhanced general-purpose instance family](#g7t)
    
-   [c7t, security-enhanced compute-optimized instance family](#c7t)
    
-   [r7t, security-enhanced memory-optimized instance family](#r7t)
    
-   [g6t, security-enhanced general-purpose instance family](#g6t)
    
-   [c6t, security-enhanced compute-optimized instance family](#c6t)
    

-   **Recommended instance families**
    
    -   [re8, high-memory instance family](#re8)
        
    -   [re6p, persistent memory-optimized instance family](#re6p)
        
    -   [re6, high-memory instance family](#re6)
        
-   **Not recommended instance families (If the following instance families are sold out, we recommend that you use the preceding recommended instance families.)**
    
    -   [re4, high-memory instance family](#re4)
        
    -   [re4e, high-memory instance family](#re4e)
        

### x86-based entry-level computing instance families

**Recommended instance families**

**Not recommended instance families (If the following instance families are sold out, we recommend that you use the recommended instance families.)**

-   [e, economy instance family](#e)
    
-   [t6, burstable instance family](#t6)
    

-   [t5, burstable instance family](#t5)
    
-   [v5, CPU-overprovisioned instance family](#v5)
    
-   [xn4, n4, mn4, and e4, previous-generation shared instance families](#xn4-n4-mn4-e4)
    

### Arm-based enterprise-level computing instance families

**YiTian 710 processor-powered instance families**

**Ampere****®** **Altra****®** **processor**\-powered instance families

-   [g8y, general-purpose instance family](#g8y)
    
-   [c8y, compute-optimized instance family](#c8y)
    
-   [r8y, memory-optimized instance family](#r8y)
    

-   [g6r, general-purpose instance family](#g6r)
    
-   [c6r, compute-optimized instance family](#c6r)
    

### **ECS Bare Metal Instance families**

**Recommended instance families**

**Not recommended instance families (If the following instance families are sold out, we recommend that you use the instance families in the preceding columns.)**

**General-purpose instance families (g series)**

**Compute-optimized instance families (c series)**

**Memory-optimized instance families (r series)**

**Instance families with high clock speeds (hf series)**

**GPU-accelerated compute-optimized instance families (gn series)**

-   [ebmg9ae, general-purpose ECS Bare Metal Instance family](#ebmg9ae)
    
-   [ebmg9a, general-purpose ECS Bare Metal Instance family](#ebmg9a)
    
-   [ebmg9i, general-purpose ECS Bare Metal Instance family](#ebmg9i)
    
-   [ebmg8y, general-purpose ECS Bare Metal Instance family](#ebmg8y)
    
-   [ebmg8i, general-purpose ECS Bare Metal Instance family](#ebmg8i)
    
-   [ebmg7, general-purpose ECS Bare Metal Instance family](#ebmg7)
    
-   [ebmg7a, general-purpose ECS Bare Metal Instance family](#ebmg7a)
    
-   [ebmg6a, general-purpose ECS Bare Metal Instance family](#ebmg6a)
    
-   [ebmg6e, performance-enhanced general-purpose ECS Bare Metal Instance family](#ebmg6e)
    
-   [ebmg6, general-purpose ECS Bare Metal Instance family](#ebmg6)
    

-   [ebmc9ae, compute-optimized ECS Bare Metal Instance family](#ebmc9ae)
    
-   [ebmc9i, compute-optimized ECS Bare Metal Instance family](#ebmc9i)
    
-   [ebmc8a, compute-optimized ECS Bare Metal Instance family](#ebmc8a)
    
-   [ebmc8y, compute-optimized ECS Bare Metal Instance family](#ebmc8y)
    
-   [ebmc8i, compute-optimized ECS Bare Metal Instance family](#ebmc8i)
    
-   [ebmc7, compute-optimized ECS Bare Metal Instance family](#ebmc7)
    
-   [ebmc7a, compute-optimized ECS Bare Metal Instance family](#ebmc7a)
    
-   [ebmc6me, compute-optimized ECS Bare Metal Instance family](#ebmc6me)
    
-   [ebmc6a, compute-optimized ECS Bare Metal Instance family](#ebmc6a)
    
-   [ebmc6e, performance-enhanced compute-optimized ECS Bare Metal Instance family](#ebmc6e)
    
-   [ebmc6, compute-optimized ECS Bare Metal Instance family](#ebmc6)
    

-   [ebmr9ae, memory-optimized ECS Bare Metal Instance family](#ebmr9ae)
    
-   [ebmr9i, memory-optimized ECS Bare Metal Instance family](#ebmr9i)
    
-   [ebmr8a, memory-optimized ECS Bare Metal Instance family](#ebmr8a)
    
-   [ebmr8y, memory-optimized ECS Bare Metal Instance family](#ebmr8y)
    
-   [ebmr7, memory-optimized ECS Bare Metal Instance family](#ebmr7)
    
-   [ebmr7a, memory-optimized ECS Bare Metal Instance family](#ebmr7a)
    
-   [ebmr6a, memory-optimized ECS Bare Metal Instance family](#ebmr6a)
    
-   [ebmr6e, performance-enhanced memory-optimized ECS Bare Metal Instance family](#ebmr6e)
    
-   [ebmr6, memory-optimized ECS Bare Metal Instance family](#ebmr6)
    
-   [ebmre6p, performance-enhanced persistent-memory-optimized ECS Bare Metal Instance family](#ebmre6p)
    
-   [ebmre6-6t, performance-enhanced memory-optimized ECS Bare Metal Instance family](#ebmre6-6t)
    

-   [ebmhfg7, general-purpose ECS Bare Metal Instance family with high clock speeds](#ebmhfg7)
    
-   [ebmhfc7, compute-optimized ECS Bare Metal Instance family with high clock speeds](#ebmhfc7)
    
-   [ebmhfr7, memory-optimized ECS Bare Metal Instance family with high clock speeds](#ebmhfr7)
    
-   [ebmhfg6, general-purpose ECS Bare Metal Instance family with high clock speeds](#ebmhfg6)
    
-   [ebmhfc6, compute-optimized ECS Bare Metal Instance family with high clock speeds](#ebmhfc6)
    
-   [ebmhfr6, memory-optimized ECS Bare Metal Instance family with high clock speeds](#ebmhfr6)
    

-   [ebmgn9g, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn9g)
    
-   [ebmgn9ge, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn9ge)
    
-   [ebmgn9gc, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn9gc)
    
-   [ebmgn8v, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn8v)
    
-   [ebmgn8ia, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn8ia)
    
-   [ebmgn8is, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn8is)
    
-   [ebmgn7e, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn7e)
    
-   [ebmgn7i, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn7i)
    
-   [ebmgn7, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn7)
    
-   [ebmgn6e, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn6e)
    
-   [ebmgn6v, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn6v)
    
-   [ebmgn6i, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn6i)
    

-   [ebmc5s, network-enhanced compute-optimized ECS Bare Metal Instance family](#ebmc5s)
    
-   [ebmg5s, network-enhanced general-purpose ECS Bare Metal Instance family](#ebmg5s)
    
-   [ebmr5s, network-enhanced memory-optimized ECS Bare Metal Instance family](#ebmr5s)
    
-   [ebmg5, general-purpose ECS Bare Metal Instance family](#ebmg5)
    

### **Super Computing Cluster (SCC) instance families**

-   [sccg7, general-purpose SCC instance family](#sccg7)
    
-   [sccc7, compute-optimized SCC instance family](#sccc7)
    

### **Enterprise-level heterogeneous computing instance families**

**Recommended instance families**

**Not recommended instance families (If the following instance families are sold out, we recommend that you use the recommended instance families.)**

-   [sgn8ia, vGPU-accelerated instance family](#sgn8ia)
    
-   [sgn7i-vws, vGPU-accelerated instance family with shared CPUs](#sgn7i-vws)
    
-   [vgn7i-vws, vGPU-accelerated instance family](#vgn7i-vws)
    
-   [vgn6i-vws, vGPU-accelerated instance family](#vgn6i-vws)
    
-   [gn8is, GPU-accelerated compute-optimized instance family](#gn8is)
    
-   [gn7e, GPU-accelerated compute-optimized instance family](#gn7e)
    
-   [gn7i, GPU-accelerated compute-optimized instance family](#gn7i)
    
-   [gn7, GPU-accelerated compute-optimized instance family](#gn7)
    
-   [gn6i, GPU-accelerated compute-optimized instance family](#gn6i)
    
-   [gn6e, GPU-accelerated compute-optimized instance family](#gn6e)
    
-   [gn6v, GPU-accelerated compute-optimized instance family](#gn6v)
    

-   [gn7s, GPU-accelerated compute-optimized instance family](#gn7s)
    
-   [gn5, GPU-accelerated compute-optimized instance family](#gn5)
    
-   [gn5i, GPU-accelerated compute-optimized instance family](#gn5i)
    

## x86-based enterprise-level computing instance families

### **g9ae general-purpose instance family**

-   **Introduction**: g9ae instances are built on the new Cloud Infrastructure Processing Unit (CIPU) architecture. They are equipped with the latest AMD EPYC™ Turin processors that use physical cores. These instances provide stable computing power, a powerful I/O engine, and chip-level security hardening.
    
-   **Scenarios**: Big data analytics (such as Spark, Flink, and ES), search, recommendation, and advertising (ps-worker), core transaction systems, audio and video transcoding, AI training and inference, and general-purpose enterprise applications (Java).
    
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: AMD EPYC™ Turin processor with a turbo frequency of up to 3.7 GHz. These processors use physical cores to provide stable computing performance.
        
    -   For information about operating system compatibility, see [AMD instance types and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#6cc7ed4977cxh).
        
-   **Storage**:
    
    -   You can adjust the baseline storage bandwidth.
        
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks), [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   For small instance types, disk IOPS and disk bandwidth are burstable. The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   You can adjust the baseline network bandwidth.
        
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**:
    
    -   These instances support the [Trusted Platform Module (vTPM)](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities) feature.
        
    -   These instances support [VPC traffic encryption](/help/en/ecs/user-guide/vpc-traffic-encryption).
        

The g9ae instance familyincludes the instance types and metrics listed in the following table.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Baseline disk IOPS**

**Baseline/Burst disk bandwidth (Gbit/s)**

ecs.g9ae.large

2

8

2.5/Up to 25

Up to 1.5 million

Up to 0.5 million

2

3

6

6

Up to 200,000

2.5/Up to 20

ecs.g9ae.xlarge

4

16

4/Up to 25

Up to 1.6 million

Up to 0.5 million

4

4

15

15

Up to 200,000

3/Up to 20

ecs.g9ae.2xlarge

8

32

6/Up to 25

Up to 2.5 million

Up to 0.5 million

8

4

15

15

Up to 200,000

4/Up to 20

ecs.g9ae.4xlarge

16

64

10/Up to 25

Up to 3.2 million

Up to 0.5 million

16

8

30

30

Up to 200,000

5.5/Up to 20

ecs.g9ae.8xlarge

32

128

16/Up to 25

Up to 5 million

Up to 1 million

32

8

30

30

Up to 200,000

8/Up to 20

ecs.g9ae.12xlarge

48

192

25 / None

7.5 million

1.5 million

48

8

30

30

150,000

13/N/A

ecs.g9ae.16xlarge

64

256

32 or None

10 million

2 million

64

8

30

30

200,000

16 / None

ecs.g9ae.24xlarge

96

384

50 / None

15 million

3 million

64

15

30

30

300,000

25/N/A

ecs.g9ae.32xlarge

128

512

64/N/A

20 million

4 million

64

15

30

30

400,000

32 or None

ecs.g9ae.48xlarge

192

768

100 or Unlimited

30 million

6 million

64

15

50

50

600,000

50 / None

### **g9a general-purpose instance family**

-   **Introduction**: g9a instances are built on the new Cloud Infrastructure Processing Unit (CIPU) architecture. They are equipped with the latest AMD EPYC™ Turin processors. These instances provide stable computing power, a powerful I/O engine, and chip-level security hardening.
    
-   **Scenarios**: Large and medium-sized database systems, game servers, financial quantization, blockchain, web and application servers, and other general-purpose enterprise applications.
    
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: AMD EPYC™ Turin processor with a turbo frequency of up to 4.1 GHz. These processors provide stable computing performance.
        
    -   For information about operating system compatibility, see [AMD instance types and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#6cc7ed4977cxh).
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   For small instance types, disk IOPS and disk bandwidth are burstable. The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**: These instances support the [Trusted Platform Module (vTPM)](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities) feature.
    

The g9a instance family includes the following instance types and metrics.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Cloud Disk IOPS Basics**

**Baseline/Burst disk bandwidth (Gbit/s)**

ecs.g9a.large

2

8

2.5/Up to 15

Up to 1.2 million

Up to 0.5 million

2

3

6

6

Up to 110,000

2/Up to 15

ecs.g9a.xlarge

4

16

4/Up to 15

Up to 1.4 million

Up to 0.5 million

4

4

15

15

Up to 110,000

3/Up to 15

ecs.g9a.2xlarge

8

32

6/Up to 15

Up to 2 million

Up to 0.5 million

8

4

15

15

Up to 110,000

4/Up to 15

ecs.g9a.4xlarge

16

64

12/Up to 25

Up to 3 million

Up to 0.5 million

16

8

30

30

Up to 110,000

5/Up to 15

ecs.g9a.8xlarge

32

128

16/Up to 32

Up to 4 million

Up to 0.8 million

32

8

30

30

Up to 110,000

8/Up to 15

ecs.g9a.16xlarge

64

256

32/None

7.5 million

1.5 million

64

8

30

30

120,000

16 or None

ecs.g9a.24xlarge

96

384

48/N/A

10 million

2.2 million

64

15

30

30

200,000

24 / None

ecs.g9a.32xlarge

128

512

64 / None

15 million

3 million

64

15

30

30

250,000

32/None

ecs.g9a.48xlarge

192

768

96 or None

20 million

4.5 million

64

15

50

50

400,000

48 / None

### **g9i general-purpose instance family**

-   **Introduction**: g9i instances are built on the new Cloud Infrastructure Processing Unit (CIPU) architecture. They are equipped with Intel® Xeon® 6 processors that feature P-cores (performance cores). These instances provide stable computing power, a powerful I/O engine, and chip-level security hardening.
    
-   **Scenarios**: High packet forwarding rate scenarios, game servers, small and medium-sized database systems, caches, search clusters, search and promotion applications, web and application servers, data analytics and computing, and trusted and secure computing scenarios.
    
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: Intel® Xeon® Granite Rapids with a clock speed of 3.2 GHz, an all-core turbo frequency of 3.6 GHz, and a single-core maximum turbo frequency of 3.9 GHz.
        
        **Note**
        
        The system may display different frequencies for this instance. The all-core turbo frequency of 3.6 GHz is stable and guaranteed. The single-core maximum turbo frequency of 3.9 GHz is a burst performance. The burst capability depends on the overall CPU load of the physical machine and is not covered by the Service-Level Agreement (SLA).
        
    -   For information about operating system compatibility, see [Intel instance types and operating system compatibility](/help/en/ecs/intel-instance-specifications-and-operating-system-compatibility).
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: ESSDs, ESSD AutoPL disks, and Regional ESSDs. For more information, see [Overview of Elastic Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   For small instance types, disk IOPS and disk bandwidth are burstable. The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

g9i includes the instance types and metrics listed in the following table:

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Baseline/Burst disk IOPS**

**Baseline/Burst disk bandwidth (Gbit/s)**

ecs.g9i.large

2

8

2.5/Up to 15

1 million

Up to 0.5 million

2

3

6

6

25,000/Up to 200,000

2/Up to 10

ecs.g9i.xlarge

4

16

4/Up to 15

1.2 million

Up to 0.5 million

4

4

15

15

50,000/Up to 200,000

2.5/Up to 10

ecs.g9i.2xlarge

8

32

6/Up to 15

1.6 million

Up to 0.5 million

8

4

15

15

60,000/Up to 200,000

4/Up to 10

ecs.g9i.3xlarge

12

48

10/Up to 15

2.4 million

Up to 0.5 million

12

8

15

15

80,000/Up to 200,000

5/Up to 10

ecs.g9i.4xlarge

16

64

12/Up to 25

3 million

0.5 million

16

8

30

30

100,000/Up to 200,000

6/Up to 10

ecs.g9i.6xlarge

24

96

15/Up to 25

4.5 million

0.6 million

24

8

30

30

120,000/Up to 200,000

7.5/Up to 10

ecs.g9i.8xlarge

32

128

20/Up to 32

6 million

0.8 million

32

8

30

30

200,000/Up to 300,000

10/Up to 12

ecs.g9i.12xlarge

48

192

25/Up to 32

9 million

1.6 million

48

8

30

30

240,000/Up to 320,000

12/Up to 15

ecs.g9i.16xlarge

64

256

28/Up to 36

12 million

2 million

64

8

30

30

300,000/Up to 400,000

16/Up to 24

ecs.g9i.24xlarge

96

384

32/Up to 48

18 million

3 million

64

15

30

30

350,000/Up to 600,000

20/Up to 28

ecs.g9i.32xlarge

128

512

36/Up to 50

20 million

4 million

64

15

30

30

400,000/Up to 650,000

24/Up to 28

ecs.g9i.48xlarge

192

768

64/N/A

24 million

6 million

64

15

50

50

500,000/Up to 800,000

32 or None

### g8a general-purpose instance family

-   **Family introduction**: This instance family is built on the new Alibaba Cloud Cloud Infrastructure Processing Unit (CIPU) architecture and provides stable computing power, a more powerful I/O engine, and chip-level security hardening.
    
-   **Scenarios**: General-purpose enterprise applications (Java), memory-optimized or relational database applications, big data applications (such as Kafka and Elasticsearch), web applications, AI training and inference, and audio and video transcoding applications.
    
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: AMD EPYC™ Genoa 9T24 processor with a base frequency of 2.7 GHz and a turbo frequency of up to 3.7 GHz. These processors provide stable computing performance.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   For information about operating system compatibility, see [AMD instance types and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#IXCNq).
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   For small instance types, disk IOPS and disk bandwidth are burstable. The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
    -   For small instance types, network bandwidth is burstable.
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

The g8a instance family includes the instance types and metric data listed in the following table.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Baseline/Burst disk IOPS**

**Baseline/Burst disk bandwidth (Gbit/s)**

ecs.g8a.large

2

8

1.5/12.5

0.9 million

Up to 0.25 million

2

3

6

6

20,000/110,000

1.5/10

ecs.g8a.xlarge

4

16

2.5/12.5

1 million

Up to 0.25 million

4

4

15

15

30,000/110,000

2/10

ecs.g8a.2xlarge

8

32

4/12.5

1.6 million

Up to 0.25 million

8

4

15

15

45,000/110,000

2.5/10

ecs.g8a.4xlarge

16

64

7/12.5

2 million

0.3 million

16

8

30

30

60,000/110,000

3.5/10

ecs.g8a.8xlarge

32

128

10/25

3 million

0.6 million

32

8

30

30

80,000/110,000

5/10

ecs.g8a.12xlarge

48

192

16/25

4.5 million

0.75 million

48

8

30

30

120,000 or None

8/10

ecs.g8a.16xlarge

64

256

20/25

6 million

1 million

64

8

30

30

160,000/Unlimited

10/None

ecs.g8a.24xlarge

96

384

32/None

9 million

1.5 million

64

15

30

30

240,000 or Unlimited

16/None

ecs.g8a.32xlarge

128

512

40 or None

12 million

2 million

64

15

30

30

320,000/Unlimited

20/None

ecs.g8a.48xlarge

192

768

64 or None

18 million

3 million

64

15

50

50

500,000/None

32/None

**Note**

-   The packet forwarding rate (PPS) varies significantly based on the business scenario. Therefore, perform stress testing on your services to understand the performance of instances and select an appropriate instance type.
    
-   For ecs.g8a.large and ecs.g8a.xlarge instances, you must enable jumbo frames to achieve the burst network bandwidth of 12.5 Gbit/s. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
    

### **g8i general-purpose instance family**

-   **Family introduction**: Built on the new Alibaba Cloud Cloud Infrastructure Processing Unit (CIPU) architecture, this family provides stable computing power, a more powerful I/O engine, and chip-level security hardening.
    
-   **Scenarios**: High packet forwarding rate scenarios, game servers, small and medium-sized database systems, caches, search clusters, search and promotion applications, web and application servers, data analytics and computing, and trusted and secure computing scenarios.
    
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: Intel® Xeon® Emerald Rapids or Intel® Xeon® Sapphire Rapids with a clock speed of at least 2.7 GHz and an all-core turbo frequency of 3.2 GHz. These processors provide stable computing performance.
        
        **Note**
        
        When you purchase an instance of this family, the system randomly assigns one of the preceding processors. You cannot manually select a processor.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   For information about operating system compatibility, see [Intel instance types and operating system compatibility](/help/en/ecs/intel-instance-specifications-and-operating-system-compatibility).
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   For small instance types, disk IOPS and disk bandwidth are burstable. The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**:
    
    -   These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
        
    -   Instances with 4 or more vCPUs support the Alibaba Cloud virtualized enclave feature, which provides a virtualization-based confidential computing environment. For more information, see [Build a confidential computing environment with an enclave](/help/en/ecs/user-guide/build-a-confidential-computing-environment-by-using-enclave#task-2038130).
        
    -   These instances use Intel® Total Memory Encryption (Intel® TME) to encrypt runtime memory.
        
    -   These instances support CPU-based confidential computing (Intel® TDX). For more information, see [Create a TDX-based confidential computing environment](/help/en/ecs/user-guide/build-a-tdx-confidential-computing-environment).
        

The g8i instance family includes the instance types and metrics that are listed in the following table.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Baseline/Burst disk IOPS**

**Baseline/Burst disk bandwidth (Gbit/s)**

ecs.g8i.large

2

8

2.5/Up to 15

1 million

Up to 0.3 million

2

3

6

6

25,000/Up to 200,000

2/Up to 10

ecs.g8i.xlarge

4

16

4/Up to 15

1.2 million

Up to 0.3 million

4

4

15

15

50,000/Up to 200,000

2.5/Up to 10

ecs.g8i.2xlarge

8

32

6/Up to 15

1.6 million

Up to 0.3 million

8

4

15

15

60,000/Up to 200,000

4/Up to 10

ecs.g8i.3xlarge

12

48

10/Up to 15

2.4 million

Up to 0.3 million

12

8

15

15

80,000/Up to 200,000

5/Up to 10

ecs.g8i.4xlarge

16

64

12/Up to 25

3 million

0.35 million

16

8

30

30

100,000/Up to 200,000

6/Up to 10

ecs.g8i.6xlarge

24

96

15/Up to 25

4.5 million

0.5 million

24

8

30

30

120,000/Up to 200,000

7.5/Up to 10

ecs.g8i.8xlarge

32

128

20/Up to 25

6 million

0.8 million

32

8

30

30

200,000/Unlimited

10/None

ecs.g8i.12xlarge

48

192

25/N/A

9 million

1 million

48

8

30

30

300,000/No limit

12/N/A

ecs.g8i.16xlarge

64

256

32/None

12 million

1.6 million

64

8

30

30

360,000 / None

20 / None

ecs.g8i.24xlarge

96

384

50/none

18 million

2 million

64

15

30

30

500,000/Unlimited

24 / None

ecs.g8i.48xlarge

192

1024

100/None

30 million

4 million

64

15

50

50

1,000,000 / Unlimited

48/None

### g8ine network-enhanced general-purpose instance family

-   **Family introduction**: Powered by Alibaba Cloud's new Cloud Infrastructure Processing Unit (CIPU) architecture, this family delivers stable computing power and a more powerful I/O engine.
    
-   **Scenarios**: Network-intensive scenarios that require excellent forwarding performance and a high number of connections. These instances are especially suitable for network access layer gateways and traffic and data forwarding or pre-processing middleware. They can be used as part of a cloud solution in scenarios such as large websites, e-commerce, and AI.
    
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: Intel® Xeon® Emerald Rapids or Intel® Xeon® Sapphire Rapids with a clock speed of at least 2.7 GHz and an all-core turbo frequency of 3.2 GHz. These processors provide stable computing performance.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: ESSDs, ESSD AutoPL disks, and regional ESSDs. For more information, see [Overview of Elastic Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   For small instance types, disk IOPS and disk bandwidth are burstable.
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

The g8ine instance family includes the instance types and metrics described in the following table.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Connections**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**EBS Multi-queue**

**Baseline/Burst disk IOPS**

**Baseline/Burst disk bandwidth (Gbit/s)**

ecs.g8ine.large

2

8

4/Up to 24

0.6 million

2

3

10

10

1

20,000/Up to 80,000

2/Up to 8

ecs.g8ine.xlarge

4

16

7/Up to 28

1.2 million

4

4

15

15

1

40,000/Up to 80,000

2.5/Up to 8

ecs.g8ine.2xlarge

8

32

12/Up to 35

2 million

8

6

15

15

2

50,000/Up to 80,000

4/Up to 8

ecs.g8ine.4xlarge

16

64

23/Up to 44

3.5 million

16

8

30

30

2

80,000/Up to 100,000

6/Up to 10

ecs.g8ine.8xlarge

32

128

44 / None

7 million

32

8

30

30

4

100,000 / Unlimited

10 or None

### g8ae performance-enhanced general-purpose instance family

-   **Introduction**: g8ae instances are built on the new Cloud Infrastructure Processing Unit (CIPU) architecture. They provide stable computing power, a powerful I/O engine, and chip-level security hardening.
    
-   **Scenarios**: Artificial intelligence (AI) scenarios (such as deep learning, training, and AI inference), high-performance computing (HPC) and other high-performance scientific computing scenarios, large and medium-sized database systems, caches, search clusters, large online game servers, and other general-purpose enterprise applications that have high performance requirements.
    
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: AMD EPYC™ Genoa processor with a clock speed of 3.4 GHz and a single-core turbo frequency of up to 3.75 GHz. These processors provide stable computing performance.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   For information about operating system compatibility, see [AMD instance types and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#IXCNq).
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   For small instance types, disk IOPS and disk bandwidth are burstable. The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
    -   For small instance types, network bandwidth is burstable.
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

The g8ae instance family includes the instance types and metrics listed in the following table.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**vTPM support**

**Connections**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Baseline/Burst disk IOPS**

**Baseline/Burst disk bandwidth (Gbit/s)**

ecs.g8ae.large

2

8

3/Up to 15

1 million

Yes

Up to 0.3 million

2

3

6

6

30,000/Up to 200,000

2/Up to 10

ecs.g8ae.xlarge

4

16

4/Up to 15

1.2 million

Yes

Up to 0.3 million

4

4

15

15

50,000/Up to 200,000

2.5/Up to 10

ecs.g8ae.2xlarge

8

32

6/Up to 15

1.6 million

Yes

Up to 0.3 million

8

4

15

15

60,000/Up to 200,000

3/Up to 10

ecs.g8ae.4xlarge

16

64

12/Up to 25

3 million

Yes

0.5 million

16

8

30

30

100,000/Up to 200,000

6/Up to 10

ecs.g8ae.8xlarge

32

128

20/Up to 25

6 million

Yes

1 million

32

8

30

30

200,000 or Unlimited

10 or None

ecs.g8ae.16xlarge

64

256

32/None

9 million

Yes

1.5 million

64

8

30

30

250,000 or Unlimited

16/None

ecs.g8ae.32xlarge

128

512

64 / None

18 million

Yes

3 million

64

15

30

30

500,000/None

32 / None

**Note**

For ecs.g8ae.large and ecs.g8ae.xlarge instances, you must enable jumbo frames to achieve the burst bandwidth of 15 Gbit/s. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).

### g7a general-purpose instance family

-   **Introduction**: Built on the third-generation SHENLONG architecture, g7a instances provide stable and predictable ultra-high performance. They also use chip-level acceleration to provide significant improvements in storage and network performance, and computing stability.
    
-   **Scenarios**: Video encoding and decoding, high packet forwarding rate scenarios, web and application servers, small and medium-sized database systems, caches, search clusters, game servers, test and development (such as DevOps), and other general-purpose enterprise applications.
    
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: 2.55 GHz AMD EPYC™ MILAN processor with a single-core turbo frequency of up to 3.5 GHz. These processors provide stable computing performance.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   For information about operating system compatibility, see [AMD instance types and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#IXCNq).
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   For small instance types, disk IOPS and disk bandwidth are burstable. The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
    -   For small instance types, network bandwidth is burstable.
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        

The g7a instance familyincludes the following instance types and metrics.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Baseline/Burst disk IOPS**

**Baseline/Burst disk bandwidth (Gbit/s)**

ecs.g7a.large

2

8

1/Up to 10

0.9 million

Up to 0.25 million

2

3

6

6

12,500/Up to 110,000

1/Up to 6

ecs.g7a.xlarge

4

16

1.5/Up to 10

1 million

Up to 0.25 million

4

4

15

15

20,000/Up to 110,000

1.5/Up to 6

ecs.g7a.2xlarge

8

32

2.5/Up to 10

1.6 million

Up to 0.25 million

8

4

15

15

30,000/Up to 110,000

2/Up to 6

ecs.g7a.4xlarge

16

64

7/Up to 12.5

2 million

0.3 million

8

8

30

30

60,000/Up to 110,000

3.7/Up to 10.5

ecs.g7a.8xlarge

32

128

8/Up to 10

3 million

0.6 million

16

7

30

30

75,000/Up to 110,000

4.1/Up to 11

ecs.g7a.16xlarge

64

256

16 or None

6 million

1 million

32

8

30

30

150,000/Unlimited

8.2/N/A

ecs.g7a-nps1.16xlarge

64

256

16 or None

6 million

1 million

32

8

30

30

150,000/Unlimited

8.2/None

ecs.g7a.32xlarge

128

512

32 or None

12 million

2 million

32

15

30

30

300,000/Unlimited

16.4/N/A

**Note**

The kernels of the Ubuntu 16 and Debian 9 operating systems do not support AMD EPYC™ MILAN processors. Therefore, do not use Ubuntu 16 or Debian 9 images to create instances of this family. Otherwise, the instances fail to start.

### g7, general-purpose instance family

-   **Introduction**: Built on the third-generation SHENLONG architecture, g7 instances provide stable and predictable ultra-high performance. They also use chip-level acceleration to provide significant improvements in storage and network performance, and computing stability.
    
-   **Scenarios**: High packet forwarding rate scenarios (such as live comments and telecommunication service forwarding), game servers, small and medium-sized database systems, caches, search clusters, enterprise applications of various types and sizes, web and application servers, data analytics and computing, trusted and secure computing scenarios, and blockchain scenarios.
    
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: Third-generation Intel® Xeon® Scalable (Ice Lake) processor with a base frequency of 2.7 GHz and an all-core turbo frequency of 3.5 GHz. These processors provide stable computing performance.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   For small instance types, disk IOPS and disk bandwidth are burstable. The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
    -   For small instance types, network bandwidth is burstable.
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**:
    
    -   These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
        
    -   These instances support the Alibaba Cloud virtualized enclave feature, which provides a virtualization-based confidential computing environment. For more information, see [Create a confidential computing environment for an enclave](/help/en/ecs/user-guide/build-a-confidential-computing-environment-by-using-enclave#task-2038130).
        

The g7 instance family includes the instance types and performance metrics that are listed in the following table.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**vTPM support**

**Connections**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum number of attached data disks**

**Baseline/Burst disk IOPS**

**Baseline/Burst disk bandwidth (Gbit/s)**

ecs.g7.large

2

8

2/Up to 12.5

1.1 million

Yes

Up to 0.5 million

2

3

6

6

8

20,000/Up to 160,000

1.5/Up to 10

ecs.g7.xlarge

4

16

3/Up to 12.5

1.1 million

Yes

Up to 0.5 million

4

4

15

15

8

40,000/Up to 160,000

2/Up to 10

ecs.g7.2xlarge

8

32

5/Up to 15

1.6 million

Yes

Up to 0.5 million

8

4

15

15

16

50,000/Up to 160,000

3/Up to 10

ecs.g7.3xlarge

12

48

8/Up to 15

2.4 million

Yes

Up to 0.5 million

8

8

15

15

16

70,000/Up to 160,000

4/Up to 10

ecs.g7.4xlarge

16

64

10/Up to 25

3 million

Yes

0.5 million

8

8

30

30

16

80,000/Up to 160,000

5/Up to 10

ecs.g7.6xlarge

24

96

12/Up to 25

4.5 million

Yes

0.55 million

12

8

30

30

16

110,000/Up to 160,000

6/10

ecs.g7.8xlarge

32

128

16/Up to 32

6 million

Yes

0.6 million

16

8

30

30

24

160,000 / No limit

10 or None

ecs.g7.16xlarge

64

256

32/None

12 million

Yes

1.2 million

32

8

30

30

32

360,000 or None

16/None

ecs.g7.32xlarge

128

512

64/None

24 million

Yes

2.4 million

32

15

30

30

32

600,000 or unlimited

32/None

### g6 general-purpose instance family

-   **Introduction**: Built on the SHENLONG architecture, g6 instances offload many virtualization features to dedicated hardware. This reduces virtualization overhead and provides stable and predictable ultra-high performance.
    
-   **Scenarios**:
    
    -   High packet forwarding rate scenarios, such as live comments and telecommunication service forwarding.
        
    -   Enterprise applications of various types and sizes.
        
    -   Web and application servers.
        
    -   Game servers.
        
    -   Small and medium-sized database systems, caches, and search clusters.
        
    -   Data analytics and computing.
        
    -   Compute clusters and memory-dependent data processing.
        
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processor with a turbo frequency of 3.2 GHz. These processors provide stable computing performance.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSD, and ultra disk. For more information, see [Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
        **Note**
        
        The maximum performance of disks varies based on the instance families. A single instance of this instance family can deliver up to 200,000 IOPS.
        
    -   The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
        **Note**
        
        Network performance varies based on the instance families. For higher concurrent connection and network packet forwarding capabilities, we recommend that you use the g7ne instance family.
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        

The g6 instance family includes the instance types and metrics listed in the following table.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Baseline disk IOPS**

**Baseline disk bandwidth (Gbit/s)**

ecs.g6.large

2

8

1/Up to 3

0.3 million

Up to 0.25 million

2

2

6

1

10,000

1

ecs.g6.xlarge

4

16

1.5/Up to 5

0.5 million

Up to 0.25 million

4

3

10

1

20,000

1.5

ecs.g6.2xlarge

8

32

2.5/Up to 8

0.8 million

Up to 0.25 million

8

4

10

1

25,000

2

ecs.g6.3xlarge

12

48

4/Up to 10

0.9 million

Up to 0.25 million

8

6

10

1

30,000

2.5

ecs.g6.4xlarge

16

64

5/Up to 10

1 million

0.3 million

8

8

20

1

40,000

3

ecs.g6.6xlarge

24

96

7.5/Up to 10

1.5 million

0.45 million

12

8

20

1

50,000

4

ecs.g6.8xlarge

32

128

10 or None

2 million

0.6 million

16

8

20

1

60,000

5

ecs.g6.13xlarge

52

192

12.5 or None

3 million

0.9 million

32

7

20

1

100,000

8

ecs.g6.26xlarge

104

384

25 / None

6 million

1.8 million

32

15

20

1

200,000

16

### g6a general-purpose instance family

-   **Family introduction**: Built on the SHENLONG architecture, this family offloads numerous virtualization features to dedicated hardware, which reduces virtualization overhead and provides stable and predictable ultra-high performance.
    
-   **Scenarios**:
    
    -   Video encoding and decoding.
        
    -   Scenarios with high packet forwarding rates.
        
    -   Web and application servers.
        
    -   Small and medium-sized database systems, caches, and search clusters.
        
    -   Game servers.
        
    -   Test and development, such as DevOps.
        
    -   Other general-purpose enterprise applications.
        
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: 2.6 GHz AMD EPYC™ ROME processor with a turbo frequency of 3.3 GHz. These processors provide stable computing performance.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   For information about operating system compatibility, see [AMD instance types and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#IXCNq).
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSD, and ultra disk. For more information, see [Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   The storage I/O performance of an instance depends on its compute specification. The higher the specification, the better the storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        

The g6a instance family includes the instance types and metric data shown in the following table.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Baseline disk IOPS**

**Baseline disk bandwidth (Gbit/s)**

ecs.g6a.large

2

8

1/10

0.9 million

Up to 0.25 million

2

2

6

1

12,500

1

ecs.g6a.xlarge

4

16

1.5/10

1 million

Up to 0.25 million

4

3

15

1

20,000

1.5

ecs.g6a.2xlarge

8

32

2.5/10

1.6 million

Up to 0.25 million

8

4

15

1

30,000

2

ecs.g6a.4xlarge

16

64

5/10

2 million

0.3 million

8

8

30

1

60,000

3.1

ecs.g6a.8xlarge

32

128

8/10

3 million

0.6 million

16

7

30

1

75,000

4.1

ecs.g6a.16xlarge

64

256

16 or None

6 million

1 million

32

8

30

1

150,000

8.2

ecs.g6a.32xlarge

128

512

32 or None

12 million

2 million

32

15

30

1

300,000

16.4

### g6e performance-enhanced general-purpose instance family

-   **Introduction**: Built on the third-generation SHENLONG architecture, g6e instances offload many virtualization features to dedicated hardware. This reduces virtualization overhead and provides stable and predictable ultra-high performance. They also use chip-level acceleration to provide significant improvements in storage and network performance, and computing stability.
    
-   **Scenarios**:
    
    -   High packet forwarding rate scenarios, such as live comments and telecommunication service forwarding.
        
    -   Enterprise applications of various types and sizes.
        
    -   Web and application servers.
        
    -   Game servers.
        
    -   Small and medium-sized database systems, caches, and search clusters.
        
    -   Data analytics and computing.
        
    -   Compute clusters and memory-dependent data processing.
        
-   **Compute**:
    
    -   Processor-to-memory ratio of approximately 1:4.
        
    -   Processor: 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processor with a turbo frequency of 3.2 GHz. These processors provide stable computing performance.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   The storage I/O performance of an instance depends on its compute specifications. The higher the specifications, the better the I/O performance. For more information, see [Storage I/O Performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
        **Note**
        
        Network performance varies based on the instance families. For higher concurrent connection and network packet forwarding capabilities, we recommend that you use the g7ne instance family.
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        

The g6e instance family includes the instance types and metrics described in the following table.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Baseline disk IOPS**

**Baseline disk bandwidth (Gbit/s)**

ecs.g6e.large

2

8

1.2/Up to 10

0.9 million

Up to 0.25 million

2

3

6

1

20,000

1

ecs.g6e.xlarge

4

16

2/Up to 10

1 million

Up to 0.25 million

4

4

15

1

40,000

1.5

ecs.g6e.2xlarge

8

32

3/Up to 10

1.6 million

Up to 0.25 million

8

4

15

1

50,000

2

ecs.g6e.4xlarge

16

64

6/Up to 10

3 million

0.3 million

8

8

30

1

80,000

3

ecs.g6e.8xlarge

32

128

10 / None

6 million

0.6 million

16

8

30

1

150,000

5

ecs.g6e.13xlarge

52

192

16 / None

9 million

1 million

32

7

30

1

240,000

8

ecs.g6e.26xlarge

104

384

32 or None

24 million

1.8 million

32

15

30

1

480,000

16

**Note**

-   Network capabilities represent the maximum performance in single-item tests. For example, when testing network bandwidth, stress tests are not simultaneously performed on the packet forwarding rate or other metrics.
    
-   To use ecs.g6e.26xlarge, you must [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl) to request access.
    

### g5 general-purpose instance family

-   **Scenarios**:
    
    -   High packet forwarding rate scenarios, such as live comments and telecommunication service forwarding.
        
    -   Enterprise applications of various types and sizes.
        
    -   Small and medium-sized database systems, caches, and search clusters.
        
    -   Data analytics and computing.
        
    -   Compute clusters and memory-dependent data processing.
        
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) or 8269CY (Cascade Lake) processor that provides stable computing performance.
        
        **Note**
        
        Instances of this family may be deployed on different server platforms. If your business requires instances to be deployed on the same server platform, we recommend that you use g6, g6e, or g7 instances.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), standard SSD, and ultra disk. For more information, see [Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
        **Note**
        
        The maximum performance of disks varies based on the instance families. A single instance of this instance family can deliver up to 200,000 IOPS.
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
        **Note**
        
        Network performance varies based on the instance families. For higher concurrent connection and network packet forwarding capabilities, we recommend that you use the g7ne instance family.
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        

The g5 instance family includes the following instance types and metrics.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline network bandwidth (Gbit/s)**

**Packets per second (PPS)**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.g5.large

2

8

1

0.3 million

2

2

6

1

ecs.g5.xlarge

4

16

1.5

0.5 million

2

3

10

1

ecs.g5.2xlarge

8

32

2.5

0.8 million

4

4

10

1

ecs.g5.3xlarge

12

48

4

0.9 million

4

6

10

1

ecs.g5.4xlarge

16

64

5

1 million

4

8

20

1

ecs.g5.6xlarge

24

96

7.5

1.5 million

6

8

20

1

ecs.g5.8xlarge

32

128

10

2 million

8

8

20

1

ecs.g5.16xlarge

64

256

20

4 million

16

8

20

1

### sn2ne network-enhanced general-purpose instance family

-   **Scenarios**:
    
    -   High packet forwarding rate scenarios, such as live comments and telecommunication service forwarding.
        
    -   Enterprise applications of various types and sizes.
        
    -   Small and medium-sized database systems, caches, and search clusters.
        
    -   Data analytics and computing.
        
    -   Compute clusters and memory-dependent data processing.
        
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: 2.5 GHz Intel® Xeon® E5-2682 v4 (Broadwell), Platinum 8163 (Skylake), or 8269CY (Cascade Lake) processor that provides stable computing performance.
        
        **Note**
        
        Instances of this family may be deployed on different server platforms. If your business requires instances to be deployed on the same server platform, we recommend that you use g6, g6e, or g7 instances.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supported disk types: standard SSDs and ultra disks. For more information, see [Overview of Elastic Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        

The sn2ne instance family includes the instance types and metrics listed in the following table.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.sn2ne.large

2

8

1

0.3 million

2

2

6

1

ecs.sn2ne.xlarge

4

16

1.5

0.5 million

2

3

10

1

ecs.sn2ne.2xlarge

8

32

2

1 million

4

4

10

1

ecs.sn2ne.3xlarge

12

48

2.5

1.3 million

4

6

10

1

ecs.sn2ne.4xlarge

16

64

3

1.6 million

4

8

20

1

ecs.sn2ne.6xlarge

24

96

4.5

2 million

6

8

20

1

ecs.sn2ne.8xlarge

32

128

6

2.5 million

8

8

20

1

ecs.sn2ne.14xlarge

56

224

10

4.5 million

14

8

20

1

### **c9ae, compute-optimized instance family**

-   **Introduction**: This instance family uses the innovative Cloud Infrastructure Processing Unit (CIPU) architecture developed by Alibaba Cloud and the latest AMD EPYC™ Turin processors. It uses physical cores to provide consistent computing power, a more robust I/O engine, and chip-level security hardening.
    
-   **Use cases**: Big data analytics (such as Spark, Flink, and ES), search, recommendation, and advertising (ps-worker), core transactional processing (TP) systems, audio and video transcoding, AI training and inference, and general-purpose enterprise applications (Java).
    
-   Compute:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses AMD EPYC™ Turin processors that have a turbo frequency of up to 3.7 GHz. The processors use physical cores to provide consistent computing performance.
        
    -   For information about OS compatibility, see [AMD instance type and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#6cc7ed4977cxh).
        
-   **Storage**:
    
    -   You can adjust the baseline storage bandwidth.
        
    -   I/O optimized instance.
        
    -   Supports the Non-Volatile Memory Express (NVMe) protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Offers burstable disk IOPS and burstable disk bandwidth for low-specification instances and provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   You can adjust the baseline network bandwidth.
        
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports elastic RDMA interfaces (ERIs). For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   Supports [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides high network performance based on large computing capacity.
        
-   **Security**:
    
    -   Supports the [Trusted Platform Module (vTPM)](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities) feature.
        
    -   Supports [VPC traffic encryption](/help/en/ecs/user-guide/vpc-traffic-encryption).
        

c9ae instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.c9ae.large

2

4

2.5/burstable up to 25

Up to 1,500,000

Up to 500,000

2

3

6

6

Up to 200,000

2.5/burstable up to 20

ecs.c9ae.xlarge

4

8

4/burstable up to 25

Up to 1,600,000

Up to 500,000

4

4

15

15

Up to 200,000

3/burstable up to 20

ecs.c9ae.2xlarge

8

16

6/burstable up to 25

Up to 2,500,000

Up to 500,000

8

4

15

15

Up to 200,000

4/burstable up to 20

ecs.c9ae.4xlarge

16

32

10/burstable up to 25

Up to 3,200,000

Up to 500,000

16

8

30

30

Up to 200,000

5.5/burstable up to 20

ecs.c9ae.8xlarge

32

64

16/burstable up to 25

Up to 5,000,000

Up to 1,000,000

32

8

30

30

Up to 200,000

8/burstable up to 20

ecs.c9ae.12xlarge

48

96

25/none

7,500,000

1,500,000

48

8

30

30

150,000

13/none

ecs.c9ae.16xlarge

64

128

32/none

10,000,000

2,000,000

64

8

30

30

200,000

16/none

ecs.c9ae.24xlarge

96

192

50/none

15,000,000

3,000,000

64

15

30

30

300,000

25/none

ecs.c9ae.32xlarge

128

256

64/none

20,000,000

4,000,000

64

15

30

30

400,000

32/none

ecs.c9ae.48xlarge

192

384

100/none

30,000,000

6,000,000

64

15

50

50

600,000

50/none

### **c9a, compute-optimized instance family**

-   **Introduction**: This instance family uses the innovative CIPU architecture developed by Alibaba Cloud and the latest AMD EPYC™ Turin processors to provide consistent computing power, a more robust I/O engine, and chip-level security hardening.
    
-   **Use cases**: Large and medium-sized database systems, game servers, financial quantization, blockchain, web and application servers, and other general-purpose enterprise applications.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses AMD EPYC™ Turin processors that have a turbo frequency of up to 4.1 GHz to provide consistent computing performance.
        
    -   For information about OS compatibility, see [AMD instance type and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#6cc7ed4977cxh).
        
-   **Storage**:
    
    -   All instances of this family are I/O optimized.
        
    -   Supports the [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [Elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Low-specification instances offer burstable disk IOPS and bandwidth. The storage I/O performance of an instance scales with its specifications. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   Network:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    
    -   Supports ERIs. For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   Supports [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides high network performance based on large computing capacity.
        
-   **Security**: Supports the [vTPM](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities) feature.
    

c9a instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.c9a.large

2

4

2.5/burstable up to 15

Up to 1,200,000

Up to 500,000

2

3

6

6

Up to 110,000

2/burstable up to 15

ecs.c9a.xlarge

4

8

4/burstable up to 15

Up to 1,400,000

Up to 500,000

4

4

15

15

Up to 110,000

3/burstable up to 15

ecs.c9a.2xlarge

8

16

6/burstable up to 15

Up to 2,000,000

Up to 500,000

8

4

15

15

Up to 110,000

4/burstable up to 15

ecs.c9a.4xlarge

16

32

12/burstable up to 25

Up to 3,000,000

Up to 500,000

16

8

30

30

Up to 110,000

5/burstable up to 15

ecs.c9a.8xlarge

32

64

16/burstable up to 32

Up to 4,000,000

Up to 800,000

32

8

30

30

Up to 110,000

8/burstable up to 15

ecs.c9a.16xlarge

64

128

32/none

7,500,000

1,500,000

64

8

30

30

120,000

16/none

### c9i, compute-optimized instance family

-   **Introduction**: This instance family uses the innovative Cloud Infrastructure Processing Unit (CIPU) architecture developed by Alibaba Cloud and Intel® Xeon® 6 processors with P-cores to provide consistent computing power, a more robust I/O engine, and chip-level security hardening.
    
-   **Use cases**: machine learning inference applications, data analytics, batch computing, video encoding, frontend game servers, high-performance scientific and engineering applications, and web frontend servers.
    
-   **Compute**:
    
    -   The processor-to-memory ratio is 1:2.
        
    -   Processor: Intel® Xeon® Granite Rapids with a 3.2 GHz clock speed, a 3.6 GHz all-core turbo frequency, and a 3.9 GHz maximum single-core turbo frequency.
        
        **Note**
        
        The system may display different frequencies for this instance. The 3.6 GHz all-core turbo frequency is stable and guaranteed. The 3.9 GHz maximum single-core turbo frequency is a burst capability that depends on the overall CPU load of the physical server and is not covered by the Service-Level Agreement (SLA).
        
    -   For more information about operating system compatibility, see [Operating system compatibility for Intel instance types](/help/en/ecs/intel-instance-specifications-and-operating-system-compatibility).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports ESSDs and ESSD AutoPL disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   For small instance types, disk IOPS and disk bandwidth are burstable. The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

c9i instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.c9i.large

2

4

2.5/burstable up to 15

1,000,000

Up to 500,000

2

3

6

6

25,000/burstable up to 200,000

2/burstable up to 10

ecs.c9i.xlarge

4

8

4/burstable up to 15

1,200,000

Up to 500,000

4

4

15

15

50,000/burstable up to 200,000

2.5/burstable up to 10

ecs.c9i.2xlarge

8

16

6/burstable up to 15

1,600,000

Up to 500,000

8

4

15

15

60,000/burstable up to 200,000

4/burstable up to 10

ecs.c9i.3xlarge

12

24

10/burstable up to 15

2,400,000

Up to 500,000

12

8

15

15

80,000/burstable up to 200,000

5/burstable up to 10

ecs.c9i.4xlarge

16

32

12/burstable up to 25

3,000,000

500,000

16

8

30

30

100,000/burstable up to 200,000

6/burstable up to 10

ecs.c9i.6xlarge

24

48

15/burstable up to 25

4,500,000

600,000

24

8

30

30

120,000/burstable up to 200,000

7.5/burstable up to 10

ecs.c9i.8xlarge

32

64

20/burstable up to 32

6,000,000

800,000

32

8

30

30

200,000/burstable up to 300,000

10/burstable up to 12

ecs.c9i.12xlarge

48

96

25/burstable up to 32

9,000,000

1,600,000

48

8

30

30

240,000/burstable up to 320,000

12/burstable up to 15

ecs.c9i.16xlarge

64

128

28/burstable up to 36

12,000,000

2,000,000

64

8

30

30

300,000/burstable up to 400,000

16/burstable up to 24

ecs.c9i.24xlarge

96

192

32/burstable up to 48

18,000,000

3,000,000

64

15

30

30

350,000/burstable up to 600,000

20/burstable up to 28

ecs.c9i.32xlarge

128

256

36/burstable up to 50

20,000,000

4,000,000

64

15

30

30

400,000/burstable up to 650,000

24/burstable up to 28

ecs.c9i.48xlarge

192

384

64/none

24,000,000

6,000,000

64

15

50

50

500,000/burstable up to 800,000

32/none

### c8a, compute-optimized instance family

-   **Introduction**: This instance family uses the innovative CIPU architecture developed by Alibaba Cloud to provide consistent computing power, a more robust I/O engine, and chip-level security hardening.
    
-   **Use cases**: big data applications, web applications, AI training and inference, and audio and video transcoding applications.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.7 GHz AMD EPYCTM Genoa processors that deliver a turbo frequency of up to 3.7 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   Is compatible with specific operating systems. For more information, see [AMD instance type and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#IXCNq).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Offers burstable disk IOPS and burstable disk bandwidth for low-specification instances and provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides burstable network bandwidth for low-specification instances.
        
    -   Provides high network performance based on large computing capacity.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

c8a instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.c8a.large

2

4

1.5/burstable up to 12.5

900,000

Up to 250,000

2

3

6

6

20,000/burstable up to 110,000

1.5/burstable up to 10

ecs.c8a.xlarge

4

8

2.5/burstable up to 12.5

1,000,000

Up to 250,000

4

4

15

15

30,000/burstable up to 110,000

2/burstable up to 10

ecs.c8a.2xlarge

8

16

4/burstable up to 12.5

1,600,000

Up to 250,000

8

4

15

15

45,000/burstable up to 110,000

2.5/burstable up to 10

ecs.c8a.4xlarge

16

32

7/burstable up to 12.5

2,000,000

300,000

16

8

30

30

60,000/burstable up to 110,000

3.5/burstable up to 10

ecs.c8a.8xlarge

32

64

10/burstable up to 25

3,000,000

600,000

32

8

30

30

80,000/burstable up to 110,000

5/burstable up to 10

ecs.c8a.12xlarge

48

96

16/25

4,500,000

750,000

48

8

30

30

120,000/none

8/burstable up to 10

ecs.c8a.16xlarge

64

128

20/25

6,000,000

1,000,000

64

8

30

30

160,000/none

10/none

ecs.c8a.24xlarge

96

192

32/none

9,000,000

1,500,000

64

15

30

30

240,000/none

16/none

ecs.c8a.32xlarge

128

256

40/none

12,000,000

2,000,000

64

15

30

30

320,000/none

20/none

ecs.c8a.48xlarge

192

384

64/none

18,000,000

3,000,000

64

15

50

50

500,000/none

32/none

**Note**

For ecs.c8a.large and ecs.c8a.xlarge instances, you must enable the Jumbo Frames feature before the instances can burst their network bandwidths to 12.5 Gbit/s. For more information, see [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).

### c8i, compute-optimized instance family

-   **Introduction**: This instance family uses the innovative CIPU architecture developed by Alibaba Cloud to provide consistent computing power, a more robust I/O engine, and chip-level security hardening.
    
-   **Use cases**: machine learning inference applications, data analytics, batch computing, video encoding, frontend servers for games, high-performance scientific and engineering applications, and web frontend servers.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses Intel® Xeon® Emerald Rapids or Intel® Xeon® Sapphire Rapids processors that deliver a clock speed of at least 2.7 GHz and an all-core turbo frequency of 3.2 GHz to provide consistent computing performance.
        
        **Note**
        
        When you purchase an instance of this family, the system randomly assigns one of the preceding processors. You cannot manually select a processor.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   For information about operating system compatibility, see [Intel instance types and operating system compatibility](/help/en/ecs/intel-instance-specifications-and-operating-system-compatibility).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Offers burstable disk IOPS and burstable disk bandwidth for low-specification instances and provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides burstable network bandwidth for low-specification instances.
        
    -   Provides high network performance based on large computing capacity.
        
-   **Security**:
    
    -   These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
        
    -   Implements trusted boot based on Trusted Cryptography Module (TCM) or TPM chips to provide ultra-high security capabilities. During a trusted boot, all modules in the boot chain from the underlying server to the ECS instance are measured and verified.
        
    -   Instances with 4 or more vCPUs support the Alibaba Cloud virtualized enclave feature, which provides a virtualization-based confidential computing environment. For more information, see [Build a confidential computing environment with an enclave](/help/en/ecs/user-guide/build-a-confidential-computing-environment-by-using-enclave#task-2038130).
        
    -   Supports Intel Total Memory Encryption (TME) to encrypt memory.
        
    

c8i instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.c8i.large

2

4

2.5/burstable up to 15

1,000,000

Up to 300,000

2

3

6

6

25,000/burstable up to 200,000

2/burstable up to 10

ecs.c8i.xlarge

4

8

4/burstable up to 15

1,200,000

Up to 300,000

4

4

15

15

50,000/burstable up to 200,000

2.5/burstable up to 10

ecs.c8i.2xlarge

8

16

6/burstable up to 15

1,600,000

Up to 300,000

8

4

15

15

60,000/burstable up to 200,000

4/burstable up to 10

ecs.c8i.3xlarge

12

24

10/burstable up to 15

2,400,000

Up to 300,000

12

8

15

15

80,000/burstable up to 200,000

5/burstable up to 10

ecs.c8i.4xlarge

16

32

12/burstable up to 25

3,000,000

350,000

16

8

30

30

100,000/burstable up to 200,000

6/burstable up to 10

ecs.c8i.6xlarge

24

48

15/burstable up to 25

4,500,000

500,000

24

8

30

30

120,000/burstable up to 200,000

7.5/burstable up to 10

ecs.c8i.8xlarge

32

64

20/burstable up to 25

6,000,000

800,000

32

8

30

30

200,000/none

10/none

ecs.c8i.12xlarge

48

96

25/none

9,000,000

1,000,000

48

8

30

30

300,000/none

12/none

ecs.c8i.16xlarge

64

128

32/none

12,000,000

1,600,000

64

8

30

30

360,000/none

20/none

ecs.c8i.24xlarge

96

192

50/none

18,000,000

2,000,000

64

15

30

30

500,000/none

24/none

ecs.c8i.48xlarge

192

512

100/none

30,000,000

4,000,000

64

15

50

50

1,000,000/none

48/none

### c8ine, network-enhanced compute-optimized instance family

-   **Introduction**: This instance family is built on the new Alibaba Cloud Cloud Infrastructure Processing Unit (CIPU) architecture, which provides stable computing power and a powerful I/O engine.
    
-   **Scenarios**: This instance family is ideal for network-intensive scenarios that require excellent forwarding and connectivity, such as network access layer gateways, traffic and data forwarding, or pre-processing middleware. These instances are also suitable for large websites, E-commerce, and AI applications as part of a cloud solution.
    
-   **Compute**:
    
    -   The vCPU-to-memory ratio is 1:2.
        
    -   Processor: Powered by Intel® Xeon® Emerald Rapids or Intel® Xeon® Sapphire Rapids processors with a base clock speed of 2.7 GHz and an all-core turbo frequency of 3.2 GHz to provide stable computing performance.
        
    -   Hyper-threading is supported and enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   This is an I/O optimized instance.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: ESSDs, ESSD AutoPL disks, and Regional ESSDs. For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Smaller instance types support burstable disk IOPS and bandwidth.
        
-   **Network**:
    
    -   This instance family supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance is determined by its instance type. Larger instance types provide higher network performance.
        
-   **Security**: This instance family supports the Trusted Platform Module (vTPM) feature. For more information, see [Overview of trusted computing capabilities](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

c8ine instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network bandwidth baseline/burst (Gbit/s)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**EBS multi-queue**

**Disk baseline/burst IOPS**

**Disk bandwidth baseline/burst (Gbit/s)**

ecs.c8ine.large

2

4

4/Up to 24

600,000

2

3

10

10

1

20,000/Up to 80,000

2/Up to 8

ecs.c8ine.xlarge

4

8

7/Up to 28

1,200,000

4

4

15

15

1

40,000/Up to 80,000

2.5/Up to 8

ecs.c8ine.2xlarge

8

16

12/Up to 35

2,000,000

8

6

15

15

2

50,000/Up to 80,000

4/Up to 8

ecs.c8ine.4xlarge

16

32

23/Up to 44

3,500,000

16

8

30

30

2

80,000/Up to 100,000

6/Up to 10

ecs.c8ine.8xlarge

32

64

44/none

7,000,000

32

8

30

30

4

100,000/none

10/none

### c8ae, performance-enhanced compute-optimized instance family

-   **Introduction**: This instance family uses the innovative CIPU architecture developed by Alibaba Cloud to provide consistent computing power, a more robust I/O engine, and chip-level security hardening.
    
-   **Use cases**:
    
    -   AI use cases, such as deep learning and training, and AI inference
        
    -   High-performance scientific computing scenarios, such as high-performance computing (HPC)
        
    -   Large and medium-sized database systems, caches, and search clusters
        
    -   Servers for massively multiplayer online (MMO) games
        
    -   Other general-purpose enterprise-level applications that have high performance requirements
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 3.4 GHz AMD EPYCTM Genoa processors that deliver a single-core turbo frequency of up to 3.75 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   Is compatible with specific operating systems. For more information, see [AMD instance type and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#IXCNq).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Offers burstable disk IOPS and burstable disk bandwidth for low-specification instances and provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides burstable network bandwidth for low-specification instances.
        
    -   Provides high network performance based on large computing capacity.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

c8ae instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Support for vTPM**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.c8ae.large

2

4

3/burstable up to 15

1,000,000

Yes

Up to 300,000

2

3

6

6

30,000/burstable up to 200,000

2/burstable up to 10

ecs.c8ae.xlarge

4

8

4/burstable up to 15

1,200,000

Yes

Up to 300,000

4

4

15

15

50,000/burstable up to 200,000

2.5/burstable up to 10

ecs.c8ae.2xlarge

8

16

6/burstable up to 15

1,600,000

Yes

Up to 300,000

8

4

15

15

60,000/burstable up to 200,000

3/burstable up to 10

ecs.c8ae.4xlarge

16

32

12/burstable up to 25

3,000,000

Yes

500,000

16

8

30

30

100,000/burstable up to 200,000

6/burstable up to 10

ecs.c8ae.8xlarge

32

64

20/burstable up to 25

6,000,000

Yes

1,000,000

32

8

30

30

200,000/none

10/none

ecs.c8ae.16xlarge

64

128

32/none

9,000,000

Yes

1,500,000

64

8

30

30

250,000/none

16/none

ecs.c8ae.32xlarge

128

256

64/none

18,000,000

Yes

3,000,000

64

15

30

30

500,000/none

32/none

**Note**

For ecs.c8ae.large and ecs.c8ae.xlarge instances, you must enable the Jumbo Frames feature before the instances can burst their network bandwidths to 15 Gbit/s. For more information, see [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).

### c7a, compute-optimized instance family

-   **Introduction**: This instance family uses the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
    
-   **Use cases**:
    
    -   Video encoding and decoding
        
    -   Use cases where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Web frontend servers
        
    -   Frontend servers for MMO games
        
    -   Use cases where applications such as DevOps applications are developed and tested
        
    -   Data analytics and batch computing
        
    -   High-performance scientific and engineering applications
        
    -   Enterprise-level applications of various types and sizes
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.55 GHz AMD EPYC™ MILAN processors that deliver a single-core turbo frequency of up to 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   Is compatible with specific operating systems. For more information, see [AMD instance type and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#IXCNq).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Offers burstable disk IOPS and burstable disk bandwidth for low-specification instances and provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides burstable network bandwidth for low-specification instances.
        
    -   Provides high network performance based on large computing capacity.
        

c7a includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.c7a.large

2

4

1/burstable up to 10

900,000

Up to 250,000

2

3

6

6

12,500/burstable up to 110,000

1/burstable up to 6

ecs.c7a.xlarge

4

8

1.5/burstable up to 10

1,000,000

Up to 250,000

4

4

15

15

20,000/burstable up to 110,000

1.5/burstable up to 6

ecs.c7a.2xlarge

8

16

2.5/burstable up to 10

1,600,000

Up to 250,000

8

4

15

15

30,000/burstable up to 110,000

2/burstable up to 6

ecs.c7a.4xlarge

16

32

5/burstable up to 10

2,000,000

300,000

8

8

30

30

60,000/burstable up to 110,000

3/burstable up to 6

ecs.c7a.8xlarge

32

64

8/burstable up to 10

3,000,000

600,000

16

7

30

30

75,000/burstable up to 110,000

4/burstable up to 6

ecs.c7a-nps1.8xlarge

32

64

8/burstable up to 10

3,000,000

600,000

16

7

30

30

75,000/burstable up to 110,000

4/burstable up to 6

ecs.c7a.16xlarge

64

128

16/none

6,000,000

1,000,000

32

7

30

30

150,000/none

8/none

ecs.c7a-nps1.16xlarge

64

128

16/none

3,000,000

1,000,000

32

7

30

30

150,000/none

8/none

ecs.c7a.32xlarge

128

256

32/none

12,000,000

2,000,000

32

15

30

30

300,000/none

16/none

**Note**

Ubuntu 16 and Debian 9 operating system kernels do not support AMD EPYC™ MILAN processors. Do not use Ubuntu 16 or Debian 9 images to create instances of this instance family. Instances of this instance family created from Ubuntu 16 or Debian 9 images cannot be started.

### c7, compute-optimized instance family

-   **Introduction**: This instance family uses the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
    
-   **Use cases**:
    
    -   Use cases where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Frontend servers for MMO games
        
    -   Web frontend servers
        
    -   Data analytics, batch computing, and video encoding
        
    -   High-performance scientific and engineering applications
        
    -   Scenarios that require secure and trusted computing
        
    -   Enterprise-level applications of various types and sizes
        
    -   Blockchain scenarios
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.7 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Offers burstable disk IOPS and burstable disk bandwidth for low-specification instances and provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides burstable network bandwidth for low-specification instances.
        
    -   Provides high network performance based on large computing capacity.
        
-   **Security**:
    
    -   Supports the vTPM feature. For more information, see [Overview of trusted computing capabilities](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
        
    -   Supports the Enclave feature and provides virtualization-based confidential computing environments. For more information, see [Build a confidential computing environment by using Enclave](/help/en/ecs/user-guide/build-a-confidential-computing-environment-by-using-enclave#task-2038130).
        

c7 includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Support for vTPM**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum attached data disks**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.c7.large

2

4

2/burstable up to 12.5

1,100,000

Yes

Up to 500,000

2

3

6

6

8

20,000/burstable up to 160,000

1.5/burstable up to 10

ecs.c7.xlarge

4

8

3/burstable up to 12.5

1,100,000

Yes

Up to 500,000

4

4

15

15

8

40,000/burstable up to 160,000

2/burstable up to 10

ecs.c7.2xlarge

8

16

5/burstable up to 15

1,600,000

Yes

Up to 500,000

8

4

15

15

16

50,000/burstable up to 160,000

3/burstable up to 10

ecs.c7.3xlarge

12

24

8/burstable up to 15

2,400,000

Yes

Up to 500,000

8

8

15

15

16

70,000/burstable up to 160,000

4/burstable up to 10

ecs.c7.4xlarge

16

32

10/burstable up to 25

3,000,000

Yes

500,000

8

8

30

30

16

80,000/burstable up to 160,000

5/burstable up to 10

ecs.c7.6xlarge

24

48

12/burstable up to 25

4,500,000

Yes

550,000

12

8

30

30

16

110,000/burstable up to 160,000

6/10

ecs.c7.8xlarge

32

64

16/burstable up to 32

6,000,000

Yes

600,000

16

8

30

30

24

160,000/none

10/none

ecs.c7.16xlarge

64

128

32/none

12,000,000

Yes

1,200,000

32

8

30

30

32

360,000/none

16/none

ecs.c7.32xlarge

128

256

64/none

24,000,000

Yes

2,400,000

32

15

30

30

32

600,000/none

32/none

### c6, compute-optimized instance family

-   **Introduction**: This instance family offloads a large number of virtualization features to dedicated hardware by using the SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads.
    
-   **Use cases**:
    
    -   Use cases where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Web frontend servers
        
    -   Frontend servers for MMO games
        
    -   Data analytics, batch computing, and video encoding
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    
    **Note**
    
    The maximum performance of disks varies based on the instance families. A single instance of this instance family can deliver up to 200,000 IOPS.
    
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

c6 includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.c6.large

2

4

1/burstable up to 3

300,000

Up to 250,000

2

2

6

1

10,000

1

ecs.c6.xlarge

4

8

1.5/burstable up to 5

500,000

Up to 250,000

4

3

10

1

20,000

1.5

ecs.c6.2xlarge

8

16

2.5/burstable up to 8

800,000

Up to 250,000

8

4

10

1

25,000

2

ecs.c6.3xlarge

12

24

4/burstable up to 10

900,000

Up to 250,000

8

6

10

10

30,000

2.5

ecs.c6.4xlarge

16

32

5/burstable up to 10

1,000,000

300,000

8

8

20

1

40,000

3

ecs.c6.6xlarge

24

48

7.5/burstable up to 10

1,500,000

450,000

12

8

20

1

50,000

4

ecs.c6.8xlarge

32

64

10/none

2,000,000

600,000

16

8

20

1

60,000

5

ecs.c6.13xlarge

52

96

12.5/none

3,000,000

900,000

32

7

20

1

100,000

8

ecs.c6.26xlarge

104

192

25/none

6,000,000

1,800,000

32

15

20

1

200,000

16

### c6a, compute-optimized instance family

-   **Introduction**: This instance family offloads a large number of virtualization features to dedicated hardware by using the SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads.
    
-   **Use cases**: video encoding and decoding, scenarios in which large volumes of packets are received and transmitted, web frontend servers, frontend servers for MMO games, and scenarios where applications such as DevOps applications are developed and tested.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.6 GHz AMD EPYC™ ROME processors that deliver a turbo frequency of 3.3 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   Is compatible with specific operating systems. For more information, see [AMD instance type and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#IXCNq).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

c6a includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.c6a.large

2

4

1/10

900,000

Up to 250,000

2

2

6

1

12,500

1

ecs.c6a.xlarge

4

8

1.5/10

1,000,000

Up to 250,000

4

3

15

1

20,000

1.5

ecs.c6a.2xlarge

8

16

2.5/10

1,600,000

Up to 250,000

8

4

15

1

30,000

2

ecs.c6a.4xlarge

16

32

5/10

2,000,000

300,000

8

8

30

1

60,000

3.1

ecs.c6a.8xlarge

32

64

8/10

3,000,000

600,000

16

7

30

1

75,000

4.1

ecs.c6a.16xlarge

64

128

16/none

6,000,000

1,000,000

32

8

30

1

150,000

8.2

ecs.c6a.32xlarge

128

256

32/none

12,000,000

2,000,000

32

15

30

1

300,000

16.4

### c6e, performance-enhanced compute-optimized instance family

-   **Introduction**: This instance family offloads a large number of virtualization features to dedicated hardware by using the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
    
-   **Use cases**:
    
    -   Use cases where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Web frontend servers
        
    -   Frontend servers for MMO games
        
    -   Data analytics, batch computing, and video encoding
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
        **Note**
        
        Network performance varies based on the instance families. For higher concurrent connection and network packet forwarding capabilities, we recommend that you use the g7ne instance family.
        
    -   Provides high network performance based on large computing capacity.
        

c6e includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.c6e.large

2

4

1.2/burstable up to 10

900,000

Up to 250,000

2

3

6

1

20,000

1

ecs.c6e.xlarge

4

8

2/burstable up to 10

1,000,000

Up to 250,000

4

4

15

1

40,000

1.5

ecs.c6e.2xlarge

8

16

3/burstable up to 10

1,600,000

Up to 250,000

8

4

15

1

50,000

2

ecs.c6e.4xlarge

16

32

6/burstable up to 10

3,000,000

300,000

8

8

30

1

80,000

3

ecs.c6e.8xlarge

32

64

10/none

6,000,000

600,000

16

8

30

1

150,000

5

ecs.c6e.13xlarge

52

96

16/none

9,000,000

1,000,000

32

7

30

1

240,000

8

ecs.c6e.26xlarge

104

192

32/none

24,000,000

1,800,000

32

15

30

1

480,000

16

### c5, compute-optimized instance family

-   **Use cases**:
    
    -   Use cases where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Web frontend servers
        
    -   Frontend servers for MMO games
        
    -   Data analytics, batch computing, and video encoding
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) or 8269CY (Cascade Lake) processors to provide consistent computing performance.
        
        **Note**
        
        Instances of this instance family may be deployed on different server platforms. If your business requires all instances to be deployed on the same server platform, we recommend that you use the c6, c6e, or c7 instance family.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    
    **Note**
    
    The maximum performance of disks varies based on the instance families. A single instance of this instance family can deliver up to 200,000 IOPS.
    
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

c5 includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.c5.large

2

4

1

300,000

2

2

6

1

ecs.c5.xlarge

4

8

1.5

500,000

2

3

10

1

ecs.c5.2xlarge

8

16

2.5

800,000

4

4

10

1

ecs.c5.3xlarge

12

24

4

900,000

4

6

10

1

ecs.c5.4xlarge

16

32

5

1,000,000

4

8

20

1

ecs.c5.6xlarge

24

48

7.5

1,500,000

6

8

20

1

ecs.c5.8xlarge

32

64

10

2,000,000

8

8

20

1

ecs.c5.16xlarge

64

128

20

4,000,000

16

8

20

1

### ic5, compute-intensive instance family

-   **Use cases**:
    
    -   Web frontend servers
        
    -   Data analytics, batch computing, and video encoding
        
    -   Use cases where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Frontend servers for MMO games
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:1.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) or 8269CY (Cascade Lake) processors that deliver an all-core turbo frequency of 2.7 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports only IPv4.
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

ic5 includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

ecs.ic5.large

2

2

1

300,000

2

2

6

ecs.ic5.xlarge

4

4

1.5

500,000

2

3

10

ecs.ic5.2xlarge

8

8

2.5

800,000

2

4

10

ecs.ic5.3xlarge

12

12

4

900,000

4

6

10

ecs.ic5.4xlarge

16

16

5

1,000,000

4

8

20

ecs.ic5.6xlarge

24

24

7.5

1,500,000

6

8

20

ecs.ic5.8xlarge

32

32

10

2,000,000

8

8

20

ecs.ic5.16xlarge

64

64

20

3,000,000

16

8

20

### sn1ne, network-enhanced compute-optimized instance family

-   **Use cases**:
    
    -   Use cases where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Web frontend servers
        
    -   Frontend servers for MMO games
        
    -   Data analytics, batch computing, and video encoding
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.5 GHz Intel® Xeon® E5-2682 v4 (Broadwell), Platinum 8163 (Skylake), or 8269CY (Cascade Lake) processors to provide consistent computing performance.
        
        **Note**
        
        Instances of this instance family may be deployed on different server platforms. If your business requires all instances to be deployed on the same server platform, we recommend that you use the c6, c6e, or c7 instance family.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

sn1ne includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.sn1ne.large

2

4

1

300,000

2

2

6

1

ecs.sn1ne.xlarge

4

8

1.5

500,000

2

3

10

1

ecs.sn1ne.2xlarge

8

16

2

1,000,000

4

4

10

1

ecs.sn1ne.3xlarge

12

24

2.5

1,300,000

4

6

10

1

ecs.sn1ne.4xlarge

16

32

3

1,600,000

4

8

20

1

ecs.sn1ne.6xlarge

24

48

4.5

2,000,000

6

8

20

1

ecs.sn1ne.8xlarge

32

64

6

2,500,000

8

8

20

1

### **r9ae, memory-optimized instance family**

-   **Introduction**: This instance family is built on the new Alibaba Cloud Cloud Infrastructure Processing Unit (CIPU) architecture and uses the latest AMD EPYC™ Turin processors. The physical core design provides stable computing power, a powerful I/O engine, and chip-level security hardening.
    
-   **Use cases**: Big data analytics (such as Spark, Flink, and ES), search, recommendation, and advertising (ps-worker), core transaction systems, audio and video transcoding, AI training and inference, and general-purpose enterprise applications (Java).
    
-   **Compute**:
    
    -   The vCPU to memory ratio is 1:8.
        
    -   Processor: AMD EPYC™ Turin processor with a turbo frequency of up to 3.7 GHz. The physical core design ensures stable computing performance.
        
    -   For information about operating system compatibility, see [AMD instance type and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#6cc7ed4977cxh).
        
-   **Storage**:
    
    -   Supports adjusting the baseline storage bandwidth.
        
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports the Non-Volatile Memory Express (NVMe) protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Smaller instance types feature burstable disk input/output operations per second (IOPS) and disk bandwidth. Storage I/O performance scales with the instance type. Larger instance types provide higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports adjusting the baseline storage bandwidth.
        
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports ERIs. For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   Supports the Jumbo Frames feature. For more information, see [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides high network performance based on large computing capacity.
        
-   **Security**:
    
    -   Supports [Trusted Platform Module (vTPM)](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
        
    -   Supports [VPC traffic encryption](/help/en/ecs/user-guide/vpc-traffic-encryption).
        

r9ae instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Baseline disk IOPS**

**Baseline/Burst disk bandwidth (Gbit/s)**

ecs.r9ae.large

2

16

2.5/Up to 25

Up to 1,500,000

Up to 500,000

2

3

6

6

Up to 200,000

2.5/Up to 20

ecs.r9ae.xlarge

4

32

4/Up to 25

Up to 1,600,000

Up to 500,000

4

4

15

15

Up to 200,000

3/Up to 20

ecs.r9ae.2xlarge

8

64

6/Up to 25

Up to 2,500,000

Up to 500,000

8

4

15

15

Up to 200,000

4/Up to 20

ecs.r9ae.4xlarge

16

128

10/Up to 25

Up to 3,200,000

Up to 500,000

16

8

30

30

Up to 200,000

5.5/Up to 20

ecs.r9ae.8xlarge

32

256

16/Up to 25

Up to 5,000,000

Up to 1,000,000

32

8

30

30

Up to 200,000

8/Up to 20

ecs.r9ae.12xlarge

48

384

25/None

7,500,000

1,500,000

48

8

30

30

150,000

13/None

ecs.r9ae.16xlarge

64

512

32/None

10,000,000

2,000,000

64

8

30

30

200,000

16/None

ecs.r9ae.24xlarge

96

768

50/None

15,000,000

3,000,000

64

15

30

30

300,000

25/None

ecs.r9ae.32xlarge

128

1024

64/None

20,000,000

4,000,000

64

15

30

30

400,000

32/None

ecs.r9ae.48xlarge

192

1536

100/None

30,000,000

6,000,000

64

15

50

50

600,000

50/None

### **r9a, memory-optimized instance family**

-   **Introduction**: This instance family is built on the new Alibaba Cloud CIPU architecture and uses the latest AMD EPYC™ Turin processors. It delivers stable computing power, a powerful I/O engine, and chip-level security hardening.
    
-   **Use cases**: Medium to large database systems, game servers, finance quantization, blockchain, website and application servers, and other general-purpose enterprise applications.
    
-   **Compute**:
    
    -   The processor-to-memory ratio is 1:8.
        
    -   Processor: AMD EPYC™ Turin processors with a turbo frequency of up to 4.1 GHz and stable computing performance.
        
    -   For more information about operating system compatibility, see [AMD instance type and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#6cc7ed4977cxh).
        
-   **Storage**:
    
    -   Is an I/O optimized instance.
        
    -   Supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Smaller instance types support burstable disk IOPS and bandwidth. An instance's storage I/O performance is determined by its instance type. Instances with higher specifications deliver better storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports both IPv4 and IPv6. For more information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports ERIs. For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   Supports the Jumbo Frames feature. For more information, see [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides high network performance based on large computing capacity.
        
-   **Security**: Supports the [vTPM attribute](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

r9a instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Baseline disk IOPS**

**Baseline/Burst disk bandwidth (Gbit/s)**

ecs.r9a.large

2

16

2.5/Up to 15

Up to 1.2 million

Up to 500,000

2

3

6

6

Up to 110,000

2/Up to 15

ecs.r9a.xlarge

4

32

4/Up to 15

Up to 1.4 million

Up to 500,000

4

4

15

15

Up to 110,000

3/Up to 15

ecs.r9a.2xlarge

8

64

6/Up to 15

Up to 2 million

Up to 500,000

8

4

15

15

Up to 110,000

4/Up to 15

ecs.r9a.4xlarge

16

128

12/Up to 25

Up to 3 million

Up to 500,000

16

8

30

30

Up to 110,000

5/Up to 15

ecs.r9a.8xlarge

32

256

16/Up to 32

Up to 4 million

Up to 800,000

32

8

30

30

Up to 110,000

8/Up to 15

### r9i, memory-optimized instance family

-   **Introduction**: This instance family uses the innovative Cloud Infrastructure Processing Unit (CIPU) architecture developed by Alibaba Cloud and Intel® Xeon® 6 processors with P-cores to provide consistent computing power, a more robust I/O engine, and chip-level security hardening.
    
-   **Use cases**: data analytics and mining, enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters, distributed in-memory cache such as Redis, websites, and application servers.
    
-   **Compute**:
    
    -   The processor-to-memory ratio is 1:8.
        
    -   Processor: Intel® Xeon® Granite Rapids with a 3.2 GHz clock speed, 3.6 GHz all-core turbo frequency, and 3.9 GHz maximum single-core turbo frequency.
        
        **Note**
        
        This instance may display different frequencies. The all-core turbo frequency of 3.6 GHz is stable and guaranteed. The maximum single-core turbo frequency of 3.9 GHz is a burst feature. The availability of this burst performance depends on the overall CPU load of the physical server and is not guaranteed by the Service-Level Agreement (SLA).
        
    -   For information about operating system compatibility, see [Operating system compatibility for Intel instance types](/help/en/ecs/intel-instance-specifications-and-operating-system-compatibility).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports ESSDs, Regional ESSDs, ESSD AutoPL disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   For small instance types, disk IOPS and disk bandwidth are burstable. The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

r9i instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.r9i.large

2

16

2.5/burstable up to 15

1,000,000

Up to 500,000

2

3

6

6

25,000/burstable up to 200,000

2/burstable up to 10

ecs.r9i.xlarge

4

32

4/burstable up to 15

1,200,000

Up to 500,000

4

4

15

15

50,000/burstable up to 200,000

2.5/burstable up to 10

ecs.r9i.2xlarge

8

64

6/burstable up to 15

1,600,000

Up to 500,000

8

4

15

15

60,000/burstable up to 200,000

4/burstable up to 10

ecs.r9i.3xlarge

12

96

10/burstable up to 15

2,400,000

Up to 500,000

12

8

15

15

80,000/burstable up to 200,000

5/burstable up to 10

ecs.r9i.4xlarge

16

128

12/burstable up to 25

3,000,000

500,000

16

8

30

30

100,000/burstable up to 200,000

6/burstable up to 10

ecs.r9i.6xlarge

24

192

15/burstable up to 25

4,500,000

600,000

24

8

30

30

120,000/burstable up to 200,000

7.5/burstable up to 10

ecs.r9i.8xlarge

32

256

20/burstable up to 32

6,000,000

800,000

32

8

30

30

200,000/burstable up to 300,000

10/burstable up to 12

ecs.r9i.12xlarge

48

384

25/burstable up to 32

9,000,000

1,600,000

48

8

30

30

240,000/burstable up to 320,000

12/burstable up to 15

ecs.r9i.16xlarge

64

512

28/burstable up to 36

12,000,000

2,000,000

64

8

30

30

300,000/burstable up to 400,000

16/burstable up to 24

ecs.r9i.24xlarge

96

768

32/burstable up to 48

18,000,000

3,000,000

64

15

30

30

350,000/burstable up to 600,000

20/burstable up to 28

ecs.r9i.32xlarge

128

1,024

36/burstable up to 50

20,000,000

4,000,000

64

15

30

30

400,000/burstable up to 650,000

24/burstable up to 28

ecs.r9i.48xlarge

192

1,536

64/none

24,000,000

6,000,000

64

15

50

50

500,000/burstable up to 800,000

32/none

### r8a, memory-optimized instance family

-   **Introduction**: This instance family uses the innovative CIPU architecture developed by Alibaba Cloud to provide stable computing power, a more robust I/O engine, and chip-level security hardening.
    
-   **Use cases**:
    
    -   Memory-intensive, general-purpose, enterprise-level applications such as Java
        
    -   Various in-memory database applications such as Redis and Memcache
        
    -   Big data applications such as Kafka and Elasticsearch
        
    -   Audio and video transcoding applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.7 GHz AMD EPYCTM Genoa processors that deliver a turbo frequency of up to 3.7 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   Is compatible with specific operating systems. For more information, see the [AMD instance type and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#IXCNq) section of the "Compatibility between AMD instance types and operating systems" topic.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [Elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSD](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Offers burstable disk IOPS and burstable disk bandwidth for low-specification instances and provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports ERIs. For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   Supports the Jumbo Frames feature. For more information, see [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides burstable network bandwidth for low-specification instances.
        
    -   Provides high network performance based on large computing capacity.
        
-   **Security**: Supports the virtual Trusted Platform Module (vTPM) feature. For more information, see [Overview of trusted computing capabilities](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

r8a instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.r8a.large

2

16

1.5/burstable up to 12.5

900,000

Up to 250,000

2

3

6

6

20,000/burstable up to 110,000

1.5/burstable up to 10

ecs.r8a.xlarge

4

32

2.5/burstable up to 12.5

1,000,000

Up to 250,000

4

4

15

15

30,000/burstable up to 110,000

2/burstable up to 10

ecs.r8a.2xlarge

8

64

4/burstable up to 12.5

1,600,000

Up to 250,000

8

4

15

15

45,000/burstable up to 110,000

2.5/burstable up to 10

ecs.r8a.4xlarge

16

128

7/burstable up to 12.5

2,000,000

300,000

16

8

30

30

60,000/burstable up to 110,000

3.5/burstable up to 10

ecs.r8a.8xlarge

32

256

10/burstable up to 25

3,000,000

600,000

32

8

30

30

80,000/burstable up to 110,000

5/burstable up to 10

ecs.r8a.12xlarge

48

384

16/25

4,500,000

750,000

48

8

30

30

120,000/none

8/burstable up to 10

ecs.r8a.16xlarge

64

512

20/25

6,000,000

1,000,000

64

8

30

30

160,000/none

10/none

ecs.r8a.24xlarge

96

768

32/none

9,000,000

1,500,000

64

15

30

30

240,000/none

16/none

ecs.r8a.32xlarge

128

1,024

40/none

12,000,000

2,000,000

64

15

30

30

320,000/none

20/none

ecs.r8a.48xlarge

192

1,536

64/none

18,000,000

3,000,000

64

15

50

50

500,000/none

32/none

**Note**

-   For ecs.r8a.large and ecs.r8a.xlarge instances, you must enable the Jumbo Frames feature before the instances can burst their network bandwidths to 12.5 Gbit/s. For more information, see [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
    
-   To use the ecs.r8a.48xlarge instance type, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

### r8i, memory-optimized instance family

-   **Introduction**: This instance family uses the innovative CIPU architecture developed by Alibaba Cloud to provide stable computing power, a more robust I/O engine, and chip-level security hardening.
    
-   **Use cases**:
    
    -   Data analytics and mining
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
    -   Distributed in-memory cache, such as Redis
        
    -   Websites and application servers
        
    -   Servers of massively multiplayer online (MMO) games
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses Intel® Xeon® Emerald Rapids or Intel® Xeon® Sapphire Rapids processors that deliver a clock speed of at least 2.7 GHz and an all-core turbo frequency of 3.2 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   For information about operating system compatibility, see [Intel instance types and operating system compatibility](/help/en/ecs/intel-instance-specifications-and-operating-system-compatibility).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [Elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSD](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Offers burstable disk IOPS and burstable disk bandwidth for low-specification instances and provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports ERIs. For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   Supports the Jumbo Frames feature. For more information, see [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides burstable network bandwidth for low-specification instances.
        
    -   Provides high network performance based on large computing capacity.
        
-   **Security**:
    
    -   Supports the vTPM feature. For more information, see [Overview of trusted computing capabilities](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
        
    -   Instances with 4 or more vCPUs support the Alibaba Cloud virtualized enclave feature, which provides a virtualization-based confidential computing environment. For more information, see [Build a confidential computing environment with an enclave](/help/en/ecs/user-guide/build-a-confidential-computing-environment-by-using-enclave#task-2038130).
        
    -   Supports Intel Total Memory Encryption (TME) to encrypt memory.
        

r8i instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.r8i.large

2

16

2.5/burstable up to 15

1,000,000

Up to 300,000

2

3

6

6

25,000/burstable up to 200,000

2/burstable up to 10

ecs.r8i.xlarge

4

32

4/burstable up to 15

1,200,000

Up to 300,000

4

4

15

15

50,000/burstable up to 200,000

2.5/burstable up to 10

ecs.r8i.2xlarge

8

64

6/burstable up to 15

1,600,000

Up to 300,000

8

4

15

15

60,000/burstable up to 200,000

4/burstable up to 10

ecs.r8i.3xlarge

12

96

10/burstable up to 15

2,400,000

Up to 300,000

12

8

15

15

80,000/burstable up to 200,000

5/burstable up to 10

ecs.r8i.4xlarge

16

128

12/burstable up to 25

3,000,000

350,000

16

8

30

30

100,000/burstable up to 200,000

6/burstable up to 10

ecs.r8i.6xlarge

24

192

15/burstable up to 25

4,500,000

500,000

24

8

30

30

120,000/burstable up to 200,000

7.5/burstable up to 10

ecs.r8i.8xlarge

32

256

20/burstable up to 25

6,000,000

800,000

32

8

30

30

200,000/none

10/none

ecs.r8i.12xlarge

48

384

25/none

9,000,000

1,000,000

48

8

30

30

300,000/none

12/none

ecs.r8i.16xlarge

64

512

32/none

12,000,000

1,600,000

64

8

30

30

360,000/none

20/none

ecs.r8i.32xlarge

128

1,024

64/none

24,000,000

3,000,000

64

15

30

30

700,000/none

40/none

**Note**

To use the ecs.r8i.16xlarge and ecs.r8i.32xlarge instance types, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

### r8ae, enhanced-performance memory-optimized instance family

-   **Introduction**: This instance family uses the innovative CIPU architecture developed by Alibaba Cloud to provide stable computing power, a more robust I/O engine, and chip-level security hardening.
    
-   **Use cases**:
    
    -   AI scenarios, such as deep learning and training, and AI inference
        
    -   High-performance scientific computing scenarios such as high-performance computing (HPC)
        
    -   Large and medium-sized database systems, caches, and search clusters
        
    -   Servers of MMO games
        
    -   Other general-purpose enterprise-level applications that have high performance requirements
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 3.4 GHz AMD EPYCTM Genoa processors that deliver a single-core turbo frequency of up to 3.75 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   Is compatible with specific operating systems. For more information, see the [AMD instance type and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#IXCNq) section of the "Compatibility between AMD instance types and operating systems" topic.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Offers burstable disk IOPS and burstable disk bandwidth for low-specification instances and provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports ERIs. For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   Supports the Jumbo Frames feature. For more information, see [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides burstable network bandwidth for low-specification instances.
        
    -   Provides high network performance based on large computing capacity.
        
-   **Security**: Supports the vTPM feature. For more information, see [Overview of trusted computing capabilities](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

r8ae instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Support for vTPM**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.r8ae.large

2

16

3/burstable up to 15

1,000,000

Yes

Up to 300,000

2

3

6

6

30,000/burstable up to 200,000

2/burstable up to 10

ecs.r8ae.xlarge

4

32

4/burstable up to 15

1,200,000

Yes

Up to 300,000

4

4

15

15

50,000/burstable up to 200,000

2.5/burstable up to 10

ecs.r8ae.2xlarge

8

64

6/burstable up to 15

1,600,000

Yes

Up to 300,000

8

4

15

15

60,000/burstable up to 200,000

3/burstable up to 10

ecs.r8ae.4xlarge

16

128

12/burstable up to 25

3,000,000

Yes

500,000

16

8

30

30

100,000/burstable up to 200,000

6/burstable up to 10

ecs.r8ae.8xlarge

32

256

20/burstable up to 25

6,000,000

Yes

1,000,000

32

8

30

30

200,000/none

10/none

**Note**

For ecs.r8ae.large and ecs.r8ae.xlarge instances, you must enable the Jumbo Frames feature before the instances can burst their network bandwidths to 15 Gbit/s. For more information, see [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).

### r7a, memory-optimized instance family

-   **Introduction**: This instance family uses the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.55 GHz AMD EPYCTM MILAN processors that deliver a single-core turbo frequency of up to 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   Is compatible with specific operating systems. For more information, see the [AMD instance type and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#IXCNq) section of the "Compatibility between AMD instance types and operating systems" topic.
        
-   **Use cases**:
    
    -   High-performance databases and in-memory databases
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
    -   Blockchain applications
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Offers burstable disk IOPS and burstable disk bandwidth for low-specification instances and provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides burstable network bandwidth for low-specification instances.
        
    -   Provides high network performance based on large computing capacity.
        

r7a instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.r7a.large

2

16

1/burstable up to 10

900,000

Up to 250,000

2

3

6

6

12,500/burstable up to 110,000

1/burstable up to 6

ecs.r7a.xlarge

4

32

1.5/burstable up to 10

1,000,000

Up to 250,000

4

4

15

15

20,000/burstable up to 110,000

1.5/burstable up to 6

ecs.r7a.2xlarge

8

64

2.5/burstable up to 10

1,600,000

Up to 250,000

8

4

15

15

30,000/burstable up to 110,000

2/burstable up to 6

ecs.r7a.4xlarge

16

128

5/burstable up to 10

2,000,000

300,000

8

8

30

30

60,000/burstable up to 110,000

3/burstable up to 6

ecs.r7a.8xlarge

32

256

8/burstable up to 10

3,000,000

600,000

16

7

30

30

75,000/burstable up to 110,000

4/burstable up to 6

ecs.r7a-nps1.8xlarge

32

256

8/burstable up to 10

3,000,000

8/burstable up to 10

16

7

30

30

75,000/burstable up to 110,000

4/burstable up to 6

ecs.r7a.16xlarge

64

512

16/none

6,000,000

1,000,000

32

7

30

30

150,000/none

8/none

ecs.r7a-nps1.16xlarge

64

512

16/none

6,000,000

1,000,000

32

8

30

30

150,000/none

8/none

ecs.r7a.32xlarge

128

1,024

32/none

12,000,000

2,000,000

32

15

30

30

300,000/none

16/none

**Note**

Ubuntu 16 and Debian 9 operating system kernels do not support AMD EPYCTM MILAN processors. Do not use Ubuntu 16 or Debian 9 images to create instances of this instance family. Instances of this instance family created from Ubuntu 16 or Debian 9 images cannot be started.

### r7, memory-optimized instance family

-   **Introduction**: This instance family uses the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
    
-   **Use cases**:
    
    -   High-performance databases and in-memory databases
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
    -   Scenarios that require secure and trusted computing
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.7 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Allows you to enable or disable Hyper-Threading.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Offers burstable disk IOPS and burstable disk bandwidth for low-specification instances and provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides burstable network bandwidth for low-specification instances.
        
    -   Provides high network performance based on large computing capacity.
        
-   **Security**:
    
    -   Supports the vTPM feature. For more information, see [Overview of trusted computing capabilities](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
        
    -   Supports the Enclave feature and provides a virtualization-based confidential computing environment. For more information, see [Build a confidential computing environment by using Enclave](/help/en/ecs/user-guide/build-a-confidential-computing-environment-by-using-enclave#task-2038130).
        

r7 instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Support for vTPM**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum attached data disks**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.r7.large

2

16

2/burstable up to 12.5

1,100,000

Yes

Up to 500,000

2

3

6

6

8

20,000/burstable up to 160,000

1.5/burstable up to 10

ecs.r7.xlarge

4

32

3/burstable up to 12.5

1,100,000

Yes

Up to 500,000

4

4

15

15

8

40,000/burstable up to 160,000

2/burstable up to 10

ecs.r7.2xlarge

8

64

5/burstable up to 15

1,600,000

Yes

Up to 500,000

8

4

15

15

16

50,000/burstable up to 160,000

3/burstable up to 10

ecs.r7.3xlarge

12

96

8/burstable up to 15

2,400,000

Yes

Up to 500,000

8

8

15

15

24

70,000/burstable up to 160,000

4/burstable up to 10

ecs.r7.4xlarge

16

128

10/burstable up to 25

3,000,000

Yes

500,000

8

8

30

30

24

80,000/burstable up to 160,000

5/burstable up to 10

ecs.r7.6xlarge

24

192

12/burstable up to 25

4,500,000

Yes

550,000

12

8

30

30

24

110,000/160,000

6/10

ecs.r7.8xlarge

32

256

16/burstable up to 32

6,000,000

Yes

600,000

16

8

30

30

24

160,000/none

10/none

ecs.r7.16xlarge

64

512

32/none

12,000,000

Yes

1,200,000

32

8

30

30

32

360,000/none

20/none

ecs.r7.32xlarge

128

1,024

64/none

24,000,000

Yes

2,400,000

32

15

30

30

32

600,000/none

32/none

### r6, memory-optimized instance family

-   **Introduction**: This instance family offloads a large number of virtualization features to dedicated hardware by using the SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads.
    
-   **Use cases**:
    
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   High-performance databases and in-memory databases
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSD, and ultra disk. For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    
    **Note**
    
    The maximum performance of disks varies based on the instance families. A single instance of this instance family can deliver up to 200,000 IOPS.
    
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

r6 instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.r6.large

2

16

1/burstable up to 3

300,000

Up to 250,000

2

2

6

1

10,000

1

ecs.r6.xlarge

4

32

1.5/burstable up to 5

500,000

Up to 250,000

4

3

10

1

20,000

1.5

ecs.r6.2xlarge

8

64

2.5/burstable up to 8

800,000

Up to 250,000

8

4

10

1

25,000

2

ecs.r6.3xlarge

12

96

4/burstable up to 10

900,000

Up to 250,000

8

6

10

1

30,000

2.5

ecs.r6.4xlarge

16

128

5/burstable up to 10

1,000,000

300,000

8

8

20

1

40,000

3

ecs.r6.6xlarge

24

192

7.5/burstable up to 10

1,500,000

450,000

12

8

20

1

50,000

4

ecs.r6.8xlarge

32

256

10/none

2,000,000

600,000

16

8

20

1

60,000

5

ecs.r6.13xlarge

52

384

12.5/none

3,000,000

900,000

32

7

20

1

100,000

8

ecs.r6.26xlarge

104

768

25/none

6,000,000

1,800,000

32

15

20

1

200,000

16

### r6a, memory-optimized instance family

-   **Introduction**: This instance family offloads a large number of virtualization features to dedicated hardware by using the SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads.
    
-   **Use cases**: scenarios where large volumes of packets are received and transmitted, video encoding and decoding, in-memory databases, enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters, and scenarios where applications such as DevOps applications are developed and tested.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.6 GHz AMD EPYCTM ROME processors that deliver a turbo frequency of 3.3 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   Is compatible with specific operating systems. For more information, see the [AMD instance type and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#IXCNq) section of the "Compatibility between AMD instance types and operating systems" topic.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSD, and ultra disk. For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

r6a instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.r6a.large

2

16

1/10

900,000

Up to 250,000

2

2

6

1

12,500

1

ecs.r6a.xlarge

4

32

1.5/10

1,000,000

Up to 250,000

4

3

15

1

20,000

1.5

ecs.r6a.2xlarge

8

64

2.5/10

1,600,000

Up to 250,000

8

4

15

1

30,000

2

ecs.r6a.4xlarge

16

128

5/10

2,000,000

300,000

8

8

30

1

60,000

3.1

ecs.r6a.8xlarge

32

256

8/10

3,000,000

600,000

16

7

30

1

75,000

4.1

ecs.r6a.16xlarge

64

512

16/none

6,000,000

1,000,000

32

8

30

1

150,000

8.2

### r6e, enhanced-performance memory-optimized instance family

-   **Introduction**: This instance family offloads a large number of virtualization features to dedicated hardware by using the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
    
-   **Use cases**:
    
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   High-performance databases and in-memory databases
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
        **Note**
        
        Network performance varies based on the instance families. For higher concurrent connection and network packet forwarding capabilities, we recommend that you use the g7ne instance family.
        

r6e instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.r6e.large

2

16

1.2/burstable up to 10

900,000

Up to 250,000

2

3

6

1

20,000

1

ecs.r6e.xlarge

4

32

2/burstable up to 10

1,000,000

Up to 250,000

4

4

15

1

40,000

1.5

ecs.r6e.2xlarge

8

64

3/burstable up to 10

1,600,000

Up to 250,000

8

4

15

1

50,000

2

ecs.r6e.4xlarge

16

128

6/burstable up to 10

3,000,000

300,000

8

8

30

1

80,000

3

ecs.r6e.8xlarge

32

256

10/none

6,000,000

600,000

16

8

30

1

150,000

5

ecs.r6e.13xlarge

52

384

16/none

9,000,000

1,000,000

32

7

30

1

240,000

8

ecs.r6e.26xlarge

104

768

32/none

24,000,000

1,800,000

32

15

30

1

480,000

16

### r5, memory-optimized instance family

-   **Use cases**:
    
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   High-performance databases and in-memory databases
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) or Intel® Xeon® Platinum 8269CY (Cascade Lake) processors to provide consistent computing performance.
        
        **Note**
        
        Instances of this instance family may be deployed on different server platforms. If your business requires all instances to be deployed on the same server platform, we recommend that you use the r6, r6e, or r7 instance family instead.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    
    **Note**
    
    The maximum performance of disks varies based on the instance families. A single instance of this instance family can deliver up to 200,000 IOPS.
    
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

r5 instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.r5.large

2

16

1

300,000

2

2

6

1

ecs.r5.xlarge

4

32

1.5

500,000

2

3

10

1

ecs.r5.2xlarge

8

64

2.5

800,000

4

4

10

1

ecs.r5.3xlarge

12

96

4

900,000

4

6

10

1

ecs.r5.4xlarge

16

128

5

1,000,000

4

8

20

1

ecs.r5.6xlarge

24

192

7.5

1,500,000

6

8

20

1

ecs.r5.8xlarge

32

256

10

2,000,000

8

8

20

1

ecs.r5.16xlarge

64

512

20

4,000,000

16

8

20

1

### se1ne, network-enhanced memory-optimized instance family

-   **Use cases**:
    
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   High-performance databases and in-memory databases
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.5 GHz Intel® Xeon® E5-2682 v4 (Broadwell) or Platinum 8163 (Skylake) or 8269CY (Cascade Lake) processors to provide consistent computing performance.
        
        **Note**
        
        Instances of this instance family may be deployed on different server platforms. If your business requires all instances to be deployed on the same server platform, we recommend that you use the r6, r6e, or r7 instance family instead.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

se1ne instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.se1ne.large

2

16

1

300,000

2

2

6

1

ecs.se1ne.xlarge

4

32

1.5

500,000

2

3

10

1

ecs.se1ne.2xlarge

8

64

2

1,000,000

4

4

10

1

ecs.se1ne.3xlarge

12

96

2.5

1,300,000

4

6

10

1

ecs.se1ne.4xlarge

16

128

3

1,600,000

4

8

20

1

ecs.se1ne.6xlarge

24

192

4.5

2,000,000

6

8

20

1

ecs.se1ne.8xlarge

32

256

6

2,500,000

8

8

20

1

ecs.se1ne.14xlarge

56

480

10

4,500,000

14

8

20

1

### se1, memory-optimized instance family

-   **Use cases**:
    
    -   High-performance databases and in-memory databases
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.5 GHz Intel® Xeon® E5-2682 v4 (Broadwell) or Platinum 8163 (Skylake) or 8269CY (Cascade Lake) processors to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports only IPv4.
        
    -   Provides high network performance based on large computing capacity.
        

se1 instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

ecs.se1.large

2

16

0.5

100,000

1

2

6

ecs.se1.xlarge

4

32

0.8

200,000

1

3

10

ecs.se1.2xlarge

8

64

1.5

400,000

1

4

10

ecs.se1.4xlarge

16

128

3

500,000

2

8

20

ecs.se1.8xlarge

32

256

6

800,000

3

8

20

ecs.se1.14xlarge

56

480

10

1,200,000

4

8

20

### u2a, universal instance family

-   **Introduction**: u2a instances use Alibaba Cloud's new Cloud Infrastructure Processing Unit (CIPU) architecture. They are compatible with multiple generations of AMD EPYC™ processors, including AMD Turin processors, and provides enterprise-grade computing power.
    
-   **Use cases**:
    
    -   Small and medium-sized databases, such as Redis and MySQL
        
    -   Application servers
        
    -   Middleware, such as MQ and Kafka
        
    -   Websites or network access layers, such as Apache and Nginx
        
    -   Other internal enterprise systems, such as development and testing environments and email systems
        
-   **Compute**:
    
    -   Supports instance types with vCPU-to-memory ratios of 1:1, 1:2, and 1:4.
        
    -   Processor: AMD EPYC™ processor with a turbo frequency of up to 3.7 GHz.
        
    -   For more information about operating system compatibility, see [AMD instance type and operating system compatibility](/help/en/ecs/compatibility-between-amd-instance-types-and-operating-systems#33f69521a4b8a).
        
-   **Storage**:
    
    -   I/O optimized instances.
        
    -   Supports the Non-Volatile Memory Express (NVMe) protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports ESSD Entry disks, [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Elastic Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Small instance types support burstable disk IOPS and disk bandwidth. The storage I/O performance of an instance is determined by its compute specifications. A larger instance type provides better storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports Elastic RDMA Interface (ERI). For more information about how to use ERI, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   Supports [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance depends on its instance type. A larger instance type provides better network performance.
        

u2a instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.u2a-c1m1.large

2

2

1.2/Up to 12.5

Up to 900,000

Up to 250,000

2

2

6

6

Up to 110,000

1.2/Up to 10

ecs.u2a-c1m2.large

2

4

1.2/Up to 12.5

Up to 900,000

Up to 250,000

2

2

6

6

Up to 110,000

1.2/Up to 10

ecs.u2a-c1m4.large

2

8

1.2/Up to 12.5

Up to 900,000

Up to 250,000

2

2

6

6

Up to 110,000

1.2/Up to 10

ecs.u2a-c1m1.xlarge

4

4

2/Up to 12.5

Up to 1,000,000

Up to 250,000

4

2

15

15

Up to 110,000

1.6/Up to 10

ecs.u2a-c1m2.xlarge

4

8

2/Up to 12.5

Up to 1,000,000

Up to 250,000

4

2

15

15

Up to 110,000

1.6/Up to 10

ecs.u2a-c1m4.xlarge

4

16

2/Up to 12.5

Up to 1,000,000

Up to 250,000

4

2

15

15

Up to 110,000

1.6/Up to 10

ecs.u2a-c1m2.2xlarge

8

16

3.2/Up to 12.5

Up to 1,600,000

Up to 250,000

8

2

15

15

Up to 110,000

2/Up to 10

ecs.u2a-c1m4.2xlarge

8

32

3.2/Up to 12.5

Up to 1,600,000

Up to 250,000

8

2

15

15

Up to 110,000

2/Up to 10

ecs.u2a-c1m2.4xlarge

16

32

6/Up to 12.5

Up to 2,000,000

Up to 250,000

16

4

30

30

Up to 110,000

3/Up to 10

ecs.u2a-c1m4.4xlarge

16

64

6/Up to 12.5

Up to 2,000,000

Up to 250,000

16

4

30

30

Up to 110,000

3/Up to 10

ecs.u2a-c1m2.6xlarge

24

48

7/Up to 12.5

Up to 2,500,000

Up to 360,000

16

8

30

30

Up to 110,000

3.5/Up to 10

ecs.u2a-c1m4.6xlarge

24

96

7/Up to 12.5

Up to 2,500,000

Up to 360,000

16

8

30

30

Up to 110,000

3.5/Up to 10

ecs.u2a-c1m2.8xlarge

32

64

8/Up to 25

Up to 3,000,000

500,000

16

8

30

30

Up to 110,000

4/Up to 10

ecs.u2a-c1m4.8xlarge

32

128

8/Up to 25

Up to 3,000,000

500,000

16

8

30

30

Up to 110,000

4/Up to 10

ecs.u2a-c1m2.12xlarge

48

96

13/Up to 25

4,000,000

600,000

24

8

30

30

Up to 110,000

6.5/Up to 10

ecs.u2a-c1m4.12xlarge

48

192

13/Up to 25

4,000,000

600,000

24

8

30

30

Up to 110,000

6.5/Up to 10

ecs.u2a-c1m2.16xlarge

64

128

16/Up to 25

5,000,000

800,000

32

8

30

30

Up to 110,000

8/Up to 10

ecs.u2a-c1m4.16xlarge

64

256

16/Up to 25

5,000,000

800,000

32

8

30

30

Up to 110,000

8/Up to 10

### u2i, universal instance family

-   **Introduction**: u2i instances use Alibaba Cloud's new CIPU architecture. They are compatible with servers from multiple generations and support the latest 5th and 6th generation Intel Xeon platforms.
    
-   **Use cases**:
    
    -   Small and medium-sized enterprise applications
        
    -   Websites and application servers
        
    -   Data analytics and computing
        
    -   Small and medium-sized database systems, caches, and search clusters
        
-   **Compute**:
    
    -   CPU-to-memory ratios: 1:1, 1:2, 1:4, and 1:8.
        
    -   Processor: Intel ® Xeon ® Platinum Scalable processor.
        
-   **Storage**:
    
    -   I/O optimized instances.
        
    -   Supports the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports ESSD Entry disks, [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Elastic Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Small instance types support burstable disk IOPS and disk bandwidth. The storage I/O performance of an instance depends on its computing specifications. A higher specification provides better [storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   The network performance of an instance depends on its computing specifications. A higher specification provides better network performance.
        

u2i instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.u2i-c1m1.large

2

2

2/Up to 15

900,000

Up to 300,000

2

3

6

6

20,000/Up to 200,000

1.5/10

ecs.u2i-c1m1.xlarge

4

4

3/Up to 15

1,100,000

Up to 300,000

2

4

15

15

40,000/Up to 200,000

2/10

ecs.u2i-c1m1.2xlarge

8

8

5/Up to 15

1,300,000

Up to 300,000

4

4

15

15

50,000/Up to 200,000

3/10

ecs.u2i-c1m1.3xlarge

12

12

8/Up to 15

1,800,000

Up to 300,000

6

8

15

15

60,000/Up to 200,000

4/10

ecs.u2i-c1m1.4xlarge

16

16

10/Up to 25

2,400,000

Up to 350,000

8

8

30

30

80,000/Up to 200,000

5/10

ecs.u2i-c1m1.6xlarge

24

24

12/Up to 25

3,000,000

Up to 400,000

12

8

30

30

100,000/Up to 200,000

6/10

ecs.u2i-c1m1.8xlarge

32

32

16/Up to 32

4,000,000

Up to 600,000

16

8

30

30

160,000/Up to 300,000

8/12

ecs.u2i-c1m2.large

2

4

2/Up to 15

900,000

Up to 300,000

2

3

6

6

20,000/Up to 200,000

1.5/10

ecs.u2i-c1m2.xlarge

4

8

3/Up to 15

1,100,000

Up to 300,000

2

4

15

15

40,000/Up to 200,000

2/10

ecs.u2i-c1m2.2xlarge

8

16

5/Up to 15

1,300,000

Up to 300,000

4

4

15

15

50,000/Up to 200,000

3/10

ecs.u2i-c1m2.3xlarge

12

24

8/Up to 15

1,800,000

Up to 300,000

6

8

15

15

60,000/Up to 200,000

4/10

ecs.u2i-c1m2.4xlarge

16

32

10/Up to 25

2,400,000

Up to 350,000

8

8

30

30

80,000/Up to 200,000

5/10

ecs.u2i-c1m2.6xlarge

24

48

12/Up to 25

3,000,000

Up to 400,000

12

8

30

30

100,000/Up to 200,000

6/10

ecs.u2i-c1m2.8xlarge

32

64

16/Up to 32

4,000,000

Up to 600,000

16

8

30

30

160,000/Up to 300,000

8/12

ecs.u2i-c1m4.large

2

8

2/Up to 15

900,000

Up to 300,000

2

3

6

6

20,000/Up to 200,000

1.5/10

ecs.u2i-c1m4.xlarge

4

16

3/Up to 15

1,100,000

Up to 300,000

2

4

15

15

40,000/Up to 200,000

2/10

ecs.u2i-c1m4.2xlarge

8

32

5/Up to 15

1,300,000

Up to 300,000

4

4

15

15

50,000/Up to 200,000

3/10

ecs.u2i-c1m4.3xlarge

12

48

8/Up to 15

1,800,000

Up to 300,000

6

8

15

15

60,000/Up to 200,000

4/10

ecs.u2i-c1m4.4xlarge

16

64

10/Up to 25

2,400,000

Up to 350,000

8

8

30

30

80,000/Up to 200,000

5/10

ecs.u2i-c1m4.6xlarge

24

96

12/Up to 25

3,000,000

Up to 400,000

12

8

30

30

100,000/Up to 200,000

6/10

ecs.u2i-c1m4.8xlarge

32

128

16/Up to 32

4,000,000

Up to 600,000

16

8

30

30

160,000/Up to 300,000

8/12

ecs.u2i-c1m8.large

2

16

2/Up to 15

900,000

Up to 300,000

2

3

6

6

20,000/Up to 200,000

1.5/10

ecs.u2i-c1m8.xlarge

4

32

3/Up to 15

1,100,000

Up to 300,000

2

4

15

15

40,000/Up to 200,000

2/10

ecs.u2i-c1m8.2xlarge

8

64

5/Up to 15

1,300,000

Up to 300,000

4

4

15

15

50,000/Up to 200,000

3/10

ecs.u2i-c1m8.3xlarge

12

96

8/Up to 15

1,800,000

Up to 300,000

6

8

15

15

60,000/Up to 200,000

4/10

ecs.u2i-c1m8.4xlarge

16

128

10/Up to 25

2,400,000

Up to 350,000

8

8

30

30

80,000/Up to 200,000

5/10

ecs.u2i-c1m8.6xlarge

24

192

12/Up to 25

3,000,000

Up to 400,000

12

8

30

30

100,000/Up to 200,000

6/10

ecs.u2i-c1m8.8xlarge

32

256

16/Up to 32

4,000,000

Up to 600,000

16

8

30

30

160,000/Up to 300,000

8/12

### u1, universal instance family

-   **Use cases**:
    
    -   Small and medium-sized enterprise applications
        
    -   Websites and application servers
        
    -   Data analytics and computing
        
    -   Small and medium-sized database systems, caches, and search clusters
        
-   **Compute**:
    
    -   CPU-to-memory ratios: 1:1, 1:2, 1:4, and 1:8.
        
    -   Processor: Intel ® Xeon ® Platinum Scalable processor
        
    
    **Note**
    
    Instances of this family are randomly deployed on different server platforms when they are created and may be migrated to different server platforms during their lifecycle. u1 instances use technical means to improve compatibility between different platforms. However, performance may vary significantly between platforms. If you require consistent performance, we recommend that you use g7, c7, or r7 instances.
    
-   **Storage**:
    
    -   I/O optimized instances.
        
    -   Supports ESSD Entry disks, [ESSDs](/help/en/ecs/user-guide/essds), and [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   The network performance of an instance depends on its computing specifications. A higher specification provides better network performance.
        

u1 instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.u1-c1m1.large

2

2

1

300,000

Up to 250,000

2

2

6

2

10,000

1

ecs.u1-c1m2.large

2

4

1

300,000

Up to 250,000

2

2

6

2

10,000

1

ecs.u1-c1m4.large

2

8

1

300,000

Up to 250,000

2

2

6

2

10,000

1

ecs.u1-c1m8.large

2

16

1

300,000

Up to 250,000

2

2

6

2

10,000

1

ecs.u1-c1m1.xlarge

4

4

1.5

500,000

Up to 250,000

2

3

10

2

20,000

1.5

ecs.u1-c1m2.xlarge

4

8

1.5

500,000

Up to 250,000

2

3

10

2

20,000

1.5

ecs.u1-c1m4.xlarge

4

16

1.5

500,000

Up to 250,000

2

3

10

2

20,000

1.5

ecs.u1-c1m8.xlarge

4

32

1.5

500,000

Up to 250,000

2

3

10

2

20,000

1.5

ecs.u1-c1m1.2xlarge

8

8

2.5

800,000

Up to 250,000

4

4

10

2

25,000

2

ecs.u1-c1m2.2xlarge

8

16

2.5

800,000

Up to 250,000

4

4

10

2

25,000

2

ecs.u1-c1m4.2xlarge

8

32

2.5

800,000

Up to 250,000

4

4

10

2

25,000

2

ecs.u1-c1m8.2xlarge

8

64

2.5

800,000

Up to 250,000

4

4

10

2

25,000

2

ecs.u1-c1m1.3xlarge

12

12

4

900,000

Up to 250,000

4

6

10

2

30,000

2.5

ecs.u1-c1m2.3xlarge

12

24

4

900,000

Up to 250,000

4

6

10

2

30,000

2.5

ecs.u1-c1m4.3xlarge

12

48

4

900,000

Up to 250,000

4

6

10

2

30,000

2.5

ecs.u1-c1m8.3xlarge

12

96

4

900,000

Up to 250,000

4

6

10

2

30,000

2.5

ecs.u1-c1m1.4xlarge

16

16

5

1,000,000

Up to 300,000

4

8

20

2

40,000

3

ecs.u1-c1m2.4xlarge

16

32

5

1,000,000

Up to 300,000

4

8

20

2

40,000

3

ecs.u1-c1m4.4xlarge

16

64

5

1,000,000

Up to 300,000

4

8

20

2

40,000

3

ecs.u1-c1m8.4xlarge

16

128

5

1,000,000

Up to 300,000

4

8

20

2

40,000

3

ecs.u1-c1m1.8xlarge

32

32

10

2,000,000

Up to 300,000

8

8

20

2

60,000

5

ecs.u1-c1m2.8xlarge

32

64

10

2,000,000

Up to 300,000

8

8

20

2

60,000

5

ecs.u1-c1m4.8xlarge

32

128

10

2,000,000

Up to 300,000

8

8

20

2

60,000

5

ecs.u1-c1m8.8xlarge

32

256

10

2,000,000

Up to 300,000

8

8

20

2

60,000

5

**Note**

-   Exceptions may occur when you deploy Data Plane Development Kit (DPDK) applications on u1 instances. To resolve this issue, use Virtual Function I/O (VFIO) drivers to replace Userspace I/O (UIO) drivers. For more information, see [Use VFIO drivers to replace UIO drivers](/help/en/ecs/user-guide/replace-uio-drivers-with-vfio-drivers#task-2112980).
    
-   For frequently asked questions about Universal instances, see [U1 instance FAQ](/help/en/ecs/user-guide/instance-faq/#section-gxt-hee-bch).
    

### d3s, storage-intensive big data instance family

Features:

-   This instance family is equipped with 12-TB, large-capacity, high-throughput local SATA HDDs and can provide a maximum network bandwidth of 64 Gbit/s between instances.
    
-   Supported scenarios:
    
    -   Big data computing and storage business scenarios in which services such as Hadoop MapReduce, HDFS, Hive, and HBase are used
        
    -   Machine learning scenarios such as Spark in-memory computing and MLlib
        
    -   Search and log data processing scenarios in which solutions such as Elasticsearch and Kafka are used
        
-   This instance family supports online replacement and hot swapping of damaged disks to prevent instance shutdown.
    
    If a local disk fails, you receive a system event. You can handle the system event by initiating the process of repairing the damaged disk. For more information, see [O&M scenarios and system events for instances equipped with local disks](/help/en/ecs/user-guide/operations-and-maintenance-scenarios-and-system-events-for-instances-equipped-with-local-disks#concept-x5k-24p-tgb).
    
    **Important**
    
    After you initiate the process of repairing the damaged disk, data stored on the damaged disk cannot be restored.
    
-   Compute:
    
    -   Uses 2.7 GHz Intel® Xeon® Scalable (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
-   Storage:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports only ESSDs and ESSD AutoPL disks.
        
-   Network:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        

d3s includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.d3s.2xlarge

8

32

4 \* 11,918 GB (4 \* 11,100 GiB)

10/burstable up to 15

2,000,000

3/burstable up to 5

ecs.d3s.4xlarge

16

64

8 \* 11,918 GB (8 \* 11,100 GiB)

25/none

3,000,000

5/none

ecs.d3s.8xlarge

32

128

16 \* 11,918 GB (16 \* 11,100 GiB)

40/none

6,000,000

8/none

ecs.d3s.12xlarge

48

192

24 \* 11,918 GB (24 \* 11,100 GiB)

60/none

9,000,000

12/none

ecs.d3s.16xlarge

64

256

32 \* 11,918 GB (32 \* 11,100 GiB)

80/none

12,000,000

16/none

### d3c, compute-intensive big data instance family

Features:

-   This instance family is equipped with high-capacity and high-throughput local disks and can provide a maximum bandwidth of 40 Gbit/s between instances.
    
-   Supported scenarios:
    
    -   Big data computing and storage business scenarios in which services such as Hadoop MapReduce, HDFS, Hive, and HBase are used
        
    -   Scenarios in which EMR JindoFS and Object Storage Service (OSS) are used in combination to separately store hot and cold data and decouple storage from computing
        
    -   Machine learning scenarios such as Spark in-memory computing and MLlib
        
    -   Search and log data processing scenarios in which solutions such as Elasticsearch and Kafka are used
        
-   This instance family supports online replacement and hot swapping of damaged disks to prevent instance shutdown.
    
    If a local disk fails, you receive a system event. You can handle the system event by initiating the process of repairing the damaged disk. For more information, see [O&M scenarios and system events for instances equipped with local disks](/help/en/ecs/user-guide/operations-and-maintenance-scenarios-and-system-events-for-instances-equipped-with-local-disks#concept-x5k-24p-tgb).
    
    **Important**
    
    After you initiate the process of repairing the damaged disk, data stored on the damaged disk cannot be restored.
    
-   Compute:
    
    -   Uses third-generation 2.9 GHz Intel® Xeon® Scalable (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
-   Storage:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports only ESSDs and ESSD AutoPL disks.
        
-   Network:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        

d3c includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.d3c.3xlarge

14

56.0

1 \* 13,743 GB (1 \* 12,800 GiB)

8/burstable up to 10

1,600,000

40,000/none

3/none

ecs.d3c.7xlarge

28

112.0

2 \* 13,743 GB (2 \* 12,800 GiB)

16/burstable up to 25

2,500,000

50,000/none

4/none

ecs.d3c.14xlarge

56

224.0

4 \* 13,743 GB (4 \* 12,800 GiB)

40/none

5,000,000

100,000/none

8/none

**Note**

This instance family supports only Linux images. When you create an instance of this instance family, select a Linux image.

### d2c, compute-intensive big data instance family

Features:

-   This instance family is equipped with high-capacity and high-throughput local SATA HDDs and can provide a maximum bandwidth of 35 Gbit/s between instances.
    
-   Supported scenarios:
    
    -   Big data computing and storage business scenarios in which services such as Hadoop MapReduce, HDFS, Hive, and HBase are used
        
    -   Scenarios in which EMR JindoFS and OSS are used in combination to separately store hot and cold data and decouple storage from computing
        
    -   Machine learning scenarios such as Spark in-memory computing and MLlib
        
    -   Search and log data processing scenarios in which solutions such as Elasticsearch and Kafka are used
        
-   This instance family supports online replacement and hot swapping of damaged disks to prevent instance shutdown.
    
    If a local disk fails, you receive a system event. You can handle the system event by initiating the process of repairing the damaged disk. For more information, see [O&M scenarios and system events for instances equipped with local disks](/help/en/ecs/user-guide/operations-and-maintenance-scenarios-and-system-events-for-instances-equipped-with-local-disks#concept-x5k-24p-tgb).
    
    **Important**
    
    After you initiate the process of repairing the damaged disk, data stored on the damaged disk cannot be restored.
    
-   Compute:
    
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors.
        
-   Storage:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports enhanced SSDs (ESSDs), ESSD AutoPL disks, standard SSDs, and ultra disks.
        
-   Network:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        

d2c includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Local storage**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

ecs.d2c.6xlarge

24

88.0

3 \* 3,972 GB (3 \* 3,700 GiB)

12.0

1,600,000

ecs.d2c.12xlarge

48

176.0

6 \* 3,972 GB (6 \* 3,700 GiB)

20.0

2,000,000

ecs.d2c.24xlarge

96

352.0

12 \* 3,972 GB (12 \* 3,700 GiB)

35.0

4,500,000

### d2s, storage-intensive big data instance family

Features:

-   This instance family is equipped with high-capacity and high-throughput local SATA HDDs and can provide a maximum bandwidth of 35 Gbit/s between instances.
    
-   Supported scenarios:
    
    -   Big data computing and storage business scenarios in which services such as Hadoop MapReduce, HDFS, Hive, and HBase are used
        
    -   Machine learning scenarios such as Spark in-memory computing and MLlib
        
    -   Search and log data processing scenarios in which solutions such as Elasticsearch and Kafka are used
        
-   This instance family supports online replacement and hot swapping of damaged disks to prevent instance shutdown.
    
    If a local disk fails, you receive a system event. You can handle the system event by initiating the process of repairing the damaged disk. For more information, see [O&M scenarios and system events for instances equipped with local disks](/help/en/ecs/user-guide/operations-and-maintenance-scenarios-and-system-events-for-instances-equipped-with-local-disks#concept-x5k-24p-tgb).
    
    **Important**
    
    After you initiate the process of repairing the damaged disk, data stored on the damaged disk cannot be restored.
    
-   Compute:
    
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   Storage:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports ESSDs, ESSD AutoPL disks, standard SSDs, and ultra disks.
        
-   Network:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        

d2s includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Local storage**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

ecs.d2s.5xlarge

20

88.0

8 \* 7,838 GB (8 \* 7,300 GiB)

12.0

1,600,000

ecs.d2s.10xlarge

40

176.0

15 \* 7,838 GB (15 \* 7,300 GiB)

20.0

2,000,000

ecs.d2s.20xlarge

80

352.0

30 \* 7,838 GB (30 \* 7,300 GiB)

35.0

4,500,000

### d1ne, network-enhanced big data instance family

Features:

-   This instance family is equipped with high-capacity and high-throughput local SATA HDDs and can provide a maximum bandwidth of 35 Gbit/s between instances.
    
-   Supported scenarios:
    
    -   Scenarios in which services such as Hadoop MapReduce, HDFS, Hive, and HBase are used
        
    -   Machine learning scenarios such as Spark in-memory computing and MLlib
        
    -   Search and log data processing scenarios in which solutions such as Elasticsearch are used
        
-   Compute:
    
    -   Offers a CPU-to-memory ratio of 1:4, which is designed for big data scenarios.
        
    -   Uses 2.5 GHz Intel® Xeon® E5-2682 v4 (Broadwell) or Intel® Xeon® Platinum 8163 (Skylake) processors, providing stable computing performance.
        
-   Storage:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports only standard SSDs and ultra disks.
        
-   Network:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        

d1ne includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Local storage**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

ecs.d1ne.2xlarge

8

32.0

4 \* 5,905 GB (4 \* 5,500 GiB)

6.0

1,000,000

ecs.d1ne.4xlarge

16

64.0

8 \* 5,905 GB (8 \* 5,500 GiB)

12.0

1,600,000

ecs.d1ne.6xlarge

24

96.0

12 \* 5,905 GB (12 \* 5,500 GiB)

16.0

2,000,000

ecs.d1ne-c8d3.8xlarge

32

128.0

12 \* 5,905 GB (12 \* 5,500 GiB)

20.0

2,000,000

ecs.d1ne.8xlarge

32

128.0

16 \* 5,905 GB (16 \* 5,500 GiB)

20.0

2,500,000

ecs.d1ne-c14d3.14xlarge

56

160.0

12 \* 5,905 GB (12 \* 5,500 GiB)

35.0

4,500,000

ecs.d1ne.14xlarge

56

224.0

28 \* 5,905 GB (28 \* 5,500 GiB)

35.0

4,500,000

### i5g, instance family with local SSDs

-   **Introduction**: This instance family provides high-performance NVMe SSD local disks with high input/output operations per second (IOPS), high throughput, and low access latency. It leverages the new Alibaba Cloud Cloud Infrastructure Processing Unit (CIPU) architecture and Intel® Xeon® 6 processors to deliver stable computing power and a powerful I/O engine.
    
-   **Use cases**: Disk-based key-value (KV) databases such as RocksDB and ClickHouse. E-MapReduce for big data, including hot/cold data layering, storage-compute separation, and data lakes. Search engines such as Elasticsearch.
    
-   **Compute**:
    
    -   vCPU-to-memory ratio of 1:4.
        
    -   Processor: Powered by Intel® Xeon® Granite Rapids with a 3.2 GHz base clock speed and a 3.6 GHz all-core turbo frequency for stable computing performance.
        
-   **Storage**:
    
    -   I/O optimized instance.
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

i5g instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.i5g.8xlarge

32

128

1 × 1,919 GB

(1 × 1,788 GiB)

16/32

10,000,000

200,000/300,000

10/12

ecs.i5g.16xlarge

64

256

1 × 3,839 GB

(1 × 3,576 GiB)

32/None

20,000,000

300,000/None

16/None

### i5ge, instance family with local SSDs

-   **Introduction**: The i5ge instance family is equipped with high-performance NVMe SSD local disks, delivering high IOPS, high throughput, and low access latency. Built on Alibaba Cloud's new CIPU architecture and powered by Intel® Xeon® 6 processors, these instances provide stable computing power and a powerful I/O engine.
    
-   **Use cases**: Disk-based key-value (KV) databases such as RocksDB and ClickHouse, big data computing with local cache, and online transactions.
    
-   **Compute**:
    
    -   The vCPU-to-memory ratio is 1:6.
        
    -   Processor: Intel® Xeon® Granite Rapids processors with a 3.2 GHz base clock speed and a 3.6 GHz all-core turbo frequency provide stable computing performance.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

i5ge instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding (PPS)**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.i5ge.3xlarge

12

72

1 × 1,919 GB

(1 × 1,788 GiB)

25/40

4,000,000

80,000/200,000

5/10

ecs.i5ge.6xlarge

24

144

1 × 3,839 GB

(1 × 3,576 GiB)

50/70

8,000,000

120,000/200,000

7.5/10

ecs.i5ge.12xlarge

48

288

2 × 3,839 GB

(2 × 3,576 GiB)

84/None

15,000,000

240,000/None

12/None

ecs.i5ge.24xlarge

96

576

4 × 3,839 GB

(4 × 3,576 GiB)

172/None

30,000,000

300,000/None

20/None

### i5e, instance family with local SSDs

-   **Introduction**: Equipped with high-performance NVMe SSD local disks, this instance family provides high IOPS, high throughput, and low access latency. This family uses the new Alibaba Cloud CIPU architecture and is powered by Intel® Xeon® 6 processors to deliver stable computing power and a powerful I/O engine.
    
-   **Use cases**: Relational databases such as MySQL, remote cache services, and cache layer acceleration.
    
-   **Computing**:
    
    -   The vCPU-to-memory ratio is 1:8.
        
    -   Processor: Intel® Xeon® Granite Rapids with a 2.9 GHz clock speed and a 3.6 GHz all-core turbo frequency. This processor provides stable computing performance.
        
-   **Storage**:
    
    -   This is an I/O optimized instance.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

i5e instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.i5e.2xlarge

8

64

1 × 3840 GB

(1 × 3576 GiB)

20/40

4,000,000

60,000/200,000

4/10

ecs.i5e.4xlarge

16

128

1 × 7680 GB

(1 × 7152 GiB)

40/80

7,000,000

100,000/200,000

6/10

ecs.i5e.8xlarge

32

256

2 × 7680 GB

(2 × 7152 GiB)

80/120

14,000,000

150,000/200,000

10/12

ecs.i5e.12xlarge

48

384

3 × 7680 GB

(3 × 7152 GiB)

120

20,000,000

240,000

12

ecs.i5e.16xlarge

64

512

4 × 7680 GB

(4 × 7152 GiB)

160

25,000,000

300,000

16

ecs.i5e.32xlarge

128

1024

8 × 7680 GB

(8 × 7152 GiB)

320

50,000,000

600,000

32

### i5, instance family with local SSDs

-   **Introduction**: The i5 instance family features high-performance NVMe SSD local disks that deliver high IOPS, high throughput, and low access latency. The instances use the new Alibaba Cloud CIPU architecture and are powered by Intel® Xeon® 6 processors. This combination provides stable computing power and a powerful I/O engine.
    
-   **Use cases**: Disk-based key-value (KV) databases such as RocksDB and ClickHouse. E-MapReduce for big data with hot and cold data layers. Architectures that separate storage and compute. Data lakes. Other I/O-intensive applications with frequent disk writes, such as message middleware and containers.
    
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:8.
        
    -   Processor: Intel® Xeon® Granite Rapids with a base clock speed of 3.4 GHz and an all-core turbo frequency of 3.8 GHz. This ensures stable computing performance.
        
-   **Storage**:
    
    -   I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

i5 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding (PPS)**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.i5.xlarge

4

32

1 × 960 GB

(1 × 894 GiB)

10/20

2,000,000

40,000/200,000

2/10

ecs.i5.2xlarge

8

64

1 × 1,919 GB

(1 × 1,788 GiB)

20/40

4,000,000

60,000/200,000

4/10

ecs.i5.4xlarge

16

128

1 × 3,839 GB

(1 × 3,576 GiB)

40/80

7,000,000

100,000/200,000

6/10

ecs.i5.8xlarge

32

256

2 × 3,839 GB

(2 × 3,576 GiB)

80/120

14,000,000

150,000/200,000

10/12

ecs.i5.12xlarge

48

384

3 × 3,839 GB

(3 × 3,576 GiB)

120

20,000,000

240,000

12

ecs.i5.16xlarge

64

512

4 × 3,839 GB

(4 × 3,576 GiB)

160

27,000,00

300,000

16

### i4, instance family with local SSDs

-   **Introduction**: This instance family is equipped with high-performance local NVMe SSDs that deliver high IOPS, high I/O throughput, and low latency.
    
-   **Use cases**: OLTP and high-performance relational databases, NoSQL databases such as Cassandra and MongoDB, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute**:
    
    -   Uses 2.7 GHz Intel® Xeon® Scalable (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Is compatible with specific operating systems**. For more information, see [Compatibility between the i4 instance types and operating systems](/help/en/ecs/compatibility-between-i4-instance-types-with-operating-systems).
    

i4 instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.i4.large

2

16

1 \* 479 GB (1 \* 447 GiB)

2.5/15

900,000

20,000/up to 110,000

1.5/6

ecs.i4.xlarge

4

32

1 \* 959 GB (1 \* 894 GiB)

4/15

1,000,000

40,000/up to 110,000

2/6

ecs.i4.2xlarge

8

64

1 \* 1,919 GB (1 \* 1,788 GiB)

6/15

1,600,000

50,000/up to 110,000

3/6

ecs.i4.4xlarge

16

128

1 \* 3,839 GB (1 \* 3,576 GiB)

10/25

3,000,000

80,000/up to 110,000

5/6

ecs.i4.8xlarge

32

256

2 \* 3,839 GB (2 \* 3,576 GiB)

25/none

6,000,000

150,000/none

8/none

ecs.i4.16xlarge

64

512

4 \* 3,839 GB (4 \* 3,576 GiB)

50/none

12,000,000

300,000/none

16/none

ecs.i4.32xlarge

128

1,024

8 \* 3,839 GB (8 \* 3,576 GiB)

100/none

24,000,000

600,000/none

32/none

### i4g, instance family with local SSDs

-   **Introduction**: This instance family is equipped with high-performance local NVMe SSDs that deliver high IOPS, high I/O throughput, and low latency.
    
-   **Use cases**: OLTP and high-performance relational databases, E-MapReduce big data scenarios such as tiering of hot and cold data, storage and computing separation, and data lakes, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4, which is designed for high-performance databases.
        
    -   Uses 2.7 GHz Intel® Xeon® Scalable (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        

i4g instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.i4g.4xlarge

16

64

1 \* 959 GB (1 \* 894 GiB)

8/25

3,000,000

100,000

6

ecs.i4g.8xlarge

32

128

1 \* 1,919 GB (1 \* 1,788 GiB)

16/25

6,000,000

150,000

8

ecs.i4g.16xlarge

64

256

2 \* 1,919 GB (2 \* 1,788 GiB)

32/none

12,000,000

300,000

16

ecs.i4g.32xlarge

128

512

4 \* 1,919 GB (4 \* 1,788 GiB)

64/none

24,000,000

600,000

32

**Note**

This instance family supports only Linux images. When you create an instance of this instance family, you must select a Linux image.

### i4r, instance family with local SSDs

-   **Introduction**: This instance family is equipped with high-performance local NVMe SSDs that deliver high IOPS, high I/O throughput, and low latency.
    
-   **Use cases**: OLTP and high-performance relational databases, NoSQL databases such as Cassandra and MongoDB, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8, which is designed for high-performance databases. This instance family is the most cost-effective instance family that is suitable for scenarios such as hot data tiering and data lakes.
        
    -   Uses 2.7 GHz Intel® Xeon® Scalable (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        

i4r instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.i4r.4xlarge

16

128

1 \* 959 GB (1 \* 894 GiB)

8/25

3,000,000

100,000

6

ecs.i4r.8xlarge

32

256

1 \* 1,919 GB (1 \* 1,788 GiB)

16/25

6,000,000

150,000

8

ecs.i4r.16xlarge

64

512

2 \* 1,919 GB (2 \* 1,788 GiB)

32/none

12,000,000

300,000

16

ecs.i4r.32xlarge

128

1,024

4 \* 1,919 GB (4 \* 1,788 GiB)

64/none

24,000,000

600,000

32

### i4p, performance-enhanced instance family with local SSDs

-   **Introduction**: This instance family uses the Intel® Second-generation Optane persistent memory (BPS) to provide ultra-high-performance local disks. For information about how to initialize local disks, see the [Configure persistent memory as a local disk](/help/en/ecs/user-guide/configure-the-usage-mode-of-persistent-memory#section-t66-l5n-e1g) section of the "Configure the usage mode of persistent memory" topic.
    
-   **Use cases**:
    
    -   Gene sequencing applications. For more information, see [Case description](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20220706/misz/客户案例-寻因生物.pdf).
        
    -   On-disk key-value (KV) databases, such as RocksDB and ClickHouse.
        
    -   OLTP and high-performance relational databases for write-ahead log (WAL) optimization.
        
    -   NoSQL databases, such as Cassandra, MongoDB, and HBase.
        
    -   Search scenarios that use solutions such as Elasticsearch.
        
    -   Other I/O-intensive applications that frequently write data to disks, such as message middleware and containers.
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.7 GHz and an all-core turbo frequency of 3.2 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        

i4p instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Persistent memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.i4p.2xlarge

8

32

1 \* 126

5/10

1,600,000

50,000/up to 110,000

3/6

ecs.i4p.4xlarge

16

64

2 \* 126

10/25

3,000,000

80,000/up to 110,000

5/6

ecs.i4p.6xlarge

24

96

3 \* 126

12/25

4,500,000

110,000/none

6/none

ecs.i4p.8xlarge

32

128

4 \* 126

16/25

6,000,000

150,000/none

8/none

ecs.i4p.16xlarge

64

256

1 \* 1008

32/none

12,000,000

300,000/none

16/none

ecs.i4p.32xlarge

128

512

2 \* 1008

64/none

24,000,000

600,000/none

32/none

### i3g, instance family with local SSDs

-   **Introduction**: This instance family is equipped with high-performance local NVMe SSDs that deliver high IOPS, high I/O throughput, and low latency.
    
-   **Use cases**: OLTP and high-performance relational databases, NoSQL databases such as Cassandra, MongoDB, and HBase, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4, which is designed for high-performance databases.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        

i3g instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.i3g.2xlarge

8

32

1 \* 479 GB (1 \* 447 GiB)

3/10

1,750,000

52,500

2

ecs.i3g.4xlarge

16

64

1 \* 959 GB (1 \* 894 GiB)

5/10

3,500,000

84,000

3

ecs.i3g.8xlarge

32

128

2 \* 959 GB (2 \* 894 GiB)

12/none

7,000,000

157,500

5

ecs.i3g.13xlarge

52

192

3 \* 959 GB (3 \* 894 GiB)

16/none

12,000,000

252,000

8

ecs.i3g.26xlarge

104

384

6 \* 959 GB (6 \* 894 GiB)

32/none

24,000,000

500,000

16

**Note**

This instance family supports only Linux images. When you create an instance of this instance family, you must select a Linux image.

### i3, instance family with local SSDs

-   **Introduction**: This instance family is equipped with high-performance local NVMe SSDs that deliver high IOPS, high I/O throughput, and low latency, and allows damaged disks to be isolated online.
    
-   **Use cases**: OLTP and high-performance relational databases, NoSQL databases such as Cassandra and MongoDB, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute**:
    
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        

i3 instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.i3.xlarge

4

32

1 \* 959 GB (1 \* 894 GiB)

1.5/10

1,000,000

40,000

1.5

ecs.i3.2xlarge

8

64

1 \* 1,919 GB (1 \* 1,788 GiB)

2.5/10

1,600,000

50,000

2

ecs.i3.4xlarge

16

128

2 \* 1,919 GB (2 \* 1,788 GiB)

5/10

3,000,000

80,000

3

ecs.i3.8xlarge

32

256

4 \* 1,919 GB (4 \* 1,788 GiB)

10/none

6,000,000

150,000

5

ecs.i3.13xlarge

52

384

6 \* 1,919 GB (6 \* 1,788 GiB)

16/none

9,000,000

240,000

8

ecs.i3.26xlarge

104

768

12 \* 1,919 GB (12 \* 1,788 GiB)

32/none

24,000,000

480,000

16

**Note**

This instance family supports only Linux images. When you create an instance of this instance family, you must select a Linux image.

### i2, instance family with local SSDs

-   **Introduction**: This instance family is equipped with high-performance local NVMe SSDs that deliver high IOPS, high I/O throughput, and low latency.
    
-   **Use cases**: OLTP and high-performance relational databases, NoSQL databases such as Cassandra, MongoDB, and HBase, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8, which is designed for high-performance databases.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks.
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        

i2 instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Local storage**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk bandwidth (Gbit/s)**

ecs.i2.xlarge

4

32

1 \* 959 GB (1 \* 894 GiB)

1

500,000

Up to 16

ecs.i2.2xlarge

8

64

1 \* 1,919 GB (1 \* 1,788 GiB)

2

1,000,000

Up to 16

ecs.i2.4xlarge

16

128

2 \* 1,919 GB (2 \* 1,788 GiB)

3

1,500,000

Up to 16

ecs.i2.8xlarge

32

256

4 \* 1,919 GB (4 \* 1,788 GiB)

6

2,000,000

Up to 16

ecs.i2.16xlarge

64

512

8 \* 1,919 GB (8 \* 1,788 GiB)

10

4,000,000

Up to 16

### i2g, instance family with local SSDs

-   **Introduction**: This instance family is equipped with high-performance local NVMe SSDs that deliver high IOPS, high I/O throughput, and low latency.
    
-   **Use cases**: OLTP and high-performance relational databases, NoSQL databases such as Cassandra, MongoDB, and HBase, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4, which is designed for high-performance databases.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks.
        
-   **Network**:
    
    -   Supports only IPv4.
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        

i2g instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Local storage**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

ecs.i2g.2xlarge

8

32

1 \* 959 GB (1 \* 894 GiB)

2

1,000,000

ecs.i2g.4xlarge

16

64

1 \* 1,919 GB (1 \* 1,788 GiB)

3

1,500,000

ecs.i2g.8xlarge

32

128

2 \* 1,919 GB (2 \* 1,788 GiB)

6

2,000,000

ecs.i2g.16xlarge

64

256

4 \* 1,919 GB (4 \* 1,788 GiB)

10

4,000,000

### i2ne, instance family with local SSDs

-   **Introduction**: This instance family is equipped with high-performance local NVMe SSDs that deliver high IOPS, high I/O throughput, and low latency.
    
-   **Use cases**: OLTP and high-performance relational databases, NoSQL databases such as Cassandra, MongoDB, and HBase, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8, which is designed for high-performance databases.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks.
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
    -   Provides a network bandwidth of up to 20 Gbit/s.
        

i2ne instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Local storage**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk bandwidth (Gbit/s)**

ecs.i2ne.xlarge

4

32

1 \* 959 GB (1 \* 894 GiB)

1.5

500,000

Up to 16

ecs.i2ne.2xlarge

8

64

1 \* 1,919 GB (1 \* 1,788 GiB)

2.5

1,000,000

Up to 16

ecs.i2ne.4xlarge

16

128

2 \* 1,919 GB (2 \* 1,788 GiB)

5

1,500,000

Up to 16

ecs.i2ne.8xlarge

32

256

4 \* 1,919 GB (4 \* 1,788 GiB)

10

2,000,000

Up to 16

ecs.i2ne.16xlarge

64

512

8 \* 1,919 GB (8 \* 1,788 GiB)

20

4,000,000

Up to 16

ecs.i2ne.20xlarge

80

704

10 \* 1,919 GB (10 \* 1,788 GiB)

25

4,500,000

Up to 16

### i2gne, instance family with local SSDs

-   **Introduction**: This instance family is equipped with high-performance local NVMe SSDs that deliver high IOPS, high I/O throughput, and low latency.
    
-   **Use cases**: OLTP and high-performance relational databases, NoSQL databases such as Cassandra, MongoDB, and HBase, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4, which is designed for high-performance databases.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks.
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
    -   Provides a network bandwidth of up to 20 Gbit/s.
        

i2gne instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Local storage**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

ecs.i2gne.2xlarge

8

32

1 \* 959 GB (1 \* 894 GiB)

2.5

1,000,000

ecs.i2gne.4xlarge

16

64

1 \* 1,919 GB (1 \* 1,788 GiB)

5

1,500,000

ecs.i2gne.8xlarge

32

128

2 \* 1,919 GB (2 \* 1,788 GiB)

10

2,000,000

ecs.i2gne.16xlarge

64

256

4 \* 1,919 GB (4 \* 1,788 GiB)

20

4,000,000

### hfc9i, compute-optimized instance family with high clock speeds

-   **Introduction**: This instance family uses Alibaba Cloud's new CIPU architecture with performance cores (P-core) of Intel ®Xeon ®6 processor. It provides stable computing power output, a more powerful I/O engine, and chip-level security hardening.
    
-   **Scenarios**: high network packet sending and receiving scenarios, data analysis, Batch Compute, video encoding, massively multiplayer online game (MMO) frontend, and high-performance scientific and engineering applications.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses Intel ®Xeon ®Granite Rapids processors, with a clock frequency of 3.4 GHz and an all-core turbo frequency of 3.8 GHz for stable computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports ESSDs, ESSD AutoPL disks, and Regional ESSDs. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   For small instance types, disk IOPS and disk bandwidth are burstable. The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**: supports the virtual Trusted Platform Module (vTPM) feature. For more information, see [Overview of trusted computing capabilities](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

hfc9i instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.hfc9i.large

2

4

2.5/15

1,000,000

500,000

2

3

6

6

20,000/burstable up to 200,000

2/12

ecs.hfc9i.xlarge

4

8

4/15

1,200,000

500,000

4

4

15

15

50,000/burstable up to 200,000

2.5/12

ecs.hfc9i.2xlarge

8

16

8/15

1,600,000

500,000

8

4

15

15

60,000/burstable up to 200,000

4/12

ecs.hfc9i.3xlarge

12

24

10/15

2,400,000

500,000

12

8

15

15

80,000/burstable up to 200,000

5/12

ecs.hfc9i.4xlarge

16

32

16/25

3,000,000

500,000

16

8

30

30

100,000/burstable up to 200,000

6/12

ecs.hfc9i.6xlarge

24

48

18/25

4,500,000

500,000

24

8

30

30

120,000/burstable up to 200,000

8/12

ecs.hfc9i.8xlarge

32

64

20/32

6,000,000

800,000

32

8

30

30

200,000/burstable up to 250,000

12/15

ecs.hfc9i.12xlarge

48

96

25/32

9,000,000

1,000,000

48

8

30

30

250,000/none

15/none

ecs.hfc9i.16xlarge

64

128

36/none

12,000,000

2,000,000

64

8

30

30

360,000/none

20/none

ecs.hfc9i.24xlarge

96

192

48/none

16,000,000

3,000,000

64

15

50

50

400,000/None

24/none

ecs.hfc9i.36xlarge

144

384

64/none

20,000,000

4,000,000

64

15

50

50

500,000/none

32/none

### hfc8i, compute-optimized instance family with high clock speeds

-   **Introduction**: This instance family uses the innovative CIPU architecture developed by Alibaba Cloud to provide stable computing power, a more robust I/O engine, and chip-level security hardening.
    
-   **Scenarios**:
    
    -   Large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   High-performance frontend server clusters
        
    -   Frontend servers of massively multiplayer online (MMO) games
        
    -   Data analytics, batch processing, and video encoding
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses the fourth-generation Intel ®Xeon ®Scalable processors (Sapphire Rapids) with a base frequency of 3.3 GHz and an all-core turbo frequency of 3.9 GHz for stable computing performance.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   Is compatible with specific operating systems. For more information, see [Operating system compatibility for Intel instance types](/help/en/ecs/intel-instance-specifications-and-operating-system-compatibility).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Provides disk burstable IOPS and burstable bandwidth capabilities for low-specification instances.
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   Provides burstable network bandwidth for low-specification instances.
        
    -   Provides high network performance based on large computing capacity.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

hfc8i instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.hfc8i.large

2

4

2.5/15

1,200,000

300,000

2

3

6

6

30,000/burstable up to 200,000

3/12

ecs.hfc8i.xlarge

4

8

4/15

1,400,000

300,000

4

4

15

15

50,000/burstable up to 200,000

4/12

ecs.hfc8i.2xlarge

8

16

8/15

1,800,000

300,000

8

4

15

15

60,000/burstable up to 200,000

6/12

ecs.hfc8i.3xlarge

12

24

10/15

2,800,000

300,000

12

8

15

15

90,000/burstable up to 200,000

8/12

ecs.hfc8i.4xlarge

16

32

16/25

3,600,000

500,000

16

8

30

30

120,000/burstable up to 200,000

10/12

ecs.hfc8i.6xlarge

24

48

18/25

5,500,000

800,000

24

8

30

30

200,000/none

12/none

ecs.hfc8i.8xlarge

32

64

32/none

7,500,000

1,000,000

32

8

30

30

250,000/none

16/none

ecs.hfc8i.16xlarge

64

128

64/none

15,000,000

2,000,000

64

8

30

30

450,000 /None

32/none

ecs.hfc8i.32xlarge

128

256

100/none

30,000,000

4,000,000

64

15

50

50

900,000/none

64/none

### hfc7, compute-optimized instance family with high clock speeds

-   **Introduction**: This instance family offloads a large number of virtualization features to dedicated hardware by using the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads.
    
-   **Scenarios**:
    
    -   Large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   High-performance frontend server clusters
        
    -   Frontend servers of massively multiplayer online (MMO) games
        
    -   Data analytics, batch processing, and video encoding
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses Intel® Xeon® Cooper Lake processors that deliver an all-core turbo frequency of 3.8 GHz and a clock speed of at least 3.3 GHz to provide consistent computing performance.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

hfc7 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.hfc7.large

2

4

1.2/10

900,000

250,000

2

2

6

6

20,000

1

ecs.hfc7.xlarge

4

8

2/10

1,000,000

250,000

4

3

15

15

30,000

1.5

ecs.hfc7.2xlarge

8

16

3/10

1,600,000

250,000

8

4

15

15

45,000

2

ecs.hfc7.3xlarge

12

24

4.5/10

2,000,000

250,000

8

6

15

15

60,000

2.5

ecs.hfc7.4xlarge

16

32

6/10

2,500,000

300,000

8

8

30

30

75,000

3

ecs.hfc7.6xlarge

24

48

8/10

3,000,000

450,000

12

8

30

30

90,000

4

ecs.hfc7.8xlarge

32

64

10/none

4,000,000

600,000

16

8

30

30

105,000

5

ecs.hfc7.12xlarge

48

96

16/none

6,000,000

1,000,000

24

8

30

30

150,000

8

ecs.hfc7.24xlarge

96

192

32/none

12,000,000

1,800,000

32

15

30

30

300,000

16

### hfc6, compute-optimized instance family with high clock speeds

-   **Introduction**: This instance family offloads a large number of virtualization features to dedicated hardware by using the SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads.
    
-   **Scenarios**:
    
    -   Large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Web frontend servers
        
    -   Frontend servers of massively multiplayer online (MMO) games
        
    -   Data analytics, batch processing, and video encoding
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 3.1 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.5 GHz to provide consistent computing performance.
        
        **Note**
        
        The processors used by this instance family have a clock speed of 3.1 GHz. However, the Intel System Studio (ISS) feature may cause a lower clock speed to be displayed. Alibaba Cloud is working on this issue. This issue does not affect the actual clock speeds of your instances.
        
        You can separately run the following commands to use the turbostat tool to view the actual clock speeds:
        
        ```
        yum install kernel-tools
        ```
        
        ```
        turbostat
        ```
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

hfc6 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.hfc6.large

2

4

1/3

300,000

35,000

2

2

6

1

10,000

1

ecs.hfc6.xlarge

4

8

1.5/5

500,000

70,000

4

3

10

1

20,000

1.5

ecs.hfc6.2xlarge

8

16

2.5/8

800,000

150,000

8

4

10

1

25,000

2

ecs.hfc6.3xlarge

12

24

4/10

900,000

220,000

8

6

10

1

30,000

2.5

ecs.hfc6.4xlarge

16

32

5/10

1,000,000

300,000

8

8

20

1

40,000

3

ecs.hfc6.6xlarge

24

48

7.5/10

1,500,000

450,000

12

8

20

1

50,000

4

ecs.hfc6.8xlarge

32

64

10/none

2,000,000

600,000

16

8

20

1

60,000

5

ecs.hfc6.10xlarge

40

96

12.5/none

3,000,000

1,000,000

32

7

20

1

100,000

8

ecs.hfc6.16xlarge

64

128

20/none

4,000,000

1,200,000

32

8

20

1

120,000

10

ecs.hfc6.20xlarge

80

192

25/none

6,000,000

1,800,000

32

15

20

1

200,000

16

### hfg9i, general-purpose instance family with high clock speeds

-   **Introduction**: This instance family uses Alibaba Cloud's new CIPU architecture with P-core (performance cores) of Intel ®Xeon ®6 processor. It provides stable computing power output, a more powerful I/O engine, and chip-level security hardening.
    
-   **Scenarios**: high network packet sending and receiving scenarios, data analysis, Batch Compute, and video encoding, massively multiplayer online game (MMO) frontend, high-performance scientific and engineering applications, and medium and large databases.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses Intel ®Xeon ®Granite Rapids processors, with a clock frequency of 3.4 GHz and an all-core turbo frequency of 3.8 GHz for stable computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports ESSDs, ESSD AutoPL disks, and Regional ESSDs. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   For small instance types, disk IOPS and disk bandwidth are burstable. The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

hfg9i instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.hfg9i.large

2

8

2.5/15

1,000,000

500,000

2

3

6

6

20,000/burstable up to 200,000

2/12

ecs.hfg9i.xlarge

4

16

4/15

1,200,000

500,000

4

4

15

15

50,000/burstable up to 200,000

2.5/12

ecs.hfg9i.2xlarge

8

32

8/15

1,600,000

500,000

8

4

15

15

60,000/burstable up to 200,000

4/12

ecs.hfg9i.3xlarge

12

48

10/15

2,400,000

500,000

12

8

15

15

80,000/burstable up to 200,000

5/12

ecs.hfg9i.4xlarge

16

64

16/25

3,000,000

500,000

16

8

30

30

100,000/burstable up to 200,000

6/12

ecs.hfg9i.6xlarge

24

96

18/25

4,500,000

500,000

24

8

30

30

120,000/burstable up to 200,000

8/12

ecs.hfg9i.8xlarge

32

128

20/32

6,000,000

800,000

32

8

30

30

200,000 /burstable up to 250,000

12/15

ecs.hfg9i.12xlarge

48

192

25/32

9,000,000

1,000,000

48

8

30

30

250,000/none

15/none

ecs.hfg9i.16xlarge

64

256

36/none

12,000,000

2,000,000

64

8

30

30

360,000/none

20/none

ecs.hfg9i.24xlarge

96

384

48/none

16,000,000

3,000,000

64

15

50

50

400,000 /None

24/none

ecs.hfg9i.36xlarge

144

768

64/none

20,000,000

4,000,000

64

15

50

50

500,000/none

32/none

### **hfg8i, general-purpose instance family with high clock speeds**

-   **Introduction**: This instance family uses the innovative CIPU architecture developed by Alibaba Cloud to provide stable computing power, a more robust I/O engine, and chip-level security hardening.
    
-   **Scenarios**:
    
    -   Large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   High-performance frontend server clusters
        
    -   High-performance frontend server clusters
        
    -   Data analytics, batch processing, and video encoding
        
    -   High-performance scientific and engineering applications
        
    -   Medium-sized database systems
        
    -   Enterprise-level applications of various types and sizes
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses the fourth-generation Intel ®Xeon ®Scalable processors (Sapphire Rapids) with a base frequency of 3.3 GHz and an all-core turbo frequency of 3.9 GHz for stable computing performance.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   Is compatible with specific operating systems. For more information, see [Operating system compatibility for Intel instance types](/help/en/ecs/intel-instance-specifications-and-operating-system-compatibility).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Provides disk burstable IOPS and burstable bandwidth capabilities for low-specification instances.
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see Storage I/O performance.
        
    -   Provides high network performance based on large computing capacity.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

hfg8i instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Attachable disks**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.hfg8i.large

2

8

2.5/15

1,200,000

300,000

2

3

6

6

16

30,000/burstable up to 200,000

3/12

ecs.hfg8i.xlarge

4

16

4/15

1,400,000

300,000

4

4

15

15

16

50,000/burstable up to 200,000

4/12

ecs.hfg8i.2xlarge

8

32

8/15

1,800,000

300,000

8

4

15

15

16

60,000/burstable up to 200,000

6/12

ecs.hfg8i.3xlarge

12

48

10/15

2,800,000

300,000

12

8

15

15

16

90,000/burstable up to 200,000

8/12

ecs.hfg8i.4xlarge

16

64

16/25

3,600,000

500,000

16

8

30

30

16

120,000/burstable up to 200,000

10/12

ecs.hfg8i.6xlarge

24

96

18/25

5,500,000

800,000

24

8

30

30

24

200,000/none

12/none

ecs.hfg8i.8xlarge

32

128

32/none

7,500,000

1,000,000

32

8

30

30

32

250,000/none

16/none

ecs.hfg8i.16xlarge

64

256

64/none

15,000,000

2,000,000

64

8

30

30

32

450,000 /None

32/none

ecs.hfg8i.32xlarge

128

512

100/none

30,000,000

4,000,000

64

15

50

50

64

900,000/none

64/none

### hfg7, general-purpose instance family with high clock speeds

-   **Introduction**: This instance family offloads a large number of virtualization features to dedicated hardware by using the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads.
    
-   **Scenarios**:
    
    -   Large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Enterprise-grade applications of various types and sizes
        
    -   Game servers
        
    -   Small and medium-sized database systems, caches, and search clusters
        
    -   High-performance scientific computing
        
    -   Video encoding applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses Intel® Xeon® Cooper Lake processors that deliver an all-core turbo frequency of 3.8 GHz and a clock speed of at least 3.3 GHz to provide consistent computing performance.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

hfg7 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.hfg7.large

2

8

1.2/10

900,000

250,000

2

2

6

6

20,000

1

ecs.hfg7.xlarge

4

16

2/10

1,000,000

250,000

4

3

15

15

30,000

1.5

ecs.hfg7.2xlarge

8

32

3/10

1,600,000

250,000

8

4

15

15

45,000

2

ecs.hfg7.3xlarge

12

48

4.5/10

2,000,000

250,000

8

6

15

15

60,000

2.5

ecs.hfg7.4xlarge

16

64

6/10

2,500,000

300,000

8

8

30

30

75,000

3

ecs.hfg7.6xlarge

24

96

8/10

3,000,000

450,000

12

8

30

30

90,000

4

ecs.hfg7.8xlarge

32

128

10/none

4,000,000

600,000

16

8

30

30

105,000

5

ecs.hfg7.12xlarge

48

192

16/none

6,000,000

1,000,000

24

8

30

30

150,000

8

ecs.hfg7.24xlarge

96

384

32/none

12,000,000

1,800,000

32

15

30

30

300,000

16

### hfg6, general-purpose instance family with high clock speeds

-   **Introduction**: This instance family offloads a large number of virtualization features to dedicated hardware by using the SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads.
    
-   **Scenarios**:
    
    -   Large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Enterprise-grade applications of various types and sizes
        
    -   Websites and application servers
        
    -   Game servers
        
    -   Small and medium-sized database systems, caches, and search clusters
        
    -   Data analytics and computing
        
    -   Computing clusters and memory-intensive data processing
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 3.1 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.5 GHz to provide consistent computing performance.
        
        **Note**
        
        The processors used by this instance family have a clock speed of 3.1 GHz. However, the Intel System Studio (ISS) feature may cause a lower clock speed to be displayed. Alibaba Cloud is working on this issue. This issue does not affect the actual clock speeds of your instances.
        
        You can separately run the following commands to use the turbostat tool to view the actual clock speeds:
        
        ```
        yum install kernel-tools
        ```
        
        ```
        turbostat
        ```
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

hfg6 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.hfg6.large

2

8

1/3

300,000

35,000

2

2

6

1

10,000

1

ecs.hfg6.xlarge

4

16

1.5/5

500,000

70,000

4

3

10

1

20,000

1.5

ecs.hfg6.2xlarge

8

32

2.5/8

800,000

150,000

8

4

10

1

25,000

2

ecs.hfg6.3xlarge

12

48

4/10

900,000

220,000

8

6

10

1

30,000

2.5

ecs.hfg6.4xlarge

16

64

5/10

1,000,000

300,000

8

8

20

1

40,000

3

ecs.hfg6.6xlarge

24

96

7.5/10

1,500,000

450,000

12

8

20

1

50,000

4

ecs.hfg6.8xlarge

32

128

10/none

2,000,000

600,000

16

8

20

1

60,000

5

ecs.hfg6.10xlarge

40

192

12.5/none

3,000,000

1,000,000

32

7

20

1

100,000

8

ecs.hfg6.16xlarge

64

256

20/none

4,000,000

1,200,000

32

8

20

1

120,000

10

ecs.hfg6.20xlarge

80

384

25/none

6,000,000

1,800,000

32

15

20

1

200,000

16

### hfr9i, memory-optimized instance family with high clock speeds

-   **Introduction**: This instance family uses Alibaba Cloud's new CIPU architecture with P-core (performance cores) of Intel ®Xeon ®6 processor. It provides stable computing power output, a more powerful I/O engine, and chip-level security hardening.
    
-   **Scenarios**: high-network packet sending and receiving scenarios, data analysis and mining, distributed memory caching, high-performance databases, in-memory databases, high-performance scientific and engineering applications, Hadoop and Spark clusters, and other enterprise applications that require large amounts of memory.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses Intel ®Xeon ®Granite Rapids processors, with a clock frequency of 3.4 GHz and an all-core turbo frequency of 3.8 GHz for stable computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports ESSDs, ESSD AutoPL disks, and Regional ESSDs. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   For small instance types, disk IOPS and disk bandwidth are burstable. The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

hfr9i instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.hfr9i.large

2

16

2.5/15

1,000,000

500,000

2

3

6

6

20,000/burstable up to 200,000

2/12

ecs.hfr9i.xlarge

4

32

4/15

1,200,000

500,000

4

4

15

15

50,000/burstable up to 200,000

2.5/12

ecs.hfr9i.2xlarge

8

64

8/15

1,600,000

500,000

8

4

15

15

60,000/burstable up to 200,000

4/12

ecs.hfr9i.3xlarge

12

96

10/15

2,400,000

500,000

12

8

15

15

80,000/burstable up to 200,000

5/12

ecs.hfr9i.4xlarge

16

128

16/25

3,000,000

500,000

16

8

30

30

100,000/burstable up to 200,000

6/12

ecs.hfr9i.6xlarge

24

192

18/25

4,500,000

500,000

24

8

30

30

120,000/burstable up to 200,000

8/12

ecs.hfr9i.8xlarge

32

256

20/32

6,000,000

800,000

32

8

30

30

200,000/burstable up to 250,000

12/15

ecs.hfr9i.12xlarge

48

384

25/32

9,000,000

1,000,000

48

8

30

30

250,000/none

15/none

ecs.hfr9i.16xlarge

64

512

36/none

12,000,000

2,000,000

64

8

30

30

360,000/none

20/none

ecs.hfr9i.24xlarge

96

768

48/none

16,000,000

3,000,000

64

15

50

50

400,000/None

24/none

ecs.hfr9i.36xlarge

144

1536

64/none

20,000,000

4,000,000

64

15

50

50

500,000/none

32/none

### hfr8i, memory-optimized instance family with high clock speeds

-   **Introduction**: This instance family uses the innovative CIPU architecture developed by Alibaba Cloud to provide stable computing power, a more robust I/O engine, and chip-level security hardening.
    
-   **Scenarios**:
    
    -   Large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   High-performance scientific and engineering applications
        
    -   High-performance databases and in-memory databases
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses the fourth-generation Intel® Xeon® Scalable (Sapphire Rapids) processors that deliver a base frequency of 2.7 GHz and an all-core turbo frequency of 3.2 GHz to provide consistent computing performance.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   Is compatible with specific operating systems. For more information, see [Operating system compatibility for Intel instance types](/help/en/ecs/intel-instance-specifications-and-operating-system-compatibility).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Provides disk burstable IOPS and burstable bandwidth capabilities for low-specification instances.
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides burstable network bandwidth for low-specification instances.
        
    -   Provides high network performance based on large computing capacity.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

hfr8i instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Attachable disks**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.hfr8i.large

2

16

2.5/15

1,200,000

300,000

2

3

6

6

16

30,000/burstable up to 200,000

3/12

ecs.hfr8i.xlarge

4

32

4/15

1,400,000

300,000

4

4

15

15

16

50,000/burstable up to 200,000

4/12

ecs.hfr8i.2xlarge

8

64

8/15

1,800,000

300,000

8

4

15

15

16

60,000/burstable up to 200,000

6/12

ecs.hfr8i.3xlarge

12

96

10/15

2,800,000

300,000

12

8

15

15

16

90,000/burstable up to 200,000

8/12

ecs.hfr8i.4xlarge

16

128

16/25

3,600,000

500,000

16

8

30

30

16

120,000/burstable up to 200,000

10/12

ecs.hfr8i.6xlarge

24

192

18/25

5,500,000

800,000

24

8

30

30

24

200,000/none

12/none

ecs.hfr8i.8xlarge

32

256

32/none

7,500,000

1,000,000

32

8

30

30

32

250,000/none

16/none

ecs.hfr8i.16xlarge

64

512

64/none

15,000,000

2,000,000

64

8

30

30

32

450,000/None

32/none

ecs.hfr8i.32xlarge

128

1024

100/none

30,000,000

4,000,000

64

15

50

50

64

900,000/none

64/none

### hfr7, memory-optimized instance family with high clock speeds

-   **Introduction**: This instance family offloads a large number of virtualization features to dedicated hardware by using the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads.
    
-   **Scenarios**:
    
    -   Large volumes of packets are received and transmitted, such as live commenting and telecom data forwarding
        
    -   High-performance databases and in-memory databases
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses Intel® Xeon® Cooper Lake processors that deliver an all-core turbo frequency of 3.8 GHz and a clock speed of at least 3.3 GHz to provide consistent computing performance.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

hfr7 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.hfr7.large

2

16

1.2/10

900,000

250,000

2

2

6

6

20,000

1

ecs.hfr7.xlarge

4

32

2/10

1,000,000

250,000

4

3

15

15

30,000

1.5

ecs.hfr7.2xlarge

8

64

3/10

1,600,000

250,000

8

4

15

15

45,000

2

ecs.hfr7.3xlarge

12

96

4.5/10

2,000,000

250,000

8

6

15

15

60,000

2.5

ecs.hfr7.4xlarge

16

128

6/10

2,500,000

300,000

8

8

30

30

75,000

3

ecs.hfr7.6xlarge

24

192

8/10

3,000,000

450,000

12

8

30

30

90,000

4

ecs.hfr7.8xlarge

32

256

10/none

4,000,000

600,000

16

8

30

30

105,000

5

ecs.hfr7.12xlarge

48

384

16/none

6,000,000

1,000,000

24

8

30

30

150,000

8

ecs.hfr7.24xlarge

96

768

32/none

12,000,000

1,800,000

32

15

30

30

300,000

16

### hfr6, memory-optimized instance family with high clock speeds

-   **Introduction**: This instance family offloads a large number of virtualization features to dedicated hardware by using the SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads.
    
-   **Scenarios**:
    
    -   Large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   High-performance databases and in-memory databases
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 3.1 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.5 GHz to provide consistent computing performance.
        
        **Note**
        
        The processors used by this instance family have a clock speed of 3.1 GHz. However, the Intel System Studio (ISS) feature may cause a lower clock speed to be displayed. Alibaba Cloud is working on this issue. This issue does not affect the actual clock speeds of your instances.
        
        You can separately run the following commands to use the turbostat tool to view the actual clock speeds:
        
        ```
        yum install kernel-tools
        ```
        
        ```
        turbostat
        ```
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

hfr6 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.hfr6.large

2

16

1/3

300,000

35,000

2

2

6

1

10,000

1

ecs.hfr6.xlarge

4

32

1.5/5

500,000

70,000

4

3

10

1

20,000

1.5

ecs.hfr6.2xlarge

8

64

2.5/8

800,000

150,000

8

4

10

1

25,000

2

ecs.hfr6.3xlarge

12

96

4/10

900,000

220,000

8

6

10

1

30,000

2.5

ecs.hfr6.4xlarge

16

128

5/10

1,000,000

300,000

8

8

20

1

40,000

3

ecs.hfr6.6xlarge

24

192

7.5/10

1,500,000

450,000

12

8

20

1

50,000

4

ecs.hfr6.8xlarge

32

256

10/none

2,000,000

600,000

16

8

20

1

60,000

5

ecs.hfr6.10xlarge

40

384

12.5/none

3,000,000

1,000,000

32

7

20

1

100,000

8

ecs.hfr6.16xlarge

64

512

20/none

4,000,000

1,200,000

32

8

20

1

120,000

10

ecs.hfr6.20xlarge

80

768

25/none

6,000,000

1,800,000

32

15

20

1

200,000

16

### hfc5, compute-optimized instance family with high clock speeds

-   **Scenarios**: High-performance frontend servers, high-performance scientific and engineering applications, MMO games, and video encoding.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses processors of 3.1 GHz Intel ®Xeon ®Gold 6149(Skylake) or 8269CY(Cascade Lake) to provide stable computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports only IPv4.
        
    -   Provides high network performance based on large computing capacity.
        

hfc5 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

ecs.hfc5.large

2

4

1

300,000

2

2

6

ecs.hfc5.xlarge

4

8

1.5

500,000

2

3

10

ecs.hfc5.2xlarge

8

16

2

1,000,000

4

4

10

ecs.hfc5.3xlarge

12

24

2.5

1,300,000

4

6

10

ecs.hfc5.4xlarge

16

32

3

1,600,000

4

8

20

ecs.hfc5.6xlarge

24

48

4.5

2,000,000

6

8

20

ecs.hfc5.8xlarge

32

64

6

2,500,000

8

8

20

### hfg5, general-purpose instance family with high clock speeds

-   **Scenarios**: High-performance frontend servers, high-performance scientific and engineering applications, MMO games, and video encoding.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4 (excluding the instance type with 56 vCPUs).
        
    -   Uses 3.1 GHz Intel® Xeon® Gold 6149 (Skylake) processors to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports only IPv4.
        
    -   Provides high network performance based on large computing capacity.
        

hfg5 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

ecs.hfg5.large

2

8

1

300,000

2

2

6

ecs.hfg5.xlarge

4

16

1.5

500,000

2

3

10

ecs.hfg5.2xlarge

8

32

2

1,000,000

4

4

10

ecs.hfg5.3xlarge

12

48

2.5

1,300,000

4

6

10

ecs.hfg5.4xlarge

16

64

3

1,600,000

4

8

20

ecs.hfg5.6xlarge

24

96

4.5

2,000,000

6

8

20

ecs.hfg5.8xlarge

32

128

6

2,500,000

8

8

20

ecs.hfg5.14xlarge

56

160

10

4,000,000

14

8

20

### g7se, storage-enhanced general-purpose instance family

-   **Introduction**: This instance family uses the third-generation SHENLONG architecture and Intel Ice Lake processors to improve storage I/O performance.
    
-   **Supported scenarios**: I/O-intensive scenarios such as large and medium-sized online transaction processing (OLTP) core databases, large and medium-sized NoSQL databases, search and real-time log analytics, and traditional large enterprise-level commercial software such as SAP.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.9 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports the Non-Volatile Memory Express (NVMe) protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Allows up to 64 data disks to be attached per instance. You can attach up to 16 data disks to an instance when you create the instance. If the instance requires additional data disks, attach more data disks after the instance is created. For more information, see [Attach a data disk](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb).
        
    -   Delivers a sequential read/write throughput of up to 64 Gbit/s and up to 1,000,000 IOPS per instance.
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
    -   Provides high network performance based on large computing capacity.
        

g7se instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum attached data disks**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.g7se.large

2

8

1.2/burstable up to 3

450,000

Up to 250,000

2

3

6

6

16

30,000/burstable up to 150,000

3/10

ecs.g7se.xlarge

4

16

2/burstable up to 5

500,000

Up to 250,000

4

4

15

15

16

60,000/burstable up to 150,000

4/10

ecs.g7se.2xlarge

8

32

3/burstable up to 8

800,000

Up to 250,000

8

4

15

15

16

100,000/burstable up to 150,000

6/10

ecs.g7se.3xlarge

12

48

4.5/burstable up to 10

1,200,000

Up to 250,000

8

8

15

15

16

120,000/burstable up to 150,000

8/10

ecs.g7se.4xlarge

16

64

6/burstable up to 10

1,500,000

300,000

8

8

30

30

24

150,000/none

10/none

ecs.g7se.6xlarge

24

96

8/burstable up to 10

2,250,000

450,000

12

8

30

30

24

200,000/none

12/none

ecs.g7se.8xlarge

32

128

10/none

3,000,000

600,000

16

8

30

30

30

300,000/none

16/none

ecs.g7se.16xlarge

64

256

16/none

6,000,000

1,200,000

32

8

30

30

56

500,000/none

32/none

### c7se, storage-enhanced compute-optimized instance family

-   **Introduction**: This instance family uses the third-generation SHENLONG architecture and Intel Ice Lake processors to improve storage I/O performance.
    
-   **Supported scenarios**: I/O-intensive scenarios such as large and medium-sized OLTP core databases, large and medium-sized NoSQL databases, search and real-time log analytics, and traditional large enterprise-level commercial software such as SAP.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.9 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports the Non-Volatile Memory Express (NVMe) protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Allows up to 64 data disks to be attached per instance. You can attach up to 16 data disks to an instance when you create the instance. If the instance requires additional data disks, attach more data disks after the instance is created. For more information, see [Attach a data disk](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb).
        
    -   Delivers a sequential read/write throughput of up to 64 Gbit/s and up to 1,000,000 IOPS per instance.
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
    -   Provides high network performance based on large computing capacity.
        

c7se instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum attached data disks**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.c7se.large

2

4

1.2/burstable up to 3

450,000

Up to 250,000

2

3

6

6

16

30,000/burstable up to 150,000

3/10

ecs.c7se.xlarge

4

8

2/burstable up to 5

500,000

Up to 250,000

4

4

15

15

16

60,000/burstable up to 150,000

4/10

ecs.c7se.2xlarge

8

16

3/burstable up to 8

800,000

Up to 250,000

8

4

15

15

16

100,000/burstable up to 150,000

6/10

ecs.c7se.3xlarge

12

24

4.5/burstable up to 10

1,200,000

Up to 250,000

8

8

15

15

16

120,000/burstable up to 150,000

8/10

ecs.c7se.4xlarge

16

32

6/burstable up to 10

1,500,000

300,000

8

8

30

30

24

150,000/none

10/none

ecs.c7se.6xlarge

24

48

8/burstable up to 10

2,250,000

450,000

12

8

30

30

24

200,000/none

12/none

ecs.c7se.8xlarge

32

64

10/none

3,000,000

600,000

16

8

30

30

30

300,000/none

16/none

ecs.c7se.16xlarge

64

128

16/none

6,000,000

1,200,000

32

8

30

30

56

500,000/none

32/none

### r7se, storage-enhanced memory-optimized instance family

-   **Introduction**: This instance family uses the third-generation SHENLONG architecture and Intel Ice Lake processors to improve storage I/O performance.
    
-   **Supported scenarios**:
    
    -   I/O-intensive scenarios such as large and medium-sized OLTP core databases
        
    -   Large and medium-sized NoSQL databases
        
    -   Search and real-time log analytics
        
    -   Traditional large enterprise-level commercial software such as SAP
        
    -   High-density deployment of containers
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.9 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Allows up to 64 data disks to be attached per instance. You can attach up to 16 data disks to an instance when you create the instance. If the instance requires additional data disks, attach more data disks after the instance is created. For more information, see [Attach a data disk](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb).
        
    -   Delivers a sequential read/write throughput of up to 64 Gbit/s and up to 1,000,000 IOPS per instance.
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

r7se instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum attached data disks**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.r7se.large

2

16

1.2/burstable up to 3

450,000

Up to 250,000

2

3

6

6

16

30,000/burstable up to 150,000

3/10

ecs.r7se.xlarge

4

32

2/burstable up to 5

500,000

Up to 250,000

4

4

15

15

16

60,000/burstable up to 150,000

4/10

ecs.r7se.2xlarge

8

64

3/burstable up to 8

800,000

Up to 250,000

8

4

15

15

16

100,000/burstable up to 150,000

6/10

ecs.r7se.3xlarge

12

96

4.5/burstable up to 10

1,200,000

Up to 250,000

8

8

15

15

16

120,000/burstable up to 150,000

8/10

ecs.r7se.4xlarge

16

128

6/burstable up to 10

1,500,000

300,000

8

8

30

30

24

150,000/none

10/none

ecs.r7se.6xlarge

24

192

8/burstable up to 10

2,250,000

450,000

12

8

30

30

24

200,000/none

12/none

ecs.r7se.8xlarge

32

256

10/none

3,000,000

600,000

16

8

30

30

30

300,000/none

16/none

ecs.r7se.16xlarge

64

512

16/none

6,000,000

1,200,000

32

8

30

30

56

500,000/none

32/none

### g7nex, network-enhanced general-purpose instance family

-   **Introduction**: This instance family uses the fourth-generation SHENLONG architecture to provide predictable and consistent ultra-high performance. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
    
-   **Supported scenarios**:
    
    -   Network-intensive scenarios such as Network Functions Virtualization (NFV) or Software-defined Wide Area Network (SD-WAN), mobile Internet, live commenting on videos, and telecom data forwarding
        
    -   Small and medium-sized database systems, caches, and search clusters
        
    -   Enterprise-level applications of various types and sizes
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.7 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Offers burstable disk IOPS and burstable disk bandwidth for low-specification instances and provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Significantly improves the network throughput and packet forwarding rate per instance. A single instance can deliver a packet forwarding rate of up to 30,000,000 pps.
        
    -   Provides high network performance based on large computing capacity.
        

g7nex instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**EBS queues**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.g7nex.large

2

8

3/burstable up to 20

450,000

2

3

10

10

1

10,000/burstable up to 50,000

1.5/burstable up to 8

ecs.g7nex.xlarge

4

16

5/burstable up to 24

900,000

4

4

15

15

1

20,000/burstable up to 50,000

2/burstable up to 8

ecs.g7nex.2xlarge

8

32

10/burstable up to 32

1,750,000

8

6

15

15

2

25,000/burstable up to 50,000

3/burstable up to 8

ecs.g7nex.4xlarge

16

64

20/burstable up to 40

3,000,000

16

8

30

30

2

40,000/burstable up to 50,000

5/burstable up to 8

ecs.g7nex.8xlarge

32

128

40/none

6,000,000

32

8

30

30

4

75,000/none

8/none

ecs.g7nex.16xlarge

64

256

80/none

8,000,000

32

15

50

50

4

150,000/none

16/none

ecs.g7nex.32xlarge

128

512

160/none

16,000,000

32

15

50

50

4

300,000/none

32/none

**Note**

Each ecs.g7nex.32xlarge instance must have at least two elastic network interfaces (ENIs) that are assigned different network card indexes before the instance can burst its network bandwidth to 160 Gbit/s. If all ENIs on the instance are assigned the same network card index, the instance can burst its network bandwidth only to 100 Gbit/s. For more information, see [AttachNetworkInterface](/help/en/ecs/api-attachnetworkinterface#doc-api-Ecs-AttachNetworkInterface).

### c7nex, network-enhanced compute-optimized instance family

-   **Introduction**: This instance family uses the fourth-generation SHENLONG architecture to provide predictable and consistent ultra-high performance. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
    
-   **Supported scenarios**:
    
    -   Network-intensive scenarios such as NFV or SD-WAN, mobile Internet, live commenting on videos, and telecom data forwarding
        
    -   Small and medium-sized database systems, caches, and search clusters
        
    -   Enterprise-level applications of various types and sizes
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.7 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   For small instance types, disk IOPS and disk bandwidth are burstable. The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   Network:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Significantly improves the network throughput and packet forwarding rate per instance. A single instance can deliver a packet forwarding rate of up to 30,000,000 pps.
        
    -   Provides high network performance based on large computing capacity.
        

c7nex instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**EBS queues**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.c7nex.large

2

4

3/burstable up to 20

450,000

2

3

10

10

1

10,000/burstable up to 50,000

1.5/burstable up to 8

ecs.c7nex.xlarge

4

8

5/burstable up to 24

900,000

4

4

15

15

1

20,000/burstable up to 50,000

2/burstable up to 8

ecs.c7nex.2xlarge

8

16

10/burstable up to 32

1,750,000

8

6

15

15

2

25,000/burstable up to 50,000

3/burstable up to 8

ecs.c7nex.4xlarge

16

32

20/burstable up to 40

3,000,000

16

8

30

30

2

40,000/burstable up to 50,000

5/burstable up to 8

ecs.c7nex.8xlarge

32

64

40/none

6,000,000

32

8

30

30

4

75,000/none

8/none

ecs.c7nex.16xlarge

64

128

80/none

8,000,000

32

15

50

50

4

150,000/none

16/none

ecs.c7nex.32xlarge

128

256

160/none

16,000,000

32

15

50

50

4

300,000/none

32/none

**Note**

Each ecs.c7nex.32xlarge instance must have at least two ENIs that are assigned different network card indexes before the instance can burst its network bandwidth to 160 Gbit/s. If all ENIs on the instance are assigned the same network card index, the instance can burst its network bandwidth only to 100 Gbit/s. For more information, see [AttachNetworkInterface](/help/en/ecs/api-attachnetworkinterface#doc-api-Ecs-AttachNetworkInterface).

### g7ne, network-enhanced general-purpose instance family

-   **Introduction**: This instance family significantly improves the network throughput and packet forwarding rate per instance. A single instance can deliver a packet forwarding rate of up to 24,000,000 pps.
    
-   **Supported scenarios**:
    
    -   Network-intensive scenarios such as NFV or SD-WAN, mobile Internet, live commenting on videos, and telecom data forwarding
        
    -   Small and medium-sized database systems, caches, and search clusters
        
    -   Enterprise-level applications of various types and sizes
        
    -   Big data analytics and machine learning
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses Intel® Xeon® Platinum 8369HB (Cooper Lake) or Intel® Xeon® Platinum 8369HC (Cooper Lake) processors that deliver a turbo frequency of 3.8 GHz and a clock speed of at least 3.3 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides high network performance based on large computing capacity.
        

g7ne instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.g7ne.large

2

8

1.5/10

900,000

450,000

2

3

10

10

10,000

0.75

ecs.g7ne.xlarge

4

16

3/10

1,000,000

900,000

4

4

15

15

20,000

1

ecs.g7ne.2xlarge

8

32

6/15

1,600,000

1,750,000

8

6

15

15

25,000

1.2

ecs.g7ne.4xlarge

16

64

12/25

3,000,000

3,500,000

16

8

30

30

40,000

2

ecs.g7ne.8xlarge

32

128

25/none

6,000,000

6,000,000

32

8

30

30

75,000

5

ecs.g7ne.12xlarge

48

192

40/none

12,000,000

8,000,000

32

8

30

30

100,000

8

ecs.g7ne.24xlarge

96

384

80/none

24,000,000

16,000,000

48

15

50

50

240,000

16

### g5ne, network-enhanced general-purpose instance family

-   **Introduction**: This instance family significantly improves the network throughput and packet forwarding rate per instance.
    
-   **Supported scenarios**:
    
    -   Data Plane Development Kit (DPDK) applications
        
    -   Network-intensive scenarios such as NFV or SD-WAN, mobile Internet, live commenting on videos, and telecom data forwarding
        
    -   Small and medium-sized database systems, caches, and search clusters
        
    -   Enterprise-level applications of various types and sizes
        
    -   Big data analytics and machine learning
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) or 8269CY (Cascade Lake) processors to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        
        **Note**
        
        To deploy DPDK applications, we recommend that you select instance types in the g5ne instance family.
        

g5ne instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.g5ne.large

2

8

1

400,000

450,000

2

3

10

10

10,000

1

ecs.g5ne.xlarge

4

16

2

750,000

900,000

4

4

15

15

15,000

1

ecs.g5ne.2xlarge

8

32

3.5

1,500,000

1,750,000

8

6

15

15

30,000

1

ecs.g5ne.4xlarge

16

64

7

3,000,000

3,500,000

16

8

30

30

60,000

2

ecs.g5ne.8xlarge

32

128

15

6,000,000

7,000,000

32

8

30

30

110,000

4

ecs.g5ne.16xlarge

64

256

30

12,000,000

14,000,000

32

8

30

30

130,000

8

ecs.g5ne.18xlarge

72

288

33

13,500,000

15,000,000

32

15

50

50

160,000

9

### g9it, security-enhanced general-purpose instance family

-   **Introduction**:
    
    -   Supports Intel® SGX encrypted computing with up to 192 GiB of encrypted memory. This ensures the confidentiality and integrity of critical code and data against malware attacks.
        
    -   Supports SGX technology in virtual machine form factors. You can choose instance types as needed.
        
    -   Hyper-threading is disabled by default, providing exclusive physical cores. This reduces the risk of side-channel attacks. The memory encryption algorithm is upgraded to AES-256.
        
        **Important**
        
        If you use keys (such as SGX sealing keys) that are bound to hardware to encrypt the data of an instance within an Intel SGX enclave, the encrypted data cannot be decrypted after the host of the instance is changed. We recommend that you perform data redundancy and backup at the application layer to ensure application reliability.
        
    -   Leveraging TPM/TCM chips, the boot chain, from the underlying server hardware to the GuestOS, is measured and authenticated. This enables trusted boot.
        
    -   Uses the new Alibaba Cloud CIPU architecture, offloading many virtualization functions to dedicated hardware. This reduces virtualization overhead and delivers stable, predictable, ultra-high performance.
        
-   **Scenarios**:
    
    -   Scenarios involving sensitive information, such as personally identifiable information (PII), healthcare data, financial data, and intellectual property data.
        
    -   Multi-party computation requiring shared confidential data.
        
    -   Blockchain scenarios.
        
    -   Confidential machine learning.
        
    -   Scenarios with high security and trust requirements, such as finance, government, and enterprise applications.
        
    -   Enterprise applications of all types and scales.
        
-   **Compute**:
    
    -   Processor-to-memory ratio is 1:4. Encrypted memory accounts for approximately 50% of the total memory.
        
    -   Processor: Intel® Xeon® Granite Rapids, with a clock speed of 3.2 GHz and an all-core turbo frequency of 3.6 GHz. This provides stable compute performance.
        
-   **Storage**:
    
    -   I/O optimized instances.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   The I/O performance of instance storage scales with the compute specifications. Higher specifications provide better I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Networking**:
    
    -   Supports IPv4 and IPv6. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Instance network performance scales with instance specifications. Higher specifications provide stronger network performance.
        

g9it includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Encrypted memory (GiB)**

**Network bandwidth baseline/burst (Gbit/s)**

**Packet forwarding PPS**

**Supports vTPM**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per NIC**

**IPv6 addresses per NIC**

**Disk baseline/burst IOPS**

**Disk bandwidth baseline/burst (Gbit/s)**

ecs.g9it.large

2

8

4

4/15

1,200,000

Yes

500,000

4

4

15

15

50,000/200,000

2.5/10

ecs.g9it.xlarge

4

16

8

6/15

1,600,000

Yes

500,000

8

4

15

15

60,000/200,000

4/10

ecs.g9it.2xlarge

8

32

16

12/25

3,000,000

Yes

500,000

16

8

30

30

100,000/200,000

6/10

ecs.g9it.4xlarge

16

64

32

20/32

6,000,000

Yes

800,000

32

8

30

30

200,000/300,000

10/12

ecs.g9it.8xlarge

32

128

64

28/36

12,000,000

Yes

2,000,000

64

8

30

30

300,000/400,000

16/24

ecs.g9it.16xlarge

64

256

128

36/50

20,000,000

Yes

4,000,000

64

15

30

30

400,000/650,000

24/28

ecs.g9it.24xlarge

96

384

192

64

24,000,000

Yes

6,000,000

64

15

50

50

500,000/800,000

32

**Note**

-   Intel® Xeon® Granite Rapids supports only Intel SGX DCAP–based remote attestation and does not support Intel EPID–based remote attestation. You may need to adapt your program to use the remote attestation feature normally. For more information about remote attestation, see [attestation-service](https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions/attestation-services.html).
    
-   Intel SGX depends on host hardware. This instance family does not support hot migration.
    
-   Operations, such as changing instance types and enabling the economical mode, may cause the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   By default, failover is disabled. You can enable failover. For more information, see [Modify instance maintenance attributes](/help/en/ecs/user-guide/modify-instance-maintenance-attributes#task-2449646). Failover causes the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   When you create a security-enhanced instance, you must select a dedicated image to use the security features. For more information, see [Create a trusted instance](/help/en/ecs/user-guide/create-a-security-enhanced-instance#task-2038128).
    
-   The product is in invitational preview. [Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request access.
    

### r9it, security-enhanced memory-optimized instance family

-   **Introduction**
    
    -   Supports Intel® SGX encrypted computing with up to 384 GiB of encrypted memory. This protects the confidentiality and integrity of critical code and data from malware attacks.
        
    -   Supports SGX technology in virtual machine form. You can choose instance types flexibly based on your needs.
        
    -   Hyper-threading is disabled by default. Each instance is allocated dedicated physical CPU cores, reducing side-channel attack risks. The memory encryption algorithm is upgraded to AES-256.
        
        **Important**
        
        If you use keys (such as SGX sealing keys) that are bound to hardware to encrypt the data of an instance within an Intel SGX enclave, the encrypted data cannot be decrypted after the host of the instance is changed. We recommend that you perform data redundancy and backup at the application layer to ensure application reliability.
        
    -   Uses TPM/TCM chips to measure and validate the boot chain—from underlying server hardware to GuestOS—enabling trusted boot.
        
    -   Uses Alibaba Cloud’s new Cloud Infrastructure Processing Unit (CIPU) architecture. This offloads many virtualization functions to dedicated hardware, reducing virtualization overhead and delivering stable, predictable high performance.
        
-   **Scenarios**
    
    -   Workloads handling sensitive information such as personally identifiable information, healthcare data, financial data, and intellectual property.
        
    -   Secure multi-party computation where confidential data must be shared.
        
    -   Blockchain applications.
        
    -   Confidential machine learning.
        
    -   High-security, high-trust environments such as finance, government, and enterprise systems.
        
    -   Enterprise-grade applications of all types and scales.
        
-   **Compute**
    
    -   Processor-to-memory ratio is 1:8. Encrypted memory accounts for about 50% of total memory.
        
    -   Processor: Intel® Xeon® Granite Rapids, base clock speed 3.2 GHz, all-core turbo frequency 3.6 GHz. Delivers stable compute performance.
        
-   **Storage**
    
    -   I/O optimized instance.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Instance storage I/O performance scales with instance type. Higher-spec instances deliver stronger storage I/O performance. For details, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**
    
    -   Supports IPv4 and IPv6. For IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Network performance scales with instance type. Higher-spec instances deliver stronger network performance.
        

r9it includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Encrypted memory (GiB)**

**Baseline/burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**vTPM support**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.r9it.large

2

16

8

4/15

1,200,000

Yes

500,000

4

4

15

15

50,000/200,000

2.5/10

ecs.r9it.xlarge

4

32

16

6/15

1,600,000

Yes

500,000

8

4

15

15

60,000/200,000

4/10

ecs.r9it.2xlarge

8

64

32

12/25

3,000,000

Yes

500,000

16

8

30

30

100,000/200,000

6/10

ecs.r9it.4xlarge

16

128

64

20/32

6,000,000

Yes

800,000

32

8

30

30

200,000/300,000

10/12

ecs.r9it.8xlarge

32

256

128

28/36

12,000,000

Yes

2,000,000

64

8

30

30

300,000/400,000

16/24

ecs.r9it.16xlarge

64

512

256

36/50

20,000,000

Yes

4,000,000

64

15

30

30

400,000/650,000

24/28

ecs.r9it.24xlarge

96

768

384

64

24,000,000

Yes

6,000,000

64

15

50

50

500,000/800,000

32

**Note**

-   Intel® Xeon® Granite Rapids supports only Intel SGX DCAP-based remote attestation—not Intel EPID-based remote attestation. You may need to adapt your application before using remote attestation. For more information, see [attestation-service](https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions/attestation-services.html).
    
-   Intel SGX depends on host hardware. This instance family does not support hot migration.
    
-   Operations, such as changing instance types and enabling the economical mode, may cause the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   By default, failover is disabled. You can enable failover. For more information, see [Modify instance maintenance attributes](/help/en/ecs/user-guide/modify-instance-maintenance-attributes#task-2449646). Failover causes the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   When you create a security-enhanced instance, you must select a dedicated image to use the security features. For more information, see [Create a trusted instance](/help/en/ecs/user-guide/create-a-security-enhanced-instance#task-2038128).
    
-   This product is in invitational preview. To request access, or [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

### g7t, security-enhanced general-purpose instance family

-   **Introduction**:
    
    -   This instance family supports up to 256 GiB of encrypted memory and confidential computing based on Intel® Software Guard Extensions (SGX) to protect the confidentiality and integrity of essential code and data from malware attacks.
        
    -   This instance family supports Virtual SGX (vSGX) and allows you to select instance types based on your business requirements.
        
        **Important**
        
        If you use keys (such as SGX sealing keys) that are bound to hardware to encrypt the data of an instance within an Intel SGX enclave, the encrypted data cannot be decrypted after the host of the instance is changed. We recommend that you perform data redundancy and backup at the application layer to ensure application reliability.
        
    -   This instance family implements trusted boot based on Trusted Cryptography Module (TCM) or Trusted Platform Module (TPM) chips. During a trusted boot, all modules in the boot chain from the underlying server to the guest operating system are measured and verified.
        
    -   This instance family offloads a large number of virtualization features to dedicated hardware by using the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads.
        
-   **Supported scenarios**:
    
    -   Scenarios that involve sensitive information such as personal identity information, healthcare information, financial information, and intellectual property data
        
    -   Scenarios in which confidential data is shared among multiple parties
        
    -   Blockchain scenarios
        
    -   Confidential machine learning
        
    -   Scenarios that require high security and enhanced trust, such as services for financial organizations, public service sectors, and enterprises
        
    -   Enterprise-level applications of various types and sizes
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4. About 50% of memory is encrypted.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.7 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
    -   Provides high network performance based on large computing capacity.
        

g7t instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Encrypted memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Support for vTPM**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.g7t.large

2

8

4

2/burstable up to 10

900,000

Yes

Up to 250,000

2

3

6

6

20,000/burstable up to 110,000

1.5/burstable up to 6

ecs.g7t.xlarge

4

16

8

3/burstable up to 10

1,000,000

Yes

Up to 250,000

4

4

15

15

40,000/burstable up to 110,000

2/burstable up to 6

ecs.g7t.2xlarge

8

32

16

5/burstable up to 10

1,600,000

Yes

Up to 250,000

8

4

15

15

50,000/burstable up to 110,000

3/burstable up to 6

ecs.g7t.3xlarge

12

48

24

8/burstable up to 10

2,400,000

Yes

Up to 250,000

8

8

15

15

70,000/burstable up to 110,000

4/burstable up to 6

ecs.g7t.4xlarge

16

64

32

10/burstable up to 25

3,000,000

Yes

300,000

8

8

30

30

80,000/burstable up to 110,000

5/burstable up to 6

ecs.g7t.6xlarge

24

96

48

12/burstable up to 25

4,500,000

Yes

450,000

12

8

30

30

110,000/none

6/none

ecs.g7t.8xlarge

32

128

64

16/burstable up to 25

6,000,000

Yes

600,000

16

8

30

30

150,000/none

8/none

ecs.g7t.16xlarge

64

256

128

32/none

12,000,000

Yes

1,200,000

32

8

30

30

300,000/none

16/none

ecs.g7t.32xlarge

128

512

256

64/none

24,000,000

Yes

2,400,000

32

15

30

30

600,000/none

32/none

**Note**

-   Intel Ice Lake supports only remote attestation based on Intel Software Guard Extensions Data Center Attestation Primitives (Intel SGX DCAP) and does not support remote attestation based on Intel Enhanced Privacy ID (EPID). You must adapt applications before you can use the remote attestation feature. For more information about remote attestation, see [Strengthen Enclave Trust with Attestation](https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions/attestation-services.html).
    
-   Intel SGX depends on host hardware. This instance family does not support hot migration.
    
-   Operations, such as changing instance types and enabling the economical mode, may cause the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   By default, failover is disabled. You can enable failover. For more information, see [Modify instance maintenance attributes](/help/en/ecs/user-guide/modify-instance-maintenance-attributes#task-2449646). Failover causes the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   When you create a security-enhanced instance, you must select a dedicated image to use the security features. For more information, see [Create a trusted instance](/help/en/ecs/user-guide/create-a-security-enhanced-instance#task-2038128).
    
-   To use the ecs.g7t.32xlarge instance type, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

### c7t, security-enhanced compute-optimized instance family

-   **Introduction**:
    
    -   This instance family supports up to 128 GiB of encrypted memory and confidential computing based on Intel® SGX to protect the confidentiality and integrity of essential code and data from malware attacks.
        
    -   This instance family supports vSGX and allows you to select instance types based on your business requirements.
        
        **Important**
        
        If you use keys (such as SGX sealing keys) that are bound to hardware to encrypt the data of an instance within an Intel SGX enclave, the encrypted data cannot be decrypted after the host of the instance is changed. We recommend that you perform data redundancy and backup at the application layer to ensure application reliability.
        
    -   This instance family implements trusted boot based on TCM or TPM chips. During a trusted boot, all modules in the boot chain from the underlying server to the guest operating system are measured and verified.
        
    -   This instance family offloads a large number of virtualization features to dedicated hardware by using the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads.
        
-   **Supported scenarios**:
    
    -   Scenarios that involve sensitive information such as personal identity information, healthcare information, financial information, and intellectual property data
        
    -   Scenarios in which confidential data is shared among multiple parties
        
    -   Blockchain scenarios
        
    -   Confidential machine learning
        
    -   Scenarios that require high security and enhanced trust, such as services for financial organizations, public service sectors, and enterprises
        
    -   Enterprise-level applications of various types and sizes
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2. About 50% of memory is encrypted.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.7 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity.
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
    -   Provides high network performance based on large computing capacity.
        

c7t instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Encrypted memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Support for vTPM**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.c7t.large

2

4

2

2/burstable up to 10

900,000

Yes

Up to 250,000

2

3

6

6

20,000/burstable up to 110,000

1.5/burstable up to 6

ecs.c7t.xlarge

4

8

4

3/burstable up to 10

1,000,000

Yes

Up to 250,000

4

4

15

15

40,000/burstable up to 110,000

2/burstable up to 6

ecs.c7t.2xlarge

8

16

8

5/burstable up to 10

1,600,000

Yes

Up to 250,000

8

4

15

15

50,000/burstable up to 110,000

3/burstable up to 6

ecs.c7t.3xlarge

12

24

12

8/burstable up to 10

2,400,000

Yes

Up to 250,000

8

8

15

15

70,000/burstable up to 110,000

4/burstable up to 6

ecs.c7t.4xlarge

16

32

16

10/burstable up to 25

3,000,000

Yes

300,000

8

8

30

30

80,000/burstable up to 110,000

5/burstable up to 6

ecs.c7t.6xlarge

24

48

24

12/burstable up to 25

4,500,000

Yes

450,000

12

8

30

30

110,000/none

6/none

ecs.c7t.8xlarge

32

64

32

16/burstable up to 25

6,000,000

Yes

600,000

16

8

30

30

150,000/none

8/none

ecs.c7t.16xlarge

64

128

64

32/none

12,000,000

Yes

1,200,000

32

8

30

30

300,000/none

16/none

ecs.c7t.32xlarge

128

256

128

64/none

24,000,000

Yes

2,400,000

32

15

30

30

600,000/none

32/none

**Note**

-   Intel Ice Lake supports only remote attestation based on Intel Software Guard Extensions Data Center Attestation Primitives (Intel SGX DCAP) and does not support remote attestation based on Intel Enhanced Privacy ID (EPID). You must adapt applications before you can use the remote attestation feature. For more information about remote attestation, see [Strengthen Enclave Trust with Attestation](https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions/attestation-services.html).
    
-   Intel SGX depends on host hardware. This instance family does not support hot migration.
    
-   Operations, such as changing instance types and enabling the economical mode, may cause the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   By default, failover is disabled. You can enable failover. For more information, see [Modify instance maintenance attributes](/help/en/ecs/user-guide/modify-instance-maintenance-attributes#task-2449646). Failover causes the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   When you create a security-enhanced instance, you must select a dedicated image to use the security features. For more information, see [Create a trusted instance](/help/en/ecs/user-guide/create-a-security-enhanced-instance#task-2038128).
    
-   To use the ecs.c7t.32xlarge instance type, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

### r7t, security-enhanced memory-optimized instance family

-   **Introduction**:
    
    -   This instance family supports up to 512 GiB of encrypted memory and confidential computing based on Intel® SGX to protect the confidentiality and integrity of essential code and data from malware attacks.
        
    -   This instance family supports vSGX and allows you to select instance types based on your business requirements.
        
        **Important**
        
        If you use keys (such as SGX sealing keys) that are bound to hardware to encrypt the data of an instance within an Intel SGX enclave, the encrypted data cannot be decrypted after the host of the instance is changed. We recommend that you perform data redundancy and backup at the application layer to ensure application reliability.
        
    -   This instance family implements trusted boot based on TCM or TPM chips. During a trusted boot, all modules in the boot chain from the underlying server to the guest operating system are measured and verified.
        
    -   This instance family offloads a large number of virtualization features to dedicated hardware by using the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads.
        
-   **Supported scenarios**:
    
    -   Encrypted computing applications for databases
        
    -   Scenarios that involve sensitive information such as personal identity information, healthcare information, financial information, and intellectual property data
        
    -   Scenarios in which confidential data is shared among multiple parties
        
    -   Blockchain scenarios
        
    -   Confidential machine learning
        
    -   Scenarios that require high security and enhanced trust, such as services for financial organizations, public service sectors, and enterprises
        
    -   Enterprise-level applications of various types and sizes
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8. About 50% of memory is encrypted.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.7 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity.
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

r7t instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Encrypted memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Support for vTPM**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.r7t.large

2

16

8

2/burstable up to 10

900,000

Yes

Up to 250,000

2

3

6

6

20,000/burstable up to 110,000

1.5/burstable up to 6

ecs.r7t.xlarge

4

32

16

3/burstable up to 10

1,000,000

Yes

Up to 250,000

4

4

15

15

40,000/burstable up to 110,000

2/burstable up to 6

ecs.r7t.2xlarge

8

64

32

5/burstable up to 10

1,600,000

Yes

Up to 250,000

8

4

15

15

50,000/burstable up to 110,000

3/burstable up to 6

ecs.r7t.3xlarge

12

96

48

8/burstable up to 10

2,400,000

Yes

Up to 250,000

8

8

15

15

70,000/burstable up to 110,000

4/burstable up to 6

ecs.r7t.4xlarge

16

128

64

10/burstable up to 25

3,000,000

Yes

300,000

8

8

30

30

80,000/burstable up to 110,000

5/burstable up to 6

ecs.r7t.6xlarge

24

192

96

12/burstable up to 25

4,500,000

Yes

450,000

12

8

30

30

110,000/none

6/none

ecs.r7t.8xlarge

32

256

128

16/burstable up to 25

6,000,000

Yes

600,000

16

8

30

30

150,000/none

8/none

ecs.r7t.16xlarge

64

512

256

32/none

12,000,000

Yes

1,200,000

32

8

30

30

300,000/none

16/none

ecs.r7t.32xlarge

128

1,024

512

64/none

24,000,000

Yes

2,400,000

32

15

30

30

600,000/none

32/none

**Note**

-   Intel Ice Lake supports only remote attestation based on Intel Software Guard Extensions Data Center Attestation Primitives (Intel SGX DCAP) and does not support remote attestation based on Intel Enhanced Privacy ID (EPID). You must adapt applications before you can use the remote attestation feature. For more information about remote attestation, see [Strengthen Enclave Trust with Attestation](https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions/attestation-services.html).
    
-   Intel SGX depends on host hardware. This instance family does not support hot migration.
    
-   Operations, such as changing instance types and enabling the economical mode, may cause the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   By default, failover is disabled. You can enable failover. For more information, see [Modify instance maintenance attributes](/help/en/ecs/user-guide/modify-instance-maintenance-attributes#task-2449646). Failover causes the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   When you create a security-enhanced instance, you must select a dedicated image to use the security features. For more information, see [Create a trusted instance](/help/en/ecs/user-guide/create-a-security-enhanced-instance#task-2038128).
    
-   To use the ecs.r7t.32xlarge instance type, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

### g6t, security-enhanced general-purpose instance family

Features:

-   **Introduction**:
    
    -   This instance family implements trusted boot based on TCM or TPM chips. During a trusted boot, all modules in the boot chain from the underlying server to the guest operating system are measured and verified.
        
    -   This instance family supports the vTPM feature and delivers trusted capabilities at the IaaS layer based on integrity monitoring.
        
    -   This instance family offloads a large number of virtualization features to dedicated hardware by using the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
        
-   **Supported scenarios**:
    
    -   Scenarios that require high security and enhanced trust, such as services for financial organizations, public service sectors, and enterprises
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Enterprise-level applications of various types and sizes
        
    -   Websites and application servers
        
    -   Game servers
        
    -   Small and medium-sized database systems, caches, and search clusters
        
    -   Data analytics and computing
        
    -   Computing clusters and memory-intensive data processing
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

g6t instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Support for vTPM**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.g6t.large

2

8

1.2/burstable up to 10

900,000

Yes

Up to 250,000

2

3

6

1

20,000

1

ecs.g6t.xlarge

4

16

2/burstable up to 10

1,000,000

Yes

Up to 250,000

4

4

15

1

40,000

1.5

ecs.g6t.2xlarge

8

32

3/burstable up to 10

1,600,000

Yes

Up to 250,000

8

4

15

1

50,000

2

ecs.g6t.4xlarge

16

64

6/burstable up to 10

3,000,000

Yes

300,000

8

8

30

1

80,000

3

ecs.g6t.8xlarge

32

128

10/none

6,000,000

Yes

600,000

16

8

30

1

150,000

5

ecs.g6t.13xlarge

52

192

16/none

9,000,000

Yes

900,000

32

7

30

1

240,000

8

ecs.g6t.26xlarge

104

384

32/none

24,000,000

Yes

1,800,000

32

15

30

1

480,000

16

**Note**

The results for network capabilities are the maximum values obtained from single-item tests. For example, when network bandwidth is tested, no stress tests are performed on the packet forwarding rate or other network metrics.

### c6t, security-enhanced compute-optimized instance family

-   **Introduction**:
    
    -   This instance family implements trusted boots based on TPM chips. During a trusted boot, all modules in the boot chain from the underlying hardware to the guest operating system are measured and verified.
        
    -   This instance family supports integrity monitoring and provides trusted capabilities at the IaaS layer.
        
    -   This instance family offloads a large number of virtualization features to dedicated hardware by using the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
        
-   **Supported scenarios**:
    
    -   Scenarios that require high security and enhanced trust, such as services for financial organizations, public service sectors, and enterprises
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Web frontend servers
        
    -   Frontend servers of massively multiplayer online (MMO) games
        
    -   Data analytics, batch processing, and video encoding
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

c6t instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Support for vTPM**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.c6t.large

2

4

1.2/burstable up to 10

900,000

Yes

Up to 250,000

2

3

6

1

20,000

1

ecs.c6t.xlarge

4

8

2/burstable up to 10

1,000,000

Yes

Up to 250,000

4

4

15

1

40,000

1.5

ecs.c6t.2xlarge

8

16

3/burstable up to 10

1,600,000

Yes

Up to 250,000

8

4

15

1

50,000

2

ecs.c6t.4xlarge

16

32

6/burstable up to 10

3,000,000

Yes

300,000

8

8

30

1

80,000

3

ecs.c6t.8xlarge

32

64

10/none

6,000,000

Yes

600,000

16

8

30

1

150,000

5

ecs.c6t.13xlarge

52

96

16/none

9,000,000

Yes

900,000

32

7

30

1

240,000

8

ecs.c6t.26xlarge

104

192

32/none

24,000,000

Yes

1,800,000

32

15

30

1

480,000

16

**Note**

The results for network capabilities are the maximum values obtained from single-item tests. For example, when network bandwidth is tested, no stress tests are performed on the packet forwarding rate or other network metrics.

### **re8,** high-memory instance family

-   **Introduction**: This family uses the new Alibaba Cloud Cloud Infrastructure Processing Unit (CIPU) architecture to deliver stable and predictable ultra-high performance. It also uses chip-level fast path acceleration to significantly improve storage performance, network performance, and computing stability.
    
-   **Supported scenarios**: In-memory databases such as SAP HANA, high-performance databases, and other memory-intensive enterprise applications.
    
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:17. Maximum memory capacity of 16 TB.
        
    -   Processor: Intel ® Xeon ® Sapphire Rapids processors with a base clock speed of 1.9 GHz and an all-core turbo frequency of 2.9 GHz. Provides stable compute performance.
        
-   **Storage**:
    
    -   This is an I/O optimized instance.
        
    -   Supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds) , [ESSD AutoPL disk](/help/en/ecs/user-guide/essd-autopl-disks) , and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Smaller instance types support burst disk IOPS and bandwidth. The storage I/O performance of an instance depends on its instance type. Instances with higher specifications deliver better storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   Supports the Jumbo Frames feature. For more information, see [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   实例网络性能与实例规格对应，规格越高网络性能越强。
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

re8 instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Base/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**NIC Queues**

**Elastic Network Interfaces (ENIs)**

**Private IPv4 addresses per ENI**

**Base disk IOPS**

**Base disk bandwidth (Gbit/s)**

ecs.re8.30xlarge

120

2,048

32/Up to 48

7,500,000

32

15

30

150,000/Up to 300,000

12/Up to 25

ecs.re8.60xlarge

240

4,096

64

15,000,000

32

15

30

300,000

25

ecs.re8.90xlarge

360

6,144

96

22,500,000

64

15

30

400,000

36

ecs.re8.120xlarge

480

8,192

128

30,000,000

64

15

40

600,000

50

ecs.re8.180xlarge

720

12,288

192

45,000,000

64

15

40

900,000

75

ecs.re8.240xlarge

960

16,384

200

50,000,000

64

15

50

1,200,000

100

### re6p, persistent memory-optimized instance family

For answers to commonly asked questions about persistent memory-optimized instances, see [Instance FAQ](/help/en/ecs/user-guide/instance-faq/#concept-gqy-fyx-wgb).

Features:

-   **Introduction**:
    
    -   This instance family uses Intel® OptaneTM persistent memory.
        
        **Important**
        
        The reliability of data stored in persistent memory varies based on the reliability of persistent memory devices and the physical servers to which these devices are attached. Risks of single points of failure exist. To ensure the reliability of application data, we recommend that you implement data redundancy at the application layer and use cloud disks for long-term data storage.
        
    -   This instance family allows persistent memory to be used as memory or as local SSDs on instances of some instance types.
        
        **Note**
        
        For more information, see [Configure the usage mode of persistent memory](/help/en/ecs/user-guide/configure-the-usage-mode-of-persistent-memory#task-1986683).
        
    -   This instance family provides the ecs.re6p-redis.<nx>large instance types for Redis applications.
        
        **Note**
        
        ecs.re6p-redis.<nx>large instance types are exclusively provided for Redis applications. Persistent memory on instances of these instance types is used as memory by default and cannot be re-configured as local SSDs. For information about how to deploy a Redis application, see [Deploy Redis applications on instances with persistent memory](/help/en/ecs/user-guide/deploy-redis-on-persistent-memory-optimized-instances#task-1986409).
        
-   **Supported scenarios**:
    
    -   Redis and other NoSQL databases such as Cassandra and MongoDB
        
    -   Structured databases such as MySQL
        
    -   I/O-intensive applications such as e-commerce, online games, and media applications
        
    -   Search scenarios that use solutions such as Elasticsearch
        
    -   Live video streaming, instant messaging, and room-based online games that require persistent connections
        
    -   High-performance relational databases and OLTP systems
        
-   **Compute**:
    
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        

re6p instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Persistent memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.re6p.large

2

8

31.5

1/3

300,000

Up to 250,000

2

2

6

1

10,000

1

ecs.re6p.xlarge

4

16

63

1.5/5

500,000

Up to 250,000

4

3

10

1

20,000

1.5

ecs.re6p.2xlarge

8

32

126

2.5/none

800,000

Up to 250,000

8

4

20

1

25,000

2

ecs.re6p.13xlarge

52

192

756

12.5/none

3,000,000

900,000

32

7

20

1

100,000

8

ecs.re6p.26xlarge

104

384

1,512

25/none

6,000,000

1,800,000

32

15

20

1

200,000

16.4

ecs.re6p-redis.large

2

8

31.5

1/3

300,000

Up to 250,000

2

2

6

1

10,000

1

ecs.re6p-redis.xlarge

4

16

63

1.5/5

500,000

Up to 250,000

4

3

10

1

20,000

1.5

ecs.re6p-redis.2xlarge

8

32

126

2.5/none

800,000

Up to 250,000

8

4

20

1

25,000

2

ecs.re6p-redis.13xlarge

52

192

756

12.5/none

3,000,000

900,000

32

7

20

1

100,000

8

### re6, high-memory instance family

Features:

-   **Introduction**: This instance family is optimized for high-performance databases, in-memory databases, and enterprise-level memory-intensive applications.
    
-   **Supported scenarios**:
    
    -   High-performance databases and in-memory databases such as SAP HANA
        
    -   Memory-intensive applications
        
    -   Big data processing engines such as Apache Spark and Presto
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:16 (1:15 for some instance types) and up to 3 TiB of memory.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        

re6 instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.re6.4xlarge

16

256

5

1,800,000

8

7

20

1

25,000

2

ecs.re6.8xlarge

32

512

10

1,800,000

16

7

20

1

50,000

4

ecs.re6.13xlarge

52

768

10

1,800,000

16

7

20

1

50,000

4

ecs.re6.16xlarge

64

1,024

16

3,000,000

32

7

20

1

100,000

8

ecs.re6.26xlarge

104

1,536

16

3,000,000

32

7

20

1

100,000

8

ecs.re6.32xlarge

128

2,048

32

6,000,000

32

15

20

1

200,000

16

ecs.re6.52xlarge

208

3,072

32

6,000,000

32

15

20

1

200,000

16

**Note**

To use the ecs.re6.32xlarge instance type, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

### re4, high-memory instance family

-   **Introduction**:
    
    -   This instance family is optimized for high-performance databases, in-memory databases, and enterprise-level memory-intensive applications.
        
    -   The ecs.re4.20xlarge and ecs.re4.40xlarge instance types are SAP HANA-certified.
        
-   **Supported scenarios**:
    
    -   High-performance databases and in-memory databases such as SAP HANA
        
    -   Memory-intensive applications
        
    -   Big data processing engines such as Apache Spark and Presto
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:12 and up to 1,920 GiB of memory.
        
    -   Uses 2.2 GHz Intel® Xeon® E7 8880 v4 (Broadwell) processors that deliver a turbo frequency of up to 2.4 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        

re4 instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.re4.10xlarge

40

480

8

1,000,000

8

4

10

1

ecs.re4.20xlarge

80

960

15

2,000,000

16

2

10

1

ecs.re4.40xlarge

160

1,920

30

4,000,000

16

2

10

1

### re4e, high-memory instance family

To use the re4e instance family, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

-   **Introduction**: This instance family is optimized for high-performance databases, in-memory databases, and enterprise-level memory-intensive applications.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:24 and up to 3,840 GiB of memory.
        
    -   Uses 2.2 GHz Intel® Xeon® E7 8880 v4 (Broadwell) processors that deliver a turbo frequency of up to 2.4 GHz to provide consistent computing performance.
        
-   **Supported scenarios**:
    
    -   High-performance databases and in-memory databases such as SAP HANA
        
    -   Memory-intensive applications
        
    -   Big data processing engines such as Apache Spark and Presto
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        

re4e instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**Private IPv6 addresses per ENI**

ecs.re4e.40xlarge

160

3,840

30

4,500,000

16

15

10

1

## x86-based entry-level computing instance families

### **e, economy instance family**

-   **Scenarios**: Small and medium-sized websites, development and testing environments, and lightweight applications.
    
-   **Compute**:
    
    -   Supports multiple processor-to-memory ratios, including 1:1, 1:2, and 1:4.
        
    -   Processor: Intel® Xeon® Platinum scalable processor.
        
        **Note**
        
        e instances use a non-dedicated CPU scheduling mode where each vCPU is randomly assigned to an available CPU hyper-thread. Compared to enterprise-level instances, e instances prioritize resource sharing and are more cost-effective.
        
-   **Storage**:
    
    -   I/O optimized instance.
        
    -   Can be attached only with ESSD Entry disks (recommended), enterprise SSDs (ESSDs), and ESSD AutoPL disks.
        
        **Note**
        
        Due to the limitations of economy instance types, ESSDs at performance level (PL) 1, PL2, and PL3 cannot deliver their maximum performance. We recommend that you use ESSD Entry disks or PL0 ESSDs.
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Can be deployed only in virtual private clouds (VPCs).
        
    -   The network performance of an instance is proportional to its compute specifications. Larger instance types provide higher network performance.
        

The following table lists the available instance types and their performance metrics:

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Multi-Queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.e-c4m1.large

2

0.5

0.2/Up to 2

1

2

2

1

8,000/N/A

0.4/N/A

ecs.e-c2m1.large

2

1

0.2/Up to 2

1

2

2

1

8,000/N/A

0.4/N/A

ecs.e-c1m1.large

2

2.0

0.2/Up to 2

1

2

2

1

8,000/N/A

0.4/N/A

ecs.e-c1m2.large

2

4.0

0.2/Up to 2

1

2

2

1

8,000/N/A

0.4/N/A

ecs.e-c1m4.large

2

8.0

0.4/Up to 2

1

2

2

1

16,000/N/A

0.8/N/A

ecs.e-c1m2.xlarge

4

8.0

0.4/Up to 3

1

2

6

1

16,000/N/A

0.8/N/A

ecs.e-c1m4.xlarge

4

16.0

0.8/Up to 4

1

2

6

1

16,000/N/A

0.8/N/A

ecs.e-c1m2.2xlarge

8

16.0

0.8/Up to 6

2

2

6

1

16,000/N/A

0.8/N/A

ecs.e-c1m4.2xlarge

8

32.0

1.2/Up to 6

2

2

6

1

16,000/N/A

0.8/N/A

**Note**

-   The ecs.e-c4m1.large, ecs.e-c2m1.large, ecs.e-c1m1.large, ecs.e-c1m2.large, and ecs.e-c1m4.large instance types have the following limits:
    
    -   You cannot add secondary elastic network interfaces (ENIs) when you create an instance. You can add them after the instance is created.
        
    -   To attach or detach a secondary ENI, the instance must be in the Stopped state.
        
-   The ecs.e-c4m1.large and ecs.e-c2m1.large instance types are available only in the following regions: China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok), Japan (Tokyo), South Korea (Seoul), UK (London), Germany (Frankfurt), US (Virginia), and US (Silicon Valley).
    

### t6, burstable instance family

Features of t6:

-   vCPUs deliver steady baseline performance with the capability to burst, which is limited by CPU credits.
    
-   Provides a better cost-performance ratio than the previous-generation t5 family.
    
-   Compute:
    
    -   Processor: 2.5 GHz base clock speed and 3.2 GHz turbo frequency latest-generation Intel® Xeon® Cascade Lake server processors
        
    -   DDR4 memory
        
-   Storage:
    
    -   I/O optimized
        
    -   Supports Enterprise SSDs (ESSDs), ESSD AutoPL disks, standard SSDs, and ultra disks.
        
        **Important**
        
        Due to the limits of burstable instances, ESSDs at performance level (PL) 2 and PL3 cannot deliver their peak performance. We recommend that you use enterprise-grade instance types or ESSDs at lower PLs instead.
        
-   Network:
    
    -   Supports IPv4 and IPv6
        
    -   Supports only virtual private clouds (VPCs)
        
-   Use cases:
    
    -   Web application servers
        
    -   Lightweight applications and microservices
        
    -   Development, testing, and stress testing environments
        

t6 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Average baseline CPU performance**

**CPU credits/hour**

**Max CPU credit balance**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Multi-Queue**

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

2304

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

4608

0.32/up to 4

400,000

2

2

6

1

**Note**

-   This instance family does not support adding secondary elastic network interfaces (ENIs) during instance creation. You can attach one after the instance is created. For some instance types, the instance must be in the Stopped state to attach or detach a secondary ENI. These types include `ecs.t6-c1m1.large`, `ecs.t6-c1m2.large`, `ecs.t6-c1m4.large`, `ecs.t6-c2m1.large`, and `ecs.t6-c4m1.large`.
    
-   You can go to the [Instance Types Available for Each Region page](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion) to view the instance types available in each region.
    
-   For more information about metric definitions, see [Instance type metrics](/help/en/ecs/user-guide/instance-specification-naming-and-classification#ad60bb6239ts8).
    

### t5, burstable instance family

Features of t5:

-   vCPUs deliver steady baseline performance with the capability to burst, which is limited by CPU credits.
    
-   Balanced compute, memory, and network resources
    
-   Compute:
    
    -   Provides multiple processor and memory configurations.
        
    -   Processor: 2.5 GHz base clock speed Intel® Xeon® processors
        
    -   DDR4 memory
        
-   Storage: Supports only ultra disks and standard SSDs
    
-   Network:
    
    -   Supports IPv4 and IPv6
        
    -   Supports only VPCs
        
-   Use cases:
    
    -   Web application servers
        
    -   Lightweight applications and microservices
        
    -   Development, testing, and stress testing environments
        

t5 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Average baseline CPU performance**

**CPU credits/hour**

**Max CPU credit balance**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Multi-Queue**

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

1440

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

1440

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

1440

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

2880

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

2880

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

2880

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

5760

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

5760

1.2

600,000

2

2

6

1

**Note**

-   This instance family does not support adding secondary ENIs during instance creation. You can attach one after the instance is created. For some instance types, the instance must be in the Stopped state to attach or detach a secondary ENI. These types include `ecs.t5-lc2m1.nano`, `ecs.t5-c1m1.large`, `ecs.t5-c1m2.large`, `ecs.t5-c1m4.large`, `ecs.t5-lc1m1.small`, `ecs.t5-lc1m2.large`, `ecs.t5-lc1m2.small`, and `ecs.t5-lc1m4.large`.
    
-   You can go to the [Instance Types Available for Each Region page](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion) to view the instance types available in each region.
    
-   For more information about metric definitions, see [Instance type metrics](/help/en/ecs/user-guide/instance-specification-naming-and-classification#ad60bb6239ts8).
    

### v5, CPU overprovisioned instance family

Features

-   You can create v5 instances only on dedicated hosts.
-   Compute:
    -   Supports multiple CPU-to-memory ratios such as 1:1, 1:2, 1:4, and 1:8.
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
-   Storage:
    -   Is an instance family in which all instances are I/O optimized.
    -   Supports ESSDs, standard SSDs, and ultra disks.
-   Network:
    -   Supports IPv6.
-   Suits the following scenarios:
    -   Migration from offline virtualization environments to Alibaba Cloud
    -   Services that generate low, medium, or burstable CPU loads

Instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Bandwidth (Gbit/s)**

**Packet forwarding rate (Kpps)**

**NIC queues**

**ENIs**

**Private IP addresses per ENI**

ecs.v5-c1m1.large

2

2.0

2.0

300

2

2

2

ecs.v5-c1m1.xlarge

4

4.0

2.0

300

2

2

6

ecs.v5-c1m1.2xlarge

8

8.0

3.0

400

2

3

6

ecs.v5-c1m1.3xlarge

12

12.0

3.0

400

4

3

6

ecs.v5-c1m1.4xlarge

16

16.0

4.0

500

4

4

6

ecs.v5-c1m1.8xlarge

32

32.0

4.0

500

8

4

6

ecs.v5-c1m2.large

2

4.0

2.0

300

2

2

2

ecs.v5-c1m2.xlarge

4

8.0

2.0

300

2

2

6

ecs.v5-c1m2.2xlarge

8

16.0

3.0

400

2

3

6

ecs.v5-c1m2.3xlarge

12

24.0

3.0

400

4

3

6

ecs.v5-c1m2.4xlarge

16

32.0

4.0

500

4

4

6

ecs.v5-c1m2.8xlarge

32

64.0

4.0

500

8

4

6

ecs.v5-c1m4.large

2

8.0

2.0

300

2

2

2

ecs.v5-c1m4.xlarge

4

16.0

2.0

300

2

2

6

ecs.v5-c1m4.2xlarge

8

32.0

3.0

400

2

3

6

ecs.v5-c1m4.3xlarge

12

48.0

3.0

400

4

3

6

ecs.v5-c1m4.4xlarge

16

64.0

4.0

500

4

4

6

ecs.v5-c1m4.8xlarge

32

128.0

4.0

500

8

4

6

ecs.v5-c1m8.large

2

16.0

2.0

300

2

2

2

ecs.v5-c1m8.xlarge

4

32.0

2.0

300

2

2

6

ecs.v5-c1m8.2xlarge

8

64.0

3.0

400

2

3

6

ecs.v5-c1m8.3xlarge

12

96.0

3.0

400

4

3

6

ecs.v5-c1m8.4xlarge

16

128.0

4.0

500

4

4

6

ecs.v5-c1m8.8xlarge

32

256.0

4.0

500

8

4

6

**Note** For more information about these specifications, see [Instance family overview](/help/en/ecs/user-guide/overview-of-instance-families#section-e9r-xkf-z15).

### xn4, n4, mn4, and e4, previous-generation shared instance families

The xn4, n4, mn4, and e4 families provide the following features:

-   Multiple processor-to-memory ratios.
    
-   Processor: 2.5 GHz Intel® Xeon® processor.
    
-   Uses DDR4 memory.
    
-   I/O optimized instances.
    
-   Supports only IPv4.
    

**Family**

**Features**

**vCPU-to-memory ratio**

**Scenarios**

xn4

Shared basic instance

1:1

-   Frontend server for the web application
    
-   Light-load applications and microservices
    
-   Development, testing, and stress testing applications
    

n4

Shared compute-optimized instance

1:2

-   Websites and web applications
    
-   Development environments, build servers, code repositories, microservices, and test and staging environments
    
-   Lightweight enterprise applications
    

mn4

Shared general-purpose instance

1:4

-   Websites and web applications
    
-   Lightweight databases and caches
    
-   General applications and lightweight enterprise services
    

e4

Shared Memory Instances

1:8

-   Applications that require large amounts of memory
    
-   Lightweight databases and caches
    

Shared General Purpose xn4 includes the instance types and performance metrics listed in the following table:

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS) (10,000)**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

ecs.xn4.small

1

1.0

0.5

5

1

2

2

**Note**

-   You cannot add secondary ENIs when you create an instance of this family. You can add them after the instance is created. To attach or detach a secondary ENI, an ecs.xn4.small instance must be in the Stopped state.
    
-   For more information about these specifications, see the "Instance type specifications" section in [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#section-e9r-xkf-z15). Packet forwarding rates vary significantly based on business scenarios. We recommend that you perform business stress tests on instances to choose appropriate instance types.
    

Shared compute-optimized n4 includes the instance types and performance metrics that are listed in the following table.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS) (10,000)**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

ecs.n4.small

1

2.0

0.5

5

1

2

2

ecs.n4.large

2

4.0

0.5

10

1

2

2

ecs.n4.xlarge

4

8.0

0.8

15

1

2

6

ecs.n4.2xlarge

8

16.0

1.2

30

1

2

6

ecs.n4.4xlarge

16

32.0

2.5

40

1

2

6

ecs.n4.8xlarge

32

64.0

5.0

50

2

2

6

**Note**

-   You cannot add secondary ENIs when you create an instance of this family. You can add them after the instance is created. To attach or detach a secondary ENI, some instance types must be in the Stopped state. These instance types include ecs.n4.small and ecs.n4.large.
    
-   For more information about these specifications, see the "Instance type specifications" section in [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#section-e9r-xkf-z15). Packet forwarding rates vary significantly based on business scenarios. We recommend that you perform business stress tests on instances to choose appropriate instance types.
    

Shared general-purpose mn4 includes the instance types and performance metrics listed in the following table.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS) (10,000)**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

ecs.mn4.small

1

4.0

0.5

5

1

2

2

ecs.mn4.large

2

8.0

0.5

10

1

2

2

ecs.mn4.xlarge

4

16.0

0.8

15

1

2

6

ecs.mn4.2xlarge

8

32.0

1.2

30

1

2

6

ecs.mn4.4xlarge

16

64.0

2.5

40

1

8

6

ecs.mn4.8xlarge

32

128.0

5

50

2

8

6

**Note**

-   You cannot add secondary ENIs when you create an instance of this family. You can add them after the instance is created. To attach or detach a secondary ENI, some instance types must be in the Stopped state. These instance types include ecs.mn4.small and ecs.mn4.large.
    
-   For more information about these specifications, see the "Instance type specifications" section in [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#section-e9r-xkf-z15). Packet forwarding rates vary significantly based on business scenarios. We recommend that you perform business stress tests on instances to choose appropriate instance types.
    

Shared memory-optimized e4 includes the instance types and performance metrics listed in the following table:

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS) (10,000)**

**Multi-Queue**

**ENIs**

**Private IPv4 addresses per ENI**

ecs.e4.small

1

8.0

0.5

5

1

2

2

ecs.e4.large

2

16.0

0.5

10

1

2

2

ecs.e4.xlarge

4

32.0

0.8

15

1

2

6

ecs.e4.2xlarge

8

64.0

1.2

30

1

3

6

ecs.e4.4xlarge

16

128.0

2.5

40

1

8

6

**Note**

-   You cannot add secondary ENIs when you create an instance of this family. You can add them after the instance is created. To attach or detach a secondary ENI, some instance types must be in the Stopped state. These instance types include ecs.e4.small and ecs.e4.large.
    
-   For more information about these specifications, see the "Instance type specifications" section in [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#section-e9r-xkf-z15). Packet forwarding rates vary significantly based on business scenarios. We recommend that you perform business stress tests on instances to choose appropriate instance types.
    

## Arm-based enterprise-level computing instance families

### g8y, general-purpose instance family

-   **Introduction**: g8y instances are equipped with Yitian 710, a proprietary ARM-based CPU developed by Alibaba Cloud. Built on the fourth-generation SHENLONG architecture, g8y instances provide stable and predictable ultra-high performance. They also use chip-level acceleration to provide significant improvements in storage and network performance, and computing stability.
    
-   **Scenarios**: Containers, microservices, web and application servers, video encoding and decoding, high-performance computing, and CPU-based machine learning.
    
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: 2.75 GHz Yitian 710 processor that provides stable computing performance.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   For small instance types, network bandwidth is burstable.
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

The g8y instance family includes the instance types and metrics that are described in the following table.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum number of attached data disks**

**Baseline/Burst disk IOPS**

**Baseline/Burst disk bandwidth (Gbit/s)**

ecs.g8y.small

1

4

1/10

0.5 million

Up to 0.25 million

1

2

3

3

5

10,000/Up to 110,000

1/Up to 10

ecs.g8y.large

2

8

2/10

0.9 million

Up to 0.25 million

2

3

6

6

8

20,000/Up to 110,000

1.5/Up to 10

ecs.g8y.xlarge

4

16

3/10

1 million

Up to 0.25 million

4

4

15

15

8

40,000/Up to 110,000

2/Up to 10

ecs.g8y.2xlarge

8

32

5/10

1.6 million

Up to 0.25 million

8

4

15

15

16

50,000/Up to 110,000

3/Up to 10

ecs.g8y.4xlarge

16

64

10/25

3 million

0.4 million

16

8

30

30

16

80,000/Up to 110,000

5/Up to 10

ecs.g8y.8xlarge

32

128

16/25

5 million

0.75 million

32

8

30

30

16

125,000

10

ecs.g8y.16xlarge

64

256

32 / None

10 million

1.5 million

64

8

30

30

32

250,000

16

ecs.g8y.32xlarge

128

512

64 / None

20 million

3 million

64

15

30

30

32

500,000

32

**Note**

To use ecs.g8y.32xlarge, you must [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl) to request access.

### c8y, compute-optimized instance family

-   **Introduction**: This instance family uses in-house Arm-based YiTian 710 processors and the fourth-generation SHENLONG architecture to provide predictable and consistent ultra-high performance. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
    
-   **Use cases**: containers, microservices, websites, application servers, video encoding and decoding, HPC, and CPU-based machine learning.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.75 GHz YiTian 710 processors to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Offers burstable disk IOPS and burstable disk bandwidth for low-specification instances and provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports ERIs. For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   Supports the Jumbo Frames feature. For more information, see [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides burstable network bandwidth for low-specification instances.
        
    -   Provides high network performance based on large computing capacity.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

c8y instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum attached data disks**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.c8y.small

1

2

1/10

500,000

Up to 250,000

1

2

3

3

5

10,000/burstable up to 110,000

1/burstable up to 10

ecs.c8y.large

2

4

2/10

900,000

Up to 250,000

2

3

6

6

8

20,000/burstable up to 110,000

1.5/burstable up to 10

ecs.c8y.xlarge

4

8

3/10

1,000,000

Up to 250,000

4

4

15

15

8

40,000/burstable up to 110,000

2/burstable up to 10

ecs.c8y.2xlarge

8

16

5/10

1,600,000

Up to 250,000

8

4

15

15

16

50,000/burstable up to 110,000

3/burstable up to 10

ecs.c8y.4xlarge

16

32

10/25

3,000,000

400,000

16

8

30

30

16

80,000/burstable up to 110,000

5/burstable up to 10

ecs.c8y.8xlarge

32

64

16/25

5,000,000

750,000

32

8

30

30

16

125,000

10

ecs.c8y.16xlarge

64

128

32/none

10,000,000

1,500,000

64

8

30

30

32

250,000

16

ecs.c8y.32xlarge

128

256

64/none

20,000,000

3,000,000

64

15

30

30

32

500,000

32

**Note**

If you want to use the ecs.c8y.32xlarge instance type, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

### r8y, memory-optimized instance family

-   **Introduction**: This instance family uses in-house Arm-based YiTian 710 processors and the fourth-generation SHENLONG architecture to provide predictable and consistent ultra-high performance. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
    
-   **Use cases**: scenarios such as containers, microservices, websites and application servers, video encoding and decoding, high-performance computing, and CPU-based machine learning.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.75 GHz YiTian 710 processors to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [Elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSD](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports ERIs. For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   Supports the Jumbo Frames feature. For more information, see [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides burstable network bandwidth for low-specification instances.
        
    -   Provides high network performance based on large computing capacity.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

r8y instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum attached data disks**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.r8y.small

1

8

1/10

500,000

Up to 250,000

1

2

3

3

5

10,000/burstable up to 110,000

1/burstable up to 10

ecs.r8y.large

2

16

2/10

900,000

Up to 250,000

2

3

6

6

8

20,000/burstable up to 110,000

1.5/burstable up to 10

ecs.r8y.xlarge

4

32

3/10

1,000,000

Up to 250,000

4

4

15

15

8

40,000/burstable up to 110,000

2/burstable up to 10

ecs.r8y.2xlarge

8

64

5/10

1,600,000

Up to 250,000

8

4

15

15

16

50,000/burstable up to 110,000

3/burstable up to 10

ecs.r8y.4xlarge

16

128

10/25

3,000,000

400,000

16

8

30

30

16

80,000/burstable up to 110,000

5/burstable up to 10

ecs.r8y.8xlarge

32

256

16/25

5,000,000

750,000

32

8

30

30

16

125,000

10

ecs.r8y.16xlarge

64

512

32/none

10,000,000

1,500,000

64

8

30

30

32

250,000

16

ecs.r8y.32xlarge

128

1,024

64/none

20,000,000

3,000,000

64

15

30

30

32

500,000

32

**Note**

To use the ecs.r8y.32xlarge instance type, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

### g6r general-purpose instance family

-   **Introduction**: Built on the third-generation SHENLONG architecture, g6r instances provide stable and predictable ultra-high performance. They also use chip-level acceleration to provide significant improvements in storage and network performance, and computing stability.
    
-   **Scenarios**: Containers, microservices, test and development (such as DevOps), web and application servers, game servers, and CPU-based machine learning inference.
    
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: 2.8 GHz Ampere® Altra® processor that provides stable computing performance.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSD, and ultra disk. For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance.
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
    -   For small instance types, network bandwidth is burstable.
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        

The g6r instance family includes the instance types and metrics listed in the following table.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Baseline disk IOPS**

**Baseline disk bandwidth (Gbit/s)**

ecs.g6r.large

2

8

1/10

0.9 million

Up to 0.25 million

2

3

6

1

12,500

1

ecs.g6r.xlarge

4

16

1.5/10

1 million

Up to 0.25 million

4

4

15

1

20,000

1.5

ecs.g6r.2xlarge

8

32

2.5/10

1.6 million

Up to 0.25 million

8

4

15

1

30,000

2

ecs.g6r.4xlarge

16

64

5/10

2 million

0.3 million

8

8

30

1

60,000

3

ecs.g6r.8xlarge

32

128

8/10

3 million

0.6 million

16

7

30

1

75,000

4

ecs.g6r.16xlarge

64

256

16 / None

6 million

0.9 million

32

8

30

1

150,000

8

### c6r, compute-optimized instance family

-   **Introduction**: This instance family uses the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
    
-   **Use cases**:
    
    -   Containers and microservices
        
    -   Use cases where applications such as DevOps applications are developed and tested
        
    -   Websites and application servers
        
    -   CPU-based machine learning and inference
        
    -   High-performance science and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.8 GHz Ampere® Altra® processors to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSD, and ultra disk. For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides burstable network bandwidth for low-specification instances.
        
    -   Provides high network performance based on large computing capacity.
        

c6r includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.c6r.large

2

4

1/10

900,000

Up to 250,000

2

3

6

1

12,500

1

ecs.c6r.xlarge

4

8

1/10

1,000,000

Up to 250,000

4

4

15

1

20,000

1.5

ecs.c6r.2xlarge

8

16

2/10

1,600,000

Up to 250,000

8

4

15

1

30,000

2

ecs.c6r.4xlarge

16

32

5/10

2,000,000

300,000

8

8

30

1

60,000

3

ecs.c6r.8xlarge

32

64

8/10

3,000,000

600,000

16

7

30

1

75,000

4

ecs.c6r.16xlarge

64

128

16/none

6,000,000

900,000

32

8

30

1

150,000

8

## ECS Bare Metal Instance families

### ebmgn9g, GPU-accelerated compute-optimized ECS Bare Metal Instance family

**Important**

The ebmgn9g instance family is in invitational preview. To use it, you can submit a ticket.

-   **Introduction:** The ebmgn9g is the ninth-generation, full-featured, and cost-effective GPU-accelerated ECS Bare Metal instance family from Alibaba Cloud. It uses the latest CIPU 2.0 to deliver cloud services. Equipped with a high-clock-speed CPU, large-capacity memory, and new Blackwell-architecture professional GPUs, this instance family provides cost-effective GPU cloud computing for autonomous driving and embodied AI training, large language model inference, film and animation rendering, metaverse and cloud gaming services, and other GPU-accelerated workloads.
    
-   **Scenarios and key features:**
    
    -   **Autonomous driving and embodied AI:**  
        It offers 256 vCPUs. All CPU cores run at up to 4.2 GHz or higher. Paired with 2.3 TB of memory, it supports the data processing needs for autonomous driving and embodied AI training.
        
    -   **Search and recommendation:**  
        The Blackwell GPU delivers 137 TFLOPS of high-performance TF32 computing power. Each GPU is paired with 32 vCPUs and 153 GB/s of memory bandwidth, delivering an optimal configuration for search and advertising workloads.
        
    -   **Large model inference:**  
        The new-generation GPU delivers higher computing power than the eighth-generation instance family. The GPU memory bandwidth is increased to 1344 GB/s. The new support for FP4 computing significantly improves inference performance and cost efficiency. Eight GPUs are connected via PCIe Gen5, which delivers 128 GB/s of inter-GPU bandwidth and greatly improves multi-GPU parallel inference efficiency.
        
    -   **Cloud gaming, rendering, and metaverse:**  
        The CPU reaches a clock speed of up to 5 GHz, which makes it a top choice for 3D modeling. The GPU natively supports graphics capabilities and includes workstation-class graphics drivers that are certified for professional design. It fully accelerates OpenGL, making it the best choice for high-end film and animation development and computer-aided design (CAD).
        
-   **Powered by the latest CIPU 2.0 cloud processor:**
    
    The second-generation CIPU delivers higher cloud processing power and enhanced eRDMA, VPC, and EBS component performance. ECS Bare Metal instances provide direct access to physical resources. They also support workloads that require hardware-bound licenses. Containers, such as Docker, Clear Container, and Pouch, are supported.
    
-   **Compute:**
    
    -   It features new Blackwell-architecture professional GPUs:
        
        -   It supports OpenGL for professional-grade graphics processing.
            
        -   It supports common acceleration features such as RTX and TensorRT. It is newly upgraded to support FP4 and PCIe Gen5 interconnect.
            
        -   It uses a PCIe Switch interconnect. Compared with a direct CPU connection, NCCL performance is improved by 36%. For multi-GPU sharded large model inference, peak performance is improved by up to 9%.
            
    -   GPU specifications:
        
        **GPU architecture**
        
        **GPU memory**
        
        **Computing performance**
        
        **Video encode/decode capability**
        
        **Inter-GPU interconnect**
        
        **Accelerated APIs**
        
        Blackwell
        
        -   Capacity: 48 GB
            
        -   Bandwidth: 1344 GB/s
            
        
        -   TF32: 126 TFLOPS
            
        -   FP32: 52 TFLOPS
            
        -   FP16/BF16: 266 TFLOPS
            
        -   FP8/INT8: 533 TFLOPS
            
        -   FP4: 970 TFLOPS
            
        -   RT core: 196 TFLOPS
            
        
        -   3 × Video Encoder
            
        -   3 × Video Decoder
            
        
        -   PCIe Gen5 x16: 128 GB/s
            
        -   P2P supported
            
        
        Supports DX12,
        
        OpenGL 4.6, Vulkan 1.3, CUDA 12.8, OpenCL 3.0, DirectCompute
        
    -   **Processor:** It uses an AMD Turin-C (SPR) processor with a clock speed of 3.3 GHz to 5 GHz. The all-core frequency is up to 4.2 GHz.
        
-   Storage:
    
    -   This is an I/O optimized instance.
        
    -   It supports the NVMe protocol. For details, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types include [Elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   Network:
    
    -   It supports IPv4 and IPv6. For more information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   It provides ultra-high network performance of up to 30 million PPS for packet forwarding.
        
    -   It supports the Elastic RDMA Interface (ERI). In a VPC network, ERI enables RDMA passthrough acceleration and boosts bandwidth to 360 Gbit/s. You can use it for autonomous driving, embodied AI, computer vision (CV), and traditional model training.
        
        **Note**
        
        For instructions on how to use ERI, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004) .
        

ebmgn9g instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU memory**

**Baseline network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Multi-queue (primary ENI / secondary ENI)**

**Elastic Network Interface (ENI)**

**Maximum number of data disks**

**Maximum disk bandwidth (GB/s)**

ecs.ebmgn9g.64xlarge

256

2304

48 GB × 8

360 (180 × 2)

30 million

30

30

64 / 16

38

33

8

**Note**

ebmgn9g instances must boot using UEFI mode. If you use a custom image, you must ensure that the image supports UEFI boot mode and that its boot mode property is set to UEFI. For more information, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode).

### ebmgn9ge, **GPU-accelerated compute-optimized ECS Bare Metal Instance family**

**Important**

The ebmgn9ge instance family is in invitational preview. To use this instance family, submit a ticket.

-   **Introduction:** The ebmgn9ge family is the ninth-generation, full-featured, and cost-effective GPU-accelerated ECS Bare Metal Instance family from Alibaba Cloud. It uses the latest CIPU 2.0 and features high clock speed CPUs, large memory capacity, and professional graphics cards based on the new Blackwell architecture. This combination delivers cost-effective GPU acceleration for scenarios such as autonomous driving and embodied intelligence training, large language model (LLM) inference, film and animation rendering, and metaverse or cloud gaming services.
    
-   **Scenarios and features:**
    
    -   **Autonomous driving and embodied intelligence:**  
        These instances provide 256 vCPUs with all cores running at over 4.2 GHz and 2.3 TB of memory, meeting the data processing requirements for autonomous driving and embodied intelligence training.
        
    -   **Search and recommendation:**  
        The Blackwell GPUs deliver 137 TFLOPS of high-performance TF32 computing power. Each GPU is paired with 32 vCPUs and 153 GB/s of memory bandwidth, offering an optimal configuration for search and advertising services.
        
    -   **Large model inference:**
        
        The ebmgn9ge instances are designed for large language models. They provide 72 GB of GPU memory per card and a memory bandwidth of 1344 GB/s, enabling high-performance inference for LLM scenarios. With the new FP4 computing architecture and 128 GB/s of fifth-generation PCIe bandwidth, these instances support 8-card parallel inference for models with over 671 billion parameters.
        
    -   **Cloud gaming, rendering, and metaverse:**  
        The CPU achieves a high clock speed of up to 5 GHz, making it ideal for 3D modeling. The GPU natively supports graphics and includes workstation-grade drivers certified for professional design. It also supports full-featured OpenGL acceleration, making it an optimal choice for high-end film and animation development and computer-aided design (CAD).
        
-   **Uses the latest CIPU 2.0 cloud processor:**
    
    The second-generation CIPU delivers higher cloud processing power and enhanced computing capabilities for elastic Remote Direct Memory Access (eRDMA), VPC, and EBS components. ECS Bare Metal instances allow direct access to physical resources and are ideal for workloads that require hardware-bound licenses. These instances support containers such as Docker, Clear Container, and Pouch.
    
-   **Compute:**
    
    -   Uses professional graphics cards based on the new Blackwell architecture:
        
        -   Supports professional-grade OpenGL graphics processing.
            
        -   Supports common acceleration features such as RTX and TensorRT and is newly upgraded to support FP4 and PCIe Gen5 interconnect.
            
        -   Uses a PCIe Switch for interconnection. Compared to a direct CPU connection, this improves NCCL performance by 36% and boosts performance by up to 9% for multi-card sharded large model inference.
            
    -   Key GPU parameters:
        
        **GPU architecture**
        
        **GPU memory**
        
        **Compute performance**
        
        **Video encoding/decoding capability**
        
        **Inter-card connection**
        
        **Acceleration APIs**
        
        Blackwell
        
        -   Capacity: 72 GB
            
        -   Bandwidth: 1344 GB/s
            
        
        -   TF32: 126 TFLOPS
            
        -   FP32: 52 TFLOPS
            
        -   FP16/BF16: 266 TFLOPS
            
        -   FP8/INT8: 533 TFLOPS
            
        -   FP4: 970 TFLOPS
            
        -   RT core: 196 TFLOPS
            
        
        -   3 × Video Encoder
            
        -   3 × Video Decoder
            
        
        -   PCIe Gen5 x16: 128 GB/s
            
        -   Supports P2P
            
        
        Supports DX12,
        
        OpenGL 4.6, Vulkan 1.3, CUDA 12.8, OpenCL 3.0, and DirectCompute
        
    -   **Processor:** AMD Turin-C (SPR) processor with a clock speed ranging from 3.3 GHz to 5 GHz. All cores can reach up to 4.2 GHz.
        
-   Storage:
    
    -   I/O optimized instance.
        
    -   Supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [Elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   Network:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Ultra-high network performance with a packet forwarding capability of 30 million PPS.
        
    -   Supports Elastic RDMA Interface (ERI). ERI enables RDMA passthrough for accelerated interconnection within a VPC, increasing bandwidth to 360 Gbit/s. It can be used for training tasks in autonomous driving, embodied intelligence, computer vision (CV), and traditional models.
        
        **Note**
        
        For instructions on how to use ERI, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        

The following table lists the instance types and specifications for the ebmgn9ge family.

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU memory**

**Base network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Private IPv4 addresses per NIC**

**IPv6 addresses per NIC**

**Queues (primary/secondary NIC)**

**ENIs**

**Maximum number of data disks**

**Maximum disk bandwidth (GB/s)**

ecs.ebmgn9ge.64xlarge

256

2304

72 GB × 8

360 (180 × 2)

30 million

30

30

64/16

38

33

8

**Note**

Images for ebmgn9ge instance types must use the UEFI boot mode. If you use a custom image, make sure that the image supports the UEFI boot mode and that its boot mode property is set to UEFI. For more information, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode).

### ebmgn9gc, **GPU-accelerated compute-optimized ECS Bare Metal Instance family**

**Important**

The ebmgn9gc instance family is in invitational preview. To use this instance family, you must submit a ticket.

-   **Introduction:** The ebmgn9gc is a ninth-generation, cost-effective, and full-featured GPU-accelerated ECS Bare Metal instance from Alibaba Cloud. It is equipped with the latest CIPU 2.0, a high-clock-speed CPU, large-capacity memory, and professional Blackwell-architecture GPUs. This instance family provides cost-effective GPU cloud computing for workloads such as autonomous driving and embodied AI training, LLM inference, film and animation rendering, and metaverse and cloud gaming services.
    
-   **Scenarios and features:**
    
    -   **Autonomous driving and embodied AI:**  
        This instance provides 256 vCPUs with all cores running at a clock speed of up to 4.2 GHz, and 2.3 TB of memory. This configuration meets the demanding data processing requirements for autonomous driving and embodied AI training.
        
    -   **Search and recommendation:**  
        The Blackwell GPU delivers 137 TFLOPS of high-performance TF32 computing power. Each GPU is paired with 32 vCPUs and 153 GB/s of memory bandwidth, which delivers an optimal configuration for search and advertising workloads.
        
    -   **Model inference:**
        
        The ebmgn9gc instance is specifically designed for large language models, offering 72 GB of GPU memory per GPU and GPU memory bandwidth of up to 1344 GB/s. It provides high-performance inference computing power for LLM scenarios, supports the new FP4 compute architecture, and features 5th-generation PCIe bandwidth of 128 GB/s. This enables parallel inference of large models with more than 671 billion parameters across eight GPUs.
        
    -   **Cloud gaming, rendering, and metaverse:**  
        The CPU has a clock speed of up to 5 GHz, which is ideal for 3D modeling. The GPU natively supports graphics capabilities and includes workstation-class graphics drivers that are certified for professional design applications. The instance fully accelerates OpenGL, which makes it an excellent choice for high-end film and animation development and CAD design.
        
-   **Powered by the latest CIPU 2.0 cloud processor:**
    
    The second-generation CIPU delivers enhanced cloud processing capability, including improved performance for eRDMA, VPC, and EBS components. ECS Bare Metal instances provide direct access to physical hardware or support workloads that require hardware-bound licenses. The second-generation CIPU supports containers such as Docker, Clear Containers, and Pouch.
    
-   **Compute:**
    
    -   This instance uses professional GPUs based on the Blackwell architecture:
        
        -   It supports OpenGL for professional-grade graphics processing.
            
        -   It supports common acceleration features, such as RTX and TensorRT, along with FP4 and PCIe Gen5 interconnects.
            
        -   The instance uses PCIe Switch interconnects. Compared to CPU-direct connections, this improves NCCL performance by 36%. For multi-GPU sharded LLM inference, peak performance is improved by up to 9%.
            
    -   GPU specifications:
        
        **GPU architecture**
        
        **GPU memory**
        
        **Compute performance**
        
        **Video encode/decode capability**
        
        **GPU-to-GPU interconnect**
        
        **Accelerated APIs**
        
        Blackwell
        
        -   Capacity: 72 GB
            
        -   Bandwidth: 1344 GB/s
            
        
        -   TF32: 126 TFLOPS
            
        -   FP32: 52 TFLOPS
            
        -   FP16/BF16: 266 TFLOPS
            
        -   FP8/INT8: 533 TFLOPS
            
        -   FP4: 970 TFLOPS
            
        -   RT core: 196 TFLOPS
            
        
        -   3 × Video Encoder
            
        -   3 × Video Decoder
            
        
        -   PCIe Gen5 x16: 128 GB/s
            
        -   Peer-to-peer (P2P) supported
            
        
        Supports DX12,
        
        OpenGL 4.6, Vulkan 1.3, CUDA 12.8, OpenCL 3.0, and DirectCompute
        
    -   **Processor:** This instance uses an AMD Turin-C (SPR) processor with a clock speed of 3.3 GHz to 5 GHz. The all-core clock speed is up to 4.2 GHz.
        
-   Storage:
    
    -   I/O optimized instance.
        
    -   This instance supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   The supported disk types are [Elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   Network:
    
    -   This instance supports IPv4 and IPv6. For more information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   The instance provides ultra-high network performance with up to 30 million PPS for packet forwarding.
        
    -   This instance supports Elastic RDMA Interface (ERI). In a VPC, ERI enables RDMA passthrough acceleration and increases bandwidth to 360 Gbit/s. This feature is ideal for autonomous driving, embodied AI, computer vision (CV), and traditional model training.
        
        **Note**
        
        For instructions on how to use ERI, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        

The following table lists the instance types and specifications for the ebmgn9gc family.

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU memory**

**Baseline network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Multi-queue (primary ENI / secondary ENI)**

**Elastic Network Interface (ENI)**

**Maximum number of data disks**

**Maximum disk bandwidth (GB/s)**

ecs.ebmgn9gc.64xlarge

256

1536

72 GB × 8

360 (180 × 2)

30 million

30

30

64 / 16

38

33

8

**Note**

ebmgn9gc instances must boot from images that are configured for UEFI mode. If you use a custom image, you must ensure that it supports UEFI boot mode and that its boot mode property is set to UEFI. For more information, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode).

### ebmgn8v, GPU-accelerated compute-optimized ECS Bare Metal Instance family

This instance family is available only in specific regions, including regions outside China. To use the instance family, contact Alibaba Cloud sales personnel.

-   **Introduction**: This instance family is an 8th-generation GPU-accelerated compute-optimized ECS Bare Metal Instance family provided by Alibaba Cloud for AI model training and ultra-large models. Each instance of this instance family is equipped with eight GPUs.
    
-   **Use cases**:
    
    -   Multi-GPU parallel inference computing for LLMs that have more than 70 billion parameters
        
    -   Traditional AI model training and autonomous driving training, for which each GPU delivers computing power of up to 39.5 TFLOPS in the single-precision floating-point format (FP32)
        
    -   Small and medium-sized model training scenarios that leverage the NVLink connections among the eight GPUs
        
-   **Benefits and positioning**:
    
    -   **High-speed and large-capacity GPU memory**: Each GPU is equipped with 96 GB of HBM3 memory and delivers up to 4 TB/s of memory bandwidth, which greatly accelerates model training and inference.
        
    -   **High bandwidth between GPUs**: Multiple GPUs are interconnected by using 900 GB/s NVLink connections. The efficiency of multi-GPU training and inference is much higher than that of previous generations of GPU-accelerated instances.
        
    -   **Quantization of large models**: This instance family supports computing power in the 8-bit floating point format (FP8) and optimizes computing power for large-scale parameter training and inference. This significantly improves the computing speed of training and inference and reduces memory usage.
        
-   **Compute**:
    
    -   Uses the latest CIPU 1.0 processors.
        
        -   Decouples computing capabilities from storage capabilities, allowing you to flexibly select storage resources based on your business requirements, and increases inter-instance bandwidth to 160 Gbit/s for faster data transmission and processing compared with 7th-generation instance families.
            
        -   Uses the bare metal capabilities provided by CIPU processors to support peer-to-peer (P2P) communication between GPU-accelerated instances.
            
    -   Uses the 4th-generation Intel Xeon Scalable processors that deliver an all-core turbo frequency of up to 3.1 GHz and provides 192 vCPUs.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 30,000,000 pps.
        
    -   Supports ERIs to allow inter-instance RDMA-based communication in VPCs and provides up to 160 Gbit/s of bandwidth per instance, which is suitable for training tasks based on CV models and traditional models.
        
        **Note**
        
        For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        

ebmgn8v instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**NIC queues (Primary ENI/Secondary ENI)**

**ENIs**

**Maximum attached data disks**

**Maximum disk bandwidth (Gbit/s)**

ecs.ebmgn8v.48xlarge

192

1024

96GB\*8

170 (85 \* 2)

30,000,000

30

30

64

32

31

6

**Note**

The boot mode of the images that are used by instances of this instance family must be UEFI. If you want to use custom images on the instances, make sure that the images support the UEFI boot mode and the boot mode of the images is set to UEFI. For information about how to set the boot mode of a custom image, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode#589d06745c7w0).

### **ebmgn8ia, GPU-accelerated compute-optimized ECS Bare Metal Instance family**

This instance family is available only in specific regions, including regions outside China. To use the instance family, contact Alibaba Cloud sales personnel.

-   **Introduction:** The instance family is the 8th generation of accelerated computing ECS Bare Metal instances from Alibaba Cloud, designed for applications such as search, recommendation, and simulation that require a high number of vCPU resources per GPU. This family is powered by the latest NVIDIA L20 GPUs, and each instance is a single bare metal host equipped with two high-frequency CPUs and four GPUs.
    
-   **Benefits and Use cases:**
    
    -   **High clock speed**: This product is powered by two AMD EPYC™ Genoa 9T34 processors. Each processor has 64 physical cores, providing a total of 256 vCPUs with clock speeds ranging from 3.4 GHz to 3.75 GHz. This configuration significantly improves single-core CPU performance, making it ideal for CAD modeling and accelerating pre-processing for CAE simulations.
        
    -   **Sparse resource allocation**: Each GPU is paired with an average of 64 vCPUs and 384 GiB of memory, providing an average memory bandwidth of 230 GB/s. This configuration is ideal for GPU computing scenarios that require high I/O throughput, such as advertising, search, recommendations, and traditional CAE simulations. The configuration also supports certain film and television production tasks that rely on CPU rendering.
        
-   **Uses the latest CIPU 1.0 processors that provide the following benefits:**
    
    -   Decouples computing capabilities from storage capabilities, allowing you to flexibly select storage resources based on your business requirements, and Increases inter-instance bandwidth to 160 Gbit/s for faster data transmission and processing compared with previous-generation instance families.
        
    -   Uses the bare metal capabilities provided by CIPU processors to support Peripheral Component Interconnect Express (PCIe) P2P communication between GPU-accelerated instances.
        
-   **Compute:**
    
    -   With the new NVIDIA L20 Enterprise GPU:
        
        -   Support for acceleration features such as vGPU, RTX technology, and TensorRT inference engine.
            
        -   Support for 8-bit floating point precision improves computational efficiency.
            
    -   NVIDIA L20 main parameters:
        
        **GPU architecture**
        
        **GPU memory**
        
        **Computing performance**
        
        **Video codec capability**
        
        **Interconnection between cards**
        
        NVIDIA Ada Lovelace
        
        -   **Capacity:** 48 GB
            
        -   **Bandwidth:** 864 GB/s
            
        
        -   **FP64:** N/A
            
        -   **FP32:** 59.3 TFLOPS
            
        -   **FP16/BF16:** 119 TFLOPS
            
        -   **FP8/INT8:** 237 TFLOPS
            
        
        -   3 \* Video Encoder (+AV1)
            
        -   3 \* Video Decoder
            
        -   4 \* JPEG Decoder
            
        
        -   PCIe interface: PCIe Gen4 x16
            
        -   Bandwidth: 64 GB/s
            
        
    -   Processor: AMD EPYC™ Genoa 9T34, 3.4 GHz to 3.75 GHz.
        
-   **Storage:**
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Newtork:**
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 30,000,000 pps.
        
    -   Supports ERIs to allow inter-instance RDMA-based communication in VPCs and provides up to 160 Gbit/s of bandwidth per instance, which is suitable for training tasks based on CV models and traditional models.
        
        **Note**
        
        For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        

ebmgn8ia instance type

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU**

**GPUmemory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**NIC queues (Primary ENI/Secondary ENI)**

**ENIs**

**Maximum attached data disks**

**Maximum disk bandwidth (Gbit/s)**

ecs.ebmgn8ia.64xlarge

256

1536

L20 \* 4

48GB \* 4

160 (80 × 2)

30,000,000

30

30

64/16

32

31

6

**Note**

The boot mode of the images that are used by instances of this instance family must be UEFI. If you want to use custom images on the instances, make sure that the images support the UEFI boot mode and the boot mode of the images is set to UEFI. For information about how to set the boot mode of a custom image, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode#589d06745c7w0).

### **ebmgn8is, GPU-accelerated compute-optimized ECS Bare Metal Instance family**

This instance family is available only in specific regions, including regions outside China. To use the instance family, contact Alibaba Cloud sales personnel.

-   **Introduction:** ebmgn8is is the 8th generation of accelerated computing specification family (ECS Bare Metal instance family) launched by Alibaba Cloud to address the recent development of AI generation business. It uses the latest NVIDIA L20 GPU. Each instance is a bare metal host that uses eight GPU compute cards.
    
-   **Benefits and positioning:**
    
    -   **Graphic processing**: This instance family uses high-frequency 4th-generation Intel Xeon Scalable processors to deliver sufficient CPU computing power in 3D modeling scenarios and achieve smooth graphics rendering and design.
        
    -   **Inference tasks**: uses the new NVIDIA L20 GPU memory of 48 GB on a single GPU card to accelerate inference tasks. It supports the FP8 floating-point format and supports inference based on various AIGC models, especially for inference tasks that use LLM models of less than 70 MB.
        
    -   **Training tasks**: This instance family provides cost-effective computing capabilities and delivers the FP32 computing performance double that of the 7th-generation inference instances. Instances of this instance family are suitable for training FP32-based CV models and other small and medium-sized models.
        
-   **Use cases:**
    
    -   Production and rendering of special effects for animation, film, and television based on workstation-level graphics processing capabilities in scenarios in which Alibaba Cloud Marketplace GRID images are used, the GRID driver is installed, and OpenGL and Direct3D graphics capabilities are enabled
        
    -   Scenarios in which the management services provided by Container Service for Kubernetes (ACK) for containerized applications are used to support AI-generated graphic content and LLM inference tasks with up to 130 billion parameters
        
    -   Other general-purpose AI recognition, image recognition, and speech recognition scenarios
        
-   **Uses the latest CIPU 1.0 processors that provide the following benefits:**
    
    -   Decouples computing capabilities from storage capabilities, allowing you to flexibly select storage resources based on your business requirements, and Increases inter-instance bandwidth to 160 Gbit/s for faster data transmission and processing compared with previous-generation instance families.
        
    -   Uses the bare metal capabilities provided by CIPU processors to support PCIe P2P communication between GPU-accelerated instances.
        
-   **Compute:**
    
    -   With the new NVIDIA L20 Enterprise GPU:
        
        -   Support for acceleration features such as vGPU, RTX technology, and TensorRT inference engine
            
        -   Support for PCIe Switch interconnect, which achieves a 36% increase in NVIDIA Collective Communications Library (NCCL) performance compared with the CPU direct connection scheme and helps improve inference performance by up to 9% when you run LLM inference tasks on multiple GPUs in parallel
            
    -   NVIDIA L20 main parameters:
        
        **GPU architecture**
        
        **GPU memory**
        
        **Computing performance**
        
        **Video codec capability**
        
        **Interconnection between cards**
        
        NVIDIA Ada Lovelace
        
        -   **Capacity:** 48 GB
            
        -   **Bandwidth:** 864 GB/s
            
        
        -   **FP64:** N/A
            
        -   **FP32:** 59.3 TFLOPS
            
        -   **FP16/BF16:** 119 TFLOPS
            
        -   **FP8/INT8:** 237 TFLOPS
            
        
        -   3 \* Video Encoder(+AV1)
            
        -   3 \* Video Decoder
            
        -   4 \* JPEG Decoder
            
        
        -   PCIe interface: PCIe Gen4 x16
            
        -   Bandwidth: 64 GB/s
            
        
    -   Uses 3.4 GHz Intel® Xeon® Scalable processors (SPR) that deliver an all-core turbo frequency of up to 3.9 GHz.
        
-   **Storage:**
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 30,000,000 pps.
        
    -   Supports ERIs to allow inter-instance RDMA-based communication in VPCs and provides up to 160 Gbit/s of bandwidth per instance, which is suitable for training tasks based on CV models and traditional models.
        
        **Note**
        
        For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        

ebmgn8is instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**NIC queues (Primary ENI/Secondary ENI)**

**ENIs**

**Maximum attached data disks**

**Maximum disk bandwidth (Gbit/s)**

ecs.ebmgn8is.32xlarge

128

1024

L20 \* 8

48GB\*8

160 (80 × 2)

30,000,000

30

30

64/16

32

31

6

**Note**

The boot mode of the images that are used by instances of this instance family must be UEFI. If you want to use custom images on the instances, make sure that the images support the UEFI boot mode and the boot mode of the images is set to UEFI. For information about how to set the boot mode of a custom image, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode#589d06745c7w0).

### ebmgn7e, GPU-accelerated compute-optimized ECS Bare Metal Instance family

-   **Introduction**: This instance family uses the SHENLONG architecture to provide flexible and powerful software-defined compute.
    
-   **Use cases:**
    
    -   Deep learning training and development
        
    -   High-performance computing (HPC) and simulations
        
    
    **Important**
    
    When you use AI training services that feature a high communication load, such as transformer models, you must enable NVLink for GPU-to-GPU communication. Otherwise, data may be damaged due to unpredictable failures that are caused by large-scale data transmission over Peripheral Component Interconnect Express (PCIe) links. If you do not understand the topology of the communication links that are used for AI training services, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to obtain technical support.
    
-   **Compute:**
    
    -   Uses 2.9 GHz Intel® Xeon® Scalable processors that deliver an all-core turbo frequency of 3.5 GHz and supports PCIe 4.0 interfaces.
        
    
-   **Storage:**
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmgn7e instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues (Primary NIC/Secondary NIC)**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.ebmgn7e.32xlarge

128

1024

80GB \* 8

64

24,000,000

32/12

32

10

1

You must check the status of the multi-instance GPU (MIG) feature and enable or disable the MIG feature after you start an ebmgn7e instance. For information about the MIG feature, see [NVIDIA Multi-Instance GPU User Guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/index.html#supported-gpus).

The following table describes whether the MIG feature is supported by the instance types in the ebmgn7e instance family.

**Instance type**

**Support for MIG**

**Description**

ecs.ebmgn7e.32xlarge

Yes

The MIG feature is supported by ebmgn7e instances.

### ebmgn7i, GPU-accelerated compute-optimized ECS Bare Metal Instance family

-   **Introduction**: This instance family uses the SHENLONG architecture to provide flexible and powerful software-defined compute.
    
-   **Use cases:**
    
    -   Concurrent AI inference tasks that require high-performance CPUs, memory, and GPUs, such as image recognition, speech recognition, and behavior identification
        
    -   Compute-intensive graphics processing tasks that require high-performance 3D graphics virtualization capabilities, such as remote graphic design and cloud gaming
        
    -   Scenarios that require high network bandwidth and disk bandwidth, such as the creation of high-performance render farms
        
    -   Small-scale deep learning and training applications that require high network bandwidth
        
-   **Compute:**
    
    -   Uses NVIDIA A10 GPUs that have the following features:
        
        -   Innovative NVIDIA Ampere architecture
            
        -   Support for acceleration features such as vGPU, RTX technology, and TensorRT inference engine
            
    -   Uses 2.9 GHz Intel® Xeon® Scalable (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz.
        
-   **Storage:**
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmgn7i instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.ebmgn7i.32xlarge

128

768

NVIDIA A10 \* 4

24GB \* 4

64

24,000,000

32

32

10

1

### ebmgn7, GPU-accelerated compute-optimized ECS Bare Metal Instance family

-   **Introduction**: This instance family uses the SHENLONG architecture to provide flexible and powerful software-defined compute.
    
-   **Use cases:**
    
    -   Deep learning applications, such as training applications of AI algorithms used in image classification, autonomous vehicles, and speech recognition
        
    -   Scientific computing applications that require robust GPU computing capabilities, such as computational fluid dynamics, computational finance, molecular dynamics, and environmental analytics
        
-   **Compute:**
    
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors.
        
-   **Storage:**
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

ebmgn7 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.ebmgn7.26xlarge

104

768

40GB\*8

30

18,000,000

16

15

10

1

### ebmgn6e, GPU-accelerated compute-optimized ECS Bare Metal Instance family

-   **Introduction:**
    
    -   This instance family uses the SHENLONG architecture to provide flexible and powerful software-defined compute.
        
    -   This instance family uses NVIDIA V100 GPUs that each have 32 GB of GPU memory and support NVLink.
        
    -   This instance family uses NVIDIA V100 GPUs (SXM2-based) that have the following features:
        
        -   Innovative NVIDIA Volta architecture
            
        -   32 GB of HBM2 memory (900 GB/s bandwidth) per GPU
            
        -   5,120 CUDA cores per GPU
            
        -   640 Tensor cores per GPU
            
        -   Up to six NVLink connections per GPU, each of which provides a bandwidth of 25 GB/s in each direction for a total bandwidth of 300 GB/s (6 × 25 × 2 = 300)
            
-   **Use cases:**
    
    -   Deep learning applications, such as training and inference applications of AI algorithms used in image classification, autonomous vehicles, and speech recognition
        
    -   Scientific computing applications, such as computational fluid dynamics, computational finance, molecular dynamics, and environmental analytics
        
-   **Compute:**
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   **Storage:**
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

ebmgn6e instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.ebmgn6e.24xlarge

96

768

NVIDIA V100 \* 8

32GB \* 8

32

4,800,000

16

15

10

1

### ebmgn6v, GPU-accelerated compute-optimized ECS Bare Metal Instance family

-   **Introduction:**
    
    -   This instance family uses the SHENLONG architecture to provide flexible and powerful software-defined compute.
        
    -   This instance family uses NVIDIA V100 GPUs.
        
    -   This instance family uses NVIDIA V100 GPUs (SXM2-based) that have the following features:
        
        -   Innovative NVIDIA Volta architecture
            
        -   16 GB of HBM2 memory (900 GB/s bandwidth) per GPU
            
        -   5,120 CUDA cores per GPU
            
        -   640 Tensor cores per GPU
            
        -   Up to six NVLink connections per GPU, each of which provides a bandwidth of 25 GB/s in each direction for a total bandwidth of 300 GB/s (6 × 25 × 2 = 300)
            
-   **Use cases:**
    
    -   Deep learning applications, such as training and inference applications of AI algorithms used in image classification, autonomous vehicles, and speech recognition
        
    -   Scientific computing applications, such as computational fluid dynamics, computational finance, molecular dynamics, and environmental analytics
        
-   **Compute:**
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   **Storage:**
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

ebmgn6v instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.ebmgn6v.24xlarge

96

384

NVIDIA V100 \* 8

16GB \* 8

30

4,500,000

8

32

10

1

### ebmgn6i, GPU-accelerated compute-optimized ECS Bare Metal Instance family

-   **Introduction:**
    
    -   This instance family uses the SHENLONG architecture to provide flexible and powerful software-defined compute.
        
    -   This instance family uses NVIDIA T4 GPUs that have the following features:
        
        -   Innovative NVIDIA Turing architecture
            
        -   16 GB of memory (320 GB/s bandwidth) per GPU
            
        -   2,560 CUDA cores per GPU
            
        -   Up to 320 Turing Tensor cores per GPU
            
        -   Mixed-precision Tensor cores that support 65 FP16 TFLOPS, 130 INT8 TOPS, and 260 INT4 TOPS
            
-   **Use cases:**
    
    -   AI (deep learning and machine learning) inference for computer vision, voice recognition, speech synthesis, natural language processing (NLP), machine translation, and reference systems
        
    -   Real-time rendering for cloud gaming
        
    -   Real-time rendering for Augmented Reality (AR) and Virtual Reality (VR) applications
        
    -   Graphics workstations or graphics-heavy computing
        
    -   GPU-accelerated databases
        
    -   High-performance computing
        
-   **Compute:**
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   **Storage:**
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

ebmgn6i instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.ebmgn6i.24xlarge

96

384

NVIDIA T4 \* 4

16GB \* 4

30

4,500,000

8

32

10

1

### **ebmc9ae,** compute-optimized **ECS Bare Metal Instance family**

-   **Introduction**: This instance family is built on the new Alibaba Cloud Cloud CIPU architecture and is powered by the latest AMD EPYC™ Turin processors. These instances provide stable computing power, a powerful I/O engine, and chip-level security hardening.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or have licensing requirements tied to specific hardware.
        
    -   Support for third-party hypervisors to facilitate hybrid cloud and multicloud deployments.
        
    -   Containers, such as Docker, Clear Containers, and Pouch.
        
    -   Scenarios that require a high packet forwarding rate, such as live video comments and telecommunication service forwarding.
        
    -   Web frontend servers.
        
    -   Massively multiplayer online game (MMO) frontends.
        
    -   Data analytics, BatchCompute, and video encoding.
        
    -   High-performance scientific and engineering applications.
        
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:2.
        
    -   Processor: AMD EPYC™ Turin processors with a turbo frequency of up to 3.7 GHz. These processors use a physical core design to ensure stable computing performance.
        
-   **Storage**:
    
    -   You can adjust the base storage bandwidth.
        
    -   I/O optimized instance.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   You can adjust the base network bandwidth.
        
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports ERI. For instructions on how to use ERI, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        

ebmc9ae instance type

**Instance type**

**vCPU**

**Memory (GiB)**

**Base/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**NIC queues**

**Elastic Network Interfaces (ENIs)**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Base disk IOPS**

**Base/Burst disk bandwidth (Gbit/s)**

ecs.ebmc9ae.48xlarge

192

384

100/None

30,000,000

6,000,000

64

38

50

50

600,000

50/None

### ebmc9i, compute-optimized ECS Bare Metal Instance family

-   **Introduction**: This instance family uses Alibaba Cloud's new CIPU architecture with P-core (performance cores) of Intel ®Xeon ®6 processor. It provides stable computing power output, a more powerful I/O engine, and chip-level security hardening.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Web frontend servers
        
    -   Frontend servers of MMO games
        
    -   Data analytics, batch processing, and video encoding
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses Intel ®Xeon ®Granite Rapids processors, with a clock frequency of 3.2 GHz and an all-core turbo frequency of 3.6 GHz for stable computing performance.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports ESSDs and ESSD AutoPL disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        

ebmc9i instance type

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.ebmc9i.48xlarge

192

384

64/none

20,000,000

6,000,000

64 (primary ENI)/16 (secondary ENI)

32

50

50

500,000/800,000

32/none

### **ebmc8a,** compute-optimized **ECS Bare Metal Instance family**

-   **Introduction**: This instance family uses the new Alibaba Cloud CIPU architecture and AMD EPYC™ Genoa processors to provide stable computing power, a powerful I/O engine, and chip-level security hardening.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or hardware-bound licenses.
        
    -   Third-party hypervisors for hybrid cloud and multicloud deployments.
        
    -   Containers, such as Docker, Clear Container, and Pouch.
        
    -   Scenarios that require a high packet forwarding rate, such as live video comments and telecom service forwarding.
        
    -   Web frontend servers.
        
    -   Massively multiplayer online game (MMO) frontends.
        
    -   Data analytics, BatchCompute, and video encoding.
        
    -   High-performance scientific and engineering applications.
        
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:2.
        
    -   Processor: AMD EPYC™ Genoa processors with a turbo frequency of up to 3.7 GHz that provide stable computing performance.
        
-   **Storage**:
    
    -   I/O optimized instance.
        
    -   Supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk categories: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports ERI. For instructions on how to use ERI, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        

ebmc8a intance type

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Baseline/Burst disk IOPS**

**Baseline/Burst disk bandwidth (Gbit/s)**

ecs.ebmc8a.48xlarge

192

384

64/None

18,000,000

3,000,000

64

38

30

30

500,000/None

32/None

### ebmc8y, compute-optimized ECS Bare Metal Instance family

-   **Introduction**: This instance family uses the innovative CIPU architecture developed by Alibaba Cloud to provide stable computing power, a more robust I/O engine, and dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   VOD and live streaming
        
    -   Enterprise applications of various types and sizes
        
    -   Websites and application servers
        
    -   Data analytics and computing
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Uses in-house Arm-based YiTian 710 processors that deliver a clock speed of at least 2.75 GHz to provide consistent computing performance. Hyper-threading is not supported.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        

ebmc8y instance types

**Instance type**

**vCPU**

**Memory size (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.ebmc8y.32xlarge

128

256

64/none

20,000,000

3,000,000

64 (primary ENI)/32 (secondary ENI)

38

30

30

500,000/none

32/none

### ebmc8i, compute-optimized ECS Bare Metal Instance family

-   **Introduction**: This instance family uses the innovative CIPU architecture developed by Alibaba Cloud to provide stable computing power, a more robust I/O engine, and dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Web frontend servers
        
    -   Frontend servers of MMO games
        
    -   Data analytics, batch processing, and video encoding
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Uses Intel® Xeon® Emerald Rapids or Intel® Xeon® Sapphire Rapids processors that deliver a clock speed of at least 2.7 GHz and an all-core turbo frequency of 3.2 GHz to provide consistent computing performance.
        
        **Note**
        
        When you purchase an instance of this family, the system randomly assigns one of the preceding processors. You cannot manually select a processor.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   For information about operating system compatibility, see [Intel instance types and operating system compatibility](/help/en/ecs/intel-instance-specifications-and-operating-system-compatibility).
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        

ebmc8i instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.ebmc8i.48xlarge

192

512

100/none

30,000,000

4,000,000

64 (primary ENI)/16 (secondary ENI)

72

30

30

1,000,000/none

48/none

### ebmc7, compute-optimized ECS Bare Metal Instance family

-   **Introduction:**
    
    -   This instance family uses the third-generation SHENLONG architecture and fast path acceleration on chips to provide predictable and consistent ultra-high computing, storage, and network performance.
        
    -   This instance family provides dedicated hardware resources and physical isolation.
        
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Web frontend servers
        
    -   Frontend servers of MMO games
        
    -   Data analytics, batch processing, and video encoding
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.9 GHz Intel ® Xeon ® Platinum 8369B (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmc7 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmc7.32xlarge

128

256

64

24,000,000

2,400,000

32

20

20

600,000

32

### ebmc7a, compute-optimized ECS Bare Metal Instance family

-   **Introduction:**
    
    -   This instance family uses the third-generation SHENLONG architecture and fast path acceleration on chips to provide predictable and consistent ultra-high computing, storage, and network performance.
        
    -   This instance family provides dedicated hardware resources and physical isolation.
        
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Video encoding, decoding, and rendering
        
    -   Data analytics and computing
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.55 GHz AMD EPYCTM MILAN processors that deliver a single-core turbo frequency of up to 3.5 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmc7a instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmc7a.64xlarge

256

512

64

24,000,000

4,000,000

32

31

15

1

600,000

32

**Note**

-   The boot mode of the images that are used by instances of this instance family must be UEFI. If you want to use custom images on the instances, make sure that the boot mode of the images is set to UEFI. For information about how to set the boot mode of a custom image, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode#589d06745c7w0).
    
-   Ubuntu 18 and Debian 9 operating system kernels do not support AMD EPYCTM MILAN processors. Do not use Ubuntu 18 or Debian 9 images to create instances of this instance family. Instances of this instance family that are created from Ubuntu 18 or Debian 9 images cannot start.
    

### ebmc6me, compute-optimized ECS Bare Metal Instance family

-   **Introduction**: This instance family provides dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Video encoding, decoding, and rendering
        
    -   Frontend servers of MMO games
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:3.
        
    -   Uses 2.3 GHz Intel® Xeon® Gold 5218 (Cascade Lake) processors that deliver a turbo frequency of 3.9 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance with a packet forwarding rate of 6,000,000 pps.
        

ebmc6me instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmc6me.16xlarge

64

192

32

6,000,000

1,800,000

32

10

1

200,000

16

### ebmc6a, compute-optimized ECS Bare Metal Instance family

This instance family is in invitational preview. To use the instance family, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

-   **Introduction:**
    
    -   This instance family uses the third-generation SHENLONG architecture and fast path acceleration on chips to provide predictable and consistent ultra-high computing, storage, and network performance.
        
    -   This instance family provides dedicated hardware resources and physical isolation.
        
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Video encoding, decoding, and rendering
        
    -   Data analytics and computing
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.6 GHz AMD EPYCTM ROME processors that deliver a turbo frequency of 3.3 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmc6a instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmc6a.64xlarge

256

512

64

24,000,000

32

31

10

1

600,000

32

**Note**

The boot mode of the images that are used by instances of this instance family must be UEFI. If you want to use custom images on the instances, make sure that the boot mode of the images is set to UEFI. For information about how to set the boot mode of a custom image, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode#589d06745c7w0).

### ebmc6e, performance-enhanced compute-optimized ECS Bare Metal Instance family

-   **Introduction:**
    
    -   This instance family uses the third-generation SHENLONG architecture and fast path acceleration on chips to provide predictable and consistent ultra-high computing, storage, and network performance.
        
    -   This instance family provides dedicated hardware resources and physical isolation.
        
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Web frontend servers
        
    -   Frontend servers of MMO games
        
    -   Data analytics, batch processing, and video encoding
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver an all-core turbo frequency of 3.2 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmc6e instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmc6e.26xlarge

104

192

32

24,000,000

1,800,000

32

10

1

480,000

16

### ebmc6, compute-optimized ECS Bare Metal Instance family

-   **Introduction**: This instance family provides dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Video encoding, decoding, and rendering
        
    -   Frontend servers of MMO games
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver an all-core turbo frequency of 3.2 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance with a packet forwarding rate of 6,000,000 pps.
        

ebmc6 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmc6.26xlarge

104

192

32

6,000,000

1,800,000

32

20

1

200,000

16

### **ebmg9ae,** general-purpose ECS Bare Metal Instance family

-   **Introduction**: This instance family uses the new Alibaba Cloud Cloud Infrastructure Processing Unit (CIPU) architecture and the latest AMD EPYC™ Turin processors. It provides stable computing power, a powerful I/O engine, and chip-level security hardening.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or licenses that are bound to hardware.
        
    -   Compatibility with third-party hypervisors for hybrid cloud and multicloud deployments.
        
    -   Containers, such as Docker, Clear Container, and Pouch.
        
    -   Scenarios with high packet forwarding rates, such as live video comments and telecom service forwarding.
        
    -   Enterprise-grade applications of various types and sizes.
        
    -   Websites and application servers.
        
    -   Game servers.
        
    -   Small and medium-sized database systems, caches, and search clusters.
        
    -   Data analytics and computing.
        
    -   High-performance scientific and engineering applications.
        
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: AMD EPYC™ Turin processor with a turbo frequency up to 3.7 GHz. The physical core design ensures stable computing performance.
        
-   **Storage**:
    
    -   The baseline storage bandwidth is adjustable.
        
    -   I/O optimized instance.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   The baseline network bandwidth is adjustable.
        
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports Elastic RDMA Interface (ERI). For instructions on how to use ERI, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        

ebmg9ae instance type

**Instance type**

**vCPU**

**Memory (GiB)**

**Network bandwidth baseline/burst (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Baseline disk IOPS**

**Disk bandwidth baseline/burst (Gbit/s)**

ecs.ebmg9ae.48xlarge

192

768

100/None

30,000,000

6,000,000

64

38

50

50

600,000

50/None

### **ebmg9a, general-purpose ECS Bare Metal Instance family**

-   **Introduction**: This instance family is built on the Alibaba Cloud CIPU architecture and is equipped with the latest AMD EPYC™ Turin processors. These instances provide stable computing power, a powerful I/O engine, and chip-level security hardening.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or licenses that are bound to specific hardware.
        
    -   Compatible with third-party hypervisors for hybrid cloud and multicloud deployments.
        
    -   Containers, such as Docker, Clear Containers, and Pouch.
        
    -   Scenarios with a high packet forwarding rate, such as live video commenting and telecom service forwarding.
        
    -   Enterprise applications of all types and sizes.
        
    -   Websites and application servers.
        
    -   Game servers.
        
    -   Small and medium-sized database systems, caches, and search clusters.
        
    -   Data analytics and computing.
        
    -   High-performance scientific and engineering applications.
        
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: AMD EPYC™ Turin processor with a turbo frequency of up to 4.1 GHz. The physical core design ensures stable computing performance.
        
-   **Storage**:
    
    -   I/O optimized instance.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports ERI. For instructions on how to use ERI, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        

ebmg9a instance type

**Instance type**

**vCPU**

**Memory (GiB)**

**Base/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Base disk IOPS**

**Base/Burst disk bandwidth (Gbit/s)**

ecs.ebmg9a.64xlarge

256

1,152

100/None

30,000,000

6,000,000

64

38

50

50

500,000

64/none

### ebmg9i, general-purpose ECS Bare Metal Instance family

-   **Introduction**: This instance family uses Alibaba Cloud's new CIPU architecture with P-core (performance cores) of Intel ®Xeon ® 6 processor. It provides stable computing power output, a more powerful I/O engine, and chip-level security hardening.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Enterprise-grade applications of various types and sizes
        
    -   Websites and application servers
        
    -   Game servers
        
    -   Small- and medium-sized database systems, caches, and search clusters
        
    -   Data analytics and computing
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses Intel ®Xeon ®Granite Rapids processors, with a clock frequency of 3.2 GHz and an all-core turbo frequency of 3.6 GHz for stable computing performance.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports ESSDs, ESSD AutoPL disks, and Regional ESSDs. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports ERI. For instructions on how to use ERI, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        

ebmg9i instance type

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.ebmg9i.48xlarge

192

768

64/none

20,000,000

6,000,000

64 (primary ENI)/16 (secondary ENI)

32

50

50

500,000/800,000

32/none

### ebmg8y, general-purpose ECS Bare Metal Instance family

-   **Introduction**: This instance family uses the innovative CIPU architecture developed by Alibaba Cloud to provide stable computing power, a more robust I/O engine, and dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   VOD and live streaming
        
    -   Enterprise applications of various types and sizes
        
    -   Websites and application servers
        
    -   Data analytics and computing
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Uses in-house Arm-based YiTian 710 processors that deliver a clock speed of at least 2.75 GHz to provide consistent computing performance. Hyper-threading is not supported.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports ERI. For instructions on how to use ERI, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        

ebmg8y instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.ebmg8y.32xlarge

128

512

64/none

20,000,000

3,000,000

64 (primary ENI)/32 (secondary ENI)

38

30

30

500,000/none

32/none

### ebmg8i, general-purpose ECS Bare Metal Instance family

-   **Introduction**: This instance family uses the innovative CIPU architecture developed by Alibaba Cloud to provide stable computing power, a more robust I/O engine, and dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Enterprise-grade applications of various types and sizes
        
    -   Websites and application servers
        
    -   Game servers
        
    -   Small and medium-sized database systems, caches, and search clusters
        
    -   Data analytics and computing
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Uses Intel® Xeon® Emerald Rapids or Intel® Xeon® Sapphire Rapids processors that deliver a clock speed of at least 2.7 GHz and an all-core turbo frequency of 3.2 GHz to provide consistent computing performance.
        
        **Note**
        
        When you purchase an instance of this instance family, the system randomly allocates one type of the preceding processors to the instance. You cannot select a processor type for the instance.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
    -   Is compatible with specific operating systems. For more information, see [Operating system compatibility for Intel instance types](/help/en/ecs/intel-instance-specifications-and-operating-system-compatibility).
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports ERI. For instructions on how to use ERI, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        

ebmg8i instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.ebmg8i.48xlarge

192

1024

100/none

30,000,000

4,000,000

64 (primary ENI)/16 (secondary ENI)

72

30

30

1,000,000/none

48/none

### ebmg7, general-purpose ECS Bare Metal Instance family

-   **Introduction:**
    
    -   This instance family uses the third-generation SHENLONG architecture and fast path acceleration on chips to provide predictable and consistent ultra-high computing, storage, and network performance.
        
    -   This instance family provides dedicated hardware resources and physical isolation.
        
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Enterprise-level applications of various types and sizes
        
    -   Websites and application servers
        
    -   Game servers
        
    -   Small and medium-sized database systems, caches, and search clusters
        
    -   Data analytics and computing
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.9 GHz Intel® Xeon® Platinum 8369B (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmg7 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmg7.32xlarge

128

512

64

24,000,000

2,400,000

32

20

20

600,000

32

### ebmg7a, general-purpose ECS Bare Metal Instance family

-   **Introduction:**
    
    -   This instance family uses the third-generation SHENLONG architecture and fast path acceleration on chips to provide predictable and consistent ultra-high computing, storage, and network performance.
        
    -   This instance family provides dedicated hardware resources and physical isolation.
        
-   Use cases:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Computing clusters and memory-intensive data processing
        
    -   Video encoding, decoding, and rendering
        
    -   Data analytics and computing
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.55 GHz AMD EPYC™ MILAN processors that deliver a single-core turbo frequency of up to 3.5 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmg7a instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmg7a.64xlarge

256

1024

64

24,000,000

4,000,000

32

31

15

1

600,000

32

**Note**

-   The boot mode of the images that are used by instances of this instance family must be UEFI. If you want to use custom images on the instances, make sure that the boot mode of the images is set to UEFI. For information about how to set the boot mode of a custom image, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode#589d06745c7w0).
    
-   Ubuntu 18 and Debian 9 operating system kernels do not support AMD EPYCTM MILAN processors. Do not use Ubuntu 18 or Debian 9 images to create instances of this instance family. Instances of this instance family that are created from Ubuntu 18 or Debian 9 images cannot start.
    

### ebmg6a, general-purpose ECS Bare Metal Instance family

This instance family is in invitational preview. To use this instance family, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

-   **Introduction:**
    
    -   This instance family uses the third-generation SHENLONG architecture and fast path acceleration on chips to provide predictable and consistent ultra-high computing, storage, and network performance.
        
    -   This instance family provides dedicated hardware resources and physical isolation.
        
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Video encoding, decoding, and rendering
        
    -   Computing clusters and memory-intensive data processing
        
    -   Data analytics and computing
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.6 GHz AMD EPYC™ ROME processors that deliver a turbo frequency of 3.3 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmg6a instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmg6a.64xlarge

256

1024

64

24,000,000

32

31

10

1

600,000

32

**Note**

The boot mode of the images that are used by instances of this instance family must be UEFI. If you want to use custom images on the instances, make sure that the boot mode of the images is set to UEFI. For information about how to set the boot mode of a custom image, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode#589d06745c7w0).

### ebmg6e, performance-enhanced general-purpose ECS Bare Metal Instance family

Features:

-   **Introduction:**
    
    -   This instance family uses the third-generation SHENLONG architecture and fast path acceleration on chips to provide predictable and consistent ultra-high computing, storage, and network performance.
        
    -   This instance family provides dedicated hardware resources and physical isolation.
        
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Enterprise-grade applications of various types and sizes
        
    -   Websites and application servers
        
    -   Game servers
        
    -   Small and medium-sized database systems, caches, and search clusters
        
    -   Data analytics and computing
        
    -   Computing clusters and memory-intensive data processing
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver an all-core turbo frequency of 3.2 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmg6e instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmg6e.26xlarge

104

384

32

24,000,000

1,800,000

32

10

1

480,000

16

### ebmg6, general-purpose ECS Bare Metal Instance family

Features:

-   **Introduction**: This instance family provides dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Video encoding, decoding, and rendering
        
    -   Enterprise-level applications such as large and medium-sized databases
        
    -   Computing clusters and memory-intensive data processing
        
    -   Data analytics and computing
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver an all-core turbo frequency of 3.2 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance with a packet forwarding rate of 6,000,000 pps.
        

ebmg6 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmg6.26xlarge

104

384

32

6,000,000

1,800,000

32

20

1

200,000

16

**Note**

The CPU monitoring information about ECS bare metal instances cannot be obtained. To obtain the CPU monitoring information about an ECS bare metal instance, install the CloudMonitor agent on the instance. For more information, see [Install CloudMonitor](/help/en/cms/cloudmonitor-1-0/user-guide/install-and-uninstall-the-cloudmonitor-agent-for-cpp).

### **ebmr9ae, memory-optimized ECS Bare Metal Instance family**

-   **Introduction**: This family uses the new Alibaba Cloud CIPU architecture and the latest AMD EPYC™ Turin processors. It provides stable computing power, a powerful I/O engine, and chip-level security hardening.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or licensing that is bound to hardware.
        
    -   Third-party hypervisors for hybrid cloud and multicloud deployments.
        
    -   Containers, such as Docker, Clear Containers, and Pouch.
        
    -   High-performance databases and in-memory databases.
        
    -   Data analytics, data mining, and distributed in-memory caches.
        
    -   Hadoop and Spark clusters, and other enterprise applications that require large amounts of memory.
        
    -   High-performance scientific and engineering applications.
        
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:8.
        
    -   Processor: AMD EPYC™ Turin processors with a turbo frequency of up to 3.7 GHz. These instances use physical cores to ensure stable computing performance.
        
-   **Storage**:
    
    -   Baseline storage bandwidth is adjustable.
        
    -   I/O optimized instance.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Baseline network bandwidth is adjustable.
        
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports ERI. For instructions on how to use ERI, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        

ebmr9ae instance type

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**NIC queues**

**Elastic Network Interfaces (ENIs)**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Baseline disk IOPS**

**Baseline/Burst disk bandwidth (Gbit/s)**

ecs.ebmr9ae.48xlarge

192

1536

100/None

30,000,000

6,000,000

64

38

50

50

600,000

50/None

### ebmr9i, memory-optimized ECS Bare Metal Instance family

-   **Introduction**: This instance family uses Alibaba Cloud's new CIPU architecture with P-core (performance cores) of Intel ®Xeon ®6 processor. It provides stable computing power output, a more powerful I/O engine, and chip-level security hardening.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   High-performance databases and in-memory databases
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses Intel ®Xeon ®Granite Rapids processors, with a clock frequency of 3.2 GHz and an all-core turbo frequency of 3.6 GHz for stable computing performance.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports ESSDs, ESSD AutoPL disks, and Regional ESSDs. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        

ebmr9i instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.ebmr9i.48xlarge

192

1536

64/none

20,000,000

6,000,000

64 (primary ENI)/16 (secondary ENI)

32

50

50

500,000/800,000

32/none

### **ebmr8a, memory-optimized ECS Bare Metal Instance family**

-   **Introduction**: This instance family uses Alibaba Cloud's new CIPU architecture and is equipped with AMD EPYC™ Genoa processors. It delivers stable computing power, a powerful I/O engine, and chip-level security hardening.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or licenses bound to specific hardware.
        
    -   Compatible with third-party hypervisors for hybrid cloud and multicloud deployments.
        
    -   Containers, such as Docker, Clear Container, and Pouch.
        
    -   High-performance databases and in-memory databases.
        
    -   Data analytics, data mining, and distributed in-memory caches.
        
    -   Hadoop and Spark clusters, and other enterprise applications that require large amounts of memory.
        
    -   High-performance scientific and engineering applications.
        
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:8.
        
    -   Processor: AMD EPYC™ Genoa processor with a maximum turbo frequency of 3.7 GHz.
        
-   **Storage**:
    
    -   I/O optimized instance.
        
    -   Supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports ERI. For instructions on how to use ERI, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        

The ebmr8a instance type

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Baseline/Burst disk IOPS**

**Baseline/Burst disk bandwidth (Gbit/s)**

ecs.ebmr8a.48xlarge

192

1,536

64/None

18,000,000

3,000,000

64

38

30

30

500,000/None

32/None

### ebmr8y, memory-optimized ECS Bare Metal Instance family

**Note**

To use the ebmr8y instance family, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

-   **Introduction**: This instance family uses the innovative CIPU architecture developed by Alibaba Cloud to provide stable computing power, a more robust I/O engine, and dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   VOD and live streaming
        
    -   Enterprise applications of various types and sizes
        
    -   Websites and application servers
        
    -   Data analytics and computing
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Uses in-house Arm-based YiTian 710 processors that deliver a clock speed of at least 2.75 GHz to provide consistent computing performance. Hyper-threading is not supported.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        

ebmr8y instance types

**Instance type**

**vCPU**

**Memory size (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.ebmr8y.32xlarge

128

1024

64/none

20,000,000

3,000,000

64 (primary ENI)/32 (secondary ENI)

38

30

30

500,000/none

32/none

### ebmr7, memory-optimized ECS Bare Metal Instance family

-   **Introduction:**
    
    -   This instance family uses the third-generation SHENLONG architecture and fast path acceleration on chips to provide predictable and consistent ultra-high computing, storage, and network performance.
        
    -   This instance family provides dedicated hardware resources and physical isolation.
        
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   High-performance databases and in-memory databases
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.9 GHz Intel ® Xeon ® Platinum 8369B (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmr7 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmr7.32xlarge

128

1024

64

24,000,000

2,400,000

32

20

20

600,000

32

### ebmr7a, memory-optimized ECS Bare Metal Instance family

-   **Introduction:**
    
    -   This instance family uses the third-generation SHENLONG architecture and fast path acceleration on chips to provide predictable and consistent ultra-high computing, storage, and network performance.
        
    -   This instance family provides dedicated hardware resources and physical isolation.
        
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   In-memory databases
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.55 GHz AMD EPYCTM MILAN processors that deliver a single-core turbo frequency of up to 3.5 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmr7a instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmr7a.64xlarge

256

2048

64

24,000,000

4,000,000

32

31

15

1

600,000

32

**Note**

-   The boot mode of the images that are used by instances of this instance family must be UEFI. If you want to use custom images on the instances, make sure that the boot mode of the images is set to UEFI. For information about how to set the boot mode of a custom image, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode#589d06745c7w0).
    
-   Ubuntu 18 and Debian 9 operating system kernels do not support AMD EPYCTM MILAN processors. Do not use Ubuntu 18 or Debian 9 images to create instances of this instance family. Instances of this instance family that are created from Ubuntu 18 or Debian 9 images cannot start.
    

### ebmr6a, memory-optimized ECS Bare Metal Instance family

This instance family is in invitational preview. To use the instance family, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

-   **Introduction:**
    
    -   This instance family uses the third-generation SHENLONG architecture and fast path acceleration on chips to provide predictable and consistent ultra-high computing, storage, and network performance.
        
    -   This instance family provides dedicated hardware resources and physical isolation.
        
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   In-memory databases
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.6 GHz AMD EPYCTM ROME processors that deliver a turbo frequency of 3.3 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmr6a instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmr6a.64xlarge

256

2048

64

24,000,000

32

31

10

1

600,000

32

**Note**

The boot mode of the images that are used by instances of this instance family must be UEFI. If you want to use custom images on the instances, make sure that the boot mode of the images is set to UEFI. For information about how to set the boot mode of a custom image, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode#589d06745c7w0).

### ebmr6e, performance-enhanced memory-optimized ECS Bare Metal Instance family

-   **Introduction:**
    
    -   This instance family uses the third-generation SHENLONG architecture and fast path acceleration on chips to provide predictable and consistent ultra-high computing, storage, and network performance.
        
    -   This instance family provides dedicated hardware resources and physical isolation.
        
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   High-performance databases and in-memory databases
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver an all-core turbo frequency of 3.2 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds) and [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmr6e instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmr6e.26xlarge

104

768

32

24,000,000

1,800,000

32

10

1

480,000

16

### ebmr6, memory-optimized ECS Bare Metal Instance family

-   **Introduction**: This instance family provides dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   High-performance databases and in-memory databases
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver an all-core turbo frequency of 3.2 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance with a packet forwarding rate of 6,000,000 pps.
        

ebmr6 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmr6.26xlarge

104

768

32

6,000,000

1,800,000

32

20

1

200,000

16

### ebmre6p, persistent memory-optimized ECS Bare Metal Instance family

To use the ebmre6p instance family, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

-   **Introduction**: This instance family provides dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   In-memory databases such as Redis
        
    -   High-performance databases such as SAP HANA
        
    -   Other memory-intensive applications such as AI applications and smart search applications
        
-   **Compute**:
    
    -   Uses the Intel® OptaneTM persistent memory and is tuned for Redis applications in an end-to-end manner to provide cost-effectiveness.
        
    -   Supports a total memory capacity of up to 1,920 GiB (384 GiB of DRAM + 1,536 GiB of Intel® OptaneTM persistent memory), offers a CPU-to-memory ratio of 1:20, and can meet the needs of memory-intensive applications.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver an all-core turbo frequency of 3.2 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance with a packet forwarding rate of 6,000,000 pps.
        

ebmre6p instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Persistent memory size (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmre6p.26xlarge

104

384

1536

32

6,000,000

31

10

1

200,000

16

### ebmre6-6t, performance-enhanced memory-optimized ECS Bare Metal Instance family

To use the ebmre6-6t instance family, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

-   **Introduction**: This instance family provides dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   In-memory databases and high-performance databases such as SAP HANA
        
    -   Memory-intensive applications
        
    -   Big data processing engines such as Apache Spark and Presto
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:30.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269 (Cascade Lake) processors that deliver an all-core turbo frequency of 3.2 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance with a packet forwarding rate of 6,000,000 pps.
        

ebmre6-6t instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmre6-6t.52xlarge

208

6144

32

6,000,000

1,800,000

32

10

1

200,000

16

### ebmhfg7, general-purpose ECS Bare Metal Instance family with high clock speeds

-   **Introduction:**
    
    -   This instance family uses the third-generation SHENLONG architecture and fast path acceleration on chips to provide predictable and consistent ultra-high computing, storage, and network performance.
        
    -   This instance family provides dedicated hardware resources and physical isolation.
        
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Enterprise-grade applications of various types and sizes
        
    -   Game servers
        
    -   Small and medium-sized database systems, caches, and search clusters
        
    -   High-performance scientific computing
        
    -   Video encoding applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses third-generation Intel® Xeon® Scalable (Cooper Lake) processors that deliver a base frequency of at least 3.3 GHz and an all-core turbo frequency of 3.8 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disk](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmhfg7 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmhfg7.48xlarge

192

768

64

24,000,000

32

31

10

1

600,000

32

### ebmhfc7, compute-optimized ECS Bare Metal Instance family with high clock speeds

-   **Introduction:**
    
    -   This instance family uses the third-generation SHENLONG architecture and fast path acceleration on chips to provide predictable and consistent ultra-high computing, storage, and network performance.
        
    -   This instance family provides dedicated hardware resources and physical isolation.
        
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   High-performance frontend server clusters
        
    -   Frontend servers of MMO games
        
    -   Data analytics, batch processing, and video encoding
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses third-generation Intel® Xeon® Scalable (Cooper Lake) processors that deliver a base frequency of at least 3.3 GHz and an all-core turbo frequency of 3.8 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmhfc7 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmhfc7.48xlarge

192

384

64

24,000,000

32

31

10

1

600,000

32

### ebmhfr7, memory-optimized ECS Bare Metal Instance family with high clock speeds

-   **Introduction:**
    
    -   This instance family uses the third-generation SHENLONG architecture and fast path acceleration on chips to provide predictable and consistent ultra-high computing, storage, and network performance.
        
    -   This instance family provides dedicated hardware resources and physical isolation.
        
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   High-performance databases and in-memory databases
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses third-generation Intel® Xeon® Scalable (Cooper Lake) processors that deliver a base frequency of at least 3.3 GHz and an all-core turbo frequency of 3.8 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmhfr7 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmhfr7.48xlarge

192

1536

64

24,000,000

32

31

10

1

600,000

32

### ebmhfg6, general-purpose ECS Bare Metal Instance family with high clock speeds

-   **Introduction**: This instance family provides dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Enterprise-level applications such as large and medium-sized databases
        
    -   Video encoding, decoding, and rendering
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.8.
        
    -   Uses 3.1 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver an all-core turbo frequency of 3.5 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance with a packet forwarding rate of 6,000,000 pps.
        

ebmhfg6 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmhfg6.20xlarge

80

384

32

6,000,000

1,800,000

32

20

1

200,000

16

### ebmhfc6, compute-optimized ECS Bare Metal Instance family with high clock speeds

-   **Introduction**: This instance family provides dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Video encoding, decoding, and rendering
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.4.
        
    -   Uses 3.1 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver an all-core turbo frequency of 3.5 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance with a packet forwarding rate of 6,000,000 pps.
        

ebmhfc6 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmhfc6.20xlarge

80

192

32

6,000,000

1,800,000

32

20

1

200,000

16

### ebmhfr6, memory-optimized ECS Bare Metal Instance family with high clock speeds

-   **Introduction**: This instance family provides dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   High-performance databases and in-memory databases
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:9.6.
        
    -   Uses 3.1 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver an all-core turbo frequency of 3.5 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance with a packet forwarding rate of 6,000,000 pps.
        

ebmhfr6 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmhfr6.20xlarge

80

768

32

6,000,000

1,800,000

32

20

1

200,000

16

## High-performance computing and SCC instance families

### sccg7, general-purpose SCC instance family

-   **Introduction**: This instance family provides all features of ECS Bare Metal Instance. For more information, see [Overview of ECS Bare Metal Instance families](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#concept-lnh-hv2-5db).
    
-   **Supported scenarios**:
    
    -   Large-scale machine learning training
        
    -   Large-scale high-performance scientific computing and simulations
        
    -   Large-scale data analytics, batch processing, and video encoding
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.9 GHz Intel® Xeon® Platinum 8369 (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports both RoCE networks and VPCs. RoCE networks are dedicated to RDMA communication.
        

sccg7 instance types

**Instance type**

**vCPUs**

**Physical cores**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**RoCE network bandwidth (Gbit/s)**

**ENIs**

ecs.sccg7.32xlarge

128

64

512.0

100

24,000,000

200

32

### sccc7, compute-optimized SCC instance family

-   **Introduction**: This instance family provides all features of ECS Bare Metal Instance. For more information, see [Overview of ECS Bare Metal Instance families](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#concept-lnh-hv2-5db).
    
-   **Supported scenarios**:
    
    -   Large-scale machine learning training
        
    -   Large-scale high-performance scientific computing and simulations
        
    -   Large-scale data analytics, batch processing, and video encoding
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.9 GHz Intel® Xeon® Platinum 8369 (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSD, and ultra disk. For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        

-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports both RoCE networks and VPCs. RoCE networks are dedicated to RDMA communication.
        

sccc7 instance types

**Instance type**

**vCPUs**

**Physical cores**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**RoCE network bandwidth (Gbit/s)**

**ENIs**

ecs.sccc7.32xlarge

128

64

256.0

100

24,000,000

200

32

### ebmc5s, network-enhanced compute-optimized ECS Bare Metal Instance family

-   **Introduction**: This instance family provides dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Video encoding, decoding, and rendering
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors that deliver an all-core turbo frequency of 2.7 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance with a packet forwarding rate of 4,500,000 pps.
        

ebmc5s instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmc5s.24xlarge

96

192

32

4,500,000

1,800,000

32

10

1

200,000

16

### ebmg5s, network-enhanced general-purpose ECS Bare Metal Instance family

-   **Introduction**: This instance family provides dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Enterprise-level applications such as large and medium-sized databases
        
    -   Video encoding
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors that deliver an all-core turbo frequency of 2.7 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance with a packet forwarding rate of 4,500,000 pps.
        

ebmg5s instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmg5s.24xlarge

96

384

32

4,500,000

1,800,000

32

10

1

200,000

16

### ebmr5s, network-enhanced memory-optimized ECS Bare Metal Instance family

-   **Introduction**: This instance family provides dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   High-performance databases and in-memory databases
        
    -   Data analytics, data mining, and distributed memory caching
        
    -   Enterprise-level memory-intensive applications such as Hadoop clusters and Spark clusters
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors that deliver an all-core turbo frequency of 2.7 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports only IPv4.
        
    -   Provides high network performance with a packet forwarding rate of 4,500,000 pps.
        

ebmr5s instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**ENIs**

**Private IPv4 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.ebmr5s.24xlarge

96

768

32

4,500,000

1,800,000

32

10

200,000

16

### ebmg5, general-purpose ECS Bare Metal Instance family

-   **Introduction**: This instance family provides dedicated hardware resources and physical isolation.
    
-   **Use cases**:
    
    -   Workloads that require direct access to physical resources or that require a license to be bound to the hardware
        
    -   Scenarios that require compatibility with third-party hypervisors to implement hybrid-cloud and multi-cloud deployments
        
    -   Containers such as Docker, Clear Containers, and Pouch
        
    -   Enterprise-level applications such as large and medium-sized databases
        
    -   Video encoding
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors that deliver an all-core turbo frequency of 2.7 GHz.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   Supports standard SSDs and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports only IPv4.
        
    -   Provides high network performance with a packet forwarding rate of 4,000,000 pps.
        

ebmg5 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**ENIs**

**Private IPv4 addresses per ENI**

ecs.ebmg5.24xlarge

96

384

10

4.5 million

32

10

## Heterogeneous computing instance families

### **sgn8ia,** vGPU-accelerated instance family

-   **Introduction:**
    
    -   Powered by the third-generation SHENLONG architecture to provide stable and predictable high performance. Chip-level acceleration significantly improves storage performance, network performance, and computing stability. This lets you store data and load models faster.
        
    -   Includes the NVIDIA GRID Virtual Workstation (vWS) software license. This provides certified graphics acceleration for various professional computer-aided design (CAD) applications to meet professional graphic design requirements. The instances can also be used as lightweight GPU-accelerated compute-optimized instances to reduce the costs of small-scale AI reasoning.
        
-   **Use cases:**
    
    -   Concurrent AI reasoning tasks that require high-performance CPUs, memory, and GPUs, such as image recognition, speech recognition, and behavior identification
        
    -   Compute-intensive graphics processing tasks that require high-performance 3D graphics virtualization capabilities, such as remote graphic design and cloud gaming
        
    -   3D modeling in fields that require the use of AMD Genoa processors with high clock speeds, such as animation and film production, cloud gaming, and mechanical design
        
-   **Compute:**
    
    -   Uses NVIDIA Lovelace GPUs that have the following features:
        
        -   Large GPU memory and multiple GPU slicing solutions
            
        -   Support for acceleration features, such as vGPU, RTX, and TensorRT, to provide diversified business support
            
    -   Uses AMD Genoa processors that deliver a clock speed of 3.4 GHz to 3.75 GHz to provide high computing power for 3D modeling.
        
-   **Storage:**
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk categories: [enterprise SSD (ESSD)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disk](/help/en/ecs/user-guide/essd-autopl-disks), and [regional Enterprise SSD (ESSD)](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Block storage overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   Supports IPv4 and IPv6. For more information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   The larger the instance specification is, the higher network performance it has.
        

sgn8ia instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4/IPv6 addresses per ENI**

**Maximum disks**

**Disk baseline IOPS**

**Disk baseline BPS (MB/s)**

ecs.sgn8ia-m2.xlarge

4

16

2 GB

2.5

1,000,000

4

4

15/15

9

30,000

244

ecs.sgn8ia-m4.2xlarge

8

32

4 GB

4

1,600,000

8

4

15/15

9

45,000

305

ecs.sgn8ia-m8.4xlarge

16

64

8 GB

7

2,000,000

16

8

30/30

17

60,000

427

ecs.sgn8ia-m16.8xlarge

32

128

16 GB

10

3,000,000

32

8

30/30

33

80,000

610

ecs.sgn8ia-m24.12xlarge

48

192

24 GB

16

4,500,000

48

8

30/30

33

120,000

1000

ecs.sgn8ia-m48.24xlarge

96

384

48 GB

32

9,000,000

64

15

30/30

33

240,000

2000

**Note**

-   The columns related to GPUs in the preceding table are for vGPUs that are sliced by using the vGPU slicing technology.
    
-   The memory and GPU memory of an sgn8ia instance are exclusive to the instance. The CPUs of the instance are shared resources with an overcommit ratio of approximately 1:1.5. If you have special requirements for the CPU computing power, we recommend that you use GPU-accelerated dedicated instance families, such as gn7i GPU-accelerated compute-optimized instances.
    

### sgn7i-vws, vGPU-accelerated instance family with shared CPUs

-   **Introduction**:
    
    -   This instance family uses the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude. This way, data storage and model loading can be performed more quickly.
        
    -   Instances of this instance family share CPU and network resources to maximize the utilization of underlying resources. Each instance has exclusive access to its memory and GPU memory to provide data isolation and performance assurance.
        
        **Note**
        
        If you want to use exclusive CPU resources, select the vgn7i-vws instance family.
        
    -   This instance family comes with an NVIDIA GRID vWS license and provides certified graphics acceleration capabilities for CAD software to meet the requirements of professional graphic design. Instances of this instance family can serve as lightweight GPU-accelerated compute-optimized instances to reduce the costs of small-scale AI inference tasks.
        
-   **Use cases**:
    
    -   Concurrent AI inference tasks that require high-performance CPUs, memory, and GPUs, such as image recognition, speech recognition, and behavior identification
        
    -   Compute-intensive graphics processing tasks that require high-performance 3D graphics virtualization capabilities, such as remote graphic design and cloud gaming
        
    -   3D modeling in fields that require the use of Ice Lake processors, such as animation and film production, cloud gaming, and mechanical design
        
-   **Compute**:
    
    -   Uses NVIDIA A10 GPUs that have the following features:
        
        -   Innovative NVIDIA Ampere architecture
            
        -   Support for acceleration features, such as vGPU, RTX, and TensorRT, to provide diversified business support
            
    -   Uses 2.9 GHz Intel® Xeon® Scalable (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

sgn7i-vws includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPUs**

**GPU memory**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.sgn7i-vws-m2.xlarge

4

15.5

NVIDIA A10 × 1/12

24 GB × 1/12

1.5/5

500,000

4

2

2

1

ecs.sgn7i-vws-m4.2xlarge

8

31

NVIDIA A10 × 1/6

24 GB × 1/6

2.6/10

1,000,000

4

4

6

1

ecs.sgn7i-vws-m8.4xlarge

16

62

NVIDIA A10 × 1/3

24 GB × 1/3

5/20

2,000,000

8

4

10

1

ecs.sgn7i-vws-m2s.xlarge

4

8

NVIDIA A10 × 1/12

24 GB × 1/12

1.5/5

500,000

4

2

2

1

ecs.sgn7i-vws-m4s.2xlarge

8

16

NVIDIA A10 × 1/6

24 GB × 1/6

2.6/10

1,000,000

4

4

6

1

ecs.sgn7i-vws-m8s.4xlarge

16

32

NVIDIA A10 × 1/3

24 GB × 1/3

5/20

2,000,000

8

4

10

1

**Note**

The **GPU** column in the preceding table indicates the GPU model and GPU slicing information for each instance type. Each GPU can be sliced into multiple GPU partitions, and each GPU partition can be allocated as a vGPU to an instance. Example:

`NVIDIA A10 * 1/12`. `NVIDIA A10` is the GPU model. `1/12` indicates that a GPU is sliced into 12 GPU partitions, and each GPU partition can be allocated as a vGPU to an instance.

### vgn7i-vws, vGPU-accelerated instance family

-   **Introduction**:
    
    -   This instance family uses the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude. This way, data storage and model loading can be performed more quickly.
        
    -   This instance family comes with an NVIDIA GRID vWS license and provides certified graphics acceleration capabilities for CAD software to meet the requirements of professional graphic design. Instances of this instance family can serve as lightweight GPU-accelerated compute-optimized instances to reduce the costs of small-scale AI inference tasks.
        
-   **Use cases**:
    
    -   Concurrent AI inference tasks that require high-performance CPUs, memory, and GPUs, such as image recognition, speech recognition, and behavior identification
        
    -   Compute-intensive graphics processing tasks that require high-performance 3D graphics virtualization capabilities, such as remote graphic design and cloud gaming
        
    -   3D modeling in fields that require the use of Ice Lake processors, such as animation and film production, cloud gaming, and mechanical design
        
-   **Compute**:
    
    -   Uses NVIDIA A10 GPUs that have the following features:
        
        -   Innovative NVIDIA Ampere architecture
            
        -   Support for acceleration features, such as vGPU, RTX, and TensorRT, to provide diversified business support
            
    -   Uses 2.9 GHz Intel® Xeon® Scalable (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

vgn7i-vws includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPUs**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.vgn7i-vws-m4.xlarge

4

30

NVIDIA A10 × 1/6

24 GB × 1/6

3

1,000,000

4

4

10

1

ecs.vgn7i-vws-m8.2xlarge

10

62

NVIDIA A10 × 1/3

24 GB × 1/3

5

2,000,000

8

6

10

1

ecs.vgn7i-vws-m12.3xlarge

14

93

NVIDIA A10 × 1/2

24 GB × 1/2

8

3,000,000

8

6

15

1

ecs.vgn7i-vws-m24.7xlarge

30

186

NVIDIA A10 × 1

24 GB × 1

16

6,000,000

12

8

30

1

**Note**

The **GPU** column in the preceding table indicates the GPU model and GPU slicing information for each instance type. Each GPU can be sliced into multiple GPU partitions, and each GPU partition can be allocated as a vGPU to an instance. Example:

`NVIDIA A10 * 1/6`. `NVIDIA A10` is the GPU model. `1/6` indicates that a GPU is sliced into six GPU partitions, and each GPU partition can be allocated as a vGPU to an instance.

### vgn6i-vws, vGPU-accelerated instance family

**Important**

-   In light of the NVIDIA GRID driver upgrade, Alibaba Cloud upgrades the vgn6i instance family to the vgn6i-vws instance family. The vgn6i-vws instance family uses the latest NVIDIA GRID driver and provides an NVIDIA GRID vWS license. To apply for free images for which the NVIDIA GRID driver is pre-installed, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    
-   To use other public images or custom images that do not contain an NVIDIA GRID driver, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to apply for the GRID driver file and install the NVIDIA GRID driver. Alibaba Cloud does not charge additional license fees for the GRID driver.
    

-   **Use cases**:
    
    -   Real-time rendering for cloud gaming
        
    -   Real-time rendering for Augmented Reality (AR) and Virtual Reality (VR) applications
        
    -   AI (deep learning and machine learning) inference for elastic Internet service deployment
        
    -   Educational environment of deep learning
        
    -   Modeling experiment environment of deep learning
        
-   **Compute**:
    
    -   Uses NVIDIA T4 GPUs.
        
    -   Uses vGPUs.
        
        -   Supports the 1/4 and 1/2 compute capacity of NVIDIA Tesla T4 GPUs.
            
        -   Supports 4 GB and 8 GB of GPU memory.
            
    -   Offers a CPU-to-memory ratio of 1:5.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSD, and ultra disk. For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

vgn6i-vws includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPUs**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.vgn6i-m4-vws.xlarge

4

23

NVIDIA T4 × 1/4

16 GB × 1/4

2

500,000

4/2

3

10

1

ecs.vgn6i-m8-vws.2xlarge

10

46

NVIDIA T4 × 1/2

16 GB × 1/2

4

800,000

8/2

4

10

1

ecs.vgn6i-m16-vws.5xlarge

20

92

NVIDIA T4 × 1

16 GB × 1

7.5

1,200,000

6

4

10

1

**Note**

The **GPU** column in the preceding table indicates the GPU model and GPU slicing information for each instance type. Each GPU can be sliced into multiple GPU partitions, and each GPU partition can be allocated as a vGPU to an instance. Example:

`NVIDIA T4 * 1/4`. `NVIDIA T4` is the GPU model. `1/4` indicates that a GPU is sliced into four GPU partitions, and each GPU partition can be allocated as a vGPU to an instance.

### gn8v and gn8v-tee, GPU-accelerated compute-optimized instance families

The gn8v and gn8v-tee instance families are available only in specific regions, including regions outside China. To use the instance families, contact Alibaba Cloud sales personnel.

-   **Introduction**:
    
    -   **gn8v**: This instance family is an 8th-generation GPU-accelerated compute-optimized instance family provided by Alibaba Cloud for AI model training and the inference tasks of ultra large language models (LLMs). This instance family consists of multiple instance types that provide one, two, four, or eight GPUs per instance.
        
    -   **gn8v-tee**: To meet security requirements for training and inferring large language models, Alibaba Cloud provides an eighth-generation instance family based on gn8v that includes the **confidential computing** feature. This instance type encrypts data during GPU computing to ensure user data security.
        
-   **Use cases**:
    
    -   Multi-GPU parallel inference computing for LLMs that have more than 70 billion parameters
        
    -   Traditional AI model training and autonomous driving training, for which each GPU delivers computing power of up to 39.5 TFLOPS in the single-precision floating-point format (FP32)
        
    -   Small and medium-sized model training scenarios that leverage the NVLink connections among the eight GPUs
        
-   **Benefits and positioning**:
    
    -   **High-speed and large-capacity GPU memory**: Each GPU is equipped with 96 GB of HBM3 memory and delivers up to 4 TB/s of memory bandwidth, which greatly accelerates model training and inference.
        
    -   **High bandwidth between GPUs**: Multiple GPUs are interconnected by using 900 GB/s NVLink connections. The efficiency of multi-GPU training and inference is much higher than that of previous generations of GPU-accelerated instances.
        
    -   **Quantization of LLMs**: This instance family supports computing power in the 8-bit floating point format (FP8) and optimizes computing power for large-scale parameter training and inference. This significantly improves the computing speed of training and inference and reduces memory usage.
        
    -   **(Only for the gn8v-tee instance family) High security**: The gn8v-tee instance family supports confidential computing capabilities that cover the full link of model inference tasks. The capabilities include CPU-based Intel Trust Domain Extensions (TDX) confidential computing and GPU-based NVIDIA Confidential Computing (CC). The confidential computing capabilities ensure the security of user inference data and enterprise models in model inference and training.
        
-   **Compute**:
    
    -   Uses the latest Cloud Infrastructure Processing Unit (CIPU) 1.0 processors.
        
        -   Decouples computing capabilities from storage capabilities, allowing you to flexibly select storage resources based on your business requirements.
            
        -   Provides bare metal capabilities to support peer-to-peer (P2P) communication between GPU-accelerated instances.
            
    -   Uses the 4th-generation Intel Xeon Scalable processors that deliver a base frequency of up to 2.8 GHz and an all-core turbo frequency of up to 3.1 GHz.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For more information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides ultra-high network performance with a packet forwarding rate of up to 30,000,000 pps (for instances equipped with eight GPUs).
        
    -   Supports elastic RDMA interfaces (ERIs).
        
    -   **Note**
        
        For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
-   **Security**: Supports the Trusted Platform Module (vTPM) feature. This feature is supported by gn8v but not by gn8v-tee. For more information, see [Overview of trusted computing capabilities](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

gn8v includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**ENIs**

**NIC queues per primary ENI**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum cloud disks**

**Disk baseline IOPS**

**Disk baseline bandwidth (GB/s)**

ecs.gn8v.4xlarge

16

96

96 GB × 1

12

8

16

30

30

17

100,000

0.75

ecs.gn8v.6xlarge

24

128

96 GB × 1

15

8

24

30

30

17

120,000

0.937

ecs.gn8v-2x.8xlarge

32

192

96 GB × 2

20

8

32

30

30

25

200,000

1.25

ecs.gn8v-4x.8xlarge

32

384

96 GB × 4

20

8

32

30

30

25

200,000

1.25

ecs.gn8v-2x.12xlarge

48

256

96 GB × 2

25

8

48

30

30

33

300,000

1.50

ecs.gn8v-8x.16xlarge

64

768

96 GB × 8

32

8

64

30

30

33

360,000

2.5

ecs.gn8v-4x.24xlarge

96

512

96 GB × 4

50

15

64

30

30

49

500,000

3

ecs.gn8v-8x.48xlarge

192

1024

96 GB × 8

100

15

64

50

50

65

1,000,000

6

gn8v-tee includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**ENIs**

**NIC queues per primary ENI**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum cloud disks**

**Disk baseline IOPS**

**Disk baseline bandwidth (GB/s)**

ecs.gn8v-tee.4xlarge

16

96

96 GB × 1

12

8

16

30

30

17

100,000

0.75

ecs.gn8v-tee.6xlarge

24

128

96 GB × 1

15

8

24

30

30

17

120,000

0.937

ecs.gn8v-tee-8x.16xlarge

64

768

96 GB × 8

32

8

64

30

30

33

360,000

2.5

ecs.gn8v-tee-8x.48xlarge

192

1024

96 GB × 8

100

15

64

50

50

65

1,000,000

6

**Note**

The gn8v-tee instance family only supports Alibaba Cloud Linux 3 images. If you use a custom image built from Alibaba Cloud Linux 3 to create an instance, ensure that the kernel version is at least `5.10.134-18`.

### gn8is, GPU-accelerated compute-optimized instance family

This instance family is available only in specific regions, including regions outside China. To use the instance family, contact Alibaba Cloud sales personnel.

-   **Introduction**: gn8is is the eighth-generation GPU-accelerated compute-optimized instance family from Alibaba Cloud, developed in response to the growth of AI-generated content (AIGC) services. It uses the latest NVIDIA L20 GPUs and provides 1-GPU, 2-GPU, 4-GPU, and 8-GPU instance types, along with instance types with different CPU-to-GPU ratios, to meet various application requirements.
    
-   **Benefits and positioning**:
    
    -   **Graphics processing**: This instance family uses 4th-generation Intel Xeon Scalable high-frequency processors to provide sufficient CPU computing power for 3D modeling scenarios, which makes graphics rendering and design smoother.
        
    -   **Inference tasks**: It uses the new NVIDIA L20 GPU and provides 48 GB of video memory per GPU to accelerate inference tasks. It supports the FP8 floating-point number format and can be used with ACK containers to flexibly support the inference of various AIGC models. It is especially suitable for inference tasks on LLM models with fewer than 70 billion parameters.
        
-   **Use cases**:
    
    -   Animation, special effects for film and television, and rendering
        
    -   Generation of AIGC images and inference of LLMs
        
    -   Other general-purpose AI recognition, image recognition, and speech recognition scenarios
        
-   **Compute**:
    
    -   Uses the new NVIDIA L20 enterprise-grade GPUs.
        
        -   Support for acceleration features, such as TensorRT, and the FP8 floating-point format to improve LLM inference performance.
            
        -   Up to 48 GB of memory per GPU and support for the inference of 70B or larger LLMs on a single instance with multiple GPUs.
            
        -   Improved graphic processing capabilities. For example, after you install a GRID driver on a gn8is instance by using Cloud Assistant or an Alibaba Cloud Marketplace image, the instance can provide graphic processing performance twice that of a 7th-generation instance.
            
    -   Key parameters of NVIDIA L20:
        
        **GPU architecture**
        
        **GPU memory**
        
        **Compute performance**
        
        **Video encoding/decoding capabilities**
        
        **Inter-card connection**
        
        NVIDIA Ada Lovelace
        
        -   **Capacity:** 48 GB
            
        -   **Bandwidth:** 864 GB/s
            
        
        -   **FP64:** N/A
            
        -   **FP32:** 59.3 TFLOPS
            
        -   **FP16/BF16:** 119 TFLOPS
            
        -   **FP8/INT8:** 237 TFLOPS
            
        
        -   3 × Video Encoder (+AV1)
            
        -   3 × Video Decoder
            
        -   4 × JPEG Decoder
            
        
        -   PCIe interface: PCIe Gen4 x16
            
        -   Bandwidth: 64 GB/s
            
        
    -   Uses the latest high-frequency Intel® Xeon® processors that deliver an all-core turbo frequency of 3.9 GHz to meet complex 3D modeling requirements.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For more information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports ERIs.
        
        **Note**
        
        For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

gn8is includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPU**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**ENIs**

**NIC queues per primary ENI**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum cloud disks**

**Disk baseline IOPS**

**Disk baseline bandwidth (GB/s)**

ecs.gn8is.2xlarge

8

64

L20 × 1

48 GB × 1

8

4

8

15

15

17

60,000

0.75

ecs.gn8is.4xlarge

16

128

L20 × 1

48 GB × 1

16

8

16

30

30

17

120,000

1.25

ecs.gn8is-2x.8xlarge

32

256

L20 × 2

48 GB × 2

32

8

32

30

30

33

250,000

2

ecs.gn8is-4x.16xlarge

64

512

L20 × 4

48 GB × 4

64

8

64

30

30

33

450,000

4

ecs.gn8is-8x.32xlarge

128

1024

L20 × 8

48 GB × 8

100

15

64

50

50

65

900,000

8

### gn7e, GPU-accelerated compute-optimized instance family

Features

-   **Introduction**:
    
    -   This instance family allows you to select instance types that provide different numbers of GPUs and CPUs to meet your business requirements in AI use cases.
        
    -   This instance family uses the third-generation SHENLONG architecture and doubles the average bandwidths of virtual private clouds (VPCs), networks, and disks compared with instance families of the previous generation.
        
-   **Use cases**:
    
    -   Small- and medium-scale AI training
        
    -   High-performance computing (HPC) business accelerated by using Compute Unified Device Architecture (CUDA)
        
    -   AI inference tasks that require high GPU processing capabilities or large amounts of GPU memory
        
    -   Deep learning applications, such as training applications of AI algorithms used in image classification, autonomous vehicles, and speech recognition
        
    -   Scientific computing applications that require robust GPU computing capabilities, such as computational fluid dynamics, computational finance, molecular dynamics, and environmental analytics
        
    
    **Important**
    
    When you use AI training services that feature a high communication load, such as transformer models, you must enable NVLink for GPU-to-GPU communication. Otherwise, data may be damaged due to unpredictable failures that are caused by large-scale data transmission over Peripheral Component Interconnect Express (PCIe) links. If you do not understand the topology of the communication links that are used for AI training services, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to obtain technical support.
    
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

gn7e includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.gn7e-c16g1.4xlarge

16

125

80 GB × 1

8

3,000,000

8

8

10

1

ecs.gn7e-c16g1.8xlarge

32

250

80 GB × 2

16

6,000,000

16

8

10

1

ecs.gn7e-c16g1.16xlarge

64

500

80 GB × 4

32

12,000,000

32

8

10

1

ecs.gn7e-c16g1.32xlarge

128

1000

80 GB × 8

64

24,000,000

32

16

15

1

### gn7i, GPU-accelerated compute-optimized instance family

-   **Introduction**: This instance family uses the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
    
-   **Use cases**:
    
    -   Concurrent AI inference tasks that require high-performance CPUs, memory, and GPUs, such as image recognition, speech recognition, and behavior identification
        
    -   Compute-intensive graphics processing tasks that require high-performance 3D graphics virtualization capabilities, such as remote graphic design and cloud gaming
        
-   **Compute**:
    
    -   Uses NVIDIA A10 GPUs that have the following features:
        
        -   Innovative NVIDIA Ampere architecture
            
        -   Support for acceleration features, such as RTX and TensorRT
            
    -   Uses 2.9 GHz Intel® Xeon® Scalable (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz.
        
    -   Provides up to 752 GiB of memory, which is much larger than the memory sizes of the gn6i instance family.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

gn7i includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPUs**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.gn7i-c8g1.2xlarge

8

30

NVIDIA A10 × 1

24 GB × 1

16

1,600,000

8

4

15

15

ecs.gn7i-c16g1.4xlarge

16

60

NVIDIA A10 × 1

24 GB × 1

16

3,000,000

8

8

30

30

ecs.gn7i-c32g1.8xlarge

32

188

NVIDIA A10 × 1

24 GB × 1

16

6,000,000

12

8

30

30

ecs.gn7i-c32g1.16xlarge

64

376

NVIDIA A10 × 2

24 GB × 2

32

12,000,000

16

15

30

30

ecs.gn7i-c32g1.32xlarge

128

752

NVIDIA A10 × 4

24 GB × 4

64

24,000,000

32

15

30

30

ecs.gn7i-c48g1.12xlarge

48

310

NVIDIA A10 × 1

24 GB × 1

16

9,000,000

16

8

30

30

ecs.gn7i-c56g1.14xlarge

56

346

NVIDIA A10 × 1

24 GB × 1

16

10,000,000

16

8

30

30

ecs.gn7i-2x.8xlarge

32

128

NVIDIA A10 × 2

24 GB × 2

16

6,000,000

16

8

30

30

ecs.gn7i-4x.8xlarge

32

128

NVIDIA A10 × 4

24 GB × 4

32

6,000,000

16

8

30

30

ecs.gn7i-4x.16xlarge

64

256

NVIDIA A10 × 4

24 GB × 4

64

12,000,000

32

8

30

30

ecs.gn7i-8x.32xlarge

128

512

NVIDIA A10 × 8

24 GB × 8

64

24,000,000

32

16

30

30

ecs.gn7i-8x.16xlarge

64

256

NVIDIA A10 × 8

24 GB × 8

32

12,000,000

32

8

30

30

**Important**

You can change the following instance types only to ecs.gn7i-c8g1.2xlarge or ecs.gn7i-c16g1.4xlarge: ecs.gn7i-2x.8xlarge, ecs.gn7i-4x.8xlarge, ecs.gn7i-4x.16xlarge, ecs.gn7i-8x.32xlarge, and ecs.gn7i-8x.16xlarge.

### gn7s, GPU-accelerated compute-optimized instance family

To use the gn7s instance family, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to apply.

-   **Introduction**:
    
    -   This instance family uses the latest Intel Ice Lake processors and NVIDIA A30 GPUs that are based on NVIDIA Ampere architecture. You can select instance types that comprise appropriate mixes of GPUs and vCPUs to meet your business requirements in AI scenarios.
        
    -   This instance family uses the third-generation SHENLONG architecture and doubles the average bandwidths of VPCs, networks, and disks compared with instance families of the previous generation.
        
-   **Use cases**: concurrent AI inference tasks that require high-performance CPUs, memory, and GPUs, such as image recognition, speech recognition, and behavior identification.
    
-   **Compute**:
    
    -   Uses NVIDIA A30 GPUs that have the following features:
        
        -   Innovative NVIDIA Ampere architecture
            
        -   Support for the multi-instance GPU (MIG) feature and acceleration features (based on second-generation Tensor cores) to provide diversified business support
            
    -   Uses 2.9 GHz Intel® Xeon® Scalable (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz.
        
    -   Improves memory sizes significantly from instance families of the previous generation.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

gn7s includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPUs**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**NIC queues**

**ENIs**

ecs.gn7s-c8g1.2xlarge

8

60

NVIDIA A30 × 1

24 GB × 1

16

1,600,000

5

1

8

4

ecs.gn7s-c16g1.4xlarge

16

120

NVIDIA A30 × 1

24 GB × 1

16

3,000,000

5

1

8

8

ecs.gn7s-c32g1.8xlarge

32

250

NVIDIA A30 × 1

24 GB × 1

16

6,000,000

5

1

12

8

ecs.gn7s-c32g1.16xlarge

64

500

NVIDIA A30 × 2

24 GB × 2

32

12,000,000

5

1

16

15

ecs.gn7s-c32g1.32xlarge

128

1000

NVIDIA A30 × 4

24 GB × 4

64

24,000,000

10

1

32

15

ecs.gn7s-c48g1.12xlarge

48

380

NVIDIA A30 × 1

24 GB × 1

16

9,000,000

8

1

16

8

ecs.gn7s-c56g1.14xlarge

56

440

NVIDIA A30 × 1

24 GB × 1

16

10,000,000

8

1

16

8

### gn7, GPU-accelerated compute-optimized instance family

-   **Use cases**:
    
    -   Deep learning applications, such as training applications of AI algorithms used in image classification, autonomous vehicles, and speech recognition
        
    -   Scientific computing applications that require robust GPU computing capabilities, such as computational fluid dynamics, computational finance, molecular dynamics, and environmental analytics
        

-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

gn7 includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.gn7-c12g1.3xlarge

12

94

40 GB × 1

4

2,500,000

4

8

10

1

ecs.gn7-c13g1.13xlarge

52

378

40 GB × 4

16

9,000,000

16

8

30

30

ecs.gn7-c13g1.26xlarge

104

756

40 GB × 8

30

18,000,000

16

15

10

1

### gn6i, GPU-accelerated compute-optimized instance family

-   **Use cases**:
    
    -   AI (deep learning and machine learning) inference for computer vision, speech recognition, speech synthesis, natural language processing (NLP), machine translation, and recommendation systems
        
    -   Real-time rendering for cloud gaming
        
    -   Real-time rendering for AR and VR applications
        
    -   Graphics workstations or graphics-heavy computing
        
    -   GPU-accelerated databases
        
    -   High-performance computing
        
-   **Compute**:
    
    -   Uses NVIDIA T4 GPUs that have the following features:
        
        -   Innovative NVIDIA Turing architecture
            
        -   16 GB of memory (320 GB/s bandwidth) per GPU
            
        -   2,560 CUDA cores per GPU
            
        -   Up to 320 Turing Tensor cores per GPU
            
        -   Mixed-precision Tensor cores that support 65 FP16 TFLOPS, 130 INT8 TOPS, and 260 INT4 TOPS
            
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

gn6i includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPUs**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Baseline disk IOPS**

**Multi-queue**

**ENIs**

**Number of private IPv4 addresses per ENI**

**Number of IPv6 addresses per ENI**

ecs.gn6i-c4g1.xlarge

4

15

NVIDIA T4 × 1

16 GB × 1

4

2,500,000

None

2

2

10

1

ecs.gn6i-c8g1.2xlarge

8

31

NVIDIA T4 × 1

16 GB × 1

5

2,500,000

None

2

2

10

1

ecs.gn6i-c16g1.4xlarge

16

62

NVIDIA T4 × 1

16 GB × 1

6

2,500,000

None

4

3

10

1

ecs.gn6i-c24g1.6xlarge

24

93

NVIDIA T4 × 1

16 GB × 1

7.5

2,500,000

None

6

4

10

1

ecs.gn6i-c40g1.10xlarge

40

155

NVIDIA T4 × 1

16 GB × 1

10

1,600,000

None

16

10

10

1

ecs.gn6i-c24g1.12xlarge

48

186

NVIDIA T4 × 2

16 GB × 2

15

4,500,000

None

12

6

10

1

ecs.gn6i-c24g1.24xlarge

96

372

NVIDIA T4 × 4

16 GB × 4

30

4,500,000

250,000

24

8

10

1

### gn6e, GPU-accelerated compute-optimized instance family

-   **Use cases**:
    
    -   Deep learning applications, such as training and inference applications of AI algorithms used in image classification, autonomous vehicles, and speech recognition
        
    -   Scientific computing applications, such as computational fluid dynamics, computational finance, molecular dynamics, and environmental analytics
        
-   **Compute**:
    
    -   Uses NVIDIA V100 GPUs that each have 32 GB of GPU memory and support NVLink.
        
    -   Uses NVIDIA V100 GPUs (SXM2-based) that have the following features:
        
        -   Innovative NVIDIA Volta architecture
            
        -   32 GB of HBM2 memory (900 GB/s bandwidth) per GPU
            
        -   5,120 CUDA cores per GPU
            
        -   640 Tensor cores per GPU
            
        -   Up to six NVLink bidirectional connections per GPU, each of which provides a bandwidth of 25 Gbit/s in each direction for a total bandwidth of 300 Gbit/s (6 × 25 × 2 = 300)
            
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSD, and ultra disk. For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

The following table lists the instance types and specifications of the gn6e instance family.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPUs**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.gn6e-c12g1.3xlarge

12

92

1 × NVIDIA V100

1 × 32 GB

5

800,000

8

6

10

1

ecs.gn6e-c12g1.6xlarge

24

184

2 × NVIDIA V100

2 × 32 GB

8

1,200,000

8

8

20

1

ecs.gn6e-c12g1.12xlarge

48

368

4 × NVIDIA V100

4 × 32 GB

16

2,400,000

8

8

20

1

ecs.gn6e-c12g1.24xlarge

96

736

8 × NVIDIA V100

8 × 32 GB

32

4,500,000

16

8

20

1

### gn6v, GPU-accelerated compute-optimized instance family

-   **Use cases**:
    
    -   Deep learning applications, such as training and inference applications of AI algorithms used in image classification, autonomous vehicles, and speech recognition
        
    -   Scientific computing applications, such as computational fluid dynamics, computational finance, molecular dynamics, and environmental analytics
        
-   **Compute**:
    
    -   Uses NVIDIA V100 GPUs.
        
    -   Uses NVIDIA V100 GPUs (SXM2-based) that have the following features:
        
        -   Innovative NVIDIA Volta architecture
            
        -   16 GB of HBM2 memory (900 GB/s bandwidth) per GPU
            
        -   5,120 CUDA cores per GPU
            
        -   640 Tensor cores per GPU
            
        -   Up to six NVLink bidirectional connections per GPU, each of which provides a bandwidth of 25 Gbit/s in each direction for a total bandwidth of 300 Gbit/s (6 × 25 × 2 = 300)
            
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

gn6v includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPUs**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding (pps)**

**Disk baseline IOPS**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.gn6v-c8g1.2xlarge

8

32

NVIDIA V100 × 1

16 GB × 1

2.5

800,000

N/A

4

4

10

1

ecs.gn6v-c8g1.4xlarge

16

64

NVIDIA V100 × 2

16 GB × 2

5

1,000,000

N/A

4

8

20

1

ecs.gn6v-c8g1.8xlarge

32

128

NVIDIA V100 × 4

16 GB × 4

10

2,000,000

N/A

8

8

20

1

ecs.gn6v-c8g1.16xlarge

64

256

NVIDIA V100 × 8

16 GB × 8

20

2,500,000

N/A

16

8

20

1

ecs.gn6v-c10g1.20xlarge

82

336

NVIDIA V100 × 8

16 GB × 8

35

4,500,000

250,000

16

8

20

1

### gn5, GPU-accelerated compute-optimized instance family

-   **Use cases**:
    
    -   Deep learning
        
    -   Scientific computing applications, such as computational fluid dynamics, computational finance, genomics, and environmental analytics
        
    -   Server-side GPU compute workloads, such as high-performance computing, rendering, and multi-media encoding and decoding
        
-   **Compute**:
    
    -   Uses NVIDIA P100 GPUs.
        
    -   Offers multiple CPU-to-memory ratios.
        
    -   Uses 2.5 GHz Intel® Xeon® E5-2682 v4 (Broadwell) processors.
        
-   **Storage**:
    
    -   Supports high-performance local Non-Volatile Memory Express (NVMe) SSDs.
        
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks.
        
-   **Network**:
    
    -   Supports only IPv4.
        
    -   Provides high network performance based on large computing capacity.
        

gn5 includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPUs**

**GPU memory**

**Local storage (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

ecs.gn5-c4g1.xlarge

4

30

1 × NVIDIA P100

1 × 16 GB

440

3

300,000

1

3

10

ecs.gn5-c8g1.2xlarge

8

60

1 × NVIDIA P100

1 × 16 GB

440

3

400,000

1

4

10

ecs.gn5-c4g1.2xlarge

8

60

2 × NVIDIA P100

2 × 16 GB

880

5

1,000,000

4

4

10

ecs.gn5-c8g1.4xlarge

16

120

2 × NVIDIA P100

2 × 16 GB

880

5

1,000,000

4

8

20

ecs.gn5-c28g1.7xlarge

28

112

1 × NVIDIA P100

1 × 16 GB

440

5

2,250,000

7

8

10

ecs.gn5-c8g1.8xlarge

32

240

4 × NVIDIA P100

4 × 16 GB

1760

10

2,000,000

8

8

20

ecs.gn5-c28g1.14xlarge

56

224

2 × NVIDIA P100

2 × 16 GB

880

10

4,500,000

14

8

20

ecs.gn5-c8g1.14xlarge

54

480

8 × NVIDIA P100

8 × 16 GB

3520

25

4,000,000

14

8

10

### gn5i, GPU-accelerated compute-optimized instance family

-   **Use cases**: Server-side GPU computing workloads, such as deep learning inference and multimedia encoding and decoding.
    
-   Compute:
    
    -   Uses NVIDIA P4 GPUs.
        
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® E5-2682 v4 (Broadwell) processors.
        
-   Storage:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks.
        
-   Network:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

gn5i includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPUs**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.gn5i-c2g1.large

2

8

NVIDIA P4 × 1

8 GB × 1

1

100,000

2

2

6

1

ecs.gn5i-c4g1.xlarge

4

16

NVIDIA P4 × 1

8 GB × 1

1.5

200,000

2

3

10

1

ecs.gn5i-c8g1.2xlarge

8

32

NVIDIA P4 × 1

8 GB × 1

2

400,000

4

4

10

1

ecs.gn5i-c16g1.4xlarge

16

64

NVIDIA P4 × 1

8 GB × 1

3

800,000

4

8

20

1

ecs.gn5i-c16g1.8xlarge

32

128

NVIDIA P4 × 2

8 GB × 2

6

1,200,000

8

8

20

1

ecs.gn5i-c28g1.14xlarge

56

224

NVIDIA P4 × 2

8 GB × 2

10

2,000,000

14

8

20

1
