Log Service provides two features that need to read log data: LogHub and LogSearch. Their difference lies in that LogHub provides log collection and distribution channels, whereas LogSearch allows you to query logs.

Differences between LogHub and LogSearch

Both LogHub and LogSearch of Log Service need to read log data:

**LogHub**: provides public channels for log collection and distribution. It reads and writes full data in first-in, first-out (FIFO) order, which is similar to Kafka.

-   Each Logstore has one or more shards. Data is written to a random shard.
-   You can read multiple logs at a time from a specified shard based on the order in which the logs were written to the shard.
-   You can set the start position (cursor) for pulling logs in shards according to the time when the server receives these logs.

**LogSearch**: enables you to query and analyze a large number of logs based on LogHub, and set conditions to query and collect statistics on logs.

-   LogSearch allows you to search for required data based on query conditions.
-   LogSearch supports a Boolean combination of the keywords AND, NOT, and OR, and also supports SQL query statistics.
-   LogSearch is independent of shards.

**Differences between LogSearch and LogHub**

  

Feature

LogSearch

LogHub

Search by keyword

Supported.

Not supported.

Data read (a small amount of data)

Quick.

Quick.

Data read (full data)

Slow. LogSearch reads 100 logs in 100 ms, so this method is not recommended.

Quick. LogHub reads 1 MB logs in 10 ms, so this method is recommended.

Data read by topic

Yes.

No. Data is identified only by shard.

Data read by shard

No. Data in all shards is queried.

Yes. You need to specify a shard each time to read data.

Price

Relatively high.

Low.

Scenarios

Monitoring, problem investigation, and analysis.

Full data processing scenarios, such as stream computing and batch processing.
