Modifies the account permissions on a PolarDB for Xscale cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/GrantAccountPrivilegeZonal)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/GrantAccountPrivilegeZonal)

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

polardb:GrantAccountPrivilegeZonal

update

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

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

AccountName

string

Yes

The account name.

testacc

DBName

string

Yes

The name of the database for which to grant permissions. To grant permissions for multiple databases, separate the database names with a comma (,).

testdb\_1,testdb\_2

AccountPrivilege

string

Yes

The account permissions. Valid values:

-   ReadWrite: Read and write permissions.
    
-   ReadOnly: Read-only permissions.
    
-   DMLOnly: DML-only permissions.
    
-   DDLOnly: DDL-only permissions.
    
-   ReadIndex: Read-only and index permissions.
    

ReadWrite,ReadOnly

ClientToken

string

No

A client-generated token that ensures the idempotence of the request. Make sure that the token is unique among different requests. The token is case-sensitive and can be up to 64 ASCII characters in length.

6000170000591aed949d0f5\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

CD35F3-F3-44CA-AFFF-BAF869\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "CD35F3-F3-44CA-AFFF-BAF869******"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

EngineMigration.ActionDisabled

Specified action is disabled while custins is in engine migration.

The specified operation is disabled when custins is being migrated across engines.

400

LockTimeout

The request processing has failed due to lock timeout.

Failed to process the request due to a lock timeout.

400

Account.UpdateError

Instance %s update Account %s error

Failed to update account %s for cluster %s.

400

InvalidDBName.Malformed

The specified parameter DBName is not valid.

The format of the specified database name is invalid.

400

InvalidAccountName.Malformed

The specified parameter AccountName is not valid.

The specified AccountName parameter is invalid.

400

InvalidAccountPrivilege.Malformed

The specified parameter AccountPrivilege is not valid.

The specified AccountPrivilege parameter is invalid.

403

IncorrectAccountPrivilegeType

Current account privilege type does not support this operation.

The permission type of the current account does not support this operation.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

404

InvalidDBClusterId.NotFound

The DBInstanceId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/GrantAccountPrivilegeZonal#workbench-doc-change-demo) for a complete list.
