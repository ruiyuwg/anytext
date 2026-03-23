This topic describes the default read weights of read-only RDS instances of ApsaraDB RDS for MySQL instances that run RDS High-availability Edition and secondary nodes in ApsaraDB RDS for MySQL clusters regardless of the instance types. An ApsaraDB RDS for MySQL cluster refers to an ApsaraDB RDS for MySQL instance that runs RDS Cluster Edition. If you set the Read Weight Distribution parameter to Automatic when you create a database proxy endpoint, you can view the default read weights in this topic.

## Default read weights

The following tables describe the default read weights of read-only RDS instances that run RDS High-availability Edition and secondary nodes in an RDS cluster.

**Note**

For more information about the instance types of read-only RDS instances, see [Instance types for standard read-only ApsaraDB RDS for MySQL instances (original x86 architecture)](/help/en/rds/apsaradb-rds-for-mysql/read-only-apsaradb-rds-for-mysql-instance-types) and [Instance types for YiTian read-only ApsaraDB RDS for MySQL instances (original ARM architecture)](/help/en/rds/apsaradb-rds-for-mysql/read-only-apsaradb-rds-for-mysql-instance-types-5).

### **RDS High-availability Edition**

#### Standard RDS instances on RDS High-availability Edition

**Standard RDS instances that run RDS High-availability Edition and use local disks**

**Instance family**

**Instance type**

**Number of CPU cores and memory capacity**

**Read weight**

General-purpose instance family

rds.mysql.t1.small

1 core, 1 GB

100

rds.mysql.s1.small

1 core, 2 GB

100

rds.mysql.s2.large

2 cores, 4 GB

200

rds.mysql.s2.xlarge

2 cores, 8 GB

200

rds.mysql.s3.large

4 cores, 8 GB

400

rds.mysql.m1.medium

4 cores, 16 GB

400

rds.mysql.c1.large

8 cores, 16 GB

800

rds.mysql.c1.xlarge

8 cores, 32 GB

800

rds.mysql.c2.xlarge

16 cores, 64 GB

1,600

rds.mysql.c2.xlp2

16 cores, 96 GB

1,600

Dedicated instance family (with a large memory capacity)

mysqlro.x8.medium.1

2 cores, 16 GB

200

mysqlro.x8.large.1

4 cores, 32 GB

400

mysqlro.x8.xlarge.1

8 cores, 64 GB

800

mysqlro.x8.2xlarge.1

16 cores, 128 GB

1,600

mysqlro.x8.4xlarge.1

32 cores, 256 GB

1,600

mysqlro.x8.8xlarge.1

64 cores, 512 GB

1,600

Dedicated instance family (with a large number of CPU cores)

mysqlro.x4.large.1

4 cores, 16 GB

200

mysqlro.x4.xlarge.1

8 cores, 32 GB

400

mysqlro.x4.2xlarge.1

16 cores, 64 GB

800

mysqlro.x4.4xlarge.1

32 cores, 128 GB

1,600

Dedicated host instance family

rds.mysql.st.h43

60 cores, 470 GB

6,000

rds.mysql.st.v52

90 cores, 720 GB

3,000

**Standard RDS instances that run RDS High-availability Edition and use cloud disks**

**Instance family**

**Instance type**

**Number of CPU cores and memory capacity**

**Read weight**

General-purpose instance family

mysqlro.n2.small.1c

1 core, 2 GB

100

Dedicated instance family

mysqlro.x2.medium.1c

2 cores, 4 GB

200

mysqlro.x2.large.1c

4 cores, 8 GB

400

mysqlro.x2.xlarge.1c

8 cores, 16 GB

800

mysqlro.x2.3large.1c

12 cores, 24 GB

1,200

mysqlro.x2.2xlarge.1c

16 cores, 32 GB

1,600

mysqlro.x2.3xlarge.1c

24 cores, 48 GB

2,400

mysqlro.x2.4xlarge.1c

32 cores, 64 GB

3,200

mysqlro.x2.13large.1c

52 cores, 96 GB

5,200

mysqlro.x2.13xlarge.1c

104 cores, 192 GB

10,400

mysqlro.x4.medium.1c

2 cores, 8 GB

200

mysqlro.x4.large.1c

4 cores, 16 GB

400

mysqlro.x4.xlarge.1c

8 cores, 32 GB

800

mysqlro.x4.3large.1c

12 cores, 48 GB

2,400

mysqlro.x4.2xlarge.1c

16 cores, 64 GB

1,600

mysqlro.x4.3xlarge.1c

24 cores, 96 GB

2,400

mysqlro.x4.4xlarge.1c

32 cores, 128 GB

3,200

mysqlro.x4.13large.1c

52 cores, 192 GB

10,400

mysqlro.x4.13xlarge.1c

104 cores, 384 GB

10,400

mysqlro.x8.medium.1c

2 cores, 16 GB

200

mysqlro.x8.large.1c

4 cores, 32 GB

400

mysqlro.x8.xlarge.1c

8 cores, 64 GB

800

mysqlro.x8.3large.1c

12 cores, 96 GB

1,200

mysqlro.x8.2xlarge.1c

16 cores, 128 GB

1,600

mysqlro.x8.3xlarge.1c

24 cores, 192 GB

2,400

mysqlro.x8.4xlarge.1c

32 cores, 256 GB

3,200

mysqlro.x8.13large.1c

52 cores, 384 GB

5,200

mysqlro.x8.8xlarge.1c

64 cores, 512 GB

5,600

mysqlro.x8.13xlarge.1c

104 cores, 768 GB

10,400

#### **YiTian RDS instances on RDS High-availability Edition**

**YiTian RDS instances that run RDS High-availability Edition and use cloud disks**

**Instance family**

**Instance type**

**Number of CPU cores and memory capacity**

**Read weight**

General-purpose instance family

mysqlro.n2m.small.1c

1 core, 2 GB

100

mysqlro.n2m.medium.1c

2 cores, 4 GB

200

mysqlro.n4m.medium.1c

2 cores, 8 GB

200

mysqlro.n8m.medium.1c

2 cores, 16 GB

200

mysqlro.n2m.large.1c

4 cores, 8 GB

400

mysqlro.n4m.large.1c

4 cores, 16 GB

400

mysqlro.n8m.large.1c

4 cores, 32 GB

400

mysqlro.n2m.xlarge.1c

8 cores, 16 GB

800

mysqlro.n4m.xlarge.1c

8 cores, 32 GB

800

mysqlro.n8m.xlarge.1c

8 cores, 64 GB

800

Dedicated instance family

mysqlro.x4m.medium.1c

2 cores, 8 GB

200

mysqlro.x8m.medium.1c

2 cores, 16 GB

200

mysqlro.x2m.large.1c

4 cores, 8 GB

400

mysqlro.x4m.large.1c

4 cores, 16 GB

400

mysqlro.x8m.large.1c

4 cores, 32 GB

400

mysqlro.x2m.xlarge.1c

8 cores, 16 GB

800

mysqlro.x4m.xlarge.1c

8 cores, 32 GB

800

mysqlro.x8m.xlarge.1c

8 cores, 64 GB

800

mysqlro.x2m.2xlarge.1c

16 cores, 32 GB

1,600

mysqlro.x4m.2xlarge.1c

16 cores, 64 GB

1,600

mysqlro.x8m.2xlarge.1c

16 cores, 128 GB

1,600

mysqlro.x2m.4xlarge.1c

32 cores, 64 GB

3,200

mysqlro.x4m.4xlarge.1c

32 cores, 128 GB

3,200

mysqlro.x8m.4xlarge.1c

32 cores, 256 GB

3,200

mysqlro.x4m.8xlarge.1c

64 cores, 256 GB

5,600

mysqlro.x8m.8xlarge.1c

64 cores, 512 GB

5,600

### RDS Cluster Edition (cloud disks)

#### Standard RDS instances on RDS Cluster Edition

**Standard RDS instances that run RDS Cluster Edition and use general-purpose instance types**

**Instance type**

**Number of CPU cores and memory capacity**

**Read weight**

mysql.n2.medium.xc

2 cores, 4 GB

200

mysql.n4.medium.xc

2 cores, 8 GB

200

mysql.n8.medium.xc

2 cores, 16 GB

200

mysql.n2.large.xc

4 cores, 8 GB

400

mysql.n4.large.xc

4 cores, 16 GB

400

mysql.n8.large.xc

4 cores, 32 GB

400

mysql.n2.xlarge.xc

8 cores, 16 GB

800

mysql.n4.xlarge.xc

8 cores, 32 GB

800

mysql.n8.xlarge.xc

8 cores, 64 GB

800

**Standard RDS instances that run RDS Cluster Edition and use dedicated instance types**

**Instance type**

**Number of CPU cores and memory capacity**

**Read weight**

mysql.x2.medium.xc

2 cores, 4 GB

200

mysql.x4.medium.xc

2 cores, 8 GB

200

mysql.x8.medium.xc

2 cores, 16 GB

200

mysql.x2.large.xc

4 cores, 8 GB

400

mysql.x4.large.xc

4 cores, 16 GB

400

mysql.x8.large.xc

4 cores, 32 GB

400

mysql.x2.xlarge.xc

8 cores, 16 GB

800

mysql.x4.xlarge.xc

8 cores, 32 GB

800

mysql.x8.xlarge.xc

8 cores, 64 GB

800

mysql.x2.3large.xc

12 cores, 24 GB

1,200

mysql.x4.3large.xc

12 cores, 48 GB

1,200

mysql.x8.3large.xc

12 cores, 96 GB

1,200

mysql.x2.2xlarge.xc

16 cores, 32 GB

1,600

mysql.x4.2xlarge.xc

16 cores, 64 GB

1,600

mysql.x8.2xlarge.xc

16 cores, 128 GB

1,600

mysql.x2.3xlarge.xc

24 cores, 48 GB

2,400

mysql.x4.3xlarge.xc

24 cores, 96 GB

2,400

mysql.x8.3xlarge.xc

24 cores, 192 GB

2,400

mysql.x2.4xlarge.xc

32 cores, 64 GB

3,200

mysql.x4.4xlarge.xc

32 cores, 128 GB

3,200

mysql.x8.4xlarge.xc

32 cores, 256 GB

3,200

mysql.x2.13large.xc

52 cores, 96 GB

5,200

mysql.x4.13large.xc

52 cores, 192 GB

5,200

mysql.x8.13large.xc

52 cores, 384 GB

5,200

mysql.x8.8xlarge.xc

64 cores, 512 GB

6,400

mysql.x2.13xlarge.xc

104 cores, 192 GB

10,400

mysql.x4.13xlarge.xc

104 cores, 384 GB

10,400

mysql.x8.13xlarge.xc

104 cores, 768 GB

10,400

#### **YiTian RDS instances on RDS Cluster Edition**

**YiTian RDS instances that run RDS Cluster Edition and use general-purpose instance types**

**Instance type**

**Number of CPU cores and memory capacity**

**Read weight**

mysql.n2e.small.xc

1 core, 2 GB

100

mysql.n2e.medium.xc

2 cores, 4 GB

200

mysql.n4e.medium.xc

2 cores, 8 GB

200

mysql.n8e.medium.xc

2 cores, 16 GB

200

mysql.n2e.large.xc

4 cores, 8 GB

400

mysql.n4e.large.xc

4 cores, 16 GB

400

mysql.n8e.large.xc

4 cores, 32 GB

400

mysql.n2e.xlarge.xc

8 cores, 16 GB

800

mysql.n4e.xlarge.xc

8 cores, 32 GB

800

mysql.n8e.xlarge.xc

8 cores, 64 GB

800

**YiTian RDS instances that run RDS Cluster Edition and use dedicated instance types**

**Instance type**

**Number of CPU cores and memory capacity**

**Read weight**

mysql.x4e.medium.xc

2 cores, 8 GB

200

mysql.x8e.medium.xc

2 cores, 16 GB

200

mysql.x2e.large.xc

4 cores, 8 GB

400

mysql.x4e.large.xc

4 cores, 16 GB

400

mysql.x8e.large.xc

4 cores, 32 GB

400

mysql.x2e.xlarge.xc

8 cores, 16 GB

800

mysql.x4e.xlarge.xc

8 cores, 32 GB

800

mysql.x8e.xlarge.xc

8 cores, 64 GB

800

mysql.x2e.2xlarge.xc

16 cores, 32 GB

1,600

mysql.x4e.2xlarge.xc

16 cores, 64 GB

1,600

mysql.x8e.2xlarge.xc

16 cores, 128 GB

1,600

mysql.x2e.4xlarge.xc

32 cores, 64 GB

3,200

mysql.x4e.4xlarge.xc

32 cores, 128 GB

3,200

mysql.x8e.4xlarge.xc

32 cores, 256 GB

3,200

mysql.x2e.8xlarge.xc

64 cores, 128 GB

6,400

mysql.x4e.8xlarge.xc

64 cores, 256 GB

5,600

mysql.x8e.8xlarge.xc

64 cores, 512 GB

6,400
