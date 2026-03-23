The management account or a delegated administrator account of a resource directory can modify the name and description of an account group, and add or remove members.

## Operation description

This topic provides an example of how to add a member to the account group `ca-dacf86d8314e00eb****`. The member has an ID of `173808452267****`, a name of `Tony`, and an account type of `ResourceDirectory`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/UpdateAggregator)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/UpdateAggregator)

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

config:UpdateAggregator

update

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

For more information about how to obtain the ID of an account group, see [ListAggregators](/help/en/cloud-config/latest/listaggregators).

ca-dacf86d8314e00eb\*\*\*\*

AggregatorName

string

No

The name of the account group.

For more information about how to obtain the name of an account group, see [ListAggregators](/help/en/cloud-config/latest/listaggregators).

Test\_Group

FolderId

string

No

The ID of the folder. You can enter multiple folder IDs. Separate the IDs with commas (,).

fd-brHdgv\*\*\*\*,fd-brHdgk\*\*\*\*

Description

string

No

The description of the account group.

For more information about how to obtain the description of an account group, see [ListAggregators](/help/en/cloud-config/latest/listaggregators).

测试组

AggregatorAccounts

array<object>

No

The members in the account group.

**Note**

You can leave this parameter empty to skip updating the member list. To update the member list, you must specify both `AccountId` and `AccountType`.

object

No

None

AccountId

integer

No

The ID of the member.

For more information about how to obtain the ID of a member, see [ListAccounts](/help/en/resource-management/api-listaccounts).

**Note**

To update the member list, you must specify both `AccountId` and `AccountType`.

173808452267\*\*\*\*

AccountName

string

No

The name of the member.

For more information about how to obtain the name of a member, see [ListAccounts](/help/en/resource-management/api-listaccounts).

**Note**

To update the member list, you must specify both `AccountId` and `AccountType`.

Tony

AccountType

string

No

The affiliation of the member. Only ResourceDirectory is supported.

**Note**

To update the member list, you must specify both `AccountId` and `AccountType`.

ResourceDirectory

ClientToken

string

No

A client token that ensures the idempotence of the request. Generate a unique token for each request. The token can contain only ASCII characters and must be no more than 64 characters in length.

1594295238-f9361358-5843-4294-8d30-b5183fac\*\*\*\*

Tag `deprecated`

array<object>

No

The tags of the resource. This parameter is deprecated and no longer takes effect. Ignore this parameter.

You can attach up to 20 tags.

object

No

The tags of the resource.

You can attach up to 20 tags.

Key

string

No

The key of the tag. A tag key cannot be an empty string.

The tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

key-1

Value

string

No

The tag value can be up to 128 characters in length. It cannot start with `acs:` and cannot contain `http://` or `https://`.

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

The ID of the request.

8195B664-9565-4685-89AC-8B5F04B44B92

AggregatorId

string

The ID of the account group.

ca-dacf86d8314e00eb\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "8195B664-9565-4685-89AC-8B5F04B44B92",
  "AggregatorId": "ca-dacf86d8314e00eb****"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

Invalid.AggregatorAccounts.Empty

You must specify AggregatorAccounts.

You must specify AggregatorAccounts.

400

AggregatorAccountExceedMaxCount

The maximum number of aggregator account is exceeded.

The maximum number of aggregator account is exceeded.

400

AggregatorAccountListDuplicated

The aggregator account list is duplicated.

The aggregator account list is duplicated.

400

AggregatorAccountListItemDuplicated

The aggregator account list item is duplicated.

The aggregator account list item is duplicated.

400

AggregatorAlreadyPending

The aggregator has a pending operation and cannot be updated.

The aggregator has a pending operation and cannot be updated.

400

AggregatorNameDuplicated

The aggregator name is duplicated.

The aggregator name is duplicated.

400

DefaultAggregatorDeleteNotSupport

The default aggregator cannot be deleted.

400

Invalid.AggregatorId.Value

The specified AggregatorId is invalid.

The specified aggregator ID does not exist or you are not authorized to use the aggregator.

400

Invalid.AccountType.Value

The specified AccountType is invalid.

The specified account type is invalid.

400

Invalid.AggregatorAccounts.Value

The specified AggregatorAccounts is invalid.

The specified AggregatorAccounts is invalid.

403

AggregatorMemberNoPermission

The aggregator member is not authorized to perform the operation.

The aggregator member is not authorized to perform the operation.

404

AccountNotExisted

Your account does not exist.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/UpdateAggregator#workbench-doc-change-demo) for a complete list.
