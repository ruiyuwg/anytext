Log Service allows you to ship logs to security information and event management (SIEM) systems. This way, you can import all logs related to regulations and audits on Alibaba Cloud to your security operations center (SOC).

## Terms

-   SIEM: SIEM systems include Splunk and IBM QRadar.
    
-   Splunk HEC: Splunk HTTP Event Collector (HEC) can be used to receive logs over HTTP or HTTPS.
    

## Deployment suggestions

-   Operating system: Linux, such as Ubuntu x64.
    
-   Hardware specifications:
    
    -   CPU: 2.0 GHz processor or higher, with 8 cores.
        
    -   Memory: 32 GB (recommended) or 16 GB.
        
    -   Network interface controller (NIC): 1 Gbit/s.
        
    -   Available disk space: at least 2 GB. We recommend that you prepare an available disk space of 10 GB or more.
        
-   Network specifications:
    
    The bandwidth for connections between your network and Alibaba Cloud must be capable of accommodating the data that is generated on Alibaba Cloud. Otherwise, logs cannot be consumed in real time. Assume that data is generated at an average speed in normal cases and at a speed twice the average during peak hours and 1 TB of raw logs are generated on a daily basis. If data is compressed at a ratio of 5:1 before transmission, we recommend that you use a bandwidth of about 4 MB/s (32 Mbit/s).
    
-   Python: You can use SDK for Python to consume log data. For more information about how to use SDK for Java to consume log data, see [Use consumer groups to consume logs](/help/en/sls/log-consumption-by-consumer-group#concept-dv4-xnq-zdb).
    

## SDK for Python

-   We recommend that you use a standard CPython interpreter.
    
-   You can run the python3 -m pip install aliyun-log-python-sdk -U command to install Log Service SDK for Python.
    
-   For more information about how to use Log Service SDK for Python, see [User Guide](https://github.com/aliyun/aliyun-log-python-sdk/blob/master/README.md).
    

## Consumer library

The consumer library is an advanced log consumption mode in Log Service. In this mode, you can use consumer groups to consume log data, instead of only using SDKs to consume log data. This way, you can focus on the business logic, instead of the implementation details of Log Service, load balancing between consumers, and failovers that may occur.

In Log Service, a Logstore can have multiple shards. The consumer library allocates shards to consumers in a consumer group. The following list describes the allocation rules:

-   Each shard can only be allocated to only one consumer.
    
-   One consumer can consume data from multiple shards.
    

After a new consumer is added to a consumer group, shards allocated to the consumer group are reallocated to each consumer for load balancing. The shards are reallocated based on the preceding rules. You can view the allocation details of shards.

The consumer library can also store checkpoints. This way, you can consume data starting from a checkpoint where data consumption was stopped after fault recovery. This ensures that data is consumed only once.

Spark Streaming, Storm, and Flink Connector all consume data based on the consumer library.

## Data shipping methods

We recommend that you write programs based on consumer groups to consume logs from Log Service in real time. Then, you can ship logs to SIEM systems over HTTPS or Syslog.

-   For more information about how to ship logs over HTTPS, see [Ship logs to a SIEM system over HTTPS](/help/en/sls/deliver-logs-to-siem#concept-265988).
    
-   For more information about how to ship logs over Syslog, see [Ship logs to a SIEM system over Syslog](/help/en/sls/ship-logs-to-a-siem-system-over-syslog#concept-266003).
