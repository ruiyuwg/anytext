The compute nodes of PolarDB for MySQL Cluster Edition and Multi-master Cluster (Limitless) are classified into two types: General-purpose and Dedicated. This topic describes the differences between the two types of compute nodes.

## Compute node types

**Compute node type**

**Description**

**Use scenario**

Dedicated Instance Types

-   A dedicated cluster occupies all allocated compute resources such as CPUs.
    
-   The cluster does not share compute resources with other clusters that run on the same server. This improves the reliability and stability of the cluster.
    

Scenarios in which databases are the key component of business systems that require high reliability, such as finance, e-commerce, public service, and medium- or large-scale Internet services.

General-purpose Instance Types

-   Idle compute resources such as CPUs are shared among clusters that run on the same server.
    
-   Resource sharing allows you to deploy a large number of clusters at low costs.
    

Scenarios in which cost-effectiveness is prioritized.

### Specifications and prices of Cluster Edition compute nodes

The following table describes the specifications and prices of General-purpose and Dedicated compute nodes in a PolarDB for MySQL cluster of Cluster Edition.

**Note**

-   The prices of a single compute node in a PolarDB for MySQL cluster of Cluster Edition that is deployed in the Chinese mainland are listed. For more information about the pricing of compute nodes in different regions, see [Pay-as-you-go prices of compute nodes](/help/en/polardb/polardb-for-mysql/billing-rules-of-pay-as-you-go-compute-nodes#concept-2035314).
    
-   Maximum IOPS values are theoretical values. It is not guaranteed that these nominal values can be accomplished under any conditions.
    
-   Clusters in a global database network (GDN) do not support specifications of 2 cores and 4 GB of memory or 2 cores and 8 GB of memory.
    

**CPU and memory**

**Compute node type**

**Specification**

**Price per node**

**Node instance type**

**Maximum storage capacity**

**Maximum number of connections**

**PSL4 maximum IOPS**

**PSL5 maximum IOPS**

**I/O bandwidth**

**Pay-as-you-go**

**Subscription**

2 cores, 4 GB memory

Dedicated Instance Types

N/A

General-purpose Instance Types

polar.mysql.g2.medium

100 TB

1,800

4,000

8,000

1 Gbps

USD 0.081/hour

USD 39/month

2 cores, 8 GB memory

Dedicated Instance Types

polar.mysql.x4.medium

100 TB

6,000

8,000

16,000

1 Gbps

USD 0.091/hour

USD 44/month

General-purpose Instance Types

polar.mysql.g4.medium

100 TB

2,000

8,000

16,000

1 Gbps

USD 0.091/hour

USD 44/month

2 cores, 16 GB memory

Dedicated Instance Types

polar.mysql.x8.medium

100 TB

8,000

18,000

36,000

2 Gbps

USD 0.266/hour

USD 128/month

General-purpose Instance Types

N/A

4 cores, 8 GB memory

Dedicated Instance Types

N/A

General-purpose Instance Types

polar.mysql.g2.large

100 TB

3,000

15,000

30,000

2 Gbps

USD 0.154/hour

USD 74/month

4 cores, 16 GB memory

Dedicated Instance Types

polar.mysql.x4.large

100 TB

8,000

32,000

64,000

4 Gbps

USD 0.323/hour

USD 155/month

General-purpose Instance Types

polar.mysql.g4.large

100 TB

6,000

21,000

42,000

2 Gbps

USD 0.275/hour

USD 132/month

4 cores, 32 GB memory

Dedicated Instance Types

polar.mysql.x8.large

100 TB

8,000

36,000

72,000

4 Gbps

USD 1.525/hour

USD 252/month

General-purpose Instance Types

N/A

8 cores, 16 GB memory

Dedicated Instance Types

N/A

General-purpose Instance Types

polar.mysql.g2.xlarge

100 TB

6,000

18,000

36,000

2 Gbps

USD 0.339/hour

USD 163/month

8 cores, 32 GB memory

Dedicated Instance Types

polar.mysql.x4.xlarge

100 TB

10,000

48,000

96,000

8 Gbps

USD 0.646/hour

USD 310/month

General-purpose Instance Types

polar.mysql.g4.xlarge

100 TB

10,000

27,000

54,000

4 Gbps

USD 0.533/hour

USD 256/month

8 cores, 64 GB memory

Dedicated Instance Types

polar.mysql.x8.xlarge

100 TB

16,000

50,000

108,000

10 Gbps

USD 1.033/hour

USD 496/month

General-purpose Instance Types

N/A

16 cores and 64 GB

Dedicated Instance Types

polar.mysql.x4.2xlarge

100 TB

32,000

50,000

192,000

16 Gbps

USD 1.290/hour

USD 619/month

General-purpose Instance Types

polar.mysql.g4.2xlarge

100 TB

16,000

31,500

63,000

4 Gbps

USD 1.049/hour

USD 504/month

16 cores, 96 GB memory

Dedicated Instance Types

N/A

General-purpose Instance Types

polar.mysql.g6.2xlarge

100 TB

16,000

31,500

63,000

8 Gbps

USD 1.303/hour

USD 635/month

16 cores, 128 GB memory

Dedicated Instance Types

polar.mysql.x8.2xlarge

100 TB

32,000

50,000

192,000

16 Gbps

USD 2.064/hour

USD 991/month

General-purpose Instance Types

polar.mysql.g8.2xlarge

100 TB

16,000

31,500

63,000

8 Gbps

USD 1.676/hour

USD 1,592/month

32 cores, 128 GB memory

Dedicated Instance Types

polar.mysql.x4.4xlarge

100 TB

64,000

80,000

288,000

10 Gbps

USD 2.580/hour

USD 1,238/month

General-purpose Instance Types

polar.mysql.g4.4xlarge

100 TB

32,000

42,000

84,000

8 Gbps

USD 2.098/hour

USD 1,008/month

32 cores, 256 GB memory

Dedicated Instance Types

polar.mysql.x8.4xlarge

300 TB

64,000

80,000

288,000

24 Gbps

USD 4.128/hour

USD 1,982/month

General-purpose Instance Types

N/A

64 cores, 512 GB memory

Dedicated Instance Types

polar.mysql.x8.8xlarge

500 TB

64,000

100,000

288,000

24 Gbps

USD 8.256/hour

USD 3,963/month

General-purpose Instance Types

N/A

88 cores, 710 GB memory

Dedicated Instance Types

polar.mysql.x8.12xlarge

500 TB

100,000

150,000

384,000

32 Gbps

USD 11.351/hour

USD 5,449/month

General-purpose Instance Types

N/A

### Specifications and prices of Multi-master Cluster (Limitless) compute nodes

The following table describes the specifications and prices of general-purpose and dedicated compute nodes in a PolarDB for MySQL cluster of Multi-master Cluster (Limitless) .

**Note**

-   The prices of a single compute node in a PolarDB for MySQL cluster of Multi-master Cluster (Limitless) that is deployed in the Chinese mainland are listed. For more information about the pricing of compute nodes in different regions, see [Pay-as-you-go prices of compute nodes](/help/en/polardb/polardb-for-mysql/billing-rules-of-pay-as-you-go-compute-nodes#concept-2035314).
    
-   Maximum IOPS values are theoretical values. It is not guaranteed that these nominal values can be accomplished under any conditions.
    

**CPU and memory**

**Compute node type**

**Specification**

**Price per node**

**Node instance type**

**Maximum storage capacity**

**Maximum number of connections**

**PSL4 maximum IOPS**

**PSL5 maximum IOPS**

**I/O bandwidth**

**Pay-as-you-go**

**Subscription**

8 cores, 16 GB memory

Dedicated Instance Types

N/A

General-purpose Instance Types

polar.mysql.mmg2.xlarge

100 TB

6,000

18,000

36,000

2 Gbps

USD 0.339/hour

USD 163/month

8 cores, 32 GB memory

Dedicated Instance Types

polar.mysql.mmx4.xlarge

100 TB

10,000

48,000

96,000

8 Gbps

USD 0.646/hour

USD 310/month

General-purpose Instance Types

polar.mysql.mmg4.xlarge

100 TB

10,000

27,000

54,000

4 Gbps

USD 0.533/hour

USD 256/month

8 cores, 64 GB memory

Dedicated Instance Types

polar.mysql.mmx8.xlarge

100 TB

16,000

50,000

108,000

10 Gbps

USD 1.033/hour

USD 496/month

General-purpose Instance Types

N/A

16 cores and 64 GB

Dedicated Instance Types

polar.mysql.mmx4.2xlarge

100 TB

32,000

50,000

192,000

16 Gbps

USD 1.290/hour

USD 619/month

General-purpose Instance Types

polar.mysql.mmg4.2xlarge

100 TB

16,000

31,500

63,000

4 Gbps

USD 1.049/hour

USD 504/month

16 cores, 96 GB memory

Dedicated Instance Types

N/A

General-purpose Instance Types

polar.mysql.mmg6.2xlarge

100 TB

16,000

31,500

63,000

8 Gbps

USD 1.303/hour

USD 635/month

16 cores, 128 GB memory

Dedicated Instance Types

polar.mysql.mmx8.2xlarge

100 TB

32,000

50,000

192,000

16 Gbps

USD 2.064/hour

USD 991/month

General-purpose Instance Types

polar.mysql.mmg8.2xlarge

100 TB

16,000

31,500

63,000

8 Gbps

USD 1.676/hour

USD 796/month

32 cores, 128 GB memory

Dedicated Instance Types

polar.mysql.mmx4.4xlarge

100 TB

64,000

80,000

288,000

10 Gbps

USD 2.580/hour

USD 1,238/month

General-purpose Instance Types

polar.mysql.mmg4.4xlarge

100 TB

32,000

63,000

126,000

8 Gbps

USD 2.098/hour

USD 1,008/month

32 cores, 256 GB memory

Dedicated Instance Types

polar.mysql.mmx8.4xlarge

300 TB

64,000

80,000

288,000

24 Gbps

USD 4.128/hour

USD 1,982/month

General-purpose Instance Types

N/A

64 cores, 512 GB memory

Dedicated Instance Types

polar.mysql.mmx8.8xlarge

500 TB

64,000

100,000

288,000

24 Gbps

USD 8.256/hour

USD 3,963/month

General-purpose Instance Types

N/A

88 cores, 710 GB memory

Dedicated Instance Types

polar.mysql.mmx8.12xlarge

500 TB

100,000

150,000

384,000

32 Gbps

USD 11.351/hour

USD 5,449/month

General-purpose Instance Types

N/A
