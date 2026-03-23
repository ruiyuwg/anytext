Lists the user-defined functions from a database in a data lake.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/DataLake/2020-07-10/ListFunctions)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/DataLake/2020-07-10/ListFunctions)

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

dlf:ListFunctions

list

\*All Resource

`*`

None

None

## Request syntax

```
GET /api/metastore/catalogs/databases/functions/list HTTP/1.1
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

FunctionNamePattern

string

No

A regular expression that filters user-defined functions by name.

.\*

NextPageToken

string

No

The token to retrieve the next page of results. If the response does not provide this token, pass an empty string ("").

2cb472ec1bf84f8d92f9c4baa0d21c19aa

PageSize

integer

No

The number of entries to return on each page. The maximum value is 1000.

10

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response body.

Code

string

The status code.

OK

Functions

array

A list of function details.

[Function](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-function)

The details of a function.

Message

string

The returned message.

.

NextPageToken

string

The token to retrieve the next page of results.

2cb472ec1bf84f8d92f9c4baa0d21c19aa

RequestId

string

The ID of the request.

B7F4B621-E41E-4C84-B97F-42B5380A32BB

Success

boolean

Indicates whether the call was successful. Valid values:

-   true: The call was successful.
    
-   false: The call failed.
    

true

Error codes for \`Code\`:  
\`InternalError\`: The request failed due to an internal error. For more information, see the \`Message\` parameter.  
  

## Examples

Success response

`JSON` format

```
{
  "Code": "OK",
  "Functions": [
    {
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
    }
  ],
  "Message": ".",
  "NextPageToken": "2cb472ec1bf84f8d92f9c4baa0d21c19aa",
  "RequestId": "B7F4B621-E41E-4C84-B97F-42B5380A32BB",
  "Success": true
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/DataLake/2020-07-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/DataLake/2020-07-10/ListFunctions#workbench-doc-change-demo) for a complete list.
