Retrieves the database profile.

## Operation description

To use the data profile, first register the location of the OSS bucket for the database.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/DataLake/2020-07-10/GetDatabaseProfile)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/DataLake/2020-07-10/GetDatabaseProfile)

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

dlf:GetDatabaseProfile

\*All Resource

`*`

None

None

## Request syntax

```
GET /webapi/metastorehouse/catalog/database/databaseprofile HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

CatalogId

string

No

The catalog ID.

1344371

DatabaseName

string

Yes

The database name.

test\_db

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response body.

Code

string

The error code.

\-

Message

string

The error message.

\-

RequestId

string

The request ID.

AEA7DCC8-DBF5-561B-A7FD-0747D7D51FEB

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
    
-   false
    

true

DatabaseProfile

[DatabaseProfile](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-databaseprofile)

The database profile.

{ "FileCnt": 213, "FileSize": 34324 }

## Examples

Success response

`JSON` format

```
{
  "Code": "-",
  "Message": "-",
  "RequestId": "AEA7DCC8-DBF5-561B-A7FD-0747D7D51FEB",
  "Success": true,
  "DatabaseProfile": {
    "FileCnt": 3234,
    "FileSize": 1254312,
    "Name": "test_db",
    "CreateTime": "2023-08-16 18:02:22",
    "Location": "oss://mybucket.cn-hangzhou.oss-dls.aliyuncs.com/test_db/",
    "ObjectSize": 1254312,
    "ObjectCnt": 3234,
    "LatestDate": "2023-08-30 19:16:10"
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/DataLake/2020-07-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/DataLake/2020-07-10/GetDatabaseProfile#workbench-doc-change-demo) for a complete list.
