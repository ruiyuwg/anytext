Queries the information about a version of a permission policy.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/GetPolicyVersion)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/GetPolicyVersion)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

PolicyType

string

Yes

The type of the permission policy. Valid values:

-   Custom
-   System

Custom

PolicyName

string

Yes

The name of the permission policy.

The name must be 1 to 128 characters in length and can contain letters, digits, and hyphen (-).

OSS-Administrator

VersionId

string

Yes

The ID of the policy version.

v3

## Response parameters

Parameter

Type

Description

Example

object

PolicyVersion

object

The information about the policy version.

CreateDate

string

The time when the policy version was created.

2015-01-23T12:33:18Z

IsDefaultVersion

boolean

Indicates whether the policy version is the default version.

false

PolicyDocument

string

The document of the permission policy.

{ \\"Statement\\": \[{ \\"Action\\": \[\\"oss:\*\\"\], \\"Effect\\": \\"Allow\\", \\"Resource\\": \[\\"acs:oss:\*:\*:\*\\"\]}\], \\"Version\\": \\"1\\"}

VersionId

string

The ID of the policy version.

v3

RequestId

string

The request ID.

9B34724D-54B0-4A51-B34D-4512372FE1BE

## Examples

Sample success responses

`JSON`format

```
{
  "PolicyVersion": {
    "CreateDate": "2015-01-23T12:33:18Z",
    "IsDefaultVersion": false,
    "PolicyDocument": "{ \\\"Statement\\\": [{ \\\"Action\\\": [\\\"oss:*\\\"], \\\"Effect\\\": \\\"Allow\\\", \\\"Resource\\\": [\\\"acs:oss:*:*:*\\\"]}], \\\"Version\\\": \\\"1\\\"}",
    "VersionId": "v3"
  },
  "RequestId": "9B34724D-54B0-4A51-B34D-4512372FE1BE"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.PolicyType

The specified policy type is invalid.

The specified policy type is invalid.

400

InvalidParameter.PolicyName.InvalidChars

The policy name contains invalid characters. It must only contain upper or lower case letters, numbers, and dash (-).

The policy name contains invalid characters. It must only contain upper or lower case letters, numbers, and dash (-).

400

InvalidParameter.PolicyName.Length

The length of the policy name is invalid. It must be 1 to 128 characters in length.

The maximum length of the policy name is exceeded. It must be 1 to 128 characters in length.

400

InvalidParameter.VersionId.Format

The specified version ID is invalid.

The specified version ID is invalid.

404

EntityNotExist.Policy

The policy does not exist.

The policy does not exist.

404

EntityNotExist.Policy.Version

The policy version does not exist.

The policy version does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
