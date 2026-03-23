Queries information from a specified knowledge base.

## Operation description

-   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
-   The response time may be long because this operation involves complex retrieval and matching. We recommend that you set appropriate timeout and retry policy for requests.
-   This interface is idempotent.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/bailian/2023-12-29/Retrieve)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/bailian/2023-12-29/Retrieve)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

sfm:Retrieve

none

\*All Resources

`*`

none

none

## Request syntax

```
POST /{WorkspaceId}/index/retrieve HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

Query

string

No

The input query prompt. The length and characters of the query are not limited.

DenseSimilarityTopK

integer

No

Vector retrieval top K. After generating vectors based on input text, the top K chunks in the knowledge base that are most similar to the vector representation of the input text are retrieved. Valid values: 0 to 100. The sum of the `DenseSimilarityTopK` and `SparseSimilarityTopK` parameters must be less than or equal to 200.

Default value: 100.

100

EnableReranking

boolean

No

Specifies whether to enable reranking. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). Valid values:

-   true
-   false

Default value: true.

true

EnableRewrite

boolean

No

Specifies whether to enable multi-round conversation rewriting. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). Valid values:

-   true
-   false

Default value: false.

false

Rerank

array<object>

No

Ranking configurations.

object

No

The ranking configurations object.

ModelName

string

No

The name of the rank model. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). Valid values:

-   gte-rerank-hybrid: Recommended official model.
-   gte-rerank

gte-rerank-hybrid

RerankMinScore

float

No

Similarity Threshold The lowest similarity score of chunks that can be returned. This parameter is used to filter text chunks returned by the rank model. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). Valid values: \[0.01-1.00\]. The priority of this parameter is greater than the similarity threshold configured for the knowledge base.

By default, this parameter is left empty. In this case, the similarity threshold of the knowledge base is used.

0.20

RerankTopN

integer

No

The top N return data after reranking. Valid values: 1 to 20. Default value: 5.

5

Rewrite

array<object>

No

Conversation rewriting configurations.

object

No

Conversation rewriting configurations object.

ModelName

string

No

Conversation rewriting model name. The query rewriting model automatically adjusts the original prompt based on the context to improve retrieval performance. Valid value:

-   conv-rewrite-qwen-1.8b

By default, this parameter is left empty, which means conv-rewrite-qwen-1.8b is used.

conv-rewrite-qwen-1.8b

SparseSimilarityTopK

integer

No

The top K of keyword retrieval. Chunks that exactly match the keywords of the input text are retrieved from the knowledge base. This filters out irrelevant chunks and boosts accuracy. Valid values: 0 to 100. The sum of the `DenseSimilarityTopK` and `SparseSimilarityTopK` parameters must be less than or equal to 200.

Default value: 100.

100

WorkspaceId

string

Yes

The ID of the workspace to which the knowledge base belongs. To view the workspace ID, you can click the Workspace Details icon in the upper-left corner on the [homepage](https://modelstudio.console.alibabacloud.com/#/home) of the console.

ws\_3Nt27MYcoK191ISp

IndexId

string

Yes

The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.

5pwe0m2g6t

SaveRetrieverHistory

boolean

No

Specifies whether to save the retrieve test history. Valid values:

-   true
-   false

Default value: false.

false

SearchFilters

array<object>

No

Specifies complex filter conditions. For more information about the syntax of SearchFilters, see the SearchFilter syntax section of this topic.

object

No

The filter condition object.

string

No

The filter condition.

Alibaba Cloud Model Studio

**SearchFilters syntax**

-   The filter conditions support sub groups. By default, the default semantics between sub groups is AND and cannot be modified. ﻿
    
    -   Fields within a sub group support the `_operator` = AND/OR logical operators and the AND semantics by default. Case insensitive. ﻿
    -   Fields within a sub group support `_conditions` =\[\] for nested sub-conditions. By default, the logical relationship between sub-conditions is inherited from the `_operator` logical operator of the parent group. You can also use `_conditions_operator`\= AND/OR to customize the logical relationship between sub-conditions.
-   Within a sub group, retrievable fields support `singleQuery`, `multiQuery`, and `rangeQuery`. ﻿
    
    -   singleQuery: numeric values and strings.
    -   multiQuery: an array of numeric values and strings.
    -   rangeQuery: The `eq`, `neq`, and `like` attributes are supported. You cannot configure multiple (case insensitive) intervals for a field. The `gt`, `gte`, `lt`, and `lte` attributes are supported. We recommend that you set these values to numeric (case insensitive).

```
Sample:

{
  "search_filters": [
    {
      "singleQuery": "stringValue",  // Single-value query
      "multiQuery": [                // Multi-value query.
        "stringValue1",
        "stringValue2"
      ],
      "logicQuery": {                // Logic query.
        "like": "prefix"
      },
      "rangeQuery": {                // Range query.
        "gte": intValue,
        "lte": intValue
      },
      "_conditions": [                // Nested sub-conditions.
        {
          "singleQuery": intValue
        }
      ]
    },
    {
      "_operator": "OR",                // Multi-condition query.
      "singleQuery": "stringValue"
    }
  ]
}
```

## Response parameters

Parameter

Type

Description

Example

object

Code

string

HTTP status code

Index.InvalidParameter

Data

object

The returned data.

Nodes

array<object>

The list of queried chunks.

nodes

object

The chunk object.

Metadata

any

The metadata map of the chunk.

Score

double

The similarity score of the chunk. Valid values:\[0-1\].

0.3

Text

string

The text of the chunk.

Message

string

The error message.

Required parameter(%s) missing or invalid, please check the request parameters.

RequestId

string

The request ID.

17204B98-7734-4F9A-8464-2446A84821CA

Status

string

The HTTP status code returned.

200

Success

boolean

Indications whether the API call is successful. Valid values:

-   true
-   false

true

## Examples

Sample success responses

`JSON`format

```
{
  "Code": "Index.InvalidParameter",
  "Data": {
    "Nodes": [
      {
        "Metadata": "",
        "Score": 0.3,
        "Text": ""
      }
    ]
  },
  "Message": "Required parameter(%s) missing or invalid, please check the request parameters.",
  "RequestId": "17204B98-7734-4F9A-8464-2446A84821CA",
  "Status": 200,
  "Success": true
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/bailian/2023-12-29/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-09

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/bailian/2023-12-29/Retrieve?updateTime=2026-01-09#workbench-doc-change-demo)

2024-07-23

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/bailian/2023-12-29/Retrieve?updateTime=2024-07-23#workbench-doc-change-demo)
