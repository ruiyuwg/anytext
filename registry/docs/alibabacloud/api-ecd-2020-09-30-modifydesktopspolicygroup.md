Changes an existing cloud computer policy for cloud computers.

## Operation description

The cloud computers for which you want to change their policies must be in the Running state.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/ModifyDesktopsPolicyGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/ModifyDesktopsPolicyGroup)

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

ecd:ModifyDesktopsPolicyGroup

update

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

Yes

The region ID. You can call the [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) operation to query the regions supported by Elastic Desktop Service (EDS).

cn-hangzhou

PolicyGroupId

string

Yes

The ID of the cloud computer policy that you want to associate with cloud computers.

**Note** If the `PolicyGroupIds` parameter is used, ignore the current parameter.

pg-gx2x1dhsmthe9\*\*\*\*

DesktopId

array

Yes

The cloud computer IDs. You can specify one or more cloud computers IDs. The value is a JSON array.

string

Yes

The cloud computer ID.

ecd-ia2zw38bi6cm7\*\*\*\*

PolicyGroupIds

array

No

The IDs of the cloud computer policies that you want to associate with cloud computers.

**Note** You can specify up to one cloud computer policy that takes effect globally, and up to four cloud computer policies that apply to specific IP addresses. If you specify more than one cloud computer policy that takes effect globally, only the policy first associate with the cloud computer can take effect.

string

No

The ID of the cloud computer policy that you want to associate with cloud computers.

pg-gx2x1dhsmthe9\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The ID of the request.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

ModifyResults

array<object>

The request results.

ModifyResult

object

The request result.

Code

string

The returned message. If the request was successful, `success` is returned. If the request failed, an error message is returned.

success

Message

string

The error message returned if the request failed. This parameter is not returned if the value of Code is success.\`\`

The specified param DesktopId ecd-ia2zw38bi6cm7\*\*\*\* is not found.

DesktopId

string

The cloud computer ID.

ecd-7w78ozhjcwa3u\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "ModifyResults": [
    {
      "Code": "success",
      "Message": "The specified param DesktopId ecd-ia2zw38bi6cm7**** is not found.",
      "DesktopId": "ecd-7w78ozhjcwa3u****"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-11-24

The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/ModifyDesktopsPolicyGroup?updateTime=2022-11-24#workbench-doc-change-demo)
