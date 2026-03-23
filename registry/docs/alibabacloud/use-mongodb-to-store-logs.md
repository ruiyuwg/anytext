An online service generates a large number of operational logs and access logs that contain information about occurred errors, triggered alerts, and user behaviors. In most cases, the logs are stored in text files that are readable and can be used to quickly identify issues in routine O&M. However, after a service generates a large number of logs, it is necessary to store and analyze the logs in a more advanced manner to derive valuable information from the log data.

This topic describes how to use ApsaraDB for MongoDB to store and analyze the access logs of a web service to maximize the value of the logs. The methods and operations described in this topic also apply to other types of log storage services.

## Access logs of a web server

The following example shows an access log entry of a web server. It contains information about the access source, username, URL of accessed resources, access results, used operating system, and browser type.

```
127.0.0.1 - frank [10/Oct/2000:13:55:36 -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326 "[http://www.example.com/start.html](http://www.example.com/start.html)" "Mozilla/4.08 [en] (Win98; I ;Nav)"
            
```

You can use ApsaraDB for MongoDB to store each access log in a single document in the following format:

```
{
            _id: ObjectId('4f442120eb03305789000000'),
            line: '127.0.0.1 - frank [10/Oct/2000:13:55:36 -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326 "[http://www.example.com/start.html](http://www.example.com/start.html)" "Mozilla/4.08 [en] (Win98; I ;Nav)"'
            }
            
```

The preceding format is easy to configure. However, the format may cause inconvenience in the analysis of log data. ApsaraDB for MongoDB is not a service targeted at text analysis. We recommend that you convert the format of a log to extract each field and its value from the log before you store the log in ApsaraDB for MongoDB as a document. The following sample code shows how the preceding log is converted to separate fields and values:

```
{
            _id: ObjectId('4f442120eb03305789000000'),
            host: "127.0.0.1",
            logname: null,
            user: 'frank',
            time: ISODate("2000-10-10T20:55:36Z"),
            path: "/apache_pb.gif",
            request: "GET /apache_pb.gif HTTP/1.0",
            status: 200,
            response_size: 2326,
            referrer: "[http://www.example.com/start.html](http://www.example.com/start.html)",
            user_agent: "Mozilla/4.08 [en] (Win98; I ;Nav)"
            }
            
```

When you convert the format of a log, you can remove the fields that are irrelevant to data analysis to save storage space. You must remove several irrelevant fields in the preceding document, including the user, request, and status fields. You can also remove the time field because the \_id field contains information about the access time. You can also retain the time field. This field indicates the time when the request was sent, and makes it easier to write SQL statements. We recommend that you select the data type that requires less storage space. Based on the preceding considerations, the following updated content may be eventually stored in the document:

```
{
            _id: ObjectId('4f442120eb03305789000000'),
            host: "127.0.0.1",
            time: ISODate("2000-10-10T20:55:36Z"),
            path: "/apache_pb.gif",
            referer: "[http://www.example.com/start.html](http://www.example.com/start.html)",
            user_agent: "Mozilla/4.08 [en] (Win98; I ;Nav)"
            }
            
```

## Write logs to ApsaraDB for MongoDB

A log storage service is required to collect a large number of logs at a time. To meet this requirement, you can specify a `write concern` for ApsaraDB for MongoDB to manage the write operation. For example, you can specify the following write concern:

```
db.events.insert({
                host: "127.0.0.1",
                time: ISODate("2000-10-10T20:55:36Z"),
                path: "/apache_pb.gif",
                referer: "[http://www.example.com/start.html](http://www.example.com/start.html)",
                user_agent: "Mozilla/4.08 [en] (Win98; I ;Nav)"
                },
                {
                 writeConcern:{w: 0} 
                }
                )
```

**Note**

-   If you require the highest write throughput, you can set the w option of the `write concern` to `{w: 0}`.
    
-   If a log contains important information, such as the credentials of service billing, you can set the w option of the `write concern` to `{w: 1}` or `{w: "majority"}`, which is more secure than {w: 0}.
    

To improve the efficiency of the write operation, you can write multiple logs to ApsaraDB for MongoDB with a single request. The request is in the following format:

`db.events.insert([doc1, doc2, ...])`

## Query logs in ApsaraDB for MongoDB

After you use the preceding method to store logs in ApsaraDB for MongoDB, you can query the logs based on your requirements.

-   Query the logs of all requests to access /apache\_pb.gif. `q_events = db.events.find({'path': '/apache_pb.gif'})`
    
    **Note**
    
    If you frequently perform this query, you can create an index on the path field to improve query efficiency. Example: `db.events.createIndex({path: 1})`.
    
-   Query the logs of all requests within a day.
    
    ```
    q_events = db.events.find({'time': { '$gte': ISODate("2016-12-19T00:00:00.00Z"),'$lt': ISODate("2016-12-20T00:00:00.00Z")}})
    ```
    
    **Note**
    
    You can create an index on the time field to improve query efficiency. Example: `db.events.createIndex({time: 1})`.
    
-   Query the logs of all requests that are sent to a server over a specified period of time.
    
    ```
    q_events = db.events.find({
                    'host': '127.0.0.1',
                    'time': {'$gte': ISODate("2016-12-19T00:00:00.00Z"),'$lt': ISODate("2016-12-20T00:00:00.00Z" }
                    })
                        
    ```
    
    Similarly, you can use the aggregation pipeline or MapReduce framework provided by ApsaraDB for MongoDB to initiate more complex queries for data analysis. We recommend that you create indexes on fields properly to improve query efficiency.
    

## Data sharding

As the number of service nodes that generate logs increases, the write and storage capabilities of a log storage service are challenged and a higher level of capabilities are required. In this case, you can use the sharding methods of ApsaraDB for MongoDB to distribute log data across multiple shards. When you use the sharding methods, you must focus on choosing shard keys.

-   Use a field that indicates the timestamp as the shard key: For example, use the \_id or time field as the shard key. However, the following issues may occur in this type of sharding:
    
    -   As the timestamp grows in sequence, newly collected log data is distributed to the same shard. Therefore, the write capability of ApsaraDB for MongoDB is not enhanced.
        
    -   Many queries target at the most recent log data, which is distributed to only a few shards. In this case, only statistics related to these shards are returned for these queries.
        
-   Use the hashed sharding method: The default shard key of hashed sharding is set to the \_id field. This sharding method evenly distributes log data to each shard. Therefore, the write capability of ApsaraDB for MongoDB grows with shards in a linear manner. However, hashed sharding distributes data randomly. This leads to the issue where ApsaraDB for MongoDB cannot efficiently handle the requests of given ranged queries (usually for data analysis). To handle such a request, ApsaraDB for MongoDB needs to traverse all the shards and merge the queried data to return the final result.
    
-   Use the ranged sharding method: For example, the values of the path field in the preceding example are evenly distributed and many queries are performed based on the path field. In this case, you can specify the path field as the shard key to divide data into contiguous ranges. This method has the following advantages:
    
    -   Write requests are evenly distributed to each shard.
        
    -   Query requests based on the path field are densely distributed to one or more shards, which improves the query efficiency.
        
    
    However, this method has the following disadvantages:
    
    -   If a value of the path field is frequently accessed, logs that have the same shard key value are likely to be stored in the same chunk or shard. The value is accessed at high frequency and the size of the chunk may be large.
        
    -   If the path field has few values, it can result in uneven data distribution across shards.
        
    
    To fix the preceding issues, you can add an additional field to the shard key. For example, the original shard key value is {path: 1}. In this case, you can add the ssk field to the shard key. The new shard key value is `{path: 1, ssk: 1}`.
    
    You can assign a random value to the `ssk` field, such as the hash value of the \_id field. You can also assign a timestamp to the ssk field. In this case, the shard key values that have the same path value are sorted by time.
    
    Therefore, the shard key has multiple values with even frequency. No shard key value is at an extremely high frequency. Each of the preceding sharding methods has its own advantages and trade-offs. You can select a method based on your business requirements.
    

## Solutions for data growth

ApsaraDB for MongoDB provides the sharding feature to store massive amounts of data. However, the storage costs increase as the data volume grows. In most cases, the value of log data decreases over time. Data that is generated one year ago or even three months ago, which is valueless to the analysis, needs to be cleared to reduce storage costs. ApsaraDB for MongoDB allows you to use the following solutions to meet such a requirement.

-   Use TTL indexes: Time to live (TTL) indexes are special single-field indexes that ApsaraDB for MongoDB can use to automatically remove documents from a collection after a specified period of time. In the preceding example, the time field indicates the time when the request was sent. You can run the following command to create a TTL index on the time field and specify that ApsaraDB for MongoDB removes the document after 30 hours: `db.events.createIndex( { time: 1 }, { expireAfterSeconds: 108000 } )`.
    
    **Note**
    
    By default, a background task that removes expired documents written in single-threading mode runs every 60 seconds after you create a TTL index. If a large amount of log data is written to ApsaraDB for MongoDB, many documents in ApsaraDB for MongoDB expire over time. The expired documents that are not removed occupy a large storage space.
    
-   Use capped collections: If you do not have strict limits on the storage period, whereas you want to limit the storage space, you can use capped collections to store log data. Capped collections work in the following manner: If you specify a maximum storage space or a maximum number of stored documents for a capped collection and one of the specified limits is reached, ApsaraDB for MongoDB automatically removes the oldest documents in the collection. For example, you can run the following command to create and configure a capped collection: db.createCollection("event", {capped: true, size: 104857600000}.
    
-   Archive documents by collection or database periodically: At the end of a month, you can rename the collection that stores the documents of that month and create another collection to store documents of the next month. We recommend that you append information about the year and month to the collection name. The following example shows how the 12 collections that store the documents written in each month of 2016 are named:
    
    ```
    events-201601
                    events-201602
                    events-201603
                    events-201604
                    ....
                    events-201612
                        
    ```
    
    If you must clear the documents of a specific month, you can run the following command to directly delete the corresponding collection:
    
    ```
     db["events-201601"].drop()
                    db["events-201602"].drop()
                        
    ```
    
    If you want to query the documents of multiple months, the query statements may be complex because ApsaraDB for MongoDB needs to merge the queried data of multiple collections to return the final result.
