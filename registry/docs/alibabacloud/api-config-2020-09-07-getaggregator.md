Queries the name, creation time, members, and type of an account group.

## Operation description

This topic provides an example of how to query the details of the account group `ca-88ea626622af0055****`. The response shows that the account group name is `Test_Group`, the description is `Test Group`, the type is `CUSTOM` (custom account group), and the status is `1` (created).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/GetAggregator)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/GetAggregator)

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

config:GetAggregator

get

\*Aggregator

`acs:config:*:{#accountId}:aggregator/{#AggregatorId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

AggregatorId

string

Yes

The ID of the account group.

ca-88ea626622af0055\*\*\*\*

Tag `deprecated`

array<object>

No

The tags of the resource. This parameter is deprecated and is not in use.

A maximum of 20 tags can be attached.

object

No

The tags of the resource.

A maximum of 20 tags can be attached.

Key

string

No

The tag key of the resource.

A maximum of 20 tag keys can be attached.

key-1

Value

string

No

The tag value of the resource.

A maximum of 20 tag values can be attached.

value-1

For more information about common request parameters, see [Common parameters](/help/en/cloud-config/latest/common-parameters-2).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

None

RequestId

string

The request ID.

733DD93C-2277-4905-AE0C-0BA95C04B8BC

Aggregator

object

The information about the account group.

AggregatorCreateTimestamp

string

The timestamp when the account group was created.

Unit: milliseconds.

1623034091000

AggregatorAccounts

array<object>

The information about the members in the account group.

object

None

RecorderStatus

string

The status of Resource Monitoring for the member. Valid values:

-   REGISTRABLE: Not registered.
    
-   BUILDING: Building.
    
-   REGISTERED: Registered.
    
-   REBUILDING: Rebuilding.
    

REGISTERED

AccountId

integer

The member ID.

171322098523\*\*\*\*

AccountType

string

The type of the account. Only ResourceDirectory is supported.

ResourceDirectory

AccountName

string

The member name.

Alice

AggregatorAccountCount

integer

The number of members in the account group.

2

Description

string

The description of the account group.

The description of the aggregator.

AggregatorName

string

The name of the account group.

Test\_Group

AggregatorStatus

integer

The status of the account group. Valid values:

-   0: The account group is being created.
    
-   1: The account group is created.
    

1

AggregatorType

string

The type of the account group. Valid values:

-   RD: global account group.
    
-   FOLDER: folder account group.
    
-   CUSTOM: custom account group.
    

CUSTOM

AccountId

integer

The ID of the management account that is used to create the account group.

100931896542\*\*\*\*

AggregatorId

string

The ID of the account group.

ca-88ea626622af0055\*\*\*\*

FolderName

string

The name of the folder to which the folder account group is attached. Multiple names are separated by commas (,).

Example-name

Tags

array<object>

The resource tags.

object

The resource tags.

TagKey

string

The tag key.

key-1

TagValue

string

The tag value.

value-1

FolderId

string

The ID of the folder to which the folder account group is attached.

fd-brHdgv\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "733DD93C-2277-4905-AE0C-0BA95C04B8BC",
  "Aggregator": {
    "AggregatorCreateTimestamp": "1623034091000",
    "AggregatorAccounts": [
      {
        "RecorderStatus": "REGISTERED",
        "AccountId": 0,
        "AccountType": "ResourceDirectory",
        "AccountName": "Alice"
      }
    ],
    "AggregatorAccountCount": 2,
    "Description": "The description of the aggregator.",
    "AggregatorName": "Test_Group",
    "AggregatorStatus": 1,
    "AggregatorType": "CUSTOM",
    "AccountId": 0,
    "AggregatorId": "ca-88ea626622af0055****",
    "FolderName": "Example-name",
    "Tags": [
      {
        "TagKey": "key-1",
        "TagValue": "value-1"
      }
    ],
    "FolderId": "fd-brHdgv****"
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

Invalid.AggregatorId.Value

The specified AggregatorId is invalid.

The specified aggregator ID does not exist or you are not authorized to use the aggregator.

404

AccountNotExisted

Your account does not exist.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/GetAggregator#workbench-doc-change-demo) for a complete list.
