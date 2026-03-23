Modifies a global policy that is associated with a cloud resource.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/ModifyResourceCenterPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/ModifyResourceCenterPolicy)

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

ecd:ModifyResourceCenterPolicy

none

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

ResourceType

string

Yes

The resource type.

Valid values:

-   app: cloud applications.
-   desktop: cloud computers.

desktop

ResourceIds

array

Yes

The resource IDs. You can specify up to 100 resource IDs.

string

Yes

The resource ID.

ecd-00001

ResourceRegionId

string

Yes

The region ID of the resource.

cn-hangzhou

ProductType

string

Yes

The service type.

Valid values:

-   app: cloud applications.
-   resourceGroup: resource groups.
-   desktop: cloud computers.
-   desktopGroup: cloud computer shares.

desktop

PolicyGroupType

string

Yes

The policy type.

Valid values:

-   general: a general policy.

general

PolicyGroupIds

array

Yes

The IDs of the cloud computer policies that you want to associate with cloud computers.

**Note** You can specify up to one cloud computer policy that takes effect globally, and up to four cloud computer policies that apply to specific IP addresses. If multiple cloud computer policies are configured for global enforcement, only the earliest-associated policy will take effect

string

Yes

The ID of the cloud computer policy that you want to associate with cloud computers.

pg-gx2x1dhsmthe9\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

51592A88-0F2C-55E6-AD2C-2AD9C10D\*\*\*\*

ModifyResults

array<object>

The modification results.

modifyResult

object

The modification result.

ResourceId

string

The resource ID.

ecd-e254cpyt9bb\*\*\*\*\*

CheckResult

boolean

The verification result.

true

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "51592A88-0F2C-55E6-AD2C-2AD9C10D****",
  "ModifyResults": [
    {
      "ResourceId": "ecd-e254cpyt9bb*****",
      "CheckResult": true
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

No change history
