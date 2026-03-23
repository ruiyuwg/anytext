Creates an image component. Image components are used to store the builder template commands that are commonly used when you create images.

## Operation description

## [](#usage-notes)[](#)Usage notes

Take note of the following items:

-   You can create only custom image components.
-   Each version number of an image component must be unique. When you add a version of an image component to an image template, you can specify the component by its name and version number.
-   The content size of an image component cannot exceed 16 KB. For information about the commands supported by Image Builder, see [Commands supported by Image Builder](/help/en/ecs/user-guide/commands-supported-by-image-builder).

For more information, see [Image Builder](/help/en/ecs/user-guide/overview-33/).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateImageComponent)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateImageComponent)

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

ecs:CreateImageComponent

create

\*ImageComponent

`acs:ecs:{#regionId}:{#accountId}:imagecomponent/*`

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

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ResourceGroupId

string

No

The ID of the resource group.

rg-bp67acfmxazb4p\*\*\*\*

Tag

array<object>

No

The tags.

object

No

Key

string

No

The key of tag N. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain [http:// or https://](http://https://%E3%80%82). The tag key cannot start with acs: or aliyun.

TestKey

Value

string

No

The value of tag N. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain [http:// or https://](http://https://%E3%80%82). The tag value cannot start with acs:.

TestValue

Name

string

No

The name of the image component. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

**Note** If you do not specify `Name`, the return value of `ImageComponentId` is used.

testComponent

Description

string

No

The description. The description must be 2 to 256 characters in length and cannot start with [http:// or https://](http://https://%E3%80%82).

This is description.

SystemType

string

No

The type of the operating system supported by the image component.

Valid values:

-   Linux
-   Windows

Default value: Linux.

Linux

ComponentType

string

No

The type of the image component. Only image building components and image test components are supported.

Valid values:

-   Build
-   Test

Default value: Build.

**Note** Image building components can be used only in image building templates. Image test components can be used only in image test templates.

Build

Content

string

No

The content of the image component. The image component consists of multiple commands. The command content cannot exceed 16 KB in size. For information about the commands supported by Image Builder and the formats of the commands, see [Commands supported by Image Builder](/help/en/ecs/user-guide/commands-supported-by-image-builder).

RUN yum update -y

ClientToken

string

No

The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

ComponentVersion

string

No

The version number of the image component, which is used together with the name of the image component. The version number is in the <major>.<minor>.<patch> format. Set <major>, <minor>, and <patch> to non-negative integers.

Default value: (x + 1).0.0, in which x is the maximum major version number of the image component.

null

## Response parameters

Parameter

Type

Description

Example

object

ImageComponentId

string

The ID of the image component.

ic-bp67acfmxazb4p\*\*\*\*

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "ImageComponentId": "ic-bp67acfmxazb4p****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidCommand.Component

Image component does not support component command.

\-

400

InvalidName.Malformed

%s

\-

400

InvalidDescription.Malformed

%s

\-

400

InvalidSystemType.NotSupportedValue

%s

\-

400

InvalidComponentType.NotSupportedValue

%s

\-

400

InvalidContent.LengthExceeded

%s

\-

400

InvalidImageTemplateCommandSize.ExceededMaxNumber

%s

\-

400

InvalidImageTemplateCommand.NotSupported

%s

\-

400

InvalidCommandContent.RUN

%s

\-

400

InvalidCommandContent.ENV

%s

\-

400

InvalidCommandContent.WORKDIR

%s

\-

400

InvalidCommandContent.COPY

%s

\-

400

InvalidCommandContent.USER

%s

\-

400

InvalidCommandContent.CMD

%s

\-

400

InvalidCommandContent.ENTRYPOINT

%s

\-

400

MissingParameter.Content

%s

\-

400

EmptyCommandContent.RUN

%s.

If the RUN command exists in the template, you must specify RUN.

400

EmptyCommandContent.ENV

%s.

If the ENV command exists in the template, you must specify ENV.

400

EmptyCommandContent.LABEL

%s.

If the LABEL command exists in the template, you must specify LABEL.

400

EmptyCommandContent.COPY

%s.

If the COPY command exists in the template, you must specify COPY.

400

EmptyCommandContent.ENTRYPOINT

%s.

If the ENTRYPOINT command exists in the template, you must specify ENTRYPOINT.

400

EmptyCommandContent.CMD

%s.

If the CMD command exists in the template, you must specify CMD.

400

NotEmptyCommandContent.RESTART

%s.

If the RESTART command exists in the template, you must specify RESTART.

400

EmptyCommandContent.WORKDIR

%s.

If the WORKDIR command exists in the template, you must specify WORKDIR.

400

EmptyCommandContent.USER

%s.

If the USER command exists in the template, you must specify USER.

400

QuotaExceed.ImageComponent

%s.

Image component quota exceeded in current region.

400

InvalidParameter.Content

%s.

The image component content is invalid.

400

InvalidImage.OsTypeUnsupported

The specified base image does not support image building.

\-

400

InvalidParameter.ComponentVersion

The specified ComponentVersion is invalid.

The specified ComponentVersion is invalid.

403

InvalidComponentVersion.Exist

The specified ComponentVersion does exist with the specified Name.

The specified ComponentVersion does exist with the specified Name.

403

InvalidOperation.NoPermissionCreateServiceLinkedRole

You are not authorized to create Service-linked role. The system will automatically create it when the API is called for the first time. Check your RAM policies, and ensure that you are using the correct credentials.

You are not authorized to create Service-linked role. The system will automatically create it when the API is called for the first time. Check your RAM policies, and ensure that you are using the correct credentials.

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

404

NotSupportedCommand.FROM

%s

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImageComponent?updateTime=2024-12-26#workbench-doc-change-demo)

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImageComponent?updateTime=2024-12-17#workbench-doc-change-demo)

2024-10-10

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImageComponent?updateTime=2024-10-10#workbench-doc-change-demo)

2024-08-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImageComponent?updateTime=2024-08-08#workbench-doc-change-demo)

2023-03-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImageComponent?updateTime=2023-03-28#workbench-doc-change-demo)
