Retrieves a list of associated resource rules.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Tag/2018-08-28/ListAssociatedResourceRules)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Tag/2018-08-28/ListAssociatedResourceRules)

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

tag:ListAssociatedResourceRules

get

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

NextToken

string

No

The token returned from a previous call to retrieve the next page of results.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

MaxResult

integer

No

The number of entries to return on each page.

Default Value: 50. Maximum Value: 100.

50

SettingName

array

No

The names of the associated resource rules.

string

No

The name of an associated resource rule.

rule:UpdateLoadBalancerZones-UpdateLoadBalancerAddressTypeConfig-TagAlb:Alb-LoadBalancer:Vpc-Eip

Status

string

No

The status of the associated resource rules to query. Valid values:

-   Enable: The rule is enabled.
    
-   Disable: The rule is disabled.
    

Enable

RegionId

string

No

The Region ID.

cn-hangzhou

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The data returned.

RequestId

string

The Request ID.

6E27F22C-EDA3-132E-A53F-77DE3BC2343D

NextToken

string

You can use the `NextToken` parameter to determine whether there is a token that can be used to start the next query. Valid values:

-   If `NextToken` is empty, no next query is performed.
    
-   If a value is returned for `NextToken`, the value is the token that is used for the next query.
    

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

Rules

array<object>

A list of associated resource rules.

object

The details of an associated resource rule.

SettingName

string

The name of the associated resource rule.

rule:UpdateLoadBalancerZones-UpdateLoadBalancerAddressTypeConfig-TagAlb:Alb-LoadBalancer:Vpc-Eip

Status

string

The status of the associated resource rule. Valid values: `Enable` and `Disable`.

Disable/Enable

TagKeys

array

The Tag Keys to which the rule applies.

string

A Tag Key to which the rule applies.

k1

ExistingStatus

string

## Examples

Success response

`JSON` format

```
{
  "RequestId": "6E27F22C-EDA3-132E-A53F-77DE3BC2343D",
  "NextToken": "caeba0bbb2be03f84eb48b699f0a****",
  "Rules": [
    {
      "SettingName": "rule:UpdateLoadBalancerZones-UpdateLoadBalancerAddressTypeConfig-TagAlb:Alb-LoadBalancer:Vpc-Eip",
      "Status": "Disable/Enable",
      "TagKeys": [
        "k1"
      ],
      "ExistingStatus": ""
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

InvalidOperation.NotActivated

The associated resources service has not been activated.

The associated resource service is not activated for the user.

400

InvalidParameter.Status

The parameter Status is invalid.

Invalid parameter status.

400

NumberExceed.SettingNames

The maximum number of SettingNames is exceeded.

The maximum number of names is exceeded.

400

Invalid.SettingName

The parameter SettingName is invalid.

The entry SettingName is illegal.

403

NoPermission.Operator

No access permission, please contact the master account or permission administrator for authorization.

No permissions. Contact the owner of the Alibaba Cloud account or the permission administrator.

See [Error Codes](https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Tag/2018-08-28/ListAssociatedResourceRules#workbench-doc-change-demo) for a complete list.
