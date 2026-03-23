Modifies the connection address and port of a MongoDB instance.

## Operation description

You can modify the connection address and port for the following instance types:

-   You can modify the connection address and port for instances that use local disks or cloud disks.
    
-   For sharded cluster instances, you can modify only the connection address of Mongos nodes.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyDBInstanceConnectionString)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyDBInstanceConnectionString)

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

dds:ModifyDBInstanceConnectionString

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

The ID of the instance.

**Note**

If you specify the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.

dds-bpxxxxxxxx

NodeId

string

No

The ID of a Mongos node in a sharded cluster instance. You can specify only one Mongos node ID per call.

**Note**

This parameter is valid only when **DBInstanceId** specifies the ID of a sharded cluster instance.

s-bpxxxxxxxx

CurrentConnectionString

string

No

The current connection address—the address to modify.

s-bpxxxxxxxx.mongodb.rds.aliyuncs.com

NewConnectionString

string

No

The new connection address. It must meet these requirements:

-   Start with a lowercase letter.
    
-   End with a lowercase letter or digit.
    
-   Contain only lowercase letters, digits, and hyphens (-).
    
-   Be 8 to 63 characters long.
    

**Note**

Specify only the prefix of the connection address. You cannot change any part beyond the prefix.

aliyuntest111

NewPort

integer

No

The new port number. Valid values are from 1000 to 65535.

**Note**

This parameter is valid only when **DBInstanceId** specifies the ID of a cloud disk instance.

3310

PortModifyOnly

boolean

No

NetworkType

string

No

vpc

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

FF36A84C-0694-42D0-861D-C383E8E4FAAF

ModifiedConnectionString

string

## Examples

Success response

`JSON` format

```
{
  "RequestId": "FF36A84C-0694-42D0-861D-C383E8E4FAAF",
  "ModifiedConnectionString": ""
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NewConnectionString.NotSupport

Specified newConnectionString is not supported.

newConnectionString format

400

InvalidConnectionStringOrPort.Duplicate

Specified connection string or port already exists.

The specified connection string or port information already exists, please check and resubmit.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/ModifyDBInstanceConnectionString#workbench-doc-change-demo) for a complete list.
