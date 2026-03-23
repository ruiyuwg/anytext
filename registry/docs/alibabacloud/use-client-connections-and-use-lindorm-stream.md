The Lindorm streaming engine is fully compatible with Flink SQL. You use Flink SQL to create a real-time compute task in the Lindorm streaming engine to efficiently process the raw data stored in an Apache Kafka topic. This topic describes how to use Flink SQL to submit a compute task to import data from an Apache Kafka topic to a Lindorm wide table.

## Prerequisites

-   The Lindorm streaming engine is activated for your Lindorm instance. For more information, see [Activate the streaming engine](/help/en/lindorm/activate-the-streaming-engine).
    
-   The IP address of your client is added to the whitelist of the Lindorm instance. For more information, see [Configure whitelists](/help/en/lindorm/getting-started/configure-a-whitelist#task-2045184).
    

## Usage notes

If your application is deployed on an Elastic Compute Service (ECS) instance and needs to connect to the Lindorm instance over a VPC, make sure that your Lindorm instance and the ECS instance meet the following requirements to ensure network connectivity:

-   Your Lindorm instance and ECS instance are deployed in the same region. We recommend that you deploy the two instances in the same zone to reduce network latency.
-   Your Lindorm instance and ECS instance are deployed in the same VPC.

## **Procedure**

### Step 1: Prepare data

1.  Use the Kafka API to write data that you want to process to the Kafka topic. You can use one of the following methods to write data:
    
    -   [Use an open source Apache Kafka client to write data to the Lindorm streaming engine](/help/en/lindorm/use-an-open-source-apache-kafka-client-to-write-data-to-the-lindorm-streaming-engine)
        
    -   [Use an open source Apache Kafka script tool to write data to the Lindorm streaming engine](/help/en/lindorm/connect-to-the-lindorm-streaming-engine-through-the-open-source)
        
    
    In this topic, an open source Kafka script tool is used to write data as an example.
    
    ```
    # Create a topic.
    ./kafka-topics.sh --bootstrap-server <Lindorm Stream Kafka Endpoint> --topic log_topic --create
    
    # Write data to the topic.
    ./kafka-console-producer.sh --bootstrap-server <Lindorm Stream Kafka Endpoint> --topic log_topic
    {"loglevel": "INFO", "thread":"thread-1", "class": "com.alibaba.stream.test", "detail":"thread-1 info detail", "timestamp": "1675840911549"}
    {"loglevel": "ERROR", "thread":"thread-2", "class": "com.alibaba.stream.test", "detail":"thread-2 error detail", "timestamp": "1675840911549"}
    {"loglevel": "WARN", "thread":"thread-3", "class": "com.alibaba.stream.test", "detail":"thread-3 warn detail", "timestamp": "1675840911549"}
    {"loglevel": "ERROR", "thread":"thread-4", "class": "com.alibaba.stream.test", "detail":"thread-4 error detail", "timestamp": "1675840911549"}
    ```
    
    For more information about how to view the **Lindorm Stream Kafka endpoint**, see [View endpoints](/help/en/lindorm/user-guide/view-endpoints).
    
2.  Create a result table in LindormTable to store the processing result.
    
    1.  Use Lindorm-cli to connect to LindormTable. For more information, see [Use Lindorm-cli to connect to and use LindormTable](/help/en/lindorm/user-guide/use-lindorm-cli-to-connect-to-and-use-lindormtable#concept-2088134).
        
    2.  Create a result table named `log`.
        
        ```
        CREATE TABLE IF NOT EXISTS log (
          loglevel VARCHAR,
          thread VARCHAR,
          class VARCHAR,
          detail VARCHAR,
          timestamp BIGINT,
        primary key (loglevel, thread) );
        ```
        

### **Step 2: Install the Lindorm streaming engine client**

1.  Run the following command on the ECS instance to download the package of the Lindorm streaming engine client:
    
    ```
    wget https://hbaseuepublic.oss-cn-beijing.aliyuncs.com/lindorm-sqlline-2.0.2.tar.gz
    ```
    
2.  Run the following command to decompress the package:
    
    ```
    tar zxvf lindorm-sqlline-2.0.2.tar.gz
    ```
    
3.  Go to the `lindorm-sqlline-2.0.2/bin` path, and then run the following command to connect to the Lindorm streaming engine:
    
    ```
    ./lindorm-sqlline -url <Lindorm Stream SQL Endpoint>
    ```
    
    For more information about how to view the **Lindorm Stream SQL endpoint**, see [View endpoints](/help/en/lindorm/user-guide/view-endpoints).
    

### **Step 3: Submit a compute task in the Lindorm streaming engine**

In the example described in this step, the following operations are performed:

1.  Create a Flink job named log\_to\_lindorm and create two tables named originalData and lindorm\_log\_table. The originalData table is the source table associated with the Kafka topic. The lindorm\_log\_table is the sink table that stores the result logs.
    
2.  Create a stream job to filter out the logs whose loglevel is ERROR and write the logs to the result table.
    

Sample code:

```
CREATE FJOB log_to_lindorm(
    --Create the Kafka source table.
    CREATE TABLE originalData(
        `loglevel` VARCHAR,
        `thread` VARCHAR,
        `class` VARCHAR,
        `detail` VARCHAR,
        `timestamp` BIGINT
    )WITH(
        'connector'='kafka',
        'topic'='log_topic',
        'scan.startup.mode'='earliest-offset',
        'properties.bootstrap.servers'='Lindorm Stream Kafka Endpoint',
        'format'='json'
    );
    -- Create the Lindorm wide table.
    CREATE TABLE lindorm_log_table(
        `loglevel` VARCHAR,
        `thread` VARCHAR,
        `class` VARCHAR,
        `detail` VARCHAR,
        `timestamp` BIGINT,
        PRIMARY KEY (`loglevel`, `thread`) NOT ENFORCED
    )WITH(
        'connector'='lindorm',
        'seedServer'='LindormTable Endpoint for HBase APIs',
        'userName'='root',
        'password'='test',
        'tableName'='log',
        'namespace'='default'
    );
    --Filter out the ERROR logs from the data in the Kafka topic and write the logs to the result wide table.
    INSERT INTO lindorm_log_table SELECT * FROM originalData WHERE loglevel = 'ERROR';
);
```

**Note**

-   For more information about how to view the LindormTable endpoint for HBase APIs, see [View endpoints](/help/en/lindorm/user-guide/view-endpoints).
    
-   For more information about the connector used to connect to the wide table, see [Configure wide table connectors for the Lindorm streaming engine](/help/en/lindorm/lindorm-stream-engine-connector-configuration).
    

### **Step 4: Query the processing result**

You can use one of the following methods to query the processing result:

-   Use Lindorm-cli to connect to LindormTable and run the following command to query the processing result:
    
    ```
    SELECT * FROM log LIMIT 5;
    ```
    
    The following result is returned:
    
    ```
    +----------+----------+-------------------------+-----------------------+---------------+
    | loglevel |  thread  |          class          |        detail         |   timestamp   |
    +----------+----------+-------------------------+-----------------------+---------------+
    | ERROR    | thread-2 | com.alibaba.stream.test | thread-2 error detail | 1675840911549 |
    | ERROR    | thread-4 | com.alibaba.stream.test | thread-4 error detail | 1675840911549 |
    +----------+----------+-------------------------+-----------------------+---------------+                                     
    ```
    
-   Use the cluster management system of LindormTable to query the processing result. For more information, see [Data query](/help/en/lindorm/user-guide/data-query#topic1501).
