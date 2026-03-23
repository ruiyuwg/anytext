Creates a database for a PolarDB cluster.

## Operation description

Before you call this operation, make sure that the following requirements are met:

-   The cluster is in the Running state.
-   The cluster is unlocked.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateDatabase)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateDatabase)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

polardb:CreateDatabase

create

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#DbClusterId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DBClusterId

string

Yes

The ID of cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBName

string

Yes

The name of the database. The name must meet the following requirements:

-   The name can contain lowercase letters, digits, hyphens (-), and underscores (\_).
-   The name must start with a lowercase letter and end with a lowercase letter or a digit. The name must be 1 to 64 characters in length.

**Note** Do not use reserved words as database names, such as `test` or `mysql`.

testDB

CharacterSetName

string

Yes

The character set that is used by the cluster. For more information, see [Character set tables](/help/en/polardb/polardb-for-mysql/character-set-tables).

utf8

DBDescription

string

No

The description of the database. The description must meet the following requirements:

-   It cannot start with `http://` or `https://`.
-   It must be 2 to 256 characters in length.

**Note** This parameter is required for a PolarDB for Oracle or PolarDB for PostgreSQL cluster. This parameter is optional for a PolarDB for MySQL cluster.

testdesc

AccountName

string

No

The name of the account that is authorized to access the database. You can call the [DescribeAccounts](/help/en/polardb/polardb-for-mysql/api-describeaccounts) operation to query account information.

**Note**-   You can specify only a standard account. By default, privileged accounts have all permissions on all databases. You do not need to grant privileged accounts the permissions to access the database.
-   This parameter is required for PolarDB for PostgreSQL (Compatible with Oracle) clusters or PolarDB for PostgreSQL clusters. This parameter is optional for PolarDB for MySQL clusters.

testacc

AccountPrivilege

string

No

The permissions that are granted to the account. Valid values:

-   **ReadWrite**: read and write permissions.
-   **ReadOnly**: read-only permissions.
-   **DMLOnly**: permissions only to execute DML statements on the database.
-   **DDLOnly**: permissions only to execute DDL statements on the database.
-   **ReadIndex**: read-only and index permissions.

The default value is **ReadWrite**.

**Note**

-   This parameter is valid only when the **AccountName** parameter is specified.
    
-   For a PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL cluster, this parameter is optional. If **AccountName** is specified, it is the account of the database owner.
    
-   For a PolarDB for MySQL cluster, this parameter is optional.
    

ReadWrite

Collate

string

No

The language that defines the collation rules in the database.

**Note**

-   The language must be compatible with the character set that is specified by **CharacterSetName**.
    
-   This parameter is required for a PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL cluster. This parameter is optional for a PolarDB for MySQL cluster. To view the valid values of this parameter, perform the following steps: Log on to the PolarDB console and click the ID of the cluster. In the left-side navigation pane, choose **Settings and Management** > **Databases**. Then, click **Create Database**.
    

C

Ctype

string

No

The language that indicates the character type of the database.

**Note**-   The language must be compatible with the character set that is specified by **CharacterSetName**.
-   The value that you specify must be the same as the value of **Collate**.
-   This parameter is required for PolarDB for PostgreSQL (Compatible with Oracle) clusters or PolarDB for PostgreSQL clusters. This parameter is optional for PolarDB for MySQL clusters.

To view the valid values for this parameter, perform the following steps: Log on to the PolarDB console and click the ID of a cluster. In the left-side navigation pane, choose **Settings and Management** > **Databases**. Then, click **Create Database**.

C

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

93E98F25-BE02-40DA-83E3-F77F8D\*\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "93E98F25-BE02-40DA-83E3-F77F8D******"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

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

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-09-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/polardb/2017-08-01/CreateDatabase?updateTime=2023-09-12#workbench-doc-change-demo)
