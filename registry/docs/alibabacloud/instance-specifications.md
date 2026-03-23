This topic describes the instance types of hosts in ApsaraDB MyBase.

## Hosts in ApsaraDB MyBase for MySQL dedicated clusters (with local SSDs)

Host instance type

Instance family

CPU cores

Memory (GB)

Local storage (GiB)

Internal bandwidth (Gbit/s)

CPU model

rds.i2g.16xlarge

i2g, instance family with local SSDs

64

256

7,152

10

Intel Xeon(Skylake) Platinum 8163

rds.i2g.8xlarge

i2g, instance family with local SSDs

32

128

3,576

6

Intel Xeon(Skylake) Platinum 8163

rds.i2g.4xlarge

i2g, instance family with local SSDs

16

64

1,788

3

Intel Xeon(Skylake) Platinum 8163

rds.i2g.2xlarge

i2g, instance family with local SSDs

8

32

894

2

Intel Xeon(Skylake) Platinum 8163

rds.i2.16xlarge

i2, instance family with local SSDs

64

512

14,304

10

Intel Xeon(Skylake) Platinum 8163

rds.i2.8xlarge

i2, instance family with local SSDs

32

256

7,152

6

Intel Xeon(Skylake) Platinum 8163

rds.i2.4xlarge

i2, instance family with local SSDs

16

128

3,576

3

Intel Xeon(Skylake) Platinum 8163

rds.i2.2xlarge

i2, instance family with local SSDs

8

64

1,788

2

Intel Xeon(Skylake) Platinum 8163

rds.i2.xlarge

i2, instance family with local SSDs

4

32

894

1

Intel Xeon(Skylake) Platinum 8163

The following table describes the performance metrics of local SSDs.

Metric

rds.i2.xlarge and rds.i2g.2xlarge

Other i2 and i2g instance types

Instances of the highest specifications ①

Maximum capacity

894 GiB

1,788 GiB

8 × 1,788 GiB

Maximum read IOPS

150,000

300,000

1,500,000

Maximum read throughput

1 GB/s

2 GB/s

16 GB/s

Maximum write throughput

0.5 GB/s

1 GB/s

8 GB/s

Access latency

Within microseconds

① The values in the Instances of the highest specifications column represent the performance of rds.i2.16xlarge instances. These values represent the performance of local SSDs of the highest specifications in the i2 instance family.

## Hosts in ApsaraDB MyBase for MySQL or ApsaraDB MyBase for PostgreSQL dedicated clusters (with enhanced SSDs)

Host instance type

Instance family

CPU cores

Memory (GB)

Internal bandwidth (Gbit/s)

Storage IOPS

Disk bandwidth (Gbit/s)

CPU model

rds.ebmr6.26xlarge

ebmr6, memory-optimized ECS Bare Metal Instance family

104

768

32

210,000

16

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.ebmg6.26xlarge

ebmg6, general-purpose ECS Bare Metal Instance family

104

384

32

210,000

16

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.ebmc6.26xlarge

ebmc6, compute-optimized ECS Bare Metal Instance family

104

192

32

210,000

16

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.ebmr5s.24xlarge

ebmr5s, network-enhanced memory-optimized ECS Bare Metal Instance family

96

768

30

210,000

16

Intel Xeon(Skylake) Platinum 8163

rds.ebmg5s.24xlarge

ebmg5s, network-enhanced general-purpose ECS Bare Metal Instance family

96

384

30

210,000

16

Intel Xeon(Skylake) Platinum 8163

rds.ebmc5s.24xlarge

ebmc5s, network-enhanced compute-optimized ECS Bare Metal Instance family

96

192

30

210,000

16

Intel Xeon(Skylake) Platinum 8163

rds.ebmhfr6.20xlarge

ebmhfr6, memory-optimized ECS Bare Metal Instance family with high clock speeds

80

768

32

210,000

16

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.ebmhfg6.20xlarge

ebmhfg6, general-purpose ECS Bare Metal Instance family with high clock speeds

80

384

32

210,000

16

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.ebmhfc6.20xlarge

ebmhfc6, compute-optimized ECS Bare Metal Instance family with high clock speeds

80

192

32

210,000

16

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.r5.16xlarge

r5, memory-optimized instance family

64

512

20

N/A

N/A

Intel Xeon(Skylake) Platinum 8163 / Intel Xeon(Cascade Lake) Platinum 8269CY

rds.g5.16xlarge

g5, general-purpose instance family

64

256

20

N/A

N/A

Intel Xeon(Skylake) Platinum 8163 / Intel Xeon(Cascade Lake) Platinum 8269CY

rds.c5.16xlarge

c5, compute-optimized instance family

64

128

20

N/A

N/A

Intel Xeon(Skylake) Platinum 8163 / Intel Xeon(Cascade Lake) Platinum 8269CY

rds.r6.13xlarge

r6, memory-optimized instance family

52

384

12.5

100,000

8

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.g6.13xlarge

g6, general-purpose instance family

52

192

12.5

100,000

8

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.c6.13xlarge

c6, compute-optimized instance family

52

96

12.5

100,000

8

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.r6.8xlarge

r6, memory-optimized instance family

32

256

10

60,000

5

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.g6.8xlarge

g6, general-purpose instance family

32

128

10

60,000

5

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.c6.8xlarge

c6, compute-optimized instance family

32

64

10

60,000

5

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.r6.6xlarge

r6, memory-optimized instance family

24

192

10

50,000

4

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.g6.6xlarge

g6, general-purpose instance family

24

96

10

50,000

4

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.c6.6xlarge

c6, compute-optimized instance family

24

48

10

50,000

4

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.r6.4xlarge

r6, memory-optimized instance family

16

128

10

40,000

3

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.g6.4xlarge

g6, general-purpose instance family

16

64

10

40,000

3

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.c6.4xlarge

c6, compute-optimized instance family

16

32

10

40,000

3

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.r6.2xlarge

r6, memory-optimized instance family

8

64

8

25,000

2

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.g6.2xlarge

g6, general-purpose instance family

8

32

8

25,000

2

Intel Xeon(Cascade Lake) Platinum 8269CY

rds.c6.2xlarge

c6, compute-optimized instance family

8

16

8

25,000

2

Intel Xeon(Cascade Lake) Platinum 8269CY

## Hosts in ApsaraDB MyBase for SQL Server dedicated clusters (with enhanced SSDs)

Host instance type

Instance family

CPU cores

Memory (GB)

Internal bandwidth (Gbit/s)

Storage IOPS

Disk bandwidth (Gbit/s)

CPU model

mssql.cluster.host.c4xlarge

c6, compute-optimized instance family

16

32

10

40,000

3

Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.cluster.host.g4xlarge

g6, general-purpose instance family

16

64

10

40,000

3

Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.cluster.host.r4xlarge

r6, memory-optimized instance family

16

128

10

40,000

3

Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.cluster.host.g6xlarge

g6, general-purpose instance family

24

96

10

50,000

4

Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.cluster.host.r6xlarge

r6, memory-optimized instance family

24

192

10

50,000

4

Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.cluster.host.c8xlarge

c6, compute-optimized instance family

32

64

10

60,000

5

Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.cluster.host.g8xlarge

g6, general-purpose instance family

32

128

10

60,000

5

Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.cluster.host.r8xlarge

r6, memory-optimized instance family

32

256

10

60,000

5

Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.cluster.host.g16xlarge

g5, general-purpose instance family

64

256

20

N/A

N/A

Intel Xeon(Skylake) Platinum 8163 / Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.cluster.host.r16xlarge

r5, memory-optimized instance family

64

512

20

N/A

N/A

Intel Xeon(Skylake) Platinum 8163 / Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.host.c2xlarge

c6, compute-optimized instance family

8

16

8

25,000

2

Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.host.g2xlarge

g6, general-purpose instance family

8

32

8

25,000

2

Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.host.r2xlarge

r6, memory-optimized instance family

8

64

8

25,000

2

Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.host.g4xlarge

g6, general-purpose instance family

16

64

10

40,000

3

Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.host.r4xlarge

r6, memory-optimized instance family

16

128

10

40,000

3

Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.host.r6xlarge

r6, memory-optimized instance family

24

192

10

50,000

4

Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.host.r8xlarge

r6, memory-optimized instance family

32

256

10

60,000

5

Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.host.r16xlarge

r5, memory-optimized instance family

64

512

20

N/A

N/A

Intel Xeon(Skylake) Platinum 8163 / Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.cluster.host.eg20xlarge

ebmhfg6, general-purpose ECS Bare Metal Instance family with high clock speeds

80

384

32

210,000

16

Intel Xeon(Cascade Lake) Platinum 8269CY

mssql.cluster.host.er20xlarge

ebmhfr6, memory-optimized ECS Bare Metal Instance family with high clock speeds

80

768

32

210,000

16

Intel Xeon(Cascade Lake) Platinum 8269CY
