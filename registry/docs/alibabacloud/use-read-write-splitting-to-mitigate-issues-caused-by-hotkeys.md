To mitigate the impact of a high volume of read requests for hot spot keys, enable read/write splitting and add read-only nodes. This distributes read requests across all nodes, which reduces the load on the primary node and improves the overall throughput and stability of the system.

## **Function overview**

In a read/write splitting architecture, all read-only nodes asynchronously replicate data from the primary node. This provides eventual consistency with low overall data synchronization latency. This means that data synchronization latency can occur during periods of high write volumes. In these cases, your application must be able to tolerate slightly outdated data. Examples include the following scenarios:

-   Cached data: HTML caches for website home pages that are updated infrequently.
    
-   Game leaderboards: Hourly leaderboards where minor update delays do not significantly affect users.
    
-   Weather forecast data: Users frequently query weather information, but the data is updated on a fixed schedule.
    

#### **Benefits of adding read-only nodes**

-   Distributes the load on the primary node: The primary node handles 100% of write requests and 1/N of read requests, where N is the total number of nodes. For example, if you have one primary node and three read-only nodes, N is 4. This reduces the CPU pressure, network traffic, and connection overhead on the primary node.
    
-   Increases system throughput: Each read-only node can process read requests independently. The overall read performance scales linearly. Ideally, adding N read-only nodes can increase read performance by N times.
    
-   Reduces response latency: Distributing read requests across multiple nodes reduces the queuing time for individual requests.
    

You can enable read/write splitting for both standard (primary-replica) and cluster architectures. For a cluster architecture, you can add a corresponding read-only node for each data shard. For more information about the architecture, see [Read/write splitting](/help/en/redis/product-overview/read-or-write-splitting-instances-1).

## **How to enable**

Prerequisites:

-   The instance is deployed in cloud-native mode.
    
-   The instance is a Redis Open-Source Edition or Tair (Enterprise Edition) DRAM-optimized or persistent memory-optimized instance.
    
-   The instance comes with at least 1 GB of memory.
    
-   The instance is a high availability instance.
    

On the instance details page, in the navigation pane on the left, click **Node Management**, and then turn on the **Read/write Splitting** switch. For more information, see Enable read/write splitting.

## **Client connections**

### **Single-zone instances**

Typically, an instance with a read/write splitting architecture provides a single endpoint. The instance uses a [Proxy](/help/en/redis/product-overview/features-of-proxy-nodes) component for routing. You do not need to modify your code. The feature is ready to use out of the box. For more information, see [Client connection tutorial](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance).

### **Dual-zone instances**

For a dual-zone instance with a read/write splitting architecture, the instance provides separate endpoints for the primary and secondary zones. The endpoint for the secondary zone is used for read requests only. This allows for local access and reduces read request latency.

For example, consider an instance in **Hangzhou Zone I** (primary zone) and **Hangzhou Zone J** (secondary zone).

-   A client (ECS instance) in **Hangzhou Zone I** can connect to the endpoint of the primary zone to perform read and write operations. The following code provides an example:
    
    ```
    import redis.clients.jedis.Jedis;
    import redis.clients.jedis.JedisPool;
    import redis.clients.jedis.JedisPoolConfig;
    
    public class MasterReadWrite {
        public static void main(String[] args) {
            JedisPoolConfig config = new JedisPoolConfig();
            config.setMaxIdle(200);
            config.setMaxTotal(300);
            config.setTestOnBorrow(false);
            config.setTestOnReturn(false);
    
            // Configure the endpoint, port, and password for the primary zone.
            String host = "r-bp1vtq8tnrquy****pd.redis.rds.aliyuncs.com";
            int port = 6379;
            String password = "default:Passw***2";
        
            JedisPool pool = new JedisPool(config, host, port, 3000, password);
            Jedis jedis = null;
            try {
                jedis = pool.getResource();
                // Perform operations. The following code provides an example.
                jedis.set("foo", "bar");
                System.out.println(jedis.get("foo"));
            }
            catch (Exception e) {
                // Handle timeouts or other exceptions.
                e.printStackTrace();
            }
            finally {
                if (jedis != null) {
                    jedis.close();
                }
            }
            pool.destroy();    // When the application exits, call this method to destroy the resource. This method disconnects the client and releases resources.
        }
    }
    ```
    
-   A client (ECS instance) in **Hangzhou Zone J** can connect to the endpoint of the secondary zone to perform read operations only. To perform write operations, the client must still connect to the endpoint of the primary zone. The following code provides an example:
    
    ```
    import redis.clients.jedis.Jedis;
    import redis.clients.jedis.JedisPool;
    import redis.clients.jedis.JedisPoolConfig;
    
    public class ReplicaRead {
        public static void main(String[] args) {
            JedisPoolConfig config = new JedisPoolConfig();
            config.setMaxIdle(200);
            config.setMaxTotal(300);
            config.setTestOnBorrow(false);
            config.setTestOnReturn(false);
    
            // Configure the endpoint, port, and password for the secondary zone.
            String host = "r-bp1vtq8tnrquy****pd.redis.rds.aliyuncs.com";
            int port = 6379;
            String password = "default:Passw***2";
    
            JedisPool pool = new JedisPool(config, host, port, 3000, password);
            Jedis jedis = null;
            try {
                jedis = pool.getResource();
                // Perform operations. The following code provides an example.
                System.out.println(jedis.get("foo"));
            }
            catch (JedisDataException e) {
                // Catch exceptions for write operations if a write operation is mistakenly performed.
                e.getMessage();
            }
            catch (Exception e) {
                // Handle timeouts or other exceptions.
                e.printStackTrace();
            }
            finally {
                if (jedis != null) {
                    jedis.close();
                }
            }
            pool.destroy();    // When the application exits, call this method to destroy the resource. This method disconnects the client and releases resources.
        }
    }
    ```
    

## References

-   [Read/write splitting](/help/en/redis/product-overview/read-or-write-splitting-instances-1)
    
-   [Tair Proxy features](/help/en/redis/product-overview/features-of-proxy-nodes)
