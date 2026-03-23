The specification of a Dedicated Host (DDH) determines the ECS instance families and the number of ECS instances that you can create on the DDH. This topic describes DDH specifications and their configurations.

## Introduction

A DDH specification defines the configuration of the underlying physical server. This includes resources such as the physical CPU model, the number of CPU cores, the number of virtual CPU (vCPU) cores, the number of CPU sockets, memory, and local storage.

Predefined instance types are designed for the same scenarios as ECS instance families on shared hosts. This lets you create ECS instances on a DDH that match its specifications. For more information, see the tables below. For example, on a DDH of the **g6, General-purpose Instance Family** type, you can create all ECS instances of the **g6, c6, r6, and ic6** families. For more information about ECS instance families and the network performance of each instance type, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).

Custom instance types support custom vCPU-to-memory ratios. For example, on a DDH of the **g6s, General-purpose Overprovisioned Instance Family** type, you can create custom ECS instances and adjust the number of vCPU cores and memory size as needed.

## Available specifications

Available families include overprovisioned, enhanced, general-purpose, memory-optimized, compute-optimized, and local disk types. Performance may vary across families. When purchasing a DDH, select a type that meets your needs.

**Note**

The symbols ①, ②, ③, and ④ in the tables are described as follows:

-   ①: For non-overprovisioned types, the number of vCPU cores = Number of physical CPU cores × 2.
    
-   ②: For overprovisioned types, the number of vCPU cores = Number of physical CPU cores × 2 × CPU overprovisioning ratio.
    
-   ③: For more information about local disks, see [Local disks](/help/en/ecs/user-guide/local-disks#concept-g3w-qzv-tdb).
    
-   ④: The total packet forwarding rate or network bandwidth of all ECS instances on a DDH cannot exceed the capacity of the DDH. For information about the network performance of each instance type, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    

### Overprovisioned

**DDH specification**

**Supported ECS instance families**

**Number of CPUs (sockets)**

**Physical CPU model**

**Physical CPU cores**

**vCPU cores**[②](#fadfe77109lqk)

**Memory (GiB)**

**Network bandwidth (out/in, Gbit/s)**[④](#fadfe773095o1)

**Packet forwarding rate (out/in, 10,000 PPS)**[④](#fadfe773095o1)

r8as, memory-optimized overprovisioned

Custom specifications

2

AMD EPYC™ Genoa 9T24

192

1152

3072

128

3600

g8as, general-purpose overprovisioned

Custom specifications

2

AMD EPYC™ Genoa 9T24

192

1152

1536

128

3600

g7s, general-purpose overprovisioned

Custom specifications

2

Intel® Xeon® Platinum 8369B (Ice Lake)

64

640

512

64

1200

r7s, memory-optimized overprovisioned

Custom specifications

2

Intel® Xeon® Platinum 8369B (Ice Lake)

64

640

1024

64

1200

c6s, compute-optimized overprovisioned

Custom specifications

2

Intel® Xeon® Platinum 8269CY (Cascade Lake)

52

520

180

25

400

g6s, general-purpose overprovisioned

Custom specifications

2

Intel® Xeon® Platinum 8269CY (Cascade Lake)

52

520

372

25

400

r6s, memory-optimized overprovisioned

Custom specifications

2

Intel® Xeon® Platinum 8269CY (Cascade Lake)

52

520

750

25

400

v5, CPU-overprovisioned

v5

2

Intel® Xeon® Platinum 8163 (Skylake)

48

336

672

25

550

### **Enhanced**

**DDH specification**

**Supported ECS instance type families**

**Number of CPUs (sockets)**

**Physical CPU model**

**Physical CPU cores**

**vCPU cores**[①](#fc6a580009otv)

**Memory (GiB)**

**Network bandwidth (out/in, Gbit/s)**[④](#fadfe773095o1)

**Packet forwarding rate (out/in, 10,000 PPS)**[④](#fadfe773095o1)

r7t, security-enhanced memory-optimized

-   r7t
    
-   g7t
    
-   c7t
    

2

Intel® Xeon® Platinum 8369B (Ice Lake)

64

128

1024

64

2400

g7t, security-enhanced general-purpose

-   r7t
    
-   g7t
    
-   c7t
    

2

Intel® Xeon® Platinum 8369B (Ice Lake)

64

128

512

64

2400

c7t, security-enhanced compute-optimized

-   r7t
    
-   g7t
    
-   c7t
    

2

Intel® Xeon® Platinum 8369B (Ice Lake)

64

128

256

64

2400

g6t, security-enhanced compute-optimized

g6t

2

Intel® Xeon® Platinum 8269 (Cascade Lake)

52

104

384

32

2400

c6t, security-enhanced compute-optimized

c6t

2

Intel® Xeon® Platinum 8269 (Cascade Lake)

52

104

192

32

2400

g5se, storage-enhanced instance family

g5se

2

Intel® Xeon® Platinum 8163 (Skylake)

48

70

336

25

550

g5ne, network-enhanced

g5ne

2

Intel® Xeon® Platinum 8163 (Skylake)

48

72

288

25

2400

### **General-purpose**

**DDH specification**

**Supported ECS instance families**

**Number of CPUs (sockets)**

**Physical CPU model**

**Physical CPU cores**

**vCPU cores**[①](#fc6a580009otv)

**Memory (GiB)**

**Network bandwidth (out/in, Gbit/s)**[④](#fadfe773095o1)

**Packet forwarding rate (out/in, 10,000 PPS)**[④](#fadfe773095o1)

g9i, general-purpose

-   c9i
    
-   g9i
    
-   r9i
    

2

Intel® Xeon® Granite Rapids

192

384

1536

128

4000

g8i, general-purpose

-   c8i
    
-   g8i
    
-   r8i
    

2

Intel® Xeon® Emerald Rapids

96

192

1024

100

3000

g7, general-purpose

-   r7
    
-   g7
    
-   c7
    

2

Intel® Xeon® Platinum 8369B (Ice Lake)

64

128

512

64

2400

g6e, general-purpose balanced enhanced

-   r6
    
-   g6
    
-   c6
    

2

Intel® Xeon® Platinum 8269 (Cascade)

52

104

384

32

2400

g6, general-purpose

-   ic6
    
-   c6
    
-   g6
    
-   r6
    

2

Intel® Xeon® Platinum 8269CY (Cascade Lake)

52

104

384

25

400

g5, general-purpose

g5

2

Intel® Xeon® Platinum 8163 (Skylake)

48

84

336

25

550

### **Memory-optimized**

**DDH specification**

**Supported ECS instance families**

**Number of CPUs (sockets)**

**Physical CPU model**

**Physical CPU cores**

**vCPU cores**[①](#fc6a580009otv)

**Memory (GiB)**

**Network bandwidth (out/in, Gbit/s)**[④](#fadfe773095o1)

**Packet forwarding rate (out/in, 10,000 PPS)**[④](#fadfe773095o1)

r9i, memory-optimized

-   c9i
    
-   g9i
    
-   r9i
    

2

Intel® Xeon® Granite Rapids

192

384

3072

128

4000

r7, memory-optimized

-   r7
    
-   g7
    
-   c7
    

2

Intel® Xeon® Platinum 8369B (Ice Lake)

64

128

1024

64

2400

r6e, memory-optimized balanced enhanced

-   r6
    
-   g6
    
-   c6
    

2

Intel® Xeon® Platinum 8269 (Cascade)

52

104

768

32

2400

r6, memory-optimized

-   ic6
    
-   c6
    
-   g6
    
-   r6
    

2

Intel® Xeon® Platinum 8269CY (Cascade Lake)

52

104

768

25

400

r5, memory-optimized

r5

2

Intel® Xeon® Platinum 8163 (Skylake)

48

86

688

25

550

### **Compute-optimized**

**DDH specification**

**Supported ECS instance families**

**Number of CPUs (sockets)**

**Physical CPU model**

**Physical CPU cores**

**vCPU cores**[①](#fc6a580009otv)

**Memory (GiB)**

**Network bandwidth (out/in, Gbit/s)**[④](#fadfe773095o1)

**Packet forwarding rate (out/in, 10,000 PPS)**[④](#fadfe773095o1)

c7, compute-optimized

c7

2

Intel® Xeon® Platinum 8369B (Ice Lake)

64

128

256

64

2400

c6e, compute-optimized balanced enhanced

-   r6
    
-   g6
    
-   c6
    

2

Intel® Xeon® Platinum 8269 (Cascade)

52

104

192

32

2400

c6, compute-optimized

-   ic6
    
-   c6
    

2

Intel® Xeon® Platinum 8269CY (Cascade Lake)

52

104

192

25

600

c5, compute-optimized

c5

2

Intel® Xeon® Platinum 8163 (Skylake)

48

86

172

25

550

### **Local disk type**

**DDH specification**

**Supported ECS instance families**

**Number of CPUs (sockets)**

**Physical CPU model**

**Physical CPU cores**

**vCPU cores**[①](#fc6a580009otv)

**Memory (GiB)**

**Local SSD (GiB)**[③](#fadfe77209hrd)

**Network bandwidth (out/in, Gbit/s)**[④](#fadfe773095o1)

**Packet forwarding rate (out/in, 10,000 PPS)**[④](#fadfe773095o1)

i2, local SSD type

i2

2

Intel® Xeon® Platinum 8163 (Skylake)

48

80

640

17880

25

550

## Discontinued specifications

**DDH specification**

**Supported ECS instance families**

**Number of CPUs (sockets)**

**Physical CPU model**

**Physical CPU cores**

**vCPU cores**[①](#fc6a580009otv)

**Memory (GiB)**

**Network bandwidth (out/in, Gbit/s)**[④](#fadfe773095o1)

**Packet forwarding rate (out/in, 10,000 PPS)**[④](#fadfe773095o1)

sn2ne, general-purpose network-enhanced

sn2ne

2

Intel Xeon E5-2682 v4 (Broadwell)

32

56

224

10

450

sn1ne, compute-optimized network-enhanced

sn1ne

2

Intel Xeon E5-2682 v4 (Broadwell)

32

56

112

10

450

se1ne, memory-optimized network-enhanced

se1ne

2

Intel Xeon E5-2682 v4 (Broadwell)

32

56

480

10

450
