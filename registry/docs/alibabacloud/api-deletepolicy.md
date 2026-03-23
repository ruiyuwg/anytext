Deletes a permission policy.

## Operation description

**Note**

-   Before you delete a permission policy, you must delete its all non-default versions. For information about how to delete a policy version, see [DeletePolicyVersion](/help/en/resource-management/api-deletepolicyversion) .
    
-   Before you delete a permission policy, you must make sure that the policy is not attached to a RAM user, a RAM user group, or a RAM role. For information about how to detach a policy, see [DetachPolicy](/help/en/resource-management/api-detachpolicy) .
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/DeletePolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/DeletePolicy)

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

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

898FAB24-7509-43EE-A287-086FE4C44394

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "898FAB24-7509-43EE-A287-086FE4C44394"
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

404

EntityNotExist.Policy

The policy does not exist.

The policy does not exist.

409

DeleteConflict.Policy.User

Before deleting the policy, it may not be attached to any user.

The policy must not be attached to any user when you delete it.

409

DeleteConflict.Policy.Group

The policy cannot be attached to any group when you delete it.

The policy cannot be attached to any group when you delete it.

409

DeleteConflict.Policy.Version

You must delete all non-default versions before you delete the policy.

You must delete all non-default versions before you delete the policy.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
