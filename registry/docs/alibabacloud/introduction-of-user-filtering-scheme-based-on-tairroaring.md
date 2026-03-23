You can provide a high-performance service for potential user selection by using the TairRoaring data structure of Tair (Enterprise Edition).

## Introduction to TairRoaring

Tag-based user selection is applicable to business scenarios such as personalized recommendation and precision marketing. A variety of operational marketing strategies are implemented for users marked by different tags to maximize the interests of advertisers.

Tag-based user selection has the following characteristics:

-   A large number of tags for users. This requires large storage space and high scalability.
    
-   A large number of users. This indicates that a variety of dimensions are needed to generate tags and the data is discretized.
    
-   A heavy computing burden. Applications can select users who are attached with different tags based on a variety of strategies and have a high demand for performance and timeliness.
    

The bitmap (or bitset) data structure is able to meet the preceding requirements. This data structure can use a small amount of storage to implement optimized query of large amounts of data. Bitmap operations are supported by Redis Open-Source Edition. However, the native bitmap data structure may be overwhelmed by massive tagging needs.

-   The native bitmap data structure is limited by the size of keyspaces. This can lead to a significant reduction in space efficiency for sparse data.
    
-   When bitmap operations are performed by using strings, user code must be written to perform computing tasks and the round-trip time (RTT) increases threefold.
    
-   When bitmap data is stored in native Redis, large keys may be generated and cause instability to clusters.
    

Roaring bitmaps are optimized in [TairRoaring](/help/en/redis/developer-reference/tairroaring-command) in the following ways:

-   TairRoaring can strike a balance between performance and space complexity in a large number of scenarios by using two-level indexes and dynamic containers.
    
-   TairRoaring uses optimization techniques such as single instruction, multiple data (SIMD), vectorization, and popcount algorithms to improve computing efficiency and deliver efficient time and space complexity.
    
-   TairRoaring takes advantage of the powerful computing performance and high stability provided by Tair to support business scenarios.
    

Compared with the native bitmap data structure, TairRoaring provides lower memory usage and higher computing efficiency for collections. TairRoaring also offers lower latency and higher throughput by virtue of the high-performance Tair service.

## Procedure of potential user selection

User selection involves multiple steps, including model generation and selection.

1.  Use row schemas to store user characteristics that are classified from different dimensions. In most cases, raw user data is stored in relational databases.
    
2.  Process raw data on demand, and generate mappings between user identifiers (UIDs) and user tags.
    
3.  Update these mappings on a regular basis to the TairRoaring data structure. In most cases, updates take place two days after the corresponding business data is generated.
    
4.  Accelerate business data processing by using the TairRoaring data structure.
    
    -   You can query the relationship between a user and a user tag.
        
        For example, you can run the following command to determine whether user1 is attached with Tag-A. The serial number of Tag-A is 16161.
        
        ```
        TR.GETBIT user1 16161
        ```
        
    -   You can create logical user groups by using operators such as `AND`, `OR`, and `DIFF` and process the information of these user groups.
        
        For example, you can run the following command to obtain the users who are attached with both Tag-B and Tag-C:
        
        ```
        TR.BITOP result AND Tag-B Tag-C
        ```
        
    -   You can also use the TairRoaring data structure in some mapping scenarios such as risk control to check whether a tag is mapped to a UID.
        
        For example, you can run the following command to query whether user1 is attached with Tag-A:
        
        ```
        TR.GETBIT Tag-A user1
        ```
