This topic describes the definition of query plans. This topic also explains the possible causes of query replanning and provides solutions.

## **Query planner**

For a query, the MongoDB query planner chooses and caches the most efficient query plan based on available indexes. The following figure shows how the query planner works.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0159975671/CAEQTxiBgICMrviZ2BkiIDM1ZWMyYjE4MjI0YzRlYjU4ODM2ZTBkYWY1YzVjMDA04019275_20230925153628.598.svg)

The evaluation of the most efficient query plan is based on the number of work units (works) performed by the query execution plan when the query planner evaluates candidate plans. The query plan entry cached in the query planner can be used for queries with the same query shape.

The query plan entry cached in the query planner can be in one of the following states:

-   Missing: No entry exists in the query plan cache.
    
-   Inactive: The entry exists in the query plan cache and a works value is generated after evaluation. The entry can be converted to the Active state.
    
-   Active: The entry exists in the query plan cache. A winning query plan can be converted to the Inactive state.
    

The query plan cache is stored entirely in memory and does not persist. The cache is cleared each time the MongoDB database is restarted. The cache is also cleared if collections or indexes are deleted. The query plan cache has a size limit and follows the least recently used (LRU) cache replacement mechanism. Therefore, entries that is less frequently accessed are evicted from the cache from time to time.

In specific cases, you can run the following commands to manage query plans:

-   Clear the query plan cache from a specified collection.
    
    ```
    db.<collection>.getPlanCache().clear()
    ```
    
-   Query all query shapes in a specified collection.
    
    ```
    db.<collection>.getPlanCache().listQueryShapes()
    ```
    
-   Query the query plan for a specified query.
    
    ```
    db.<collection>.getPlanCache().getPlansByQuery({"query": {"name": "testname"}, "sort": { "name": 1 })
    ```
    

### **queryHash and planCacheKey**

MongoDB 4.2 or later introduces queryHash to define query shapes. Each query shape is associated with a queryHash value. MongoDB 4.2 or later also introduces planCacheKey. Unlike queryHash, planCacheKey is a function of both a query shape and the available indexes for the shape. If indexes that can support the query shape are created or deleted, the planCacheKey value may change but the queryHash value remains unchanged.

For example, a collection contains the following indexes and query shapes:

-   Indexing
    
    ```
    db.foo.createIndex( { x: 1 } )
    db.foo.createIndex( { x: 1, y: 1 } )
    db.foo.createIndex( { x: 1, z: 1 }, { partialFilterExpression: { x: { $gt: 10 } } } )
    ```
    
-   Query shapes
    
    ```
    db.foo.explain().find( { x: { $gt: 5 } } ) // Query operation 1
    db.foo.explain().find( { x: { $gt: 20 } } ) // Query operation 2 
    ```
    

The third index can support only query operation 2 but cannot support query operation 1. This way, the two queries have different planCacheKey values. If the `{x:1, a:1}` index is created, the planCacheKey values for both query operations change.

## **Query replanning**

If data change occurs in a collection, the cached query plan is no longer suitable for the collection. The query plan must be replaced to ensure that the plan is synchronized with the change to the data.

If you want to execute a query plan that has the same query shape as a cached query plan, the query planner does not calculate the plan but directly uses the cached query plan. The query planner continuously evaluates the execution efficiency of the cached query plan. If the query planner determines that the cached query plan is more than 10 times less efficient than another query plan, the query planner stops and evicts the cached query plan and reevaluates the query plan. This process is known as query replanning.

### **Impacts and solutions**

You may come across the `"replanned":true` keyword in slow query logs. This keyword indicates that the query planner cannot provide a consistently efficient query plan for the query conditions of a specific query shape.

Example of slow query logs:

```
"replanned":true,"replanReason":"cached plan was less efficient than expected: expected trial execution to take X works but it took at least 10X works"
```

#### **Impacts**

-   Frequent query replanning operations may degrade query performance.
    
-   Excessive query replanning can potentially lead to contention for mutex locks, resulting in high CPU utilization.
    

#### **Solutions**

-   Temporarily upgrade the instance specifications to alleviate database loads. For more information, see [Change the configurations of an instance](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/).
    
-   We recommend that you clear query plans, and then check whether the query analyzer can select a more suitable query plan.
    
-   Use the `hint()` function to specify indexes for query conditions that are replanned in the business code. Example:
    
    ```
    db.<collection>.find({a:"ABC"},{b:1,_id:0}).sort({c:1}).hint({ a:1, c:1, b:1} )
    ```
    
    **Note**
    
    If hints are used for a query, the query plan selected by the query planner does not take effect.
    
-   Use index filtering to restrict indexes that you want to use for query conditions that are replanned in the business code. Example:
    
    ```
    // Configure index filtering.
    db.runCommand(
       {
          planCacheSetFilter: "<collection>",
          query: { a: "ABC" },
          projection: { b: 1, _id: 0 },
          sort: { c: 1 },
          indexes: [
             { a: 1, c: 1 , b: 1 }
          ]
       }
    )
    // Delete existing configurations.
    db.runCommand(
       {
          planCacheClearFilters: "<collection>"
       }
    )
    ```
    
    **Note**
    
    -   Index filters override the expected behavior of the query planner in selecting query plans.
        
    -   If you specify a hint and an index filter for a query, the index filter overwrites the specified hint. Therefore, use the index filter with caution. For more information, see [Index Filters](https://www.mongodb.com/docs/manual/core/query-plans/#index-filters).
        
    
-   (Recommended) Optimize queries and create effective indexes for the queries to prevent query replanning.
    
    **Note**
    
    We recommend that you check and modify query statements, available indexes, and document patterns instead of using hints and index filters.
    
-   (Recommended) If the major version of your instance is MongoDB 4.2 or MongoDB 4.4, we recommend that you update the minor version of the instance to the latest minor version. This can significantly reduce the use of mutex locks. You can also upgrade the major version of the instance to 5.0 or 6.0 to resolve the preceding issues. For more information about the associated kernel JIRA ticket, see [SERVER-40805](https://jira.mongodb.org/browse/SERVER-40805). For more information about how to update the minor version of an instance and upgrade the major version of the instance, see [Update the minor version of an instance](/help/en/mongodb/user-guide/upgrade-the-minor-version-of-an-apsaradb-for-mongodb-instance) and [Upgrade the major version of an instance](/help/en/mongodb/user-guide/upgrade-the-major-version-of-an-apsaradb-for-mongodb-instance).
    

If the issues persist after you use the preceding methods, you can

[submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to contact technical support.

## **References**

-   [Query Plans](https://www.mongodb.com/docs/manual/core/query-plans/)
    
-   [cursor.hint()](https://www.mongodb.com/docs/manual/reference/method/cursor.hint/#mongodb-method-cursor.hint)
    
-   [planCacheSetFilter](https://www.mongodb.com/docs/manual/reference/command/planCacheSetFilter/#mongodb-dbcommand-dbcmd.planCacheSetFilter)
    
-   [planCacheClearFilters](https://www.mongodb.com/docs/manual/reference/command/planCacheClearFilters/#mongodb-dbcommand-dbcmd.planCacheClearFilters)
