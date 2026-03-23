Creates associated resource tag rules.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Tag/2018-08-28/CreateAssociatedResourceRules)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Tag/2018-08-28/CreateAssociatedResourceRules)

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

tag:CreateAssociatedResourceRules

create

\*AssociatedRule

`acs:tag::{#accountId}:associatedrule/{#AssociatedSettingName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

CreateRulesList

array<object>

No

A list of associated resource tag rules.

object

No

An associated resource tag rule.

SettingName

string

Yes

The setting name of the associated resource tag rule.

For valid values, see the **Setting name** column in [Resources that support associated resource tagging](/help/en/resource-management/tag/user-guide/associated-resource-label-settings).

rule:AttachEni-DetachEni-TagInstance:Ecs-Instance:Ecs-Eni

Status

string

Yes

Specifies whether to enable the associated resource tag rule. Valid values:

-   Enable (default): The rule is enabled.
    
-   Disable: The rule is disabled.
    

Enable

TagKeys

array

No

The tag keys to which the rule applies.

string

No

The tag key to which the rule applies.

k1

ExistingStatus

string

No

RegionId

string

No

The region ID.

cn-hangzhou

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response data.

RequestId

string

The request ID.

33BD6957-D7B0-500C-ADA1-300414EDCE89

## Examples

Success response

`JSON` format

```
{
  "RequestId": "33BD6957-D7B0-500C-ADA1-300414EDCE89"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidOperation.NotActivated

The associated resources service has not been activated.

The associated resource service is not activated for the user.

400

MissingParameter.SettingName

You must specify SettingName.

You must specify a parameter name.

400

InvalidParameter.SettingName

The parameter SettingName is invalid.

400

MissingParameter.AssociatedResourceRule

The parameter AssociatedResourceRule must not be null.

The parameter-associated resource rule is required.

400

MissingParameter.Status

You must specify Status.

The status parameter is required.

400

InvalidParameter.Status

The parameter Status is invalid.

Invalid parameter status.

400

NumberExceed.TagKeys

The maximum number of TagKeys is exceeded.

The maximum number of tag keys is exceeded.

400

Invalid.SettingName

The parameter SettingName is invalid.

The entry SettingName is illegal.

400

InvalidRule.Existed

The rule with SettingName already exists, please do not create it again.

This rule already exists. Do not create it again.

400

InvalidSettingName.NotFound

The specified Setting Name is not found.

The setting name you specified does not exist.

400

NumberExceed.SettingNames

The maximum number of SettingNames is exceeded.

The maximum number of names is exceeded.

403

NoPermission.Operator

No access permission, please contact the master account or permission administrator for authorization.

No permissions. Contact the owner of the Alibaba Cloud account or the permission administrator.

403

InvalidParameter.TagKey

The Tag.N.Key parameter is invalid.

The Tag.N.Key parameter is invalid.

See [Error Codes](https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Tag/2018-08-28/CreateAssociatedResourceRules#workbench-doc-change-demo) for a complete list.
