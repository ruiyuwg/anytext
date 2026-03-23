Retrieves a user-defined function from a database in a data lake.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/DataLake/2020-07-10/GetFunction)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/DataLake/2020-07-10/GetFunction)

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

dlf:GetFunction

get

\*All Resource

`*`

None

None

## Request syntax

```
GET /api/metastore/catalogs/databases/functions HTTP/1.1
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

The ID of the data catalog.

1344371

DatabaseName

string

No

The name of the database.

database\_test

FunctionName

string

No

The name of the user-defined function.

func2

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned data.

返回结果

Code

string

The description of the status code.

OK

Function

[Function](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-function)

The details of the function.

{"FunctionName":test}

Message

string

The returned message.

error

RequestId

string

The request ID.

B7F4B621-E41E-4C84-B97F-42B5380A32BB

Success

boolean

Indicates whether the request was successful. Valid values:

-   true: The request was successful.
    
-   false: The request failed.
    

true

Error codes for the Code parameter:  
InternalError: See the Message parameter for details.  
  

## Examples

Success response

`JSON` format

```
{
  "Code": "OK",
  "Function": {
    "CatalogId": "1344371",
    "ClassName": "com.xxx.xxxxFunction",
    "CreateTime": 1608863962,
    "DatabaseName": "database_test",
    "FunctionName": "function1",
    "FunctionType": "JAVA",
    "OwnerName": "zhangsan",
    "OwnerType": "USER",
    "ResourceUri": [
      {
        "ResourceType": "JAR",
        "Uri": "hdfs:///tmp/jar1.jar"
      }
    ],
    "UpdateTime": 1608863962,
    "CreatedBy": "CreatedBy"
  },
  "Message": "error",
  "RequestId": "B7F4B621-E41E-4C84-B97F-42B5380A32BB",
  "Success": true
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/DataLake/2020-07-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/DataLake/2020-07-10/GetFunction#workbench-doc-change-demo) for a complete list.
