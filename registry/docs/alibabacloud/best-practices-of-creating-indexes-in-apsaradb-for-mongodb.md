This topic describes the best practices for creating indexes in ApsaraDB for MongoDB, including analyzing index efficiency, optimizing index options, and creating efficient indexes for specific queries.

## **How to choose an index**

ApsaraDB for MongoDB supports multiple types of indexes. You must select an index type based on your scenario.

-   Use single-key indexes
    
    If you perform only single-key queries in the use of ApsaraDB for MongoDB, we recommend that you create a single-key index.
    
-   Use compound indexes
    
    If you perform single-key and multi-key queries in the use of ApsaraDB for MongoDB, we recommend that you create a compound index that supports a combination of up to 32 keys. For example, you can run the following command to create a compound index that contains the category and item fields.
    
    ```
    db.products.createIndex( { "category": 1, "item": 1 } )
    ```
    
-   Use text indexes
    
    A conventional index is used to match the value of a field. If you want only to match specific words in a field that contains a lot of text, you must use a text index for text matching. For more information about text indexes, see [Text Indexes on Self-Managed Deployments](https://www.mongodb.com/zh-cn/docs/manual/core/indexes/index-types/index-text/).
    

## **Specify index collations**

If you want to use indexes for string comparisons, you must specify the same collation for query operations. If you specify a different collation for the query operations, indexes that have collations do not support the string comparisons of index fields.

The following example shows a collection with an index on the string field `myColl`. The index uses the collation locale `category "fr"`:

```
db.myColl.createIndex( { category: 1 }, { collation: { locale: "fr" } } )
```

You specify the same collation as the index to use the index for the following query operation:

```
db.myColl.find( { category: "cafe" } ).collation( { locale: "fr" } )
```

The following query operation uses the default `"simple"` binary collation and cannot use the index:

```
db.myColl.find( { category: "cafe" } )
```

For compound indexes whose index prefix keys are not a string, an array, or an embedded document, query operations for which you specify a different collation can still use the index to support the comparisons of index prefix keys. For more information about collations, see [Collation Locales and Default Parameters](https://www.mongodb.com/docs/manual/reference/collation-locales-defaults/).

## **Analyze indexes based on slow query logs**

ApsaraDB for MongoDB optimizes indexes to reduce the number of scanned collections. Therefore, you must focus on the DocsExamined and KeysExamined metrics in slow query logs. For more information about how to view slow query logs, see [View slow query logs](/help/en/mongodb/user-guide/view-slow-query-logs).

-   DocsExamined: the number of documents scanned for a query request. A large metric value indicates that many non-index entries need to be scanned. In this case, we recommend that you create an index for a field with many scanned documents.
    
-   KeysExamined: the number of keys scanned in a specific index. If the metric value is large but the returned nreturned value is small, many index keys are scanned to obtain the data that meets specified query conditions, which indicates that the index is inefficient. In this case, you must adjust the index or create another index.
    

The following index analysis logic applies:

-   Full-collection scan (keywords: COLLSCAN and DocsExamined)
    
    -   COLLSCAN indicates a full-collection scan. After you perform an operation, such as query, update, or delete, you can find the COLLSCAN keyword when you view slow request logs. We recommend that you create indexes for the fields that you want to query.
        
    -   The DocsExamined field indicates the number of documents scanned for a query request. A larger field value indicates higher CPU resources occupied by this request.
        
-   Inappropriate indexes (keywords: IXSCAN and keysExamined)
    
    -   The keysExamined field indicates the number of index keys scanned for a request that uses an index. A larger field value indicates higher CPU resources occupied by this request.
        
    -   If you create an index that is inappropriate or matches a large amount of data, the index cannot reduce CPU overheads or accelerate the execution of a request.
        
-   If you find the SORT keyword in slow query logs, you can use an index to optimize sorting performance. For more information, see [The ESR (Equality, Sort, Range) Rule](https://www.mongodb.com/docs/manual/tutorial/equality-sort-range-rule/).
    

## **How optimize indexes**

### **Use covered queries**

A covered query returns results directly from an index without accessing the source document. This is very efficient. To determine if a query is a covered query, use the `explain()` command. If the output of `explain()` shows that totalDocsExamined is 0, the query is covered by the index.

**Note**

If the output of `explain()` does not contain the totalDocsExamined field, run the query in `executionStats` or `allPlansExecution` mode. For example, use `explain("executionStats")` or `explain("allPlansExecution")`.

When you try to implement a covered query, the\_id field always returns by default. This is a common trap. You must explicitly exclude it from the query results or add it to the index.

In a sharded cluster, MongoDB must internally access the sharding key fields. For a query to be covered, the sharding key must be part of the index. Therefore, it is a best practice to include the sharding key in your indexes.

### **Remove redundant indexes**

Indexes are resource-intensive. The indexes can consume RAM and disk resources even when compression is used in the WiredTiger storage engine of ApsaraDB for MongoDB. In addition, as fields are updated, the related indexes must also be maintained, which adds additional CPU and disk I/O loads. Therefore, we recommend that you carefully evaluate and delete indexes that you no longer need.

### **Recommend compound indexes**

-   For a compound query on multiple fields, the order of the fields in the query does not matter. You only need one index. For example, for a query on fields \`a\` and \`b\`, you only need one of the indexes `{a:1, b:1}` or `{b:1, a:1}`.
    
-   Redundant indexes can be caused by the inclusive relationship: For example, the following queries are used:
    
    -   `db.myCol.find({"b": 2, "c": 3})`
        
    -   `db.myCol.find({"a": 1, "b": 2, "c": 3})`
        
    
    The second query contains all the fields from the first query. You can use a single index to satisfy both queries. To do this, place the fields of the more specific query at the beginning of the index. The index should be `{b: 1, c: 1, a: 1}`.
    
-   Redundant indexes caused by the combination of an unique index and other fields. For example, the following queries are used:
    
    -   `db.myCol.find({"a": 1, "b": 1})`
        
    -   `db.myCol.find({"a": 1, "c": 1})`
        
    
    If the \`a\` field has unique values, creating a compound index on other fields in addition to \`a\` is not useful for these queries. You only need to create an index on `{a: 1}`.
    

### **Recommend non-equivalent indexes**

-   Do not create a non-equivalent composite query index for some queries. Example:
    
    `db.myCol.find({"a": {$gte: 1} , "b": {$lte: 1}})`
    
    In this non-equivalent query that contains multiple fields, only the leftmost field can be indexed. This indicates that only the a field is indexed. You need only to create an index for the a field.
    
-   You can use a combination of equivalent and non-equivalent queries. Example:
    
    `db.myCol.find({"a": {$gte: 1} , "b": 1})`
    
    In this case, the optimal index should have the equality query field first. You should create the index `{b: 1, a: 1}`.
    

### **Recommend $or-type query indexes**

$or-type queries require you to create an index for each condition. Example:

`db.myCol.find({$or: [{"a": 1, "b": 1}, {"c": 1, "d": 1}]})`

You need to create an optimal index for each clause in the $or query. For the query {$or: \[{"a": 1, "b": 1}, {"c": 1, "d": 1}\]}, you should create two separate indexes, {a: 1, b: 1} and {c: 1, d: 1}, instead of a single compound index that includes all fields, such as {a: 1, b: 1, c: 1, d: 1}.

### **Recommend sort query indexes**

-   You need only to create an index for different sort queries that contains the same field. Example:
    
    -   `db.myCol.find({}).sort({"a":1})`
        
    -   `db.myCol.find({}).sort({"a":-1})`
        
    
    You only need to create the index `{a: 1}`.
    
-   You can use a multi-field sort query. Example:
    
    `db.myCol.find({}).sort({"a":1, "b": -1})`
    
    The index `{a: 1, b: 1}` is not effective for this query. You must create the index `{a: 1, b: -1}`.
    
-   You can use a combination of equivalent, non-equivalent, and sort queries. Example:
    
    `db.myCol.find({"a": 1, "b": 2, "c": {$gte: 1}}).sort({"d": 1, "e": -1})`
    
    The order of fields in an index must be `equality->sort->non-equality`. For example, the index is `{a: 1, b: 1, d: 1, e: -1, c: 1}`.
    
-   You can use a combination of $or-type and sort queries. Example:
    
    `db.myCol.find({$or: [{"a": 1, "b": 1}, {"c": 1, "d": 1}]}).sort({"e": -1})`
    
    This query can be split into two queries: `db.myCol.find({"a": 1, "b": 1}).sort({"e":-1})` and `db.myCol.find({"c": 1, "d": 1}).sort({"e":-1})`. Following the rule for combining equality and sort queries, you should create the indexes `{a: 1, b: 1, e: -1}` and `{c: 1, d: 1, e: -1}`.
    

### **Use a mapping to obtain only the required fields**

If you only need some fields in a document, you can use a mapping to obtain only the required fields for better performance.

For example, if you only need the timestamp, title, author, and abstract fields in a query for the posts collection, you can run the following query command:

`db.posts.find( {}, { timestamp : 1 , title : 1 , author : 1 , abstract : 1} ).sort( { timestamp : -1 } )`

### **Use hint() to obtain a specific index**

In most cases, the query optimizer selects the optimal index for an operation. However, you can also use the `hint()` method to force MongoDB to use a specific index.

For example, you can use `hint()` for performance testing or for queries where you must select a field that is included in multiple indexes.

### **Use partial indexes**

You can use partial indexes to reduce the size and performance overhead of indexes. That means that a created index contains only the fields that can be queried.

For example, a collection contains the fields `a, b, c`. If your query conditions include only the `a` field, create an index only on the `a` field.
