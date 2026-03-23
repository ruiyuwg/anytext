The HBASE-HDFS service provides persistent and highly reliable storage for HBase logs by storing the WAL files on HDFS.

## **HBase-HDFS**

HDFS is a core component of the Hadoop ecosystem that provides reliable, distributed file storage. The HBase-HDFS service uses HDFS as its underlying data storage solution, inheriting all the native features of HDFS without modifying the basic architecture. For more information about HDFS, see [HDFS overview](/help/en/emr/emr-on-ecs/user-guide/hdfs-overview).

The HBase-HDFS service is automatically deployed in the following cases:

-   ### **Create a cluster**
    
    -   Create a cluster in the console: If you select the OSS-HDFS and HBase services and the HBase Log Storage check box, the HBase-HDFS service is automatically deployed after the cluster is created.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3240985071/p749780.png)
        
    -   Create a cluster using OpenAPI: Call the [CreateCluster](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-createcluster) or [RunCluster](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-runcluster) operation to create a cluster, and add the required configurations to the Application and ApplicationConfig parameters.
        
        The following code provides an example of the configurations. Set the parameters as needed.
        
        ```
        Application = ["HBASE", "OSS-HDFS", "HBASE-HDFS"]
        
        ApplicationConfigs = [
            {
                "ConfigFileName": "hbase-site.xml",
                "ApplicationName": "HBASE",
                "ConfigItemKey": "hbase.wal.mode",
                "ConfigScope": "CLUSTER",
                "ConfigItemValue": "HDFS"
            },
            {
                "ConfigFileName": "common.conf",
                "ApplicationName": "OSS-HDFS",
                "ConfigItemKey": "OSS_ROOT_URI",
                "ConfigScope": "CLUSTER",
                "ConfigItemValue": "oss://examplebucket.oss-cn-hangzhou-internal.aliyuncs.com/"
            },
            {
                "ConfigFileName": "hdfs-site.xml",
                "ApplicationName": "HBASE-HDFS",
                "ConfigItemKey": "dfs.balancer.block-move.timeout",
                "ConfigScope": "CLUSTER",
                "ConfigItemValue": "600000"
            }
        ]
        ```
        
-   ### **Add a service**
    
    If you create a cluster with the OSS-HDFS service and later add the HBase service, the HBase-HDFS service is also automatically deployed.
    

## **References**

-   For information about how to view the deployment information of service components, see [View the deployment information of service components](/help/en/emr/emr-on-ecs/user-guide/view-component-deployment-information).
    
-   For information about how to unpublish an HBase-HDFS DataNode, see [Scale in a node group](/help/en/emr/emr-on-ecs/use-cases/manually-shrink-a-node-group).
