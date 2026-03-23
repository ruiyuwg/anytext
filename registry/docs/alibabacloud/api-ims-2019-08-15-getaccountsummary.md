Retrieves a summary of an Alibaba Cloud account.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ims/2019-08-15/GetAccountSummary)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ims/2019-08-15/GetAccountSummary)

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

ram:GetAccountSummary

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

81313F5E-3C85-478F-BCC9-E1B70E4556DB

SummaryMap

object

The summary information of the Alibaba Cloud account.

MFADevices

integer

The number of virtual multi-factor authentication (MFA) devices.

13

AccessKeysPerUserQuota

integer

The maximum number of AccessKey pairs that a RAM user can have.

2

AttachedPoliciesPerGroupQuota

integer

The maximum number of custom policies that can be attached to a user group.

5

AttachedSystemPoliciesPerRoleQuota

integer

The maximum number of system policies that can be attached to a RAM role.

20

AttachedPoliciesPerRoleQuota

integer

The maximum number of custom policies that can be attached to a RAM role.

5

GroupsPerUserQuota

integer

The maximum number of user groups that a RAM user can join.

5

Roles

integer

The number of RAM roles.

19

PolicySizeQuota

integer

The maximum length of a policy document.

2048

AttachedSystemPoliciesPerGroupQuota

integer

The maximum number of system policies that can be attached to a user group.

20

AttachedSystemPoliciesPerUserQuota

integer

The maximum number of system policies that can be attached to a RAM user.

20

AttachedPoliciesPerUserQuota

integer

The maximum number of custom policies that can be attached to a RAM user.

10

GroupsQuota

integer

The maximum number of user groups that can be created.

50

Groups

integer

The number of user groups.

7

PoliciesQuota

integer

The maximum number of custom policies that can be created.

1500

VirtualMFADevicesQuota

integer

The maximum number of virtual MFA devices that can be created.

1000

VersionsPerPolicyQuota

integer

The maximum number of policy versions.

5

RolesQuota

integer

The maximum number of RAM roles that can be created.

1000

UsersQuota

integer

The maximum number of RAM users that can be created.

1000

Policies

integer

The number of custom policies.

13

Users

integer

The number of RAM users.

9

MFADevicesInUse

integer

The number of virtual MFA devices that are in use.

2

IPItemsPerAKPolicyQuota

integer

The maximum number of IP addresses that can be set in an account-level or AccessKey-level network access control policy.

50

ConditionsPerAKPolicyQuota

integer

The maximum number of conditions that can be set in an account-level or AccessKey-level network access control policy.

8

AccountAccessKeysPerAccountQuota

integer

The maximum number of AccessKeys for an Alibaba Cloud account.

2

## Examples

Success response

`JSON` format

```
{
  "RequestId": "81313F5E-3C85-478F-BCC9-E1B70E4556DB",
  "SummaryMap": {
    "MFADevices": 13,
    "AccessKeysPerUserQuota": 2,
    "AttachedPoliciesPerGroupQuota": 5,
    "AttachedSystemPoliciesPerRoleQuota": 20,
    "AttachedPoliciesPerRoleQuota": 5,
    "GroupsPerUserQuota": 5,
    "Roles": 19,
    "PolicySizeQuota": 2048,
    "AttachedSystemPoliciesPerGroupQuota": 20,
    "AttachedSystemPoliciesPerUserQuota": 20,
    "AttachedPoliciesPerUserQuota": 10,
    "GroupsQuota": 50,
    "Groups": 7,
    "PoliciesQuota": 1500,
    "VirtualMFADevicesQuota": 1000,
    "VersionsPerPolicyQuota": 5,
    "RolesQuota": 1000,
    "UsersQuota": 1000,
    "Policies": 13,
    "Users": 9,
    "MFADevicesInUse": 2,
    "IPItemsPerAKPolicyQuota": 50,
    "ConditionsPerAKPolicyQuota": 8,
    "AccountAccessKeysPerAccountQuota": 2
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ims/2019-08-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ims/2019-08-15/GetAccountSummary#workbench-doc-change-demo) for a complete list.
