-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Datastore V1 Client - Class RunAggregationQueryRequest (1.24.4) Stay organized with collections Save and categorize content based on your preferences.

2.0.5 (latest) 2.0.4 1.34.2 1.33.1 1.32.3 1.31.0 1.30.0 1.29.2 1.28.2 1.26.0 1.25.0 1.24.4 1.23.0 1.22.1 1.21.2 1.19.0 1.18.1 1.17.1

Reference documentation and code samples for the Cloud Datastore V1 Client class RunAggregationQueryRequest.

The request for [Datastore.RunAggregationQuery](/php/docs/reference/cloud-datastore/1.24.4/V1.DatastoreClient#_Google_Cloud_Datastore_V1_DatastoreClient__runAggregationQuery__).

Generated from protobuf message `google.datastore.v1.RunAggregationQueryRequest`

## Namespace

Google \\ Cloud \\ Datastore \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ project_id`

`string`  

Required. The ID of the project against which to make the request.

`↳ database_id`

`string`  

The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database.

`↳ partition_id`

`[Google\Cloud\Datastore\V1\PartitionId](/php/docs/reference/cloud-datastore/1.24.4/V1.PartitionId)`  

Entities are partitioned into subsets, identified by a partition ID. Queries are scoped to a single partition. This partition ID is normalized with the standard default context partition ID.

`↳ read_options`

`[Google\Cloud\Datastore\V1\ReadOptions](/php/docs/reference/cloud-datastore/1.24.4/V1.ReadOptions)`  

The options for this query.

`↳ aggregation_query`

`[Google\Cloud\Datastore\V1\AggregationQuery](/php/docs/reference/cloud-datastore/1.24.4/V1.AggregationQuery)`  

The query to run.

`↳ gql_query`

`[Google\Cloud\Datastore\V1\GqlQuery](/php/docs/reference/cloud-datastore/1.24.4/V1.GqlQuery)`  

The GQL query to run. This query must be an aggregation query.

### getProjectId

Required. The ID of the project against which to make the request.

**Returns**

**Type**

**Description**

`string`

### setProjectId

Required. The ID of the project against which to make the request.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDatabaseId

The ID of the database against which to make the request.

'(default)' is not allowed; please use empty string '' to refer the default database.

**Returns**

**Type**

**Description**

`string`

### setDatabaseId

The ID of the database against which to make the request.

'(default)' is not allowed; please use empty string '' to refer the default database.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPartitionId

Entities are partitioned into subsets, identified by a partition ID.

Queries are scoped to a single partition. This partition ID is normalized with the standard default context partition ID.

**Returns**

**Type**

**Description**

`[Google\Cloud\Datastore\V1\PartitionId](/php/docs/reference/cloud-datastore/1.24.4/V1.PartitionId)|null`

### hasPartitionId

### clearPartitionId

### setPartitionId

Entities are partitioned into subsets, identified by a partition ID.

Queries are scoped to a single partition. This partition ID is normalized with the standard default context partition ID.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Datastore\V1\PartitionId](/php/docs/reference/cloud-datastore/1.24.4/V1.PartitionId)`  

**Returns**

**Type**

**Description**

`$this`

### getReadOptions

The options for this query.

**Returns**

**Type**

**Description**

`[Google\Cloud\Datastore\V1\ReadOptions](/php/docs/reference/cloud-datastore/1.24.4/V1.ReadOptions)|null`

### hasReadOptions

### clearReadOptions

### setReadOptions

The options for this query.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Datastore\V1\ReadOptions](/php/docs/reference/cloud-datastore/1.24.4/V1.ReadOptions)`  

**Returns**

**Type**

**Description**

`$this`

### getAggregationQuery

The query to run.

**Returns**

**Type**

**Description**

`[Google\Cloud\Datastore\V1\AggregationQuery](/php/docs/reference/cloud-datastore/1.24.4/V1.AggregationQuery)|null`

### hasAggregationQuery

### setAggregationQuery

The query to run.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Datastore\V1\AggregationQuery](/php/docs/reference/cloud-datastore/1.24.4/V1.AggregationQuery)`  

**Returns**

**Type**

**Description**

`$this`

### getGqlQuery

The GQL query to run. This query must be an aggregation query.

**Returns**

**Type**

**Description**

`[Google\Cloud\Datastore\V1\GqlQuery](/php/docs/reference/cloud-datastore/1.24.4/V1.GqlQuery)|null`

### hasGqlQuery

### setGqlQuery

The GQL query to run. This query must be an aggregation query.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Datastore\V1\GqlQuery](/php/docs/reference/cloud-datastore/1.24.4/V1.GqlQuery)`  

**Returns**

**Type**

**Description**

`$this`

### getQueryType

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
