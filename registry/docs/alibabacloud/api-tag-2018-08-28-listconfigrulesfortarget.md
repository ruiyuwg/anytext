Queries a list of tag detection tasks for an object.

## Operation description

If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the tag detection tasks for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the tag detection tasks for the Root folder, a folder other than the Root folder, or a member in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](/help/en/resource-management/tag/user-guide/overview).

This topic provides an example on how to call the API operation to query the tag detection tasks for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that only one tag detection task exists.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Tag/2018-08-28/ListConfigRulesForTarget)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Tag/2018-08-28/ListConfigRulesForTarget)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

tag:ListConfigRulesForTarget

get

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

No

The region ID. Set the value to cn-shanghai.

cn-shanghai

TargetId

string

No

The ID of the object. This parameter specifies a filter condition for the query.

134254031178\*\*\*\*

MaxResult

integer

No

The number of entries to return on each page.

Default value: 50. Maximum value: 1000.

50

NextToken

string

No

The token that is used to start the next query.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

TagKey

string

No

The tag key. This parameter specifies a filter condition for the query.

CostCenter

TargetType

string

No

The type of the object. This parameter specifies a filter condition for the query. Valid values:

-   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
-   ROOT: the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
-   FOLDER: a folder other than the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
-   ACCOUNT: a member in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.

**Note** The value of this parameter is not case-sensitive.

ACCOUNT

PolicyType

string

No

The use scenario of the tag policy. This parameter specifies a filter condition for the query. Valid values:

-   tags: enables tags with specified tag values to be added to resources.
-   rg\_inherit: enables resources in a resource group to automatically inherit tags from the resource group.

tags

UserType

string

No

The mode of the Tag Policy feature. This parameter specifies a filter condition for the query. Valid values:

-   USER: single-account mode
-   RD: multi-account mode

For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](/help/en/resource-management/tag/user-guide/overview).

**Note** The value of this parameter is not case-sensitive.

USER

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

Data

array<object>

The tag detection tasks.

Data

object

The tag detection tasks.

TargetId

string

The ID of the object.

134254031178\*\*\*\*

TargetType

string

The type of the object. Valid values:

-   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
-   ROOT: the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
-   FOLDER: a folder other than the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
-   ACCOUNT: a member in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.

USER

ConfigRuleId

string

The ID of the rule.

cr-0lb4866180880069\*\*\*\*

AggregatorId

string

The ID of the account group.

You can use the ID to query the content of the related resource non-compliance report in Cloud Config.

**Note** This parameter is returned only if you use the Tag Policy feature in multi-account mode.

ca-efdc33dc9b37002d\*\*\*\*

TagKey

string

The tag key.

CostCenter

Remediation

boolean

Indicates whether automatic remediation is enabled. Valid values:

-   true
-   false

false

PolicyType

string

The use scenario of the tag policy. Valid values:

-   tags: enables tags with specified tag values to be added to resources.
-   rg\_inherit: enables resources in a resource group to automatically inherit tags from the resource group.

tags

TagValue

string

The tag value for automatic remediation.

Project

RequestId

string

The ID of the request.

7126AECD-D7AD-5073-8E88-DD2BD1FC139E

NextToken

string

Indicates whether the next query is required.

-   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
-   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "Data": [
    {
      "TargetId": "134254031178****",
      "TargetType": "USER",
      "ConfigRuleId": "cr-0lb4866180880069****",
      "AggregatorId": "ca-efdc33dc9b37002d****",
      "TagKey": "CostCenter",
      "Remediation": false,
      "PolicyType": "tags",
      "TagValue": "Project"
    }
  ],
  "RequestId": "7126AECD-D7AD-5073-8E88-DD2BD1FC139E",
  "NextToken": "caeba0bbb2be03f84eb48b699f0a****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-09-01

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Tag/2018-08-28/ListConfigRulesForTarget?updateTime=2023-09-01#workbench-doc-change-demo)
