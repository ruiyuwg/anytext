Deletes a user-defined function from a database in the data lake by name.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/DataLake/2020-07-10/DeleteFunction)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/DataLake/2020-07-10/DeleteFunction)

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

dlf:DeleteFunction

\*All Resource

`*`

None

None

## Request syntax

```
DELETE /api/metastore/catalogs/databases/functions HTTP/1.1
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

The name of the function.

func2

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response.

Code

string

The status code.

OK

Message

string

The returned message.

.

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

Error code descriptions:

-   NoSuchObject: The specified database, table, or function does not exist.
    
-   InternalError: An internal error occurred. For more information, see the value of the Message parameter.
    

## Examples

Success response

`JSON` format

```
{
  "Code": "OK",
  "Message": ".",
  "RequestId": "B7F4B621-E41E-4C84-B97F-42B5380A32BB",
  "Success": true
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/DataLake/2020-07-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/DataLake/2020-07-10/DeleteFunction#workbench-doc-change-demo) for a complete list.
