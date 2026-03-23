Queries the settings of shared proxies that are enabled on an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   SQL Server

### [](#feature-description)[](#)Feature description

This operation is used to query the shared proxy settings of an instance that runs MySQL or the read/write splitting settings of an instance that runs SQL Server. For more information about how to query the dedicated proxy settings of an ApsaraDB RDS for MySQL instance, see [DescribeDBProxy](/help/en/rds/developer-reference/api-rds-2014-08-15-describedbproxy) .

### [](#prerequisites)[](#)Prerequisites

Before you call this operation, make sure that the following requirements are met:

-   The shared proxy feature must be enabled for the primary instance.
-   The read/write splitting feature must be enabled for the primary instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstanceProxyConfiguration)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstanceProxyConfiguration)

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

rds:DescribeDBInstanceProxyConfiguration

get

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

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-uf6wjk5xxxxxxxxxx

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

PersistentConnectionsConfiguration

string

Indicates whether the short-lived connection optimization feature is enabled.

-   **Enable**
-   **Disable**

In this case, the return value is a JSON string. Examples:

```
{"status":"Disable"}.
```

{\\"status\\":\\"Disable\\"}

AttacksProtectionConfiguration

string

Indicates whether the mechanism that is used to mitigate brute-force attacks is enabled:

-   **Enable**
-   **Disable**

The return value is a JSON string. Example:

```
{"status":"Disable", "check_interval_seconds": 60,
          "max_failed_login_attempts": 60, "blocking_seconds": 600}
```

Description:

-   Each client allows {max\_failed\_login\_attempts} logon attempts that fail due to incorrect passwords within {check\_interval\_seconds} seconds. If one more such attempt is conducted, the client must wait for {blocking\_seconds} seconds before you can try again.
    
-   Valid values:
    
    -   check\_interval\_seconds: **30 to 600**. Unit: seconds.
    -   max\_failed\_login\_attempts: **10 to 5000**. Unit: times.
    -   blocking\_seconds: **30 to 3600**. Unit: seconds.

{\\"check\_interval\_seconds\\":\\"0\\",\\"max\_failed\_login\_attempts\\":\\"0\\",\\"blocking\_seconds\\":\\"0\\",\\"status\\":\\"Disable\\"}

RequestId

string

The request ID.

E9DD55F4-1A5F-48CA-BA57-DFB3CA8C4C34

TransparentSwitchConfiguration

string

Indicates whether the transparent switchover feature is enabled.

-   **Enable**
-   **Disable**

The return value is a JSON string. Example:

```
{"status":"Enable"}
```

{\\"status\\":\\"Enable\\"}

## Examples

Sample success responses

`JSON`format

```
{
  "PersistentConnectionsConfiguration": "{\\\"status\\\":\\\"Disable\\\"}",
  "AttacksProtectionConfiguration": "{\\\"check_interval_seconds\\\":\\\"0\\\",\\\"max_failed_login_attempts\\\":\\\"0\\\",\\\"blocking_seconds\\\":\\\"0\\\",\\\"status\\\":\\\"Disable\\\"}",
  "RequestId": "E9DD55F4-1A5F-48CA-BA57-DFB3CA8C4C34",
  "TransparentSwitchConfiguration": "{\\\"status\\\":\\\"Enable\\\"}"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceProxyConfiguration?updateTime=2024-11-20#workbench-doc-change-demo)
