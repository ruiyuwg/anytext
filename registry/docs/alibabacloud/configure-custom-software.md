Services such as YARN and Hive have many configuration items. You can use the custom software configuration feature to modify existing configurations or add new ones.

## Configure during cluster creation

1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
    
2.  In the top menu bar, select a region and resource group.
    
3.  On the EMR on ECS page, click **Create Cluster**.
    
4.  In the **Advanced Settings** section of the **Software Configuration** step, turn on the **Custom Software Configuration** switch. ![Custom software](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9966912761/p374270.png)
    
    You can add a JSON configuration file to overwrite or add service parameters during cluster creation. The following code shows a sample JSON file.
    
    ```
    [
        {
            "ApplicationName":"YARN",
            "ConfigFileName":"yarn-site.xml",
            "ConfigItemKey":"yarn.nodemanager.resource.cpu-vcores",
            "ConfigItemValue":"8"
        },
        {
            "ApplicationName":"YARN",
            "ConfigFileName":"yarn-site.xml",
            "ConfigItemKey":"aaa",
            "ConfigItemValue":"bbb"
        }
    ]
    ```
    
    -   The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        ApplicationName
        
        The service name. The name must be in all uppercase letters.
        
        ConfigFileName
        
        The name of the configuration file to be passed.
        
        **Note**
        
        To apply the configuration file correctly, note the file naming details.
        
        -   For clusters for DataLake, DataFlow, OLAP, DataServing, or Custom scenarios, the file name must include an extension. Example: `yarn-site.xml`.
            
        -   For legacy data lake (Hadoop) clusters, the file name does not require an extension. Example: `yarn-site`.
            
        
        ConfigItemKey
        
        The name of the configuration item.
        
        ConfigItemValue
        
        The value to set for the configuration item.
        
    -   The following table lists the configuration files for each service.
        
        **Service**
        
        **Configuration file**
        
        YARN
        
        -   core-site.xml
            
        -   log4j.properties
            
        -   hdfs-site.xml
            
        -   mapred-site.xml
            
        -   yarn-site.xml
            
        -   httpsfs-site.xml
            
        -   capacity-scheduler.xml
            
        -   hadoop-env.sh
            
        -   httpfs-env.sh
            
        -   mapred-env.sh
            
        -   yarn-env.sh
            
        
        Hive
        
        -   hive-env.sh
            
        -   hive-site.xml
            
        -   hive-exec-log4j.properties
            
        -   hive-log4j.properties
            
        
    
    After you configure the parameters for the cluster components, you can continue to create the cluster. For more information, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630).
    

## **Configure when adding a node group**

You can scale out your cluster while it is running by adding a new node group. When you add a node group, you can also adjust service configuration items. For more information, see [Manage node groups](/help/en/emr/emr-on-ecs/user-guide/manage-node-groups-for-datalake-dataflow-olap-and-dataserving-clusters#section-49o-tfm-c7l).

## **References**

After a cluster is created, you can also adjust configuration items on the configuration page for each service. For more information, see [Manage configuration items](/help/en/emr/emr-on-ecs/user-guide/manage-configuration-items).
