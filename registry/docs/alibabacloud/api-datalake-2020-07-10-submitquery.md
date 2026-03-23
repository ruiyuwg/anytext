Submits an SQL query.

## Operation description

-   This API operation is suitable for small and medium-sized queries running for less than an hour.
    
-   A maximum of 10,000 rows are returned for each query.
    
-   Concurrent execution is limited for a single Alibaba Cloud account. If you submit multiple queries at the same time, the queries are queued.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/DataLake/2020-07-10/SubmitQuery)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/DataLake/2020-07-10/SubmitQuery)

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

dlf:SubmitQuery

\*All Resource

`*`

None

None

## Request syntax

```
POST /webapi/query/submitQueryRequestBody HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

body

object

No

The HTTP request body.

sql

string

No

The SQL statement.

show databases

workspaceId

string

No

The workspace ID.

WS-A129E61C4892D2B4

catalogId

string

No

The data catalog ID.

catalog1

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response body.

{ "success" : true }

Data

string

The returned data.

Q-14475CF9B51FCE5E

RequestId

string

The request ID.

279AA630-A8ED-5EA9-80A3-2E213D63548C

Success

boolean

Indicates whether the operation was successful. Valid values:

-   true
    
-   false
    

true

## Examples

Success response

`JSON` format

```
{
  "Data": "Q-14475CF9B51FCE5E",
  "RequestId": "279AA630-A8ED-5EA9-80A3-2E213D63548C",
  "Success": true
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

Query.ClusterNotReady

Query cluster is not ready. Please try again later.

Query cluster is not ready, please wait a few seconds and retry

See [Error Codes](https://api.alibabacloud.com/document/DataLake/2020-07-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/DataLake/2020-07-10/SubmitQuery#workbench-doc-change-demo) for a complete list.
