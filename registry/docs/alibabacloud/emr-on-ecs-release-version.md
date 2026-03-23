This topic describes the big data services supported in each E-MapReduce (EMR) version. You can select a version based on your business requirements.

## **Version introduction**

EMR versions follow the EMR-a.b.c format, where:

-   a: indicates a major evolution of the technical architecture or core ecosystem. EMR V5.x series and EMR V3.x series are currently supported.
    
-   b: indicates that one or more services have been updated.
    
-   c: indicates that a compatibility bug has been fixed.
    

## **Services supported in each EMR version**

**Note**

-   The version of each service in an EMR cluster is typically the same as its corresponding open source version.
    
-   Each EMR version comes pre-installed with fixed service versions. We recommend that you do not modify the service versions. Additionally, services in EMR clusters cannot be upgraded. You must select a cluster based on your requirements for specific service versions.
    
-   When you create a cluster, only one version is available for each service. If you need to use multiple versions of a service, such as Spark 2 and Spark 3, you can install the required versions after creating a cluster and evaluate the compatibility and security risks.
    
-   In the following tables, a hyphen (`-`) indicates that the service is not integrated in the EMR version.
    

### [EMR V5.x series](/help/en/emr/emr-on-ecs/product-overview/release-notes-for-emr-v5-x-series) **(based on Hadoop 3.x and Hive 3.x)**

**EMR V5.19.X and later**

**Service**

**EMR V5.20.X**

**EMR V5.19.X**

Hadoop-Common

3.2.1

3.2.1

[HDFS](/help/en/emr/emr-on-ecs/user-guide/hdfs/)

3.2.1

3.2.1

[OSS-HDFS](/help/en/emr/emr-on-ecs/user-guide/oss-or-oss-hdfs/)

1.0.0

1.0.0

[YARN](/help/en/emr/emr-on-ecs/user-guide/yarn/)

3.2.1

3.2.1

[Hive](/help/en/emr/emr-on-ecs/user-guide/emr-hive-overview/)

3.1.3

3.1.3

[Spark 2](/help/en/emr/emr-on-ecs/user-guide/spark/)

2.4.8

2.4.8

[Spark 3](/help/en/emr/emr-on-ecs/user-guide/spark/)

3.5.3

3.5.3

[Tez](/help/en/emr/emr-on-ecs/user-guide/tez)

0.10.2

0.10.2

[Trino](/help/en/emr/trino)

422

422

[Hudi](/help/en/emr/emr-on-ecs/user-guide/hudi/)

0.15.0

0.15.0

[Iceberg](/help/en/emr/iceberg/)

1.5.0

1.5.0

[Flume](/help/en/emr/emr-on-ecs/user-guide/flume/)

1.11.0

1.11.0

[Kyuubi](/help/en/emr/emr-on-ecs/user-guide/kyuubi/)

1.9.2

1.9.2

[Knox](/help/en/emr/emr-on-ecs/user-guide/knox)

1.5.0

1.5.0

[OpenLDAP](/help/en/emr/emr-on-ecs/user-guide/use-openldap)

2.4.46

2.4.46

[Ranger](/help/en/emr/emr-on-ecs/user-guide/ranger-overview/)

2.3.0

2.3.0

Ranger-plugin

1.0.0

1.0.0

[Sqoop](/help/en/emr/emr-on-ecs/user-guide/sqoop-1/)

1.4.7

1.4.7

[DLF-Auth](/help/en/emr/emr-on-ecs/user-guide/dlf-auth)

2.0.2

2.0.2

[Presto](/help/en/emr/emr-on-ecs/user-guide/presto-overview-1/)

0.283

0.283

[StarRocks 2](/help/en/emr/emr-on-ecs/user-guide/starrocks/)

2.5.22

2.5.22

[StarRocks 3](/help/en/emr/emr-on-ecs/user-guide/starrocks/)

3.2.11

3.2.11

[ZooKeeper](/help/en/emr/emr-on-ecs/user-guide/zookeeper-1/)

3.8.4

3.8.4

[Celeborn](/help/en/emr/emr-on-ecs/user-guide/celeborn)

0.5.2

0.5.2

[Flink](/help/en/emr/emr-on-ecs/user-guide/flink-3/)

1.17.2

1.17.2

[HBase](/help/en/emr/emr-on-ecs/user-guide/hbase-20/)

2.6.3

2.6.3

[JindoCache](/help/en/emr/emr-on-ecs/user-guide/jindocache/)

6.8.2

6.8.2

[Paimon](/help/en/emr/emr-on-ecs/user-guide/paimon/)

1.0-ali-6.2

1.0-ali-6.2

[Phoenix](/help/en/emr/emr-on-ecs/user-guide/phoenix)

5.2.1

5.2.1

[ClickHouse](/help/en/emr/emr-on-ecs/user-guide/clickhouse/)

23.3.13.6

23.3.13.6

[Doris](/help/en/emr/emr-on-ecs/user-guide/doris/)

2.1.4

2.1.4

**EMR V5.18.X and earlier**

**Service**

**EMR V5.18.X**

**EMR V5.17.X**

**EMR V5.16.X**

**EMR V5.15.X**

**EMR V5.14.X**

**EMR V5.13.X**

**EMR V5.12.X**

**EMR V5.11.X**

Hadoop-Common

3.2.1

3.2.1

3.2.1

3.2.1

3.2.1

3.2.1

3.2.1

3.2.1

[HDFS](/help/en/emr/emr-on-ecs/user-guide/hdfs/)

3.2.1

3.2.1

3.2.1

3.2.1

3.2.1

3.2.1

3.2.1

3.2.1

[OSS-HDFS](/help/en/emr/emr-on-ecs/user-guide/oss-or-oss-hdfs/)

1.0.0

1.0.0

1.0.0

1.0.0

1.0.0

1.0.0

-   EMR V5.12.2**:** 1.0.0
    
-   EMR V5.12.0**:** \-
    

\-

[YARN](/help/en/emr/emr-on-ecs/user-guide/yarn/)

3.2.1

3.2.1

3.2.1

3.2.1

3.2.1

3.2.1

3.2.1

3.2.1

[Hive](/help/en/emr/emr-on-ecs/user-guide/emr-hive-overview/)

3.1.3

3.1.3

3.1.3

3.1.3

3.1.3

3.1.3

3.1.3

3.1.3

[Spark 2](/help/en/emr/emr-on-ecs/user-guide/spark/)

2.4.8

2.4.8

2.4.8

2.4.8

2.4.8

2.4.8

2.4.8

2.4.8

[Spark 3](/help/en/emr/emr-on-ecs/user-guide/spark/)

3.5.3

3.4.2

3.3.1

3.3.1

3.3.1

3.3.1

3.3.1

3.3.1

[Tez](/help/en/emr/emr-on-ecs/user-guide/tez)

0.10.2

0.10.2

0.10.2

0.10.2

0.10.2

0.10.2

0.10.2

0.10.2

[Trino](/help/en/emr/trino)

422

422

422

422

422

422

389

389

[Delta Lake](/help/en/emr/deltalake)

\-

3.0.0

2.2.0

2.2.0

2.2.0

2.2.0

2.2.0

2.2.0

[Hudi](/help/en/emr/emr-on-ecs/user-guide/hudi/)

0.15.0

0.14.0

0.14.0

0.13.1

0.13.1

0.13.1

0.12.2

0.12.2

[Iceberg](/help/en/emr/iceberg/)

1.5.0

1.5.0

1.1.0

1.1.0

1.1.0

1.1.0

1.1.0

1.1.0

[JindoData](/help/en/emr/emr-on-ecs/user-guide/jindodata-available-only-for-existing-users/)

\-

\-

\-

\-

4.6.11

4.6.11

4.6.5

-   EMR V5.11.1**:** 4.6.5
    
-   EMR V5.11.0**:** 4.6.4
    

[Flume](/help/en/emr/emr-on-ecs/user-guide/flume/)

1.11.0

1.11.0

1.11.0

1.9.0

1.9.0

1.9.0

1.9.0

1.9.0

[Kyuubi](/help/en/emr/emr-on-ecs/user-guide/kyuubi/)

1.9.2

1.7.3

1.7.3

1.7.1

1.7.1

1.7.1

1.7.1

1.6.1

[Knox](/help/en/emr/emr-on-ecs/user-guide/knox)

1.5.0

1.5.0

1.5.0

1.5.0

1.5.0

1.5.0

1.5.0

1.5.0

[Impala](/help/en/emr/emr-on-ecs/user-guide/impala/)

\-

4.3.0

4.3.0

4.2.0

4.2.0

4.2.0

4.2.0

4.2.0

[OpenLDAP](/help/en/emr/emr-on-ecs/user-guide/use-openldap)

2.4.46

2.4.46

2.4.46

2.4.46

2.4.46

2.4.46

2.4.46

2.4.46

[Ranger](/help/en/emr/emr-on-ecs/user-guide/ranger-overview/)

2.3.0

2.3.0

2.3.0

2.3.0

2.3.0

2.3.0

2.3.0

2.3.0

Ranger-plugin

1.0.0

1.0.0

1.0.0

1.0.0

1.0.0

1.0.0

1.0.0

1.0.0

[Sqoop](/help/en/emr/emr-on-ecs/user-guide/sqoop-1/)

1.4.7

1.4.7

1.4.7

1.4.7

1.4.7

1.4.7

1.4.7

1.4.7

[DLF-Auth](/help/en/emr/emr-on-ecs/user-guide/dlf-auth)

2.0.2

2.0.2

2.0.2

2.0.2

2.0.2

2.0.2

2.0.2

2.0.2

[Presto](/help/en/emr/emr-on-ecs/user-guide/presto-overview-1/)

0.283

0.283

0.283

0.283

0.283

0.278.3

0.278.3

0.278.3

[StarRocks 2](/help/en/emr/emr-on-ecs/user-guide/starrocks/)

2.5.22

2.5.22

2.5.13

2.5.12

2.5.12

2.5.8

2.5.5

2.5.1

[StarRocks 3](/help/en/emr/emr-on-ecs/user-guide/starrocks/)

3.2.11

3.2.11

3.1.5

3.1.2

3.1.2

\-

\-

\-

[ZooKeeper](/help/en/emr/emr-on-ecs/user-guide/zookeeper-1/)

3.8.4

3.8.4

3.6.3

3.6.3

3.6.3

3.6.3

3.6.3

3.6.3

[Celeborn](/help/en/emr/emr-on-ecs/user-guide/celeborn)

0.5.2

0.4.0

0.3.2

0.3.1

0.3.0

0.2.2

0.2.2

0.2.0

[Flink](/help/en/emr/emr-on-ecs/user-guide/flink-3/)

1.17.2

1.17.2

1.15\_vvr\_6.0.4

1.15\_vvr\_6.0.4

1.15\_vvr\_6.0.4

1.15\_vvr\_6.0.4

1.15\_vvr\_6.0.4

1.15\_vvr\_6.0.4

Flink Table Store

\-

\-

\-

\-

\-

\-

\-

-   EMR V5.11.1**:** 0.3-ali-2
    
-   EMR V5.11.0**:** 0.3-ali
    

[HBase](/help/en/emr/emr-on-ecs/user-guide/hbase-20/)

2.4.9

2.4.9

2.4.9

2.4.9

2.4.9

2.4.9

2.4.9

2.4.9

[JindoCache](/help/en/emr/emr-on-ecs/user-guide/jindocache/)

6.5.3

6.5.3

6.2.0

6.1.1

\-

\-

\-

\-

[Kudu](/help/en/emr/emr-on-ecs/user-guide/kudu/)

\-

1.16.0

1.16.0

1.16.0

1.16.0

1.16.0

1.16.0

1.16.0

[Paimon](/help/en/emr/emr-on-ecs/user-guide/paimon/)

1.0-ali-1

0.9-ali-7

0.7-ali-1

0.6-ali-2

0.5-ali-1

0.5-ali-1

0.4-ali-1

\-

[Phoenix](/help/en/emr/emr-on-ecs/user-guide/phoenix)

5.1.2

5.1.2

5.1.2

5.1.2

5.1.2

5.1.2

5.1.2

5.1.2

[ClickHouse](/help/en/emr/emr-on-ecs/user-guide/clickhouse/)

23.3.13.6

23.3.13.6

23.3.13.6

23.3.13.6

23.3.2.37

23.3.2.37

23.3.2.37

22.8.14.53

[Doris](/help/en/emr/emr-on-ecs/user-guide/doris/)

2.1.4

2.1.4

1.2.7

1.2.7

1.2.4

1.2.4

1.2.4

1.2.1

[Kafka](/help/en/emr/emr-on-ecs/user-guide/kafka/)

\-

2.13\_3.6.1

2.13\_3.6.1

2.13\_3.6.1

\-

2.13\_3.2.1

2.13\_3.2.1

2.13\_3.2.1

[Kafka Manager](/help/en/emr/emr-on-ecs/user-guide/kafka-manager)

\-

3.0.0.6

3.0.0.6

3.0.0.6

\-

3.0.0.6

3.0.0.6

3.0.0.6

**EMR V5.10.X and earlier**

**Component**

**EMR V5.10.X**

**EMR V5.9.X**

**EMR V5.8.X**

Hadoop-Common

3.2.1

3.2.1

3.2.1

[HDFS](/help/en/emr/emr-on-ecs/user-guide/hdfs/)

3.2.1

3.2.1

3.2.1

[YARN](/help/en/emr/emr-on-ecs/user-guide/yarn/)

3.2.1

3.2.1

3.2.1

[Hive](/help/en/emr/emr-on-ecs/user-guide/emr-hive-overview/)

3.1.3

3.1.3

3.1.3

[Spark 2](/help/en/emr/emr-on-ecs/user-guide/spark/)

2.4.8

2.4.8

2.4.8

[Spark 3](/help/en/emr/emr-on-ecs/user-guide/spark/)

3.3.1

3.3.0

3.2.1

[Tez](/help/en/emr/emr-on-ecs/user-guide/tez)

0.10.2

0.10.1

0.10.1

[Trino](/help/en/emr/trino)

389

\-

\-

[Presto](/help/en/emr/emr-on-ecs/user-guide/presto-overview-1/)

\-

389

389

[Delta Lake](/help/en/emr/deltalake)

2.1.0

2.1.0

1.1.0

[Hudi](/help/en/emr/emr-on-ecs/user-guide/hudi/)

0.12.0

0.12.0

0.11.1

[Iceberg](/help/en/emr/iceberg/)

0.14.1

0.14.0

0.13.1

[JindoData](/help/en/emr/emr-on-ecs/user-guide/jindodata-available-only-for-existing-users/)

-   EMR V5.10.1**:** 4.6.3
    
-   EMR V5.10.0**:** 4.6.2
    

-   EMR V5.9.1**:** 4.6.0
    
-   EMR V5.9.0**:** 4.5.1
    

4.4.2

[Flume](/help/en/emr/emr-on-ecs/user-guide/flume/)

1.9.0

1.9.0

1.9.0

[Kyuubi](/help/en/emr/emr-on-ecs/user-guide/kyuubi/)

1.6.0

1.5.2

1.5.2

[Knox](/help/en/emr/emr-on-ecs/user-guide/knox)

1.5.0

1.5.0

1.5.0

[Impala](/help/en/emr/emr-on-ecs/user-guide/impala/)

3.4.0

3.4.0

3.4.0

[OpenLDAP](/help/en/emr/emr-on-ecs/user-guide/use-openldap)

2.4.44

2.4.44

2.4.44

[Ranger](/help/en/emr/emr-on-ecs/user-guide/ranger-overview/)

2.3.0

2.1.0

2.1.0

[Sqoop](/help/en/emr/emr-on-ecs/user-guide/sqoop-1/)

1.4.7

1.4.7

1.4.7

[DLF-Auth](/help/en/emr/emr-on-ecs/user-guide/dlf-auth)

2.0.2

2.0.0

2.0.0

[ZooKeeper](/help/en/emr/emr-on-ecs/user-guide/zookeeper-1/)

3.6.3

3.6.3

3.6.3

[Flink](/help/en/emr/emr-on-ecs/user-guide/flink-3/)

-   EMR V5.10.1**:** 1.15\_vvr\_6.0.4
    
-   EMR V5.10.0**:** 1.15\_vvr\_6.0.2
    

-   EMR V5.9.1**:** 1.13\_vvr\_4.0.15
    
-   EMR V5.9.0**:** 1.13\_vvr\_4.0.13
    

1.13\_vvr\_4.0.13

[HBase](/help/en/emr/emr-on-ecs/user-guide/hbase-20/)

2.4.9

2.4.9

2.4.9

[Kudu](/help/en/emr/emr-on-ecs/user-guide/kudu/)

1.14.0

1.14.0

1.14.0

[Phoenix](/help/en/emr/emr-on-ecs/user-guide/phoenix)

5.1.2

5.1.2

5.1.2

RSS

0.1.4

0.1.4

0.1.1

[StarRocks](/help/en/emr/emr-on-ecs/user-guide/starrocks/)

-   EMR V5.10.1**:** 2.4.2
    
-   EMR V5.10.0**:** 2.4.1
    

2.3.2

2.3.0

[ClickHouse](/help/en/emr/emr-on-ecs/user-guide/clickhouse/)

22.3.8.39

22.3.8.39

22.3.8.39

[Doris](/help/en/emr/emr-on-ecs/user-guide/doris/)

-   EMR V5.10.1**:** 1.2.0
    
-   EMR V5.10.0**:** 1.1.5
    

1.1.2

1.1.1

[Kafka](/help/en/emr/emr-on-ecs/user-guide/kafka/)

2.13\_3.2.1

2.13\_3.2.1

2.12\_2.4.1

[Kafka Manager](/help/en/emr/emr-on-ecs/user-guide/kafka-manager)

2.0.0.2

2.0.0.2

2.0.0.2

### [EMR V3.x series](/help/en/emr/emr-on-ecs/product-overview/release-notes-for-emr-v3-x-series) **(based on Hadoop 2.x and Hive 2.x)**

**EMR V3.53.X and later**

**Service**

**EMR V3.54.X**

**EMR V3.53.X**

Hadoop-Common

2.8.5

2.8.5

[HDFS](/help/en/emr/emr-on-ecs/user-guide/hdfs/)

2.8.5

2.8.5

[OSS-HDFS](/help/en/emr/emr-on-ecs/user-guide/oss-or-oss-hdfs/)

1.0.0

1.0.0

[Hive](/help/en/emr/emr-on-ecs/user-guide/emr-hive-overview/)

2.3.9

2.3.9

[Spark 2](/help/en/emr/emr-on-ecs/user-guide/spark/)

2.4.8

2.4.8

[Spark 3](/help/en/emr/emr-on-ecs/user-guide/spark/)

3.4.2

3.4.2

[YARN](/help/en/emr/emr-on-ecs/user-guide/yarn/)

2.8.5

2.8.5

[Trino](/help/en/emr/trino)

422

422

[Delta Lake](/help/en/emr/deltalake)

3.0.0

3.0.0

[Hudi](/help/en/emr/emr-on-ecs/user-guide/hudi/)

0.15.0

0.15.0

[Iceberg](/help/en/emr/iceberg/)

1.5.0

1.5.0

[Flume](/help/en/emr/emr-on-ecs/user-guide/flume/)

1.11.0

1.11.0

[Kyuubi](/help/en/emr/emr-on-ecs/user-guide/kyuubi/)

1.9.2

1.9.2

[Tez](/help/en/emr/emr-on-ecs/user-guide/tez)

0.10.2

0.10.2

[OpenLDAP](/help/en/emr/emr-on-ecs/user-guide/use-openldap)

2.4.46

2.4.46

[Ranger](/help/en/emr/emr-on-ecs/user-guide/ranger-overview/)

2.3.0

2.3.0

Ranger-plugin

1.0.0

1.0.0

[Sqoop](/help/en/emr/emr-on-ecs/user-guide/sqoop-1/)

1.4.7

1.4.7

[DLF-Auth](/help/en/emr/emr-on-ecs/user-guide/dlf-auth)

2.0.2

2.0.2

[Presto](/help/en/emr/emr-on-ecs/user-guide/presto-overview-1/)

0.283

0.283

[StarRocks 2](/help/en/emr/emr-on-ecs/user-guide/starrocks/)

2.5.22

2.5.22

[StarRocks 3](/help/en/emr/emr-on-ecs/user-guide/starrocks/)

3.2.11

3.2.11

[ZooKeeper](/help/en/emr/emr-on-ecs/user-guide/zookeeper-1/)

3.8.4

3.8.4

[Knox](/help/en/emr/emr-on-ecs/user-guide/knox)

1.5.0

1.5.0

[Celeborn](/help/en/emr/emr-on-ecs/user-guide/celeborn)

0.5.2

0.5.2

[Flink](/help/en/emr/emr-on-ecs/user-guide/flink-3/)

1.17.2

1.17.2

[HBase](/help/en/emr/emr-on-ecs/user-guide/hbase-20/)

1.7.1

1.7.1

[JindoCache](/help/en/emr/emr-on-ecs/user-guide/jindocache/)

6.8.2

6.8.2

[Paimon](/help/en/emr/emr-on-ecs/user-guide/paimon/)

1-ali-6.2

1-ali-6.2

[Phoenix](/help/en/emr/emr-on-ecs/user-guide/phoenix)

4.16.1

4.16.1

[ClickHouse](/help/en/emr/emr-on-ecs/user-guide/clickhouse/)

23.8.2.7

23.8.2.7

[Doris](/help/en/emr/emr-on-ecs/user-guide/doris/)

2.1.4

2.1.4

**EMR V3.52.X and earlier**

**Service**

**EMR V3.52.X**

**EMR V3.51.X**

**EMR V3.50.X**

**EMR V3.49.X**

**EMR V3.48.X**

**EMR V3.47.X**

**EMR V3.46.X**

**EMR V3.45.X**

Hadoop-Common

2.8.5

2.8.5

2.8.5

2.8.5

2.8.5

2.8.5

2.8.5

2.8.5

[HDFS](/help/en/emr/emr-on-ecs/user-guide/hdfs/)

2.8.5

2.8.5

2.8.5

2.8.5

2.8.5

2.8.5

2.8.5

2.8.5

[OSS-HDFS](/help/en/emr/emr-on-ecs/user-guide/oss-or-oss-hdfs/)

1.0.0

1.0.0

1.0.0

1.0.0

1.0.0

1.0.0

-   EMR V3.46.2**:** 1.0.0
    
-   EMR V3.46.0**:** \-
    

\-

[Hive](/help/en/emr/emr-on-ecs/user-guide/emr-hive-overview/)

2.3.9

2.3.9

2.3.9

2.3.9

2.3.9

2.3.9

2.3.9

2.3.9

[Spark 2](/help/en/emr/emr-on-ecs/user-guide/spark/)

2.4.8

2.4.8

2.4.8

2.4.8

2.4.8

2.4.8

2.4.8

2.4.8

[Spark 3](/help/en/emr/emr-on-ecs/user-guide/spark/)

3.4.2

3.4.2

3.3.1

3.3.1

3.3.1

3.3.1

3.3.1

3.3.1

[YARN](/help/en/emr/emr-on-ecs/user-guide/yarn/)

2.8.5

2.8.5

2.8.5

2.8.5

2.8.5

2.8.5

2.8.5

2.8.5

[Trino](/help/en/emr/trino)

422

422

422

422

422

422

389

389

[Delta Lake](/help/en/emr/deltalake)

3.0.0

3.0.0

2.2.0

2.2.0

2.2.0

2.2.0

2.2.0

2.2.0

[Hudi](/help/en/emr/emr-on-ecs/user-guide/hudi/)

0.15.0

0.14.0

0.14.0

0.13.1

0.13.1

0.13.1

0.12.2

0.12.2

[Iceberg](/help/en/emr/iceberg/)

1.5.0

1.5.0

1.1.0

1.1.0

1.1.0

1.1.0

1.1.0

1.1.0

[Flume](/help/en/emr/emr-on-ecs/user-guide/flume/)

1.11.0

1.11.0

1.11.0

1.9.0

1.9.0

1.9.0

1.9.0

1.9.0

[Kyuubi](/help/en/emr/emr-on-ecs/user-guide/kyuubi/)

1.9.2

1.7.3

1.7.3

1.7.1

1.7.1

1.7.1

1.7.1

1.6.1

[Tez](/help/en/emr/emr-on-ecs/user-guide/tez)

0.10.2

0.10.2

0.10.2

0.10.2

0.10.2

0.10.2

0.10.2

0.10.2

[OpenLDAP](/help/en/emr/emr-on-ecs/user-guide/use-openldap)

2.4.46

2.4.46

2.4.46

2.4.46

2.4.46

2.4.46

2.4.46

2.4.46

[Ranger](/help/en/emr/emr-on-ecs/user-guide/ranger-overview/)

2.3.0

2.3.0

2.3.0

2.3.0

2.3.0

2.3.0

2.3.0

2.3.0

Ranger-plugin

1.0.0

1.0.0

1.0.0

1.0.0

1.0.0

1.0.0

1.0.0

1.0.0

[Sqoop](/help/en/emr/emr-on-ecs/user-guide/sqoop-1/)

1.4.7

1.4.7

1.4.7

1.4.7

1.4.7

1.4.7

1.4.7

1.4.7

[DLF-Auth](/help/en/emr/emr-on-ecs/user-guide/dlf-auth)

2.0.2

2.0.2

2.0.2

2.0.2

2.0.2

2.0.2

2.0.2

2.0.2

[Presto](/help/en/emr/emr-on-ecs/user-guide/presto-overview-1/)

0.283

0.283

0.283

0.283

0.283

0.283

0.278.3

0.278.3

[StarRocks 2](/help/en/emr/emr-on-ecs/user-guide/starrocks/)

2.5.22

2.5.22

2.5.13

2.5.12

2.5.12

2.5.12

2.5.5

2.4.3

[StarRocks 3](/help/en/emr/emr-on-ecs/user-guide/starrocks/)

3.2.11

3.2.11

3.1.5

3.1.2

3.1.2

\-

\-

\-

[ZooKeeper](/help/en/emr/emr-on-ecs/user-guide/zookeeper-1/)

3.8.4

3.8.4

3.6.3

3.6.3

3.6.3

3.6.3

3.6.3

3.6.3

[Knox](/help/en/emr/emr-on-ecs/user-guide/knox)

1.5.0

1.5.0

1.5.0

1.5.0

1.5.0

1.5.0

1.5.0

1.5.0

[Celeborn](/help/en/emr/emr-on-ecs/user-guide/celeborn)

0.5.2

0.4.0

0.3.2

0.3.1

0.3.0

0.3.0

0.2.2

0.2.0

[Flink](/help/en/emr/emr-on-ecs/user-guide/flink-3/)

1.17.2

1.17.2

1.15\_vvr\_6.0.4

1.15\_vvr\_6.0.4

1.15\_vvr\_6.0.4

1.15\_vvr\_6.0.4

1.15\_vvr\_6.0.4

1.15\_vvr\_6.0.4

Flink Table Store

\-

\-

\-

\-

\-

\-

\-

-   EMR V3.45.1**:** 0.3-ali-2
    
-   EMR V3.45.0**:** 0.3-ali
    

[HBase](/help/en/emr/emr-on-ecs/user-guide/hbase-20/)

1.7.1

1.7.1

1.7.1

1.7.1

1.7.1

1.7.1

1.7.1

1.7.1

[JindoCache](/help/en/emr/emr-on-ecs/user-guide/jindocache/)

6.5.3

6.5.3

6.2.0

6.1.1

\-

\-

\-

\-

[JindoData](/help/en/emr/emr-on-ecs/user-guide/jindodata-available-only-for-existing-users/)

\-

\-

\-

\-

4.6.11

4.6.11

4.6.5

-   EMR V3.45.1**:** 4.6.5
    
-   EMR V3.45.0**:** 4.6.4
    

[Kudu](/help/en/emr/emr-on-ecs/user-guide/kudu/)

\-

1.16.0

1.16.0

1.16.0

1.16.0

1.16.0

1.16.0

1.16.0

[Paimon](/help/en/emr/emr-on-ecs/user-guide/paimon/)

0.9-ali-7

0.9-ali-7

0.7-ali-1

0.6-ali-2

0.5-ali-1

0.5-ali-1

0.4-ali-1

\-

[Phoenix](/help/en/emr/emr-on-ecs/user-guide/phoenix)

4.16.1

4.16.1

4.16.1

4.16.1

4.16.1

4.16.1

4.16.1

4.16.1

[ClickHouse](/help/en/emr/emr-on-ecs/user-guide/clickhouse/)

23.8.2.7

23.8.2.7

23.8.2.7

23.8.2.7

22.8.17.17

22.8.17.17

22.8.17.17

22.8.14.53

[Doris](/help/en/emr/emr-on-ecs/user-guide/doris/)

2.1.4

2.1.4

1.2.7

1.2.7

1.2.4

1.2.4

1.2.4

1.2.1

[Kafka](/help/en/emr/emr-on-ecs/user-guide/kafka/)

\-

2.12\_2.4.1

2.12\_2.4.1

2.12\_2.4.1

\-

2.12\_2.4.1

2.12\_2.4.1

2.12\_2.4.1

[Kafka Manager](/help/en/emr/emr-on-ecs/user-guide/kafka-manager)

\-

3.0.0.6

3.0.0.6

3.0.0.6

\-

3.0.0.6

3.0.0.6

3.0.0.6

**EMR V3.44.X and earlier**

**Service**

**EMR V3.44.X**

**EMR V3.43.X**

**EMR V3.42.X**

Hadoop-Common

2.8.5

2.8.5

2.8.5

[HDFS](/help/en/emr/emr-on-ecs/user-guide/hdfs/)

2.8.5

2.8.5

2.8.5

[Hive](/help/en/emr/emr-on-ecs/user-guide/emr-hive-overview/)

2.3.9

2.3.9

2.3.9

[Spark 2](/help/en/emr/emr-on-ecs/user-guide/spark/)

2.4.8

2.4.8

2.4.8

[Spark 3](/help/en/emr/emr-on-ecs/user-guide/spark/)

3.3.1

3.3.0

3.2.1

[Trino](/help/en/emr/trino)

2.8.5

2.8.5

2.8.5

[Trino](/help/en/emr/trino)

389

\-

\-

[Presto](/help/en/emr/emr-on-ecs/user-guide/presto-overview-1/)

\-

389

389

[Delta Lake](/help/en/emr/deltalake)

2.1.0

2.1.0

0.6.1

[Hudi](/help/en/emr/emr-on-ecs/user-guide/hudi/)

0.12.0

0.12.0

0.11.1

[Iceberg](/help/en/emr/iceberg/)

0.14.1

0.14.0

0.13.1

[Impala](/help/en/emr/emr-on-ecs/user-guide/impala/)

3.4.0

3.4.0

3.4.0

[Flume](/help/en/emr/emr-on-ecs/user-guide/flume/)

1.9.0

1.9.0

1.9.0

[Kyuubi](/help/en/emr/emr-on-ecs/user-guide/kyuubi/)

1.6.0

1.5.2

1.5.2

[Tez](/help/en/emr/emr-on-ecs/user-guide/tez)

0.10.2

0.10.1

0.10.2

[OpenLDAP](/help/en/emr/emr-on-ecs/user-guide/use-openldap)

2.4.44

2.4.44

2.4.44

[Ranger](/help/en/emr/emr-on-ecs/user-guide/ranger-overview/)

1.2.0

1.2.0

1.2.0

[Sqoop](/help/en/emr/emr-on-ecs/user-guide/sqoop-1/)

1.4.7

1.4.7

1.4.7

[DLF-Auth](/help/en/emr/emr-on-ecs/user-guide/dlf-auth)

2.0.2

2.0.0

2.0.0

[StarRocks 2](/help/en/emr/emr-on-ecs/user-guide/starrocks/)

-   EMR V3.44.1**:** 2.3.5
    
-   EMR V3.44.0**:** 2.3.4
    

2.2.6

2.2.3

[ZooKeeper](/help/en/emr/emr-on-ecs/user-guide/zookeeper-1/)

3.6.3

3.6.3

3.6.3

[Knox](/help/en/emr/emr-on-ecs/user-guide/knox)

1.5.0

1.5.0

1.5.0

RSS

0.1.4

-   EMR V3.43.1**:** 0.1.4
    
-   EMR V3.43.0**:** 0.1.1
    

0.1.1

[Flink](/help/en/emr/emr-on-ecs/user-guide/flink-3/)

-   EMR V3.44.1**:** 1.15\_vvr\_6.0.4
    
-   EMR V3.44.0**:** 1.15\_vvr\_6.0.2
    

-   EMR V3.43.1**:** 1.13\_vvr\_4.0.15
    
-   EMR V3.43.0**:** 1.13\_vvr\_4.0.13
    

1.13\_vvr\_4.0.13

[HBase](/help/en/emr/emr-on-ecs/user-guide/hbase-20/)

1.7.1

1.7.1

1.7.1

[JindoData](/help/en/emr/emr-on-ecs/user-guide/jindodata-available-only-for-existing-users/)

-   EMR V3.44.1**:** 4.6.3
    
-   EMR V3.44.0**:** 4.6.2
    

-   EMR V3.43.1**:** 4.6.0
    
-   EMR V3.43.0**:** 4.5.1
    

4.4.2

[Kudu](/help/en/emr/emr-on-ecs/user-guide/kudu/)

1.16.0

1.14.0

\-

[Phoenix](/help/en/emr/emr-on-ecs/user-guide/phoenix)

4.16.1

4.16.1

\-

[ClickHouse](/help/en/emr/emr-on-ecs/user-guide/clickhouse/)

21.8.15.7

21.8.15.7

21.8.15.7

[Doris](/help/en/emr/emr-on-ecs/user-guide/doris/)

-   EMR V3.44.1**:** 1.2.0
    
-   EMR V3.44.0**:** 1.1.5
    

1.1.2

1.1.1

[Kafka](/help/en/emr/emr-on-ecs/user-guide/kafka/)

2.12\_2.4.1

2.12\_2.4.1

2.12\_2.4.1

[Kafka Manager](/help/en/emr/emr-on-ecs/user-guide/kafka-manager)

2.0.0.2

2.0.0.2

2.0.0.2
