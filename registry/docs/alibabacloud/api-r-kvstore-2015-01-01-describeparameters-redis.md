Queries the configuration parameters and running parameters of a Tair (Redis OSS-compatible) instance.

## Operation description

This operation is applicable only to classic instances.

**Note** If the instance is deployed in cloud-native mode, you can use the [DescribeInstanceConfig](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeinstanceconfig-redis) operation to query the configuration and operational parameters of the instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeParameters)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeParameters)

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

kvstore:DescribeParameters

get

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

No

The region ID of the instance. You can call the [DescribeRegions](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeregions-redis) operation to query the most recent region list.

cn-hangzhou

DBInstanceId

string

Yes

The ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

NodeId

string

No

The ID of the node.

**Note** You can set this parameter to query the parameter settings of the specified node in a cluster instance.

r-bp1xxxxxxxxxxxxx-db-0

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

9C1338BE-8DE8-4890-A900-E1BC06BF\*\*\*\*

Engine

string

The database engine that the instance runs.

redis

EngineVersion

string

The database engine version of the instance.

4.0

ConfigParameters

array<object>

The configuration parameters that have not taken effect.

Parameter

object

The information about the array object.

CheckingCode

string

The check code that indicates the valid values of the parameter.

\[0|1\]

ParameterName

string

The name of the parameter.

script\_check\_enable

ParameterValue

string

The value of the parameter.

1

ForceRestart

boolean

Indicates whether the instance must be restarted for the modifications to take effect. Valid values:

-   **True**: The instance must be restarted for the modifications to take effect.
-   **False**: The instance does not need to be restarted for the modifications to take effect. Modifications immediately take effect.

true

ParameterDescription

string

The description of the parameter.

Check all keys passed in the KEYS array map to the same slot.

ModifiableStatus

boolean

Indicates whether the parameter can be reset. Valid values:

-   **False**: The parameter cannot be reset.
-   **True**: The parameter can be reset.

true

RunningParameters

array<object>

The running parameters.

Parameter

object

The information about the array object.

CheckingCode

string

The check code that indicates the valid values of the parameter.

\[0|1\]

ParameterName

string

The name of the parameter.

#no\_loose\_disabled-commands

ParameterValue

string

The value of the parameter.

keys,flushall,flushdb

ForceRestart

string

Indicates whether the instance must be restarted for the modifications to take effect. Valid values:

-   **True**: The instance must be restarted for the modifications to take effect.
-   **False**: The instance does not need to be restarted for the modifications to take effect. Modifications immediately take effect.

true

ParameterDescription

string

The description of the parameter.

You can disable some dangerous commands, for example \\"keys,flushdb,flushall\\", the commands must be in \[flushall,flushdb,keys,hgetall,eval,evalsha,script\].

ModifiableStatus

string

Indicates whether the parameter can be reset. Valid values:

-   **False**: The parameter cannot be reset.
-   **True**: The parameter can be reset.

true

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "9C1338BE-8DE8-4890-A900-E1BC06BF****",
  "Engine": "redis",
  "EngineVersion": 4,
  "ConfigParameters": {
    "Parameter": [
      {
        "CheckingCode": "[0|1]",
        "ParameterName": "script_check_enable",
        "ParameterValue": 1,
        "ForceRestart": true,
        "ParameterDescription": "Check all keys passed in the KEYS array map to the same slot.",
        "ModifiableStatus": true
      }
    ]
  },
  "RunningParameters": {
    "Parameter": [
      {
        "CheckingCode": "[0|1]",
        "ParameterName": "#no_loose_disabled-commands",
        "ParameterValue": "keys,flushall,flushdb",
        "ForceRestart": true,
        "ParameterDescription": "You can disable some dangerous commands, for example \\\"keys,flushdb,flushall\\\", the commands must be in [flushall,flushdb,keys,hgetall,eval,evalsha,script].",
        "ModifiableStatus": true
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

IncorrectDBInstanceType

Current DB instance type does not support this operation.

The operation is not supported while the instance has the current category. Read-only instances can be cloned and backed up.

404

InvalidDBInstanceClass.NotFound

Specified DB instance class is not found.

The instance type is invalid. Check the instance type.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeParameters?updateTime=2025-03-25#workbench-doc-change-demo)
