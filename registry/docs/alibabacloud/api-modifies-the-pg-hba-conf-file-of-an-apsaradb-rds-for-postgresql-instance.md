Modifies the pg\_hba.conf file of an ApsaraDB RDS for PostgreSQL instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

RDS PostgreSQL

### [](#references)[](#)References

**Note** : Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts for calling this operation.

-   [Connect an ApsaraDB RDS for PostgreSQL instance to a self-managed AD domain](/help/en/rds/apsaradb-rds-for-postgresql/connect-an-apsaradb-rds-for-postgresql-instance-to-a-self-managed-ad-domain)
-   [The pg\_hba.conf File](https://www.postgresql.org/docs/11/auth-pg-hba-conf.html)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyPGHbaConfig)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyPGHbaConfig)

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

rds:ModifyPGHbaConfig

update

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

-   rds:ResourceTag

none

## Request parameters

Parameter

Type

Required

Description

Example

ClientToken

string

No

A reserved parameter. You do not need to specify this parameter.

1

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

pgm-bp1lymyn1v3i\*\*\*\*

OpsType

string

Yes

The method that you use to modify the pg\_hba.conf file. Valid values:

-   **add**: adds one or more records. If you use this method, make sure that the value of the PriorityId parameter for each new record is different from the value of the PriorityId parameter for any existing record.
-   **delete**: deletes one or more records. If you use this method, the record that corresponds to the specified value of the **PriorityId** parameter is deleted from the pg\_hba.conf file.
-   **modify**: modifies one or more records. If you use this method, the record that corresponds to the specified value of the **PriorityId** parameter is modified.
-   **update**: overwrites the existing configuration in the pg\_hba.conf file by using the new configuration.

add

HbaItem

array<object>

Yes

An array that consists of the details of the AD domain services.

object

Yes

Type

string

Yes

The connection type.

Valid values:

-   **host**: The record matches TCP/IP connections, including SSL connections and non-SSL connections.
-   **hostssl**: The record matches only TCP/IP connections that are established over SSL.
-   **hostnossl**: The record matches only TCP/IP connections that are not established over SSL connections.

**Note** You can set this parameter to hostssl only when SSL encryption is enabled for the instance. For more information, see Configure SSL encryption for an ApsaraDB RDS for PostgreSQL instance.[](/help/en/rds/apsaradb-rds-for-postgresql/configure-ssl-encryption-for-an-apsaradb-rds-for-postgresql-instance)

host

Mask

string

No

The mask of the IP address. If the value of the **Address** parameter is an IP address, you can use this parameter to specify the mask of the IP address.

0

Database

string

Yes

The name of the database. If you set this parameter to all, the specified users are allowed to access all databases on the instance.

If you specify multiple entries, separate the entries with commas (,).

all

PriorityId

integer

Yes

The priority of the record. If you set this parameter to 0, the record has the highest priority. Valid values: 0 to 10000.

This parameter is used to identify each record. When you add a record, the value of the PriorityId parameter for the new record must be different from the value of the PriorityId parameter of any existing record. When you modify or delete a record, you must also modify or delete the value of the PriorityId parameter for this record.

2

Address

string

Yes

The IP addresses from which the specified users can access the specified databases. If you set this parameter to 0.0.0.0/0, the specified users are allowed to access the specified databases from all IP addresses.

0.0.0.0/0

User

string

Yes

The user who is allowed to access the specified databases. You must specify the user that is used to log on to the RDS instance. If you specify multiple entries, separate the entries with commas (,).

ldapuser

Method

string

Yes

The authentication method. Valid values:

-   **trust**
-   **reject**
-   **scram-sha-256**
-   **md5**
-   **password**
-   **gss**
-   **sspi**
-   **ldap**
-   **radius**
-   **cert**
-   **pam**

ldap

Option

string

No

The options of the authentication method. In this topic, LDAP is used as an example. You must configure this parameter. For more information, see [Authentication Methods](https://www.postgresql.org/docs/11/auth-methods.html).

ldapserver=The private IP address of the ECS instance ldapbasedn="CN=Users,DC=pgsqldomain,DC=net" ldapbinddn="CN=The username of the administrator user of the AD domain controller, CN=Users,DC=pgsqldomain,DC=net" ldapbindpasswd="The password of the administrator user of the AD domain controller" ldapsearchattribute="sAMAccountName"

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The ID of the request.

458E0781-C46C-55F5-A0E5-1DD284B28A3F

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "458E0781-C46C-55F5-A0E5-1DD284B28A3F"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

HbaItem.InvalidType

Specified hba item type is invalid.

\-

400

HbaItem.InvalidMethod

Specified hba item auth method is invalid.

The specified HBA identity authentication method is invalid.

400

HbaItem.InvalidIPMask

Specified hba item ip mask is invalid.

\-

400

HbaItem.InvalidPriority

Specified hba item priorityId is out of range or duplicate.

\-

400

HbaItemOpsType.Invalid

Specified hba opsType is invalid.

\-

400

InvalidConfigValue

The ConfigValue is not valid

\-

400

MinorVersionNotSupport

The current database minor version does not support the operation.

The current instance kernel iteration does not support this operation. You can upgrade the kernel iteration.

400

InvalidDBInstanceName.NotFound

The specified DB instance name does not exist.

The instance name does not exist.

400

IncorrectDBInstanceType

Current DB instance type does not support this operation.

The operation failed. The RDS instance is not in a ready state.

403

HbaItemPriorityIdAlreadyExist

Specified hba item priorityId is exist.

\-

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

404

HbaItemPriorityIdNotFound

Specified hba item priorityId is not found.

\-

404

IncorrectDBInstanceLockMode

Current DB instance lock mode does not support this operation.

The operation failed. The RDS instance is locked.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-02-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyPGHbaConfig?updateTime=2022-02-14#workbench-doc-change-demo)
