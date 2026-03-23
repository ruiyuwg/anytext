To use instances such as MaxCompute and Hologres for data development in DataWorks, you must associate them as computing resources. This topic describes how to create and manage computing resources, which provides the foundation for task development and scheduling.

## **Relationship between computing resources and data sources**

DataWorks supports associating various [computing resources](#8592caa175d0e). After you associate a resource, you can develop complex data processing and periodic scheduling tasks in DataWorks. When you associate most computing resources to DataWorks, a **data source** with the same name is [**automatically created**](/help/en/dataworks/user-guide/create-a-data-integration-data-source/). You can then use the Data Integration module to perform operations, such as data synchronization, based on that data source. The differences between a compute engine and a data source are as follows:

-   A computing resource is an instance of a compute engine that executes data processing and analysis tasks.
    
-   A [data source](/help/en/dataworks/user-guide/add-and-manage-data-sources/) connects to different data storage services to store and manage data.
    

## **Supported computing resources**

DataWorks supports associating the following computing resources for data development.

**Category**

**Computing resource type**

**Instructions for associating the computing resource**

**Data Studio (new version)**

**DataStudio (legacy version)**

Offline computing

[MaxCompute](/help/en/maxcompute/product-overview/what-is-maxcompute)

[Associate a MaxCompute computing resource](/help/en/dataworks/user-guide/create-a-maxcompute-data-source)

Supported

Supported

[Serverless Spark](/help/en/emr/emr-serverless-spark/product-overview/what-is-emr-serverless-spark)

[Associate a serverless Spark computing resource](/help/en/dataworks/user-guide/create-a-serverless-spark-computing-resource)

Supported

Not supported

Real-time query

[AnalyticDB for MySQL](/help/en/analyticdb/analyticdb-for-mysql/product-overview/what-is-analyticdb-for-mysql)

[Associate an AnalyticDB for MySQL computing resource](/help/en/dataworks/user-guide/bind-analyticdb-for-mysql3-0-computing-resources)

Supported

Supported

[AnalyticDB for PostgreSQL](/help/en/analyticdb/analyticdb-for-postgresql/product-overview/overview-product-overview)

[Associate an AnalyticDB for PostgreSQL computing resource](/help/en/dataworks/user-guide/create-an-analyticdb-for-postgresql-data-source)

Supported

Supported

[AnalyticDB for Spark](/help/en/analyticdb/analyticdb-for-mysql/user-guide/spark-sql-application-development)

[Associate an AnalyticDB for Spark computing resource](/help/en/dataworks/user-guide/bind-an-analyticdb-for-spark-computing-resource)

Supported

Not supported

[ClickHouse](/help/en/clickhouse/product-overview/what-is-apsaradb-for-clickhouse)

[Associate a ClickHouse computing resource](/help/en/dataworks/user-guide/create-a-clickhouse-data-source)

Supported

Supported

[Hologres](/help/en/hologres/product-overview/what-is-hologres)

[Associate a Hologres computing resource](/help/en/dataworks/user-guide/create-a-hologres-data-source)

Supported

Supported

[Lindorm](/help/en/lindorm/product-overview/product-introduction-overview)

[Associate a Lindorm computing resource](/help/en/dataworks/user-guide/binding-lindorm-computing-resources)

Supported

Not supported

[Serverless StarRocks](/help/en/emr/emr-serverless-starrocks/product-overview/what-is-emr-serverless-starrocks)

[Associate an EMR Serverless StarRocks computing resource](/help/en/dataworks/user-guide/binding-serverless-starrocks-computing-resources)

Supported

Not supported

Real-time computing

[Flink](/help/en/flink/realtime-flink/product-overview/what-is-alibaba-cloud-realtime-compute-for-apache-flink)

[Associate a Flink computing resource](/help/en/dataworks/user-guide/bind-flink-computing-resources)

Supported

Not supported

Multimodal search

[OpenSearch](/help/en/open-search/what-is-opensearch-1/)

[Associate an OpenSearch computing resource](/help/en/dataworks/user-guide/bind-opensearch-computing-resources)

Supported

Not supported

Cluster management

[CDH](https://www.cloudera.com/)

-   [Data Studio (new version): associate a CDH computing resource](/help/en/dataworks/user-guide/bind-cdh-computing-resources)
    
-   [DataStudio (legacy version): associate a CDH computing resource](/help/en/dataworks/user-guide/register-a-cdh-or-cdp-cluster-to-dataworks)
    

Supported

Supported

-   [EMR on ECS](/help/en/emr/emr-on-ecs/product-overview/what-is-e-mapreduce-on-ecs)
    
-   [EMR on ACK](/help/en/emr/emr-on-ack/product-overview/what-is-emr-on-ack)
    

-   [Data Studio (new version): associate an EMR computing resource](/help/en/dataworks/user-guide/bind-emr-computing-resources)
    
-   [DataStudio (legacy version): associate an EMR computing resource](/help/en/dataworks/user-guide/register-emr-cluster-to-dataworks)
    

Supported

Supported

**Note**

When you associate a MaxCompute, AnalyticDB for MySQL, AnalyticDB for PostgreSQL, AnalyticDB for Spark, ClickHouse, Hologres, Lindorm, EMR Serverless StarRocks, or OpenSearch computing resource, a **data source** with the same name is also created in the current workspace.

## **Permissions**

-   To create computing resources, you must be a workspace member with the **O&M** or **Workspace Administrator** role, or have the **AliyunDataWorksFullAccess** or **AdministratorAccess** access policy. For more information, see [Workspace-level module permission control](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3) and [Grant permissions to a RAM user](/help/en/cms/cloudmonitor-1-0/user-guide/grant-permissions-to-a-ram-user).
    
-   In addition to the preceding permissions, creating certain computing resources requires other access controls. Grant the permissions as prompted on the interface.
    

## **Associate a computing resource**

The procedure for associating a computing resource varies depending on whether your workspace uses the Data Studio (new version).

### **Associate a computing resource in** Data Studio (new version)

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). Switch to the destination region. In the navigation pane on the left, click **More** > **Management Center**. From the drop-down list, select the desired workspace and click **Go To Management Center**.
    
2.  In the navigation pane on the left, click **Computing Resources**. On the Computing Resources page, find the computing resource type that you want to associate and follow the instructions in the corresponding document.
    
    -   [Associate a MaxCompute computing resource](/help/en/dataworks/user-guide/create-a-maxcompute-data-source#57c0eb6140ogu)
        
    -   [Associate an AnalyticDB for MySQL (V3.0) computing resource](/help/en/dataworks/user-guide/bind-analyticdb-for-mysql3-0-computing-resources#959965e8de7wv)
        
    -   [Associate an AnalyticDB for PostgreSQL computing resource](/help/en/dataworks/user-guide/create-an-analyticdb-for-postgresql-data-source#f408e32fb5uyo)
        
    -   [Associate a ClickHouse computing resource](/help/en/dataworks/user-guide/create-a-clickhouse-data-source#85c1d90885773)
        
    -   [Associate a Hologres computing resource](/help/en/dataworks/user-guide/create-a-hologres-data-source#f408e32fb5uyo)
        
    -   [Associate a Serverless Spark computing resource](/help/en/dataworks/user-guide/create-a-serverless-spark-computing-resource)
        
    -   [Associate an AnalyticDB for Spark computing resource](/help/en/dataworks/user-guide/bind-an-analyticdb-for-spark-computing-resource)
        
    -   [Associate an EMR Serverless StarRocks computing resource](/help/en/dataworks/user-guide/binding-serverless-starrocks-computing-resources)
        
    -   [Associate a Flink computing resource](/help/en/dataworks/user-guide/bind-flink-computing-resources)
        
    -   [Associate an OpenSearch computing resource](/help/en/dataworks/user-guide/bind-opensearch-computing-resources)
        
    -   [Associate a CDH computing resource](/help/en/dataworks/user-guide/bind-cdh-computing-resources)
        
    -   [Associate an EMR computing resource](/help/en/dataworks/user-guide/bind-emr-computing-resources)
        
    -   [Associate a Lindorm computing resource](/help/en/dataworks/user-guide/binding-lindorm-computing-resources)
        

### **Associate a computing resource in** DataStudio (legacy version)

1.  Go to the DataStudio page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
    
2.  In the navigation pane on the left, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8015440571/p964518.png) icon to go to the **Computing Resource** page. Find the type of computing resource that you want to associate and follow the instructions in the corresponding document.
    
    -   **Computing resource management**: Click **Create Computing Resource** in the upper-right corner to create a computing resource.
        
        -   [Associate a MaxCompute computing resource](/help/en/dataworks/user-guide/create-a-maxcompute-data-source#88b78c19cfz94)
            
        -   [Associate an AnalyticDB for MySQL (V3.0) computing resource](/help/en/dataworks/user-guide/bind-analyticdb-for-mysql3-0-computing-resources#c709f63cc656v)
            
        -   [Associate an AnalyticDB for PostgreSQL computing resource](/help/en/dataworks/user-guide/create-an-analyticdb-for-postgresql-data-source#c709f63cc656v)
            
        -   [Associate a ClickHouse computing resource](/help/en/dataworks/user-guide/create-a-clickhouse-data-source#4ce500b24fsr5)
            
        -   [Associate a Hologres computing resource](/help/en/dataworks/user-guide/create-a-hologres-data-source#a27f7875c5ub8)
            
    -   **Cluster Management**: Click **Create Cluster** in the upper-right corner of the **Computing Resource** page to create a cluster.
        
        **Cluster Management**
        
        **Supported cluster versions/types**
        
        **References for associating clusters**
        
        Associate a CDH/CDP cluster
        
        DataWorks provides CDH 5.16.2, CDH 6.1.1, CDH 6.2.1, CDH 6.3.2, and CDP 7.1.7. You can select these versions directly. The component versions for these cluster versions are fixed. For more information, see [Cluster connection information](/help/en/dataworks/user-guide/register-a-cdh-or-cdp-cluster-to-dataworks#99d38f1371ty9). If these cluster versions do not meet your business needs, select **Custom Version**.
        
        [Associate a CDH computing resource](/help/en/dataworks/user-guide/register-a-cdh-or-cdp-cluster-to-dataworks)
        
        Associate an EMR cluster
        
        Supported EMR cluster types: [DataLake cluster (new data lake): EMR on ECS](/help/en/emr/emr-on-ecs/product-overview/what-is-e-mapreduce-on-ecs), [Custom cluster: EMR on ECS](/help/en/emr/emr-on-ecs/product-overview/what-is-e-mapreduce-on-ecs), [Hadoop cluster (old data lake): EMR on ECS](/help/en/emr/emr-on-ecs/product-overview/what-is-e-mapreduce-on-ecs), [Spark cluster: EMR on ACK](/help/en/emr/emr-on-ack/product-overview/what-is-emr-on-ack), and [EMR Serverless Spark](/help/en/emr/emr-serverless-spark/product-overview/what-is-emr-serverless-spark) cluster.
        
        **Important**
        
        -   DataWorks supports the following EMR versions for Hadoop clusters (old data lake):
            
            EMR-3.38.2, EMR-3.38.3, EMR-4.9.0, EMR-5.6.0, EMR-3.26.3, EMR-3.27.2, EMR-3.29.0, EMR-3.32.0, EMR-3.35.0, EMR-4.3.0, EMR-4.4.1, EMR-4.5.0, EMR-4.5.1, EMR-4.6.0, EMR-4.8.0, EMR-5.2.1, and EMR-5.4.3
            
        -   Hadoop clusters (old data lake) are no longer recommended. Migrate to a DataLake cluster as soon as possible. For more information, see [Migrate a Hadoop cluster to a DataLake cluster](/help/en/emr/emr-on-ecs/use-cases/migrate-data-from-a-hadoop-cluster-to-a-datalake-cluster).
            
        
        [Associate an EMR computing resource](/help/en/dataworks/user-guide/register-emr-cluster-to-dataworks)
        

## **Disassociate a computing resource**

**Important**

Disassociate computing resources with caution. disassociating a computing resource also deletes the associated data source of the same name. This action can affect tasks that reference the computing resource or data source in modules such as Data Integration, Operation Center, DataAnalysis, DataService Studio API, and Data Quality. To ensure that your business runs as expected, carefully read the prompts on the interface before you disassociate the resource. You must also migrate all tasks from the computing resource to another one.

On the computing resources page, find the computing resource. Click **Disassociate** on the right to disassociate the computing resource from this workspace.

## **Appendix: Task execution environments**

In a standard mode workspace, each computing resource instance has two sets of configurations: one for the development environment and one for the production environment. You can specify different databases or instances for each environment. The system automatically maps and accesses the correct computing resource based on the runtime environment. This configuration isolates development and testing from production scheduling. For example, when you execute an offline sync task in the development environment, the task automatically accesses the pre-configured development database. When the task is run for production scheduling, it accesses the production database.

**Note**

-   A basic mode workspace has only one environment and does not isolate development from production. For more information, see [Differences between workspace modes](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode).
    
-   If you upgrade a basic mode workspace to standard mode, the original computing resource is split into two isolated resources: one for the production environment and one for the development environment. Workspaces that use the **Data Studio (new version)** do not currently support upgrades. For more information, see [Upgrade a workspace mode](/help/en/dataworks/user-guide/upgrade-a-workspace-from-the-basic-mode-to-the-standard-mode#concept-xpy-3bn-cfb).
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4219466671/CAEQTxiBgMDC0MTc0xkiIDYyNTZjZjBjMmQ0NzQzMTA4NmIxYTg3YjIyMDNmMTI44970985_20250312161225.027.svg)
