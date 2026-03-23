If the disk space of an ApsaraDB for MongoDB instance is exhausted, the instance is locked and you cannot write data to or delete data from the instance. This topic describes how to troubleshoot write failure due to exhausted disk space.

## Symptoms

-   Your application can read data from an instance but cannot write data to the instance.
    
-   When an administrator connects to the instance by using the mongo shell for troubleshooting, the administrator attempts to write a piece of data and receives the following error message: `not authorized on xxxx to execute command`. Example:
    
    ```
    db.customer.insert({"name":"zhangsan"})
    WriteCommandError({
            "operationTime" : Timestamp(1563437183, 1),
            "ok" : 0,
            "errmsg" : "not authorized on db1 to execute command { insert: \"customer\", ordered: true, lsid: { id: UUID(\"8d43461c-5c51-49ef-b9b3-9xxxxxxxxf\") }, $clusterTime: { clusterTime: Timestamp(1563437183, 1), signature: { hash: BinData(0, 0C3FAAE747xxxxxx), keyId: 668293399xxxxxx } }, $db: \"db1\" }",
            "code" : 13,
            "codeName" : "Unauthorized",
            "$clusterTime" : {
                    "clusterTime" : Timestamp(1563437183, 1),
                    "signature" : {
                            "hash" : BinData(0,"DD+q50dPTuIQKTzytT5SiTPYX4Q="),
                            "keyId" : NumberLong("66xxxxxxxx")
                    }
            }
    })
    ```
    
-   The administrator finds that the instance status is **Locked** in the ApsaraDB for MongoDB console.
    
    **Note**
    
    When the disk space of a sharded cluster instance is exhausted, the instance does not enter the **Locked** state.
    

## Check whether disk space is exhausted

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the upper-left corner of the page, select the resource group and region to which the instance belongs.
    
3.  In the left-side navigation pane, click **Replica set instances** or **Sharded cluster instance** based on the instance type.
    
4.  On the page that appears, find the instance that you want to manage and click its ID.
    
5.  To check whether disk space is exhausted, perform the following operations based on the architecture of the instance.
    
    **Note**
    
    The system collects data related to disk space usage at intervals of five minutes.
    
    -   Standalone or replica set instances
        
        On the **Basic Information** page, view the instance status and the disk space usage of the instance. In this example, the instance status is **Locked**, and the disk space usage of the instance exceeds 100%. This indicates that the disk space is exhausted.
        
        ![查看磁盘空间使用率](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4266845951/p51781.png)
        
    -   Sharded cluster instances
        
        1.  In the left-side navigation pane, click **Monitoring Data**.
            
        2.  On the **Monitoring Data** page, select the shard that you want to monitor.![选择Shard节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4266845951/p51878.png)
            
            **Note**
            
            A node ID that starts with `d` indicates the ID of a shard node, and a node ID that starts with `s` indicates the ID of a mongos node.
            
        3.  View disk space usage. In this example, the disk space usage of the shard node exceeds 100%. This indicates that the disk space is exhausted.![查看磁盘空间使用率](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4266845951/p51879.png)
            
    

## Solutions

-   Expand the disk space of the instance by modifying instance configurations. For more information, see [Overview](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#concept-yzz-dgl-j2b).
    
    **Note**
    
    The maximum disk space size of an instance varies based on the specifications of the instance. For more information, see [Overview](/help/en/mongodb/product-overview/instance-types/#concept-wrp-kg4-tdb).
    
-   A replica set instance supports up to 3,000 GB of disk space. If you require larger disk space, we recommend that you deploy a [sharded cluster instance](/help/en/mongodb/product-overview/sharded-cluster-instances#concept-rcj-dc4-tdb) on which you can add shards to expand the disk space to a maximum of 96,000 GB.
    
    **Note**
    
    The data of the source instance can be migrated to a new sharded cluster instance by using Data Transmission Service (DTS). For more information, see [Migrate data from an ApsaraDB for MongoDB replica set instance to an ApsaraDB for MongoDB sharded cluster instance](/help/en/mongodb/user-guide/migrate-data-from-an-apsaradb-for-mongodb-replica-set-instance-to-an-apsaradb-for-mongodb-sharded-cluster-instance#concept-fdj-twz-zfb).
    

## Optimization suggestions

If you run the `db.collection.remove` command to delete a large amount of data from the instance or have not defragment the disk, you can recycle disk fragments to improve disk usage. For more information, see [Defragment the disks of an instance to increase disk utilization](/help/en/mongodb/use-cases/defragment-a-disk-to-improve-disk-usage#concept-ngj-sxl-sfb).
