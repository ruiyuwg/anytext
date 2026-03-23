Updates an Associated Resource Tag Rule.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Tag/2018-08-28/UpdateAssociatedResourceRule)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Tag/2018-08-28/UpdateAssociatedResourceRule)

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

tag:UpdateAssociatedResourceRule

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

RegionId

string

No

The ID of the region.

cn-hangzhou

SettingName

string

Yes

The name of the Associated Resource Tag Rule setting.

For valid values, see the **Setting Name** column in [Resources that support the Associated Resource Tag Rule feature](/help/en/resource-management/tag/user-guide/associated-resource-label-settings).

rule:AssociateEip-UnassociateEip-TagInstance:Ecs-Instance:Vpc-Eip

TagKeys

array

No

A list of tag keys for the Associated Resource Tag Rule.

string

No

A tag key for the Associated Resource Tag Rule.

k1

Status

string

No

The status of the Associated Resource Tag Rule. Valid values:

-   Enable: The rule is enabled.
    
-   Disable: The rule is disabled.
    

Enable

ExistingStatus

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The data returned.

RequestId

string

The ID of the request.

94E16BB6-3FB6-1297-B5B2-ED2250F437CD

## Examples

Success response

`JSON` format

```
{
  "RequestId": "94E16BB6-3FB6-1297-B5B2-ED2250F437CD"
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

NumberExceed.TagKeys

The maximum number of TagKeys is exceeded.

The maximum number of tag keys is exceeded.

400

InvalidParameter.Status

The parameter Status is invalid.

Invalid parameter status.

400

InvalidSettingName.NotFound

The specified SettingName is not found.

400

Invalid.SettingName

The parameter SettingName is invalid.

The entry SettingName is illegal.

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

See [Release Notes](https://api.alibabacloud.com/document/Tag/2018-08-28/UpdateAssociatedResourceRule#workbench-doc-change-demo) for a complete list.
