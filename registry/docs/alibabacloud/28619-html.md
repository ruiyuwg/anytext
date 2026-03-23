This topic describes how to use the metrics in Cloud Monitor and provides links for you to view the metrics of various Alibaba Cloud services.

**Note**

-   Cloud Monitor includes CloudMonitor Basic and Hybrid Cloud Monitoring. For more information about the feature differences, see [Differences between CloudMonitor Basic and Hybrid Cloud Monitoring](/help/en/cms/cloudmonitor-1-0/product-overview/differences-between-cloudmonitor-basic-and-hybrid-cloud-monitoring).
    
-   The names of the monitoring metrics in Hybrid Cloud Monitoring are changed based on the names of the monitoring metrics in CloudMonitor Basic. For more information, see [Naming conventions for monitoring metrics in Hybrid Cloud Monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/naming-conventions-for-monitoring-metrics-in-hybrid-cloud-monitoring#concept-2312055).
    
-   Cloud Monitor has established a management platform in the Chinese mainland to monitor cloud services. Cloud Monitor uses the management platform to process metrics of various Alibaba Cloud services.
    

## Usage notes

If you need to call Cloud Monitor API operations, you can click the links in the following table to view the parameters of the metrics for Alibaba Cloud services. The parameters include **Namespace**, **MetricName**, **Dimensions**, and **Period**.

**Parameter**

**Value source**

**Namespace**

The content following `/` in the table header on the **Metric List** page of the cloud service. For example, **acs\_ecs\_dashboard** in **Elastic Compute Service (ECS)/acs\_ecs\_dashboard** is the namespace of ECS metrics.

**MetricName**

The **Metric ID** column on the **Metric List** page of the cloud service.

**Dimensions**

The **Dimensions** column on the **Metric List** page of the cloud service.

When you call API operations, you do not need to specify **userId** in the **Dimensions** column. Cloud Monitor automatically obtains the ID of the current account and enters it in userId.

**Period**

The **Min Periods** column on the **Metric List** page of the cloud service.

## Metrics for Alibaba Cloud services

**Category**

**Alibaba Cloud service**

Elastic computing

-   [CloudBox](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_cloudbox/cloudbox)
    
-   [Dedicated Host](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ddh/ddh)
    
-   [Elastic Container Instance (ECI)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_eci_dashboard/eci)
    
-   [Elastic Compute Service (ECS)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ecs_dashboard/ecs)
    
-   [ECS private pools](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ecs_privatepool/ecs_privatepool)
    
-   [Elastic High Performance Computing (E-HPC)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ehpc_dashboard/ehpc)
    
-   [Auto Scaling](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ess_dashboard/ess)
    
-   [Function Compute](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_fc/fc)
    
-   [Elastic Desktop Service (EDS)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_gws/gws)
    
-   [Serverless App Engine (SAE)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_serverless/serverless)
    
-   [Container Service for Kubernetes (new version)](/help/en/cms/cloudmonitor-1-0/user-guide/ack#concept-2007165)
    
-   [Simple Application Server](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_swas/swas)
    
-   [Compute Nest Intranet Interconnection](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_computenest/intranet_connector_service)
    
-   [E-HPC NEXT](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ehpc_dashboard/ehpc_next)
    

Analytics

-   [Data Lake Formation (DLF)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_dlf/dlf)
    
-   [E-MapReduce](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_emr/emr)
    
-   [E-MapReduce (fully managed StarRocks)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_emr/emr_serverless_starrocks)
    
-   [E-MapReduce (Workflow)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_emr/emr_workflow)
    

Message queue

-   [ApsaraMQ for RabbitMQ](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_amqp/amqp_instance)
    
-   [ApsaraMQ for Kafka](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_kafka/kafka)
    
-   [ApsaraMQ for Kafka V3](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_kafka/kafkaV3)
    
-   [Simple Message Queue (formerly MNS)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_smq/smq)
    
-   [Simple Message Queue (formerly MNS) - Queue](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_mns_new/mns)
    
-   [Simple Message Queue (formerly MNS) - Topic](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_mns_new/topic)
    
-   [ApsaraMQ for RocketMQ](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_rocketmq/rocketmq)
    
-   [ApsaraMQ for MQTT](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_mqtt/mqtt)
    

Artificial intelligence (AI)

-   [Platform for AI (PAI) - Elastic Algorithm Service (EAS) (Phased-out)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_learn/learn)
    
-   [Platform for AI (PAI) - Elastic Algorithm Service (EAS)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_learn/learn_eas)
    
-   [Platform for AI (PAI) - EAS Resource](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_learn/learn_eas_resource)
    
-   [Platform for AI (PAI) - Deep Learning Containers (DLC)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_pai_dlc/dlc)
    
-   [Platform for AI (PAI) - Data Science Workshop (DSW)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_pai_dsw/dsw)
    
-   [Platform for AI (PAI) - Quota](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_pai_quota/quota)
    
-   [Intelligent Speech Interaction - Real-time Speech Recognition](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_nls/nls)
    
-   [Chatbot](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_beebot/beebot)
    
-   [Outbound Bot](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_outboundbot/outboundbot)
    
-   [FeatureStore](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_pai_featurestore/featurestore)
    

Database

-   [Tair ESSD-based instances](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_tair/tair_pdb)
    
-   [Tair persistent memory-optimized instances (standard architecture)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_tair/tair_pena)
    
-   [Tair persistent memory-optimized instances (cluster architecture)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_tair/tair_pena_cluster)
    
-   [Tair persistent memory-optimized instances (read/write splitting architecture)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_tair/tair_pena_splitrw)
    
-   [Tair ESSD/SSD-based instances (cluster architecture)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_tair/tair_pdb_cluster)
    
-   [ApsaraDB for MyBase](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_rds_sar/rds_sar)
    
-   [ApsaraDB RDS for SQL Server](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_rds_dashboard/sqlserver)
    
-   [ApsaraDB RDS for PostgreSQL](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_rds_dashboard/postgresql)
    
-   [ApsaraDB RDS](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_rds_dashboard/rds)
    
-   [ApsaraDB RDS (Cluster Edition)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_rds_dashboard/rds_cluster)
    
-   [PolarDB for PostgreSQL](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_polardb/polardb_pg)
    
-   [PolarDB for MySQL (New)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_polardb/polardb_mysql_cluster)
    
-   [PolarDB for PostgreSQL (Compatible with Oracle)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_polardb/polardb_oracle)
    
-   [ApsaraDB for OceanBase](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_oceanbase/oceanbase)
    
-   [ApsaraDB for MongoDB - Sharded cluster instances](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_mongodb/mongodb_sharding)
    
-   [ApsaraDB for MongoDB - Standalone instances](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_mongodb/mongodb_singlenode)
    
-   [ApsaraDB for MongoDB - Replica set instances](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_mongodb/mongodb_replicaset)
    
-   [ApsaraDB for Memcache](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_memcache/memcache)
    
-   [ApsaraDB for Memcache Sharding](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_memcache/memcache_sharding)
    
-   [Lindorm Standalone](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_lindorm/lindorm_standalone)
    
-   [Lindorm Serverless](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_lindorm/serverless_lindorm)
    
-   [Lindorm](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_lindorm/lindorm)
    
-   [Lindorm Multi-zone Edition](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_lindorm/lindorm_multizone)
    
-   [ApsaraDB for Redis (Old)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_kvstore/kvstore_old)
    
-   [Tair DRAM-based instances (cluster architecture)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_kvstore/kvstore_sharding)
    
-   [Tair DRAM-based instances (read/write splitting architecture)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_kvstore/kvstore_splitrw)
    
-   [Tair DRAM-based instances (standard architecture)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_kvstore/kvstore_standard)
    
-   [AnalyticDB for PostgreSQL](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hybriddb/gpdb)
    
-   [AnalyticDB for MySQL 3.0 - Data Warehouse Edition](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_adb/adb_mysql)
    
-   [TSDB](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hitsdb/tsdb)
    
-   [Time Series Database for InfluxDB](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hitsdb/influxdb)
    
-   [ApsaraDB for HBase Performance-enhanced Edition](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hbaseue/hbaseue)
    
-   [ApsaraDB for HBase Serverless Edition](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hbaseserverless/hbaseserverless)
    
-   [ApsaraDB for HBase Standard Edition](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hbase/hbase)
    
-   [Graph Database (GDB)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_gdb/gdb)
    
-   [DTS - Data Migration](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_dts/data_migration)
    
-   [DTS - Data Synchronization](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_dts/data_synchronization)
    
-   [DTS - Change Tracking](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_dts/change_tracking)
    
-   [PolarDB-X 2.0 Compute Node](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_drds/polardb-x_v2)
    
-   [PolarDB-X 1.0](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_drds/drds)
    
-   [PolarDB-X 2.0 Data Node](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_drds/polardbx_v2_dn)
    
-   [PolarDB-X 2.0 Log Node](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_drds/polardbx_v2_cdc)
    
-   [ApsaraDB for ClickHouse (Community-compatible Edition)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_clickhouse/clickhouse_community)
    
-   [ApsaraDB for ClickHouse (Cloud-native Edition)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_clickhouse/clickhouse_native)
    
-   [ApsaraDB for ClickHouse](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_clickhouse/clickhouse)
    
-   [ApsaraDB for ClickHouse Enterprise Edition](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_clickhouse/clickhouse_enterprise)
    
-   [ApsaraDB for Cassandra](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_cds/cds)
    
-   [Lindorm Tunnel Service (LTS)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_bds/bds)
    
-   [AnalyticDB for MySQL 3.0 - Data Lakehouse Edition](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_adb/adb_mysql_v5)
    
-   [ApsaraDB for SelectDB](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_rds_dashboard/selectdb)
    

Others

-   [EventBridge - Event Bus](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_eventbridge/eventbus)
    
-   [EventBridge - Event Streaming](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_eventbridge/eventstreaming)
    
-   [Cloud Phone](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_cloudphone/cloudphone)
    
-   [Genomics Computing Platform](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_easygene/easygene)
    

Storage and CDN

-   [Alibaba Cloud CDN](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_cdn/cdn)
    
-   [Database File System (DBFS)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_dbfs/dbfs)
    
-   [Dynamic Content Delivery Network (DCDN)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_dcdn/dcdn)
    
-   [DCDN - IP Application Accelerator (IPA)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_dcdn/ipa)
    
-   [Edge Security Acceleration (ESA)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_esa/esa)
    
-   [ESA - Edge Security](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_esa/esa)
    
-   [ESA - TCP/UDP Proxy](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_esa/esa)
    
-   [Edge Network Acceleration (ENA)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_snsu/snsu)
    
-   [Edge Node Service (ENS)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ens/ens)
    
-   [ENS - Cloud disks](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ens/ens_clouddisk)
    
-   [ENS - Edge Object Storage (EOS)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ens/ens_eos)
    
-   [Cloud Backup](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hbr/hbr_vault)
    
-   [Cloud Backup - Disaster recovery storage](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hbr/hw_appliance)
    
-   [Cloud Storage Gateway (CSG)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hcs_sgw/hcs_sgw_csg)
    
-   [Hybrid Disaster Recovery (HDR) - Gateways](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hdr/hdr)
    
-   [Hybrid Disaster Recovery (HDR) - Protected servers](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hdr/hdr_server)
    
-   [Tablestore](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ots_new/ots)
    
-   [Apsara File Storage for HDFS](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hdfs/hdfs)
    
-   [File Storage NAS (NAS)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_nas/nas)
    
-   [Cloud Parallel File Storage (CPFS)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_nas/cpfs)
    
-   [Photo and Drive Service (PDS)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_pds/pds)
    
-   [Object Storage Service (OSS)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_oss_dashboard/oss)
    
-   [Object Storage Service (OSS)\_Cache](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_oss_dashboard/oss_cache)
    
-   [Intelligent Media Management (IMM)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_imm/imm)
    
-   [Elastic Block Storage (EBS)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_disk/disk)
    
-   [Dedicated Block Storage Cluster](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_disk/dbsc)
    
-   [EBS - Replication pairs](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_disk/disk_replica_pair_async)
    
-   [EBS - Replication pair-consistent groups](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_disk/disk_replica_group_async)
    

Cloud communication

-   [IoT Platform - Server-side Subscription](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_iot/iot_device_server_sub)
    
-   [IoT Platform - Instance](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_iot/iot_device_instance)
    
-   [IoT Platform](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_iot/iot_device)
    
-   [Cloud Call Center](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ccc/ccc)
    

Monitoring and management

-   [ActionTrail](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_actiontrail/actiontrail)
    
-   [Managed Service for Prometheus](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_armsprometheus/armsprometheus)
    
-   [Cloud Monitor - Availability Monitoring](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_cms_detect/availability_monitoring)
    

Video services

-   [ApsaraVideo Media Processing](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_mps/mps)
    
-   [ApsaraVideo Media Processing - RAM user query](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_mps/mps_account)
    
-   [Real-Time Communication (RTC)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_rtc/rtc)
    
-   [ApsaraVideo Live](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_videolive/videolive)
    
-   [ApsaraVideo VOD](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_vod/vod)
    
-   [ApsaraVideo VOD - Playback Quality](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_vod/vod_player)
    

Big data

-   [AnalyticDB](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ads/ads)
    
-   [DataHub](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_datahub/datahub)
    
-   [Alibaba Cloud Logstash](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_elasticsearch/logstash)
    
-   [Elasticsearch](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_elasticsearch/elasticsearch)
    
-   [Elasticsearch Serverless](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_elasticsearch/elasticsearch_serverless)
    
-   [Hologres (Deprecated)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hologres/hologres)
    
-   [Hologres (Secondary Instance)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hologres/hologres_follower)
    
-   [Hologres (Lakehouse Acceleration Edition)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hologres/hologres_shared)
    
-   [Hologres (General-purpose Instance)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hologres/hologres_standard)
    
-   [Hologres (Virtual Warehouse Instance)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hologres/hologres_warehouse)
    
-   [DataWorks](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_dide/dide?spm=a2c4g.11186623.0.0.2d074f17OtT7P3)
    
-   [MaxCompute - General](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_maxcompute_prepay/maxcompute_common)
    
-   [MaxCompute - Pay-as-you-go](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_maxcompute_prepay/maxcompute_post)
    
-   [MaxCompute - Subscription Quota Group Resources](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_maxcompute_prepay/maxcomute_prepay_quota)
    
-   [MaxCompute - Subscription User Resources](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_maxcompute_prepay/maxcomute_prepay_user)
    
-   [MaxCompute\_Subscription](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_maxcompute_prepay/maxcompute_subscription)
    
-   [MaxCompute Tunnel Subscription](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_maxcompute_prepay/maxcompute_tunnel_subscription)
    
-   [Open Ad](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_openad/openad)
    
-   [Stream Computing](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_streamcompute/realtime_compute)
    
-   [Realtime Compute for Apache Flink](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_flink/flink)
    
-   [Batch Compute](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_batchcomputenew/batchcomputenew)
    
-   [DashVector](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_dashvector/dashvector)
    
-   [Vector Retrieval Service for Milvus](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_milvus/milvus)
    

Networking

-   [Application Load Balancer (ALB)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_alb/alb)
    
-   [Network Load Balancer (NLB)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_nlb/nlb)
    
-   [Gateway Load Balancer (GWLB)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_gwlb/gwlb)
    
-   [Anycast EIP](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_anycast_eip/anycast_eip)
    
-   [Internet Shared Bandwidth](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_bandwidth_package/sharebandwidthpackages)
    
-   [Cloud Connector](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_cc/cc_iot)
    
-   [CC5G](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_cc/cc_5g)
    
-   [CEN - Region](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_cen/cen_region)
    
-   [CEN - VBR](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_cen/cen_vbr)
    
-   [CEN - Transit Router](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_cen/cen_tr)
    
-   [CEN - Area](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_cen/cen_area)
    
-   [Express Connect - Peering Connections](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_express_connect/vpc)
    
-   [Global Accelerator - Basic GA Instances](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_global_acceleration/globalaccelerationbase)
    
-   [Global Accelerator - Standard GA Instances](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_global_acceleration/globalaccelerationplus)
    
-   [IPv6 Internet Bandwidth](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ipv6_bandwidth/ipv6gateway)
    
-   [IPv6 Gateway](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ipv6_bandwidth/ipv6gateway_gw)
    
-   [Enhanced NAT Gateway](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_nat_gateway/enhanced_nat_gateway)
    
-   [NAT Gateway](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_nat_gateway/nat_gateway)
    
-   [NAT Gateway Bandwidth Plan](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_nat_gateway/nat_bandwithpackage)
    
-   [Express Connect - Physical Connections](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_physical_connection/port)
    
-   [Express Connect - VBR](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_physical_connection/vbr)
    
-   [Express Connect Router (ECR)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_express_connect/ecr)
    
-   [PrivateLink - Endpoint Service](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_privatelink/privatelinkservice)
    
-   [PrivateLink - Endpoint](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_privatelink/privatelink)
    
-   [Server Load Balancer (SLB)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_slb_dashboard/slb)
    
-   [SAG - Application](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_smartag/sag_app)
    
-   [SAG - Device](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_smartag/sag)
    
-   [SAG - Application Acceleration Bandwidth](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_smartag/sagabwp)
    
-   [Elastic IP Address (EIP)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_vpc_eip/eip)
    
-   [VPC Peering Connections](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_vpcpeer/vpcpeer)
    
-   [VPN Gateway](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_vpn/vpn)
    
-   [VPN Connections](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_vpn/vpnconnection)
    
-   [Cloud Data Transfer](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_cdt/cdt)
    

Application services

-   [Artificial Intelligence Recommendation (AIRec)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_airec/airec)
    
-   [AIRec - BE](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_airec/aime)
    
-   [AIRec - TPP](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_airec/tpp)
    
-   [AIRec- Ali Basic Feature Server (ABFS)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_airec/abfs)
    
-   [OpenSearch Retrieval Engine Edition](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_opensearch/opensearch_engine)
    
-   [API Gateway](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_apigateway_dashboard/apigateway)
    
-   [Cloud-native API Gateway](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_cnapigateway/cnapigateway)
    
-   [Secure Access Service Edge (SASE) - Connectors](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ascs/connector)
    
-   [Secure Access Service Edge (SASE) - SaaS access points](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ascs/csas)
    
-   [Secure Access Service Edge (SASE) - Dedicated access points](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ascs/pop)
    
-   [SchedulerX](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_sceduler3/sceduler_instance)
    
-   [IP Address Manager (IPAM) - Address pools](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_vpcipam/vpcipam_pool)
    
-   [IP Address Manager (IPAM) - VPC resources](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_vpcipam/vpcipam_resource_vpc)
    
-   [IP Address Manager (IPAM) - vSwitch resources](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_vpcipam/vpcipam_resource_vswitch)
    
-   [IP Address Manager (IPAM) - Scope](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_vpcipam/vpcipam_scope)
    
-   [Blockchain as a Service/Fabric Orderer](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_baas/orderer)
    
-   [Blockchain as a Service/Fabric Peer](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_baas/peer)
    
-   [Direct Mail](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_directmail/DirectMail)
    
-   [Serverless Workflow](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_fnf/functionflow)
    
-   [OpenAPI Explorer](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_openAPI/openapi)
    
-   [OpenSearch](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_opensearch/opensearch)
    
-   [Simple Log Service (SLS)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_sls_dashboard/sls)
    

Security

-   [Content Moderation](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_lvwang/lvwang)
    
-   [Anti-DDoS Origin](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ddosbgp/ddosbgp)
    
-   [Anti-DDoS Proxy (Chinese Mainland)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_newbgpddos/newbgpddos)
    
-   [Anti-DDoS Proxy (Outside Chinese Mainland)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ddosdip/ddosdip)
    
-   [Anti-DDoS Pro (Phased-out)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ddos/ddos)
    
-   [Web Application Firewall (WAF)](https://cloudmonitor.console.alibabacloud.com/metric-meta/waf/waf)
    
-   [Web Application Firewall (WAF) 3.0](https://cloudmonitor.console.alibabacloud.com/metric-meta/waf/wafv3)
    
-   [Hybrid Cloud WAF](https://cloudmonitor.console.alibabacloud.com/metric-meta/waf/hybrid_waf)
    
-   [Hybrid Cloud WAF 3.0](https://cloudmonitor.console.alibabacloud.com/metric-meta/waf/hybrid_wafv3)
    
-   [Cloud Hardware Security Module (HSM) - Cluster](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hsm/hsm_cluster)
    
-   [Cloud Hardware Security Module (HSM) - Instance](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hsm/hsm_instance)
    
-   [Key Management Service (KMS)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_kms/kms)
