Modifies the metadata access configurations of instances in a specific region, including whether to enable the metadata access channel and whether to forcefully use the security hardening mode to access instance metadata.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceMetadataOptions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceMetadataOptions)

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

ecs:ModifyInstanceMetadataOptions

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

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

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceId

string

No

The ID of the instance.

i-bp67acfmxaz\*\*\*\*

HttpEndpoint

string

Yes

Specifies whether to enable the access channel for instance metadata. Valid values:

-   enabled
-   disabled

Default value: enabled.

**Note** For information about instance metadata, see [Obtain instance metadata](/help/en/doc-detail/49122.html).

enabled

HttpTokens

string

No

Specifies whether to forcefully use the security hardening mode (IMDSv2) to access instance metadata. Valid values:

-   optional: does not forcefully use the security hardening mode (IMDSv2).
-   required: forcefully uses the security hardening mode (IMDSv2). After you set this parameter to required, you cannot access instance metadata in normal mode.

Default value: optional.

**Note** For more information about modes of accessing instance metadata, see [Obtain instance metadata](/help/en/doc-detail/150575.html).

optional

HttpPutResponseHopLimit

integer

No

**Note** This parameter is not publicly available.

1

InstanceMetadataTags

string

No

Specifies whether to enable the access channel for instance metadata. Valid values:

-   enabled
-   disabled

Default value: disabled.

**Note** The tag key must be a combination of letters, digits, @, colons (:), underscores (\_), hyphens (-), periods (.), equal signs (=), and commas (,). The tag key cannot be "." or "..". Otherwise, the tag key cannot be accessed in the metadata.

null

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidHttpEndpoint.NotSupported

The specified HttpEndpoint not supported, you can use enabled(default) or disabled.

The specified HttpEndpoint parameter is invalid. The valid values of this parameter are enabled and disabled. The default value is enabled.

400

InvalidHttpTokens.NotSupported

The specified HttpTokens not supported, you can use optional(default) or required.

The specified HttpTokens parameter is invalid. The valid values of this parameter are optional and required. The default value is optional.

400

InvalidHttpPutResponseHopLimit.NotSupported

The specified HttpPutResponseHopLimit not supported, more than 1 and less than 64 is reasonable.

The specified HttpPutResponseHopLimit parameter is invalid. The valid values of this parameter are 1 to 64.

400

InvalidInstanceMetadataTags.NotSupported

The specified InstanceMetadataTags not supported.

\-

400

InvalidImdsAccessPolicyId.NotFound

The specified parameter ImdsAccessPolicyId is not found.

The specified parameter ImdsAccessPolicyId is not found.

404

InvalidInstanceId.NotFound

The specified InstanceId is not found.

The specified instance ID does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceMetadataOptions?updateTime=2025-04-21#workbench-doc-change-demo)

2025-01-15

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceMetadataOptions?updateTime=2025-01-15#workbench-doc-change-demo)

2023-07-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceMetadataOptions?updateTime=2023-07-17#workbench-doc-change-demo)
