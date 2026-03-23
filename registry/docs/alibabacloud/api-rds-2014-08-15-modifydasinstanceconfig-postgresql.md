Configures automatic storage expansion for an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL

### [](#references)[](#)References

**Note** Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts for calling this operation.

-   [Configure automatic storage expansion for ApsaraDB RDS for MySQL](/help/en/rds/apsaradb-rds-for-mysql/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-mysql-instance)
-   [Configure automatic storage expansion for ApsaraDB RDS for PostgreSQL](/help/en/rds/apsaradb-rds-for-postgresql/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-postgresql-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDasInstanceConfig)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDasInstanceConfig)

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

rds:ModifyDasInstanceConfig

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

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the generated token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

ETnLKlblzczshOTUbOCz\*\*\*\*\*

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-uf6wjk5\*\*\*\*\*

StorageAutoScale

string

Yes

Specifies whether to enable automatic storage expansion. Valid values:

-   **Enable**
-   **Disable**

Enable

StorageThreshold

integer

No

The threshold in percentage based on which an automatic storage expansion is triggered. If the available storage reaches the threshold, ApsaraDB RDS increases the storage capacity of the instance. Valid values:

-   **10**
-   **20**
-   **30**
-   **40**
-   **50**

**Note** If you set the StorageAutoScale parameter to **Enable**, you must specify this parameter.

50

StorageUpperBound

integer

No

The maximum storage capacity that is allowed for an automatic storage expansion. The value of this parameter must be greater than or equal to the current storage capacity of the RDS instance.

-   If the RDS instance uses ESSDs, the maximum value of this parameter can be set to 32000 GB.
-   If the RDS instance uses standard SSDs, the maximum value of this parameter can be set to 6000 GB.

**Note** If you set the **StorageAutoScale** parameter to **Enable**, you must specify this parameter.

1000

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

C3C247D4-1643-4C5D-87C2-C829543FC626

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "C3C247D4-1643-4C5D-87C2-C829543FC626"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

AccessHDMInstanceFailed

The specified instance access HDM failed.

The RDS instance failed to connect to DAS.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-06-23

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDasInstanceConfig?updateTime=2022-06-23#workbench-doc-change-demo)
