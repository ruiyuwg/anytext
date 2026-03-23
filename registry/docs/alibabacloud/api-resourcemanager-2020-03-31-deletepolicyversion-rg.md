Deletes a version of a permission policy.

## Operation description

**Note** The default version of a policy cannot be deleted.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/DeletePolicyVersion)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/DeletePolicyVersion)

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

VersionId

string

Yes

The ID of the policy version.

You can call the [ListPolicyVersions](/help/en/resource-management/api-listpolicyversions) operation to query the ID.

v3

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response parameters

Parameter

Type

Description

Example

object

The returned data.

RequestId

string

The request ID.

9B34724D-54B0-4A51-B34D-4512372FE1BE

## Examples

Sample success responses

`JSON`format

```
{
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

409

DeleteConflict.Policy.Version.Default

You cannot delete the default policy version.

You cannot delete the default policy version.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
