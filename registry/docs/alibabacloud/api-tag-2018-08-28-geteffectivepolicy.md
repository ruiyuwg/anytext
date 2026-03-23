Retrieves the effective policy for a specified object.

## Operation description

### Usage notes

In Single-Account Mode, the current logon account can query its own effective policy. In Multi-Account Mode, the Management Account of a Resource Directory can query the effective policy for the Root Folder, a Folder, or a Member. A Member can also query its own effective policy. For more information about tag policy modes, see [Tag policy modes](/help/en/resource-management/tag/user-guide/overview).

Tag policy inheritance determines the effective policy. For more information, see [Tag policy inheritance and effective policy calculation](/help/en/resource-management/tag/user-guide/inheritance-of-a-tag-policy-and-calculation-of-an-effective-policy).

This topic provides an example of how to query the effective policy for the current logon account in Single-Account Mode.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Tag/2018-08-28/GetEffectivePolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Tag/2018-08-28/GetEffectivePolicy)

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

tag:GetEffectivePolicy

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

RegionId

string

No

The region ID. Only `cn-shanghai` is supported.

cn-shanghai

TargetId

string

No

The ID of the target object.

**Note**

This parameter is optional in Single-Account Mode and required in Multi-Account Mode.

154950938137\*\*\*\*

TargetType

string

No

The type of the target object. Valid values:

-   USER: queries the effective policy for the current logon account. This value applies only to Single-Account Mode.
    
-   ROOT: queries the effective policy for the Root Folder in a Resource Directory. This value applies only to Multi-Account Mode.
    
-   FOLDER: queries the effective policy for a Folder in a Resource Directory. This value applies only to Multi-Account Mode.
    
-   ACCOUNT: queries the effective policy for a Member in a Resource Directory. This value applies only to Multi-Account Mode.
    

**Note**

This parameter is optional in Single-Account Mode and required in Multi-Account Mode. The value is case-insensitive.

ACCOUNT

TagKeys

array

No

string

No

For more information about common parameters, see [Common Parameters](/help/en/resource-management/common-parameters).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The data returned.

RequestId

string

The request ID.

BB532282-94F5-5F56-877F-32D5E2A04F3F

EffectivePolicy

string

The effective policy.

{\\"tags\\":{\\"costcenter\\":{\\"tag\_value\\":\[\\"Beijing\\",\\"Shanghai\\"\],\\"tag\_key\\":\\"CostCenter\\"}}}

PolicyAttachments

array<object>

array<object>

TagKey

string

PolicyType

string

PolicyList

array<object>

object

PolicyId

string

PolicyName

string

AttachSeq

integer

AttachTime

string

TargetId

string

TargetType

string

## Examples

Success response

`JSON` format

```
{
  "RequestId": "BB532282-94F5-5F56-877F-32D5E2A04F3F",
  "EffectivePolicy": "{\\\"tags\\\":{\\\"costcenter\\\":{\\\"tag_value\\\":[\\\"Beijing\\\",\\\"Shanghai\\\"],\\\"tag_key\\\":\\\"CostCenter\\\"}}}",
  "PolicyAttachments": [
    {
      "TagKey": "",
      "PolicyType": "",
      "PolicyList": [
        {
          "PolicyId": "",
          "PolicyName": "",
          "AttachSeq": 0,
          "AttachTime": "",
          "TargetId": "",
          "TargetType": ""
        }
      ]
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NoPermission.RAM

The operator is not permission for the action in ram policy.

The account is not supported.

403

EffectivePolicy.ResourceGroupScope.TooLong

The resource group range of for effective policy is too long.

The resource group range for a valid policy is too long.

403

ConfigRule.NotExist

Config rule id does not exist.

Configuration audit does not exist.

403

RDAcount.HasOpened

As the RD master or administrator, you cannot activate the tag policy service because account has already enabled it, you can only activate it once the policy service is disabled by the aforementioned RD account.

The member account of the resource directory has a tag policy. You must disable the member account before you can activate the multi-account mode.

See [Error Codes](https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Tag/2018-08-28/GetEffectivePolicy#workbench-doc-change-demo) for a complete list.
