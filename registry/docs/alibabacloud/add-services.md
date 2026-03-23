E-MapReduce (EMR) allows you to add some services to an existing EMR cluster. This topic describes how to add services to an existing cluster in the EMR console.

## Prerequisites

A cluster is created and is in the Running state. For more information about how to create a cluster, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630).

## Limits

-   The cluster is in the Running state.
    
-   All nodes in the cluster are in the Running state and the services that are deployed in the cluster work as expected.
    
-   You can add services to the cluster only in the scenarios that are described in the following table.
    
    **Note**
    
    -   If you turn on **Kerberos Authentication** when you create a cluster, you cannot add the Knox and Kudu services to the cluster after the cluster is created.
        
    -   The services that you can add to an existing cluster vary based on the version of EMR. The actual services that you can add to an existing cluster are displayed in the EMR console.
        
    
    **Scenario**
    
    **Service that you can add**
    
    DataLake clusters (EMR V3.43.0, EMR V5.9.0, and their later minor versions)
    
    -   Knox (depending on OpenLDAP)
        
    -   OpenLDAP
        
    -   Ranger (depending on Ranger-plugin and Hadoop-Common)
        
    -   Iceberg
        
    -   Hudi
        
    -   JindoData (a minor version earlier than EMR V5.15.X or EMR V3.49.X)
        
    -   JindoCache (EMR V5.15.X or a later minor version or EMR V3.49.X or a later minor version)
        
    -   Presto/Trino (depending on Hadoop-Common)
        
    -   DLF-Auth
        
    -   Tez (depending on YARN)
        
    -   Flume (depending on Hadoop-Common)
        
    -   RSS/Celeborn
        
    -   Sqoop (depending on YARN)
        
    -   Kyuubi (depending on Spark 3 and ZooKeeper)
        
    -   Paimon
        
    -   ZooKeeper
        
    
    Dataflow clusters (EMR V3.43.0, EMR V5.9.0, and their later minor versions)
    
    -   Flink (depending on YARN and OpenLDAP)
        
    -   OpenLDAP
        
    -   Knox (depending on OpenLDAP)
        
    -   Paimon
        
    -   ZooKeeper
        
    
    DataServing clusters (EMR V3.43.0, EMR V5.9.0, and their later minor versions)
    
    -   HBase (depending on ZooKeeper and HDFS or OSS-HDFS)
        
    -   Phoenix (depending on HBase)
        
    -   JindoData (a minor version earlier than EMR V5.15.X or EMR V3.49.X)
        
    -   JindoCache (EMR V5.15.X or a later minor version or EMR V3.49.X or a later minor version)
        
    
    OLAP (EMR V3.43.0, EMR V5.9.0 and their later minor versions)
    
    None
    
    Custom (EMR V3.43.0, EMR V5.9.0 and their later minor versions)
    
    -   Knox (depending on OpenLDAP)
        
    -   OpenLDAP
        
    -   Ranger (depending on Ranger-plugin and Hadoop-Common)
        
    -   Iceberg
        
    -   Hudi
        
    -   JindoData (a minor version earlier than EMR V5.15.X or EMR V3.49.X)
        
    -   JindoCache (EMR V5.15.X or a later minor version or EMR V3.49.X or a later minor version)
        
    -   Presto (depending on Hadoop-Common)
        
    -   DLF-Auth
        
    -   Tez (depending on YARN)
        
    -   Flume (depending on Hadoop-Common)
        
    -   RSS/Celeborn
        
    -   Flink (depending on YARN and OpenLDAP)
        
    -   HBase (depending on ZooKeeper and HDFS or OSS-HDFS)
        
    -   Phoenix (depending on HBase)
        
    
    Hadoop (available only for existing users)
    
    -   Impala
        
    -   Presto
        
    -   Oozie
        
    -   ZooKeeper
        
    -   HBase
        
    -   Zeppelin
        
    -   Storm
        
    -   Ranger
        
    -   Superset
        
    -   Livy
        
    -   Flume
        
    -   Kudu
        
    -   ESS or RSS
        
    

## Precautions

After you add services, you may need to manually modify the related configurations of some existing services and restart the existing services for the configurations to take effect. We recommend that you add services during off-peak hours.

## Procedure

1.  Go to the Services tab.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
        
    2.  In the top navigation bar, select the region where your cluster resides and select a resource group based on your business requirements.
        
    3.  On the EMR on ECS page, find the desired cluster and click **Services** in the Actions column.
        
2.  On the **Services** tab, click **Add Service**.
    
3.  In the **Add Service** panel, select the services that you want to add and click **OK**. After the services are added, the **The service is added** message is returned. You can view the added services on the Services tab.
    
    **Note**
    
    Some of the services that you want to add can work as expected only after you modify the configurations of some existing services. After the services are added, the system prompts you to modify the configurations of some existing services. Read the prompt message, click **Continue**, and then follow the on-screen instructions to modify the configurations of some existing services.
    
4.  **Optional.** Modify the configurations of some existing services.
    
    For example, after you add the Trino service, you must go to the Configure tabs of the Hive, Spark 3, Tez, Trino, and YARN services and modify the configurations of the services.
    
    1.  On the **Services** tab, click **Configure** for the services that have an orange dot in the upper-right corner.
        
        ![configure](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9876912761/p499445.png)
        
    2.  Click **Modify Configurations** in the prompt message.
        
        ![Modify Configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0156145761/p499447.png)
        
    3.  In the **Modify Configurations** panel, select all configuration items and click **Save**. By default, the **Save and Deliver Configuration** switch is turned on.
        
        ![Save](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2469601471/p499455.png)
        
    4.  Restart the services for the configurations to take effect. You can also click the corresponding prompt to make the configurations take effect.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1095682071/p744713.png)
        
        For more information about how to restart a service, see [Restart a service](/help/en/emr/emr-on-ecs/user-guide/restart-a-service#task-2140036).
        

## **References**

-   For information about how to access the web UI of a service, see [Access the web UIs of open source components in the EMR console](/help/en/emr/emr-on-ecs/user-guide/access-the-web-uis-of-open-source-components).
    
-   For information about how to view the health status of a service and its components, see [View the health status of services and components](/help/en/emr/emr-on-ecs/user-guide/view-the-health-status-of-services-and-components).
    
-   For information about service-related issues, see [FAQ about cluster management](/help/en/emr/emr-on-ecs/user-guide/faq-about-cluster-management).
