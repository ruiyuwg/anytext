Ignores the evaluation results of a rule for specific resources. You can also set a time period to ignore the rule. When the ignore period expires, the system automatically resumes displaying the evaluation results of the rule for the resources.

## Operation description

After a non-compliant resource is ignored, the rule still evaluates the resource. The evaluation result is Ignored.

This topic provides an example of how to ignore the evaluation results of the rule `cr-7e72626622af0051****` for a specified non-compliant resource in the Alibaba Cloud account `100931896542****`. The region ID of the resource is `cn-beijing`, the resource type is `ACS::SLB::LoadBalancer`, and the resource ID is `lb-hp3a3b4ztyfm2plgm****`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/IgnoreEvaluationResults)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/IgnoreEvaluationResults)

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

config:IgnoreEvaluationResults

update

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

ConfigRuleId

string

Yes

The rule ID.

For more information about how to obtain the rule ID, see [ListConfigRules](/help/en/cloud-config/latest/listconfigrules).

cr-7e72626622af0051\*\*\*\*

Resources

array<object>

Yes

The list of resources to be ignored.

object

No

The list of resources to be ignored.

ResourceAccountId

integer

Yes

The ID of the Alibaba Cloud account to which the resource belongs.

100931896542\*\*\*\*

ResourceType

string

Yes

The resource type.

For more information about how to obtain the resource type, see [ListDiscoveredResources](/help/en/cloud-config/latest/listdiscoveredresources).

ACS::SLB::LoadBalancer

Region

string

Yes

The ID of the region to which the resource belongs.

For more information about how to obtain the ID of the region to which the resource belongs, see [ListDiscoveredResources](/help/en/cloud-config/latest/listdiscoveredresources).

cn-beijing

ResourceId

string

Yes

The resource ID.

For more information about how to obtain the resource ID, see [ListDiscoveredResources](/help/en/cloud-config/latest/listdiscoveredresources).

lb-hp3a3b4ztyfm2plgm\*\*\*\*

Reason

string

No

The reason for ignoring the resources.

Test ignore.

IgnoreDate

string

No

The date on which the ignored evaluation results are automatically restored.

**Note**

If this parameter is left empty, the ignored evaluation results are not automatically restored. You must manually restore them.

2022-06-01

For more information about common request parameters, see [Common parameters](/help/en/cloud-config/latest/common-parameters-2).

## Response elements

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

1840CBF2-0B0B-59F2-9E84-07B38267A279

## Examples

Success response

`JSON` format

```
{
  "RequestId": "1840CBF2-0B0B-59F2-9E84-07B38267A279"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NoPermission

You are not authorized to perform this operation.

You are not authorized to perform this operation.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/IgnoreEvaluationResults#workbench-doc-change-demo) for a complete list.
