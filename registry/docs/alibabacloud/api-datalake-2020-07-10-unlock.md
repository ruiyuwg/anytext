Releases the specified metadata lock.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/DataLake/2020-07-10/UnLock)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/DataLake/2020-07-10/UnLock)

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

dlf:UnLock

\*All Resource

`*`

None

None

## Request syntax

```
DELETE /api/metastore/catalogs/databases/tables/locks HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

LockId

integer

No

The lock ID.

11709

The ID of the lock. This ID is returned by the CreateLock operation.

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

Message

string

The returned message.

.

RequestId

string

The request ID.

37C8470A-5E6D-5E4E-AEF0-EA3EBE9C89EE

Success

boolean

Indicates whether the request was successful. Valid values:

-   true: The request was successful.
    
-   false: The request failed.
    

true

## Examples

Success response

`JSON` format

```
{
  "Code": "OK",
  "Message": ".",
  "RequestId": "37C8470A-5E6D-5E4E-AEF0-EA3EBE9C89EE",
  "Success": true
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/DataLake/2020-07-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/DataLake/2020-07-10/UnLock#workbench-doc-change-demo) for a complete list.
