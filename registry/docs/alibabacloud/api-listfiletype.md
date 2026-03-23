Queries the information about node types, such as the code and name.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dataworks-public/2020-05-18/ListFileType)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dataworks-public/2020-05-18/ListFileType)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

ProjectId

long

No

The DataWorks workspace ID. You can log on to the DataWorks console and go to the Workspace page to view the workspace ID. You must configure either this parameter or the ProjectIdentifier parameter to determine the DataWorks workspace to which the operation is applied.

10000

ProjectIdentifier

string

No

The name of the DataWorks workspace. You can log on to the DataWorks console and go to the Workspace page to view the workspace name. You must configure either this parameter or the ProjectId parameter to determine the DataWorks workspace to which the operation is applied.

dw\_project

PageNumber

integer

Yes

The page number.

1

PageSize

integer

Yes

The number of entries per page. Maximum value: 100.

50

Keyword

string

No

The name of the node type. You can log on to the DataWorks console, go to the DataStudio page, and then view the name of a specific node type on the left side of the page. Take note of the following items when you configure this parameter:

-   You can view the name of a specific node type, but the language specified by this parameter to present the name must be the same as the language specified by the Locale parameter.
-   Fuzzy match is supported.
-   If this parameter is not configured, the names of all node types are returned.

ODPS SQL

Locale

string

No

The language that you use for the query. Valid values: zh-CN and en-US.

zh-CN

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

0000-ABCD-EFG\*\*\*\*

NodeTypeInfoList

object

The information about node types.

PageNumber

integer

The page number.

1

PageSize

integer

The number of entries per page.

50

TotalCount

integer

The total number of entries returned.

127

NodeTypeInfo

array<object>

The information about the node type.

NodeTypeInfo

object

NodeTypeName

string

The name of the node type. The codes and names of node types have the following mappings: 6 (Shell), 10 (ODPS SQL), 11 (ODPS MR), 23 (Data Integration), 24 (ODPS Script), 99 (zero load), 221 (PyODPS 2), 225 (ODPS Spark), 227 (EMR Hive), 228 (EMR Spark), 229 (EMR Spark SQL), 230 (EMR MR), 239 (OSS object inspection), 257 (EMR Shell), 258 (EMR Spark Shell), 259 (EMR Presto), 260 (EMR Impala), 900 (real-time synchronization), 1089 (cross-tenant collaboration), 1091 (Hologres development), 1093 (Hologres SQL), 1100 (assignment), and 1221 (PyODPS 3)

ODPS SQL

NodeType

integer

The code of the node type. The codes and names of node types have the following mappings: 6 (Shell), 10 (ODPS SQL), 11 (ODPS MR), 23 (Data Integration), 24 (ODPS Script), 99 (zero load), 221 (PyODPS 2), 225 (ODPS Spark), 227 (EMR Hive), 228 (EMR Spark), 229 (EMR Spark SQL), 230 (EMR MR), 239 (OSS object inspection), 257 (EMR Shell), 258 (EMR Spark Shell), 259 (EMR Presto), 260 (EMR Impala), 900 (real-time synchronization), 1089 (cross-tenant collaboration), 1091 (Hologres development), 1093 (Hologres SQL), 1100 (assignment), and 1221 (PyODPS 3)

10

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0000-ABCD-EFG****",
  "NodeTypeInfoList": {
    "PageNumber": 1,
    "PageSize": 50,
    "TotalCount": 127,
    "NodeTypeInfo": [
      {
        "NodeTypeName": "ODPS SQL",
        "NodeType": 10
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

Forbidden.Access

Access is forbidden. Please first activate DataWorks Enterprise Edition or Flagship Edition.

No permission, please authorize

429

Throttling.Api

The request for this resource has exceeded your available limit.

\-

429

Throttling.System

The DataWorks system is busy. Try again later.

\-

429

Throttling.User

Your request is too frequent. Try again later.

\-

500

InternalError.UserId.Missing

An internal system error occurred. Try again later.

\-

500

InternalError.System

An internal system error occurred. Try again later.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dataworks-public/2020-05-18/errorCode).
