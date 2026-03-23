This topic describes the Alibaba Cloud Data Lake Formation (DLF) service, which can be used to store the metadata of E-MapReduce (EMR) clusters. This topic also describes how to change the metadata storage type of EMR clusters.

## Background information

DLF is a fully managed service that is developed by Alibaba Cloud to help you easily build and manage a cloud-native data lake. DLF allows you to manage metadata and user permissions in a centralized manner, ingest data into data lakes with ease, and explore data in data lakes with a few clicks. For more information, see [Overview](/help/en/dlf/dlf-1-0/product-overview/overview-1#topic-1948699).

DLF also allows you to connect the cloud-native data lake to various compute engines. This way, you can break down data silos and gain insight into the business value of data.

## Prerequisites

The DLF service is activated in the [DLF console](https://datalake.console.aliyun.com/cn-hangzhou/openDlfService).

## Limits

-   DLF is compatible with Hive 2.x, Hive 3.x, Presto, and Spark SQL in EMR.
-   You can specify DLF as the Hive metadatabase only for a cluster in EMR V3.33.0 or a later minor version, or in EMR V4.5.0 or a later minor version.

## Change the storage type of the metadata

1.  Go to the Hive service page.
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list).
    2.  In the top navigation bar, select the region where your cluster resides and select a resource group based on your business requirements.
    3.  On the EMR on ECS page, find the desired cluster and click Services in the Actions column.
    4.  On the Services tab, find the Hive service and click Configure.
2.  On the Configure tab, enter the hive.imetastoreclient.factory.class parameter in the search box and click the ![Search](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8172822761/p459713.png) icon.
    
    -   Use a built-in MySQL database, a unified metadatabase, or a self-managed ApsaraDB RDS for MySQL database as the metadatabase:
        
        Set the value of the hive.imetastoreclient.factory.class parameter to org.apache.hadoop.hive.ql.metadata.SessionHiveMetaStoreClientFactory.
        
    -   Use DLF for unified metadata storage:
        
        Set the value of the hive.imetastoreclient.factory.class parameter to com.aliyun.datalake.metastore.hive2.DlfMetaStoreClientFactory.
        
    
3.  Save the configuration.
    1.  In the lower-left corner of the Configure tab, click Save.
    2.  In the Save dialog box, configure the Execution Reason parameter and click Save.
4.  Restart the Hive service.
    1.  In the upper-right corner of the Hive service page, choose More > Restart.
    2.  In the Restart HIVE Services dialog box, configure the Execution Reason parameter and click OK.
    3.  In the Confirm message, click OK.
        
        To view the task progress, click Operation History in the upper-right corner.
