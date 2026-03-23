Creates an account for a PolarDB on ENS cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateAccountZonal)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateAccountZonal)

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

polardb:CreateAccountZonal

create

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

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

AccountName

string

Yes

The account name. The name must meet the following requirements:

-   Start with a lowercase letter and end with a letter or a digit.
    
-   Contain only lowercase letters, digits, and underscores (\_).
    
-   Be 2 to 16 characters in length.
    
-   Cannot be a reserved username, such as root or admin.
    

testacc

AccountPassword

string

Yes

The account password. The password must meet the following requirements:

-   Contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
    
-   Be 8 to 32 characters in length.
    
-   Special characters are `!@#$%^&*()_+-=`.
    

Test1111

AccountType

string

No

The account type. Valid values:

-   Normal: a standard account.
    
-   Super: a privileged account.
    

Normal

AccountDescription

string

No

The description of the account. The description must meet the following requirements:

-   Cannot start with `http://` or `https://`.
    
-   Be 2 to 256 characters in length.
    

testdes

DBName

string

No

The name of the database that the destination account can access. You can specify multiple database names. Separate them with commas (,).

testdb

AccountPrivilege

string

No

The permissions of the account. Valid values:

-   ReadWrite: read and write permissions.
    
-   ReadOnly: read-only permissions.
    
-   DMLOnly: DML permissions only.
    
-   DDLOnly: DDL permissions only.
    
-   ReadIndex: read and index permissions.
    

ReadWrite

ClientToken

string

No

A client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token is case-sensitive and can contain a maximum of 64 ASCII characters.

6000170000591aed949d0f54a343f1a4233c1e7d1c5c\*\*\*\*\*\*

PrivForAllDB

string

No

Specifies whether to grant permissions on all current and future databases in the cluster. Valid values:

-   0 or empty: Does not grant permissions.
    
-   1: Grants permissions.
    

0

NodeType

string

No

The node type.

Normal

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response schema.

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

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/CreateAccountZonal#workbench-doc-change-demo) for a complete list.
