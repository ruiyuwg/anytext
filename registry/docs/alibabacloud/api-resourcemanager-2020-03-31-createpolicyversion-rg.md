Creates a version for a permission policy.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/CreatePolicyVersion)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/CreatePolicyVersion)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

PolicyName

string

Yes

The name of the permission policy.

The name must be 1 to 128 characters in length and can contain letters, digits, and hyphen (-).

OSS-Administrator

PolicyDocument

string

Yes

The document of the permission policy.

The document must be 1 to 6,144 characters in length.

{ "Statement": \[{ "Action": \["oss:\*"\], "Effect": "Allow", "Resource": \["acs:oss:\*:\*:\*"\]}\], "Version": "1"}

SetAsDefault

boolean

No

Specifies whether to set the policy version as the default version.

-   false (default)
-   true

false

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

2015-01-23T12:33:18

IsDefaultVersion

boolean

Indicates whether the policy version is the default version.

false

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
    "CreateDate": "2015-01-23T12:33:18",
    "IsDefaultVersion": false,
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

InvalidParameter.PolicyName.InvalidChars

The policy name contains invalid characters. It must only contain upper or lower case letters, numbers, and dash (-).

The policy name contains invalid characters. It must only contain upper or lower case letters, numbers, and dash (-).

400

InvalidParameter.PolicyName.Length

The length of the policy name is invalid. It must be 1 to 128 characters in length.

The maximum length of the policy name is exceeded. It must be 1 to 128 characters in length.

400

InvalidParameter.PolicyDocument.Length

The maximum length of the policy document is exceeded. It must not exceed 6144 characters.

\-

404

EntityNotExist.Policy

The policy does not exist.

The policy does not exist.

409

LimitExceeded.Policy.Version

The maximum number of policy versions is exceeded.

The maximum number of policy versions is exceeded.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
