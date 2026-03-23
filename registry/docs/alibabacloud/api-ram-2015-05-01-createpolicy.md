Creates a custom policy.

## Operation description

For more information about policies, see [Policy overview](/help/en/ram/policy-overview).

This topic provides an example on how to create a custom policy to query Elastic Compute Service (ECS) instances in a specific region.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ram/2015-05-01/CreatePolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ram/2015-05-01/CreatePolicy)

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

ram:CreatePolicy

create

\*Policy

`acs:ram:*:{#accountId}:policy/{#PolicyName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

PolicyName

string

No

The name of the policy.

The name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).

View-ECS-instances-in-a-specific-region

Description

string

No

The description of the policy.

The description must be 1 to 1,024 characters in length.

查看指定地域ECS实例

PolicyDocument

string

No

The document of the policy.

The document must be 1 to 6,144 characters in length.

For more information about policy elements and sample policies, see [Policy elements](/help/en/ram/policy-elements) and [Overview of sample policies](/help/en/ram/user-guide/overview-of-sample-policies).

{"Statement": \[{"Effect": "Allow","Action": "ecs:Describe\*","Resource": "acs:ecs:cn-qingdao:\*:instance/\*"}\],"Version": "1"}

Tag

array<object>

No

The tags.

object

No

The tag.

Key

string

No

The key of the tag.

owner

Value

string

No

The value of the tag.

alice

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

Policy

object

The information about the policy.

DefaultVersion

string

The version of the policy. Default value: v1.

v1

Description

string

The description of the policy.

查看指定地域ECS实例

PolicyName

string

The name of the policy.

View-ECS-instances-in-a-specific-region

CreateDate

string

The time when the policy was created.

2021-10-13T02:46:57Z

PolicyType

string

The type of the policy. Valid values:

-   Custom
    
-   System
    

Custom

RequestId

string

The request ID.

BA34C54A-C2B1-5A65-B6B0-B5842C1DB4DA

## Examples

Success response

`JSON` format

```
{
  "Policy": {
    "DefaultVersion": "v1",
    "Description": "查看指定地域ECS实例",
    "PolicyName": "View-ECS-instances-in-a-specific-region",
    "CreateDate": "2021-10-13T02:46:57Z",
    "PolicyType": "Custom"
  },
  "RequestId": "BA34C54A-C2B1-5A65-B6B0-B5842C1DB4DA"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ram/2015-05-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ram/2015-05-01/CreatePolicy#workbench-doc-change-demo) for a complete list.
