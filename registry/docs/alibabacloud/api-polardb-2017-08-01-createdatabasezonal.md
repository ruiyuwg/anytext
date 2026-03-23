Creates a database of an edge cluster for PolarDB on ENS.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateDatabaseZonal)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateDatabaseZonal)

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

polardb:CreateDatabaseZonal

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

DBName

string

Yes

The name of the database. The name must meet the following requirements:

-   It must consist of lowercase letters, digits, hyphens (-), and underscores (\_).
    
-   It must start with a letter and end with a letter or a digit. The name can be up to 64 characters long.
    

testDB

CharacterSetName

string

Yes

The character set.

utf8

DBDescription

string

No

The description of the database. The description must meet the following requirements:

-   It cannot start with `http://` or `https://`.
    
-   It must be 2 to 256 characters in length.
    

testdesc

AccountName

string

No

The name of the account that is authorized to access the database.

testacc

AccountPrivilege

string

No

The permissions of the account. Valid values:

-   ReadWrite: read and write permissions.
    
-   ReadOnly: read-only permissions.
    
-   DMLOnly: DML permissions only.
    
-   DDLOnly: DDL permissions only.
    
-   ReadIndex: read-only and index permissions.
    

If you do not specify this parameter, the default value is ReadWrite.

ReadWrite

Collate

string

No

The locale setting. This specifies the collation for the new database.

C

Ctype

string

No

The locale setting. This specifies the character classification for the database.

C

ClientToken

string

No

A client token to ensure request idempotence. The client generates this token. The token must be unique across requests. It is case-sensitive and can be up to 64 ASCII characters long.

6000170000591aed949d0f54a343f1a4233c1e7d1c5c\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

93E98F25-BE02-40DA-83E3-F77F8D\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "93E98F25-BE02-40DA-83E3-F77F8D******"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidDBName.Malformed

The specified parameter DBName is not valid.

The format of the specified database name is invalid.

400

Database.AddError

Instance %s add database minidoc error

Failed to add database minidoc to cluster %s.

400

InvalidDBDescription.Malformed

The specified parameter DBDescription is not valid.

The specified DBDescription parameter is invalid.

400

InvalidAccountPrivilege.Malformed

The specified parameter AccountPrivilege is not valid.

The specified AccountPrivilege parameter is invalid.

400

InvalidAccountName.Malformed

The specified parameter AccountName is not valid.

The specified AccountName parameter is invalid.

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

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/CreateDatabaseZonal#workbench-doc-change-demo) for a complete list.
