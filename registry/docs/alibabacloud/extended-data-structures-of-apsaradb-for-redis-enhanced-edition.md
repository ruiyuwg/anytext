Tair (Redis OSS-compatible) supports the fundamental data structures of open source Redis, such as String, List, Hash, Set, Sorted Set, and Stream. These data structures are sufficient for most development workloads but not for complex workloads. To manage complex workloads, you must write a substantial amount of code or use complex approaches such as Lua scripting. Tair (Enterprise Edition) integrates multiple data structures developed in-house by Alibaba Cloud, such as [exString](/help/en/redis/developer-reference/tairsting-command) (including [commands that enhance Redis string functionality](/help/en/redis/developer-reference/cas-cad-command)), [exHash](/help/en/redis/developer-reference/the-tairhash-command), [exZset](/help/en/redis/developer-reference/tairzset-command), [GIS](/help/en/redis/developer-reference/tairgis-command), [Bloom](/help/en/redis/developer-reference/tairbloom-command), [Doc](/help/en/redis/developer-reference/tairdoc-command), [TS](/help/en/redis/developer-reference/the-tickets-command), [Cpc](/help/en/redis/developer-reference/taircpc-command), [Roaring](/help/en/redis/developer-reference/tairroaring-command), [Search](/help/en/redis/developer-reference/tairsearch/), and [Vector](/help/en/redis/developer-reference/tairvector/). These data structures enable Tair (Enterprise Edition) to support more scenarios, simplify application development, and streamline business code. This improves service performance and helps you focus on business innovation.

**Note**

-   [DRAM-based instances](/help/en/redis/product-overview/dram-based-instances) that are compatible with Redis 7.0 or 6.0 support all the preceding data structures.
    
-   [DRAM-based instances](/help/en/redis/product-overview/dram-based-instances) that are compatible with Redis 5.0 support all the preceding data structures other than TairVector.
    
-   [Persistent memory-optimized instances](/help/en/redis/product-overview/persistent-memory-optimized-instances-1) are compatible with [exString](/help/en/redis/developer-reference/tairsting-command) (including [commands that enhance Redis string functionality](/help/en/redis/developer-reference/cas-cad-command)), [exHash](/help/en/redis/developer-reference/the-tairhash-command), and [Cpc](/help/en/redis/developer-reference/taircpc-command).
    

## Extended data structures of Tair and modules of Redis Stack

The following table describes the data structures integrated into Tair and compares them with Redis Stack Server modules.

**Data type**

**Tair extended data structure**

[**Redis Stack Server**](https://redis.com/blog/introducing-redis-stack/)

**Description**

String Enhancements

-   [exString](/help/en/redis/developer-reference/tairsting-command)
    
-   [Commands that enhance Redis string functionality](/help/en/redis/developer-reference/cas-cad-command)
    

N/A

-   exString is a String-type data structure that contains a version number. exString can be used to limit the range of outputs returned by the INCRBY and INCRBYFLOAT commands. These commands are used to increase or decrease the values of Redis strings. If an output falls out of the specified range, error messages are returned by these commands. This data structure is open-sourced. For more information, see [TairString](https://github.com/tair-opensource/TairString).
    
-   CAS and CAD commands can be used to implement simple and efficient [high-performance distributed locks](/help/en/redis/use-cases/implementation-of-high-performance-distributed-lock-based-on-tairstring).
    

Best practices: [Implement high-performance optimistic locking using TairString](/help/en/redis/use-cases/implementation-of-high-performance-optimistic-lock-based-on-tairstring) and [Implement bounded counters using TairString](/help/en/redis/use-cases/implementation-of-high-efficiency-current-limiter-based-on-tairstring).

Hash

[exHash](/help/en/redis/developer-reference/the-tairhash-command)

N/A

TairHash is a data structure that lets you specify the expiration time and version number for a field. TairHash is more flexible in use and simplifies application development in most scenarios. This data structure is open-sourced. For more information, see [TairHash](https://github.com/tair-opensource/TairHash).

Best practices: [Manage multi-device logon from a single user using TairHash](/help/en/redis/use-cases/manage-multi-device-logon-from-a-single-user-by-using-tairhash).

Zset

[exZset](/help/en/redis/developer-reference/tairzset-command)

N/A

TairZset allows Double-type scores to be sorted with respect to 256 dimensions. You can use TairZset to implement general-purpose leaderboards and multidimensional leaderboards. This data structure is open-sourced. For more information, see [TairZset](https://github.com/tair-opensource/TairZset).

Best practices: [Implement multidimensional leaderboards using TairZset](/help/en/redis/use-cases/tair-multidimensional-and-distributed-ranking-scheme) and [Implement distributed leaderboards using TairZset](/help/en/redis/use-cases/implementation-of-distributed-architecture-ranking-list-based-on-tairzset).

GeoSpatial

[GIS](/help/en/redis/developer-reference/tairgis-command)

N/A

TairGIS is a data structure that uses R-tree indexes and supports APIs related to a geographic information system (GIS). TairGIS can be used to query points, linestrings, and polygons. You can use TairGIS to check whether A contains B, whether A is contained by B, or whether A intersects with B. This data structure is open-sourced. For more information, see [TairGIS](https://github.com/tair-opensource/TairGis).

Best practices: [Implement digital fences using TairGIS](/help/en/redis/use-cases/user-trajectory-monitoring-using-tairgis) and [Implement local purchase services using TairGIS](/help/en/redis/use-cases/implementation-of-the-same-city-purchase-business-based-on-tairgis).

Doc (JSON)

[Doc](/help/en/redis/developer-reference/tairdoc-command)

RedisJSON

Similar to RedisJSON, TairDoc is a data structure that supports the JSON standard and stores data of the document type. TairDoc data is stored as binary trees to allow quick access to child elements of JSON objects.

Search

[Search](/help/en/redis/developer-reference/tairsearch/)

RediSearch

TairSearch uses syntax similar to that of Elasticsearch but provides more and better tokenizers to improve query performance.

Best practices:

-   [Accelerate queries with multi-column indexes by using TairSearch](/help/en/redis/use-cases/accelerating-multi-column-index-federated-query-based-on-tairsearch)
    
-   [Generate candlestick charts for stocks by using TairSearch](/help/en/redis/use-cases/build-a-real-time-calculation-service-for-stock-k-line-based-on)
    
-   [Use the bool query to perform compound queries in TairSearch](/help/en/redis/use-cases/using-bool-in-tairsearch-for-combined-conditional-queries)
    
-   [Use Msearch to search documents by data shard in TairSearch](/help/en/redis/use-cases/using-msearch-to-implement-index-shard-search-in-tairsearch)
    

TimeSeries

[TS](/help/en/redis/developer-reference/the-tickets-command)

RedisTimeSeries

Compared with RedisTimeSeries, TairTS extends the capability of tags. In TairTS, an extra hash layer is added to support your aggregate queries on timelines. You can also use TairTS to update or add data to historical time series data.

Best practices: [Implement fine-grained monitoring using TairTS](/help/en/redis/use-cases/realization-of-second-level-monitoring-based-on-tairy).

Sketches

[Bloom](/help/en/redis/developer-reference/tairbloom-command)

RedisBloom

TairBloom is compatible with RedisBloom, supports dynamic scaling, and provides 64-bit hash algorithms to significantly reduce the probability of collision for large amounts of data.

Best practices: recommendation systems and crawler systems. For more information, see [Bloom](/help/en/redis/developer-reference/tairbloom-command) and [Use Bloom filters to manage game event push notifications](/help/en/redis/use-cases/use-bloom-filter-to-avoid-repeated-push-to-players).

[Cpc](/help/en/redis/developer-reference/taircpc-command)

N/A

TairCpc is a data structure developed based on the compressed probability counting (CPC) sketch. It lets you perform high-performance computing on sampled data with a small amount of memory. TairCpc supports tumbling and sliding windows to better facilitate data streaming. It also supports common aggregation operators used in big data analytics, such as `DISTINCT`, `COUNT`, `MAX`, `MIN`, `FIRST`, `LAST`, and `SQUARED`.

Bitmap

[Roaring](/help/en/redis/developer-reference/tairroaring-command)

N/A

TairRoaring is an efficient computing module that provides high stability. It supports operations on multiple bitmaps, which improves performance and space efficiency.

Best practices: [Select users using TairRoaring](/help/en/redis/use-cases/introduction-of-user-filtering-scheme-based-on-tairroaring).

Vector

[Vector](/help/en/redis/developer-reference/tairvector/)

Redis Search (Vector Similarity)

TairVector is an in-house data structure of Tair that provides high-performance real-time storage and retrieval of vectors.

Best practices:

-   [Implement hybrid search by using TairVector](/help/en/redis/use-cases/tairvector-hybrid-retrieval-practice)
    
-   [Implement cross-modal image-text retrieval by using TairVector](/help/en/redis/use-cases/realization-of-multi-modal-retrieval-based-on-tair-vector)
    
-   [Implement approximate query for molecular geometries by using TairVector](/help/en/redis/use-cases/implement-approximate-query-for-molecular-geometries-by-using-tairvector)
    

## **Tair Enterprise Edition clients**

To help you use Tair extended data structures more conveniently, Tair (Redis OSS-compatible) has developed Tair clients based on several Redis clients. You can directly call Tair extended data structures through Tair clients.

You can obtain the following clients from GitHub and refer to their example code.

**Tair client**

**Programming language**

**Description**

[TairJedis](https://github.com/aliyun/alibabacloud-tairjedis-sdk)

Java

A Tair client that is developed based on Jedis.

[AlibabaCloud.TairSDK](https://github.com/alibaba/AlibabaCloud.TairSDK)

.NET

A Tair client that is developed based on .NET Core 5.0 and StackExchange.Redis 2.5.61.

[Tair-go](https://github.com/alibaba/tair-go)

Go

A Tair client that is developed based on go-redis.

[Tair-py](https://github.com/alibaba/tair-py)

Python

A Tair client that is developed based on redis-py.

## **FAQ**

-   Q: Does Tair (Redis OSS-compatible) support Redis Stack Server?
    
    A: Due to restrictions from open source licensing of Redis, Redis Open-Source Edition and Tair (Enterprise Edition) do not support Redis Stack Server.
    
    To work around this limitation, Tair (Enterprise Edition) provides self-developed extended data structures, including [exString](/help/en/redis/developer-reference/tairsting-command) (including [commands that enhance Redis string functionality](/help/en/redis/developer-reference/cas-cad-command)), [exHash](/help/en/redis/developer-reference/the-tairhash-command), [exZset](/help/en/redis/developer-reference/tairzset-command), [GIS](/help/en/redis/developer-reference/tairgis-command), [Bloom](/help/en/redis/developer-reference/tairbloom-command), [Doc](/help/en/redis/developer-reference/tairdoc-command), [TS](/help/en/redis/developer-reference/the-tickets-command), [Cpc](/help/en/redis/developer-reference/taircpc-command), [Roaring](/help/en/redis/developer-reference/tairroaring-command), [Search](/help/en/redis/developer-reference/tairsearch/), and [Vector](/help/en/redis/developer-reference/tairvector/). Compared with Redis Stack Server, Tair (Enterprise Edition) supports a broader range of data structures and exhibits superior performance in specific data structures.
    
-   Q: How do I set time-to-live (TTL) for Tair extended data structures?
    
    A: For exString, exHash, and Cpc, TTL can be set directly using their respective commands. For other Tair extended data structures, you can use the `EXPIRE | EXPIREAT <_Keyname_>` command to set TTL for a key. For example, you can use `EXPIRE foo 60` to set the TTL of the key "foo" to 60 seconds.
