Creates a PolarDB database account.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateAccount)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateAccount)

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

polardb:CreateAccount

create

\*dbcluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBClusterId

string

Yes

The ID of the cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

AccountName

string

Yes

The name of the account. The name must meet the following requirements:

-   Starts with a lowercase letter and ends with a letter or a digit.
    
-   Consists of lowercase letters, digits, and underscores (\_).
    
-   Is 2 to 16 characters in length.
    
-   Cannot be a reserved username, such as root or admin.
    

testacc

AccountPassword

string

Yes

The password of the account. The password must meet the following requirements:

-   Contains at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
    
-   Is 8 to 32 characters in length.
    
-   The special characters are `!@#$%^&*()_+-=`.
    

Test1111

AccountType

string

No

The type of the account. Valid values:

-   **Normal**: a standard account.
    
-   **Super**: a privileged account.
    

**Note**

-   If you leave this parameter empty, a **Super** account is created by default.
    
-   For a PolarDB for PostgreSQL (compatible with Oracle) cluster or a PolarDB for PostgreSQL cluster, you can create multiple privileged accounts. Privileged accounts have more permissions than standard accounts. For more information, see [Create a database account](/help/en/polardb/polardb-for-mysql/user-guide/create-and-manage-database-accounts).
    
-   For a PolarDB for MySQL cluster, you can create only one privileged account. Privileged accounts have more permissions than standard accounts. For more information, see [Create a database account](/help/en/polardb/polardb-for-mysql/user-guide/create-and-manage-database-accounts).
    

Normal

AccountDescription

string

No

The description of the account. The description must meet the following requirements:

-   Cannot start with `http://` or `https://`.
    
-   Is 2 to 256 characters in length.
    

testdes

DBName

string

No

The databases that the account can access. Separate multiple database names with a comma (,).

**Note**

This parameter is supported only for standard accounts of PolarDB for MySQL clusters.

testdb

AccountPrivilege

string

No

The permissions to grant to the account on the specified databases. Valid values:

-   **ReadWrite**: read and write
    
-   **ReadOnly**: read-only
    
-   **DMLOnly**: DML only
    
-   **DDLOnly**: DDL only
    
-   **ReadIndex**: read and index
    

**Note**

-   The `AccountPrivilege` parameter takes effect only when the `DBName` parameter is specified.
    
-   If you specify multiple databases for `DBName`, you must grant permissions to each database. The permissions must correspond to the databases in order. Separate the permissions with a comma (,). The `AccountPrivilege` string can be up to 900 characters long. For example, to grant read and write permissions to DB1 and read-only permissions to DB2, set `DBName` to `DB1,DB2` and `AccountPrivilege` to `ReadWrite,ReadOnly`.
    
-   This parameter is supported only for standard accounts of PolarDB for MySQL clusters.
    

ReadWrite

ClientToken

string

No

A client-generated token that ensures the idempotence of the request. The token must be unique across requests. It is case-sensitive and can be up to 64 ASCII characters long.

6000170000591aed949d0f54a343f1a4233c1e7d1c5c\*\*\*\*\*\*

PrivForAllDB

string

No

Specifies whether to grant permissions on all current and future databases in the cluster. Valid values:

-   **0** or leave empty: Does not grant permissions.
    
-   **1**: Grants permissions.
    

**Note**

-   This parameter takes effect only when the `AccountPrivilege` parameter is specified.
    
-   If you set this parameter to `1`, the permissions specified by `AccountPrivilege` are granted to all current and future databases in the cluster.
    

0

NodeType

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

CED079B7-A408-41A1-BFF1-EC608E\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "CED079B7-A408-41A1-BFF1-EC608E******"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

LockTimeout

The request processing has failed due to lock timeout.

Failed to process the request due to a lock timeout.

400

EngineMigration.ActionDisabled

Specified action is disabled while custins is in engine migration.

The specified operation is disabled when custins is being migrated across engines.

400

InvalidAccountPassword.Malformed

The specified parameter AccountPassword is not valid.

The specified AccountPassword parameter is invalid.

400

InvalidAccountType.Malformed

The specified parameter AccountType is not valid.

The specified AccountType parameter is invalid.

400

InvalidAccountDescription.Malformed

The specified parameter AccountDescription is not valid.

The specified AccountDescription parameter is invalid.

400

InvalidAccountPrivilege.Malformed

The specified parameter AccountPrivilege is not valid.

The specified AccountPrivilege parameter is invalid.

400

InvalidAccountName.Malformed

The specified parameter AccountName is not valid.

The specified AccountName parameter is invalid.

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

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/CreateAccount#workbench-doc-change-demo) for a complete list.
