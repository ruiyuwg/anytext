Extends the retention period of the classic network endpoint of an ApsaraDB for MongoDB instance.

## Operation description

Before you call this operation, make sure that the instance meets the following requirements:

-   The instance is in the Running state.
    
-   The network of the instance is in hybrid access mode.
    

**Note**

This operation is supported by replica set instances and sharded cluster instances. This operation is not supported by standalone instances.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyDBInstanceNetExpireTime)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyDBInstanceNetExpireTime)

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

dds:ModifyDBInstanceNetExpireTime

update

\*Instance

`acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBInstanceId

string

Yes

The instance ID.

dds-bpxxxxxxxx

ConnectionString

string

No

The endpoint of the instance.

dds-bpxxxxxxxx.mongodb.rds.aliyuncs.com

ClassicExpendExpiredDays

integer

Yes

The retention period of the classic network endpoint of the instance. Valid values: **14**, **30**, **60**, and **120**. Unit: day.

30

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

459E7D5C-38DA-4E14-9C82-5B5AF693DBAB

## Examples

Success response

`JSON` format

```
{
  "RequestId": "459E7D5C-38DA-4E14-9C82-5B5AF693DBAB"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidConnectionString.NotFound

Specified connection string or net type is not found.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/ModifyDBInstanceNetExpireTime#workbench-doc-change-demo) for a complete list.
