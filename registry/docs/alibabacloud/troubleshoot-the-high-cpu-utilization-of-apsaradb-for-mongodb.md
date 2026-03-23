When you use an ApsaraDB for MongoDB instance, the CPU utilization of the instance may become excessively high or even approach 100%. A high CPU utilization slows down read/write operations and affects normal business operations. This topic describes how to troubleshoot the high CPU utilization issues of an ApsaraDB for MongoDB instance for your application.

## Analyze running requests in the instance

1.  Connect to the instance by using the mongo shell.
    
    Connection methods vary with instance architecture. You can refer to the following topics for details:
    
    -   [Connect to a standalone instance by using the mongo shell](/help/en/mongodb/connect-to-a-standalone-instance-by-using-the-mongo-shell#task-iw5-tg4-hfb)
        
    -   [Connect to a replica set instance by using the mongo shell](/help/en/mongodb/connect-to-a-replica-set-instance-by-using-the-mongo-shell#task-wdf-npz-jfb)
        
    -   [Connect to a sharded cluster instance by using the mongo shell](/help/en/mongodb/connect-to-a-sharded-cluster-apsaradb-for-mongodb-instance-by-using-the-mongo-shell#task-wdf-npz-jfb)
        
    
2.  Run the `db.currentOp()` command to check running operations in the instance.
    
    Sample output:
    
    ```
    {
            "desc" : "conn632530",
            "threadId" : "140298196924160",
            "connectionId" : 632530,
            "client" : "11.192.159.236:57052",
            "active" : true,
            "opid" : 1008837885,
            "secs_running" : 0,
            "microsecs_running" : NumberLong(70),
            "op" : "update",
            "ns" : "mygame.players",
            "query" : {
                "uid" : NumberLong(31577677)
            },
            "numYields" : 0,
            "locks" : {
                "Global" : "w",
                "Database" : "w",
                "Collection" : "w"
            },
            ....
        }
    ```
    
    The following table describes the fields to which you need to pay close attention.
    
    **Field**
    
    **Description**
    
    `client`
    
    The client that sent the request.
    
    `opid`
    
    The unique ID of the operation.
    
    If necessary, you can run the `db.killOp(opid)` command to terminate the operation.
    
    `secs_running`
    
    The duration that the operation has been running. Unit: seconds.
    
    If a relatively large value is returned for this field, check whether the request is appropriate.
    
    `microsecs_running`
    
    The duration that the operation has been running. Unit: microseconds.
    
    If a relatively large value is returned for this field, check whether the request is appropriate.
    
    `ns`
    
    The collection on which the operation performs a scan.
    
    `op`
    
    The operation type. In most cases, this value is query, insert, update, or delete.
    
    `locks`
    
    The lock-related information. For more information, see [FAQ: Concurrency](https://docs.mongodb.com/manual/faq/concurrency/index.html).
    
    **Note**
    
    For more information about the `db.currentOp()` command, see [db.currentOp()](https://docs.mongodb.com/manual/reference/method/db.currentOp/).
    

You can run the `db.currentOp()` command to check running operations and analyze whether the instance is processing time-consuming requests. For example, the CPU utilization is not high for your routine business. However, when an O&M engineer logs on to the instance for performing specific operations that require full collection scans, the CPU utilization significantly increases and the instance becomes sluggish. In this case, you must check time-consuming operations.

**Note**

If finding an abnormal request, obtain the operation ID (`opid`) of this request and run the `db.killOp(opid)` command to terminate this request.

For more information about the `db.killOp()` command, see [db.killOp()](https://www.mongodb.com/docs/manual/reference/method/db.killOp/).

## Analyze slow requests in the instance

If the CPU utilization of the instance immediately increases and remains high after your application starts running and you cannot find abnormal requests in the output of the `db.currentOp()` command, you can analyze slow requests in the instance.

1.  View the slow query logs of the instance in the ApsaraDB for MongoDB console. For more information, see [View slow query logs](/help/en/mongodb/user-guide/view-slow-query-logs#concept-nvd-mjj-wfb).
    
2.  Analyze the slow query logs to troubleshoot high CPU utilization issues on the instance.
    
    The following example shows a sample slow query log:
    
    ```
    {
      "atype": "slowOp",
      "param": {
        "op": "query",
        "ns": "abbott_analysis.uaidScanInfo",
        "query": {
          "find": "uaidScanInfo",
          "filter": {
            "dateType": 2,
            "companyCode": "GMP"
          },
          "ntoreturn": -1,
          "sort": {
            "scanDateTime": -1
          }
        },
        "keysExamined": 0,
        "docsExamined": 2181021,
        "hasSortStage": true,
        "cursorExhausted": true,
        "numYield": 17059,
        "locks": {
          "Global": {
            "acquireCount": {
              "r": {
                "$numberLong": "34120"
              }
            },
            "acquireWaitCount": {
              "r": {
                "$numberLong": "7"
              }
            },
            "timeAcquiringMicros": {
              "r": {
                "$numberLong": "3152"
              }
            }
          },
          "Database": {
            "acquireCount": {
              "r": {
                "$numberLong": "17060"
              }
            }
          },
          "Collection": {
            "acquireCount": {
              "r": {
                "$numberLong": "17060"
              }
            }
          }
        },
        "nreturned": 0,
        "responseLength": 20,
        "millis": 4878,
        "planSummary": "COLLSCAN"
      },
      "result": "OK"
    }
    ```
    

For slow request logs, you must pay close attention to the following items:

-   Full collection scan (keywords: `COLLSCAN` and `docsExamined`)
    
    -   `COLLSCAN` indicates a full collection scan.
        
        A full collection scan for a request (such as a query, update, or delete operation) may cause a high CPU utilization. If you find a `COLLSCAN` keyword in slow request logs, your CPU resources may have been occupied by these requests.
        
        **Note**
        
        If such requests are frequently submitted, we recommend that you create an index on queried fields to optimize query performance.
        
    -   The `docsExamined` field indicates the number of documents that the instance has scanned for a request. The greater the field value is, the more CPU resources this request occupies.
        
-   Inappropriate indexes (keywords: `IXSCAN` and `keysExamined`)
    
    **Note**
    
    -   Excessive indexes affect the write and update performance.
        
    -   If your application involves a large number of write operations and you use indexes, the application performance may be affected.
        
    
    The `keysExamined` field indicates the number of index keys that the instance has scanned for a request using an index. The greater the field value is, the more CPU resources this request occupies.
    
    If you create an index that is inappropriate or matches a large amount of data, the index cannot reduce CPU overheads or accelerate the execution of a request.
    
    For example, for the data in a collection, the x field can be set only to 1 or 2, whereas the y field has a wider value range.
    
    ```
    { x: 1, y: 1 }
    { x: 1, y: 2 }
    { x: 1, y: 3 }
    ......
    { x: 1, y: 100000} 
    { x: 2, y: 1 }
    { x: 2, y: 2 }
    { x: 2, y: 3 }
    ......
    { x: 1, y: 100000}
    ```
    
    To query data {x: 1, y: 2}, you can create an index.
    
    ```
    db.createIndex( {x: 1} )         //This index is inappropriate because a large amount of data has the same value as the x field.
    db.createIndex( {x: 1, y: 1} )   //This index is inappropriate because a large amount of data has the same value as the x field.
    db.createIndex( {y: 1 } )        //This index is appropriate because a small amount of data has the same value as the y field.
    db.createIndex( {y: 1, x: 1 } )  //This index is appropriate because a small amount of data has the same value as the y field.
    ```
    
    **Note**
    
    For more information about the difference between indexes {y: 1} and {y: 1, x: 1}, see [Design Principles of MongoDB Indexes](https://yq.aliyun.com/articles/33726) and [Compound Indexes](https://www.mongodb.com/docs/v7.0/core/indexes/index-types/index-compound/).
    
-   Sorting of a large amount of data (keywords: `SORT` and `hasSortStage`)
    
    The value of the `hasSortStage` field is `true` when a query contains a sort order. If the query cannot use an index to return the requested sorted results in order, the instance must sort the query results. A sort operation may cause a high CPU utilization. In response to this issue, you can create an index on frequently sorted fields to optimize sorting performance.
    
    **Note**
    
    If you find the `SORT` keyword in slow query logs, you can use an index to optimize sorting performance.
    

Other operations such as index creation and `aggregation` (a combination of traverse, query, update, and sort) may also cause a high CPU utilization. You can also use the preceding troubleshooting methods.

## Assess service capabilities

After you analyze and optimize running requests and slow requests in the instance, all requests are appropriate and efficiently use indexes. If CPU resources are still fully occupied, the instance may have reached the maximum capabilities. In this case, we recommend that you use the following method to address the issue:

1.  View monitoring data to analyze the resource usage of the instance. For more information, see [View monitoring data](/help/en/mongodb/view-monitoring-data#concept-sn1-wh5-4fb) and [Node monitoring (previously basic monitoring)](/help/en/mongodb/user-guide/basic-monitoring#task-2080535).
    
2.  Check whether the instance meets the performance and capability requirements of your business scenarios.
    

For more information about how to upgrade an instance, see [Change the configurations of an instance](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#concept-yzz-dgl-j2b) or [Change the configurations of a replica set instance](/help/en/mongodb/user-guide/change-the-configurations-of-a-replica-set-instance#task-pwm-cfm-qfb).
