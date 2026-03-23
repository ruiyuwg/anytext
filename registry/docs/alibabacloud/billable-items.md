This topic describes the billable resources and billing methods for E-MapReduce (EMR) Serverless StarRocks.

## **Billable resources**

**Billable item**

**Description**

[Compute CUs](#2715e39c5dfa7)

The total computing resources for operations in StarRocks, such as data writes and queries, are measured in compute units (CUs). Fees vary based on the selected specification type. The following specification types are supported:

-   **Standard**: The default recommended specification. 1 CU = 1 CPU core + 4 GiB of memory. This configuration uses enterprise SSDs (ESSDs) as the storage solution for StarRocks.
    
-   **Memory-enhanced**: 1 RCU = 1 CPU core + 8 GiB of memory. This type is suitable for memory-intensive scenarios, such as those with many complex queries or high concurrent requests. ESSDs are used as the storage solution for StarRocks.
    
-   **Network-enhanced**: 1 NCU = 1 CPU core + 4 GiB of memory. The network bandwidth is more than double that of the standard specification. This type is suitable for scenarios that involve scanning large amounts of data in external tables. ESSDs are used for StarRocks storage.
    
-   **High-performance Storage**: Select detailed specifications as needed. This specification type uses local SSDs as data disks for StarRocks storage. It is suitable for scenarios with strict I/O performance requirements for storage.
    
-   **Large-capacity Storage**: Select detailed specifications as needed. This specification type uses local HDDs as data disks for StarRocks storage. It is suitable for scenarios with extremely large data volumes. This type can effectively reduce overall storage costs but has relatively low I/O performance requirements for storage.
    

[Cloud disk storage](#bdd22a0aa2fzv)

The amount of data that you store on cloud disks in StarRocks.

-   **Shared-nothing Architecture**: Includes the cloud disk data volume used for data storage by the actual frontend (FE) and backend (BE) nodes.
    
-   **Shared-data Architecture**: Includes the cloud disk data volume used for data storage by the actual FE nodes and the cloud disk data volume used for data caching by the compute nodes (CNs).
    

[Elastic ephemeral disk storage](#573336beffphz)

The amount of data that you store on elastic ephemeral disks in StarRocks. For more information about elastic ephemeral disks, see [Elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks).

[Data storage](#5c5aa0ed86o03)

Data storage fees are incurred when you use a **Shared-data** instance. This data storage has lower performance than cloud disk storage.

If the **Multi-zone Disaster Recovery** feature is enabled for your **Shared-data** instance, the following fees are also incurred:

-   Additional FE nodes are required. This incurs extra CU fees, which are recorded as **OBSERVER Compute Resources**. For the unit price of these fees, see [Compute CU fees](#2715e39c5dfa7).
    
-   Multi-zone backup for Object Storage Service (OSS) is enabled, which incurs extra storage fees. These fees are combined with the data storage fees and are not listed separately. For the unit price of these fees, see [Data storage (multi-zone) fees](#6da243ad3f5wh).
    

[Data backup](#40e32ff9e47hw)

When you use a **Storage-Compute Integrated Edition** instance and enable the backup feature, you will incur data backup fees.

## **Specification fees**

**Important**

-   For actual prices, see the product buy page.
    
-   Data storage fees apply only to **Shared-data** instances. Data storage supports only the pay-as-you-go billing method.
    

### **Compute CU fees**

## Standard

**Region**

**Price (USD/CU/hour)**

**Price (USD/CU/month)**

China (Beijing)

China (Shanghai)

China (Shenzhen)

China (Hangzhou)

China (Qingdao)

China (Zhangjiakou)

0.050617

24.30

China (Ulanqab)

0.045555

21.87

Singapore

0.060075

29.00

China (Hong Kong)

0.066083

32.00

US (Silicon Valley)

0.048063

23.50

US (Virginia)

0.048063

23.50

Germany (Frankfurt)

0.057572

28.15

Indonesia (Jakarta)

0.060075

29.00

Japan (Tokyo)

0.060075

33.00

## Memory-enhanced

**Region**

**Price (USD/CU/hour)**

**Price (USD/CU/month)**

China (Beijing)

China (Shanghai)

China (Shenzhen)

China (Hangzhou)

China (Qingdao)

China (Zhangjiakou)

0.067349

32.33

China (Ulanqab)

0.060614

29.10

Singapore

0.085500

41.04

China (Hong Kong)

0.093938

45.09

US (Silicon Valley)

0.070879

34.02

US (Virginia)

0.070879

34.02

Germany (Frankfurt)

0.085500

41.04

Indonesia (Jakarta)

0.085500

41.04

Japan (Tokyo)

0.085500

41.10

## Network-enhanced

**Region**

**Price (USD/CU/hour)**

**Price (USD/CU/month)**

China (Beijing)

China (Shanghai)

China (Shenzhen)

China (Hangzhou)

China (Qingdao)

0.063280

30.37

Singapore

0.084370

40.50

## High-performance storage

**Region**

**Specifications**

**Price (USD/node/hour)**

**Price (USD/node/month)**

China (Shanghai)

China (Qingdao)

\[i2g\] 16 cores, 64 GB memory, 1 × 1788 GiB local SSD

1.18

567.59

\[i2g\] 32 cores, 128 GB memory, 2 × 1788 GiB local SSDs

2.36

1,134.58

\[i2g\] 64 cores, 256 GB memory, 4 × 1788 GiB local SSDs

4.73

2,270.35

\[i3g\] 16 cores, 64 GB memory, 1 × 960 GiB local SSD

1.08

516.76

\[i3g\] 32 cores, 128 GB memory, 2 × 960 GiB local SSDs

2.15

1,033.52

\[i3g\] 52 cores, 192 GB memory, 3 × 960 GiB local SSDs

3.23

1,550.28

\[i2\] 16 cores, 128 GB memory, 2 × 1788 GiB local SSDs

1.45

694.86

\[i2\] 32 cores, 256 GB memory, 4 × 1788 GiB local SSDs

2.90

1,390.64

\[i2\] 64 cores, 512 GB memory, 8 × 1788 GiB local SSDs

5.79

2,780.35

\[i3\] 16 cores, 128 GB memory, 2 × 1920 GiB local SSDs

1.58

759.82

\[i3\] 32 cores, 256 GB memory, 4 × 1920 GiB local SSDs

3.17

1,519.55

\[i3\] 52 cores, 384 GB memory, 6 × 1920 GiB local SSDs

4.75

2,279.28

China (Shenzhen)

\[i2g\] 16 cores, 64 GB memory, 1 × 1788 GiB local SSD

1.18

567.59

\[i2g\] 32 cores, 128 GB memory, 2 × 1788 GiB local SSDs

2.36

1,134.58

\[i2g\] 64 cores, 256 GB memory, 4 × 1788 GiB local SSDs

4.73

2,270.35

\[i3g\] 16 cores, 64 GB memory, 1 × 960 GiB local SSD

1.08

516.76

\[i3g\] 32 cores, 128 GB memory, 2 × 960 GiB local SSDs

2.15

1,033.52

\[i3g\] 52 cores, 192 GB memory, 3 × 960 GiB local SSDs

3.23

1,550.28

\[i2\] 16 cores, 128 GB memory, 2 × 1788 GiB local SSDs

1.45

694.86

\[i2\] 32 cores, 256 GB memory, 4 × 1788 GiB local SSDs

2.90

1,390.64

\[i2\] 64 cores, 512 GB memory, 8 × 1788 GiB local SSDs

5.79

2,780.35

\[i3\] 16 cores, 128 GB memory, 2 × 1920 GiB local SSDs

1.58

759.82

\[i3\] 32 cores, 256 GB memory, 4 × 1920 GiB local SSDs

3.17

1,519.55

\[i3\] 52 cores, 384 GB memory, 6 × 1920 GiB local SSDs

4.75

2,279.28

\[i4\] 16 cores, 128 GB memory, 1 × 3840 GiB local SSD

1.48

706.88

\[i4\] 32 cores, 256 GB memory, 2 × 3840 GiB local SSDs

2.96

1,413.76

\[i4\] 64 cores, 512 GB memory, 4 × 3840 GiB local SSDs

5.93

2,827.53

\[i4\] 128 cores, 1024 GB memory, 8 × 3840 GiB local SSDs

11.86

5,655.06

\[i4g\] 16 cores, 64 GB memory, 1 × 960 GiB local SSD

1.04

495.80

\[i4g\] 32 cores, 128 GB memory, 1 × 1920 GiB local SSD

2.08

991.60

\[i4g\] 64 cores, 256 GB memory, 2 × 1920 GiB local SSDs

4.12

1,983.20

\[i4g\] 128 cores, 512 GB memory, 4 × 1920 GiB local SSDs

8.32

3,966.41

China (Beijing)

China (Hangzhou)

\[i2g\] 16 cores, 64 GB memory, 1 × 1788 GiB local SSD

1.18

567.59

\[i2g\] 32 cores, 128 GB memory, 2 × 1788 GiB local SSDs

2.36

1,134.58

\[i2g\] 64 cores, 256 GB memory, 4 × 1788 GiB local SSDs

4.73

2,270.35

\[i3g\] 16 cores, 64 GB memory, 1 × 960 GiB local SSD

1.08

516.76

\[i3g\] 32 cores, 128 GB memory, 2 × 960 GiB local SSDs

2.15

1,033.52

\[i3g\] 52 cores, 192 GB memory, 3 × 960 GiB local SSDs

3.23

1,550.28

\[i2\] 16 cores, 128 GB memory, 2 × 1788 GiB local SSDs

1.45

694.86

\[i2\] 32 cores, 256 GB memory, 4 × 1788 GiB local SSDs

2.90

1,390.64

\[i2\] 64 cores, 512 GB memory, 8 × 1788 GiB local SSDs

5.79

2,780.35

\[i3\] 16 cores, 128 GB memory, 2 × 1920 GiB local SSDs

1.58

759.82

\[i3\] 32 cores, 256 GB memory, 4 × 1920 GiB local SSDs

3.17

1,519.55

\[i3\] 52 cores, 384 GB memory, 6 × 1920 GiB local SSDs

4.75

2,279.28

\[i4\] 16 cores, 128 GB memory, 1 × 3840 GiB local SSD

1.48

706.88

\[i4\] 32 cores, 256 GB memory, 2 × 3840 GiB local SSDs

2.96

1,413.76

\[i4\] 64 cores, 512 GB memory, 4 × 3840 GiB local SSDs

5.93

2,827.53

\[i4\] 128 cores, 1024 GB memory, 8 × 3840 GiB local SSDs

11.86

5,655.06

China (Zhangjiakou)

\[i2g\] 16 cores, 64 GB memory, 1 × 1788 GiB local SSD

0.89

425.69

\[i2g\] 32 cores, 128 GB memory, 2 × 1788 GiB local SSDs

1.77

850.79

\[i2g\] 64 cores, 256 GB memory, 4 × 1788 GiB local SSDs

3.55

1,702.77

\[i3g\] 16 cores, 64 GB memory, 1 × 960 GiB local SSD

0.89

425.69

\[i3g\] 32 cores, 128 GB memory, 2 × 960 GiB local SSDs

1.77

850.79

\[i3g\] 52 cores, 192 GB memory, 3 × 960 GiB local SSDs

3.55

1,702.77

\[i2\] 16 cores, 64 GB memory, 2 × 1788 GiB local SSDs

1.02

491.84

\[i2\] 32 cores, 128 GB memory, 4 × 1788 GiB local SSDs

2.05

984.61

\[i2\] 64 cores, 256 GB memory, 8 × 1788 GiB local SSDs

4.10

1,968.30

\[i3\] 16 cores, 128 GB memory, 2 × 1920 GiB local SSDs

1.58

759.82

\[i3\] 32 cores, 256 GB memory, 4 × 1920 GiB local SSDs

3.17

1,519.55

\[i3\] 52 cores, 384 GB memory, 6 × 1920 GiB local SSDs

4.75

2,279.28

China (Ulanqab)

\[i2g\] 16 cores, 64 GB memory, 1 × 1788 GiB local SSD

1.06

514.15

\[i2g\] 32 cores, 128 GB memory, 2 × 1788 GiB local SSDs

2.13

1,027.75

\[i2g\] 64 cores, 256 GB memory, 4 × 1788 GiB local SSDs

4.26

2,056.59

\[i3g\] 16 cores, 64 GB memory, 1 × 960 GiB local SSD

0.97

465.08

\[i3g\] 32 cores, 128 GB memory, 2 × 960 GiB local SSDs

1.94

930.17

\[i3g\] 52 cores, 192 GB memory, 3 × 960 GiB local SSDs

2.91

1,395.25

\[i2\] 16 cores, 128 GB memory, 2 × 1788 GiB local SSDs

1.30

718.02

\[i2\] 32 cores, 256 GB memory, 4 × 1788 GiB local SSDs

2.61

1,436.99

\[i2\] 64 cores, 512 GB memory, 8 × 1788 GiB local SSDs

5.21

2,873.03

\[i3\] 16 cores, 128 GB memory, 2 × 1920 GiB local SSDs

1.42

683.78

\[i3\] 32 cores, 256 GB memory, 4 × 1920 GiB local SSDs

2.85

1,367.57

\[i3\] 52 cores, 384 GB memory, 6 × 1920 GiB local SSDs

4.27

2,051.35

Singapore

\[i3g\] 16 cores, 64 GB memory, 1 × 960 GiB local SSD

1.30

624.82

\[i3g\] 32 cores, 128 GB memory, 2 × 960 GiB local SSDs

2.60

1,249.05

\[i3g\] 52 cores, 192 GB memory, 3 × 960 GiB local SSDs

3.90

1,873.28

\[i2\] 16 cores, 128 GB memory, 2 × 1788 GiB local SSDs

1.77

881.12

\[i2\] 32 cores, 256 GB memory, 4 × 1788 GiB local SSDs

3.54

1,763.41

\[i2\] 64 cores, 512 GB memory, 8 × 1788 GiB local SSDs

7.07

3,528.01

\[i3\] 16 cores, 128 GB memory, 2 × 1920 GiB local SSDs

1.88

900.87

\[i3\] 32 cores, 256 GB memory, 4 × 1920 GiB local SSDs

3.75

1,801.14

\[i3\] 52 cores, 384 GB memory, 6 × 1920 GiB local SSDs

5.63

2,702.01

China (Hong Kong)

\[i2g\] 16 cores, 64 GB memory, 1 × 1788 GiB local SSD

1.26

627.42

\[i2g\] 32 cores, 128 GB memory, 2 × 1788 GiB local SSDs

2.51

1,253.83

\[i2g\] 64 cores, 256 GB memory, 4 × 1788 GiB local SSDs

5.04

2,512.22

\[i2\] 16 cores, 128 GB memory, 2 × 1788 GiB local SSDs

1.77

881.12

\[i2\] 32 cores, 256 GB memory, 4 × 1788 GiB local SSDs

3.54

1,763.41

\[i2\] 64 cores, 512 GB memory, 8 × 1788 GiB local SSDs

7.07

3,528.01

US (Silicon Valley)

\[i2\] 16 cores, 128 GB memory, 2 × 1788 GiB local SSDs

1.51

747.13

\[i2\] 32 cores, 256 GB memory, 4 × 1788 GiB local SSDs

3.01

1,494.27

\[i2\] 64 cores, 512 GB memory, 8 × 1788 GiB local SSDs

6.02

2,988.53

US (Virginia)

\[i2g\] 16 cores, 64 GB memory, 1 × 1788 GiB local SSD

0.94

464.97

\[i2g\] 32 cores, 128 GB memory, 2 × 1788 GiB local SSDs

1.87

929.94

\[i2g\] 64 cores, 256 GB memory, 4 × 1788 GiB local SSDs

3.75

1,859.87

\[i3g\] 16 cores, 64 GB memory, 1 × 960 GiB local SSD

0.93

461.13

\[i3g\] 32 cores, 128 GB memory, 2 × 960 GiB local SSDs

1.86

922.26

\[i3g\] 52 cores, 192 GB memory, 3 × 960 GiB local SSDs

2.79

1,383.39

\[i2\] 16 cores, 128 GB memory, 2 × 1788 GiB local SSDs

1.31

649.20

\[i2\] 32 cores, 256 GB memory, 4 × 1788 GiB local SSDs

2.62

1,298.40

\[i2\] 64 cores, 512 GB memory, 8 × 1788 GiB local SSDs

5.23

2,596.80

\[i3\] 16 cores, 128 GB memory, 2 × 1920 GiB local SSDs

1.40

692.52

\[i3\] 32 cores, 256 GB memory, 4 × 1920 GiB local SSDs

2.79

1,385.03

\[i3\] 52 cores, 384 GB memory, 6 × 1920 GiB local SSDs

4.19

2,077.00

Indonesia (Jakarta)

\[i2\] 16 cores, 128 GB memory, 2 × 1788 GiB local SSDs

1.58

887.70

\[i2\] 32 cores, 256 GB memory, 4 × 1788 GiB local SSDs

3.17

1,755.40

\[i2\] 64 cores, 512 GB memory, 8 × 1788 GiB local SSDs

6.34

3,550.80

Germany (Frankfurt)

\[i2g\] 16 cores, 64 GB memory, 1 × 1788 GiB local SSD

1.01

619.38

\[i2g\] 32 cores, 128 GB memory, 2 × 1788 GiB local SSDs

2.02

1,238.71

\[i2g\] 64 cores, 256 GB memory, 4 × 1788 GiB local SSDs

4.03

2477.50

\[i3g\] 16 cores, 64 GB memory, 1 × 960 GiB local SSD

1.10

658.23

\[i3g\] 32 cores, 128 GB memory, 2 × 960 GiB local SSDs

2.20

1,316.45

\[i3g\] 52 cores, 192 GB memory, 3 × 960 GiB local SSDs

3.29

1,974.68

\[i2\] 16 cores, 128 GB memory, 2 × 1788 GiB local SSDs

1.42

873.80

\[i2\] 32 cores, 256 GB memory, 4 × 1788 GiB local SSDs

2.83

1,747.60

\[i2\] 64 cores, 512 GB memory, 8 × 1788 GiB local SSDs

5.66

3,495.20

\[i3\] 16 cores, 128 GB memory, 2 × 1920 GiB local SSDs

1.49

892.05

\[i3\] 32 cores, 256 GB memory, 4 × 1920 GiB local SSDs

2.97

1,784.10

\[i3\] 52 cores, 384 GB memory, 6 × 1920 GiB local SSDs

4.46

2,676.15

## Large-capacity storage

**Region**

**BE specifications**

**Price (USD/node/hour)**

**Price (USD/node/month)**

China (Beijing)

China (Shanghai)

China (Shenzhen)

China (Hangzhou)

China (Qingdao)

\[d2s\] 20 cores, 88 GB memory, 8 × 7300 GiB local HDDs

2.83

818.25

\[d2s\] 40 cores, 176 GB memory, 15 × 7300 GiB local HDDs

5.66

1,636.50

\[d2s\] 80 cores, 352 GB memory, 30 × 7300 GiB local HDDs

11.32

3,272.64

China (Zhangjiakou)

\[d2s\] 20 cores, 88 GB memory, 8 × 7300 GiB local HDDs

2.55

736.42

\[d2s\] 40 cores, 176 GB memory, 15 × 7300 GiB local HDDs

5.10

1,472.85

\[d2s\] 80 cores, 352 GB memory, 30 × 7300 GiB local HDDs

10.19

2,945.38

China (Ulanqab)

\[d2s\] 20 cores, 88 GB memory, 8 × 7300 GiB local HDDs

2.55

736.42

\[d2s\] 40 cores, 176 GB memory, 15 × 7300 GiB local HDDs

5.10

1,472.85

\[d2s\] 80 cores, 352 GB memory, 30 × 7300 GiB local HDDs

10.19

2,945.38

Singapore

\[d2s\] 20 cores, 88 GB memory, 8 × 7300 GiB local HDDs

4.07

1,176.05

\[d2s\] 40 cores, 176 GB memory, 15 × 7300 GiB local HDDs

8.14

2,352.11

\[d2s\] 80 cores, 352 GB memory, 30 × 7300 GiB local HDDs

16.28

4,703.86

China (Hong Kong)

\[d2s\] 20 cores, 88 GB memory, 8 × 7300 GiB local HDDs

3.98

1,150.93

\[d2s\] 40 cores, 176 GB memory, 15 × 7300 GiB local HDDs

7.96

2,301.51

\[d2s\] 80 cores, 352 GB memory, 30 × 7300 GiB local HDDs

15.93

4,603.01

US (Virginia)

\[d2s\] 20 cores, 88 GB memory, 8 × 7300 GiB local HDDs

2.84

820.23

\[d2s\] 40 cores, 176 GB memory, 15 × 7300 GiB local HDDs

5.68

1,640.46

\[d2s\] 80 cores, 352 GB memory, 30 × 7300 GiB local HDDs

11.35

3,280.60

Germany (Frankfurt)

\[d2s\] 20 cores, 88 GB memory, 8 × 7300 GiB local HDDs

3.38

1,216.44

\[d2s\] 40 cores, 176 GB memory, 15 × 7300 GiB local HDDs

6.76

2,432.88

\[d2s\] 80 cores, 352 GB memory, 30 × 7300 GiB local HDDs

13.52

4,865.74

### **Cloud disk storage fees**

#### **Pay-as-you-go**

**Region**

**Storage price (USD/GB/hour)**

**PL0 ESSD**

**PL1 ESSD**

**PL2 ESSD**

**PL3 ESSD**

China (Beijing)

China (Shanghai)

China (Shenzhen)

China (Hangzhou)

China (Qingdao)

China (Zhangjiakou)

0.00015900

0.00031900

0.00063800

0.00127500

China (Ulanqab)

0.00015900

0.00031900

0.00063800

0.00127500

Singapore

0.00012700

0.00025300

0.00050600

0.00101300

China (Hong Kong)

0.00013900

0.00015900

0.00015900

0.00015900

US (Silicon Valley)

0.00012700

0.00025300

0.00050600

0.00101300

US (Virginia)

0.00010600

0.00021100

0.00042200

0.00084400

Germany (Frankfurt)

0.00012560

0.00025120

0.00050240

0.00100480

Indonesia (Jakarta)

0.00012660

0.00025320

0.00050640

0.00101280

Japan (Tokyo)

0.00012660

0.00025320

0.00050640

0.00101280

#### **Subscription**

**Region**

**Storage price (USD/GB/month)**

**PL0 ESSD**

**PL1 ESSD**

**PL2 ESSD**

**PL3 ESSD**

China (Beijing)

China (Shanghai)

China (Shenzhen)

China (Hangzhou)

China (Qingdao)

China (Zhangjiakou)

0.0765

0.1530

0.3060

0.6120

China (Ulanqab)

0.0765

0.1530

0.3060

0.6120

Singapore

0.0760

0.1520

0.3040

0.6080

China (Hong Kong)

0.0836

0.1672

0.3344

0.6688

US (Silicon Valley)

0.0760

0.1520

0.3040

0.6080

US (Virginia)

0.0633

0.1266

0.2532

0.5064

Germany (Frankfurt)

0.0753

0.1506

0.3012

0.6024

Indonesia (Jakarta)

0.076

0.1520

0.3040

0.6080

Japan (Tokyo)

0.076

0.1520

0.3040

0.6080

### **Elastic ephemeral disk fees**

#### Pay-as-you-go

**Region**

**Storage price (USD/GB/hour)**

**Standard Edition**

**Premium Edition**

China (Beijing)

China (Shanghai)

China (Hangzhou)

Singapore

0.000118

0.000236

#### Subscription

**Region**

**Storage price (USD/GB/hour)**

**Standard Edition**

**Premium Edition**

China (Beijing)

China (Shanghai)

China (Hangzhou)

Singapore

0.056604

0.113208

### **Data storage fees**

**Region**

**Price (USD/GB/hour)**

China (Beijing)

China (Shanghai)

China (Shenzhen)

China (Hangzhou)

China (Qingdao)

China (Zhangjiakou)

0.000036041667

Singapore

0.000035416667

China (Hong Kong)

0.000035416667

China (Ulanqab)

0.000036041667

US (Virginia)

0.000033333333

US (Silicon Valley)

0.000033333333

Germany (Frankfurt)

0.000035416667

Indonesia (Jakarta)

0.000035416667

Japan (Tokyo)

0.000035416667

### **Multi-zone data storage fees**

**Region**

**Price (USD/GB/hour)**

China (Beijing)

China (Shanghai)

China (Shenzhen)

China (Hangzhou)

China (Qingdao)

China (Zhangjiakou)

0.0000483333

Singapore

0.0000416667

China (Hong Kong)

0.0000416667

China (Ulanqab)

0.0000483333

US (Virginia)

0.0000416667

US (Silicon Valley)

0.0000416667

Germany (Frankfurt)

0.0000416667

Indonesia (Jakarta)

0.0000416667

Japan (Tokyo)

0.0000416667

### **Data backup fees**

**Region**

**Backup price (USD/GB/hour)**

China (Qingdao)

0.000040277800

China (Beijing)

0.000040277800

China (Zhangjiakou)

0.000040277800

China (Ulanqab)

0.000040277800

China (Hangzhou)

0.000040277800

China (Shanghai)

0.000040277800

China (Shenzhen)

0.000040277800

Singapore

0.000034722200

China (Hong Kong)

0.000034722200

US (Silicon Valley)

0.000034722200

US (Virginia)

0.000034722200

Germany (Frankfurt)

0.000034722200

Indonesia (Jakarta)

0.000034722200

Japan (Tokyo)

0.000034722200

## Billing methods

**Billing method**

**Description**

[Subscription](/help/en/emr/emr-serverless-starrocks/product-overview/subscription)

Subscription is an upfront billing method. You pay for instances when you purchase them.

This billing method is ideal for long-term needs and is more cost-effective than pay-as-you-go. Longer subscription durations provide greater discounts. You can request a self-service refund for subscription instances. For more information, see [Unsubscription rules for the international site](/help/en/user-center/refund-rules#main-2277885).

**Important**

You cannot change the billing method of an instance from subscription to pay-as-you-go.

[Pay-as-you-go](/help/en/emr/emr-serverless-starrocks/product-overview/pay-as-you-go)

Pay-as-you-go is a post-paid billing method. The system generates a bill each hour based on the instance specifications. The fee is then deducted from your Alibaba Cloud account.

This billing method is suitable for short-term needs. For example, create a pay-as-you-go instance for testing. Delete the instance immediately after use to save costs.

**Important**

Computing resources are billed on an hourly basis even if no tasks are running in the instance.
