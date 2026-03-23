Queries the status of the Tag Policy feature.

## Operation description

This topic provides an example on how to call the API operation to query the status of the Tag Policy feature for the current logon account. The response shows that the Tag Policy feature in multi-account mode is enabled for the current logon account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Tag/2018-08-28/GetPolicyEnableStatus)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Tag/2018-08-28/GetPolicyEnableStatus)

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

tag:GetPolicyEnableStatus

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

Yes

The region ID. Set the value to cn-shanghai.

cn-shanghai

UserType

string

No

The mode of the Tag Policy feature. This parameter specifies a filter condition for the query. Valid values:

-   USER: single-account mode
-   RD: multi-account mode

For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](/help/en/resource-management/tag/user-guide/overview).

**Note** The value of this parameter is not case-sensitive.

RD

OpenType

string

No

The enabling type. Valid values:

-   TAG\_POLICY: the Tag Policy feature.
-   VERIFY\_NO\_TAG: the strong verification feature.
-   TAG\_POLICY\_NOTIFY: the notification feature that sends notifications for resources found to be non-compliant with the tag policy.

TAG\_POLICY

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

6C8DF1B1-C65F-5D3A-9FDA-26A4683BB36B

StatusModels

array<object>

The information of the Tag Policy feature.

StatusModels

object

The information of the Tag Policy feature.

Status

string

The status of the Tag Policy feature. Valid values:

-   PendingEnable: The feature is being enabled.
-   Enabled: The feature is enabled.
-   Closing: The feature is being disabled.
-   Disabled: The feature is disabled.

Enabled

UserType

string

The mode of the Tag Policy feature. Valid values:

-   USER: single-account mode
-   RD: multi-account mode

For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](/help/en/resource-management/tag/user-guide/overview).

RD

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "6C8DF1B1-C65F-5D3A-9FDA-26A4683BB36B",
  "StatusModels": [
    {
      "Status": "Enabled",
      "UserType": "RD"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-03-14

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Tag/2018-08-28/GetPolicyEnableStatus?updateTime=2024-03-14#workbench-doc-change-demo)
