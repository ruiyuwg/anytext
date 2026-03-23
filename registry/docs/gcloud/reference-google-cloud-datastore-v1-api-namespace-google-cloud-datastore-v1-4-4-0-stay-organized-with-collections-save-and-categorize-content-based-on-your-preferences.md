-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Datastore v1 API - Namespace Google.Cloud.Datastore.V1 (4.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 4.4.0keyboard\_arrow\_down

-   [5.1.0 (latest)](/dotnet/docs/reference/Google.Cloud.Datastore.V1/latest/Google.Cloud.Datastore.V1)
-   [5.0.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/5.0.0/Google.Cloud.Datastore.V1)
-   [4.17.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.17.0/Google.Cloud.Datastore.V1)
-   [4.16.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.16.0/Google.Cloud.Datastore.V1)
-   [4.15.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.15.0/Google.Cloud.Datastore.V1)
-   [4.14.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.14.0/Google.Cloud.Datastore.V1)
-   [4.13.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.13.0/Google.Cloud.Datastore.V1)
-   [4.12.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.12.0/Google.Cloud.Datastore.V1)
-   [4.11.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1)
-   [4.10.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.10.0/Google.Cloud.Datastore.V1)
-   [4.9.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.9.0/Google.Cloud.Datastore.V1)
-   [4.8.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.8.0/Google.Cloud.Datastore.V1)
-   [4.7.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.7.0/Google.Cloud.Datastore.V1)
-   [4.6.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.6.0/Google.Cloud.Datastore.V1)
-   [4.5.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.5.0/Google.Cloud.Datastore.V1)
-   [4.4.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1)
-   [4.3.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.3.0/Google.Cloud.Datastore.V1)
-   [4.2.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.2.0/Google.Cloud.Datastore.V1)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.1.0/Google.Cloud.Datastore.V1)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.0.0/Google.Cloud.Datastore.V1)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/3.5.0/Google.Cloud.Datastore.V1)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/3.4.0/Google.Cloud.Datastore.V1)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/3.3.0/Google.Cloud.Datastore.V1)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/3.2.0/Google.Cloud.Datastore.V1)

## Classes

### [AggregationQuery](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.AggregationQuery)

Datastore query for running an aggregation over a \[Query\]\[google.datastore.v1.Query\].

### [AggregationQuery.Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.AggregationQuery.Types)

Container for nested types declared in the AggregationQuery message type.

### [AggregationQuery.Types.Aggregation](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation)

Defines a aggregation that produces a single result.

### [AggregationQuery.Types.Aggregation.Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types)

Container for nested types declared in the Aggregation message type.

### [AggregationQuery.Types.Aggregation.Types.Count](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Count)

Count of entities that match the query.

The `COUNT(*)` aggregation function operates on the entire entity so it does not require a field reference.

### [AggregationResult](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.AggregationResult)

The result of a single bucket from a Datastore aggregation query.

The keys of `aggregate_properties` are the same for all results in an aggregation query, unlike entity queries which can have different fields present for each result.

### [AggregationResultBatch](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.AggregationResultBatch)

A batch of aggregation results produced by an aggregation query.

### [AllocateIdsRequest](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.AllocateIdsRequest)

The request for \[Datastore.AllocateIds\]\[google.datastore.v1.Datastore.AllocateIds\].

### [AllocateIdsResponse](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.AllocateIdsResponse)

The response for \[Datastore.AllocateIds\]\[google.datastore.v1.Datastore.AllocateIds\].

### [ArrayValue](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.ArrayValue)

An array value.

### [AsyncLazyDatastoreQuery](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.AsyncLazyDatastoreQuery)

A Datastore query which is executed lazily. Iterating over this object will provide a sequence of entities; alternatively, all the results can be fetched using [GetAllResultsAsync()](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.AsyncLazyDatastoreQuery#Google_Cloud_Datastore_V1_AsyncLazyDatastoreQuery_GetAllResultsAsync), or for diagnostic use cases the RPC responses can be viewed using [AsResponses()](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.AsyncLazyDatastoreQuery#Google_Cloud_Datastore_V1_AsyncLazyDatastoreQuery_AsResponses). The lazy evaluation is important: if you iterate over the query multiple times, it will execute multiple times, potentially returning different results each time.

### [BeginTransactionRequest](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.BeginTransactionRequest)

The request for \[Datastore.BeginTransaction\]\[google.datastore.v1.Datastore.BeginTransaction\].

### [BeginTransactionResponse](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.BeginTransactionResponse)

The response for \[Datastore.BeginTransaction\]\[google.datastore.v1.Datastore.BeginTransaction\].

### [CommitRequest](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.CommitRequest)

The request for \[Datastore.Commit\]\[google.datastore.v1.Datastore.Commit\].

### [CommitRequest.Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.CommitRequest.Types)

Container for nested types declared in the CommitRequest message type.

### [CommitResponse](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.CommitResponse)

The response for \[Datastore.Commit\]\[google.datastore.v1.Datastore.Commit\].

### [CompositeFilter](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.CompositeFilter)

A filter that merges multiple other filters using the given operator.

### [CompositeFilter.Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.CompositeFilter.Types)

Container for nested types declared in the CompositeFilter message type.

### [Datastore](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Datastore)

Each RPC normalizes the partition IDs of the keys in its input entities, and always returns entities with keys with normalized partition IDs. This applies to all keys and entities, including those in values, except keys with both an empty path and an empty or unset partition ID. Normalization of input keys sets the project ID (if not already set) to the project ID from the request.

### [Datastore.DatastoreBase](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Datastore.DatastoreBase)

Base class for server-side implementations of Datastore

### [Datastore.DatastoreClient](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Datastore.DatastoreClient)

Client for Datastore

### [DatastoreClient](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreClient)

Datastore client wrapper, for convenient use.

### [DatastoreClientBuilder](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreClientBuilder)

Builder class for [DatastoreClient](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreClient) to provide simple configuration of credentials, endpoint etc.

### [DatastoreClientImpl](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreClientImpl)

Datastore client wrapper implementation, for convenient use.

### [DatastoreConstants](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreConstants)

Constants for use in Datastore.

### [DatastoreDb](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreDb)

An abstraction over [DatastoreClient](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreClient) to simplify operations. Use the [Create(String, String, DatastoreClient)](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreDb#Google_Cloud_Datastore_V1_DatastoreDb_Create_System_String_System_String_Google_Cloud_Datastore_V1_DatastoreClient_) method to obtain an instance of this class.

### [DatastoreDbBuilder](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreDbBuilder)

Builder class for [DatastoreDb](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreDb) to provide simple configuration of credentials, endpoint etc.

### [DatastoreDbImpl](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreDbImpl)

Wrapper around [DatastoreClient](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreClient) to provide simpler operations.

### [DatastoreQueryResults](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreQueryResults)

A complete set of query results, fetched and stored in memory. Results are fetched from a [LazyDatastoreQuery](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.LazyDatastoreQuery) or [AsyncLazyDatastoreQuery](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.AsyncLazyDatastoreQuery) until the query-specified limit or end cursor is reached, or no more results are available.

### [DatastoreSettings](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreSettings)

Settings for [DatastoreClient](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreClient) instances.

### [DatastoreTransaction](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreTransaction)

Convenience wrapper around a Datastore transaction. All mutation operations ([Insert(IEnumerable<Entity>)](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreTransaction#Google_Cloud_Datastore_V1_DatastoreTransaction_Insert_System_Collections_Generic_IEnumerable_Google_Cloud_Datastore_V1_Entity__), [Delete(IEnumerable<Key>)](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreTransaction#Google_Cloud_Datastore_V1_DatastoreTransaction_Delete_System_Collections_Generic_IEnumerable_Google_Cloud_Datastore_V1_Key__), [Update(IEnumerable<Entity>)](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreTransaction#Google_Cloud_Datastore_V1_DatastoreTransaction_Update_System_Collections_Generic_IEnumerable_Google_Cloud_Datastore_V1_Entity__) and [Upsert(IEnumerable<Entity>)](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreTransaction#Google_Cloud_Datastore_V1_DatastoreTransaction_Upsert_System_Collections_Generic_IEnumerable_Google_Cloud_Datastore_V1_Entity__)) merely add to a list of mutations which are performed in a single [Commit(CallSettings)](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreTransaction#Google_Cloud_Datastore_V1_DatastoreTransaction_Commit_Google_Api_Gax_Grpc_CallSettings_) or [CommitAsync(CallSettings)](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreTransaction#Google_Cloud_Datastore_V1_DatastoreTransaction_CommitAsync_Google_Api_Gax_Grpc_CallSettings_) operation. This means the mutation methods are all synchronous and do not take call settings, as they don't perform any API operations.

Datastore limits the number of entities that can be modified in a Commit operation, and therefore one transaction. When modifying a large number of entities, partition the changes into multiple transactions. See [Datastore limits](https://cloud.google.com/datastore/docs/concepts/limits) for more details on Datastore limits.

Even though transactions aren't inherently related to a specific partition ID, the expected usage is that queries run inside a transaction are likely to be in a single partition, specified in a [DatastoreDb](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreDb) used to create the transaction.

Disposing of a transaction calls [Rollback(CallSettings)](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreTransaction#Google_Cloud_Datastore_V1_DatastoreTransaction_Rollback_Google_Api_Gax_Grpc_CallSettings_) if the transaction has not already been committed or rolled back.

This is an abstract class, implemented by [DatastoreTransactionImpl](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreTransactionImpl) for production use. Users creating their own [DatastoreDb](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreDb) subclasses may choose to create fake implementations for testing purposes. There are no abstract methods in this class; instead, all methods either delegate to another or throw [NotImplementedException](https://learn.microsoft.com/dotnet/api/system.notimplementedexception).

### [DatastoreTransactionImpl](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreTransactionImpl)

Production implementation of [DatastoreTransaction](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreTransaction), using a [DatastoreClient](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.DatastoreClient) to implement the operations.

### [Entity](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Entity)

A Datastore data object.

An entity is limited to 1 megabyte when stored. That _roughly_ corresponds to a limit of 1 megabyte for the serialized form of this message.

### [EntityResult](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.EntityResult)

The result of fetching an entity from Datastore.

### [EntityResult.Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.EntityResult.Types)

Container for nested types declared in the EntityResult message type.

### [Filter](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Filter)

A holder for any type of filter.

### [GqlQuery](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.GqlQuery)

A [GQL query](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).

### [GqlQueryParameter](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.GqlQueryParameter)

A binding parameter for a GQL query.

### [Key](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Key)

A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.

### [Key.Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Key.Types)

Container for nested types declared in the Key message type.

### [Key.Types.PathElement](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Key.Types.PathElement)

A (kind, ID/name) pair used to construct a key path.

If either name or ID is set, the element is complete. If neither is set, the element is incomplete.

### [KeyFactory](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.KeyFactory)

Provides a convenient way of producing keys of a specific kind, from a specified parent entity or key, or for root entities based on a partition ID.

### [KindExpression](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.KindExpression)

A representation of a kind.

### [LazyDatastoreQuery](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.LazyDatastoreQuery)

A Datastore query which is executed lazily. Iterating over this object will provide a sequence of entities; alternatively, all the results can be fetched using [GetAllResults()](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.LazyDatastoreQuery#Google_Cloud_Datastore_V1_LazyDatastoreQuery_GetAllResults), or for diagnostic use cases the RPC responses can be viewed using [AsResponses()](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.LazyDatastoreQuery#Google_Cloud_Datastore_V1_LazyDatastoreQuery_AsResponses). The lazy evaluation is important: if you iterate over the query multiple times, it will execute multiple times, potentially returning different results each time.

### [LookupRequest](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.LookupRequest)

The request for \[Datastore.Lookup\]\[google.datastore.v1.Datastore.Lookup\].

### [LookupResponse](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.LookupResponse)

The response for \[Datastore.Lookup\]\[google.datastore.v1.Datastore.Lookup\].

### [Mutation](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Mutation)

A mutation to apply to an entity.

### [MutationResult](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.MutationResult)

The result of applying a mutation.

### [PartitionId](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.PartitionId)

A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty.

A partition ID contains several dimensions: project ID and namespace ID.

Partition dimensions:

-   May be `&quot;&quot;`.
-   Must be valid UTF-8 bytes.
-   Must have values that match regex `[A-Za-z\d\.\-_]{1,100}` If the value of any dimension matches regex `__.*__`, the partition is reserved/read-only. A reserved/read-only partition ID is forbidden in certain documented contexts.

Foreign partition IDs (in which the project ID does not match the context project ID ) are discouraged. Reads and writes of foreign partition IDs may fail if the project is not in an active state.

### [Projection](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Projection)

A representation of a property in a projection.

### [PropertyFilter](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.PropertyFilter)

A filter on a specific property.

### [PropertyFilter.Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.PropertyFilter.Types)

Container for nested types declared in the PropertyFilter message type.

### [PropertyOrder](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.PropertyOrder)

The desired order for a specific property.

### [PropertyOrder.Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.PropertyOrder.Types)

Container for nested types declared in the PropertyOrder message type.

### [PropertyReference](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.PropertyReference)

A reference to a property relative to the kind expressions.

### [Query](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Query)

A query for entities.

### [QueryExtensions](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.QueryExtensions)

Extension methods around queries.

### [QueryResultBatch](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.QueryResultBatch)

A batch of results produced by a query.

### [QueryResultBatch.Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.QueryResultBatch.Types)

Container for nested types declared in the QueryResultBatch message type.

### [ReadOptions](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.ReadOptions)

The options shared by read requests.

### [ReadOptions.Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.ReadOptions.Types)

Container for nested types declared in the ReadOptions message type.

### [ReserveIdsRequest](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.ReserveIdsRequest)

The request for \[Datastore.ReserveIds\]\[google.datastore.v1.Datastore.ReserveIds\].

### [ReserveIdsResponse](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.ReserveIdsResponse)

The response for \[Datastore.ReserveIds\]\[google.datastore.v1.Datastore.ReserveIds\].

### [RollbackRequest](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.RollbackRequest)

The request for \[Datastore.Rollback\]\[google.datastore.v1.Datastore.Rollback\].

### [RollbackResponse](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.RollbackResponse)

The response for \[Datastore.Rollback\]\[google.datastore.v1.Datastore.Rollback\]. (an empty message).

### [RunAggregationQueryRequest](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.RunAggregationQueryRequest)

The request for \[Datastore.RunAggregationQuery\]\[google.datastore.v1.Datastore.RunAggregationQuery\].

### [RunAggregationQueryResponse](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.RunAggregationQueryResponse)

The response for \[Datastore.RunAggregationQuery\]\[google.datastore.v1.Datastore.RunAggregationQuery\].

### [RunQueryRequest](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.RunQueryRequest)

The request for \[Datastore.RunQuery\]\[google.datastore.v1.Datastore.RunQuery\].

### [RunQueryResponse](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.RunQueryResponse)

The response for \[Datastore.RunQuery\]\[google.datastore.v1.Datastore.RunQuery\].

### [TransactionOptions](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.TransactionOptions)

Options for beginning a new transaction.

Transactions can be created explicitly with calls to \[Datastore.BeginTransaction\]\[google.datastore.v1.Datastore.BeginTransaction\] or implicitly by setting \[ReadOptions.new\_transaction\]\[google.datastore.v1.ReadOptions.new\_transaction\] in read requests.

### [TransactionOptions.Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.TransactionOptions.Types)

Container for nested types declared in the TransactionOptions message type.

### [TransactionOptions.Types.ReadOnly](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.TransactionOptions.Types.ReadOnly)

Options specific to read-only transactions.

### [TransactionOptions.Types.ReadWrite](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.TransactionOptions.Types.ReadWrite)

Options specific to read / write transactions.

### [Value](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Value)

A message that can hold any of the supported value types and associated metadata.

### [ValueExtensions](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.ValueExtensions)

Extension methods on [Value](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Value).

## Enums

### [AggregationQuery.QueryTypeOneofCase](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.AggregationQuery.QueryTypeOneofCase)

Enum of possible cases for the "query\_type" oneof.

### [AggregationQuery.Types.Aggregation.OperatorOneofCase](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.OperatorOneofCase)

Enum of possible cases for the "operator" oneof.

### [CommitRequest.TransactionSelectorOneofCase](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.CommitRequest.TransactionSelectorOneofCase)

Enum of possible cases for the "transaction\_selector" oneof.

### [CommitRequest.Types.Mode](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.CommitRequest.Types.Mode)

The modes available for commits.

### [CompositeFilter.Types.Operator](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.CompositeFilter.Types.Operator)

A composite filter operator.

### [EntityResult.Types.ResultType](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)

Specifies what data the 'entity' field contains. A `ResultType` is either implied (for example, in `LookupResponse.missing` from `datastore.proto`, it is always `KEY_ONLY`) or specified by context (for example, in message `QueryResultBatch`, field `entity_result_type` specifies a `ResultType` for all the values in field `entity_results`).

### [Filter.FilterTypeOneofCase](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Filter.FilterTypeOneofCase)

Enum of possible cases for the "filter\_type" oneof.

### [GqlQueryParameter.ParameterTypeOneofCase](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.GqlQueryParameter.ParameterTypeOneofCase)

Enum of possible cases for the "parameter\_type" oneof.

### [Key.Types.PathElement.IdTypeOneofCase](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Key.Types.PathElement.IdTypeOneofCase)

Enum of possible cases for the "id\_type" oneof.

### [Mutation.ConflictDetectionStrategyOneofCase](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Mutation.ConflictDetectionStrategyOneofCase)

Enum of possible cases for the "conflict\_detection\_strategy" oneof.

### [Mutation.OperationOneofCase](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Mutation.OperationOneofCase)

Enum of possible cases for the "operation" oneof.

### [PropertyFilter.Types.Operator](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.PropertyFilter.Types.Operator)

A property filter operator.

### [PropertyOrder.Types.Direction](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.PropertyOrder.Types.Direction)

The sort direction.

### [QueryResultBatch.Types.MoreResultsType](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.QueryResultBatch.Types.MoreResultsType)

The possible values for the `more_results` field.

### [ReadOptions.ConsistencyTypeOneofCase](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.ReadOptions.ConsistencyTypeOneofCase)

Enum of possible cases for the "consistency\_type" oneof.

### [ReadOptions.Types.ReadConsistency](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.ReadOptions.Types.ReadConsistency)

The possible values for read consistencies.

### [RunAggregationQueryRequest.QueryTypeOneofCase](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.RunAggregationQueryRequest.QueryTypeOneofCase)

Enum of possible cases for the "query\_type" oneof.

### [RunQueryRequest.QueryTypeOneofCase](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.RunQueryRequest.QueryTypeOneofCase)

Enum of possible cases for the "query\_type" oneof.

### [TransactionOptions.ModeOneofCase](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.TransactionOptions.ModeOneofCase)

Enum of possible cases for the "mode" oneof.

### [Value.ValueTypeOneofCase](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.Value.ValueTypeOneofCase)

Enum of possible cases for the "value\_type" oneof.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
