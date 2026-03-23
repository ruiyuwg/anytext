Creates a service-linked role.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/CreateServiceLinkedRole)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/CreateServiceLinkedRole)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

ServiceName

string

Yes

The service name.

For more information about the service name, see [Alibaba Cloud services that support service-linked roles](/help/en/ram/product-overview/services-that-work-with-service-linked-roles).

polardb.aliyuncs.com

CustomSuffix

string

No

The suffix of the role name.

The role name (including its suffix) must be 1 to 64 characters in length and can contain letters, digits, periods (.), and hyphens (-).

For example, if the suffix is `Example`, the role name is `ServiceLinkedRoleName_Example`.

Example

Description

string

No

The description of the service-linked role.

You must configure this parameter for service-linked roles that support custom suffixes. Otherwise, the preset value is used and cannot be modified.

The description must be 1 to 1,024 characters in length.

Service Linked Role for PolarDB. PolarDB will use this role to access your resources in other services.

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

FE58D7CF-03BC-432A-B42D-BC3390C8C2E1

Role

object

The information about the role.

Arn

string

The Alibaba Cloud Resource Name (ARN) of the role.

acs:ram::177242285274\*\*\*\*:role/aliyunserviceroleforpolardb

AssumeRolePolicyDocument

string

The document of the trust policy for the role.

{\\"Statement\\":\[{\\"Action\\":\\"sts:AssumeRole\\",\\"Effect\\":\\"Allow\\",\\"Principal\\":{\\"Service\\":\[\\"polardb.aliyuncs.com\\"\]}}\],\\"Version\\":\\"1\\"}

CreateDate

string

The time when the role was created. The time is displayed in UTC.

2020-06-30T08:14:16Z

Description

string

The description of the role.

Service Linked Role for PolarDB. PolarDB will use this role to access your resources in other services.

IsServiceLinkedRole

boolean

Indicates whether the role is a service-linked role. Valid values:

-   true
-   false

true

RoleId

string

The ID of the role.

32833240981067\*\*\*\*

RoleName

string

The name of the role.

AliyunServiceRoleForPolarDB

RolePrincipalName

string

The role name that uses a domain name as the suffix.

AliyunServiceRoleForPolarDB@role.test.onaliyunservice.com

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "FE58D7CF-03BC-432A-B42D-BC3390C8C2E1",
  "Role": {
    "Arn": "acs:ram::177242285274****:role/aliyunserviceroleforpolardb",
    "AssumeRolePolicyDocument": "{\\\"Statement\\\":[{\\\"Action\\\":\\\"sts:AssumeRole\\\",\\\"Effect\\\":\\\"Allow\\\",\\\"Principal\\\":{\\\"Service\\\":[\\\"polardb.aliyuncs.com\\\"]}}],\\\"Version\\\":\\\"1\\\"}",
    "CreateDate": "2020-06-30T08:14:16Z",
    "Description": "Service Linked Role for PolarDB. PolarDB will use this role to access your resources in other services.",
    "IsServiceLinkedRole": true,
    "RoleId": "32833240981067****",
    "RoleName": "AliyunServiceRoleForPolarDB",
    "RolePrincipalName": "AliyunServiceRoleForPolarDB@role.test.onaliyunservice.com"
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.CustomSuffix.NotAllowed

Custom suffix is not allowed for this Service Linked Role.

Custom suffix is not allowed for this Service Linked Role.

400

InvalidParameter.CustomSuffix.InvalidChars

The parameter CustomSuffix contains invalid characters.

The parameter CustomSuffix contains invalid characters.

400

InvalidParameter.CustomSuffix.Length

The maximum length of the parameter CustomSuffix is exceeded.

The maximum length of the parameter CustomSuffix is exceeded.

400

InvalidParameter.Description.NotAllowed

Custom description is not allowed for default service linked role.

\-

400

InvalidParameter.Description.Length

The maximum length of the description is exceeded. It must not exceed 1024 characters.

The maximum length of the description is exceeded. It must not exceed 1024 characters.

404

EntityNotExist.Service

The service does not exist.

The service does not exist.

409

EntityAlreadyExists.Role

The role already exists.

The role already exists.

409

LimitExceeded.Role

The maximum number of roles is exceeded.

The maximum number of roles is exceeded.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
