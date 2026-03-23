Creates a network channel.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateNetworkChannel)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateNetworkChannel)

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

polardb:CreateNetworkChannel

create

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ResourceGroupId

string

No

The ID of the resource group.

rg-re\*\*\*\*\*\*\*\*\*

DBClusterId

string

Yes

The name of the source instance.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ChannelName

string

Yes

The name of the network channel. The name must consist of lowercase letters, digits, and underscores (\_). It must start and end with a letter or a digit. The name can be up to 64 characters long.

ch4

TargetDBClusterId

string

No

The name of the destination instance.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

TargetIp

string

No

The IP address of the destination instance.

192.\*\*.\*\*.46

TargetPort

string

No

The port of the destination instance.

9032

Notes

string

No

The notes.

test

VpcId

string

No

The ID of the virtual private cloud (VPC) where the endpoint is located.

vpc-25cdvfeq58pl\*\*\*\*

RegionId

string

No

The region ID.

cn-beijing

ClientToken

string

No

A client token that ensures the request is idempotent. The client generates this token. The token must be unique for each request. It is case-sensitive and can be up to 64 ASCII characters long.

6000170000591aed949d0f5\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

F9F1CB1A-B1D5-4EF5-A53A-\*\*\*\*\*\*\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "F9F1CB1A-B1D5-4EF5-A53A-************"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

404

InvalidDBClusterId.NotFound

The DBInstanceId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/CreateNetworkChannel#workbench-doc-change-demo) for a complete list.
