Recently, the Lettuce community has fixed a significant bug (tracked as [Issue #2082](https://github.com/lettuce-io/lettuce-core/issues/2082)) that occurs when a Redis server shuts down abnormally and fails to send an RST (reset) packet. This bug results in the Lettuce client potentially taking up to 15 minutes to recover from the lost connection. To prevent this issue, we recommend that you upgrade the Lettuce client to 6.3.0.RELEASE or later. This issue was fixed by the Alibaba Cloud Tair (ApsaraDB for Redis) team in [PR#2499](https://github.com/lettuce-io/lettuce-core/pull/2499).

## **Bug fix and optimization**

The Lettuce 6.3.0.RELEASE version has addressed the issue where the client does not automatically reconnect to the server after experiencing multiple request timeouts. For more information about the background of this issue, methods to reproduce the issue, and solutions, see [Why does Lettuce result in longer downtimes?](https://developer.aliyun.com/article/1394556)

## **Version suggestions**

-   If Lettuce is included as a declared dependency, upgrade Lettuce to 6.3.0.RELEASE or later and enable the **TCP\_USER\_TIMEOUT** option. For the complete sample code, see [Lettuce](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance#f1a755e06fnrw).
    
-   If Spring Data Redis is included as a declared dependency, upgrade the underlying Lettuce client to 6.3.0.RELEASE or later and enable the **TCP\_USER\_TIMEOUT** option. For the complete sample code, see [Spring Data Redis](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance#166576d0e14vu).
    

**Note**

If you are not a user of Alibaba Cloud Tair or Redis, we recommend that you upgrade the Lettuce client in your on-premises Redis environment to enhance the overall stability of your on-premises system.

## **References**

-   [Issues#2082](https://github.com/lettuce-io/lettuce-core/issues/2082)
    
-   [PR#2499](https://github.com/lettuce-io/lettuce-core/pull/2499)
    
-   [Use a client to connect to an ApsaraDB for Redis instance](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance)
    
-   [Why does Lettuce result in longer downtimes?](https://developer.aliyun.com/article/1394556)
