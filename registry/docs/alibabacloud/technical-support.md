Alibaba Cloud E-MapReduce (EMR) is a cloud-native open source big data platform that provides you with easy-to-integrate open source big data solutions. Clusters that you create on the EMR on ECS page are built on top of Elastic Compute Service (ECS). The cluster resources belong to your Alibaba Cloud account, and EMR manages the cluster resources in semi-managed mode. You are granted all management and operation permissions on EMR clusters that you created. You need to perform routine O&M on your clusters. This topic describes the EMR technical support that you can obtain to better use EMR.

## Technical support scope

### **Services supported**

-   The EMR technical support team provides support for the use of the EMR console, provides related consultation services, and handles stability issues and product defects related to the console. The EMR console excludes the services that are deployed in EMR clusters. You can perform the following operations in the EMR console:
    
    -   Purchase an EMR cluster.
        
    -   Create an EMR cluster.
        
    -   Scale an EMR cluster.
        
    -   Add services to an EMR cluster.
        
    -   Configure auto scaling rules.
        
    -   Use the monitoring and alerting feature.
        
    -   Develop data.
        
-   The EMR technical support team provides support for the use of self-developed services in EMR, provides related consultation services, and handles stability issues and product defects related to the self-developed services. EMR provides the following self-developed services:
    
    -   SmartData
        
    -   Bigboot
        
    -   ESS
        
    -   DLF-Auth
        

### Services that support assistance from the EMR technical support team

-   The EMR technical support team assists in troubleshooting issues that occur on open source services in EMR and provides solutions in an iterative schedule based on the product plan. EMR supports the following open source services:
    
    -   Hadoop services, including Hadoop Distributed File System (HDFS), YARN, and MapReduce
        
    -   Services for data integration, such as Flume and Sqoop
        
    -   Services for data storage, such as HDFS, HBase, Kudu, Iceberg, Delta Lake, Hudi, and Kafka
        
    -   Compute engine services, such as Spark, Hive, Tez, Druid, Flink, and Phoenix
        
    -   Online analytical processing (OLAP) services, such as Presto, StarRocks, Doris, ClickHouse, and Impala
        
    -   Other services, such as ZooKeeper, Knox, Ganglia, OpenLDAP, Hue, Zeppelin, Livy, Superset, Ranger, Alluxio, and Oozie
        
-   The EMR technical support team assists in troubleshooting issues that occur on other Alibaba Cloud services on which EMR depends. The service teams of these Alibaba Cloud services are responsible for the handling of service defects and provide solutions to meet service requirements. EMR depends on the following Alibaba Cloud services:
    
    -   Computing services such as ECS and Container Service for Kubernetes (ACK). For example, issues such as insufficient inventory and kernel defects may occur.
        
    -   Storage services such as Elastic Block Storage (EBS) or Alibaba Cloud Object Storage Service (OSS). For example, storage, read, or write exceptions or data inconsistency may occur.
        
    -   Network services such as Virtual Private Cloud (VPC). For example, security groups may be improperly configured, or network fluctuations may occur.
        
    -   Observability services such as CloudMonitor and Simple Log Service. For example, alert push exceptions may occur, and log data reading may time out.
        

### **Services not supported**

-   EMR provides various convenient O&M features, such as service management, node management, and cluster monitoring, and guarantees the feature reliability. However, the EMR technical support team does not perform O&M operations for cluster or service management, including cluster capacity planning, service performance optimization, and specific O&M operations on a cluster, such as service restart and configuration modification.
    
-   The EMR technical support team does not troubleshoot issues that are caused by your improper operations in the EMR console, such as the use of invalid custom scripts, disk space exhaustion, deletion of system directories, and improper use of resources.
    
-   The EMR technical support team does not provide technical consultation on the development of business applications on top of EMR services or troubleshoot related issues. The development covers the following processes: business implementation, code development, job performance tuning, and business migration.
    
-   The EMR technical support team does not troubleshoot issues in a single job if no obvious exceptions in cluster services occur or no service defects exist.
    
-   The EMR technical support team does not provide support for non-standard capabilities of EMR, such as upgrade of the cluster version or service configurations, scale-in of core nodes, and reduction of disk capacity.
    
-   The EMR technical support team does not troubleshoot the issues that occur on third-party components.
    
-   The EMR technical support team does not troubleshoot the issue of cluster instability or cluster unavailability due to unexpected operations. For more information about unexpected operations, see [Limits](/help/en/emr/emr-on-ecs/product-overview/limits#concept-1995074).
    

## Contact technical support

If you have questions, we recommend that you log on to the Alibaba Cloud official website for technical support.

1.  Go to the [Support and Services](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) page.
    
2.  Click the ![向下箭头](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4545219361/p352293.png) icon below **More Product And Service Category**.
    
3.  Click **E-MapReduce** in the **More** section.
    
4.  Enter related information and click **Submit**.
    

## SLA

For more information about SLA, see

[Service Level Comparison](https://www.alibabacloud.com/zh/support/after-sales).
