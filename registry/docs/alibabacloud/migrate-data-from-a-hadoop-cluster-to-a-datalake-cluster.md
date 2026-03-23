This topic describes how to efficiently migrate data from a Hadoop cluster to a DataLake cluster. The Hadoop cluster is created in the old E-MapReduce (EMR) console and referred to as an old cluster. The DataLake cluster is created in the new EMR console and referred to as a new cluster. The following factors of the old cluster must be taken into full consideration for migration: version, metadata storage type, and storage method. Migration policies and steps vary based on the factors.

## **Background information**

The new EMR console is a next-generation, cloud-native open source big data platform released by EMR. It provides users with a new development platform, new resource forms, and new analysis scenarios, which help improve user experience. For information about the features provided by the new EMR console, see [Announcement of the new EMR console](/help/en/emr/emr-on-ecs/product-overview/announcement-of-the-new-emr-console).

EMR on ECS is one of the main resource forms of EMR and provides enhanced features in the new EMR console. The new EMR console provides the following types of clusters: DataLake, Dataflow, online analytical processing (OLAP), and custom. Compared with cluster types that are provided by the old EMR console, such as Hadoop and Data Science, cluster types provided by the new EMR console help significantly improve cluster management efficiency and engine performance. DataLake clusters are an upgraded version of Hadoop clusters. You can benefit from multiple features of a DataLake cluster. For more information, see [DataLake cluster](/help/en/emr/emr-on-ecs/user-guide/datalake-cluster).

## **Preparations**

### **Sort the overall architecture of the old cluster**

Sort the current big data business architecture, identify use scenarios of the old cluster, and take note of the following items:

-   Services and service versions: Record the services that are running in the old cluster and the service versions. This helps evaluate upgrade compatibility and feature update requirements.
    
-   Metadata storage type: Confirm the metadata storage type that is used in the old cluster, and plan connection and migration policies for the metadata management system in the new architecture. The metadata storage type that is used in the old cluster can be Data Lake Formation (DLF) or self-managed ApsaraDB RDS.
    
-   Data storage architecture: Analyze the data storage architecture of the old cluster to provide a basis for the subsequent design of a data migration path. The data storage architecture can be local Hadoop Distributed File System (HDFS), Object Storage Service (OSS), or JindoFS in block mode.
    
-   User authentication architecture: Check whether to use services such as OpenLDAP, Ranger, and Kerberos that are deployed in the old cluster. This helps ensure that the new architecture can seamlessly inherit the existing security mechanism after migration.
    
-   Scheduling system: Confirm the development and scheduling system that is used to maintain scheduling consistency and smooth migration of tasks.
    

If you want to upgrade multiple old clusters, we recommend that you migrate data of the old clusters one at a time to ensure business continuity and stability. Then, determine the migration sequence and formulate a feasible migration plan based on the actual business requirements and priorities to ensure the smooth migration of data from each old cluster to a new cluster.

### **Sort detailed information about the old cluster**

-   #### **View instance configurations**
    
    When you create a cluster in the new EMR console, the basic information about instances of your old cluster can be applied to the new cluster. For more information, see [Create a cluster in the new EMR console](#2059933d7556v). You need to view and sort the software and hardware configurations of the old cluster. The other configurations can be directly applied to the new cluster.
    
    View the cluster and node group configurations on the **Basic Information** and **Nodes** tabs of your old cluster on the EMR on ECS page and take note of the information that is described in the following table.
    
    **Configuration type**
    
    **Configuration item**
    
    **Content to sort**
    
    Software configuration
    
    -   Cluster version
        
    -   Service version
        
    -   Components actually used
        
    -   Hive metadata storage type
        
    
    The services that are used in the old cluster and their versions.
    
    Hardware configuration
    
    -   Zone where the cluster resides
        
    -   Specifications and billing method of each node group
        
    
    The zone where the old cluster resides and the hardware configurations of each node group in the old cluster, such as vCPUs, memory, system disks, and data disks.
    
-   #### (Optional) Export **service configurations**
    
    In the daily O&M of a cluster, users often adjust the default configurations of services or add additional custom configurations based on their business requirements. To efficiently migrate configuration information between different clusters, you can make full use of the configuration export feature of EMR to export all the configurations of the old cluster at a time, and then import the configurations at a time during the initialization of a new cluster. This allows you to quickly and easily migrate service configurations. Alternatively, you can manually modify and adjust configurations of services one at a time on the service management page after the new cluster is started.
    
    1.  Export service configurations.
        
        Refer to [Export and import service configurations](/help/en/emr/emr-on-ecs/user-guide/export-and-import-service-configurations) to export service configuration files with a few clicks.
        
        **Note**
        
        -   **Select Configuration Files**: We recommend that you select only a configuration file that has been edited. You can select multiple configuration files.
            
        -   **Export Mode**: This parameter cannot be set to **Export Only Custom or Modified Configurations** for a Hadoop cluster.
            
        -   **Export Format**: Select **JSON**. This way, service configurations can be imported to a new cluster with ease.
            
        
        The following table describes the parameters in the exported configuration files.
        
        **Parameter**
        
        **Description**
        
        **ApplicationName**
        
        The name of the service.
        
        **ConfigFileName**
        
        The name of the configuration file.
        
        **ConfigItemKey**
        
        The name of a configuration item.
        
        **ConfigItemValue**
        
        The value of the configuration item.
        
    2.  Modify configuration files.
        
        Carefully check the configuration information exported from the old cluster, filter and retain the necessary configuration items for the new environment, and then delete unnecessary configurations.
        
        -   When you adjust parameter settings for YARN-related resources, you must take the actual hardware resource specifications of the new cluster into consideration to ensure that the settings of the configuration items that you want to import to the new cluster are reasonable.
            
        -   If you have configured JindoFS-related settings, such as credential providers, we recommend that you adjust the settings based on the OSS- or OSS-HDFS-related configurations. For more information, see [Configure a credential provider for OSS or OSS-HDFS](/help/en/emr/emr-on-ecs/user-guide/configure-a-credential-provider-for-oss-or-oss-hdfs).
            
    3.  Use the service configurations in the configuration files as preset configurations for the new cluster. For more information, see "(Optional) Custom Software Configuration" in this topic.
        
-   #### **(Optional) Sort bootstrap actions**
    
    You can check whether bootstrap action scripts are configured for the old cluster in the phase of [viewing instance configurations](#XkM1w). If bootstrap action scripts are configured, you must evaluate the functionality of each bootstrap action script to determine whether to use them in the new cluster.
    
    For bootstrap action scripts that you want to use in the new cluster, perform the following operations to adjust the scripts to ensure that they can properly run in the new cluster.
    
    -   Modify the information that is relevant to the versions of open source components in bootstrap action scripts. The information includes the JAR package name and path. For information about file paths in the old and new EMR consoles, see [Paths of frequently used files](/help/en/emr/emr-on-ecs/user-guide/paths-of-frequently-used-files).
        
    -   If objects need to be downloaded from Object Storage Service (OSS) during script execution, you may need to modify corresponding OSS commands. For more information, see [Manage bootstrap actions](/help/en/emr/emr-on-ecs/user-guide/bootstrap-action-execution-script).
        
    
    After the scripts are modified, upload the scripts to OSS. When you create a new cluster, enter the modified OSS path of the bootstrap action scripts.
    
    **Important**
    
    Before you deploy a bootstrap action script to a production cluster, make sure that the script has passed the verification in a test environment.
    
-   #### **(Optional)** Sort **auto scaling rules**
    
    If auto scaling rules are configured for the old cluster, view the configured auto scaling rules and focus on the information such as the maximum number of instances, the minimum number of instances, graceful shutdown, trigger mode, and trigger rules. After you create a new cluster, reconfigure auto scaling rules. For more information, see [Add auto scaling rules](/help/en/emr/emr-on-ecs/user-guide/creating-a-custom-auto-scaling-policy). To view the auto scaling rules that are configured for the old cluster, perform the following steps:
    
    1.  Go to the Auto Scaling tab.
        
        1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
            
        2.  Find the desired cluster and click the name of the cluster in the Cluster ID/Name column.
            
        3.  On the page that appears, click the **Auto Scaling** tab.
            
    2.  View auto scaling rules.
        
        On the **Auto Scaling** tab, find the desired auto scaling group and click **Configure Rule** in the Actions column. Focus on the following parameters in the Configure Auto Scaling panel:
        
        -   Maximum Number of Instances
            
        -   Minimum Number of Instances
            
        -   Graceful Shutdown
            
        -   Trigger Mode
            
        -   Trigger Rule (Scale Out and Scale In)
            
    
    **Note**
    
    You can configure parameters, such as Instance Type Selection Mode, Billing Method, Instance Type, and Graceful Shutdown, in the Configure Auto Scaling panel for the new cluster. For more information, see [Manage node groups](/help/en/emr/emr-on-ecs/user-guide/manage-node-groups-for-datalake-dataflow-olap-and-dataserving-clusters).
    
-   #### **(Optional) View the cluster load**
    
    You can view the cluster load to observe the daily resource usage of the old cluster. This helps you evaluate the hardware configurations that are required for the new cluster. Alternatively, you can smoothly migrate cluster configurations to ensure that the old and new clusters use the same hardware configurations. Then, you can modify the hardware configurations of the new cluster based on the resource utilization during cluster running.
    
    -   Method 1: View metrics
        
        View cluster load metrics and focus on the resource usage of YARN and HDFS services. For more information, see [View service metrics](/help/en/emr/emr-on-ecs/user-guide/view-service-metrics).
        
    -   Method 2: View daily cluster reports in EMR Doctor
        
        EMR Doctor provides daily cluster reports that contain global analysis results of computing resources, YARN scheduling resources, and HDFS storage resources in a cluster. You can view the total amount of existing data in the cluster, the distribution of hot and cold data, and the distribution of computing tasks in the cluster. For more information, see [View daily cluster reports and analysis results in the reports](/help/en/emr/emr-on-ecs/user-guide/view-daily-cluster-reports-and-analysis-results-in-the-reports).
        
        **Note**
        
        You must activate EMR Doctor if you want to use EMR Doctor in the old EMR console. For more information about how to activate EMR Doctor, see [Activate EMR Doctor (Hadoop clusters)](/help/en/emr/emr-on-ecs/user-guide/enable-emr-doctor-for-hadoop-clusters).
        

### **Formulate a migration plan and determine the migration time**

Determine final migration objects based on your big data business situations and the actual configurations of the old cluster, clarify the following key information, and then refer to the subsequent migration operations for reasonable planning of human resources and the migration cycle.

-   The product version and services of the new cluster. For information about the compatibility of services and components, see [Product Version and Optional Services (Select One At Least)](#Y6Fy6) in this topic.
    
-   The metadata storage and management method of the new cluster. Select DLF Unified Metadata or Self-managed RDS.
    
-   The storage solution of the new cluster. Select OSS-HDFS or OSS.
    

## **Step 1: Create clusters in the new EMR console**

### **Create a new cluster**

For information about how to create a new cluster, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page). You can configure parameters based on the settings that you sorted in the phase of [viewing instance configurations](#XkM1w). Take note of the following configurations:

-   #### **Product Version and Optional Services (Select One At Least)**
    
    You can select services of specific versions that you want to deploy in the new cluster based on service compatibility and the service list that is sorted in the phase of [viewing instance configurations](#XkM1w).
    
    -   **Service compatibility**
        
        With the version update of services in the open source community, the versions of specific services in a DataLake cluster are later than those in a Hadoop cluster. The following table describes the backward compatibility of later versions of services. You can determine the versions of services in the new cluster based on the software version information of the old cluster and the information that is described in the following table.
        
        **Cluster service in the old EMR console**
        
        **Backward compatibility range 1**
        
        **Backward compatibility range 2**
        
        **Backward compatibility range 3**
        
        **Backward compatibility range 4**
        
        Spark
        
        2.X
        
        3.X
        
        \-
        
        \-
        
        Hive
        
        2.X
        
        3.X
        
        \-
        
        \-
        
        Tez
        
        All versions compatible
        
        \-
        
        \-
        
        \-
        
        Delta Lake
        
        0.6.X
        
        0.8.0 to 1.1.0
        
        \-
        
        \-
        
        Iceberg
        
        0.12.X
        
        0.13.X
        
        \-
        
        \-
        
        Hudi
        
        0.6.X
        
        0.8.X
        
        0.9.X
        
        0.10.X
        
        Sqoop
        
        All versions compatible
        
        \-
        
        \-
        
        \-
        
        Ranger
        
        1.X
        
        2.X
        
        \-
        
        \-
        
        OpenLDAP
        
        All versions compatible
        
        \-
        
        \-
        
        \-
        
        **Note**
        
        -   In a **backward compatibility range**, a later version of a service can be compatible with an earlier version of the service.
            
        -   The preceding service compatibility information is only for reference. For more information, see the official description of each service in the open source community.
            
        -   Due to the service popularity changes in the open source community and continuous update and iteration of new technologies, some open source services are no longer supported in the new EMR console.
            
            For example, Hue, Zeppelin, and Ooize are not supported in the new EMR console. We recommend that you migrate the configurations of these services to EMR Notebook or EMR Workflow, or build corresponding engines in the new cluster.
            
        
    -   **Product version**
        
        **Important**
        
        In the case that software versions meet requirements, we recommend that you select the latest EMR version to use more features.
        
        In data lake scenarios, Alibaba Cloud EMR provides the following product version series: EMR V3.X and EMR V5.X. Each series contains multiple product versions, and the services and service versions vary based on product versions. When you create a new cluster, you must select an appropriate product version based on the data lake scenario and service compatibility requirements. The following table describes the product version mappings between the old and new clusters.
        
        **Product version of the old cluster**
        
        **Product version of the new cluster**
        
        EMR V3.35.0: YARN 2.8.5, HDFS 2.8.5, Hive 2.3.7, and Spark 2.4.7
        
        EMR V3.X series
        
        EMR V5.6.0: YARN 3.2.1, HDFS 3.2.1, Hive 3.1.2, and Spark 3.2.1
        
        EMR V5.X series
        
    -   **Selection of HDFS and OSS-HDFS**
        
        In EMR V5.12.1, EMR V3.46.1, or a minor version later than EMR V5.12.1 or EMR V3.46.1, you can select HDFS or OSS-HDFS from optional services as the underlying storage.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9611613171/p775737.png)
        
        When you create a new cluster, select optional services based on the cluster storage solution in [Formulate a migration plan and determine the migration time](#qT5yv) in this topic.
        
        **Storage in the new EMR console**
        
        **Service to select**
        
        OSS
        
        OSS-HDFS
        
        OSS-HDFS
        
        OSS-HDFS
        
        **Note**
        
        If you select OSS-HDFS from optional services, you must also configure the **Root Storage Directory of Cluster** parameter to specify a bucket for which OSS-HDFS is enabled as the root storage path of the new cluster.
        
-   #### **Metadata**
    
    The following metadata storage types are supported in the new EMR console. Select a type based on the metadata storage solution that is determined in [Formulate a migration plan and determine the migration time](#qT5yv) in this topic. If metadata migration is required, refer to [Migrate metadata](#189b2deec63an) in this topic to migrate metadata after a new cluster is created.
    
    **Metadata storage type**
    
    **Description**
    
    DLF Unified Metadata (recommended)
    
    Metadata is stored in DLF. If DLF is already used in the old EMR console, you can set the **DLF Catalog** parameter to the value that is specified in the old EMR console. After a new cluster is created, the same metadata is automatically synchronized, and you do not need to migrate metadata.
    
    Self-managed RDS
    
    Metadata is stored in a self-managed Alibaba Cloud ApsaraDB RDS database. If you select Self-managed RDS, you must configure the parameters of the existing ApsaraDB RDS database. For more information, see [Configure a self-managed ApsaraDB RDS for MySQL database](/help/en/emr/emr-on-ecs/user-guide/configure-a-self-managed-apsaradb-rds-for-mysql-database#task-2444872).
    
    Built-in MySQL
    
    Metadata is stored in the local MySQL database of your cluster.
    
    **Important**
    
    This type is used only in a test environment.
    
-   #### **(Optional) Custom Software Configuration**
    
    If you have exported the service configurations of the old cluster or plan to use the service configurations as preset configurations for a new cluster, you can turn on Custom Software Configuration when you create the new cluster and copy the service configurations to the field that appears after you turn on Custom Software Configuration. For more information, see [Customize software configurations](/help/en/emr/emr-on-ecs/user-guide/configure-custom-software).
    
-   #### **Hardware configurations**
    
    In the phase of [viewing instance configurations](#XkM1w), you can have a comprehensive understanding of hardware configurations of each node in the old cluster. You must select proper hardware resource configurations for different node types based on your business requirements. The node types include master, core, and task.
    
    -   We recommend that you select the latest Elastic Compute Service (ECS) instance families and cloud disk types when you create a new cluster to use updated hardware features.
        
    -   You can create node groups that are assigned the same role after you create a new cluster.
        
    -   **Assign Public Network IP**: You can determine whether to enable Internet access for a node group. After you turn on the switch, all nodes in the node group are connected to the Internet.
        
        If you want to log on to the master node of your cluster over the Internet, or you want to use the feature of accessing the web UIs of open source components, you must turn on the switch for the master node group.
        

### **(Optional) Create a gateway in the new EMR console**

A gateway is used to submit jobs to EMR clusters and isolate clusters in a secure manner. If you have already used a gateway cluster in the old EMR console, you can create a gateway in the new EMR console.

EMR provides a more flexible gateway deployment plan in the new EMR console, which allows you to deploy a gateway on an existing ECS instance and implements automatic synchronization of configurations of your cluster. To simplify the deployment of a gateway, EMR provides the EMR-CLI tool that you can use to deploy a gateway on an Alibaba Cloud ECS instance with ease. For more information, see [Use EMR-CLI to deploy a gateway](/help/en/emr/emr-on-ecs/use-cases/use-emr-cli-to-deploy-a-gateway).

## Step 2: Migrate and verify data

After you build a new cluster environment, you must migrate the metadata, data, and jobs from the old cluster to the new cluster.

### **Migrate metadata**

The old and new EMR consoles support the following metadata management modes: DLF Unified Metadata, Self-managed RDS, and Built-in MySQL. We strongly recommend that you select DLF Unified Metadata when you create a new cluster. The following table describes metadata migration plans for different metadata management modes in the old and new EMR consoles.

**Metadata management mode in the old EMR console**

**Metadata management mode in the new EMR console**

**Migration method**

DLF

DLF

You do not need to migrate metadata. You need to only make sure that the DLF catalog that is specified for the new cluster is the same as that for the old cluster.

Unified metabase

DLF

For more information, see [Migration of EMR metadata](/help/en/emr/emr-on-ecs/product-overview/migration-of-emr-metadata).

Local MySQL

DLF

For more information, see [Migrate metadata](/help/en/dlf/dlf-1-0/user-guide/migrate-metadata).

Self-managed ApsaraDB RDS

DLF

For more information, see [Migrate metadata](/help/en/dlf/dlf-1-0/user-guide/migrate-metadata).

### **Migrate data**

The following table describes the data migration methods for different storage modes in the old and new EMR consoles. You can select a method based on your business requirements to ensure that data from the old cluster can be smoothly and accurately migrated to the new cluster.

**Storage mode in the old EMR console**

**Storage mode in the new EMR console**

**Migration method**

OSS

OSS

You do not need to migrate data.

OSS

OSS-HDFS

Use [Jindo DistCp](/help/en/emr/emr-on-ecs/user-guide/use-jindo-distcp-6) to migrate data.

JindoFS in block mode

OSS-HDFS

HDFS

OSS-HDFS

### **Verify data**

**Note**

If you do not need to migrate data to the new cluster, you can skip this step.

After data is migrated to the new cluster, you must verify the correctness of data such as HDFS data and data in Hive databases and tables. If data inconsistency is identified, you must immediately troubleshoot the issue. For example, you can rerun affected tasks or supplement missing data.

You can select a method based on your data verification requirements.

**Requirement**

**Verification method**

File verification

Calculate checkSum values of files and compare calculation results to ensure that no changes are made to files or the files are not damaged during the migration process.

Rough data verification

Check statistics at the table level to quickly evaluate overall data consistency. The statistics include the total number of rows in a table, the sum and average of values in a numeric column, and the minimum value and maximum value in the numeric column.

Detailed data verification

Check each row of data in detail to ensure that all data items remain unchanged after migration. This verification method helps you check data integrity and accuracy in depth.

### **Migrate jobs**

To ensure that the jobs of the old cluster can be scheduled and executed as expected in the new cluster, the following migration policies are provided in different scheduling systems and environments:

-   If you are using data development features in Data Platform in the old EMR console, you must migrate jobs from EMR Data Platform in the old EMR console to EMR Workflow. For more information, see [Announcement on the migration of data from EMR Data Platform in the old EMR console](/help/en/emr/emr-on-ecs/product-overview/emr-legacy-data-development-and-migration-announcement).
    
-   If you use another development environment, such as Alibaba Cloud DataWorks or a self-managed development platform, follow the instructions that are described in the migration plan provided by the related development environment.
    
    Refer to the specific migration documentation of the corresponding platform and adjust relevant configurations based on actual deployment situations and your business requirements. For example, you can change key settings such as computing cluster information to ensure that jobs can be scheduled as expected in the new cluster.
    

## Step 3: Perform double-run verification on the old and new clusters

When you migrate data between clusters, double-run verification is required for the clusters to minimize the potential impact on online business. Replication of online traffic to the new cluster and execution of jobs in the new cluster are involved in the process. This helps ensure data consistency and business accuracy.

The specific method of double-run verification varies based on your actual development environment, business characteristics, and data processing requirements. Therefore, we strongly recommend that you flexibly formulate an appropriate double-run verification plan based on your business scenarios and requirements.

## Step 4: Release the old cluster

After data business verification is complete, you can deliver data. You can gradually migrate jobs from the old cluster to the new cluster and gradually increase the job processing volume in the new cluster to ensure that all jobs can be stably run in the new cluster.

After the business data of the old cluster is completely migrated to the new cluster, and no business data is run in the old cluster, you can follow the instructions that are described in [Release a cluster](/help/en/emr/emr-on-ecs/user-guide/release-a-cluster) to release the old cluster in a secure and orderly manner.
