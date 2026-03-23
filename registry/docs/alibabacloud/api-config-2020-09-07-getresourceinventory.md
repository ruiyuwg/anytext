Queries information about the most recently generated global resource inventory for the current account.

## Operation description

### Prerequisites

You can call the [GenerateResourceInventory](/help/en/cloud-config/latest/api-config-2020-09-07-generateresourceinventory) operation to generate a global resource inventory. You can then call this operation to obtain the URL of the global resource inventory.

### Usage notes

This topic provides an example of how to query the most recently generated global resource inventory for the current account.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/GetResourceInventory)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/GetResourceInventory)

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

config:GetResourceInventory

get

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

No parameters required.

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

89E2F38F-4EE4-545A-BD56-92E007ECFEE9

ResourceInventory

object

The information about the global resource inventory.

DownloadUrl

string

The download URL of the global resource inventory.

https://cloud-config-compliance-report.oss-cn-shanghai.aliyuncs.com/RESOURCE\_INVENTORY/100931896542\*\*\*\*/100931896542\*\*\*\*-RESOURCE\_INVENTORY-202306251435.csv?Expires=1687678394&OSSAccessKeyId=STS.MNQ2xAAne86aVWG7WGx5f\*\*\*&Signature=scdEN29shaKLcCOguj5%2FgrWIw%2FM%3D&security-token=BIASiQM1q3Ft5B2yfSjIr5bkedL7r\*\*\*\*

Status

string

The generation status of the inventory. Valid values:

-   CREATING: The inventory is being generated.
    
-   COMPLETE: The inventory is generated.
    

COMPLETE

ResourceInventoryGenerateTime

integer

The UNIX timestamp when the inventory started to be generated.

1687674634220

## Examples

Success response

`JSON` format

```
{
  "RequestId": "89E2F38F-4EE4-545A-BD56-92E007ECFEE9",
  "ResourceInventory": {
    "DownloadUrl": "https://cloud-config-compliance-report.oss-cn-shanghai.aliyuncs.com/RESOURCE_INVENTORY/100931896542****/100931896542****-RESOURCE_INVENTORY-202306251435.csv?Expires=1687678394&OSSAccessKeyId=STS.MNQ2xAAne86aVWG7WGx5f***&Signature=scdEN29shaKLcCOguj5%2FgrWIw%2FM%3D&security-token=BIASiQM1q3Ft5B2yfSjIr5bkedL7r****",
    "Status": "COMPLETE",
    "ResourceInventoryGenerateTime": 1687674634220
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

404

AccountNotExisted

Your account does not exist.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/GetResourceInventory#workbench-doc-change-demo) for a complete list.
