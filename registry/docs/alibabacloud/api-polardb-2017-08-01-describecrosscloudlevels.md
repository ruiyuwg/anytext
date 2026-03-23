Queries the supported cross-cloud specifications.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeCrossCloudLevels)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeCrossCloudLevels)

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

polardb:DescribeCrossCloudLevels

get

\*All Resource

`*`

None

None

## Request syntax

```
GET  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ProjectId

string

Yes

The resource pool ID.

pj-87681rbcef6\*\*\*\*\*\*

DBType

string

Yes

The database engine type. Valid values:

-   MySQL
    
-   PostgreSQL
    
-   Oracle
    

MySQL

DBVersion

string

No

The version number of the database engine.

Valid values for MySQL:

-   5.6
    
-   5.7
    
-   8.0
    

Valid values for PostgreSQL:

-   11
    
-   14
    
-   15
    

5.6

StorageType

string

Yes

The storage class.

SharedStorage

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

E56531A4-E552-40BA-9C58-137B80\*\*\*\*\*\*

CrossCloudLevelList

array<object>

The list of supported cross-cloud specifications.

object

DBType

string

The database engine type.

MySQL

LevelName

string

The CPU and memory.

2 核 8 GB

LevelCode

string

The specification code.

polar.mysql.g4.medium.c

## Examples

Success response

`JSON` format

```
{
  "RequestId": "E56531A4-E552-40BA-9C58-137B80******",
  "CrossCloudLevelList": [
    {
      "DBType": "MySQL",
      "LevelName": "2 核 8 GB",
      "LevelCode": "polar.mysql.g4.medium.c"
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeCrossCloudLevels#workbench-doc-change-demo) for a complete list.
