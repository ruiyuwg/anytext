ApsaraDB for MongoDB is developed based on the Apsara distributed system and a high-reliability storage engine, and is compatible with the MongoDB protocol. ApsaraDB for MongoDB uses a multi-node architecture to ensure high availability, and provides features such as elastic scaling, disaster recovery, backup and rollback, and performance optimization.

## Test environment

**Configuration item**

**ECS instance for stress testing**

**ApsaraDB for MongoDB instance that uses a physical server**

**ApsaraDB for MongoDB instance that uses cloud disks**

Region and zone

Hangzhou Zone H

Hangzhou Zone H

Hangzhou Zone H

Network type

VPC

VPC

VPC

Instance family

c6e, compute-optimized instance family with enhanced performance

General-purpose and dedicated

Dedicated

Instance type

ecs.c6e.2xlarge (8 cores, 16 GB)

A variety of specifications are available. For more information, see [Test results](/help/en/mongodb/test-results#section-gcb-b1f-ap4).

A variety of specifications are available. For more information, see [Test results](/help/en/mongodb/test-results#section-gcb-b1f-ap4).

Storage type

PL1 ESSDs

Local SSDs

PL1 ESSDs

Storage space

\-

500 GB

500 GB

Topology

\-

Standard replica set instance (three nodes: one primary node, one secondary node, and one hidden node)

Standard replica set instance (three nodes: one primary node, one secondary node, and one hidden node)

Image version

Alibaba Cloud Linux 3.2104 LTS 64-bit

3.10.0-327.ali2017.alios7.x86\_64

4.19.81-17.2.al7.x86\_64

Instance kernel version

\-

MongoDB 4.2 (baseline of minor version 4.2.13)

MongoDB 4.4 (baseline of minor version 4.4.1)

Consistency

\-

Default read/write concern

Default read/write concern

**Note**

If the ECS instance and the ApsaraDB for MongoDB instances are deployed in the same region and zone, the Round-Trip Time (RTT) is approximately 0.104 milliseconds.

## Test tool

Open-source YCSB 0.17.0 is used for stress testing.

**Note**

YCSB is a Java tool that can be used in performance testing for multiple databases. For more information about its installation and usage, see [YCSB](https://github.com/brianfrankcooper/YCSB/tree/master/mongodb).

## **Test procedure**

1.  Add the **Primary Private IP Address** of the ECS instance to a whitelist of the ApsaraDB for MongoDB instance that uses a physical server or one that uses cloud disks. For more information, see [Modify a whitelist for an instance](/help/en/mongodb/user-guide/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-1#concept-xpy-wcx-w2b).
    
    **Note**
    
    You can log on to the [ECS console](https://ecs.console.alibabacloud.com/#/server) and then view the **Primary Private IP Address** in the **Configuration Information** section of the **Instance Details** page.
    
2.  Connect to the ECS instance. For more information, see [Connect to the ECS instance](/help/en/ecs/user-guide/use-the-ecs-instance-in-the-console#4f4b28a3755kd).
    
3.  Use YCSB to load test data.
    
    ```
    ./bin/ycsb load mongodb -s -p workload=site.ycsb.workloads.CoreWorkload -p recordcount=1000000 -p mongodb.url="mongodb://test:****@dds-bp13e84d11****.mongodb.rds.aliyuncs.com:3717/admin" -threads 8
    ```
    
    Modify the following parameter values:
    
    -   `recordcount=1000000`: The total number of data records loaded to the ApsaraDB for MongoDB instance.
        
    -   `mongodb.url="mongodb://test:****@dds-bp13e84d11****.mongodb.rds.aliyuncs.com:3717/admin"`: The endpoint of the ApsaraDB for MongoDB instance. In this example, the database account is test and the database is admin.
        
        **Note**
        
        You can log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/) and then view instance endpoints in the **Internal Connections - VPC** section of the **Database Connections** page.
        
    -   `threads 8`: The number of concurrent threads on the client.
        
    
4.  Run the following test command to perform performance stress testing.
    
    ```
    ./bin/ycsb run mongodb -s -p workload=site.ycsb.workloads.CoreWorkload -p recordcount=1000000 -p operationcount=5000000 -p insertproportion=0 -p readproportion=50 -p updateproportion=50 -p requestdistribution=zipfian -p mongodb.url="mongodb://test:****@dds-bp13e84d11****.mongodb.rds.aliyuncs.com:3717/admin" -threads 8
    ```
    
    Modify the following parameter values:
    
    -   `recordcount=1000000`: The total number of data records loaded to the ApsaraDB for MongoDB instance.
        
    -   `operationcount=5000000`: The total number of read/write operations.
        
    -   `insertproportion=0`: The ratio of load operations.
        
    -   `readproportion=50`: The ratio of read operations.
        
    -   `updateproportion=50`: The ratio of update operations.
        
    -   `mongodb.url="mongodb://test:****@dds-bp13e84d11****.mongodb.rds.aliyuncs.com:3717/admin"`: The endpoint of the ApsaraDB for MongoDB instance. In this example, the database account is test and the database is admin.
        
        **Note**
        
        You can log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/) and then view instance endpoints in the **Internal Connections - VPC** section of the **Database Connections** page.
        
    -   `threads 8`: The number of concurrent threads on the client.
        
    

## **Test results**

### Scenarios

-   `r:w=100:0`: The ratio of read requests to write requests is 100:0.
    
-   `r:w=95:5`: The ratio of read requests to write requests is 95:5.
    
-   `r:w=50:50`: The ratio of read requests to write requests is 50:50.
    
-   `r:w=5:95`: The ratio of read requests to write requests is 5:95.
    
-   `r:w=0:100`: The ratio of read requests to write requests is 0:100.
    

### Parameters

-   `recordcount`: The total number of data records loaded to the ApsaraDB for MongoDB instance.
    
-   `operationcount`: The total number of read/write operations.
    
-   `threads`: The number of concurrent threads on the client.
    
-   `throughput`: The throughput of the ApsaraDB for MongoDB instance. Unit: Operation per second (OPS).
    
-   `RAL`: The average latency of read operations. Unit: microseconds (us).
    
-   `WAL`: The average latency of write operations. Unit: microseconds (us).
    

**Note**

In this topic, if `RAL` or `WAL` is set to 0, no read or write operations are involved.

The following sections show the test results and performance comparison between the ApsaraDB for MongoDB instance that uses a physical server and one that uses cloud disks at different read/write ratios.

### Instance that runs MongoDB 4.2 and uses a physical server

Load test data

**CPU:Memory**

**Instance specification**

**recordcount**

**threads**

**throughput**

**RAL**

**WAL**

1:2

1 core, 2 GB (general-purpose)

1000000

4

3589

0

1110

2 cores, 4 GB (general-purpose)

2000000

8

7629

0

521

4 cores, 8 GB (general-purpose)

4000000

16

24300

0

654

8 cores, 16 GB (general-purpose)

8000000

32

26745

0

1191

1:4

8 cores, 32 GB (general-purpose)

16000000

32

29090

0

1095

16 cores, 64 GB (general-purpose)

32000000

128

41098

0

3033

1:8

2 cores, 16 GB (dedicated)

8000000

8

6553

0

1217

4 cores, 32 GB (dedicated)

16000000

16

14526

0

1097

8 cores, 64 GB (dedicated)

32000000

32

35437

0

899

16 cores, 128 GB (dedicated)

64000000

160

60078

0

2658

r:w=100:0

**CPU:Memory**

**Instance specification**

**operationcount**

**threads**

**throughput**

**RAL**

**WAL**

1:2

1 core, 2 GB (general-purpose)

1000000

4

6387

623

0

2 cores, 4 GB (general-purpose)

2000000

8

12893

616

0

4 cores, 8 GB (general-purpose)

4000000

16

37016

427

0

8 cores, 16 GB (general-purpose)

8000000

32

48014

658

0

1:4

8 cores, 32 GB (general-purpose)

16000000

32

44251

1589

0

16 cores, 64 GB (general-purpose)

32000000

128

57252

2226

0

1:8

2 cores, 16 GB (dedicated)

8000000

8

12436

641

0

4 cores, 32 GB (dedicated)

16000000

16

20551

773

0

8 cores, 64 GB (dedicated)

32000000

32

50246

632

0

16 cores, 128 GB (dedicated)

64000000

160

66876

2385

0

r:w=95:5

**CPU:Memory**

**Instance specification**

**operationcount**

**threads**

**throughput**

**RAL**

**WAL**

1:2

1 core, 2 GB (general-purpose)

1000000

4

4556

864

1079

2 cores, 4 GB (general-purpose)

2000000

8

10391

757

914

4 cores, 8 GB (general-purpose)

4000000

16

34411

453

561

8 cores, 16 GB (general-purpose)

8000000

32

41095

763

925

1:4

8 cores, 32 GB (general-purpose)

16000000

32

39920

785

926

16 cores, 64 GB (general-purpose)

32000000

128

55148

2305

2381

1:8

2 cores, 16 GB (dedicated)

8000000

8

8869

871

1394

4 cores, 32 GB (dedicated)

16000000

16

18206

856

1192

8 cores, 64 GB (dedicated)

32000000

32

47111

664

861

16 cores, 128 GB (dedicated)

64000000

160

68801

2312

2449

r:w=50:50

**CPU:Memory**

**Instance specification**

**operationcount**

**threads**

**throughput**

**RAL**

**WAL**

1:2

1 core, 2 GB (general-purpose)

1000000

4

3062

1207

1399

2 cores, 4 GB (general-purpose)

2000000

8

6610

1128

1318

4 cores, 8 GB (general-purpose)

4000000

16

19743

743

864

8 cores, 16 GB (general-purpose)

8000000

32

22750

987

1809

1:4

8 cores, 32 GB (general-purpose)

16000000

32

21763

1010

1907

16 cores, 64 GB (general-purpose)

32000000

128

43498

2162

3696

1:8

2 cores, 16 GB (dedicated)

8000000

8

5680

1345

1930

4 cores, 32 GB (dedicated)

16000000

16

10470

1064

1971

8 cores, 64 GB (dedicated)

32000000

32

20427

790

2329

16 cores, 128 GB (dedicated)

64000000

160

29445

2944

7891

r:w=5:95

**CPU:Memory**

**Instance specification**

**operationcount**

**threads**

**throughput**

**RAL**

**WAL**

1:2

1 core, 2 GB (general-purpose)

1000000

4

2431

1511

1649

2 cores, 4 GB (general-purpose)

2000000

8

5336

1406

1608

4 cores, 8 GB (general-purpose)

4000000

16

14496

858

1110

8 cores, 16 GB (general-purpose)

8000000

32

14573

958

2253

1:4

8 cores, 32 GB (general-purpose)

16000000

32

13812

995

2377

16 cores, 64 GB (general-purpose)

32000000

128

20663

2831

6348

1:8

2 cores, 16 GB (dedicated)

8000000

8

4079

3201

8066

4 cores, 32 GB (dedicated)

16000000

16

7154

1080

2288

8 cores, 64 GB (dedicated)

32000000

32

12585

783

2626

16 cores, 128 GB (dedicated)

64000000

160

17083

4241

9615

r:w=0:100

**CPU:Memory**

**Instance specification**

**operationcount**

**threads**

**throughput**

**RAL**

**WAL**

1:2

1 core, 2 GB (general-purpose)

1000000

4

2429

0

1642

2 cores, 4 GB (general-purpose)

2000000

8

5238

0

1643

4 cores, 8 GB (general-purpose)

4000000

16

13794

0

1154

8 cores, 16 GB (general-purpose)

8000000

32

14566

0

2189

1:4

8 cores, 32 GB (general-purpose)

16000000

32

13485

0

2361

16 cores, 64 GB (general-purpose)

32000000

128

19758

0

6461

1:8

2 cores, 16 GB (dedicated)

8000000

8

3939

0

8097

4 cores, 32 GB (dedicated)

16000000

16

6940

0

2298

8 cores, 64 GB (dedicated)

32000000

32

12567

0

2539

16 cores, 128 GB (dedicated)

64000000

160

16325

0

9770

### Instance that runs MongoDB 4.4 and uses cloud disks

Load test data

**CPU:Memory**

**Instance specification**

**recordcount**

**threads**

**throughput**

**RAL**

**WAL**

1:2

4 cores, 8 GB (dedicated)

4000000

16

18235

0

871

8 cores, 16 GB (dedicated)

8000000

32

35643

0

891

16 cores, 32 GB (dedicated)

16000000

64

65345

0

971

1:4

2 cores, 8 GB (dedicated)

4000000

8

6613

0

1202

8 cores, 32 GB (dedicated)

16000000

64

45952

0

1385

16 cores, 64 GB (dedicated)

32000000

96

61973

0

1539

1:8

2 cores, 16 GB (dedicated)

8000000

8

6224

0

1280

4 cores, 32 GB (dedicated)

16000000

16

18603

0

857

r:w=100:0

**CPU:Memory**

**Instance specification**

**operationcount**

**threads**

**throughput**

**RAL**

**WAL**

1:2

4 cores, 8 GB (dedicated)

4000000

16

24945

634

0

8 cores, 16 GB (dedicated)

8000000

32

33270

938

0

16 cores, 32 GB (dedicated)

16000000

64

55703

1136

0

1:4

2 cores, 8 GB (dedicated)

4000000

8

10989

723

0

8 cores, 32 GB (dedicated)

16000000

64

36039

1740

0

16 cores, 64 GB (dedicated)

32000000

96

59960

1585

0

1:8

2 cores, 16 GB (dedicated)

8000000

8

11298

703

0

4 cores, 32 GB (dedicated)

16000000

16

24306

653

0

r:w=95:5

**CPU:Memory**

**Instance specification**

**operatiocount**

**threads**

**throughput**

**RAL**

**WAL**

1:2

4 cores, 8 GB (dedicated)

4000000

16

22471

797

1161

8 cores, 16 GB (dedicated)

8000000

32

29543

1064

1199

16 cores, 32 GB (dedicated)

16000000

64

53466

1178

1300

1:4

2 cores, 8 GB (dedicated)

4000000

8

8986

854

1480

8 cores, 32 GB (dedicated)

16000000

64

34128

1829

1970

16 cores, 64 GB (dedicated)

32000000

96

78363

1196

1420

1:8

2 cores, 16 GB (dedicated)

8000000

8

8806

867

1619

4 cores, 32 GB (dedicated)

16000000

16

20132

770

1181

r:w=50:50

**CPU:Memory**

**Instance specification**

**operationcount**

**threads**

**throughput**

**RAL**

**WAL**

1:2

4 cores, 8 GB (dedicated)

4000000

16

14127

1009

1238

8 cores, 16 GB (dedicated)

8000000

32

19887

1496

1670

16 cores, 32 GB (dedicated)

16000000

64

23120

2680

2819

1:4

2 cores, 8 GB (dedicated)

4000000

8

5132

1370

1735

8 cores, 32 GB (dedicated)

16000000

64

18929

2930

3615

16 cores, 64 GB (dedicated)

32000000

96

25612

3675

4363

1:8

2 cores, 16 GB (dedicated)

8000000

8

4841

1438

1855

4 cores, 32 GB (dedicated)

16000000

16

13051

1080

1356

r:w=5:95

**CPU:Memory**

**Instance specification**

**operationcount**

**threads**

**throughput**

**RAL**

**WAL**

1:2

4 cores, 8 GB (dedicated)

4000000

16

10266

1141

1570

8 cores, 16 GB (dedicated)

8000000

32

13556

2141

2351

16 cores, 32 GB (dedicated)

16000000

64

14447

4295

4412

1:4

2 cores, 8 GB (dedicated)

4000000

8

4226

1591

1902

8 cores, 32 GB (dedicated)

16000000

64

12055

5109

5210

16 cores, 64 GB (dedicated)

32000000

96

15216

5877

8503

1:8

2 cores, 16 GB (dedicated)

8000000

8

3874

1792

2072

4 cores, 32 GB (dedicated)

16000000

16

10083

1106

1605

r:w=0:100

**CPU:Memory**

**Instance specification**

**operationcount**

**threads**

**throughput**

**RAL**

**WAL**

1:2

4 cores, 8 GB (dedicated)

4000000

16

9960

0

1592

8 cores, 16 GB (dedicated)

8000000

32

13064

0

2423

16 cores, 32 GB (dedicated)

16000000

64

13743

0

4615

1:4

2 cores, 8 GB (dedicated)

4000000

8

4287

0

1860

8 cores, 32 GB (dedicated)

16000000

64

11611

0

5441

16 cores, 64 GB (dedicated)

32000000

96

14391

0

8746

1:8

2 cores, 16 GB (Dedicated)

8000000

8

3854

0

2067

4 cores, 32 GB (dedicated)

16000000

16

9711

0

1638

### Performance comparison charts

CPU:Memory=1:2

-   Instances with 4 cores and 8 GB of memory![4核8GB数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8495610861/p557460.png)
    
-   Instances with 8 cores and 16 GB of memory![8核16GB](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8495610861/p557462.png)
    

CPU:Memory=1:4

-   Instances with 8 cores and 32 GB of memory![8核32GB数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7495610861/p557459.png)
    
-   Instances with 16 cores and 64 GB of memory![16核64GB数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8495610861/p557457.png)
    

CPU:Memory=1:8

-   Instances with 2 cores and 16 GB of memory![2核16GB数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8495610861/p557456.png)
    
-   Instances with 4 cores and 32 GB of memory![4核32GB数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8495610861/p557451.png)
    

### **Result analysis**

-   `CPU:Memory=1:2`: The ApsaraDB for MongoDB instance that uses a physical server provides better performance than one that uses cloud disks. The performance difference is about 7% to 50% at different read/write ratios. The maximum difference exists on ApsaraDB for MongoDB instances that have 4 CPU cores and 8 GB of memory.
    
-   `CPU:Memory=1:4`: The performance difference between the ApsaraDB for MongoDB instance that uses a physical server and one that uses cloud disks is reduced to about 10%. The ApsaraDB for MongoDB instance that uses a physical server is suitable for write scenarios, and one that uses cloud disks is suitable for read scenarios.
    
-   `CPU:Memory=1:8`:
    
    -   The ApsaraDB for MongoDB instance that uses a physical server provides almost the same performance as one that uses cloud disks.
        
    -   With the increase of memory, the ApsaraDB for MongoDB instance that uses cloud disks provides better performance than one that uses a physical server. The maximum difference exists on ApsaraDB for MongoDB instances that have 4 CPU cores and 32 GB of memory.
        

**Note**

The ApsaraDB for MongoDB instance that uses cloud disks has the following benefits:

-   All resources are dedicated and can avoid the resource contention that occurs on the ApsaraDB for MongoDB instance that uses a physical server.
    
-   Compute and storage resources can be automatically scaled. No data migration is required.
    
-   ESSDs have performance levels (PLs) such as PL1, PL2, and PL3. ESSDs of these levels are more cost-effective for pay-as-you-go ApsaraDB for MongoDB instances.
