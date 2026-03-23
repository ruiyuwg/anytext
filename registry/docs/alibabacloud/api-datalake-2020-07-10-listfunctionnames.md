Performs a paged query to retrieve a list of function names from a database.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/DataLake/2020-07-10/ListFunctionNames)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/DataLake/2020-07-10/ListFunctionNames)

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

dlf:ListFunctionNames

list

\*All Resource

`*`

None

None

## Request syntax

```
GET /api/metastore/catalogs/databases/functions/names HTTP/1.1
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

The regular expression that the function names must match.

.\*

NextPageToken

string

No

The token to retrieve the next page of results. It is returned in the response. To retrieve the first page, pass an empty string ('') or leave this parameter empty.

''

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

The description of the status code.

OK

FunctionNames

array

A list of function names.

string

The name of the function.

func2

Message

string

The returned message.

.

NextPageToken

string

The token for the next page of results.

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

Error codes for the Code parameter:  
InternalError: An internal error occurred. For more information, see the Message parameter.  
  

## Examples

Success response

`JSON` format

```
{
  "Code": "OK",
  "FunctionNames": [
    "func2"
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

See [Release Notes](https://api.alibabacloud.com/document/DataLake/2020-07-10/ListFunctionNames#workbench-doc-change-demo) for a complete list.
