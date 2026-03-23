The balancer distributes data evenly across shard nodes in an ApsaraDB for MongoDB sharded cluster instance. This topic describes how to check the balancer status, schedule an active time window, and enable or disable the balancer.

**Note**

All examples in this topic use the mongo shell. Commands and output may differ with other client tools.

## How it works

The balancer monitors data distribution across shard nodes and automatically migrates data to maintain balance. Its behavior depends on the database engine version.

### MongoDB 5.0 and earlier

The balancer tracks the number of chunks on each shard node. When the difference between shard nodes reaches the migration threshold, the balancer migrates chunks (`moveChunk`) to rebalance the cluster.

**Database engine version**

**Migration threshold**

MongoDB 4.2, 4.4, 5.0

1

MongoDB 3.4 (discontinued), MongoDB 4.0

Default: 2. Reduced to 1 if total chunks < 20 or previously migrated chunks < 20

MongoDB 3.2 (discontinued)

Total chunks < 20: threshold is 2. Total chunks 20--80: threshold is 4. Total chunks >= 80: threshold is 8

### MongoDB 6.0

The balancer monitors data size per collection on each shard node instead of counting chunks. If the data size difference between two shard nodes in the same collection exceeds 384 MB (three times the default chunk size), the balancer splits the data by shard tag and migrates it using `moveRange`.

To check whether data is balanced, run `getShardDistribution()` and focus on data size rather than chunk count.

## Usage notes

-   The balancer is supported only for sharded cluster instances.
    
-   By default, the balancer is enabled with a 24-hour active time window (always running).
    
-   Chunk migration consumes instance resources and may degrade database performance. Schedule the active time window during off-peak hours.
    

## Check the balancer status

Before you disable the balancer, check whether it is actively running a migration task.

1.  [Connect to the sharded cluster instance by using the mongo shell](/help/en/mongodb/connect-to-a-sharded-cluster-apsaradb-for-mongodb-instance-by-using-the-mongo-shell#concept-mnd-xg2-qgb).
    
2.  Run the following command:
    
    ```
       sh.isBalancerRunning()
    ```
    
3.  Interpret the result based on the return type: **Map return value** Some mongo shell versions return a Map object. Check the `inBalancerRound` field: For more information, see [sh.isBalancerRunning()](https://www.mongodb.com/docs/v5.0/reference/method/sh.isBalancerRunning/).
    
    **Boolean return value**
    
    **Value**
    
    **Meaning**
    
    `false`
    
    The balancer is idle. You can disable the balancer.
    
    `true`
    
    The balancer is migrating chunks. Do not disable it -- doing so may cause data inconsistency.
    
    **`inBalancerRound` value**
    
    **Meaning**
    
    `false`
    
    The balancer is idle. You can disable the balancer.
    
    `true`
    
    The balancer is migrating chunks. Do not disable it -- doing so may cause data inconsistency.
    
    ```
       {
         mode: 'full',
         inBalancerRound: false,
         numBalancerRounds: Long("1143"),
         ok: 1,
         '$clusterTime': {
           clusterTime: Timestamp({ t: 1639753724, i: 3 }),
           signature: {
             hash: Binary(Buffer.from("0000000000000000000000000000000000000000", "hex"), 0),
             keyId: Long("0")
           }
         },
         operationTime: Timestamp({ t: 1639753724, i: 3 })
       }
    ```
    

## Set an active time window

Schedule the balancer to run only during specific hours to avoid performance impact during business hours.

1.  [Connect to the sharded cluster instance by using the mongo shell](/help/en/mongodb/connect-to-a-sharded-cluster-apsaradb-for-mongodb-instance-by-using-the-mongo-shell#concept-mnd-xg2-qgb).
    
2.  Switch to the config database:
    
    ```
       use config
    ```
    
3.  Set the active time window: Replace the placeholders with actual values: **Example:** Schedule the balancer to run from 01:00 to 03:00 daily:
    
    **Note**
    
    Times use the local time zone of the region where the instance is deployed.
    
    **Placeholder**
    
    **Description**
    
    **Format**
    
    `<start-time>`
    
    Start time of the active time window
    
    HH:MM (HH: 00--23, MM: 00--59)
    
    `<stop-time>`
    
    End time of the active time window
    
    HH:MM (HH: 00--23, MM: 00--59)
    
    ```
       db.settings.update(
          { _id: "balancer" },
          { $set: { activeWindow : { start : "<start-time>", stop : "<stop-time>" } } },
          { upsert: true }
       )
    ```
    
    ```
       db.settings.update(
          { _id: "balancer" },
          { $set: { activeWindow : { start : "01:00", stop : "03:00" } } },
          { upsert: true }
       )
    ```
    
4.  Verify the configuration by running `sh.status()`. The output includes the active time window:
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4130276951/p34738.png)
    

### Remove the active time window

To restore 24-hour continuous balancing, remove the active time window:

```
db.settings.update({ _id : "balancer" }, { $unset : { activeWindow : true } })
```

## Enable the balancer

After you enable the balancer, it immediately starts balancing data if sharding is configured. This consumes instance resources. Perform this operation during off-peak hours.

1.  [Connect to the sharded cluster instance by using the mongo shell](/help/en/mongodb/connect-to-a-sharded-cluster-apsaradb-for-mongodb-instance-by-using-the-mongo-shell#concept-mnd-xg2-qgb).
    
2.  Switch to the config database:
    
    ```
       use config
    ```
    
3.  Enable the balancer:
    
    ```
       sh.setBalancerState(true)
    ```
    

## Disable the balancer

**Note**

After the balancer is disabled, the balancer no longer balances data across shard nodes. This may cause data skew.

1.  [Connect to the sharded cluster instance by using the mongo shell](/help/en/mongodb/connect-to-a-sharded-cluster-apsaradb-for-mongodb-instance-by-using-the-mongo-shell#concept-mnd-xg2-qgb).
    
2.  Switch to the config database:
    
    ```
       use config
    ```
    
3.  Check whether the balancer is actively migrating data: For details on interpreting the return value, see [Check the balancer status](#section-c0d0ff8c).
    
    -   If the result is `false` (or `inBalancerRound: false` for Map return values), proceed to the next step.
        
    -   If the result is `true` (or `inBalancerRound: true`), wait for the current migration to complete before proceeding. Disabling the balancer during a migration may cause data inconsistency.
        
    
    ```
       sh.isBalancerRunning()
    ```
    
4.  After confirming the balancer is idle, disable it:
    
    ```
       sh.stopBalancer()
    ```
    

## References

-   [Connect to a sharded cluster instance by using the mongo shell](/help/en/mongodb/connect-to-a-sharded-cluster-apsaradb-for-mongodb-instance-by-using-the-mongo-shell#concept-mnd-xg2-qgb)
    
-   [sh.isBalancerRunning() -- MongoDB official documentation](https://www.mongodb.com/docs/v5.0/reference/method/sh.isBalancerRunning/)
