Associates resources with an alert rule.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cms/2019-01-01/CreateMetricRuleResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cms/2019-01-01/CreateMetricRuleResources)

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

cms:CreateMetricRuleResources

create

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

RuleId

string

No

The ID of the alert rule.

i-2ze3w55tr2rcpejpcfap\_59c96b85-0339-4f35-ba66-ae4e34d3\*\*\*\*

Overwrite

string

No

Specifies whether to overwrite existing resources. Valid values:

-   true: The resources submitted this time overwrite the previously associated resources.
-   false: The resources submitted this time do not overwrite the previously associated resources. The associated resources after submission include the previously associated resources and the resources submitted this time.

false

Resources

string

Yes

The resources that are associated with the alert rule. Set the value to a JSON array.

**Note** You can add up to 100 resources each time. An alert rule can be associated with up to 3,000 resources.

\[{"instanceId":"i-a2d5q7pm3f9yr29e\*\*\*\*"}\]

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The response code.

**Note** The status code 200 indicates that the request was successful.

200

Message

string

The returned message.

success

RequestId

string

The request ID.

0671A721-0D7A-4F11-BB77-2416325D65AB

Success

boolean

Indicates whether the request was successful. Valid values: true: The request was successful. false: The request failed.

true

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "success",
  "RequestId": "0671A721-0D7A-4F11-BB77-2416325D65AB",
  "Success": true
}
```

## Error codes

HTTP status code

Error code

Error message

400

%s

%s

500

InternalError

The request processing has failed due to some unknown error.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
