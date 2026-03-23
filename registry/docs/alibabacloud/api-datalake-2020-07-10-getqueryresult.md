Retrieves query results.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/DataLake/2020-07-10/GetQueryResult)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/DataLake/2020-07-10/GetQueryResult)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

dlf:GetQueryResult

get

\*All Resource

`*`

None

None

## Request syntax

```
GET /webapi/query/getQueryResult HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

QueryId

string

No

The query ID.

**Note**

Call the SubmitQuery operation to obtain the query ID.

Q-41676378709440CE

PageNumber

integer

No

The page number.

1

PageSize

integer

No

The number of entries per page. The maximum value is 1000.

100

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The query results.

{ "data" : }

Status

string

The query status.

**Valid values:**

-   AVAILABLE :
    
    Available
    
-   CANCELLED :
    
    Canceled
    
-   RUNNING :
    
    Running
    
-   CANCELLING :
    
    Canceling
    
-   WAITING :
    
    Waiting
    
-   ERROR :
    
    Error
    

AVAILABLE

ResultTmpTable

string

The temporary table for the results. This parameter is not in use.

table

Owner

integer

The UID of the Alibaba Cloud account that created the query.

229167306180609\*\*\*

ErrorMessage

string

The error message for the query.

Table or view not found:

Progress

integer

The query progress. The value is between 0 and 100.

99

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
    
-   false
    

true

Schema

string

The fields and types in the table header of the query result. This parameter is returned only when the status is AVAILABLE.

\[{"name":"id","type":"INT"},{"name":"student\_name","type":"VARCHAR"}\]

ResultTmpDb

string

The temporary database for the results. This parameter is not in use.

db

GmtModified

string

The time when the query result was updated.

2022-05-09 16:19:09

JobCompleted

boolean

Indicates whether the query is complete. A value of false means you need to continue polling this operation.

true

RowCount

integer

The total number of rows in the result. This parameter is returned only when the status is AVAILABLE.

100

RegionId

string

The region ID.

cn-hangzhou

EndTime

string

The time when the query was completed.

2022-05-09 16:19:09

StartTime

string

The time when the query started.

2022-05-09 16:18:09

RequestId

string

The request ID.

1D2BCFBA-7639-59A9-817B-944EC1339279

Rows

string

The result information. This parameter is returned only when the status is AVAILABLE. The content is represented by a two-dimensional JSON array.

\[\[10,"Tom"\],\[11,"Jerry"\]\]

Logs

string

The operational logs.

\["this is log"\]

GmtCreate

string

The time when the query was created.

2022-05-09 16:18:09

Duration

integer

The runtime duration in milliseconds.

8000

Sql

string

The original SQL statement that was executed.

select \* from db.student

RowCountOverLimit

boolean

Indicates whether the total number of rows in the result exceeds the maximum value.

false

Id

string

The query ID.

Q-41676378709440CE

TotalBytesProcessed

integer

The total volume of data scanned, in bytes.

1024

## Examples

Success response

`JSON` format

```
{
  "Status": "AVAILABLE",
  "ResultTmpTable": "table",
  "Owner": 0,
  "ErrorMessage": "Table or view not found:",
  "Progress": 99,
  "Success": true,
  "Schema": "[{\"name\":\"id\",\"type\":\"INT\"},{\"name\":\"student_name\",\"type\":\"VARCHAR\"}]",
  "ResultTmpDb": "db\n",
  "GmtModified": "2022-05-09 16:19:09",
  "JobCompleted": true,
  "RowCount": 100,
  "RegionId": "cn-hangzhou",
  "EndTime": "2022-05-09 16:19:09",
  "StartTime": "2022-05-09 16:18:09",
  "RequestId": "1D2BCFBA-7639-59A9-817B-944EC1339279",
  "Rows": "[[10,\"Tom\"],[11,\"Jerry\"]]",
  "Logs": "[\"this is log\"]",
  "GmtCreate": "2022-05-09 16:18:09",
  "Duration": 8000,
  "Sql": "select * from db.student",
  "RowCountOverLimit": false,
  "Id": "Q-41676378709440CE\n",
  "TotalBytesProcessed": 1024
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

Query.ResultExpired

Query result cache expired, please export result in history query

See [Error Codes](https://api.alibabacloud.com/document/DataLake/2020-07-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/DataLake/2020-07-10/GetQueryResult#workbench-doc-change-demo) for a complete list.
