A management account or a delegated administrator account in a resource directory can create an account group to centrally manage resources, compliance packages, and rules across multiple member accounts.

## Operation description

### Limits

A management account or a delegated administrator account can create a maximum of 5 account groups. Each account group can contain a maximum of 200 member accounts.

### Background information

For more information about account groups, including their concepts, use cases, and the impact of member account changes on Cloud Config, see [Overview](/help/en/cloud-config/latest/account-groups-overview).

Cloud Config supports the following types of account groups:

-   Global account group: A global account group contains all members in a resource directory and automatically synchronizes member changes. A management account or a delegated administrator account can create only one global account group.
    
-   Custom account group: To create a custom account group, a management account or a delegated administrator account selects some or all member accounts from the resource directory.
    
    -   If a new member is added to the resource directory, the change is not automatically synchronized. The management account or delegated administrator account must manually add the new member to the account group.
        
    -   If a member is removed from the resource directory, the management account or delegated administrator account loses the permissions to manage that member's compliance. The custom account group automatically detects this change and removes the member from the group.
        
-   Folder account group: When an account group is created from a folder, it automatically detects and synchronizes changes to the members within that folder. The members in a folder account group are always consistent with the members in the selected folder.
    
    A management account or a delegated administrator account can select only one non-empty folder to create a folder account group.
    

### Usage notes

This topic provides an example of how to use a management account to create a custom account group of the `CUSTOM` type. The account group is named `Test_Group` and has the description `Test Group`. The member accounts are as follows:

-   The member account ID is `171322098523****` and the member account name is `Alice`.
    
-   The member account ID is `100532098349****` and the member account name is `Tom`.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/CreateAggregator)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/CreateAggregator)

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

config:CreateAggregator

create

\*Aggregator

`acs:config:*:{#accountId}:aggregator/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

AggregatorName

string

Yes

The name of the account group.

Example\_Aggregator

Description

string

No

The description of the account group.

Example aggregator used to demonstrate how to create an aggregator.

AggregatorAccounts

array<object>

No

The member accounts of the account group.

**Note**

-   If you set `AggregatorType` to \`RD, you can leave this parameter empty. This indicates that all members in the resource directory are added to the global account group.
    
-   If you set `AggregatorType` to `FOLDER`, you can leave this parameter empty. This indicates that all members in a specific folder in the resource directory are added to the folder account group.
    

object

No

AccountId

integer

No

The member ID. For more information about how to obtain the member ID, see [ListAccounts](/help/en/resource-management/api-listaccounts).

171322098523\*\*\*\*

AccountName

string

No

The member name. For more information about how to obtain the member name, see [ListAccounts](/help/en/resource-management/api-listaccounts).

Alice

AccountType

string

No

The affiliation of the member. Only `ResourceDirectory` is supported.

ResourceDirectory

ClientToken

string

No

A client token that is used to ensure the idempotence of the request. You must make sure that the token is unique for different requests. The `ClientToken` parameter can contain only ASCII characters and cannot exceed 64 characters in length.

1594295238-f9361358-5843-4294-8d30-b5183fac\*\*\*\*

AggregatorType

string

No

The type of the account group. Valid values:

-   RD: global account group.
    
-   FOLDER: folder account group. You must also set the `FolderId` parameter. For more information about how to obtain a folder ID, see [ListAccounts](/help/en/resource-management/api-listaccounts).
    
-   CUSTOM (default): custom account group. You must also set the `AccountId` and `AccountType` parameters for `AggregatorAccounts`.
    

CUSTOM

FolderId

string

No

The ID of the attached folder. You can specify multiple folder IDs. Separate the IDs with commas (,).

This parameter is required if you set `AggregatorType` to `FOLDER`.

fd-brHdgv\*\*\*\*,fd-brHdgk\*\*\*\*

Tag

array<object>

No

The tags of the resource.

You can attach a maximum of 20 tags.

object

No

The tags of the resource.

You can attach a maximum of 20 tags.

Key

string

No

The tag key of the resource. You can specify a maximum of 20 tag keys. The tag key cannot be an empty string.

A tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.

key-1

Value

string

No

The tag value of the resource. You can specify a maximum of 20 tag values. The tag value can be an empty string.

A tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

value-1

For information about common request parameters, see [Common parameters](/help/en/cloud-config/latest/common-parameters-2).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

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

Invalid.AggregatorAccounts.Value

The specified AggregatorAccounts is invalid.

The specified AggregatorAccounts is invalid.

400

Invalid.AccountType.Value

The specified AccountType is invalid.

The specified account type is invalid.

400

AggregatorExceedMaxCount

The maximum number of aggregator is exceeded.

The maximum number of aggregator is exceeded.

400

AggregatorAccountListDuplicated

The aggregator account list is duplicated.

The aggregator account list is duplicated.

400

AggregatorAccountListItemDuplicated

The aggregator account list item is duplicated.

The aggregator account list item is duplicated.

400

AggregatorNameDuplicated

The aggregator name is duplicated.

The aggregator name is duplicated.

403

NoPermissionCreateAggregator

You are not authorized to create the aggregator.

You are not authorized to create the aggregator.

404

AccountNotExisted

Your account does not exist.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/CreateAggregator#workbench-doc-change-demo) for a complete list.
