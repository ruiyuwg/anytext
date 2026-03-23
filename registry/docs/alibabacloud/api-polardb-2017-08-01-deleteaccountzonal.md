Deletes an account from an edge cluster for PolarDB on ENS.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DeleteAccountZonal)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DeleteAccountZonal)

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

polardb:DeleteAccountZonal

delete

\*All Resource

`*`

None

None

## Request syntax

```
POST  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBClusterId

string

Yes

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*

AccountName

string

Yes

The account name.

test\_acc

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

2FED790E-FB61-4721-8C1C-07C627\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "2FED790E-FB61-4721-8C1C-07C627******"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

GdnRole.NotSupport

Specified gdn role is not support.

The specified GDN role is not supported.

400

ConcurrentTaskExceeded

Concurrent task exceeding the allowed amount.

400

Account.DelError

Instance %s remove Account crawl\_r error

A crawl\_r error occurred when you remove accounts for cluster %s.

400

Connect.Timeout

Service can not connect to instance temporarily.

Failed to connect to the cluster.

400

InvalidAccountName.Malformed

The specified parameter AccountName is not valid.

The specified AccountName parameter is invalid.

401

AccountActionForbidden

Some objects depend on the special account.

Database objects depend on the account that is used to perform this operation. Remove the dependency and perform this operation again.

404

InvalidDBClusterId.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DeleteAccountZonal#workbench-doc-change-demo) for a complete list.
